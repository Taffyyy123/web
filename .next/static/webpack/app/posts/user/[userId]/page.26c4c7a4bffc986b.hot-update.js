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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/avatar */ \"(app-pages-browser)/./src/components/ui/avatar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = (param)=>{\n    let { params } = param;\n    _s();\n    const { userId } = (0,react__WEBPACK_IMPORTED_MODULE_2__.use)(params);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const getUserData = async ()=>{\n        const token = localStorage.getItem(\"accessToken\");\n        const jsonData = await fetch(\"https://instagram-backend-e3eq.onrender.com/user/\".concat(userId), {\n            headers: {\n                Authorization: \"Bearer \".concat(token),\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const response = await jsonData.json();\n        console.log(response);\n        setUser(response);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            getUserData();\n        }\n    }[\"Page.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-screen bg-black\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center pt-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-1/3  h-[100px] flex justify-center items-center\",\n                    children: (user === null || user === void 0 ? void 0 : user.proImg) == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                        className: \"w-3/4 h-3/4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {\n                            src: \"https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg\"\n                        }, void 0, false, {\n                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                        className: \"w-[77px] h-[77px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {\n                            src: user.proImg\n                        }, void 0, false, {\n                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-2/3 flex flex-col justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-1/3 font-extrabold text-xl flex justify-start items-center text-white\",\n                            children: user === null || user === void 0 ? void 0 : user.username\n                        }, void 0, false, {\n                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"h-1/3 text-white w-3/4 bg-blue-500\",\n                            children: \"Follow\"\n                        }, void 0, false, {\n                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"hT6C72rcbfRUedrDq+TPaFfRI/M=\");\n_c = Page;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9zdHMvdXNlci9bdXNlcklkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzZEO0FBRVo7QUFFakQsTUFBTUssT0FBTztRQUFDLEVBQUVDLE1BQU0sRUFBMkM7O0lBQy9ELE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdMLDBDQUFHQSxDQUFDSTtJQUN2QixNQUFNLENBQUNFLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBO0lBQ2hDLE1BQU1NLGNBQWM7UUFDbEIsTUFBTUMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBQ25DLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsb0RBQTJELE9BQVBSLFNBQ3BEO1lBQ0VTLFNBQVM7Z0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTk47Z0JBQ3pCLGdCQUFnQjtZQUNsQjtRQUNGO1FBRUYsTUFBTU8sV0FBVyxNQUFNSixTQUFTSyxJQUFJO1FBQ3BDQyxRQUFRQyxHQUFHLENBQUNIO1FBQ1pULFFBQVFTO0lBQ1Y7SUFDQWYsZ0RBQVNBOzBCQUFDO1lBQ1JPO1FBQ0Y7eUJBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1pmLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTWdCLE1BQU0sS0FBSSxxQkFDZiw4REFBQ3hCLHlEQUFNQTt3QkFBQ3VCLFdBQVU7a0NBQ2hCLDRFQUFDdEIsOERBQVdBOzRCQUFDd0IsS0FBSTs7Ozs7Ozs7OztrREFHbkIsOERBQUN6Qix5REFBTUE7d0JBQUN1QixXQUFVO2tDQUNoQiw0RUFBQ3RCLDhEQUFXQTs0QkFBQ3dCLEtBQUtqQixLQUFLZ0IsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJbkMsOERBQUNGO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1pmLGlCQUFBQSwyQkFBQUEsS0FBTWtCLFFBQVE7Ozs7OztzQ0FFakIsOERBQUNDOzRCQUFPSixXQUFVO3NDQUFxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakU7R0E1Q01sQjtLQUFBQTtBQTZDTixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzLzI0SFAwMDE2L0Rlc2t0b3AvSUcvd2ViL3NyYy9hcHAvcG9zdHMvdXNlci9bdXNlcklkXS9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IEF2YXRhciwgQXZhdGFySW1hZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2F2YXRhclwiO1xuaW1wb3J0IHsgdXNlclR5cGUgfSBmcm9tIFwiQC9jdXN0b20tY29tcG9uZW50cy9pc0xpa2VkXCI7XG5pbXBvcnQgeyB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUGFnZSA9ICh7IHBhcmFtcyB9OiB7IHBhcmFtczogUHJvbWlzZTx7IHVzZXJJZDogc3RyaW5nIH0+IH0pID0+IHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IHVzZShwYXJhbXMpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTx1c2VyVHlwZT4oKTtcbiAgY29uc3QgZ2V0VXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpO1xuICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9pbnN0YWdyYW0tYmFja2VuZC1lM2VxLm9ucmVuZGVyLmNvbS91c2VyLyR7dXNlcklkfWAsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQganNvbkRhdGEuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICBzZXRVc2VyKHJlc3BvbnNlKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRVc2VyRGF0YSgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBiZy1ibGFja1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB0LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyAgaC1bMTAwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAge3VzZXI/LnByb0ltZyA9PSBudWxsID8gKFxuICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9XCJ3LTMvNCBoLTMvNFwiPlxuICAgICAgICAgICAgICA8QXZhdGFySW1hZ2Ugc3JjPVwiaHR0cHM6Ly9zdGF0aWMudmVjdGVlenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvdGh1bWJuYWlscy8wMDkvMjkyLzI0NC9zbWFsbC9kZWZhdWx0LWF2YXRhci1pY29uLW9mLXNvY2lhbC1tZWRpYS11c2VyLXZlY3Rvci5qcGdcIiAvPlxuICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwidy1bNzdweF0gaC1bNzdweF1cIj5cbiAgICAgICAgICAgICAgPEF2YXRhckltYWdlIHNyYz17dXNlci5wcm9JbWd9IC8+XG4gICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvMyBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEvMyBmb250LWV4dHJhYm9sZCB0ZXh0LXhsIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAge3VzZXI/LnVzZXJuYW1lfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaC0xLzMgdGV4dC13aGl0ZSB3LTMvNCBiZy1ibHVlLTUwMFwiPkZvbGxvdzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsiQXZhdGFyIiwiQXZhdGFySW1hZ2UiLCJ1c2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBhZ2UiLCJwYXJhbXMiLCJ1c2VySWQiLCJ1c2VyIiwic2V0VXNlciIsImdldFVzZXJEYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwianNvbkRhdGEiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInByb0ltZyIsInNyYyIsInVzZXJuYW1lIiwiYnV0dG9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/posts/user/[userId]/page.tsx\n"));

/***/ })

});