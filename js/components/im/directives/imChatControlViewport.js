function directive(Message, utils, settings, chatIO) {

  const ENTER_KEY = 13;

  return {
    restrict: 'C',

    link: function($scope, element) {
      const $el = $(element);
      const $textarea = $el.find('textarea');

      function submit(text) {
        let cipOptions = [];

        if (settings.get('rc4Key')) {
          cipOptions.push({name: 'rc4', key: settings.get('rc4Key')});
        }

        chatIO.push(new Message({body: text, kind: 'out', cipOptions: cipOptions}));
      }

      function clickBtn() {
        const text = $textarea.val();

        if (utils.isPresent(text)) {
          submit(text);
          $textarea.val('');
        }
      }

      $textarea.keypress(function(e) {
        if (e.ctrlKey && e.keyCode === ENTER_KEY) {
          $textarea.val($textarea.val() + "\n");
        } else if (e.keyCode === ENTER_KEY) {
          e.preventDefault();
          // todo click button
          clickBtn();
        }
      });

      $scope.$on('$destroy', function() {
        $textarea.off();
        $el.off();
      });
    }
  };
}

angular.module('starter.controllers').directive('imChatControlViewport', ['Message', 'utils', 'settings', 'chatIO', directive]);
