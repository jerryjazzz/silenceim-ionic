function ctrl($scope, $ionicPopup, roomIO) {
  // TODO generate random names
  $scope.model = {
    roomName: '',
    userName: ''
  };

  $scope.submit = function() {
    $scope.model.loading = true;

    roomIO.join($scope.model, function(_, e) {
      $scope.model.loading = false;
      $ionicPopup.alert({
        title: 'Connection rejected',
        template: e
      });
    })
  };
}

angular.module('starter.controllers').controller('LandingCtrl', ['$scope', '$ionicPopup', 'roomIO', ctrl]);
