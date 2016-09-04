function factory() {

  /**
   * @returns {boolean}
   */
  function isLocalhost() {
    return !$('body').hasClass('platform-webview');
  }

  return {
    isLocalhost,
  }
}

angular.module('starter').factory('host', [factory]);
