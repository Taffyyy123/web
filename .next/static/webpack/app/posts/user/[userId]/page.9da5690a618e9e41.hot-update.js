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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/avatar */ \"(app-pages-browser)/./src/components/ui/avatar.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Page = (param)=>{\n    let { params } = param;\n    _s();\n    const { userId } = (0,react__WEBPACK_IMPORTED_MODULE_3__.use)(params);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const getUserData = async ()=>{\n        const token = localStorage.getItem(\"accessToken\");\n        const jsonData = await fetch(\"https://instagram-backend-e3eq.onrender.com/user/\".concat(userId), {\n            headers: {\n                Authorization: \"Bearer \".concat(token),\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const response = await jsonData.json();\n        console.log(response);\n        setUser(response);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            getUserData();\n        }\n    }[\"Page.useEffect\"], []);\n    const postsCount = user === null || user === void 0 ? void 0 : user.posts.length;\n    console.log(postsCount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        className: \"w-screen h-screen bg-black space-y-6 border-none rounded-none\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                className: \"flex justify-center pt-5 pb-0 gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/3  h-[100px] flex justify-center items-center\",\n                        children: (user === null || user === void 0 ? void 0 : user.proImg) == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                            className: \"w-3/4 h-3/4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {\n                                src: \"https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                            className: \"w-[77px] h-[77px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {\n                                src: user.proImg\n                            }, void 0, false, {\n                                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2/3 flex flex-col justify-center space-y-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-1/3 font-extrabold text-xl flex justify-start items-center text-white\",\n                                children: user === null || user === void 0 ? void 0 : user.username\n                            }, void 0, false, {\n                                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"h-1/3 text-white w-3/4 bg-blue-600 font-sans font-bold text-base rounded-lg\",\n                                children: \"Follow\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardDescription, {\n                className: \"w-screen flex flex-col items-center \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white font-sans font-bold w-5/6 \",\n                        children: user === null || user === void 0 ? void 0 : user.fullname\n                    }, void 0, false, {\n                        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 w-5/6 font-sans font-medium \",\n                        children: user === null || user === void 0 ? void 0 : user.bio\n                    }, void 0, false, {\n                        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                className: \"flex w-screen border border-gray-500 border-r-0 border-l-0 justify-center pt-3 pb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 w-1/3 flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-bold\",\n                                children: postsCount\n                            }, void 0, false, {\n                                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined),\n                            \" posts\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 w-1/3 flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-bold\",\n                                children: \"8911\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined),\n                            \" followers\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 w-1/3 flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-bold\",\n                                children: \"57\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, undefined),\n                            \" following\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardFooter, {\n                children: user === null || user === void 0 ? void 0 : user.posts.map((post)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white\",\n                        children: \"dad\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 18\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tsolmn/Desktop/web/src/app/posts/user/[userId]/page.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"1HTG/366XwFHkMyYGMCYLRxL7uY=\");\n_c = Page;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9zdHMvdXNlci9bdXNlcklkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM2RDtBQU8vQjtBQUdtQjtBQUVqRCxNQUFNVSxPQUFPO1FBQUMsRUFBRUMsTUFBTSxFQUEyQzs7SUFDL0QsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0wsMENBQUdBLENBQUNJO0lBQ3ZCLE1BQU0sQ0FBQ0UsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUE7SUFDaEMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFXLEVBQUU7SUFFL0MsTUFBTVEsY0FBYztRQUNsQixNQUFNQyxRQUFRQyxhQUFhQyxPQUFPLENBQUM7UUFDbkMsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQixvREFBMkQsT0FBUFYsU0FDcEQ7WUFDRVcsU0FBUztnQkFDUEMsZUFBZSxVQUFnQixPQUFOTjtnQkFDekIsZ0JBQWdCO1lBQ2xCO1FBQ0Y7UUFFRixNQUFNTyxXQUFXLE1BQU1KLFNBQVNLLElBQUk7UUFDcENDLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDWlgsUUFBUVc7SUFDVjtJQUNBakIsZ0RBQVNBOzBCQUFDO1lBQ1JTO1FBQ0Y7eUJBQUcsRUFBRTtJQUNMLE1BQU1ZLGFBQWFoQixpQkFBQUEsMkJBQUFBLEtBQU1FLEtBQUssQ0FBQ2UsTUFBTTtJQUNyQ0gsUUFBUUMsR0FBRyxDQUFDQztJQUNaLHFCQUNFLDhEQUFDM0IscURBQUlBO1FBQUM2QixXQUFVOzswQkFDZCw4REFBQ3pCLDJEQUFVQTtnQkFBQ3lCLFdBQVU7O2tDQUNwQiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ1psQixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1vQixNQUFNLEtBQUkscUJBQ2YsOERBQUNqQyx5REFBTUE7NEJBQUMrQixXQUFVO3NDQUNoQiw0RUFBQzlCLDhEQUFXQTtnQ0FBQ2lDLEtBQUk7Ozs7Ozs7Ozs7c0RBR25CLDhEQUFDbEMseURBQU1BOzRCQUFDK0IsV0FBVTtzQ0FDaEIsNEVBQUM5Qiw4REFBV0E7Z0NBQUNpQyxLQUFLckIsS0FBS29CLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSW5DLDhEQUFDRDt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFJRCxXQUFVOzBDQUNabEIsaUJBQUFBLDJCQUFBQSxLQUFNc0IsUUFBUTs7Ozs7OzBDQUVqQiw4REFBQ0M7Z0NBQU9MLFdBQVU7MENBQThFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3BHLDhEQUFDM0IsZ0VBQWVBO2dCQUFDMkIsV0FBVTs7a0NBQ3pCLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDWmxCLGlCQUFBQSwyQkFBQUEsS0FBTXdCLFFBQVE7Ozs7OztrQ0FFakIsOERBQUNMO3dCQUFJRCxXQUFVO2tDQUNabEIsaUJBQUFBLDJCQUFBQSxLQUFNeUIsR0FBRzs7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDbkMsNERBQVdBO2dCQUFDNEIsV0FBVTs7a0NBQ3JCLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNRO2dDQUFFUixXQUFVOzBDQUF3QkY7Ozs7Ozs0QkFBZTs7Ozs7OztrQ0FFdEQsOERBQUNHO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ1E7Z0NBQUVSLFdBQVU7MENBQXVCOzs7Ozs7NEJBQVE7Ozs7Ozs7a0NBRTlDLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNRO2dDQUFFUixXQUFVOzBDQUF1Qjs7Ozs7OzRCQUFNOzs7Ozs7Ozs7Ozs7OzBCQUc5Qyw4REFBQzFCLDJEQUFVQTswQkFDUlEsaUJBQUFBLDJCQUFBQSxLQUFNRSxLQUFLLENBQUN5QixHQUFHLENBQUMsQ0FBQ0M7b0JBQ2hCLHFCQUFPLDhEQUFDVDt3QkFBSUQsV0FBVTtrQ0FBYTs7Ozs7O2dCQUNyQzs7Ozs7Ozs7Ozs7O0FBSVI7R0ExRU1yQjtLQUFBQTtBQTJFTixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3Rzb2xtbi9EZXNrdG9wL3dlYi9zcmMvYXBwL3Bvc3RzL3VzZXIvW3VzZXJJZF0vcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBBdmF0YXIsIEF2YXRhckltYWdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hdmF0YXJcIjtcbmltcG9ydCB7XG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxuICBDYXJkRGVzY3JpcHRpb24sXG4gIENhcmRGb290ZXIsXG4gIENhcmRIZWFkZXIsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgdXNlclR5cGUgfSBmcm9tIFwiQC9jdXN0b20tY29tcG9uZW50cy9pc0xpa2VkXCI7XG5pbXBvcnQgeyBwb3N0VHlwZSB9IGZyb20gXCJAL2N1c3RvbS1jb21wb25lbnRzL1Bvc3RGb290ZXJcIjtcbmltcG9ydCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQYWdlID0gKHsgcGFyYW1zIH06IHsgcGFyYW1zOiBQcm9taXNlPHsgdXNlcklkOiBzdHJpbmcgfT4gfSkgPT4ge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gdXNlKHBhcmFtcyk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPHVzZXJUeXBlPigpO1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPHBvc3RUeXBlPihbXSk7XG5cbiAgY29uc3QgZ2V0VXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpO1xuICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9pbnN0YWdyYW0tYmFja2VuZC1lM2VxLm9ucmVuZGVyLmNvbS91c2VyLyR7dXNlcklkfWAsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQganNvbkRhdGEuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICBzZXRVc2VyKHJlc3BvbnNlKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRVc2VyRGF0YSgpO1xuICB9LCBbXSk7XG4gIGNvbnN0IHBvc3RzQ291bnQgPSB1c2VyPy5wb3N0cy5sZW5ndGg7XG4gIGNvbnNvbGUubG9nKHBvc3RzQ291bnQpO1xuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIGJnLWJsYWNrIHNwYWNlLXktNiBib3JkZXItbm9uZSByb3VuZGVkLW5vbmVcIj5cbiAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHQtNSBwYi0wIGdhcC01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgIGgtWzEwMHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHt1c2VyPy5wcm9JbWcgPT0gbnVsbCA/IChcbiAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwidy0zLzQgaC0zLzRcIj5cbiAgICAgICAgICAgICAgPEF2YXRhckltYWdlIHNyYz1cImh0dHBzOi8vc3RhdGljLnZlY3RlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3RodW1ibmFpbHMvMDA5LzI5Mi8yNDQvc21hbGwvZGVmYXVsdC1hdmF0YXItaWNvbi1vZi1zb2NpYWwtbWVkaWEtdXNlci12ZWN0b3IuanBnXCIgLz5cbiAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT1cInctWzc3cHhdIGgtWzc3cHhdXCI+XG4gICAgICAgICAgICAgIDxBdmF0YXJJbWFnZSBzcmM9e3VzZXIucHJvSW1nfSAvPlxuICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBzcGFjZS15LTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMS8zIGZvbnQtZXh0cmFib2xkIHRleHQteGwgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICB7dXNlcj8udXNlcm5hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoLTEvMyB0ZXh0LXdoaXRlIHctMy80IGJnLWJsdWUtNjAwIGZvbnQtc2FucyBmb250LWJvbGQgdGV4dC1iYXNlIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgIEZvbGxvd1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgIDxDYXJkRGVzY3JpcHRpb24gY2xhc3NOYW1lPVwidy1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNhbnMgZm9udC1ib2xkIHctNS82IFwiPlxuICAgICAgICAgIHt1c2VyPy5mdWxsbmFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB3LTUvNiBmb250LXNhbnMgZm9udC1tZWRpdW0gXCI+XG4gICAgICAgICAge3VzZXI/LmJpb31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmREZXNjcmlwdGlvbj5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJmbGV4IHctc2NyZWVuIGJvcmRlciBib3JkZXItZ3JheS01MDAgYm9yZGVyLXItMCBib3JkZXItbC0wIGp1c3RpZnktY2VudGVyIHB0LTMgcGItM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdy0xLzMgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPntwb3N0c0NvdW50fTwvcD4gcG9zdHNcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB3LTEvMyBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkXCI+ODkxMTwvcD4gZm9sbG93ZXJzXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdy0xLzMgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPjU3PC9wPiBmb2xsb3dpbmdcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPENhcmRGb290ZXI+XG4gICAgICAgIHt1c2VyPy5wb3N0cy5tYXAoKHBvc3QpID0+IHtcbiAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+ZGFkPC9kaXY+O1xuICAgICAgICB9KX1cbiAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJBdmF0YXIiLCJBdmF0YXJJbWFnZSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRGb290ZXIiLCJDYXJkSGVhZGVyIiwidXNlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQYWdlIiwicGFyYW1zIiwidXNlcklkIiwidXNlciIsInNldFVzZXIiLCJwb3N0cyIsInNldFBvc3RzIiwiZ2V0VXNlckRhdGEiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJqc29uRGF0YSIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicG9zdHNDb3VudCIsImxlbmd0aCIsImNsYXNzTmFtZSIsImRpdiIsInByb0ltZyIsInNyYyIsInVzZXJuYW1lIiwiYnV0dG9uIiwiZnVsbG5hbWUiLCJiaW8iLCJwIiwibWFwIiwicG9zdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/posts/user/[userId]/page.tsx\n"));

/***/ })

});