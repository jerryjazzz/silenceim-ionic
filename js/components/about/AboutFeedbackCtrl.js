function ctrl($scope, $ionicHistory, $state, $ionicPopup, socket) {
  $scope.model = {};

  $scope.submit = function() {
    $scope.model.loading = true;

    socket.emit('feedback:send', $scope.model, function(_, e) {
      $scope.model.loading = false;

      if (e) {
        $ionicPopup.alert({
          title: 'Warning',
          template: e
        });
      } else {
        $scope.model = {};

        $ionicPopup.alert({
          title: 'Success',
          template: 'Feedback has been sent. We will answer you shortly.'
        });

        $ionicHistory.nextViewOptions({disableBack: true});
        $state.go('app.about');
      }
    })
  };
}

angular.module('starter.controllers').controller('AboutFeedbackCtrl', ['$scope', '$ionicHistory', '$state', '$ionicPopup', 'socket', ctrl]);
