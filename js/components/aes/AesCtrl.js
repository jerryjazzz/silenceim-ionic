function ctrl($scope, utils, settings) {

  $scope.model = {
    bit: 256,
    iterations: 8192,
    passphrase: settings.get('aesPassphrase'),
    key: settings.get('aesKey')
  };

  function save(key) {
    if (key){
      settings.set('aesPassphrase', $scope.model.passphrase);
      $scope.model.key = settings.set('aesKey', key);
    } else {
      settings.del('aesPassphrase');
      $scope.model.key = settings.del('aesKey');
    }
  }

  $scope.submit = function() {
    if (utils.isPresent($scope.model.passphrase)) {
      save(enigma.misc.keygen.hex($scope.model.passphrase, {iterations: $scope.model.iterations, length: $scope.model.bit}));
      toastr.success('AES key has been saved');
    } else if ($scope.model.key) {
      save();
      toastr.warning('AES key has been removed');
    } else {
      toastr.warning('Provide a passphrase');
    }
  };
}

angular.module('starter.controllers').controller('AesCtrl', ['$scope', 'utils', 'settings', ctrl]);
