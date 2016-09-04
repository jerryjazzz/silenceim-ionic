function ctrl($scope, $ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.canDragContent(false)
}

angular.module('starter.controllers').controller('AboutTutorialCtrl', ['$scope', '$ionicSideMenuDelegate', ctrl]);
