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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_apolloConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/apolloConfig */ \"./config/apolloConfig.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n          query MyQuery {\\n            todos(where: { is_completed: { _eq: false } }) {\\n              id\\n              item\\n              is_completed\\n            }\\n          }\\n        \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n          mutation MyMutation($item: String!) {\\n            inputvalidation(input: { item: \"\" }) {\\n              status\\n            }\\n          }\\n        '\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n          mutation MyMutation($itemId: Int!) {\\n            delete_todos_by_pk(id: $itemId) {\\n              id\\n              item\\n              is_completed\\n            }\\n          }\\n        \"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n          mutation MyMutation($id: Int!, $is_completed: Boolean!) {\\n            update_todos(\\n              where: { id: { _eq: $id } }\\n              _set: { is_completed: $is_completed }\\n            ) {\\n              returning {\\n                id\\n                item\\n                is_completed\\n              }\\n            }\\n          }\\n        \"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst home = ()=>{\n    _s();\n    const [itemName, setItemName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [itemArray, setItemArray] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        handleDisplayTodoItems();\n    }, []);\n    const handleDisplayTodoItems = ()=>{\n        _config_apolloConfig__WEBPACK_IMPORTED_MODULE_3__.client.query({\n            query: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject())\n        }).then((res)=>{\n            console.log(res.data.todos);\n            setItemArray(res.data.todos);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    const handleAddTodo = (e)=>{\n        e.preventDefault();\n        _config_apolloConfig__WEBPACK_IMPORTED_MODULE_3__.client.mutate({\n            mutation: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject1()),\n            variables: {\n                item: itemName\n            }\n        }).then((res)=>{\n            console.log(res.data.insert_todos_one);\n            setItemArray([\n                ...itemArray,\n                res.data.insert_todos_one\n            ]);\n            setItemName(\"\");\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    const handleDeleteItem = (index, id)=>{\n        console.log(id);\n        _config_apolloConfig__WEBPACK_IMPORTED_MODULE_3__.client.mutate({\n            mutation: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject2()),\n            variables: {\n                itemId: id\n            }\n        }).then((res)=>{\n            console.log(\"deleted\");\n            console.log(res);\n            setItemArray(itemArray.filter((data, indexItem)=>indexItem !== index));\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    const handleCompleteItem = (index, id)=>{\n        _config_apolloConfig__WEBPACK_IMPORTED_MODULE_3__.client.mutate({\n            mutation: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject3()),\n            variables: {\n                id: id,\n                is_completed: true\n            }\n        }).then((res)=>{\n            console.log(res.data.update_todos.returning);\n            setItemArray(itemArray.filter((item, indexx)=>index !== indexx));\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: handleAddTodo,\n                method: \"get\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"item\",\n                        onChange: (e)=>setItemName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: itemArray.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: item.item\n                            }, item.id, false, {\n                                fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleDeleteItem(index, item.id),\n                                children: \"Del\"\n                            }, item.item, false, {\n                                fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleCompleteItem(index, item.id),\n                                children: \"complete\"\n                            }, index, false, {\n                                fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                                lineNumber: 134,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harshithkumar/test-gluestack-app/web/pages/Home.tsx\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, undefined);\n};\n_s(home, \"EqjpqThW8AW+yO6H1Kqy+Fa6H9I=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBQzNDLHFCQUNFLDhEQUFDVTs7MENBQ0MsOERBQUNZOzBDQUFpQnpCLEtBQUtBLElBQUk7K0JBQW5CQSxLQUFLSSxFQUFFOzs7OzswQ0FDZiw4REFBQ21CO2dDQUVDRyxTQUFTLElBQU14QixpQkFBaUJDLE9BQU9ILEtBQUtJLEVBQUU7MENBQy9DOytCQUZNSixLQUFLQSxJQUFJOzs7OzswQ0FLaEIsOERBQUN1QjtnQ0FFQ0csU0FBUyxJQUFNbEIsbUJBQW1CTCxPQUFPSCxLQUFLSSxFQUFFOzBDQUNqRDsrQkFGTUQ7Ozs7Ozt1QkFUQ0gsS0FBS0ksRUFBRTs7Ozs7Z0JBZ0JyQjs7Ozs7Ozs7Ozs7O0FBSVI7R0E3SU16QjtBQStJTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Ib21lLnRzeD8zMzg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vY29uZmlnL2Fwb2xsb0NvbmZpZ1wiO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtpdGVtTmFtZSwgc2V0SXRlbU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpdGVtQXJyYXksIHNldEl0ZW1BcnJheV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoYW5kbGVEaXNwbGF5VG9kb0l0ZW1zKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVEaXNwbGF5VG9kb0l0ZW1zID0gKCkgPT4ge1xuICAgIGNsaWVudFxuICAgICAgLnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IGdxbGBcbiAgICAgICAgICBxdWVyeSBNeVF1ZXJ5IHtcbiAgICAgICAgICAgIHRvZG9zKHdoZXJlOiB7IGlzX2NvbXBsZXRlZDogeyBfZXE6IGZhbHNlIH0gfSkge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgIGlzX2NvbXBsZXRlZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLnRvZG9zKTtcbiAgICAgICAgc2V0SXRlbUFycmF5KHJlcy5kYXRhLnRvZG9zKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkVG9kbyA9IChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xpZW50XG4gICAgICAubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgICBtdXRhdGlvbiBNeU11dGF0aW9uKCRpdGVtOiBTdHJpbmchKSB7XG4gICAgICAgICAgICBpbnB1dHZhbGlkYXRpb24oaW5wdXQ6IHsgaXRlbTogXCJcIiB9KSB7XG4gICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgICAgdmFyaWFibGVzOiB7IGl0ZW06IGl0ZW1OYW1lIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmluc2VydF90b2Rvc19vbmUpO1xuXG4gICAgICAgIHNldEl0ZW1BcnJheShbLi4uaXRlbUFycmF5LCByZXMuZGF0YS5pbnNlcnRfdG9kb3Nfb25lXSk7XG4gICAgICAgIHNldEl0ZW1OYW1lKFwiXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVJdGVtID0gKGluZGV4OiBudW1iZXIsIGlkOiBudW1iZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgY2xpZW50XG4gICAgICAubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgICBtdXRhdGlvbiBNeU11dGF0aW9uKCRpdGVtSWQ6IEludCEpIHtcbiAgICAgICAgICAgIGRlbGV0ZV90b2Rvc19ieV9wayhpZDogJGl0ZW1JZCkge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgIGlzX2NvbXBsZXRlZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgICAgdmFyaWFibGVzOiB7IGl0ZW1JZDogaWQgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlZFwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgc2V0SXRlbUFycmF5KFxuICAgICAgICAgIGl0ZW1BcnJheS5maWx0ZXIoKGRhdGEsIGluZGV4SXRlbSkgPT4gaW5kZXhJdGVtICE9PSBpbmRleClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29tcGxldGVJdGVtID0gKGluZGV4OiBudW1iZXIsIGlkOiBudW1iZXIpID0+IHtcbiAgICBjbGllbnRcbiAgICAgIC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgICAgIG11dGF0aW9uIE15TXV0YXRpb24oJGlkOiBJbnQhLCAkaXNfY29tcGxldGVkOiBCb29sZWFuISkge1xuICAgICAgICAgICAgdXBkYXRlX3RvZG9zKFxuICAgICAgICAgICAgICB3aGVyZTogeyBpZDogeyBfZXE6ICRpZCB9IH1cbiAgICAgICAgICAgICAgX3NldDogeyBpc19jb21wbGV0ZWQ6ICRpc19jb21wbGV0ZWQgfVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybmluZyB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgaXNfY29tcGxldGVkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgICAgIHZhcmlhYmxlczogeyBpZDogaWQsIGlzX2NvbXBsZXRlZDogdHJ1ZSB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEudXBkYXRlX3RvZG9zLnJldHVybmluZyk7XG4gICAgICAgIHNldEl0ZW1BcnJheShpdGVtQXJyYXkuZmlsdGVyKChpdGVtLCBpbmRleHgpID0+IGluZGV4ICE9PSBpbmRleHgpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVBZGRUb2RvfSBtZXRob2Q9XCJnZXRcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaXRlbVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdj5cbiAgICAgICAge2l0ZW1BcnJheS5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgIDxwIGtleT17aXRlbS5pZH0+e2l0ZW0uaXRlbX08L3A+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaXRlbX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVJdGVtKGluZGV4LCBpdGVtLmlkKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERlbFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29tcGxldGVJdGVtKGluZGV4LCBpdGVtLmlkKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIGNvbXBsZXRlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNsaWVudCIsImdxbCIsImhvbWUiLCJpdGVtTmFtZSIsInNldEl0ZW1OYW1lIiwiaXRlbUFycmF5Iiwic2V0SXRlbUFycmF5IiwiaGFuZGxlRGlzcGxheVRvZG9JdGVtcyIsInF1ZXJ5IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidG9kb3MiLCJjYXRjaCIsImVyciIsImhhbmRsZUFkZFRvZG8iLCJlIiwicHJldmVudERlZmF1bHQiLCJtdXRhdGUiLCJtdXRhdGlvbiIsInZhcmlhYmxlcyIsIml0ZW0iLCJpbnNlcnRfdG9kb3Nfb25lIiwiaGFuZGxlRGVsZXRlSXRlbSIsImluZGV4IiwiaWQiLCJpdGVtSWQiLCJmaWx0ZXIiLCJpbmRleEl0ZW0iLCJoYW5kbGVDb21wbGV0ZUl0ZW0iLCJpc19jb21wbGV0ZWQiLCJ1cGRhdGVfdG9kb3MiLCJyZXR1cm5pbmciLCJpbmRleHgiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJtZXRob2QiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJtYXAiLCJwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Home.tsx\n"));

/***/ })

});