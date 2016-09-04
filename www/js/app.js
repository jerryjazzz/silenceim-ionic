!function(){"use strict";angular.module("starter.controllers",[]),angular.module("starter",["ionic","starter.controllers"])}(),function(){"use strict";function e(){}angular.module("starter.controllers").controller("AppCtrl",["$scope",e])}(),function(){"use strict";function e(e){e.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0))})}angular.module("starter").run(["$ionicPlatform",e])}(),function(){"use strict";function e(e){e.ready(function(){window.StatusBar&&StatusBar.styleDefault()})}angular.module("starter").run(["$ionicPlatform",e])}(),function(){"use strict";function e(e,t){e.state("app",{url:"/app",abstract:!0,templateUrl:"templates/menu.html",controller:"AppCtrl"}).state("app.landing",{url:"/landing",views:{menuContent:{templateUrl:"templates/landing.html"}}}),e.state("app.rc4",{url:"/rc4",views:{menuContent:{templateUrl:"templates/rc4.html",controller:"Rc4Ctrl"}}}).state("app.aes",{url:"/aes",views:{menuContent:{templateUrl:"templates/aes.html",controller:"AesCtrl"}}}).state("app.pgp",{url:"/pgp",cache:!1,views:{menuContent:{templateUrl:"templates/pgp.html",controller:"PgpCtrl"}}}).state("app.pgp_generate",{url:"/pgp/generate",views:{menuContent:{templateUrl:"templates/pgp_generate.html",controller:"PgpGenerateCtrl"}}}).state("app.pgp_my_private",{url:"/pgp/my-private",cache:!1,views:{menuContent:{templateUrl:"templates/pgp_my_private.html",controller:"PgpMyPrivateCtrl"}}}).state("app.pgp_my_public",{url:"/pgp/my-public",cache:!1,views:{menuContent:{templateUrl:"templates/pgp_my_public.html",controller:"PgpMyPublicCtrl"}}}).state("app.pgp_buddy_public",{url:"/pgp/buddy-public",cache:!1,views:{menuContent:{templateUrl:"templates/pgp_buddy_public.html",controller:"PgpBuddyPublicCtrl"}}}),e.state("app.about",{url:"/about",views:{menuContent:{templateUrl:"templates/about.html"}}}).state("app.about_license",{url:"/about/license",views:{menuContent:{templateUrl:"templates/about_license.html"}}}).state("app.about_vendors",{url:"/about/vendors",views:{menuContent:{templateUrl:"templates/about_vendors.html"}}}).state("app.about_security",{url:"/about/security",views:{menuContent:{templateUrl:"templates/about_security.html"}}}).state("app.about_tutorial",{url:"/about/tutorial",views:{menuContent:{templateUrl:"templates/about_tutorial.html",controller:"AboutTutorialCtrl"}}}),t.otherwise("/app/landing")}angular.module("starter").config(["$stateProvider","$urlRouterProvider",e])}(),function(){"use strict";toastr.options={closeButton:!1,debug:!1,newestOnTop:!0,progressBar:!1,positionClass:"toast-bottom-center",preventDuplicates:!0,onclick:null,showDuration:"100",hideDuration:"1000",timeOut:"2000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"}}(),function(){"use strict";function e(){return{restrict:"A",link:function(e,t,n){var r=$(t);r.on("click",function(){window.open(n.externalLink,"_system")}),e.$on("$destroy",function(){r.off()})}}}angular.module("starter").directive("externalLink",[e])}(),function(){"use strict";function e(){function e(e){return r[e]}function t(e,t){return r[e]=t,s.onNext({key:e,value:t}),t}function n(e){delete r[e],s.onNext({key:e,value:void 0})}var r={},s=new Rx.Subject;return{get:e,set:t,del:n,observer:s}}angular.module("starter").factory("settings",[e])}(),function(){"use strict";function e(){function e(e){return("string"!==$.type(e)||!/^\s+$/.test(e))&&!$.isEmptyObject(e)}return{isPresent:e}}angular.module("starter").factory("utils",[e])}(),function(){"use strict";function e(e,t){t.canDragContent(!1)}angular.module("starter.controllers").controller("AboutTutorialCtrl",["$scope","$ionicSideMenuDelegate",e])}(),function(){"use strict";function e(e,t,n){function r(t){t?(n.set("aesPassphrase",e.model.passphrase),e.model.key=n.set("aesKey",t)):(n.del("aesPassphrase"),e.model.key=n.del("aesKey"))}e.model={bit:256,iterations:8192,passphrase:n.get("aesPassphrase"),key:n.get("aesKey")},e.submit=function(){t.isPresent(e.model.passphrase)?(r(enigma.misc.keygen.hex(e.model.passphrase,{iterations:e.model.iterations,length:e.model.bit})),toastr.success("AES key has been saved")):e.model.key?(r(),toastr.warning("AES key has been removed")):toastr.warning("Provide a passphrase")}}angular.module("starter.controllers").controller("AesCtrl",["$scope","utils","settings",e])}(),function(){"use strict";function e(e){return{restrict:"A",link:function(t,n){function r(){$.each(o,function(t,n){var r=$(n),s=!!e.get(r.attr("data-setting"));r.toggleClass("on",s)})}var s=$(n),o=s.find("ion-item[data-setting]");e.observer.subscribe(r),r()}}}angular.module("starter").directive("menuDirective",["settings",e])}(),function(){"use strict";function e(e,t,n,r){e.model={key:r.get("pgpBuddyPublicKey")},e.submit=function(){r.set("pgpBuddyPublicKey",e.model.key),toastr.success("Buddy's public key was saved"),t.nextViewOptions({disableBack:!0}),n.go("app.pgp")}}angular.module("starter.controllers").controller("PgpBuddyPublicCtrl",["$scope","$ionicHistory","$state","settings",e])}(),function(){"use strict";function e(e,t){e.myPrivateKey=!!t.get("pgpMyPrivateKey"),e.myPublicKey=!!t.get("pgpMyPublicKey"),e.buddyPublicKey=!!t.get("pgpBuddyPublicKey")}angular.module("starter.controllers").controller("PgpCtrl",["$scope","settings",e])}(),function(){"use strict";function e(e,n,r,s,o){e.generate=function(e){n.show({template:t});var a=openpgp.generateKey({numBits:e,userIds:[{name:"anonymous",email:"anonymous@example.com"}]});a.catch(function(e){n.hide().then(function(){toastr.error(e.toString())})}),a.then(function(e){o.set("pgpMyPublicKey",e.publicKeyArmored),o.set("pgpMyPrivateKey",e.privateKeyArmored),n.hide().then(function(){toastr.success("Keypair was saved"),r.nextViewOptions({disableBack:!0}),s.go("app.pgp_my_public")})})}}var t='\n<ion-spinner icon="dots" style="fill: #FFF; stroke: #FFF"></ion-spinner>\n';angular.module("starter.controllers").controller("PgpGenerateCtrl",["$scope","$ionicLoading","$ionicHistory","$state","settings",e])}(),function(){"use strict";function e(e,t,n,r){e.model={key:r.get("pgpMyPrivateKey")},e.submit=function(){r.set("pgpMyPrivateKey",e.model.key),toastr.success("My private key was saved"),t.nextViewOptions({disableBack:!0}),n.go("app.pgp")}}angular.module("starter.controllers").controller("PgpMyPrivateCtrl",["$scope","$ionicHistory","$state","settings",e])}(),function(){"use strict";function e(e,t,n,r){e.model={key:r.get("pgpMyPublicKey")},e.submit=function(){r.set("pgpMyPublicKey",e.model.key),toastr.success("My public key was saved"),t.nextViewOptions({disableBack:!0}),n.go("app.pgp")}}angular.module("starter.controllers").controller("PgpMyPublicCtrl",["$scope","$ionicHistory","$state","settings",e])}(),function(){"use strict";function e(e,t,n){function r(t){t?(n.set("rc4Passphrase",e.model.passphrase),e.model.key=n.set("rc4Key",t)):(n.del("rc4Passphrase"),e.model.key=n.del("rc4Key"))}e.model={bit:256,iterations:8192,passphrase:n.get("rc4Passphrase"),key:n.get("rc4Key")},e.submit=function(){t.isPresent(e.model.passphrase)?(r(enigma.misc.keygen.hex(e.model.passphrase,{iterations:e.model.iterations,length:e.model.bit})),toastr.success("RC4 key has been saved")):e.model.key?(r(),toastr.warning("RC4 key has been removed")):toastr.warning("Provide a passphrase")}}angular.module("starter.controllers").controller("Rc4Ctrl",["$scope","utils","settings",e])}();