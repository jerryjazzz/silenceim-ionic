function ctrl($scope, $state, splashScreen, storage, socket) {

  // Hide cordova's splash screen manually
  splashScreen.hide();

  /**
   * @global CONNECTED {boolean}
   */
  const connSub = socket.connPub.subscribe(function(connected) {
    $scope.$evalAsync(function() {
      $scope.CONNECTED = connected;
      $scope.DISCONNECTED = !connected;
    });
  });

  /**
   * Start tutoral on first launch
   */
  if (!storage.get('tutorialDone')) {
    storage.set('tutorialDone', true);
    $state.go('app.about_tutorial');
  }

  $scope.$on('$destroy', function() {
    connSub.dispose();
  });
}

angular.module('starter.controllers').controller('AppCtrl', ['$scope', '$state', 'splashScreen', 'storage', 'socket', ctrl]);
