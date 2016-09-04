function factory() {

  function get(key) {
    return localStorage.getItem(key);
  }

  function set(key, value) {
    return localStorage.setItem(key, value);
  }

  function del(key) {
    return localStorage.removeItem(key);
  }

  return {
    get,
    set,
    del
  }
}

angular.module('starter').factory('storage', [factory]);
