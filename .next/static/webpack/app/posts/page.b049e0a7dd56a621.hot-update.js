"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/posts/page",{

/***/ "(app-pages-browser)/./src/app/posts/page.tsx":
/*!********************************!*\
  !*** ./src/app/posts/page.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/avatar */ \"(app-pages-browser)/./src/components/ui/avatar.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_Heart_Home_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Heart,Home!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/heart.js\");\n/* harmony import */ var _barrel_optimize_names_Heart_Home_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Heart,Home!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/house.js\");\n/* harmony import */ var _barrel_optimize_names_MessageCircle_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=MessageCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/message-circle.js\");\n/* harmony import */ var _barrel_optimize_names_Send_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Send!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/send.js\");\n/* harmony import */ var _barrel_optimize_names_Bookmark_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Bookmark!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/bookmark.js\");\n/* harmony import */ var _barrel_optimize_names_Search_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Search!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/search.js\");\n/* harmony import */ var _components_ui_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/carousel */ \"(app-pages-browser)/./src/components/ui/carousel.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const token = localStorage.getItem(\"accessToken\");\n    const getPosts = async ()=>{\n        const jsonData = await fetch(\"https://instagram-backend-e3eq.onrender.com/post/getPosts\", {\n            headers: {\n                Authorization: \"Bearer \".concat(token),\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const response = await jsonData.json();\n        setPosts(response);\n        console.log(response);\n    };\n    const checkToken = ()=>{\n        if (!token) {\n            console.log(\"no token\");\n        } else {}\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            checkToken();\n            getPosts();\n        }\n    }[\"Page.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-black relative\",\n        children: posts === null || posts === void 0 ? void 0 : posts.map((post)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                className: \"w-fit bg-black border-gray-700 border-r-0 border-l-0 rounded-none\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                        className: \"flex items-center gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {\n                                    src: post.userId.proImg\n                                }, void 0, false, {\n                                    fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-white text-lg font-sans font-bold\",\n                                children: post.userId.username\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                        className: \"flex justify-center \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_4__.Carousel, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_4__.CarouselContent, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_4__.CarouselItem, {\n                                        children: [\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: post.postImg,\n                                                className: \"w-screen\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                                lineNumber: 105,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_4__.CarouselItem, {\n                                        children: [\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: post.postImg,\n                                                className: \"w-screen\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_4__.CarouselItem, {\n                                        children: [\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: post.postImg,\n                                                        className: \"w-screen\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                                        lineNumber: 114,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    \"\\\\\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                                lineNumber: 113,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardFooter, {\n                        className: \"space-y-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Heart_Home_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                className: \"text-white\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                                lineNumber: 123,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MessageCircle_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                className: \"text-white\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                                lineNumber: 124,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Send_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                className: \"text-white\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                                lineNumber: 125,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bookmark_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        className: \"text-white\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-white text-sm font-sans font-bold\",\n                                children: \"123 likes\"\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 15\n                            }, undefined),\n                            post.comments.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-start\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    className: \"text-white text-sm font-sans font-bold\",\n                                    href: \"/posts/\".concat(post._id),\n                                    children: [\n                                        \"View all \",\n                                        post.comments.length,\n                                        \" comments\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                    lineNumber: 134,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen fixed bottom-0 bg-black\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"w-2/4 bg-black\",\n                                href: \"/posts\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    className: \"w-2/4 bg-black\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Heart_Home_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                        lineNumber: 146,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                    lineNumber: 145,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"w-2/4 bg-black\",\n                                href: \"/search\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    className: \"w-2/4 bg-black\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Search_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                        lineNumber: 151,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                    lineNumber: 150,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                                lineNumber: 149,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, post._id, true, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n                lineNumber: 88,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/page.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = Page;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9zdHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNkU7QUFPL0M7QUFDYztBQUNEO0FBQ0U7QUFDVDtBQUNJO0FBQ0Y7QUFPSjtBQUNMO0FBQ21CO0FBOEJoRCxNQUFNbUIsT0FBTzs7SUFDWCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQVcsRUFBRTtJQUMvQyxNQUFNZ0IsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO0lBQ25DLE1BQU1DLFdBQVc7UUFDZixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLDZEQUNBO1lBQ0VDLFNBQVM7Z0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTlA7Z0JBQ3pCLGdCQUFnQjtZQUNsQjtRQUNGO1FBRUYsTUFBTVEsV0FBVyxNQUFNSixTQUFTSyxJQUFJO1FBQ3BDVixTQUFTUztRQUNURSxRQUFRQyxHQUFHLENBQUNIO0lBQ2Q7SUFDQSxNQUFNSSxhQUFhO1FBQ2pCLElBQUksQ0FBQ1osT0FBTztZQUNWVSxRQUFRQyxHQUFHLENBQUM7UUFDZCxPQUFPLENBQ1A7SUFDRjtJQUVBMUIsZ0RBQVNBOzBCQUFDO1lBQ1IyQjtZQUNBVDtRQUNGO3lCQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTtrQkFDWmhCLGtCQUFBQSw0QkFBQUEsTUFBT2lCLEdBQUcsQ0FBQyxDQUFDQztZQUNYLHFCQUNFLDhEQUFDcEMscURBQUlBO2dCQUVIa0MsV0FBVTs7a0NBRVYsOERBQUMvQiwyREFBVUE7d0JBQUMrQixXQUFVOzswQ0FDcEIsOERBQUNwQyx5REFBTUE7MENBQ0wsNEVBQUNDLDhEQUFXQTtvQ0FBQ3NDLEtBQUtELEtBQUtFLE1BQU0sQ0FBQ0MsTUFBTTs7Ozs7Ozs7Ozs7MENBRXRDLDhEQUFDTjtnQ0FBSUMsV0FBVTswQ0FDWkUsS0FBS0UsTUFBTSxDQUFDRSxRQUFROzs7Ozs7Ozs7Ozs7a0NBR3pCLDhEQUFDdkMsNERBQVdBO3dCQUFDaUMsV0FBVTtrQ0FDckIsNEVBQUN0Qiw2REFBUUE7c0NBQ1AsNEVBQUNDLG9FQUFlQTs7a0RBQ2QsOERBQUNDLGlFQUFZQTs7NENBQ1Y7MERBQ0QsOERBQUMyQjtnREFBSUosS0FBS0QsS0FBS00sT0FBTztnREFBRVIsV0FBVTs7Ozs7Ozs7Ozs7O2tEQUVwQyw4REFBQ3BCLGlFQUFZQTs7NENBQ1Y7MERBQ0QsOERBQUMyQjtnREFBSUosS0FBS0QsS0FBS00sT0FBTztnREFBRVIsV0FBVTs7Ozs7Ozs7Ozs7O2tEQUVwQyw4REFBQ3BCLGlFQUFZQTs7NENBQ1Y7MERBQ0QsOERBQUNtQjs7a0VBQ0MsOERBQUNRO3dEQUFJSixLQUFLRCxLQUFLTSxPQUFPO3dEQUFFUixXQUFVOzs7Ozs7b0RBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU16RCw4REFBQ2hDLDJEQUFVQTt3QkFBQ2dDLFdBQVU7OzBDQUNwQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUM1QixzRkFBS0E7Z0RBQUM0QixXQUFVOzs7Ozs7MERBQ2pCLDhEQUFDMUIseUZBQWFBO2dEQUFDMEIsV0FBVTs7Ozs7OzBEQUN6Qiw4REFBQ3pCLGdGQUFJQTtnREFBQ3lCLFdBQVU7Ozs7Ozs7Ozs7OztrREFFbEIsOERBQUN4QixxRkFBUUE7d0NBQUN3QixXQUFVOzs7Ozs7Ozs7Ozs7MENBRXRCLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBeUM7Ozs7Ozs0QkFHdkRFLEtBQUtPLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLG1CQUN0Qiw4REFBQ1g7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNuQixpREFBSUE7b0NBQ0htQixXQUFVO29DQUNWVyxNQUFNLFVBQW1CLE9BQVRULEtBQUtVLEdBQUc7O3dDQUN6Qjt3Q0FDV1YsS0FBS08sUUFBUSxDQUFDQyxNQUFNO3dDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3ZDLDhEQUFDWDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNuQixpREFBSUE7Z0NBQUNtQixXQUFVO2dDQUFpQlcsTUFBTTswQ0FDckMsNEVBQUM3Qix5REFBTUE7b0NBQUNrQixXQUFVOzhDQUNoQiw0RUFBQzNCLHVGQUFJQTs7Ozs7Ozs7Ozs7Ozs7OzBDQUdULDhEQUFDUSxpREFBSUE7Z0NBQUNtQixXQUFVO2dDQUFpQlcsTUFBTTswQ0FDckMsNEVBQUM3Qix5REFBTUE7b0NBQUNrQixXQUFVOzhDQUNoQiw0RUFBQ3ZCLG1GQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQTlEUnlCLEtBQUtVLEdBQUc7Ozs7O1FBb0VuQjs7Ozs7O0FBR047R0F6R003QjtLQUFBQTtBQTJHTixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzLzI0SFAwMDE2L0Rlc2t0b3AvSUcvd2ViL3NyYy9hcHAvcG9zdHMvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IEF2YXRhciwgQXZhdGFyRmFsbGJhY2ssIEF2YXRhckltYWdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hdmF0YXJcIjtcbmltcG9ydCB7XG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxuICBDYXJkRGVzY3JpcHRpb24sXG4gIENhcmRGb290ZXIsXG4gIENhcmRIZWFkZXIsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGVhcnQsIEhvbWUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBNZXNzYWdlQ2lyY2xlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgU2VuZCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEJvb2ttYXJrIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHtcbiAgQ2Fyb3VzZWwsXG4gIENhcm91c2VsQ29udGVudCxcbiAgQ2Fyb3VzZWxJdGVtLFxuICBDYXJvdXNlbE5leHQsXG4gIENhcm91c2VsUHJldmlvdXMsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2Fyb3VzZWxcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5cbnR5cGUgbGlrZVR5cGVzID0ge1xuICBwcm9maWxlSW1hZ2U6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgX2lkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSB1c2VyVHlwZSA9IHtcbiAgX2lkOiBzdHJpbmc7XG4gIHByb0ltZzogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgY29tbWVudFR5cGUgPSB7XG4gIGNvbW1lbnQ6IHN0cmluZztcbiAgX2lkOiBzdHJpbmc7XG4gIHVzZXJJZDogdXNlclR5cGU7XG4gIHBvc3RJZDogcG9zdFR5cGU7XG59O1xuXG5leHBvcnQgdHlwZSBwb3N0VHlwZSA9IHtcbiAgX2lkOiBzdHJpbmc7XG4gIGNhcHRpb246IHN0cmluZztcbiAgcG9zdEltZzogc3RyaW5nO1xuICB1c2VySWQ6IHVzZXJUeXBlO1xuICBsaWtlczogbGlrZVR5cGVzW107XG4gIGNvbW1lbnRzOiBjb21tZW50VHlwZVtdO1xufVtdO1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPHBvc3RUeXBlPihbXSk7XG4gIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKTtcbiAgY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9pbnN0YWdyYW0tYmFja2VuZC1lM2VxLm9ucmVuZGVyLmNvbS9wb3N0L2dldFBvc3RzXCIsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQganNvbkRhdGEuanNvbigpO1xuICAgIHNldFBvc3RzKHJlc3BvbnNlKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gIH07XG4gIGNvbnN0IGNoZWNrVG9rZW4gPSAoKSA9PiB7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgY29uc29sZS5sb2coXCJubyB0b2tlblwiKTtcbiAgICB9IGVsc2Uge1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrVG9rZW4oKTtcbiAgICBnZXRQb3N0cygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1ibGFjayByZWxhdGl2ZVwiPlxuICAgICAge3Bvc3RzPy5tYXAoKHBvc3QpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAga2V5PXtwb3N0Ll9pZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZml0IGJnLWJsYWNrIGJvcmRlci1ncmF5LTcwMCBib3JkZXItci0wIGJvcmRlci1sLTAgcm91bmRlZC1ub25lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICA8QXZhdGFyPlxuICAgICAgICAgICAgICAgIDxBdmF0YXJJbWFnZSBzcmM9e3Bvc3QudXNlcklkLnByb0ltZ30gLz5cbiAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtc2FucyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICB7cG9zdC51c2VySWQudXNlcm5hbWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgIDxDYXJvdXNlbD5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbT5cbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5wb3N0SW1nfSBjbGFzc05hbWU9XCJ3LXNjcmVlblwiIC8+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QucG9zdEltZ30gY2xhc3NOYW1lPVwidy1zY3JlZW5cIiAvPlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtPlxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QucG9zdEltZ30gY2xhc3NOYW1lPVwidy1zY3JlZW5cIiAvPlxcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICA8SGVhcnQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8TWVzc2FnZUNpcmNsZSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxTZW5kIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxCb29rbWFyayBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtc2FucyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAxMjMgbGlrZXNcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtwb3N0LmNvbW1lbnRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1zYW5zIGZvbnQtYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcG9zdHMvJHtwb3N0Ll9pZH1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBWaWV3IGFsbCB7cG9zdC5jb21tZW50cy5sZW5ndGh9IGNvbW1lbnRzXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NhcmRGb290ZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGZpeGVkIGJvdHRvbS0wIGJnLWJsYWNrXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInctMi80IGJnLWJsYWNrXCIgaHJlZj17XCIvcG9zdHNcIn0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LTIvNCBiZy1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAgPEhvbWUgLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ3LTIvNCBiZy1ibGFja1wiIGhyZWY9e1wiL3NlYXJjaFwifT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctMi80IGJnLWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJBdmF0YXIiLCJBdmF0YXJJbWFnZSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJDYXJkSGVhZGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFydCIsIkhvbWUiLCJNZXNzYWdlQ2lyY2xlIiwiU2VuZCIsIkJvb2ttYXJrIiwiU2VhcmNoIiwiQ2Fyb3VzZWwiLCJDYXJvdXNlbENvbnRlbnQiLCJDYXJvdXNlbEl0ZW0iLCJMaW5rIiwiQnV0dG9uIiwiUGFnZSIsInBvc3RzIiwic2V0UG9zdHMiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXRQb3N0cyIsImpzb25EYXRhIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjaGVja1Rva2VuIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicG9zdCIsInNyYyIsInVzZXJJZCIsInByb0ltZyIsInVzZXJuYW1lIiwiaW1nIiwicG9zdEltZyIsImNvbW1lbnRzIiwibGVuZ3RoIiwiaHJlZiIsIl9pZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/posts/page.tsx\n"));

/***/ })

});