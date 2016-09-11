function ctrl($scope, preferences, roomIO) {
  $scope.room = roomIO.getCredentials();
  $scope.aes = preferences.is('aes');
  $scope.rc4 = preferences.is('rc4');
  $scope.pgp = preferences.is('pgp');
}

angular.module('starter.controllers').controller('ImRoomCtrl', ['$scope', 'preferences', 'roomIO', ctrl]);
