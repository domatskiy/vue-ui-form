!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define([], factory) : "object" == typeof exports ? exports["vue-js-modal"] = factory() : root["vue-js-modal"] = factory();
}("undefined" != typeof self ? self : this, function() {
    return function(modules) {
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        var installedModules = {};
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        }, __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "/dist/", __webpack_require__(__webpack_require__.s = 38);
    }([ function(module, exports) {
        var global = module.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = global);
    }, function(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
        };
    }, function(module, exports, __webpack_require__) {
        var IObject = __webpack_require__(43), defined = __webpack_require__(14);
        module.exports = function(it) {
            return IObject(defined(it));
        };
    }, function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(4), createDesc = __webpack_require__(13);
        module.exports = __webpack_require__(5) ? function(object, key, value) {
            return dP.f(object, key, createDesc(1, value));
        } : function(object, key, value) {
            return object[key] = value, object;
        };
    }, function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(12), IE8_DOM_DEFINE = __webpack_require__(31), toPrimitive = __webpack_require__(20), dP = Object.defineProperty;
        exports.f = __webpack_require__(5) ? Object.defineProperty : function(O, P, Attributes) {
            if (anObject(O), P = toPrimitive(P, !0), anObject(Attributes), IE8_DOM_DEFINE) try {
                return dP(O, P, Attributes);
            } catch (e) {}
            if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
            return "value" in Attributes && (O[P] = Attributes.value), O;
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = !__webpack_require__(9)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, function(module, exports, __webpack_require__) {
        var store = __webpack_require__(17)("wks"), uid = __webpack_require__(11), Symbol = __webpack_require__(0).Symbol, USE_SYMBOL = "function" == typeof Symbol;
        (module.exports = function(name) {
            return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)("Symbol." + name));
        }).store = store;
    }, function(module, exports) {
        var core = module.exports = {
            version: "2.5.5"
        };
        "number" == typeof __e && (__e = core);
    }, function(module, exports) {
        module.exports = function(it) {
            return "object" == typeof it ? null !== it : "function" == typeof it;
        };
    }, function(module, exports) {
        module.exports = function(exec) {
            try {
                return !!exec();
            } catch (e) {
                return !0;
            }
        };
    }, function(module, exports, __webpack_require__) {
        var $keys = __webpack_require__(29), enumBugKeys = __webpack_require__(18);
        module.exports = Object.keys || function(O) {
            return $keys(O, enumBugKeys);
        };
    }, function(module, exports) {
        var id = 0, px = Math.random();
        module.exports = function(key) {
            return "Symbol(".concat(void 0 === key ? "" : key, ")_", (++id + px).toString(36));
        };
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(8);
        module.exports = function(it) {
            if (!isObject(it)) throw TypeError(it + " is not an object!");
            return it;
        };
    }, function(module, exports) {
        module.exports = function(bitmap, value) {
            return {
                enumerable: !(1 & bitmap),
                configurable: !(2 & bitmap),
                writable: !(4 & bitmap),
                value: value
            };
        };
    }, function(module, exports) {
        module.exports = function(it) {
            if (void 0 == it) throw TypeError("Can't call method on  " + it);
            return it;
        };
    }, function(module, exports) {
        var ceil = Math.ceil, floor = Math.floor;
        module.exports = function(it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };
    }, function(module, exports, __webpack_require__) {
        var shared = __webpack_require__(17)("keys"), uid = __webpack_require__(11);
        module.exports = function(key) {
            return shared[key] || (shared[key] = uid(key));
        };
    }, function(module, exports, __webpack_require__) {
        var global = __webpack_require__(0), store = global["__core-js_shared__"] || (global["__core-js_shared__"] = {});
        module.exports = function(key) {
            return store[key] || (store[key] = {});
        };
    }, function(module, exports) {
        module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(module, exports, __webpack_require__) {
        var global = __webpack_require__(0), core = __webpack_require__(7), ctx = __webpack_require__(48), hide = __webpack_require__(3), has = __webpack_require__(1), $export = function(type, name, source) {
            var key, own, out, IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W, exports = IS_GLOBAL ? core : core[name] || (core[name] = {}), expProto = exports.prototype, target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {}).prototype;
            IS_GLOBAL && (source = name);
            for (key in source) (own = !IS_FORCED && target && void 0 !== target[key]) && has(exports, key) || (out = own ? target[key] : source[key], 
            exports[key] = IS_GLOBAL && "function" != typeof target[key] ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                var F = function(a, b, c) {
                    if (this instanceof C) {
                        switch (arguments.length) {
                          case 0:
                            return new C();

                          case 1:
                            return new C(a);

                          case 2:
                            return new C(a, b);
                        }
                        return new C(a, b, c);
                    }
                    return C.apply(this, arguments);
                };
                return F.prototype = C.prototype, F;
            }(out) : IS_PROTO && "function" == typeof out ? ctx(Function.call, out) : out, IS_PROTO && ((exports.virtual || (exports.virtual = {}))[key] = out, 
            type & $export.R && expProto && !expProto[key] && hide(expProto, key, out)));
        };
        $export.F = 1, $export.G = 2, $export.S = 4, $export.P = 8, $export.B = 16, $export.W = 32, 
        $export.U = 64, $export.R = 128, module.exports = $export;
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(8);
        module.exports = function(it, S) {
            if (!isObject(it)) return it;
            var fn, val;
            if (S && "function" == typeof (fn = it.toString) && !isObject(val = fn.call(it))) return val;
            if ("function" == typeof (fn = it.valueOf) && !isObject(val = fn.call(it))) return val;
            if (!S && "function" == typeof (fn = it.toString) && !isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
        };
    }, function(module, exports) {
        module.exports = !0;
    }, function(module, exports) {
        module.exports = {};
    }, function(module, exports, __webpack_require__) {
        var def = __webpack_require__(4).f, has = __webpack_require__(1), TAG = __webpack_require__(6)("toStringTag");
        module.exports = function(it, tag, stat) {
            it && !has(it = stat ? it : it.prototype, TAG) && def(it, TAG, {
                configurable: !0,
                value: tag
            });
        };
    }, function(module, exports, __webpack_require__) {
        exports.f = __webpack_require__(6);
    }, function(module, exports, __webpack_require__) {
        var global = __webpack_require__(0), core = __webpack_require__(7), LIBRARY = __webpack_require__(21), wksExt = __webpack_require__(24), defineProperty = __webpack_require__(4).f;
        module.exports = function(name) {
            var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
            "_" == name.charAt(0) || name in $Symbol || defineProperty($Symbol, name, {
                value: wksExt.f(name)
            });
        };
    }, function(module, exports) {
        exports.f = {}.propertyIsEnumerable;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(40), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(50), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__), __WEBPACK_IMPORTED_MODULE_2__Classes_FormButton__ = __webpack_require__(74);
        __webpack_exports__.a = {
            name: "formInterface",
            props: {
                title: {
                    type: String,
                    required: !1,
                    default: ""
                },
                buttons: {
                    type: Array,
                    required: !1,
                    default: function() {
                        return [ new __WEBPACK_IMPORTED_MODULE_2__Classes_FormButton__.a("save", "Сохранить", null, !0), new __WEBPACK_IMPORTED_MODULE_2__Classes_FormButton__.a("apply", "Применить"), new __WEBPACK_IMPORTED_MODULE_2__Classes_FormButton__.a("cancel", "Отмена") ];
                    }
                },
                buttonsClass: {
                    type: String,
                    required: !1,
                    default: ""
                },
                data: {
                    type: Object,
                    required: !1,
                    default: function() {
                        return {};
                    }
                },
                errors: {
                    required: !1,
                    default: function() {
                        return {};
                    }
                },
                processing: {
                    type: Boolean,
                    required: !1,
                    default: function() {
                        return !1;
                    }
                }
            },
            data: function() {
                return {};
            },
            methods: {
                submitForm: function($event) {
                    var _this = this;
                    $event.preventDefault(), $event.stopPropagation(), this.buttons.forEach(function($button) {
                        !0 === $button.def && _this.$emit($button.code, _this.data);
                    });
                },
                buttonClick: function($code, $event) {
                    $event.preventDefault(), $event.stopPropagation(), this.$emit($code, this.data);
                }
            },
            computed: {
                formClass: function() {
                    var classes = [];
                    return Array.isArray(this.errors) && this.errors.length > 0 ? classes.push("form--error") : "object" === __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(this.errors) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.errors).length > 0 && classes.push("form--error"), 
                    this.processing && classes.push("form--processing"), this.success && classes.push("form--success"), 
                    classes.join(" ");
                }
            }
        };
    }, function(module, exports, __webpack_require__) {
        var defined = __webpack_require__(14);
        module.exports = function(it) {
            return Object(defined(it));
        };
    }, function(module, exports, __webpack_require__) {
        var has = __webpack_require__(1), toIObject = __webpack_require__(2), arrayIndexOf = __webpack_require__(44)(!1), IE_PROTO = __webpack_require__(16)("IE_PROTO");
        module.exports = function(object, names) {
            var key, O = toIObject(object), i = 0, result = [];
            for (key in O) key != IE_PROTO && has(O, key) && result.push(key);
            for (;names.length > i; ) has(O, key = names[i++]) && (~arrayIndexOf(result, key) || result.push(key));
            return result;
        };
    }, function(module, exports) {
        var toString = {}.toString;
        module.exports = function(it) {
            return toString.call(it).slice(8, -1);
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = !__webpack_require__(5) && !__webpack_require__(9)(function() {
            return 7 != Object.defineProperty(__webpack_require__(32)("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(8), document = __webpack_require__(0).document, is = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
            return is ? document.createElement(it) : {};
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var LIBRARY = __webpack_require__(21), $export = __webpack_require__(19), redefine = __webpack_require__(34), hide = __webpack_require__(3), Iterators = __webpack_require__(22), $iterCreate = __webpack_require__(55), setToStringTag = __webpack_require__(23), getPrototypeOf = __webpack_require__(58), ITERATOR = __webpack_require__(6)("iterator"), BUGGY = !([].keys && "next" in [].keys()), returnThis = function() {
            return this;
        };
        module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            $iterCreate(Constructor, NAME, next);
            var methods, key, IteratorPrototype, getMethod = function(kind) {
                if (!BUGGY && kind in proto) return proto[kind];
                switch (kind) {
                  case "keys":
                  case "values":
                    return function() {
                        return new Constructor(this, kind);
                    };
                }
                return function() {
                    return new Constructor(this, kind);
                };
            }, TAG = NAME + " Iterator", DEF_VALUES = "values" == DEFAULT, VALUES_BUG = !1, proto = Base.prototype, $native = proto[ITERATOR] || proto["@@iterator"] || DEFAULT && proto[DEFAULT], $default = $native || getMethod(DEFAULT), $entries = DEFAULT ? DEF_VALUES ? getMethod("entries") : $default : void 0, $anyNative = "Array" == NAME ? proto.entries || $native : $native;
            if ($anyNative && (IteratorPrototype = getPrototypeOf($anyNative.call(new Base()))) !== Object.prototype && IteratorPrototype.next && (setToStringTag(IteratorPrototype, TAG, !0), 
            LIBRARY || "function" == typeof IteratorPrototype[ITERATOR] || hide(IteratorPrototype, ITERATOR, returnThis)), 
            DEF_VALUES && $native && "values" !== $native.name && (VALUES_BUG = !0, $default = function() {
                return $native.call(this);
            }), LIBRARY && !FORCED || !BUGGY && !VALUES_BUG && proto[ITERATOR] || hide(proto, ITERATOR, $default), 
            Iterators[NAME] = $default, Iterators[TAG] = returnThis, DEFAULT) if (methods = {
                values: DEF_VALUES ? $default : getMethod("values"),
                keys: IS_SET ? $default : getMethod("keys"),
                entries: $entries
            }, FORCED) for (key in methods) key in proto || redefine(proto, key, methods[key]); else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
            return methods;
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(3);
    }, function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(12), dPs = __webpack_require__(56), enumBugKeys = __webpack_require__(18), IE_PROTO = __webpack_require__(16)("IE_PROTO"), Empty = function() {}, createDict = function() {
            var iframeDocument, iframe = __webpack_require__(32)("iframe"), i = enumBugKeys.length;
            for (iframe.style.display = "none", __webpack_require__(57).appendChild(iframe), 
            iframe.src = "javascript:", iframeDocument = iframe.contentWindow.document, iframeDocument.open(), 
            iframeDocument.write("<script>document.F=Object<\/script>"), iframeDocument.close(), 
            createDict = iframeDocument.F; i--; ) delete createDict.prototype[enumBugKeys[i]];
            return createDict();
        };
        module.exports = Object.create || function(O, Properties) {
            var result;
            return null !== O ? (Empty.prototype = anObject(O), result = new Empty(), Empty.prototype = null, 
            result[IE_PROTO] = O) : result = createDict(), void 0 === Properties ? result : dPs(result, Properties);
        };
    }, function(module, exports) {
        exports.f = Object.getOwnPropertySymbols;
    }, function(module, exports, __webpack_require__) {
        var $keys = __webpack_require__(29), hiddenKeys = __webpack_require__(18).concat("length", "prototype");
        exports.f = Object.getOwnPropertyNames || function(O) {
            return $keys(O, hiddenKeys);
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        var __WEBPACK_IMPORTED_MODULE_0__Components_FormInterface_vue__ = __webpack_require__(39), FormUI = {
            install: function(VueInstance, options) {
                console.log("FormUI install"), [].map(function(component) {
                    Vue.component(component.name, component);
                }), VueInstance.component("form-interface", __WEBPACK_IMPORTED_MODULE_0__Components_FormInterface_vue__.a);
            }
        };
        "undefined" != typeof window && window.Vue && window.Vue.use(FormUI), __webpack_exports__.default = FormUI;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormInterface_vue__ = __webpack_require__(27), __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7367a6d6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormInterface_vue__ = __webpack_require__(76), __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(77), Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__.a)(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FormInterface_vue__.a, __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7367a6d6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormInterface_vue__.a, __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7367a6d6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FormInterface_vue__.b, !1, null, null, null);
        Component.options.__file = "src\\Components\\FormInterface.vue", __webpack_exports__.a = Component.exports;
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(41),
            __esModule: !0
        };
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(42), module.exports = __webpack_require__(7).Object.keys;
    }, function(module, exports, __webpack_require__) {
        var toObject = __webpack_require__(28), $keys = __webpack_require__(10);
        __webpack_require__(47)("keys", function() {
            return function(it) {
                return $keys(toObject(it));
            };
        });
    }, function(module, exports, __webpack_require__) {
        var cof = __webpack_require__(30);
        module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
            return "String" == cof(it) ? it.split("") : Object(it);
        };
    }, function(module, exports, __webpack_require__) {
        var toIObject = __webpack_require__(2), toLength = __webpack_require__(45), toAbsoluteIndex = __webpack_require__(46);
        module.exports = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var value, O = toIObject($this), length = toLength(O.length), index = toAbsoluteIndex(fromIndex, length);
                if (IS_INCLUDES && el != el) {
                    for (;length > index; ) if ((value = O[index++]) != value) return !0;
                } else for (;length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                return !IS_INCLUDES && -1;
            };
        };
    }, function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(15), min = Math.min;
        module.exports = function(it) {
            return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
        };
    }, function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(15), max = Math.max, min = Math.min;
        module.exports = function(index, length) {
            return index = toInteger(index), index < 0 ? max(index + length, 0) : min(index, length);
        };
    }, function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(19), core = __webpack_require__(7), fails = __webpack_require__(9);
        module.exports = function(KEY, exec) {
            var fn = (core.Object || {})[KEY] || Object[KEY], exp = {};
            exp[KEY] = exec(fn), $export($export.S + $export.F * fails(function() {
                fn(1);
            }), "Object", exp);
        };
    }, function(module, exports, __webpack_require__) {
        var aFunction = __webpack_require__(49);
        module.exports = function(fn, that, length) {
            if (aFunction(fn), void 0 === that) return fn;
            switch (length) {
              case 1:
                return function(a) {
                    return fn.call(that, a);
                };

              case 2:
                return function(a, b) {
                    return fn.call(that, a, b);
                };

              case 3:
                return function(a, b, c) {
                    return fn.call(that, a, b, c);
                };
            }
            return function() {
                return fn.apply(that, arguments);
            };
        };
    }, function(module, exports) {
        module.exports = function(it) {
            if ("function" != typeof it) throw TypeError(it + " is not a function!");
            return it;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.__esModule = !0;
        var _iterator = __webpack_require__(51), _iterator2 = _interopRequireDefault(_iterator), _symbol = __webpack_require__(63), _symbol2 = _interopRequireDefault(_symbol), _typeof = "function" == typeof _symbol2.default && "symbol" == typeof _iterator2.default ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof _symbol2.default && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
        };
        exports.default = "function" == typeof _symbol2.default && "symbol" === _typeof(_iterator2.default) ? function(obj) {
            return void 0 === obj ? "undefined" : _typeof(obj);
        } : function(obj) {
            return obj && "function" == typeof _symbol2.default && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : void 0 === obj ? "undefined" : _typeof(obj);
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(52),
            __esModule: !0
        };
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(53), __webpack_require__(59), module.exports = __webpack_require__(24).f("iterator");
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var $at = __webpack_require__(54)(!0);
        __webpack_require__(33)(String, "String", function(iterated) {
            this._t = String(iterated), this._i = 0;
        }, function() {
            var point, O = this._t, index = this._i;
            return index >= O.length ? {
                value: void 0,
                done: !0
            } : (point = $at(O, index), this._i += point.length, {
                value: point,
                done: !1
            });
        });
    }, function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(15), defined = __webpack_require__(14);
        module.exports = function(TO_STRING) {
            return function(that, pos) {
                var a, b, s = String(defined(that)), i = toInteger(pos), l = s.length;
                return i < 0 || i >= l ? TO_STRING ? "" : void 0 : (a = s.charCodeAt(i), a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : b - 56320 + (a - 55296 << 10) + 65536);
            };
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var create = __webpack_require__(35), descriptor = __webpack_require__(13), setToStringTag = __webpack_require__(23), IteratorPrototype = {};
        __webpack_require__(3)(IteratorPrototype, __webpack_require__(6)("iterator"), function() {
            return this;
        }), module.exports = function(Constructor, NAME, next) {
            Constructor.prototype = create(IteratorPrototype, {
                next: descriptor(1, next)
            }), setToStringTag(Constructor, NAME + " Iterator");
        };
    }, function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(4), anObject = __webpack_require__(12), getKeys = __webpack_require__(10);
        module.exports = __webpack_require__(5) ? Object.defineProperties : function(O, Properties) {
            anObject(O);
            for (var P, keys = getKeys(Properties), length = keys.length, i = 0; length > i; ) dP.f(O, P = keys[i++], Properties[P]);
            return O;
        };
    }, function(module, exports, __webpack_require__) {
        var document = __webpack_require__(0).document;
        module.exports = document && document.documentElement;
    }, function(module, exports, __webpack_require__) {
        var has = __webpack_require__(1), toObject = __webpack_require__(28), IE_PROTO = __webpack_require__(16)("IE_PROTO"), ObjectProto = Object.prototype;
        module.exports = Object.getPrototypeOf || function(O) {
            return O = toObject(O), has(O, IE_PROTO) ? O[IE_PROTO] : "function" == typeof O.constructor && O instanceof O.constructor ? O.constructor.prototype : O instanceof Object ? ObjectProto : null;
        };
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(60);
        for (var global = __webpack_require__(0), hide = __webpack_require__(3), Iterators = __webpack_require__(22), TO_STRING_TAG = __webpack_require__(6)("toStringTag"), DOMIterables = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), i = 0; i < DOMIterables.length; i++) {
            var NAME = DOMIterables[i], Collection = global[NAME], proto = Collection && Collection.prototype;
            proto && !proto[TO_STRING_TAG] && hide(proto, TO_STRING_TAG, NAME), Iterators[NAME] = Iterators.Array;
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var addToUnscopables = __webpack_require__(61), step = __webpack_require__(62), Iterators = __webpack_require__(22), toIObject = __webpack_require__(2);
        module.exports = __webpack_require__(33)(Array, "Array", function(iterated, kind) {
            this._t = toIObject(iterated), this._i = 0, this._k = kind;
        }, function() {
            var O = this._t, kind = this._k, index = this._i++;
            return !O || index >= O.length ? (this._t = void 0, step(1)) : "keys" == kind ? step(0, index) : "values" == kind ? step(0, O[index]) : step(0, [ index, O[index] ]);
        }, "values"), Iterators.Arguments = Iterators.Array, addToUnscopables("keys"), addToUnscopables("values"), 
        addToUnscopables("entries");
    }, function(module, exports) {
        module.exports = function() {};
    }, function(module, exports) {
        module.exports = function(done, value) {
            return {
                value: value,
                done: !!done
            };
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(64),
            __esModule: !0
        };
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(65), __webpack_require__(71), __webpack_require__(72), __webpack_require__(73), 
        module.exports = __webpack_require__(7).Symbol;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var global = __webpack_require__(0), has = __webpack_require__(1), DESCRIPTORS = __webpack_require__(5), $export = __webpack_require__(19), redefine = __webpack_require__(34), META = __webpack_require__(66).KEY, $fails = __webpack_require__(9), shared = __webpack_require__(17), setToStringTag = __webpack_require__(23), uid = __webpack_require__(11), wks = __webpack_require__(6), wksExt = __webpack_require__(24), wksDefine = __webpack_require__(25), enumKeys = __webpack_require__(67), isArray = __webpack_require__(68), anObject = __webpack_require__(12), isObject = __webpack_require__(8), toIObject = __webpack_require__(2), toPrimitive = __webpack_require__(20), createDesc = __webpack_require__(13), _create = __webpack_require__(35), gOPNExt = __webpack_require__(69), $GOPD = __webpack_require__(70), $DP = __webpack_require__(4), $keys = __webpack_require__(10), gOPD = $GOPD.f, dP = $DP.f, gOPN = gOPNExt.f, $Symbol = global.Symbol, $JSON = global.JSON, _stringify = $JSON && $JSON.stringify, HIDDEN = wks("_hidden"), TO_PRIMITIVE = wks("toPrimitive"), isEnum = {}.propertyIsEnumerable, SymbolRegistry = shared("symbol-registry"), AllSymbols = shared("symbols"), OPSymbols = shared("op-symbols"), ObjectProto = Object.prototype, USE_NATIVE = "function" == typeof $Symbol, QObject = global.QObject, setter = !QObject || !QObject.prototype || !QObject.prototype.findChild, setSymbolDesc = DESCRIPTORS && $fails(function() {
            return 7 != _create(dP({}, "a", {
                get: function() {
                    return dP(this, "a", {
                        value: 7
                    }).a;
                }
            })).a;
        }) ? function(it, key, D) {
            var protoDesc = gOPD(ObjectProto, key);
            protoDesc && delete ObjectProto[key], dP(it, key, D), protoDesc && it !== ObjectProto && dP(ObjectProto, key, protoDesc);
        } : dP, wrap = function(tag) {
            var sym = AllSymbols[tag] = _create($Symbol.prototype);
            return sym._k = tag, sym;
        }, isSymbol = USE_NATIVE && "symbol" == typeof $Symbol.iterator ? function(it) {
            return "symbol" == typeof it;
        } : function(it) {
            return it instanceof $Symbol;
        }, $defineProperty = function(it, key, D) {
            return it === ObjectProto && $defineProperty(OPSymbols, key, D), anObject(it), key = toPrimitive(key, !0), 
            anObject(D), has(AllSymbols, key) ? (D.enumerable ? (has(it, HIDDEN) && it[HIDDEN][key] && (it[HIDDEN][key] = !1), 
            D = _create(D, {
                enumerable: createDesc(0, !1)
            })) : (has(it, HIDDEN) || dP(it, HIDDEN, createDesc(1, {})), it[HIDDEN][key] = !0), 
            setSymbolDesc(it, key, D)) : dP(it, key, D);
        }, $defineProperties = function(it, P) {
            anObject(it);
            for (var key, keys = enumKeys(P = toIObject(P)), i = 0, l = keys.length; l > i; ) $defineProperty(it, key = keys[i++], P[key]);
            return it;
        }, $create = function(it, P) {
            return void 0 === P ? _create(it) : $defineProperties(_create(it), P);
        }, $propertyIsEnumerable = function(key) {
            var E = isEnum.call(this, key = toPrimitive(key, !0));
            return !(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) && (!(E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]) || E);
        }, $getOwnPropertyDescriptor = function(it, key) {
            if (it = toIObject(it), key = toPrimitive(key, !0), it !== ObjectProto || !has(AllSymbols, key) || has(OPSymbols, key)) {
                var D = gOPD(it, key);
                return !D || !has(AllSymbols, key) || has(it, HIDDEN) && it[HIDDEN][key] || (D.enumerable = !0), 
                D;
            }
        }, $getOwnPropertyNames = function(it) {
            for (var key, names = gOPN(toIObject(it)), result = [], i = 0; names.length > i; ) has(AllSymbols, key = names[i++]) || key == HIDDEN || key == META || result.push(key);
            return result;
        }, $getOwnPropertySymbols = function(it) {
            for (var key, IS_OP = it === ObjectProto, names = gOPN(IS_OP ? OPSymbols : toIObject(it)), result = [], i = 0; names.length > i; ) !has(AllSymbols, key = names[i++]) || IS_OP && !has(ObjectProto, key) || result.push(AllSymbols[key]);
            return result;
        };
        USE_NATIVE || ($Symbol = function() {
            if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
            var tag = uid(arguments.length > 0 ? arguments[0] : void 0), $set = function(value) {
                this === ObjectProto && $set.call(OPSymbols, value), has(this, HIDDEN) && has(this[HIDDEN], tag) && (this[HIDDEN][tag] = !1), 
                setSymbolDesc(this, tag, createDesc(1, value));
            };
            return DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
                configurable: !0,
                set: $set
            }), wrap(tag);
        }, redefine($Symbol.prototype, "toString", function() {
            return this._k;
        }), $GOPD.f = $getOwnPropertyDescriptor, $DP.f = $defineProperty, __webpack_require__(37).f = gOPNExt.f = $getOwnPropertyNames, 
        __webpack_require__(26).f = $propertyIsEnumerable, __webpack_require__(36).f = $getOwnPropertySymbols, 
        DESCRIPTORS && !__webpack_require__(21) && redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, !0), 
        wksExt.f = function(name) {
            return wrap(wks(name));
        }), $export($export.G + $export.W + $export.F * !USE_NATIVE, {
            Symbol: $Symbol
        });
        for (var es6Symbols = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), j = 0; es6Symbols.length > j; ) wks(es6Symbols[j++]);
        for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; ) wksDefine(wellKnownSymbols[k++]);
        $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
            for: function(key) {
                return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
            },
            keyFor: function(sym) {
                if (!isSymbol(sym)) throw TypeError(sym + " is not a symbol!");
                for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
            },
            useSetter: function() {
                setter = !0;
            },
            useSimple: function() {
                setter = !1;
            }
        }), $export($export.S + $export.F * !USE_NATIVE, "Object", {
            create: $create,
            defineProperty: $defineProperty,
            defineProperties: $defineProperties,
            getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
            getOwnPropertyNames: $getOwnPropertyNames,
            getOwnPropertySymbols: $getOwnPropertySymbols
        }), $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
            var S = $Symbol();
            return "[null]" != _stringify([ S ]) || "{}" != _stringify({
                a: S
            }) || "{}" != _stringify(Object(S));
        })), "JSON", {
            stringify: function(it) {
                for (var replacer, $replacer, args = [ it ], i = 1; arguments.length > i; ) args.push(arguments[i++]);
                if ($replacer = replacer = args[1], (isObject(replacer) || void 0 !== it) && !isSymbol(it)) return isArray(replacer) || (replacer = function(key, value) {
                    if ("function" == typeof $replacer && (value = $replacer.call(this, key, value)), 
                    !isSymbol(value)) return value;
                }), args[1] = replacer, _stringify.apply($JSON, args);
            }
        }), $Symbol.prototype[TO_PRIMITIVE] || __webpack_require__(3)($Symbol.prototype, TO_PRIMITIVE, $Symbol.prototype.valueOf), 
        setToStringTag($Symbol, "Symbol"), setToStringTag(Math, "Math", !0), setToStringTag(global.JSON, "JSON", !0);
    }, function(module, exports, __webpack_require__) {
        var META = __webpack_require__(11)("meta"), isObject = __webpack_require__(8), has = __webpack_require__(1), setDesc = __webpack_require__(4).f, id = 0, isExtensible = Object.isExtensible || function() {
            return !0;
        }, FREEZE = !__webpack_require__(9)(function() {
            return isExtensible(Object.preventExtensions({}));
        }), setMeta = function(it) {
            setDesc(it, META, {
                value: {
                    i: "O" + ++id,
                    w: {}
                }
            });
        }, fastKey = function(it, create) {
            if (!isObject(it)) return "symbol" == typeof it ? it : ("string" == typeof it ? "S" : "P") + it;
            if (!has(it, META)) {
                if (!isExtensible(it)) return "F";
                if (!create) return "E";
                setMeta(it);
            }
            return it[META].i;
        }, getWeak = function(it, create) {
            if (!has(it, META)) {
                if (!isExtensible(it)) return !0;
                if (!create) return !1;
                setMeta(it);
            }
            return it[META].w;
        }, onFreeze = function(it) {
            return FREEZE && meta.NEED && isExtensible(it) && !has(it, META) && setMeta(it), 
            it;
        }, meta = module.exports = {
            KEY: META,
            NEED: !1,
            fastKey: fastKey,
            getWeak: getWeak,
            onFreeze: onFreeze
        };
    }, function(module, exports, __webpack_require__) {
        var getKeys = __webpack_require__(10), gOPS = __webpack_require__(36), pIE = __webpack_require__(26);
        module.exports = function(it) {
            var result = getKeys(it), getSymbols = gOPS.f;
            if (getSymbols) for (var key, symbols = getSymbols(it), isEnum = pIE.f, i = 0; symbols.length > i; ) isEnum.call(it, key = symbols[i++]) && result.push(key);
            return result;
        };
    }, function(module, exports, __webpack_require__) {
        var cof = __webpack_require__(30);
        module.exports = Array.isArray || function(arg) {
            return "Array" == cof(arg);
        };
    }, function(module, exports, __webpack_require__) {
        var toIObject = __webpack_require__(2), gOPN = __webpack_require__(37).f, toString = {}.toString, windowNames = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], getWindowNames = function(it) {
            try {
                return gOPN(it);
            } catch (e) {
                return windowNames.slice();
            }
        };
        module.exports.f = function(it) {
            return windowNames && "[object Window]" == toString.call(it) ? getWindowNames(it) : gOPN(toIObject(it));
        };
    }, function(module, exports, __webpack_require__) {
        var pIE = __webpack_require__(26), createDesc = __webpack_require__(13), toIObject = __webpack_require__(2), toPrimitive = __webpack_require__(20), has = __webpack_require__(1), IE8_DOM_DEFINE = __webpack_require__(31), gOPD = Object.getOwnPropertyDescriptor;
        exports.f = __webpack_require__(5) ? gOPD : function(O, P) {
            if (O = toIObject(O), P = toPrimitive(P, !0), IE8_DOM_DEFINE) try {
                return gOPD(O, P);
            } catch (e) {}
            if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
        };
    }, function(module, exports) {}, function(module, exports, __webpack_require__) {
        __webpack_require__(25)("asyncIterator");
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(25)("observable");
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(75), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__), FormButton = function FormButton($code, $name, $class, $def) {
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, FormButton), 
            this.name = $name, this.code = $code, this.class = $class, this.def = $def;
        };
        __webpack_exports__.a = FormButton;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = !0, exports.default = function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return render;
        }), __webpack_require__.d(__webpack_exports__, "b", function() {
            return staticRenderFns;
        });
        var render = function() {
            var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
            return _c("form", {
                staticClass: "form",
                class: _vm.formClass,
                on: {
                    submit: _vm.submitForm
                }
            }, [ _c("div", {
                staticClass: "form__processing"
            }, [ _vm._t("processing", [ _vm._v("Sending ...") ]) ], 2), _vm._v(" "), _vm.title ? _c("div", {
                staticClass: "form__title"
            }, [ _vm._v(_vm._s(_vm.title)) ]) : _vm._e(), _vm._v(" "), _vm._t("desc"), _vm._v(" "), _c("div", {
                staticClass: "form__body"
            }, [ _vm._t("default") ], 2), _vm._v(" "), _c("div", {
                staticClass: "form__errors"
            }, [ _vm._t("errors"), _vm._v(" "), _c("ul", _vm._l(_vm.errors, function(err) {
                return _c("li");
            })) ], 2), _vm._v(" "), _c("div", {
                staticClass: "form__buttons"
            }, _vm._l(_vm.buttons, function(button) {
                return _c("button", {
                    class: [ _vm.buttonsClass, button.code, button.class, !0 === button.def ? button.class ? button.class + "--def" : "def" : null ],
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function($event) {
                            _vm.buttonClick(button.code, $event);
                        }
                    }
                }, [ _vm._v(_vm._s(button.name)) ]);
            })) ], 2);
        }, staticRenderFns = [];
        render._withStripped = !0;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
            scriptExports = scriptExports || {};
            var type = typeof scriptExports.default;
            "object" !== type && "function" !== type || (scriptExports = scriptExports.default);
            var options = "function" == typeof scriptExports ? scriptExports.options : scriptExports;
            render && (options.render = render, options.staticRenderFns = staticRenderFns, options._compiled = !0), 
            functionalTemplate && (options.functional = !0), scopeId && (options._scopeId = scopeId);
            var hook;
            if (moduleIdentifier ? (hook = function(context) {
                context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, 
                context || "undefined" == typeof __VUE_SSR_CONTEXT__ || (context = __VUE_SSR_CONTEXT__), 
                injectStyles && injectStyles.call(this, context), context && context._registeredComponents && context._registeredComponents.add(moduleIdentifier);
            }, options._ssrRegister = hook) : injectStyles && (hook = shadowMode ? function() {
                injectStyles.call(this, this.$root.$options.shadowRoot);
            } : injectStyles), hook) if (options.functional) {
                options._injectStyles = hook;
                var originalRender = options.render;
                options.render = function(h, context) {
                    return hook.call(context), originalRender(h, context);
                };
            } else {
                var existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [ hook ];
            }
            return {
                exports: scriptExports,
                options: options
            };
        }
        __webpack_exports__.a = normalizeComponent;
    } ]);
});