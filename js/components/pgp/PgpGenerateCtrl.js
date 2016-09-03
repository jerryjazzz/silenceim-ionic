const loadingTemplate = `
<ion-spinner icon="dots" style="fill: #FFF; stroke: #FFF"></ion-spinner>
`;

function ctrl($scope, $ionicLoading, $ionicHistory, $state, settings) {
  $scope.generate = function(bit) {
    $ionicLoading.show({template: loadingTemplate});

    const promise = openpgp.generateKey({numBits: bit, userIds: [{name: 'anonymous', email: 'anonymous@example.com'}]});

    promise.catch(function(e) {
      $ionicLoading.hide().then(function() {
        toastr.error(e.toString());
      });
    });

    promise.then(function(result) {
      settings.set('pgpMyPublicKey', result.publicKeyArmored);
      settings.set('pgpMyPrivateKey', result.privateKeyArmored);

      $ionicLoading.hide().then(function() {
        toastr.success('Keypair was saved');
        $ionicHistory.nextViewOptions({disableBack: true});
        $state.go('app.pgp_my_public');
      });
    });
  };
}

angular.module('starter.controllers').controller('PgpGenerateCtrl', ['$scope', '$ionicLoading', '$ionicHistory', '$state', 'settings', ctrl]);
