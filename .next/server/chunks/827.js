"use strict";
exports.id = 827;
exports.ids = [827];
exports.modules = {

/***/ 1022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Intro)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Intro(props) {
    //console.log(props);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "intro-section",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container text-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-xl-10 offset-xl-1",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "section-title",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "btn btn-info btn-sm",
                                children: props.posts.from
                            }),
                            "\xa0\xa0",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    props.posts.hitokoto,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        children: props.posts.from_who ? "--" + props.posts.from_who : ""
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 2507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header.tsx



function Header() {
    // const [email,setEmail]= useState("");
    // useEffect(()=>{
    // 	let email = getToken("Admin-Email")
    // 	if(email){
    // 		setEmail(email)
    // 	}else{
    // 		Router.push("/login")
    // 	}
    // },[])
    // const handleClearStor=()=>{
    // 	clearToken("ZJS-7579-Admin-Token")
    // 	clearToken("Admin-Email")
    // 	Router.push("/login")
    // }
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "header-section",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "site-logo",
                                children: "Zjs-7579"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8 col-md-9",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            className: "main-menu",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: "首页"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/about",
                                            children: "关于"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/work",
                                            children: "工作"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/contact",
                                            children: "联系"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/Footer.tsx


function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "footer-section text-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "section-title mb-5",
                    children: "Let’s work together"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "social-links",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "fa fa-pinterest"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "fa fa-linkedin"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "fa fa-instagram"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "fa fa-facebook"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "fa fa-twitter"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "copyright",
                    children: [
                        "Copyright \xa9All rights reserved | This template is made with ",
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa fa-heart-o",
                            "aria-hidden": "true"
                        }),
                        " by ",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "http://www.github.com/Zjs-7579",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Zjs-7579"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./layout/Layout.tsx




function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ })

};
;