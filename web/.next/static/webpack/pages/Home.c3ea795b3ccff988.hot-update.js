"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Home",{

/***/ "./pages/Home.tsx":
/*!************************!*\
  !*** ./pages/Home.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_apolloConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/apolloConfig */ \"./config/apolloConfig.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n          query MyQuery {\\n            todos(where: { is_completed: { _eq: false } }) {\\n              id\\n              item\\n              is_completed\\n            }\\n          }\\n        \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n          mutation MyMutation($item: String) {\\n            insert_todos_one(object: { item: $item }) {\\n              id\\n              item\\n              is_completed\\n            }\\n          }\\n        \"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n          mutation MyMutation($itemId: Int!) {\\n            delete_todos_by_pk(id: $itemId) {\\n              id\\n              item\\n              is_completed\\n            }\\n          }\\n        \"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n          mutation MyMutation($id: Int!, $is_completed: Boolean!) {\\n            update_todos(\\n              where: { id: { _eq: $id } }\\n              _set: { is_completed: $is_completed }\\n            ) {\\n              returning {\\n                id\\n                item\\n                is_completed\\n              }\\n            }\\n          }\\n        \"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst home = ()=>{\n    _s();\n    const [itemName, setItemName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [itemArray, setItemArray] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        handleDisplayTodoItems();\n    }, [\n        itemArray\n    ]);\n    const handleDisplayTodoItems = ()=>{\n        _config_apolloConfig__WEBPACK_IMPORTED_MODULE_3__.client.query({\n            query: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject())\n        }).then((res)=>{\n            console.log(res.data.todos);\n            setItemArray(res.data.todos);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    const handleAddTodo = (e)=>{\n        e.preventDefault();\n        _config_apolloConfig__WEBPACK_IMPORTED_MODULE_3__.client.mutate({\n            mutation: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject1()),\n            variables: {\n                item: itemName\n            }\n        }).then((res)=>{\n            console.log(res.data.insert_todos_one);\n            setItemArray([\n                ...itemArray,\n                res.data.insert_todos_one\n            ]);\n            setItemName(\"\");\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    const handleDeleteItem = (index, id)=>{\n        console.log(id);\n        _config_apolloConfig__WEBPACK_IMPORTED_MODULE_3__.client.mutate({\n            mutation: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject2()),\n            variables: {\n                itemId: id\n            }\n        }).then((res)=>{\n            console.log(\"deleted\");\n            console.log(res);\n            setItemArray(itemArray.filter((data, indexItem)=>indexItem !== index));\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    const handleCompleteItem = (index, id)=>{\n        _config_apolloConfig__WEBPACK_IMPORTED_MODULE_3__.client.mutate({\n            mutation: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject3()),\n            variables: {\n                id: id,\n                is_completed: true\n            }\n        }).then((res)=>{\n            console.log(res.data.update_todos.returning);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: handleAddTodo,\n                method: \"get\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"item\",\n                        onChange: (e)=>setItemName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: itemArray.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: item.item\n                            }, item.id, false, {\n                                fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleDeleteItem(index, item.id),\n                                children: \"Del\"\n                            }, item.item, false, {\n                                fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleCompleteItem(index, item.id),\n                                children: \"complete\"\n                            }, index, false, {\n                                fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, undefined);\n};\n_s(home, \"EqjpqThW8AW+yO6H1Kqy+Fa6H9I=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSTsrQkFBbkJBLEtBQUtJLEVBQUU7Ozs7OzBDQUNmLDhEQUFDa0I7Z0NBRUNHLFNBQVMsSUFBTXZCLGlCQUFpQkMsT0FBT0gsS0FBS0ksRUFBRTswQ0FDL0M7K0JBRk1KLEtBQUtBLElBQUk7Ozs7OzBDQUtoQiw4REFBQ3NCO2dDQUVDRyxTQUFTLElBQU1qQixtQkFBbUJMLE9BQU9ILEtBQUtJLEVBQUU7MENBQ2pEOytCQUZNRDs7Ozs7O3VCQVRDSCxLQUFLSSxFQUFFOzs7OztnQkFnQnJCOzs7Ozs7Ozs7Ozs7QUFJUjtHQTlJTXpCO0FBZ0pOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0hvbWUudHN4PzMzODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuLi9jb25maWcvYXBvbGxvQ29uZmlnXCI7XG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW2l0ZW1OYW1lLCBzZXRJdGVtTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2l0ZW1BcnJheSwgc2V0SXRlbUFycmF5XSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZURpc3BsYXlUb2RvSXRlbXMoKTtcbiAgfSwgW2l0ZW1BcnJheV0pO1xuXG4gIGNvbnN0IGhhbmRsZURpc3BsYXlUb2RvSXRlbXMgPSAoKSA9PiB7XG4gICAgY2xpZW50XG4gICAgICAucXVlcnkoe1xuICAgICAgICBxdWVyeTogZ3FsYFxuICAgICAgICAgIHF1ZXJ5IE15UXVlcnkge1xuICAgICAgICAgICAgdG9kb3Mod2hlcmU6IHsgaXNfY29tcGxldGVkOiB7IF9lcTogZmFsc2UgfSB9KSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgaXNfY29tcGxldGVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEudG9kb3MpO1xuICAgICAgICBzZXRJdGVtQXJyYXkocmVzLmRhdGEudG9kb3MpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRUb2RvID0gKGU6IGFueSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjbGllbnRcbiAgICAgIC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgICAgIG11dGF0aW9uIE15TXV0YXRpb24oJGl0ZW06IFN0cmluZykge1xuICAgICAgICAgICAgaW5zZXJ0X3RvZG9zX29uZShvYmplY3Q6IHsgaXRlbTogJGl0ZW0gfSkge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgIGlzX2NvbXBsZXRlZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgICAgdmFyaWFibGVzOiB7IGl0ZW06IGl0ZW1OYW1lIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmluc2VydF90b2Rvc19vbmUpO1xuXG4gICAgICAgIHNldEl0ZW1BcnJheShbLi4uaXRlbUFycmF5LCByZXMuZGF0YS5pbnNlcnRfdG9kb3Nfb25lXSk7XG4gICAgICAgIHNldEl0ZW1OYW1lKFwiXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVJdGVtID0gKGluZGV4OiBudW1iZXIsIGlkOiBudW1iZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgY2xpZW50XG4gICAgICAubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgICBtdXRhdGlvbiBNeU11dGF0aW9uKCRpdGVtSWQ6IEludCEpIHtcbiAgICAgICAgICAgIGRlbGV0ZV90b2Rvc19ieV9wayhpZDogJGl0ZW1JZCkge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgIGlzX2NvbXBsZXRlZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgICAgdmFyaWFibGVzOiB7IGl0ZW1JZDogaWQgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlZFwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgc2V0SXRlbUFycmF5KFxuICAgICAgICAgIGl0ZW1BcnJheS5maWx0ZXIoKGRhdGEsIGluZGV4SXRlbSkgPT4gaW5kZXhJdGVtICE9PSBpbmRleClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29tcGxldGVJdGVtID0gKGluZGV4OiBudW1iZXIsIGlkOiBudW1iZXIpID0+IHtcbiAgICBjbGllbnRcbiAgICAgIC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgICAgIG11dGF0aW9uIE15TXV0YXRpb24oJGlkOiBJbnQhLCAkaXNfY29tcGxldGVkOiBCb29sZWFuISkge1xuICAgICAgICAgICAgdXBkYXRlX3RvZG9zKFxuICAgICAgICAgICAgICB3aGVyZTogeyBpZDogeyBfZXE6ICRpZCB9IH1cbiAgICAgICAgICAgICAgX3NldDogeyBpc19jb21wbGV0ZWQ6ICRpc19jb21wbGV0ZWQgfVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybmluZyB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgaXNfY29tcGxldGVkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgICAgIHZhcmlhYmxlczogeyBpZDogaWQsIGlzX2NvbXBsZXRlZDogdHJ1ZSB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEudXBkYXRlX3RvZG9zLnJldHVybmluZyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQWRkVG9kb30gbWV0aG9kPVwiZ2V0XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIml0ZW1cIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbU5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtpdGVtQXJyYXkubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICA8cCBrZXk9e2l0ZW0uaWR9PntpdGVtLml0ZW19PC9wPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLml0ZW19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlSXRlbShpbmRleCwgaXRlbS5pZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEZWxcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbXBsZXRlSXRlbShpbmRleCwgaXRlbS5pZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBjb21wbGV0ZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbGllbnQiLCJncWwiLCJob21lIiwiaXRlbU5hbWUiLCJzZXRJdGVtTmFtZSIsIml0ZW1BcnJheSIsInNldEl0ZW1BcnJheSIsImhhbmRsZURpc3BsYXlUb2RvSXRlbXMiLCJxdWVyeSIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInRvZG9zIiwiY2F0Y2giLCJlcnIiLCJoYW5kbGVBZGRUb2RvIiwiZSIsInByZXZlbnREZWZhdWx0IiwibXV0YXRlIiwibXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJpdGVtIiwiaW5zZXJ0X3RvZG9zX29uZSIsImhhbmRsZURlbGV0ZUl0ZW0iLCJpbmRleCIsImlkIiwiaXRlbUlkIiwiZmlsdGVyIiwiaW5kZXhJdGVtIiwiaGFuZGxlQ29tcGxldGVJdGVtIiwiaXNfY29tcGxldGVkIiwidXBkYXRlX3RvZG9zIiwicmV0dXJuaW5nIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwibWV0aG9kIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwibWFwIiwicCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Home.tsx\n"));

/***/ })

});