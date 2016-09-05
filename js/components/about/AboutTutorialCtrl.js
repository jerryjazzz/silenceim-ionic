function ctrl($scope, $ionicSideMenuDelegate, $ionicSlideBoxDelegate) {
  const canDragContent = $ionicSideMenuDelegate.canDragContent();
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

  $scope.$on('$destroy', function() {
    $ionicSideMenuDelegate.canDragContent(canDragContent);
  });
}

angular.module('starter.controllers').controller('AboutTutorialCtrl', ['$scope', '$ionicSideMenuDelegate', '$ionicSlideBoxDelegate', ctrl]);
