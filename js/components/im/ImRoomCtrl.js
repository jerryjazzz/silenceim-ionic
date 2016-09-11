function ctrl($scope, preferences, roomIO) {
  $scope.room = roomIO.getCredentials();
  $scope.is = preferences.is;
}

angular.module('starter.controllers').controller('ImRoomCtrl', ['$scope', 'preferences', 'roomIO', ctrl]);
