function ctrl($scope, roomIO) {
  $scope.room = roomIO.getCredentials();
}

angular.module('starter.controllers').controller('ImRoomCtrl', ['$scope', 'roomIO', ctrl]);
