function factory(socket) {

  const messages = [];

  // subscribe on this on controller init to render
  // previously pushed messages in history
  const historyPub = new Rx.BehaviorSubject(messages);
  const pushPub = new Rx.Subject();

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

  return {
    find,
    push,
    historyPub,
    pushPub,
    messages,
    prune
  }
}

angular.module('starter').factory('chatIO', ['socket', factory]);
