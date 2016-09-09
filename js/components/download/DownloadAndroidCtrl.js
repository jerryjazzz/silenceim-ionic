function ctrl($scope, references) {
  $scope.url = references.googlePlay;
}

angular.module('starter.controllers').controller('DownloadAndroidCtrl', ['$scope', 'references', ctrl]);
