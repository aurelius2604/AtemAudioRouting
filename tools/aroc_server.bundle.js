var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f2) {
    if (f2 !== void 0 && typeof f2 !== "function") throw new TypeError("Function expected");
    return f2;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f2) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f2 || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f2, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f2, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f2) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f2 = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m2, o) {
  for (var p in m2) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m2, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o[s], i = 0;
  if (m2) return m2.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2) return o;
  var i = m2.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m2 = i["return"])) m2.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f2) {
    return function(v) {
      return Promise.resolve(v).then(f2, reject);
    };
  }
  function verb(n, f2) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f2) i[n] = f2(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f2, v) {
    if (f2(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f2) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f2 ? f2(v) : v;
    } : f2;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m2 = o[Symbol.asyncIterator], i;
  return m2 ? m2.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f2) {
  if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f2) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
            fail(e);
            return next();
          });
        } else s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m2, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m2 : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign3(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? (function(o, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m2[k];
    });
    __setModuleDefault = Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    };
    ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __esDecorate,
      __runInitializers,
      __propKey,
      __setFunctionName,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources,
      __rewriteRelativeImportExtension
    };
  }
});

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports2, module2) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0) return names;
      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args2, i;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args2 = new Array(len - 1); i < len; i++) {
          args2[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args2);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args2) for (j = 1, args2 = new Array(len - 1); j < len; j++) {
                args2[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args2);
          }
        }
      }
      return true;
    };
    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prefixed = prefix;
    EventEmitter.EventEmitter = EventEmitter;
    if ("undefined" !== typeof module2) {
      module2.exports = EventEmitter;
    }
  }
});

// node_modules/atem-connection/dist/state/info.js
var require_info = __commonJS({
  "node_modules/atem-connection/dist/state/info.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/atem-connection/dist/state/video/upstreamKeyers.js
var require_upstreamKeyers = __commonJS({
  "node_modules/atem-connection/dist/state/video/upstreamKeyers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/atem-connection/dist/state/video/downstreamKeyers.js
var require_downstreamKeyers = __commonJS({
  "node_modules/atem-connection/dist/state/video/downstreamKeyers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/atem-connection/dist/state/video/superSource.js
var require_superSource = __commonJS({
  "node_modules/atem-connection/dist/state/video/superSource.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/atem-connection/dist/state/video/index.js
var require_video = __commonJS({
  "node_modules/atem-connection/dist/state/video/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SuperSource = exports2.DSK = exports2.USK = void 0;
    var USK = require_upstreamKeyers();
    exports2.USK = USK;
    var DSK = require_downstreamKeyers();
    exports2.DSK = DSK;
    var SuperSource = require_superSource();
    exports2.SuperSource = SuperSource;
  }
});

// node_modules/atem-connection/dist/state/audio.js
var require_audio = __commonJS({
  "node_modules/atem-connection/dist/state/audio.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/atem-connection/dist/state/media.js
var require_media = __commonJS({
  "node_modules/atem-connection/dist/state/media.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/atem-connection/dist/state/input.js
var require_input = __commonJS({
  "node_modules/atem-connection/dist/state/input.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/atem-connection/dist/state/macro.js
var require_macro = __commonJS({
  "node_modules/atem-connection/dist/state/macro.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/atem-connection/dist/state/settings.js
var require_settings = __commonJS({
  "node_modules/atem-connection/dist/state/settings.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/atem-connection/dist/state/recording.js
var require_recording = __commonJS({
  "node_modules/atem-connection/dist/state/recording.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/atem-connection/dist/state/streaming.js
var require_streaming = __commonJS({
  "node_modules/atem-connection/dist/state/streaming.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/atem-connection/dist/state/fairlight.js
var require_fairlight = __commonJS({
  "node_modules/atem-connection/dist/state/fairlight.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/atem-connection/dist/state/displayClock.js
var require_displayClock = __commonJS({
  "node_modules/atem-connection/dist/state/displayClock.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/atem-connection/dist/enums/index.js
var require_enums = __commonJS({
  "node_modules/atem-connection/dist/enums/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TimeMode = exports2.AudioInternalPortType = exports2.AudioChannelPair = exports2.DisplayClockClockMode = exports2.DisplayClockClockState = exports2.MultiViewerLayout = exports2.FairlightInputType = exports2.FairlightAudioSourceType = exports2.FairlightAnalogInputLevel = exports2.FairlightInputConfiguration = exports2.FairlightAudioMixOption = exports2.RecordingDiskStatus = exports2.RecordingStatus = exports2.RecordingError = exports2.StreamingStatus = exports2.StreamingError = exports2.AudioSourceType = exports2.AudioMixOption = exports2.MediaSourceType = exports2.VideoMode = exports2.VideoFormat = exports2.SuperSourceArtOption = exports2.FlyKeyDirection = exports2.FlyKeyKeyFrame = exports2.MixEffectKeyType = exports2.Pattern = exports2.IsAtKeyFrame = exports2.BorderBevel = exports2.MeAvailability = exports2.SourceAvailability = exports2.InternalPortType = exports2.ExternalPortType = exports2.MacroAction = exports2.DVEEffect = exports2.TransitionSelection = exports2.TransitionStyle = exports2.ProtocolVersion = exports2.Model = void 0;
    var Model;
    (function(Model2) {
      Model2[Model2["Unknown"] = 0] = "Unknown";
      Model2[Model2["TVS"] = 1] = "TVS";
      Model2[Model2["OneME"] = 2] = "OneME";
      Model2[Model2["TwoME"] = 3] = "TwoME";
      Model2[Model2["PS4K"] = 4] = "PS4K";
      Model2[Model2["OneME4K"] = 5] = "OneME4K";
      Model2[Model2["TwoME4K"] = 6] = "TwoME4K";
      Model2[Model2["TwoMEBS4K"] = 7] = "TwoMEBS4K";
      Model2[Model2["TVSHD"] = 8] = "TVSHD";
      Model2[Model2["TVSProHD"] = 9] = "TVSProHD";
      Model2[Model2["TVSPro4K"] = 10] = "TVSPro4K";
      Model2[Model2["Constellation"] = 11] = "Constellation";
      Model2[Model2["Constellation8K"] = 12] = "Constellation8K";
      Model2[Model2["Mini"] = 13] = "Mini";
      Model2[Model2["MiniPro"] = 14] = "MiniPro";
      Model2[Model2["MiniProISO"] = 15] = "MiniProISO";
      Model2[Model2["MiniExtreme"] = 16] = "MiniExtreme";
      Model2[Model2["MiniExtremeISO"] = 17] = "MiniExtremeISO";
      Model2[Model2["ConstellationHD1ME"] = 18] = "ConstellationHD1ME";
      Model2[Model2["ConstellationHD2ME"] = 19] = "ConstellationHD2ME";
      Model2[Model2["ConstellationHD4ME"] = 20] = "ConstellationHD4ME";
      Model2[Model2["SDI"] = 21] = "SDI";
      Model2[Model2["SDIProISO"] = 22] = "SDIProISO";
      Model2[Model2["SDIExtremeISO"] = 23] = "SDIExtremeISO";
      Model2[Model2["TelevisionStudioHD8"] = 26] = "TelevisionStudioHD8";
      Model2[Model2["TelevisionStudioHD8ISO"] = 27] = "TelevisionStudioHD8ISO";
      Model2[Model2["Constellation4K1ME"] = 28] = "Constellation4K1ME";
      Model2[Model2["Constellation4K2ME"] = 29] = "Constellation4K2ME";
      Model2[Model2["Constellation4K4ME"] = 30] = "Constellation4K4ME";
      Model2[Model2["Constellation4K4MEPlus"] = 31] = "Constellation4K4MEPlus";
      Model2[Model2["TelevisionStudio4K8"] = 32] = "TelevisionStudio4K8";
      Model2[Model2["MiniExtremeISOG2"] = 33] = "MiniExtremeISOG2";
    })(Model = exports2.Model || (exports2.Model = {}));
    var ProtocolVersion;
    (function(ProtocolVersion2) {
      ProtocolVersion2[ProtocolVersion2["V7_2"] = 131094] = "V7_2";
      ProtocolVersion2[ProtocolVersion2["V7_5_2"] = 131099] = "V7_5_2";
      ProtocolVersion2[ProtocolVersion2["V8_0"] = 131100] = "V8_0";
      ProtocolVersion2[ProtocolVersion2["V8_0_1"] = 131101] = "V8_0_1";
      ProtocolVersion2[ProtocolVersion2["V8_1_1"] = 131102] = "V8_1_1";
      ProtocolVersion2[ProtocolVersion2["V9_4"] = 131103] = "V9_4";
      ProtocolVersion2[ProtocolVersion2["V9_6"] = 131104] = "V9_6";
    })(ProtocolVersion = exports2.ProtocolVersion || (exports2.ProtocolVersion = {}));
    var TransitionStyle;
    (function(TransitionStyle2) {
      TransitionStyle2[TransitionStyle2["MIX"] = 0] = "MIX";
      TransitionStyle2[TransitionStyle2["DIP"] = 1] = "DIP";
      TransitionStyle2[TransitionStyle2["WIPE"] = 2] = "WIPE";
      TransitionStyle2[TransitionStyle2["DVE"] = 3] = "DVE";
      TransitionStyle2[TransitionStyle2["STING"] = 4] = "STING";
    })(TransitionStyle = exports2.TransitionStyle || (exports2.TransitionStyle = {}));
    var TransitionSelection;
    (function(TransitionSelection2) {
      TransitionSelection2[TransitionSelection2["Background"] = 1] = "Background";
      TransitionSelection2[TransitionSelection2["Key1"] = 2] = "Key1";
      TransitionSelection2[TransitionSelection2["Key2"] = 4] = "Key2";
      TransitionSelection2[TransitionSelection2["Key3"] = 8] = "Key3";
      TransitionSelection2[TransitionSelection2["Key4"] = 16] = "Key4";
    })(TransitionSelection = exports2.TransitionSelection || (exports2.TransitionSelection = {}));
    var DVEEffect;
    (function(DVEEffect2) {
      DVEEffect2[DVEEffect2["SwooshTopLeft"] = 0] = "SwooshTopLeft";
      DVEEffect2[DVEEffect2["SwooshTop"] = 1] = "SwooshTop";
      DVEEffect2[DVEEffect2["SwooshTopRight"] = 2] = "SwooshTopRight";
      DVEEffect2[DVEEffect2["SwooshLeft"] = 3] = "SwooshLeft";
      DVEEffect2[DVEEffect2["SwooshRight"] = 4] = "SwooshRight";
      DVEEffect2[DVEEffect2["SwooshBottomLeft"] = 5] = "SwooshBottomLeft";
      DVEEffect2[DVEEffect2["SwooshBottom"] = 6] = "SwooshBottom";
      DVEEffect2[DVEEffect2["SwooshBottomRight"] = 7] = "SwooshBottomRight";
      DVEEffect2[DVEEffect2["SpinCCWTopRight"] = 13] = "SpinCCWTopRight";
      DVEEffect2[DVEEffect2["SpinCWTopLeft"] = 8] = "SpinCWTopLeft";
      DVEEffect2[DVEEffect2["SpinCCWBottomRight"] = 15] = "SpinCCWBottomRight";
      DVEEffect2[DVEEffect2["SpinCWBottomLeft"] = 10] = "SpinCWBottomLeft";
      DVEEffect2[DVEEffect2["SpinCWTopRight"] = 9] = "SpinCWTopRight";
      DVEEffect2[DVEEffect2["SpinCCWTopLeft"] = 12] = "SpinCCWTopLeft";
      DVEEffect2[DVEEffect2["SpinCWBottomRight"] = 11] = "SpinCWBottomRight";
      DVEEffect2[DVEEffect2["SpinCCWBottomLeft"] = 14] = "SpinCCWBottomLeft";
      DVEEffect2[DVEEffect2["SqueezeTopLeft"] = 16] = "SqueezeTopLeft";
      DVEEffect2[DVEEffect2["SqueezeTop"] = 17] = "SqueezeTop";
      DVEEffect2[DVEEffect2["SqueezeTopRight"] = 18] = "SqueezeTopRight";
      DVEEffect2[DVEEffect2["SqueezeLeft"] = 19] = "SqueezeLeft";
      DVEEffect2[DVEEffect2["SqueezeRight"] = 20] = "SqueezeRight";
      DVEEffect2[DVEEffect2["SqueezeBottomLeft"] = 21] = "SqueezeBottomLeft";
      DVEEffect2[DVEEffect2["SqueezeBottom"] = 22] = "SqueezeBottom";
      DVEEffect2[DVEEffect2["SqueezeBottomRight"] = 23] = "SqueezeBottomRight";
      DVEEffect2[DVEEffect2["PushTopLeft"] = 24] = "PushTopLeft";
      DVEEffect2[DVEEffect2["PushTop"] = 25] = "PushTop";
      DVEEffect2[DVEEffect2["PushTopRight"] = 26] = "PushTopRight";
      DVEEffect2[DVEEffect2["PushLeft"] = 27] = "PushLeft";
      DVEEffect2[DVEEffect2["PushRight"] = 28] = "PushRight";
      DVEEffect2[DVEEffect2["PushBottomLeft"] = 29] = "PushBottomLeft";
      DVEEffect2[DVEEffect2["PushBottom"] = 30] = "PushBottom";
      DVEEffect2[DVEEffect2["PushBottomRight"] = 31] = "PushBottomRight";
      DVEEffect2[DVEEffect2["GraphicCWSpin"] = 32] = "GraphicCWSpin";
      DVEEffect2[DVEEffect2["GraphicCCWSpin"] = 33] = "GraphicCCWSpin";
      DVEEffect2[DVEEffect2["GraphicLogoWipe"] = 34] = "GraphicLogoWipe";
    })(DVEEffect = exports2.DVEEffect || (exports2.DVEEffect = {}));
    var MacroAction;
    (function(MacroAction2) {
      MacroAction2[MacroAction2["Run"] = 0] = "Run";
      MacroAction2[MacroAction2["Stop"] = 1] = "Stop";
      MacroAction2[MacroAction2["StopRecord"] = 2] = "StopRecord";
      MacroAction2[MacroAction2["InsertUserWait"] = 3] = "InsertUserWait";
      MacroAction2[MacroAction2["Continue"] = 4] = "Continue";
      MacroAction2[MacroAction2["Delete"] = 5] = "Delete";
    })(MacroAction = exports2.MacroAction || (exports2.MacroAction = {}));
    var ExternalPortType;
    (function(ExternalPortType2) {
      ExternalPortType2[ExternalPortType2["Unknown"] = 0] = "Unknown";
      ExternalPortType2[ExternalPortType2["SDI"] = 1] = "SDI";
      ExternalPortType2[ExternalPortType2["HDMI"] = 2] = "HDMI";
      ExternalPortType2[ExternalPortType2["Component"] = 4] = "Component";
      ExternalPortType2[ExternalPortType2["Composite"] = 8] = "Composite";
      ExternalPortType2[ExternalPortType2["SVideo"] = 16] = "SVideo";
      ExternalPortType2[ExternalPortType2["XLR"] = 32] = "XLR";
      ExternalPortType2[ExternalPortType2["AESEBU"] = 64] = "AESEBU";
      ExternalPortType2[ExternalPortType2["RCA"] = 128] = "RCA";
      ExternalPortType2[ExternalPortType2["Internal"] = 256] = "Internal";
      ExternalPortType2[ExternalPortType2["TSJack"] = 512] = "TSJack";
      ExternalPortType2[ExternalPortType2["MADI"] = 1024] = "MADI";
      ExternalPortType2[ExternalPortType2["TRSJack"] = 2048] = "TRSJack";
      ExternalPortType2[ExternalPortType2["RJ45"] = 4096] = "RJ45";
    })(ExternalPortType = exports2.ExternalPortType || (exports2.ExternalPortType = {}));
    var InternalPortType;
    (function(InternalPortType2) {
      InternalPortType2[InternalPortType2["External"] = 0] = "External";
      InternalPortType2[InternalPortType2["Black"] = 1] = "Black";
      InternalPortType2[InternalPortType2["ColorBars"] = 2] = "ColorBars";
      InternalPortType2[InternalPortType2["ColorGenerator"] = 3] = "ColorGenerator";
      InternalPortType2[InternalPortType2["MediaPlayerFill"] = 4] = "MediaPlayerFill";
      InternalPortType2[InternalPortType2["MediaPlayerKey"] = 5] = "MediaPlayerKey";
      InternalPortType2[InternalPortType2["SuperSource"] = 6] = "SuperSource";
      InternalPortType2[InternalPortType2["ExternalDirect"] = 7] = "ExternalDirect";
      InternalPortType2[InternalPortType2["MEOutput"] = 128] = "MEOutput";
      InternalPortType2[InternalPortType2["Auxiliary"] = 129] = "Auxiliary";
      InternalPortType2[InternalPortType2["Mask"] = 130] = "Mask";
      InternalPortType2[InternalPortType2["MultiViewer"] = 131] = "MultiViewer";
      InternalPortType2[InternalPortType2["AudioMonitor"] = 132] = "AudioMonitor";
    })(InternalPortType = exports2.InternalPortType || (exports2.InternalPortType = {}));
    var SourceAvailability;
    (function(SourceAvailability2) {
      SourceAvailability2[SourceAvailability2["None"] = 0] = "None";
      SourceAvailability2[SourceAvailability2["Auxiliary"] = 1] = "Auxiliary";
      SourceAvailability2[SourceAvailability2["Multiviewer"] = 2] = "Multiviewer";
      SourceAvailability2[SourceAvailability2["SuperSourceArt"] = 4] = "SuperSourceArt";
      SourceAvailability2[SourceAvailability2["SuperSourceBox"] = 8] = "SuperSourceBox";
      SourceAvailability2[SourceAvailability2["KeySource"] = 16] = "KeySource";
      SourceAvailability2[SourceAvailability2["Auxiliary1"] = 32] = "Auxiliary1";
      SourceAvailability2[SourceAvailability2["Auxiliary2"] = 64] = "Auxiliary2";
      SourceAvailability2[SourceAvailability2["WebcamOut"] = 128] = "WebcamOut";
      SourceAvailability2[SourceAvailability2["All"] = 255] = "All";
    })(SourceAvailability = exports2.SourceAvailability || (exports2.SourceAvailability = {}));
    var MeAvailability;
    (function(MeAvailability2) {
      MeAvailability2[MeAvailability2["None"] = 0] = "None";
      MeAvailability2[MeAvailability2["Me1"] = 1] = "Me1";
      MeAvailability2[MeAvailability2["Me2"] = 2] = "Me2";
      MeAvailability2[MeAvailability2["Me3"] = 4] = "Me3";
      MeAvailability2[MeAvailability2["Me4"] = 8] = "Me4";
      MeAvailability2[MeAvailability2["All"] = 15] = "All";
    })(MeAvailability = exports2.MeAvailability || (exports2.MeAvailability = {}));
    var BorderBevel;
    (function(BorderBevel2) {
      BorderBevel2[BorderBevel2["None"] = 0] = "None";
      BorderBevel2[BorderBevel2["InOut"] = 1] = "InOut";
      BorderBevel2[BorderBevel2["In"] = 2] = "In";
      BorderBevel2[BorderBevel2["Out"] = 3] = "Out";
    })(BorderBevel = exports2.BorderBevel || (exports2.BorderBevel = {}));
    var IsAtKeyFrame;
    (function(IsAtKeyFrame2) {
      IsAtKeyFrame2[IsAtKeyFrame2["None"] = 0] = "None";
      IsAtKeyFrame2[IsAtKeyFrame2["A"] = 1] = "A";
      IsAtKeyFrame2[IsAtKeyFrame2["B"] = 2] = "B";
      IsAtKeyFrame2[IsAtKeyFrame2["RunToInfinite"] = 4] = "RunToInfinite";
    })(IsAtKeyFrame = exports2.IsAtKeyFrame || (exports2.IsAtKeyFrame = {}));
    var Pattern;
    (function(Pattern2) {
      Pattern2[Pattern2["LeftToRightBar"] = 0] = "LeftToRightBar";
      Pattern2[Pattern2["TopToBottomBar"] = 1] = "TopToBottomBar";
      Pattern2[Pattern2["HorizontalBarnDoor"] = 2] = "HorizontalBarnDoor";
      Pattern2[Pattern2["VerticalBarnDoor"] = 3] = "VerticalBarnDoor";
      Pattern2[Pattern2["CornersInFourBox"] = 4] = "CornersInFourBox";
      Pattern2[Pattern2["RectangleIris"] = 5] = "RectangleIris";
      Pattern2[Pattern2["DiamondIris"] = 6] = "DiamondIris";
      Pattern2[Pattern2["CircleIris"] = 7] = "CircleIris";
      Pattern2[Pattern2["TopLeftBox"] = 8] = "TopLeftBox";
      Pattern2[Pattern2["TopRightBox"] = 9] = "TopRightBox";
      Pattern2[Pattern2["BottomRightBox"] = 10] = "BottomRightBox";
      Pattern2[Pattern2["BottomLeftBox"] = 11] = "BottomLeftBox";
      Pattern2[Pattern2["TopCentreBox"] = 12] = "TopCentreBox";
      Pattern2[Pattern2["RightCentreBox"] = 13] = "RightCentreBox";
      Pattern2[Pattern2["BottomCentreBox"] = 14] = "BottomCentreBox";
      Pattern2[Pattern2["LeftCentreBox"] = 15] = "LeftCentreBox";
      Pattern2[Pattern2["TopLeftDiagonal"] = 16] = "TopLeftDiagonal";
      Pattern2[Pattern2["TopRightDiagonal"] = 17] = "TopRightDiagonal";
    })(Pattern = exports2.Pattern || (exports2.Pattern = {}));
    var MixEffectKeyType;
    (function(MixEffectKeyType2) {
      MixEffectKeyType2[MixEffectKeyType2["Luma"] = 0] = "Luma";
      MixEffectKeyType2[MixEffectKeyType2["Chroma"] = 1] = "Chroma";
      MixEffectKeyType2[MixEffectKeyType2["Pattern"] = 2] = "Pattern";
      MixEffectKeyType2[MixEffectKeyType2["DVE"] = 3] = "DVE";
    })(MixEffectKeyType = exports2.MixEffectKeyType || (exports2.MixEffectKeyType = {}));
    var FlyKeyKeyFrame;
    (function(FlyKeyKeyFrame2) {
      FlyKeyKeyFrame2[FlyKeyKeyFrame2["None"] = 0] = "None";
      FlyKeyKeyFrame2[FlyKeyKeyFrame2["A"] = 1] = "A";
      FlyKeyKeyFrame2[FlyKeyKeyFrame2["B"] = 2] = "B";
      FlyKeyKeyFrame2[FlyKeyKeyFrame2["Full"] = 3] = "Full";
      FlyKeyKeyFrame2[FlyKeyKeyFrame2["RunToInfinite"] = 4] = "RunToInfinite";
    })(FlyKeyKeyFrame = exports2.FlyKeyKeyFrame || (exports2.FlyKeyKeyFrame = {}));
    var FlyKeyDirection;
    (function(FlyKeyDirection2) {
      FlyKeyDirection2[FlyKeyDirection2["CentreOfKey"] = 0] = "CentreOfKey";
      FlyKeyDirection2[FlyKeyDirection2["TopLeft"] = 1] = "TopLeft";
      FlyKeyDirection2[FlyKeyDirection2["TopCentre"] = 2] = "TopCentre";
      FlyKeyDirection2[FlyKeyDirection2["TopRight"] = 3] = "TopRight";
      FlyKeyDirection2[FlyKeyDirection2["MiddleLeft"] = 4] = "MiddleLeft";
      FlyKeyDirection2[FlyKeyDirection2["MiddleCentre"] = 5] = "MiddleCentre";
      FlyKeyDirection2[FlyKeyDirection2["MiddleRight"] = 6] = "MiddleRight";
      FlyKeyDirection2[FlyKeyDirection2["BottomLeft"] = 7] = "BottomLeft";
      FlyKeyDirection2[FlyKeyDirection2["BottomCentre"] = 8] = "BottomCentre";
      FlyKeyDirection2[FlyKeyDirection2["BottomRight"] = 9] = "BottomRight";
    })(FlyKeyDirection = exports2.FlyKeyDirection || (exports2.FlyKeyDirection = {}));
    var SuperSourceArtOption;
    (function(SuperSourceArtOption2) {
      SuperSourceArtOption2[SuperSourceArtOption2["Background"] = 0] = "Background";
      SuperSourceArtOption2[SuperSourceArtOption2["Foreground"] = 1] = "Foreground";
    })(SuperSourceArtOption = exports2.SuperSourceArtOption || (exports2.SuperSourceArtOption = {}));
    var VideoFormat;
    (function(VideoFormat2) {
      VideoFormat2[VideoFormat2["SD"] = 0] = "SD";
      VideoFormat2[VideoFormat2["HD720"] = 1] = "HD720";
      VideoFormat2[VideoFormat2["HD1080"] = 2] = "HD1080";
      VideoFormat2[VideoFormat2["UHD4K"] = 3] = "UHD4K";
      VideoFormat2[VideoFormat2["UDH8K"] = 4] = "UDH8K";
    })(VideoFormat = exports2.VideoFormat || (exports2.VideoFormat = {}));
    var VideoMode;
    (function(VideoMode2) {
      VideoMode2[VideoMode2["N525i5994NTSC"] = 0] = "N525i5994NTSC";
      VideoMode2[VideoMode2["P625i50PAL"] = 1] = "P625i50PAL";
      VideoMode2[VideoMode2["N525i5994169"] = 2] = "N525i5994169";
      VideoMode2[VideoMode2["P625i50169"] = 3] = "P625i50169";
      VideoMode2[VideoMode2["P720p50"] = 4] = "P720p50";
      VideoMode2[VideoMode2["N720p5994"] = 5] = "N720p5994";
      VideoMode2[VideoMode2["P1080i50"] = 6] = "P1080i50";
      VideoMode2[VideoMode2["N1080i5994"] = 7] = "N1080i5994";
      VideoMode2[VideoMode2["N1080p2398"] = 8] = "N1080p2398";
      VideoMode2[VideoMode2["N1080p24"] = 9] = "N1080p24";
      VideoMode2[VideoMode2["P1080p25"] = 10] = "P1080p25";
      VideoMode2[VideoMode2["N1080p2997"] = 11] = "N1080p2997";
      VideoMode2[VideoMode2["P1080p50"] = 12] = "P1080p50";
      VideoMode2[VideoMode2["N1080p5994"] = 13] = "N1080p5994";
      VideoMode2[VideoMode2["N4KHDp2398"] = 14] = "N4KHDp2398";
      VideoMode2[VideoMode2["N4KHDp24"] = 15] = "N4KHDp24";
      VideoMode2[VideoMode2["P4KHDp25"] = 16] = "P4KHDp25";
      VideoMode2[VideoMode2["N4KHDp2997"] = 17] = "N4KHDp2997";
      VideoMode2[VideoMode2["P4KHDp5000"] = 18] = "P4KHDp5000";
      VideoMode2[VideoMode2["N4KHDp5994"] = 19] = "N4KHDp5994";
      VideoMode2[VideoMode2["N8KHDp2398"] = 20] = "N8KHDp2398";
      VideoMode2[VideoMode2["N8KHDp24"] = 21] = "N8KHDp24";
      VideoMode2[VideoMode2["P8KHDp25"] = 22] = "P8KHDp25";
      VideoMode2[VideoMode2["N8KHDp2997"] = 23] = "N8KHDp2997";
      VideoMode2[VideoMode2["P8KHDp50"] = 24] = "P8KHDp50";
      VideoMode2[VideoMode2["N8KHDp5994"] = 25] = "N8KHDp5994";
      VideoMode2[VideoMode2["N1080p30"] = 26] = "N1080p30";
      VideoMode2[VideoMode2["N1080p60"] = 27] = "N1080p60";
    })(VideoMode = exports2.VideoMode || (exports2.VideoMode = {}));
    var MediaSourceType;
    (function(MediaSourceType2) {
      MediaSourceType2[MediaSourceType2["Still"] = 1] = "Still";
      MediaSourceType2[MediaSourceType2["Clip"] = 2] = "Clip";
    })(MediaSourceType = exports2.MediaSourceType || (exports2.MediaSourceType = {}));
    var AudioMixOption;
    (function(AudioMixOption2) {
      AudioMixOption2[AudioMixOption2["Off"] = 0] = "Off";
      AudioMixOption2[AudioMixOption2["On"] = 1] = "On";
      AudioMixOption2[AudioMixOption2["AudioFollowVideo"] = 2] = "AudioFollowVideo";
    })(AudioMixOption = exports2.AudioMixOption || (exports2.AudioMixOption = {}));
    var AudioSourceType;
    (function(AudioSourceType2) {
      AudioSourceType2[AudioSourceType2["ExternalVideo"] = 0] = "ExternalVideo";
      AudioSourceType2[AudioSourceType2["MediaPlayer"] = 1] = "MediaPlayer";
      AudioSourceType2[AudioSourceType2["ExternalAudio"] = 2] = "ExternalAudio";
    })(AudioSourceType = exports2.AudioSourceType || (exports2.AudioSourceType = {}));
    var StreamingError;
    (function(StreamingError2) {
      StreamingError2[StreamingError2["None"] = 0] = "None";
      StreamingError2[StreamingError2["InvalidState"] = 16] = "InvalidState";
      StreamingError2[StreamingError2["Unknown"] = 32768] = "Unknown";
    })(StreamingError = exports2.StreamingError || (exports2.StreamingError = {}));
    var StreamingStatus;
    (function(StreamingStatus2) {
      StreamingStatus2[StreamingStatus2["Idle"] = 1] = "Idle";
      StreamingStatus2[StreamingStatus2["Connecting"] = 2] = "Connecting";
      StreamingStatus2[StreamingStatus2["Streaming"] = 4] = "Streaming";
      StreamingStatus2[StreamingStatus2["Stopping"] = 32] = "Stopping";
    })(StreamingStatus = exports2.StreamingStatus || (exports2.StreamingStatus = {}));
    var RecordingError;
    (function(RecordingError2) {
      RecordingError2[RecordingError2["None"] = 2] = "None";
      RecordingError2[RecordingError2["NoMedia"] = 0] = "NoMedia";
      RecordingError2[RecordingError2["MediaFull"] = 4] = "MediaFull";
      RecordingError2[RecordingError2["MediaError"] = 8] = "MediaError";
      RecordingError2[RecordingError2["MediaUnformatted"] = 16] = "MediaUnformatted";
      RecordingError2[RecordingError2["DroppingFrames"] = 32] = "DroppingFrames";
      RecordingError2[RecordingError2["Unknown"] = 32768] = "Unknown";
    })(RecordingError = exports2.RecordingError || (exports2.RecordingError = {}));
    var RecordingStatus;
    (function(RecordingStatus2) {
      RecordingStatus2[RecordingStatus2["Idle"] = 0] = "Idle";
      RecordingStatus2[RecordingStatus2["Recording"] = 1] = "Recording";
      RecordingStatus2[RecordingStatus2["Stopping"] = 128] = "Stopping";
    })(RecordingStatus = exports2.RecordingStatus || (exports2.RecordingStatus = {}));
    var RecordingDiskStatus;
    (function(RecordingDiskStatus2) {
      RecordingDiskStatus2[RecordingDiskStatus2["Idle"] = 1] = "Idle";
      RecordingDiskStatus2[RecordingDiskStatus2["Unformatted"] = 2] = "Unformatted";
      RecordingDiskStatus2[RecordingDiskStatus2["Active"] = 4] = "Active";
      RecordingDiskStatus2[RecordingDiskStatus2["Recording"] = 8] = "Recording";
      RecordingDiskStatus2[RecordingDiskStatus2["Removed"] = 32] = "Removed";
    })(RecordingDiskStatus = exports2.RecordingDiskStatus || (exports2.RecordingDiskStatus = {}));
    var FairlightAudioMixOption;
    (function(FairlightAudioMixOption2) {
      FairlightAudioMixOption2[FairlightAudioMixOption2["Off"] = 1] = "Off";
      FairlightAudioMixOption2[FairlightAudioMixOption2["On"] = 2] = "On";
      FairlightAudioMixOption2[FairlightAudioMixOption2["AudioFollowVideo"] = 4] = "AudioFollowVideo";
    })(FairlightAudioMixOption = exports2.FairlightAudioMixOption || (exports2.FairlightAudioMixOption = {}));
    var FairlightInputConfiguration;
    (function(FairlightInputConfiguration2) {
      FairlightInputConfiguration2[FairlightInputConfiguration2["Mono"] = 1] = "Mono";
      FairlightInputConfiguration2[FairlightInputConfiguration2["Stereo"] = 2] = "Stereo";
      FairlightInputConfiguration2[FairlightInputConfiguration2["DualMono"] = 4] = "DualMono";
    })(FairlightInputConfiguration = exports2.FairlightInputConfiguration || (exports2.FairlightInputConfiguration = {}));
    var FairlightAnalogInputLevel;
    (function(FairlightAnalogInputLevel2) {
      FairlightAnalogInputLevel2[FairlightAnalogInputLevel2["Microphone"] = 1] = "Microphone";
      FairlightAnalogInputLevel2[FairlightAnalogInputLevel2["ConsumerLine"] = 2] = "ConsumerLine";
      FairlightAnalogInputLevel2[FairlightAnalogInputLevel2["ProLine"] = 4] = "ProLine";
    })(FairlightAnalogInputLevel = exports2.FairlightAnalogInputLevel || (exports2.FairlightAnalogInputLevel = {}));
    var FairlightAudioSourceType;
    (function(FairlightAudioSourceType2) {
      FairlightAudioSourceType2[FairlightAudioSourceType2["Mono"] = 0] = "Mono";
      FairlightAudioSourceType2[FairlightAudioSourceType2["Stereo"] = 1] = "Stereo";
    })(FairlightAudioSourceType = exports2.FairlightAudioSourceType || (exports2.FairlightAudioSourceType = {}));
    var FairlightInputType;
    (function(FairlightInputType2) {
      FairlightInputType2[FairlightInputType2["EmbeddedWithVideo"] = 0] = "EmbeddedWithVideo";
      FairlightInputType2[FairlightInputType2["MediaPlayer"] = 1] = "MediaPlayer";
      FairlightInputType2[FairlightInputType2["AudioIn"] = 2] = "AudioIn";
      FairlightInputType2[FairlightInputType2["MADI"] = 4] = "MADI";
    })(FairlightInputType = exports2.FairlightInputType || (exports2.FairlightInputType = {}));
    var MultiViewerLayout;
    (function(MultiViewerLayout2) {
      MultiViewerLayout2[MultiViewerLayout2["Default"] = 0] = "Default";
      MultiViewerLayout2[MultiViewerLayout2["TopLeftSmall"] = 1] = "TopLeftSmall";
      MultiViewerLayout2[MultiViewerLayout2["TopRightSmall"] = 2] = "TopRightSmall";
      MultiViewerLayout2[MultiViewerLayout2["ProgramBottom"] = 3] = "ProgramBottom";
      MultiViewerLayout2[MultiViewerLayout2["BottomLeftSmall"] = 4] = "BottomLeftSmall";
      MultiViewerLayout2[MultiViewerLayout2["ProgramRight"] = 5] = "ProgramRight";
      MultiViewerLayout2[MultiViewerLayout2["BottomRightSmall"] = 8] = "BottomRightSmall";
      MultiViewerLayout2[MultiViewerLayout2["ProgramLeft"] = 10] = "ProgramLeft";
      MultiViewerLayout2[MultiViewerLayout2["ProgramTop"] = 12] = "ProgramTop";
    })(MultiViewerLayout = exports2.MultiViewerLayout || (exports2.MultiViewerLayout = {}));
    var DisplayClockClockState;
    (function(DisplayClockClockState2) {
      DisplayClockClockState2[DisplayClockClockState2["Stopped"] = 0] = "Stopped";
      DisplayClockClockState2[DisplayClockClockState2["Running"] = 1] = "Running";
      DisplayClockClockState2[DisplayClockClockState2["Reset"] = 2] = "Reset";
    })(DisplayClockClockState = exports2.DisplayClockClockState || (exports2.DisplayClockClockState = {}));
    var DisplayClockClockMode;
    (function(DisplayClockClockMode2) {
      DisplayClockClockMode2[DisplayClockClockMode2["Countdown"] = 0] = "Countdown";
      DisplayClockClockMode2[DisplayClockClockMode2["Countup"] = 1] = "Countup";
      DisplayClockClockMode2[DisplayClockClockMode2["TimeOfDay"] = 2] = "TimeOfDay";
    })(DisplayClockClockMode = exports2.DisplayClockClockMode || (exports2.DisplayClockClockMode = {}));
    var AudioChannelPair;
    (function(AudioChannelPair2) {
      AudioChannelPair2[AudioChannelPair2["Channel1_2"] = 0] = "Channel1_2";
      AudioChannelPair2[AudioChannelPair2["Channel3_4"] = 1] = "Channel3_4";
      AudioChannelPair2[AudioChannelPair2["Channel5_6"] = 2] = "Channel5_6";
      AudioChannelPair2[AudioChannelPair2["Channel7_8"] = 3] = "Channel7_8";
      AudioChannelPair2[AudioChannelPair2["Channel9_10"] = 4] = "Channel9_10";
      AudioChannelPair2[AudioChannelPair2["Channel11_12"] = 5] = "Channel11_12";
      AudioChannelPair2[AudioChannelPair2["Channel13_14"] = 6] = "Channel13_14";
      AudioChannelPair2[AudioChannelPair2["Channel15_16"] = 7] = "Channel15_16";
    })(AudioChannelPair = exports2.AudioChannelPair || (exports2.AudioChannelPair = {}));
    var AudioInternalPortType;
    (function(AudioInternalPortType2) {
      AudioInternalPortType2[AudioInternalPortType2["NotInternal"] = 0] = "NotInternal";
      AudioInternalPortType2[AudioInternalPortType2["NoAudio"] = 1] = "NoAudio";
      AudioInternalPortType2[AudioInternalPortType2["TalkbackMix"] = 2] = "TalkbackMix";
      AudioInternalPortType2[AudioInternalPortType2["EngineeringTalkbackMix"] = 3] = "EngineeringTalkbackMix";
      AudioInternalPortType2[AudioInternalPortType2["ProductionTalkbackMix"] = 4] = "ProductionTalkbackMix";
      AudioInternalPortType2[AudioInternalPortType2["MediaPlayer"] = 5] = "MediaPlayer";
      AudioInternalPortType2[AudioInternalPortType2["Program"] = 6] = "Program";
      AudioInternalPortType2[AudioInternalPortType2["Return"] = 7] = "Return";
      AudioInternalPortType2[AudioInternalPortType2["Monitor"] = 8] = "Monitor";
      AudioInternalPortType2[AudioInternalPortType2["Madi"] = 9] = "Madi";
      AudioInternalPortType2[AudioInternalPortType2["AuxOut"] = 10] = "AuxOut";
      AudioInternalPortType2[AudioInternalPortType2["AudioAuxOut"] = 11] = "AudioAuxOut";
    })(AudioInternalPortType = exports2.AudioInternalPortType || (exports2.AudioInternalPortType = {}));
    var TimeMode;
    (function(TimeMode2) {
      TimeMode2[TimeMode2["FreeRun"] = 0] = "FreeRun";
      TimeMode2[TimeMode2["TimeOfDay"] = 1] = "TimeOfDay";
    })(TimeMode = exports2.TimeMode || (exports2.TimeMode = {}));
  }
});

// node_modules/atem-connection/dist/state/util.js
var require_util = __commonJS({
  "node_modules/atem-connection/dist/state/util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getUpstreamKeyer = exports2.getDownstreamKeyer = exports2.getSuperSource = exports2.getMixEffect = exports2.getClip = exports2.getMediaPlayer = exports2.getMultiViewer = exports2.Create = void 0;
    var Enums = require_enums();
    function Create() {
      return {
        info: {
          apiVersion: 0,
          model: Enums.Model.Unknown,
          superSources: [],
          mixEffects: [],
          power: []
        },
        video: {
          mixEffects: [],
          downstreamKeyers: [],
          auxilliaries: [],
          superSources: []
        },
        media: {
          stillPool: [],
          clipPool: [],
          players: []
        },
        inputs: {},
        macro: {
          macroPlayer: {
            isRunning: false,
            isWaiting: false,
            loop: false,
            macroIndex: 0
          },
          macroRecorder: {
            isRecording: false,
            macroIndex: 0
          },
          macroProperties: []
        },
        settings: {
          multiViewers: [],
          videoMode: 0,
          mediaPool: void 0
        }
      };
    }
    exports2.Create = Create;
    function getMultiViewer(state, index) {
      const multiViewer = state.settings.multiViewers[index];
      if (!multiViewer) {
        return state.settings.multiViewers[index] = { index, windows: [] };
      }
      return multiViewer;
    }
    exports2.getMultiViewer = getMultiViewer;
    function getMediaPlayer(state, index, dontCreate) {
      let player = state.media.players[index];
      if (!player) {
        player = {
          playing: false,
          loop: false,
          atBeginning: true,
          clipFrame: 0,
          sourceType: Enums.MediaSourceType.Still,
          clipIndex: 0,
          stillIndex: 0
        };
        if (!dontCreate) {
          state.media.players[index] = player;
        }
      }
      return player;
    }
    exports2.getMediaPlayer = getMediaPlayer;
    function getClip(state, index) {
      const clip = state.media.clipPool[index];
      if (!clip) {
        return state.media.clipPool[index] = {
          isUsed: false,
          name: "",
          frameCount: 0,
          frames: []
        };
      }
      return clip;
    }
    exports2.getClip = getClip;
    function getMixEffect(state, index, dontCreate) {
      let me = state.video.mixEffects[index];
      if (!me) {
        me = {
          index,
          programInput: 0,
          previewInput: 0,
          transitionPreview: false,
          transitionPosition: {
            inTransition: false,
            handlePosition: 0,
            remainingFrames: 0
          },
          transitionProperties: {
            style: Enums.TransitionStyle.MIX,
            selection: [Enums.TransitionSelection.Background],
            nextStyle: Enums.TransitionStyle.MIX,
            nextSelection: [Enums.TransitionSelection.Background]
          },
          transitionSettings: {},
          upstreamKeyers: []
        };
        if (!dontCreate) {
          state.video.mixEffects[index] = me;
        }
      }
      return me;
    }
    exports2.getMixEffect = getMixEffect;
    function getSuperSource(state, index, dontCreate) {
      let ssrc = state.video.superSources[index];
      if (!ssrc) {
        ssrc = {
          index,
          boxes: [void 0, void 0, void 0, void 0]
        };
        if (!dontCreate) {
          state.video.superSources[index] = ssrc;
        }
      }
      return ssrc;
    }
    exports2.getSuperSource = getSuperSource;
    function getDownstreamKeyer(state, index, dontCreate) {
      let dsk = state.video.downstreamKeyers[index];
      if (!dsk) {
        dsk = {
          isAuto: false,
          remainingFrames: 0,
          onAir: false,
          inTransition: false
        };
        if (!dontCreate) {
          state.video.downstreamKeyers[index] = dsk;
        }
      }
      return dsk;
    }
    exports2.getDownstreamKeyer = getDownstreamKeyer;
    function getUpstreamKeyer(mixEffect, index, dontCreate) {
      let usk = mixEffect.upstreamKeyers[index];
      if (!usk) {
        usk = {
          canFlyKey: false,
          upstreamKeyerId: index,
          mixEffectKeyType: 0,
          cutSource: 0,
          fillSource: 0,
          onAir: false,
          flyEnabled: false,
          flyKeyframes: [void 0, void 0],
          maskSettings: {
            maskEnabled: false,
            maskTop: 0,
            maskBottom: 0,
            maskLeft: 0,
            maskRight: 0
          }
        };
        if (!dontCreate) {
          mixEffect.upstreamKeyers[index] = usk;
        }
      }
      return usk;
    }
    exports2.getUpstreamKeyer = getUpstreamKeyer;
  }
});

// node_modules/atem-connection/dist/state/index.js
var require_state = __commonJS({
  "node_modules/atem-connection/dist/state/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InvalidIdError = exports2.DisplayClock = exports2.Fairlight = exports2.Streaming = exports2.Recording = exports2.Settings = exports2.Macro = exports2.Input = exports2.Media = exports2.ClassicAudio = exports2.Video = exports2.Info = exports2.AtemStateUtil = void 0;
    var Info = require_info();
    exports2.Info = Info;
    var Video = require_video();
    exports2.Video = Video;
    var ClassicAudio = require_audio();
    exports2.ClassicAudio = ClassicAudio;
    var Media = require_media();
    exports2.Media = Media;
    var Input = require_input();
    exports2.Input = Input;
    var Macro = require_macro();
    exports2.Macro = Macro;
    var Settings = require_settings();
    exports2.Settings = Settings;
    var Recording = require_recording();
    exports2.Recording = Recording;
    var Streaming = require_streaming();
    exports2.Streaming = Streaming;
    var Fairlight = require_fairlight();
    exports2.Fairlight = Fairlight;
    var DisplayClock = require_displayClock();
    exports2.DisplayClock = DisplayClock;
    var AtemStateUtil = require_util();
    exports2.AtemStateUtil = AtemStateUtil;
    var InvalidIdError = class _InvalidIdError extends Error {
      constructor(message, ...ids) {
        super(_InvalidIdError.BuildErrorString(message, ids));
        Object.setPrototypeOf(this, new.target.prototype);
      }
      static BuildErrorString(message, ids) {
        if (ids && ids.length > 0) {
          return `${message} ${ids.join("-")} is not valid`;
        } else {
          return message;
        }
      }
    };
    exports2.InvalidIdError = InvalidIdError;
  }
});

// node_modules/atem-connection/dist/commands/CommandBase.js
var require_CommandBase = __commonJS({
  "node_modules/atem-connection/dist/commands/CommandBase.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SymmetricalCommand = exports2.WritableCommand = exports2.BasicWritableCommand = exports2.DeserializedCommand = void 0;
    var DeserializedCommand = class {
      constructor(properties) {
        this.properties = properties;
      }
    };
    exports2.DeserializedCommand = DeserializedCommand;
    var BasicWritableCommand = class {
      get properties() {
        return this._properties;
      }
      constructor(properties) {
        this.runOrderGroup = 0;
        this._properties = properties;
      }
    };
    exports2.BasicWritableCommand = BasicWritableCommand;
    var WritableCommand = class extends BasicWritableCommand {
      constructor() {
        super({});
        this.flag = 0;
      }
      /** Update the values of some properties with this command */
      updateProps(newProps) {
        return this._updateProps(newProps);
      }
      _updateProps(newProps) {
        const maskFlags = this.constructor.MaskFlags;
        let hasChanges = false;
        if (maskFlags) {
          for (const key in newProps) {
            const key2 = key;
            const val = newProps[key];
            if (key in maskFlags && val !== void 0) {
              this.flag = this.flag | maskFlags[key];
              this._properties[key2] = val;
              hasChanges = true;
            }
          }
        }
        return hasChanges;
      }
    };
    exports2.WritableCommand = WritableCommand;
    var SymmetricalCommand = class extends DeserializedCommand {
    };
    exports2.SymmetricalCommand = SymmetricalCommand;
  }
});

// node_modules/atem-connection/dist/commands/Audio/AudioMixerHeadphonesCommand.js
var require_AudioMixerHeadphonesCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Audio/AudioMixerHeadphonesCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AudioMixerHeadphonesUpdateCommand = exports2.AudioMixerHeadphonesCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var __1 = require_dist3();
    var AudioMixerHeadphonesCommand = class extends CommandBase_1.WritableCommand {
      serialize() {
        const buffer = Buffer.alloc(12);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(__1.Util.DecibelToUInt16BE(this.properties.gain || 0), 2);
        buffer.writeUInt16BE(__1.Util.DecibelToUInt16BE(this.properties.programOutGain || 0), 4);
        buffer.writeUInt16BE(__1.Util.DecibelToUInt16BE(this.properties.talkbackGain || 0), 6);
        buffer.writeUInt16BE(__1.Util.DecibelToUInt16BE(this.properties.sidetoneGain || 0), 8);
        return buffer;
      }
    };
    exports2.AudioMixerHeadphonesCommand = AudioMixerHeadphonesCommand;
    AudioMixerHeadphonesCommand.MaskFlags = {
      gain: 1 << 0,
      programOutGain: 1 << 1,
      talkbackGain: 1 << 2,
      sidetoneGain: 1 << 3
    };
    AudioMixerHeadphonesCommand.rawName = "CAMH";
    var AudioMixerHeadphonesUpdateCommand = class _AudioMixerHeadphonesUpdateCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          gain: __1.Util.UInt16BEToDecibel(rawCommand.readUInt16BE(0)),
          programOutGain: __1.Util.UInt16BEToDecibel(rawCommand.readUInt16BE(2)),
          talkbackGain: __1.Util.UInt16BEToDecibel(rawCommand.readUInt16BE(4)),
          sidetoneGain: __1.Util.UInt16BEToDecibel(rawCommand.readUInt16BE(6))
        };
        return new _AudioMixerHeadphonesUpdateCommand(properties);
      }
      applyToState(state) {
        if (!state.audio) {
          throw new state_1.InvalidIdError("Classic Audio");
        }
        state.audio.headphones = {
          ...state.audio.headphones,
          ...this.properties
        };
        return `audio.headphones`;
      }
    };
    exports2.AudioMixerHeadphonesUpdateCommand = AudioMixerHeadphonesUpdateCommand;
    AudioMixerHeadphonesUpdateCommand.rawName = "AMHP";
  }
});

// node_modules/atem-connection/dist/commands/Audio/AudioMixerInputCommand.js
var require_AudioMixerInputCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Audio/AudioMixerInputCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AudioMixerInputUpdateV8Command = exports2.AudioMixerInputUpdateCommand = exports2.AudioMixerInputCommand = void 0;
    var state_1 = require_state();
    var __1 = require_dist3();
    var CommandBase_1 = require_CommandBase();
    var enums_1 = require_enums();
    var AudioMixerInputCommand = class extends CommandBase_1.WritableCommand {
      constructor(index) {
        super();
        this.index = index;
      }
      serialize() {
        const buffer = Buffer.alloc(12);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.index, 2);
        buffer.writeUInt8(this.properties.mixOption || 0, 4);
        buffer.writeUInt16BE(__1.Util.DecibelToUInt16BE(this.properties.gain || 0), 6);
        buffer.writeInt16BE(__1.Util.BalanceToInt(this.properties.balance || 0), 8);
        buffer.writeUInt8(this.properties.rcaToXlrEnabled ? 1 : 0, 10);
        return buffer;
      }
    };
    exports2.AudioMixerInputCommand = AudioMixerInputCommand;
    AudioMixerInputCommand.MaskFlags = {
      mixOption: 1 << 0,
      gain: 1 << 1,
      balance: 1 << 2,
      rcaToXlrEnabled: 1 << 3
    };
    AudioMixerInputCommand.rawName = "CAMI";
    var AudioMixerInputUpdateCommand = class _AudioMixerInputUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(index, properties) {
        super(properties);
        this.index = index;
      }
      static deserialize(rawCommand) {
        const index = rawCommand.readUInt16BE(0);
        const properties = {
          sourceType: rawCommand.readUInt8(2),
          portType: rawCommand.readUInt16BE(6),
          mixOption: rawCommand.readUInt8(8),
          gain: __1.Util.UInt16BEToDecibel(rawCommand.readUInt16BE(10)),
          balance: __1.Util.IntToBalance(rawCommand.readInt16BE(12))
        };
        return new _AudioMixerInputUpdateCommand(index, properties);
      }
      applyToState(state) {
        if (!state.audio) {
          throw new state_1.InvalidIdError("Classic Audio");
        }
        state.audio.channels[this.index] = {
          ...this.properties,
          rcaToXlrEnabled: false,
          supportsRcaToXlrEnabled: false
        };
        return `audio.channels.${this.index}`;
      }
    };
    exports2.AudioMixerInputUpdateCommand = AudioMixerInputUpdateCommand;
    AudioMixerInputUpdateCommand.rawName = "AMIP";
    var AudioMixerInputUpdateV8Command = class _AudioMixerInputUpdateV8Command extends CommandBase_1.DeserializedCommand {
      constructor(index, properties) {
        super(properties);
        this.index = index;
      }
      static deserialize(rawCommand) {
        const index = rawCommand.readUInt16BE(0);
        const properties = {
          sourceType: rawCommand.readUInt8(2),
          portType: rawCommand.readUInt16BE(6),
          mixOption: rawCommand.readUInt8(8),
          gain: __1.Util.UInt16BEToDecibel(rawCommand.readUInt16BE(10)),
          balance: __1.Util.IntToBalance(rawCommand.readInt16BE(12)),
          supportsRcaToXlrEnabled: rawCommand.readUInt8(14) != 0,
          rcaToXlrEnabled: rawCommand.readUInt8(15) != 0
        };
        return new _AudioMixerInputUpdateV8Command(index, properties);
      }
      applyToState(state) {
        if (!state.audio) {
          throw new state_1.InvalidIdError("Classic Audio");
        }
        state.audio.channels[this.index] = this.properties;
        return `audio.channels.${this.index}`;
      }
    };
    exports2.AudioMixerInputUpdateV8Command = AudioMixerInputUpdateV8Command;
    AudioMixerInputUpdateV8Command.minimumVersion = enums_1.ProtocolVersion.V8_0;
    AudioMixerInputUpdateV8Command.rawName = "AMIP";
  }
});

// node_modules/atem-connection/dist/commands/Audio/AudioMixerMasterCommand.js
var require_AudioMixerMasterCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Audio/AudioMixerMasterCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AudioMixerMasterUpdateCommand = exports2.AudioMixerMasterCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var __1 = require_dist3();
    var AudioMixerMasterCommand = class extends CommandBase_1.WritableCommand {
      serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(__1.Util.DecibelToUInt16BE(this.properties.gain || 0), 2);
        buffer.writeInt16BE(__1.Util.BalanceToInt(this.properties.balance || 0), 4);
        buffer.writeUInt8(this.properties.followFadeToBlack ? 1 : 0, 6);
        return buffer;
      }
    };
    exports2.AudioMixerMasterCommand = AudioMixerMasterCommand;
    AudioMixerMasterCommand.MaskFlags = {
      gain: 1 << 0,
      balance: 1 << 1,
      followFadeToBlack: 1 << 2
    };
    AudioMixerMasterCommand.rawName = "CAMM";
    var AudioMixerMasterUpdateCommand = class _AudioMixerMasterUpdateCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          gain: __1.Util.UInt16BEToDecibel(rawCommand.readUInt16BE(0)),
          balance: __1.Util.IntToBalance(rawCommand.readInt16BE(2)),
          followFadeToBlack: rawCommand.readInt8(4) === 1
        };
        return new _AudioMixerMasterUpdateCommand(properties);
      }
      applyToState(state) {
        if (!state.audio) {
          throw new state_1.InvalidIdError("Classic Audio");
        }
        state.audio.master = {
          ...state.audio.master,
          ...this.properties
        };
        return `audio.master`;
      }
    };
    exports2.AudioMixerMasterUpdateCommand = AudioMixerMasterUpdateCommand;
    AudioMixerMasterUpdateCommand.rawName = "AMMO";
  }
});

// node_modules/atem-connection/dist/commands/Audio/AudioMixerMonitorCommand.js
var require_AudioMixerMonitorCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Audio/AudioMixerMonitorCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AudioMixerMonitorUpdateCommand = exports2.AudioMixerMonitorCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var __1 = require_dist3();
    var AudioMixerMonitorCommand = class extends CommandBase_1.WritableCommand {
      serialize() {
        const buffer = Buffer.alloc(12);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.enabled ? 1 : 0, 1);
        buffer.writeUInt16BE(__1.Util.DecibelToUInt16BE(this.properties.gain || 0), 2);
        buffer.writeUInt8(this.properties.mute ? 1 : 0, 4);
        buffer.writeUInt8(this.properties.solo ? 1 : 0, 5);
        buffer.writeUInt16BE(this.properties.soloSource || 0, 6);
        buffer.writeUInt8(this.properties.dim ? 1 : 0, 8);
        buffer.writeUInt16BE(this.properties.dimLevel || 0, 10);
        return buffer;
      }
    };
    exports2.AudioMixerMonitorCommand = AudioMixerMonitorCommand;
    AudioMixerMonitorCommand.MaskFlags = {
      enabled: 1 << 0,
      gain: 1 << 1,
      mute: 1 << 2,
      solo: 1 << 3,
      soloSource: 1 << 4,
      dim: 1 << 5,
      dimLevel: 1 << 6
    };
    AudioMixerMonitorCommand.rawName = "CAMm";
    var AudioMixerMonitorUpdateCommand = class _AudioMixerMonitorUpdateCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          enabled: rawCommand.readUInt8(0) > 0,
          gain: __1.Util.UInt16BEToDecibel(rawCommand.readUInt16BE(2)),
          mute: rawCommand.readUInt8(4) > 0,
          solo: rawCommand.readUInt8(5) > 0,
          soloSource: rawCommand.readUInt16BE(6),
          dim: rawCommand.readUInt8(8) > 0,
          dimLevel: rawCommand.readUInt16BE(10)
        };
        return new _AudioMixerMonitorUpdateCommand(properties);
      }
      applyToState(state) {
        if (!state.audio) {
          throw new state_1.InvalidIdError("Classic Audio");
        }
        state.audio.monitor = {
          ...state.audio.monitor,
          ...this.properties
        };
        return `audio.monitor`;
      }
    };
    exports2.AudioMixerMonitorUpdateCommand = AudioMixerMonitorUpdateCommand;
    AudioMixerMonitorUpdateCommand.rawName = "AMmO";
  }
});

// node_modules/atem-connection/dist/commands/Audio/AudioMixerPropertiesCommand.js
var require_AudioMixerPropertiesCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Audio/AudioMixerPropertiesCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AudioMixerPropertiesUpdateCommand = exports2.AudioMixerPropertiesCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var AudioMixerPropertiesCommand = class extends CommandBase_1.BasicWritableCommand {
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(1 << 0, 0);
        buffer.writeUInt8(this.properties.audioFollowVideo ? 1 : 0, 1);
        return buffer;
      }
    };
    exports2.AudioMixerPropertiesCommand = AudioMixerPropertiesCommand;
    AudioMixerPropertiesCommand.rawName = "CAMP";
    var AudioMixerPropertiesUpdateCommand = class _AudioMixerPropertiesUpdateCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const audioFollowVideo = rawCommand.readUInt8(0) > 0;
        return new _AudioMixerPropertiesUpdateCommand({ audioFollowVideo });
      }
      applyToState(state) {
        if (!state.audio) {
          throw new state_1.InvalidIdError("Classic Audio");
        }
        state.audio.audioFollowVideoCrossfadeTransitionEnabled = this.properties.audioFollowVideo;
        return `audio.audioFollowVideoCrossfadeTransitionEnabled`;
      }
    };
    exports2.AudioMixerPropertiesUpdateCommand = AudioMixerPropertiesUpdateCommand;
    AudioMixerPropertiesUpdateCommand.rawName = "AMPP";
  }
});

// node_modules/atem-connection/dist/commands/Audio/AudioMixerResetPeaksCommand.js
var require_AudioMixerResetPeaksCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Audio/AudioMixerResetPeaksCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AudioMixerResetPeaksCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var AudioMixerResetPeaksCommand = class extends CommandBase_1.WritableCommand {
      serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.all ? 1 : 0, 1);
        buffer.writeUInt16BE(this.properties.input || 0, 2);
        buffer.writeUInt8(this.properties.master ? 1 : 0, 4);
        buffer.writeUInt8(this.properties.monitor ? 1 : 0, 5);
        return buffer;
      }
    };
    exports2.AudioMixerResetPeaksCommand = AudioMixerResetPeaksCommand;
    AudioMixerResetPeaksCommand.MaskFlags = {
      all: 1 << 0,
      input: 1 << 1,
      master: 1 << 2,
      monitor: 1 << 3
    };
    AudioMixerResetPeaksCommand.rawName = "RAMP";
  }
});

// node_modules/atem-connection/dist/commands/Audio/index.js
var require_Audio = __commonJS({
  "node_modules/atem-connection/dist/commands/Audio/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_AudioMixerHeadphonesCommand(), exports2);
    tslib_1.__exportStar(require_AudioMixerInputCommand(), exports2);
    tslib_1.__exportStar(require_AudioMixerMasterCommand(), exports2);
    tslib_1.__exportStar(require_AudioMixerMonitorCommand(), exports2);
    tslib_1.__exportStar(require_AudioMixerPropertiesCommand(), exports2);
    tslib_1.__exportStar(require_AudioMixerResetPeaksCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/DataTransfer/DataTransferAckCommand.js
var require_DataTransferAckCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DataTransfer/DataTransferAckCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataTransferAckCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DataTransferAckCommand = class _DataTransferAckCommand extends CommandBase_1.SymmetricalCommand {
      static deserialize(rawCommand) {
        const properties = {
          transferId: rawCommand.readUInt16BE(0),
          transferIndex: rawCommand.readUInt8(2)
        };
        return new _DataTransferAckCommand(properties);
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt16BE(this.properties.transferId);
        buffer.writeUInt8(this.properties.transferIndex, 2);
        return buffer;
      }
      applyToState() {
        return [];
      }
    };
    exports2.DataTransferAckCommand = DataTransferAckCommand;
    DataTransferAckCommand.rawName = "FTUA";
  }
});

// node_modules/atem-connection/dist/commands/DataTransfer/DataTransferCompleteCommand.js
var require_DataTransferCompleteCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DataTransfer/DataTransferCompleteCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataTransferCompleteCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DataTransferCompleteCommand = class _DataTransferCompleteCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          transferId: rawCommand.readUInt16BE(0)
        };
        return new _DataTransferCompleteCommand(properties);
      }
      applyToState() {
        return [];
      }
    };
    exports2.DataTransferCompleteCommand = DataTransferCompleteCommand;
    DataTransferCompleteCommand.rawName = "FTDC";
  }
});

// node_modules/atem-connection/dist/commands/DataTransfer/DataTransferDataCommand.js
var require_DataTransferDataCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DataTransfer/DataTransferDataCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataTransferDataCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DataTransferDataCommand = class _DataTransferDataCommand extends CommandBase_1.BasicWritableCommand {
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt16BE(this.properties.transferId, 0);
        buffer.writeUInt16BE(this.properties.body.length, 2);
        return Buffer.concat([buffer, this.properties.body]);
      }
      static deserialize(rawCommand) {
        const properties = {
          transferId: rawCommand.readUInt16BE(0),
          size: rawCommand.readUInt16BE(2),
          body: rawCommand.slice(4, 4 + rawCommand.readUInt16BE(2))
        };
        return new _DataTransferDataCommand(properties);
      }
      applyToState() {
        return [];
      }
    };
    exports2.DataTransferDataCommand = DataTransferDataCommand;
    DataTransferDataCommand.rawName = "FTDa";
  }
});

// node_modules/atem-connection/dist/commands/DataTransfer/DataTransferDownloadRequestCommand.js
var require_DataTransferDownloadRequestCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DataTransfer/DataTransferDownloadRequestCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataTransferDownloadRequestCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DataTransferDownloadRequestCommand = class extends CommandBase_1.BasicWritableCommand {
      serialize() {
        const buffer = Buffer.alloc(12);
        buffer.writeUInt16BE(this.properties.transferId, 0);
        buffer.writeUInt16BE(this.properties.transferStoreId, 2);
        buffer.writeUInt16BE(this.properties.transferIndex, 6);
        buffer.writeUInt16BE(this.properties.transferType, 8);
        return buffer;
      }
    };
    exports2.DataTransferDownloadRequestCommand = DataTransferDownloadRequestCommand;
    DataTransferDownloadRequestCommand.rawName = "FTSU";
  }
});

// node_modules/atem-connection/dist/commands/DataTransfer/DataTransferErrorCommand.js
var require_DataTransferErrorCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DataTransfer/DataTransferErrorCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataTransferErrorCommand = exports2.ErrorCode = void 0;
    var CommandBase_1 = require_CommandBase();
    var ErrorCode;
    (function(ErrorCode2) {
      ErrorCode2[ErrorCode2["Retry"] = 1] = "Retry";
      ErrorCode2[ErrorCode2["NotFound"] = 2] = "NotFound";
      ErrorCode2[ErrorCode2["NotLocked"] = 5] = "NotLocked";
    })(ErrorCode = exports2.ErrorCode || (exports2.ErrorCode = {}));
    var DataTransferErrorCommand = class _DataTransferErrorCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          transferId: rawCommand.readUInt16BE(0),
          errorCode: rawCommand.readUInt8(2)
        };
        return new _DataTransferErrorCommand(properties);
      }
      applyToState() {
        return [];
      }
    };
    exports2.DataTransferErrorCommand = DataTransferErrorCommand;
    DataTransferErrorCommand.rawName = "FTDE";
  }
});

// node_modules/atem-connection/dist/commands/DataTransfer/DataTransferFileDescriptionCommand.js
var require_DataTransferFileDescriptionCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DataTransfer/DataTransferFileDescriptionCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataTransferFileDescriptionCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DataTransferFileDescriptionCommand = class extends CommandBase_1.BasicWritableCommand {
      serialize() {
        const buffer = Buffer.alloc(212);
        buffer.writeUInt16BE(this.properties.transferId, 0);
        if (this.properties.name)
          buffer.write(this.properties.name, 2, 64);
        if (this.properties.description)
          buffer.write(this.properties.description, 66, 128);
        Buffer.from(this.properties.fileHash, "base64").copy(buffer, 194, 0, 16);
        return buffer;
      }
    };
    exports2.DataTransferFileDescriptionCommand = DataTransferFileDescriptionCommand;
    DataTransferFileDescriptionCommand.rawName = "FTFD";
  }
});

// node_modules/atem-connection/dist/commands/DataTransfer/DataTransferUploadContinueCommand.js
var require_DataTransferUploadContinueCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DataTransfer/DataTransferUploadContinueCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataTransferUploadContinueCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DataTransferUploadContinueCommand = class _DataTransferUploadContinueCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          transferId: rawCommand.readUInt16BE(0),
          chunkSize: rawCommand.readUInt16BE(6),
          chunkCount: rawCommand.readUInt16BE(8)
        };
        return new _DataTransferUploadContinueCommand(properties);
      }
      applyToState() {
        return [];
      }
    };
    exports2.DataTransferUploadContinueCommand = DataTransferUploadContinueCommand;
    DataTransferUploadContinueCommand.rawName = "FTCD";
  }
});

// node_modules/atem-connection/dist/commands/DataTransfer/DataTransferUploadRequestCommand.js
var require_DataTransferUploadRequestCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DataTransfer/DataTransferUploadRequestCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataTransferUploadRequestCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DataTransferUploadRequestCommand = class extends CommandBase_1.BasicWritableCommand {
      serialize() {
        const buffer = Buffer.alloc(16);
        buffer.writeUInt16BE(this.properties.transferId, 0);
        buffer.writeUInt16BE(this.properties.transferStoreId, 2);
        buffer.writeUInt16BE(this.properties.transferIndex, 6);
        buffer.writeUInt32BE(this.properties.size, 8);
        buffer.writeUInt16BE(this.properties.mode, 12);
        return buffer;
      }
    };
    exports2.DataTransferUploadRequestCommand = DataTransferUploadRequestCommand;
    DataTransferUploadRequestCommand.rawName = "FTSD";
  }
});

// node_modules/atem-connection/dist/commands/DataTransfer/LockObtainedCommand.js
var require_LockObtainedCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DataTransfer/LockObtainedCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LockObtainedCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var LockObtainedCommand = class _LockObtainedCommand extends CommandBase_1.DeserializedCommand {
      constructor(index) {
        super({ index });
      }
      static deserialize(rawCommand) {
        const index = rawCommand.readUInt16BE(0);
        return new _LockObtainedCommand(index);
      }
      applyToState() {
        return [];
      }
    };
    exports2.LockObtainedCommand = LockObtainedCommand;
    LockObtainedCommand.rawName = "LKOB";
  }
});

// node_modules/atem-connection/dist/commands/DataTransfer/LockStateCommand.js
var require_LockStateCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DataTransfer/LockStateCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LockStateUpdateCommand = exports2.LockStateCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var LockStateCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(index, locked) {
        super({ index, locked });
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt16BE(this.properties.index, 0);
        buffer.writeUInt8(this.properties.locked ? 1 : 0, 2);
        return buffer;
      }
    };
    exports2.LockStateCommand = LockStateCommand;
    LockStateCommand.rawName = "LOCK";
    var LockStateUpdateCommand = class _LockStateUpdateCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          index: rawCommand.readUInt16BE(0),
          locked: rawCommand.readUInt8(2) === 1
        };
        return new _LockStateUpdateCommand(properties);
      }
      applyToState() {
        return [];
      }
    };
    exports2.LockStateUpdateCommand = LockStateUpdateCommand;
    LockStateUpdateCommand.rawName = "LKST";
  }
});

// node_modules/atem-connection/dist/commands/DataTransfer/index.js
var require_DataTransfer = __commonJS({
  "node_modules/atem-connection/dist/commands/DataTransfer/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_DataTransferAckCommand(), exports2);
    tslib_1.__exportStar(require_DataTransferCompleteCommand(), exports2);
    tslib_1.__exportStar(require_DataTransferDataCommand(), exports2);
    tslib_1.__exportStar(require_DataTransferDownloadRequestCommand(), exports2);
    tslib_1.__exportStar(require_DataTransferErrorCommand(), exports2);
    tslib_1.__exportStar(require_DataTransferFileDescriptionCommand(), exports2);
    tslib_1.__exportStar(require_DataTransferUploadContinueCommand(), exports2);
    tslib_1.__exportStar(require_DataTransferUploadRequestCommand(), exports2);
    tslib_1.__exportStar(require_LockObtainedCommand(), exports2);
    tslib_1.__exportStar(require_LockStateCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/DeviceProfile/versionCommand.js
var require_versionCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DeviceProfile/versionCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VersionCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var VersionCommand = class _VersionCommand extends CommandBase_1.DeserializedCommand {
      constructor(version) {
        super({ version });
      }
      static deserialize(rawCommand) {
        const version = rawCommand.readUInt32BE(0);
        return new _VersionCommand(version);
      }
      applyToState(state) {
        state.info.apiVersion = this.properties.version;
        return `info.apiVersion`;
      }
    };
    exports2.VersionCommand = VersionCommand;
    VersionCommand.rawName = "_ver";
  }
});

// node_modules/atem-connection/dist/commands/DeviceProfile/topologyCommand.js
var require_topologyCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DeviceProfile/topologyCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TopologyCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var enums_1 = require_enums();
    var TopologyCommand = class _TopologyCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand, version) {
        const v230offset = version > enums_1.ProtocolVersion.V8_0_1 ? 1 : 0;
        const properties = {
          mixEffects: rawCommand.readUInt8(0),
          sources: rawCommand.readUInt8(1),
          downstreamKeyers: rawCommand.readUInt8(2),
          auxilliaries: rawCommand.readUInt8(3),
          mixMinusOutputs: rawCommand.readUInt8(4),
          mediaPlayers: rawCommand.readUInt8(5),
          multiviewers: v230offset > 0 ? rawCommand.readUInt8(6) : -1,
          serialPorts: rawCommand.readUInt8(6 + v230offset),
          maxHyperdecks: rawCommand.readUInt8(7 + v230offset),
          DVEs: rawCommand.readUInt8(8 + v230offset),
          stingers: rawCommand.readUInt8(9 + v230offset),
          superSources: rawCommand.readUInt8(10 + v230offset),
          talkbackChannels: rawCommand.readUInt8(12 + v230offset),
          cameraControl: rawCommand.readUInt8(17 + v230offset) === 1,
          // Note: these are defined below as they can overflow in older firmwares
          advancedChromaKeyers: false,
          onlyConfigurableOutputs: false
        };
        if (rawCommand.length > 20) {
          properties.advancedChromaKeyers = rawCommand.readUInt8(21 + v230offset) === 1;
          properties.onlyConfigurableOutputs = rawCommand.readUInt8(22 + v230offset) === 1;
        }
        return new _TopologyCommand(properties);
      }
      applyToState(state) {
        state.info.capabilities = {
          ...state.info.capabilities,
          ...this.properties
        };
        if (this.properties.multiviewers > 0) {
          state.info.multiviewer = {
            windowCount: 10,
            ...state.info.multiviewer,
            count: this.properties.multiviewers
          };
        }
        return `info.capabilities`;
      }
    };
    exports2.TopologyCommand = TopologyCommand;
    TopologyCommand.rawName = "_top";
  }
});

// node_modules/atem-connection/dist/lib/videoMode.js
var require_videoMode = __commonJS({
  "node_modules/atem-connection/dist/lib/videoMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getVideoModeInfo = void 0;
    var Enums = require_enums();
    var dimsPAL = {
      format: Enums.VideoFormat.SD,
      width: 720,
      height: 576
    };
    var dimsNTSC = {
      format: Enums.VideoFormat.SD,
      width: 640,
      height: 480
    };
    var dims720p = {
      format: Enums.VideoFormat.HD720,
      width: 1280,
      height: 720
    };
    var dims1080p = {
      format: Enums.VideoFormat.HD1080,
      width: 1920,
      height: 1080
    };
    var dims4k = {
      format: Enums.VideoFormat.UHD4K,
      width: 3840,
      height: 2160
    };
    var dims8k = {
      format: Enums.VideoFormat.UDH8K,
      width: 7680,
      height: 4260
    };
    var VideoModeInfoImpl = {
      [Enums.VideoMode.N525i5994NTSC]: {
        ...dimsNTSC
      },
      [Enums.VideoMode.P625i50PAL]: {
        ...dimsPAL
      },
      [Enums.VideoMode.N525i5994169]: {
        ...dimsNTSC
      },
      [Enums.VideoMode.P625i50169]: {
        ...dimsPAL
      },
      [Enums.VideoMode.P720p50]: {
        ...dims720p
      },
      [Enums.VideoMode.N720p5994]: {
        ...dims720p
      },
      [Enums.VideoMode.P1080i50]: {
        ...dims1080p
      },
      [Enums.VideoMode.N1080i5994]: {
        ...dims1080p
      },
      [Enums.VideoMode.N1080p2398]: {
        ...dims1080p
      },
      [Enums.VideoMode.N1080p24]: {
        ...dims1080p
      },
      [Enums.VideoMode.P1080p25]: {
        ...dims1080p
      },
      [Enums.VideoMode.N1080p2997]: {
        ...dims1080p
      },
      [Enums.VideoMode.P1080p50]: {
        ...dims1080p
      },
      [Enums.VideoMode.N1080p5994]: {
        ...dims1080p
      },
      [Enums.VideoMode.N4KHDp2398]: {
        ...dims4k
      },
      [Enums.VideoMode.N4KHDp24]: {
        ...dims4k
      },
      [Enums.VideoMode.P4KHDp25]: {
        ...dims4k
      },
      [Enums.VideoMode.N4KHDp2997]: {
        ...dims4k
      },
      [Enums.VideoMode.P4KHDp5000]: {
        ...dims4k
      },
      [Enums.VideoMode.N4KHDp5994]: {
        ...dims4k
      },
      [Enums.VideoMode.N8KHDp2398]: {
        ...dims8k
      },
      [Enums.VideoMode.N8KHDp24]: {
        ...dims8k
      },
      [Enums.VideoMode.P8KHDp25]: {
        ...dims8k
      },
      [Enums.VideoMode.N8KHDp2997]: {
        ...dims8k
      },
      [Enums.VideoMode.P8KHDp50]: {
        ...dims8k
      },
      [Enums.VideoMode.N8KHDp5994]: {
        ...dims8k
      },
      [Enums.VideoMode.N1080p30]: {
        ...dims1080p
      },
      [Enums.VideoMode.N1080p60]: {
        ...dims1080p
      }
    };
    function getVideoModeInfo(videoMode) {
      return VideoModeInfoImpl[videoMode];
    }
    exports2.getVideoModeInfo = getVideoModeInfo;
  }
});

// node_modules/atem-connection/dist/lib/atemUtil.js
var require_atemUtil = __commonJS({
  "node_modules/atem-connection/dist/lib/atemUtil.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isRunningInTests = exports2.assertNever = exports2.omit = exports2.commandStringify = exports2.combineComponents = exports2.getComponents = exports2.padToMultiple = exports2.BalanceToInt = exports2.IntToBalance = exports2.DecibelToUInt16BE = exports2.UInt16BEToDecibel = exports2.bufToNullTerminatedString = exports2.bufToBase64String = exports2.getVideoModeInfo = void 0;
    var videoMode_1 = require_videoMode();
    Object.defineProperty(exports2, "getVideoModeInfo", { enumerable: true, get: function() {
      return videoMode_1.getVideoModeInfo;
    } });
    function bufToBase64String(buffer, start, length) {
      return buffer.toString("base64", start, start + length);
    }
    exports2.bufToBase64String = bufToBase64String;
    function bufToNullTerminatedString(buffer, start, length) {
      const slice = buffer.slice(start, start + length);
      const nullIndex = slice.indexOf("\0");
      return slice.toString("utf8", 0, nullIndex < 0 ? slice.length : nullIndex);
    }
    exports2.bufToNullTerminatedString = bufToNullTerminatedString;
    function UInt16BEToDecibel(input) {
      return Math.round(Math.log10(input / 32768) * 20 * 100) / 100;
    }
    exports2.UInt16BEToDecibel = UInt16BEToDecibel;
    function DecibelToUInt16BE(input) {
      return Math.floor(Math.pow(10, input / 20) * 32768);
    }
    exports2.DecibelToUInt16BE = DecibelToUInt16BE;
    function IntToBalance(input) {
      return Math.round(input / 200);
    }
    exports2.IntToBalance = IntToBalance;
    function BalanceToInt(input) {
      return Math.round(input * 200);
    }
    exports2.BalanceToInt = BalanceToInt;
    function padToMultiple(val, multiple) {
      const r = val % multiple;
      if (r === 0) {
        return val;
      } else {
        return val + (multiple - r);
      }
    }
    exports2.padToMultiple = padToMultiple;
    function getComponents(val) {
      const res = [];
      for (let next = 1; next <= val; next = next << 1) {
        if ((val & next) > 0) {
          res.push(next);
        }
      }
      return res;
    }
    exports2.getComponents = getComponents;
    function combineComponents(vals) {
      let res = 0;
      for (const val of vals) {
        res |= val;
      }
      return res;
    }
    exports2.combineComponents = combineComponents;
    function commandStringify(command) {
      return JSON.stringify(command, (_key, value) => typeof value === "bigint" ? value.toString() : value);
    }
    exports2.commandStringify = commandStringify;
    function omit(o, ...keys) {
      const obj = { ...o };
      for (const key of keys) {
        delete obj[key];
      }
      return obj;
    }
    exports2.omit = omit;
    function assertNever(_val) {
    }
    exports2.assertNever = assertNever;
    function isRunningInTests() {
      return process.env.JEST_WORKER_ID !== void 0;
    }
    exports2.isRunningInTests = isRunningInTests;
  }
});

// node_modules/atem-connection/dist/commands/DeviceProfile/productIdentifierCommand.js
var require_productIdentifierCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DeviceProfile/productIdentifierCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProductIdentifierCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var Util = require_atemUtil();
    var __1 = require_dist3();
    var ProductIdentifierCommand = class _ProductIdentifierCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          productIdentifier: Util.bufToNullTerminatedString(rawCommand, 0, 40),
          model: rawCommand.readUInt8(40)
        };
        return new _ProductIdentifierCommand(properties);
      }
      applyToState(state) {
        state.info.productIdentifier = this.properties.productIdentifier;
        state.info.model = this.properties.model;
        switch (state.info.model) {
          case __1.Enums.Model.TwoME:
          case __1.Enums.Model.TwoME4K:
          case __1.Enums.Model.TwoMEBS4K:
          case __1.Enums.Model.Constellation:
          case __1.Enums.Model.Constellation8K:
          case __1.Enums.Model.ConstellationHD4ME:
          case __1.Enums.Model.Constellation4K4ME:
            state.info.power = [false, false];
            break;
          default:
            state.info.power = [false];
            break;
        }
        return `info`;
      }
    };
    exports2.ProductIdentifierCommand = ProductIdentifierCommand;
    ProductIdentifierCommand.rawName = "_pin";
  }
});

// node_modules/atem-connection/dist/commands/DeviceProfile/superSourceConfigCommand.js
var require_superSourceConfigCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DeviceProfile/superSourceConfigCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SuperSourceConfigCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var enums_1 = require_enums();
    var SuperSourceConfigCommand = class _SuperSourceConfigCommand extends CommandBase_1.DeserializedCommand {
      constructor(ssrcId, properties) {
        super(properties);
        this.ssrcId = ssrcId;
      }
      static deserialize(rawCommand, version) {
        if (version >= enums_1.ProtocolVersion.V8_0) {
          return new _SuperSourceConfigCommand(rawCommand.readUInt8(0), { boxCount: rawCommand.readUInt8(2) });
        } else {
          return new _SuperSourceConfigCommand(0, { boxCount: rawCommand.readUInt8(0) });
        }
      }
      applyToState(state) {
        state.info.superSources[this.ssrcId] = this.properties;
        return `info.superSources`;
      }
    };
    exports2.SuperSourceConfigCommand = SuperSourceConfigCommand;
    SuperSourceConfigCommand.rawName = "_SSC";
  }
});

// node_modules/atem-connection/dist/commands/DeviceProfile/audioMixerConfigCommand.js
var require_audioMixerConfigCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DeviceProfile/audioMixerConfigCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AudioMixerConfigCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var AudioMixerConfigCommand = class _AudioMixerConfigCommand extends CommandBase_1.DeserializedCommand {
      constructor(properties) {
        super(properties);
      }
      static deserialize(rawCommand) {
        return new _AudioMixerConfigCommand({
          inputs: rawCommand.readUInt8(0),
          monitors: rawCommand.readUInt8(1),
          headphones: rawCommand.readUInt8(2)
        });
      }
      applyToState(state) {
        state.info.audioMixer = this.properties;
        state.audio = {
          numberOfChannels: this.properties.inputs,
          hasMonitor: this.properties.monitors != 0,
          channels: []
        };
        return [`info.audioMixer`, `audio`];
      }
    };
    exports2.AudioMixerConfigCommand = AudioMixerConfigCommand;
    AudioMixerConfigCommand.rawName = "_AMC";
  }
});

// node_modules/atem-connection/dist/commands/DeviceProfile/macroPoolConfigCommand.js
var require_macroPoolConfigCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DeviceProfile/macroPoolConfigCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MacroPoolConfigCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var MacroPoolConfigCommand = class _MacroPoolConfigCommand extends CommandBase_1.DeserializedCommand {
      constructor(properties) {
        super(properties);
      }
      static deserialize(rawCommand) {
        return new _MacroPoolConfigCommand({
          macroCount: rawCommand.readUInt8(0)
        });
      }
      applyToState(state) {
        state.info.macroPool = this.properties;
        return `info.macroPool`;
      }
    };
    exports2.MacroPoolConfigCommand = MacroPoolConfigCommand;
    MacroPoolConfigCommand.rawName = "_MAC";
  }
});

// node_modules/atem-connection/dist/commands/DeviceProfile/mediaPoolConfigCommand.js
var require_mediaPoolConfigCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DeviceProfile/mediaPoolConfigCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MediaPoolConfigCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var MediaPoolConfigCommand = class _MediaPoolConfigCommand extends CommandBase_1.DeserializedCommand {
      constructor(properties) {
        super(properties);
      }
      static deserialize(rawCommand) {
        return new _MediaPoolConfigCommand({
          stillCount: rawCommand.readUInt8(0),
          clipCount: rawCommand.readUInt8(1)
        });
      }
      applyToState(state) {
        state.info.mediaPool = this.properties;
        return `info.mediaPool`;
      }
    };
    exports2.MediaPoolConfigCommand = MediaPoolConfigCommand;
    MediaPoolConfigCommand.rawName = "_mpl";
  }
});

// node_modules/atem-connection/dist/commands/DeviceProfile/mixEffectBlockConfigCommand.js
var require_mixEffectBlockConfigCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DeviceProfile/mixEffectBlockConfigCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectBlockConfigCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var MixEffectBlockConfigCommand = class _MixEffectBlockConfigCommand extends CommandBase_1.DeserializedCommand {
      constructor(index, properties) {
        super(properties);
        this.index = index;
      }
      static deserialize(rawCommand) {
        return new _MixEffectBlockConfigCommand(rawCommand.readUInt8(0), { keyCount: rawCommand.readUInt8(1) });
      }
      applyToState(state) {
        state.info.mixEffects[this.index] = this.properties;
        return `info.mixEffects`;
      }
    };
    exports2.MixEffectBlockConfigCommand = MixEffectBlockConfigCommand;
    MixEffectBlockConfigCommand.rawName = "_MeC";
  }
});

// node_modules/atem-connection/dist/commands/DeviceProfile/multiviewerConfigCommand.js
var require_multiviewerConfigCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DeviceProfile/multiviewerConfigCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MultiviewerConfigCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var enums_1 = require_enums();
    var MultiviewerConfigCommand = class _MultiviewerConfigCommand extends CommandBase_1.DeserializedCommand {
      constructor(properties) {
        super(properties);
      }
      static deserialize(rawCommand, version) {
        if (version >= enums_1.ProtocolVersion.V8_1_1) {
          return new _MultiviewerConfigCommand({
            count: -1,
            windowCount: rawCommand.readUInt8(1)
          });
        } else {
          return new _MultiviewerConfigCommand({
            count: rawCommand.readUInt8(0),
            windowCount: rawCommand.readUInt8(1)
          });
        }
      }
      applyToState(state) {
        if (this.properties.count === -1) {
          state.info.multiviewer = {
            count: -1,
            ...state.info.multiviewer,
            windowCount: this.properties.windowCount
          };
        } else {
          state.info.multiviewer = this.properties;
        }
        return `info.multiviewer`;
      }
    };
    exports2.MultiviewerConfigCommand = MultiviewerConfigCommand;
    MultiviewerConfigCommand.rawName = "_MvC";
  }
});

// node_modules/atem-connection/dist/commands/DeviceProfile/fairlightAudioMixerConfigCommand.js
var require_fairlightAudioMixerConfigCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DeviceProfile/fairlightAudioMixerConfigCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightAudioMixerConfigCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var FairlightAudioMixerConfigCommand = class _FairlightAudioMixerConfigCommand extends CommandBase_1.DeserializedCommand {
      constructor(properties) {
        super(properties);
      }
      static deserialize(rawCommand) {
        return new _FairlightAudioMixerConfigCommand({
          inputs: rawCommand.readUInt8(0),
          monitors: rawCommand.readUInt8(1)
        });
      }
      applyToState(state) {
        state.info.fairlightMixer = this.properties;
        state.fairlight = {
          inputs: {}
        };
        return [`info.fairlightMixer`, `fairlight.inputs`];
      }
    };
    exports2.FairlightAudioMixerConfigCommand = FairlightAudioMixerConfigCommand;
    FairlightAudioMixerConfigCommand.rawName = "_FAC";
  }
});

// node_modules/atem-connection/dist/commands/DeviceProfile/videoMixerConfigCommand.js
var require_videoMixerConfigCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DeviceProfile/videoMixerConfigCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VideoMixerConfigCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var enums_1 = require_enums();
    var VideoMixerConfigCommand = class _VideoMixerConfigCommand extends CommandBase_1.DeserializedCommand {
      constructor(properties) {
        super(properties);
      }
      static deserialize(rawCommand, version) {
        const modes = [];
        const hasRequiresReconfig = version >= enums_1.ProtocolVersion.V8_0;
        const size = hasRequiresReconfig ? 13 : 12;
        const count = rawCommand.readUInt16BE(0);
        for (let i = 0; i < count; i++) {
          const baseOffset = 4 + i * size;
          modes.push({
            mode: rawCommand.readUInt8(baseOffset),
            multiviewerModes: readVideoModeBitmask(rawCommand.readUInt32BE(baseOffset + 4)),
            downConvertModes: readVideoModeBitmask(rawCommand.readUInt32BE(baseOffset + 8)),
            requiresReconfig: hasRequiresReconfig ? rawCommand.readUInt8(baseOffset + 12) !== 0 : false
          });
        }
        return new _VideoMixerConfigCommand(modes);
      }
      applyToState(state) {
        state.info.supportedVideoModes = this.properties;
        return `info.supportedVideoModes`;
      }
    };
    exports2.VideoMixerConfigCommand = VideoMixerConfigCommand;
    VideoMixerConfigCommand.rawName = "_VMC";
    function readVideoModeBitmask(rawVal) {
      const modes = [];
      for (const possibleMode of Object.values(enums_1.VideoMode)) {
        if (typeof possibleMode === "number" && (rawVal & 1 << possibleMode) != 0)
          modes.push(possibleMode);
      }
      return modes;
    }
  }
});

// node_modules/atem-connection/dist/commands/DeviceProfile/index.js
var require_DeviceProfile = __commonJS({
  "node_modules/atem-connection/dist/commands/DeviceProfile/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_versionCommand(), exports2);
    tslib_1.__exportStar(require_topologyCommand(), exports2);
    tslib_1.__exportStar(require_productIdentifierCommand(), exports2);
    tslib_1.__exportStar(require_superSourceConfigCommand(), exports2);
    tslib_1.__exportStar(require_audioMixerConfigCommand(), exports2);
    tslib_1.__exportStar(require_macroPoolConfigCommand(), exports2);
    tslib_1.__exportStar(require_mediaPoolConfigCommand(), exports2);
    tslib_1.__exportStar(require_mixEffectBlockConfigCommand(), exports2);
    tslib_1.__exportStar(require_multiviewerConfigCommand(), exports2);
    tslib_1.__exportStar(require_fairlightAudioMixerConfigCommand(), exports2);
    tslib_1.__exportStar(require_videoMixerConfigCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/DisplayClock/DisplayClockCurrentTimeCommand.js
var require_DisplayClockCurrentTimeCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DisplayClock/DisplayClockCurrentTimeCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DisplayClockCurrentTimeCommand = void 0;
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var DisplayClockCurrentTimeCommand = class _DisplayClockCurrentTimeCommand extends CommandBase_1.DeserializedCommand {
      constructor(time) {
        super({ time });
      }
      static deserialize(rawCommand) {
        const time = {
          hours: rawCommand.readUint8(1),
          minutes: rawCommand.readUint8(2),
          seconds: rawCommand.readUint8(3),
          frames: rawCommand.readUint8(4)
        };
        return new _DisplayClockCurrentTimeCommand(time);
      }
      applyToState(state) {
        if (!state.displayClock) {
          throw new state_1.InvalidIdError("DisplayClock");
        }
        state.displayClock.currentTime = this.properties.time;
        return "displayClock.currentTime";
      }
    };
    exports2.DisplayClockCurrentTimeCommand = DisplayClockCurrentTimeCommand;
    DisplayClockCurrentTimeCommand.rawName = "DSTV";
  }
});

// node_modules/atem-connection/dist/commands/DisplayClock/DisplayClockPropertiesGetCommand.js
var require_DisplayClockPropertiesGetCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DisplayClock/DisplayClockPropertiesGetCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DisplayClockPropertiesGetCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DisplayClockPropertiesGetCommand = class _DisplayClockPropertiesGetCommand extends CommandBase_1.DeserializedCommand {
      constructor(props) {
        super(props);
      }
      static deserialize(rawCommand) {
        const props = {
          enabled: !!rawCommand.readUint8(1),
          size: rawCommand.readUint8(3),
          opacity: rawCommand.readUint8(5),
          positionX: rawCommand.readInt16BE(6),
          positionY: rawCommand.readInt16BE(8),
          autoHide: !!rawCommand.readUint8(10),
          startFrom: {
            hours: rawCommand.readUint8(11),
            minutes: rawCommand.readUint8(12),
            seconds: rawCommand.readUint8(13),
            frames: rawCommand.readUint8(14)
          },
          clockMode: rawCommand.readUint8(15),
          clockState: rawCommand.readUint8(16)
        };
        return new _DisplayClockPropertiesGetCommand(props);
      }
      applyToState(state) {
        state.displayClock = {
          currentTime: {
            hours: 0,
            minutes: 0,
            seconds: 0,
            frames: 0
          },
          ...state.displayClock,
          properties: this.properties
        };
        return "displayClock.properties";
      }
    };
    exports2.DisplayClockPropertiesGetCommand = DisplayClockPropertiesGetCommand;
    DisplayClockPropertiesGetCommand.rawName = "DCPV";
  }
});

// node_modules/atem-connection/dist/commands/DisplayClock/DisplayClockPropertiesSetCommand.js
var require_DisplayClockPropertiesSetCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DisplayClock/DisplayClockPropertiesSetCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DisplayClockPropertiesSetCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DisplayClockPropertiesSetCommand = class extends CommandBase_1.WritableCommand {
      serialize() {
        const buffer = Buffer.alloc(28);
        buffer.writeUint16BE(this.flag, 0);
        buffer.writeUint8(this.properties.enabled ? 1 : 0, 3);
        buffer.writeUint8(this.properties.size ?? 0, 5);
        buffer.writeUint8(this.properties.opacity ?? 0, 7);
        buffer.writeInt16BE(this.properties.positionX ?? 0, 8);
        buffer.writeInt16BE(this.properties.positionY ?? 0, 10);
        buffer.writeUint8(this.properties.autoHide ? 1 : 0, 12);
        buffer.writeUint8(this.properties.startFrom?.hours ?? 0, 13);
        buffer.writeUint8(this.properties.startFrom?.minutes ?? 0, 14);
        buffer.writeUint8(this.properties.startFrom?.seconds ?? 0, 15);
        buffer.writeUint8(this.properties.startFrom?.frames ?? 0, 16);
        buffer.writeUint32BE(this.properties.startFromFrames ?? 0, 20);
        buffer.writeUint8(this.properties.clockMode ?? 0, 24);
        return buffer;
      }
    };
    exports2.DisplayClockPropertiesSetCommand = DisplayClockPropertiesSetCommand;
    DisplayClockPropertiesSetCommand.MaskFlags = {
      enabled: 1 << 0,
      size: 1 << 1,
      opacity: 1 << 2,
      positionX: 1 << 3,
      positionY: 1 << 4,
      autoHide: 1 << 5,
      startFrom: 1 << 6,
      startFromFrames: 1 << 7,
      clockMode: 1 << 8
    };
    DisplayClockPropertiesSetCommand.rawName = "DCPC";
  }
});

// node_modules/atem-connection/dist/commands/DisplayClock/DisplayClockRequestTimeCommand.js
var require_DisplayClockRequestTimeCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DisplayClock/DisplayClockRequestTimeCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DisplayClockRequestTimeCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DisplayClockRequestTimeCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor() {
        super({});
      }
      serialize() {
        return Buffer.alloc(4);
      }
    };
    exports2.DisplayClockRequestTimeCommand = DisplayClockRequestTimeCommand;
    DisplayClockRequestTimeCommand.rawName = "DSTR";
  }
});

// node_modules/atem-connection/dist/commands/DisplayClock/DisplayClockStateSetCommand.js
var require_DisplayClockStateSetCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DisplayClock/DisplayClockStateSetCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DisplayClockStateSetCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DisplayClockStateSetCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(state) {
        super({ state });
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUint8(this.properties.state, 1);
        return buffer;
      }
    };
    exports2.DisplayClockStateSetCommand = DisplayClockStateSetCommand;
    DisplayClockStateSetCommand.rawName = "DCSC";
  }
});

// node_modules/atem-connection/dist/commands/DisplayClock/index.js
var require_DisplayClock = __commonJS({
  "node_modules/atem-connection/dist/commands/DisplayClock/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_DisplayClockCurrentTimeCommand(), exports2);
    tslib_1.__exportStar(require_DisplayClockPropertiesGetCommand(), exports2);
    tslib_1.__exportStar(require_DisplayClockPropertiesSetCommand(), exports2);
    tslib_1.__exportStar(require_DisplayClockRequestTimeCommand(), exports2);
    tslib_1.__exportStar(require_DisplayClockStateSetCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyAutoCommand.js
var require_DownstreamKeyAutoCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyAutoCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DownstreamKeyAutoCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var enums_1 = require_enums();
    var DownstreamKeyAutoCommand = class extends CommandBase_1.WritableCommand {
      constructor(downstreamKeyerId) {
        super();
        this.downstreamKeyerId = downstreamKeyerId;
      }
      serialize(version) {
        const buffer = Buffer.alloc(4);
        if (version >= enums_1.ProtocolVersion.V8_0_1) {
          buffer.writeUInt8(this.flag, 0);
          buffer.writeUInt8(this.downstreamKeyerId, 1);
          buffer.writeUInt8(this.properties.isTowardsOnAir ? 1 : 0, 2);
        } else {
          buffer.writeUInt8(this.downstreamKeyerId, 0);
        }
        return buffer;
      }
    };
    exports2.DownstreamKeyAutoCommand = DownstreamKeyAutoCommand;
    DownstreamKeyAutoCommand.MaskFlags = {
      isTowardsOnAir: 1
    };
    DownstreamKeyAutoCommand.rawName = "DDsA";
  }
});

// node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyCutSourceCommand.js
var require_DownstreamKeyCutSourceCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyCutSourceCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DownstreamKeyCutSourceCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DownstreamKeyCutSourceCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(downstreamKeyerId, input) {
        super({ input });
        this.downstreamKeyerId = downstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.downstreamKeyerId, 0);
        buffer.writeUInt16BE(this.properties.input, 2);
        return buffer;
      }
    };
    exports2.DownstreamKeyCutSourceCommand = DownstreamKeyCutSourceCommand;
    DownstreamKeyCutSourceCommand.rawName = "CDsC";
  }
});

// node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyFillSourceCommand.js
var require_DownstreamKeyFillSourceCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyFillSourceCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DownstreamKeyFillSourceCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DownstreamKeyFillSourceCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(downstreamKeyerId, input) {
        super({ input });
        this.downstreamKeyerId = downstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.downstreamKeyerId, 0);
        buffer.writeUInt16BE(this.properties.input, 2);
        return buffer;
      }
    };
    exports2.DownstreamKeyFillSourceCommand = DownstreamKeyFillSourceCommand;
    DownstreamKeyFillSourceCommand.rawName = "CDsF";
  }
});

// node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyGeneralCommand.js
var require_DownstreamKeyGeneralCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyGeneralCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DownstreamKeyGeneralCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DownstreamKeyGeneralCommand = class extends CommandBase_1.WritableCommand {
      constructor(downstreamKeyerId) {
        super();
        this.downstreamKeyerId = downstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(12);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.downstreamKeyerId, 1);
        buffer.writeUInt8(this.properties.preMultiply ? 1 : 0, 2);
        buffer.writeInt16BE(this.properties.clip || 0, 4);
        buffer.writeInt16BE(this.properties.gain || 0, 6);
        buffer.writeUInt8(this.properties.invert ? 1 : 0, 8);
        return buffer;
      }
    };
    exports2.DownstreamKeyGeneralCommand = DownstreamKeyGeneralCommand;
    DownstreamKeyGeneralCommand.MaskFlags = {
      preMultiply: 1 << 0,
      clip: 1 << 1,
      gain: 1 << 2,
      invert: 1 << 3
    };
    DownstreamKeyGeneralCommand.rawName = "CDsG";
  }
});

// node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyMaskCommand.js
var require_DownstreamKeyMaskCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyMaskCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DownstreamKeyMaskCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DownstreamKeyMaskCommand = class extends CommandBase_1.WritableCommand {
      constructor(downstreamKeyerId) {
        super();
        this.downstreamKeyerId = downstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(12);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.downstreamKeyerId, 1);
        buffer.writeUInt8(this.properties.enabled ? 1 : 0, 2);
        buffer.writeInt16BE(this.properties.top || 0, 4);
        buffer.writeInt16BE(this.properties.bottom || 0, 6);
        buffer.writeInt16BE(this.properties.left || 0, 8);
        buffer.writeInt16BE(this.properties.right || 0, 10);
        return buffer;
      }
    };
    exports2.DownstreamKeyMaskCommand = DownstreamKeyMaskCommand;
    DownstreamKeyMaskCommand.MaskFlags = {
      enabled: 1 << 0,
      top: 1 << 1,
      bottom: 1 << 2,
      left: 1 << 3,
      right: 1 << 4
    };
    DownstreamKeyMaskCommand.rawName = "CDsM";
  }
});

// node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyOnAirCommand.js
var require_DownstreamKeyOnAirCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyOnAirCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DownstreamKeyOnAirCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DownstreamKeyOnAirCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(downstreamKeyerId, onAir) {
        super({ onAir });
        this.downstreamKeyerId = downstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.downstreamKeyerId, 0);
        buffer.writeUInt8(this.properties.onAir ? 1 : 0, 1);
        return buffer;
      }
    };
    exports2.DownstreamKeyOnAirCommand = DownstreamKeyOnAirCommand;
    DownstreamKeyOnAirCommand.rawName = "CDsL";
  }
});

// node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyPropertiesCommand.js
var require_DownstreamKeyPropertiesCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyPropertiesCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DownstreamKeyPropertiesCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var DownstreamKeyPropertiesCommand = class _DownstreamKeyPropertiesCommand extends CommandBase_1.DeserializedCommand {
      constructor(downstreamKeyerId, properties) {
        super(properties);
        this.downstreamKeyerId = downstreamKeyerId;
      }
      static deserialize(rawCommand) {
        const downstreamKeyerId = rawCommand.readUInt8(0);
        const properties = {
          tie: rawCommand.readUInt8(1) === 1,
          rate: rawCommand.readUInt8(2),
          preMultiply: rawCommand.readUInt8(3) === 1,
          clip: rawCommand.readUInt16BE(4),
          gain: rawCommand.readUInt16BE(6),
          invert: rawCommand.readUInt8(8) === 1,
          mask: {
            enabled: rawCommand.readUInt8(9) === 1,
            top: rawCommand.readInt16BE(10),
            bottom: rawCommand.readInt16BE(12),
            left: rawCommand.readInt16BE(14),
            right: rawCommand.readInt16BE(16)
          }
        };
        return new _DownstreamKeyPropertiesCommand(downstreamKeyerId, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.downstreamKeyerId >= state.info.capabilities.downstreamKeyers) {
          throw new state_1.InvalidIdError("DownstreamKeyer", this.downstreamKeyerId);
        }
        state_1.AtemStateUtil.getDownstreamKeyer(state, this.downstreamKeyerId).properties = this.properties;
        return `video.downstreamKeyers.${this.downstreamKeyerId}`;
      }
    };
    exports2.DownstreamKeyPropertiesCommand = DownstreamKeyPropertiesCommand;
    DownstreamKeyPropertiesCommand.rawName = "DskP";
  }
});

// node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyRateCommand.js
var require_DownstreamKeyRateCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyRateCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DownstreamKeyRateCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DownstreamKeyRateCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(downstreamKeyerId, rate) {
        super({ rate });
        this.downstreamKeyerId = downstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.downstreamKeyerId, 0);
        buffer.writeUInt8(this.properties.rate, 1);
        return buffer;
      }
    };
    exports2.DownstreamKeyRateCommand = DownstreamKeyRateCommand;
    DownstreamKeyRateCommand.rawName = "CDsR";
  }
});

// node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeySourcesCommand.js
var require_DownstreamKeySourcesCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeySourcesCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DownstreamKeySourcesCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var DownstreamKeySourcesCommand = class _DownstreamKeySourcesCommand extends CommandBase_1.DeserializedCommand {
      constructor(downstreamKeyerId, properties) {
        super(properties);
        this.downstreamKeyerId = downstreamKeyerId;
      }
      static deserialize(rawCommand) {
        const downstreamKeyerId = rawCommand.readUInt8(0);
        const properties = {
          fillSource: rawCommand.readUInt16BE(2),
          cutSource: rawCommand.readUInt16BE(4)
        };
        return new _DownstreamKeySourcesCommand(downstreamKeyerId, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.downstreamKeyerId >= state.info.capabilities.downstreamKeyers) {
          throw new state_1.InvalidIdError("DownstreamKeyer", this.downstreamKeyerId);
        }
        state_1.AtemStateUtil.getDownstreamKeyer(state, this.downstreamKeyerId).sources = this.properties;
        return `video.downstreamKeyers.${this.downstreamKeyerId}`;
      }
    };
    exports2.DownstreamKeySourcesCommand = DownstreamKeySourcesCommand;
    DownstreamKeySourcesCommand.rawName = "DskB";
  }
});

// node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyStateCommand.js
var require_DownstreamKeyStateCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyStateCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DownstreamKeyStateV8Command = exports2.DownstreamKeyStateCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var enums_1 = require_enums();
    var DownstreamKeyStateCommand = class _DownstreamKeyStateCommand extends CommandBase_1.DeserializedCommand {
      constructor(downstreamKeyerId, properties) {
        super(properties);
        this.downstreamKeyerId = downstreamKeyerId;
      }
      static deserialize(rawCommand) {
        const downstreamKeyerId = rawCommand.readUInt8(0);
        const properties = {
          onAir: rawCommand.readUInt8(1) === 1,
          inTransition: rawCommand.readUInt8(2) === 1,
          isAuto: rawCommand.readUInt8(3) === 1,
          remainingFrames: rawCommand.readUInt8(4)
        };
        return new _DownstreamKeyStateCommand(downstreamKeyerId, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.downstreamKeyerId >= state.info.capabilities.downstreamKeyers) {
          throw new state_1.InvalidIdError("DownstreamKeyer", this.downstreamKeyerId);
        }
        state.video.downstreamKeyers[this.downstreamKeyerId] = {
          ...state_1.AtemStateUtil.getDownstreamKeyer(state, this.downstreamKeyerId),
          ...this.properties
        };
        return `video.downstreamKeyers.${this.downstreamKeyerId}`;
      }
    };
    exports2.DownstreamKeyStateCommand = DownstreamKeyStateCommand;
    DownstreamKeyStateCommand.rawName = "DskS";
    var DownstreamKeyStateV8Command = class _DownstreamKeyStateV8Command extends CommandBase_1.DeserializedCommand {
      constructor(downstreamKeyerId, properties) {
        super(properties);
        this.downstreamKeyerId = downstreamKeyerId;
      }
      static deserialize(rawCommand) {
        const downstreamKeyerId = rawCommand.readUInt8(0);
        const properties = {
          onAir: rawCommand.readUInt8(1) === 1,
          inTransition: rawCommand.readUInt8(2) === 1,
          isAuto: rawCommand.readUInt8(3) === 1,
          isTowardsOnAir: rawCommand.readUInt8(4) === 1,
          remainingFrames: rawCommand.readUInt8(5)
        };
        return new _DownstreamKeyStateV8Command(downstreamKeyerId, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.downstreamKeyerId >= state.info.capabilities.downstreamKeyers) {
          throw new state_1.InvalidIdError("DownstreamKeyer", this.downstreamKeyerId);
        }
        state.video.downstreamKeyers[this.downstreamKeyerId] = {
          ...state_1.AtemStateUtil.getDownstreamKeyer(state, this.downstreamKeyerId),
          ...this.properties
        };
        return `video.downstreamKeyers.${this.downstreamKeyerId}`;
      }
    };
    exports2.DownstreamKeyStateV8Command = DownstreamKeyStateV8Command;
    DownstreamKeyStateV8Command.rawName = "DskS";
    DownstreamKeyStateV8Command.minimumVersion = enums_1.ProtocolVersion.V8_0_1;
  }
});

// node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyTieCommand.js
var require_DownstreamKeyTieCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/DownstreamKey/DownstreamKeyTieCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DownstreamKeyTieCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var DownstreamKeyTieCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(downstreamKeyerId, tie) {
        super({ tie });
        this.downstreamKeyerId = downstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.downstreamKeyerId, 0);
        buffer.writeUInt8(this.properties.tie ? 1 : 0, 1);
        return buffer;
      }
    };
    exports2.DownstreamKeyTieCommand = DownstreamKeyTieCommand;
    DownstreamKeyTieCommand.rawName = "CDsT";
  }
});

// node_modules/atem-connection/dist/commands/DownstreamKey/index.js
var require_DownstreamKey = __commonJS({
  "node_modules/atem-connection/dist/commands/DownstreamKey/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_DownstreamKeyAutoCommand(), exports2);
    tslib_1.__exportStar(require_DownstreamKeyCutSourceCommand(), exports2);
    tslib_1.__exportStar(require_DownstreamKeyFillSourceCommand(), exports2);
    tslib_1.__exportStar(require_DownstreamKeyGeneralCommand(), exports2);
    tslib_1.__exportStar(require_DownstreamKeyMaskCommand(), exports2);
    tslib_1.__exportStar(require_DownstreamKeyOnAirCommand(), exports2);
    tslib_1.__exportStar(require_DownstreamKeyPropertiesCommand(), exports2);
    tslib_1.__exportStar(require_DownstreamKeyRateCommand(), exports2);
    tslib_1.__exportStar(require_DownstreamKeySourcesCommand(), exports2);
    tslib_1.__exportStar(require_DownstreamKeyStateCommand(), exports2);
    tslib_1.__exportStar(require_DownstreamKeyTieCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/AudioRouting/AudioRoutingOutput.js
var require_AudioRoutingOutput = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/AudioRouting/AudioRoutingOutput.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AudioRoutingOutputUpdateCommand = exports2.AudioRoutingOutputCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var Util = require_atemUtil();
    var AudioRoutingOutputCommand = class extends CommandBase_1.WritableCommand {
      constructor(outputId) {
        super();
        this.id = outputId;
      }
      serialize() {
        const buffer = Buffer.alloc(76);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt32BE(this.id, 4);
        buffer.writeUInt32BE(this.properties.sourceId ?? 0, 8);
        buffer.write(this.properties.name ?? "", 12, 64);
        return buffer;
      }
    };
    exports2.AudioRoutingOutputCommand = AudioRoutingOutputCommand;
    AudioRoutingOutputCommand.MaskFlags = {
      sourceId: 1 << 0,
      name: 1 << 1
    };
    AudioRoutingOutputCommand.rawName = "AROC";
    var AudioRoutingOutputUpdateCommand = class _AudioRoutingOutputUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(outputId, properties) {
        super(properties);
        this.id = outputId;
      }
      static deserialize(rawCommand) {
        const outputId = rawCommand.readUInt32BE(0);
        const properties = {
          audioOutputId: outputId >> 16,
          audioChannelPair: outputId & 65535,
          sourceId: rawCommand.readUInt32BE(4),
          externalPortType: rawCommand.readUInt16BE(8),
          internalPortType: rawCommand.readUInt16BE(10),
          name: Util.bufToNullTerminatedString(rawCommand, 12, 64)
        };
        return new _AudioRoutingOutputUpdateCommand(outputId, properties);
      }
      applyToState(state) {
        if (!state.fairlight) {
          throw new state_1.InvalidIdError("Fairlight");
        }
        if (!state.fairlight.audioRouting)
          state.fairlight.audioRouting = {
            outputs: {},
            sources: {}
          };
        state.fairlight.audioRouting.outputs[this.id] = this.properties;
        return `fairlight.audioRouting.outputs.${this.id}`;
      }
    };
    exports2.AudioRoutingOutputUpdateCommand = AudioRoutingOutputUpdateCommand;
    AudioRoutingOutputUpdateCommand.rawName = "AROP";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/AudioRouting/AudioRoutingSource.js
var require_AudioRoutingSource = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/AudioRouting/AudioRoutingSource.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AudioRoutingSourceUpdateCommand = exports2.AudioRoutingSourceCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var Util = require_atemUtil();
    var AudioRoutingSourceCommand = class extends CommandBase_1.WritableCommand {
      constructor(sourceId) {
        super();
        this.id = sourceId;
      }
      serialize() {
        const buffer = Buffer.alloc(72);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt32BE(this.id, 4);
        buffer.write(this.properties.name ?? "", 8, 64);
        return buffer;
      }
    };
    exports2.AudioRoutingSourceCommand = AudioRoutingSourceCommand;
    AudioRoutingSourceCommand.MaskFlags = {
      name: 1 << 0
    };
    AudioRoutingSourceCommand.rawName = "ARSC";
    var AudioRoutingSourceUpdateCommand = class _AudioRoutingSourceUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(sourceId, properties) {
        super(properties);
        this.id = sourceId;
      }
      static deserialize(rawCommand) {
        const sourceId = rawCommand.readUInt32BE(0);
        const properties = {
          audioSourceId: sourceId >> 16,
          audioChannelPair: sourceId & 65535,
          externalPortType: rawCommand.readUInt16BE(4),
          internalPortType: rawCommand.readUInt16BE(6),
          name: Util.bufToNullTerminatedString(rawCommand, 8, 64)
        };
        return new _AudioRoutingSourceUpdateCommand(sourceId, properties);
      }
      applyToState(state) {
        if (!state.fairlight) {
          throw new state_1.InvalidIdError("Fairlight");
        }
        if (!state.fairlight.audioRouting)
          state.fairlight.audioRouting = {
            outputs: {},
            sources: {}
          };
        state.fairlight.audioRouting.sources[this.id] = this.properties;
        return `fairlight.audioRouting.sources.${this.id}`;
      }
    };
    exports2.AudioRoutingSourceUpdateCommand = AudioRoutingSourceUpdateCommand;
    AudioRoutingSourceUpdateCommand.rawName = "ARSP";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/AudioRouting/index.js
var require_AudioRouting = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/AudioRouting/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_AudioRoutingOutput(), exports2);
    tslib_1.__exportStar(require_AudioRoutingSource(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerInputCommand.js
var require_FairlightMixerInputCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerInputCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerInputUpdateCommand = exports2.FairlightMixerInputV8Command = exports2.FairlightMixerInputCommand = void 0;
    var state_1 = require_state();
    var enums_1 = require_enums();
    var Util = require_atemUtil();
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerInputCommand = class extends CommandBase_1.WritableCommand {
      constructor(index) {
        super();
        this.index = index;
      }
      serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.index, 2);
        buffer.writeUInt8(this.properties.rcaToXlrEnabled ? 1 : 0, 4);
        buffer.writeUInt8(this.properties.activeConfiguration || 0, 5);
        return buffer;
      }
    };
    exports2.FairlightMixerInputCommand = FairlightMixerInputCommand;
    FairlightMixerInputCommand.MaskFlags = {
      rcaToXlrEnabled: 1 << 0,
      activeConfiguration: 1 << 1
    };
    FairlightMixerInputCommand.rawName = "CFIP";
    var FairlightMixerInputV8Command = class extends CommandBase_1.WritableCommand {
      constructor(index) {
        super();
        this.index = index;
      }
      serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.index, 2);
        buffer.writeUInt8(this.properties.activeConfiguration || 0, 4);
        buffer.writeUInt8(this.properties.activeInputLevel || 0, 5);
        return buffer;
      }
    };
    exports2.FairlightMixerInputV8Command = FairlightMixerInputV8Command;
    FairlightMixerInputV8Command.MaskFlags = {
      activeConfiguration: 1 << 0,
      activeInputLevel: 1 << 1
    };
    FairlightMixerInputV8Command.rawName = "CFIP";
    FairlightMixerInputV8Command.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
    var FairlightMixerInputUpdateCommand = class _FairlightMixerInputUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(index, properties) {
        super(properties);
        this.index = index;
      }
      static deserialize(rawCommand, version) {
        const rcaToXlr = version < enums_1.ProtocolVersion.V8_1_1;
        const index = rawCommand.readUInt16BE(0);
        const properties = {
          inputType: rawCommand.readUInt8(2),
          externalPortType: rawCommand.readUInt16BE(6),
          supportedConfigurations: Util.getComponents(rawCommand.readUInt8(rcaToXlr ? 11 : 9)),
          activeConfiguration: rawCommand.readUInt8(rcaToXlr ? 12 : 10),
          // TODO - check these value conversions
          supportedInputLevels: rcaToXlr ? rawCommand.readUInt8(8) > 0 ? [enums_1.FairlightAnalogInputLevel.ProLine, enums_1.FairlightAnalogInputLevel.Microphone] : [] : Util.getComponents(rawCommand.readUInt8(11)),
          activeInputLevel: rcaToXlr ? rawCommand.readUInt8(9) > 0 ? enums_1.FairlightAnalogInputLevel.ProLine : enums_1.FairlightAnalogInputLevel.Microphone : rawCommand.readUInt8(12)
        };
        return new _FairlightMixerInputUpdateCommand(index, properties);
      }
      applyToState(state) {
        if (!state.fairlight) {
          throw new state_1.InvalidIdError("Fairlight");
        }
        state.fairlight.inputs[this.index] = {
          sources: {},
          ...state.fairlight.inputs[this.index],
          properties: this.properties
        };
        return `fairlight.inputs.${this.index}.properties`;
      }
    };
    exports2.FairlightMixerInputUpdateCommand = FairlightMixerInputUpdateCommand;
    FairlightMixerInputUpdateCommand.rawName = "FAIP";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMasterCommand.js
var require_FairlightMixerMasterCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMasterCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerMasterUpdateCommand = exports2.FairlightMixerMasterCommand = void 0;
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerMasterCommand = class extends CommandBase_1.WritableCommand {
      serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.equalizerEnabled ? 1 : 0, 1);
        buffer.writeInt32BE(this.properties.equalizerGain || 0, 4);
        buffer.writeInt32BE(this.properties.makeUpGain || 0, 8);
        buffer.writeInt32BE(this.properties.faderGain || 0, 12);
        buffer.writeUInt8(this.properties.followFadeToBlack ? 1 : 0, 16);
        return buffer;
      }
    };
    exports2.FairlightMixerMasterCommand = FairlightMixerMasterCommand;
    FairlightMixerMasterCommand.MaskFlags = {
      equalizerEnabled: 1 << 0,
      equalizerGain: 1 << 1,
      makeUpGain: 1 << 2,
      faderGain: 1 << 3,
      followFadeToBlack: 1 << 4
    };
    FairlightMixerMasterCommand.rawName = "CFMP";
    var FairlightMixerMasterUpdateCommand = class _FairlightMixerMasterUpdateCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          bandCount: rawCommand.readUInt8(0),
          equalizerEnabled: rawCommand.readUInt8(1) > 0,
          equalizerGain: rawCommand.readInt32BE(4),
          makeUpGain: rawCommand.readInt32BE(8),
          faderGain: rawCommand.readInt32BE(12),
          followFadeToBlack: rawCommand.readUInt8(16) > 0
        };
        return new _FairlightMixerMasterUpdateCommand(properties);
      }
      applyToState(state) {
        if (!state.fairlight) {
          throw new state_1.InvalidIdError("Fairlight");
        }
        state.fairlight.master = {
          properties: {
            faderGain: this.properties.faderGain,
            followFadeToBlack: this.properties.followFadeToBlack
          },
          dynamics: {
            ...state.fairlight.master?.dynamics,
            makeUpGain: this.properties.makeUpGain
          },
          equalizer: {
            ...state.fairlight.master?.equalizer,
            enabled: this.properties.equalizerEnabled,
            gain: this.properties.equalizerGain,
            bands: state.fairlight.master?.equalizer?.bands ?? new Array(this.properties.bandCount).fill(void 0)
            // Assume bands number doesnt change
          }
        };
        return `fairlight.master`;
      }
    };
    exports2.FairlightMixerMasterUpdateCommand = FairlightMixerMasterUpdateCommand;
    FairlightMixerMasterUpdateCommand.rawName = "FAMP";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMasterCompressorCommand.js
var require_FairlightMixerMasterCompressorCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMasterCompressorCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerMasterCompressorUpdateCommand = exports2.FairlightMixerMasterCompressorCommand = void 0;
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerMasterCompressorCommand = class extends CommandBase_1.WritableCommand {
      serialize() {
        const buffer = Buffer.alloc(24);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.compressorEnabled ? 1 : 0, 1);
        buffer.writeInt32BE(this.properties.threshold || 0, 4);
        buffer.writeInt16BE(this.properties.ratio || 0, 8);
        buffer.writeInt32BE(this.properties.attack || 0, 12);
        buffer.writeInt32BE(this.properties.hold || 0, 16);
        buffer.writeInt32BE(this.properties.release || 0, 20);
        return buffer;
      }
    };
    exports2.FairlightMixerMasterCompressorCommand = FairlightMixerMasterCompressorCommand;
    FairlightMixerMasterCompressorCommand.MaskFlags = {
      compressorEnabled: 1 << 0,
      threshold: 1 << 1,
      ratio: 1 << 2,
      attack: 1 << 3,
      hold: 1 << 4,
      release: 1 << 5
    };
    FairlightMixerMasterCompressorCommand.rawName = "CMCP";
    var FairlightMixerMasterCompressorUpdateCommand = class _FairlightMixerMasterCompressorUpdateCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          compressorEnabled: rawCommand.readUInt8(0) > 0,
          threshold: rawCommand.readInt32BE(4),
          ratio: rawCommand.readInt16BE(8),
          attack: rawCommand.readInt32BE(12),
          hold: rawCommand.readInt32BE(16),
          release: rawCommand.readInt32BE(20)
        };
        return new _FairlightMixerMasterCompressorUpdateCommand(properties);
      }
      applyToState(state) {
        if (!state.fairlight) {
          throw new state_1.InvalidIdError("Fairlight");
        }
        if (!state.fairlight.master) {
          throw new state_1.InvalidIdError("Fairlight.Master");
        }
        if (!state.fairlight.master.dynamics) {
          state.fairlight.master.dynamics = {};
        }
        state.fairlight.master.dynamics.compressor = this.properties;
        return `fairlight.master.dynamics.compressor`;
      }
    };
    exports2.FairlightMixerMasterCompressorUpdateCommand = FairlightMixerMasterCompressorUpdateCommand;
    FairlightMixerMasterCompressorUpdateCommand.rawName = "MOCP";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMasterDynamicsResetCommand.js
var require_FairlightMixerMasterDynamicsResetCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMasterDynamicsResetCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerMasterDynamicsResetCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerMasterDynamicsResetCommand = class extends CommandBase_1.WritableCommand {
      serialize() {
        const buffer = Buffer.alloc(4);
        let val = 0;
        if (this.properties.dynamics) {
          val |= 1 << 0;
        }
        if (this.properties.expander) {
          val |= 1 << 1;
        }
        if (this.properties.compressor) {
          val |= 1 << 2;
        }
        if (this.properties.limiter) {
          val |= 1 << 3;
        }
        buffer.writeUInt8(val, 1);
        return buffer;
      }
    };
    exports2.FairlightMixerMasterDynamicsResetCommand = FairlightMixerMasterDynamicsResetCommand;
    FairlightMixerMasterDynamicsResetCommand.rawName = "RMOD";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMasterEqualizerBandCommand.js
var require_FairlightMixerMasterEqualizerBandCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMasterEqualizerBandCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerMasterEqualizerBandUpdateCommand = exports2.FairlightMixerMasterEqualizerBandCommand = void 0;
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var AtemUtil = require_atemUtil();
    var FairlightMixerMasterEqualizerBandCommand = class extends CommandBase_1.WritableCommand {
      constructor(band) {
        super();
        this.band = band;
      }
      serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.band, 1);
        buffer.writeUInt8(this.properties.bandEnabled ? 1 : 0, 2);
        buffer.writeUInt8(this.properties.shape || 0, 3);
        buffer.writeUInt8(this.properties.frequencyRange || 0, 4);
        buffer.writeUInt32BE(this.properties.frequency || 0, 8);
        buffer.writeInt32BE(this.properties.gain || 0, 12);
        buffer.writeInt16BE(this.properties.qFactor || 0, 16);
        return buffer;
      }
    };
    exports2.FairlightMixerMasterEqualizerBandCommand = FairlightMixerMasterEqualizerBandCommand;
    FairlightMixerMasterEqualizerBandCommand.MaskFlags = {
      bandEnabled: 1 << 0,
      shape: 1 << 1,
      frequencyRange: 1 << 2,
      frequency: 1 << 3,
      gain: 1 << 4,
      qFactor: 1 << 5
    };
    FairlightMixerMasterEqualizerBandCommand.rawName = "CMBP";
    var FairlightMixerMasterEqualizerBandUpdateCommand = class _FairlightMixerMasterEqualizerBandUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(band, properties) {
        super(properties);
        this.band = band;
      }
      static deserialize(rawCommand) {
        const band = rawCommand.readUInt8(0);
        const properties = {
          bandEnabled: rawCommand.readUInt8(1) > 0,
          supportedShapes: AtemUtil.getComponents(rawCommand.readUInt8(2)),
          shape: rawCommand.readUInt8(3),
          supportedFrequencyRanges: AtemUtil.getComponents(rawCommand.readUInt8(4)),
          frequencyRange: rawCommand.readUInt8(5),
          frequency: rawCommand.readUInt32BE(8),
          gain: rawCommand.readInt32BE(12),
          qFactor: rawCommand.readInt16BE(16)
        };
        return new _FairlightMixerMasterEqualizerBandUpdateCommand(band, properties);
      }
      applyToState(state) {
        if (!state.fairlight) {
          throw new state_1.InvalidIdError("Fairlight");
        }
        if (!state.fairlight.master) {
          throw new state_1.InvalidIdError("Fairlight.Master");
        }
        if (!state.fairlight.master.equalizer) {
          throw new state_1.InvalidIdError("Fairlight.Master.Equalizer");
        }
        if (this.band >= state.fairlight.master.equalizer.bands.length) {
          throw new state_1.InvalidIdError("Fairlight.Master.Equalizer", this.band);
        }
        state.fairlight.master.equalizer.bands[this.band] = this.properties;
        return `fairlight.master.equalizer.bands.${this.band}`;
      }
    };
    exports2.FairlightMixerMasterEqualizerBandUpdateCommand = FairlightMixerMasterEqualizerBandUpdateCommand;
    FairlightMixerMasterEqualizerBandUpdateCommand.rawName = "AMBP";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMasterEqualizerResetCommand.js
var require_FairlightMixerMasterEqualizerResetCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMasterEqualizerResetCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerMasterEqualizerResetCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerMasterEqualizerResetCommand = class extends CommandBase_1.WritableCommand {
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.equalizer ? 1 : 0, 1);
        buffer.writeUInt8(this.properties.band || 0, 2);
        return buffer;
      }
    };
    exports2.FairlightMixerMasterEqualizerResetCommand = FairlightMixerMasterEqualizerResetCommand;
    FairlightMixerMasterEqualizerResetCommand.MaskFlags = {
      equalizer: 1 << 0,
      band: 1 << 1
    };
    FairlightMixerMasterEqualizerResetCommand.rawName = "RMOE";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMasterLevelsCommand.js
var require_FairlightMixerMasterLevelsCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMasterLevelsCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerMasterLevelsUpdateCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerMasterLevelsUpdateCommand = class _FairlightMixerMasterLevelsUpdateCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          inputLeftLevel: rawCommand.readInt16BE(0),
          inputRightLevel: rawCommand.readInt16BE(2),
          inputLeftPeak: rawCommand.readInt16BE(4),
          inputRightPeak: rawCommand.readInt16BE(6),
          compressorGainReduction: rawCommand.readInt16BE(8),
          limiterGainReduction: rawCommand.readInt16BE(10),
          outputLeftLevel: rawCommand.readInt16BE(12),
          outputRightLevel: rawCommand.readInt16BE(14),
          outputLeftPeak: rawCommand.readInt16BE(16),
          outputRightPeak: rawCommand.readInt16BE(18),
          leftLevel: rawCommand.readInt16BE(20),
          rightLevel: rawCommand.readInt16BE(22),
          leftPeak: rawCommand.readInt16BE(24),
          rightPeak: rawCommand.readInt16BE(26)
        };
        return new _FairlightMixerMasterLevelsUpdateCommand(properties);
      }
      applyToState() {
        return [];
      }
    };
    exports2.FairlightMixerMasterLevelsUpdateCommand = FairlightMixerMasterLevelsUpdateCommand;
    FairlightMixerMasterLevelsUpdateCommand.rawName = "FDLv";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMasterLimiterCommand.js
var require_FairlightMixerMasterLimiterCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMasterLimiterCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerMasterLimiterUpdateCommand = exports2.FairlightMixerMasterLimiterCommand = void 0;
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerMasterLimiterCommand = class extends CommandBase_1.WritableCommand {
      serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.limiterEnabled ? 1 : 0, 1);
        buffer.writeInt32BE(this.properties.threshold || 0, 4);
        buffer.writeInt32BE(this.properties.attack || 0, 8);
        buffer.writeInt32BE(this.properties.hold || 0, 12);
        buffer.writeInt32BE(this.properties.release || 0, 16);
        return buffer;
      }
    };
    exports2.FairlightMixerMasterLimiterCommand = FairlightMixerMasterLimiterCommand;
    FairlightMixerMasterLimiterCommand.MaskFlags = {
      limiterEnabled: 1 << 0,
      threshold: 1 << 1,
      attack: 1 << 2,
      hold: 1 << 3,
      release: 1 << 4
    };
    FairlightMixerMasterLimiterCommand.rawName = "CMLP";
    var FairlightMixerMasterLimiterUpdateCommand = class _FairlightMixerMasterLimiterUpdateCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          limiterEnabled: rawCommand.readUInt8(0) > 0,
          threshold: rawCommand.readInt32BE(4),
          attack: rawCommand.readInt32BE(8),
          hold: rawCommand.readInt32BE(12),
          release: rawCommand.readInt32BE(16)
        };
        return new _FairlightMixerMasterLimiterUpdateCommand(properties);
      }
      applyToState(state) {
        if (!state.fairlight) {
          throw new state_1.InvalidIdError("Fairlight");
        }
        if (!state.fairlight.master) {
          throw new state_1.InvalidIdError("Fairlight.Master");
        }
        if (!state.fairlight.master.dynamics) {
          state.fairlight.master.dynamics = {};
        }
        state.fairlight.master.dynamics.limiter = this.properties;
        return `fairlight.master.dynamics.limiter`;
      }
    };
    exports2.FairlightMixerMasterLimiterUpdateCommand = FairlightMixerMasterLimiterUpdateCommand;
    FairlightMixerMasterLimiterUpdateCommand.rawName = "AMLP";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMasterPropertiesCommand.js
var require_FairlightMixerMasterPropertiesCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMasterPropertiesCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerMasterPropertiesUpdateCommand = exports2.FairlightMixerMasterPropertiesCommand = void 0;
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerMasterPropertiesCommand = class extends CommandBase_1.WritableCommand {
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.audioFollowVideo ? 1 : 0, 1);
        return buffer;
      }
    };
    exports2.FairlightMixerMasterPropertiesCommand = FairlightMixerMasterPropertiesCommand;
    FairlightMixerMasterPropertiesCommand.MaskFlags = {
      audioFollowVideo: 1 << 0
    };
    FairlightMixerMasterPropertiesCommand.rawName = "CMPP";
    var FairlightMixerMasterPropertiesUpdateCommand = class _FairlightMixerMasterPropertiesUpdateCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const audioFollowVideo = rawCommand.readUInt8(0) > 0;
        return new _FairlightMixerMasterPropertiesUpdateCommand({ audioFollowVideo });
      }
      applyToState(state) {
        if (!state.fairlight) {
          throw new state_1.InvalidIdError("Fairlight");
        }
        state.fairlight.audioFollowVideoCrossfadeTransitionEnabled = this.properties.audioFollowVideo;
        return `fairlight.audioFollowVideoCrossfadeTransitionEnabled`;
      }
    };
    exports2.FairlightMixerMasterPropertiesUpdateCommand = FairlightMixerMasterPropertiesUpdateCommand;
    FairlightMixerMasterPropertiesUpdateCommand.rawName = "FMPP";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMonitorCommand.js
var require_FairlightMixerMonitorCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMonitorCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerMonitorUpdateCommand = exports2.FairlightMixerMonitorCommand = void 0;
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerMonitorCommand = class extends CommandBase_1.WritableCommand {
      serialize() {
        const buffer = Buffer.alloc(36);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeInt32BE(this.properties.gain || 0, 4);
        buffer.writeInt32BE(this.properties.inputMasterGain || 0, 8);
        buffer.writeUInt8(this.properties.inputMasterMuted ? 0 : 1, 12);
        buffer.writeInt32BE(this.properties.inputTalkbackGain || 0, 16);
        buffer.writeUInt8(this.properties.inputTalkbackMuted ? 0 : 1, 20);
        buffer.writeInt32BE(this.properties.inputSidetoneGain || 0, 32);
        return buffer;
      }
    };
    exports2.FairlightMixerMonitorCommand = FairlightMixerMonitorCommand;
    FairlightMixerMonitorCommand.MaskFlags = {
      gain: 1 << 0,
      inputMasterGain: 1 << 1,
      inputMasterMuted: 1 << 2,
      inputTalkbackGain: 1 << 3,
      inputTalkbackMuted: 1 << 4,
      inputSidetoneGain: 1 << 7
    };
    FairlightMixerMonitorCommand.rawName = "CFMH";
    var FairlightMixerMonitorUpdateCommand = class _FairlightMixerMonitorUpdateCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          gain: rawCommand.readInt32BE(0),
          inputMasterGain: rawCommand.readInt32BE(4),
          inputMasterMuted: rawCommand.readUInt8(8) === 0,
          inputTalkbackGain: rawCommand.readInt32BE(12),
          inputTalkbackMuted: rawCommand.readUInt8(16) === 0,
          inputSidetoneGain: rawCommand.readInt32BE(28)
        };
        return new _FairlightMixerMonitorUpdateCommand(properties);
      }
      applyToState(state) {
        if (!state.fairlight) {
          throw new state_1.InvalidIdError("Fairlight");
        }
        state.fairlight.monitor = {
          ...this.properties
        };
        return `fairlight.monitor`;
      }
    };
    exports2.FairlightMixerMonitorUpdateCommand = FairlightMixerMonitorUpdateCommand;
    FairlightMixerMonitorUpdateCommand.rawName = "FMHP";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMonitorSoloCommand.js
var require_FairlightMixerMonitorSoloCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerMonitorSoloCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerMonitorSoloUpdateCommand = exports2.FairlightMixerMonitorSoloCommand = void 0;
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerMonitorSoloCommand = class extends CommandBase_1.WritableCommand {
      serialize() {
        const buffer = Buffer.alloc(24);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.solo ? 1 : 0, 1);
        buffer.writeUInt16BE(this.properties.index ?? 0, 8);
        if (this.properties.source)
          buffer.writeBigInt64BE(BigInt(this.properties.source), 16);
        return buffer;
      }
    };
    exports2.FairlightMixerMonitorSoloCommand = FairlightMixerMonitorSoloCommand;
    FairlightMixerMonitorSoloCommand.MaskFlags = {
      solo: 1 << 0,
      index: 1 << 1,
      source: 1 << 1
      // Intentional duplicate
    };
    FairlightMixerMonitorSoloCommand.rawName = "CFMS";
    var FairlightMixerMonitorSoloUpdateCommand = class _FairlightMixerMonitorSoloUpdateCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          solo: rawCommand.readUint8(0) === 1,
          index: rawCommand.readUInt16BE(8),
          source: rawCommand.readBigInt64BE(16).toString()
        };
        return new _FairlightMixerMonitorSoloUpdateCommand(properties);
      }
      applyToState(state) {
        if (!state.fairlight) {
          throw new state_1.InvalidIdError("Fairlight");
        }
        state.fairlight.solo = { ...this.properties };
        return `fairlight.solo`;
      }
    };
    exports2.FairlightMixerMonitorSoloUpdateCommand = FairlightMixerMonitorSoloUpdateCommand;
    FairlightMixerMonitorSoloUpdateCommand.rawName = "FAMS";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerResetPeakLevelsCommand.js
var require_FairlightMixerResetPeakLevelsCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerResetPeakLevelsCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerResetPeakLevelsCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerResetPeakLevelsCommand = class extends CommandBase_1.BasicWritableCommand {
      serialize() {
        const buffer = Buffer.alloc(4);
        let val = 0;
        if (this.properties.all) {
          val |= 1 << 0;
          buffer.writeUInt8(1, 1);
        }
        if (this.properties.master) {
          val |= 1 << 1;
          buffer.writeUInt8(4, 3);
        }
        buffer.writeUInt8(val, 0);
        return buffer;
      }
    };
    exports2.FairlightMixerResetPeakLevelsCommand = FairlightMixerResetPeakLevelsCommand;
    FairlightMixerResetPeakLevelsCommand.rawName = "RFLP";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSendLevelsCommand.js
var require_FairlightMixerSendLevelsCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSendLevelsCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerSendLevelsCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerSendLevelsCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(sendLevels) {
        super({ sendLevels });
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.properties.sendLevels ? 1 : 0, 0);
        return buffer;
      }
    };
    exports2.FairlightMixerSendLevelsCommand = FairlightMixerSendLevelsCommand;
    FairlightMixerSendLevelsCommand.rawName = "SFLN";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceCommand.js
var require_FairlightMixerSourceCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerSourceUpdateCommand = exports2.FairlightMixerSourceCommand = exports2.FairlightMixerSourceDeleteCommand = void 0;
    var state_1 = require_state();
    var Util = require_atemUtil();
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerSourceDeleteCommand = class _FairlightMixerSourceDeleteCommand extends CommandBase_1.DeserializedCommand {
      constructor(index, source) {
        super({});
        this.index = index;
        this.source = source;
      }
      static deserialize(rawCommand) {
        const index = rawCommand.readUInt16BE(0);
        const source = rawCommand.readBigInt64BE(8);
        return new _FairlightMixerSourceDeleteCommand(index, source);
      }
      applyToState(state) {
        if (!state.fairlight) {
          throw new state_1.InvalidIdError("Fairlight");
        }
        const input = state.fairlight.inputs[this.index];
        if (input) {
          delete input.sources[this.source.toString()];
          return `fairlight.inputs.${this.index}.sources.${this.source}`;
        }
        return [];
      }
    };
    exports2.FairlightMixerSourceDeleteCommand = FairlightMixerSourceDeleteCommand;
    FairlightMixerSourceDeleteCommand.rawName = "FASD";
    var FairlightMixerSourceCommand = class extends CommandBase_1.WritableCommand {
      constructor(index, source) {
        super();
        this.index = index;
        this.source = source;
      }
      serialize() {
        const buffer = Buffer.alloc(48);
        buffer.writeUInt16BE(this.flag, 0);
        buffer.writeUInt16BE(this.index, 2);
        buffer.writeBigInt64BE(this.source, 8);
        buffer.writeUInt8(this.properties.framesDelay || 0, 16);
        buffer.writeInt32BE(this.properties.gain || 0, 20);
        buffer.writeInt16BE(this.properties.stereoSimulation || 0, 24);
        buffer.writeUInt8(this.properties.equalizerEnabled ? 1 : 0, 26);
        buffer.writeInt32BE(this.properties.equalizerGain || 0, 28);
        buffer.writeInt32BE(this.properties.makeUpGain || 0, 32);
        buffer.writeInt16BE(this.properties.balance || 0, 36);
        buffer.writeInt32BE(this.properties.faderGain || 0, 40);
        buffer.writeUInt8(this.properties.mixOption || 0, 44);
        return buffer;
      }
    };
    exports2.FairlightMixerSourceCommand = FairlightMixerSourceCommand;
    FairlightMixerSourceCommand.MaskFlags = {
      framesDelay: 1 << 0,
      gain: 1 << 1,
      stereoSimulation: 1 << 2,
      equalizerEnabled: 1 << 3,
      equalizerGain: 1 << 4,
      makeUpGain: 1 << 5,
      balance: 1 << 6,
      faderGain: 1 << 7,
      mixOption: 1 << 8
    };
    FairlightMixerSourceCommand.rawName = "CFSP";
    var FairlightMixerSourceUpdateCommand = class _FairlightMixerSourceUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(index, source, props) {
        super(props);
        this.index = index;
        this.source = source;
      }
      static deserialize(rawCommand) {
        const index = rawCommand.readUInt16BE(0);
        const source = rawCommand.readBigInt64BE(8);
        const properties = {
          sourceType: rawCommand.readUInt8(16),
          maxFramesDelay: rawCommand.readUInt8(17),
          framesDelay: rawCommand.readUInt8(18),
          gain: rawCommand.readInt32BE(20),
          hasStereoSimulation: rawCommand.readUInt8(24) > 0,
          stereoSimulation: rawCommand.readInt16BE(26),
          bandCount: rawCommand.readUInt8(28),
          equalizerEnabled: rawCommand.readUInt8(29) > 0,
          equalizerGain: rawCommand.readInt32BE(32),
          makeUpGain: rawCommand.readInt32BE(36),
          balance: rawCommand.readInt16BE(40),
          faderGain: rawCommand.readInt32BE(44),
          supportedMixOptions: Util.getComponents(rawCommand.readUInt8(48)),
          mixOption: rawCommand.readUInt8(49)
        };
        return new _FairlightMixerSourceUpdateCommand(index, source, properties);
      }
      applyToState(state) {
        if (!state.fairlight) {
          throw new state_1.InvalidIdError("Fairlight");
        }
        const input = state.fairlight.inputs[this.index] || { sources: {} };
        state.fairlight.inputs[this.index] = input;
        const sourceIdStr = this.source.toString();
        const oldSource = input.sources[sourceIdStr];
        input.sources[sourceIdStr] = {
          ...oldSource,
          equalizer: {
            ...oldSource?.equalizer,
            enabled: this.properties.equalizerEnabled,
            gain: this.properties.equalizerGain,
            bands: oldSource?.equalizer?.bands ?? new Array(this.properties.bandCount).fill(void 0)
          },
          dynamics: {
            ...oldSource?.dynamics,
            makeUpGain: this.properties.makeUpGain
          },
          properties: {
            // preserve old props
            ...oldSource ? oldSource.properties : {},
            ...Util.omit(this.properties, "bandCount", "equalizerEnabled", "equalizerGain", "makeUpGain")
          }
        };
        return `fairlight.inputs.${this.index}.sources.${sourceIdStr}.properties`;
      }
    };
    exports2.FairlightMixerSourceUpdateCommand = FairlightMixerSourceUpdateCommand;
    FairlightMixerSourceUpdateCommand.rawName = "FASP";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceCompressorCommand.js
var require_FairlightMixerSourceCompressorCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceCompressorCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerSourceCompressorUpdateCommand = exports2.FairlightMixerSourceCompressorCommand = void 0;
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerSourceCompressorCommand = class extends CommandBase_1.WritableCommand {
      constructor(index, source) {
        super();
        this.index = index;
        this.source = source;
      }
      serialize() {
        const buffer = Buffer.alloc(40);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.index, 2);
        buffer.writeBigInt64BE(this.source, 8);
        buffer.writeUInt8(this.properties.compressorEnabled ? 1 : 0, 16);
        buffer.writeInt32BE(this.properties.threshold || 0, 20);
        buffer.writeInt16BE(this.properties.ratio || 0, 24);
        buffer.writeInt32BE(this.properties.attack || 0, 28);
        buffer.writeInt32BE(this.properties.hold || 0, 32);
        buffer.writeInt32BE(this.properties.release || 0, 36);
        return buffer;
      }
    };
    exports2.FairlightMixerSourceCompressorCommand = FairlightMixerSourceCompressorCommand;
    FairlightMixerSourceCompressorCommand.MaskFlags = {
      compressorEnabled: 1 << 0,
      threshold: 1 << 1,
      ratio: 1 << 2,
      attack: 1 << 3,
      hold: 1 << 4,
      release: 1 << 5
    };
    FairlightMixerSourceCompressorCommand.rawName = "CICP";
    var FairlightMixerSourceCompressorUpdateCommand = class _FairlightMixerSourceCompressorUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(index, source, props) {
        super(props);
        this.index = index;
        this.source = source;
      }
      static deserialize(rawCommand) {
        const index = rawCommand.readUInt16BE(0);
        const source = rawCommand.readBigInt64BE(8);
        const properties = {
          compressorEnabled: rawCommand.readUInt8(16) > 0,
          threshold: rawCommand.readInt32BE(20),
          ratio: rawCommand.readInt16BE(24),
          attack: rawCommand.readInt32BE(28),
          hold: rawCommand.readInt32BE(32),
          release: rawCommand.readInt32BE(36)
        };
        return new _FairlightMixerSourceCompressorUpdateCommand(index, source, properties);
      }
      applyToState(state) {
        if (!state.fairlight) {
          throw new state_1.InvalidIdError("Fairlight");
        }
        const input = state.fairlight.inputs[this.index];
        if (!input) {
          throw new state_1.InvalidIdError("Fairlight.Inputs", this.index);
        }
        const sourceIdStr = this.source.toString();
        const source = input.sources[sourceIdStr] || {};
        input.sources[sourceIdStr] = source;
        if (!source.dynamics) {
          source.dynamics = {};
        }
        source.dynamics.compressor = this.properties;
        return `fairlight.inputs.${this.index}.sources.${sourceIdStr}.dynamics.compressor`;
      }
    };
    exports2.FairlightMixerSourceCompressorUpdateCommand = FairlightMixerSourceCompressorUpdateCommand;
    FairlightMixerSourceCompressorUpdateCommand.rawName = "AICP";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceDynamicsResetCommand.js
var require_FairlightMixerSourceDynamicsResetCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceDynamicsResetCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerSourceDynamicsResetCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerSourceDynamicsResetCommand = class extends CommandBase_1.WritableCommand {
      constructor(index, source) {
        super();
        this.index = index;
        this.source = source;
      }
      serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt16BE(this.index, 0);
        buffer.writeBigInt64BE(this.source, 8);
        let val = 0;
        if (this.properties.dynamics) {
          val |= 1 << 0;
        }
        if (this.properties.expander) {
          val |= 1 << 1;
        }
        if (this.properties.compressor) {
          val |= 1 << 2;
        }
        if (this.properties.limiter) {
          val |= 1 << 3;
        }
        buffer.writeUInt8(val, 17);
        return buffer;
      }
    };
    exports2.FairlightMixerSourceDynamicsResetCommand = FairlightMixerSourceDynamicsResetCommand;
    FairlightMixerSourceDynamicsResetCommand.rawName = "RICD";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceEqualizerBandCommand.js
var require_FairlightMixerSourceEqualizerBandCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceEqualizerBandCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerSourceEqualizerBandUpdateCommand = exports2.FairlightMixerSourceEqualizerBandCommand = void 0;
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var AtemUtil = require_atemUtil();
    var FairlightMixerSourceEqualizerBandCommand = class extends CommandBase_1.WritableCommand {
      constructor(index, source, band) {
        super();
        this.index = index;
        this.source = source;
        this.band = band;
      }
      serialize() {
        const buffer = Buffer.alloc(32);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.index, 2);
        buffer.writeBigInt64BE(this.source, 8);
        buffer.writeUInt8(this.band, 16);
        buffer.writeUInt8(this.properties.bandEnabled ? 1 : 0, 17);
        buffer.writeUInt8(this.properties.shape || 0, 18);
        buffer.writeUInt8(this.properties.frequencyRange || 0, 19);
        buffer.writeUInt32BE(this.properties.frequency || 0, 20);
        buffer.writeInt32BE(this.properties.gain || 0, 24);
        buffer.writeInt16BE(this.properties.qFactor || 0, 28);
        return buffer;
      }
    };
    exports2.FairlightMixerSourceEqualizerBandCommand = FairlightMixerSourceEqualizerBandCommand;
    FairlightMixerSourceEqualizerBandCommand.MaskFlags = {
      bandEnabled: 1 << 0,
      shape: 1 << 1,
      frequencyRange: 1 << 2,
      frequency: 1 << 3,
      gain: 1 << 4,
      qFactor: 1 << 5
    };
    FairlightMixerSourceEqualizerBandCommand.rawName = "CEBP";
    var FairlightMixerSourceEqualizerBandUpdateCommand = class _FairlightMixerSourceEqualizerBandUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(index, source, band, properties) {
        super(properties);
        this.index = index;
        this.source = source;
        this.band = band;
      }
      static deserialize(rawCommand) {
        const index = rawCommand.readUInt16BE(0);
        const source = rawCommand.readBigInt64BE(8);
        const band = rawCommand.readUInt8(16);
        const properties = {
          bandEnabled: rawCommand.readUInt8(17) > 0,
          supportedShapes: AtemUtil.getComponents(rawCommand.readUInt8(18)),
          shape: rawCommand.readUInt8(19),
          supportedFrequencyRanges: AtemUtil.getComponents(rawCommand.readUInt8(20)),
          frequencyRange: rawCommand.readUInt8(21),
          frequency: rawCommand.readUInt32BE(24),
          gain: rawCommand.readInt32BE(28),
          qFactor: rawCommand.readInt16BE(32)
        };
        return new _FairlightMixerSourceEqualizerBandUpdateCommand(index, source, band, properties);
      }
      applyToState(state) {
        if (!state.fairlight) {
          throw new state_1.InvalidIdError("Fairlight");
        }
        const input = state.fairlight.inputs[this.index];
        if (!input) {
          throw new state_1.InvalidIdError("Fairlight.Inputs", this.index);
        }
        const sourceIdStr = this.source.toString();
        const source = input.sources[sourceIdStr] || {};
        input.sources[sourceIdStr] = source;
        if (!source.equalizer) {
          throw new state_1.InvalidIdError("Fairlight.Inputs.Source.Equalizer", this.index, sourceIdStr);
        }
        if (this.band >= source.equalizer.bands.length) {
          throw new state_1.InvalidIdError("Fairlight.Master.Equalizer", this.band);
        }
        source.equalizer.bands[this.band] = this.properties;
        return `fairlight.inputs.${this.index}.sources.${sourceIdStr}.equalizer.bands.${this.band}`;
      }
    };
    exports2.FairlightMixerSourceEqualizerBandUpdateCommand = FairlightMixerSourceEqualizerBandUpdateCommand;
    FairlightMixerSourceEqualizerBandUpdateCommand.rawName = "AEBP";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceEqualizerResetCommand.js
var require_FairlightMixerSourceEqualizerResetCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceEqualizerResetCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerSourceEqualizerResetCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerSourceEqualizerResetCommand = class extends CommandBase_1.WritableCommand {
      constructor(index, source) {
        super();
        this.index = index;
        this.source = source;
      }
      serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.index, 2);
        buffer.writeBigInt64BE(this.source, 8);
        buffer.writeUInt8(this.properties.equalizer ? 1 : 0, 16);
        buffer.writeUInt8(this.properties.band || 0, 17);
        return buffer;
      }
    };
    exports2.FairlightMixerSourceEqualizerResetCommand = FairlightMixerSourceEqualizerResetCommand;
    FairlightMixerSourceEqualizerResetCommand.MaskFlags = {
      equalizer: 1 << 0,
      band: 1 << 1
    };
    FairlightMixerSourceEqualizerResetCommand.rawName = "RICE";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceExpanderCommand.js
var require_FairlightMixerSourceExpanderCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceExpanderCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerSourceExpanderUpdateCommand = exports2.FairlightMixerSourceExpanderCommand = void 0;
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerSourceExpanderCommand = class extends CommandBase_1.WritableCommand {
      constructor(index, source) {
        super();
        this.index = index;
        this.source = source;
      }
      serialize() {
        const buffer = Buffer.alloc(40);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.index, 2);
        buffer.writeBigInt64BE(this.source, 8);
        buffer.writeUInt8(this.properties.expanderEnabled ? 1 : 0, 16);
        buffer.writeUInt8(this.properties.gateEnabled ? 1 : 0, 17);
        buffer.writeInt32BE(this.properties.threshold || 0, 20);
        buffer.writeInt16BE(this.properties.range || 0, 24);
        buffer.writeInt16BE(this.properties.ratio || 0, 26);
        buffer.writeInt32BE(this.properties.attack || 0, 28);
        buffer.writeInt32BE(this.properties.hold || 0, 32);
        buffer.writeInt32BE(this.properties.release || 0, 36);
        return buffer;
      }
    };
    exports2.FairlightMixerSourceExpanderCommand = FairlightMixerSourceExpanderCommand;
    FairlightMixerSourceExpanderCommand.MaskFlags = {
      expanderEnabled: 1 << 0,
      gateEnabled: 1 << 1,
      threshold: 1 << 2,
      range: 1 << 3,
      ratio: 1 << 4,
      attack: 1 << 5,
      hold: 1 << 6,
      release: 1 << 7
    };
    FairlightMixerSourceExpanderCommand.rawName = "CIXP";
    var FairlightMixerSourceExpanderUpdateCommand = class _FairlightMixerSourceExpanderUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(index, source, props) {
        super(props);
        this.index = index;
        this.source = source;
      }
      static deserialize(rawCommand) {
        const index = rawCommand.readUInt16BE(0);
        const source = rawCommand.readBigInt64BE(8);
        const properties = {
          expanderEnabled: rawCommand.readUInt8(16) > 0,
          gateEnabled: rawCommand.readUInt8(17) > 0,
          threshold: rawCommand.readInt32BE(20),
          range: rawCommand.readInt16BE(24),
          ratio: rawCommand.readInt16BE(26),
          attack: rawCommand.readInt32BE(28),
          hold: rawCommand.readInt32BE(32),
          release: rawCommand.readInt32BE(36)
        };
        return new _FairlightMixerSourceExpanderUpdateCommand(index, source, properties);
      }
      applyToState(state) {
        if (!state.fairlight) {
          throw new state_1.InvalidIdError("Fairlight");
        }
        const input = state.fairlight.inputs[this.index];
        if (!input) {
          throw new state_1.InvalidIdError("Fairlight.Inputs", this.index);
        }
        const sourceIdStr = this.source.toString();
        const source = input.sources[sourceIdStr] || {};
        input.sources[sourceIdStr] = source;
        if (!source.dynamics) {
          source.dynamics = {};
        }
        source.dynamics.expander = this.properties;
        return `fairlight.inputs.${this.index}.sources.${sourceIdStr}.dynamics.expander`;
      }
    };
    exports2.FairlightMixerSourceExpanderUpdateCommand = FairlightMixerSourceExpanderUpdateCommand;
    FairlightMixerSourceExpanderUpdateCommand.rawName = "AIXP";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceLevelsCommand.js
var require_FairlightMixerSourceLevelsCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceLevelsCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerSourceLevelsUpdateCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerSourceLevelsUpdateCommand = class _FairlightMixerSourceLevelsUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(index, source, props) {
        super(props);
        this.index = index;
        this.source = source;
      }
      static deserialize(rawCommand) {
        const source = rawCommand.readBigInt64BE(0);
        const index = rawCommand.readUInt16BE(8);
        const properties = {
          inputLeftLevel: rawCommand.readInt16BE(10),
          inputRightLevel: rawCommand.readInt16BE(12),
          inputLeftPeak: rawCommand.readInt16BE(14),
          inputRightPeak: rawCommand.readInt16BE(16),
          expanderGainReduction: rawCommand.readInt16BE(18),
          compressorGainReduction: rawCommand.readInt16BE(20),
          limiterGainReduction: rawCommand.readInt16BE(22),
          outputLeftLevel: rawCommand.readInt16BE(24),
          outputRightLevel: rawCommand.readInt16BE(26),
          outputLeftPeak: rawCommand.readInt16BE(28),
          outputRightPeak: rawCommand.readInt16BE(30),
          leftLevel: rawCommand.readInt16BE(32),
          rightLevel: rawCommand.readInt16BE(34),
          leftPeak: rawCommand.readInt16BE(36),
          rightPeak: rawCommand.readInt16BE(38)
        };
        return new _FairlightMixerSourceLevelsUpdateCommand(index, source, properties);
      }
      applyToState() {
        return [];
      }
    };
    exports2.FairlightMixerSourceLevelsUpdateCommand = FairlightMixerSourceLevelsUpdateCommand;
    FairlightMixerSourceLevelsUpdateCommand.rawName = "FMLv";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceLimiterCommand.js
var require_FairlightMixerSourceLimiterCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceLimiterCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerSourceLimiterUpdateCommand = exports2.FairlightMixerSourceLimiterCommand = void 0;
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerSourceLimiterCommand = class extends CommandBase_1.WritableCommand {
      constructor(index, source) {
        super();
        this.index = index;
        this.source = source;
      }
      serialize() {
        const buffer = Buffer.alloc(36);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.index, 2);
        buffer.writeBigInt64BE(this.source, 8);
        buffer.writeUInt8(this.properties.limiterEnabled ? 1 : 0, 16);
        buffer.writeInt32BE(this.properties.threshold || 0, 20);
        buffer.writeInt32BE(this.properties.attack || 0, 24);
        buffer.writeInt32BE(this.properties.hold || 0, 28);
        buffer.writeInt32BE(this.properties.release || 0, 32);
        return buffer;
      }
    };
    exports2.FairlightMixerSourceLimiterCommand = FairlightMixerSourceLimiterCommand;
    FairlightMixerSourceLimiterCommand.MaskFlags = {
      limiterEnabled: 1 << 0,
      threshold: 1 << 1,
      attack: 1 << 2,
      hold: 1 << 3,
      release: 1 << 4
    };
    FairlightMixerSourceLimiterCommand.rawName = "CILP";
    var FairlightMixerSourceLimiterUpdateCommand = class _FairlightMixerSourceLimiterUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(index, source, props) {
        super(props);
        this.index = index;
        this.source = source;
      }
      static deserialize(rawCommand) {
        const index = rawCommand.readUInt16BE(0);
        const source = rawCommand.readBigInt64BE(8);
        const properties = {
          limiterEnabled: rawCommand.readUInt8(16) > 0,
          threshold: rawCommand.readInt32BE(20),
          attack: rawCommand.readInt32BE(24),
          hold: rawCommand.readInt32BE(28),
          release: rawCommand.readInt32BE(32)
        };
        return new _FairlightMixerSourceLimiterUpdateCommand(index, source, properties);
      }
      applyToState(state) {
        if (!state.fairlight) {
          throw new state_1.InvalidIdError("Fairlight");
        }
        const input = state.fairlight.inputs[this.index];
        if (!input) {
          throw new state_1.InvalidIdError("Fairlight.Inputs", this.index);
        }
        const sourceIdStr = this.source.toString();
        const source = input.sources[sourceIdStr] || {};
        input.sources[sourceIdStr] = source;
        if (!source.dynamics) {
          source.dynamics = {};
        }
        source.dynamics.limiter = this.properties;
        return `fairlight.inputs.${this.index}.sources.${sourceIdStr}.dynamics.limiter`;
      }
    };
    exports2.FairlightMixerSourceLimiterUpdateCommand = FairlightMixerSourceLimiterUpdateCommand;
    FairlightMixerSourceLimiterUpdateCommand.rawName = "AILP";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceResetPeakLevelsCommand.js
var require_FairlightMixerSourceResetPeakLevelsCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/FairlightMixerSourceResetPeakLevelsCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FairlightMixerSourceResetPeakLevelsCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var FairlightMixerSourceResetPeakLevelsCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(index, source, properties) {
        super(properties);
        this.index = index;
        this.source = source;
      }
      serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt16BE(this.index, 0);
        buffer.writeBigInt64BE(this.source, 8);
        let val = 0;
        if (this.properties.dynamicsInput) {
          val |= 1 << 0;
        }
        if (this.properties.dynamicsOutput) {
          val |= 1 << 1;
        }
        if (this.properties.output) {
          val |= 1 << 2;
        }
        buffer.writeUInt8(val, 17);
        return buffer;
      }
    };
    exports2.FairlightMixerSourceResetPeakLevelsCommand = FairlightMixerSourceResetPeakLevelsCommand;
    FairlightMixerSourceResetPeakLevelsCommand.rawName = "RFIP";
  }
});

// node_modules/atem-connection/dist/commands/Fairlight/index.js
var require_Fairlight = __commonJS({
  "node_modules/atem-connection/dist/commands/Fairlight/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_AudioRouting(), exports2);
    tslib_1.__exportStar(require_FairlightMixerInputCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerMasterCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerMasterCompressorCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerMasterDynamicsResetCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerMasterEqualizerBandCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerMasterEqualizerResetCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerMasterLevelsCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerMasterLimiterCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerMasterPropertiesCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerMonitorCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerMonitorSoloCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerResetPeakLevelsCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerSendLevelsCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerSourceCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerSourceCompressorCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerSourceDynamicsResetCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerSourceEqualizerBandCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerSourceEqualizerResetCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerSourceExpanderCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerSourceLevelsCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerSourceLimiterCommand(), exports2);
    tslib_1.__exportStar(require_FairlightMixerSourceResetPeakLevelsCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/Inputs/InputPropertiesCommand.js
var require_InputPropertiesCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Inputs/InputPropertiesCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InputPropertiesUpdateCommand = exports2.InputPropertiesCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var Util = require_atemUtil();
    var InputPropertiesCommand = class extends CommandBase_1.WritableCommand {
      constructor(inputId) {
        super();
        this.inputId = inputId;
      }
      serialize() {
        const buffer = Buffer.alloc(32);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.inputId, 2);
        buffer.write(this.properties.longName || "", 4);
        buffer.write(this.properties.shortName || "", 24);
        buffer.writeUInt16BE(this.properties.externalPortType || 0, 28);
        return buffer;
      }
    };
    exports2.InputPropertiesCommand = InputPropertiesCommand;
    InputPropertiesCommand.MaskFlags = {
      longName: 1 << 0,
      shortName: 1 << 1,
      externalPortType: 1 << 2
    };
    InputPropertiesCommand.rawName = "CInL";
    var InputPropertiesUpdateCommand = class _InputPropertiesUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(inputId, properties) {
        super(properties);
        this.inputId = inputId;
      }
      static deserialize(rawCommand) {
        const inputId = rawCommand.readUInt16BE(0);
        const properties = {
          inputId: rawCommand.readUInt16BE(0),
          longName: Util.bufToNullTerminatedString(rawCommand, 2, 20),
          shortName: Util.bufToNullTerminatedString(rawCommand, 22, 4),
          areNamesDefault: rawCommand.readUInt8(26) === 1,
          externalPorts: Util.getComponents(rawCommand.readUInt16BE(28)),
          externalPortType: rawCommand.readUInt16BE(30),
          internalPortType: rawCommand.readUInt8(32),
          sourceAvailability: rawCommand.readUInt8(34),
          meAvailability: rawCommand.readUInt8(35)
        };
        return new _InputPropertiesUpdateCommand(inputId, properties);
      }
      applyToState(state) {
        state.inputs[this.inputId] = {
          ...this.properties
        };
        return `inputs.${this.inputId}`;
      }
    };
    exports2.InputPropertiesUpdateCommand = InputPropertiesUpdateCommand;
    InputPropertiesUpdateCommand.rawName = "InPr";
  }
});

// node_modules/atem-connection/dist/commands/Inputs/index.js
var require_Inputs = __commonJS({
  "node_modules/atem-connection/dist/commands/Inputs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_InputPropertiesCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/Macro/MacroActionCommand.js
var require_MacroActionCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Macro/MacroActionCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MacroActionCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var enums_1 = require_enums();
    var MacroActionCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(index, action) {
        super({ action });
        this.index = index;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.properties.action, 2);
        switch (this.properties.action) {
          case enums_1.MacroAction.Run:
          case enums_1.MacroAction.Delete:
            buffer.writeUInt16BE(this.index, 0);
            break;
          case enums_1.MacroAction.Stop:
          case enums_1.MacroAction.StopRecord:
          case enums_1.MacroAction.InsertUserWait:
          case enums_1.MacroAction.Continue:
            buffer.writeUInt16BE(65535, 0);
            break;
          default:
            break;
        }
        return buffer;
      }
    };
    exports2.MacroActionCommand = MacroActionCommand;
    MacroActionCommand.rawName = "MAct";
  }
});

// node_modules/atem-connection/dist/commands/Macro/MacroAddTimedPauseCommand.js
var require_MacroAddTimedPauseCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Macro/MacroAddTimedPauseCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MacroAddTimedPauseCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var MacroAddTimedPauseCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(frames) {
        super({ frames });
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt16BE(this.properties.frames, 2);
        return buffer;
      }
    };
    exports2.MacroAddTimedPauseCommand = MacroAddTimedPauseCommand;
    MacroAddTimedPauseCommand.rawName = "MSlp";
  }
});

// node_modules/atem-connection/dist/commands/Macro/MacroPropertiesCommand.js
var require_MacroPropertiesCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Macro/MacroPropertiesCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MacroPropertiesCommand = exports2.MacroPropertiesUpdateCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var Util = require_atemUtil();
    var MacroPropertiesUpdateCommand = class _MacroPropertiesUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(macroIndexID, properties) {
        super(properties);
        this.macroIndex = macroIndexID;
      }
      static deserialize(rawCommand) {
        const macroIndexID = rawCommand.readUInt16BE(0);
        const nameLen = rawCommand.readUInt16BE(4);
        const descLen = rawCommand.readUInt16BE(6);
        const properties = {
          isUsed: rawCommand.readUInt8(2) != 0,
          hasUnsupportedOps: rawCommand.readUInt8(3) != 0,
          name: "",
          description: ""
        };
        if (nameLen > 0) {
          properties.name = Util.bufToNullTerminatedString(rawCommand, 8, nameLen);
        }
        if (descLen > 0) {
          properties.description = Util.bufToNullTerminatedString(rawCommand, 8 + nameLen, descLen);
        }
        return new _MacroPropertiesUpdateCommand(macroIndexID, properties);
      }
      applyToState(state) {
        state.macro.macroProperties[this.macroIndex] = this.properties;
        return `macro.macroProperties.${this.macroIndex}`;
      }
    };
    exports2.MacroPropertiesUpdateCommand = MacroPropertiesUpdateCommand;
    MacroPropertiesUpdateCommand.rawName = "MPrp";
    var MacroPropertiesCommand = class extends CommandBase_1.WritableCommand {
      constructor(macroIndex) {
        super();
        this.macroIndex = macroIndex;
      }
      serialize() {
        const name = this.properties.name || "";
        const description = this.properties.description || "";
        const buffer = Buffer.alloc(Util.padToMultiple(8 + name.length + description.length, 4));
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt16BE(this.macroIndex, 2);
        buffer.writeUInt16BE(name.length, 4);
        buffer.writeUInt16BE(description.length, 6);
        buffer.write(name, 8, "utf8");
        buffer.write(description, 8 + name.length, "utf8");
        return buffer;
      }
    };
    exports2.MacroPropertiesCommand = MacroPropertiesCommand;
    MacroPropertiesCommand.MaskFlags = {
      name: 1 << 0,
      description: 1 << 1
    };
    MacroPropertiesCommand.rawName = "CMPr";
  }
});

// node_modules/atem-connection/dist/commands/Macro/MacroRecordCommand.js
var require_MacroRecordCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Macro/MacroRecordCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MacroRecordCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var __1 = require_dist3();
    var MacroRecordCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(index, name, description) {
        super({ name, description });
        this.index = index;
      }
      serialize() {
        const name = this.properties.name || "";
        const description = this.properties.description || "";
        const buffer = Buffer.alloc(__1.Util.padToMultiple(8 + name.length + description.length, 4));
        buffer.writeUInt16BE(this.index, 0);
        buffer.writeUInt16BE(name.length, 2);
        buffer.writeUInt16BE(description.length, 4);
        buffer.write(name, 6, "utf8");
        buffer.write(description, 6 + name.length, "utf8");
        return buffer;
      }
    };
    exports2.MacroRecordCommand = MacroRecordCommand;
    MacroRecordCommand.rawName = "MSRc";
  }
});

// node_modules/atem-connection/dist/commands/Macro/MacroRecordingStatusCommand.js
var require_MacroRecordingStatusCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Macro/MacroRecordingStatusCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MacroRecordingStatusCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var MacroRecordingStatusCommand = class _MacroRecordingStatusCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          isRecording: rawCommand.readUInt8(0) != 0,
          macroIndex: rawCommand.readUInt16BE(2)
        };
        return new _MacroRecordingStatusCommand(properties);
      }
      applyToState(state) {
        state.macro.macroRecorder = {
          ...state.macro.macroRecorder,
          ...this.properties
        };
        return `macro.macroRecorder`;
      }
    };
    exports2.MacroRecordingStatusCommand = MacroRecordingStatusCommand;
    MacroRecordingStatusCommand.rawName = "MRcS";
  }
});

// node_modules/atem-connection/dist/commands/Macro/MacroRunStatusCommand.js
var require_MacroRunStatusCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Macro/MacroRunStatusCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MacroRunStatusCommand = exports2.MacroRunStatusUpdateCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var MacroRunStatusUpdateCommand = class _MacroRunStatusUpdateCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          isRunning: Boolean(rawCommand.readUInt8(0) & 1 << 0),
          isWaiting: Boolean(rawCommand.readUInt8(0) & 1 << 1),
          loop: rawCommand.readUInt8(1) != 0,
          macroIndex: rawCommand.readUInt16BE(2)
        };
        return new _MacroRunStatusUpdateCommand(properties);
      }
      applyToState(state) {
        state.macro.macroPlayer = this.properties;
        return `macro.macroPlayer`;
      }
    };
    exports2.MacroRunStatusUpdateCommand = MacroRunStatusUpdateCommand;
    MacroRunStatusUpdateCommand.rawName = "MRPr";
    var MacroRunStatusCommand = class extends CommandBase_1.WritableCommand {
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.properties.loop ? 1 : 0, 1);
        return buffer;
      }
    };
    exports2.MacroRunStatusCommand = MacroRunStatusCommand;
    MacroRunStatusCommand.MaskFlags = {
      loop: 1 << 0
    };
    MacroRunStatusCommand.rawName = "MRCP";
  }
});

// node_modules/atem-connection/dist/commands/Macro/index.js
var require_Macro = __commonJS({
  "node_modules/atem-connection/dist/commands/Macro/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_MacroActionCommand(), exports2);
    tslib_1.__exportStar(require_MacroAddTimedPauseCommand(), exports2);
    tslib_1.__exportStar(require_MacroPropertiesCommand(), exports2);
    tslib_1.__exportStar(require_MacroRecordCommand(), exports2);
    tslib_1.__exportStar(require_MacroRecordingStatusCommand(), exports2);
    tslib_1.__exportStar(require_MacroRunStatusCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/Media/MediaPlayerSourceCommand.js
var require_MediaPlayerSourceCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Media/MediaPlayerSourceCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MediaPlayerSourceUpdateCommand = exports2.MediaPlayerSourceCommand = void 0;
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var MediaPlayerSourceCommand = class extends CommandBase_1.WritableCommand {
      constructor(mediaPlayerId) {
        super();
        this.mediaPlayerId = mediaPlayerId;
      }
      serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mediaPlayerId, 1);
        buffer.writeUInt8(this.properties.sourceType || 0, 2);
        buffer.writeUInt8(this.properties.stillIndex || 0, 3);
        buffer.writeUInt8(this.properties.clipIndex || 0, 4);
        return buffer;
      }
    };
    exports2.MediaPlayerSourceCommand = MediaPlayerSourceCommand;
    MediaPlayerSourceCommand.MaskFlags = {
      sourceType: 1 << 0,
      stillIndex: 1 << 1,
      clipIndex: 1 << 2
    };
    MediaPlayerSourceCommand.rawName = "MPSS";
    var MediaPlayerSourceUpdateCommand = class _MediaPlayerSourceUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mediaPlayerId, properties) {
        super(properties);
        this.mediaPlayerId = mediaPlayerId;
      }
      static deserialize(rawCommand) {
        const mediaPlayerId = rawCommand.readUInt8(0);
        const properties = {
          sourceType: rawCommand.readUInt8(1),
          stillIndex: rawCommand.readUInt8(2),
          clipIndex: rawCommand.readUInt8(3)
        };
        return new _MediaPlayerSourceUpdateCommand(mediaPlayerId, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.mediaPlayerId >= state.info.capabilities.mediaPlayers) {
          throw new state_1.InvalidIdError("MediaPlayer", this.mediaPlayerId);
        }
        state.media.players[this.mediaPlayerId] = {
          ...state_1.AtemStateUtil.getMediaPlayer(state, this.mediaPlayerId),
          ...this.properties
        };
        return `media.players.${this.mediaPlayerId}`;
      }
    };
    exports2.MediaPlayerSourceUpdateCommand = MediaPlayerSourceUpdateCommand;
    MediaPlayerSourceUpdateCommand.rawName = "MPCE";
  }
});

// node_modules/atem-connection/dist/commands/Media/MediaPlayerStatusCommand.js
var require_MediaPlayerStatusCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Media/MediaPlayerStatusCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MediaPlayerStatusUpdateCommand = exports2.MediaPlayerStatusCommand = void 0;
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var MediaPlayerStatusCommand = class extends CommandBase_1.WritableCommand {
      constructor(mediaPlayerId) {
        super();
        this.mediaPlayerId = mediaPlayerId;
      }
      serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mediaPlayerId, 1);
        buffer.writeUInt8(this.properties.playing ? 1 : 0, 2);
        buffer.writeUInt8(this.properties.loop ? 1 : 0, 3);
        buffer.writeUInt8(this.properties.atBeginning ? 1 : 0, 4);
        buffer.writeUInt16BE(this.properties.clipFrame || 0, 6);
        return buffer;
      }
    };
    exports2.MediaPlayerStatusCommand = MediaPlayerStatusCommand;
    MediaPlayerStatusCommand.MaskFlags = {
      playing: 1 << 0,
      loop: 1 << 1,
      atBeginning: 1 << 2,
      clipFrame: 1 << 3
    };
    MediaPlayerStatusCommand.rawName = "SCPS";
    var MediaPlayerStatusUpdateCommand = class _MediaPlayerStatusUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mediaPlayerId, properties) {
        super(properties);
        this.mediaPlayerId = mediaPlayerId;
      }
      static deserialize(rawCommand) {
        const mediaPlayerId = rawCommand.readUInt8(0);
        const properties = {
          playing: rawCommand.readUInt8(1) === 1,
          loop: rawCommand.readUInt8(2) === 1,
          atBeginning: rawCommand.readUInt8(3) === 1,
          clipFrame: rawCommand.readUInt8(4) << 8 | rawCommand.readUInt8(5)
        };
        return new _MediaPlayerStatusUpdateCommand(mediaPlayerId, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.mediaPlayerId >= state.info.capabilities.mediaPlayers) {
          throw new state_1.InvalidIdError("MediaPlayer", this.mediaPlayerId);
        }
        state.media.players[this.mediaPlayerId] = {
          ...state_1.AtemStateUtil.getMediaPlayer(state, this.mediaPlayerId),
          ...this.properties
        };
        return `media.players.${this.mediaPlayerId}`;
      }
    };
    exports2.MediaPlayerStatusUpdateCommand = MediaPlayerStatusUpdateCommand;
    MediaPlayerStatusUpdateCommand.rawName = "RCPS";
  }
});

// node_modules/atem-connection/dist/commands/Media/MediaPoolCaptureStillCommand.js
var require_MediaPoolCaptureStillCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Media/MediaPoolCaptureStillCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MediaPoolCaptureStillCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var MediaPoolCaptureStillCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor() {
        super({});
      }
      serialize() {
        return Buffer.alloc(0);
      }
    };
    exports2.MediaPoolCaptureStillCommand = MediaPoolCaptureStillCommand;
    MediaPoolCaptureStillCommand.rawName = "Capt";
  }
});

// node_modules/atem-connection/dist/commands/Media/MediaPoolClearClipCommand.js
var require_MediaPoolClearClipCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Media/MediaPoolClearClipCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MediaPoolClearClipCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var MediaPoolClearClipCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(index) {
        super({ index });
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.properties.index, 0);
        return buffer;
      }
    };
    exports2.MediaPoolClearClipCommand = MediaPoolClearClipCommand;
    MediaPoolClearClipCommand.rawName = "CMPC";
  }
});

// node_modules/atem-connection/dist/commands/Media/MediaPoolClearStillCommand.js
var require_MediaPoolClearStillCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Media/MediaPoolClearStillCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MediaPoolClearStillCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var MediaPoolClearStillCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(index) {
        super({ index });
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.properties.index, 0);
        return buffer;
      }
    };
    exports2.MediaPoolClearStillCommand = MediaPoolClearStillCommand;
    MediaPoolClearStillCommand.rawName = "CSTL";
  }
});

// node_modules/atem-connection/dist/commands/Media/MediaPoolClipDescription.js
var require_MediaPoolClipDescription = __commonJS({
  "node_modules/atem-connection/dist/commands/Media/MediaPoolClipDescription.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MediaPoolClipDescriptionCommand = void 0;
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var Util = require_atemUtil();
    var MediaPoolClipDescriptionCommand = class _MediaPoolClipDescriptionCommand extends CommandBase_1.DeserializedCommand {
      constructor(mediaPool, properties) {
        super(properties);
        this.clipId = mediaPool;
      }
      static deserialize(rawCommand) {
        const mediaPool = rawCommand.readUInt8(0);
        const properties = {
          isUsed: rawCommand.readUInt8(1) === 1,
          name: Util.bufToNullTerminatedString(rawCommand, 2, 64),
          frameCount: rawCommand.readUInt16BE(66)
        };
        return new _MediaPoolClipDescriptionCommand(mediaPool, properties);
      }
      applyToState(state) {
        state.media.clipPool[this.clipId] = {
          ...this.properties,
          frames: state_1.AtemStateUtil.getClip(state, this.clipId).frames
          // TODO - lengthen/shorten array of frames?
        };
        return `media.clipPool.${this.clipId}`;
      }
    };
    exports2.MediaPoolClipDescriptionCommand = MediaPoolClipDescriptionCommand;
    MediaPoolClipDescriptionCommand.rawName = "MPCS";
  }
});

// node_modules/atem-connection/dist/commands/Media/MediaPoolFrameDescription.js
var require_MediaPoolFrameDescription = __commonJS({
  "node_modules/atem-connection/dist/commands/Media/MediaPoolFrameDescription.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MediaPoolFrameDescriptionCommand = void 0;
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var Util = require_atemUtil();
    var MediaPoolFrameDescriptionCommand = class _MediaPoolFrameDescriptionCommand extends CommandBase_1.DeserializedCommand {
      constructor(mediaPool, frameIndex, properties) {
        super(properties);
        this.mediaPool = mediaPool;
        this.frameIndex = frameIndex;
      }
      static deserialize(rawCommand) {
        const mediaPool = rawCommand.readUInt8(0);
        const frameIndex = rawCommand.readUInt16BE(2);
        const properties = {
          isUsed: rawCommand.readUInt8(4) === 1,
          hash: Util.bufToBase64String(rawCommand, 5, 16),
          fileName: Util.bufToNullTerminatedString(rawCommand, 24, rawCommand.readUInt8(23))
        };
        return new _MediaPoolFrameDescriptionCommand(mediaPool, frameIndex, properties);
      }
      applyToState(state) {
        if (this.mediaPool === 0) {
          state.media.stillPool[this.frameIndex] = this.properties;
          return `media.stillPool.${this.frameIndex}`;
        } else if (this.mediaPool < 3) {
          const clipId = this.mediaPool - 1;
          state_1.AtemStateUtil.getClip(state, clipId).frames[this.frameIndex] = this.properties;
          return `media.clipPool.${clipId}.frames.${this.frameIndex}`;
        }
        return [];
      }
    };
    exports2.MediaPoolFrameDescriptionCommand = MediaPoolFrameDescriptionCommand;
    MediaPoolFrameDescriptionCommand.rawName = "MPfe";
  }
});

// node_modules/atem-connection/dist/commands/Media/MediaPoolSetClipCommand.js
var require_MediaPoolSetClipCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Media/MediaPoolSetClipCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MediaPoolSetClipCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var MediaPoolSetClipCommand = class extends CommandBase_1.BasicWritableCommand {
      serialize() {
        const buffer = Buffer.alloc(68);
        buffer.writeUInt8(3, 0);
        buffer.writeUInt8(this.properties.index, 1);
        buffer.write(this.properties.name, 2, 44, "utf8");
        buffer.writeUInt16BE(this.properties.frames, 66);
        return buffer;
      }
    };
    exports2.MediaPoolSetClipCommand = MediaPoolSetClipCommand;
    MediaPoolSetClipCommand.rawName = "SMPC";
  }
});

// node_modules/atem-connection/dist/commands/Media/index.js
var require_Media = __commonJS({
  "node_modules/atem-connection/dist/commands/Media/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_MediaPlayerSourceCommand(), exports2);
    tslib_1.__exportStar(require_MediaPlayerStatusCommand(), exports2);
    tslib_1.__exportStar(require_MediaPoolCaptureStillCommand(), exports2);
    tslib_1.__exportStar(require_MediaPoolClearClipCommand(), exports2);
    tslib_1.__exportStar(require_MediaPoolClearStillCommand(), exports2);
    tslib_1.__exportStar(require_MediaPoolClipDescription(), exports2);
    tslib_1.__exportStar(require_MediaPoolFrameDescription(), exports2);
    tslib_1.__exportStar(require_MediaPoolSetClipCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/FadeToBlack/FadeToBlackAutoCommand.js
var require_FadeToBlackAutoCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/FadeToBlack/FadeToBlackAutoCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FadeToBlackAutoCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var FadeToBlackAutoCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(mixEffect) {
        super(null);
        this.mixEffect = mixEffect;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        return buffer;
      }
    };
    exports2.FadeToBlackAutoCommand = FadeToBlackAutoCommand;
    FadeToBlackAutoCommand.rawName = "FtbA";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/FadeToBlack/FadeToBlackRateCommand.js
var require_FadeToBlackRateCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/FadeToBlack/FadeToBlackRateCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FadeToBlackRateUpdateCommand = exports2.FadeToBlackRateCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var FadeToBlackRateCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(mixEffect, rate) {
        super({ rate });
        this.mixEffect = mixEffect;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(1, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.properties.rate, 2);
        return buffer;
      }
    };
    exports2.FadeToBlackRateCommand = FadeToBlackRateCommand;
    FadeToBlackRateCommand.rawName = "FtbC";
    var FadeToBlackRateUpdateCommand = class _FadeToBlackRateUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, rate) {
        super({ rate });
        this.mixEffect = mixEffect;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const rate = rawCommand.readUInt8(1);
        return new _FadeToBlackRateUpdateCommand(mixEffect, rate);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
          throw new state_1.InvalidIdError("MixEffect", this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.fadeToBlack = {
          isFullyBlack: false,
          inTransition: false,
          remainingFrames: 0,
          ...mixEffect.fadeToBlack,
          rate: this.properties.rate
        };
        return `video.mixEffects.${this.mixEffect}.fadeToBlack`;
      }
    };
    exports2.FadeToBlackRateUpdateCommand = FadeToBlackRateUpdateCommand;
    FadeToBlackRateUpdateCommand.rawName = "FtbP";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/FadeToBlack/FadeToBlackStateCommand.js
var require_FadeToBlackStateCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/FadeToBlack/FadeToBlackStateCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FadeToBlackStateCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var FadeToBlackStateCommand = class _FadeToBlackStateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
          isFullyBlack: rawCommand.readUInt8(1) === 1,
          inTransition: rawCommand.readUInt8(2) === 1,
          remainingFrames: rawCommand.readUInt8(3)
        };
        return new _FadeToBlackStateCommand(mixEffect, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
          throw new state_1.InvalidIdError("MixEffect", this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.fadeToBlack = {
          rate: 0,
          ...mixEffect.fadeToBlack,
          ...this.properties
        };
        return `video.mixEffects.${this.mixEffect}.fadeToBlack`;
      }
    };
    exports2.FadeToBlackStateCommand = FadeToBlackStateCommand;
    FadeToBlackStateCommand.rawName = "FtbS";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/FadeToBlack/index.js
var require_FadeToBlack = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/FadeToBlack/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_FadeToBlackAutoCommand(), exports2);
    tslib_1.__exportStar(require_FadeToBlackRateCommand(), exports2);
    tslib_1.__exportStar(require_FadeToBlackStateCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyAdvancedChromaPropertiesCommand.js
var require_MixEffectKeyAdvancedChromaPropertiesCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyAdvancedChromaPropertiesCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectKeyAdvancedChromaPropertiesUpdateCommand = exports2.MixEffectKeyAdvancedChromaPropertiesCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var MixEffectKeyAdvancedChromaPropertiesCommand = class extends CommandBase_1.WritableCommand {
      constructor(mixEffect, upstreamKeyerId) {
        super();
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(28);
        buffer.writeUInt16BE(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 2);
        buffer.writeUInt8(this.upstreamKeyerId, 3);
        buffer.writeUInt16BE(this.properties.foregroundLevel || 0, 4);
        buffer.writeUInt16BE(this.properties.backgroundLevel || 0, 6);
        buffer.writeUInt16BE(this.properties.keyEdge || 0, 8);
        buffer.writeUInt16BE(this.properties.spillSuppression || 0, 10);
        buffer.writeUInt16BE(this.properties.flareSuppression || 0, 12);
        buffer.writeInt16BE(this.properties.brightness || 0, 14);
        buffer.writeInt16BE(this.properties.contrast || 0, 16);
        buffer.writeUInt16BE(this.properties.saturation || 0, 18);
        buffer.writeInt16BE(this.properties.red || 0, 20);
        buffer.writeInt16BE(this.properties.green || 0, 22);
        buffer.writeInt16BE(this.properties.blue || 0, 24);
        return buffer;
      }
    };
    exports2.MixEffectKeyAdvancedChromaPropertiesCommand = MixEffectKeyAdvancedChromaPropertiesCommand;
    MixEffectKeyAdvancedChromaPropertiesCommand.MaskFlags = {
      foregroundLevel: 1 << 0,
      backgroundLevel: 1 << 1,
      keyEdge: 1 << 2,
      spillSuppression: 1 << 3,
      flareSuppression: 1 << 4,
      brightness: 1 << 5,
      contrast: 1 << 6,
      saturation: 1 << 7,
      red: 1 << 8,
      green: 1 << 9,
      blue: 1 << 10
    };
    MixEffectKeyAdvancedChromaPropertiesCommand.rawName = "CACK";
    var MixEffectKeyAdvancedChromaPropertiesUpdateCommand = class _MixEffectKeyAdvancedChromaPropertiesUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, upstreamKeyerId, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const upstreamKeyerId = rawCommand.readUInt8(1);
        const properties = {
          foregroundLevel: rawCommand.readUInt16BE(2),
          backgroundLevel: rawCommand.readUInt16BE(4),
          keyEdge: rawCommand.readUInt16BE(6),
          spillSuppression: rawCommand.readUInt16BE(8),
          flareSuppression: rawCommand.readUInt16BE(10),
          brightness: rawCommand.readInt16BE(12),
          contrast: rawCommand.readInt16BE(14),
          saturation: rawCommand.readUInt16BE(16),
          red: rawCommand.readInt16BE(18),
          green: rawCommand.readInt16BE(20),
          blue: rawCommand.readInt16BE(22)
        };
        return new _MixEffectKeyAdvancedChromaPropertiesUpdateCommand(mixEffect, upstreamKeyerId, properties);
      }
      applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
          throw new state_1.InvalidIdError("UpstreamKeyer", this.mixEffect, this.upstreamKeyerId);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        const upstreamKeyer = state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.upstreamKeyerId);
        upstreamKeyer.advancedChromaSettings = {
          ...upstreamKeyer.advancedChromaSettings,
          properties: this.properties
        };
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.upstreamKeyerId}.advancedChromaSettings.properties`;
      }
    };
    exports2.MixEffectKeyAdvancedChromaPropertiesUpdateCommand = MixEffectKeyAdvancedChromaPropertiesUpdateCommand;
    MixEffectKeyAdvancedChromaPropertiesUpdateCommand.rawName = "KACk";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyAdvancedChromaSampleCommand.js
var require_MixEffectKeyAdvancedChromaSampleCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyAdvancedChromaSampleCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectKeyAdvancedChromaSampleUpdateCommand = exports2.MixEffectKeyAdvancedChromaSampleCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var MixEffectKeyAdvancedChromaSampleCommand = class extends CommandBase_1.WritableCommand {
      constructor(mixEffect, upstreamKeyerId) {
        super();
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.upstreamKeyerId, 2);
        buffer.writeUInt8(this.properties.enableCursor ? 1 : 0, 3);
        buffer.writeUInt8(this.properties.preview ? 1 : 0, 4);
        buffer.writeInt16BE(this.properties.cursorX || 0, 6);
        buffer.writeInt16BE(this.properties.cursorY || 0, 8);
        buffer.writeUInt16BE(this.properties.cursorSize || 0, 10);
        buffer.writeUInt16BE(this.properties.sampledY || 0, 12);
        buffer.writeInt16BE(this.properties.sampledCb || 0, 14);
        buffer.writeInt16BE(this.properties.sampledCr || 0, 16);
        return buffer;
      }
    };
    exports2.MixEffectKeyAdvancedChromaSampleCommand = MixEffectKeyAdvancedChromaSampleCommand;
    MixEffectKeyAdvancedChromaSampleCommand.MaskFlags = {
      enableCursor: 1 << 0,
      preview: 1 << 1,
      cursorX: 1 << 2,
      cursorY: 1 << 3,
      cursorSize: 1 << 4,
      sampledY: 1 << 5,
      sampledCb: 1 << 6,
      sampledCr: 1 << 7
    };
    MixEffectKeyAdvancedChromaSampleCommand.rawName = "CACC";
    var MixEffectKeyAdvancedChromaSampleUpdateCommand = class _MixEffectKeyAdvancedChromaSampleUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, upstreamKeyerId, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const upstreamKeyerId = rawCommand.readUInt8(1);
        const properties = {
          enableCursor: rawCommand.readUInt8(2) > 0,
          preview: rawCommand.readUInt8(3) > 0,
          cursorX: rawCommand.readInt16BE(4),
          cursorY: rawCommand.readInt16BE(6),
          cursorSize: rawCommand.readUInt16BE(8),
          sampledY: rawCommand.readUInt16BE(10),
          sampledCb: rawCommand.readInt16BE(12),
          sampledCr: rawCommand.readInt16BE(14)
        };
        return new _MixEffectKeyAdvancedChromaSampleUpdateCommand(mixEffect, upstreamKeyerId, properties);
      }
      applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
          throw new state_1.InvalidIdError("UpstreamKeyer", this.mixEffect, this.upstreamKeyerId);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        const upstreamKeyer = state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.upstreamKeyerId);
        upstreamKeyer.advancedChromaSettings = {
          ...upstreamKeyer.advancedChromaSettings,
          sample: this.properties
        };
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.upstreamKeyerId}.advancedChromaSettings.sample`;
      }
    };
    exports2.MixEffectKeyAdvancedChromaSampleUpdateCommand = MixEffectKeyAdvancedChromaSampleUpdateCommand;
    MixEffectKeyAdvancedChromaSampleUpdateCommand.rawName = "KACC";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyAdvancedChromaSampleResetCommand.js
var require_MixEffectKeyAdvancedChromaSampleResetCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyAdvancedChromaSampleResetCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectKeyAdvancedChromaSampleResetCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var MixEffectKeyAdvancedChromaSampleResetCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(mixEffect, upstreamKeyerId, props) {
        super(props);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt8(this.upstreamKeyerId, 1);
        let val = 0;
        if (this.properties.keyAdjustments) {
          val |= 1 << 0;
        }
        if (this.properties.chromaCorrection) {
          val |= 1 << 1;
        }
        if (this.properties.colorAdjustments) {
          val |= 1 << 2;
        }
        buffer.writeUInt8(val, 3);
        return buffer;
      }
    };
    exports2.MixEffectKeyAdvancedChromaSampleResetCommand = MixEffectKeyAdvancedChromaSampleResetCommand;
    MixEffectKeyAdvancedChromaSampleResetCommand.rawName = "RACK";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyChromaCommand.js
var require_MixEffectKeyChromaCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyChromaCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectKeyChromaUpdateCommand = exports2.MixEffectKeyChromaCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var MixEffectKeyChromaCommand = class extends CommandBase_1.WritableCommand {
      constructor(mixEffect, upstreamKeyerId) {
        super();
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(16);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.upstreamKeyerId, 2);
        buffer.writeUInt16BE(this.properties.hue || 0, 4);
        buffer.writeUInt16BE(this.properties.gain || 0, 6);
        buffer.writeUInt16BE(this.properties.ySuppress || 0, 8);
        buffer.writeUInt16BE(this.properties.lift || 0, 10);
        buffer.writeUInt8(this.properties.narrow ? 1 : 0, 12);
        return buffer;
      }
    };
    exports2.MixEffectKeyChromaCommand = MixEffectKeyChromaCommand;
    MixEffectKeyChromaCommand.MaskFlags = {
      hue: 1 << 0,
      gain: 1 << 1,
      ySuppress: 1 << 2,
      lift: 1 << 3,
      narrow: 1 << 4
    };
    MixEffectKeyChromaCommand.rawName = "CKCk";
    var MixEffectKeyChromaUpdateCommand = class _MixEffectKeyChromaUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, upstreamKeyerId, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const upstreamKeyerId = rawCommand.readUInt8(1);
        const properties = {
          hue: rawCommand.readUInt16BE(2),
          gain: rawCommand.readUInt16BE(4),
          ySuppress: rawCommand.readUInt16BE(6),
          lift: rawCommand.readUInt16BE(8),
          narrow: rawCommand.readUInt8(10) === 1
        };
        return new _MixEffectKeyChromaUpdateCommand(mixEffect, upstreamKeyerId, properties);
      }
      applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
          throw new state_1.InvalidIdError("UpstreamKeyer", this.mixEffect, this.upstreamKeyerId);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        const upstreamKeyer = state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.upstreamKeyerId);
        upstreamKeyer.chromaSettings = {
          ...this.properties
        };
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.upstreamKeyerId}.chromaSettings`;
      }
    };
    exports2.MixEffectKeyChromaUpdateCommand = MixEffectKeyChromaUpdateCommand;
    MixEffectKeyChromaUpdateCommand.rawName = "KeCk";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyCutSourceSetCommand.js
var require_MixEffectKeyCutSourceSetCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyCutSourceSetCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectKeyCutSourceSetCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var MixEffectKeyCutSourceSetCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(mixEffect, upstreamKeyerId, cutSource) {
        super({ cutSource });
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt8(this.upstreamKeyerId, 1);
        buffer.writeUInt16BE(this.properties.cutSource, 2);
        return buffer;
      }
    };
    exports2.MixEffectKeyCutSourceSetCommand = MixEffectKeyCutSourceSetCommand;
    MixEffectKeyCutSourceSetCommand.rawName = "CKeC";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyDVECommand.js
var require_MixEffectKeyDVECommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyDVECommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectKeyDVEUpdateCommand = exports2.MixEffectKeyDVECommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var MixEffectKeyDVECommand = class extends CommandBase_1.WritableCommand {
      constructor(mixEffect, upstreamKeyerId) {
        super();
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(64);
        buffer.writeUInt32BE(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 4);
        buffer.writeUInt8(this.upstreamKeyerId, 5);
        buffer.writeUInt32BE(this.properties.sizeX || 0, 8);
        buffer.writeUInt32BE(this.properties.sizeY || 0, 12);
        buffer.writeInt32BE(this.properties.positionX || 0, 16);
        buffer.writeInt32BE(this.properties.positionY || 0, 20);
        buffer.writeInt32BE(this.properties.rotation || 0, 24);
        buffer.writeUInt8(this.properties.borderEnabled ? 1 : 0, 28);
        buffer.writeUInt8(this.properties.shadowEnabled ? 1 : 0, 29);
        buffer.writeUInt8(this.properties.borderBevel || 0, 30);
        buffer.writeUInt16BE(this.properties.borderOuterWidth || 0, 32);
        buffer.writeUInt16BE(this.properties.borderInnerWidth || 0, 34);
        buffer.writeUInt8(this.properties.borderOuterSoftness || 0, 36);
        buffer.writeUInt8(this.properties.borderInnerSoftness || 0, 37);
        buffer.writeUInt8(this.properties.borderBevelSoftness || 0, 38);
        buffer.writeUInt8(this.properties.borderBevelPosition || 0, 39);
        buffer.writeUInt8(this.properties.borderOpacity || 0, 40);
        buffer.writeUInt16BE(this.properties.borderHue || 0, 42);
        buffer.writeUInt16BE(this.properties.borderSaturation || 0, 44);
        buffer.writeUInt16BE(this.properties.borderLuma || 0, 46);
        buffer.writeUInt16BE(this.properties.lightSourceDirection || 0, 48);
        buffer.writeUInt8(this.properties.lightSourceAltitude || 0, 50);
        buffer.writeUInt8(this.properties.maskEnabled ? 1 : 0, 51);
        buffer.writeUInt16BE(this.properties.maskTop || 0, 52);
        buffer.writeUInt16BE(this.properties.maskBottom || 0, 54);
        buffer.writeUInt16BE(this.properties.maskLeft || 0, 56);
        buffer.writeUInt16BE(this.properties.maskRight || 0, 58);
        buffer.writeUInt8(this.properties.rate || 0, 60);
        return buffer;
      }
    };
    exports2.MixEffectKeyDVECommand = MixEffectKeyDVECommand;
    MixEffectKeyDVECommand.MaskFlags = {
      sizeX: 1 << 0,
      sizeY: 1 << 1,
      positionX: 1 << 2,
      positionY: 1 << 3,
      rotation: 1 << 4,
      borderEnabled: 1 << 5,
      shadowEnabled: 1 << 6,
      borderBevel: 1 << 7,
      borderOuterWidth: 1 << 8,
      borderInnerWidth: 1 << 9,
      borderOuterSoftness: 1 << 10,
      borderInnerSoftness: 1 << 11,
      borderBevelSoftness: 1 << 12,
      borderBevelPosition: 1 << 13,
      borderOpacity: 1 << 14,
      borderHue: 1 << 15,
      borderSaturation: 1 << 16,
      borderLuma: 1 << 17,
      lightSourceDirection: 1 << 18,
      lightSourceAltitude: 1 << 19,
      maskEnabled: 1 << 20,
      maskTop: 1 << 21,
      maskBottom: 1 << 22,
      maskLeft: 1 << 23,
      maskRight: 1 << 24,
      rate: 1 << 25
    };
    MixEffectKeyDVECommand.rawName = "CKDV";
    var MixEffectKeyDVEUpdateCommand = class _MixEffectKeyDVEUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, upstreamKeyerId, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const upstreamKeyerId = rawCommand.readUInt8(1);
        const properties = {
          // Note: these are higher than the ui shows, but are within the range the atem can be set to
          sizeX: rawCommand.readUInt32BE(4),
          sizeY: rawCommand.readUInt32BE(8),
          positionX: rawCommand.readInt32BE(12),
          positionY: rawCommand.readInt32BE(16),
          rotation: rawCommand.readInt32BE(20),
          borderEnabled: rawCommand.readUInt8(24) === 1,
          shadowEnabled: rawCommand.readUInt8(25) === 1,
          borderBevel: rawCommand.readUInt8(26),
          borderOuterWidth: rawCommand.readUInt16BE(28),
          borderInnerWidth: rawCommand.readUInt16BE(30),
          borderOuterSoftness: rawCommand.readInt8(32),
          borderInnerSoftness: rawCommand.readInt8(33),
          borderBevelSoftness: rawCommand.readInt8(34),
          borderBevelPosition: rawCommand.readInt8(35),
          borderOpacity: rawCommand.readInt8(36),
          borderHue: rawCommand.readUInt16BE(38),
          borderSaturation: rawCommand.readUInt16BE(40),
          borderLuma: rawCommand.readUInt16BE(42),
          lightSourceDirection: rawCommand.readUInt16BE(44),
          lightSourceAltitude: rawCommand.readUInt8(46),
          maskEnabled: rawCommand.readUInt8(47) === 1,
          maskTop: rawCommand.readUInt16BE(48),
          maskBottom: rawCommand.readUInt16BE(50),
          maskLeft: rawCommand.readUInt16BE(52),
          maskRight: rawCommand.readUInt16BE(54),
          rate: rawCommand.readUInt8(56)
        };
        return new _MixEffectKeyDVEUpdateCommand(mixEffect, upstreamKeyerId, properties);
      }
      applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
          throw new state_1.InvalidIdError("UpstreamKeyer", this.mixEffect, this.upstreamKeyerId);
        } else if (!state.info.capabilities || !state.info.capabilities.DVEs) {
          throw new state_1.InvalidIdError(`DVE is not supported`);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        const upstreamKeyer = state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.upstreamKeyerId);
        upstreamKeyer.dveSettings = {
          ...this.properties
        };
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.upstreamKeyerId}.dveSettings`;
      }
    };
    exports2.MixEffectKeyDVEUpdateCommand = MixEffectKeyDVEUpdateCommand;
    MixEffectKeyDVEUpdateCommand.rawName = "KeDV";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyFillSourceSetCommand.js
var require_MixEffectKeyFillSourceSetCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyFillSourceSetCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectKeyFillSourceSetCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var MixEffectKeyFillSourceSetCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(mixEffect, upstreamKeyerId, fillSource) {
        super({ fillSource });
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt8(this.upstreamKeyerId, 1);
        buffer.writeUInt16BE(this.properties.fillSource, 2);
        return buffer;
      }
    };
    exports2.MixEffectKeyFillSourceSetCommand = MixEffectKeyFillSourceSetCommand;
    MixEffectKeyFillSourceSetCommand.rawName = "CKeF";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyFlyKeyframeCommand.js
var require_MixEffectKeyFlyKeyframeCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyFlyKeyframeCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectKeyFlyKeyframeStoreCommand = exports2.MixEffectKeyFlyKeyframeCommand = exports2.MixEffectKeyFlyKeyframeUpdateCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var MixEffectKeyFlyKeyframeUpdateCommand = class _MixEffectKeyFlyKeyframeUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, upstreamKeyerId, keyFrameId, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
        this.keyFrameId = keyFrameId;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const upstreamKeyerId = rawCommand.readUInt8(1);
        const keyFrameId = rawCommand.readUInt8(2);
        const properties = {
          sizeX: rawCommand.readUInt32BE(4),
          sizeY: rawCommand.readUInt32BE(8),
          positionX: rawCommand.readInt32BE(12),
          positionY: rawCommand.readInt32BE(16),
          rotation: rawCommand.readInt32BE(20),
          borderOuterWidth: rawCommand.readUInt16BE(24),
          borderInnerWidth: rawCommand.readUInt16BE(26),
          borderOuterSoftness: rawCommand.readUInt8(28),
          borderInnerSoftness: rawCommand.readUInt8(29),
          borderBevelSoftness: rawCommand.readUInt8(30),
          borderBevelPosition: rawCommand.readUInt8(31),
          borderOpacity: rawCommand.readUInt8(32),
          borderHue: rawCommand.readUInt16BE(34),
          borderSaturation: rawCommand.readUInt16BE(36),
          borderLuma: rawCommand.readUInt16BE(38),
          lightSourceDirection: rawCommand.readUInt16BE(40),
          lightSourceAltitude: rawCommand.readUInt8(42),
          // maskEnabled: rawCommand.readUInt8(43) === 1,
          maskTop: rawCommand.readInt16BE(44),
          maskBottom: rawCommand.readInt16BE(46),
          maskLeft: rawCommand.readInt16BE(48),
          maskRight: rawCommand.readInt16BE(50)
        };
        return new _MixEffectKeyFlyKeyframeUpdateCommand(mixEffect, upstreamKeyerId, keyFrameId, properties);
      }
      applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
          throw new state_1.InvalidIdError("UpstreamKeyer", this.mixEffect, this.upstreamKeyerId);
        } else if (this.keyFrameId <= 0 || this.keyFrameId > 2) {
          throw new state_1.InvalidIdError("FlyKeyFrame", this.keyFrameId);
        }
        const index = this.keyFrameId - 1;
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        const upstreamKeyer = state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.upstreamKeyerId);
        upstreamKeyer.flyKeyframes[index] = {
          ...this.properties,
          keyFrameId: this.keyFrameId
        };
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.upstreamKeyerId}.flyKeyframes.${index}`;
      }
    };
    exports2.MixEffectKeyFlyKeyframeUpdateCommand = MixEffectKeyFlyKeyframeUpdateCommand;
    MixEffectKeyFlyKeyframeUpdateCommand.rawName = "KKFP";
    var MixEffectKeyFlyKeyframeCommand = class extends CommandBase_1.WritableCommand {
      constructor(mixEffect, upstreamKeyerId, keyFrameId) {
        super();
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
        this.keyFrameId = keyFrameId;
      }
      serialize() {
        const buffer = Buffer.alloc(56);
        buffer.writeUInt32BE(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 4);
        buffer.writeUInt8(this.upstreamKeyerId, 5);
        buffer.writeUInt8(this.keyFrameId, 6);
        buffer.writeUInt32BE(this.properties.sizeX || 0, 8);
        buffer.writeUInt32BE(this.properties.sizeY || 0, 12);
        buffer.writeInt32BE(this.properties.positionX || 0, 16);
        buffer.writeInt32BE(this.properties.positionY || 0, 20);
        buffer.writeInt32BE(this.properties.rotation || 0, 24);
        buffer.writeUInt16BE(this.properties.borderOuterWidth || 0, 28);
        buffer.writeUInt16BE(this.properties.borderInnerWidth || 0, 30);
        buffer.writeUInt8(this.properties.borderOuterSoftness || 0, 32);
        buffer.writeUInt8(this.properties.borderInnerSoftness || 0, 33);
        buffer.writeUInt8(this.properties.borderBevelSoftness || 0, 34);
        buffer.writeUInt8(this.properties.borderBevelPosition || 0, 35);
        buffer.writeUInt8(this.properties.borderOpacity || 0, 36);
        buffer.writeUInt16BE(this.properties.borderHue || 0, 38);
        buffer.writeUInt16BE(this.properties.borderSaturation || 0, 40);
        buffer.writeUInt16BE(this.properties.borderLuma || 0, 42);
        buffer.writeUInt16BE(this.properties.lightSourceDirection || 0, 44);
        buffer.writeUInt8(this.properties.lightSourceAltitude || 0, 46);
        buffer.writeInt16BE(this.properties.maskTop || 0, 48);
        buffer.writeInt16BE(this.properties.maskBottom || 0, 50);
        buffer.writeInt16BE(this.properties.maskLeft || 0, 52);
        buffer.writeInt16BE(this.properties.maskRight || 0, 54);
        return buffer;
      }
    };
    exports2.MixEffectKeyFlyKeyframeCommand = MixEffectKeyFlyKeyframeCommand;
    MixEffectKeyFlyKeyframeCommand.MaskFlags = {
      sizeX: 1 << 0,
      sizeY: 1 << 1,
      positionX: 1 << 2,
      positionY: 1 << 3,
      rotation: 1 << 4,
      borderOuterWidth: 1 << 5,
      borderInnerWidth: 1 << 6,
      borderOuterSoftness: 1 << 7,
      borderInnerSoftness: 1 << 8,
      borderBevelSoftness: 1 << 9,
      borderBevelPosition: 1 << 10,
      borderOpacity: 1 << 11,
      borderHue: 1 << 12,
      borderSaturation: 1 << 13,
      borderLuma: 1 << 14,
      lightSourceDirection: 1 << 15,
      lightSourceAltitude: 1 << 16,
      maskTop: 1 << 17,
      maskBottom: 1 << 18,
      maskLeft: 1 << 19,
      maskRight: 1 << 20
    };
    MixEffectKeyFlyKeyframeCommand.rawName = "CKFP";
    var MixEffectKeyFlyKeyframeStoreCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(mixEffect, upstreamKeyerId, keyFrameId) {
        super({});
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
        this.keyFrameId = keyFrameId;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt8(this.upstreamKeyerId, 1);
        buffer.writeUInt8(this.keyFrameId, 2);
        return buffer;
      }
    };
    exports2.MixEffectKeyFlyKeyframeStoreCommand = MixEffectKeyFlyKeyframeStoreCommand;
    MixEffectKeyFlyKeyframeStoreCommand.rawName = "SFKF";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyFlyPropertiesGetCommand.js
var require_MixEffectKeyFlyPropertiesGetCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyFlyPropertiesGetCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectKeyFlyPropertiesGetCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var MixEffectKeyFlyPropertiesGetCommand = class _MixEffectKeyFlyPropertiesGetCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, upstreamKeyerId, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const upstreamKeyerId = rawCommand.readUInt8(1);
        const properties = {
          isASet: rawCommand.readUInt8(2) === 1,
          isBSet: rawCommand.readUInt8(3) === 1,
          isAtKeyFrame: rawCommand.readUInt8(6),
          runToInfiniteIndex: rawCommand.readUInt8(7)
        };
        return new _MixEffectKeyFlyPropertiesGetCommand(mixEffect, upstreamKeyerId, properties);
      }
      applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
          throw new state_1.InvalidIdError("UpstreamKeyer", this.mixEffect, this.upstreamKeyerId);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        const upstreamKeyer = state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.upstreamKeyerId);
        upstreamKeyer.flyProperties = {
          ...this.properties
        };
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.upstreamKeyerId}.flyProperties`;
      }
    };
    exports2.MixEffectKeyFlyPropertiesGetCommand = MixEffectKeyFlyPropertiesGetCommand;
    MixEffectKeyFlyPropertiesGetCommand.rawName = "KeFS";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyLumaCommand.js
var require_MixEffectKeyLumaCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyLumaCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectKeyLumaUpdateCommand = exports2.MixEffectKeyLumaCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var MixEffectKeyLumaCommand = class extends CommandBase_1.WritableCommand {
      constructor(mixEffect, upstreamKeyerId) {
        super();
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(12);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.upstreamKeyerId, 2);
        buffer.writeUInt8(this.properties.preMultiplied ? 1 : 0, 3);
        buffer.writeUInt16BE(this.properties.clip || 0, 4);
        buffer.writeUInt16BE(this.properties.gain || 0, 6);
        buffer.writeUInt8(this.properties.invert ? 1 : 0, 8);
        return buffer;
      }
    };
    exports2.MixEffectKeyLumaCommand = MixEffectKeyLumaCommand;
    MixEffectKeyLumaCommand.MaskFlags = {
      preMultiplied: 1 << 0,
      clip: 1 << 1,
      gain: 1 << 2,
      invert: 1 << 3
    };
    MixEffectKeyLumaCommand.rawName = "CKLm";
    var MixEffectKeyLumaUpdateCommand = class _MixEffectKeyLumaUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, upstreamKeyerId, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const upstreamKeyerId = rawCommand.readUInt8(1);
        const properties = {
          preMultiplied: rawCommand.readUInt8(2) === 1,
          clip: rawCommand.readUInt16BE(4),
          gain: rawCommand.readUInt16BE(6),
          invert: rawCommand.readUInt8(8) === 1
        };
        return new _MixEffectKeyLumaUpdateCommand(mixEffect, upstreamKeyerId, properties);
      }
      applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
          throw new state_1.InvalidIdError("UpstreamKeyer", this.mixEffect, this.upstreamKeyerId);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        const upstreamKeyer = state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.upstreamKeyerId);
        upstreamKeyer.lumaSettings = {
          ...this.properties
        };
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.upstreamKeyerId}.lumaSettings`;
      }
    };
    exports2.MixEffectKeyLumaUpdateCommand = MixEffectKeyLumaUpdateCommand;
    MixEffectKeyLumaUpdateCommand.rawName = "KeLm";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyMaskSetCommand.js
var require_MixEffectKeyMaskSetCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyMaskSetCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectKeyMaskSetCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var MixEffectKeyMaskSetCommand = class extends CommandBase_1.WritableCommand {
      constructor(mixEffect, upstreamKeyerId) {
        super();
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(12);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.upstreamKeyerId, 2);
        buffer.writeUInt8(this.properties.maskEnabled ? 1 : 0, 3);
        buffer.writeInt16BE(this.properties.maskTop || 0, 4);
        buffer.writeInt16BE(this.properties.maskBottom || 0, 6);
        buffer.writeInt16BE(this.properties.maskLeft || 0, 8);
        buffer.writeInt16BE(this.properties.maskRight || 0, 10);
        return buffer;
      }
    };
    exports2.MixEffectKeyMaskSetCommand = MixEffectKeyMaskSetCommand;
    MixEffectKeyMaskSetCommand.MaskFlags = {
      maskEnabled: 1 << 0,
      maskTop: 1 << 1,
      maskBottom: 1 << 2,
      maskLeft: 1 << 3,
      maskRight: 1 << 4
    };
    MixEffectKeyMaskSetCommand.rawName = "CKMs";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyRunToCommand.js
var require_MixEffectKeyRunToCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyRunToCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectKeyRunToCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var enums_1 = require_enums();
    var MixEffectKeyRunToCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(mixEffect, upstreamKeyerId, keyFrameId, direction) {
        super({ keyFrameId, direction });
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.properties.keyFrameId === enums_1.FlyKeyKeyFrame.RunToInfinite ? 2 : 0, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.upstreamKeyerId, 2);
        buffer.writeUInt8(this.properties.keyFrameId, 4);
        buffer.writeUInt8(this.properties.direction, 5);
        return buffer;
      }
    };
    exports2.MixEffectKeyRunToCommand = MixEffectKeyRunToCommand;
    MixEffectKeyRunToCommand.rawName = "RFlK";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyOnAirCommand.js
var require_MixEffectKeyOnAirCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyOnAirCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectKeyOnAirUpdateCommand = exports2.MixEffectKeyOnAirCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var MixEffectKeyOnAirCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(mixEffect, upstreamKeyerId, onAir) {
        super({ onAir });
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt8(this.upstreamKeyerId, 1);
        buffer.writeUInt8(this.properties.onAir ? 1 : 0, 2);
        return buffer;
      }
    };
    exports2.MixEffectKeyOnAirCommand = MixEffectKeyOnAirCommand;
    MixEffectKeyOnAirCommand.rawName = "CKOn";
    var MixEffectKeyOnAirUpdateCommand = class _MixEffectKeyOnAirUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, upstreamKeyerId, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const upstreamKeyerId = rawCommand.readUInt8(1);
        const properties = {
          onAir: rawCommand.readUInt8(2) === 1
        };
        return new _MixEffectKeyOnAirUpdateCommand(mixEffect, upstreamKeyerId, properties);
      }
      applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
          throw new state_1.InvalidIdError("UpstreamKeyer", this.mixEffect, this.upstreamKeyerId);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        const upstreamKeyer = state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.upstreamKeyerId);
        upstreamKeyer.onAir = this.properties.onAir;
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.upstreamKeyerId}.onAir`;
      }
    };
    exports2.MixEffectKeyOnAirUpdateCommand = MixEffectKeyOnAirUpdateCommand;
    MixEffectKeyOnAirUpdateCommand.rawName = "KeOn";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyPatternCommand.js
var require_MixEffectKeyPatternCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyPatternCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectKeyUpdateCommand = exports2.MixEffectKeyPatternCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var MixEffectKeyPatternCommand = class extends CommandBase_1.WritableCommand {
      constructor(mixEffect, upstreamKeyerId) {
        super();
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(16);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.upstreamKeyerId, 2);
        buffer.writeUInt8(this.properties.style || 0, 3);
        buffer.writeUInt16BE(this.properties.size || 0, 4);
        buffer.writeUInt16BE(this.properties.symmetry || 0, 6);
        buffer.writeUInt16BE(this.properties.softness || 0, 8);
        buffer.writeUInt16BE(this.properties.positionX || 0, 10);
        buffer.writeUInt16BE(this.properties.positionY || 0, 12);
        buffer.writeUInt8(this.properties.invert ? 1 : 0, 14);
        return buffer;
      }
    };
    exports2.MixEffectKeyPatternCommand = MixEffectKeyPatternCommand;
    MixEffectKeyPatternCommand.MaskFlags = {
      style: 1 << 0,
      size: 1 << 1,
      symmetry: 1 << 2,
      softness: 1 << 3,
      positionX: 1 << 4,
      positionY: 1 << 5,
      invert: 1 << 6
    };
    MixEffectKeyPatternCommand.rawName = "CKPt";
    var MixEffectKeyUpdateCommand = class _MixEffectKeyUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, upstreamKeyerId, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const upstreamKeyerId = rawCommand.readUInt8(1);
        const properties = {
          style: rawCommand.readUInt8(2),
          size: rawCommand.readUInt16BE(4),
          symmetry: rawCommand.readUInt16BE(6),
          softness: rawCommand.readUInt16BE(8),
          positionX: rawCommand.readUInt16BE(10),
          positionY: rawCommand.readUInt16BE(12),
          invert: rawCommand.readUInt8(14) === 1
        };
        return new _MixEffectKeyUpdateCommand(mixEffect, upstreamKeyerId, properties);
      }
      applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
          throw new state_1.InvalidIdError("UpstreamKeyer", this.mixEffect, this.upstreamKeyerId);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        const upstreamKeyer = state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.upstreamKeyerId);
        upstreamKeyer.patternSettings = {
          ...this.properties
        };
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.upstreamKeyerId}.patternSettings`;
      }
    };
    exports2.MixEffectKeyUpdateCommand = MixEffectKeyUpdateCommand;
    MixEffectKeyUpdateCommand.rawName = "KePt";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyPropertiesGetCommand.js
var require_MixEffectKeyPropertiesGetCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyPropertiesGetCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectKeyPropertiesGetCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var MixEffectKeyPropertiesGetCommand = class _MixEffectKeyPropertiesGetCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, keyer, properties) {
        super(properties);
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = keyer;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const keyer = rawCommand.readUInt8(1);
        const properties = {
          upstreamKeyerId: keyer,
          mixEffectKeyType: rawCommand.readUInt8(2),
          canFlyKey: rawCommand.readUInt8(4) === 1,
          flyEnabled: rawCommand.readUInt8(5) === 1,
          fillSource: rawCommand.readUInt16BE(6),
          cutSource: rawCommand.readUInt16BE(8),
          maskSettings: {
            maskEnabled: rawCommand.readUInt8(10) === 1,
            maskTop: rawCommand.readInt16BE(12),
            maskBottom: rawCommand.readInt16BE(14),
            maskLeft: rawCommand.readInt16BE(16),
            maskRight: rawCommand.readInt16BE(18)
          }
        };
        return new _MixEffectKeyPropertiesGetCommand(mixEffect, keyer, properties);
      }
      applyToState(state) {
        const meInfo = state.info.mixEffects[this.mixEffect];
        if (!meInfo || this.upstreamKeyerId >= meInfo.keyCount) {
          throw new state_1.InvalidIdError("UpstreamKeyer", this.mixEffect, this.upstreamKeyerId);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.upstreamKeyers[this.properties.upstreamKeyerId] = {
          ...state_1.AtemStateUtil.getUpstreamKeyer(mixEffect, this.properties.upstreamKeyerId),
          ...this.properties
        };
        return `video.mixEffects.${this.mixEffect}.upstreamKeyers.${this.properties.upstreamKeyerId}`;
      }
    };
    exports2.MixEffectKeyPropertiesGetCommand = MixEffectKeyPropertiesGetCommand;
    MixEffectKeyPropertiesGetCommand.rawName = "KeBP";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyTypeSetCommand.js
var require_MixEffectKeyTypeSetCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/MixEffectKeyTypeSetCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MixEffectKeyTypeSetCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var MixEffectKeyTypeSetCommand = class extends CommandBase_1.WritableCommand {
      constructor(mixEffect, upstreamKeyerId) {
        super();
        this.mixEffect = mixEffect;
        this.upstreamKeyerId = upstreamKeyerId;
      }
      serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.upstreamKeyerId, 2);
        buffer.writeUInt8(this.properties.mixEffectKeyType || 0, 3);
        buffer.writeUInt8(this.properties.flyEnabled ? 1 : 0, 4);
        return buffer;
      }
    };
    exports2.MixEffectKeyTypeSetCommand = MixEffectKeyTypeSetCommand;
    MixEffectKeyTypeSetCommand.MaskFlags = {
      mixEffectKeyType: 1 << 0,
      flyEnabled: 1 << 1
    };
    MixEffectKeyTypeSetCommand.rawName = "CKTp";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Key/index.js
var require_Key = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Key/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_MixEffectKeyAdvancedChromaPropertiesCommand(), exports2);
    tslib_1.__exportStar(require_MixEffectKeyAdvancedChromaSampleCommand(), exports2);
    tslib_1.__exportStar(require_MixEffectKeyAdvancedChromaSampleResetCommand(), exports2);
    tslib_1.__exportStar(require_MixEffectKeyChromaCommand(), exports2);
    tslib_1.__exportStar(require_MixEffectKeyCutSourceSetCommand(), exports2);
    tslib_1.__exportStar(require_MixEffectKeyDVECommand(), exports2);
    tslib_1.__exportStar(require_MixEffectKeyFillSourceSetCommand(), exports2);
    tslib_1.__exportStar(require_MixEffectKeyFlyKeyframeCommand(), exports2);
    tslib_1.__exportStar(require_MixEffectKeyFlyPropertiesGetCommand(), exports2);
    tslib_1.__exportStar(require_MixEffectKeyLumaCommand(), exports2);
    tslib_1.__exportStar(require_MixEffectKeyMaskSetCommand(), exports2);
    tslib_1.__exportStar(require_MixEffectKeyRunToCommand(), exports2);
    tslib_1.__exportStar(require_MixEffectKeyOnAirCommand(), exports2);
    tslib_1.__exportStar(require_MixEffectKeyPatternCommand(), exports2);
    tslib_1.__exportStar(require_MixEffectKeyPropertiesGetCommand(), exports2);
    tslib_1.__exportStar(require_MixEffectKeyTypeSetCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Transition/TransitionDipCommand.js
var require_TransitionDipCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Transition/TransitionDipCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TransitionDipUpdateCommand = exports2.TransitionDipCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var TransitionDipCommand = class extends CommandBase_1.WritableCommand {
      constructor(mixEffect) {
        super();
        this.mixEffect = mixEffect;
      }
      serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.properties.rate || 0, 2);
        buffer.writeUInt16BE(this.properties.input || 0, 4);
        return buffer;
      }
    };
    exports2.TransitionDipCommand = TransitionDipCommand;
    TransitionDipCommand.MaskFlags = {
      rate: 1 << 0,
      input: 1 << 1
    };
    TransitionDipCommand.rawName = "CTDp";
    var TransitionDipUpdateCommand = class _TransitionDipUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
          rate: rawCommand.readUInt8(1),
          input: rawCommand.readUInt8(2) << 8 | rawCommand.readUInt8(3) & 255
        };
        return new _TransitionDipUpdateCommand(mixEffect, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
          throw new state_1.InvalidIdError("MixEffect", this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.transitionSettings.dip = {
          ...this.properties
        };
        return `video.mixEffects.${this.mixEffect}.transitionSettings.dip`;
      }
    };
    exports2.TransitionDipUpdateCommand = TransitionDipUpdateCommand;
    TransitionDipUpdateCommand.rawName = "TDpP";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Transition/TransitionDVECommand.js
var require_TransitionDVECommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Transition/TransitionDVECommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TransitionDVEUpdateCommand = exports2.TransitionDVECommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var TransitionDVECommand = class extends CommandBase_1.WritableCommand {
      constructor(mixEffect) {
        super();
        this.mixEffect = mixEffect;
      }
      serialize() {
        const buffer = Buffer.alloc(20, 0);
        buffer.writeUInt16BE(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 2);
        buffer.writeUInt8(this.properties.rate || 0, 3);
        buffer.writeUInt8(this.properties.logoRate || 0, 4);
        buffer.writeUInt8(this.properties.style || 0, 5);
        buffer.writeUInt16BE(this.properties.fillSource || 0, 6);
        buffer.writeUInt16BE(this.properties.keySource || 0, 8);
        buffer.writeUInt8(this.properties.enableKey ? 1 : 0, 10);
        buffer.writeUInt8(this.properties.preMultiplied ? 1 : 0, 11);
        buffer.writeUInt16BE(this.properties.clip || 0, 12);
        buffer.writeUInt16BE(this.properties.gain || 0, 14);
        buffer.writeUInt8(this.properties.invertKey ? 1 : 0, 16);
        buffer.writeUInt8(this.properties.reverse ? 1 : 0, 17);
        buffer.writeUInt8(this.properties.flipFlop ? 1 : 0, 18);
        return buffer;
      }
    };
    exports2.TransitionDVECommand = TransitionDVECommand;
    TransitionDVECommand.MaskFlags = {
      rate: 1 << 0,
      logoRate: 1 << 1,
      style: 1 << 2,
      fillSource: 1 << 3,
      keySource: 1 << 4,
      enableKey: 1 << 5,
      preMultiplied: 1 << 6,
      clip: 1 << 7,
      gain: 1 << 8,
      invertKey: 1 << 9,
      reverse: 1 << 10,
      flipFlop: 1 << 11
    };
    TransitionDVECommand.rawName = "CTDv";
    var TransitionDVEUpdateCommand = class _TransitionDVEUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
          rate: rawCommand.readUInt8(1),
          logoRate: rawCommand.readUInt8(2),
          style: rawCommand.readUInt8(3),
          fillSource: rawCommand.readUInt8(4) << 8 | rawCommand.readUInt8(5) & 255,
          keySource: rawCommand.readUInt8(6) << 8 | rawCommand.readUInt8(7) & 255,
          enableKey: rawCommand.readUInt8(8) === 1,
          preMultiplied: rawCommand.readUInt8(9) === 1,
          clip: rawCommand.readUInt16BE(10),
          gain: rawCommand.readUInt16BE(12),
          invertKey: rawCommand.readUInt8(14) === 1,
          reverse: rawCommand.readUInt8(15) === 1,
          flipFlop: rawCommand.readUInt8(16) === 1
        };
        return new _TransitionDVEUpdateCommand(mixEffect, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
          throw new state_1.InvalidIdError("MixEffect", this.mixEffect);
        } else if (!state.info.capabilities.DVEs) {
          throw new state_1.InvalidIdError(`DVE is not supported`);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.transitionSettings.DVE = {
          ...this.properties
        };
        return `video.mixEffects.${this.mixEffect}.transitionSettings.DVE`;
      }
    };
    exports2.TransitionDVEUpdateCommand = TransitionDVEUpdateCommand;
    TransitionDVEUpdateCommand.rawName = "TDvP";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Transition/TransitionMixCommand.js
var require_TransitionMixCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Transition/TransitionMixCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TransitionMixUpdateCommand = exports2.TransitionMixCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var TransitionMixCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(mixEffect, rate) {
        super({ rate });
        this.mixEffect = mixEffect;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt8(this.properties.rate || 0, 1);
        return buffer;
      }
    };
    exports2.TransitionMixCommand = TransitionMixCommand;
    TransitionMixCommand.rawName = "CTMx";
    var TransitionMixUpdateCommand = class _TransitionMixUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
          rate: rawCommand.readUInt8(1)
        };
        return new _TransitionMixUpdateCommand(mixEffect, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
          throw new state_1.InvalidIdError("MixEffect", this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.transitionSettings.mix = {
          ...this.properties
        };
        return `video.mixEffects.${this.mixEffect}.transitionSettings.mix`;
      }
    };
    exports2.TransitionMixUpdateCommand = TransitionMixUpdateCommand;
    TransitionMixUpdateCommand.rawName = "TMxP";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Transition/TransitionPositionCommand.js
var require_TransitionPositionCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Transition/TransitionPositionCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TransitionPositionUpdateCommand = exports2.TransitionPositionCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var TransitionPositionCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(mixEffect, handlePosition) {
        super({ handlePosition });
        this.mixEffect = mixEffect;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt16BE(this.properties.handlePosition, 2);
        return buffer;
      }
    };
    exports2.TransitionPositionCommand = TransitionPositionCommand;
    TransitionPositionCommand.rawName = "CTPs";
    var TransitionPositionUpdateCommand = class _TransitionPositionUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
          inTransition: rawCommand.readUInt8(1) === 1,
          remainingFrames: rawCommand.readUInt8(2),
          handlePosition: rawCommand.readUInt16BE(4)
        };
        return new _TransitionPositionUpdateCommand(mixEffect, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
          throw new state_1.InvalidIdError("MixEffect", this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.transitionPosition = this.properties;
        return `video.mixEffects.${this.mixEffect}.transitionPosition`;
      }
    };
    exports2.TransitionPositionUpdateCommand = TransitionPositionUpdateCommand;
    TransitionPositionUpdateCommand.rawName = "TrPs";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Transition/TransitionPreviewCommand.js
var require_TransitionPreviewCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Transition/TransitionPreviewCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PreviewTransitionUpdateCommand = exports2.PreviewTransitionCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var PreviewTransitionCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(mixEffect, preview) {
        super({ preview });
        this.mixEffect = mixEffect;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt8(this.properties.preview ? 1 : 0, 1);
        return buffer;
      }
    };
    exports2.PreviewTransitionCommand = PreviewTransitionCommand;
    PreviewTransitionCommand.rawName = "CTPr";
    var PreviewTransitionUpdateCommand = class _PreviewTransitionUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
          preview: rawCommand.readUInt8(1) === 1
        };
        return new _PreviewTransitionUpdateCommand(mixEffect, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
          throw new state_1.InvalidIdError("MixEffect", this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.transitionPreview = this.properties.preview;
        return `video.mixEffects.${this.mixEffect}.transitionPreview`;
      }
    };
    exports2.PreviewTransitionUpdateCommand = PreviewTransitionUpdateCommand;
    PreviewTransitionUpdateCommand.rawName = "TrPr";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Transition/TransitionPropertiesCommand.js
var require_TransitionPropertiesCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Transition/TransitionPropertiesCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TransitionPropertiesUpdateCommand = exports2.TransitionPropertiesCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var atemUtil_1 = require_atemUtil();
    var TransitionPropertiesCommand = class extends CommandBase_1.WritableCommand {
      constructor(mixEffect) {
        super();
        this.mixEffect = mixEffect;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 1);
        buffer.writeUInt8(this.properties.nextStyle || 0, 2);
        buffer.writeUInt8((0, atemUtil_1.combineComponents)(this.properties.nextSelection || []), 3);
        return buffer;
      }
    };
    exports2.TransitionPropertiesCommand = TransitionPropertiesCommand;
    TransitionPropertiesCommand.MaskFlags = {
      nextStyle: 1 << 0,
      nextSelection: 1 << 1
    };
    TransitionPropertiesCommand.rawName = "CTTp";
    var TransitionPropertiesUpdateCommand = class _TransitionPropertiesUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
          style: rawCommand.readUInt8(1),
          selection: (0, atemUtil_1.getComponents)(rawCommand.readUInt8(2)),
          nextStyle: rawCommand.readUInt8(3),
          nextSelection: (0, atemUtil_1.getComponents)(rawCommand.readUInt8(4))
        };
        return new _TransitionPropertiesUpdateCommand(mixEffect, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
          throw new state_1.InvalidIdError("MixEffect", this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.transitionProperties = {
          ...this.properties
        };
        return `video.mixEffects.${this.mixEffect}.transitionProperties`;
      }
    };
    exports2.TransitionPropertiesUpdateCommand = TransitionPropertiesUpdateCommand;
    TransitionPropertiesUpdateCommand.rawName = "TrSS";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Transition/TransitionStingerCommand.js
var require_TransitionStingerCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Transition/TransitionStingerCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TransitionStingerUpdateCommand = exports2.TransitionStingerCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var TransitionStingerCommand = class extends CommandBase_1.WritableCommand {
      constructor(mixEffect) {
        super();
        this.mixEffect = mixEffect;
      }
      serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt16BE(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 2);
        buffer.writeUInt8(this.properties.source || 0, 3);
        buffer.writeUInt8(this.properties.preMultipliedKey ? 1 : 0, 4);
        buffer.writeUInt16BE(this.properties.clip || 0, 6);
        buffer.writeUInt16BE(this.properties.gain || 0, 8);
        buffer.writeUInt8(this.properties.invert ? 1 : 0, 10);
        buffer.writeUInt16BE(this.properties.preroll || 0, 12);
        buffer.writeUInt16BE(this.properties.clipDuration || 0, 14);
        buffer.writeUInt16BE(this.properties.triggerPoint || 0, 16);
        buffer.writeUInt16BE(this.properties.mixRate || 0, 18);
        return buffer;
      }
    };
    exports2.TransitionStingerCommand = TransitionStingerCommand;
    TransitionStingerCommand.MaskFlags = {
      source: 1 << 0,
      preMultipliedKey: 1 << 1,
      clip: 1 << 2,
      gain: 1 << 3,
      invert: 1 << 4,
      preroll: 1 << 5,
      clipDuration: 1 << 6,
      triggerPoint: 1 << 7,
      mixRate: 1 << 8
    };
    TransitionStingerCommand.rawName = "CTSt";
    var TransitionStingerUpdateCommand = class _TransitionStingerUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
          source: rawCommand.readUInt8(1),
          preMultipliedKey: rawCommand.readUInt8(2) === 1,
          clip: rawCommand.readUInt16BE(4),
          gain: rawCommand.readUInt16BE(6),
          invert: rawCommand.readUInt8(8) === 1,
          preroll: rawCommand.readUInt8(10) << 8 | rawCommand.readUInt8(11),
          clipDuration: rawCommand.readUInt8(12) << 8 | rawCommand.readUInt8(13),
          triggerPoint: rawCommand.readUInt8(14) << 8 | rawCommand.readUInt8(15),
          mixRate: rawCommand.readUInt8(16) << 8 | rawCommand.readUInt8(17)
        };
        return new _TransitionStingerUpdateCommand(mixEffect, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
          throw new state_1.InvalidIdError("MixEffect", this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.transitionSettings.stinger = {
          ...this.properties
        };
        return `video.mixEffects.${this.mixEffect}.transitionSettings.stinger`;
      }
    };
    exports2.TransitionStingerUpdateCommand = TransitionStingerUpdateCommand;
    TransitionStingerUpdateCommand.rawName = "TStP";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Transition/TransitionWipeCommand.js
var require_TransitionWipeCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Transition/TransitionWipeCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TransitionWipeUpdateCommand = exports2.TransitionWipeCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var TransitionWipeCommand = class extends CommandBase_1.WritableCommand {
      constructor(mixEffect) {
        super();
        this.mixEffect = mixEffect;
      }
      serialize() {
        const buffer = Buffer.alloc(20);
        buffer.writeUInt16BE(this.flag, 0);
        buffer.writeUInt8(this.mixEffect, 2);
        buffer.writeUInt8(this.properties.rate || 0, 3);
        buffer.writeUInt8(this.properties.pattern || 0, 4);
        buffer.writeUInt16BE(this.properties.borderWidth || 0, 6);
        buffer.writeUInt16BE(this.properties.borderInput || 0, 8);
        buffer.writeUInt16BE(this.properties.symmetry || 0, 10);
        buffer.writeUInt16BE(this.properties.borderSoftness || 0, 12);
        buffer.writeUInt16BE(this.properties.xPosition || 0, 14);
        buffer.writeUInt16BE(this.properties.yPosition || 0, 16);
        buffer.writeUInt8(this.properties.reverseDirection ? 1 : 0, 18);
        buffer.writeUInt8(this.properties.flipFlop ? 1 : 0, 19);
        return buffer;
      }
    };
    exports2.TransitionWipeCommand = TransitionWipeCommand;
    TransitionWipeCommand.MaskFlags = {
      rate: 1 << 0,
      pattern: 1 << 1,
      borderWidth: 1 << 2,
      borderInput: 1 << 3,
      symmetry: 1 << 4,
      borderSoftness: 1 << 5,
      xPosition: 1 << 6,
      yPosition: 1 << 7,
      reverseDirection: 1 << 8,
      flipFlop: 1 << 9
    };
    TransitionWipeCommand.rawName = "CTWp";
    var TransitionWipeUpdateCommand = class _TransitionWipeUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
          rate: rawCommand.readUInt8(1),
          pattern: rawCommand.readUInt8(2),
          borderWidth: rawCommand.readUInt16BE(4),
          borderInput: rawCommand.readUInt16BE(6),
          symmetry: rawCommand.readUInt16BE(8),
          borderSoftness: rawCommand.readUInt16BE(10),
          xPosition: rawCommand.readUInt16BE(12),
          yPosition: rawCommand.readUInt16BE(14),
          reverseDirection: rawCommand.readUInt8(16) === 1,
          flipFlop: rawCommand.readUInt8(17) === 1
        };
        return new _TransitionWipeUpdateCommand(mixEffect, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
          throw new state_1.InvalidIdError("MixEffect", this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.transitionSettings.wipe = {
          ...this.properties
        };
        return `video.mixEffects.${this.mixEffect}.transitionSettings.wipe`;
      }
    };
    exports2.TransitionWipeUpdateCommand = TransitionWipeUpdateCommand;
    TransitionWipeUpdateCommand.rawName = "TWpP";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/Transition/index.js
var require_Transition = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/Transition/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_TransitionDipCommand(), exports2);
    tslib_1.__exportStar(require_TransitionDVECommand(), exports2);
    tslib_1.__exportStar(require_TransitionMixCommand(), exports2);
    tslib_1.__exportStar(require_TransitionPositionCommand(), exports2);
    tslib_1.__exportStar(require_TransitionPreviewCommand(), exports2);
    tslib_1.__exportStar(require_TransitionPropertiesCommand(), exports2);
    tslib_1.__exportStar(require_TransitionStingerCommand(), exports2);
    tslib_1.__exportStar(require_TransitionWipeCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/AutoTransitionCommand.js
var require_AutoTransitionCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/AutoTransitionCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AutoTransitionCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var AutoTransitionCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(mixEffect) {
        super(null);
        this.mixEffect = mixEffect;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        return buffer;
      }
    };
    exports2.AutoTransitionCommand = AutoTransitionCommand;
    AutoTransitionCommand.rawName = "DAut";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/CutCommand.js
var require_CutCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/CutCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CutCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var CutCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(mixEffect) {
        super(null);
        this.mixEffect = mixEffect;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        return buffer;
      }
    };
    exports2.CutCommand = CutCommand;
    CutCommand.rawName = "DCut";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/PreviewInputCommand.js
var require_PreviewInputCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/PreviewInputCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PreviewInputUpdateCommand = exports2.PreviewInputCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var PreviewInputCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(mixEffect, source) {
        super({ source });
        this.mixEffect = mixEffect;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt16BE(this.properties.source, 2);
        return buffer;
      }
    };
    exports2.PreviewInputCommand = PreviewInputCommand;
    PreviewInputCommand.rawName = "CPvI";
    var PreviewInputUpdateCommand = class _PreviewInputUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
          source: rawCommand.readUInt16BE(2)
        };
        return new _PreviewInputUpdateCommand(mixEffect, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
          throw new state_1.InvalidIdError("MixEffect", this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.previewInput = this.properties.source;
        return `video.mixEffects.${this.mixEffect}.previewInput`;
      }
    };
    exports2.PreviewInputUpdateCommand = PreviewInputUpdateCommand;
    PreviewInputUpdateCommand.rawName = "PrvI";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/ProgramInputCommand.js
var require_ProgramInputCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/ProgramInputCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProgramInputUpdateCommand = exports2.ProgramInputCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var ProgramInputCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(mixEffect, source) {
        super({ source });
        this.mixEffect = mixEffect;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.mixEffect, 0);
        buffer.writeUInt16BE(this.properties.source, 2);
        return buffer;
      }
    };
    exports2.ProgramInputCommand = ProgramInputCommand;
    ProgramInputCommand.rawName = "CPgI";
    var ProgramInputUpdateCommand = class _ProgramInputUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mixEffect, properties) {
        super(properties);
        this.mixEffect = mixEffect;
      }
      static deserialize(rawCommand) {
        const mixEffect = rawCommand.readUInt8(0);
        const properties = {
          source: rawCommand.readUInt16BE(2)
        };
        return new _ProgramInputUpdateCommand(mixEffect, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.mixEffect >= state.info.capabilities.mixEffects) {
          throw new state_1.InvalidIdError("MixEffect", this.mixEffect);
        }
        const mixEffect = state_1.AtemStateUtil.getMixEffect(state, this.mixEffect);
        mixEffect.programInput = this.properties.source;
        return `video.mixEffects.${this.mixEffect}.programInput`;
      }
    };
    exports2.ProgramInputUpdateCommand = ProgramInputUpdateCommand;
    ProgramInputUpdateCommand.rawName = "PrgI";
  }
});

// node_modules/atem-connection/dist/commands/MixEffects/index.js
var require_MixEffects = __commonJS({
  "node_modules/atem-connection/dist/commands/MixEffects/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_FadeToBlack(), exports2);
    tslib_1.__exportStar(require_Key(), exports2);
    tslib_1.__exportStar(require_Transition(), exports2);
    tslib_1.__exportStar(require_AutoTransitionCommand(), exports2);
    tslib_1.__exportStar(require_CutCommand(), exports2);
    tslib_1.__exportStar(require_PreviewInputCommand(), exports2);
    tslib_1.__exportStar(require_ProgramInputCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/Recording/RecordingDiskCommand.js
var require_RecordingDiskCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Recording/RecordingDiskCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RecordingDiskInfoUpdateCommand = exports2.RecordingRequestSwitchDiskCommand = void 0;
    var enums_1 = require_enums();
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var atemUtil_1 = require_atemUtil();
    var RecordingRequestSwitchDiskCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor() {
        super({});
      }
      serialize() {
        return Buffer.alloc(0);
      }
    };
    exports2.RecordingRequestSwitchDiskCommand = RecordingRequestSwitchDiskCommand;
    RecordingRequestSwitchDiskCommand.rawName = "RMSp";
    RecordingRequestSwitchDiskCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
    var RecordingDiskInfoUpdateCommand = class _RecordingDiskInfoUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(diskId, properties) {
        super(properties);
        this.diskId = diskId;
      }
      static deserialize(rawCommand) {
        const diskId = rawCommand.readUInt32BE(0);
        const rawStatus = rawCommand.readUInt16BE(8);
        const props = {
          diskId,
          recordingTimeAvailable: rawCommand.readUInt32BE(4),
          status: rawStatus & ~this.DeleteStatusFlag,
          isDelete: (rawStatus & this.DeleteStatusFlag) === this.DeleteStatusFlag,
          volumeName: (0, atemUtil_1.bufToNullTerminatedString)(rawCommand, 10, 64)
        };
        return new _RecordingDiskInfoUpdateCommand(diskId, props);
      }
      applyToState(state) {
        if (!state.recording) {
          throw new state_1.InvalidIdError("Recording");
        }
        if (this.properties.isDelete) {
          delete state.recording.disks[this.diskId];
        } else {
          state.recording.disks[this.diskId] = this.properties;
        }
        return `recording.duration`;
      }
    };
    exports2.RecordingDiskInfoUpdateCommand = RecordingDiskInfoUpdateCommand;
    RecordingDiskInfoUpdateCommand.rawName = "RTMD";
    RecordingDiskInfoUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
    RecordingDiskInfoUpdateCommand.DeleteStatusFlag = 1 << 5;
  }
});

// node_modules/atem-connection/dist/commands/Recording/RecordingDurationCommand.js
var require_RecordingDurationCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Recording/RecordingDurationCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RecordingDurationUpdateCommand = exports2.RecordingRequestDurationCommand = void 0;
    var enums_1 = require_enums();
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var RecordingRequestDurationCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor() {
        super({});
      }
      serialize() {
        return Buffer.alloc(0);
      }
    };
    exports2.RecordingRequestDurationCommand = RecordingRequestDurationCommand;
    RecordingRequestDurationCommand.rawName = "RMDR";
    RecordingRequestDurationCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
    var RecordingDurationUpdateCommand = class _RecordingDurationUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(properties) {
        super(properties);
      }
      static deserialize(rawCommand) {
        const props = {
          hours: rawCommand.readUInt8(0),
          minutes: rawCommand.readUInt8(1),
          seconds: rawCommand.readUInt8(2),
          frames: rawCommand.readUInt8(3),
          isDropFrame: rawCommand.readUInt8(4) != 0
        };
        return new _RecordingDurationUpdateCommand(props);
      }
      applyToState(state) {
        if (!state.recording) {
          throw new state_1.InvalidIdError("Recording");
        }
        state.recording.duration = this.properties;
        return `recording.duration`;
      }
    };
    exports2.RecordingDurationUpdateCommand = RecordingDurationUpdateCommand;
    RecordingDurationUpdateCommand.rawName = "RTMR";
    RecordingDurationUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
  }
});

// node_modules/atem-connection/dist/commands/Recording/RecordingISOCommand.js
var require_RecordingISOCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Recording/RecordingISOCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RecordingISOCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var enums_1 = require_enums();
    var RecordingISOCommand = class _RecordingISOCommand extends CommandBase_1.SymmetricalCommand {
      constructor(recordAllInputs) {
        super({ recordAllInputs });
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.properties.recordAllInputs ? 1 : 0, 0);
        return buffer;
      }
      static deserialize(rawCommand) {
        const recordAllInputs = rawCommand.readUInt8(0) > 0;
        return new _RecordingISOCommand(recordAllInputs);
      }
      applyToState(state) {
        if (!state.recording) {
          throw new state_1.InvalidIdError("Recording");
        }
        state.recording.recordAllInputs = this.properties.recordAllInputs;
        return `recording.recordAllInputs`;
      }
    };
    exports2.RecordingISOCommand = RecordingISOCommand;
    RecordingISOCommand.rawName = "ISOi";
    RecordingISOCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
  }
});

// node_modules/atem-connection/dist/commands/Recording/RecordingSettingsCommand.js
var require_RecordingSettingsCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Recording/RecordingSettingsCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RecordingSettingsUpdateCommand = exports2.RecordingSettingsCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var enums_1 = require_enums();
    var atemUtil_1 = require_atemUtil();
    var RecordingSettingsCommand = class extends CommandBase_1.WritableCommand {
      serialize() {
        const buffer = Buffer.alloc(144);
        buffer.writeUInt8(this.flag, 0);
        buffer.write(this.properties.filename || "", 1, 128, "utf8");
        buffer.writeUInt32BE(this.properties.workingSet1DiskId || 0, 132);
        buffer.writeUInt32BE(this.properties.workingSet2DiskId || 0, 136);
        buffer.writeUInt8(this.properties.recordInAllCameras ? 1 : 0, 140);
        return buffer;
      }
    };
    exports2.RecordingSettingsCommand = RecordingSettingsCommand;
    RecordingSettingsCommand.rawName = "CRMS";
    RecordingSettingsCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
    RecordingSettingsCommand.MaskFlags = {
      filename: 1 << 0,
      workingSet1DiskId: 1 << 1,
      workingSet2DiskId: 1 << 2,
      recordInAllCameras: 1 << 3
    };
    var RecordingSettingsUpdateCommand = class _RecordingSettingsUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(properties) {
        super(properties);
      }
      static deserialize(rawCommand) {
        const props = {
          filename: (0, atemUtil_1.bufToNullTerminatedString)(rawCommand, 0, 128),
          workingSet1DiskId: rawCommand.readUInt32BE(128),
          workingSet2DiskId: rawCommand.readUInt32BE(132),
          recordInAllCameras: rawCommand.readUInt8(136) != 0
        };
        return new _RecordingSettingsUpdateCommand(props);
      }
      applyToState(state) {
        if (!state.recording) {
          state.recording = {
            properties: this.properties,
            disks: {}
          };
        } else {
          state.recording.properties = this.properties;
        }
        return `recording.properties`;
      }
    };
    exports2.RecordingSettingsUpdateCommand = RecordingSettingsUpdateCommand;
    RecordingSettingsUpdateCommand.rawName = "RMSu";
    RecordingSettingsUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
  }
});

// node_modules/atem-connection/dist/commands/Recording/RecordingStatusCommand.js
var require_RecordingStatusCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Recording/RecordingStatusCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RecordingStatusUpdateCommand = exports2.RecordingStatusCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var enums_1 = require_enums();
    var RecordingStatusCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(recording) {
        super({ recording });
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.properties.recording ? 1 : 0, 0);
        return buffer;
      }
    };
    exports2.RecordingStatusCommand = RecordingStatusCommand;
    RecordingStatusCommand.rawName = "RcTM";
    RecordingStatusCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
    var errorEnumValues = Object.values(enums_1.RecordingError).filter((e) => typeof e === "number");
    var statusEnumValues = Object.values(enums_1.RecordingStatus).filter((e) => typeof e === "number");
    var RecordingStatusUpdateCommand = class _RecordingStatusUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(properties) {
        super(properties);
      }
      static deserialize(rawCommand) {
        const rawStatus = rawCommand.readUInt16BE(0);
        const recordingTimeAvailable = rawCommand.length > 4 ? rawCommand.readUInt32BE(4) : -1;
        let error = enums_1.RecordingError.NoMedia;
        let state = enums_1.RecordingStatus.Idle;
        for (const e of errorEnumValues) {
          if (e !== 0 && (rawStatus & e) === e) {
            error = e;
            if (e !== enums_1.RecordingError.None)
              break;
          }
        }
        for (const e of statusEnumValues) {
          if (e !== 0 && (rawStatus & e) === e) {
            state = e;
            break;
          }
        }
        return new _RecordingStatusUpdateCommand({ state, error, recordingTimeAvailable });
      }
      applyToState(state) {
        if (!state.recording) {
          throw new state_1.InvalidIdError("Recording");
        }
        state.recording.status = this.properties;
        return `recording.status`;
      }
    };
    exports2.RecordingStatusUpdateCommand = RecordingStatusUpdateCommand;
    RecordingStatusUpdateCommand.rawName = "RTMS";
    RecordingStatusUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
  }
});

// node_modules/atem-connection/dist/commands/Recording/index.js
var require_Recording = __commonJS({
  "node_modules/atem-connection/dist/commands/Recording/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_RecordingDiskCommand(), exports2);
    tslib_1.__exportStar(require_RecordingDurationCommand(), exports2);
    tslib_1.__exportStar(require_RecordingISOCommand(), exports2);
    tslib_1.__exportStar(require_RecordingSettingsCommand(), exports2);
    tslib_1.__exportStar(require_RecordingStatusCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/Settings/MediaPool.js
var require_MediaPool = __commonJS({
  "node_modules/atem-connection/dist/commands/Settings/MediaPool.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MediaPoolSettingsGetCommand = exports2.MediaPoolSettingsSetCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var enums_1 = require_enums();
    var MediaPoolSettingsSetCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(maxFrames) {
        super({ maxFrames });
      }
      serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt16BE(this.properties.maxFrames[0] || 0, 0);
        buffer.writeUInt16BE(this.properties.maxFrames[1] || 0, 2);
        buffer.writeUInt16BE(this.properties.maxFrames[2] || 0, 4);
        buffer.writeUInt16BE(this.properties.maxFrames[3] || 0, 6);
        return buffer;
      }
    };
    exports2.MediaPoolSettingsSetCommand = MediaPoolSettingsSetCommand;
    MediaPoolSettingsSetCommand.rawName = "CMPS";
    MediaPoolSettingsSetCommand.minimumVersion = enums_1.ProtocolVersion.V8_0;
    var MediaPoolSettingsGetCommand = class _MediaPoolSettingsGetCommand extends CommandBase_1.DeserializedCommand {
      constructor(maxFrames, unassignedFrames) {
        super({ maxFrames, unassignedFrames });
      }
      static deserialize(rawCommand) {
        return new _MediaPoolSettingsGetCommand([
          rawCommand.readUInt16BE(0),
          rawCommand.readUInt16BE(2),
          rawCommand.readUInt16BE(4),
          rawCommand.readUInt16BE(6)
        ], rawCommand.readUInt16BE(8));
      }
      applyToState(state) {
        state.settings.mediaPool = {
          maxFrames: this.properties.maxFrames,
          unassignedFrames: this.properties.unassignedFrames
        };
        return `settings.mediaPool`;
      }
    };
    exports2.MediaPoolSettingsGetCommand = MediaPoolSettingsGetCommand;
    MediaPoolSettingsGetCommand.rawName = "MPSp";
    MediaPoolSettingsGetCommand.minimumVersion = enums_1.ProtocolVersion.V8_0;
  }
});

// node_modules/atem-connection/dist/commands/Settings/MultiViewerSourceCommand.js
var require_MultiViewerSourceCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Settings/MultiViewerSourceCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MultiViewerSourceUpdateCommand = exports2.MultiViewerSourceCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var atemUtil_1 = require_atemUtil();
    var MultiViewerSourceCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(multiviewerId, windowIndex, source) {
        super({ windowIndex, source });
        this.multiViewerId = multiviewerId;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.multiViewerId, 0);
        buffer.writeUInt8(this.properties.windowIndex || 0, 1);
        buffer.writeUInt16BE(this.properties.source || 0, 2);
        return buffer;
      }
    };
    exports2.MultiViewerSourceCommand = MultiViewerSourceCommand;
    MultiViewerSourceCommand.rawName = "CMvI";
    var MultiViewerSourceUpdateCommand = class _MultiViewerSourceUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(multiviewerId, properties) {
        super(properties);
        this.multiViewerId = multiviewerId;
      }
      static deserialize(rawCommand) {
        const multiViewerId = rawCommand.readUInt8(0);
        const properties = {
          windowIndex: rawCommand.readUInt8(1),
          source: rawCommand.readUInt16BE(2),
          supportsVuMeter: rawCommand.readUInt8(4) != 0,
          supportsSafeArea: rawCommand.readUInt8(5) != 0
        };
        return new _MultiViewerSourceUpdateCommand(multiViewerId, properties);
      }
      applyToState(state) {
        if (!state.info.multiviewer || this.multiViewerId >= state.info.multiviewer.count) {
          throw new state_1.InvalidIdError("MultiViewer", this.multiViewerId);
        }
        const multiviewer = state_1.AtemStateUtil.getMultiViewer(state, this.multiViewerId);
        const currentWindow = multiviewer.windows[this.properties.windowIndex];
        if (currentWindow && !(0, atemUtil_1.isRunningInTests)()) {
          let isChanged = false;
          for (const stringKey of Object.keys(this.properties)) {
            const typedKey = stringKey;
            if (this.properties[typedKey] !== currentWindow[typedKey]) {
              isChanged = true;
              break;
            }
          }
          if (!isChanged)
            return [];
        }
        multiviewer.windows[this.properties.windowIndex] = {
          ...currentWindow,
          ...this.properties
        };
        return `settings.multiViewers.${this.multiViewerId}.windows.${this.properties.windowIndex}`;
      }
    };
    exports2.MultiViewerSourceUpdateCommand = MultiViewerSourceUpdateCommand;
    MultiViewerSourceUpdateCommand.rawName = "MvIn";
  }
});

// node_modules/atem-connection/dist/commands/Settings/MultiViewerPropertiesCommand.js
var require_MultiViewerPropertiesCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Settings/MultiViewerPropertiesCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MultiViewerPropertiesUpdateCommand = exports2.MultiViewerPropertiesCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var enums_1 = require_enums();
    var MultiViewerPropertiesCommand = class extends CommandBase_1.WritableCommand {
      constructor(multiviewerId) {
        super();
        this.multiViewerId = multiviewerId;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.multiViewerId, 1);
        buffer.writeUInt8(this.properties.layout || 0, 2);
        buffer.writeUInt8(this.properties.programPreviewSwapped ? 1 : 0, 3);
        return buffer;
      }
    };
    exports2.MultiViewerPropertiesCommand = MultiViewerPropertiesCommand;
    MultiViewerPropertiesCommand.MaskFlags = {
      layout: 1 << 0,
      programPreviewSwapped: 1 << 1
    };
    MultiViewerPropertiesCommand.rawName = "CMvP";
    MultiViewerPropertiesCommand.minimumVersion = enums_1.ProtocolVersion.V8_0;
    var MultiViewerPropertiesUpdateCommand = class _MultiViewerPropertiesUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(multiviewerId, properties) {
        super(properties);
        this.multiViewerId = multiviewerId;
      }
      static deserialize(rawCommand) {
        const multiViewerId = rawCommand.readUInt8(0);
        const properties = {
          layout: rawCommand.readUInt8(1),
          programPreviewSwapped: rawCommand.readUInt8(2) > 0
        };
        return new _MultiViewerPropertiesUpdateCommand(multiViewerId, properties);
      }
      applyToState(state) {
        if (!state.info.multiviewer || this.multiViewerId >= state.info.multiviewer.count) {
          throw new state_1.InvalidIdError("MultiViewer", this.multiViewerId);
        }
        const multiviewer = state_1.AtemStateUtil.getMultiViewer(state, this.multiViewerId);
        multiviewer.properties = this.properties;
        return `settings.multiViewers.${this.multiViewerId}.properties`;
      }
    };
    exports2.MultiViewerPropertiesUpdateCommand = MultiViewerPropertiesUpdateCommand;
    MultiViewerPropertiesUpdateCommand.rawName = "MvPr";
    MultiViewerPropertiesUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_0;
  }
});

// node_modules/atem-connection/dist/commands/Settings/MultiViewerVuOpacityCommand.js
var require_MultiViewerVuOpacityCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Settings/MultiViewerVuOpacityCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MultiViewerVuOpacityCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var MultiViewerVuOpacityCommand = class _MultiViewerVuOpacityCommand extends CommandBase_1.SymmetricalCommand {
      constructor(multiviewerId, opacity) {
        super({ opacity });
        this.multiViewerId = multiviewerId;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.multiViewerId, 0);
        buffer.writeUInt8(this.properties.opacity, 1);
        return buffer;
      }
      static deserialize(rawCommand) {
        const multiViewerId = rawCommand.readUInt8(0);
        const opacity = rawCommand.readUInt8(1);
        return new _MultiViewerVuOpacityCommand(multiViewerId, opacity);
      }
      applyToState(state) {
        if (!state.info.multiviewer || this.multiViewerId >= state.info.multiviewer.count) {
          throw new state_1.InvalidIdError("MultiViewer", this.multiViewerId);
        }
        const multiviewer = state_1.AtemStateUtil.getMultiViewer(state, this.multiViewerId);
        multiviewer.vuOpacity = this.properties.opacity;
        return `settings.multiViewers.${this.multiViewerId}.vuOpacity`;
      }
    };
    exports2.MultiViewerVuOpacityCommand = MultiViewerVuOpacityCommand;
    MultiViewerVuOpacityCommand.rawName = "VuMo";
  }
});

// node_modules/atem-connection/dist/commands/Settings/MultiViewerWindowVuMeterCommand.js
var require_MultiViewerWindowVuMeterCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Settings/MultiViewerWindowVuMeterCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MultiViewerWindowVuMeterUpdateCommand = exports2.MultiViewerWindowVuMeterCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var MultiViewerWindowVuMeterCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(multiviewerId, windowIndex, vuEnabled) {
        super({ vuEnabled });
        this.multiViewerId = multiviewerId;
        this.windowIndex = windowIndex;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.multiViewerId, 0);
        buffer.writeUInt8(this.windowIndex || 0, 1);
        buffer.writeUInt8(this.properties.vuEnabled ? 1 : 0, 2);
        return buffer;
      }
    };
    exports2.MultiViewerWindowVuMeterCommand = MultiViewerWindowVuMeterCommand;
    MultiViewerWindowVuMeterCommand.rawName = "VuMS";
    var MultiViewerWindowVuMeterUpdateCommand = class _MultiViewerWindowVuMeterUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(multiviewerId, windowIndex, vuEnabled) {
        super({ vuEnabled });
        this.multiViewerId = multiviewerId;
        this.windowIndex = windowIndex;
      }
      static deserialize(rawCommand) {
        const multiViewerId = rawCommand.readUInt8(0);
        const windowIndex = rawCommand.readUInt8(1);
        const vuEnabled = rawCommand.readUInt8(2) > 0;
        return new _MultiViewerWindowVuMeterUpdateCommand(multiViewerId, windowIndex, vuEnabled);
      }
      applyToState(state) {
        if (!state.info.multiviewer || this.multiViewerId >= state.info.multiviewer.count) {
          throw new state_1.InvalidIdError("MultiViewer", this.multiViewerId);
        }
        const multiviewer = state_1.AtemStateUtil.getMultiViewer(state, this.multiViewerId);
        const window2 = multiviewer.windows[this.windowIndex];
        if (!window2) {
          throw new state_1.InvalidIdError("MultiViewer Window", this.multiViewerId, this.windowIndex);
        }
        window2.audioMeter = this.properties.vuEnabled;
        return `settings.multiViewers.${this.multiViewerId}.windows.${this.windowIndex}.audioMeter`;
      }
    };
    exports2.MultiViewerWindowVuMeterUpdateCommand = MultiViewerWindowVuMeterUpdateCommand;
    MultiViewerWindowVuMeterUpdateCommand.rawName = "VuMC";
  }
});

// node_modules/atem-connection/dist/commands/Settings/MultiViewerWindowSafeAreaCommand.js
var require_MultiViewerWindowSafeAreaCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Settings/MultiViewerWindowSafeAreaCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MultiViewerWindowSafeAreaCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var enums_1 = require_enums();
    var MultiViewerWindowSafeAreaCommand = class _MultiViewerWindowSafeAreaCommand extends CommandBase_1.SymmetricalCommand {
      constructor(multiviewerId, windowIndex, safeAreaEnabled) {
        super({ safeAreaEnabled });
        this.multiViewerId = multiviewerId;
        this.windowIndex = windowIndex;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.multiViewerId, 0);
        buffer.writeUInt8(this.windowIndex, 1);
        buffer.writeUInt8(this.properties.safeAreaEnabled ? 1 : 0, 2);
        return buffer;
      }
      static deserialize(rawCommand) {
        const multiViewerId = rawCommand.readUInt8(0);
        const windowIndex = rawCommand.readUInt8(1);
        const safeAreaEnabled = rawCommand.readUInt8(2) > 0;
        return new _MultiViewerWindowSafeAreaCommand(multiViewerId, windowIndex, safeAreaEnabled);
      }
      applyToState(state) {
        if (!state.info.multiviewer || this.multiViewerId >= state.info.multiviewer.count) {
          throw new state_1.InvalidIdError("MultiViewer", this.multiViewerId);
        }
        const multiviewer = state_1.AtemStateUtil.getMultiViewer(state, this.multiViewerId);
        const window2 = multiviewer.windows[this.windowIndex];
        if (!window2) {
          throw new state_1.InvalidIdError("MultiViewer Window", this.multiViewerId, this.windowIndex);
        }
        window2.safeTitle = this.properties.safeAreaEnabled;
        return `settings.multiViewers.${this.multiViewerId}.windows.${this.windowIndex}.safeTitle`;
      }
    };
    exports2.MultiViewerWindowSafeAreaCommand = MultiViewerWindowSafeAreaCommand;
    MultiViewerWindowSafeAreaCommand.rawName = "SaMw";
    MultiViewerWindowSafeAreaCommand.minimumVersion = enums_1.ProtocolVersion.V8_0;
  }
});

// node_modules/atem-connection/dist/commands/Settings/VideoMode.js
var require_VideoMode = __commonJS({
  "node_modules/atem-connection/dist/commands/Settings/VideoMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VideoModeUpdateCommand = exports2.VideoModeCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var VideoModeCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(mode) {
        super({ mode });
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.properties.mode, 0);
        return buffer;
      }
    };
    exports2.VideoModeCommand = VideoModeCommand;
    VideoModeCommand.rawName = "CVdM";
    var VideoModeUpdateCommand = class _VideoModeUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mode) {
        super({ mode });
      }
      static deserialize(rawCommand) {
        return new _VideoModeUpdateCommand(rawCommand.readUInt8(0));
      }
      applyToState(state) {
        state.settings.videoMode = this.properties.mode;
        return `settings.videoMode`;
      }
    };
    exports2.VideoModeUpdateCommand = VideoModeUpdateCommand;
    VideoModeUpdateCommand.rawName = "VidM";
  }
});

// node_modules/atem-connection/dist/commands/Settings/index.js
var require_Settings = __commonJS({
  "node_modules/atem-connection/dist/commands/Settings/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_MediaPool(), exports2);
    tslib_1.__exportStar(require_MultiViewerSourceCommand(), exports2);
    tslib_1.__exportStar(require_MultiViewerPropertiesCommand(), exports2);
    tslib_1.__exportStar(require_MultiViewerVuOpacityCommand(), exports2);
    tslib_1.__exportStar(require_MultiViewerWindowVuMeterCommand(), exports2);
    tslib_1.__exportStar(require_MultiViewerWindowSafeAreaCommand(), exports2);
    tslib_1.__exportStar(require_VideoMode(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/Streaming/StreamingDurationCommand.js
var require_StreamingDurationCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Streaming/StreamingDurationCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StreamingDurationUpdateCommand = exports2.StreamingRequestDurationCommand = void 0;
    var enums_1 = require_enums();
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var StreamingRequestDurationCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor() {
        super({});
      }
      serialize() {
        return Buffer.alloc(0);
      }
    };
    exports2.StreamingRequestDurationCommand = StreamingRequestDurationCommand;
    StreamingRequestDurationCommand.rawName = "SRDR";
    StreamingRequestDurationCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
    var StreamingDurationUpdateCommand = class _StreamingDurationUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(properties) {
        super(properties);
      }
      static deserialize(rawCommand) {
        const props = {
          hours: rawCommand.readUInt8(0),
          minutes: rawCommand.readUInt8(1),
          seconds: rawCommand.readUInt8(2),
          frames: rawCommand.readUInt8(3),
          isDropFrame: rawCommand.readUInt8(4) != 0
        };
        return new _StreamingDurationUpdateCommand(props);
      }
      applyToState(state) {
        if (!state.streaming) {
          throw new state_1.InvalidIdError("Streaming");
        }
        state.streaming.duration = this.properties;
        return `streaming.duration`;
      }
    };
    exports2.StreamingDurationUpdateCommand = StreamingDurationUpdateCommand;
    StreamingDurationUpdateCommand.rawName = "SRST";
    StreamingDurationUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
  }
});

// node_modules/atem-connection/dist/commands/Streaming/StreamingServiceCommand.js
var require_StreamingServiceCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Streaming/StreamingServiceCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StreamingServiceUpdateCommand = exports2.StreamingServiceCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var enums_1 = require_enums();
    var atemUtil_1 = require_atemUtil();
    var StreamingServiceCommand = class extends CommandBase_1.WritableCommand {
      serialize() {
        const buffer = Buffer.alloc(1100);
        buffer.writeUInt8(this.flag, 0);
        buffer.write(this.properties.serviceName || "", 1, 64, "utf8");
        buffer.write(this.properties.url || "", 65, 512, "utf8");
        buffer.write(this.properties.key || "", 577, 512, "utf8");
        const bitrates = this.properties.bitrates || [0, 0];
        buffer.writeUInt32BE(bitrates[0], 1092);
        buffer.writeUInt32BE(bitrates[1], 1096);
        return buffer;
      }
    };
    exports2.StreamingServiceCommand = StreamingServiceCommand;
    StreamingServiceCommand.rawName = "CRSS";
    StreamingServiceCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
    StreamingServiceCommand.MaskFlags = {
      serviceName: 1 << 0,
      url: 1 << 1,
      key: 1 << 2,
      bitrates: 1 << 3
    };
    var StreamingServiceUpdateCommand = class _StreamingServiceUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(properties) {
        super(properties);
      }
      static deserialize(rawCommand) {
        const props = {
          serviceName: (0, atemUtil_1.bufToNullTerminatedString)(rawCommand, 0, 64),
          url: (0, atemUtil_1.bufToNullTerminatedString)(rawCommand, 64, 512),
          key: (0, atemUtil_1.bufToNullTerminatedString)(rawCommand, 576, 512),
          bitrates: [rawCommand.readUInt32BE(1088), rawCommand.readUInt32BE(1092)]
        };
        return new _StreamingServiceUpdateCommand(props);
      }
      applyToState(state) {
        if (!state.streaming) {
          state.streaming = {
            service: this.properties
          };
        } else {
          state.streaming.service = this.properties;
        }
        return `streaming.service`;
      }
    };
    exports2.StreamingServiceUpdateCommand = StreamingServiceUpdateCommand;
    StreamingServiceUpdateCommand.rawName = "SRSU";
    StreamingServiceUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
  }
});

// node_modules/atem-connection/dist/commands/Streaming/StreamingStatsCommand.js
var require_StreamingStatsCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Streaming/StreamingStatsCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StreamingStatsUpdateCommand = void 0;
    var enums_1 = require_enums();
    var state_1 = require_state();
    var CommandBase_1 = require_CommandBase();
    var StreamingStatsUpdateCommand = class _StreamingStatsUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(properties) {
        super(properties);
      }
      static deserialize(rawCommand) {
        const props = {
          encodingBitrate: rawCommand.readUInt32BE(0),
          cacheUsed: rawCommand.readUInt16BE(4)
        };
        return new _StreamingStatsUpdateCommand(props);
      }
      applyToState(state) {
        if (!state.streaming) {
          throw new state_1.InvalidIdError("Streaming");
        }
        state.streaming.stats = this.properties;
        return `streaming.stats`;
      }
    };
    exports2.StreamingStatsUpdateCommand = StreamingStatsUpdateCommand;
    StreamingStatsUpdateCommand.rawName = "SRSS";
    StreamingStatsUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
  }
});

// node_modules/atem-connection/dist/commands/Streaming/StreamingStatusCommand.js
var require_StreamingStatusCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Streaming/StreamingStatusCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StreamingStatusUpdateCommand = exports2.StreamingStatusCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var enums_1 = require_enums();
    var StreamingStatusCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(streaming) {
        super({ streaming });
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.properties.streaming ? 1 : 0, 0);
        return buffer;
      }
    };
    exports2.StreamingStatusCommand = StreamingStatusCommand;
    StreamingStatusCommand.rawName = "StrR";
    StreamingStatusCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
    var errorEnumValues = Object.values(enums_1.StreamingError).filter((e) => typeof e === "number");
    var statusEnumValues = Object.values(enums_1.StreamingStatus).filter((e) => typeof e === "number");
    var StreamingStatusUpdateCommand = class _StreamingStatusUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(properties) {
        super(properties);
      }
      static deserialize(rawCommand) {
        const rawStatus = rawCommand.readUInt16BE(0);
        let error = enums_1.StreamingError.None;
        let state = enums_1.StreamingStatus.Idle;
        for (const e of errorEnumValues) {
          if (e !== 0 && (rawStatus & e) === e) {
            error = e;
            break;
          }
        }
        for (const e of statusEnumValues) {
          if ((rawStatus & e) === e) {
            state = e;
            if (e !== enums_1.StreamingStatus.Streaming)
              break;
          }
        }
        return new _StreamingStatusUpdateCommand({ state, error });
      }
      applyToState(state) {
        if (!state.streaming) {
          throw new state_1.InvalidIdError("Streaming");
        }
        state.streaming.status = this.properties;
        return `streaming.status`;
      }
    };
    exports2.StreamingStatusUpdateCommand = StreamingStatusUpdateCommand;
    StreamingStatusUpdateCommand.rawName = "StRS";
    StreamingStatusUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
  }
});

// node_modules/atem-connection/dist/commands/Streaming/StreamingAudioBitratesCommand.js
var require_StreamingAudioBitratesCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/Streaming/StreamingAudioBitratesCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StreamingAudioBitratesCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var enums_1 = require_enums();
    var StreamingAudioBitratesCommand = class _StreamingAudioBitratesCommand extends CommandBase_1.SymmetricalCommand {
      constructor(lowBitrate = 128e3, highBitrate = 192e3) {
        super({ lowBitrate, highBitrate });
      }
      serialize() {
        const buffer = Buffer.alloc(8);
        const lowBitrate = this.properties.lowBitrate || 128e3;
        const highBitrate = this.properties.highBitrate || 192e3;
        buffer.writeUInt32BE(lowBitrate, 0);
        buffer.writeUInt32BE(highBitrate, 4);
        return buffer;
      }
      static deserialize(rawCommand) {
        const lowBitrate = rawCommand.readUInt32BE(0);
        const highBitrate = rawCommand.readUInt32BE(4);
        return new _StreamingAudioBitratesCommand(lowBitrate, highBitrate);
      }
      applyToState(state) {
        const audioBitrates = {
          lowBitrate: this.properties.lowBitrate,
          highBitrate: this.properties.highBitrate
        };
        if (!state.streaming) {
          throw new state_1.InvalidIdError("Streaming");
        } else {
          state.streaming.audioBitrates = audioBitrates;
        }
        return `streaming.audioBitrates`;
      }
    };
    exports2.StreamingAudioBitratesCommand = StreamingAudioBitratesCommand;
    StreamingAudioBitratesCommand.rawName = "STAB";
    StreamingAudioBitratesCommand.minimumVersion = enums_1.ProtocolVersion.V8_1_1;
  }
});

// node_modules/atem-connection/dist/commands/Streaming/index.js
var require_Streaming = __commonJS({
  "node_modules/atem-connection/dist/commands/Streaming/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_StreamingDurationCommand(), exports2);
    tslib_1.__exportStar(require_StreamingServiceCommand(), exports2);
    tslib_1.__exportStar(require_StreamingStatsCommand(), exports2);
    tslib_1.__exportStar(require_StreamingStatusCommand(), exports2);
    tslib_1.__exportStar(require_StreamingAudioBitratesCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/SuperSource/SuperSourceBoxParametersCommand.js
var require_SuperSourceBoxParametersCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/SuperSource/SuperSourceBoxParametersCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SuperSourceBoxParametersUpdateCommand = exports2.SuperSourceBoxParametersCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var enums_1 = require_enums();
    var SuperSourceBoxParametersCommand = class extends CommandBase_1.WritableCommand {
      constructor(ssrcId, boxId) {
        super();
        this.ssrcId = ssrcId;
        this.boxId = boxId;
      }
      serialize(version) {
        const buffer = Buffer.alloc(24);
        let i = 0;
        if (version >= enums_1.ProtocolVersion.V8_0) {
          i = 1;
          buffer.writeUInt8(this.ssrcId, i + 1);
        }
        buffer.writeUInt16BE(this.flag, 0);
        buffer.writeUInt8(this.boxId, i + 2);
        buffer.writeUInt8(this.properties.enabled ? 1 : 0, i + 3);
        if (i === 1)
          i++;
        buffer.writeUInt16BE(this.properties.source || 0, i + 4);
        buffer.writeInt16BE(this.properties.x || 0, i + 6);
        buffer.writeInt16BE(this.properties.y || 0, i + 8);
        buffer.writeUInt16BE(this.properties.size || 0, i + 10);
        buffer.writeUInt8(this.properties.cropped ? 1 : 0, i + 12);
        buffer.writeUInt16BE(this.properties.cropTop || 0, i + 14);
        buffer.writeUInt16BE(this.properties.cropBottom || 0, i + 16);
        buffer.writeUInt16BE(this.properties.cropLeft || 0, i + 18);
        buffer.writeUInt16BE(this.properties.cropRight || 0, i + 20);
        return buffer;
      }
    };
    exports2.SuperSourceBoxParametersCommand = SuperSourceBoxParametersCommand;
    SuperSourceBoxParametersCommand.MaskFlags = {
      enabled: 1 << 0,
      source: 1 << 1,
      x: 1 << 2,
      y: 1 << 3,
      size: 1 << 4,
      cropped: 1 << 5,
      cropTop: 1 << 6,
      cropBottom: 1 << 7,
      cropLeft: 1 << 8,
      cropRight: 1 << 9
    };
    SuperSourceBoxParametersCommand.rawName = "CSBP";
    var SuperSourceBoxParametersUpdateCommand = class _SuperSourceBoxParametersUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(ssrcId, boxId, properties) {
        super(properties);
        this.ssrcId = ssrcId;
        this.boxId = boxId;
      }
      static deserialize(rawCommand, version) {
        let ssrcId = 0;
        let i = 0;
        if (version >= enums_1.ProtocolVersion.V8_0) {
          i = 2;
          ssrcId = rawCommand.readUInt8(0);
        }
        const boxId = rawCommand.readUInt8(i > 0 ? 1 : 0);
        const properties = {
          enabled: rawCommand.readUInt8(i > 0 ? 2 : 1) === 1,
          source: rawCommand.readUInt16BE(i + 2),
          x: rawCommand.readInt16BE(i + 4),
          y: rawCommand.readInt16BE(i + 6),
          size: rawCommand.readUInt16BE(i + 8),
          cropped: rawCommand.readUInt8(i + 10) === 1,
          cropTop: rawCommand.readUInt16BE(i + 12),
          cropBottom: rawCommand.readUInt16BE(i + 14),
          cropLeft: rawCommand.readUInt16BE(i + 16),
          cropRight: rawCommand.readUInt16BE(i + 18)
        };
        return new _SuperSourceBoxParametersUpdateCommand(ssrcId, boxId, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.ssrcId >= state.info.capabilities.superSources) {
          throw new state_1.InvalidIdError("SuperSource", this.ssrcId);
        }
        const supersource = state_1.AtemStateUtil.getSuperSource(state, this.ssrcId);
        supersource.boxes[this.boxId] = {
          ...this.properties
        };
        return `video.superSources.${this.ssrcId}.boxes.${this.boxId}`;
      }
    };
    exports2.SuperSourceBoxParametersUpdateCommand = SuperSourceBoxParametersUpdateCommand;
    SuperSourceBoxParametersUpdateCommand.rawName = "SSBP";
  }
});

// node_modules/atem-connection/dist/commands/SuperSource/SuperSourcePropertiesCommand.js
var require_SuperSourcePropertiesCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/SuperSource/SuperSourcePropertiesCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SuperSourceBorderUpdateCommand = exports2.SuperSourcePropertiesUpdateV8Command = exports2.SuperSourcePropertiesUpdateCommand = exports2.SuperSourceBorderCommand = exports2.SuperSourcePropertiesV8Command = exports2.SuperSourcePropertiesCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var state_1 = require_state();
    var enums_1 = require_enums();
    var SuperSourcePropertiesCommand = class extends CommandBase_1.WritableCommand {
      constructor() {
        super();
      }
      serialize() {
        const buffer = Buffer.alloc(36);
        buffer.writeUInt32BE(this.flag, 0);
        buffer.writeUInt16BE(this.properties.artFillSource || 0, 4);
        buffer.writeUInt16BE(this.properties.artCutSource || 0, 6);
        buffer.writeUInt8(this.properties.artOption || 0, 8);
        buffer.writeUInt8(this.properties.artPreMultiplied ? 1 : 0, 9);
        buffer.writeUInt16BE(this.properties.artClip || 0, 10);
        buffer.writeUInt16BE(this.properties.artGain || 0, 12);
        buffer.writeUInt8(this.properties.artInvertKey ? 1 : 0, 14);
        buffer.writeUInt8(this.properties.borderEnabled ? 1 : 0, 15);
        buffer.writeUInt8(this.properties.borderBevel || 0, 16);
        buffer.writeUInt16BE(this.properties.borderOuterWidth || 0, 18);
        buffer.writeUInt16BE(this.properties.borderInnerWidth || 0, 20);
        buffer.writeUInt8(this.properties.borderOuterSoftness || 0, 22);
        buffer.writeUInt8(this.properties.borderInnerSoftness || 0, 23);
        buffer.writeUInt8(this.properties.borderBevelSoftness || 0, 24);
        buffer.writeUInt8(this.properties.borderBevelPosition || 0, 25);
        buffer.writeUInt16BE(this.properties.borderHue || 0, 26);
        buffer.writeUInt16BE(this.properties.borderSaturation || 0, 28);
        buffer.writeUInt16BE(this.properties.borderLuma || 0, 30);
        buffer.writeUInt16BE(this.properties.borderLightSourceDirection || 0, 32);
        buffer.writeUInt8(this.properties.borderLightSourceAltitude || 0, 34);
        return buffer;
      }
    };
    exports2.SuperSourcePropertiesCommand = SuperSourcePropertiesCommand;
    SuperSourcePropertiesCommand.MaskFlags = {
      artFillSource: 1 << 0,
      artCutSource: 1 << 1,
      artOption: 1 << 2,
      artPreMultiplied: 1 << 3,
      artClip: 1 << 4,
      artGain: 1 << 5,
      artInvertKey: 1 << 6,
      borderEnabled: 1 << 7,
      borderBevel: 1 << 8,
      borderOuterWidth: 1 << 9,
      borderInnerWidth: 1 << 10,
      borderOuterSoftness: 1 << 11,
      borderInnerSoftness: 1 << 12,
      borderBevelSoftness: 1 << 13,
      borderBevelPosition: 1 << 14,
      borderHue: 1 << 15,
      borderSaturation: 1 << 16,
      borderLuma: 1 << 17,
      borderLightSourceDirection: 1 << 18,
      borderLightSourceAltitude: 1 << 19
    };
    SuperSourcePropertiesCommand.rawName = "CSSc";
    var SuperSourcePropertiesV8Command = class extends CommandBase_1.WritableCommand {
      constructor(ssrcId) {
        super();
        this.ssrcId = ssrcId;
      }
      serialize() {
        const buffer = Buffer.alloc(16);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.ssrcId, 1);
        buffer.writeUInt16BE(this.properties.artFillSource || 0, 2);
        buffer.writeUInt16BE(this.properties.artCutSource || 0, 4);
        buffer.writeUInt8(this.properties.artOption || 0, 6);
        buffer.writeUInt8(this.properties.artPreMultiplied ? 1 : 0, 7);
        buffer.writeUInt16BE(this.properties.artClip || 0, 8);
        buffer.writeUInt16BE(this.properties.artGain || 0, 10);
        buffer.writeUInt8(this.properties.artInvertKey ? 1 : 0, 12);
        return buffer;
      }
    };
    exports2.SuperSourcePropertiesV8Command = SuperSourcePropertiesV8Command;
    SuperSourcePropertiesV8Command.MaskFlags = {
      artFillSource: 1 << 0,
      artCutSource: 1 << 1,
      artOption: 1 << 2,
      artPreMultiplied: 1 << 3,
      artClip: 1 << 4,
      artGain: 1 << 5,
      artInvertKey: 1 << 6
    };
    SuperSourcePropertiesV8Command.rawName = "CSSc";
    SuperSourcePropertiesV8Command.minimumVersion = enums_1.ProtocolVersion.V8_0;
    var SuperSourceBorderCommand = class extends CommandBase_1.WritableCommand {
      constructor(ssrcId) {
        super();
        this.ssrcId = ssrcId;
      }
      serialize() {
        const buffer = Buffer.alloc(24);
        buffer.writeUInt16BE(this.flag, 0);
        buffer.writeUInt8(this.ssrcId, 2);
        buffer.writeUInt8(this.properties.borderEnabled ? 1 : 0, 3);
        buffer.writeUInt8(this.properties.borderBevel || 0, 4);
        buffer.writeUInt16BE(this.properties.borderOuterWidth || 0, 6);
        buffer.writeUInt16BE(this.properties.borderInnerWidth || 0, 8);
        buffer.writeUInt8(this.properties.borderOuterSoftness || 0, 10);
        buffer.writeUInt8(this.properties.borderInnerSoftness || 0, 11);
        buffer.writeUInt8(this.properties.borderBevelSoftness || 0, 12);
        buffer.writeUInt8(this.properties.borderBevelPosition || 0, 13);
        buffer.writeUInt16BE(this.properties.borderHue || 0, 14);
        buffer.writeUInt16BE(this.properties.borderSaturation || 0, 16);
        buffer.writeUInt16BE(this.properties.borderLuma || 0, 18);
        buffer.writeUInt16BE(this.properties.borderLightSourceDirection || 0, 20);
        buffer.writeUInt8(this.properties.borderLightSourceAltitude || 0, 22);
        return buffer;
      }
    };
    exports2.SuperSourceBorderCommand = SuperSourceBorderCommand;
    SuperSourceBorderCommand.MaskFlags = {
      borderEnabled: 1 << 0,
      borderBevel: 1 << 1,
      borderOuterWidth: 1 << 2,
      borderInnerWidth: 1 << 3,
      borderOuterSoftness: 1 << 4,
      borderInnerSoftness: 1 << 5,
      borderBevelSoftness: 1 << 6,
      borderBevelPosition: 1 << 7,
      borderHue: 1 << 8,
      borderSaturation: 1 << 9,
      borderLuma: 1 << 10,
      borderLightSourceDirection: 1 << 11,
      borderLightSourceAltitude: 1 << 12
    };
    SuperSourceBorderCommand.rawName = "CSBd";
    SuperSourceBorderCommand.minimumVersion = enums_1.ProtocolVersion.V8_0;
    var SuperSourcePropertiesUpdateCommand = class _SuperSourcePropertiesUpdateCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = {
          properties: {
            artFillSource: rawCommand.readUInt16BE(0),
            artCutSource: rawCommand.readUInt16BE(2),
            artOption: rawCommand.readUInt8(4),
            artPreMultiplied: rawCommand.readUInt8(5) === 1,
            artClip: rawCommand.readUInt16BE(6),
            artGain: rawCommand.readUInt16BE(8),
            artInvertKey: rawCommand.readUInt8(10) === 1
          },
          border: {
            borderEnabled: rawCommand.readUInt8(11) === 1,
            borderBevel: rawCommand.readUInt8(12),
            borderOuterWidth: rawCommand.readUInt16BE(14),
            borderInnerWidth: rawCommand.readUInt16BE(16),
            borderOuterSoftness: rawCommand.readUInt8(18),
            borderInnerSoftness: rawCommand.readUInt8(19),
            borderBevelSoftness: rawCommand.readUInt8(20),
            borderBevelPosition: rawCommand.readUInt8(21),
            borderHue: rawCommand.readUInt16BE(22),
            borderSaturation: rawCommand.readUInt16BE(24),
            borderLuma: rawCommand.readUInt16BE(26),
            borderLightSourceDirection: rawCommand.readUInt16BE(28),
            borderLightSourceAltitude: rawCommand.readUInt8(30)
          }
        };
        return new _SuperSourcePropertiesUpdateCommand(properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || !state.info.capabilities.superSources) {
          throw new state_1.InvalidIdError("SuperSource", 0);
        }
        const supersource = state_1.AtemStateUtil.getSuperSource(state, 0);
        supersource.properties = this.properties.properties;
        supersource.border = this.properties.border;
        return [`video.superSources.0.properties`, `video.superSources.0.border`];
      }
    };
    exports2.SuperSourcePropertiesUpdateCommand = SuperSourcePropertiesUpdateCommand;
    SuperSourcePropertiesUpdateCommand.rawName = "SSrc";
    var SuperSourcePropertiesUpdateV8Command = class _SuperSourcePropertiesUpdateV8Command extends CommandBase_1.DeserializedCommand {
      constructor(ssrcId, properties) {
        super(properties);
        this.ssrcId = ssrcId;
      }
      static deserialize(rawCommand) {
        const ssrcId = rawCommand.readUInt8(0);
        const properties = {
          artFillSource: rawCommand.readUInt16BE(2),
          artCutSource: rawCommand.readUInt16BE(4),
          artOption: rawCommand.readUInt8(6),
          artPreMultiplied: rawCommand.readUInt8(7) === 1,
          artClip: rawCommand.readUInt16BE(8),
          artGain: rawCommand.readUInt16BE(10),
          artInvertKey: rawCommand.readUInt8(12) === 1
        };
        return new _SuperSourcePropertiesUpdateV8Command(ssrcId, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.ssrcId >= state.info.capabilities.superSources) {
          throw new state_1.InvalidIdError("SuperSource", this.ssrcId);
        }
        const supersource = state_1.AtemStateUtil.getSuperSource(state, this.ssrcId);
        supersource.properties = {
          ...this.properties
        };
        return `video.superSources.${this.ssrcId}.properties`;
      }
    };
    exports2.SuperSourcePropertiesUpdateV8Command = SuperSourcePropertiesUpdateV8Command;
    SuperSourcePropertiesUpdateV8Command.rawName = "SSrc";
    SuperSourcePropertiesUpdateV8Command.minimumVersion = enums_1.ProtocolVersion.V8_0;
    var SuperSourceBorderUpdateCommand = class _SuperSourceBorderUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(ssrcId, properties) {
        super(properties);
        this.ssrcId = ssrcId;
      }
      static deserialize(rawCommand) {
        const ssrcId = rawCommand.readUInt8(0);
        const properties = {
          borderEnabled: rawCommand.readUInt8(1) === 1,
          borderBevel: rawCommand.readUInt8(2),
          borderOuterWidth: rawCommand.readUInt16BE(4),
          borderInnerWidth: rawCommand.readUInt16BE(6),
          borderOuterSoftness: rawCommand.readUInt8(8),
          borderInnerSoftness: rawCommand.readUInt8(9),
          borderBevelSoftness: rawCommand.readUInt8(10),
          borderBevelPosition: rawCommand.readUInt8(11),
          borderHue: rawCommand.readUInt16BE(12),
          borderSaturation: rawCommand.readUInt16BE(14),
          borderLuma: rawCommand.readUInt16BE(16),
          borderLightSourceDirection: rawCommand.readUInt16BE(18),
          borderLightSourceAltitude: rawCommand.readUInt8(20)
        };
        return new _SuperSourceBorderUpdateCommand(ssrcId, properties);
      }
      applyToState(state) {
        if (!state.info.capabilities || this.ssrcId >= state.info.capabilities.superSources) {
          throw new state_1.InvalidIdError("SuperSource", this.ssrcId);
        }
        const supersource = state_1.AtemStateUtil.getSuperSource(state, this.ssrcId);
        supersource.border = this.properties;
        return `video.superSources.${this.ssrcId}.border`;
      }
    };
    exports2.SuperSourceBorderUpdateCommand = SuperSourceBorderUpdateCommand;
    SuperSourceBorderUpdateCommand.rawName = "SSBd";
    SuperSourceBorderUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V8_0;
  }
});

// node_modules/atem-connection/dist/commands/SuperSource/index.js
var require_SuperSource = __commonJS({
  "node_modules/atem-connection/dist/commands/SuperSource/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_SuperSourceBoxParametersCommand(), exports2);
    tslib_1.__exportStar(require_SuperSourcePropertiesCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/commands/AuxSourceCommand.js
var require_AuxSourceCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/AuxSourceCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AuxSourceUpdateCommand = exports2.AuxSourceCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var AuxSourceCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(auxBus, source) {
        super({ source });
        this.auxBus = auxBus;
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(1, 0);
        buffer.writeUInt8(this.auxBus, 1);
        buffer.writeUInt16BE(this.properties.source, 2);
        return buffer;
      }
    };
    exports2.AuxSourceCommand = AuxSourceCommand;
    AuxSourceCommand.rawName = "CAuS";
    var AuxSourceUpdateCommand = class _AuxSourceUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(auxBus, properties) {
        super(properties);
        this.auxBus = auxBus;
      }
      static deserialize(rawCommand) {
        const auxBus = rawCommand.readUInt8(0);
        const properties = {
          source: rawCommand.readUInt16BE(2)
        };
        return new _AuxSourceUpdateCommand(auxBus, properties);
      }
      applyToState(state) {
        state.video.auxilliaries[this.auxBus] = this.properties.source;
        return `video.auxilliaries.${this.auxBus}`;
      }
    };
    exports2.AuxSourceUpdateCommand = AuxSourceUpdateCommand;
    AuxSourceUpdateCommand.rawName = "AuxS";
  }
});

// node_modules/atem-connection/dist/commands/CameraControlCommand.js
var require_CameraControlCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/CameraControlCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CameraControlUpdateCommand = exports2.CameraControlCommand = exports2.CameraControlDataType = void 0;
    var enums_1 = require_enums();
    var CommandBase_1 = require_CommandBase();
    var atemUtil_1 = require_atemUtil();
    var CameraControlDataType;
    (function(CameraControlDataType2) {
      CameraControlDataType2[CameraControlDataType2["BOOL"] = 0] = "BOOL";
      CameraControlDataType2[CameraControlDataType2["SINT8"] = 1] = "SINT8";
      CameraControlDataType2[CameraControlDataType2["SINT16"] = 2] = "SINT16";
      CameraControlDataType2[CameraControlDataType2["SINT32"] = 3] = "SINT32";
      CameraControlDataType2[CameraControlDataType2["SINT64"] = 4] = "SINT64";
      CameraControlDataType2[CameraControlDataType2["STRING"] = 5] = "STRING";
      CameraControlDataType2[CameraControlDataType2["FLOAT"] = 128] = "FLOAT";
    })(CameraControlDataType = exports2.CameraControlDataType || (exports2.CameraControlDataType = {}));
    var CameraControlCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor(source, category, parameter, props) {
        super(props);
        this.source = source;
        this.category = category;
        this.parameter = parameter;
      }
      serialize() {
        const headerSize = 16;
        const header8BitPos = 6;
        const header16BitPos = 8;
        const header32BitPos = 10;
        const header64BitPos = 12;
        let buffer;
        switch (this.properties.type) {
          case CameraControlDataType.BOOL: {
            buffer = Buffer.alloc(headerSize + (0, atemUtil_1.padToMultiple)(this.properties.boolData.length, 8));
            buffer.writeUint16BE(this.properties.boolData.length, header8BitPos);
            let offset = headerSize;
            for (let i = 0; i < this.properties.boolData.length; i++) {
              buffer.writeInt8(this.properties.boolData[i] ? 1 : 0, offset);
              offset++;
            }
            break;
          }
          case CameraControlDataType.SINT8: {
            buffer = Buffer.alloc(headerSize + (0, atemUtil_1.padToMultiple)(this.properties.numberData.length, 8));
            buffer.writeUint16BE(this.properties.numberData.length, header8BitPos);
            let offset = headerSize;
            for (let i = 0; i < this.properties.numberData.length; i++) {
              buffer.writeInt8(this.properties.numberData[i], offset);
              offset++;
            }
            break;
          }
          case CameraControlDataType.SINT16: {
            buffer = Buffer.alloc(headerSize + (0, atemUtil_1.padToMultiple)(this.properties.numberData.length * 2, 8));
            buffer.writeUint16BE(this.properties.numberData.length, header16BitPos);
            let offset = headerSize;
            for (let i = 0; i < this.properties.numberData.length; i++) {
              buffer.writeInt16BE(this.properties.numberData[i], offset);
              offset += 2;
            }
            break;
          }
          case CameraControlDataType.SINT32: {
            buffer = Buffer.alloc(headerSize + (0, atemUtil_1.padToMultiple)(this.properties.numberData.length * 4, 8));
            buffer.writeUint16BE(this.properties.numberData.length, header32BitPos);
            let offset = headerSize;
            for (let i = 0; i < this.properties.numberData.length; i++) {
              buffer.writeInt32BE(this.properties.numberData[i], offset);
              offset += 4;
            }
            break;
          }
          case CameraControlDataType.SINT64: {
            buffer = Buffer.alloc(headerSize + (0, atemUtil_1.padToMultiple)(this.properties.bigintData.length * 8, 8));
            buffer.writeUint16BE(this.properties.bigintData.length, header64BitPos);
            let offset = headerSize;
            for (let i = 0; i < this.properties.bigintData.length; i++) {
              buffer.writeBigInt64BE(this.properties.bigintData[i], offset);
              offset += 8;
            }
            break;
          }
          case CameraControlDataType.STRING: {
            buffer = Buffer.alloc(headerSize + (0, atemUtil_1.padToMultiple)(this.properties.stringData.length, 8));
            buffer.writeUint16BE(this.properties.stringData.length, header8BitPos);
            buffer.write(this.properties.stringData, headerSize);
            break;
          }
          case CameraControlDataType.FLOAT: {
            buffer = Buffer.alloc(headerSize + (0, atemUtil_1.padToMultiple)(this.properties.numberData.length * 2, 8));
            buffer.writeUint16BE(this.properties.numberData.length, header16BitPos);
            let offset = headerSize;
            for (const value of this.properties.numberData) {
              buffer.writeInt16BE(value * 2048, offset);
              offset += 2;
            }
            break;
          }
          default:
            (0, atemUtil_1.assertNever)(this.properties.type);
            throw new Error(`Invalid CameraControlDataType: ${this.properties.type}`);
        }
        buffer.writeUInt8(this.source, 0);
        buffer.writeUInt8(this.category, 1);
        buffer.writeUInt8(this.parameter, 2);
        buffer.writeUInt8(this.properties.relative ? 1 : 0, 3);
        buffer.writeUInt8(this.properties.type, 4);
        return buffer;
      }
    };
    exports2.CameraControlCommand = CameraControlCommand;
    CameraControlCommand.rawName = "CCmd";
    CameraControlCommand.minimumVersion = enums_1.ProtocolVersion.V7_2;
    var CameraControlUpdateCommand = class _CameraControlUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(source, category, parameter, props) {
        super(props);
        this.source = source;
        this.category = category;
        this.parameter = parameter;
      }
      static deserialize(rawCommand) {
        const source = rawCommand.readUint8(0);
        const category = rawCommand.readUint8(1);
        const parameter = rawCommand.readUint8(2);
        const type = rawCommand.readUint8(3);
        const headerSize = 16;
        const count8Bit = rawCommand.readUint16BE(4);
        const count16Bit = rawCommand.readUint16BE(6);
        const count32Bit = rawCommand.readUint16BE(8);
        const count64Bit = rawCommand.readUint16BE(10);
        const props = {
          type,
          boolData: [],
          numberData: [],
          bigintData: [],
          stringData: "",
          periodicFlushEnabled: rawCommand.readUint8(12) > 0
        };
        let offset = headerSize;
        switch (type) {
          case CameraControlDataType.BOOL: {
            for (let i = 0; i < count8Bit; i++) {
              props.boolData.push(rawCommand.readInt8(offset) > 0);
              offset += 1;
            }
            break;
          }
          case CameraControlDataType.SINT8: {
            for (let i = 0; i < count8Bit; i++) {
              props.numberData.push(rawCommand.readInt8(offset));
              offset += 1;
            }
            break;
          }
          case CameraControlDataType.SINT16: {
            for (let i = 0; i < count16Bit; i++) {
              props.numberData.push(rawCommand.readInt16BE(offset));
              offset += 2;
            }
            break;
          }
          case CameraControlDataType.SINT32: {
            for (let i = 0; i < count32Bit; i++) {
              props.numberData.push(rawCommand.readInt32BE(offset));
              offset += 4;
            }
            break;
          }
          case CameraControlDataType.SINT64: {
            for (let i = 0; i < count64Bit; i++) {
              props.bigintData.push(rawCommand.readBigInt64BE(offset));
              offset += 8;
            }
            break;
          }
          case CameraControlDataType.STRING: {
            props.stringData = rawCommand.toString(void 0, offset, offset + count8Bit);
            break;
          }
          case CameraControlDataType.FLOAT: {
            for (let i = 0; i < count16Bit; i++) {
              const decodedValue = rawCommand.readInt16BE(offset);
              props.numberData.push(decodedValue / 2048);
              offset += 2;
            }
            break;
          }
          default:
            (0, atemUtil_1.assertNever)(type);
            throw new Error(`Invalid CameraControlDataType: ${type}`);
        }
        return new _CameraControlUpdateCommand(source, category, parameter, props);
      }
      applyToState(_state) {
        return [];
      }
    };
    exports2.CameraControlUpdateCommand = CameraControlUpdateCommand;
    CameraControlUpdateCommand.rawName = "CCdP";
    CameraControlUpdateCommand.minimumVersion = enums_1.ProtocolVersion.V7_2;
  }
});

// node_modules/atem-connection/dist/commands/ColorGeneratorCommand.js
var require_ColorGeneratorCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/ColorGeneratorCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ColorGeneratorUpdateCommand = exports2.ColorGeneratorCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var ColorGeneratorCommand = class extends CommandBase_1.WritableCommand {
      constructor(index) {
        super();
        this.index = index;
      }
      serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.flag, 0);
        buffer.writeUInt8(this.index, 1);
        buffer.writeUInt16BE(this.properties.hue || 0, 2);
        buffer.writeUInt16BE(this.properties.saturation || 0, 4);
        buffer.writeUInt16BE(this.properties.luma || 0, 6);
        return buffer;
      }
    };
    exports2.ColorGeneratorCommand = ColorGeneratorCommand;
    ColorGeneratorCommand.MaskFlags = {
      hue: 1 << 0,
      saturation: 1 << 1,
      luma: 1 << 2
    };
    ColorGeneratorCommand.rawName = "CClV";
    var ColorGeneratorUpdateCommand = class _ColorGeneratorUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(index, properties) {
        super(properties);
        this.index = index;
      }
      static deserialize(rawCommand) {
        const auxBus = rawCommand.readUInt8(0);
        const properties = {
          hue: rawCommand.readUInt16BE(2),
          saturation: rawCommand.readUInt16BE(4),
          luma: rawCommand.readUInt16BE(6)
        };
        return new _ColorGeneratorUpdateCommand(auxBus, properties);
      }
      applyToState(state) {
        if (!state.colorGenerators)
          state.colorGenerators = {};
        state.colorGenerators[this.index] = this.properties;
        return `colorGenerators.${this.index}`;
      }
    };
    exports2.ColorGeneratorUpdateCommand = ColorGeneratorUpdateCommand;
    ColorGeneratorUpdateCommand.rawName = "ColV";
  }
});

// node_modules/atem-connection/dist/commands/InitCompleteCommand.js
var require_InitCompleteCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/InitCompleteCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InitCompleteCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var InitCompleteCommand = class _InitCompleteCommand extends CommandBase_1.DeserializedCommand {
      constructor() {
        super(null);
      }
      static deserialize() {
        return new _InitCompleteCommand();
      }
      applyToState() {
        return `info`;
      }
    };
    exports2.InitCompleteCommand = InitCompleteCommand;
    InitCompleteCommand.rawName = "InCm";
  }
});

// node_modules/atem-connection/dist/commands/PowerStatusCommand.js
var require_PowerStatusCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/PowerStatusCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PowerStatusCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var PowerStatusCommand = class _PowerStatusCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const properties = [Boolean(rawCommand.readUInt8(0) & 1 << 0), Boolean(rawCommand.readUInt8(0) & 1 << 1)];
        return new _PowerStatusCommand(properties);
      }
      applyToState(state) {
        const count = state.info.power.length;
        state.info.power = this.properties.slice(0, count);
        return `info.power`;
      }
    };
    exports2.PowerStatusCommand = PowerStatusCommand;
    PowerStatusCommand.rawName = "Powr";
  }
});

// node_modules/atem-connection/dist/commands/StartupStateCommand.js
var require_StartupStateCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/StartupStateCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StartupStateClearCommand = exports2.StartupStateSaveCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var StartupStateSaveCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor() {
        super({});
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        return buffer;
      }
    };
    exports2.StartupStateSaveCommand = StartupStateSaveCommand;
    StartupStateSaveCommand.rawName = "SRsv";
    var StartupStateClearCommand = class extends CommandBase_1.BasicWritableCommand {
      constructor() {
        super({});
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        return buffer;
      }
    };
    exports2.StartupStateClearCommand = StartupStateClearCommand;
    StartupStateClearCommand.rawName = "SRcl";
  }
});

// node_modules/atem-connection/dist/commands/TallyBySourceCommand.js
var require_TallyBySourceCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/TallyBySourceCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TallyBySourceCommand = void 0;
    var CommandBase_1 = require_CommandBase();
    var TallyBySourceCommand = class _TallyBySourceCommand extends CommandBase_1.DeserializedCommand {
      static deserialize(rawCommand) {
        const sourceCount = rawCommand.readUInt16BE(0);
        const sources = {};
        for (let i = 0; i < sourceCount; i++) {
          const source = rawCommand.readUInt16BE(2 + i * 3);
          const value = rawCommand.readUInt8(4 + i * 3);
          sources[source] = {
            program: (value & 1) > 0,
            preview: (value & 2) > 0
          };
        }
        return new _TallyBySourceCommand(sources);
      }
      applyToState(_state) {
        return [];
      }
    };
    exports2.TallyBySourceCommand = TallyBySourceCommand;
    TallyBySourceCommand.rawName = "TlSr";
  }
});

// node_modules/atem-connection/dist/commands/TimeCommand.js
var require_TimeCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/TimeCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TimeRequestCommand = exports2.TimeCommand = void 0;
    var Enums = require_enums();
    var _1 = require_commands();
    var CommandBase_1 = require_CommandBase();
    var TimeCommand = class _TimeCommand extends CommandBase_1.SymmetricalCommand {
      constructor(properties) {
        super({
          dropFrame: false,
          ...properties
        });
      }
      serialize() {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt8(this.properties.hour, 0);
        buffer.writeUInt8(this.properties.minute, 1);
        buffer.writeUInt8(this.properties.second, 2);
        buffer.writeUInt8(this.properties.frame, 3);
        buffer.writeUInt8(this.properties.dropFrame ? 1 : 0, 5);
        return buffer;
      }
      static deserialize(rawCommand) {
        const properties = {
          hour: rawCommand.readUInt8(0),
          minute: rawCommand.readUInt8(1),
          second: rawCommand.readUInt8(2),
          frame: rawCommand.readUInt8(3),
          // Byte 4 looks to be a field marker
          dropFrame: rawCommand.readUInt8(5) === 1
        };
        return new _TimeCommand(properties);
      }
      applyToState() {
        return [];
      }
    };
    exports2.TimeCommand = TimeCommand;
    TimeCommand.rawName = "Time";
    var TimeRequestCommand = class extends _1.BasicWritableCommand {
      constructor() {
        super(null);
      }
      serialize() {
        const buffer = Buffer.alloc(0);
        return buffer;
      }
    };
    exports2.TimeRequestCommand = TimeRequestCommand;
    TimeRequestCommand.rawName = "TiRq";
    TimeRequestCommand.minimumVersion = Enums.ProtocolVersion.V8_0;
  }
});

// node_modules/atem-connection/dist/commands/TimeConfigCommand.js
var require_TimeConfigCommand = __commonJS({
  "node_modules/atem-connection/dist/commands/TimeConfigCommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TimeConfigUpdateCommand = exports2.TimeConfigCommand = void 0;
    var Enums = require_enums();
    var _1 = require_commands();
    var CommandBase_1 = require_CommandBase();
    var TimeConfigCommand = class extends _1.BasicWritableCommand {
      constructor(mode) {
        super({ mode });
      }
      serialize() {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt8(this.properties.mode, 0);
        return buffer;
      }
    };
    exports2.TimeConfigCommand = TimeConfigCommand;
    TimeConfigCommand.rawName = "CTCC";
    TimeConfigCommand.minimumVersion = Enums.ProtocolVersion.V8_1_1;
    var TimeConfigUpdateCommand = class _TimeConfigUpdateCommand extends CommandBase_1.DeserializedCommand {
      constructor(mode) {
        super({ mode });
      }
      static deserialize(rawCommand) {
        const mode = rawCommand.readUInt8(0);
        return new _TimeConfigUpdateCommand(mode);
      }
      applyToState(state) {
        state.settings.timeMode = this.properties.mode;
        return "settings.timeMode";
      }
    };
    exports2.TimeConfigUpdateCommand = TimeConfigUpdateCommand;
    TimeConfigUpdateCommand.rawName = "TCCc";
    TimeConfigUpdateCommand.minimumVersion = Enums.ProtocolVersion.V8_1_1;
  }
});

// node_modules/atem-connection/dist/commands/index.js
var require_commands = __commonJS({
  "node_modules/atem-connection/dist/commands/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_Audio(), exports2);
    tslib_1.__exportStar(require_DataTransfer(), exports2);
    tslib_1.__exportStar(require_DeviceProfile(), exports2);
    tslib_1.__exportStar(require_DisplayClock(), exports2);
    tslib_1.__exportStar(require_DownstreamKey(), exports2);
    tslib_1.__exportStar(require_Fairlight(), exports2);
    tslib_1.__exportStar(require_Inputs(), exports2);
    tslib_1.__exportStar(require_Macro(), exports2);
    tslib_1.__exportStar(require_Media(), exports2);
    tslib_1.__exportStar(require_MixEffects(), exports2);
    tslib_1.__exportStar(require_Recording(), exports2);
    tslib_1.__exportStar(require_Settings(), exports2);
    tslib_1.__exportStar(require_Streaming(), exports2);
    tslib_1.__exportStar(require_SuperSource(), exports2);
    tslib_1.__exportStar(require_CommandBase(), exports2);
    tslib_1.__exportStar(require_AuxSourceCommand(), exports2);
    tslib_1.__exportStar(require_CameraControlCommand(), exports2);
    tslib_1.__exportStar(require_ColorGeneratorCommand(), exports2);
    tslib_1.__exportStar(require_InitCompleteCommand(), exports2);
    tslib_1.__exportStar(require_PowerStatusCommand(), exports2);
    tslib_1.__exportStar(require_StartupStateCommand(), exports2);
    tslib_1.__exportStar(require_TallyBySourceCommand(), exports2);
    tslib_1.__exportStar(require_TimeCommand(), exports2);
    tslib_1.__exportStar(require_TimeConfigCommand(), exports2);
  }
});

// node_modules/atem-connection/dist/lib/atemCommandParser.js
var require_atemCommandParser = __commonJS({
  "node_modules/atem-connection/dist/lib/atemCommandParser.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CommandParser = void 0;
    var Commands2 = require_commands();
    var enums_1 = require_enums();
    var CommandParser = class {
      constructor() {
        this.commands = {};
        this.version = enums_1.ProtocolVersion.V7_2;
        for (const cmd in Commands2) {
          try {
            const cmdConstructor = Commands2[cmd];
            const rawName = cmdConstructor.rawName;
            if (rawName) {
              if (!this.commands[rawName])
                this.commands[rawName] = [];
              this.commands[rawName].push(cmdConstructor);
            }
          } catch (e) {
          }
        }
      }
      commandFromRawName(name) {
        const commands = this.commands[name];
        if (commands) {
          if (!this.version) {
            return commands[0];
          } else {
            const baseline = commands.find((cmd) => !cmd.minimumVersion);
            const overrides = commands.filter((cmd) => cmd.minimumVersion && cmd.minimumVersion <= this.version);
            if (overrides.length === 0)
              return baseline;
            let highestProtoCommand = overrides[0];
            for (const cmd of overrides) {
              if (highestProtoCommand.minimumVersion && cmd.minimumVersion && cmd.minimumVersion > highestProtoCommand.minimumVersion) {
                highestProtoCommand = cmd;
              }
            }
            return highestProtoCommand;
          }
        }
        return void 0;
      }
    };
    exports2.CommandParser = CommandParser;
  }
});

// node_modules/exit-hook/index.js
var require_exit_hook = __commonJS({
  "node_modules/exit-hook/index.js"(exports2, module2) {
    "use strict";
    var callbacks = /* @__PURE__ */ new Set();
    var isCalled = false;
    var isRegistered = false;
    function exit(exit2, signal) {
      if (isCalled) {
        return;
      }
      isCalled = true;
      for (const callback of callbacks) {
        callback();
      }
      if (exit2 === true) {
        process.exit(128 + signal);
      }
    }
    module2.exports = (callback) => {
      callbacks.add(callback);
      if (!isRegistered) {
        isRegistered = true;
        process.once("exit", exit);
        process.once("SIGINT", exit.bind(null, true, 2));
        process.once("SIGTERM", exit.bind(null, true, 15));
        process.on("message", (message) => {
          if (message === "shutdown") {
            exit(true, -128);
          }
        });
      }
      return () => {
        callbacks.delete(callback);
      };
    };
  }
});

// node_modules/threadedclass/node_modules/tslib/tslib.es6.js
var tslib_es6_exports2 = {};
__export(tslib_es6_exports2, {
  __assign: () => __assign2,
  __asyncDelegator: () => __asyncDelegator2,
  __asyncGenerator: () => __asyncGenerator2,
  __asyncValues: () => __asyncValues2,
  __await: () => __await2,
  __awaiter: () => __awaiter2,
  __classPrivateFieldGet: () => __classPrivateFieldGet2,
  __classPrivateFieldSet: () => __classPrivateFieldSet2,
  __createBinding: () => __createBinding2,
  __decorate: () => __decorate2,
  __exportStar: () => __exportStar2,
  __extends: () => __extends2,
  __generator: () => __generator2,
  __importDefault: () => __importDefault2,
  __importStar: () => __importStar2,
  __makeTemplateObject: () => __makeTemplateObject2,
  __metadata: () => __metadata2,
  __param: () => __param2,
  __read: () => __read2,
  __rest: () => __rest2,
  __spread: () => __spread2,
  __spreadArrays: () => __spreadArrays2,
  __values: () => __values2
});
function __extends2(d, b) {
  extendStatics2(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest2(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate2(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param2(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata2(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter2(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator2(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f2) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f2 = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding2(o, m2, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m2[k];
}
function __exportStar2(m2, exports2) {
  for (var p in m2) if (p !== "default" && !exports2.hasOwnProperty(p)) exports2[p] = m2[p];
}
function __values2(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o[s], i = 0;
  if (m2) return m2.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read2(o, n) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2) return o;
  var i = m2.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m2 = i["return"])) m2.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread2() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read2(arguments[i]));
  return ar;
}
function __spreadArrays2() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __await2(v) {
  return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
}
function __asyncGenerator2(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function(v) {
      return new Promise(function(a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f2, v) {
    if (f2(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator2(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f2) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f2 ? f2(v) : v;
    } : f2;
  }
}
function __asyncValues2(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m2 = o[Symbol.asyncIterator], i;
  return m2 ? m2.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject2(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar2(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result.default = mod;
  return result;
}
function __importDefault2(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet2(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet2(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics2, __assign2;
var init_tslib_es62 = __esm({
  "node_modules/threadedclass/node_modules/tslib/tslib.es6.js"() {
    extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    __assign2 = function() {
      __assign2 = Object.assign || function __assign3(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign2.apply(this, arguments);
    };
  }
});

// node_modules/threadedclass/dist/shared/sharedApi.js
var require_sharedApi = __commonJS({
  "node_modules/threadedclass/dist/shared/sharedApi.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decodeArguments = exports2.encodeArguments = exports2.Message = exports2.InitPropType = exports2.DEFAULT_AUTO_RESTART_RETRY_DELAY = exports2.DEFAULT_AUTO_RESTART_RETRY_COUNT = exports2.DEFAULT_KILL_TIMEOUT = exports2.DEFAULT_RESTART_TIMEOUT = exports2.DEFAULT_CHILD_FREEZE_TIME = void 0;
    exports2.DEFAULT_CHILD_FREEZE_TIME = 1e3;
    exports2.DEFAULT_RESTART_TIMEOUT = 1e3;
    exports2.DEFAULT_KILL_TIMEOUT = 1e3;
    exports2.DEFAULT_AUTO_RESTART_RETRY_COUNT = 1;
    exports2.DEFAULT_AUTO_RESTART_RETRY_DELAY = 1e3;
    var InitPropType;
    (function(InitPropType2) {
      InitPropType2["FUNCTION"] = "function";
      InitPropType2["VALUE"] = "value";
    })(InitPropType = exports2.InitPropType || (exports2.InitPropType = {}));
    var Message;
    (function(Message2) {
      let To;
      (function(To2) {
        let Instance;
        (function(Instance2) {
          let CommandType;
          (function(CommandType2) {
            CommandType2["INIT"] = "init";
            CommandType2["PING"] = "ping";
            CommandType2["FUNCTION"] = "fcn";
            CommandType2["REPLY"] = "reply";
            CommandType2["SET"] = "set";
            CommandType2["KILL"] = "kill";
            CommandType2["CALLBACK"] = "callback";
          })(CommandType = Instance2.CommandType || (Instance2.CommandType = {}));
        })(Instance = To2.Instance || (To2.Instance = {}));
        let Child;
        (function(Child2) {
          let CommandType;
          (function(CommandType2) {
            CommandType2["GET_MEM_USAGE"] = "get_mem_usage";
            CommandType2["REPLY"] = "reply";
          })(CommandType = Child2.CommandType || (Child2.CommandType = {}));
        })(Child = To2.Child || (To2.Child = {}));
      })(To = Message2.To || (Message2.To = {}));
      let From;
      (function(From2) {
        let Instance;
        (function(Instance2) {
          let CommandType;
          (function(CommandType2) {
            CommandType2["CALLBACK"] = "callback";
            CommandType2["REPLY"] = "reply";
          })(CommandType = Instance2.CommandType || (Instance2.CommandType = {}));
        })(Instance = From2.Instance || (From2.Instance = {}));
        let Child;
        (function(Child2) {
          let CommandType;
          (function(CommandType2) {
            CommandType2["LOG"] = "log";
            CommandType2["REPLY"] = "reply";
          })(CommandType = Child2.CommandType || (Child2.CommandType = {}));
        })(Child = From2.Child || (From2.Child = {}));
      })(From = Message2.From || (Message2.From = {}));
    })(Message = exports2.Message || (exports2.Message = {}));
    var ArgumentType;
    (function(ArgumentType2) {
      ArgumentType2["STRING"] = "string";
      ArgumentType2["NUMBER"] = "number";
      ArgumentType2["UNDEFINED"] = "undefined";
      ArgumentType2["NULL"] = "null";
      ArgumentType2["OBJECT"] = "object";
      ArgumentType2["FUNCTION"] = "function";
      ArgumentType2["BUFFER"] = "buffer";
      ArgumentType2["OTHER"] = "other";
    })(ArgumentType || (ArgumentType = {}));
    var argumentsCallbackId = 0;
    function encodeArguments(instance2, callbacks, args2, disabledMultithreading) {
      try {
        return args2.map((arg, i) => {
          try {
            if (typeof arg === "object" && arg === instance2) {
              return { type: ArgumentType.OBJECT, value: "self" };
            }
            if (disabledMultithreading) {
              if (arg instanceof Buffer)
                return { type: ArgumentType.BUFFER, original: arg, value: null };
              if (typeof arg === "object")
                return { type: ArgumentType.OBJECT, original: arg, value: null };
            }
            if (arg instanceof Buffer)
              return { type: ArgumentType.BUFFER, value: arg.toString("hex") };
            if (typeof arg === "string")
              return { type: ArgumentType.STRING, value: arg };
            if (typeof arg === "number")
              return { type: ArgumentType.NUMBER, value: arg };
            if (typeof arg === "function") {
              for (const id in callbacks) {
                if (callbacks[id] === arg) {
                  return { type: ArgumentType.FUNCTION, value: id + "" };
                }
              }
              const callbackId = argumentsCallbackId++;
              callbacks[callbackId + ""] = arg;
              return { type: ArgumentType.FUNCTION, value: callbackId + "" };
            }
            if (arg === void 0)
              return { type: ArgumentType.UNDEFINED, value: arg };
            if (arg === null)
              return { type: ArgumentType.NULL, value: arg };
            if (typeof arg === "object")
              return { type: ArgumentType.OBJECT, value: arg };
            return { type: ArgumentType.OTHER, value: arg };
          } catch (e) {
            if (e.stack)
              e.stack += "\nIn encodeArguments, argument " + i;
            throw e;
          }
        });
      } catch (e) {
        if (e.stack)
          e.stack += "\nThreadedClass, unsupported attribute";
        throw e;
      }
    }
    exports2.encodeArguments = encodeArguments;
    function decodeArguments(instance2, args2, getCallback) {
      return args2.map((a) => {
        if (a.original !== void 0)
          return a.original;
        if (a.type === ArgumentType.STRING)
          return a.value;
        if (a.type === ArgumentType.NUMBER)
          return a.value;
        if (a.type === ArgumentType.BUFFER)
          return Buffer.from(a.value, "hex");
        if (a.type === ArgumentType.UNDEFINED)
          return a.value;
        if (a.type === ArgumentType.NULL)
          return a.value;
        if (a.type === ArgumentType.FUNCTION) {
          return getCallback(a);
        }
        if (a.type === ArgumentType.OBJECT) {
          if (a.value === "self") {
            return instance2();
          } else {
            return a.value;
          }
        }
        return a.value;
      });
    }
    exports2.decodeArguments = decodeArguments;
  }
});

// node_modules/threadedclass/dist/api.js
var require_api = __commonJS({
  "node_modules/threadedclass/dist/api.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.KillTimeoutError = exports2.RestartTimeoutError = void 0;
    var RestartTimeoutError = class extends Error {
      constructor() {
        super(...arguments);
        this.name = "RestartTimeoutError";
      }
    };
    exports2.RestartTimeoutError = RestartTimeoutError;
    var KillTimeoutError = class extends Error {
      constructor() {
        super(...arguments);
        this.name = "KillTimeoutError";
      }
    };
    exports2.KillTimeoutError = KillTimeoutError;
  }
});

// node_modules/threadedclass/dist/shared/lib.js
var require_lib = __commonJS({
  "node_modules/threadedclass/dist/shared/lib.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ArrayMap = exports2.combineErrorStacks = exports2.stripStack = exports2.getErrorStack = exports2.assertNever = exports2.getWorkerThreads = exports2.nodeSupportsWorkerThreads = exports2.browserSupportsWebWorkers = exports2.isBrowser = void 0;
    function isBrowser() {
      return !(process && process.hasOwnProperty("stdin"));
    }
    exports2.isBrowser = isBrowser;
    function browserSupportsWebWorkers() {
      return !!(isBrowser() && window.Worker);
    }
    exports2.browserSupportsWebWorkers = browserSupportsWebWorkers;
    function nodeSupportsWorkerThreads() {
      const workerThreads = getWorkerThreads();
      return !!workerThreads;
    }
    exports2.nodeSupportsWorkerThreads = nodeSupportsWorkerThreads;
    function getWorkerThreads() {
      try {
        const workerThreads = require("worker_threads");
        return workerThreads;
      } catch (e) {
        return null;
      }
    }
    exports2.getWorkerThreads = getWorkerThreads;
    function assertNever(_value) {
    }
    exports2.assertNever = assertNever;
    function getErrorStack(err) {
      if (typeof err === "object") {
        const stack = err.stack;
        if (stack)
          return stack;
        return `${err}`;
      } else {
        return `${err}`;
      }
    }
    exports2.getErrorStack = getErrorStack;
    function stripStack(stack, matchLines) {
      if (!stack)
        return stack;
      const stackLines = stack.split("\n");
      let matchIndex = -1;
      for (let i = 0; i < stackLines.length; i++) {
        let matching = false;
        for (const line of matchLines) {
          if (stackLines[i] && stackLines[i].match(line)) {
            if (matchIndex === -1)
              matchIndex = i;
            matching = true;
            i += 1;
          } else {
            matching = false;
            break;
          }
        }
        if (matching) {
          return stackLines.slice(0, matchIndex).join("\n");
        }
      }
      return stack;
    }
    exports2.stripStack = stripStack;
    function combineErrorStacks(orgError, ...stacks) {
      if (typeof orgError === "object") {
        const err = new Error(orgError.message);
        err.stack = combineErrorStacks(`${orgError.stack}`, ...stacks);
        return err;
      } else {
        return orgError + "\n" + stacks.join("\n");
      }
    }
    exports2.combineErrorStacks = combineErrorStacks;
    var ArrayMap = class extends Map {
      constructor() {
        super();
      }
      /** Appends new elements to the end of an array, and returns the new length of the array.  */
      push(key, value) {
        const arr = this.get(key);
        if (!arr) {
          this.set(key, [value]);
          return 1;
        } else {
          arr.push(value);
          return arr.length;
        }
      }
      /** Removes an element from the array, returns true if the element was found and removed */
      remove(key, value) {
        let removedSomething = false;
        const arr = this.get(key);
        if (arr) {
          const index = arr.indexOf(value);
          if (index !== -1) {
            arr.splice(index, 1);
            removedSomething = true;
          }
          if (arr.length === 0) {
            this.delete(key);
          }
        }
        return removedSomething;
      }
      arraySize(key) {
        var _a, _b;
        return (_b = (_a = this.get(key)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
      }
      /** The total number of elements in all of the arrays  */
      get totalSize() {
        let total = 0;
        for (const arr of this.values()) {
          total += arr.length;
        }
        return total;
      }
    };
    exports2.ArrayMap = ArrayMap;
  }
});

// node_modules/threadedclass/dist/parent-process/workerPlatform/_base.js
var require_base = __commonJS({
  "node_modules/threadedclass/dist/parent-process/workerPlatform/_base.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkerPlatformBase = void 0;
    var eventemitter3_1 = require_eventemitter3();
    var WorkerPlatformBase = class extends eventemitter3_1.EventEmitter {
      constructor() {
        super(...arguments);
        this._isFakeProcess = false;
      }
      get isFakeProcess() {
        return this._isFakeProcess;
      }
    };
    exports2.WorkerPlatformBase = WorkerPlatformBase;
  }
});

// node_modules/threadedclass/dist/parent-process/workerPlatform/webWorkers.js
var require_webWorkers = __commonJS({
  "node_modules/threadedclass/dist/parent-process/workerPlatform/webWorkers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.forkWebWorker = exports2.WebWorkerProcess = void 0;
    var _base_1 = require_base();
    var WebWorkerProcess = class extends _base_1.WorkerPlatformBase {
      constructor(pathToWorker) {
        super();
        try {
          this.worker = new window.Worker(pathToWorker);
          this.worker.onmessage = (message) => {
            if (message.type === "message") {
              this.emit("message", message.data);
            } else
              console.log("unknown message type", message);
          };
          this.worker.onmessageerror = (error) => {
            this.emit("error", error);
          };
          this.worker.onerror = (error) => {
            this.emit("error", error);
          };
        } catch (error) {
          let str = (error.stack || error).toString() + "";
          if (str.match(/cannot be accessed from origin/) && str.match(/file:\/\//)) {
            throw Error("Unable to create Web-Worker. Not allowed to run from local file system.\n" + str);
          } else {
            throw error;
          }
        }
      }
      kill() {
        this.worker.terminate();
        this.emit("close");
      }
      send(message) {
        this.worker.postMessage(message);
      }
    };
    exports2.WebWorkerProcess = WebWorkerProcess;
    function forkWebWorker(pathToWorker) {
      return new WebWorkerProcess(pathToWorker);
    }
    exports2.forkWebWorker = forkWebWorker;
  }
});

// node_modules/threadedclass/dist/parent-process/workerPlatform/workerThreads.js
var require_workerThreads = __commonJS({
  "node_modules/threadedclass/dist/parent-process/workerPlatform/workerThreads.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.forkWorkerThread = exports2.WorkerThread = void 0;
    var lib_12 = require_lib();
    var _base_1 = require_base();
    var WorkerThreads = (0, lib_12.getWorkerThreads)();
    var WorkerThread = class extends _base_1.WorkerPlatformBase {
      constructor(pathToWorker) {
        super();
        if (!WorkerThreads)
          throw new Error("Unable to create Worker thread! Not supported!");
        this.worker = new WorkerThreads.Worker(pathToWorker, {
          workerData: ""
        });
        this.worker.on("message", (message) => {
          this.emit("message", message);
        });
        this.worker.on("messageerror", (error) => {
          this.emit("error", error);
        });
        this.worker.on("error", (error) => {
          this.emit("error", error);
        });
        this.worker.on("exit", (_code) => {
          this.emit("close");
        });
        this.worker.on("close", () => {
          this.emit("close");
        });
      }
      kill() {
        const p = this.worker.terminate();
        if (p) {
          p.then(() => {
            this.emit("close");
          }).catch((err) => {
            console.error("Worker Thread terminate failed", err);
          });
        } else {
          this.emit("close");
        }
      }
      send(message) {
        this.worker.postMessage(message);
      }
    };
    exports2.WorkerThread = WorkerThread;
    function forkWorkerThread(pathToWorker) {
      return new WorkerThread(pathToWorker);
    }
    exports2.forkWorkerThread = forkWorkerThread;
  }
});

// node_modules/threadedclass/dist/parent-process/workerPlatform/childProcess.js
var require_childProcess = __commonJS({
  "node_modules/threadedclass/dist/parent-process/workerPlatform/childProcess.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.forkChildProcess = exports2.ChildProcessWorker = void 0;
    var child_process_1 = require("child_process");
    var _base_1 = require_base();
    var ChildProcessWorker = class extends _base_1.WorkerPlatformBase {
      constructor(path) {
        super();
        this.worker = (0, child_process_1.fork)(path);
        this.worker.on("message", (m2) => this.emit("message", m2));
        this.worker.on("close", () => this.emit("close"));
        this.worker.on("error", (e) => this.emit("error", e));
      }
      kill() {
        this.worker.kill();
      }
      send(m2) {
        this.worker.send(m2);
      }
    };
    exports2.ChildProcessWorker = ChildProcessWorker;
    function forkChildProcess(pathToWorker) {
      return new ChildProcessWorker(pathToWorker);
    }
    exports2.forkChildProcess = forkChildProcess;
  }
});

// node_modules/is-running/index.js
var require_is_running = __commonJS({
  "node_modules/is-running/index.js"(exports2, module2) {
    module2.exports = function(pid) {
      if (module2.exports.stub !== module2.exports) {
        return module2.exports.stub.apply(this, arguments);
      }
      try {
        return process.kill(pid, 0);
      } catch (e) {
        return e.code === "EPERM";
      }
    };
    module2.exports.stub = module2.exports;
  }
});

// node_modules/threadedclass/dist/child-process/worker.js
var require_worker = __commonJS({
  "node_modules/threadedclass/dist/child-process/worker.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Worker = void 0;
    var isRunning = require_is_running();
    var lib_1 = require_lib();
    var sharedApi_1 = require_sharedApi();
    var Worker = class {
      constructor() {
        this.childHandler = {
          cmdId: 0,
          queue: {}
        };
        this.instanceHandles = {};
        this.callbacks = {};
        this.remoteFns = {};
        this.disabledMultithreading = false;
        this._parentPid = 0;
        this.log = (...data) => {
          this.sendLog(data);
        };
        this.logError = (...data) => {
          this.sendLog(["Error", ...data]);
        };
      }
      onMessageFromParent(m2) {
        if (m2.messageType === "instance") {
          let handle2 = this.instanceHandles[m2.instanceId];
          if (!handle2 && m2.cmd !== sharedApi_1.Message.To.Instance.CommandType.INIT) {
            console.log(`Child process: Unknown instanceId: "${m2.instanceId}"`);
            return;
          }
          if (!handle2) {
            handle2 = {
              id: m2.instanceId,
              cmdId: 0,
              queue: {},
              instance: {}
            };
          }
          try {
            this.handleInstanceMessageFromParent(m2, handle2);
          } catch (e) {
            if (m2.cmdId) {
              this.replyInstanceError(handle2, m2, `Error: ${e.toString()} ${e.stack} thrown in handleInstanceMessageFromParent on instance "${m2.instanceId}"`);
            } else
              this.log("Error: " + e.toString(), e.stack);
          }
        } else if (m2.messageType === "child") {
          let handle2 = this.childHandler;
          try {
            this.handleChildMessageFromParent(m2, handle2);
          } catch (e) {
            if (m2.cmdId) {
              this.replyChildError(handle2, m2, `Error: ${e.toString()} ${e.stack} thrown in handleChildMessageFromParent on child`);
            } else
              this.log("Error: " + e.toString(), e.stack);
          }
        }
      }
      decodeArgumentsFromParent(handle2, args2) {
        return (0, sharedApi_1.decodeArguments)(() => handle2.instance, args2, (a) => {
          const callbackId = a.value;
          if (!this.remoteFns[callbackId]) {
            this.remoteFns[callbackId] = ((...args3) => {
              const orgError = new Error();
              return new Promise((resolve, reject) => {
                const callbackId2 = a.value;
                this.sendCallback(handle2, callbackId2, args3, (err, encodedResult) => {
                  if (err) {
                    const errStack = (0, lib_1.stripStack)((0, lib_1.getErrorStack)(err), [
                      /[\\/]parent-process[\\/]manager/,
                      /[\\/]eventemitter3[\\/]index/
                    ]);
                    const orgStack = (orgError.stack + "").split("\n").slice(2).join("\n");
                    reject((0, lib_1.combineErrorStacks)(errStack, orgStack));
                  } else {
                    const result = encodedResult ? this.decodeArgumentsFromParent(handle2, [encodedResult]) : [encodedResult];
                    resolve(result[0]);
                  }
                });
              });
            });
          }
          return this.remoteFns[callbackId];
        });
      }
      encodeArgumentsToParent(instance2, args2) {
        return (0, sharedApi_1.encodeArguments)(instance2, this.callbacks, args2, this.disabledMultithreading);
      }
      replyToInstanceMessage(handle2, messageToReplyTo, reply) {
        this.sendInstanceReplyToParent(handle2, messageToReplyTo.cmdId, void 0, reply);
      }
      replyToChildMessage(handle2, messageToReplyTo, reply) {
        this.sendChildReplyToParent(handle2, messageToReplyTo.cmdId, void 0, reply);
      }
      replyInstanceError(handle2, messageToReplyTo, error) {
        this.sendInstanceReplyToParent(handle2, messageToReplyTo.cmdId, error);
      }
      replyChildError(handle2, messageToReplyTo, error) {
        this.sendChildReplyToParent(handle2, messageToReplyTo.cmdId, error);
      }
      sendInstanceReplyToParent(handle2, replyTo, error, reply) {
        let msg2 = {
          cmd: sharedApi_1.Message.From.Instance.CommandType.REPLY,
          replyTo,
          error: error ? (error.stack || error).toString() : error,
          reply
        };
        this.sendInstanceMessageToParent(handle2, msg2);
      }
      sendChildReplyToParent(handle2, replyTo, error, reply) {
        let msg2 = {
          cmd: sharedApi_1.Message.From.Child.CommandType.REPLY,
          replyTo,
          error: error ? (error.stack || error).toString() : error,
          reply
        };
        this.sendChildMessageToParent(handle2, msg2);
      }
      sendLog(log) {
        let msg2 = {
          cmd: sharedApi_1.Message.From.Child.CommandType.LOG,
          log
        };
        this.sendChildMessageToParent(this.childHandler, msg2);
      }
      sendCallback(handle2, callbackId, args2, cb) {
        let msg2 = {
          cmd: sharedApi_1.Message.From.Instance.CommandType.CALLBACK,
          callbackId,
          args: args2
        };
        this.sendInstanceMessageToParent(handle2, msg2, cb);
      }
      getAllProperties(obj) {
        let props = [];
        do {
          props = props.concat(Object.getOwnPropertyNames(obj));
          obj = Object.getPrototypeOf(obj);
        } while (obj);
        return props;
      }
      handleInstanceMessageFromParent(m, handle) {
        const instance = handle.instance;
        if (m.cmd === sharedApi_1.Message.To.Instance.CommandType.INIT) {
          const msg = m;
          this._config = m.config;
          this._parentPid = m.parentPid;
          let pModuleClass;
          if ((0, lib_1.isBrowser)()) {
            pModuleClass = new Promise((resolve, reject) => {
              let oReq = new XMLHttpRequest();
              oReq.open("GET", msg.modulePath, true);
              oReq.onload = () => {
                if (oReq.response) {
                  resolve(oReq.response);
                } else {
                  reject(Error(`Bad reply from ${msg.modulePath} in instance ${handle.id}`));
                }
              };
              oReq.send();
            }).then((bodyString) => {
              var f = null;
              let fcn = `
						f = function() {
							${bodyString}
							;
							return ${msg.exportName}
						}
					`;
              let moduleClass = eval(fcn)();
              f = f;
              if (!moduleClass) {
                throw Error(`${msg.exportName} not found in ${msg.modulePath}`);
              }
              return moduleClass;
            });
          } else {
            pModuleClass = Promise.resolve(require(msg.modulePath)).then((module2) => {
              return module2[msg.exportName];
            });
          }
          pModuleClass.then((moduleClass2) => {
            if (!moduleClass2) {
              return Promise.reject("Failed to find class");
            }
            const handle2 = {
              id: msg.instanceId,
              cmdId: 0,
              queue: {},
              instance: null
              // Note: This is dangerous, but gets set right after.
            };
            const decodedArgs = this.decodeArgumentsFromParent(handle2, msg.args);
            handle2.instance = ((...args2) => {
              return new moduleClass2(...args2);
            }).apply(null, decodedArgs);
            this.instanceHandles[handle2.id] = handle2;
            const instance2 = handle2.instance;
            const allProps = this.getAllProperties(instance2);
            const props = [];
            allProps.forEach((prop) => {
              if ([
                "constructor",
                "__defineGetter__",
                "__defineSetter__",
                "hasOwnProperty",
                "__lookupGetter__",
                "__lookupSetter__",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toString",
                "valueOf",
                "__proto__",
                "toLocaleString"
              ].indexOf(prop) !== -1)
                return;
              let descriptor = Object.getOwnPropertyDescriptor(instance2, prop);
              let inProto = 0;
              let proto = instance2.__proto__;
              while (!descriptor) {
                if (!proto)
                  break;
                descriptor = Object.getOwnPropertyDescriptor(proto, prop);
                inProto++;
                proto = proto.__proto__;
              }
              if (!descriptor)
                descriptor = {};
              let descr = {
                // configurable:	!!descriptor.configurable,
                inProto,
                enumerable: !!descriptor.enumerable,
                writable: !!descriptor.writable,
                get: !!descriptor.get,
                set: !!descriptor.set,
                readable: !!(!descriptor.get && !descriptor.get)
                // if no getter or setter, ie an ordinary property
              };
              if (typeof instance2[prop] === "function") {
                props.push({
                  key: prop,
                  type: sharedApi_1.InitPropType.FUNCTION,
                  descriptor: descr
                });
              } else {
                props.push({
                  key: prop,
                  type: sharedApi_1.InitPropType.VALUE,
                  descriptor: descr
                });
              }
            });
            this.replyToInstanceMessage(handle2, msg, props);
            return;
          }).catch((err) => {
            const errStack = (0, lib_1.stripStack)(err.stack || err.toString(), [
              /onMessageFromParent/,
              /threadedclass-worker/
            ]);
            let errorResponse = `${errStack}
 executing constructor of instance "${m.instanceId}"`;
            this.replyInstanceError(handle, msg, errorResponse);
            return;
          });
          if (!m.config.disableMultithreading && !(0, lib_1.nodeSupportsWorkerThreads)()) {
            this.startOrphanMonitoring();
          }
        } else if (m.cmd === sharedApi_1.Message.To.Instance.CommandType.PING) {
          this.replyToInstanceMessage(handle, m, null);
        } else if (m.cmd === sharedApi_1.Message.To.Instance.CommandType.REPLY) {
          const msg2 = m;
          let cb = handle.queue[msg2.replyTo + ""];
          if (!cb)
            throw Error(`cmdId "${msg2.cmdId}" not found in instance ${m.instanceId}!`);
          if (msg2.error) {
            cb.cb(msg2.error);
          } else {
            cb.cb(null, msg2.reply);
          }
          delete handle.queue[msg2.replyTo + ""];
        } else if (m.cmd === sharedApi_1.Message.To.Instance.CommandType.FUNCTION) {
          let msg2 = m;
          const fixedArgs = this.decodeArgumentsFromParent(handle, msg2.args);
          let p;
          try {
            if (typeof instance[msg2.fcn] === "function") {
              p = instance[msg2.fcn](...fixedArgs);
            } else {
              p = instance[msg2.fcn];
            }
          } catch (error) {
            p = Promise.reject(error);
          }
          Promise.resolve(p).then((result) => {
            const encodedResult = this.encodeArgumentsToParent(instance, [result]);
            this.replyToInstanceMessage(handle, msg2, encodedResult[0]);
          }).catch((err) => {
            const errStack = (0, lib_1.stripStack)(err.stack || err.toString(), [
              /onMessageFromParent/,
              /threadedclass-worker/
            ]);
            let errorResponse = `${errStack}
 executing function "${msg2.fcn}" of instance "${m.instanceId}"`;
            this.replyInstanceError(handle, msg2, errorResponse);
          });
        } else if (m.cmd === sharedApi_1.Message.To.Instance.CommandType.SET) {
          let msg2 = m;
          const fixedValue = this.decodeArgumentsFromParent(handle, [msg2.value])[0];
          instance[msg2.property] = fixedValue;
          const encodedResult = this.encodeArgumentsToParent(instance, [fixedValue]);
          this.replyToInstanceMessage(handle, msg2, encodedResult[0]);
        } else if (m.cmd === sharedApi_1.Message.To.Instance.CommandType.KILL) {
          let msg2 = m;
          this.killInstance(handle);
          this.replyToInstanceMessage(handle, msg2, null);
        } else if (m.cmd === sharedApi_1.Message.To.Instance.CommandType.CALLBACK) {
          let msg2 = m;
          let callback = this.callbacks[msg2.callbackId];
          if (callback) {
            try {
              Promise.resolve(callback(...msg2.args)).then((result) => {
                const encodedResult = this.encodeArgumentsToParent(instance, [result]);
                this.replyToInstanceMessage(handle, msg2, encodedResult[0]);
              }).catch((err) => {
                let errorResponse = (err.stack || err.toString()) + `
 executing callback of instance "${m.instanceId}"`;
                this.replyInstanceError(handle, msg2, errorResponse);
              });
            } catch (err) {
              let errorResponse = (err.stack || err.toString()) + `
 executing (outer) callback of instance "${m.instanceId}"`;
              this.replyInstanceError(handle, msg2, errorResponse);
            }
          } else {
            this.replyInstanceError(handle, msg2, `Callback "${msg2.callbackId}" not found on instance "${m.instanceId}"`);
          }
        } else {
          (0, lib_1.assertNever)(m);
        }
      }
      handleChildMessageFromParent(m2, handle2) {
        if (m2.cmd === sharedApi_1.Message.To.Child.CommandType.GET_MEM_USAGE) {
          let memUsage = process ? process.memoryUsage() : (
            // @ts-ignore web-worker global window
            window ? (
              // @ts-ignore web-worker global window
              window.performance.memory
            ) : { error: "N/A" }
          );
          const encodedResult = this.encodeArgumentsToParent({}, [memUsage])[0];
          this.replyToChildMessage(handle2, m2, encodedResult);
        }
      }
      startOrphanMonitoring() {
        if (this._config) {
          const pingTime = 5e3;
          setInterval(() => {
            if (this._parentPid && !isRunning(this._parentPid)) {
              console.log(`Parent pid ${this._parentPid} missing, exiting process!`);
              setTimeout(() => {
                process.exit(27);
              }, 100);
            }
          }, pingTime);
        }
      }
    };
    exports.Worker = Worker;
  }
});

// node_modules/threadedclass/dist/child-process/fake-worker.js
var require_fake_worker = __commonJS({
  "node_modules/threadedclass/dist/child-process/fake-worker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FakeWorker = void 0;
    var worker_1 = require_worker();
    var FakeWorker = class extends worker_1.Worker {
      constructor(cb) {
        super();
        this.disabledMultithreading = true;
        this.mockProcessSend = cb;
      }
      killInstance() {
      }
      sendInstanceMessageToParent(handle2, msg2, cb) {
        const message = Object.assign(Object.assign({}, msg2), {
          messageType: "instance",
          cmdId: handle2.cmdId++,
          instanceId: handle2.id
        });
        if (cb)
          handle2.queue[message.cmdId + ""] = { cb };
        this.mockProcessSend(message);
      }
      sendChildMessageToParent(handle2, msg2, cb) {
        const message = Object.assign(Object.assign({}, msg2), {
          messageType: "child",
          cmdId: handle2.cmdId++
        });
        if (cb)
          handle2.queue[message.cmdId + ""] = { cb };
        this.mockProcessSend(message);
      }
    };
    exports2.FakeWorker = FakeWorker;
  }
});

// node_modules/threadedclass/dist/parent-process/workerPlatform/fakeWorker.js
var require_fakeWorker = __commonJS({
  "node_modules/threadedclass/dist/parent-process/workerPlatform/fakeWorker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FakeProcess = void 0;
    var _base_1 = require_base();
    var fake_worker_1 = require_fake_worker();
    var FakeProcess = class extends _base_1.WorkerPlatformBase {
      constructor() {
        super();
        this._isFakeProcess = true;
        this.worker = new fake_worker_1.FakeWorker((m2) => {
          this.emit("message", m2);
        });
      }
      kill() {
        this.emit("close");
      }
      send(m2) {
        this.worker.onMessageFromParent(m2);
      }
    };
    exports2.FakeProcess = FakeProcess;
  }
});

// node_modules/threadedclass/dist/parent-process/manager.js
var require_manager = __commonJS({
  "node_modules/threadedclass/dist/parent-process/manager.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ThreadedClassManager = exports2.ThreadedClassManagerInternal = exports2.ThreadMode = exports2.ThreadedClassManagerClassInternal = exports2.childName = exports2.ThreadedClassManagerClass = exports2.RegisterExitHandlers = void 0;
    var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
    var sharedApi_12 = require_sharedApi();
    var api_1 = require_api();
    var lib_12 = require_lib();
    var webWorkers_1 = require_webWorkers();
    var workerThreads_1 = require_workerThreads();
    var childProcess_1 = require_childProcess();
    var fakeWorker_1 = require_fakeWorker();
    var RegisterExitHandlers;
    (function(RegisterExitHandlers2) {
      RegisterExitHandlers2[RegisterExitHandlers2["AUTO"] = -1] = "AUTO";
      RegisterExitHandlers2[RegisterExitHandlers2["YES"] = 1] = "YES";
      RegisterExitHandlers2[RegisterExitHandlers2["NO"] = 0] = "NO";
    })(RegisterExitHandlers = exports2.RegisterExitHandlers || (exports2.RegisterExitHandlers = {}));
    var ThreadedClassManagerClass = class {
      constructor(internal) {
        this._internal = internal;
      }
      /** Enable debug messages */
      set debug(v) {
        this._internal.debug = v;
      }
      get debug() {
        return this._internal.debug;
      }
      /**
       * Enable strict mode.
       * When strict mode is enabled, checks will be done to ensure that best-practices are followed (such as listening to the proper events, etc).
       * Warnings will be output to the console if strict mode is enabled.
       */
      set strict(v) {
        this._internal.strict = v;
      }
      get strict() {
        return this._internal.strict;
      }
      /** Whether to register exit handlers. If not, then the application should ensure the threads are aborted on process exit */
      set handleExit(v) {
        this._internal.handleExit = v;
      }
      get handleExit() {
        return this._internal.handleExit;
      }
      /** Destroy a proxy class instance */
      destroy(proxy) {
        return this._internal.killProxy(proxy);
      }
      /** Destroys all proxy instances and closes all threads */
      destroyAll() {
        return this._internal.killAllChildren();
      }
      /** Returns the number of threads */
      getThreadCount() {
        return this._internal.getChildrenCount();
      }
      /** Returns memory usage for each thread */
      getThreadsMemoryUsage() {
        return this._internal.getMemoryUsage();
      }
      onEvent(proxy, event, cb) {
        return this._internal.onProxyEvent(proxy, event, cb);
      }
      /**
       * Restart the thread of the proxy instance
       * @param proxy
       * @param forceRestart If true, will kill the thread and restart it. If false, will only restart the thread if it is already dead.
       */
      restart(proxy, forceRestart) {
        return this._internal.restart(proxy, forceRestart);
      }
      /**
       * Returns a description of what threading mode the library will use in the current context.
       */
      getThreadMode() {
        if ((0, lib_12.isBrowser)()) {
          if ((0, lib_12.browserSupportsWebWorkers)()) {
            return ThreadMode.WEB_WORKER;
          } else {
            return ThreadMode.NOT_SUPPORTED;
          }
        } else {
          if ((0, lib_12.nodeSupportsWorkerThreads)()) {
            return ThreadMode.WORKER_THREADS;
          } else {
            return ThreadMode.CHILD_PROCESS;
          }
        }
      }
    };
    exports2.ThreadedClassManagerClass = ThreadedClassManagerClass;
    function childName(child) {
      return `Child_ ${Object.keys(child.instances).join(",")}`;
    }
    exports2.childName = childName;
    var ThreadedClassManagerClassInternal = class {
      constructor() {
        this.handleExit = RegisterExitHandlers.AUTO;
        this.isInitialized = false;
        this._threadId = 0;
        this._instanceId = 0;
        this._methodId = 0;
        this._children = {};
        this._pinging = true;
        this.debug = false;
        this.strict = false;
        this.uniqueId = Date.now() % 1e4;
        this._proxyEventListeners = /* @__PURE__ */ new Map();
        this._childInitializedListeners = new lib_12.ArrayMap();
      }
      findNextAvailableChild(config, pathToWorker) {
        this._init();
        let child = null;
        if (config.threadId) {
          child = this._children[config.threadId] || null;
        } else if (config.threadUsage) {
          child = this._findFreeChild(config.threadUsage);
        }
        if (!child) {
          const newChild = {
            id: config.threadId || `process_${this.uniqueId}_${this._threadId++}`,
            isNamed: !!config.threadId,
            pathToWorker,
            process: this._createFork(config, pathToWorker),
            usage: config.threadUsage || 1,
            instances: {},
            methods: {},
            alive: true,
            isClosing: false,
            config,
            autoRestartFailCount: 0,
            autoRestartRetryTimeout: void 0,
            cmdId: 0,
            instanceMessageQueue: {},
            childMessageQueue: {},
            callbackId: 0,
            callbacks: {}
          };
          this._setupChildProcess(newChild);
          this._children[newChild.id] = newChild;
          child = newChild;
          this.debugLog(`New child: "${newChild.id}"`);
        }
        return child;
      }
      /**
       * Attach a proxy-instance to a child
       * @param child
       * @param proxy
       * @param onInstanceMessage
       */
      attachInstanceToChild(config, child, proxy, pathToModule, exportName, constructorArgs, onInstanceMessage) {
        const instance2 = {
          id: `instance_${this.uniqueId}_${this._instanceId++}` + (config.instanceName ? `_${config.instanceName}` : ""),
          child,
          proxy,
          usage: config.threadUsage,
          freezeLimit: config.freezeLimit,
          onMessageCallback: onInstanceMessage,
          pathToModule,
          exportName,
          constructorArgs,
          initialized: false,
          config
        };
        child.instances[instance2.id] = instance2;
        this.debugLog(`Add instance "${instance2.id}" to "${child.id}"`);
        return instance2;
      }
      killProxy(proxy) {
        return new Promise((resolve, reject) => {
          let foundProxy = false;
          for (const childId of Object.keys(this._children)) {
            const child = this._children[childId];
            const instanceId = this.findProxyInstanceOfChild(child, proxy);
            if (instanceId) {
              let instance2 = child.instances[instanceId];
              foundProxy = true;
              if (Object.keys(child.instances).length === 1) {
                this.killChild(childId, "no instances left").then(resolve).catch(reject);
              } else {
                const cleanup = () => {
                  delete child.instances[instanceId];
                };
                this.sendMessageToInstance(instance2, {
                  cmd: sharedApi_12.Message.To.Instance.CommandType.KILL
                }, () => {
                  cleanup();
                  resolve();
                });
                setTimeout(() => {
                  cleanup();
                  reject("Timeout: Kill child instance");
                }, 1e3);
                if (instance2.usage) {
                  child.usage -= instance2.usage;
                }
              }
              break;
            }
          }
          if (!foundProxy) {
            reject("killProxy: Proxy not found");
          }
        });
      }
      sendMessageToInstance(instance2, messageConstr, cb) {
        try {
          if (!instance2.child)
            throw new Error(`Instance ${instance2.id} has been detached from child process`);
          if (!instance2.child.alive)
            throw new Error(`Child process of instance ${instance2.id} has been closed`);
          if (instance2.child.isClosing)
            throw new Error(`Child process of instance ${instance2.id} is closing`);
          const message = Object.assign(Object.assign({}, messageConstr), {
            messageType: "instance",
            cmdId: instance2.child.cmdId++,
            instanceId: instance2.id
          });
          if (message.cmd !== sharedApi_12.Message.To.Instance.CommandType.INIT && !instance2.initialized)
            throw Error(`Child instance ${instance2.id} is not initialized`);
          if (cb)
            instance2.child.instanceMessageQueue[message.cmdId + ""] = cb;
          try {
            instance2.child.process.send(message);
          } catch (e) {
            delete instance2.child.instanceMessageQueue[message.cmdId + ""];
            if ((e.toString() || "").match(/circular structure/)) {
              throw new Error(`Unsupported attribute (circular structure) in instance ${instance2.id}: ` + e.toString());
            } else {
              throw e;
            }
          }
        } catch (e) {
          if (cb)
            cb(instance2, (e.stack || e).toString());
          else
            throw e;
        }
      }
      sendMessageToChild(child, messageConstr, cb) {
        try {
          if (!child.alive)
            throw new Error(`Child process ${child.id} has been closed`);
          if (child.isClosing)
            throw new Error(`Child process  ${child.id} is closing`);
          const message = Object.assign(Object.assign({}, messageConstr), {
            messageType: "child",
            cmdId: child.cmdId++
          });
          if (cb)
            child.childMessageQueue[message.cmdId + ""] = cb;
          try {
            child.process.send(message);
          } catch (e) {
            delete child.childMessageQueue[message.cmdId + ""];
            if ((e.toString() || "").match(/circular structure/)) {
              throw new Error(`Unsupported attribute (circular structure) in child ${child.id}: ` + e.toString());
            } else {
              throw e;
            }
          }
        } catch (e) {
          if (cb)
            cb((e.stack || e).toString());
          else
            throw e;
        }
      }
      getChildrenCount() {
        return Object.keys(this._children).length;
      }
      getMemoryUsage() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
          const memUsage = {};
          yield Promise.all(Object.keys(this._children).map((childId) => {
            return new Promise((resolve) => {
              const child = this._children[childId];
              this.sendMessageToChild(child, {
                cmd: sharedApi_12.Message.To.Child.CommandType.GET_MEM_USAGE
              }, (err, result0) => {
                const result = result0 && (0, sharedApi_12.decodeArguments)(() => null, [result0], () => (() => Promise.resolve()))[0];
                const o = Object.assign(Object.assign({}, err ? { error: err.toString() } : result ? result : { error: "unknown" }), { description: this.getChildDescriptor(child) });
                memUsage[childId] = o;
                resolve();
              });
            });
          }));
          return memUsage;
        });
      }
      killAllChildren() {
        return Promise.all(Object.keys(this._children).map((id) => {
          const child = this._children[id];
          this.debugLog(`Killing child "${this.getChildDescriptor(child)}"`);
          return this.killChild(id, "killAllChildren");
        })).then(() => {
          return;
        });
      }
      /** Restart the thread of a proxy instance */
      restart(proxy, forceRestart) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
          let foundInstance;
          let foundChild;
          for (const child of Object.values(this._children)) {
            const foundInstanceId = this.findProxyInstanceOfChild(child, proxy);
            if (foundInstanceId) {
              foundInstance = child.instances[foundInstanceId];
              foundChild = child;
              break;
            }
          }
          if (!foundChild)
            throw Error(`Child of proxy not found`);
          if (!foundInstance)
            throw Error(`Instance of proxy not found`);
          yield this.restartChild(foundChild, [foundInstance], forceRestart);
        });
      }
      restartChild(child, onlyInstances, forceRestart) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
          if (child.alive && forceRestart) {
            yield this.killChild(child, "restart child", false);
          }
          this.clearRestartTimeout(child);
          if (!child.alive) {
            child.process.removeAllListeners();
            Object.keys(child.instances).forEach((instanceId) => {
              const instance2 = child.instances[instanceId];
              instance2.initialized = false;
            });
            child.alive = true;
            child.isClosing = false;
            child.process = this._createFork(child.config, child.pathToWorker);
            this._setupChildProcess(child);
          }
          let p = new Promise((resolve, reject) => {
            var _a;
            let timeout;
            if (child.config.restartTimeout !== 0) {
              const restartTimeout = (_a = child.config.restartTimeout) !== null && _a !== void 0 ? _a : sharedApi_12.DEFAULT_RESTART_TIMEOUT;
              timeout = setTimeout(() => {
                reject(new api_1.RestartTimeoutError(`Timeout when trying to restart after ${restartTimeout}`));
                this._childInitializedListeners.remove(child.id, onInit);
              }, restartTimeout);
            }
            const onInit = () => {
              if (timeout)
                clearTimeout(timeout);
              resolve();
              this._childInitializedListeners.remove(child.id, onInit);
            };
            this._childInitializedListeners.push(child.id, onInit);
          });
          const promises = [p];
          let instances = onlyInstances || Object.keys(child.instances).map((instanceId) => {
            return child.instances[instanceId];
          });
          instances.forEach((instance2) => {
            promises.push(new Promise((resolve, reject) => {
              this.sendInit(child, instance2, instance2.config, (_instance, err) => {
                if (err) {
                  reject(err);
                } else {
                  resolve();
                }
                return true;
              });
            }));
          });
          yield Promise.all(promises);
        });
      }
      canRetryRestart(child) {
        var _a;
        const autoRestartRetryCount = (_a = child.config.autoRestartRetryCount) !== null && _a !== void 0 ? _a : sharedApi_12.DEFAULT_AUTO_RESTART_RETRY_COUNT;
        if (autoRestartRetryCount === 0)
          return true;
        return child.autoRestartFailCount < autoRestartRetryCount;
      }
      sendInit(child, instance2, config, cb) {
        let encodedArgs = (0, sharedApi_12.encodeArguments)(instance2, instance2.child.callbacks, instance2.constructorArgs, !!config.disableMultithreading);
        let msg2 = {
          cmd: sharedApi_12.Message.To.Instance.CommandType.INIT,
          modulePath: instance2.pathToModule,
          exportName: instance2.exportName,
          args: encodedArgs,
          config,
          parentPid: process.pid
        };
        instance2.initialized = true;
        exports2.ThreadedClassManagerInternal.sendMessageToInstance(instance2, msg2, (instance3, e, initProps) => {
          if (!cb || cb(instance3, e, initProps)) {
            const listeners = this._childInitializedListeners.get(child.id);
            if (listeners) {
              for (const listener of listeners) {
                listener();
              }
            }
          }
        });
      }
      startMonitoringChild(instance2) {
        var _a;
        const pingTime = (_a = instance2.freezeLimit) !== null && _a !== void 0 ? _a : sharedApi_12.DEFAULT_CHILD_FREEZE_TIME;
        if (pingTime === 0)
          return;
        const monitorChild = () => {
          if (instance2.child && instance2.child.alive && this._pinging) {
            this._pingChild(instance2, pingTime).then(() => {
              setTimeout(() => {
                monitorChild();
              }, pingTime);
            }).catch(() => {
              if (instance2.child && instance2.child.alive && !instance2.child.isClosing) {
                this._childHasCrashed(instance2.child, `Child process ("${this.getChildDescriptor(instance2.child)}") of instance ${instance2.id} ping timeout`);
              }
            });
          }
        };
        setTimeout(() => {
          monitorChild();
        }, pingTime);
      }
      doMethod(child, methodName, cb) {
        const methodId = "m" + this._methodId++;
        const p = new Promise((resolve, reject) => {
          child.methods[methodId] = { methodName, resolve, reject };
          cb(resolve, reject);
        }).then((result) => {
          delete child.methods[methodId];
          return result;
        }).catch((error) => {
          delete child.methods[methodId];
          throw error;
        });
        return p;
      }
      getChildDescriptor(child) {
        return `${child.id} (${Object.keys(child.instances).join(", ")})`;
      }
      checkInstance(instance2, errStack) {
        if (!this.strict)
          return;
        const getStack = () => {
          return `${errStack.stack}`.split("\n").slice(2).join("\n");
        };
        setTimeout(() => {
          const events = this._proxyEventListeners.get(instance2.proxy);
          if (!events || events.arraySize("error") === 0) {
            this.consoleLog(`Warning: No listener for the 'error' event was registered,
Solve this by adding
ThreadedClassManager.onEvent(instance, 'error', (error) => {})
${getStack()}`);
          }
          if (!events || events.arraySize("warning") === 0) {
            this.consoleLog(`Warning: No listener for the 'warning' event was registered,
Solve this by adding
ThreadedClassManager.onEvent(instance, 'warning', (warning) => {})
${getStack()}`);
          }
          if (!instance2.config.autoRestart) {
            if (!events || events.arraySize("thread_closed") === 0) {
              this.consoleLog(`Warning: autoRestart is disabled and no listener for the 'thread_closed' event was registered.
Solve this by either set {autoRestart: true} in threadedClass() options, or set up an event listener to handle a restart:
use ThreadedClassManager.onEvent(instance, 'thread_closed', () => {})
at ${getStack()}`);
            }
          } else {
            if (!events || events.arraySize("restarted") === 0) {
              this.consoleLog(`Warning: No listener for the 'restarted' event was registered.
It is recommended to set up an event listener for this, so you are aware of that an instance has been restarted:
use ThreadedClassManager.onEvent(instance, 'restarted', () => {})
${getStack()}`);
            }
          }
        }, 1);
      }
      onProxyEvent(proxy, event, cb) {
        let events = this._proxyEventListeners.get(proxy);
        if (!events)
          events = new lib_12.ArrayMap();
        events.push(event, cb);
        this._proxyEventListeners.set(proxy, events);
        return {
          stop: () => {
            const events2 = this._proxyEventListeners.get(proxy);
            if (!events2)
              return;
            events2.remove(event, cb);
            if (events2.size > 0) {
              this._proxyEventListeners.set(proxy, events2);
            } else {
              this._proxyEventListeners.delete(proxy);
            }
          }
        };
      }
      _emitProxyEvent(child, event, ...args2) {
        for (const instance2 of Object.values(child.instances)) {
          const events = this._proxyEventListeners.get(instance2.proxy);
          if (events) {
            const listeners = events.get(event);
            if (listeners) {
              for (const listener of listeners) {
                try {
                  listener(...args2);
                } catch (err) {
                  this.consoleLog(`Error in event listener for "${event}":`, err);
                }
              }
            }
          }
        }
      }
      /** Called before using internally */
      _init() {
        if (!this.isInitialized && !(0, lib_12.isBrowser)()) {
          let registerExitHandlers;
          switch (this.handleExit) {
            case RegisterExitHandlers.YES:
              registerExitHandlers = true;
              break;
            case RegisterExitHandlers.AUTO:
              if (process.listenerCount("exit") === 0 || process.listenerCount("uncaughtException") === 0 || process.listenerCount("unhandledRejection") === 0) {
                this.consoleLog("Skipping exit handler registration as no exit handler is registered");
                registerExitHandlers = false;
              } else {
                registerExitHandlers = true;
              }
              break;
            default:
              registerExitHandlers = false;
          }
          if (registerExitHandlers) {
            process.stdin.resume();
            const onSignal = (signal, message) => {
              let msg2 = `Signal "${signal}" event`;
              if (message)
                msg2 += ", " + message;
              if (process.listenerCount(signal) === 1) {
                console.error(msg2);
              } else {
                if (this.debug)
                  this.consoleLog(msg2);
              }
              this.killAllChildren().catch(this.consoleError);
              process.exit();
            };
            process.on("exit", (code) => onSignal("exit", `exit code: ${code}`));
            process.on("SIGINT", () => onSignal("SIGINT"));
            process.on("SIGHUP", () => onSignal("SIGHUP"));
            process.on("SIGTERM", () => onSignal("SIGTERM"));
            process.on("SIGUSR1", () => onSignal("SIGUSR1"));
            process.on("SIGUSR2", () => onSignal("SIGUSR2"));
            process.on("uncaughtException", (message) => onSignal("uncaughtException", message.toString()));
            process.on("unhandledRejection", (message) => onSignal("unhandledRejection", message ? message.toString() : void 0));
          }
        }
        this.isInitialized = true;
      }
      _pingChild(instance2, timeoutTime) {
        return new Promise((resolve, reject) => {
          let msg2 = {
            cmd: sharedApi_12.Message.To.Instance.CommandType.PING
          };
          const timeout = setTimeout(() => {
            reject();
          }, timeoutTime);
          exports2.ThreadedClassManagerInternal.sendMessageToInstance(instance2, msg2, (_instance, err) => {
            clearTimeout(timeout);
            if (!err) {
              resolve();
            } else {
              this.consoleError(err);
              reject(err);
            }
          });
        });
      }
      _childHasCrashed(child, reason) {
        this.rejectChildMethods(child, reason);
        if (!child.isClosing) {
          let shouldRestart = false;
          const restartInstances = [];
          Object.keys(child.instances).forEach((instanceId) => {
            const instance2 = child.instances[instanceId];
            if (instance2.config.autoRestart) {
              shouldRestart = true;
              restartInstances.push(instance2);
            }
          });
          if (shouldRestart) {
            this.restartChild(child, restartInstances, true).then(() => {
              child.autoRestartFailCount = 0;
              this._emitProxyEvent(child, "restarted");
            }).catch((err) => {
              child.autoRestartFailCount++;
              if (this.canRetryRestart(child)) {
                this._emitProxyEvent(child, "warning", `Error when restarting child, trying again... Original error: ${err}`);
                this.killChild(child, "error when restarting", false).catch((e) => {
                  this.consoleError(`Could not kill child: "${child.id}"`, e);
                }).then(() => {
                  var _a;
                  const autoRestartRetryDelay = (_a = child.config.autoRestartRetryDelay) !== null && _a !== void 0 ? _a : sharedApi_12.DEFAULT_AUTO_RESTART_RETRY_DELAY;
                  child.autoRestartRetryTimeout = setTimeout(() => {
                    this._childHasCrashed(child, `restart failed`);
                  }, autoRestartRetryDelay);
                }).catch((e) => {
                  this.consoleError(`Unknown error: "${child.id}"`, e);
                });
              } else {
                this._emitProxyEvent(child, "error", err);
                this.debugLogError("Error when running restartChild()", err);
                this.killChild(child, "timeout when restarting", true).catch((e) => {
                  this.consoleError(`Could not kill child: "${child.id}"`, e);
                });
              }
            });
          } else {
            if (child.alive) {
              this.killChild(child, `child has crashed (${reason})`, false).catch((err) => {
                this._emitProxyEvent(child, "error", err);
                this.debugLogError("Error when running killChild()", err);
              });
            }
          }
        }
      }
      clearRestartTimeout(child) {
        if (child.autoRestartRetryTimeout !== void 0) {
          clearTimeout(child.autoRestartRetryTimeout);
          child.autoRestartRetryTimeout = void 0;
        }
      }
      _createFork(config, pathToWorker) {
        if (config.disableMultithreading) {
          return new fakeWorker_1.FakeProcess();
        } else {
          if ((0, lib_12.isBrowser)()) {
            return (0, webWorkers_1.forkWebWorker)(pathToWorker);
          } else {
            if ((0, lib_12.nodeSupportsWorkerThreads)()) {
              return (0, workerThreads_1.forkWorkerThread)(pathToWorker);
            } else {
              return (0, childProcess_1.forkChildProcess)(pathToWorker);
            }
          }
        }
      }
      _setupChildProcess(child) {
        child.process.on("close", () => {
          if (child.alive) {
            child.alive = false;
            this._emitProxyEvent(child, "thread_closed");
            this._childHasCrashed(child, `Child process "${childName(child)}" was closed`);
          }
        });
        child.process.on("error", (err) => {
          this._emitProxyEvent(child, "error", err);
          this.debugLogError("Error from child " + child.id, err);
        });
        child.process.on("message", (message) => {
          if (message.messageType === "child") {
            try {
              this._onMessageFromChild(child, message);
            } catch (e) {
              this.debugLogError(`Error in onMessageCallback in child ${child.id}`, message, e);
              throw e;
            }
          } else if (message.messageType === "instance") {
            const instance2 = child.instances[message.instanceId];
            if (instance2) {
              try {
                instance2.onMessageCallback(instance2, message);
              } catch (e) {
                this.debugLogError(`Error in onMessageCallback in instance ${instance2.id}`, message, instance2, e);
                throw e;
              }
            } else {
              const err = new Error(`Instance "${message.instanceId}" not found. Received message "${message.messageType}" from child "${child.id}", "${childName(child)}"`);
              this._emitProxyEvent(child, "error", err);
              this.debugLogError(err);
            }
          } else {
            const err = new Error(`Unknown messageType "${message["messageType"]}"!`);
            this._emitProxyEvent(child, "error", err);
            this.debugLogError(err);
          }
        });
      }
      _onMessageFromChild(child, message) {
        if (message.cmd === sharedApi_12.Message.From.Child.CommandType.LOG) {
          console.log(child.id, ...message.log);
        } else if (message.cmd === sharedApi_12.Message.From.Child.CommandType.REPLY) {
          let msg2 = message;
          let cb = child.childMessageQueue[msg2.replyTo + ""];
          if (!cb)
            return;
          if (msg2.error) {
            cb(msg2.error);
          } else {
            cb(null, msg2.reply);
          }
          delete child.instanceMessageQueue[msg2.replyTo + ""];
        }
      }
      _findFreeChild(threadUsage) {
        let id = Object.keys(this._children).find((id2) => {
          const child = this._children[id2];
          if (!child.isNamed && child.usage + threadUsage <= 1) {
            return true;
          }
          return false;
        });
        if (id) {
          const child = this._children[id];
          child.usage += threadUsage;
          return child;
        }
        return null;
      }
      killChild(idOrChild, reason, cleanUp = true) {
        return new Promise((resolve, reject) => {
          var _a;
          let child;
          if (typeof idOrChild === "string") {
            const id = idOrChild;
            child = this._children[id];
            if (!child) {
              reject(`killChild: Child ${id} not found`);
              return;
            }
          } else {
            child = idOrChild;
          }
          this.debugLog(`Killing child ${child.id} due to: ${reason}`);
          if (child) {
            if (cleanUp) {
              this.clearRestartTimeout(child);
            }
            if (!child.alive) {
              if (cleanUp) {
                delete this._children[child.id];
              }
              child.isClosing = false;
              resolve();
            } else {
              let timeout;
              const killTimeout = (_a = child.config.killTimeout) !== null && _a !== void 0 ? _a : sharedApi_12.DEFAULT_KILL_TIMEOUT;
              if (killTimeout !== 0) {
                timeout = setTimeout(() => {
                  if (cleanUp) {
                    delete this._children[child.id];
                  }
                  reject(new api_1.KillTimeoutError(`Timeout: Kill child process "${child.id}"`));
                }, killTimeout);
              }
              child.process.once("close", () => {
                if (cleanUp) {
                  Object.entries(child.instances).forEach(([instanceId, instance2]) => {
                    delete child.instances[instanceId];
                    const events = this._proxyEventListeners.get(instance2.proxy);
                    events === null || events === void 0 ? void 0 : events.clear();
                    this._proxyEventListeners.delete(instance2.proxy);
                  });
                  delete this._children[child.id];
                }
                if (timeout) {
                  clearTimeout(timeout);
                }
                child.isClosing = false;
                resolve();
              });
              if (!child.isClosing) {
                child.isClosing = true;
                child.process.kill();
              }
            }
          }
        });
      }
      rejectChildMethods(child, reason) {
        Object.keys(child.methods).forEach((methodId) => {
          const method = child.methods[methodId];
          method.reject(Error(`Method "${method.methodName}()" aborted due to: ${reason}`));
        });
        child.methods = {};
      }
      /** trace to console.error if debugging is enabled */
      debugLogError(...args2) {
        if (this.debug)
          this.consoleError(...args2);
      }
      /** trace to console.error if debugging is enabled */
      debugLog(...args2) {
        if (this.debug)
          this.consoleLog(...args2);
      }
      /** trace to console.error */
      consoleError(...args2) {
        console.error(`ThreadedClass Error (${this.uniqueId})`, ...args2);
      }
      /** trace to console.log */
      consoleLog(...args2) {
        console.log(`ThreadedClass (${this.uniqueId})`, ...args2);
      }
      /** Look up which instance contains a proxy, and return its instanceId */
      findProxyInstanceOfChild(child, proxy) {
        for (const instanceId of Object.keys(child.instances)) {
          let instance2 = child.instances[instanceId];
          if (instance2.proxy === proxy)
            return instanceId;
        }
        return void 0;
      }
    };
    exports2.ThreadedClassManagerClassInternal = ThreadedClassManagerClassInternal;
    var ThreadMode;
    (function(ThreadMode2) {
      ThreadMode2["WEB_WORKER"] = "web_worker";
      ThreadMode2["NOT_SUPPORTED"] = "not_supported";
      ThreadMode2["WORKER_THREADS"] = "worker_threads";
      ThreadMode2["CHILD_PROCESS"] = "child_process";
    })(ThreadMode = exports2.ThreadMode || (exports2.ThreadMode = {}));
    exports2.ThreadedClassManagerInternal = new ThreadedClassManagerClassInternal();
    exports2.ThreadedClassManager = new ThreadedClassManagerClass(exports2.ThreadedClassManagerInternal);
  }
});

// node_modules/callsites/index.js
var require_callsites = __commonJS({
  "node_modules/callsites/index.js"(exports2, module2) {
    "use strict";
    var callsites = () => {
      const _prepareStackTrace = Error.prepareStackTrace;
      Error.prepareStackTrace = (_, stack2) => stack2;
      const stack = new Error().stack.slice(1);
      Error.prepareStackTrace = _prepareStackTrace;
      return stack;
    };
    module2.exports = callsites;
    module2.exports.default = callsites;
  }
});

// node_modules/threadedclass/dist/parent-process/threadedClass.js
var require_threadedClass = __commonJS({
  "node_modules/threadedclass/dist/parent-process/threadedClass.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.threadedClass = void 0;
    var path = require("path");
    var callsites = require_callsites();
    var lib_12 = require_lib();
    var sharedApi_12 = require_sharedApi();
    var manager_1 = require_manager();
    function threadedClass(orgModule, orgExport, constructorArgs, configOrg = {}) {
      let exportName = orgExport;
      const errStack = new Error();
      if (typeof orgModule !== "string")
        throw new Error("threadedClass parameter orgModule must be a string!");
      if (typeof orgExport !== "string")
        throw new Error("threadedClass parameter orgExport must be a string!");
      const config = Object.assign(Object.assign({}, configOrg), {
        instanceName: configOrg.instanceName || orgExport
        // Default to the export class name
      });
      if ((0, lib_12.isBrowser)()) {
        if (!config.pathToWorker) {
          throw Error("config.pathToWorker is required in browser");
        }
        if (!(0, lib_12.browserSupportsWebWorkers)()) {
          console.log("Web-workers not supported, disabling multi-threading");
          config.disableMultithreading = true;
        }
      }
      let parentCallPath = callsites()[1].getFileName();
      let thisCallPath = callsites()[0].getFileName();
      return new Promise((resolve, reject) => {
        function sendFcn(instance2, fcn2, args2, cb) {
          let msg2 = {
            cmd: sharedApi_12.Message.To.Instance.CommandType.FUNCTION,
            fcn: fcn2,
            args: args2
          };
          manager_1.ThreadedClassManagerInternal.sendMessageToInstance(instance2, msg2, cb);
        }
        function sendSet(instance2, property, value, cb) {
          let msg2 = {
            cmd: sharedApi_12.Message.To.Instance.CommandType.SET,
            property,
            value
          };
          manager_1.ThreadedClassManagerInternal.sendMessageToInstance(instance2, msg2, cb);
        }
        function sendReplyToInstance(instance2, replyTo, error, reply, cb) {
          let msg2 = {
            cmd: sharedApi_12.Message.To.Instance.CommandType.REPLY,
            replyTo,
            reply,
            error: error ? (error.stack || error).toString() : error
          };
          manager_1.ThreadedClassManagerInternal.sendMessageToInstance(instance2, msg2, cb);
        }
        function replyError(instance2, msg2, error) {
          sendReplyToInstance(instance2, msg2.cmdId, error);
        }
        function sendCallback(instance2, callbackId, args2, cb) {
          let msg2 = {
            cmd: sharedApi_12.Message.To.Instance.CommandType.CALLBACK,
            callbackId,
            args: args2
          };
          manager_1.ThreadedClassManagerInternal.sendMessageToInstance(instance2, msg2, cb);
        }
        function decodeResultFromWorker(instance2, encodedResult) {
          return (0, sharedApi_12.decodeArguments)(() => instance2.proxy, [encodedResult], (a) => {
            return (...args2) => {
              return new Promise((resolve2, reject2) => {
                sendCallback(instance2, a.value, args2, (_instance, err, encodedResult2) => {
                  if (err) {
                    reject2(err);
                  } else {
                    let result = decodeResultFromWorker(_instance, encodedResult2);
                    resolve2(result);
                  }
                });
              });
            };
          })[0];
        }
        function onMessageFromInstance(instance2, m2) {
          if (m2.cmd === sharedApi_12.Message.From.Instance.CommandType.REPLY) {
            let msg2 = m2;
            const child = instance2.child;
            let cb = child.instanceMessageQueue[msg2.replyTo + ""];
            if (!cb)
              return;
            if (msg2.error) {
              cb(instance2, msg2.error);
            } else {
              cb(instance2, null, msg2.reply);
            }
            delete child.instanceMessageQueue[msg2.replyTo + ""];
          } else if (m2.cmd === sharedApi_12.Message.From.Instance.CommandType.CALLBACK) {
            let msg2 = m2;
            let callback = instance2.child.callbacks[msg2.callbackId];
            if (callback) {
              try {
                Promise.resolve(callback(...msg2.args)).then((result) => {
                  let encodedResult = (0, sharedApi_12.encodeArguments)(instance2, instance2.child.callbacks, [result], !!config.disableMultithreading);
                  sendReplyToInstance(instance2, msg2.cmdId, void 0, encodedResult[0]);
                }).catch((err) => {
                  try {
                    replyError(instance2, msg2, err);
                  } catch (e) {
                    manager_1.ThreadedClassManagerInternal.debugLogError(new Error(`ThreadedClass: Thrown error in callback "${msg2.callbackId}": Unable to forward error to child due to: ${e}`));
                  }
                });
              } catch (err) {
                try {
                  replyError(instance2, msg2, err);
                } catch (e) {
                  manager_1.ThreadedClassManagerInternal.debugLogError(new Error(`ThreadedClass: Thrown error in callback "${msg2.callbackId}": Unable to forward error to child due to: ${e}`));
                }
              }
            } else
              throw Error(`callback "${msg2.callbackId}" not found in instance ${m2.instanceId}`);
          }
        }
        try {
          let pathToModule = "";
          let pathToWorker = "";
          if ((0, lib_12.isBrowser)()) {
            pathToWorker = config.pathToWorker;
            pathToModule = orgModule;
          } else {
            if (!parentCallPath)
              throw new Error("Unable to resolve parent file path");
            if (!thisCallPath)
              throw new Error("Unable to resolve own file path");
            let absPathToModule = orgModule.match(/^\./) ? path.resolve(parentCallPath, "../", orgModule) : orgModule;
            pathToModule = require.resolve(absPathToModule);
            pathToWorker = thisCallPath.replace(/parent-process/, "child-process").replace(/threadedClass(\.[tj]s)$/, "threadedclass-worker.js").replace(/src([\\\/])child-process([\\\/])threadedclass-worker/, "dist$1child-process$2threadedclass-worker");
          }
          const child = manager_1.ThreadedClassManagerInternal.findNextAvailableChild(config, pathToWorker);
          const proxy = {};
          let instanceInChild = manager_1.ThreadedClassManagerInternal.attachInstanceToChild(config, child, proxy, pathToModule, exportName, constructorArgs, onMessageFromInstance);
          manager_1.ThreadedClassManagerInternal.sendInit(child, instanceInChild, config, (instance2, err, props) => {
            if (err) {
              reject(err);
              return false;
            } else {
              props.forEach((p) => {
                if (!instance2.child.alive)
                  throw Error(`Child process of instance ${instance2.id} has been closed`);
                if (proxy.hasOwnProperty(p.key)) {
                  return;
                }
                if (p.type === sharedApi_12.InitPropType.FUNCTION) {
                  const callMethod = (...args2) => {
                    const originalError = new Error();
                    if (!instance2.child)
                      return Promise.reject(new Error(`Instance ${instance2.id} has been detached from child process`));
                    return manager_1.ThreadedClassManagerInternal.doMethod(instance2.child, p.key, (resolve2, reject2) => {
                      if (!instance2.child)
                        throw new Error(`Instance ${instance2.id} has been detached from child process`);
                      let encodedArgs = (0, sharedApi_12.encodeArguments)(instance2, instance2.child.callbacks, args2, !!config.disableMultithreading);
                      sendFcn(instance2, p.key, encodedArgs, (_instance, err2, encodedResult) => {
                        if (err2) {
                          err2 = (0, lib_12.combineErrorStacks)(err2, "Original stack (on parent):", originalError.stack || "");
                          reject2(err2);
                        } else {
                          let result = decodeResultFromWorker(_instance, encodedResult);
                          resolve2(result);
                        }
                      });
                    });
                  };
                  proxy[p.key] = callMethod;
                } else if (p.type === sharedApi_12.InitPropType.VALUE) {
                  let m2 = {
                    configurable: false,
                    enumerable: p.descriptor.enumerable
                    // writable: // We handle everything through getters & setters instead
                  };
                  if (p.descriptor.get || p.descriptor.readable) {
                    m2.get = function() {
                      return new Promise((resolve2, reject2) => {
                        sendFcn(instance2, p.key, [], (_instance, err2, encodedResult) => {
                          if (err2) {
                            reject2(err2);
                          } else {
                            let result = decodeResultFromWorker(_instance, encodedResult);
                            resolve2(result);
                          }
                        });
                      });
                    };
                  }
                  if (p.descriptor.set || p.descriptor.writable) {
                    m2.set = function(newVal) {
                      let fixedArgs = (0, sharedApi_12.encodeArguments)(instance2, instance2.child.callbacks, [newVal], !!config.disableMultithreading);
                      sendSet(instance2, p.key, fixedArgs[0], (_instance, err2, _result) => {
                        if (err2) {
                          console.log("Error in setter", err2);
                          proxy.__uncaughtError = err2;
                        }
                      });
                    };
                  }
                  Object.defineProperty(proxy, p.key, m2);
                }
              });
              manager_1.ThreadedClassManagerInternal.startMonitoringChild(instanceInChild);
              resolve(proxy);
              manager_1.ThreadedClassManagerInternal.checkInstance(instanceInChild, errStack);
              return true;
            }
          });
        } catch (e) {
          reject(e);
        }
      });
    }
    exports2.threadedClass = threadedClass;
  }
});

// node_modules/threadedclass/dist/index.js
var require_dist = __commonJS({
  "node_modules/threadedclass/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RegisterExitHandlers = exports2.ThreadedClassManager = void 0;
    var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
    var manager_1 = require_manager();
    Object.defineProperty(exports2, "ThreadedClassManager", { enumerable: true, get: function() {
      return manager_1.ThreadedClassManager;
    } });
    Object.defineProperty(exports2, "RegisterExitHandlers", { enumerable: true, get: function() {
      return manager_1.RegisterExitHandlers;
    } });
    (0, tslib_1.__exportStar)(require_api(), exports2);
    (0, tslib_1.__exportStar)(require_threadedClass(), exports2);
  }
});

// node_modules/atem-connection/dist/lib/packetBuilder.js
var require_packetBuilder = __commonJS({
  "node_modules/atem-connection/dist/lib/packetBuilder.js"(exports2) {
    "use strict";
    var _PacketBuilder_instances;
    var _PacketBuilder_maxPacketSize;
    var _PacketBuilder_protocolVersion;
    var _PacketBuilder_completedBuffers;
    var _PacketBuilder_finished;
    var _PacketBuilder_currentPacketBuffer;
    var _PacketBuilder_currentPacketFilled;
    var _PacketBuilder_finishBuffer;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PacketBuilder = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var PacketBuilder = class {
      constructor(maxPacketSize, protocolVersion) {
        _PacketBuilder_instances.add(this);
        _PacketBuilder_maxPacketSize.set(this, void 0);
        _PacketBuilder_protocolVersion.set(this, void 0);
        _PacketBuilder_completedBuffers.set(this, []);
        _PacketBuilder_finished.set(this, false);
        _PacketBuilder_currentPacketBuffer.set(this, void 0);
        _PacketBuilder_currentPacketFilled.set(this, void 0);
        tslib_1.__classPrivateFieldSet(this, _PacketBuilder_maxPacketSize, maxPacketSize, "f");
        tslib_1.__classPrivateFieldSet(this, _PacketBuilder_protocolVersion, protocolVersion, "f");
        tslib_1.__classPrivateFieldSet(this, _PacketBuilder_currentPacketBuffer, Buffer.alloc(maxPacketSize), "f");
        tslib_1.__classPrivateFieldSet(this, _PacketBuilder_currentPacketFilled, 0, "f");
      }
      addCommand(cmd) {
        if (tslib_1.__classPrivateFieldGet(this, _PacketBuilder_finished, "f"))
          throw new Error("Packets have been finished");
        if (typeof cmd.serialize !== "function") {
          throw new Error(`Command ${cmd.constructor.name} is not serializable`);
        }
        const rawName = cmd.constructor.rawName;
        const payload = cmd.serialize(tslib_1.__classPrivateFieldGet(this, _PacketBuilder_protocolVersion, "f"));
        const totalLength = payload.length + 8;
        if (totalLength > tslib_1.__classPrivateFieldGet(this, _PacketBuilder_maxPacketSize, "f")) {
          tslib_1.__classPrivateFieldGet(this, _PacketBuilder_instances, "m", _PacketBuilder_finishBuffer).call(this, totalLength);
        }
        if (totalLength + tslib_1.__classPrivateFieldGet(this, _PacketBuilder_currentPacketFilled, "f") > tslib_1.__classPrivateFieldGet(this, _PacketBuilder_currentPacketBuffer, "f").length) {
          tslib_1.__classPrivateFieldGet(this, _PacketBuilder_instances, "m", _PacketBuilder_finishBuffer).call(this);
        }
        tslib_1.__classPrivateFieldGet(this, _PacketBuilder_currentPacketBuffer, "f").writeUInt16BE(payload.length + 8, tslib_1.__classPrivateFieldGet(this, _PacketBuilder_currentPacketFilled, "f") + 0);
        tslib_1.__classPrivateFieldGet(this, _PacketBuilder_currentPacketBuffer, "f").write(rawName, tslib_1.__classPrivateFieldGet(this, _PacketBuilder_currentPacketFilled, "f") + 4, 4);
        payload.copy(tslib_1.__classPrivateFieldGet(this, _PacketBuilder_currentPacketBuffer, "f"), tslib_1.__classPrivateFieldGet(this, _PacketBuilder_currentPacketFilled, "f") + 8);
        tslib_1.__classPrivateFieldSet(this, _PacketBuilder_currentPacketFilled, tslib_1.__classPrivateFieldGet(this, _PacketBuilder_currentPacketFilled, "f") + totalLength, "f");
      }
      getPackets() {
        tslib_1.__classPrivateFieldGet(this, _PacketBuilder_instances, "m", _PacketBuilder_finishBuffer).call(this, 0);
        tslib_1.__classPrivateFieldSet(this, _PacketBuilder_finished, true, "f");
        return tslib_1.__classPrivateFieldGet(this, _PacketBuilder_completedBuffers, "f");
      }
    };
    exports2.PacketBuilder = PacketBuilder;
    _PacketBuilder_maxPacketSize = /* @__PURE__ */ new WeakMap(), _PacketBuilder_protocolVersion = /* @__PURE__ */ new WeakMap(), _PacketBuilder_completedBuffers = /* @__PURE__ */ new WeakMap(), _PacketBuilder_finished = /* @__PURE__ */ new WeakMap(), _PacketBuilder_currentPacketBuffer = /* @__PURE__ */ new WeakMap(), _PacketBuilder_currentPacketFilled = /* @__PURE__ */ new WeakMap(), _PacketBuilder_instances = /* @__PURE__ */ new WeakSet(), _PacketBuilder_finishBuffer = function _PacketBuilder_finishBuffer2(newBufferLength = tslib_1.__classPrivateFieldGet(this, _PacketBuilder_maxPacketSize, "f")) {
      if (tslib_1.__classPrivateFieldGet(this, _PacketBuilder_finished, "f"))
        return;
      if (tslib_1.__classPrivateFieldGet(this, _PacketBuilder_currentPacketFilled, "f") > 0) {
        tslib_1.__classPrivateFieldGet(this, _PacketBuilder_completedBuffers, "f").push(tslib_1.__classPrivateFieldGet(this, _PacketBuilder_currentPacketBuffer, "f").subarray(0, tslib_1.__classPrivateFieldGet(this, _PacketBuilder_currentPacketFilled, "f")));
      }
      if (newBufferLength > 0) {
        tslib_1.__classPrivateFieldSet(this, _PacketBuilder_currentPacketBuffer, Buffer.alloc(newBufferLength), "f");
        tslib_1.__classPrivateFieldSet(this, _PacketBuilder_currentPacketFilled, 0, "f");
      }
    };
  }
});

// node_modules/atem-connection/dist/lib/atemSocket.js
var require_atemSocket = __commonJS({
  "node_modules/atem-connection/dist/lib/atemSocket.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AtemSocket = void 0;
    var eventemitter3_1 = require_eventemitter3();
    var atemCommandParser_1 = require_atemCommandParser();
    var exitHook = require_exit_hook();
    var commands_1 = require_commands();
    var atem_1 = require_atem();
    var threadedclass_1 = require_dist();
    var packetBuilder_1 = require_packetBuilder();
    var AtemSocket = class extends eventemitter3_1.EventEmitter {
      constructor(options) {
        super();
        this._commandParser = new atemCommandParser_1.CommandParser();
        this._nextPacketTrackingId = 0;
        this._isDisconnecting = false;
        this._port = atem_1.DEFAULT_PORT;
        this._address = options.address;
        this._port = options.port;
        this._debugBuffers = options.debugBuffers;
        this._disableMultithreaded = options.disableMultithreaded;
        this._childProcessTimeout = options.childProcessTimeout;
        this._maxPacketSize = options.maxPacketSize;
      }
      async connect(address, port2) {
        this._isDisconnecting = false;
        if (address) {
          this._address = address;
        }
        if (port2) {
          this._port = port2;
        }
        if (!this._socketProcess) {
          this._creatingSocket = this._createSocketProcess();
          await this._creatingSocket;
          if (this._isDisconnecting || !this._socketProcess) {
            throw new Error("Disconnecting");
          }
        }
        await this._socketProcess.connect(this._address, this._port);
      }
      async destroy() {
        await this.disconnect();
        if (this._creatingSocket)
          await this._creatingSocket.catch(() => null);
        if (this._socketProcess) {
          await threadedclass_1.ThreadedClassManager.destroy(this._socketProcess);
          this._socketProcess = void 0;
        }
        if (this._exitUnsubscribe) {
          this._exitUnsubscribe();
          this._exitUnsubscribe = void 0;
        }
      }
      async disconnect() {
        this._isDisconnecting = true;
        if (this._socketProcess) {
          await this._socketProcess.disconnect();
        }
      }
      get nextPacketTrackingId() {
        if (this._nextPacketTrackingId >= Number.MAX_SAFE_INTEGER) {
          this._nextPacketTrackingId = 0;
        }
        return ++this._nextPacketTrackingId;
      }
      async sendCommands(commands) {
        if (!this._socketProcess)
          throw new Error("Socket process is not open");
        const maxPacketSize = this._maxPacketSize - 12;
        const packetBuilder = new packetBuilder_1.PacketBuilder(maxPacketSize, this._commandParser.version);
        for (const cmd of commands) {
          packetBuilder.addCommand(cmd);
        }
        const packets = packetBuilder.getPackets().map((buffer) => ({
          payloadLength: buffer.length,
          payloadHex: buffer.toString("hex"),
          trackingId: this.nextPacketTrackingId
        }));
        if (this._debugBuffers)
          this.emit("debug", `PAYLOAD PACKETS ${JSON.stringify(packets)}`);
        if (packets.length > 0) {
          await this._socketProcess.sendPackets(packets);
        }
        return packets.map((packet) => packet.trackingId);
      }
      async _createSocketProcess() {
        this._socketProcess = await (0, threadedclass_1.threadedClass)("./atemSocketChild", "AtemSocketChild", [
          {
            address: this._address,
            port: this._port,
            debugBuffers: this._debugBuffers
          },
          async () => {
            this.emit("disconnect");
          },
          async (message) => {
            this.emit("info", message);
          },
          async (payload) => {
            this._parseCommands(Buffer.from(payload));
          },
          async (ids) => {
            this.emit("ackPackets", ids.map((id) => id.trackingId));
          }
          // onPacketsAcknowledged
        ], {
          instanceName: "atem-connection",
          freezeLimit: this._childProcessTimeout,
          autoRestart: true,
          disableMultithreading: this._disableMultithreaded
        });
        threadedclass_1.ThreadedClassManager.onEvent(this._socketProcess, "restarted", () => {
          this.connect().catch((error) => {
            const errorMsg = `Failed to reconnect after respawning socket process: ${error}`;
            this.emit("error", errorMsg);
          });
        });
        threadedclass_1.ThreadedClassManager.onEvent(this._socketProcess, "thread_closed", () => {
          this.emit("disconnect");
        });
        this._exitUnsubscribe = exitHook(() => {
          this.destroy().catch(() => null);
        });
      }
      _parseCommands(buffer) {
        const parsedCommands = [];
        while (buffer.length > 8) {
          const length = buffer.readUInt16BE(0);
          const name = buffer.toString("ascii", 4, 8);
          if (length < 8) {
            break;
          }
          const cmdConstructor = this._commandParser.commandFromRawName(name);
          if (cmdConstructor && typeof cmdConstructor.deserialize === "function") {
            try {
              const cmd = cmdConstructor.deserialize(buffer.slice(8, length), this._commandParser.version);
              if (cmd instanceof commands_1.VersionCommand) {
                this._commandParser.version = cmd.properties.version;
              }
              parsedCommands.push(cmd);
            } catch (e) {
              this.emit("error", `Failed to deserialize command: ${cmdConstructor.constructor.name}: ${e}`);
            }
          } else {
            this.emit("debug", `Unknown command ${name} (${length}b)`);
          }
          buffer = buffer.slice(length);
        }
        if (parsedCommands.length > 0) {
          this.emit("receivedCommands", parsedCommands);
        }
        return parsedCommands;
      }
    };
    exports2.AtemSocket = AtemSocket;
  }
});

// node_modules/atem-connection/dist/dataTransfer/dataTransfer.js
var require_dataTransfer = __commonJS({
  "node_modules/atem-connection/dist/dataTransfer/dataTransfer.js"(exports2) {
    "use strict";
    var _DataTransfer_completionPromise;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataTransfer = exports2.DataTransferState = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var DataTransferState;
    (function(DataTransferState2) {
      DataTransferState2[DataTransferState2["Pending"] = 0] = "Pending";
      DataTransferState2[DataTransferState2["Ready"] = 1] = "Ready";
      DataTransferState2[DataTransferState2["Transferring"] = 2] = "Transferring";
      DataTransferState2[DataTransferState2["Finished"] = 3] = "Finished";
    })(DataTransferState = exports2.DataTransferState || (exports2.DataTransferState = {}));
    var DataTransfer = class {
      constructor() {
        _DataTransfer_completionPromise.set(this, void 0);
        this.resolvePromise = () => {
        };
        this.rejectPromise = () => {
        };
        tslib_1.__classPrivateFieldSet(this, _DataTransfer_completionPromise, new Promise((resolve, reject) => {
          this.resolvePromise = resolve;
          this.rejectPromise = reject;
        }), "f");
      }
      /** Get the promise that will resolve upon completion/failure of the transfer */
      get promise() {
        return tslib_1.__classPrivateFieldGet(this, _DataTransfer_completionPromise, "f");
      }
      /** Restart the current transfer */
      async restartTransfer(transferId) {
        return this.startTransfer(transferId);
      }
      /** The current transfer has been aborted and should report failure */
      abort(reason) {
        this.rejectPromise(reason);
      }
    };
    exports2.DataTransfer = DataTransfer;
    _DataTransfer_completionPromise = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/p-finally/index.js
var require_p_finally = __commonJS({
  "node_modules/p-finally/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (promise, onFinally) => {
      onFinally = onFinally || (() => {
      });
      return promise.then(
        (val) => new Promise((resolve) => {
          resolve(onFinally());
        }).then(() => val),
        (err) => new Promise((resolve) => {
          resolve(onFinally());
        }).then(() => {
          throw err;
        })
      );
    };
  }
});

// node_modules/p-timeout/index.js
var require_p_timeout = __commonJS({
  "node_modules/p-timeout/index.js"(exports2, module2) {
    "use strict";
    var pFinally = require_p_finally();
    var TimeoutError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "TimeoutError";
      }
    };
    var pTimeout = (promise, milliseconds, fallback) => new Promise((resolve, reject) => {
      if (typeof milliseconds !== "number" || milliseconds < 0) {
        throw new TypeError("Expected `milliseconds` to be a positive number");
      }
      if (milliseconds === Infinity) {
        resolve(promise);
        return;
      }
      const timer = setTimeout(() => {
        if (typeof fallback === "function") {
          try {
            resolve(fallback());
          } catch (error) {
            reject(error);
          }
          return;
        }
        const message = typeof fallback === "string" ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
        const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);
        if (typeof promise.cancel === "function") {
          promise.cancel();
        }
        reject(timeoutError);
      }, milliseconds);
      pFinally(
        // eslint-disable-next-line promise/prefer-await-to-then
        promise.then(resolve, reject),
        () => {
          clearTimeout(timer);
        }
      );
    });
    module2.exports = pTimeout;
    module2.exports.default = pTimeout;
    module2.exports.TimeoutError = TimeoutError;
  }
});

// node_modules/p-queue/dist/lower-bound.js
var require_lower_bound = __commonJS({
  "node_modules/p-queue/dist/lower-bound.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function lowerBound(array, value, comparator) {
      let first = 0;
      let count = array.length;
      while (count > 0) {
        const step = count / 2 | 0;
        let it = first + step;
        if (comparator(array[it], value) <= 0) {
          first = ++it;
          count -= step + 1;
        } else {
          count = step;
        }
      }
      return first;
    }
    exports2.default = lowerBound;
  }
});

// node_modules/p-queue/dist/priority-queue.js
var require_priority_queue = __commonJS({
  "node_modules/p-queue/dist/priority-queue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var lower_bound_1 = require_lower_bound();
    var PriorityQueue = class {
      constructor() {
        this._queue = [];
      }
      enqueue(run, options) {
        options = Object.assign({ priority: 0 }, options);
        const element = {
          priority: options.priority,
          run
        };
        if (this.size && this._queue[this.size - 1].priority >= options.priority) {
          this._queue.push(element);
          return;
        }
        const index = lower_bound_1.default(this._queue, element, (a, b) => b.priority - a.priority);
        this._queue.splice(index, 0, element);
      }
      dequeue() {
        const item = this._queue.shift();
        return item === null || item === void 0 ? void 0 : item.run;
      }
      filter(options) {
        return this._queue.filter((element) => element.priority === options.priority).map((element) => element.run);
      }
      get size() {
        return this._queue.length;
      }
    };
    exports2.default = PriorityQueue;
  }
});

// node_modules/p-queue/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/p-queue/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var EventEmitter = require_eventemitter3();
    var p_timeout_1 = require_p_timeout();
    var priority_queue_1 = require_priority_queue();
    var empty = () => {
    };
    var timeoutError = new p_timeout_1.TimeoutError();
    var PQueue = class extends EventEmitter {
      constructor(options) {
        var _a, _b, _c, _d;
        super();
        this._intervalCount = 0;
        this._intervalEnd = 0;
        this._pendingCount = 0;
        this._resolveEmpty = empty;
        this._resolveIdle = empty;
        options = Object.assign({ carryoverConcurrencyCount: false, intervalCap: Infinity, interval: 0, concurrency: Infinity, autoStart: true, queueClass: priority_queue_1.default }, options);
        if (!(typeof options.intervalCap === "number" && options.intervalCap >= 1)) {
          throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(_b = (_a = options.intervalCap) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""}\` (${typeof options.intervalCap})`);
        }
        if (options.interval === void 0 || !(Number.isFinite(options.interval) && options.interval >= 0)) {
          throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(_d = (_c = options.interval) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""}\` (${typeof options.interval})`);
        }
        this._carryoverConcurrencyCount = options.carryoverConcurrencyCount;
        this._isIntervalIgnored = options.intervalCap === Infinity || options.interval === 0;
        this._intervalCap = options.intervalCap;
        this._interval = options.interval;
        this._queue = new options.queueClass();
        this._queueClass = options.queueClass;
        this.concurrency = options.concurrency;
        this._timeout = options.timeout;
        this._throwOnTimeout = options.throwOnTimeout === true;
        this._isPaused = options.autoStart === false;
      }
      get _doesIntervalAllowAnother() {
        return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
      }
      get _doesConcurrentAllowAnother() {
        return this._pendingCount < this._concurrency;
      }
      _next() {
        this._pendingCount--;
        this._tryToStartAnother();
        this.emit("next");
      }
      _resolvePromises() {
        this._resolveEmpty();
        this._resolveEmpty = empty;
        if (this._pendingCount === 0) {
          this._resolveIdle();
          this._resolveIdle = empty;
          this.emit("idle");
        }
      }
      _onResumeInterval() {
        this._onInterval();
        this._initializeIntervalIfNeeded();
        this._timeoutId = void 0;
      }
      _isIntervalPaused() {
        const now = Date.now();
        if (this._intervalId === void 0) {
          const delay = this._intervalEnd - now;
          if (delay < 0) {
            this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
          } else {
            if (this._timeoutId === void 0) {
              this._timeoutId = setTimeout(() => {
                this._onResumeInterval();
              }, delay);
            }
            return true;
          }
        }
        return false;
      }
      _tryToStartAnother() {
        if (this._queue.size === 0) {
          if (this._intervalId) {
            clearInterval(this._intervalId);
          }
          this._intervalId = void 0;
          this._resolvePromises();
          return false;
        }
        if (!this._isPaused) {
          const canInitializeInterval = !this._isIntervalPaused();
          if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
            const job = this._queue.dequeue();
            if (!job) {
              return false;
            }
            this.emit("active");
            job();
            if (canInitializeInterval) {
              this._initializeIntervalIfNeeded();
            }
            return true;
          }
        }
        return false;
      }
      _initializeIntervalIfNeeded() {
        if (this._isIntervalIgnored || this._intervalId !== void 0) {
          return;
        }
        this._intervalId = setInterval(() => {
          this._onInterval();
        }, this._interval);
        this._intervalEnd = Date.now() + this._interval;
      }
      _onInterval() {
        if (this._intervalCount === 0 && this._pendingCount === 0 && this._intervalId) {
          clearInterval(this._intervalId);
          this._intervalId = void 0;
        }
        this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
        this._processQueue();
      }
      /**
      Executes all queued functions until it reaches the limit.
      */
      _processQueue() {
        while (this._tryToStartAnother()) {
        }
      }
      get concurrency() {
        return this._concurrency;
      }
      set concurrency(newConcurrency) {
        if (!(typeof newConcurrency === "number" && newConcurrency >= 1)) {
          throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
        }
        this._concurrency = newConcurrency;
        this._processQueue();
      }
      /**
      Adds a sync or async task to the queue. Always returns a promise.
      */
      async add(fn, options = {}) {
        return new Promise((resolve, reject) => {
          const run = async () => {
            this._pendingCount++;
            this._intervalCount++;
            try {
              const operation = this._timeout === void 0 && options.timeout === void 0 ? fn() : p_timeout_1.default(Promise.resolve(fn()), options.timeout === void 0 ? this._timeout : options.timeout, () => {
                if (options.throwOnTimeout === void 0 ? this._throwOnTimeout : options.throwOnTimeout) {
                  reject(timeoutError);
                }
                return void 0;
              });
              resolve(await operation);
            } catch (error) {
              reject(error);
            }
            this._next();
          };
          this._queue.enqueue(run, options);
          this._tryToStartAnother();
          this.emit("add");
        });
      }
      /**
          Same as `.add()`, but accepts an array of sync or async functions.
      
          @returns A promise that resolves when all functions are resolved.
          */
      async addAll(functions, options) {
        return Promise.all(functions.map(async (function_) => this.add(function_, options)));
      }
      /**
      Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
      */
      start() {
        if (!this._isPaused) {
          return this;
        }
        this._isPaused = false;
        this._processQueue();
        return this;
      }
      /**
      Put queue execution on hold.
      */
      pause() {
        this._isPaused = true;
      }
      /**
      Clear the queue.
      */
      clear() {
        this._queue = new this._queueClass();
      }
      /**
          Can be called multiple times. Useful if you for example add additional items at a later time.
      
          @returns A promise that settles when the queue becomes empty.
          */
      async onEmpty() {
        if (this._queue.size === 0) {
          return;
        }
        return new Promise((resolve) => {
          const existingResolve = this._resolveEmpty;
          this._resolveEmpty = () => {
            existingResolve();
            resolve();
          };
        });
      }
      /**
          The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.
      
          @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
          */
      async onIdle() {
        if (this._pendingCount === 0 && this._queue.size === 0) {
          return;
        }
        return new Promise((resolve) => {
          const existingResolve = this._resolveIdle;
          this._resolveIdle = () => {
            existingResolve();
            resolve();
          };
        });
      }
      /**
      Size of the queue.
      */
      get size() {
        return this._queue.size;
      }
      /**
          Size of the queue, filtered by the given options.
      
          For example, this can be used to find the number of items remaining in the queue with a specific priority level.
          */
      sizeBy(options) {
        return this._queue.filter(options).length;
      }
      /**
      Number of pending promises.
      */
      get pending() {
        return this._pendingCount;
      }
      /**
      Whether the queue is currently paused.
      */
      get isPaused() {
        return this._isPaused;
      }
      get timeout() {
        return this._timeout;
      }
      /**
      Set the timeout for future operations.
      */
      set timeout(milliseconds) {
        this._timeout = milliseconds;
      }
    };
    exports2.default = PQueue;
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports2, module2) {
    var s = 1e3;
    var m2 = s * 60;
    var h = m2 * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m2;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m2) {
        return Math.round(ms / m2) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m2) {
        return plural(ms, msAbs, m2, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports2, module2) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args2) {
          if (!debug.enabled) {
            return;
          }
          const self = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args2[0] = createDebug.coerce(args2[0]);
          if (typeof args2[0] !== "string") {
            args2.unshift("%O");
          }
          let index = 0;
          args2[0] = args2[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args2[index];
              match = formatter.call(self, val);
              args2.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args2);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args2);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
        for (const ns of split) {
          if (ns[0] === "-") {
            createDebug.skips.push(ns.slice(1));
          } else {
            createDebug.names.push(ns);
          }
        }
      }
      function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while (searchIndex < search.length) {
          if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
            if (template[templateIndex] === "*") {
              starIndex = templateIndex;
              matchIndex = searchIndex;
              templateIndex++;
            } else {
              searchIndex++;
              templateIndex++;
            }
          } else if (starIndex !== -1) {
            templateIndex = starIndex + 1;
            matchIndex++;
            searchIndex = matchIndex;
          } else {
            return false;
          }
        }
        while (templateIndex < template.length && template[templateIndex] === "*") {
          templateIndex++;
        }
        return templateIndex === template.length;
      }
      function disable() {
        const namespaces = [
          ...createDebug.names,
          ...createDebug.skips.map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        for (const skip of createDebug.skips) {
          if (matchesTemplate(name, skip)) {
            return false;
          }
        }
        for (const ns of createDebug.names) {
          if (matchesTemplate(name, ns)) {
            return true;
          }
        }
        return false;
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module2.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports2, module2) {
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = localstorage();
    exports2.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports2.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m2;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m2 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m2[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args2) {
      args2[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args2[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args2.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args2[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args2.splice(lastC, 0, c);
    }
    exports2.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports2.storage.setItem("debug", namespaces);
        } else {
          exports2.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports2.storage.getItem("debug") || exports2.storage.getItem("DEBUG");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports2, module2) {
    var tty = require("tty");
    var util = require("util");
    exports2.init = init;
    exports2.log = log;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.destroy = util.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports2.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require("supports-color");
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports2.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports2.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports2.inspectOpts ? Boolean(exports2.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args2) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args2[0] = prefix + args2[0].split("\n").join("\n" + prefix);
        args2.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args2[0] = getDate() + name + " " + args2[0];
      }
    }
    function getDate() {
      if (exports2.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function log(...args2) {
      return process.stderr.write(util.formatWithOptions(exports2.inspectOpts, ...args2) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug) {
      debug.inspectOpts = {};
      const keys = Object.keys(exports2.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports2.inspectOpts[keys[i]];
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports2, module2) {
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// node_modules/atem-connection/dist/dataTransfer/dataTransferQueue.js
var require_dataTransferQueue = __commonJS({
  "node_modules/atem-connection/dist/dataTransfer/dataTransferQueue.js"(exports2) {
    "use strict";
    var _DataTransferLockingQueue_storeId;
    var _DataTransferLockingQueue_sendLockCommand;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataTransferSimpleQueue = exports2.DataTransferLockingQueue = exports2.DataTransferQueueBase = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var dataTransfer_1 = require_dataTransfer();
    var DataTransfer_1 = require_DataTransfer();
    var p_queue_1 = require_dist2();
    var debug0 = require_src();
    var debug = debug0("atem-connection:data-transfer:upload-buffer");
    var queueHighPriority = 99;
    var DataTransferQueueBase = class {
      constructor(nextTransferId) {
        this.taskQueue = [];
        this.handleCommandQueue = new p_queue_1.default({ concurrency: 1 });
        this.nextTransferId = nextTransferId;
      }
      get currentTransferId() {
        return this.activeTransfer?.id ?? null;
      }
      /** Clear the pending queue, and abort any in-progress transfers */
      clearQueueAndAbort(reason) {
        for (const transfer of this.taskQueue) {
          transfer.abort(reason);
        }
        this.taskQueue.splice(0, this.taskQueue.length);
        this.handleCommandQueue.clear();
        this.transferCompleted();
        if (this.activeTransfer) {
          this.activeTransfer.job.abort(reason);
          this.activeTransfer = void 0;
        }
      }
      /** Pop some queued commands from the active transfer */
      popQueuedCommands(maxCount) {
        if (this.activeTransfer) {
          if (this.activeTransfer.queuedCommands.length === 0 && this.activeTransfer.state === dataTransfer_1.DataTransferState.Finished) {
            this.transferCompleted();
            this.activeTransfer = void 0;
            this.dequeueAndRun();
            return [];
          } else {
            return this.activeTransfer.queuedCommands.splice(0, maxCount);
          }
        } else {
          return null;
        }
      }
      /** Queue a transfer to be performed */
      async enqueue(transfer) {
        this.taskQueue.push(transfer);
        this.dequeueAndRun();
        return transfer.promise;
      }
      dequeueAndRun() {
        if (this.activeTransfer)
          return;
        const newTransfer = this.taskQueue.shift();
        if (!newTransfer)
          return;
        this.handleCommandQueue.clear();
        const transferId = this.nextTransferId();
        this.activeTransfer = {
          id: transferId,
          state: dataTransfer_1.DataTransferState.Pending,
          job: newTransfer,
          queuedCommands: []
        };
        this.tryStartTransfer();
      }
      /**
       * Try and start the 'activeTransfer' if it is sat at pending
       * This is done in the queue, and calls back out to this.startTransfer
       */
      tryStartTransfer() {
        if (this.activeTransfer) {
          this.handleCommandQueue.add(async () => {
            const transfer = this.activeTransfer;
            if (!transfer || transfer.state !== dataTransfer_1.DataTransferState.Pending) {
              return;
            }
            const result = await this.startTransfer(transfer.job, transfer.id);
            if (this.activeTransfer?.id !== transfer.id) {
              throw new Error("Transfer changed mid-handle!");
            }
            transfer.state = result.newState;
            transfer.queuedCommands.push(...result.commands);
            if (transfer.state === dataTransfer_1.DataTransferState.Finished && transfer.queuedCommands.length === 0) {
              this.transferCompleted();
              this.activeTransfer = void 0;
              this.dequeueAndRun();
            } else {
            }
          }, { priority: queueHighPriority }).catch((e) => {
            console.error(`startTransfer failed: ${e}`);
          });
        }
      }
      /**
       * Try and abort the 'activeTransfer' if there is one
       */
      tryAbortTransfer(reason) {
        if (this.activeTransfer) {
          const transferId = this.activeTransfer.id;
          this.handleCommandQueue.add(async () => {
            const transfer = this.activeTransfer;
            if (!transfer || transfer.id !== transferId) {
              return;
            }
            transfer.job.abort(reason);
            this.transferCompleted();
            this.activeTransfer = void 0;
            this.dequeueAndRun();
          }, { priority: queueHighPriority }).catch((e) => {
            console.error(`abortTransfer failed: ${e}`);
          });
        }
      }
      handleCommand(command) {
        this.handleCommandQueue.add(async () => {
          const transfer = this.activeTransfer;
          if (!transfer || transfer.id !== command.properties.transferId) {
            return;
          }
          if (transfer.state === dataTransfer_1.DataTransferState.Pending) {
            return;
          }
          const oldState = transfer.state;
          const result = await transfer.job.handleCommand(command, oldState);
          if (this.activeTransfer?.id !== transfer.id) {
            throw new Error("Transfer changed mid-handle!");
          }
          transfer.state = result.newState;
          transfer.queuedCommands.push(...result.commands);
          if (transfer.state !== dataTransfer_1.DataTransferState.Finished && transfer.queuedCommands.length === 0) {
          } else {
            if (result.newId !== void 0) {
              transfer.id = result.newId;
            }
          }
        }).catch((e) => {
          console.error(`Queue error: ${e}`);
        });
      }
    };
    exports2.DataTransferQueueBase = DataTransferQueueBase;
    var DataTransferLockingQueue = class extends DataTransferQueueBase {
      constructor(storeId, sendLockCommand, nextTransferId) {
        super(nextTransferId);
        _DataTransferLockingQueue_storeId.set(this, void 0);
        _DataTransferLockingQueue_sendLockCommand.set(this, void 0);
        tslib_1.__classPrivateFieldSet(this, _DataTransferLockingQueue_storeId, storeId, "f");
        tslib_1.__classPrivateFieldSet(this, _DataTransferLockingQueue_sendLockCommand, sendLockCommand, "f");
        this.isLocked = false;
      }
      async startTransfer(transfer, transferId) {
        debug(`Starting transfer ${transferId} (Already locked = ${this.isLocked})`);
        if (this.isLocked) {
          return transfer.startTransfer(transferId);
        } else {
          tslib_1.__classPrivateFieldGet(this, _DataTransferLockingQueue_sendLockCommand, "f").call(this, new DataTransfer_1.LockStateCommand(tslib_1.__classPrivateFieldGet(this, _DataTransferLockingQueue_storeId, "f"), true));
          return {
            newState: dataTransfer_1.DataTransferState.Pending,
            commands: []
          };
        }
      }
      /** We have obtained the lock! */
      lockObtained() {
        this.isLocked = true;
        this.tryStartTransfer();
      }
      /** The status of the lock has changed */
      updateLock(locked) {
        const wasLocked = this.isLocked;
        this.isLocked = locked;
        if (wasLocked && !locked) {
          this.tryAbortTransfer(new Error("Lost lock mid-transfer"));
        }
      }
      transferCompleted() {
        if (this.isLocked && !this.taskQueue.length) {
          this.isLocked = false;
          debug(`Completing transfer`);
          tslib_1.__classPrivateFieldGet(this, _DataTransferLockingQueue_sendLockCommand, "f").call(this, new DataTransfer_1.LockStateCommand(tslib_1.__classPrivateFieldGet(this, _DataTransferLockingQueue_storeId, "f"), false));
        }
      }
    };
    exports2.DataTransferLockingQueue = DataTransferLockingQueue;
    _DataTransferLockingQueue_storeId = /* @__PURE__ */ new WeakMap(), _DataTransferLockingQueue_sendLockCommand = /* @__PURE__ */ new WeakMap();
    var DataTransferSimpleQueue = class extends DataTransferQueueBase {
      async startTransfer(transfer, transferId) {
        return transfer.startTransfer(transferId);
      }
      transferCompleted() {
      }
    };
    exports2.DataTransferSimpleQueue = DataTransferSimpleQueue;
  }
});

// node_modules/atem-connection/dist/lib/converters/colorConstants.js
var require_colorConstants = __commonJS({
  "node_modules/atem-connection/dist/lib/converters/colorConstants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ColorConvertConstantsBT601 = exports2.ColorConvertConstantsBT709 = void 0;
    function createColorConvertConstants(KR, KB) {
      const KG = 1 - KR - KB;
      const KRi = 1 - KR;
      const KBi = 1 - KB;
      const YRange = 219;
      const CbCrRange = 224;
      const HalfCbCrRange = CbCrRange / 2;
      return {
        KR,
        KB,
        KG,
        KRi,
        KBi,
        YRange,
        CbCrRange,
        HalfCbCrRange,
        YOffset: 16 << 8,
        CbCrOffset: 128 << 8,
        KRKRioKG: KR * KRi * 2 / KG,
        KBKBioKG: KB * KBi * 2 / KG,
        KRoKBi: KR / KBi * HalfCbCrRange,
        KGoKBi: KG / KBi * HalfCbCrRange,
        KBoKRi: KB / KRi * HalfCbCrRange,
        KGoKRi: KG / KRi * HalfCbCrRange
      };
    }
    exports2.ColorConvertConstantsBT709 = createColorConvertConstants(0.2126, 0.0722);
    exports2.ColorConvertConstantsBT601 = createColorConvertConstants(0.299, 0.114);
  }
});

// node_modules/atem-connection/dist/lib/converters/rgbaToYuv422.js
var require_rgbaToYuv422 = __commonJS({
  "node_modules/atem-connection/dist/lib/converters/rgbaToYuv422.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.convertRGBAToYUV422 = void 0;
    var colorConstants_1 = require_colorConstants();
    function convertRGBAToYUV422(width, height, data) {
      const constants = height >= 720 ? colorConstants_1.ColorConvertConstantsBT709 : colorConstants_1.ColorConvertConstantsBT601;
      const genColor = (rawA, uv16, y16) => {
        const a = (rawA << 2) * 219 / 255 + (16 << 2);
        const y = Math.round(y16) >> 6;
        const uv = Math.round(uv16) >> 6;
        return (a << 20) + (uv << 10) + y;
      };
      const buffer = Buffer.alloc(width * height * 4);
      for (let i = 0; i < width * height * 4; i += 8) {
        const r1 = data[i + 0];
        const g1 = data[i + 1];
        const b1 = data[i + 2];
        const r2 = data[i + 4];
        const g2 = data[i + 5];
        const b2 = data[i + 6];
        const a1 = data[i + 3];
        const a2 = data[i + 7];
        const y16a = constants.YOffset + constants.KR * constants.YRange * r1 + constants.KG * constants.YRange * g1 + constants.KB * constants.YRange * b1;
        const cb16 = constants.CbCrOffset + (-constants.KRoKBi * r1 - constants.KGoKBi * g1 + constants.HalfCbCrRange * b1);
        const y16b = constants.YOffset + constants.KR * constants.YRange * r2 + constants.KG * constants.YRange * g2 + constants.KB * constants.YRange * b2;
        const cr16 = constants.CbCrOffset + (constants.HalfCbCrRange * r1 - constants.KGoKRi * g1 - constants.KBoKRi * b1);
        buffer.writeUInt32BE(genColor(a1, cb16, y16a), i);
        buffer.writeUInt32BE(genColor(a2, cr16, y16b), i + 4);
      }
      return buffer;
    }
    exports2.convertRGBAToYUV422 = convertRGBAToYUV422;
  }
});

// node_modules/atem-connection/dist/lib/converters/rle.js
var require_rle = __commonJS({
  "node_modules/atem-connection/dist/lib/converters/rle.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decodeRLE = exports2.encodeRLE = exports2.RLE_HEADER = void 0;
    exports2.RLE_HEADER = 0xfefefefefefefefen;
    function encodeRLE(data) {
      const result = Buffer.alloc(data.length);
      let lastBlock = data.readBigUInt64BE();
      let identicalCount = 0;
      let differentCount = 0;
      let resultOffset = -8;
      for (let sourceOffset = 8; sourceOffset < data.length; sourceOffset += 8) {
        const block = data.readBigUInt64BE(sourceOffset);
        if (block === lastBlock) {
          ++identicalCount;
          if (differentCount) {
            data.copy(result, resultOffset + 8, sourceOffset - 8 * (differentCount + 1), sourceOffset - 8);
            resultOffset += differentCount * 8;
            differentCount = 0;
          }
          lastBlock = block;
          continue;
        }
        if (identicalCount > 2) {
          result.writeBigUInt64BE(exports2.RLE_HEADER, resultOffset += 8);
          result.writeBigUInt64BE(BigInt(identicalCount + 1), resultOffset += 8);
          result.writeBigUInt64BE(lastBlock, resultOffset += 8);
        } else if (identicalCount > 0) {
          for (let i = 0; i <= identicalCount; ++i) {
            result.writeBigUInt64BE(lastBlock, resultOffset += 8);
          }
        } else {
          ++differentCount;
        }
        lastBlock = block;
        identicalCount = 0;
      }
      if (identicalCount > 2) {
        result.writeBigUInt64BE(exports2.RLE_HEADER, resultOffset += 8);
        result.writeBigUInt64BE(BigInt(identicalCount + 1), resultOffset += 8);
        result.writeBigUInt64BE(lastBlock, resultOffset += 8);
      } else if (identicalCount > 0) {
        for (let i = 0; i <= identicalCount; ++i) {
          result.writeBigUInt64BE(lastBlock, resultOffset += 8);
        }
      } else {
        ++differentCount;
        data.copy(result, resultOffset + 8, data.length - 8 * differentCount, data.length);
        resultOffset += differentCount * 8;
      }
      return result.slice(0, resultOffset + 8);
    }
    exports2.encodeRLE = encodeRLE;
    function decodeRLE(data, fullSize) {
      const result = Buffer.alloc(fullSize);
      let resultOffset = -8;
      for (let sourceOffset = 0; sourceOffset < data.length; sourceOffset += 8) {
        const block = data.readBigUInt64BE(sourceOffset);
        if (block === exports2.RLE_HEADER) {
          sourceOffset += 8;
          const repeatCount = Number(data.readBigUInt64BE(sourceOffset));
          sourceOffset += 8;
          const repeatBlock = data.readBigUInt64BE(sourceOffset);
          for (let i = 0; i < repeatCount; i++) {
            result.writeBigUInt64BE(repeatBlock, resultOffset += 8);
          }
        } else {
          result.writeBigUInt64BE(block, resultOffset += 8);
        }
      }
      return result;
    }
    exports2.decodeRLE = decodeRLE;
  }
});

// node_modules/atem-connection/dist/dataTransfer/dataTransferUploadBuffer.js
var require_dataTransferUploadBuffer = __commonJS({
  "node_modules/atem-connection/dist/dataTransfer/dataTransferUploadBuffer.js"(exports2) {
    "use strict";
    var _DataTransferUploadBuffer_bytesSent;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataTransferUploadBuffer = exports2.generateUploadBufferInfo = exports2.generateHashForBuffer = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var DataTransfer_1 = require_DataTransfer();
    var crypto = require("crypto");
    var dataTransfer_1 = require_dataTransfer();
    var debug0 = require_src();
    var rgbaToYuv422_1 = require_rgbaToYuv422();
    var rle_1 = require_rle();
    var debug = debug0("atem-connection:data-transfer:upload-buffer");
    function generateHashForBuffer(data) {
      return data ? crypto.createHash("md5").update(data).digest("base64") : "";
    }
    exports2.generateHashForBuffer = generateHashForBuffer;
    function generateUploadBufferInfo(data, resolution, shouldEncodeRLE) {
      const expectedLength = resolution.width * resolution.height * 4;
      if (Buffer.isBuffer(data)) {
        if (data.length !== expectedLength)
          throw new Error(`Pixel buffer has incorrect length. Received ${data.length} expected ${expectedLength}`);
        const encodedData = (0, rgbaToYuv422_1.convertRGBAToYUV422)(resolution.width, resolution.height, data);
        return {
          encodedData: shouldEncodeRLE ? (0, rle_1.encodeRLE)(encodedData) : encodedData,
          rawDataLength: encodedData.length,
          isRleEncoded: shouldEncodeRLE,
          hash: generateHashForBuffer(encodedData)
        };
      } else {
        const result = { ...data };
        if (data.rawDataLength !== expectedLength)
          throw new Error(`Pixel buffer has incorrect length. Received ${data.rawDataLength} expected ${expectedLength}`);
        if (shouldEncodeRLE && !data.isRleEncoded) {
          data.isRleEncoded = true;
          data.encodedData = (0, rle_1.encodeRLE)(data.encodedData);
        }
        return result;
      }
    }
    exports2.generateUploadBufferInfo = generateUploadBufferInfo;
    var DataTransferUploadBuffer = class extends dataTransfer_1.DataTransfer {
      constructor(buffer) {
        super();
        _DataTransferUploadBuffer_bytesSent.set(this, 0);
        this.hash = buffer.hash ?? generateHashForBuffer(buffer.encodedData);
        this.data = buffer.encodedData;
      }
      async handleCommand(command, oldState) {
        if (command instanceof DataTransfer_1.DataTransferErrorCommand) {
          switch (command.properties.errorCode) {
            case DataTransfer_1.ErrorCode.Retry:
              return this.restartTransfer(command.properties.transferId);
            case DataTransfer_1.ErrorCode.NotFound:
              this.abort(new Error("Invalid upload"));
              return {
                newState: dataTransfer_1.DataTransferState.Finished,
                commands: []
              };
            default:
              this.abort(new Error(`Unknown error ${command.properties.errorCode}`));
              return {
                newState: dataTransfer_1.DataTransferState.Finished,
                commands: []
              };
          }
        } else if (command instanceof DataTransfer_1.DataTransferUploadContinueCommand) {
          const result = {
            newState: oldState,
            commands: []
          };
          if (oldState === dataTransfer_1.DataTransferState.Ready) {
            result.newState = dataTransfer_1.DataTransferState.Transferring;
            result.commands.push(this.generateDescriptionCommand(command.properties.transferId));
          }
          const nextChunks = this.getNextChunks(command.properties);
          result.commands.push(...nextChunks);
          return result;
        } else if (command instanceof DataTransfer_1.DataTransferCompleteCommand) {
          if (oldState === dataTransfer_1.DataTransferState.Transferring) {
            this.resolvePromise();
            return {
              newState: dataTransfer_1.DataTransferState.Finished,
              commands: []
            };
          } else {
            return { newState: oldState, commands: [] };
          }
        } else {
          return { newState: oldState, commands: [] };
        }
      }
      getNextChunks(props) {
        const commands = [];
        const chunkSize = Math.floor(props.chunkSize / 8) * 8;
        for (let i = 0; i < props.chunkCount; i++) {
          if (tslib_1.__classPrivateFieldGet(this, _DataTransferUploadBuffer_bytesSent, "f") >= this.data.length)
            break;
          let shortenBy = 0;
          if (chunkSize + tslib_1.__classPrivateFieldGet(this, _DataTransferUploadBuffer_bytesSent, "f") > this.data.length) {
            shortenBy = tslib_1.__classPrivateFieldGet(this, _DataTransferUploadBuffer_bytesSent, "f") + chunkSize - this.data.length;
          } else if (rle_1.RLE_HEADER === this.data.readBigUint64BE(tslib_1.__classPrivateFieldGet(this, _DataTransferUploadBuffer_bytesSent, "f") + chunkSize - 8)) {
            shortenBy = 8;
          } else if (rle_1.RLE_HEADER === this.data.readBigUint64BE(tslib_1.__classPrivateFieldGet(this, _DataTransferUploadBuffer_bytesSent, "f") + chunkSize - 16)) {
            shortenBy = 16;
          }
          commands.push(new DataTransfer_1.DataTransferDataCommand({
            transferId: props.transferId,
            body: this.data.slice(tslib_1.__classPrivateFieldGet(this, _DataTransferUploadBuffer_bytesSent, "f"), tslib_1.__classPrivateFieldGet(this, _DataTransferUploadBuffer_bytesSent, "f") + chunkSize - shortenBy)
          }));
          tslib_1.__classPrivateFieldSet(this, _DataTransferUploadBuffer_bytesSent, tslib_1.__classPrivateFieldGet(this, _DataTransferUploadBuffer_bytesSent, "f") + (chunkSize - shortenBy), "f");
        }
        debug(`Generated ${commands.length} chunks for size ${chunkSize}`);
        return commands;
      }
    };
    exports2.DataTransferUploadBuffer = DataTransferUploadBuffer;
    _DataTransferUploadBuffer_bytesSent = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/atem-connection/dist/dataTransfer/dataTransferUploadStill.js
var require_dataTransferUploadStill = __commonJS({
  "node_modules/atem-connection/dist/dataTransfer/dataTransferUploadStill.js"(exports2) {
    "use strict";
    var _DataTransferUploadStill_stillIndex;
    var _DataTransferUploadStill_name;
    var _DataTransferUploadStill_description;
    var _DataTransferUploadStill_dataLength;
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var DataTransfer_1 = require_DataTransfer();
    var dataTransfer_1 = require_dataTransfer();
    var dataTransferUploadBuffer_1 = require_dataTransferUploadBuffer();
    var DataTransferUploadStill = class extends dataTransferUploadBuffer_1.DataTransferUploadBuffer {
      constructor(stillIndex, buffer, name, description) {
        super(buffer);
        _DataTransferUploadStill_stillIndex.set(this, void 0);
        _DataTransferUploadStill_name.set(this, void 0);
        _DataTransferUploadStill_description.set(this, void 0);
        _DataTransferUploadStill_dataLength.set(this, void 0);
        tslib_1.__classPrivateFieldSet(this, _DataTransferUploadStill_stillIndex, stillIndex, "f");
        tslib_1.__classPrivateFieldSet(this, _DataTransferUploadStill_name, name, "f");
        tslib_1.__classPrivateFieldSet(this, _DataTransferUploadStill_description, description, "f");
        tslib_1.__classPrivateFieldSet(this, _DataTransferUploadStill_dataLength, buffer.rawDataLength, "f");
      }
      async startTransfer(transferId) {
        const command = new DataTransfer_1.DataTransferUploadRequestCommand({
          transferId,
          transferStoreId: 0,
          transferIndex: tslib_1.__classPrivateFieldGet(this, _DataTransferUploadStill_stillIndex, "f"),
          size: tslib_1.__classPrivateFieldGet(this, _DataTransferUploadStill_dataLength, "f"),
          mode: 1
        });
        return {
          newState: dataTransfer_1.DataTransferState.Ready,
          commands: [command]
        };
      }
      generateDescriptionCommand(transferId) {
        return new DataTransfer_1.DataTransferFileDescriptionCommand({
          description: tslib_1.__classPrivateFieldGet(this, _DataTransferUploadStill_description, "f"),
          name: tslib_1.__classPrivateFieldGet(this, _DataTransferUploadStill_name, "f"),
          fileHash: this.hash,
          transferId
        });
      }
    };
    exports2.default = DataTransferUploadStill;
    _DataTransferUploadStill_stillIndex = /* @__PURE__ */ new WeakMap(), _DataTransferUploadStill_name = /* @__PURE__ */ new WeakMap(), _DataTransferUploadStill_description = /* @__PURE__ */ new WeakMap(), _DataTransferUploadStill_dataLength = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/atem-connection/dist/dataTransfer/dataTransferUploadClip.js
var require_dataTransferUploadClip = __commonJS({
  "node_modules/atem-connection/dist/dataTransfer/dataTransferUploadClip.js"(exports2) {
    "use strict";
    var _DataTransferUploadClip_clipIndex;
    var _DataTransferUploadClip_name;
    var _DataTransferUploadClip_frames;
    var _DataTransferUploadClip_nextTransferId;
    var _DataTransferUploadClip_currentFrame;
    var _DataTransferUploadClip_numFrames;
    var _DataTransferUploadClipFrame_clipIndex;
    var _DataTransferUploadClipFrame_frameIndex;
    var _DataTransferUploadClipFrame_dataLength;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataTransferUploadClipFrame = exports2.DataTransferUploadClip = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var DataTransfer_1 = require_DataTransfer();
    var dataTransfer_1 = require_dataTransfer();
    var Media_1 = require_Media();
    var debug0 = require_src();
    var dataTransferUploadBuffer_1 = require_dataTransferUploadBuffer();
    var debug = debug0("atem-connection:data-transfer:upload-clip");
    var DataTransferUploadClip = class extends dataTransfer_1.DataTransfer {
      constructor(clipIndex, name, frames, nextTransferId) {
        super();
        _DataTransferUploadClip_clipIndex.set(this, void 0);
        _DataTransferUploadClip_name.set(this, void 0);
        _DataTransferUploadClip_frames.set(this, void 0);
        _DataTransferUploadClip_nextTransferId.set(this, void 0);
        _DataTransferUploadClip_currentFrame.set(this, void 0);
        _DataTransferUploadClip_numFrames.set(this, 0);
        tslib_1.__classPrivateFieldSet(this, _DataTransferUploadClip_clipIndex, clipIndex, "f");
        tslib_1.__classPrivateFieldSet(this, _DataTransferUploadClip_name, name, "f");
        tslib_1.__classPrivateFieldSet(this, _DataTransferUploadClip_frames, frames, "f");
        tslib_1.__classPrivateFieldSet(this, _DataTransferUploadClip_nextTransferId, nextTransferId, "f");
      }
      async nextFrame() {
        const next = await tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_frames, "f").next();
        return next.value;
      }
      async startTransfer(transferId) {
        var _a;
        tslib_1.__classPrivateFieldSet(this, _DataTransferUploadClip_currentFrame, await this.nextFrame(), "f");
        if (!tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_currentFrame, "f")) {
          throw new Error("No frames available for transfer");
        }
        tslib_1.__classPrivateFieldSet(this, _DataTransferUploadClip_numFrames, (_a = tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_numFrames, "f"), _a++, _a), "f");
        const frameResult = await tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_currentFrame, "f").startTransfer(transferId);
        return {
          newState: dataTransfer_1.DataTransferState.Ready,
          commands: [new Media_1.MediaPoolClearClipCommand(tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_clipIndex, "f")), ...frameResult.commands]
        };
      }
      /** Restart the current transfer */
      async restartTransfer(transferId) {
        if (tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_currentFrame, "f")) {
          return tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_currentFrame, "f").startTransfer(transferId);
        } else {
          return this.startTransfer(transferId);
        }
      }
      async handleCommand(command, oldState) {
        var _a;
        if (!tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_currentFrame, "f")) {
          throw new Error("No frames available for transfer");
        }
        const frameResult = await tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_currentFrame, "f").handleCommand(command, oldState);
        debug(`handleCommand: ${dataTransfer_1.DataTransferState[frameResult.newState]} - Giving ${frameResult.commands.length} commands`);
        if (frameResult.newState === dataTransfer_1.DataTransferState.Finished) {
          tslib_1.__classPrivateFieldSet(this, _DataTransferUploadClip_currentFrame, await this.nextFrame(), "f");
          debug(`Start next frame (${!!tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_currentFrame, "f")})`);
          if (tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_currentFrame, "f")) {
            tslib_1.__classPrivateFieldSet(this, _DataTransferUploadClip_numFrames, (_a = tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_numFrames, "f"), _a++, _a), "f");
            const newId = tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_nextTransferId, "f").call(this);
            const newFrameResult = await tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_currentFrame, "f").startTransfer(newId);
            return {
              newState: dataTransfer_1.DataTransferState.Ready,
              newId,
              commands: [...frameResult.commands, ...newFrameResult.commands]
            };
          } else {
            this.resolvePromise();
            debug(`Clip complete`);
            return {
              newState: dataTransfer_1.DataTransferState.Finished,
              commands: [
                ...frameResult.commands,
                new Media_1.MediaPoolSetClipCommand({
                  index: tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_clipIndex, "f"),
                  name: tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_name, "f"),
                  frames: tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClip_numFrames, "f")
                })
              ]
            };
          }
        } else {
          return {
            newState: dataTransfer_1.DataTransferState.Transferring,
            commands: frameResult.commands
          };
        }
      }
    };
    exports2.DataTransferUploadClip = DataTransferUploadClip;
    _DataTransferUploadClip_clipIndex = /* @__PURE__ */ new WeakMap(), _DataTransferUploadClip_name = /* @__PURE__ */ new WeakMap(), _DataTransferUploadClip_frames = /* @__PURE__ */ new WeakMap(), _DataTransferUploadClip_nextTransferId = /* @__PURE__ */ new WeakMap(), _DataTransferUploadClip_currentFrame = /* @__PURE__ */ new WeakMap(), _DataTransferUploadClip_numFrames = /* @__PURE__ */ new WeakMap();
    var DataTransferUploadClipFrame = class extends dataTransferUploadBuffer_1.DataTransferUploadBuffer {
      constructor(clipIndex, frameIndex, buffer) {
        super(buffer);
        _DataTransferUploadClipFrame_clipIndex.set(this, void 0);
        _DataTransferUploadClipFrame_frameIndex.set(this, void 0);
        _DataTransferUploadClipFrame_dataLength.set(this, void 0);
        tslib_1.__classPrivateFieldSet(this, _DataTransferUploadClipFrame_clipIndex, clipIndex, "f");
        tslib_1.__classPrivateFieldSet(this, _DataTransferUploadClipFrame_frameIndex, frameIndex, "f");
        tslib_1.__classPrivateFieldSet(this, _DataTransferUploadClipFrame_dataLength, buffer.rawDataLength, "f");
      }
      async startTransfer(transferId) {
        debug(`Start transfer ${transferId} (${tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClipFrame_dataLength, "f")})`);
        const command = new DataTransfer_1.DataTransferUploadRequestCommand({
          transferId,
          transferStoreId: tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClipFrame_clipIndex, "f") + 1,
          transferIndex: tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClipFrame_frameIndex, "f"),
          size: tslib_1.__classPrivateFieldGet(this, _DataTransferUploadClipFrame_dataLength, "f"),
          mode: 1
        });
        return {
          newState: dataTransfer_1.DataTransferState.Ready,
          commands: [command]
        };
      }
      generateDescriptionCommand(transferId) {
        debug(`Generate frame description for transfer ${transferId}`);
        return new DataTransfer_1.DataTransferFileDescriptionCommand({
          name: void 0,
          description: void 0,
          fileHash: this.hash,
          transferId
        });
      }
    };
    exports2.DataTransferUploadClipFrame = DataTransferUploadClipFrame;
    _DataTransferUploadClipFrame_clipIndex = /* @__PURE__ */ new WeakMap(), _DataTransferUploadClipFrame_frameIndex = /* @__PURE__ */ new WeakMap(), _DataTransferUploadClipFrame_dataLength = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/atem-connection/dist/dataTransfer/dataTransferUploadAudio.js
var require_dataTransferUploadAudio = __commonJS({
  "node_modules/atem-connection/dist/dataTransfer/dataTransferUploadAudio.js"(exports2) {
    "use strict";
    var _DataTransferUploadAudio_clipIndex;
    var _DataTransferUploadAudio_name;
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var dataTransferUploadBuffer_1 = require_dataTransferUploadBuffer();
    var DataTransfer_1 = require_DataTransfer();
    var dataTransfer_1 = require_dataTransfer();
    var DataTransferUploadAudio = class extends dataTransferUploadBuffer_1.DataTransferUploadBuffer {
      constructor(clipIndex, data, name) {
        super({
          encodedData: data,
          rawDataLength: data.length,
          isRleEncoded: false,
          hash: null
        });
        _DataTransferUploadAudio_clipIndex.set(this, void 0);
        _DataTransferUploadAudio_name.set(this, void 0);
        tslib_1.__classPrivateFieldSet(this, _DataTransferUploadAudio_clipIndex, clipIndex, "f");
        tslib_1.__classPrivateFieldSet(this, _DataTransferUploadAudio_name, name, "f");
      }
      async startTransfer(transferId) {
        const command = new DataTransfer_1.DataTransferUploadRequestCommand({
          transferId,
          transferStoreId: tslib_1.__classPrivateFieldGet(this, _DataTransferUploadAudio_clipIndex, "f") + 1,
          transferIndex: 0,
          size: this.data.length,
          mode: 256
        });
        return {
          newState: dataTransfer_1.DataTransferState.Ready,
          commands: [command]
        };
      }
      generateDescriptionCommand(transferId) {
        return new DataTransfer_1.DataTransferFileDescriptionCommand({
          name: tslib_1.__classPrivateFieldGet(this, _DataTransferUploadAudio_name, "f"),
          description: void 0,
          fileHash: this.hash,
          transferId
        });
      }
    };
    exports2.default = DataTransferUploadAudio;
    _DataTransferUploadAudio_clipIndex = /* @__PURE__ */ new WeakMap(), _DataTransferUploadAudio_name = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/atem-connection/dist/dataTransfer/dataTransferUploadMultiViewerLabel.js
var require_dataTransferUploadMultiViewerLabel = __commonJS({
  "node_modules/atem-connection/dist/dataTransfer/dataTransferUploadMultiViewerLabel.js"(exports2) {
    "use strict";
    var _DataTransferUploadMultiViewerLabel_sourceId;
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var dataTransferUploadBuffer_1 = require_dataTransferUploadBuffer();
    var DataTransfer_1 = require_DataTransfer();
    var dataTransfer_1 = require_dataTransfer();
    var DataTransferUploadMultiViewerLabel = class extends dataTransferUploadBuffer_1.DataTransferUploadBuffer {
      constructor(sourceId, data) {
        super({
          encodedData: data,
          rawDataLength: data.length,
          isRleEncoded: false,
          hash: null
        });
        _DataTransferUploadMultiViewerLabel_sourceId.set(this, void 0);
        tslib_1.__classPrivateFieldSet(this, _DataTransferUploadMultiViewerLabel_sourceId, sourceId, "f");
      }
      async startTransfer(transferId) {
        const command = new DataTransfer_1.DataTransferUploadRequestCommand({
          transferId,
          transferStoreId: 65535,
          transferIndex: tslib_1.__classPrivateFieldGet(this, _DataTransferUploadMultiViewerLabel_sourceId, "f"),
          size: this.data.length,
          mode: 513
        });
        return {
          newState: dataTransfer_1.DataTransferState.Ready,
          commands: [command]
        };
      }
      generateDescriptionCommand(transferId) {
        return new DataTransfer_1.DataTransferFileDescriptionCommand({
          description: "",
          name: "Label",
          fileHash: this.hash,
          transferId
        });
      }
    };
    exports2.default = DataTransferUploadMultiViewerLabel;
    _DataTransferUploadMultiViewerLabel_sourceId = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/atem-connection/dist/dataTransfer/dataTransferDownloadMacro.js
var require_dataTransferDownloadMacro = __commonJS({
  "node_modules/atem-connection/dist/dataTransfer/dataTransferDownloadMacro.js"(exports2) {
    "use strict";
    var _DataTransferDownloadMacro_data;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataTransferDownloadMacro = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var DataTransfer_1 = require_DataTransfer();
    var dataTransfer_1 = require_dataTransfer();
    var DataTransferDownloadMacro = class extends dataTransfer_1.DataTransfer {
      constructor(macroIndex) {
        super();
        this.macroIndex = macroIndex;
        _DataTransferDownloadMacro_data.set(this, Buffer.alloc(0));
      }
      async startTransfer(transferId) {
        const command = new DataTransfer_1.DataTransferDownloadRequestCommand({
          transferId,
          transferStoreId: 65535,
          transferIndex: this.macroIndex,
          transferType: 3
        });
        return {
          newState: dataTransfer_1.DataTransferState.Ready,
          commands: [command]
        };
      }
      async handleCommand(command, oldState) {
        if (command instanceof DataTransfer_1.DataTransferErrorCommand) {
          switch (command.properties.errorCode) {
            case DataTransfer_1.ErrorCode.Retry:
              return this.restartTransfer(command.properties.transferId);
            case DataTransfer_1.ErrorCode.NotFound:
              this.abort(new Error("Invalid download"));
              return {
                newState: dataTransfer_1.DataTransferState.Finished,
                commands: []
              };
            default:
              this.abort(new Error(`Unknown error ${command.properties.errorCode}`));
              return {
                newState: dataTransfer_1.DataTransferState.Finished,
                commands: []
              };
          }
        } else if (command instanceof DataTransfer_1.DataTransferDataCommand) {
          tslib_1.__classPrivateFieldSet(this, _DataTransferDownloadMacro_data, command.properties.body, "f");
          return {
            newState: oldState,
            commands: [
              new DataTransfer_1.DataTransferAckCommand({
                transferId: command.properties.transferId,
                transferIndex: this.macroIndex
              })
            ]
          };
        } else if (command instanceof DataTransfer_1.DataTransferCompleteCommand) {
          this.resolvePromise(tslib_1.__classPrivateFieldGet(this, _DataTransferDownloadMacro_data, "f"));
          return {
            newState: dataTransfer_1.DataTransferState.Finished,
            commands: []
          };
        }
        return { newState: oldState, commands: [] };
      }
    };
    exports2.DataTransferDownloadMacro = DataTransferDownloadMacro;
    _DataTransferDownloadMacro_data = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/atem-connection/dist/dataTransfer/dataTransferUploadMacro.js
var require_dataTransferUploadMacro = __commonJS({
  "node_modules/atem-connection/dist/dataTransfer/dataTransferUploadMacro.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataTransferUploadMacro = void 0;
    var DataTransfer_1 = require_DataTransfer();
    var dataTransfer_1 = require_dataTransfer();
    var dataTransferUploadBuffer_1 = require_dataTransferUploadBuffer();
    var DataTransferUploadMacro = class extends dataTransferUploadBuffer_1.DataTransferUploadBuffer {
      constructor(macroIndex, data, name) {
        super({
          encodedData: data,
          rawDataLength: data.length,
          isRleEncoded: false,
          hash: null
        });
        this.macroIndex = macroIndex;
        this.data = data;
        this.name = name;
      }
      async startTransfer(transferId) {
        const command = new DataTransfer_1.DataTransferUploadRequestCommand({
          transferId,
          transferStoreId: 65535,
          transferIndex: this.macroIndex,
          size: this.data.length,
          mode: 768
        });
        return {
          newState: dataTransfer_1.DataTransferState.Ready,
          commands: [command]
        };
      }
      generateDescriptionCommand(transferId) {
        return new DataTransfer_1.DataTransferFileDescriptionCommand({
          name: this.name,
          description: void 0,
          fileHash: "",
          transferId
        });
      }
    };
    exports2.DataTransferUploadMacro = DataTransferUploadMacro;
  }
});

// node_modules/atem-connection/dist/dataTransfer/dataTransferDownloadStill.js
var require_dataTransferDownloadStill = __commonJS({
  "node_modules/atem-connection/dist/dataTransfer/dataTransferDownloadStill.js"(exports2) {
    "use strict";
    var _DataTransferDownloadStill_data;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataTransferDownloadStill = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var DataTransfer_1 = require_DataTransfer();
    var dataTransfer_1 = require_dataTransfer();
    var DataTransferDownloadStill = class extends dataTransfer_1.DataTransfer {
      constructor(poolIndex, stillIndex) {
        super();
        this.poolIndex = poolIndex;
        this.stillIndex = stillIndex;
        _DataTransferDownloadStill_data.set(this, []);
      }
      async startTransfer(transferId) {
        const command = new DataTransfer_1.DataTransferDownloadRequestCommand({
          transferId,
          transferStoreId: this.poolIndex,
          transferIndex: this.stillIndex,
          transferType: 249
        });
        return {
          newState: dataTransfer_1.DataTransferState.Ready,
          commands: [command]
        };
      }
      async handleCommand(command, oldState) {
        if (command instanceof DataTransfer_1.DataTransferErrorCommand) {
          switch (command.properties.errorCode) {
            case DataTransfer_1.ErrorCode.Retry:
              return this.restartTransfer(command.properties.transferId);
            case DataTransfer_1.ErrorCode.NotFound:
              this.abort(new Error("Invalid download"));
              return {
                newState: dataTransfer_1.DataTransferState.Finished,
                commands: []
              };
            default:
              this.abort(new Error(`Unknown error ${command.properties.errorCode}`));
              return {
                newState: dataTransfer_1.DataTransferState.Finished,
                commands: []
              };
          }
        } else if (command instanceof DataTransfer_1.DataTransferDataCommand) {
          tslib_1.__classPrivateFieldGet(this, _DataTransferDownloadStill_data, "f").push(command.properties.body);
          return {
            newState: oldState,
            commands: [
              new DataTransfer_1.DataTransferAckCommand({
                transferId: command.properties.transferId,
                transferIndex: this.stillIndex
              })
            ]
          };
        } else if (command instanceof DataTransfer_1.DataTransferCompleteCommand) {
          this.resolvePromise(Buffer.concat(tslib_1.__classPrivateFieldGet(this, _DataTransferDownloadStill_data, "f")));
          return {
            newState: dataTransfer_1.DataTransferState.Finished,
            commands: []
          };
        }
        return { newState: oldState, commands: [] };
      }
    };
    exports2.DataTransferDownloadStill = DataTransferDownloadStill;
    _DataTransferDownloadStill_data = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/atem-connection/dist/dataTransfer/index.js
var require_dataTransfer2 = __commonJS({
  "node_modules/atem-connection/dist/dataTransfer/index.js"(exports2) {
    "use strict";
    var _DataTransferManager_nextTransferIdInner;
    var _DataTransferManager_nextTransferId;
    var _DataTransferManager_sendLockCommand;
    var _DataTransferManager_stillsLock;
    var _DataTransferManager_clipLocks;
    var _DataTransferManager_labelsLock;
    var _DataTransferManager_macroLock;
    var _DataTransferManager_rawSendCommands;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataTransferManager = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var exitHook = require_exit_hook();
    var dataTransferQueue_1 = require_dataTransferQueue();
    var dataTransferUploadStill_1 = require_dataTransferUploadStill();
    var dataTransferUploadClip_1 = require_dataTransferUploadClip();
    var dataTransferUploadAudio_1 = require_dataTransferUploadAudio();
    var dataTransferUploadMultiViewerLabel_1 = require_dataTransferUploadMultiViewerLabel();
    var dataTransferDownloadMacro_1 = require_dataTransferDownloadMacro();
    var dataTransferUploadMacro_1 = require_dataTransferUploadMacro();
    var DataTransfer_1 = require_DataTransfer();
    var debug_1 = require_src();
    var dataTransferDownloadStill_1 = require_dataTransferDownloadStill();
    var MAX_PACKETS_TO_SEND_PER_TICK = 50;
    var MAX_TRANSFER_INDEX = (1 << 16) - 1;
    var debug = (0, debug_1.default)("atem-connection:data-transfer:manager");
    var DataTransferManager = class {
      constructor(rawSendCommands) {
        _DataTransferManager_nextTransferIdInner.set(this, 0);
        _DataTransferManager_nextTransferId.set(this, () => {
          var _a, _b;
          const index = (tslib_1.__classPrivateFieldSet(this, _DataTransferManager_nextTransferIdInner, (_b = tslib_1.__classPrivateFieldGet(this, _DataTransferManager_nextTransferIdInner, "f"), _a = _b++, _b), "f"), _a);
          if (tslib_1.__classPrivateFieldGet(this, _DataTransferManager_nextTransferIdInner, "f") > MAX_TRANSFER_INDEX)
            tslib_1.__classPrivateFieldSet(this, _DataTransferManager_nextTransferIdInner, 0, "f");
          return index;
        });
        _DataTransferManager_sendLockCommand.set(this, (cmd) => {
          tslib_1.__classPrivateFieldGet(this, _DataTransferManager_rawSendCommands, "f").call(this, [cmd]).catch((e) => {
            debug(`Failed to send lock command: ${e}`);
          });
        });
        _DataTransferManager_stillsLock.set(this, new dataTransferQueue_1.DataTransferLockingQueue(0, tslib_1.__classPrivateFieldGet(this, _DataTransferManager_sendLockCommand, "f"), tslib_1.__classPrivateFieldGet(this, _DataTransferManager_nextTransferId, "f")));
        _DataTransferManager_clipLocks.set(this, /* @__PURE__ */ new Map());
        _DataTransferManager_labelsLock.set(this, new dataTransferQueue_1.DataTransferSimpleQueue(tslib_1.__classPrivateFieldGet(this, _DataTransferManager_nextTransferId, "f")));
        _DataTransferManager_macroLock.set(this, new dataTransferQueue_1.DataTransferSimpleQueue(tslib_1.__classPrivateFieldGet(this, _DataTransferManager_nextTransferId, "f")));
        _DataTransferManager_rawSendCommands.set(this, void 0);
        tslib_1.__classPrivateFieldSet(this, _DataTransferManager_rawSendCommands, rawSendCommands, "f");
      }
      get allLocks() {
        return [tslib_1.__classPrivateFieldGet(this, _DataTransferManager_stillsLock, "f"), ...tslib_1.__classPrivateFieldGet(this, _DataTransferManager_clipLocks, "f").values(), tslib_1.__classPrivateFieldGet(this, _DataTransferManager_labelsLock, "f"), tslib_1.__classPrivateFieldGet(this, _DataTransferManager_macroLock, "f")];
      }
      /**
       * Start sending of commands
       * This is called once the connection has received the initial state data
       */
      startCommandSending(skipUnlockAll) {
        if (!this.interval) {
          if (!skipUnlockAll) {
            debug(`Clearing all held locks`);
            for (const lock of this.allLocks) {
              lock.clearQueueAndAbort(new Error("Restarting connection"));
            }
          }
          this.interval = setInterval(() => {
            for (const lock of this.allLocks) {
              const commandsToSend = lock.popQueuedCommands(MAX_PACKETS_TO_SEND_PER_TICK);
              if (commandsToSend && commandsToSend.length > 0) {
                tslib_1.__classPrivateFieldGet(this, _DataTransferManager_rawSendCommands, "f").call(this, commandsToSend).catch((e) => {
                  lock.tryAbortTransfer(new Error(`Command send failed: ${e}`));
                });
              }
            }
          }, 2);
        }
        if (!this.exitUnsubscribe) {
          this.exitUnsubscribe = exitHook(() => {
            debug(`Exit auto-cleanup`);
            this.stopCommandSending();
          });
        }
      }
      /**
       * Stop sending of commands
       * This is called once the connection is disconnected
       */
      stopCommandSending() {
        debug("Stopping command sending");
        for (const lock of this.allLocks) {
          lock.clearQueueAndAbort(new Error("Stopping connection"));
        }
        if (this.exitUnsubscribe) {
          this.exitUnsubscribe();
          this.exitUnsubscribe = void 0;
        }
        if (this.interval) {
          clearInterval(this.interval);
          this.interval = void 0;
        }
      }
      /**
       * Queue the handling of a received command
       * We do it via a queue as some of the handlers need to be async, and we don't want to block state updates from happening in parallel
       */
      queueHandleCommand(command) {
        debug(`Received command ${command.constructor.name}: ${JSON.stringify(command)}`);
        if (command instanceof DataTransfer_1.LockObtainedCommand || command instanceof DataTransfer_1.LockStateUpdateCommand) {
          let lock;
          if (command.properties.index === 0) {
            lock = tslib_1.__classPrivateFieldGet(this, _DataTransferManager_stillsLock, "f");
          } else if (command.properties.index >= 100) {
            return;
          } else {
            lock = tslib_1.__classPrivateFieldGet(this, _DataTransferManager_clipLocks, "f").get(command.properties.index - 1);
          }
          if (!lock)
            lock = new dataTransferQueue_1.DataTransferLockingQueue(command.properties.index, tslib_1.__classPrivateFieldGet(this, _DataTransferManager_sendLockCommand, "f"), tslib_1.__classPrivateFieldGet(this, _DataTransferManager_nextTransferId, "f"));
          if (command instanceof DataTransfer_1.LockObtainedCommand) {
            lock.lockObtained();
          } else if (command instanceof DataTransfer_1.LockStateUpdateCommand) {
            lock.updateLock(command.properties.locked);
          }
          return;
        }
        if (command.properties.transferId !== void 0) {
          let lock;
          for (const _lock of this.allLocks) {
            if (_lock.currentTransferId === command.properties.transferId) {
              lock = _lock;
            }
          }
          if (!lock)
            return;
          lock.handleCommand(command);
        }
      }
      async downloadClipFrame(clipIndex, frameIndex) {
        if (clipIndex < 0 || clipIndex >= 2) {
          throw new Error("Invalid clip index");
        }
        const transfer = new dataTransferDownloadStill_1.DataTransferDownloadStill(clipIndex + 1, frameIndex);
        return this.getClipLock(clipIndex).enqueue(transfer);
      }
      async downloadStill(index) {
        const transfer = new dataTransferDownloadStill_1.DataTransferDownloadStill(0, index);
        return tslib_1.__classPrivateFieldGet(this, _DataTransferManager_stillsLock, "f").enqueue(transfer);
      }
      async uploadStill(index, data, name, description) {
        const transfer = new dataTransferUploadStill_1.default(index, data, name, description);
        return tslib_1.__classPrivateFieldGet(this, _DataTransferManager_stillsLock, "f").enqueue(transfer);
      }
      async uploadClip(index, data, name) {
        const provideFrame = async function* () {
          let id = -1;
          for await (const frame of data) {
            id++;
            yield new dataTransferUploadClip_1.DataTransferUploadClipFrame(index, id, frame);
          }
          return void 0;
        };
        const transfer = new dataTransferUploadClip_1.DataTransferUploadClip(index, name, provideFrame(), tslib_1.__classPrivateFieldGet(this, _DataTransferManager_nextTransferId, "f"));
        const lock = this.getClipLock(index);
        return lock.enqueue(transfer);
      }
      async uploadAudio(index, data, name) {
        const transfer = new dataTransferUploadAudio_1.default(index, data, name);
        const lock = this.getClipLock(index);
        return lock.enqueue(transfer);
      }
      async downloadMacro(index) {
        const transfer = new dataTransferDownloadMacro_1.DataTransferDownloadMacro(index);
        return tslib_1.__classPrivateFieldGet(this, _DataTransferManager_macroLock, "f").enqueue(transfer);
      }
      async uploadMacro(index, data, name) {
        const transfer = new dataTransferUploadMacro_1.DataTransferUploadMacro(index, data, name);
        return tslib_1.__classPrivateFieldGet(this, _DataTransferManager_macroLock, "f").enqueue(transfer);
      }
      async uploadMultiViewerLabel(index, data) {
        const transfer = new dataTransferUploadMultiViewerLabel_1.default(index, data);
        return tslib_1.__classPrivateFieldGet(this, _DataTransferManager_labelsLock, "f").enqueue(transfer);
      }
      getClipLock(index) {
        const lock = tslib_1.__classPrivateFieldGet(this, _DataTransferManager_clipLocks, "f").get(index);
        if (lock) {
          return lock;
        } else if (index >= 0 && index < 20) {
          const lock2 = new dataTransferQueue_1.DataTransferLockingQueue(index + 1, tslib_1.__classPrivateFieldGet(this, _DataTransferManager_sendLockCommand, "f"), tslib_1.__classPrivateFieldGet(this, _DataTransferManager_nextTransferId, "f"));
          tslib_1.__classPrivateFieldGet(this, _DataTransferManager_clipLocks, "f").set(index, lock2);
          return lock2;
        } else {
          throw new Error("Invalid clip index");
        }
      }
    };
    exports2.DataTransferManager = DataTransferManager;
    _DataTransferManager_nextTransferIdInner = /* @__PURE__ */ new WeakMap(), _DataTransferManager_nextTransferId = /* @__PURE__ */ new WeakMap(), _DataTransferManager_sendLockCommand = /* @__PURE__ */ new WeakMap(), _DataTransferManager_stillsLock = /* @__PURE__ */ new WeakMap(), _DataTransferManager_clipLocks = /* @__PURE__ */ new WeakMap(), _DataTransferManager_labelsLock = /* @__PURE__ */ new WeakMap(), _DataTransferManager_macroLock = /* @__PURE__ */ new WeakMap(), _DataTransferManager_rawSendCommands = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/atem-connection/dist/lib/tally.js
var require_tally = __commonJS({
  "node_modules/atem-connection/dist/lib/tally.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.listVisibleInputs = void 0;
    var state_1 = require_state();
    var Enums = require_enums();
    function _calcActiveMeInputs(inputs, mode, state, meId) {
      const meRef = state_1.AtemStateUtil.getMixEffect(state, meId);
      if (mode === "preview") {
        if (meRef.transitionProperties.selection.includes(Enums.TransitionSelection.Background)) {
          inputs.add(meRef.previewInput);
        }
      } else {
        inputs.add(meRef.programInput);
      }
      meRef.upstreamKeyers.filter((usk) => {
        if (usk) {
          const keyerMask = 1 << usk.upstreamKeyerId + 1;
          const isPartOfTransition = meRef.transitionProperties.selection.includes(keyerMask);
          if (mode === "program") {
            if (meRef.transitionPosition.inTransition) {
              return usk.onAir || isPartOfTransition;
            }
            return usk.onAir;
          }
          return isPartOfTransition && !usk.onAir || usk.onAir && !isPartOfTransition;
        } else {
          return false;
        }
      }).forEach((usk) => {
        if (usk) {
          inputs.add(usk.fillSource);
          if (usk.mixEffectKeyType === Enums.MixEffectKeyType.Luma) {
            inputs.add(usk.cutSource);
          }
        }
      });
      if (meId === 0) {
        state.video.downstreamKeyers.filter((dsk) => {
          if (dsk) {
            if (mode === "program") {
              return dsk.onAir || dsk.inTransition;
            }
            if (!dsk.properties) {
              return false;
            }
            return dsk.properties.tie && !dsk.onAir;
          } else {
            return false;
          }
        }).forEach((dsk) => {
          if (dsk && dsk.sources) {
            inputs.add(dsk.sources.fillSource);
            inputs.add(dsk.sources.cutSource);
          }
        });
      }
      const isTransitionInProgram = mode === "program" && meRef.transitionPosition.inTransition;
      const isTransitionInPreview = mode === "preview" && meRef.transitionPreview && meRef.transitionPosition.handlePosition > 0;
      if (isTransitionInProgram || isTransitionInPreview) {
        if (meRef.transitionProperties.selection.includes(Enums.TransitionSelection.Background)) {
          inputs.add(meRef.previewInput);
        }
        switch (meRef.transitionProperties.style) {
          case Enums.TransitionStyle.DIP:
            if (meRef.transitionSettings.dip) {
              inputs.add(meRef.transitionSettings.dip.input);
            }
            break;
          case Enums.TransitionStyle.DVE:
            if (meRef.transitionSettings.DVE) {
              switch (meRef.transitionSettings.DVE.style) {
                case Enums.DVEEffect.GraphicCCWSpin:
                case Enums.DVEEffect.GraphicCWSpin:
                case Enums.DVEEffect.GraphicLogoWipe: {
                  inputs.add(meRef.transitionSettings.DVE.fillSource);
                  if (meRef.transitionSettings.DVE.enableKey) {
                    inputs.add(meRef.transitionSettings.DVE.keySource);
                  }
                  break;
                }
              }
            }
            break;
          case Enums.TransitionStyle.WIPE:
            if (meRef.transitionSettings.wipe && meRef.transitionSettings.wipe.borderWidth > 0) {
              inputs.add(meRef.transitionSettings.wipe.borderInput);
            }
            break;
          case Enums.TransitionStyle.STING:
            if (meRef.transitionSettings.stinger) {
              const mediaPlayerIndex = meRef.transitionSettings.stinger.source;
              const fillInputId = 3e3 + mediaPlayerIndex * 10;
              const keyInputId = fillInputId + 1;
              inputs.add(fillInputId);
              inputs.add(keyInputId);
            }
            break;
          default:
        }
      }
    }
    function listVisibleInputs(mode, state, me = 0) {
      const inputs = /* @__PURE__ */ new Set();
      _calcActiveMeInputs(inputs, mode, state, me);
      let lastSize;
      let lastProcessed = 0;
      do {
        lastSize = inputs.size;
        for (const inputId of Array.from(inputs).slice(lastProcessed)) {
          const input = state.inputs[inputId];
          if (!input) {
            continue;
          }
          const portType = input.internalPortType;
          switch (portType) {
            case Enums.InternalPortType.SuperSource: {
              const ssrcId = inputId - 6e3;
              const ssrc = state_1.AtemStateUtil.getSuperSource(state, ssrcId);
              for (const box of ssrc.boxes) {
                if (box && box.enabled) {
                  inputs.add(box.source);
                }
              }
              if (ssrc.properties) {
                inputs.add(ssrc.properties.artFillSource);
                if (ssrc.properties.artOption === Enums.SuperSourceArtOption.Foreground) {
                  inputs.add(ssrc.properties.artCutSource);
                }
              }
              break;
            }
            case Enums.InternalPortType.MEOutput: {
              const nestedMeId = (inputId - inputId % 10 - 1e4) / 10 - 1;
              const nestedMeMode = (inputId - 1e4) % 10 === 0 ? "program" : "preview";
              _calcActiveMeInputs(inputs, nestedMeMode, state, nestedMeId);
              break;
            }
            default:
          }
        }
        lastProcessed = lastSize - 1;
      } while (inputs.size !== lastSize);
      return Array.from(inputs).filter((i) => typeof i === "number").sort((a, b) => a - b);
    }
    exports2.listVisibleInputs = listVisibleInputs;
  }
});

// node_modules/atem-connection/dist/lib/multiviewLabel.js
var require_multiviewLabel = __commonJS({
  "node_modules/atem-connection/dist/lib/multiviewLabel.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.hasInternalMultiviewerLabelGeneration = exports2.loadFont = exports2.calculateGenerateMultiviewerLabelProps = exports2.generateMultiviewerLabel = void 0;
    var freetype2_1 = require("@julusian/freetype2");
    var enums_1 = require_enums();
    var videoMode_1 = require_videoMode();
    var promises_1 = require("fs/promises");
    var path = require("path");
    var colourLookupTable = [
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      29,
      85,
      132,
      17,
      30,
      30,
      96,
      136,
      136,
      186,
      101,
      101,
      13,
      19,
      19,
      72,
      217,
      217,
      124,
      130,
      123,
      47,
      28,
      51,
      32,
      192,
      166,
      56,
      167,
      193,
      189,
      172,
      198,
      198,
      41,
      41,
      154,
      81,
      109,
      109,
      199,
      60,
      108,
      37,
      12,
      12,
      15,
      153,
      142,
      142,
      68,
      35,
      35,
      173,
      141,
      197,
      197,
      144,
      94,
      94,
      116,
      42,
      214,
      214,
      40,
      46,
      46,
      184,
      181,
      127,
      127,
      175,
      31,
      31,
      150,
      213,
      73,
      95,
      86,
      191,
      191,
      117,
      135,
      135,
      208,
      22,
      78,
      78,
      107,
      179,
      179,
      210,
      119,
      58,
      58,
      67,
      209,
      209,
      171,
      110,
      89,
      89,
      103,
      133,
      43,
      202,
      137,
      66,
      66,
      39,
      151,
      129,
      71,
      200,
      200,
      26,
      111,
      128,
      16,
      16,
      23,
      23,
      196,
      201,
      36,
      106,
      207,
      205,
      205,
      69,
      139,
      62,
      105,
      90,
      203,
      203,
      216,
      54,
      99,
      99,
      100,
      88,
      88,
      146,
      145,
      74,
      74,
      80,
      204,
      204,
      180,
      84,
      138,
      212,
      215,
      24,
      24,
      63,
      187,
      187,
      118,
      148,
      183,
      183,
      57,
      102,
      102,
      206,
      44,
      152,
      152,
      190,
      134,
      134,
      59,
      182,
      87,
      87,
      48,
      174,
      125,
      104,
      140,
      140,
      188,
      92,
      131,
      178,
      64,
      70,
      70,
      76,
      65,
      79,
      121,
      113,
      176,
      176,
      177,
      211,
      75,
      75,
      120,
      82,
      82,
      93,
      98,
      122,
      122,
      53,
      115,
      115,
      45,
      55,
      34,
      34
    ];
    function fillResolutionSpec(spec) {
      return {
        ...spec,
        cornerRight: spec.corner.map((buf) => {
          return Buffer.from(buf).reverse();
        })
      };
    }
    var Res4K = fillResolutionSpec({
      width: 640,
      height: 100,
      xPad: 16,
      yPadBottom: 16,
      yPadTop: 4,
      fontHeight: 46,
      borderColour: 5,
      corner: [
        Buffer.from([0, 0, 0, 0, 0, 0, 223, 2, 162, 220, 20]),
        Buffer.from([0, 0, 0, 0, 223, 195, 20, 5, 5, 5, 5]),
        Buffer.from([0, 0, 0, 7, 3, 5, 5, 110, 141, 124, 29]),
        Buffer.from([0, 0, 7, 220, 5, 200, 97, 14, 14, 14, 14]),
        Buffer.from([0, 223, 3, 5, 209, 29, 14, 14, 14, 14, 14]),
        Buffer.from([0, 219, 5, 200, 29, 14, 14, 14, 14, 14, 14]),
        Buffer.from([223, 20, 5, 97, 14, 14, 14, 14, 14, 14, 14]),
        Buffer.from([2, 5, 110, 14, 14, 14, 14, 14, 14, 14, 14]),
        Buffer.from([162, 5, 141, 14, 14, 14, 14, 14, 14, 14, 14]),
        Buffer.from([220, 5, 124, 14, 14, 14, 14, 14, 14, 14, 14]),
        Buffer.from([20, 5, 29, 14, 14, 14, 14, 14, 14, 14, 14])
      ]
    });
    var Res1080 = fillResolutionSpec({
      width: 320,
      height: 50,
      xPad: 10,
      yPadBottom: 10,
      yPadTop: 4,
      fontHeight: 24,
      borderColour: 5,
      corner: [
        Buffer.from([0, 0, 1, 229, 230, 20]),
        Buffer.from([0, 7, 158, 5, 5, 5]),
        Buffer.from([1, 158, 5, 23, 37, 101]),
        Buffer.from([229, 5, 23, 29, 14, 14]),
        Buffer.from([230, 5, 37, 14, 14, 14]),
        Buffer.from([20, 5, 101, 14, 14, 14])
      ]
    });
    var Res720 = fillResolutionSpec({
      width: 320,
      height: 40,
      xPad: 6,
      yPadBottom: 6,
      yPadTop: 2,
      fontHeight: 17,
      borderColour: 170,
      corner: [
        Buffer.from([0, 0, 160, 169]),
        Buffer.from([0, 165, 165, 169]),
        Buffer.from([160, 165, 56, 14]),
        Buffer.from([169, 169, 14, 14])
      ]
    });
    var bgColour = colourLookupTable[0];
    function calculateWidthAndTrimText(face, str, maxWidth) {
      let trimmedStr = "";
      let advanceWidth = 0;
      let textWidth = 0;
      for (let i = 0; i < str.length; i++) {
        const ch = face.loadChar(str.charCodeAt(i), { render: false });
        if (advanceWidth + ch.metrics.width / 64 > maxWidth) {
          break;
        }
        textWidth = advanceWidth + ch.metrics.width / 64;
        advanceWidth = advanceWidth + ch.metrics.horiAdvance / 64;
        trimmedStr += str[i];
      }
      return { str: trimmedStr, width: textWidth };
    }
    function drawTextToBuffer(face, fontScale, buffer, spec, rawText, bufferYOffset, bufferWidth) {
      const fontHeight = spec.fontHeight * fontScale;
      face.setPixelSizes(fontHeight, fontHeight);
      const { width: textWidth, str: newStr } = calculateWidthAndTrimText(face, rawText, spec.width - spec.xPad * 2);
      const boundaryWidth = Math.floor(textWidth + spec.xPad * 2);
      const boundaryHeight = Math.floor(fontHeight + spec.yPadTop + spec.yPadBottom);
      const bufferXOffset = Math.floor((bufferWidth - spec.width) / 2);
      const boundaryYOffset = Math.max(Math.floor((spec.height - boundaryHeight) / 2.5), 0) + bufferYOffset;
      const boundaryXOffset = Math.max(Math.floor((spec.width - boundaryWidth) / 2), 0) + bufferXOffset;
      function drawHorizontalLine(y, xOffset, length, colour) {
        const offset = (boundaryYOffset + y) * bufferWidth + boundaryXOffset + xOffset;
        buffer.fill(colour, offset, offset + length);
      }
      for (let y = 0; y < boundaryHeight; y++) {
        const isBorder = y == 0 || y == 1 || y === boundaryHeight - 1 || y === boundaryHeight - 2;
        if (isBorder) {
          drawHorizontalLine(y, 0, boundaryWidth, spec.borderColour);
        } else {
          drawHorizontalLine(y, 0, 2, spec.borderColour);
          drawHorizontalLine(y, boundaryWidth - 2, 2, spec.borderColour);
          drawHorizontalLine(y, 2, boundaryWidth - 4, bgColour);
        }
      }
      for (let i = 0; i < spec.corner.length; i++) {
        const cornerBufferLeft = spec.corner[i];
        const cornerBufferRight = spec.cornerRight[i];
        const offsetTopLeft = (boundaryYOffset + i) * bufferWidth + boundaryXOffset;
        cornerBufferLeft.copy(buffer, offsetTopLeft);
        const offsetBottomLeft = (boundaryYOffset + boundaryHeight - i - 1) * bufferWidth + boundaryXOffset;
        cornerBufferLeft.copy(buffer, offsetBottomLeft);
        const offsetTopRight = offsetTopLeft + boundaryWidth - cornerBufferRight.length;
        cornerBufferRight.copy(buffer, offsetTopRight);
        const offsetBottomRight = offsetBottomLeft + boundaryWidth - cornerBufferRight.length;
        cornerBufferRight.copy(buffer, offsetBottomRight);
      }
      const maxLeft = boundaryXOffset + spec.width + spec.xPad;
      let charLeft = boundaryXOffset + spec.xPad;
      const textTop = boundaryYOffset + fontHeight + spec.yPadTop;
      for (let i = 0; i < newStr.length; i++) {
        face.setTransform(void 0, [charLeft * 64, 0]);
        const ch = face.loadChar(newStr.charCodeAt(i), { render: true });
        const endCharLeft = charLeft + ch.metrics.horiAdvance / 64;
        if (endCharLeft >= maxLeft) {
          break;
        }
        const charTop = Math.floor(textTop - ch.metrics.horiBearingY / 64);
        if (ch.bitmap && typeof ch.bitmapLeft === "number") {
          const bitmapLeft = Math.floor(ch.bitmapLeft);
          for (let y = 0; y < ch.bitmap.height; y++) {
            for (let x = 0; x < ch.bitmap.width; x++) {
              const rawCol = ch.bitmap.buffer[x + y * ch.bitmap.width];
              const myCol = colourLookupTable[rawCol];
              if (myCol !== void 0) {
                buffer[x + bitmapLeft + (y + charTop) * bufferWidth] = myCol;
              }
            }
          }
        }
        charLeft = endCharLeft;
      }
    }
    function generateMultiviewerLabel(face, fontScale, str, props) {
      let width;
      let height = 0;
      if (props.UHD4K) {
        if (!width)
          width = Res4K.width;
        height += Res4K.height;
      }
      if (props.HD1080) {
        if (!width)
          width = Res1080.width;
        height += Res1080.height;
      }
      if (props.HD720) {
        if (!width)
          width = Res720.width;
        height += Res720.height;
      }
      if (!width || !height)
        throw new Error("At least one resolution must be chosen!");
      const buffer = Buffer.alloc(width * height);
      const width2 = width;
      if (!str)
        return buffer;
      let yOffset = 0;
      const drawRes = (spec) => {
        drawTextToBuffer(face, fontScale, buffer, spec, str, yOffset, width2);
        yOffset += spec.height;
      };
      if (props.UHD4K)
        drawRes(Res4K);
      if (props.HD1080)
        drawRes(Res1080);
      if (props.HD720)
        drawRes(Res720);
      return buffer;
    }
    exports2.generateMultiviewerLabel = generateMultiviewerLabel;
    function calculateGenerateMultiviewerLabelProps(state) {
      if (state && state.info.supportedVideoModes) {
        const res = {
          UHD8K: false,
          UHD4K: false,
          HD1080: false,
          HD720: false
        };
        const multiViewerModes = /* @__PURE__ */ new Set();
        for (const info of state.info.supportedVideoModes) {
          if (!info.requiresReconfig) {
            for (const mode of info.multiviewerModes) {
              multiViewerModes.add(mode);
            }
          }
        }
        for (const mode of multiViewerModes.values()) {
          const format = (0, videoMode_1.getVideoModeInfo)(mode)?.format;
          switch (format) {
            case enums_1.VideoFormat.HD720:
              res.HD720 = true;
              break;
            case enums_1.VideoFormat.HD1080:
              res.HD1080 = true;
              break;
            case enums_1.VideoFormat.UHD4K:
              res.UHD4K = true;
              break;
            case enums_1.VideoFormat.UDH8K:
              res.UHD8K = true;
              break;
            case void 0:
            case enums_1.VideoFormat.SD:
              break;
          }
        }
        return res;
      }
      return null;
    }
    exports2.calculateGenerateMultiviewerLabelProps = calculateGenerateMultiviewerLabelProps;
    async function loadFont(fontPath) {
      if (!fontPath)
        fontPath = path.join(__dirname, "../../assets/roboto/Roboto-Regular.ttf");
      const fontFile = await (0, promises_1.readFile)(fontPath);
      return (0, freetype2_1.NewMemoryFace)(fontFile);
    }
    exports2.loadFont = loadFont;
    function hasInternalMultiviewerLabelGeneration(modelId) {
      return modelId >= enums_1.Model.Mini;
    }
    exports2.hasInternalMultiviewerLabelGeneration = hasInternalMultiviewerLabelGeneration;
  }
});

// node_modules/p-lazy/index.js
var require_p_lazy = __commonJS({
  "node_modules/p-lazy/index.js"(exports2, module2) {
    "use strict";
    var PLazy = class _PLazy extends Promise {
      constructor(executor) {
        super((resolve) => {
          resolve();
        });
        this._executor = executor;
      }
      static from(fn) {
        return new _PLazy((resolve) => {
          resolve(fn());
        });
      }
      static resolve(value) {
        return new _PLazy((resolve) => {
          resolve(value);
        });
      }
      static reject(error) {
        return new _PLazy((resolve, reject) => {
          reject(error);
        });
      }
      then(onFulfilled, onRejected) {
        this._promise = this._promise || new Promise(this._executor);
        return this._promise.then(onFulfilled, onRejected);
      }
      catch(onRejected) {
        this._promise = this._promise || new Promise(this._executor);
        return this._promise.catch(onRejected);
      }
    };
    module2.exports = PLazy;
  }
});

// node_modules/wavefile/dist/wavefile.cjs.js
var require_wavefile_cjs = __commonJS({
  "node_modules/wavefile/dist/wavefile.cjs.js"(exports2, module2) {
    "use strict";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var lookup = new Uint8Array(256);
    for (let i = 0; i < chars.length; i++) {
      lookup[chars.charCodeAt(i)] = i;
    }
    var encode = function(arraybuffer, byteOffset, length) {
      const bytes = new Uint8Array(arraybuffer, byteOffset, length), len = bytes.length;
      let base64 = "";
      for (let i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64 += chars[bytes[i + 2] & 63];
      }
      if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + "=";
      } else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + "==";
      }
      return base64;
    };
    var decode = function(base64) {
      const len = base64.length;
      let bufferLength = base64.length * 0.75;
      let p = 0;
      let encoded1, encoded2, encoded3, encoded4;
      if (base64[base64.length - 1] === "=") {
        bufferLength--;
        if (base64[base64.length - 2] === "=") {
          bufferLength--;
        }
      }
      const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
      for (let i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
      }
      return arraybuffer;
    };
    var f64f32_ = new Float32Array(1);
    function bitDepth(input, original, target, output) {
      validateBitDepth_(original);
      validateBitDepth_(target);
      let toFunction = getBitDepthFunction_(original, target);
      let options = {
        oldMin: Math.pow(2, parseInt(original, 10)) / 2,
        newMin: Math.pow(2, parseInt(target, 10)) / 2,
        oldMax: Math.pow(2, parseInt(original, 10)) / 2 - 1,
        newMax: Math.pow(2, parseInt(target, 10)) / 2 - 1
      };
      const len = input.length;
      if (original == "8") {
        for (let i = 0; i < len; i++) {
          output[i] = input[i] -= 128;
        }
      }
      for (let i = 0; i < len; i++) {
        output[i] = toFunction(input[i], options);
      }
      if (target == "8") {
        for (let i = 0; i < len; i++) {
          output[i] = output[i] += 128;
        }
      }
    }
    function intToInt_(sample, args2) {
      if (sample > 0) {
        sample = parseInt(sample / args2.oldMax * args2.newMax, 10);
      } else {
        sample = parseInt(sample / args2.oldMin * args2.newMin, 10);
      }
      return sample;
    }
    function floatToInt_(sample, args2) {
      return parseInt(
        sample > 0 ? sample * args2.newMax : sample * args2.newMin,
        10
      );
    }
    function intToFloat_(sample, args2) {
      return sample > 0 ? sample / args2.oldMax : sample / args2.oldMin;
    }
    function floatToFloat_(sample) {
      f64f32_[0] = sample;
      return f64f32_[0];
    }
    function getBitDepthFunction_(original, target) {
      let func = function(x) {
        return x;
      };
      if (original != target) {
        if (["32f", "64"].includes(original)) {
          if (["32f", "64"].includes(target)) {
            func = floatToFloat_;
          } else {
            func = floatToInt_;
          }
        } else {
          if (["32f", "64"].includes(target)) {
            func = intToFloat_;
          } else {
            func = intToInt_;
          }
        }
      }
      return func;
    }
    function validateBitDepth_(bitDepth2) {
      if (bitDepth2 != "32f" && bitDepth2 != "64" && (parseInt(bitDepth2, 10) < "8" || parseInt(bitDepth2, 10) > "53")) {
        throw new Error("Invalid bit depth.");
      }
    }
    var INDEX_TABLE = [
      -1,
      -1,
      -1,
      -1,
      2,
      4,
      6,
      8,
      -1,
      -1,
      -1,
      -1,
      2,
      4,
      6,
      8
    ];
    var STEP_TABLE = [
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      16,
      17,
      19,
      21,
      23,
      25,
      28,
      31,
      34,
      37,
      41,
      45,
      50,
      55,
      60,
      66,
      73,
      80,
      88,
      97,
      107,
      118,
      130,
      143,
      157,
      173,
      190,
      209,
      230,
      253,
      279,
      307,
      337,
      371,
      408,
      449,
      494,
      544,
      598,
      658,
      724,
      796,
      876,
      963,
      1060,
      1166,
      1282,
      1411,
      1552,
      1707,
      1878,
      2066,
      2272,
      2499,
      2749,
      3024,
      3327,
      3660,
      4026,
      4428,
      4871,
      5358,
      5894,
      6484,
      7132,
      7845,
      8630,
      9493,
      10442,
      11487,
      12635,
      13899,
      15289,
      16818,
      18500,
      20350,
      22385,
      24623,
      27086,
      29794,
      32767
    ];
    var encoderPredicted_ = 0;
    var encoderIndex_ = 0;
    var decoderPredicted_ = 0;
    var decoderIndex_ = 0;
    var decoderStep_ = 7;
    function encode$1(samples) {
      let adpcmSamples = new Uint8Array(samples.length);
      let block = [];
      let fileIndex = 0;
      let blockCount = 0;
      for (let i = 0; i < samples.length; i++) {
        if (i % 505 == 0 && i != 0) {
          adpcmSamples.set(encodeBlock(block), fileIndex);
          fileIndex += 256;
          block = [];
          blockCount++;
        }
        block.push(samples[i]);
      }
      let samplesLength = samples.length / 2;
      if (samplesLength % 2) {
        samplesLength++;
      }
      return adpcmSamples.slice(0, samplesLength + 512 + blockCount * 4);
    }
    function decode$1(adpcmSamples, blockAlign = 256) {
      let samples = new Int16Array(adpcmSamples.length * 2);
      let block = [];
      let fileIndex = 0;
      for (let i = 0; i < adpcmSamples.length; i++) {
        if (i % blockAlign == 0 && i != 0) {
          let decoded = decodeBlock(block);
          samples.set(decoded, fileIndex);
          fileIndex += decoded.length;
          block = [];
        }
        block.push(adpcmSamples[i]);
      }
      return samples;
    }
    function encodeBlock(block) {
      let adpcmSamples = blockHead_(block[0]);
      for (let i = 3; i < block.length; i += 2) {
        let sample2 = encodeSample_(block[i]);
        let sample = encodeSample_(block[i + 1]);
        adpcmSamples.push(sample << 4 | sample2);
      }
      return adpcmSamples;
    }
    function decodeBlock(block) {
      decoderPredicted_ = sign_(block[1] << 8 | block[0]);
      decoderIndex_ = block[2];
      decoderStep_ = STEP_TABLE[decoderIndex_];
      let result = [
        decoderPredicted_,
        decoderPredicted_
      ];
      for (let i = 4; i < block.length; i++) {
        let original_sample = block[i];
        let second_sample = original_sample >> 4;
        let first_sample = second_sample << 4 ^ original_sample;
        result.push(decodeSample_(first_sample));
        result.push(decodeSample_(second_sample));
      }
      return result;
    }
    function sign_(num) {
      return num > 32768 ? num - 65536 : num;
    }
    function encodeSample_(sample) {
      let delta = sample - encoderPredicted_;
      let value = 0;
      if (delta >= 0) {
        value = 0;
      } else {
        value = 8;
        delta = -delta;
      }
      let step = STEP_TABLE[encoderIndex_];
      let diff = step >> 3;
      if (delta > step) {
        value |= 4;
        delta -= step;
        diff += step;
      }
      step >>= 1;
      if (delta > step) {
        value |= 2;
        delta -= step;
        diff += step;
      }
      step >>= 1;
      if (delta > step) {
        value |= 1;
        diff += step;
      }
      updateEncoder_(value, diff);
      return value;
    }
    function updateEncoder_(value, diff) {
      if (value & 8) {
        encoderPredicted_ -= diff;
      } else {
        encoderPredicted_ += diff;
      }
      if (encoderPredicted_ < -32768) {
        encoderPredicted_ = -32768;
      } else if (encoderPredicted_ > 32767) {
        encoderPredicted_ = 32767;
      }
      encoderIndex_ += INDEX_TABLE[value & 7];
      if (encoderIndex_ < 0) {
        encoderIndex_ = 0;
      } else if (encoderIndex_ > 88) {
        encoderIndex_ = 88;
      }
    }
    function decodeSample_(nibble) {
      let difference = 0;
      if (nibble & 4) {
        difference += decoderStep_;
      }
      if (nibble & 2) {
        difference += decoderStep_ >> 1;
      }
      if (nibble & 1) {
        difference += decoderStep_ >> 2;
      }
      difference += decoderStep_ >> 3;
      if (nibble & 8) {
        difference = -difference;
      }
      decoderPredicted_ += difference;
      if (decoderPredicted_ > 32767) {
        decoderPredicted_ = 32767;
      } else if (decoderPredicted_ < -32767) {
        decoderPredicted_ = -32767;
      }
      updateDecoder_(nibble);
      return decoderPredicted_;
    }
    function updateDecoder_(nibble) {
      decoderIndex_ += INDEX_TABLE[nibble];
      if (decoderIndex_ < 0) {
        decoderIndex_ = 0;
      } else if (decoderIndex_ > 88) {
        decoderIndex_ = 88;
      }
      decoderStep_ = STEP_TABLE[decoderIndex_];
    }
    function blockHead_(sample) {
      encodeSample_(sample);
      let adpcmSamples = [];
      adpcmSamples.push(sample & 255);
      adpcmSamples.push(sample >> 8 & 255);
      adpcmSamples.push(encoderIndex_);
      adpcmSamples.push(0);
      return adpcmSamples;
    }
    var LOG_TABLE = [
      1,
      1,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7
    ];
    function encodeSample(sample) {
      let compandedValue;
      sample = sample == -32768 ? -32767 : sample;
      let sign = ~sample >> 8 & 128;
      if (!sign) {
        sample = sample * -1;
      }
      if (sample > 32635) {
        sample = 32635;
      }
      if (sample >= 256) {
        let exponent = LOG_TABLE[sample >> 8 & 127];
        let mantissa = sample >> exponent + 3 & 15;
        compandedValue = exponent << 4 | mantissa;
      } else {
        compandedValue = sample >> 4;
      }
      return compandedValue ^ (sign ^ 85);
    }
    function decodeSample(aLawSample) {
      let sign = 0;
      aLawSample ^= 85;
      if (aLawSample & 128) {
        aLawSample &= ~(1 << 7);
        sign = -1;
      }
      let position = ((aLawSample & 240) >> 4) + 4;
      let decoded = 0;
      if (position != 4) {
        decoded = 1 << position | (aLawSample & 15) << position - 4 | 1 << position - 5;
      } else {
        decoded = aLawSample << 1 | 1;
      }
      decoded = sign === 0 ? decoded : -decoded;
      return decoded * 8 * -1;
    }
    function encode$2(samples) {
      let aLawSamples = new Uint8Array(samples.length);
      for (let i = 0; i < samples.length; i++) {
        aLawSamples[i] = encodeSample(samples[i]);
      }
      return aLawSamples;
    }
    function decode$2(samples) {
      let pcmSamples = new Int16Array(samples.length);
      for (let i = 0; i < samples.length; i++) {
        pcmSamples[i] = decodeSample(samples[i]);
      }
      return pcmSamples;
    }
    var BIAS = 132;
    var CLIP = 32635;
    var encodeTable = [
      0,
      0,
      1,
      1,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7
    ];
    var decodeTable = [0, 132, 396, 924, 1980, 4092, 8316, 16764];
    function encodeSample$1(sample) {
      let sign;
      let exponent;
      let mantissa;
      let muLawSample;
      sign = sample >> 8 & 128;
      if (sign != 0) sample = -sample;
      if (sample > CLIP) sample = CLIP;
      sample = sample + BIAS;
      exponent = encodeTable[sample >> 7 & 255];
      mantissa = sample >> exponent + 3 & 15;
      muLawSample = ~(sign | exponent << 4 | mantissa);
      return muLawSample;
    }
    function decodeSample$1(muLawSample) {
      let sign;
      let exponent;
      let mantissa;
      let sample;
      muLawSample = ~muLawSample;
      sign = muLawSample & 128;
      exponent = muLawSample >> 4 & 7;
      mantissa = muLawSample & 15;
      sample = decodeTable[exponent] + (mantissa << exponent + 3);
      if (sign != 0) sample = -sample;
      return sample;
    }
    function encode$3(samples) {
      let muLawSamples = new Uint8Array(samples.length);
      for (let i = 0; i < samples.length; i++) {
        muLawSamples[i] = encodeSample$1(samples[i]);
      }
      return muLawSamples;
    }
    function decode$3(samples) {
      let pcmSamples = new Int16Array(samples.length);
      for (let i = 0; i < samples.length; i++) {
        pcmSamples[i] = decodeSample$1(samples[i]);
      }
      return pcmSamples;
    }
    function endianness(bytes, offset, start = 0, end = bytes.length) {
      if (end % offset) {
        throw new Error("Bad buffer length.");
      }
      for (let index = start; index < end; index += offset) {
        swap(bytes, offset, index);
      }
    }
    function swap(bytes, offset, index) {
      offset--;
      for (let x = 0; x < offset; x++) {
        let theByte = bytes[index + x];
        bytes[index + x] = bytes[index + offset];
        bytes[index + offset] = theByte;
        offset--;
      }
    }
    function unpack(buffer, start = 0, end = buffer.length) {
      let str = "";
      for (let index = start; index < end; ) {
        let lowerBoundary = 128;
        let upperBoundary = 191;
        let replace = false;
        let charCode = buffer[index++];
        if (charCode >= 0 && charCode <= 127) {
          str += String.fromCharCode(charCode);
        } else {
          let count = 0;
          if (charCode >= 194 && charCode <= 223) {
            count = 1;
          } else if (charCode >= 224 && charCode <= 239) {
            count = 2;
            if (buffer[index] === 224) {
              lowerBoundary = 160;
            }
            if (buffer[index] === 237) {
              upperBoundary = 159;
            }
          } else if (charCode >= 240 && charCode <= 244) {
            count = 3;
            if (buffer[index] === 240) {
              lowerBoundary = 144;
            }
            if (buffer[index] === 244) {
              upperBoundary = 143;
            }
          } else {
            replace = true;
          }
          charCode = charCode & (1 << 8 - count - 1) - 1;
          for (let i = 0; i < count; i++) {
            if (buffer[index] < lowerBoundary || buffer[index] > upperBoundary) {
              replace = true;
            }
            charCode = charCode << 6 | buffer[index] & 63;
            index++;
          }
          if (replace) {
            str += String.fromCharCode(65533);
          } else if (charCode <= 65535) {
            str += String.fromCharCode(charCode);
          } else {
            charCode -= 65536;
            str += String.fromCharCode(
              (charCode >> 10 & 1023) + 55296,
              (charCode & 1023) + 56320
            );
          }
        }
      }
      return str;
    }
    function pack(str, buffer, index = 0) {
      for (let i = 0, len = str.length; i < len; i++) {
        let codePoint = str.codePointAt(i);
        if (codePoint < 128) {
          buffer[index] = codePoint;
          index++;
        } else {
          let count = 0;
          let offset = 0;
          if (codePoint <= 2047) {
            count = 1;
            offset = 192;
          } else if (codePoint <= 65535) {
            count = 2;
            offset = 224;
          } else if (codePoint <= 1114111) {
            count = 3;
            offset = 240;
            i++;
          }
          buffer[index] = (codePoint >> 6 * count) + offset;
          index++;
          while (count > 0) {
            buffer[index] = 128 | codePoint >> 6 * (count - 1) & 63;
            index++;
            count--;
          }
        }
      }
      return index;
    }
    var TYPE_ERR = "Unsupported type";
    var TYPE_NAN = "Argument is not a valid number";
    function validateIsNumber(value) {
      if (typeof value === "undefined" || value === null) {
        throw new Error(TYPE_NAN);
      } else if (value.constructor !== Number && value.constructor !== Boolean) {
        throw new Error(TYPE_NAN);
      }
    }
    function validateFloatType(bits) {
      if (!bits || bits !== 16 && bits !== 32 && bits !== 64) {
        throw new Error(TYPE_ERR + ": float, bits: " + bits);
      }
    }
    function validateIntType(bits) {
      if (!bits || bits < 1 || bits > 53) {
        throw new Error(TYPE_ERR + ": int, bits: " + bits);
      }
    }
    var IEEE754Buffer = class {
      /**
       * Pack a IEEE 754 floating point number.
       * @param {number} ebits The exponent bits.
       * @param {number} fbits The fraction bits.
       */
      constructor(ebits, fbits) {
        this.ebits = ebits;
        this.fbits = fbits;
        this.bias = (1 << ebits - 1) - 1;
        this.numBytes = Math.ceil((ebits + fbits) / 8);
        this.biasP2 = Math.pow(2, this.bias + 1);
        this.ebitsFbits = ebits + fbits;
        this.fbias = Math.pow(2, -(8 * this.numBytes - 1 - ebits));
      }
      /**
       * Pack a IEEE 754 floating point number.
       * @param {!Uint8Array|!Array<number>} buffer The buffer.
       * @param {number} num The number.
       * @param {number} index The index to write on the buffer.
       * @return {number} The next index to write on the buffer.
       */
      pack(buffer, num, index) {
        if (Math.abs(num) > this.biasP2 - this.ebitsFbits * 2) {
          num = num < 0 ? -Infinity : Infinity;
        }
        let sign = ((num = +num) || 1 / num) < 0 ? 1 : num < 0 ? 1 : 0;
        num = Math.abs(num);
        let exp = Math.min(Math.floor(Math.log(num) / Math.LN2), 1023);
        let fraction = this.roundToEven(num / Math.pow(2, exp) * Math.pow(2, this.fbits));
        if (num !== num) {
          fraction = Math.pow(2, this.fbits - 1);
          exp = (1 << this.ebits) - 1;
        } else if (num !== 0) {
          if (num >= Math.pow(2, 1 - this.bias)) {
            if (fraction / Math.pow(2, this.fbits) >= 2) {
              exp = exp + 1;
              fraction = 1;
            }
            if (exp > this.bias) {
              exp = (1 << this.ebits) - 1;
              fraction = 0;
            } else {
              exp = exp + this.bias;
              fraction = this.roundToEven(fraction) - Math.pow(2, this.fbits);
            }
          } else {
            fraction = this.roundToEven(num / Math.pow(2, 1 - this.bias - this.fbits));
            exp = 0;
          }
        }
        return this.packFloatBits_(buffer, index, sign, exp, fraction);
      }
      /**
       * Unpack a IEEE 754 floating point number.
       * Derived from IEEE754 by DeNA Co., Ltd., MIT License. 
       * Adapted to handle NaN. Should port the solution to the original repo.
       * @param {!Uint8Array|!Array<number>} buffer The buffer.
       * @param {number} index The index to read from the buffer.
       * @return {number} The floating point number.
       */
      unpack(buffer, index) {
        let eMax = (1 << this.ebits) - 1;
        let significand;
        let leftBits = "";
        for (let i = this.numBytes - 1; i >= 0; i--) {
          let t = buffer[i + index].toString(2);
          leftBits += "00000000".substring(t.length) + t;
        }
        let sign = leftBits.charAt(0) == "1" ? -1 : 1;
        leftBits = leftBits.substring(1);
        let exponent = parseInt(leftBits.substring(0, this.ebits), 2);
        leftBits = leftBits.substring(this.ebits);
        if (exponent == eMax) {
          if (parseInt(leftBits, 2) !== 0) {
            return NaN;
          }
          return sign * Infinity;
        } else if (exponent === 0) {
          exponent += 1;
          significand = parseInt(leftBits, 2);
        } else {
          significand = parseInt("1" + leftBits, 2);
        }
        return sign * significand * this.fbias * Math.pow(2, exponent - this.bias);
      }
      /**
       * Pack a IEEE754 from its sign, exponent and fraction bits
       * and place it in a byte buffer.
       * @param {!Uint8Array|!Array<number>} buffer The byte buffer to write to.
       * @param {number} index The buffer index to write.
       * @param {number} sign The sign.
       * @param {number} exp the exponent.
       * @param {number} fraction The fraction.
       * @return {number}
       * @private
       */
      packFloatBits_(buffer, index, sign, exp, fraction) {
        let bits = [];
        bits.push(sign);
        for (let i = this.ebits; i > 0; i -= 1) {
          bits[i] = exp % 2 ? 1 : 0;
          exp = Math.floor(exp / 2);
        }
        let len = bits.length;
        for (let i = this.fbits; i > 0; i -= 1) {
          bits[len + i] = fraction % 2 ? 1 : 0;
          fraction = Math.floor(fraction / 2);
        }
        let str = bits.join("");
        let numBytes = this.numBytes + index - 1;
        let k = index;
        while (numBytes >= index) {
          buffer[numBytes] = parseInt(str.substring(0, 8), 2);
          str = str.substring(8);
          numBytes--;
          k++;
        }
        return k;
      }
      roundToEven(n) {
        var w = Math.floor(n), f2 = n - w;
        if (f2 < 0.5) {
          return w;
        }
        if (f2 > 0.5) {
          return w + 1;
        }
        return w % 2 ? w + 1 : w;
      }
    };
    var UintBuffer = class {
      /**
       * @param {number} bits The number of bits used by the integer.
       */
      constructor(bits) {
        this.bits = bits;
        this.bytes = bits < 8 ? 1 : Math.ceil(bits / 8);
        this.max = Math.pow(2, bits) - 1;
        this.min = 0;
        let r = 8 - ((bits - 1 | 7) + 1 - bits);
        this.lastByteMask_ = Math.pow(2, r > 0 ? r : 8) - 1;
      }
      /**
       * Write one unsigned integer to a byte buffer.
       * @param {!Uint8Array|!Array<number>} buffer An array of bytes.
       * @param {number} num The number.
       * @param {number=} index The index being written in the byte buffer.
       * @return {number} The next index to write on the byte buffer.
       * @throws {Error} If num is NaN.
       * @throws {Error} On overflow.
       */
      pack(buffer, num, index = 0) {
        if (num !== num) {
          throw new Error("NaN");
        }
        this.overflow(num);
        buffer[index] = (num < 0 ? num + Math.pow(2, this.bits) : num) & 255;
        index++;
        let len = this.bytes;
        for (let i = 2; i < len; i++) {
          buffer[index] = Math.floor(num / Math.pow(2, (i - 1) * 8)) & 255;
          index++;
        }
        if (this.bits > 8) {
          buffer[index] = Math.floor(
            num / Math.pow(2, (this.bytes - 1) * 8)
          ) & this.lastByteMask_;
          index++;
        }
        return index;
      }
      /**
       * Read one unsigned integer from a byte buffer.
       * @param {!Uint8Array|!Array<number>} buffer An array of bytes.
       * @param {number=} index The index to read.
       * @return {number} The number.
       * @throws {Error} On overflow.
       */
      unpack(buffer, index = 0) {
        let num = this.unpackUnsafe(buffer, index);
        this.overflow(num);
        return num;
      }
      /**
       * Read one unsigned integer from a byte buffer.
       * Does not check for overflows.
       * @param {!Uint8Array|!Array<number>} buffer An array of bytes.
       * @param {number} index The index to read.
       * @return {number}
       * @protected
       */
      unpackUnsafe(buffer, index) {
        let num = 0;
        for (let x = 0; x < this.bytes; x++) {
          num += buffer[index + x] * Math.pow(256, x);
        }
        return num;
      }
      /**
       * Throws error in case of overflow.
       * @param {number} num The number.
       * @throws {Error} on overflow.
       * @protected
       */
      overflow(num) {
        if (num > this.max || num < this.min) {
          throw new Error("Overflow");
        }
      }
    };
    var TwosComplementBuffer = class extends UintBuffer {
      /**
       * @param {number} bits The number of bits used by the integer.
       */
      constructor(bits) {
        super(bits);
        this.max = Math.pow(2, this.bits) / 2 - 1;
        this.min = -this.max - 1;
      }
      /**
       * Write one two's complement signed integer to a byte buffer.
       * @param {!Uint8Array|!Array<number>} buffer An array of bytes.
       * @param {number} num The number.
       * @param {number=} index The index being written in the byte buffer.
       * @return {number} The next index to write on the byte buffer.
       * @throws {Error} If num is NaN.
       * @throws {Error} On overflow.
       */
      pack(buffer, num, index = 0) {
        return super.pack(buffer, num, index);
      }
      /**
       * Read one two's complement signed integer from a byte buffer.
       * @param {!Uint8Array|!Array<number>} buffer An array of bytes.
       * @param {number=} index The index to read.
       * @return {number}
       * @throws {Error} On overflow.
       */
      unpack(buffer, index = 0) {
        let num = super.unpackUnsafe(buffer, index);
        num = this.sign_(num);
        this.overflow(num);
        return num;
      }
      /**
       * Sign a number.
       * @param {number} num The number.
       * @return {number}
       * @private
       */
      sign_(num) {
        if (num > this.max) {
          num -= this.max * 2 + 2;
        }
        return num;
      }
    };
    var NumberBuffer = class {
      /**
       * Read one number from a byte buffer.
       * @param {number} bits The number of bits of the number.
       * @param {boolean} fp Tue for floating-point numbers.
       * @param {boolean} signed True for signed numbers.
       * @throws {Error} If the type definition is not valid.
       */
      constructor(bits, fp, signed) {
        let parser;
        if (fp) {
          validateFloatType(bits);
          parser = this.getFPParser_(bits);
        } else {
          validateIntType(bits);
          parser = signed ? new TwosComplementBuffer(bits) : new UintBuffer(bits);
        }
        this.parser = parser;
        this.offset = Math.ceil(bits / 8);
      }
      /**
       * Read one number from a byte buffer.
       * @param {!Uint8Array|!Array<number>} buffer An array of bytes.
       * @param {number=} index The index to read.
       * @return {number} The number.
       * @throws {Error} On overflow.
       */
      unpack(buffer, index = 0) {
        return this.parser.unpack(buffer, index);
      }
      /**
       * Write one number to a byte buffer.
       * @param {!Uint8Array|!Array<number>} buffer An array of bytes.
       * @param {number} num The number.
       * @param {number=} index The index being written in the byte buffer.
       * @return {number} The next index to write on the byte buffer.
       * @throws {Error} If num is NaN.
       * @throws {Error} On overflow.
       */
      pack(buffer, num, index = 0) {
        return this.parser.pack(buffer, num, index);
      }
      /**
       * Return a instance of IEEE754Buffer.
       * @param {number} bits The number of bits.
       * @return {IEEE754Buffer}
       * @private
       */
      getFPParser_(bits) {
        if (bits === 16) {
          return new IEEE754Buffer(5, 11);
        } else if (bits === 32) {
          return new IEEE754Buffer(8, 23);
        } else {
          return new IEEE754Buffer(11, 52);
        }
      }
    };
    function throwValueError_(e, value, i, fp) {
      if (!fp && (value === Infinity || value === -Infinity || value !== value)) {
        throw new Error("Argument is not a integer at input index " + i);
      } else {
        throw new Error(e.message + " at input index " + i + ": " + value);
      }
    }
    function getUnpackLen_(buffer, start, end, offset, safe) {
      let extra = (end - start) % offset;
      if (safe && (extra || buffer.length < offset)) {
        throw new Error("Bad buffer length");
      }
      return end - extra;
    }
    function unpackString(buffer, index = 0, end = buffer.length) {
      return unpack(buffer, index, end);
    }
    function packString(str) {
      let buffer = [];
      pack(str, buffer, 0);
      return buffer;
    }
    function packStringTo(str, buffer, index = 0) {
      return pack(str, buffer, index);
    }
    function packArrayTo(values, theType, buffer, index = 0) {
      theType = theType || {};
      let packer = new NumberBuffer(theType.bits, theType.fp, theType.signed);
      let i = 0;
      let start = index;
      try {
        for (let valuesLen = values.length; i < valuesLen; i++) {
          validateIsNumber(values[i]);
          index = packer.pack(buffer, values[i], index);
        }
        if (theType.be) {
          endianness(buffer, packer.offset, start, index);
        }
      } catch (e) {
        throwValueError_(e, values[i], i, theType.fp);
      }
      return index;
    }
    function unpackArrayTo(buffer, theType, output, start = 0, end = buffer.length, safe = false) {
      theType = theType || {};
      let packer = new NumberBuffer(theType.bits, theType.fp, theType.signed);
      let offset = packer.offset;
      end = getUnpackLen_(buffer, start, end, offset, safe);
      let index = 0;
      let j = start;
      try {
        if (theType.be) {
          endianness(buffer, offset, start, end);
        }
        for (; j < end; j += offset, index++) {
          output[index] = packer.unpack(buffer, j);
        }
        if (theType.be) {
          endianness(buffer, offset, start, end);
        }
      } catch (e) {
        throwValueError_(e, buffer.slice(j, j + offset), j, theType.fp);
      }
    }
    function packTo(value, theType, buffer, index = 0) {
      return packArrayTo([value], theType, buffer, index);
    }
    function pack$1(value, theType) {
      let output = [];
      packTo(value, theType, output);
      return output;
    }
    function unpackArray(buffer, theType, start = 0, end = buffer.length, safe = false) {
      let output = [];
      unpackArrayTo(buffer, theType, output, start, end, safe);
      return output;
    }
    function unpack$1(buffer, theType, index = 0) {
      return unpackArray(
        buffer,
        theType,
        index,
        index + Math.ceil(theType.bits / 8),
        true
      )[0];
    }
    var RIFFFile = class {
      constructor() {
        this.container = "";
        this.chunkSize = 0;
        this.format = "";
        this.signature = {};
        this.head = 0;
        this.uInt32 = { bits: 32, be: false };
        this.supported_containers = ["RIFF", "RIFX"];
      }
      /**
       * Read the signature of the chunks in a RIFF/RIFX file.
       * @param {!Uint8Array} buffer The file bytes.
       * @protected
       */
      setSignature(buffer) {
        this.head = 0;
        this.container = this.readString(buffer, 4);
        if (this.supported_containers.indexOf(this.container) === -1) {
          throw Error("Not a supported format.");
        }
        this.uInt32.be = this.container === "RIFX";
        this.chunkSize = this.readUInt32(buffer);
        this.format = this.readString(buffer, 4);
        this.signature = {
          chunkId: this.container,
          chunkSize: this.chunkSize,
          format: this.format,
          subChunks: this.getSubChunksIndex_(buffer)
        };
      }
      /**
        * Find a chunk by its fourCC_ in a array of RIFF chunks.
        * @param {string} chunkId The chunk fourCC_.
        * @param {boolean} multiple True if there may be multiple chunks
        *    with the same chunkId.
        * @return {Object}
        * @protected
        */
      findChunk(chunkId, multiple = false) {
        let chunks = this.signature.subChunks;
        let chunk = [];
        for (let i = 0; i < chunks.length; i++) {
          if (chunks[i].chunkId == chunkId) {
            if (multiple) {
              chunk.push(chunks[i]);
            } else {
              return chunks[i];
            }
          }
        }
        if (chunkId == "LIST") {
          return chunk.length ? chunk : null;
        }
        return null;
      }
      /**
       * Read bytes as a string from a RIFF chunk.
       * @param {!Uint8Array} bytes The bytes.
       * @param {number} maxSize the max size of the string.
       * @return {string} The string.
       * @protected
       */
      readString(bytes, maxSize) {
        let str = "";
        str = unpackString(bytes, this.head, this.head + maxSize);
        this.head += maxSize;
        return str;
      }
      /**
       * Read a number from a chunk.
       * @param {!Uint8Array} bytes The chunk bytes.
       * @return {number} The number.
       * @protected
       */
      readUInt32(bytes) {
        let value = unpack$1(bytes, this.uInt32, this.head);
        this.head += 4;
        return value;
      }
      /**
       * Return the sub chunks of a RIFF file.
       * @param {!Uint8Array} buffer the RIFF file bytes.
       * @return {!Array<Object>} The subchunks of a RIFF/RIFX or LIST chunk.
       * @private
       */
      getSubChunksIndex_(buffer) {
        let chunks = [];
        let i = this.head;
        while (i <= buffer.length - 8) {
          chunks.push(this.getSubChunkIndex_(buffer, i));
          i += 8 + chunks[chunks.length - 1].chunkSize;
          i = i % 2 ? i + 1 : i;
        }
        return chunks;
      }
      /**
       * Return a sub chunk from a RIFF file.
       * @param {!Uint8Array} buffer the RIFF file bytes.
       * @param {number} index The start index of the chunk.
       * @return {!Object} A subchunk of a RIFF/RIFX or LIST chunk.
       * @private
       */
      getSubChunkIndex_(buffer, index) {
        let chunk = {
          chunkId: this.getChunkId_(buffer, index),
          chunkSize: this.getChunkSize_(buffer, index)
        };
        if (chunk.chunkId == "LIST") {
          chunk.format = unpackString(buffer, index + 8, index + 12);
          this.head += 4;
          chunk.subChunks = this.getSubChunksIndex_(buffer);
        } else {
          let realChunkSize = chunk.chunkSize % 2 ? chunk.chunkSize + 1 : chunk.chunkSize;
          this.head = index + 8 + realChunkSize;
          chunk.chunkData = {
            start: index + 8,
            end: this.head
          };
        }
        return chunk;
      }
      /**
       * Return the fourCC_ of a chunk.
       * @param {!Uint8Array} buffer the RIFF file bytes.
       * @param {number} index The start index of the chunk.
       * @return {string} The id of the chunk.
       * @private
       */
      getChunkId_(buffer, index) {
        this.head += 4;
        return unpackString(buffer, index, index + 4);
      }
      /**
       * Return the size of a chunk.
       * @param {!Uint8Array} buffer the RIFF file bytes.
       * @param {number} index The start index of the chunk.
       * @return {number} The size of the chunk without the id and size fields.
       * @private
       */
      getChunkSize_(buffer, index) {
        this.head += 4;
        return unpack$1(buffer, this.uInt32, index + 4);
      }
    };
    var WaveFileReader = class _WaveFileReader extends RIFFFile {
      constructor() {
        super();
        this.supported_containers.push("RF64");
        this.fmt = {
          /** @type {string} */
          chunkId: "",
          /** @type {number} */
          chunkSize: 0,
          /** @type {number} */
          audioFormat: 0,
          /** @type {number} */
          numChannels: 0,
          /** @type {number} */
          sampleRate: 0,
          /** @type {number} */
          byteRate: 0,
          /** @type {number} */
          blockAlign: 0,
          /** @type {number} */
          bitsPerSample: 0,
          /** @type {number} */
          cbSize: 0,
          /** @type {number} */
          validBitsPerSample: 0,
          /** @type {number} */
          dwChannelMask: 0,
          /**
           * 4 32-bit values representing a 128-bit ID
           * @type {!Array<number>}
           */
          subformat: []
        };
        this.fact = {
          /** @type {string} */
          chunkId: "",
          /** @type {number} */
          chunkSize: 0,
          /** @type {number} */
          dwSampleLength: 0
        };
        this.cue = {
          /** @type {string} */
          chunkId: "",
          /** @type {number} */
          chunkSize: 0,
          /** @type {number} */
          dwCuePoints: 0,
          /** @type {!Array<!Object>} */
          points: []
        };
        this.smpl = {
          /** @type {string} */
          chunkId: "",
          /** @type {number} */
          chunkSize: 0,
          /** @type {number} */
          dwManufacturer: 0,
          /** @type {number} */
          dwProduct: 0,
          /** @type {number} */
          dwSamplePeriod: 0,
          /** @type {number} */
          dwMIDIUnityNote: 0,
          /** @type {number} */
          dwMIDIPitchFraction: 0,
          /** @type {number} */
          dwSMPTEFormat: 0,
          /** @type {number} */
          dwSMPTEOffset: 0,
          /** @type {number} */
          dwNumSampleLoops: 0,
          /** @type {number} */
          dwSamplerData: 0,
          /** @type {!Array<!Object>} */
          loops: []
        };
        this.bext = {
          /** @type {string} */
          chunkId: "",
          /** @type {number} */
          chunkSize: 0,
          /** @type {string} */
          description: "",
          //256
          /** @type {string} */
          originator: "",
          //32
          /** @type {string} */
          originatorReference: "",
          //32
          /** @type {string} */
          originationDate: "",
          //10
          /** @type {string} */
          originationTime: "",
          //8
          /**
           * 2 32-bit values, timeReference high and low
           * @type {!Array<number>}
           */
          timeReference: [0, 0],
          /** @type {number} */
          version: 0,
          //WORD
          /** @type {string} */
          UMID: "",
          // 64 chars
          /** @type {number} */
          loudnessValue: 0,
          //WORD
          /** @type {number} */
          loudnessRange: 0,
          //WORD
          /** @type {number} */
          maxTruePeakLevel: 0,
          //WORD
          /** @type {number} */
          maxMomentaryLoudness: 0,
          //WORD
          /** @type {number} */
          maxShortTermLoudness: 0,
          //WORD
          /** @type {string} */
          reserved: "",
          //180
          /** @type {string} */
          codingHistory: ""
          // string, unlimited
        };
        this.ds64 = {
          /** @type {string} */
          chunkId: "",
          /** @type {number} */
          chunkSize: 0,
          /** @type {number} */
          riffSizeHigh: 0,
          // DWORD
          /** @type {number} */
          riffSizeLow: 0,
          // DWORD
          /** @type {number} */
          dataSizeHigh: 0,
          // DWORD
          /** @type {number} */
          dataSizeLow: 0,
          // DWORD
          /** @type {number} */
          originationTime: 0,
          // DWORD
          /** @type {number} */
          sampleCountHigh: 0,
          // DWORD
          /** @type {number} */
          sampleCountLow: 0
          // DWORD
          /** @type {number} */
          //'tableLength': 0, // DWORD
          /** @type {!Array<number>} */
          //'table': []
        };
        this.data = {
          /** @type {string} */
          chunkId: "",
          /** @type {number} */
          chunkSize: 0,
          /** @type {!Uint8Array} */
          samples: new Uint8Array(0)
        };
        this.LIST = [];
        this.junk = {
          /** @type {string} */
          chunkId: "",
          /** @type {number} */
          chunkSize: 0,
          /** @type {!Array<number>} */
          chunkData: []
        };
        this.uInt16 = { bits: 16, be: false };
      }
      /**
       * Set up the WaveFileReader object from a byte buffer.
       * @param {!Uint8Array} wavBuffer The buffer.
       * @param {boolean=} samples True if the samples should be loaded.
       * @throws {Error} If container is not RIFF, RIFX or RF64.
       * @throws {Error} If format is not WAVE.
       * @throws {Error} If no 'fmt ' chunk is found.
       * @throws {Error} If no 'data' chunk is found.
       * @ignore
       */
      fromBuffer(wavBuffer, samples = true) {
        this.clearHeaders();
        this.setSignature(wavBuffer);
        this.uInt16.be = this.uInt32.be;
        if (this.format != "WAVE") {
          throw Error('Could not find the "WAVE" format identifier');
        }
        this.readDs64Chunk_(wavBuffer);
        this.readFmtChunk_(wavBuffer);
        this.readFactChunk_(wavBuffer);
        this.readBextChunk_(wavBuffer);
        this.readCueChunk_(wavBuffer);
        this.readSmplChunk_(wavBuffer);
        this.readDataChunk_(wavBuffer, samples);
        this.readJunkChunk_(wavBuffer);
        this.readLISTChunk_(wavBuffer);
      }
      /**
       * Reset the chunks of the WaveFileReader instance.
       * @protected
       * @ignore
       */
      clearHeaders() {
        let tmpWav = new _WaveFileReader();
        Object.assign(this.fmt, tmpWav.fmt);
        Object.assign(this.fact, tmpWav.fact);
        Object.assign(this.cue, tmpWav.cue);
        Object.assign(this.smpl, tmpWav.smpl);
        Object.assign(this.bext, tmpWav.bext);
        Object.assign(this.ds64, tmpWav.ds64);
        Object.assign(this.data, tmpWav.data);
        this.LIST = [];
        Object.assign(this.junk, tmpWav.junk);
      }
      /**
       * Read the 'fmt ' chunk of a wave file.
       * @param {!Uint8Array} buffer The wav file buffer.
       * @throws {Error} If no 'fmt ' chunk is found.
       * @private
       */
      readFmtChunk_(buffer) {
        let chunk = this.findChunk("fmt ");
        if (chunk) {
          this.head = chunk.chunkData.start;
          this.fmt.chunkId = chunk.chunkId;
          this.fmt.chunkSize = chunk.chunkSize;
          this.fmt.audioFormat = this.readUInt16_(buffer);
          this.fmt.numChannels = this.readUInt16_(buffer);
          this.fmt.sampleRate = this.readUInt32(buffer);
          this.fmt.byteRate = this.readUInt32(buffer);
          this.fmt.blockAlign = this.readUInt16_(buffer);
          this.fmt.bitsPerSample = this.readUInt16_(buffer);
          this.readFmtExtension_(buffer);
        } else {
          throw Error('Could not find the "fmt " chunk');
        }
      }
      /**
       * Read the 'fmt ' chunk extension.
       * @param {!Uint8Array} buffer The wav file buffer.
       * @private
       */
      readFmtExtension_(buffer) {
        if (this.fmt.chunkSize > 16) {
          this.fmt.cbSize = this.readUInt16_(buffer);
          if (this.fmt.chunkSize > 18) {
            this.fmt.validBitsPerSample = this.readUInt16_(buffer);
            if (this.fmt.chunkSize > 20) {
              this.fmt.dwChannelMask = this.readUInt32(buffer);
              this.fmt.subformat = [
                this.readUInt32(buffer),
                this.readUInt32(buffer),
                this.readUInt32(buffer),
                this.readUInt32(buffer)
              ];
            }
          }
        }
      }
      /**
       * Read the 'fact' chunk of a wav file.
       * @param {!Uint8Array} buffer The wav file buffer.
       * @private
       */
      readFactChunk_(buffer) {
        let chunk = this.findChunk("fact");
        if (chunk) {
          this.head = chunk.chunkData.start;
          this.fact.chunkId = chunk.chunkId;
          this.fact.chunkSize = chunk.chunkSize;
          this.fact.dwSampleLength = this.readUInt32(buffer);
        }
      }
      /**
       * Read the 'cue ' chunk of a wave file.
       * @param {!Uint8Array} buffer The wav file buffer.
       * @private
       */
      readCueChunk_(buffer) {
        let chunk = this.findChunk("cue ");
        if (chunk) {
          this.head = chunk.chunkData.start;
          this.cue.chunkId = chunk.chunkId;
          this.cue.chunkSize = chunk.chunkSize;
          this.cue.dwCuePoints = this.readUInt32(buffer);
          for (let i = 0; i < this.cue.dwCuePoints; i++) {
            this.cue.points.push({
              dwName: this.readUInt32(buffer),
              dwPosition: this.readUInt32(buffer),
              fccChunk: this.readString(buffer, 4),
              dwChunkStart: this.readUInt32(buffer),
              dwBlockStart: this.readUInt32(buffer),
              dwSampleOffset: this.readUInt32(buffer)
            });
          }
        }
      }
      /**
       * Read the 'smpl' chunk of a wave file.
       * @param {!Uint8Array} buffer The wav file buffer.
       * @private
       */
      readSmplChunk_(buffer) {
        let chunk = this.findChunk("smpl");
        if (chunk) {
          this.head = chunk.chunkData.start;
          this.smpl.chunkId = chunk.chunkId;
          this.smpl.chunkSize = chunk.chunkSize;
          this.smpl.dwManufacturer = this.readUInt32(buffer);
          this.smpl.dwProduct = this.readUInt32(buffer);
          this.smpl.dwSamplePeriod = this.readUInt32(buffer);
          this.smpl.dwMIDIUnityNote = this.readUInt32(buffer);
          this.smpl.dwMIDIPitchFraction = this.readUInt32(buffer);
          this.smpl.dwSMPTEFormat = this.readUInt32(buffer);
          this.smpl.dwSMPTEOffset = this.readUInt32(buffer);
          this.smpl.dwNumSampleLoops = this.readUInt32(buffer);
          this.smpl.dwSamplerData = this.readUInt32(buffer);
          for (let i = 0; i < this.smpl.dwNumSampleLoops; i++) {
            this.smpl.loops.push({
              dwName: this.readUInt32(buffer),
              dwType: this.readUInt32(buffer),
              dwStart: this.readUInt32(buffer),
              dwEnd: this.readUInt32(buffer),
              dwFraction: this.readUInt32(buffer),
              dwPlayCount: this.readUInt32(buffer)
            });
          }
        }
      }
      /**
       * Read the 'data' chunk of a wave file.
       * @param {!Uint8Array} buffer The wav file buffer.
       * @param {boolean} samples True if the samples should be loaded.
       * @throws {Error} If no 'data' chunk is found.
       * @private
       */
      readDataChunk_(buffer, samples) {
        let chunk = this.findChunk("data");
        if (chunk) {
          this.data.chunkId = "data";
          this.data.chunkSize = chunk.chunkSize;
          if (samples) {
            this.data.samples = buffer.slice(
              chunk.chunkData.start,
              chunk.chunkData.end
            );
          }
        } else {
          throw Error('Could not find the "data" chunk');
        }
      }
      /**
       * Read the 'bext' chunk of a wav file.
       * @param {!Uint8Array} buffer The wav file buffer.
       * @private
       */
      readBextChunk_(buffer) {
        let chunk = this.findChunk("bext");
        if (chunk) {
          this.head = chunk.chunkData.start;
          this.bext.chunkId = chunk.chunkId;
          this.bext.chunkSize = chunk.chunkSize;
          this.bext.description = this.readString(buffer, 256);
          this.bext.originator = this.readString(buffer, 32);
          this.bext.originatorReference = this.readString(buffer, 32);
          this.bext.originationDate = this.readString(buffer, 10);
          this.bext.originationTime = this.readString(buffer, 8);
          this.bext.timeReference = [
            this.readUInt32(buffer),
            this.readUInt32(buffer)
          ];
          this.bext.version = this.readUInt16_(buffer);
          this.bext.UMID = this.readString(buffer, 64);
          this.bext.loudnessValue = this.readUInt16_(buffer);
          this.bext.loudnessRange = this.readUInt16_(buffer);
          this.bext.maxTruePeakLevel = this.readUInt16_(buffer);
          this.bext.maxMomentaryLoudness = this.readUInt16_(buffer);
          this.bext.maxShortTermLoudness = this.readUInt16_(buffer);
          this.bext.reserved = this.readString(buffer, 180);
          this.bext.codingHistory = this.readString(
            buffer,
            this.bext.chunkSize - 602
          );
        }
      }
      /**
       * Read the 'ds64' chunk of a wave file.
       * @param {!Uint8Array} buffer The wav file buffer.
       * @throws {Error} If no 'ds64' chunk is found and the file is RF64.
       * @private
       */
      readDs64Chunk_(buffer) {
        let chunk = this.findChunk("ds64");
        if (chunk) {
          this.head = chunk.chunkData.start;
          this.ds64.chunkId = chunk.chunkId;
          this.ds64.chunkSize = chunk.chunkSize;
          this.ds64.riffSizeHigh = this.readUInt32(buffer);
          this.ds64.riffSizeLow = this.readUInt32(buffer);
          this.ds64.dataSizeHigh = this.readUInt32(buffer);
          this.ds64.dataSizeLow = this.readUInt32(buffer);
          this.ds64.originationTime = this.readUInt32(buffer);
          this.ds64.sampleCountHigh = this.readUInt32(buffer);
          this.ds64.sampleCountLow = this.readUInt32(buffer);
        } else {
          if (this.container == "RF64") {
            throw Error('Could not find the "ds64" chunk');
          }
        }
      }
      /**
       * Read the 'LIST' chunks of a wave file.
       * @param {!Uint8Array} buffer The wav file buffer.
       * @private
       */
      readLISTChunk_(buffer) {
        let listChunks = this.findChunk("LIST", true);
        if (listChunks !== null) {
          for (let j = 0; j < listChunks.length; j++) {
            let subChunk = listChunks[j];
            this.LIST.push({
              chunkId: subChunk.chunkId,
              chunkSize: subChunk.chunkSize,
              format: subChunk.format,
              subChunks: []
            });
            for (let x = 0; x < subChunk.subChunks.length; x++) {
              this.readLISTSubChunks_(
                subChunk.subChunks[x],
                subChunk.format,
                buffer
              );
            }
          }
        }
      }
      /**
       * Read the sub chunks of a 'LIST' chunk.
       * @param {!Object} subChunk The 'LIST' subchunks.
       * @param {string} format The 'LIST' format, 'adtl' or 'INFO'.
       * @param {!Uint8Array} buffer The wav file buffer.
       * @private
       */
      readLISTSubChunks_(subChunk, format, buffer) {
        if (format == "adtl") {
          if (["labl", "note", "ltxt"].indexOf(subChunk.chunkId) > -1) {
            this.head = subChunk.chunkData.start;
            let item = {
              chunkId: subChunk.chunkId,
              chunkSize: subChunk.chunkSize,
              dwName: this.readUInt32(buffer)
            };
            if (subChunk.chunkId == "ltxt") {
              item.dwSampleLength = this.readUInt32(buffer);
              item.dwPurposeID = this.readUInt32(buffer);
              item.dwCountry = this.readUInt16_(buffer);
              item.dwLanguage = this.readUInt16_(buffer);
              item.dwDialect = this.readUInt16_(buffer);
              item.dwCodePage = this.readUInt16_(buffer);
            }
            item.value = this.readZSTR_(buffer, this.head);
            this.LIST[this.LIST.length - 1].subChunks.push(item);
          }
        } else if (format == "INFO") {
          this.head = subChunk.chunkData.start;
          this.LIST[this.LIST.length - 1].subChunks.push({
            chunkId: subChunk.chunkId,
            chunkSize: subChunk.chunkSize,
            value: this.readZSTR_(buffer, this.head)
          });
        }
      }
      /**
       * Read the 'junk' chunk of a wave file.
       * @param {!Uint8Array} buffer The wav file buffer.
       * @private
       */
      readJunkChunk_(buffer) {
        let chunk = this.findChunk("junk");
        if (chunk) {
          this.junk = {
            chunkId: chunk.chunkId,
            chunkSize: chunk.chunkSize,
            chunkData: [].slice.call(buffer.slice(
              chunk.chunkData.start,
              chunk.chunkData.end
            ))
          };
        }
      }
      /**
       * Read bytes as a ZSTR string.
       * @param {!Uint8Array} bytes The bytes.
       * @param {number} index the index to start reading.
       * @return {string} The string.
       * @private
       */
      readZSTR_(bytes, index = 0) {
        for (let i = index; i < bytes.length; i++) {
          this.head++;
          if (bytes[i] === 0) {
            break;
          }
        }
        return unpackString(bytes, index, this.head - 1);
      }
      /**
       * Read a number from a chunk.
       * @param {!Uint8Array} bytes The chunk bytes.
       * @return {number} The number.
       * @private
       */
      readUInt16_(bytes) {
        let value = unpack$1(bytes, this.uInt16, this.head);
        this.head += 2;
        return value;
      }
    };
    function writeString(str, maxSize, fixedSize = true) {
      let packedString = packString(str);
      if (fixedSize) {
        for (let i = packedString.length; i < maxSize; i++) {
          packedString.push(0);
        }
      }
      return packedString;
    }
    var WaveFileParser = class extends WaveFileReader {
      /**
       * Return a byte buffer representig the WaveFileParser object as a .wav file.
       * The return value of this method can be written straight to disk.
       * @return {!Uint8Array} A wav file.
       * @ignore
       */
      toBuffer() {
        this.uInt16.be = this.container === "RIFX";
        this.uInt32.be = this.uInt16.be;
        let fileBody = [
          this.getJunkBytes_(),
          this.getDs64Bytes_(),
          this.getBextBytes_(),
          this.getFmtBytes_(),
          this.getFactBytes_(),
          packString(this.data.chunkId),
          pack$1(this.data.samples.length, this.uInt32),
          this.data.samples,
          this.getCueBytes_(),
          this.getSmplBytes_(),
          this.getLISTBytes_()
        ];
        let fileBodyLength = 0;
        for (let i = 0; i < fileBody.length; i++) {
          fileBodyLength += fileBody[i].length;
        }
        let file = new Uint8Array(fileBodyLength + 12);
        let index = 0;
        index = packStringTo(this.container, file, index);
        index = packTo(fileBodyLength + 4, this.uInt32, file, index);
        index = packStringTo(this.format, file, index);
        for (let i = 0; i < fileBody.length; i++) {
          file.set(fileBody[i], index);
          index += fileBody[i].length;
        }
        return file;
      }
      /**
       * Return the bytes of the 'bext' chunk.
       * @private
       */
      getBextBytes_() {
        let bytes = [];
        this.enforceBext_();
        if (this.bext.chunkId) {
          this.bext.chunkSize = 602 + this.bext.codingHistory.length;
          bytes = bytes.concat(
            packString(this.bext.chunkId),
            pack$1(602 + this.bext.codingHistory.length, this.uInt32),
            writeString(this.bext.description, 256),
            writeString(this.bext.originator, 32),
            writeString(this.bext.originatorReference, 32),
            writeString(this.bext.originationDate, 10),
            writeString(this.bext.originationTime, 8),
            pack$1(this.bext.timeReference[0], this.uInt32),
            pack$1(this.bext.timeReference[1], this.uInt32),
            pack$1(this.bext.version, this.uInt16),
            writeString(this.bext.UMID, 64),
            pack$1(this.bext.loudnessValue, this.uInt16),
            pack$1(this.bext.loudnessRange, this.uInt16),
            pack$1(this.bext.maxTruePeakLevel, this.uInt16),
            pack$1(this.bext.maxMomentaryLoudness, this.uInt16),
            pack$1(this.bext.maxShortTermLoudness, this.uInt16),
            writeString(this.bext.reserved, 180),
            writeString(
              this.bext.codingHistory,
              this.bext.codingHistory.length
            )
          );
        }
        return bytes;
      }
      /**
       * Make sure a 'bext' chunk is created if BWF data was created in a file.
       * @private
       */
      enforceBext_() {
        for (let prop in this.bext) {
          if (this.bext.hasOwnProperty(prop)) {
            if (this.bext[prop] && prop != "timeReference") {
              this.bext.chunkId = "bext";
              break;
            }
          }
        }
        if (this.bext.timeReference[0] || this.bext.timeReference[1]) {
          this.bext.chunkId = "bext";
        }
      }
      /**
       * Return the bytes of the 'ds64' chunk.
       * @return {!Array<number>} The 'ds64' chunk bytes.
       * @private
       */
      getDs64Bytes_() {
        let bytes = [];
        if (this.ds64.chunkId) {
          bytes = bytes.concat(
            packString(this.ds64.chunkId),
            pack$1(this.ds64.chunkSize, this.uInt32),
            pack$1(this.ds64.riffSizeHigh, this.uInt32),
            pack$1(this.ds64.riffSizeLow, this.uInt32),
            pack$1(this.ds64.dataSizeHigh, this.uInt32),
            pack$1(this.ds64.dataSizeLow, this.uInt32),
            pack$1(this.ds64.originationTime, this.uInt32),
            pack$1(this.ds64.sampleCountHigh, this.uInt32),
            pack$1(this.ds64.sampleCountLow, this.uInt32)
          );
        }
        return bytes;
      }
      /**
       * Return the bytes of the 'cue ' chunk.
       * @return {!Array<number>} The 'cue ' chunk bytes.
       * @private
       */
      getCueBytes_() {
        let bytes = [];
        if (this.cue.chunkId) {
          let cuePointsBytes = this.getCuePointsBytes_();
          bytes = bytes.concat(
            packString(this.cue.chunkId),
            pack$1(cuePointsBytes.length + 4, this.uInt32),
            pack$1(this.cue.dwCuePoints, this.uInt32),
            cuePointsBytes
          );
        }
        return bytes;
      }
      /**
       * Return the bytes of the 'cue ' points.
       * @return {!Array<number>} The 'cue ' points as an array of bytes.
       * @private
       */
      getCuePointsBytes_() {
        let points = [];
        for (let i = 0; i < this.cue.dwCuePoints; i++) {
          points = points.concat(
            pack$1(this.cue.points[i].dwName, this.uInt32),
            pack$1(this.cue.points[i].dwPosition, this.uInt32),
            packString(this.cue.points[i].fccChunk),
            pack$1(this.cue.points[i].dwChunkStart, this.uInt32),
            pack$1(this.cue.points[i].dwBlockStart, this.uInt32),
            pack$1(this.cue.points[i].dwSampleOffset, this.uInt32)
          );
        }
        return points;
      }
      /**
       * Return the bytes of the 'smpl' chunk.
       * @return {!Array<number>} The 'smpl' chunk bytes.
       * @private
       */
      getSmplBytes_() {
        let bytes = [];
        if (this.smpl.chunkId) {
          let smplLoopsBytes = this.getSmplLoopsBytes_();
          bytes = bytes.concat(
            packString(this.smpl.chunkId),
            pack$1(smplLoopsBytes.length + 36, this.uInt32),
            pack$1(this.smpl.dwManufacturer, this.uInt32),
            pack$1(this.smpl.dwProduct, this.uInt32),
            pack$1(this.smpl.dwSamplePeriod, this.uInt32),
            pack$1(this.smpl.dwMIDIUnityNote, this.uInt32),
            pack$1(this.smpl.dwMIDIPitchFraction, this.uInt32),
            pack$1(this.smpl.dwSMPTEFormat, this.uInt32),
            pack$1(this.smpl.dwSMPTEOffset, this.uInt32),
            pack$1(this.smpl.dwNumSampleLoops, this.uInt32),
            pack$1(this.smpl.dwSamplerData, this.uInt32),
            smplLoopsBytes
          );
        }
        return bytes;
      }
      /**
       * Return the bytes of the 'smpl' loops.
       * @return {!Array<number>} The 'smpl' loops as an array of bytes.
       * @private
       */
      getSmplLoopsBytes_() {
        let loops = [];
        for (let i = 0; i < this.smpl.dwNumSampleLoops; i++) {
          loops = loops.concat(
            pack$1(this.smpl.loops[i].dwName, this.uInt32),
            pack$1(this.smpl.loops[i].dwType, this.uInt32),
            pack$1(this.smpl.loops[i].dwStart, this.uInt32),
            pack$1(this.smpl.loops[i].dwEnd, this.uInt32),
            pack$1(this.smpl.loops[i].dwFraction, this.uInt32),
            pack$1(this.smpl.loops[i].dwPlayCount, this.uInt32)
          );
        }
        return loops;
      }
      /**
       * Return the bytes of the 'fact' chunk.
       * @return {!Array<number>} The 'fact' chunk bytes.
       * @private
       */
      getFactBytes_() {
        let bytes = [];
        if (this.fact.chunkId) {
          bytes = bytes.concat(
            packString(this.fact.chunkId),
            pack$1(this.fact.chunkSize, this.uInt32),
            pack$1(this.fact.dwSampleLength, this.uInt32)
          );
        }
        return bytes;
      }
      /**
       * Return the bytes of the 'fmt ' chunk.
       * @return {!Array<number>} The 'fmt' chunk bytes.
       * @throws {Error} if no 'fmt ' chunk is present.
       * @private
       */
      getFmtBytes_() {
        let fmtBytes = [];
        if (this.fmt.chunkId) {
          return fmtBytes.concat(
            packString(this.fmt.chunkId),
            pack$1(this.fmt.chunkSize, this.uInt32),
            pack$1(this.fmt.audioFormat, this.uInt16),
            pack$1(this.fmt.numChannels, this.uInt16),
            pack$1(this.fmt.sampleRate, this.uInt32),
            pack$1(this.fmt.byteRate, this.uInt32),
            pack$1(this.fmt.blockAlign, this.uInt16),
            pack$1(this.fmt.bitsPerSample, this.uInt16),
            this.getFmtExtensionBytes_()
          );
        }
        throw Error('Could not find the "fmt " chunk');
      }
      /**
       * Return the bytes of the fmt extension fields.
       * @return {!Array<number>} The fmt extension bytes.
       * @private
       */
      getFmtExtensionBytes_() {
        let extension = [];
        if (this.fmt.chunkSize > 16) {
          extension = extension.concat(
            pack$1(this.fmt.cbSize, this.uInt16)
          );
        }
        if (this.fmt.chunkSize > 18) {
          extension = extension.concat(
            pack$1(this.fmt.validBitsPerSample, this.uInt16)
          );
        }
        if (this.fmt.chunkSize > 20) {
          extension = extension.concat(
            pack$1(this.fmt.dwChannelMask, this.uInt32)
          );
        }
        if (this.fmt.chunkSize > 24) {
          extension = extension.concat(
            pack$1(this.fmt.subformat[0], this.uInt32),
            pack$1(this.fmt.subformat[1], this.uInt32),
            pack$1(this.fmt.subformat[2], this.uInt32),
            pack$1(this.fmt.subformat[3], this.uInt32)
          );
        }
        return extension;
      }
      /**
       * Return the bytes of the 'LIST' chunk.
       * @return {!Array<number>} The 'LIST' chunk bytes.
       * @private
       */
      getLISTBytes_() {
        let bytes = [];
        for (let i = 0; i < this.LIST.length; i++) {
          let subChunksBytes = this.getLISTSubChunksBytes_(
            this.LIST[i].subChunks,
            this.LIST[i].format
          );
          bytes = bytes.concat(
            packString(this.LIST[i].chunkId),
            pack$1(subChunksBytes.length + 4, this.uInt32),
            packString(this.LIST[i].format),
            subChunksBytes
          );
        }
        return bytes;
      }
      /**
       * Return the bytes of the sub chunks of a 'LIST' chunk.
       * @param {!Array<!Object>} subChunks The 'LIST' sub chunks.
       * @param {string} format The format of the 'LIST' chunk.
       *    Currently supported values are 'adtl' or 'INFO'.
       * @return {!Array<number>} The sub chunk bytes.
       * @private
       */
      getLISTSubChunksBytes_(subChunks, format) {
        let bytes = [];
        for (let i = 0; i < subChunks.length; i++) {
          if (format == "INFO") {
            bytes = bytes.concat(
              packString(subChunks[i].chunkId),
              pack$1(subChunks[i].value.length + 1, this.uInt32),
              writeString(
                subChunks[i].value,
                subChunks[i].value.length
              )
            );
            bytes.push(0);
          } else if (format == "adtl") {
            if (["labl", "note"].indexOf(subChunks[i].chunkId) > -1) {
              bytes = bytes.concat(
                packString(subChunks[i].chunkId),
                pack$1(
                  subChunks[i].value.length + 4 + 1,
                  this.uInt32
                ),
                pack$1(subChunks[i].dwName, this.uInt32),
                writeString(
                  subChunks[i].value,
                  subChunks[i].value.length
                )
              );
              bytes.push(0);
            } else if (subChunks[i].chunkId == "ltxt") {
              bytes = bytes.concat(
                this.getLtxtChunkBytes_(subChunks[i])
              );
            }
          }
          if (bytes.length % 2) {
            bytes.push(0);
          }
        }
        return bytes;
      }
      /**
       * Return the bytes of a 'ltxt' chunk.
       * @param {!Object} ltxt the 'ltxt' chunk.
       * @private
       */
      getLtxtChunkBytes_(ltxt) {
        return [].concat(
          packString(ltxt.chunkId),
          pack$1(ltxt.value.length + 20, this.uInt32),
          pack$1(ltxt.dwName, this.uInt32),
          pack$1(ltxt.dwSampleLength, this.uInt32),
          pack$1(ltxt.dwPurposeID, this.uInt32),
          pack$1(ltxt.dwCountry, this.uInt16),
          pack$1(ltxt.dwLanguage, this.uInt16),
          pack$1(ltxt.dwDialect, this.uInt16),
          pack$1(ltxt.dwCodePage, this.uInt16),
          writeString(ltxt.value, ltxt.value.length)
        );
      }
      /**
       * Return the bytes of the 'junk' chunk.
       * @private
       */
      getJunkBytes_() {
        let bytes = [];
        if (this.junk.chunkId) {
          return bytes.concat(
            packString(this.junk.chunkId),
            pack$1(this.junk.chunkData.length, this.uInt32),
            this.junk.chunkData
          );
        }
        return bytes;
      }
    };
    function interleave(samples) {
      if (samples.length > 0) {
        if (samples[0].constructor === Array) {
          let finalSamples = [];
          for (let i = 0, len = samples[0].length; i < len; i++) {
            for (let j = 0, subLen = samples.length; j < subLen; j++) {
              finalSamples.push(samples[j][i]);
            }
          }
          samples = finalSamples;
        }
      }
      return samples;
    }
    function dwChannelMask(numChannels) {
      let mask = 0;
      if (numChannels === 1) {
        mask = 4;
      } else if (numChannels === 2) {
        mask = 3;
      } else if (numChannels === 4) {
        mask = 51;
      } else if (numChannels === 6) {
        mask = 63;
      } else if (numChannels === 8) {
        mask = 1599;
      }
      return mask;
    }
    function validateNumChannels(channels, bits) {
      let blockAlign = channels * bits / 8;
      if (channels < 1 || blockAlign > 65535) {
        return false;
      }
      return true;
    }
    function validateSampleRate(channels, bits, sampleRate) {
      let byteRate = channels * (bits / 8) * sampleRate;
      if (sampleRate < 1 || byteRate > 4294967295) {
        return false;
      }
      return true;
    }
    var WaveFileCreator = class extends WaveFileParser {
      constructor() {
        super();
        this.bitDepth = "0";
        this.dataType = {};
        this.WAV_AUDIO_FORMATS = {
          "4": 17,
          "8": 1,
          "8a": 6,
          "8m": 7,
          "16": 1,
          "24": 1,
          "32": 1,
          "32f": 3,
          "64": 3
        };
      }
      /**
       * Set up the WaveFileCreator object based on the arguments passed.
       * Existing chunks are reset.
       * @param {number} numChannels The number of channels
       *    (Integer numbers: 1 for mono, 2 stereo and so on).
       * @param {number} sampleRate The sample rate.
       *    Integer numbers like 8000, 44100, 48000, 96000, 192000.
       * @param {string} bitDepthCode The audio bit depth code.
       *    One of '4', '8', '8a', '8m', '16', '24', '32', '32f', '64'
       *    or any value between '8' and '32' (like '12').
       * @param {!Array<number>|!Array<!Array<number>>|!TypedArray} samples
       *    The samples. Must be in the correct range according to the bit depth.
       * @param {?Object} options Optional. Used to force the container
       *    as RIFX with {'container': 'RIFX'}
       * @throws {Error} If any argument does not meet the criteria.
       */
      fromScratch(numChannels, sampleRate, bitDepthCode, samples, options = {}) {
        this.clearHeaders();
        this.newWavFile_(numChannels, sampleRate, bitDepthCode, samples, options);
      }
      /**
       * Set up the WaveFileCreator object based on the arguments passed.
       * @param {number} numChannels The number of channels
       *    (Integer numbers: 1 for mono, 2 stereo and so on).
       * @param {number} sampleRate The sample rate.
       *    Integer numbers like 8000, 44100, 48000, 96000, 192000.
       * @param {string} bitDepthCode The audio bit depth code.
       *    One of '4', '8', '8a', '8m', '16', '24', '32', '32f', '64'
       *    or any value between '8' and '32' (like '12').
       * @param {!Array<number>|!Array<!Array<number>>|!TypedArray} samples
       *    The samples. Must be in the correct range according to the bit depth.
       * @param {?Object} options Optional. Used to force the container
       *    as RIFX with {'container': 'RIFX'}
       * @throws {Error} If any argument does not meet the criteria.
       * @private
       */
      newWavFile_(numChannels, sampleRate, bitDepthCode, samples, options = {}) {
        if (!options.container) {
          options.container = "RIFF";
        }
        this.container = options.container;
        this.bitDepth = bitDepthCode;
        samples = interleave(samples);
        this.updateDataType_();
        let numBytes = this.dataType.bits / 8;
        this.data.samples = new Uint8Array(samples.length * numBytes);
        packArrayTo(samples, this.dataType, this.data.samples);
        this.makeWavHeader_(
          bitDepthCode,
          numChannels,
          sampleRate,
          numBytes,
          this.data.samples.length,
          options
        );
        this.data.chunkId = "data";
        this.data.chunkSize = this.data.samples.length;
        this.validateWavHeader_();
      }
      /**
       * Set up the WaveFileParser object from a byte buffer.
       * @param {!Uint8Array} wavBuffer The buffer.
       * @param {boolean=} samples True if the samples should be loaded.
       * @throws {Error} If container is not RIFF, RIFX or RF64.
       * @throws {Error} If format is not WAVE.
       * @throws {Error} If no 'fmt ' chunk is found.
       * @throws {Error} If no 'data' chunk is found.
       */
      fromBuffer(wavBuffer, samples = true) {
        super.fromBuffer(wavBuffer, samples);
        this.bitDepthFromFmt_();
        this.updateDataType_();
      }
      /**
       * Return a byte buffer representig the WaveFileParser object as a .wav file.
       * The return value of this method can be written straight to disk.
       * @return {!Uint8Array} A wav file.
       * @throws {Error} If bit depth is invalid.
       * @throws {Error} If the number of channels is invalid.
       * @throws {Error} If the sample rate is invalid.
       */
      toBuffer() {
        this.validateWavHeader_();
        return super.toBuffer();
      }
      /**
       * Return the sample at a given index.
       * @param {number} index The sample index.
       * @return {number} The sample.
       * @throws {Error} If the sample index is off range.
       */
      getSample(index) {
        index = index * (this.dataType.bits / 8);
        if (index + this.dataType.bits / 8 > this.data.samples.length) {
          throw new Error("Range error");
        }
        return unpack$1(
          this.data.samples.slice(index, index + this.dataType.bits / 8),
          this.dataType
        );
      }
      /**
       * Set the sample at a given index.
       * @param {number} index The sample index.
       * @param {number} sample The sample.
       * @throws {Error} If the sample index is off range.
       */
      setSample(index, sample) {
        index = index * (this.dataType.bits / 8);
        if (index + this.dataType.bits / 8 > this.data.samples.length) {
          throw new Error("Range error");
        }
        packTo(sample, this.dataType, this.data.samples, index);
      }
      /**
       * Define the header of a wav file.
       * @param {string} bitDepthCode The audio bit depth
       * @param {number} numChannels The number of channels
       * @param {number} sampleRate The sample rate.
       * @param {number} numBytes The number of bytes each sample use.
       * @param {number} samplesLength The length of the samples in bytes.
       * @param {!Object} options The extra options, like container defintion.
       * @private
       */
      makeWavHeader_(bitDepthCode, numChannels, sampleRate, numBytes, samplesLength, options) {
        if (bitDepthCode == "4") {
          this.createADPCMHeader_(
            bitDepthCode,
            numChannels,
            sampleRate,
            numBytes,
            samplesLength,
            options
          );
        } else if (bitDepthCode == "8a" || bitDepthCode == "8m") {
          this.createALawMulawHeader_(
            bitDepthCode,
            numChannels,
            sampleRate,
            numBytes,
            samplesLength,
            options
          );
        } else if (Object.keys(this.WAV_AUDIO_FORMATS).indexOf(bitDepthCode) == -1 || numChannels > 2) {
          this.createExtensibleHeader_(
            bitDepthCode,
            numChannels,
            sampleRate,
            numBytes,
            samplesLength,
            options
          );
        } else {
          this.createPCMHeader_(
            bitDepthCode,
            numChannels,
            sampleRate,
            numBytes,
            samplesLength,
            options
          );
        }
      }
      /**
       * Create the header of a linear PCM wave file.
       * @param {string} bitDepthCode The audio bit depth
       * @param {number} numChannels The number of channels
       * @param {number} sampleRate The sample rate.
       * @param {number} numBytes The number of bytes each sample use.
       * @param {number} samplesLength The length of the samples in bytes.
       * @param {!Object} options The extra options, like container defintion.
       * @private
       */
      createPCMHeader_(bitDepthCode, numChannels, sampleRate, numBytes, samplesLength, options) {
        this.container = options.container;
        this.chunkSize = 36 + samplesLength;
        this.format = "WAVE";
        this.bitDepth = bitDepthCode;
        this.fmt = {
          chunkId: "fmt ",
          chunkSize: 16,
          audioFormat: this.WAV_AUDIO_FORMATS[bitDepthCode] || 65534,
          numChannels,
          sampleRate,
          byteRate: numChannels * numBytes * sampleRate,
          blockAlign: numChannels * numBytes,
          bitsPerSample: parseInt(bitDepthCode, 10),
          cbSize: 0,
          validBitsPerSample: 0,
          dwChannelMask: 0,
          subformat: []
        };
      }
      /**
       * Create the header of a ADPCM wave file.
       * @param {string} bitDepthCode The audio bit depth
       * @param {number} numChannels The number of channels
       * @param {number} sampleRate The sample rate.
       * @param {number} numBytes The number of bytes each sample use.
       * @param {number} samplesLength The length of the samples in bytes.
       * @param {!Object} options The extra options, like container defintion.
       * @private
       */
      createADPCMHeader_(bitDepthCode, numChannels, sampleRate, numBytes, samplesLength, options) {
        this.createPCMHeader_(
          bitDepthCode,
          numChannels,
          sampleRate,
          numBytes,
          samplesLength,
          options
        );
        this.chunkSize = 40 + samplesLength;
        this.fmt.chunkSize = 20;
        this.fmt.byteRate = 4055;
        this.fmt.blockAlign = 256;
        this.fmt.bitsPerSample = 4;
        this.fmt.cbSize = 2;
        this.fmt.validBitsPerSample = 505;
        this.fact = {
          chunkId: "fact",
          chunkSize: 4,
          dwSampleLength: samplesLength * 2
        };
      }
      /**
       * Create the header of WAVE_FORMAT_EXTENSIBLE file.
       * @param {string} bitDepthCode The audio bit depth
       * @param {number} numChannels The number of channels
       * @param {number} sampleRate The sample rate.
       * @param {number} numBytes The number of bytes each sample use.
       * @param {number} samplesLength The length of the samples in bytes.
       * @param {!Object} options The extra options, like container defintion.
       * @private
       */
      createExtensibleHeader_(bitDepthCode, numChannels, sampleRate, numBytes, samplesLength, options) {
        this.createPCMHeader_(
          bitDepthCode,
          numChannels,
          sampleRate,
          numBytes,
          samplesLength,
          options
        );
        this.chunkSize = 36 + 24 + samplesLength;
        this.fmt.chunkSize = 40;
        this.fmt.bitsPerSample = (parseInt(bitDepthCode, 10) - 1 | 7) + 1;
        this.fmt.cbSize = 22;
        this.fmt.validBitsPerSample = parseInt(bitDepthCode, 10);
        this.fmt.dwChannelMask = dwChannelMask(numChannels);
        this.fmt.subformat = [1, 1048576, 2852126848, 1905997824];
      }
      /**
       * Create the header of mu-Law and A-Law wave files.
       * @param {string} bitDepthCode The audio bit depth
       * @param {number} numChannels The number of channels
       * @param {number} sampleRate The sample rate.
       * @param {number} numBytes The number of bytes each sample use.
       * @param {number} samplesLength The length of the samples in bytes.
       * @param {!Object} options The extra options, like container defintion.
       * @private
       */
      createALawMulawHeader_(bitDepthCode, numChannels, sampleRate, numBytes, samplesLength, options) {
        this.createPCMHeader_(
          bitDepthCode,
          numChannels,
          sampleRate,
          numBytes,
          samplesLength,
          options
        );
        this.chunkSize = 40 + samplesLength;
        this.fmt.chunkSize = 20;
        this.fmt.cbSize = 2;
        this.fmt.validBitsPerSample = 8;
        this.fact = {
          chunkId: "fact",
          chunkSize: 4,
          dwSampleLength: samplesLength
        };
      }
      /**
       * Set the string code of the bit depth based on the 'fmt ' chunk.
       * @private
       */
      bitDepthFromFmt_() {
        if (this.fmt.audioFormat === 3 && this.fmt.bitsPerSample === 32) {
          this.bitDepth = "32f";
        } else if (this.fmt.audioFormat === 6) {
          this.bitDepth = "8a";
        } else if (this.fmt.audioFormat === 7) {
          this.bitDepth = "8m";
        } else {
          this.bitDepth = this.fmt.bitsPerSample.toString();
        }
      }
      /**
       * Validate the bit depth.
       * @return {boolean} True is the bit depth is valid.
       * @throws {Error} If bit depth is invalid.
       * @private
       */
      validateBitDepth_() {
        if (!this.WAV_AUDIO_FORMATS[this.bitDepth]) {
          if (parseInt(this.bitDepth, 10) > 8 && parseInt(this.bitDepth, 10) < 54) {
            return true;
          }
          throw new Error("Invalid bit depth.");
        }
        return true;
      }
      /**
       * Update the type definition used to read and write the samples.
       * @private
       */
      updateDataType_() {
        this.dataType = {
          bits: (parseInt(this.bitDepth, 10) - 1 | 7) + 1,
          fp: this.bitDepth == "32f" || this.bitDepth == "64",
          signed: this.bitDepth != "8",
          be: this.container == "RIFX"
        };
        if (["4", "8a", "8m"].indexOf(this.bitDepth) > -1) {
          this.dataType.bits = 8;
          this.dataType.signed = false;
        }
      }
      /**
       * Validate the header of the file.
       * @throws {Error} If bit depth is invalid.
       * @throws {Error} If the number of channels is invalid.
       * @throws {Error} If the sample rate is invalid.
       * @ignore
       * @private
       */
      validateWavHeader_() {
        this.validateBitDepth_();
        if (!validateNumChannels(this.fmt.numChannels, this.fmt.bitsPerSample)) {
          throw new Error("Invalid number of channels.");
        }
        if (!validateSampleRate(
          this.fmt.numChannels,
          this.fmt.bitsPerSample,
          this.fmt.sampleRate
        )) {
          throw new Error("Invalid sample rate.");
        }
      }
    };
    function fixRIFFTag(tag) {
      if (tag.constructor !== String) {
        throw new Error("Invalid tag name.");
      } else if (tag.length < 4) {
        for (let i = 0, len = 4 - tag.length; i < len; i++) {
          tag += " ";
        }
      }
      return tag;
    }
    var WaveFileMetaEditor = class extends WaveFileCreator {
      /**
       * Return the value of a RIFF tag in the INFO chunk.
       * @param {string} tag The tag name.
       * @return {?string} The value if the tag is found, null otherwise.
       */
      getTag(tag) {
        let index = this.getTagIndex_(tag);
        if (index.TAG !== null) {
          return this.LIST[index.LIST].subChunks[index.TAG].value;
        }
        return null;
      }
      /**
       * Write a RIFF tag in the INFO chunk. If the tag do not exist,
       * then it is created. It if exists, it is overwritten.
       * @param {string} tag The tag name.
       * @param {string} value The tag value.
       * @throws {Error} If the tag name is not valid.
       */
      setTag(tag, value) {
        tag = fixRIFFTag(tag);
        let index = this.getTagIndex_(tag);
        if (index.TAG !== null) {
          this.LIST[index.LIST].subChunks[index.TAG].chunkSize = value.length + 1;
          this.LIST[index.LIST].subChunks[index.TAG].value = value;
        } else if (index.LIST !== null) {
          this.LIST[index.LIST].subChunks.push({
            chunkId: tag,
            chunkSize: value.length + 1,
            value
          });
        } else {
          this.LIST.push({
            chunkId: "LIST",
            chunkSize: 8 + value.length + 1,
            format: "INFO",
            subChunks: []
          });
          this.LIST[this.LIST.length - 1].subChunks.push({
            chunkId: tag,
            chunkSize: value.length + 1,
            value
          });
        }
      }
      /**
       * Remove a RIFF tag from the INFO chunk.
       * @param {string} tag The tag name.
       * @return {boolean} True if a tag was deleted.
       */
      deleteTag(tag) {
        let index = this.getTagIndex_(tag);
        if (index.TAG !== null) {
          this.LIST[index.LIST].subChunks.splice(index.TAG, 1);
          return true;
        }
        return false;
      }
      /**
       * Return a Object<tag, value> with the RIFF tags in the file.
       * @return {!Object<string, string>} The file tags.
       */
      listTags() {
        let index = this.getLISTINFOIndex_();
        let tags = {};
        if (index !== null) {
          for (let i = 0, len = this.LIST[index].subChunks.length; i < len; i++) {
            tags[this.LIST[index].subChunks[i].chunkId] = this.LIST[index].subChunks[i].value;
          }
        }
        return tags;
      }
      /**
       * Return an array with all cue points in the file, in the order they appear
       * in the file.
       * The difference between this method and using the list in WaveFile.cue
       * is that the return value of this method includes the position in
       * milliseconds of each cue point (WaveFile.cue only have the sample offset)
       * @return {!Array<!Object>}
       */
      listCuePoints() {
        let points = this.getCuePoints_();
        for (let i = 0, len = points.length; i < len; i++) {
          points[i].milliseconds = points[i].dwPosition / this.fmt.sampleRate * 1e3;
        }
        return points;
      }
      /**
       * Create a cue point in the wave file.
       * @param {number} position The cue point position in milliseconds.
       * @param {string} labl The LIST adtl labl text of the marker. Optional.
       */
      setCuePoint(position, labl = "") {
        this.cue.chunkId = "cue ";
        position = position * this.fmt.sampleRate / 1e3;
        let existingPoints = this.getCuePoints_();
        this.clearLISTadtl_();
        let len = this.cue.points.length;
        this.cue.points = [];
        let hasSet = false;
        if (len === 0) {
          this.setCuePoint_(position, 1, labl);
        } else {
          for (let i = 0; i < len; i++) {
            if (existingPoints[i].dwPosition > position && !hasSet) {
              this.setCuePoint_(position, i + 1, labl);
              this.setCuePoint_(
                existingPoints[i].dwPosition,
                i + 2,
                existingPoints[i].label
              );
              hasSet = true;
            } else {
              this.setCuePoint_(
                existingPoints[i].dwPosition,
                i + 1,
                existingPoints[i].label
              );
            }
          }
          if (!hasSet) {
            this.setCuePoint_(position, this.cue.points.length + 1, labl);
          }
        }
        this.cue.dwCuePoints = this.cue.points.length;
      }
      /**
       * Remove a cue point from a wave file.
       * @param {number} index the index of the point. First is 1,
       *    second is 2, and so on.
       */
      deleteCuePoint(index) {
        this.cue.chunkId = "cue ";
        let existingPoints = this.getCuePoints_();
        this.clearLISTadtl_();
        let len = this.cue.points.length;
        this.cue.points = [];
        for (let i = 0; i < len; i++) {
          if (i + 1 !== index) {
            this.setCuePoint_(
              existingPoints[i].dwPosition,
              i + 1,
              existingPoints[i].label
            );
          }
        }
        this.cue.dwCuePoints = this.cue.points.length;
        if (this.cue.dwCuePoints) {
          this.cue.chunkId = "cue ";
        } else {
          this.cue.chunkId = "";
          this.clearLISTadtl_();
        }
      }
      /**
       * Update the label of a cue point.
       * @param {number} pointIndex The ID of the cue point.
       * @param {string} label The new text for the label.
       */
      updateLabel(pointIndex, label) {
        let cIndex = this.getAdtlChunk_();
        if (cIndex !== null) {
          for (let i = 0, len = this.LIST[cIndex].subChunks.length; i < len; i++) {
            if (this.LIST[cIndex].subChunks[i].dwName == pointIndex) {
              this.LIST[cIndex].subChunks[i].value = label;
            }
          }
        }
      }
      /**
       * Return an array with all cue points in the file, in the order they appear
       * in the file.
       * @return {!Array<!Object>}
       * @private
       */
      getCuePoints_() {
        let points = [];
        for (let i = 0, len = this.cue.points.length; i < len; i++) {
          points.push({
            dwPosition: this.cue.points[i].dwPosition,
            label: this.getLabelForCuePoint_(
              this.cue.points[i].dwName
            )
          });
        }
        return points;
      }
      /**
       * Return the label of a cue point.
       * @param {number} pointDwName The ID of the cue point.
       * @return {string}
       * @private
       */
      getLabelForCuePoint_(pointDwName) {
        let cIndex = this.getAdtlChunk_();
        if (cIndex !== null) {
          for (let i = 0, len = this.LIST[cIndex].subChunks.length; i < len; i++) {
            if (this.LIST[cIndex].subChunks[i].dwName == pointDwName) {
              return this.LIST[cIndex].subChunks[i].value;
            }
          }
        }
        return "";
      }
      /**
       * Return the index of the INFO chunk in the LIST chunk.
       * @return {?number} the index of the INFO chunk.
       * @private
       */
      getLISTINFOIndex_() {
        let index = null;
        for (let i = 0, len = this.LIST.length; i < len; i++) {
          if (this.LIST[i].format === "INFO") {
            index = i;
            break;
          }
        }
        return index;
      }
      /**
       * Return the index of the 'adtl' LIST in this.LIST.
       * @return {?number}
       * @private
       */
      getAdtlChunk_() {
        for (let i = 0, len = this.LIST.length; i < len; i++) {
          if (this.LIST[i].format == "adtl") {
            return i;
          }
        }
        return null;
      }
      /**
       * Return the index of a tag in a FILE chunk.
       * @param {string} tag The tag name.
       * @return {!Object<string, ?number>}
       *    Object.LIST is the INFO index in LIST
       *    Object.TAG is the tag index in the INFO
       * @private
       */
      getTagIndex_(tag) {
        let index = { LIST: null, TAG: null };
        for (let i = 0, len = this.LIST.length; i < len; i++) {
          if (this.LIST[i].format == "INFO") {
            index.LIST = i;
            for (let j = 0, subLen = this.LIST[i].subChunks.length; j < subLen; j++) {
              if (this.LIST[i].subChunks[j].chunkId == tag) {
                index.TAG = j;
                break;
              }
            }
            break;
          }
        }
        return index;
      }
      /**
       * Push a new cue point in this.cue.points.
       * @param {number} position The position in milliseconds.
       * @param {number} dwName the dwName of the cue point
       * @private
       */
      setCuePoint_(position, dwName, label) {
        this.cue.points.push({
          dwName,
          dwPosition: position,
          fccChunk: "data",
          dwChunkStart: 0,
          dwBlockStart: 0,
          dwSampleOffset: position
        });
        this.setLabl_(dwName, label);
      }
      /**
       * Clear any LIST chunk labeled as 'adtl'.
       * @private
       */
      clearLISTadtl_() {
        for (let i = 0, len = this.LIST.length; i < len; i++) {
          if (this.LIST[i].format == "adtl") {
            this.LIST.splice(i);
          }
        }
      }
      /**
       * Create a new 'labl' subchunk in a 'LIST' chunk of type 'adtl'.
       * @param {number} dwName The ID of the cue point.
       * @param {string} label The label for the cue point.
       * @private
       */
      setLabl_(dwName, label) {
        let adtlIndex = this.getAdtlChunk_();
        if (adtlIndex === null) {
          this.LIST.push({
            chunkId: "LIST",
            chunkSize: 4,
            format: "adtl",
            subChunks: []
          });
          adtlIndex = this.LIST.length - 1;
        }
        this.setLabelText_(adtlIndex === null ? 0 : adtlIndex, dwName, label);
      }
      /**
       * Create a new 'labl' subchunk in a 'LIST' chunk of type 'adtl'.
       * @param {number} adtlIndex The index of the 'adtl' LIST in this.LIST.
       * @param {number} dwName The ID of the cue point.
       * @param {string} label The label for the cue point.
       * @private
       */
      setLabelText_(adtlIndex, dwName, label) {
        this.LIST[adtlIndex].subChunks.push({
          chunkId: "labl",
          chunkSize: label.length,
          dwName,
          value: label
        });
        this.LIST[adtlIndex].chunkSize += label.length + 4 + 4 + 4 + 1;
      }
    };
    function truncateSamples(samples) {
      for (let i = 0, len = samples.length; i < len; i++) {
        if (samples[i] > 1) {
          samples[i] = 1;
        } else if (samples[i] < -1) {
          samples[i] = -1;
        }
      }
    }
    var WaveFileConverter = class extends WaveFileMetaEditor {
      /**
       * Force a file as RIFF.
       */
      toRIFF() {
        this.fromExisting_(
          this.fmt.numChannels,
          this.fmt.sampleRate,
          this.bitDepth,
          unpackArray(this.data.samples, this.dataType)
        );
      }
      /**
       * Force a file as RIFX.
       */
      toRIFX() {
        this.fromExisting_(
          this.fmt.numChannels,
          this.fmt.sampleRate,
          this.bitDepth,
          unpackArray(this.data.samples, this.dataType),
          { container: "RIFX" }
        );
      }
      /**
       * Encode a 16-bit wave file as 4-bit IMA ADPCM.
       * @throws {Error} If sample rate is not 8000.
       * @throws {Error} If number of channels is not 1.
       */
      toIMAADPCM() {
        if (this.fmt.sampleRate !== 8e3) {
          throw new Error(
            "Only 8000 Hz files can be compressed as IMA-ADPCM."
          );
        } else if (this.fmt.numChannels !== 1) {
          throw new Error(
            "Only mono files can be compressed as IMA-ADPCM."
          );
        } else {
          this.assure16Bit_();
          let output = new Int16Array(this.outputSize_());
          unpackArrayTo(this.data.samples, this.dataType, output);
          this.fromExisting_(
            this.fmt.numChannels,
            this.fmt.sampleRate,
            "4",
            encode$1(output),
            { container: this.correctContainer_() }
          );
        }
      }
      /**
       * Decode a 4-bit IMA ADPCM wave file as a 16-bit wave file.
       * @param {string} bitDepthCode The new bit depth of the samples.
       *    One of '8' ... '32' (integers), '32f' or '64' (floats).
       *    Optional. Default is 16.
       */
      fromIMAADPCM(bitDepthCode = "16") {
        this.fromExisting_(
          this.fmt.numChannels,
          this.fmt.sampleRate,
          "16",
          decode$1(this.data.samples, this.fmt.blockAlign),
          { container: this.correctContainer_() }
        );
        if (bitDepthCode != "16") {
          this.toBitDepth(bitDepthCode);
        }
      }
      /**
       * Encode a 16-bit wave file as 8-bit A-Law.
       */
      toALaw() {
        this.assure16Bit_();
        let output = new Int16Array(this.outputSize_());
        unpackArrayTo(this.data.samples, this.dataType, output);
        this.fromExisting_(
          this.fmt.numChannels,
          this.fmt.sampleRate,
          "8a",
          encode$2(output),
          { container: this.correctContainer_() }
        );
      }
      /**
       * Decode a 8-bit A-Law wave file into a 16-bit wave file.
       * @param {string} bitDepthCode The new bit depth of the samples.
       *    One of '8' ... '32' (integers), '32f' or '64' (floats).
       *    Optional. Default is 16.
       */
      fromALaw(bitDepthCode = "16") {
        this.fromExisting_(
          this.fmt.numChannels,
          this.fmt.sampleRate,
          "16",
          decode$2(this.data.samples),
          { container: this.correctContainer_() }
        );
        if (bitDepthCode != "16") {
          this.toBitDepth(bitDepthCode);
        }
      }
      /**
       * Encode 16-bit wave file as 8-bit mu-Law.
       */
      toMuLaw() {
        this.assure16Bit_();
        let output = new Int16Array(this.outputSize_());
        unpackArrayTo(this.data.samples, this.dataType, output);
        this.fromExisting_(
          this.fmt.numChannels,
          this.fmt.sampleRate,
          "8m",
          encode$3(output),
          { container: this.correctContainer_() }
        );
      }
      /**
       * Decode a 8-bit mu-Law wave file into a 16-bit wave file.
       * @param {string} bitDepthCode The new bit depth of the samples.
       *    One of '8' ... '32' (integers), '32f' or '64' (floats).
       *    Optional. Default is 16.
       */
      fromMuLaw(bitDepthCode = "16") {
        this.fromExisting_(
          this.fmt.numChannels,
          this.fmt.sampleRate,
          "16",
          decode$3(this.data.samples),
          { container: this.correctContainer_() }
        );
        if (bitDepthCode != "16") {
          this.toBitDepth(bitDepthCode);
        }
      }
      /**
       * Change the bit depth of the samples.
       * @param {string} newBitDepth The new bit depth of the samples.
       *    One of '8' ... '32' (integers), '32f' or '64' (floats)
       * @param {boolean} changeResolution A boolean indicating if the
       *    resolution of samples should be actually changed or not.
       * @throws {Error} If the bit depth is not valid.
       */
      toBitDepth(newBitDepth, changeResolution = true) {
        let toBitDepth = newBitDepth;
        let thisBitDepth = this.bitDepth;
        if (!changeResolution) {
          if (newBitDepth != "32f") {
            toBitDepth = this.dataType.bits.toString();
          }
          thisBitDepth = this.dataType.bits;
        }
        this.assureUncompressed_();
        let sampleCount = this.data.samples.length / (this.dataType.bits / 8);
        let typedSamplesInput = new Float64Array(sampleCount);
        let typedSamplesOutput = new Float64Array(sampleCount);
        unpackArrayTo(this.data.samples, this.dataType, typedSamplesInput);
        if (thisBitDepth == "32f" || thisBitDepth == "64") {
          truncateSamples(typedSamplesInput);
        }
        bitDepth(
          typedSamplesInput,
          thisBitDepth,
          toBitDepth,
          typedSamplesOutput
        );
        this.fromExisting_(
          this.fmt.numChannels,
          this.fmt.sampleRate,
          newBitDepth,
          typedSamplesOutput,
          { container: this.correctContainer_() }
        );
      }
      /**
       * Make the file 16-bit if it is not.
       * @private
       */
      assure16Bit_() {
        this.assureUncompressed_();
        if (this.bitDepth != "16") {
          this.toBitDepth("16");
        }
      }
      /**
       * Uncompress the samples in case of a compressed file.
       * @private
       */
      assureUncompressed_() {
        if (this.bitDepth == "8a") {
          this.fromALaw();
        } else if (this.bitDepth == "8m") {
          this.fromMuLaw();
        } else if (this.bitDepth == "4") {
          this.fromIMAADPCM();
        }
      }
      /**
       * Return 'RIFF' if the container is 'RF64', the current container name
       * otherwise. Used to enforce 'RIFF' when RF64 is not allowed.
       * @return {string}
       * @private
       */
      correctContainer_() {
        return this.container == "RF64" ? "RIFF" : this.container;
      }
      /**
       * Set up the WaveFileCreator object based on the arguments passed.
       * This method only reset the fmt , fact, ds64 and data chunks.
       * @param {number} numChannels The number of channels
       *    (Integer numbers: 1 for mono, 2 stereo and so on).
       * @param {number} sampleRate The sample rate.
       *    Integer numbers like 8000, 44100, 48000, 96000, 192000.
       * @param {string} bitDepthCode The audio bit depth code.
       *    One of '4', '8', '8a', '8m', '16', '24', '32', '32f', '64'
       *    or any value between '8' and '32' (like '12').
       * @param {!Array<number>|!Array<!Array<number>>|!TypedArray} samples
       *    The samples. Must be in the correct range according to the bit depth.
       * @param {?Object} options Optional. Used to force the container
       *    as RIFX with {'container': 'RIFX'}
       * @throws {Error} If any argument does not meet the criteria.
       * @private
       */
      fromExisting_(numChannels, sampleRate, bitDepthCode, samples, options = {}) {
        let tmpWav = new WaveFileMetaEditor();
        Object.assign(this.fmt, tmpWav.fmt);
        Object.assign(this.fact, tmpWav.fact);
        Object.assign(this.ds64, tmpWav.ds64);
        Object.assign(this.data, tmpWav.data);
        this.newWavFile_(numChannels, sampleRate, bitDepthCode, samples, options);
      }
      /**
       * Return the size in bytes of the output sample array when applying
       * compression to 16-bit samples.
       * @return {number}
       * @private
       */
      outputSize_() {
        let outputSize = this.data.samples.length / 2;
        if (outputSize % 2) {
          outputSize++;
        }
        return outputSize;
      }
    };
    var WaveFile = class extends WaveFileConverter {
      /**
       * @param {?Uint8Array=} wavBuffer A wave file buffer.
       * @throws {Error} If container is not RIFF, RIFX or RF64.
       * @throws {Error} If format is not WAVE.
       * @throws {Error} If no 'fmt ' chunk is found.
       * @throws {Error} If no 'data' chunk is found.
       */
      constructor(wavBuffer = null) {
        super();
        if (wavBuffer) {
          this.fromBuffer(wavBuffer);
        }
      }
      /**
       * Use a .wav file encoded as a base64 string to load the WaveFile object.
       * @param {string} base64String A .wav file as a base64 string.
       * @throws {Error} If any property of the object appears invalid.
       */
      fromBase64(base64String) {
        this.fromBuffer(new Uint8Array(decode(base64String)));
      }
      /**
       * Return a base64 string representig the WaveFile object as a .wav file.
       * @return {string} A .wav file as a base64 string.
       * @throws {Error} If any property of the object appears invalid.
       */
      toBase64() {
        let buffer = this.toBuffer();
        return encode(buffer, 0, buffer.length);
      }
      /**
       * Return a DataURI string representig the WaveFile object as a .wav file.
       * The return of this method can be used to load the audio in browsers.
       * @return {string} A .wav file as a DataURI.
       * @throws {Error} If any property of the object appears invalid.
       */
      toDataURI() {
        return "data:audio/wav;base64," + this.toBase64();
      }
      /**
       * Use a .wav file encoded as a DataURI to load the WaveFile object.
       * @param {string} dataURI A .wav file as DataURI.
       * @throws {Error} If any property of the object appears invalid.
       */
      fromDataURI(dataURI) {
        this.fromBase64(dataURI.replace("data:audio/wav;base64,", ""));
      }
    };
    module2.exports = WaveFile;
  }
});

// node_modules/atem-connection/dist/lib/converters/wavAudio.js
var require_wavAudio = __commonJS({
  "node_modules/atem-connection/dist/lib/converters/wavAudio.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.convertWAVToRaw = void 0;
    var Enums = require_enums();
    var WaveFile = require_wavefile_cjs();
    function convertWAVToRaw(inputBuffer, model) {
      const wav = new WaveFile(inputBuffer);
      if (wav.fmt.bitsPerSample !== 24) {
        throw new Error(`Invalid wav bit bits per sample: ${wav.fmt.bitsPerSample}`);
      }
      if (wav.fmt.numChannels !== 2) {
        throw new Error(`Invalid number of wav channels: ${wav.fmt.numChannel}`);
      }
      const buffer = Buffer.from(wav.data.samples);
      const buffer2 = Buffer.alloc(buffer.length);
      for (let i = 0; i < buffer.length; i += 3) {
        buffer2.writeUIntBE(buffer.readUIntLE(i, 3), i, 3);
      }
      if (model === void 0 || model >= Enums.Model.PS4K) {
        const buffer3 = Buffer.alloc(buffer2.length);
        for (let i = 0; i < buffer.length; i += 4) {
          buffer3.writeUIntBE(buffer2.readUIntLE(i, 4), i, 4);
        }
        return buffer3;
      } else {
        return buffer2;
      }
    }
    exports2.convertWAVToRaw = convertWAVToRaw;
  }
});

// node_modules/atem-connection/dist/lib/converters/yuv422ToRgba.js
var require_yuv422ToRgba = __commonJS({
  "node_modules/atem-connection/dist/lib/converters/yuv422ToRgba.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.convertYUV422ToRGBA = void 0;
    var colorConstants_1 = require_colorConstants();
    function clamp(v) {
      if (v <= 0)
        return 0;
      if (v >= 255)
        return 255;
      return v;
    }
    function convertYUV422ToRGBA(width, height, data) {
      const constants = height >= 720 ? colorConstants_1.ColorConvertConstantsBT709 : colorConstants_1.ColorConvertConstantsBT601;
      const splitSample = (raw) => {
        const y = (raw & 1023) << 6;
        const uv = (raw & 1047552) >> 4;
        const a = (raw & 1072693248) >> 20;
        const y_full = (y - constants.YOffset) / constants.YRange;
        const uv_full = (uv - constants.CbCrOffset) / constants.HalfCbCrRange;
        const a_full = (a - (16 << 2)) / 219 * 255 >> 2;
        return [y_full, uv_full, a_full];
      };
      const genColor = (y8, cb8, cr8, a10) => {
        const r = clamp(Math.round(y8 + constants.KRi * cr8));
        const g = clamp(Math.round(y8 - constants.KRKRioKG * cr8 - constants.KBKBioKG * cb8));
        const b = clamp(Math.round(y8 + constants.KBi * cb8));
        const a = Math.round(a10);
        return [r, g, b, a];
      };
      const buffer = Buffer.alloc(width * height * 4);
      for (let i = 0; i < width * height * 4; i += 8) {
        const sample1 = data.readUint32BE(i);
        const sample2 = data.readUint32BE(i + 4);
        const [y8a, cb8, a10a] = splitSample(sample1);
        const [y8b, cr8, a10b] = splitSample(sample2);
        const [r1, g1, b1, a1] = genColor(y8a, cb8, cr8, a10a);
        const [r2, g2, b2, a2] = genColor(y8b, cb8, cr8, a10b);
        buffer.writeUint8(r1, i);
        buffer.writeUint8(g1, i + 1);
        buffer.writeUint8(b1, i + 2);
        buffer.writeUint8(a1, i + 3);
        buffer.writeUint8(r2, i + 4);
        buffer.writeUint8(g2, i + 5);
        buffer.writeUint8(b2, i + 6);
        buffer.writeUint8(a2, i + 7);
      }
      return buffer;
    }
    exports2.convertYUV422ToRGBA = convertYUV422ToRGBA;
  }
});

// node_modules/atem-connection/dist/atem.js
var require_atem = __commonJS({
  "node_modules/atem-connection/dist/atem.js"(exports2) {
    "use strict";
    var _Atem_multiviewerFontFace;
    var _Atem_multiviewerFontScale;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Atem = exports2.BasicAtem = exports2.DEFAULT_MAX_PACKET_SIZE = exports2.DEFAULT_PORT = exports2.AtemConnectionStatus = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var eventemitter3_1 = require_eventemitter3();
    var state_1 = require_state();
    var atemSocket_1 = require_atemSocket();
    var Commands2 = require_commands();
    var DataTransferCommands = require_DataTransfer();
    var DT = require_dataTransfer2();
    var Util = require_atemUtil();
    var videoMode_1 = require_videoMode();
    var Enums = require_enums();
    var tally_1 = require_tally();
    var multiviewLabel_1 = require_multiviewLabel();
    var PLazy = require_p_lazy();
    var commands_1 = require_commands();
    var dataTransferUploadBuffer_1 = require_dataTransferUploadBuffer();
    var wavAudio_1 = require_wavAudio();
    var rle_1 = require_rle();
    var yuv422ToRgba_1 = require_yuv422ToRgba();
    var AtemConnectionStatus;
    (function(AtemConnectionStatus2) {
      AtemConnectionStatus2[AtemConnectionStatus2["CLOSED"] = 0] = "CLOSED";
      AtemConnectionStatus2[AtemConnectionStatus2["CONNECTING"] = 1] = "CONNECTING";
      AtemConnectionStatus2[AtemConnectionStatus2["CONNECTED"] = 2] = "CONNECTED";
    })(AtemConnectionStatus = exports2.AtemConnectionStatus || (exports2.AtemConnectionStatus = {}));
    exports2.DEFAULT_PORT = 9910;
    exports2.DEFAULT_MAX_PACKET_SIZE = 1416;
    var BasicAtem = class extends eventemitter3_1.EventEmitter {
      constructor(options) {
        super();
        this._sentQueue = {};
        this._state = state_1.AtemStateUtil.Create();
        this._status = AtemConnectionStatus.CLOSED;
        this.socket = new atemSocket_1.AtemSocket({
          debugBuffers: options?.debugBuffers ?? false,
          address: options?.address || "",
          port: options?.port || exports2.DEFAULT_PORT,
          disableMultithreaded: options?.disableMultithreaded ?? false,
          childProcessTimeout: options?.childProcessTimeout || 600,
          maxPacketSize: options?.maxPacketSize ?? exports2.DEFAULT_MAX_PACKET_SIZE
        });
        this.dataTransferManager = new DT.DataTransferManager(this.sendCommands.bind(this));
        this.socket.on("receivedCommands", (commands) => {
          this.emit("receivedCommands", commands);
          this._mutateState(commands);
        });
        this.socket.on("ackPackets", (trackingIds) => this._resolveCommands(trackingIds));
        this.socket.on("info", (msg2) => this.emit("info", msg2));
        this.socket.on("debug", (msg2) => this.emit("debug", msg2));
        this.socket.on("error", (e) => this.emit("error", e));
        this.socket.on("disconnect", () => {
          this._status = AtemConnectionStatus.CLOSED;
          this.dataTransferManager.stopCommandSending();
          this._rejectAllCommands();
          this.emit("disconnected");
          this._state = void 0;
        });
      }
      _onInitComplete() {
        this.dataTransferManager.startCommandSending();
        this.emit("connected");
      }
      get status() {
        return this._status;
      }
      get state() {
        return this._state;
      }
      /**
       * Get the current videomode of the ATEM, if known
       */
      get videoMode() {
        if (!this.state)
          return void 0;
        return (0, videoMode_1.getVideoModeInfo)(this.state.settings.videoMode);
      }
      async connect(address, port2) {
        return this.socket.connect(address, port2);
      }
      async disconnect() {
        return this.socket.disconnect();
      }
      async destroy() {
        this.dataTransferManager.stopCommandSending();
        return this.socket.destroy();
      }
      async sendCommands(commands) {
        const groups = /* @__PURE__ */ new Map();
        commands.forEach((cmd) => {
          const orderGroup = cmd.runOrderGroup || 0;
          if (!groups.has(orderGroup)) {
            groups.set(orderGroup, []);
          }
          groups.get(orderGroup)?.push(cmd);
        });
        await Promise.all(Array.from(groups.keys()).sort().map(async (orderGroup) => this.sendUnprioritizedCommands(groups.get(orderGroup) || [])));
      }
      async sendUnprioritizedCommands(commands) {
        const trackingIds = await this.socket.sendCommands(commands);
        const promises = [];
        for (const trackingId of trackingIds) {
          promises.push(new Promise((resolve, reject) => {
            this._sentQueue[trackingId] = {
              resolve,
              reject
            };
          }));
        }
        await Promise.allSettled(promises);
      }
      async sendCommand(command) {
        return await this.sendCommands([command]);
      }
      _mutateState(commands) {
        if (commands.find((cmd) => cmd instanceof Commands2.VersionCommand)) {
          this._state = state_1.AtemStateUtil.Create();
          this._status = AtemConnectionStatus.CONNECTING;
        }
        const allChangedPaths = [];
        const state = this._state;
        for (const command of commands) {
          if (command instanceof commands_1.TimeCommand) {
            this.emit("updatedTime", command.properties);
          } else if (command instanceof Commands2.FairlightMixerMasterLevelsUpdateCommand) {
            this.emit("levelChanged", {
              system: "fairlight",
              type: "master",
              levels: command.properties
            });
          } else if (command instanceof Commands2.FairlightMixerSourceLevelsUpdateCommand) {
            this.emit("levelChanged", {
              system: "fairlight",
              type: "source",
              source: command.source,
              index: command.index,
              levels: command.properties
            });
          } else if (state) {
            try {
              const changePaths = command.applyToState(state);
              if (!Array.isArray(changePaths)) {
                allChangedPaths.push(changePaths);
              } else {
                allChangedPaths.push(...changePaths);
              }
            } catch (e) {
              if (e instanceof state_1.InvalidIdError) {
                this.emit("debug", `Invalid command id: ${e}. Command: ${command.constructor.name} ${Util.commandStringify(command)}`);
              } else {
                this.emit("error", `MutateState failed: ${e}. Command: ${command.constructor.name} ${Util.commandStringify(command)}`);
              }
            }
          }
          for (const dtCommand of Object.values(DataTransferCommands)) {
            if (typeof dtCommand === "function" && command instanceof dtCommand) {
              this.dataTransferManager.queueHandleCommand(command);
            }
          }
        }
        const initComplete = commands.find((cmd) => cmd instanceof Commands2.InitCompleteCommand);
        if (initComplete) {
          this._status = AtemConnectionStatus.CONNECTED;
          this._onInitComplete();
        } else if (state && this._status === AtemConnectionStatus.CONNECTED && allChangedPaths.length > 0) {
          this.emit("stateChanged", state, allChangedPaths);
        }
      }
      _resolveCommands(trackingIds) {
        trackingIds.forEach((trackingId) => {
          const sent = this._sentQueue[trackingId];
          if (sent) {
            sent.resolve();
            delete this._sentQueue[trackingId];
          }
        });
      }
      _rejectAllCommands() {
        const sentQueue = this._sentQueue;
        this._sentQueue = {};
        Object.values(sentQueue).forEach((sent) => sent.reject());
      }
    };
    exports2.BasicAtem = BasicAtem;
    var Atem2 = class extends BasicAtem {
      constructor(options) {
        super(options);
        _Atem_multiviewerFontFace.set(this, void 0);
        _Atem_multiviewerFontScale.set(this, void 0);
        tslib_1.__classPrivateFieldSet(this, _Atem_multiviewerFontFace, PLazy.from(async () => (0, multiviewLabel_1.loadFont)()), "f");
        tslib_1.__classPrivateFieldSet(this, _Atem_multiviewerFontScale, 1, "f");
      }
      /**
       * Set the font to use for the multiviewer, or reset to default
       */
      async setMultiviewerFontFace(font) {
        let loadedFont;
        if (font) {
          if (typeof font === "string") {
            loadedFont = await (0, multiviewLabel_1.loadFont)(font);
          } else {
            loadedFont = font;
          }
        } else {
          loadedFont = await (0, multiviewLabel_1.loadFont)();
        }
        tslib_1.__classPrivateFieldSet(this, _Atem_multiviewerFontFace, Promise.resolve(loadedFont), "f");
      }
      /**
       * Set the scale factor for the multiviewer text. Default is 1
       */
      setMultiviewerFontScale(scale) {
        if (typeof scale === "number") {
          if (scale <= 0)
            throw new Error("Scale must be greater than 0");
          tslib_1.__classPrivateFieldSet(this, _Atem_multiviewerFontScale, scale, "f");
        } else if (scale === null) {
          tslib_1.__classPrivateFieldSet(this, _Atem_multiviewerFontScale, 1, "f");
        }
      }
      async changeProgramInput(input, me = 0) {
        const command = new Commands2.ProgramInputCommand(me, input);
        return this.sendCommand(command);
      }
      async changePreviewInput(input, me = 0) {
        const command = new Commands2.PreviewInputCommand(me, input);
        return this.sendCommand(command);
      }
      async cut(me = 0) {
        const command = new Commands2.CutCommand(me);
        return this.sendCommand(command);
      }
      async autoTransition(me = 0) {
        const command = new Commands2.AutoTransitionCommand(me);
        return this.sendCommand(command);
      }
      async fadeToBlack(me = 0) {
        const command = new Commands2.FadeToBlackAutoCommand(me);
        return this.sendCommand(command);
      }
      async setFadeToBlackRate(rate, me = 0) {
        const command = new Commands2.FadeToBlackRateCommand(me, rate);
        return this.sendCommand(command);
      }
      async autoDownstreamKey(key = 0, isTowardsOnAir) {
        const command = new Commands2.DownstreamKeyAutoCommand(key);
        command.updateProps({ isTowardsOnAir });
        return this.sendCommand(command);
      }
      async setDipTransitionSettings(newProps, me = 0) {
        const command = new Commands2.TransitionDipCommand(me);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setDVETransitionSettings(newProps, me = 0) {
        const command = new Commands2.TransitionDVECommand(me);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setMixTransitionSettings(newProps, me = 0) {
        const command = new Commands2.TransitionMixCommand(me, newProps.rate);
        return this.sendCommand(command);
      }
      async setTransitionPosition(position, me = 0) {
        const command = new Commands2.TransitionPositionCommand(me, position);
        return this.sendCommand(command);
      }
      async previewTransition(on, me = 0) {
        const command = new Commands2.PreviewTransitionCommand(me, on);
        return this.sendCommand(command);
      }
      async setTransitionStyle(newProps, me = 0) {
        const command = new Commands2.TransitionPropertiesCommand(me);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setStingerTransitionSettings(newProps, me = 0) {
        const command = new Commands2.TransitionStingerCommand(me);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setWipeTransitionSettings(newProps, me = 0) {
        const command = new Commands2.TransitionWipeCommand(me);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setAuxSource(source, bus = 0) {
        const command = new Commands2.AuxSourceCommand(bus, source);
        return this.sendCommand(command);
      }
      async setDownstreamKeyTie(tie, key = 0) {
        const command = new Commands2.DownstreamKeyTieCommand(key, tie);
        return this.sendCommand(command);
      }
      async setDownstreamKeyOnAir(onAir, key = 0) {
        const command = new Commands2.DownstreamKeyOnAirCommand(key, onAir);
        return this.sendCommand(command);
      }
      async setDownstreamKeyCutSource(input, key = 0) {
        const command = new Commands2.DownstreamKeyCutSourceCommand(key, input);
        return this.sendCommand(command);
      }
      async setDownstreamKeyFillSource(input, key = 0) {
        const command = new Commands2.DownstreamKeyFillSourceCommand(key, input);
        return this.sendCommand(command);
      }
      async setDownstreamKeyGeneralProperties(props, key = 0) {
        const command = new Commands2.DownstreamKeyGeneralCommand(key);
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setDownstreamKeyMaskSettings(props, key = 0) {
        const command = new Commands2.DownstreamKeyMaskCommand(key);
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setDownstreamKeyRate(rate, key = 0) {
        const command = new Commands2.DownstreamKeyRateCommand(key, rate);
        return this.sendCommand(command);
      }
      async setTime(hour, minute, second, frame) {
        const command = new Commands2.TimeCommand({ hour, minute, second, frame });
        return this.sendCommand(command);
      }
      async setTimeMode(mode) {
        const command = new Commands2.TimeConfigCommand(mode);
        return this.sendCommand(command);
      }
      async requestTime() {
        const command = new Commands2.TimeRequestCommand();
        return this.sendCommand(command);
      }
      async macroContinue() {
        const command = new Commands2.MacroActionCommand(0, Enums.MacroAction.Continue);
        return this.sendCommand(command);
      }
      async macroDelete(index = 0) {
        const command = new Commands2.MacroActionCommand(index, Enums.MacroAction.Delete);
        return this.sendCommand(command);
      }
      async macroInsertUserWait() {
        const command = new Commands2.MacroActionCommand(0, Enums.MacroAction.InsertUserWait);
        return this.sendCommand(command);
      }
      async macroInsertTimedWait(frames) {
        const command = new Commands2.MacroAddTimedPauseCommand(frames);
        return this.sendCommand(command);
      }
      async macroRun(index = 0) {
        const command = new Commands2.MacroActionCommand(index, Enums.MacroAction.Run);
        return this.sendCommand(command);
      }
      async macroStop() {
        const command = new Commands2.MacroActionCommand(0, Enums.MacroAction.Stop);
        return this.sendCommand(command);
      }
      async macroStartRecord(index, name, description) {
        const command = new Commands2.MacroRecordCommand(index, name, description);
        return this.sendCommand(command);
      }
      async macroStopRecord() {
        const command = new Commands2.MacroActionCommand(0, Enums.MacroAction.StopRecord);
        return this.sendCommand(command);
      }
      async macroUpdateProperties(props, index = 0) {
        const command = new Commands2.MacroPropertiesCommand(index);
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async macroSetLoop(loop) {
        const command = new Commands2.MacroRunStatusCommand();
        command.updateProps({ loop });
        return this.sendCommand(command);
      }
      async downloadMacro(index) {
        return this.dataTransferManager.downloadMacro(index);
      }
      async uploadMacro(index, name, data) {
        return this.dataTransferManager.uploadMacro(index, data, name);
      }
      async setMultiViewerWindowSource(source, mv = 0, window2 = 0) {
        const command = new Commands2.MultiViewerSourceCommand(mv, window2, source);
        return this.sendCommand(command);
      }
      async setMultiViewerWindowSafeAreaEnabled(safeAreaEnabled, mv = 0, window2 = 0) {
        const command = new Commands2.MultiViewerWindowSafeAreaCommand(mv, window2, safeAreaEnabled);
        return this.sendCommand(command);
      }
      async setMultiViewerWindowVuEnabled(vuEnabled, mv = 0, window2 = 0) {
        const command = new Commands2.MultiViewerWindowVuMeterCommand(mv, window2, vuEnabled);
        return this.sendCommand(command);
      }
      async setMultiViewerVuOpacity(opacity, mv = 0) {
        const command = new Commands2.MultiViewerVuOpacityCommand(mv, opacity);
        return this.sendCommand(command);
      }
      async setMultiViewerProperties(props, mv = 0) {
        const command = new Commands2.MultiViewerPropertiesCommand(mv);
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setColorGeneratorColour(newProps, index = 0) {
        const command = new Commands2.ColorGeneratorCommand(index);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setMediaPlayerSettings(newProps, player = 0) {
        const command = new Commands2.MediaPlayerStatusCommand(player);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setMediaPlayerSource(newProps, player = 0) {
        const command = new Commands2.MediaPlayerSourceCommand(player);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setMediaClip(index, name, frames = 1) {
        const command = new Commands2.MediaPoolSetClipCommand({ index, name, frames });
        return this.sendCommand(command);
      }
      async clearMediaPoolClip(clipId) {
        const command = new Commands2.MediaPoolClearClipCommand(clipId);
        return this.sendCommand(command);
      }
      async clearMediaPoolStill(stillId) {
        const command = new Commands2.MediaPoolClearStillCommand(stillId);
        return this.sendCommand(command);
      }
      async captureMediaPoolStill() {
        const command = new Commands2.MediaPoolCaptureStillCommand();
        return this.sendCommand(command);
      }
      async setSuperSourceBoxSettings(newProps, box = 0, ssrcId = 0) {
        const command = new Commands2.SuperSourceBoxParametersCommand(ssrcId, box);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setSuperSourceProperties(newProps, ssrcId = 0) {
        if (this.state && this.state.info.apiVersion >= Enums.ProtocolVersion.V8_0) {
          const command = new Commands2.SuperSourcePropertiesV8Command(ssrcId);
          command.updateProps(newProps);
          return this.sendCommand(command);
        } else {
          const command = new Commands2.SuperSourcePropertiesCommand();
          command.updateProps(newProps);
          return this.sendCommand(command);
        }
      }
      async setSuperSourceBorder(newProps, ssrcId = 0) {
        if (this.state && this.state.info.apiVersion >= Enums.ProtocolVersion.V8_0) {
          const command = new Commands2.SuperSourceBorderCommand(ssrcId);
          command.updateProps(newProps);
          return this.sendCommand(command);
        } else {
          const command = new Commands2.SuperSourcePropertiesCommand();
          command.updateProps(newProps);
          return this.sendCommand(command);
        }
      }
      async setInputSettings(newProps, input = 0) {
        const command = new Commands2.InputPropertiesCommand(input);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setUpstreamKeyerChromaSettings(newProps, me = 0, keyer = 0) {
        const command = new Commands2.MixEffectKeyChromaCommand(me, keyer);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setUpstreamKeyerAdvancedChromaProperties(newProps, me = 0, keyer = 0) {
        const command = new Commands2.MixEffectKeyAdvancedChromaPropertiesCommand(me, keyer);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setUpstreamKeyerAdvancedChromaSample(newProps, me = 0, keyer = 0) {
        const command = new Commands2.MixEffectKeyAdvancedChromaSampleCommand(me, keyer);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setUpstreamKeyerAdvancedChromaSampleReset(flags, me = 0, keyer = 0) {
        const command = new Commands2.MixEffectKeyAdvancedChromaSampleResetCommand(me, keyer, flags);
        return this.sendCommand(command);
      }
      async setUpstreamKeyerCutSource(cutSource, me = 0, keyer = 0) {
        const command = new Commands2.MixEffectKeyCutSourceSetCommand(me, keyer, cutSource);
        return this.sendCommand(command);
      }
      async setUpstreamKeyerFillSource(fillSource, me = 0, keyer = 0) {
        const command = new Commands2.MixEffectKeyFillSourceSetCommand(me, keyer, fillSource);
        return this.sendCommand(command);
      }
      async setUpstreamKeyerDVESettings(newProps, me = 0, keyer = 0) {
        const command = new Commands2.MixEffectKeyDVECommand(me, keyer);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setUpstreamKeyerLumaSettings(newProps, me = 0, keyer = 0) {
        const command = new Commands2.MixEffectKeyLumaCommand(me, keyer);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setUpstreamKeyerMaskSettings(newProps, me = 0, keyer = 0) {
        const command = new Commands2.MixEffectKeyMaskSetCommand(me, keyer);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setUpstreamKeyerPatternSettings(newProps, me = 0, keyer = 0) {
        const command = new Commands2.MixEffectKeyPatternCommand(me, keyer);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      async setUpstreamKeyerOnAir(onAir, me = 0, keyer = 0) {
        const command = new Commands2.MixEffectKeyOnAirCommand(me, keyer, onAir);
        return this.sendCommand(command);
      }
      async runUpstreamKeyerFlyKeyTo(mixEffect, upstreamKeyerId, keyFrameId) {
        const command = new Commands2.MixEffectKeyRunToCommand(mixEffect, upstreamKeyerId, keyFrameId, 0);
        return this.sendCommand(command);
      }
      async runUpstreamKeyerFlyKeyToInfinite(mixEffect, upstreamKeyerId, direction) {
        const command = new Commands2.MixEffectKeyRunToCommand(mixEffect, upstreamKeyerId, Enums.FlyKeyKeyFrame.RunToInfinite, direction);
        return this.sendCommand(command);
      }
      async storeUpstreamKeyerFlyKeyKeyframe(mixEffect, upstreamKeyerId, keyframe) {
        const command = new Commands2.MixEffectKeyFlyKeyframeStoreCommand(mixEffect, upstreamKeyerId, keyframe);
        return this.sendCommand(command);
      }
      async setUpstreamKeyerFlyKeyKeyframe(mixEffect, upstreamKeyerId, keyframe, properties) {
        const command = new Commands2.MixEffectKeyFlyKeyframeCommand(mixEffect, upstreamKeyerId, keyframe);
        command.updateProps(properties);
        return this.sendCommand(command);
      }
      async setUpstreamKeyerType(newProps, me = 0, keyer = 0) {
        const command = new Commands2.MixEffectKeyTypeSetCommand(me, keyer);
        command.updateProps(newProps);
        return this.sendCommand(command);
      }
      /**
       * Download a frame of a clip from the ATEM media pool
       *
       * Note: This performs colour conversions in JS, which is not very CPU efficient. If performance is important,
       * consider using [@atem-connection/image-tools](https://www.npmjs.com/package/@atem-connection/image-tools) to
       * pre-convert the images with more optimal algorithms
       * @param clipIndex Clip index to download
       * @param frameIndex Frame index to download from the clip
       * @param format The pixel format to return for the downloaded image. 'raw' passes through unchanged, and will be RLE encoded.
       * @returns Promise which returns the image once downloaded. If the still slot is not in use, this will throw
       */
      async downloadClipFrame(clipIndex, frameIndex, format = "rgba") {
        let rawBuffer = await this.dataTransferManager.downloadClipFrame(clipIndex, frameIndex);
        if (format === "raw") {
          return rawBuffer;
        }
        if (!this.state)
          throw new Error("Unable to check current resolution");
        const resolution = (0, videoMode_1.getVideoModeInfo)(this.state.settings.videoMode);
        if (!resolution)
          throw new Error("Failed to determine required resolution");
        rawBuffer = (0, rle_1.decodeRLE)(rawBuffer, resolution.width * resolution.height * 4);
        switch (format) {
          case "yuv":
            return rawBuffer;
          case "rgba":
          default:
            return (0, yuv422ToRgba_1.convertYUV422ToRGBA)(resolution.width, resolution.height, rawBuffer);
        }
      }
      /**
       * Download a still image from the ATEM media pool
       *
       * Note: This performs colour conversions in JS, which is not very CPU efficient. If performance is important,
       * consider using [@atem-connection/image-tools](https://www.npmjs.com/package/@atem-connection/image-tools) to
       * pre-convert the images with more optimal algorithms
       * @param index Still index to download
       * @param format The pixel format to return for the downloaded image. 'raw' passes through unchanged, and will be RLE encoded.
       * @returns Promise which returns the image once downloaded. If the still slot is not in use, this will throw
       */
      async downloadStill(index, format = "rgba") {
        let rawBuffer = await this.dataTransferManager.downloadStill(index);
        if (format === "raw") {
          return rawBuffer;
        }
        if (!this.state)
          throw new Error("Unable to check current resolution");
        const resolution = (0, videoMode_1.getVideoModeInfo)(this.state.settings.videoMode);
        if (!resolution)
          throw new Error("Failed to determine required resolution");
        rawBuffer = (0, rle_1.decodeRLE)(rawBuffer, resolution.width * resolution.height * 4);
        switch (format) {
          case "yuv":
            return rawBuffer;
          case "rgba":
          default:
            return (0, yuv422ToRgba_1.convertYUV422ToRGBA)(resolution.width, resolution.height, rawBuffer);
        }
      }
      /**
       * Upload a still image to the ATEM media pool
       *
       * Note: This performs colour conversions in JS, which is not very CPU efficient. If performance is important,
       * consider using [@atem-connection/image-tools](https://www.npmjs.com/package/@atem-connection/image-tools) to
       * pre-convert the images with more optimal algorithms
       * @param index Still index to upload to
       * @param data a RGBA pixel buffer, or an already YUVA encoded image
       * @param name Name to give the uploaded image
       * @param description Description for the uploaded image
       * @param options Upload options
       * @returns Promise which resolves once the image is uploaded
       */
      async uploadStill(index, data, name, description, options) {
        if (!this.state)
          throw new Error("Unable to check current resolution");
        const resolution = (0, videoMode_1.getVideoModeInfo)(this.state.settings.videoMode);
        if (!resolution)
          throw new Error("Failed to determine required resolution");
        const encodedData = (0, dataTransferUploadBuffer_1.generateUploadBufferInfo)(data, resolution, !options?.disableRLE);
        return this.dataTransferManager.uploadStill(index, encodedData, name, description);
      }
      /**
       * Upload a clip to the ATEM media pool
       *
       * Note: This performs colour conversions in JS, which is not very CPU efficient. If performance is important,
       * consider using [@atem-connection/image-tools](https://www.npmjs.com/package/@atem-connection/image-tools) to
       * pre-convert the images with more optimal algorithms
       * @param index Clip index to upload to
       * @param frames Array or generator of frames. Each frame can be a RGBA pixel buffer, or an already YUVA encoded image
       * @param name Name to give the uploaded clip
       * @param options Upload options
       * @returns Promise which resolves once the clip is uploaded
       */
      async uploadClip(index, frames, name, options) {
        if (!this.state)
          throw new Error("Unable to check current resolution");
        const resolution = (0, videoMode_1.getVideoModeInfo)(this.state.settings.videoMode);
        if (!resolution)
          throw new Error("Failed to determine required resolution");
        const provideFrame = async function* () {
          for await (const frame of frames) {
            yield (0, dataTransferUploadBuffer_1.generateUploadBufferInfo)(frame, resolution, !options?.disableRLE);
          }
        };
        return this.dataTransferManager.uploadClip(index, provideFrame(), name);
      }
      /**
       * Upload clip audio to the ATEM media pool
       * @param index Clip index to upload to
       * @param data stereo 48khz 24bit WAV audio data
       * @param name Name to give the uploaded audio
       * @returns Promise which resolves once the clip audio is uploaded
       */
      async uploadAudio(index, data, name) {
        return this.dataTransferManager.uploadAudio(index, (0, wavAudio_1.convertWAVToRaw)(data, this.state?.info?.model), name);
      }
      async setClassicAudioMixerInputProps(index, props) {
        const command = new Commands2.AudioMixerInputCommand(index);
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setClassicAudioMixerMasterProps(props) {
        const command = new Commands2.AudioMixerMasterCommand();
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setClassicAudioMixerMonitorProps(props) {
        const command = new Commands2.AudioMixerMonitorCommand();
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setClassicAudioMixerHeadphonesProps(props) {
        const command = new Commands2.AudioMixerHeadphonesCommand();
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setClassicAudioResetPeaks(props) {
        const command = new Commands2.AudioMixerResetPeaksCommand();
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setClassicAudioMixerProps(props) {
        const command = new Commands2.AudioMixerPropertiesCommand(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerMasterProps(props) {
        const command = new Commands2.FairlightMixerMasterCommand();
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerMasterCompressorProps(props) {
        const command = new Commands2.FairlightMixerMasterCompressorCommand();
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerMasterLimiterProps(props) {
        const command = new Commands2.FairlightMixerMasterLimiterCommand();
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerMasterEqualizerBandProps(band, props) {
        const command = new Commands2.FairlightMixerMasterEqualizerBandCommand(band);
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerMasterEqualizerReset(props) {
        const command = new Commands2.FairlightMixerMasterEqualizerResetCommand();
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerMasterDynamicsReset(props) {
        const command = new Commands2.FairlightMixerMasterDynamicsResetCommand();
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerResetPeaks(props) {
        const command = new Commands2.FairlightMixerResetPeakLevelsCommand(props);
        return this.sendCommand(command);
      }
      async startFairlightMixerSendLevels() {
        const command = new Commands2.FairlightMixerSendLevelsCommand(true);
        return this.sendCommand(command);
      }
      async stopFairlightMixerSendLevels() {
        const command = new Commands2.FairlightMixerSendLevelsCommand(false);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerMonitorProps(props) {
        const command = new Commands2.FairlightMixerMonitorCommand();
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerMonitorSolo(props) {
        const command = new Commands2.FairlightMixerMonitorSoloCommand();
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerInputProps(index, props) {
        if (this.state && this.state.info.apiVersion >= Enums.ProtocolVersion.V8_0) {
          const command = new Commands2.FairlightMixerInputV8Command(index);
          command.updateProps(props);
          return this.sendCommand(command);
        } else {
          const command = new Commands2.FairlightMixerInputCommand(index);
          command.updateProps(props);
          return this.sendCommand(command);
        }
      }
      async setFairlightAudioMixerSourceProps(index, source, props) {
        const command = new Commands2.FairlightMixerSourceCommand(index, BigInt(source));
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerSourceCompressorProps(index, source, props) {
        const command = new Commands2.FairlightMixerSourceCompressorCommand(index, BigInt(source));
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerSourceLimiterProps(index, source, props) {
        const command = new Commands2.FairlightMixerSourceLimiterCommand(index, BigInt(source));
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerSourceExpanderProps(index, source, props) {
        const command = new Commands2.FairlightMixerSourceExpanderCommand(index, BigInt(source));
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerSourceEqualizerBandProps(index, source, band, props) {
        const command = new Commands2.FairlightMixerSourceEqualizerBandCommand(index, BigInt(source), band);
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerSourceDynamicsReset(index, source, props) {
        const command = new Commands2.FairlightMixerSourceDynamicsResetCommand(index, BigInt(source));
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerSourceEqualizerReset(index, source, props) {
        const command = new Commands2.FairlightMixerSourceEqualizerResetCommand(index, BigInt(source));
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioMixerSourceResetPeaks(index, source, props) {
        const command = new Commands2.FairlightMixerSourceResetPeakLevelsCommand(index, BigInt(source), props);
        return this.sendCommand(command);
      }
      async startStreaming() {
        const command = new Commands2.StreamingStatusCommand(true);
        return this.sendCommand(command);
      }
      async stopStreaming() {
        const command = new Commands2.StreamingStatusCommand(false);
        return this.sendCommand(command);
      }
      async requestStreamingDuration() {
        const command = new Commands2.StreamingRequestDurationCommand();
        return this.sendCommand(command);
      }
      async setStreamingService(props) {
        const command = new Commands2.StreamingServiceCommand();
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setStreamingAudioBitrates(lowBitrate, highBitrate) {
        const command = new Commands2.StreamingAudioBitratesCommand(lowBitrate, highBitrate);
        return this.sendCommand(command);
      }
      async startRecording() {
        const command = new Commands2.RecordingStatusCommand(true);
        return this.sendCommand(command);
      }
      async stopRecording() {
        const command = new Commands2.RecordingStatusCommand(false);
        return this.sendCommand(command);
      }
      async requestRecordingDuration() {
        const command = new Commands2.RecordingRequestDurationCommand();
        return this.sendCommand(command);
      }
      async switchRecordingDisk() {
        const command = new Commands2.RecordingRequestSwitchDiskCommand();
        return this.sendCommand(command);
      }
      async setRecordingSettings(props) {
        const command = new Commands2.RecordingSettingsCommand();
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setEnableISORecording(enabled) {
        const command = new Commands2.RecordingISOCommand(enabled);
        return this.sendCommand(command);
      }
      async saveStartupState() {
        const command = new Commands2.StartupStateSaveCommand();
        return this.sendCommand(command);
      }
      async clearStartupState() {
        const command = new Commands2.StartupStateClearCommand();
        return this.sendCommand(command);
      }
      listVisibleInputs(mode, me = 0) {
        if (this.state) {
          return (0, tally_1.listVisibleInputs)(mode, this.state, me);
        } else {
          return [];
        }
      }
      async setMediaPoolSettings(props) {
        const command = new Commands2.MediaPoolSettingsSetCommand(props.maxFrames);
        return this.sendCommand(command);
      }
      async requestDisplayClockTime() {
        const command = new Commands2.DisplayClockRequestTimeCommand();
        return this.sendCommand(command);
      }
      async setDisplayClockState(state) {
        const command = new Commands2.DisplayClockStateSetCommand(state);
        return this.sendCommand(command);
      }
      async setDisplayClockProperties(props) {
        const command = new Commands2.DisplayClockPropertiesSetCommand();
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioRoutingSourceProperties(sourceId, props) {
        const command = new Commands2.AudioRoutingSourceCommand(sourceId);
        command.updateProps(props);
        return this.sendCommand(command);
      }
      async setFairlightAudioRoutingOutputProperties(sourceId, props) {
        const command = new Commands2.AudioRoutingOutputCommand(sourceId);
        command.updateProps(props);
        return this.sendCommand(command);
      }
      hasInternalMultiviewerLabelGeneration() {
        return !!this.state && (0, multiviewLabel_1.hasInternalMultiviewerLabelGeneration)(this.state?.info.model);
      }
      /**
       * Write a custom multiviewer label buffer
       * @param inputId The input id
       * @param buffer Label buffer
       * @returns Promise that resolves once upload is complete
       */
      async writeMultiviewerLabel(inputId, buffer) {
        if (this.hasInternalMultiviewerLabelGeneration())
          throw new Error(`ATEM doesn't support custom labels`);
        const badValues = /* @__PURE__ */ new Set([255, 254]);
        for (const val of buffer) {
          if (badValues.has(val)) {
            throw new Error(`Buffer contains invalid value ${val}`);
          }
        }
        return this.dataTransferManager.uploadMultiViewerLabel(inputId, buffer);
      }
      /**
       * Generate and upload a multiviewer label
       * @param inputId The input id
       * @param text Label text
       * @returns Promise that resolves once upload is complete
       */
      async drawMultiviewerLabel(inputId, text) {
        if (this.hasInternalMultiviewerLabelGeneration())
          throw new Error(`ATEM doesn't support custom labels`);
        const props = (0, multiviewLabel_1.calculateGenerateMultiviewerLabelProps)(this.state ?? null);
        if (!props)
          throw new Error(`Failed to determine render properties`);
        const fontFace = await tslib_1.__classPrivateFieldGet(this, _Atem_multiviewerFontFace, "f");
        const buffer = (0, multiviewLabel_1.generateMultiviewerLabel)(fontFace, tslib_1.__classPrivateFieldGet(this, _Atem_multiviewerFontScale, "f"), text, props);
        return this.dataTransferManager.uploadMultiViewerLabel(inputId, buffer);
      }
    };
    exports2.Atem = Atem2;
    _Atem_multiviewerFontFace = /* @__PURE__ */ new WeakMap(), _Atem_multiviewerFontScale = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/atem-connection/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/atem-connection/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SettingsState = exports2.MacroState = exports2.InputState = exports2.InfoState = exports2.MediaState = exports2.AudioState = exports2.VideoState = exports2.listVisibleInputs = exports2.Util = exports2.Commands = exports2.Enums = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_atem(), exports2);
    tslib_1.__exportStar(require_state(), exports2);
    var Enums = require_enums();
    exports2.Enums = Enums;
    var Commands2 = require_commands();
    exports2.Commands = Commands2;
    var Util = require_atemUtil();
    exports2.Util = Util;
    var tally_1 = require_tally();
    Object.defineProperty(exports2, "listVisibleInputs", { enumerable: true, get: function() {
      return tally_1.listVisibleInputs;
    } });
    var VideoState = require_video();
    exports2.VideoState = VideoState;
    var AudioState = require_audio();
    exports2.AudioState = AudioState;
    var MediaState = require_media();
    exports2.MediaState = MediaState;
    var InfoState = require_info();
    exports2.InfoState = InfoState;
    var InputState = require_input();
    exports2.InputState = InputState;
    var MacroState = require_macro();
    exports2.MacroState = MacroState;
    var SettingsState = require_settings();
    exports2.SettingsState = SettingsState;
  }
});

// tools/aroc_server.js
var net = require("net");
var { Atem, Commands } = require_dist3();
function usage() {
  console.log("Usage: node tools/aroc_server.js <ATEM_IP> [--port 9915]");
  process.exit(1);
}
var args = process.argv.slice(2);
if (args.length < 1) usage();
var ip = args[0];
var port = 9915;
for (let i = 1; i < args.length; i++) {
  if (args[i] === "--port") {
    port = Number(args[i + 1] || 9915);
  }
}
var atem = new Atem();
var connected = false;
var connecting = false;
atem.on("connected", () => {
  connected = true;
  console.log("ATEM connected");
});
atem.on("disconnected", () => {
  connected = false;
  console.warn("ATEM disconnected");
  setTimeout(connectAtem, 2e3);
});
atem.on("error", (err) => {
  console.error("ATEM error:", err);
});
async function connectAtem() {
  if (connected || connecting) return;
  connecting = true;
  try {
    await atem.connect(ip);
    connected = true;
  } catch (e) {
    console.error("Connect failed:", e);
  } finally {
    connecting = false;
  }
}
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
async function waitRoutingReady(timeoutMs = 1500) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const outputs = atem.state?.fairlight?.audioRouting?.outputs || {};
    if (Object.keys(outputs).length) return true;
    await sleep(100);
  }
  return true;
}
async function waitApplied(outputId, sourceId, timeoutMs = 800) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const routing = atem.state?.fairlight?.audioRouting?.outputs?.[outputId];
    if (routing && routing.sourceId === sourceId) return true;
    await sleep(80);
  }
  return false;
}
async function handleMessage(msg2) {
  if (msg2.cmd === "status") {
    const outputs = atem.state?.fairlight?.audioRouting?.outputs || {};
    const sources = atem.state?.fairlight?.audioRouting?.sources || {};
    return {
      ok: true,
      connected,
      outputs: Object.keys(outputs).length,
      sources: Object.keys(sources).length
    };
  }
  if (msg2.cmd === "set") {
    const outputId = Number(msg2.outputId);
    const sourceId = Number(msg2.sourceId);
    if (!Number.isFinite(outputId) || !Number.isFinite(sourceId)) {
      return { ok: false, error: "invalid outputId/sourceId" };
    }
    await connectAtem();
    if (!connected) return { ok: false, error: "not connected" };
    await waitRoutingReady();
    await atem.setFairlightAudioRoutingOutputProperties(outputId, { sourceId });
    const applied = await waitApplied(outputId, sourceId);
    return { ok: true, applied };
  }
  return { ok: false, error: "unknown command" };
}
var server = net.createServer((socket) => {
  let buffer = "";
  socket.setEncoding("utf8");
  socket.on("data", async (data) => {
    buffer += data;
    while (buffer.includes("\n")) {
      const idx = buffer.indexOf("\n");
      const line = buffer.slice(0, idx).trim();
      buffer = buffer.slice(idx + 1);
      if (!line) continue;
      let msg2;
      try {
        msg2 = JSON.parse(line);
      } catch (e) {
        socket.write(JSON.stringify({ ok: false, error: "bad json" }) + "\n");
        continue;
      }
      try {
        const res = await handleMessage(msg2);
        socket.write(JSON.stringify(res) + "\n");
      } catch (e) {
        socket.write(JSON.stringify({ ok: false, error: String(e) }) + "\n");
      }
    }
  });
});
server.listen(port, () => {
  console.log(`AROC server listening on ${port}`);
  connectAtem().catch(() => {
  });
});
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
