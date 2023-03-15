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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_apolloConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/apolloConfig */ \"./config/apolloConfig.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n          query MyQuery {\\n            todos(where: { is_completed: { _eq: false } }) {\\n              id\\n              item\\n              is_completed\\n            }\\n          }\\n        \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n          mutation MyMutation($item: String) {\\n            insert_todos_one(object: { item: $item }) {\\n              id\\n              item\\n              is_completed\\n            }\\n          }\\n        \"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n          mutation MyMutation($itemId: Int!) {\\n            delete_todos_by_pk(id: $itemId) {\\n              id\\n              item\\n              is_completed\\n            }\\n          }\\n        \"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n          mutation MyMutation($id: Int!, $is_completed: Boolean!) {\\n            update_todos(\\n              where: { id: { _eq: $id } }\\n              _set: { is_completed: $is_completed }\\n            ) {\\n              returning {\\n                id\\n                item\\n                is_completed\\n              }\\n            }\\n          }\\n        \"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst home = ()=>{\n    _s();\n    const [itemName, setItemName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [itemArray, setItemArray] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        handleDisplayTodoItems();\n    }, [\n        handleCompleteItem\n    ]);\n    const handleDisplayTodoItems = ()=>{\n        _config_apolloConfig__WEBPACK_IMPORTED_MODULE_3__.client.query({\n            query: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject())\n        }).then((res)=>{\n            console.log(res.data.todos);\n            setItemArray(res.data.todos);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    const handleAddTodo = (e)=>{\n        e.preventDefault();\n        _config_apolloConfig__WEBPACK_IMPORTED_MODULE_3__.client.mutate({\n            mutation: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject1()),\n            variables: {\n                item: itemName\n            }\n        }).then((res)=>{\n            console.log(res.data.insert_todos_one);\n            setItemArray([\n                ...itemArray,\n                res.data.insert_todos_one\n            ]);\n            setItemName(\"\");\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    const handleDeleteItem = (index, id)=>{\n        console.log(id);\n        _config_apolloConfig__WEBPACK_IMPORTED_MODULE_3__.client.mutate({\n            mutation: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject2()),\n            variables: {\n                itemId: id\n            }\n        }).then((res)=>{\n            console.log(\"deleted\");\n            console.log(res);\n            setItemArray(itemArray.filter((data, indexItem)=>indexItem !== index));\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    const handleCompleteItem = (index, id)=>{\n        _config_apolloConfig__WEBPACK_IMPORTED_MODULE_3__.client.mutate({\n            mutation: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject3()),\n            variables: {\n                id: id,\n                is_completed: true\n            }\n        }).then((res)=>{\n            console.log(res.data.update_todos.returning);\n            s;\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: handleAddTodo,\n                method: \"get\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"item\",\n                        onChange: (e)=>setItemName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: itemArray.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: item.item\n                            }, item.id, false, {\n                                fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleDeleteItem(index, item.id),\n                                children: \"Del\"\n                            }, item.item, false, {\n                                fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleCompleteItem(index, item.id),\n                                children: \"complete\"\n                            }, index, false, {\n                                fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n        lineNumber: 116,\n        columnNumber: 5\n    }, undefined);\n};\n_s(home, \"EqjpqThW8AW+yO6H1Kqy+Fa6H9I=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEIsS0FBS0EsSUFBSTsrQkFBbkJBLEtBQUtJLEVBQUU7Ozs7OzBDQUNmLDhEQUFDa0I7Z0NBRUNHLFNBQVMsSUFBTXZCLGlCQUFpQkMsT0FBT0gsS0FBS0ksRUFBRTswQ0FDL0M7K0JBRk1KLEtBQUtBLElBQUk7Ozs7OzBDQUtoQiw4REFBQ3NCO2dDQUVDRyxTQUFTLElBQU16QyxtQkFBbUJtQixPQUFPSCxLQUFLSSxFQUFFOzBDQUNqRDsrQkFGTUQ7Ozs7Ozt1QkFUQ0gsS0FBS0ksRUFBRTs7Ozs7Z0JBZ0JyQjs7Ozs7Ozs7Ozs7O0FBSVI7R0EvSU0xQjtBQWlKTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Ib21lLnRzeD8zMzg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vY29uZmlnL2Fwb2xsb0NvbmZpZ1wiO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtpdGVtTmFtZSwgc2V0SXRlbU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpdGVtQXJyYXksIHNldEl0ZW1BcnJheV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoYW5kbGVEaXNwbGF5VG9kb0l0ZW1zKCk7XG4gIH0sIFtoYW5kbGVDb21wbGV0ZUl0ZW1dKTtcblxuICBjb25zdCBoYW5kbGVEaXNwbGF5VG9kb0l0ZW1zID0gKCkgPT4ge1xuICAgIGNsaWVudFxuICAgICAgLnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IGdxbGBcbiAgICAgICAgICBxdWVyeSBNeVF1ZXJ5IHtcbiAgICAgICAgICAgIHRvZG9zKHdoZXJlOiB7IGlzX2NvbXBsZXRlZDogeyBfZXE6IGZhbHNlIH0gfSkge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgIGlzX2NvbXBsZXRlZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLnRvZG9zKTtcbiAgICAgICAgc2V0SXRlbUFycmF5KHJlcy5kYXRhLnRvZG9zKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkVG9kbyA9IChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xpZW50XG4gICAgICAubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgICBtdXRhdGlvbiBNeU11dGF0aW9uKCRpdGVtOiBTdHJpbmcpIHtcbiAgICAgICAgICAgIGluc2VydF90b2Rvc19vbmUob2JqZWN0OiB7IGl0ZW06ICRpdGVtIH0pIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICBpc19jb21wbGV0ZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgICAgIHZhcmlhYmxlczogeyBpdGVtOiBpdGVtTmFtZSB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5pbnNlcnRfdG9kb3Nfb25lKTtcblxuICAgICAgICBzZXRJdGVtQXJyYXkoWy4uLml0ZW1BcnJheSwgcmVzLmRhdGEuaW5zZXJ0X3RvZG9zX29uZV0pO1xuICAgICAgICBzZXRJdGVtTmFtZShcIlwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlSXRlbSA9IChpbmRleDogbnVtYmVyLCBpZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICAgIGNsaWVudFxuICAgICAgLm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uOiBncWxgXG4gICAgICAgICAgbXV0YXRpb24gTXlNdXRhdGlvbigkaXRlbUlkOiBJbnQhKSB7XG4gICAgICAgICAgICBkZWxldGVfdG9kb3NfYnlfcGsoaWQ6ICRpdGVtSWQpIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICBpc19jb21wbGV0ZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgICAgIHZhcmlhYmxlczogeyBpdGVtSWQ6IGlkIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZWRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHNldEl0ZW1BcnJheShcbiAgICAgICAgICBpdGVtQXJyYXkuZmlsdGVyKChkYXRhLCBpbmRleEl0ZW0pID0+IGluZGV4SXRlbSAhPT0gaW5kZXgpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNvbXBsZXRlSXRlbSA9IChpbmRleDogbnVtYmVyLCBpZDogbnVtYmVyKSA9PiB7XG4gICAgY2xpZW50XG4gICAgICAubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgICBtdXRhdGlvbiBNeU11dGF0aW9uKCRpZDogSW50ISwgJGlzX2NvbXBsZXRlZDogQm9vbGVhbiEpIHtcbiAgICAgICAgICAgIHVwZGF0ZV90b2RvcyhcbiAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHsgX2VxOiAkaWQgfSB9XG4gICAgICAgICAgICAgIF9zZXQ6IHsgaXNfY29tcGxldGVkOiAkaXNfY29tcGxldGVkIH1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm5pbmcge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgIGlzX2NvbXBsZXRlZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgLFxuICAgICAgICB2YXJpYWJsZXM6IHsgaWQ6IGlkLCBpc19jb21wbGV0ZWQ6IHRydWUgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLnVwZGF0ZV90b2Rvcy5yZXR1cm5pbmcpO1xuICAgICAgICBzO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUFkZFRvZG99IG1ldGhvZD1cImdldFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJpdGVtXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1OYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2PlxuICAgICAgICB7aXRlbUFycmF5Lm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgPHAga2V5PXtpdGVtLmlkfT57aXRlbS5pdGVtfTwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pdGVtfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZUl0ZW0oaW5kZXgsIGl0ZW0uaWQpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVsXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb21wbGV0ZUl0ZW0oaW5kZXgsIGl0ZW0uaWQpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgY29tcGxldGVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2xpZW50IiwiZ3FsIiwiaG9tZSIsIml0ZW1OYW1lIiwic2V0SXRlbU5hbWUiLCJpdGVtQXJyYXkiLCJzZXRJdGVtQXJyYXkiLCJoYW5kbGVEaXNwbGF5VG9kb0l0ZW1zIiwiaGFuZGxlQ29tcGxldGVJdGVtIiwicXVlcnkiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ0b2RvcyIsImNhdGNoIiwiZXJyIiwiaGFuZGxlQWRkVG9kbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm11dGF0ZSIsIm11dGF0aW9uIiwidmFyaWFibGVzIiwiaXRlbSIsImluc2VydF90b2Rvc19vbmUiLCJoYW5kbGVEZWxldGVJdGVtIiwiaW5kZXgiLCJpZCIsIml0ZW1JZCIsImZpbHRlciIsImluZGV4SXRlbSIsImlzX2NvbXBsZXRlZCIsInVwZGF0ZV90b2RvcyIsInJldHVybmluZyIsInMiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJtZXRob2QiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJtYXAiLCJwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Home.tsx\n"));

/***/ })

});