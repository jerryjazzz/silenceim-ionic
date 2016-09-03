
function ctrl($scope, settings) {
  $scope.myPrivateKey = !!settings.get('pgpMyPrivateKey');
  $scope.myPublicKey = !!settings.get('pgpMyPublicKey');
  $scope.buddyPublicKey = !!settings.get('pgpBuddyPublicKey');
}

angular.module('starter.controllers').controller('PgpCtrl', ['$scope', 'settings', ctrl]);
