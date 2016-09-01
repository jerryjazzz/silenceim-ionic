function factory() {

  const store = {};
  const observer = new Rx.Subject();

  function get(key) {
    return store[key];
  }

  function set(key, value) {
    store[key] = value;
    observer.onNext({key: key, value: value});
    return value;
  }

  function del(key) {
    delete store[key];
    observer.onNext({key: key, value: undefined});
    return undefined;
  }

  return {
    get,
    set,
    del,
    observer
  }
}

angular.module('starter').factory('settings', [factory]);
