(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<body>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _profdash_profdash_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profdash/profdash.component */ "./src/app/profdash/profdash.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/filter.pipe */ "./src/app/services/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'profdash', component: _profdash_profdash_component__WEBPACK_IMPORTED_MODULE_9__["ProfdashComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _profdash_profdash_component__WEBPACK_IMPORTED_MODULE_9__["ProfdashComponent"],
                _services_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _services_validate_service__WEBPACK_IMPORTED_MODULE_11__["ValidateService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Poppins');\n\n/* BASIC */\n\nhtml \n{\n  background-color: #0082fc;\n}\n\nbody \n{\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n}\n\na\n{\n  color: #A9A9A9;\n  display:inline-block;\n  text-decoration: none;\n  font-weight: 400;\n}\n\nh1\n{\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n}\n\nh2 \n{\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display:inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc;\n}\n\n#header\n{\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display:inline-block;\n  margin: 40px 8px 10px 8px;\n}\n\n.Icons\n{\n  text-align: center;\n  position: relative;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.Icons i + i\n{\n  padding-left: 0.5em;\n}\n\n#passwordShow\n{\n  margin-right: 240px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  color: #696969;\n  font-family: \"Poppins\", sans-serif;\n}\n\n/* STRUCTURE */\n\n.wrapper \n{\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n}\n\n#formContent \n{\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n  text-align: center;\n}\n\n#formFooter \n{\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px;\n}\n\n/* TABS */\n\nh2.inactive \n{\n  color: #cccccc;\n}\n\nh2.active \n{\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9;\n}\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button], input[type=submit], input[type=reset]  \n{\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out;\n}\n\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  \n{\n  background-color: #39ace7;\n}\n\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  \n{\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n}\n\ninput[type=text], [type=password], [type=email] \n{\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: left;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=text]:focus, [type=password]:focus \n{\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=text]:placeholder , [type=password]:placeholder, [type=email]:placeholder \n{\n  color: #cccccc;\n}\n\n.loginWithIcon\n{\n  position: relative;  \n}\n\n.loginWithIcon i\n{\n  position: absolute;\n  left: 0;\n  top: 20px;  \n}\n\n.passwordWithIcon\n{\n  position: relative;  \n}\n\n.passwordWithIcon i\n{\n  position: absolute;\n  left: 7px;\n  top: 16px;  \n}\n\n/* ANIMATIONS */\n\n/* Simple CSS3 Fade-in-down Animation */\n\n.fadeInDown \n{\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown \n{\n  0% \n  {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% \n  {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown \n{\n  0% \n  {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fadeIn {\n  opacity:0;\n  -webkit-animation:fadeIn ease-in 1;\n  animation:fadeIn ease-in 1;\n\n  -webkit-animation-fill-mode:forwards;\n  animation-fill-mode:forwards;\n\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n}\n\n.fadeIn.first {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\n.fadeIn.second {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n\n.fadeIn.third {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n\n.fadeIn.fourth {\n  -webkit-animation-delay: 0.5s;\n  animation-delay: 0.5s;\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n\n.underlineHover:hover:after{\n  width: 100%;\n}\n\n/* OTHERS */\n\n*:focus \n{\n  outline: none;\n}\n\n#icon \n{\n  margin: 20px;\n  width:60%;\n}\n\n* \n{\n  box-sizing: border-box;\n}\n\ninput:invalid\n{\n  box-shadow: none;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n  <head>\n    <!-- Used for incons. DO NOT REMOVE! -->\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  </head>\n\n  <h1>Welcome to BLU-Attendence</h1>\n\n  <!-- Icons -->\n  <div class=\"Icons\">\n\n    <i class=\"material-icons\" style=\"font-size:55px\">speaker_phone</i>\n\n    <i class=\"fa fa-plus\" style=\"font-size:25px\"></i>\n\n    <i class=\"fa fa-bluetooth\" style=\"font-size:40px\"></i>\n\n  </div>\n\n  <div class=\"wrapper fadeInDown\">\n\n    <div id=\"formContent\">\n      <h2 href=\"#\" class=\"active\" id=\"sign-in\"> Sign In </h2>\n      <a [routerLink] = \"['/register']\" id=\"header\" class=\"underlineHover\" hrep=\"#\">Sign Up </a>\n\n      <!-- Logo -->\n      <div class=\"fadeIn first\">\n        <img src=\"http://www.beaconwatcher.com/wp-content/uploads/2014/04/bluetooth.png\" id=\"icon\" alt=\"Computer Hope\"/>\n      </div>\n\n      <!------ Login Form ------>\n      <!-- Username -->\n      <div class=\"loginWithIcon\">\n        <i class=\"fa fa-user fa-lg fa-fw\" aria-hidden=\"true\" style=\"font-size:31px\"></i>\n        <input type=\"email\" id=\"login\" class=\"fadeIn second\" name=\"login\" placeholder=\"Email\" required [(ngModel)]=\"email\" #modelLogin=\"ngModel\">\n        <div *ngIf=\"modelLogin.errors && (modelLogin.dirty || modelLogin.touched)\" class=\"alert alert-danger\">\n\n           <div [hidden]=\"!modelLogin.errors.required\">\n              Email is Required!\n           </div>\n\n        </div>\n      </div>\n\n      <!-- Password -->\n      <div class=\"passwordWithIcon\">\n        <i class=\"fa fa-lock\" style=\"font-size:35px\"></i>\n        <input type=\"password\" id=\"password\" class=\"fadeIn third\" name=\"login\" placeholder=\"Password\" required [(ngModel)]=\"password\" #modelPassword=\"ngModel\">\n        <div *ngIf=\"modelPassword.errors && (modelPassword.dirty || modelPassword.touched)\" class=\"alert alert-danger\">\n\n           <div [hidden]=\"!modelPassword.errors.required\">\n              Password is Required!\n           </div>\n\n        </div>\n\n        <div id=\"passwordShow\">\n           <input type=\"checkbox\" (click)=\"showPassword()\"> Show Password\n        </div>\n\n      </div>\n\n      <!-- Submit -->\n      <div>\n        <input type=\"submit\" class=\"fadeIn fourth\" value=\"Log In\" (click)=\"onSubmit()\">\n      </div>\n\n      <!-- Remind Passowrd -->\n      <div id=\"formFooter\">\n        <a class=\"underlineHover\" href=\"#\">Need Access Key?</a>\n      </div>\n\n    </div>\n  </div>\n</html>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.showPassword = function () {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        }
        else {
            x.type = "password";
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.loginUser(user).subscribe(function (data) {
            if (data == 'Failed') {
                alert('User not found, please try again');
                _this.router.navigate(['']);
            }
            else {
                var user_1 = data['user'];
                _this.authService.storeUser(user_1);
                _this.router.navigate(['/profdash']);
            }
        }, function (err) {
            alert('Oh no! Something went wrong. Please try again!');
            _this.router.navigate(['/home']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    font-family: 'helvetica',sans-serif;\n}\n\n.navbar-toggler:focus,\n.navbar-toggler:active {\n    outline: 0;\n}\n\n.navbar-brand{\n  font-size: 25px;\n}\n\n.navbar-toggler span {\n   display: block;\n   background-color: #ffffff;\n   height: 3px;\n   width: 25px;\n   margin-top: 4px;\n   margin-bottom: 4px;\n   -webkit-transform: rotate(0deg);\n   transform: rotate(0deg);\n   position: relative;\n   right: 0;\n   opacity: 1;\n}\n\n.navbar-toggler span:nth-child(1),\n.navbar-toggler span:nth-child(3) {\n   transition: -webkit-transform .35s ease-in-out;\n   transition: transform .35s ease-in-out;\n   transition: transform .35s ease-in-out, -webkit-transform .35s ease-in-out;\n}\n\n.navbar-toggler:not(.collapsed) span:nth-child(1) {\n    position: absolute;\n    right: 29px;\n    top: 23px;\n    -webkit-transform: rotate(135deg);\n    transform: rotate(135deg);\n    opacity: 0.9;\n}\n\n.navbar-toggler:not(.collapsed) span:nth-child(2) {\n    height: 12px;\n    visibility: hidden;\n    background-color: transparent;\n}\n\n.navbar-toggler:not(.collapsed) span:nth-child(3) {\n    position: absolute;\n    right: 29px;\n    top: 23px;\n    -webkit-transform: rotate(-135deg);\n    transform: rotate(-135deg);\n    opacity: 0.9;\n}\n\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n\n.underlineHover:hover:after{\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!--- Include the above in your HEAD tag ---------->\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" style=\"color: #0082FC\">\n  <a class=\"navbar-brand\" href=\"/profdash\" style=\"color: #0082FC\">Bluetooth Attendance Dashboard | </a>\n  <button class=\"navbar-toggler navbar-toggler-right collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span></span>\n    <span></span>\n    <span></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-link\">\n        <a class=\"underlineHover\" href=\"#\" style=\"text-decoration: none\">About</a>\n      </li>\n      <li class=\"nav-link\">\n        <a class= \"underlineHover\" href=\"#\" style=\"text-decoration: none\">Purchase Access</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color: #0082FC\">Menu</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\" style=\"color: #0082FC\">Create Class</a>\n          <a class=\"dropdown-item\" href=\"#\" style=\"color: #0082FC\">Search Students</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\" style=\"color: #0082FC\">Account Options</a>\n        </div>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <button class=\"btn btn-outline-danger my-2 my-sm-0\" type=\"submit\">Log Out</button>\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profdash/profdash.component.css":
/*!*************************************************!*\
  !*** ./src/app/profdash/profdash.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Poppins');\n\n/* BASIC */\n\nhtml {\n  background-color: #0082fc;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n}\n\na {\n  color: #92badd;\n  display:inline-block;\n  text-decoration: none;\n  font-weight: 400;\n}\n\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display:inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc;\n}\n\n/* STRUCTURE */\n\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n}\n\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n  text-align: center;\n}\n\n#formFooter {\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px;\n}\n\n/* TABS */\n\nh2.inactive {\n  color: #cccccc;\n}\n\nh2.active {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9;\n}\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button], input[type=submit], input[type=reset]  {\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out;\n}\n\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\n  background-color: #39ace7;\n}\n\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n}\n\ninput[type=text] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=text]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=text]:placeholder {\n  color: #cccccc;\n}\n\n/* ANIMATIONS */\n\n/* Simple CSS3 Fade-in-down Animation */\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fadeIn {\n  opacity:0;\n  -webkit-animation:fadeIn ease-in 1;\n  animation:fadeIn ease-in 1;\n\n  -webkit-animation-fill-mode:forwards;\n  animation-fill-mode:forwards;\n\n  -webkit-animation-duration:1s;\n  animation-duration:1s;\n}\n\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s;\n}\n\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n\n.underlineHover:hover:after{\n  width: 100%;\n}\n\n/* OTHERS */\n\n*:focus {\n    outline: none;\n}\n\n#icon {\n  width:60%;\n}\n\n* {\n  box-sizing: border-box;\n}\n"

/***/ }),

/***/ "./src/app/profdash/profdash.component.html":
/*!**************************************************!*\
  !*** ./src/app/profdash/profdash.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<app-navbar></app-navbar>\n"

/***/ }),

/***/ "./src/app/profdash/profdash.component.ts":
/*!************************************************!*\
  !*** ./src/app/profdash/profdash.component.ts ***!
  \************************************************/
/*! exports provided: ProfdashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfdashComponent", function() { return ProfdashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfdashComponent = /** @class */ (function () {
    function ProfdashComponent(router) {
        this.router = router;
    }
    ProfdashComponent.prototype.ngOnInit = function () {
    };
    ProfdashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profdash',
            template: __webpack_require__(/*! ./profdash.component.html */ "./src/app/profdash/profdash.component.html"),
            styles: [__webpack_require__(/*! ./profdash.component.css */ "./src/app/profdash/profdash.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProfdashComponent);
    return ProfdashComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Poppins');\n\nhtml \n{\n  background-color: #0082fc;\n}\n\nbody \n{\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n}\n\na\n{\n  color: #A9A9A9;\n  display:inline-block;\n  text-decoration: none;\n  font-weight: 400;\n}\n\nh1\n{\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n}\n\nh2 \n{\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display:inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc;\n}\n\n#passwordShow\n{\n  margin-right: 240px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  color: #696969;\n  font-family: \"Poppins\", sans-serif;\n}\n\n#header\n{\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display:inline-block;\n  margin: 40px 8px 10px 8px;\n}\n\n/* Animations of the Main Box */\n\n.wrapper \n{\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n}\n\n#formContent \n{\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n  text-align: center;\n}\n\n.fadeInDown \n{\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown \n{\n  0% \n  {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% \n  {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown \n{\n  0% \n  {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fadeIn \n{\n  opacity:0;\n  -webkit-animation:fadeIn ease-in 1;\n  animation:fadeIn ease-in 1;\n\n  -webkit-animation-fill-mode:forwards;\n  animation-fill-mode:forwards;\n\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n}\n\n.fadeIn.zero \n{\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\n.fadeIn.first \n{\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n\n.fadeIn.second \n{\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n\n.fadeIn.third \n{\n  -webkit-animation-delay: 0.5s;\n  animation-delay: 0.5s;\n}\n\n.fadeIn.fourth \n{\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n\n.fadeIn.fifth\n{\n  -webkit-animation-delay: 0.7s;\n  animation-delay: 0.7s;\n}\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button], input[type=submit], input[type=reset]  \n{\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out;\n}\n\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  \n{\n  background-color: #39ace7;\n}\n\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  \n{\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n}\n\ninput[type=text], [type=password], [type=email] \n{\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: left;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=text]:focus, [type=password]:focus \n{\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=text]:placeholder , [type=password]:placeholder, [type=email]:placeholder  \n{\n  color: #cccccc;\n}\n\n/* Underlining of the Links */\n\nh2.inactive \n{\n  color: #cccccc;\n}\n\nh2.active \n{\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9;\n}\n\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n\n.underlineHover:hover:after{\n  width: 100%;\n}\n\n#icon \n{\n  width:50%;\n}\n\n*:focus \n{\n  outline: none;\n}\n\n* \n{\n  box-sizing: border-box;\n}\n\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<html>\n\n  <h1>Please Fill in All the Fields</h1> \n\n  <div class=\"wrapper fadeInDown\">    \n\n     <div id=\"formContent\">\n        <a [routerLink] = \"['/login']\" id=\"header\" class=\"underlineHover\" hrep=\"#\"> Sign In </a>\n        <h2 href=\"#\" class=\"active\" id=\"sign-up\">Sign Up </h2>\n\n        <!-- Logo -->\n        <div class=\"fadeIn zero\">\n           <img src=\"http://superstation95.com/wp-content/uploads/2018/07/daftar10.png\" id=\"icon\" alt=\"Computer Hope\"/>\n        </div> \n\n        <input type=\"text\" id=\"fname\" class=\"fadeIn first\" name=\"fname\" placeholder=\"Full Name\">\n\n        <input type=\"email\" id=\"email\" class=\"fadeIn second\" name=\"uname\" placeholder=\"Email\">\n\n        <input type=\"text\" id=\"univId\" class=\"fadeIn third\" name=\"univId\" placeholder=\"University ID\">\n \n        <input type=\"text\" id=\"access\" class=\"fadeIn fifth\" name=\"access\" placeholder=\"Access Key\">\n\n        <input type=\"password\" id=\"password\" class=\"fadeIn fifth\" name=\"password\" placeholder=\"Password\">\n\n        <div id=\"passwordShow\">\n           <input type=\"checkbox\" (click)=\"showPassword()\"> Show Password\n        </div>\n\n        <!-- Submit -->\n        <div>\n           <input type=\"submit\" class=\"fadeIn fourth\" value=\"Submit\">\n        </div>\n\n     </div>\n  </div>\n\n</html>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router) {
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.showPassword = function () {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        }
        else {
            x.type = "password";
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // private baseUri:string="http://localhost:8080/";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Store user info in local storage
    AuthService.prototype.storeUser = function (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.user = user;
    };
    // Endpoints for logging in and registering user
    AuthService.prototype.registerUser = function (user) {
        return this.http.post('/api/users/createuser', user, { headers: this.headers });
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post('/api/professors/login', user, { headers: this.headers });
    };
    // Endpoints for interacting with Contacts
    AuthService.prototype.getContacts = function () {
        return this.http.get('/api/contacts/' + this.user.id, { headers: this.headers });
    };
    AuthService.prototype.addContact = function (contact) {
        return this.http.post('/api/contacts/create/' + this.user.id, contact, { headers: this.headers });
    };
    AuthService.prototype.updateContact = function (contact) {
        return this.http.post('/api/contacts/update/' + contact._id, contact, { headers: this.headers });
    };
    AuthService.prototype.deleteContact = function (contact) {
        return this.http.post('/api/contacts/delete/' + contact._id, { headers: this.headers });
    };
    AuthService.prototype.downloadContact = function (contact) {
        return this.http.post('/api/contacts/download/' + contact._id, contact, { headers: this.headers });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/filter.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/services/filter.pipe.ts ***!
  \*****************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (contactlist, inputString) {
        // Check if the search inputString is empty/undefined
        if (inputString === undefined) {
            return contactlist;
        }
        // If there is input string to search:
        return contactlist.filter(function (retVal) {
            return retVal.name.toLowerCase().includes(inputString.toLowerCase());
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.fname == undefined || user.email == undefined || user.lname == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateAdd = function (contact) {
        if (contact.name == undefined || contact.email == undefined || contact.phone == undefined || contact.address == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/josh/ble-attendance/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map