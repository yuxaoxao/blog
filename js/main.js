(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
(function () {
  var s = {
      q: function q(n) {
        return document.querySelector(n);
      },
      qa: function qa(n) {
        return document.querySelectorAll(n);
      },
      gId: function gId(n) {
        return document.getElementById(n);
      },
      debounce: function debounce(n, e, t) {
        var o;
        return function () {
          var i = this,
            r = arguments;
          clearTimeout(o), o = setTimeout(function () {
            o = null, t || n.apply(i, r);
          }, e), t && !o && n.apply(i, r);
        };
      },
      wrap: function wrap(n, e) {
        var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (typeof e == "string") {
          e = document.createElement(e);
          for (var _i = 0, _Object$entries = Object.entries(t); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              o = _Object$entries$_i[0],
              i = _Object$entries$_i[1];
            e.setAttribute(o, i);
          }
        }
        n.parentNode.insertBefore(e, n), e.appendChild(n);
      },
      urlFor: function urlFor(n) {
        return /^(#|\/\/|http(s)?:)/.test(n) ? n : (window.ASYNC_CONFIG.root + n).replace(/\/{2,}/g, "/");
      },
      siblings: function siblings(n, e) {
        return _toConsumableArray(n.parentNode.children).filter(function (t) {
          return e ? t !== n && t.matches(e) : t !== n;
        });
      },
      _message: [],
      message: function message(n) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";
        var t = document.createElement("div");
        t.className = "trm-message ".concat(e), t.style.top = "".concat(30 + s._message.length * 60, "px"), t.innerText = n, document.body.append(t), s._message.push(t), setTimeout(function () {
          s._message = s._message.filter(function (o) {
            return o !== t;
          }), document.body.removeChild(t), s._message.forEach(function (o, i) {
            o.style.top = "".concat(30 + i * 60, "px");
          });
        }, 2e3);
      },
      loadScript: function loadScript(n, e) {
        return new Promise(function (t, o) {
          if (e) t();else {
            var i = document.createElement("script");
            i.src = n, i.setAttribute("async", "false"), i.onerror = o, i.onload = function () {
              return t();
            }, document.head.appendChild(i);
          }
        });
      },
      runScriptBlock: function runScriptBlock(n) {
        var e = n.text || n.textContent || n.innerHTML || "",
          t = document.head || document.querySelector("head") || document.documentElement,
          o = document.createElement("script");
        if (e.match("document.write")) return console && console.log && console.log("Script contains document.write. Can\u2019t be executed correctly. Code skipped "), !1;
        try {
          o.appendChild(document.createTextNode(e));
        } catch (_unused) {
          o.text = e;
        }
        t.appendChild(o), t.contains(o) && t.removeChild(o);
      },
      icons: function icons(n) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "font";
        return e === "symbol" ? "<svg class=\"symbol-icon \" aria-hidden=\"true\"><use xlink:href=\"#".concat(n, "\"></use></svg>") : "<i class=\"iconfont ".concat(n, "\"></i>");
      },
      diffDate: function diffDate(n) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var t = new Date(),
          o = new Date(n),
          i = t.getTime() - o.getTime(),
          r = 1e3 * 60,
          c = r * 60,
          a = c * 24,
          f = a * 30,
          u;
        if (e) {
          var h = i / f,
            l = i / a,
            d = i / c,
            g = i / r;
          h > 12 ? u = o.toISOString().slice(0, 10) : h >= 1 ? u = parseInt(h.toString()) + " " + window.ASYNC_CONFIG.date_suffix.month : l >= 1 ? u = parseInt(l.toString()) + " " + window.ASYNC_CONFIG.date_suffix.day : d >= 1 ? u = parseInt(d.toString()) + " " + window.ASYNC_CONFIG.date_suffix.hour : g >= 1 ? u = parseInt(g.toString()) + " " + window.ASYNC_CONFIG.date_suffix.min : u = window.ASYNC_CONFIG.date_suffix.just;
        } else u = parseInt((i / a).toString());
        return u;
      }
    },
    y = {
      pageLoading: function pageLoading() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 600;
        return new Promise(function (e) {
          s.q("html").classList.add("is-animating"), s.q(".trm-scroll-container").style.opacity = 0, setTimeout(function () {
            s.q("html").classList.remove("is-animating"), s.q(".trm-scroll-container").style.opacity = 1, e();
          }, n);
        });
      },
      themeLoading: function themeLoading() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 600;
        var e = s.q("#trm-scroll-container"),
          t = s.q(".trm-mode-swich-animation-frame");
        return new Promise(function (o) {
          t.classList.add("trm-active"), e.style.opacity = 0, setTimeout(function () {
            setTimeout(function () {
              t.classList.remove("trm-active"), e.style.opacity = 1;
            }, n), o();
          }, n);
        });
      },
      switchSingleColumn: function switchSingleColumn() {
        document.body.classList.toggle("trm-single-column");
      },
      switchReadMode: function switchReadMode() {
        var n = document.body;
        n.classList.add("trm-read-mode");
        var e = document.createElement("button");
        e.type = "button", e.title = window.ASYNC_CONFIG.i18n.exit_read_mode, e.className = "trm-exit-readmode trm-glow", e.innerHTML = s.icons(window.ASYNC_CONFIG.icons.close, window.ASYNC_CONFIG.icontype), n.appendChild(e);
        function t() {
          n.classList.remove("trm-read-mode"), e.remove(), e.removeEventListener("click", t);
        }
        e.addEventListener("click", t);
      },
      switchThemeMode: function switchThemeMode(n) {
        y.themeLoading().then(function () {
          var e = n === "style-dark" ? "add" : "remove";
          s.q(".trm-mode-swich-animation").classList[e]("trm-active"), document.documentElement.classList[e]("dark"), localStorage.setItem("theme-mode", n), y.setThemeColor(), typeof window.changeGiscusTheme == "function" && window.changeGiscusTheme();
        });
      },
      setThemeColor: function setThemeColor() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "--theme-bg-color";
        var e = getComputedStyle(document.documentElement).getPropertyValue(n),
          t = s.q('meta[name="theme-color"]');
        e && t && (t.content = e);
      }
    };
  var b = /*#__PURE__*/function () {
      function b(e) {
        var _this = this;
        _classCallCheck(this, b);
        this.name = "HeadPlugin";
        this.isSwupPlugin = !0;
        this.defaultOptions = {
          persistTags: !1,
          persistAssets: !1,
          specialTags: !1
        };
        this.getHeadAndReplace = function () {
          var e = _this.getHeadChildren(),
            t = _this.getNextHeadChildren();
          _this.replaceTags(e, t);
        };
        this.getHeadChildren = function () {
          return document.head.children;
        };
        this.getNextHeadChildren = function () {
          var e = _this.swup.cache.getCurrentPage().originalContent.replace("<head", '<div id="swupHead"').replace("</head>", "</div>"),
            t = document.createElement("div");
          t.innerHTML = e;
          var o = t.querySelector("#swupHead").children;
          return t.innerHTML = "", t = null, o;
        };
        this.replaceTags = function (e, t) {
          var o = document.head,
            i = Boolean(document.querySelector("[data-swup-theme]")),
            r = _this.getTagsToAdd(e, t, i),
            c = _this.getTagsToRemove(e, t);
          c.reverse().forEach(function (a) {
            o.removeChild(a.tag);
          }), r.forEach(function (a) {
            o.insertBefore(a.tag, o.children[a.index + 1] || null);
          }), _this.swup.log("Removed ".concat(c.length, " / added ").concat(r.length, " tags in head"));
        };
        this.compareTags = function (e, t) {
          var o = e.outerHTML,
            i = t.outerHTML;
          return o === i;
        };
        this.getTagsToRemove = function (e, t) {
          var o = [];
          for (var i = 0; i < e.length; i++) {
            var r = null;
            for (var c = 0; c < t.length; c++) if (_this.compareTags(e[i], t[c])) {
              r = c;
              break;
            }
            r == null && e[i].getAttribute("data-async-theme") === null && !_this.isMatchesTag(e[i], _this.options.persistTags) && o.push({
              tag: e[i]
            });
          }
          return o;
        };
        this.getTagsToAdd = function (e, t, o) {
          var i = [];
          for (var r = 0; r < t.length; r++) {
            var c = null;
            for (var a = 0; a < e.length; a++) if (_this.compareTags(e[a], t[r])) {
              c = a;
              break;
            }
            c == null && !_this.isMatchesTag(t[r], _this.options.specialTags) && i.push({
              index: o ? r + 1 : r,
              tag: t[r]
            });
          }
          return i;
        };
        this.isMatchesTag = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.options.persistTags;
          return typeof t == "function" ? t(e) : typeof t == "string" ? e.matches(t) : Boolean(t);
        };
        this.updateHtmlLangAttribute = function () {
          var e = document.documentElement,
            o = new DOMParser().parseFromString(_this.swup.cache.getCurrentPage().originalContent, "text/html").documentElement.lang;
          e.lang !== o && (_this.swup.log("Updated lang attribute: ".concat(e.lang, " > ").concat(o)), e.lang = o);
        };
        this.options = _objectSpread(_objectSpread({}, this.defaultOptions), e), this.options.persistAssets && !this.options.persistTags && (this.options.persistTags = "link[rel=stylesheet], script[src], style");
      }
      _createClass(b, [{
        key: "mount",
        value: function mount() {
          this.swup.on("contentReplaced", this.getHeadAndReplace), this.swup.on("contentReplaced", this.updateHtmlLangAttribute);
        }
      }, {
        key: "unmount",
        value: function unmount() {
          this.swup.off("contentReplaced", this.getHeadAndReplace), this.swup.off("contentReplaced", this.updateHtmlLangAttribute);
        }
      }]);
      return b;
    }(),
    S = b;
  var $ = function $(n) {
      return Array.prototype.slice.call(n);
    },
    x = /*#__PURE__*/function () {
      function x() {
        var _this2 = this;
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, x);
        this.name = "ScriptPlugin";
        this.isSwupPlugin = !0;
        this.defaultOptions = {
          selectors: "script[data-swup-reload-script]"
        };
        this.getScriptAndInsert = function () {
          var e = _this2.getNextScriptChildren();
          e.length && function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(o) {
              var i, _loop, r;
              return _regeneratorRuntime().wrap(function _callee$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    i = Array.from(document.scripts);
                    _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                      var c;
                      return _regeneratorRuntime().wrap(function _loop$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            c = o[r];
                            if (!c.src) {
                              _context.next = 8;
                              break;
                            }
                            _context.t0 = i.findIndex(function (a) {
                              return a.src === c.src && !a.dataset.reset;
                            }) < 0;
                            if (!_context.t0) {
                              _context.next = 6;
                              break;
                            }
                            _context.next = 6;
                            return _this2.loadScript(c);
                          case 6:
                            _context.next = 9;
                            break;
                          case 8:
                            s.runScriptBlock(c);
                          case 9:
                          case "end":
                            return _context.stop();
                        }
                      }, _loop);
                    });
                    r = 0;
                  case 3:
                    if (!(r < o.length)) {
                      _context2.next = 8;
                      break;
                    }
                    return _context2.delegateYield(_loop(), "t0", 5);
                  case 5:
                    r++;
                    _context2.next = 3;
                    break;
                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }, _callee);
            }));
            return function (_x2) {
              return _ref.apply(this, arguments);
            };
          }()(e);
        };
        this.options = _objectSpread(_objectSpread({}, this.defaultOptions), e);
      }
      _createClass(x, [{
        key: "mount",
        value: function mount() {
          this.swup.on("contentReplaced", this.getScriptAndInsert);
        }
      }, {
        key: "unmount",
        value: function unmount() {
          this.swup.off("contentReplaced", this.getScriptAndInsert);
        }
      }, {
        key: "loadScript",
        value: function loadScript(e) {
          return new Promise(function (t, o) {
            var i = document.createElement("script");
            var _iterator = _createForOfIteratorHelper($(e.attributes)),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _step$value = _step.value,
                  r = _step$value.name,
                  c = _step$value.value;
                i.setAttribute(r, c);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            i.textContent = e.textContent, i.setAttribute("async", "false"), i.onload = function () {
              t(), document.body.contains(i) && document.body.removeChild(i);
            }, i.onerror = o, document.body.appendChild(i);
          });
        }
      }, {
        key: "getNextScriptChildren",
        value: function getNextScriptChildren() {
          var e = this.swup.cache.getCurrentPage().originalContent.replace("<body", '<div id="swupBody"').replace("</body>", "</div>"),
            t = document.createElement("div");
          t.innerHTML = e;
          var o = t.querySelector("#swupBody").querySelectorAll(this.options.selectors);
          return t.innerHTML = "", t = null, o;
        }
      }]);
      return x;
    }(),
    E = x;
  function N() {
    window.Fancybox && (window.Fancybox.bind("[data-fancybox]"), window.Fancybox.bind('[data-fancybox="light"],[data-fancybox="article"]', {
      groupAll: !0
    }), window.Fancybox.bind('[data-fancybox="dark"],[data-fancybox="article"]', {
      groupAll: !0
    }), window.Fancybox.defaults.Hash = !1);
  }
  function T() {
    if (window.Swiper) var n = new window.Swiper(".trm-slideshow", {
      slidesPerView: 1,
      effect: "fade",
      parallax: !0,
      autoplay: !0,
      speed: 1400
    });
  }
  function _() {
    window.Fancybox && s.qa("#article-container img:not(.no-fancybox)").forEach(function (n) {
      if (!n.parentNode.dataset.fancybox) {
        var e = "article";
        n.classList.contains("trm-light-icon") ? e = "light" : n.classList.contains("trm-dark-icon") && (e = "dark"), s.wrap(n, "div", {
          "data-src": n.dataset.src || n.src,
          "data-fancybox": e
        });
      }
    });
  }
  function P() {
    var n = [];
    n.push(new S({
      specialTags: "#trm-switch-style"
    })), n.push(new E());
    var e = {
      containers: ["#trm-dynamic-content"],
      animateHistoryBrowsing: !0,
      linkSelector: ".trm-menu a:not([data-no-swup]), .trm-anima-link:not([data-no-swup])",
      animationSelector: '[class="trm-swup-animation"]',
      plugins: n
    };
    return new window.Swup(e);
  }
  function I() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var e = s.q("#trm-swich"),
      t = s.q(".trm-mode-swich-animation"),
      o = s.q(".trm-mode-swich-animation-frame");
    if (n) {
      var i = (localStorage.getItem("theme-mode") || window.ASYNC_CONFIG.theme["default"]) == "style-dark",
        r = i ? "add" : "remove";
      t.classList[r]("trm-active"), o.classList.remove("trm-active"), y.setThemeColor(), e && (e.checked = i);
    }
    e && e.addEventListener("change", function () {
      y.switchThemeMode(this.checked ? "style-dark" : "style-light");
    });
  }
  function A() {
    var n = s.q("#trm-scroll-container"),
      e = s.q("#trm-back-top"),
      t = s.q(".trm-fixed-container"),
      o = new window.LocomotiveScroll({
        el: s.q("#trm-scroll-container"),
        smooth: !0,
        lerp: .1,
        reloadOnContextChange: !0,
        "class": "trm-active-el"
      }),
      i = s.debounce(function () {
        return o.update();
      }, 150),
      r = new ResizeObserver(function () {
        o.update();
      });
    r.observe(n), window.addEventListener("resize", i), o.on("scroll", function (_ref2) {
      var h = _ref2.scroll,
        l = _ref2.limit;
      var d = parseInt((h.y / l.y * 100).toString());
      e.style.backgroundSize = "100% ".concat(d, "%"), h.y > 500 ? (e.classList.add("active-el"), t.classList.add("offset")) : (e.classList.remove("active-el"), t.classList.remove("offset"));
    });
    var c = function c() {
      o.scrollTo(0);
    };
    e == null || e.addEventListener("click", c);
    var a = window.matchMedia("screen and (min-width: 768px)"),
      f = window.matchMedia("screen and (max-width: 767px)"),
      u = function u(h) {
        h.matches && location.reload();
      };
    return a.addListener(u), f.addListener(u), document.addEventListener("swup:contentReplaced", function (h) {
      e == null || e.removeEventListener("click", c), window.removeEventListener("resize", i), r.unobserve(n), a.removeListener(u), f.removeListener(u), o.destroy();
    }), o;
  }
  function H() {
    s.q(".trm-menu-btn").addEventListener("click", function () {
      s.q(".trm-menu-btn,.trm-right-side").classList.toggle("trm-active");
    }), s.q(".trm-menu ul li a").addEventListener("click", function () {
      s.q(".trm-menu-btn,.trm-right-side").classList.remove("trm-active");
    });
  }
  function q() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2e3;
    var e = function e(t, o, i, r) {
      i += o, i >= r ? t.innerText = r.toString() : (t.innerText = parseInt(i.toString()).toString(), requestAnimationFrame(function () {
        return e(t, o, i, r);
      }));
    };
    s.qa(".trm-counter").forEach(function (t) {
      var o = Number(t.innerText);
      if (!isNaN(o)) {
        var i = o / (n / 16);
        e(t, i, 0, o);
      }
    });
  }
  function F() {
    var n = document.getElementById("trm-tabs-nav");
    n && (n.addEventListener("click", function (t) {
      var o = t.target;
      var i = o.dataset.to || o.parentElement.dataset.to,
        r = o.classList.contains("active") || o.parentElement.classList.contains("active");
      i && !r && (document.querySelectorAll(".trm-tabs-nav-item").forEach(function (c) {
        c.classList.toggle("active");
      }), document.querySelectorAll(".trm-tabs-item").forEach(function (c) {
        c.classList.toggle("active");
      }));
    }), function () {
      var t = s.q(".post-toc"),
        o = Array.from(t.querySelectorAll("a.toc-link"));
      if (!o.length) return;
      var i = o.map(function (l) {
          return s.gId(decodeURI(l.getAttribute("href").replace("#", "")));
        }),
        r = document.querySelector(".trm-app-frame");
      if (!r) return;
      var c = document.querySelector(".trm-top-bar"),
        _c$getBoundingClientR = c.getBoundingClientRect(),
        a = _c$getBoundingClientR.bottom;
      function f(l) {
        if (l = l.parentNode, l.classList.contains("active-current")) return;
        s.qa(".post-toc .active").forEach(function (g) {
          g.classList.remove("active", "active-current");
        }), l.classList.add("active", "active-current");
        var d = l.parentNode;
        for (; !d.matches(".post-toc");) d.matches("li") && d.classList.add("active"), d = d.parentNode;
      }
      function u(l) {
        var d = 0,
          g = l[d];
        if (g.intersectionRatio <= 0) return d = i.indexOf(g.target), d === 0 ? 0 : d - 1;
        for (; d < l.length; d++) if (l[d].intersectionRatio > 0) g = l[d];else return i.indexOf(g.target);
        return i.indexOf(g.target);
      }
      function h(l) {
        l = Math.floor(l + 1e4);
        var d = new IntersectionObserver(function (g, p) {
          var w = document.documentElement.scrollHeight + 100;
          if (w > l) {
            p.disconnect(), h(w);
            return;
          }
          var v = u(g);
          f(o[v]);
        }, {
          root: r,
          rootMargin: "".concat(l, "px 0px -").concat(r.clientHeight - a - 20, "px 0px"),
          threshold: [0, 1]
        });
        i.forEach(function (g) {
          g && d.observe(g);
        });
      }
      h(document.documentElement.scrollHeight);
    }());
  }
  function Y() {
    if (window.ASYNC_CONFIG.creative_commons) {
      var _window$ASYNC_CONFIG = window.ASYNC_CONFIG,
        n = _window$ASYNC_CONFIG.author,
        e = _window$ASYNC_CONFIG.i18n,
        t = _window$ASYNC_CONFIG.creative_commons,
        o = function o(i) {
          var r = i.clipboardData || window.clipboardData;
          if (!r) return;
          var c = window.getSelection().toString();
          if (c) {
            i.preventDefault();
            var a = document.getElementById("post-author");
            a && (n = a.innerText.replace("\n", ""));
            var f = location.href,
              u = document.getElementById("original-link");
            u && (f = u.innerText.replace("\n", ""));
            var h = "\n\n".concat(e.author).concat(n, "\n").concat(e.copyright_link).concat(f, "\n").concat(e.copyright_license_title).concat(e.copyright_license_content.replace("undefined", "CC" + t.license.toUpperCase() + " " + (t.license == "zero" ? "1.0" : "4.0")));
            r.setData("text/plain", c + h);
          }
        };
      document.addEventListener("copy", o);
    }
  }
  function O() {
    var _window$ASYNC_CONFIG2 = window.ASYNC_CONFIG,
      n = _window$ASYNC_CONFIG2.i18n,
      e = _window$ASYNC_CONFIG2.highlight,
      t = _window$ASYNC_CONFIG2.icons,
      o = _window$ASYNC_CONFIG2.icontype,
      i = e.copy,
      r = e.lang,
      c = e.height_limit,
      a = i || r,
      f = e.plugin === "prismjs",
      u = e.title === "mac",
      h = f ? 'pre[class*="language-"]' : "figure.highlight",
      l = s.qa(h);
    if (!(a || c || l.length)) return;
    var d = function d() {
        try {
          var p = this.parentNode.parentNode,
            w = p.querySelector(".code");
          if (w || (w = p.querySelector("table")), w || (w = p.querySelector("code")), !w) return;
          navigator.clipboard.writeText(w.innerText), s.message(n.copy_success);
        } catch (_unused2) {
          s.message(n.copy_failure, "warning");
        }
      },
      g = function g() {
        this.classList.toggle("expand-done");
      };
    s.qa(h).forEach(function (p) {
      var w = document.createDocumentFragment(),
        v = document.createElement("div");
      if (v.className = "code-tools ".concat(a && u ? "mac-style" : "default-style"), r) {
        var m = "";
        f ? m = p.getAttribute("data-language") ? p.getAttribute("data-language") : "Code" : (m = p.getAttribute("class").split(" ")[1], (m === "plain" || m === void 0) && (m = "Code"));
        var C = document.createElement("span");
        C.className = "code-lang", C.innerText = m, v.append(C);
      }
      if (i) {
        var _m = document.createElement("span");
        _m.className = "copy-button", _m.innerHTML = s.icons(t.copy, o), _m.addEventListener("click", d), v.append(_m);
      }
      if (c && p.offsetHeight > e.height_limit + 50) {
        var _m2 = document.createElement("div");
        _m2.innerHTML = s.icons(t.double_arrows, o), _m2.className = "code-expand-btn", _m2.addEventListener("click", g), w.append(_m2);
      }
      if (w.append(v), f) {
        s.wrap(p, "figure", {
          "class": "highlight"
        }), p.parentNode.insertBefore(w, p);
        var _m3 = p.querySelector(".caption,caption");
        _m3 && p.parentNode.appendChild(_m3);
      } else p.insertBefore(w, p.querySelector("table"));
    });
  }
  function k() {
    s.qa(".trm-tabs .trm-tab > button").forEach(function (n) {
      n.addEventListener("click", function (e) {
        var t = this,
          o = t.parentNode;
        if (!o.classList.contains("active")) {
          var i = o.parentNode.nextElementSibling,
            r = s.siblings(o, ".active")[0];
          r && r.classList.remove("active"), o.classList.add("active");
          var c = t.getAttribute("data-href").replace("#", "");
          _toConsumableArray(i.children).forEach(function (f) {
            f.id === c ? f.classList.add("active") : f.classList.remove("active");
          });
        }
      });
    });
  }
  function M() {
    var n = s.qa(".fj-gallery");
    n.length && (n.forEach(function (e) {
      e.querySelectorAll("img").forEach(function (o) {
        o.loading = "eager", s.wrap(o, "div", {
          "class": "fj-gallery-item",
          "data-src": o.dataset.src || o.src,
          "data-fancybox": "gallery"
        });
      });
    }), s.loadScript(window.ASYNC_CONFIG.plugin.flickr_justified_gallery, window.fjGallery).then(function () {
      n.forEach(function (e) {
        window.fjGallery(e, {
          itemSelector: ".fj-gallery-item",
          rowHeight: 220,
          gutter: 4,
          onJustify: function onJustify() {
            this.$container.style.opacity = "1";
          }
        });
      });
    }));
  }
  function R() {
    if (window.ASYNC_CONFIG && window.ASYNC_CONFIG.favicon.visibilitychange) {
      window.originTitle = document.title;
      var n,
        e = Array.from(s.qa('[rel="icon"]')),
        t = e.map(function (o) {
          return o.href;
        });
      document.addEventListener("visibilitychange", function () {
        document.hidden ? (e.forEach(function (o) {
          o.href = s.urlFor(window.ASYNC_CONFIG.favicon.hidden);
        }), document.title = window.ASYNC_CONFIG.favicon.hideText, clearTimeout(n)) : (e.forEach(function (o, i) {
          o.href = t[i];
        }), document.title = window.ASYNC_CONFIG.favicon.showText + window.originTitle, n = setTimeout(function () {
          document.title = window.originTitle;
        }, 2e3));
      });
    }
  }
  function G() {
    var _window$ASYNC_CONFIG3 = window.ASYNC_CONFIG,
      n = _window$ASYNC_CONFIG3.notice_outdate,
      e = _window$ASYNC_CONFIG3.i18n;
    if (n) {
      var t = s.diffDate(window.PAGE_CONFIG.postUpdate);
      if (t >= n.limit_day) {
        var o = document.createElement("div");
        o.className = "post-outdate-notice ".concat(n.position), o.textContent = e.notice_outdate_message.replace("undefined", t.toString());
        var i = document.getElementById("article-container");
        n.position === "top" ? i.insertBefore(o, i.firstChild) : i.appendChild(o);
      }
    }
  }
  function B() {
    var n = function n(e) {
      return console.log(e, "color: white; background: #0078E7; padding:5px 0;margin: 0 0 2px 0;border-radius: 4px 0 0 4px;", "padding: 4px;border:1px solid #0078E7;border-radius: 0 4px 4px 0; background: linear-gradient(70deg, #e3f9eb, #d1dbff);");
    };
    n("%c \uD83D\uDE80 Hexo-Theme-Async ".concat(window.ASYNC_CONFIG.theme_version == "0.0.0" ? "Github" : window.ASYNC_CONFIG.theme_version, " %c https://github.com/MaLuns/hexo-theme-async ")), n("%c \uD83D\uDCD1 Hexo-Theme-Async Docs %c https://hexo-theme-async.imalun.com ");
  }
  function L() {
    window.asyncFun = y, B(), y.pageLoading(), R(), window.PAGE_CONFIG.isPost && G(), M(), _(), O(), k(), window.ASYNC_CONFIG.swup && P(), H(), I(!0), q(), A(), T(), N(), F(), Y(), window.ASYNC_CONFIG.swup && document.addEventListener("swup:contentReplaced", function () {
      var n = s.gId("async-page-config");
      n && s.runScriptBlock(n), window.PAGE_CONFIG.isPost && G(), document.body.classList.remove("trm-read-mode"), window.show_date_time && window.show_date_time(), M(), _(), O(), k(), s.q(".trm-scroll-container").style.opacity = 1, H(), I(!0), q(), A(), T(), N(), F();
    });
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", L) : L();
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvaGV4by10aGVtZS1hc3luYy9zb3VyY2UvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7K0NDQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFJO0VBQUMsSUFBSSxDQUFDLEdBQUM7TUFBQyxDQUFDLEVBQUMsV0FBQSxDQUFDO1FBQUEsT0FBRSxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztNQUFBO01BQUMsRUFBRSxFQUFDLFlBQUEsQ0FBQztRQUFBLE9BQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztNQUFBO01BQUMsR0FBRyxFQUFDLGFBQUEsQ0FBQztRQUFBLE9BQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7TUFBQTtNQUFDLFFBQVEsb0JBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUM7UUFBQyxPQUFPLFlBQVU7VUFBQyxJQUFJLENBQUMsR0FBQyxJQUFJO1lBQUMsQ0FBQyxHQUFDLFNBQVM7VUFBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLFVBQVUsQ0FBQyxZQUFVO1lBQUMsQ0FBQyxHQUFDLElBQUksRUFBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1VBQUEsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7UUFBQSxDQUFDO01BQUEsQ0FBQztNQUFDLElBQUksZ0JBQUMsQ0FBQyxFQUFDLENBQUMsRUFBTTtRQUFBLElBQUwsQ0FBQyx1RUFBQyxDQUFDLENBQUM7UUFBRSxJQUFHLE9BQU8sQ0FBQyxJQUFFLFFBQVEsRUFBQztVQUFDLENBQUMsR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztVQUFDLG1DQUFlLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQTVCO2NBQUksQ0FBQztjQUFDLENBQUM7WUFBc0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1VBQUE7UUFBQTtRQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQyxNQUFNLGtCQUFDLENBQUMsRUFBQztRQUFDLE9BQU0scUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQztNQUFBLENBQUM7TUFBQyxRQUFRLEVBQUMsa0JBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxPQUFHLG1CQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxVQUFBLENBQUM7VUFBQSxPQUFFLENBQUMsR0FBQyxDQUFDLEtBQUcsQ0FBQyxJQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxLQUFHLENBQUM7UUFBQSxFQUFDO01BQUE7TUFBQyxRQUFRLEVBQUMsRUFBRTtNQUFDLE9BQU8sbUJBQUMsQ0FBQyxFQUFhO1FBQUEsSUFBWixDQUFDLHVFQUFDLFNBQVM7UUFBRSxJQUFJLENBQUMsR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUFDLENBQUMsQ0FBQyxTQUFTLHlCQUFnQixDQUFDLENBQUUsRUFBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsYUFBSSxFQUFFLEdBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUMsRUFBRSxPQUFJLEVBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBQyxDQUFDLEVBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsVUFBVSxDQUFDLFlBQUk7VUFBQyxDQUFDLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQztZQUFBLE9BQUUsQ0FBQyxLQUFHLENBQUM7VUFBQSxFQUFDLEVBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFHO1lBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLGFBQUksRUFBRSxHQUFDLENBQUMsR0FBQyxFQUFFLE9BQUk7VUFBQSxDQUFDLENBQUM7UUFBQSxDQUFDLEVBQUMsR0FBRyxDQUFDO01BQUEsQ0FBQztNQUFDLFVBQVUsc0JBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFHO1VBQUMsSUFBRyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSTtZQUFDLElBQUksQ0FBQyxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQztjQUFBLE9BQUksQ0FBQyxFQUFFO1lBQUEsR0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7VUFBQTtRQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQyxjQUFjLDBCQUFDLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBRSxDQUFDLENBQUMsU0FBUyxJQUFFLEVBQUU7VUFBQyxDQUFDLEdBQUMsUUFBUSxDQUFDLElBQUksSUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFFLFFBQVEsQ0FBQyxlQUFlO1VBQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQUMsSUFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEVBQUMsT0FBTyxPQUFPLElBQUUsT0FBTyxDQUFDLEdBQUcsSUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlGQUFpRixDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQUMsSUFBRztVQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFBLENBQUMsaUJBQUs7VUFBQyxDQUFDLENBQUMsSUFBSSxHQUFDLENBQUM7UUFBQTtRQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQyxLQUFLLGlCQUFDLENBQUMsRUFBVTtRQUFBLElBQVQsQ0FBQyx1RUFBQyxNQUFNO1FBQUUsT0FBTyxDQUFDLEtBQUcsUUFBUSxpRkFBbUUsQ0FBQyxxREFBdUMsQ0FBQyxZQUFRO01BQUEsQ0FBQztNQUFDLFFBQVEsRUFBQyxrQkFBQyxDQUFDLEVBQVE7UUFBQSxJQUFQLENBQUMsdUVBQUMsQ0FBQyxDQUFDO1FBQUksSUFBSSxDQUFDLEdBQUMsSUFBSSxJQUFJO1VBQUMsQ0FBQyxHQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztVQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtVQUFDLENBQUMsR0FBQyxHQUFHLEdBQUMsRUFBRTtVQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsRUFBRTtVQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsRUFBRTtVQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsRUFBRTtVQUFDLENBQUM7UUFBQyxJQUFHLENBQUMsRUFBQztVQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDO1lBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDO1lBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDO1lBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDO1VBQUMsQ0FBQyxHQUFDLEVBQUUsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxJQUFFLENBQUMsR0FBQyxDQUFDLEdBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxJQUFFLENBQUMsR0FBQyxDQUFDLEdBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxJQUFFLENBQUMsR0FBQyxDQUFDLEdBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUMsQ0FBQyxJQUFFLENBQUMsR0FBQyxDQUFDLEdBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFDLE1BQU0s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R0FBQyxLQUFJLENBQUMsZUFBZSxFQUFFO1lBQUMsQ0FBQyxHQUFDLEtBQUksQ0FBQyxtQkFBbUIsRUFBRTtVQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUFBLENBQUM7UUFBQyxJQUFJLENBQUMsZUFBZSxHQUFDO1VBQUEsT0FBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVE7UUFBQTtRQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxZQUFJO1VBQUMsSUFBSSxDQUFDLEdBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLFFBQVEsQ0FBQztZQUFDLENBQUMsR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztVQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUMsQ0FBQztVQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUTtVQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsR0FBQyxFQUFFLEVBQUMsQ0FBQyxHQUFDLElBQUksRUFBQyxDQUFDO1FBQUEsQ0FBQztRQUFDLElBQUksQ0FBQyxXQUFXLEdBQUMsVUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFHO1VBQUMsSUFBSSxDQUFDLEdBQUMsUUFBUSxDQUFDLElBQUk7WUFBQyxDQUFDLEdBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUFDLENBQUMsR0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsQ0FBQyxHQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztVQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLEVBQUU7WUFBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7VUFBQSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxFQUFFO1lBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUM7VUFBQSxDQUFDLENBQUMsRUFBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsbUJBQVksQ0FBQyxDQUFDLE1BQU0sc0JBQVksQ0FBQyxDQUFDLE1BQU0sbUJBQWdCO1FBQUEsQ0FBQztRQUFDLElBQUksQ0FBQyxXQUFXLEdBQUMsVUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFHO1VBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFNBQVM7WUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFNBQVM7VUFBQyxPQUFPLENBQUMsS0FBRyxDQUFDO1FBQUEsQ0FBQztRQUFDLElBQUksQ0FBQyxlQUFlLEdBQUMsVUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFHO1VBQUMsSUFBSSxDQUFDLEdBQUMsRUFBRTtVQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQUMsSUFBSSxDQUFDLEdBQUMsSUFBSTtZQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLElBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7Y0FBQyxDQUFDLEdBQUMsQ0FBQztjQUFDO1lBQUs7WUFBQyxDQUFDLElBQUUsSUFBSSxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsS0FBRyxJQUFJLElBQUUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Y0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxDQUFDLENBQUM7VUFBQTtVQUFDLE9BQU8sQ0FBQztRQUFBLENBQUM7UUFBQyxJQUFJLENBQUMsWUFBWSxHQUFDLFVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUc7VUFBQyxJQUFJLENBQUMsR0FBQyxFQUFFO1VBQUMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFBQyxJQUFJLENBQUMsR0FBQyxJQUFJO1lBQUMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsSUFBRyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztjQUFDLENBQUMsR0FBQyxDQUFDO2NBQUM7WUFBSztZQUFDLENBQUMsSUFBRSxJQUFJLElBQUUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Y0FBQyxLQUFLLEVBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQztjQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQztZQUFDLENBQUMsQ0FBQztVQUFBO1VBQUMsT0FBTyxDQUFDO1FBQUEsQ0FBQztRQUFDLElBQUksQ0FBQyxZQUFZLEdBQUMsVUFBQyxDQUFDO1VBQUEsSUFBQyxDQUFDLHVFQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMs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SSxDQUFDLG1EQUFtRCxFQUFDO01BQUMsUUFBUSxFQUFDLENBQUM7SUFBQyxDQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrREFBa0QsRUFBQztNQUFDLFFBQVEsRUFBQyxDQUFDO0lBQUMsQ0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQyxDQUFDO0VBQUE7RUFBQyxTQUFTLENBQUMsR0FBRTtJQUFDLElBQUcsTUFBTSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsR0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUM7TUFBQyxhQUFhLEVBQUMsQ0FBQztNQUFDLE1BQU0sRUFBQyxNQUFNO01BQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztNQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7TUFBQyxLQUFLLEVBQUM7SUFBSSxDQUFDLENBQUM7RUFBQTtFQUFDLFNBQVMsQ0FBQyxHQUFFO0lBQUMsTUFBTSxDQUFDLFFBQVEsSUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxFQUFFO01BQUMsSUFBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQztRQUFDLElBQUksQ0FBQyxHQUFDLFNBQVM7UUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFDLENBQUMsR0FBQyxPQUFPLEdBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUcsQ0FBQyxHQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQztVQUFDLFVBQVUsRUFBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBRSxDQUFDLENBQUMsR0FBRztVQUFDLGVBQWUsRUFBQztRQUFDLENBQUMsQ0FBQztNQUFBO0lBQUMsQ0FB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QyxVQUFBLENBQUMsRUFBRTtNQUFDLElBQUksQ0FBQyxHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO01BQUMsSUFBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsSUFBRSxDQUFDLEdBQUMsRUFBRSxDQUFDO1FBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztNQUFBO0lBQUMsQ0FBQyxDQUFDO0VBQUE7RUFBQyxTQUFTLENBQUMsR0FBRTtJQUFDLElBQUksQ0FBQyxHQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO0lBQUMsQ0FBQyxLQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsVUFBUyxDQUFDLEVBQUM7TUFBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTTtNQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztNQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsS0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLEVBQUU7UUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFBQSxDQUFDLENBQUMsRUFBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLEVBQUU7UUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFBQSxDQUFDLENBQUMsQ0FBQztJQUFBLENBQUMsQ0FB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ZSxDQUFFLEVBQUMsQ0FBQyxFQUFDO1FBQUMsSUFBSSxDQUFDLEdBQUMsRUFBRTtRQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsR0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxHQUFDLE1BQU0sSUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEtBQUcsT0FBTyxJQUFFLENBQUMsS0FBRyxLQUFLLENBQUMsTUFBSSxDQUFDLEdBQUMsTUFBTSxDQUFDLENBQUM7UUFBQyxJQUFJLENBQUMsR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO01BQUE7TUFBQyxJQUFHLENBQUMsRUFBQztRQUFDLElBQUksRUFBQyxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQUMsRUFBQyxDQUFDLFNBQVMsR0FBQyxhQUFhLEVBQUMsRUFBQyxDQUFDLFNBQVMsR0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQztNQUFBO01BQUMsSUFBRyxDQUFDLElBQUUsQ0FBQyxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUMsWUFBWSxHQUFDLEVBQUUsRUFBQztRQUFDLElBQUksR0FBQyxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQUMsR0FBQyxDQUFDLFNBQVMsR0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxh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LENBQUMsZUFBZSxDQUFDLEVBQUMsTUFBTSxDQUFDLGNBQWMsSUFBRSxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBRTtJQUFBLENBQUMsQ0FBQztFQUFBO0VBQUMsUUFBUSxDQUFDLFVBQVUsS0FBRyxTQUFTLEdBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRTtBQUFDLENBQUMsR0FBRyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIigoKT0+e3ZhciBzPXtxOm49PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobikscWE6bj0+ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChuKSxnSWQ6bj0+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobiksZGVib3VuY2UobixlLHQpe2xldCBvO3JldHVybiBmdW5jdGlvbigpe2xldCBpPXRoaXMscj1hcmd1bWVudHM7Y2xlYXJUaW1lb3V0KG8pLG89c2V0VGltZW91dChmdW5jdGlvbigpe289bnVsbCx0fHxuLmFwcGx5KGkscil9LGUpLHQmJiFvJiZuLmFwcGx5KGkscil9fSx3cmFwKG4sZSx0PXt9KXtpZih0eXBlb2YgZT09XCJzdHJpbmdcIil7ZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpO2ZvcihsZXRbbyxpXW9mIE9iamVjdC5lbnRyaWVzKHQpKWUuc2V0QXR0cmlidXRlKG8saSl9bi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLG4pLGUuYXBwZW5kQ2hpbGQobil9LHVybEZvcihuKXtyZXR1cm4vXigjfFxcL1xcL3xodHRwKHMpPzopLy50ZXN0KG4pP246KHdpbmRvdy5BU1lOQ19DT05GSUcucm9vdCtuKS5yZXBsYWNlKC9cXC97Mix9L2csXCIvXCIpfSxzaWJsaW5nczoobixlKT0+Wy4uLm4ucGFyZW50Tm9kZS5jaGlsZHJlbl0uZmlsdGVyKHQ9PmU/dCE9PW4mJnQubWF0Y2hlcyhlKTp0IT09biksX21lc3NhZ2U6W10sbWVzc2FnZShuLGU9XCJzdWNjZXNzXCIpe2xldCB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5jbGFzc05hbWU9YHRybS1tZXNzYWdlICR7ZX1gLHQuc3R5bGUudG9wPWAkezMwK3MuX21lc3NhZ2UubGVuZ3RoKjYwfXB4YCx0LmlubmVyVGV4dD1uLGRvY3VtZW50LmJvZHkuYXBwZW5kKHQpLHMuX21lc3NhZ2UucHVzaCh0KSxzZXRUaW1lb3V0KCgpPT57cy5fbWVzc2FnZT1zLl9tZXNzYWdlLmZpbHRlcihvPT5vIT09dCksZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0KSxzLl9tZXNzYWdlLmZvckVhY2goKG8saSk9PntvLnN0eWxlLnRvcD1gJHszMCtpKjYwfXB4YH0pfSwyZTMpfSxsb2FkU2NyaXB0KG4sZSl7cmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57aWYoZSl0KCk7ZWxzZXtsZXQgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2kuc3JjPW4saS5zZXRBdHRyaWJ1dGUoXCJhc3luY1wiLFwiZmFsc2VcIiksaS5vbmVycm9yPW8saS5vbmxvYWQ9KCk9PnQoKSxkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGkpfX0pfSxydW5TY3JpcHRCbG9jayhuKXtsZXQgZT1uLnRleHR8fG4udGV4dENvbnRlbnR8fG4uaW5uZXJIVE1MfHxcIlwiLHQ9ZG9jdW1lbnQuaGVhZHx8ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIil8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoZS5tYXRjaChcImRvY3VtZW50LndyaXRlXCIpKXJldHVybiBjb25zb2xlJiZjb25zb2xlLmxvZyYmY29uc29sZS5sb2coXCJTY3JpcHQgY29udGFpbnMgZG9jdW1lbnQud3JpdGUuIENhblxcdTIwMTl0IGJlIGV4ZWN1dGVkIGNvcnJlY3RseS4gQ29kZSBza2lwcGVkIFwiKSwhMTt0cnl7by5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlKSl9Y2F0Y2h7by50ZXh0PWV9dC5hcHBlbmRDaGlsZChvKSx0LmNvbnRhaW5zKG8pJiZ0LnJlbW92ZUNoaWxkKG8pfSxpY29ucyhuLGU9XCJmb250XCIpe3JldHVybiBlPT09XCJzeW1ib2xcIj9gPHN2ZyBjbGFzcz1cInN5bWJvbC1pY29uIFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgeGxpbms6aHJlZj1cIiMke259XCI+PC91c2U+PC9zdmc+YDpgPGkgY2xhc3M9XCJpY29uZm9udCAke259XCI+PC9pPmB9LGRpZmZEYXRlOihuLGU9ITEpPT57bGV0IHQ9bmV3IERhdGUsbz1uZXcgRGF0ZShuKSxpPXQuZ2V0VGltZSgpLW8uZ2V0VGltZSgpLHI9MWUzKjYwLGM9cio2MCxhPWMqMjQsZj1hKjMwLHU7aWYoZSl7bGV0IGg9aS9mLGw9aS9hLGQ9aS9jLGc9aS9yO2g+MTI/dT1vLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCk6aD49MT91PXBhcnNlSW50KGgudG9TdHJpbmcoKSkrXCIgXCIrd2luZG93LkFTWU5DX0NPTkZJRy5kYXRlX3N1ZmZpeC5tb250aDpsPj0xP3U9cGFyc2VJbnQobC50b1N0cmluZygpKStcIiBcIit3aW5kb3cuQVNZTkNfQ09ORklHLmRhdGVfc3VmZml4LmRheTpkPj0xP3U9cGFyc2VJbnQoZC50b1N0cmluZygpKStcIiBcIit3aW5kb3cuQVNZTkNfQ09ORklHLmRhdGVfc3VmZml4LmhvdXI6Zz49MT91PXBhcnNlSW50KGcudG9TdHJpbmcoKSkrXCIgXCIrd2luZG93LkFTWU5DX0NPTkZJRy5kYXRlX3N1ZmZpeC5taW46dT13aW5kb3cuQVNZTkNfQ09ORklHLmRhdGVfc3VmZml4Lmp1c3R9ZWxzZSB1PXBhcnNlSW50KChpL2EpLnRvU3RyaW5nKCkpO3JldHVybiB1fX0seT17cGFnZUxvYWRpbmcobj02MDApe3JldHVybiBuZXcgUHJvbWlzZShlPT57cy5xKFwiaHRtbFwiKS5jbGFzc0xpc3QuYWRkKFwiaXMtYW5pbWF0aW5nXCIpLHMucShcIi50cm0tc2Nyb2xsLWNvbnRhaW5lclwiKS5zdHlsZS5vcGFjaXR5PTAsc2V0VGltZW91dChmdW5jdGlvbigpe3MucShcImh0bWxcIikuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFuaW1hdGluZ1wiKSxzLnEoXCIudHJtLXNjcm9sbC1jb250YWluZXJcIikuc3R5bGUub3BhY2l0eT0xLGUoKX0sbil9KX0sdGhlbWVMb2FkaW5nKG49NjAwKXtsZXQgZT1zLnEoXCIjdHJtLXNjcm9sbC1jb250YWluZXJcIiksdD1zLnEoXCIudHJtLW1vZGUtc3dpY2gtYW5pbWF0aW9uLWZyYW1lXCIpO3JldHVybiBuZXcgUHJvbWlzZShvPT57dC5jbGFzc0xpc3QuYWRkKFwidHJtLWFjdGl2ZVwiKSxlLnN0eWxlLm9wYWNpdHk9MCxzZXRUaW1lb3V0KCgpPT57c2V0VGltZW91dCgoKT0+e3QuY2xhc3NMaXN0LnJlbW92ZShcInRybS1hY3RpdmVcIiksZS5zdHlsZS5vcGFjaXR5PTF9LG4pLG8oKX0sbil9KX0sc3dpdGNoU2luZ2xlQ29sdW1uKCl7ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwidHJtLXNpbmdsZS1jb2x1bW5cIil9LHN3aXRjaFJlYWRNb2RlKCl7bGV0IG49ZG9jdW1lbnQuYm9keTtuLmNsYXNzTGlzdC5hZGQoXCJ0cm0tcmVhZC1tb2RlXCIpO2xldCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7ZS50eXBlPVwiYnV0dG9uXCIsZS50aXRsZT13aW5kb3cuQVNZTkNfQ09ORklHLmkxOG4uZXhpdF9yZWFkX21vZGUsZS5jbGFzc05hbWU9XCJ0cm0tZXhpdC1yZWFkbW9kZSB0cm0tZ2xvd1wiLGUuaW5uZXJIVE1MPXMuaWNvbnMod2luZG93LkFTWU5DX0NPTkZJRy5pY29ucy5jbG9zZSx3aW5kb3cuQVNZTkNfQ09ORklHLmljb250eXBlKSxuLmFwcGVuZENoaWxkKGUpO2Z1bmN0aW9uIHQoKXtuLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cm0tcmVhZC1tb2RlXCIpLGUucmVtb3ZlKCksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0KX1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHQpfSxzd2l0Y2hUaGVtZU1vZGUobil7eS50aGVtZUxvYWRpbmcoKS50aGVuKCgpPT57bGV0IGU9bj09PVwic3R5bGUtZGFya1wiP1wiYWRkXCI6XCJyZW1vdmVcIjtzLnEoXCIudHJtLW1vZGUtc3dpY2gtYW5pbWF0aW9uXCIpLmNsYXNzTGlzdFtlXShcInRybS1hY3RpdmVcIiksZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdFtlXShcImRhcmtcIiksbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZS1tb2RlXCIsbikseS5zZXRUaGVtZUNvbG9yKCksdHlwZW9mIHdpbmRvdy5jaGFuZ2VHaXNjdXNUaGVtZT09XCJmdW5jdGlvblwiJiZ3aW5kb3cuY2hhbmdlR2lzY3VzVGhlbWUoKX0pfSxzZXRUaGVtZUNvbG9yKG49XCItLXRoZW1lLWJnLWNvbG9yXCIpe2xldCBlPWdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKG4pLHQ9cy5xKCdtZXRhW25hbWU9XCJ0aGVtZS1jb2xvclwiXScpO2UmJnQmJih0LmNvbnRlbnQ9ZSl9fTt2YXIgYj1jbGFzc3tjb25zdHJ1Y3RvcihlKXt0aGlzLm5hbWU9XCJIZWFkUGx1Z2luXCI7dGhpcy5pc1N3dXBQbHVnaW49ITA7dGhpcy5kZWZhdWx0T3B0aW9ucz17cGVyc2lzdFRhZ3M6ITEscGVyc2lzdEFzc2V0czohMSxzcGVjaWFsVGFnczohMX07dGhpcy5nZXRIZWFkQW5kUmVwbGFjZT0oKT0+e2xldCBlPXRoaXMuZ2V0SGVhZENoaWxkcmVuKCksdD10aGlzLmdldE5leHRIZWFkQ2hpbGRyZW4oKTt0aGlzLnJlcGxhY2VUYWdzKGUsdCl9O3RoaXMuZ2V0SGVhZENoaWxkcmVuPSgpPT5kb2N1bWVudC5oZWFkLmNoaWxkcmVuO3RoaXMuZ2V0TmV4dEhlYWRDaGlsZHJlbj0oKT0+e2xldCBlPXRoaXMuc3d1cC5jYWNoZS5nZXRDdXJyZW50UGFnZSgpLm9yaWdpbmFsQ29udGVudC5yZXBsYWNlKFwiPGhlYWRcIiwnPGRpdiBpZD1cInN3dXBIZWFkXCInKS5yZXBsYWNlKFwiPC9oZWFkPlwiLFwiPC9kaXY+XCIpLHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmlubmVySFRNTD1lO2xldCBvPXQucXVlcnlTZWxlY3RvcihcIiNzd3VwSGVhZFwiKS5jaGlsZHJlbjtyZXR1cm4gdC5pbm5lckhUTUw9XCJcIix0PW51bGwsb307dGhpcy5yZXBsYWNlVGFncz0oZSx0KT0+e2xldCBvPWRvY3VtZW50LmhlYWQsaT1Cb29sZWFuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zd3VwLXRoZW1lXVwiKSkscj10aGlzLmdldFRhZ3NUb0FkZChlLHQsaSksYz10aGlzLmdldFRhZ3NUb1JlbW92ZShlLHQpO2MucmV2ZXJzZSgpLmZvckVhY2goYT0+e28ucmVtb3ZlQ2hpbGQoYS50YWcpfSksci5mb3JFYWNoKGE9PntvLmluc2VydEJlZm9yZShhLnRhZyxvLmNoaWxkcmVuW2EuaW5kZXgrMV18fG51bGwpfSksdGhpcy5zd3VwLmxvZyhgUmVtb3ZlZCAke2MubGVuZ3RofSAvIGFkZGVkICR7ci5sZW5ndGh9IHRhZ3MgaW4gaGVhZGApfTt0aGlzLmNvbXBhcmVUYWdzPShlLHQpPT57bGV0IG89ZS5vdXRlckhUTUwsaT10Lm91dGVySFRNTDtyZXR1cm4gbz09PWl9O3RoaXMuZ2V0VGFnc1RvUmVtb3ZlPShlLHQpPT57bGV0IG89W107Zm9yKGxldCBpPTA7aTxlLmxlbmd0aDtpKyspe2xldCByPW51bGw7Zm9yKGxldCBjPTA7Yzx0Lmxlbmd0aDtjKyspaWYodGhpcy5jb21wYXJlVGFncyhlW2ldLHRbY10pKXtyPWM7YnJlYWt9cj09bnVsbCYmZVtpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFzeW5jLXRoZW1lXCIpPT09bnVsbCYmIXRoaXMuaXNNYXRjaGVzVGFnKGVbaV0sdGhpcy5vcHRpb25zLnBlcnNpc3RUYWdzKSYmby5wdXNoKHt0YWc6ZVtpXX0pfXJldHVybiBvfTt0aGlzLmdldFRhZ3NUb0FkZD0oZSx0LG8pPT57bGV0IGk9W107Zm9yKGxldCByPTA7cjx0Lmxlbmd0aDtyKyspe2xldCBjPW51bGw7Zm9yKGxldCBhPTA7YTxlLmxlbmd0aDthKyspaWYodGhpcy5jb21wYXJlVGFncyhlW2FdLHRbcl0pKXtjPWE7YnJlYWt9Yz09bnVsbCYmIXRoaXMuaXNNYXRjaGVzVGFnKHRbcl0sdGhpcy5vcHRpb25zLnNwZWNpYWxUYWdzKSYmaS5wdXNoKHtpbmRleDpvP3IrMTpyLHRhZzp0W3JdfSl9cmV0dXJuIGl9O3RoaXMuaXNNYXRjaGVzVGFnPShlLHQ9dGhpcy5vcHRpb25zLnBlcnNpc3RUYWdzKT0+dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj90KGUpOnR5cGVvZiB0PT1cInN0cmluZ1wiP2UubWF0Y2hlcyh0KTpCb29sZWFuKHQpO3RoaXMudXBkYXRlSHRtbExhbmdBdHRyaWJ1dGU9KCk9PntsZXQgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsbz1uZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHRoaXMuc3d1cC5jYWNoZS5nZXRDdXJyZW50UGFnZSgpLm9yaWdpbmFsQ29udGVudCxcInRleHQvaHRtbFwiKS5kb2N1bWVudEVsZW1lbnQubGFuZztlLmxhbmchPT1vJiYodGhpcy5zd3VwLmxvZyhgVXBkYXRlZCBsYW5nIGF0dHJpYnV0ZTogJHtlLmxhbmd9ID4gJHtvfWApLGUubGFuZz1vKX07dGhpcy5vcHRpb25zPXsuLi50aGlzLmRlZmF1bHRPcHRpb25zLC4uLmV9LHRoaXMub3B0aW9ucy5wZXJzaXN0QXNzZXRzJiYhdGhpcy5vcHRpb25zLnBlcnNpc3RUYWdzJiYodGhpcy5vcHRpb25zLnBlcnNpc3RUYWdzPVwibGlua1tyZWw9c3R5bGVzaGVldF0sIHNjcmlwdFtzcmNdLCBzdHlsZVwiKX1tb3VudCgpe3RoaXMuc3d1cC5vbihcImNvbnRlbnRSZXBsYWNlZFwiLHRoaXMuZ2V0SGVhZEFuZFJlcGxhY2UpLHRoaXMuc3d1cC5vbihcImNvbnRlbnRSZXBsYWNlZFwiLHRoaXMudXBkYXRlSHRtbExhbmdBdHRyaWJ1dGUpfXVubW91bnQoKXt0aGlzLnN3dXAub2ZmKFwiY29udGVudFJlcGxhY2VkXCIsdGhpcy5nZXRIZWFkQW5kUmVwbGFjZSksdGhpcy5zd3VwLm9mZihcImNvbnRlbnRSZXBsYWNlZFwiLHRoaXMudXBkYXRlSHRtbExhbmdBdHRyaWJ1dGUpfX0sUz1iO3ZhciAkPW49PkFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG4pLHg9Y2xhc3N7Y29uc3RydWN0b3IoZT17fSl7dGhpcy5uYW1lPVwiU2NyaXB0UGx1Z2luXCI7dGhpcy5pc1N3dXBQbHVnaW49ITA7dGhpcy5kZWZhdWx0T3B0aW9ucz17c2VsZWN0b3JzOlwic2NyaXB0W2RhdGEtc3d1cC1yZWxvYWQtc2NyaXB0XVwifTt0aGlzLmdldFNjcmlwdEFuZEluc2VydD0oKT0+e2xldCBlPXRoaXMuZ2V0TmV4dFNjcmlwdENoaWxkcmVuKCk7ZS5sZW5ndGgmJihhc3luYyBvPT57bGV0IGk9QXJyYXkuZnJvbShkb2N1bWVudC5zY3JpcHRzKTtmb3IobGV0IHI9MDtyPG8ubGVuZ3RoO3IrKyl7bGV0IGM9b1tyXTtjLnNyYz9pLmZpbmRJbmRleChhPT5hLnNyYz09PWMuc3JjJiYhYS5kYXRhc2V0LnJlc2V0KTwwJiZhd2FpdCB0aGlzLmxvYWRTY3JpcHQoYyk6cy5ydW5TY3JpcHRCbG9jayhjKX19KShlKX07dGhpcy5vcHRpb25zPXsuLi50aGlzLmRlZmF1bHRPcHRpb25zLC4uLmV9fW1vdW50KCl7dGhpcy5zd3VwLm9uKFwiY29udGVudFJlcGxhY2VkXCIsdGhpcy5nZXRTY3JpcHRBbmRJbnNlcnQpfXVubW91bnQoKXt0aGlzLnN3dXAub2ZmKFwiY29udGVudFJlcGxhY2VkXCIsdGhpcy5nZXRTY3JpcHRBbmRJbnNlcnQpfWxvYWRTY3JpcHQoZSl7cmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtmb3IobGV0e25hbWU6cix2YWx1ZTpjfW9mICQoZS5hdHRyaWJ1dGVzKSlpLnNldEF0dHJpYnV0ZShyLGMpO2kudGV4dENvbnRlbnQ9ZS50ZXh0Q29udGVudCxpLnNldEF0dHJpYnV0ZShcImFzeW5jXCIsXCJmYWxzZVwiKSxpLm9ubG9hZD0oKT0+e3QoKSxkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGkpJiZkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGkpfSxpLm9uZXJyb3I9byxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGkpfSl9Z2V0TmV4dFNjcmlwdENoaWxkcmVuKCl7bGV0IGU9dGhpcy5zd3VwLmNhY2hlLmdldEN1cnJlbnRQYWdlKCkub3JpZ2luYWxDb250ZW50LnJlcGxhY2UoXCI8Ym9keVwiLCc8ZGl2IGlkPVwic3d1cEJvZHlcIicpLnJlcGxhY2UoXCI8L2JvZHk+XCIsXCI8L2Rpdj5cIiksdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QuaW5uZXJIVE1MPWU7bGV0IG89dC5xdWVyeVNlbGVjdG9yKFwiI3N3dXBCb2R5XCIpLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycyk7cmV0dXJuIHQuaW5uZXJIVE1MPVwiXCIsdD1udWxsLG99fSxFPXg7ZnVuY3Rpb24gTigpe3dpbmRvdy5GYW5jeWJveCYmKHdpbmRvdy5GYW5jeWJveC5iaW5kKFwiW2RhdGEtZmFuY3lib3hdXCIpLHdpbmRvdy5GYW5jeWJveC5iaW5kKCdbZGF0YS1mYW5jeWJveD1cImxpZ2h0XCJdLFtkYXRhLWZhbmN5Ym94PVwiYXJ0aWNsZVwiXScse2dyb3VwQWxsOiEwfSksd2luZG93LkZhbmN5Ym94LmJpbmQoJ1tkYXRhLWZhbmN5Ym94PVwiZGFya1wiXSxbZGF0YS1mYW5jeWJveD1cImFydGljbGVcIl0nLHtncm91cEFsbDohMH0pLHdpbmRvdy5GYW5jeWJveC5kZWZhdWx0cy5IYXNoPSExKX1mdW5jdGlvbiBUKCl7aWYod2luZG93LlN3aXBlcil2YXIgbj1uZXcgd2luZG93LlN3aXBlcihcIi50cm0tc2xpZGVzaG93XCIse3NsaWRlc1BlclZpZXc6MSxlZmZlY3Q6XCJmYWRlXCIscGFyYWxsYXg6ITAsYXV0b3BsYXk6ITAsc3BlZWQ6MTQwMH0pfWZ1bmN0aW9uIF8oKXt3aW5kb3cuRmFuY3lib3gmJnMucWEoXCIjYXJ0aWNsZS1jb250YWluZXIgaW1nOm5vdCgubm8tZmFuY3lib3gpXCIpLmZvckVhY2gobj0+e2lmKCFuLnBhcmVudE5vZGUuZGF0YXNldC5mYW5jeWJveCl7bGV0IGU9XCJhcnRpY2xlXCI7bi5jbGFzc0xpc3QuY29udGFpbnMoXCJ0cm0tbGlnaHQtaWNvblwiKT9lPVwibGlnaHRcIjpuLmNsYXNzTGlzdC5jb250YWlucyhcInRybS1kYXJrLWljb25cIikmJihlPVwiZGFya1wiKSxzLndyYXAobixcImRpdlwiLHtcImRhdGEtc3JjXCI6bi5kYXRhc2V0LnNyY3x8bi5zcmMsXCJkYXRhLWZhbmN5Ym94XCI6ZX0pfX0pfWZ1bmN0aW9uIFAoKXtsZXQgbj1bXTtuLnB1c2gobmV3IFMoe3NwZWNpYWxUYWdzOlwiI3RybS1zd2l0Y2gtc3R5bGVcIn0pKSxuLnB1c2gobmV3IEUpO2xldCBlPXtjb250YWluZXJzOltcIiN0cm0tZHluYW1pYy1jb250ZW50XCJdLGFuaW1hdGVIaXN0b3J5QnJvd3Npbmc6ITAsbGlua1NlbGVjdG9yOlwiLnRybS1tZW51IGE6bm90KFtkYXRhLW5vLXN3dXBdKSwgLnRybS1hbmltYS1saW5rOm5vdChbZGF0YS1uby1zd3VwXSlcIixhbmltYXRpb25TZWxlY3RvcjonW2NsYXNzPVwidHJtLXN3dXAtYW5pbWF0aW9uXCJdJyxwbHVnaW5zOm59O3JldHVybiBuZXcgd2luZG93LlN3dXAoZSl9ZnVuY3Rpb24gSShuPSExKXtsZXQgZT1zLnEoXCIjdHJtLXN3aWNoXCIpLHQ9cy5xKFwiLnRybS1tb2RlLXN3aWNoLWFuaW1hdGlvblwiKSxvPXMucShcIi50cm0tbW9kZS1zd2ljaC1hbmltYXRpb24tZnJhbWVcIik7aWYobil7bGV0IGk9KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWUtbW9kZVwiKXx8d2luZG93LkFTWU5DX0NPTkZJRy50aGVtZS5kZWZhdWx0KT09XCJzdHlsZS1kYXJrXCIscj1pP1wiYWRkXCI6XCJyZW1vdmVcIjt0LmNsYXNzTGlzdFtyXShcInRybS1hY3RpdmVcIiksby5jbGFzc0xpc3QucmVtb3ZlKFwidHJtLWFjdGl2ZVwiKSx5LnNldFRoZW1lQ29sb3IoKSxlJiYoZS5jaGVja2VkPWkpfWUmJmUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7eS5zd2l0Y2hUaGVtZU1vZGUodGhpcy5jaGVja2VkP1wic3R5bGUtZGFya1wiOlwic3R5bGUtbGlnaHRcIil9KX1mdW5jdGlvbiBBKCl7bGV0IG49cy5xKFwiI3RybS1zY3JvbGwtY29udGFpbmVyXCIpLGU9cy5xKFwiI3RybS1iYWNrLXRvcFwiKSx0PXMucShcIi50cm0tZml4ZWQtY29udGFpbmVyXCIpLG89bmV3IHdpbmRvdy5Mb2NvbW90aXZlU2Nyb2xsKHtlbDpzLnEoXCIjdHJtLXNjcm9sbC1jb250YWluZXJcIiksc21vb3RoOiEwLGxlcnA6LjEscmVsb2FkT25Db250ZXh0Q2hhbmdlOiEwLGNsYXNzOlwidHJtLWFjdGl2ZS1lbFwifSksaT1zLmRlYm91bmNlKCgpPT5vLnVwZGF0ZSgpLDE1MCkscj1uZXcgUmVzaXplT2JzZXJ2ZXIoKCk9PntvLnVwZGF0ZSgpfSk7ci5vYnNlcnZlKG4pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsaSksby5vbihcInNjcm9sbFwiLCh7c2Nyb2xsOmgsbGltaXQ6bH0pPT57bGV0IGQ9cGFyc2VJbnQoKGgueS9sLnkqMTAwKS50b1N0cmluZygpKTtlLnN0eWxlLmJhY2tncm91bmRTaXplPWAxMDAlICR7ZH0lYCxoLnk+NTAwPyhlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtZWxcIiksdC5jbGFzc0xpc3QuYWRkKFwib2Zmc2V0XCIpKTooZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWVsXCIpLHQuY2xhc3NMaXN0LnJlbW92ZShcIm9mZnNldFwiKSl9KTtsZXQgYz1mdW5jdGlvbigpe28uc2Nyb2xsVG8oMCl9O2U9PW51bGx8fGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsYyk7bGV0IGE9d2luZG93Lm1hdGNoTWVkaWEoXCJzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KVwiKSxmPXdpbmRvdy5tYXRjaE1lZGlhKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweClcIiksdT1mdW5jdGlvbihoKXtoLm1hdGNoZXMmJmxvY2F0aW9uLnJlbG9hZCgpfTtyZXR1cm4gYS5hZGRMaXN0ZW5lcih1KSxmLmFkZExpc3RlbmVyKHUpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzd3VwOmNvbnRlbnRSZXBsYWNlZFwiLGg9PntlPT1udWxsfHxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGMpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsaSksci51bm9ic2VydmUobiksYS5yZW1vdmVMaXN0ZW5lcih1KSxmLnJlbW92ZUxpc3RlbmVyKHUpLG8uZGVzdHJveSgpfSksb31mdW5jdGlvbiBIKCl7cy5xKFwiLnRybS1tZW51LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe3MucShcIi50cm0tbWVudS1idG4sLnRybS1yaWdodC1zaWRlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJ0cm0tYWN0aXZlXCIpfSkscy5xKFwiLnRybS1tZW51IHVsIGxpIGFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtzLnEoXCIudHJtLW1lbnUtYnRuLC50cm0tcmlnaHQtc2lkZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwidHJtLWFjdGl2ZVwiKX0pfWZ1bmN0aW9uIHEobj0yZTMpe2xldCBlPSh0LG8saSxyKT0+e2krPW8saT49cj90LmlubmVyVGV4dD1yLnRvU3RyaW5nKCk6KHQuaW5uZXJUZXh0PXBhcnNlSW50KGkudG9TdHJpbmcoKSkudG9TdHJpbmcoKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PmUodCxvLGkscikpKX07cy5xYShcIi50cm0tY291bnRlclwiKS5mb3JFYWNoKHQ9PntsZXQgbz1OdW1iZXIodC5pbm5lclRleHQpO2lmKCFpc05hTihvKSl7bGV0IGk9by8obi8xNik7ZSh0LGksMCxvKX19KX1mdW5jdGlvbiBGKCl7bGV0IG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cm0tdGFicy1uYXZcIik7biYmKG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24odCl7dmFyIG89dC50YXJnZXQ7bGV0IGk9by5kYXRhc2V0LnRvfHxvLnBhcmVudEVsZW1lbnQuZGF0YXNldC50byxyPW8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpfHxvLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpO2kmJiFyJiYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cm0tdGFicy1uYXYtaXRlbVwiKS5mb3JFYWNoKGM9PntjLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIil9KSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRybS10YWJzLWl0ZW1cIikuZm9yRWFjaChjPT57Yy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpfSkpfSksKCgpPT57bGV0IHQ9cy5xKFwiLnBvc3QtdG9jXCIpLG89QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLnRvYy1saW5rXCIpKTtpZighby5sZW5ndGgpcmV0dXJuO2xldCBpPW8ubWFwKGw9PnMuZ0lkKGRlY29kZVVSSShsLmdldEF0dHJpYnV0ZShcImhyZWZcIikucmVwbGFjZShcIiNcIixcIlwiKSkpKSxyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJtLWFwcC1mcmFtZVwiKTtpZighcilyZXR1cm47bGV0IGM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cm0tdG9wLWJhclwiKSx7Ym90dG9tOmF9PWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7ZnVuY3Rpb24gZihsKXtpZihsPWwucGFyZW50Tm9kZSxsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1jdXJyZW50XCIpKXJldHVybjtzLnFhKFwiLnBvc3QtdG9jIC5hY3RpdmVcIikuZm9yRWFjaChnPT57Zy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIsXCJhY3RpdmUtY3VycmVudFwiKX0pLGwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiLFwiYWN0aXZlLWN1cnJlbnRcIik7bGV0IGQ9bC5wYXJlbnROb2RlO2Zvcig7IWQubWF0Y2hlcyhcIi5wb3N0LXRvY1wiKTspZC5tYXRjaGVzKFwibGlcIikmJmQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKSxkPWQucGFyZW50Tm9kZX1mdW5jdGlvbiB1KGwpe2xldCBkPTAsZz1sW2RdO2lmKGcuaW50ZXJzZWN0aW9uUmF0aW88PTApcmV0dXJuIGQ9aS5pbmRleE9mKGcudGFyZ2V0KSxkPT09MD8wOmQtMTtmb3IoO2Q8bC5sZW5ndGg7ZCsrKWlmKGxbZF0uaW50ZXJzZWN0aW9uUmF0aW8+MClnPWxbZF07ZWxzZSByZXR1cm4gaS5pbmRleE9mKGcudGFyZ2V0KTtyZXR1cm4gaS5pbmRleE9mKGcudGFyZ2V0KX1mdW5jdGlvbiBoKGwpe2w9TWF0aC5mbG9vcihsKzFlNCk7bGV0IGQ9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChnLHApPT57bGV0IHc9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCsxMDA7aWYodz5sKXtwLmRpc2Nvbm5lY3QoKSxoKHcpO3JldHVybn1sZXQgdj11KGcpO2Yob1t2XSl9LHtyb290OnIscm9vdE1hcmdpbjpgJHtsfXB4IDBweCAtJHtyLmNsaWVudEhlaWdodC1hLTIwfXB4IDBweGAsdGhyZXNob2xkOlswLDFdfSk7aS5mb3JFYWNoKGc9PntnJiZkLm9ic2VydmUoZyl9KX1oKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpfSkoKSl9ZnVuY3Rpb24gWSgpe2lmKHdpbmRvdy5BU1lOQ19DT05GSUcuY3JlYXRpdmVfY29tbW9ucyl7bGV0e2F1dGhvcjpuLGkxOG46ZSxjcmVhdGl2ZV9jb21tb25zOnR9PXdpbmRvdy5BU1lOQ19DT05GSUcsbz1mdW5jdGlvbihpKXtsZXQgcj1pLmNsaXBib2FyZERhdGF8fHdpbmRvdy5jbGlwYm9hcmREYXRhO2lmKCFyKXJldHVybjtsZXQgYz13aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtpZihjKXtpLnByZXZlbnREZWZhdWx0KCk7bGV0IGE9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3N0LWF1dGhvclwiKTthJiYobj1hLmlubmVyVGV4dC5yZXBsYWNlKGBcbmAsXCJcIikpO2xldCBmPWxvY2F0aW9uLmhyZWYsdT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yaWdpbmFsLWxpbmtcIik7dSYmKGY9dS5pbm5lclRleHQucmVwbGFjZShgXG5gLFwiXCIpKTtsZXQgaD1gXG5cbiR7ZS5hdXRob3J9JHtufVxuJHtlLmNvcHlyaWdodF9saW5rfSR7Zn1cbiR7ZS5jb3B5cmlnaHRfbGljZW5zZV90aXRsZX0ke2UuY29weXJpZ2h0X2xpY2Vuc2VfY29udGVudC5yZXBsYWNlKFwidW5kZWZpbmVkXCIsXCJDQ1wiK3QubGljZW5zZS50b1VwcGVyQ2FzZSgpK1wiIFwiKyh0LmxpY2Vuc2U9PVwiemVyb1wiP1wiMS4wXCI6XCI0LjBcIikpfWA7ci5zZXREYXRhKFwidGV4dC9wbGFpblwiLGMraCl9fTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLG8pfX1mdW5jdGlvbiBPKCl7bGV0e2kxOG46bixoaWdobGlnaHQ6ZSxpY29uczp0LGljb250eXBlOm99PXdpbmRvdy5BU1lOQ19DT05GSUcsaT1lLmNvcHkscj1lLmxhbmcsYz1lLmhlaWdodF9saW1pdCxhPWl8fHIsZj1lLnBsdWdpbj09PVwicHJpc21qc1wiLHU9ZS50aXRsZT09PVwibWFjXCIsaD1mPydwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdJzpcImZpZ3VyZS5oaWdobGlnaHRcIixsPXMucWEoaCk7aWYoIShhfHxjfHxsLmxlbmd0aCkpcmV0dXJuO2xldCBkPWZ1bmN0aW9uKCl7dHJ5e2xldCBwPXRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLHc9cC5xdWVyeVNlbGVjdG9yKFwiLmNvZGVcIik7aWYod3x8KHc9cC5xdWVyeVNlbGVjdG9yKFwidGFibGVcIikpLHd8fCh3PXAucXVlcnlTZWxlY3RvcihcImNvZGVcIikpLCF3KXJldHVybjtuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh3LmlubmVyVGV4dCkscy5tZXNzYWdlKG4uY29weV9zdWNjZXNzKX1jYXRjaHtzLm1lc3NhZ2Uobi5jb3B5X2ZhaWx1cmUsXCJ3YXJuaW5nXCIpfX0sZz1mdW5jdGlvbigpe3RoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZC1kb25lXCIpfTtzLnFhKGgpLmZvckVhY2gocD0+e2xldCB3PWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSx2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYodi5jbGFzc05hbWU9YGNvZGUtdG9vbHMgJHthJiZ1P1wibWFjLXN0eWxlXCI6XCJkZWZhdWx0LXN0eWxlXCJ9YCxyKXtsZXQgbT1cIlwiO2Y/bT1wLmdldEF0dHJpYnV0ZShcImRhdGEtbGFuZ3VhZ2VcIik/cC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxhbmd1YWdlXCIpOlwiQ29kZVwiOihtPXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuc3BsaXQoXCIgXCIpWzFdLChtPT09XCJwbGFpblwifHxtPT09dm9pZCAwKSYmKG09XCJDb2RlXCIpKTtsZXQgQz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtDLmNsYXNzTmFtZT1cImNvZGUtbGFuZ1wiLEMuaW5uZXJUZXh0PW0sdi5hcHBlbmQoQyl9aWYoaSl7bGV0IG09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7bS5jbGFzc05hbWU9XCJjb3B5LWJ1dHRvblwiLG0uaW5uZXJIVE1MPXMuaWNvbnModC5jb3B5LG8pLG0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZCksdi5hcHBlbmQobSl9aWYoYyYmcC5vZmZzZXRIZWlnaHQ+ZS5oZWlnaHRfbGltaXQrNTApe2xldCBtPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bS5pbm5lckhUTUw9cy5pY29ucyh0LmRvdWJsZV9hcnJvd3MsbyksbS5jbGFzc05hbWU9XCJjb2RlLWV4cGFuZC1idG5cIixtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGcpLHcuYXBwZW5kKG0pfWlmKHcuYXBwZW5kKHYpLGYpe3Mud3JhcChwLFwiZmlndXJlXCIse2NsYXNzOlwiaGlnaGxpZ2h0XCJ9KSxwLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHcscCk7bGV0IG09cC5xdWVyeVNlbGVjdG9yKFwiLmNhcHRpb24sY2FwdGlvblwiKTttJiZwLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobSl9ZWxzZSBwLmluc2VydEJlZm9yZSh3LHAucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpKX0pfWZ1bmN0aW9uIGsoKXtzLnFhKFwiLnRybS10YWJzIC50cm0tdGFiID4gYnV0dG9uXCIpLmZvckVhY2goZnVuY3Rpb24obil7bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtsZXQgdD10aGlzLG89dC5wYXJlbnROb2RlO2lmKCFvLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSl7bGV0IGk9by5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZyxyPXMuc2libGluZ3MobyxcIi5hY3RpdmVcIilbMF07ciYmci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpLG8uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtsZXQgYz10LmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKS5yZXBsYWNlKFwiI1wiLFwiXCIpO1suLi5pLmNoaWxkcmVuXS5mb3JFYWNoKGY9PntmLmlkPT09Yz9mLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik6Zi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpfSl9fSl9KX1mdW5jdGlvbiBNKCl7bGV0IG49cy5xYShcIi5mai1nYWxsZXJ5XCIpO24ubGVuZ3RoJiYobi5mb3JFYWNoKGU9PntlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIikuZm9yRWFjaChvPT57by5sb2FkaW5nPVwiZWFnZXJcIixzLndyYXAobyxcImRpdlwiLHtjbGFzczpcImZqLWdhbGxlcnktaXRlbVwiLFwiZGF0YS1zcmNcIjpvLmRhdGFzZXQuc3JjfHxvLnNyYyxcImRhdGEtZmFuY3lib3hcIjpcImdhbGxlcnlcIn0pfSl9KSxzLmxvYWRTY3JpcHQod2luZG93LkFTWU5DX0NPTkZJRy5wbHVnaW4uZmxpY2tyX2p1c3RpZmllZF9nYWxsZXJ5LHdpbmRvdy5makdhbGxlcnkpLnRoZW4oKCk9PntuLmZvckVhY2goZT0+e3dpbmRvdy5makdhbGxlcnkoZSx7aXRlbVNlbGVjdG9yOlwiLmZqLWdhbGxlcnktaXRlbVwiLHJvd0hlaWdodDoyMjAsZ3V0dGVyOjQsb25KdXN0aWZ5OmZ1bmN0aW9uKCl7dGhpcy4kY29udGFpbmVyLnN0eWxlLm9wYWNpdHk9XCIxXCJ9fSl9KX0pKX1mdW5jdGlvbiBSKCl7aWYod2luZG93LkFTWU5DX0NPTkZJRyYmd2luZG93LkFTWU5DX0NPTkZJRy5mYXZpY29uLnZpc2liaWxpdHljaGFuZ2Upe3dpbmRvdy5vcmlnaW5UaXRsZT1kb2N1bWVudC50aXRsZTtsZXQgbixlPUFycmF5LmZyb20ocy5xYSgnW3JlbD1cImljb25cIl0nKSksdD1lLm1hcChvPT5vLmhyZWYpO2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsZnVuY3Rpb24oKXtkb2N1bWVudC5oaWRkZW4/KGUuZm9yRWFjaChvPT57by5ocmVmPXMudXJsRm9yKHdpbmRvdy5BU1lOQ19DT05GSUcuZmF2aWNvbi5oaWRkZW4pfSksZG9jdW1lbnQudGl0bGU9d2luZG93LkFTWU5DX0NPTkZJRy5mYXZpY29uLmhpZGVUZXh0LGNsZWFyVGltZW91dChuKSk6KGUuZm9yRWFjaCgobyxpKT0+e28uaHJlZj10W2ldfSksZG9jdW1lbnQudGl0bGU9d2luZG93LkFTWU5DX0NPTkZJRy5mYXZpY29uLnNob3dUZXh0K3dpbmRvdy5vcmlnaW5UaXRsZSxuPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtkb2N1bWVudC50aXRsZT13aW5kb3cub3JpZ2luVGl0bGV9LDJlMykpfSl9fWZ1bmN0aW9uIEcoKXtsZXR7bm90aWNlX291dGRhdGU6bixpMThuOmV9PXdpbmRvdy5BU1lOQ19DT05GSUc7aWYobil7bGV0IHQ9cy5kaWZmRGF0ZSh3aW5kb3cuUEFHRV9DT05GSUcucG9zdFVwZGF0ZSk7aWYodD49bi5saW1pdF9kYXkpe2xldCBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7by5jbGFzc05hbWU9YHBvc3Qtb3V0ZGF0ZS1ub3RpY2UgJHtuLnBvc2l0aW9ufWAsby50ZXh0Q29udGVudD1lLm5vdGljZV9vdXRkYXRlX21lc3NhZ2UucmVwbGFjZShcInVuZGVmaW5lZFwiLHQudG9TdHJpbmcoKSk7bGV0IGk9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcnRpY2xlLWNvbnRhaW5lclwiKTtuLnBvc2l0aW9uPT09XCJ0b3BcIj9pLmluc2VydEJlZm9yZShvLGkuZmlyc3RDaGlsZCk6aS5hcHBlbmRDaGlsZChvKX19fWZ1bmN0aW9uIEIoKXtsZXQgbj1lPT5jb25zb2xlLmxvZyhlLFwiY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kOiAjMDA3OEU3OyBwYWRkaW5nOjVweCAwO21hcmdpbjogMCAwIDJweCAwO2JvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1wiLFwicGFkZGluZzogNHB4O2JvcmRlcjoxcHggc29saWQgIzAwNzhFNztib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDcwZGVnLCAjZTNmOWViLCAjZDFkYmZmKTtcIik7bihgJWMgXFx1ezFGNjgwfSBIZXhvLVRoZW1lLUFzeW5jICR7d2luZG93LkFTWU5DX0NPTkZJRy50aGVtZV92ZXJzaW9uPT1cIjAuMC4wXCI/XCJHaXRodWJcIjp3aW5kb3cuQVNZTkNfQ09ORklHLnRoZW1lX3ZlcnNpb259ICVjIGh0dHBzOi8vZ2l0aHViLmNvbS9NYUx1bnMvaGV4by10aGVtZS1hc3luYyBgKSxuKFwiJWMgXFx1ezFGNEQxfSBIZXhvLVRoZW1lLUFzeW5jIERvY3MgJWMgaHR0cHM6Ly9oZXhvLXRoZW1lLWFzeW5jLmltYWx1bi5jb20gXCIpfWZ1bmN0aW9uIEwoKXt3aW5kb3cuYXN5bmNGdW49eSxCKCkseS5wYWdlTG9hZGluZygpLFIoKSx3aW5kb3cuUEFHRV9DT05GSUcuaXNQb3N0JiZHKCksTSgpLF8oKSxPKCksaygpLHdpbmRvdy5BU1lOQ19DT05GSUcuc3d1cCYmUCgpLEgoKSxJKCEwKSxxKCksQSgpLFQoKSxOKCksRigpLFkoKSx3aW5kb3cuQVNZTkNfQ09ORklHLnN3dXAmJmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzd3VwOmNvbnRlbnRSZXBsYWNlZFwiLGZ1bmN0aW9uKCl7bGV0IG49cy5nSWQoXCJhc3luYy1wYWdlLWNvbmZpZ1wiKTtuJiZzLnJ1blNjcmlwdEJsb2NrKG4pLHdpbmRvdy5QQUdFX0NPTkZJRy5pc1Bvc3QmJkcoKSxkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJ0cm0tcmVhZC1tb2RlXCIpLHdpbmRvdy5zaG93X2RhdGVfdGltZSYmd2luZG93LnNob3dfZGF0ZV90aW1lKCksTSgpLF8oKSxPKCksaygpLHMucShcIi50cm0tc2Nyb2xsLWNvbnRhaW5lclwiKS5zdHlsZS5vcGFjaXR5PTEsSCgpLEkoITApLHEoKSxBKCksVCgpLE4oKSxGKCl9KX1kb2N1bWVudC5yZWFkeVN0YXRlPT09XCJsb2FkaW5nXCI/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixMKTpMKCk7fSkoKTtcbiJdfQ==
