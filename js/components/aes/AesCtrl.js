/* global toastr */
function ctrl($scope, utils, settings, enigma) {

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

      const promise = enigma.keyGen($scope.model.passphrase, { iterations: $scope.model.iterations, length: $scope.model.bit });

      promise.then(function(key) {
        $scope.$evalAsync(function() {
          save(key);
          toastr.success('AES key has been saved')
        });
      });

      promise.catch(function(e) {
        toastr.warning(e);
      });

    } else if ($scope.model.key) {
      save();
      toastr.warning('AES key has been removed');
    } else {
      toastr.warning('Provide a passphrase');
    }
  };
}

angular.module('starter.controllers').controller('AesCtrl', ['$scope', 'utils', 'settings', 'enigma', ctrl]);
