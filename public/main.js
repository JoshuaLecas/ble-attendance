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

/***/ "./src/app/add-class/add-class.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-class/add-class.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body {\n  background-color: #0082FC;\n\n}\ntable, tr{\n  word-wrap: break-word;\n}\n\n#dash .container  {\n  margin-top: 30px;\n\n  height: 500px;\n  box-shadow: 0px 0px 20px grey;\n\n}\n#dash .container #login-row #login-column #login-box #login-form {\n  padding: 20px;\n}\n#dash .container #login-row #login-column #login-box #login-form #register-link {\n  margin-top: -85px;\n}\n#dash .btn-info {\n  background-color: #0082FC;\n  border-color:#0082FC;\n}\n#dash .btn-succes {\n  background-color: #0082FC;\n  border-color: #0082FC;\n}\n#dash .text-info {\n  color: #0082FC!important;\n}\n#cont {\n  margin-top:10vh;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color:  #F9F8FA;\n  box-shadow: 0px 0px 20px grey;\n}\n\n#dashbody{\n  margin-top:5vh;\n}\n.alignRight{\n  text-align: right;\n}\n\n/* MODAL STYLES\n-------------------------------*/\n/* jw-modal {\n  display: none;\n}\njw-modal .jw-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #000;\n  margin: 40px;\n}\njw-modal .jw-modal-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.75;\n  z-index: 900;\n}\nbody.jw-modal-open {\n  overflow: hidden;\n} */\nbody {\n  font-size: .875rem;\n}\n.feather {\n  width: 16px;\n  height: 16px;\n  vertical-align: text-bottom;\n}\n/*\n * Sidebar\n */\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100; /* Behind the navbar */\n  padding: 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n}\n.sidebar-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 48px; /* Height of navbar */\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n}\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333;\n}\n.sidebar .nav-link .feather {\n  margin-right: 4px;\n  color: #999;\n}\n.sidebar .nav-link.active {\n  color: #007bff;\n}\n.sidebar .nav-link:hover .feather,\n.sidebar .nav-link.active .feather {\n  color: inherit;\n}\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase;\n}\n/*\n * Navbar\n */\n.navbar-brand {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: 1rem;\n  background-color: rgba(0, 0, 0, .25);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n}\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0;\n}\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, .1);\n  border-color: rgba(255, 255, 255, .1);\n}\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n}\n/*\n * Utilities\n */\n.border-top { border-top: 1px solid #e5e5e5; }\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n.underlineHover:hover:after{\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/add-class/add-class.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-class/add-class.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n    <link rel=\"icon\" href=\"../../../../favicon.ico\">\n\n    <!-- Bootstrap core CSS -->\n\n    <!-- Custom styles for this template -->\n  </head>\n\n  <body>\n    <nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\n      <a class=\"navbar-brand col-sm-1 col-md-1 mr-0\" href=\"#\">Welcome, {{user.name}}</a>\n      <ul class=\"navbar-nav px-3\">\n        <li class=\"nav-item text-nowrap\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"onLogOutButton()\" style=\"color: red; font-size: 24px\">Log out</a>\n        </li>\n      </ul>\n    </nav>\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <nav class=\"col-md-1 d-none d-md-block bg-light sidebar\">\n          <div class=\"sidebar-sticky\">\n            <ul class=\"nav flex-column\">\n              <li class=\"nav-item\">\n                <a class=\"underlineHover nav-link\" [routerLink]='[\"/profdash\"]'>\n                  <span data-feather=\"home\"></span>\n                  Class List\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"underlineHover nav-link\">\n                  <span data-feather=\"students\"></span>\n                  Students\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\">\n                  <span data-feather=\"addclass\"></span>\n                  Add a class <span class=\"sr-only\">(current)</span>\n                </a>\n              </li>\n\n            </ul>\n          </div>\n        </nav>\n\n        <main role=\"main\" class=\"col-md-5 ml-sm-auto col-lg-6 pt-3 px-4\" style=\"height: 100vh; border-right: 1px solid lightgrey;\">\n          <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n            <h1 class=\"h2\">Add a class</h1>\n            <div class=\"btn-toolbar mb-2 mb-md-0\">\n\n            </div>\n          </div>\n          <div>\n            <div class=\"col-md-5\">\n              <table class=\"table\">\n                <tbody>\n\n                  <tr>\n                    <input placeholder=\"Enter Class Title\" type=\"text\" name=\"title\" [(ngModel)] = \"name\" class=\"form-control\" style=\"margin-left: 1%;\">\n                  </tr>\n                  <tr>\n                    <input placeholder=\"Enter Course ID\" type=\"text\" name=\"courseid\" [(ngModel)] = \"course_id\" class=\"form-control\" style=\"margin: 1%;\">\n                  </tr>\n                  <tr>\n                    <input placeholder=\"Enter Start Time\" type=\"time\" name=\"starttime\" [(ngModel)] = \"start_time\" class=\"form-control\" style=\"margin: 1%;\">\n                  </tr>\n                  <tr>\n                    <input placeholder=\"Enter End Time\" type=\"time\" name=\"starttime\" [(ngModel)] = \"end_time\" class=\"form-control\" style=\"margin: 1%;\">\n                  </tr>\n                  <tr>\n                    <button class=\"btn btn-success\" (click)=\"onAddClassButton()\" style=\"background-color:#779ECB; border-color:#779ECB; margin-top: 2%; margin-left: 1%;\">\n                      Submit\n                    </button>\n                    <button class=\"btn btn-success\" (click)=\"clearFields()\" style=\"background-color:#c23b22; border-color:#c23b22; margin-top: 2%; margin-left: 1%;  \">\n                      Clear\n                    </button>\n                  </tr>\n                </tbody>\n              </table>\n\n            </div>\n          </div>\n        </main>\n        <div class=\"col-md-5  pt-3 px-4\">\n          <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n            <h1 class=\"h2\">Classes on Account</h1>\n            <div class=\"btn-toolbar mb-2 mb-md-0\">\n\n            </div>\n          </div>\n\n          <div id=\"class_table\">\n            <table class=\"table table-striped\" style=\"padding-top:0px;\">\n              <thead style=\"background-color: lightgrey; color: grey\">\n                <tr>\n                  <th><h6>Class Name</h6></th>\n                  <th><h6>Class ID</h6></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr id=\"contacts\">\n                   <tr *ngFor=\"let course of courseList\">\n                    <td>{{course.className}}</td>\n                    <td>{{course.courseID}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Bootstrap core JavaScript\n    ================================================== -->\n    <!-- Placed at the end of the document so the pages load faster -->\n    <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n    <script>window.jQuery || document.write('<script src=\"../../assets/js/vendor/jquery-slim.min.js\"><\\/script>')</script>\n    <script src=\"../../assets/js/vendor/popper.min.js\"></script>\n    <script src=\"../../dist/js/bootstrap.min.js\"></script>\n\n    <!-- Icons -->\n    <script src=\"https://unpkg.com/feather-icons/dist/feather.min.js\"></script>\n    <script>\n      feather.replace()\n    </script>\n\n    <!-- Graphs -->\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js\"></script>\n    <script>\n      var ctx = document.getElementById(\"myChart\");\n      var myChart = new Chart(ctx, {\n        type: 'line',\n        data: {\n          labels: [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"],\n          datasets: [{\n            data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],\n            lineTension: 0,\n            backgroundColor: 'transparent',\n            borderColor: '#007bff',\n            borderWidth: 4,\n            pointBackgroundColor: '#007bff'\n          }]\n        },\n        options: {\n          scales: {\n            yAxes: [{\n              ticks: {\n                beginAtZero: false\n              }\n            }]\n          },\n          legend: {\n            display: false,\n          }\n        }\n      });\n    </script>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/add-class/add-class.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-class/add-class.component.ts ***!
  \**************************************************/
/*! exports provided: AddClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClassComponent", function() { return AddClassComponent; });
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



var AddClassComponent = /** @class */ (function () {
    function AddClassComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AddClassComponent.prototype.ngOnInit = function () {
        //  if (sessionStorage.length == 0){
        //    this.router.navigate(['/home']);
        //  }
        this.pageLoad();
    };
    AddClassComponent.prototype.pageLoad = function () {
        var temp = sessionStorage.getItem('user');
        this.user = JSON.parse(temp);
        this.authService.storeUser(this.user);
        this.user_id = this.user['id'];
        this.getCourseList();
        this.getCourseList();
    };
    AddClassComponent.prototype.onLogOutButton = function () {
        sessionStorage.clear();
        this.router.navigate(['/home']);
    };
    AddClassComponent.prototype.clearFields = function () {
        this.name = undefined;
        this.course_id = undefined;
        this.start_time = undefined;
        this.end_time = undefined;
    };
    AddClassComponent.prototype.onAddClassButton = function () {
        var _this = this;
        var course = {
            course_id: this.course_id,
            name: this.name,
            start_time: this.start_time,
            end_time: this.end_time
        };
        this.authService.createClass(course).subscribe(function (data) {
            _this.clearFields();
        }, function (err) {
            alert('Oh no! Something went wrong. Please try again!');
        });
        this.getCourseList();
        this.getCourseList();
    };
    AddClassComponent.prototype.getCourseList = function () {
        var _this = this;
        this.authService.getCourses().subscribe(function (data) {
            _this.courseList = data;
        });
    };
    AddClassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-class',
            template: __webpack_require__(/*! ./add-class.component.html */ "./src/app/add-class/add-class.component.html"),
            styles: [__webpack_require__(/*! ./add-class.component.css */ "./src/app/add-class/add-class.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AddClassComponent);
    return AddClassComponent;
}());



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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar2/navbar2.component */ "./src/app/navbar2/navbar2.component.ts");
/* harmony import */ var _profdash_profdash_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profdash/profdash.component */ "./src/app/profdash/profdash.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/filter.pipe */ "./src/app/services/filter.pipe.ts");
/* harmony import */ var _add_class_add_class_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-class/add-class.component */ "./src/app/add-class/add-class.component.ts");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./student-list/student-list.component */ "./src/app/student-list/student-list.component.ts");
/* harmony import */ var _selectedlecture_selectedlecture_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./selectedlecture/selectedlecture.component */ "./src/app/selectedlecture/selectedlecture.component.ts");
/* harmony import */ var _selectedclass_selectedclass_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./selectedclass/selectedclass.component */ "./src/app/selectedclass/selectedclass.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'profdash', component: _profdash_profdash_component__WEBPACK_IMPORTED_MODULE_10__["ProfdashComponent"] },
    { path: 'addclass', component: _add_class_add_class_component__WEBPACK_IMPORTED_MODULE_14__["AddClassComponent"] },
    { path: 'selectedclass', component: _selectedclass_selectedclass_component__WEBPACK_IMPORTED_MODULE_17__["SelectedclassComponent"] },
    { path: 'selectedlecture', component: _selectedlecture_selectedlecture_component__WEBPACK_IMPORTED_MODULE_16__["SelectedlectureComponent"] },
    { path: 'students', component: _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_15__["StudentListComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _profdash_profdash_component__WEBPACK_IMPORTED_MODULE_10__["ProfdashComponent"],
                _services_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterPipe"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_9__["Navbar2Component"],
                _add_class_add_class_component__WEBPACK_IMPORTED_MODULE_14__["AddClassComponent"],
                _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_15__["StudentListComponent"],
                _selectedlecture_selectedlecture_component__WEBPACK_IMPORTED_MODULE_16__["SelectedlectureComponent"],
                _selectedclass_selectedclass_component__WEBPACK_IMPORTED_MODULE_17__["SelectedclassComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _services_validate_service__WEBPACK_IMPORTED_MODULE_12__["ValidateService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nh1\n{\n  color: #0082FC;\n  margin-left: 3%;\n  margin-top: 11%;\n}\n\nh2\n{\n  color: #000000;\n  font-size: 18px;\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-top: 8%;\n  margin-bottom: 11%;\n}\n\n.intro\n{\n  background-color: #ffffff;\n  position: absolute;\n  left: 1%;\n  width: 48.5%;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  border: 5px;\n  border-radius: 10px 10px 10px 10px;\n}\n\n#icon\n{\n  position: absolute;\n  right: 1%;\n  width: 48.5%;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  border: 5px;\n  border-radius: 10px 10px 10px 10px;\n}\n\ninput[type=submit]\n{\n  background-color: #ffffff;\n  font-weight: bold;\n  position: absolute;\n  border: none;\n  color: #0082FC;\n  bottom: 10%;\n  left: 1%;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 15px;\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n  border-radius: 5px 5px 5px 5px;\n  transition: all 0.3s ease-in-out;\n}\n\ninput[type=submit]:hover\n{\n  background-color: #fff;\n}\n\ninput[type=submit]:active\n{\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n}\n\n/*\n@media only screen and (min-width: 800px)\n{\n  h1\n  {\n    color: #0082FC;\n    font-size: 65px;\n    font-weight: bold;\n    margin-left: 45px;\n  }\n\n  h2\n  {\n    color: #000000;\n    font-size: 25px;\n    margin: 5%;\n    margin-top: 10%;;\n  }\n\n  p\n  {\n    color: #000000;\n    font-size: 20px;\n    margin: 5%;\n    margin-top: 15%;\n  }\n\n  .container\n  {\n    position: relative;\n  }\n\n  .intro\n  {\n    background-color: #ffffff;\n    position: absolute;\n    margin-top: 10%;\n    left: -30%;\n    width: 70%;\n    font-family: Verdana, sans-serif;\n    border: 5px;\n    border-radius: 10px 10px 10px 10px;\n  }\n\n  #icon\n  {\n    position: absolute;\n    width: 80%;\n    right: -30%;\n    margin-top: 20%;\n    top: 30%;\n    border: 5px;\n    border-radius: 10px 10px 10px 10px;\n  }\n\n  input[type=submit]\n  {\n    margin-top: 75%;\n    top: 100%;\n    left: -30%;\n    padding: 20px 90px;\n    font-size: 25px;\n  }\n} */\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<html>\n\t<app-navbar2></app-navbar2>\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t<body>\n\t\t\t<div id = \"First\" class = \"table row\">\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<div class=\"intro\">\n\n\t\t\t\t\t\t\t<h1>\n\t\t\t\t\t\t\t\tBLU-Attendance\n\t\t\t\t\t\t\t</h1>\n\n\t\t\t\t    \t<h2>\n\t\t\t\t\t\t\t\tImprove your class attendance grading with BLU-Attendance. <br> <br>\n\t\t\t\t\t\t\t\tAn application that allows for professors to track student attendance via mobile app and Bluetooth, removing the need for expensive hardware and without being easily faked.\n\t\t\t\t\t\t\t</h2>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<img src=\"http://www.theinteractivestudio.com/blicker/images/system.png\" id=\"icon\" alt=\"computer hope\"/>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</div>\n\t\t\t<div  id = \"Second\" class = \"row\">\n\t\t\t\t<input type=\"submit\" class=\"register\" value=\"Sign Up\" [routerLink] = \"['/register']\">\n\t\t\t</div>\n\t</body>\n</html>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
                console.log(data);
                var user_1 = data;
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

/***/ "./src/app/navbar2/navbar2.component.css":
/*!***********************************************!*\
  !*** ./src/app/navbar2/navbar2.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body\n{\n  font-family: 'helvetica',sans-serif;\n}\n\n.navbar-toggler:focus,\n.navbar-toggler:active\n{\n  outline: 0;\n}\n\n.navbar-brand{\n  font-size: 25px;\n}\n\n.navbar-toggler span {\n  display: block;\n  background-color: #ffffff;\n  height: 3px;\n  width: 25px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  position: relative;\n  right: 0;\n  opacity: 1;\n}\n\n.navbar-toggler span:nth-child(1),\n.navbar-toggler span:nth-child(3) {\n  transition: -webkit-transform .35s ease-in-out;\n  transition: transform .35s ease-in-out;\n  transition: transform .35s ease-in-out, -webkit-transform .35s ease-in-out;\n}\n\n.navbar-toggler:not(.collapsed) span:nth-child(1) {\n  position: absolute;\n  right: 29px;\n  top: 23px;\n  -webkit-transform: rotate(135deg);\n  transform: rotate(135deg);\n  opacity: 0.9;\n}\n\n.navbar-toggler:not(.collapsed) span:nth-child(2) {\n  height: 12px;\n  visibility: hidden;\n  background-color: transparent;\n}\n\n.navbar-toggler:not(.collapsed) span:nth-child(3) {\n  position: absolute;\n  right: 29px;\n  top: 23px;\n  -webkit-transform: rotate(-135deg);\n  transform: rotate(-135deg);\n  opacity: 0.9;\n}\n\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n\n.underlineHover:hover:after{\n  width: 100%;\n}\n\n.logIn\n{\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  background-color: #56baed;\n  padding: 10px 20px;\n  border: none;\n  color: white;\n  box-shadow: 0 5px 10px 0 rgba(95,186,233,0.4);\n  border-radius: 5px 5px 5px 5px;\n}\n\n.logIn:hover\n{\n  background-color: #39ace7;\n}\n\n.logIn:active\n{\n -webkit-transform: scale(0.95);\n transform: scale(0.95);\n}\n\n@media only screen and (min-width: 800px)\n{\n  .navbar-brand\n  {\n    font-size: 50px;\n  }\n\n  .nav-link\n  {\n    font-size: 30px;\n  }\n\n  .logIn\n  {\n    font-size: 25px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/navbar2/navbar2.component.html":
/*!************************************************!*\
  !*** ./src/app/navbar2/navbar2.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!--- Include the above in your HEAD tag ---------->\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" style=\"color: #0082FC\">\n  <a class=\"navbar-brand\" href=\"/home\" style=\"color: #0082FC\">Bluetooth Attendance</a>\n  <button class=\"navbar-toggler navbar-toggler-right collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span></span>\n    <span></span>\n    <span></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-link\">\n        <a class=\"underlineHover\" href=\"#\" style=\"text-decoration: none\">About</a>\n      </li>\n      <li class=\"nav-link\">\n        <a class= \"underlineHover\" href=\"#\" style=\"text-decoration: none\">Purchase Access</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <button class=\"logIn\" type=\"submit\" [routerLink] = \"['/login']\">Sign In</button>\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar2/navbar2.component.ts":
/*!**********************************************!*\
  !*** ./src/app/navbar2/navbar2.component.ts ***!
  \**********************************************/
/*! exports provided: Navbar2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar2Component", function() { return Navbar2Component; });
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

var Navbar2Component = /** @class */ (function () {
    function Navbar2Component() {
    }
    Navbar2Component.prototype.ngOnInit = function () {
    };
    Navbar2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar2',
            template: __webpack_require__(/*! ./navbar2.component.html */ "./src/app/navbar2/navbar2.component.html"),
            styles: [__webpack_require__(/*! ./navbar2.component.css */ "./src/app/navbar2/navbar2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Navbar2Component);
    return Navbar2Component;
}());



/***/ }),

/***/ "./src/app/profdash/profdash.component.css":
/*!*************************************************!*\
  !*** ./src/app/profdash/profdash.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body {\n  background-color: #0082FC;\n\n}\ntable, tr{\n  word-wrap: break-word;\n}\n\n#dash .container  {\n  margin-top: 30px;\n\n  height: 500px;\n  box-shadow: 0px 0px 20px grey;\n\n}\n#dash .container #login-row #login-column #login-box #login-form {\n  padding: 20px;\n}\n#dash .container #login-row #login-column #login-box #login-form #register-link {\n  margin-top: -85px;\n}\n#dash .btn-info {\n  background-color: #0082FC;\n  border-color:#0082FC;\n}\n#dash .btn-succes {\n  background-color: #0082FC;\n  border-color: #0082FC;\n}\n#dash .text-info {\n  color: #0082FC!important;\n}\n#cont {\n  margin-top:10vh;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color:  #F9F8FA;\n  box-shadow: 0px 0px 20px grey;\n}\n\n#dashbody{\n  margin-top:5vh;\n}\n.alignRight{\n  text-align: right;\n}\n\n/* MODAL STYLES\n-------------------------------*/\n/* jw-modal {\n  display: none;\n}\njw-modal .jw-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #000;\n  margin: 40px;\n}\njw-modal .jw-modal-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.75;\n  z-index: 900;\n}\nbody.jw-modal-open {\n  overflow: hidden;\n} */\nbody {\n  font-size: .875rem;\n}\n.feather {\n  width: 16px;\n  height: 16px;\n  vertical-align: text-bottom;\n}\n/*\n * Sidebar\n */\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100; /* Behind the navbar */\n  padding: 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n}\n.sidebar-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 48px; /* Height of navbar */\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n}\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333;\n}\n.sidebar .nav-link .feather {\n  margin-right: 4px;\n  color: #999;\n}\n.sidebar .nav-link.active {\n  color: #007bff;\n}\n.sidebar .nav-link:hover .feather,\n.sidebar .nav-link.active .feather {\n  color: inherit;\n}\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase;\n}\n/*\n * Navbar\n */\n.navbar-brand {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: 1rem;\n  background-color: rgba(0, 0, 0, .25);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n}\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0;\n}\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, .1);\n  border-color: rgba(255, 255, 255, .1);\n}\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n}\n/*\n * Utilities\n */\n.border-top { border-top: 1px solid #e5e5e5; }\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n.underlineHover:hover:after{\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/profdash/profdash.component.html":
/*!**************************************************!*\
  !*** ./src/app/profdash/profdash.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n    <link rel=\"icon\" href=\"../../../../favicon.ico\">\n\n    <!-- Bootstrap core CSS -->\n\n    <!-- Custom styles for this template -->\n  </head>\n\n  <body>\n    <nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\n      <a class=\"navbar-brand col-sm-1 col-md-1 mr-0\" href=\"#\">Welcome, {{user.name}}</a>\n      <ul class=\"navbar-nav px-3\">\n        <li class=\"nav-item text-nowrap\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"onLogOutButton()\" style=\"color: red; font-size: 24px\">Log out</a>\n        </li>\n      </ul>\n    </nav>\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <nav class=\"col-md-1 d-none d-md-block bg-light sidebar\">\n          <div class=\"sidebar-sticky\">\n            <ul class=\"nav flex-column\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\" hrep=\"#\">\n                  <span data-feather=\"home\"></span>\n                  Class List\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"underlineHover nav-link\" hrep=\"#\" [routerLink] = \"['/students']\">\n                  <span data-feather=\"file\"></span>\n                  Students\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"underlineHover nav-link\" [routerLink] = \"['/addclass']\" hrep=\"#\">\n                  <span data-feather=\"shopping-cart\"></span>\n                  Add a class <span class=\"sr-only\">(current)</span>\n                </a>\n              </li>\n\n            </ul>\n          </div>\n        </nav>\n\n        <main role=\"main\" class=\"col-md-5 ml-sm-auto col-lg-6 pt-3 px-4\" style=\"height: 100vh; border-right: 1px solid lightgrey;\">\n          <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n            <h1 class=\"h2\">Classes</h1>\n            <div class=\"btn-toolbar mb-2 mb-md-0\">\n              <div class=\"btn-group mr-2\">\n                <input class=\"form-control form-control-dark w-100\" type=\"text\" name=\"inputString\" style=\"background-color: lightgrey;\" [(ngModel)]=\"inputString\" placeholder=\"Search Classes\" aria-label=\"Search\">\n              </div>\n\n            </div>\n          </div>\n          <div id=\"class_table\">\n            <table class=\"table table-striped\" style=\"padding-top:0px;\">\n              <thead style=\"background-color: lightgrey; color: grey\">\n                <tr>\n                  <th><h6>Class Name</h6></th>\n                  <th><h6>Class ID</h6></th>\n                  <th><h6>Start Time</h6></th>\n                  <th><h6>End Time</h6></th>\n                  <th><h6>Delete Class</h6></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr id=\"contacts\">\n                   <tr *ngFor=\"let Class of hack(courseList) | filter:inputString; let i = index\">\n                    <td><a (click)=\"courseClicked(Class)\">{{Class.className}}</a></td>\n                    <td style=\"color: lightblue;\">{{Class.courseID}}</td>\n                    <td>{{Class.startTime}}</td>\n                    <td><a>{{Class.endTime}}</a></td>\n                    <td>\n                        <button class=\"btn btn-danger\" (click)=\"onDeleteButton(Class)\">Delete</button>\n                    </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </main>\n        <div class=\"col-md-5  pt-3 px-4\">\n          <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n            <h1 class=\"h2\">Lectures for Selected Class</h1>\n            <div class=\"btn-toolbar mb-2 mb-md-0\">\n              <div class=\"btn-group mr-2\">\n\n              </div>\n\n            </div>\n          </div>\n\n          <div id=\"class_table\">\n            <table class=\"table table-striped\" style=\"padding-top:0px;\">\n              <thead style=\"background-color: lightgrey; color: grey\">\n                <tr>\n                  <th><h6>Date</h6></th>\n                  <th><h6>Class Name</h6></th>\n                  <th><h6>Class ID</h6></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr id=\"contacts\">\n                   <tr *ngFor=\"let lecture of lectureList\">\n                    <td><a style=\"color: lightblue;\">{{lecture.date}}</a></td>\n                    <td>{{selectedCourse.className}}</td>\n                    <td>{{selectedCourse.courseID}}</td>\n\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Bootstrap core JavaScript\n    ================================================== -->\n    <!-- Placed at the end of the document so the pages load faster -->\n    <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n    <script>window.jQuery || document.write('<script src=\"../../assets/js/vendor/jquery-slim.min.js\"><\\/script>')</script>\n    <script src=\"../../assets/js/vendor/popper.min.js\"></script>\n    <script src=\"../../dist/js/bootstrap.min.js\"></script>\n\n    <!-- Icons -->\n    <script src=\"https://unpkg.com/feather-icons/dist/feather.min.js\"></script>\n    <script>\n      feather.replace()\n    </script>\n\n    <!-- Graphs -->\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js\"></script>\n    <script>\n      var ctx = document.getElementById(\"myChart\");\n      var myChart = new Chart(ctx, {\n        type: 'line',\n        data: {\n          labels: [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"],\n          datasets: [{\n            data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],\n            lineTension: 0,\n            backgroundColor: 'transparent',\n            borderColor: '#007bff',\n            borderWidth: 4,\n            pointBackgroundColor: '#007bff'\n          }]\n        },\n        options: {\n          scales: {\n            yAxes: [{\n              ticks: {\n                beginAtZero: false\n              }\n            }]\n          },\n          legend: {\n            display: false,\n          }\n        }\n      });\n    </script>\n  </body>\n</html>\n"

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



var ProfdashComponent = /** @class */ (function () {
    function ProfdashComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ProfdashComponent.prototype.ngOnInit = function () {
        //  if (sessionStorage.length == 0){
        //    this.router.navigate(['/home']);
        //  }
        this.pageLoad();
    };
    ProfdashComponent.prototype.pageLoad = function () {
        var temp = sessionStorage.getItem('user');
        this.user = JSON.parse(temp);
        this.authService.storeUser(this.user);
        this.user_id = this.user['id'];
        this.getCourseList();
        this.getCourseList();
    };
    ProfdashComponent.prototype.hack = function (val) {
        return val;
    };
    ProfdashComponent.prototype.onLogOutButton = function () {
        sessionStorage.clear();
        this.router.navigate(['/home']);
    };
    ProfdashComponent.prototype.clearFields = function () {
        this.class_name = undefined;
        this.course_id = undefined;
        this.start_time = undefined;
        this.end_time = undefined;
    };
    ProfdashComponent.prototype.onAddClassButton = function () {
        var _this = this;
        var course = {
            course_id: this.course_id,
            class_name: this.class_name,
            start_time: this.start_time,
            end_time: this.end_time
        };
        this.authService.createClass(course).subscribe(function (data) {
            _this.clearFields();
        }, function (err) {
            alert('Oh no! Something went wrong. Please try again!');
        });
        this.getCourseList();
        this.getCourseList();
    };
    ProfdashComponent.prototype.getCourseList = function () {
        var _this = this;
        this.authService.getCourses().subscribe(function (data) {
            _this.courseList = data;
        });
    };
    ProfdashComponent.prototype.getLectureList = function (selectedCourse) {
        var _this = this;
        this.authService.getLectures(selectedCourse).subscribe(function (data) {
            _this.lectureList = data;
        });
    };
    ProfdashComponent.prototype.courseClicked = function (course) {
        this.selectedCourse = course;
        this.getLectureList(course);
        this.getLectureList(course);
    };
    ProfdashComponent.prototype.onDeleteButton = function (course) {
        this.authService.deleteClass(course);
        this.getCourseList();
        this.getCourseList();
    };
    ProfdashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profdash',
            template: __webpack_require__(/*! ./profdash.component.html */ "./src/app/profdash/profdash.component.html"),
            styles: [__webpack_require__(/*! ./profdash.component.css */ "./src/app/profdash/profdash.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Poppins');\n\nhtml \n{\n  background-color: #0082fc;\n}\n\nbody \n{\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n}\n\na\n{\n  color: #A9A9A9;\n  display:inline-block;\n  text-decoration: none;\n  font-weight: 400;\n}\n\nh1\n{\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n}\n\nh2 \n{\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display:inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc;\n}\n\n#passwordShow\n{\n  margin-right: 240px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  color: #696969;\n  font-family: \"Poppins\", sans-serif;\n}\n\n#header\n{\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display:inline-block;\n  margin: 40px 8px 10px 8px;\n}\n\n/* Animations of the Main Box */\n\n.wrapper \n{\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n}\n\n#formContent \n{\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n  text-align: center;\n}\n\n.fadeInDown \n{\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown \n{\n  0% \n  {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% \n  {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown \n{\n  0% \n  {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fadeIn \n{\n  opacity:0;\n  -webkit-animation:fadeIn ease-in 1;\n  animation:fadeIn ease-in 1;\n\n  -webkit-animation-fill-mode:forwards;\n  animation-fill-mode:forwards;\n\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n}\n\n.fadeIn.zero \n{\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\n.fadeIn.first \n{\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n\n.fadeIn.second \n{\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n\n.fadeIn.third \n{\n  -webkit-animation-delay: 0.5s;\n  animation-delay: 0.5s;\n}\n\n.fadeIn.fourth \n{\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n\n.fadeIn.fifth\n{\n  -webkit-animation-delay: 0.7s;\n  animation-delay: 0.7s;\n}\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button], input[type=submit], input[type=reset]  \n{\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out;\n}\n\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  \n{\n  background-color: #39ace7;\n}\n\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  \n{\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n}\n\ninput[type=text], [type=password], [type=email] \n{\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: left;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=text]:focus, [type=password]:focus, [type=email]:focus  \n{\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=text]:placeholder , [type=password]:placeholder, [type=email]:placeholder  \n{\n  color: #cccccc;\n}\n\n/* Underlining of the Links */\n\nh2.inactive \n{\n  color: #cccccc;\n}\n\nh2.active \n{\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9;\n}\n\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n\n.underlineHover:hover:after{\n  width: 100%;\n}\n\n#icon \n{\n  margin: 20px;\n  width:50%;\n}\n\n*:focus \n{\n  outline: none;\n}\n\n* \n{\n  box-sizing: border-box;\n}\n\ninput:invalid\n{\n  box-shadow: none;\n}\n\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<html>\n\n  <h1>Please Fill in All the Fields</h1>\n\n  <div class=\"wrapper fadeInDown\">\n\n     <div id=\"formContent\">\n        <a [routerLink] = \"['/login']\" id=\"header\" class=\"underlineHover\" hrep=\"#\"> Sign In </a>\n        <h2 href=\"#\" class=\"active\" id=\"sign-up\">Sign Up </h2>\n\n        <!-- Logo -->\n        <div class=\"fadeIn zero\">\n           <img src=\"https://1607.tel/icons/register.png\" id=\"icon\" alt=\"Computer Hope\"/>\n        </div>\n\n        <div class=\"fadeIn first\">\n           <input type=\"text\" id=\"fname\" name=\"fname\" placeholder=\"Full Name\" required [(ngModel)]=\"name\" #fullname=\"ngModel\">\n              <div *ngIf=\"fullname.errors && (fullname.dirty || fullname.touched)\" class=\"alert alert-danger\">\n\n                 <div [hidden]=\"!fullname.errors.required\">\n                    Full Name is Required!\n                 </div>\n\n              </div>\n        </div>\n\n        <div class=\"fadeIn Second\">\n           <input type=\"email\" id=\"email\" name=\"uname\" placeholder=\"Email\" required [(ngModel)]=\"email\" #ngEmail=\"ngModel\">\n              <div *ngIf=\"ngEmail.errors && (ngEmail.dirty || ngEmail.touched)\" class=\"alert alert-danger\">\n\n                 <div [hidden]=\"!ngEmail.errors.required\">\n                    Email is Required!\n                 </div>\n\n              </div>\n        </div>\n\n        <div class=\"fadeIn third\">\n           <input type=\"text\" id=\"univId\" name=\"univId\" placeholder=\"University ID\" required [(ngModel)]=\"profNID\" #ngId=\"ngModel\">\n              <div *ngIf=\"ngId.errors && (ngId.dirty || ngId.touched)\" class=\"alert alert-danger\">\n\n                 <div [hidden]=\"!ngId.errors.required\">\n                    University ID is Required!\n                 </div>\n\n              </div>\n        </div>\n\n        <div class=\"fadeIn fifth\">\n           <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\" required minlength=\"7\" [(ngModel)]=\"password\" #ngPassword=\"ngModel\">\n              <div *ngIf=\"ngPassword.errors && (ngPassword.dirty || ngPassword.touched)\" class=\"alert alert-danger\">\n\n                 <div [hidden]=\"!ngPassword.errors.required\">\n                    Password is Required!\n                 </div>\n\n                 <div [hidden]=\"!ngPassword.errors.minlength\">\n                    At least 7 characters are Required!\n                 </div>\n\n              </div>\n        </div>\n\n        <div id=\"passwordShow\">\n           <input type=\"checkbox\" (click)=\"showPassword()\"> Show Password\n        </div>\n\n        <!-- Submit -->\n        <div>\n           <input type=\"submit\" class=\"fadeIn fourth\" value=\"Submit\" (click)=\"onSubmit()\">\n        </div>\n\n     </div>\n  </div>\n\n</html>\n"

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



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authService) {
        this.router = router;
        this.authService = authService;
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
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = {
            profNID: this.profNID,
            name: this.name,
            password: this.password,
            email: this.email
        };
        this.authService.registerUser(user).subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (err) {
            alert('Oh no! Something went wrong. Please try again!');
            _this.router.navigate(['/register']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/selectedclass/selectedclass.component.css":
/*!***********************************************************!*\
  !*** ./src/app/selectedclass/selectedclass.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/selectedclass/selectedclass.component.html":
/*!************************************************************!*\
  !*** ./src/app/selectedclass/selectedclass.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n    <link rel=\"icon\" href=\"../../../../favicon.ico\">\n\n    <!-- Bootstrap core CSS -->\n\n    <!-- Custom styles for this template -->\n  </head>\n\n  <body>\n    <nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\n      <a class=\"navbar-brand col-sm-1 col-md-1 mr-0\" href=\"#\">Welcome, {{user.name}}</a>\n      <ul class=\"navbar-nav px-3\">\n        <li class=\"nav-item text-nowrap\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"onLogOutButton()\" style=\"color: red; font-size: 24px\">Log out</a>\n        </li>\n      </ul>\n    </nav>\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <nav class=\"col-md-1 d-none d-md-block bg-light sidebar\">\n          <div class=\"sidebar-sticky\">\n            <ul class=\"nav flex-column\">\n              <li class=\"nav-item\">\n                <a class=\"underlineHover nav-link\" [routerLink]='[\"/profdash\"]'>\n                  <span data-feather=\"home\"></span>\n                  Class List\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"underlineHover nav-link\" [routerLink]='[\"/students\"]'>\n                  <span data-feather=\"students\"></span>\n                  Students\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]='[\"/addclass\"]'>\n                  <span data-feather=\"addclass\"></span>\n                  Add a class\n                </a>\n              </li>\n\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\">\n                  <span data-feather=\"addclass\"></span>\n                  Students in class <span class=\"sr-only\">(current)</span>\n                </a>\n              </li>\n\n            </ul>\n          </div>\n        </nav>\n\n        <main role=\"main\" class=\"col-md-5 ml-sm-auto col-lg-6 pt-3 px-4\" style=\"height: 100vh; border-right: 1px solid lightgrey;\">\n          <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n            <h1 class=\"h2\">Students in Selected class</h1>\n            <div class=\"btn-toolbar mb-2 mb-md-0\">\n              <div class=\"btn-group mr-2\">\n                <input class=\"form-control form-control-dark w-100\" type=\"text\" name=\"inputString\" style=\"background-color: lightgrey;\" [(ngModel)]=\"inputString\" placeholder=\"Search Classes\" aria-label=\"Search\">\n              </div>\n\n            </div>\n          </div>\n          <div id=\"class_table\">\n            <table class=\"table table-striped\" style=\"padding-top:0px;\">\n              <thead style=\"background-color: lightgrey; color: grey\">\n                <tr>\n                  <th><h6>Student Name</h6></th>\n                  <th><h6>NID</h6></th>\n                  <th><h6>Email</h6></th>\n                  <th><h6>Class Title</h6></th>\n                  <th><h6>Delete Student</h6></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr id=\"contacts\">\n                   <tr *ngFor=\"let Student of studentList | filter:inputString; let i = index\">\n                    <td><a (click)=\"studentClicked(Class)\">{{Student.name}}</a></td>\n                    <td style=\"color: lightblue;\">{{Student.studentNID}}</td>\n                    <td>{{Student.email}}</td>\n                    <td><a>{{selectedClass.className}}</a></td>\n                    <td>\n                        <button class=\"btn btn-danger\" (click)=\"onDeleteButton(Student)\">Delete</button>\n                    </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </main>\n\n      </div>\n    </div>\n\n    <!-- Bootstrap core JavaScript\n    ================================================== -->\n    <!-- Placed at the end of the document so the pages load faster -->\n    <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n    <script>window.jQuery || document.write('<script src=\"../../assets/js/vendor/jquery-slim.min.js\"><\\/script>')</script>\n    <script src=\"../../assets/js/vendor/popper.min.js\"></script>\n    <script src=\"../../dist/js/bootstrap.min.js\"></script>\n\n    <!-- Icons -->\n    <script src=\"https://unpkg.com/feather-icons/dist/feather.min.js\"></script>\n    <script>\n      feather.replace()\n    </script>\n\n    <!-- Graphs -->\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js\"></script>\n    <script>\n      var ctx = document.getElementById(\"myChart\");\n      var myChart = new Chart(ctx, {\n        type: 'line',\n        data: {\n          labels: [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"],\n          datasets: [{\n            data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],\n            lineTension: 0,\n            backgroundColor: 'transparent',\n            borderColor: '#007bff',\n            borderWidth: 4,\n            pointBackgroundColor: '#007bff'\n          }]\n        },\n        options: {\n          scales: {\n            yAxes: [{\n              ticks: {\n                beginAtZero: false\n              }\n            }]\n          },\n          legend: {\n            display: false,\n          }\n        }\n      });\n    </script>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/selectedclass/selectedclass.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/selectedclass/selectedclass.component.ts ***!
  \**********************************************************/
/*! exports provided: SelectedclassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedclassComponent", function() { return SelectedclassComponent; });
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



var SelectedclassComponent = /** @class */ (function () {
    function SelectedclassComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    SelectedclassComponent.prototype.ngOnInit = function () {
        //  if (sessionStorage.length == 0){
        //    this.router.navigate(['/home']);
        //  }
        this.pageLoad();
    };
    SelectedclassComponent.prototype.pageLoad = function () {
        var temp = sessionStorage.getItem('user');
        this.user = JSON.parse(temp);
        this.authService.storeUser(this.user);
        this.user_id = this.user['id'];
        this.getCourseList();
        this.getCourseList();
    };
    SelectedclassComponent.prototype.onLogOutButton = function () {
        sessionStorage.clear();
        this.router.navigate(['/home']);
    };
    SelectedclassComponent.prototype.getCourseList = function () {
        var _this = this;
        this.authService.getCourses().subscribe(function (data) {
            _this.courseList = data;
        });
    };
    SelectedclassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-selectedclass',
            template: __webpack_require__(/*! ./selectedclass.component.html */ "./src/app/selectedclass/selectedclass.component.html"),
            styles: [__webpack_require__(/*! ./selectedclass.component.css */ "./src/app/selectedclass/selectedclass.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SelectedclassComponent);
    return SelectedclassComponent;
}());



/***/ }),

/***/ "./src/app/selectedlecture/selectedlecture.component.css":
/*!***************************************************************!*\
  !*** ./src/app/selectedlecture/selectedlecture.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body {\n  background-color: #0082FC;\n\n}\ntable, tr{\n  word-wrap: break-word;\n}\n\n#dash .container  {\n  margin-top: 30px;\n\n  height: 500px;\n  box-shadow: 0px 0px 20px grey;\n\n}\n#dash .container #login-row #login-column #login-box #login-form {\n  padding: 20px;\n}\n#dash .container #login-row #login-column #login-box #login-form #register-link {\n  margin-top: -85px;\n}\n#dash .btn-info {\n  background-color: #0082FC;\n  border-color:#0082FC;\n}\n#dash .btn-succes {\n  background-color: #0082FC;\n  border-color: #0082FC;\n}\n#dash .text-info {\n  color: #0082FC!important;\n}\n#cont {\n  margin-top:10vh;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color:  #F9F8FA;\n  box-shadow: 0px 0px 20px grey;\n}\n\n#dashbody{\n  margin-top:5vh;\n}\n.alignRight{\n  text-align: right;\n}\n\n/* MODAL STYLES\n-------------------------------*/\n/* jw-modal {\n  display: none;\n}\njw-modal .jw-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #000;\n  margin: 40px;\n}\njw-modal .jw-modal-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.75;\n  z-index: 900;\n}\nbody.jw-modal-open {\n  overflow: hidden;\n} */\nbody {\n  font-size: .875rem;\n}\n.feather {\n  width: 16px;\n  height: 16px;\n  vertical-align: text-bottom;\n}\n/*\n * Sidebar\n */\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100; /* Behind the navbar */\n  padding: 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n}\n.sidebar-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 48px; /* Height of navbar */\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n}\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333;\n}\n.sidebar .nav-link .feather {\n  margin-right: 4px;\n  color: #999;\n}\n.sidebar .nav-link.active {\n  color: #007bff;\n}\n.sidebar .nav-link:hover .feather,\n.sidebar .nav-link.active .feather {\n  color: inherit;\n}\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase;\n}\n/*\n * Navbar\n */\n.navbar-brand {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: 1rem;\n  background-color: rgba(0, 0, 0, .25);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n}\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0;\n}\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, .1);\n  border-color: rgba(255, 255, 255, .1);\n}\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n}\n/*\n * Utilities\n */\n.border-top { border-top: 1px solid #e5e5e5; }\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n.underlineHover:hover:after{\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/selectedlecture/selectedlecture.component.html":
/*!****************************************************************!*\
  !*** ./src/app/selectedlecture/selectedlecture.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n    <link rel=\"icon\" href=\"../../../../favicon.ico\">\n\n    <!-- Bootstrap core CSS -->\n\n    <!-- Custom styles for this template -->\n  </head>\n\n  <body>\n    <nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\n      <a class=\"navbar-brand col-sm-1 col-md-1 mr-0\" href=\"#\">Welcome, {{user.name}}</a>\n      <ul class=\"navbar-nav px-3\">\n        <li class=\"nav-item text-nowrap\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"onLogOutButton()\" style=\"color: red; font-size: 24px\">Log out</a>\n        </li>\n      </ul>\n    </nav>\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <nav class=\"col-md-1 d-none d-md-block bg-light sidebar\">\n          <div class=\"sidebar-sticky\">\n            <ul class=\"nav flex-column\">\n              <li class=\"nav-item\">\n                <a class=\"underlineHover nav-link\" [routerLink]='[\"/profdash\"]'>\n                  <span data-feather=\"home\"></span>\n                  Class List\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"underlineHover nav-link\" [routerLink]='[\"/students\"]'>\n                  <span data-feather=\"students\"></span>\n                  Students\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]='[\"/addclass\"]'>\n                  <span data-feather=\"addclass\"></span>\n                  Add a class\n                </a>\n              </li>\n\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\">\n                  <span data-feather=\"addclass\"></span>\n                  Attending Students <span class=\"sr-only\">(current)</span>\n                </a>\n              </li>\n\n            </ul>\n          </div>\n        </nav>\n\n        <main role=\"main\" class=\"col-md-5 ml-sm-auto col-lg-6 pt-3 px-4\" style=\"height: 100vh; border-right: 1px solid lightgrey;\">\n          <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n            <h1 class=\"h2\">Students who Attended</h1>\n            <div class=\"btn-toolbar mb-2 mb-md-0\">\n              <div class=\"btn-group mr-2\">\n                <input class=\"form-control form-control-dark w-100\" type=\"text\" name=\"inputString\" style=\"background-color: lightgrey;\" [(ngModel)]=\"inputString\" placeholder=\"Search Classes\" aria-label=\"Search\">\n              </div>\n\n            </div>\n          </div>\n          <div id=\"class_table\">\n            <table class=\"table table-striped\" style=\"padding-top:0px;\">\n              <thead style=\"background-color: lightgrey; color: grey\">\n                <tr>\n                  <th><h6>Student Name</h6></th>\n                  <th><h6>NID</h6></th>\n                  <th><h6>Email</h6></th>\n                  <th><h6>Class Title</h6></th>\n                  <th><h6>Delete Student</h6></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr id=\"contacts\">\n                   <tr *ngFor=\"let Student of studentList | filter:inputString; let i = index\">\n                    <td><a (click)=\"studentClicked(Class)\">{{Student.name}}</a></td>\n                    <td style=\"color: lightblue;\">{{Student.studentNID}}</td>\n                    <td>{{Student.email}}</td>\n                    <td><a>{{selectedClass.className}}</a></td>\n                    <td>\n                        <button class=\"btn btn-danger\" (click)=\"onDeleteButton(Student)\">Delete</button>\n                    </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </main>\n\n      </div>\n    </div>\n\n    <!-- Bootstrap core JavaScript\n    ================================================== -->\n    <!-- Placed at the end of the document so the pages load faster -->\n    <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n    <script>window.jQuery || document.write('<script src=\"../../assets/js/vendor/jquery-slim.min.js\"><\\/script>')</script>\n    <script src=\"../../assets/js/vendor/popper.min.js\"></script>\n    <script src=\"../../dist/js/bootstrap.min.js\"></script>\n\n    <!-- Icons -->\n    <script src=\"https://unpkg.com/feather-icons/dist/feather.min.js\"></script>\n    <script>\n      feather.replace()\n    </script>\n\n    <!-- Graphs -->\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js\"></script>\n    <script>\n      var ctx = document.getElementById(\"myChart\");\n      var myChart = new Chart(ctx, {\n        type: 'line',\n        data: {\n          labels: [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"],\n          datasets: [{\n            data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],\n            lineTension: 0,\n            backgroundColor: 'transparent',\n            borderColor: '#007bff',\n            borderWidth: 4,\n            pointBackgroundColor: '#007bff'\n          }]\n        },\n        options: {\n          scales: {\n            yAxes: [{\n              ticks: {\n                beginAtZero: false\n              }\n            }]\n          },\n          legend: {\n            display: false,\n          }\n        }\n      });\n    </script>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/selectedlecture/selectedlecture.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/selectedlecture/selectedlecture.component.ts ***!
  \**************************************************************/
/*! exports provided: SelectedlectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedlectureComponent", function() { return SelectedlectureComponent; });
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



var SelectedlectureComponent = /** @class */ (function () {
    function SelectedlectureComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    SelectedlectureComponent.prototype.ngOnInit = function () {
        //  if (sessionStorage.length == 0){
        //    this.router.navigate(['/home']);
        //  }
        this.pageLoad();
    };
    SelectedlectureComponent.prototype.pageLoad = function () {
        var temp = sessionStorage.getItem('user');
        this.user = JSON.parse(temp);
        this.authService.storeUser(this.user);
        this.user_id = this.user['id'];
        this.getCourseList();
        this.getCourseList();
    };
    SelectedlectureComponent.prototype.onLogOutButton = function () {
        sessionStorage.clear();
        this.router.navigate(['/home']);
    };
    SelectedlectureComponent.prototype.getCourseList = function () {
        var _this = this;
        this.authService.getCourses().subscribe(function (data) {
            _this.courseList = data;
        });
    };
    SelectedlectureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-selectedlecture',
            template: __webpack_require__(/*! ./selectedlecture.component.html */ "./src/app/selectedlecture/selectedlecture.component.html"),
            styles: [__webpack_require__(/*! ./selectedlecture.component.css */ "./src/app/selectedlecture/selectedlecture.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SelectedlectureComponent);
    return SelectedlectureComponent;
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
        return this.http.post('/api/professors/createProfessor/', user, { headers: this.headers });
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post('/api/professors/login/', user, { headers: this.headers });
    };
    AuthService.prototype.createClass = function (course) {
        return this.http.post('/api/classes/create/' + this.user.profNID, course, { headers: this.headers });
    };
    //   // Endpoints for interacting with Contacts
    AuthService.prototype.getCourses = function () {
        return this.http.get('/api/classes/' + this.user.profNID, { headers: this.headers });
    };
    AuthService.prototype.getLectures = function (course) {
        return this.http.get('/api/lectures/' + course._id, { headers: this.headers });
    };
    AuthService.prototype.deleteClass = function (course) {
        return this.http.post('/api/classes/delete/' + course._id, { headers: this.headers });
    };
    AuthService.prototype.getStudents = function () {
        return this.http.get('/api/students', { headers: this.headers });
    };
    AuthService.prototype.getClassesForStudent = function (student) {
        return this.http.get('/api/students/viewClasses/' + student.studentNID, { headers: this.headers });
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
    FilterPipe.prototype.transform = function (courseList, inputString) {
        // Check if the search inputString is empty/undefined
        if (inputString == undefined) {
            return courseList;
        }
        // If there is input string to search:
        return courseList.filter(function (retVal) {
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

/***/ "./src/app/student-list/student-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/student-list/student-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body {\n  background-color: #0082FC;\n\n}\ntable, tr{\n  word-wrap: break-word;\n}\n\n#dash .container  {\n  margin-top: 30px;\n\n  height: 500px;\n  box-shadow: 0px 0px 20px grey;\n\n}\n#dash .container #login-row #login-column #login-box #login-form {\n  padding: 20px;\n}\n#dash .container #login-row #login-column #login-box #login-form #register-link {\n  margin-top: -85px;\n}\n#dash .btn-info {\n  background-color: #0082FC;\n  border-color:#0082FC;\n}\n#dash .btn-succes {\n  background-color: #0082FC;\n  border-color: #0082FC;\n}\n#dash .text-info {\n  color: #0082FC!important;\n}\n#cont {\n  margin-top:10vh;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color:  #F9F8FA;\n  box-shadow: 0px 0px 20px grey;\n}\n\n#dashbody{\n  margin-top:5vh;\n}\n.alignRight{\n  text-align: right;\n}\n\n/* MODAL STYLES\n-------------------------------*/\n/* jw-modal {\n  display: none;\n}\njw-modal .jw-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #000;\n  margin: 40px;\n}\njw-modal .jw-modal-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.75;\n  z-index: 900;\n}\nbody.jw-modal-open {\n  overflow: hidden;\n} */\nbody {\n  font-size: .875rem;\n}\n.feather {\n  width: 16px;\n  height: 16px;\n  vertical-align: text-bottom;\n}\n/*\n * Sidebar\n */\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100; /* Behind the navbar */\n  padding: 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n}\n.sidebar-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 48px; /* Height of navbar */\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n}\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333;\n}\n.sidebar .nav-link .feather {\n  margin-right: 4px;\n  color: #999;\n}\n.sidebar .nav-link.active {\n  color: #007bff;\n}\n.sidebar .nav-link:hover .feather,\n.sidebar .nav-link.active .feather {\n  color: inherit;\n}\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase;\n}\n/*\n * Navbar\n */\n.navbar-brand {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: 1rem;\n  background-color: rgba(0, 0, 0, .25);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n}\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0;\n}\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, .1);\n  border-color: rgba(255, 255, 255, .1);\n}\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n}\n/*\n * Utilities\n */\n.border-top { border-top: 1px solid #e5e5e5; }\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n.underlineHover:hover:after{\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/student-list/student-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/student-list/student-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n    <link rel=\"icon\" href=\"../../../../favicon.ico\">\n\n    <!-- Bootstrap core CSS -->\n\n    <!-- Custom styles for this template -->\n  </head>\n\n  <body>\n    <nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\n      <a class=\"navbar-brand col-sm-1 col-md-1 mr-0\" href=\"#\">Welcome, {{user.name}}</a>\n      <ul class=\"navbar-nav px-3\">\n        <li class=\"nav-item text-nowrap\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"onLogOutButton()\" style=\"color: red; font-size: 24px\">Log out</a>\n        </li>\n      </ul>\n    </nav>\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <nav class=\"col-md-1 d-none d-md-block bg-light sidebar\">\n          <div class=\"sidebar-sticky\">\n            <ul class=\"nav flex-column\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" hrep=\"#\" [routerLink] = \"['/profdash']\">\n                  <span data-feather=\"home\"></span>\n                  Class List\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"underlineHover nav-link active\" href=\"#\">\n                  <span data-feather=\"file\"></span>\n                  Students <span class=\"sr-only\">(current)</span>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"underlineHover nav-link\" [routerLink] = \"['/addclass']\" hrep=\"#\">\n                  <span data-feather=\"shopping-cart\"></span>\n                  Add a class\n                </a>\n              </li>\n\n            </ul>\n          </div>\n        </nav>\n\n        <main role=\"main\" class=\"col-md-5 ml-sm-auto col-lg-6 pt-3 px-4\" style=\"height: 100vh; border-right: 1px solid lightgrey;\">\n          <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n            <h1 class=\"h2\">All Students</h1>\n            <div class=\"btn-toolbar mb-2 mb-md-0\">\n              <div class=\"btn-group mr-2\">\n                <input class=\"form-control form-control-dark w-100\" type=\"text\" name=\"inputString\" style=\"background-color: lightgrey;\" [(ngModel)]=\"inputString\" placeholder=\"Search Classes\" aria-label=\"Search\">\n              </div>\n\n            </div>\n          </div>\n          <div id=\"class_table\">\n            <table class=\"table table-striped\" style=\"padding-top:0px;\">\n              <thead style=\"background-color: lightgrey; color: grey\">\n                <tr>\n                  <th><h6>Student Name</h6></th>\n                  <th><h6>Student NID</h6></th>\n                  <th><h6>Email</h6></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr id=\"contacts\">\n                   <tr *ngFor=\"let student of studentList | filter:inputString; let i = index\">\n                    <td style=\"color: blue;\"><a (click)=\"studentClicked(student)\">{{student.name}}</a></td>\n                    <td >{{student.studentNID}}</td>\n                    <td>{{student.email}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </main>\n        <div class=\"col-md-5  pt-3 px-4\">\n          <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n            <h1 class=\"h2\">Selected Student Class Info</h1>\n            <div class=\"btn-toolbar mb-2 mb-md-0\">\n              <div class=\"btn-group mr-2\">\n\n              </div>\n\n            </div>\n          </div>\n\n          <div id=\"class_table\">\n            <table class=\"table table-striped\" style=\"padding-top:0px;\">\n              <thead style=\"background-color: lightgrey; color: grey\">\n                <tr>\n                  <th><h6>Class Name</h6></th>\n                  <th><h6>Class Code</h6></th>\n                  <th><h6>Start Time</h6></th>\n                  <th><h6>End Time</h6></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr id=\"contacts\">\n                   <tr *ngFor=\"let course of courseList\">\n                    <td>{{course.className}}</td>\n                    <td>{{course.courseID}}</td>\n                    <td>{{course.startTime}}</td>\n                    <td>{{course.endTime}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Bootstrap core JavaScript\n    ================================================== -->\n    <!-- Placed at the end of the document so the pages load faster -->\n    <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n    <script>window.jQuery || document.write('<script src=\"../../assets/js/vendor/jquery-slim.min.js\"><\\/script>')</script>\n    <script src=\"../../assets/js/vendor/popper.min.js\"></script>\n    <script src=\"../../dist/js/bootstrap.min.js\"></script>\n\n    <!-- Icons -->\n    <script src=\"https://unpkg.com/feather-icons/dist/feather.min.js\"></script>\n    <script>\n      feather.replace()\n    </script>\n\n    <!-- Graphs -->\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js\"></script>\n    <script>\n      var ctx = document.getElementById(\"myChart\");\n      var myChart = new Chart(ctx, {\n        type: 'line',\n        data: {\n          labels: [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"],\n          datasets: [{\n            data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],\n            lineTension: 0,\n            backgroundColor: 'transparent',\n            borderColor: '#007bff',\n            borderWidth: 4,\n            pointBackgroundColor: '#007bff'\n          }]\n        },\n        options: {\n          scales: {\n            yAxes: [{\n              ticks: {\n                beginAtZero: false\n              }\n            }]\n          },\n          legend: {\n            display: false,\n          }\n        }\n      });\n    </script>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/student-list/student-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/student-list/student-list.component.ts ***!
  \********************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
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



var StudentListComponent = /** @class */ (function () {
    function StudentListComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    StudentListComponent.prototype.ngOnInit = function () {
        //  if (sessionStorage.length == 0){
        //    this.router.navigate(['/home']);
        //  }
        this.pageLoad();
    };
    StudentListComponent.prototype.pageLoad = function () {
        var temp = sessionStorage.getItem('user');
        this.user = JSON.parse(temp);
        this.authService.storeUser(this.user);
        this.user_id = this.user['id'];
        this.getStudentList();
        this.getStudentList();
    };
    StudentListComponent.prototype.onLogOutButton = function () {
        sessionStorage.clear();
        this.router.navigate(['/home']);
    };
    StudentListComponent.prototype.studentClicked = function (student) {
        this.selectedStudent = student;
        this.getClassList(student);
        this.getClassList(student);
    };
    StudentListComponent.prototype.getClassList = function (student) {
        var _this = this;
        this.authService.getClassesForStudent(student).subscribe(function (data) {
            _this.courseList = data;
        });
    };
    StudentListComponent.prototype.getStudentList = function () {
        var _this = this;
        this.authService.getStudents().subscribe(function (data) {
            _this.studentList = data;
        });
    };
    StudentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/student-list/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student-list.component.css */ "./src/app/student-list/student-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], StudentListComponent);
    return StudentListComponent;
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