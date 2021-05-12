(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e||self).proxyCompare={})}(this,function(e){function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var r=Symbol(),n=Symbol(),o=Symbol(),i=Object.getPrototypeOf,u=new WeakMap,a=function(e){return e&&(u.has(e)?u.get(e):i(e)===Object.prototype||i(e)===Array.prototype)},f=function(e){return"object"==typeof e&&null!==e},c=function(e,t,u){if(!a(e))return e;var f=e[o]||e,s=function(e){return Object.isFrozen(e)||Object.values(Object.getOwnPropertyDescriptors(e)).some(function(e){return!e.writable})}(f),l=u&&u.get(f);return l&&l.f===s||((l=function(e,t){var i,u=!1,a=function(t,r){if(!u){var n=t.a.get(e);n||(n=new Set,t.a.set(e,n)),n.add(r)}},f=((i={}).f=t,i.get=function(t,r){return r===o?e:(a(this,r),c(t[r],this.a,this.c))},i.has=function(t,r){return r===n?(u=!0,this.a.delete(e),!0):(a(this,r),r in t)},i.ownKeys=function(e){return a(this,r),Reflect.ownKeys(e)},i);return t&&(f.set=f.deleteProperty=function(){return!1}),f}(f,s)).p=new Proxy(s?function(e){if(Array.isArray(e))return Array.from(e);var t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(function(e){e.configurable=!0}),Object.create(i(e),t)}(f):f,l),u&&u.set(f,l)),l.a=t,l.c=u,l.p},s=function(e,t){var r=Reflect.ownKeys(e),n=Reflect.ownKeys(t);return r.length!==n.length||r.some(function(e,t){return e!==n[t]})};e.MODE_ASSUME_UNCHANGED_IF_UNAFFECTED=1,e.MODE_ASSUME_UNCHANGED_IF_UNAFFECTED_IN_DEEP=4,e.MODE_IGNORE_REF_EQUALITY=2,e.MODE_IGNORE_REF_EQUALITY_IN_DEEP=8,e.affectedToPathList=function(e,t){var r=[];return function e(n,o){var i=t.get(n);i?i.forEach(function(t){e(n[t],o?[].concat(o,[t]):[t])}):o&&r.push(o)}(e),r},e.createDeepProxy=c,e.getUntrackedObject=function(e){return a(e)&&e[o]||null},e.isDeepChanged=function e(n,o,i,u,a){if(void 0===a&&(a=0),Object.is(n,o)&&(!f(n)||0==(2&a)))return!1;if(!f(n)||!f(o))return!0;var c=i.get(n);if(!c)return 0==(1&a);if(u&&0==(2&a)){var l,y=u.get(n);if(y&&y.n===o)return y.g;u.set(n,((l={}).n=o,l.g=!1,l))}for(var p,b,d=null,g=function(e,r){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e))){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}(c);!(p=g()).done;){var v=p.value,E=v===r?s(n,o):e(n[v],o[v],i,u,a>>>2<<2|a>>>2);if(!0!==E&&!1!==E||(d=E),d)break}return null===d&&(d=0==(1&a)),u&&0==(2&a)&&u.set(n,((b={}).n=o,b.g=d,b)),d},e.markToTrack=function(e,t){void 0===t&&(t=!0),u.set(e,t)},e.trackMemo=function(e){return!!a(e)&&n in e}});


},{}],2:[function(require,module,exports){
(function (process,global){(function (){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var hasInitialValue = function hasInitialValue(atom) {
  return 'init' in atom;
};

var IS_EQUAL_PROMISE = Symbol();
var INTERRUPT_PROMISE = Symbol();

var isInterruptablePromise = function isInterruptablePromise(promise) {
  return !!promise[INTERRUPT_PROMISE];
};

var createInterruptablePromise = function createInterruptablePromise(promise) {
  var interrupt;
  var interruptablePromise = new Promise(function (resolve, reject) {
    interrupt = resolve;
    promise.then(resolve, reject);
  });

  interruptablePromise[IS_EQUAL_PROMISE] = function (p) {
    return p === interruptablePromise || p === promise;
  };

  interruptablePromise[INTERRUPT_PROMISE] = interrupt;
  return interruptablePromise;
};

var createState = function createState(initialValues, newAtomReceiver) {
  var state = {
    n: newAtomReceiver,
    v: 0,
    a: new WeakMap(),
    m: new WeakMap(),
    p: new Set()
  };

  if (initialValues) {
    for (var _iterator = _createForOfIteratorHelperLoose(initialValues), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          atom = _step$value[0],
          value = _step$value[1];
      var atomState = {
        v: value,
        r: 0,
        d: new Map()
      };

      if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
        Object.freeze(atomState);
      }

      state.a.set(atom, atomState);
    }
  }

  return state;
};

var getAtomState = function getAtomState(state, atom) {
  return state.a.get(atom);
};

var wipAtomState = function wipAtomState(state, atom, dependencies) {
  var atomState = getAtomState(state, atom);

  var nextAtomState = _extends({
    r: 0
  }, atomState, {
    d: dependencies ? new Map(Array.from(dependencies).map(function (a) {
      var _getAtomState$r, _getAtomState;

      return [a, (_getAtomState$r = (_getAtomState = getAtomState(state, a)) == null ? void 0 : _getAtomState.r) != null ? _getAtomState$r : 0];
    })) : atomState ? atomState.d : new Map()
  });

  return [nextAtomState, atomState == null ? void 0 : atomState.d];
};

var setAtomValue = function setAtomValue(state, atom, value, dependencies, promise) {
  var _atomState$p;

  var _wipAtomState = wipAtomState(state, atom, dependencies),
      atomState = _wipAtomState[0],
      prevDependencies = _wipAtomState[1];

  if (promise && !((_atomState$p = atomState.p) != null && _atomState$p[IS_EQUAL_PROMISE](promise))) {
    return;
  }

  atomState.c == null ? void 0 : atomState.c();
  delete atomState.e;
  delete atomState.p;
  delete atomState.c;
  delete atomState.i;

  if (!('v' in atomState) || !Object.is(atomState.v, value)) {
    atomState.v = value;
    ++atomState.r;
  }

  commitAtomState(state, atom, atomState);
  mountDependencies(state, atom, atomState, prevDependencies);
};

var setAtomReadError = function setAtomReadError(state, atom, error, dependencies, promise) {
  var _atomState$p2;

  var _wipAtomState2 = wipAtomState(state, atom, dependencies),
      atomState = _wipAtomState2[0],
      prevDependencies = _wipAtomState2[1];

  if (promise && !((_atomState$p2 = atomState.p) != null && _atomState$p2[IS_EQUAL_PROMISE](promise))) {
    return;
  }

  atomState.c == null ? void 0 : atomState.c();
  delete atomState.p;
  delete atomState.c;
  delete atomState.i;
  atomState.e = error;
  commitAtomState(state, atom, atomState);
  mountDependencies(state, atom, atomState, prevDependencies);
};

var setAtomReadPromise = function setAtomReadPromise(state, atom, promise, dependencies) {
  var _atomState$p3;

  var _wipAtomState3 = wipAtomState(state, atom, dependencies),
      atomState = _wipAtomState3[0],
      prevDependencies = _wipAtomState3[1];

  if ((_atomState$p3 = atomState.p) != null && _atomState$p3[IS_EQUAL_PROMISE](promise)) {
    return;
  }

  atomState.c == null ? void 0 : atomState.c();

  if (isInterruptablePromise(promise)) {
    atomState.p = promise;
    delete atomState.c;
  } else {
    var interruptablePromise = createInterruptablePromise(promise);
    atomState.p = interruptablePromise;
    atomState.c = interruptablePromise[INTERRUPT_PROMISE];
  }

  commitAtomState(state, atom, atomState);
  mountDependencies(state, atom, atomState, prevDependencies);
};

var setAtomInvalidated = function setAtomInvalidated(state, atom) {
  var _wipAtomState4 = wipAtomState(state, atom),
      atomState = _wipAtomState4[0];

  atomState.c == null ? void 0 : atomState.c();
  delete atomState.p;
  delete atomState.c;
  atomState.i = atomState.r;
  commitAtomState(state, atom, atomState);
};

var setAtomWritePromise = function setAtomWritePromise(state, atom, promise) {
  var _wipAtomState5 = wipAtomState(state, atom),
      atomState = _wipAtomState5[0];

  if (promise) {
    atomState.w = promise;
  } else {
    delete atomState.w;
  }

  commitAtomState(state, atom, atomState);
};

var scheduleReadAtomState = function scheduleReadAtomState(state, atom, promise) {
  promise.finally(function () {
    readAtomState(state, atom, true);
  });
};

var readAtomState = function readAtomState(state, atom, force) {
  if (!force) {
    var atomState = getAtomState(state, atom);

    if (atomState) {
      atomState.d.forEach(function (_, a) {
        if (a !== atom) {
          var aState = getAtomState(state, a);

          if (aState && !aState.e && !aState.p && aState.r === aState.i) {
              readAtomState(state, a, true);
            }
        }
      });

      if (Array.from(atomState.d.entries()).every(function (_ref) {
        var a = _ref[0],
            r = _ref[1];
        var aState = getAtomState(state, a);
        return aState && !aState.e && !aState.p && aState.r !== aState.i && aState.r === r;
      })) {
        return atomState;
      }
    }
  }

  var error;
  var promise;
  var value;
  var dependencies = new Set();

  try {
    var promiseOrValue = atom.read(function (a) {
      dependencies.add(a);

      if (a !== atom) {
        var _aState = readAtomState(state, a);

        if (_aState.e) {
          throw _aState.e;
        }

        if (_aState.p) {
          throw _aState.p;
        }

        return _aState.v;
      }

      var aState = getAtomState(state, a);

      if (aState) {
        if (aState.p) {
          throw aState.p;
        }

        return aState.v;
      }

      if (hasInitialValue(a)) {
        return a.init;
      }

      throw new Error('no atom init');
    });

    if (promiseOrValue instanceof Promise) {
      promise = promiseOrValue.then(function (value) {
        setAtomValue(state, atom, value, dependencies, promise);
        flushPending(state);
      }).catch(function (e) {
        if (e instanceof Promise) {
          scheduleReadAtomState(state, atom, e);
          return e;
        }

        setAtomReadError(state, atom, e instanceof Error ? e : new Error(e), dependencies, promise);
        flushPending(state);
      });
    } else {
      value = promiseOrValue;
    }
  } catch (errorOrPromise) {
    if (errorOrPromise instanceof Promise) {
      promise = errorOrPromise;
    } else if (errorOrPromise instanceof Error) {
      error = errorOrPromise;
    } else {
      error = new Error(errorOrPromise);
    }
  }

  if (error) {
    setAtomReadError(state, atom, error, dependencies);
  } else if (promise) {
    setAtomReadPromise(state, atom, promise, dependencies);
  } else {
    setAtomValue(state, atom, value, dependencies);
  }

  return getAtomState(state, atom);
};

var readAtom = function readAtom(state, readingAtom) {
  var atomState = readAtomState(state, readingAtom);
  state.p.delete(readingAtom);
  flushPending(state);
  return atomState;
};

var addAtom = function addAtom(state, addingAtom) {
  var mounted = state.m.get(addingAtom);

  if (!mounted) {
    mounted = mountAtom(state, addingAtom);
  }

  flushPending(state);
  return mounted;
};

var canUnmountAtom = function canUnmountAtom(atom, mounted) {
  return !mounted.l.size && (!mounted.d.size || mounted.d.size === 1 && mounted.d.has(atom));
};

var delAtom = function delAtom(state, deletingAtom) {
  var mounted = state.m.get(deletingAtom);

  if (mounted && canUnmountAtom(deletingAtom, mounted)) {
    unmountAtom(state, deletingAtom);
  }

  flushPending(state);
};

var invalidateDependents = function invalidateDependents(state, atom) {
  var mounted = state.m.get(atom);
  mounted == null ? void 0 : mounted.d.forEach(function (dependent) {
    if (dependent === atom) {
      return;
    }

    setAtomInvalidated(state, dependent);
    invalidateDependents(state, dependent);
  });
};

var writeAtomState = function writeAtomState(state, atom, update, pendingPromises) {
  var isPendingPromisesExpired = !pendingPromises.length;
  var atomState = getAtomState(state, atom);

  if (atomState && atomState.w) {
      var promise = atomState.w.then(function () {
        writeAtomState(state, atom, update, pendingPromises);

        if (isPendingPromisesExpired) {
          flushPending(state);
        }
      });

      if (!isPendingPromisesExpired) {
        pendingPromises.push(promise);
      }

      return;
    }

  try {
    var promiseOrVoid = atom.write(function (a) {
      var aState = readAtomState(state, a);

      if (aState.e) {
        throw aState.e;
      }

      if (aState.p) {
        if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
          console.warn('Reading pending atom state in write operation. We throw a promise for now.', a);
        }

        throw aState.p;
      }

      if ('v' in aState) {
        return aState.v;
      }

      if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
        console.warn('[Bug] no value found while reading atom in write operation. This probably a bug.', a);
      }

      throw new Error('no value found');
    }, function (a, v) {
      var isPendingPromisesExpired = !pendingPromises.length;

      if (a === atom) {
        setAtomValue(state, a, v);
        invalidateDependents(state, a);
      } else {
        writeAtomState(state, a, v, pendingPromises);
      }

      if (isPendingPromisesExpired) {
        flushPending(state);
      }
    }, update);

    if (promiseOrVoid instanceof Promise) {
      var _promise = promiseOrVoid.finally(function () {
        setAtomWritePromise(state, atom);

        if (isPendingPromisesExpired) {
          flushPending(state);
        }
      });

      if (!isPendingPromisesExpired) {
        pendingPromises.push(_promise);
      }

      setAtomWritePromise(state, atom, _promise);
    }
  } catch (e) {
    if (pendingPromises.length === 1) {
      throw e;
    } else if (!isPendingPromisesExpired) {
      pendingPromises.push(new Promise(function (_resolve, reject) {
        reject(e);
      }));
    } else {
      console.error('Uncaught exception: Use promise to catch error', e);
    }
  }
};

var writeAtom = function writeAtom(state, writingAtom, update) {
  var pendingPromises = [Promise.resolve()];
  writeAtomState(state, writingAtom, update, pendingPromises);
  flushPending(state);

  if (pendingPromises.length <= 1) {
    pendingPromises.splice(0);
  } else {
    return new Promise(function (resolve, reject) {
      var loop = function loop() {
        if (pendingPromises.length <= 1) {
          pendingPromises.splice(0);
          resolve();
        } else {
          Promise.all(pendingPromises).then(function () {
            pendingPromises.splice(1);
            flushPending(state);
            loop();
          }).catch(reject);
        }
      };

      loop();
    });
  }
};

var isActuallyWritableAtom = function isActuallyWritableAtom(atom) {
  return !!atom.write;
};

var mountAtom = function mountAtom(state, atom, initialDependent) {
  var atomState = getAtomState(state, atom);

  if (atomState) {
    atomState.d.forEach(function (_, a) {
      if (a !== atom) {
        if (!state.m.has(a)) {
          mountAtom(state, a, atom);
        }
      }
    });
  } else if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
    console.warn('[Bug] could not find atom state to mount', atom);
  }

  var mounted = {
    d: new Set(initialDependent && [initialDependent]),
    l: new Set(),
    u: undefined
  };
  state.m.set(atom, mounted);

  if (isActuallyWritableAtom(atom) && atom.onMount) {
    var setAtom = function setAtom(update) {
      return writeAtom(state, atom, update);
    };

    mounted.u = atom.onMount(setAtom);
  }

  return mounted;
};

var unmountAtom = function unmountAtom(state, atom) {
  var _state$m$get;

  var onUnmount = (_state$m$get = state.m.get(atom)) == null ? void 0 : _state$m$get.u;

  if (onUnmount) {
    onUnmount();
  }

  state.m.delete(atom);
  var atomState = getAtomState(state, atom);

  if (atomState) {
    atomState.d.forEach(function (_, a) {
      if (a !== atom) {
        var mounted = state.m.get(a);

        if (mounted) {
          mounted.d.delete(atom);

          if (canUnmountAtom(a, mounted)) {
            unmountAtom(state, a);
          }
        }
      }
    });
  } else if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
    console.warn('[Bug] could not find atom state to unmount', atom);
  }
};

var mountDependencies = function mountDependencies(state, atom, atomState, prevDependencies) {
  if (prevDependencies !== atomState.d) {
    var dependencies = new Set(atomState.d.keys());

    if (prevDependencies) {
      prevDependencies.forEach(function (_, a) {
        var mounted = state.m.get(a);

        if (dependencies.has(a)) {
          dependencies.delete(a);
        } else if (mounted) {
          mounted.d.delete(atom);

          if (canUnmountAtom(a, mounted)) {
            unmountAtom(state, a);
          }
        } else if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
          console.warn('[Bug] a dependency is not mounted', a);
        }
      });
    }

    dependencies.forEach(function (a) {
      var mounted = state.m.get(a);

      if (mounted) {
        var dependents = mounted.d;
        dependents.add(atom);
      } else {
        mountAtom(state, a, atom);
      }
    });
  }
};

var commitAtomState = function commitAtomState(state, atom, atomState) {
  if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
    Object.freeze(atomState);
  }

  var isNewAtom = state.n && !state.a.has(atom);
  state.a.set(atom, atomState);

  if (isNewAtom) {
    state.n(atom);
  }

  ++state.v;
  state.p.add(atom);
};

var flushPending = function flushPending(state) {
  state.p.forEach(function (atom) {
    var mounted = state.m.get(atom);
    mounted == null ? void 0 : mounted.l.forEach(function (listener) {
      return listener();
    });
  });
  state.p.clear();
};

var subscribeAtom = function subscribeAtom(state, atom, callback) {
  var mounted = addAtom(state, atom);
  var listeners = mounted.l;
  listeners.add(callback);
  return function () {
    listeners.delete(callback);
    delAtom(state, atom);
  };
};

var TARGET = Symbol();
var GET_VERSION = Symbol();
var createMutableSource = function createMutableSource(target, getVersion) {
  var _ref;

  return _ref = {}, _ref[TARGET] = target, _ref[GET_VERSION] = getVersion, _ref;
};
var useMutableSource = function useMutableSource(source, getSnapshot, subscribe) {
  var lastVersion = react.useRef(0);
  var currentVersion = source[GET_VERSION](source[TARGET]);

  var _useState = react.useState(function () {
    return [source, getSnapshot, subscribe, currentVersion, getSnapshot(source[TARGET])];
  }),
      state = _useState[0],
      setState = _useState[1];

  var currentSnapshot = state[4];

  if (state[0] !== source || state[1] !== getSnapshot || state[2] !== subscribe) {
    currentSnapshot = getSnapshot(source[TARGET]);
    setState([source, getSnapshot, subscribe, currentVersion, currentSnapshot]);
  } else if (currentVersion !== state[3] && currentVersion !== lastVersion.current) {
    currentSnapshot = getSnapshot(source[TARGET]);

    if (!Object.is(currentSnapshot, state[4])) {
      setState([source, getSnapshot, subscribe, currentVersion, currentSnapshot]);
    }
  }

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function checkForUpdates() {
      if (didUnsubscribe) {
        return;
      }

      try {
        var nextSnapshot = getSnapshot(source[TARGET]);
        var nextVersion = source[GET_VERSION](source[TARGET]);
        lastVersion.current = nextVersion;
        setState(function (prev) {
          if (prev[0] !== source || prev[1] !== getSnapshot || prev[2] !== subscribe) {
            return prev;
          }

          if (Object.is(prev[4], nextSnapshot)) {
            return prev;
          }

          return [prev[0], prev[1], prev[2], nextVersion, nextSnapshot];
        });
      } catch (e) {
        setState(function (prev) {
          return [].concat(prev);
        });
      }
    };

    var unsubscribe = subscribe(source[TARGET], checkForUpdates);
    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [source, getSnapshot, subscribe]);
  return currentSnapshot;
};

var createStoreForProduction = function createStoreForProduction(initialValues) {
  var state = createState(initialValues);
  var stateMutableSource = createMutableSource(state, function () {
    return state.v;
  });

  var updateAtom = function updateAtom(atom, update) {
    return writeAtom(state, atom, update);
  };

  return [stateMutableSource, updateAtom];
};

var createStoreForDevelopment = function createStoreForDevelopment(initialValues) {
  var atomsStore = {
    atoms: [],
    listeners: new Set()
  };
  var state = createState(initialValues, function (newAtom) {
    atomsStore.atoms = [].concat(atomsStore.atoms, [newAtom]);
    atomsStore.listeners.forEach(function (listener) {
      return listener();
    });
  });
  var stateMutableSource = createMutableSource(state, function () {
    return state.v;
  });

  var updateAtom = function updateAtom(atom, update) {
    return writeAtom(state, atom, update);
  };

  var atomsMutableSource = createMutableSource(atomsStore, function () {
    return atomsStore.atoms;
  });
  return [stateMutableSource, updateAtom, atomsMutableSource];
};

var createStore = typeof process === 'object' && process.env.NODE_ENV !== 'production' ? createStoreForDevelopment : createStoreForProduction;
var StoreContextMap = new Map();
var getStoreContext = function getStoreContext(scope) {
  if (!StoreContextMap.has(scope)) {
    StoreContextMap.set(scope, react.createContext(createStore()));
  }

  return StoreContextMap.get(scope);
};

var Provider = function Provider(_ref) {
  var initialValues = _ref.initialValues,
      scope = _ref.scope,
      children = _ref.children;
  var storeRef = react.useRef(null);

  if (storeRef.current === null) {
    storeRef.current = createStore(initialValues);
  }

  if (typeof process === 'object' && process.env.NODE_ENV !== 'production' && isDevStore(storeRef.current)) {
    useDebugState(storeRef.current);
  }

  var StoreContext = getStoreContext(scope);
  return react.createElement(StoreContext.Provider, {
    value: storeRef.current
  }, children);
};

var atomToPrintable = function atomToPrintable(atom) {
  return atom.debugLabel || atom.toString();
};

var stateToPrintable = function stateToPrintable(_ref2) {
  var state = _ref2[0],
      atoms = _ref2[1];
  return Object.fromEntries(atoms.flatMap(function (atom) {
    var mounted = state.m.get(atom);

    if (!mounted) {
      return [];
    }

    var dependents = mounted.d;
    var atomState = state.a.get(atom) || {};
    return [[atomToPrintable(atom), {
      value: atomState.e || atomState.p || atomState.w || atomState.v,
      dependents: Array.from(dependents).map(atomToPrintable)
    }]];
  }));
};

var isDevStore = function isDevStore(store) {
  return store.length > 2;
};

var getDevState = function getDevState(state) {
  return _extends({}, state);
};
var getDevAtoms = function getDevAtoms(_ref3) {
  var atoms = _ref3.atoms;
  return atoms;
};
var subscribeDevAtoms = function subscribeDevAtoms(_ref4, callback) {
  var listeners = _ref4.listeners;
  listeners.add(callback);
  return function () {
    return listeners.delete(callback);
  };
};

var useDebugState = function useDebugState(store) {
  var stateMutableSource = store[0],
      atomsMutableSource = store[2];
  var atoms = useMutableSource(atomsMutableSource, getDevAtoms, subscribeDevAtoms);
  var subscribe = react.useCallback(function (state, callback) {
    var unsubs = atoms.map(function (atom) {
      return subscribeAtom(state, atom, callback);
    });
    return function () {
      unsubs.forEach(function (unsub) {
        return unsub();
      });
    };
  }, [atoms]);
  var state = useMutableSource(stateMutableSource, getDevState, subscribe);
  react.useDebugValue([state, atoms], stateToPrintable);
};

var keyCount = 0;
function atom(read, write) {
  var key = "atom" + ++keyCount;
  var config = {
    toString: function toString() {
      return key;
    }
  };

  if (typeof read === 'function') {
    config.read = read;
  } else {
    config.init = read;

    config.read = function (get) {
      return get(config);
    };

    config.write = function (get, set, update) {
      set(config, typeof update === 'function' ? update(get(config)) : update);
    };
  }

  if (write) {
    config.write = write;
  }

  return config;
}

var isWritable = function isWritable(atom) {
  return !!atom.write;
};

function useAtom(atom) {
  var getAtomValue = react.useCallback(function (state) {
    var atomState = readAtom(state, atom);

    if (atomState.e) {
      throw atomState.e;
    }

    if (atomState.p) {
      throw atomState.p;
    }

    if (atomState.w) {
      throw atomState.w;
    }

    if ('v' in atomState) {
      return atomState.v;
    }

    throw new Error('no atom value');
  }, [atom]);
  var subscribe = react.useCallback(function (state, callback) {
    return subscribeAtom(state, atom, callback);
  }, [atom]);
  var StoreContext = getStoreContext(atom.scope);

  var _useContext = react.useContext(StoreContext),
      mutableSource = _useContext[0],
      updateAtom = _useContext[1];

  var value = useMutableSource(mutableSource, getAtomValue, subscribe);
  var setAtom = react.useCallback(function (update) {
    if (isWritable(atom)) {
      return updateAtom(atom, update);
    } else {
      throw new Error('not writable atom');
    }
  }, [updateAtom, atom]);
  react.useDebugValue(value);
  return [value, setAtom];
}

exports.Provider = Provider;
exports.SECRET_INTERNAL_getStoreContext = getStoreContext;
exports.atom = atom;
exports.useAtom = useAtom;

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":9}],3:[function(require,module,exports){
(function (global){(function (){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var jotai = require('./index');

function useUpdateAtom(anAtom) {
  var StoreContext = jotai.SECRET_INTERNAL_getStoreContext(anAtom.scope);

  var _useContext = react.useContext(StoreContext),
      updateAtom = _useContext[1];

  var setAtom = react.useCallback(function (update) {
    return updateAtom(anAtom, update);
  }, [updateAtom, anAtom]);
  return setAtom;
}

function useAtomValue(anAtom) {
  return jotai.useAtom(anAtom)[0];
}

var RESET = Symbol();
function atomWithReset(initialValue) {
  var anAtom = jotai.atom(initialValue, function (get, set, update) {
    if (update === RESET) {
      set(anAtom, initialValue);
    } else {
      set(anAtom, typeof update === 'function' ? update(get(anAtom)) : update);
    }
  });
  return anAtom;
}

function useResetAtom(anAtom) {
  var StoreContext = jotai.SECRET_INTERNAL_getStoreContext(anAtom.scope);

  var _useContext = react.useContext(StoreContext),
      updateAtom = _useContext[1];

  var setAtom = react.useCallback(function () {
    return updateAtom(anAtom, RESET);
  }, [updateAtom, anAtom]);
  return setAtom;
}

function useReducerAtom(anAtom, reducer) {
  var _useAtom = jotai.useAtom(anAtom),
      state = _useAtom[0],
      setState = _useAtom[1];

  var dispatch = react.useCallback(function (action) {
    setState(function (prev) {
      return reducer(prev, action);
    });
  }, [setState, reducer]);
  return [state, dispatch];
}

function atomWithReducer(initialValue, reducer) {
  var anAtom = jotai.atom(initialValue, function (get, set, action) {
    return set(anAtom, reducer(get(anAtom), action));
  });
  return anAtom;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function atomFamily(initializeAtom, areEqual) {
  var shouldRemove = null;
  var atoms = new Map();

  var createAtom = function createAtom(param) {
    var item;

    if (areEqual === undefined) {
      item = atoms.get(param);
    } else {
      for (var _iterator = _createForOfIteratorHelperLoose(atoms), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
            key = _step$value[0],
            value = _step$value[1];

        if (areEqual(key, param)) {
          item = value;
          break;
        }
      }
    }

    if (item !== undefined) {
      if (shouldRemove != null && shouldRemove(item[1], param)) {
        atoms.delete(param);
      } else {
        return item[0];
      }
    }

    var newAtom = initializeAtom(param);
    atoms.set(param, [newAtom, Date.now()]);
    return newAtom;
  };

  createAtom.remove = function (param) {
    if (areEqual === undefined) {
      atoms.delete(param);
    } else {
      for (var _iterator2 = _createForOfIteratorHelperLoose(atoms), _step2; !(_step2 = _iterator2()).done;) {
        var _step2$value = _step2.value,
            key = _step2$value[0];

        if (areEqual(key, param)) {
          atoms.delete(key);
          break;
        }
      }
    }
  };

  createAtom.setShouldRemove = function (fn) {
    shouldRemove = fn;
    if (!shouldRemove) return;

    for (var _iterator3 = _createForOfIteratorHelperLoose(atoms), _step3; !(_step3 = _iterator3()).done;) {
      var _step3$value = _step3.value,
          key = _step3$value[0],
          value = _step3$value[1];

      if (shouldRemove(value[1], key)) {
        atoms.delete(key);
      }
    }
  };

  return createAtom;
}

var getWeakCacheItem = function getWeakCacheItem(cache, deps) {
  var dep = deps[0],
      rest = deps.slice(1);
  var entry = cache.get(dep);

  if (!entry) {
    return;
  }

  if (!rest.length) {
    return entry[1];
  }

  return getWeakCacheItem(entry[0], rest);
};
var setWeakCacheItem = function setWeakCacheItem(cache, deps, item) {
  var dep = deps[0],
      rest = deps.slice(1);
  var entry = cache.get(dep);

  if (!entry) {
    entry = [new WeakMap()];
    cache.set(dep, entry);
  }

  if (!rest.length) {
    entry[1] = item;
    return;
  }

  setWeakCacheItem(entry[0], rest, item);
};

var selectAtomCache = new WeakMap();
function selectAtom(anAtom, selector, equalityFn) {
  if (equalityFn === void 0) {
    equalityFn = Object.is;
  }

  var deps = [anAtom, selector, equalityFn];
  var cachedAtom = getWeakCacheItem(selectAtomCache, deps);

  if (cachedAtom) {
    return cachedAtom;
  }

  var initialized = false;
  var prevSlice;
  var derivedAtom = jotai.atom(function (get) {
    var slice = selector(get(anAtom));

    if (initialized && equalityFn(prevSlice, slice)) {
      return prevSlice;
    }

    initialized = true;
    prevSlice = slice;
    return slice;
  });
  derivedAtom.scope = anAtom.scope;
  setWeakCacheItem(selectAtomCache, deps, derivedAtom);
  return derivedAtom;
}

function useAtomCallback(callback, scope) {
  var anAtom = react.useMemo(function () {
    return jotai.atom(null, function (get, set, _ref) {
      var arg = _ref[0],
          resolve = _ref[1],
          reject = _ref[2];

      try {
        resolve(callback(get, set, arg));
      } catch (e) {
        reject(e);
      }
    });
  }, [callback]);
  anAtom.scope = scope;

  var _useAtom = jotai.useAtom(anAtom),
      invoke = _useAtom[1];

  return react.useCallback(function (arg) {
    return new Promise(function (resolve, reject) {
      invoke([arg, resolve, reject]);
    });
  }, [invoke]);
}

var freezeAtomCache = new WeakMap();

var deepFreeze = function deepFreeze(obj) {
  if (typeof obj !== 'object' || obj === null) return;
  Object.freeze(obj);
  var propNames = Object.getOwnPropertyNames(obj);

  for (var _iterator = _createForOfIteratorHelperLoose(propNames), _step; !(_step = _iterator()).done;) {
    var name = _step.value;
    var value = obj[name];
    deepFreeze(value);
  }

  return obj;
};

function freezeAtom(anAtom) {
  var deps = [anAtom];
  var cachedAtom = getWeakCacheItem(freezeAtomCache, deps);

  if (cachedAtom) {
    return cachedAtom;
  }

  var frozenAtom = jotai.atom(function (get) {
    return deepFreeze(get(anAtom));
  }, function (_get, set, arg) {
    return set(anAtom, arg);
  });
  frozenAtom.scope = anAtom.scope;
  setWeakCacheItem(freezeAtomCache, deps, frozenAtom);
  return frozenAtom;
}
function freezeAtomCreator(createAtom) {
  return function () {
    var anAtom = createAtom.apply(void 0, arguments);
    var origRead = anAtom.read;

    anAtom.read = function (get) {
      return deepFreeze(origRead(get));
    };

    return anAtom;
  };
}

var splitAtomCache = new WeakMap();

var isWritable = function isWritable(atom) {
  return !!atom.write;
};

var isFunction = function isFunction(x) {
  return typeof x === 'function';
};

function splitAtom(arrAtom, keyExtractor) {
  var deps = keyExtractor ? [arrAtom, keyExtractor] : [arrAtom];
  var cachedAtom = getWeakCacheItem(splitAtomCache, deps);

  if (cachedAtom) {
    return cachedAtom;
  }

  var currentAtomList;
  var currentKeyList;

  var keyToAtom = function keyToAtom(key) {
    var _currentKeyList, _currentAtomList;

    var index = (_currentKeyList = currentKeyList) == null ? void 0 : _currentKeyList.indexOf(key);

    if (index === undefined || index === -1) {
      return undefined;
    }

    return (_currentAtomList = currentAtomList) == null ? void 0 : _currentAtomList[index];
  };

  var read = function read(get) {
    var nextAtomList = [];
    var nextKeyList = [];
    get(arrAtom).forEach(function (item, index) {
      var key = keyExtractor ? keyExtractor(item) : index;
      nextKeyList[index] = key;
      var cachedAtom = keyToAtom(key);

      if (cachedAtom) {
        nextAtomList[index] = cachedAtom;
        return;
      }

      var read = function read(get) {
        var _currentKeyList2;

        var index = (_currentKeyList2 = currentKeyList) == null ? void 0 : _currentKeyList2.indexOf(key);

        if (index === undefined || index === -1) {
          throw new Error('index not found');
        }

        return get(arrAtom)[index];
      };

      var write = function write(get, set, update) {
        var _currentKeyList3;

        var index = (_currentKeyList3 = currentKeyList) == null ? void 0 : _currentKeyList3.indexOf(key);

        if (index === undefined || index === -1) {
          throw new Error('index not found');
        }

        var prev = get(arrAtom);
        var nextItem = isFunction(update) ? update(prev[index]) : update;
        set(arrAtom, [].concat(prev.slice(0, index), [nextItem], prev.slice(index + 1)));
      };

      var itemAtom = isWritable(arrAtom) ? jotai.atom(read, write) : jotai.atom(read);
      itemAtom.scope = arrAtom.scope;
      nextAtomList[index] = itemAtom;
    });
    currentKeyList = nextKeyList;

    if (currentAtomList && currentAtomList.length === nextAtomList.length && currentAtomList.every(function (x, i) {
      return x === nextAtomList[i];
    })) {
      return currentAtomList;
    }

    return currentAtomList = nextAtomList;
  };

  var write = function write(get, set, atomToRemove) {
    var index = get(splittedAtom).indexOf(atomToRemove);

    if (index >= 0) {
      var prev = get(arrAtom);
      set(arrAtom, [].concat(prev.slice(0, index), prev.slice(index + 1)));
    }
  };

  var splittedAtom = isWritable(arrAtom) ? jotai.atom(read, write) : jotai.atom(read);
  splittedAtom.scope = arrAtom.scope;
  setWeakCacheItem(splitAtomCache, deps, splittedAtom);
  return splittedAtom;
}

function atomWithDefault(getDefault) {
  var EMPTY = Symbol();
  var overwrittenAtom = jotai.atom(EMPTY);
  var anAtom = jotai.atom(function (get) {
    var overwritten = get(overwrittenAtom);

    if (overwritten !== EMPTY) {
      return overwritten;
    }

    return getDefault(get);
  }, function (get, set, update) {
    return set(overwrittenAtom, typeof update === 'function' ? update(get(anAtom)) : update);
  });
  return anAtom;
}

var waitForAllCache = new WeakMap();
function waitForAll(atoms) {
  var cachedAtom = Array.isArray(atoms) && getWeakCacheItem(waitForAllCache, atoms);

  if (cachedAtom) {
    return cachedAtom;
  }

  var unwrappedAtoms = unwrapAtoms(atoms);
  var derivedAtom = jotai.atom(function (get) {
    var promises = [];
    var values = unwrappedAtoms.map(function (anAtom, index) {
      try {
        return get(anAtom);
      } catch (e) {
        if (e instanceof Promise) {
          promises[index] = e;
        } else {
          throw e;
        }
      }
    });

    if (promises.length) {
      throw Promise.all(promises);
    }

    return wrapResults(atoms, values);
  });
  var waitForAllScope = unwrappedAtoms[0].scope;
  derivedAtom.scope = waitForAllScope;
  validateAtomScopes(waitForAllScope, unwrappedAtoms);

  if (Array.isArray(atoms)) {
    setWeakCacheItem(waitForAllCache, atoms, derivedAtom);
  }

  return derivedAtom;
}

var unwrapAtoms = function unwrapAtoms(atoms) {
  return Array.isArray(atoms) ? atoms : Object.getOwnPropertyNames(atoms).map(function (key) {
    return atoms[key];
  });
};

var wrapResults = function wrapResults(atoms, results) {
  return Array.isArray(atoms) ? results : Object.getOwnPropertyNames(atoms).reduce(function (out, key, idx) {
    var _extends2;

    return _extends({}, out, (_extends2 = {}, _extends2[key] = results[idx], _extends2));
  }, {});
};

function validateAtomScopes(scope, atoms) {
  if (scope && !atoms.every(function (a) {
    return a.scope === scope;
  })) {
    console.warn('Different scopes were found for atoms supplied to waitForAll. This is unsupported and will result in unexpected behavior.');
  }
}

function atomWithHash(key, initialValue, serialize, deserialize) {
  if (serialize === void 0) {
    serialize = JSON.stringify;
  }

  if (deserialize === void 0) {
    deserialize = JSON.parse;
  }

  var anAtom = jotai.atom(initialValue, function (get, set, update) {
    var newValue = typeof update === 'function' ? update(get(anAtom)) : update;
    set(anAtom, newValue);
    var searchParams = new URLSearchParams(location.hash.slice(1));
    searchParams.set(key, serialize(newValue));
    location.hash = searchParams.toString();
  });

  anAtom.onMount = function (setAtom) {
    var callback = function callback() {
      var searchParams = new URLSearchParams(location.hash.slice(1));
      var str = searchParams.get(key);

      if (str !== null) {
        setAtom(deserialize(str));
      }
    };

    window.addEventListener('hashchange', callback);
    callback();
    return function () {
      window.removeEventListener('hashchange', callback);
    };
  };

  return anAtom;
}

var defaultStorage = {
  getItem: function getItem(key) {
    var storedValue = localStorage.getItem(key);

    if (storedValue === null) {
      throw new Error('no value stored');
    }

    return JSON.parse(storedValue);
  },
  setItem: function setItem(key, newValue) {
    localStorage.setItem(key, JSON.stringify(newValue));
  }
};
function atomWithStorage(key, initialValue, storage) {
  if (storage === void 0) {
    storage = defaultStorage;
  }

  var getInitialValue = function getInitialValue() {
    try {
      return storage.getItem(key);
    } catch (_unused) {
      return initialValue;
    }
  };

  var baseAtom = jotai.atom(initialValue);

  baseAtom.onMount = function (setAtom) {
    var value = getInitialValue();

    if (value instanceof Promise) {
      value.then(setAtom);
    } else {
      setAtom(value);
    }
  };

  var anAtom = jotai.atom(function (get) {
    return get(baseAtom);
  }, function (get, set, update) {
    var newValue = typeof update === 'function' ? update(get(baseAtom)) : update;
    set(baseAtom, newValue);
    storage.setItem(key, newValue);
  });
  return anAtom;
}

exports.RESET = RESET;
exports.atomFamily = atomFamily;
exports.atomWithDefault = atomWithDefault;
exports.atomWithHash = atomWithHash;
exports.atomWithReducer = atomWithReducer;
exports.atomWithReset = atomWithReset;
exports.atomWithStorage = atomWithStorage;
exports.freezeAtom = freezeAtom;
exports.freezeAtomCreator = freezeAtomCreator;
exports.selectAtom = selectAtom;
exports.splitAtom = splitAtom;
exports.useAtomCallback = useAtomCallback;
exports.useAtomValue = useAtomValue;
exports.useReducerAtom = useReducerAtom;
exports.useResetAtom = useResetAtom;
exports.useUpdateAtom = useUpdateAtom;
exports.waitForAll = waitForAll;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./index":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vanilla = require('../valtio/vanilla');
var jotai = require('./index');

var isObject = function isObject(x) {
  return typeof x === 'object' && x !== null;
};

var applyChanges = function applyChanges(proxyObject, prev, next) {
  Object.keys(prev).forEach(function (key) {
    if (!(key in next)) {
      delete proxyObject[key];
    } else if (Object.is(prev[key], next[key])) ; else if (isObject(proxyObject[key]) && isObject(prev[key]) && isObject(next[key])) {
      applyChanges(proxyObject[key], prev[key], next[key]);
    } else {
      proxyObject[key] = next[key];
    }
  });
  Object.keys(next).forEach(function (key) {
    if (!(key in prev)) {
      proxyObject[key] = next[key];
    }
  });
};

function atomWithProxy(proxyObject) {
  var baseAtom = jotai.atom(vanilla.snapshot(proxyObject));

  baseAtom.onMount = function (setValue) {
    var callback = function callback() {
      setValue(vanilla.snapshot(proxyObject));
    };

    var unsub = vanilla.subscribe(proxyObject, callback);
    callback();
    return unsub;
  };

  var derivedAtom = jotai.atom(function (get) {
    return get(baseAtom);
  }, function (get, _set, update) {
    var newValue = typeof update === 'function' ? update(get(baseAtom)) : update;
    applyChanges(proxyObject, vanilla.snapshot(proxyObject), newValue);
  });
  return derivedAtom;
}

exports.atomWithProxy = atomWithProxy;

},{"../valtio/vanilla":7,"./index":2}],5:[function(require,module,exports){
(function (process,global){(function (){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vanilla = require('./vanilla');
var react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var proxyCompare = require('proxy-compare');

var TARGET = Symbol();
var GET_VERSION = Symbol();
var createMutableSource = function createMutableSource(target, getVersion) {
  var _ref;

  return _ref = {}, _ref[TARGET] = target, _ref[GET_VERSION] = getVersion, _ref;
};
var useMutableSource = function useMutableSource(source, getSnapshot, subscribe) {
  var lastVersion = react.useRef(0);
  var currentVersion = source[GET_VERSION](source[TARGET]);

  var _useState = react.useState(function () {
    return [source, getSnapshot, subscribe, currentVersion, getSnapshot(source[TARGET])];
  }),
      state = _useState[0],
      setState = _useState[1];

  var currentSnapshot = state[4];

  if (state[0] !== source || state[1] !== getSnapshot || state[2] !== subscribe) {
    currentSnapshot = getSnapshot(source[TARGET]);
    setState([source, getSnapshot, subscribe, currentVersion, currentSnapshot]);
  } else if (currentVersion !== state[3] && currentVersion !== lastVersion.current) {
    currentSnapshot = getSnapshot(source[TARGET]);

    if (!Object.is(currentSnapshot, state[4])) {
      setState([source, getSnapshot, subscribe, currentVersion, currentSnapshot]);
    }
  }

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function checkForUpdates() {
      if (didUnsubscribe) {
        return;
      }

      try {
        var nextSnapshot = getSnapshot(source[TARGET]);
        var nextVersion = source[GET_VERSION](source[TARGET]);
        lastVersion.current = nextVersion;
        setState(function (prev) {
          if (prev[0] !== source || prev[1] !== getSnapshot || prev[2] !== subscribe) {
            return prev;
          }

          if (Object.is(prev[4], nextSnapshot)) {
            return prev;
          }

          return [prev[0], prev[1], prev[2], nextVersion, nextSnapshot];
        });
      } catch (e) {
        setState(function (prev) {
          return [].concat(prev);
        });
      }
    };

    var unsubscribe = subscribe(source[TARGET], checkForUpdates);
    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [source, getSnapshot, subscribe]);
  return currentSnapshot;
};

var isSSR = typeof window === 'undefined' || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
var useIsomorphicLayoutEffect = isSSR ? react.useEffect : react.useLayoutEffect;

var useAffectedDebugValue = function useAffectedDebugValue(state, affected) {
  var pathList = react.useRef();
  react.useEffect(function () {
    pathList.current = proxyCompare.affectedToPathList(state, affected);
  });
  react.useDebugValue(pathList.current);
};

var mutableSourceCache = new WeakMap();

var getMutableSource = function getMutableSource(proxyObject) {
  if (!mutableSourceCache.has(proxyObject)) {
    mutableSourceCache.set(proxyObject, createMutableSource(proxyObject, vanilla.getVersion));
  }

  return mutableSourceCache.get(proxyObject);
};

var useSnapshot = function useSnapshot(proxyObject, options) {
  var _useReducer = react.useReducer(function (c) {
    return c + 1;
  }, 0),
      forceUpdate = _useReducer[1];

  var affected = new WeakMap();
  var lastAffected = react.useRef();
  var prevSnapshot = react.useRef();
  var lastSnapshot = react.useRef();
  useIsomorphicLayoutEffect(function () {
    lastSnapshot.current = prevSnapshot.current = vanilla.snapshot(proxyObject);
  }, [proxyObject]);
  useIsomorphicLayoutEffect(function () {
    lastAffected.current = affected;

    if (prevSnapshot.current !== lastSnapshot.current && proxyCompare.isDeepChanged(prevSnapshot.current, lastSnapshot.current, affected, new WeakMap())) {
      prevSnapshot.current = lastSnapshot.current;
      forceUpdate();
    }
  });
  var notifyInSync = options == null ? void 0 : options.sync;
  var sub = react.useCallback(function (proxyObject, cb) {
    return vanilla.subscribe(proxyObject, function () {
      var nextSnapshot = vanilla.snapshot(proxyObject);
      lastSnapshot.current = nextSnapshot;

      try {
        if (lastAffected.current && !proxyCompare.isDeepChanged(prevSnapshot.current, nextSnapshot, lastAffected.current, new WeakMap())) {
          return;
        }
      } catch (e) {}

      prevSnapshot.current = nextSnapshot;
      cb();
    }, notifyInSync);
  }, [notifyInSync]);
  var currSnapshot = useMutableSource(getMutableSource(proxyObject), vanilla.snapshot, sub);

  if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
    useAffectedDebugValue(currSnapshot, affected);
  }

  var proxyCache = react.useMemo(function () {
    return new WeakMap();
  }, []);
  return proxyCompare.createDeepProxy(currSnapshot, affected, proxyCache);
};

exports.useSnapshot = useSnapshot;
Object.keys(vanilla).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return vanilla[k];
    }
  });
});

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./vanilla":7,"_process":9,"proxy-compare":1}],6:[function(require,module,exports){
(function (process){(function (){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var proxyCompare = require('proxy-compare');
var vanilla = require('./vanilla');

var subscribeKey = function subscribeKey(proxyObject, key, callback, notifyInSync) {
  var prevValue = proxyObject[key];
  return vanilla.subscribe(proxyObject, function () {
    var nextValue = proxyObject[key];

    if (!Object.is(prevValue, nextValue)) {
      callback(prevValue = nextValue);
    }
  }, notifyInSync);
};
var devtools = function devtools(proxyObject, name) {
  var extension;

  try {
    extension = window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch (_unused) {}

  if (!extension) {
    if (typeof process === 'object' && process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      console.warn('[Warning] Please install/enable Redux devtools extension');
    }

    return;
  }

  var isTimeTraveling = false;
  var devtools = extension.connect({
    name: name
  });
  var unsub1 = vanilla.subscribe(proxyObject, function () {
    if (isTimeTraveling) {
      isTimeTraveling = false;
    } else {
      devtools.send("Update - " + new Date().toLocaleString(), vanilla.snapshot(proxyObject));
    }
  });
  var unsub2 = devtools.subscribe(function (message) {
    var _message$payload3, _message$payload4;

    if (message.type === 'DISPATCH' && message.state) {
      var _message$payload, _message$payload2;

      if (((_message$payload = message.payload) == null ? void 0 : _message$payload.type) === 'JUMP_TO_ACTION' || ((_message$payload2 = message.payload) == null ? void 0 : _message$payload2.type) === 'JUMP_TO_STATE') {
        isTimeTraveling = true;
      }

      var nextValue = JSON.parse(message.state);
      Object.keys(nextValue).forEach(function (key) {
        proxyObject[key] = nextValue[key];
      });
    } else if (message.type === 'DISPATCH' && ((_message$payload3 = message.payload) == null ? void 0 : _message$payload3.type) === 'COMMIT') {
      devtools.init(vanilla.snapshot(proxyObject));
    } else if (message.type === 'DISPATCH' && ((_message$payload4 = message.payload) == null ? void 0 : _message$payload4.type) === 'IMPORT_STATE') {
      var _message$payload$next, _message$payload$next2;

      var actions = (_message$payload$next = message.payload.nextLiftedState) == null ? void 0 : _message$payload$next.actionsById;
      var computedStates = ((_message$payload$next2 = message.payload.nextLiftedState) == null ? void 0 : _message$payload$next2.computedStates) || [];
      isTimeTraveling = true;
      computedStates.forEach(function (_ref, index) {
        var state = _ref.state;
        var action = actions[index] || "Update - " + new Date().toLocaleString();
        Object.keys(state).forEach(function (key) {
          proxyObject[key] = state[key];
        });

        if (index === 0) {
          devtools.init(vanilla.snapshot(proxyObject));
        } else {
          devtools.send(action, vanilla.snapshot(proxyObject));
        }
      });
    }
  });
  devtools.init(vanilla.snapshot(proxyObject));
  return function () {
    unsub1();
    unsub2();
  };
};
var addComputed = function addComputed(proxyObject, computedFns, targetObject) {
  if (targetObject === void 0) {
    targetObject = proxyObject;
  }
  Object.keys(computedFns).forEach(function (key) {
    if (Object.getOwnPropertyDescriptor(targetObject, key)) {
      throw new Error('object property already defined');
    }

    var get = computedFns[key];
    var prevSnapshot;
    var affected = new WeakMap();
    var pending = false;

    var callback = function callback() {
      var nextSnapshot = vanilla.snapshot(proxyObject);

      if (!pending && (!prevSnapshot || proxyCompare.isDeepChanged(prevSnapshot, nextSnapshot, affected))) {
        affected = new WeakMap();
        var value = get(proxyCompare.createDeepProxy(nextSnapshot, affected));
        prevSnapshot = nextSnapshot;

        if (value instanceof Promise) {
          pending = true;
          value.then(function (v) {
            targetObject[key] = v;
          }).catch(function (e) {
            targetObject[key] = new Proxy({}, {
              get: function get() {
                throw e;
              }
            });
          }).finally(function () {
            pending = false;
          });
        }

        targetObject[key] = value;
      }
    };

    vanilla.subscribe(proxyObject, callback);
    callback();
  });
};
var proxyWithComputed = function proxyWithComputed(initialObject, computedFns) {
  Object.keys(computedFns).forEach(function (key) {
    if (Object.getOwnPropertyDescriptor(initialObject, key)) {
      throw new Error('object property already defined');
    }

    var computedFn = computedFns[key];

    var _ref2 = typeof computedFn === 'function' ? {
      get: computedFn
    } : computedFn,
        get = _ref2.get,
        set = _ref2.set;

    var computedValue;
    var prevSnapshot;
    var affected = new WeakMap();
    var desc = {};

    desc.get = function () {
      var nextSnapshot = vanilla.snapshot(proxyObject);

      if (!prevSnapshot || proxyCompare.isDeepChanged(prevSnapshot, nextSnapshot, affected)) {
        affected = new WeakMap();
        computedValue = get(proxyCompare.createDeepProxy(nextSnapshot, affected));
        prevSnapshot = nextSnapshot;
      }

      return computedValue;
    };

    if (set) {
      desc.set = function (newValue) {
        return set(proxyObject, newValue);
      };
    }

    Object.defineProperty(initialObject, key, desc);
  });
  var proxyObject = vanilla.proxy(initialObject);
  return proxyObject;
};

exports.addComputed = addComputed;
exports.devtools = devtools;
exports.proxyWithComputed = proxyWithComputed;
exports.subscribeKey = subscribeKey;

}).call(this)}).call(this,require('_process'))

},{"./vanilla":7,"_process":9,"proxy-compare":1}],7:[function(require,module,exports){
(function (process){(function (){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var proxyCompare = require('proxy-compare');

var VERSION = Symbol();
var LISTENERS = Symbol();
var SNAPSHOT = Symbol();
var PROMISE_RESULT = Symbol();
var PROMISE_ERROR = Symbol();
var refSet = new WeakSet();
var ref = function ref(o) {
  refSet.add(o);
  return o;
};

var isSupportedObject = function isSupportedObject(x) {
  return typeof x === 'object' && x !== null && (Array.isArray(x) || !x[Symbol.iterator]) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer);
};

var proxyCache = new WeakMap();
var globalVersion = 1;
var snapshotCache = new WeakMap();
var proxy = function proxy(initialObject) {
  if (initialObject === void 0) {
    initialObject = {};
  }

  if (!isSupportedObject(initialObject)) {
    throw new Error('unsupported object type');
  }

  if (proxyCache.has(initialObject)) {
    return proxyCache.get(initialObject);
  }

  var version = globalVersion;
  var listeners = new Set();

  var notifyUpdate = function notifyUpdate(nextVersion) {
    if (!nextVersion) {
      nextVersion = ++globalVersion;
    }

    if (version !== nextVersion) {
      version = nextVersion;
      listeners.forEach(function (listener) {
        return listener(nextVersion);
      });
    }
  };

  var createSnapshot = function createSnapshot(target, receiver) {
    var cache = snapshotCache.get(receiver);

    if (cache && cache.version === version) {
      return cache.snapshot;
    }

    var snapshot = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
    proxyCompare.markToTrack(snapshot, true);
    snapshotCache.set(receiver, {
      version: version,
      snapshot: snapshot
    });
    Reflect.ownKeys(target).forEach(function (key) {
      var value = target[key];

      if (refSet.has(value)) {
        proxyCompare.markToTrack(value, false);
        snapshot[key] = value;
      } else if (!isSupportedObject(value)) {
        snapshot[key] = value;
      } else if (value instanceof Promise) {
        if (PROMISE_RESULT in value) {
          snapshot[key] = value[PROMISE_RESULT];
        } else {
          var errorOrPromise = value[PROMISE_ERROR] || value;
          Object.defineProperty(snapshot, key, {
            get: function get() {
              throw errorOrPromise;
            }
          });
        }
      } else if (value[VERSION]) {
        snapshot[key] = value[SNAPSHOT];
      } else {
        snapshot[key] = value;
      }
    });
    Object.freeze(snapshot);
    return snapshot;
  };

  var baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
  var proxyObject = new Proxy(baseObject, {
    get: function get(target, prop, receiver) {
      if (prop === VERSION) {
        return version;
      }

      if (prop === LISTENERS) {
        return listeners;
      }

      if (prop === SNAPSHOT) {
        return createSnapshot(target, receiver);
      }

      return target[prop];
    },
    deleteProperty: function deleteProperty(target, prop) {
      var prevValue = target[prop];
      var childListeners = prevValue && prevValue[LISTENERS];

      if (childListeners) {
        childListeners.delete(notifyUpdate);
      }

      var deleted = Reflect.deleteProperty(target, prop);

      if (deleted) {
        notifyUpdate();
      }

      return deleted;
    },
    set: function set(target, prop, value) {
      var _Object$getOwnPropert;

      var prevValue = target[prop];

      if (Object.is(prevValue, value)) {
        return true;
      }

      var childListeners = prevValue && prevValue[LISTENERS];

      if (childListeners) {
        childListeners.delete(notifyUpdate);
      }

      if (refSet.has(value) || !isSupportedObject(value) || (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(target, prop)) != null && _Object$getOwnPropert.set) {
        target[prop] = value;
      } else if (value instanceof Promise) {
        target[prop] = value.then(function (v) {
          target[prop][PROMISE_RESULT] = v;
          notifyUpdate();
          return v;
        }).catch(function (e) {
          target[prop][PROMISE_ERROR] = e;
          notifyUpdate();
        });
      } else {
        value = proxyCompare.getUntrackedObject(value) || value;

        if (value[LISTENERS]) {
          target[prop] = value;
        } else {
          target[prop] = proxy(value);
        }

        target[prop][LISTENERS].add(notifyUpdate);
      }

      notifyUpdate();
      return true;
    }
  });
  proxyCache.set(initialObject, proxyObject);
  Reflect.ownKeys(initialObject).forEach(function (key) {
    var desc = Object.getOwnPropertyDescriptor(initialObject, key);

    if (desc.get || desc.set) {
      Object.defineProperty(baseObject, key, desc);
    } else {
      proxyObject[key] = initialObject[key];
    }
  });
  return proxyObject;
};
var getVersion = function getVersion(proxyObject) {
  if (typeof process === 'object' && process.env.NODE_ENV !== 'production' && (!proxyObject || !proxyObject[VERSION])) {
    throw new Error('Please use proxy object');
  }

  return proxyObject[VERSION];
};
var subscribe = function subscribe(proxyObject, callback, notifyInSync) {
  if (typeof process === 'object' && process.env.NODE_ENV !== 'production' && (!proxyObject || !proxyObject[LISTENERS])) {
    throw new Error('Please use proxy object');
  }

  var pendingVersion = 0;

  var listener = function listener(nextVersion) {
    if (notifyInSync) {
      callback();
      return;
    }

    pendingVersion = nextVersion;
    Promise.resolve().then(function () {
      if (nextVersion === pendingVersion) {
        callback();
      }
    });
  };

  proxyObject[LISTENERS].add(listener);
  return function () {
    proxyObject[LISTENERS].delete(listener);
  };
};
var snapshot = function snapshot(proxyObject) {
  if (typeof process === 'object' && process.env.NODE_ENV !== 'production' && (!proxyObject || !proxyObject[SNAPSHOT])) {
    throw new Error('Please use proxy object');
  }

  return proxyObject[SNAPSHOT];
};

exports.getVersion = getVersion;
exports.proxy = proxy;
exports.ref = ref;
exports.snapshot = snapshot;
exports.subscribe = subscribe;

}).call(this)}).call(this,require('_process'))

},{"_process":9,"proxy-compare":1}],8:[function(require,module,exports){
const valtio = require('./valtio')
const valtioUtils = require('./valtio/utils')
const jotai = require('./jotai')
const jotaiUtils = require('./jotai/utils')
const jotaiValtio = require('./jotai/valtio')

window.valtio = valtio
window.valtioUtils = valtioUtils
window.jotai = jotai
window.jotaiUtils = jotaiUtils
window.jotaiValtio = jotaiValtio
},{"./jotai":2,"./jotai/utils":3,"./jotai/valtio":4,"./valtio":5,"./valtio/utils":6}],9:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ubGFyay5jb20rcHJveHktY29tcGFyZUAxLjEuNi9ub2RlX21vZHVsZXMvcHJveHktY29tcGFyZS9kaXN0L2luZGV4LnVtZC5qcyIsInNyYy9qb3RhaS9pbmRleC5qcyIsInNyYy9qb3RhaS91dGlscy5qcyIsInNyYy9qb3RhaS92YWx0aW8uanMiLCJzcmMvdmFsdGlvL2luZGV4LmpzIiwic3JjL3ZhbHRpby91dGlscy5qcyIsInNyYy92YWx0aW8vdmFuaWxsYS5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDejVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzdKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2xMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/dChleHBvcnRzKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV4cG9ydHNcIl0sdCk6dCgoZXx8c2VsZikucHJveHlDb21wYXJlPXt9KX0odGhpcyxmdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUsdCl7KG51bGw9PXR8fHQ+ZS5sZW5ndGgpJiYodD1lLmxlbmd0aCk7Zm9yKHZhciByPTAsbj1uZXcgQXJyYXkodCk7cjx0O3IrKyluW3JdPWVbcl07cmV0dXJuIG59dmFyIHI9U3ltYm9sKCksbj1TeW1ib2woKSxvPVN5bWJvbCgpLGk9T2JqZWN0LmdldFByb3RvdHlwZU9mLHU9bmV3IFdlYWtNYXAsYT1mdW5jdGlvbihlKXtyZXR1cm4gZSYmKHUuaGFzKGUpP3UuZ2V0KGUpOmkoZSk9PT1PYmplY3QucHJvdG90eXBlfHxpKGUpPT09QXJyYXkucHJvdG90eXBlKX0sZj1mdW5jdGlvbihlKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZSYmbnVsbCE9PWV9LGM9ZnVuY3Rpb24oZSx0LHUpe2lmKCFhKGUpKXJldHVybiBlO3ZhciBmPWVbb118fGUscz1mdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmlzRnJvemVuKGUpfHxPYmplY3QudmFsdWVzKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKGUpKS5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiFlLndyaXRhYmxlfSl9KGYpLGw9dSYmdS5nZXQoZik7cmV0dXJuIGwmJmwuZj09PXN8fCgobD1mdW5jdGlvbihlLHQpe3ZhciBpLHU9ITEsYT1mdW5jdGlvbih0LHIpe2lmKCF1KXt2YXIgbj10LmEuZ2V0KGUpO258fChuPW5ldyBTZXQsdC5hLnNldChlLG4pKSxuLmFkZChyKX19LGY9KChpPXt9KS5mPXQsaS5nZXQ9ZnVuY3Rpb24odCxyKXtyZXR1cm4gcj09PW8/ZTooYSh0aGlzLHIpLGModFtyXSx0aGlzLmEsdGhpcy5jKSl9LGkuaGFzPWZ1bmN0aW9uKHQscil7cmV0dXJuIHI9PT1uPyh1PSEwLHRoaXMuYS5kZWxldGUoZSksITApOihhKHRoaXMsciksciBpbiB0KX0saS5vd25LZXlzPWZ1bmN0aW9uKGUpe3JldHVybiBhKHRoaXMsciksUmVmbGVjdC5vd25LZXlzKGUpfSxpKTtyZXR1cm4gdCYmKGYuc2V0PWYuZGVsZXRlUHJvcGVydHk9ZnVuY3Rpb24oKXtyZXR1cm4hMX0pLGZ9KGYscykpLnA9bmV3IFByb3h5KHM/ZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gQXJyYXkuZnJvbShlKTt2YXIgdD1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhlKTtyZXR1cm4gT2JqZWN0LnZhbHVlcyh0KS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UuY29uZmlndXJhYmxlPSEwfSksT2JqZWN0LmNyZWF0ZShpKGUpLHQpfShmKTpmLGwpLHUmJnUuc2V0KGYsbCkpLGwuYT10LGwuYz11LGwucH0scz1mdW5jdGlvbihlLHQpe3ZhciByPVJlZmxlY3Qub3duS2V5cyhlKSxuPVJlZmxlY3Qub3duS2V5cyh0KTtyZXR1cm4gci5sZW5ndGghPT1uLmxlbmd0aHx8ci5zb21lKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUhPT1uW3RdfSl9O2UuTU9ERV9BU1NVTUVfVU5DSEFOR0VEX0lGX1VOQUZGRUNURUQ9MSxlLk1PREVfQVNTVU1FX1VOQ0hBTkdFRF9JRl9VTkFGRkVDVEVEX0lOX0RFRVA9NCxlLk1PREVfSUdOT1JFX1JFRl9FUVVBTElUWT0yLGUuTU9ERV9JR05PUkVfUkVGX0VRVUFMSVRZX0lOX0RFRVA9OCxlLmFmZmVjdGVkVG9QYXRoTGlzdD1mdW5jdGlvbihlLHQpe3ZhciByPVtdO3JldHVybiBmdW5jdGlvbiBlKG4sbyl7dmFyIGk9dC5nZXQobik7aT9pLmZvckVhY2goZnVuY3Rpb24odCl7ZShuW3RdLG8/W10uY29uY2F0KG8sW3RdKTpbdF0pfSk6byYmci5wdXNoKG8pfShlKSxyfSxlLmNyZWF0ZURlZXBQcm94eT1jLGUuZ2V0VW50cmFja2VkT2JqZWN0PWZ1bmN0aW9uKGUpe3JldHVybiBhKGUpJiZlW29dfHxudWxsfSxlLmlzRGVlcENoYW5nZWQ9ZnVuY3Rpb24gZShuLG8saSx1LGEpe2lmKHZvaWQgMD09PWEmJihhPTApLE9iamVjdC5pcyhuLG8pJiYoIWYobil8fDA9PSgyJmEpKSlyZXR1cm4hMTtpZighZihuKXx8IWYobykpcmV0dXJuITA7dmFyIGM9aS5nZXQobik7aWYoIWMpcmV0dXJuIDA9PSgxJmEpO2lmKHUmJjA9PSgyJmEpKXt2YXIgbCx5PXUuZ2V0KG4pO2lmKHkmJnkubj09PW8pcmV0dXJuIHkuZzt1LnNldChuLCgobD17fSkubj1vLGwuZz0hMSxsKSl9Zm9yKHZhciBwLGIsZD1udWxsLGc9ZnVuY3Rpb24oZSxyKXt2YXIgbjtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgU3ltYm9sfHxudWxsPT1lW1N5bWJvbC5pdGVyYXRvcl0pe2lmKEFycmF5LmlzQXJyYXkoZSl8fChuPWZ1bmN0aW9uKGUscil7aWYoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIHQoZSxyKTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSk7cmV0dXJuXCJPYmplY3RcIj09PW4mJmUuY29uc3RydWN0b3ImJihuPWUuY29uc3RydWN0b3IubmFtZSksXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uP0FycmF5LmZyb20oZSk6XCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pP3QoZSxyKTp2b2lkIDB9fShlKSkpe24mJihlPW4pO3ZhciBvPTA7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG8+PWUubGVuZ3RoP3tkb25lOiEwfTp7ZG9uZTohMSx2YWx1ZTplW28rK119fX10aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9cmV0dXJuKG49ZVtTeW1ib2wuaXRlcmF0b3JdKCkpLm5leHQuYmluZChuKX0oYyk7IShwPWcoKSkuZG9uZTspe3ZhciB2PXAudmFsdWUsRT12PT09cj9zKG4sbyk6ZShuW3ZdLG9bdl0saSx1LGE+Pj4yPDwyfGE+Pj4yKTtpZighMCE9PUUmJiExIT09RXx8KGQ9RSksZClicmVha31yZXR1cm4gbnVsbD09PWQmJihkPTA9PSgxJmEpKSx1JiYwPT0oMiZhKSYmdS5zZXQobiwoKGI9e30pLm49byxiLmc9ZCxiKSksZH0sZS5tYXJrVG9UcmFjaz1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PSEwKSx1LnNldChlLHQpfSxlLnRyYWNrTWVtbz1mdW5jdGlvbihlKXtyZXR1cm4hIWEoZSkmJm4gaW4gZX19KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LnVtZC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ1JlYWN0J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydSZWFjdCddIDogbnVsbCk7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG8sIGFsbG93QXJyYXlMaWtlKSB7XG4gIHZhciBpdCA9IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdIHx8IG9bXCJAQGl0ZXJhdG9yXCJdO1xuICBpZiAoaXQpIHJldHVybiAoaXQgPSBpdC5jYWxsKG8pKS5uZXh0LmJpbmQoaXQpO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcbiAgICBpZiAoaXQpIG8gPSBpdDtcbiAgICB2YXIgaSA9IDA7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICBkb25lOiB0cnVlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBvW2krK11cbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxudmFyIGhhc0luaXRpYWxWYWx1ZSA9IGZ1bmN0aW9uIGhhc0luaXRpYWxWYWx1ZShhdG9tKSB7XG4gIHJldHVybiAnaW5pdCcgaW4gYXRvbTtcbn07XG5cbnZhciBJU19FUVVBTF9QUk9NSVNFID0gU3ltYm9sKCk7XG52YXIgSU5URVJSVVBUX1BST01JU0UgPSBTeW1ib2woKTtcblxudmFyIGlzSW50ZXJydXB0YWJsZVByb21pc2UgPSBmdW5jdGlvbiBpc0ludGVycnVwdGFibGVQcm9taXNlKHByb21pc2UpIHtcbiAgcmV0dXJuICEhcHJvbWlzZVtJTlRFUlJVUFRfUFJPTUlTRV07XG59O1xuXG52YXIgY3JlYXRlSW50ZXJydXB0YWJsZVByb21pc2UgPSBmdW5jdGlvbiBjcmVhdGVJbnRlcnJ1cHRhYmxlUHJvbWlzZShwcm9taXNlKSB7XG4gIHZhciBpbnRlcnJ1cHQ7XG4gIHZhciBpbnRlcnJ1cHRhYmxlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpbnRlcnJ1cHQgPSByZXNvbHZlO1xuICAgIHByb21pc2UudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICB9KTtcblxuICBpbnRlcnJ1cHRhYmxlUHJvbWlzZVtJU19FUVVBTF9QUk9NSVNFXSA9IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPT09IGludGVycnVwdGFibGVQcm9taXNlIHx8IHAgPT09IHByb21pc2U7XG4gIH07XG5cbiAgaW50ZXJydXB0YWJsZVByb21pc2VbSU5URVJSVVBUX1BST01JU0VdID0gaW50ZXJydXB0O1xuICByZXR1cm4gaW50ZXJydXB0YWJsZVByb21pc2U7XG59O1xuXG52YXIgY3JlYXRlU3RhdGUgPSBmdW5jdGlvbiBjcmVhdGVTdGF0ZShpbml0aWFsVmFsdWVzLCBuZXdBdG9tUmVjZWl2ZXIpIHtcbiAgdmFyIHN0YXRlID0ge1xuICAgIG46IG5ld0F0b21SZWNlaXZlcixcbiAgICB2OiAwLFxuICAgIGE6IG5ldyBXZWFrTWFwKCksXG4gICAgbTogbmV3IFdlYWtNYXAoKSxcbiAgICBwOiBuZXcgU2V0KClcbiAgfTtcblxuICBpZiAoaW5pdGlhbFZhbHVlcykge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoaW5pdGlhbFZhbHVlcyksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgX3N0ZXAkdmFsdWUgPSBfc3RlcC52YWx1ZSxcbiAgICAgICAgICBhdG9tID0gX3N0ZXAkdmFsdWVbMF0sXG4gICAgICAgICAgdmFsdWUgPSBfc3RlcCR2YWx1ZVsxXTtcbiAgICAgIHZhciBhdG9tU3RhdGUgPSB7XG4gICAgICAgIHY6IHZhbHVlLFxuICAgICAgICByOiAwLFxuICAgICAgICBkOiBuZXcgTWFwKClcbiAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBPYmplY3QuZnJlZXplKGF0b21TdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmEuc2V0KGF0b20sIGF0b21TdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxudmFyIGdldEF0b21TdGF0ZSA9IGZ1bmN0aW9uIGdldEF0b21TdGF0ZShzdGF0ZSwgYXRvbSkge1xuICByZXR1cm4gc3RhdGUuYS5nZXQoYXRvbSk7XG59O1xuXG52YXIgd2lwQXRvbVN0YXRlID0gZnVuY3Rpb24gd2lwQXRvbVN0YXRlKHN0YXRlLCBhdG9tLCBkZXBlbmRlbmNpZXMpIHtcbiAgdmFyIGF0b21TdGF0ZSA9IGdldEF0b21TdGF0ZShzdGF0ZSwgYXRvbSk7XG5cbiAgdmFyIG5leHRBdG9tU3RhdGUgPSBfZXh0ZW5kcyh7XG4gICAgcjogMFxuICB9LCBhdG9tU3RhdGUsIHtcbiAgICBkOiBkZXBlbmRlbmNpZXMgPyBuZXcgTWFwKEFycmF5LmZyb20oZGVwZW5kZW5jaWVzKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHZhciBfZ2V0QXRvbVN0YXRlJHIsIF9nZXRBdG9tU3RhdGU7XG5cbiAgICAgIHJldHVybiBbYSwgKF9nZXRBdG9tU3RhdGUkciA9IChfZ2V0QXRvbVN0YXRlID0gZ2V0QXRvbVN0YXRlKHN0YXRlLCBhKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9nZXRBdG9tU3RhdGUucikgIT0gbnVsbCA/IF9nZXRBdG9tU3RhdGUkciA6IDBdO1xuICAgIH0pKSA6IGF0b21TdGF0ZSA/IGF0b21TdGF0ZS5kIDogbmV3IE1hcCgpXG4gIH0pO1xuXG4gIHJldHVybiBbbmV4dEF0b21TdGF0ZSwgYXRvbVN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBhdG9tU3RhdGUuZF07XG59O1xuXG52YXIgc2V0QXRvbVZhbHVlID0gZnVuY3Rpb24gc2V0QXRvbVZhbHVlKHN0YXRlLCBhdG9tLCB2YWx1ZSwgZGVwZW5kZW5jaWVzLCBwcm9taXNlKSB7XG4gIHZhciBfYXRvbVN0YXRlJHA7XG5cbiAgdmFyIF93aXBBdG9tU3RhdGUgPSB3aXBBdG9tU3RhdGUoc3RhdGUsIGF0b20sIGRlcGVuZGVuY2llcyksXG4gICAgICBhdG9tU3RhdGUgPSBfd2lwQXRvbVN0YXRlWzBdLFxuICAgICAgcHJldkRlcGVuZGVuY2llcyA9IF93aXBBdG9tU3RhdGVbMV07XG5cbiAgaWYgKHByb21pc2UgJiYgISgoX2F0b21TdGF0ZSRwID0gYXRvbVN0YXRlLnApICE9IG51bGwgJiYgX2F0b21TdGF0ZSRwW0lTX0VRVUFMX1BST01JU0VdKHByb21pc2UpKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGF0b21TdGF0ZS5jID09IG51bGwgPyB2b2lkIDAgOiBhdG9tU3RhdGUuYygpO1xuICBkZWxldGUgYXRvbVN0YXRlLmU7XG4gIGRlbGV0ZSBhdG9tU3RhdGUucDtcbiAgZGVsZXRlIGF0b21TdGF0ZS5jO1xuICBkZWxldGUgYXRvbVN0YXRlLmk7XG5cbiAgaWYgKCEoJ3YnIGluIGF0b21TdGF0ZSkgfHwgIU9iamVjdC5pcyhhdG9tU3RhdGUudiwgdmFsdWUpKSB7XG4gICAgYXRvbVN0YXRlLnYgPSB2YWx1ZTtcbiAgICArK2F0b21TdGF0ZS5yO1xuICB9XG5cbiAgY29tbWl0QXRvbVN0YXRlKHN0YXRlLCBhdG9tLCBhdG9tU3RhdGUpO1xuICBtb3VudERlcGVuZGVuY2llcyhzdGF0ZSwgYXRvbSwgYXRvbVN0YXRlLCBwcmV2RGVwZW5kZW5jaWVzKTtcbn07XG5cbnZhciBzZXRBdG9tUmVhZEVycm9yID0gZnVuY3Rpb24gc2V0QXRvbVJlYWRFcnJvcihzdGF0ZSwgYXRvbSwgZXJyb3IsIGRlcGVuZGVuY2llcywgcHJvbWlzZSkge1xuICB2YXIgX2F0b21TdGF0ZSRwMjtcblxuICB2YXIgX3dpcEF0b21TdGF0ZTIgPSB3aXBBdG9tU3RhdGUoc3RhdGUsIGF0b20sIGRlcGVuZGVuY2llcyksXG4gICAgICBhdG9tU3RhdGUgPSBfd2lwQXRvbVN0YXRlMlswXSxcbiAgICAgIHByZXZEZXBlbmRlbmNpZXMgPSBfd2lwQXRvbVN0YXRlMlsxXTtcblxuICBpZiAocHJvbWlzZSAmJiAhKChfYXRvbVN0YXRlJHAyID0gYXRvbVN0YXRlLnApICE9IG51bGwgJiYgX2F0b21TdGF0ZSRwMltJU19FUVVBTF9QUk9NSVNFXShwcm9taXNlKSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBhdG9tU3RhdGUuYyA9PSBudWxsID8gdm9pZCAwIDogYXRvbVN0YXRlLmMoKTtcbiAgZGVsZXRlIGF0b21TdGF0ZS5wO1xuICBkZWxldGUgYXRvbVN0YXRlLmM7XG4gIGRlbGV0ZSBhdG9tU3RhdGUuaTtcbiAgYXRvbVN0YXRlLmUgPSBlcnJvcjtcbiAgY29tbWl0QXRvbVN0YXRlKHN0YXRlLCBhdG9tLCBhdG9tU3RhdGUpO1xuICBtb3VudERlcGVuZGVuY2llcyhzdGF0ZSwgYXRvbSwgYXRvbVN0YXRlLCBwcmV2RGVwZW5kZW5jaWVzKTtcbn07XG5cbnZhciBzZXRBdG9tUmVhZFByb21pc2UgPSBmdW5jdGlvbiBzZXRBdG9tUmVhZFByb21pc2Uoc3RhdGUsIGF0b20sIHByb21pc2UsIGRlcGVuZGVuY2llcykge1xuICB2YXIgX2F0b21TdGF0ZSRwMztcblxuICB2YXIgX3dpcEF0b21TdGF0ZTMgPSB3aXBBdG9tU3RhdGUoc3RhdGUsIGF0b20sIGRlcGVuZGVuY2llcyksXG4gICAgICBhdG9tU3RhdGUgPSBfd2lwQXRvbVN0YXRlM1swXSxcbiAgICAgIHByZXZEZXBlbmRlbmNpZXMgPSBfd2lwQXRvbVN0YXRlM1sxXTtcblxuICBpZiAoKF9hdG9tU3RhdGUkcDMgPSBhdG9tU3RhdGUucCkgIT0gbnVsbCAmJiBfYXRvbVN0YXRlJHAzW0lTX0VRVUFMX1BST01JU0VdKHByb21pc2UpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYXRvbVN0YXRlLmMgPT0gbnVsbCA/IHZvaWQgMCA6IGF0b21TdGF0ZS5jKCk7XG5cbiAgaWYgKGlzSW50ZXJydXB0YWJsZVByb21pc2UocHJvbWlzZSkpIHtcbiAgICBhdG9tU3RhdGUucCA9IHByb21pc2U7XG4gICAgZGVsZXRlIGF0b21TdGF0ZS5jO1xuICB9IGVsc2Uge1xuICAgIHZhciBpbnRlcnJ1cHRhYmxlUHJvbWlzZSA9IGNyZWF0ZUludGVycnVwdGFibGVQcm9taXNlKHByb21pc2UpO1xuICAgIGF0b21TdGF0ZS5wID0gaW50ZXJydXB0YWJsZVByb21pc2U7XG4gICAgYXRvbVN0YXRlLmMgPSBpbnRlcnJ1cHRhYmxlUHJvbWlzZVtJTlRFUlJVUFRfUFJPTUlTRV07XG4gIH1cblxuICBjb21taXRBdG9tU3RhdGUoc3RhdGUsIGF0b20sIGF0b21TdGF0ZSk7XG4gIG1vdW50RGVwZW5kZW5jaWVzKHN0YXRlLCBhdG9tLCBhdG9tU3RhdGUsIHByZXZEZXBlbmRlbmNpZXMpO1xufTtcblxudmFyIHNldEF0b21JbnZhbGlkYXRlZCA9IGZ1bmN0aW9uIHNldEF0b21JbnZhbGlkYXRlZChzdGF0ZSwgYXRvbSkge1xuICB2YXIgX3dpcEF0b21TdGF0ZTQgPSB3aXBBdG9tU3RhdGUoc3RhdGUsIGF0b20pLFxuICAgICAgYXRvbVN0YXRlID0gX3dpcEF0b21TdGF0ZTRbMF07XG5cbiAgYXRvbVN0YXRlLmMgPT0gbnVsbCA/IHZvaWQgMCA6IGF0b21TdGF0ZS5jKCk7XG4gIGRlbGV0ZSBhdG9tU3RhdGUucDtcbiAgZGVsZXRlIGF0b21TdGF0ZS5jO1xuICBhdG9tU3RhdGUuaSA9IGF0b21TdGF0ZS5yO1xuICBjb21taXRBdG9tU3RhdGUoc3RhdGUsIGF0b20sIGF0b21TdGF0ZSk7XG59O1xuXG52YXIgc2V0QXRvbVdyaXRlUHJvbWlzZSA9IGZ1bmN0aW9uIHNldEF0b21Xcml0ZVByb21pc2Uoc3RhdGUsIGF0b20sIHByb21pc2UpIHtcbiAgdmFyIF93aXBBdG9tU3RhdGU1ID0gd2lwQXRvbVN0YXRlKHN0YXRlLCBhdG9tKSxcbiAgICAgIGF0b21TdGF0ZSA9IF93aXBBdG9tU3RhdGU1WzBdO1xuXG4gIGlmIChwcm9taXNlKSB7XG4gICAgYXRvbVN0YXRlLncgPSBwcm9taXNlO1xuICB9IGVsc2Uge1xuICAgIGRlbGV0ZSBhdG9tU3RhdGUudztcbiAgfVxuXG4gIGNvbW1pdEF0b21TdGF0ZShzdGF0ZSwgYXRvbSwgYXRvbVN0YXRlKTtcbn07XG5cbnZhciBzY2hlZHVsZVJlYWRBdG9tU3RhdGUgPSBmdW5jdGlvbiBzY2hlZHVsZVJlYWRBdG9tU3RhdGUoc3RhdGUsIGF0b20sIHByb21pc2UpIHtcbiAgcHJvbWlzZS5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICByZWFkQXRvbVN0YXRlKHN0YXRlLCBhdG9tLCB0cnVlKTtcbiAgfSk7XG59O1xuXG52YXIgcmVhZEF0b21TdGF0ZSA9IGZ1bmN0aW9uIHJlYWRBdG9tU3RhdGUoc3RhdGUsIGF0b20sIGZvcmNlKSB7XG4gIGlmICghZm9yY2UpIHtcbiAgICB2YXIgYXRvbVN0YXRlID0gZ2V0QXRvbVN0YXRlKHN0YXRlLCBhdG9tKTtcblxuICAgIGlmIChhdG9tU3RhdGUpIHtcbiAgICAgIGF0b21TdGF0ZS5kLmZvckVhY2goZnVuY3Rpb24gKF8sIGEpIHtcbiAgICAgICAgaWYgKGEgIT09IGF0b20pIHtcbiAgICAgICAgICB2YXIgYVN0YXRlID0gZ2V0QXRvbVN0YXRlKHN0YXRlLCBhKTtcblxuICAgICAgICAgIGlmIChhU3RhdGUgJiYgIWFTdGF0ZS5lICYmICFhU3RhdGUucCAmJiBhU3RhdGUuciA9PT0gYVN0YXRlLmkpIHtcbiAgICAgICAgICAgICAgcmVhZEF0b21TdGF0ZShzdGF0ZSwgYSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoQXJyYXkuZnJvbShhdG9tU3RhdGUuZC5lbnRyaWVzKCkpLmV2ZXJ5KGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBhID0gX3JlZlswXSxcbiAgICAgICAgICAgIHIgPSBfcmVmWzFdO1xuICAgICAgICB2YXIgYVN0YXRlID0gZ2V0QXRvbVN0YXRlKHN0YXRlLCBhKTtcbiAgICAgICAgcmV0dXJuIGFTdGF0ZSAmJiAhYVN0YXRlLmUgJiYgIWFTdGF0ZS5wICYmIGFTdGF0ZS5yICE9PSBhU3RhdGUuaSAmJiBhU3RhdGUuciA9PT0gcjtcbiAgICAgIH0pKSB7XG4gICAgICAgIHJldHVybiBhdG9tU3RhdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVycm9yO1xuICB2YXIgcHJvbWlzZTtcbiAgdmFyIHZhbHVlO1xuICB2YXIgZGVwZW5kZW5jaWVzID0gbmV3IFNldCgpO1xuXG4gIHRyeSB7XG4gICAgdmFyIHByb21pc2VPclZhbHVlID0gYXRvbS5yZWFkKGZ1bmN0aW9uIChhKSB7XG4gICAgICBkZXBlbmRlbmNpZXMuYWRkKGEpO1xuXG4gICAgICBpZiAoYSAhPT0gYXRvbSkge1xuICAgICAgICB2YXIgX2FTdGF0ZSA9IHJlYWRBdG9tU3RhdGUoc3RhdGUsIGEpO1xuXG4gICAgICAgIGlmIChfYVN0YXRlLmUpIHtcbiAgICAgICAgICB0aHJvdyBfYVN0YXRlLmU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX2FTdGF0ZS5wKSB7XG4gICAgICAgICAgdGhyb3cgX2FTdGF0ZS5wO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9hU3RhdGUudjtcbiAgICAgIH1cblxuICAgICAgdmFyIGFTdGF0ZSA9IGdldEF0b21TdGF0ZShzdGF0ZSwgYSk7XG5cbiAgICAgIGlmIChhU3RhdGUpIHtcbiAgICAgICAgaWYgKGFTdGF0ZS5wKSB7XG4gICAgICAgICAgdGhyb3cgYVN0YXRlLnA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYVN0YXRlLnY7XG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNJbml0aWFsVmFsdWUoYSkpIHtcbiAgICAgICAgcmV0dXJuIGEuaW5pdDtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBhdG9tIGluaXQnKTtcbiAgICB9KTtcblxuICAgIGlmIChwcm9taXNlT3JWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlT3JWYWx1ZS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBzZXRBdG9tVmFsdWUoc3RhdGUsIGF0b20sIHZhbHVlLCBkZXBlbmRlbmNpZXMsIHByb21pc2UpO1xuICAgICAgICBmbHVzaFBlbmRpbmcoc3RhdGUpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgc2NoZWR1bGVSZWFkQXRvbVN0YXRlKHN0YXRlLCBhdG9tLCBlKTtcbiAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEF0b21SZWFkRXJyb3Ioc3RhdGUsIGF0b20sIGUgaW5zdGFuY2VvZiBFcnJvciA/IGUgOiBuZXcgRXJyb3IoZSksIGRlcGVuZGVuY2llcywgcHJvbWlzZSk7XG4gICAgICAgIGZsdXNoUGVuZGluZyhzdGF0ZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBwcm9taXNlT3JWYWx1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yT3JQcm9taXNlKSB7XG4gICAgaWYgKGVycm9yT3JQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgcHJvbWlzZSA9IGVycm9yT3JQcm9taXNlO1xuICAgIH0gZWxzZSBpZiAoZXJyb3JPclByb21pc2UgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgZXJyb3IgPSBlcnJvck9yUHJvbWlzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZXJyb3JPclByb21pc2UpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIHNldEF0b21SZWFkRXJyb3Ioc3RhdGUsIGF0b20sIGVycm9yLCBkZXBlbmRlbmNpZXMpO1xuICB9IGVsc2UgaWYgKHByb21pc2UpIHtcbiAgICBzZXRBdG9tUmVhZFByb21pc2Uoc3RhdGUsIGF0b20sIHByb21pc2UsIGRlcGVuZGVuY2llcyk7XG4gIH0gZWxzZSB7XG4gICAgc2V0QXRvbVZhbHVlKHN0YXRlLCBhdG9tLCB2YWx1ZSwgZGVwZW5kZW5jaWVzKTtcbiAgfVxuXG4gIHJldHVybiBnZXRBdG9tU3RhdGUoc3RhdGUsIGF0b20pO1xufTtcblxudmFyIHJlYWRBdG9tID0gZnVuY3Rpb24gcmVhZEF0b20oc3RhdGUsIHJlYWRpbmdBdG9tKSB7XG4gIHZhciBhdG9tU3RhdGUgPSByZWFkQXRvbVN0YXRlKHN0YXRlLCByZWFkaW5nQXRvbSk7XG4gIHN0YXRlLnAuZGVsZXRlKHJlYWRpbmdBdG9tKTtcbiAgZmx1c2hQZW5kaW5nKHN0YXRlKTtcbiAgcmV0dXJuIGF0b21TdGF0ZTtcbn07XG5cbnZhciBhZGRBdG9tID0gZnVuY3Rpb24gYWRkQXRvbShzdGF0ZSwgYWRkaW5nQXRvbSkge1xuICB2YXIgbW91bnRlZCA9IHN0YXRlLm0uZ2V0KGFkZGluZ0F0b20pO1xuXG4gIGlmICghbW91bnRlZCkge1xuICAgIG1vdW50ZWQgPSBtb3VudEF0b20oc3RhdGUsIGFkZGluZ0F0b20pO1xuICB9XG5cbiAgZmx1c2hQZW5kaW5nKHN0YXRlKTtcbiAgcmV0dXJuIG1vdW50ZWQ7XG59O1xuXG52YXIgY2FuVW5tb3VudEF0b20gPSBmdW5jdGlvbiBjYW5Vbm1vdW50QXRvbShhdG9tLCBtb3VudGVkKSB7XG4gIHJldHVybiAhbW91bnRlZC5sLnNpemUgJiYgKCFtb3VudGVkLmQuc2l6ZSB8fCBtb3VudGVkLmQuc2l6ZSA9PT0gMSAmJiBtb3VudGVkLmQuaGFzKGF0b20pKTtcbn07XG5cbnZhciBkZWxBdG9tID0gZnVuY3Rpb24gZGVsQXRvbShzdGF0ZSwgZGVsZXRpbmdBdG9tKSB7XG4gIHZhciBtb3VudGVkID0gc3RhdGUubS5nZXQoZGVsZXRpbmdBdG9tKTtcblxuICBpZiAobW91bnRlZCAmJiBjYW5Vbm1vdW50QXRvbShkZWxldGluZ0F0b20sIG1vdW50ZWQpKSB7XG4gICAgdW5tb3VudEF0b20oc3RhdGUsIGRlbGV0aW5nQXRvbSk7XG4gIH1cblxuICBmbHVzaFBlbmRpbmcoc3RhdGUpO1xufTtcblxudmFyIGludmFsaWRhdGVEZXBlbmRlbnRzID0gZnVuY3Rpb24gaW52YWxpZGF0ZURlcGVuZGVudHMoc3RhdGUsIGF0b20pIHtcbiAgdmFyIG1vdW50ZWQgPSBzdGF0ZS5tLmdldChhdG9tKTtcbiAgbW91bnRlZCA9PSBudWxsID8gdm9pZCAwIDogbW91bnRlZC5kLmZvckVhY2goZnVuY3Rpb24gKGRlcGVuZGVudCkge1xuICAgIGlmIChkZXBlbmRlbnQgPT09IGF0b20pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRBdG9tSW52YWxpZGF0ZWQoc3RhdGUsIGRlcGVuZGVudCk7XG4gICAgaW52YWxpZGF0ZURlcGVuZGVudHMoc3RhdGUsIGRlcGVuZGVudCk7XG4gIH0pO1xufTtcblxudmFyIHdyaXRlQXRvbVN0YXRlID0gZnVuY3Rpb24gd3JpdGVBdG9tU3RhdGUoc3RhdGUsIGF0b20sIHVwZGF0ZSwgcGVuZGluZ1Byb21pc2VzKSB7XG4gIHZhciBpc1BlbmRpbmdQcm9taXNlc0V4cGlyZWQgPSAhcGVuZGluZ1Byb21pc2VzLmxlbmd0aDtcbiAgdmFyIGF0b21TdGF0ZSA9IGdldEF0b21TdGF0ZShzdGF0ZSwgYXRvbSk7XG5cbiAgaWYgKGF0b21TdGF0ZSAmJiBhdG9tU3RhdGUudykge1xuICAgICAgdmFyIHByb21pc2UgPSBhdG9tU3RhdGUudy50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd3JpdGVBdG9tU3RhdGUoc3RhdGUsIGF0b20sIHVwZGF0ZSwgcGVuZGluZ1Byb21pc2VzKTtcblxuICAgICAgICBpZiAoaXNQZW5kaW5nUHJvbWlzZXNFeHBpcmVkKSB7XG4gICAgICAgICAgZmx1c2hQZW5kaW5nKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghaXNQZW5kaW5nUHJvbWlzZXNFeHBpcmVkKSB7XG4gICAgICAgIHBlbmRpbmdQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gIHRyeSB7XG4gICAgdmFyIHByb21pc2VPclZvaWQgPSBhdG9tLndyaXRlKGZ1bmN0aW9uIChhKSB7XG4gICAgICB2YXIgYVN0YXRlID0gcmVhZEF0b21TdGF0ZShzdGF0ZSwgYSk7XG5cbiAgICAgIGlmIChhU3RhdGUuZSkge1xuICAgICAgICB0aHJvdyBhU3RhdGUuZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFTdGF0ZS5wKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUud2FybignUmVhZGluZyBwZW5kaW5nIGF0b20gc3RhdGUgaW4gd3JpdGUgb3BlcmF0aW9uLiBXZSB0aHJvdyBhIHByb21pc2UgZm9yIG5vdy4nLCBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IGFTdGF0ZS5wO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ3YnIGluIGFTdGF0ZSkge1xuICAgICAgICByZXR1cm4gYVN0YXRlLnY7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tCdWddIG5vIHZhbHVlIGZvdW5kIHdoaWxlIHJlYWRpbmcgYXRvbSBpbiB3cml0ZSBvcGVyYXRpb24uIFRoaXMgcHJvYmFibHkgYSBidWcuJywgYSk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcignbm8gdmFsdWUgZm91bmQnKTtcbiAgICB9LCBmdW5jdGlvbiAoYSwgdikge1xuICAgICAgdmFyIGlzUGVuZGluZ1Byb21pc2VzRXhwaXJlZCA9ICFwZW5kaW5nUHJvbWlzZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoYSA9PT0gYXRvbSkge1xuICAgICAgICBzZXRBdG9tVmFsdWUoc3RhdGUsIGEsIHYpO1xuICAgICAgICBpbnZhbGlkYXRlRGVwZW5kZW50cyhzdGF0ZSwgYSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cml0ZUF0b21TdGF0ZShzdGF0ZSwgYSwgdiwgcGVuZGluZ1Byb21pc2VzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzUGVuZGluZ1Byb21pc2VzRXhwaXJlZCkge1xuICAgICAgICBmbHVzaFBlbmRpbmcoc3RhdGUpO1xuICAgICAgfVxuICAgIH0sIHVwZGF0ZSk7XG5cbiAgICBpZiAocHJvbWlzZU9yVm9pZCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgIHZhciBfcHJvbWlzZSA9IHByb21pc2VPclZvaWQuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldEF0b21Xcml0ZVByb21pc2Uoc3RhdGUsIGF0b20pO1xuXG4gICAgICAgIGlmIChpc1BlbmRpbmdQcm9taXNlc0V4cGlyZWQpIHtcbiAgICAgICAgICBmbHVzaFBlbmRpbmcoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFpc1BlbmRpbmdQcm9taXNlc0V4cGlyZWQpIHtcbiAgICAgICAgcGVuZGluZ1Byb21pc2VzLnB1c2goX3Byb21pc2UpO1xuICAgICAgfVxuXG4gICAgICBzZXRBdG9tV3JpdGVQcm9taXNlKHN0YXRlLCBhdG9tLCBfcHJvbWlzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKHBlbmRpbmdQcm9taXNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfSBlbHNlIGlmICghaXNQZW5kaW5nUHJvbWlzZXNFeHBpcmVkKSB7XG4gICAgICBwZW5kaW5nUHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZShmdW5jdGlvbiAoX3Jlc29sdmUsIHJlamVjdCkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuY2F1Z2h0IGV4Y2VwdGlvbjogVXNlIHByb21pc2UgdG8gY2F0Y2ggZXJyb3InLCBlKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciB3cml0ZUF0b20gPSBmdW5jdGlvbiB3cml0ZUF0b20oc3RhdGUsIHdyaXRpbmdBdG9tLCB1cGRhdGUpIHtcbiAgdmFyIHBlbmRpbmdQcm9taXNlcyA9IFtQcm9taXNlLnJlc29sdmUoKV07XG4gIHdyaXRlQXRvbVN0YXRlKHN0YXRlLCB3cml0aW5nQXRvbSwgdXBkYXRlLCBwZW5kaW5nUHJvbWlzZXMpO1xuICBmbHVzaFBlbmRpbmcoc3RhdGUpO1xuXG4gIGlmIChwZW5kaW5nUHJvbWlzZXMubGVuZ3RoIDw9IDEpIHtcbiAgICBwZW5kaW5nUHJvbWlzZXMuc3BsaWNlKDApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgICAgIGlmIChwZW5kaW5nUHJvbWlzZXMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICBwZW5kaW5nUHJvbWlzZXMuc3BsaWNlKDApO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBQcm9taXNlLmFsbChwZW5kaW5nUHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcGVuZGluZ1Byb21pc2VzLnNwbGljZSgxKTtcbiAgICAgICAgICAgIGZsdXNoUGVuZGluZyhzdGF0ZSk7XG4gICAgICAgICAgICBsb29wKCk7XG4gICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbG9vcCgpO1xuICAgIH0pO1xuICB9XG59O1xuXG52YXIgaXNBY3R1YWxseVdyaXRhYmxlQXRvbSA9IGZ1bmN0aW9uIGlzQWN0dWFsbHlXcml0YWJsZUF0b20oYXRvbSkge1xuICByZXR1cm4gISFhdG9tLndyaXRlO1xufTtcblxudmFyIG1vdW50QXRvbSA9IGZ1bmN0aW9uIG1vdW50QXRvbShzdGF0ZSwgYXRvbSwgaW5pdGlhbERlcGVuZGVudCkge1xuICB2YXIgYXRvbVN0YXRlID0gZ2V0QXRvbVN0YXRlKHN0YXRlLCBhdG9tKTtcblxuICBpZiAoYXRvbVN0YXRlKSB7XG4gICAgYXRvbVN0YXRlLmQuZm9yRWFjaChmdW5jdGlvbiAoXywgYSkge1xuICAgICAgaWYgKGEgIT09IGF0b20pIHtcbiAgICAgICAgaWYgKCFzdGF0ZS5tLmhhcyhhKSkge1xuICAgICAgICAgIG1vdW50QXRvbShzdGF0ZSwgYSwgYXRvbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnNvbGUud2FybignW0J1Z10gY291bGQgbm90IGZpbmQgYXRvbSBzdGF0ZSB0byBtb3VudCcsIGF0b20pO1xuICB9XG5cbiAgdmFyIG1vdW50ZWQgPSB7XG4gICAgZDogbmV3IFNldChpbml0aWFsRGVwZW5kZW50ICYmIFtpbml0aWFsRGVwZW5kZW50XSksXG4gICAgbDogbmV3IFNldCgpLFxuICAgIHU6IHVuZGVmaW5lZFxuICB9O1xuICBzdGF0ZS5tLnNldChhdG9tLCBtb3VudGVkKTtcblxuICBpZiAoaXNBY3R1YWxseVdyaXRhYmxlQXRvbShhdG9tKSAmJiBhdG9tLm9uTW91bnQpIHtcbiAgICB2YXIgc2V0QXRvbSA9IGZ1bmN0aW9uIHNldEF0b20odXBkYXRlKSB7XG4gICAgICByZXR1cm4gd3JpdGVBdG9tKHN0YXRlLCBhdG9tLCB1cGRhdGUpO1xuICAgIH07XG5cbiAgICBtb3VudGVkLnUgPSBhdG9tLm9uTW91bnQoc2V0QXRvbSk7XG4gIH1cblxuICByZXR1cm4gbW91bnRlZDtcbn07XG5cbnZhciB1bm1vdW50QXRvbSA9IGZ1bmN0aW9uIHVubW91bnRBdG9tKHN0YXRlLCBhdG9tKSB7XG4gIHZhciBfc3RhdGUkbSRnZXQ7XG5cbiAgdmFyIG9uVW5tb3VudCA9IChfc3RhdGUkbSRnZXQgPSBzdGF0ZS5tLmdldChhdG9tKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9zdGF0ZSRtJGdldC51O1xuXG4gIGlmIChvblVubW91bnQpIHtcbiAgICBvblVubW91bnQoKTtcbiAgfVxuXG4gIHN0YXRlLm0uZGVsZXRlKGF0b20pO1xuICB2YXIgYXRvbVN0YXRlID0gZ2V0QXRvbVN0YXRlKHN0YXRlLCBhdG9tKTtcblxuICBpZiAoYXRvbVN0YXRlKSB7XG4gICAgYXRvbVN0YXRlLmQuZm9yRWFjaChmdW5jdGlvbiAoXywgYSkge1xuICAgICAgaWYgKGEgIT09IGF0b20pIHtcbiAgICAgICAgdmFyIG1vdW50ZWQgPSBzdGF0ZS5tLmdldChhKTtcblxuICAgICAgICBpZiAobW91bnRlZCkge1xuICAgICAgICAgIG1vdW50ZWQuZC5kZWxldGUoYXRvbSk7XG5cbiAgICAgICAgICBpZiAoY2FuVW5tb3VudEF0b20oYSwgbW91bnRlZCkpIHtcbiAgICAgICAgICAgIHVubW91bnRBdG9tKHN0YXRlLCBhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnNvbGUud2FybignW0J1Z10gY291bGQgbm90IGZpbmQgYXRvbSBzdGF0ZSB0byB1bm1vdW50JywgYXRvbSk7XG4gIH1cbn07XG5cbnZhciBtb3VudERlcGVuZGVuY2llcyA9IGZ1bmN0aW9uIG1vdW50RGVwZW5kZW5jaWVzKHN0YXRlLCBhdG9tLCBhdG9tU3RhdGUsIHByZXZEZXBlbmRlbmNpZXMpIHtcbiAgaWYgKHByZXZEZXBlbmRlbmNpZXMgIT09IGF0b21TdGF0ZS5kKSB7XG4gICAgdmFyIGRlcGVuZGVuY2llcyA9IG5ldyBTZXQoYXRvbVN0YXRlLmQua2V5cygpKTtcblxuICAgIGlmIChwcmV2RGVwZW5kZW5jaWVzKSB7XG4gICAgICBwcmV2RGVwZW5kZW5jaWVzLmZvckVhY2goZnVuY3Rpb24gKF8sIGEpIHtcbiAgICAgICAgdmFyIG1vdW50ZWQgPSBzdGF0ZS5tLmdldChhKTtcblxuICAgICAgICBpZiAoZGVwZW5kZW5jaWVzLmhhcyhhKSkge1xuICAgICAgICAgIGRlcGVuZGVuY2llcy5kZWxldGUoYSk7XG4gICAgICAgIH0gZWxzZSBpZiAobW91bnRlZCkge1xuICAgICAgICAgIG1vdW50ZWQuZC5kZWxldGUoYXRvbSk7XG5cbiAgICAgICAgICBpZiAoY2FuVW5tb3VudEF0b20oYSwgbW91bnRlZCkpIHtcbiAgICAgICAgICAgIHVubW91bnRBdG9tKHN0YXRlLCBhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1tCdWddIGEgZGVwZW5kZW5jeSBpcyBub3QgbW91bnRlZCcsIGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xuICAgICAgdmFyIG1vdW50ZWQgPSBzdGF0ZS5tLmdldChhKTtcblxuICAgICAgaWYgKG1vdW50ZWQpIHtcbiAgICAgICAgdmFyIGRlcGVuZGVudHMgPSBtb3VudGVkLmQ7XG4gICAgICAgIGRlcGVuZGVudHMuYWRkKGF0b20pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW91bnRBdG9tKHN0YXRlLCBhLCBhdG9tKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxudmFyIGNvbW1pdEF0b21TdGF0ZSA9IGZ1bmN0aW9uIGNvbW1pdEF0b21TdGF0ZShzdGF0ZSwgYXRvbSwgYXRvbVN0YXRlKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIE9iamVjdC5mcmVlemUoYXRvbVN0YXRlKTtcbiAgfVxuXG4gIHZhciBpc05ld0F0b20gPSBzdGF0ZS5uICYmICFzdGF0ZS5hLmhhcyhhdG9tKTtcbiAgc3RhdGUuYS5zZXQoYXRvbSwgYXRvbVN0YXRlKTtcblxuICBpZiAoaXNOZXdBdG9tKSB7XG4gICAgc3RhdGUubihhdG9tKTtcbiAgfVxuXG4gICsrc3RhdGUudjtcbiAgc3RhdGUucC5hZGQoYXRvbSk7XG59O1xuXG52YXIgZmx1c2hQZW5kaW5nID0gZnVuY3Rpb24gZmx1c2hQZW5kaW5nKHN0YXRlKSB7XG4gIHN0YXRlLnAuZm9yRWFjaChmdW5jdGlvbiAoYXRvbSkge1xuICAgIHZhciBtb3VudGVkID0gc3RhdGUubS5nZXQoYXRvbSk7XG4gICAgbW91bnRlZCA9PSBudWxsID8gdm9pZCAwIDogbW91bnRlZC5sLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfSk7XG4gIHN0YXRlLnAuY2xlYXIoKTtcbn07XG5cbnZhciBzdWJzY3JpYmVBdG9tID0gZnVuY3Rpb24gc3Vic2NyaWJlQXRvbShzdGF0ZSwgYXRvbSwgY2FsbGJhY2spIHtcbiAgdmFyIG1vdW50ZWQgPSBhZGRBdG9tKHN0YXRlLCBhdG9tKTtcbiAgdmFyIGxpc3RlbmVycyA9IG1vdW50ZWQubDtcbiAgbGlzdGVuZXJzLmFkZChjYWxsYmFjayk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShjYWxsYmFjayk7XG4gICAgZGVsQXRvbShzdGF0ZSwgYXRvbSk7XG4gIH07XG59O1xuXG52YXIgVEFSR0VUID0gU3ltYm9sKCk7XG52YXIgR0VUX1ZFUlNJT04gPSBTeW1ib2woKTtcbnZhciBjcmVhdGVNdXRhYmxlU291cmNlID0gZnVuY3Rpb24gY3JlYXRlTXV0YWJsZVNvdXJjZSh0YXJnZXQsIGdldFZlcnNpb24pIHtcbiAgdmFyIF9yZWY7XG5cbiAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltUQVJHRVRdID0gdGFyZ2V0LCBfcmVmW0dFVF9WRVJTSU9OXSA9IGdldFZlcnNpb24sIF9yZWY7XG59O1xudmFyIHVzZU11dGFibGVTb3VyY2UgPSBmdW5jdGlvbiB1c2VNdXRhYmxlU291cmNlKHNvdXJjZSwgZ2V0U25hcHNob3QsIHN1YnNjcmliZSkge1xuICB2YXIgbGFzdFZlcnNpb24gPSByZWFjdC51c2VSZWYoMCk7XG4gIHZhciBjdXJyZW50VmVyc2lvbiA9IHNvdXJjZVtHRVRfVkVSU0lPTl0oc291cmNlW1RBUkdFVF0pO1xuXG4gIHZhciBfdXNlU3RhdGUgPSByZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFtzb3VyY2UsIGdldFNuYXBzaG90LCBzdWJzY3JpYmUsIGN1cnJlbnRWZXJzaW9uLCBnZXRTbmFwc2hvdChzb3VyY2VbVEFSR0VUXSldO1xuICB9KSxcbiAgICAgIHN0YXRlID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIGN1cnJlbnRTbmFwc2hvdCA9IHN0YXRlWzRdO1xuXG4gIGlmIChzdGF0ZVswXSAhPT0gc291cmNlIHx8IHN0YXRlWzFdICE9PSBnZXRTbmFwc2hvdCB8fCBzdGF0ZVsyXSAhPT0gc3Vic2NyaWJlKSB7XG4gICAgY3VycmVudFNuYXBzaG90ID0gZ2V0U25hcHNob3Qoc291cmNlW1RBUkdFVF0pO1xuICAgIHNldFN0YXRlKFtzb3VyY2UsIGdldFNuYXBzaG90LCBzdWJzY3JpYmUsIGN1cnJlbnRWZXJzaW9uLCBjdXJyZW50U25hcHNob3RdKTtcbiAgfSBlbHNlIGlmIChjdXJyZW50VmVyc2lvbiAhPT0gc3RhdGVbM10gJiYgY3VycmVudFZlcnNpb24gIT09IGxhc3RWZXJzaW9uLmN1cnJlbnQpIHtcbiAgICBjdXJyZW50U25hcHNob3QgPSBnZXRTbmFwc2hvdChzb3VyY2VbVEFSR0VUXSk7XG5cbiAgICBpZiAoIU9iamVjdC5pcyhjdXJyZW50U25hcHNob3QsIHN0YXRlWzRdKSkge1xuICAgICAgc2V0U3RhdGUoW3NvdXJjZSwgZ2V0U25hcHNob3QsIHN1YnNjcmliZSwgY3VycmVudFZlcnNpb24sIGN1cnJlbnRTbmFwc2hvdF0pO1xuICAgIH1cbiAgfVxuXG4gIHJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG5cbiAgICB2YXIgY2hlY2tGb3JVcGRhdGVzID0gZnVuY3Rpb24gY2hlY2tGb3JVcGRhdGVzKCkge1xuICAgICAgaWYgKGRpZFVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG5leHRTbmFwc2hvdCA9IGdldFNuYXBzaG90KHNvdXJjZVtUQVJHRVRdKTtcbiAgICAgICAgdmFyIG5leHRWZXJzaW9uID0gc291cmNlW0dFVF9WRVJTSU9OXShzb3VyY2VbVEFSR0VUXSk7XG4gICAgICAgIGxhc3RWZXJzaW9uLmN1cnJlbnQgPSBuZXh0VmVyc2lvbjtcbiAgICAgICAgc2V0U3RhdGUoZnVuY3Rpb24gKHByZXYpIHtcbiAgICAgICAgICBpZiAocHJldlswXSAhPT0gc291cmNlIHx8IHByZXZbMV0gIT09IGdldFNuYXBzaG90IHx8IHByZXZbMl0gIT09IHN1YnNjcmliZSkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKE9iamVjdC5pcyhwcmV2WzRdLCBuZXh0U25hcHNob3QpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gW3ByZXZbMF0sIHByZXZbMV0sIHByZXZbMl0sIG5leHRWZXJzaW9uLCBuZXh0U25hcHNob3RdO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0U3RhdGUoZnVuY3Rpb24gKHByZXYpIHtcbiAgICAgICAgICByZXR1cm4gW10uY29uY2F0KHByZXYpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKHNvdXJjZVtUQVJHRVRdLCBjaGVja0ZvclVwZGF0ZXMpO1xuICAgIGNoZWNrRm9yVXBkYXRlcygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtzb3VyY2UsIGdldFNuYXBzaG90LCBzdWJzY3JpYmVdKTtcbiAgcmV0dXJuIGN1cnJlbnRTbmFwc2hvdDtcbn07XG5cbnZhciBjcmVhdGVTdG9yZUZvclByb2R1Y3Rpb24gPSBmdW5jdGlvbiBjcmVhdGVTdG9yZUZvclByb2R1Y3Rpb24oaW5pdGlhbFZhbHVlcykge1xuICB2YXIgc3RhdGUgPSBjcmVhdGVTdGF0ZShpbml0aWFsVmFsdWVzKTtcbiAgdmFyIHN0YXRlTXV0YWJsZVNvdXJjZSA9IGNyZWF0ZU11dGFibGVTb3VyY2Uoc3RhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3RhdGUudjtcbiAgfSk7XG5cbiAgdmFyIHVwZGF0ZUF0b20gPSBmdW5jdGlvbiB1cGRhdGVBdG9tKGF0b20sIHVwZGF0ZSkge1xuICAgIHJldHVybiB3cml0ZUF0b20oc3RhdGUsIGF0b20sIHVwZGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIFtzdGF0ZU11dGFibGVTb3VyY2UsIHVwZGF0ZUF0b21dO1xufTtcblxudmFyIGNyZWF0ZVN0b3JlRm9yRGV2ZWxvcG1lbnQgPSBmdW5jdGlvbiBjcmVhdGVTdG9yZUZvckRldmVsb3BtZW50KGluaXRpYWxWYWx1ZXMpIHtcbiAgdmFyIGF0b21zU3RvcmUgPSB7XG4gICAgYXRvbXM6IFtdLFxuICAgIGxpc3RlbmVyczogbmV3IFNldCgpXG4gIH07XG4gIHZhciBzdGF0ZSA9IGNyZWF0ZVN0YXRlKGluaXRpYWxWYWx1ZXMsIGZ1bmN0aW9uIChuZXdBdG9tKSB7XG4gICAgYXRvbXNTdG9yZS5hdG9tcyA9IFtdLmNvbmNhdChhdG9tc1N0b3JlLmF0b21zLCBbbmV3QXRvbV0pO1xuICAgIGF0b21zU3RvcmUubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfSk7XG4gIHZhciBzdGF0ZU11dGFibGVTb3VyY2UgPSBjcmVhdGVNdXRhYmxlU291cmNlKHN0YXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHN0YXRlLnY7XG4gIH0pO1xuXG4gIHZhciB1cGRhdGVBdG9tID0gZnVuY3Rpb24gdXBkYXRlQXRvbShhdG9tLCB1cGRhdGUpIHtcbiAgICByZXR1cm4gd3JpdGVBdG9tKHN0YXRlLCBhdG9tLCB1cGRhdGUpO1xuICB9O1xuXG4gIHZhciBhdG9tc011dGFibGVTb3VyY2UgPSBjcmVhdGVNdXRhYmxlU291cmNlKGF0b21zU3RvcmUsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXRvbXNTdG9yZS5hdG9tcztcbiAgfSk7XG4gIHJldHVybiBbc3RhdGVNdXRhYmxlU291cmNlLCB1cGRhdGVBdG9tLCBhdG9tc011dGFibGVTb3VyY2VdO1xufTtcblxudmFyIGNyZWF0ZVN0b3JlID0gdHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBjcmVhdGVTdG9yZUZvckRldmVsb3BtZW50IDogY3JlYXRlU3RvcmVGb3JQcm9kdWN0aW9uO1xudmFyIFN0b3JlQ29udGV4dE1hcCA9IG5ldyBNYXAoKTtcbnZhciBnZXRTdG9yZUNvbnRleHQgPSBmdW5jdGlvbiBnZXRTdG9yZUNvbnRleHQoc2NvcGUpIHtcbiAgaWYgKCFTdG9yZUNvbnRleHRNYXAuaGFzKHNjb3BlKSkge1xuICAgIFN0b3JlQ29udGV4dE1hcC5zZXQoc2NvcGUsIHJlYWN0LmNyZWF0ZUNvbnRleHQoY3JlYXRlU3RvcmUoKSkpO1xuICB9XG5cbiAgcmV0dXJuIFN0b3JlQ29udGV4dE1hcC5nZXQoc2NvcGUpO1xufTtcblxudmFyIFByb3ZpZGVyID0gZnVuY3Rpb24gUHJvdmlkZXIoX3JlZikge1xuICB2YXIgaW5pdGlhbFZhbHVlcyA9IF9yZWYuaW5pdGlhbFZhbHVlcyxcbiAgICAgIHNjb3BlID0gX3JlZi5zY29wZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgdmFyIHN0b3JlUmVmID0gcmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGlmIChzdG9yZVJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgc3RvcmVSZWYuY3VycmVudCA9IGNyZWF0ZVN0b3JlKGluaXRpYWxWYWx1ZXMpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzRGV2U3RvcmUoc3RvcmVSZWYuY3VycmVudCkpIHtcbiAgICB1c2VEZWJ1Z1N0YXRlKHN0b3JlUmVmLmN1cnJlbnQpO1xuICB9XG5cbiAgdmFyIFN0b3JlQ29udGV4dCA9IGdldFN0b3JlQ29udGV4dChzY29wZSk7XG4gIHJldHVybiByZWFjdC5jcmVhdGVFbGVtZW50KFN0b3JlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBzdG9yZVJlZi5jdXJyZW50XG4gIH0sIGNoaWxkcmVuKTtcbn07XG5cbnZhciBhdG9tVG9QcmludGFibGUgPSBmdW5jdGlvbiBhdG9tVG9QcmludGFibGUoYXRvbSkge1xuICByZXR1cm4gYXRvbS5kZWJ1Z0xhYmVsIHx8IGF0b20udG9TdHJpbmcoKTtcbn07XG5cbnZhciBzdGF0ZVRvUHJpbnRhYmxlID0gZnVuY3Rpb24gc3RhdGVUb1ByaW50YWJsZShfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMlswXSxcbiAgICAgIGF0b21zID0gX3JlZjJbMV07XG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoYXRvbXMuZmxhdE1hcChmdW5jdGlvbiAoYXRvbSkge1xuICAgIHZhciBtb3VudGVkID0gc3RhdGUubS5nZXQoYXRvbSk7XG5cbiAgICBpZiAoIW1vdW50ZWQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB2YXIgZGVwZW5kZW50cyA9IG1vdW50ZWQuZDtcbiAgICB2YXIgYXRvbVN0YXRlID0gc3RhdGUuYS5nZXQoYXRvbSkgfHwge307XG4gICAgcmV0dXJuIFtbYXRvbVRvUHJpbnRhYmxlKGF0b20pLCB7XG4gICAgICB2YWx1ZTogYXRvbVN0YXRlLmUgfHwgYXRvbVN0YXRlLnAgfHwgYXRvbVN0YXRlLncgfHwgYXRvbVN0YXRlLnYsXG4gICAgICBkZXBlbmRlbnRzOiBBcnJheS5mcm9tKGRlcGVuZGVudHMpLm1hcChhdG9tVG9QcmludGFibGUpXG4gICAgfV1dO1xuICB9KSk7XG59O1xuXG52YXIgaXNEZXZTdG9yZSA9IGZ1bmN0aW9uIGlzRGV2U3RvcmUoc3RvcmUpIHtcbiAgcmV0dXJuIHN0b3JlLmxlbmd0aCA+IDI7XG59O1xuXG52YXIgZ2V0RGV2U3RhdGUgPSBmdW5jdGlvbiBnZXREZXZTdGF0ZShzdGF0ZSkge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlKTtcbn07XG52YXIgZ2V0RGV2QXRvbXMgPSBmdW5jdGlvbiBnZXREZXZBdG9tcyhfcmVmMykge1xuICB2YXIgYXRvbXMgPSBfcmVmMy5hdG9tcztcbiAgcmV0dXJuIGF0b21zO1xufTtcbnZhciBzdWJzY3JpYmVEZXZBdG9tcyA9IGZ1bmN0aW9uIHN1YnNjcmliZURldkF0b21zKF9yZWY0LCBjYWxsYmFjaykge1xuICB2YXIgbGlzdGVuZXJzID0gX3JlZjQubGlzdGVuZXJzO1xuICBsaXN0ZW5lcnMuYWRkKGNhbGxiYWNrKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbGlzdGVuZXJzLmRlbGV0ZShjYWxsYmFjayk7XG4gIH07XG59O1xuXG52YXIgdXNlRGVidWdTdGF0ZSA9IGZ1bmN0aW9uIHVzZURlYnVnU3RhdGUoc3RvcmUpIHtcbiAgdmFyIHN0YXRlTXV0YWJsZVNvdXJjZSA9IHN0b3JlWzBdLFxuICAgICAgYXRvbXNNdXRhYmxlU291cmNlID0gc3RvcmVbMl07XG4gIHZhciBhdG9tcyA9IHVzZU11dGFibGVTb3VyY2UoYXRvbXNNdXRhYmxlU291cmNlLCBnZXREZXZBdG9tcywgc3Vic2NyaWJlRGV2QXRvbXMpO1xuICB2YXIgc3Vic2NyaWJlID0gcmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHN0YXRlLCBjYWxsYmFjaykge1xuICAgIHZhciB1bnN1YnMgPSBhdG9tcy5tYXAoZnVuY3Rpb24gKGF0b20pIHtcbiAgICAgIHJldHVybiBzdWJzY3JpYmVBdG9tKHN0YXRlLCBhdG9tLCBjYWxsYmFjayk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHVuc3Vicy5mb3JFYWNoKGZ1bmN0aW9uICh1bnN1Yikge1xuICAgICAgICByZXR1cm4gdW5zdWIoKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIFthdG9tc10pO1xuICB2YXIgc3RhdGUgPSB1c2VNdXRhYmxlU291cmNlKHN0YXRlTXV0YWJsZVNvdXJjZSwgZ2V0RGV2U3RhdGUsIHN1YnNjcmliZSk7XG4gIHJlYWN0LnVzZURlYnVnVmFsdWUoW3N0YXRlLCBhdG9tc10sIHN0YXRlVG9QcmludGFibGUpO1xufTtcblxudmFyIGtleUNvdW50ID0gMDtcbmZ1bmN0aW9uIGF0b20ocmVhZCwgd3JpdGUpIHtcbiAgdmFyIGtleSA9IFwiYXRvbVwiICsgKytrZXlDb3VudDtcbiAgdmFyIGNvbmZpZyA9IHtcbiAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfTtcblxuICBpZiAodHlwZW9mIHJlYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25maWcucmVhZCA9IHJlYWQ7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLmluaXQgPSByZWFkO1xuXG4gICAgY29uZmlnLnJlYWQgPSBmdW5jdGlvbiAoZ2V0KSB7XG4gICAgICByZXR1cm4gZ2V0KGNvbmZpZyk7XG4gICAgfTtcblxuICAgIGNvbmZpZy53cml0ZSA9IGZ1bmN0aW9uIChnZXQsIHNldCwgdXBkYXRlKSB7XG4gICAgICBzZXQoY29uZmlnLCB0eXBlb2YgdXBkYXRlID09PSAnZnVuY3Rpb24nID8gdXBkYXRlKGdldChjb25maWcpKSA6IHVwZGF0ZSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICh3cml0ZSkge1xuICAgIGNvbmZpZy53cml0ZSA9IHdyaXRlO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxudmFyIGlzV3JpdGFibGUgPSBmdW5jdGlvbiBpc1dyaXRhYmxlKGF0b20pIHtcbiAgcmV0dXJuICEhYXRvbS53cml0ZTtcbn07XG5cbmZ1bmN0aW9uIHVzZUF0b20oYXRvbSkge1xuICB2YXIgZ2V0QXRvbVZhbHVlID0gcmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgdmFyIGF0b21TdGF0ZSA9IHJlYWRBdG9tKHN0YXRlLCBhdG9tKTtcblxuICAgIGlmIChhdG9tU3RhdGUuZSkge1xuICAgICAgdGhyb3cgYXRvbVN0YXRlLmU7XG4gICAgfVxuXG4gICAgaWYgKGF0b21TdGF0ZS5wKSB7XG4gICAgICB0aHJvdyBhdG9tU3RhdGUucDtcbiAgICB9XG5cbiAgICBpZiAoYXRvbVN0YXRlLncpIHtcbiAgICAgIHRocm93IGF0b21TdGF0ZS53O1xuICAgIH1cblxuICAgIGlmICgndicgaW4gYXRvbVN0YXRlKSB7XG4gICAgICByZXR1cm4gYXRvbVN0YXRlLnY7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdubyBhdG9tIHZhbHVlJyk7XG4gIH0sIFthdG9tXSk7XG4gIHZhciBzdWJzY3JpYmUgPSByZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHN1YnNjcmliZUF0b20oc3RhdGUsIGF0b20sIGNhbGxiYWNrKTtcbiAgfSwgW2F0b21dKTtcbiAgdmFyIFN0b3JlQ29udGV4dCA9IGdldFN0b3JlQ29udGV4dChhdG9tLnNjb3BlKTtcblxuICB2YXIgX3VzZUNvbnRleHQgPSByZWFjdC51c2VDb250ZXh0KFN0b3JlQ29udGV4dCksXG4gICAgICBtdXRhYmxlU291cmNlID0gX3VzZUNvbnRleHRbMF0sXG4gICAgICB1cGRhdGVBdG9tID0gX3VzZUNvbnRleHRbMV07XG5cbiAgdmFyIHZhbHVlID0gdXNlTXV0YWJsZVNvdXJjZShtdXRhYmxlU291cmNlLCBnZXRBdG9tVmFsdWUsIHN1YnNjcmliZSk7XG4gIHZhciBzZXRBdG9tID0gcmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHVwZGF0ZSkge1xuICAgIGlmIChpc1dyaXRhYmxlKGF0b20pKSB7XG4gICAgICByZXR1cm4gdXBkYXRlQXRvbShhdG9tLCB1cGRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCB3cml0YWJsZSBhdG9tJyk7XG4gICAgfVxuICB9LCBbdXBkYXRlQXRvbSwgYXRvbV0pO1xuICByZWFjdC51c2VEZWJ1Z1ZhbHVlKHZhbHVlKTtcbiAgcmV0dXJuIFt2YWx1ZSwgc2V0QXRvbV07XG59XG5cbmV4cG9ydHMuUHJvdmlkZXIgPSBQcm92aWRlcjtcbmV4cG9ydHMuU0VDUkVUX0lOVEVSTkFMX2dldFN0b3JlQ29udGV4dCA9IGdldFN0b3JlQ29udGV4dDtcbmV4cG9ydHMuYXRvbSA9IGF0b207XG5leHBvcnRzLnVzZUF0b20gPSB1c2VBdG9tO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snUmVhY3QnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ1JlYWN0J10gOiBudWxsKTtcbnZhciBqb3RhaSA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxuZnVuY3Rpb24gdXNlVXBkYXRlQXRvbShhbkF0b20pIHtcbiAgdmFyIFN0b3JlQ29udGV4dCA9IGpvdGFpLlNFQ1JFVF9JTlRFUk5BTF9nZXRTdG9yZUNvbnRleHQoYW5BdG9tLnNjb3BlKTtcblxuICB2YXIgX3VzZUNvbnRleHQgPSByZWFjdC51c2VDb250ZXh0KFN0b3JlQ29udGV4dCksXG4gICAgICB1cGRhdGVBdG9tID0gX3VzZUNvbnRleHRbMV07XG5cbiAgdmFyIHNldEF0b20gPSByZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodXBkYXRlKSB7XG4gICAgcmV0dXJuIHVwZGF0ZUF0b20oYW5BdG9tLCB1cGRhdGUpO1xuICB9LCBbdXBkYXRlQXRvbSwgYW5BdG9tXSk7XG4gIHJldHVybiBzZXRBdG9tO1xufVxuXG5mdW5jdGlvbiB1c2VBdG9tVmFsdWUoYW5BdG9tKSB7XG4gIHJldHVybiBqb3RhaS51c2VBdG9tKGFuQXRvbSlbMF07XG59XG5cbnZhciBSRVNFVCA9IFN5bWJvbCgpO1xuZnVuY3Rpb24gYXRvbVdpdGhSZXNldChpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGFuQXRvbSA9IGpvdGFpLmF0b20oaW5pdGlhbFZhbHVlLCBmdW5jdGlvbiAoZ2V0LCBzZXQsIHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUgPT09IFJFU0VUKSB7XG4gICAgICBzZXQoYW5BdG9tLCBpbml0aWFsVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXQoYW5BdG9tLCB0eXBlb2YgdXBkYXRlID09PSAnZnVuY3Rpb24nID8gdXBkYXRlKGdldChhbkF0b20pKSA6IHVwZGF0ZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGFuQXRvbTtcbn1cblxuZnVuY3Rpb24gdXNlUmVzZXRBdG9tKGFuQXRvbSkge1xuICB2YXIgU3RvcmVDb250ZXh0ID0gam90YWkuU0VDUkVUX0lOVEVSTkFMX2dldFN0b3JlQ29udGV4dChhbkF0b20uc2NvcGUpO1xuXG4gIHZhciBfdXNlQ29udGV4dCA9IHJlYWN0LnVzZUNvbnRleHQoU3RvcmVDb250ZXh0KSxcbiAgICAgIHVwZGF0ZUF0b20gPSBfdXNlQ29udGV4dFsxXTtcblxuICB2YXIgc2V0QXRvbSA9IHJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdXBkYXRlQXRvbShhbkF0b20sIFJFU0VUKTtcbiAgfSwgW3VwZGF0ZUF0b20sIGFuQXRvbV0pO1xuICByZXR1cm4gc2V0QXRvbTtcbn1cblxuZnVuY3Rpb24gdXNlUmVkdWNlckF0b20oYW5BdG9tLCByZWR1Y2VyKSB7XG4gIHZhciBfdXNlQXRvbSA9IGpvdGFpLnVzZUF0b20oYW5BdG9tKSxcbiAgICAgIHN0YXRlID0gX3VzZUF0b21bMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VBdG9tWzFdO1xuXG4gIHZhciBkaXNwYXRjaCA9IHJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICBzZXRTdGF0ZShmdW5jdGlvbiAocHJldikge1xuICAgICAgcmV0dXJuIHJlZHVjZXIocHJldiwgYWN0aW9uKTtcbiAgICB9KTtcbiAgfSwgW3NldFN0YXRlLCByZWR1Y2VyXSk7XG4gIHJldHVybiBbc3RhdGUsIGRpc3BhdGNoXTtcbn1cblxuZnVuY3Rpb24gYXRvbVdpdGhSZWR1Y2VyKGluaXRpYWxWYWx1ZSwgcmVkdWNlcikge1xuICB2YXIgYW5BdG9tID0gam90YWkuYXRvbShpbml0aWFsVmFsdWUsIGZ1bmN0aW9uIChnZXQsIHNldCwgYWN0aW9uKSB7XG4gICAgcmV0dXJuIHNldChhbkF0b20sIHJlZHVjZXIoZ2V0KGFuQXRvbSksIGFjdGlvbikpO1xuICB9KTtcbiAgcmV0dXJuIGFuQXRvbTtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UobywgYWxsb3dBcnJheUxpa2UpIHtcbiAgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07XG4gIGlmIChpdCkgcmV0dXJuIChpdCA9IGl0LmNhbGwobykpLm5leHQuYmluZChpdCk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgIGlmIChpdCkgbyA9IGl0O1xuICAgIHZhciBpID0gMDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7XG4gICAgICAgIGRvbmU6IHRydWVcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IG9baSsrXVxuICAgICAgfTtcbiAgICB9O1xuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5mdW5jdGlvbiBhdG9tRmFtaWx5KGluaXRpYWxpemVBdG9tLCBhcmVFcXVhbCkge1xuICB2YXIgc2hvdWxkUmVtb3ZlID0gbnVsbDtcbiAgdmFyIGF0b21zID0gbmV3IE1hcCgpO1xuXG4gIHZhciBjcmVhdGVBdG9tID0gZnVuY3Rpb24gY3JlYXRlQXRvbShwYXJhbSkge1xuICAgIHZhciBpdGVtO1xuXG4gICAgaWYgKGFyZUVxdWFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGl0ZW0gPSBhdG9tcy5nZXQocGFyYW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGF0b21zKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICAgICAgdmFyIF9zdGVwJHZhbHVlID0gX3N0ZXAudmFsdWUsXG4gICAgICAgICAgICBrZXkgPSBfc3RlcCR2YWx1ZVswXSxcbiAgICAgICAgICAgIHZhbHVlID0gX3N0ZXAkdmFsdWVbMV07XG5cbiAgICAgICAgaWYgKGFyZUVxdWFsKGtleSwgcGFyYW0pKSB7XG4gICAgICAgICAgaXRlbSA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHNob3VsZFJlbW92ZSAhPSBudWxsICYmIHNob3VsZFJlbW92ZShpdGVtWzFdLCBwYXJhbSkpIHtcbiAgICAgICAgYXRvbXMuZGVsZXRlKHBhcmFtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpdGVtWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBuZXdBdG9tID0gaW5pdGlhbGl6ZUF0b20ocGFyYW0pO1xuICAgIGF0b21zLnNldChwYXJhbSwgW25ld0F0b20sIERhdGUubm93KCldKTtcbiAgICByZXR1cm4gbmV3QXRvbTtcbiAgfTtcblxuICBjcmVhdGVBdG9tLnJlbW92ZSA9IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgIGlmIChhcmVFcXVhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhdG9tcy5kZWxldGUocGFyYW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShhdG9tcyksIF9zdGVwMjsgIShfc3RlcDIgPSBfaXRlcmF0b3IyKCkpLmRvbmU7KSB7XG4gICAgICAgIHZhciBfc3RlcDIkdmFsdWUgPSBfc3RlcDIudmFsdWUsXG4gICAgICAgICAgICBrZXkgPSBfc3RlcDIkdmFsdWVbMF07XG5cbiAgICAgICAgaWYgKGFyZUVxdWFsKGtleSwgcGFyYW0pKSB7XG4gICAgICAgICAgYXRvbXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY3JlYXRlQXRvbS5zZXRTaG91bGRSZW1vdmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICBzaG91bGRSZW1vdmUgPSBmbjtcbiAgICBpZiAoIXNob3VsZFJlbW92ZSkgcmV0dXJuO1xuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoYXRvbXMpLCBfc3RlcDM7ICEoX3N0ZXAzID0gX2l0ZXJhdG9yMygpKS5kb25lOykge1xuICAgICAgdmFyIF9zdGVwMyR2YWx1ZSA9IF9zdGVwMy52YWx1ZSxcbiAgICAgICAgICBrZXkgPSBfc3RlcDMkdmFsdWVbMF0sXG4gICAgICAgICAgdmFsdWUgPSBfc3RlcDMkdmFsdWVbMV07XG5cbiAgICAgIGlmIChzaG91bGRSZW1vdmUodmFsdWVbMV0sIGtleSkpIHtcbiAgICAgICAgYXRvbXMuZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBjcmVhdGVBdG9tO1xufVxuXG52YXIgZ2V0V2Vha0NhY2hlSXRlbSA9IGZ1bmN0aW9uIGdldFdlYWtDYWNoZUl0ZW0oY2FjaGUsIGRlcHMpIHtcbiAgdmFyIGRlcCA9IGRlcHNbMF0sXG4gICAgICByZXN0ID0gZGVwcy5zbGljZSgxKTtcbiAgdmFyIGVudHJ5ID0gY2FjaGUuZ2V0KGRlcCk7XG5cbiAgaWYgKCFlbnRyeSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghcmVzdC5sZW5ndGgpIHtcbiAgICByZXR1cm4gZW50cnlbMV07XG4gIH1cblxuICByZXR1cm4gZ2V0V2Vha0NhY2hlSXRlbShlbnRyeVswXSwgcmVzdCk7XG59O1xudmFyIHNldFdlYWtDYWNoZUl0ZW0gPSBmdW5jdGlvbiBzZXRXZWFrQ2FjaGVJdGVtKGNhY2hlLCBkZXBzLCBpdGVtKSB7XG4gIHZhciBkZXAgPSBkZXBzWzBdLFxuICAgICAgcmVzdCA9IGRlcHMuc2xpY2UoMSk7XG4gIHZhciBlbnRyeSA9IGNhY2hlLmdldChkZXApO1xuXG4gIGlmICghZW50cnkpIHtcbiAgICBlbnRyeSA9IFtuZXcgV2Vha01hcCgpXTtcbiAgICBjYWNoZS5zZXQoZGVwLCBlbnRyeSk7XG4gIH1cblxuICBpZiAoIXJlc3QubGVuZ3RoKSB7XG4gICAgZW50cnlbMV0gPSBpdGVtO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHNldFdlYWtDYWNoZUl0ZW0oZW50cnlbMF0sIHJlc3QsIGl0ZW0pO1xufTtcblxudmFyIHNlbGVjdEF0b21DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBzZWxlY3RBdG9tKGFuQXRvbSwgc2VsZWN0b3IsIGVxdWFsaXR5Rm4pIHtcbiAgaWYgKGVxdWFsaXR5Rm4gPT09IHZvaWQgMCkge1xuICAgIGVxdWFsaXR5Rm4gPSBPYmplY3QuaXM7XG4gIH1cblxuICB2YXIgZGVwcyA9IFthbkF0b20sIHNlbGVjdG9yLCBlcXVhbGl0eUZuXTtcbiAgdmFyIGNhY2hlZEF0b20gPSBnZXRXZWFrQ2FjaGVJdGVtKHNlbGVjdEF0b21DYWNoZSwgZGVwcyk7XG5cbiAgaWYgKGNhY2hlZEF0b20pIHtcbiAgICByZXR1cm4gY2FjaGVkQXRvbTtcbiAgfVxuXG4gIHZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xuICB2YXIgcHJldlNsaWNlO1xuICB2YXIgZGVyaXZlZEF0b20gPSBqb3RhaS5hdG9tKGZ1bmN0aW9uIChnZXQpIHtcbiAgICB2YXIgc2xpY2UgPSBzZWxlY3RvcihnZXQoYW5BdG9tKSk7XG5cbiAgICBpZiAoaW5pdGlhbGl6ZWQgJiYgZXF1YWxpdHlGbihwcmV2U2xpY2UsIHNsaWNlKSkge1xuICAgICAgcmV0dXJuIHByZXZTbGljZTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgcHJldlNsaWNlID0gc2xpY2U7XG4gICAgcmV0dXJuIHNsaWNlO1xuICB9KTtcbiAgZGVyaXZlZEF0b20uc2NvcGUgPSBhbkF0b20uc2NvcGU7XG4gIHNldFdlYWtDYWNoZUl0ZW0oc2VsZWN0QXRvbUNhY2hlLCBkZXBzLCBkZXJpdmVkQXRvbSk7XG4gIHJldHVybiBkZXJpdmVkQXRvbTtcbn1cblxuZnVuY3Rpb24gdXNlQXRvbUNhbGxiYWNrKGNhbGxiYWNrLCBzY29wZSkge1xuICB2YXIgYW5BdG9tID0gcmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGpvdGFpLmF0b20obnVsbCwgZnVuY3Rpb24gKGdldCwgc2V0LCBfcmVmKSB7XG4gICAgICB2YXIgYXJnID0gX3JlZlswXSxcbiAgICAgICAgICByZXNvbHZlID0gX3JlZlsxXSxcbiAgICAgICAgICByZWplY3QgPSBfcmVmWzJdO1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXNvbHZlKGNhbGxiYWNrKGdldCwgc2V0LCBhcmcpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbY2FsbGJhY2tdKTtcbiAgYW5BdG9tLnNjb3BlID0gc2NvcGU7XG5cbiAgdmFyIF91c2VBdG9tID0gam90YWkudXNlQXRvbShhbkF0b20pLFxuICAgICAgaW52b2tlID0gX3VzZUF0b21bMV07XG5cbiAgcmV0dXJuIHJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaW52b2tlKFthcmcsIHJlc29sdmUsIHJlamVjdF0pO1xuICAgIH0pO1xuICB9LCBbaW52b2tlXSk7XG59XG5cbnZhciBmcmVlemVBdG9tQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG52YXIgZGVlcEZyZWV6ZSA9IGZ1bmN0aW9uIGRlZXBGcmVlemUob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybjtcbiAgT2JqZWN0LmZyZWV6ZShvYmopO1xuICB2YXIgcHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcblxuICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKHByb3BOYW1lcyksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgdmFyIG5hbWUgPSBfc3RlcC52YWx1ZTtcbiAgICB2YXIgdmFsdWUgPSBvYmpbbmFtZV07XG4gICAgZGVlcEZyZWV6ZSh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuZnVuY3Rpb24gZnJlZXplQXRvbShhbkF0b20pIHtcbiAgdmFyIGRlcHMgPSBbYW5BdG9tXTtcbiAgdmFyIGNhY2hlZEF0b20gPSBnZXRXZWFrQ2FjaGVJdGVtKGZyZWV6ZUF0b21DYWNoZSwgZGVwcyk7XG5cbiAgaWYgKGNhY2hlZEF0b20pIHtcbiAgICByZXR1cm4gY2FjaGVkQXRvbTtcbiAgfVxuXG4gIHZhciBmcm96ZW5BdG9tID0gam90YWkuYXRvbShmdW5jdGlvbiAoZ2V0KSB7XG4gICAgcmV0dXJuIGRlZXBGcmVlemUoZ2V0KGFuQXRvbSkpO1xuICB9LCBmdW5jdGlvbiAoX2dldCwgc2V0LCBhcmcpIHtcbiAgICByZXR1cm4gc2V0KGFuQXRvbSwgYXJnKTtcbiAgfSk7XG4gIGZyb3plbkF0b20uc2NvcGUgPSBhbkF0b20uc2NvcGU7XG4gIHNldFdlYWtDYWNoZUl0ZW0oZnJlZXplQXRvbUNhY2hlLCBkZXBzLCBmcm96ZW5BdG9tKTtcbiAgcmV0dXJuIGZyb3plbkF0b207XG59XG5mdW5jdGlvbiBmcmVlemVBdG9tQ3JlYXRvcihjcmVhdGVBdG9tKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFuQXRvbSA9IGNyZWF0ZUF0b20uYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgIHZhciBvcmlnUmVhZCA9IGFuQXRvbS5yZWFkO1xuXG4gICAgYW5BdG9tLnJlYWQgPSBmdW5jdGlvbiAoZ2V0KSB7XG4gICAgICByZXR1cm4gZGVlcEZyZWV6ZShvcmlnUmVhZChnZXQpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFuQXRvbTtcbiAgfTtcbn1cblxudmFyIHNwbGl0QXRvbUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxudmFyIGlzV3JpdGFibGUgPSBmdW5jdGlvbiBpc1dyaXRhYmxlKGF0b20pIHtcbiAgcmV0dXJuICEhYXRvbS53cml0ZTtcbn07XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbmZ1bmN0aW9uIHNwbGl0QXRvbShhcnJBdG9tLCBrZXlFeHRyYWN0b3IpIHtcbiAgdmFyIGRlcHMgPSBrZXlFeHRyYWN0b3IgPyBbYXJyQXRvbSwga2V5RXh0cmFjdG9yXSA6IFthcnJBdG9tXTtcbiAgdmFyIGNhY2hlZEF0b20gPSBnZXRXZWFrQ2FjaGVJdGVtKHNwbGl0QXRvbUNhY2hlLCBkZXBzKTtcblxuICBpZiAoY2FjaGVkQXRvbSkge1xuICAgIHJldHVybiBjYWNoZWRBdG9tO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRBdG9tTGlzdDtcbiAgdmFyIGN1cnJlbnRLZXlMaXN0O1xuXG4gIHZhciBrZXlUb0F0b20gPSBmdW5jdGlvbiBrZXlUb0F0b20oa2V5KSB7XG4gICAgdmFyIF9jdXJyZW50S2V5TGlzdCwgX2N1cnJlbnRBdG9tTGlzdDtcblxuICAgIHZhciBpbmRleCA9IChfY3VycmVudEtleUxpc3QgPSBjdXJyZW50S2V5TGlzdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jdXJyZW50S2V5TGlzdC5pbmRleE9mKGtleSk7XG5cbiAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCB8fCBpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIChfY3VycmVudEF0b21MaXN0ID0gY3VycmVudEF0b21MaXN0KSA9PSBudWxsID8gdm9pZCAwIDogX2N1cnJlbnRBdG9tTGlzdFtpbmRleF07XG4gIH07XG5cbiAgdmFyIHJlYWQgPSBmdW5jdGlvbiByZWFkKGdldCkge1xuICAgIHZhciBuZXh0QXRvbUxpc3QgPSBbXTtcbiAgICB2YXIgbmV4dEtleUxpc3QgPSBbXTtcbiAgICBnZXQoYXJyQXRvbSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlFeHRyYWN0b3IgPyBrZXlFeHRyYWN0b3IoaXRlbSkgOiBpbmRleDtcbiAgICAgIG5leHRLZXlMaXN0W2luZGV4XSA9IGtleTtcbiAgICAgIHZhciBjYWNoZWRBdG9tID0ga2V5VG9BdG9tKGtleSk7XG5cbiAgICAgIGlmIChjYWNoZWRBdG9tKSB7XG4gICAgICAgIG5leHRBdG9tTGlzdFtpbmRleF0gPSBjYWNoZWRBdG9tO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByZWFkID0gZnVuY3Rpb24gcmVhZChnZXQpIHtcbiAgICAgICAgdmFyIF9jdXJyZW50S2V5TGlzdDI7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gKF9jdXJyZW50S2V5TGlzdDIgPSBjdXJyZW50S2V5TGlzdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jdXJyZW50S2V5TGlzdDIuaW5kZXhPZihrZXkpO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkIHx8IGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW5kZXggbm90IGZvdW5kJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0KGFyckF0b20pW2luZGV4XTtcbiAgICAgIH07XG5cbiAgICAgIHZhciB3cml0ZSA9IGZ1bmN0aW9uIHdyaXRlKGdldCwgc2V0LCB1cGRhdGUpIHtcbiAgICAgICAgdmFyIF9jdXJyZW50S2V5TGlzdDM7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gKF9jdXJyZW50S2V5TGlzdDMgPSBjdXJyZW50S2V5TGlzdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jdXJyZW50S2V5TGlzdDMuaW5kZXhPZihrZXkpO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkIHx8IGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW5kZXggbm90IGZvdW5kJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJldiA9IGdldChhcnJBdG9tKTtcbiAgICAgICAgdmFyIG5leHRJdGVtID0gaXNGdW5jdGlvbih1cGRhdGUpID8gdXBkYXRlKHByZXZbaW5kZXhdKSA6IHVwZGF0ZTtcbiAgICAgICAgc2V0KGFyckF0b20sIFtdLmNvbmNhdChwcmV2LnNsaWNlKDAsIGluZGV4KSwgW25leHRJdGVtXSwgcHJldi5zbGljZShpbmRleCArIDEpKSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgaXRlbUF0b20gPSBpc1dyaXRhYmxlKGFyckF0b20pID8gam90YWkuYXRvbShyZWFkLCB3cml0ZSkgOiBqb3RhaS5hdG9tKHJlYWQpO1xuICAgICAgaXRlbUF0b20uc2NvcGUgPSBhcnJBdG9tLnNjb3BlO1xuICAgICAgbmV4dEF0b21MaXN0W2luZGV4XSA9IGl0ZW1BdG9tO1xuICAgIH0pO1xuICAgIGN1cnJlbnRLZXlMaXN0ID0gbmV4dEtleUxpc3Q7XG5cbiAgICBpZiAoY3VycmVudEF0b21MaXN0ICYmIGN1cnJlbnRBdG9tTGlzdC5sZW5ndGggPT09IG5leHRBdG9tTGlzdC5sZW5ndGggJiYgY3VycmVudEF0b21MaXN0LmV2ZXJ5KGZ1bmN0aW9uICh4LCBpKSB7XG4gICAgICByZXR1cm4geCA9PT0gbmV4dEF0b21MaXN0W2ldO1xuICAgIH0pKSB7XG4gICAgICByZXR1cm4gY3VycmVudEF0b21MaXN0O1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50QXRvbUxpc3QgPSBuZXh0QXRvbUxpc3Q7XG4gIH07XG5cbiAgdmFyIHdyaXRlID0gZnVuY3Rpb24gd3JpdGUoZ2V0LCBzZXQsIGF0b21Ub1JlbW92ZSkge1xuICAgIHZhciBpbmRleCA9IGdldChzcGxpdHRlZEF0b20pLmluZGV4T2YoYXRvbVRvUmVtb3ZlKTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB2YXIgcHJldiA9IGdldChhcnJBdG9tKTtcbiAgICAgIHNldChhcnJBdG9tLCBbXS5jb25jYXQocHJldi5zbGljZSgwLCBpbmRleCksIHByZXYuc2xpY2UoaW5kZXggKyAxKSkpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgc3BsaXR0ZWRBdG9tID0gaXNXcml0YWJsZShhcnJBdG9tKSA/IGpvdGFpLmF0b20ocmVhZCwgd3JpdGUpIDogam90YWkuYXRvbShyZWFkKTtcbiAgc3BsaXR0ZWRBdG9tLnNjb3BlID0gYXJyQXRvbS5zY29wZTtcbiAgc2V0V2Vha0NhY2hlSXRlbShzcGxpdEF0b21DYWNoZSwgZGVwcywgc3BsaXR0ZWRBdG9tKTtcbiAgcmV0dXJuIHNwbGl0dGVkQXRvbTtcbn1cblxuZnVuY3Rpb24gYXRvbVdpdGhEZWZhdWx0KGdldERlZmF1bHQpIHtcbiAgdmFyIEVNUFRZID0gU3ltYm9sKCk7XG4gIHZhciBvdmVyd3JpdHRlbkF0b20gPSBqb3RhaS5hdG9tKEVNUFRZKTtcbiAgdmFyIGFuQXRvbSA9IGpvdGFpLmF0b20oZnVuY3Rpb24gKGdldCkge1xuICAgIHZhciBvdmVyd3JpdHRlbiA9IGdldChvdmVyd3JpdHRlbkF0b20pO1xuXG4gICAgaWYgKG92ZXJ3cml0dGVuICE9PSBFTVBUWSkge1xuICAgICAgcmV0dXJuIG92ZXJ3cml0dGVuO1xuICAgIH1cblxuICAgIHJldHVybiBnZXREZWZhdWx0KGdldCk7XG4gIH0sIGZ1bmN0aW9uIChnZXQsIHNldCwgdXBkYXRlKSB7XG4gICAgcmV0dXJuIHNldChvdmVyd3JpdHRlbkF0b20sIHR5cGVvZiB1cGRhdGUgPT09ICdmdW5jdGlvbicgPyB1cGRhdGUoZ2V0KGFuQXRvbSkpIDogdXBkYXRlKTtcbiAgfSk7XG4gIHJldHVybiBhbkF0b207XG59XG5cbnZhciB3YWl0Rm9yQWxsQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gd2FpdEZvckFsbChhdG9tcykge1xuICB2YXIgY2FjaGVkQXRvbSA9IEFycmF5LmlzQXJyYXkoYXRvbXMpICYmIGdldFdlYWtDYWNoZUl0ZW0od2FpdEZvckFsbENhY2hlLCBhdG9tcyk7XG5cbiAgaWYgKGNhY2hlZEF0b20pIHtcbiAgICByZXR1cm4gY2FjaGVkQXRvbTtcbiAgfVxuXG4gIHZhciB1bndyYXBwZWRBdG9tcyA9IHVud3JhcEF0b21zKGF0b21zKTtcbiAgdmFyIGRlcml2ZWRBdG9tID0gam90YWkuYXRvbShmdW5jdGlvbiAoZ2V0KSB7XG4gICAgdmFyIHByb21pc2VzID0gW107XG4gICAgdmFyIHZhbHVlcyA9IHVud3JhcHBlZEF0b21zLm1hcChmdW5jdGlvbiAoYW5BdG9tLCBpbmRleCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGdldChhbkF0b20pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICBwcm9taXNlc1tpbmRleF0gPSBlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcFJlc3VsdHMoYXRvbXMsIHZhbHVlcyk7XG4gIH0pO1xuICB2YXIgd2FpdEZvckFsbFNjb3BlID0gdW53cmFwcGVkQXRvbXNbMF0uc2NvcGU7XG4gIGRlcml2ZWRBdG9tLnNjb3BlID0gd2FpdEZvckFsbFNjb3BlO1xuICB2YWxpZGF0ZUF0b21TY29wZXMod2FpdEZvckFsbFNjb3BlLCB1bndyYXBwZWRBdG9tcyk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoYXRvbXMpKSB7XG4gICAgc2V0V2Vha0NhY2hlSXRlbSh3YWl0Rm9yQWxsQ2FjaGUsIGF0b21zLCBkZXJpdmVkQXRvbSk7XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZEF0b207XG59XG5cbnZhciB1bndyYXBBdG9tcyA9IGZ1bmN0aW9uIHVud3JhcEF0b21zKGF0b21zKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGF0b21zKSA/IGF0b21zIDogT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXRvbXMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGF0b21zW2tleV07XG4gIH0pO1xufTtcblxudmFyIHdyYXBSZXN1bHRzID0gZnVuY3Rpb24gd3JhcFJlc3VsdHMoYXRvbXMsIHJlc3VsdHMpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXRvbXMpID8gcmVzdWx0cyA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGF0b21zKS5yZWR1Y2UoZnVuY3Rpb24gKG91dCwga2V5LCBpZHgpIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBvdXQsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2tleV0gPSByZXN1bHRzW2lkeF0sIF9leHRlbmRzMikpO1xuICB9LCB7fSk7XG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUF0b21TY29wZXMoc2NvcGUsIGF0b21zKSB7XG4gIGlmIChzY29wZSAmJiAhYXRvbXMuZXZlcnkoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gYS5zY29wZSA9PT0gc2NvcGU7XG4gIH0pKSB7XG4gICAgY29uc29sZS53YXJuKCdEaWZmZXJlbnQgc2NvcGVzIHdlcmUgZm91bmQgZm9yIGF0b21zIHN1cHBsaWVkIHRvIHdhaXRGb3JBbGwuIFRoaXMgaXMgdW5zdXBwb3J0ZWQgYW5kIHdpbGwgcmVzdWx0IGluIHVuZXhwZWN0ZWQgYmVoYXZpb3IuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXRvbVdpdGhIYXNoKGtleSwgaW5pdGlhbFZhbHVlLCBzZXJpYWxpemUsIGRlc2VyaWFsaXplKSB7XG4gIGlmIChzZXJpYWxpemUgPT09IHZvaWQgMCkge1xuICAgIHNlcmlhbGl6ZSA9IEpTT04uc3RyaW5naWZ5O1xuICB9XG5cbiAgaWYgKGRlc2VyaWFsaXplID09PSB2b2lkIDApIHtcbiAgICBkZXNlcmlhbGl6ZSA9IEpTT04ucGFyc2U7XG4gIH1cblxuICB2YXIgYW5BdG9tID0gam90YWkuYXRvbShpbml0aWFsVmFsdWUsIGZ1bmN0aW9uIChnZXQsIHNldCwgdXBkYXRlKSB7XG4gICAgdmFyIG5ld1ZhbHVlID0gdHlwZW9mIHVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IHVwZGF0ZShnZXQoYW5BdG9tKSkgOiB1cGRhdGU7XG4gICAgc2V0KGFuQXRvbSwgbmV3VmFsdWUpO1xuICAgIHZhciBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLmhhc2guc2xpY2UoMSkpO1xuICAgIHNlYXJjaFBhcmFtcy5zZXQoa2V5LCBzZXJpYWxpemUobmV3VmFsdWUpKTtcbiAgICBsb2NhdGlvbi5oYXNoID0gc2VhcmNoUGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0pO1xuXG4gIGFuQXRvbS5vbk1vdW50ID0gZnVuY3Rpb24gKHNldEF0b20pIHtcbiAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgIHZhciBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLmhhc2guc2xpY2UoMSkpO1xuICAgICAgdmFyIHN0ciA9IHNlYXJjaFBhcmFtcy5nZXQoa2V5KTtcblxuICAgICAgaWYgKHN0ciAhPT0gbnVsbCkge1xuICAgICAgICBzZXRBdG9tKGRlc2VyaWFsaXplKHN0cikpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGNhbGxiYWNrKTtcbiAgICBjYWxsYmFjaygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGNhbGxiYWNrKTtcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBhbkF0b207XG59XG5cbnZhciBkZWZhdWx0U3RvcmFnZSA9IHtcbiAgZ2V0SXRlbTogZnVuY3Rpb24gZ2V0SXRlbShrZXkpIHtcbiAgICB2YXIgc3RvcmVkVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXG4gICAgaWYgKHN0b3JlZFZhbHVlID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIHZhbHVlIHN0b3JlZCcpO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3JlZFZhbHVlKTtcbiAgfSxcbiAgc2V0SXRlbTogZnVuY3Rpb24gc2V0SXRlbShrZXksIG5ld1ZhbHVlKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShuZXdWYWx1ZSkpO1xuICB9XG59O1xuZnVuY3Rpb24gYXRvbVdpdGhTdG9yYWdlKGtleSwgaW5pdGlhbFZhbHVlLCBzdG9yYWdlKSB7XG4gIGlmIChzdG9yYWdlID09PSB2b2lkIDApIHtcbiAgICBzdG9yYWdlID0gZGVmYXVsdFN0b3JhZ2U7XG4gIH1cblxuICB2YXIgZ2V0SW5pdGlhbFZhbHVlID0gZnVuY3Rpb24gZ2V0SW5pdGlhbFZhbHVlKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gc3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgfSBjYXRjaCAoX3VudXNlZCkge1xuICAgICAgcmV0dXJuIGluaXRpYWxWYWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGJhc2VBdG9tID0gam90YWkuYXRvbShpbml0aWFsVmFsdWUpO1xuXG4gIGJhc2VBdG9tLm9uTW91bnQgPSBmdW5jdGlvbiAoc2V0QXRvbSkge1xuICAgIHZhciB2YWx1ZSA9IGdldEluaXRpYWxWYWx1ZSgpO1xuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgdmFsdWUudGhlbihzZXRBdG9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QXRvbSh2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBhbkF0b20gPSBqb3RhaS5hdG9tKGZ1bmN0aW9uIChnZXQpIHtcbiAgICByZXR1cm4gZ2V0KGJhc2VBdG9tKTtcbiAgfSwgZnVuY3Rpb24gKGdldCwgc2V0LCB1cGRhdGUpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSB0eXBlb2YgdXBkYXRlID09PSAnZnVuY3Rpb24nID8gdXBkYXRlKGdldChiYXNlQXRvbSkpIDogdXBkYXRlO1xuICAgIHNldChiYXNlQXRvbSwgbmV3VmFsdWUpO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXksIG5ld1ZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiBhbkF0b207XG59XG5cbmV4cG9ydHMuUkVTRVQgPSBSRVNFVDtcbmV4cG9ydHMuYXRvbUZhbWlseSA9IGF0b21GYW1pbHk7XG5leHBvcnRzLmF0b21XaXRoRGVmYXVsdCA9IGF0b21XaXRoRGVmYXVsdDtcbmV4cG9ydHMuYXRvbVdpdGhIYXNoID0gYXRvbVdpdGhIYXNoO1xuZXhwb3J0cy5hdG9tV2l0aFJlZHVjZXIgPSBhdG9tV2l0aFJlZHVjZXI7XG5leHBvcnRzLmF0b21XaXRoUmVzZXQgPSBhdG9tV2l0aFJlc2V0O1xuZXhwb3J0cy5hdG9tV2l0aFN0b3JhZ2UgPSBhdG9tV2l0aFN0b3JhZ2U7XG5leHBvcnRzLmZyZWV6ZUF0b20gPSBmcmVlemVBdG9tO1xuZXhwb3J0cy5mcmVlemVBdG9tQ3JlYXRvciA9IGZyZWV6ZUF0b21DcmVhdG9yO1xuZXhwb3J0cy5zZWxlY3RBdG9tID0gc2VsZWN0QXRvbTtcbmV4cG9ydHMuc3BsaXRBdG9tID0gc3BsaXRBdG9tO1xuZXhwb3J0cy51c2VBdG9tQ2FsbGJhY2sgPSB1c2VBdG9tQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUF0b21WYWx1ZSA9IHVzZUF0b21WYWx1ZTtcbmV4cG9ydHMudXNlUmVkdWNlckF0b20gPSB1c2VSZWR1Y2VyQXRvbTtcbmV4cG9ydHMudXNlUmVzZXRBdG9tID0gdXNlUmVzZXRBdG9tO1xuZXhwb3J0cy51c2VVcGRhdGVBdG9tID0gdXNlVXBkYXRlQXRvbTtcbmV4cG9ydHMud2FpdEZvckFsbCA9IHdhaXRGb3JBbGw7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB2YW5pbGxhID0gcmVxdWlyZSgnLi4vdmFsdGlvL3ZhbmlsbGEnKTtcbnZhciBqb3RhaSA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxudmFyIGlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGw7XG59O1xuXG52YXIgYXBwbHlDaGFuZ2VzID0gZnVuY3Rpb24gYXBwbHlDaGFuZ2VzKHByb3h5T2JqZWN0LCBwcmV2LCBuZXh0KSB7XG4gIE9iamVjdC5rZXlzKHByZXYpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghKGtleSBpbiBuZXh0KSkge1xuICAgICAgZGVsZXRlIHByb3h5T2JqZWN0W2tleV07XG4gICAgfSBlbHNlIGlmIChPYmplY3QuaXMocHJldltrZXldLCBuZXh0W2tleV0pKSA7IGVsc2UgaWYgKGlzT2JqZWN0KHByb3h5T2JqZWN0W2tleV0pICYmIGlzT2JqZWN0KHByZXZba2V5XSkgJiYgaXNPYmplY3QobmV4dFtrZXldKSkge1xuICAgICAgYXBwbHlDaGFuZ2VzKHByb3h5T2JqZWN0W2tleV0sIHByZXZba2V5XSwgbmV4dFtrZXldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJveHlPYmplY3Rba2V5XSA9IG5leHRba2V5XTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3Qua2V5cyhuZXh0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIShrZXkgaW4gcHJldikpIHtcbiAgICAgIHByb3h5T2JqZWN0W2tleV0gPSBuZXh0W2tleV07XG4gICAgfVxuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGF0b21XaXRoUHJveHkocHJveHlPYmplY3QpIHtcbiAgdmFyIGJhc2VBdG9tID0gam90YWkuYXRvbSh2YW5pbGxhLnNuYXBzaG90KHByb3h5T2JqZWN0KSk7XG5cbiAgYmFzZUF0b20ub25Nb3VudCA9IGZ1bmN0aW9uIChzZXRWYWx1ZSkge1xuICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgc2V0VmFsdWUodmFuaWxsYS5zbmFwc2hvdChwcm94eU9iamVjdCkpO1xuICAgIH07XG5cbiAgICB2YXIgdW5zdWIgPSB2YW5pbGxhLnN1YnNjcmliZShwcm94eU9iamVjdCwgY2FsbGJhY2spO1xuICAgIGNhbGxiYWNrKCk7XG4gICAgcmV0dXJuIHVuc3ViO1xuICB9O1xuXG4gIHZhciBkZXJpdmVkQXRvbSA9IGpvdGFpLmF0b20oZnVuY3Rpb24gKGdldCkge1xuICAgIHJldHVybiBnZXQoYmFzZUF0b20pO1xuICB9LCBmdW5jdGlvbiAoZ2V0LCBfc2V0LCB1cGRhdGUpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSB0eXBlb2YgdXBkYXRlID09PSAnZnVuY3Rpb24nID8gdXBkYXRlKGdldChiYXNlQXRvbSkpIDogdXBkYXRlO1xuICAgIGFwcGx5Q2hhbmdlcyhwcm94eU9iamVjdCwgdmFuaWxsYS5zbmFwc2hvdChwcm94eU9iamVjdCksIG5ld1ZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiBkZXJpdmVkQXRvbTtcbn1cblxuZXhwb3J0cy5hdG9tV2l0aFByb3h5ID0gYXRvbVdpdGhQcm94eTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHZhbmlsbGEgPSByZXF1aXJlKCcuL3ZhbmlsbGEnKTtcbnZhciByZWFjdCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydSZWFjdCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnUmVhY3QnXSA6IG51bGwpO1xudmFyIHByb3h5Q29tcGFyZSA9IHJlcXVpcmUoJ3Byb3h5LWNvbXBhcmUnKTtcblxudmFyIFRBUkdFVCA9IFN5bWJvbCgpO1xudmFyIEdFVF9WRVJTSU9OID0gU3ltYm9sKCk7XG52YXIgY3JlYXRlTXV0YWJsZVNvdXJjZSA9IGZ1bmN0aW9uIGNyZWF0ZU11dGFibGVTb3VyY2UodGFyZ2V0LCBnZXRWZXJzaW9uKSB7XG4gIHZhciBfcmVmO1xuXG4gIHJldHVybiBfcmVmID0ge30sIF9yZWZbVEFSR0VUXSA9IHRhcmdldCwgX3JlZltHRVRfVkVSU0lPTl0gPSBnZXRWZXJzaW9uLCBfcmVmO1xufTtcbnZhciB1c2VNdXRhYmxlU291cmNlID0gZnVuY3Rpb24gdXNlTXV0YWJsZVNvdXJjZShzb3VyY2UsIGdldFNuYXBzaG90LCBzdWJzY3JpYmUpIHtcbiAgdmFyIGxhc3RWZXJzaW9uID0gcmVhY3QudXNlUmVmKDApO1xuICB2YXIgY3VycmVudFZlcnNpb24gPSBzb3VyY2VbR0VUX1ZFUlNJT05dKHNvdXJjZVtUQVJHRVRdKTtcblxuICB2YXIgX3VzZVN0YXRlID0gcmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbc291cmNlLCBnZXRTbmFwc2hvdCwgc3Vic2NyaWJlLCBjdXJyZW50VmVyc2lvbiwgZ2V0U25hcHNob3Qoc291cmNlW1RBUkdFVF0pXTtcbiAgfSksXG4gICAgICBzdGF0ZSA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciBjdXJyZW50U25hcHNob3QgPSBzdGF0ZVs0XTtcblxuICBpZiAoc3RhdGVbMF0gIT09IHNvdXJjZSB8fCBzdGF0ZVsxXSAhPT0gZ2V0U25hcHNob3QgfHwgc3RhdGVbMl0gIT09IHN1YnNjcmliZSkge1xuICAgIGN1cnJlbnRTbmFwc2hvdCA9IGdldFNuYXBzaG90KHNvdXJjZVtUQVJHRVRdKTtcbiAgICBzZXRTdGF0ZShbc291cmNlLCBnZXRTbmFwc2hvdCwgc3Vic2NyaWJlLCBjdXJyZW50VmVyc2lvbiwgY3VycmVudFNuYXBzaG90XSk7XG4gIH0gZWxzZSBpZiAoY3VycmVudFZlcnNpb24gIT09IHN0YXRlWzNdICYmIGN1cnJlbnRWZXJzaW9uICE9PSBsYXN0VmVyc2lvbi5jdXJyZW50KSB7XG4gICAgY3VycmVudFNuYXBzaG90ID0gZ2V0U25hcHNob3Qoc291cmNlW1RBUkdFVF0pO1xuXG4gICAgaWYgKCFPYmplY3QuaXMoY3VycmVudFNuYXBzaG90LCBzdGF0ZVs0XSkpIHtcbiAgICAgIHNldFN0YXRlKFtzb3VyY2UsIGdldFNuYXBzaG90LCBzdWJzY3JpYmUsIGN1cnJlbnRWZXJzaW9uLCBjdXJyZW50U25hcHNob3RdKTtcbiAgICB9XG4gIH1cblxuICByZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaWRVbnN1YnNjcmliZSA9IGZhbHNlO1xuXG4gICAgdmFyIGNoZWNrRm9yVXBkYXRlcyA9IGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlcygpIHtcbiAgICAgIGlmIChkaWRVbnN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBuZXh0U25hcHNob3QgPSBnZXRTbmFwc2hvdChzb3VyY2VbVEFSR0VUXSk7XG4gICAgICAgIHZhciBuZXh0VmVyc2lvbiA9IHNvdXJjZVtHRVRfVkVSU0lPTl0oc291cmNlW1RBUkdFVF0pO1xuICAgICAgICBsYXN0VmVyc2lvbi5jdXJyZW50ID0gbmV4dFZlcnNpb247XG4gICAgICAgIHNldFN0YXRlKGZ1bmN0aW9uIChwcmV2KSB7XG4gICAgICAgICAgaWYgKHByZXZbMF0gIT09IHNvdXJjZSB8fCBwcmV2WzFdICE9PSBnZXRTbmFwc2hvdCB8fCBwcmV2WzJdICE9PSBzdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChPYmplY3QuaXMocHJldls0XSwgbmV4dFNuYXBzaG90KSkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIFtwcmV2WzBdLCBwcmV2WzFdLCBwcmV2WzJdLCBuZXh0VmVyc2lvbiwgbmV4dFNuYXBzaG90XTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNldFN0YXRlKGZ1bmN0aW9uIChwcmV2KSB7XG4gICAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChwcmV2KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShzb3VyY2VbVEFSR0VUXSwgY2hlY2tGb3JVcGRhdGVzKTtcbiAgICBjaGVja0ZvclVwZGF0ZXMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbc291cmNlLCBnZXRTbmFwc2hvdCwgc3Vic2NyaWJlXSk7XG4gIHJldHVybiBjdXJyZW50U25hcHNob3Q7XG59O1xuXG52YXIgaXNTU1IgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhd2luZG93Lm5hdmlnYXRvciB8fCAvU2VydmVyU2lkZVJlbmRlcmluZ3xeRGVub1xcLy8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG52YXIgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IGlzU1NSID8gcmVhY3QudXNlRWZmZWN0IDogcmVhY3QudXNlTGF5b3V0RWZmZWN0O1xuXG52YXIgdXNlQWZmZWN0ZWREZWJ1Z1ZhbHVlID0gZnVuY3Rpb24gdXNlQWZmZWN0ZWREZWJ1Z1ZhbHVlKHN0YXRlLCBhZmZlY3RlZCkge1xuICB2YXIgcGF0aExpc3QgPSByZWFjdC51c2VSZWYoKTtcbiAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBwYXRoTGlzdC5jdXJyZW50ID0gcHJveHlDb21wYXJlLmFmZmVjdGVkVG9QYXRoTGlzdChzdGF0ZSwgYWZmZWN0ZWQpO1xuICB9KTtcbiAgcmVhY3QudXNlRGVidWdWYWx1ZShwYXRoTGlzdC5jdXJyZW50KTtcbn07XG5cbnZhciBtdXRhYmxlU291cmNlQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG52YXIgZ2V0TXV0YWJsZVNvdXJjZSA9IGZ1bmN0aW9uIGdldE11dGFibGVTb3VyY2UocHJveHlPYmplY3QpIHtcbiAgaWYgKCFtdXRhYmxlU291cmNlQ2FjaGUuaGFzKHByb3h5T2JqZWN0KSkge1xuICAgIG11dGFibGVTb3VyY2VDYWNoZS5zZXQocHJveHlPYmplY3QsIGNyZWF0ZU11dGFibGVTb3VyY2UocHJveHlPYmplY3QsIHZhbmlsbGEuZ2V0VmVyc2lvbikpO1xuICB9XG5cbiAgcmV0dXJuIG11dGFibGVTb3VyY2VDYWNoZS5nZXQocHJveHlPYmplY3QpO1xufTtcblxudmFyIHVzZVNuYXBzaG90ID0gZnVuY3Rpb24gdXNlU25hcHNob3QocHJveHlPYmplY3QsIG9wdGlvbnMpIHtcbiAgdmFyIF91c2VSZWR1Y2VyID0gcmVhY3QudXNlUmVkdWNlcihmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjICsgMTtcbiAgfSwgMCksXG4gICAgICBmb3JjZVVwZGF0ZSA9IF91c2VSZWR1Y2VyWzFdO1xuXG4gIHZhciBhZmZlY3RlZCA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciBsYXN0QWZmZWN0ZWQgPSByZWFjdC51c2VSZWYoKTtcbiAgdmFyIHByZXZTbmFwc2hvdCA9IHJlYWN0LnVzZVJlZigpO1xuICB2YXIgbGFzdFNuYXBzaG90ID0gcmVhY3QudXNlUmVmKCk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGxhc3RTbmFwc2hvdC5jdXJyZW50ID0gcHJldlNuYXBzaG90LmN1cnJlbnQgPSB2YW5pbGxhLnNuYXBzaG90KHByb3h5T2JqZWN0KTtcbiAgfSwgW3Byb3h5T2JqZWN0XSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGxhc3RBZmZlY3RlZC5jdXJyZW50ID0gYWZmZWN0ZWQ7XG5cbiAgICBpZiAocHJldlNuYXBzaG90LmN1cnJlbnQgIT09IGxhc3RTbmFwc2hvdC5jdXJyZW50ICYmIHByb3h5Q29tcGFyZS5pc0RlZXBDaGFuZ2VkKHByZXZTbmFwc2hvdC5jdXJyZW50LCBsYXN0U25hcHNob3QuY3VycmVudCwgYWZmZWN0ZWQsIG5ldyBXZWFrTWFwKCkpKSB7XG4gICAgICBwcmV2U25hcHNob3QuY3VycmVudCA9IGxhc3RTbmFwc2hvdC5jdXJyZW50O1xuICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgbm90aWZ5SW5TeW5jID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5zeW5jO1xuICB2YXIgc3ViID0gcmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHByb3h5T2JqZWN0LCBjYikge1xuICAgIHJldHVybiB2YW5pbGxhLnN1YnNjcmliZShwcm94eU9iamVjdCwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG5leHRTbmFwc2hvdCA9IHZhbmlsbGEuc25hcHNob3QocHJveHlPYmplY3QpO1xuICAgICAgbGFzdFNuYXBzaG90LmN1cnJlbnQgPSBuZXh0U25hcHNob3Q7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChsYXN0QWZmZWN0ZWQuY3VycmVudCAmJiAhcHJveHlDb21wYXJlLmlzRGVlcENoYW5nZWQocHJldlNuYXBzaG90LmN1cnJlbnQsIG5leHRTbmFwc2hvdCwgbGFzdEFmZmVjdGVkLmN1cnJlbnQsIG5ldyBXZWFrTWFwKCkpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICBwcmV2U25hcHNob3QuY3VycmVudCA9IG5leHRTbmFwc2hvdDtcbiAgICAgIGNiKCk7XG4gICAgfSwgbm90aWZ5SW5TeW5jKTtcbiAgfSwgW25vdGlmeUluU3luY10pO1xuICB2YXIgY3VyclNuYXBzaG90ID0gdXNlTXV0YWJsZVNvdXJjZShnZXRNdXRhYmxlU291cmNlKHByb3h5T2JqZWN0KSwgdmFuaWxsYS5zbmFwc2hvdCwgc3ViKTtcblxuICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB1c2VBZmZlY3RlZERlYnVnVmFsdWUoY3VyclNuYXBzaG90LCBhZmZlY3RlZCk7XG4gIH1cblxuICB2YXIgcHJveHlDYWNoZSA9IHJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgV2Vha01hcCgpO1xuICB9LCBbXSk7XG4gIHJldHVybiBwcm94eUNvbXBhcmUuY3JlYXRlRGVlcFByb3h5KGN1cnJTbmFwc2hvdCwgYWZmZWN0ZWQsIHByb3h5Q2FjaGUpO1xufTtcblxuZXhwb3J0cy51c2VTbmFwc2hvdCA9IHVzZVNuYXBzaG90O1xuT2JqZWN0LmtleXModmFuaWxsYSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICBpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdmFuaWxsYVtrXTtcbiAgICB9XG4gIH0pO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBwcm94eUNvbXBhcmUgPSByZXF1aXJlKCdwcm94eS1jb21wYXJlJyk7XG52YXIgdmFuaWxsYSA9IHJlcXVpcmUoJy4vdmFuaWxsYScpO1xuXG52YXIgc3Vic2NyaWJlS2V5ID0gZnVuY3Rpb24gc3Vic2NyaWJlS2V5KHByb3h5T2JqZWN0LCBrZXksIGNhbGxiYWNrLCBub3RpZnlJblN5bmMpIHtcbiAgdmFyIHByZXZWYWx1ZSA9IHByb3h5T2JqZWN0W2tleV07XG4gIHJldHVybiB2YW5pbGxhLnN1YnNjcmliZShwcm94eU9iamVjdCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBuZXh0VmFsdWUgPSBwcm94eU9iamVjdFtrZXldO1xuXG4gICAgaWYgKCFPYmplY3QuaXMocHJldlZhbHVlLCBuZXh0VmFsdWUpKSB7XG4gICAgICBjYWxsYmFjayhwcmV2VmFsdWUgPSBuZXh0VmFsdWUpO1xuICAgIH1cbiAgfSwgbm90aWZ5SW5TeW5jKTtcbn07XG52YXIgZGV2dG9vbHMgPSBmdW5jdGlvbiBkZXZ0b29scyhwcm94eU9iamVjdCwgbmFtZSkge1xuICB2YXIgZXh0ZW5zaW9uO1xuXG4gIHRyeSB7XG4gICAgZXh0ZW5zaW9uID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX187XG4gIH0gY2F0Y2ggKF91bnVzZWQpIHt9XG5cbiAgaWYgKCFleHRlbnNpb24pIHtcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tXYXJuaW5nXSBQbGVhc2UgaW5zdGFsbC9lbmFibGUgUmVkdXggZGV2dG9vbHMgZXh0ZW5zaW9uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGlzVGltZVRyYXZlbGluZyA9IGZhbHNlO1xuICB2YXIgZGV2dG9vbHMgPSBleHRlbnNpb24uY29ubmVjdCh7XG4gICAgbmFtZTogbmFtZVxuICB9KTtcbiAgdmFyIHVuc3ViMSA9IHZhbmlsbGEuc3Vic2NyaWJlKHByb3h5T2JqZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzVGltZVRyYXZlbGluZykge1xuICAgICAgaXNUaW1lVHJhdmVsaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRldnRvb2xzLnNlbmQoXCJVcGRhdGUgLSBcIiArIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSwgdmFuaWxsYS5zbmFwc2hvdChwcm94eU9iamVjdCkpO1xuICAgIH1cbiAgfSk7XG4gIHZhciB1bnN1YjIgPSBkZXZ0b29scy5zdWJzY3JpYmUoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICB2YXIgX21lc3NhZ2UkcGF5bG9hZDMsIF9tZXNzYWdlJHBheWxvYWQ0O1xuXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ0RJU1BBVENIJyAmJiBtZXNzYWdlLnN0YXRlKSB7XG4gICAgICB2YXIgX21lc3NhZ2UkcGF5bG9hZCwgX21lc3NhZ2UkcGF5bG9hZDI7XG5cbiAgICAgIGlmICgoKF9tZXNzYWdlJHBheWxvYWQgPSBtZXNzYWdlLnBheWxvYWQpID09IG51bGwgPyB2b2lkIDAgOiBfbWVzc2FnZSRwYXlsb2FkLnR5cGUpID09PSAnSlVNUF9UT19BQ1RJT04nIHx8ICgoX21lc3NhZ2UkcGF5bG9hZDIgPSBtZXNzYWdlLnBheWxvYWQpID09IG51bGwgPyB2b2lkIDAgOiBfbWVzc2FnZSRwYXlsb2FkMi50eXBlKSA9PT0gJ0pVTVBfVE9fU1RBVEUnKSB7XG4gICAgICAgIGlzVGltZVRyYXZlbGluZyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXh0VmFsdWUgPSBKU09OLnBhcnNlKG1lc3NhZ2Uuc3RhdGUpO1xuICAgICAgT2JqZWN0LmtleXMobmV4dFZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcHJveHlPYmplY3Rba2V5XSA9IG5leHRWYWx1ZVtrZXldO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdESVNQQVRDSCcgJiYgKChfbWVzc2FnZSRwYXlsb2FkMyA9IG1lc3NhZ2UucGF5bG9hZCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9tZXNzYWdlJHBheWxvYWQzLnR5cGUpID09PSAnQ09NTUlUJykge1xuICAgICAgZGV2dG9vbHMuaW5pdCh2YW5pbGxhLnNuYXBzaG90KHByb3h5T2JqZWN0KSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdESVNQQVRDSCcgJiYgKChfbWVzc2FnZSRwYXlsb2FkNCA9IG1lc3NhZ2UucGF5bG9hZCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9tZXNzYWdlJHBheWxvYWQ0LnR5cGUpID09PSAnSU1QT1JUX1NUQVRFJykge1xuICAgICAgdmFyIF9tZXNzYWdlJHBheWxvYWQkbmV4dCwgX21lc3NhZ2UkcGF5bG9hZCRuZXh0MjtcblxuICAgICAgdmFyIGFjdGlvbnMgPSAoX21lc3NhZ2UkcGF5bG9hZCRuZXh0ID0gbWVzc2FnZS5wYXlsb2FkLm5leHRMaWZ0ZWRTdGF0ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9tZXNzYWdlJHBheWxvYWQkbmV4dC5hY3Rpb25zQnlJZDtcbiAgICAgIHZhciBjb21wdXRlZFN0YXRlcyA9ICgoX21lc3NhZ2UkcGF5bG9hZCRuZXh0MiA9IG1lc3NhZ2UucGF5bG9hZC5uZXh0TGlmdGVkU3RhdGUpID09IG51bGwgPyB2b2lkIDAgOiBfbWVzc2FnZSRwYXlsb2FkJG5leHQyLmNvbXB1dGVkU3RhdGVzKSB8fCBbXTtcbiAgICAgIGlzVGltZVRyYXZlbGluZyA9IHRydWU7XG4gICAgICBjb21wdXRlZFN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmLCBpbmRleCkge1xuICAgICAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICAgICAgICB2YXIgYWN0aW9uID0gYWN0aW9uc1tpbmRleF0gfHwgXCJVcGRhdGUgLSBcIiArIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHByb3h5T2JqZWN0W2tleV0gPSBzdGF0ZVtrZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBkZXZ0b29scy5pbml0KHZhbmlsbGEuc25hcHNob3QocHJveHlPYmplY3QpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZXZ0b29scy5zZW5kKGFjdGlvbiwgdmFuaWxsYS5zbmFwc2hvdChwcm94eU9iamVjdCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBkZXZ0b29scy5pbml0KHZhbmlsbGEuc25hcHNob3QocHJveHlPYmplY3QpKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB1bnN1YjEoKTtcbiAgICB1bnN1YjIoKTtcbiAgfTtcbn07XG52YXIgYWRkQ29tcHV0ZWQgPSBmdW5jdGlvbiBhZGRDb21wdXRlZChwcm94eU9iamVjdCwgY29tcHV0ZWRGbnMsIHRhcmdldE9iamVjdCkge1xuICBpZiAodGFyZ2V0T2JqZWN0ID09PSB2b2lkIDApIHtcbiAgICB0YXJnZXRPYmplY3QgPSBwcm94eU9iamVjdDtcbiAgfVxuICBPYmplY3Qua2V5cyhjb21wdXRlZEZucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0T2JqZWN0LCBrZXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ29iamVjdCBwcm9wZXJ0eSBhbHJlYWR5IGRlZmluZWQnKTtcbiAgICB9XG5cbiAgICB2YXIgZ2V0ID0gY29tcHV0ZWRGbnNba2V5XTtcbiAgICB2YXIgcHJldlNuYXBzaG90O1xuICAgIHZhciBhZmZlY3RlZCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgdmFyIHBlbmRpbmcgPSBmYWxzZTtcblxuICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgdmFyIG5leHRTbmFwc2hvdCA9IHZhbmlsbGEuc25hcHNob3QocHJveHlPYmplY3QpO1xuXG4gICAgICBpZiAoIXBlbmRpbmcgJiYgKCFwcmV2U25hcHNob3QgfHwgcHJveHlDb21wYXJlLmlzRGVlcENoYW5nZWQocHJldlNuYXBzaG90LCBuZXh0U25hcHNob3QsIGFmZmVjdGVkKSkpIHtcbiAgICAgICAgYWZmZWN0ZWQgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICB2YXIgdmFsdWUgPSBnZXQocHJveHlDb21wYXJlLmNyZWF0ZURlZXBQcm94eShuZXh0U25hcHNob3QsIGFmZmVjdGVkKSk7XG4gICAgICAgIHByZXZTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcblxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgcGVuZGluZyA9IHRydWU7XG4gICAgICAgICAgdmFsdWUudGhlbihmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGFyZ2V0T2JqZWN0W2tleV0gPSB2O1xuICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0YXJnZXRPYmplY3Rba2V5XSA9IG5ldyBQcm94eSh7fSwge1xuICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KS5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldE9iamVjdFtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhbmlsbGEuc3Vic2NyaWJlKHByb3h5T2JqZWN0LCBjYWxsYmFjayk7XG4gICAgY2FsbGJhY2soKTtcbiAgfSk7XG59O1xudmFyIHByb3h5V2l0aENvbXB1dGVkID0gZnVuY3Rpb24gcHJveHlXaXRoQ29tcHV0ZWQoaW5pdGlhbE9iamVjdCwgY29tcHV0ZWRGbnMpIHtcbiAgT2JqZWN0LmtleXMoY29tcHV0ZWRGbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGluaXRpYWxPYmplY3QsIGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignb2JqZWN0IHByb3BlcnR5IGFscmVhZHkgZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIHZhciBjb21wdXRlZEZuID0gY29tcHV0ZWRGbnNba2V5XTtcblxuICAgIHZhciBfcmVmMiA9IHR5cGVvZiBjb21wdXRlZEZuID09PSAnZnVuY3Rpb24nID8ge1xuICAgICAgZ2V0OiBjb21wdXRlZEZuXG4gICAgfSA6IGNvbXB1dGVkRm4sXG4gICAgICAgIGdldCA9IF9yZWYyLmdldCxcbiAgICAgICAgc2V0ID0gX3JlZjIuc2V0O1xuXG4gICAgdmFyIGNvbXB1dGVkVmFsdWU7XG4gICAgdmFyIHByZXZTbmFwc2hvdDtcbiAgICB2YXIgYWZmZWN0ZWQgPSBuZXcgV2Vha01hcCgpO1xuICAgIHZhciBkZXNjID0ge307XG5cbiAgICBkZXNjLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBuZXh0U25hcHNob3QgPSB2YW5pbGxhLnNuYXBzaG90KHByb3h5T2JqZWN0KTtcblxuICAgICAgaWYgKCFwcmV2U25hcHNob3QgfHwgcHJveHlDb21wYXJlLmlzRGVlcENoYW5nZWQocHJldlNuYXBzaG90LCBuZXh0U25hcHNob3QsIGFmZmVjdGVkKSkge1xuICAgICAgICBhZmZlY3RlZCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIGNvbXB1dGVkVmFsdWUgPSBnZXQocHJveHlDb21wYXJlLmNyZWF0ZURlZXBQcm94eShuZXh0U25hcHNob3QsIGFmZmVjdGVkKSk7XG4gICAgICAgIHByZXZTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXB1dGVkVmFsdWU7XG4gICAgfTtcblxuICAgIGlmIChzZXQpIHtcbiAgICAgIGRlc2Muc2V0ID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIHJldHVybiBzZXQocHJveHlPYmplY3QsIG5ld1ZhbHVlKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGluaXRpYWxPYmplY3QsIGtleSwgZGVzYyk7XG4gIH0pO1xuICB2YXIgcHJveHlPYmplY3QgPSB2YW5pbGxhLnByb3h5KGluaXRpYWxPYmplY3QpO1xuICByZXR1cm4gcHJveHlPYmplY3Q7XG59O1xuXG5leHBvcnRzLmFkZENvbXB1dGVkID0gYWRkQ29tcHV0ZWQ7XG5leHBvcnRzLmRldnRvb2xzID0gZGV2dG9vbHM7XG5leHBvcnRzLnByb3h5V2l0aENvbXB1dGVkID0gcHJveHlXaXRoQ29tcHV0ZWQ7XG5leHBvcnRzLnN1YnNjcmliZUtleSA9IHN1YnNjcmliZUtleTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHByb3h5Q29tcGFyZSA9IHJlcXVpcmUoJ3Byb3h5LWNvbXBhcmUnKTtcblxudmFyIFZFUlNJT04gPSBTeW1ib2woKTtcbnZhciBMSVNURU5FUlMgPSBTeW1ib2woKTtcbnZhciBTTkFQU0hPVCA9IFN5bWJvbCgpO1xudmFyIFBST01JU0VfUkVTVUxUID0gU3ltYm9sKCk7XG52YXIgUFJPTUlTRV9FUlJPUiA9IFN5bWJvbCgpO1xudmFyIHJlZlNldCA9IG5ldyBXZWFrU2V0KCk7XG52YXIgcmVmID0gZnVuY3Rpb24gcmVmKG8pIHtcbiAgcmVmU2V0LmFkZChvKTtcbiAgcmV0dXJuIG87XG59O1xuXG52YXIgaXNTdXBwb3J0ZWRPYmplY3QgPSBmdW5jdGlvbiBpc1N1cHBvcnRlZE9iamVjdCh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbCAmJiAoQXJyYXkuaXNBcnJheSh4KSB8fCAheFtTeW1ib2wuaXRlcmF0b3JdKSAmJiAhKHggaW5zdGFuY2VvZiBXZWFrTWFwKSAmJiAhKHggaW5zdGFuY2VvZiBXZWFrU2V0KSAmJiAhKHggaW5zdGFuY2VvZiBFcnJvcikgJiYgISh4IGluc3RhbmNlb2YgTnVtYmVyKSAmJiAhKHggaW5zdGFuY2VvZiBEYXRlKSAmJiAhKHggaW5zdGFuY2VvZiBTdHJpbmcpICYmICEoeCBpbnN0YW5jZW9mIFJlZ0V4cCkgJiYgISh4IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xufTtcblxudmFyIHByb3h5Q2FjaGUgPSBuZXcgV2Vha01hcCgpO1xudmFyIGdsb2JhbFZlcnNpb24gPSAxO1xudmFyIHNuYXBzaG90Q2FjaGUgPSBuZXcgV2Vha01hcCgpO1xudmFyIHByb3h5ID0gZnVuY3Rpb24gcHJveHkoaW5pdGlhbE9iamVjdCkge1xuICBpZiAoaW5pdGlhbE9iamVjdCA9PT0gdm9pZCAwKSB7XG4gICAgaW5pdGlhbE9iamVjdCA9IHt9O1xuICB9XG5cbiAgaWYgKCFpc1N1cHBvcnRlZE9iamVjdChpbml0aWFsT2JqZWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgb2JqZWN0IHR5cGUnKTtcbiAgfVxuXG4gIGlmIChwcm94eUNhY2hlLmhhcyhpbml0aWFsT2JqZWN0KSkge1xuICAgIHJldHVybiBwcm94eUNhY2hlLmdldChpbml0aWFsT2JqZWN0KTtcbiAgfVxuXG4gIHZhciB2ZXJzaW9uID0gZ2xvYmFsVmVyc2lvbjtcbiAgdmFyIGxpc3RlbmVycyA9IG5ldyBTZXQoKTtcblxuICB2YXIgbm90aWZ5VXBkYXRlID0gZnVuY3Rpb24gbm90aWZ5VXBkYXRlKG5leHRWZXJzaW9uKSB7XG4gICAgaWYgKCFuZXh0VmVyc2lvbikge1xuICAgICAgbmV4dFZlcnNpb24gPSArK2dsb2JhbFZlcnNpb247XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24gIT09IG5leHRWZXJzaW9uKSB7XG4gICAgICB2ZXJzaW9uID0gbmV4dFZlcnNpb247XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyKG5leHRWZXJzaW9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY3JlYXRlU25hcHNob3QgPSBmdW5jdGlvbiBjcmVhdGVTbmFwc2hvdCh0YXJnZXQsIHJlY2VpdmVyKSB7XG4gICAgdmFyIGNhY2hlID0gc25hcHNob3RDYWNoZS5nZXQocmVjZWl2ZXIpO1xuXG4gICAgaWYgKGNhY2hlICYmIGNhY2hlLnZlcnNpb24gPT09IHZlcnNpb24pIHtcbiAgICAgIHJldHVybiBjYWNoZS5zbmFwc2hvdDtcbiAgICB9XG5cbiAgICB2YXIgc25hcHNob3QgPSBBcnJheS5pc0FycmF5KHRhcmdldCkgPyBbXSA6IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCkpO1xuICAgIHByb3h5Q29tcGFyZS5tYXJrVG9UcmFjayhzbmFwc2hvdCwgdHJ1ZSk7XG4gICAgc25hcHNob3RDYWNoZS5zZXQocmVjZWl2ZXIsIHtcbiAgICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgICBzbmFwc2hvdDogc25hcHNob3RcbiAgICB9KTtcbiAgICBSZWZsZWN0Lm93bktleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRhcmdldFtrZXldO1xuXG4gICAgICBpZiAocmVmU2V0Lmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgcHJveHlDb21wYXJlLm1hcmtUb1RyYWNrKHZhbHVlLCBmYWxzZSk7XG4gICAgICAgIHNuYXBzaG90W2tleV0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzU3VwcG9ydGVkT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICBzbmFwc2hvdFtrZXldID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBpZiAoUFJPTUlTRV9SRVNVTFQgaW4gdmFsdWUpIHtcbiAgICAgICAgICBzbmFwc2hvdFtrZXldID0gdmFsdWVbUFJPTUlTRV9SRVNVTFRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBlcnJvck9yUHJvbWlzZSA9IHZhbHVlW1BST01JU0VfRVJST1JdIHx8IHZhbHVlO1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzbmFwc2hvdCwga2V5LCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JPclByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWVbVkVSU0lPTl0pIHtcbiAgICAgICAgc25hcHNob3Rba2V5XSA9IHZhbHVlW1NOQVBTSE9UXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNuYXBzaG90W2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBPYmplY3QuZnJlZXplKHNuYXBzaG90KTtcbiAgICByZXR1cm4gc25hcHNob3Q7XG4gIH07XG5cbiAgdmFyIGJhc2VPYmplY3QgPSBBcnJheS5pc0FycmF5KGluaXRpYWxPYmplY3QpID8gW10gOiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihpbml0aWFsT2JqZWN0KSk7XG4gIHZhciBwcm94eU9iamVjdCA9IG5ldyBQcm94eShiYXNlT2JqZWN0LCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgaWYgKHByb3AgPT09IFZFUlNJT04pIHtcbiAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wID09PSBMSVNURU5FUlMpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3AgPT09IFNOQVBTSE9UKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVTbmFwc2hvdCh0YXJnZXQsIHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICB9LFxuICAgIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbiBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApIHtcbiAgICAgIHZhciBwcmV2VmFsdWUgPSB0YXJnZXRbcHJvcF07XG4gICAgICB2YXIgY2hpbGRMaXN0ZW5lcnMgPSBwcmV2VmFsdWUgJiYgcHJldlZhbHVlW0xJU1RFTkVSU107XG5cbiAgICAgIGlmIChjaGlsZExpc3RlbmVycykge1xuICAgICAgICBjaGlsZExpc3RlbmVycy5kZWxldGUobm90aWZ5VXBkYXRlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRlbGV0ZWQgPSBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcCk7XG5cbiAgICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIG5vdGlmeVVwZGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVsZXRlZDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcbiAgICAgIHZhciBfT2JqZWN0JGdldE93blByb3BlcnQ7XG5cbiAgICAgIHZhciBwcmV2VmFsdWUgPSB0YXJnZXRbcHJvcF07XG5cbiAgICAgIGlmIChPYmplY3QuaXMocHJldlZhbHVlLCB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZExpc3RlbmVycyA9IHByZXZWYWx1ZSAmJiBwcmV2VmFsdWVbTElTVEVORVJTXTtcblxuICAgICAgaWYgKGNoaWxkTGlzdGVuZXJzKSB7XG4gICAgICAgIGNoaWxkTGlzdGVuZXJzLmRlbGV0ZShub3RpZnlVcGRhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmU2V0Lmhhcyh2YWx1ZSkgfHwgIWlzU3VwcG9ydGVkT2JqZWN0KHZhbHVlKSB8fCAoX09iamVjdCRnZXRPd25Qcm9wZXJ0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3ApKSAhPSBudWxsICYmIF9PYmplY3QkZ2V0T3duUHJvcGVydC5zZXQpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZS50aGVuKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgdGFyZ2V0W3Byb3BdW1BST01JU0VfUkVTVUxUXSA9IHY7XG4gICAgICAgICAgbm90aWZ5VXBkYXRlKCk7XG4gICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdGFyZ2V0W3Byb3BdW1BST01JU0VfRVJST1JdID0gZTtcbiAgICAgICAgICBub3RpZnlVcGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHByb3h5Q29tcGFyZS5nZXRVbnRyYWNrZWRPYmplY3QodmFsdWUpIHx8IHZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZVtMSVNURU5FUlNdKSB7XG4gICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0W3Byb3BdID0gcHJveHkodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W3Byb3BdW0xJU1RFTkVSU10uYWRkKG5vdGlmeVVwZGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIG5vdGlmeVVwZGF0ZSgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgcHJveHlDYWNoZS5zZXQoaW5pdGlhbE9iamVjdCwgcHJveHlPYmplY3QpO1xuICBSZWZsZWN0Lm93bktleXMoaW5pdGlhbE9iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGluaXRpYWxPYmplY3QsIGtleSk7XG5cbiAgICBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShiYXNlT2JqZWN0LCBrZXksIGRlc2MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm94eU9iamVjdFtrZXldID0gaW5pdGlhbE9iamVjdFtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwcm94eU9iamVjdDtcbn07XG52YXIgZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uIGdldFZlcnNpb24ocHJveHlPYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICghcHJveHlPYmplY3QgfHwgIXByb3h5T2JqZWN0W1ZFUlNJT05dKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBwcm94eSBvYmplY3QnKTtcbiAgfVxuXG4gIHJldHVybiBwcm94eU9iamVjdFtWRVJTSU9OXTtcbn07XG52YXIgc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKHByb3h5T2JqZWN0LCBjYWxsYmFjaywgbm90aWZ5SW5TeW5jKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAoIXByb3h5T2JqZWN0IHx8ICFwcm94eU9iamVjdFtMSVNURU5FUlNdKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBwcm94eSBvYmplY3QnKTtcbiAgfVxuXG4gIHZhciBwZW5kaW5nVmVyc2lvbiA9IDA7XG5cbiAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIobmV4dFZlcnNpb24pIHtcbiAgICBpZiAobm90aWZ5SW5TeW5jKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBlbmRpbmdWZXJzaW9uID0gbmV4dFZlcnNpb247XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobmV4dFZlcnNpb24gPT09IHBlbmRpbmdWZXJzaW9uKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcHJveHlPYmplY3RbTElTVEVORVJTXS5hZGQobGlzdGVuZXIpO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHByb3h5T2JqZWN0W0xJU1RFTkVSU10uZGVsZXRlKGxpc3RlbmVyKTtcbiAgfTtcbn07XG52YXIgc25hcHNob3QgPSBmdW5jdGlvbiBzbmFwc2hvdChwcm94eU9iamVjdCkge1xuICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgKCFwcm94eU9iamVjdCB8fCAhcHJveHlPYmplY3RbU05BUFNIT1RdKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBwcm94eSBvYmplY3QnKTtcbiAgfVxuXG4gIHJldHVybiBwcm94eU9iamVjdFtTTkFQU0hPVF07XG59O1xuXG5leHBvcnRzLmdldFZlcnNpb24gPSBnZXRWZXJzaW9uO1xuZXhwb3J0cy5wcm94eSA9IHByb3h5O1xuZXhwb3J0cy5yZWYgPSByZWY7XG5leHBvcnRzLnNuYXBzaG90ID0gc25hcHNob3Q7XG5leHBvcnRzLnN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXX0=
