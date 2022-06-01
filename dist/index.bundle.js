"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,4DAA4D;AAC9D","sourcesContent":["body {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fromUnixTime)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Number} unixTime - the given Unix timestamp (in seconds)
 * @returns {Date} the date
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * const result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */

function fromUnixTime(dirtyUnixTime) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyUnixTime);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(unixTime * 1000);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controllers/weather-app-controller.ts":
/*!***************************************************!*\
  !*** ./src/controllers/weather-app-controller.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/fromUnixTime/index.js");
/* harmony import */ var _models_weather_current__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/weather-current */ "./src/models/weather-current.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var WeatherAppController = /** @class */ (function () {
    function WeatherAppController(openWeatherApiWrapper, weatherCurrentController, locationInputView) {
        this.openWeatherApiWrapper = openWeatherApiWrapper;
        this.weatherCurrentController = weatherCurrentController;
        this.locationInputView = locationInputView;
    }
    WeatherAppController.prototype.setup = function () {
        this.locationInputView.bindSearch(this.setAll.bind(this));
        this.weatherCurrentController.weatherCurrentModel.bindOnUpdate(this.weatherCurrentController.weatherCurrentView.displayWeatherInfo.bind(this.weatherCurrentController.weatherCurrentView));
    };
    WeatherAppController.prototype.setAll = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var geocoding, weatherData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openWeatherApiWrapper.getGeocodingInfo(location)];
                    case 1:
                        geocoding = _a.sent();
                        if (!geocoding) return [3 /*break*/, 3];
                        console.log(geocoding);
                        return [4 /*yield*/, this.openWeatherApiWrapper.getOneCallData(geocoding.lat, geocoding.lon)];
                    case 2:
                        weatherData = _a.sent();
                        if (weatherData) {
                            console.log(weatherData);
                            this.setCurrentWeatherInfo(weatherData);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // TODO Change to take param of OneCall
    WeatherAppController.prototype.setCurrentWeatherInfo = function (weatherData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.weatherCurrentController.weatherCurrentModel.update(new _models_weather_current__WEBPACK_IMPORTED_MODULE_0__["default"]((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData.current.dt), weatherData.current.temp, weatherData.current.humidity, weatherData.current.wind_speed, weatherData.current.weather[0]));
                return [2 /*return*/];
            });
        });
    };
    return WeatherAppController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherAppController);


/***/ }),

/***/ "./src/controllers/weather-current-controller.ts":
/*!*******************************************************!*\
  !*** ./src/controllers/weather-current-controller.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var WeatherCurrentController = /** @class */ (function () {
    function WeatherCurrentController(weatherCurrentModel, weatherCurrentView) {
        this.weatherCurrentModel = weatherCurrentModel;
        this.weatherCurrentView = weatherCurrentView;
    }
    return WeatherCurrentController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherCurrentController);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _models_openweather_api_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/openweather-api-wrapper */ "./src/models/openweather-api-wrapper.ts");
/* harmony import */ var _controllers_weather_app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/weather-app-controller */ "./src/controllers/weather-app-controller.ts");
/* harmony import */ var _controllers_weather_current_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/weather-current-controller */ "./src/controllers/weather-current-controller.ts");
/* harmony import */ var _models_weather_current__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/weather-current */ "./src/models/weather-current.ts");
/* harmony import */ var _views_weather_current_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/weather-current-view */ "./src/views/weather-current-view.ts");
/* harmony import */ var _views_weather_location_input_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/weather-location-input-view */ "./src/views/weather-location-input-view.ts");







var openWeatherApiWrapper = new _models_openweather_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"]("1adba23387b35ccba4bd08e59faec2cf");
var weatherCurrentModel = new _models_weather_current__WEBPACK_IMPORTED_MODULE_4__["default"](new Date(), 1, 1, 1, {
    id: 1,
    main: "string",
    description: "string",
    icon: "string",
});
var weatherCurrentView = new _views_weather_current_view__WEBPACK_IMPORTED_MODULE_5__["default"]();
var weatherCurrentController = new _controllers_weather_current_controller__WEBPACK_IMPORTED_MODULE_3__["default"](weatherCurrentModel, weatherCurrentView);
var locationInputView = new _views_weather_location_input_view__WEBPACK_IMPORTED_MODULE_6__["default"]();
var weatherAppController = new _controllers_weather_app_controller__WEBPACK_IMPORTED_MODULE_2__["default"](openWeatherApiWrapper, weatherCurrentController, locationInputView);
weatherAppController.setup();


/***/ }),

/***/ "./src/models/location-parser.ts":
/*!***************************************!*\
  !*** ./src/models/location-parser.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var LocationParser = /** @class */ (function () {
    function LocationParser() {
    }
    LocationParser.parseLocation = function (location) {
        // Convert country names to codes
        return location;
    };
    return LocationParser;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationParser);


/***/ }),

/***/ "./src/models/openweather-api-wrapper.ts":
/*!***********************************************!*\
  !*** ./src/models/openweather-api-wrapper.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _location_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-parser */ "./src/models/location-parser.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var OpenWeatherApiWrapper = /** @class */ (function () {
    function OpenWeatherApiWrapper(apiKey) {
        this.apiKey = apiKey;
    }
    OpenWeatherApiWrapper.prototype.getGeocodingInfo = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var response, jsonData, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("http://api.openweathermap.org/geo/1.0/direct?q=".concat(_location_parser__WEBPACK_IMPORTED_MODULE_0__["default"].parseLocation(location), "&appid=").concat(this.apiKey), { mode: "cors" })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error("Fetch response returned not ok");
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        jsonData = _a.sent();
                        // The api call returns an array of possible geocoding results for the given location
                        if (jsonData.length === 0) {
                            throw new Error("Unable to locate location");
                        }
                        return [2 /*return*/, jsonData[0]];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [2 /*return*/, undefined];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OpenWeatherApiWrapper.prototype.getOneCallData = function (latitude, longitude) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(latitude, "&lon=").concat(longitude, "&units=metric&appid=").concat(this.apiKey), { mode: "cors" })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error("Fetch response returned not ok");
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [2 /*return*/, undefined];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return OpenWeatherApiWrapper;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenWeatherApiWrapper);


/***/ }),

/***/ "./src/models/weather-current.ts":
/*!***************************************!*\
  !*** ./src/models/weather-current.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var WeatherCurrent = /** @class */ (function () {
    function WeatherCurrent(time, temp, humidity, windSpeed, weather) {
        this.time = time;
        this.temp = temp;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.weather = weather;
    }
    WeatherCurrent.prototype.update = function (newWeatherCurrent) {
        this.time = newWeatherCurrent.time;
        this.temp = newWeatherCurrent.temp;
        this.humidity = newWeatherCurrent.humidity;
        this.windSpeed = newWeatherCurrent.windSpeed;
        this.weather = newWeatherCurrent.weather;
        if (this.onUpdate) {
            this.onUpdate(this);
        }
    };
    WeatherCurrent.prototype.bindOnUpdate = function (callback) {
        this.onUpdate = callback;
    };
    return WeatherCurrent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherCurrent);


/***/ }),

/***/ "./src/views/weather-current-view.ts":
/*!*******************************************!*\
  !*** ./src/views/weather-current-view.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var WeatherCurrentView = /** @class */ (function () {
    function WeatherCurrentView() {
        this.view = document.querySelector(".weather-current-container");
    }
    WeatherCurrentView.prototype.displayWeatherInfo = function (weatherCurrent) {
        this.view.innerText = "\n    Temp: ".concat(weatherCurrent.temp, " \u00B0C\n    Humidity: ").concat(weatherCurrent.humidity, "%\n    Weather condtion: ").concat(weatherCurrent.weather.description, "\n    Wind speed: ").concat(weatherCurrent.windSpeed * 3.6, " km/h\n    Date: ").concat(weatherCurrent.time.toString(), "\n    ");
    };
    return WeatherCurrentView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherCurrentView);


/***/ }),

/***/ "./src/views/weather-location-input-view.ts":
/*!**************************************************!*\
  !*** ./src/views/weather-location-input-view.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var LocationInputView = /** @class */ (function () {
    function LocationInputView() {
        this.input = document.querySelector("#location");
    }
    LocationInputView.prototype.bindSearch = function (handler) {
        var _this = this;
        this.input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                handler(_this.input.value);
            }
        });
    };
    return LocationInputView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationInputView);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZnJvbVVuaXhUaW1lL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb250cm9sbGVycy93ZWF0aGVyLWFwcC1jb250cm9sbGVyLnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbnRyb2xsZXJzL3dlYXRoZXItY3VycmVudC1jb250cm9sbGVyLnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZGVscy9sb2NhdGlvbi1wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kZWxzL29wZW53ZWF0aGVyLWFwaS13cmFwcGVyLnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZGVscy93ZWF0aGVyLWN1cnJlbnQudHMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdmlld3Mvd2VhdGhlci1jdXJyZW50LXZpZXcudHMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdmlld3Mvd2VhdGhlci1sb2NhdGlvbi1pbnB1dC12aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCw0REFBNEQ7QUFDOURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBmcm9tVW5peFRpbWVcbiAqIEBjYXRlZ29yeSBUaW1lc3RhbXAgSGVscGVyc1xuICogQHN1bW1hcnkgQ3JlYXRlIGEgZGF0ZSBmcm9tIGEgVW5peCB0aW1lc3RhbXAuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDcmVhdGUgYSBkYXRlIGZyb20gYSBVbml4IHRpbWVzdGFtcCAoaW4gc2Vjb25kcykuIERlY2ltYWwgdmFsdWVzIHdpbGwgYmUgZGlzY2FyZGVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHVuaXhUaW1lIC0gdGhlIGdpdmVuIFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKVxuICogQHJldHVybnMge0RhdGV9IHRoZSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ3JlYXRlIHRoZSBkYXRlIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDU6XG4gKiBjb25zdCByZXN1bHQgPSBmcm9tVW5peFRpbWUoMTMzMDUxNTkwNSlcbiAqIC8vPT4gV2VkIEZlYiAyOSAyMDEyIDExOjQ1OjA1XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnJvbVVuaXhUaW1lKGRpcnR5VW5peFRpbWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB1bml4VGltZSA9IHRvSW50ZWdlcihkaXJ0eVVuaXhUaW1lKTtcbiAgcmV0dXJuIHRvRGF0ZSh1bml4VGltZSAqIDEwMDApO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgT3BlbldlYXRoZXJBcGlXcmFwcGVyIGZyb20gXCIuLi9tb2RlbHMvb3BlbndlYXRoZXItYXBpLXdyYXBwZXJcIjtcclxuaW1wb3J0IExvY2F0aW9uSW5wdXRWaWV3IGZyb20gXCIuLi92aWV3cy93ZWF0aGVyLWxvY2F0aW9uLWlucHV0LXZpZXdcIjtcclxuaW1wb3J0IFdlYXRoZXJDdXJyZW50Q29udHJvbGxlciBmcm9tIFwiLi93ZWF0aGVyLWN1cnJlbnQtY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBmcm9tVW5peFRpbWUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IFdlYXRoZXJDdXJyZW50IGZyb20gXCIuLi9tb2RlbHMvd2VhdGhlci1jdXJyZW50XCI7XHJcbmltcG9ydCB7IE9uZUNhbGwgfSBmcm9tIFwiLi4vbW9kZWxzL29wZW53ZWF0aGVyLWFwaS1pbnRlcmZhY2VzXCI7XHJcblxyXG5jbGFzcyBXZWF0aGVyQXBwQ29udHJvbGxlciB7XHJcbiAgb3BlbldlYXRoZXJBcGlXcmFwcGVyOiBPcGVuV2VhdGhlckFwaVdyYXBwZXI7XHJcbiAgd2VhdGhlckN1cnJlbnRDb250cm9sbGVyOiBXZWF0aGVyQ3VycmVudENvbnRyb2xsZXI7XHJcbiAgbG9jYXRpb25JbnB1dFZpZXc6IExvY2F0aW9uSW5wdXRWaWV3O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG9wZW5XZWF0aGVyQXBpV3JhcHBlcjogT3BlbldlYXRoZXJBcGlXcmFwcGVyLFxyXG4gICAgd2VhdGhlckN1cnJlbnRDb250cm9sbGVyOiBXZWF0aGVyQ3VycmVudENvbnRyb2xsZXIsXHJcbiAgICBsb2NhdGlvbklucHV0VmlldzogTG9jYXRpb25JbnB1dFZpZXdcclxuICApIHtcclxuICAgIHRoaXMub3BlbldlYXRoZXJBcGlXcmFwcGVyID0gb3BlbldlYXRoZXJBcGlXcmFwcGVyO1xyXG4gICAgdGhpcy53ZWF0aGVyQ3VycmVudENvbnRyb2xsZXIgPSB3ZWF0aGVyQ3VycmVudENvbnRyb2xsZXI7XHJcbiAgICB0aGlzLmxvY2F0aW9uSW5wdXRWaWV3ID0gbG9jYXRpb25JbnB1dFZpZXc7XHJcbiAgfVxyXG5cclxuICBzZXR1cCgpIHtcclxuICAgIHRoaXMubG9jYXRpb25JbnB1dFZpZXcuYmluZFNlYXJjaCh0aGlzLnNldEFsbC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLndlYXRoZXJDdXJyZW50Q29udHJvbGxlci53ZWF0aGVyQ3VycmVudE1vZGVsLmJpbmRPblVwZGF0ZShcclxuICAgICAgdGhpcy53ZWF0aGVyQ3VycmVudENvbnRyb2xsZXIud2VhdGhlckN1cnJlbnRWaWV3LmRpc3BsYXlXZWF0aGVySW5mby5iaW5kKFxyXG4gICAgICAgIHRoaXMud2VhdGhlckN1cnJlbnRDb250cm9sbGVyLndlYXRoZXJDdXJyZW50Vmlld1xyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2V0QWxsKGxvY2F0aW9uOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGdlb2NvZGluZyA9IGF3YWl0IHRoaXMub3BlbldlYXRoZXJBcGlXcmFwcGVyLmdldEdlb2NvZGluZ0luZm8oXHJcbiAgICAgIGxvY2F0aW9uXHJcbiAgICApO1xyXG4gICAgaWYgKGdlb2NvZGluZykge1xyXG4gICAgICBjb25zb2xlLmxvZyhnZW9jb2RpbmcpO1xyXG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHRoaXMub3BlbldlYXRoZXJBcGlXcmFwcGVyLmdldE9uZUNhbGxEYXRhKFxyXG4gICAgICAgIGdlb2NvZGluZy5sYXQsXHJcbiAgICAgICAgZ2VvY29kaW5nLmxvblxyXG4gICAgICApO1xyXG4gICAgICBpZiAod2VhdGhlckRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50V2VhdGhlckluZm8od2VhdGhlckRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPIENoYW5nZSB0byB0YWtlIHBhcmFtIG9mIE9uZUNhbGxcclxuICBhc3luYyBzZXRDdXJyZW50V2VhdGhlckluZm8od2VhdGhlckRhdGE6IE9uZUNhbGwpIHtcclxuICAgIHRoaXMud2VhdGhlckN1cnJlbnRDb250cm9sbGVyLndlYXRoZXJDdXJyZW50TW9kZWwudXBkYXRlKFxyXG4gICAgICBuZXcgV2VhdGhlckN1cnJlbnQoXHJcbiAgICAgICAgZnJvbVVuaXhUaW1lKHdlYXRoZXJEYXRhLmN1cnJlbnQuZHQpLFxyXG4gICAgICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcCxcclxuICAgICAgICB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxyXG4gICAgICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9zcGVlZCxcclxuICAgICAgICB3ZWF0aGVyRGF0YS5jdXJyZW50LndlYXRoZXJbMF1cclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJBcHBDb250cm9sbGVyO1xyXG4iLCJpbXBvcnQgV2VhdGhlckN1cnJlbnQgZnJvbSBcIi4uL21vZGVscy93ZWF0aGVyLWN1cnJlbnRcIjtcclxuaW1wb3J0IFdlYXRoZXJDdXJyZW50VmlldyBmcm9tIFwiLi4vdmlld3Mvd2VhdGhlci1jdXJyZW50LXZpZXdcIjtcclxuXHJcbmNsYXNzIFdlYXRoZXJDdXJyZW50Q29udHJvbGxlciB7XHJcbiAgd2VhdGhlckN1cnJlbnRNb2RlbDogV2VhdGhlckN1cnJlbnQ7XHJcbiAgd2VhdGhlckN1cnJlbnRWaWV3OiBXZWF0aGVyQ3VycmVudFZpZXc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgd2VhdGhlckN1cnJlbnRNb2RlbDogV2VhdGhlckN1cnJlbnQsXHJcbiAgICB3ZWF0aGVyQ3VycmVudFZpZXc6IFdlYXRoZXJDdXJyZW50Vmlld1xyXG4gICkge1xyXG4gICAgdGhpcy53ZWF0aGVyQ3VycmVudE1vZGVsID0gd2VhdGhlckN1cnJlbnRNb2RlbDtcclxuICAgIHRoaXMud2VhdGhlckN1cnJlbnRWaWV3ID0gd2VhdGhlckN1cnJlbnRWaWV3O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlckN1cnJlbnRDb250cm9sbGVyO1xyXG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgT3BlbldlYXRoZXJBcGlXcmFwcGVyIGZyb20gXCIuL21vZGVscy9vcGVud2VhdGhlci1hcGktd3JhcHBlclwiO1xyXG5pbXBvcnQgV2VhdGhlckFwcENvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvd2VhdGhlci1hcHAtY29udHJvbGxlclwiO1xyXG5pbXBvcnQgV2VhdGhlckN1cnJlbnRDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL3dlYXRoZXItY3VycmVudC1jb250cm9sbGVyXCI7XHJcbmltcG9ydCBXZWF0aGVyQ3VycmVudCBmcm9tIFwiLi9tb2RlbHMvd2VhdGhlci1jdXJyZW50XCI7XHJcbmltcG9ydCBXZWF0aGVyQ3VycmVudFZpZXcgZnJvbSBcIi4vdmlld3Mvd2VhdGhlci1jdXJyZW50LXZpZXdcIjtcclxuaW1wb3J0IExvY2F0aW9uSW5wdXRWaWV3IGZyb20gXCIuL3ZpZXdzL3dlYXRoZXItbG9jYXRpb24taW5wdXQtdmlld1wiO1xyXG5cclxuY29uc3Qgb3BlbldlYXRoZXJBcGlXcmFwcGVyID0gbmV3IE9wZW5XZWF0aGVyQXBpV3JhcHBlcihcclxuICBcIjFhZGJhMjMzODdiMzVjY2JhNGJkMDhlNTlmYWVjMmNmXCJcclxuKTtcclxuXHJcbmNvbnN0IHdlYXRoZXJDdXJyZW50TW9kZWwgPSBuZXcgV2VhdGhlckN1cnJlbnQobmV3IERhdGUoKSwgMSwgMSwgMSwge1xyXG4gIGlkOiAxLFxyXG4gIG1haW46IFwic3RyaW5nXCIsXHJcbiAgZGVzY3JpcHRpb246IFwic3RyaW5nXCIsXHJcbiAgaWNvbjogXCJzdHJpbmdcIixcclxufSk7XHJcbmNvbnN0IHdlYXRoZXJDdXJyZW50VmlldyA9IG5ldyBXZWF0aGVyQ3VycmVudFZpZXcoKTtcclxuY29uc3Qgd2VhdGhlckN1cnJlbnRDb250cm9sbGVyID0gbmV3IFdlYXRoZXJDdXJyZW50Q29udHJvbGxlcihcclxuICB3ZWF0aGVyQ3VycmVudE1vZGVsLFxyXG4gIHdlYXRoZXJDdXJyZW50Vmlld1xyXG4pO1xyXG5cclxuY29uc3QgbG9jYXRpb25JbnB1dFZpZXcgPSBuZXcgTG9jYXRpb25JbnB1dFZpZXcoKTtcclxuXHJcbmNvbnN0IHdlYXRoZXJBcHBDb250cm9sbGVyID0gbmV3IFdlYXRoZXJBcHBDb250cm9sbGVyKFxyXG4gIG9wZW5XZWF0aGVyQXBpV3JhcHBlcixcclxuICB3ZWF0aGVyQ3VycmVudENvbnRyb2xsZXIsXHJcbiAgbG9jYXRpb25JbnB1dFZpZXdcclxuKTtcclxud2VhdGhlckFwcENvbnRyb2xsZXIuc2V0dXAoKTtcclxuIiwiY2xhc3MgTG9jYXRpb25QYXJzZXIge1xyXG4gIHN0YXRpYyBwYXJzZUxvY2F0aW9uKGxvY2F0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gQ29udmVydCBjb3VudHJ5IG5hbWVzIHRvIGNvZGVzXHJcbiAgICByZXR1cm4gbG9jYXRpb247XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvblBhcnNlcjtcclxuIiwiaW1wb3J0IExvY2F0aW9uUGFyc2VyIGZyb20gXCIuL2xvY2F0aW9uLXBhcnNlclwiO1xyXG5pbXBvcnQgeyBHZW9jb2RpbmcsIE9uZUNhbGwgfSBmcm9tIFwiLi9vcGVud2VhdGhlci1hcGktaW50ZXJmYWNlc1wiO1xyXG5cclxuY2xhc3MgT3BlbldlYXRoZXJBcGlXcmFwcGVyIHtcclxuICBhcGlLZXk6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoYXBpS2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0R2VvY29kaW5nSW5mbyhsb2NhdGlvbjogc3RyaW5nKTogUHJvbWlzZTxHZW9jb2RpbmcgfCB1bmRlZmluZWQ+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtMb2NhdGlvblBhcnNlci5wYXJzZUxvY2F0aW9uKFxyXG4gICAgICAgICAgbG9jYXRpb25cclxuICAgICAgICApfSZhcHBpZD0ke3RoaXMuYXBpS2V5fWAsXHJcbiAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGZXRjaCByZXNwb25zZSByZXR1cm5lZCBub3Qgb2tcIik7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAvLyBUaGUgYXBpIGNhbGwgcmV0dXJucyBhbiBhcnJheSBvZiBwb3NzaWJsZSBnZW9jb2RpbmcgcmVzdWx0cyBmb3IgdGhlIGdpdmVuIGxvY2F0aW9uXHJcbiAgICAgIGlmIChqc29uRGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gbG9jYXRlIGxvY2F0aW9uXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBqc29uRGF0YVswXTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRPbmVDYWxsRGF0YShcclxuICAgIGxhdGl0dWRlOiBudW1iZXIsXHJcbiAgICBsb25naXR1ZGU6IG51bWJlclxyXG4gICk6IFByb21pc2U8T25lQ2FsbCB8IHVuZGVmaW5lZD4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mdW5pdHM9bWV0cmljJmFwcGlkPSR7dGhpcy5hcGlLZXl9YCxcclxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cclxuICAgICAgKTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZldGNoIHJlc3BvbnNlIHJldHVybmVkIG5vdCBva1wiKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcGVuV2VhdGhlckFwaVdyYXBwZXI7XHJcbiIsImltcG9ydCB7IFdlYXRoZXIgfSBmcm9tIFwiLi9vcGVud2VhdGhlci1hcGktaW50ZXJmYWNlc1wiO1xyXG5cclxuY2xhc3MgV2VhdGhlckN1cnJlbnQge1xyXG4gIHRpbWU6IERhdGU7XHJcbiAgdGVtcDogbnVtYmVyO1xyXG4gIGh1bWlkaXR5OiBudW1iZXI7XHJcbiAgd2luZFNwZWVkOiBudW1iZXI7XHJcbiAgd2VhdGhlcjogV2VhdGhlcjtcclxuXHJcbiAgb25VcGRhdGU/OiAod2VhdGhlckN1cnJlbnQ6IFdlYXRoZXJDdXJyZW50KSA9PiB2b2lkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRpbWU6IERhdGUsXHJcbiAgICB0ZW1wOiBudW1iZXIsXHJcbiAgICBodW1pZGl0eTogbnVtYmVyLFxyXG4gICAgd2luZFNwZWVkOiBudW1iZXIsXHJcbiAgICB3ZWF0aGVyOiBXZWF0aGVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xyXG4gICAgdGhpcy50ZW1wID0gdGVtcDtcclxuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcclxuICAgIHRoaXMud2luZFNwZWVkID0gd2luZFNwZWVkO1xyXG4gICAgdGhpcy53ZWF0aGVyID0gd2VhdGhlcjtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShuZXdXZWF0aGVyQ3VycmVudDogV2VhdGhlckN1cnJlbnQpIHtcclxuICAgIHRoaXMudGltZSA9IG5ld1dlYXRoZXJDdXJyZW50LnRpbWU7XHJcbiAgICB0aGlzLnRlbXAgPSBuZXdXZWF0aGVyQ3VycmVudC50ZW1wO1xyXG4gICAgdGhpcy5odW1pZGl0eSA9IG5ld1dlYXRoZXJDdXJyZW50Lmh1bWlkaXR5O1xyXG4gICAgdGhpcy53aW5kU3BlZWQgPSBuZXdXZWF0aGVyQ3VycmVudC53aW5kU3BlZWQ7XHJcbiAgICB0aGlzLndlYXRoZXIgPSBuZXdXZWF0aGVyQ3VycmVudC53ZWF0aGVyO1xyXG5cclxuICAgIGlmICh0aGlzLm9uVXBkYXRlKSB7XHJcbiAgICAgIHRoaXMub25VcGRhdGUodGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiaW5kT25VcGRhdGUoY2FsbGJhY2s6ICh3ZWF0aGVyQ3VycmVudDogV2VhdGhlckN1cnJlbnQpID0+IHZvaWQpIHtcclxuICAgIHRoaXMub25VcGRhdGUgPSBjYWxsYmFjaztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJDdXJyZW50O1xyXG4iLCJpbXBvcnQgV2VhdGhlckN1cnJlbnQgZnJvbSBcIi4uL21vZGVscy93ZWF0aGVyLWN1cnJlbnRcIjtcclxuXHJcbmNsYXNzIFdlYXRoZXJDdXJyZW50VmlldyB7XHJcbiAgdmlldzogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy52aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWN1cnJlbnQtY29udGFpbmVyXCIpITtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlXZWF0aGVySW5mbyh3ZWF0aGVyQ3VycmVudDogV2VhdGhlckN1cnJlbnQpIHtcclxuICAgIHRoaXMudmlldy5pbm5lclRleHQgPSBgXHJcbiAgICBUZW1wOiAke3dlYXRoZXJDdXJyZW50LnRlbXB9IMKwQ1xyXG4gICAgSHVtaWRpdHk6ICR7d2VhdGhlckN1cnJlbnQuaHVtaWRpdHl9JVxyXG4gICAgV2VhdGhlciBjb25kdGlvbjogJHt3ZWF0aGVyQ3VycmVudC53ZWF0aGVyLmRlc2NyaXB0aW9ufVxyXG4gICAgV2luZCBzcGVlZDogJHt3ZWF0aGVyQ3VycmVudC53aW5kU3BlZWQgKiAzLjZ9IGttL2hcclxuICAgIERhdGU6ICR7d2VhdGhlckN1cnJlbnQudGltZS50b1N0cmluZygpfVxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJDdXJyZW50VmlldztcclxuIiwiY2xhc3MgTG9jYXRpb25JbnB1dFZpZXcge1xyXG4gIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uXCIpITtcclxuICB9XHJcblxyXG4gIGJpbmRTZWFyY2goaGFuZGxlcjogKGxvY2F0aW9uOiBzdHJpbmcpID0+IHZvaWQpIHtcclxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgIGhhbmRsZXIodGhpcy5pbnB1dC52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25JbnB1dFZpZXc7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==