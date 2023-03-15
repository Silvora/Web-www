"use strict";
exports.id = 72;
exports.ids = [72];
exports.modules = {

/***/ 1072:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1391);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


let baseURL;
if (true) {
    //baseURL = "http://api.757909.top/api/"
    baseURL = "http://127.0.0.1:7412/api/";
} else {}
const http = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: baseURL,
    timeout: 5000
});
http.interceptors.request.use((config)=>{
    let token = (0,_utils_token__WEBPACK_IMPORTED_MODULE_1__/* .getToken */ .LP)("ZJS-7579-Admin-Token");
    if (token) {
        config.headers = {
            "ZJS-7579-Admin-Token": token
        };
    }
    return config;
}, (err)=>{
    return Promise.reject(err);
});
http.interceptors.response.use((res)=>{
    return res.data;
}, (err)=>{
    return Promise.reject(err);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (http);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LP": () => (/* binding */ getToken),
/* harmony export */   "o4": () => (/* binding */ setToken)
/* harmony export */ });
/* unused harmony export clearToken */
function getToken(key) {
    return window.localStorage.getItem(key);
}
function setToken(key, value) {
    window.localStorage.setItem(key, value);
}
function clearToken(key) {
    window.localStorage.removeItem(key);
}


/***/ })

};
;