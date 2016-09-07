const loadingTemplate = `
<ion-spinner icon="dots" style="fill: #FFF; stroke: #FFF"></ion-spinner>
`;

function ctrl($scope, $ionicHistory, $ionicLoading, $state, roomIO) {

  $scope.leave = function() {
    // otherwise connection backdrop is shown
    if ($scope.CONNECTED) {
      $ionicLoading.show({template: loadingTemplate, delay: 150});
    }

    roomIO.leave().then(function(){
      $ionicLoading.hide().then(function(){
        $ionicHistory.nextViewOptions({disableBack: true});
        $state.go('app.landing');
      });
    });
  }
}

angular.module('starter.controllers').controller('ImCtrl', ['$scope', '$ionicHistory', '$ionicLoading', '$state', 'roomIO', ctrl]);
