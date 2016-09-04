function factory() {

  /**
   * @returns {boolean}
   * TODO 
   */
  function isLocalhost() {
    // return !$('body').hasClass('platform-webview');
    return false
  }

  return {
    isLocalhost,
  }
}

angular.module('starter').factory('host', [factory]);
