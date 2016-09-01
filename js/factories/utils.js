function factory() {

  /***
   * @param object {*}
   * @returns {boolean}
   */
  function isPresent(object) {
    if ($.type(object) === "string" && (/^\s+$/.test(object))) {
      return false
    } else {
      return !$.isEmptyObject(object)
    }
  }

  return {
    isPresent
  }
}

angular.module('starter').factory('utils', [factory]);
