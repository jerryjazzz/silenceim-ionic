function config($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
}

angular.module('starter').config(['$ionicConfigProvider', config]);
