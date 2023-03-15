"use strict";
(() => {
var exports = {};
exports.id = 337;
exports.ids = [337];
exports.modules = {

/***/ 8231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ work),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/Intro.tsx
var Intro = __webpack_require__(1022);
;// CONCATENATED MODULE: ./components/Campaign.tsx


function Campaign() {
    let imgList = [
        {
            id: 1,
            class: "mix col-md-6 col-lg-3 rened",
            url: "/img/portfolio/3.jpg"
        },
        {
            id: 2,
            class: "mix col-md-6 col-lg-3 digital",
            url: "img/portfolio/4.jpg"
        },
        {
            id: 3,
            class: "mix col-md-6 col-lg-3 rened",
            url: "/img/portfolio/5.jpg"
        },
        {
            id: 4,
            class: "mix col-md-6 col-lg-3 digital",
            url: "img/portfolio/6.jpg"
        },
        {
            id: 5,
            class: "mix col-md-6 col-lg-3 rened",
            url: "/img/portfolio/7.jpg"
        },
        {
            id: 6,
            class: "mix col-md-6 col-lg-3 digital",
            url: "img/portfolio/8.jpg"
        },
        {
            id: 7,
            class: "mix col-md-6 col-lg-3 rened",
            url: "/img/portfolio/9.jpg"
        },
        {
            id: 8,
            class: "mix col-md-6 col-lg-3 digital",
            url: "img/portfolio/10.jpg"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "portfolio-section",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fluid p-md-0 ",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row portfolios-area",
                children: imgList.map((item)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: item.class,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: item.url,
                                className: "portfolio-item set-bg",
                                "data-setbg": item.url,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "pi-inner",
                                    style: {
                                        backgroundImage: `url(${item.url})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "portfolio-hover"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "+ See Look"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "portfolio-meta",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Brand Campaign"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Graphic design"
                                    })
                                ]
                            })
                        ]
                    }, item.id);
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./layout/Layout.tsx + 2 modules
var Layout = __webpack_require__(2507);
;// CONCATENATED MODULE: ./pages/work.tsx






function work(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Work"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Intro/* default */.Z, {
                        posts: props.posts
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Campaign, {})
                ]
            })
        ]
    });
}
async function getStaticProps() {
    // 调用外部 API 获取内容
    //const res = await fetch('https://international.v1.hitokoto.cn/')
    const res = await fetch("https://v1.hitokoto.cn");
    const posts = await res.json();
    //console.log("--",posts)
    // 在构建时将接收到 `posts` 参数
    return {
        props: {
            posts
        }
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,827], () => (__webpack_exec__(8231)));
module.exports = __webpack_exports__;

})();