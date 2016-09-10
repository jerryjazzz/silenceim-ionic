function factory() {

  class User {
    constructor({cid, userName}) {
      this.cid = cid;
      this.userName = userName;
    }

    set(key, value) {
      this[key] = value
    }

    get(key) {
      return this[key]
    }

    abbrev() {
      return this.userName.slice(0,2)
    }
  }

  return User
}

angular.module('starter').factory('User', [factory]);
