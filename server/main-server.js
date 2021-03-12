module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var volleyball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! volleyball */ \"volleyball\");\n/* harmony import */ var volleyball__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(volleyball__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routers/index */ \"./server/routers/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ \"./server/config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_6__);\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n\n\n\n\n\nvar currentRoot = process.cwd();\napp.use(volleyball__WEBPACK_IMPORTED_MODULE_2___default.a);\napp.set('view engine', 'pug');\napp.set('views', \"\".concat(currentRoot).concat(_config__WEBPACK_IMPORTED_MODULE_4___default.a.paths.server_pages));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.urlencoded({\n  extended: true\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](\"\".concat(currentRoot, \"/dist\")));\napp.use(function (err, req, res, next) {\n  res.status(err.status || 500).send(err.message || 'Internal server error.');\n});\napp = Object(_routers_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(app);\nvar server = Object(http__WEBPACK_IMPORTED_MODULE_6__[\"createServer\"])(app);\nserver.listen(process.env.PORT || 3001, function () {\n  console.log(\"Server is running on port 3001\");\n});\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ }),

/***/ "./server/config.js":
/*!**************************!*\
  !*** ./server/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(/*! path */ \"path\");\n\nvar appRoot = path.resolve(__dirname);\nvar env_config = {\n  paths: {\n    server_pages: path.join(appRoot, 'server/server_pages')\n  },\n  isProd: \"development\" === 'production'\n}; // Return the env settings\n\nmodule.exports = env_config;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server/config.js?");

/***/ }),

/***/ "./server/routers/index.js":
/*!*********************************!*\
  !*** ./server/routers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./server/config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_StateProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/StateProvider */ \"./src/StateProvider.js\");\n/* harmony import */ var _src_SSRRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/SSRRoutes */ \"./src/SSRRoutes.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n // var ReactDomString = require(\"../../dist/main-server\");\n\n\n\n\n\nvar DEALTYPES = {\n  EXTRA: \"EXTRA\",\n  DISCOUNT: \"DISCOUNT\"\n};\nvar initState = {\n  rules: [{\n    clientCode: \"SB\",\n    rules: [{\n      adCode: \"CLASSIC\",\n      dealSpecs: [{\n        type: DEALTYPES.EXTRA,\n        specs: {\n          buy: 2,\n          take: 3\n        }\n      }]\n    }]\n  }, {\n    clientCode: \"ACR\",\n    rules: [{\n      adCode: \"STANDOUT\",\n      dealSpecs: [{\n        type: DEALTYPES.DISCOUNT,\n        specs: {\n          discountPrice: 299.99\n        }\n      }]\n    }]\n  }, {\n    clientCode: \"MY\",\n    rules: [{\n      adCode: \"PREMIUM\",\n      dealSpecs: [{\n        type: DEALTYPES.DISCOUNT,\n        specs: {\n          discountPrice: 389.99\n        }\n      }, {\n        type: DEALTYPES.EXTRA,\n        specs: {\n          buy: 4,\n          take: 5\n        }\n      }]\n    }]\n  }],\n  ads: [{\n    code: \"CLASSIC\",\n    name: \"Classic Ad\",\n    description: \"Offers the most basic level of advertisement\",\n    price: 269.99\n  }, {\n    code: \"STANDOUT\",\n    name: \"Stand out Ad\",\n    description: \"Allows advertisers to use a company logo and use a longer presentation text\",\n    price: 322.99\n  }, {\n    code: \"PREMIUM\",\n    name: \"Premium Ad\",\n    description: \"Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility\",\n    price: 394.99\n  }]\n};\n\nvar routers = function routers(app) {\n  var ReactDomString = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_StateProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    initState: initState\n  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_SSRRoutes__WEBPACK_IMPORTED_MODULE_4__[\"SSRRoutes\"], null)));\n  app.use(\"/home\", function (req, res, next) {\n    res.render('index', {\n      ReactDom: ReactDomString,\n      initData: JSON.stringify(initState)\n    });\n    next();\n  });\n  return app;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (routers);\n\n//# sourceURL=webpack:///./server/routers/index.js?");

/***/ }),

/***/ "./src/SSRRoutes.js":
/*!**************************!*\
  !*** ./src/SSRRoutes.js ***!
  \**************************/
/*! exports provided: SSRRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SSRRoutes\", function() { return SSRRoutes; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/Home */ \"./src/components/home/Home.js\");\n\n\n\nvar SSRRoutes = function SSRRoutes() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"StaticRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n//# sourceURL=webpack:///./src/SSRRoutes.js?");

/***/ }),

/***/ "./src/StateProvider.js":
/*!******************************!*\
  !*** ./src/StateProvider.js ***!
  \******************************/
/*! exports provided: StateContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StateContext\", function() { return StateContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer_Reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer/Reducer */ \"./src/reducer/Reducer.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar StateContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext('globalContext');\n\nvar StateProvider = function StateProvider(props) {\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(_reducer_Reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], props.initState),\n      _useReducer2 = _slicedToArray(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StateContext.Provider, {\n    value: {\n      state: state,\n      dispatch: dispatch\n    }\n  }, props.children);\n};\n\nStateProvider.propTypes = {\n  initState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (StateProvider);\n\n//# sourceURL=webpack:///./src/StateProvider.js?");

/***/ }),

/***/ "./src/actions/ActionTypes.js":
/*!************************************!*\
  !*** ./src/actions/ActionTypes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ActionTypes = {\n  NEXT_STEP: 'NEXT_STEP',\n  PRE_STEP: 'PRE_STEP'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActionTypes);\n\n//# sourceURL=webpack:///./src/actions/ActionTypes.js?");

/***/ }),

/***/ "./src/components/home/Home.js":
/*!*************************************!*\
  !*** ./src/components/home/Home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StateProvider */ \"./src/StateProvider.js\");\n/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePage */ \"./src/components/home/HomePage.js\");\n\n\n\n\n\nvar Home = function Home(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StateProvider__WEBPACK_IMPORTED_MODULE_2__[\"StateContext\"].Consumer, null, function (context) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomePage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      context: context\n    });\n  });\n};\n\nHome.propTypes = {\n  initData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/components/home/Home.js?");

/***/ }),

/***/ "./src/components/home/Home.style.js":
/*!*******************************************!*\
  !*** ./src/components/home/Home.style.js ***!
  \*******************************************/
/*! exports provided: Heading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Heading\", function() { return Heading; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({\n  displayName: \"Homestyle__Heading\",\n  componentId: \"bedjur-0\"\n})([\"display:block;\"]);\n\n//# sourceURL=webpack:///./src/components/home/Home.style.js?");

/***/ }),

/***/ "./src/components/home/HomePage.js":
/*!*****************************************!*\
  !*** ./src/components/home/HomePage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.style */ \"./src/components/home/Home.style.js\");\n\n\n\n\nvar HomePage = function HomePage(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, props.context.state.ads.map(function (item) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      key: item.code\n    }, item.name);\n  }));\n};\n\nHomePage.propTypes = {\n  context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./src/components/home/HomePage.js?");

/***/ }),

/***/ "./src/reducer/Reducer.js":
/*!********************************!*\
  !*** ./src/reducer/Reducer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/ActionTypes */ \"./src/actions/ActionTypes.js\");\n/* harmony import */ var _utils_CommonUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/CommonUtils */ \"./src/utils/CommonUtils.js\");\n\n\n\nvar Reducer = function Reducer(state, action) {\n  var newState = Object(_utils_CommonUtils__WEBPACK_IMPORTED_MODULE_1__[\"DeepClone\"])(state);\n\n  switch (action.type) {\n    case _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].NEXT_STEP:\n      newState.currentStep++;\n      return newState;\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reducer);\n\n//# sourceURL=webpack:///./src/reducer/Reducer.js?");

/***/ }),

/***/ "./src/utils/CommonUtils.js":
/*!**********************************!*\
  !*** ./src/utils/CommonUtils.js ***!
  \**********************************/
/*! exports provided: DeepClone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DeepClone\", function() { return DeepClone; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urijs */ \"urijs\");\n/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar DeepClone = function DeepClone(o) {\n  var output = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(o);\n\n  return output;\n};\n\n//# sourceURL=webpack:///./src/utils/CommonUtils.js?");

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./server/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./server/app.js */\"./server/app.js\");\n\n\n//# sourceURL=webpack:///multi_./server/app.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ }),

/***/ "urijs":
/*!************************!*\
  !*** external "urijs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"urijs\");\n\n//# sourceURL=webpack:///external_%22urijs%22?");

/***/ }),

/***/ "volleyball":
/*!*****************************!*\
  !*** external "volleyball" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"volleyball\");\n\n//# sourceURL=webpack:///external_%22volleyball%22?");

/***/ })

/******/ });