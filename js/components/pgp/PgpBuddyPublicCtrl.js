function ctrl($scope, $ionicHistory, $state, settings) {
  $scope.model = {
    key: settings.get('pgpBuddyPublicKey')
  };

  $scope.submit = function() {
    settings.set('pgpBuddyPublicKey', $scope.model.key);
    toastr.success(`Buddy's public key was saved`);
    $ionicHistory.nextViewOptions({disableBack: true});
    $state.go('app.pgp');
  };
}

angular.module('starter.controllers').controller('PgpBuddyPublicCtrl', ['$scope', '$ionicHistory', '$state', 'settings', ctrl]);
