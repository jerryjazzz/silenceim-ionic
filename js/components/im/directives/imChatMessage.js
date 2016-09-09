/**
 * Base class for all messages
 */
function directive() {
  return {
    restrict: 'C',

    link: function($scope, element) {
      const $el = $(element);

      $el.on('click', '.balloon', function() {
        const $primary = $el.find('.primary');
        $primary.slideToggle(200);
        $('.im-chat-message .primary').not($primary).slideUp(200);
      });

      $scope.$on('$destroy', function() {
        $el.off();
      });
    }
  };
}

angular.module('starter.controllers').directive('imChatMessage', [directive]);
