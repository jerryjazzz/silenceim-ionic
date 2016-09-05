function ctrl($scope, $ionicPopup, roomIO) {
  // TODO generate random names
  $scope.model = {
    roomName: '',
    userName: ''
  };

  $scope.submit = function() {
    roomIO.join($scope.model, function(_, e) {
      $ionicPopup.alert({
        title: 'Connection rejected',
        template: e
      });
    })
  };
}

angular.module('starter.controllers').controller('LandingCtrl', ['$scope', '$ionicPopup', 'roomIO', ctrl]);
