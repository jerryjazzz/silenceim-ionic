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


      // const cipOptions = [];
      //
      // message.cipOptions.forEach(function(options) {
      //   if (options.name === 'rc4') {
      //     cipOptions.push($.extend(options, {key: settings.get('rc4Key')}));
      //   }
      // });
      //
      // message.dec(cipOptions).then(function(result) {
      // });

      $el.html($template);
    }
  };
}

angular.module('starter.controllers').directive('imChatMessageIn', ['settings', 'chatIO', directive]);
