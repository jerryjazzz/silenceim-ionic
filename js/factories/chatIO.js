function factory(socket) {

  const messages = [];

  // subscribe on this on controller init to render
  // previously pushed messages in history
  const historyPub = new Rx.BehaviorSubject(messages);
  const pushPub = new Rx.Subject();
  const updatePub = new Rx.Subject();

  /**
   * Exceptions
   * @namespace
   */
  const exceptions = {
    notFoundError: function(message) {
      this.toString = function() { return `chatIO NOT FOUND: ${this.message}`; };
      this.message = message;
    },
  };

  /**
   * @param message {message}
   * @param params {object}
   */
  function update(message, params) {
    $.each(params, function(k, v) {
      message.set(k, v);
    });
    updatePub.onNext(message);
  }

  function prune() {
    messages.length = 0;
  }

  /**
   * @param cid {number}
   * @returns {Message}
   */
  function find(cid) {
    let msg = messages.find((message)=> message.cid === cid);
    if (!msg) { throw new exceptions.notFoundError(`cid = ${cid}`) }
    return msg
  }

  /**
   * @param message {message}
   * @returns {message}
   */
  function push(message) {
    let pushedMsg = messages.push(message);
    pushPub.onNext(message);
    // manageStackSize();
    return pushedMsg;
  }

  /**
   * @param message
   */
  function emit(message) {
    message.enc().then(function(output) {
      const cipOptions = output.cipResults.map(function(result) {
        return $.extend({name: result.name}, result.publicData);
      });

      socket.emit('chat:message:post', {cipOutPut: output.outPut, cipOptions: cipOptions}, function() {
        update(message, {sent: true});
      });
    });
  }

  return {
    find,
    push,
    emit,
    prune,
    messages,
    historyPub,
    pushPub,
    updatePub
  }
}

angular.module('starter').factory('chatIO', ['socket', factory]);
