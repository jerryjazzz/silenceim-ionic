/* global enigma */

function factory(settings, enigma) {

  let cidCounter = 0;

  class Message {
    /**
     *
     * @param body {string} pass a plain text if you wish to encode a message
     * @param kind {string} system, in, out
     * @param user {object} user params
     * @param ct {string} cipher text
     * @param cd {Array<Object>} ciphers data
     */
    constructor({body, kind, user, ct, cd}) {
      this.body = body;
      this.kind = kind;
      this.cid = ++cidCounter;
      this.user = user;
      this.ct = ct;
      this.cd = cd;
    }

    encCd() {
      const opts = [];
      const rc4Key = settings.get('rc4Key');

      if (rc4Key) {
        opts.push({name: 'rc4', key: rc4Key});
      }

      return opts;
    }

    decCd() {
      return this.cd.map(function(opts) {
        const extra = {};

        switch (opts.name) {
          case 'rc4':
            extra.key = settings.get('rc4Key');
        }

        return $.extend(opts, extra);
      });
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
      return enigma.enc(this.body, this.encCd());
    }

    /**
     * @returns {promise}
     */
    dec() {
      return enigma.dec(this.ct, this.decCd());
    }
  }

  return Message;
}

angular.module('starter').factory('Message', ['settings', 'enigma', factory]);
