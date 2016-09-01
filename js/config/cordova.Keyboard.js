function run($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar above the keyboard
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
  });
}

angular.module('starter').run(['$ionicPlatform', run]);
