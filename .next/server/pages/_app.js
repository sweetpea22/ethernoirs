/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_fonts_PixelOperatorMono_Bold_ttf_weight_600_style_bold_path_fonts_PixelOperatorMono_ttf_weight_400_style_normal_variableName_pixel1___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/local/target.css?{\"path\":\"src/pages/_app.tsx\",\"import\":\"\",\"arguments\":[{\"src\":[{\"path\":\"./fonts/PixelOperatorMono-Bold.ttf\",\"weight\":\"600\",\"style\":\"bold\"},{\"path\":\"./fonts/PixelOperatorMono.ttf\",\"weight\":\"400\",\"style\":\"normal\"}]}],\"variableName\":\"pixel1\"} */ \"./node_modules/next/font/local/target.css?{\\\"path\\\":\\\"src/pages/_app.tsx\\\",\\\"import\\\":\\\"\\\",\\\"arguments\\\":[{\\\"src\\\":[{\\\"path\\\":\\\"./fonts/PixelOperatorMono-Bold.ttf\\\",\\\"weight\\\":\\\"600\\\",\\\"style\\\":\\\"bold\\\"},{\\\"path\\\":\\\"./fonts/PixelOperatorMono.ttf\\\",\\\"weight\\\":\\\"400\\\",\\\"style\\\":\\\"normal\\\"}]}],\\\"variableName\\\":\\\"pixel1\\\"}\");\n/* harmony import */ var next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_fonts_PixelOperatorMono_Bold_ttf_weight_600_style_bold_path_fonts_PixelOperatorMono_ttf_weight_400_style_normal_variableName_pixel1___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_fonts_PixelOperatorMono_Bold_ttf_weight_600_style_bold_path_fonts_PixelOperatorMono_ttf_weight_400_style_normal_variableName_pixel1___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3modal/ethereum */ \"@web3modal/ethereum\");\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3modal/react */ \"@web3modal/react\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__, _web3modal_react__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_chains__WEBPACK_IMPORTED_MODULE_5__]);\n([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__, _web3modal_react__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_chains__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst chains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.goerli,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.scrollSepolia,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.gnosisChiado,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.mantleTestnet\n];\nconst projectId = \"254cd962c673dce7b6230a37d69ad80b\";\nconst { publicClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)(chains, [\n    (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__.w3mProvider)({\n        projectId\n    })\n]);\nconst wagmiConfig = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createConfig)({\n    autoConnect: true,\n    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__.w3mConnectors)({\n        projectId,\n        chains\n    }),\n    publicClient\n});\nconst ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__.EthereumClient(wagmiConfig, chains);\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        config: wagmiConfig,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_fonts_PixelOperatorMono_Bold_ttf_weight_600_style_bold_path_fonts_PixelOperatorMono_ttf_weight_400_style_normal_variableName_pixel1___WEBPACK_IMPORTED_MODULE_6___default().className),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/sweetpea/Desktop/CURRENT/swtp/ethnyc/the-accused/src/pages/_app.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sweetpea/Desktop/CURRENT/swtp/ethnyc/the-accused/src/pages/_app.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_3__.Web3Modal, {\n                projectId: projectId,\n                ethereumClient: ethereumClient\n            }, void 0, false, {\n                fileName: \"/Users/sweetpea/Desktop/CURRENT/swtp/ethnyc/the-accused/src/pages/_app.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sweetpea/Desktop/CURRENT/swtp/ethnyc/the-accused/src/pages/_app.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJNQTtBQWNBQztBQTVDd0I7QUFPRDtBQUNnQjtBQUNzQjtBQU83QztBQUV0QixNQUFNWSxTQUFTO0lBQUNKLGdEQUFNQTtJQUFFQyx1REFBYUE7SUFBRUMsc0RBQVlBO0lBQUVDLHVEQUFhQTtDQUFDO0FBQ25FLE1BQU1FLFlBQVk7QUFFbEIsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBR1Qsc0RBQWVBLENBQUNPLFFBQVE7SUFBQ1QsZ0VBQVdBLENBQUM7UUFBRVU7SUFBVTtDQUFHO0FBRTdFLE1BQU1FLGNBQWNULG1EQUFZQSxDQUFDO0lBQy9CVSxhQUFhO0lBQ2JDLFlBQVlmLGtFQUFhQSxDQUFDO1FBQUVXO1FBQVdEO0lBQU87SUFDOUNFO0FBQ0Y7QUFDQSxNQUFNSSxpQkFBaUIsSUFBSWpCLCtEQUFjQSxDQUFDYyxhQUFhSDtBQStCeEMsU0FBU08sSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM1RCxxQkFDRSw4REFBQ2QsOENBQVdBO1FBQUNlLFFBQVFQOzswQkFDbkIsOERBQUNRO2dCQUFLQyxXQUFXekIsbVFBQWdCOzBCQUMvQiw0RUFBQ3FCO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OzBCQUUxQiw4REFBQ2pCLHVEQUFTQTtnQkFBQ1MsV0FBV0E7Z0JBQVdLLGdCQUFnQkE7Ozs7Ozs7Ozs7OztBQUd2RCIsInNvdXJjZXMiOlsid2VicGFjazovL2FjY3VzZWRnZy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBsb2NhbEZvbnQgZnJvbSAnbmV4dC9mb250L2xvY2FsJztcbmltcG9ydCB7XG4gIEV0aGVyZXVtQ2xpZW50LFxuICB3M21Db25uZWN0b3JzLFxuICB3M21Qcm92aWRlcixcbn0gZnJvbSAnQHdlYjNtb2RhbC9ldGhlcmV1bSc7XG5pbXBvcnQgeyBXZWIzTW9kYWwgfSBmcm9tICdAd2ViM21vZGFsL3JlYWN0JztcbmltcG9ydCB7IGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ29uZmlnLCBXYWdtaUNvbmZpZyB9IGZyb20gJ3dhZ21pJztcblxuaW1wb3J0IHtcbiAgZ29lcmxpLFxuICBzY3JvbGxTZXBvbGlhLFxuICBnbm9zaXNDaGlhZG8sXG4gIG1hbnRsZVRlc3RuZXQsXG59IGZyb20gJ3dhZ21pL2NoYWlucyc7XG5cbmNvbnN0IGNoYWlucyA9IFtnb2VybGksIHNjcm9sbFNlcG9saWEsIGdub3Npc0NoaWFkbywgbWFudGxlVGVzdG5ldF07XG5jb25zdCBwcm9qZWN0SWQgPSAnMjU0Y2Q5NjJjNjczZGNlN2I2MjMwYTM3ZDY5YWQ4MGInO1xuXG5jb25zdCB7IHB1YmxpY0NsaWVudCB9ID0gY29uZmlndXJlQ2hhaW5zKGNoYWlucywgW3czbVByb3ZpZGVyKHsgcHJvamVjdElkIH0pXSk7XG5cbmNvbnN0IHdhZ21pQ29uZmlnID0gY3JlYXRlQ29uZmlnKHtcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gIGNvbm5lY3RvcnM6IHczbUNvbm5lY3RvcnMoeyBwcm9qZWN0SWQsIGNoYWlucyB9KSxcbiAgcHVibGljQ2xpZW50LFxufSk7XG5jb25zdCBldGhlcmV1bUNsaWVudCA9IG5ldyBFdGhlcmV1bUNsaWVudCh3YWdtaUNvbmZpZywgY2hhaW5zKTtcblxuY29uc3QgcGl4ZWwxID0gbG9jYWxGb250KHtcbiAgc3JjOiBbXG4gICAge1xuICAgICAgcGF0aDogJy4vZm9udHMvUGl4ZWxPcGVyYXRvck1vbm8tQm9sZC50dGYnLFxuICAgICAgd2VpZ2h0OiAnNjAwJyxcbiAgICAgIHN0eWxlOiAnYm9sZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnLi9mb250cy9QaXhlbE9wZXJhdG9yTW9uby50dGYnLFxuICAgICAgd2VpZ2h0OiAnNDAwJyxcbiAgICAgIHN0eWxlOiAnbm9ybWFsJyxcbiAgICB9LFxuICBdLFxufSk7XG5jb25zdCBuZXVlYml0ID0gbG9jYWxGb250KHtcbiAgc3JjOiBbXG4gICAge1xuICAgICAgcGF0aDogJy4vZm9udHMvbmV1ZWJpdC9OZXVlQml0LUJvbGQudHRmJyxcbiAgICAgIHdlaWdodDogJzYwMCcsXG4gICAgICBzdHlsZTogJ2JvbGQnLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy4vZm9udHMvbmV1ZWJpdC9OZXVlQml0LVJlZ3VsYXIudHRmJyxcbiAgICAgIHdlaWdodDogJzQwMCcsXG4gICAgICBzdHlsZTogJ25vcm1hbCcsXG4gICAgfSxcbiAgXSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjb25maWc9e3dhZ21pQ29uZmlnfT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17cGl4ZWwxLmNsYXNzTmFtZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxXZWIzTW9kYWwgcHJvamVjdElkPXtwcm9qZWN0SWR9IGV0aGVyZXVtQ2xpZW50PXtldGhlcmV1bUNsaWVudH0gLz5cbiAgICA8L1dhZ21pQ29uZmlnPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInBpeGVsMSIsIm5ldWViaXQiLCJFdGhlcmV1bUNsaWVudCIsInczbUNvbm5lY3RvcnMiLCJ3M21Qcm92aWRlciIsIldlYjNNb2RhbCIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNvbmZpZyIsIldhZ21pQ29uZmlnIiwiZ29lcmxpIiwic2Nyb2xsU2Vwb2xpYSIsImdub3Npc0NoaWFkbyIsIm1hbnRsZVRlc3RuZXQiLCJjaGFpbnMiLCJwcm9qZWN0SWQiLCJwdWJsaWNDbGllbnQiLCJ3YWdtaUNvbmZpZyIsImF1dG9Db25uZWN0IiwiY29ubmVjdG9ycyIsImV0aGVyZXVtQ2xpZW50IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uZmlnIiwibWFpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@web3modal/ethereum":
/*!**************************************!*\
  !*** external "@web3modal/ethereum" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/ethereum");;

/***/ }),

/***/ "@web3modal/react":
/*!***********************************!*\
  !*** external "@web3modal/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/react");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();