"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/posts/user/[userId]/page",{

/***/ "(app-pages-browser)/./src/app/posts/user/[userId]/page.tsx":
/*!**********************************************!*\
  !*** ./src/app/posts/user/[userId]/page.tsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/avatar */ \"(app-pages-browser)/./src/components/ui/avatar.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Page = (param)=>{\n    let { params } = param;\n    var _user_posts;\n    _s();\n    const { userId } = (0,react__WEBPACK_IMPORTED_MODULE_3__.use)(params);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const getUserData = async ()=>{\n        const token = localStorage.getItem(\"accessToken\");\n        const jsonData = await fetch(\"https://instagram-backend-e3eq.onrender.com/user/\".concat(userId), {\n            headers: {\n                Authorization: \"Bearer \".concat(token),\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const response = await jsonData.json();\n        setUser(response);\n        console.log(user);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            getUserData();\n        }\n    }[\"Page.useEffect\"], [\n        userId\n    ]);\n    var _user_posts_length;\n    const postsCount = (_user_posts_length = user === null || user === void 0 ? void 0 : user.posts.length) !== null && _user_posts_length !== void 0 ? _user_posts_length : 0;\n    console.log(postsCount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        className: \"w-screen h-screen bg-black space-y-6 border-none rounded-none\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                className: \"flex justify-center pt-5 pb-0 gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/3  h-[100px] flex justify-center items-center\",\n                        children: (user === null || user === void 0 ? void 0 : user.proImg) == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                            className: \"w-3/4 h-3/4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {\n                                src: \"https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                            className: \"w-[77px] h-[77px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {\n                                src: user.proImg\n                            }, void 0, false, {\n                                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2/3 flex flex-col justify-center space-y-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-1/3 font-extrabold text-xl flex justify-start items-center text-white\",\n                                children: user === null || user === void 0 ? void 0 : user.username\n                            }, void 0, false, {\n                                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"h-1/3 text-white w-3/4 bg-blue-600 font-sans font-bold text-base rounded-lg\",\n                                children: \"Follow\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardDescription, {\n                className: \"w-screen flex flex-col items-center \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white font-sans font-bold w-5/6 \",\n                        children: user === null || user === void 0 ? void 0 : user.fullname\n                    }, void 0, false, {\n                        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 w-5/6 font-sans font-medium \",\n                        children: user === null || user === void 0 ? void 0 : user.bio\n                    }, void 0, false, {\n                        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                className: \"flex w-screen border border-gray-500 border-r-0 border-l-0 justify-center pt-3 pb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 w-1/3 flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-bold\",\n                                children: postsCount\n                            }, void 0, false, {\n                                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined),\n                            \" posts\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 w-1/3 flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-bold\",\n                                children: \"8911\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, undefined),\n                            \" followers\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 w-1/3 flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-bold\",\n                                children: \"57\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, undefined),\n                            \" following\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardFooter, {\n                children: user === null || user === void 0 ? void 0 : (_user_posts = user.posts) === null || _user_posts === void 0 ? void 0 : _user_posts.map((post)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white\",\n                        children: post.postImg\n                    }, post._id, false, {\n                        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"hT6C72rcbfRUedrDq+TPaFfRI/M=\");\n_c = Page;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9zdHMvdXNlci9bdXNlcklkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM2RDtBQU8vQjtBQUdtQjtBQUVqRCxNQUFNVSxPQUFPO1FBQUMsRUFBRUMsTUFBTSxFQUEyQztRQW1FeERDOztJQWxFUCxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHTiwwQ0FBR0EsQ0FBQ0k7SUFDdkIsTUFBTSxDQUFDQyxNQUFNRSxRQUFRLEdBQUdMLCtDQUFRQTtJQUVoQyxNQUFNTSxjQUFjO1FBQ2xCLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztRQUNuQyxNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLG9EQUEyRCxPQUFQUCxTQUNwRDtZQUNFUSxTQUFTO2dCQUNQQyxlQUFlLFVBQWdCLE9BQU5OO2dCQUN6QixnQkFBZ0I7WUFDbEI7UUFDRjtRQUVGLE1BQU1PLFdBQVcsTUFBTUosU0FBU0ssSUFBSTtRQUNwQ1YsUUFBUVM7UUFDUkUsUUFBUUMsR0FBRyxDQUFDZDtJQUNkO0lBQ0FKLGdEQUFTQTswQkFBQztZQUNSTztRQUNGO3lCQUFHO1FBQUNGO0tBQU87UUFDUUQ7SUFBbkIsTUFBTWUsYUFBYWYsQ0FBQUEscUJBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTWdCLEtBQUssQ0FBQ0MsTUFBTSxjQUFsQmpCLGdDQUFBQSxxQkFBc0I7SUFDekNhLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDWixxQkFDRSw4REFBQ3pCLHFEQUFJQTtRQUFDNEIsV0FBVTs7MEJBQ2QsOERBQUN4QiwyREFBVUE7Z0JBQUN3QixXQUFVOztrQ0FDcEIsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNabEIsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNb0IsTUFBTSxLQUFJLHFCQUNmLDhEQUFDaEMseURBQU1BOzRCQUFDOEIsV0FBVTtzQ0FDaEIsNEVBQUM3Qiw4REFBV0E7Z0NBQUNnQyxLQUFJOzs7Ozs7Ozs7O3NEQUduQiw4REFBQ2pDLHlEQUFNQTs0QkFBQzhCLFdBQVU7c0NBQ2hCLDRFQUFDN0IsOERBQVdBO2dDQUFDZ0MsS0FBS3JCLEtBQUtvQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUluQyw4REFBQ0Q7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBSUQsV0FBVTswQ0FDWmxCLGlCQUFBQSwyQkFBQUEsS0FBTXNCLFFBQVE7Ozs7OzswQ0FFakIsOERBQUNDO2dDQUFPTCxXQUFVOzBDQUE4RTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtwRyw4REFBQzFCLGdFQUFlQTtnQkFBQzBCLFdBQVU7O2tDQUN6Qiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ1psQixpQkFBQUEsMkJBQUFBLEtBQU13QixRQUFROzs7Ozs7a0NBRWpCLDhEQUFDTDt3QkFBSUQsV0FBVTtrQ0FDWmxCLGlCQUFBQSwyQkFBQUEsS0FBTXlCLEdBQUc7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ2xDLDREQUFXQTtnQkFBQzJCLFdBQVU7O2tDQUNyQiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDUTtnQ0FBRVIsV0FBVTswQ0FBd0JIOzs7Ozs7NEJBQWU7Ozs7Ozs7a0NBRXRELDhEQUFDSTt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNRO2dDQUFFUixXQUFVOzBDQUF1Qjs7Ozs7OzRCQUFROzs7Ozs7O2tDQUU5Qyw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDUTtnQ0FBRVIsV0FBVTswQ0FBdUI7Ozs7Ozs0QkFBTTs7Ozs7Ozs7Ozs7OzswQkFHOUMsOERBQUN6QiwyREFBVUE7MEJBQ1JPLGlCQUFBQSw0QkFBQUEsY0FBQUEsS0FBTWdCLEtBQUssY0FBWGhCLGtDQUFBQSxZQUFhMkIsR0FBRyxDQUFDLENBQUNDO29CQUNqQixxQkFDRSw4REFBQ1Q7d0JBQUlELFdBQVU7a0NBQ1pVLEtBQUtDLE9BQU87dUJBRGtCRCxLQUFLRSxHQUFHOzs7OztnQkFJN0M7Ozs7Ozs7Ozs7OztBQUlSO0dBN0VNaEM7S0FBQUE7QUE4RU4saUVBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy90c29sbW4vRGVza3RvcC93ZWIvc3JjL2FwcC9wb3N0cy91c2VyL1t1c2VySWRdL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgQXZhdGFyLCBBdmF0YXJJbWFnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYXZhdGFyXCI7XG5pbXBvcnQge1xuICBDYXJkLFxuICBDYXJkQ29udGVudCxcbiAgQ2FyZERlc2NyaXB0aW9uLFxuICBDYXJkRm9vdGVyLFxuICBDYXJkSGVhZGVyLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IHVzZXJUeXBlIH0gZnJvbSBcIkAvY3VzdG9tLWNvbXBvbmVudHMvaXNMaWtlZFwiO1xuaW1wb3J0IHsgcG9zdFR5cGUgfSBmcm9tIFwiQC9jdXN0b20tY29tcG9uZW50cy9Qb3N0Rm9vdGVyXCI7XG5pbXBvcnQgeyB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUGFnZSA9ICh7IHBhcmFtcyB9OiB7IHBhcmFtczogUHJvbWlzZTx7IHVzZXJJZDogc3RyaW5nIH0+IH0pID0+IHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IHVzZShwYXJhbXMpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTx1c2VyVHlwZT4oKTtcblxuICBjb25zdCBnZXRVc2VyRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzVG9rZW5cIik7XG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2luc3RhZ3JhbS1iYWNrZW5kLWUzZXEub25yZW5kZXIuY29tL3VzZXIvJHt1c2VySWR9YCxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBqc29uRGF0YS5qc29uKCk7XG4gICAgc2V0VXNlcihyZXNwb25zZSk7XG4gICAgY29uc29sZS5sb2codXNlcik7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VXNlckRhdGEoKTtcbiAgfSwgW3VzZXJJZF0pO1xuICBjb25zdCBwb3N0c0NvdW50ID0gdXNlcj8ucG9zdHMubGVuZ3RoID8/IDA7XG4gIGNvbnNvbGUubG9nKHBvc3RzQ291bnQpO1xuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIGJnLWJsYWNrIHNwYWNlLXktNiBib3JkZXItbm9uZSByb3VuZGVkLW5vbmVcIj5cbiAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHQtNSBwYi0wIGdhcC01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgIGgtWzEwMHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHt1c2VyPy5wcm9JbWcgPT0gbnVsbCA/IChcbiAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwidy0zLzQgaC0zLzRcIj5cbiAgICAgICAgICAgICAgPEF2YXRhckltYWdlIHNyYz1cImh0dHBzOi8vc3RhdGljLnZlY3RlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3RodW1ibmFpbHMvMDA5LzI5Mi8yNDQvc21hbGwvZGVmYXVsdC1hdmF0YXItaWNvbi1vZi1zb2NpYWwtbWVkaWEtdXNlci12ZWN0b3IuanBnXCIgLz5cbiAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT1cInctWzc3cHhdIGgtWzc3cHhdXCI+XG4gICAgICAgICAgICAgIDxBdmF0YXJJbWFnZSBzcmM9e3VzZXIucHJvSW1nfSAvPlxuICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBzcGFjZS15LTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMS8zIGZvbnQtZXh0cmFib2xkIHRleHQteGwgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICB7dXNlcj8udXNlcm5hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoLTEvMyB0ZXh0LXdoaXRlIHctMy80IGJnLWJsdWUtNjAwIGZvbnQtc2FucyBmb250LWJvbGQgdGV4dC1iYXNlIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgIEZvbGxvd1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgIDxDYXJkRGVzY3JpcHRpb24gY2xhc3NOYW1lPVwidy1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNhbnMgZm9udC1ib2xkIHctNS82IFwiPlxuICAgICAgICAgIHt1c2VyPy5mdWxsbmFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB3LTUvNiBmb250LXNhbnMgZm9udC1tZWRpdW0gXCI+XG4gICAgICAgICAge3VzZXI/LmJpb31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmREZXNjcmlwdGlvbj5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJmbGV4IHctc2NyZWVuIGJvcmRlciBib3JkZXItZ3JheS01MDAgYm9yZGVyLXItMCBib3JkZXItbC0wIGp1c3RpZnktY2VudGVyIHB0LTMgcGItM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdy0xLzMgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPntwb3N0c0NvdW50fTwvcD4gcG9zdHNcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB3LTEvMyBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkXCI+ODkxMTwvcD4gZm9sbG93ZXJzXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdy0xLzMgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPjU3PC9wPiBmb2xsb3dpbmdcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPENhcmRGb290ZXI+XG4gICAgICAgIHt1c2VyPy5wb3N0cz8ubWFwKChwb3N0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIGtleT17cG9zdC5faWR9PlxuICAgICAgICAgICAgICB7cG9zdC5wb3N0SW1nfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0NhcmRGb290ZXI+XG4gICAgPC9DYXJkPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsiQXZhdGFyIiwiQXZhdGFySW1hZ2UiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRGVzY3JpcHRpb24iLCJDYXJkRm9vdGVyIiwiQ2FyZEhlYWRlciIsInVzZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFnZSIsInBhcmFtcyIsInVzZXIiLCJ1c2VySWQiLCJzZXRVc2VyIiwiZ2V0VXNlckRhdGEiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJqc29uRGF0YSIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicG9zdHNDb3VudCIsInBvc3RzIiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwiZGl2IiwicHJvSW1nIiwic3JjIiwidXNlcm5hbWUiLCJidXR0b24iLCJmdWxsbmFtZSIsImJpbyIsInAiLCJtYXAiLCJwb3N0IiwicG9zdEltZyIsIl9pZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/posts/user/[userId]/page.tsx\n"));

/***/ })

});