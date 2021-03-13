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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var volleyball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! volleyball */ \"volleyball\");\n/* harmony import */ var volleyball__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(volleyball__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routers/index */ \"./server/routers/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ \"./server/config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_6__);\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n\n\n\n\n\nvar currentRoot = process.cwd();\napp.use(volleyball__WEBPACK_IMPORTED_MODULE_2___default.a);\napp.set('view engine', 'pug');\napp.set('views', \"\".concat(currentRoot).concat(_config__WEBPACK_IMPORTED_MODULE_4___default.a.paths.serverPages));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.urlencoded({\n  extended: true\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](\"\".concat(currentRoot, \"/dist\")));\napp.use(function (err, req, res, next) {\n  res.status(err.status || 500).send(err.message || 'Internal server error.');\n});\napp = Object(_routers_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(app);\nvar server = Object(http__WEBPACK_IMPORTED_MODULE_6__[\"createServer\"])(app);\nserver.listen(process.env.PORT || 3001, function () {\n  console.log(\"Server is running on port 3001\");\n});\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ }),

/***/ "./server/config.js":
/*!**************************!*\
  !*** ./server/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(/*! path */ \"path\");\n\nvar appRoot = path.resolve(__dirname);\nvar env_config = {\n  paths: {\n    serverPages: path.join(appRoot, 'server/serverPages')\n  },\n  isProd: \"development\" === 'production'\n}; // Return the env settings\n\nmodule.exports = env_config;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server/config.js?");

/***/ }),

/***/ "./server/mockData/mockData.js":
/*!*************************************!*\
  !*** ./server/mockData/mockData.js ***!
  \*************************************/
/*! exports provided: initState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initState\", function() { return initState; });\nvar DEALTYPES = {\n  EXTRA: \"EXTRA\",\n  DISCOUNT: \"DISCOUNT\"\n};\nvar initState = {\n  clients: [{\n    clientCode: \"SB\",\n    fullName: \"SecondBite\"\n  }, {\n    clientCode: \"ACR\",\n    fullName: \"Axil Coffee Roasters\"\n  }, {\n    clientCode: \"MY\",\n    fullName: \"MYER\"\n  }],\n  rules: [{\n    clientCode: \"SB\",\n    rules: [{\n      adCode: \"CLASSIC\",\n      dealSpecs: [{\n        type: DEALTYPES.EXTRA,\n        specs: {\n          buy: 2,\n          take: 3\n        }\n      }]\n    }]\n  }, {\n    clientCode: \"ACR\",\n    rules: [{\n      adCode: \"STANDOUT\",\n      dealSpecs: [{\n        type: DEALTYPES.DISCOUNT,\n        specs: {\n          discountPrice: 299.99\n        }\n      }]\n    }]\n  }, {\n    clientCode: \"MY\",\n    rules: [{\n      adCode: \"PREMIUM\",\n      dealSpecs: [{\n        type: DEALTYPES.DISCOUNT,\n        specs: {\n          discountPrice: 389.99\n        }\n      }, {\n        type: DEALTYPES.EXTRA,\n        specs: {\n          buy: 4,\n          take: 5\n        }\n      }]\n    }]\n  }],\n  ads: [{\n    code: \"CLASSIC\",\n    name: \"Classic Ad\",\n    description: \"Offers the most basic level of advertisement\",\n    price: 269.99\n  }, {\n    code: \"STANDOUT\",\n    name: \"Stand out Ad\",\n    description: \"Allows advertisers to use a company logo and use a longer presentation text\",\n    price: 322.99\n  }, {\n    code: \"PREMIUM\",\n    name: \"Premium Ad\",\n    description: \"Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility\",\n    price: 394.99\n  }]\n};\n\n//# sourceURL=webpack:///./server/mockData/mockData.js?");

/***/ }),

/***/ "./server/routers/index.js":
/*!*********************************!*\
  !*** ./server/routers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_StateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/StateProvider */ \"./src/StateProvider.js\");\n/* harmony import */ var _src_SSRRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/SSRRoutes */ \"./src/SSRRoutes.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mockData_mockData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mockData/mockData */ \"./server/mockData/mockData.js\");\n\n\n\n\n\n\nvar routers = function routers(app) {\n  var ReactDomString = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_0__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_StateProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    initState: _mockData_mockData__WEBPACK_IMPORTED_MODULE_4__[\"initState\"]\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_SSRRoutes__WEBPACK_IMPORTED_MODULE_2__[\"SSRRoutes\"], null)));\n  app.use(\"/home\", function (req, res, next) {\n    res.render('index', {\n      ReactDom: ReactDomString,\n      initData: JSON.stringify(_mockData_mockData__WEBPACK_IMPORTED_MODULE_4__[\"initState\"])\n    });\n    next();\n  });\n  app.use(\"/signin\", function (req, res, next) {\n    res.redirect('/home');\n    next();\n  });\n  app.use(\"/checkout\", function (req, res, next) {\n    res.redirect('/home');\n    next();\n  });\n  return app;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (routers);\n\n//# sourceURL=webpack:///./server/routers/index.js?");

/***/ }),

/***/ "./src/ClientRoutes.js":
/*!*****************************!*\
  !*** ./src/ClientRoutes.js ***!
  \*****************************/
/*! exports provided: history, ClientRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"history\", function() { return history; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ClientRoutes\", function() { return ClientRoutes; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/Home */ \"./src/components/home/Home.js\");\n/* harmony import */ var _components_singin_SingIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/singin/SingIn */ \"./src/components/singin/SingIn.js\");\n/* harmony import */ var _components_checkout_CheckOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/checkout/CheckOut */ \"./src/components/checkout/CheckOut.js\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ \"history\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar history =  false ? undefined : {};\nvar ClientRoutes = function ClientRoutes() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Router\"], {\n    history: history\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/home\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/signin\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_singin_SingIn__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/checkout\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_checkout_CheckOut__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))));\n};\n\n//# sourceURL=webpack:///./src/ClientRoutes.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StateContext\", function() { return StateContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer_Reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer/Reducer */ \"./src/reducer/Reducer.js\");\n/* harmony import */ var _StepConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StepConfig */ \"./src/StepConfig.js\");\n/* harmony import */ var _ClientRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClientRoutes */ \"./src/ClientRoutes.js\");\n/* harmony import */ var _utils_CommonUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/CommonUtils */ \"./src/utils/CommonUtils.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nvar StateContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(\"globalContext\");\n\nvar StateProvider = function StateProvider(props) {\n  var shoppingCart =  false ? undefined : [];\n  var h = _ClientRoutes__WEBPACK_IMPORTED_MODULE_4__[\"history\"];\n  var currentStep = Object(_StepConfig__WEBPACK_IMPORTED_MODULE_3__[\"GetStepByIndex\"])(1, _StepConfig__WEBPACK_IMPORTED_MODULE_3__[\"InitSteps\"]);\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(_reducer_Reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    initState: props.initState,\n    currentStep: 1,\n    currentPath: currentStep ? currentStep.path : \"/home\",\n    stepState: _StepConfig__WEBPACK_IMPORTED_MODULE_3__[\"InitSteps\"],\n    shoppingCart: shoppingCart\n  }),\n      _useReducer2 = _slicedToArray(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n     false && false;\n  }, [state.currentStep]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StateContext.Provider, {\n    value: {\n      state: state,\n      dispatch: dispatch\n    }\n  }, props.children);\n};\n\nStateProvider.propTypes = {\n  initState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (StateProvider);\n\n//# sourceURL=webpack:///./src/StateProvider.js?");

/***/ }),

/***/ "./src/StepConfig.js":
/*!***************************!*\
  !*** ./src/StepConfig.js ***!
  \***************************/
/*! exports provided: StepNames, InitSteps, GetStepByIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StepNames\", function() { return StepNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InitSteps\", function() { return InitSteps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetStepByIndex\", function() { return GetStepByIndex; });\nvar StepNames = {\n  Home: 'Home',\n  SignIn: 'SignIn',\n  CheckOut: 'CheckOut'\n};\nvar InitSteps = [{\n  index: 1,\n  name: StepNames.Home,\n  path: \"/home\",\n  data: null\n}, {\n  index: 2,\n  name: StepNames.SignIn,\n  path: \"/signin\",\n  data: null\n}, {\n  index: 3,\n  name: StepNames.CheckOut,\n  path: \"/checkout\",\n  data: null\n}];\nvar GetStepByIndex = function GetStepByIndex(index, steps) {\n  var step = steps.find(function (s) {\n    return s.index === index;\n  });\n  return step ? step : null;\n};\n\n//# sourceURL=webpack:///./src/StepConfig.js?");

/***/ }),

/***/ "./src/actions/ActionTypes.js":
/*!************************************!*\
  !*** ./src/actions/ActionTypes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ActionTypes = {\n  NEXT_STEP: 'NEXT_STEP',\n  PRE_STEP: 'PRE_STEP',\n  SAVE_STEP_DATA: 'SAVE_STEP_DATA',\n  GO_TO_STEP: 'GO_TO_STEP',\n  ADD_TO_CART: 'ADD_TO_CART'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActionTypes);\n\n//# sourceURL=webpack:///./src/actions/ActionTypes.js?");

/***/ }),

/***/ "./src/api/ApiConsumer.js":
/*!********************************!*\
  !*** ./src/api/ApiConsumer.js ***!
  \********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\nvar Login = function Login(clients, userName) {\n  return new Promise(function (res, rej) {\n    res(clients.includes(userName));\n    rej(new Error(\"Log in error\"));\n  });\n};\n\n//# sourceURL=webpack:///./src/api/ApiConsumer.js?");

/***/ }),

/***/ "./src/components/checkout/CheckOut.js":
/*!*********************************************!*\
  !*** ./src/components/checkout/CheckOut.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StateProvider */ \"./src/StateProvider.js\");\n/* harmony import */ var _CheckOutPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckOutPage */ \"./src/components/checkout/CheckOutPage.js\");\n\n\n\n\n\nvar CheckOut = function CheckOut(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StateProvider__WEBPACK_IMPORTED_MODULE_2__[\"StateContext\"].Consumer, null, function (context) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CheckOutPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      dispatch: context.dispatch\n    });\n  });\n};\n\nCheckOut.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckOut);\n\n//# sourceURL=webpack:///./src/components/checkout/CheckOut.js?");

/***/ }),

/***/ "./src/components/checkout/CheckOutPage.js":
/*!*************************************************!*\
  !*** ./src/components/checkout/CheckOutPage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/ActionTypes */ \"./src/actions/ActionTypes.js\");\n/* harmony import */ var _shared_atoms_buttons_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/atoms/buttons/Buttons */ \"./src/components/shared/atoms/buttons/Buttons.js\");\n\n\n\n\n\nvar CheckOutPage = function CheckOutPage(props) {\n  var buyMoreOnClick = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    props.dispatch({\n      type: _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GO_TO_STEP,\n      payload: 1\n    });\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_atoms_buttons_Buttons__WEBPACK_IMPORTED_MODULE_3__[\"SecondaryButton\"], {\n    isSmall: true,\n    color: {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.primaryBlue,\n    value: \"Buy more ads\",\n    onClickHandler: buyMoreOnClick\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }));\n};\n\nCheckOutPage.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckOutPage);\n\n//# sourceURL=webpack:///./src/components/checkout/CheckOutPage.js?");

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
/*! exports provided: Heading, AdCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Heading\", function() { return Heading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AdCard\", function() { return AdCard; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({\n  displayName: \"Homestyle__Heading\",\n  componentId: \"bedjur-0\"\n})([\"font-size:\", \";color:\", \";\"], {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.fontSize.h1, {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.primaryBlue);\nvar AdCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"Homestyle__AdCard\",\n  componentId: \"bedjur-1\"\n})([\"display:inline-flex;position:relative;border:1px solid #ddd;justify-content:flex-start;align-items:center;flex-direction:column;width:95%;margin:auto;min-height:300px;height:auto;padding:40px 15px 60px;border-radius:\", \";.ad-name{text-align:center;color:\", \";}.price{text-align:center;color:hsl(226,64.9%,29%);font-size:\", \";}.desc{text-align:center;color:hsl(0,0,50%);font-size:\", \";}> button{position:absolute;bottom:20px;}\"], {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.styles.borderRadius1, {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.secondary, {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.fontSize.desktop.h2, {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.fontSize.desktop.small);\n\n//# sourceURL=webpack:///./src/components/home/Home.style.js?");

/***/ }),

/***/ "./src/components/home/HomePage.js":
/*!*****************************************!*\
  !*** ./src/components/home/HomePage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.style */ \"./src/components/home/Home.style.js\");\n/* harmony import */ var _shared_atoms_buttons_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/atoms/buttons/Buttons */ \"./src/components/shared/atoms/buttons/Buttons.js\");\n/* harmony import */ var _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/ActionTypes */ \"./src/actions/ActionTypes.js\");\n\n\n\n\n\n\nvar HomePage = function HomePage(props) {\n  var buyNowOnclick = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (stepData) {\n    props.context.dispatch({\n      type: _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_4__[\"default\"].SAVE_STEP_DATA,\n      payload: stepData\n    });\n    props.context.dispatch({\n      type: _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ADD_TO_CART,\n      payload: stepData\n    });\n    props.context.dispatch({\n      type: _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_4__[\"default\"].NEXT_STEP\n    });\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_style__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n    className: \"text-center\"\n  }, \"Job Ads\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, props.context.state.initState.ads.map(function (item) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: item.code,\n      className: \"col-4 text-center\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_style__WEBPACK_IMPORTED_MODULE_2__[\"AdCard\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n      className: \"ad-name\"\n    }, item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n      className: \"price\"\n    }, \"$\", item.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"desc\"\n    }, item.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_atoms_buttons_Buttons__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      color: {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.primaryBlue,\n      value: \"Buy now\",\n      onClickHandler: function onClickHandler() {\n        return buyNowOnclick(item);\n      }\n    })));\n  })));\n};\n\nHomePage.propTypes = {\n  context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./src/components/home/HomePage.js?");

/***/ }),

/***/ "./src/components/shared/atoms/buttons/Buttons.js":
/*!********************************************************!*\
  !*** ./src/components/shared/atoms/buttons/Buttons.js ***!
  \********************************************************/
/*! exports provided: Button, SecondaryButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SecondaryButton\", function() { return SecondaryButton; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.styles */ \"./src/components/shared/atoms/buttons/button.styles.js\");\n\n\n\n\nvar preventDoubleClick = function preventDoubleClick(target, handler) {\n  new Promise(function (res, rej) {\n    if (!target.disabled) {\n      target.disabled = true;\n      handler && handler();\n    }\n\n    setTimeout(function () {\n      return res(\"OK\");\n    }, 1000);\n  }).then(function (result) {\n    if (result == \"OK\") {\n      target.disabled = false;\n    }\n  });\n};\n\nvar Button = function Button(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_styles__WEBPACK_IMPORTED_MODULE_2__[\"SolidButton\"], {\n    onClick: function onClick(e) {\n      preventDoubleClick(e.target, props.onClickHandler);\n    },\n    width: props.width,\n    disabled: props.disabled,\n    disabledTransparent: props.disabledTransparent,\n    promote: props.promote ? true : false\n  }, props.value);\n};\nButton.propTypes = {\n  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  section: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  onClickHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  disabledTransparent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  promote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n};\nvar SecondaryButton = function SecondaryButton(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_styles__WEBPACK_IMPORTED_MODULE_2__[\"BlankButton\"], {\n    color: props.color,\n    bgColor: props.bgColor,\n    onClick: function onClick(e) {\n      preventDoubleClick(e.target, props.onClickHandler);\n    },\n    isSmall: props.isSmall,\n    iconStyle: props.iconStyle,\n    width: props.width\n  }, props.value, props.children);\n};\nSecondaryButton.propTypes = {\n  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  onClickHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  isSmall: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  bgColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  section: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n\n//# sourceURL=webpack:///./src/components/shared/atoms/buttons/Buttons.js?");

/***/ }),

/***/ "./src/components/shared/atoms/buttons/button.styles.js":
/*!**************************************************************!*\
  !*** ./src/components/shared/atoms/buttons/button.styles.js ***!
  \**************************************************************/
/*! exports provided: SolidButton, BlankButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SolidButton\", function() { return SolidButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlankButton\", function() { return BlankButton; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar SolidButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({\n  displayName: \"buttonstyles__SolidButton\",\n  componentId: \"e7xntx-0\"\n})([\"border-radius:50px;background-color:\", \";padding:11px 30px;height:46px;color:\", \";border:none;text-align:center;transition:background-color ease 0.3s;width:\", \";font-size:\", \";&:hover{cursor:\", \";background-color:\", \";}&:focus{outline:none;}\"], function (props) {\n  return props.disabledTransparent ? {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.disabledTransparent : props.disabled ? {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.disabled : props.promote ? {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.primary : {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.primaryBlue;\n}, function (props) {\n  return props.disabledTransparent ? {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.grayText : \"#fff\";\n}, function (props) {\n  return props.width;\n}, {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.fontSize.desktop.BT, function (props) {\n  return props.disabled ? 'not-allowed' : 'pointer';\n}, function (props) {\n  return props.disabledTransparent ? {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.disabledTransparent : props.disabled ? {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.disabled : props.promote ? {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.primaryDark : {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.primaryBlueDark;\n});\nvar BlankButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({\n  displayName: \"buttonstyles__BlankButton\",\n  componentId: \"e7xntx-1\"\n})([\"border-radius:50px;border:1px solid \", \";color:\", \";padding:\", \";text-align:center;transition:all ease 0.3s;background-color:\", \";width:\", \";font-size:\", \";&:hover{cursor:pointer;color:\", \";}&:focus{outline:none;}\"], function (props) {\n  return props.isSmall && props.color ? props.color : {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.secondary;\n}, function (props) {\n  return props.isSmall && props.color ? props.color : {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.secondary;\n}, function (props) {\n  return props.isSmall ? '7px 14px' : '10px 30px';\n}, function (props) {\n  return props.bgColor ? props.bgColor : \"rgba(255,255,255, 0)\";\n}, function (props) {\n  return props.width;\n}, function (props) {\n  return props.isSmall ? '12px' : {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.fontSize.desktop.BT;\n}, function (props) {\n  return props.isSmall && !props.color ? '#fff' : {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.secondary;\n});\n\n//# sourceURL=webpack:///./src/components/shared/atoms/buttons/button.styles.js?");

/***/ }),

/***/ "./src/components/shared/atoms/inputs/Inputs.js":
/*!******************************************************!*\
  !*** ./src/components/shared/atoms/inputs/Inputs.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _inputs_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputs.styles */ \"./src/components/shared/atoms/inputs/inputs.styles.js\");\n\n\n\n\nvar InputField = function InputField(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inputs_styles__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    type: \"text\",\n    tabIndex: props.tabIndex,\n    onChange: function onChange(e) {\n      return props.keyPressHandler(e);\n    },\n    onFocus: function onFocus(e) {\n      return props.onFocusHandler(e);\n    },\n    placeholder: props.placeHolder,\n    name: props.name\n  });\n};\n\nInputField.propTypes = {\n  placeHolder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  keyPressHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  onFocusHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputField);\n\n//# sourceURL=webpack:///./src/components/shared/atoms/inputs/Inputs.js?");

/***/ }),

/***/ "./src/components/shared/atoms/inputs/inputs.styles.js":
/*!*************************************************************!*\
  !*** ./src/components/shared/atoms/inputs/inputs.styles.js ***!
  \*************************************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return Input; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({\n  displayName: \"inputsstyles__Input\",\n  componentId: \"sc-1xs6epw-0\"\n})([\"height:56px;border-radius:6px;border:solid 1px \", \";padding:0 0 0 20px;width:100%;font-size:14px;&:invalid{box-shadow:none;}&:focus{outline:none;}border-radius:\", \";\"], {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.grayBorder, {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.styles.borderRadius1);\n\n//# sourceURL=webpack:///./src/components/shared/atoms/inputs/inputs.styles.js?");

/***/ }),

/***/ "./src/components/singin/SingIn.js":
/*!*****************************************!*\
  !*** ./src/components/singin/SingIn.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SingInPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingInPage */ \"./src/components/singin/SingInPage.js\");\n/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../StateProvider */ \"./src/StateProvider.js\");\n\n\n\n\n\nvar SingIn = function SingIn(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StateProvider__WEBPACK_IMPORTED_MODULE_3__[\"StateContext\"].Consumer, null, function (context) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingInPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      context: context\n    });\n  });\n};\n\nSingIn.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingIn);\n\n//# sourceURL=webpack:///./src/components/singin/SingIn.js?");

/***/ }),

/***/ "./src/components/singin/SingIn.styles.js":
/*!************************************************!*\
  !*** ./src/components/singin/SingIn.styles.js ***!
  \************************************************/
/*! exports provided: SignInForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SignInForm\", function() { return SignInForm; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar SignInForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"SingInstyles__SignInForm\",\n  componentId: \"sc-8vqfpg-0\"\n})([\"width:300px;margin:80px auto 0;text-align:left;> small{line-height:110%;font-size:\", \";color:hsl(226,64.9%,29%);margin-bottom:15px;display:block;}\"], {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.fontSize.small);\n\n//# sourceURL=webpack:///./src/components/singin/SingIn.styles.js?");

/***/ }),

/***/ "./src/components/singin/SingInPage.js":
/*!*********************************************!*\
  !*** ./src/components/singin/SingInPage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared_atoms_buttons_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/atoms/buttons/Buttons */ \"./src/components/shared/atoms/buttons/Buttons.js\");\n/* harmony import */ var _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/ActionTypes */ \"./src/actions/ActionTypes.js\");\n/* harmony import */ var _shared_atoms_inputs_Inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/atoms/inputs/Inputs */ \"./src/components/shared/atoms/inputs/Inputs.js\");\n/* harmony import */ var _SingIn_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SingIn.styles */ \"./src/components/singin/SingIn.styles.js\");\n/* harmony import */ var _api_ApiConsumer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/ApiConsumer */ \"./src/api/ApiConsumer.js\");\n/* harmony import */ var _utils_CommonUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/CommonUtils */ \"./src/utils/CommonUtils.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\nvar SingInPage = function SingInPage(props) {\n  var userNameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      _useState2 = _slicedToArray(_useState, 2),\n      user = _useState2[0],\n      setUser = _useState2[1];\n\n  var backOnClick = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    props.context.dispatch({\n      type: _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].PRE_STEP\n    });\n  });\n  var submit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (loginDetails) {\n    props.context.dispatch({\n      type: _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SAVE_STEP_DATA,\n      payload: loginDetails\n    });\n    props.context.dispatch({\n      type: _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].NEXT_STEP\n    });\n  });\n\n  var setUserValue = function setUserValue(e) {\n    setUser(e.target.value);\n  };\n\n  var logIn = function logIn() {\n    var clients = props.context.state.initState.clients.map(function (c) {\n      return c.clientCode;\n    });\n    Object(_api_ApiConsumer__WEBPACK_IMPORTED_MODULE_6__[\"Login\"])(clients, user).then(function (result) {\n      if (result) {\n        Object(_utils_CommonUtils__WEBPACK_IMPORTED_MODULE_7__[\"SetAuth\"])();\n        submit({\n          userName: user,\n          authenticated: result\n        });\n      } else {//Popup error handling here or log in errors\n      }\n    })[\"catch\"](function (e) {//Popup error handling here or log in errors\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (Object(_utils_CommonUtils__WEBPACK_IMPORTED_MODULE_7__[\"GetSessionStorage\"])(\"isAuth\") && Object(_utils_CommonUtils__WEBPACK_IMPORTED_MODULE_7__[\"GetSessionStorage\"])(\"isAuth\").isAuth) {\n      props.context.dispatch({\n        type: _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].NEXT_STEP\n      });\n    }\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_atoms_buttons_Buttons__WEBPACK_IMPORTED_MODULE_2__[\"SecondaryButton\"], {\n    isSmall: true,\n    color: {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.primaryBlue,\n    value: \"back\",\n    onClickHandler: backOnClick\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row text-center\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingIn_styles__WEBPACK_IMPORTED_MODULE_5__[\"SignInForm\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", null, \"Available accounts for now :\", props.context.state.initState.clients.map(function (client) {\n    return \"\".concat(client.clientCode, \" (\").concat(client.fullName, \") | \");\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_atoms_inputs_Inputs__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    innerRef: userNameRef,\n    placeHolder: \"User Name\",\n    name: \"name\",\n    keyPressHandler: setUserValue,\n    onFocusHandler: setUserValue\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_atoms_buttons_Buttons__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    color: {\"zindex\":{\"z1\":10,\"z2\":20,\"z3\":30,\"z4\":40,\"z5\":50,\"z6\":60,\"z7\":70,\"z8\":80,\"z9\":90,\"zmax\":10000001},\"colors\":{\"primary\":\"#ff7b00\",\"primaryDark\":\"#cb6200\",\"secondary\":\"#007cc2\",\"disabled\":\"#dddddd\",\"warning\":\"#ed1c24\",\"primaryBlue\":\"#007cc2\",\"primaryBlueDark\":\"#00639a\"},\"fontSize\":{\"desktop\":{\"h1\":\"42px\",\"h2\":\"32px\",\"h3\":\"24px\",\"h4\":\"22px\",\"h5\":\"18px\",\"p\":\"16px\",\"small\":\"14px\"},\"mobi\":{\"h1\":\"32px\",\"h2\":\"24px\",\"h3\":\"22px\",\"h4\":\"18px\",\"h5\":\"16px\",\"p\":\"14px\",\"small\":\"12px\"}},\"media\":{\"xxs\":\"380px\",\"xxs_m\":\"381px\",\"xs\":\"576px\",\"xs_m\":\"577px\",\"sm\":\"768px\",\"sm_m\":\"769px\",\"md\":\"992px\",\"md_m\":\"993px\"},\"styles\":{\"borderRadius1\":\"6px\",\"borderRadius2\":\"3px\"}}.colors.primaryBlue,\n    value: \"Log in\",\n    onClickHandler: logIn\n  }))));\n};\n\nSingInPage.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingInPage);\n\n//# sourceURL=webpack:///./src/components/singin/SingInPage.js?");

/***/ }),

/***/ "./src/reducer/Reducer.js":
/*!********************************!*\
  !*** ./src/reducer/Reducer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/ActionTypes */ \"./src/actions/ActionTypes.js\");\n/* harmony import */ var _utils_CommonUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/CommonUtils */ \"./src/utils/CommonUtils.js\");\n/* harmony import */ var _StepConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StepConfig */ \"./src/StepConfig.js\");\n\n\n\n\nvar Reducer = function Reducer(state, action) {\n  var newState = Object(_utils_CommonUtils__WEBPACK_IMPORTED_MODULE_1__[\"DeepClone\"])(state);\n  var cs = null;\n\n  switch (action.type) {\n    case _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SAVE_STEP_DATA:\n      newState.stepState = newState.stepState.map(function (s) {\n        if (s.index === newState.currentStep) {\n          s.data = action.payload;\n        }\n\n        return s;\n      });\n      return newState;\n\n    case _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ADD_TO_CART:\n      newState.shoppingCart.push(action.payload);\n      Object(_utils_CommonUtils__WEBPACK_IMPORTED_MODULE_1__[\"SetShoppingCart\"])(newState.shoppingCart);\n      return newState;\n\n    case _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].NEXT_STEP:\n      newState.currentStep++;\n      cs = Object(_StepConfig__WEBPACK_IMPORTED_MODULE_2__[\"GetStepByIndex\"])(newState.currentStep, newState.stepState);\n      newState.currentPath = cs.path;\n      return newState;\n\n    case _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PRE_STEP:\n      newState.currentStep--;\n      cs = Object(_StepConfig__WEBPACK_IMPORTED_MODULE_2__[\"GetStepByIndex\"])(newState.currentStep, newState.stepState);\n      newState.currentPath = cs.path;\n      return newState;\n\n    case _actions_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].GO_TO_STEP:\n      newState.currentStep = action.payload;\n      cs = Object(_StepConfig__WEBPACK_IMPORTED_MODULE_2__[\"GetStepByIndex\"])(action.payload, newState.stepState);\n      newState.currentPath = cs.path;\n      return newState;\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reducer);\n\n//# sourceURL=webpack:///./src/reducer/Reducer.js?");

/***/ }),

/***/ "./src/utils/CommonUtils.js":
/*!**********************************!*\
  !*** ./src/utils/CommonUtils.js ***!
  \**********************************/
/*! exports provided: DeepClone, SetAuth, GetSessionStorage, SetShoppingCart, IsEmptyObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DeepClone\", function() { return DeepClone; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SetAuth\", function() { return SetAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetSessionStorage\", function() { return GetSessionStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SetShoppingCart\", function() { return SetShoppingCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IsEmptyObject\", function() { return IsEmptyObject; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urijs */ \"urijs\");\n/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar DeepClone = function DeepClone(o) {\n  var output = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(o);\n\n  return output;\n};\nvar SetAuth = function SetAuth(name) {\n  if (sessionStorage !== undefined) {\n    sessionStorage.setItem(\"isAuth\", JSON.stringify({\n      isAuth: true,\n      userName: name\n    }));\n  }\n};\nvar GetSessionStorage = function GetSessionStorage(item) {\n  if (!IsEmptyObject(sessionStorage)) {\n    return JSON.parse(sessionStorage.getItem(item));\n  } else {\n    return null;\n  }\n};\nvar SetShoppingCart = function SetShoppingCart(shoppingCartList) {\n  if (sessionStorage !== undefined) {\n    sessionStorage.setItem(\"shoppingCart\", JSON.stringify(shoppingCartList));\n  }\n};\nvar IsEmptyObject = function IsEmptyObject(obj) {\n  return JSON.stringify(obj) === \"{}\" || JSON.stringify(obj) === \"[]\" || JSON.stringify(obj) === \"null\" || obj === \"\" || obj === null || obj === undefined;\n};\n\n//# sourceURL=webpack:///./src/utils/CommonUtils.js?");

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

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack:///external_%22history%22?");

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