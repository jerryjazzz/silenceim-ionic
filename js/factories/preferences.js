function factory(settings) {

  function is(value) {
    switch (value) {
      case 'aes':
        return !!settings.get('aesKey');
      case 'rc4':
        return !!settings.get('rc4Key');
      case 'pgp':
        return !!settings.get('pgpBuddyPublicKey');
      default:
        return false;
    }
  }

  return {
    is
  }
}

angular.module('starter').factory('preferences', ['settings', factory]);
