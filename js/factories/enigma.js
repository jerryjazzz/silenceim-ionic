/**
 * Angular wrapper for enigma(c)
 */
function factory() {

  /**
   * @param passphrase {string}
   * @param iterations {number}
   * @param length {number} bit ex 256
   * @returns {Promise}
   */
  function keyGen(passphrase, {iterations, length}) {
    return new Promise(function(resolve, reject) {
      require(['enigma/keyGen'], function(keyGen) {
        try {
          resolve(keyGen.hex(passphrase, {iterations, length}));
        } catch(e) {
          reject(e)
        }
      }, function(e) {
        reject(e);
      });
    });
  }

  /**
   * @param bit {number} like 4096
   * @returns {Promise}
   */
  function pgpKeypairGen(bit) {

    const replace = function(text) {
      return text
        .replace(/Version: OpenPGP.js v/, 'Version: ')
        .replace(/Comment.*/, "Comment: SilenceIM");
    };

    return new Promise(function(resolve, reject) {
      require(['openpgp'], function(openpgp) {

        const promise = openpgp.generateKey({
          numBits: bit,
          userIds: [{name: 'anonymous', email: 'anonymous@example.com'}]
        });

        promise.then(function(result) {
          resolve({
            privateKey: replace(result.privateKeyArmored),
            publicKey: replace(result.publicKeyArmored)
          })
        });

        promise.catch(function(e) {
          reject(e);
        });

      }, function(e) {
        reject(e);
      });
    });
  }


  /**
   * Proxy method
   * @params direction {string} enc/dec
   * @params proxyArgs {array} proxy params for enigma
   * @returns {Promise}
   */
  function produce(direction, proxyArgs) {
    return new Promise(function(resolve, reject) {
      require(['enigma'], function(enigma) {
        enigma[direction](...proxyArgs).then(function(result) {
          resolve(result);
        }).catch(function(e) {
          reject(e);
        });
      }, function(e) {
        reject(e);
      });
    });
  }

  return {
    keyGen,
    pgpKeypairGen,

    enc: function() {
      return produce('enc', arguments)
    },

    dec: function() {
      return produce('dec', arguments)
    },
  }
}

angular.module('starter').factory('enigma', [factory]);
