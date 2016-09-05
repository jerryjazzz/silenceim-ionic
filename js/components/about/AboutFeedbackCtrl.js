function ctrl($scope, $ionicPopup, socket) {
  $scope.model = {};

  $scope.submit = function() {
    socket.emit('feedback:send', $scope.model, function(_, e) {
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
      }
    })
  };
}

angular.module('starter.controllers').controller('AboutFeedbackCtrl', ['$scope', '$ionicPopup', 'socket', ctrl]);
