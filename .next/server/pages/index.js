"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nlet MongoClient = __webpack_require__(/*! mongodb */ \"mongodb\").MongoClient;\nlet connectionUrl = \"mongodb+srv://doguito:EzpzVdbQCXukd7i5@cluster0.yq6es.mongodb.net/crud?retryWrites=true&w=majority\";\nlet obj = {\n    \"id\": \"dados.id\"\n};\nconsole.log(\"OBJ: \" + obj);\nMongoClient.connect(connectionUrl, function(err1, client) {\n    if (err1) throw err1;\n    console.log(\"Connected correctly to server\");\n    var db = client.db('crud');\n    db.collection(\"doguito\").insertOne(obj, function(err, res) {\n        if (err) throw err;\n        console.log(\"1 message inserted\");\n        client.close();\n    });\n});\nfunction Home() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\luana\\\\projetos-pessoais\\\\alura-crud-js\\\\CRUDoguito\\\\pages\\\\index.js\",\n            lineNumber: 25,\n            columnNumber: 12\n        },\n        __self: this,\n        children: \" Home \"\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsR0FBRyxDQUFDQSxXQUFXLEdBQUdDLHlEQUE4QjtBQUNoRCxHQUFHLENBQUNDLGFBQWEsR0FBRyxDQUFvRztBQUV4SCxHQUFHLENBQUNDLEdBQUcsR0FBRyxDQUFDO0lBQ1AsQ0FBSSxLQUFFLENBQVU7QUFDcEIsQ0FBQztBQUVEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFPLFNBQUdGLEdBQUc7QUFFekJILFdBQVcsQ0FBQ00sT0FBTyxDQUFDSixhQUFhLEVBQUUsUUFBUSxDQUFDSyxJQUFHLEVBQUVDLE1BQU0sRUFBRSxDQUFDO0lBQ3RELEVBQUUsRUFBRUQsSUFBRyxFQUFFLEtBQUssQ0FBQ0EsSUFBRztJQUVsQkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBK0I7SUFFM0MsR0FBRyxDQUFDSSxFQUFFLEdBQUdELE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLENBQU07SUFFekJBLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLENBQVMsVUFBRUMsU0FBUyxDQUFDUixHQUFHLEVBQUUsUUFBUSxDQUFDSSxHQUFHLEVBQUVLLEdBQUcsRUFBRSxDQUFDO1FBQ3hELEVBQUUsRUFBRUwsR0FBRyxFQUFFLEtBQUssQ0FBQ0EsR0FBRztRQUNsQkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBb0I7UUFDaENHLE1BQU0sQ0FBQ0ssS0FBSztJQUNoQixDQUFDO0FBQ0wsQ0FBQztTQUVRQyxJQUFJLEdBQUcsQ0FBQztJQUNiLE1BQU0sc0VBQUVDLENBQUc7Ozs7Ozs7a0JBQUUsQ0FBTTs7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWluLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgTW9uZ29DbGllbnQgPSByZXF1aXJlKCdtb25nb2RiJykuTW9uZ29DbGllbnQ7XHJcbmxldCBjb25uZWN0aW9uVXJsID0gXCJtb25nb2RiK3NydjovL2RvZ3VpdG86RXpwelZkYlFDWHVrZDdpNUBjbHVzdGVyMC55cTZlcy5tb25nb2RiLm5ldC9jcnVkP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiO1xyXG5cclxubGV0IG9iaiA9IHtcclxuICAgIFwiaWRcIjogXCJkYWRvcy5pZFwiXHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKFwiT0JKOiBcIiArIG9iailcclxuXHJcbk1vbmdvQ2xpZW50LmNvbm5lY3QoY29ubmVjdGlvblVybCwgZnVuY3Rpb24oZXJyLCBjbGllbnQpIHtcclxuICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCBjb3JyZWN0bHkgdG8gc2VydmVyXCIpO1xyXG5cclxuICAgIHZhciBkYiA9IGNsaWVudC5kYignY3J1ZCcpXHJcblxyXG4gICAgZGIuY29sbGVjdGlvbihcImRvZ3VpdG9cIikuaW5zZXJ0T25lKG9iaiwgZnVuY3Rpb24oZXJyLCByZXMpIHtcclxuICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIxIG1lc3NhZ2UgaW5zZXJ0ZWRcIik7XHJcbiAgICAgICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gICAgcmV0dXJuIDxkaXYgPiBIb21lIDwgL2Rpdj5cclxufSJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInJlcXVpcmUiLCJjb25uZWN0aW9uVXJsIiwib2JqIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJlcnIiLCJjbGllbnQiLCJkYiIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJyZXMiLCJjbG9zZSIsIkhvbWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();