function ctrl($scope, $ionicSideMenuDelegate, $ionicSlideBoxDelegate) {
  $ionicSideMenuDelegate.canDragContent(false);

  $scope.isLastSlide = function() {
    return $ionicSlideBoxDelegate.currentIndex() + 1 === $ionicSlideBoxDelegate.slidesCount();
  };

  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };

  $scope.slide = function(index) {
    $ionicSlideBoxDelegate.slide(index);
  };
}

angular.module('starter.controllers').controller('AboutTutorialCtrl', ['$scope', '$ionicSideMenuDelegate', '$ionicSlideBoxDelegate', ctrl]);
