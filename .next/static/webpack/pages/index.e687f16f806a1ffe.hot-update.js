"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/game_new/ui/game-cell.jsx":
/*!**********************************************!*\
  !*** ./components/game_new/ui/game-cell.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameCells: function() { return /* binding */ GameCells; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-symbol */ \"./components/game_new/ui/game-symbol.jsx\");\n\n\n\nconst GameCells = memo(_c = function GameCells(param) {\n    let { symbol, onClick, isWinner, disabled } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        disabled: disabled,\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__.clsx)(\"border border-slate-200 -ml-px -mt-px flex items-center justify-center\", isWinner && \"bg-orange-600/10\"),\n        onClick: onClick,\n        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_2__.GameSymbol, {\n            symbol: symbol,\n            className: \"w-5 h-5\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\ui\\\\game-cell.jsx\",\n            lineNumber: 17,\n            columnNumber: 20\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\ui\\\\game-cell.jsx\",\n        lineNumber: 9,\n        columnNumber: 7\n    }, this);\n});\n_c1 = GameCells;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameCells$memo\");\n$RefreshReg$(_c1, \"GameCells\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWVfbmV3L3VpL2dhbWUtY2VsbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRCO0FBQ2U7QUFLcEMsTUFBTUUsWUFBWUMsVUFBSyxTQUFTRCxVQUFVLEtBQXVDO1FBQXZDLEVBQUVFLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUF2QztJQUM3QyxxQkFDRSw4REFBQ0M7UUFDREQsVUFBVUE7UUFDUkUsV0FBV1QsMENBQUlBLENBQ2IsMEVBQ0FNLFlBQVk7UUFFZEQsU0FBU0E7a0JBRVJELHdCQUFVLDhEQUFDSCxvREFBVUE7WUFBQ0csUUFBUUE7WUFBUUssV0FBVTs7Ozs7Ozs7Ozs7QUFHdkQsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWVfbmV3L3VpL2dhbWUtY2VsbC5qc3g/YjgwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gXCIuL2dhbWUtc3ltYm9sXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgR2FtZUNlbGxzID0gbWVtbyhmdW5jdGlvbiBHYW1lQ2VsbHMoeyBzeW1ib2wsIG9uQ2xpY2ssIGlzV2lubmVyLCBkaXNhYmxlZCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICBcImJvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIixcclxuICAgICAgICAgIGlzV2lubmVyICYmIFwiYmctb3JhbmdlLTYwMC8xMFwiXHJcbiAgICAgICAgKX1cclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICA+XHJcbiAgICAgICAge3N5bWJvbCAmJiA8R2FtZVN5bWJvbCBzeW1ib2w9e3N5bWJvbH0gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbiAgfSkgICJdLCJuYW1lcyI6WyJjbHN4IiwiR2FtZVN5bWJvbCIsIkdhbWVDZWxscyIsIm1lbW8iLCJzeW1ib2wiLCJvbkNsaWNrIiwiaXNXaW5uZXIiLCJkaXNhYmxlZCIsImJ1dHRvbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game_new/ui/game-cell.jsx\n"));

/***/ })

});