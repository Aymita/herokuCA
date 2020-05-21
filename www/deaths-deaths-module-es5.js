function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deaths-deaths-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDeathsDeathsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n   <ion-toolbar color=\"primary\"> \n    <ion-avatar>\n      <img src=\"./assets/icon/character.ico\" />\n    </ion-avatar>\n    <ion-title>Deaths</ion-title>   \n </ion-toolbar>\n</ion-header>\n<ion-content padding class=\"background\">\n    <ion-searchbar class=\"font_red\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchChanges($event)\"></ion-searchbar>\n        <ion-item>\n            <ion-label class=\"font_red\">Select type</ion-label>\n            <ion-select class=\"font_red\" [(ngModel)]=\"type\" (ionChange)=\"searchChanges($event)\">\n                <ion-select-option value=\"\">All</ion-select-option>\n                <ion-select-option value=\"name\">Name</ion-select-option>\n                <ion-select-option value=\"deathCount\">Death Count</ion-select-option> \n                <ion-select-option value=\"random\">Random</ion-select-option>     \n            </ion-select>\n        </ion-item>\n     <ion-list>    \n        <ion-item  *ngFor=\"let death of deaths | async\" >\n             <ion-avatar slot=\"start\">\n                <img src=\"./assets/icon/character.ico\" alt=\"ion\">\n            </ion-avatar>\n            <ion-label>\n                <h3>{{death?.death_id}} {{death?.death}} {{death?.deathCount}}</h3>\n                <p>{{death?.deathCount}}</p>\n            </ion-label> \n        </ion-item>    \n  </ion-list>\n<!--\n  <infinite-scroll threshold=\"25%\" (ionInfinite=\"loadData($event)\">\n    <infinite-scroll-content loadingSpinner=\"cresent\" loadingText=\"Loading more data..\"></infinite-scroll-content>\n  </infinite-scroll>\n-->\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./src/app/pages/deaths/deaths-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/deaths/deaths-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DeathsPageRoutingModule */

  /***/
  function srcAppPagesDeathsDeathsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathsPageRoutingModule", function () {
      return DeathsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _deaths_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./deaths.page */
    "./src/app/pages/deaths/deaths.page.ts");

    var routes = [{
      path: '',
      component: _deaths_page__WEBPACK_IMPORTED_MODULE_3__["DeathsPage"]
    }];

    var DeathsPageRoutingModule = function DeathsPageRoutingModule() {
      _classCallCheck(this, DeathsPageRoutingModule);
    };

    DeathsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeathsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/deaths/deaths.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/deaths/deaths.module.ts ***!
    \***********************************************/

  /*! exports provided: DeathsPageModule */

  /***/
  function srcAppPagesDeathsDeathsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathsPageModule", function () {
      return DeathsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _deaths_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./deaths-routing.module */
    "./src/app/pages/deaths/deaths-routing.module.ts");
    /* harmony import */


    var _deaths_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./deaths.page */
    "./src/app/pages/deaths/deaths.page.ts");

    var DeathsPageModule = function DeathsPageModule() {
      _classCallCheck(this, DeathsPageModule);
    };

    DeathsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _deaths_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathsPageRoutingModule"]],
      declarations: [_deaths_page__WEBPACK_IMPORTED_MODULE_6__["DeathsPage"]]
    })], DeathsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/deaths/deaths.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/deaths/deaths.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDeathsDeathsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content.background {\n  --ion-background-color: #EAFAFA;\n}\n\n.font_blue {\n  color: #1c0e9e;\n  font-size: 0.8rem;\n}\n\n.font_red {\n  color: #e9251f;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvaGVyb2t1Q0Evc3JjL2FwcC9wYWdlcy9kZWF0aHMvZGVhdGhzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGVhdGhzL2RlYXRocy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlYXRocy9kZWF0aHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRUFGQUZBOyBcbn1cbi5mb250X2JsdWV7XG4gICAgY29sb3I6IHJnYigyOCwgMTQsIDE1OCk7IFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmZvbnRfcmVke1xuICAgIGNvbG9yOiByZ2IoMjMzLCAzNywgMzEpOyBcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn0iLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0VBRkFGQTtcbn1cblxuLmZvbnRfYmx1ZSB7XG4gIGNvbG9yOiAjMWMwZTllO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmZvbnRfcmVkIHtcbiAgY29sb3I6ICNlOTI1MWY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/deaths/deaths.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/deaths/deaths.page.ts ***!
    \*********************************************/

  /*! exports provided: SearchType, DeathsPage */

  /***/
  function srcAppPagesDeathsDeathsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchType", function () {
      return SearchType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathsPage", function () {
      return DeathsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");

    var SearchType;

    (function (SearchType) {
      SearchType["all"] = "";
      SearchType["name"] = "name";
      SearchType["deathCount"] = "deathCount";
      SearchType["random"] = "random";
    })(SearchType || (SearchType = {}));

    var DeathsPage = /*#__PURE__*/function () {
      function DeathsPage(router, api) {
        _classCallCheck(this, DeathsPage);

        this.router = router;
        this.api = api;
        this.searchTerm = '';
        this.type = SearchType.all;
        this.var_limit = 0;
        this.var_offset = 10;
      }

      _createClass(DeathsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.deaths = this.api.getDeaths();
          this.deaths.subscribe(function (data) {
            console.log('My data: ', data);
          });
        }
      }, {
        key: "searchChanges",
        value: function searchChanges() {
          this.deaths = this.api.searchDataDeath(this.searchTerm, this.type);
          this.deaths.subscribe(function (data) {
            console.log('My data: ', data);
          });
        }
      }, {
        key: "loadPage",
        value: function loadPage(event) {
          this.deaths = this.api.getDeathPages(this.var_limit, this.var_offset);
          this.deaths.subscribe(function (data) {
            console.log('My data: ', data);
          });

          if (event) {
            event.target.complete();
          }
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          console.log(event);
          this.var_limit = this.var_limit + this.var_offset;
          this.loadPage(event);
        }
      }]);

      return DeathsPage;
    }();

    DeathsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    DeathsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deaths',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./deaths.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./deaths.page.scss */
      "./src/app/pages/deaths/deaths.page.scss"))["default"]]
    })], DeathsPage);
    /***/
  }
}]);
//# sourceMappingURL=deaths-deaths-module-es5.js.map