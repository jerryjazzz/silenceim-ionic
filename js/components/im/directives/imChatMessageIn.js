function directive(chatIO, imChatMessageDelegator) {

  const TEMPLATE = `
<div class="primary"><span class="user"></span> wrote, <a href="javascript:;" role="show-original">show original</a></div>

<div class="message">
  <div class="balloon">
    <div class="body">
      <i class="icon ion-android-lock"></i>
    </div>
  </div>
</div>

<div class="clearfix"></div>

<div class="secondary">
  <bdi class="crypto"></bdi>
</div>
`;

  return {
    restrict: 'C',

    link: function($scope, element) {
      const $el = $(element);
      const $template = $(TEMPLATE);
      const $body = $template.find('.body');
      const $user = $template.find('.user');
      const $crypto = $template.find('.crypto');
      const message = chatIO.find($el.data('id'));

      $user.text(message.user.userName);

      $el.html($template);

      message.dec().then(function(crc) {
        $body.text(crc.ct);
        imChatMessageDelegator.updateCBM($crypto, crc.measure());
      }).catch(function(e) {
        $el.addClass('has-error');
        $body.html(`<i class="icon ion-android-alert"></i> ${e}`);
      });
    }
  };
}

angular.module('starter.controllers').directive('imChatMessageIn', ['chatIO', 'imChatMessageDelegator', directive]);
