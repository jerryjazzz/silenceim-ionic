function ctrl($scope, utils, settings) {

  $scope.model = {
    bit: 256,
    iterations: 8192,
    passphrase: settings.get('rc4Passphrase'),
    key: settings.get('rc4Key')
  };

  function save(key) {
    if (key){
      settings.set('rc4Passphrase', $scope.model.passphrase);
      $scope.model.key = settings.set('rc4Key', key);
    } else {
      settings.del('rc4Passphrase');
      $scope.model.key = settings.del('rc4Key');
    }
  }

  $scope.submit = function() {
    if (utils.isPresent($scope.model.passphrase)) {
      save(enigma.misc.keygen.hex($scope.model.passphrase, {iterations: $scope.model.iterations, length: $scope.model.bit}));
      toastr.success('RC4 key has been saved');
    } else if ($scope.model.key) {
      save();
      toastr.warning('RC4 key has been removed');
    } else {
      toastr.warning('Provide a passphrase');
    }
  };
}

angular.module('starter.controllers').controller('Rc4Ctrl', ['$scope', 'utils', 'settings', ctrl]);
