function ctrl($scope, marketURL) {
  $scope.url = marketURL.android;
}

angular.module('starter.controllers').controller('DownloadAndroidCtrl', ['$scope', 'marketURL', ctrl]);
