webpackJsonp([6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ApprovedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApprovedPage = (function () {
    function ApprovedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ApprovedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApprovedPage');
    };
    ApprovedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-approved',template:/*ion-inline-start:"G:\IONICWorkSpace\sarvmaan\src\pages\approved\approved.html"*/'<!--\n  Generated template for the ApprovedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n<h2>approved</h2>\n</ion-content>\n'/*ion-inline-end:"G:\IONICWorkSpace\sarvmaan\src\pages\approved\approved.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ApprovedPage);
    return ApprovedPage;
}());

//# sourceMappingURL=approved.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/all/all.module": [
		276,
		5
	],
	"../pages/approved/approved.module": [
		277,
		4
	],
	"../pages/confirm-login/confirm-login.module": [
		278,
		3
	],
	"../pages/new/new.module": [
		279,
		1
	],
	"../pages/pending/pending.module": [
		280,
		0
	],
	"../pages/registration/registration.module": [
		281,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomescreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__all_all__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__approved_approved__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_new__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pending_pending__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomescreenPage = (function () {
    function HomescreenPage() {
        this.all = __WEBPACK_IMPORTED_MODULE_1__all_all__["a" /* AllPage */];
        this.approved = __WEBPACK_IMPORTED_MODULE_2__approved_approved__["a" /* ApprovedPage */];
        this.new = __WEBPACK_IMPORTED_MODULE_3__new_new__["a" /* NewPage */];
        this.pending = __WEBPACK_IMPORTED_MODULE_4__pending_pending__["a" /* PendingPage */];
    }
    HomescreenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomescreenPage');
    };
    HomescreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-homescreen',template:/*ion-inline-start:"G:\IONICWorkSpace\sarvmaan\src\pages\homescreen\homescreen.html"*/'<ion-header>\n<ion-toolbar style="background-color: red">\n  <button ion-button menuToggle left>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n  <ion-title>\n    SarvMaan\n  </ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n <ion-tabs color="danger">\n <ion-tab [root]="all" tabTitle="All"></ion-tab>\n <ion-tab [root]="approved" tabTitle="Approved"></ion-tab>\n <ion-tab [root]="new" tabTitle="New"></ion-tab>\n <ion-tab [root]="pending" tabTitle="Pending"></ion-tab>\n \n\n</ion-tabs>\n</ion-content>\n'/*ion-inline-end:"G:\IONICWorkSpace\sarvmaan\src\pages\homescreen\homescreen.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], HomescreenPage);
    return HomescreenPage;
}());

//# sourceMappingURL=homescreen.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConfirmLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmLoginPage = (function () {
    function ConfirmLoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfirmLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmLoginPage');
    };
    ConfirmLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-login',template:/*ion-inline-start:"G:\IONICWorkSpace\sarvmaan\src\pages\confirm-login\confirm-login.html"*/'<!--\n  Generated template for the ConfirmLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n<!-- login for vendor or customer -->\n<div style="margin-top: 20%"></div>\n   <div align="center">\n     <img height="70" width="70" style="border-radius:50%;" src="../../assets/imgs/koala.jpg">\n   </div>\n   <div style="margin-top: 15%"></div>\n\n      <div align="center">\n      <p>Would you like to log in as...</p>\n    </div>\n   <div style="margin-top: 15%"></div>\n   <ion-row>\n        <button ion-button color="secondary" round full>VENDOR</button>\n        <button ion-button round full>CUSTOMER</button>\n   </ion-row>\n	<div style="margin-top: 50%"></div>\n    <div align="center">\n     <p >Need Help?</p>\n   </div>\n  <!-- login for vendor or customer -->\n</ion-content>\n'/*ion-inline-end:"G:\IONICWorkSpace\sarvmaan\src\pages\confirm-login\confirm-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ConfirmLoginPage);
    return ConfirmLoginPage;
}());

//# sourceMappingURL=confirm-login.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrationPage = (function () {
    function RegistrationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegistrationPage.prototype.onFileFromStorageChosen = function (filesEvent) {
        this.processFileFromStorage(filesEvent);
    };
    RegistrationPage.prototype.readfile = function (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var dataUrl = reader.result;
            //and do something with the reader.
        };
        //reader.readAsDataURL(file);
    };
    RegistrationPage.prototype.processFileFromStorage = function (event) {
        var file = event.target.files[0];
        //you can read various properties of the file (like mimetype and size) from the file object.
        console.log(file);
    };
    //this one reads the contents of the file as a URL that contains its data:
    RegistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrationPage');
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration',template:/*ion-inline-start:"G:\IONICWorkSpace\sarvmaan\src\pages\registration\registration.html"*/'<!--\n  Generated template for the RegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>registration</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n<div align="center">\n<p style="font-size: 20px">Sign up</p>\n</div>\n\n <ion-list> \n\n  <ion-item>\n    <ion-label stacked color="danger">First Name *</ion-label>\n    <ion-input type="text" placeholder="Enter First Name"></ion-input>\n  </ion-item>\n\n   <ion-item>\n    <ion-label stacked color="danger">Last Name</ion-label>\n    <ion-input type="text" placeholder="Enter Last Name"></ion-input>\n  </ion-item>\n\n\n <ion-item>\n    <ion-label stacked color="danger">Business *</ion-label>\n    <ion-input type="text" placeholder="Enter Business"></ion-input>\n  </ion-item>\n\n <ion-item >\n    <ion-label stacked color="danger">Language</ion-label>\n      <ion-select placeholder="Select Language">\n      <ion-option value="English">English</ion-option>\n      <ion-option value="German">German</ion-option>\n      <ion-option value="French">French</ion-option>\n      <ion-option value="Hindi">Hindi</ion-option>\n	  </ion-select>\n  </ion-item>\n\n  <ion-row padding-left="08">\n 		<ion-col col-12 ><ion-label stacked color="danger">Contact Number *</ion-label></ion-col>\n 		<ion-col col-3 style="border-bottom: 1px solid #dedede"><ion-input type="text" placeholder="+91" disabled="true"></ion-input></ion-col><ion-col col-1></ion-col>\n	 	<ion-col col-8 style="border-bottom: 1px solid #dedede"><ion-input type="Number" placeholder="Enter Number"></ion-input></ion-col>\n 	</ion-row>\n\n\n 	<ion-row padding-left="08">\n 		<ion-col col-12 ><ion-label stacked color="danger">WhatsApp Number *</ion-label></ion-col>\n 		<ion-col col-3 style="border-bottom: 1px solid #dedede"><ion-input type="text" placeholder="+91" disabled="true"></ion-input></ion-col><ion-col col-1></ion-col>\n	 	<ion-col col-8 style="border-bottom: 1px solid #dedede"><ion-input type="Number" placeholder="Enter Number"></ion-input></ion-col>\n 	</ion-row>\n 	\n <ion-item>\n    <ion-label stacked color="danger" >Website</ion-label>\n    <ion-input type="text" placeholder="Enter Website"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked color="danger" >Street Address *</ion-label>\n    <ion-input type="text" placeholder="Enter Address"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item >\n    <ion-label stacked color="danger">State *</ion-label>\n      <ion-select placeholder="Select State">\n      <ion-option value="Maharashtra">Maharashtra</ion-option>\n      <ion-option value="Kerla">Kerla</ion-option>\n      <ion-option value="Karnataka">Karnataka</ion-option>\n      <ion-option value="Uttar Pradesh">Uttar Pradesh</ion-option>\n	  </ion-select>\n  </ion-item>\n\n<ion-item >\n    <ion-label stacked color="danger">City *</ion-label>\n      <ion-select placeholder="Select City">\n      <ion-option value="Pune">Pune</ion-option>\n      <ion-option value="Nashik">Nashik</ion-option>\n      <ion-option value="Mumbai">Mumbai</ion-option>\n      <ion-option value="Banglore">Banglore</ion-option>\n	  </ion-select>\n  </ion-item>\n\n<ion-item >\n    <ion-label stacked color="danger">Skillset</ion-label>\n      <ion-select placeholder="Select Skillset">\n      <ion-option value="Pune">Java</ion-option>\n      <ion-option value="Nashik">PHP</ion-option>\n      <ion-option value="Mumbai">HTML</ion-option>\n      <ion-option value="Banglore">CSS</ion-option>\n	  </ion-select>\n  </ion-item>\n\n<ion-row padding-left="06">\n 		<ion-col col-10 ><ion-label stacked color="danger">Logo</ion-label></ion-col>\n 		<ion-col col-2 padding-top="10px" ><div *ngIf="!isIOS">\n        <button style="background: transparent;" (click)="fileInput.click()">\n          <ion-icon name="attach"></ion-icon>\n        </button>\n    <div hidden><input type="file" id="fileUpload" #fileInput (change)="onFileFromStorageChosen($event)" /></div>\n  </div><!-- <ion-icon name="attach"></ion-icon> --></ion-col> 	\n </ion-row>\n\n<ion-item>\n    <ion-label stacked color="danger">Password</ion-label>\n    <ion-input type="password" placeholder="Enter Password"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked color="danger">Confirm Password</ion-label>\n    <ion-input type="password" placeholder="Enter Password"></ion-input>\n  </ion-item>\n  <br>\n\n<ion-row padding-left="08">\n 		<ion-col col-2 padding-top="10px" ><ion-checkbox color="secondary" checked="false"></ion-checkbox></ion-col>\n	<ion-col col-10 > <ion-label style="font-size: 12px">I accept the <a href="#"> Terms and conditions</a></ion-label></ion-col>\n \n  \n</ion-row>\n\n<button disabled="true" ion-button color="danger" full style="border-radius: 5px">Submit</button>\n<!-- <button disabled="true" ion-button color="danger" full round>Submit</button>\n -->\n\n </ion-list>\n \n</ion-content>\n'/*ion-inline-end:"G:\IONICWorkSpace\sarvmaan\src\pages\registration\registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_registration_registration__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_confirm_login_confirm_login__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_homescreen_homescreen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_all_all__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_approved_approved__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_new_new__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pending_pending__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_confirm_login_confirm_login__["a" /* ConfirmLoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_homescreen_homescreen__["a" /* HomescreenPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_all_all__["a" /* AllPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_approved_approved__["a" /* ApprovedPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_new_new__["a" /* NewPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pending_pending__["a" /* PendingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    tabsPlacement: 'top',
                    platforms: {
                        android: {
                            tabsPlacement: 'top'
                        },
                        ios: {
                            tabsPlacement: 'top'
                        },
                        windows: {
                            tabsPlacement: 'top'
                        }
                    }
                }, {
                    links: [
                        { loadChildren: '../pages/all/all.module#AllPageModule', name: 'AllPage', segment: 'all', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/approved/approved.module#ApprovedPageModule', name: 'ApprovedPage', segment: 'approved', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm-login/confirm-login.module#ConfirmLoginPageModule', name: 'ConfirmLoginPage', segment: 'confirm-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new/new.module#NewPageModule', name: 'NewPage', segment: 'new', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pending/pending.module#PendingPageModule', name: 'PendingPage', segment: 'pending', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_confirm_login_confirm_login__["a" /* ConfirmLoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_homescreen_homescreen__["a" /* HomescreenPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_all_all__["a" /* AllPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_approved_approved__["a" /* ApprovedPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_new_new__["a" /* NewPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pending_pending__["a" /* PendingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_homescreen_homescreen__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_homescreen_homescreen__["a" /* HomescreenPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\IONICWorkSpace\sarvmaan\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"G:\IONICWorkSpace\sarvmaan\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginPage = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"G:\IONICWorkSpace\sarvmaan\src\pages\login\login.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>\n     Login\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n\n <div style="margin-top: 50%">\n <ion-card>\n  <ion-card-header>\n    Sign In\n  </ion-card-header>\n  <ion-list>\n\n  <ion-item>\n  <ion-icon item-left name="phone-portrait"></ion-icon>\n    <!-- <ion-label floating>Contact No</ion-label> -->\n    <ion-input type="text" placeholder="Contact No"></ion-input>\n  </ion-item>\n\n  <ion-item>\n   <ion-icon item-left name="lock" color="#FA6F51"></ion-icon>\n<!--     <ion-label floating>Password</ion-label> -->\n    <ion-input type="password" placeholder="Password"></ion-input>\n  </ion-item>\n\n</ion-list>\n</ion-card>\n<div padding-top></div>\n  <button color="secondary" ion-button full round>Sign In</button>\n<!-- <div align="right"><a href="#"><ion-label color="dark">Forget password?</ion-label></a></div> -->\n<div align="left" style="margin-top: -11%"><a href="#"><ion-label color="dark">Don\'t have an account? Sign Up</ion-label></a></div>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"G:\IONICWorkSpace\sarvmaan\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewPage = (function () {
    function NewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewPage');
    };
    NewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new',template:/*ion-inline-start:"G:\IONICWorkSpace\sarvmaan\src\pages\new\new.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n<h2>new</h2>\n</ion-content>\n'/*ion-inline-end:"G:\IONICWorkSpace\sarvmaan\src\pages\new\new.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NewPage);
    return NewPage;
}());

//# sourceMappingURL=new.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PendingPage = (function () {
    function PendingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PendingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendingPage');
    };
    PendingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pending',template:/*ion-inline-start:"G:\IONICWorkSpace\sarvmaan\src\pages\pending\pending.html"*/'<!--\n  Generated template for the PendingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n<h2>Pending</h2>\n</ion-content>\n'/*ion-inline-end:"G:\IONICWorkSpace\sarvmaan\src\pages\pending\pending.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PendingPage);
    return PendingPage;
}());

//# sourceMappingURL=pending.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllPage = (function () {
    function AllPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AllPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllPage');
    };
    AllPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all',template:/*ion-inline-start:"G:\IONICWorkSpace\sarvmaan\src\pages\all\all.html"*/'<!--\n  Generated template for the AllPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n<h2>all</h2>\n</ion-content>\n'/*ion-inline-end:"G:\IONICWorkSpace\sarvmaan\src\pages\all\all.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AllPage);
    return AllPage;
}());

//# sourceMappingURL=all.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map