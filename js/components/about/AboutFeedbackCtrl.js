function ctrl($scope, $ionicHistory, $state, utils, socket) {

  const metaInfo = {
    device: utils.presence(ionic.Platform.device()),
    platform: ionic.Platform.platform(),
    version: ionic.Platform.version(),
  };

  $scope.model = {};

  $scope.submit = function() {
    $scope.model.loading = true;

    socket.emit('feedback:send', $.extend($scope.model, metaInfo), function(_, e) {
      $scope.model.loading = false;

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

angular.module('starter.controllers').controller('AboutFeedbackCtrl', ['$scope', '$ionicHistory', '$state', 'utils', 'socket', ctrl]);
