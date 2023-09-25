// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hJUH7":[function(require,module,exports) {
var _utilsCoffee = require("/site/common/js/utils.coffee");
(0, _utilsCoffee.fixLayout)();
(0, _utilsCoffee.autoplayVimeo)();

},{"/site/common/js/utils.coffee":"lse1A"}],"lse1A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ASAP", function() {
    return ASAP;
});
parcelHelpers.export(exports, "preload", function() {
    return preload;
});
parcelHelpers.export(exports, "queryParam", function() {
    return queryParam;
});
parcelHelpers.export(exports, "arrayOfNodesWith", function() {
    return arrayOfNodesWith;
});
parcelHelpers.export(exports, "debounce", function() {
    return debounce;
});
parcelHelpers.export(exports, "responsiveHandler", function() {
    return responsiveHandler;
});
parcelHelpers.export(exports, "autoplayVimeo", function() {
    return autoplayVimeo;
});
parcelHelpers.export(exports, "watchIntersection", function() {
    return watchIntersection;
});
parcelHelpers.export(exports, "fixLayout", function() {
    return fixLayout;
});
var _objectSpreadMjs = require("@swc/helpers/src/_object_spread.mjs");
var _objectSpreadMjsDefault = parcelHelpers.interopDefault(_objectSpreadMjs);
var ASAP = function() {
    var callall, fns;
    fns = [];
    callall = function callall() {
        var f, results;
        results = [];
        while(f = fns.shift())results.push(f());
        return results;
    };
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", callall, false);
        window.addEventListener("load", callall, false);
    } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", callall);
        window.attachEvent("onload", callall);
    }
    return function(fn) {
        fns.push(fn);
        if (document.readyState === "complete") return callall();
    };
}();
var preload = function preload(what, fn) {
    return ASAP(function() {
        var lib;
        if (!Array.isArray(what)) what = [
            what
        ];
        return $.when.apply($, function() {
            var i, len, results;
            results = [];
            for(i = 0, len = what.length; i < len; i++){
                lib = what[i];
                results.push($.ajax(lib, {
                    dataType: "script",
                    cache: true
                }));
            }
            return results;
        }()).done(function() {
            return typeof fn === "function" ? fn() : void 0;
        });
    });
};
var queryParam = function queryParam(p, nocase) {
    var k, params, params_kv;
    params_kv = location.search.substr(1).split("&");
    params = {};
    params_kv.forEach(function(kv) {
        var k_v;
        k_v = kv.split("=");
        return params[k_v[0]] = k_v[1] || "";
    });
    if (p) {
        if (nocase) {
            for(k in params){
                if (k.toUpperCase() === p.toUpperCase()) return decodeURIComponent(params[k]);
            }
            return void 0;
        } else return decodeURIComponent(params[p]);
    }
    return params;
};
var arrayOfNodesWith = function arrayOfNodesWith(what) {
    var nodes;
    if (what.jquery) nodes = what.toArray();
    else if (what instanceof Array) nodes = Array.from(what);
    else if (what instanceof Node) nodes = [
        what
    ];
    else if (what instanceof NodeList) nodes = Array.from(what);
    else if (typeof what === "string") nodes = Array.from(document.querySelectorAll(what));
    else throw "*** arrayOfNodesWith: Got something unusable as 'what' param";
    return nodes;
};
var debounce = function debounce(func, threshold, execAsap) {
    var timeout;
    timeout = null;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var delayed, obj;
        obj = this;
        delayed = function delayed() {
            if (!execAsap) func.apply(obj, args);
            return timeout = null;
        };
        if (timeout) clearTimeout(timeout);
        else if (execAsap) func.apply(obj, args);
        return timeout = setTimeout(delayed, threshold || 40);
    };
};
var responsiveHandler = function responsiveHandler(media_query, match_handler, unmatch_handler) {
    var layout;
    layout = matchMedia(media_query);
    layout.addEventListener("change", function(e) {
        if (e.matches) return match_handler();
        else return unmatch_handler();
    });
    if (layout.matches) match_handler();
    else unmatch_handler();
    return layout;
};
var autoplayVimeo = function autoplayVimeo() {
    var lookup_selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ".vimeo-video-box [data-vimeo-vid]", vid_attr = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "data-vimeo-vid", observer_options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var vboxes;
    vboxes = document.querySelectorAll(lookup_selector);
    if (vboxes.length) return preload("https://player.vimeo.com/api/player.js", function() {
        var i, io, len, results, vbox;
        io = new IntersectionObserver(function(entries, observer) {
            var entry, i, len, player_el, results, vplayer;
            results = [];
            for(i = 0, len = entries.length; i < len; i++){
                entry = entries[i];
                player_el = entry.target;
                vplayer = player_el["vimeo-player"];
                if (entry.isIntersecting) {
                    if (vplayer) results.push(vplayer.play());
                    else {
                        vplayer = new Vimeo.Player(player_el, {
                            id: player_el.getAttribute(vid_attr),
                            background: 1,
                            playsinline: 1,
                            autopause: 0,
                            title: 0,
                            byline: 0,
                            portrait: 0
                        });
                        player_el["vimeo-player"] = vplayer;
                        results.push(vplayer.on("play", function() {
                            return this.element.parentElement.classList.add("playback");
                        }));
                    }
                } else results.push(vplayer != null ? vplayer.pause() : void 0);
            }
            return results;
        }, (0, _objectSpreadMjsDefault.default)({
            threshold: 0.33
        }, observer_options));
        results = [];
        for(i = 0, len = vboxes.length; i < len; i++){
            vbox = vboxes[i];
            results.push(io.observe(vbox));
        }
        return results;
    });
};
var watchIntersection = function watchIntersection(targets, options, yes_handler, no_handler) {
    var i, io, len, ref, target;
    io = new IntersectionObserver(function(entries, observer) {
        var entry, i, len, results;
        results = [];
        for(i = 0, len = entries.length; i < len; i++){
            entry = entries[i];
            if (entry.isIntersecting) results.push(yes_handler != null ? yes_handler.call(entry.target) : void 0);
            else results.push(no_handler != null ? no_handler.call(entry.target) : void 0);
        }
        return results;
    }, (0, _objectSpreadMjsDefault.default)({
        threshold: 1
    }, options));
    ref = arrayOfNodesWith(targets);
    for(i = 0, len = ref.length; i < len; i++){
        target = ref[i];
        io.observe(target);
    }
    return io;
};
var fixLayout = function fixLayout() {
    if (document.querySelector("section.underbrow")) document.body.classList.add("underbrow");
    return ASAP(function() {
        return document.querySelectorAll("section.hero").forEach(function(heroSection) {
            var klasses;
            klasses = heroSection.closest(".widgetcontainer").classList;
            klasses.add("hero");
            return klasses.remove("oti-content-typography");
        });
    });
};

},{"@swc/helpers/src/_object_spread.mjs":"ei9D8","@parcel/transformer-js/src/esmodule-helpers.js":"fHjOM"}],"ei9D8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _definePropertyMjs = require("./_define_property.mjs");
var _definePropertyMjsDefault = parcelHelpers.interopDefault(_definePropertyMjs);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            (0, _definePropertyMjsDefault.default)(target, key, source[key]);
        });
    }
    return target;
}
exports.default = _objectSpread;

},{"./_define_property.mjs":"joA0S","@parcel/transformer-js/src/esmodule-helpers.js":"fHjOM"}],"joA0S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _defineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fHjOM"}],"fHjOM":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["hJUH7"], "hJUH7", "parcelRequire94c2")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxHQUFHLGNBQWM7UUFBQyxPQUFPLElBQUk7SUFBQTtBQUNyRDtBQUVBLFFBQVEsU0FBUyxHQUFHLFNBQVUsTUFBTSxFQUFFLElBQUksRUFBRTtJQUMxQyxPQUFPLElBQUksQ0FBQyxRQUFRLE9BQU8sQ0FBQyxTQUFVLEdBQUcsRUFBRTtRQUN6QyxJQUFJLFFBQVEsYUFBYSxRQUFRLGdCQUFnQixLQUFLLGNBQWMsQ0FBQyxNQUNuRTtRQUdGLE9BQU8sY0FBYyxDQUFDLE1BQU0sS0FBSztZQUMvQixZQUFZLElBQUk7WUFDaEIsS0FBSyxTQUFMLE1BQWlCO2dCQUNmLE9BQU8sTUFBTSxDQUFDLElBQUk7WUFDcEI7UUFDRjtJQUNGO0lBRUEsT0FBTztBQUNUO0FBRUEsUUFBUSxNQUFNLEdBQUcsU0FBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUM5QyxPQUFPLGNBQWMsQ0FBQyxNQUFNLFVBQVU7UUFDcEMsWUFBWSxJQUFJO1FBQ2hCLEtBQUs7SUFDUDtBQUNGIiwic291cmNlcyI6WyJzaXRlL2NvcmFsLnJ1L2pzL21haW4uY29mZmVlIiwic2l0ZS9jb21tb24vanMvdXRpbHMuY29mZmVlIiwiLi4vLi4vQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvQGNvcmFsdHJhdmVsY2VudGVyL2IyYy1sYW5kaW5nL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvc3JjL19vYmplY3Rfc3ByZWFkLm1qcyIsIi4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL0Bjb3JhbHRyYXZlbGNlbnRlci9iMmMtbGFuZGluZy9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fZGVmaW5lX3Byb3BlcnR5Lm1qcyIsIi4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL0Bjb3JhbHRyYXZlbGNlbnRlci9iMmMtbGFuZGluZy9ub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaXhMYXlvdXQsIGF1dG9wbGF5VmltZW8gfSBmcm9tICcvc2l0ZS9jb21tb24vanMvdXRpbHMuY29mZmVlJ1xuXG5maXhMYXlvdXQoKVxuYXV0b3BsYXlWaW1lbygpIiwiZXhwb3J0IEFTQVAgPSAoLT5cbiAgICBmbnMgPSBbXVxuICAgIGNhbGxhbGwgPSAoKSAtPlxuICAgICAgICBmKCkgd2hpbGUgZiA9IGZucy5zaGlmdCgpXG4gICAgaWYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICdET01Db250ZW50TG9hZGVkJywgY2FsbGFsbCwgZmFsc2VcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgJ2xvYWQnLCBjYWxsYWxsLCBmYWxzZVxuICAgIGVsc2UgaWYgZG9jdW1lbnQuYXR0YWNoRXZlbnRcbiAgICAgICAgZG9jdW1lbnQuYXR0YWNoRXZlbnQgJ29ucmVhZHlzdGF0ZWNoYW5nZScsIGNhbGxhbGxcbiAgICAgICAgd2luZG93LmF0dGFjaEV2ZW50ICdvbmxvYWQnLCBjYWxsYWxsXG4gICAgKGZuKSAtPlxuICAgICAgICBmbnMucHVzaCBmblxuICAgICAgICBjYWxsYWxsKCkgaWYgZG9jdW1lbnQucmVhZHlTdGF0ZSBpcyAnY29tcGxldGUnXG4pKClcblxuZXhwb3J0IHByZWxvYWQgPSAod2hhdCwgZm4pIC0+XG4gICAgQVNBUCAtPlxuICAgICAgICB3aGF0ID0gW3doYXRdIHVubGVzcyAgQXJyYXkuaXNBcnJheSh3aGF0KVxuICAgICAgICAkLndoZW4uYXBwbHkoJCwgKCQuYWpheChsaWIsIGRhdGFUeXBlOiAnc2NyaXB0JywgY2FjaGU6IHRydWUpIGZvciBsaWIgaW4gd2hhdCkpLmRvbmUgLT4gZm4/KClcblxuZXhwb3J0IHF1ZXJ5UGFyYW0gPSAocCwgbm9jYXNlKSAtPlxuICAgIHBhcmFtc19rdiA9IGxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkuc3BsaXQoJyYnKVxuICAgIHBhcmFtcyA9IHt9XG4gICAgcGFyYW1zX2t2LmZvckVhY2ggKGt2KSAtPiBrX3YgPSBrdi5zcGxpdCgnPScpOyBwYXJhbXNba192WzBdXSA9IGtfdlsxXSBvciAnJ1xuICAgIGlmIHBcbiAgICAgICAgaWYgbm9jYXNlXG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trXSkgZm9yIGsgb2YgcGFyYW1zIHdoZW4gay50b1VwcGVyQ2FzZSgpID09IHAudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50IHBhcmFtc1twXVxuICAgIHBhcmFtc1xuXG5leHBvcnQgYXJyYXlPZk5vZGVzV2l0aCA9ICh3aGF0KSAtPlxuICAgIGlmIHdoYXQuanF1ZXJ5XG4gICAgICAgIG5vZGVzID0gd2hhdC50b0FycmF5KClcbiAgICBlbHNlIGlmIHdoYXQgaW5zdGFuY2VvZiBBcnJheVxuICAgICAgICBub2RlcyA9IEFycmF5LmZyb20gd2hhdFxuICAgIGVsc2UgaWYgd2hhdCBpbnN0YW5jZW9mIE5vZGVcbiAgICAgICAgbm9kZXMgPSBbd2hhdF1cbiAgICBlbHNlIGlmIHdoYXQgaW5zdGFuY2VvZiBOb2RlTGlzdFxuICAgICAgICBub2RlcyA9IEFycmF5LmZyb20gd2hhdFxuICAgIGVsc2UgaWYgdHlwZW9mIHdoYXQgPT0gJ3N0cmluZydcbiAgICAgICAgbm9kZXMgPSBBcnJheS5mcm9tIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgd2hhdFxuICAgIGVsc2VcbiAgICAgICAgdGhyb3cgXCIqKiogYXJyYXlPZk5vZGVzV2l0aDogR290IHNvbWV0aGluZyB1bnVzYWJsZSBhcyAnd2hhdCcgcGFyYW1cIlxuICAgIG5vZGVzXG5cbmV4cG9ydCBkZWJvdW5jZSA9IChmdW5jLCB0aHJlc2hvbGQsIGV4ZWNBc2FwKSAtPlxuICAgIHRpbWVvdXQgPSBudWxsXG4gICAgKGFyZ3MuLi4pIC0+XG4gICAgICAgIG9iaiA9IHRoaXNcbiAgICAgICAgZGVsYXllZCA9IC0+XG4gICAgICAgICAgICBmdW5jLmFwcGx5KG9iaiwgYXJncykgdW5sZXNzIGV4ZWNBc2FwXG4gICAgICAgICAgICB0aW1lb3V0ID0gbnVsbFxuICAgICAgICBpZiB0aW1lb3V0XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgZWxzZSBpZiAoZXhlY0FzYXApXG4gICAgICAgICAgICBmdW5jLmFwcGx5KG9iaiwgYXJncylcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQgZGVsYXllZCwgdGhyZXNob2xkIHx8ICgxMDAwIC8gMjUpXG5cbmV4cG9ydCByZXNwb25zaXZlSGFuZGxlciA9IChtZWRpYV9xdWVyeSwgbWF0Y2hfaGFuZGxlciwgdW5tYXRjaF9oYW5kbGVyKSAtPlxuICAgIGxheW91dCA9IG1hdGNoTWVkaWEgbWVkaWFfcXVlcnlcbiAgICBsYXlvdXQuYWRkRXZlbnRMaXN0ZW5lciAnY2hhbmdlJywgKGUpIC0+XG4gICAgICAgIGlmIGUubWF0Y2hlcyB0aGVuIG1hdGNoX2hhbmRsZXIoKSBlbHNlIHVubWF0Y2hfaGFuZGxlcigpXG4gICAgaWYgbGF5b3V0Lm1hdGNoZXMgdGhlbiBtYXRjaF9oYW5kbGVyKCkgZWxzZSB1bm1hdGNoX2hhbmRsZXIoKVxuICAgIGxheW91dFxuXG5leHBvcnQgYXV0b3BsYXlWaW1lbyA9IChsb29rdXBfc2VsZWN0b3IgPSAnLnZpbWVvLXZpZGVvLWJveCBbZGF0YS12aW1lby12aWRdJywgdmlkX2F0dHIgPSAnZGF0YS12aW1lby12aWQnLCBvYnNlcnZlcl9vcHRpb25zID0ge30pIC0+XG4gICAgdmJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChsb29rdXBfc2VsZWN0b3IpXG4gICAgaWYgdmJveGVzLmxlbmd0aFxuICAgICAgICBwcmVsb2FkICdodHRwczovL3BsYXllci52aW1lby5jb20vYXBpL3BsYXllci5qcycsIC0+XG4gICAgICAgICAgICBpbyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlciAoZW50cmllcywgb2JzZXJ2ZXIpIC0+XG4gICAgICAgICAgICAgICAgZm9yIGVudHJ5IGluIGVudHJpZXNcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyX2VsID0gZW50cnkudGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHZwbGF5ZXIgPSBwbGF5ZXJfZWxbJ3ZpbWVvLXBsYXllciddXG4gICAgICAgICAgICAgICAgICAgIGlmIGVudHJ5LmlzSW50ZXJzZWN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiB2cGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnBsYXllci5wbGF5KClcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2cGxheWVyID0gbmV3IFZpbWVvLlBsYXllciBwbGF5ZXJfZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwbGF5ZXJfZWwuZ2V0QXR0cmlidXRlIHZpZF9hdHRyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheXNpbmxpbmU6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BhdXNlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5bGluZTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcl9lbFsndmltZW8tcGxheWVyJ10gPSB2cGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnBsYXllci5vbiAncGxheScsIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQgJ3BsYXliYWNrJ1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB2cGxheWVyPy5wYXVzZSgpXG4gICAgICAgICAgICAsIHsgdGhyZXNob2xkOiAwLjMzLCBvYnNlcnZlcl9vcHRpb25zLi4uIH1cbiAgICAgICAgICAgIGlvLm9ic2VydmUgdmJveCBmb3IgdmJveCBpbiB2Ym94ZXNcblxuZXhwb3J0IHdhdGNoSW50ZXJzZWN0aW9uID0gKHRhcmdldHMsIG9wdGlvbnMsIHllc19oYW5kbGVyLCBub19oYW5kbGVyKSAtPlxuICAgIGlvID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyIChlbnRyaWVzLCBvYnNlcnZlcikgLT5cbiAgICAgICAgZm9yIGVudHJ5IGluIGVudHJpZXNcbiAgICAgICAgICAgIGlmIGVudHJ5LmlzSW50ZXJzZWN0aW5nIHRoZW4geWVzX2hhbmRsZXI/LmNhbGwoZW50cnkudGFyZ2V0KSBlbHNlIG5vX2hhbmRsZXI/LmNhbGwoZW50cnkudGFyZ2V0KVxuICAgICwgeyB0aHJlc2hvbGQ6IDEsIG9wdGlvbnMuLi4gfVxuICAgIGlvLm9ic2VydmUgdGFyZ2V0IGZvciB0YXJnZXQgaW4gYXJyYXlPZk5vZGVzV2l0aCB0YXJnZXRzXG4gICAgaW9cblxuXG5leHBvcnQgZml4TGF5b3V0ID0gKCkgLT5cbiAgICBpZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLnVuZGVyYnJvdycpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgndW5kZXJicm93JylcbiAgICBBU0FQIC0+XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24uaGVybycpLmZvckVhY2ggKGhlcm9TZWN0aW9uKSAtPlxuICAgICAgICAgICAga2xhc3NlcyA9IGhlcm9TZWN0aW9uLmNsb3Nlc3QoJy53aWRnZXRjb250YWluZXInKS5jbGFzc0xpc3RcbiAgICAgICAgICAgIGtsYXNzZXMuYWRkKCdoZXJvJylcbiAgICAgICAgICAgIGtsYXNzZXMucmVtb3ZlKCdvdGktY29udGVudC10eXBvZ3JhcGh5JylcbiIsImltcG9ydCBkZWZpbmVQcm9wZXJ0eSBmcm9tICcuL19kZWZpbmVfcHJvcGVydHkubWpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6Im1haW4uNWQyMzUyODEuanMubWFwIn0=
