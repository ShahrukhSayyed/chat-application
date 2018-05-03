webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Chat Application';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat_module__ = __webpack_require__("./src/app/chat/chat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_module__ = __webpack_require__("./src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_login_login_component__ = __webpack_require__("./src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_filter_pipe__ = __webpack_require__("./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_signup_signup_component__ = __webpack_require__("./src/app/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__chat_chat_box_chat_box_component__ = __webpack_require__("./src/app/chat/chat-box/chat-box.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__chat_chat_module__["a" /* ChatModule */],
                __WEBPACK_IMPORTED_MODULE_5__user_user_module__["a" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_filter_pipe__["a" /* FilterPipeModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot([
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__user_login_login_component__["a" /* LoginComponent */] },
                    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_12__user_signup_signup_component__["a" /* SignupComponent */] },
                    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_14__chat_chat_box_chat_box_component__["a" /* ChatBoxComponent */] },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '*', component: __WEBPACK_IMPORTED_MODULE_6__user_login_login_component__["a" /* LoginComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__user_login_login_component__["a" /* LoginComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_cookies_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_cookies_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Added for Http and Observables






var AppService = /** @class */ (function () {
    function AppService(_http) {
        var _this = this;
        this._http = _http;
        this.baseUrl = "https://chatapi.edwisor.com";
        //method to SignUp the User
        this.signUp = function (data) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]()
                .set('firstName', data.firstName)
                .set('lastName', data.lastName)
                .set('mobile', data.mobile)
                .set('email', data.email)
                .set('password', data.password)
                .set('apiKey', data.apiKey);
            var response = _this._http.post(_this.baseUrl + "/api/v1/users/signup", params);
            return response;
        };
        //method to SignIn the User
        this.signIn = function (data) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]()
                .set('email', data.email)
                .set('password', data.password);
            var response = _this._http.post(_this.baseUrl + "/api/v1/users/login", params);
            return response;
        };
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        }; // end setUserInfoFromLocalstorage
        //console.log("AppService is called");
    }
    //method to handle http calls
    AppService.prototype.handleError = function (err) {
        console.log("Handle error HTTP calls");
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    AppService.prototype.logout = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]()
            .set('authToken', __WEBPACK_IMPORTED_MODULE_6_ng2_cookies_ng2_cookies__["Cookie"].get('authToken'));
        return this._http.post(this.baseUrl + "/api/v1/users/logout", params);
    }; // end logout function
    //* Chat related methods *//
    AppService.prototype.getChat = function (senderId, receiverId, skip) {
        return this._http.get(this.baseUrl + "/api/v1/chat/get/for/user?senderId=" + senderId + "&receiverId=" + receiverId + "&skip=" + skip + "&authToken=" + __WEBPACK_IMPORTED_MODULE_6_ng2_cookies_ng2_cookies__["Cookie"].get('authToken'))
            .do(function (data) { return console.log('Chat Found'); })
            .catch(this.handleError);
    }; // end getChat function
    AppService.prototype.getCount = function (userId, senderId) {
        return this._http.get(this.baseUrl + "/api/v1/chat/count/unseen?userId=" + userId + "&senderId=" + senderId + "&authToken=" + __WEBPACK_IMPORTED_MODULE_6_ng2_cookies_ng2_cookies__["Cookie"].get('authToken'))
            .do(function (data) { return console.log('Count Received'); })
            .catch(this.handleError);
    }; // end getCount function
    AppService.prototype.unseenUserList = function (userId) {
        return this._http.get(this.baseUrl + "/api/v1/chat/unseen/user/list?userId=" + userId + "&authToken=" + __WEBPACK_IMPORTED_MODULE_6_ng2_cookies_ng2_cookies__["Cookie"].get('authToken'))
            .do(function (data) { return console.log('Unseen User List Found'); })
            .catch(this.handleError);
    }; // end getCount function
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/chat/chat-box/chat-box.component.css":
/***/ (function(module, exports) {

module.exports = ".online{\r\n\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color:green;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .offline{\r\n  \r\n    height: 10px;\r\n    width: 10px;\r\n    background-color:red;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .rightSideClass {\r\n      float: right;\r\n      background: #ddd;\r\n      border-radius: 0.5em;\r\n    }\r\n  \r\n  .leftSideClass {\r\n      float: left;\r\n      background: #55C1E7;\r\n      border-radius: 0.5em;\r\n    }\r\n  \r\n  .circle-green:before {\r\n      content: ' \\25CF';\r\n      font-size: 1em;\r\n      color: green;\r\n    }\r\n  \r\n  .circle-red:before {\r\n      content: ' \\25CF';\r\n      font-size: 1em;\r\n      color: red;\r\n    }\r\n  \r\n  .cursorPointer {\r\n      cursor: pointer;\r\n    }\r\n  \r\n  .textCenter {\r\n      text-align: center;\r\n    }\r\n  \r\n  .floatLeft {\r\n      float: left;\r\n    }\r\n  \r\n  *,\r\n    *:before,\r\n    *:after {\r\n      -webkit-box-sizing: border-box;\r\n      box-sizing: border-box;\r\n    }\r\n  \r\n  body {\r\n      padding: 2.5em 0;\r\n      color: white;\r\n    }\r\n  \r\n  .container {\r\n      margin: 0 auto;\r\n      background: #444753;\r\n      border-radius: 0.3em;\r\n    }\r\n  \r\n  .people-list {\r\n      float: left;\r\n      overflow-y: scroll;\r\n      height: 55vh;\r\n    }\r\n  \r\n  .people-list input {\r\n      border-radius: 0.2em;\r\n      border: none;\r\n      padding: 1em;\r\n      color: white;\r\n      background: #6A6C75;\r\n      width: 90%;\r\n      font-size: 1em;\r\n    }\r\n  \r\n  .people-list .fa-search {\r\n      position: relative;\r\n      left: -1.8em;\r\n    }\r\n  \r\n  .people-list ul {\r\n      padding: 0;\r\n    }\r\n  \r\n  .people-list ul li .userPresence {\r\n      float: left;\r\n      padding: 0.7em 0.2em;\r\n      color: white;\r\n      text-transform: capitalize;\r\n    }\r\n  \r\n  .textCapitalize {\r\n      text-transform: capitalize;\r\n      font-size: 1.2em;\r\n    }\r\n  \r\n  .people-list img {\r\n      float: left;\r\n    }\r\n  \r\n  .people-list .about {\r\n      float: left;\r\n    }\r\n  \r\n  .people-list .about {\r\n      padding-left: 0.4em;\r\n    }\r\n  \r\n  .people-list .status {\r\n      color: #92959E;\r\n    }\r\n  \r\n  .chat {\r\n      height: 80vh;\r\n      float: left;\r\n      background: #F2F5F8;\r\n      border-top-right-radius: 0.3em;\r\n      border-bottom-right-radius: 0.3em;\r\n      color: #434651;\r\n    }\r\n  \r\n  .chat .chat-header {\r\n      padding: 0.2em;\r\n      border-bottom: 0.15em solid white;\r\n    }\r\n  \r\n  .chat .chat-header img {\r\n      float: left;\r\n    }\r\n  \r\n  .chat .chat-header .chat-about {\r\n      float: left;\r\n      padding-left: 0.8em;\r\n      margin-top: 0.4em;\r\n    }\r\n  \r\n  .chat .chat-header .chat-with {\r\n      font-weight: bold;\r\n      font-size: 1.1em;\r\n    }\r\n  \r\n  .chat .chat-header .chat-num-messages {\r\n      color: #92959E;\r\n    }\r\n  \r\n  .chat .chat-header .fa-star {\r\n      float: right;\r\n      color: #D8DADF;\r\n      font-size: 1.42em;\r\n      margin-top: 0.85em;\r\n    }\r\n  \r\n  .chat .chat-history {\r\n      padding: 2em 2em 1.42em;\r\n      border-bottom: 0.15em solid white;\r\n      overflow-y: scroll;\r\n      height: 50vh;\r\n    }\r\n  \r\n  .chat .chat-history .message-data {\r\n      margin-bottom: 1em;\r\n    }\r\n  \r\n  .chat .chat-history .message-data-time {\r\n      color: #a8aab1;\r\n      padding-left: 0.4em;\r\n    }\r\n  \r\n  .chat .chat-history .message {\r\n      color: white;\r\n      padding: 0.5em 1.42em;\r\n      line-height: 1.9em;\r\n      font-size: 1.1em;\r\n      border-radius: 7px;\r\n      margin-bottom: 2em;\r\n      width: 90%;\r\n      position: relative;\r\n    }\r\n  \r\n  .chat .chat-history .message:after {\r\n      bottom: 100%;\r\n      left: 7%;\r\n      border: solid transparent;\r\n      content: \" \";\r\n      height: 0;\r\n      width: 0;\r\n      position: absolute;\r\n      pointer-events: none;\r\n      border-bottom-color: #86BB71;\r\n      border-width: 0.8em;\r\n      margin-left: -0.8em;\r\n    }\r\n  \r\n  .chat .chat-history .my-message {\r\n      background: #86BB71;\r\n    }\r\n  \r\n  .chat .chat-history .other-message {\r\n      background: #94C2ED;\r\n    }\r\n  \r\n  .chat .chat-history .other-message:after {\r\n      border-bottom-color: #94C2ED;\r\n      left: 90%;\r\n    }\r\n  \r\n  .chat .chat-message textarea {\r\n      width: 100%;\r\n      border: none;\r\n      padding: 0.8em 1.42em;\r\n      margin-bottom: 0.8em;\r\n      border-radius: 5px;\r\n      resize: none;\r\n    }\r\n  \r\n  .chat .chat-message .fa-file-o,\r\n    .chat .chat-message .fa-file-image-o {\r\n      font-size: 1.1em;\r\n      color: gray;\r\n      cursor: pointer;\r\n    }\r\n  \r\n  .chat .chat-message button {\r\n      float: right;\r\n      color: #94C2ED;\r\n      font-size: 1.1em;\r\n      text-transform: uppercase;\r\n      border: none;\r\n      cursor: pointer;\r\n      font-weight: bold;\r\n      background: #F2F5F8;\r\n    }\r\n  \r\n  .chat .chat-message button:hover {\r\n      background-color: #75b1e8;\r\n      color: #000;\r\n    }\r\n  \r\n  .online,\r\n    .offline,\r\n    .me,\r\n    .warning {\r\n      margin-right: 3px;\r\n      font-size: 0.8em;\r\n    }\r\n  \r\n  .online {\r\n      color: #86BB71;\r\n    }\r\n  \r\n  .offline {\r\n      color: #E38968;\r\n    }\r\n  \r\n  .me {\r\n      color: #94C2ED;\r\n    }\r\n  \r\n  .warning {\r\n      color: #e78930;\r\n    }\r\n  \r\n  .align-left {\r\n      text-align: left;\r\n    }\r\n  \r\n  .align-right {\r\n      text-align: right;\r\n    }\r\n  \r\n  .float-right {\r\n      float: right;\r\n    }\r\n  \r\n  .clearfix:after {\r\n      visibility: hidden;\r\n      display: block;\r\n      font-size: 0;\r\n      content: \" \";\r\n      clear: both;\r\n      height: 0;\r\n    }\r\n  \r\n  .customButton {\r\n      width: 100%;\r\n    }\r\n  \r\n  .activeChat {\r\n      background: #393a41;\r\n    }\r\n  \r\n  .typeOfChats {\r\n      background: #393a41;\r\n      color: white;\r\n      margin-top: 0.2em;\r\n      margin-bottom: 0.2em;\r\n    }\r\n  \r\n  .blankContent{\r\n      height: 80vh;\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n      -webkit-box-pack: center;\r\n          -ms-flex-pack: center;\r\n              justify-content: center;\r\n      font-size: 3rem;\r\n      color: #999;\r\n    }\r\n  \r\n  @media only screen and (max-width:575px) {\r\n      .chat .chat-history {\r\n        height:50vh;\r\n      }\r\n    }\r\n  \r\n  @media only screen and (min-width:576px) and (max-width:768px) {\r\n      .chat .chat-history {\r\n        height:50vh;\r\n      }\r\n    }\r\n  \r\n  @media only screen and (min-width:769px) and (max-width:992px) {\r\n      .chat .chat-history {\r\n        height:50vh;\r\n      }\r\n    }\r\n  \r\n  @media only screen and (min-width:993px) and (max-width:1200  px) {\r\n      .chat .chat-history {\r\n        height:50vh;\r\n      }\r\n    }\r\n  \r\n  /* user list items */\r\n  \r\n  .crop {\r\n    border-radius: 100%;\r\n    line-height: 1em;\r\n    padding: 1em;\r\n    text-align: center;\r\n    margin: 0em;\r\n    width: 3em;\r\n    height: 3em;\r\n    float: left;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .about {\r\n    float: left;\r\n    padding-left: 0.4em;\r\n  }\r\n  \r\n  .online,\r\n  .offline,\r\n  .me,\r\n  .warning {\r\n    margin-right: 3px;\r\n    font-size: 0.8em;\r\n  }\r\n  \r\n  .online {\r\n    color: #86BB71;\r\n  }\r\n  \r\n  .offline {\r\n    color: #E38968;\r\n  }\r\n  \r\n  .me {\r\n    color: #94C2ED;\r\n  }\r\n  \r\n  .warning {\r\n    color: #00c8e7;\r\n  }\r\n  \r\n  .status {\r\n    color: #92959E;\r\n  }\r\n  \r\n  .name {\r\n    float: left;\r\n  }\r\n  \r\n  .icons{\r\n   color:#4ABDAC;\r\n\r\n }\r\n  \r\n  /*From my whatsApp Framework*/\r\n  \r\n  /*navbar style*/\r\n  \r\n  .navbar-custom {\r\n  background-color:#8DE4AF;\r\n \r\n}\r\n  \r\n  #collapsibleNavbar a:hover{\r\n   background-color:#E7717D;\r\n   color:white;\r\n}\r\n  \r\n  .font-adjust{\r\nfont-family:garamond;\r\nfont-weight:bold;\r\n\r\n}\r\n  \r\n  /*navbar -end*/\r\n  \r\n  /*main body*/\r\n  \r\n  /*chat section*/\r\n  \r\n  .img-adjust{\r\nwidth:10vmin;\r\nheight:10vmin;\r\n}\r\n  \r\n  @media only screen and (max-width:1020px){\r\n  .img-adjust{\r\nwidth:50px;\r\nheight:48px;\r\n}\r\n}\r\n  \r\n  .top-adjust{\r\nmargin-top:9vmin;\r\n}\r\n  \r\n  @media only screen and (max-width:1024px){\r\n  .top-adjust{\r\nmargin-top:57px;\r\n}\r\n}\r\n  \r\n  .box-decoration{\r\n -webkit-box-shadow: 5px 10px 18px #C2B9B0;\r\n         box-shadow: 5px 10px 18px #C2B9B0;\r\n}\r\n  \r\n  .chat-adjust{\r\nmargin-top:2vmin;\r\nmargin-bottom:2vmin;\r\n}\r\n  \r\n  .font-adjust-heading{\r\nfont-weight:bold;\r\nfont-family:garamond;\r\nfont-size:1.4vw;\r\n}\r\n  \r\n  @media only screen and (max-width:1024px){\r\n  .font-adjust-heading{\r\nfont-weight:bold;\r\nfont-family:garamond;\r\nfont-size:16px;\r\n}\r\n  \r\n\r\n}\r\n  \r\n  #card-design{\r\ncursor:pointer;\r\n}\r\n  \r\n  #card-design:hover{\r\nbackground-color:#E7717D;\r\n}\r\n  \r\n  /*profile setting*/\r\n  \r\n  .proimg-adjust{\r\nwidth:16vmin;\r\nheight:18vmin;\r\n\r\n}\r\n  \r\n  .color-set{\r\nbackground-color:#E7717D;\r\n}\r\n  \r\n  .change-profile{\r\ncursor:pointer;\r\n}\r\n  \r\n  .circle{\r\n   width: 0.5vw;\r\n   height: 0.5vw;\r\n \r\n   display:inline-block;\r\n}\r\n  \r\n  @media only screen and (max-width:1024px){\r\n  .circle{\r\n   width: 7px;\r\n   height: 7px;\r\n \r\n   display:inline-block;\r\n}\r\n\r\n}\r\n  \r\n  .chat-top-adjust{\r\nmargin-top:4vmin;\r\nmargin-bottom:4vmin;\r\n}\r\n  \r\n  .border{\r\n    -webkit-box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n"

/***/ }),

/***/ "./src/app/chat/chat-box/chat-box.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- my content start -->\n<div id=\"mycontent\">\n  <nav class=\"navbar navbar-expand-md navbar-custom navbar-dark fixed-top\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-brand font-adjust\" href=\"\">Chat Application\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n        <span></span>\n        <i class=\"fa fa-ellipsis-v text-dark\"></i>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link text-light\" href=\"\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link text-light\" (click)=\"logout()\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- navbar end -->\n\n  <div class=\"container-fluid top-adjust\">\n    <div class=\"row\">\n      <!-- left section -->\n      <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 box-decoration border \">\n        <div class=\"row border\">\n\n          <div class=\"col-3\">\n\n            <img src=\"assets/user.svg\" class=\"img-adjust img-fluid rounded-circle\">\n          </div>\n\n          <div class=\"col-9\" style=\"font-size: 1.5em\">\n            {{userInfo.firstName}} {{userInfo.lastName}}\n            <i class=\"online\" *ngIf=\"disconnectedSocket == false\"></i>\n            <i class=\"offline\" *ngIf=\"disconnectedSocket == true\"></i>\n          </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n          <div class=\"input-group col-12\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"basic-addon2\">\n                <i class=\"fas fa-search\"></i>\n              </span>\n            </div>\n            <input type=\"text\" name=\"nameValue\" class=\"form-control\" placeholder=\"Search a contact\" aria-label=\"Name\" aria-describedby=\"basic-addon2\">\n          </div>\n        </div>\n        <br/>\n\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-12 people-list\">\n            <h5>Online Friends</h5>\n            <div class=\"card my-card\" id=\"card-design\" [ngClass]=\"{'activeChat': user.chating == true}\" *ngFor=\"let user of userList\">\n              <div class=\"card-body p-2\" (click)=\"userSelectedToChat(user.userId, user.name)\" *ngIf=\"user.online == true\">\n\n                <div class=\"row\" >\n                  <div class=\"col-lg-3 col-3 col-sm-2 col-md-3\">\n                    <first-char [userName]=\"user.name\" [userBg]=\"'#4abdac'\" [userColor]=\"'white'\" (notify)=\"showUserName($event)\"></first-char>\n                  </div>\n                  <div class=\"col-lg-9 col-9 col-sm-10 col-md-9\" class=\"userPresence\">\n                    <span class=\"d-block font-adjust-heading\">{{user.name}}\n                      <div class=\"circle bg bg-success rounded-circle\"></div>\n                    </span>\n                    <span class=\"font-adjust-heading\">\n                      <span class=\"badge badge-pill badge-success\" *ngIf=\"user.unread > 0\">{{user.unread}}</span>\n                    </span>\n                  </div>\n\n                </div>\n\n              </div>\n            </div>\n\n            <br/>\n            <h5>Unseen Messages </h5>\n            <div class=\"card my-card\" id=\"card-design\" [ngClass]=\"{'activeChat': user.chating == true}\" *ngFor=\"let user of unseenUserList\">\n              <div class=\"card-body p-2\" (click)=\"userSelectedToChat(user.userId, user.name)\" *ngIf=\"user.online == false\">\n\n                <div class=\"row\">\n                  <div class=\"col-lg-3 col-3 col-sm-2 col-md-3\">\n                    <first-char [userName]=\"user.name\" [userBg]=\"'#4abdac'\" [userColor]=\"'white'\" (notify)=\"showUserName($event)\"></first-char>\n                  </div>\n                  <div class=\"col-lg-9 col-9 col-sm-10 col-md-9\" class=\"userPresence\">\n                    <span class=\"d-block font-adjust-heading\">{{user.name}}\n                      <div class=\"circle bg bg-dark rounded-circle\"></div>\n                    </span>\n                    <span class=\"font-adjust-heading\">\n                      <span class=\"badge badge-pill badge-success\" *ngIf=\"user.unread > 0\">{{user.unread}}</span>\n                    </span>\n                  </div>\n\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n          <!-- column of user Header end -->\n        </div>\n        <!-- row end -->\n\n      </div>\n      <!-- left section end -->\n\n      <!-- right section -->\n\n      <div class=\"col-12 col-sm-8 col-md-8 chat border\">\n        <div class=\"chat-header clearfix mobileMenu border\" *ngIf=\"receiverName\">\n          <first-char [userName]=\"receiverName\" [userBg]=\"'#4abdac'\" [userColor]=\"'white'\" (notify)=\"showUserName($event)\"></first-char>\n\n          <div class=\"chat-about\">\n            <div class=\"chat-with\">Chat with {{receiverName}}</div>\n          </div>\n        </div>\n        <!-- end chat-header -->\n\n        <div #scrollMe [scrollTop]=\"(scrollToChatTop)?0:scrollMe.scrollHeight\" class=\"chat-history\" *ngIf=\"receiverName\">\n\n          <div>\n            <div class=\"textCenter\" *ngIf=\"receiverName\">\n\n              <span class=\"cursorPointer\" (click)=\"loadEarlierPageOfChat()\">Load Previous Chat</span>\n\n              <br>\n\n              <span *ngIf=\"loadingPreviousChat == true\">Loading...</span>\n\n            </div>\n            <div class=\"clearfix\" *ngFor=\"let message of messageList\">\n              <div class=\"message-data\" [ngClass]=\"{'align-right': message.senderId == userInfo.userId}\">\n                <span class=\"message-data-time\">{{message.createdOn | date: 'medium' }}</span> &nbsp; &nbsp;\n                <span class=\"message-data-name floatLeft\" *ngIf=\"message.senderId != userInfo.userId\">\n                  <i class=\"fa fa-circle online\"></i> {{ message?.senderName }}</span>\n                <span class=\"message-data-name\" *ngIf=\"message.senderId == userInfo.userId\">{{ message?.senderName }}</span>\n                <i class=\"fa fa-circle me\" *ngIf=\"message.senderId == userInfo.userId\"></i>\n\n              </div>\n              <div class=\"message\" [ngClass]=\"{'float-right other-message': message.senderId == userInfo.userId, 'my-message': message.senderId != userInfo.userId}\">\n                {{message?.message | removeSpecialCharPipe: '#' | removeSpecialCharPipe: '$'}}\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n        <div *ngIf=\"!receiverName\" class=\"col-sm blankContent\">\n          Click on user to start a chat!!!\n        </div>\n        <!-- end chat-history -->\n\n        <div class=\"chat-message clearfix p-2\" *ngIf=\"receiverName\">\n          <div class=\"row\">\n            <div class=\"col-sm-11\">\n              <textarea name=\"message-to-send\" id=\"message-to-send\" (keydown)=\"sendMessageUsingKeypress($event)\" [(ngModel)]=\"messageText\"\n                placeholder=\"Type your message\" rows=\"3\"></textarea>\n\n            </div>\n            <div class=\"col-sm-1\">\n              <button (click)=\"sendMessage()\">Send</button>\n            </div>\n          </div>\n\n        </div>\n        <!-- end chat-message -->\n\n      </div>\n\n      <!-- right section end -->\n    </div>\n    <!-- row end -->\n  </div>\n  <!-- conatiner end -->\n</div>\n<!-- mycontent end -->"

/***/ }),

/***/ "./src/app/chat/chat-box/chat-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatBoxComponent = /** @class */ (function () {
    function ChatBoxComponent(appService, socketService, router, toastr, vcr) {
        var _this = this;
        this.appService = appService;
        this.socketService = socketService;
        this.router = router;
        this.toastr = toastr;
        this.userList = [];
        this.unseenUserList = [];
        this.messageList = []; // stores the current message list display in chat box
        this.pageValue = 0;
        this.loadingPreviousChat = false;
        this.scrollToChatTop = false;
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser()
                .subscribe(function (apiResponse) {
                _this.disconnectedSocket = false;
                _this.socketService.setUser(_this.authToken);
            }, function (err) {
                _this.toastr.error("Some error occured");
            });
        }; // end verifyUserConfirmation
        this.getOnlineUserList = function () {
            _this.socketService.onlineUserList()
                .subscribe(function (respnseList) {
                _this.userList = [];
                var _loop_1 = function (x) {
                    var count;
                    if (_this.loggedInUser != x) {
                        _this.appService.getCount(_this.loggedInUser, x)
                            .subscribe(function (apiResponse) {
                            if (apiResponse.status === 200) {
                                count = apiResponse.data;
                            }
                            else {
                                _this.toastr.error(apiResponse.message);
                            } // end condition
                            var temp = { 'userId': x, 'name': respnseList[x], 'chatting': false, 'unread': count, 'online': true };
                            _this.userList.push(temp);
                            //console.log(this.userList);
                        }, function (err) {
                            _this.toastr.error("Some error occured");
                        });
                    }
                };
                for (var x in respnseList) {
                    _loop_1(x);
                }
            }, function (err) {
                _this.toastr.error("Some error occured");
            });
        }; //end getOnlineUserList
        this.getChatWithUser = function () {
            var previousData = (_this.messageList.length > 0 ? _this.messageList.slice() : []);
            _this.appService.getChat(_this.userInfo.userId, _this.receiverId, _this.pageValue * 10)
                .subscribe(function (apiResponse) {
                //console.log(apiResponse);
                if (apiResponse.status == 200) {
                    _this.messageList = apiResponse.data.concat(previousData);
                }
                else {
                    _this.messageList = previousData;
                    _this.toastr.warning('No Messages available');
                }
                _this.loadingPreviousChat = false;
            }, function (err) {
                _this.toastr.error("Some error occured");
            });
        }; //end getChatWithUser
        this.userSelectedToChat = function (id, name) {
            //console.log("setting user as active")
            // setting that user to chatting true   
            _this.userList.map(function (user) {
                if (user.userId == id) {
                    user.chatting = true;
                    //console.log(user.chatting);
                }
                else {
                    user.chatting = false;
                }
            });
            __WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__["Cookie"].set('receiverId', id);
            __WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__["Cookie"].set('receiverName', name);
            _this.receiverName = name;
            _this.receiverId = id;
            _this.messageList = [];
            _this.pageValue = 0;
            var chatDetails = {
                userId: _this.userInfo.userId,
                senderId: id
            };
            _this.socketService.markChatAsSeen(chatDetails);
            _this.getChatWithUser();
        }; // end userBtnClick function
        this.loadEarlierPageOfChat = function () {
            _this.loadingPreviousChat = true;
            _this.pageValue++;
            _this.scrollToChatTop = true;
            _this.getChatWithUser();
        }; // end loadPreviousChat
        this.sendMessageUsingKeypress = function (event) {
            if (event.keyCode === 13) {
                _this.sendMessage();
            }
        }; // end sendMessageUsingKeypress
        this.sendMessage = function () {
            if (_this.messageText) {
                var chatMsgObject = {
                    senderName: _this.userInfo.firstName + " " + _this.userInfo.lastName,
                    senderId: _this.userInfo.userId,
                    receiverName: __WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__["Cookie"].get('receiverName'),
                    receiverId: __WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__["Cookie"].get('receiverId'),
                    message: _this.messageText,
                    createdOn: new Date()
                }; // end chatMsgObject
                //console.log(chatMsgObject);
                _this.socketService.SendChatMessage(chatMsgObject);
                _this.pushToChatWindow(chatMsgObject);
            }
            else {
                _this.toastr.warning('text message can not be empty');
            }
        }; // end sendMessage
        this.pushToChatWindow = function (data) {
            _this.messageText = "";
            _this.messageList.push(data);
            _this.scrollToChatTop = false;
        }; // end push to chat window
        this.getMessageFromAUser = function () {
            _this.socketService.chatByUserId(_this.userInfo.userId)
                .subscribe(function (data) {
                (_this.receiverId == data.senderId) ? _this.messageList.push(data) : '';
                _this.toastr.success(data.senderName + " : " + data.message);
                _this.scrollToChatTop = false;
            }); //end subscribe
        }; // end get message from a user 
        this.logout = function () {
            _this.appService.logout()
                .subscribe(function (apiResponse) {
                //console.log(apiResponse);
                if (apiResponse.status === 200) {
                    //console.log("logout called")
                    __WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__["Cookie"].delete('authtoken');
                    __WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__["Cookie"].delete('receiverId');
                    __WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__["Cookie"].delete('receiverName');
                    _this.socketService.exitSocket();
                    _this.router.navigate(['/']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        }; // end logout
        // handle the output from a child component 
        this.showUserName = function (name) {
            _this.toastr.success("You are chatting with " + name);
        };
        this.getunseenUserList = function () {
            _this.appService.unseenUserList(_this.loggedInUser)
                .subscribe(function (respnseList) {
                _this.unseenUserList = [];
                var _loop_2 = function (x) {
                    var count;
                    _this.appService.getCount(_this.loggedInUser, respnseList.data[x].userId)
                        .subscribe(function (apiResponse) {
                        if (apiResponse.status === 200) {
                            count = apiResponse.data;
                        }
                        else {
                            _this.toastr.error(apiResponse.message);
                        } // end condition
                        var temp = { 'userId': respnseList.data[x].userId, 'name': respnseList.data[x].firstName + " " + respnseList.data[x].lastName, 'chatting': false, 'unread': count, 'online': false };
                        _this.unseenUserList.push(temp);
                        //console.log(this.unseenUserList);                
                    }, function (err) {
                        _this.toastr.error("Some error occured");
                    });
                };
                for (var x in respnseList.data) {
                    _loop_2(x);
                }
            }, function (err) {
                _this.toastr.error("Some error occured");
            });
        }; //end getunseenUserList
        this.toastr.setRootViewContainerRef(vcr);
    }
    ChatBoxComponent.prototype.ngOnInit = function () {
        //console.log("On Init is called");
        this.authToken = __WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__["Cookie"].get('authToken');
        this.userInfo = this.appService.getUserInfoFromLocalstorage();
        this.loggedInUser = __WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__["Cookie"].get('loggedInUser');
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        this.getunseenUserList();
        this.getMessageFromAUser();
    };
    ChatBoxComponent.prototype.ngOnChanges = function () {
        //console.log("On changes is called");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChatBoxComponent.prototype, "scrollMe", void 0);
    ChatBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat-box',
            template: __webpack_require__("./src/app/chat/chat-box/chat-box.component.html"),
            styles: [__webpack_require__("./src/app/chat/chat-box/chat-box.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__socket_service__["a" /* SocketService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2__socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ChatBoxComponent);
    return ChatBoxComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat-route-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRouteGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatRouteGuardService = /** @class */ (function () {
    function ChatRouteGuardService(router) {
        this.router = router;
    }
    ChatRouteGuardService.prototype.canActivate = function (route) {
        console.log("In Guard Route Service...");
        if (__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].get('authToken') === undefined || __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].get('authToken') === '' || __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].get('authToken') === null) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    ChatRouteGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ChatRouteGuardService);
    return ChatRouteGuardService;
}());



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_box_chat_box_component__ = __webpack_require__("./src/app/chat/chat-box/chat-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_pipe_remove_special_char_pipe__ = __webpack_require__("./src/app/shared/pipe/remove-special-char.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_route_guard_service__ = __webpack_require__("./src/app/chat/chat-route-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_filter_pipe__ = __webpack_require__("./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_filter_pipe__["a" /* FilterPipeModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild([
                    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_2__chat_box_chat_box_component__["a" /* ChatBoxComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__chat_route_guard_service__["a" /* ChatRouteGuardService */]] }
                ]),
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__chat_box_chat_box_component__["a" /* ChatBoxComponent */], __WEBPACK_IMPORTED_MODULE_7__shared_pipe_remove_special_char_pipe__["a" /* RemoveSpecialCharPipe */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__chat_route_guard_service__["a" /* ChatRouteGuardService */]]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.css":
/***/ (function(module, exports) {

module.exports = ".crop {\n    border-radius: 100%;\n    line-height: 1em;\n    padding: 1em;\n    text-align: center;\n    margin: 0em;\n    width: 3em;\n    height: 3em;\n    float: left;\n    text-transform: uppercase;\n  }"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)='nameClicked()'  class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n    {{firstChar}}\n  </div>"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstCharComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstCharComponent = /** @class */ (function () {
    function FirstCharComponent() {
        this._name = '';
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FirstCharComponent.prototype.ngOnInit = function () {
        this._name = this.userName;
        this.firstChar = this._name[0];
    }; // end ngOnInit
    FirstCharComponent.prototype.ngOnChanges = function (changes) {
        var name = changes.userName;
        this._name = name.currentValue;
        this.firstChar = this._name[0];
    };
    FirstCharComponent.prototype.nameClicked = function () {
        this.notify.emit(this._name);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userBg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FirstCharComponent.prototype, "notify", void 0);
    FirstCharComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'first-char',
            template: __webpack_require__("./src/app/shared/first-char/first-char.component.html"),
            styles: [__webpack_require__("./src/app/shared/first-char/first-char.component.css")]
        })
    ], FirstCharComponent);
    return FirstCharComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipe/remove-special-char.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveSpecialCharPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RemoveSpecialCharPipe = /** @class */ (function () {
    function RemoveSpecialCharPipe() {
    }
    RemoveSpecialCharPipe.prototype.transform = function (value, character) {
        return value.replace(character, '');
    };
    RemoveSpecialCharPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'removeSpecialCharPipe'
        })
    ], RemoveSpecialCharPipe);
    return RemoveSpecialCharPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_details_user_details_component__ = __webpack_require__("./src/app/shared/user-details/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__first_char_first_char_component__ = __webpack_require__("./src/app/shared/first-char/first-char.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__user_details_user_details_component__["a" /* UserDetailsComponent */], __WEBPACK_IMPORTED_MODULE_4__first_char_first_char_component__["a" /* FirstCharComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__user_details_user_details_component__["a" /* UserDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__first_char_first_char_component__["a" /* FirstCharComponent */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.css":
/***/ (function(module, exports) {

module.exports = ".crop {\n    border-radius: 100%;\n    line-height: 1em;\n    padding: 1em;\n    text-align: center;\n    margin: 0em;\n    width: 3em;\n    height: 3em;\n    float: left;\n    text-transform: uppercase;\n  }\n  \n  .about {\n    float: left;\n    padding-left: 0.4em;\n  }\n  \n  .online,\n  .offline,\n  .me,\n  .warning {\n    margin-right: 3px;\n    font-size: 0.8em;\n  }\n  \n  .online {\n    color: #86BB71;\n  }\n  \n  .offline {\n    color: #E38968;\n  }\n  \n  .me {\n    color: #94C2ED;\n  }\n  \n  .warning {\n    color: #00c8e7;\n  }\n  \n  .status {\n    color: #92959E;\n  }\n  \n  .name {\n    float: left;\n  }"

/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n    {{firstChar}}\n  </div>\n  <div class=\"about\">\n    <div class=\"name\">{{userFirstName}} {{userLastName}}\n      <i *ngIf=\"messageRead\" class=\"fa fa-circle warning\"></i>\n    </div>\n    <div class=\"status\">\n      <i class=\"fa fa-circle\" [ngClass]=\"userStatus\"></i>{{userStatus}}\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent() {
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.firstChar = this.userFirstName[0];
    }; // end ngOnInit
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserDetailsComponent.prototype, "userFirstName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "userLastName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "userStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "messageRead", void 0);
    UserDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-details',
            template: __webpack_require__("./src/app/shared/user-details/user-details.component.html"),
            styles: [__webpack_require__("./src/app/shared/user-details/user-details.component.css")]
        })
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Added for Http and Observables






var SocketService = /** @class */ (function () {
    function SocketService(_http) {
        var _this = this;
        this._http = _http;
        this.baseUrl = "https://chatapi.edwisor.com";
        //events that has to be listen
        this.verifyUser = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('verifyUser', function (data) {
                    observer.next(data);
                }); //On method
            }); //end observable
        }; //end verifyUser
        this.onlineUserList = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('online-user-list', function (userList) {
                    observer.next(userList);
                }); //end On method
            }); //end observable
        }; //end onlineUserList
        this.disconnect = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('disconnect', function () {
                    observer.next();
                }); //end On method
            }); //end observable
        }; //end disconnect
        //* Events that are emitted *//
        this.setUser = function (authToken) {
            _this.socket.emit('set-user', authToken);
        };
        this.markChatAsSeen = function (userDetails) {
            _this.socket.emit('mark-chat-as-seen', userDetails);
        };
        this.SendChatMessage = function (chatDetails) {
            _this.socket.emit('chat-msg', chatDetails);
        };
        this.chatByUserId = function (userId) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end chatByUserId
        this.exitSocket = function () {
            _this.socket.disconnect();
        }; // end exit socket
        //console.log("SocketService is called");
        //handshake is happening
        this.socket = __WEBPACK_IMPORTED_MODULE_6_socket_io_client__(this.baseUrl);
    }
    //method to handle http calls
    SocketService.prototype.handleError = function (err) {
        console.log("Handle error HTTP calls");
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n  -ms-flex-pack: center;\r\n  -webkit-box-align: center;\r\n  align-items: center;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 500px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.cardBorder{\r\n    -webkit-box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 5vh;\">\n  <div class=\"form-signin cardBorder text-center\">\n    <img class=\"mb-4\" src=\"assets/whatsapp.svg\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">\n          <i class=\"fas fa-at\"></i>\n        </span>\n      </div>\n      <input type=\"email\" id=\"inputEmail\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n    </div>\n\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon2\">\n          <i class=\"fas fa-key\"></i>\n        </span>\n      </div>\n      <input type=\"password\" id=\"inputPassword\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n    </div>\n\n    <div class=\"checkbox mb-3\">\n      <label>\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n      </label>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-md btn-info\" type=\"button\" (click)= \"signIn()\">Sign in</button>\n      </div>\n\n      <div class=\"col-md-6 \">\n        <button class=\"btn btn-md btn-link\" [routerLink]=\"['/signup']\">Create account</button>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router, toastr, vcr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.gotoChat = function () {
            _this.router.navigate(['/chat']);
        };
        this.signIn = function () {
            if (!_this.email) {
                _this.toastr.warning("Enter Email Address");
            }
            else if (!_this.password) {
                _this.toastr.warning("Enter Password");
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password,
                };
                _this.appService.signIn(data)
                    .subscribe(function (apiResponse) {
                    //console.log(apiResponse);
                    if (apiResponse.status == 200) {
                        __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].set('authToken', apiResponse.data.authToken);
                        //Cookie.set('receiverId',apiResponse.data.userDetails.userId);
                        //Cookie.set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].set('loggedInUser', apiResponse.data.userDetails.userId);
                        /*
                        //userDetails =>
                        "mobileNumber": 2234435524,
                        "email": "someone@mail.com",
                        "lastName": "Sengar",
                        "firstName": "Rishabh",
                        "userId": "-E9zxTYA8"
                        
                        */
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        _this.toastr.success('You are Login Successfully');
                        setTimeout(function () {
                            _this.gotoChat();
                        }, 1000);
                        _this.router.navigate(['/chat']);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error("Some error occured");
                });
            } //End condition
        }; //End signup function
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/user/login/login.component.html"),
            styles: [__webpack_require__("./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n  -ms-flex-pack: center;\r\n  -webkit-box-align: center;\r\n  align-items: center;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 500px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.cardBorder{\r\n    -webkit-box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 5vh;\">\n  <div class=\"form-signin cardBorder text-center\" >\n    <img class=\"mb-4\" src=\"assets/whatsapp.svg\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please sign Up</h1>\n\n    <input type=\"text\" id=\"inputFirstName\" [(ngModel)]=\"firstName\" class=\"form-control\" placeholder=\"First Name\" required autofocus>\n\n    <input type=\"text\" id=\"inputLastName\" [(ngModel)]=\"lastName\" class=\"form-control\" placeholder=\"Last Name\" required autofocus>\n\n    <input type=\"email\" id=\"inputEmail\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email address\" required>\n\n    <input type=\"number\" id=\"inputMobileNumber\" [(ngModel)]=\"mobile\" class=\"form-control\" placeholder=\"Mobile Number\" required>\n\n    <input type=\"password\" id=\"inputPassword\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n\n    <textarea type=\"password\" id=\"AuthKey\" class=\"form-control\" [(ngModel)]=\"apiKey\" placeholder=\"API Key\" required></textarea>\n\n    <div class=\"row\">\n      <div class=\"col-md-6 order-sm-12\">\n        <button class=\"btn btn-md btn-link\" [routerLink]=\"['/login']\">Sign in instead</button>\n      </div>\n\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-md btn-info\" type=\"button\" (click)=\"signUp()\">Register</button>\n\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, router, toastr, vcr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.gotoSignIn = function () {
            _this.router.navigate(['/']);
        };
        this.signUp = function () {
            if (!_this.firstName) {
                _this.toastr.warning("Enter First Name");
            }
            else if (!_this.lastName) {
                _this.toastr.warning("Enter Last Name");
            }
            else if (!_this.mobile) {
                _this.toastr.warning("Enter Mobile Number");
            }
            else if (!_this.email) {
                _this.toastr.warning("Enter Email Address");
            }
            else if (!_this.password) {
                _this.toastr.warning("Enter Password");
            }
            else if (!_this.apiKey) {
                _this.toastr.warning("Enter API Key");
            }
            else {
                var data = {
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    mobile: _this.mobile,
                    email: _this.email,
                    password: _this.password,
                    apiKey: _this.apiKey
                };
                _this.appService.signUp(data)
                    .subscribe(function (apiResponse) {
                    //console.log(apiResponse);
                    if (apiResponse.status == 200) {
                        _this.toastr.success('You are registered Successfully');
                        setTimeout(function () {
                            _this.gotoSignIn();
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error("Some error occured");
                });
            } //End condition
        }; //End signup function
        this.toastr.setRootViewContainerRef(vcr);
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/user/signup/signup.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("./src/app/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forChild([
                    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */] },
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map