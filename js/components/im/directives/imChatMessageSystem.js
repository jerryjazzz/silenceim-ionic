function directive(chatIO) {
  return {
    restrict: 'C',

    link: function($scope, element) {
      const $el = $(element);
      const message = chatIO.find($el.data('id'));
      $el.text(message.body);
    }
  };
}

angular.module('starter.controllers').directive('imChatMessageSystem', ['chatIO', directive]);
