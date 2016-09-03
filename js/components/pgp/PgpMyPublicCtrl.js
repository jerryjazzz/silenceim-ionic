function ctrl($scope, $ionicHistory, $state, settings) {
  $scope.model = {
    key: settings.get('pgpMyPublicKey')
  };

  $scope.submit = function() {
    settings.set('pgpMyPublicKey', $scope.model.key);
    toastr.success('My public key was saved');
    $ionicHistory.nextViewOptions({disableBack: true});
    $state.go('app.pgp');
  };
}

angular.module('starter.controllers').controller('PgpMyPublicCtrl', ['$scope', '$ionicHistory', '$state', 'settings', ctrl]);
