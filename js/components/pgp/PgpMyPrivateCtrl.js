function ctrl($scope, $ionicHistory, $state, settings) {
  $scope.model = {
    key: settings.get('pgpMyPrivateKey')
  };

  $scope.submit = function() {
    settings.set('pgpMyPrivateKey', $scope.model.key);
    toastr.success('My private key was saved');
    $ionicHistory.nextViewOptions({disableBack: true});
    $state.go('app.pgp');
  };
}

angular.module('starter.controllers').controller('PgpMyPrivateCtrl', ['$scope', '$ionicHistory', '$state', 'settings', ctrl]);
