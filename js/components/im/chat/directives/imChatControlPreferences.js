function directive(preferences) {
  return {
    restrict: 'C',

    link: function($scope, element) {
      const $el = $(element);
      const $items = $el.find('span');

      $.each($items, function(_i, item) {
        const $item = $(item);
        $item.toggleClass('on', preferences.is($item.attr('data-preference')));
      });
    }
  };
}

angular.module('starter.controllers').directive('imChatControlPreferences', ['preferences', directive]);
