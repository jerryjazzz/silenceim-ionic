/**
 * Base class for all messages
 */
function directive($ionicModal) {
  return {
    restrict: 'C',

    link: function($scope, element) {
      const $el = $(element);

      // show modal with original message
      $el.on('click', 'a[role=show-original]', function() {
        const $newScope = $scope.$new(true);
        $newScope.$messageCID = $(this).closest('.im-chat-message').data('id');

        $ionicModal.fromTemplateUrl('templates/im/chat/original_modal.html', {scope: $newScope}).then(function(modal) {
          $newScope.modal = modal;
          modal.show();
        });
      });

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

angular.module('starter.controllers').directive('imChatMessage', ['$ionicModal', directive]);
