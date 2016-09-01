!function(){"use strict";angular.module("starter.controllers",[]),angular.module("starter",["ionic","starter.controllers"])}(),function(){"use strict";function e(){}angular.module("starter.controllers").controller("AppCtrl",["$scope",e])}(),function(){"use strict";function e(e){e.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0))})}angular.module("starter").run(["$ionicPlatform",e])}(),function(){"use strict";function e(e){e.ready(function(){window.StatusBar&&StatusBar.styleDefault()})}angular.module("starter").run(["$ionicPlatform",e])}(),function(){"use strict";function e(e,t){e.state("app",{url:"/app",abstract:!0,templateUrl:"templates/menu.html",controller:"AppCtrl"}).state("app.landing",{url:"/landing",views:{menuContent:{templateUrl:"templates/landing.html"}}}),e.state("app.rc4",{url:"/rc4",views:{menuContent:{templateUrl:"templates/rc4.html",controller:"Rc4Ctrl"}}}).state("app.aes",{url:"/aes",views:{menuContent:{templateUrl:"templates/aes.html",controller:"AesCtrl"}}}).state("app.pgp",{url:"/pgp",views:{menuContent:{templateUrl:"templates/pgp.html"}}}).state("app.pgp_generate",{url:"/pgp/generate",views:{menuContent:{templateUrl:"templates/pgp_generate.html",controller:"PgpGenerateCtrl"}}}),e.state("app.about",{url:"/about",views:{menuContent:{templateUrl:"templates/about.html"}}}).state("app.about_license",{url:"/about/license",views:{menuContent:{templateUrl:"templates/about_license.html"}}}).state("app.about_vendors",{url:"/about/vendors",views:{menuContent:{templateUrl:"templates/about_vendors.html"}}}),t.otherwise("/app/landing")}angular.module("starter").config(["$stateProvider","$urlRouterProvider",e])}(),function(){"use strict";toastr.options={closeButton:!1,debug:!1,newestOnTop:!0,progressBar:!1,positionClass:"toast-bottom-center",preventDuplicates:!0,onclick:null,showDuration:"100",hideDuration:"1000",timeOut:"2000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"}}(),function(){"use strict";function e(){function e(e){return n[e]}function t(e,t){return n[e]=t,r.onNext({key:e,value:t}),t}function s(e){delete n[e],r.onNext({key:e,value:void 0})}var n={},r=new Rx.Subject;return{get:e,set:t,del:s,observer:r}}angular.module("starter").factory("settings",[e])}(),function(){"use strict";function e(){function e(e){return("string"!==$.type(e)||!/^\s+$/.test(e))&&!$.isEmptyObject(e)}return{isPresent:e}}angular.module("starter").factory("utils",[e])}(),function(){"use strict";function e(e,t,s){function n(t){t?(s.set("aesPassphrase",e.model.passphrase),e.model.key=s.set("aesKey",t)):(s.del("aesPassphrase"),e.model.key=s.del("aesKey"))}e.model={bit:256,iterations:8192,passphrase:s.get("aesPassphrase"),key:s.get("aesKey")},e.submit=function(){t.isPresent(e.model.passphrase)?(n(enigma.misc.keygen.hex(e.model.passphrase,{iterations:e.model.iterations,length:e.model.bit})),toastr.success("AES key has been saved")):e.model.key?(n(),toastr.warning("AES key has been removed")):toastr.warning("Provide a passphrase")}}angular.module("starter.controllers").controller("AesCtrl",["$scope","utils","settings",e])}(),function(){"use strict";function e(e){return{restrict:"A",link:function(t,s){function n(){$.each(a,function(t,s){var n=$(s),r=!!e.get(n.attr("data-setting"));n.toggleClass("on",r)})}var r=$(s),a=r.find("ion-item[data-setting]");e.observer.subscribe(n),n()}}}angular.module("starter").directive("menuDirective",["settings",e])}(),function(){"use strict";function e(e,s,n){e.generate=function(e){s.show({template:t})}}var t='\n<ion-spinner icon="dots" style="fill: #FFF; stroke: #FFF"></ion-spinner>\n';angular.module("starter.controllers").controller("PgpGenerateCtrl",["$scope","$ionicLoading","settings",e])}(),function(){"use strict";function e(e,t,s){function n(t){t?(s.set("rc4Passphrase",e.model.passphrase),e.model.key=s.set("rc4Key",t)):(s.del("rc4Passphrase"),e.model.key=s.del("rc4Key"))}e.model={bit:256,iterations:8192,passphrase:s.get("rc4Passphrase"),key:s.get("rc4Key")},e.submit=function(){t.isPresent(e.model.passphrase)?(n(enigma.misc.keygen.hex(e.model.passphrase,{iterations:e.model.iterations,length:e.model.bit})),toastr.success("RC4 key has been saved")):e.model.key?(n(),toastr.warning("RC4 key has been removed")):toastr.warning("Provide a passphrase")}}angular.module("starter.controllers").controller("Rc4Ctrl",["$scope","utils","settings",e])}();