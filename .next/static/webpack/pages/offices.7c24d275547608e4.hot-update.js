"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/offices",{

/***/ "./src/components/offices/officetabel.js":
/*!***********************************************!*\
  !*** ./src/components/offices/officetabel.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_icon_Union_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/icon/Union.svg */ \"./src/assets/images/icon/Union.svg\");\n/* harmony import */ var _components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/Dropdown */ \"./src/components/ui/Dropdown.js\");\n/* harmony import */ var _components_ui_CheckBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/CheckBox */ \"./src/components/ui/CheckBox.js\");\n/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/Button */ \"./src/components/ui/Button.js\");\n/* harmony import */ var _ui_Badges__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/Badges */ \"./src/components/ui/Badges.js\");\n\n\n\n\n\n\n\nconst OfficeTabel = (param)=>{\n    let { tableRow , handleChange , selected  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: tableRow.map((officeRowData, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"\".concat(selected.includes(index) ? \"bg-primary-light dark:bg-white/5 \" : \"\", \" border-b border-black/5 dark:border-white/5 dark:hover:border-white/10 hover:bg-primary-light dark:hover:bg-white/5 group transition-all duration-300 cursor-pointer text-xs \").concat(officeRowData.tablesec),\n                onChange: handleChange,\n                checked: selected.includes(index),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"pl-0 py-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pl-[5px] flex items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_CheckBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                value: index,\n                                name: officeRowData.name,\n                                onChange: handleChange,\n                                checked: selected.includes(index)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"py-2 whitespace-nowrap pl-3 pr-[10px]\",\n                        children: officeRowData.floor\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"py-2 px-3 whitespace-nowrap font-bold leading-normal\",\n                        children: officeRowData.officeName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"py-2 px-3 whitespace-nowrap font-bold leading-normal\",\n                        children: officeRowData.seats\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"py-2 px-3 font-bold\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"max-w-[88px] leading-normal\",\n                            children: officeRowData.currentRent\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"py-2 px-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"max-w-[88px] leading-normal\",\n                            children: officeRowData.usualRent\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"py-2 px-3 whitespace-nowrap leading-normal\",\n                        children: officeRowData.currentCompany\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"py-2 px-3 whitespace-nowrap leading-normal\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Badges__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            name: officeRowData.type,\n                            color: officeRowData.typeDot,\n                            className: \"\".concat(officeRowData.rentStyle)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"py-2 px-3 whitespace-nowrap leading-normal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: officeRowData.icon,\n                                alt: \"\",\n                                className: \"dark:invert inline-block mr-[6px]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined),\n                            officeRowData.nextInvoiceDate\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"py-2 px-3 whitespace-nowrap leading-normal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: officeRowData.icon,\n                                alt: \"\",\n                                className: \"dark:invert inline-block mr-[6px]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined),\n                            officeRowData.lockInTill\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"leading-normal pr-4 \".concat(selected.includes(index) ? \"group-hover:opacity-100\" : \"md:opacity-0  group-hover:opacity-100 \"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_Dropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"\",\n                            itemsclass: \"!p-2 w-[240px] !block right-0 [&>a:nth-child(2)]:!border-t [&>a:nth-child(3)]:!border-0 [&>a:nth-child(4)]:!border-0 [&>a:nth-child(5)]:!border-0 [&>a:nth-child(6)]:!border-t [&>a:nth-child(7)]:!border-0\",\n                            button: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2 items-center py-3 px-2 justify-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _assets_images_icon_Union_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                    alt: \"\",\n                                    className: \"dark:invert\"\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0),\n                            dropdownitem: [\n                                {\n                                    id: 1,\n                                    title: \"Print packing slip\",\n                                    link: \"\"\n                                },\n                                {\n                                    id: 1,\n                                    title: \"Archive order\",\n                                    link: \"\"\n                                },\n                                {\n                                    id: 1,\n                                    title: \"Put on Hold (or Unhold order)\",\n                                    link: \"\"\n                                },\n                                {\n                                    id: 1,\n                                    title: \"Mark as paid (or Mark as Unpaid if already paid)\",\n                                    link: \"\"\n                                },\n                                {\n                                    id: 1,\n                                    title: \"Fulfil order (or Mark as Unfulfilled)\",\n                                    lsink: \"\"\n                                },\n                                {\n                                    id: 1,\n                                    title: \"View details\",\n                                    link: \"/offices/add-office\"\n                                }\n                            ]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\kinjal\\\\bigbang9-3 (1)\\\\src\\\\components\\\\offices\\\\officetabel.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false);\n};\n_c = OfficeTabel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OfficeTabel);\nvar _c;\n$RefreshReg$(_c, \"OfficeTabel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vZmZpY2VzL29mZmljZXRhYmVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ21CO0FBQ0Y7QUFDQTtBQUNGO0FBQ1o7QUFHbEMsTUFBTU0sY0FBYyxTQUEwQztRQUF6QyxFQUFFQyxTQUFRLEVBQUVDLGFBQVksRUFBRUMsU0FBUSxFQUFFO0lBQ3ZELHFCQUNFO2tCQUNHRixTQUFTRyxHQUFHLENBQUMsQ0FBQ0MsZUFBZ0JDLHNCQUM3Qiw4REFBQ0M7Z0JBQ0NDLFdBQVcsR0FHVEgsT0FGQUYsU0FBU00sUUFBUSxDQUFDSCxTQUFTLHNDQUFzQyxFQUFFLEVBQ3BFLGtMQUVBLE9BRENELGNBQWNLLFFBQVE7Z0JBR3hCQyxVQUFVVDtnQkFDVlUsU0FBU1QsU0FBU00sUUFBUSxDQUFDSDs7a0NBRTNCLDhEQUFDTzt3QkFBR0wsV0FBVTtrQ0FDWiw0RUFBQ007NEJBQUlOLFdBQVU7c0NBQ2IsNEVBQUNYLCtEQUFRQTtnQ0FDUGtCLE9BQU9UO2dDQUNQVSxNQUFNWCxjQUFjVyxJQUFJO2dDQUN4QkwsVUFBVVQ7Z0NBQ1ZVLFNBQVNULFNBQVNNLFFBQVEsQ0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWpDLDhEQUFDTzt3QkFBR0wsV0FBVTtrQ0FDWEgsY0FBY1ksS0FBSzs7Ozs7O2tDQUV0Qiw4REFBQ0o7d0JBQUdMLFdBQVU7a0NBQ1hILGNBQWNhLFVBQVU7Ozs7OztrQ0FFM0IsOERBQUNMO3dCQUFHTCxXQUFVO2tDQUNYSCxjQUFjYyxLQUFLOzs7Ozs7a0NBRXRCLDhEQUFDTjt3QkFBR0wsV0FBVTtrQ0FDWiw0RUFBQ1k7NEJBQUVaLFdBQVU7c0NBQ1pILGNBQWNnQixXQUFXOzs7Ozs7Ozs7OztrQ0FHNUIsOERBQUNSO3dCQUFHTCxXQUFVO2tDQUNaLDRFQUFDWTs0QkFBRVosV0FBVTtzQ0FDWkgsY0FBY2lCLFNBQVM7Ozs7Ozs7Ozs7O2tDQUcxQiw4REFBQ1Q7d0JBQUdMLFdBQVU7a0NBQ1hILGNBQWNrQixjQUFjOzs7Ozs7a0NBRS9CLDhEQUFDVjt3QkFBR0wsV0FBVTtrQ0FDWiw0RUFBQ1Qsa0RBQU1BOzRCQUFDaUIsTUFBTVgsY0FBY21CLElBQUk7NEJBQUVDLE9BQU9wQixjQUFjcUIsT0FBTzs0QkFBRWxCLFdBQVcsR0FBMkIsT0FBeEJILGNBQWNzQixTQUFTOzs7Ozs7Ozs7OztrQ0FFdkcsOERBQUNkO3dCQUFHTCxXQUFVOzswQ0FDWiw4REFBQ2QsbURBQUtBO2dDQUFDa0MsS0FBS3ZCLGNBQWN3QixJQUFJO2dDQUFFQyxLQUFJO2dDQUFHdEIsV0FBVTs7Ozs7OzRCQUNoREgsY0FBYzBCLGVBQWU7Ozs7Ozs7a0NBRWhDLDhEQUFDbEI7d0JBQUdMLFdBQVU7OzBDQUNaLDhEQUFDZCxtREFBS0E7Z0NBQUNrQyxLQUFLdkIsY0FBY3dCLElBQUk7Z0NBQUVDLEtBQUk7Z0NBQUd0QixXQUFVOzs7Ozs7NEJBQ2hESCxjQUFjMkIsVUFBVTs7Ozs7OztrQ0FFM0IsOERBQUNuQjt3QkFBR0wsV0FBVyx1QkFBdUgsT0FBaEdMLFNBQVNNLFFBQVEsQ0FBQ0gsU0FBUyw0QkFBMkIsd0NBQXdDO2tDQUNsSSw0RUFBQ1YsK0RBQVFBOzRCQUNQWSxXQUFVOzRCQUNWeUIsWUFBVzs0QkFDWEMsc0JBQ0UsOERBQUNwQjtnQ0FBSU4sV0FBVTswQ0FDYiw0RUFBQ2QsbURBQUtBO29DQUFDa0MsS0FBS2pDLHFFQUFJQTtvQ0FBRW1DLEtBQUk7b0NBQUd0QixXQUFVOzs7NEJBR3ZDMkIsY0FBYztnQ0FDWjtvQ0FBQ0MsSUFBRztvQ0FBR0MsT0FBTztvQ0FBc0JDLE1BQU07Z0NBQUc7Z0NBQzdDO29DQUFDRixJQUFHO29DQUFHQyxPQUFPO29DQUFpQkMsTUFBTTtnQ0FBRztnQ0FDeEM7b0NBQUNGLElBQUc7b0NBQUdDLE9BQU87b0NBQWlDQyxNQUFNO2dDQUFHO2dDQUN4RDtvQ0FBQ0YsSUFBRztvQ0FBR0MsT0FBTztvQ0FBb0RDLE1BQU07Z0NBQUc7Z0NBQzNFO29DQUFDRixJQUFHO29DQUFHQyxPQUFPO29DQUF5Q0UsT0FBTztnQ0FBRztnQ0FDakU7b0NBQUNILElBQUc7b0NBQUdDLE9BQU87b0NBQWdCQyxNQUFNO2dDQUFzQjs2QkFDM0Q7Ozs7Ozs7Ozs7OztlQS9EQWhDOzs7Ozs7QUFzRWY7S0FoRk1OO0FBaUZOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL29mZmljZXMvb2ZmaWNldGFiZWwuanM/OGIyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IERvdHMgZnJvbSBcIkAvYXNzZXRzL2ltYWdlcy9pY29uL1VuaW9uLnN2Z1wiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIkAvY29tcG9uZW50cy91aS9Ecm9wZG93blwiO1xyXG5pbXBvcnQgQ2hlY2tCb3ggZnJvbSBcIkAvY29tcG9uZW50cy91aS9DaGVja0JveFwiO1xyXG5pbXBvcnQgIEJ1dHRvbiAgZnJvbSBcIkAvY29tcG9uZW50cy91aS9CdXR0b25cIjtcclxuaW1wb3J0IEJhZGdlcyBmcm9tIFwiLi4vdWkvQmFkZ2VzXCI7XHJcblxyXG5cclxuY29uc3QgT2ZmaWNlVGFiZWwgPSAoeyB0YWJsZVJvdywgaGFuZGxlQ2hhbmdlLCBzZWxlY3RlZCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt0YWJsZVJvdy5tYXAoKG9mZmljZVJvd0RhdGEgLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDx0clxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuaW5jbHVkZXMoaW5kZXgpID8gXCJiZy1wcmltYXJ5LWxpZ2h0IGRhcms6Ymctd2hpdGUvNSBcIiA6IFwiXCJcclxuICAgICAgICAgIH0gYm9yZGVyLWIgYm9yZGVyLWJsYWNrLzUgZGFyazpib3JkZXItd2hpdGUvNSBkYXJrOmhvdmVyOmJvcmRlci13aGl0ZS8xMCBob3ZlcjpiZy1wcmltYXJ5LWxpZ2h0IGRhcms6aG92ZXI6Ymctd2hpdGUvNSBncm91cCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgY3Vyc29yLXBvaW50ZXIgdGV4dC14cyAke1xyXG4gICAgICAgICAgICBvZmZpY2VSb3dEYXRhLnRhYmxlc2VjXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWQuaW5jbHVkZXMoaW5kZXgpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwbC0wIHB5LTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC1bNXB4XSBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja0JveFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgbmFtZT17b2ZmaWNlUm93RGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkLmluY2x1ZGVzKGluZGV4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMiB3aGl0ZXNwYWNlLW5vd3JhcCBwbC0zIHByLVsxMHB4XVwiPlxyXG4gICAgICAgICAgICB7b2ZmaWNlUm93RGF0YS5mbG9vcn1cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMiBweC0zIHdoaXRlc3BhY2Utbm93cmFwIGZvbnQtYm9sZCBsZWFkaW5nLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICB7b2ZmaWNlUm93RGF0YS5vZmZpY2VOYW1lfVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0yIHB4LTMgd2hpdGVzcGFjZS1ub3dyYXAgZm9udC1ib2xkIGxlYWRpbmctbm9ybWFsXCI+XHJcbiAgICAgICAgICAgIHtvZmZpY2VSb3dEYXRhLnNlYXRzfVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0yIHB4LTMgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1heC13LVs4OHB4XSBsZWFkaW5nLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICB7b2ZmaWNlUm93RGF0YS5jdXJyZW50UmVudH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTIgcHgtM1wiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy1bODhweF0gbGVhZGluZy1ub3JtYWxcIj5cclxuICAgICAgICAgICAge29mZmljZVJvd0RhdGEudXN1YWxSZW50fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTIgcHgtMyB3aGl0ZXNwYWNlLW5vd3JhcCBsZWFkaW5nLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICB7b2ZmaWNlUm93RGF0YS5jdXJyZW50Q29tcGFueX1cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMiBweC0zIHdoaXRlc3BhY2Utbm93cmFwIGxlYWRpbmctbm9ybWFsXCI+XHJcbiAgICAgICAgICAgIDxCYWRnZXMgbmFtZT17b2ZmaWNlUm93RGF0YS50eXBlfSBjb2xvcj17b2ZmaWNlUm93RGF0YS50eXBlRG90fSBjbGFzc05hbWU9e2Ake29mZmljZVJvd0RhdGEucmVudFN0eWxlfWB9Lz5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMiBweC0zIHdoaXRlc3BhY2Utbm93cmFwIGxlYWRpbmctbm9ybWFsXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e29mZmljZVJvd0RhdGEuaWNvbn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiZGFyazppbnZlcnQgaW5saW5lLWJsb2NrIG1yLVs2cHhdXCIgLz5cclxuICAgICAgICAgICAge29mZmljZVJvd0RhdGEubmV4dEludm9pY2VEYXRlfVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0yIHB4LTMgd2hpdGVzcGFjZS1ub3dyYXAgbGVhZGluZy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17b2ZmaWNlUm93RGF0YS5pY29ufSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJkYXJrOmludmVydCBpbmxpbmUtYmxvY2sgbXItWzZweF1cIiAvPlxyXG4gICAgICAgICAgICB7b2ZmaWNlUm93RGF0YS5sb2NrSW5UaWxsfVxyXG4gICAgICAgICAgPC90ZD4gICAgICBcclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2BsZWFkaW5nLW5vcm1hbCBwci00ICR7c2VsZWN0ZWQuaW5jbHVkZXMoaW5kZXgpID8gXCJncm91cC1ob3ZlcjpvcGFjaXR5LTEwMFwiOiBcIm1kOm9wYWNpdHktMCAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgXCIgfWB9PlxyXG4gICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgIGl0ZW1zY2xhc3M9XCIhcC0yIHctWzI0MHB4XSAhYmxvY2sgcmlnaHQtMCBbJj5hOm50aC1jaGlsZCgyKV06IWJvcmRlci10IFsmPmE6bnRoLWNoaWxkKDMpXTohYm9yZGVyLTAgWyY+YTpudGgtY2hpbGQoNCldOiFib3JkZXItMCBbJj5hOm50aC1jaGlsZCg1KV06IWJvcmRlci0wIFsmPmE6bnRoLWNoaWxkKDYpXTohYm9yZGVyLXQgWyY+YTpudGgtY2hpbGQoNyldOiFib3JkZXItMFwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uPXtcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXIgcHktMyBweC0yIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0RvdHN9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImRhcms6aW52ZXJ0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkcm9wZG93bml0ZW09e1tcclxuICAgICAgICAgICAgICAgIHtpZDoxLCB0aXRsZTogXCJQcmludCBwYWNraW5nIHNsaXBcIiwgbGluazogXCJcIiB9LFxyXG4gICAgICAgICAgICAgICAge2lkOjEsIHRpdGxlOiBcIkFyY2hpdmUgb3JkZXJcIiwgbGluazogXCJcIiB9LFxyXG4gICAgICAgICAgICAgICAge2lkOjEsIHRpdGxlOiBcIlB1dCBvbiBIb2xkIChvciBVbmhvbGQgb3JkZXIpXCIsIGxpbms6IFwiXCIgfSxcclxuICAgICAgICAgICAgICAgIHtpZDoxLCB0aXRsZTogXCJNYXJrIGFzIHBhaWQgKG9yIE1hcmsgYXMgVW5wYWlkIGlmIGFscmVhZHkgcGFpZClcIiwgbGluazogXCJcIiB9LFxyXG4gICAgICAgICAgICAgICAge2lkOjEsIHRpdGxlOiBcIkZ1bGZpbCBvcmRlciAob3IgTWFyayBhcyBVbmZ1bGZpbGxlZClcIiwgbHNpbms6IFwiXCIgfSxcclxuICAgICAgICAgICAgICAgIHtpZDoxLCB0aXRsZTogXCJWaWV3IGRldGFpbHNcIiwgbGluazogXCIvb2ZmaWNlcy9hZGQtb2ZmaWNlXCIgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICApKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE9mZmljZVRhYmVsO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJEb3RzIiwiRHJvcGRvd24iLCJDaGVja0JveCIsIkJ1dHRvbiIsIkJhZGdlcyIsIk9mZmljZVRhYmVsIiwidGFibGVSb3ciLCJoYW5kbGVDaGFuZ2UiLCJzZWxlY3RlZCIsIm1hcCIsIm9mZmljZVJvd0RhdGEiLCJpbmRleCIsInRyIiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJ0YWJsZXNlYyIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsInRkIiwiZGl2IiwidmFsdWUiLCJuYW1lIiwiZmxvb3IiLCJvZmZpY2VOYW1lIiwic2VhdHMiLCJwIiwiY3VycmVudFJlbnQiLCJ1c3VhbFJlbnQiLCJjdXJyZW50Q29tcGFueSIsInR5cGUiLCJjb2xvciIsInR5cGVEb3QiLCJyZW50U3R5bGUiLCJzcmMiLCJpY29uIiwiYWx0IiwibmV4dEludm9pY2VEYXRlIiwibG9ja0luVGlsbCIsIml0ZW1zY2xhc3MiLCJidXR0b24iLCJkcm9wZG93bml0ZW0iLCJpZCIsInRpdGxlIiwibGluayIsImxzaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/offices/officetabel.js\n"));

/***/ })

});