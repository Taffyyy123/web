"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/posts/[postId]/page",{

/***/ "(app-pages-browser)/./src/app/posts/[postId]/page.tsx":
/*!*****************************************!*\
  !*** ./src/app/posts/[postId]/page.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-avatar */ \"(app-pages-browser)/./node_modules/@radix-ui/react-avatar/dist/index.mjs\");\n/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/avatar */ \"(app-pages-browser)/./src/components/ui/avatar.tsx\");\n/* harmony import */ var _barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var _barrel_optimize_names_Smile_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Smile!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/smile.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Page = (param)=>{\n    let { params } = param;\n    _s();\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { postId } = (0,react__WEBPACK_IMPORTED_MODULE_1__.use)(params);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInputChange = (event)=>{\n        setInputValue(event.target.value);\n    };\n    const getComments = async ()=>{\n        const jsonData = await fetch(\"https://instagram-backend-e3eq.onrender.com/post/\".concat(postId));\n        const response = await jsonData.json();\n        setComments(response);\n        console.log(response);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            getComments();\n        }\n    }[\"Page.useEffect\"], [\n        postId\n    ]);\n    const handleSubmitComment = ()=>{\n        const token = localStorage.getItem(\"accessToken\");\n        fetch(\"https://instagram-backend-e3eq.onrender.com/comment/createComment\", {\n            method: \"POST\",\n            headers: {\n                Authorization: \"Bearer \".concat(token),\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                postId,\n                comment: inputValue\n            })\n        });\n        setInputValue(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-black h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                href: \"/posts\",\n                className: \"flex justify-end pt-3 pr-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: \"text-white\"\n                }, void 0, false, {\n                    fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/[postId]/page.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/[postId]/page.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-5/6 overflow-scroll\",\n                children: comments === null || comments === void 0 ? void 0 : comments.map((comment)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        className: \"bg-black w-fit  border-gray-700 border-r-0 border-l-0 border-t-0 rounded-none\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                                className: \"flex items-center space-x-3 pb-2\",\n                                children: [\n                                    comment.userId.proImg == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_6__.Avatar, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_3__.AvatarImage, {\n                                            src: \"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fdefault-profile-picture&psig=AOvVaw30fEISyFOgkxNVaUflX9U5&ust=1735116955122000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjHusOEwIoDFQAAAAAdAAAAABAE\",\n                                            className: \"w-10 h-10 rounded-full\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/[postId]/page.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/[postId]/page.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 19\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_6__.Avatar, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_3__.AvatarImage, {\n                                            src: comment.userId.proImg,\n                                            className: \"w-10 h-10 rounded-full\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/[postId]/page.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/[postId]/page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-white text-lg font-sans font-bold\",\n                                        children: comment.userId.username\n                                    }, void 0, false, {\n                                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/[postId]/page.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/[postId]/page.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                                className: \"text-white text-lg font-sans font-bold w-screen\",\n                                children: comment.comment\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/[postId]/page.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, comment._id, true, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/[postId]/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/[postId]/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-4 pt-4 pl-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Smile_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        className: \"text-white\"\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/[postId]/page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: handleInputChange,\n                        value: inputValue,\n                        placeholder: \"Add a comment...\",\n                        type: \"text\",\n                        className: \"bg-black text-white outline-none w-3/4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/[postId]/page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \",\n                    inputValue.length == 0 ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-blue-600 font-bold bg-none w-1/4\",\n                        onClick: handleSubmitComment,\n                        children: \"Post\"\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/[postId]/page.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/[postId]/page.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/[postId]/page.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"crIn2invwYXb7b13bN49IfY1CWc=\");\n_c = Page;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9zdHMvW3Bvc3RJZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBQ29CO0FBQ3JCO0FBQ3FCO0FBQ3BDO0FBQ0k7QUFDUjtBQWU3QixNQUFNVyxPQUFPO1FBQUMsRUFBRUMsTUFBTSxFQUEyQzs7SUFDL0QsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFnQixFQUFFO0lBQzFELE1BQU0sRUFBRWEsTUFBTSxFQUFFLEdBQUdmLDBDQUFHQSxDQUFDWTtJQUN2QixNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR2YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTWdCLG9CQUFvQixDQUFDQztRQUN6QkYsY0FBY0UsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ2xDO0lBQ0EsTUFBTUMsY0FBYztRQUNsQixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLG9EQUEyRCxPQUFQVDtRQUV0RCxNQUFNVSxXQUFXLE1BQU1GLFNBQVNHLElBQUk7UUFDcENaLFlBQVlXO1FBQ1pFLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDZDtJQUVBeEIsZ0RBQVNBOzBCQUFDO1lBQ1JxQjtRQUNGO3lCQUFHO1FBQUNQO0tBQU87SUFDWCxNQUFNYyxzQkFBc0I7UUFDMUIsTUFBTUMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBQ25DUixNQUFNLHFFQUFxRTtZQUN6RVMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQQyxlQUFlLFVBQWdCLE9BQU5MO2dCQUN6QixnQkFBZ0I7WUFDbEI7WUFDQU0sTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQnZCO2dCQUNBd0IsU0FBU3ZCO1lBQ1g7UUFDRjtRQUNBQyxjQUFjO0lBQ2hCO0lBQ0EscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQy9CLGlEQUFJQTtnQkFBQ2dDLE1BQUs7Z0JBQVNELFdBQVU7MEJBQzVCLDRFQUFDakMsNkVBQUNBO29CQUFDaUMsV0FBVTs7Ozs7Ozs7Ozs7MEJBRWYsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaNUIscUJBQUFBLCtCQUFBQSxTQUFVOEIsR0FBRyxDQUFDLENBQUNKO29CQUNkLHFCQUNFLDhEQUFDcEMscURBQUlBO3dCQUVIc0MsV0FBVTs7MENBRVYsOERBQUNwQywyREFBVUE7Z0NBQUNvQyxXQUFVOztvQ0FDbkJGLFFBQVFLLE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLHFCQUN4Qiw4REFBQ3ZDLDBEQUFNQTtrREFDTCw0RUFBQ0MsOERBQVdBOzRDQUNWdUMsS0FBSTs0Q0FDSkwsV0FBVTs7Ozs7Ozs7OztrRUFJZCw4REFBQ25DLDBEQUFNQTtrREFDTCw0RUFBQ0MsOERBQVdBOzRDQUNWdUMsS0FBS1AsUUFBUUssTUFBTSxDQUFDQyxNQUFNOzRDQUMxQkosV0FBVTs7Ozs7Ozs7Ozs7a0RBS2hCLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFDWkYsUUFBUUssTUFBTSxDQUFDRyxRQUFROzs7Ozs7Ozs7Ozs7MENBRzVCLDhEQUFDM0MsNERBQVdBO2dDQUFDcUMsV0FBVTswQ0FDcEJGLFFBQVFBLE9BQU87Ozs7Ozs7dUJBekJiQSxRQUFRUyxHQUFHOzs7OztnQkE2QnRCOzs7Ozs7MEJBRUYsOERBQUNSO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2hDLGlGQUFLQTt3QkFBQ2dDLFdBQVU7Ozs7OztrQ0FDakIsOERBQUNRO3dCQUNDQyxVQUFVaEM7d0JBQ1ZHLE9BQU9MO3dCQUNQbUMsYUFBWTt3QkFDWkMsTUFBSzt3QkFDTFgsV0FBVTs7Ozs7O29CQUNUO29CQUNGekIsV0FBV3FDLE1BQU0sSUFBSSxJQUFJLHFCQUN4Qiw4REFBQ0M7d0JBQ0NiLFdBQVU7d0JBQ1ZjLFNBQVMxQjtrQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0E5Rk1sQjtLQUFBQTtBQStGTixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzLzI0SFAwMDE2L0Rlc2t0b3AvSUcvd2ViL3NyYy9hcHAvcG9zdHMvW3Bvc3RJZF0vcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWF2YXRhclwiO1xuaW1wb3J0IHsgQXZhdGFyRmFsbGJhY2ssIEF2YXRhckltYWdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hdmF0YXJcIjtcbmltcG9ydCB7IFggfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBTbWlsZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgY29tbWVudCB9IGZyb20gXCJwb3N0Y3NzXCI7XG5cbmV4cG9ydCB0eXBlIHVzZXJUeXBlID0ge1xuICBfaWQ6IHN0cmluZztcbiAgcHJvSW1nOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG59O1xuZXhwb3J0IHR5cGUgY29tbWVudFR5cGUgPSB7XG4gIGNvbW1lbnQ6IHN0cmluZztcbiAgX2lkOiBzdHJpbmc7XG4gIHVzZXJJZDogdXNlclR5cGU7XG59O1xuXG5jb25zdCBQYWdlID0gKHsgcGFyYW1zIH06IHsgcGFyYW1zOiBQcm9taXNlPHsgcG9zdElkOiBzdHJpbmcgfT4gfSkgPT4ge1xuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlPGNvbW1lbnRUeXBlW10+KFtdKTtcbiAgY29uc3QgeyBwb3N0SWQgfSA9IHVzZShwYXJhbXMpO1xuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQ6IHsgdGFyZ2V0OiB7IHZhbHVlOiBzdHJpbmcgfSB9KSA9PiB7XG4gICAgc2V0SW5wdXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBnZXRDb21tZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vaW5zdGFncmFtLWJhY2tlbmQtZTNlcS5vbnJlbmRlci5jb20vcG9zdC8ke3Bvc3RJZH1gXG4gICAgKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGpzb25EYXRhLmpzb24oKTtcbiAgICBzZXRDb21tZW50cyhyZXNwb25zZSk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Q29tbWVudHMoKTtcbiAgfSwgW3Bvc3RJZF0pO1xuICBjb25zdCBoYW5kbGVTdWJtaXRDb21tZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKTtcbiAgICBmZXRjaChcImh0dHBzOi8vaW5zdGFncmFtLWJhY2tlbmQtZTNlcS5vbnJlbmRlci5jb20vY29tbWVudC9jcmVhdGVDb21tZW50XCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHBvc3RJZCxcbiAgICAgICAgY29tbWVudDogaW5wdXRWYWx1ZSxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIHNldElucHV0VmFsdWUoXCJcIik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBoLXNjcmVlblwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9wb3N0c1wiIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgcHQtMyBwci00XCI+XG4gICAgICAgIDxYIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTUvNiBvdmVyZmxvdy1zY3JvbGxcIj5cbiAgICAgICAge2NvbW1lbnRzPy5tYXAoKGNvbW1lbnQpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAga2V5PXtjb21tZW50Ll9pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2sgdy1maXQgIGJvcmRlci1ncmF5LTcwMCBib3JkZXItci0wIGJvcmRlci1sLTAgYm9yZGVyLXQtMCByb3VuZGVkLW5vbmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTMgcGItMlwiPlxuICAgICAgICAgICAgICAgIHtjb21tZW50LnVzZXJJZC5wcm9JbWcgPT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXJJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vdXJsP3NhPWkmdXJsPWh0dHBzJTNBJTJGJTJGd3d3LnZlY3RlZXp5LmNvbSUyRmZyZWUtdmVjdG9yJTJGZGVmYXVsdC1wcm9maWxlLXBpY3R1cmUmcHNpZz1BT3ZWYXczMGZFSVN5Rk9na3hOVmFVZmxYOVU1JnVzdD0xNzM1MTE2OTU1MTIyMDAwJnNvdXJjZT1pbWFnZXMmY2Q9dmZlJm9waT04OTk3ODQ0OSZ2ZWQ9MENCRVFqUnhxRndvVENPakh1c09Fd0lvREZRQUFBQUFkQUFBQUFCQUVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXJJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y29tbWVudC51c2VySWQucHJvSW1nfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtc2FucyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIHtjb21tZW50LnVzZXJJZC51c2VybmFtZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtc2FucyBmb250LWJvbGQgdy1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICB7Y29tbWVudC5jb21tZW50fVxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgcHQtNCBwbC00XCI+XG4gICAgICAgIDxTbWlsZSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgY29tbWVudC4uLlwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrIHRleHQtd2hpdGUgb3V0bGluZS1ub25lIHctMy80XCJcbiAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgIHtpbnB1dFZhbHVlLmxlbmd0aCA9PSAwID8gbnVsbCA6IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIGZvbnQtYm9sZCBiZy1ub25lIHctMS80XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdENvbW1lbnR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUG9zdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRIZWFkZXIiLCJBdmF0YXIiLCJBdmF0YXJJbWFnZSIsIlgiLCJTbWlsZSIsIkxpbmsiLCJQYWdlIiwicGFyYW1zIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsInBvc3RJZCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZ2V0Q29tbWVudHMiLCJqc29uRGF0YSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdENvbW1lbnQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY29tbWVudCIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJtYXAiLCJ1c2VySWQiLCJwcm9JbWciLCJzcmMiLCJ1c2VybmFtZSIsIl9pZCIsImlucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJsZW5ndGgiLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/posts/[postId]/page.tsx\n"));

/***/ })

});