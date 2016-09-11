/* global enigma */

function factory() {

  let cidCounter = 0;

  class Message {
    /**
     *
     * @param body {string} pass a plain text if you wish to encode a message
     * @param kind {string} system, in, out
     * @param user {object} user params
     * @param cipOutPut {string} encoded text
     * @param cipOptions {Array<Object>}
     */
    constructor({body, kind, user, cipOutPut, cipOptions=[]}) {
      this.body = body;
      this.kind = kind;
      this.cid = ++cidCounter;
      this.user = user;
      this.cipOutPut = cipOutPut;
      this.cipOptions = cipOptions;
    }

    set(key, value) {
      this[key] = value
    }

    get(key) {
      return this[key]
    }

    /**
     * @returns {promise}
     */
    enc() {
      return enigma.enc(this.body, this.cipOptions);
    }

    /**
     * @returns {promise}
     */
    dec(cipOptions) {
      return enigma.dec(this.cipOutPut, cipOptions);
    }
  }

  return Message
}

angular.module('starter').factory('Message', [factory]);
