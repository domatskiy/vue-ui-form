(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-ui-form"] = factory(require("vue"));
	else
		root["vue-ui-form"] = factory(root["vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formFieldBus__ = __webpack_require__(2);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'FormFieldMixin',
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    errorCode: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: function _default() {
        return false;
      }
    },
    required: {
      type: Boolean,
      required: false,
      default: function _default() {
        return false;
      }
    },
    value: {
      required: false
    },
    error: {
      required: false,
      default: ''
    }
  },
  data: function data() {
    return {
      focus_active: 0,
      zzzz: [],
      processing: false
    };
  },
  methods: {
    setActive: function setActive(active) {
      this.focus_active = active;
    }
  },
  created: function created() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0__formFieldBus__["a" /* default */].$on('form-interface-processing', function ($processing) {
      _this.processing = $processing;
    });

    __WEBPACK_IMPORTED_MODULE_0__formFieldBus__["a" /* default */].$on('errors', function ($errors) {
      console.error('field >>> errors - set []');
      _this.$set(_this, 'zzzz', []);
    });

    __WEBPACK_IMPORTED_MODULE_0__formFieldBus__["a" /* default */].$on('clear-errors', function ($errors) {
      console.error('field >>> clear-errors - set []');
      _this.$set(_this, 'zzzz', []);
    });

    __WEBPACK_IMPORTED_MODULE_0__formFieldBus__["a" /* default */].$on('error', function ($field, $error) {
      if (_this.errorCode && $field === _this.errorCode) {
        var er = Array.isArray($error) ? $error : $error ? [$error] : [];
        _this.$set(_this, 'zzzz', er);
      }
    });

    if (this.$el && typeof this.$el.tagName !== 'undefined') {
      var label = void 0;

      var input = this.$el.querySelector('input');
      if (input) {
        label = this.$el.querySelector('label');
      } else {
        var textarea = this.$el.querySelector('textarea');
        if (textarea) {
          label = this.$el.querySelector('label');
        }
      }

      if (label) {
        label.addEventListener('click', function () {
          input.focus();
        });
      }
    }
  },
  computed: {
    errors: function errors() {
      var err = [];

      if (typeof this.error === 'string' && this.error) {
        err.push(this.error);
      } else if (Array.isArray(this.error)) {
        this.error.forEach(function (e) {
          err.push(e);
        });
      }

      if (this.errorCode) {
        if (Array.isArray(this.zzzz)) {
          this.zzzz.forEach(function (e) {
            err.push(e);
          });
        } else if (this.zzzz) {
          err.push(this.zzzz);
        }
      }

      return err;
    },
    className: function className() {
      var cl = [];
      var hasVal = false;

      if (this.focus_active) {
        hasVal = true;
      }

      if (typeof this.value !== 'undefined' && this.value !== null) {
        if (typeof this.value === 'number' && this.value !== null) {
          hasVal = true;
        } else if (typeof this.value === 'string' && this.value.length > 0) {
          hasVal = true;
        } else if (Array.isArray(this.value) && this.value.length > 0) {
          hasVal = true;
        } else if (_typeof(this.value) === 'object' && Object.values(this.value).length > 0) {
          hasVal = true;
        }
      }

      if (hasVal === true) {
        cl.push('form__field--active');
      }

      if (this.disabled === true || this.processing === true) {
        cl.push('form__field--disabled');
      }

      if (this.errors.length > 0) {
        cl.push('form__field--error');
      }

      return cl;
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


var formFieldBus = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  data: function data() {
    return {
      body_click_handler: null
    };
  },

  created: function created() {
    var _this = this;

    this.body_click_handler = function () {
      document.body.removeEventListener('click', _this.body_click_handler);
      _this.$emit('close', true);
    };
    this.$on('open', function () {
      document.body.addEventListener('click', _this.body_click_handler);
    });
  }
});

/* harmony default export */ __webpack_exports__["a"] = (formFieldBus);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(25);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormButton__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formFieldBus__ = __webpack_require__(2);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'FormInterface',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    buttons: {
      type: Array,
      required: false,
      default: function _default() {
        return [new __WEBPACK_IMPORTED_MODULE_0__FormButton__["a" /* default */]('save', 'Сохранить', null, true), new __WEBPACK_IMPORTED_MODULE_0__FormButton__["a" /* default */]('apply', 'Применить'), new __WEBPACK_IMPORTED_MODULE_0__FormButton__["a" /* default */]('cancel', 'Отмена')];
      }
    },
    buttonsClass: {
      type: String,
      required: false,
      default: ''
    },
    data: {
      type: Object,
      required: false,
      default: function _default() {
        return null;
      }
    },
    errors: {
      type: Object,
      required: false,
      default: function _default() {
        return {};
      }
    },
    processing: {
      type: Boolean,
      required: false,
      default: function _default() {
        return false;
      }
    },
    debug: {
      type: Boolean,
      required: false,
      default: function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {
      errCodes: [],
      totalErrors: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    var nodes = this.$slots.default;
    var errCodes = [];
    if (this.debug === true) {
      console.warn('vue-form-ui => debug=', this.debug);
      console.debug('vue-form-ui => FormInterface nodes=', nodes);
    }

    var comp = this.getComponentNodes(nodes);
    if (this.debug === true) {
      console.log('vue-form-ui => getComponentNodes', comp);
    }

    if (Array.isArray(comp)) {
      comp.forEach(function (node) {
        if (typeof node.componentOptions.propsData.errorCode === 'string') {
          errCodes.push(node.componentOptions.propsData.errorCode);
        }
      });
    }

    this.$set(this, 'errCodes', errCodes);
    if (this.debug === true) {
      console.debug('vue-form-ui => FormInterface, errCodes=', errCodes);
    }

    this.$watch('errors', function ($errors, $oldErrors) {
      if (_this.debug === true) {
        console.debug('vue-form-ui => FormInterface, watch errors=', $errors, 'old errors=', $oldErrors);
      }
      if ($errors === null) {
        _this.totalErrors = [];
        __WEBPACK_IMPORTED_MODULE_1__formFieldBus__["a" /* default */].$emit('errors', []);
        __WEBPACK_IMPORTED_MODULE_1__formFieldBus__["a" /* default */].$emit('clear-errors', []);
        return;
      }
      if (Array.isArray($errors)) {
        if (_this.debug === true) {
          console.debug('vue-form-ui => FormInterface, watch errors is array');
        }
        __WEBPACK_IMPORTED_MODULE_1__formFieldBus__["a" /* default */].$emit('errors', $errors);
        _this.totalErrors = $errors;
      } else if ($errors && (typeof $errors === 'undefined' ? 'undefined' : _typeof($errors)) === 'object') {
        if (_this.debug === true) {
          console.debug('vue-form-ui => FormInterface, watch errors is object');
        }
        var totalErrors = [];
        Object.keys($errors).map(function (key) {
          if (_this.errCodes.indexOf(key) === -1) {
            totalErrors.push($errors[key]);
            if (_this.debug === true) {
              console.debug('vue-form-ui => FormInterface => watch errors, add to TOTAL errors:', $errors[key]);
            }
          } else {
            if (Array.isArray($errors[key])) {
              $errors[key].forEach(function ($err) {
                __WEBPACK_IMPORTED_MODULE_1__formFieldBus__["a" /* default */].$emit('error', key, $err);
                if (_this.debug === true) {
                  console.debug('vue-form-ui => FormInterface => watch errors, emmit error: key=', key, 'err=', $err);
                }
              });
            } else if (typeof $errors[key] === 'string') {
              __WEBPACK_IMPORTED_MODULE_1__formFieldBus__["a" /* default */].$emit('error', key, $errors[key]);
              if (_this.debug === true) {
                console.debug('vue-form-ui => FormInterface => watch errors, emmit errors as string', 'key=', key, 'err=', $errors[key]);
              }
            }
          }
        });
        _this.totalErrors = totalErrors;
      }
    }, {
      deep: true
    });
  },
  methods: {
    getComponentNodes: function getComponentNodes(nodes) {
      var result = [];
      if ((typeof nodes === 'undefined' ? 'undefined' : _typeof(nodes)) !== 'object') {
        return result;
      }
      var __this = this;
      Object.keys(nodes).map(function (key) {
        var node = nodes[key];
        if (typeof node.componentOptions !== 'undefined' && typeof node.componentOptions.tag !== 'undefined') {
          if (_typeof(node.componentOptions) === 'object' && ['form-view', 'form-checkbox', 'form-input', 'form-text', 'form-select'].indexOf(node.componentOptions.tag) > -1 && _typeof(node.componentOptions.propsData) === 'object' && typeof node.componentOptions.propsData.errorCode === 'string') {
            result.push(node);
          }
        } else if (typeof node.tag !== 'undefined') {
          var childComponents = __this.getComponentNodes(node.children);
          if (Array.isArray(childComponents)) {
            childComponents.forEach(function ($comp) {
              result.push($comp);
            });
          }
        }
      });
      return result;
    },
    submitForm: function submitForm($event) {
      var _this2 = this;

      $event.preventDefault();
      $event.stopPropagation();
      if (this.debug === true) {
        console.debug('vue-form-ui => FormInterface => submitForm');
      }
      this.buttons.forEach(function ($button) {
        if ($button.def === true) {
          _this2.$emit($button.event, _this2.data);
        }
      });
    },
    buttonClick: function buttonClick($ecode, $event) {
      $event.preventDefault();
      $event.stopPropagation();
      if (this.debug === true) {
        console.debug('vue-form-ui => FormInterface => buttonClick, code=', $ecode);
      }
      if (typeof $ecode === 'string') {
        this.$emit($ecode, this.data);
      }
    }
  },
  computed: {
    formClass: function formClass() {
      var classes = [];
      if (Array.isArray(this.errors) && this.errors.length > 0) {
        classes.push('form--error');
      } else if (this.errors !== null && _typeof(this.errors) === 'object' && Object.keys(this.errors).length > 0) {
        classes.push('form--error');
      }

      if (this.processing) {
        classes.push('form--processing');
      }

      if (this.success) {
        classes.push('form--success');
      }
      return classes.join(' ');
    }
  },
  watch: {
    processing: function processing($processing) {
      __WEBPACK_IMPORTED_MODULE_1__formFieldBus__["a" /* default */].$emit('form-interface-processing', $processing);
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var formButton = function formButton($event, $name, $class, $def) {
  _classCallCheck(this, formButton);

  this.name = typeof $name === 'string' && $name ? $name : '';
  this.event = typeof $event === 'string' && $event ? $event : '';
  this.className = typeof $class === 'string' && $class ? $class : this.event;
  this.def = typeof $def === 'boolean' && $def ? $def : false;
};

/* harmony default export */ __webpack_exports__["a"] = (formButton);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormFieldMixin__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'FormView',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__FormFieldMixin__["a" /* default */]],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    showEmpty: {
      type: Boolean,
      default: false
    },
    prefix: {
      type: String,
      default: ''
    },
    postfix: {
      type: String,
      default: ''
    }
  },
  date: function date() {
    return {
      canShowEmpty: this.showEmpty
    };
  },
  beforeMount: function beforeMount() {
    if (typeof this.$slots.default !== 'undefined') {
      this.canShowEmpty = true;
    }
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormFieldMixin__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'FormInput',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__FormFieldMixin__["a" /* default */]],
  props: {
    type: {
      required: false,
      default: 'text'
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    readonly: {
      type: Boolean,
      required: false,
      default: function _default() {
        return false;
      }
    },
    keyUpChange: {
      type: Boolean,
      required: false,
      default: function _default() {
        return false;
      }
    },
    keyUpChangeDelay: {
      type: Number,
      required: false,
      default: function _default() {
        return 500;
      }
    },
    suggestionUrl: {
      type: String,
      required: false,
      default: function _default() {
        return '';
      }
    },
    suggestionMinLen: {
      type: Number,
      required: false,
      default: function _default() {
        return 2;
      }
    }
  },
  data: function data() {
    return {
      timer: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    var input = this.$el.querySelector('input');
    input.addEventListener('change', function (e) {
      _this.$emit('input', input.value);
    });
    input.addEventListener('keyup', function (e) {
      if (_this.timer !== null) {
        clearTimeout(_this.timer);
        _this.timer = null;
      }
      if (input.value && input.value.length > _this.suggestionMinLen) {
        _this.$emit('suggestion-get', input.value);
      }
      if (_this.keyUpChange === true) {
        _this.timer = setTimeout(function () {
          _this.$emit('input', input.value);
        }, _this.keyUpChangeDelay);
      }
    });
  },
  computed: {
    val: function val() {
      var val = this.value;
      if (typeof val === 'undefined' || val === null) {
        if (this.type === 'color') {
          val = '#ff0000';
        } else {
          val = '';
        }
      }
      return val;
    }
  },
  watch: {}
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formFieldBus__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FormFieldMixin__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_selectpicker_src_Components_selectPicker_vue__ = __webpack_require__(28);






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'FormSelect',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__FormFieldMixin__["a" /* default */]],
  components: { selectpicker: __WEBPACK_IMPORTED_MODULE_2_vue_selectpicker_src_Components_selectPicker_vue__["a" /* default */] },
  props: {
    required: {
      type: Boolean,
      default: function _default() {
        return true;
      }
    },
    value: {},
    multi: {
      type: Boolean,
      required: false,
      default: function _default() {
        return false;
      }
    },
    tagged: {
      type: Boolean,
      required: false,
      default: function _default() {
        return false;
      }
    },
    search: {
      type: Boolean,
      required: false,
      default: function _default() {
        return false;
      }
    },
    list: {
      type: Object,
      required: false,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      open: false,
      searchText: '',
      tmpValue: []
    };
  },

  beforeMount: function beforeMount() {
    this.tmpValue = this.value;
  },
  mounted: function mounted() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0__formFieldBus__["a" /* default */].$on('close', function () {
      console.log('close');
      _this.close(false);
    });
  },
  methods: {
    setActive: function setActive(active) {
      this.focus_active = active;
    }
  },
  computed: {
    className: function className() {
      var cl = [];

      if (this.focus_active || typeof this.value !== 'undefined' && this.value !== null && this.value) {
        cl.push('form__field--active');
      }
      if (this.error) {
        cl.push('form__field--error');
      }
      return cl;
    },
    val: function val() {
      var val = this.value;
      if (typeof val === 'undefined' || val === null) {
        val = '';
      }
      return val;
    }
  },
  watch: {
    tmpValue: function tmpValue() {
      this.$emit('input', this.tmpValue);
    },
    value: function value(newValue) {
      this.$set(this, 'tmpValue', newValue);
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectPickerBus__ = __webpack_require__(31);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'selectpicker',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: 'Выбор значения'
    },
    noSelText: {
      type: String,
      required: false,
      default: 'Не выбрано'
    },
    value: {},
    multi: {
      type: Boolean,
      required: false,
      default: function _default() {
        return false;
      }
    },
    tagged: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: function _default() {
        return false;
      }
    },
    showActions: {
      type: Boolean,
      required: false,
      default: function _default() {
        return true;
      }
    },
    search: {
      type: Boolean,
      required: false,
      default: false
    },
    searchPlaceholder: {
      type: String,
      required: false,
      default: 'Поиск'
    },
    list: {
      type: Object,
      required: false,
      default: function _default() {
        return {};
      }
    },
    buttons: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: function data() {
    return {
      open: false,
      searchText: '',
      textValue: '',
      arValue: [],
      values: null
    };
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    var _this = this;

    this.setNewValue();

    __WEBPACK_IMPORTED_MODULE_0__selectPickerBus__["a" /* default */].$on('selectpickerClose', function () {
      _this.open = false;
    });

    __WEBPACK_IMPORTED_MODULE_0__selectPickerBus__["a" /* default */].$on('selectpickerOpen', function () {});

    this.$watch('value', function ($value) {
      this.setNewValue();
    }, {
      deep: true
    });

    this.$watch('list', function ($list) {
      console.log('selectpicker: list value...', $list);
      this.setNewValue();
    }, {
      deep: true
    });
  },
  methods: {
    resetSelect: function resetSelect(e) {
      this.values = this.multi === true ? [] : null;
      this.closeSelect(true, false);
    },
    openSelect: function openSelect(e) {
      __WEBPACK_IMPORTED_MODULE_0__selectPickerBus__["a" /* default */].$emit('selectpickerClose', this);
      this.open = true;
      __WEBPACK_IMPORTED_MODULE_0__selectPickerBus__["a" /* default */].$emit('selectpickerOpen', this);
    },
    closeSelect: function closeSelect(setValue, checkMulti) {
      if (typeof setValue !== 'boolean') {
        setValue = true;
      }
      if (typeof checkMulti !== 'boolean') {
        checkMulti = false;
      }
      console.log('selectpicker: closeSelect ... ', setValue, checkMulti);
      if (setValue && (!checkMulti || checkMulti && this.multi === false)) {
        this.searchText = '';
        this.open = false;
        this.$emit('input', this.values);
      }
    },
    toggleSelect: function toggleSelect(e) {
      if (this.open === false) {
        this.openSelect();
      } else {
        this.closeSelect(true, false);
      }
    },
    onPageDown: function onPageDown() {
      console.log('onPageDown');
    },
    selListValue: function selListValue($val, $event) {
      console.log('selectPicker: selListValue', $val);

      if (this.multi === true && !Array.isArray(this.values)) {
        this.values = [];
      } else if (this.multi !== true && Array.isArray(this.values)) {
        this.values = null;
      }

      if (Array.isArray(this.values)) {
        var index = this.values.indexOf($val + '');
        if (index === -1) {
          index = this.values.indexOf(+$val);
        }
        console.log('selectPicker: selListValue', $val, index, this.values);
        if (index === -1) {
          this.values.push($val);
        } else {
          this.values.splice(index, 1);
        }
      } else {
        this.values = $val;
      }

      this.closeSelect(true, true);
    },
    valueSelected: function valueSelected($val) {
      if (this.values === null) return false;

      if (Array.isArray(this.values)) {

        if (this.values.length === 0) return false;

        var index = this.values.indexOf($val + '');
        if (index === -1) {
          index = this.values.indexOf(+$val);
        }
        return index > -1;
      } else {
        return this.values === $val || this.values + '' === $val + '';
      }
    },

    setNewValue: function setNewValue() {

      if (this.value === null) {
        if (this.multi === true) {
          this.$set(this, 'values', []);
        } else {
          this.$set(this, 'values', null);
          return;
        }
        return;
      }

      if (this.multi === true && !Array.isArray(this.value)) {
        console.warn('selectPicker: need array for multi', this.value);
        this.$set(this, 'values', [this.value]);
      } else if (this.multi === false && Array.isArray(this.value)) {
        console.warn('selectPicker: need single value for select, ', this.value, '!!!');
        this.$set(this, 'values', null);
      } else {
        this.$set(this, 'values', this.value);
      }
    }
  },
  computed: {
    enumList: function enumList() {
      var _this2 = this;

      var tmp = [];
      if (Array.isArray(this.list) && this.list.length > 0) {
        this.list.forEach(function (item) {
          if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && typeof item.id !== 'undefined') {
            tmp.push(item);
          } else {
            console.warn('not correct item ', item);
          }
        });
      } else if (_typeof(this.list) === 'object') {
        Object.keys(this.list).map(function (id) {
          var value = _this2.list[id];
          if (typeof value === 'string') {
            tmp.push({
              id: id,
              name: value
            });
          } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
            tmp.push(value);
          } else {
            console.warn('not correct object of value ', value);
          }
        });
      }
      return tmp;
    }
  },
  watch: {

    values: function values(newValues) {
      var _this3 = this;

      var text = [];
      var items = [];

      Object.keys(this.enumList).map(function ($key) {
        var item = _this3.enumList[$key];
        if (item.name && _this3.valueSelected(item.id)) {
          text.push(item.name);
          items.push(item);
        }
      });

      this.textValue = text.length < 3 ? text.join(', ') : 'выбрано ' + text.length;
      this.$set(this, 'arValue', items);
    }
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormFieldMixin__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'FormText',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__FormFieldMixin__["a" /* default */]],
  props: {
    minHeight: {
      type: Number,
      default: 100
    }
  },
  mounted: function mounted() {
    var _this = this;

    var textarea = this.$el.querySelector('textarea');
    textarea.addEventListener('input', function (e) {
      _this.$emit('input', textarea.value);
    });
  },
  computed: {
    val: function val() {
      var val = this.value;
      if (typeof val === 'undefined' || val === null) {
        val = '';
      }
      return val;
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormFieldMixin__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'FormCheckbox',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__FormFieldMixin__["a" /* default */]],
  props: {
    value: {
      default: 0
    }
  },
  data: function data() {
    return {
      val: false
    };
  },

  methods: {
    change: function change() {
      this.val = !this.val;
      this.$emit('input', this.val ? 1 : 0);
    }
  },
  mounted: function mounted() {
    this.val = this.value;
    this.$watch('value', function (v) {
      this.val = this.value;
    });
  },
  computed: {
    checked: function checked() {
      return this.val === 1 || this.val === '1' || this.val === true || this.val === 'true';
    }
  }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'FormFile',
  props: {
    value: {
      required: false
    },

    buttonText: {
      type: String,
      required: false,
      default: ''
    },

    fileName: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    multiple: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {
      files: [],
      files_preview: []
    };
  },
  mounted: function mounted() {
    if (this.$refs.mainContainer) {
      this.$refs.mainContainer.addEventListener('drop', this.onDrop, true);
    } else {}
  },
  methods: {
    changeHandler: function changeHandler(e) {
      var files = e.target.files || e.dataTransfer.files;
      console.log('changeHandler:', files);
      if (!files.length) {
        return;
      }

      var __this = this;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var file = _step.value;

          if (file instanceof File && file.type.match('image.*')) {
            console.log(file.type, 'create preview');
            var reader = new FileReader();
            reader.onload = function (theFile) {
              return function (e) {
                if (__this.multiple === true) {
                  __this.files.push(theFile);
                  __this.files_preview.push(e.target.result);
                } else {
                  __this.files = [theFile];
                  __this.files_preview = [e.target.result];
                }
              };
            }(file);
            reader.readAsDataURL(file);
          } else {
            console.log(file.type, 'add without preview');
            if (__this.multiple === true) {
              __this.files.push(file);
              __this.files_preview.push('');
            } else {
              __this.files = [file];
              __this.files_preview = [''];
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    eventOnElement: function eventOnElement(event, object) {
      var rect = object.getBoundingClientRect();
      return event.pageX >= rect.left && event.pageY >= rect.top && event.pageX <= rect.right && event.pageY <= rect.bottom;
    },
    onDrop: function onDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      if (!e.dataTransfer.files || !this.eventOnElement(e, this.$refs.mainContainer)) {
        return;
      }
      if (!e.dataTransfer.files || !e.dataTransfer.files[0]) {
        return;
      }
      if (!/^image\//.test(e.dataTransfer.files[0].type)) {
        return;
      }
      this.selectImage(e.dataTransfer.files[0]);
    },

    chooseFiles: function chooseFiles() {
      this.$el.querySelector('input').click();
    },
    removeFile: function removeFile(key) {
      this.files.splice(key, 1);
      this.files_preview.splice(key, 1);
    }
  },
  computed: {
    multi: function multi() {
      return this.multiple === true;
    }
  },
  watch: {
    value: function value(val) {
      if (typeof val === 'undefined') {
        this.files = [];
        this.files_preview = [];
      }
    },
    files: function files(_files) {
      var _this = this;

      console.log('files change, multiple=', this.multiple, _files);
      if (this.multiple === true) {
        var dt = new DataTransfer();
        Object.keys(_files).map(function ($kye) {
          dt.items.add(_files[$kye]);
        });
        console.log('file emit more');
        this.$emit('input', dt.files);
      } else {
        Object.keys(_files).map(function ($key) {
          console.log('file emit one', _files[$key]);
          _this.$emit('input', _files[$key]);
        });
      }
    }
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'FormViewFiles',
  props: {
    value: {
      required: false
    },
    removed: {
      type: Boolean,
      required: false,
      default: function _default() {
        return true;
      }
    }
  },
  methods: {
    remove: function remove($file) {
      this.$emit('remove', $file);
    },
    getFileName: function getFileName(path) {
      return path.replace(/^.*[\\/]/, '');
    }
  },
  computed: {
    files: function files() {
      if (typeof this.value === 'string') {
        return this.value ? [this.value] : [];
      }
      return this.value;
    }
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'FormViewImages',
  props: {
    value: {
      required: false
    },
    removed: {
      type: Boolean,
      required: false,
      default: function _default() {
        return true;
      }
    }
  },
  methods: {
    remove: function remove($file) {
      this.$emit('remove', $file);
    }
  },
  computed: {
    images: function images() {
      if (typeof this.value === 'string') {
        return this.value ? [this.value] : [];
      }
      return this.value;
    }
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Components_FormInterface_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_FormView_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Components_FormInput_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_FormSelect_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_FormText_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_FormCheckbox_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_FormFile_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_FormViewFiles_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_FormViewImages_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__formMixin__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__FormButton__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "formMixin", function() { return __WEBPACK_IMPORTED_MODULE_9__formMixin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormButton", function() { return __WEBPACK_IMPORTED_MODULE_10__FormButton__["a"]; });















/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(VueInstance, options) {
    var components = [__WEBPACK_IMPORTED_MODULE_0__Components_FormInterface_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Components_FormView_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__Components_FormInput_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__Components_FormSelect_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__Components_FormText_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__Components_FormCheckbox_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__Components_FormFile_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__Components_FormViewFiles_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__Components_FormViewImages_vue__["a" /* default */]];

    components.map(function (component) {
      VueInstance.component(component.name, component);
    });
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormInterface_vue__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_597a8c33_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormInterface_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormInterface_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_597a8c33_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormInterface_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_597a8c33_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormInterface_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"form",class:_vm.formClass,on:{"submit":_vm.submitForm}},[(_vm.processing)?_c('div',{staticClass:"form__processing"},[_vm._t("processing",[_vm._v("Sending ...")])],2):_vm._e(),_vm._v(" "),(_vm.title)?_c('div',{staticClass:"form__title"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._v(" "),_vm._t("desc_before"),_vm._v(" "),_c('div',{staticClass:"form__body"},[_vm._t("default")],2),_vm._v(" "),(Array.isArray(_vm.totalErrors) && _vm.totalErrors.length > 0)?_c('div',{staticClass:"form__errors"},[_c('ul',_vm._l((_vm.totalErrors),function(err){return _c('li',[_vm._v(_vm._s(err))])}),0)]):_vm._e(),_vm._v(" "),_vm._t("desc_after"),_vm._v(" "),_c('div',{staticClass:"form__buttons"},_vm._l((_vm.buttons),function(button){return _c('button',{class:[_vm.buttonsClass, button.code, button.className, (button.def === true ? (button.className ? button.className + '--def' : 'def') : null)],attrs:{"type":"button","disabled":_vm.processing === true},on:{"click":function($event){return _vm.buttonClick(button.event, $event)}}},[_vm._v(_vm._s(button.name))])}),0)],2)}
var staticRenderFns = []


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormView_vue__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_165bcdec_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormView_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormView_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_165bcdec_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormView_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_165bcdec_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormView_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.value || _vm.canShowEmpty)?_c('div',{staticClass:"form__field form__field--view",class:_vm.className},[(_vm.title)?_c('label',[_c('span',{domProps:{"innerHTML":_vm._s(_vm.title)}}),_vm._v(" "),_c('div',{staticClass:"hint"},[_vm._t("label-hint")],2)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"field"},[(_vm.prefix)?_c('div',{staticClass:"prefix",domProps:{"innerHTML":_vm._s(_vm.prefix)}}):_vm._e(),_vm._v(" "),(_vm.value && _vm.type === 'text')?_c('div',{staticClass:"value",domProps:{"innerHTML":_vm._s(_vm.value)}}):_vm._e(),_vm._v(" "),(!_vm.value)?_c('div',{staticClass:"value"},[_vm._t("default")],2):_vm._e(),_vm._v(" "),(_vm.postfix && _vm.type === 'text')?_c('div',{staticClass:"postfix",domProps:{"innerHTML":_vm._s(_vm.postfix)}}):_vm._e(),_vm._v(" "),(_vm.type === 'boolean')?_c('div',[_vm._v(_vm._s(parseInt(_vm.value) === 1 || _vm.value === 'true' || _vm.value === 'y' ? 'Да' : 'Нет'))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"hint"},[_vm._t("hint")],2)]),_vm._v(" "),(_vm.errors.length > 0)?_c('span',{staticClass:"error"},_vm._l((_vm.errors),function(err){return _c('div',[_vm._v(_vm._s(err))])}),0):_vm._e()]):_vm._e()}
var staticRenderFns = []


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormInput_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d298d08_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormInput_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
function injectStyle (context) {
  __webpack_require__(23)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormInput_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d298d08_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormInput_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d298d08_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormInput_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("7f8ee5b2", content, true, {});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".form__field input[type=color]{width:50px;padding:0}", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form__field form__field--text",class:_vm.className},[(_vm.title)?_c('label',{attrs:{"for":_vm.id}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.title)}}),_vm._v(" "),_c('div',{staticClass:"hint"},[_vm._t("label-hint")],2)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"field"},[_c('input',{attrs:{"id":_vm.id,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"type":_vm.type,"disabled":_vm.disabled === true || _vm.processing === true,"required":_vm.required === true},domProps:{"value":_vm.val},on:{"focus":function($event){return _vm.setActive(1)},"blur":function($event){return _vm.setActive(0)}}}),_vm._v(" "),_c('div',{staticClass:"hint"},[_vm._t("hint")],2),_vm._v(" "),_c('div',{staticClass:"suggestion"},[_vm._t("suggestion")],2),_vm._v(" "),(Array.isArray(_vm.errors) && _vm.errors.length > 0)?_c('div',{staticClass:"error"},_vm._l((_vm.errors),function(err){return _c('span',[_vm._v(_vm._s(err))])}),0):_vm._e()])])}
var staticRenderFns = []


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormSelect_vue__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59dc11c2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormSelect_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormSelect_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59dc11c2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormSelect_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59dc11c2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormSelect_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_selectPicker_vue__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_915e1e38_hasScoped_false_optionsId_0_buble_transforms_vue_loader_lib_selector_type_template_index_0_selectPicker_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
function injectStyle (context) {
  __webpack_require__(29)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_selectPicker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_915e1e38_hasScoped_false_optionsId_0_buble_transforms_vue_loader_lib_selector_type_template_index_0_selectPicker_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_915e1e38_hasScoped_false_optionsId_0_buble_transforms_vue_loader_lib_selector_type_template_index_0_selectPicker_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("3f1d19d3", content, true, {});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".selecter,.selecter__input{display:inline-block;position:relative;width:100%}.selecter__input{height:33px;font-size:15px;color:#464646;min-width:150px;border:1px solid #ccc;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;padding:1px 15px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background-color:#fff;cursor:pointer}.selecter__input>span{display:inline-block;max-width:100%;overflow:hidden;height:100%;line-height:30px}.selecter__input:after{content:\"\";display:inline-block;position:absolute;top:45%;right:10px;margin:-4px 0 0;width:15px;height:15px;background-repeat:no-repeat;background-size:cover;background-image:url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB3aWR0aD0iMTc5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTM5NSA3MzZxMCAxMy0xMCAyM2wtNDY2IDQ2NnEtMTAgMTAtMjMgMTB0LTIzLTEwbC00NjYtNDY2cS0xMC0xMC0xMC0yM3QxMC0yM2w1MC01MHExMC0xMCAyMy0xMHQyMyAxMGwzOTMgMzkzIDM5My0zOTNxMTAtMTAgMjMtMTB0MjMgMTBsNTAgNTBxMTAgMTAgMTAgMjN6Ii8+PC9zdmc+\")}.selecter__dropdown{position:absolute;max-width:550px;margin-top:2px;top:100%;left:0;background-color:#fff;border:1px solid #ccc;z-index:100;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;box-shadow:0 6px 12px rgba(0,0,0,.175)}.selecter__dropdown,.selecter__dropdown .search{display:inline-block;width:100%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.selecter__dropdown .search{padding:5px 10px;border-bottom:1px solid #ccc}.selecter__dropdown .search input{border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;padding:5px 10px 5px 30px;border:0 solid #ccc;height:100%;line-height:24px;outline:none;background-position:0;background-size:contain;background-repeat:no-repeat;background-image:url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZXNjLz48ZGVmcy8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgZmlsbD0iIzkyOTI5MiIgaWQ9Imljb24tMTExLXNlYXJjaCI+PHBhdGggZD0iTTE5LjQyNzExNjQsMjEuNDI3MTE2NCBDMTguMDM3MjQ5NSwyMi40MTc0ODAzIDE2LjMzNjY1MjIsMjMgMTQuNSwyMyBDOS44MDU1NzkzOSwyMyA2LDE5LjE5NDQyMDYgNiwxNC41IEM2LDkuODA1NTc5MzkgOS44MDU1NzkzOSw2IDE0LjUsNiBDMTkuMTk0NDIwNiw2IDIzLDkuODA1NTc5MzkgMjMsMTQuNSBDMjMsMTYuMzM2NjUyMiAyMi40MTc0ODAzLDE4LjAzNzI0OTUgMjEuNDI3MTE2NCwxOS40MjcxMTY0IEwyNy4wMTE5MTc2LDI1LjAxMTkxNzYgQzI3LjU2MjExODYsMjUuNTYyMTE4NiAyNy41NTc1MzEzLDI2LjQ0MjQ2ODcgMjcuMDExNzE4NSwyNi45ODgyODE1IEwyNi45ODgyODE1LDI3LjAxMTcxODUgQzI2LjQ0Mzg2NDgsMjcuNTU2MTM1MiAyNS41NTc2MjA0LDI3LjU1NzYyMDQgMjUuMDExOTE3NiwyNy4wMTE5MTc2IEwxOS40MjcxMTY0LDIxLjQyNzExNjQgTDE5LjQyNzExNjQsMjEuNDI3MTE2NCBaIE0xNC41LDIxIEMxOC4wODk4NTExLDIxIDIxLDE4LjA4OTg1MTEgMjEsMTQuNSBDMjEsMTAuOTEwMTQ4OSAxOC4wODk4NTExLDggMTQuNSw4IEMxMC45MTAxNDg5LDggOCwxMC45MTAxNDg5IDgsMTQuNSBDOCwxOC4wODk4NTExIDEwLjkxMDE0ODksMjEgMTQuNSwyMSBMMTQuNSwyMSBaIiBpZD0ic2VhcmNoIi8+PC9nPjwvZz48L3N2Zz4=\")}.selecter__dropdown .list,.selecter__dropdown .search input{display:inline-block;width:100%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.selecter__dropdown .list{padding:4px 0;max-height:250px;overflow-y:auto}.selecter__dropdown .list__item{position:relative;display:inline-block;width:100%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;font-size:14px;padding:6px 10px 6px 34px}.selecter__dropdown .list__item div{overflow:hidden}.selecter__dropdown .list__item:before{content:\"\";display:inline-block;position:absolute;width:18px;height:18px;color:#dadada;left:10px;top:4px}.selecter__dropdown .list__item--checked:before{color:#000;background-image:url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI3LjcwNCw4LjM5N2MtMC4zOTQtMC4zOTEtMS4wMzQtMC4zOTEtMS40MjgsMCAgTDExLjk4OCwyMi41OWwtNi4yODItNi4xOTNjLTAuMzk0LTAuMzkxLTEuMDM0LTAuMzkxLTEuNDI4LDBjLTAuMzk0LDAuMzkxLTAuMzk0LDEuMDI0LDAsMS40MTRsNi45OTksNi44OTkgIGMwLjM5LDAuMzg2LDEuMDM5LDAuMzg2LDEuNDI5LDBMMjcuNzA0LDkuODExQzI4LjA5OSw5LjQyMSwyOC4wOTksOC43ODcsMjcuNzA0LDguMzk3QzI3LjMxLDguMDA2LDI4LjA5OSw4Ljc4NywyNy43MDQsOC4zOTd6IiBmaWxsPSIjMTIxMzEzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJDaGVjayIvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjwvc3ZnPg==\");background-size:contain;background-repeat:no-repeat;background-color:transparent}.selecter__dropdown .list__item:hover{background-color:#eee;cursor:pointer}.selecter__dropdown .footer{padding:5px 10px;background-color:#eee;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;text-align:right}.selecter__dropdown .footer button{padding:5px 10px;border:0;background-color:#c4c4c9;color:#4c4c4c;cursor:pointer}.selecter__dropdown .footer button:hover{background-color:#464646;color:#fff}.selecter__tagged-item{position:relative;display:inline-block;padding:3px 24px 3px 7px;height:100%;background-color:#eee;border:1px solid #ccc;margin-right:3px;margin-top:3px;box-sizing:border-box}.selecter__tagged-item-close{display:inline-block;position:absolute;width:10px;height:10px;right:3px;top:6px;background-size:contain;background-repeat:no-repeat;background-position:50%;background-image:url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTA1Ljk0Myw2LjA1OGMtOC4wNzctOC4wNzctMjEuMTcyLTguMDc3LTI5LjI0OSwwTDYuMDU4LDQ3Ni42OTNjLTguMDc3LDguMDc3LTguMDc3LDIxLjE3MiwwLDI5LjI0OQ0KCQkJQzEwLjA5Niw1MDkuOTgyLDE1LjM5LDUxMiwyMC42ODMsNTEyYzUuMjkzLDAsMTAuNTg2LTIuMDE5LDE0LjYyNS02LjA1OUw1MDUuOTQzLDM1LjMwNg0KCQkJQzUxNC4wMTksMjcuMjMsNTE0LjAxOSwxNC4xMzUsNTA1Ljk0Myw2LjA1OHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTUwNS45NDIsNDc2LjY5NEwzNS4zMDYsNi4wNTljLTguMDc2LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDgsMGMtOC4wNzcsOC4wNzYtOC4wNzcsMjEuMTcxLDAsMjkuMjQ4bDQ3MC42MzYsNDcwLjYzNg0KCQkJYzQuMDM4LDQuMDM5LDkuMzMyLDYuMDU4LDE0LjYyNSw2LjA1OGM1LjI5MywwLDEwLjU4Ny0yLjAxOSwxNC42MjQtNi4wNTdDNTE0LjAxOCw0OTcuODY2LDUxNC4wMTgsNDg0Ljc3MSw1MDUuOTQyLDQ3Ni42OTR6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=\")}.selecter--tagged .selecter__input{padding:0 30px 3px 3px;height:auto!important;min-height:33px}", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


const selectPickerBus = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  data () {
    return {
      body_click_handler: null
    }
  },
  created: function () {
    this.body_click_handler = () => {
      // console.log('body_click_handler')
      document.body.removeEventListener('click', this.body_click_handler)
      this.$emit('selectpickerClose', true)
    }
    this.$on('selectpickerOpen', () => {
      document.body.addEventListener('click', this.body_click_handler)
    })
    // this.$on('selectpickerClose', () => {})
  }
})

/* harmony default export */ __webpack_exports__["a"] = (selectPickerBus);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"selecter",class:[_vm.tagged ? 'selecter--tagged' : '']},[_c('div',{staticClass:"selecter__input",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.toggleSelect($event)}}},[(_vm.tagged === false)?_c('span',[_vm._v(_vm._s(_vm.textValue.length > 0 ? _vm.textValue : _vm.placeholder))]):_c('div',{staticClass:"selecter__tagged"},_vm._l((_vm.arValue),function(item,index){return _c('div',{staticClass:"selecter__tagged-item"},[_c('span',[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('span',{staticClass:"selecter__tagged-item-close",on:{"click":function($event){$event.stopPropagation();return _vm.selListValue(item.id, $event)}}})])}),0)]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.open === true),expression:"open === true"}],staticClass:"selecter__dropdown",class:[_vm.multi ? 'selecter__dropdown--multi' : '']},[(_vm.search === true)?_c('div',{staticClass:"search"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchText),expression:"searchText"}],attrs:{"placeholder":_vm.searchPlaceholder},domProps:{"value":(_vm.searchText)},on:{"click":function($event){$event.stopPropagation();},"input":function($event){if($event.target.composing){ return; }_vm.searchText=$event.target.value}}})]):_vm._e(),_vm._v(" "),(Object.keys(_vm.enumList).length > 0)?_c('div',{staticClass:"list",on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"page-down",undefined,$event.key,undefined)){ return null; }return _vm.onPageDown($event)},"scroll":function($event){$event.stopPropagation();}}},[(_vm.required === false && _vm.multi === false)?_c('div',{staticClass:"list__item",on:{"click":function($event){$event.stopPropagation();return _vm.selListValue(null, $event)}}},[_vm._v(_vm._s(_vm.noSelText))]):_vm._e(),_vm._v(" "),_vm._l((_vm.enumList),function(item,index){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.searchText || item.name.toLowerCase().indexOf(_vm.searchText.toLowerCase().trim()) > -1),expression:"!searchText || item.name.toLowerCase().indexOf(searchText.toLowerCase().trim()) > -1"}],staticClass:"list__item",class:_vm.valueSelected(item.id) ? 'list__item--checked' : '',on:{"click":function($event){$event.stopPropagation();return _vm.selListValue(item.id, $event)}}},[_c('div',[_vm._v(_vm._s(item.name))])])})],2):_vm._e(),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.multi === true && _vm.showActions === true),expression:"multi === true && showActions === true"}],staticClass:"footer"},[_c('button',{attrs:{"type":"button"},on:{"click":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"defaut",undefined,$event.key,undefined)){ return null; }$event.stopPropagation();return _vm.resetSelect($event)}}},[_vm._v("Сбросить")]),_vm._v(" "),_c('button',{attrs:{"type":"button"},on:{"click":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"defaut",undefined,$event.key,undefined)){ return null; }$event.stopPropagation();return _vm.closeSelect(true, false)}}},[_vm._v("Выбрать")])])])])}
var staticRenderFns = []


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form__field form__field--select",class:_vm.className},[(_vm.title)?_c('label',[_c('span',{domProps:{"innerHTML":_vm._s(_vm.title)}}),_vm._v(" "),_c('div',{staticClass:"hint"},[_vm._t("label-hint")],2)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"field"},[_c('selectpicker',{attrs:{"list":_vm.list,"multi":_vm.multi,"tagged":_vm.tagged,"search":_vm.search,"required":_vm.required,"placeholder":"Выбор значения","searchPlaceholder":"Поиск"},model:{value:(_vm.tmpValue),callback:function ($$v) {_vm.tmpValue=$$v},expression:"tmpValue"}}),_vm._v(" "),_c('div',{staticClass:"hint"},[_vm._t("hint")],2),_vm._v(" "),(_vm.errors.length > 0)?_c('span',{staticClass:"error"},_vm._l((_vm.errors),function(err){return _c('div',[_vm._v(_vm._s(err))])}),0):_vm._e()],1)])}
var staticRenderFns = []


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormText_vue__ = __webpack_require__(12);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26476c34_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormText_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
function injectStyle (context) {
  __webpack_require__(35)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormText_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26476c34_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormText_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26476c34_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormText_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("72f82448", content, true, {});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".form__field input[type=color]{width:50px;padding:0}", ""]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form__field form__field--text",class:_vm.className},[(_vm.title)?_c('label',[_c('span',{domProps:{"innerHTML":_vm._s(_vm.title)}}),_vm._v(" "),_c('div',{staticClass:"hint"},[_vm._t("label-hint")],2)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"field"},[_c('textarea',{style:({minHeight: _vm.minHeight + 'px'}),attrs:{"disabled":_vm.disabled === true || _vm.processing === true},on:{"focus":function($event){return _vm.setActive(1)},"blur":function($event){return _vm.setActive(0)}}},[_vm._v(_vm._s(_vm.val))]),_vm._v(" "),_c('div',{staticClass:"hint"},[_vm._t("hint")],2),_vm._v(" "),(_vm.errors.length > 0)?_c('span',{staticClass:"error"},_vm._l((_vm.errors),function(err){return _c('div',[_vm._v(_vm._s(err))])}),0):_vm._e()])])}
var staticRenderFns = []


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormCheckbox_vue__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4956f9d9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormCheckbox_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormCheckbox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4956f9d9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormCheckbox_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4956f9d9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormCheckbox_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form__field form__field--checkbox",class:_vm.className},[(_vm.title)?_c('label',[_c('span',{domProps:{"innerHTML":_vm._s(_vm.title)}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"field"},[_c('div',{staticClass:"checkbox",class:_vm.checked === true ? 'checked' : 'no',on:{"click":_vm.change}}),_vm._v(" "),(_vm.errors.length > 0)?_c('span',{staticClass:"error"},_vm._l((_vm.errors),function(err){return _c('div',[_vm._v(_vm._s(err))])}),0):_vm._e()])])}
var staticRenderFns = []


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormFile_vue__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41f38c95_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormFile_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormFile_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41f38c95_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormFile_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41f38c95_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormFile_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"from-view-block from-view-block--add-file"},[_c('div',{staticStyle:{"height":"0!important","width":"0","padding":"0 !important","overflow":"hidden!important"}},[_c('input',{attrs:{"type":"file","disabled":_vm.disabled === true || _vm.processing === true,"multiple":_vm.multi},on:{"change":_vm.changeHandler}})]),_vm._v(" "),(_vm.files.length > 0)?_c('div',{ref:"mainContainer",staticClass:"file-list"},_vm._l((_vm.files),function(file,key){return _c('div',{staticClass:"file-list__item"},[_c('div',{staticClass:"file-card"},[_vm._t("file",[_c('div',{staticClass:"file-card__img"},[(!_vm.files_preview[key] && file.type.match('application/pdf'))?_c('img',{staticClass:"img-pre",attrs:{"src":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIHZpZXdCb3g9IjAgMCA0OSA2NCIgd2lkdGg9IjQ5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2NiMDYwNjsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNmYjhkOGQ7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQogICAgPC9zdHlsZT48L2RlZnM+PGc+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDkuMDAwLDE2Ljg0MiBMNDkuMDAwLDU4Ljk0NyBDNDkuMDAwLDYxLjczOCA0Ni43MzAsNjQuMDAwIDQzLjkzMSw2NC4wMDAgTDUuMDY5LDY0LjAwMCBDMi4yNjksNjQuMDAwIC0wLjAwMCw2MS43MzggLTAuMDAwLDU4Ljk0NyBMLTAuMDAwLDUuMDUzIEMtMC4wMDAsMi4yNjIgMi4yNjksLTAuMDAwIDUuMDY5LC0wLjAwMCBMMzIuMTAzLC0wLjAwMCBMNDkuMDAwLDE2Ljg0MiBaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDkuMDAwLDE1Ljg5OSBMNDkuMDAwLDE3Ljk5NSBMMzUuMTg3LDE3Ljk5NSBDMzIuMzI3LDE3Ljk5NSAzMS4wMDgsMTUuNjc1IDMxLjAwOCwxMi44MTQgTDMxLjAwOCwtMC4wMDAgTDMzLjEwMCwtMC4wMDAgTDQ5LjAwMCwxNS44OTkgWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTM3LjYwNiwzNC4wNDcgQzM3LjE3MCwzMy45MDMgMzYuNzUwLDMzLjgzMCAzNi4zNDUsMzMuODMwIEMzNS44ODUsMzMuODMwIDM1LjU2OSwzMy45MjUgMzUuMzk2LDM0LjExNSBDMzUuMjI0LDM0LjMwNSAzNS4xMzgsMzQuNjQxIDM1LjEzOCwzNS4xMjQgTDM1LjEzOCwzNi4wNDcgTDM3LjA3MSwzNi4wNDcgTDM3LjA3MSwzNy45MDEgTDM1LjEzOCwzNy45MDEgTDM1LjEzOCw0NS41MzYgTDMyLjc5Niw0NS41MzYgTDMyLjc5NiwzNy45MDEgTDMxLjU4OSwzNy45MDEgTDMxLjU4OSwzNi4wNDcgTDMyLjc5NiwzNi4wNDcgTDMyLjc5NiwzNS4xMjQgQzMyLjc5NiwzMy45NDggMzMuMDg4LDMzLjA5OCAzMy42NzIsMzIuNTczIEMzNC4yNTYsMzIuMDQ4IDM1LjEzNCwzMS43ODYgMzYuMzA4LDMxLjc4NiBDMzYuODU5LDMxLjc4NiAzNy40NDMsMzEuODYxIDM4LjA2MCwzMi4wMTIgTDM3LjYwNiwzNC4wNDcgWk0yNy43OTYsNDQuNjEzIEMyNy4zNjAsNDQuOTgxIDI2LjkwMCw0NS4yNzQgMjYuNDE2LDQ1LjQ5MSBDMjUuOTMyLDQ1LjcwOCAyNS4zODIsNDUuODE2IDI0Ljc2NSw0NS44MTYgQzIzLjU2Nyw0NS44MTYgMjIuNjUwLDQ1LjM4NSAyMi4wMTUsNDQuNTIzIEMyMS4zNzksNDMuNjYwIDIxLjA2Miw0Mi40NDIgMjEuMDYyLDQwLjg2OCBDMjEuMDYyLDM5LjI1OCAyMS40MTEsMzguMDA3IDIyLjExMCwzNy4xMTQgQzIyLjgwOSwzNi4yMjIgMjMuNzkwLDM1Ljc3NSAyNS4wNTUsMzUuNzc1IEMyNS41MDMsMzUuNzc1IDI1Ljk2MiwzNS44NjcgMjYuNDM0LDM2LjA1MSBDMjYuOTA2LDM2LjIzNSAyNy4yOTcsMzYuNDY5IDI3LjYwNSwzNi43NTIgTDI3LjYwNSwzMi4wNjYgTDI5Ljk0NywzMi4wNjYgTDI5Ljk0Nyw0NS41MzYgTDI3Ljc5Niw0NS41MzYgTDI3Ljc5Niw0NC42MTMgWk0yNy42MDUsMzguNjc5IEMyNy4zNTcsMzguNDU2IDI3LjA1MCwzOC4yNTggMjYuNjg0LDM4LjA4NiBDMjYuMzE4LDM3LjkxNSAyNS45NDQsMzcuODI5IDI1LjU2MywzNy44MjkgQzI0LjkzNCwzNy44MjkgMjQuNDI5LDM4LjA5OSAyNC4wNDgsMzguNjM4IEMyMy42NjYsMzkuMTc4IDIzLjQ3NiwzOS45MDkgMjMuNDc2LDQwLjgzMiBDMjMuNDc2LDQxLjc0MyAyMy42MzIsNDIuNDU3IDIzLjk0Myw0Mi45NzYgQzI0LjI1NSw0My40OTUgMjQuNzM3LDQzLjc1NCAyNS4zOTEsNDMuNzU0IEMyNS43NzgsNDMuNzU0IDI2LjE3Myw0My42NjUgMjYuNTc1LDQzLjQ4NyBDMjYuOTc3LDQzLjMwOSAyNy4zMjEsNDMuMDkwIDI3LjYwNSw0Mi44MzEgTDI3LjYwNSwzOC42NzkgWk0xNy41OTUsNDUuMjAxIEMxNy4wMjAsNDUuNjExIDE2LjMzNCw0NS44MTYgMTUuNTM1LDQ1LjgxNiBDMTQuNDgyLDQ1LjgxNiAxMy41ODQsNDUuNDg4IDEyLjg0MCw0NC44MzAgTDEyLjg0MCw0OS4xMDkgTDEwLjQ5OCw0OS4xMDkgTDEwLjQ5OCwzNi4wNDcgTDEyLjY1OCwzNi4wNDcgTDEyLjY1OCwzNi45NzggQzEzLjA5NCwzNi42MDQgMTMuNTUyLDM2LjMxMCAxNC4wMzMsMzYuMDk2IEMxNC41MTQsMzUuODgyIDE1LjA2NiwzNS43NzUgMTUuNjg5LDM1Ljc3NSBDMTYuODkzLDM1Ljc3NSAxNy44MTAsMzYuMTk3IDE4LjQzOSwzNy4wNDIgQzE5LjA2OCwzNy44ODYgMTkuMzgzLDM5LjExMyAxOS4zODMsNDAuNzIzIEMxOS4zODMsNDEuNzQzIDE5LjIyOSw0Mi42NDEgMTguOTIwLDQzLjQxOSBDMTguNjExLDQ0LjE5NyAxOC4xNzAsNDQuNzkxIDE3LjU5NSw0NS4yMDEgWk0xNi40ODgsMzguNjAyIEMxNi4xNjcsMzguMDg2IDE1LjY4OSwzNy44MjkgMTUuMDU0LDM3LjgyOSBDMTQuNjczLDM3LjgyOSAxNC4yODEsMzcuOTE4IDEzLjg3OSwzOC4wOTUgQzEzLjQ3NiwzOC4yNzMgMTMuMTMwLDM4LjQ5MiAxMi44NDAsMzguNzUxIEwxMi44NDAsNDIuOTAzIEMxMy4wODgsNDMuMTI3IDEzLjM5NSw0My4zMjQgMTMuNzYxLDQzLjQ5NiBDMTQuMTI3LDQzLjY2OCAxNC41MDMsNDMuNzU0IDE0Ljg5MSw0My43NTQgQzE1LjUzMiw0My43NTQgMTYuMDM5LDQzLjQ4MSAxNi40MTEsNDIuOTM1IEMxNi43ODMsNDIuMzg5IDE2Ljk2OSw0MS42NjQgMTYuOTY5LDQwLjc2MCBDMTYuOTY5LDM5LjgzNyAxNi44MDgsMzkuMTE4IDE2LjQ4OCwzOC42MDIgWiIvPjwvZz48L3N2Zz4="}}):(!_vm.files_preview[key] && (!file.type || file.type.match('image.*')))?_c('img',{staticClass:"img-pre",attrs:{"src":_vm.files_preview[key]}}):_c('img',{staticClass:"img-pre",attrs:{"src":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQ4IDQ4IiBoZWlnaHQ9IjQ4cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM3LDQ3SDExYy0yLjIwOSwwLTQtMS43OTEtNC00VjVjMC0yLjIwOSwxLjc5MS00LDQtNGgxOC45NzMgIGMwLjAwMiwwLDAuMDA1LDAsMC4wMDcsMGgwLjAySDMwYzAuMzIsMCwwLjU5MywwLjE2MSwwLjc3NiwwLjM5NWw5LjgyOSw5LjgyOUM0MC44NCwxMS40MDcsNDEsMTEuNjgsNDEsMTJsMCwwdjAuMDIxICBjMCwwLjAwMiwwLDAuMDAzLDAsMC4wMDVWNDNDNDEsNDUuMjA5LDM5LjIwOSw0NywzNyw0N3ogTTMxLDQuMzgxVjExaDYuNjE5TDMxLDQuMzgxeiBNMzksMTNoLTljLTAuNTUzLDAtMS0wLjQ0OC0xLTFWM0gxMSAgQzkuODk2LDMsOSwzLjg5Niw5LDV2MzhjMCwxLjEwNCwwLjg5NiwyLDIsMmgyNmMxLjEwNCwwLDItMC44OTYsMi0yVjEzeiBNMzMsMzlIMTVjLTAuNTUzLDAtMS0wLjQ0Ny0xLTFjMC0wLjU1MiwwLjQ0Ny0xLDEtMWgxOCAgYzAuNTUzLDAsMSwwLjQ0OCwxLDFDMzQsMzguNTUzLDMzLjU1MywzOSwzMywzOXogTTMzLDMxSDE1Yy0wLjU1MywwLTEtMC40NDctMS0xYzAtMC41NTIsMC40NDctMSwxLTFoMThjMC41NTMsMCwxLDAuNDQ4LDEsMSAgQzM0LDMwLjU1MywzMy41NTMsMzEsMzMsMzF6IE0zMywyM0gxNWMtMC41NTMsMC0xLTAuNDQ3LTEtMWMwLTAuNTUyLDAuNDQ3LTEsMS0xaDE4YzAuNTUzLDAsMSwwLjQ0OCwxLDFDMzQsMjIuNTUzLDMzLjU1MywyMywzMywyMyAgeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"}})]),_vm._v(" "),_c('div',{staticClass:"file-card__info"},[(_vm.fileName === true)?_c('span',{staticClass:"name"},[_vm._v(_vm._s(file.name))]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"size"},[_vm._v("size: "+_vm._s(Math.ceil(file.size / 1024))+"Кб")])])],null,{file: file, key: key}),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(file),expression:"file"}],staticClass:"remove",on:{"click":function($event){return _vm.removeFile(key, file)}}})],2)])}),0):_vm._e(),_vm._v(" "),_c('div',{staticClass:"file-buttons"},[_c('a',{on:{"click":function($event){return _vm.chooseFiles()}}},[_vm._v(_vm._s(_vm.buttonText ? _vm.buttonText : (_vm.multi ? 'Добавить' : 'Выбрать')))])])])}
var staticRenderFns = []


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormViewFiles_vue__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2afd7348_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormViewFiles_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormViewFiles_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2afd7348_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormViewFiles_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2afd7348_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormViewFiles_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"from-view-block from-view-block--files"},[_c('div',{staticClass:"view-files"},_vm._l((_vm.files),function(file,key){return _c('div',{staticClass:"view-files__item",class:_vm.removed ? 'view-files__item--removed' : ''},[_vm._t("file",[(typeof file === 'object')?_c('a',{attrs:{"href":file.file,"data-key":key}},[(file.name)?_c('span',[_vm._v(_vm._s(file.name)+" "+_vm._s(_vm.getFileName(file.name)))]):_vm._e(),_vm._v(" "),(file.size)?_c('span',[_vm._v(_vm._s(file.size))]):_vm._e()]):_vm._e(),_vm._v(" "),(typeof file === 'string')?_c('a',{attrs:{"href":file,"data-key":key}},[_vm._v("\n                    "+_vm._s(_vm.getFileName(file))+"\n                ")]):_vm._e()],null,{file: file, key: key}),_vm._v(" "),(_vm.removed)?_c('div',{staticClass:"remove",on:{"click":function($event){return _vm.remove(key, file)}}}):_vm._e()],2)}),0)])}
var staticRenderFns = []


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormViewImages_vue__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58ba7f82_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormViewImages_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormViewImages_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58ba7f82_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormViewImages_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58ba7f82_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormViewImages_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"from-view-block from-view-block--images"},[_c('div',{staticClass:"view-images"},_vm._l((_vm.images),function(file,key){return _c('div',{staticClass:"view-images__item"},[_vm._t("image",[_c('div',{staticClass:"image",style:({backgroundImage: 'url(' + file + ')'})})],null,{file: file, key: key}),_vm._v(" "),(_vm.removed)?_c('div',{staticClass:"remove",on:{"click":function($event){return _vm.remove(key, file)}}}):_vm._e()],2)}),0)])}
var staticRenderFns = []


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      formData: {},
      formErrors: {},
      formButtons: [],
      formSuccess: false,
      formProcessing: false
    };
  }
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map