function run($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}

angular.module('starter').run(['$ionicPlatform', run]);
