function directive(chatIO) {

  const TEMPLATE = `
<div class="primary">Your wrote, <a href="javascript:;" role="show-original">show original</a></div>

<div class="message">
  <div class="balloon">
    <div class="body"></div>
    <!--<div class="aux">-->
      <!--<span class="status">Sending...</span>-->
      <!--<bdi data-cipher="aes">AES</bdi>-->
      <!--<bdi data-cipher="rc4">RC4</bdi>-->
      <!--<bdi data-cipher="pgp">PGP</bdi>-->
    <!--</div>-->
  </div>
</div>
`;


  return {
    restrict: 'C',

    link: function($scope, element) {
      const $el = $(element);
      const $template = $(TEMPLATE);
      const $body = $template.find('.body');
      const message = chatIO.find($el.data('id'));

      $body.text(message.body);
      $el.html($template);
    }
  };
}

angular.module('starter.controllers').directive('imChatMessageOut', ['chatIO', directive]);
