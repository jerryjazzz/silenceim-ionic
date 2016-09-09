function ctrl($scope, $ionicHistory, $state, socket) {

  $scope.model = {};

  $scope.submit = function() {
    $scope.model.loading = true;

    socket.emit('feedback:send', $scope.model, function(_, e) {
      $scope.$evalAsync(function() {
        $scope.model.loading = false;
      });

      if (e) {
        toastr.warning(e);
      } else {
        toastr.success('Feedback has been sent');
        $ionicHistory.nextViewOptions({disableBack: true});
        $state.go('app.about');
      }
    })
  };
}

angular.module('starter.controllers').controller('AboutFeedbackCtrl', ['$scope', '$ionicHistory', '$state', 'socket', ctrl]);
