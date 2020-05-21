function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["characters-characters-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCharactersCharactersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n   <ion-toolbar color=\"primary\"> \n    <ion-avatar>\n      <img src=\"./assets/icon/character.ico\" />\n    </ion-avatar>\n    <ion-title>Characters</ion-title>   \n </ion-toolbar>\n</ion-header>\n<ion-content class=\"font_red\" padding class=\"background\">\n<ion-searchbar class=\"font_red\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchChanges($event)\"></ion-searchbar>\n<ion-item>\n    <ion-label class=\"font_red\">Select  type</ion-label>\n    <ion-select class=\"font_red\" [(ngModel)]=\"type\" (ionChange)=\"searchChanges($event)\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option value=\"char_id\">ID</ion-select-option>\n      <ion-select-option value=\"category\">Category</ion-select-option> \n      <ion-select-option value=\"random\">Random</ion-select-option>  \n      <ion-select-option value=\"name\">Name</ion-select-option>   \n    </ion-select>\n  </ion-item>\n<ion-list>    \n    <ion-item button detail lines=\"inset\" *ngFor=\"let character of characters | async\" (click)=\"openDetails(character)\">\n        <ion-avatar slot=\"start\">\n            <img src=\"{{character?.img}}\" alt=\"ion\">\n        </ion-avatar>\n        <ion-label>\n            <h3>{{character?.name}}</h3>\n            <p>{{character?.nickname}}</p>\n        </ion-label>\n    </ion-item>    \n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/characters/characters-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/characters/characters-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CharactersPageRoutingModule */

  /***/
  function srcAppPagesCharactersCharactersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersPageRoutingModule", function () {
      return CharactersPageRoutingModule;
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


    var _characters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./characters.page */
    "./src/app/pages/characters/characters.page.ts");

    var routes = [{
      path: '',
      component: _characters_page__WEBPACK_IMPORTED_MODULE_3__["CharactersPage"]
    }];

    var CharactersPageRoutingModule = function CharactersPageRoutingModule() {
      _classCallCheck(this, CharactersPageRoutingModule);
    };

    CharactersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CharactersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/characters/characters.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/characters/characters.module.ts ***!
    \*******************************************************/

  /*! exports provided: CharactersPageModule */

  /***/
  function srcAppPagesCharactersCharactersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersPageModule", function () {
      return CharactersPageModule;
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


    var _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./characters-routing.module */
    "./src/app/pages/characters/characters-routing.module.ts");
    /* harmony import */


    var _characters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./characters.page */
    "./src/app/pages/characters/characters.page.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CharactersPageModule = function CharactersPageModule() {
      _classCallCheck(this, CharactersPageModule);
    };

    CharactersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharactersPageRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
      declarations: [_characters_page__WEBPACK_IMPORTED_MODULE_6__["CharactersPage"]]
    })], CharactersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/characters/characters.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/characters/characters.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCharactersCharactersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content.background {\n  --ion-background-color: #EAFAFA;\n}\n\n.font_blue {\n  color: #1c0e9e;\n  font-size: 0.8rem;\n}\n\n.font_red {\n  color: #e9251f;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvaGVyb2t1Q0Evc3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXJzL2NoYXJhY3RlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXJzL2NoYXJhY3RlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXJzL2NoYXJhY3RlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRUFGQUZBOyBcbn1cbi5mb250X2JsdWV7XG4gICAgY29sb3I6IHJnYigyOCwgMTQsIDE1OCk7IFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmZvbnRfcmVke1xuICAgIGNvbG9yOiByZ2IoMjMzLCAzNywgMzEpOyBcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn0iLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0VBRkFGQTtcbn1cblxuLmZvbnRfYmx1ZSB7XG4gIGNvbG9yOiAjMWMwZTllO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmZvbnRfcmVkIHtcbiAgY29sb3I6ICNlOTI1MWY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/characters/characters.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/characters/characters.page.ts ***!
    \*****************************************************/

  /*! exports provided: SearchType, CharactersPage */

  /***/
  function srcAppPagesCharactersCharactersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchType", function () {
      return SearchType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersPage", function () {
      return CharactersPage;
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
      SearchType["char_id"] = "char_id";
      SearchType["category"] = "category";
      SearchType["name"] = "name";
      SearchType["random"] = "random";
    })(SearchType || (SearchType = {}));

    var CharactersPage = /*#__PURE__*/function () {
      function CharactersPage(router, api) {
        _classCallCheck(this, CharactersPage);

        this.router = router;
        this.api = api;
        this.searchTerm = '';
        this.type = SearchType.all;
      }

      _createClass(CharactersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.characters = this.api.getCharacters();
          this.characters.subscribe(function (data) {
            console.log('My data: ', data);
          });
        }
      }, {
        key: "openDetails",
        value: function openDetails(character) {
          var characterId = character.char_id;
          this.router.navigateByUrl("/tabs/characters/".concat(characterId));
        }
      }, {
        key: "searchChanges",
        value: function searchChanges() {
          this.characters = this.api.searchDataCharacter(this.searchTerm, this.type);
          this.characters.subscribe(function (data) {
            console.log('My data: ', data);
          });
        }
      }]);

      return CharactersPage;
    }();

    CharactersPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    CharactersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-characters',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./characters.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./characters.page.scss */
      "./src/app/pages/characters/characters.page.scss"))["default"]]
    })], CharactersPage);
    /***/
  }
}]);
//# sourceMappingURL=characters-characters-module-es5.js.map