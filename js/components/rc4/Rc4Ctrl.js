/* global toastr */
function ctrl($scope, utils, settings, enigma) {

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

      const promise = enigma.keyGen($scope.model.passphrase, { iterations: $scope.model.iterations, length: $scope.model.bit });

      promise.then(function(key) {
        $scope.$evalAsync(function() {
          save(key);
          toastr.success('RC4 key has been saved')
        });
      });

      promise.catch(function(e) {
        toastr.warning(e);
      });

    } else if ($scope.model.key) {
      save();
      toastr.warning('RC4 key has been removed');
    } else {
      toastr.warning('Provide a passphrase');
    }
  };
}

angular.module('starter.controllers').controller('Rc4Ctrl', ['$scope', 'utils', 'settings', 'enigma', ctrl]);
