function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotes-quotes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesQuotesQuotesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n   <ion-toolbar color=\"primary\"> \n    <ion-avatar>\n      <img src=\"./assets/icon/character.ico\" />\n    </ion-avatar>\n    <ion-title>Quotes</ion-title>   \n </ion-toolbar>\n</ion-header>\n<ion-content padding class=\"background\">\n    <ion-searchbar class=\"font_red\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchChanges($event)\"></ion-searchbar>\n        <ion-item>\n            <ion-label class=\"font_red\">Select  type</ion-label>\n            <ion-select class=\"font_red\" [(ngModel)]=\"type\" (ionChange)=\"searchChanges($event)\">\n                <ion-select-option value=\"\">All</ion-select-option>\n                <ion-select-option value=\"quote_id\">ID</ion-select-option>\n                <ion-select-option value=\"author\">Author</ion-select-option>\n                <ion-select-option value=\"random\">Random</ion-select-option>\n                <ion-select-option value=\"random_author\">Random Author</ion-select-option>     \n            </ion-select>\n        </ion-item>\n    <ion-list>    \n        <ion-item button detail lines=\"inset\" *ngFor=\"let quote of quotes | async\" (click)=\"openDetails(quote)\">\n            <ion-avatar slot=\"start\">\n                <img src=\"./assets/icon/episode.ico\" alt=\"ion\">\n            </ion-avatar>\n            <ion-label>\n                <h3>{{quote?.quote_id}} Quote</h3>\n                <p>{{quote?.series}}</p>\n            </ion-label>             \n        </ion-item>    \n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/quotes/quotes-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/quotes/quotes-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: QuotesPageRoutingModule */

  /***/
  function srcAppPagesQuotesQuotesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuotesPageRoutingModule", function () {
      return QuotesPageRoutingModule;
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


    var _quotes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quotes.page */
    "./src/app/pages/quotes/quotes.page.ts");

    var routes = [{
      path: '',
      component: _quotes_page__WEBPACK_IMPORTED_MODULE_3__["QuotesPage"]
    }];

    var QuotesPageRoutingModule = function QuotesPageRoutingModule() {
      _classCallCheck(this, QuotesPageRoutingModule);
    };

    QuotesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QuotesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/quotes/quotes.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/quotes/quotes.module.ts ***!
    \***********************************************/

  /*! exports provided: QuotesPageModule */

  /***/
  function srcAppPagesQuotesQuotesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuotesPageModule", function () {
      return QuotesPageModule;
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


    var _quotes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./quotes-routing.module */
    "./src/app/pages/quotes/quotes-routing.module.ts");
    /* harmony import */


    var _quotes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./quotes.page */
    "./src/app/pages/quotes/quotes.page.ts");

    var QuotesPageModule = function QuotesPageModule() {
      _classCallCheck(this, QuotesPageModule);
    };

    QuotesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _quotes_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuotesPageRoutingModule"]],
      declarations: [_quotes_page__WEBPACK_IMPORTED_MODULE_6__["QuotesPage"]]
    })], QuotesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/quotes/quotes.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/quotes/quotes.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesQuotesQuotesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content.background {\n  --ion-background-color: #EAFAFA;\n}\n\n.font_blue {\n  color: #1c0e9e;\n  font-size: 0.8rem;\n}\n\n.font_red {\n  color: #e9251f;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvaGVyb2t1Q0Evc3JjL2FwcC9wYWdlcy9xdW90ZXMvcXVvdGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcXVvdGVzL3F1b3Rlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1b3Rlcy9xdW90ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRUFGQUZBOyBcbn1cbi5mb250X2JsdWV7XG4gICAgY29sb3I6IHJnYigyOCwgMTQsIDE1OCk7IFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmZvbnRfcmVke1xuICAgIGNvbG9yOiByZ2IoMjMzLCAzNywgMzEpOyBcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn0iLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0VBRkFGQTtcbn1cblxuLmZvbnRfYmx1ZSB7XG4gIGNvbG9yOiAjMWMwZTllO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmZvbnRfcmVkIHtcbiAgY29sb3I6ICNlOTI1MWY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/quotes/quotes.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/quotes/quotes.page.ts ***!
    \*********************************************/

  /*! exports provided: SearchType, QuotesPage */

  /***/
  function srcAppPagesQuotesQuotesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchType", function () {
      return SearchType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuotesPage", function () {
      return QuotesPage;
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
      SearchType["quote_id"] = "quote_id";
      SearchType["author"] = "author";
      SearchType["random"] = "random";
      SearchType["random_author"] = "random_author";
    })(SearchType || (SearchType = {}));

    var QuotesPage = /*#__PURE__*/function () {
      function QuotesPage(router, api) {
        _classCallCheck(this, QuotesPage);

        this.router = router;
        this.api = api;
        this.searchTerm = '';
        this.type = SearchType.all;
      }

      _createClass(QuotesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.quotes = this.api.getQuotes();
          this.quotes.subscribe(function (data) {
            console.log('My data: ', data);
          });
        }
      }, {
        key: "openDetails",
        value: function openDetails(quote) {
          var quoteId = quote.quote_id;
          this.router.navigateByUrl("/tabs/quotes/".concat(quoteId));
        }
      }, {
        key: "searchChanges",
        value: function searchChanges() {
          this.quotes = this.api.searchDataQuote(this.searchTerm, this.type);
          this.quotes.subscribe(function (data) {
            console.log('My data: ', data);
          });
        }
      }]);

      return QuotesPage;
    }();

    QuotesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    QuotesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quotes',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./quotes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./quotes.page.scss */
      "./src/app/pages/quotes/quotes.page.scss"))["default"]]
    })], QuotesPage);
    /***/
  }
}]);
//# sourceMappingURL=quotes-quotes-module-es5.js.map