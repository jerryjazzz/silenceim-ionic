function factory() {

  /**
   * @returns {boolean}
   */
  function isLocalhost() {
    const isFile = document.location.href.startsWith('file:');
    const cordovaCompiled = $('body').hasClass('platform-webview');
    return (isFile && !cordovaCompiled);
  }

  return {
    isLocalhost,
  }
}

angular.module('starter').factory('host', [factory]);
