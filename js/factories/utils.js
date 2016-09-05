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

  /**
   * @param object {*}
   * @returns {object, undefined}
   */
  function presence(object) {
    return isPresent(object) ? object : undefined;
  }

  return {
    isPresent,
    presence
  }
}

angular.module('starter').factory('utils', [factory]);
