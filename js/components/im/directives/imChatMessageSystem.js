function directive(chatIO) {

  const TEMPLATE = `
<div class="message"></div>
`;


  return {
    restrict: 'C',

    link: function($scope, element) {
      const $el = $(element);
      const message = chatIO.find($el.data('id'));

      const $html = $(TEMPLATE);
      $html.text(message.body);
      $el.html($html);
    }
  };
}

angular.module('starter.controllers').directive('imChatMessageSystem', ['chatIO', directive]);
