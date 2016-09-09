function factory() {

  const messagesSize = 20;
  const messages = [];

  const pushPub = new Rx.Subject();
  const deletePub = new Rx.Subject();

  let cidCounter = 0;

  function add(kind, prefix, msg) {
    const message = {cid: ++cidCounter, kind: kind, prefix: prefix, message: msg, date: new Date()};

    messages.push(message);
    pushPub.onNext(message);

    if (messages.length >= messagesSize) {
      deletePub.onNext(messages.shift());
    }
  }

  function stringify(value) {
    if (value === undefined) {
      return '';
    } else {
      return JSON.stringify(value);
    }
  }

  return {
    messages,
    pushPub,
    deletePub,

    info: function(prefix, msg) {
      add('info', prefix, stringify(msg));
    },

    error: function(prefix, msg) {
      add('error', prefix, stringify(msg));
    }
  }
}

angular.module('starter').factory('logr', [factory]);
