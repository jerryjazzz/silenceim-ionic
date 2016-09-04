function ctrl($scope, $ionicPopup, socket, roomIO) {
  // TODO generate random names
  $scope.model = {
    roomName: '',
    userName: ''
  };

  const connSub = socket.connPub.subscribe(function(connected) {
    $scope.$evalAsync(function() {
      $scope.connected = connected;
    });
  });

  $scope.submit = function() {
    roomIO.join($scope.model, function(_, e) {
      $ionicPopup.alert({
        title: 'Connection rejected',
        template: e
      });
    })
  };

  $scope.$on('$destroy', function() {
    connSub.dispose();
  });
}

angular.module('starter.controllers').controller('LandingCtrl', ['$scope', '$ionicPopup', 'socket', 'roomIO', ctrl]);
