function ctrl($scope, $ionicHistory, $state, roomIO) {
  // TODO generate random names
  $scope.model = {
    roomName: '',
    userName: ''
  };

  /**
   * redirect user to the IM page if he joined the room
   * YOU SHOULD CHECK THIS LOGIC ON ROUTE RESOLVING
   */
  function redirectToIm() {
    $ionicHistory.nextViewOptions({disableBack: true});
    $state.go('app.im.chat');
  }

  $scope.submit = function() {
    $scope.model.loading = true;

    roomIO.join($scope.model).then(function() {
      redirectToIm();
    }, function(e) {
      toastr.warning(e);
    }).then(function() {
      $scope.$evalAsync(function() {
        $scope.model.loading = false;
      });
    });
  };
}

angular.module('starter.controllers').controller('LandingCtrl', ['$scope', '$ionicHistory', '$state', 'roomIO', ctrl]);
