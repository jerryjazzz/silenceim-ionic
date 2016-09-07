function factory() {

  let cidCounter = 0;

  class Message {
    /**
     *
     * @param body {string} pass a plain text if you wish to encode a message
     * @param kind {string} system, in, out
     */
    constructor({body, kind}) {
      this.body = body;
      this.kind = kind;
      this.cid = ++cidCounter;
    }

    set(key, value) {
      this[key] = value
    }

    get(key) {
      return this[key]
    }
  }

  return Message
}

angular.module('starter').factory('Message', [factory]);
