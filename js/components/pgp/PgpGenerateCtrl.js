const loadingTemplate = `
<ion-spinner icon="dots" style="fill: #FFF; stroke: #FFF"></ion-spinner>
`;

function ctrl($scope, $ionicLoading, settings) {
  $scope.generate = function(bit) {
    $ionicLoading.show({template: loadingTemplate});
  };
}

angular.module('starter.controllers').controller('PgpGenerateCtrl', ['$scope', '$ionicLoading', 'settings', ctrl]);
