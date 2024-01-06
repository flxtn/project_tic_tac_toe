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

/***/ "./components/game_new/game.jsx":
/*!**************************************!*\
  !*** ./components/game_new/game.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./components/game_new/constants.js\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game_new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game_new/ui/game-cell.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game_new/ui/game-info.jsx\");\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game_new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game_new/ui/game-move-info.jsx\");\n/* harmony import */ var _ui_game_over_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-over-modal */ \"./components/game_new/ui/game-over-modal.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game_new/ui/game-title.jsx\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game_new/ui/player-info.jsx\");\n/* harmony import */ var _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./model/game-state-reducer */ \"./components/game_new/model/game-state-reducer.jsx\");\n/* harmony import */ var _model_get_next_move__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/get-next-move */ \"./components/game_new/model/get-next-move.js\");\n/* harmony import */ var _model_compute_winner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./model/compute-winner */ \"./components/game_new/model/compute-winner.js\");\n/* harmony import */ var _model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model/compute-winner-symbol */ \"./components/game_new/model/compute-winner-symbol.jsx\");\n/* harmony import */ var _model_compute_player_timer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./model/compute-player-timer */ \"./components/game_new/model/compute-player-timer.js\");\n/* harmony import */ var _lib_timers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/timers */ \"./components/lib/timers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Game() {\n    _s();\n    const PLAYERS_COUNT = 3;\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_model_game_state_reducer__WEBPACK_IMPORTED_MODULE_11__.gameStateReducer, {\n        playersCount: PLAYERS_COUNT,\n        defaultTimer: 5000,\n        currentMoveStart: Date.now()\n    }, _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_11__.initGameState);\n    (0,_lib_timers__WEBPACK_IMPORTED_MODULE_16__.useInterval)(1000, !!gameState.currentMoveStart, (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        dispatch({\n            type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_11__.GAME_STATE_ACTIONS.TICK,\n            now: Date.now()\n        });\n    }, []));\n    const winnerSequence = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_model_compute_winner__WEBPACK_IMPORTED_MODULE_13__.computeWinner)(gameState), [\n        gameState\n    ]);\n    const nextMove = (0,_model_get_next_move__WEBPACK_IMPORTED_MODULE_12__.getNextMove)(gameState);\n    const winnersymbol = (0,_model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_14__.computeWinnerSymbol)(gameState, {\n        winnerSequence,\n        nextMove\n    });\n    const winnerPlayer = _constants__WEBPACK_IMPORTED_MODULE_2__.PLAYERS.find((player)=>player.symbol === winnersymbol);\n    const handleCellClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((index)=>{\n        dispatch({\n            type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_11__.GAME_STATE_ACTIONS.CELL_CLICK,\n            index,\n            now: Date.now()\n        });\n    }, []);\n    const { cells, currentMove } = gameState;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_6__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_3__.BackLink, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 19\n                }, void 0),\n                gametitle: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_9__.GameTitle, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 20\n                }, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_5__.GameInfo, {\n                    isRatingGame: true,\n                    playersCount: PLAYERS_COUNT,\n                    timeMod: \"1 мин на ход.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_2__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>{\n                    const { timer, timerStartAt } = (0,_model_compute_player_timer__WEBPACK_IMPORTED_MODULE_15__.computePlayerTimer)(gameState, player.symbol);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_10__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        isRight: index % 2 === 1,\n                        symbol: player.symbol,\n                        timer: timer,\n                        timerStartAt: timerStartAt\n                    }, player.id, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, void 0);\n                }),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n                    currentMove: currentMove,\n                    nextMove: nextMove\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                    lineNumber: 96,\n                    columnNumber: 11\n                }, void 0),\n                gameCells: cells.map((cell, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_4__.GameCells, {\n                        index: index,\n                        disabled: !!winnersymbol,\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        onClick: handleCellClick(),\n                        symbol: cell\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_modal__WEBPACK_IMPORTED_MODULE_8__.GameOverModal, {\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name,\n                players: _constants__WEBPACK_IMPORTED_MODULE_2__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_10__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        isRight: index % 2 === 1,\n                        timer: gameState.timers[player.symbol],\n                        symbol: player.symbol\n                    }, player.id, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"9XFo8kv8lkFyTCPqAnGOBlZKYrw=\", false, function() {\n    return [\n        _lib_timers__WEBPACK_IMPORTED_MODULE_16__.useInterval\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzhDLEtBQUssQ0FBQyxHQUFHNUIsZUFBZTZCLEdBQUcsQ0FBQyxDQUFDZCxRQUFRRyxzQkFDcEQsOERBQUM1Qix3REFBVUE7d0JBRVQwQyxRQUFRakIsT0FBT2lCLE1BQU07d0JBQ3JCQyxNQUFNbEIsT0FBT2tCLElBQUk7d0JBQ2pCQyxRQUFRbkIsT0FBT21CLE1BQU07d0JBQ3JCQyxTQUFTakIsUUFBUSxNQUFNO3dCQUN2QlksT0FBTzdCLFVBQVU2QyxNQUFNLENBQUMvQixPQUFPQyxNQUFNLENBQUM7d0JBQ3RDQSxRQUFRRCxPQUFPQyxNQUFNO3VCQU5oQkQsT0FBT3FCLEVBQUU7Ozs7Ozs7Ozs7OztBQVkxQjtHQXZHZ0JyQzs7UUFhZEQscURBQVdBOzs7S0FiR0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lX25ldy9nYW1lLmpzeD9iM2UwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBMQVlFUlMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgQmFja0xpbmsgfSBmcm9tIFwiLi91aS9iYWNrLWxpbmtcIjtcclxuaW1wb3J0IHsgR2FtZUNlbGxzIH0gZnJvbSBcIi4vdWkvZ2FtZS1jZWxsXCI7XHJcbmltcG9ydCB7IEdhbWVJbmZvIH0gZnJvbSBcIi4vdWkvZ2FtZS1pbmZvXCI7XHJcbmltcG9ydCB7IEdhbWVMYXlvdXQgfSBmcm9tIFwiLi91aS9nYW1lLWxheW91dFwiO1xyXG5pbXBvcnQgeyBHYW1lTW92ZUluZm8gfSBmcm9tIFwiLi91aS9nYW1lLW1vdmUtaW5mb1wiO1xyXG5pbXBvcnQgeyBHYW1lT3Zlck1vZGFsIH0gZnJvbSBcIi4vdWkvZ2FtZS1vdmVyLW1vZGFsXCI7XHJcbmltcG9ydCB7IEdhbWVUaXRsZSB9IGZyb20gXCIuL3VpL2dhbWUtdGl0bGVcIjtcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3VpL3BsYXllci1pbmZvXCI7XHJcbmltcG9ydCB7XHJcbiAgR0FNRV9TVEFURV9BQ1RJT05TLFxyXG4gIGdhbWVTdGF0ZVJlZHVjZXIsXHJcbiAgaW5pdEdhbWVTdGF0ZSxcclxufSBmcm9tIFwiLi9tb2RlbC9nYW1lLXN0YXRlLXJlZHVjZXJcIjtcclxuaW1wb3J0IHsgZ2V0TmV4dE1vdmUgfSBmcm9tIFwiLi9tb2RlbC9nZXQtbmV4dC1tb3ZlXCI7XHJcbmltcG9ydCB7IGNvbXB1dGVXaW5uZXIgfSBmcm9tIFwiLi9tb2RlbC9jb21wdXRlLXdpbm5lclwiO1xyXG5pbXBvcnQgeyBjb21wdXRlV2lubmVyU3ltYm9sIH0gZnJvbSBcIi4vbW9kZWwvY29tcHV0ZS13aW5uZXItc3ltYm9sXCI7XHJcbmltcG9ydCB7IGNvbXB1dGVQbGF5ZXJUaW1lciB9IGZyb20gXCIuL21vZGVsL2NvbXB1dGUtcGxheWVyLXRpbWVyXCI7XHJcbmltcG9ydCB7IHVzZUludGVydmFsIH0gZnJvbSBcIi4uL2xpYi90aW1lcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lKCkge1xyXG4gIGNvbnN0IFBMQVlFUlNfQ09VTlQgPSAzO1xyXG5cclxuICBjb25zdCBbZ2FtZVN0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxyXG4gICAgZ2FtZVN0YXRlUmVkdWNlcixcclxuICAgIHtcclxuICAgICAgcGxheWVyc0NvdW50OiBQTEFZRVJTX0NPVU5ULFxyXG4gICAgICBkZWZhdWx0VGltZXI6IDUwMDAsXHJcbiAgICAgIGN1cnJlbnRNb3ZlU3RhcnQ6IERhdGUubm93KCksXHJcbiAgICB9LFxyXG4gICAgaW5pdEdhbWVTdGF0ZVxyXG4gICk7XHJcblxyXG4gIHVzZUludGVydmFsKFxyXG4gICAgMTAwMCxcclxuICAgICEhZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlU3RhcnQsXHJcbiAgICB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBHQU1FX1NUQVRFX0FDVElPTlMuVElDSyxcclxuICAgICAgICBub3c6IERhdGUubm93KCksXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgW10pXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgd2lubmVyU2VxdWVuY2UgPSB1c2VNZW1vKCgpID0+IGNvbXB1dGVXaW5uZXIoZ2FtZVN0YXRlKSwgW2dhbWVTdGF0ZV0pO1xyXG4gIGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoZ2FtZVN0YXRlKTtcclxuICBjb25zdCB3aW5uZXJzeW1ib2wgPSBjb21wdXRlV2lubmVyU3ltYm9sKGdhbWVTdGF0ZSwge1xyXG4gICAgd2lubmVyU2VxdWVuY2UsXHJcbiAgICBuZXh0TW92ZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgd2lubmVyUGxheWVyID0gUExBWUVSUy5maW5kKChwbGF5ZXIpID0+IHBsYXllci5zeW1ib2wgPT09IHdpbm5lcnN5bWJvbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBHQU1FX1NUQVRFX0FDVElPTlMuQ0VMTF9DTElDSyxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIG5vdzogRGF0ZS5ub3coKSxcclxuICAgIH0pO1xyXG4gIH0sW10pO1xyXG5cclxuICBjb25zdCB7IGNlbGxzLCBjdXJyZW50TW92ZSB9ID0gZ2FtZVN0YXRlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdhbWVMYXlvdXRcclxuICAgICAgICBiYWNrTGluaz17PEJhY2tMaW5rIC8+fVxyXG4gICAgICAgIGdhbWV0aXRsZT17PEdhbWVUaXRsZSAvPn1cclxuICAgICAgICBnYW1lSW5mbz17XHJcbiAgICAgICAgICA8R2FtZUluZm9cclxuICAgICAgICAgICAgaXNSYXRpbmdHYW1lXHJcbiAgICAgICAgICAgIHBsYXllcnNDb3VudD17UExBWUVSU19DT1VOVH1cclxuICAgICAgICAgICAgdGltZU1vZD17XCIxINC80LjQvSDQvdCwINGF0L7QtC5cIn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBsYXllcnNMaXN0PXtQTEFZRVJTLnNsaWNlKDAsIFBMQVlFUlNfQ09VTlQpLm1hcCgocGxheWVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyB0aW1lciwgdGltZXJTdGFydEF0IH0gPSBjb21wdXRlUGxheWVyVGltZXIoXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZSxcclxuICAgICAgICAgICAgcGxheWVyLnN5bWJvbFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQbGF5ZXJJbmZvXHJcbiAgICAgICAgICAgICAga2V5PXtwbGF5ZXIuaWR9XHJcbiAgICAgICAgICAgICAgYXZhdGFyPXtwbGF5ZXIuYXZhdGFyfVxyXG4gICAgICAgICAgICAgIG5hbWU9e3BsYXllci5uYW1lfVxyXG4gICAgICAgICAgICAgIHJhdGluZz17cGxheWVyLnJhdGluZ31cclxuICAgICAgICAgICAgICBpc1JpZ2h0PXtpbmRleCAlIDIgPT09IDF9XHJcbiAgICAgICAgICAgICAgc3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxyXG4gICAgICAgICAgICAgIHRpbWVyPXt0aW1lcn1cclxuICAgICAgICAgICAgICB0aW1lclN0YXJ0QXQ9e3RpbWVyU3RhcnRBdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgZ2FtZU1vdmVJbmZvPXtcclxuICAgICAgICAgIDxHYW1lTW92ZUluZm8gY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfSBuZXh0TW92ZT17bmV4dE1vdmV9IC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWVDZWxscz17Y2VsbHMubWFwKChjZWxsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPEdhbWVDZWxsc1xyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshIXdpbm5lcnN5bWJvbH1cclxuICAgICAgICAgICAgaXNXaW5uZXI9e3dpbm5lclNlcXVlbmNlPy5pbmNsdWRlcyhpbmRleCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNlbGxDbGljaygpfVxyXG4gICAgICAgICAgICBzeW1ib2w9e2NlbGx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAvPlxyXG4gICAgICA8R2FtZU92ZXJNb2RhbFxyXG4gICAgICAgIHdpbm5lck5hbWU9e3dpbm5lclBsYXllcj8ubmFtZX1cclxuICAgICAgICBwbGF5ZXJzPXtQTEFZRVJTLnNsaWNlKDAsIFBMQVlFUlNfQ09VTlQpLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFBsYXllckluZm9cclxuICAgICAgICAgICAga2V5PXtwbGF5ZXIuaWR9XHJcbiAgICAgICAgICAgIGF2YXRhcj17cGxheWVyLmF2YXRhcn1cclxuICAgICAgICAgICAgbmFtZT17cGxheWVyLm5hbWV9XHJcbiAgICAgICAgICAgIHJhdGluZz17cGxheWVyLnJhdGluZ31cclxuICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxyXG4gICAgICAgICAgICB0aW1lcj17Z2FtZVN0YXRlLnRpbWVyc1twbGF5ZXIuc3ltYm9sXX1cclxuICAgICAgICAgICAgc3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPjwvR2FtZU92ZXJNb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVJlZHVjZXIiLCJQTEFZRVJTIiwiQmFja0xpbmsiLCJHYW1lQ2VsbHMiLCJHYW1lSW5mbyIsIkdhbWVMYXlvdXQiLCJHYW1lTW92ZUluZm8iLCJHYW1lT3Zlck1vZGFsIiwiR2FtZVRpdGxlIiwiUGxheWVySW5mbyIsIkdBTUVfU1RBVEVfQUNUSU9OUyIsImdhbWVTdGF0ZVJlZHVjZXIiLCJpbml0R2FtZVN0YXRlIiwiZ2V0TmV4dE1vdmUiLCJjb21wdXRlV2lubmVyIiwiY29tcHV0ZVdpbm5lclN5bWJvbCIsImNvbXB1dGVQbGF5ZXJUaW1lciIsInVzZUludGVydmFsIiwiR2FtZSIsIlBMQVlFUlNfQ09VTlQiLCJnYW1lU3RhdGUiLCJkaXNwYXRjaCIsInBsYXllcnNDb3VudCIsImRlZmF1bHRUaW1lciIsImN1cnJlbnRNb3ZlU3RhcnQiLCJEYXRlIiwibm93IiwidHlwZSIsIlRJQ0siLCJ3aW5uZXJTZXF1ZW5jZSIsIm5leHRNb3ZlIiwid2lubmVyc3ltYm9sIiwid2lubmVyUGxheWVyIiwiZmluZCIsInBsYXllciIsInN5bWJvbCIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwiQ0VMTF9DTElDSyIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJiYWNrTGluayIsImdhbWV0aXRsZSIsImdhbWVJbmZvIiwiaXNSYXRpbmdHYW1lIiwidGltZU1vZCIsInBsYXllcnNMaXN0Iiwic2xpY2UiLCJtYXAiLCJ0aW1lciIsInRpbWVyU3RhcnRBdCIsImF2YXRhciIsIm5hbWUiLCJyYXRpbmciLCJpc1JpZ2h0IiwiaWQiLCJnYW1lTW92ZUluZm8iLCJnYW1lQ2VsbHMiLCJjZWxsIiwiZGlzYWJsZWQiLCJpc1dpbm5lciIsImluY2x1ZGVzIiwib25DbGljayIsIndpbm5lck5hbWUiLCJwbGF5ZXJzIiwidGltZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game_new/game.jsx\n"));

/***/ })

});