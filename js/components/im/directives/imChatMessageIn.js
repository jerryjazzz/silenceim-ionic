function directive(settings, chatIO) {

  const TEMPLATE = `
<div class="primary"><span class="user"></span> wrote, <a href="javascript:;" role="show-original">show original</a></div>

<div class="message">
  <div class="balloon">
    <div class="body">
      <i class="icon ion-android-lock"></i>
    </div>
  </div>
</div>
`;

  return {
    restrict: 'C',

    link: function($scope, element) {
      const $el = $(element);
      const $template = $(TEMPLATE);
      const $body = $template.find('.body');
      const $user = $template.find('.user');
      const message = chatIO.find($el.data('id'));

      $user.text(message.user.userName);

      $el.html($template);

      message.dec().then(function(crc) {
        $body.text(crc.ct);
      }).catch(function(e) {
        $el.addClass('has-error');
        $body.text(e);
      });
    }
  };
}

angular.module('starter.controllers').directive('imChatMessageIn', ['settings', 'chatIO', directive]);
