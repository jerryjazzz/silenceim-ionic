function factory() {

  /**
   * @param $container {jquery}
   * @param cbm {hash} cipher result collection benchmark results
   */
  function updateCBM($container, cbm) {
    $container.html('');

    if (cbm) {
      if ($.isEmptyObject(cbm)) {
        $container.html('<span class="color-danger">Plaintext</span>');
      } else {
        $.each(cbm, function(cipherName, ms) {
          $container.append(`<span class="color-success">${cipherName}: ${ms}MS.</span>`);
        });
      }
    } else {
      $container.html('<span>Encoding...</span>')
    }
  }

  return {
    updateCBM
  }
}

angular.module('starter').factory('imChatMessageDelegator', [factory]);
