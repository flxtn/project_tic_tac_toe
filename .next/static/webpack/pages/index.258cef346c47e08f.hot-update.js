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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./components/game_new/constants.js\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game_new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game_new/ui/game-cell.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game_new/ui/game-info.jsx\");\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game_new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game_new/ui/game-move-info.jsx\");\n/* harmony import */ var _ui_game_over_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-over-modal */ \"./components/game_new/ui/game-over-modal.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game_new/ui/game-title.jsx\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game_new/ui/player-info.jsx\");\n/* harmony import */ var _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./model/game-state-reducer */ \"./components/game_new/model/game-state-reducer.jsx\");\n/* harmony import */ var _model_get_next_move__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/get-next-move */ \"./components/game_new/model/get-next-move.js\");\n/* harmony import */ var _model_compute_winner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./model/compute-winner */ \"./components/game_new/model/compute-winner.js\");\n/* harmony import */ var _model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model/compute-winner-symbol */ \"./components/game_new/model/compute-winner-symbol.jsx\");\n/* harmony import */ var _model_compute_player_timer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./model/compute-player-timer */ \"./components/game_new/model/compute-player-timer.js\");\n/* harmony import */ var _lib_timers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/timers */ \"./components/lib/timers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Game() {\n    _s();\n    const PLAYERS_COUNT = 3;\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_model_game_state_reducer__WEBPACK_IMPORTED_MODULE_11__.gameStateReducer, {\n        playersCount: PLAYERS_COUNT,\n        defaultTimer: 5000,\n        currentMoveStart: Date.now()\n    }, _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_11__.initGameState);\n    (0,_lib_timers__WEBPACK_IMPORTED_MODULE_16__.useInterval)(1000, !!gameState.currentMoveStart, (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        dispatch({\n            type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_11__.GAME_STATE_ACTIONS.TICK,\n            now: Date.now()\n        });\n    }, []));\n    const winnerSequence = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_model_compute_winner__WEBPACK_IMPORTED_MODULE_13__.computeWinner)(gameState), [\n        gameState\n    ]);\n    const nextMove = (0,_model_get_next_move__WEBPACK_IMPORTED_MODULE_12__.getNextMove)(gameState);\n    const winnersymbol = (0,_model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_14__.computeWinnerSymbol)(gameState, {\n        winnerSequence,\n        nextMove\n    });\n    const winnerPlayer = _constants__WEBPACK_IMPORTED_MODULE_2__.PLAYERS.find((player)=>player.symbol === winnersymbol);\n    const handleCellClick = ()=>{\n        dispatch({\n            type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_11__.GAME_STATE_ACTIONS.CELL_CLICK,\n            index,\n            now: Date.now()\n        });\n    };\n    const { cells, currentMove } = gameState;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_6__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_3__.BackLink, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 19\n                }, void 0),\n                gametitle: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_9__.GameTitle, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 20\n                }, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_5__.GameInfo, {\n                    isRatingGame: true,\n                    playersCount: PLAYERS_COUNT,\n                    timeMod: \"1 мин на ход.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_2__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index1)=>{\n                    const { timer, timerStartAt } = (0,_model_compute_player_timer__WEBPACK_IMPORTED_MODULE_15__.computePlayerTimer)(gameState, player.symbol);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_10__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        isRight: index1 % 2 === 1,\n                        symbol: player.symbol,\n                        timer: timer,\n                        timerStartAt: timerStartAt\n                    }, player.id, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, void 0);\n                }),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n                    currentMove: currentMove,\n                    nextMove: nextMove\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                    lineNumber: 96,\n                    columnNumber: 11\n                }, void 0),\n                gameCells: cells.map((cell, index1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_4__.GameCells, {\n                        disabled: !!winnersymbol,\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index1),\n                        onClick: ()=>{\n                            dispatch({\n                                type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_11__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                index: index1,\n                                now: Date.now()\n                            });\n                        },\n                        symbol: cell\n                    }, index1, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_modal__WEBPACK_IMPORTED_MODULE_8__.GameOverModal, {\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name,\n                players: _constants__WEBPACK_IMPORTED_MODULE_2__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_10__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        isRight: index1 % 2 === 1,\n                        timer: gameState.timers[player.symbol],\n                        symbol: player.symbol\n                    }, player.id, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\project_krest_nol\\\\components\\\\game_new\\\\game.jsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"rpHRFhiRq5m1Pzd1/5MI4kkD0tQ=\", false, function() {\n    return [\n        _lib_timers__WEBPACK_IMPORTED_MODULE_16__.useInterval\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxtQ0FBQUEsYUFBY29CLElBQUk7Z0JBQzlCWSxTQUFTL0QsK0NBQU9BLENBQUM4QyxLQUFLLENBQUMsR0FBRzVCLGVBQWU2QixHQUFHLENBQUMsQ0FBQ2QsUUFBUUksdUJBQ3BELDhEQUFDN0Isd0RBQVVBO3dCQUVUMEMsUUFBUWpCLE9BQU9pQixNQUFNO3dCQUNyQkMsTUFBTWxCLE9BQU9rQixJQUFJO3dCQUNqQkMsUUFBUW5CLE9BQU9tQixNQUFNO3dCQUNyQkMsU0FBU2hCLFNBQVEsTUFBTTt3QkFDdkJXLE9BQU83QixVQUFVNkMsTUFBTSxDQUFDL0IsT0FBT0MsTUFBTSxDQUFDO3dCQUN0Q0EsUUFBUUQsT0FBT0MsTUFBTTt1QkFOaEJELE9BQU9xQixFQUFFOzs7Ozs7Ozs7Ozs7QUFZMUI7R0E1R2dCckM7O1FBYWRELHFEQUFXQTs7O0tBYkdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZV9uZXcvZ2FtZS5qc3g/YjNlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQTEFZRVJTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEJhY2tMaW5rIH0gZnJvbSBcIi4vdWkvYmFjay1saW5rXCI7XHJcbmltcG9ydCB7IEdhbWVDZWxscyB9IGZyb20gXCIuL3VpL2dhbWUtY2VsbFwiO1xyXG5pbXBvcnQgeyBHYW1lSW5mbyB9IGZyb20gXCIuL3VpL2dhbWUtaW5mb1wiO1xyXG5pbXBvcnQgeyBHYW1lTGF5b3V0IH0gZnJvbSBcIi4vdWkvZ2FtZS1sYXlvdXRcIjtcclxuaW1wb3J0IHsgR2FtZU1vdmVJbmZvIH0gZnJvbSBcIi4vdWkvZ2FtZS1tb3ZlLWluZm9cIjtcclxuaW1wb3J0IHsgR2FtZU92ZXJNb2RhbCB9IGZyb20gXCIuL3VpL2dhbWUtb3Zlci1tb2RhbFwiO1xyXG5pbXBvcnQgeyBHYW1lVGl0bGUgfSBmcm9tIFwiLi91aS9nYW1lLXRpdGxlXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi91aS9wbGF5ZXItaW5mb1wiO1xyXG5pbXBvcnQge1xyXG4gIEdBTUVfU1RBVEVfQUNUSU9OUyxcclxuICBnYW1lU3RhdGVSZWR1Y2VyLFxyXG4gIGluaXRHYW1lU3RhdGUsXHJcbn0gZnJvbSBcIi4vbW9kZWwvZ2FtZS1zdGF0ZS1yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IGdldE5leHRNb3ZlIH0gZnJvbSBcIi4vbW9kZWwvZ2V0LW5leHQtbW92ZVwiO1xyXG5pbXBvcnQgeyBjb21wdXRlV2lubmVyIH0gZnJvbSBcIi4vbW9kZWwvY29tcHV0ZS13aW5uZXJcIjtcclxuaW1wb3J0IHsgY29tcHV0ZVdpbm5lclN5bWJvbCB9IGZyb20gXCIuL21vZGVsL2NvbXB1dGUtd2lubmVyLXN5bWJvbFwiO1xyXG5pbXBvcnQgeyBjb21wdXRlUGxheWVyVGltZXIgfSBmcm9tIFwiLi9tb2RlbC9jb21wdXRlLXBsYXllci10aW1lclwiO1xyXG5pbXBvcnQgeyB1c2VJbnRlcnZhbCB9IGZyb20gXCIuLi9saWIvdGltZXJzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2FtZSgpIHtcclxuICBjb25zdCBQTEFZRVJTX0NPVU5UID0gMztcclxuXHJcbiAgY29uc3QgW2dhbWVTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcclxuICAgIGdhbWVTdGF0ZVJlZHVjZXIsXHJcbiAgICB7XHJcbiAgICAgIHBsYXllcnNDb3VudDogUExBWUVSU19DT1VOVCxcclxuICAgICAgZGVmYXVsdFRpbWVyOiA1MDAwLFxyXG4gICAgICBjdXJyZW50TW92ZVN0YXJ0OiBEYXRlLm5vdygpLFxyXG4gICAgfSxcclxuICAgIGluaXRHYW1lU3RhdGVcclxuICApO1xyXG5cclxuICB1c2VJbnRlcnZhbChcclxuICAgIDEwMDAsXHJcbiAgICAhIWdhbWVTdGF0ZS5jdXJyZW50TW92ZVN0YXJ0LFxyXG4gICAgdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogR0FNRV9TVEFURV9BQ1RJT05TLlRJQ0ssXHJcbiAgICAgICAgbm93OiBEYXRlLm5vdygpLFxyXG4gICAgICB9KTtcclxuICAgIH0sIFtdKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHdpbm5lclNlcXVlbmNlID0gdXNlTWVtbygoKSA9PiBjb21wdXRlV2lubmVyKGdhbWVTdGF0ZSksIFtnYW1lU3RhdGVdKTtcclxuICBjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGdhbWVTdGF0ZSk7XHJcbiAgY29uc3Qgd2lubmVyc3ltYm9sID0gY29tcHV0ZVdpbm5lclN5bWJvbChnYW1lU3RhdGUsIHtcclxuICAgIHdpbm5lclNlcXVlbmNlLFxyXG4gICAgbmV4dE1vdmUsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHdpbm5lclBsYXllciA9IFBMQVlFUlMuZmluZCgocGxheWVyKSA9PiBwbGF5ZXIuc3ltYm9sID09PSB3aW5uZXJzeW1ib2wpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEdBTUVfU1RBVEVfQUNUSU9OUy5DRUxMX0NMSUNLLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgbm93OiBEYXRlLm5vdygpLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBjZWxscywgY3VycmVudE1vdmUgfSA9IGdhbWVTdGF0ZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHYW1lTGF5b3V0XHJcbiAgICAgICAgYmFja0xpbms9ezxCYWNrTGluayAvPn1cclxuICAgICAgICBnYW1ldGl0bGU9ezxHYW1lVGl0bGUgLz59XHJcbiAgICAgICAgZ2FtZUluZm89e1xyXG4gICAgICAgICAgPEdhbWVJbmZvXHJcbiAgICAgICAgICAgIGlzUmF0aW5nR2FtZVxyXG4gICAgICAgICAgICBwbGF5ZXJzQ291bnQ9e1BMQVlFUlNfQ09VTlR9XHJcbiAgICAgICAgICAgIHRpbWVNb2Q9e1wiMSDQvNC40L0g0L3QsCDRhdC+0LQuXCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICBwbGF5ZXJzTGlzdD17UExBWUVSUy5zbGljZSgwLCBQTEFZRVJTX0NPVU5UKS5tYXAoKHBsYXllciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgdGltZXIsIHRpbWVyU3RhcnRBdCB9ID0gY29tcHV0ZVBsYXllclRpbWVyKFxyXG4gICAgICAgICAgICBnYW1lU3RhdGUsXHJcbiAgICAgICAgICAgIHBsYXllci5zeW1ib2xcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGxheWVySW5mb1xyXG4gICAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxyXG4gICAgICAgICAgICAgIGF2YXRhcj17cGxheWVyLmF2YXRhcn1cclxuICAgICAgICAgICAgICBuYW1lPXtwbGF5ZXIubmFtZX1cclxuICAgICAgICAgICAgICByYXRpbmc9e3BsYXllci5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxyXG4gICAgICAgICAgICAgIHN5bWJvbD17cGxheWVyLnN5bWJvbH1cclxuICAgICAgICAgICAgICB0aW1lcj17dGltZXJ9XHJcbiAgICAgICAgICAgICAgdGltZXJTdGFydEF0PXt0aW1lclN0YXJ0QXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIGdhbWVNb3ZlSW5mbz17XHJcbiAgICAgICAgICA8R2FtZU1vdmVJbmZvIGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX0gbmV4dE1vdmU9e25leHRNb3ZlfSAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICBnYW1lQ2VsbHM9e2NlbGxzLm1hcCgoY2VsbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxHYW1lQ2VsbHNcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyEhd2lubmVyc3ltYm9sfVxyXG4gICAgICAgICAgICBpc1dpbm5lcj17d2lubmVyU2VxdWVuY2U/LmluY2x1ZGVzKGluZGV4KX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEdBTUVfU1RBVEVfQUNUSU9OUy5DRUxMX0NMSUNLLFxyXG4gICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBub3c6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN5bWJvbD17Y2VsbH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxHYW1lT3Zlck1vZGFsXHJcbiAgICAgICAgd2lubmVyTmFtZT17d2lubmVyUGxheWVyPy5uYW1lfVxyXG4gICAgICAgIHBsYXllcnM9e1BMQVlFUlMuc2xpY2UoMCwgUExBWUVSU19DT1VOVCkubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8UGxheWVySW5mb1xyXG4gICAgICAgICAgICBrZXk9e3BsYXllci5pZH1cclxuICAgICAgICAgICAgYXZhdGFyPXtwbGF5ZXIuYXZhdGFyfVxyXG4gICAgICAgICAgICBuYW1lPXtwbGF5ZXIubmFtZX1cclxuICAgICAgICAgICAgcmF0aW5nPXtwbGF5ZXIucmF0aW5nfVxyXG4gICAgICAgICAgICBpc1JpZ2h0PXtpbmRleCAlIDIgPT09IDF9XHJcbiAgICAgICAgICAgIHRpbWVyPXtnYW1lU3RhdGUudGltZXJzW3BsYXllci5zeW1ib2xdfVxyXG4gICAgICAgICAgICBzeW1ib2w9e3BsYXllci5zeW1ib2x9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA+PC9HYW1lT3Zlck1vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlUmVkdWNlciIsIlBMQVlFUlMiLCJCYWNrTGluayIsIkdhbWVDZWxscyIsIkdhbWVJbmZvIiwiR2FtZUxheW91dCIsIkdhbWVNb3ZlSW5mbyIsIkdhbWVPdmVyTW9kYWwiLCJHYW1lVGl0bGUiLCJQbGF5ZXJJbmZvIiwiR0FNRV9TVEFURV9BQ1RJT05TIiwiZ2FtZVN0YXRlUmVkdWNlciIsImluaXRHYW1lU3RhdGUiLCJnZXROZXh0TW92ZSIsImNvbXB1dGVXaW5uZXIiLCJjb21wdXRlV2lubmVyU3ltYm9sIiwiY29tcHV0ZVBsYXllclRpbWVyIiwidXNlSW50ZXJ2YWwiLCJHYW1lIiwiUExBWUVSU19DT1VOVCIsImdhbWVTdGF0ZSIsImRpc3BhdGNoIiwicGxheWVyc0NvdW50IiwiZGVmYXVsdFRpbWVyIiwiY3VycmVudE1vdmVTdGFydCIsIkRhdGUiLCJub3ciLCJ0eXBlIiwiVElDSyIsIndpbm5lclNlcXVlbmNlIiwibmV4dE1vdmUiLCJ3aW5uZXJzeW1ib2wiLCJ3aW5uZXJQbGF5ZXIiLCJmaW5kIiwicGxheWVyIiwic3ltYm9sIiwiaGFuZGxlQ2VsbENsaWNrIiwiQ0VMTF9DTElDSyIsImluZGV4IiwiY2VsbHMiLCJjdXJyZW50TW92ZSIsImJhY2tMaW5rIiwiZ2FtZXRpdGxlIiwiZ2FtZUluZm8iLCJpc1JhdGluZ0dhbWUiLCJ0aW1lTW9kIiwicGxheWVyc0xpc3QiLCJzbGljZSIsIm1hcCIsInRpbWVyIiwidGltZXJTdGFydEF0IiwiYXZhdGFyIiwibmFtZSIsInJhdGluZyIsImlzUmlnaHQiLCJpZCIsImdhbWVNb3ZlSW5mbyIsImdhbWVDZWxscyIsImNlbGwiLCJkaXNhYmxlZCIsImlzV2lubmVyIiwiaW5jbHVkZXMiLCJvbkNsaWNrIiwid2lubmVyTmFtZSIsInBsYXllcnMiLCJ0aW1lcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game_new/game.jsx\n"));

/***/ })

});