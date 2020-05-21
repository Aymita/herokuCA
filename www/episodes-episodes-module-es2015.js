(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episodes-episodes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n   <ion-toolbar > \n    <table>\n        <tr>\n            <td><ion-img src=\"./assets/icon/episodesblue.png\"></ion-img></td>            \n        </tr>\n   </table>   \n </ion-toolbar>\n</ion-header>\n<ion-content padding class=\"background\">\n    <ion-searchbar class=\"font_blue\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchChanges($event)\"></ion-searchbar>\n        <ion-item>\n            <ion-label class=\"font_red\">Select  type</ion-label>\n            <ion-select class=\"font_red\" [(ngModel)]=\"type\" (ionChange)=\"searchChanges($event)\">\n                <ion-select-option value=\"\">All</ion-select-option>\n                <ion-select-option value=\"episode_id\">ID</ion-select-option>\n                <ion-select-option value=\"series\">Series</ion-select-option>     \n            </ion-select>\n        </ion-item>\n    <ion-list>    \n        <ion-item button detail lines=\"inset\" *ngFor=\"let episode of episodes | async\" (click)=\"openDetails(episode)\">\n             <ion-avatar slot=\"start\">\n                <img src=\"./assets/icon/episode.png\" alt=\"ion\">\n            </ion-avatar>\n            <ion-label>\n                <h3>{{episode?.title}}</h3>\n                <p>{{episode?.air_date}}</p>\n            </ion-label> \n        </ion-item>    \n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/episodes/episodes-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/episodes/episodes-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EpisodesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesPageRoutingModule", function() { return EpisodesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _episodes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./episodes.page */ "./src/app/pages/episodes/episodes.page.ts");




const routes = [
    {
        path: '',
        component: _episodes_page__WEBPACK_IMPORTED_MODULE_3__["EpisodesPage"]
    }
];
let EpisodesPageRoutingModule = class EpisodesPageRoutingModule {
};
EpisodesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EpisodesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/episodes/episodes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/episodes/episodes.module.ts ***!
  \***************************************************/
/*! exports provided: EpisodesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesPageModule", function() { return EpisodesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _episodes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./episodes-routing.module */ "./src/app/pages/episodes/episodes-routing.module.ts");
/* harmony import */ var _episodes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./episodes.page */ "./src/app/pages/episodes/episodes.page.ts");







let EpisodesPageModule = class EpisodesPageModule {
};
EpisodesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _episodes_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodesPageRoutingModule"]
        ],
        declarations: [_episodes_page__WEBPACK_IMPORTED_MODULE_6__["EpisodesPage"]]
    })
], EpisodesPageModule);



/***/ }),

/***/ "./src/app/pages/episodes/episodes.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/episodes/episodes.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content.background {\n  --ion-background-color: #EAFAFA;\n}\n\n.font_blue {\n  color: #1c0e9e;\n  font-size: 0.8rem;\n}\n\n.font_red {\n  color: #e9251f;\n  font-size: 0.8rem;\n}\n\ntable {\n  width: 100%;\n}\n\n.odd {\n  background-color: lightblue;\n}\n\n.even {\n  background-color: azure;\n}\n\n.first {\n  font-style: italic;\n}\n\n.last {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvaGVyb2t1Q0Evc3JjL2FwcC9wYWdlcy9lcGlzb2Rlcy9lcGlzb2Rlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VwaXNvZGVzL2VwaXNvZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRENBO0VBQ0csV0FBQTtBQ0VIOztBRENBO0VBQ0MsMkJBQUE7QUNFRDs7QURBQTtFQUNDLHVCQUFBO0FDR0Q7O0FEQUE7RUFDQyxrQkFBQTtBQ0dEOztBREFBO0VBQ0MsaUJBQUE7QUNHRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VwaXNvZGVzL2VwaXNvZGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0VBRkFGQTsgXG59XG4uZm9udF9ibHVle1xuICAgIGNvbG9yOiByZ2IoMjgsIDE0LCAxNTgpOyBcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5mb250X3JlZHtcbiAgICBjb2xvcjogcmdiKDIzMywgMzcsIDMxKTsgXG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cblxudGFibGUge1xuICAgd2lkdGg6IDEwMCU7XG59XG5cbi5vZGQge1xuIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbn1cbi5ldmVuIHtcbiBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbn1cblxuLmZpcnN0IHtcbiBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5sYXN0IHtcbiBmb250LXdlaWdodDogYm9sZDtcbn0iLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0VBRkFGQTtcbn1cblxuLmZvbnRfYmx1ZSB7XG4gIGNvbG9yOiAjMWMwZTllO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmZvbnRfcmVkIHtcbiAgY29sb3I6ICNlOTI1MWY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ub2RkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuXG4uZXZlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xufVxuXG4uZmlyc3Qge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5sYXN0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/episodes/episodes.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/episodes/episodes.page.ts ***!
  \*************************************************/
/*! exports provided: SearchType, EpisodesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchType", function() { return SearchType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesPage", function() { return EpisodesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




var SearchType;
(function (SearchType) {
    SearchType["all"] = "";
    SearchType["episode_id"] = "episode_id";
    SearchType["series"] = "series";
})(SearchType || (SearchType = {}));
let EpisodesPage = class EpisodesPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        this.searchTerm = '';
        this.type = SearchType.all;
    }
    ngOnInit() {
        this.episodes = this.api.getEpisodes();
        this.episodes.subscribe(data => {
            console.log('My data: ', data);
        });
    }
    openDetails(episode) {
        let episodeId = episode.episode_id;
        this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
    }
    searchChanges() {
        this.episodes = this.api.searchData(this.searchTerm, this.type);
        this.episodes.subscribe(data => {
            console.log('My data: ', data);
        });
    }
};
EpisodesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
EpisodesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-episodes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./episodes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./episodes.page.scss */ "./src/app/pages/episodes/episodes.page.scss")).default]
    })
], EpisodesPage);



/***/ })

}]);
//# sourceMappingURL=episodes-episodes-module-es2015.js.map