function ctrl($scope, $ionicHistory, $state, roomIO) {
  $scope.leave = function() {
    roomIO.leave().then(function() {
      $ionicHistory.nextViewOptions({disableBack: true});
      $state.go('app.landing');
    });
  }
}

angular.module('starter.controllers').controller('ImCtrl', ['$scope', '$ionicHistory', '$state', 'roomIO', ctrl]);
