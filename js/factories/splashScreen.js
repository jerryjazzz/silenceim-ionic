/**
 * Cordova splash screen
 */
function factory($ionicPlatform) {

  function ready(cb) {
    $ionicPlatform.ready(function () {
      const splashScreen = navigator.splashscreen;
      if (splashScreen) cb(splashScreen);
    });
  }

  function hide() {
    ready(function(splashScreen) {
      splashScreen.hide();
    });
  }

  return {
    hide
  }
}

angular.module('starter').factory('splashScreen', ['$ionicPlatform', factory]);
