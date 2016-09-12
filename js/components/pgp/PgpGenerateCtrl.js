const loadingTemplate = `
<ion-spinner icon="dots" style="fill: #FFF; stroke: #FFF"></ion-spinner>
`;

function ctrl($scope, $ionicLoading, $ionicHistory, $state, settings, enigma) {


  $scope.generate = function(bit) {
    $ionicLoading.show({template: loadingTemplate});

    const promise = enigma.pgpKeypairGen(bit);

    promise.then(function(result) {
      settings.set('pgpMyPrivateKey', result.privateKey);
      settings.set('pgpMyPublicKey', result.publicKey);

      $ionicLoading.hide().then(function() {
        toastr.success('Keypair was saved');
        $ionicHistory.nextViewOptions({disableBack: true});
        $state.go('app.pgp_my_public');
      });
    });

    promise.catch(function(e) {
      $ionicLoading.hide().then(function() {
        toastr.error(e.toString());
      });
    });
  };
}

angular.module('starter.controllers').controller('PgpGenerateCtrl', ['$scope', '$ionicLoading', '$ionicHistory', '$state', 'settings', 'enigma', ctrl]);
