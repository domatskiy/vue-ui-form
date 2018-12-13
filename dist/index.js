(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-ui-form"] = factory(require("vue"));
	else
		root["vue-ui-form"] = factory(root["vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_17__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
      errorEvent: [],
      processing: false
    };
  },

  methods: {
    setActive: function setActive(active) {
      this.focus_active = active;
    }
  },
  computed: {
    errors: function errors() {
      var err = [];
      if (this.error) {
        err.push(this.error);
      } else {
        if (Array.isArray(this.errorEvent)) {
          this.errorEvent.forEach(function (err) {
            err.push(err);
          });
        } else if (typeof this.errorEvent === 'string') {
          err.push(this.errorEvent);
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
  },
  created: function created() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0__formFieldBus__["a" /* default */].$on('form-interface-processing', function ($processing) {
      _this.processing = $processing;
    });
    __WEBPACK_IMPORTED_MODULE_0__formFieldBus__["a" /* default */].$on('errors', function ($errors) {
      _this.errorEvent = [];
    });
    __WEBPACK_IMPORTED_MODULE_0__formFieldBus__["a" /* default */].$on('error', function ($field, $error) {
      if (_this.errorCode && $field === _this.errorCode) {
        _this.errorEvent = $error;
      }
    });
  },
  mounted: function mounted() {
    if (typeof this.$el.tagName !== 'undefined' && this.$el) {
      var input = this.$el.querySelector('input');
      if (input) {
        var label = this.$el.querySelector('label');
        label.addEventListener('click', function () {
          input.focus();
        });
      }

      var textarea = this.$el.querySelector('textarea');
      if (textarea) {
        var _label = this.$el.querySelector('label');
        _label.addEventListener('click', function () {
          textarea.focus();
        });
      }
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(17);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormButton__ = __webpack_require__(4);
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
    }
  },
  data: function data() {
    return {};
  },

  mounted: function mounted() {},
  methods: {
    submitForm: function submitForm($event) {
      var _this = this;

      $event.preventDefault();
      $event.stopPropagation();
      this.buttons.forEach(function ($button) {
        if ($button.def === true) {
          _this.$emit($button.event, _this.data);
        }
      });
    },
    buttonClick: function buttonClick($ecode, $event) {
      $event.preventDefault();
      $event.stopPropagation();
      if (typeof $ecode === 'string') {
        this.$emit($ecode, this.data);
      }
    }
  },
  computed: {
    formClass: function formClass() {
      var classes = [];

      if (Array.isArray(this.err) && this.err.length > 0) {
        classes.push('form--error');
      } else if (_typeof(this.err) === 'object' && Object.keys(this.err).length > 0) {
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
    errors: {
      handler: function handler($errors, oldVal) {
        if ($errors === null) {
          __WEBPACK_IMPORTED_MODULE_1__formFieldBus__["a" /* default */].$emit('errors', []);
          return;
        }
        if (Array.isArray($errors)) {
          $errors.forEach(function ($err) {
            __WEBPACK_IMPORTED_MODULE_1__formFieldBus__["a" /* default */].$emit('errors', $err);
          });
        } else if ((typeof $errors === 'undefined' ? 'undefined' : _typeof($errors)) === 'object') {
          Object.keys($errors).map(function (key) {
            if (Array.isArray($errors[key])) {
              $errors[key].forEach(function ($err) {
                __WEBPACK_IMPORTED_MODULE_1__formFieldBus__["a" /* default */].$emit('error', key, $err);
              });
            } else if (typeof $errors[key] === 'string') {
              __WEBPACK_IMPORTED_MODULE_1__formFieldBus__["a" /* default */].$emit('error', key, $errors[key]);
            }
          });
        }
      },
      deep: true
    },
    processing: function processing($processing) {
      __WEBPACK_IMPORTED_MODULE_1__formFieldBus__["a" /* default */].$emit('form-interface-processing', $processing);
    }
  }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormButton = function FormButton($event, $name, $class, $def) {
  _classCallCheck(this, FormButton);

  this.name = typeof $name === 'string' && $name ? $name : '';
  this.event = typeof $event === 'string' && $event ? $event : '';
  this.class = typeof $class === 'string' && $class ? $class : this.event;
  this.def = typeof $def === 'boolean' && $def ? $def : false;
};

/* harmony default export */ __webpack_exports__["a"] = (FormButton);

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(24);
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
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formFieldBus__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FormFieldMixin__ = __webpack_require__(1);





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'FormSelect',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__FormFieldMixin__["a" /* default */]],
  components: {},
  props: {
    required: {
      type: Boolean,
      default: function _default() {
        return true;
      }
    },
    multi: {
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
      value_text: '',
      value_keys: [],
      values: []
    };
  },

  beforeMount: function beforeMount() {
    this.setNewValue();
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
    },
    stopScroll: function stopScroll(e) {
      e.stopPropagation();
    },
    openSelect: function openSelect(e) {
      e.stopPropagation();
      e.preventDefault();
      console.log('openSelect');
      __WEBPACK_IMPORTED_MODULE_0__formFieldBus__["a" /* default */].$emit('close', true);
      this.open = true;
      __WEBPACK_IMPORTED_MODULE_0__formFieldBus__["a" /* default */].$emit('open', true);
    },
    resetSelect: function resetSelect(e) {
      e.stopPropagation();
      e.preventDefault();
      console.log('resetSelect');
      this.values = [];
      this.close(false);
    },
    closeSelect: function closeSelect(e) {
      console.log('closeSelect');
      e.stopPropagation();
      e.preventDefault();
      this.close(false);
    },
    toggleSelect: function toggleSelect(e) {
      console.log('toggleSelect');
      if (this.open === false) {
        this.openSelect(e);
      } else {
        this.closeSelect(e);
      }
    },
    close: function close(check) {
      if (typeof check !== 'boolean') {
        check = false;
      }
      if (typeof this.values !== 'undefined' && (!check || check && this.multi === false)) {
        console.log('close, check=', check, this.values);
        this.open = false;
        if (this.multi === true) {
          this.$emit('input', this.values);
        } else {
          this.$emit('input', this.values.length > 0 ? this.values[0] : null);
        }
      }
    },
    selValue: function selValue($value, $event) {
      $event.stopPropagation();
      if ($value !== null) {
        if (this.multi) {
          var $index = this.values.indexOf($value);

          if ($index === -1) {
            this.values.push($value);
          } else {
            this.values.splice($index, 1);
          }
        } else {
          this.values = [$value];
        }
      } else if (!this.multi) {
        this.values = [];
      }
      this.close(true);
    },
    setNewValue: function setNewValue() {
      if (!Array.isArray(this.value)) {
        this.values = [this.value + ''];
      } else {
        var v = [];
        for (var k in this.value) {
          v.push(this.value[k] + '');
        }
        this.values = v;
      }
    },
    calcTitle: function calcTitle() {
      var _this2 = this;

      var text = [];
      if (Array.isArray(this.values) && this.values.length > 0) {
        this.values.forEach(function (val) {
          if (_this2.list.hasOwnProperty(val)) {
            text.push(_this2.list[val]);
          }
        });
      }

      this.value_text = text.length < 4 ? text.join(', ') : 'выбрано ' + text.length;
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
    open: function open(_open) {
      console.log('open', _open);
    },
    value: function value(newValue) {
      this.setNewValue();

      this.calcTitle();
    },
    values: function values(newValues) {
      this.calcTitle();
    }
  }
});

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
      return path.replace(/^.*[\\\/]/, '');
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
/* 14 */
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Components_FormInterface_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_FormView_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Components_FormInput_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_FormSelect_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_FormText_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_FormCheckbox_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_FormFile_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_FormViewFiles_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_FormViewImages_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__formMixin__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__FormButton__ = __webpack_require__(4);
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormInterface_vue__ = __webpack_require__(3);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30d20708_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormInterface_vue__ = __webpack_require__(18);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30d20708_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormInterface_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30d20708_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormInterface_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"form",class:_vm.formClass,on:{"submit":_vm.submitForm}},[(_vm.processing)?_c('div',{staticClass:"form__processing"},[_vm._t("processing",[_vm._v("Sending ...")])],2):_vm._e(),_vm._v(" "),(_vm.title)?_c('div',{staticClass:"form__title"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._v(" "),_vm._t("desc_before"),_vm._v(" "),_c('div',{staticClass:"form__body"},[_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"form__errors"}),_vm._v(" "),_vm._t("desc_after"),_vm._v(" "),_c('div',{staticClass:"form__buttons"},_vm._l((_vm.buttons),function(button){return _c('button',{class:[_vm.buttonsClass, button.code, button.class, (button.def === true ? (button.class ? button.class + '--def' : 'def') : null)],attrs:{"type":"button","disabled":_vm.processing === true},on:{"click":function($event){_vm.buttonClick(button.event, $event)}}},[_vm._v(_vm._s(button.name))])}))],2)}
var staticRenderFns = []


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormView_vue__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_165bcdec_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormView_vue__ = __webpack_require__(20);
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.value || _vm.canShowEmpty)?_c('div',{staticClass:"form__field form__field--view",class:_vm.className},[(_vm.title)?_c('label',[_c('span',{domProps:{"innerHTML":_vm._s(_vm.title)}}),_vm._v(" "),_c('div',{staticClass:"hint"},[_vm._t("label-hint")],2)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"field"},[(_vm.prefix)?_c('div',{staticClass:"prefix",domProps:{"innerHTML":_vm._s(_vm.prefix)}}):_vm._e(),_vm._v(" "),(_vm.value && _vm.type === 'text')?_c('div',{staticClass:"value",domProps:{"innerHTML":_vm._s(_vm.value)}}):_vm._e(),_vm._v(" "),(!_vm.value)?_c('div',{staticClass:"value"},[_vm._t("default")],2):_vm._e(),_vm._v(" "),(_vm.postfix && _vm.type === 'text')?_c('div',{staticClass:"postfix",domProps:{"innerHTML":_vm._s(_vm.postfix)}}):_vm._e(),_vm._v(" "),(_vm.type === 'boolean')?_c('div',[_vm._v(_vm._s(parseInt(_vm.value) === 1 || _vm.value === 'true' || _vm.value === 'y' ? 'Да' : 'Нет'))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"hint"},[_vm._t("hint")],2)]),_vm._v(" "),(_vm.errors.length > 0)?_c('span',{staticClass:"error"},_vm._l((_vm.errors),function(err){return _c('div',[_vm._v(_vm._s(err))])})):_vm._e()]):_vm._e()}
var staticRenderFns = []


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormInput_vue__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e0448b9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormInput_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
function injectStyle (context) {
  __webpack_require__(22)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e0448b9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormInput_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e0448b9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormInput_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("48b7349c", content, true, {});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".form__field input[type=color]{width:50px;padding:0}", ""]);

// exports


/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form__field form__field--text",class:_vm.className},[(_vm.title)?_c('label',[_c('span',{domProps:{"innerHTML":_vm._s(_vm.title)}}),_vm._v(" "),_c('div',{staticClass:"hint"},[_vm._t("label-hint")],2)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"field"},[_c('input',{attrs:{"type":_vm.type,"disabled":_vm.disabled === true || _vm.processing === true},domProps:{"value":_vm.val},on:{"focus":function($event){_vm.setActive(1)},"blur":function($event){_vm.setActive(0)}}}),_vm._v(" "),_c('div',{staticClass:"hint"},[_vm._t("hint")],2),_vm._v(" "),_c('div',{staticClass:"suggestion"},[_vm._t("suggestion")],2),_vm._v(" "),(_vm.errors.length > 0)?_c('span',{staticClass:"error"},_vm._l((_vm.errors),function(err){return _c('div',[_vm._v(_vm._s(err))])})):_vm._e()])])}
var staticRenderFns = []


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormSelect_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f1146e90_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormSelect_vue__ = __webpack_require__(27);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f1146e90_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormSelect_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f1146e90_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormSelect_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form__field form__field--select",class:_vm.className},[(_vm.title)?_c('label',[_c('span',{domProps:{"innerHTML":_vm._s(_vm.title)}}),_vm._v(" "),_c('div',{staticClass:"hint"},[_vm._t("label-hint")],2)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"field"},[_c('div',{staticClass:"select"},[_c('div',{staticClass:"select__input",on:{"click":_vm.toggleSelect}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.value_text)}})]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.open === true),expression:"open === true"}],staticClass:"select__dropdown"},[(_vm.list.length > 0 || Object.keys(_vm.list).length > 0)?_c('div',{staticClass:"list",on:{"wheel":_vm.stopScroll}},[(!_vm.required && !_vm.multi)?_c('div',{staticClass:"list__item list__item--empty",on:{"click":function($event){_vm.selValue(null, $event)}}},[_vm._v("- не выбрано -")]):_vm._e(),_vm._v(" "),_vm._l((_vm.list),function(text,val){return _c('div',{staticClass:"list__item",class:_vm.values && _vm.values.indexOf(val) > -1 ? 'list__item--checked' : '',on:{"click":function($event){_vm.selValue(val, $event)}}},[_c('span',[_vm._v(_vm._s(text))])])})],2):_vm._e(),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.multi === true),expression:"multi === true"}],staticClass:"footer"},[_c('button',{attrs:{"type":"button"},on:{"click":_vm.resetSelect}},[_vm._v("Сбросить")]),_vm._v(" "),_c('button',{attrs:{"type":"button"},on:{"click":function($event){_vm.closeSelect($event)}}},[_vm._v("Выбрать")])])])]),_vm._v(" "),_c('div',{staticClass:"hint"},[_vm._t("hint")],2),_vm._v(" "),(_vm.errors.length > 0)?_c('span',{staticClass:"error"},_vm._l((_vm.errors),function(err){return _c('div',[_vm._v(_vm._s(err))])})):_vm._e()])])}
var staticRenderFns = []


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormText_vue__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26476c34_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormText_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("19f3649c", content, true, {});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".form__field input[type=color]{width:50px;padding:0}", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form__field form__field--text",class:_vm.className},[(_vm.title)?_c('label',[_c('span',{domProps:{"innerHTML":_vm._s(_vm.title)}}),_vm._v(" "),_c('div',{staticClass:"hint"},[_vm._t("label-hint")],2)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"field"},[_c('textarea',{style:({minHeight: _vm.minHeight + 'px'}),attrs:{"disabled":_vm.disabled === true || _vm.processing === true},on:{"focus":function($event){_vm.setActive(1)},"blur":function($event){_vm.setActive(0)}}},[_vm._v(_vm._s(_vm.val))]),_vm._v(" "),_c('div',{staticClass:"hint"},[_vm._t("hint")],2),_vm._v(" "),(_vm.errors.length > 0)?_c('span',{staticClass:"error"},_vm._l((_vm.errors),function(err){return _c('div',[_vm._v(_vm._s(err))])})):_vm._e()])])}
var staticRenderFns = []


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormCheckbox_vue__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4956f9d9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormCheckbox_vue__ = __webpack_require__(33);
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form__field form__field--checkbox",class:_vm.className},[(_vm.title)?_c('label',[_c('span',{domProps:{"innerHTML":_vm._s(_vm.title)}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"field"},[_c('div',{staticClass:"checkbox",class:_vm.checked === true ? 'checked' : 'no',on:{"click":_vm.change}}),_vm._v(" "),(_vm.errors.length > 0)?_c('span',{staticClass:"error"},_vm._l((_vm.errors),function(err){return _c('div',[_vm._v(_vm._s(err))])})):_vm._e()])])}
var staticRenderFns = []


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormFile_vue__ = __webpack_require__(12);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24e4143a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormFile_vue__ = __webpack_require__(53);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24e4143a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormFile_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24e4143a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormFile_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 35 */,
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormViewFiles_vue__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_454cbd84_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormViewFiles_vue__ = __webpack_require__(37);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_454cbd84_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormViewFiles_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_454cbd84_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormViewFiles_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"from-view-block from-view-block--files"},[_c('div',{staticClass:"view-files"},_vm._l((_vm.files),function(file,key){return _c('div',{staticClass:"view-files__item",class:_vm.removed ? 'view-files__item--removed' : ''},[_vm._t("file",[(typeof file === 'object')?_c('a',{attrs:{"href":file.file,"data-key":key}},[(file.name)?_c('span',[_vm._v(_vm._s(file.name)+" "+_vm._s(_vm.getFileName(file.name)))]):_vm._e(),_vm._v(" "),(file.size)?_c('span',[_vm._v(_vm._s(file.size))]):_vm._e()]):_vm._e(),_vm._v(" "),(typeof file === 'string')?_c('a',{attrs:{"href":file,"data-key":key}},[_vm._v("\n                    "+_vm._s(_vm.getFileName(file))+"\n                ")]):_vm._e()],null,{file: file, key: key}),_vm._v(" "),(_vm.removed)?_c('div',{staticClass:"remove",on:{"click":function($event){_vm.remove(key, file)}}}):_vm._e()],2)}))])}
var staticRenderFns = []


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormViewImages_vue__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58ba7f82_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormViewImages_vue__ = __webpack_require__(39);
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
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"from-view-block from-view-block--images"},[_c('div',{staticClass:"view-images"},_vm._l((_vm.images),function(file,key){return _c('div',{staticClass:"view-images__item"},[_vm._t("image",[_c('div',{staticClass:"image",style:({backgroundImage: 'url(' + file + ')'})})],null,{file: file, key: key}),_vm._v(" "),(_vm.removed)?_c('div',{staticClass:"remove",on:{"click":function($event){_vm.remove(key, file)}}}):_vm._e()],2)}))])}
var staticRenderFns = []


/***/ }),
/* 40 */
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

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"from-view-block from-view-block--add-file"},[_c('div',{staticStyle:{"height":"0!important","width":"0","padding":"0 !important","overflow":"hidden!important"}},[_c('input',{attrs:{"type":"file","disabled":_vm.disabled === true || _vm.processing === true,"multiple":_vm.multi},on:{"change":_vm.changeHandler}})]),_vm._v(" "),(_vm.files.length > 0)?_c('div',{ref:"mainContainer",staticClass:"file-list"},_vm._l((_vm.files),function(file,key){return _c('div',{staticClass:"file-list__item"},[_c('div',{staticClass:"file-card"},[_vm._t("file",[_c('div',{staticClass:"file-card__img"},[(!_vm.files_preview[key] && file.type.match('application/pdf'))?_c('img',{staticClass:"img-pre",attrs:{"src":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIHZpZXdCb3g9IjAgMCA0OSA2NCIgd2lkdGg9IjQ5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2NiMDYwNjsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNmYjhkOGQ7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQogICAgPC9zdHlsZT48L2RlZnM+PGc+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDkuMDAwLDE2Ljg0MiBMNDkuMDAwLDU4Ljk0NyBDNDkuMDAwLDYxLjczOCA0Ni43MzAsNjQuMDAwIDQzLjkzMSw2NC4wMDAgTDUuMDY5LDY0LjAwMCBDMi4yNjksNjQuMDAwIC0wLjAwMCw2MS43MzggLTAuMDAwLDU4Ljk0NyBMLTAuMDAwLDUuMDUzIEMtMC4wMDAsMi4yNjIgMi4yNjksLTAuMDAwIDUuMDY5LC0wLjAwMCBMMzIuMTAzLC0wLjAwMCBMNDkuMDAwLDE2Ljg0MiBaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDkuMDAwLDE1Ljg5OSBMNDkuMDAwLDE3Ljk5NSBMMzUuMTg3LDE3Ljk5NSBDMzIuMzI3LDE3Ljk5NSAzMS4wMDgsMTUuNjc1IDMxLjAwOCwxMi44MTQgTDMxLjAwOCwtMC4wMDAgTDMzLjEwMCwtMC4wMDAgTDQ5LjAwMCwxNS44OTkgWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTM3LjYwNiwzNC4wNDcgQzM3LjE3MCwzMy45MDMgMzYuNzUwLDMzLjgzMCAzNi4zNDUsMzMuODMwIEMzNS44ODUsMzMuODMwIDM1LjU2OSwzMy45MjUgMzUuMzk2LDM0LjExNSBDMzUuMjI0LDM0LjMwNSAzNS4xMzgsMzQuNjQxIDM1LjEzOCwzNS4xMjQgTDM1LjEzOCwzNi4wNDcgTDM3LjA3MSwzNi4wNDcgTDM3LjA3MSwzNy45MDEgTDM1LjEzOCwzNy45MDEgTDM1LjEzOCw0NS41MzYgTDMyLjc5Niw0NS41MzYgTDMyLjc5NiwzNy45MDEgTDMxLjU4OSwzNy45MDEgTDMxLjU4OSwzNi4wNDcgTDMyLjc5NiwzNi4wNDcgTDMyLjc5NiwzNS4xMjQgQzMyLjc5NiwzMy45NDggMzMuMDg4LDMzLjA5OCAzMy42NzIsMzIuNTczIEMzNC4yNTYsMzIuMDQ4IDM1LjEzNCwzMS43ODYgMzYuMzA4LDMxLjc4NiBDMzYuODU5LDMxLjc4NiAzNy40NDMsMzEuODYxIDM4LjA2MCwzMi4wMTIgTDM3LjYwNiwzNC4wNDcgWk0yNy43OTYsNDQuNjEzIEMyNy4zNjAsNDQuOTgxIDI2LjkwMCw0NS4yNzQgMjYuNDE2LDQ1LjQ5MSBDMjUuOTMyLDQ1LjcwOCAyNS4zODIsNDUuODE2IDI0Ljc2NSw0NS44MTYgQzIzLjU2Nyw0NS44MTYgMjIuNjUwLDQ1LjM4NSAyMi4wMTUsNDQuNTIzIEMyMS4zNzksNDMuNjYwIDIxLjA2Miw0Mi40NDIgMjEuMDYyLDQwLjg2OCBDMjEuMDYyLDM5LjI1OCAyMS40MTEsMzguMDA3IDIyLjExMCwzNy4xMTQgQzIyLjgwOSwzNi4yMjIgMjMuNzkwLDM1Ljc3NSAyNS4wNTUsMzUuNzc1IEMyNS41MDMsMzUuNzc1IDI1Ljk2MiwzNS44NjcgMjYuNDM0LDM2LjA1MSBDMjYuOTA2LDM2LjIzNSAyNy4yOTcsMzYuNDY5IDI3LjYwNSwzNi43NTIgTDI3LjYwNSwzMi4wNjYgTDI5Ljk0NywzMi4wNjYgTDI5Ljk0Nyw0NS41MzYgTDI3Ljc5Niw0NS41MzYgTDI3Ljc5Niw0NC42MTMgWk0yNy42MDUsMzguNjc5IEMyNy4zNTcsMzguNDU2IDI3LjA1MCwzOC4yNTggMjYuNjg0LDM4LjA4NiBDMjYuMzE4LDM3LjkxNSAyNS45NDQsMzcuODI5IDI1LjU2MywzNy44MjkgQzI0LjkzNCwzNy44MjkgMjQuNDI5LDM4LjA5OSAyNC4wNDgsMzguNjM4IEMyMy42NjYsMzkuMTc4IDIzLjQ3NiwzOS45MDkgMjMuNDc2LDQwLjgzMiBDMjMuNDc2LDQxLjc0MyAyMy42MzIsNDIuNDU3IDIzLjk0Myw0Mi45NzYgQzI0LjI1NSw0My40OTUgMjQuNzM3LDQzLjc1NCAyNS4zOTEsNDMuNzU0IEMyNS43NzgsNDMuNzU0IDI2LjE3Myw0My42NjUgMjYuNTc1LDQzLjQ4NyBDMjYuOTc3LDQzLjMwOSAyNy4zMjEsNDMuMDkwIDI3LjYwNSw0Mi44MzEgTDI3LjYwNSwzOC42NzkgWk0xNy41OTUsNDUuMjAxIEMxNy4wMjAsNDUuNjExIDE2LjMzNCw0NS44MTYgMTUuNTM1LDQ1LjgxNiBDMTQuNDgyLDQ1LjgxNiAxMy41ODQsNDUuNDg4IDEyLjg0MCw0NC44MzAgTDEyLjg0MCw0OS4xMDkgTDEwLjQ5OCw0OS4xMDkgTDEwLjQ5OCwzNi4wNDcgTDEyLjY1OCwzNi4wNDcgTDEyLjY1OCwzNi45NzggQzEzLjA5NCwzNi42MDQgMTMuNTUyLDM2LjMxMCAxNC4wMzMsMzYuMDk2IEMxNC41MTQsMzUuODgyIDE1LjA2NiwzNS43NzUgMTUuNjg5LDM1Ljc3NSBDMTYuODkzLDM1Ljc3NSAxNy44MTAsMzYuMTk3IDE4LjQzOSwzNy4wNDIgQzE5LjA2OCwzNy44ODYgMTkuMzgzLDM5LjExMyAxOS4zODMsNDAuNzIzIEMxOS4zODMsNDEuNzQzIDE5LjIyOSw0Mi42NDEgMTguOTIwLDQzLjQxOSBDMTguNjExLDQ0LjE5NyAxOC4xNzAsNDQuNzkxIDE3LjU5NSw0NS4yMDEgWk0xNi40ODgsMzguNjAyIEMxNi4xNjcsMzguMDg2IDE1LjY4OSwzNy44MjkgMTUuMDU0LDM3LjgyOSBDMTQuNjczLDM3LjgyOSAxNC4yODEsMzcuOTE4IDEzLjg3OSwzOC4wOTUgQzEzLjQ3NiwzOC4yNzMgMTMuMTMwLDM4LjQ5MiAxMi44NDAsMzguNzUxIEwxMi44NDAsNDIuOTAzIEMxMy4wODgsNDMuMTI3IDEzLjM5NSw0My4zMjQgMTMuNzYxLDQzLjQ5NiBDMTQuMTI3LDQzLjY2OCAxNC41MDMsNDMuNzU0IDE0Ljg5MSw0My43NTQgQzE1LjUzMiw0My43NTQgMTYuMDM5LDQzLjQ4MSAxNi40MTEsNDIuOTM1IEMxNi43ODMsNDIuMzg5IDE2Ljk2OSw0MS42NjQgMTYuOTY5LDQwLjc2MCBDMTYuOTY5LDM5LjgzNyAxNi44MDgsMzkuMTE4IDE2LjQ4OCwzOC42MDIgWiIvPjwvZz48L3N2Zz4="}}):(!_vm.files_preview[key] && (!file.type || file.type.match('image.*')))?_c('img',{staticClass:"img-pre",attrs:{"src":_vm.files_preview[key]}}):_c('img',{staticClass:"img-pre",attrs:{"src":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQ4IDQ4IiBoZWlnaHQ9IjQ4cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM3LDQ3SDExYy0yLjIwOSwwLTQtMS43OTEtNC00VjVjMC0yLjIwOSwxLjc5MS00LDQtNGgxOC45NzMgIGMwLjAwMiwwLDAuMDA1LDAsMC4wMDcsMGgwLjAySDMwYzAuMzIsMCwwLjU5MywwLjE2MSwwLjc3NiwwLjM5NWw5LjgyOSw5LjgyOUM0MC44NCwxMS40MDcsNDEsMTEuNjgsNDEsMTJsMCwwdjAuMDIxICBjMCwwLjAwMiwwLDAuMDAzLDAsMC4wMDVWNDNDNDEsNDUuMjA5LDM5LjIwOSw0NywzNyw0N3ogTTMxLDQuMzgxVjExaDYuNjE5TDMxLDQuMzgxeiBNMzksMTNoLTljLTAuNTUzLDAtMS0wLjQ0OC0xLTFWM0gxMSAgQzkuODk2LDMsOSwzLjg5Niw5LDV2MzhjMCwxLjEwNCwwLjg5NiwyLDIsMmgyNmMxLjEwNCwwLDItMC44OTYsMi0yVjEzeiBNMzMsMzlIMTVjLTAuNTUzLDAtMS0wLjQ0Ny0xLTFjMC0wLjU1MiwwLjQ0Ny0xLDEtMWgxOCAgYzAuNTUzLDAsMSwwLjQ0OCwxLDFDMzQsMzguNTUzLDMzLjU1MywzOSwzMywzOXogTTMzLDMxSDE1Yy0wLjU1MywwLTEtMC40NDctMS0xYzAtMC41NTIsMC40NDctMSwxLTFoMThjMC41NTMsMCwxLDAuNDQ4LDEsMSAgQzM0LDMwLjU1MywzMy41NTMsMzEsMzMsMzF6IE0zMywyM0gxNWMtMC41NTMsMC0xLTAuNDQ3LTEtMWMwLTAuNTUyLDAuNDQ3LTEsMS0xaDE4YzAuNTUzLDAsMSwwLjQ0OCwxLDFDMzQsMjIuNTUzLDMzLjU1MywyMywzMywyMyAgeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"}})]),_vm._v(" "),_c('div',{staticClass:"file-card__info"},[(_vm.fileName === true)?_c('span',{staticClass:"name"},[_vm._v(_vm._s(file.name))]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"size"},[_vm._v("size: "+_vm._s(Math.ceil(file.size / 1024))+"Кб")])])],null,{file: file, key: key}),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(file),expression:"file"}],staticClass:"remove",on:{"click":function($event){_vm.removeFile(key, file)}}})],2)])})):_vm._e(),_vm._v(" "),_c('div',{staticClass:"file-buttons"},[_c('a',{on:{"click":function($event){_vm.chooseFiles()}}},[_vm._v(_vm._s(_vm.buttonText ? _vm.buttonText : (_vm.multi ? 'Добавить' : 'Выбрать')))])])])}
var staticRenderFns = []


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map