var At = Object.defineProperty;
var kt = (tt, f, Z) => f in tt ? At(tt, f, { enumerable: !0, configurable: !0, writable: !0, value: Z }) : tt[f] = Z;
var vt = (tt, f, Z) => (kt(tt, typeof f != "symbol" ? f + "" : f, Z), Z);
function Mt(tt) {
  if (tt.__esModule)
    return tt;
  var f = tt.default;
  if (typeof f == "function") {
    var Z = function Q() {
      if (this instanceof Q) {
        var b = [null];
        b.push.apply(b, arguments);
        var it = Function.bind.apply(f, b);
        return new it();
      }
      return f.apply(this, arguments);
    };
    Z.prototype = f.prototype;
  } else
    Z = {};
  return Object.defineProperty(Z, "__esModule", { value: !0 }), Object.keys(tt).forEach(function(Q) {
    var b = Object.getOwnPropertyDescriptor(tt, Q);
    Object.defineProperty(Z, Q, b.get ? b : {
      enumerable: !0,
      get: function() {
        return tt[Q];
      }
    });
  }), Z;
}
var dt = {};
const Ft = {}, Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ft
}, Symbol.toStringTag, { value: "Module" })), St = /* @__PURE__ */ Mt(Lt);
(function(tt) {
  /*! Fabric.js Copyright 2008-2015, Printio (Juriy Zaytsev, Maxim Chernyak) */
  var f = f || { version: "5.3.0" };
  if (tt.fabric = f, typeof document < "u" && typeof window < "u")
    document instanceof (typeof HTMLDocument < "u" ? HTMLDocument : Document) ? f.document = document : f.document = document.implementation.createHTMLDocument(""), f.window = window;
  else {
    var Z = St, Q = new Z.JSDOM(
      decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"),
      {
        features: {
          FetchExternalResources: ["img"]
        },
        resources: "usable"
      }
    ).window;
    f.document = Q.document, f.jsdomImplForWrapper = St.implForWrapper, f.nodeCanvas = St.Canvas, f.window = Q, DOMParser = f.window.DOMParser;
  }
  if (f.isTouchSupported = "ontouchstart" in f.window || "ontouchstart" in f.document || f.window && f.window.navigator && f.window.navigator.maxTouchPoints > 0, f.isLikelyNode = typeof Buffer < "u" && typeof window > "u", f.SHARED_ATTRIBUTES = [
    "display",
    "transform",
    "fill",
    "fill-opacity",
    "fill-rule",
    "opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-linecap",
    "stroke-dashoffset",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "id",
    "paint-order",
    "vector-effect",
    "instantiated_by_use",
    "clip-path"
  ], f.DPI = 96, f.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)", f.commaWsp = "(?:\\s+,?\\s*|,\\s*)", f.rePathCommand = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/ig, f.reNonWord = /[ \n\.,;!\?\-]/, f.fontPaths = {}, f.iMatrix = [1, 0, 0, 1, 0, 0], f.svgNS = "http://www.w3.org/2000/svg", f.perfLimitSizeTotal = 2097152, f.maxCacheSideLimit = 4096, f.minCacheSideLimit = 256, f.charWidthsCache = {}, f.textureSize = 2048, f.disableStyleCopyPaste = !1, f.enableGLFiltering = !0, f.devicePixelRatio = f.window.devicePixelRatio || f.window.webkitDevicePixelRatio || f.window.mozDevicePixelRatio || 1, f.browserShadowBlurConstant = 1, f.arcToSegmentsCache = {}, f.boundsOfCurveCache = {}, f.cachesBoundsOfCurve = !0, f.forceGLPutImageData = !1, f.initFilterBackend = function() {
    if (f.enableGLFiltering && f.isWebglSupported && f.isWebglSupported(f.textureSize))
      return console.log("max texture size: " + f.maxTextureSize), new f.WebglFilterBackend({ tileSize: f.textureSize });
    if (f.Canvas2dFilterBackend)
      return new f.Canvas2dFilterBackend();
  }, typeof document < "u" && typeof window < "u" && (window.fabric = f), typeof b > "u")
    var b = {};
  if (function(c) {
    c.modifyEventListener = !1, c.modifySelectors = !1, c.configure = function(p) {
      isFinite(p.modifyEventListener) && (c.modifyEventListener = p.modifyEventListener), isFinite(p.modifySelectors) && (c.modifySelectors = p.modifySelectors), g === !1 && c.modifyEventListener && v(), m === !1 && c.modifySelectors && C();
    }, c.add = function(p, x, A, k) {
      return h(p, x, A, k, "add");
    }, c.remove = function(p, x, A, k) {
      return h(p, x, A, k, "remove");
    }, c.returnFalse = function(p) {
      return !1;
    }, c.stop = function(p) {
      p && (p.stopPropagation && p.stopPropagation(), p.cancelBubble = !0, p.cancelBubbleCount = 0);
    }, c.prevent = function(p) {
      p && (p.preventDefault ? p.preventDefault() : p.preventManipulation ? p.preventManipulation() : p.returnValue = !1);
    }, c.cancel = function(p) {
      c.stop(p), c.prevent(p);
    }, c.blur = function() {
      var p = document.activeElement;
      if (p) {
        var x = document.activeElement.nodeName;
        (x === "INPUT" || x === "TEXTAREA" || p.contentEditable === "true") && p.blur && p.blur();
      }
    }, c.getEventSupport = function(p, x) {
      if (typeof p == "string" && (x = p, p = window), x = "on" + x, x in p)
        return !0;
      if (p.setAttribute || (p = document.createElement("div")), p.setAttribute && p.removeAttribute) {
        p.setAttribute(x, "");
        var A = typeof p[x] == "function";
        return typeof p[x] < "u" && (p[x] = null), p.removeAttribute(x), A;
      }
    };
    var n = function(p) {
      if (!p || typeof p != "object")
        return p;
      var x = new p.constructor();
      for (var A in p)
        !p[A] || typeof p[A] != "object" ? x[A] = p[A] : x[A] = n(p[A]);
      return x;
    }, h = function(p, x, A, k, W, N) {
      if (k = k || {}, String(p) === "[object Object]") {
        var H = p;
        if (p = H.target, delete H.target, H.type && H.listener) {
          x = H.type, delete H.type, A = H.listener, delete H.listener;
          for (var z in H)
            k[z] = H[z];
        } else {
          for (var K in H) {
            var $ = H[K];
            typeof $ != "function" && (k[K] = $);
          }
          var J = {};
          for (var z in H) {
            var K = z.split(","), y = H[z], O = {};
            for (var T in k)
              O[T] = k[T];
            if (typeof y == "function")
              var A = y;
            else if (typeof y.listener == "function") {
              var A = y.listener;
              for (var T in y)
                typeof y[T] != "function" && (O[T] = y[T]);
            } else
              continue;
            for (var w = 0; w < K.length; w++)
              J[z] = b.add(p, K[w], A, O, W);
          }
          return J;
        }
      }
      if (!(!p || !x || !A)) {
        if (typeof p == "string" && x === "ready")
          if (window.eventjs_stallOnReady)
            x = "load", p = window;
          else {
            var F = (/* @__PURE__ */ new Date()).getTime(), S = k.timeout, _ = k.interval || 1e3 / 60, P = window.setInterval(function() {
              (/* @__PURE__ */ new Date()).getTime() - F > S && window.clearInterval(P), document.querySelector(p) && (window.clearInterval(P), setTimeout(A, 1));
            }, _);
            return;
          }
        if (typeof p == "string") {
          if (p = document.querySelectorAll(p), p.length === 0)
            return t("Missing target on listener!", arguments);
          p.length === 1 && (p = p[0]);
        }
        var D, I = {};
        if (p.length > 0 && p !== window) {
          for (var M = 0, Y = p.length; M < Y; M++)
            D = h(p[M], x, A, n(k), W), D && (I[M] = D);
          return a(I);
        }
        if (typeof x == "string" && (x = x.toLowerCase(), x.indexOf(" ") !== -1 ? x = x.split(" ") : x.indexOf(",") !== -1 && (x = x.split(","))), typeof x != "string") {
          if (typeof x.length == "number")
            for (var U = 0, q = x.length; U < q; U++)
              D = h(p, x[U], A, n(k), W), D && (I[x[U]] = D);
          else
            for (var z in x)
              typeof x[z] == "function" ? D = h(p, z, x[z], n(k), W) : D = h(p, z, x[z].listener, n(x[z]), W), D && (I[z] = D);
          return a(I);
        } else
          x.indexOf("on") === 0 && (x = x.slice(2));
        if (typeof p != "object")
          return t("Target is not defined!", arguments);
        if (typeof A != "function")
          return t("Listener is not a function!", arguments);
        var j = k.useCapture || !1, E = l(p) + "." + l(A) + "." + (j ? 1 : 0);
        if (c.Gesture && c.Gesture._gestureHandlers[x]) {
          if (E = x + E, W === "remove") {
            if (!o[E])
              return;
            o[E].remove(), delete o[E];
          } else if (W === "add") {
            if (o[E])
              return o[E].add(), o[E];
            if (k.useCall && !c.modifyEventListener) {
              var R = A;
              A = function(G, V) {
                for (var nt in V)
                  G[nt] = V[nt];
                return R.call(p, G);
              };
            }
            k.gesture = x, k.target = p, k.listener = A, k.fromOverwrite = N, o[E] = c.proxy[x](k);
          }
          return o[E];
        } else {
          for (var B = s(x), w = 0, L; w < B.length; w++)
            if (x = B[w], L = x + "." + E, W === "remove") {
              if (!o[L])
                continue;
              p[d](x, A, j), delete o[L];
            } else if (W === "add") {
              if (o[L])
                return o[L];
              p[u](x, A, j), o[L] = {
                id: L,
                type: x,
                target: p,
                listener: A,
                remove: function() {
                  for (var V = 0; V < B.length; V++)
                    c.remove(p, B[V], A, k);
                }
              };
            }
          return o[L];
        }
      }
    }, a = function(p) {
      return {
        remove: function() {
          for (var x in p)
            p[x].remove();
        },
        add: function() {
          for (var x in p)
            p[x].add();
        }
      };
    }, t = function(p, x) {
      typeof console > "u" || typeof console.error > "u" || console.error(p, x);
    }, r = {
      msPointer: ["MSPointerDown", "MSPointerMove", "MSPointerUp"],
      touch: ["touchstart", "touchmove", "touchend"],
      mouse: ["mousedown", "mousemove", "mouseup"]
    }, e = {
      // MSPointer
      MSPointerDown: 0,
      MSPointerMove: 1,
      MSPointerUp: 2,
      // Touch
      touchstart: 0,
      touchmove: 1,
      touchend: 2,
      // Mouse
      mousedown: 0,
      mousemove: 1,
      mouseup: 2
    };
    (function() {
      c.supports = {}, window.navigator.msPointerEnabled && (c.supports.msPointer = !0), c.getEventSupport("touchstart") && (c.supports.touch = !0), c.getEventSupport("mousedown") && (c.supports.mouse = !0);
    })();
    var s = function() {
      return function(p) {
        var x = document.addEventListener ? "" : "on", A = e[p];
        if (isFinite(A)) {
          var k = [];
          for (var W in c.supports)
            k.push(x + r[W][A]);
          return k;
        } else
          return [x + p];
      };
    }(), o = {}, i = 0, l = function(p) {
      return p === window ? "#window" : p === document ? "#document" : (p.uniqueID || (p.uniqueID = "e" + i++), p.uniqueID);
    }, u = document.addEventListener ? "addEventListener" : "attachEvent", d = document.removeEventListener ? "removeEventListener" : "detachEvent";
    c.createPointerEvent = function(p, x, A) {
      var k = x.gesture, W = x.target, N = p.changedTouches || c.proxy.getCoords(p);
      if (N.length) {
        var H = N[0];
        x.pointers = A ? [] : N, x.pageX = H.pageX, x.pageY = H.pageY, x.x = x.pageX, x.y = x.pageY;
      }
      var z = document.createEvent("Event");
      z.initEvent(k, !0, !0), z.originalEvent = p;
      for (var K in x)
        K !== "target" && (z[K] = x[K]);
      var $ = z.type;
      c.Gesture && c.Gesture._gestureHandlers[$] && x.oldListener.call(W, z, x, !1);
    };
    var g = !1, v = function() {
      if (window.HTMLElement) {
        var p = function(x) {
          var A = function(k) {
            var W = k + "EventListener", N = x[W];
            x[W] = function(H, z, K) {
              if (c.Gesture && c.Gesture._gestureHandlers[H]) {
                var $ = K;
                typeof K == "object" ? $.useCall = !0 : $ = {
                  useCall: !0,
                  useCapture: K
                }, h(this, H, z, $, k, !0);
              } else
                for (var J = s(H), y = 0; y < J.length; y++)
                  N.call(this, J[y], z, K);
            };
          };
          A("add"), A("remove");
        };
        navigator.userAgent.match(/Firefox/) ? (p(HTMLDivElement.prototype), p(HTMLCanvasElement.prototype)) : p(HTMLElement.prototype), p(document), p(window);
      }
    }, m = !1, C = function() {
      var p = NodeList.prototype;
      p.removeEventListener = function(x, A, k) {
        for (var W = 0, N = this.length; W < N; W++)
          this[W].removeEventListener(x, A, k);
      }, p.addEventListener = function(x, A, k) {
        for (var W = 0, N = this.length; W < N; W++)
          this[W].addEventListener(x, A, k);
      };
    };
    return c;
  }(b), typeof b > "u")
    var b = {};
  if (typeof b.proxy > "u" && (b.proxy = {}), b.proxy = function(c) {
    c.pointerSetup = function(a, t) {
      a.target = a.target || window, a.doc = a.target.ownerDocument || a.target, a.minFingers = a.minFingers || a.fingers || 1, a.maxFingers = a.maxFingers || a.fingers || 1 / 0, a.position = a.position || "relative", delete a.fingers, t = t || {}, t.enabled = !0, t.gesture = a.gesture, t.target = a.target, t.env = a.env, b.modifyEventListener && a.fromOverwrite && (a.oldListener = a.listener, a.listener = b.createPointerEvent);
      var r = 0, e = t.gesture.indexOf("pointer") === 0 && b.modifyEventListener ? "pointer" : "mouse";
      return a.oldListener && (t.oldListener = a.oldListener), t.listener = a.listener, t.proxy = function(s) {
        t.defaultListener = a.listener, a.listener = s, s(a.event, t);
      }, t.add = function() {
        t.enabled !== !0 && (a.onPointerDown && b.add(a.target, e + "down", a.onPointerDown), a.onPointerMove && b.add(a.doc, e + "move", a.onPointerMove), a.onPointerUp && b.add(a.doc, e + "up", a.onPointerUp), t.enabled = !0);
      }, t.remove = function() {
        t.enabled !== !1 && (a.onPointerDown && b.remove(a.target, e + "down", a.onPointerDown), a.onPointerMove && b.remove(a.doc, e + "move", a.onPointerMove), a.onPointerUp && b.remove(a.doc, e + "up", a.onPointerUp), t.reset(), t.enabled = !1);
      }, t.pause = function(s) {
        a.onPointerMove && (!s || s.move) && b.remove(a.doc, e + "move", a.onPointerMove), a.onPointerUp && (!s || s.up) && b.remove(a.doc, e + "up", a.onPointerUp), r = a.fingers, a.fingers = 0;
      }, t.resume = function(s) {
        a.onPointerMove && (!s || s.move) && b.add(a.doc, e + "move", a.onPointerMove), a.onPointerUp && (!s || s.up) && b.add(a.doc, e + "up", a.onPointerUp), a.fingers = r;
      }, t.reset = function() {
        a.tracker = {}, a.fingers = 0;
      }, t;
    };
    var n = b.supports;
    b.isMouse = !!n.mouse, b.isMSPointer = !!n.touch, b.isTouch = !!n.msPointer, c.pointerStart = function(a, t, r) {
      var e = (a.type || "mousedown").toUpperCase();
      e.indexOf("MOUSE") === 0 ? (b.isMouse = !0, b.isTouch = !1, b.isMSPointer = !1) : e.indexOf("TOUCH") === 0 ? (b.isMouse = !1, b.isTouch = !0, b.isMSPointer = !1) : e.indexOf("MSPOINTER") === 0 && (b.isMouse = !1, b.isTouch = !1, b.isMSPointer = !0);
      var s = function(p, x) {
        var A = r.bbox, k = i[x] = {};
        switch (r.position) {
          case "absolute":
            k.offsetX = 0, k.offsetY = 0;
            break;
          case "differenceFromLast":
            k.offsetX = p.pageX, k.offsetY = p.pageY;
            break;
          case "difference":
            k.offsetX = p.pageX, k.offsetY = p.pageY;
            break;
          case "move":
            k.offsetX = p.pageX - A.x1, k.offsetY = p.pageY - A.y1;
            break;
          default:
            k.offsetX = A.x1 - A.scrollLeft, k.offsetY = A.y1 - A.scrollTop;
            break;
        }
        var W = p.pageX - k.offsetX, N = p.pageY - k.offsetY;
        k.rotation = 0, k.scale = 1, k.startTime = k.moveTime = (/* @__PURE__ */ new Date()).getTime(), k.move = { x: W, y: N }, k.start = { x: W, y: N }, r.fingers++;
      };
      r.event = a, t.defaultListener && (r.listener = t.defaultListener, delete t.defaultListener);
      for (var o = !r.fingers, i = r.tracker, l = a.changedTouches || c.getCoords(a), u = l.length, d = 0; d < u; d++) {
        var g = l[d], v = g.identifier || 1 / 0;
        if (r.fingers) {
          if (r.fingers >= r.maxFingers) {
            var C = [];
            for (var v in r.tracker)
              C.push(v);
            return t.identifier = C.join(","), o;
          }
          for (var m in i)
            if (i[m].up) {
              delete i[m], s(g, v), r.cancel = !0;
              break;
            }
          if (i[v])
            continue;
          s(g, v);
        } else
          i = r.tracker = {}, t.bbox = r.bbox = c.getBoundingBox(r.target), r.fingers = 0, r.cancel = !1, s(g, v);
      }
      var C = [];
      for (var v in r.tracker)
        C.push(v);
      return t.identifier = C.join(","), o;
    }, c.pointerEnd = function(a, t, r, e) {
      for (var s = a.touches || [], o = s.length, i = {}, l = 0; l < o; l++) {
        var u = s[l], d = u.identifier;
        i[d || 1 / 0] = !0;
      }
      for (var d in r.tracker) {
        var g = r.tracker[d];
        i[d] || g.up || (e && e({
          pageX: g.pageX,
          pageY: g.pageY,
          changedTouches: [{
            pageX: g.pageX,
            pageY: g.pageY,
            identifier: d === "Infinity" ? 1 / 0 : d
          }]
        }, "up"), g.up = !0, r.fingers--);
      }
      if (r.fingers !== 0)
        return !1;
      var v = [];
      r.gestureFingers = 0;
      for (var d in r.tracker)
        r.gestureFingers++, v.push(d);
      return t.identifier = v.join(","), !0;
    }, c.getCoords = function(a) {
      return typeof a.pageX < "u" ? c.getCoords = function(t) {
        return Array({
          type: "mouse",
          x: t.pageX,
          y: t.pageY,
          pageX: t.pageX,
          pageY: t.pageY,
          identifier: t.pointerId || 1 / 0
          // pointerId is MS
        });
      } : c.getCoords = function(t) {
        var r = document.documentElement;
        return t = t || window.event, Array({
          type: "mouse",
          x: t.clientX + r.scrollLeft,
          y: t.clientY + r.scrollTop,
          pageX: t.clientX + r.scrollLeft,
          pageY: t.clientY + r.scrollTop,
          identifier: 1 / 0
        });
      }, c.getCoords(a);
    }, c.getCoord = function(a) {
      if ("ontouchstart" in window) {
        var t = 0, r = 0;
        c.getCoord = function(e) {
          var s = e.changedTouches;
          return s && s.length ? {
            x: t = s[0].pageX,
            y: r = s[0].pageY
          } : {
            x: t,
            y: r
          };
        };
      } else
        typeof a.pageX < "u" && typeof a.pageY < "u" ? c.getCoord = function(e) {
          return {
            x: e.pageX,
            y: e.pageY
          };
        } : c.getCoord = function(e) {
          var s = document.documentElement;
          return e = e || window.event, {
            x: e.clientX + s.scrollLeft,
            y: e.clientY + s.scrollTop
          };
        };
      return c.getCoord(a);
    };
    var h = function(a, t) {
      var r = parseFloat(a.getPropertyValue(t), 10);
      return isFinite(r) ? r : 0;
    };
    return c.getBoundingBox = function(a) {
      (a === window || a === document) && (a = document.body);
      var t = {}, r = a.getBoundingClientRect();
      t.width = r.width, t.height = r.height, t.x1 = r.left, t.y1 = r.top, t.scaleX = r.width / a.offsetWidth || 1, t.scaleY = r.height / a.offsetHeight || 1, t.scrollLeft = 0, t.scrollTop = 0;
      var e = window.getComputedStyle(a), s = e.getPropertyValue("box-sizing") === "border-box";
      if (s === !1) {
        var o = h(e, "border-left-width"), i = h(e, "border-right-width"), l = h(e, "border-bottom-width"), u = h(e, "border-top-width");
        t.border = [o, i, u, l], t.x1 += o, t.y1 += u, t.width -= i + o, t.height -= l + u;
      }
      t.x2 = t.x1 + t.width, t.y2 = t.y1 + t.height;
      for (var d = e.getPropertyValue("position"), g = d === "fixed" ? a : a.parentNode; g !== null && !(g === document.body || g.scrollTop === void 0); ) {
        var e = window.getComputedStyle(g), d = e.getPropertyValue("position");
        if (d !== "absolute")
          if (d === "fixed") {
            t.scrollTop -= g.parentNode.scrollTop, t.scrollLeft -= g.parentNode.scrollLeft;
            break;
          } else
            t.scrollLeft += g.scrollLeft, t.scrollTop += g.scrollTop;
        g = g.parentNode;
      }
      return t.scrollBodyLeft = window.pageXOffset !== void 0 ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, t.scrollBodyTop = window.pageYOffset !== void 0 ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop, t.scrollLeft -= t.scrollBodyLeft, t.scrollTop -= t.scrollBodyTop, t;
    }, function() {
      var a = navigator.userAgent.toLowerCase(), t = a.indexOf("macintosh") !== -1, r;
      t && a.indexOf("khtml") !== -1 ? r = { 91: !0, 93: !0 } : t && a.indexOf("firefox") !== -1 ? r = { 224: !0 } : r = { 17: !0 }, (c.metaTrackerReset = function() {
        b.fnKey = c.fnKey = !1, b.metaKey = c.metaKey = !1, b.escKey = c.escKey = !1, b.ctrlKey = c.ctrlKey = !1, b.shiftKey = c.shiftKey = !1, b.altKey = c.altKey = !1;
      })(), c.metaTracker = function(e) {
        var s = e.type === "keydown";
        e.keyCode === 27 && (b.escKey = c.escKey = s), r[e.keyCode] && (b.metaKey = c.metaKey = s), b.ctrlKey = c.ctrlKey = e.ctrlKey, b.shiftKey = c.shiftKey = e.shiftKey, b.altKey = c.altKey = e.altKey;
      };
    }(), c;
  }(b.proxy), typeof b > "u")
    var b = {};
  if (b.MutationObserver = function() {
    var c = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, n = !c && function() {
      var h = document.createElement("p"), a = !1, t = function() {
        a = !0;
      };
      if (h.addEventListener)
        h.addEventListener("DOMAttrModified", t, !1);
      else if (h.attachEvent)
        h.attachEvent("onDOMAttrModified", t);
      else
        return !1;
      return h.setAttribute("id", "target"), a;
    }();
    return function(h, a) {
      if (c) {
        var t = {
          subtree: !1,
          attributes: !0
        }, r = new c(function(e) {
          e.forEach(function(s) {
            a.call(s.target, s.attributeName);
          });
        });
        r.observe(h, t);
      } else
        n ? b.add(h, "DOMAttrModified", function(e) {
          a.call(h, e.attrName);
        }) : "onpropertychange" in document.body && b.add(h, "propertychange", function(e) {
          a.call(h, window.event.propertyName);
        });
    };
  }(), typeof b > "u")
    var b = {};
  if (typeof b.proxy > "u" && (b.proxy = {}), b.proxy = function(c) {
    return c.click = function(n) {
      n.gesture = n.gesture || "click", n.maxFingers = n.maxFingers || n.fingers || 1, n.onPointerDown = function(a) {
        c.pointerStart(a, h, n) && b.add(n.target, "mouseup", n.onPointerUp);
      }, n.onPointerUp = function(a) {
        if (c.pointerEnd(a, h, n)) {
          b.remove(n.target, "mouseup", n.onPointerUp);
          var t = a.changedTouches || c.getCoords(a), r = t[0], e = n.bbox, s = c.getBoundingBox(n.target), o = r.pageY - s.scrollBodyTop, i = r.pageX - s.scrollBodyLeft;
          if (i > e.x1 && o > e.y1 && i < e.x2 && o < e.y2 && e.scrollTop === s.scrollTop) {
            for (var l in n.tracker)
              break;
            var u = n.tracker[l];
            h.x = u.start.x, h.y = u.start.y, n.listener(a, h);
          }
        }
      };
      var h = c.pointerSetup(n);
      return h.state = "click", b.add(n.target, "mousedown", n.onPointerDown), h;
    }, b.Gesture = b.Gesture || {}, b.Gesture._gestureHandlers = b.Gesture._gestureHandlers || {}, b.Gesture._gestureHandlers.click = c.click, c;
  }(b.proxy), typeof b > "u")
    var b = {};
  if (typeof b.proxy > "u" && (b.proxy = {}), b.proxy = function(c) {
    return c.dbltap = c.dblclick = function(n) {
      n.gesture = n.gesture || "dbltap", n.maxFingers = n.maxFingers || n.fingers || 1;
      var h = 700, a, t, r, e, s;
      n.onPointerDown = function(i) {
        var l = i.changedTouches || c.getCoords(i);
        a && !t ? (s = l[0], t = (/* @__PURE__ */ new Date()).getTime() - a) : (e = l[0], a = (/* @__PURE__ */ new Date()).getTime(), t = 0, clearTimeout(r), r = setTimeout(function() {
          a = 0;
        }, h)), c.pointerStart(i, o, n) && (b.add(n.target, "mousemove", n.onPointerMove).listener(i), b.add(n.target, "mouseup", n.onPointerUp));
      }, n.onPointerMove = function(i) {
        if (a && !t) {
          var l = i.changedTouches || c.getCoords(i);
          s = l[0];
        }
        var u = n.bbox, d = s.pageX - u.x1, g = s.pageY - u.y1;
        d > 0 && d < u.width && // Within target coordinates..
        g > 0 && g < u.height && Math.abs(s.pageX - e.pageX) <= 25 && // Within drift deviance.
        Math.abs(s.pageY - e.pageY) <= 25 || (b.remove(n.target, "mousemove", n.onPointerMove), clearTimeout(r), a = t = 0);
      }, n.onPointerUp = function(i) {
        if (c.pointerEnd(i, o, n) && (b.remove(n.target, "mousemove", n.onPointerMove), b.remove(n.target, "mouseup", n.onPointerUp)), a && t) {
          if (t <= h) {
            o.state = n.gesture;
            for (var l in n.tracker)
              break;
            var u = n.tracker[l];
            o.x = u.start.x, o.y = u.start.y, n.listener(i, o);
          }
          clearTimeout(r), a = t = 0;
        }
      };
      var o = c.pointerSetup(n);
      return o.state = "dblclick", b.add(n.target, "mousedown", n.onPointerDown), o;
    }, b.Gesture = b.Gesture || {}, b.Gesture._gestureHandlers = b.Gesture._gestureHandlers || {}, b.Gesture._gestureHandlers.dbltap = c.dbltap, b.Gesture._gestureHandlers.dblclick = c.dblclick, c;
  }(b.proxy), typeof b > "u")
    var b = {};
  if (typeof b.proxy > "u" && (b.proxy = {}), b.proxy = function(c) {
    return c.dragElement = function(n, h) {
      c.drag({
        event: h,
        target: n,
        position: "move",
        listener: function(a, t) {
          n.style.left = t.x + "px", n.style.top = t.y + "px", b.prevent(a);
        }
      });
    }, c.drag = function(n) {
      n.gesture = "drag", n.onPointerDown = function(a) {
        c.pointerStart(a, h, n) && (n.monitor || (b.add(n.doc, "mousemove", n.onPointerMove), b.add(n.doc, "mouseup", n.onPointerUp))), n.onPointerMove(a, "down");
      }, n.onPointerMove = function(a, t) {
        if (!n.tracker)
          return n.onPointerDown(a);
        n.bbox;
        for (var r = a.changedTouches || c.getCoords(a), e = r.length, s = 0; s < e; s++) {
          var o = r[s], i = o.identifier || 1 / 0, l = n.tracker[i];
          l && (l.pageX = o.pageX, l.pageY = o.pageY, h.state = t || "move", h.identifier = i, h.start = l.start, h.fingers = n.fingers, n.position === "differenceFromLast" ? (h.x = l.pageX - l.offsetX, h.y = l.pageY - l.offsetY, l.offsetX = l.pageX, l.offsetY = l.pageY) : (h.x = l.pageX - l.offsetX, h.y = l.pageY - l.offsetY), n.listener(a, h));
        }
      }, n.onPointerUp = function(a) {
        c.pointerEnd(a, h, n, n.onPointerMove) && (n.monitor || (b.remove(n.doc, "mousemove", n.onPointerMove), b.remove(n.doc, "mouseup", n.onPointerUp)));
      };
      var h = c.pointerSetup(n);
      return n.event ? n.onPointerDown(n.event) : (b.add(n.target, "mousedown", n.onPointerDown), n.monitor && (b.add(n.doc, "mousemove", n.onPointerMove), b.add(n.doc, "mouseup", n.onPointerUp))), h;
    }, b.Gesture = b.Gesture || {}, b.Gesture._gestureHandlers = b.Gesture._gestureHandlers || {}, b.Gesture._gestureHandlers.drag = c.drag, c;
  }(b.proxy), typeof b > "u")
    var b = {};
  if (typeof b.proxy > "u" && (b.proxy = {}), b.proxy = function(c) {
    var n = Math.PI / 180, h = function(a, t) {
      var r = 0, e = 0, s = 0;
      for (var o in t) {
        var i = t[o];
        i.up || (r += i.move.x, e += i.move.y, s++);
      }
      return a.x = r /= s, a.y = e /= s, a;
    };
    return c.gesture = function(a) {
      a.gesture = a.gesture || "gesture", a.minFingers = a.minFingers || a.fingers || 2, a.onPointerDown = function(r) {
        var e = a.fingers;
        if (c.pointerStart(r, t, a) && (b.add(a.doc, "mousemove", a.onPointerMove), b.add(a.doc, "mouseup", a.onPointerUp)), a.fingers === a.minFingers && e !== a.fingers) {
          t.fingers = a.minFingers, t.scale = 1, t.rotation = 0, t.state = "start";
          var s = "";
          for (var o in a.tracker)
            s += o;
          t.identifier = parseInt(s), h(t, a.tracker), a.listener(r, t);
        }
      }, a.onPointerMove = function(r, e) {
        for (var s = a.bbox, o = a.tracker, v = r.changedTouches || c.getCoords(r), i = v.length, l = 0; l < i; l++) {
          var u = v[l], d = u.identifier || 1 / 0, g = o[d];
          g && (g.move.x = u.pageX - s.x1, g.move.y = u.pageY - s.y1);
        }
        if (!(a.fingers < a.minFingers)) {
          var v = [], m = 0, C = 0;
          h(t, o);
          for (var d in o) {
            var u = o[d];
            if (!u.up) {
              var p = u.start;
              if (!p.distance) {
                var x = p.x - t.x, A = p.y - t.y;
                p.distance = Math.sqrt(x * x + A * A), p.angle = Math.atan2(x, A) / n;
              }
              var x = u.move.x - t.x, A = u.move.y - t.y, k = Math.sqrt(x * x + A * A);
              p.distance !== 0 && (m += k / p.distance);
              var W = Math.atan2(x, A) / n, N = (p.angle - W + 360) % 360 - 180;
              u.DEG2 = u.DEG1, u.DEG1 = N > 0 ? N : -N, typeof u.DEG2 < "u" && (N > 0 ? u.rotation += u.DEG1 - u.DEG2 : u.rotation -= u.DEG1 - u.DEG2, C += u.rotation), v.push(u.move);
            }
          }
          t.touches = v, t.fingers = a.fingers, t.scale = m / a.fingers, t.rotation = C / a.fingers, t.state = "change", a.listener(r, t);
        }
      }, a.onPointerUp = function(r) {
        var e = a.fingers;
        c.pointerEnd(r, t, a) && (b.remove(a.doc, "mousemove", a.onPointerMove), b.remove(a.doc, "mouseup", a.onPointerUp)), e === a.minFingers && a.fingers < a.minFingers && (t.fingers = a.fingers, t.state = "end", a.listener(r, t));
      };
      var t = c.pointerSetup(a);
      return b.add(a.target, "mousedown", a.onPointerDown), t;
    }, b.Gesture = b.Gesture || {}, b.Gesture._gestureHandlers = b.Gesture._gestureHandlers || {}, b.Gesture._gestureHandlers.gesture = c.gesture, c;
  }(b.proxy), typeof b > "u")
    var b = {};
  if (typeof b.proxy > "u" && (b.proxy = {}), b.proxy = function(c) {
    return c.pointerdown = c.pointermove = c.pointerup = function(n) {
      if (n.gesture = n.gesture || "pointer", !n.target.isPointerEmitter) {
        var h = !0;
        n.onPointerDown = function(t) {
          h = !1, a.gesture = "pointerdown", n.listener(t, a);
        }, n.onPointerMove = function(t) {
          a.gesture = "pointermove", n.listener(t, a, h);
        }, n.onPointerUp = function(t) {
          h = !0, a.gesture = "pointerup", n.listener(t, a, !0);
        };
        var a = c.pointerSetup(n);
        return b.add(n.target, "mousedown", n.onPointerDown), b.add(n.target, "mousemove", n.onPointerMove), b.add(n.doc, "mouseup", n.onPointerUp), n.target.isPointerEmitter = !0, a;
      }
    }, b.Gesture = b.Gesture || {}, b.Gesture._gestureHandlers = b.Gesture._gestureHandlers || {}, b.Gesture._gestureHandlers.pointerdown = c.pointerdown, b.Gesture._gestureHandlers.pointermove = c.pointermove, b.Gesture._gestureHandlers.pointerup = c.pointerup, c;
  }(b.proxy), typeof b > "u")
    var b = {};
  if (typeof b.proxy > "u" && (b.proxy = {}), b.proxy = function(c) {
    return c.shake = function(n) {
      var h = {
        gesture: "devicemotion",
        acceleration: {},
        accelerationIncludingGravity: {},
        target: n.target,
        listener: n.listener,
        remove: function() {
          window.removeEventListener("devicemotion", l, !1);
        }
      }, a = 4, t = 1e3, r = 200, e = 3, s = (/* @__PURE__ */ new Date()).getTime(), o = { x: 0, y: 0, z: 0 }, i = {
        x: { count: 0, value: 0 },
        y: { count: 0, value: 0 },
        z: { count: 0, value: 0 }
      }, l = function(u) {
        var d = 0.8, g = u.accelerationIncludingGravity;
        if (o.x = d * o.x + (1 - d) * g.x, o.y = d * o.y + (1 - d) * g.y, o.z = d * o.z + (1 - d) * g.z, h.accelerationIncludingGravity = o, h.acceleration.x = g.x - o.x, h.acceleration.y = g.y - o.y, h.acceleration.z = g.z - o.z, n.gesture === "devicemotion") {
          n.listener(u, h);
          return;
        }
        for (var v = "xyz", m = (/* @__PURE__ */ new Date()).getTime(), C = 0, p = v.length; C < p; C++) {
          var x = v[C], A = h.acceleration[x], k = i[x], W = Math.abs(A);
          if (!(m - s < t) && W > a) {
            var N = m * A / W, H = Math.abs(N + k.value);
            k.value && H < r ? (k.value = N, k.count++, k.count === e && (n.listener(u, h), s = m, k.value = 0, k.count = 0)) : (k.value = N, k.count = 1);
          }
        }
      };
      if (window.addEventListener)
        return window.addEventListener("devicemotion", l, !1), h;
    }, b.Gesture = b.Gesture || {}, b.Gesture._gestureHandlers = b.Gesture._gestureHandlers || {}, b.Gesture._gestureHandlers.shake = c.shake, c;
  }(b.proxy), typeof b > "u")
    var b = {};
  if (typeof b.proxy > "u" && (b.proxy = {}), b.proxy = function(c) {
    var n = Math.PI / 180;
    return c.swipe = function(h) {
      h.snap = h.snap || 90, h.threshold = h.threshold || 1, h.gesture = h.gesture || "swipe", h.onPointerDown = function(t) {
        c.pointerStart(t, a, h) && (b.add(h.doc, "mousemove", h.onPointerMove).listener(t), b.add(h.doc, "mouseup", h.onPointerUp));
      }, h.onPointerMove = function(t) {
        for (var r = t.changedTouches || c.getCoords(t), e = r.length, s = 0; s < e; s++) {
          var o = r[s], i = o.identifier || 1 / 0, l = h.tracker[i];
          l && (l.move.x = o.pageX, l.move.y = o.pageY, l.moveTime = (/* @__PURE__ */ new Date()).getTime());
        }
      }, h.onPointerUp = function(t) {
        if (c.pointerEnd(t, a, h)) {
          b.remove(h.doc, "mousemove", h.onPointerMove), b.remove(h.doc, "mouseup", h.onPointerUp);
          var r, e, s, o, i = { x: 0, y: 0 }, l = 0, u = 0, d = 0;
          for (var g in h.tracker) {
            var v = h.tracker[g], m = v.move.x - v.start.x, C = v.move.y - v.start.y;
            l += v.move.x, u += v.move.y, i.x += v.start.x, i.y += v.start.y, d++;
            var p = Math.sqrt(m * m + C * C), x = v.moveTime - v.startTime, o = Math.atan2(m, C) / n + 180, e = x ? p / x : 0;
            if (typeof s > "u")
              s = o, r = e;
            else if (Math.abs(o - s) <= 20)
              s = (s + o) / 2, r = (r + e) / 2;
            else
              return;
          }
          var A = h.gestureFingers;
          h.minFingers <= A && h.maxFingers >= A && r > h.threshold && (i.x /= d, i.y /= d, a.start = i, a.x = l / d, a.y = u / d, a.angle = -(((s / h.snap + 0.5 >> 0) * h.snap || 360) - 360), a.velocity = r, a.fingers = A, a.state = "swipe", h.listener(t, a));
        }
      };
      var a = c.pointerSetup(h);
      return b.add(h.target, "mousedown", h.onPointerDown), a;
    }, b.Gesture = b.Gesture || {}, b.Gesture._gestureHandlers = b.Gesture._gestureHandlers || {}, b.Gesture._gestureHandlers.swipe = c.swipe, c;
  }(b.proxy), typeof b > "u")
    var b = {};
  if (typeof b.proxy > "u" && (b.proxy = {}), b.proxy = function(c) {
    return c.longpress = function(n) {
      return n.gesture = "longpress", c.tap(n);
    }, c.tap = function(n) {
      n.delay = n.delay || 500, n.timeout = n.timeout || 250, n.driftDeviance = n.driftDeviance || 10, n.gesture = n.gesture || "tap";
      var h, a;
      n.onPointerDown = function(r) {
        if (c.pointerStart(r, t, n)) {
          if (h = (/* @__PURE__ */ new Date()).getTime(), b.add(n.doc, "mousemove", n.onPointerMove).listener(r), b.add(n.doc, "mouseup", n.onPointerUp), n.gesture !== "longpress")
            return;
          a = setTimeout(function() {
            if (!(r.cancelBubble && ++r.cancelBubbleCount > 1)) {
              var e = 0;
              for (var s in n.tracker) {
                var o = n.tracker[s];
                if (o.end === !0 || n.cancel)
                  return;
                e++;
              }
              n.minFingers <= e && n.maxFingers >= e && (t.state = "start", t.fingers = e, t.x = o.start.x, t.y = o.start.y, n.listener(r, t));
            }
          }, n.delay);
        }
      }, n.onPointerMove = function(r) {
        for (var e = n.bbox, s = r.changedTouches || c.getCoords(r), o = s.length, i = 0; i < o; i++) {
          var l = s[i], u = l.identifier || 1 / 0, d = n.tracker[u];
          if (d) {
            var g = l.pageX - e.x1 - parseInt(window.scrollX), v = l.pageY - e.y1 - parseInt(window.scrollY), m = g - d.start.x, C = v - d.start.y, p = Math.sqrt(m * m + C * C);
            if (!(g > 0 && g < e.width && // Within target coordinates..
            v > 0 && v < e.height && p <= n.driftDeviance)) {
              b.remove(n.doc, "mousemove", n.onPointerMove), n.cancel = !0;
              return;
            }
          }
        }
      }, n.onPointerUp = function(r) {
        if (c.pointerEnd(r, t, n)) {
          if (clearTimeout(a), b.remove(n.doc, "mousemove", n.onPointerMove), b.remove(n.doc, "mouseup", n.onPointerUp), r.cancelBubble && ++r.cancelBubbleCount > 1)
            return;
          if (n.gesture === "longpress") {
            t.state === "start" && (t.state = "end", n.listener(r, t));
            return;
          }
          if (n.cancel || (/* @__PURE__ */ new Date()).getTime() - h > n.timeout)
            return;
          var e = n.gestureFingers;
          n.minFingers <= e && n.maxFingers >= e && (t.state = "tap", t.fingers = n.gestureFingers, n.listener(r, t));
        }
      };
      var t = c.pointerSetup(n);
      return b.add(n.target, "mousedown", n.onPointerDown), t;
    }, b.Gesture = b.Gesture || {}, b.Gesture._gestureHandlers = b.Gesture._gestureHandlers || {}, b.Gesture._gestureHandlers.tap = c.tap, b.Gesture._gestureHandlers.longpress = c.longpress, c;
  }(b.proxy), typeof b > "u")
    var b = {};
  if (typeof b.proxy > "u" && (b.proxy = {}), b.proxy = function(c) {
    return c.wheelPreventElasticBounce = function(n) {
      n && (typeof n == "string" && (n = document.querySelector(n)), b.add(n, "wheel", function(h, a) {
        a.preventElasticBounce(), b.stop(h);
      }));
    }, c.wheel = function(n) {
      var h, a = n.timeout || 150, t = 0, r = {
        gesture: "wheel",
        state: "start",
        wheelDelta: 0,
        target: n.target,
        listener: n.listener,
        preventElasticBounce: function(l) {
          var u = this.target, d = u.scrollTop, g = d + u.offsetHeight, v = u.scrollHeight;
          (g === v && this.wheelDelta <= 0 || d === 0 && this.wheelDelta >= 0) && b.cancel(l), b.stop(l);
        },
        add: function() {
          n.target[s](i, e, !1);
        },
        remove: function() {
          n.target[o](i, e, !1);
        }
      }, e = function(l) {
        l = l || window.event, r.state = t++ ? "change" : "start", r.wheelDelta = l.detail ? l.detail * -20 : l.wheelDelta, n.listener(l, r), clearTimeout(h), h = setTimeout(function() {
          t = 0, r.state = "end", r.wheelDelta = 0, n.listener(l, r);
        }, a);
      }, s = document.addEventListener ? "addEventListener" : "attachEvent", o = document.removeEventListener ? "removeEventListener" : "detachEvent", i = b.getEventSupport("mousewheel") ? "mousewheel" : "DOMMouseScroll";
      return n.target[s](i, e, !1), r;
    }, b.Gesture = b.Gesture || {}, b.Gesture._gestureHandlers = b.Gesture._gestureHandlers || {}, b.Gesture._gestureHandlers.wheel = c.wheel, c;
  }(b.proxy), typeof it > "u")
    var it = {};
  typeof it.proxy > "u" && (it.proxy = {}), it.proxy = function(c) {
    return c.orientation = function(n) {
      var h = {
        gesture: "orientationchange",
        previous: null,
        /* Report the previous orientation */
        current: window.orientation,
        target: n.target,
        listener: n.listener,
        remove: function() {
          window.removeEventListener("orientationchange", a, !1);
        }
      }, a = function(t) {
        if (h.previous = h.current, h.current = window.orientation, h.previous !== null && h.previous != h.current) {
          n.listener(t, h);
          return;
        }
      };
      return window.DeviceOrientationEvent && window.addEventListener("orientationchange", a, !1), h;
    }, it.Gesture = it.Gesture || {}, it.Gesture._gestureHandlers = it.Gesture._gestureHandlers || {}, it.Gesture._gestureHandlers.orientation = c.orientation, c;
  }(it.proxy), function() {
    function c(e, s) {
      if (this.__eventListeners[e]) {
        var o = this.__eventListeners[e];
        s ? o[o.indexOf(s)] = !1 : f.util.array.fill(o, !1);
      }
    }
    function n(e, s) {
      if (this.__eventListeners || (this.__eventListeners = {}), arguments.length === 1)
        for (var o in e)
          this.on(o, e[o]);
      else
        this.__eventListeners[e] || (this.__eventListeners[e] = []), this.__eventListeners[e].push(s);
      return this;
    }
    function h(e, s) {
      var o = function() {
        s.apply(this, arguments), this.off(e, o);
      }.bind(this);
      this.on(e, o);
    }
    function a(e, s) {
      if (arguments.length === 1)
        for (var o in e)
          h.call(this, o, e[o]);
      else
        h.call(this, e, s);
      return this;
    }
    function t(e, s) {
      if (!this.__eventListeners)
        return this;
      if (arguments.length === 0)
        for (e in this.__eventListeners)
          c.call(this, e);
      else if (arguments.length === 1 && typeof arguments[0] == "object")
        for (var o in e)
          c.call(this, o, e[o]);
      else
        c.call(this, e, s);
      return this;
    }
    function r(e, s) {
      if (!this.__eventListeners)
        return this;
      var o = this.__eventListeners[e];
      if (!o)
        return this;
      for (var i = 0, l = o.length; i < l; i++)
        o[i] && o[i].call(this, s || {});
      return this.__eventListeners[e] = o.filter(function(u) {
        return u !== !1;
      }), this;
    }
    f.Observable = {
      fire: r,
      on: n,
      once: a,
      off: t
    };
  }(), f.Collection = {
    _objects: [],
    /**
     * Adds objects to collection, Canvas or Group, then renders canvas
     * (if `renderOnAddRemove` is not `false`).
     * in case of Group no changes to bounding box are made.
     * Objects should be instances of (or inherit from) fabric.Object
     * Use of this function is highly discouraged for groups.
     * you can add a bunch of objects with the add method but then you NEED
     * to run a addWithUpdate call for the Group class or position/bbox will be wrong.
     * @param {...fabric.Object} object Zero or more fabric instances
     * @return {Self} thisArg
     * @chainable
     */
    add: function() {
      if (this._objects.push.apply(this._objects, arguments), this._onObjectAdded)
        for (var c = 0, n = arguments.length; c < n; c++)
          this._onObjectAdded(arguments[c]);
      return this.renderOnAddRemove && this.requestRenderAll(), this;
    },
    /**
     * Inserts an object into collection at specified index, then renders canvas (if `renderOnAddRemove` is not `false`)
     * An object should be an instance of (or inherit from) fabric.Object
     * Use of this function is highly discouraged for groups.
     * you can add a bunch of objects with the insertAt method but then you NEED
     * to run a addWithUpdate call for the Group class or position/bbox will be wrong.
     * @param {Object} object Object to insert
     * @param {Number} index Index to insert object at
     * @param {Boolean} nonSplicing When `true`, no splicing (shifting) of objects occurs
     * @return {Self} thisArg
     * @chainable
     */
    insertAt: function(c, n, h) {
      var a = this._objects;
      return h ? a[n] = c : a.splice(n, 0, c), this._onObjectAdded && this._onObjectAdded(c), this.renderOnAddRemove && this.requestRenderAll(), this;
    },
    /**
     * Removes objects from a collection, then renders canvas (if `renderOnAddRemove` is not `false`)
     * @param {...fabric.Object} object Zero or more fabric instances
     * @return {Self} thisArg
     * @chainable
     */
    remove: function() {
      for (var c = this._objects, n, h = !1, a = 0, t = arguments.length; a < t; a++)
        n = c.indexOf(arguments[a]), n !== -1 && (h = !0, c.splice(n, 1), this._onObjectRemoved && this._onObjectRemoved(arguments[a]));
      return this.renderOnAddRemove && h && this.requestRenderAll(), this;
    },
    /**
     * Executes given function for each object in this group
     * @param {Function} callback
     *                   Callback invoked with current object as first argument,
     *                   index - as second and an array of all objects - as third.
     *                   Callback is invoked in a context of Global Object (e.g. `window`)
     *                   when no `context` argument is given
     *
     * @param {Object} context Context (aka thisObject)
     * @return {Self} thisArg
     * @chainable
     */
    forEachObject: function(c, n) {
      for (var h = this.getObjects(), a = 0, t = h.length; a < t; a++)
        c.call(n, h[a], a, h);
      return this;
    },
    /**
     * Returns an array of children objects of this instance
     * Type parameter introduced in 1.3.10
     * since 2.3.5 this method return always a COPY of the array;
     * @param {String} [type] When specified, only objects of this type are returned
     * @return {Array}
     */
    getObjects: function(c) {
      return typeof c > "u" ? this._objects.concat() : this._objects.filter(function(n) {
        return n.type === c;
      });
    },
    /**
     * Returns object at specified index
     * @param {Number} index
     * @return {Self} thisArg
     */
    item: function(c) {
      return this._objects[c];
    },
    /**
     * Returns true if collection contains no objects
     * @return {Boolean} true if collection is empty
     */
    isEmpty: function() {
      return this._objects.length === 0;
    },
    /**
     * Returns a size of a collection (i.e: length of an array containing its objects)
     * @return {Number} Collection size
     */
    size: function() {
      return this._objects.length;
    },
    /**
     * Returns true if collection contains an object
     * @param {Object} object Object to check against
     * @param {Boolean} [deep=false] `true` to check all descendants, `false` to check only `_objects`
     * @return {Boolean} `true` if collection contains an object
     */
    contains: function(c, n) {
      return this._objects.indexOf(c) > -1 ? !0 : n ? this._objects.some(function(h) {
        return typeof h.contains == "function" && h.contains(c, !0);
      }) : !1;
    },
    /**
     * Returns number representation of a collection complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return this._objects.reduce(function(c, n) {
        return c += n.complexity ? n.complexity() : 0, c;
      }, 0);
    }
  }, f.CommonMethods = {
    /**
     * Sets object's properties from options
     * @param {Object} [options] Options object
     */
    _setOptions: function(c) {
      for (var n in c)
        this.set(n, c[n]);
    },
    /**
     * @private
     * @param {Object} [filler] Options object
     * @param {String} [property] property to set the Gradient to
     */
    _initGradient: function(c, n) {
      c && c.colorStops && !(c instanceof f.Gradient) && this.set(n, new f.Gradient(c));
    },
    /**
     * @private
     * @param {Object} [filler] Options object
     * @param {String} [property] property to set the Pattern to
     * @param {Function} [callback] callback to invoke after pattern load
     */
    _initPattern: function(c, n, h) {
      c && c.source && !(c instanceof f.Pattern) ? this.set(n, new f.Pattern(c, h)) : h && h();
    },
    /**
     * @private
     */
    _setObject: function(c) {
      for (var n in c)
        this._set(n, c[n]);
    },
    /**
     * Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.
     * @param {String|Object} key Property name or object (if object, iterate over the object properties)
     * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
     * @return {fabric.Object} thisArg
     * @chainable
     */
    set: function(c, n) {
      return typeof c == "object" ? this._setObject(c) : this._set(c, n), this;
    },
    _set: function(c, n) {
      this[c] = n;
    },
    /**
     * Toggles specified property from `true` to `false` or from `false` to `true`
     * @param {String} property Property to toggle
     * @return {fabric.Object} thisArg
     * @chainable
     */
    toggle: function(c) {
      var n = this.get(c);
      return typeof n == "boolean" && this.set(c, !n), this;
    },
    /**
     * Basic getter
     * @param {String} property Property name
     * @return {*} value of a property
     */
    get: function(c) {
      return this[c];
    }
  }, function(c) {
    var n = Math.sqrt, h = Math.atan2, a = Math.pow, t = Math.PI / 180, r = Math.PI / 2;
    f.util = {
      /**
       * Calculate the cos of an angle, avoiding returning floats for known results
       * @static
       * @memberOf fabric.util
       * @param {Number} angle the angle in radians or in degree
       * @return {Number}
       */
      cos: function(e) {
        if (e === 0)
          return 1;
        e < 0 && (e = -e);
        var s = e / r;
        switch (s) {
          case 1:
          case 3:
            return 0;
          case 2:
            return -1;
        }
        return Math.cos(e);
      },
      /**
       * Calculate the sin of an angle, avoiding returning floats for known results
       * @static
       * @memberOf fabric.util
       * @param {Number} angle the angle in radians or in degree
       * @return {Number}
       */
      sin: function(e) {
        if (e === 0)
          return 0;
        var s = e / r, o = 1;
        switch (e < 0 && (o = -1), s) {
          case 1:
            return o;
          case 2:
            return 0;
          case 3:
            return -o;
        }
        return Math.sin(e);
      },
      /**
       * Removes value from an array.
       * Presence of value (and its position in an array) is determined via `Array.prototype.indexOf`
       * @static
       * @memberOf fabric.util
       * @param {Array} array
       * @param {*} value
       * @return {Array} original array
       */
      removeFromArray: function(e, s) {
        var o = e.indexOf(s);
        return o !== -1 && e.splice(o, 1), e;
      },
      /**
       * Returns random number between 2 specified ones.
       * @static
       * @memberOf fabric.util
       * @param {Number} min lower limit
       * @param {Number} max upper limit
       * @return {Number} random value (between min and max)
       */
      getRandomInt: function(e, s) {
        return Math.floor(Math.random() * (s - e + 1)) + e;
      },
      /**
       * Transforms degrees to radians.
       * @static
       * @memberOf fabric.util
       * @param {Number} degrees value in degrees
       * @return {Number} value in radians
       */
      degreesToRadians: function(e) {
        return e * t;
      },
      /**
       * Transforms radians to degrees.
       * @static
       * @memberOf fabric.util
       * @param {Number} radians value in radians
       * @return {Number} value in degrees
       */
      radiansToDegrees: function(e) {
        return e / t;
      },
      /**
       * Rotates `point` around `origin` with `radians`
       * @static
       * @memberOf fabric.util
       * @param {fabric.Point} point The point to rotate
       * @param {fabric.Point} origin The origin of the rotation
       * @param {Number} radians The radians of the angle for the rotation
       * @return {fabric.Point} The new rotated point
       */
      rotatePoint: function(e, s, o) {
        var i = new f.Point(e.x - s.x, e.y - s.y), l = f.util.rotateVector(i, o);
        return new f.Point(l.x, l.y).addEquals(s);
      },
      /**
       * Rotates `vector` with `radians`
       * @static
       * @memberOf fabric.util
       * @param {Object} vector The vector to rotate (x and y)
       * @param {Number} radians The radians of the angle for the rotation
       * @return {Object} The new rotated point
       */
      rotateVector: function(e, s) {
        var o = f.util.sin(s), i = f.util.cos(s), l = e.x * i - e.y * o, u = e.x * o + e.y * i;
        return {
          x: l,
          y: u
        };
      },
      /**
       * Creates a vetor from points represented as a point
       * @static
       * @memberOf fabric.util
       *
       * @typedef {Object} Point
       * @property {number} x
       * @property {number} y
       *
       * @param {Point} from
       * @param {Point} to
       * @returns {Point} vector
       */
      createVector: function(e, s) {
        return new f.Point(s.x - e.x, s.y - e.y);
      },
      /**
       * Calculates angle between 2 vectors using dot product
       * @static
       * @memberOf fabric.util
       * @param {Point} a
       * @param {Point} b
       * @returns the angle in radian between the vectors
       */
      calcAngleBetweenVectors: function(e, s) {
        return Math.acos((e.x * s.x + e.y * s.y) / (Math.hypot(e.x, e.y) * Math.hypot(s.x, s.y)));
      },
      /**
       * @static
       * @memberOf fabric.util
       * @param {Point} v
       * @returns {Point} vector representing the unit vector of pointing to the direction of `v`
       */
      getHatVector: function(e) {
        return new f.Point(e.x, e.y).multiply(1 / Math.hypot(e.x, e.y));
      },
      /**
       * @static
       * @memberOf fabric.util
       * @param {Point} A
       * @param {Point} B
       * @param {Point} C
       * @returns {{ vector: Point, angle: number }} vector representing the bisector of A and A's angle
       */
      getBisector: function(e, s, o) {
        var i = f.util.createVector(e, s), l = f.util.createVector(e, o), u = f.util.calcAngleBetweenVectors(i, l), d = f.util.calcAngleBetweenVectors(f.util.rotateVector(i, u), l), g = u * (d === 0 ? 1 : -1) / 2;
        return {
          vector: f.util.getHatVector(f.util.rotateVector(i, g)),
          angle: u
        };
      },
      /**
       * Project stroke width on points returning 2 projections for each point as follows:
       * - `miter`: 2 points corresponding to the outer boundary and the inner boundary of stroke.
       * - `bevel`: 2 points corresponding to the bevel boundaries, tangent to the bisector.
       * - `round`: same as `bevel`
       * Used to calculate object's bounding box
       * @static
       * @memberOf fabric.util
       * @param {Point[]} points
       * @param {Object} options
       * @param {number} options.strokeWidth
       * @param {'miter'|'bevel'|'round'} options.strokeLineJoin
       * @param {number} options.strokeMiterLimit https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit
       * @param {boolean} options.strokeUniform
       * @param {number} options.scaleX
       * @param {number} options.scaleY
       * @param {boolean} [openPath] whether the shape is open or not, affects the calculations of the first and last points
       * @returns {fabric.Point[]} array of size 2n/4n of all suspected points
       */
      projectStrokeOnPoints: function(e, s, o) {
        var i = [], l = s.strokeWidth / 2, u = s.strokeUniform ? new f.Point(1 / s.scaleX, 1 / s.scaleY) : new f.Point(1, 1), d = function(g) {
          var v = l / Math.hypot(g.x, g.y);
          return new f.Point(g.x * v * u.x, g.y * v * u.y);
        };
        return e.length <= 1 || e.forEach(function(g, v) {
          var m = new f.Point(g.x, g.y), C, p;
          v === 0 ? (p = e[v + 1], C = o ? d(f.util.createVector(p, m)).addEquals(m) : e[e.length - 1]) : v === e.length - 1 ? (C = e[v - 1], p = o ? d(f.util.createVector(C, m)).addEquals(m) : e[0]) : (C = e[v - 1], p = e[v + 1]);
          var x = f.util.getBisector(m, C, p), A = x.vector, k = x.angle, W, N;
          if (s.strokeLineJoin === "miter" && (W = -l / Math.sin(k / 2), N = new f.Point(
            A.x * W * u.x,
            A.y * W * u.y
          ), Math.hypot(N.x, N.y) / l <= s.strokeMiterLimit)) {
            i.push(m.add(N)), i.push(m.subtract(N));
            return;
          }
          W = -l * Math.SQRT2, N = new f.Point(
            A.x * W * u.x,
            A.y * W * u.y
          ), i.push(m.add(N)), i.push(m.subtract(N));
        }), i;
      },
      /**
       * Apply transform t to point p
       * @static
       * @memberOf fabric.util
       * @param  {fabric.Point} p The point to transform
       * @param  {Array} t The transform
       * @param  {Boolean} [ignoreOffset] Indicates that the offset should not be applied
       * @return {fabric.Point} The transformed point
       */
      transformPoint: function(e, s, o) {
        return o ? new f.Point(
          s[0] * e.x + s[2] * e.y,
          s[1] * e.x + s[3] * e.y
        ) : new f.Point(
          s[0] * e.x + s[2] * e.y + s[4],
          s[1] * e.x + s[3] * e.y + s[5]
        );
      },
      /**
       * Returns coordinates of points's bounding rectangle (left, top, width, height)
       * @param {Array} points 4 points array
       * @param {Array} [transform] an array of 6 numbers representing a 2x3 transform matrix
       * @return {Object} Object with left, top, width, height properties
       */
      makeBoundingBoxFromPoints: function(e, s) {
        if (s)
          for (var o = 0; o < e.length; o++)
            e[o] = f.util.transformPoint(e[o], s);
        var i = [e[0].x, e[1].x, e[2].x, e[3].x], l = f.util.array.min(i), u = f.util.array.max(i), d = u - l, g = [e[0].y, e[1].y, e[2].y, e[3].y], v = f.util.array.min(g), m = f.util.array.max(g), C = m - v;
        return {
          left: l,
          top: v,
          width: d,
          height: C
        };
      },
      /**
       * Invert transformation t
       * @static
       * @memberOf fabric.util
       * @param {Array} t The transform
       * @return {Array} The inverted transform
       */
      invertTransform: function(e) {
        var s = 1 / (e[0] * e[3] - e[1] * e[2]), o = [s * e[3], -s * e[1], -s * e[2], s * e[0]], i = f.util.transformPoint({ x: e[4], y: e[5] }, o, !0);
        return o[4] = -i.x, o[5] = -i.y, o;
      },
      /**
       * A wrapper around Number#toFixed, which contrary to native method returns number, not string.
       * @static
       * @memberOf fabric.util
       * @param {Number|String} number number to operate on
       * @param {Number} fractionDigits number of fraction digits to "leave"
       * @return {Number}
       */
      toFixed: function(e, s) {
        return parseFloat(Number(e).toFixed(s));
      },
      /**
       * Converts from attribute value to pixel value if applicable.
       * Returns converted pixels or original value not converted.
       * @param {Number|String} value number to operate on
       * @param {Number} fontSize
       * @return {Number|String}
       */
      parseUnit: function(e, s) {
        var o = /\D{0,2}$/.exec(e), i = parseFloat(e);
        switch (s || (s = f.Text.DEFAULT_SVG_FONT_SIZE), o[0]) {
          case "mm":
            return i * f.DPI / 25.4;
          case "cm":
            return i * f.DPI / 2.54;
          case "in":
            return i * f.DPI;
          case "pt":
            return i * f.DPI / 72;
          case "pc":
            return i * f.DPI / 72 * 12;
          case "em":
            return i * s;
          default:
            return i;
        }
      },
      /**
       * Function which always returns `false`.
       * @static
       * @memberOf fabric.util
       * @return {Boolean}
       */
      falseFunction: function() {
        return !1;
      },
      /**
       * Returns klass "Class" object of given namespace
       * @memberOf fabric.util
       * @param {String} type Type of object (eg. 'circle')
       * @param {String} namespace Namespace to get klass "Class" object from
       * @return {Object} klass "Class"
       */
      getKlass: function(e, s) {
        return e = f.util.string.camelize(e.charAt(0).toUpperCase() + e.slice(1)), f.util.resolveNamespace(s)[e];
      },
      /**
       * Returns array of attributes for given svg that fabric parses
       * @memberOf fabric.util
       * @param {String} type Type of svg element (eg. 'circle')
       * @return {Array} string names of supported attributes
       */
      getSvgAttributes: function(e) {
        var s = [
          "instantiated_by_use",
          "style",
          "id",
          "class"
        ];
        switch (e) {
          case "linearGradient":
            s = s.concat(["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform"]);
            break;
          case "radialGradient":
            s = s.concat(["gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr"]);
            break;
          case "stop":
            s = s.concat(["offset", "stop-color", "stop-opacity"]);
            break;
        }
        return s;
      },
      /**
       * Returns object of given namespace
       * @memberOf fabric.util
       * @param {String} namespace Namespace string e.g. 'fabric.Image.filter' or 'fabric'
       * @return {Object} Object for given namespace (default fabric)
       */
      resolveNamespace: function(e) {
        if (!e)
          return f;
        var s = e.split("."), o = s.length, i, l = c || f.window;
        for (i = 0; i < o; ++i)
          l = l[s[i]];
        return l;
      },
      /**
       * Loads image element from given url and passes it to a callback
       * @memberOf fabric.util
       * @param {String} url URL representing an image
       * @param {Function} callback Callback; invoked with loaded image
       * @param {*} [context] Context to invoke callback in
       * @param {Object} [crossOrigin] crossOrigin value to set image element to
       */
      loadImage: function(e, s, o, i) {
        if (!e) {
          s && s.call(o, e);
          return;
        }
        var l = f.util.createImage(), u = function() {
          s && s.call(o, l, !1), l = l.onload = l.onerror = null;
        };
        l.onload = u, l.onerror = function() {
          f.log("Error loading " + l.src), s && s.call(o, null, !0), l = l.onload = l.onerror = null;
        }, e.indexOf("data") !== 0 && i !== void 0 && i !== null && (l.crossOrigin = i), e.substring(0, 14) === "data:image/svg" && (l.onload = null, f.util.loadImageInDom(l, u)), l.src = e;
      },
      /**
       * Attaches SVG image with data: URL to the dom
       * @memberOf fabric.util
       * @param {Object} img Image object with data:image/svg src
       * @param {Function} callback Callback; invoked with loaded image
       * @return {Object} DOM element (div containing the SVG image)
       */
      loadImageInDom: function(e, s) {
        var o = f.document.createElement("div");
        o.style.width = o.style.height = "1px", o.style.left = o.style.top = "-100%", o.style.position = "absolute", o.appendChild(e), f.document.querySelector("body").appendChild(o), e.onload = function() {
          s(), o.parentNode.removeChild(o), o = null;
        };
      },
      /**
       * Creates corresponding fabric instances from their object representations
       * @static
       * @memberOf fabric.util
       * @param {Array} objects Objects to enliven
       * @param {Function} callback Callback to invoke when all objects are created
       * @param {String} namespace Namespace to get klass "Class" object from
       * @param {Function} reviver Method for further parsing of object elements,
       * called after each fabric object created.
       */
      enlivenObjects: function(e, s, o, i) {
        e = e || [];
        var l = [], u = 0, d = e.length;
        function g() {
          ++u === d && s && s(l.filter(function(v) {
            return v;
          }));
        }
        if (!d) {
          s && s(l);
          return;
        }
        e.forEach(function(v, m) {
          if (!v || !v.type) {
            g();
            return;
          }
          var C = f.util.getKlass(v.type, o);
          C.fromObject(v, function(p, x) {
            x || (l[m] = p), i && i(v, p, x), g();
          });
        });
      },
      /**
       * Creates corresponding fabric instances residing in an object, e.g. `clipPath`
       * @see {@link fabric.Object.ENLIVEN_PROPS}
       * @param {Object} object
       * @param {Object} [context] assign enlived props to this object (pass null to skip this)
       * @param {(objects:fabric.Object[]) => void} callback
       */
      enlivenObjectEnlivables: function(e, s, o) {
        var i = f.Object.ENLIVEN_PROPS.filter(function(l) {
          return !!e[l];
        });
        f.util.enlivenObjects(i.map(function(l) {
          return e[l];
        }), function(l) {
          var u = {};
          i.forEach(function(d, g) {
            u[d] = l[g], s && (s[d] = l[g]);
          }), o && o(u);
        });
      },
      /**
       * Create and wait for loading of patterns
       * @static
       * @memberOf fabric.util
       * @param {Array} patterns Objects to enliven
       * @param {Function} callback Callback to invoke when all objects are created
       * called after each fabric object created.
       */
      enlivenPatterns: function(e, s) {
        e = e || [];
        function o() {
          ++l === u && s && s(i);
        }
        var i = [], l = 0, u = e.length;
        if (!u) {
          s && s(i);
          return;
        }
        e.forEach(function(d, g) {
          d && d.source ? new f.Pattern(d, function(v) {
            i[g] = v, o();
          }) : (i[g] = d, o());
        });
      },
      /**
       * Groups SVG elements (usually those retrieved from SVG document)
       * @static
       * @memberOf fabric.util
       * @param {Array} elements SVG elements to group
       * @param {Object} [options] Options object
       * @param {String} path Value to set sourcePath to
       * @return {fabric.Object|fabric.Group}
       */
      groupSVGElements: function(e, s, o) {
        var i;
        return e && e.length === 1 ? (typeof o < "u" && (e[0].sourcePath = o), e[0]) : (s && (s.width && s.height ? s.centerPoint = {
          x: s.width / 2,
          y: s.height / 2
        } : (delete s.width, delete s.height)), i = new f.Group(e, s), typeof o < "u" && (i.sourcePath = o), i);
      },
      /**
       * Populates an object with properties of another object
       * @static
       * @memberOf fabric.util
       * @param {Object} source Source object
       * @param {Object} destination Destination object
       * @return {Array} properties Properties names to include
       */
      populateWithProperties: function(e, s, o) {
        if (o && Array.isArray(o))
          for (var i = 0, l = o.length; i < l; i++)
            o[i] in e && (s[o[i]] = e[o[i]]);
      },
      /**
       * Creates canvas element
       * @static
       * @memberOf fabric.util
       * @return {CanvasElement} initialized canvas element
       */
      createCanvasElement: function() {
        return f.document.createElement("canvas");
      },
      /**
       * Creates a canvas element that is a copy of another and is also painted
       * @param {CanvasElement} canvas to copy size and content of
       * @static
       * @memberOf fabric.util
       * @return {CanvasElement} initialized canvas element
       */
      copyCanvasElement: function(e) {
        var s = f.util.createCanvasElement();
        return s.width = e.width, s.height = e.height, s.getContext("2d").drawImage(e, 0, 0), s;
      },
      /**
       * since 2.6.0 moved from canvas instance to utility.
       * @param {CanvasElement} canvasEl to copy size and content of
       * @param {String} format 'jpeg' or 'png', in some browsers 'webp' is ok too
       * @param {Number} quality <= 1 and > 0
       * @static
       * @memberOf fabric.util
       * @return {String} data url
       */
      toDataURL: function(e, s, o) {
        return e.toDataURL("image/" + s, o);
      },
      /**
       * Creates image element (works on client and node)
       * @static
       * @memberOf fabric.util
       * @return {HTMLImageElement} HTML image element
       */
      createImage: function() {
        return f.document.createElement("img");
      },
      /**
       * Multiply matrix A by matrix B to nest transformations
       * @static
       * @memberOf fabric.util
       * @param  {Array} a First transformMatrix
       * @param  {Array} b Second transformMatrix
       * @param  {Boolean} is2x2 flag to multiply matrices as 2x2 matrices
       * @return {Array} The product of the two transform matrices
       */
      multiplyTransformMatrices: function(e, s, o) {
        return [
          e[0] * s[0] + e[2] * s[1],
          e[1] * s[0] + e[3] * s[1],
          e[0] * s[2] + e[2] * s[3],
          e[1] * s[2] + e[3] * s[3],
          o ? 0 : e[0] * s[4] + e[2] * s[5] + e[4],
          o ? 0 : e[1] * s[4] + e[3] * s[5] + e[5]
        ];
      },
      /**
       * Decomposes standard 2x3 matrix into transform components
       * @static
       * @memberOf fabric.util
       * @param  {Array} a transformMatrix
       * @return {Object} Components of transform
       */
      qrDecompose: function(e) {
        var s = h(e[1], e[0]), o = a(e[0], 2) + a(e[1], 2), i = n(o), l = (e[0] * e[3] - e[2] * e[1]) / i, u = h(e[0] * e[2] + e[1] * e[3], o);
        return {
          angle: s / t,
          scaleX: i,
          scaleY: l,
          skewX: u / t,
          skewY: 0,
          translateX: e[4],
          translateY: e[5]
        };
      },
      /**
       * Returns a transform matrix starting from an object of the same kind of
       * the one returned from qrDecompose, useful also if you want to calculate some
       * transformations from an object that is not enlived yet
       * @static
       * @memberOf fabric.util
       * @param  {Object} options
       * @param  {Number} [options.angle] angle in degrees
       * @return {Number[]} transform matrix
       */
      calcRotateMatrix: function(e) {
        if (!e.angle)
          return f.iMatrix.concat();
        var s = f.util.degreesToRadians(e.angle), o = f.util.cos(s), i = f.util.sin(s);
        return [o, i, -i, o, 0, 0];
      },
      /**
       * Returns a transform matrix starting from an object of the same kind of
       * the one returned from qrDecompose, useful also if you want to calculate some
       * transformations from an object that is not enlived yet.
       * is called DimensionsTransformMatrix because those properties are the one that influence
       * the size of the resulting box of the object.
       * @static
       * @memberOf fabric.util
       * @param  {Object} options
       * @param  {Number} [options.scaleX]
       * @param  {Number} [options.scaleY]
       * @param  {Boolean} [options.flipX]
       * @param  {Boolean} [options.flipY]
       * @param  {Number} [options.skewX]
       * @param  {Number} [options.skewY]
       * @return {Number[]} transform matrix
       */
      calcDimensionsMatrix: function(e) {
        var s = typeof e.scaleX > "u" ? 1 : e.scaleX, o = typeof e.scaleY > "u" ? 1 : e.scaleY, i = [
          e.flipX ? -s : s,
          0,
          0,
          e.flipY ? -o : o,
          0,
          0
        ], l = f.util.multiplyTransformMatrices, u = f.util.degreesToRadians;
        return e.skewX && (i = l(
          i,
          [1, 0, Math.tan(u(e.skewX)), 1],
          !0
        )), e.skewY && (i = l(
          i,
          [1, Math.tan(u(e.skewY)), 0, 1],
          !0
        )), i;
      },
      /**
       * Returns a transform matrix starting from an object of the same kind of
       * the one returned from qrDecompose, useful also if you want to calculate some
       * transformations from an object that is not enlived yet
       * @static
       * @memberOf fabric.util
       * @param  {Object} options
       * @param  {Number} [options.angle]
       * @param  {Number} [options.scaleX]
       * @param  {Number} [options.scaleY]
       * @param  {Boolean} [options.flipX]
       * @param  {Boolean} [options.flipY]
       * @param  {Number} [options.skewX]
       * @param  {Number} [options.skewX]
       * @param  {Number} [options.translateX]
       * @param  {Number} [options.translateY]
       * @return {Number[]} transform matrix
       */
      composeMatrix: function(e) {
        var s = [1, 0, 0, 1, e.translateX || 0, e.translateY || 0], o = f.util.multiplyTransformMatrices;
        return e.angle && (s = o(s, f.util.calcRotateMatrix(e))), (e.scaleX !== 1 || e.scaleY !== 1 || e.skewX || e.skewY || e.flipX || e.flipY) && (s = o(s, f.util.calcDimensionsMatrix(e))), s;
      },
      /**
       * reset an object transform state to neutral. Top and left are not accounted for
       * @static
       * @memberOf fabric.util
       * @param  {fabric.Object} target object to transform
       */
      resetObjectTransform: function(e) {
        e.scaleX = 1, e.scaleY = 1, e.skewX = 0, e.skewY = 0, e.flipX = !1, e.flipY = !1, e.rotate(0);
      },
      /**
       * Extract Object transform values
       * @static
       * @memberOf fabric.util
       * @param  {fabric.Object} target object to read from
       * @return {Object} Components of transform
       */
      saveObjectTransform: function(e) {
        return {
          scaleX: e.scaleX,
          scaleY: e.scaleY,
          skewX: e.skewX,
          skewY: e.skewY,
          angle: e.angle,
          left: e.left,
          flipX: e.flipX,
          flipY: e.flipY,
          top: e.top
        };
      },
      /**
       * Returns true if context has transparent pixel
       * at specified location (taking tolerance into account)
       * @param {CanvasRenderingContext2D} ctx context
       * @param {Number} x x coordinate
       * @param {Number} y y coordinate
       * @param {Number} tolerance Tolerance
       */
      isTransparent: function(e, s, o, i) {
        i > 0 && (s > i ? s -= i : s = 0, o > i ? o -= i : o = 0);
        var l = !0, u, d, g = e.getImageData(s, o, i * 2 || 1, i * 2 || 1), v = g.data.length;
        for (u = 3; u < v && (d = g.data[u], l = d <= 0, l !== !1); u += 4)
          ;
        return g = null, l;
      },
      /**
       * Parse preserveAspectRatio attribute from element
       * @param {string} attribute to be parsed
       * @return {Object} an object containing align and meetOrSlice attribute
       */
      parsePreserveAspectRatioAttribute: function(e) {
        var s = "meet", o = "Mid", i = "Mid", l = e.split(" "), u;
        return l && l.length && (s = l.pop(), s !== "meet" && s !== "slice" ? (u = s, s = "meet") : l.length && (u = l.pop())), o = u !== "none" ? u.slice(1, 4) : "none", i = u !== "none" ? u.slice(5, 8) : "none", {
          meetOrSlice: s,
          alignX: o,
          alignY: i
        };
      },
      /**
       * Clear char widths cache for the given font family or all the cache if no
       * fontFamily is specified.
       * Use it if you know you are loading fonts in a lazy way and you are not waiting
       * for custom fonts to load properly when adding text objects to the canvas.
       * If a text object is added when its own font is not loaded yet, you will get wrong
       * measurement and so wrong bounding boxes.
       * After the font cache is cleared, either change the textObject text content or call
       * initDimensions() to trigger a recalculation
       * @memberOf fabric.util
       * @param {String} [fontFamily] font family to clear
       */
      clearFabricFontCache: function(e) {
        e = (e || "").toLowerCase(), e ? f.charWidthsCache[e] && delete f.charWidthsCache[e] : f.charWidthsCache = {};
      },
      /**
       * Given current aspect ratio, determines the max width and height that can
       * respect the total allowed area for the cache.
       * @memberOf fabric.util
       * @param {Number} ar aspect ratio
       * @param {Number} maximumArea Maximum area you want to achieve
       * @return {Object.x} Limited dimensions by X
       * @return {Object.y} Limited dimensions by Y
       */
      limitDimsByArea: function(e, s) {
        var o = Math.sqrt(s * e), i = Math.floor(s / o);
        return { x: Math.floor(o), y: i };
      },
      capValue: function(e, s, o) {
        return Math.max(e, Math.min(s, o));
      },
      /**
       * Finds the scale for the object source to fit inside the object destination,
       * keeping aspect ratio intact.
       * respect the total allowed area for the cache.
       * @memberOf fabric.util
       * @param {Object | fabric.Object} source
       * @param {Number} source.height natural unscaled height of the object
       * @param {Number} source.width natural unscaled width of the object
       * @param {Object | fabric.Object} destination
       * @param {Number} destination.height natural unscaled height of the object
       * @param {Number} destination.width natural unscaled width of the object
       * @return {Number} scale factor to apply to source to fit into destination
       */
      findScaleToFit: function(e, s) {
        return Math.min(s.width / e.width, s.height / e.height);
      },
      /**
       * Finds the scale for the object source to cover entirely the object destination,
       * keeping aspect ratio intact.
       * respect the total allowed area for the cache.
       * @memberOf fabric.util
       * @param {Object | fabric.Object} source
       * @param {Number} source.height natural unscaled height of the object
       * @param {Number} source.width natural unscaled width of the object
       * @param {Object | fabric.Object} destination
       * @param {Number} destination.height natural unscaled height of the object
       * @param {Number} destination.width natural unscaled width of the object
       * @return {Number} scale factor to apply to source to cover destination
       */
      findScaleToCover: function(e, s) {
        return Math.max(s.width / e.width, s.height / e.height);
      },
      /**
       * given an array of 6 number returns something like `"matrix(...numbers)"`
       * @memberOf fabric.util
       * @param {Array} transform an array with 6 numbers
       * @return {String} transform matrix for svg
       * @return {Object.y} Limited dimensions by Y
       */
      matrixToSVG: function(e) {
        return "matrix(" + e.map(function(s) {
          return f.util.toFixed(s, f.Object.NUM_FRACTION_DIGITS);
        }).join(" ") + ")";
      },
      /**
       * given an object and a transform, apply the inverse transform to the object,
       * this is equivalent to remove from that object that transformation, so that
       * added in a space with the removed transform, the object will be the same as before.
       * Removing from an object a transform that scale by 2 is like scaling it by 1/2.
       * Removing from an object a transfrom that rotate by 30deg is like rotating by 30deg
       * in the opposite direction.
       * This util is used to add objects inside transformed groups or nested groups.
       * @memberOf fabric.util
       * @param {fabric.Object} object the object you want to transform
       * @param {Array} transform the destination transform
       */
      removeTransformFromObject: function(e, s) {
        var o = f.util.invertTransform(s), i = f.util.multiplyTransformMatrices(o, e.calcOwnMatrix());
        f.util.applyTransformToObject(e, i);
      },
      /**
       * given an object and a transform, apply the transform to the object.
       * this is equivalent to change the space where the object is drawn.
       * Adding to an object a transform that scale by 2 is like scaling it by 2.
       * This is used when removing an object from an active selection for example.
       * @memberOf fabric.util
       * @param {fabric.Object} object the object you want to transform
       * @param {Array} transform the destination transform
       */
      addTransformToObject: function(e, s) {
        f.util.applyTransformToObject(
          e,
          f.util.multiplyTransformMatrices(s, e.calcOwnMatrix())
        );
      },
      /**
       * discard an object transform state and apply the one from the matrix.
       * @memberOf fabric.util
       * @param {fabric.Object} object the object you want to transform
       * @param {Array} transform the destination transform
       */
      applyTransformToObject: function(e, s) {
        var o = f.util.qrDecompose(s), i = new f.Point(o.translateX, o.translateY);
        e.flipX = !1, e.flipY = !1, e.set("scaleX", o.scaleX), e.set("scaleY", o.scaleY), e.skewX = o.skewX, e.skewY = o.skewY, e.angle = o.angle, e.setPositionByOrigin(i, "center", "center");
      },
      /**
       * given a width and height, return the size of the bounding box
       * that can contains the box with width/height with applied transform
       * described in options.
       * Use to calculate the boxes around objects for controls.
       * @memberOf fabric.util
       * @param {Number} width
       * @param {Number} height
       * @param {Object} options
       * @param {Number} options.scaleX
       * @param {Number} options.scaleY
       * @param {Number} options.skewX
       * @param {Number} options.skewY
       * @return {Object.x} width of containing
       * @return {Object.y} height of containing
       */
      sizeAfterTransform: function(e, s, o) {
        var i = e / 2, l = s / 2, u = [
          {
            x: -i,
            y: -l
          },
          {
            x: i,
            y: -l
          },
          {
            x: -i,
            y: l
          },
          {
            x: i,
            y: l
          }
        ], d = f.util.calcDimensionsMatrix(o), g = f.util.makeBoundingBoxFromPoints(u, d);
        return {
          x: g.width,
          y: g.height
        };
      },
      /**
       * Merges 2 clip paths into one visually equal clip path
       *
       * **IMPORTANT**:\
       * Does **NOT** clone the arguments, clone them proir if necessary.
       *
       * Creates a wrapper (group) that contains one clip path and is clipped by the other so content is kept where both overlap.
       * Use this method if both the clip paths may have nested clip paths of their own, so assigning one to the other's clip path property is not possible.
       *
       * In order to handle the `inverted` property we follow logic described in the following cases:\
       * **(1)** both clip paths are inverted - the clip paths pass the inverted prop to the wrapper and loose it themselves.\
       * **(2)** one is inverted and the other isn't - the wrapper shouldn't become inverted and the inverted clip path must clip the non inverted one to produce an identical visual effect.\
       * **(3)** both clip paths are not inverted - wrapper and clip paths remain unchanged.
       *
       * @memberOf fabric.util
       * @param {fabric.Object} c1
       * @param {fabric.Object} c2
       * @returns {fabric.Object} merged clip path
       */
      mergeClipPaths: function(e, s) {
        var o = e, i = s;
        o.inverted && !i.inverted && (o = s, i = e), f.util.applyTransformToObject(
          i,
          f.util.multiplyTransformMatrices(
            f.util.invertTransform(o.calcTransformMatrix()),
            i.calcTransformMatrix()
          )
        );
        var l = o.inverted && i.inverted;
        return l && (o.inverted = i.inverted = !1), new f.Group([o], { clipPath: i, inverted: l });
      },
      /**
       * @memberOf fabric.util
       * @param {Object} prevStyle first style to compare
       * @param {Object} thisStyle second style to compare
       * @param {boolean} forTextSpans whether to check overline, underline, and line-through properties
       * @return {boolean} true if the style changed
       */
      hasStyleChanged: function(e, s, o) {
        return o = o || !1, e.fill !== s.fill || e.stroke !== s.stroke || e.strokeWidth !== s.strokeWidth || e.fontSize !== s.fontSize || e.fontFamily !== s.fontFamily || e.fontWeight !== s.fontWeight || e.fontStyle !== s.fontStyle || e.textBackgroundColor !== s.textBackgroundColor || e.deltaY !== s.deltaY || o && (e.overline !== s.overline || e.underline !== s.underline || e.linethrough !== s.linethrough);
      },
      /**
       * Returns the array form of a text object's inline styles property with styles grouped in ranges
       * rather than per character. This format is less verbose, and is better suited for storage
       * so it is used in serialization (not during runtime).
       * @memberOf fabric.util
       * @param {object} styles per character styles for a text object
       * @param {String} text the text string that the styles are applied to
       * @return {{start: number, end: number, style: object}[]}
       */
      stylesToArray: function(o, s) {
        for (var o = f.util.object.clone(o, !0), i = s.split(`
`), l = -1, u = {}, d = [], g = 0; g < i.length; g++) {
          if (!o[g]) {
            l += i[g].length;
            continue;
          }
          for (var v = 0; v < i[g].length; v++) {
            l++;
            var m = o[g][v];
            if (m && Object.keys(m).length > 0) {
              var C = f.util.hasStyleChanged(u, m, !0);
              C ? d.push({
                start: l,
                end: l + 1,
                style: m
              }) : d[d.length - 1].end++;
            }
            u = m || {};
          }
        }
        return d;
      },
      /**
       * Returns the object form of the styles property with styles that are assigned per
       * character rather than grouped by range. This format is more verbose, and is
       * only used during runtime (not for serialization/storage)
       * @memberOf fabric.util
       * @param {Array} styles the serialized form of a text object's styles
       * @param {String} text the text string that the styles are applied to
       * @return {Object}
       */
      stylesFromArray: function(e, s) {
        if (!Array.isArray(e))
          return e;
        for (var o = s.split(`
`), i = -1, l = 0, u = {}, d = 0; d < o.length; d++)
          for (var g = 0; g < o[d].length; g++)
            i++, e[l] && e[l].start <= i && i < e[l].end && (u[d] = u[d] || {}, u[d][g] = Object.assign({}, e[l].style), i === e[l].end - 1 && l++);
        return u;
      }
    };
  }(tt), function() {
    var c = Array.prototype.join, n = {
      m: 2,
      l: 2,
      h: 1,
      v: 1,
      c: 6,
      s: 4,
      q: 4,
      t: 2,
      a: 7
    }, h = {
      m: "l",
      M: "L"
    };
    function a(y, O, T, w, F, S, _, P, D, I, M) {
      var Y = f.util.cos(y), U = f.util.sin(y), q = f.util.cos(O), j = f.util.sin(O), E = T * F * q - w * S * j + _, R = w * F * q + T * S * j + P, B = I + D * (-T * F * U - w * S * Y), L = M + D * (-w * F * U + T * S * Y), G = E + D * (T * F * j + w * S * q), V = R + D * (w * F * j - T * S * q);
      return [
        "C",
        B,
        L,
        G,
        V,
        E,
        R
      ];
    }
    function t(y, O, T, w, F, S, _) {
      var P = Math.PI, D = _ * P / 180, I = f.util.sin(D), M = f.util.cos(D), Y = 0, U = 0;
      T = Math.abs(T), w = Math.abs(w);
      var q = -M * y * 0.5 - I * O * 0.5, j = -M * O * 0.5 + I * y * 0.5, E = T * T, R = w * w, B = j * j, L = q * q, G = E * R - E * B - R * L, V = 0;
      if (G < 0) {
        var nt = Math.sqrt(1 - G / (E * R));
        T *= nt, w *= nt;
      } else
        V = (F === S ? -1 : 1) * Math.sqrt(G / (E * B + R * L));
      var et = V * T * j / w, X = -V * w * q / T, rt = M * et - I * X + y * 0.5, st = I * et + M * X + O * 0.5, at = r(1, 0, (q - et) / T, (j - X) / w), ct = r((q - et) / T, (j - X) / w, (-q - et) / T, (-j - X) / w);
      S === 0 && ct > 0 ? ct -= 2 * P : S === 1 && ct < 0 && (ct += 2 * P);
      for (var lt = Math.ceil(Math.abs(ct / P * 2)), gt = [], ut = ct / lt, yt = 8 / 3 * Math.sin(ut / 4) * Math.sin(ut / 4) / Math.sin(ut / 2), _t = at + ut, mt = 0; mt < lt; mt++)
        gt[mt] = a(at, _t, M, I, T, w, rt, st, yt, Y, U), Y = gt[mt][5], U = gt[mt][6], at = _t, _t += ut;
      return gt;
    }
    function r(y, O, T, w) {
      var F = Math.atan2(O, y), S = Math.atan2(w, T);
      return S >= F ? S - F : 2 * Math.PI - (F - S);
    }
    function e(y, O, T, w, F, S, _, P) {
      var D;
      if (f.cachesBoundsOfCurve && (D = c.call(arguments), f.boundsOfCurveCache[D]))
        return f.boundsOfCurveCache[D];
      var I = Math.sqrt, M = Math.min, Y = Math.max, U = Math.abs, q = [], j = [[], []], E, R, B, L, G, V, nt, et;
      R = 6 * y - 12 * T + 6 * F, E = -3 * y + 9 * T - 9 * F + 3 * _, B = 3 * T - 3 * y;
      for (var X = 0; X < 2; ++X) {
        if (X > 0 && (R = 6 * O - 12 * w + 6 * S, E = -3 * O + 9 * w - 9 * S + 3 * P, B = 3 * w - 3 * O), U(E) < 1e-12) {
          if (U(R) < 1e-12)
            continue;
          L = -B / R, 0 < L && L < 1 && q.push(L);
          continue;
        }
        nt = R * R - 4 * B * E, !(nt < 0) && (et = I(nt), G = (-R + et) / (2 * E), 0 < G && G < 1 && q.push(G), V = (-R - et) / (2 * E), 0 < V && V < 1 && q.push(V));
      }
      for (var rt, st, at = q.length, ct = at, lt; at--; )
        L = q[at], lt = 1 - L, rt = lt * lt * lt * y + 3 * lt * lt * L * T + 3 * lt * L * L * F + L * L * L * _, j[0][at] = rt, st = lt * lt * lt * O + 3 * lt * lt * L * w + 3 * lt * L * L * S + L * L * L * P, j[1][at] = st;
      j[0][ct] = y, j[1][ct] = O, j[0][ct + 1] = _, j[1][ct + 1] = P;
      var gt = [
        {
          x: M.apply(null, j[0]),
          y: M.apply(null, j[1])
        },
        {
          x: Y.apply(null, j[0]),
          y: Y.apply(null, j[1])
        }
      ];
      return f.cachesBoundsOfCurve && (f.boundsOfCurveCache[D] = gt), gt;
    }
    function s(y, O, T) {
      for (var w = T[1], F = T[2], S = T[3], _ = T[4], P = T[5], D = T[6], I = T[7], M = t(D - y, I - O, w, F, _, P, S), Y = 0, U = M.length; Y < U; Y++)
        M[Y][1] += y, M[Y][2] += O, M[Y][3] += y, M[Y][4] += O, M[Y][5] += y, M[Y][6] += O;
      return M;
    }
    function o(y) {
      var O = 0, T = 0, w = y.length, F = 0, S = 0, _, P, D, I = [], M, Y, U;
      for (P = 0; P < w; ++P) {
        switch (D = !1, _ = y[P].slice(0), _[0]) {
          case "l":
            _[0] = "L", _[1] += O, _[2] += T;
          case "L":
            O = _[1], T = _[2];
            break;
          case "h":
            _[1] += O;
          case "H":
            _[0] = "L", _[2] = T, O = _[1];
            break;
          case "v":
            _[1] += T;
          case "V":
            _[0] = "L", T = _[1], _[1] = O, _[2] = T;
            break;
          case "m":
            _[0] = "M", _[1] += O, _[2] += T;
          case "M":
            O = _[1], T = _[2], F = _[1], S = _[2];
            break;
          case "c":
            _[0] = "C", _[1] += O, _[2] += T, _[3] += O, _[4] += T, _[5] += O, _[6] += T;
          case "C":
            Y = _[3], U = _[4], O = _[5], T = _[6];
            break;
          case "s":
            _[0] = "S", _[1] += O, _[2] += T, _[3] += O, _[4] += T;
          case "S":
            M === "C" ? (Y = 2 * O - Y, U = 2 * T - U) : (Y = O, U = T), O = _[3], T = _[4], _[0] = "C", _[5] = _[3], _[6] = _[4], _[3] = _[1], _[4] = _[2], _[1] = Y, _[2] = U, Y = _[3], U = _[4];
            break;
          case "q":
            _[0] = "Q", _[1] += O, _[2] += T, _[3] += O, _[4] += T;
          case "Q":
            Y = _[1], U = _[2], O = _[3], T = _[4];
            break;
          case "t":
            _[0] = "T", _[1] += O, _[2] += T;
          case "T":
            M === "Q" ? (Y = 2 * O - Y, U = 2 * T - U) : (Y = O, U = T), _[0] = "Q", O = _[1], T = _[2], _[1] = Y, _[2] = U, _[3] = O, _[4] = T;
            break;
          case "a":
            _[0] = "A", _[6] += O, _[7] += T;
          case "A":
            D = !0, I = I.concat(s(O, T, _)), O = _[6], T = _[7];
            break;
          case "z":
          case "Z":
            O = F, T = S;
            break;
        }
        D || I.push(_), M = _[0];
      }
      return I;
    }
    function i(y, O, T, w) {
      return Math.sqrt((T - y) * (T - y) + (w - O) * (w - O));
    }
    function l(y) {
      return y * y * y;
    }
    function u(y) {
      return 3 * y * y * (1 - y);
    }
    function d(y) {
      return 3 * y * (1 - y) * (1 - y);
    }
    function g(y) {
      return (1 - y) * (1 - y) * (1 - y);
    }
    function v(y, O, T, w, F, S, _, P) {
      return function(D) {
        var I = l(D), M = u(D), Y = d(D), U = g(D);
        return {
          x: _ * I + F * M + T * Y + y * U,
          y: P * I + S * M + w * Y + O * U
        };
      };
    }
    function m(y, O, T, w, F, S, _, P) {
      return function(D) {
        var I = 1 - D, M = 3 * I * I * (T - y) + 6 * I * D * (F - T) + 3 * D * D * (_ - F), Y = 3 * I * I * (w - O) + 6 * I * D * (S - w) + 3 * D * D * (P - S);
        return Math.atan2(Y, M);
      };
    }
    function C(y) {
      return y * y;
    }
    function p(y) {
      return 2 * y * (1 - y);
    }
    function x(y) {
      return (1 - y) * (1 - y);
    }
    function A(y, O, T, w, F, S) {
      return function(_) {
        var P = C(_), D = p(_), I = x(_);
        return {
          x: F * P + T * D + y * I,
          y: S * P + w * D + O * I
        };
      };
    }
    function k(y, O, T, w, F, S) {
      return function(_) {
        var P = 1 - _, D = 2 * P * (T - y) + 2 * _ * (F - T), I = 2 * P * (w - O) + 2 * _ * (S - w);
        return Math.atan2(I, D);
      };
    }
    function W(y, O, T) {
      var w = { x: O, y: T }, F, S = 0, _;
      for (_ = 1; _ <= 100; _ += 1)
        F = y(_ / 100), S += i(w.x, w.y, F.x, F.y), w = F;
      return S;
    }
    function N(y, O) {
      for (var T = 0, w = 0, F = y.iterator, S = { x: y.x, y: y.y }, _, P, D = 0.01, I = y.angleFinder, M; w < O && D > 1e-4; )
        _ = F(T), M = T, P = i(S.x, S.y, _.x, _.y), P + w > O ? (T -= D, D /= 2) : (S = _, T += D, w += P);
      return _.angle = I(M), _;
    }
    function H(y) {
      for (var O = 0, T = y.length, w, F = 0, S = 0, _ = 0, P = 0, D = [], I, M, Y, U = 0; U < T; U++) {
        switch (w = y[U], M = {
          x: F,
          y: S,
          command: w[0]
        }, w[0]) {
          case "M":
            M.length = 0, _ = F = w[1], P = S = w[2];
            break;
          case "L":
            M.length = i(F, S, w[1], w[2]), F = w[1], S = w[2];
            break;
          case "C":
            I = v(
              F,
              S,
              w[1],
              w[2],
              w[3],
              w[4],
              w[5],
              w[6]
            ), Y = m(
              F,
              S,
              w[1],
              w[2],
              w[3],
              w[4],
              w[5],
              w[6]
            ), M.iterator = I, M.angleFinder = Y, M.length = W(I, F, S), F = w[5], S = w[6];
            break;
          case "Q":
            I = A(
              F,
              S,
              w[1],
              w[2],
              w[3],
              w[4]
            ), Y = k(
              F,
              S,
              w[1],
              w[2],
              w[3],
              w[4]
            ), M.iterator = I, M.angleFinder = Y, M.length = W(I, F, S), F = w[3], S = w[4];
            break;
          case "Z":
          case "z":
            M.destX = _, M.destY = P, M.length = i(F, S, _, P), F = _, S = P;
            break;
        }
        O += M.length, D.push(M);
      }
      return D.push({ length: O, x: F, y: S }), D;
    }
    function z(y, O, T) {
      T || (T = H(y));
      for (var w = 0; O - T[w].length > 0 && w < T.length - 2; )
        O -= T[w].length, w++;
      var F = T[w], S = O / F.length, _ = F.command, P = y[w], D;
      switch (_) {
        case "M":
          return { x: F.x, y: F.y, angle: 0 };
        case "Z":
        case "z":
          return D = new f.Point(F.x, F.y).lerp(
            new f.Point(F.destX, F.destY),
            S
          ), D.angle = Math.atan2(F.destY - F.y, F.destX - F.x), D;
        case "L":
          return D = new f.Point(F.x, F.y).lerp(
            new f.Point(P[1], P[2]),
            S
          ), D.angle = Math.atan2(P[2] - F.y, P[1] - F.x), D;
        case "C":
          return N(F, O);
        case "Q":
          return N(F, O);
      }
    }
    function K(y) {
      var O = [], T = [], w, F, S = f.rePathCommand, _ = "[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?\\s*", P = "(" + _ + ")" + f.commaWsp, D = "([01])" + f.commaWsp + "?", I = P + "?" + P + "?" + P + D + D + P + "?(" + _ + ")", M = new RegExp(I, "g"), Y, U, q;
      if (!y || !y.match)
        return O;
      q = y.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi);
      for (var j = 0, E, R = q.length; j < R; j++) {
        w = q[j], U = w.slice(1).trim(), T.length = 0;
        var B = w.charAt(0);
        if (E = [B], B.toLowerCase() === "a")
          for (var L; L = M.exec(U); )
            for (var G = 1; G < L.length; G++)
              T.push(L[G]);
        else
          for (; Y = S.exec(U); )
            T.push(Y[0]);
        for (var G = 0, V = T.length; G < V; G++)
          F = parseFloat(T[G]), isNaN(F) || E.push(F);
        var nt = n[B.toLowerCase()], et = h[B] || B;
        if (E.length - 1 > nt)
          for (var X = 1, rt = E.length; X < rt; X += nt)
            O.push([B].concat(E.slice(X, X + nt))), B = et;
        else
          O.push(E);
      }
      return O;
    }
    function $(y, O) {
      var T = [], w, F = new f.Point(y[0].x, y[0].y), S = new f.Point(y[1].x, y[1].y), _ = y.length, P = 1, D = 0, I = _ > 2;
      for (O = O || 0, I && (P = y[2].x < S.x ? -1 : y[2].x === S.x ? 0 : 1, D = y[2].y < S.y ? -1 : y[2].y === S.y ? 0 : 1), T.push(["M", F.x - P * O, F.y - D * O]), w = 1; w < _; w++) {
        if (!F.eq(S)) {
          var M = F.midPointFrom(S);
          T.push(["Q", F.x, F.y, M.x, M.y]);
        }
        F = y[w], w + 1 < y.length && (S = y[w + 1]);
      }
      return I && (P = F.x > y[w - 2].x ? 1 : F.x === y[w - 2].x ? 0 : -1, D = F.y > y[w - 2].y ? 1 : F.y === y[w - 2].y ? 0 : -1), T.push(["L", F.x + P * O, F.y + D * O]), T;
    }
    function J(y, O, T) {
      return T && (O = f.util.multiplyTransformMatrices(
        O,
        [1, 0, 0, 1, -T.x, -T.y]
      )), y.map(function(w) {
        for (var F = w.slice(0), S = {}, _ = 1; _ < w.length - 1; _ += 2)
          S.x = w[_], S.y = w[_ + 1], S = f.util.transformPoint(S, O), F[_] = S.x, F[_ + 1] = S.y;
        return F;
      });
    }
    f.util.joinPath = function(y) {
      return y.map(function(O) {
        return O.join(" ");
      }).join(" ");
    }, f.util.parsePath = K, f.util.makePathSimpler = o, f.util.getSmoothPathFromPoints = $, f.util.getPathSegmentsInfo = H, f.util.getBoundsOfCurve = e, f.util.getPointOnPath = z, f.util.transformPath = J;
  }(), function() {
    var c = Array.prototype.slice;
    function n(e, s) {
      for (var o = c.call(arguments, 2), i = [], l = 0, u = e.length; l < u; l++)
        i[l] = o.length ? e[l][s].apply(e[l], o) : e[l][s].call(e[l]);
      return i;
    }
    function h(e, s) {
      return r(e, s, function(o, i) {
        return o >= i;
      });
    }
    function a(e, s) {
      return r(e, s, function(o, i) {
        return o < i;
      });
    }
    function t(e, s) {
      for (var o = e.length; o--; )
        e[o] = s;
      return e;
    }
    function r(e, s, o) {
      if (!(!e || e.length === 0)) {
        var i = e.length - 1, l = s ? e[i][s] : e[i];
        if (s)
          for (; i--; )
            o(e[i][s], l) && (l = e[i][s]);
        else
          for (; i--; )
            o(e[i], l) && (l = e[i]);
        return l;
      }
    }
    f.util.array = {
      fill: t,
      invoke: n,
      min: a,
      max: h
    };
  }(), function() {
    function c(h, a, t) {
      if (t)
        if (!f.isLikelyNode && a instanceof Element)
          h = a;
        else if (a instanceof Array) {
          h = [];
          for (var r = 0, e = a.length; r < e; r++)
            h[r] = c({}, a[r], t);
        } else if (a && typeof a == "object")
          for (var s in a)
            s === "canvas" || s === "group" ? h[s] = null : a.hasOwnProperty(s) && (h[s] = c({}, a[s], t));
        else
          h = a;
      else
        for (var s in a)
          h[s] = a[s];
      return h;
    }
    function n(h, a) {
      return c({}, h, a);
    }
    f.util.object = {
      extend: c,
      clone: n
    }, f.util.object.extend(f.util, f.Observable);
  }(), function() {
    function c(r) {
      return r.replace(/-+(.)?/g, function(e, s) {
        return s ? s.toUpperCase() : "";
      });
    }
    function n(r, e) {
      return r.charAt(0).toUpperCase() + (e ? r.slice(1) : r.slice(1).toLowerCase());
    }
    function h(r) {
      return r.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function a(r) {
      var e = 0, s, o = [];
      for (e = 0, s; e < r.length; e++)
        (s = t(r, e)) !== !1 && o.push(s);
      return o;
    }
    function t(r, e) {
      var s = r.charCodeAt(e);
      if (isNaN(s))
        return "";
      if (s < 55296 || s > 57343)
        return r.charAt(e);
      if (55296 <= s && s <= 56319) {
        if (r.length <= e + 1)
          throw "High surrogate without following low surrogate";
        var o = r.charCodeAt(e + 1);
        if (56320 > o || o > 57343)
          throw "High surrogate without following low surrogate";
        return r.charAt(e) + r.charAt(e + 1);
      }
      if (e === 0)
        throw "Low surrogate without preceding high surrogate";
      var i = r.charCodeAt(e - 1);
      if (55296 > i || i > 56319)
        throw "Low surrogate without preceding high surrogate";
      return !1;
    }
    f.util.string = {
      camelize: c,
      capitalize: n,
      escapeXml: h,
      graphemeSplit: a
    };
  }(), function() {
    var c = Array.prototype.slice, n = function() {
    }, h = function() {
      for (var s in { toString: 1 })
        if (s === "toString")
          return !1;
      return !0;
    }(), a = function(s, o, i) {
      for (var l in o)
        l in s.prototype && typeof s.prototype[l] == "function" && (o[l] + "").indexOf("callSuper") > -1 ? s.prototype[l] = function(u) {
          return function() {
            var d = this.constructor.superclass;
            this.constructor.superclass = i;
            var g = o[u].apply(this, arguments);
            if (this.constructor.superclass = d, u !== "initialize")
              return g;
          };
        }(l) : s.prototype[l] = o[l], h && (o.toString !== Object.prototype.toString && (s.prototype.toString = o.toString), o.valueOf !== Object.prototype.valueOf && (s.prototype.valueOf = o.valueOf));
    };
    function t() {
    }
    function r(s) {
      for (var o = null, i = this; i.constructor.superclass; ) {
        var l = i.constructor.superclass.prototype[s];
        if (i[s] !== l) {
          o = l;
          break;
        }
        i = i.constructor.superclass.prototype;
      }
      return o ? arguments.length > 1 ? o.apply(this, c.call(arguments, 1)) : o.call(this) : console.log("tried to callSuper " + s + ", method not found in prototype chain", this);
    }
    function e() {
      var s = null, o = c.call(arguments, 0);
      typeof o[0] == "function" && (s = o.shift());
      function i() {
        this.initialize.apply(this, arguments);
      }
      i.superclass = s, i.subclasses = [], s && (t.prototype = s.prototype, i.prototype = new t(), s.subclasses.push(i));
      for (var l = 0, u = o.length; l < u; l++)
        a(i, o[l], s);
      return i.prototype.initialize || (i.prototype.initialize = n), i.prototype.constructor = i, i.prototype.callSuper = r, i;
    }
    f.util.createClass = e;
  }(), function() {
    var c = !!f.document.createElement("div").attachEvent, n = ["touchstart", "touchmove", "touchend"];
    f.util.addListener = function(a, t, r, e) {
      a && a.addEventListener(t, r, c ? !1 : e);
    }, f.util.removeListener = function(a, t, r, e) {
      a && a.removeEventListener(t, r, c ? !1 : e);
    };
    function h(a) {
      var t = a.changedTouches;
      return t && t[0] ? t[0] : a;
    }
    f.util.getPointer = function(a) {
      var t = a.target, r = f.util.getScrollLeftTop(t), e = h(a);
      return {
        x: e.clientX + r.left,
        y: e.clientY + r.top
      };
    }, f.util.isTouchEvent = function(a) {
      return n.indexOf(a.type) > -1 || a.pointerType === "touch";
    };
  }(), function() {
    function c(e, s) {
      var o = e.style;
      if (!o)
        return e;
      if (typeof s == "string")
        return e.style.cssText += ";" + s, s.indexOf("opacity") > -1 ? r(e, s.match(/opacity:\s*(\d?\.?\d*)/)[1]) : e;
      for (var i in s)
        if (i === "opacity")
          r(e, s[i]);
        else {
          var l = i === "float" || i === "cssFloat" ? typeof o.styleFloat > "u" ? "cssFloat" : "styleFloat" : i;
          o.setProperty(l, s[i]);
        }
      return e;
    }
    var n = f.document.createElement("div"), h = typeof n.style.opacity == "string", a = typeof n.style.filter == "string", t = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/, r = function(e) {
      return e;
    };
    h ? r = function(e, s) {
      return e.style.opacity = s, e;
    } : a && (r = function(e, s) {
      var o = e.style;
      return e.currentStyle && !e.currentStyle.hasLayout && (o.zoom = 1), t.test(o.filter) ? (s = s >= 0.9999 ? "" : "alpha(opacity=" + s * 100 + ")", o.filter = o.filter.replace(t, s)) : o.filter += " alpha(opacity=" + s * 100 + ")", e;
    }), f.util.setStyle = c;
  }(), function() {
    var c = Array.prototype.slice;
    function n(g) {
      return typeof g == "string" ? f.document.getElementById(g) : g;
    }
    var h, a = function(g) {
      return c.call(g, 0);
    };
    try {
      h = a(f.document.childNodes) instanceof Array;
    } catch {
    }
    h || (a = function(g) {
      for (var v = new Array(g.length), m = g.length; m--; )
        v[m] = g[m];
      return v;
    });
    function t(g, v) {
      var m = f.document.createElement(g);
      for (var C in v)
        C === "class" ? m.className = v[C] : C === "for" ? m.htmlFor = v[C] : m.setAttribute(C, v[C]);
      return m;
    }
    function r(g, v) {
      g && (" " + g.className + " ").indexOf(" " + v + " ") === -1 && (g.className += (g.className ? " " : "") + v);
    }
    function e(g, v, m) {
      return typeof v == "string" && (v = t(v, m)), g.parentNode && g.parentNode.replaceChild(v, g), v.appendChild(g), v;
    }
    function s(g) {
      for (var v = 0, m = 0, C = f.document.documentElement, p = f.document.body || {
        scrollLeft: 0,
        scrollTop: 0
      }; g && (g.parentNode || g.host) && (g = g.parentNode || g.host, g === f.document ? (v = p.scrollLeft || C.scrollLeft || 0, m = p.scrollTop || C.scrollTop || 0) : (v += g.scrollLeft || 0, m += g.scrollTop || 0), !(g.nodeType === 1 && g.style.position === "fixed")); )
        ;
      return { left: v, top: m };
    }
    function o(g) {
      var v, m = g && g.ownerDocument, C = { left: 0, top: 0 }, p = { left: 0, top: 0 }, x, A = {
        borderLeftWidth: "left",
        borderTopWidth: "top",
        paddingLeft: "left",
        paddingTop: "top"
      };
      if (!m)
        return p;
      for (var k in A)
        p[A[k]] += parseInt(i(g, k), 10) || 0;
      return v = m.documentElement, typeof g.getBoundingClientRect < "u" && (C = g.getBoundingClientRect()), x = s(g), {
        left: C.left + x.left - (v.clientLeft || 0) + p.left,
        top: C.top + x.top - (v.clientTop || 0) + p.top
      };
    }
    var i;
    f.document.defaultView && f.document.defaultView.getComputedStyle ? i = function(g, v) {
      var m = f.document.defaultView.getComputedStyle(g, null);
      return m ? m[v] : void 0;
    } : i = function(g, v) {
      var m = g.style[v];
      return !m && g.currentStyle && (m = g.currentStyle[v]), m;
    }, function() {
      var g = f.document.documentElement.style, v = "userSelect" in g ? "userSelect" : "MozUserSelect" in g ? "MozUserSelect" : "WebkitUserSelect" in g ? "WebkitUserSelect" : "KhtmlUserSelect" in g ? "KhtmlUserSelect" : "";
      function m(p) {
        return typeof p.onselectstart < "u" && (p.onselectstart = f.util.falseFunction), v ? p.style[v] = "none" : typeof p.unselectable == "string" && (p.unselectable = "on"), p;
      }
      function C(p) {
        return typeof p.onselectstart < "u" && (p.onselectstart = null), v ? p.style[v] = "" : typeof p.unselectable == "string" && (p.unselectable = ""), p;
      }
      f.util.makeElementUnselectable = m, f.util.makeElementSelectable = C;
    }();
    function l(g) {
      var v = f.jsdomImplForWrapper(g);
      return v._canvas || v._image;
    }
    function u(g) {
      if (f.isLikelyNode) {
        var v = f.jsdomImplForWrapper(g);
        v && (v._image = null, v._canvas = null, v._currentSrc = null, v._attributes = null, v._classList = null);
      }
    }
    function d(g, v) {
      g.imageSmoothingEnabled = g.imageSmoothingEnabled || g.webkitImageSmoothingEnabled || g.mozImageSmoothingEnabled || g.msImageSmoothingEnabled || g.oImageSmoothingEnabled, g.imageSmoothingEnabled = v;
    }
    f.util.setImageSmoothing = d, f.util.getById = n, f.util.toArray = a, f.util.addClass = r, f.util.makeElement = t, f.util.wrapElement = e, f.util.getScrollLeftTop = s, f.util.getElementOffset = o, f.util.getNodeCanvas = l, f.util.cleanUpJsdomNode = u;
  }(), function() {
    function c(a, t) {
      return a + (/\?/.test(a) ? "&" : "?") + t;
    }
    function n() {
    }
    function h(a, t) {
      t || (t = {});
      var r = t.method ? t.method.toUpperCase() : "GET", e = t.onComplete || function() {
      }, s = new f.window.XMLHttpRequest(), o = t.body || t.parameters;
      return s.onreadystatechange = function() {
        s.readyState === 4 && (e(s), s.onreadystatechange = n);
      }, r === "GET" && (o = null, typeof t.parameters == "string" && (a = c(a, t.parameters))), s.open(r, a, !0), (r === "POST" || r === "PUT") && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.send(o), s;
    }
    f.util.request = h;
  }(), f.log = console.log, f.warn = console.warn, function() {
    var c = f.util.object.extend, n = f.util.object.clone, h = [];
    f.util.object.extend(h, {
      /**
       * cancel all running animations at the next requestAnimFrame
       * @returns {AnimationContext[]}
       */
      cancelAll: function() {
        var l = this.splice(0);
        return l.forEach(function(u) {
          u.cancel();
        }), l;
      },
      /**
       * cancel all running animations attached to canvas at the next requestAnimFrame
       * @param {fabric.Canvas} canvas
       * @returns {AnimationContext[]}
       */
      cancelByCanvas: function(l) {
        if (!l)
          return [];
        var u = this.filter(function(d) {
          return typeof d.target == "object" && d.target.canvas === l;
        });
        return u.forEach(function(d) {
          d.cancel();
        }), u;
      },
      /**
       * cancel all running animations for target at the next requestAnimFrame
       * @param {*} target
       * @returns {AnimationContext[]}
       */
      cancelByTarget: function(l) {
        var u = this.findAnimationsByTarget(l);
        return u.forEach(function(d) {
          d.cancel();
        }), u;
      },
      /**
       *
       * @param {CancelFunction} cancelFunc the function returned by animate
       * @returns {number}
       */
      findAnimationIndex: function(l) {
        return this.indexOf(this.findAnimation(l));
      },
      /**
       *
       * @param {CancelFunction} cancelFunc the function returned by animate
       * @returns {AnimationContext | undefined} animation's options object
       */
      findAnimation: function(l) {
        return this.find(function(u) {
          return u.cancel === l;
        });
      },
      /**
       *
       * @param {*} target the object that is assigned to the target property of the animation context
       * @returns {AnimationContext[]} array of animation options object associated with target
       */
      findAnimationsByTarget: function(l) {
        return l ? this.filter(function(u) {
          return u.target === l;
        }) : [];
      }
    });
    function a() {
      return !1;
    }
    function t(l, u, d, g) {
      return -d * Math.cos(l / g * (Math.PI / 2)) + d + u;
    }
    function r(l) {
      l || (l = {});
      var u = !1, d, g = function() {
        var v = f.runningAnimations.indexOf(d);
        return v > -1 && f.runningAnimations.splice(v, 1)[0];
      };
      return d = c(n(l), {
        cancel: function() {
          return u = !0, g();
        },
        currentValue: "startValue" in l ? l.startValue : 0,
        completionRate: 0,
        durationRate: 0
      }), f.runningAnimations.push(d), o(function(v) {
        var m = v || +/* @__PURE__ */ new Date(), C = l.duration || 500, p = m + C, x, A = l.onChange || a, k = l.abort || a, W = l.onComplete || a, N = l.easing || t, H = "startValue" in l ? l.startValue.length > 0 : !1, z = "startValue" in l ? l.startValue : 0, K = "endValue" in l ? l.endValue : 100, $ = l.byValue || (H ? z.map(function(J, y) {
          return K[y] - z[y];
        }) : K - z);
        l.onStart && l.onStart(), function J(y) {
          x = y || +/* @__PURE__ */ new Date();
          var O = x > p ? C : x - m, T = O / C, w = H ? z.map(function(S, _) {
            return N(O, z[_], $[_], C);
          }) : N(O, z, $, C), F = Math.abs(H ? (w[0] - z[0]) / $[0] : (w - z) / $);
          if (d.currentValue = H ? w.slice() : w, d.completionRate = F, d.durationRate = T, !u) {
            if (k(w, F, T)) {
              g();
              return;
            }
            if (x > p) {
              d.currentValue = H ? K.slice() : K, d.completionRate = 1, d.durationRate = 1, A(H ? K.slice() : K, 1, 1), W(K, 1, 1), g();
              return;
            } else
              A(w, F, T), o(J);
          }
        }(m);
      }), d.cancel;
    }
    var e = f.window.requestAnimationFrame || f.window.webkitRequestAnimationFrame || f.window.mozRequestAnimationFrame || f.window.oRequestAnimationFrame || f.window.msRequestAnimationFrame || function(l) {
      return f.window.setTimeout(l, 1e3 / 60);
    }, s = f.window.cancelAnimationFrame || f.window.clearTimeout;
    function o() {
      return e.apply(f.window, arguments);
    }
    function i() {
      return s.apply(f.window, arguments);
    }
    f.util.animate = r, f.util.requestAnimFrame = o, f.util.cancelAnimFrame = i, f.runningAnimations = h;
  }(), function() {
    function c(h, a, t) {
      var r = "rgba(" + parseInt(h[0] + t * (a[0] - h[0]), 10) + "," + parseInt(h[1] + t * (a[1] - h[1]), 10) + "," + parseInt(h[2] + t * (a[2] - h[2]), 10);
      return r += "," + (h && a ? parseFloat(h[3] + t * (a[3] - h[3])) : 1), r += ")", r;
    }
    function n(h, a, t, r) {
      var e = new f.Color(h).getSource(), s = new f.Color(a).getSource(), o = r.onComplete, i = r.onChange;
      return r = r || {}, f.util.animate(f.util.object.extend(r, {
        duration: t || 500,
        startValue: e,
        endValue: s,
        byValue: s,
        easing: function(l, u, d, g) {
          var v = r.colorEasing ? r.colorEasing(l, g) : 1 - Math.cos(l / g * (Math.PI / 2));
          return c(u, d, v);
        },
        // has to take in account for color restoring;
        onComplete: function(l, u, d) {
          if (o)
            return o(
              c(s, s, 0),
              u,
              d
            );
        },
        onChange: function(l, u, d) {
          if (i) {
            if (Array.isArray(l))
              return i(
                c(l, l, 0),
                u,
                d
              );
            i(l, u, d);
          }
        }
      }));
    }
    f.util.animateColor = n;
  }(), function() {
    function c(y, O, T, w) {
      return y < Math.abs(O) ? (y = O, w = T / 4) : O === 0 && y === 0 ? w = T / (2 * Math.PI) * Math.asin(1) : w = T / (2 * Math.PI) * Math.asin(O / y), { a: y, c: O, p: T, s: w };
    }
    function n(y, O, T) {
      return y.a * Math.pow(2, 10 * (O -= 1)) * Math.sin((O * T - y.s) * (2 * Math.PI) / y.p);
    }
    function h(y, O, T, w) {
      return T * ((y = y / w - 1) * y * y + 1) + O;
    }
    function a(y, O, T, w) {
      return y /= w / 2, y < 1 ? T / 2 * y * y * y + O : T / 2 * ((y -= 2) * y * y + 2) + O;
    }
    function t(y, O, T, w) {
      return T * (y /= w) * y * y * y + O;
    }
    function r(y, O, T, w) {
      return -T * ((y = y / w - 1) * y * y * y - 1) + O;
    }
    function e(y, O, T, w) {
      return y /= w / 2, y < 1 ? T / 2 * y * y * y * y + O : -T / 2 * ((y -= 2) * y * y * y - 2) + O;
    }
    function s(y, O, T, w) {
      return T * (y /= w) * y * y * y * y + O;
    }
    function o(y, O, T, w) {
      return T * ((y = y / w - 1) * y * y * y * y + 1) + O;
    }
    function i(y, O, T, w) {
      return y /= w / 2, y < 1 ? T / 2 * y * y * y * y * y + O : T / 2 * ((y -= 2) * y * y * y * y + 2) + O;
    }
    function l(y, O, T, w) {
      return -T * Math.cos(y / w * (Math.PI / 2)) + T + O;
    }
    function u(y, O, T, w) {
      return T * Math.sin(y / w * (Math.PI / 2)) + O;
    }
    function d(y, O, T, w) {
      return -T / 2 * (Math.cos(Math.PI * y / w) - 1) + O;
    }
    function g(y, O, T, w) {
      return y === 0 ? O : T * Math.pow(2, 10 * (y / w - 1)) + O;
    }
    function v(y, O, T, w) {
      return y === w ? O + T : T * (-Math.pow(2, -10 * y / w) + 1) + O;
    }
    function m(y, O, T, w) {
      return y === 0 ? O : y === w ? O + T : (y /= w / 2, y < 1 ? T / 2 * Math.pow(2, 10 * (y - 1)) + O : T / 2 * (-Math.pow(2, -10 * --y) + 2) + O);
    }
    function C(y, O, T, w) {
      return -T * (Math.sqrt(1 - (y /= w) * y) - 1) + O;
    }
    function p(y, O, T, w) {
      return T * Math.sqrt(1 - (y = y / w - 1) * y) + O;
    }
    function x(y, O, T, w) {
      return y /= w / 2, y < 1 ? -T / 2 * (Math.sqrt(1 - y * y) - 1) + O : T / 2 * (Math.sqrt(1 - (y -= 2) * y) + 1) + O;
    }
    function A(y, O, T, w) {
      var F = 1.70158, S = 0, _ = T;
      if (y === 0)
        return O;
      if (y /= w, y === 1)
        return O + T;
      S || (S = w * 0.3);
      var P = c(_, T, S, F);
      return -n(P, y, w) + O;
    }
    function k(y, O, T, w) {
      var F = 1.70158, S = 0, _ = T;
      if (y === 0)
        return O;
      if (y /= w, y === 1)
        return O + T;
      S || (S = w * 0.3);
      var P = c(_, T, S, F);
      return P.a * Math.pow(2, -10 * y) * Math.sin((y * w - P.s) * (2 * Math.PI) / P.p) + P.c + O;
    }
    function W(y, O, T, w) {
      var F = 1.70158, S = 0, _ = T;
      if (y === 0)
        return O;
      if (y /= w / 2, y === 2)
        return O + T;
      S || (S = w * (0.3 * 1.5));
      var P = c(_, T, S, F);
      return y < 1 ? -0.5 * n(P, y, w) + O : P.a * Math.pow(2, -10 * (y -= 1)) * Math.sin((y * w - P.s) * (2 * Math.PI) / P.p) * 0.5 + P.c + O;
    }
    function N(y, O, T, w, F) {
      return F === void 0 && (F = 1.70158), T * (y /= w) * y * ((F + 1) * y - F) + O;
    }
    function H(y, O, T, w, F) {
      return F === void 0 && (F = 1.70158), T * ((y = y / w - 1) * y * ((F + 1) * y + F) + 1) + O;
    }
    function z(y, O, T, w, F) {
      return F === void 0 && (F = 1.70158), y /= w / 2, y < 1 ? T / 2 * (y * y * (((F *= 1.525) + 1) * y - F)) + O : T / 2 * ((y -= 2) * y * (((F *= 1.525) + 1) * y + F) + 2) + O;
    }
    function K(y, O, T, w) {
      return T - $(w - y, 0, T, w) + O;
    }
    function $(y, O, T, w) {
      return (y /= w) < 1 / 2.75 ? T * (7.5625 * y * y) + O : y < 2 / 2.75 ? T * (7.5625 * (y -= 1.5 / 2.75) * y + 0.75) + O : y < 2.5 / 2.75 ? T * (7.5625 * (y -= 2.25 / 2.75) * y + 0.9375) + O : T * (7.5625 * (y -= 2.625 / 2.75) * y + 0.984375) + O;
    }
    function J(y, O, T, w) {
      return y < w / 2 ? K(y * 2, 0, T, w) * 0.5 + O : $(y * 2 - w, 0, T, w) * 0.5 + T * 0.5 + O;
    }
    f.util.ease = {
      /**
       * Quadratic easing in
       * @memberOf fabric.util.ease
       */
      easeInQuad: function(y, O, T, w) {
        return T * (y /= w) * y + O;
      },
      /**
       * Quadratic easing out
       * @memberOf fabric.util.ease
       */
      easeOutQuad: function(y, O, T, w) {
        return -T * (y /= w) * (y - 2) + O;
      },
      /**
       * Quadratic easing in and out
       * @memberOf fabric.util.ease
       */
      easeInOutQuad: function(y, O, T, w) {
        return y /= w / 2, y < 1 ? T / 2 * y * y + O : -T / 2 * (--y * (y - 2) - 1) + O;
      },
      /**
       * Cubic easing in
       * @memberOf fabric.util.ease
       */
      easeInCubic: function(y, O, T, w) {
        return T * (y /= w) * y * y + O;
      },
      easeOutCubic: h,
      easeInOutCubic: a,
      easeInQuart: t,
      easeOutQuart: r,
      easeInOutQuart: e,
      easeInQuint: s,
      easeOutQuint: o,
      easeInOutQuint: i,
      easeInSine: l,
      easeOutSine: u,
      easeInOutSine: d,
      easeInExpo: g,
      easeOutExpo: v,
      easeInOutExpo: m,
      easeInCirc: C,
      easeOutCirc: p,
      easeInOutCirc: x,
      easeInElastic: A,
      easeOutElastic: k,
      easeInOutElastic: W,
      easeInBack: N,
      easeOutBack: H,
      easeInOutBack: z,
      easeInBounce: K,
      easeOutBounce: $,
      easeInOutBounce: J
    };
  }(), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.util.object.extend, a = n.util.object.clone, t = n.util.toFixed, r = n.util.parseUnit, e = n.util.multiplyTransformMatrices, s = [
      "path",
      "circle",
      "polygon",
      "polyline",
      "ellipse",
      "rect",
      "line",
      "image",
      "text"
    ], o = ["symbol", "image", "marker", "pattern", "view", "svg"], i = ["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"], l = ["symbol", "g", "a", "svg", "clipPath", "defs"], u = {
      cx: "left",
      x: "left",
      r: "radius",
      cy: "top",
      y: "top",
      display: "visible",
      visibility: "visible",
      transform: "transformMatrix",
      "fill-opacity": "fillOpacity",
      "fill-rule": "fillRule",
      "font-family": "fontFamily",
      "font-size": "fontSize",
      "font-style": "fontStyle",
      "font-weight": "fontWeight",
      "letter-spacing": "charSpacing",
      "paint-order": "paintFirst",
      "stroke-dasharray": "strokeDashArray",
      "stroke-dashoffset": "strokeDashOffset",
      "stroke-linecap": "strokeLineCap",
      "stroke-linejoin": "strokeLineJoin",
      "stroke-miterlimit": "strokeMiterLimit",
      "stroke-opacity": "strokeOpacity",
      "stroke-width": "strokeWidth",
      "text-decoration": "textDecoration",
      "text-anchor": "textAnchor",
      opacity: "opacity",
      "clip-path": "clipPath",
      "clip-rule": "clipRule",
      "vector-effect": "strokeUniform",
      "image-rendering": "imageSmoothing"
    }, d = {
      stroke: "strokeOpacity",
      fill: "fillOpacity"
    }, g = "font-size", v = "clip-path";
    n.svgValidTagNamesRegEx = p(s), n.svgViewBoxElementsRegEx = p(o), n.svgInvalidAncestorsRegEx = p(i), n.svgValidParentsRegEx = p(l), n.cssRules = {}, n.gradientDefs = {}, n.clipPaths = {};
    function m(S) {
      return S in u ? u[S] : S;
    }
    function C(S, _, P, D) {
      var I = Array.isArray(_), M;
      if ((S === "fill" || S === "stroke") && _ === "none")
        _ = "";
      else {
        if (S === "strokeUniform")
          return _ === "non-scaling-stroke";
        if (S === "strokeDashArray")
          _ === "none" ? _ = null : _ = _.replace(/,/g, " ").split(/\s+/).map(parseFloat);
        else if (S === "transformMatrix")
          P && P.transformMatrix ? _ = e(
            P.transformMatrix,
            n.parseTransformAttribute(_)
          ) : _ = n.parseTransformAttribute(_);
        else if (S === "visible")
          _ = _ !== "none" && _ !== "hidden", P && P.visible === !1 && (_ = !1);
        else if (S === "opacity")
          _ = parseFloat(_), P && typeof P.opacity < "u" && (_ *= P.opacity);
        else if (S === "textAnchor")
          _ = _ === "start" ? "left" : _ === "end" ? "right" : "center";
        else if (S === "charSpacing")
          M = r(_, D) / D * 1e3;
        else if (S === "paintFirst") {
          var Y = _.indexOf("fill"), U = _.indexOf("stroke"), _ = "fill";
          (Y > -1 && U > -1 && U < Y || Y === -1 && U > -1) && (_ = "stroke");
        } else {
          if (S === "href" || S === "xlink:href" || S === "font")
            return _;
          if (S === "imageSmoothing")
            return _ === "optimizeQuality";
          M = I ? _.map(r) : r(_, D);
        }
      }
      return !I && isNaN(M) ? _ : M;
    }
    function p(S) {
      return new RegExp("^(" + S.join("|") + ")\\b", "i");
    }
    function x(S) {
      for (var _ in d)
        if (!(typeof S[d[_]] > "u" || S[_] === "")) {
          if (typeof S[_] > "u") {
            if (!n.Object.prototype[_])
              continue;
            S[_] = n.Object.prototype[_];
          }
          if (S[_].indexOf("url(") !== 0) {
            var P = new n.Color(S[_]);
            S[_] = P.setAlpha(t(P.getAlpha() * S[d[_]], 2)).toRgba();
          }
        }
      return S;
    }
    function A(S, _) {
      var P, D = [], I, M, Y;
      for (M = 0, Y = _.length; M < Y; M++)
        P = _[M], I = S.getElementsByTagName(P), D = D.concat(Array.prototype.slice.call(I));
      return D;
    }
    n.parseTransformAttribute = function() {
      function S(X, rt) {
        var st = n.util.cos(rt[0]), at = n.util.sin(rt[0]), ct = 0, lt = 0;
        rt.length === 3 && (ct = rt[1], lt = rt[2]), X[0] = st, X[1] = at, X[2] = -at, X[3] = st, X[4] = ct - (st * ct - at * lt), X[5] = lt - (at * ct + st * lt);
      }
      function _(X, rt) {
        var st = rt[0], at = rt.length === 2 ? rt[1] : rt[0];
        X[0] = st, X[3] = at;
      }
      function P(X, rt, st) {
        X[st] = Math.tan(n.util.degreesToRadians(rt[0]));
      }
      function D(X, rt) {
        X[4] = rt[0], rt.length === 2 && (X[5] = rt[1]);
      }
      var I = n.iMatrix, M = n.reNum, Y = n.commaWsp, U = "(?:(skewX)\\s*\\(\\s*(" + M + ")\\s*\\))", q = "(?:(skewY)\\s*\\(\\s*(" + M + ")\\s*\\))", j = "(?:(rotate)\\s*\\(\\s*(" + M + ")(?:" + Y + "(" + M + ")" + Y + "(" + M + "))?\\s*\\))", E = "(?:(scale)\\s*\\(\\s*(" + M + ")(?:" + Y + "(" + M + "))?\\s*\\))", R = "(?:(translate)\\s*\\(\\s*(" + M + ")(?:" + Y + "(" + M + "))?\\s*\\))", B = "(?:(matrix)\\s*\\(\\s*(" + M + ")" + Y + "(" + M + ")" + Y + "(" + M + ")" + Y + "(" + M + ")" + Y + "(" + M + ")" + Y + "(" + M + ")\\s*\\))", L = "(?:" + B + "|" + R + "|" + E + "|" + j + "|" + U + "|" + q + ")", G = "(?:" + L + "(?:" + Y + "*" + L + ")*)", V = "^\\s*(?:" + G + "?)\\s*$", nt = new RegExp(V), et = new RegExp(L, "g");
      return function(X) {
        var rt = I.concat(), st = [];
        if (!X || X && !nt.test(X))
          return rt;
        X.replace(et, function(ct) {
          var lt = new RegExp(L).exec(ct).filter(function(yt) {
            return !!yt;
          }), gt = lt[1], ut = lt.slice(2).map(parseFloat);
          switch (gt) {
            case "translate":
              D(rt, ut);
              break;
            case "rotate":
              ut[0] = n.util.degreesToRadians(ut[0]), S(rt, ut);
              break;
            case "scale":
              _(rt, ut);
              break;
            case "skewX":
              P(rt, ut, 2);
              break;
            case "skewY":
              P(rt, ut, 1);
              break;
            case "matrix":
              rt = ut;
              break;
          }
          st.push(rt.concat()), rt = I.concat();
        });
        for (var at = st[0]; st.length > 1; )
          st.shift(), at = n.util.multiplyTransformMatrices(at, st[0]);
        return at;
      };
    }();
    function k(S, _) {
      var P, D;
      S.replace(/;\s*$/, "").split(";").forEach(function(I) {
        var M = I.split(":");
        P = M[0].trim().toLowerCase(), D = M[1].trim(), _[P] = D;
      });
    }
    function W(S, _) {
      var P, D;
      for (var I in S)
        typeof S[I] > "u" || (P = I.toLowerCase(), D = S[I], _[P] = D);
    }
    function N(S, _) {
      var P = {};
      for (var D in n.cssRules[_])
        if (H(S, D.split(" ")))
          for (var I in n.cssRules[_][D])
            P[I] = n.cssRules[_][D][I];
      return P;
    }
    function H(S, _) {
      var P, D = !0;
      return P = K(S, _.pop()), P && _.length && (D = z(S, _)), P && D && _.length === 0;
    }
    function z(S, _) {
      for (var P, D = !0; S.parentNode && S.parentNode.nodeType === 1 && _.length; )
        D && (P = _.pop()), S = S.parentNode, D = K(S, P);
      return _.length === 0;
    }
    function K(S, _) {
      var P = S.nodeName, D = S.getAttribute("class"), I = S.getAttribute("id"), M, Y;
      if (M = new RegExp("^" + P, "i"), _ = _.replace(M, ""), I && _.length && (M = new RegExp("#" + I + "(?![a-zA-Z\\-]+)", "i"), _ = _.replace(M, "")), D && _.length)
        for (D = D.split(" "), Y = D.length; Y--; )
          M = new RegExp("\\." + D[Y] + "(?![a-zA-Z\\-]+)", "i"), _ = _.replace(M, "");
      return _.length === 0;
    }
    function $(S, _) {
      var P;
      if (S.getElementById && (P = S.getElementById(_)), P)
        return P;
      var D, I, M, Y = S.getElementsByTagName("*");
      for (I = 0, M = Y.length; I < M; I++)
        if (D = Y[I], _ === D.getAttribute("id"))
          return D;
    }
    function J(S) {
      for (var _ = A(S, ["use", "svg:use"]), P = 0; _.length && P < _.length; ) {
        var D = _[P], I = D.getAttribute("xlink:href") || D.getAttribute("href");
        if (I === null)
          return;
        var M = I.slice(1), Y = D.getAttribute("x") || 0, U = D.getAttribute("y") || 0, q = $(S, M).cloneNode(!0), j = (q.getAttribute("transform") || "") + " translate(" + Y + ", " + U + ")", E, R = _.length, B, L, G, V, nt = n.svgNS;
        if (O(q), /^svg$/i.test(q.nodeName)) {
          var et = q.ownerDocument.createElementNS(nt, "g");
          for (L = 0, G = q.attributes, V = G.length; L < V; L++)
            B = G.item(L), et.setAttributeNS(nt, B.nodeName, B.nodeValue);
          for (; q.firstChild; )
            et.appendChild(q.firstChild);
          q = et;
        }
        for (L = 0, G = D.attributes, V = G.length; L < V; L++)
          B = G.item(L), !(B.nodeName === "x" || B.nodeName === "y" || B.nodeName === "xlink:href" || B.nodeName === "href") && (B.nodeName === "transform" ? j = B.nodeValue + " " + j : q.setAttribute(B.nodeName, B.nodeValue));
        q.setAttribute("transform", j), q.setAttribute("instantiated_by_use", "1"), q.removeAttribute("id"), E = D.parentNode, E.replaceChild(q, D), _.length === R && P++;
      }
    }
    var y = new RegExp(
      "^\\s*(" + n.reNum + "+)\\s*,?\\s*(" + n.reNum + "+)\\s*,?\\s*(" + n.reNum + "+)\\s*,?\\s*(" + n.reNum + "+)\\s*$"
    );
    function O(S) {
      if (!n.svgViewBoxElementsRegEx.test(S.nodeName))
        return {};
      var _ = S.getAttribute("viewBox"), P = 1, D = 1, I = 0, M = 0, Y, U, q, j, E = S.getAttribute("width"), R = S.getAttribute("height"), B = S.getAttribute("x") || 0, L = S.getAttribute("y") || 0, G = S.getAttribute("preserveAspectRatio") || "", V = !_ || !(_ = _.match(y)), nt = !E || !R || E === "100%" || R === "100%", et = V && nt, X = {}, rt = "", st = 0, at = 0;
      if (X.width = 0, X.height = 0, X.toBeParsed = et, V && (B || L) && S.parentNode && S.parentNode.nodeName !== "#document" && (rt = " translate(" + r(B) + " " + r(L) + ") ", q = (S.getAttribute("transform") || "") + rt, S.setAttribute("transform", q), S.removeAttribute("x"), S.removeAttribute("y")), et)
        return X;
      if (V)
        return X.width = r(E), X.height = r(R), X;
      if (I = -parseFloat(_[1]), M = -parseFloat(_[2]), Y = parseFloat(_[3]), U = parseFloat(_[4]), X.minX = I, X.minY = M, X.viewBoxWidth = Y, X.viewBoxHeight = U, nt ? (X.width = Y, X.height = U) : (X.width = r(E), X.height = r(R), P = X.width / Y, D = X.height / U), G = n.util.parsePreserveAspectRatioAttribute(G), G.alignX !== "none" && (G.meetOrSlice === "meet" && (D = P = P > D ? D : P), G.meetOrSlice === "slice" && (D = P = P > D ? P : D), st = X.width - Y * P, at = X.height - U * P, G.alignX === "Mid" && (st /= 2), G.alignY === "Mid" && (at /= 2), G.alignX === "Min" && (st = 0), G.alignY === "Min" && (at = 0)), P === 1 && D === 1 && I === 0 && M === 0 && B === 0 && L === 0)
        return X;
      if ((B || L) && S.parentNode.nodeName !== "#document" && (rt = " translate(" + r(B) + " " + r(L) + ") "), q = rt + " matrix(" + P + " 0 0 " + D + " " + (I * P + st) + " " + (M * D + at) + ") ", S.nodeName === "svg") {
        for (j = S.ownerDocument.createElementNS(n.svgNS, "g"); S.firstChild; )
          j.appendChild(S.firstChild);
        S.appendChild(j);
      } else
        j = S, j.removeAttribute("x"), j.removeAttribute("y"), q = j.getAttribute("transform") + q;
      return j.setAttribute("transform", q), X;
    }
    function T(S, _) {
      for (; S && (S = S.parentNode); )
        if (S.nodeName && _.test(S.nodeName.replace("svg:", "")) && !S.getAttribute("instantiated_by_use"))
          return !0;
      return !1;
    }
    n.parseSVGDocument = function(S, _, P, D) {
      if (S) {
        J(S);
        var I = n.Object.__uid++, M, Y, U = O(S), q = n.util.toArray(S.getElementsByTagName("*"));
        if (U.crossOrigin = D && D.crossOrigin, U.svgUid = I, q.length === 0 && n.isLikelyNode) {
          q = S.selectNodes('//*[name(.)!="svg"]');
          var j = [];
          for (M = 0, Y = q.length; M < Y; M++)
            j[M] = q[M];
          q = j;
        }
        var E = q.filter(function(B) {
          return O(B), n.svgValidTagNamesRegEx.test(B.nodeName.replace("svg:", "")) && !T(B, n.svgInvalidAncestorsRegEx);
        });
        if (!E || E && !E.length) {
          _ && _([], {});
          return;
        }
        var R = {};
        q.filter(function(B) {
          return B.nodeName.replace("svg:", "") === "clipPath";
        }).forEach(function(B) {
          var L = B.getAttribute("id");
          R[L] = n.util.toArray(B.getElementsByTagName("*")).filter(function(G) {
            return n.svgValidTagNamesRegEx.test(G.nodeName.replace("svg:", ""));
          });
        }), n.gradientDefs[I] = n.getGradientDefs(S), n.cssRules[I] = n.getCSSRules(S), n.clipPaths[I] = R, n.parseElements(E, function(B, L) {
          _ && (_(B, U, L, q), delete n.gradientDefs[I], delete n.cssRules[I], delete n.clipPaths[I]);
        }, a(U), P, D);
      }
    };
    function w(S, _) {
      var P = ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"], D = "xlink:href", I = _.getAttribute(D).slice(1), M = $(S, I);
      if (M && M.getAttribute(D) && w(S, M), P.forEach(function(U) {
        M && !_.hasAttribute(U) && M.hasAttribute(U) && _.setAttribute(U, M.getAttribute(U));
      }), !_.children.length)
        for (var Y = M.cloneNode(!0); Y.firstChild; )
          _.appendChild(Y.firstChild);
      _.removeAttribute(D);
    }
    var F = new RegExp(
      "(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + n.reNum + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + n.reNum + "))?\\s+(.*)"
    );
    h(n, {
      /**
       * Parses a short font declaration, building adding its properties to a style object
       * @static
       * @function
       * @memberOf fabric
       * @param {String} value font declaration
       * @param {Object} oStyle definition
       */
      parseFontDeclaration: function(S, _) {
        var P = S.match(F);
        if (P) {
          var D = P[1], I = P[3], M = P[4], Y = P[5], U = P[6];
          D && (_.fontStyle = D), I && (_.fontWeight = isNaN(parseFloat(I)) ? I : parseFloat(I)), M && (_.fontSize = r(M)), U && (_.fontFamily = U), Y && (_.lineHeight = Y === "normal" ? 1 : Y);
        }
      },
      /**
       * Parses an SVG document, returning all of the gradient declarations found in it
       * @static
       * @function
       * @memberOf fabric
       * @param {SVGDocument} doc SVG document to parse
       * @return {Object} Gradient definitions; key corresponds to element id, value -- to gradient definition element
       */
      getGradientDefs: function(S) {
        var _ = [
          "linearGradient",
          "radialGradient",
          "svg:linearGradient",
          "svg:radialGradient"
        ], P = A(S, _), D, I = 0, M = {};
        for (I = P.length; I--; )
          D = P[I], D.getAttribute("xlink:href") && w(S, D), M[D.getAttribute("id")] = D;
        return M;
      },
      /**
       * Returns an object of attributes' name/value, given element and an array of attribute names;
       * Parses parent "g" nodes recursively upwards.
       * @static
       * @memberOf fabric
       * @param {DOMElement} element Element to parse
       * @param {Array} attributes Array of attributes to parse
       * @return {Object} object containing parsed attributes' names/values
       */
      parseAttributes: function(S, _, P) {
        if (S) {
          var D, I = {}, M, Y;
          typeof P > "u" && (P = S.getAttribute("svgUid")), S.parentNode && n.svgValidParentsRegEx.test(S.parentNode.nodeName) && (I = n.parseAttributes(S.parentNode, _, P));
          var U = _.reduce(function(G, V) {
            return D = S.getAttribute(V), D && (G[V] = D), G;
          }, {}), q = h(
            N(S, P),
            n.parseStyleAttribute(S)
          );
          U = h(
            U,
            q
          ), q[v] && S.setAttribute(v, q[v]), M = Y = I.fontSize || n.Text.DEFAULT_SVG_FONT_SIZE, U[g] && (U[g] = M = r(U[g], Y));
          var j, E, R = {};
          for (var B in U)
            j = m(B), E = C(j, U[B], I, M), R[j] = E;
          R && R.font && n.parseFontDeclaration(R.font, R);
          var L = h(I, R);
          return n.svgValidParentsRegEx.test(S.nodeName) ? L : x(L);
        }
      },
      /**
       * Transforms an array of svg elements to corresponding fabric.* instances
       * @static
       * @memberOf fabric
       * @param {Array} elements Array of elements to parse
       * @param {Function} callback Being passed an array of fabric instances (transformed from SVG elements)
       * @param {Object} [options] Options object
       * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
       */
      parseElements: function(S, _, P, D, I) {
        new n.ElementsParser(S, _, P, D, I).parse();
      },
      /**
       * Parses "style" attribute, retuning an object with values
       * @static
       * @memberOf fabric
       * @param {SVGElement} element Element to parse
       * @return {Object} Objects with values parsed from style attribute of an element
       */
      parseStyleAttribute: function(S) {
        var _ = {}, P = S.getAttribute("style");
        return P && (typeof P == "string" ? k(P, _) : W(P, _)), _;
      },
      /**
       * Parses "points" attribute, returning an array of values
       * @static
       * @memberOf fabric
       * @param {String} points points attribute string
       * @return {Array} array of points
       */
      parsePointsAttribute: function(S) {
        if (!S)
          return null;
        S = S.replace(/,/g, " ").trim(), S = S.split(/\s+/);
        var _ = [], P, D;
        for (P = 0, D = S.length; P < D; P += 2)
          _.push({
            x: parseFloat(S[P]),
            y: parseFloat(S[P + 1])
          });
        return _;
      },
      /**
       * Returns CSS rules for a given SVG document
       * @static
       * @function
       * @memberOf fabric
       * @param {SVGDocument} doc SVG document to parse
       * @return {Object} CSS rules of this document
       */
      getCSSRules: function(S) {
        var _ = S.getElementsByTagName("style"), P, D, I = {}, M;
        for (P = 0, D = _.length; P < D; P++) {
          var Y = _[P].textContent;
          Y = Y.replace(/\/\*[\s\S]*?\*\//g, ""), Y.trim() !== "" && (M = Y.split("}"), M = M.filter(function(U) {
            return U.trim();
          }), M.forEach(function(U) {
            var q = U.split("{"), j = {}, E = q[1].trim(), R = E.split(";").filter(function(V) {
              return V.trim();
            });
            for (P = 0, D = R.length; P < D; P++) {
              var B = R[P].split(":"), L = B[0].trim(), G = B[1].trim();
              j[L] = G;
            }
            U = q[0].trim(), U.split(",").forEach(function(V) {
              V = V.replace(/^svg/i, "").trim(), V !== "" && (I[V] ? n.util.object.extend(I[V], j) : I[V] = n.util.object.clone(j));
            });
          }));
        }
        return I;
      },
      /**
       * Takes url corresponding to an SVG document, and parses it into a set of fabric objects.
       * Note that SVG is fetched via XMLHttpRequest, so it needs to conform to SOP (Same Origin Policy)
       * @memberOf fabric
       * @param {String} url
       * @param {Function} callback
       * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
       * @param {Object} [options] Object containing options for parsing
       * @param {String} [options.crossOrigin] crossOrigin crossOrigin setting to use for external resources
       */
      loadSVGFromURL: function(S, _, P, D) {
        S = S.replace(/^\n\s*/, "").trim(), new n.util.request(S, {
          method: "get",
          onComplete: I
        });
        function I(M) {
          var Y = M.responseXML;
          if (!Y || !Y.documentElement)
            return _ && _(null), !1;
          n.parseSVGDocument(Y.documentElement, function(U, q, j, E) {
            _ && _(U, q, j, E);
          }, P, D);
        }
      },
      /**
       * Takes string corresponding to an SVG document, and parses it into a set of fabric objects
       * @memberOf fabric
       * @param {String} string
       * @param {Function} callback
       * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
       * @param {Object} [options] Object containing options for parsing
       * @param {String} [options.crossOrigin] crossOrigin crossOrigin setting to use for external resources
       */
      loadSVGFromString: function(S, _, P, D) {
        var I = new n.window.DOMParser(), M = I.parseFromString(S.trim(), "text/xml");
        n.parseSVGDocument(M.documentElement, function(Y, U, q, j) {
          _(Y, U, q, j);
        }, P, D);
      }
    });
  }(tt), f.ElementsParser = function(c, n, h, a, t, r) {
    this.elements = c, this.callback = n, this.options = h, this.reviver = a, this.svgUid = h && h.svgUid || 0, this.parsingOptions = t, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = r;
  }, function(c) {
    c.parse = function() {
      this.instances = new Array(this.elements.length), this.numElements = this.elements.length, this.createObjects();
    }, c.createObjects = function() {
      var n = this;
      this.elements.forEach(function(h, a) {
        h.setAttribute("svgUid", n.svgUid), n.createObject(h, a);
      });
    }, c.findTag = function(n) {
      return f[f.util.string.capitalize(n.tagName.replace("svg:", ""))];
    }, c.createObject = function(n, h) {
      var a = this.findTag(n);
      if (a && a.fromElement)
        try {
          a.fromElement(n, this.createCallback(h, n), this.options);
        } catch (t) {
          f.log(t);
        }
      else
        this.checkIfDone();
    }, c.createCallback = function(n, h) {
      var a = this;
      return function(t) {
        var r;
        a.resolveGradient(t, h, "fill"), a.resolveGradient(t, h, "stroke"), t instanceof f.Image && t._originalElement && (r = t.parsePreserveAspectRatioAttribute(h)), t._removeTransformMatrix(r), a.resolveClipPath(t, h), a.reviver && a.reviver(h, t), a.instances[n] = t, a.checkIfDone();
      };
    }, c.extractPropertyDefinition = function(n, h, a) {
      var t = n[h], r = this.regexUrl;
      if (r.test(t)) {
        r.lastIndex = 0;
        var e = r.exec(t)[1];
        return r.lastIndex = 0, f[a][this.svgUid][e];
      }
    }, c.resolveGradient = function(n, h, a) {
      var t = this.extractPropertyDefinition(n, a, "gradientDefs");
      if (t) {
        var r = h.getAttribute(a + "-opacity"), e = f.Gradient.fromElement(t, n, r, this.options);
        n.set(a, e);
      }
    }, c.createClipPathCallback = function(n, h) {
      return function(a) {
        a._removeTransformMatrix(), a.fillRule = a.clipRule, h.push(a);
      };
    }, c.resolveClipPath = function(n, h) {
      var a = this.extractPropertyDefinition(n, "clipPath", "clipPaths"), t, r, e, s, o, i;
      if (a) {
        s = [], e = f.util.invertTransform(n.calcTransformMatrix());
        for (var l = a[0].parentNode, u = h; u.parentNode && u.getAttribute("clip-path") !== n.clipPath; )
          u = u.parentNode;
        u.parentNode.appendChild(l);
        for (var d = 0; d < a.length; d++)
          t = a[d], r = this.findTag(t), r.fromElement(
            t,
            this.createClipPathCallback(n, s),
            this.options
          );
        s.length === 1 ? a = s[0] : a = new f.Group(s), o = f.util.multiplyTransformMatrices(
          e,
          a.calcTransformMatrix()
        ), a.clipPath && this.resolveClipPath(a, u);
        var i = f.util.qrDecompose(o);
        a.flipX = !1, a.flipY = !1, a.set("scaleX", i.scaleX), a.set("scaleY", i.scaleY), a.angle = i.angle, a.skewX = i.skewX, a.skewY = 0, a.setPositionByOrigin({ x: i.translateX, y: i.translateY }, "center", "center"), n.clipPath = a;
      } else
        delete n.clipPath;
    }, c.checkIfDone = function() {
      --this.numElements === 0 && (this.instances = this.instances.filter(function(n) {
        return n != null;
      }), this.callback(this.instances, this.elements));
    };
  }(f.ElementsParser.prototype), function(c) {
    var n = c.fabric || (c.fabric = {});
    if (n.Point) {
      n.warn("fabric.Point is already defined");
      return;
    }
    n.Point = h;
    function h(a, t) {
      this.x = a, this.y = t;
    }
    h.prototype = /** @lends fabric.Point.prototype */
    {
      type: "point",
      constructor: h,
      /**
       * Adds another point to this one and returns another one
       * @param {fabric.Point} that
       * @return {fabric.Point} new Point instance with added values
       */
      add: function(a) {
        return new h(this.x + a.x, this.y + a.y);
      },
      /**
       * Adds another point to this one
       * @param {fabric.Point} that
       * @return {fabric.Point} thisArg
       * @chainable
       */
      addEquals: function(a) {
        return this.x += a.x, this.y += a.y, this;
      },
      /**
       * Adds value to this point and returns a new one
       * @param {Number} scalar
       * @return {fabric.Point} new Point with added value
       */
      scalarAdd: function(a) {
        return new h(this.x + a, this.y + a);
      },
      /**
       * Adds value to this point
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
      scalarAddEquals: function(a) {
        return this.x += a, this.y += a, this;
      },
      /**
       * Subtracts another point from this point and returns a new one
       * @param {fabric.Point} that
       * @return {fabric.Point} new Point object with subtracted values
       */
      subtract: function(a) {
        return new h(this.x - a.x, this.y - a.y);
      },
      /**
       * Subtracts another point from this point
       * @param {fabric.Point} that
       * @return {fabric.Point} thisArg
       * @chainable
       */
      subtractEquals: function(a) {
        return this.x -= a.x, this.y -= a.y, this;
      },
      /**
       * Subtracts value from this point and returns a new one
       * @param {Number} scalar
       * @return {fabric.Point}
       */
      scalarSubtract: function(a) {
        return new h(this.x - a, this.y - a);
      },
      /**
       * Subtracts value from this point
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
      scalarSubtractEquals: function(a) {
        return this.x -= a, this.y -= a, this;
      },
      /**
       * Multiplies this point by a value and returns a new one
       * TODO: rename in scalarMultiply in 2.0
       * @param {Number} scalar
       * @return {fabric.Point}
       */
      multiply: function(a) {
        return new h(this.x * a, this.y * a);
      },
      /**
       * Multiplies this point by a value
       * TODO: rename in scalarMultiplyEquals in 2.0
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
      multiplyEquals: function(a) {
        return this.x *= a, this.y *= a, this;
      },
      /**
       * Divides this point by a value and returns a new one
       * TODO: rename in scalarDivide in 2.0
       * @param {Number} scalar
       * @return {fabric.Point}
       */
      divide: function(a) {
        return new h(this.x / a, this.y / a);
      },
      /**
       * Divides this point by a value
       * TODO: rename in scalarDivideEquals in 2.0
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
      divideEquals: function(a) {
        return this.x /= a, this.y /= a, this;
      },
      /**
       * Returns true if this point is equal to another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
      eq: function(a) {
        return this.x === a.x && this.y === a.y;
      },
      /**
       * Returns true if this point is less than another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
      lt: function(a) {
        return this.x < a.x && this.y < a.y;
      },
      /**
       * Returns true if this point is less than or equal to another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
      lte: function(a) {
        return this.x <= a.x && this.y <= a.y;
      },
      /**
      
      	     * Returns true if this point is greater another one
      	     * @param {fabric.Point} that
      	     * @return {Boolean}
      	     */
      gt: function(a) {
        return this.x > a.x && this.y > a.y;
      },
      /**
       * Returns true if this point is greater than or equal to another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
      gte: function(a) {
        return this.x >= a.x && this.y >= a.y;
      },
      /**
       * Returns new point which is the result of linear interpolation with this one and another one
       * @param {fabric.Point} that
       * @param {Number} t , position of interpolation, between 0 and 1 default 0.5
       * @return {fabric.Point}
       */
      lerp: function(a, t) {
        return typeof t > "u" && (t = 0.5), t = Math.max(Math.min(1, t), 0), new h(this.x + (a.x - this.x) * t, this.y + (a.y - this.y) * t);
      },
      /**
       * Returns distance from this point and another one
       * @param {fabric.Point} that
       * @return {Number}
       */
      distanceFrom: function(a) {
        var t = this.x - a.x, r = this.y - a.y;
        return Math.sqrt(t * t + r * r);
      },
      /**
       * Returns the point between this point and another one
       * @param {fabric.Point} that
       * @return {fabric.Point}
       */
      midPointFrom: function(a) {
        return this.lerp(a);
      },
      /**
       * Returns a new point which is the min of this and another one
       * @param {fabric.Point} that
       * @return {fabric.Point}
       */
      min: function(a) {
        return new h(Math.min(this.x, a.x), Math.min(this.y, a.y));
      },
      /**
       * Returns a new point which is the max of this and another one
       * @param {fabric.Point} that
       * @return {fabric.Point}
       */
      max: function(a) {
        return new h(Math.max(this.x, a.x), Math.max(this.y, a.y));
      },
      /**
       * Returns string representation of this point
       * @return {String}
       */
      toString: function() {
        return this.x + "," + this.y;
      },
      /**
       * Sets x/y of this point
       * @param {Number} x
       * @param {Number} y
       * @chainable
       */
      setXY: function(a, t) {
        return this.x = a, this.y = t, this;
      },
      /**
       * Sets x of this point
       * @param {Number} x
       * @chainable
       */
      setX: function(a) {
        return this.x = a, this;
      },
      /**
       * Sets y of this point
       * @param {Number} y
       * @chainable
       */
      setY: function(a) {
        return this.y = a, this;
      },
      /**
       * Sets x/y of this point from another point
       * @param {fabric.Point} that
       * @chainable
       */
      setFromPoint: function(a) {
        return this.x = a.x, this.y = a.y, this;
      },
      /**
       * Swaps x/y of this point and another point
       * @param {fabric.Point} that
       */
      swap: function(a) {
        var t = this.x, r = this.y;
        this.x = a.x, this.y = a.y, a.x = t, a.y = r;
      },
      /**
       * return a cloned instance of the point
       * @return {fabric.Point}
       */
      clone: function() {
        return new h(this.x, this.y);
      }
    };
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {});
    if (n.Intersection) {
      n.warn("fabric.Intersection is already defined");
      return;
    }
    function h(a) {
      this.status = a, this.points = [];
    }
    n.Intersection = h, n.Intersection.prototype = /** @lends fabric.Intersection.prototype */
    {
      constructor: h,
      /**
       * Appends a point to intersection
       * @param {fabric.Point} point
       * @return {fabric.Intersection} thisArg
       * @chainable
       */
      appendPoint: function(a) {
        return this.points.push(a), this;
      },
      /**
       * Appends points to intersection
       * @param {Array} points
       * @return {fabric.Intersection} thisArg
       * @chainable
       */
      appendPoints: function(a) {
        return this.points = this.points.concat(a), this;
      }
    }, n.Intersection.intersectLineLine = function(a, t, r, e) {
      var s, o = (e.x - r.x) * (a.y - r.y) - (e.y - r.y) * (a.x - r.x), i = (t.x - a.x) * (a.y - r.y) - (t.y - a.y) * (a.x - r.x), l = (e.y - r.y) * (t.x - a.x) - (e.x - r.x) * (t.y - a.y);
      if (l !== 0) {
        var u = o / l, d = i / l;
        0 <= u && u <= 1 && 0 <= d && d <= 1 ? (s = new h("Intersection"), s.appendPoint(new n.Point(a.x + u * (t.x - a.x), a.y + u * (t.y - a.y)))) : s = new h();
      } else
        o === 0 || i === 0 ? s = new h("Coincident") : s = new h("Parallel");
      return s;
    }, n.Intersection.intersectLinePolygon = function(a, t, r) {
      var e = new h(), s = r.length, o, i, l, u;
      for (u = 0; u < s; u++)
        o = r[u], i = r[(u + 1) % s], l = h.intersectLineLine(a, t, o, i), e.appendPoints(l.points);
      return e.points.length > 0 && (e.status = "Intersection"), e;
    }, n.Intersection.intersectPolygonPolygon = function(a, t) {
      var r = new h(), e = a.length, s;
      for (s = 0; s < e; s++) {
        var o = a[s], i = a[(s + 1) % e], l = h.intersectLinePolygon(o, i, t);
        r.appendPoints(l.points);
      }
      return r.points.length > 0 && (r.status = "Intersection"), r;
    }, n.Intersection.intersectPolygonRectangle = function(a, t, r) {
      var e = t.min(r), s = t.max(r), o = new n.Point(s.x, e.y), i = new n.Point(e.x, s.y), l = h.intersectLinePolygon(e, o, a), u = h.intersectLinePolygon(o, s, a), d = h.intersectLinePolygon(s, i, a), g = h.intersectLinePolygon(i, e, a), v = new h();
      return v.appendPoints(l.points), v.appendPoints(u.points), v.appendPoints(d.points), v.appendPoints(g.points), v.points.length > 0 && (v.status = "Intersection"), v;
    };
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {});
    if (n.Color) {
      n.warn("fabric.Color is already defined.");
      return;
    }
    function h(t) {
      t ? this._tryParsingColor(t) : this.setSource([0, 0, 0, 1]);
    }
    n.Color = h, n.Color.prototype = /** @lends fabric.Color.prototype */
    {
      /**
       * @private
       * @param {String|Array} color Color value to parse
       */
      _tryParsingColor: function(t) {
        var r;
        t in h.colorNameMap && (t = h.colorNameMap[t]), t === "transparent" && (r = [255, 255, 255, 0]), r || (r = h.sourceFromHex(t)), r || (r = h.sourceFromRgb(t)), r || (r = h.sourceFromHsl(t)), r || (r = [0, 0, 0, 1]), r && this.setSource(r);
      },
      /**
       * Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>
       * @private
       * @param {Number} r Red color value
       * @param {Number} g Green color value
       * @param {Number} b Blue color value
       * @return {Array} Hsl color
       */
      _rgbToHsl: function(t, r, e) {
        t /= 255, r /= 255, e /= 255;
        var s, o, i, l = n.util.array.max([t, r, e]), u = n.util.array.min([t, r, e]);
        if (i = (l + u) / 2, l === u)
          s = o = 0;
        else {
          var d = l - u;
          switch (o = i > 0.5 ? d / (2 - l - u) : d / (l + u), l) {
            case t:
              s = (r - e) / d + (r < e ? 6 : 0);
              break;
            case r:
              s = (e - t) / d + 2;
              break;
            case e:
              s = (t - r) / d + 4;
              break;
          }
          s /= 6;
        }
        return [
          Math.round(s * 360),
          Math.round(o * 100),
          Math.round(i * 100)
        ];
      },
      /**
       * Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])
       * @return {Array}
       */
      getSource: function() {
        return this._source;
      },
      /**
       * Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])
       * @param {Array} source
       */
      setSource: function(t) {
        this._source = t;
      },
      /**
       * Returns color representation in RGB format
       * @return {String} ex: rgb(0-255,0-255,0-255)
       */
      toRgb: function() {
        var t = this.getSource();
        return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")";
      },
      /**
       * Returns color representation in RGBA format
       * @return {String} ex: rgba(0-255,0-255,0-255,0-1)
       */
      toRgba: function() {
        var t = this.getSource();
        return "rgba(" + t[0] + "," + t[1] + "," + t[2] + "," + t[3] + ")";
      },
      /**
       * Returns color representation in HSL format
       * @return {String} ex: hsl(0-360,0%-100%,0%-100%)
       */
      toHsl: function() {
        var t = this.getSource(), r = this._rgbToHsl(t[0], t[1], t[2]);
        return "hsl(" + r[0] + "," + r[1] + "%," + r[2] + "%)";
      },
      /**
       * Returns color representation in HSLA format
       * @return {String} ex: hsla(0-360,0%-100%,0%-100%,0-1)
       */
      toHsla: function() {
        var t = this.getSource(), r = this._rgbToHsl(t[0], t[1], t[2]);
        return "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + t[3] + ")";
      },
      /**
       * Returns color representation in HEX format
       * @return {String} ex: FF5555
       */
      toHex: function() {
        var t = this.getSource(), r, e, s;
        return r = t[0].toString(16), r = r.length === 1 ? "0" + r : r, e = t[1].toString(16), e = e.length === 1 ? "0" + e : e, s = t[2].toString(16), s = s.length === 1 ? "0" + s : s, r.toUpperCase() + e.toUpperCase() + s.toUpperCase();
      },
      /**
       * Returns color representation in HEXA format
       * @return {String} ex: FF5555CC
       */
      toHexa: function() {
        var t = this.getSource(), r;
        return r = Math.round(t[3] * 255), r = r.toString(16), r = r.length === 1 ? "0" + r : r, this.toHex() + r.toUpperCase();
      },
      /**
       * Gets value of alpha channel for this color
       * @return {Number} 0-1
       */
      getAlpha: function() {
        return this.getSource()[3];
      },
      /**
       * Sets value of alpha channel for this color
       * @param {Number} alpha Alpha value 0-1
       * @return {fabric.Color} thisArg
       */
      setAlpha: function(t) {
        var r = this.getSource();
        return r[3] = t, this.setSource(r), this;
      },
      /**
       * Transforms color to its grayscale representation
       * @return {fabric.Color} thisArg
       */
      toGrayscale: function() {
        var t = this.getSource(), r = parseInt((t[0] * 0.3 + t[1] * 0.59 + t[2] * 0.11).toFixed(0), 10), e = t[3];
        return this.setSource([r, r, r, e]), this;
      },
      /**
       * Transforms color to its black and white representation
       * @param {Number} threshold
       * @return {fabric.Color} thisArg
       */
      toBlackWhite: function(t) {
        var r = this.getSource(), e = (r[0] * 0.3 + r[1] * 0.59 + r[2] * 0.11).toFixed(0), s = r[3];
        return t = t || 127, e = Number(e) < Number(t) ? 0 : 255, this.setSource([e, e, e, s]), this;
      },
      /**
       * Overlays color with another color
       * @param {String|fabric.Color} otherColor
       * @return {fabric.Color} thisArg
       */
      overlayWith: function(t) {
        t instanceof h || (t = new h(t));
        var r = [], e = this.getAlpha(), s = 0.5, o = this.getSource(), i = t.getSource(), l;
        for (l = 0; l < 3; l++)
          r.push(Math.round(o[l] * (1 - s) + i[l] * s));
        return r[3] = e, this.setSource(r), this;
      }
    }, n.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i, n.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, n.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, n.Color.colorNameMap = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgrey: "#A9A9A9",
      darkgreen: "#006400",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      grey: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgrey: "#D3D3D3",
      lightgreen: "#90EE90",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32"
    };
    function a(t, r, e) {
      return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? t + (r - t) * 6 * e : e < 1 / 2 ? r : e < 2 / 3 ? t + (r - t) * (2 / 3 - e) * 6 : t;
    }
    n.Color.fromRgb = function(t) {
      return h.fromSource(h.sourceFromRgb(t));
    }, n.Color.sourceFromRgb = function(t) {
      var r = t.match(h.reRGBa);
      if (r) {
        var e = parseInt(r[1], 10) / (/%$/.test(r[1]) ? 100 : 1) * (/%$/.test(r[1]) ? 255 : 1), s = parseInt(r[2], 10) / (/%$/.test(r[2]) ? 100 : 1) * (/%$/.test(r[2]) ? 255 : 1), o = parseInt(r[3], 10) / (/%$/.test(r[3]) ? 100 : 1) * (/%$/.test(r[3]) ? 255 : 1);
        return [
          parseInt(e, 10),
          parseInt(s, 10),
          parseInt(o, 10),
          r[4] ? parseFloat(r[4]) : 1
        ];
      }
    }, n.Color.fromRgba = h.fromRgb, n.Color.fromHsl = function(t) {
      return h.fromSource(h.sourceFromHsl(t));
    }, n.Color.sourceFromHsl = function(t) {
      var r = t.match(h.reHSLa);
      if (r) {
        var e = (parseFloat(r[1]) % 360 + 360) % 360 / 360, s = parseFloat(r[2]) / (/%$/.test(r[2]) ? 100 : 1), o = parseFloat(r[3]) / (/%$/.test(r[3]) ? 100 : 1), i, l, u;
        if (s === 0)
          i = l = u = o;
        else {
          var d = o <= 0.5 ? o * (s + 1) : o + s - o * s, g = o * 2 - d;
          i = a(g, d, e + 1 / 3), l = a(g, d, e), u = a(g, d, e - 1 / 3);
        }
        return [
          Math.round(i * 255),
          Math.round(l * 255),
          Math.round(u * 255),
          r[4] ? parseFloat(r[4]) : 1
        ];
      }
    }, n.Color.fromHsla = h.fromHsl, n.Color.fromHex = function(t) {
      return h.fromSource(h.sourceFromHex(t));
    }, n.Color.sourceFromHex = function(t) {
      if (t.match(h.reHex)) {
        var r = t.slice(t.indexOf("#") + 1), e = r.length === 3 || r.length === 4, s = r.length === 8 || r.length === 4, o = e ? r.charAt(0) + r.charAt(0) : r.substring(0, 2), i = e ? r.charAt(1) + r.charAt(1) : r.substring(2, 4), l = e ? r.charAt(2) + r.charAt(2) : r.substring(4, 6), u = s ? e ? r.charAt(3) + r.charAt(3) : r.substring(6, 8) : "FF";
        return [
          parseInt(o, 16),
          parseInt(i, 16),
          parseInt(l, 16),
          parseFloat((parseInt(u, 16) / 255).toFixed(2))
        ];
      }
    }, n.Color.fromSource = function(t) {
      var r = new h();
      return r.setSource(t), r;
    };
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"], a = ["ns", "nesw", "ew", "nwse"], t = {}, r = "left", e = "top", s = "right", o = "bottom", i = "center", l = {
      top: o,
      bottom: e,
      left: s,
      right: r,
      center: i
    }, u = n.util.radiansToDegrees, d = Math.sign || function(j) {
      return (j > 0) - (j < 0) || +j;
    };
    function g(j, E) {
      var R = j.angle + u(Math.atan2(E.y, E.x)) + 360;
      return Math.round(R % 360 / 45);
    }
    function v(j, E) {
      var R = E.transform.target, B = R.canvas, L = n.util.object.clone(E);
      L.target = R, B && B.fire("object:" + j, L), R.fire(j, E);
    }
    function m(j, E) {
      var R = E.canvas, B = R.uniScaleKey, L = j[B];
      return R.uniformScaling && !L || !R.uniformScaling && L;
    }
    function C(j) {
      return j.originX === i && j.originY === i;
    }
    function p(j, E, R) {
      var B = j.lockScalingX, L = j.lockScalingY;
      return !!(B && L || !E && (B || L) && R || B && E === "x" || L && E === "y");
    }
    function x(j, E, R) {
      var B = "not-allowed", L = m(j, R), G = "";
      if (E.x !== 0 && E.y === 0 ? G = "x" : E.x === 0 && E.y !== 0 && (G = "y"), p(R, G, L))
        return B;
      var V = g(R, E);
      return h[V] + "-resize";
    }
    function A(j, E, R) {
      var B = "not-allowed";
      if (E.x !== 0 && R.lockSkewingY || E.y !== 0 && R.lockSkewingX)
        return B;
      var L = g(R, E) % 4;
      return a[L] + "-resize";
    }
    function k(j, E, R) {
      return j[R.canvas.altActionKey] ? t.skewCursorStyleHandler(j, E, R) : t.scaleCursorStyleHandler(j, E, R);
    }
    function W(j, E, R) {
      var B = j[R.canvas.altActionKey];
      if (E.x === 0)
        return B ? "skewX" : "scaleY";
      if (E.y === 0)
        return B ? "skewY" : "scaleX";
    }
    function N(j, E, R) {
      return R.lockRotation ? "not-allowed" : E.cursorStyle;
    }
    function H(j, E, R, B) {
      return {
        e: j,
        transform: E,
        pointer: {
          x: R,
          y: B
        }
      };
    }
    function z(j) {
      return function(E, R, B, L) {
        var G = R.target, V = G.getCenterPoint(), nt = G.translateToOriginPoint(V, R.originX, R.originY), et = j(E, R, B, L);
        return G.setPositionByOrigin(nt, R.originX, R.originY), et;
      };
    }
    function K(j, E) {
      return function(R, B, L, G) {
        var V = E(R, B, L, G);
        return V && v(j, H(R, B, L, G)), V;
      };
    }
    function $(j, E, R, B, L) {
      var G = j.target, V = G.controls[j.corner], nt = G.canvas.getZoom(), et = G.padding / nt, X = G.toLocalPoint(new n.Point(B, L), E, R);
      return X.x >= et && (X.x -= et), X.x <= -et && (X.x += et), X.y >= et && (X.y -= et), X.y <= et && (X.y += et), X.x -= V.offsetX, X.y -= V.offsetY, X;
    }
    function J(j) {
      return j.flipX !== j.flipY;
    }
    function y(j, E, R, B, L) {
      if (j[E] !== 0) {
        var G = j._getTransformedDimensions()[B], V = L / G * j[R];
        j.set(R, V);
      }
    }
    function O(j, E, R, B) {
      var L = E.target, G = L._getTransformedDimensions(0, L.skewY), V = $(E, E.originX, E.originY, R, B), nt = Math.abs(V.x * 2) - G.x, et = L.skewX, X;
      nt < 2 ? X = 0 : (X = u(
        Math.atan2(nt / L.scaleX, G.y / L.scaleY)
      ), E.originX === r && E.originY === o && (X = -X), E.originX === s && E.originY === e && (X = -X), J(L) && (X = -X));
      var rt = et !== X;
      if (rt) {
        var st = L._getTransformedDimensions().y;
        L.set("skewX", X), y(L, "skewY", "scaleY", "y", st);
      }
      return rt;
    }
    function T(j, E, R, B) {
      var L = E.target, G = L._getTransformedDimensions(L.skewX, 0), V = $(E, E.originX, E.originY, R, B), nt = Math.abs(V.y * 2) - G.y, et = L.skewY, X;
      nt < 2 ? X = 0 : (X = u(
        Math.atan2(nt / L.scaleY, G.x / L.scaleX)
      ), E.originX === r && E.originY === o && (X = -X), E.originX === s && E.originY === e && (X = -X), J(L) && (X = -X));
      var rt = et !== X;
      if (rt) {
        var st = L._getTransformedDimensions().x;
        L.set("skewY", X), y(L, "skewX", "scaleX", "x", st);
      }
      return rt;
    }
    function w(j, E, R, B) {
      var L = E.target, G = L.skewX, V, nt = E.originY;
      if (L.lockSkewingX)
        return !1;
      if (G === 0) {
        var et = $(E, i, i, R, B);
        et.x > 0 ? V = r : V = s;
      } else
        G > 0 && (V = nt === e ? r : s), G < 0 && (V = nt === e ? s : r), J(L) && (V = V === r ? s : r);
      E.originX = V;
      var X = K("skewing", z(O));
      return X(j, E, R, B);
    }
    function F(j, E, R, B) {
      var L = E.target, G = L.skewY, V, nt = E.originX;
      if (L.lockSkewingY)
        return !1;
      if (G === 0) {
        var et = $(E, i, i, R, B);
        et.y > 0 ? V = e : V = o;
      } else
        G > 0 && (V = nt === r ? e : o), G < 0 && (V = nt === r ? o : e), J(L) && (V = V === e ? o : e);
      E.originY = V;
      var X = K("skewing", z(T));
      return X(j, E, R, B);
    }
    function S(j, E, R, B) {
      var L = E, G = L.target, V = G.translateToOriginPoint(G.getCenterPoint(), L.originX, L.originY);
      if (G.lockRotation)
        return !1;
      var nt = Math.atan2(L.ey - V.y, L.ex - V.x), et = Math.atan2(B - V.y, R - V.x), X = u(et - nt + L.theta), rt = !0;
      if (G.snapAngle > 0) {
        var st = G.snapAngle, at = G.snapThreshold || st, ct = Math.ceil(X / st) * st, lt = Math.floor(X / st) * st;
        Math.abs(X - lt) < at ? X = lt : Math.abs(X - ct) < at && (X = ct);
      }
      return X < 0 && (X = 360 + X), X %= 360, rt = G.angle !== X, G.angle = X, rt;
    }
    function _(j, E, R, B, L) {
      L = L || {};
      var G = E.target, V = G.lockScalingX, nt = G.lockScalingY, et = L.by, X, rt, st, at, ct = m(j, G), lt = p(G, et, ct), gt, ut, yt = E.gestureScale;
      if (lt)
        return !1;
      if (yt)
        rt = E.scaleX * yt, st = E.scaleY * yt;
      else {
        if (X = $(E, E.originX, E.originY, R, B), gt = et !== "y" ? d(X.x) : 1, ut = et !== "x" ? d(X.y) : 1, E.signX || (E.signX = gt), E.signY || (E.signY = ut), G.lockScalingFlip && (E.signX !== gt || E.signY !== ut))
          return !1;
        if (at = G._getTransformedDimensions(), ct && !et) {
          var _t = Math.abs(X.x) + Math.abs(X.y), mt = E.original, Pt = Math.abs(at.x * mt.scaleX / G.scaleX) + Math.abs(at.y * mt.scaleY / G.scaleY), wt = _t / Pt;
          rt = mt.scaleX * wt, st = mt.scaleY * wt;
        } else
          rt = Math.abs(X.x * G.scaleX / at.x), st = Math.abs(X.y * G.scaleY / at.y);
        C(E) && (rt *= 2, st *= 2), E.signX !== gt && et !== "y" && (E.originX = l[E.originX], rt *= -1, E.signX = gt), E.signY !== ut && et !== "x" && (E.originY = l[E.originY], st *= -1, E.signY = ut);
      }
      var Et = G.scaleX, Dt = G.scaleY;
      return et ? (et === "x" && G.set("scaleX", rt), et === "y" && G.set("scaleY", st)) : (!V && G.set("scaleX", rt), !nt && G.set("scaleY", st)), Et !== G.scaleX || Dt !== G.scaleY;
    }
    function P(j, E, R, B) {
      return _(j, E, R, B);
    }
    function D(j, E, R, B) {
      return _(j, E, R, B, { by: "x" });
    }
    function I(j, E, R, B) {
      return _(j, E, R, B, { by: "y" });
    }
    function M(j, E, R, B) {
      return j[E.target.canvas.altActionKey] ? t.skewHandlerX(j, E, R, B) : t.scalingY(j, E, R, B);
    }
    function Y(j, E, R, B) {
      return j[E.target.canvas.altActionKey] ? t.skewHandlerY(j, E, R, B) : t.scalingX(j, E, R, B);
    }
    function U(j, E, R, B) {
      var L = E.target, G = $(E, E.originX, E.originY, R, B), V = L.strokeWidth / (L.strokeUniform ? L.scaleX : 1), nt = C(E) ? 2 : 1, et = L.width, X = Math.abs(G.x * nt / L.scaleX) - V;
      return L.set("width", Math.max(X, 0)), et !== X;
    }
    function q(j, E, R, B) {
      var L = E.target, G = R - E.offsetX, V = B - E.offsetY, nt = !L.get("lockMovementX") && L.left !== G, et = !L.get("lockMovementY") && L.top !== V;
      return nt && L.set("left", G), et && L.set("top", V), (nt || et) && v("moving", H(j, E, R, B)), nt || et;
    }
    t.scaleCursorStyleHandler = x, t.skewCursorStyleHandler = A, t.scaleSkewCursorStyleHandler = k, t.rotationWithSnapping = K("rotating", z(S)), t.scalingEqually = K("scaling", z(P)), t.scalingX = K("scaling", z(D)), t.scalingY = K("scaling", z(I)), t.scalingYOrSkewingX = M, t.scalingXOrSkewingY = Y, t.changeWidth = K("resizing", z(U)), t.skewHandlerX = w, t.skewHandlerY = F, t.dragHandler = q, t.scaleOrSkewActionName = W, t.rotationStyleHandler = N, t.fireEvent = v, t.wrapWithFixedAnchor = z, t.wrapWithFireEvent = K, t.getLocalPoint = $, n.controlsUtils = t;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.util.degreesToRadians, a = n.controlsUtils;
    function t(e, s, o, i, l) {
      i = i || {};
      var u = this.sizeX || i.cornerSize || l.cornerSize, d = this.sizeY || i.cornerSize || l.cornerSize, g = typeof i.transparentCorners < "u" ? i.transparentCorners : l.transparentCorners, v = g ? "stroke" : "fill", m = !g && (i.cornerStrokeColor || l.cornerStrokeColor), C = s, p = o, x;
      e.save(), e.fillStyle = i.cornerColor || l.cornerColor, e.strokeStyle = i.cornerStrokeColor || l.cornerStrokeColor, u > d ? (x = u, e.scale(1, d / u), p = o * u / d) : d > u ? (x = d, e.scale(u / d, 1), C = s * d / u) : x = u, e.lineWidth = 1, e.beginPath(), e.arc(C, p, x / 2, 0, 2 * Math.PI, !1), e[v](), m && e.stroke(), e.restore();
    }
    function r(e, s, o, i, l) {
      i = i || {};
      var u = this.sizeX || i.cornerSize || l.cornerSize, d = this.sizeY || i.cornerSize || l.cornerSize, g = typeof i.transparentCorners < "u" ? i.transparentCorners : l.transparentCorners, v = g ? "stroke" : "fill", m = !g && (i.cornerStrokeColor || l.cornerStrokeColor), C = u / 2, p = d / 2;
      e.save(), e.fillStyle = i.cornerColor || l.cornerColor, e.strokeStyle = i.cornerStrokeColor || l.cornerStrokeColor, e.lineWidth = 1, e.translate(s, o), e.rotate(h(l.angle)), e[v + "Rect"](-C, -p, u, d), m && e.strokeRect(-C, -p, u, d), e.restore();
    }
    a.renderCircleControl = t, a.renderSquareControl = r;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {});
    function h(a) {
      for (var t in a)
        this[t] = a[t];
    }
    n.Control = h, n.Control.prototype = /** @lends fabric.Control.prototype */
    {
      /**
       * keep track of control visibility.
       * mainly for backward compatibility.
       * if you do not want to see a control, you can remove it
       * from the controlset.
       * @type {Boolean}
       * @default true
       */
      visible: !0,
      /**
       * Name of the action that the control will likely execute.
       * This is optional. FabricJS uses to identify what the user is doing for some
       * extra optimizations. If you are writing a custom control and you want to know
       * somewhere else in the code what is going on, you can use this string here.
       * you can also provide a custom getActionName if your control run multiple actions
       * depending on some external state.
       * default to scale since is the most common, used on 4 corners by default
       * @type {String}
       * @default 'scale'
       */
      actionName: "scale",
      /**
       * Drawing angle of the control.
       * NOT used for now, but name marked as needed for internal logic
       * example: to reuse the same drawing function for different rotated controls
       * @type {Number}
       * @default 0
       */
      angle: 0,
      /**
       * Relative position of the control. X
       * 0,0 is the center of the Object, while -0.5 (left) or 0.5 (right) are the extremities
       * of the bounding box.
       * @type {Number}
       * @default 0
       */
      x: 0,
      /**
       * Relative position of the control. Y
       * 0,0 is the center of the Object, while -0.5 (top) or 0.5 (bottom) are the extremities
       * of the bounding box.
       * @type {Number}
       * @default 0
       */
      y: 0,
      /**
       * Horizontal offset of the control from the defined position. In pixels
       * Positive offset moves the control to the right, negative to the left.
       * It used when you want to have position of control that does not scale with
       * the bounding box. Example: rotation control is placed at x:0, y: 0.5 on
       * the boundindbox, with an offset of 30 pixels vertically. Those 30 pixels will
       * stay 30 pixels no matter how the object is big. Another example is having 2
       * controls in the corner, that stay in the same position when the object scale.
       * of the bounding box.
       * @type {Number}
       * @default 0
       */
      offsetX: 0,
      /**
       * Vertical offset of the control from the defined position. In pixels
       * Positive offset moves the control to the bottom, negative to the top.
       * @type {Number}
       * @default 0
       */
      offsetY: 0,
      /**
       * Sets the length of the control. If null, defaults to object's cornerSize.
       * Expects both sizeX and sizeY to be set when set.
       * @type {?Number}
       * @default null
       */
      sizeX: null,
      /**
       * Sets the height of the control. If null, defaults to object's cornerSize.
       * Expects both sizeX and sizeY to be set when set.
       * @type {?Number}
       * @default null
       */
      sizeY: null,
      /**
       * Sets the length of the touch area of the control. If null, defaults to object's touchCornerSize.
       * Expects both touchSizeX and touchSizeY to be set when set.
       * @type {?Number}
       * @default null
       */
      touchSizeX: null,
      /**
       * Sets the height of the touch area of the control. If null, defaults to object's touchCornerSize.
       * Expects both touchSizeX and touchSizeY to be set when set.
       * @type {?Number}
       * @default null
       */
      touchSizeY: null,
      /**
       * Css cursor style to display when the control is hovered.
       * if the method `cursorStyleHandler` is provided, this property is ignored.
       * @type {String}
       * @default 'crosshair'
       */
      cursorStyle: "crosshair",
      /**
       * If controls has an offsetY or offsetX, draw a line that connects
       * the control to the bounding box
       * @type {Boolean}
       * @default false
       */
      withConnection: !1,
      /**
       * The control actionHandler, provide one to handle action ( control being moved )
       * @param {Event} eventData the native mouse event
       * @param {Object} transformData properties of the current transform
       * @param {Number} x x position of the cursor
       * @param {Number} y y position of the cursor
       * @return {Boolean} true if the action/event modified the object
       */
      actionHandler: function() {
      },
      /**
       * The control handler for mouse down, provide one to handle mouse down on control
       * @param {Event} eventData the native mouse event
       * @param {Object} transformData properties of the current transform
       * @param {Number} x x position of the cursor
       * @param {Number} y y position of the cursor
       * @return {Boolean} true if the action/event modified the object
       */
      mouseDownHandler: function() {
      },
      /**
       * The control mouseUpHandler, provide one to handle an effect on mouse up.
       * @param {Event} eventData the native mouse event
       * @param {Object} transformData properties of the current transform
       * @param {Number} x x position of the cursor
       * @param {Number} y y position of the cursor
       * @return {Boolean} true if the action/event modified the object
       */
      mouseUpHandler: function() {
      },
      /**
       * Returns control actionHandler
       * @param {Event} eventData the native mouse event
       * @param {fabric.Object} fabricObject on which the control is displayed
       * @param {fabric.Control} control control for which the action handler is being asked
       * @return {Function} the action handler
       */
      getActionHandler: function() {
        return this.actionHandler;
      },
      /**
       * Returns control mouseDown handler
       * @param {Event} eventData the native mouse event
       * @param {fabric.Object} fabricObject on which the control is displayed
       * @param {fabric.Control} control control for which the action handler is being asked
       * @return {Function} the action handler
       */
      getMouseDownHandler: function() {
        return this.mouseDownHandler;
      },
      /**
       * Returns control mouseUp handler
       * @param {Event} eventData the native mouse event
       * @param {fabric.Object} fabricObject on which the control is displayed
       * @param {fabric.Control} control control for which the action handler is being asked
       * @return {Function} the action handler
       */
      getMouseUpHandler: function() {
        return this.mouseUpHandler;
      },
      /**
       * Returns control cursorStyle for css using cursorStyle. If you need a more elaborate
       * function you can pass one in the constructor
       * the cursorStyle property
       * @param {Event} eventData the native mouse event
       * @param {fabric.Control} control the current control ( likely this)
       * @param {fabric.Object} object on which the control is displayed
       * @return {String}
       */
      cursorStyleHandler: function(a, t) {
        return t.cursorStyle;
      },
      /**
       * Returns the action name. The basic implementation just return the actionName property.
       * @param {Event} eventData the native mouse event
       * @param {fabric.Control} control the current control ( likely this)
       * @param {fabric.Object} object on which the control is displayed
       * @return {String}
       */
      getActionName: function(a, t) {
        return t.actionName;
      },
      /**
       * Returns controls visibility
       * @param {fabric.Object} object on which the control is displayed
       * @param {String} controlKey key where the control is memorized on the
       * @return {Boolean}
       */
      getVisibility: function(a, t) {
        var r = a._controlsVisibility;
        return r && typeof r[t] < "u" ? r[t] : this.visible;
      },
      /**
       * Sets controls visibility
       * @param {Boolean} visibility for the object
       * @return {Void}
       */
      setVisibility: function(a) {
        this.visible = a;
      },
      positionHandler: function(a, t) {
        var r = n.util.transformPoint({
          x: this.x * a.x + this.offsetX,
          y: this.y * a.y + this.offsetY
        }, t);
        return r;
      },
      /**
       * Returns the coords for this control based on object values.
       * @param {Number} objectAngle angle from the fabric object holding the control
       * @param {Number} objectCornerSize cornerSize from the fabric object holding the control (or touchCornerSize if
       *   isTouch is true)
       * @param {Number} centerX x coordinate where the control center should be
       * @param {Number} centerY y coordinate where the control center should be
       * @param {boolean} isTouch true if touch corner, false if normal corner
       */
      calcCornerCoords: function(a, t, r, e, s) {
        var o, i, l, u, d = s ? this.touchSizeX : this.sizeX, g = s ? this.touchSizeY : this.sizeY;
        if (d && g && d !== g) {
          var v = Math.atan2(g, d), m = Math.sqrt(d * d + g * g) / 2, C = v - n.util.degreesToRadians(a), p = Math.PI / 2 - v - n.util.degreesToRadians(a);
          o = m * n.util.cos(C), i = m * n.util.sin(C), l = m * n.util.cos(p), u = m * n.util.sin(p);
        } else {
          var x = d && g ? d : t;
          m = x * 0.7071067812;
          var C = n.util.degreesToRadians(45 - a);
          o = l = m * n.util.cos(C), i = u = m * n.util.sin(C);
        }
        return {
          tl: {
            x: r - u,
            y: e - l
          },
          tr: {
            x: r + o,
            y: e - i
          },
          bl: {
            x: r - o,
            y: e + i
          },
          br: {
            x: r + u,
            y: e + l
          }
        };
      },
      /**
      * Render function for the control.
      * When this function runs the context is unscaled. unrotate. Just retina scaled.
      * all the functions will have to translate to the point left,top before starting Drawing
      * if they want to draw a control where the position is detected.
      * left and top are the result of the positionHandler function
      * @param {RenderingContext2D} ctx the context where the control will be drawn
      * @param {Number} left position of the canvas where we are about to render the control.
      * @param {Number} top position of the canvas where we are about to render the control.
      * @param {Object} styleOverride
      * @param {fabric.Object} fabricObject the object where the control is about to be rendered
      */
      render: function(a, t, r, e, s) {
        switch (e = e || {}, e.cornerStyle || s.cornerStyle) {
          case "circle":
            n.controlsUtils.renderCircleControl.call(this, a, t, r, e, s);
            break;
          default:
            n.controlsUtils.renderSquareControl.call(this, a, t, r, e, s);
        }
      }
    };
  }(tt), function() {
    function c(r, e) {
      var s = r.getAttribute("style"), o = r.getAttribute("offset") || 0, i, l, u, d;
      if (o = parseFloat(o) / (/%$/.test(o) ? 100 : 1), o = o < 0 ? 0 : o > 1 ? 1 : o, s) {
        var g = s.split(/\s*;\s*/);
        for (g[g.length - 1] === "" && g.pop(), d = g.length; d--; ) {
          var v = g[d].split(/\s*:\s*/), m = v[0].trim(), C = v[1].trim();
          m === "stop-color" ? i = C : m === "stop-opacity" && (u = C);
        }
      }
      return i || (i = r.getAttribute("stop-color") || "rgb(0,0,0)"), u || (u = r.getAttribute("stop-opacity")), i = new f.Color(i), l = i.getAlpha(), u = isNaN(parseFloat(u)) ? 1 : parseFloat(u), u *= l * e, {
        offset: o,
        color: i.toRgb(),
        opacity: u
      };
    }
    function n(r) {
      return {
        x1: r.getAttribute("x1") || 0,
        y1: r.getAttribute("y1") || 0,
        x2: r.getAttribute("x2") || "100%",
        y2: r.getAttribute("y2") || 0
      };
    }
    function h(r) {
      return {
        x1: r.getAttribute("fx") || r.getAttribute("cx") || "50%",
        y1: r.getAttribute("fy") || r.getAttribute("cy") || "50%",
        r1: 0,
        x2: r.getAttribute("cx") || "50%",
        y2: r.getAttribute("cy") || "50%",
        r2: r.getAttribute("r") || "50%"
      };
    }
    var a = f.util.object.clone;
    f.Gradient = f.util.createClass(
      /** @lends fabric.Gradient.prototype */
      {
        /**
         * Horizontal offset for aligning gradients coming from SVG when outside pathgroups
         * @type Number
         * @default 0
         */
        offsetX: 0,
        /**
         * Vertical offset for aligning gradients coming from SVG when outside pathgroups
         * @type Number
         * @default 0
         */
        offsetY: 0,
        /**
         * A transform matrix to apply to the gradient before painting.
         * Imported from svg gradients, is not applied with the current transform in the center.
         * Before this transform is applied, the origin point is at the top left corner of the object
         * plus the addition of offsetY and offsetX.
         * @type Number[]
         * @default null
         */
        gradientTransform: null,
        /**
         * coordinates units for coords.
         * If `pixels`, the number of coords are in the same unit of width / height.
         * If set as `percentage` the coords are still a number, but 1 means 100% of width
         * for the X and 100% of the height for the y. It can be bigger than 1 and negative.
         * allowed values pixels or percentage.
         * @type String
         * @default 'pixels'
         */
        gradientUnits: "pixels",
        /**
         * Gradient type linear or radial
         * @type String
         * @default 'pixels'
         */
        type: "linear",
        /**
         * Constructor
         * @param {Object} options Options object with type, coords, gradientUnits and colorStops
         * @param {Object} [options.type] gradient type linear or radial
         * @param {Object} [options.gradientUnits] gradient units
         * @param {Object} [options.offsetX] SVG import compatibility
         * @param {Object} [options.offsetY] SVG import compatibility
         * @param {Object[]} options.colorStops contains the colorstops.
         * @param {Object} options.coords contains the coords of the gradient
         * @param {Number} [options.coords.x1] X coordiante of the first point for linear or of the focal point for radial
         * @param {Number} [options.coords.y1] Y coordiante of the first point for linear or of the focal point for radial
         * @param {Number} [options.coords.x2] X coordiante of the second point for linear or of the center point for radial
         * @param {Number} [options.coords.y2] Y coordiante of the second point for linear or of the center point for radial
         * @param {Number} [options.coords.r1] only for radial gradient, radius of the inner circle
         * @param {Number} [options.coords.r2] only for radial gradient, radius of the external circle
         * @return {fabric.Gradient} thisArg
         */
        initialize: function(r) {
          r || (r = {}), r.coords || (r.coords = {});
          var e, s = this;
          Object.keys(r).forEach(function(o) {
            s[o] = r[o];
          }), this.id ? this.id += "_" + f.Object.__uid++ : this.id = f.Object.__uid++, e = {
            x1: r.coords.x1 || 0,
            y1: r.coords.y1 || 0,
            x2: r.coords.x2 || 0,
            y2: r.coords.y2 || 0
          }, this.type === "radial" && (e.r1 = r.coords.r1 || 0, e.r2 = r.coords.r2 || 0), this.coords = e, this.colorStops = r.colorStops.slice();
        },
        /**
         * Adds another colorStop
         * @param {Object} colorStop Object with offset and color
         * @return {fabric.Gradient} thisArg
         */
        addColorStop: function(r) {
          for (var e in r) {
            var s = new f.Color(r[e]);
            this.colorStops.push({
              offset: parseFloat(e),
              color: s.toRgb(),
              opacity: s.getAlpha()
            });
          }
          return this;
        },
        /**
         * Returns object representation of a gradient
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object}
         */
        toObject: function(r) {
          var e = {
            type: this.type,
            coords: this.coords,
            colorStops: this.colorStops,
            offsetX: this.offsetX,
            offsetY: this.offsetY,
            gradientUnits: this.gradientUnits,
            gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform
          };
          return f.util.populateWithProperties(this, e, r), e;
        },
        /* _TO_SVG_START_ */
        /**
         * Returns SVG representation of an gradient
         * @param {Object} object Object to create a gradient for
         * @return {String} SVG representation of an gradient (linear/radial)
         */
        toSVG: function(r, l) {
          var s = a(this.coords, !0), o, i, l = l || {}, u, d, g = a(this.colorStops, !0), v = s.r1 > s.r2, m = this.gradientTransform ? this.gradientTransform.concat() : f.iMatrix.concat(), C = -this.offsetX, p = -this.offsetY, x = !!l.additionalTransform, A = this.gradientUnits === "pixels" ? "userSpaceOnUse" : "objectBoundingBox";
          if (g.sort(function(z, K) {
            return z.offset - K.offset;
          }), A === "objectBoundingBox" ? (C /= r.width, p /= r.height) : (C += r.width / 2, p += r.height / 2), r.type === "path" && this.gradientUnits !== "percentage" && (C -= r.pathOffset.x, p -= r.pathOffset.y), m[4] -= C, m[5] -= p, d = 'id="SVGID_' + this.id + '" gradientUnits="' + A + '"', d += ' gradientTransform="' + (x ? l.additionalTransform + " " : "") + f.util.matrixToSVG(m) + '" ', this.type === "linear" ? u = [
            "<linearGradient ",
            d,
            ' x1="',
            s.x1,
            '" y1="',
            s.y1,
            '" x2="',
            s.x2,
            '" y2="',
            s.y2,
            `">
`
          ] : this.type === "radial" && (u = [
            "<radialGradient ",
            d,
            ' cx="',
            v ? s.x1 : s.x2,
            '" cy="',
            v ? s.y1 : s.y2,
            '" r="',
            v ? s.r1 : s.r2,
            '" fx="',
            v ? s.x2 : s.x1,
            '" fy="',
            v ? s.y2 : s.y1,
            `">
`
          ]), this.type === "radial") {
            if (v)
              for (g = g.concat(), g.reverse(), o = 0, i = g.length; o < i; o++)
                g[o].offset = 1 - g[o].offset;
            var k = Math.min(s.r1, s.r2);
            if (k > 0) {
              var W = Math.max(s.r1, s.r2), N = k / W;
              for (o = 0, i = g.length; o < i; o++)
                g[o].offset += N * (1 - g[o].offset);
            }
          }
          for (o = 0, i = g.length; o < i; o++) {
            var H = g[o];
            u.push(
              "<stop ",
              'offset="',
              H.offset * 100 + "%",
              '" style="stop-color:',
              H.color,
              typeof H.opacity < "u" ? ";stop-opacity: " + H.opacity : ";",
              `"/>
`
            );
          }
          return u.push(this.type === "linear" ? `</linearGradient>
` : `</radialGradient>
`), u.join("");
        },
        /* _TO_SVG_END_ */
        /**
         * Returns an instance of CanvasGradient
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @return {CanvasGradient}
         */
        toLive: function(r) {
          var e, s = f.util.object.clone(this.coords), o, i;
          if (this.type) {
            for (this.type === "linear" ? e = r.createLinearGradient(
              s.x1,
              s.y1,
              s.x2,
              s.y2
            ) : this.type === "radial" && (e = r.createRadialGradient(
              s.x1,
              s.y1,
              s.r1,
              s.x2,
              s.y2,
              s.r2
            )), o = 0, i = this.colorStops.length; o < i; o++) {
              var l = this.colorStops[o].color, u = this.colorStops[o].opacity, d = this.colorStops[o].offset;
              typeof u < "u" && (l = new f.Color(l).setAlpha(u).toRgba()), e.addColorStop(d, l);
            }
            return e;
          }
        }
      }
    ), f.util.object.extend(f.Gradient, {
      /* _FROM_SVG_START_ */
      /**
       * Returns {@link fabric.Gradient} instance from an SVG element
       * @static
       * @memberOf fabric.Gradient
       * @param {SVGGradientElement} el SVG gradient element
       * @param {fabric.Object} instance
       * @param {String} opacityAttr A fill-opacity or stroke-opacity attribute to multiply to each stop's opacity.
       * @param {Object} svgOptions an object containing the size of the SVG in order to parse correctly gradients
       * that uses gradientUnits as 'userSpaceOnUse' and percentages.
       * @param {Object.number} viewBoxWidth width part of the viewBox attribute on svg
       * @param {Object.number} viewBoxHeight height part of the viewBox attribute on svg
       * @param {Object.number} width width part of the svg tag if viewBox is not specified
       * @param {Object.number} height height part of the svg tag if viewBox is not specified
       * @return {fabric.Gradient} Gradient instance
       * @see http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement
       * @see http://www.w3.org/TR/SVG/pservers.html#RadialGradientElement
       */
      fromElement: function(r, e, s, o) {
        var i = parseFloat(s) / (/%$/.test(s) ? 100 : 1);
        i = i < 0 ? 0 : i > 1 ? 1 : i, isNaN(i) && (i = 1);
        var l = r.getElementsByTagName("stop"), u, d = r.getAttribute("gradientUnits") === "userSpaceOnUse" ? "pixels" : "percentage", g = r.getAttribute("gradientTransform") || "", v = [], m, C, p = 0, x = 0, A;
        for (r.nodeName === "linearGradient" || r.nodeName === "LINEARGRADIENT" ? (u = "linear", m = n(r)) : (u = "radial", m = h(r)), C = l.length; C--; )
          v.push(c(l[C], i));
        A = f.parseTransformAttribute(g), t(e, m, o, d), d === "pixels" && (p = -e.left, x = -e.top);
        var k = new f.Gradient({
          id: r.getAttribute("id"),
          type: u,
          coords: m,
          colorStops: v,
          gradientUnits: d,
          gradientTransform: A,
          offsetX: p,
          offsetY: x
        });
        return k;
      }
      /* _FROM_SVG_END_ */
    });
    function t(r, e, s, o) {
      var i, l;
      Object.keys(e).forEach(function(u) {
        i = e[u], i === "Infinity" ? l = 1 : i === "-Infinity" ? l = 0 : (l = parseFloat(e[u], 10), typeof i == "string" && /^(\d+\.\d+)%|(\d+)%$/.test(i) && (l *= 0.01, o === "pixels" && ((u === "x1" || u === "x2" || u === "r2") && (l *= s.viewBoxWidth || s.width), (u === "y1" || u === "y2") && (l *= s.viewBoxHeight || s.height)))), e[u] = l;
      });
    }
  }(), function() {
    var c = f.util.toFixed;
    f.Pattern = f.util.createClass(
      /** @lends fabric.Pattern.prototype */
      {
        /**
         * Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
         * @type String
         * @default
         */
        repeat: "repeat",
        /**
         * Pattern horizontal offset from object's left/top corner
         * @type Number
         * @default
         */
        offsetX: 0,
        /**
         * Pattern vertical offset from object's left/top corner
         * @type Number
         * @default
         */
        offsetY: 0,
        /**
         * crossOrigin value (one of "", "anonymous", "use-credentials")
         * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes
         * @type String
         * @default
         */
        crossOrigin: "",
        /**
         * transform matrix to change the pattern, imported from svgs.
         * @type Array
         * @default
         */
        patternTransform: null,
        /**
         * Constructor
         * @param {Object} [options] Options object
         * @param {Function} [callback] function to invoke after callback init.
         * @return {fabric.Pattern} thisArg
         */
        initialize: function(n, h) {
          if (n || (n = {}), this.id = f.Object.__uid++, this.setOptions(n), !n.source || n.source && typeof n.source != "string") {
            h && h(this);
            return;
          } else {
            var a = this;
            this.source = f.util.createImage(), f.util.loadImage(n.source, function(t, r) {
              a.source = t, h && h(a, r);
            }, null, this.crossOrigin);
          }
        },
        /**
         * Returns object representation of a pattern
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of a pattern instance
         */
        toObject: function(n) {
          var h = f.Object.NUM_FRACTION_DIGITS, a, t;
          return typeof this.source.src == "string" ? a = this.source.src : typeof this.source == "object" && this.source.toDataURL && (a = this.source.toDataURL()), t = {
            type: "pattern",
            source: a,
            repeat: this.repeat,
            crossOrigin: this.crossOrigin,
            offsetX: c(this.offsetX, h),
            offsetY: c(this.offsetY, h),
            patternTransform: this.patternTransform ? this.patternTransform.concat() : null
          }, f.util.populateWithProperties(this, t, n), t;
        },
        /* _TO_SVG_START_ */
        /**
         * Returns SVG representation of a pattern
         * @param {fabric.Object} object
         * @return {String} SVG representation of a pattern
         */
        toSVG: function(n) {
          var h = typeof this.source == "function" ? this.source() : this.source, a = h.width / n.width, t = h.height / n.height, r = this.offsetX / n.width, e = this.offsetY / n.height, s = "";
          return (this.repeat === "repeat-x" || this.repeat === "no-repeat") && (t = 1, e && (t += Math.abs(e))), (this.repeat === "repeat-y" || this.repeat === "no-repeat") && (a = 1, r && (a += Math.abs(r))), h.src ? s = h.src : h.toDataURL && (s = h.toDataURL()), '<pattern id="SVGID_' + this.id + '" x="' + r + '" y="' + e + '" width="' + a + '" height="' + t + `">
<image x="0" y="0" width="` + h.width + '" height="' + h.height + '" xlink:href="' + s + `"></image>
</pattern>
`;
        },
        /* _TO_SVG_END_ */
        setOptions: function(n) {
          for (var h in n)
            this[h] = n[h];
        },
        /**
         * Returns an instance of CanvasPattern
         * @param {CanvasRenderingContext2D} ctx Context to create pattern
         * @return {CanvasPattern}
         */
        toLive: function(n) {
          var h = this.source;
          return !h || typeof h.src < "u" && (!h.complete || h.naturalWidth === 0 || h.naturalHeight === 0) ? "" : n.createPattern(h, this.repeat);
        }
      }
    );
  }(), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.util.toFixed;
    if (n.Shadow) {
      n.warn("fabric.Shadow is already defined.");
      return;
    }
    n.Shadow = n.util.createClass(
      /** @lends fabric.Shadow.prototype */
      {
        /**
         * Shadow color
         * @type String
         * @default
         */
        color: "rgb(0,0,0)",
        /**
         * Shadow blur
         * @type Number
         */
        blur: 0,
        /**
         * Shadow horizontal offset
         * @type Number
         * @default
         */
        offsetX: 0,
        /**
         * Shadow vertical offset
         * @type Number
         * @default
         */
        offsetY: 0,
        /**
         * Whether the shadow should affect stroke operations
         * @type Boolean
         * @default
         */
        affectStroke: !1,
        /**
         * Indicates whether toObject should include default values
         * @type Boolean
         * @default
         */
        includeDefaultValues: !0,
        /**
         * When `false`, the shadow will scale with the object.
         * When `true`, the shadow's offsetX, offsetY, and blur will not be affected by the object's scale.
         * default to false
         * @type Boolean
         * @default
         */
        nonScaling: !1,
        /**
         * Constructor
         * @param {Object|String} [options] Options object with any of color, blur, offsetX, offsetY properties or string (e.g. "rgba(0,0,0,0.2) 2px 2px 10px")
         * @return {fabric.Shadow} thisArg
         */
        initialize: function(a) {
          typeof a == "string" && (a = this._parseShadow(a));
          for (var t in a)
            this[t] = a[t];
          this.id = n.Object.__uid++;
        },
        /**
         * @private
         * @param {String} shadow Shadow value to parse
         * @return {Object} Shadow object with color, offsetX, offsetY and blur
         */
        _parseShadow: function(a) {
          var t = a.trim(), r = n.Shadow.reOffsetsAndBlur.exec(t) || [], e = t.replace(n.Shadow.reOffsetsAndBlur, "") || "rgb(0,0,0)";
          return {
            color: e.trim(),
            offsetX: parseFloat(r[1], 10) || 0,
            offsetY: parseFloat(r[2], 10) || 0,
            blur: parseFloat(r[3], 10) || 0
          };
        },
        /**
         * Returns a string representation of an instance
         * @see http://www.w3.org/TR/css-text-decor-3/#text-shadow
         * @return {String} Returns CSS3 text-shadow declaration
         */
        toString: function() {
          return [this.offsetX, this.offsetY, this.blur, this.color].join("px ");
        },
        /* _TO_SVG_START_ */
        /**
         * Returns SVG representation of a shadow
         * @param {fabric.Object} object
         * @return {String} SVG representation of a shadow
         */
        toSVG: function(a) {
          var t = 40, r = 40, e = n.Object.NUM_FRACTION_DIGITS, s = n.util.rotateVector(
            { x: this.offsetX, y: this.offsetY },
            n.util.degreesToRadians(-a.angle)
          ), o = 20, i = new n.Color(this.color);
          return a.width && a.height && (t = h((Math.abs(s.x) + this.blur) / a.width, e) * 100 + o, r = h((Math.abs(s.y) + this.blur) / a.height, e) * 100 + o), a.flipX && (s.x *= -1), a.flipY && (s.y *= -1), '<filter id="SVGID_' + this.id + '" y="-' + r + '%" height="' + (100 + 2 * r) + '%" x="-' + t + '%" width="' + (100 + 2 * t) + `%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="` + h(this.blur ? this.blur / 2 : 0, e) + `"></feGaussianBlur>
	<feOffset dx="` + h(s.x, e) + '" dy="' + h(s.y, e) + `" result="oBlur" ></feOffset>
	<feFlood flood-color="` + i.toRgb() + '" flood-opacity="' + i.getAlpha() + `"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`;
        },
        /* _TO_SVG_END_ */
        /**
         * Returns object representation of a shadow
         * @return {Object} Object representation of a shadow instance
         */
        toObject: function() {
          if (this.includeDefaultValues)
            return {
              color: this.color,
              blur: this.blur,
              offsetX: this.offsetX,
              offsetY: this.offsetY,
              affectStroke: this.affectStroke,
              nonScaling: this.nonScaling
            };
          var a = {}, t = n.Shadow.prototype;
          return ["color", "blur", "offsetX", "offsetY", "affectStroke", "nonScaling"].forEach(function(r) {
            this[r] !== t[r] && (a[r] = this[r]);
          }, this), a;
        }
      }
    ), n.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(\d+(?:\.\d*)?(?:px)?)?(?:\s?|$)(?:$|\s)/;
  }(tt), function() {
    if (f.StaticCanvas) {
      f.warn("fabric.StaticCanvas is already defined.");
      return;
    }
    var c = f.util.object.extend, n = f.util.getElementOffset, h = f.util.removeFromArray, a = f.util.toFixed, t = f.util.transformPoint, r = f.util.invertTransform, e = f.util.getNodeCanvas, s = f.util.createCanvasElement, o = new Error("Could not initialize `canvas` element");
    f.StaticCanvas = f.util.createClass(
      f.CommonMethods,
      /** @lends fabric.StaticCanvas.prototype */
      {
        /**
         * Constructor
         * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
        initialize: function(i, l) {
          l || (l = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(i, l);
        },
        /**
         * Background color of canvas instance.
         * Should be set via {@link fabric.StaticCanvas#setBackgroundColor}.
         * @type {(String|fabric.Pattern)}
         * @default
         */
        backgroundColor: "",
        /**
         * Background image of canvas instance.
         * since 2.4.0 image caching is active, please when putting an image as background, add to the
         * canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
         * vale. As an alternative you can disable image objectCaching
         * @type fabric.Image
         * @default
         */
        backgroundImage: null,
        /**
         * Overlay color of canvas instance.
         * Should be set via {@link fabric.StaticCanvas#setOverlayColor}
         * @since 1.3.9
         * @type {(String|fabric.Pattern)}
         * @default
         */
        overlayColor: "",
        /**
         * Overlay image of canvas instance.
         * since 2.4.0 image caching is active, please when putting an image as overlay, add to the
         * canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
         * vale. As an alternative you can disable image objectCaching
         * @type fabric.Image
         * @default
         */
        overlayImage: null,
        /**
         * Indicates whether toObject/toDatalessObject should include default values
         * if set to false, takes precedence over the object value.
         * @type Boolean
         * @default
         */
        includeDefaultValues: !0,
        /**
         * Indicates whether objects' state should be saved
         * @type Boolean
         * @default
         */
        stateful: !1,
        /**
         * Indicates whether {@link fabric.Collection.add}, {@link fabric.Collection.insertAt} and {@link fabric.Collection.remove},
         * {@link fabric.StaticCanvas.moveTo}, {@link fabric.StaticCanvas.clear} and many more, should also re-render canvas.
         * Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
         * since the renders are quequed and executed one per frame.
         * Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
         * Left default to true to do not break documentation and old app, fiddles.
         * @type Boolean
         * @default
         */
        renderOnAddRemove: !0,
        /**
         * Indicates whether object controls (borders/controls) are rendered above overlay image
         * @type Boolean
         * @default
         */
        controlsAboveOverlay: !1,
        /**
         * Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas
         * @type Boolean
         * @default
         */
        allowTouchScrolling: !1,
        /**
         * Indicates whether this canvas will use image smoothing, this is on by default in browsers
         * @type Boolean
         * @default
         */
        imageSmoothingEnabled: !0,
        /**
         * The transformation (a Canvas 2D API transform matrix) which focuses the viewport
         * @type Array
         * @example <caption>Default transform</caption>
         * canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
         * @example <caption>Scale by 70% and translate toward bottom-right by 50, without skewing</caption>
         * canvas.viewportTransform = [0.7, 0, 0, 0.7, 50, 50];
         * @default
         */
        viewportTransform: f.iMatrix.concat(),
        /**
         * if set to false background image is not affected by viewport transform
         * @since 1.6.3
         * @type Boolean
         * @default
         */
        backgroundVpt: !0,
        /**
         * if set to false overlya image is not affected by viewport transform
         * @since 1.6.3
         * @type Boolean
         * @default
         */
        overlayVpt: !0,
        /**
         * When true, canvas is scaled by devicePixelRatio for better rendering on retina screens
         * @type Boolean
         * @default
         */
        enableRetinaScaling: !0,
        /**
         * Describe canvas element extension over design
         * properties are tl,tr,bl,br.
         * if canvas is not zoomed/panned those points are the four corner of canvas
         * if canvas is viewportTransformed you those points indicate the extension
         * of canvas element in plain untrasformed coordinates
         * The coordinates get updated with @method calcViewportBoundaries.
         * @memberOf fabric.StaticCanvas.prototype
         */
        vptCoords: {},
        /**
         * Based on vptCoords and object.aCoords, skip rendering of objects that
         * are not included in current viewport.
         * May greatly help in applications with crowded canvas and use of zoom/pan
         * If One of the corner of the bounding box of the object is on the canvas
         * the objects get rendered.
         * @memberOf fabric.StaticCanvas.prototype
         * @type Boolean
         * @default
         */
        skipOffscreen: !0,
        /**
         * a fabricObject that, without stroke define a clipping area with their shape. filled in black
         * the clipPath object gets used when the canvas has rendered, and the context is placed in the
         * top left corner of the canvas.
         * clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true
         * @type fabric.Object
         */
        clipPath: void 0,
        /**
         * @private
         * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
         * @param {Object} [options] Options object
         */
        _initStatic: function(i, l) {
          var u = this.requestRenderAllBound;
          this._objects = [], this._createLowerCanvas(i), this._initOptions(l), this.interactive || this._initRetinaScaling(), l.overlayImage && this.setOverlayImage(l.overlayImage, u), l.backgroundImage && this.setBackgroundImage(l.backgroundImage, u), l.backgroundColor && this.setBackgroundColor(l.backgroundColor, u), l.overlayColor && this.setOverlayColor(l.overlayColor, u), this.calcOffset();
        },
        /**
         * @private
         */
        _isRetinaScaling: function() {
          return f.devicePixelRatio > 1 && this.enableRetinaScaling;
        },
        /**
         * @private
         * @return {Number} retinaScaling if applied, otherwise 1;
         */
        getRetinaScaling: function() {
          return this._isRetinaScaling() ? Math.max(1, f.devicePixelRatio) : 1;
        },
        /**
         * @private
         */
        _initRetinaScaling: function() {
          if (this._isRetinaScaling()) {
            var i = f.devicePixelRatio;
            this.__initRetinaScaling(i, this.lowerCanvasEl, this.contextContainer), this.upperCanvasEl && this.__initRetinaScaling(i, this.upperCanvasEl, this.contextTop);
          }
        },
        __initRetinaScaling: function(i, l, u) {
          l.setAttribute("width", this.width * i), l.setAttribute("height", this.height * i), u.scale(i, i);
        },
        /**
         * Calculates canvas element offset relative to the document
         * This method is also attached as "resize" event handler of window
         * @return {fabric.Canvas} instance
         * @chainable
         */
        calcOffset: function() {
          return this._offset = n(this.lowerCanvasEl), this;
        },
        /**
         * Sets {@link fabric.StaticCanvas#overlayImage|overlay image} for this canvas
         * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set overlay to
         * @param {Function} callback callback to invoke when image is loaded and set as an overlay
         * @param {Object} [options] Optional options to set for the {@link fabric.Image|overlay image}.
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/fabricjs/MnzHT/|jsFiddle demo}
         * @example <caption>Normal overlayImage with left/top = 0</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   // Needed to position overlayImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>overlayImage with different properties</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>Stretched overlayImage #1 - width/height correspond to canvas width/height</caption>
         * fabric.Image.fromURL('http://fabricjs.com/assets/jail_cell_bars.png', function(img, isError) {
         *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
         *    canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
         * });
         * @example <caption>Stretched overlayImage #2 - width/height correspond to canvas width/height</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   width: canvas.width,
         *   height: canvas.height,
         *   // Needed to position overlayImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>overlayImage loaded from cross-origin</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top',
         *   crossOrigin: 'anonymous'
         * });
         */
        setOverlayImage: function(i, l, u) {
          return this.__setBgOverlayImage("overlayImage", i, l, u);
        },
        /**
         * Sets {@link fabric.StaticCanvas#backgroundImage|background image} for this canvas
         * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set background to
         * @param {Function} callback Callback to invoke when image is loaded and set as background
         * @param {Object} [options] Optional options to set for the {@link fabric.Image|background image}.
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/djnr8o7a/28/|jsFiddle demo}
         * @example <caption>Normal backgroundImage with left/top = 0</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   // Needed to position backgroundImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>backgroundImage with different properties</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>Stretched backgroundImage #1 - width/height correspond to canvas width/height</caption>
         * fabric.Image.fromURL('http://fabricjs.com/assets/honey_im_subtle.png', function(img, isError) {
         *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
         *    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
         * });
         * @example <caption>Stretched backgroundImage #2 - width/height correspond to canvas width/height</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   width: canvas.width,
         *   height: canvas.height,
         *   // Needed to position backgroundImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>backgroundImage loaded from cross-origin</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top',
         *   crossOrigin: 'anonymous'
         * });
         */
        // TODO: fix stretched examples
        setBackgroundImage: function(i, l, u) {
          return this.__setBgOverlayImage("backgroundImage", i, l, u);
        },
        /**
         * Sets {@link fabric.StaticCanvas#overlayColor|foreground color} for this canvas
         * @param {(String|fabric.Pattern)} overlayColor Color or pattern to set foreground color to
         * @param {Function} callback Callback to invoke when foreground color is set
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/fabricjs/pB55h/|jsFiddle demo}
         * @example <caption>Normal overlayColor - color value</caption>
         * canvas.setOverlayColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as overlayColor</caption>
         * canvas.setOverlayColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
         * }, canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as overlayColor with repeat and offset</caption>
         * canvas.setOverlayColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
         *   repeat: 'repeat',
         *   offsetX: 200,
         *   offsetY: 100
         * }, canvas.renderAll.bind(canvas));
         */
        setOverlayColor: function(i, l) {
          return this.__setBgOverlayColor("overlayColor", i, l);
        },
        /**
         * Sets {@link fabric.StaticCanvas#backgroundColor|background color} for this canvas
         * @param {(String|fabric.Pattern)} backgroundColor Color or pattern to set background color to
         * @param {Function} callback Callback to invoke when background color is set
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/fabricjs/hXzvk/|jsFiddle demo}
         * @example <caption>Normal backgroundColor - color value</caption>
         * canvas.setBackgroundColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as backgroundColor</caption>
         * canvas.setBackgroundColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
         * }, canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as backgroundColor with repeat and offset</caption>
         * canvas.setBackgroundColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
         *   repeat: 'repeat',
         *   offsetX: 200,
         *   offsetY: 100
         * }, canvas.renderAll.bind(canvas));
         */
        setBackgroundColor: function(i, l) {
          return this.__setBgOverlayColor("backgroundColor", i, l);
        },
        /**
         * @private
         * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundImage|backgroundImage}
         * or {@link fabric.StaticCanvas#overlayImage|overlayImage})
         * @param {(fabric.Image|String|null)} image fabric.Image instance, URL of an image or null to set background or overlay to
         * @param {Function} callback Callback to invoke when image is loaded and set as background or overlay. The first argument is the created image, the second argument is a flag indicating whether an error occurred or not.
         * @param {Object} [options] Optional options to set for the {@link fabric.Image|image}.
         */
        __setBgOverlayImage: function(i, l, u, d) {
          return typeof l == "string" ? f.util.loadImage(l, function(g, v) {
            if (g) {
              var m = new f.Image(g, d);
              this[i] = m, m.canvas = this;
            }
            u && u(g, v);
          }, this, d && d.crossOrigin) : (d && l.setOptions(d), this[i] = l, l && (l.canvas = this), u && u(l, !1)), this;
        },
        /**
         * @private
         * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundColor|backgroundColor}
         * or {@link fabric.StaticCanvas#overlayColor|overlayColor})
         * @param {(Object|String|null)} color Object with pattern information, color value or null
         * @param {Function} [callback] Callback is invoked when color is set
         */
        __setBgOverlayColor: function(i, l, u) {
          return this[i] = l, this._initGradient(l, i), this._initPattern(l, i, u), this;
        },
        /**
         * @private
         */
        _createCanvasElement: function() {
          var i = s();
          if (!i || (i.style || (i.style = {}), typeof i.getContext > "u"))
            throw o;
          return i;
        },
        /**
         * @private
         * @param {Object} [options] Options object
         */
        _initOptions: function(i) {
          var l = this.lowerCanvasEl;
          this._setOptions(i), this.width = this.width || parseInt(l.width, 10) || 0, this.height = this.height || parseInt(l.height, 10) || 0, this.lowerCanvasEl.style && (l.width = this.width, l.height = this.height, l.style.width = this.width + "px", l.style.height = this.height + "px", this.viewportTransform = this.viewportTransform.slice());
        },
        /**
         * Creates a bottom canvas
         * @private
         * @param {HTMLElement} [canvasEl]
         */
        _createLowerCanvas: function(i) {
          i && i.getContext ? this.lowerCanvasEl = i : this.lowerCanvasEl = f.util.getById(i) || this._createCanvasElement(), f.util.addClass(this.lowerCanvasEl, "lower-canvas"), this._originalCanvasStyle = this.lowerCanvasEl.style, this.interactive && this._applyCanvasStyle(this.lowerCanvasEl), this.contextContainer = this.lowerCanvasEl.getContext("2d");
        },
        /**
         * Returns canvas width (in px)
         * @return {Number}
         */
        getWidth: function() {
          return this.width;
        },
        /**
         * Returns canvas height (in px)
         * @return {Number}
         */
        getHeight: function() {
          return this.height;
        },
        /**
         * Sets width of this canvas instance
         * @param {Number|String} value                         Value to set width to
         * @param {Object}        [options]                     Options object
         * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
         * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        setWidth: function(i, l) {
          return this.setDimensions({ width: i }, l);
        },
        /**
         * Sets height of this canvas instance
         * @param {Number|String} value                         Value to set height to
         * @param {Object}        [options]                     Options object
         * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
         * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        setHeight: function(i, l) {
          return this.setDimensions({ height: i }, l);
        },
        /**
         * Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)
         * @param {Object}        dimensions                    Object with width/height properties
         * @param {Number|String} [dimensions.width]            Width of canvas element
         * @param {Number|String} [dimensions.height]           Height of canvas element
         * @param {Object}        [options]                     Options object
         * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
         * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        setDimensions: function(i, l) {
          var u;
          l = l || {};
          for (var d in i)
            u = i[d], l.cssOnly || (this._setBackstoreDimension(d, i[d]), u += "px", this.hasLostContext = !0), l.backstoreOnly || this._setCssDimension(d, u);
          return this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop), this._initRetinaScaling(), this.calcOffset(), l.cssOnly || this.requestRenderAll(), this;
        },
        /**
         * Helper for setting width/height
         * @private
         * @param {String} prop property (width|height)
         * @param {Number} value value to set property to
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        _setBackstoreDimension: function(i, l) {
          return this.lowerCanvasEl[i] = l, this.upperCanvasEl && (this.upperCanvasEl[i] = l), this.cacheCanvasEl && (this.cacheCanvasEl[i] = l), this[i] = l, this;
        },
        /**
         * Helper for setting css width/height
         * @private
         * @param {String} prop property (width|height)
         * @param {String} value value to set property to
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        _setCssDimension: function(i, l) {
          return this.lowerCanvasEl.style[i] = l, this.upperCanvasEl && (this.upperCanvasEl.style[i] = l), this.wrapperEl && (this.wrapperEl.style[i] = l), this;
        },
        /**
         * Returns canvas zoom level
         * @return {Number}
         */
        getZoom: function() {
          return this.viewportTransform[0];
        },
        /**
         * Sets viewport transformation of this canvas instance
         * @param {Array} vpt a Canvas 2D API transform matrix
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        setViewportTransform: function(i) {
          var l = this._activeObject, u = this.backgroundImage, d = this.overlayImage, g, v, m;
          for (this.viewportTransform = i, v = 0, m = this._objects.length; v < m; v++)
            g = this._objects[v], g.group || g.setCoords(!0);
          return l && l.setCoords(), u && u.setCoords(!0), d && d.setCoords(!0), this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Sets zoom level of this canvas instance, the zoom centered around point
         * meaning that following zoom to point with the same point will have the visual
         * effect of the zoom originating from that point. The point won't move.
         * It has nothing to do with canvas center or visual center of the viewport.
         * @param {fabric.Point} point to zoom with respect to
         * @param {Number} value to set zoom to, less than 1 zooms out
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        zoomToPoint: function(i, l) {
          var u = i, d = this.viewportTransform.slice(0);
          i = t(i, r(this.viewportTransform)), d[0] = l, d[3] = l;
          var g = t(i, d);
          return d[4] += u.x - g.x, d[5] += u.y - g.y, this.setViewportTransform(d);
        },
        /**
         * Sets zoom level of this canvas instance
         * @param {Number} value to set zoom to, less than 1 zooms out
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        setZoom: function(i) {
          return this.zoomToPoint(new f.Point(0, 0), i), this;
        },
        /**
         * Pan viewport so as to place point at top left corner of canvas
         * @param {fabric.Point} point to move to
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        absolutePan: function(i) {
          var l = this.viewportTransform.slice(0);
          return l[4] = -i.x, l[5] = -i.y, this.setViewportTransform(l);
        },
        /**
         * Pans viewpoint relatively
         * @param {fabric.Point} point (position vector) to move by
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        relativePan: function(i) {
          return this.absolutePan(new f.Point(
            -i.x - this.viewportTransform[4],
            -i.y - this.viewportTransform[5]
          ));
        },
        /**
         * Returns &lt;canvas> element corresponding to this instance
         * @return {HTMLCanvasElement}
         */
        getElement: function() {
          return this.lowerCanvasEl;
        },
        /**
         * @private
         * @param {fabric.Object} obj Object that was added
         */
        _onObjectAdded: function(i) {
          this.stateful && i.setupState(), i._set("canvas", this), i.setCoords(), this.fire("object:added", { target: i }), i.fire("added");
        },
        /**
         * @private
         * @param {fabric.Object} obj Object that was removed
         */
        _onObjectRemoved: function(i) {
          this.fire("object:removed", { target: i }), i.fire("removed"), delete i.canvas;
        },
        /**
         * Clears specified context of canvas element
         * @param {CanvasRenderingContext2D} ctx Context to clear
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        clearContext: function(i) {
          return i.clearRect(0, 0, this.width, this.height), this;
        },
        /**
         * Returns context of canvas where objects are drawn
         * @return {CanvasRenderingContext2D}
         */
        getContext: function() {
          return this.contextContainer;
        },
        /**
         * Clears all contexts (background, main, top) of an instance
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        clear: function() {
          return this.remove.apply(this, this.getObjects()), this.backgroundImage = null, this.overlayImage = null, this.backgroundColor = "", this.overlayColor = "", this._hasITextHandlers && (this.off("mouse:up", this._mouseUpITextHandler), this._iTextInstances = null, this._hasITextHandlers = !1), this.clearContext(this.contextContainer), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Renders the canvas
         * @return {fabric.Canvas} instance
         * @chainable
         */
        renderAll: function() {
          var i = this.contextContainer;
          return this.renderCanvas(i, this._objects), this;
        },
        /**
         * Function created to be instance bound at initialization
         * used in requestAnimationFrame rendering
         * Let the fabricJS call it. If you call it manually you could have more
         * animationFrame stacking on to of each other
         * for an imperative rendering, use canvas.renderAll
         * @private
         * @return {fabric.Canvas} instance
         * @chainable
         */
        renderAndReset: function() {
          this.isRendering = 0, this.renderAll();
        },
        /**
         * Append a renderAll request to next animation frame.
         * unless one is already in progress, in that case nothing is done
         * a boolean flag will avoid appending more.
         * @return {fabric.Canvas} instance
         * @chainable
         */
        requestRenderAll: function() {
          return this.isRendering || (this.isRendering = f.util.requestAnimFrame(this.renderAndResetBound)), this;
        },
        /**
         * Calculate the position of the 4 corner of canvas with current viewportTransform.
         * helps to determinate when an object is in the current rendering viewport using
         * object absolute coordinates ( aCoords )
         * @return {Object} points.tl
         * @chainable
         */
        calcViewportBoundaries: function() {
          var i = {}, l = this.width, u = this.height, d = r(this.viewportTransform);
          return i.tl = t({ x: 0, y: 0 }, d), i.br = t({ x: l, y: u }, d), i.tr = new f.Point(i.br.x, i.tl.y), i.bl = new f.Point(i.tl.x, i.br.y), this.vptCoords = i, i;
        },
        cancelRequestedRender: function() {
          this.isRendering && (f.util.cancelAnimFrame(this.isRendering), this.isRendering = 0);
        },
        /**
         * Renders background, objects, overlay and controls.
         * @param {CanvasRenderingContext2D} ctx
         * @param {Array} objects to render
         * @return {fabric.Canvas} instance
         * @chainable
         */
        renderCanvas: function(i, l) {
          var u = this.viewportTransform, d = this.clipPath;
          this.cancelRequestedRender(), this.calcViewportBoundaries(), this.clearContext(i), f.util.setImageSmoothing(i, this.imageSmoothingEnabled), this.fire("before:render", { ctx: i }), this._renderBackground(i), i.save(), i.transform(u[0], u[1], u[2], u[3], u[4], u[5]), this._renderObjects(i, l), i.restore(), !this.controlsAboveOverlay && this.interactive && this.drawControls(i), d && (d.canvas = this, d.shouldCache(), d._transformDone = !0, d.renderCache({ forClipping: !0 }), this.drawClipPathOnCanvas(i)), this._renderOverlay(i), this.controlsAboveOverlay && this.interactive && this.drawControls(i), this.fire("after:render", { ctx: i });
        },
        /**
         * Paint the cached clipPath on the lowerCanvasEl
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawClipPathOnCanvas: function(i) {
          var l = this.viewportTransform, u = this.clipPath;
          i.save(), i.transform(l[0], l[1], l[2], l[3], l[4], l[5]), i.globalCompositeOperation = "destination-in", u.transform(i), i.scale(1 / u.zoomX, 1 / u.zoomY), i.drawImage(u._cacheCanvas, -u.cacheTranslationX, -u.cacheTranslationY), i.restore();
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Array} objects to render
         */
        _renderObjects: function(i, l) {
          var u, d;
          for (u = 0, d = l.length; u < d; ++u)
            l[u] && l[u].render(i);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {string} property 'background' or 'overlay'
         */
        _renderBackgroundOrOverlay: function(i, l) {
          var u = this[l + "Color"], d = this[l + "Image"], g = this.viewportTransform, v = this[l + "Vpt"];
          if (!(!u && !d)) {
            if (u) {
              i.save(), i.beginPath(), i.moveTo(0, 0), i.lineTo(this.width, 0), i.lineTo(this.width, this.height), i.lineTo(0, this.height), i.closePath(), i.fillStyle = u.toLive ? u.toLive(i, this) : u, v && i.transform(g[0], g[1], g[2], g[3], g[4], g[5]), i.transform(1, 0, 0, 1, u.offsetX || 0, u.offsetY || 0);
              var m = u.gradientTransform || u.patternTransform;
              m && i.transform(m[0], m[1], m[2], m[3], m[4], m[5]), i.fill(), i.restore();
            }
            d && (i.save(), v && i.transform(g[0], g[1], g[2], g[3], g[4], g[5]), d.render(i), i.restore());
          }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderBackground: function(i) {
          this._renderBackgroundOrOverlay(i, "background");
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderOverlay: function(i) {
          this._renderBackgroundOrOverlay(i, "overlay");
        },
        /**
         * Returns coordinates of a center of canvas.
         * Returned value is an object with top and left properties
         * @return {Object} object with "top" and "left" number values
         * @deprecated migrate to `getCenterPoint`
         */
        getCenter: function() {
          return {
            top: this.height / 2,
            left: this.width / 2
          };
        },
        /**
         * Returns coordinates of a center of canvas.
         * @return {fabric.Point} 
         */
        getCenterPoint: function() {
          return new f.Point(this.width / 2, this.height / 2);
        },
        /**
         * Centers object horizontally in the canvas
         * @param {fabric.Object} object Object to center horizontally
         * @return {fabric.Canvas} thisArg
         */
        centerObjectH: function(i) {
          return this._centerObject(i, new f.Point(this.getCenterPoint().x, i.getCenterPoint().y));
        },
        /**
         * Centers object vertically in the canvas
         * @param {fabric.Object} object Object to center vertically
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        centerObjectV: function(i) {
          return this._centerObject(i, new f.Point(i.getCenterPoint().x, this.getCenterPoint().y));
        },
        /**
         * Centers object vertically and horizontally in the canvas
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        centerObject: function(i) {
          var l = this.getCenterPoint();
          return this._centerObject(i, l);
        },
        /**
         * Centers object vertically and horizontally in the viewport
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        viewportCenterObject: function(i) {
          var l = this.getVpCenter();
          return this._centerObject(i, l);
        },
        /**
         * Centers object horizontally in the viewport, object.top is unchanged
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        viewportCenterObjectH: function(i) {
          var l = this.getVpCenter();
          return this._centerObject(i, new f.Point(l.x, i.getCenterPoint().y)), this;
        },
        /**
         * Centers object Vertically in the viewport, object.top is unchanged
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        viewportCenterObjectV: function(i) {
          var l = this.getVpCenter();
          return this._centerObject(i, new f.Point(i.getCenterPoint().x, l.y));
        },
        /**
         * Calculate the point in canvas that correspond to the center of actual viewport.
         * @return {fabric.Point} vpCenter, viewport center
         * @chainable
         */
        getVpCenter: function() {
          var i = this.getCenterPoint(), l = r(this.viewportTransform);
          return t(i, l);
        },
        /**
         * @private
         * @param {fabric.Object} object Object to center
         * @param {fabric.Point} center Center point
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        _centerObject: function(i, l) {
          return i.setPositionByOrigin(l, "center", "center"), i.setCoords(), this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Returns dataless JSON representation of canvas
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {String} json string
         */
        toDatalessJSON: function(i) {
          return this.toDatalessObject(i);
        },
        /**
         * Returns object representation of canvas
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(i) {
          return this._toObjectMethod("toObject", i);
        },
        /**
         * Returns dataless object representation of canvas
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toDatalessObject: function(i) {
          return this._toObjectMethod("toDatalessObject", i);
        },
        /**
         * @private
         */
        _toObjectMethod: function(i, l) {
          var u = this.clipPath, d = {
            version: f.version,
            objects: this._toObjects(i, l)
          };
          return u && !u.excludeFromExport && (d.clipPath = this._toObject(this.clipPath, i, l)), c(d, this.__serializeBgOverlay(i, l)), f.util.populateWithProperties(this, d, l), d;
        },
        /**
         * @private
         */
        _toObjects: function(i, l) {
          return this._objects.filter(function(u) {
            return !u.excludeFromExport;
          }).map(function(u) {
            return this._toObject(u, i, l);
          }, this);
        },
        /**
         * @private
         */
        _toObject: function(i, l, u) {
          var d;
          this.includeDefaultValues || (d = i.includeDefaultValues, i.includeDefaultValues = !1);
          var g = i[l](u);
          return this.includeDefaultValues || (i.includeDefaultValues = d), g;
        },
        /**
         * @private
         */
        __serializeBgOverlay: function(i, l) {
          var u = {}, d = this.backgroundImage, g = this.overlayImage, v = this.backgroundColor, m = this.overlayColor;
          return v && v.toObject ? v.excludeFromExport || (u.background = v.toObject(l)) : v && (u.background = v), m && m.toObject ? m.excludeFromExport || (u.overlay = m.toObject(l)) : m && (u.overlay = m), d && !d.excludeFromExport && (u.backgroundImage = this._toObject(d, i, l)), g && !g.excludeFromExport && (u.overlayImage = this._toObject(g, i, l)), u;
        },
        /* _TO_SVG_START_ */
        /**
         * When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
         * a zoomed canvas will then produce zoomed SVG output.
         * @type Boolean
         * @default
         */
        svgViewportTransformation: !0,
        /**
         * Returns SVG representation of canvas
         * @function
         * @param {Object} [options] Options object for SVG output
         * @param {Boolean} [options.suppressPreamble=false] If true xml tag is not included
         * @param {Object} [options.viewBox] SVG viewbox object
         * @param {Number} [options.viewBox.x] x-coordinate of viewbox
         * @param {Number} [options.viewBox.y] y-coordinate of viewbox
         * @param {Number} [options.viewBox.width] Width of viewbox
         * @param {Number} [options.viewBox.height] Height of viewbox
         * @param {String} [options.encoding=UTF-8] Encoding of SVG output
         * @param {String} [options.width] desired width of svg with or without units
         * @param {String} [options.height] desired height of svg with or without units
         * @param {Function} [reviver] Method for further parsing of svg elements, called after each fabric object converted into svg representation.
         * @return {String} SVG string
         * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#serialization}
         * @see {@link http://jsfiddle.net/fabricjs/jQ3ZZ/|jsFiddle demo}
         * @example <caption>Normal SVG output</caption>
         * var svg = canvas.toSVG();
         * @example <caption>SVG output without preamble (without &lt;?xml ../>)</caption>
         * var svg = canvas.toSVG({suppressPreamble: true});
         * @example <caption>SVG output with viewBox attribute</caption>
         * var svg = canvas.toSVG({
         *   viewBox: {
         *     x: 100,
         *     y: 100,
         *     width: 200,
         *     height: 300
         *   }
         * });
         * @example <caption>SVG output with different encoding (default: UTF-8)</caption>
         * var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
         * @example <caption>Modify SVG output with reviver function</caption>
         * var svg = canvas.toSVG(null, function(svg) {
         *   return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
         * });
         */
        toSVG: function(i, l) {
          i || (i = {}), i.reviver = l;
          var u = [];
          return this._setSVGPreamble(u, i), this._setSVGHeader(u, i), this.clipPath && u.push('<g clip-path="url(#' + this.clipPath.clipPathId + `)" >
`), this._setSVGBgOverlayColor(u, "background"), this._setSVGBgOverlayImage(u, "backgroundImage", l), this._setSVGObjects(u, l), this.clipPath && u.push(`</g>
`), this._setSVGBgOverlayColor(u, "overlay"), this._setSVGBgOverlayImage(u, "overlayImage", l), u.push("</svg>"), u.join("");
        },
        /**
         * @private
         */
        _setSVGPreamble: function(i, l) {
          l.suppressPreamble || i.push(
            '<?xml version="1.0" encoding="',
            l.encoding || "UTF-8",
            `" standalone="no" ?>
`,
            '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',
            `"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`
          );
        },
        /**
         * @private
         */
        _setSVGHeader: function(i, l) {
          var u = l.width || this.width, d = l.height || this.height, g, v = 'viewBox="0 0 ' + this.width + " " + this.height + '" ', m = f.Object.NUM_FRACTION_DIGITS;
          l.viewBox ? v = 'viewBox="' + l.viewBox.x + " " + l.viewBox.y + " " + l.viewBox.width + " " + l.viewBox.height + '" ' : this.svgViewportTransformation && (g = this.viewportTransform, v = 'viewBox="' + a(-g[4] / g[0], m) + " " + a(-g[5] / g[3], m) + " " + a(this.width / g[0], m) + " " + a(this.height / g[3], m) + '" '), i.push(
            "<svg ",
            'xmlns="http://www.w3.org/2000/svg" ',
            'xmlns:xlink="http://www.w3.org/1999/xlink" ',
            'version="1.1" ',
            'width="',
            u,
            '" ',
            'height="',
            d,
            '" ',
            v,
            `xml:space="preserve">
`,
            "<desc>Created with Fabric.js ",
            f.version,
            `</desc>
`,
            `<defs>
`,
            this.createSVGFontFacesMarkup(),
            this.createSVGRefElementsMarkup(),
            this.createSVGClipPathMarkup(l),
            `</defs>
`
          );
        },
        createSVGClipPathMarkup: function(i) {
          var l = this.clipPath;
          return l ? (l.clipPathId = "CLIPPATH_" + f.Object.__uid++, '<clipPath id="' + l.clipPathId + `" >
` + this.clipPath.toClipPathSVG(i.reviver) + `</clipPath>
`) : "";
        },
        /**
         * Creates markup containing SVG referenced elements like patterns, gradients etc.
         * @return {String}
         */
        createSVGRefElementsMarkup: function() {
          var i = this, l = ["background", "overlay"].map(function(u) {
            var d = i[u + "Color"];
            if (d && d.toLive) {
              var g = i[u + "Vpt"], v = i.viewportTransform, m = {
                width: i.width / (g ? v[0] : 1),
                height: i.height / (g ? v[3] : 1)
              };
              return d.toSVG(
                m,
                { additionalTransform: g ? f.util.matrixToSVG(v) : "" }
              );
            }
          });
          return l.join("");
        },
        /**
         * Creates markup containing SVG font faces,
         * font URLs for font faces must be collected by developers
         * and are not extracted from the DOM by fabricjs
         * @param {Array} objects Array of fabric objects
         * @return {String}
         */
        createSVGFontFacesMarkup: function() {
          var i = "", l = {}, u, d, g, v, m, C, p, x, A, k = f.fontPaths, W = [];
          for (this._objects.forEach(function H(z) {
            W.push(z), z._objects && z._objects.forEach(H);
          }), x = 0, A = W.length; x < A; x++)
            if (u = W[x], d = u.fontFamily, !(u.type.indexOf("text") === -1 || l[d] || !k[d]) && (l[d] = !0, !!u.styles)) {
              g = u.styles;
              for (m in g) {
                v = g[m];
                for (p in v)
                  C = v[p], d = C.fontFamily, !l[d] && k[d] && (l[d] = !0);
              }
            }
          for (var N in l)
            i += [
              `		@font-face {
`,
              "			font-family: '",
              N,
              `';
`,
              "			src: url('",
              k[N],
              `');
`,
              `		}
`
            ].join("");
          return i && (i = [
            '	<style type="text/css">',
            `<![CDATA[
`,
            i,
            "]]>",
            `</style>
`
          ].join("")), i;
        },
        /**
         * @private
         */
        _setSVGObjects: function(i, l) {
          var u, d, g, v = this._objects;
          for (d = 0, g = v.length; d < g; d++)
            u = v[d], !u.excludeFromExport && this._setSVGObject(i, u, l);
        },
        /**
         * @private
         */
        _setSVGObject: function(i, l, u) {
          i.push(l.toSVG(u));
        },
        /**
         * @private
         */
        _setSVGBgOverlayImage: function(i, l, u) {
          this[l] && !this[l].excludeFromExport && this[l].toSVG && i.push(this[l].toSVG(u));
        },
        /**
         * @private
         */
        _setSVGBgOverlayColor: function(i, l) {
          var u = this[l + "Color"], d = this.viewportTransform, g = this.width, v = this.height;
          if (u)
            if (u.toLive) {
              var m = u.repeat, C = f.util.invertTransform(d), p = this[l + "Vpt"], x = p ? f.util.matrixToSVG(C) : "";
              i.push(
                '<rect transform="' + x + " translate(",
                g / 2,
                ",",
                v / 2,
                ')"',
                ' x="',
                u.offsetX - g / 2,
                '" y="',
                u.offsetY - v / 2,
                '" ',
                'width="',
                m === "repeat-y" || m === "no-repeat" ? u.source.width : g,
                '" height="',
                m === "repeat-x" || m === "no-repeat" ? u.source.height : v,
                '" fill="url(#SVGID_' + u.id + ')"',
                `></rect>
`
              );
            } else
              i.push(
                '<rect x="0" y="0" width="100%" height="100%" ',
                'fill="',
                u,
                '"',
                `></rect>
`
              );
        },
        /* _TO_SVG_END_ */
        /**
         * Moves an object or the objects of a multiple selection
         * to the bottom of the stack of drawn objects
         * @param {fabric.Object} object Object to send to back
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        sendToBack: function(i) {
          if (!i)
            return this;
          var l = this._activeObject, u, d, g;
          if (i === l && i.type === "activeSelection")
            for (g = l._objects, u = g.length; u--; )
              d = g[u], h(this._objects, d), this._objects.unshift(d);
          else
            h(this._objects, i), this._objects.unshift(i);
          return this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Moves an object or the objects of a multiple selection
         * to the top of the stack of drawn objects
         * @param {fabric.Object} object Object to send
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        bringToFront: function(i) {
          if (!i)
            return this;
          var l = this._activeObject, u, d, g;
          if (i === l && i.type === "activeSelection")
            for (g = l._objects, u = 0; u < g.length; u++)
              d = g[u], h(this._objects, d), this._objects.push(d);
          else
            h(this._objects, i), this._objects.push(i);
          return this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Moves an object or a selection down in stack of drawn objects
         * An optional parameter, intersecting allows to move the object in behind
         * the first intersecting object. Where intersection is calculated with
         * bounding box. If no intersection is found, there will not be change in the
         * stack.
         * @param {fabric.Object} object Object to send
         * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        sendBackwards: function(i, l) {
          if (!i)
            return this;
          var u = this._activeObject, d, g, v, m, C, p = 0;
          if (i === u && i.type === "activeSelection")
            for (C = u._objects, d = 0; d < C.length; d++)
              g = C[d], v = this._objects.indexOf(g), v > 0 + p && (m = v - 1, h(this._objects, g), this._objects.splice(m, 0, g)), p++;
          else
            v = this._objects.indexOf(i), v !== 0 && (m = this._findNewLowerIndex(i, v, l), h(this._objects, i), this._objects.splice(m, 0, i));
          return this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * @private
         */
        _findNewLowerIndex: function(i, l, u) {
          var d, g;
          if (u)
            for (d = l, g = l - 1; g >= 0; --g) {
              var v = i.intersectsWithObject(this._objects[g]) || i.isContainedWithinObject(this._objects[g]) || this._objects[g].isContainedWithinObject(i);
              if (v) {
                d = g;
                break;
              }
            }
          else
            d = l - 1;
          return d;
        },
        /**
         * Moves an object or a selection up in stack of drawn objects
         * An optional parameter, intersecting allows to move the object in front
         * of the first intersecting object. Where intersection is calculated with
         * bounding box. If no intersection is found, there will not be change in the
         * stack.
         * @param {fabric.Object} object Object to send
         * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        bringForward: function(i, l) {
          if (!i)
            return this;
          var u = this._activeObject, d, g, v, m, C, p = 0;
          if (i === u && i.type === "activeSelection")
            for (C = u._objects, d = C.length; d--; )
              g = C[d], v = this._objects.indexOf(g), v < this._objects.length - 1 - p && (m = v + 1, h(this._objects, g), this._objects.splice(m, 0, g)), p++;
          else
            v = this._objects.indexOf(i), v !== this._objects.length - 1 && (m = this._findNewUpperIndex(i, v, l), h(this._objects, i), this._objects.splice(m, 0, i));
          return this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * @private
         */
        _findNewUpperIndex: function(i, l, u) {
          var d, g, v;
          if (u)
            for (d = l, g = l + 1, v = this._objects.length; g < v; ++g) {
              var m = i.intersectsWithObject(this._objects[g]) || i.isContainedWithinObject(this._objects[g]) || this._objects[g].isContainedWithinObject(i);
              if (m) {
                d = g;
                break;
              }
            }
          else
            d = l + 1;
          return d;
        },
        /**
         * Moves an object to specified level in stack of drawn objects
         * @param {fabric.Object} object Object to send
         * @param {Number} index Position to move to
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        moveTo: function(i, l) {
          return h(this._objects, i), this._objects.splice(l, 0, i), this.renderOnAddRemove && this.requestRenderAll();
        },
        /**
         * Clears a canvas element and dispose objects
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        dispose: function() {
          return this.isRendering && (f.util.cancelAnimFrame(this.isRendering), this.isRendering = 0), this.forEachObject(function(i) {
            i.dispose && i.dispose();
          }), this._objects = [], this.backgroundImage && this.backgroundImage.dispose && this.backgroundImage.dispose(), this.backgroundImage = null, this.overlayImage && this.overlayImage.dispose && this.overlayImage.dispose(), this.overlayImage = null, this._iTextInstances = null, this.contextContainer = null, this.lowerCanvasEl.classList.remove("lower-canvas"), f.util.setStyle(this.lowerCanvasEl, this._originalCanvasStyle), delete this._originalCanvasStyle, this.lowerCanvasEl.setAttribute("width", this.width), this.lowerCanvasEl.setAttribute("height", this.height), f.util.cleanUpJsdomNode(this.lowerCanvasEl), this.lowerCanvasEl = void 0, this;
        },
        /**
         * Returns a string representation of an instance
         * @return {String} string representation of an instance
         */
        toString: function() {
          return "#<fabric.Canvas (" + this.complexity() + "): { objects: " + this._objects.length + " }>";
        }
      }
    ), c(f.StaticCanvas.prototype, f.Observable), c(f.StaticCanvas.prototype, f.Collection), c(f.StaticCanvas.prototype, f.DataURLExporter), c(
      f.StaticCanvas,
      /** @lends fabric.StaticCanvas */
      {
        /**
         * @static
         * @type String
         * @default
         */
        EMPTY_JSON: '{"objects": [], "background": "white"}',
        /**
         * Provides a way to check support of some of the canvas methods
         * (either those of HTMLCanvasElement itself, or rendering context)
         *
         * @param {String} methodName Method to check support for;
         *                            Could be one of "setLineDash"
         * @return {Boolean | null} `true` if method is supported (or at least exists),
         *                          `null` if canvas element or context can not be initialized
         */
        supports: function(i) {
          var l = s();
          if (!l || !l.getContext)
            return null;
          var u = l.getContext("2d");
          if (!u)
            return null;
          switch (i) {
            case "setLineDash":
              return typeof u.setLineDash < "u";
            default:
              return null;
          }
        }
      }
    ), f.StaticCanvas.prototype.toJSON = f.StaticCanvas.prototype.toObject, f.isLikelyNode && (f.StaticCanvas.prototype.createPNGStream = function() {
      var i = e(this.lowerCanvasEl);
      return i && i.createPNGStream();
    }, f.StaticCanvas.prototype.createJPEGStream = function(i) {
      var l = e(this.lowerCanvasEl);
      return l && l.createJPEGStream(i);
    });
  }(), f.BaseBrush = f.util.createClass(
    /** @lends fabric.BaseBrush.prototype */
    {
      /**
       * Color of a brush
       * @type String
       * @default
       */
      color: "rgb(0, 0, 0)",
      /**
       * Width of a brush, has to be a Number, no string literals
       * @type Number
       * @default
       */
      width: 1,
      /**
       * Shadow object representing shadow of this shape.
       * <b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
       * "shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12
       * @type fabric.Shadow
       * @default
       */
      shadow: null,
      /**
       * Line endings style of a brush (one of "butt", "round", "square")
       * @type String
       * @default
       */
      strokeLineCap: "round",
      /**
       * Corner style of a brush (one of "bevel", "round", "miter")
       * @type String
       * @default
       */
      strokeLineJoin: "round",
      /**
       * Maximum miter length (used for strokeLineJoin = "miter") of a brush's
       * @type Number
       * @default
       */
      strokeMiterLimit: 10,
      /**
       * Stroke Dash Array.
       * @type Array
       * @default
       */
      strokeDashArray: null,
      /**
       * When `true`, the free drawing is limited to the whiteboard size. Default to false.
       * @type Boolean
       * @default false
      */
      limitedToCanvasSize: !1,
      /**
       * Sets brush styles
       * @private
       * @param {CanvasRenderingContext2D} ctx
       */
      _setBrushStyles: function(c) {
        c.strokeStyle = this.color, c.lineWidth = this.width, c.lineCap = this.strokeLineCap, c.miterLimit = this.strokeMiterLimit, c.lineJoin = this.strokeLineJoin, c.setLineDash(this.strokeDashArray || []);
      },
      /**
       * Sets the transformation on given context
       * @param {RenderingContext2d} ctx context to render on
       * @private
       */
      _saveAndTransform: function(c) {
        var n = this.canvas.viewportTransform;
        c.save(), c.transform(n[0], n[1], n[2], n[3], n[4], n[5]);
      },
      /**
       * Sets brush shadow styles
       * @private
       */
      _setShadow: function() {
        if (this.shadow) {
          var c = this.canvas, n = this.shadow, h = c.contextTop, a = c.getZoom();
          c && c._isRetinaScaling() && (a *= f.devicePixelRatio), h.shadowColor = n.color, h.shadowBlur = n.blur * a, h.shadowOffsetX = n.offsetX * a, h.shadowOffsetY = n.offsetY * a;
        }
      },
      needsFullRender: function() {
        var c = new f.Color(this.color);
        return c.getAlpha() < 1 || !!this.shadow;
      },
      /**
       * Removes brush shadow styles
       * @private
       */
      _resetShadow: function() {
        var c = this.canvas.contextTop;
        c.shadowColor = "", c.shadowBlur = c.shadowOffsetX = c.shadowOffsetY = 0;
      },
      /**
       * Check is pointer is outside canvas boundaries
       * @param {Object} pointer
       * @private
      */
      _isOutSideCanvas: function(c) {
        return c.x < 0 || c.x > this.canvas.getWidth() || c.y < 0 || c.y > this.canvas.getHeight();
      }
    }
  ), function() {
    f.PencilBrush = f.util.createClass(
      f.BaseBrush,
      /** @lends fabric.PencilBrush.prototype */
      {
        /**
         * Discard points that are less than `decimate` pixel distant from each other
         * @type Number
         * @default 0.4
         */
        decimate: 0.4,
        /**
         * Draws a straight line between last recorded point to current pointer
         * Used for `shift` functionality
         *
         * @type boolean
         * @default false
         */
        drawStraightLine: !1,
        /**
         * The event modifier key that makes the brush draw a straight line.
         * If `null` or 'none' or any other string that is not a modifier key the feature is disabled.
         * @type {'altKey' | 'shiftKey' | 'ctrlKey' | 'none' | undefined | null}
         */
        straightLineKey: "shiftKey",
        /**
         * Constructor
         * @param {fabric.Canvas} canvas
         * @return {fabric.PencilBrush} Instance of a pencil brush
         */
        initialize: function(c) {
          this.canvas = c, this._points = [];
        },
        needsFullRender: function() {
          return this.callSuper("needsFullRender") || this._hasStraightLine;
        },
        /**
         * Invoked inside on mouse down and mouse move
         * @param {Object} pointer
         */
        _drawSegment: function(c, n, h) {
          var a = n.midPointFrom(h);
          return c.quadraticCurveTo(n.x, n.y, a.x, a.y), a;
        },
        /**
         * Invoked on mouse down
         * @param {Object} pointer
         */
        onMouseDown: function(c, n) {
          this.canvas._isMainEvent(n.e) && (this.drawStraightLine = n.e[this.straightLineKey], this._prepareForDrawing(c), this._captureDrawingPath(c), this._render());
        },
        /**
         * Invoked on mouse move
         * @param {Object} pointer
         */
        onMouseMove: function(c, n) {
          if (this.canvas._isMainEvent(n.e) && (this.drawStraightLine = n.e[this.straightLineKey], !(this.limitedToCanvasSize === !0 && this._isOutSideCanvas(c)) && this._captureDrawingPath(c) && this._points.length > 1))
            if (this.needsFullRender())
              this.canvas.clearContext(this.canvas.contextTop), this._render();
            else {
              var h = this._points, a = h.length, t = this.canvas.contextTop;
              this._saveAndTransform(t), this.oldEnd && (t.beginPath(), t.moveTo(this.oldEnd.x, this.oldEnd.y)), this.oldEnd = this._drawSegment(t, h[a - 2], h[a - 1], !0), t.stroke(), t.restore();
            }
        },
        /**
         * Invoked on mouse up
         */
        onMouseUp: function(c) {
          return this.canvas._isMainEvent(c.e) ? (this.drawStraightLine = !1, this.oldEnd = void 0, this._finalizeAndAddPath(), !1) : !0;
        },
        /**
         * @private
         * @param {Object} pointer Actual mouse position related to the canvas.
         */
        _prepareForDrawing: function(c) {
          var n = new f.Point(c.x, c.y);
          this._reset(), this._addPoint(n), this.canvas.contextTop.moveTo(n.x, n.y);
        },
        /**
         * @private
         * @param {fabric.Point} point Point to be added to points array
         */
        _addPoint: function(c) {
          return this._points.length > 1 && c.eq(this._points[this._points.length - 1]) ? !1 : (this.drawStraightLine && this._points.length > 1 && (this._hasStraightLine = !0, this._points.pop()), this._points.push(c), !0);
        },
        /**
         * Clear points array and set contextTop canvas style.
         * @private
         */
        _reset: function() {
          this._points = [], this._setBrushStyles(this.canvas.contextTop), this._setShadow(), this._hasStraightLine = !1;
        },
        /**
         * @private
         * @param {Object} pointer Actual mouse position related to the canvas.
         */
        _captureDrawingPath: function(c) {
          var n = new f.Point(c.x, c.y);
          return this._addPoint(n);
        },
        /**
         * Draw a smooth path on the topCanvas using quadraticCurveTo
         * @private
         * @param {CanvasRenderingContext2D} [ctx]
         */
        _render: function(c) {
          var n, h, a = this._points[0], t = this._points[1];
          if (c = c || this.canvas.contextTop, this._saveAndTransform(c), c.beginPath(), this._points.length === 2 && a.x === t.x && a.y === t.y) {
            var r = this.width / 1e3;
            a = new f.Point(a.x, a.y), t = new f.Point(t.x, t.y), a.x -= r, t.x += r;
          }
          for (c.moveTo(a.x, a.y), n = 1, h = this._points.length; n < h; n++)
            this._drawSegment(c, a, t), a = this._points[n], t = this._points[n + 1];
          c.lineTo(a.x, a.y), c.stroke(), c.restore();
        },
        /**
         * Converts points to SVG path
         * @param {Array} points Array of points
         * @return {(string|number)[][]} SVG path commands
         */
        convertPointsToSVGPath: function(c) {
          var n = this.width / 1e3;
          return f.util.getSmoothPathFromPoints(c, n);
        },
        /**
         * @private
         * @param {(string|number)[][]} pathData SVG path commands
         * @returns {boolean}
         */
        _isEmptySVGPath: function(c) {
          var n = f.util.joinPath(c);
          return n === "M 0 0 Q 0 0 0 0 L 0 0";
        },
        /**
         * Creates fabric.Path object to add on canvas
         * @param {(string|number)[][]} pathData Path data
         * @return {fabric.Path} Path to add on canvas
         */
        createPath: function(c) {
          var n = new f.Path(c, {
            fill: null,
            stroke: this.color,
            strokeWidth: this.width,
            strokeLineCap: this.strokeLineCap,
            strokeMiterLimit: this.strokeMiterLimit,
            strokeLineJoin: this.strokeLineJoin,
            strokeDashArray: this.strokeDashArray
          });
          return this.shadow && (this.shadow.affectStroke = !0, n.shadow = new f.Shadow(this.shadow)), n;
        },
        /**
         * Decimate points array with the decimate value
         */
        decimatePoints: function(c, n) {
          if (c.length <= 2)
            return c;
          var h = this.canvas.getZoom(), a = Math.pow(n / h, 2), t, r = c.length - 1, e = c[0], s = [e], o;
          for (t = 1; t < r - 1; t++)
            o = Math.pow(e.x - c[t].x, 2) + Math.pow(e.y - c[t].y, 2), o >= a && (e = c[t], s.push(e));
          return s.push(c[r]), s;
        },
        /**
         * On mouseup after drawing the path on contextTop canvas
         * we use the points captured to create an new fabric path object
         * and add it to the fabric canvas.
         */
        _finalizeAndAddPath: function() {
          var c = this.canvas.contextTop;
          c.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
          var n = this.convertPointsToSVGPath(this._points);
          if (this._isEmptySVGPath(n)) {
            this.canvas.requestRenderAll();
            return;
          }
          var h = this.createPath(n);
          this.canvas.clearContext(this.canvas.contextTop), this.canvas.fire("before:path:created", { path: h }), this.canvas.add(h), this.canvas.requestRenderAll(), h.setCoords(), this._resetShadow(), this.canvas.fire("path:created", { path: h });
        }
      }
    );
  }(), f.CircleBrush = f.util.createClass(
    f.BaseBrush,
    /** @lends fabric.CircleBrush.prototype */
    {
      /**
       * Width of a brush
       * @type Number
       * @default
       */
      width: 10,
      /**
       * Constructor
       * @param {fabric.Canvas} canvas
       * @return {fabric.CircleBrush} Instance of a circle brush
       */
      initialize: function(c) {
        this.canvas = c, this.points = [];
      },
      /**
       * Invoked inside on mouse down and mouse move
       * @param {Object} pointer
       */
      drawDot: function(c) {
        var n = this.addPoint(c), h = this.canvas.contextTop;
        this._saveAndTransform(h), this.dot(h, n), h.restore();
      },
      dot: function(c, n) {
        c.fillStyle = n.fill, c.beginPath(), c.arc(n.x, n.y, n.radius, 0, Math.PI * 2, !1), c.closePath(), c.fill();
      },
      /**
       * Invoked on mouse down
       */
      onMouseDown: function(c) {
        this.points.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.drawDot(c);
      },
      /**
       * Render the full state of the brush
       * @private
       */
      _render: function() {
        var c = this.canvas.contextTop, n, h, a = this.points;
        for (this._saveAndTransform(c), n = 0, h = a.length; n < h; n++)
          this.dot(c, a[n]);
        c.restore();
      },
      /**
       * Invoked on mouse move
       * @param {Object} pointer
       */
      onMouseMove: function(c) {
        this.limitedToCanvasSize === !0 && this._isOutSideCanvas(c) || (this.needsFullRender() ? (this.canvas.clearContext(this.canvas.contextTop), this.addPoint(c), this._render()) : this.drawDot(c));
      },
      /**
       * Invoked on mouse up
       */
      onMouseUp: function() {
        var c = this.canvas.renderOnAddRemove, n, h;
        this.canvas.renderOnAddRemove = !1;
        var a = [];
        for (n = 0, h = this.points.length; n < h; n++) {
          var t = this.points[n], r = new f.Circle({
            radius: t.radius,
            left: t.x,
            top: t.y,
            originX: "center",
            originY: "center",
            fill: t.fill
          });
          this.shadow && (r.shadow = new f.Shadow(this.shadow)), a.push(r);
        }
        var e = new f.Group(a);
        e.canvas = this.canvas, this.canvas.fire("before:path:created", { path: e }), this.canvas.add(e), this.canvas.fire("path:created", { path: e }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = c, this.canvas.requestRenderAll();
      },
      /**
       * @param {Object} pointer
       * @return {fabric.Point} Just added pointer point
       */
      addPoint: function(c) {
        var n = new f.Point(c.x, c.y), h = f.util.getRandomInt(
          Math.max(0, this.width - 20),
          this.width + 20
        ) / 2, a = new f.Color(this.color).setAlpha(f.util.getRandomInt(0, 100) / 100).toRgba();
        return n.radius = h, n.fill = a, this.points.push(n), n;
      }
    }
  ), f.SprayBrush = f.util.createClass(
    f.BaseBrush,
    /** @lends fabric.SprayBrush.prototype */
    {
      /**
       * Width of a spray
       * @type Number
       * @default
       */
      width: 10,
      /**
       * Density of a spray (number of dots per chunk)
       * @type Number
       * @default
       */
      density: 20,
      /**
       * Width of spray dots
       * @type Number
       * @default
       */
      dotWidth: 1,
      /**
       * Width variance of spray dots
       * @type Number
       * @default
       */
      dotWidthVariance: 1,
      /**
       * Whether opacity of a dot should be random
       * @type Boolean
       * @default
       */
      randomOpacity: !1,
      /**
       * Whether overlapping dots (rectangles) should be removed (for performance reasons)
       * @type Boolean
       * @default
       */
      optimizeOverlapping: !0,
      /**
       * Constructor
       * @param {fabric.Canvas} canvas
       * @return {fabric.SprayBrush} Instance of a spray brush
       */
      initialize: function(c) {
        this.canvas = c, this.sprayChunks = [];
      },
      /**
       * Invoked on mouse down
       * @param {Object} pointer
       */
      onMouseDown: function(c) {
        this.sprayChunks.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(c), this.render(this.sprayChunkPoints);
      },
      /**
       * Invoked on mouse move
       * @param {Object} pointer
       */
      onMouseMove: function(c) {
        this.limitedToCanvasSize === !0 && this._isOutSideCanvas(c) || (this.addSprayChunk(c), this.render(this.sprayChunkPoints));
      },
      /**
       * Invoked on mouse up
       */
      onMouseUp: function() {
        var c = this.canvas.renderOnAddRemove;
        this.canvas.renderOnAddRemove = !1;
        for (var n = [], h = 0, a = this.sprayChunks.length; h < a; h++)
          for (var t = this.sprayChunks[h], r = 0, e = t.length; r < e; r++) {
            var s = new f.Rect({
              width: t[r].width,
              height: t[r].width,
              left: t[r].x + 1,
              top: t[r].y + 1,
              originX: "center",
              originY: "center",
              fill: this.color
            });
            n.push(s);
          }
        this.optimizeOverlapping && (n = this._getOptimizedRects(n));
        var o = new f.Group(n);
        this.shadow && o.set("shadow", new f.Shadow(this.shadow)), this.canvas.fire("before:path:created", { path: o }), this.canvas.add(o), this.canvas.fire("path:created", { path: o }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = c, this.canvas.requestRenderAll();
      },
      /**
       * @private
       * @param {Array} rects
       */
      _getOptimizedRects: function(c) {
        var n = {}, h, a, t;
        for (a = 0, t = c.length; a < t; a++)
          h = c[a].left + "" + c[a].top, n[h] || (n[h] = c[a]);
        var r = [];
        for (h in n)
          r.push(n[h]);
        return r;
      },
      /**
       * Render new chunk of spray brush
       */
      render: function(c) {
        var n = this.canvas.contextTop, h, a;
        for (n.fillStyle = this.color, this._saveAndTransform(n), h = 0, a = c.length; h < a; h++) {
          var t = c[h];
          typeof t.opacity < "u" && (n.globalAlpha = t.opacity), n.fillRect(t.x, t.y, t.width, t.width);
        }
        n.restore();
      },
      /**
       * Render all spray chunks
       */
      _render: function() {
        var c = this.canvas.contextTop, n, h;
        for (c.fillStyle = this.color, this._saveAndTransform(c), n = 0, h = this.sprayChunks.length; n < h; n++)
          this.render(this.sprayChunks[n]);
        c.restore();
      },
      /**
       * @param {Object} pointer
       */
      addSprayChunk: function(c) {
        this.sprayChunkPoints = [];
        var n, h, a, t = this.width / 2, r;
        for (r = 0; r < this.density; r++) {
          n = f.util.getRandomInt(c.x - t, c.x + t), h = f.util.getRandomInt(c.y - t, c.y + t), this.dotWidthVariance ? a = f.util.getRandomInt(
            // bottom clamp width to 1
            Math.max(1, this.dotWidth - this.dotWidthVariance),
            this.dotWidth + this.dotWidthVariance
          ) : a = this.dotWidth;
          var e = new f.Point(n, h);
          e.width = a, this.randomOpacity && (e.opacity = f.util.getRandomInt(0, 100) / 100), this.sprayChunkPoints.push(e);
        }
        this.sprayChunks.push(this.sprayChunkPoints);
      }
    }
  ), f.PatternBrush = f.util.createClass(
    f.PencilBrush,
    /** @lends fabric.PatternBrush.prototype */
    {
      getPatternSrc: function() {
        var c = 20, n = 5, h = f.util.createCanvasElement(), a = h.getContext("2d");
        return h.width = h.height = c + n, a.fillStyle = this.color, a.beginPath(), a.arc(c / 2, c / 2, c / 2, 0, Math.PI * 2, !1), a.closePath(), a.fill(), h;
      },
      getPatternSrcFunction: function() {
        return String(this.getPatternSrc).replace("this.color", '"' + this.color + '"');
      },
      /**
       * Creates "pattern" instance property
       * @param {CanvasRenderingContext2D} ctx
       */
      getPattern: function(c) {
        return c.createPattern(this.source || this.getPatternSrc(), "repeat");
      },
      /**
       * Sets brush styles
       * @param {CanvasRenderingContext2D} ctx
       */
      _setBrushStyles: function(c) {
        this.callSuper("_setBrushStyles", c), c.strokeStyle = this.getPattern(c);
      },
      /**
       * Creates path
       */
      createPath: function(c) {
        var n = this.callSuper("createPath", c), h = n._getLeftTopCoords().scalarAdd(n.strokeWidth / 2);
        return n.stroke = new f.Pattern({
          source: this.source || this.getPatternSrcFunction(),
          offsetX: -h.x,
          offsetY: -h.y
        }), n;
      }
    }
  ), function() {
    var c = f.util.getPointer, n = f.util.degreesToRadians, h = f.util.isTouchEvent;
    f.Canvas = f.util.createClass(
      f.StaticCanvas,
      /** @lends fabric.Canvas.prototype */
      {
        /**
         * Constructor
         * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
        initialize: function(t, r) {
          r || (r = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(t, r), this._initInteractive(), this._createCacheCanvas();
        },
        /**
         * When true, objects can be transformed by one side (unproportionally)
         * when dragged on the corners that normally would not do that.
         * @type Boolean
         * @default
         * @since fabric 4.0 // changed name and default value
         */
        uniformScaling: !0,
        /**
         * Indicates which key switches uniform scaling.
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled.
         * totally wrong named. this sounds like `uniform scaling`
         * if Canvas.uniformScaling is true, pressing this will set it to false
         * and viceversa.
         * @since 1.6.2
         * @type String
         * @default
         */
        uniScaleKey: "shiftKey",
        /**
         * When true, objects use center point as the origin of scale transformation.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredScaling: !1,
        /**
         * When true, objects use center point as the origin of rotate transformation.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredRotation: !1,
        /**
         * Indicates which key enable centered Transform
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled feature disabled.
         * @since 1.6.2
         * @type String
         * @default
         */
        centeredKey: "altKey",
        /**
         * Indicates which key enable alternate action on corner
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled feature disabled.
         * @since 1.6.2
         * @type String
         * @default
         */
        altActionKey: "shiftKey",
        /**
         * Indicates that canvas is interactive. This property should not be changed.
         * @type Boolean
         * @default
         */
        interactive: !0,
        /**
         * Indicates whether group selection should be enabled
         * @type Boolean
         * @default
         */
        selection: !0,
        /**
         * Indicates which key or keys enable multiple click selection
         * Pass value as a string or array of strings
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or empty or containing any other string that is not a modifier key
         * feature is disabled.
         * @since 1.6.2
         * @type String|Array
         * @default
         */
        selectionKey: "shiftKey",
        /**
         * Indicates which key enable alternative selection
         * in case of target overlapping with active object
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * For a series of reason that come from the general expectations on how
         * things should work, this feature works only for preserveObjectStacking true.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled.
         * @since 1.6.5
         * @type null|String
         * @default
         */
        altSelectionKey: null,
        /**
         * Color of selection
         * @type String
         * @default
         */
        selectionColor: "rgba(100, 100, 255, 0.3)",
        // blue
        /**
         * Default dash array pattern
         * If not empty the selection border is dashed
         * @type Array
         */
        selectionDashArray: [],
        /**
         * Color of the border of selection (usually slightly darker than color of selection itself)
         * @type String
         * @default
         */
        selectionBorderColor: "rgba(255, 255, 255, 0.3)",
        /**
         * Width of a line used in object/group selection
         * @type Number
         * @default
         */
        selectionLineWidth: 1,
        /**
         * Select only shapes that are fully contained in the dragged selection rectangle.
         * @type Boolean
         * @default
         */
        selectionFullyContained: !1,
        /**
         * Default cursor value used when hovering over an object on canvas
         * @type String
         * @default
         */
        hoverCursor: "move",
        /**
         * Default cursor value used when moving an object on canvas
         * @type String
         * @default
         */
        moveCursor: "move",
        /**
         * Default cursor value used for the entire canvas
         * @type String
         * @default
         */
        defaultCursor: "default",
        /**
         * Cursor value used during free drawing
         * @type String
         * @default
         */
        freeDrawingCursor: "crosshair",
        /**
         * Cursor value used for disabled elements ( corners with disabled action )
         * @type String
         * @since 2.0.0
         * @default
         */
        notAllowedCursor: "not-allowed",
        /**
         * Default element class that's given to wrapper (div) element of canvas
         * @type String
         * @default
         */
        containerClass: "canvas-container",
        /**
         * When true, object detection happens on per-pixel basis rather than on per-bounding-box
         * @type Boolean
         * @default
         */
        perPixelTargetFind: !1,
        /**
         * Number of pixels around target pixel to tolerate (consider active) during object detection
         * @type Number
         * @default
         */
        targetFindTolerance: 0,
        /**
         * When true, target detection is skipped. Target detection will return always undefined.
         * click selection won't work anymore, events will fire with no targets.
         * if something is selected before setting it to true, it will be deselected at the first click.
         * area selection will still work. check the `selection` property too.
         * if you deactivate both, you should look into staticCanvas.
         * @type Boolean
         * @default
         */
        skipTargetFind: !1,
        /**
         * When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing.
         * After mousedown, mousemove creates a shape,
         * and then mouseup finalizes it and adds an instance of `fabric.Path` onto canvas.
         * @tutorial {@link http://fabricjs.com/fabric-intro-part-4#free_drawing}
         * @type Boolean
         * @default
         */
        isDrawingMode: !1,
        /**
         * Indicates whether objects should remain in current stack position when selected.
         * When false objects are brought to top and rendered as part of the selection group
         * @type Boolean
         * @default
         */
        preserveObjectStacking: !1,
        /**
         * Indicates the angle that an object will lock to while rotating.
         * @type Number
         * @since 1.6.7
         * @default
         */
        snapAngle: 0,
        /**
         * Indicates the distance from the snapAngle the rotation will lock to the snapAngle.
         * When `null`, the snapThreshold will default to the snapAngle.
         * @type null|Number
         * @since 1.6.7
         * @default
         */
        snapThreshold: null,
        /**
         * Indicates if the right click on canvas can output the context menu or not
         * @type Boolean
         * @since 1.6.5
         * @default
         */
        stopContextMenu: !1,
        /**
         * Indicates if the canvas can fire right click events
         * @type Boolean
         * @since 1.6.5
         * @default
         */
        fireRightClick: !1,
        /**
         * Indicates if the canvas can fire middle click events
         * @type Boolean
         * @since 1.7.8
         * @default
         */
        fireMiddleClick: !1,
        /**
         * Keep track of the subTargets for Mouse Events
         * @type fabric.Object[]
         */
        targets: [],
        /**
         * When the option is enabled, PointerEvent is used instead of MouseEvent.
         * @type Boolean
         * @default
         */
        enablePointerEvents: !1,
        /**
         * Keep track of the hovered target
         * @type fabric.Object
         * @private
         */
        _hoveredTarget: null,
        /**
         * hold the list of nested targets hovered
         * @type fabric.Object[]
         * @private
         */
        _hoveredTargets: [],
        /**
         * @private
         */
        _initInteractive: function() {
          this._currentTransform = null, this._groupSelector = null, this._initWrapperElement(), this._createUpperCanvas(), this._initEventListeners(), this._initRetinaScaling(), this.freeDrawingBrush = f.PencilBrush && new f.PencilBrush(this), this.calcOffset();
        },
        /**
         * Divides objects in two groups, one to render immediately
         * and one to render as activeGroup.
         * @return {Array} objects to render immediately and pushes the other in the activeGroup.
         */
        _chooseObjectsToRender: function() {
          var t = this.getActiveObjects(), r, e, s;
          if (t.length > 0 && !this.preserveObjectStacking) {
            e = [], s = [];
            for (var o = 0, i = this._objects.length; o < i; o++)
              r = this._objects[o], t.indexOf(r) === -1 ? e.push(r) : s.push(r);
            t.length > 1 && (this._activeObject._objects = s), e.push.apply(e, s);
          } else
            e = this._objects;
          return e;
        },
        /**
         * Renders both the top canvas and the secondary container canvas.
         * @return {fabric.Canvas} instance
         * @chainable
         */
        renderAll: function() {
          this.contextTopDirty && !this._groupSelector && !this.isDrawingMode && (this.clearContext(this.contextTop), this.contextTopDirty = !1), this.hasLostContext && (this.renderTopLayer(this.contextTop), this.hasLostContext = !1);
          var t = this.contextContainer;
          return this.renderCanvas(t, this._chooseObjectsToRender()), this;
        },
        renderTopLayer: function(t) {
          t.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = !0), this.selection && this._groupSelector && (this._drawSelection(t), this.contextTopDirty = !0), t.restore();
        },
        /**
         * Method to render only the top canvas.
         * Also used to render the group selection box.
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        renderTop: function() {
          var t = this.contextTop;
          return this.clearContext(t), this.renderTopLayer(t), this.fire("after:render"), this;
        },
        /**
         * @private
         */
        _normalizePointer: function(t, r) {
          var e = t.calcTransformMatrix(), s = f.util.invertTransform(e), o = this.restorePointerVpt(r);
          return f.util.transformPoint(o, s);
        },
        /**
         * Returns true if object is transparent at a certain location
         * @param {fabric.Object} target Object to check
         * @param {Number} x Left coordinate
         * @param {Number} y Top coordinate
         * @return {Boolean}
         */
        isTargetTransparent: function(t, r, e) {
          if (t.shouldCache() && t._cacheCanvas && t !== this._activeObject) {
            var s = this._normalizePointer(t, { x: r, y: e }), o = Math.max(t.cacheTranslationX + s.x * t.zoomX, 0), i = Math.max(t.cacheTranslationY + s.y * t.zoomY, 0), g = f.util.isTransparent(
              t._cacheContext,
              Math.round(o),
              Math.round(i),
              this.targetFindTolerance
            );
            return g;
          }
          var l = this.contextCache, u = t.selectionBackgroundColor, d = this.viewportTransform;
          t.selectionBackgroundColor = "", this.clearContext(l), l.save(), l.transform(d[0], d[1], d[2], d[3], d[4], d[5]), t.render(l), l.restore(), t.selectionBackgroundColor = u;
          var g = f.util.isTransparent(
            l,
            r,
            e,
            this.targetFindTolerance
          );
          return g;
        },
        /**
         * takes an event and determines if selection key has been pressed
         * @private
         * @param {Event} e Event object
         */
        _isSelectionKeyPressed: function(t) {
          var r = !1;
          return Array.isArray(this.selectionKey) ? r = !!this.selectionKey.find(function(e) {
            return t[e] === !0;
          }) : r = t[this.selectionKey], r;
        },
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         */
        _shouldClearSelection: function(t, r) {
          var e = this.getActiveObjects(), s = this._activeObject;
          return !r || r && s && e.length > 1 && e.indexOf(r) === -1 && s !== r && !this._isSelectionKeyPressed(t) || r && !r.evented || r && !r.selectable && s && s !== r;
        },
        /**
         * centeredScaling from object can't override centeredScaling from canvas.
         * this should be fixed, since object setting should take precedence over canvas.
         * also this should be something that will be migrated in the control properties.
         * as ability to define the origin of the transformation that the control provide.
         * @private
         * @param {fabric.Object} target
         * @param {String} action
         * @param {Boolean} altKey
         */
        _shouldCenterTransform: function(t, r, e) {
          if (t) {
            var s;
            return r === "scale" || r === "scaleX" || r === "scaleY" || r === "resizing" ? s = this.centeredScaling || t.centeredScaling : r === "rotate" && (s = this.centeredRotation || t.centeredRotation), s ? !e : e;
          }
        },
        /**
         * should disappear before release 4.0
         * @private
         */
        _getOriginFromCorner: function(t, r) {
          var e = {
            x: t.originX,
            y: t.originY
          };
          return r === "ml" || r === "tl" || r === "bl" ? e.x = "right" : (r === "mr" || r === "tr" || r === "br") && (e.x = "left"), r === "tl" || r === "mt" || r === "tr" ? e.y = "bottom" : (r === "bl" || r === "mb" || r === "br") && (e.y = "top"), e;
        },
        /**
         * @private
         * @param {Boolean} alreadySelected true if target is already selected
         * @param {String} corner a string representing the corner ml, mr, tl ...
         * @param {Event} e Event object
         * @param {fabric.Object} [target] inserted back to help overriding. Unused
         */
        _getActionFromCorner: function(t, r, e, s) {
          if (!r || !t)
            return "drag";
          var o = s.controls[r];
          return o.getActionName(e, o, s);
        },
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         */
        _setupCurrentTransform: function(t, r, e) {
          if (r) {
            var s = this.getPointer(t), o = r.__corner, i = r.controls[o], l = e && o ? i.getActionHandler(t, r, i) : f.controlsUtils.dragHandler, u = this._getActionFromCorner(e, o, t, r), d = this._getOriginFromCorner(r, o), g = t[this.centeredKey], v = {
              target: r,
              action: u,
              actionHandler: l,
              corner: o,
              scaleX: r.scaleX,
              scaleY: r.scaleY,
              skewX: r.skewX,
              skewY: r.skewY,
              // used by transation
              offsetX: s.x - r.left,
              offsetY: s.y - r.top,
              originX: d.x,
              originY: d.y,
              ex: s.x,
              ey: s.y,
              lastX: s.x,
              lastY: s.y,
              // unsure they are useful anymore.
              // left: target.left,
              // top: target.top,
              theta: n(r.angle),
              // end of unsure
              width: r.width * r.scaleX,
              shiftKey: t.shiftKey,
              altKey: g,
              original: f.util.saveObjectTransform(r)
            };
            this._shouldCenterTransform(r, u, g) && (v.originX = "center", v.originY = "center"), v.original.originX = d.x, v.original.originY = d.y, this._currentTransform = v, this._beforeTransform(t);
          }
        },
        /**
         * Set the cursor type of the canvas element
         * @param {String} value Cursor type of the canvas element.
         * @see http://www.w3.org/TR/css3-ui/#cursor
         */
        setCursor: function(t) {
          this.upperCanvasEl.style.cursor = t;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx to draw the selection on
         */
        _drawSelection: function(t) {
          var r = this._groupSelector, e = new f.Point(r.ex, r.ey), s = f.util.transformPoint(e, this.viewportTransform), o = new f.Point(r.ex + r.left, r.ey + r.top), i = f.util.transformPoint(o, this.viewportTransform), l = Math.min(s.x, i.x), u = Math.min(s.y, i.y), d = Math.max(s.x, i.x), g = Math.max(s.y, i.y), v = this.selectionLineWidth / 2;
          this.selectionColor && (t.fillStyle = this.selectionColor, t.fillRect(l, u, d - l, g - u)), !(!this.selectionLineWidth || !this.selectionBorderColor) && (t.lineWidth = this.selectionLineWidth, t.strokeStyle = this.selectionBorderColor, l += v, u += v, d -= v, g -= v, f.Object.prototype._setLineDash.call(this, t, this.selectionDashArray), t.strokeRect(l, u, d - l, g - u));
        },
        /**
         * Method that determines what object we are clicking on
         * the skipGroup parameter is for internal use, is needed for shift+click action
         * 11/09/2018 TODO: would be cool if findTarget could discern between being a full target
         * or the outside part of the corner.
         * @param {Event} e mouse event
         * @param {Boolean} skipGroup when true, activeGroup is skipped and only objects are traversed through
         * @return {fabric.Object} the target found
         */
        findTarget: function(t, r) {
          if (!this.skipTargetFind) {
            var e = !0, s = this.getPointer(t, e), o = this._activeObject, i = this.getActiveObjects(), l, u, d = h(t), g = i.length > 1 && !r || i.length === 1;
            if (this.targets = [], g && o._findTargetCorner(s, d) || i.length > 1 && !r && o === this._searchPossibleTargets([o], s))
              return o;
            if (i.length === 1 && o === this._searchPossibleTargets([o], s))
              if (this.preserveObjectStacking)
                l = o, u = this.targets, this.targets = [];
              else
                return o;
            var v = this._searchPossibleTargets(this._objects, s);
            return t[this.altSelectionKey] && v && l && v !== l && (v = l, this.targets = u), v;
          }
        },
        /**
         * Checks point is inside the object.
         * @param {Object} [pointer] x,y object of point coordinates we want to check.
         * @param {fabric.Object} obj Object to test against
         * @param {Object} [globalPointer] x,y object of point coordinates relative to canvas used to search per pixel target.
         * @return {Boolean} true if point is contained within an area of given object
         * @private
         */
        _checkTarget: function(t, r, e) {
          if (r && r.visible && r.evented && // http://www.geog.ubc.ca/courses/klink/gis.notes/ncgia/u32.html
          // http://idav.ucdavis.edu/~okreylos/TAship/Spring2000/PointInPolygon.html
          r.containsPoint(t))
            if ((this.perPixelTargetFind || r.perPixelTargetFind) && !r.isEditing) {
              var s = this.isTargetTransparent(r, e.x, e.y);
              if (!s)
                return !0;
            } else
              return !0;
        },
        /**
         * Function used to search inside objects an object that contains pointer in bounding box or that contains pointerOnCanvas when painted
         * @param {Array} [objects] objects array to look into
         * @param {Object} [pointer] x,y object of point coordinates we want to check.
         * @return {fabric.Object} object that contains pointer
         * @private
         */
        _searchPossibleTargets: function(t, r) {
          for (var e, s = t.length, o; s--; ) {
            var i = t[s], l = i.group ? this._normalizePointer(i.group, r) : r;
            if (this._checkTarget(l, i, r)) {
              e = t[s], e.subTargetCheck && e instanceof f.Group && (o = this._searchPossibleTargets(e._objects, r), o && this.targets.push(o));
              break;
            }
          }
          return e;
        },
        /**
         * Returns pointer coordinates without the effect of the viewport
         * @param {Object} pointer with "x" and "y" number values
         * @return {Object} object with "x" and "y" number values
         */
        restorePointerVpt: function(t) {
          return f.util.transformPoint(
            t,
            f.util.invertTransform(this.viewportTransform)
          );
        },
        /**
         * Returns pointer coordinates relative to canvas.
         * Can return coordinates with or without viewportTransform.
         * ignoreZoom false gives back coordinates that represent
         * the point clicked on canvas element.
         * ignoreZoom true gives back coordinates after being processed
         * by the viewportTransform ( sort of coordinates of what is displayed
         * on the canvas where you are clicking.
         * ignoreZoom true = HTMLElement coordinates relative to top,left
         * ignoreZoom false, default = fabric space coordinates, the same used for shape position
         * To interact with your shapes top and left you want to use ignoreZoom true
         * most of the time, while ignoreZoom false will give you coordinates
         * compatible with the object.oCoords system.
         * of the time.
         * @param {Event} e
         * @param {Boolean} ignoreZoom
         * @return {Object} object with "x" and "y" number values
         */
        getPointer: function(t, r) {
          if (this._absolutePointer && !r)
            return this._absolutePointer;
          if (this._pointer && r)
            return this._pointer;
          var e = c(t), s = this.upperCanvasEl, o = s.getBoundingClientRect(), i = o.width || 0, l = o.height || 0, u;
          (!i || !l) && ("top" in o && "bottom" in o && (l = Math.abs(o.top - o.bottom)), "right" in o && "left" in o && (i = Math.abs(o.right - o.left))), this.calcOffset(), e.x = e.x - this._offset.left, e.y = e.y - this._offset.top, r || (e = this.restorePointerVpt(e));
          var d = this.getRetinaScaling();
          return d !== 1 && (e.x /= d, e.y /= d), i === 0 || l === 0 ? u = { width: 1, height: 1 } : u = {
            width: s.width / i,
            height: s.height / l
          }, {
            x: e.x * u.width,
            y: e.y * u.height
          };
        },
        /**
         * @private
         * @throws {CANVAS_INIT_ERROR} If canvas can not be initialized
         */
        _createUpperCanvas: function() {
          var t = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, ""), r = this.lowerCanvasEl, e = this.upperCanvasEl;
          e ? e.className = "" : (e = this._createCanvasElement(), this.upperCanvasEl = e), f.util.addClass(e, "upper-canvas " + t), this.wrapperEl.appendChild(e), this._copyCanvasStyle(r, e), this._applyCanvasStyle(e), this.contextTop = e.getContext("2d");
        },
        /**
         * Returns context of top canvas where interactions are drawn
         * @returns {CanvasRenderingContext2D}
         */
        getTopContext: function() {
          return this.contextTop;
        },
        /**
         * @private
         */
        _createCacheCanvas: function() {
          this.cacheCanvasEl = this._createCanvasElement(), this.cacheCanvasEl.setAttribute("width", this.width), this.cacheCanvasEl.setAttribute("height", this.height), this.contextCache = this.cacheCanvasEl.getContext("2d");
        },
        /**
         * @private
         */
        _initWrapperElement: function() {
          this.wrapperEl = f.util.wrapElement(this.lowerCanvasEl, "div", {
            class: this.containerClass
          }), f.util.setStyle(this.wrapperEl, {
            width: this.width + "px",
            height: this.height + "px",
            position: "relative"
          }), f.util.makeElementUnselectable(this.wrapperEl);
        },
        /**
         * @private
         * @param {HTMLElement} element canvas element to apply styles on
         */
        _applyCanvasStyle: function(t) {
          var r = this.width || t.width, e = this.height || t.height;
          f.util.setStyle(t, {
            position: "absolute",
            width: r + "px",
            height: e + "px",
            left: 0,
            top: 0,
            "touch-action": this.allowTouchScrolling ? "manipulation" : "none",
            "-ms-touch-action": this.allowTouchScrolling ? "manipulation" : "none"
          }), t.width = r, t.height = e, f.util.makeElementUnselectable(t);
        },
        /**
         * Copy the entire inline style from one element (fromEl) to another (toEl)
         * @private
         * @param {Element} fromEl Element style is copied from
         * @param {Element} toEl Element copied style is applied to
         */
        _copyCanvasStyle: function(t, r) {
          r.style.cssText = t.style.cssText;
        },
        /**
         * Returns context of canvas where object selection is drawn
         * @return {CanvasRenderingContext2D}
         */
        getSelectionContext: function() {
          return this.contextTop;
        },
        /**
         * Returns &lt;canvas> element on which object selection is drawn
         * @return {HTMLCanvasElement}
         */
        getSelectionElement: function() {
          return this.upperCanvasEl;
        },
        /**
         * Returns currently active object
         * @return {fabric.Object} active object
         */
        getActiveObject: function() {
          return this._activeObject;
        },
        /**
         * Returns an array with the current selected objects
         * @return {fabric.Object} active object
         */
        getActiveObjects: function() {
          var t = this._activeObject;
          return t ? t.type === "activeSelection" && t._objects ? t._objects.slice(0) : [t] : [];
        },
        /**
         * @private
         * @param {fabric.Object} obj Object that was removed
         */
        _onObjectRemoved: function(t) {
          t === this._activeObject && (this.fire("before:selection:cleared", { target: t }), this._discardActiveObject(), this.fire("selection:cleared", { target: t }), t.fire("deselected")), t === this._hoveredTarget && (this._hoveredTarget = null, this._hoveredTargets = []), this.callSuper("_onObjectRemoved", t);
        },
        /**
         * @private
         * Compares the old activeObject with the current one and fires correct events
         * @param {fabric.Object} obj old activeObject
         */
        _fireSelectionEvents: function(t, r) {
          var e = !1, s = this.getActiveObjects(), o = [], i = [];
          t.forEach(function(l) {
            s.indexOf(l) === -1 && (e = !0, l.fire("deselected", {
              e: r,
              target: l
            }), i.push(l));
          }), s.forEach(function(l) {
            t.indexOf(l) === -1 && (e = !0, l.fire("selected", {
              e: r,
              target: l
            }), o.push(l));
          }), t.length > 0 && s.length > 0 ? e && this.fire("selection:updated", {
            e: r,
            selected: o,
            deselected: i
          }) : s.length > 0 ? this.fire("selection:created", {
            e: r,
            selected: o
          }) : t.length > 0 && this.fire("selection:cleared", {
            e: r,
            deselected: i
          });
        },
        /**
         * Sets given object as the only active object on canvas
         * @param {fabric.Object} object Object to set as an active one
         * @param {Event} [e] Event (passed along when firing "object:selected")
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        setActiveObject: function(t, r) {
          var e = this.getActiveObjects();
          return this._setActiveObject(t, r), this._fireSelectionEvents(e, r), this;
        },
        /**
         * This is a private method for now.
         * This is supposed to be equivalent to setActiveObject but without firing
         * any event. There is commitment to have this stay this way.
         * This is the functional part of setActiveObject.
         * @private
         * @param {Object} object to set as active
         * @param {Event} [e] Event (passed along when firing "object:selected")
         * @return {Boolean} true if the selection happened
         */
        _setActiveObject: function(t, r) {
          return this._activeObject === t || !this._discardActiveObject(r, t) || t.onSelect({ e: r }) ? !1 : (this._activeObject = t, !0);
        },
        /**
         * This is a private method for now.
         * This is supposed to be equivalent to discardActiveObject but without firing
         * any events. There is commitment to have this stay this way.
         * This is the functional part of discardActiveObject.
         * @param {Event} [e] Event (passed along when firing "object:deselected")
         * @param {Object} object to set as active
         * @return {Boolean} true if the selection happened
         * @private
         */
        _discardActiveObject: function(t, r) {
          var e = this._activeObject;
          if (e) {
            if (e.onDeselect({ e: t, object: r }))
              return !1;
            this._activeObject = null;
          }
          return !0;
        },
        /**
         * Discards currently active object and fire events. If the function is called by fabric
         * as a consequence of a mouse event, the event is passed as a parameter and
         * sent to the fire function for the custom events. When used as a method the
         * e param does not have any application.
         * @param {event} e
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        discardActiveObject: function(t) {
          var r = this.getActiveObjects(), e = this.getActiveObject();
          return r.length && this.fire("before:selection:cleared", { target: e, e: t }), this._discardActiveObject(t), this._fireSelectionEvents(r, t), this;
        },
        /**
         * Clears a canvas element and removes all event listeners
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        dispose: function() {
          var t = this.wrapperEl;
          return this.removeListeners(), t.removeChild(this.upperCanvasEl), t.removeChild(this.lowerCanvasEl), this.contextCache = null, this.contextTop = null, ["upperCanvasEl", "cacheCanvasEl"].forEach(function(r) {
            f.util.cleanUpJsdomNode(this[r]), this[r] = void 0;
          }.bind(this)), t.parentNode && t.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl), delete this.wrapperEl, f.StaticCanvas.prototype.dispose.call(this), this;
        },
        /**
         * Clears all contexts (background, main, top) of an instance
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        clear: function() {
          return this.discardActiveObject(), this.clearContext(this.contextTop), this.callSuper("clear");
        },
        /**
         * Draws objects' controls (borders/controls)
         * @param {CanvasRenderingContext2D} ctx Context to render controls on
         */
        drawControls: function(t) {
          var r = this._activeObject;
          r && r._renderControls(t);
        },
        /**
         * @private
         */
        _toObject: function(t, r, e) {
          var s = this._realizeGroupTransformOnObject(t), o = this.callSuper("_toObject", t, r, e);
          return this._unwindGroupTransformOnObject(t, s), o;
        },
        /**
         * Realises an object's group transformation on it
         * @private
         * @param {fabric.Object} [instance] the object to transform (gets mutated)
         * @returns the original values of instance which were changed
         */
        _realizeGroupTransformOnObject: function(t) {
          if (t.group && t.group.type === "activeSelection" && this._activeObject === t.group) {
            var r = ["angle", "flipX", "flipY", "left", "scaleX", "scaleY", "skewX", "skewY", "top"], e = {};
            return r.forEach(function(s) {
              e[s] = t[s];
            }), f.util.addTransformToObject(t, this._activeObject.calcOwnMatrix()), e;
          } else
            return null;
        },
        /**
         * Restores the changed properties of instance
         * @private
         * @param {fabric.Object} [instance] the object to un-transform (gets mutated)
         * @param {Object} [originalValues] the original values of instance, as returned by _realizeGroupTransformOnObject
         */
        _unwindGroupTransformOnObject: function(t, r) {
          r && t.set(r);
        },
        /**
         * @private
         */
        _setSVGObject: function(t, r, e) {
          var s = this._realizeGroupTransformOnObject(r);
          this.callSuper("_setSVGObject", t, r, e), this._unwindGroupTransformOnObject(r, s);
        },
        setViewportTransform: function(t) {
          this.renderOnAddRemove && this._activeObject && this._activeObject.isEditing && this._activeObject.clearContextTop(), f.StaticCanvas.prototype.setViewportTransform.call(this, t);
        }
      }
    );
    for (var a in f.StaticCanvas)
      a !== "prototype" && (f.Canvas[a] = f.StaticCanvas[a]);
  }(), function() {
    var c = f.util.addListener, n = f.util.removeListener, h = 3, a = 2, t = 1, r = { passive: !1 };
    function e(s, o) {
      return s.button && s.button === o - 1;
    }
    f.util.object.extend(
      f.Canvas.prototype,
      /** @lends fabric.Canvas.prototype */
      {
        /**
         * Contains the id of the touch event that owns the fabric transform
         * @type Number
         * @private
         */
        mainTouchId: null,
        /**
         * Adds mouse listeners to canvas
         * @private
         */
        _initEventListeners: function() {
          this.removeListeners(), this._bindEvents(), this.addOrRemove(c, "add");
        },
        /**
         * return an event prefix pointer or mouse.
         * @private
         */
        _getEventPrefix: function() {
          return this.enablePointerEvents ? "pointer" : "mouse";
        },
        addOrRemove: function(s, o) {
          var i = this.upperCanvasEl, l = this._getEventPrefix();
          s(f.window, "resize", this._onResize), s(i, l + "down", this._onMouseDown), s(i, l + "move", this._onMouseMove, r), s(i, l + "out", this._onMouseOut), s(i, l + "enter", this._onMouseEnter), s(i, "wheel", this._onMouseWheel), s(i, "contextmenu", this._onContextMenu), s(i, "dblclick", this._onDoubleClick), s(i, "dragover", this._onDragOver), s(i, "dragenter", this._onDragEnter), s(i, "dragleave", this._onDragLeave), s(i, "drop", this._onDrop), this.enablePointerEvents || s(i, "touchstart", this._onTouchStart, r), typeof b < "u" && o in b && (b[o](i, "gesture", this._onGesture), b[o](i, "drag", this._onDrag), b[o](i, "orientation", this._onOrientationChange), b[o](i, "shake", this._onShake), b[o](i, "longpress", this._onLongPress));
        },
        /**
         * Removes all event listeners
         */
        removeListeners: function() {
          this.addOrRemove(n, "remove");
          var s = this._getEventPrefix();
          n(f.document, s + "up", this._onMouseUp), n(f.document, "touchend", this._onTouchEnd, r), n(f.document, s + "move", this._onMouseMove, r), n(f.document, "touchmove", this._onMouseMove, r);
        },
        /**
         * @private
         */
        _bindEvents: function() {
          this.eventsBound || (this._onMouseDown = this._onMouseDown.bind(this), this._onTouchStart = this._onTouchStart.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onResize = this._onResize.bind(this), this._onGesture = this._onGesture.bind(this), this._onDrag = this._onDrag.bind(this), this._onShake = this._onShake.bind(this), this._onLongPress = this._onLongPress.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this._onMouseWheel = this._onMouseWheel.bind(this), this._onMouseOut = this._onMouseOut.bind(this), this._onMouseEnter = this._onMouseEnter.bind(this), this._onContextMenu = this._onContextMenu.bind(this), this._onDoubleClick = this._onDoubleClick.bind(this), this._onDragOver = this._onDragOver.bind(this), this._onDragEnter = this._simpleEventHandler.bind(this, "dragenter"), this._onDragLeave = this._simpleEventHandler.bind(this, "dragleave"), this._onDrop = this._onDrop.bind(this), this.eventsBound = !0);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js gesture
         * @param {Event} [self] Inner Event object
         */
        _onGesture: function(s, o) {
          this.__onTransformGesture && this.__onTransformGesture(s, o);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js drag
         * @param {Event} [self] Inner Event object
         */
        _onDrag: function(s, o) {
          this.__onDrag && this.__onDrag(s, o);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on wheel event
         */
        _onMouseWheel: function(s) {
          this.__onMouseWheel(s);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onMouseOut: function(s) {
          var o = this._hoveredTarget;
          this.fire("mouse:out", { target: o, e: s }), this._hoveredTarget = null, o && o.fire("mouseout", { e: s });
          var i = this;
          this._hoveredTargets.forEach(function(l) {
            i.fire("mouse:out", { target: o, e: s }), l && o.fire("mouseout", { e: s });
          }), this._hoveredTargets = [];
        },
        /**
         * @private
         * @param {Event} e Event object fired on mouseenter
         */
        _onMouseEnter: function(s) {
          !this._currentTransform && !this.findTarget(s) && (this.fire("mouse:over", { target: null, e: s }), this._hoveredTarget = null, this._hoveredTargets = []);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js orientation change
         * @param {Event} [self] Inner Event object
         */
        _onOrientationChange: function(s, o) {
          this.__onOrientationChange && this.__onOrientationChange(s, o);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js shake
         * @param {Event} [self] Inner Event object
         */
        _onShake: function(s, o) {
          this.__onShake && this.__onShake(s, o);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js shake
         * @param {Event} [self] Inner Event object
         */
        _onLongPress: function(s, o) {
          this.__onLongPress && this.__onLongPress(s, o);
        },
        /**
         * prevent default to allow drop event to be fired
         * @private
         * @param {Event} [e] Event object fired on Event.js shake
         */
        _onDragOver: function(s) {
          s.preventDefault();
          var o = this._simpleEventHandler("dragover", s);
          this._fireEnterLeaveEvents(o, s);
        },
        /**
         * `drop:before` is a an event that allow you to schedule logic
         * before the `drop` event. Prefer `drop` event always, but if you need
         * to run some drop-disabling logic on an event, since there is no way
         * to handle event handlers ordering, use `drop:before`
         * @param {Event} e
         */
        _onDrop: function(s) {
          return this._simpleEventHandler("drop:before", s), this._simpleEventHandler("drop", s);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onContextMenu: function(s) {
          return this.stopContextMenu && (s.stopPropagation(), s.preventDefault()), !1;
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onDoubleClick: function(s) {
          this._cacheTransformEventData(s), this._handleEvent(s, "dblclick"), this._resetTransformEventData(s);
        },
        /**
         * Return a the id of an event.
         * returns either the pointerId or the identifier or 0 for the mouse event
         * @private
         * @param {Event} evt Event object
         */
        getPointerId: function(s) {
          var o = s.changedTouches;
          return o ? o[0] && o[0].identifier : this.enablePointerEvents ? s.pointerId : -1;
        },
        /**
         * Determines if an event has the id of the event that is considered main
         * @private
         * @param {evt} event Event object
         */
        _isMainEvent: function(s) {
          return s.isPrimary === !0 ? !0 : s.isPrimary === !1 ? !1 : s.type === "touchend" && s.touches.length === 0 ? !0 : s.changedTouches ? s.changedTouches[0].identifier === this.mainTouchId : !0;
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onTouchStart: function(s) {
          s.preventDefault(), this.mainTouchId === null && (this.mainTouchId = this.getPointerId(s)), this.__onMouseDown(s), this._resetTransformEventData();
          var o = this.upperCanvasEl, i = this._getEventPrefix();
          c(f.document, "touchend", this._onTouchEnd, r), c(f.document, "touchmove", this._onMouseMove, r), n(o, i + "down", this._onMouseDown);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onMouseDown: function(s) {
          this.__onMouseDown(s), this._resetTransformEventData();
          var o = this.upperCanvasEl, i = this._getEventPrefix();
          n(o, i + "move", this._onMouseMove, r), c(f.document, i + "up", this._onMouseUp), c(f.document, i + "move", this._onMouseMove, r);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onTouchEnd: function(s) {
          if (!(s.touches.length > 0)) {
            this.__onMouseUp(s), this._resetTransformEventData(), this.mainTouchId = null;
            var o = this._getEventPrefix();
            n(f.document, "touchend", this._onTouchEnd, r), n(f.document, "touchmove", this._onMouseMove, r);
            var i = this;
            this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout(function() {
              c(i.upperCanvasEl, o + "down", i._onMouseDown), i._willAddMouseDown = 0;
            }, 400);
          }
        },
        /**
         * @private
         * @param {Event} e Event object fired on mouseup
         */
        _onMouseUp: function(s) {
          this.__onMouseUp(s), this._resetTransformEventData();
          var o = this.upperCanvasEl, i = this._getEventPrefix();
          this._isMainEvent(s) && (n(f.document, i + "up", this._onMouseUp), n(f.document, i + "move", this._onMouseMove, r), c(o, i + "move", this._onMouseMove, r));
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousemove
         */
        _onMouseMove: function(s) {
          !this.allowTouchScrolling && s.preventDefault && s.preventDefault(), this.__onMouseMove(s);
        },
        /**
         * @private
         */
        _onResize: function() {
          this.calcOffset();
        },
        /**
         * Decides whether the canvas should be redrawn in mouseup and mousedown events.
         * @private
         * @param {Object} target
         */
        _shouldRender: function(s) {
          var o = this._activeObject;
          return !!o != !!s || o && s && o !== s ? !0 : (o && o.isEditing, !1);
        },
        /**
         * Method that defines the actions when mouse is released on canvas.
         * The method resets the currentTransform parameters, store the image corner
         * position in the image object and render the canvas on top.
         * @private
         * @param {Event} e Event object fired on mouseup
         */
        __onMouseUp: function(s) {
          var o, i = this._currentTransform, l = this._groupSelector, u = !1, d = !l || l.left === 0 && l.top === 0;
          if (this._cacheTransformEventData(s), o = this._target, this._handleEvent(s, "up:before"), e(s, h)) {
            this.fireRightClick && this._handleEvent(s, "up", h, d);
            return;
          }
          if (e(s, a)) {
            this.fireMiddleClick && this._handleEvent(s, "up", a, d), this._resetTransformEventData();
            return;
          }
          if (this.isDrawingMode && this._isCurrentlyDrawing) {
            this._onMouseUpInDrawingMode(s);
            return;
          }
          if (this._isMainEvent(s)) {
            if (i && (this._finalizeCurrentTransform(s), u = i.actionPerformed), !d) {
              var g = o === this._activeObject;
              this._maybeGroupObjects(s), u || (u = this._shouldRender(o) || !g && o === this._activeObject);
            }
            var v, m;
            if (o) {
              if (v = o._findTargetCorner(
                this.getPointer(s, !0),
                f.util.isTouchEvent(s)
              ), o.selectable && o !== this._activeObject && o.activeOn === "up")
                this.setActiveObject(o, s), u = !0;
              else {
                var C = o.controls[v], p = C && C.getMouseUpHandler(s, o, C);
                p && (m = this.getPointer(s), p(s, i, m.x, m.y));
              }
              o.isMoving = !1;
            }
            if (i && (i.target !== o || i.corner !== v)) {
              var x = i.target && i.target.controls[i.corner], A = x && x.getMouseUpHandler(s, o, C);
              m = m || this.getPointer(s), A && A(s, i, m.x, m.y);
            }
            this._setCursorFromEvent(s, o), this._handleEvent(s, "up", t, d), this._groupSelector = null, this._currentTransform = null, o && (o.__corner = 0), u ? this.requestRenderAll() : d || this.renderTop();
          }
        },
        /**
         * @private
         * Handle event firing for target and subtargets
         * @param {Event} e event from mouse
         * @param {String} eventType event to fire (up, down or move)
         * @return {Fabric.Object} target return the the target found, for internal reasons.
         */
        _simpleEventHandler: function(s, o) {
          var i = this.findTarget(o), l = this.targets, u = {
            e: o,
            target: i,
            subTargets: l
          };
          if (this.fire(s, u), i && i.fire(s, u), !l)
            return i;
          for (var d = 0; d < l.length; d++)
            l[d].fire(s, u);
          return i;
        },
        /**
         * @private
         * Handle event firing for target and subtargets
         * @param {Event} e event from mouse
         * @param {String} eventType event to fire (up, down or move)
         * @param {fabric.Object} targetObj receiving event
         * @param {Number} [button] button used in the event 1 = left, 2 = middle, 3 = right
         * @param {Boolean} isClick for left button only, indicates that the mouse up happened without move.
         */
        _handleEvent: function(s, o, i, l) {
          var u = this._target, d = this.targets || [], g = {
            e: s,
            target: u,
            subTargets: d,
            button: i || t,
            isClick: l || !1,
            pointer: this._pointer,
            absolutePointer: this._absolutePointer,
            transform: this._currentTransform
          };
          o === "up" && (g.currentTarget = this.findTarget(s), g.currentSubTargets = this.targets), this.fire("mouse:" + o, g), u && u.fire("mouse" + o, g);
          for (var v = 0; v < d.length; v++)
            d[v].fire("mouse" + o, g);
        },
        /**
         * @private
         * @param {Event} e send the mouse event that generate the finalize down, so it can be used in the event
         */
        _finalizeCurrentTransform: function(s) {
          var o = this._currentTransform, i = o.target, l = {
            e: s,
            target: i,
            transform: o,
            action: o.action
          };
          i._scaling && (i._scaling = !1), i.setCoords(), (o.actionPerformed || this.stateful && i.hasStateChanged()) && this._fire("modified", l);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onMouseDownInDrawingMode: function(s) {
          this._isCurrentlyDrawing = !0, this.getActiveObject() && this.discardActiveObject(s).requestRenderAll();
          var o = this.getPointer(s);
          this.freeDrawingBrush.onMouseDown(o, { e: s, pointer: o }), this._handleEvent(s, "down");
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousemove
         */
        _onMouseMoveInDrawingMode: function(s) {
          if (this._isCurrentlyDrawing) {
            var o = this.getPointer(s);
            this.freeDrawingBrush.onMouseMove(o, { e: s, pointer: o });
          }
          this.setCursor(this.freeDrawingCursor), this._handleEvent(s, "move");
        },
        /**
         * @private
         * @param {Event} e Event object fired on mouseup
         */
        _onMouseUpInDrawingMode: function(s) {
          var o = this.getPointer(s);
          this._isCurrentlyDrawing = this.freeDrawingBrush.onMouseUp({ e: s, pointer: o }), this._handleEvent(s, "up");
        },
        /**
         * Method that defines the actions when mouse is clicked on canvas.
         * The method inits the currentTransform parameters and renders all the
         * canvas so the current image can be placed on the top canvas and the rest
         * in on the container one.
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        __onMouseDown: function(s) {
          this._cacheTransformEventData(s), this._handleEvent(s, "down:before");
          var o = this._target;
          if (e(s, h)) {
            this.fireRightClick && this._handleEvent(s, "down", h);
            return;
          }
          if (e(s, a)) {
            this.fireMiddleClick && this._handleEvent(s, "down", a);
            return;
          }
          if (this.isDrawingMode) {
            this._onMouseDownInDrawingMode(s);
            return;
          }
          if (this._isMainEvent(s) && !this._currentTransform) {
            var i = this._pointer;
            this._previousPointer = i;
            var l = this._shouldRender(o), u = this._shouldGroup(s, o);
            if (this._shouldClearSelection(s, o) ? this.discardActiveObject(s) : u && (this._handleGrouping(s, o), o = this._activeObject), this.selection && (!o || !o.selectable && !o.isEditing && o !== this._activeObject) && (this._groupSelector = {
              ex: this._absolutePointer.x,
              ey: this._absolutePointer.y,
              top: 0,
              left: 0
            }), o) {
              var d = o === this._activeObject;
              o.selectable && o.activeOn === "down" && this.setActiveObject(o, s);
              var g = o._findTargetCorner(
                this.getPointer(s, !0),
                f.util.isTouchEvent(s)
              );
              if (o.__corner = g, o === this._activeObject && (g || !u)) {
                this._setupCurrentTransform(s, o, d);
                var v = o.controls[g], i = this.getPointer(s), m = v && v.getMouseDownHandler(s, o, v);
                m && m(s, this._currentTransform, i.x, i.y);
              }
            }
            this._handleEvent(s, "down"), (l || u) && this.requestRenderAll();
          }
        },
        /**
         * reset cache form common information needed during event processing
         * @private
         */
        _resetTransformEventData: function() {
          this._target = null, this._pointer = null, this._absolutePointer = null;
        },
        /**
         * Cache common information needed during event processing
         * @private
         * @param {Event} e Event object fired on event
         */
        _cacheTransformEventData: function(s) {
          this._resetTransformEventData(), this._pointer = this.getPointer(s, !0), this._absolutePointer = this.restorePointerVpt(this._pointer), this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(s) || null;
        },
        /**
         * @private
         */
        _beforeTransform: function(s) {
          var o = this._currentTransform;
          this.stateful && o.target.saveState(), this.fire("before:transform", {
            e: s,
            transform: o
          });
        },
        /**
         * Method that defines the actions when mouse is hovering the canvas.
         * The currentTransform parameter will define whether the user is rotating/scaling/translating
         * an image or neither of them (only hovering). A group selection is also possible and would cancel
         * all any other type of action.
         * In case of an image transformation only the top canvas will be rendered.
         * @private
         * @param {Event} e Event object fired on mousemove
         */
        __onMouseMove: function(s) {
          this._handleEvent(s, "move:before"), this._cacheTransformEventData(s);
          var o, i;
          if (this.isDrawingMode) {
            this._onMouseMoveInDrawingMode(s);
            return;
          }
          if (this._isMainEvent(s)) {
            var l = this._groupSelector;
            l ? (i = this._absolutePointer, l.left = i.x - l.ex, l.top = i.y - l.ey, this.renderTop()) : this._currentTransform ? this._transformObject(s) : (o = this.findTarget(s) || null, this._setCursorFromEvent(s, o), this._fireOverOutEvents(o, s)), this._handleEvent(s, "move"), this._resetTransformEventData();
          }
        },
        /**
         * Manage the mouseout, mouseover events for the fabric object on the canvas
         * @param {Fabric.Object} target the target where the target from the mousemove event
         * @param {Event} e Event object fired on mousemove
         * @private
         */
        _fireOverOutEvents: function(s, o) {
          var i = this._hoveredTarget, l = this._hoveredTargets, u = this.targets, d = Math.max(l.length, u.length);
          this.fireSyntheticInOutEvents(s, o, {
            oldTarget: i,
            evtOut: "mouseout",
            canvasEvtOut: "mouse:out",
            evtIn: "mouseover",
            canvasEvtIn: "mouse:over"
          });
          for (var g = 0; g < d; g++)
            this.fireSyntheticInOutEvents(u[g], o, {
              oldTarget: l[g],
              evtOut: "mouseout",
              evtIn: "mouseover"
            });
          this._hoveredTarget = s, this._hoveredTargets = this.targets.concat();
        },
        /**
         * Manage the dragEnter, dragLeave events for the fabric objects on the canvas
         * @param {Fabric.Object} target the target where the target from the onDrag event
         * @param {Event} e Event object fired on ondrag
         * @private
         */
        _fireEnterLeaveEvents: function(s, o) {
          var i = this._draggedoverTarget, l = this._hoveredTargets, u = this.targets, d = Math.max(l.length, u.length);
          this.fireSyntheticInOutEvents(s, o, {
            oldTarget: i,
            evtOut: "dragleave",
            evtIn: "dragenter"
          });
          for (var g = 0; g < d; g++)
            this.fireSyntheticInOutEvents(u[g], o, {
              oldTarget: l[g],
              evtOut: "dragleave",
              evtIn: "dragenter"
            });
          this._draggedoverTarget = s;
        },
        /**
         * Manage the synthetic in/out events for the fabric objects on the canvas
         * @param {Fabric.Object} target the target where the target from the supported events
         * @param {Event} e Event object fired
         * @param {Object} config configuration for the function to work
         * @param {String} config.targetName property on the canvas where the old target is stored
         * @param {String} [config.canvasEvtOut] name of the event to fire at canvas level for out
         * @param {String} config.evtOut name of the event to fire for out
         * @param {String} [config.canvasEvtIn] name of the event to fire at canvas level for in
         * @param {String} config.evtIn name of the event to fire for in
         * @private
         */
        fireSyntheticInOutEvents: function(s, o, i) {
          var l, u, d = i.oldTarget, g, v, m = d !== s, C = i.canvasEvtIn, p = i.canvasEvtOut;
          m && (l = { e: o, target: s, previousTarget: d }, u = { e: o, target: d, nextTarget: s }), v = s && m, g = d && m, g && (p && this.fire(p, u), d.fire(i.evtOut, u)), v && (C && this.fire(C, l), s.fire(i.evtIn, l));
        },
        /**
         * Method that defines actions when an Event Mouse Wheel
         * @param {Event} e Event object fired on mouseup
         */
        __onMouseWheel: function(s) {
          this._cacheTransformEventData(s), this._handleEvent(s, "wheel"), this._resetTransformEventData();
        },
        /**
         * @private
         * @param {Event} e Event fired on mousemove
         */
        _transformObject: function(s) {
          var o = this.getPointer(s), i = this._currentTransform;
          i.reset = !1, i.shiftKey = s.shiftKey, i.altKey = s[this.centeredKey], this._performTransformAction(s, i, o), i.actionPerformed && this.requestRenderAll();
        },
        /**
         * @private
         */
        _performTransformAction: function(s, o, i) {
          var l = i.x, u = i.y, d = o.action, g = !1, v = o.actionHandler;
          v && (g = v(s, o, l, u)), d === "drag" && g && (o.target.isMoving = !0, this.setCursor(o.target.moveCursor || this.moveCursor)), o.actionPerformed = o.actionPerformed || g;
        },
        /**
         * @private
         */
        _fire: f.controlsUtils.fireEvent,
        /**
         * Sets the cursor depending on where the canvas is being hovered.
         * Note: very buggy in Opera
         * @param {Event} e Event object
         * @param {Object} target Object that the mouse is hovering, if so.
         */
        _setCursorFromEvent: function(s, o) {
          if (!o)
            return this.setCursor(this.defaultCursor), !1;
          var i = o.hoverCursor || this.hoverCursor, l = this._activeObject && this._activeObject.type === "activeSelection" ? this._activeObject : null, u = (!l || !l.contains(o)) && o._findTargetCorner(this.getPointer(s, !0));
          u ? this.setCursor(this.getCornerCursor(u, o, s)) : (o.subTargetCheck && this.targets.concat().reverse().map(function(d) {
            i = d.hoverCursor || i;
          }), this.setCursor(i));
        },
        /**
         * @private
         */
        getCornerCursor: function(s, o, i) {
          var l = o.controls[s];
          return l.cursorStyleHandler(i, l, o);
        }
      }
    );
  }(), function() {
    var c = Math.min, n = Math.max;
    f.util.object.extend(
      f.Canvas.prototype,
      /** @lends fabric.Canvas.prototype */
      {
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         * @return {Boolean}
         */
        _shouldGroup: function(h, a) {
          var t = this._activeObject;
          return t && this._isSelectionKeyPressed(h) && a && a.selectable && this.selection && (t !== a || t.type === "activeSelection") && !a.onSelect({ e: h });
        },
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         */
        _handleGrouping: function(h, a) {
          var t = this._activeObject;
          t.__corner || a === t && (a = this.findTarget(h, !0), !a || !a.selectable) || (t && t.type === "activeSelection" ? this._updateActiveSelection(a, h) : this._createActiveSelection(a, h));
        },
        /**
         * @private
         */
        _updateActiveSelection: function(h, a) {
          var t = this._activeObject, r = t._objects.slice(0);
          t.contains(h) ? (t.removeWithUpdate(h), this._hoveredTarget = h, this._hoveredTargets = this.targets.concat(), t.size() === 1 && this._setActiveObject(t.item(0), a)) : (t.addWithUpdate(h), this._hoveredTarget = t, this._hoveredTargets = this.targets.concat()), this._fireSelectionEvents(r, a);
        },
        /**
         * @private
         */
        _createActiveSelection: function(h, a) {
          var t = this.getActiveObjects(), r = this._createGroup(h);
          this._hoveredTarget = r, this._setActiveObject(r, a), this._fireSelectionEvents(t, a);
        },
        /**
         * @private
         * @param {Object} target
         */
        _createGroup: function(h) {
          var a = this._objects, t = a.indexOf(this._activeObject) < a.indexOf(h), r = t ? [this._activeObject, h] : [h, this._activeObject];
          return this._activeObject.isEditing && this._activeObject.exitEditing(), new f.ActiveSelection(r, {
            canvas: this
          });
        },
        /**
         * @private
         * @param {Event} e mouse event
         */
        _groupSelectedObjects: function(h) {
          var a = this._collectObjects(h), t;
          a.length === 1 ? this.setActiveObject(a[0], h) : a.length > 1 && (t = new f.ActiveSelection(a.reverse(), {
            canvas: this
          }), this.setActiveObject(t, h));
        },
        /**
         * @private
         */
        _collectObjects: function(h) {
          for (var a = [], t, r = this._groupSelector.ex, e = this._groupSelector.ey, s = r + this._groupSelector.left, o = e + this._groupSelector.top, i = new f.Point(c(r, s), c(e, o)), l = new f.Point(n(r, s), n(e, o)), u = !this.selectionFullyContained, d = r === s && e === o, g = this._objects.length; g-- && (t = this._objects[g], !(!(!t || !t.selectable || !t.visible) && (u && t.intersectsWithRect(i, l, !0) || t.isContainedWithinRect(i, l, !0) || u && t.containsPoint(i, null, !0) || u && t.containsPoint(l, null, !0)) && (a.push(t), d))); )
            ;
          return a.length > 1 && (a = a.filter(function(v) {
            return !v.onSelect({ e: h });
          })), a;
        },
        /**
         * @private
         */
        _maybeGroupObjects: function(h) {
          this.selection && this._groupSelector && this._groupSelectedObjects(h), this.setCursor(this.defaultCursor), this._groupSelector = null;
        }
      }
    );
  }(), function() {
    f.util.object.extend(
      f.StaticCanvas.prototype,
      /** @lends fabric.StaticCanvas.prototype */
      {
        /**
         * Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately
         * @param {Object} [options] Options object
         * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
         * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
         * @param {Number} [options.multiplier=1] Multiplier to scale by, to have consistent
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 2.0.0
         * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
         * @see {@link http://jsfiddle.net/fabricjs/NfZVb/|jsFiddle demo}
         * @example <caption>Generate jpeg dataURL with lower quality</caption>
         * var dataURL = canvas.toDataURL({
         *   format: 'jpeg',
         *   quality: 0.8
         * });
         * @example <caption>Generate cropped png dataURL (clipping of canvas)</caption>
         * var dataURL = canvas.toDataURL({
         *   format: 'png',
         *   left: 100,
         *   top: 100,
         *   width: 200,
         *   height: 200
         * });
         * @example <caption>Generate double scaled png dataURL</caption>
         * var dataURL = canvas.toDataURL({
         *   format: 'png',
         *   multiplier: 2
         * });
         */
        toDataURL: function(c) {
          c || (c = {});
          var n = c.format || "png", h = c.quality || 1, a = (c.multiplier || 1) * (c.enableRetinaScaling ? this.getRetinaScaling() : 1), t = this.toCanvasElement(a, c);
          return f.util.toDataURL(t, n, h);
        },
        /**
         * Create a new HTMLCanvas element painted with the current canvas content.
         * No need to resize the actual one or repaint it.
         * Will transfer object ownership to a new canvas, paint it, and set everything back.
         * This is an intermediary step used to get to a dataUrl but also it is useful to
         * create quick image copies of a canvas without passing for the dataUrl string
         * @param {Number} [multiplier] a zoom factor.
         * @param {Object} [cropping] Cropping informations
         * @param {Number} [cropping.left] Cropping left offset.
         * @param {Number} [cropping.top] Cropping top offset.
         * @param {Number} [cropping.width] Cropping width.
         * @param {Number} [cropping.height] Cropping height.
         */
        toCanvasElement: function(c, n) {
          c = c || 1, n = n || {};
          var h = (n.width || this.width) * c, a = (n.height || this.height) * c, t = this.getZoom(), r = this.width, e = this.height, s = t * c, o = this.viewportTransform, i = (o[4] - (n.left || 0)) * c, l = (o[5] - (n.top || 0)) * c, u = this.interactive, d = [s, 0, 0, s, i, l], g = this.enableRetinaScaling, v = f.util.createCanvasElement(), m = this.contextTop;
          return v.width = h, v.height = a, this.contextTop = null, this.enableRetinaScaling = !1, this.interactive = !1, this.viewportTransform = d, this.width = h, this.height = a, this.calcViewportBoundaries(), this.renderCanvas(v.getContext("2d"), this._objects), this.viewportTransform = o, this.width = r, this.height = e, this.calcViewportBoundaries(), this.interactive = u, this.enableRetinaScaling = g, this.contextTop = m, v;
        }
      }
    );
  }(), f.util.object.extend(
    f.StaticCanvas.prototype,
    /** @lends fabric.StaticCanvas.prototype */
    {
      /**
       * Populates canvas with data from the specified JSON.
       * JSON format must conform to the one of {@link fabric.Canvas#toJSON}
       * @param {String|Object} json JSON string or object
       * @param {Function} callback Callback, invoked when json is parsed
       *                            and corresponding objects (e.g: {@link fabric.Image})
       *                            are initialized
       * @param {Function} [reviver] Method for further parsing of JSON elements, called after each fabric object created.
       * @return {fabric.Canvas} instance
       * @chainable
       * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#deserialization}
       * @see {@link http://jsfiddle.net/fabricjs/fmgXt/|jsFiddle demo}
       * @example <caption>loadFromJSON</caption>
       * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
       * @example <caption>loadFromJSON with reviver</caption>
       * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function(o, object) {
       *   // `o` = json object
       *   // `object` = fabric.Object instance
       *   // ... do some stuff ...
       * });
       */
      loadFromJSON: function(c, n, h) {
        if (c) {
          var a = typeof c == "string" ? JSON.parse(c) : f.util.object.clone(c), t = this, r = a.clipPath, e = this.renderOnAddRemove;
          return this.renderOnAddRemove = !1, delete a.clipPath, this._enlivenObjects(a.objects, function(s) {
            t.clear(), t._setBgOverlay(a, function() {
              r ? t._enlivenObjects([r], function(o) {
                t.clipPath = o[0], t.__setupCanvas.call(t, a, s, e, n);
              }) : t.__setupCanvas.call(t, a, s, e, n);
            });
          }, h), this;
        }
      },
      /**
       * @private
       * @param {Object} serialized Object with background and overlay information
       * @param {Array} restored canvas objects
       * @param {Function} cached renderOnAddRemove callback
       * @param {Function} callback Invoked after all background and overlay images/patterns loaded
       */
      __setupCanvas: function(c, n, h, a) {
        var t = this;
        n.forEach(function(r, e) {
          t.insertAt(r, e);
        }), this.renderOnAddRemove = h, delete c.objects, delete c.backgroundImage, delete c.overlayImage, delete c.background, delete c.overlay, this._setOptions(c), this.renderAll(), a && a();
      },
      /**
       * @private
       * @param {Object} serialized Object with background and overlay information
       * @param {Function} callback Invoked after all background and overlay images/patterns loaded
       */
      _setBgOverlay: function(c, n) {
        var h = {
          backgroundColor: !1,
          overlayColor: !1,
          backgroundImage: !1,
          overlayImage: !1
        };
        if (!c.backgroundImage && !c.overlayImage && !c.background && !c.overlay) {
          n && n();
          return;
        }
        var a = function() {
          h.backgroundImage && h.overlayImage && h.backgroundColor && h.overlayColor && n && n();
        };
        this.__setBgOverlay("backgroundImage", c.backgroundImage, h, a), this.__setBgOverlay("overlayImage", c.overlayImage, h, a), this.__setBgOverlay("backgroundColor", c.background, h, a), this.__setBgOverlay("overlayColor", c.overlay, h, a);
      },
      /**
       * @private
       * @param {String} property Property to set (backgroundImage, overlayImage, backgroundColor, overlayColor)
       * @param {(Object|String)} value Value to set
       * @param {Object} loaded Set loaded property to true if property is set
       * @param {Object} callback Callback function to invoke after property is set
       */
      __setBgOverlay: function(c, n, h, a) {
        var t = this;
        if (!n) {
          h[c] = !0, a && a();
          return;
        }
        c === "backgroundImage" || c === "overlayImage" ? f.util.enlivenObjects([n], function(r) {
          t[c] = r[0], h[c] = !0, a && a();
        }) : this["set" + f.util.string.capitalize(c, !0)](n, function() {
          h[c] = !0, a && a();
        });
      },
      /**
       * @private
       * @param {Array} objects
       * @param {Function} callback
       * @param {Function} [reviver]
       */
      _enlivenObjects: function(c, n, h) {
        if (!c || c.length === 0) {
          n && n([]);
          return;
        }
        f.util.enlivenObjects(c, function(a) {
          n && n(a);
        }, null, h);
      },
      /**
       * @private
       * @param {String} format
       * @param {Function} callback
       */
      _toDataURL: function(c, n) {
        this.clone(function(h) {
          n(h.toDataURL(c));
        });
      },
      /**
       * @private
       * @param {String} format
       * @param {Number} multiplier
       * @param {Function} callback
       */
      _toDataURLWithMultiplier: function(c, n, h) {
        this.clone(function(a) {
          h(a.toDataURLWithMultiplier(c, n));
        });
      },
      /**
       * Clones canvas instance
       * @param {Object} [callback] Receives cloned instance as a first argument
       * @param {Array} [properties] Array of properties to include in the cloned canvas and children
       */
      clone: function(c, n) {
        var h = JSON.stringify(this.toJSON(n));
        this.cloneWithoutData(function(a) {
          a.loadFromJSON(h, function() {
            c && c(a);
          });
        });
      },
      /**
       * Clones canvas instance without cloning existing data.
       * This essentially copies canvas dimensions, clipping properties, etc.
       * but leaves data empty (so that you can populate it with your own)
       * @param {Object} [callback] Receives cloned instance as a first argument
       */
      cloneWithoutData: function(c) {
        var n = f.util.createCanvasElement();
        n.width = this.width, n.height = this.height;
        var h = new f.Canvas(n);
        this.backgroundImage ? (h.setBackgroundImage(this.backgroundImage.src, function() {
          h.renderAll(), c && c(h);
        }), h.backgroundImageOpacity = this.backgroundImageOpacity, h.backgroundImageStretch = this.backgroundImageStretch) : c && c(h);
      }
    }
  ), function() {
    var c = f.util.degreesToRadians, n = f.util.radiansToDegrees;
    f.util.object.extend(
      f.Canvas.prototype,
      /** @lends fabric.Canvas.prototype */
      {
        /**
         * Method that defines actions when an Event.js gesture is detected on an object. Currently only supports
         * 2 finger gestures.
         * @param {Event} e Event object by Event.js
         * @param {Event} self Event proxy object by Event.js
         */
        __onTransformGesture: function(h, a) {
          if (!(this.isDrawingMode || !h.touches || h.touches.length !== 2 || a.gesture !== "gesture")) {
            var t = this.findTarget(h);
            typeof t < "u" && (this.__gesturesParams = {
              e: h,
              self: a,
              target: t
            }, this.__gesturesRenderer()), this.fire("touch:gesture", {
              target: t,
              e: h,
              self: a
            });
          }
        },
        __gesturesParams: null,
        __gesturesRenderer: function() {
          if (!(this.__gesturesParams === null || this._currentTransform === null)) {
            var h = this.__gesturesParams.self, a = this._currentTransform, t = this.__gesturesParams.e;
            a.action = "scale", a.originX = a.originY = "center", this._scaleObjectBy(h.scale, t), h.rotation !== 0 && (a.action = "rotate", this._rotateObjectByAngle(h.rotation, t)), this.requestRenderAll(), a.action = "drag";
          }
        },
        /**
         * Method that defines actions when an Event.js drag is detected.
         *
         * @param {Event} e Event object by Event.js
         * @param {Event} self Event proxy object by Event.js
         */
        __onDrag: function(h, a) {
          this.fire("touch:drag", {
            e: h,
            self: a
          });
        },
        /**
         * Method that defines actions when an Event.js orientation event is detected.
         *
         * @param {Event} e Event object by Event.js
         * @param {Event} self Event proxy object by Event.js
         */
        __onOrientationChange: function(h, a) {
          this.fire("touch:orientation", {
            e: h,
            self: a
          });
        },
        /**
         * Method that defines actions when an Event.js shake event is detected.
         *
         * @param {Event} e Event object by Event.js
         * @param {Event} self Event proxy object by Event.js
         */
        __onShake: function(h, a) {
          this.fire("touch:shake", {
            e: h,
            self: a
          });
        },
        /**
         * Method that defines actions when an Event.js longpress event is detected.
         *
         * @param {Event} e Event object by Event.js
         * @param {Event} self Event proxy object by Event.js
         */
        __onLongPress: function(h, a) {
          this.fire("touch:longpress", {
            e: h,
            self: a
          });
        },
        /**
         * Scales an object by a factor
         * @param {Number} s The scale factor to apply to the current scale level
         * @param {Event} e Event object by Event.js
         */
        _scaleObjectBy: function(h, a) {
          var t = this._currentTransform, r = t.target;
          return t.gestureScale = h, r._scaling = !0, f.controlsUtils.scalingEqually(a, t, 0, 0);
        },
        /**
         * Rotates object by an angle
         * @param {Number} curAngle The angle of rotation in degrees
         * @param {Event} e Event object by Event.js
         */
        _rotateObjectByAngle: function(h, a) {
          var t = this._currentTransform;
          t.target.get("lockRotation") || (t.target.rotate(n(c(h) + t.theta)), this._fire("rotating", {
            target: t.target,
            e: a,
            transform: t
          }));
        }
      }
    );
  }(), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.util.object.extend, a = n.util.object.clone, t = n.util.toFixed, r = n.util.string.capitalize, e = n.util.degreesToRadians, s = !n.isLikelyNode, o = 2;
    n.Object || (n.Object = n.util.createClass(
      n.CommonMethods,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Type of an object (rect, circle, path, etc.).
         * Note that this property is meant to be read-only and not meant to be modified.
         * If you modify, certain parts of Fabric (such as JSON loading) won't work correctly.
         * @type String
         * @default
         */
        type: "object",
        /**
         * Horizontal origin of transformation of an object (one of "left", "right", "center")
         * See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups
         * @type String
         * @default
         */
        originX: "left",
        /**
         * Vertical origin of transformation of an object (one of "top", "bottom", "center")
         * See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups
         * @type String
         * @default
         */
        originY: "top",
        /**
         * Top position of an object. Note that by default it's relative to object top. You can change this by setting originY={top/center/bottom}
         * @type Number
         * @default
         */
        top: 0,
        /**
         * Left position of an object. Note that by default it's relative to object left. You can change this by setting originX={left/center/right}
         * @type Number
         * @default
         */
        left: 0,
        /**
         * Object width
         * @type Number
         * @default
         */
        width: 0,
        /**
         * Object height
         * @type Number
         * @default
         */
        height: 0,
        /**
         * Object scale factor (horizontal)
         * @type Number
         * @default
         */
        scaleX: 1,
        /**
         * Object scale factor (vertical)
         * @type Number
         * @default
         */
        scaleY: 1,
        /**
         * When true, an object is rendered as flipped horizontally
         * @type Boolean
         * @default
         */
        flipX: !1,
        /**
         * When true, an object is rendered as flipped vertically
         * @type Boolean
         * @default
         */
        flipY: !1,
        /**
         * Opacity of an object
         * @type Number
         * @default
         */
        opacity: 1,
        /**
         * Angle of rotation of an object (in degrees)
         * @type Number
         * @default
         */
        angle: 0,
        /**
         * Angle of skew on x axes of an object (in degrees)
         * @type Number
         * @default
         */
        skewX: 0,
        /**
         * Angle of skew on y axes of an object (in degrees)
         * @type Number
         * @default
         */
        skewY: 0,
        /**
         * Size of object's controlling corners (in pixels)
         * @type Number
         * @default
         */
        cornerSize: 13,
        /**
         * Size of object's controlling corners when touch interaction is detected
         * @type Number
         * @default
         */
        touchCornerSize: 24,
        /**
         * When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)
         * @type Boolean
         * @default
         */
        transparentCorners: !0,
        /**
         * Default cursor value used when hovering over this object on canvas
         * @type String
         * @default
         */
        hoverCursor: null,
        /**
         * Default cursor value used when moving this object on canvas
         * @type String
         * @default
         */
        moveCursor: null,
        /**
         * Padding between object and its controlling borders (in pixels)
         * @type Number
         * @default
         */
        padding: 0,
        /**
         * Color of controlling borders of an object (when it's active)
         * @type String
         * @default
         */
        borderColor: "rgb(178,204,255)",
        /**
         * Array specifying dash pattern of an object's borders (hasBorder must be true)
         * @since 1.6.2
         * @type Array
         */
        borderDashArray: null,
        /**
         * Color of controlling corners of an object (when it's active)
         * @type String
         * @default
         */
        cornerColor: "rgb(178,204,255)",
        /**
         * Color of controlling corners of an object (when it's active and transparentCorners false)
         * @since 1.6.2
         * @type String
         * @default
         */
        cornerStrokeColor: null,
        /**
         * Specify style of control, 'rect' or 'circle'
         * @since 1.6.2
         * @type String
         */
        cornerStyle: "rect",
        /**
         * Array specifying dash pattern of an object's control (hasBorder must be true)
         * @since 1.6.2
         * @type Array
         */
        cornerDashArray: null,
        /**
         * When true, this object will use center point as the origin of transformation
         * when being scaled via the controls.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredScaling: !1,
        /**
         * When true, this object will use center point as the origin of transformation
         * when being rotated via the controls.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredRotation: !0,
        /**
         * Color of object's fill
         * takes css colors https://www.w3.org/TR/css-color-3/
         * @type String
         * @default
         */
        fill: "rgb(0,0,0)",
        /**
         * Fill rule used to fill an object
         * accepted values are nonzero, evenodd
         * <b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `fabric.Object#globalCompositeOperation` instead)
         * @type String
         * @default
         */
        fillRule: "nonzero",
        /**
         * Composite rule used for canvas globalCompositeOperation
         * @type String
         * @default
         */
        globalCompositeOperation: "source-over",
        /**
         * Background color of an object.
         * takes css colors https://www.w3.org/TR/css-color-3/
         * @type String
         * @default
         */
        backgroundColor: "",
        /**
         * Selection Background color of an object. colored layer behind the object when it is active.
         * does not mix good with globalCompositeOperation methods.
         * @type String
         * @default
         */
        selectionBackgroundColor: "",
        /**
         * When defined, an object is rendered via stroke and this property specifies its color
         * takes css colors https://www.w3.org/TR/css-color-3/
         * @type String
         * @default
         */
        stroke: null,
        /**
         * Width of a stroke used to render this object
         * @type Number
         * @default
         */
        strokeWidth: 1,
        /**
         * Array specifying dash pattern of an object's stroke (stroke must be defined)
         * @type Array
         */
        strokeDashArray: null,
        /**
         * Line offset of an object's stroke
         * @type Number
         * @default
         */
        strokeDashOffset: 0,
        /**
         * Line endings style of an object's stroke (one of "butt", "round", "square")
         * @type String
         * @default
         */
        strokeLineCap: "butt",
        /**
         * Corner style of an object's stroke (one of "bevel", "round", "miter")
         * @type String
         * @default
         */
        strokeLineJoin: "miter",
        /**
         * Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke
         * @type Number
         * @default
         */
        strokeMiterLimit: 4,
        /**
         * Shadow object representing shadow of this shape
         * @type fabric.Shadow
         * @default
         */
        shadow: null,
        /**
         * Opacity of object's controlling borders when object is active and moving
         * @type Number
         * @default
         */
        borderOpacityWhenMoving: 0.4,
        /**
         * Scale factor of object's controlling borders
         * bigger number will make a thicker border
         * border is 1, so this is basically a border thickness
         * since there is no way to change the border itself.
         * @type Number
         * @default
         */
        borderScaleFactor: 1,
        /**
         * Minimum allowed scale value of an object
         * @type Number
         * @default
         */
        minScaleLimit: 0,
        /**
         * When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
         * But events still fire on it.
         * @type Boolean
         * @default
         */
        selectable: !0,
        /**
         * When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4
         * @type Boolean
         * @default
         */
        evented: !0,
        /**
         * When set to `false`, an object is not rendered on canvas
         * @type Boolean
         * @default
         */
        visible: !0,
        /**
         * When set to `false`, object's controls are not displayed and can not be used to manipulate object
         * @type Boolean
         * @default
         */
        hasControls: !0,
        /**
         * When set to `false`, object's controlling borders are not rendered
         * @type Boolean
         * @default
         */
        hasBorders: !0,
        /**
         * When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box
         * @type Boolean
         * @default
         */
        perPixelTargetFind: !1,
        /**
         * When `false`, default object's values are not included in its serialization
         * @type Boolean
         * @default
         */
        includeDefaultValues: !0,
        /**
         * When `true`, object horizontal movement is locked
         * @type Boolean
         * @default
         */
        lockMovementX: !1,
        /**
         * When `true`, object vertical movement is locked
         * @type Boolean
         * @default
         */
        lockMovementY: !1,
        /**
         * When `true`, object rotation is locked
         * @type Boolean
         * @default
         */
        lockRotation: !1,
        /**
         * When `true`, object horizontal scaling is locked
         * @type Boolean
         * @default
         */
        lockScalingX: !1,
        /**
         * When `true`, object vertical scaling is locked
         * @type Boolean
         * @default
         */
        lockScalingY: !1,
        /**
         * When `true`, object horizontal skewing is locked
         * @type Boolean
         * @default
         */
        lockSkewingX: !1,
        /**
         * When `true`, object vertical skewing is locked
         * @type Boolean
         * @default
         */
        lockSkewingY: !1,
        /**
         * When `true`, object cannot be flipped by scaling into negative values
         * @type Boolean
         * @default
         */
        lockScalingFlip: !1,
        /**
         * When `true`, object is not exported in OBJECT/JSON
         * @since 1.6.3
         * @type Boolean
         * @default
         */
        excludeFromExport: !1,
        /**
         * When `true`, object is cached on an additional canvas.
         * When `false`, object is not cached unless necessary ( clipPath )
         * default to true
         * @since 1.7.0
         * @type Boolean
         * @default true
         */
        objectCaching: s,
        /**
         * When `true`, object properties are checked for cache invalidation. In some particular
         * situation you may want this to be disabled ( spray brush, very big, groups)
         * or if your application does not allow you to modify properties for groups child you want
         * to disable it for groups.
         * default to false
         * since 1.7.0
         * @type Boolean
         * @default false
         */
        statefullCache: !1,
        /**
         * When `true`, cache does not get updated during scaling. The picture will get blocky if scaled
         * too much and will be redrawn with correct details at the end of scaling.
         * this setting is performance and application dependant.
         * default to true
         * since 1.7.0
         * @type Boolean
         * @default true
         */
        noScaleCache: !0,
        /**
         * When `false`, the stoke width will scale with the object.
         * When `true`, the stroke will always match the exact pixel size entered for stroke width.
         * this Property does not work on Text classes or drawing call that uses strokeText,fillText methods
         * default to false
         * @since 2.6.0
         * @type Boolean
         * @default false
         * @type Boolean
         * @default false
         */
        strokeUniform: !1,
        /**
         * When set to `true`, object's cache will be rerendered next render call.
         * since 1.7.0
         * @type Boolean
         * @default true
         */
        dirty: !0,
        /**
         * keeps the value of the last hovered corner during mouse move.
         * 0 is no corner, or 'mt', 'ml', 'mtr' etc..
         * It should be private, but there is no harm in using it as
         * a read-only property.
         * @type number|string|any
         * @default 0
         */
        __corner: 0,
        /**
         * Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")
         * @type String
         * @default
         */
        paintFirst: "fill",
        /**
         * When 'down', object is set to active on mousedown/touchstart
         * When 'up', object is set to active on mouseup/touchend
         * Experimental. Let's see if this breaks anything before supporting officially
         * @private
         * since 4.4.0
         * @type String
         * @default 'down'
         */
        activeOn: "down",
        /**
         * List of properties to consider when checking if state
         * of an object is changed (fabric.Object#hasStateChanged)
         * as well as for history (undo/redo) purposes
         * @type Array
         */
        stateProperties: "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform".split(" "),
        /**
         * List of properties to consider when checking if cache needs refresh
         * Those properties are checked by statefullCache ON ( or lazy mode if we want ) or from single
         * calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
         * and refreshed at the next render
         * @type Array
         */
        cacheProperties: "fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(" "),
        /**
         * List of properties to consider for animating colors.
         * @type Array
         */
        colorProperties: "fill stroke backgroundColor".split(" "),
        /**
         * a fabricObject that, without stroke define a clipping area with their shape. filled in black
         * the clipPath object gets used when the object has rendered, and the context is placed in the center
         * of the object cacheCanvas.
         * If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'
         * @type fabric.Object
         */
        clipPath: void 0,
        /**
         * Meaningful ONLY when the object is used as clipPath.
         * if true, the clipPath will make the object clip to the outside of the clipPath
         * since 2.4.0
         * @type boolean
         * @default false
         */
        inverted: !1,
        /**
         * Meaningful ONLY when the object is used as clipPath.
         * if true, the clipPath will have its top and left relative to canvas, and will
         * not be influenced by the object transform. This will make the clipPath relative
         * to the canvas, but clipping just a particular object.
         * WARNING this is beta, this feature may change or be renamed.
         * since 2.4.0
         * @type boolean
         * @default false
         */
        absolutePositioned: !1,
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(i) {
          i && this.setOptions(i);
        },
        /**
         * Create a the canvas used to keep the cached copy of the object
         * @private
         */
        _createCacheCanvas: function() {
          this._cacheProperties = {}, this._cacheCanvas = n.util.createCanvasElement(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = !0;
        },
        /**
         * Limit the cache dimensions so that X * Y do not cross fabric.perfLimitSizeTotal
         * and each side do not cross fabric.cacheSideLimit
         * those numbers are configurable so that you can get as much detail as you want
         * making bargain with performances.
         * @param {Object} dims
         * @param {Object} dims.width width of canvas
         * @param {Object} dims.height height of canvas
         * @param {Object} dims.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @param {Object} dims.zoomY zoomY zoom value to unscale the canvas before drawing cache
         * @return {Object}.width width of canvas
         * @return {Object}.height height of canvas
         * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
         */
        _limitCacheSize: function(i) {
          var l = n.perfLimitSizeTotal, u = i.width, d = i.height, g = n.maxCacheSideLimit, v = n.minCacheSideLimit;
          if (u <= g && d <= g && u * d <= l)
            return u < v && (i.width = v), d < v && (i.height = v), i;
          var m = u / d, C = n.util.limitDimsByArea(m, l), p = n.util.capValue, x = p(v, C.x, g), A = p(v, C.y, g);
          return u > x && (i.zoomX /= u / x, i.width = x, i.capped = !0), d > A && (i.zoomY /= d / A, i.height = A, i.capped = !0), i;
        },
        /**
         * Return the dimension and the zoom level needed to create a cache canvas
         * big enough to host the object to be cached.
         * @private
         * @return {Object}.x width of object to be cached
         * @return {Object}.y height of object to be cached
         * @return {Object}.width width of canvas
         * @return {Object}.height height of canvas
         * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
         */
        _getCacheCanvasDimensions: function() {
          var i = this.getTotalObjectScaling(), l = this._getTransformedDimensions(0, 0), u = l.x * i.scaleX / this.scaleX, d = l.y * i.scaleY / this.scaleY;
          return {
            // for sure this ALIASING_LIMIT is slightly creating problem
            // in situation in which the cache canvas gets an upper limit
            // also objectScale contains already scaleX and scaleY
            width: u + o,
            height: d + o,
            zoomX: i.scaleX,
            zoomY: i.scaleY,
            x: u,
            y: d
          };
        },
        /**
         * Update width and height of the canvas for cache
         * returns true or false if canvas needed resize.
         * @private
         * @return {Boolean} true if the canvas has been resized
         */
        _updateCacheCanvas: function() {
          var i = this.canvas;
          if (this.noScaleCache && i && i._currentTransform) {
            var l = i._currentTransform.target, u = i._currentTransform.action;
            if (this === l && u.slice && u.slice(0, 5) === "scale")
              return !1;
          }
          var d = this._cacheCanvas, g = this._limitCacheSize(this._getCacheCanvasDimensions()), v = n.minCacheSideLimit, m = g.width, C = g.height, p, x, A = g.zoomX, k = g.zoomY, W = m !== this.cacheWidth || C !== this.cacheHeight, N = this.zoomX !== A || this.zoomY !== k, H = W || N, z = 0, K = 0, $ = !1;
          if (W) {
            var J = this._cacheCanvas.width, y = this._cacheCanvas.height, O = m > J || C > y, T = (m < J * 0.9 || C < y * 0.9) && J > v && y > v;
            $ = O || T, O && !g.capped && (m > v || C > v) && (z = m * 0.1, K = C * 0.1);
          }
          return this instanceof n.Text && this.path && (H = !0, $ = !0, z += this.getHeightOfLine(0) * this.zoomX, K += this.getHeightOfLine(0) * this.zoomY), H ? ($ ? (d.width = Math.ceil(m + z), d.height = Math.ceil(C + K)) : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0), this._cacheContext.clearRect(0, 0, d.width, d.height)), p = g.x / 2, x = g.y / 2, this.cacheTranslationX = Math.round(d.width / 2 - p) + p, this.cacheTranslationY = Math.round(d.height / 2 - x) + x, this.cacheWidth = m, this.cacheHeight = C, this._cacheContext.translate(this.cacheTranslationX, this.cacheTranslationY), this._cacheContext.scale(A, k), this.zoomX = A, this.zoomY = k, !0) : !1;
        },
        /**
         * Sets object's properties from options
         * @param {Object} [options] Options object
         */
        setOptions: function(i) {
          this._setOptions(i), this._initGradient(i.fill, "fill"), this._initGradient(i.stroke, "stroke"), this._initPattern(i.fill, "fill"), this._initPattern(i.stroke, "stroke");
        },
        /**
         * Transforms context when rendering an object
         * @param {CanvasRenderingContext2D} ctx Context
         */
        transform: function(i) {
          var l = this.group && !this.group._transformDone || this.group && this.canvas && i === this.canvas.contextTop, u = this.calcTransformMatrix(!l);
          i.transform(u[0], u[1], u[2], u[3], u[4], u[5]);
        },
        /**
         * Returns an object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toObject: function(i) {
          var l = n.Object.NUM_FRACTION_DIGITS, u = {
            type: this.type,
            version: n.version,
            originX: this.originX,
            originY: this.originY,
            left: t(this.left, l),
            top: t(this.top, l),
            width: t(this.width, l),
            height: t(this.height, l),
            fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill,
            stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke,
            strokeWidth: t(this.strokeWidth, l),
            strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
            strokeLineCap: this.strokeLineCap,
            strokeDashOffset: this.strokeDashOffset,
            strokeLineJoin: this.strokeLineJoin,
            strokeUniform: this.strokeUniform,
            strokeMiterLimit: t(this.strokeMiterLimit, l),
            scaleX: t(this.scaleX, l),
            scaleY: t(this.scaleY, l),
            angle: t(this.angle, l),
            flipX: this.flipX,
            flipY: this.flipY,
            opacity: t(this.opacity, l),
            shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow,
            visible: this.visible,
            backgroundColor: this.backgroundColor,
            fillRule: this.fillRule,
            paintFirst: this.paintFirst,
            globalCompositeOperation: this.globalCompositeOperation,
            skewX: t(this.skewX, l),
            skewY: t(this.skewY, l)
          };
          return this.clipPath && !this.clipPath.excludeFromExport && (u.clipPath = this.clipPath.toObject(i), u.clipPath.inverted = this.clipPath.inverted, u.clipPath.absolutePositioned = this.clipPath.absolutePositioned), n.util.populateWithProperties(this, u, i), this.includeDefaultValues || (u = this._removeDefaultValues(u)), u;
        },
        /**
         * Returns (dataless) object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toDatalessObject: function(i) {
          return this.toObject(i);
        },
        /**
         * @private
         * @param {Object} object
         */
        _removeDefaultValues: function(i) {
          var l = n.util.getKlass(i.type).prototype, u = l.stateProperties;
          return u.forEach(function(d) {
            d === "left" || d === "top" || (i[d] === l[d] && delete i[d], Array.isArray(i[d]) && Array.isArray(l[d]) && i[d].length === 0 && l[d].length === 0 && delete i[d]);
          }), i;
        },
        /**
         * Returns a string representation of an instance
         * @return {String}
         */
        toString: function() {
          return "#<fabric." + r(this.type) + ">";
        },
        /**
         * Return the object scale factor counting also the group scaling
         * @return {Object} object with scaleX and scaleY properties
         */
        getObjectScaling: function() {
          if (!this.group)
            return {
              scaleX: this.scaleX,
              scaleY: this.scaleY
            };
          var i = n.util.qrDecompose(this.calcTransformMatrix());
          return { scaleX: Math.abs(i.scaleX), scaleY: Math.abs(i.scaleY) };
        },
        /**
         * Return the object scale factor counting also the group scaling, zoom and retina
         * @return {Object} object with scaleX and scaleY properties
         */
        getTotalObjectScaling: function() {
          var i = this.getObjectScaling(), l = i.scaleX, u = i.scaleY;
          if (this.canvas) {
            var d = this.canvas.getZoom(), g = this.canvas.getRetinaScaling();
            l *= d * g, u *= d * g;
          }
          return { scaleX: l, scaleY: u };
        },
        /**
         * Return the object opacity counting also the group property
         * @return {Number}
         */
        getObjectOpacity: function() {
          var i = this.opacity;
          return this.group && (i *= this.group.getObjectOpacity()), i;
        },
        /**
         * @private
         * @param {String} key
         * @param {*} value
         * @return {fabric.Object} thisArg
         */
        _set: function(i, l) {
          var u = i === "scaleX" || i === "scaleY", d = this[i] !== l, g = !1;
          return u && (l = this._constrainScale(l)), i === "scaleX" && l < 0 ? (this.flipX = !this.flipX, l *= -1) : i === "scaleY" && l < 0 ? (this.flipY = !this.flipY, l *= -1) : i === "shadow" && l && !(l instanceof n.Shadow) ? l = new n.Shadow(l) : i === "dirty" && this.group && this.group.set("dirty", l), this[i] = l, d && (g = this.group && this.group.isOnACache(), this.cacheProperties.indexOf(i) > -1 ? (this.dirty = !0, g && this.group.set("dirty", !0)) : g && this.stateProperties.indexOf(i) > -1 && this.group.set("dirty", !0)), this;
        },
        /**
         * This callback function is called by the parent group of an object every
         * time a non-delegated property changes on the group. It is passed the key
         * and value as parameters. Not adding in this function's signature to avoid
         * Travis build error about unused variables.
         */
        setOnGroup: function() {
        },
        /**
         * Retrieves viewportTransform from Object's canvas if possible
         * @method getViewportTransform
         * @memberOf fabric.Object.prototype
         * @return {Array}
         */
        getViewportTransform: function() {
          return this.canvas && this.canvas.viewportTransform ? this.canvas.viewportTransform : n.iMatrix.concat();
        },
        /*
         * @private
         * return if the object would be visible in rendering
         * @memberOf fabric.Object.prototype
         * @return {Boolean}
         */
        isNotVisible: function() {
          return this.opacity === 0 || !this.width && !this.height && this.strokeWidth === 0 || !this.visible;
        },
        /**
         * Renders an object on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        render: function(i) {
          this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (i.save(), this._setupCompositeOperation(i), this.drawSelectionBackground(i), this.transform(i), this._setOpacity(i), this._setShadow(i, this), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(i)) : (this._removeCacheCanvas(), this.dirty = !1, this.drawObject(i), this.objectCaching && this.statefullCache && this.saveState({ propertySet: "cacheProperties" })), i.restore());
        },
        renderCache: function(i) {
          i = i || {}, (!this._cacheCanvas || !this._cacheContext) && this._createCacheCanvas(), this.isCacheDirty() && (this.statefullCache && this.saveState({ propertySet: "cacheProperties" }), this.drawObject(this._cacheContext, i.forClipping), this.dirty = !1);
        },
        /**
         * Remove cacheCanvas and its dimensions from the objects
         */
        _removeCacheCanvas: function() {
          this._cacheCanvas = null, this._cacheContext = null, this.cacheWidth = 0, this.cacheHeight = 0;
        },
        /**
         * return true if the object will draw a stroke
         * Does not consider text styles. This is just a shortcut used at rendering time
         * We want it to be an approximation and be fast.
         * wrote to avoid extra caching, it has to return true when stroke happens,
         * can guess when it will not happen at 100% chance, does not matter if it misses
         * some use case where the stroke is invisible.
         * @since 3.0.0
         * @returns Boolean
         */
        hasStroke: function() {
          return this.stroke && this.stroke !== "transparent" && this.strokeWidth !== 0;
        },
        /**
         * return true if the object will draw a fill
         * Does not consider text styles. This is just a shortcut used at rendering time
         * We want it to be an approximation and be fast.
         * wrote to avoid extra caching, it has to return true when fill happens,
         * can guess when it will not happen at 100% chance, does not matter if it misses
         * some use case where the fill is invisible.
         * @since 3.0.0
         * @returns Boolean
         */
        hasFill: function() {
          return this.fill && this.fill !== "transparent";
        },
        /**
         * When set to `true`, force the object to have its own cache, even if it is inside a group
         * it may be needed when your object behave in a particular way on the cache and always needs
         * its own isolated canvas to render correctly.
         * Created to be overridden
         * since 1.7.12
         * @returns Boolean
         */
        needsItsOwnCache: function() {
          return !!(this.paintFirst === "stroke" && this.hasFill() && this.hasStroke() && typeof this.shadow == "object" || this.clipPath);
        },
        /**
         * Decide if the object should cache or not. Create its own cache level
         * objectCaching is a global flag, wins over everything
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group outside is cached.
         * Read as: cache if is needed, or if the feature is enabled but we are not already caching.
         * @return {Boolean}
         */
        shouldCache: function() {
          return this.ownCaching = this.needsItsOwnCache() || this.objectCaching && (!this.group || !this.group.isOnACache()), this.ownCaching;
        },
        /**
         * Check if this object or a child object will cast a shadow
         * used by Group.shouldCache to know if child has a shadow recursively
         * @return {Boolean}
         */
        willDrawShadow: function() {
          return !!this.shadow && (this.shadow.offsetX !== 0 || this.shadow.offsetY !== 0);
        },
        /**
         * Execute the drawing operation for an object clipPath
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {fabric.Object} clipPath
         */
        drawClipPathOnCache: function(i, l) {
          if (i.save(), l.inverted ? i.globalCompositeOperation = "destination-out" : i.globalCompositeOperation = "destination-in", l.absolutePositioned) {
            var u = n.util.invertTransform(this.calcTransformMatrix());
            i.transform(u[0], u[1], u[2], u[3], u[4], u[5]);
          }
          l.transform(i), i.scale(1 / l.zoomX, 1 / l.zoomY), i.drawImage(l._cacheCanvas, -l.cacheTranslationX, -l.cacheTranslationY), i.restore();
        },
        /**
         * Execute the drawing operation for an object on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawObject: function(i, l) {
          var u = this.fill, d = this.stroke;
          l ? (this.fill = "black", this.stroke = "", this._setClippingProperties(i)) : this._renderBackground(i), this._render(i), this._drawClipPath(i, this.clipPath), this.fill = u, this.stroke = d;
        },
        /**
         * Prepare clipPath state and cache and draw it on instance's cache
         * @param {CanvasRenderingContext2D} ctx
         * @param {fabric.Object} clipPath
         */
        _drawClipPath: function(i, l) {
          l && (l.canvas = this.canvas, l.shouldCache(), l._transformDone = !0, l.renderCache({ forClipping: !0 }), this.drawClipPathOnCache(i, l));
        },
        /**
         * Paint the cached copy of the object on the target context.
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawCacheOnCanvas: function(i) {
          i.scale(1 / this.zoomX, 1 / this.zoomY), i.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
        },
        /**
         * Check if cache is dirty
         * @param {Boolean} skipCanvas skip canvas checks because this object is painted
         * on parent canvas.
         */
        isCacheDirty: function(i) {
          if (this.isNotVisible())
            return !1;
          if (this._cacheCanvas && this._cacheContext && !i && this._updateCacheCanvas())
            return !0;
          if (this.dirty || this.clipPath && this.clipPath.absolutePositioned || this.statefullCache && this.hasStateChanged("cacheProperties")) {
            if (this._cacheCanvas && this._cacheContext && !i) {
              var l = this.cacheWidth / this.zoomX, u = this.cacheHeight / this.zoomY;
              this._cacheContext.clearRect(-l / 2, -u / 2, l, u);
            }
            return !0;
          }
          return !1;
        },
        /**
         * Draws a background for the object big as its untransformed dimensions
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderBackground: function(i) {
          if (this.backgroundColor) {
            var l = this._getNonTransformedDimensions();
            i.fillStyle = this.backgroundColor, i.fillRect(
              -l.x / 2,
              -l.y / 2,
              l.x,
              l.y
            ), this._removeShadow(i);
          }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _setOpacity: function(i) {
          this.group && !this.group._transformDone ? i.globalAlpha = this.getObjectOpacity() : i.globalAlpha *= this.opacity;
        },
        _setStrokeStyles: function(i, l) {
          var u = l.stroke;
          u && (i.lineWidth = l.strokeWidth, i.lineCap = l.strokeLineCap, i.lineDashOffset = l.strokeDashOffset, i.lineJoin = l.strokeLineJoin, i.miterLimit = l.strokeMiterLimit, u.toLive ? u.gradientUnits === "percentage" || u.gradientTransform || u.patternTransform ? this._applyPatternForTransformedGradient(i, u) : (i.strokeStyle = u.toLive(i, this), this._applyPatternGradientTransform(i, u)) : i.strokeStyle = l.stroke);
        },
        _setFillStyles: function(i, l) {
          var u = l.fill;
          u && (u.toLive ? (i.fillStyle = u.toLive(i, this), this._applyPatternGradientTransform(i, l.fill)) : i.fillStyle = u);
        },
        _setClippingProperties: function(i) {
          i.globalAlpha = 1, i.strokeStyle = "transparent", i.fillStyle = "#000000";
        },
        /**
         * @private
         * Sets line dash
         * @param {CanvasRenderingContext2D} ctx Context to set the dash line on
         * @param {Array} dashArray array representing dashes
         */
        _setLineDash: function(i, l) {
          !l || l.length === 0 || (1 & l.length && l.push.apply(l, l), i.setLineDash(l));
        },
        /**
         * Renders controls and borders for the object
         * the context here is not transformed
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} [styleOverride] properties to override the object style
         */
        _renderControls: function(i, l) {
          var u = this.getViewportTransform(), d = this.calcTransformMatrix(), g, v, m;
          l = l || {}, v = typeof l.hasBorders < "u" ? l.hasBorders : this.hasBorders, m = typeof l.hasControls < "u" ? l.hasControls : this.hasControls, d = n.util.multiplyTransformMatrices(u, d), g = n.util.qrDecompose(d), i.save(), i.translate(g.translateX, g.translateY), i.lineWidth = 1 * this.borderScaleFactor, this.group || (i.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.flipX && (g.angle -= 180), i.rotate(e(this.group ? g.angle : this.angle)), l.forActiveSelection || this.group ? v && this.drawBordersInGroup(i, g, l) : v && this.drawBorders(i, l), m && this.drawControls(i, l), i.restore();
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _setShadow: function(i) {
          if (this.shadow) {
            var l = this.shadow, u = this.canvas, d, g = u && u.viewportTransform[0] || 1, v = u && u.viewportTransform[3] || 1;
            l.nonScaling ? d = { scaleX: 1, scaleY: 1 } : d = this.getObjectScaling(), u && u._isRetinaScaling() && (g *= n.devicePixelRatio, v *= n.devicePixelRatio), i.shadowColor = l.color, i.shadowBlur = l.blur * n.browserShadowBlurConstant * (g + v) * (d.scaleX + d.scaleY) / 4, i.shadowOffsetX = l.offsetX * g * d.scaleX, i.shadowOffsetY = l.offsetY * v * d.scaleY;
          }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _removeShadow: function(i) {
          this.shadow && (i.shadowColor = "", i.shadowBlur = i.shadowOffsetX = i.shadowOffsetY = 0);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} filler fabric.Pattern or fabric.Gradient
         * @return {Object} offset.offsetX offset for text rendering
         * @return {Object} offset.offsetY offset for text rendering
         */
        _applyPatternGradientTransform: function(i, l) {
          if (!l || !l.toLive)
            return { offsetX: 0, offsetY: 0 };
          var u = l.gradientTransform || l.patternTransform, d = -this.width / 2 + l.offsetX || 0, g = -this.height / 2 + l.offsetY || 0;
          return l.gradientUnits === "percentage" ? i.transform(this.width, 0, 0, this.height, d, g) : i.transform(1, 0, 0, 1, d, g), u && i.transform(u[0], u[1], u[2], u[3], u[4], u[5]), { offsetX: d, offsetY: g };
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderPaintInOrder: function(i) {
          this.paintFirst === "stroke" ? (this._renderStroke(i), this._renderFill(i)) : (this._renderFill(i), this._renderStroke(i));
        },
        /**
         * @private
         * function that actually render something on the context.
         * empty here to allow Obects to work on tests to benchmark fabric functionalites
         * not related to rendering
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function() {
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderFill: function(i) {
          this.fill && (i.save(), this._setFillStyles(i, this), this.fillRule === "evenodd" ? i.fill("evenodd") : i.fill(), i.restore());
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderStroke: function(i) {
          if (!(!this.stroke || this.strokeWidth === 0)) {
            if (this.shadow && !this.shadow.affectStroke && this._removeShadow(i), i.save(), this.strokeUniform && this.group) {
              var l = this.getObjectScaling();
              i.scale(1 / l.scaleX, 1 / l.scaleY);
            } else
              this.strokeUniform && i.scale(1 / this.scaleX, 1 / this.scaleY);
            this._setLineDash(i, this.strokeDashArray), this._setStrokeStyles(i, this), i.stroke(), i.restore();
          }
        },
        /**
         * This function try to patch the missing gradientTransform on canvas gradients.
         * transforming a context to transform the gradient, is going to transform the stroke too.
         * we want to transform the gradient but not the stroke operation, so we create
         * a transformed gradient on a pattern and then we use the pattern instead of the gradient.
         * this method has drwabacks: is slow, is in low resolution, needs a patch for when the size
         * is limited.
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {fabric.Gradient} filler a fabric gradient instance
         */
        _applyPatternForTransformedGradient: function(i, l) {
          var u = this._limitCacheSize(this._getCacheCanvasDimensions()), d = n.util.createCanvasElement(), g, v = this.canvas.getRetinaScaling(), m = u.x / this.scaleX / v, C = u.y / this.scaleY / v;
          d.width = m, d.height = C, g = d.getContext("2d"), g.beginPath(), g.moveTo(0, 0), g.lineTo(m, 0), g.lineTo(m, C), g.lineTo(0, C), g.closePath(), g.translate(m / 2, C / 2), g.scale(
            u.zoomX / this.scaleX / v,
            u.zoomY / this.scaleY / v
          ), this._applyPatternGradientTransform(g, l), g.fillStyle = l.toLive(i), g.fill(), i.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), i.scale(
            v * this.scaleX / u.zoomX,
            v * this.scaleY / u.zoomY
          ), i.strokeStyle = g.createPattern(d, "no-repeat");
        },
        /**
         * This function is an helper for svg import. it returns the center of the object in the svg
         * untransformed coordinates
         * @private
         * @return {Object} center point from element coordinates
         */
        _findCenterFromElement: function() {
          return { x: this.left + this.width / 2, y: this.top + this.height / 2 };
        },
        /**
         * This function is an helper for svg import. it decompose the transformMatrix
         * and assign properties to object.
         * untransformed coordinates
         * @private
         * @chainable
         */
        _assignTransformMatrixProps: function() {
          if (this.transformMatrix) {
            var i = n.util.qrDecompose(this.transformMatrix);
            this.flipX = !1, this.flipY = !1, this.set("scaleX", i.scaleX), this.set("scaleY", i.scaleY), this.angle = i.angle, this.skewX = i.skewX, this.skewY = 0;
          }
        },
        /**
         * This function is an helper for svg import. it removes the transform matrix
         * and set to object properties that fabricjs can handle
         * @private
         * @param {Object} preserveAspectRatioOptions
         * @return {thisArg}
         */
        _removeTransformMatrix: function(i) {
          var l = this._findCenterFromElement();
          this.transformMatrix && (this._assignTransformMatrixProps(), l = n.util.transformPoint(l, this.transformMatrix)), this.transformMatrix = null, i && (this.scaleX *= i.scaleX, this.scaleY *= i.scaleY, this.cropX = i.cropX, this.cropY = i.cropY, l.x += i.offsetLeft, l.y += i.offsetTop, this.width = i.width, this.height = i.height), this.setPositionByOrigin(l, "center", "center");
        },
        /**
         * Clones an instance, using a callback method will work for every object.
         * @param {Function} callback Callback is invoked with a clone as a first argument
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         */
        clone: function(i, l) {
          var u = this.toObject(l);
          this.constructor.fromObject ? this.constructor.fromObject(u, i) : n.Object._fromObject("Object", u, i);
        },
        /**
         * Creates an instance of fabric.Image out of an object
         * makes use of toCanvasElement.
         * Once this method was based on toDataUrl and loadImage, so it also had a quality
         * and format option. toCanvasElement is faster and produce no loss of quality.
         * If you need to get a real Jpeg or Png from an object, using toDataURL is the right way to do it.
         * toCanvasElement and then toBlob from the obtained canvas is also a good option.
         * This method is sync now, but still support the callback because we did not want to break.
         * When fabricJS 5.0 will be planned, this will probably be changed to not have a callback.
         * @param {Function} callback callback, invoked with an instance as a first argument
         * @param {Object} [options] for clone as image, passed to toDataURL
         * @param {Number} [options.multiplier=1] Multiplier to scale by
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
         * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
         * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
         * @return {fabric.Object} thisArg
         */
        cloneAsImage: function(i, l) {
          var u = this.toCanvasElement(l);
          return i && i(new n.Image(u)), this;
        },
        /**
         * Converts an object into a HTMLCanvas element
         * @param {Object} options Options object
         * @param {Number} [options.multiplier=1] Multiplier to scale by
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
         * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
         * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
         * @return {HTMLCanvasElement} Returns DOM element <canvas> with the fabric.Object
         */
        toCanvasElement: function(i) {
          i || (i = {});
          var l = n.util, u = l.saveObjectTransform(this), d = this.group, g = this.shadow, v = Math.abs, m = (i.multiplier || 1) * (i.enableRetinaScaling ? n.devicePixelRatio : 1);
          delete this.group, i.withoutTransform && l.resetObjectTransform(this), i.withoutShadow && (this.shadow = null);
          var C = n.util.createCanvasElement(), p = this.getBoundingRect(!0, !0), x = this.shadow, A, k = { x: 0, y: 0 }, W, N, H;
          x && (W = x.blur, x.nonScaling ? A = { scaleX: 1, scaleY: 1 } : A = this.getObjectScaling(), k.x = 2 * Math.round(v(x.offsetX) + W) * v(A.scaleX), k.y = 2 * Math.round(v(x.offsetY) + W) * v(A.scaleY)), N = p.width + k.x, H = p.height + k.y, C.width = Math.ceil(N), C.height = Math.ceil(H);
          var z = new n.StaticCanvas(C, {
            enableRetinaScaling: !1,
            renderOnAddRemove: !1,
            skipOffscreen: !1
          });
          i.format === "jpeg" && (z.backgroundColor = "#fff"), this.setPositionByOrigin(new n.Point(z.width / 2, z.height / 2), "center", "center");
          var K = this.canvas;
          z.add(this);
          var $ = z.toCanvasElement(m || 1, i);
          return this.shadow = g, this.set("canvas", K), d && (this.group = d), this.set(u).setCoords(), z._objects = [], z.dispose(), z = null, $;
        },
        /**
         * Converts an object into a data-url-like string
         * @param {Object} options Options object
         * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
         * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
         * @param {Number} [options.multiplier=1] Multiplier to scale by
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
         * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
         * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
         * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
         */
        toDataURL: function(i) {
          return i || (i = {}), n.util.toDataURL(this.toCanvasElement(i), i.format || "png", i.quality || 1);
        },
        /**
         * Returns true if specified type is identical to the type of an instance
         * @param {String} type Type to check against
         * @return {Boolean}
         */
        isType: function(i) {
          return arguments.length > 1 ? Array.from(arguments).includes(this.type) : this.type === i;
        },
        /**
         * Returns complexity of an instance
         * @return {Number} complexity of this instance (is 1 unless subclassed)
         */
        complexity: function() {
          return 1;
        },
        /**
         * Returns a JSON representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} JSON
         */
        toJSON: function(i) {
          return this.toObject(i);
        },
        /**
         * Sets "angle" of an instance with centered rotation
         * @param {Number} angle Angle value (in degrees)
         * @return {fabric.Object} thisArg
         * @chainable
         */
        rotate: function(i) {
          var l = (this.originX !== "center" || this.originY !== "center") && this.centeredRotation;
          return l && this._setOriginToCenter(), this.set("angle", i), l && this._resetOrigin(), this;
        },
        /**
         * Centers object horizontally on canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        centerH: function() {
          return this.canvas && this.canvas.centerObjectH(this), this;
        },
        /**
         * Centers object horizontally on current viewport of canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        viewportCenterH: function() {
          return this.canvas && this.canvas.viewportCenterObjectH(this), this;
        },
        /**
         * Centers object vertically on canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        centerV: function() {
          return this.canvas && this.canvas.centerObjectV(this), this;
        },
        /**
         * Centers object vertically on current viewport of canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        viewportCenterV: function() {
          return this.canvas && this.canvas.viewportCenterObjectV(this), this;
        },
        /**
         * Centers object vertically and horizontally on canvas to which is was added last
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        center: function() {
          return this.canvas && this.canvas.centerObject(this), this;
        },
        /**
         * Centers object on current viewport of canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        viewportCenter: function() {
          return this.canvas && this.canvas.viewportCenterObject(this), this;
        },
        /**
         * Returns coordinates of a pointer relative to an object
         * @param {Event} e Event to operate upon
         * @param {Object} [pointer] Pointer to operate upon (instead of event)
         * @return {Object} Coordinates of a pointer (x, y)
         */
        getLocalPointer: function(i, l) {
          l = l || this.canvas.getPointer(i);
          var u = new n.Point(l.x, l.y), d = this._getLeftTopCoords();
          return this.angle && (u = n.util.rotatePoint(
            u,
            d,
            e(-this.angle)
          )), {
            x: u.x - d.x,
            y: u.y - d.y
          };
        },
        /**
         * Sets canvas globalCompositeOperation for specific object
         * custom composition operation for the particular object can be specified using globalCompositeOperation property
         * @param {CanvasRenderingContext2D} ctx Rendering canvas context
         */
        _setupCompositeOperation: function(i) {
          this.globalCompositeOperation && (i.globalCompositeOperation = this.globalCompositeOperation);
        },
        /**
         * cancel instance's running animations
         * override if necessary to dispose artifacts such as `clipPath`
         */
        dispose: function() {
          n.runningAnimations && n.runningAnimations.cancelByTarget(this);
        }
      }
    ), n.util.createAccessors && n.util.createAccessors(n.Object), h(n.Object.prototype, n.Observable), n.Object.NUM_FRACTION_DIGITS = 2, n.Object.ENLIVEN_PROPS = ["clipPath"], n.Object._fromObject = function(i, l, u, d) {
      var g = n[i];
      l = a(l, !0), n.util.enlivenPatterns([l.fill, l.stroke], function(v) {
        typeof v[0] < "u" && (l.fill = v[0]), typeof v[1] < "u" && (l.stroke = v[1]), n.util.enlivenObjectEnlivables(l, l, function() {
          var m = d ? new g(l[d], l) : new g(l);
          u && u(m);
        });
      });
    }, n.Object.__uid = 0);
  }(tt), function() {
    var c = f.util.degreesToRadians, n = {
      left: -0.5,
      center: 0,
      right: 0.5
    }, h = {
      top: -0.5,
      center: 0,
      bottom: 0.5
    };
    f.util.object.extend(
      f.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Translates the coordinates from a set of origin to another (based on the object's dimensions)
         * @param {fabric.Point} point The point which corresponds to the originX and originY params
         * @param {String} fromOriginX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} fromOriginY Vertical origin: 'top', 'center' or 'bottom'
         * @param {String} toOriginX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} toOriginY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        translateToGivenOrigin: function(a, t, r, e, s) {
          var o = a.x, i = a.y, l, u, d;
          return typeof t == "string" ? t = n[t] : t -= 0.5, typeof e == "string" ? e = n[e] : e -= 0.5, l = e - t, typeof r == "string" ? r = h[r] : r -= 0.5, typeof s == "string" ? s = h[s] : s -= 0.5, u = s - r, (l || u) && (d = this._getTransformedDimensions(), o = a.x + l * d.x, i = a.y + u * d.y), new f.Point(o, i);
        },
        /**
         * Translates the coordinates from origin to center coordinates (based on the object's dimensions)
         * @param {fabric.Point} point The point which corresponds to the originX and originY params
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        translateToCenterPoint: function(a, t, r) {
          var e = this.translateToGivenOrigin(a, t, r, "center", "center");
          return this.angle ? f.util.rotatePoint(e, a, c(this.angle)) : e;
        },
        /**
         * Translates the coordinates from center to origin coordinates (based on the object's dimensions)
         * @param {fabric.Point} center The point which corresponds to center of the object
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        translateToOriginPoint: function(a, t, r) {
          var e = this.translateToGivenOrigin(a, "center", "center", t, r);
          return this.angle ? f.util.rotatePoint(e, a, c(this.angle)) : e;
        },
        /**
         * Returns the real center coordinates of the object
         * @return {fabric.Point}
         */
        getCenterPoint: function() {
          var a = new f.Point(this.left, this.top);
          return this.translateToCenterPoint(a, this.originX, this.originY);
        },
        /**
         * Returns the coordinates of the object based on center coordinates
         * @param {fabric.Point} point The point which corresponds to the originX and originY params
         * @return {fabric.Point}
         */
        // getOriginPoint: function(center) {
        //   return this.translateToOriginPoint(center, this.originX, this.originY);
        // },
        /**
         * Returns the coordinates of the object as if it has a different origin
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        getPointByOrigin: function(a, t) {
          var r = this.getCenterPoint();
          return this.translateToOriginPoint(r, a, t);
        },
        /**
         * Returns the point in local coordinates
         * @param {fabric.Point} point The point relative to the global coordinate system
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        toLocalPoint: function(a, t, r) {
          var e = this.getCenterPoint(), s, o;
          return typeof t < "u" && typeof r < "u" ? s = this.translateToGivenOrigin(e, "center", "center", t, r) : s = new f.Point(this.left, this.top), o = new f.Point(a.x, a.y), this.angle && (o = f.util.rotatePoint(o, e, -c(this.angle))), o.subtractEquals(s);
        },
        /**
         * Returns the point in global coordinates
         * @param {fabric.Point} The point relative to the local coordinate system
         * @return {fabric.Point}
         */
        // toGlobalPoint: function(point) {
        //   return fabric.util.rotatePoint(point, this.getCenterPoint(), degreesToRadians(this.angle)).addEquals(new fabric.Point(this.left, this.top));
        // },
        /**
         * Sets the position of the object taking into consideration the object's origin
         * @param {fabric.Point} pos The new position of the object
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {void}
         */
        setPositionByOrigin: function(a, t, r) {
          var e = this.translateToCenterPoint(a, t, r), s = this.translateToOriginPoint(e, this.originX, this.originY);
          this.set("left", s.x), this.set("top", s.y);
        },
        /**
         * @param {String} to One of 'left', 'center', 'right'
         */
        adjustPosition: function(a) {
          var t = c(this.angle), r = this.getScaledWidth(), e = f.util.cos(t) * r, s = f.util.sin(t) * r, o, i;
          typeof this.originX == "string" ? o = n[this.originX] : o = this.originX - 0.5, typeof a == "string" ? i = n[a] : i = a - 0.5, this.left += e * (i - o), this.top += s * (i - o), this.setCoords(), this.originX = a;
        },
        /**
         * Sets the origin/position of the object to it's center point
         * @private
         * @return {void}
         */
        _setOriginToCenter: function() {
          this._originalOriginX = this.originX, this._originalOriginY = this.originY;
          var a = this.getCenterPoint();
          this.originX = "center", this.originY = "center", this.left = a.x, this.top = a.y;
        },
        /**
         * Resets the origin/position of the object to it's original origin
         * @private
         * @return {void}
         */
        _resetOrigin: function() {
          var a = this.translateToOriginPoint(
            this.getCenterPoint(),
            this._originalOriginX,
            this._originalOriginY
          );
          this.originX = this._originalOriginX, this.originY = this._originalOriginY, this.left = a.x, this.top = a.y, this._originalOriginX = null, this._originalOriginY = null;
        },
        /**
         * @private
         */
        _getLeftTopCoords: function() {
          return this.translateToOriginPoint(this.getCenterPoint(), "left", "top");
        }
      }
    );
  }(), function() {
    function c(r) {
      return [
        new f.Point(r.tl.x, r.tl.y),
        new f.Point(r.tr.x, r.tr.y),
        new f.Point(r.br.x, r.br.y),
        new f.Point(r.bl.x, r.bl.y)
      ];
    }
    var n = f.util, h = n.degreesToRadians, a = n.multiplyTransformMatrices, t = n.transformPoint;
    n.object.extend(
      f.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Describe object's corner position in canvas element coordinates.
         * properties are depending on control keys and padding the main controls.
         * each property is an object with x, y and corner.
         * The `corner` property contains in a similar manner the 4 points of the
         * interactive area of the corner.
         * The coordinates depends from the controls positionHandler and are used
         * to draw and locate controls
         * @memberOf fabric.Object.prototype
         */
        oCoords: null,
        /**
         * Describe object's corner position in canvas object absolute coordinates
         * properties are tl,tr,bl,br and describe the four main corner.
         * each property is an object with x, y, instance of Fabric.Point.
         * The coordinates depends from this properties: width, height, scaleX, scaleY
         * skewX, skewY, angle, strokeWidth, top, left.
         * Those coordinates are useful to understand where an object is. They get updated
         * with oCoords but they do not need to be updated when zoom or panning change.
         * The coordinates get updated with @method setCoords.
         * You can calculate them without updating with @method calcACoords();
         * @memberOf fabric.Object.prototype
         */
        aCoords: null,
        /**
         * Describe object's corner position in canvas element coordinates.
         * includes padding. Used of object detection.
         * set and refreshed with setCoords.
         * @memberOf fabric.Object.prototype
         */
        lineCoords: null,
        /**
         * storage for object transform matrix
         */
        ownMatrixCache: null,
        /**
         * storage for object full transform matrix
         */
        matrixCache: null,
        /**
         * custom controls interface
         * controls are added by default_controls.js
         */
        controls: {},
        /**
         * return correct set of coordinates for intersection
         * this will return either aCoords or lineCoords.
         * @param {Boolean} absolute will return aCoords if true or lineCoords
         * @return {Object} {tl, tr, br, bl} points
         */
        _getCoords: function(r, e) {
          return e ? r ? this.calcACoords() : this.calcLineCoords() : ((!this.aCoords || !this.lineCoords) && this.setCoords(!0), r ? this.aCoords : this.lineCoords);
        },
        /**
         * return correct set of coordinates for intersection
         * this will return either aCoords or lineCoords.
         * The coords are returned in an array.
         * @return {Array} [tl, tr, br, bl] of points
         */
        getCoords: function(r, e) {
          return c(this._getCoords(r, e));
        },
        /**
         * Checks if object intersects with an area formed by 2 points
         * @param {Object} pointTL top-left point of area
         * @param {Object} pointBR bottom-right point of area
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object intersects with an area formed by 2 points
         */
        intersectsWithRect: function(r, e, s, o) {
          var i = this.getCoords(s, o), l = f.Intersection.intersectPolygonRectangle(
            i,
            r,
            e
          );
          return l.status === "Intersection";
        },
        /**
         * Checks if object intersects with another object
         * @param {Object} other Object to test
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object intersects with another object
         */
        intersectsWithObject: function(r, e, s) {
          var o = f.Intersection.intersectPolygonPolygon(
            this.getCoords(e, s),
            r.getCoords(e, s)
          );
          return o.status === "Intersection" || r.isContainedWithinObject(this, e, s) || this.isContainedWithinObject(r, e, s);
        },
        /**
         * Checks if object is fully contained within area of another object
         * @param {Object} other Object to test
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object is fully contained within area of another object
         */
        isContainedWithinObject: function(r, e, s) {
          for (var o = this.getCoords(e, s), i = e ? r.aCoords : r.lineCoords, l = 0, u = r._getImageLines(i); l < 4; l++)
            if (!r.containsPoint(o[l], u))
              return !1;
          return !0;
        },
        /**
         * Checks if object is fully contained within area formed by 2 points
         * @param {Object} pointTL top-left point of area
         * @param {Object} pointBR bottom-right point of area
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object is fully contained within area formed by 2 points
         */
        isContainedWithinRect: function(r, e, s, o) {
          var i = this.getBoundingRect(s, o);
          return i.left >= r.x && i.left + i.width <= e.x && i.top >= r.y && i.top + i.height <= e.y;
        },
        /**
         * Checks if point is inside the object
         * @param {fabric.Point} point Point to check against
         * @param {Object} [lines] object returned from @method _getImageLines
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if point is inside the object
         */
        containsPoint: function(r, l, s, o) {
          var i = this._getCoords(s, o), l = l || this._getImageLines(i), u = this._findCrossPoints(r, l);
          return u !== 0 && u % 2 === 1;
        },
        /**
         * Checks if object is contained within the canvas with current viewportTransform
         * the check is done stopping at first point that appears on screen
         * @param {Boolean} [calculate] use coordinates of current position instead of .aCoords
         * @return {Boolean} true if object is fully or partially contained within canvas
         */
        isOnScreen: function(r) {
          if (!this.canvas)
            return !1;
          var e = this.canvas.vptCoords.tl, s = this.canvas.vptCoords.br, o = this.getCoords(!0, r);
          return o.some(function(i) {
            return i.x <= s.x && i.x >= e.x && i.y <= s.y && i.y >= e.y;
          }) || this.intersectsWithRect(e, s, !0, r) ? !0 : this._containsCenterOfCanvas(e, s, r);
        },
        /**
         * Checks if the object contains the midpoint between canvas extremities
         * Does not make sense outside the context of isOnScreen and isPartiallyOnScreen
         * @private
         * @param {Fabric.Point} pointTL Top Left point
         * @param {Fabric.Point} pointBR Top Right point
         * @param {Boolean} calculate use coordinates of current position instead of .oCoords
         * @return {Boolean} true if the object contains the point
         */
        _containsCenterOfCanvas: function(r, e, s) {
          var o = { x: (r.x + e.x) / 2, y: (r.y + e.y) / 2 };
          return !!this.containsPoint(o, null, !0, s);
        },
        /**
         * Checks if object is partially contained within the canvas with current viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object is partially contained within canvas
         */
        isPartiallyOnScreen: function(r) {
          if (!this.canvas)
            return !1;
          var e = this.canvas.vptCoords.tl, s = this.canvas.vptCoords.br;
          if (this.intersectsWithRect(e, s, !0, r))
            return !0;
          var o = this.getCoords(!0, r).every(function(i) {
            return (i.x >= s.x || i.x <= e.x) && (i.y >= s.y || i.y <= e.y);
          });
          return o && this._containsCenterOfCanvas(e, s, r);
        },
        /**
         * Method that returns an object with the object edges in it, given the coordinates of the corners
         * @private
         * @param {Object} oCoords Coordinates of the object corners
         */
        _getImageLines: function(r) {
          var e = {
            topline: {
              o: r.tl,
              d: r.tr
            },
            rightline: {
              o: r.tr,
              d: r.br
            },
            bottomline: {
              o: r.br,
              d: r.bl
            },
            leftline: {
              o: r.bl,
              d: r.tl
            }
          };
          return e;
        },
        /**
         * Helper method to determine how many cross points are between the 4 object edges
         * and the horizontal line determined by a point on canvas
         * @private
         * @param {fabric.Point} point Point to check
         * @param {Object} lines Coordinates of the object being evaluated
         */
        // remove yi, not used but left code here just in case.
        _findCrossPoints: function(r, e) {
          var s, o, i, l, u, d = 0, g;
          for (var v in e)
            if (g = e[v], !(g.o.y < r.y && g.d.y < r.y) && !(g.o.y >= r.y && g.d.y >= r.y) && (g.o.x === g.d.x && g.o.x >= r.x ? u = g.o.x : (s = 0, o = (g.d.y - g.o.y) / (g.d.x - g.o.x), i = r.y - s * r.x, l = g.o.y - o * g.o.x, u = -(i - l) / (s - o)), u >= r.x && (d += 1), d === 2))
              break;
          return d;
        },
        /**
         * Returns coordinates of object's bounding rectangle (left, top, width, height)
         * the box is intended as aligned to axis of canvas.
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords / .aCoords
         * @return {Object} Object with left, top, width, height properties
         */
        getBoundingRect: function(r, e) {
          var s = this.getCoords(r, e);
          return n.makeBoundingBoxFromPoints(s);
        },
        /**
         * Returns width of an object's bounding box counting transformations
         * before 2.0 it was named getWidth();
         * @return {Number} width value
         */
        getScaledWidth: function() {
          return this._getTransformedDimensions().x;
        },
        /**
         * Returns height of an object bounding box counting transformations
         * before 2.0 it was named getHeight();
         * @return {Number} height value
         */
        getScaledHeight: function() {
          return this._getTransformedDimensions().y;
        },
        /**
         * Makes sure the scale is valid and modifies it if necessary
         * @private
         * @param {Number} value
         * @return {Number}
         */
        _constrainScale: function(r) {
          return Math.abs(r) < this.minScaleLimit ? r < 0 ? -this.minScaleLimit : this.minScaleLimit : r === 0 ? 1e-4 : r;
        },
        /**
         * Scales an object (equally by x and y)
         * @param {Number} value Scale factor
         * @return {fabric.Object} thisArg
         * @chainable
         */
        scale: function(r) {
          return this._set("scaleX", r), this._set("scaleY", r), this.setCoords();
        },
        /**
         * Scales an object to a given width, with respect to bounding box (scaling by x/y equally)
         * @param {Number} value New width value
         * @param {Boolean} absolute ignore viewport
         * @return {fabric.Object} thisArg
         * @chainable
         */
        scaleToWidth: function(r, e) {
          var s = this.getBoundingRect(e).width / this.getScaledWidth();
          return this.scale(r / this.width / s);
        },
        /**
         * Scales an object to a given height, with respect to bounding box (scaling by x/y equally)
         * @param {Number} value New height value
         * @param {Boolean} absolute ignore viewport
         * @return {fabric.Object} thisArg
         * @chainable
         */
        scaleToHeight: function(r, e) {
          var s = this.getBoundingRect(e).height / this.getScaledHeight();
          return this.scale(r / this.height / s);
        },
        calcLineCoords: function() {
          var r = this.getViewportTransform(), e = this.padding, s = h(this.angle), o = n.cos(s), i = n.sin(s), l = o * e, u = i * e, d = l + u, g = l - u, v = this.calcACoords(), m = {
            tl: t(v.tl, r),
            tr: t(v.tr, r),
            bl: t(v.bl, r),
            br: t(v.br, r)
          };
          return e && (m.tl.x -= g, m.tl.y -= d, m.tr.x += d, m.tr.y -= g, m.bl.x -= d, m.bl.y += g, m.br.x += g, m.br.y += d), m;
        },
        calcOCoords: function() {
          var r = this._calcRotateMatrix(), e = this._calcTranslateMatrix(), s = this.getViewportTransform(), o = a(s, e), i = a(o, r), i = a(i, [1 / s[0], 0, 0, 1 / s[3], 0, 0]), l = this._calculateCurrentDimensions(), u = {};
          return this.forEachControl(function(d, g, v) {
            u[g] = d.positionHandler(l, i, v);
          }), u;
        },
        calcACoords: function() {
          var r = this._calcRotateMatrix(), e = this._calcTranslateMatrix(), s = a(e, r), o = this._getTransformedDimensions(), i = o.x / 2, l = o.y / 2;
          return {
            // corners
            tl: t({ x: -i, y: -l }, s),
            tr: t({ x: i, y: -l }, s),
            bl: t({ x: -i, y: l }, s),
            br: t({ x: i, y: l }, s)
          };
        },
        /**
         * Sets corner and controls position coordinates based on current angle, width and height, left and top.
         * oCoords are used to find the corners
         * aCoords are used to quickly find an object on the canvas
         * lineCoords are used to quickly find object during pointer events.
         * See {@link https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords} and {@link http://fabricjs.com/fabric-gotchas}
         *
         * @param {Boolean} [skipCorners] skip calculation of oCoords.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        setCoords: function(r) {
          return this.aCoords = this.calcACoords(), this.lineCoords = this.group ? this.aCoords : this.calcLineCoords(), r ? this : (this.oCoords = this.calcOCoords(), this._setCornerCoords && this._setCornerCoords(), this);
        },
        /**
         * calculate rotation matrix of an object
         * @return {Array} rotation matrix for the object
         */
        _calcRotateMatrix: function() {
          return n.calcRotateMatrix(this);
        },
        /**
         * calculate the translation matrix for an object transform
         * @return {Array} rotation matrix for the object
         */
        _calcTranslateMatrix: function() {
          var r = this.getCenterPoint();
          return [1, 0, 0, 1, r.x, r.y];
        },
        transformMatrixKey: function(r) {
          var e = "_", s = "";
          return !r && this.group && (s = this.group.transformMatrixKey(r) + e), s + this.top + e + this.left + e + this.scaleX + e + this.scaleY + e + this.skewX + e + this.skewY + e + this.angle + e + this.originX + e + this.originY + e + this.width + e + this.height + e + this.strokeWidth + this.flipX + this.flipY;
        },
        /**
         * calculate transform matrix that represents the current transformations from the
         * object's properties.
         * @param {Boolean} [skipGroup] return transform matrix for object not counting parent transformations
         * There are some situation in which this is useful to avoid the fake rotation.
         * @return {Array} transform matrix for the object
         */
        calcTransformMatrix: function(r) {
          var e = this.calcOwnMatrix();
          if (r || !this.group)
            return e;
          var s = this.transformMatrixKey(r), o = this.matrixCache || (this.matrixCache = {});
          return o.key === s ? o.value : (this.group && (e = a(this.group.calcTransformMatrix(!1), e)), o.key = s, o.value = e, e);
        },
        /**
         * calculate transform matrix that represents the current transformations from the
         * object's properties, this matrix does not include the group transformation
         * @return {Array} transform matrix for the object
         */
        calcOwnMatrix: function() {
          var r = this.transformMatrixKey(!0), e = this.ownMatrixCache || (this.ownMatrixCache = {});
          if (e.key === r)
            return e.value;
          var s = this._calcTranslateMatrix(), o = {
            angle: this.angle,
            translateX: s[4],
            translateY: s[5],
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            skewX: this.skewX,
            skewY: this.skewY,
            flipX: this.flipX,
            flipY: this.flipY
          };
          return e.key = r, e.value = n.composeMatrix(o), e.value;
        },
        /*
         * Calculate object dimensions from its properties
         * @private
         * @return {Object} .x width dimension
         * @return {Object} .y height dimension
         */
        _getNonTransformedDimensions: function() {
          var r = this.strokeWidth, e = this.width + r, s = this.height + r;
          return { x: e, y: s };
        },
        /*
         * Calculate object bounding box dimensions from its properties scale, skew.
         * @param {Number} skewX, a value to override current skewX
         * @param {Number} skewY, a value to override current skewY
         * @private
         * @return {Object} .x width dimension
         * @return {Object} .y height dimension
         */
        _getTransformedDimensions: function(r, e) {
          typeof r > "u" && (r = this.skewX), typeof e > "u" && (e = this.skewY);
          var s, o, i, l = r === 0 && e === 0;
          if (this.strokeUniform ? (o = this.width, i = this.height) : (s = this._getNonTransformedDimensions(), o = s.x, i = s.y), l)
            return this._finalizeDimensions(o * this.scaleX, i * this.scaleY);
          var u = n.sizeAfterTransform(o, i, {
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            skewX: r,
            skewY: e
          });
          return this._finalizeDimensions(u.x, u.y);
        },
        /*
         * Calculate object bounding box dimensions from its properties scale, skew.
         * @param Number width width of the bbox
         * @param Number height height of the bbox
         * @private
         * @return {Object} .x finalized width dimension
         * @return {Object} .y finalized height dimension
         */
        _finalizeDimensions: function(r, e) {
          return this.strokeUniform ? { x: r + this.strokeWidth, y: e + this.strokeWidth } : { x: r, y: e };
        },
        /*
         * Calculate object dimensions for controls box, including padding and canvas zoom.
         * and active selection
         * private
         */
        _calculateCurrentDimensions: function() {
          var r = this.getViewportTransform(), e = this._getTransformedDimensions(), s = t(e, r, !0);
          return s.scalarAdd(2 * this.padding);
        }
      }
    );
  }(), f.util.object.extend(
    f.Object.prototype,
    /** @lends fabric.Object.prototype */
    {
      /**
       * Moves an object to the bottom of the stack of drawn objects
       * @return {fabric.Object} thisArg
       * @chainable
       */
      sendToBack: function() {
        return this.group ? f.StaticCanvas.prototype.sendToBack.call(this.group, this) : this.canvas && this.canvas.sendToBack(this), this;
      },
      /**
       * Moves an object to the top of the stack of drawn objects
       * @return {fabric.Object} thisArg
       * @chainable
       */
      bringToFront: function() {
        return this.group ? f.StaticCanvas.prototype.bringToFront.call(this.group, this) : this.canvas && this.canvas.bringToFront(this), this;
      },
      /**
       * Moves an object down in stack of drawn objects
       * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
       * @return {fabric.Object} thisArg
       * @chainable
       */
      sendBackwards: function(c) {
        return this.group ? f.StaticCanvas.prototype.sendBackwards.call(this.group, this, c) : this.canvas && this.canvas.sendBackwards(this, c), this;
      },
      /**
       * Moves an object up in stack of drawn objects
       * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
       * @return {fabric.Object} thisArg
       * @chainable
       */
      bringForward: function(c) {
        return this.group ? f.StaticCanvas.prototype.bringForward.call(this.group, this, c) : this.canvas && this.canvas.bringForward(this, c), this;
      },
      /**
       * Moves an object to specified level in stack of drawn objects
       * @param {Number} index New position of object
       * @return {fabric.Object} thisArg
       * @chainable
       */
      moveTo: function(c) {
        return this.group && this.group.type !== "activeSelection" ? f.StaticCanvas.prototype.moveTo.call(this.group, this, c) : this.canvas && this.canvas.moveTo(this, c), this;
      }
    }
  ), function() {
    function c(h, a) {
      if (a) {
        if (a.toLive)
          return h + ": url(#SVGID_" + a.id + "); ";
        var t = new f.Color(a), r = h + ": " + t.toRgb() + "; ", e = t.getAlpha();
        return e !== 1 && (r += h + "-opacity: " + e.toString() + "; "), r;
      } else
        return h + ": none; ";
    }
    var n = f.util.toFixed;
    f.util.object.extend(
      f.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Returns styles-string for svg-export
         * @param {Boolean} skipShadow a boolean to skip shadow filter output
         * @return {String}
         */
        getSvgStyles: function(h) {
          var a = this.fillRule ? this.fillRule : "nonzero", t = this.strokeWidth ? this.strokeWidth : "0", r = this.strokeDashArray ? this.strokeDashArray.join(" ") : "none", e = this.strokeDashOffset ? this.strokeDashOffset : "0", s = this.strokeLineCap ? this.strokeLineCap : "butt", o = this.strokeLineJoin ? this.strokeLineJoin : "miter", i = this.strokeMiterLimit ? this.strokeMiterLimit : "4", l = typeof this.opacity < "u" ? this.opacity : "1", u = this.visible ? "" : " visibility: hidden;", d = h ? "" : this.getSvgFilter(), g = c("fill", this.fill), v = c("stroke", this.stroke);
          return [
            v,
            "stroke-width: ",
            t,
            "; ",
            "stroke-dasharray: ",
            r,
            "; ",
            "stroke-linecap: ",
            s,
            "; ",
            "stroke-dashoffset: ",
            e,
            "; ",
            "stroke-linejoin: ",
            o,
            "; ",
            "stroke-miterlimit: ",
            i,
            "; ",
            g,
            "fill-rule: ",
            a,
            "; ",
            "opacity: ",
            l,
            ";",
            d,
            u
          ].join("");
        },
        /**
         * Returns styles-string for svg-export
         * @param {Object} style the object from which to retrieve style properties
         * @param {Boolean} useWhiteSpace a boolean to include an additional attribute in the style.
         * @return {String}
         */
        getSvgSpanStyles: function(h, a) {
          var t = "; ", e = h.fontFamily ? "font-family: " + (h.fontFamily.indexOf("'") === -1 && h.fontFamily.indexOf('"') === -1 ? "'" + h.fontFamily + "'" : h.fontFamily) + t : "", r = h.strokeWidth ? "stroke-width: " + h.strokeWidth + t : "", e = e, s = h.fontSize ? "font-size: " + h.fontSize + "px" + t : "", o = h.fontStyle ? "font-style: " + h.fontStyle + t : "", i = h.fontWeight ? "font-weight: " + h.fontWeight + t : "", l = h.fill ? c("fill", h.fill) : "", u = h.stroke ? c("stroke", h.stroke) : "", d = this.getSvgTextDecoration(h), g = h.deltaY ? "baseline-shift: " + -h.deltaY + "; " : "";
          return d && (d = "text-decoration: " + d + t), [
            u,
            r,
            e,
            s,
            o,
            i,
            d,
            l,
            g,
            a ? "white-space: pre; " : ""
          ].join("");
        },
        /**
         * Returns text-decoration property for svg-export
         * @param {Object} style the object from which to retrieve style properties
         * @return {String}
         */
        getSvgTextDecoration: function(h) {
          return ["overline", "underline", "line-through"].filter(function(a) {
            return h[a.replace("-", "")];
          }).join(" ");
        },
        /**
         * Returns filter for svg shadow
         * @return {String}
         */
        getSvgFilter: function() {
          return this.shadow ? "filter: url(#SVGID_" + this.shadow.id + ");" : "";
        },
        /**
         * Returns id attribute for svg output
         * @return {String}
         */
        getSvgCommons: function() {
          return [
            this.id ? 'id="' + this.id + '" ' : "",
            this.clipPath ? 'clip-path="url(#' + this.clipPath.clipPathId + ')" ' : ""
          ].join("");
        },
        /**
         * Returns transform-string for svg-export
         * @param {Boolean} use the full transform or the single object one.
         * @return {String}
         */
        getSvgTransform: function(h, a) {
          var t = h ? this.calcTransformMatrix() : this.calcOwnMatrix(), r = 'transform="' + f.util.matrixToSVG(t);
          return r + (a || "") + '" ';
        },
        _setSVGBg: function(h) {
          if (this.backgroundColor) {
            var a = f.Object.NUM_FRACTION_DIGITS;
            h.push(
              "		<rect ",
              this._getFillAttributes(this.backgroundColor),
              ' x="',
              n(-this.width / 2, a),
              '" y="',
              n(-this.height / 2, a),
              '" width="',
              n(this.width, a),
              '" height="',
              n(this.height, a),
              `"></rect>
`
            );
          }
        },
        /**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toSVG: function(h) {
          return this._createBaseSVGMarkup(this._toSVG(h), { reviver: h });
        },
        /**
         * Returns svg clipPath representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toClipPathSVG: function(h) {
          return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(h), { reviver: h });
        },
        /**
         * @private
         */
        _createBaseClipPathSVGMarkup: function(h, a) {
          a = a || {};
          var t = a.reviver, r = a.additionalTransform || "", e = [
            this.getSvgTransform(!0, r),
            this.getSvgCommons()
          ].join(""), s = h.indexOf("COMMON_PARTS");
          return h[s] = e, t ? t(h.join("")) : h.join("");
        },
        /**
         * @private
         */
        _createBaseSVGMarkup: function(h, a) {
          a = a || {};
          var t = a.noStyle, r = a.reviver, e = t ? "" : 'style="' + this.getSvgStyles() + '" ', s = a.withShadow ? 'style="' + this.getSvgFilter() + '" ' : "", o = this.clipPath, i = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", l = o && o.absolutePositioned, u = this.stroke, d = this.fill, g = this.shadow, v, m = [], C, p = h.indexOf("COMMON_PARTS"), x = a.additionalTransform;
          return o && (o.clipPathId = "CLIPPATH_" + f.Object.__uid++, C = '<clipPath id="' + o.clipPathId + `" >
` + o.toClipPathSVG(r) + `</clipPath>
`), l && m.push(
            "<g ",
            s,
            this.getSvgCommons(),
            ` >
`
          ), m.push(
            "<g ",
            this.getSvgTransform(!1),
            l ? "" : s + this.getSvgCommons(),
            ` >
`
          ), v = [
            e,
            i,
            t ? "" : this.addPaintOrder(),
            " ",
            x ? 'transform="' + x + '" ' : ""
          ].join(""), h[p] = v, d && d.toLive && m.push(d.toSVG(this)), u && u.toLive && m.push(u.toSVG(this)), g && m.push(g.toSVG(this)), o && m.push(C), m.push(h.join("")), m.push(`</g>
`), l && m.push(`</g>
`), r ? r(m.join("")) : m.join("");
        },
        addPaintOrder: function() {
          return this.paintFirst !== "fill" ? ' paint-order="' + this.paintFirst + '" ' : "";
        }
      }
    );
  }(), function() {
    var c = f.util.object.extend, n = "stateProperties";
    function h(t, r, e) {
      var s = {}, o = !0;
      e.forEach(function(i) {
        s[i] = t[i];
      }), c(t[r], s, o);
    }
    function a(t, r, e) {
      if (t === r)
        return !0;
      if (Array.isArray(t)) {
        if (!Array.isArray(r) || t.length !== r.length)
          return !1;
        for (var s = 0, o = t.length; s < o; s++)
          if (!a(t[s], r[s]))
            return !1;
        return !0;
      } else if (t && typeof t == "object") {
        var i = Object.keys(t), l;
        if (!r || typeof r != "object" || !e && i.length !== Object.keys(r).length)
          return !1;
        for (var s = 0, o = i.length; s < o; s++)
          if (l = i[s], !(l === "canvas" || l === "group") && !a(t[l], r[l]))
            return !1;
        return !0;
      }
    }
    f.util.object.extend(
      f.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Returns true if object state (one of its state properties) was changed
         * @param {String} [propertySet] optional name for the set of property we want to save
         * @return {Boolean} true if instance' state has changed since `{@link fabric.Object#saveState}` was called
         */
        hasStateChanged: function(t) {
          t = t || n;
          var r = "_" + t;
          return Object.keys(this[r]).length < this[t].length ? !0 : !a(this[r], this, !0);
        },
        /**
         * Saves state of an object
         * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
         * @return {fabric.Object} thisArg
         */
        saveState: function(t) {
          var r = t && t.propertySet || n, e = "_" + r;
          return this[e] ? (h(this, e, this[r]), t && t.stateProperties && h(this, e, t.stateProperties), this) : this.setupState(t);
        },
        /**
         * Setups state of an object
         * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
         * @return {fabric.Object} thisArg
         */
        setupState: function(t) {
          t = t || {};
          var r = t.propertySet || n;
          return t.propertySet = r, this["_" + r] = {}, this.saveState(t), this;
        }
      }
    );
  }(), function() {
    var c = f.util.degreesToRadians;
    f.util.object.extend(
      f.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Determines which corner has been clicked
         * @private
         * @param {Object} pointer The pointer indicating the mouse position
         * @return {String|Boolean} corner code (tl, tr, bl, br, etc.), or false if nothing is found
         */
        _findTargetCorner: function(n, h) {
          if (!this.hasControls || this.group || !this.canvas || this.canvas._activeObject !== this)
            return !1;
          var a = n.x, t = n.y, r, e, s = Object.keys(this.oCoords), o = s.length - 1, i;
          for (this.__corner = 0; o >= 0; o--)
            if (i = s[o], !!this.isControlVisible(i) && (e = this._getImageLines(h ? this.oCoords[i].touchCorner : this.oCoords[i].corner), r = this._findCrossPoints({ x: a, y: t }, e), r !== 0 && r % 2 === 1))
              return this.__corner = i, i;
          return !1;
        },
        /**
         * Calls a function for each control. The function gets called,
         * with the control, the object that is calling the iterator and the control's key
         * @param {Function} fn function to iterate over the controls over
         */
        forEachControl: function(n) {
          for (var h in this.controls)
            n(this.controls[h], h, this);
        },
        /**
         * Sets the coordinates of the draggable boxes in the corners of
         * the image used to scale/rotate it.
         * note: if we would switch to ROUND corner area, all of this would disappear.
         * everything would resolve to a single point and a pythagorean theorem for the distance
         * @private
         */
        _setCornerCoords: function() {
          var n = this.oCoords;
          for (var h in n) {
            var a = this.controls[h];
            n[h].corner = a.calcCornerCoords(
              this.angle,
              this.cornerSize,
              n[h].x,
              n[h].y,
              !1
            ), n[h].touchCorner = a.calcCornerCoords(
              this.angle,
              this.touchCornerSize,
              n[h].x,
              n[h].y,
              !0
            );
          }
        },
        /**
         * Draws a colored layer behind the object, inside its selection borders.
         * Requires public options: padding, selectionBackgroundColor
         * this function is called when the context is transformed
         * has checks to be skipped when the object is on a staticCanvas
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @return {fabric.Object} thisArg
         * @chainable
         */
        drawSelectionBackground: function(n) {
          if (!this.selectionBackgroundColor || this.canvas && !this.canvas.interactive || this.canvas && this.canvas._activeObject !== this)
            return this;
          n.save();
          var h = this.getCenterPoint(), a = this._calculateCurrentDimensions(), t = this.canvas.viewportTransform;
          return n.translate(h.x, h.y), n.scale(1 / t[0], 1 / t[3]), n.rotate(c(this.angle)), n.fillStyle = this.selectionBackgroundColor, n.fillRect(-a.x / 2, -a.y / 2, a.x, a.y), n.restore(), this;
        },
        /**
         * Draws borders of an object's bounding box.
         * Requires public properties: width, height
         * Requires public options: padding, borderColor
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @param {Object} styleOverride object to override the object style
         * @return {fabric.Object} thisArg
         * @chainable
         */
        drawBorders: function(n, h) {
          h = h || {};
          var a = this._calculateCurrentDimensions(), t = this.borderScaleFactor, r = a.x + t, e = a.y + t, s = typeof h.hasControls < "u" ? h.hasControls : this.hasControls, o = !1;
          return n.save(), n.strokeStyle = h.borderColor || this.borderColor, this._setLineDash(n, h.borderDashArray || this.borderDashArray), n.strokeRect(
            -r / 2,
            -e / 2,
            r,
            e
          ), s && (n.beginPath(), this.forEachControl(function(i, l, u) {
            i.withConnection && i.getVisibility(u, l) && (o = !0, n.moveTo(i.x * r, i.y * e), n.lineTo(
              i.x * r + i.offsetX,
              i.y * e + i.offsetY
            ));
          }), o && n.stroke()), n.restore(), this;
        },
        /**
         * Draws borders of an object's bounding box when it is inside a group.
         * Requires public properties: width, height
         * Requires public options: padding, borderColor
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @param {object} options object representing current object parameters
         * @param {Object} styleOverride object to override the object style
         * @return {fabric.Object} thisArg
         * @chainable
         */
        drawBordersInGroup: function(n, h, a) {
          a = a || {};
          var t = f.util.sizeAfterTransform(this.width, this.height, h), r = this.strokeWidth, e = this.strokeUniform, s = this.borderScaleFactor, o = t.x + r * (e ? this.canvas.getZoom() : h.scaleX) + s, i = t.y + r * (e ? this.canvas.getZoom() : h.scaleY) + s;
          return n.save(), this._setLineDash(n, a.borderDashArray || this.borderDashArray), n.strokeStyle = a.borderColor || this.borderColor, n.strokeRect(
            -o / 2,
            -i / 2,
            o,
            i
          ), n.restore(), this;
        },
        /**
         * Draws corners of an object's bounding box.
         * Requires public properties: width, height
         * Requires public options: cornerSize, padding
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @param {Object} styleOverride object to override the object style
         * @return {fabric.Object} thisArg
         * @chainable
         */
        drawControls: function(n, h) {
          h = h || {}, n.save();
          var a = this.canvas.getRetinaScaling(), t, r;
          return n.setTransform(a, 0, 0, a, 0, 0), n.strokeStyle = n.fillStyle = h.cornerColor || this.cornerColor, this.transparentCorners || (n.strokeStyle = h.cornerStrokeColor || this.cornerStrokeColor), this._setLineDash(n, h.cornerDashArray || this.cornerDashArray), this.setCoords(), this.group && (t = this.group.calcTransformMatrix()), this.forEachControl(function(e, s, o) {
            r = o.oCoords[s], e.getVisibility(o, s) && (t && (r = f.util.transformPoint(r, t)), e.render(n, r.x, r.y, h, o));
          }), n.restore(), this;
        },
        /**
         * Returns true if the specified control is visible, false otherwise.
         * @param {String} controlKey The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
         * @returns {Boolean} true if the specified control is visible, false otherwise
         */
        isControlVisible: function(n) {
          return this.controls[n] && this.controls[n].getVisibility(this, n);
        },
        /**
         * Sets the visibility of the specified control.
         * @param {String} controlKey The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
         * @param {Boolean} visible true to set the specified control visible, false otherwise
         * @return {fabric.Object} thisArg
         * @chainable
         */
        setControlVisible: function(n, h) {
          return this._controlsVisibility || (this._controlsVisibility = {}), this._controlsVisibility[n] = h, this;
        },
        /**
         * Sets the visibility state of object controls.
         * @param {Object} [options] Options object
         * @param {Boolean} [options.bl] true to enable the bottom-left control, false to disable it
         * @param {Boolean} [options.br] true to enable the bottom-right control, false to disable it
         * @param {Boolean} [options.mb] true to enable the middle-bottom control, false to disable it
         * @param {Boolean} [options.ml] true to enable the middle-left control, false to disable it
         * @param {Boolean} [options.mr] true to enable the middle-right control, false to disable it
         * @param {Boolean} [options.mt] true to enable the middle-top control, false to disable it
         * @param {Boolean} [options.tl] true to enable the top-left control, false to disable it
         * @param {Boolean} [options.tr] true to enable the top-right control, false to disable it
         * @param {Boolean} [options.mtr] true to enable the middle-top-rotate control, false to disable it
         * @return {fabric.Object} thisArg
         * @chainable
         */
        setControlsVisibility: function(n) {
          n || (n = {});
          for (var h in n)
            this.setControlVisible(h, n[h]);
          return this;
        },
        /**
         * This callback function is called every time _discardActiveObject or _setActiveObject
         * try to to deselect this object. If the function returns true, the process is cancelled
         * @param {Object} [options] options sent from the upper functions
         * @param {Event} [options.e] event if the process is generated by an event
         */
        onDeselect: function() {
        },
        /**
         * This callback function is called every time _discardActiveObject or _setActiveObject
         * try to to select this object. If the function returns true, the process is cancelled
         * @param {Object} [options] options sent from the upper functions
         * @param {Event} [options.e] event if the process is generated by an event
         */
        onSelect: function() {
        }
      }
    );
  }(), f.util.object.extend(
    f.StaticCanvas.prototype,
    /** @lends fabric.StaticCanvas.prototype */
    {
      /**
       * Animation duration (in ms) for fx* methods
       * @type Number
       * @default
       */
      FX_DURATION: 500,
      /**
       * Centers object horizontally with animation.
       * @param {fabric.Object} object Object to center
       * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.AnimationContext} context
       */
      fxCenterObjectH: function(c, n) {
        n = n || {};
        var h = function() {
        }, a = n.onComplete || h, t = n.onChange || h, r = this;
        return f.util.animate({
          target: this,
          startValue: c.left,
          endValue: this.getCenterPoint().x,
          duration: this.FX_DURATION,
          onChange: function(e) {
            c.set("left", e), r.requestRenderAll(), t();
          },
          onComplete: function() {
            c.setCoords(), a();
          }
        });
      },
      /**
       * Centers object vertically with animation.
       * @param {fabric.Object} object Object to center
       * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.AnimationContext} context
       */
      fxCenterObjectV: function(c, n) {
        n = n || {};
        var h = function() {
        }, a = n.onComplete || h, t = n.onChange || h, r = this;
        return f.util.animate({
          target: this,
          startValue: c.top,
          endValue: this.getCenterPoint().y,
          duration: this.FX_DURATION,
          onChange: function(e) {
            c.set("top", e), r.requestRenderAll(), t();
          },
          onComplete: function() {
            c.setCoords(), a();
          }
        });
      },
      /**
       * Same as `fabric.Canvas#remove` but animated
       * @param {fabric.Object} object Object to remove
       * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.AnimationContext} context
       */
      fxRemove: function(c, n) {
        n = n || {};
        var h = function() {
        }, a = n.onComplete || h, t = n.onChange || h, r = this;
        return f.util.animate({
          target: this,
          startValue: c.opacity,
          endValue: 0,
          duration: this.FX_DURATION,
          onChange: function(e) {
            c.set("opacity", e), r.requestRenderAll(), t();
          },
          onComplete: function() {
            r.remove(c), a();
          }
        });
      }
    }
  ), f.util.object.extend(
    f.Object.prototype,
    /** @lends fabric.Object.prototype */
    {
      /**
       * Animates object's properties
       * @param {String|Object} property Property to animate (if string) or properties to animate (if object)
       * @param {Number|Object} value Value to animate property to (if string was given first) or options object
       * @return {fabric.Object} thisArg
       * @tutorial {@link http://fabricjs.com/fabric-intro-part-2#animation}
       * @return {fabric.AnimationContext | fabric.AnimationContext[]} animation context (or an array if passed multiple properties)
       *
       * As object — multiple properties
       *
       * object.animate({ left: ..., top: ... });
       * object.animate({ left: ..., top: ... }, { duration: ... });
       *
       * As string — one property
       *
       * object.animate('left', ...);
       * object.animate('left', { duration: ... });
       *
       */
      animate: function() {
        if (arguments[0] && typeof arguments[0] == "object") {
          var c = [], n, h, a = [];
          for (n in arguments[0])
            c.push(n);
          for (var t = 0, r = c.length; t < r; t++)
            n = c[t], h = t !== r - 1, a.push(this._animate(n, arguments[0][n], arguments[1], h));
          return a;
        } else
          return this._animate.apply(this, arguments);
      },
      /**
       * @private
       * @param {String} property Property to animate
       * @param {String} to Value to animate to
       * @param {Object} [options] Options object
       * @param {Boolean} [skipCallbacks] When true, callbacks like onchange and oncomplete are not invoked
       */
      _animate: function(c, n, h, a) {
        var t = this, r;
        n = n.toString(), h ? h = f.util.object.clone(h) : h = {}, ~c.indexOf(".") && (r = c.split("."));
        var e = t.colorProperties.indexOf(c) > -1 || r && t.colorProperties.indexOf(r[1]) > -1, s = r ? this.get(r[0])[r[1]] : this.get(c);
        "from" in h || (h.from = s), e || (~n.indexOf("=") ? n = s + parseFloat(n.replace("=", "")) : n = parseFloat(n));
        var o = {
          target: this,
          startValue: h.from,
          endValue: n,
          byValue: h.by,
          easing: h.easing,
          duration: h.duration,
          abort: h.abort && function(i, l, u) {
            return h.abort.call(t, i, l, u);
          },
          onChange: function(i, l, u) {
            r ? t[r[0]][r[1]] = i : t.set(c, i), !a && h.onChange && h.onChange(i, l, u);
          },
          onComplete: function(i, l, u) {
            a || (t.setCoords(), h.onComplete && h.onComplete(i, l, u));
          }
        };
        return e ? f.util.animateColor(o.startValue, o.endValue, o.duration, o) : f.util.animate(o);
      }
    }
  ), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.util.object.extend, a = n.util.object.clone, t = { x1: 1, x2: 1, y1: 1, y2: 1 };
    if (n.Line) {
      n.warn("fabric.Line is already defined");
      return;
    }
    n.Line = n.util.createClass(
      n.Object,
      /** @lends fabric.Line.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "line",
        /**
         * x value or first line edge
         * @type Number
         * @default
         */
        x1: 0,
        /**
         * y value or first line edge
         * @type Number
         * @default
         */
        y1: 0,
        /**
         * x value or second line edge
         * @type Number
         * @default
         */
        x2: 0,
        /**
         * y value or second line edge
         * @type Number
         * @default
         */
        y2: 0,
        cacheProperties: n.Object.prototype.cacheProperties.concat("x1", "x2", "y1", "y2"),
        /**
         * Constructor
         * @param {Array} [points] Array of points
         * @param {Object} [options] Options object
         * @return {fabric.Line} thisArg
         */
        initialize: function(e, s) {
          e || (e = [0, 0, 0, 0]), this.callSuper("initialize", s), this.set("x1", e[0]), this.set("y1", e[1]), this.set("x2", e[2]), this.set("y2", e[3]), this._setWidthHeight(s);
        },
        /**
         * @private
         * @param {Object} [options] Options
         */
        _setWidthHeight: function(e) {
          e || (e = {}), this.width = Math.abs(this.x2 - this.x1), this.height = Math.abs(this.y2 - this.y1), this.left = "left" in e ? e.left : this._getLeftToOriginX(), this.top = "top" in e ? e.top : this._getTopToOriginY();
        },
        /**
         * @private
         * @param {String} key
         * @param {*} value
         */
        _set: function(e, s) {
          return this.callSuper("_set", e, s), typeof t[e] < "u" && this._setWidthHeight(), this;
        },
        /**
         * @private
         * @return {Number} leftToOriginX Distance from left edge of canvas to originX of Line.
         */
        _getLeftToOriginX: r(
          {
            // property names
            origin: "originX",
            axis1: "x1",
            axis2: "x2",
            dimension: "width"
          },
          {
            // possible values of origin
            nearest: "left",
            center: "center",
            farthest: "right"
          }
        ),
        /**
         * @private
         * @return {Number} topToOriginY Distance from top edge of canvas to originY of Line.
         */
        _getTopToOriginY: r(
          {
            // property names
            origin: "originY",
            axis1: "y1",
            axis2: "y2",
            dimension: "height"
          },
          {
            // possible values of origin
            nearest: "top",
            center: "center",
            farthest: "bottom"
          }
        ),
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(e) {
          e.beginPath();
          var s = this.calcLinePoints();
          e.moveTo(s.x1, s.y1), e.lineTo(s.x2, s.y2), e.lineWidth = this.strokeWidth;
          var o = e.strokeStyle;
          e.strokeStyle = this.stroke || e.fillStyle, this.stroke && this._renderStroke(e), e.strokeStyle = o;
        },
        /**
         * This function is an helper for svg import. it returns the center of the object in the svg
         * untransformed coordinates
         * @private
         * @return {Object} center point from element coordinates
         */
        _findCenterFromElement: function() {
          return {
            x: (this.x1 + this.x2) / 2,
            y: (this.y1 + this.y2) / 2
          };
        },
        /**
         * Returns object representation of an instance
         * @method toObject
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(e) {
          return h(this.callSuper("toObject", e), this.calcLinePoints());
        },
        /*
         * Calculate object dimensions from its properties
         * @private
         */
        _getNonTransformedDimensions: function() {
          var e = this.callSuper("_getNonTransformedDimensions");
          return this.strokeLineCap === "butt" && (this.width === 0 && (e.y -= this.strokeWidth), this.height === 0 && (e.x -= this.strokeWidth)), e;
        },
        /**
         * Recalculates line points given width and height
         * @private
         */
        calcLinePoints: function() {
          var e = this.x1 <= this.x2 ? -1 : 1, s = this.y1 <= this.y2 ? -1 : 1, o = e * this.width * 0.5, i = s * this.height * 0.5, l = e * this.width * -0.5, u = s * this.height * -0.5;
          return {
            x1: o,
            x2: l,
            y1: i,
            y2: u
          };
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var e = this.calcLinePoints();
          return [
            "<line ",
            "COMMON_PARTS",
            'x1="',
            e.x1,
            '" y1="',
            e.y1,
            '" x2="',
            e.x2,
            '" y2="',
            e.y2,
            `" />
`
          ];
        }
        /* _TO_SVG_END_ */
      }
    ), n.Line.ATTRIBUTE_NAMES = n.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")), n.Line.fromElement = function(e, s, o) {
      o = o || {};
      var i = n.parseAttributes(e, n.Line.ATTRIBUTE_NAMES), l = [
        i.x1 || 0,
        i.y1 || 0,
        i.x2 || 0,
        i.y2 || 0
      ];
      s(new n.Line(l, h(i, o)));
    }, n.Line.fromObject = function(e, s) {
      function o(l) {
        delete l.points, s && s(l);
      }
      var i = a(e, !0);
      i.points = [e.x1, e.y1, e.x2, e.y2], n.Object._fromObject("Line", i, o, "points");
    };
    function r(e, s) {
      var o = e.origin, i = e.axis1, l = e.axis2, u = e.dimension, d = s.nearest, g = s.center, v = s.farthest;
      return function() {
        switch (this.get(o)) {
          case d:
            return Math.min(this.get(i), this.get(l));
          case g:
            return Math.min(this.get(i), this.get(l)) + 0.5 * this.get(u);
          case v:
            return Math.max(this.get(i), this.get(l));
        }
      };
    }
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.util.degreesToRadians;
    if (n.Circle) {
      n.warn("fabric.Circle is already defined.");
      return;
    }
    n.Circle = n.util.createClass(
      n.Object,
      /** @lends fabric.Circle.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "circle",
        /**
         * Radius of this circle
         * @type Number
         * @default
         */
        radius: 0,
        /**
         * degrees of start of the circle.
         * probably will change to degrees in next major version
         * @type Number 0 - 359
         * @default 0
         */
        startAngle: 0,
        /**
         * End angle of the circle
         * probably will change to degrees in next major version
         * @type Number 1 - 360
         * @default 360
         */
        endAngle: 360,
        cacheProperties: n.Object.prototype.cacheProperties.concat("radius", "startAngle", "endAngle"),
        /**
         * @private
         * @param {String} key
         * @param {*} value
         * @return {fabric.Circle} thisArg
         */
        _set: function(t, r) {
          return this.callSuper("_set", t, r), t === "radius" && this.setRadius(r), this;
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(t) {
          return this.callSuper("toObject", ["radius", "startAngle", "endAngle"].concat(t));
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var t, r = 0, e = 0, s = (this.endAngle - this.startAngle) % 360;
          if (s === 0)
            t = [
              "<circle ",
              "COMMON_PARTS",
              'cx="' + r + '" cy="' + e + '" ',
              'r="',
              this.radius,
              `" />
`
            ];
          else {
            var o = h(this.startAngle), i = h(this.endAngle), l = this.radius, u = n.util.cos(o) * l, d = n.util.sin(o) * l, g = n.util.cos(i) * l, v = n.util.sin(i) * l, m = s > 180 ? "1" : "0";
            t = [
              '<path d="M ' + u + " " + d,
              " A " + l + " " + l,
              " 0 ",
              +m + " 1",
              " " + g + " " + v,
              '" ',
              "COMMON_PARTS",
              ` />
`
            ];
          }
          return t;
        },
        /* _TO_SVG_END_ */
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render on
         */
        _render: function(t) {
          t.beginPath(), t.arc(
            0,
            0,
            this.radius,
            h(this.startAngle),
            h(this.endAngle),
            !1
          ), this._renderPaintInOrder(t);
        },
        /**
         * Returns horizontal radius of an object (according to how an object is scaled)
         * @return {Number}
         */
        getRadiusX: function() {
          return this.get("radius") * this.get("scaleX");
        },
        /**
         * Returns vertical radius of an object (according to how an object is scaled)
         * @return {Number}
         */
        getRadiusY: function() {
          return this.get("radius") * this.get("scaleY");
        },
        /**
         * Sets radius of an object (and updates width accordingly)
         * @return {fabric.Circle} thisArg
         */
        setRadius: function(t) {
          return this.radius = t, this.set("width", t * 2).set("height", t * 2);
        }
      }
    ), n.Circle.ATTRIBUTE_NAMES = n.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")), n.Circle.fromElement = function(t, r) {
      var e = n.parseAttributes(t, n.Circle.ATTRIBUTE_NAMES);
      if (!a(e))
        throw new Error("value of `r` attribute is required and can not be negative");
      e.left = (e.left || 0) - e.radius, e.top = (e.top || 0) - e.radius, r(new n.Circle(e));
    };
    function a(t) {
      return "radius" in t && t.radius >= 0;
    }
    n.Circle.fromObject = function(t, r) {
      n.Object._fromObject("Circle", t, r);
    };
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {});
    if (n.Triangle) {
      n.warn("fabric.Triangle is already defined");
      return;
    }
    n.Triangle = n.util.createClass(
      n.Object,
      /** @lends fabric.Triangle.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "triangle",
        /**
         * Width is set to 100 to compensate the old initialize code that was setting it to 100
         * @type Number
         * @default
         */
        width: 100,
        /**
         * Height is set to 100 to compensate the old initialize code that was setting it to 100
         * @type Number
         * @default
         */
        height: 100,
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(h) {
          var a = this.width / 2, t = this.height / 2;
          h.beginPath(), h.moveTo(-a, t), h.lineTo(0, -t), h.lineTo(a, t), h.closePath(), this._renderPaintInOrder(h);
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var h = this.width / 2, a = this.height / 2, t = [
            -h + " " + a,
            "0 " + -a,
            h + " " + a
          ].join(",");
          return [
            "<polygon ",
            "COMMON_PARTS",
            'points="',
            t,
            '" />'
          ];
        }
        /* _TO_SVG_END_ */
      }
    ), n.Triangle.fromObject = function(h, a) {
      return n.Object._fromObject("Triangle", h, a);
    };
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = Math.PI * 2;
    if (n.Ellipse) {
      n.warn("fabric.Ellipse is already defined.");
      return;
    }
    n.Ellipse = n.util.createClass(
      n.Object,
      /** @lends fabric.Ellipse.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "ellipse",
        /**
         * Horizontal radius
         * @type Number
         * @default
         */
        rx: 0,
        /**
         * Vertical radius
         * @type Number
         * @default
         */
        ry: 0,
        cacheProperties: n.Object.prototype.cacheProperties.concat("rx", "ry"),
        /**
         * Constructor
         * @param {Object} [options] Options object
         * @return {fabric.Ellipse} thisArg
         */
        initialize: function(a) {
          this.callSuper("initialize", a), this.set("rx", a && a.rx || 0), this.set("ry", a && a.ry || 0);
        },
        /**
         * @private
         * @param {String} key
         * @param {*} value
         * @return {fabric.Ellipse} thisArg
         */
        _set: function(a, t) {
          switch (this.callSuper("_set", a, t), a) {
            case "rx":
              this.rx = t, this.set("width", t * 2);
              break;
            case "ry":
              this.ry = t, this.set("height", t * 2);
              break;
          }
          return this;
        },
        /**
         * Returns horizontal radius of an object (according to how an object is scaled)
         * @return {Number}
         */
        getRx: function() {
          return this.get("rx") * this.get("scaleX");
        },
        /**
         * Returns Vertical radius of an object (according to how an object is scaled)
         * @return {Number}
         */
        getRy: function() {
          return this.get("ry") * this.get("scaleY");
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(a) {
          return this.callSuper("toObject", ["rx", "ry"].concat(a));
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          return [
            "<ellipse ",
            "COMMON_PARTS",
            'cx="0" cy="0" ',
            'rx="',
            this.rx,
            '" ry="',
            this.ry,
            `" />
`
          ];
        },
        /* _TO_SVG_END_ */
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render on
         */
        _render: function(a) {
          a.beginPath(), a.save(), a.transform(1, 0, 0, this.ry / this.rx, 0, 0), a.arc(
            0,
            0,
            this.rx,
            0,
            h,
            !1
          ), a.restore(), this._renderPaintInOrder(a);
        }
      }
    ), n.Ellipse.ATTRIBUTE_NAMES = n.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")), n.Ellipse.fromElement = function(a, t) {
      var r = n.parseAttributes(a, n.Ellipse.ATTRIBUTE_NAMES);
      r.left = (r.left || 0) - r.rx, r.top = (r.top || 0) - r.ry, t(new n.Ellipse(r));
    }, n.Ellipse.fromObject = function(a, t) {
      n.Object._fromObject("Ellipse", a, t);
    };
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.util.object.extend;
    if (n.Rect) {
      n.warn("fabric.Rect is already defined");
      return;
    }
    n.Rect = n.util.createClass(
      n.Object,
      /** @lends fabric.Rect.prototype */
      {
        /**
         * List of properties to consider when checking if state of an object is changed ({@link fabric.Object#hasStateChanged})
         * as well as for history (undo/redo) purposes
         * @type Array
         */
        stateProperties: n.Object.prototype.stateProperties.concat("rx", "ry"),
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "rect",
        /**
         * Horizontal border radius
         * @type Number
         * @default
         */
        rx: 0,
        /**
         * Vertical border radius
         * @type Number
         * @default
         */
        ry: 0,
        cacheProperties: n.Object.prototype.cacheProperties.concat("rx", "ry"),
        /**
         * Constructor
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
        initialize: function(a) {
          this.callSuper("initialize", a), this._initRxRy();
        },
        /**
         * Initializes rx/ry attributes
         * @private
         */
        _initRxRy: function() {
          this.rx && !this.ry ? this.ry = this.rx : this.ry && !this.rx && (this.rx = this.ry);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(a) {
          var t = this.rx ? Math.min(this.rx, this.width / 2) : 0, r = this.ry ? Math.min(this.ry, this.height / 2) : 0, e = this.width, s = this.height, o = -this.width / 2, i = -this.height / 2, l = t !== 0 || r !== 0, u = 1 - 0.5522847498;
          a.beginPath(), a.moveTo(o + t, i), a.lineTo(o + e - t, i), l && a.bezierCurveTo(o + e - u * t, i, o + e, i + u * r, o + e, i + r), a.lineTo(o + e, i + s - r), l && a.bezierCurveTo(o + e, i + s - u * r, o + e - u * t, i + s, o + e - t, i + s), a.lineTo(o + t, i + s), l && a.bezierCurveTo(o + u * t, i + s, o, i + s - u * r, o, i + s - r), a.lineTo(o, i + r), l && a.bezierCurveTo(o, i + u * r, o + u * t, i, o + t, i), a.closePath(), this._renderPaintInOrder(a);
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(a) {
          return this.callSuper("toObject", ["rx", "ry"].concat(a));
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var a = -this.width / 2, t = -this.height / 2;
          return [
            "<rect ",
            "COMMON_PARTS",
            'x="',
            a,
            '" y="',
            t,
            '" rx="',
            this.rx,
            '" ry="',
            this.ry,
            '" width="',
            this.width,
            '" height="',
            this.height,
            `" />
`
          ];
        }
        /* _TO_SVG_END_ */
      }
    ), n.Rect.ATTRIBUTE_NAMES = n.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")), n.Rect.fromElement = function(a, t, r) {
      if (!a)
        return t(null);
      r = r || {};
      var e = n.parseAttributes(a, n.Rect.ATTRIBUTE_NAMES);
      e.left = e.left || 0, e.top = e.top || 0, e.height = e.height || 0, e.width = e.width || 0;
      var s = new n.Rect(h(r ? n.util.object.clone(r) : {}, e));
      s.visible = s.visible && s.width > 0 && s.height > 0, t(s);
    }, n.Rect.fromObject = function(a, t) {
      return n.Object._fromObject("Rect", a, t);
    };
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.util.object.extend, a = n.util.array.min, t = n.util.array.max, r = n.util.toFixed, e = n.util.projectStrokeOnPoints;
    if (n.Polyline) {
      n.warn("fabric.Polyline is already defined");
      return;
    }
    n.Polyline = n.util.createClass(
      n.Object,
      /** @lends fabric.Polyline.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "polyline",
        /**
         * Points array
         * @type Array
         * @default
         */
        points: null,
        /**
         * WARNING: Feature in progress
         * Calculate the exact bounding box taking in account strokeWidth on acute angles
         * this will be turned to true by default on fabric 6.0
         * maybe will be left in as an optimization since calculations may be slow
         * @deprecated
         * @type Boolean
         * @default false
         */
        exactBoundingBox: !1,
        cacheProperties: n.Object.prototype.cacheProperties.concat("points"),
        /**
         * Constructor
         * @param {Array} points Array of points (where each point is an object with x and y)
         * @param {Object} [options] Options object
         * @return {fabric.Polyline} thisArg
         * @example
         * var poly = new fabric.Polyline([
         *     { x: 10, y: 10 },
         *     { x: 50, y: 30 },
         *     { x: 40, y: 70 },
         *     { x: 60, y: 50 },
         *     { x: 100, y: 150 },
         *     { x: 40, y: 100 }
         *   ], {
         *   stroke: 'red',
         *   left: 100,
         *   top: 100
         * });
         */
        initialize: function(s, o) {
          o = o || {}, this.points = s || [], this.callSuper("initialize", o), this._setPositionDimensions(o);
        },
        /**
         * @private
         */
        _projectStrokeOnPoints: function() {
          return e(this.points, this, !0);
        },
        _setPositionDimensions: function(s) {
          var o = this._calcDimensions(s), i, l = this.exactBoundingBox ? this.strokeWidth : 0;
          this.width = o.width - l, this.height = o.height - l, s.fromSVG || (i = this.translateToGivenOrigin(
            {
              // this looks bad, but is one way to keep it optional for now.
              x: o.left - this.strokeWidth / 2 + l / 2,
              y: o.top - this.strokeWidth / 2 + l / 2
            },
            "left",
            "top",
            this.originX,
            this.originY
          )), typeof s.left > "u" && (this.left = s.fromSVG ? o.left : i.x), typeof s.top > "u" && (this.top = s.fromSVG ? o.top : i.y), this.pathOffset = {
            x: o.left + this.width / 2 + l / 2,
            y: o.top + this.height / 2 + l / 2
          };
        },
        /**
         * Calculate the polygon min and max point from points array,
         * returning an object with left, top, width, height to measure the
         * polygon size
         * @return {Object} object.left X coordinate of the polygon leftmost point
         * @return {Object} object.top Y coordinate of the polygon topmost point
         * @return {Object} object.width distance between X coordinates of the polygon leftmost and rightmost point
         * @return {Object} object.height distance between Y coordinates of the polygon topmost and bottommost point
         * @private
         */
        _calcDimensions: function() {
          var s = this.exactBoundingBox ? this._projectStrokeOnPoints() : this.points, o = a(s, "x") || 0, i = a(s, "y") || 0, l = t(s, "x") || 0, u = t(s, "y") || 0, d = l - o, g = u - i;
          return {
            left: o,
            top: i,
            width: d,
            height: g
          };
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toObject: function(s) {
          return h(this.callSuper("toObject", s), {
            points: this.points.concat()
          });
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          for (var s = [], o = this.pathOffset.x, i = this.pathOffset.y, l = n.Object.NUM_FRACTION_DIGITS, u = 0, d = this.points.length; u < d; u++)
            s.push(
              r(this.points[u].x - o, l),
              ",",
              r(this.points[u].y - i, l),
              " "
            );
          return [
            "<" + this.type + " ",
            "COMMON_PARTS",
            'points="',
            s.join(""),
            `" />
`
          ];
        },
        /* _TO_SVG_END_ */
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        commonRender: function(s) {
          var o, i = this.points.length, l = this.pathOffset.x, u = this.pathOffset.y;
          if (!i || isNaN(this.points[i - 1].y))
            return !1;
          s.beginPath(), s.moveTo(this.points[0].x - l, this.points[0].y - u);
          for (var d = 0; d < i; d++)
            o = this.points[d], s.lineTo(o.x - l, o.y - u);
          return !0;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(s) {
          this.commonRender(s) && this._renderPaintInOrder(s);
        },
        /**
         * Returns complexity of an instance
         * @return {Number} complexity of this instance
         */
        complexity: function() {
          return this.get("points").length;
        }
      }
    ), n.Polyline.ATTRIBUTE_NAMES = n.SHARED_ATTRIBUTES.concat(), n.Polyline.fromElementGenerator = function(s) {
      return function(o, i, l) {
        if (!o)
          return i(null);
        l || (l = {});
        var u = n.parsePointsAttribute(o.getAttribute("points")), d = n.parseAttributes(o, n[s].ATTRIBUTE_NAMES);
        d.fromSVG = !0, i(new n[s](u, h(d, l)));
      };
    }, n.Polyline.fromElement = n.Polyline.fromElementGenerator("Polyline"), n.Polyline.fromObject = function(s, o) {
      return n.Object._fromObject("Polyline", s, o, "points");
    };
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.util.projectStrokeOnPoints;
    if (n.Polygon) {
      n.warn("fabric.Polygon is already defined");
      return;
    }
    n.Polygon = n.util.createClass(
      n.Polyline,
      /** @lends fabric.Polygon.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "polygon",
        /**
         * @private
         */
        _projectStrokeOnPoints: function() {
          return h(this.points, this);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(a) {
          this.commonRender(a) && (a.closePath(), this._renderPaintInOrder(a));
        }
      }
    ), n.Polygon.ATTRIBUTE_NAMES = n.SHARED_ATTRIBUTES.concat(), n.Polygon.fromElement = n.Polyline.fromElementGenerator("Polygon"), n.Polygon.fromObject = function(a, t) {
      n.Object._fromObject("Polygon", a, t, "points");
    };
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.util.array.min, a = n.util.array.max, t = n.util.object.extend, r = n.util.object.clone, e = n.util.toFixed;
    if (n.Path) {
      n.warn("fabric.Path is already defined");
      return;
    }
    n.Path = n.util.createClass(
      n.Object,
      /** @lends fabric.Path.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "path",
        /**
         * Array of path points
         * @type Array
         * @default
         */
        path: null,
        cacheProperties: n.Object.prototype.cacheProperties.concat("path", "fillRule"),
        stateProperties: n.Object.prototype.stateProperties.concat("path"),
        /**
         * Constructor
         * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
         * @param {Object} [options] Options object
         * @return {fabric.Path} thisArg
         */
        initialize: function(s, o) {
          o = r(o || {}), delete o.path, this.callSuper("initialize", o), this._setPath(s || [], o);
        },
        /**
        * @private
        * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
        * @param {Object} [options] Options object
        */
        _setPath: function(s, o) {
          this.path = n.util.makePathSimpler(
            Array.isArray(s) ? s : n.util.parsePath(s)
          ), n.Polyline.prototype._setPositionDimensions.call(this, o || {});
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render path on
         */
        _renderPathCommands: function(s) {
          var o, i = 0, l = 0, u = 0, d = 0, g = 0, v = 0, m = -this.pathOffset.x, C = -this.pathOffset.y;
          s.beginPath();
          for (var p = 0, x = this.path.length; p < x; ++p)
            switch (o = this.path[p], o[0]) {
              case "L":
                u = o[1], d = o[2], s.lineTo(u + m, d + C);
                break;
              case "M":
                u = o[1], d = o[2], i = u, l = d, s.moveTo(u + m, d + C);
                break;
              case "C":
                u = o[5], d = o[6], g = o[3], v = o[4], s.bezierCurveTo(
                  o[1] + m,
                  o[2] + C,
                  g + m,
                  v + C,
                  u + m,
                  d + C
                );
                break;
              case "Q":
                s.quadraticCurveTo(
                  o[1] + m,
                  o[2] + C,
                  o[3] + m,
                  o[4] + C
                ), u = o[3], d = o[4], g = o[1], v = o[2];
                break;
              case "z":
              case "Z":
                u = i, d = l, s.closePath();
                break;
            }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render path on
         */
        _render: function(s) {
          this._renderPathCommands(s), this._renderPaintInOrder(s);
        },
        /**
         * Returns string representation of an instance
         * @return {String} string representation of an instance
         */
        toString: function() {
          return "#<fabric.Path (" + this.complexity() + '): { "top": ' + this.top + ', "left": ' + this.left + " }>";
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(s) {
          return t(this.callSuper("toObject", s), {
            path: this.path.map(function(o) {
              return o.slice();
            })
          });
        },
        /**
         * Returns dataless object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toDatalessObject: function(s) {
          var o = this.toObject(["sourcePath"].concat(s));
          return o.sourcePath && delete o.path, o;
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var s = n.util.joinPath(this.path);
          return [
            "<path ",
            "COMMON_PARTS",
            'd="',
            s,
            '" stroke-linecap="round" ',
            `/>
`
          ];
        },
        _getOffsetTransform: function() {
          var s = n.Object.NUM_FRACTION_DIGITS;
          return " translate(" + e(-this.pathOffset.x, s) + ", " + e(-this.pathOffset.y, s) + ")";
        },
        /**
         * Returns svg clipPath representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toClipPathSVG: function(s) {
          var o = this._getOffsetTransform();
          return "	" + this._createBaseClipPathSVGMarkup(
            this._toSVG(),
            { reviver: s, additionalTransform: o }
          );
        },
        /**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toSVG: function(s) {
          var o = this._getOffsetTransform();
          return this._createBaseSVGMarkup(this._toSVG(), { reviver: s, additionalTransform: o });
        },
        /* _TO_SVG_END_ */
        /**
         * Returns number representation of an instance complexity
         * @return {Number} complexity of this instance
         */
        complexity: function() {
          return this.path.length;
        },
        /**
         * @private
         */
        _calcDimensions: function() {
          for (var s = [], o = [], i, l = 0, u = 0, d = 0, g = 0, v, m = 0, C = this.path.length; m < C; ++m) {
            switch (i = this.path[m], i[0]) {
              case "L":
                d = i[1], g = i[2], v = [];
                break;
              case "M":
                d = i[1], g = i[2], l = d, u = g, v = [];
                break;
              case "C":
                v = n.util.getBoundsOfCurve(
                  d,
                  g,
                  i[1],
                  i[2],
                  i[3],
                  i[4],
                  i[5],
                  i[6]
                ), d = i[5], g = i[6];
                break;
              case "Q":
                v = n.util.getBoundsOfCurve(
                  d,
                  g,
                  i[1],
                  i[2],
                  i[1],
                  i[2],
                  i[3],
                  i[4]
                ), d = i[3], g = i[4];
                break;
              case "z":
              case "Z":
                d = l, g = u;
                break;
            }
            v.forEach(function(H) {
              s.push(H.x), o.push(H.y);
            }), s.push(d), o.push(g);
          }
          var p = h(s) || 0, x = h(o) || 0, A = a(s) || 0, k = a(o) || 0, W = A - p, N = k - x;
          return {
            left: p,
            top: x,
            width: W,
            height: N
          };
        }
      }
    ), n.Path.fromObject = function(s, o) {
      if (typeof s.sourcePath == "string") {
        var i = s.sourcePath;
        n.loadSVGFromURL(i, function(l) {
          var u = l[0];
          u.setOptions(s), s.clipPath ? n.util.enlivenObjects([s.clipPath], function(d) {
            u.clipPath = d[0], o && o(u);
          }) : o && o(u);
        });
      } else
        n.Object._fromObject("Path", s, o, "path");
    }, n.Path.ATTRIBUTE_NAMES = n.SHARED_ATTRIBUTES.concat(["d"]), n.Path.fromElement = function(s, o, i) {
      var l = n.parseAttributes(s, n.Path.ATTRIBUTE_NAMES);
      l.fromSVG = !0, o(new n.Path(l.d, t(l, i)));
    };
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.util.array.min, a = n.util.array.max;
    n.Group || (n.Group = n.util.createClass(
      n.Object,
      n.Collection,
      /** @lends fabric.Group.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "group",
        /**
         * Width of stroke
         * @type Number
         * @default
         */
        strokeWidth: 0,
        /**
         * Indicates if click, mouseover, mouseout events & hoverCursor should also check for subtargets
         * @type Boolean
         * @default
         */
        subTargetCheck: !1,
        /**
         * Groups are container, do not render anything on theyr own, ence no cache properties
         * @type Array
         * @default
         */
        cacheProperties: [],
        /**
         * setOnGroup is a method used for TextBox that is no more used since 2.0.0 The behavior is still
         * available setting this boolean to true.
         * @type Boolean
         * @since 2.0.0
         * @default
         */
        useSetOnGroup: !1,
        /**
         * Constructor
         * @param {Object} objects Group objects
         * @param {Object} [options] Options object
         * @param {Boolean} [isAlreadyGrouped] if true, objects have been grouped already.
         * @return {Object} thisArg
         */
        initialize: function(t, r, e) {
          r = r || {}, this._objects = [], e && this.callSuper("initialize", r), this._objects = t || [];
          for (var s = this._objects.length; s--; )
            this._objects[s].group = this;
          if (e)
            this._updateObjectsACoords();
          else {
            var o = r && r.centerPoint;
            r.originX !== void 0 && (this.originX = r.originX), r.originY !== void 0 && (this.originY = r.originY), o || this._calcBounds(), this._updateObjectsCoords(o), delete r.centerPoint, this.callSuper("initialize", r);
          }
          this.setCoords();
        },
        /**
         * @private
         */
        _updateObjectsACoords: function() {
          for (var t = !0, r = this._objects.length; r--; )
            this._objects[r].setCoords(t);
        },
        /**
         * @private
         * @param {Boolean} [skipCoordsChange] if true, coordinates of objects enclosed in a group do not change
         */
        _updateObjectsCoords: function(r) {
          for (var r = r || this.getCenterPoint(), e = this._objects.length; e--; )
            this._updateObjectCoords(this._objects[e], r);
        },
        /**
         * @private
         * @param {Object} object
         * @param {fabric.Point} center, current center of group.
         */
        _updateObjectCoords: function(t, r) {
          var e = t.left, s = t.top, o = !0;
          t.set({
            left: e - r.x,
            top: s - r.y
          }), t.group = this, t.setCoords(o);
        },
        /**
         * Returns string represenation of a group
         * @return {String}
         */
        toString: function() {
          return "#<fabric.Group: (" + this.complexity() + ")>";
        },
        /**
         * Adds an object to a group; Then recalculates group's dimension, position.
         * @param {Object} object
         * @return {fabric.Group} thisArg
         * @chainable
         */
        addWithUpdate: function(t) {
          var r = !!this.group;
          return this._restoreObjectsState(), n.util.resetObjectTransform(this), t && (r && n.util.removeTransformFromObject(t, this.group.calcTransformMatrix()), this._objects.push(t), t.group = this, t._set("canvas", this.canvas)), this._calcBounds(), this._updateObjectsCoords(), this.dirty = !0, r ? this.group.addWithUpdate() : this.setCoords(), this;
        },
        /**
         * Removes an object from a group; Then recalculates group's dimension, position.
         * @param {Object} object
         * @return {fabric.Group} thisArg
         * @chainable
         */
        removeWithUpdate: function(t) {
          return this._restoreObjectsState(), n.util.resetObjectTransform(this), this.remove(t), this._calcBounds(), this._updateObjectsCoords(), this.setCoords(), this.dirty = !0, this;
        },
        /**
         * @private
         */
        _onObjectAdded: function(t) {
          this.dirty = !0, t.group = this, t._set("canvas", this.canvas);
        },
        /**
         * @private
         */
        _onObjectRemoved: function(t) {
          this.dirty = !0, delete t.group;
        },
        /**
         * @private
         */
        _set: function(t, r) {
          var e = this._objects.length;
          if (this.useSetOnGroup)
            for (; e--; )
              this._objects[e].setOnGroup(t, r);
          if (t === "canvas")
            for (; e--; )
              this._objects[e]._set(t, r);
          n.Object.prototype._set.call(this, t, r);
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(t) {
          var r = this.includeDefaultValues, e = this._objects.filter(function(o) {
            return !o.excludeFromExport;
          }).map(function(o) {
            var i = o.includeDefaultValues;
            o.includeDefaultValues = r;
            var l = o.toObject(t);
            return o.includeDefaultValues = i, l;
          }), s = n.Object.prototype.toObject.call(this, t);
          return s.objects = e, s;
        },
        /**
         * Returns object representation of an instance, in dataless mode.
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toDatalessObject: function(t) {
          var r, e = this.sourcePath;
          if (e)
            r = e;
          else {
            var s = this.includeDefaultValues;
            r = this._objects.map(function(i) {
              var l = i.includeDefaultValues;
              i.includeDefaultValues = s;
              var u = i.toDatalessObject(t);
              return i.includeDefaultValues = l, u;
            });
          }
          var o = n.Object.prototype.toDatalessObject.call(this, t);
          return o.objects = r, o;
        },
        /**
         * Renders instance on a given context
         * @param {CanvasRenderingContext2D} ctx context to render instance on
         */
        render: function(t) {
          this._transformDone = !0, this.callSuper("render", t), this._transformDone = !1;
        },
        /**
         * Decide if the object should cache or not. Create its own cache level
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group is already cached.
         * @return {Boolean}
         */
        shouldCache: function() {
          var t = n.Object.prototype.shouldCache.call(this);
          if (t) {
            for (var r = 0, e = this._objects.length; r < e; r++)
              if (this._objects[r].willDrawShadow())
                return this.ownCaching = !1, !1;
          }
          return t;
        },
        /**
         * Check if this object or a child object will cast a shadow
         * @return {Boolean}
         */
        willDrawShadow: function() {
          if (n.Object.prototype.willDrawShadow.call(this))
            return !0;
          for (var t = 0, r = this._objects.length; t < r; t++)
            if (this._objects[t].willDrawShadow())
              return !0;
          return !1;
        },
        /**
         * Check if this group or its parent group are caching, recursively up
         * @return {Boolean}
         */
        isOnACache: function() {
          return this.ownCaching || this.group && this.group.isOnACache();
        },
        /**
         * Execute the drawing operation for an object on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawObject: function(t) {
          for (var r = 0, e = this._objects.length; r < e; r++)
            this._objects[r].render(t);
          this._drawClipPath(t, this.clipPath);
        },
        /**
         * Check if cache is dirty
         */
        isCacheDirty: function(t) {
          if (this.callSuper("isCacheDirty", t))
            return !0;
          if (!this.statefullCache)
            return !1;
          for (var r = 0, e = this._objects.length; r < e; r++)
            if (this._objects[r].isCacheDirty(!0)) {
              if (this._cacheCanvas) {
                var s = this.cacheWidth / this.zoomX, o = this.cacheHeight / this.zoomY;
                this._cacheContext.clearRect(-s / 2, -o / 2, s, o);
              }
              return !0;
            }
          return !1;
        },
        /**
         * Restores original state of each of group objects (original state is that which was before group was created).
         * if the nested boolean is true, the original state will be restored just for the
         * first group and not for all the group chain
         * @private
         * @param {Boolean} nested tell the function to restore object state up to the parent group and not more
         * @return {fabric.Group} thisArg
         * @chainable
         */
        _restoreObjectsState: function() {
          var t = this.calcOwnMatrix();
          return this._objects.forEach(function(r) {
            n.util.addTransformToObject(r, t), delete r.group, r.setCoords();
          }), this;
        },
        /**
         * Destroys a group (restoring state of its objects)
         * @return {fabric.Group} thisArg
         * @chainable
         */
        destroy: function() {
          return this._objects.forEach(function(t) {
            t.set("dirty", !0);
          }), this._restoreObjectsState();
        },
        dispose: function() {
          this.callSuper("dispose"), this.forEachObject(function(t) {
            t.dispose && t.dispose();
          }), this._objects = [];
        },
        /**
         * make a group an active selection, remove the group from canvas
         * the group has to be on canvas for this to work.
         * @return {fabric.ActiveSelection} thisArg
         * @chainable
         */
        toActiveSelection: function() {
          if (this.canvas) {
            var t = this._objects, r = this.canvas;
            this._objects = [];
            var e = this.toObject();
            delete e.objects;
            var s = new n.ActiveSelection([]);
            return s.set(e), s.type = "activeSelection", r.remove(this), t.forEach(function(o) {
              o.group = s, o.dirty = !0, r.add(o);
            }), s.canvas = r, s._objects = t, r._activeObject = s, s.setCoords(), s;
          }
        },
        /**
         * Destroys a group (restoring state of its objects)
         * @return {fabric.Group} thisArg
         * @chainable
         */
        ungroupOnCanvas: function() {
          return this._restoreObjectsState();
        },
        /**
         * Sets coordinates of all objects inside group
         * @return {fabric.Group} thisArg
         * @chainable
         */
        setObjectsCoords: function() {
          var t = !0;
          return this.forEachObject(function(r) {
            r.setCoords(t);
          }), this;
        },
        /**
         * @private
         */
        _calcBounds: function(t) {
          for (var r = [], e = [], s, o, i, l = ["tr", "br", "bl", "tl"], u = 0, d = this._objects.length, g, v = l.length; u < d; ++u) {
            for (s = this._objects[u], i = s.calcACoords(), g = 0; g < v; g++)
              o = l[g], r.push(i[o].x), e.push(i[o].y);
            s.aCoords = i;
          }
          this._getBounds(r, e, t);
        },
        /**
         * @private
         */
        _getBounds: function(t, r, e) {
          var s = new n.Point(h(t), h(r)), o = new n.Point(a(t), a(r)), i = s.y || 0, l = s.x || 0, u = o.x - s.x || 0, d = o.y - s.y || 0;
          this.width = u, this.height = d, e || this.setPositionByOrigin({ x: l, y: i }, "left", "top");
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        _toSVG: function(t) {
          for (var r = ["<g ", "COMMON_PARTS", ` >
`], e = 0, s = this._objects.length; e < s; e++)
            r.push("		", this._objects[e].toSVG(t));
          return r.push(`</g>
`), r;
        },
        /**
         * Returns styles-string for svg-export, specific version for group
         * @return {String}
         */
        getSvgStyles: function() {
          var t = typeof this.opacity < "u" && this.opacity !== 1 ? "opacity: " + this.opacity + ";" : "", r = this.visible ? "" : " visibility: hidden;";
          return [
            t,
            this.getSvgFilter(),
            r
          ].join("");
        },
        /**
         * Returns svg clipPath representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toClipPathSVG: function(t) {
          for (var r = [], e = 0, s = this._objects.length; e < s; e++)
            r.push("	", this._objects[e].toClipPathSVG(t));
          return this._createBaseClipPathSVGMarkup(r, { reviver: t });
        }
        /* _TO_SVG_END_ */
      }
    ), n.Group.fromObject = function(t, r) {
      var e = t.objects, s = n.util.object.clone(t, !0);
      if (delete s.objects, typeof e == "string") {
        n.loadSVGFromURL(e, function(o) {
          var i = n.util.groupSVGElements(o, t, e), l = s.clipPath;
          delete s.clipPath, i.set(s), l ? n.util.enlivenObjects([l], function(u) {
            i.clipPath = u[0], r && r(i);
          }) : r && r(i);
        });
        return;
      }
      n.util.enlivenObjects(e, function(o) {
        n.util.enlivenObjectEnlivables(t, s, function() {
          r && r(new n.Group(o, s, !0));
        });
      });
    });
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {});
    n.ActiveSelection || (n.ActiveSelection = n.util.createClass(
      n.Group,
      /** @lends fabric.ActiveSelection.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "activeSelection",
        /**
         * Constructor
         * @param {Object} objects ActiveSelection objects
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
        initialize: function(h, a) {
          a = a || {}, this._objects = h || [];
          for (var t = this._objects.length; t--; )
            this._objects[t].group = this;
          a.originX && (this.originX = a.originX), a.originY && (this.originY = a.originY), this._calcBounds(), this._updateObjectsCoords(), n.Object.prototype.initialize.call(this, a), this.setCoords();
        },
        /**
         * Change te activeSelection to a normal group,
         * High level function that automatically adds it to canvas as
         * active object. no events fired.
         * @since 2.0.0
         * @return {fabric.Group}
         */
        toGroup: function() {
          var h = this._objects.concat();
          this._objects = [];
          var a = n.Object.prototype.toObject.call(this), t = new n.Group([]);
          if (delete a.type, t.set(a), h.forEach(function(e) {
            e.canvas.remove(e), e.group = t;
          }), t._objects = h, !this.canvas)
            return t;
          var r = this.canvas;
          return r.add(t), r._activeObject = t, t.setCoords(), t;
        },
        /**
         * If returns true, deselection is cancelled.
         * @since 2.0.0
         * @return {Boolean} [cancel]
         */
        onDeselect: function() {
          return this.destroy(), !1;
        },
        /**
         * Returns string representation of a group
         * @return {String}
         */
        toString: function() {
          return "#<fabric.ActiveSelection: (" + this.complexity() + ")>";
        },
        /**
         * Decide if the object should cache or not. Create its own cache level
         * objectCaching is a global flag, wins over everything
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group outside is cached.
         * @return {Boolean}
         */
        shouldCache: function() {
          return !1;
        },
        /**
         * Check if this group or its parent group are caching, recursively up
         * @return {Boolean}
         */
        isOnACache: function() {
          return !1;
        },
        /**
         * Renders controls and borders for the object
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} [styleOverride] properties to override the object style
         * @param {Object} [childrenOverride] properties to override the children overrides
         */
        _renderControls: function(h, a, t) {
          h.save(), h.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1, this.callSuper("_renderControls", h, a), t = t || {}, typeof t.hasControls > "u" && (t.hasControls = !1), t.forActiveSelection = !0;
          for (var r = 0, e = this._objects.length; r < e; r++)
            this._objects[r]._renderControls(h, t);
          h.restore();
        }
      }
    ), n.ActiveSelection.fromObject = function(h, a) {
      n.util.enlivenObjects(h.objects, function(t) {
        delete h.objects, a && a(new n.ActiveSelection(t, h, !0));
      });
    });
  }(tt), function(c) {
    var n = f.util.object.extend;
    if (c.fabric || (c.fabric = {}), c.fabric.Image) {
      f.warn("fabric.Image is already defined.");
      return;
    }
    f.Image = f.util.createClass(
      f.Object,
      /** @lends fabric.Image.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "image",
        /**
         * Width of a stroke.
         * For image quality a stroke multiple of 2 gives better results.
         * @type Number
         * @default
         */
        strokeWidth: 0,
        /**
         * When calling {@link fabric.Image.getSrc}, return value from element src with `element.getAttribute('src')`.
         * This allows for relative urls as image src.
         * @since 2.7.0
         * @type Boolean
         * @default
         */
        srcFromAttribute: !1,
        /**
         * private
         * contains last value of scaleX to detect
         * if the Image got resized after the last Render
         * @type Number
         */
        _lastScaleX: 1,
        /**
         * private
         * contains last value of scaleY to detect
         * if the Image got resized after the last Render
         * @type Number
         */
        _lastScaleY: 1,
        /**
         * private
         * contains last value of scaling applied by the apply filter chain
         * @type Number
         */
        _filterScalingX: 1,
        /**
         * private
         * contains last value of scaling applied by the apply filter chain
         * @type Number
         */
        _filterScalingY: 1,
        /**
         * minimum scale factor under which any resizeFilter is triggered to resize the image
         * 0 will disable the automatic resize. 1 will trigger automatically always.
         * number bigger than 1 are not implemented yet.
         * @type Number
         */
        minimumScaleTrigger: 0.5,
        /**
         * List of properties to consider when checking if
         * state of an object is changed ({@link fabric.Object#hasStateChanged})
         * as well as for history (undo/redo) purposes
         * @type Array
         */
        stateProperties: f.Object.prototype.stateProperties.concat("cropX", "cropY"),
        /**
         * List of properties to consider when checking if cache needs refresh
         * Those properties are checked by statefullCache ON ( or lazy mode if we want ) or from single
         * calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
         * and refreshed at the next render
         * @type Array
         */
        cacheProperties: f.Object.prototype.cacheProperties.concat("cropX", "cropY"),
        /**
         * key used to retrieve the texture representing this image
         * @since 2.0.0
         * @type String
         * @default
         */
        cacheKey: "",
        /**
         * Image crop in pixels from original image size.
         * @since 2.0.0
         * @type Number
         * @default
         */
        cropX: 0,
        /**
         * Image crop in pixels from original image size.
         * @since 2.0.0
         * @type Number
         * @default
         */
        cropY: 0,
        /**
         * Indicates whether this canvas will use image smoothing when painting this image.
         * Also influence if the cacheCanvas for this image uses imageSmoothing
         * @since 4.0.0-beta.11
         * @type Boolean
         * @default
         */
        imageSmoothing: !0,
        /**
         * Constructor
         * Image can be initialized with any canvas drawable or a string.
         * The string should be a url and will be loaded as an image.
         * Canvas and Image element work out of the box, while videos require extra code to work.
         * Please check video element events for seeking.
         * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | String} element Image element
         * @param {Object} [options] Options object
         * @param {function} [callback] callback function to call after eventual filters applied.
         * @return {fabric.Image} thisArg
         */
        initialize: function(h, a) {
          a || (a = {}), this.filters = [], this.cacheKey = "texture" + f.Object.__uid++, this.callSuper("initialize", a), this._initElement(h, a);
        },
        /**
         * Returns image element which this instance if based on
         * @return {HTMLImageElement} Image element
         */
        getElement: function() {
          return this._element || {};
        },
        /**
         * Sets image element for this instance to a specified one.
         * If filters defined they are applied to new image.
         * You might need to call `canvas.renderAll` and `object.setCoords` after replacing, to render new image and update controls area.
         * @param {HTMLImageElement} element
         * @param {Object} [options] Options object
         * @return {fabric.Image} thisArg
         * @chainable
         */
        setElement: function(h, a) {
          return this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._element = h, this._originalElement = h, this._initConfig(a), this.filters.length !== 0 && this.applyFilters(), this.resizeFilter && this.applyResizeFilters(), this;
        },
        /**
         * Delete a single texture if in webgl mode
         */
        removeTexture: function(h) {
          var a = f.filterBackend;
          a && a.evictCachesForKey && a.evictCachesForKey(h);
        },
        /**
         * Delete textures, reference to elements and eventually JSDOM cleanup
         */
        dispose: function() {
          this.callSuper("dispose"), this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._cacheContext = void 0, ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach(function(h) {
            f.util.cleanUpJsdomNode(this[h]), this[h] = void 0;
          }.bind(this));
        },
        /**
         * Get the crossOrigin value (of the corresponding image element)
         */
        getCrossOrigin: function() {
          return this._originalElement && (this._originalElement.crossOrigin || null);
        },
        /**
         * Returns original size of an image
         * @return {Object} Object with "width" and "height" properties
         */
        getOriginalSize: function() {
          var h = this.getElement();
          return {
            width: h.naturalWidth || h.width,
            height: h.naturalHeight || h.height
          };
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _stroke: function(h) {
          if (!(!this.stroke || this.strokeWidth === 0)) {
            var a = this.width / 2, t = this.height / 2;
            h.beginPath(), h.moveTo(-a, -t), h.lineTo(a, -t), h.lineTo(a, t), h.lineTo(-a, t), h.lineTo(-a, -t), h.closePath();
          }
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toObject: function(h) {
          var a = [];
          this.filters.forEach(function(r) {
            r && a.push(r.toObject());
          });
          var t = n(
            this.callSuper(
              "toObject",
              ["cropX", "cropY"].concat(h)
            ),
            {
              src: this.getSrc(),
              crossOrigin: this.getCrossOrigin(),
              filters: a
            }
          );
          return this.resizeFilter && (t.resizeFilter = this.resizeFilter.toObject()), t;
        },
        /**
         * Returns true if an image has crop applied, inspecting values of cropX,cropY,width,height.
         * @return {Boolean}
         */
        hasCrop: function() {
          return this.cropX || this.cropY || this.width < this._element.width || this.height < this._element.height;
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var h = [], a = [], t, r = this._element, e = -this.width / 2, s = -this.height / 2, o = "", i = "";
          if (!r)
            return [];
          if (this.hasCrop()) {
            var l = f.Object.__uid++;
            h.push(
              '<clipPath id="imageCrop_' + l + `">
`,
              '	<rect x="' + e + '" y="' + s + '" width="' + this.width + '" height="' + this.height + `" />
`,
              `</clipPath>
`
            ), o = ' clip-path="url(#imageCrop_' + l + ')" ';
          }
          if (this.imageSmoothing || (i = '" image-rendering="optimizeSpeed'), a.push(
            "	<image ",
            "COMMON_PARTS",
            'xlink:href="',
            this.getSvgSrc(!0),
            '" x="',
            e - this.cropX,
            '" y="',
            s - this.cropY,
            // we're essentially moving origin of transformation from top/left corner to the center of the shape
            // by wrapping it in container <g> element with actual transformation, then offsetting object to the top/left
            // so that object's center aligns with container's left/top
            '" width="',
            r.width || r.naturalWidth,
            '" height="',
            r.height || r.height,
            i,
            '"',
            o,
            `></image>
`
          ), this.stroke || this.strokeDashArray) {
            var u = this.fill;
            this.fill = null, t = [
              "	<rect ",
              'x="',
              e,
              '" y="',
              s,
              '" width="',
              this.width,
              '" height="',
              this.height,
              '" style="',
              this.getSvgStyles(),
              `"/>
`
            ], this.fill = u;
          }
          return this.paintFirst !== "fill" ? h = h.concat(t, a) : h = h.concat(a, t), h;
        },
        /* _TO_SVG_END_ */
        /**
         * Returns source of an image
         * @param {Boolean} filtered indicates if the src is needed for svg
         * @return {String} Source of an image
         */
        getSrc: function(h) {
          var a = h ? this._element : this._originalElement;
          return a ? a.toDataURL ? a.toDataURL() : this.srcFromAttribute ? a.getAttribute("src") : a.src : this.src || "";
        },
        /**
         * Sets source of an image
         * @param {String} src Source string (URL)
         * @param {Function} [callback] Callback is invoked when image has been loaded (and all filters have been applied)
         * @param {Object} [options] Options object
         * @param {String} [options.crossOrigin] crossOrigin value (one of "", "anonymous", "use-credentials")
         * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes
         * @return {fabric.Image} thisArg
         * @chainable
         */
        setSrc: function(h, a, t) {
          return f.util.loadImage(h, function(r, e) {
            this.setElement(r, t), this._setWidthHeight(), a && a(this, e);
          }, this, t && t.crossOrigin), this;
        },
        /**
         * Returns string representation of an instance
         * @return {String} String representation of an instance
         */
        toString: function() {
          return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
        },
        applyResizeFilters: function() {
          var h = this.resizeFilter, a = this.minimumScaleTrigger, t = this.getTotalObjectScaling(), r = t.scaleX, e = t.scaleY, s = this._filteredEl || this._originalElement;
          if (this.group && this.set("dirty", !0), !h || r > a && e > a) {
            this._element = s, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = r, this._lastScaleY = e;
            return;
          }
          f.filterBackend || (f.filterBackend = f.initFilterBackend());
          var o = f.util.createCanvasElement(), i = this._filteredEl ? this.cacheKey + "_filtered" : this.cacheKey, l = s.width, u = s.height;
          o.width = l, o.height = u, this._element = o, this._lastScaleX = h.scaleX = r, this._lastScaleY = h.scaleY = e, f.filterBackend.applyFilters(
            [h],
            s,
            l,
            u,
            this._element,
            i
          ), this._filterScalingX = o.width / this._originalElement.width, this._filterScalingY = o.height / this._originalElement.height;
        },
        /**
         * Applies filters assigned to this image (from "filters" array) or from filter param
         * @method applyFilters
         * @param {Array} filters to be applied
         * @param {Boolean} forResizing specify if the filter operation is a resize operation
         * @return {thisArg} return the fabric.Image object
         * @chainable
         */
        applyFilters: function(h) {
          if (h = h || this.filters || [], h = h.filter(function(s) {
            return s && !s.isNeutralState();
          }), this.set("dirty", !0), this.removeTexture(this.cacheKey + "_filtered"), h.length === 0)
            return this._element = this._originalElement, this._filteredEl = null, this._filterScalingX = 1, this._filterScalingY = 1, this;
          var a = this._originalElement, t = a.naturalWidth || a.width, r = a.naturalHeight || a.height;
          if (this._element === this._originalElement) {
            var e = f.util.createCanvasElement();
            e.width = t, e.height = r, this._element = e, this._filteredEl = e;
          } else
            this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, t, r), this._lastScaleX = 1, this._lastScaleY = 1;
          return f.filterBackend || (f.filterBackend = f.initFilterBackend()), f.filterBackend.applyFilters(
            h,
            this._originalElement,
            t,
            r,
            this._element,
            this.cacheKey
          ), (this._originalElement.width !== this._element.width || this._originalElement.height !== this._element.height) && (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height), this;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(h) {
          f.util.setImageSmoothing(h, this.imageSmoothing), this.isMoving !== !0 && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(h), this._renderPaintInOrder(h);
        },
        /**
         * Paint the cached copy of the object on the target context.
         * it will set the imageSmoothing for the draw operation
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawCacheOnCanvas: function(h) {
          f.util.setImageSmoothing(h, this.imageSmoothing), f.Object.prototype.drawCacheOnCanvas.call(this, h);
        },
        /**
         * Decide if the object should cache or not. Create its own cache level
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group outside is cached.
         * This is the special image version where we would like to avoid caching where possible.
         * Essentially images do not benefit from caching. They may require caching, and in that
         * case we do it. Also caching an image usually ends in a loss of details.
         * A full performance audit should be done.
         * @return {Boolean}
         */
        shouldCache: function() {
          return this.needsItsOwnCache();
        },
        _renderFill: function(h) {
          var a = this._element;
          if (a) {
            var t = this._filterScalingX, r = this._filterScalingY, e = this.width, s = this.height, o = Math.min, i = Math.max, l = i(this.cropX, 0), u = i(this.cropY, 0), d = a.naturalWidth || a.width, g = a.naturalHeight || a.height, v = l * t, m = u * r, C = o(e * t, d - v), p = o(s * r, g - m), x = -e / 2, A = -s / 2, k = o(e, d / t - l), W = o(s, g / r - u);
            a && h.drawImage(a, v, m, C, p, x, A, k, W);
          }
        },
        /**
         * needed to check if image needs resize
         * @private
         */
        _needsResize: function() {
          var h = this.getTotalObjectScaling();
          return h.scaleX !== this._lastScaleX || h.scaleY !== this._lastScaleY;
        },
        /**
         * @private
         */
        _resetWidthHeight: function() {
          this.set(this.getOriginalSize());
        },
        /**
         * The Image class's initialization method. This method is automatically
         * called by the constructor.
         * @private
         * @param {HTMLImageElement|String} element The element representing the image
         * @param {Object} [options] Options object
         */
        _initElement: function(h, a) {
          this.setElement(f.util.getById(h), a), f.util.addClass(this.getElement(), f.Image.CSS_CANVAS);
        },
        /**
         * @private
         * @param {Object} [options] Options object
         */
        _initConfig: function(h) {
          h || (h = {}), this.setOptions(h), this._setWidthHeight(h);
        },
        /**
         * @private
         * @param {Array} filters to be initialized
         * @param {Function} callback Callback to invoke when all fabric.Image.filters instances are created
         */
        _initFilters: function(h, a) {
          h && h.length ? f.util.enlivenObjects(h, function(t) {
            a && a(t);
          }, "fabric.Image.filters") : a && a();
        },
        /**
         * @private
         * Set the width and the height of the image object, using the element or the
         * options.
         * @param {Object} [options] Object with width/height properties
         */
        _setWidthHeight: function(h) {
          h || (h = {});
          var a = this.getElement();
          this.width = h.width || a.naturalWidth || a.width || 0, this.height = h.height || a.naturalHeight || a.height || 0;
        },
        /**
         * Calculate offset for center and scale factor for the image in order to respect
         * the preserveAspectRatio attribute
         * @private
         * @return {Object}
         */
        parsePreserveAspectRatioAttribute: function() {
          var h = f.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio || ""), a = this._element.width, t = this._element.height, r = 1, e = 1, s = 0, o = 0, i = 0, l = 0, u, d = this.width, g = this.height, v = { width: d, height: g };
          return h && (h.alignX !== "none" || h.alignY !== "none") ? (h.meetOrSlice === "meet" && (r = e = f.util.findScaleToFit(this._element, v), u = (d - a * r) / 2, h.alignX === "Min" && (s = -u), h.alignX === "Max" && (s = u), u = (g - t * e) / 2, h.alignY === "Min" && (o = -u), h.alignY === "Max" && (o = u)), h.meetOrSlice === "slice" && (r = e = f.util.findScaleToCover(this._element, v), u = a - d / r, h.alignX === "Mid" && (i = u / 2), h.alignX === "Max" && (i = u), u = t - g / e, h.alignY === "Mid" && (l = u / 2), h.alignY === "Max" && (l = u), a = d / r, t = g / e)) : (r = d / a, e = g / t), {
            width: a,
            height: t,
            scaleX: r,
            scaleY: e,
            offsetLeft: s,
            offsetTop: o,
            cropX: i,
            cropY: l
          };
        }
      }
    ), f.Image.CSS_CANVAS = "canvas-img", f.Image.prototype.getSvgSrc = f.Image.prototype.getSrc, f.Image.fromObject = function(h, a) {
      var t = f.util.object.clone(h);
      f.util.loadImage(t.src, function(r, e) {
        if (e) {
          a && a(null, !0);
          return;
        }
        f.Image.prototype._initFilters.call(t, t.filters, function(s) {
          t.filters = s || [], f.Image.prototype._initFilters.call(t, [t.resizeFilter], function(o) {
            t.resizeFilter = o[0], f.util.enlivenObjectEnlivables(t, t, function() {
              var i = new f.Image(r, t);
              a(i, !1);
            });
          });
        });
      }, null, t.crossOrigin);
    }, f.Image.fromURL = function(h, a, t) {
      f.util.loadImage(h, function(r, e) {
        a && a(new f.Image(r, t), e);
      }, null, t && t.crossOrigin);
    }, f.Image.ATTRIBUTE_NAMES = f.SHARED_ATTRIBUTES.concat(
      "x y width height preserveAspectRatio xlink:href crossOrigin image-rendering".split(" ")
    ), f.Image.fromElement = function(h, a, t) {
      var r = f.parseAttributes(h, f.Image.ATTRIBUTE_NAMES);
      f.Image.fromURL(
        r["xlink:href"],
        a,
        n(t ? f.util.object.clone(t) : {}, r)
      );
    };
  }(tt), f.util.object.extend(
    f.Object.prototype,
    /** @lends fabric.Object.prototype */
    {
      /**
       * @private
       * @return {Number} angle value
       */
      _getAngleValueForStraighten: function() {
        var c = this.angle % 360;
        return c > 0 ? Math.round((c - 1) / 90) * 90 : Math.round(c / 90) * 90;
      },
      /**
       * Straightens an object (rotating it from current angle to one of 0, 90, 180, 270, etc. depending on which is closer)
       * @return {fabric.Object} thisArg
       * @chainable
       */
      straighten: function() {
        return this.rotate(this._getAngleValueForStraighten());
      },
      /**
       * Same as {@link fabric.Object.prototype.straighten} but with animation
       * @param {Object} callbacks Object with callback functions
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.Object} thisArg
       */
      fxStraighten: function(c) {
        c = c || {};
        var n = function() {
        }, h = c.onComplete || n, a = c.onChange || n, t = this;
        return f.util.animate({
          target: this,
          startValue: this.get("angle"),
          endValue: this._getAngleValueForStraighten(),
          duration: this.FX_DURATION,
          onChange: function(r) {
            t.rotate(r), a();
          },
          onComplete: function() {
            t.setCoords(), h();
          }
        });
      }
    }
  ), f.util.object.extend(
    f.StaticCanvas.prototype,
    /** @lends fabric.StaticCanvas.prototype */
    {
      /**
       * Straightens object, then rerenders canvas
       * @param {fabric.Object} object Object to straighten
       * @return {fabric.Canvas} thisArg
       * @chainable
       */
      straightenObject: function(c) {
        return c.straighten(), this.requestRenderAll(), this;
      },
      /**
       * Same as {@link fabric.Canvas.prototype.straightenObject}, but animated
       * @param {fabric.Object} object Object to straighten
       * @return {fabric.Canvas} thisArg
       */
      fxStraightenObject: function(c) {
        return c.fxStraighten({
          onChange: this.requestRenderAllBound
        });
      }
    }
  ), function() {
    function c(h, a) {
      var t = "precision " + a + ` float;
void main(){}`, r = h.createShader(h.FRAGMENT_SHADER);
      return h.shaderSource(r, t), h.compileShader(r), !!h.getShaderParameter(r, h.COMPILE_STATUS);
    }
    f.isWebglSupported = function(h) {
      if (f.isLikelyNode)
        return !1;
      h = h || f.WebglFilterBackend.prototype.tileSize;
      var a = document.createElement("canvas"), t = a.getContext("webgl") || a.getContext("experimental-webgl"), r = !1;
      if (t) {
        f.maxTextureSize = t.getParameter(t.MAX_TEXTURE_SIZE), r = f.maxTextureSize >= h;
        for (var e = ["highp", "mediump", "lowp"], s = 0; s < 3; s++)
          if (c(t, e[s])) {
            f.webGlPrecision = e[s];
            break;
          }
      }
      return this.isSupported = r, r;
    }, f.WebglFilterBackend = n;
    function n(h) {
      h && h.tileSize && (this.tileSize = h.tileSize), this.setupGLContext(this.tileSize, this.tileSize), this.captureGPUInfo();
    }
    n.prototype = /** @lends fabric.WebglFilterBackend.prototype */
    {
      tileSize: 2048,
      /**
       * Experimental. This object is a sort of repository of help layers used to avoid
       * of recreating them during frequent filtering. If you are previewing a filter with
       * a slider you probably do not want to create help layers every filter step.
       * in this object there will be appended some canvases, created once, resized sometimes
       * cleared never. Clearing is left to the developer.
       **/
      resources: {},
      /**
       * Setup a WebGL context suitable for filtering, and bind any needed event handlers.
       */
      setupGLContext: function(h, a) {
        this.dispose(), this.createWebGLCanvas(h, a), this.aPosition = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]), this.chooseFastestCopyGLTo2DMethod(h, a);
      },
      /**
       * Pick a method to copy data from GL context to 2d canvas.  In some browsers using
       * putImageData is faster than drawImage for that specific operation.
       */
      chooseFastestCopyGLTo2DMethod: function(h, a) {
        var t = typeof window.performance < "u", r;
        try {
          new ImageData(1, 1), r = !0;
        } catch {
          r = !1;
        }
        var e = typeof ArrayBuffer < "u", s = typeof Uint8ClampedArray < "u";
        if (t && r && e && s) {
          var o = f.util.createCanvasElement(), i = new ArrayBuffer(h * a * 4);
          if (f.forceGLPutImageData) {
            this.imageBuffer = i, this.copyGLTo2D = ft;
            return;
          }
          var l = {
            imageBuffer: i,
            destinationWidth: h,
            destinationHeight: a,
            targetCanvas: o
          }, u, d, g;
          o.width = h, o.height = a, u = window.performance.now(), ht.call(l, this.gl, l), d = window.performance.now() - u, u = window.performance.now(), ft.call(l, this.gl, l), g = window.performance.now() - u, d > g ? (this.imageBuffer = i, this.copyGLTo2D = ft) : this.copyGLTo2D = ht;
        }
      },
      /**
       * Create a canvas element and associated WebGL context and attaches them as
       * class properties to the GLFilterBackend class.
       */
      createWebGLCanvas: function(h, a) {
        var t = f.util.createCanvasElement();
        t.width = h, t.height = a;
        var r = {
          alpha: !0,
          premultipliedAlpha: !1,
          depth: !1,
          stencil: !1,
          antialias: !1
        }, e = t.getContext("webgl", r);
        e || (e = t.getContext("experimental-webgl", r)), e && (e.clearColor(0, 0, 0, 0), this.canvas = t, this.gl = e);
      },
      /**
       * Attempts to apply the requested filters to the source provided, drawing the filtered output
       * to the provided target canvas.
       *
       * @param {Array} filters The filters to apply.
       * @param {HTMLImageElement|HTMLCanvasElement} source The source to be filtered.
       * @param {Number} width The width of the source input.
       * @param {Number} height The height of the source input.
       * @param {HTMLCanvasElement} targetCanvas The destination for filtered output to be drawn.
       * @param {String|undefined} cacheKey A key used to cache resources related to the source. If
       * omitted, caching will be skipped.
       */
      applyFilters: function(h, a, t, r, e, s) {
        var o = this.gl, i;
        s && (i = this.getCachedTexture(s, a));
        var l = {
          originalWidth: a.width || a.originalWidth,
          originalHeight: a.height || a.originalHeight,
          sourceWidth: t,
          sourceHeight: r,
          destinationWidth: t,
          destinationHeight: r,
          context: o,
          sourceTexture: this.createTexture(o, t, r, !i && a),
          targetTexture: this.createTexture(o, t, r),
          originalTexture: i || this.createTexture(o, t, r, !i && a),
          passes: h.length,
          webgl: !0,
          aPosition: this.aPosition,
          programCache: this.programCache,
          pass: 0,
          filterBackend: this,
          targetCanvas: e
        }, u = o.createFramebuffer();
        return o.bindFramebuffer(o.FRAMEBUFFER, u), h.forEach(function(d) {
          d && d.applyTo(l);
        }), ot(l), this.copyGLTo2D(o, l), o.bindTexture(o.TEXTURE_2D, null), o.deleteTexture(l.sourceTexture), o.deleteTexture(l.targetTexture), o.deleteFramebuffer(u), e.getContext("2d").setTransform(1, 0, 0, 1, 0, 0), l;
      },
      /**
       * Detach event listeners, remove references, and clean up caches.
       */
      dispose: function() {
        this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches();
      },
      /**
       * Wipe out WebGL-related caches.
       */
      clearWebGLCaches: function() {
        this.programCache = {}, this.textureCache = {};
      },
      /**
       * Create a WebGL texture object.
       *
       * Accepts specific dimensions to initialize the texture to or a source image.
       *
       * @param {WebGLRenderingContext} gl The GL context to use for creating the texture.
       * @param {Number} width The width to initialize the texture at.
       * @param {Number} height The height to initialize the texture.
       * @param {HTMLImageElement|HTMLCanvasElement} textureImageSource A source for the texture data.
       * @param {Number} filterType gl.NEAREST or gl.LINEAR usually, webgl numeri constants
       * @returns {WebGLTexture}
       */
      createTexture: function(h, a, t, r, e) {
        var s = h.createTexture();
        return h.bindTexture(h.TEXTURE_2D, s), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, e || h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, e || h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE), r ? h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, r) : h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, a, t, 0, h.RGBA, h.UNSIGNED_BYTE, null), s;
      },
      /**
       * Can be optionally used to get a texture from the cache array
       *
       * If an existing texture is not found, a new texture is created and cached.
       *
       * @param {String} uniqueId A cache key to use to find an existing texture.
       * @param {HTMLImageElement|HTMLCanvasElement} textureImageSource A source to use to create the
       * texture cache entry if one does not already exist.
       */
      getCachedTexture: function(h, a) {
        if (this.textureCache[h])
          return this.textureCache[h];
        var t = this.createTexture(
          this.gl,
          a.width,
          a.height,
          a
        );
        return this.textureCache[h] = t, t;
      },
      /**
       * Clear out cached resources related to a source image that has been
       * filtered previously.
       *
       * @param {String} cacheKey The cache key provided when the source image was filtered.
       */
      evictCachesForKey: function(h) {
        this.textureCache[h] && (this.gl.deleteTexture(this.textureCache[h]), delete this.textureCache[h]);
      },
      copyGLTo2D: ht,
      /**
       * Attempt to extract GPU information strings from a WebGL context.
       *
       * Useful information when debugging or blacklisting specific GPUs.
       *
       * @returns {Object} A GPU info object with renderer and vendor strings.
       */
      captureGPUInfo: function() {
        if (this.gpuInfo)
          return this.gpuInfo;
        var h = this.gl, a = { renderer: "", vendor: "" };
        if (!h)
          return a;
        var t = h.getExtension("WEBGL_debug_renderer_info");
        if (t) {
          var r = h.getParameter(t.UNMASKED_RENDERER_WEBGL), e = h.getParameter(t.UNMASKED_VENDOR_WEBGL);
          r && (a.renderer = r.toLowerCase()), e && (a.vendor = e.toLowerCase());
        }
        return this.gpuInfo = a, a;
      }
    };
  }();
  function ot(c) {
    var n = c.targetCanvas, h = n.width, a = n.height, t = c.destinationWidth, r = c.destinationHeight;
    (h !== t || a !== r) && (n.width = t, n.height = r);
  }
  function ht(c, n) {
    var h = c.canvas, a = n.targetCanvas, t = a.getContext("2d");
    t.translate(0, a.height), t.scale(1, -1);
    var r = h.height - a.height;
    t.drawImage(
      h,
      0,
      r,
      a.width,
      a.height,
      0,
      0,
      a.width,
      a.height
    );
  }
  function ft(c, n) {
    var h = n.targetCanvas, a = h.getContext("2d"), t = n.destinationWidth, r = n.destinationHeight, e = t * r * 4, s = new Uint8Array(this.imageBuffer, 0, e), o = new Uint8ClampedArray(this.imageBuffer, 0, e);
    c.readPixels(0, 0, t, r, c.RGBA, c.UNSIGNED_BYTE, s);
    var i = new ImageData(o, t, r);
    a.putImageData(i, 0, 0);
  }
  (function() {
    var c = function() {
    };
    f.Canvas2dFilterBackend = n;
    function n() {
    }
    n.prototype = /** @lends fabric.Canvas2dFilterBackend.prototype */
    {
      evictCachesForKey: c,
      dispose: c,
      clearWebGLCaches: c,
      /**
       * Experimental. This object is a sort of repository of help layers used to avoid
       * of recreating them during frequent filtering. If you are previewing a filter with
       * a slider you probably do not want to create help layers every filter step.
       * in this object there will be appended some canvases, created once, resized sometimes
       * cleared never. Clearing is left to the developer.
       **/
      resources: {},
      /**
       * Apply a set of filters against a source image and draw the filtered output
       * to the provided destination canvas.
       *
       * @param {EnhancedFilter} filters The filter to apply.
       * @param {HTMLImageElement|HTMLCanvasElement} sourceElement The source to be filtered.
       * @param {Number} sourceWidth The width of the source input.
       * @param {Number} sourceHeight The height of the source input.
       * @param {HTMLCanvasElement} targetCanvas The destination for filtered output to be drawn.
       */
      applyFilters: function(h, a, t, r, e) {
        var s = e.getContext("2d");
        s.drawImage(a, 0, 0, t, r);
        var o = s.getImageData(0, 0, t, r), i = s.getImageData(0, 0, t, r), l = {
          sourceWidth: t,
          sourceHeight: r,
          imageData: o,
          originalEl: a,
          originalImageData: i,
          canvasEl: e,
          ctx: s,
          filterBackend: this
        };
        return h.forEach(function(u) {
          u.applyTo(l);
        }), (l.imageData.width !== t || l.imageData.height !== r) && (e.width = l.imageData.width, e.height = l.imageData.height), s.putImageData(l.imageData, 0, 0), l;
      }
    };
  })(), f.Image = f.Image || {}, f.Image.filters = f.Image.filters || {}, f.Image.filters.BaseFilter = f.util.createClass(
    /** @lends fabric.Image.filters.BaseFilter.prototype */
    {
      /**
       * Filter type
       * @param {String} type
       * @default
       */
      type: "BaseFilter",
      /**
       * Array of attributes to send with buffers. do not modify
       * @private
       */
      vertexSource: `attribute vec2 aPosition;
varying vec2 vTexCoord;
void main() {
vTexCoord = aPosition;
gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
}`,
      fragmentSource: `precision highp float;
varying vec2 vTexCoord;
uniform sampler2D uTexture;
void main() {
gl_FragColor = texture2D(uTexture, vTexCoord);
}`,
      /**
       * Constructor
       * @param {Object} [options] Options object
       */
      initialize: function(c) {
        c && this.setOptions(c);
      },
      /**
       * Sets filter's properties from options
       * @param {Object} [options] Options object
       */
      setOptions: function(c) {
        for (var n in c)
          this[n] = c[n];
      },
      /**
       * Compile this filter's shader program.
       *
       * @param {WebGLRenderingContext} gl The GL canvas context to use for shader compilation.
       * @param {String} fragmentSource fragmentShader source for compilation
       * @param {String} vertexSource vertexShader source for compilation
       */
      createProgram: function(c, n, h) {
        n = n || this.fragmentSource, h = h || this.vertexSource, f.webGlPrecision !== "highp" && (n = n.replace(
          /precision highp float/g,
          "precision " + f.webGlPrecision + " float"
        ));
        var a = c.createShader(c.VERTEX_SHADER);
        if (c.shaderSource(a, h), c.compileShader(a), !c.getShaderParameter(a, c.COMPILE_STATUS))
          throw new Error(
            // eslint-disable-next-line prefer-template
            "Vertex shader compile error for " + this.type + ": " + c.getShaderInfoLog(a)
          );
        var t = c.createShader(c.FRAGMENT_SHADER);
        if (c.shaderSource(t, n), c.compileShader(t), !c.getShaderParameter(t, c.COMPILE_STATUS))
          throw new Error(
            // eslint-disable-next-line prefer-template
            "Fragment shader compile error for " + this.type + ": " + c.getShaderInfoLog(t)
          );
        var r = c.createProgram();
        if (c.attachShader(r, a), c.attachShader(r, t), c.linkProgram(r), !c.getProgramParameter(r, c.LINK_STATUS))
          throw new Error(
            // eslint-disable-next-line prefer-template
            'Shader link error for "${this.type}" ' + c.getProgramInfoLog(r)
          );
        var e = this.getAttributeLocations(c, r), s = this.getUniformLocations(c, r) || {};
        return s.uStepW = c.getUniformLocation(r, "uStepW"), s.uStepH = c.getUniformLocation(r, "uStepH"), {
          program: r,
          attributeLocations: e,
          uniformLocations: s
        };
      },
      /**
       * Return a map of attribute names to WebGLAttributeLocation objects.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {WebGLShaderProgram} program The shader program from which to take attribute locations.
       * @returns {Object} A map of attribute names to attribute locations.
       */
      getAttributeLocations: function(c, n) {
        return {
          aPosition: c.getAttribLocation(n, "aPosition")
        };
      },
      /**
       * Return a map of uniform names to WebGLUniformLocation objects.
       *
       * Intended to be overridden by subclasses.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {WebGLShaderProgram} program The shader program from which to take uniform locations.
       * @returns {Object} A map of uniform names to uniform locations.
       */
      getUniformLocations: function() {
        return {};
      },
      /**
       * Send attribute data from this filter to its shader program on the GPU.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {Object} attributeLocations A map of shader attribute names to their locations.
       */
      sendAttributeData: function(c, n, h) {
        var a = n.aPosition, t = c.createBuffer();
        c.bindBuffer(c.ARRAY_BUFFER, t), c.enableVertexAttribArray(a), c.vertexAttribPointer(a, 2, c.FLOAT, !1, 0, 0), c.bufferData(c.ARRAY_BUFFER, h, c.STATIC_DRAW);
      },
      _setupFrameBuffer: function(c) {
        var n = c.context, h, a;
        c.passes > 1 ? (h = c.destinationWidth, a = c.destinationHeight, (c.sourceWidth !== h || c.sourceHeight !== a) && (n.deleteTexture(c.targetTexture), c.targetTexture = c.filterBackend.createTexture(n, h, a)), n.framebufferTexture2D(
          n.FRAMEBUFFER,
          n.COLOR_ATTACHMENT0,
          n.TEXTURE_2D,
          c.targetTexture,
          0
        )) : (n.bindFramebuffer(n.FRAMEBUFFER, null), n.finish());
      },
      _swapTextures: function(c) {
        c.passes--, c.pass++;
        var n = c.targetTexture;
        c.targetTexture = c.sourceTexture, c.sourceTexture = n;
      },
      /**
       * Generic isNeutral implementation for one parameter based filters.
       * Used only in image applyFilters to discard filters that will not have an effect
       * on the image
       * Other filters may need their own version ( ColorMatrix, HueRotation, gamma, ComposedFilter )
       * @param {Object} options
       **/
      isNeutralState: function() {
        var c = this.mainParameter, n = f.Image.filters[this.type].prototype;
        if (c)
          if (Array.isArray(n[c])) {
            for (var h = n[c].length; h--; )
              if (this[c][h] !== n[c][h])
                return !1;
            return !0;
          } else
            return n[c] === this[c];
        else
          return !1;
      },
      /**
       * Apply this filter to the input image data provided.
       *
       * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
       *
       * @param {Object} options
       * @param {Number} options.passes The number of filters remaining to be executed
       * @param {Boolean} options.webgl Whether to use webgl to render the filter.
       * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
       * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
       * @param {WebGLRenderingContext} options.context The GL context used for rendering.
       * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
       */
      applyTo: function(c) {
        c.webgl ? (this._setupFrameBuffer(c), this.applyToWebGL(c), this._swapTextures(c)) : this.applyTo2d(c);
      },
      /**
       * Retrieves the cached shader.
       * @param {Object} options
       * @param {WebGLRenderingContext} options.context The GL context used for rendering.
       * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
       */
      retrieveShader: function(c) {
        return c.programCache.hasOwnProperty(this.type) || (c.programCache[this.type] = this.createProgram(c.context)), c.programCache[this.type];
      },
      /**
       * Apply this filter using webgl.
       *
       * @param {Object} options
       * @param {Number} options.passes The number of filters remaining to be executed
       * @param {Boolean} options.webgl Whether to use webgl to render the filter.
       * @param {WebGLTexture} options.originalTexture The texture of the original input image.
       * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
       * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
       * @param {WebGLRenderingContext} options.context The GL context used for rendering.
       * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
       */
      applyToWebGL: function(c) {
        var n = c.context, h = this.retrieveShader(c);
        c.pass === 0 && c.originalTexture ? n.bindTexture(n.TEXTURE_2D, c.originalTexture) : n.bindTexture(n.TEXTURE_2D, c.sourceTexture), n.useProgram(h.program), this.sendAttributeData(n, h.attributeLocations, c.aPosition), n.uniform1f(h.uniformLocations.uStepW, 1 / c.sourceWidth), n.uniform1f(h.uniformLocations.uStepH, 1 / c.sourceHeight), this.sendUniformData(n, h.uniformLocations), n.viewport(0, 0, c.destinationWidth, c.destinationHeight), n.drawArrays(n.TRIANGLE_STRIP, 0, 4);
      },
      bindAdditionalTexture: function(c, n, h) {
        c.activeTexture(h), c.bindTexture(c.TEXTURE_2D, n), c.activeTexture(c.TEXTURE0);
      },
      unbindAdditionalTexture: function(c, n) {
        c.activeTexture(n), c.bindTexture(c.TEXTURE_2D, null), c.activeTexture(c.TEXTURE0);
      },
      getMainParameter: function() {
        return this[this.mainParameter];
      },
      setMainParameter: function(c) {
        this[this.mainParameter] = c;
      },
      /**
       * Send uniform data from this filter to its shader program on the GPU.
       *
       * Intended to be overridden by subclasses.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {Object} uniformLocations A map of shader uniform names to their locations.
       */
      sendUniformData: function() {
      },
      /**
       * If needed by a 2d filter, this functions can create an helper canvas to be used
       * remember that options.targetCanvas is available for use till end of chain.
       */
      createHelpLayer: function(c) {
        if (!c.helpLayer) {
          var n = document.createElement("canvas");
          n.width = c.sourceWidth, n.height = c.sourceHeight, c.helpLayer = n;
        }
      },
      /**
       * Returns object representation of an instance
       * @return {Object} Object representation of an instance
       */
      toObject: function() {
        var c = { type: this.type }, n = this.mainParameter;
        return n && (c[n] = this[n]), c;
      },
      /**
       * Returns a JSON representation of an instance
       * @return {Object} JSON
       */
      toJSON: function() {
        return this.toObject();
      }
    }
  ), f.Image.filters.BaseFilter.fromObject = function(c, n) {
    var h = new f.Image.filters[c.type](c);
    return n && n(h), h;
  }, function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.Image.filters, a = n.util.createClass;
    h.ColorMatrix = a(
      h.BaseFilter,
      /** @lends fabric.Image.filters.ColorMatrix.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "ColorMatrix",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
varying vec2 vTexCoord;
uniform mat4 uColorMatrix;
uniform vec4 uConstants;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color *= uColorMatrix;
color += uConstants;
gl_FragColor = color;
}`,
        /**
         * Colormatrix for pixels.
         * array of 20 floats. Numbers in positions 4, 9, 14, 19 loose meaning
         * outside the -1, 1 range.
         * 0.0039215686 is the part of 1 that get translated to 1 in 2d
         * @param {Array} matrix array of 20 numbers.
         * @default
         */
        matrix: [
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0
        ],
        mainParameter: "matrix",
        /**
         * Lock the colormatrix on the color part, skipping alpha, mainly for non webgl scenario
         * to save some calculation
         * @type Boolean
         * @default true
         */
        colorsOnly: !0,
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(t) {
          this.callSuper("initialize", t), this.matrix = this.matrix.slice(0);
        },
        /**
         * Apply the ColorMatrix operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
        applyTo2d: function(t) {
          var r = t.imageData, e = r.data, s = e.length, o = this.matrix, i, l, u, d, g, v = this.colorsOnly;
          for (g = 0; g < s; g += 4)
            i = e[g], l = e[g + 1], u = e[g + 2], v ? (e[g] = i * o[0] + l * o[1] + u * o[2] + o[4] * 255, e[g + 1] = i * o[5] + l * o[6] + u * o[7] + o[9] * 255, e[g + 2] = i * o[10] + l * o[11] + u * o[12] + o[14] * 255) : (d = e[g + 3], e[g] = i * o[0] + l * o[1] + u * o[2] + d * o[3] + o[4] * 255, e[g + 1] = i * o[5] + l * o[6] + u * o[7] + d * o[8] + o[9] * 255, e[g + 2] = i * o[10] + l * o[11] + u * o[12] + d * o[13] + o[14] * 255, e[g + 3] = i * o[15] + l * o[16] + u * o[17] + d * o[18] + o[19] * 255);
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, r) {
          return {
            uColorMatrix: t.getUniformLocation(r, "uColorMatrix"),
            uConstants: t.getUniformLocation(r, "uConstants")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, r) {
          var e = this.matrix, s = [
            e[0],
            e[1],
            e[2],
            e[3],
            e[5],
            e[6],
            e[7],
            e[8],
            e[10],
            e[11],
            e[12],
            e[13],
            e[15],
            e[16],
            e[17],
            e[18]
          ], o = [e[4], e[9], e[14], e[19]];
          t.uniformMatrix4fv(r.uColorMatrix, !1, s), t.uniform4fv(r.uConstants, o);
        }
      }
    ), n.Image.filters.ColorMatrix.fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.Image.filters, a = n.util.createClass;
    h.Brightness = a(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Brightness.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Brightness",
        /**
         * Fragment source for the brightness program
         */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uBrightness;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color.rgb += uBrightness;
gl_FragColor = color;
}`,
        /**
         * Brightness value, from -1 to 1.
         * translated to -255 to 255 for 2d
         * 0.0039215686 is the part of 1 that get translated to 1 in 2d
         * @param {Number} brightness
         * @default
         */
        brightness: 0,
        /**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
        mainParameter: "brightness",
        /**
        * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
        *
        * @param {Object} options
        * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
        */
        applyTo2d: function(t) {
          if (this.brightness !== 0) {
            var r = t.imageData, e = r.data, s, o = e.length, i = Math.round(this.brightness * 255);
            for (s = 0; s < o; s += 4)
              e[s] = e[s] + i, e[s + 1] = e[s + 1] + i, e[s + 2] = e[s + 2] + i;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, r) {
          return {
            uBrightness: t.getUniformLocation(r, "uBrightness")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, r) {
          t.uniform1f(r.uBrightness, this.brightness);
        }
      }
    ), n.Image.filters.Brightness.fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.util.object.extend, a = n.Image.filters, t = n.util.createClass;
    a.Convolute = t(
      a.BaseFilter,
      /** @lends fabric.Image.filters.Convolute.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Convolute",
        /*
         * Opaque value (true/false)
         */
        opaque: !1,
        /*
         * matrix for the filter, max 9x9
         */
        matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0],
        /**
         * Fragment source for the brightness program
         */
        fragmentSource: {
          Convolute_3_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[9];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 3.0; h+=1.0) {
for (float w = 0.0; w < 3.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];
}
}
gl_FragColor = color;
}`,
          Convolute_3_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[9];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 3.0; h+=1.0) {
for (float w = 0.0; w < 3.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`,
          Convolute_5_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[25];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 5.0; h+=1.0) {
for (float w = 0.0; w < 5.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];
}
}
gl_FragColor = color;
}`,
          Convolute_5_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[25];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 5.0; h+=1.0) {
for (float w = 0.0; w < 5.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`,
          Convolute_7_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[49];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 7.0; h+=1.0) {
for (float w = 0.0; w < 7.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];
}
}
gl_FragColor = color;
}`,
          Convolute_7_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[49];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 7.0; h+=1.0) {
for (float w = 0.0; w < 7.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`,
          Convolute_9_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[81];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 9.0; h+=1.0) {
for (float w = 0.0; w < 9.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];
}
}
gl_FragColor = color;
}`,
          Convolute_9_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[81];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 9.0; h+=1.0) {
for (float w = 0.0; w < 9.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`
        },
        /**
         * Constructor
         * @memberOf fabric.Image.filters.Convolute.prototype
         * @param {Object} [options] Options object
         * @param {Boolean} [options.opaque=false] Opaque value (true/false)
         * @param {Array} [options.matrix] Filter matrix
         */
        /**
        * Retrieves the cached shader.
        * @param {Object} options
        * @param {WebGLRenderingContext} options.context The GL context used for rendering.
        * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
        */
        retrieveShader: function(r) {
          var e = Math.sqrt(this.matrix.length), s = this.type + "_" + e + "_" + (this.opaque ? 1 : 0), o = this.fragmentSource[s];
          return r.programCache.hasOwnProperty(s) || (r.programCache[s] = this.createProgram(r.context, o)), r.programCache[s];
        },
        /**
         * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(r) {
          var e = r.imageData, s = e.data, o = this.matrix, i = Math.round(Math.sqrt(o.length)), l = Math.floor(i / 2), u = e.width, d = e.height, g = r.ctx.createImageData(u, d), v = g.data, m = this.opaque ? 1 : 0, C, p, x, A, k, W, N, H, z, K, $, J, y;
          for ($ = 0; $ < d; $++)
            for (K = 0; K < u; K++) {
              for (k = ($ * u + K) * 4, C = 0, p = 0, x = 0, A = 0, y = 0; y < i; y++)
                for (J = 0; J < i; J++)
                  N = $ + y - l, W = K + J - l, !(N < 0 || N >= d || W < 0 || W >= u) && (H = (N * u + W) * 4, z = o[y * i + J], C += s[H] * z, p += s[H + 1] * z, x += s[H + 2] * z, m || (A += s[H + 3] * z));
              v[k] = C, v[k + 1] = p, v[k + 2] = x, m ? v[k + 3] = s[k + 3] : v[k + 3] = A;
            }
          r.imageData = g;
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(r, e) {
          return {
            uMatrix: r.getUniformLocation(e, "uMatrix"),
            uOpaque: r.getUniformLocation(e, "uOpaque"),
            uHalfSize: r.getUniformLocation(e, "uHalfSize"),
            uSize: r.getUniformLocation(e, "uSize")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(r, e) {
          r.uniform1fv(e.uMatrix, this.matrix);
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return h(this.callSuper("toObject"), {
            opaque: this.opaque,
            matrix: this.matrix
          });
        }
      }
    ), n.Image.filters.Convolute.fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.Image.filters, a = n.util.createClass;
    h.Grayscale = a(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Grayscale.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Grayscale",
        fragmentSource: {
          average: `precision highp float;
uniform sampler2D uTexture;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float average = (color.r + color.b + color.g) / 3.0;
gl_FragColor = vec4(average, average, average, color.a);
}`,
          lightness: `precision highp float;
uniform sampler2D uTexture;
uniform int uMode;
varying vec2 vTexCoord;
void main() {
vec4 col = texture2D(uTexture, vTexCoord);
float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;
gl_FragColor = vec4(average, average, average, col.a);
}`,
          luminosity: `precision highp float;
uniform sampler2D uTexture;
uniform int uMode;
varying vec2 vTexCoord;
void main() {
vec4 col = texture2D(uTexture, vTexCoord);
float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;
gl_FragColor = vec4(average, average, average, col.a);
}`
        },
        /**
         * Grayscale mode, between 'average', 'lightness', 'luminosity'
         * @param {String} type
         * @default
         */
        mode: "average",
        mainParameter: "mode",
        /**
         * Apply the Grayscale operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
        applyTo2d: function(t) {
          var r = t.imageData, e = r.data, s, o = e.length, i, l = this.mode;
          for (s = 0; s < o; s += 4)
            l === "average" ? i = (e[s] + e[s + 1] + e[s + 2]) / 3 : l === "lightness" ? i = (Math.min(e[s], e[s + 1], e[s + 2]) + Math.max(e[s], e[s + 1], e[s + 2])) / 2 : l === "luminosity" && (i = 0.21 * e[s] + 0.72 * e[s + 1] + 0.07 * e[s + 2]), e[s] = i, e[s + 1] = i, e[s + 2] = i;
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(t) {
          var r = this.type + "_" + this.mode;
          if (!t.programCache.hasOwnProperty(r)) {
            var e = this.fragmentSource[this.mode];
            t.programCache[r] = this.createProgram(t.context, e);
          }
          return t.programCache[r];
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, r) {
          return {
            uMode: t.getUniformLocation(r, "uMode")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, r) {
          var e = 1;
          t.uniform1i(r.uMode, e);
        },
        /**
         * Grayscale filter isNeutralState implementation
         * The filter is never neutral
         * on the image
         **/
        isNeutralState: function() {
          return !1;
        }
      }
    ), n.Image.filters.Grayscale.fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.Image.filters, a = n.util.createClass;
    h.Invert = a(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Invert.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Invert",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform int uInvert;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
if (uInvert == 1) {
gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);
} else {
gl_FragColor = color;
}
}`,
        /**
         * Filter invert. if false, does nothing
         * @param {Boolean} invert
         * @default
         */
        invert: !0,
        mainParameter: "invert",
        /**
         * Apply the Invert operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
        applyTo2d: function(t) {
          var r = t.imageData, e = r.data, s, o = e.length;
          for (s = 0; s < o; s += 4)
            e[s] = 255 - e[s], e[s + 1] = 255 - e[s + 1], e[s + 2] = 255 - e[s + 2];
        },
        /**
         * Invert filter isNeutralState implementation
         * Used only in image applyFilters to discard filters that will not have an effect
         * on the image
         * @param {Object} options
         **/
        isNeutralState: function() {
          return !this.invert;
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, r) {
          return {
            uInvert: t.getUniformLocation(r, "uInvert")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, r) {
          t.uniform1i(r.uInvert, this.invert);
        }
      }
    ), n.Image.filters.Invert.fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.util.object.extend, a = n.Image.filters, t = n.util.createClass;
    a.Noise = t(
      a.BaseFilter,
      /** @lends fabric.Image.filters.Noise.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Noise",
        /**
         * Fragment source for the noise program
         */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uStepH;
uniform float uNoise;
uniform float uSeed;
varying vec2 vTexCoord;
float rand(vec2 co, float seed, float vScale) {
return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);
}
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;
gl_FragColor = color;
}`,
        /**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
        mainParameter: "noise",
        /**
         * Noise value, from
         * @param {Number} noise
         * @default
         */
        noise: 0,
        /**
         * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(r) {
          if (this.noise !== 0) {
            var e = r.imageData, s = e.data, o, i = s.length, l = this.noise, u;
            for (o = 0, i = s.length; o < i; o += 4)
              u = (0.5 - Math.random()) * l, s[o] += u, s[o + 1] += u, s[o + 2] += u;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(r, e) {
          return {
            uNoise: r.getUniformLocation(e, "uNoise"),
            uSeed: r.getUniformLocation(e, "uSeed")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(r, e) {
          r.uniform1f(e.uNoise, this.noise / 255), r.uniform1f(e.uSeed, Math.random());
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return h(this.callSuper("toObject"), {
            noise: this.noise
          });
        }
      }
    ), n.Image.filters.Noise.fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.Image.filters, a = n.util.createClass;
    h.Pixelate = a(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Pixelate.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Pixelate",
        blocksize: 4,
        mainParameter: "blocksize",
        /**
         * Fragment source for the Pixelate program
         */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uBlocksize;
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
float blockW = uBlocksize * uStepW;
float blockH = uBlocksize * uStepW;
int posX = int(vTexCoord.x / blockW);
int posY = int(vTexCoord.y / blockH);
float fposX = float(posX);
float fposY = float(posY);
vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);
vec4 color = texture2D(uTexture, squareCoords);
gl_FragColor = color;
}`,
        /**
         * Apply the Pixelate operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(t) {
          var r = t.imageData, e = r.data, s = r.height, o = r.width, i, l, u, d, g, v, m, C, p, x, A;
          for (l = 0; l < s; l += this.blocksize)
            for (u = 0; u < o; u += this.blocksize)
              for (i = l * 4 * o + u * 4, d = e[i], g = e[i + 1], v = e[i + 2], m = e[i + 3], x = Math.min(l + this.blocksize, s), A = Math.min(u + this.blocksize, o), C = l; C < x; C++)
                for (p = u; p < A; p++)
                  i = C * 4 * o + p * 4, e[i] = d, e[i + 1] = g, e[i + 2] = v, e[i + 3] = m;
        },
        /**
         * Indicate when the filter is not gonna apply changes to the image
         **/
        isNeutralState: function() {
          return this.blocksize === 1;
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, r) {
          return {
            uBlocksize: t.getUniformLocation(r, "uBlocksize"),
            uStepW: t.getUniformLocation(r, "uStepW"),
            uStepH: t.getUniformLocation(r, "uStepH")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, r) {
          t.uniform1f(r.uBlocksize, this.blocksize);
        }
      }
    ), n.Image.filters.Pixelate.fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.util.object.extend, a = n.Image.filters, t = n.util.createClass;
    a.RemoveColor = t(
      a.BaseFilter,
      /** @lends fabric.Image.filters.RemoveColor.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "RemoveColor",
        /**
         * Color to remove, in any format understood by fabric.Color.
         * @param {String} type
         * @default
         */
        color: "#FFFFFF",
        /**
         * Fragment source for the brightness program
         */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec4 uLow;
uniform vec4 uHigh;
varying vec2 vTexCoord;
void main() {
gl_FragColor = texture2D(uTexture, vTexCoord);
if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {
gl_FragColor.a = 0.0;
}
}`,
        /**
         * distance to actual color, as value up or down from each r,g,b
         * between 0 and 1
         **/
        distance: 0.02,
        /**
         * For color to remove inside distance, use alpha channel for a smoother deletion
         * NOT IMPLEMENTED YET
         **/
        useAlpha: !1,
        /**
         * Constructor
         * @memberOf fabric.Image.filters.RemoveWhite.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.color=#RRGGBB] Threshold value
         * @param {Number} [options.distance=10] Distance value
         */
        /**
         * Applies filter to canvas element
         * @param {Object} canvasEl Canvas element to apply filter to
         */
        applyTo2d: function(r) {
          var e = r.imageData, s = e.data, o, i = this.distance * 255, l, u, d, g = new n.Color(this.color).getSource(), v = [
            g[0] - i,
            g[1] - i,
            g[2] - i
          ], m = [
            g[0] + i,
            g[1] + i,
            g[2] + i
          ];
          for (o = 0; o < s.length; o += 4)
            l = s[o], u = s[o + 1], d = s[o + 2], l > v[0] && u > v[1] && d > v[2] && l < m[0] && u < m[1] && d < m[2] && (s[o + 3] = 0);
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(r, e) {
          return {
            uLow: r.getUniformLocation(e, "uLow"),
            uHigh: r.getUniformLocation(e, "uHigh")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(r, e) {
          var s = new n.Color(this.color).getSource(), o = parseFloat(this.distance), i = [
            0 + s[0] / 255 - o,
            0 + s[1] / 255 - o,
            0 + s[2] / 255 - o,
            1
          ], l = [
            s[0] / 255 + o,
            s[1] / 255 + o,
            s[2] / 255 + o,
            1
          ];
          r.uniform4fv(e.uLow, i), r.uniform4fv(e.uHigh, l);
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return h(this.callSuper("toObject"), {
            color: this.color,
            distance: this.distance
          });
        }
      }
    ), n.Image.filters.RemoveColor.fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.Image.filters, a = n.util.createClass, t = {
      Brownie: [
        0.5997,
        0.34553,
        -0.27082,
        0,
        0.186,
        -0.0377,
        0.86095,
        0.15059,
        0,
        -0.1449,
        0.24113,
        -0.07441,
        0.44972,
        0,
        -0.02965,
        0,
        0,
        0,
        1,
        0
      ],
      Vintage: [
        0.62793,
        0.32021,
        -0.03965,
        0,
        0.03784,
        0.02578,
        0.64411,
        0.03259,
        0,
        0.02926,
        0.0466,
        -0.08512,
        0.52416,
        0,
        0.02023,
        0,
        0,
        0,
        1,
        0
      ],
      Kodachrome: [
        1.12855,
        -0.39673,
        -0.03992,
        0,
        0.24991,
        -0.16404,
        1.08352,
        -0.05498,
        0,
        0.09698,
        -0.16786,
        -0.56034,
        1.60148,
        0,
        0.13972,
        0,
        0,
        0,
        1,
        0
      ],
      Technicolor: [
        1.91252,
        -0.85453,
        -0.09155,
        0,
        0.04624,
        -0.30878,
        1.76589,
        -0.10601,
        0,
        -0.27589,
        -0.2311,
        -0.75018,
        1.84759,
        0,
        0.12137,
        0,
        0,
        0,
        1,
        0
      ],
      Polaroid: [
        1.438,
        -0.062,
        -0.062,
        0,
        0,
        -0.122,
        1.378,
        -0.122,
        0,
        0,
        -0.016,
        -0.016,
        1.483,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ],
      Sepia: [
        0.393,
        0.769,
        0.189,
        0,
        0,
        0.349,
        0.686,
        0.168,
        0,
        0,
        0.272,
        0.534,
        0.131,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ],
      BlackWhite: [
        1.5,
        1.5,
        1.5,
        0,
        -1,
        1.5,
        1.5,
        1.5,
        0,
        -1,
        1.5,
        1.5,
        1.5,
        0,
        -1,
        0,
        0,
        0,
        1,
        0
      ]
    };
    for (var r in t)
      h[r] = a(
        h.ColorMatrix,
        /** @lends fabric.Image.filters.Sepia.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: r,
          /**
           * Colormatrix for the effect
           * array of 20 floats. Numbers in positions 4, 9, 14, 19 loose meaning
           * outside the -1, 1 range.
           * @param {Array} matrix array of 20 numbers.
           * @default
           */
          matrix: t[r],
          /**
           * Lock the matrix export for this kind of static, parameter less filters.
           */
          mainParameter: !1,
          /**
           * Lock the colormatrix on the color part, skipping alpha
           */
          colorsOnly: !0
        }
      ), n.Image.filters[r].fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric, h = n.Image.filters, a = n.util.createClass;
    h.BlendColor = a(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Blend.prototype */
      {
        type: "BlendColor",
        /**
         * Color to make the blend operation with. default to a reddish color since black or white
         * gives always strong result.
         * @type String
         * @default
         **/
        color: "#F95C63",
        /**
         * Blend mode for the filter: one of multiply, add, diff, screen, subtract,
         * darken, lighten, overlay, exclusion, tint.
         * @type String
         * @default
         **/
        mode: "multiply",
        /**
         * alpha value. represent the strength of the blend color operation.
         * @type Number
         * @default
         **/
        alpha: 1,
        /**
         * Fragment source for the Multiply program
         */
        fragmentSource: {
          multiply: `gl_FragColor.rgb *= uColor.rgb;
`,
          screen: `gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);
`,
          add: `gl_FragColor.rgb += uColor.rgb;
`,
          diff: `gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);
`,
          subtract: `gl_FragColor.rgb -= uColor.rgb;
`,
          lighten: `gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);
`,
          darken: `gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);
`,
          exclusion: `gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);
`,
          overlay: `if (uColor.r < 0.5) {
gl_FragColor.r *= 2.0 * uColor.r;
} else {
gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);
}
if (uColor.g < 0.5) {
gl_FragColor.g *= 2.0 * uColor.g;
} else {
gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);
}
if (uColor.b < 0.5) {
gl_FragColor.b *= 2.0 * uColor.b;
} else {
gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);
}
`,
          tint: `gl_FragColor.rgb *= (1.0 - uColor.a);
gl_FragColor.rgb += uColor.rgb;
`
        },
        /**
         * build the fragment source for the filters, joining the common part with
         * the specific one.
         * @param {String} mode the mode of the filter, a key of this.fragmentSource
         * @return {String} the source to be compiled
         * @private
         */
        buildSource: function(t) {
          return `precision highp float;
uniform sampler2D uTexture;
uniform vec4 uColor;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
gl_FragColor = color;
if (color.a > 0.0) {
` + this.fragmentSource[t] + `}
}`;
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(t) {
          var r = this.type + "_" + this.mode, e;
          return t.programCache.hasOwnProperty(r) || (e = this.buildSource(this.mode), t.programCache[r] = this.createProgram(t.context, e)), t.programCache[r];
        },
        /**
         * Apply the Blend operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(t) {
          var r = t.imageData, e = r.data, s = e.length, o, i, l, u, d, g, v, m = 1 - this.alpha;
          v = new n.Color(this.color).getSource(), o = v[0] * this.alpha, i = v[1] * this.alpha, l = v[2] * this.alpha;
          for (var C = 0; C < s; C += 4)
            switch (u = e[C], d = e[C + 1], g = e[C + 2], this.mode) {
              case "multiply":
                e[C] = u * o / 255, e[C + 1] = d * i / 255, e[C + 2] = g * l / 255;
                break;
              case "screen":
                e[C] = 255 - (255 - u) * (255 - o) / 255, e[C + 1] = 255 - (255 - d) * (255 - i) / 255, e[C + 2] = 255 - (255 - g) * (255 - l) / 255;
                break;
              case "add":
                e[C] = u + o, e[C + 1] = d + i, e[C + 2] = g + l;
                break;
              case "diff":
              case "difference":
                e[C] = Math.abs(u - o), e[C + 1] = Math.abs(d - i), e[C + 2] = Math.abs(g - l);
                break;
              case "subtract":
                e[C] = u - o, e[C + 1] = d - i, e[C + 2] = g - l;
                break;
              case "darken":
                e[C] = Math.min(u, o), e[C + 1] = Math.min(d, i), e[C + 2] = Math.min(g, l);
                break;
              case "lighten":
                e[C] = Math.max(u, o), e[C + 1] = Math.max(d, i), e[C + 2] = Math.max(g, l);
                break;
              case "overlay":
                e[C] = o < 128 ? 2 * u * o / 255 : 255 - 2 * (255 - u) * (255 - o) / 255, e[C + 1] = i < 128 ? 2 * d * i / 255 : 255 - 2 * (255 - d) * (255 - i) / 255, e[C + 2] = l < 128 ? 2 * g * l / 255 : 255 - 2 * (255 - g) * (255 - l) / 255;
                break;
              case "exclusion":
                e[C] = o + u - 2 * o * u / 255, e[C + 1] = i + d - 2 * i * d / 255, e[C + 2] = l + g - 2 * l * g / 255;
                break;
              case "tint":
                e[C] = o + u * m, e[C + 1] = i + d * m, e[C + 2] = l + g * m;
            }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, r) {
          return {
            uColor: t.getUniformLocation(r, "uColor")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, r) {
          var e = new n.Color(this.color).getSource();
          e[0] = this.alpha * e[0] / 255, e[1] = this.alpha * e[1] / 255, e[2] = this.alpha * e[2] / 255, e[3] = this.alpha, t.uniform4fv(r.uColor, e);
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return {
            type: this.type,
            color: this.color,
            mode: this.mode,
            alpha: this.alpha
          };
        }
      }
    ), n.Image.filters.BlendColor.fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric, h = n.Image.filters, a = n.util.createClass;
    h.BlendImage = a(
      h.BaseFilter,
      /** @lends fabric.Image.filters.BlendImage.prototype */
      {
        type: "BlendImage",
        /**
         * Color to make the blend operation with. default to a reddish color since black or white
         * gives always strong result.
         **/
        image: null,
        /**
         * Blend mode for the filter (one of "multiply", "mask")
         * @type String
         * @default
         **/
        mode: "multiply",
        /**
         * alpha value. represent the strength of the blend image operation.
         * not implemented.
         **/
        alpha: 1,
        vertexSource: `attribute vec2 aPosition;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
uniform mat3 uTransformMatrix;
void main() {
vTexCoord = aPosition;
vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
}`,
        /**
         * Fragment source for the Multiply program
         */
        fragmentSource: {
          multiply: `precision highp float;
uniform sampler2D uTexture;
uniform sampler2D uImage;
uniform vec4 uColor;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec4 color2 = texture2D(uImage, vTexCoord2);
color.rgba *= color2.rgba;
gl_FragColor = color;
}`,
          mask: `precision highp float;
uniform sampler2D uTexture;
uniform sampler2D uImage;
uniform vec4 uColor;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec4 color2 = texture2D(uImage, vTexCoord2);
color.a = color2.a;
gl_FragColor = color;
}`
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(t) {
          var r = this.type + "_" + this.mode, e = this.fragmentSource[this.mode];
          return t.programCache.hasOwnProperty(r) || (t.programCache[r] = this.createProgram(t.context, e)), t.programCache[r];
        },
        applyToWebGL: function(t) {
          var r = t.context, e = this.createTexture(t.filterBackend, this.image);
          this.bindAdditionalTexture(r, e, r.TEXTURE1), this.callSuper("applyToWebGL", t), this.unbindAdditionalTexture(r, r.TEXTURE1);
        },
        createTexture: function(t, r) {
          return t.getCachedTexture(r.cacheKey, r._element);
        },
        /**
         * Calculate a transformMatrix to adapt the image to blend over
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        calculateMatrix: function() {
          var t = this.image, r = t._element.width, e = t._element.height;
          return [
            1 / t.scaleX,
            0,
            0,
            0,
            1 / t.scaleY,
            0,
            -t.left / r,
            -t.top / e,
            1
          ];
        },
        /**
         * Apply the Blend operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(t) {
          var r = t.imageData, e = t.filterBackend.resources, s = r.data, o = s.length, i = r.width, l = r.height, u, d, g, v, m, C, p, x, A, k, W = this.image, N;
          e.blendImage || (e.blendImage = n.util.createCanvasElement()), A = e.blendImage, k = A.getContext("2d"), A.width !== i || A.height !== l ? (A.width = i, A.height = l) : k.clearRect(0, 0, i, l), k.setTransform(W.scaleX, 0, 0, W.scaleY, W.left, W.top), k.drawImage(W._element, 0, 0, i, l), N = k.getImageData(0, 0, i, l).data;
          for (var H = 0; H < o; H += 4)
            switch (m = s[H], C = s[H + 1], p = s[H + 2], x = s[H + 3], u = N[H], d = N[H + 1], g = N[H + 2], v = N[H + 3], this.mode) {
              case "multiply":
                s[H] = m * u / 255, s[H + 1] = C * d / 255, s[H + 2] = p * g / 255, s[H + 3] = x * v / 255;
                break;
              case "mask":
                s[H + 3] = v;
                break;
            }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, r) {
          return {
            uTransformMatrix: t.getUniformLocation(r, "uTransformMatrix"),
            uImage: t.getUniformLocation(r, "uImage")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, r) {
          var e = this.calculateMatrix();
          t.uniform1i(r.uImage, 1), t.uniformMatrix3fv(r.uTransformMatrix, !1, e);
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return {
            type: this.type,
            image: this.image && this.image.toObject(),
            mode: this.mode,
            alpha: this.alpha
          };
        }
      }
    ), n.Image.filters.BlendImage.fromObject = function(t, r) {
      n.Image.fromObject(t.image, function(e) {
        var s = n.util.object.clone(t);
        s.image = e, r(new n.Image.filters.BlendImage(s));
      });
    };
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = Math.pow, a = Math.floor, t = Math.sqrt, r = Math.abs, e = Math.round, s = Math.sin, o = Math.ceil, i = n.Image.filters, l = n.util.createClass;
    i.Resize = l(
      i.BaseFilter,
      /** @lends fabric.Image.filters.Resize.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Resize",
        /**
         * Resize type
         * for webgl resizeType is just lanczos, for canvas2d can be:
         * bilinear, hermite, sliceHack, lanczos.
         * @param {String} resizeType
         * @default
         */
        resizeType: "hermite",
        /**
         * Scale factor for resizing, x axis
         * @param {Number} scaleX
         * @default
         */
        scaleX: 1,
        /**
         * Scale factor for resizing, y axis
         * @param {Number} scaleY
         * @default
         */
        scaleY: 1,
        /**
         * LanczosLobes parameter for lanczos filter, valid for resizeType lanczos
         * @param {Number} lanczosLobes
         * @default
         */
        lanczosLobes: 3,
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(u, d) {
          return {
            uDelta: u.getUniformLocation(d, "uDelta"),
            uTaps: u.getUniformLocation(d, "uTaps")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(u, d) {
          u.uniform2fv(d.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]), u.uniform1fv(d.uTaps, this.taps);
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(u) {
          var d = this.getFilterWindow(), g = this.type + "_" + d;
          if (!u.programCache.hasOwnProperty(g)) {
            var v = this.generateShader(d);
            u.programCache[g] = this.createProgram(u.context, v);
          }
          return u.programCache[g];
        },
        getFilterWindow: function() {
          var u = this.tempScale;
          return Math.ceil(this.lanczosLobes / u);
        },
        getTaps: function() {
          for (var u = this.lanczosCreate(this.lanczosLobes), d = this.tempScale, g = this.getFilterWindow(), v = new Array(g), m = 1; m <= g; m++)
            v[m - 1] = u(m * d);
          return v;
        },
        /**
         * Generate vertex and shader sources from the necessary steps numbers
         * @param {Number} filterWindow
         */
        generateShader: function(v) {
          for (var d = new Array(v), g = this.fragmentSourceTOP, v, m = 1; m <= v; m++)
            d[m - 1] = m + ".0 * uDelta";
          return g += "uniform float uTaps[" + v + `];
`, g += `void main() {
`, g += `  vec4 color = texture2D(uTexture, vTexCoord);
`, g += `  float sum = 1.0;
`, d.forEach(function(C, p) {
            g += "  color += texture2D(uTexture, vTexCoord + " + C + ") * uTaps[" + p + `];
`, g += "  color += texture2D(uTexture, vTexCoord - " + C + ") * uTaps[" + p + `];
`, g += "  sum += 2.0 * uTaps[" + p + `];
`;
          }), g += `  gl_FragColor = color / sum;
`, g += "}", g;
        },
        fragmentSourceTOP: `precision highp float;
uniform sampler2D uTexture;
uniform vec2 uDelta;
varying vec2 vTexCoord;
`,
        /**
         * Apply the resize filter to the image
         * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be executed
         * @param {Boolean} options.webgl Whether to use webgl to render the filter.
         * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
         * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        applyTo: function(u) {
          u.webgl ? (u.passes++, this.width = u.sourceWidth, this.horizontal = !0, this.dW = Math.round(this.width * this.scaleX), this.dH = u.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), u.destinationWidth = this.dW, this._setupFrameBuffer(u), this.applyToWebGL(u), this._swapTextures(u), u.sourceWidth = u.destinationWidth, this.height = u.sourceHeight, this.horizontal = !1, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), u.destinationHeight = this.dH, this._setupFrameBuffer(u), this.applyToWebGL(u), this._swapTextures(u), u.sourceHeight = u.destinationHeight) : this.applyTo2d(u);
        },
        isNeutralState: function() {
          return this.scaleX === 1 && this.scaleY === 1;
        },
        lanczosCreate: function(u) {
          return function(d) {
            if (d >= u || d <= -u)
              return 0;
            if (d < 11920929e-14 && d > -11920929e-14)
              return 1;
            d *= Math.PI;
            var g = d / u;
            return s(d) / d * s(g) / g;
          };
        },
        /**
         * Applies filter to canvas element
         * @memberOf fabric.Image.filters.Resize.prototype
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} scaleX
         * @param {Number} scaleY
         */
        applyTo2d: function(u) {
          var d = u.imageData, g = this.scaleX, v = this.scaleY;
          this.rcpScaleX = 1 / g, this.rcpScaleY = 1 / v;
          var m = d.width, C = d.height, p = e(m * g), x = e(C * v), A;
          this.resizeType === "sliceHack" ? A = this.sliceByTwo(u, m, C, p, x) : this.resizeType === "hermite" ? A = this.hermiteFastResize(u, m, C, p, x) : this.resizeType === "bilinear" ? A = this.bilinearFiltering(u, m, C, p, x) : this.resizeType === "lanczos" && (A = this.lanczosResize(u, m, C, p, x)), u.imageData = A;
        },
        /**
         * Filter sliceByTwo
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
        sliceByTwo: function(u, d, g, v, m) {
          var C = u.imageData, p = 0.5, x = !1, A = !1, k = d * p, W = g * p, N = n.filterBackend.resources, H, z, K = 0, $ = 0, J = d, y = 0;
          for (N.sliceByTwo || (N.sliceByTwo = document.createElement("canvas")), H = N.sliceByTwo, (H.width < d * 1.5 || H.height < g) && (H.width = d * 1.5, H.height = g), z = H.getContext("2d"), z.clearRect(0, 0, d * 1.5, g), z.putImageData(C, 0, 0), v = a(v), m = a(m); !x || !A; )
            d = k, g = W, v < a(k * p) ? k = a(k * p) : (k = v, x = !0), m < a(W * p) ? W = a(W * p) : (W = m, A = !0), z.drawImage(H, K, $, d, g, J, y, k, W), K = J, $ = y, y += W;
          return z.getImageData(K, $, v, m);
        },
        /**
         * Filter lanczosResize
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
        lanczosResize: function(u, d, g, v, m) {
          function C(T) {
            var w, F, S, _, P, D, I, M, Y, U, q;
            for (y.x = (T + 0.5) * W, O.x = a(y.x), w = 0; w < m; w++) {
              for (y.y = (w + 0.5) * N, O.y = a(y.y), P = 0, D = 0, I = 0, M = 0, Y = 0, F = O.x - K; F <= O.x + K; F++)
                if (!(F < 0 || F >= d)) {
                  U = a(1e3 * r(F - y.x)), J[U] || (J[U] = {});
                  for (var j = O.y - $; j <= O.y + $; j++)
                    j < 0 || j >= g || (q = a(1e3 * r(j - y.y)), J[U][q] || (J[U][q] = k(t(h(U * H, 2) + h(q * z, 2)) / 1e3)), S = J[U][q], S > 0 && (_ = (j * d + F) * 4, P += S, D += S * p[_], I += S * p[_ + 1], M += S * p[_ + 2], Y += S * p[_ + 3]));
                }
              _ = (w * v + T) * 4, A[_] = D / P, A[_ + 1] = I / P, A[_ + 2] = M / P, A[_ + 3] = Y / P;
            }
            return ++T < v ? C(T) : x;
          }
          var p = u.imageData.data, x = u.ctx.createImageData(v, m), A = x.data, k = this.lanczosCreate(this.lanczosLobes), W = this.rcpScaleX, N = this.rcpScaleY, H = 2 / this.rcpScaleX, z = 2 / this.rcpScaleY, K = o(W * this.lanczosLobes / 2), $ = o(N * this.lanczosLobes / 2), J = {}, y = {}, O = {};
          return C(0);
        },
        /**
         * bilinearFiltering
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
        bilinearFiltering: function(u, d, g, v, m) {
          var C, p, x, A, k, W, N, H, z, K, $, J, y = 0, O, T = this.rcpScaleX, w = this.rcpScaleY, F = 4 * (d - 1), S = u.imageData, _ = S.data, P = u.ctx.createImageData(v, m), D = P.data;
          for (N = 0; N < m; N++)
            for (H = 0; H < v; H++)
              for (k = a(T * H), W = a(w * N), z = T * H - k, K = w * N - W, O = 4 * (W * d + k), $ = 0; $ < 4; $++)
                C = _[O + $], p = _[O + 4 + $], x = _[O + F + $], A = _[O + F + 4 + $], J = C * (1 - z) * (1 - K) + p * z * (1 - K) + x * K * (1 - z) + A * z * K, D[y++] = J;
          return P;
        },
        /**
         * hermiteFastResize
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
        hermiteFastResize: function(u, d, g, v, m) {
          for (var C = this.rcpScaleX, p = this.rcpScaleY, x = o(C / 2), A = o(p / 2), k = u.imageData, W = k.data, N = u.ctx.createImageData(v, m), H = N.data, z = 0; z < m; z++)
            for (var K = 0; K < v; K++) {
              for (var $ = (K + z * v) * 4, J = 0, y = 0, O = 0, T = 0, w = 0, F = 0, S = 0, _ = (z + 0.5) * p, P = a(z * p); P < (z + 1) * p; P++)
                for (var D = r(_ - (P + 0.5)) / A, I = (K + 0.5) * C, M = D * D, Y = a(K * C); Y < (K + 1) * C; Y++) {
                  var U = r(I - (Y + 0.5)) / x, q = t(M + U * U);
                  q > 1 && q < -1 || (J = 2 * q * q * q - 3 * q * q + 1, J > 0 && (U = 4 * (Y + P * d), S += J * W[U + 3], O += J, W[U + 3] < 255 && (J = J * W[U + 3] / 250), T += J * W[U], w += J * W[U + 1], F += J * W[U + 2], y += J));
                }
              H[$] = T / y, H[$ + 1] = w / y, H[$ + 2] = F / y, H[$ + 3] = S / O;
            }
          return N;
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return {
            type: this.type,
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            resizeType: this.resizeType,
            lanczosLobes: this.lanczosLobes
          };
        }
      }
    ), n.Image.filters.Resize.fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.Image.filters, a = n.util.createClass;
    h.Contrast = a(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Contrast.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Contrast",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uContrast;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
gl_FragColor = color;
}`,
        /**
         * contrast value, range from -1 to 1.
         * @param {Number} contrast
         * @default 0
         */
        contrast: 0,
        mainParameter: "contrast",
        /**
         * Constructor
         * @memberOf fabric.Image.filters.Contrast.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.contrast=0] Value to contrast the image up (-1...1)
         */
        /**
          * Apply the Contrast operation to a Uint8Array representing the pixels of an image.
          *
          * @param {Object} options
          * @param {ImageData} options.imageData The Uint8Array to be filtered.
          */
        applyTo2d: function(t) {
          if (this.contrast !== 0) {
            var r = t.imageData, e, o, s = r.data, o = s.length, i = Math.floor(this.contrast * 255), l = 259 * (i + 255) / (255 * (259 - i));
            for (e = 0; e < o; e += 4)
              s[e] = l * (s[e] - 128) + 128, s[e + 1] = l * (s[e + 1] - 128) + 128, s[e + 2] = l * (s[e + 2] - 128) + 128;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, r) {
          return {
            uContrast: t.getUniformLocation(r, "uContrast")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, r) {
          t.uniform1f(r.uContrast, this.contrast);
        }
      }
    ), n.Image.filters.Contrast.fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.Image.filters, a = n.util.createClass;
    h.Saturation = a(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Saturation.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Saturation",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uSaturation;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float rgMax = max(color.r, color.g);
float rgbMax = max(rgMax, color.b);
color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;
color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;
color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;
gl_FragColor = color;
}`,
        /**
         * Saturation value, from -1 to 1.
         * Increases/decreases the color saturation.
         * A value of 0 has no effect.
         * 
         * @param {Number} saturation
         * @default
         */
        saturation: 0,
        mainParameter: "saturation",
        /**
         * Constructor
         * @memberOf fabric.Image.filters.Saturate.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.saturate=0] Value to saturate the image (-1...1)
         */
        /**
         * Apply the Saturation operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(t) {
          if (this.saturation !== 0) {
            var r = t.imageData, e = r.data, s = e.length, o = -this.saturation, i, l;
            for (i = 0; i < s; i += 4)
              l = Math.max(e[i], e[i + 1], e[i + 2]), e[i] += l !== e[i] ? (l - e[i]) * o : 0, e[i + 1] += l !== e[i + 1] ? (l - e[i + 1]) * o : 0, e[i + 2] += l !== e[i + 2] ? (l - e[i + 2]) * o : 0;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, r) {
          return {
            uSaturation: t.getUniformLocation(r, "uSaturation")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, r) {
          t.uniform1f(r.uSaturation, -this.saturation);
        }
      }
    ), n.Image.filters.Saturation.fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.Image.filters, a = n.util.createClass;
    h.Vibrance = a(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Vibrance.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Vibrance",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uVibrance;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float max = max(color.r, max(color.g, color.b));
float avg = (color.r + color.g + color.b) / 3.0;
float amt = (abs(max - avg) * 2.0) * uVibrance;
color.r += max != color.r ? (max - color.r) * amt : 0.00;
color.g += max != color.g ? (max - color.g) * amt : 0.00;
color.b += max != color.b ? (max - color.b) * amt : 0.00;
gl_FragColor = color;
}`,
        /**
         * Vibrance value, from -1 to 1.
         * Increases/decreases the saturation of more muted colors with less effect on saturated colors.
         * A value of 0 has no effect.
         * 
         * @param {Number} vibrance
         * @default
         */
        vibrance: 0,
        mainParameter: "vibrance",
        /**
         * Constructor
         * @memberOf fabric.Image.filters.Vibrance.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.vibrance=0] Vibrance value for the image (between -1 and 1)
         */
        /**
         * Apply the Vibrance operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(t) {
          if (this.vibrance !== 0) {
            var r = t.imageData, e = r.data, s = e.length, o = -this.vibrance, i, l, u, d;
            for (i = 0; i < s; i += 4)
              l = Math.max(e[i], e[i + 1], e[i + 2]), u = (e[i] + e[i + 1] + e[i + 2]) / 3, d = Math.abs(l - u) * 2 / 255 * o, e[i] += l !== e[i] ? (l - e[i]) * d : 0, e[i + 1] += l !== e[i + 1] ? (l - e[i + 1]) * d : 0, e[i + 2] += l !== e[i + 2] ? (l - e[i + 2]) * d : 0;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, r) {
          return {
            uVibrance: t.getUniformLocation(r, "uVibrance")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, r) {
          t.uniform1f(r.uVibrance, -this.vibrance);
        }
      }
    ), n.Image.filters.Vibrance.fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.Image.filters, a = n.util.createClass;
    h.Blur = a(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Blur.prototype */
      {
        type: "Blur",
        /*
        'gl_FragColor = vec4(0.0);',
        'gl_FragColor += texture2D(texture, vTexCoord + -7 * uDelta)*0.0044299121055113265;',
        'gl_FragColor += texture2D(texture, vTexCoord + -6 * uDelta)*0.00895781211794;',
        'gl_FragColor += texture2D(texture, vTexCoord + -5 * uDelta)*0.0215963866053;',
        'gl_FragColor += texture2D(texture, vTexCoord + -4 * uDelta)*0.0443683338718;',
        'gl_FragColor += texture2D(texture, vTexCoord + -3 * uDelta)*0.0776744219933;',
        'gl_FragColor += texture2D(texture, vTexCoord + -2 * uDelta)*0.115876621105;',
        'gl_FragColor += texture2D(texture, vTexCoord + -1 * uDelta)*0.147308056121;',
        'gl_FragColor += texture2D(texture, vTexCoord              )*0.159576912161;',
        'gl_FragColor += texture2D(texture, vTexCoord + 1 * uDelta)*0.147308056121;',
        'gl_FragColor += texture2D(texture, vTexCoord + 2 * uDelta)*0.115876621105;',
        'gl_FragColor += texture2D(texture, vTexCoord + 3 * uDelta)*0.0776744219933;',
        'gl_FragColor += texture2D(texture, vTexCoord + 4 * uDelta)*0.0443683338718;',
        'gl_FragColor += texture2D(texture, vTexCoord + 5 * uDelta)*0.0215963866053;',
        'gl_FragColor += texture2D(texture, vTexCoord + 6 * uDelta)*0.00895781211794;',
        'gl_FragColor += texture2D(texture, vTexCoord + 7 * uDelta)*0.0044299121055113265;',
        */
        /* eslint-disable max-len */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec2 uDelta;
varying vec2 vTexCoord;
const float nSamples = 15.0;
vec3 v3offset = vec3(12.9898, 78.233, 151.7182);
float random(vec3 scale) {
return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);
}
void main() {
vec4 color = vec4(0.0);
float total = 0.0;
float offset = random(v3offset);
for (float t = -nSamples; t <= nSamples; t++) {
float percent = (t + offset - 0.5) / nSamples;
float weight = 1.0 - abs(percent);
color += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;
total += weight;
}
gl_FragColor = color / total;
}`,
        /* eslint-enable max-len */
        /**
         * blur value, in percentage of image dimensions.
         * specific to keep the image blur constant at different resolutions
         * range between 0 and 1.
         * @type Number
         * @default
         */
        blur: 0,
        mainParameter: "blur",
        applyTo: function(t) {
          t.webgl ? (this.aspectRatio = t.sourceWidth / t.sourceHeight, t.passes++, this._setupFrameBuffer(t), this.horizontal = !0, this.applyToWebGL(t), this._swapTextures(t), this._setupFrameBuffer(t), this.horizontal = !1, this.applyToWebGL(t), this._swapTextures(t)) : this.applyTo2d(t);
        },
        applyTo2d: function(t) {
          t.imageData = this.simpleBlur(t);
        },
        simpleBlur: function(t) {
          var r = t.filterBackend.resources, e, s, o = t.imageData.width, i = t.imageData.height;
          r.blurLayer1 || (r.blurLayer1 = n.util.createCanvasElement(), r.blurLayer2 = n.util.createCanvasElement()), e = r.blurLayer1, s = r.blurLayer2, (e.width !== o || e.height !== i) && (s.width = e.width = o, s.height = e.height = i);
          var l = e.getContext("2d"), u = s.getContext("2d"), d = 15, g, v, m, C, p = this.blur * 0.06 * 0.5;
          for (l.putImageData(t.imageData, 0, 0), u.clearRect(0, 0, o, i), C = -d; C <= d; C++)
            g = (Math.random() - 0.5) / 4, v = C / d, m = p * v * o + g, u.globalAlpha = 1 - Math.abs(v), u.drawImage(e, m, g), l.drawImage(s, 0, 0), u.globalAlpha = 1, u.clearRect(0, 0, s.width, s.height);
          for (C = -d; C <= d; C++)
            g = (Math.random() - 0.5) / 4, v = C / d, m = p * v * i + g, u.globalAlpha = 1 - Math.abs(v), u.drawImage(e, g, m), l.drawImage(s, 0, 0), u.globalAlpha = 1, u.clearRect(0, 0, s.width, s.height);
          t.ctx.drawImage(e, 0, 0);
          var x = t.ctx.getImageData(0, 0, e.width, e.height);
          return l.globalAlpha = 1, l.clearRect(0, 0, e.width, e.height), x;
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, r) {
          return {
            delta: t.getUniformLocation(r, "uDelta")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, r) {
          var e = this.chooseRightDelta();
          t.uniform2fv(r.delta, e);
        },
        /**
         * choose right value of image percentage to blur with
         * @returns {Array} a numeric array with delta values
         */
        chooseRightDelta: function() {
          var t = 1, r = [0, 0], e;
          return this.horizontal ? this.aspectRatio > 1 && (t = 1 / this.aspectRatio) : this.aspectRatio < 1 && (t = this.aspectRatio), e = t * this.blur * 0.12, this.horizontal ? r[0] = e : r[1] = e, r;
        }
      }
    ), h.Blur.fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.Image.filters, a = n.util.createClass;
    h.Gamma = a(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Gamma.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Gamma",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec3 uGamma;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec3 correction = (1.0 / uGamma);
color.r = pow(color.r, correction.r);
color.g = pow(color.g, correction.g);
color.b = pow(color.b, correction.b);
gl_FragColor = color;
gl_FragColor.rgb *= color.a;
}`,
        /**
         * Gamma array value, from 0.01 to 2.2.
         * @param {Array} gamma
         * @default
         */
        gamma: [1, 1, 1],
        /**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
        mainParameter: "gamma",
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(t) {
          this.gamma = [1, 1, 1], h.BaseFilter.prototype.initialize.call(this, t);
        },
        /**
         * Apply the Gamma operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
        applyTo2d: function(t) {
          var r = t.imageData, e = r.data, s = this.gamma, o = e.length, i = 1 / s[0], l = 1 / s[1], u = 1 / s[2], d;
          for (this.rVals || (this.rVals = new Uint8Array(256), this.gVals = new Uint8Array(256), this.bVals = new Uint8Array(256)), d = 0, o = 256; d < o; d++)
            this.rVals[d] = Math.pow(d / 255, i) * 255, this.gVals[d] = Math.pow(d / 255, l) * 255, this.bVals[d] = Math.pow(d / 255, u) * 255;
          for (d = 0, o = e.length; d < o; d += 4)
            e[d] = this.rVals[e[d]], e[d + 1] = this.gVals[e[d + 1]], e[d + 2] = this.bVals[e[d + 2]];
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(t, r) {
          return {
            uGamma: t.getUniformLocation(r, "uGamma")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(t, r) {
          t.uniform3fv(r.uGamma, this.gamma);
        }
      }
    ), n.Image.filters.Gamma.fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.Image.filters, a = n.util.createClass;
    h.Composed = a(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Composed.prototype */
      {
        type: "Composed",
        /**
         * A non sparse array of filters to apply
         */
        subFilters: [],
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(t) {
          this.callSuper("initialize", t), this.subFilters = this.subFilters.slice(0);
        },
        /**
         * Apply this container's filters to the input image provided.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be applied.
         */
        applyTo: function(t) {
          t.passes += this.subFilters.length - 1, this.subFilters.forEach(function(r) {
            r.applyTo(t);
          });
        },
        /**
         * Serialize this filter into JSON.
         *
         * @returns {Object} A JSON representation of this filter.
         */
        toObject: function() {
          return n.util.object.extend(this.callSuper("toObject"), {
            subFilters: this.subFilters.map(function(t) {
              return t.toObject();
            })
          });
        },
        isNeutralState: function() {
          return !this.subFilters.some(function(t) {
            return !t.isNeutralState();
          });
        }
      }
    ), n.Image.filters.Composed.fromObject = function(t, r) {
      var e = t.subFilters || [], s = e.map(function(i) {
        return new n.Image.filters[i.type](i);
      }), o = new n.Image.filters.Composed({ subFilters: s });
      return r && r(o), o;
    };
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.Image.filters, a = n.util.createClass;
    h.HueRotation = a(
      h.ColorMatrix,
      /** @lends fabric.Image.filters.HueRotation.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "HueRotation",
        /**
         * HueRotation value, from -1 to 1.
         * the unit is radians
         * @param {Number} myParameter
         * @default
         */
        rotation: 0,
        /**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
        mainParameter: "rotation",
        calculateMatrix: function() {
          var t = this.rotation * Math.PI, r = n.util.cos(t), e = n.util.sin(t), s = 1 / 3, o = Math.sqrt(s) * e, i = 1 - r;
          this.matrix = [
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0
          ], this.matrix[0] = r + i / 3, this.matrix[1] = s * i - o, this.matrix[2] = s * i + o, this.matrix[5] = s * i + o, this.matrix[6] = r + s * i, this.matrix[7] = s * i - o, this.matrix[10] = s * i - o, this.matrix[11] = s * i + o, this.matrix[12] = r + s * i;
        },
        /**
         * HueRotation isNeutralState implementation
         * Used only in image applyFilters to discard filters that will not have an effect
         * on the image
         * @param {Object} options
         **/
        isNeutralState: function(t) {
          return this.calculateMatrix(), h.BaseFilter.prototype.isNeutralState.call(this, t);
        },
        /**
         * Apply this filter to the input image data provided.
         *
         * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be executed
         * @param {Boolean} options.webgl Whether to use webgl to render the filter.
         * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
         * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        applyTo: function(t) {
          this.calculateMatrix(), h.BaseFilter.prototype.applyTo.call(this, t);
        }
      }
    ), n.Image.filters.HueRotation.fromObject = n.Image.filters.BaseFilter.fromObject;
  }(tt), function(c) {
    var n = c.fabric || (c.fabric = {}), h = n.util.object.clone;
    if (n.Text) {
      n.warn("fabric.Text is already defined");
      return;
    }
    var a = "fontFamily fontWeight fontSize text underline overline linethrough textAlign fontStyle lineHeight textBackgroundColor charSpacing styles direction path pathStartOffset pathSide pathAlign".split(" ");
    n.Text = n.util.createClass(
      n.Object,
      /** @lends fabric.Text.prototype */
      {
        /**
         * Properties which when set cause object to change dimensions
         * @type Array
         * @private
         */
        _dimensionAffectingProps: [
          "fontSize",
          "fontWeight",
          "fontFamily",
          "fontStyle",
          "lineHeight",
          "text",
          "charSpacing",
          "textAlign",
          "styles",
          "path",
          "pathStartOffset",
          "pathSide",
          "pathAlign"
        ],
        /**
         * @private
         */
        _reNewline: /\r?\n/,
        /**
         * Use this regular expression to filter for whitespaces that is not a new line.
         * Mostly used when text is 'justify' aligned.
         * @private
         */
        _reSpacesAndTabs: /[ \t\r]/g,
        /**
         * Use this regular expression to filter for whitespace that is not a new line.
         * Mostly used when text is 'justify' aligned.
         * @private
         */
        _reSpaceAndTab: /[ \t\r]/,
        /**
         * Use this regular expression to filter consecutive groups of non spaces.
         * Mostly used when text is 'justify' aligned.
         * @private
         */
        _reWords: /\S+/g,
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "text",
        /**
         * Font size (in pixels)
         * @type Number
         * @default
         */
        fontSize: 40,
        /**
         * Font weight (e.g. bold, normal, 400, 600, 800)
         * @type {(Number|String)}
         * @default
         */
        fontWeight: "normal",
        /**
         * Font family
         * @type String
         * @default
         */
        fontFamily: "Times New Roman",
        /**
         * Text decoration underline.
         * @type Boolean
         * @default
         */
        underline: !1,
        /**
         * Text decoration overline.
         * @type Boolean
         * @default
         */
        overline: !1,
        /**
         * Text decoration linethrough.
         * @type Boolean
         * @default
         */
        linethrough: !1,
        /**
         * Text alignment. Possible values: "left", "center", "right", "justify",
         * "justify-left", "justify-center" or "justify-right".
         * @type String
         * @default
         */
        textAlign: "left",
        /**
         * Font style . Possible values: "", "normal", "italic" or "oblique".
         * @type String
         * @default
         */
        fontStyle: "normal",
        /**
         * Line height
         * @type Number
         * @default
         */
        lineHeight: 1.16,
        /**
         * Superscript schema object (minimum overlap)
         * @type {Object}
         * @default
         */
        superscript: {
          size: 0.6,
          // fontSize factor
          baseline: -0.35
          // baseline-shift factor (upwards)
        },
        /**
         * Subscript schema object (minimum overlap)
         * @type {Object}
         * @default
         */
        subscript: {
          size: 0.6,
          // fontSize factor
          baseline: 0.11
          // baseline-shift factor (downwards)
        },
        /**
         * Background color of text lines
         * @type String
         * @default
         */
        textBackgroundColor: "",
        /**
         * List of properties to consider when checking if
         * state of an object is changed ({@link fabric.Object#hasStateChanged})
         * as well as for history (undo/redo) purposes
         * @type Array
         */
        stateProperties: n.Object.prototype.stateProperties.concat(a),
        /**
         * List of properties to consider when checking if cache needs refresh
         * @type Array
         */
        cacheProperties: n.Object.prototype.cacheProperties.concat(a),
        /**
         * When defined, an object is rendered via stroke and this property specifies its color.
         * <b>Backwards incompatibility note:</b> This property was named "strokeStyle" until v1.1.6
         * @type String
         * @default
         */
        stroke: null,
        /**
         * Shadow object representing shadow of this shape.
         * <b>Backwards incompatibility note:</b> This property was named "textShadow" (String) until v1.2.11
         * @type fabric.Shadow
         * @default
         */
        shadow: null,
        /**
         * fabric.Path that the text should follow.
         * since 4.6.0 the path will be drawn automatically.
         * if you want to make the path visible, give it a stroke and strokeWidth or fill value
         * if you want it to be hidden, assign visible = false to the path.
         * This feature is in BETA, and SVG import/export is not yet supported.
         * @type fabric.Path
         * @example
         * var textPath = new fabric.Text('Text on a path', {
         *     top: 150,
         *     left: 150,
         *     textAlign: 'center',
         *     charSpacing: -50,
         *     path: new fabric.Path('M 0 0 C 50 -100 150 -100 200 0', {
         *         strokeWidth: 1,
         *         visible: false
         *     }),
         *     pathSide: 'left',
         *     pathStartOffset: 0
         * });
         * @default
         */
        path: null,
        /**
         * Offset amount for text path starting position
         * Only used when text has a path
         * @type Number
         * @default
         */
        pathStartOffset: 0,
        /**
         * Which side of the path the text should be drawn on.
         * Only used when text has a path
         * @type {String} 'left|right'
         * @default
         */
        pathSide: "left",
        /**
         * How text is aligned to the path. This property determines
         * the perpendicular position of each character relative to the path.
         * (one of "baseline", "center", "ascender", "descender")
         * This feature is in BETA, and its behavior may change
         * @type String
         * @default
         */
        pathAlign: "baseline",
        /**
         * @private
         */
        _fontSizeFraction: 0.222,
        /**
         * @private
         */
        offsets: {
          underline: 0.1,
          linethrough: -0.315,
          overline: -0.88
        },
        /**
         * Text Line proportion to font Size (in pixels)
         * @type Number
         * @default
         */
        _fontSizeMult: 1.13,
        /**
         * additional space between characters
         * expressed in thousands of em unit
         * @type Number
         * @default
         */
        charSpacing: 0,
        /**
         * Object containing character styles - top-level properties -> line numbers,
         * 2nd-level properties - character numbers
         * @type Object
         * @default
         */
        styles: null,
        /**
         * Reference to a context to measure text char or couple of chars
         * the cacheContext of the canvas will be used or a freshly created one if the object is not on canvas
         * once created it will be referenced on fabric._measuringContext to avoid creating a canvas for every
         * text object created.
         * @type {CanvasRenderingContext2D}
         * @default
         */
        _measuringContext: null,
        /**
         * Baseline shift, styles only, keep at 0 for the main text object
         * @type {Number}
         * @default
         */
        deltaY: 0,
        /**
         * WARNING: EXPERIMENTAL. NOT SUPPORTED YET
         * determine the direction of the text.
         * This has to be set manually together with textAlign and originX for proper
         * experience.
         * some interesting link for the future
         * https://www.w3.org/International/questions/qa-bidi-unicode-controls
         * @since 4.5.0
         * @type {String} 'ltr|rtl'
         * @default
         */
        direction: "ltr",
        /**
         * Array of properties that define a style unit (of 'styles').
         * @type {Array}
         * @default
         */
        _styleProperties: [
          "stroke",
          "strokeWidth",
          "fill",
          "fontFamily",
          "fontSize",
          "fontWeight",
          "fontStyle",
          "underline",
          "overline",
          "linethrough",
          "deltaY",
          "textBackgroundColor"
        ],
        /**
         * contains characters bounding boxes
         */
        __charBounds: [],
        /**
         * use this size when measuring text. To avoid IE11 rounding errors
         * @type {Number}
         * @default
         * @readonly
         * @private
         */
        CACHE_FONT_SIZE: 400,
        /**
         * contains the min text width to avoid getting 0
         * @type {Number}
         * @default
         */
        MIN_TEXT_WIDTH: 2,
        /**
         * Constructor
         * @param {String} text Text string
         * @param {Object} [options] Options object
         * @return {fabric.Text} thisArg
         */
        initialize: function(t, r) {
          this.styles = r ? r.styles || {} : {}, this.text = t, this.__skipDimension = !0, this.callSuper("initialize", r), this.path && this.setPathInfo(), this.__skipDimension = !1, this.initDimensions(), this.setCoords(), this.setupState({ propertySet: "_dimensionAffectingProps" });
        },
        /**
         * If text has a path, it will add the extra information needed
         * for path and text calculations
         * @return {fabric.Text} thisArg
         */
        setPathInfo: function() {
          var t = this.path;
          t && (t.segmentsInfo = n.util.getPathSegmentsInfo(t.path));
        },
        /**
         * Return a context for measurement of text string.
         * if created it gets stored for reuse
         * this is for internal use, please do not use it
         * @private
         * @param {String} text Text string
         * @param {Object} [options] Options object
         * @return {fabric.Text} thisArg
         */
        getMeasuringContext: function() {
          return n._measuringContext || (n._measuringContext = this.canvas && this.canvas.contextCache || n.util.createCanvasElement().getContext("2d")), n._measuringContext;
        },
        /**
         * @private
         * Divides text into lines of text and lines of graphemes.
         */
        _splitText: function() {
          var t = this._splitTextIntoLines(this.text);
          return this.textLines = t.lines, this._textLines = t.graphemeLines, this._unwrappedTextLines = t._unwrappedLines, this._text = t.graphemeText, t;
        },
        /**
         * Initialize or update text dimensions.
         * Updates this.width and this.height with the proper values.
         * Does not return dimensions.
         */
        initDimensions: function() {
          this.__skipDimension || (this._splitText(), this._clearCache(), this.path ? (this.width = this.path.width, this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight()), this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.saveState({ propertySet: "_dimensionAffectingProps" }));
        },
        /**
         * Enlarge space boxes and shift the others
         */
        enlargeSpaces: function() {
          for (var t, r, e, s, o, i, l, u = 0, d = this._textLines.length; u < d; u++)
            if (!(this.textAlign !== "justify" && (u === d - 1 || this.isEndOfWrapping(u))) && (s = 0, o = this._textLines[u], r = this.getLineWidth(u), r < this.width && (l = this.textLines[u].match(this._reSpacesAndTabs)))) {
              e = l.length, t = (this.width - r) / e;
              for (var g = 0, v = o.length; g <= v; g++)
                i = this.__charBounds[u][g], this._reSpaceAndTab.test(o[g]) ? (i.width += t, i.kernedWidth += t, i.left += s, s += t) : i.left += s;
            }
        },
        /**
         * Detect if the text line is ended with an hard break
         * text and itext do not have wrapping, return false
         * @return {Boolean}
         */
        isEndOfWrapping: function(t) {
          return t === this._textLines.length - 1;
        },
        /**
         * Detect if a line has a linebreak and so we need to account for it when moving
         * and counting style.
         * It return always for text and Itext.
         * @return Number
         */
        missingNewlineOffset: function() {
          return 1;
        },
        /**
         * Returns string representation of an instance
         * @return {String} String representation of text object
         */
        toString: function() {
          return "#<fabric.Text (" + this.complexity() + '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>';
        },
        /**
         * Return the dimension and the zoom level needed to create a cache canvas
         * big enough to host the object to be cached.
         * @private
         * @param {Object} dim.x width of object to be cached
         * @param {Object} dim.y height of object to be cached
         * @return {Object}.width width of canvas
         * @return {Object}.height height of canvas
         * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
         */
        _getCacheCanvasDimensions: function() {
          var t = this.callSuper("_getCacheCanvasDimensions"), r = this.fontSize;
          return t.width += r * t.zoomX, t.height += r * t.zoomY, t;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(t) {
          var r = this.path;
          r && !r.isNotVisible() && r._render(t), this._setTextStyles(t), this._renderTextLinesBackground(t), this._renderTextDecoration(t, "underline"), this._renderText(t), this._renderTextDecoration(t, "overline"), this._renderTextDecoration(t, "linethrough");
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderText: function(t) {
          this.paintFirst === "stroke" ? (this._renderTextStroke(t), this._renderTextFill(t)) : (this._renderTextFill(t), this._renderTextStroke(t));
        },
        /**
         * Set the font parameter of the context with the object properties or with charStyle
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} [charStyle] object with font style properties
         * @param {String} [charStyle.fontFamily] Font Family
         * @param {Number} [charStyle.fontSize] Font size in pixels. ( without px suffix )
         * @param {String} [charStyle.fontWeight] Font weight
         * @param {String} [charStyle.fontStyle] Font style (italic|normal)
         */
        _setTextStyles: function(t, r, e) {
          if (t.textBaseline = "alphabetical", this.path)
            switch (this.pathAlign) {
              case "center":
                t.textBaseline = "middle";
                break;
              case "ascender":
                t.textBaseline = "top";
                break;
              case "descender":
                t.textBaseline = "bottom";
                break;
            }
          t.font = this._getFontDeclaration(r, e);
        },
        /**
         * calculate and return the text Width measuring each line.
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @return {Number} Maximum width of fabric.Text object
         */
        calcTextWidth: function() {
          for (var t = this.getLineWidth(0), r = 1, e = this._textLines.length; r < e; r++) {
            var s = this.getLineWidth(r);
            s > t && (t = s);
          }
          return t;
        },
        /**
         * @private
         * @param {String} method Method name ("fillText" or "strokeText")
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {String} line Text to render
         * @param {Number} left Left position of text
         * @param {Number} top Top position of text
         * @param {Number} lineIndex Index of a line in a text
         */
        _renderTextLine: function(t, r, e, s, o, i) {
          this._renderChars(t, r, e, s, o, i);
        },
        /**
         * Renders the text background for lines, taking care of style
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderTextLinesBackground: function(t) {
          if (!(!this.textBackgroundColor && !this.styleHas("textBackgroundColor"))) {
            for (var r, e, s = t.fillStyle, o, i, l = this._getLeftOffset(), u = this._getTopOffset(), d = 0, g = 0, v, m, C = this.path, p, x = 0, A = this._textLines.length; x < A; x++) {
              if (r = this.getHeightOfLine(x), !this.textBackgroundColor && !this.styleHas("textBackgroundColor", x)) {
                u += r;
                continue;
              }
              o = this._textLines[x], e = this._getLineLeftOffset(x), g = 0, d = 0, i = this.getValueOfPropertyAt(x, 0, "textBackgroundColor");
              for (var k = 0, W = o.length; k < W; k++)
                v = this.__charBounds[x][k], m = this.getValueOfPropertyAt(x, k, "textBackgroundColor"), C ? (t.save(), t.translate(v.renderLeft, v.renderTop), t.rotate(v.angle), t.fillStyle = m, m && t.fillRect(
                  -v.width / 2,
                  -r / this.lineHeight * (1 - this._fontSizeFraction),
                  v.width,
                  r / this.lineHeight
                ), t.restore()) : m !== i ? (p = l + e + d, this.direction === "rtl" && (p = this.width - p - g), t.fillStyle = i, i && t.fillRect(
                  p,
                  u,
                  g,
                  r / this.lineHeight
                ), d = v.left, g = v.width, i = m) : g += v.kernedWidth;
              m && !C && (p = l + e + d, this.direction === "rtl" && (p = this.width - p - g), t.fillStyle = m, t.fillRect(
                p,
                u,
                g,
                r / this.lineHeight
              )), u += r;
            }
            t.fillStyle = s, this._removeShadow(t);
          }
        },
        /**
         * @private
         * @param {Object} decl style declaration for cache
         * @param {String} decl.fontFamily fontFamily
         * @param {String} decl.fontStyle fontStyle
         * @param {String} decl.fontWeight fontWeight
         * @return {Object} reference to cache
         */
        getFontCache: function(t) {
          var r = t.fontFamily.toLowerCase();
          n.charWidthsCache[r] || (n.charWidthsCache[r] = {});
          var e = n.charWidthsCache[r], s = t.fontStyle.toLowerCase() + "_" + (t.fontWeight + "").toLowerCase();
          return e[s] || (e[s] = {}), e[s];
        },
        /**
         * measure and return the width of a single character.
         * possibly overridden to accommodate different measure logic or
         * to hook some external lib for character measurement
         * @private
         * @param {String} _char, char to be measured
         * @param {Object} charStyle style of char to be measured
         * @param {String} [previousChar] previous char
         * @param {Object} [prevCharStyle] style of previous char
         */
        _measureChar: function(t, r, e, s) {
          var o = this.getFontCache(r), i = this._getFontDeclaration(r), l = this._getFontDeclaration(s), u = e + t, d = i === l, g, v, m, C = r.fontSize / this.CACHE_FONT_SIZE, p;
          if (e && o[e] !== void 0 && (m = o[e]), o[t] !== void 0 && (p = g = o[t]), d && o[u] !== void 0 && (v = o[u], p = v - m), g === void 0 || m === void 0 || v === void 0) {
            var x = this.getMeasuringContext();
            this._setTextStyles(x, r, !0);
          }
          return g === void 0 && (p = g = x.measureText(t).width, o[t] = g), m === void 0 && d && e && (m = x.measureText(e).width, o[e] = m), d && v === void 0 && (v = x.measureText(u).width, o[u] = v, p = v - m), { width: g * C, kernedWidth: p * C };
        },
        /**
         * Computes height of character at given position
         * @param {Number} line the line index number
         * @param {Number} _char the character index number
         * @return {Number} fontSize of the character
         */
        getHeightOfChar: function(t, r) {
          return this.getValueOfPropertyAt(t, r, "fontSize");
        },
        /**
         * measure a text line measuring all characters.
         * @param {Number} lineIndex line number
         * @return {Number} Line width
         */
        measureLine: function(t) {
          var r = this._measureLine(t);
          return this.charSpacing !== 0 && (r.width -= this._getWidthOfCharSpacing()), r.width < 0 && (r.width = 0), r;
        },
        /**
         * measure every grapheme of a line, populating __charBounds
         * @param {Number} lineIndex
         * @return {Object} object.width total width of characters
         * @return {Object} object.widthOfSpaces length of chars that match this._reSpacesAndTabs
         */
        _measureLine: function(t) {
          var r = 0, e, s, o = this._textLines[t], i, l, u = 0, d = new Array(o.length), g = 0, v, m, C = this.path, p = this.pathSide === "right";
          for (this.__charBounds[t] = d, e = 0; e < o.length; e++)
            s = o[e], l = this._getGraphemeBox(s, t, e, i), d[e] = l, r += l.kernedWidth, i = s;
          if (d[e] = {
            left: l ? l.left + l.width : 0,
            width: 0,
            kernedWidth: 0,
            height: this.fontSize
          }, C) {
            switch (m = C.segmentsInfo[C.segmentsInfo.length - 1].length, v = n.util.getPointOnPath(C.path, 0, C.segmentsInfo), v.x += C.pathOffset.x, v.y += C.pathOffset.y, this.textAlign) {
              case "left":
                g = p ? m - r : 0;
                break;
              case "center":
                g = (m - r) / 2;
                break;
              case "right":
                g = p ? 0 : m - r;
                break;
            }
            for (g += this.pathStartOffset * (p ? -1 : 1), e = p ? o.length - 1 : 0; p ? e >= 0 : e < o.length; p ? e-- : e++)
              l = d[e], g > m ? g %= m : g < 0 && (g += m), this._setGraphemeOnPath(g, l, v), g += l.kernedWidth;
          }
          return { width: r, numOfSpaces: u };
        },
        /**
         * Calculate the angle  and the left,top position of the char that follow a path.
         * It appends it to graphemeInfo to be reused later at rendering
         * @private
         * @param {Number} positionInPath to be measured
         * @param {Object} graphemeInfo current grapheme box information
         * @param {Object} startingPoint position of the point
         */
        _setGraphemeOnPath: function(t, r, e) {
          var s = t + r.kernedWidth / 2, o = this.path, i = n.util.getPointOnPath(o.path, s, o.segmentsInfo);
          r.renderLeft = i.x - e.x, r.renderTop = i.y - e.y, r.angle = i.angle + (this.pathSide === "right" ? Math.PI : 0);
        },
        /**
         * Measure and return the info of a single grapheme.
         * needs the the info of previous graphemes already filled
         * @private
         * @param {String} grapheme to be measured
         * @param {Number} lineIndex index of the line where the char is
         * @param {Number} charIndex position in the line
         * @param {String} [prevGrapheme] character preceding the one to be measured
         */
        _getGraphemeBox: function(t, r, e, s, o) {
          var i = this.getCompleteStyleDeclaration(r, e), l = s ? this.getCompleteStyleDeclaration(r, e - 1) : {}, u = this._measureChar(t, i, s, l), d = u.kernedWidth, g = u.width, v;
          this.charSpacing !== 0 && (v = this._getWidthOfCharSpacing(), g += v, d += v);
          var m = {
            width: g,
            left: 0,
            height: i.fontSize,
            kernedWidth: d,
            deltaY: i.deltaY
          };
          if (e > 0 && !o) {
            var C = this.__charBounds[r][e - 1];
            m.left = C.left + C.width + u.kernedWidth - u.width;
          }
          return m;
        },
        /**
         * Calculate height of line at 'lineIndex'
         * @param {Number} lineIndex index of line to calculate
         * @return {Number}
         */
        getHeightOfLine: function(t) {
          if (this.__lineHeights[t])
            return this.__lineHeights[t];
          for (var r = this._textLines[t], e = this.getHeightOfChar(t, 0), s = 1, o = r.length; s < o; s++)
            e = Math.max(this.getHeightOfChar(t, s), e);
          return this.__lineHeights[t] = e * this.lineHeight * this._fontSizeMult;
        },
        /**
         * Calculate text box height
         */
        calcTextHeight: function() {
          for (var t, r = 0, e = 0, s = this._textLines.length; e < s; e++)
            t = this.getHeightOfLine(e), r += e === s - 1 ? t / this.lineHeight : t;
          return r;
        },
        /**
         * @private
         * @return {Number} Left offset
         */
        _getLeftOffset: function() {
          return this.direction === "ltr" ? -this.width / 2 : this.width / 2;
        },
        /**
         * @private
         * @return {Number} Top offset
         */
        _getTopOffset: function() {
          return -this.height / 2;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {String} method Method name ("fillText" or "strokeText")
         */
        _renderTextCommon: function(t, r) {
          t.save();
          for (var e = 0, s = this._getLeftOffset(), o = this._getTopOffset(), i = 0, l = this._textLines.length; i < l; i++) {
            var u = this.getHeightOfLine(i), d = u / this.lineHeight, g = this._getLineLeftOffset(i);
            this._renderTextLine(
              r,
              t,
              this._textLines[i],
              s + g,
              o + e + d,
              i
            ), e += u;
          }
          t.restore();
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderTextFill: function(t) {
          !this.fill && !this.styleHas("fill") || this._renderTextCommon(t, "fillText");
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderTextStroke: function(t) {
          (!this.stroke || this.strokeWidth === 0) && this.isEmptyStyles() || (this.shadow && !this.shadow.affectStroke && this._removeShadow(t), t.save(), this._setLineDash(t, this.strokeDashArray), t.beginPath(), this._renderTextCommon(t, "strokeText"), t.closePath(), t.restore());
        },
        /**
         * @private
         * @param {String} method fillText or strokeText.
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Array} line Content of the line, splitted in an array by grapheme
         * @param {Number} left
         * @param {Number} top
         * @param {Number} lineIndex
         */
        _renderChars: function(t, r, e, s, o, i) {
          var l = this.getHeightOfLine(i), u = this.textAlign.indexOf("justify") !== -1, d, g, v = "", m, C = 0, p, x = this.path, A = !u && this.charSpacing === 0 && this.isEmptyStyles(i) && !x, k = this.direction === "ltr", W = this.direction === "ltr" ? 1 : -1, N, H = r.canvas.getAttribute("dir");
          if (r.save(), H !== this.direction && (r.canvas.setAttribute("dir", k ? "ltr" : "rtl"), r.direction = k ? "ltr" : "rtl", r.textAlign = k ? "left" : "right"), o -= l * this._fontSizeFraction / this.lineHeight, A) {
            this._renderChar(t, r, i, 0, e.join(""), s, o, l), r.restore();
            return;
          }
          for (var z = 0, K = e.length - 1; z <= K; z++)
            p = z === K || this.charSpacing || x, v += e[z], m = this.__charBounds[i][z], C === 0 ? (s += W * (m.kernedWidth - m.width), C += m.width) : C += m.kernedWidth, u && !p && this._reSpaceAndTab.test(e[z]) && (p = !0), p || (d = d || this.getCompleteStyleDeclaration(i, z), g = this.getCompleteStyleDeclaration(i, z + 1), p = n.util.hasStyleChanged(d, g, !1)), p && (x ? (r.save(), r.translate(m.renderLeft, m.renderTop), r.rotate(m.angle), this._renderChar(t, r, i, z, v, -C / 2, 0, l), r.restore()) : (N = s, this._renderChar(t, r, i, z, v, N, o, l)), v = "", d = g, s += W * C, C = 0);
          r.restore();
        },
        /**
         * This function try to patch the missing gradientTransform on canvas gradients.
         * transforming a context to transform the gradient, is going to transform the stroke too.
         * we want to transform the gradient but not the stroke operation, so we create
         * a transformed gradient on a pattern and then we use the pattern instead of the gradient.
         * this method has drawbacks: is slow, is in low resolution, needs a patch for when the size
         * is limited.
         * @private
         * @param {fabric.Gradient} filler a fabric gradient instance
         * @return {CanvasPattern} a pattern to use as fill/stroke style
         */
        _applyPatternGradientTransformText: function(t) {
          var r = n.util.createCanvasElement(), e, s = this.width + this.strokeWidth, o = this.height + this.strokeWidth;
          return r.width = s, r.height = o, e = r.getContext("2d"), e.beginPath(), e.moveTo(0, 0), e.lineTo(s, 0), e.lineTo(s, o), e.lineTo(0, o), e.closePath(), e.translate(s / 2, o / 2), e.fillStyle = t.toLive(e), this._applyPatternGradientTransform(e, t), e.fill(), e.createPattern(r, "no-repeat");
        },
        handleFiller: function(t, r, e) {
          var s, o;
          return e.toLive ? e.gradientUnits === "percentage" || e.gradientTransform || e.patternTransform ? (s = -this.width / 2, o = -this.height / 2, t.translate(s, o), t[r] = this._applyPatternGradientTransformText(e), { offsetX: s, offsetY: o }) : (t[r] = e.toLive(t, this), this._applyPatternGradientTransform(t, e)) : (t[r] = e, { offsetX: 0, offsetY: 0 });
        },
        _setStrokeStyles: function(t, r) {
          return t.lineWidth = r.strokeWidth, t.lineCap = this.strokeLineCap, t.lineDashOffset = this.strokeDashOffset, t.lineJoin = this.strokeLineJoin, t.miterLimit = this.strokeMiterLimit, this.handleFiller(t, "strokeStyle", r.stroke);
        },
        _setFillStyles: function(t, r) {
          return this.handleFiller(t, "fillStyle", r.fill);
        },
        /**
         * @private
         * @param {String} method
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @param {String} _char
         * @param {Number} left Left coordinate
         * @param {Number} top Top coordinate
         * @param {Number} lineHeight Height of the line
         */
        _renderChar: function(t, r, e, s, o, i, l) {
          var u = this._getStyleDeclaration(e, s), d = this.getCompleteStyleDeclaration(e, s), g = t === "fillText" && d.fill, v = t === "strokeText" && d.stroke && d.strokeWidth, m, C;
          !v && !g || (r.save(), g && (m = this._setFillStyles(r, d)), v && (C = this._setStrokeStyles(r, d)), r.font = this._getFontDeclaration(d), u && u.textBackgroundColor && this._removeShadow(r), u && u.deltaY && (l += u.deltaY), g && r.fillText(o, i - m.offsetX, l - m.offsetY), v && r.strokeText(o, i - C.offsetX, l - C.offsetY), r.restore());
        },
        /**
         * Turns the character into a 'superior figure' (i.e. 'superscript')
         * @param {Number} start selection start
         * @param {Number} end selection end
         * @returns {fabric.Text} thisArg
         * @chainable
         */
        setSuperscript: function(t, r) {
          return this._setScript(t, r, this.superscript);
        },
        /**
         * Turns the character into an 'inferior figure' (i.e. 'subscript')
         * @param {Number} start selection start
         * @param {Number} end selection end
         * @returns {fabric.Text} thisArg
         * @chainable
         */
        setSubscript: function(t, r) {
          return this._setScript(t, r, this.subscript);
        },
        /**
         * Applies 'schema' at given position
         * @private
         * @param {Number} start selection start
         * @param {Number} end selection end
         * @param {Number} schema
         * @returns {fabric.Text} thisArg
         * @chainable
         */
        _setScript: function(t, r, e) {
          var s = this.get2DCursorLocation(t, !0), o = this.getValueOfPropertyAt(s.lineIndex, s.charIndex, "fontSize"), i = this.getValueOfPropertyAt(s.lineIndex, s.charIndex, "deltaY"), l = { fontSize: o * e.size, deltaY: i + o * e.baseline };
          return this.setSelectionStyles(l, t, r), this;
        },
        /**
         * @private
         * @param {Number} lineIndex index text line
         * @return {Number} Line left offset
         */
        _getLineLeftOffset: function(t) {
          var r = this.getLineWidth(t), e = this.width - r, s = this.textAlign, o = this.direction, l, i = 0, l = this.isEndOfWrapping(t);
          return s === "justify" || s === "justify-center" && !l || s === "justify-right" && !l || s === "justify-left" && !l ? 0 : (s === "center" && (i = e / 2), s === "right" && (i = e), s === "justify-center" && (i = e / 2), s === "justify-right" && (i = e), o === "rtl" && (i -= e), i);
        },
        /**
         * @private
         */
        _clearCache: function() {
          this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = [];
        },
        /**
         * @private
         */
        _shouldClearDimensionCache: function() {
          var t = this._forceClearCache;
          return t || (t = this.hasStateChanged("_dimensionAffectingProps")), t && (this.dirty = !0, this._forceClearCache = !1), t;
        },
        /**
         * Measure a single line given its index. Used to calculate the initial
         * text bounding box. The values are calculated and stored in __lineWidths cache.
         * @private
         * @param {Number} lineIndex line number
         * @return {Number} Line width
         */
        getLineWidth: function(t) {
          if (this.__lineWidths[t] !== void 0)
            return this.__lineWidths[t];
          var r = this.measureLine(t), e = r.width;
          return this.__lineWidths[t] = e, e;
        },
        _getWidthOfCharSpacing: function() {
          return this.charSpacing !== 0 ? this.fontSize * this.charSpacing / 1e3 : 0;
        },
        /**
         * Retrieves the value of property at given character position
         * @param {Number} lineIndex the line number
         * @param {Number} charIndex the character number
         * @param {String} property the property name
         * @returns the value of 'property'
         */
        getValueOfPropertyAt: function(t, r, e) {
          var s = this._getStyleDeclaration(t, r);
          return s && typeof s[e] < "u" ? s[e] : this[e];
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderTextDecoration: function(t, r) {
          if (!(!this[r] && !this.styleHas(r))) {
            for (var e, s, o, i, l, u, d, g, v = this._getLeftOffset(), m = this._getTopOffset(), C, p, x, A, k, W, N, H, z = this.path, K = this._getWidthOfCharSpacing(), $ = this.offsets[r], J = 0, y = this._textLines.length; J < y; J++) {
              if (e = this.getHeightOfLine(J), !this[r] && !this.styleHas(r, J)) {
                m += e;
                continue;
              }
              d = this._textLines[J], W = e / this.lineHeight, i = this._getLineLeftOffset(J), p = 0, x = 0, g = this.getValueOfPropertyAt(J, 0, r), H = this.getValueOfPropertyAt(J, 0, "fill"), C = m + W * (1 - this._fontSizeFraction), s = this.getHeightOfChar(J, 0), l = this.getValueOfPropertyAt(J, 0, "deltaY");
              for (var O = 0, T = d.length; O < T; O++)
                if (A = this.__charBounds[J][O], k = this.getValueOfPropertyAt(J, O, r), N = this.getValueOfPropertyAt(J, O, "fill"), o = this.getHeightOfChar(J, O), u = this.getValueOfPropertyAt(J, O, "deltaY"), z && k && N)
                  t.save(), t.fillStyle = H, t.translate(A.renderLeft, A.renderTop), t.rotate(A.angle), t.fillRect(
                    -A.kernedWidth / 2,
                    $ * o + u,
                    A.kernedWidth,
                    this.fontSize / 15
                  ), t.restore();
                else if ((k !== g || N !== H || o !== s || u !== l) && x > 0) {
                  var w = v + i + p;
                  this.direction === "rtl" && (w = this.width - w - x), g && H && (t.fillStyle = H, t.fillRect(
                    w,
                    C + $ * s + l,
                    x,
                    this.fontSize / 15
                  )), p = A.left, x = A.width, g = k, H = N, s = o, l = u;
                } else
                  x += A.kernedWidth;
              var w = v + i + p;
              this.direction === "rtl" && (w = this.width - w - x), t.fillStyle = N, k && N && t.fillRect(
                w,
                C + $ * s + l,
                x - K,
                this.fontSize / 15
              ), m += e;
            }
            this._removeShadow(t);
          }
        },
        /**
         * return font declaration string for canvas context
         * @param {Object} [styleObject] object
         * @returns {String} font declaration formatted for canvas context.
         */
        _getFontDeclaration: function(t, r) {
          var e = t || this, s = this.fontFamily, o = n.Text.genericFonts.indexOf(s.toLowerCase()) > -1, i = s === void 0 || s.indexOf("'") > -1 || s.indexOf(",") > -1 || s.indexOf('"') > -1 || o ? e.fontFamily : '"' + e.fontFamily + '"';
          return [
            // node-canvas needs "weight style", while browsers need "style weight"
            // verify if this can be fixed in JSDOM
            n.isLikelyNode ? e.fontWeight : e.fontStyle,
            n.isLikelyNode ? e.fontStyle : e.fontWeight,
            r ? this.CACHE_FONT_SIZE + "px" : e.fontSize + "px",
            i
          ].join(" ");
        },
        /**
         * Renders text instance on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        render: function(t) {
          this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._shouldClearDimensionCache() && this.initDimensions(), this.callSuper("render", t)));
        },
        /**
         * Returns the text as an array of lines.
         * @param {String} text text to split
         * @returns {Array} Lines in the text
         */
        _splitTextIntoLines: function(t) {
          for (var r = t.split(this._reNewline), e = new Array(r.length), s = [`
`], o = [], i = 0; i < r.length; i++)
            e[i] = n.util.string.graphemeSplit(r[i]), o = o.concat(e[i], s);
          return o.pop(), { _unwrappedLines: e, lines: r, graphemeText: o, graphemeLines: e };
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toObject: function(t) {
          var r = a.concat(t), e = this.callSuper("toObject", r);
          return e.styles = n.util.stylesToArray(this.styles, this.text), e.path && (e.path = this.path.toObject()), e;
        },
        /**
         * Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.
         * @param {String|Object} key Property name or object (if object, iterate over the object properties)
         * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
         * @return {fabric.Object} thisArg
         * @chainable
         */
        set: function(t, r) {
          this.callSuper("set", t, r);
          var e = !1, s = !1;
          if (typeof t == "object")
            for (var o in t)
              o === "path" && this.setPathInfo(), e = e || this._dimensionAffectingProps.indexOf(o) !== -1, s = s || o === "path";
          else
            e = this._dimensionAffectingProps.indexOf(t) !== -1, s = t === "path";
          return s && this.setPathInfo(), e && (this.initDimensions(), this.setCoords()), this;
        },
        /**
         * Returns complexity of an instance
         * @return {Number} complexity
         */
        complexity: function() {
          return 1;
        }
      }
    ), n.Text.ATTRIBUTE_NAMES = n.SHARED_ATTRIBUTES.concat(
      "x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(" ")
    ), n.Text.DEFAULT_SVG_FONT_SIZE = 16, n.Text.fromElement = function(t, r, e) {
      if (!t)
        return r(null);
      var s = n.parseAttributes(t, n.Text.ATTRIBUTE_NAMES), o = s.textAnchor || "left";
      if (e = n.util.object.extend(e ? h(e) : {}, s), e.top = e.top || 0, e.left = e.left || 0, s.textDecoration) {
        var i = s.textDecoration;
        i.indexOf("underline") !== -1 && (e.underline = !0), i.indexOf("overline") !== -1 && (e.overline = !0), i.indexOf("line-through") !== -1 && (e.linethrough = !0), delete e.textDecoration;
      }
      "dx" in s && (e.left += s.dx), "dy" in s && (e.top += s.dy), "fontSize" in e || (e.fontSize = n.Text.DEFAULT_SVG_FONT_SIZE);
      var l = "";
      "textContent" in t ? l = t.textContent : "firstChild" in t && t.firstChild !== null && "data" in t.firstChild && t.firstChild.data !== null && (l = t.firstChild.data), l = l.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " ");
      var u = e.strokeWidth;
      e.strokeWidth = 0;
      var d = new n.Text(l, e), g = d.getScaledHeight() / d.height, v = (d.height + d.strokeWidth) * d.lineHeight - d.height, m = v * g, C = d.getScaledHeight() + m, p = 0;
      o === "center" && (p = d.getScaledWidth() / 2), o === "right" && (p = d.getScaledWidth()), d.set({
        left: d.left - p,
        top: d.top - (C - d.fontSize * (0.07 + d._fontSizeFraction)) / d.lineHeight,
        strokeWidth: typeof u < "u" ? u : 1
      }), r(d);
    }, n.Text.fromObject = function(t, r) {
      var e = h(t), s = t.path;
      return delete e.path, n.Object._fromObject("Text", e, function(o) {
        o.styles = n.util.stylesFromArray(t.styles, t.text), s ? n.Object._fromObject("Path", s, function(i) {
          o.set("path", i), r(o);
        }, "path") : r(o);
      }, "text");
    }, n.Text.genericFonts = ["sans-serif", "serif", "cursive", "fantasy", "monospace"], n.util.createAccessors && n.util.createAccessors(n.Text);
  }(tt), function() {
    f.util.object.extend(
      f.Text.prototype,
      /** @lends fabric.Text.prototype */
      {
        /**
         * Returns true if object has no styling or no styling in a line
         * @param {Number} lineIndex , lineIndex is on wrapped lines.
         * @return {Boolean}
         */
        isEmptyStyles: function(c) {
          if (!this.styles || typeof c < "u" && !this.styles[c])
            return !0;
          var n = typeof c > "u" ? this.styles : { line: this.styles[c] };
          for (var h in n)
            for (var a in n[h])
              for (var t in n[h][a])
                return !1;
          return !0;
        },
        /**
         * Returns true if object has a style property or has it ina specified line
         * This function is used to detect if a text will use a particular property or not.
         * @param {String} property to check for
         * @param {Number} lineIndex to check the style on
         * @return {Boolean}
         */
        styleHas: function(c, n) {
          if (!this.styles || !c || c === "" || typeof n < "u" && !this.styles[n])
            return !1;
          var h = typeof n > "u" ? this.styles : { 0: this.styles[n] };
          for (var a in h)
            for (var t in h[a])
              if (typeof h[a][t][c] < "u")
                return !0;
          return !1;
        },
        /**
         * Check if characters in a text have a value for a property
         * whose value matches the textbox's value for that property.  If so,
         * the character-level property is deleted.  If the character
         * has no other properties, then it is also deleted.  Finally,
         * if the line containing that character has no other characters
         * then it also is deleted.
         *
         * @param {string} property The property to compare between characters and text.
         */
        cleanStyle: function(c) {
          if (!this.styles || !c || c === "")
            return !1;
          var n = this.styles, h = 0, a, t, r = !0, e = 0, s;
          for (var o in n) {
            a = 0;
            for (var i in n[o]) {
              var s = n[o][i], l = s.hasOwnProperty(c);
              h++, l ? (t ? s[c] !== t && (r = !1) : t = s[c], s[c] === this[c] && delete s[c]) : r = !1, Object.keys(s).length !== 0 ? a++ : delete n[o][i];
            }
            a === 0 && delete n[o];
          }
          for (var u = 0; u < this._textLines.length; u++)
            e += this._textLines[u].length;
          r && h === e && (this[c] = t, this.removeStyle(c));
        },
        /**
         * Remove a style property or properties from all individual character styles
         * in a text object.  Deletes the character style object if it contains no other style
         * props.  Deletes a line style object if it contains no other character styles.
         *
         * @param {String} props The property to remove from character styles.
         */
        removeStyle: function(c) {
          if (!(!this.styles || !c || c === "")) {
            var n = this.styles, h, a, t;
            for (a in n) {
              h = n[a];
              for (t in h)
                delete h[t][c], Object.keys(h[t]).length === 0 && delete h[t];
              Object.keys(h).length === 0 && delete n[a];
            }
          }
        },
        /**
         * @private
         */
        _extendStyles: function(c, n) {
          var h = this.get2DCursorLocation(c);
          this._getLineStyle(h.lineIndex) || this._setLineStyle(h.lineIndex), this._getStyleDeclaration(h.lineIndex, h.charIndex) || this._setStyleDeclaration(h.lineIndex, h.charIndex, {}), f.util.object.extend(this._getStyleDeclaration(h.lineIndex, h.charIndex), n);
        },
        /**
         * Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)
         * @param {Number} [selectionStart] Optional index. When not given, current selectionStart is used.
         * @param {Boolean} [skipWrapping] consider the location for unwrapped lines. useful to manage styles.
         */
        get2DCursorLocation: function(c, n) {
          typeof c > "u" && (c = this.selectionStart);
          for (var h = n ? this._unwrappedTextLines : this._textLines, a = h.length, t = 0; t < a; t++) {
            if (c <= h[t].length)
              return {
                lineIndex: t,
                charIndex: c
              };
            c -= h[t].length + this.missingNewlineOffset(t);
          }
          return {
            lineIndex: t - 1,
            charIndex: h[t - 1].length < c ? h[t - 1].length : c
          };
        },
        /**
         * Gets style of a current selection/cursor (at the start position)
         * if startIndex or endIndex are not provided, selectionStart or selectionEnd will be used.
         * @param {Number} [startIndex] Start index to get styles at
         * @param {Number} [endIndex] End index to get styles at, if not specified selectionEnd or startIndex + 1
         * @param {Boolean} [complete] get full style or not
         * @return {Array} styles an array with one, zero or more Style objects
         */
        getSelectionStyles: function(c, n, h) {
          typeof c > "u" && (c = this.selectionStart || 0), typeof n > "u" && (n = this.selectionEnd || c);
          for (var a = [], t = c; t < n; t++)
            a.push(this.getStyleAtPosition(t, h));
          return a;
        },
        /**
         * Gets style of a current selection/cursor position
         * @param {Number} position  to get styles at
         * @param {Boolean} [complete] full style if true
         * @return {Object} style Style object at a specified index
         * @private
         */
        getStyleAtPosition: function(c, n) {
          var h = this.get2DCursorLocation(c), a = n ? this.getCompleteStyleDeclaration(h.lineIndex, h.charIndex) : this._getStyleDeclaration(h.lineIndex, h.charIndex);
          return a || {};
        },
        /**
         * Sets style of a current selection, if no selection exist, do not set anything.
         * @param {Object} [styles] Styles object
         * @param {Number} [startIndex] Start index to get styles at
         * @param {Number} [endIndex] End index to get styles at, if not specified selectionEnd or startIndex + 1
         * @return {fabric.IText} thisArg
         * @chainable
         */
        setSelectionStyles: function(c, n, h) {
          typeof n > "u" && (n = this.selectionStart || 0), typeof h > "u" && (h = this.selectionEnd || n);
          for (var a = n; a < h; a++)
            this._extendStyles(a, c);
          return this._forceClearCache = !0, this;
        },
        /**
         * get the reference, not a clone, of the style object for a given character
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @return {Object} style object
         */
        _getStyleDeclaration: function(c, n) {
          var h = this.styles && this.styles[c];
          return h ? h[n] : null;
        },
        /**
         * return a new object that contains all the style property for a character
         * the object returned is newly created
         * @param {Number} lineIndex of the line where the character is
         * @param {Number} charIndex position of the character on the line
         * @return {Object} style object
         */
        getCompleteStyleDeclaration: function(c, n) {
          for (var h = this._getStyleDeclaration(c, n) || {}, a = {}, t, r = 0; r < this._styleProperties.length; r++)
            t = this._styleProperties[r], a[t] = typeof h[t] > "u" ? this[t] : h[t];
          return a;
        },
        /**
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @param {Object} style
         * @private
         */
        _setStyleDeclaration: function(c, n, h) {
          this.styles[c][n] = h;
        },
        /**
         *
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @private
         */
        _deleteStyleDeclaration: function(c, n) {
          delete this.styles[c][n];
        },
        /**
         * @param {Number} lineIndex
         * @return {Boolean} if the line exists or not
         * @private
         */
        _getLineStyle: function(c) {
          return !!this.styles[c];
        },
        /**
         * Set the line style to an empty object so that is initialized
         * @param {Number} lineIndex
         * @private
         */
        _setLineStyle: function(c) {
          this.styles[c] = {};
        },
        /**
         * @param {Number} lineIndex
         * @private
         */
        _deleteLineStyle: function(c) {
          delete this.styles[c];
        }
      }
    );
  }(), function() {
    function c(n) {
      n.textDecoration && (n.textDecoration.indexOf("underline") > -1 && (n.underline = !0), n.textDecoration.indexOf("line-through") > -1 && (n.linethrough = !0), n.textDecoration.indexOf("overline") > -1 && (n.overline = !0), delete n.textDecoration);
    }
    f.IText = f.util.createClass(
      f.Text,
      f.Observable,
      /** @lends fabric.IText.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "i-text",
        /**
         * Index where text selection starts (or where cursor is when there is no selection)
         * @type Number
         * @default
         */
        selectionStart: 0,
        /**
         * Index where text selection ends
         * @type Number
         * @default
         */
        selectionEnd: 0,
        /**
         * Color of text selection
         * @type String
         * @default
         */
        selectionColor: "rgba(17,119,255,0.3)",
        /**
         * Indicates whether text is in editing mode
         * @type Boolean
         * @default
         */
        isEditing: !1,
        /**
         * Indicates whether a text can be edited
         * @type Boolean
         * @default
         */
        editable: !0,
        /**
         * Border color of text object while it's in editing mode
         * @type String
         * @default
         */
        editingBorderColor: "rgba(102,153,255,0.25)",
        /**
         * Width of cursor (in px)
         * @type Number
         * @default
         */
        cursorWidth: 2,
        /**
         * Color of text cursor color in editing mode.
         * if not set (default) will take color from the text.
         * if set to a color value that fabric can understand, it will
         * be used instead of the color of the text at the current position.
         * @type String
         * @default
         */
        cursorColor: "",
        /**
         * Delay between cursor blink (in ms)
         * @type Number
         * @default
         */
        cursorDelay: 1e3,
        /**
         * Duration of cursor fadein (in ms)
         * @type Number
         * @default
         */
        cursorDuration: 600,
        /**
         * Indicates whether internal text char widths can be cached
         * @type Boolean
         * @default
         */
        caching: !0,
        /**
         * DOM container to append the hiddenTextarea.
         * An alternative to attaching to the document.body.
         * Useful to reduce laggish redraw of the full document.body tree and
         * also with modals event capturing that won't let the textarea take focus.
         * @type HTMLElement
         * @default
         */
        hiddenTextareaContainer: null,
        /**
         * @private
         */
        _reSpace: /\s|\n/,
        /**
         * @private
         */
        _currentCursorOpacity: 0,
        /**
         * @private
         */
        _selectionDirection: null,
        /**
         * @private
         */
        _abortCursorAnimation: !1,
        /**
         * @private
         */
        __widthOfSpace: [],
        /**
         * Helps determining when the text is in composition, so that the cursor
         * rendering is altered.
         */
        inCompositionMode: !1,
        /**
         * Constructor
         * @param {String} text Text string
         * @param {Object} [options] Options object
         * @return {fabric.IText} thisArg
         */
        initialize: function(n, h) {
          this.callSuper("initialize", n, h), this.initBehavior();
        },
        /**
         * Sets selection start (left boundary of a selection)
         * @param {Number} index Index to set selection start to
         */
        setSelectionStart: function(n) {
          n = Math.max(n, 0), this._updateAndFire("selectionStart", n);
        },
        /**
         * Sets selection end (right boundary of a selection)
         * @param {Number} index Index to set selection end to
         */
        setSelectionEnd: function(n) {
          n = Math.min(n, this.text.length), this._updateAndFire("selectionEnd", n);
        },
        /**
         * @private
         * @param {String} property 'selectionStart' or 'selectionEnd'
         * @param {Number} index new position of property
         */
        _updateAndFire: function(n, h) {
          this[n] !== h && (this._fireSelectionChanged(), this[n] = h), this._updateTextarea();
        },
        /**
         * Fires the even of selection changed
         * @private
         */
        _fireSelectionChanged: function() {
          this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", { target: this });
        },
        /**
         * Initialize text dimensions. Render all text on given context
         * or on a offscreen canvas to get the text width with measureText.
         * Updates this.width and this.height with the proper values.
         * Does not return dimensions.
         * @private
         */
        initDimensions: function() {
          this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this.callSuper("initDimensions");
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        render: function(n) {
          this.clearContextTop(), this.callSuper("render", n), this.cursorOffsetCache = {}, this.renderCursorOrSelection();
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(n) {
          this.callSuper("_render", n);
        },
        /**
         * Prepare and clean the contextTop
         */
        clearContextTop: function(n) {
          if (!(!this.isEditing || !this.canvas || !this.canvas.contextTop)) {
            var h = this.canvas.contextTop, a = this.canvas.viewportTransform;
            h.save(), h.transform(a[0], a[1], a[2], a[3], a[4], a[5]), this.transform(h), this._clearTextArea(h), n || h.restore();
          }
        },
        /**
         * Renders cursor or selection (depending on what exists)
         * it does on the contextTop. If contextTop is not available, do nothing.
         */
        renderCursorOrSelection: function() {
          if (!(!this.isEditing || !this.canvas || !this.canvas.contextTop)) {
            var n = this._getCursorBoundaries(), h = this.canvas.contextTop;
            this.clearContextTop(!0), this.selectionStart === this.selectionEnd ? this.renderCursor(n, h) : this.renderSelection(n, h), h.restore();
          }
        },
        _clearTextArea: function(n) {
          var h = this.width + 4, a = this.height + 4;
          n.clearRect(-h / 2, -a / 2, h, a);
        },
        /**
         * Returns cursor boundaries (left, top, leftOffset, topOffset)
         * @private
         * @param {Array} chars Array of characters
         * @param {String} typeOfBoundaries
         */
        _getCursorBoundaries: function(n) {
          typeof n > "u" && (n = this.selectionStart);
          var h = this._getLeftOffset(), a = this._getTopOffset(), t = this._getCursorBoundariesOffsets(n);
          return {
            left: h,
            top: a,
            leftOffset: t.left,
            topOffset: t.top
          };
        },
        /**
         * @private
         */
        _getCursorBoundariesOffsets: function(n) {
          if (this.cursorOffsetCache && "top" in this.cursorOffsetCache)
            return this.cursorOffsetCache;
          var h, a, t, r = 0, e = 0, s, o = this.get2DCursorLocation(n);
          t = o.charIndex, a = o.lineIndex;
          for (var i = 0; i < a; i++)
            r += this.getHeightOfLine(i);
          h = this._getLineLeftOffset(a);
          var l = this.__charBounds[a][t];
          return l && (e = l.left), this.charSpacing !== 0 && t === this._textLines[a].length && (e -= this._getWidthOfCharSpacing()), s = {
            top: r,
            left: h + (e > 0 ? e : 0)
          }, this.direction === "rtl" && (s.left *= -1), this.cursorOffsetCache = s, this.cursorOffsetCache;
        },
        /**
         * Renders cursor
         * @param {Object} boundaries
         * @param {CanvasRenderingContext2D} ctx transformed context to draw on
         */
        renderCursor: function(n, h) {
          var a = this.get2DCursorLocation(), t = a.lineIndex, r = a.charIndex > 0 ? a.charIndex - 1 : 0, e = this.getValueOfPropertyAt(t, r, "fontSize"), s = this.scaleX * this.canvas.getZoom(), o = this.cursorWidth / s, i = n.topOffset, l = this.getValueOfPropertyAt(t, r, "deltaY");
          i += (1 - this._fontSizeFraction) * this.getHeightOfLine(t) / this.lineHeight - e * (1 - this._fontSizeFraction), this.inCompositionMode && this.renderSelection(n, h), h.fillStyle = this.cursorColor || this.getValueOfPropertyAt(t, r, "fill"), h.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity, h.fillRect(
            n.left + n.leftOffset - o / 2,
            i + n.top + l,
            o,
            e
          );
        },
        /**
         * Renders text selection
         * @param {Object} boundaries Object with left/top/leftOffset/topOffset
         * @param {CanvasRenderingContext2D} ctx transformed context to draw on
         */
        renderSelection: function(n, h) {
          for (var a = this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, t = this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd, r = this.textAlign.indexOf("justify") !== -1, e = this.get2DCursorLocation(a), s = this.get2DCursorLocation(t), o = e.lineIndex, i = s.lineIndex, l = e.charIndex < 0 ? 0 : e.charIndex, u = s.charIndex < 0 ? 0 : s.charIndex, d = o; d <= i; d++) {
            var g = this._getLineLeftOffset(d) || 0, v = this.getHeightOfLine(d), m = 0, C = 0, p = 0;
            if (d === o && (C = this.__charBounds[o][l].left), d >= o && d < i)
              p = r && !this.isEndOfWrapping(d) ? this.width : this.getLineWidth(d) || 5;
            else if (d === i)
              if (u === 0)
                p = this.__charBounds[i][u].left;
              else {
                var x = this._getWidthOfCharSpacing();
                p = this.__charBounds[i][u - 1].left + this.__charBounds[i][u - 1].width - x;
              }
            m = v, (this.lineHeight < 1 || d === i && this.lineHeight > 1) && (v /= this.lineHeight);
            var A = n.left + g + C, k = p - C, W = v, N = 0;
            this.inCompositionMode ? (h.fillStyle = this.compositionColor || "black", W = 1, N = v) : h.fillStyle = this.selectionColor, this.direction === "rtl" && (A = this.width - A - k), h.fillRect(
              A,
              n.top + n.topOffset + N,
              k,
              W
            ), n.topOffset += m;
          }
        },
        /**
         * High level function to know the height of the cursor.
         * the currentChar is the one that precedes the cursor
         * Returns fontSize of char at the current cursor
         * Unused from the library, is for the end user
         * @return {Number} Character font size
         */
        getCurrentCharFontSize: function() {
          var n = this._getCurrentCharIndex();
          return this.getValueOfPropertyAt(n.l, n.c, "fontSize");
        },
        /**
         * High level function to know the color of the cursor.
         * the currentChar is the one that precedes the cursor
         * Returns color (fill) of char at the current cursor
         * if the text object has a pattern or gradient for filler, it will return that.
         * Unused by the library, is for the end user
         * @return {String | fabric.Gradient | fabric.Pattern} Character color (fill)
         */
        getCurrentCharColor: function() {
          var n = this._getCurrentCharIndex();
          return this.getValueOfPropertyAt(n.l, n.c, "fill");
        },
        /**
         * Returns the cursor position for the getCurrent.. functions
         * @private
         */
        _getCurrentCharIndex: function() {
          var n = this.get2DCursorLocation(this.selectionStart, !0), h = n.charIndex > 0 ? n.charIndex - 1 : 0;
          return { l: n.lineIndex, c: h };
        }
      }
    ), f.IText.fromObject = function(n, h) {
      var a = f.util.stylesFromArray(n.styles, n.text), t = Object.assign({}, n, { styles: a });
      if (c(t), t.styles)
        for (var r in t.styles)
          for (var e in t.styles[r])
            c(t.styles[r][e]);
      f.Object._fromObject("IText", t, h, "text");
    };
  }(), function() {
    var c = f.util.object.clone;
    f.util.object.extend(
      f.IText.prototype,
      /** @lends fabric.IText.prototype */
      {
        /**
         * Initializes all the interactive behavior of IText
         */
        initBehavior: function() {
          this.initAddedHandler(), this.initRemovedHandler(), this.initCursorSelectionHandlers(), this.initDoubleClickSimulation(), this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        },
        onDeselect: function() {
          this.isEditing && this.exitEditing(), this.selected = !1;
        },
        /**
         * Initializes "added" event handler
         */
        initAddedHandler: function() {
          var n = this;
          this.on("added", function() {
            var h = n.canvas;
            h && (h._hasITextHandlers || (h._hasITextHandlers = !0, n._initCanvasHandlers(h)), h._iTextInstances = h._iTextInstances || [], h._iTextInstances.push(n));
          });
        },
        initRemovedHandler: function() {
          var n = this;
          this.on("removed", function() {
            var h = n.canvas;
            h && (h._iTextInstances = h._iTextInstances || [], f.util.removeFromArray(h._iTextInstances, n), h._iTextInstances.length === 0 && (h._hasITextHandlers = !1, n._removeCanvasHandlers(h)));
          });
        },
        /**
         * register canvas event to manage exiting on other instances
         * @private
         */
        _initCanvasHandlers: function(n) {
          n._mouseUpITextHandler = function() {
            n._iTextInstances && n._iTextInstances.forEach(function(h) {
              h.__isMousedown = !1;
            });
          }, n.on("mouse:up", n._mouseUpITextHandler);
        },
        /**
         * remove canvas event to manage exiting on other instances
         * @private
         */
        _removeCanvasHandlers: function(n) {
          n.off("mouse:up", n._mouseUpITextHandler);
        },
        /**
         * @private
         */
        _tick: function() {
          this._currentTickState = this._animateCursor(this, 1, this.cursorDuration, "_onTickComplete");
        },
        /**
         * @private
         */
        _animateCursor: function(n, h, a, t) {
          var r;
          return r = {
            isAborted: !1,
            abort: function() {
              this.isAborted = !0;
            }
          }, n.animate("_currentCursorOpacity", h, {
            duration: a,
            onComplete: function() {
              r.isAborted || n[t]();
            },
            onChange: function() {
              n.canvas && n.selectionStart === n.selectionEnd && n.renderCursorOrSelection();
            },
            abort: function() {
              return r.isAborted;
            }
          }), r;
        },
        /**
         * @private
         */
        _onTickComplete: function() {
          var n = this;
          this._cursorTimeout1 && clearTimeout(this._cursorTimeout1), this._cursorTimeout1 = setTimeout(function() {
            n._currentTickCompleteState = n._animateCursor(n, 0, this.cursorDuration / 2, "_tick");
          }, 100);
        },
        /**
         * Initializes delayed cursor
         */
        initDelayedCursor: function(n) {
          var h = this, a = n ? 0 : this.cursorDelay;
          this.abortCursorAnimation(), this._currentCursorOpacity = 1, this._cursorTimeout2 = setTimeout(function() {
            h._tick();
          }, a);
        },
        /**
         * Aborts cursor animation and clears all timeouts
         */
        abortCursorAnimation: function() {
          var n = this._currentTickState || this._currentTickCompleteState, h = this.canvas;
          this._currentTickState && this._currentTickState.abort(), this._currentTickCompleteState && this._currentTickCompleteState.abort(), clearTimeout(this._cursorTimeout1), clearTimeout(this._cursorTimeout2), this._currentCursorOpacity = 0, n && h && h.clearContext(h.contextTop || h.contextContainer);
        },
        /**
         * Selects entire text
         * @return {fabric.IText} thisArg
         * @chainable
         */
        selectAll: function() {
          return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this;
        },
        /**
         * Returns selected text
         * @return {String}
         */
        getSelectedText: function() {
          return this._text.slice(this.selectionStart, this.selectionEnd).join("");
        },
        /**
         * Find new selection index representing start of current word according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
        findWordBoundaryLeft: function(n) {
          var h = 0, a = n - 1;
          if (this._reSpace.test(this._text[a]))
            for (; this._reSpace.test(this._text[a]); )
              h++, a--;
          for (; /\S/.test(this._text[a]) && a > -1; )
            h++, a--;
          return n - h;
        },
        /**
         * Find new selection index representing end of current word according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
        findWordBoundaryRight: function(n) {
          var h = 0, a = n;
          if (this._reSpace.test(this._text[a]))
            for (; this._reSpace.test(this._text[a]); )
              h++, a++;
          for (; /\S/.test(this._text[a]) && a < this._text.length; )
            h++, a++;
          return n + h;
        },
        /**
         * Find new selection index representing start of current line according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
        findLineBoundaryLeft: function(n) {
          for (var h = 0, a = n - 1; !/\n/.test(this._text[a]) && a > -1; )
            h++, a--;
          return n - h;
        },
        /**
         * Find new selection index representing end of current line according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
        findLineBoundaryRight: function(n) {
          for (var h = 0, a = n; !/\n/.test(this._text[a]) && a < this._text.length; )
            h++, a++;
          return n + h;
        },
        /**
         * Finds index corresponding to beginning or end of a word
         * @param {Number} selectionStart Index of a character
         * @param {Number} direction 1 or -1
         * @return {Number} Index of the beginning or end of a word
         */
        searchWordBoundary: function(n, h) {
          for (var a = this._text, t = this._reSpace.test(a[n]) ? n - 1 : n, r = a[t], e = f.reNonWord; !e.test(r) && t > 0 && t < a.length; )
            t += h, r = a[t];
          return e.test(r) && (t += h === 1 ? 0 : 1), t;
        },
        /**
         * Selects a word based on the index
         * @param {Number} selectionStart Index of a character
         */
        selectWord: function(n) {
          n = n || this.selectionStart;
          var h = this.searchWordBoundary(n, -1), a = this.searchWordBoundary(n, 1);
          this.selectionStart = h, this.selectionEnd = a, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
        },
        /**
         * Selects a line based on the index
         * @param {Number} selectionStart Index of a character
         * @return {fabric.IText} thisArg
         * @chainable
         */
        selectLine: function(n) {
          n = n || this.selectionStart;
          var h = this.findLineBoundaryLeft(n), a = this.findLineBoundaryRight(n);
          return this.selectionStart = h, this.selectionEnd = a, this._fireSelectionChanged(), this._updateTextarea(), this;
        },
        /**
         * Enters editing state
         * @return {fabric.IText} thisArg
         * @chainable
         */
        enterEditing: function(n) {
          if (!(this.isEditing || !this.editable))
            return this.canvas && (this.canvas.calcOffset(), this.exitEditingOnOthers(this.canvas)), this.isEditing = !0, this.initHiddenTextarea(n), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick(), this.fire("editing:entered"), this._fireSelectionChanged(), this.canvas ? (this.canvas.fire("text:editing:entered", { target: this }), this.initMouseMoveHandler(), this.canvas.requestRenderAll(), this) : this;
        },
        exitEditingOnOthers: function(n) {
          n._iTextInstances && n._iTextInstances.forEach(function(h) {
            h.selected = !1, h.isEditing && h.exitEditing();
          });
        },
        /**
         * Initializes "mousemove" event handler
         */
        initMouseMoveHandler: function() {
          this.canvas.on("mouse:move", this.mouseMoveHandler);
        },
        /**
         * @private
         */
        mouseMoveHandler: function(n) {
          if (!(!this.__isMousedown || !this.isEditing)) {
            document.activeElement !== this.hiddenTextarea && this.hiddenTextarea.focus();
            var h = this.getSelectionStartFromPointer(n.e), a = this.selectionStart, t = this.selectionEnd;
            (h !== this.__selectionStartOnMouseDown || a === t) && (a === h || t === h) || (h > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = h) : (this.selectionStart = h, this.selectionEnd = this.__selectionStartOnMouseDown), (this.selectionStart !== a || this.selectionEnd !== t) && (this.restartCursorIfNeeded(), this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
          }
        },
        /**
         * @private
         */
        _setEditingProps: function() {
          this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = !1, this.lockMovementX = this.lockMovementY = !0;
        },
        /**
         * convert from textarea to grapheme indexes
         */
        fromStringToGraphemeSelection: function(n, h, a) {
          var t = a.slice(0, n), r = f.util.string.graphemeSplit(t).length;
          if (n === h)
            return { selectionStart: r, selectionEnd: r };
          var e = a.slice(n, h), s = f.util.string.graphemeSplit(e).length;
          return { selectionStart: r, selectionEnd: r + s };
        },
        /**
         * convert from fabric to textarea values
         */
        fromGraphemeToStringSelection: function(n, h, a) {
          var t = a.slice(0, n), r = t.join("").length;
          if (n === h)
            return { selectionStart: r, selectionEnd: r };
          var e = a.slice(n, h), s = e.join("").length;
          return { selectionStart: r, selectionEnd: r + s };
        },
        /**
         * @private
         */
        _updateTextarea: function() {
          if (this.cursorOffsetCache = {}, !!this.hiddenTextarea) {
            if (!this.inCompositionMode) {
              var n = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
              this.hiddenTextarea.selectionStart = n.selectionStart, this.hiddenTextarea.selectionEnd = n.selectionEnd;
            }
            this.updateTextareaPosition();
          }
        },
        /**
         * @private
         */
        updateFromTextArea: function() {
          if (this.hiddenTextarea) {
            this.cursorOffsetCache = {}, this.text = this.hiddenTextarea.value, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords());
            var n = this.fromStringToGraphemeSelection(
              this.hiddenTextarea.selectionStart,
              this.hiddenTextarea.selectionEnd,
              this.hiddenTextarea.value
            );
            this.selectionEnd = this.selectionStart = n.selectionEnd, this.inCompositionMode || (this.selectionStart = n.selectionStart), this.updateTextareaPosition();
          }
        },
        /**
         * @private
         */
        updateTextareaPosition: function() {
          if (this.selectionStart === this.selectionEnd) {
            var n = this._calcTextareaPosition();
            this.hiddenTextarea.style.left = n.left, this.hiddenTextarea.style.top = n.top;
          }
        },
        /**
         * @private
         * @return {Object} style contains style for hiddenTextarea
         */
        _calcTextareaPosition: function() {
          if (!this.canvas)
            return { x: 1, y: 1 };
          var n = this.inCompositionMode ? this.compositionStart : this.selectionStart, h = this._getCursorBoundaries(n), a = this.get2DCursorLocation(n), t = a.lineIndex, r = a.charIndex, e = this.getValueOfPropertyAt(t, r, "fontSize") * this.lineHeight, s = h.leftOffset, o = this.calcTransformMatrix(), i = {
            x: h.left + s,
            y: h.top + h.topOffset + e
          }, l = this.canvas.getRetinaScaling(), u = this.canvas.upperCanvasEl, d = u.width / l, g = u.height / l, v = d - e, m = g - e, C = u.clientWidth / d, p = u.clientHeight / g;
          return i = f.util.transformPoint(i, o), i = f.util.transformPoint(i, this.canvas.viewportTransform), i.x *= C, i.y *= p, i.x < 0 && (i.x = 0), i.x > v && (i.x = v), i.y < 0 && (i.y = 0), i.y > m && (i.y = m), i.x += this.canvas._offset.left, i.y += this.canvas._offset.top, { left: i.x + "px", top: i.y + "px", fontSize: e + "px", charHeight: e };
        },
        /**
         * @private
         */
        _saveEditingProps: function() {
          this._savedProps = {
            hasControls: this.hasControls,
            borderColor: this.borderColor,
            lockMovementX: this.lockMovementX,
            lockMovementY: this.lockMovementY,
            hoverCursor: this.hoverCursor,
            selectable: this.selectable,
            defaultCursor: this.canvas && this.canvas.defaultCursor,
            moveCursor: this.canvas && this.canvas.moveCursor
          };
        },
        /**
         * @private
         */
        _restoreEditingProps: function() {
          this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor));
        },
        /**
         * Exits from editing state
         * @return {fabric.IText} thisArg
         * @chainable
         */
        exitEditing: function() {
          var n = this._textBeforeEdit !== this.text, h = this.hiddenTextarea;
          return this.selected = !1, this.isEditing = !1, this.selectionEnd = this.selectionStart, h && (h.blur && h.blur(), h.parentNode && h.parentNode.removeChild(h)), this.hiddenTextarea = null, this.abortCursorAnimation(), this._restoreEditingProps(), this._currentCursorOpacity = 0, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this.fire("editing:exited"), n && this.fire("modified"), this.canvas && (this.canvas.off("mouse:move", this.mouseMoveHandler), this.canvas.fire("text:editing:exited", { target: this }), n && this.canvas.fire("object:modified", { target: this })), this;
        },
        /**
         * @private
         */
        _removeExtraneousStyles: function() {
          for (var n in this.styles)
            this._textLines[n] || delete this.styles[n];
        },
        /**
         * remove and reflow a style block from start to end.
         * @param {Number} start linear start position for removal (included in removal)
         * @param {Number} end linear end position for removal ( excluded from removal )
         */
        removeStyleFromTo: function(n, h) {
          var a = this.get2DCursorLocation(n, !0), t = this.get2DCursorLocation(h, !0), r = a.lineIndex, e = a.charIndex, s = t.lineIndex, o = t.charIndex, i, l;
          if (r !== s) {
            if (this.styles[r])
              for (i = e; i < this._unwrappedTextLines[r].length; i++)
                delete this.styles[r][i];
            if (this.styles[s])
              for (i = o; i < this._unwrappedTextLines[s].length; i++)
                l = this.styles[s][i], l && (this.styles[r] || (this.styles[r] = {}), this.styles[r][e + i - o] = l);
            for (i = r + 1; i <= s; i++)
              delete this.styles[i];
            this.shiftLineStyles(s, r - s);
          } else if (this.styles[r]) {
            l = this.styles[r];
            var u = o - e, d, g;
            for (i = e; i < o; i++)
              delete l[i];
            for (g in this.styles[r])
              d = parseInt(g, 10), d >= o && (l[d - u] = l[g], delete l[g]);
          }
        },
        /**
         * Shifts line styles up or down
         * @param {Number} lineIndex Index of a line
         * @param {Number} offset Can any number?
         */
        shiftLineStyles: function(n, h) {
          var a = c(this.styles);
          for (var t in this.styles) {
            var r = parseInt(t, 10);
            r > n && (this.styles[r + h] = a[r], a[r - h] || delete this.styles[r]);
          }
        },
        restartCursorIfNeeded: function() {
          (!this._currentTickState || this._currentTickState.isAborted || !this._currentTickCompleteState || this._currentTickCompleteState.isAborted) && this.initDelayedCursor();
        },
        /**
         * Handle insertion of more consecutive style lines for when one or more
         * newlines gets added to the text. Since current style needs to be shifted
         * first we shift the current style of the number lines needed, then we add
         * new lines from the last to the first.
         * @param {Number} lineIndex Index of a line
         * @param {Number} charIndex Index of a char
         * @param {Number} qty number of lines to add
         * @param {Array} copiedStyle Array of objects styles
         */
        insertNewlineStyleObject: function(n, h, a, t) {
          var r, e = {}, s = !1, o = this._unwrappedTextLines[n].length === h;
          a || (a = 1), this.shiftLineStyles(n, a), this.styles[n] && (r = this.styles[n][h === 0 ? h : h - 1]);
          for (var i in this.styles[n]) {
            var l = parseInt(i, 10);
            l >= h && (s = !0, e[l - h] = this.styles[n][i], o && h === 0 || delete this.styles[n][i]);
          }
          var u = !1;
          for (s && !o && (this.styles[n + a] = e, u = !0), u && a--; a > 0; )
            t && t[a - 1] ? this.styles[n + a] = { 0: c(t[a - 1]) } : r ? this.styles[n + a] = { 0: c(r) } : delete this.styles[n + a], a--;
          this._forceClearCache = !0;
        },
        /**
         * Inserts style object for a given line/char index
         * @param {Number} lineIndex Index of a line
         * @param {Number} charIndex Index of a char
         * @param {Number} quantity number Style object to insert, if given
         * @param {Array} copiedStyle array of style objects
         */
        insertCharStyleObject: function(n, h, a, t) {
          this.styles || (this.styles = {});
          var r = this.styles[n], e = r ? c(r) : {};
          a || (a = 1);
          for (var s in e) {
            var o = parseInt(s, 10);
            o >= h && (r[o + a] = e[o], e[o - a] || delete r[o]);
          }
          if (this._forceClearCache = !0, t) {
            for (; a--; )
              Object.keys(t[a]).length && (this.styles[n] || (this.styles[n] = {}), this.styles[n][h + a] = c(t[a]));
            return;
          }
          if (r)
            for (var i = r[h ? h - 1 : 1]; i && a--; )
              this.styles[n][h + a] = c(i);
        },
        /**
         * Inserts style object(s)
         * @param {Array} insertedText Characters at the location where style is inserted
         * @param {Number} start cursor index for inserting style
         * @param {Array} [copiedStyle] array of style objects to insert.
         */
        insertNewStyleBlock: function(n, h, a) {
          for (var t = this.get2DCursorLocation(h, !0), r = [0], e = 0, s = 0; s < n.length; s++)
            n[s] === `
` ? (e++, r[e] = 0) : r[e]++;
          r[0] > 0 && (this.insertCharStyleObject(t.lineIndex, t.charIndex, r[0], a), a = a && a.slice(r[0] + 1)), e && this.insertNewlineStyleObject(
            t.lineIndex,
            t.charIndex + r[0],
            e
          );
          for (var s = 1; s < e; s++)
            r[s] > 0 ? this.insertCharStyleObject(t.lineIndex + s, 0, r[s], a) : a && this.styles[t.lineIndex + s] && a[0] && (this.styles[t.lineIndex + s][0] = a[0]), a = a && a.slice(r[s] + 1);
          r[s] > 0 && this.insertCharStyleObject(t.lineIndex + s, 0, r[s], a);
        },
        /**
         * Set the selectionStart and selectionEnd according to the new position of cursor
         * mimic the key - mouse navigation when shift is pressed.
         */
        setSelectionStartEndWithShift: function(n, h, a) {
          a <= n ? (h === n ? this._selectionDirection = "left" : this._selectionDirection === "right" && (this._selectionDirection = "left", this.selectionEnd = n), this.selectionStart = a) : a > n && a < h ? this._selectionDirection === "right" ? this.selectionEnd = a : this.selectionStart = a : (h === n ? this._selectionDirection = "right" : this._selectionDirection === "left" && (this._selectionDirection = "right", this.selectionStart = h), this.selectionEnd = a);
        },
        setSelectionInBoundaries: function() {
          var n = this.text.length;
          this.selectionStart > n ? this.selectionStart = n : this.selectionStart < 0 && (this.selectionStart = 0), this.selectionEnd > n ? this.selectionEnd = n : this.selectionEnd < 0 && (this.selectionEnd = 0);
        }
      }
    );
  }(), f.util.object.extend(
    f.IText.prototype,
    /** @lends fabric.IText.prototype */
    {
      /**
       * Initializes "dbclick" event handler
       */
      initDoubleClickSimulation: function() {
        this.__lastClickTime = +/* @__PURE__ */ new Date(), this.__lastLastClickTime = +/* @__PURE__ */ new Date(), this.__lastPointer = {}, this.on("mousedown", this.onMouseDown);
      },
      /**
       * Default event handler to simulate triple click
       * @private
       */
      onMouseDown: function(c) {
        if (this.canvas) {
          this.__newClickTime = +/* @__PURE__ */ new Date();
          var n = c.pointer;
          this.isTripleClick(n) && (this.fire("tripleclick", c), this._stopEvent(c.e)), this.__lastLastClickTime = this.__lastClickTime, this.__lastClickTime = this.__newClickTime, this.__lastPointer = n, this.__lastIsEditing = this.isEditing, this.__lastSelected = this.selected;
        }
      },
      isTripleClick: function(c) {
        return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === c.x && this.__lastPointer.y === c.y;
      },
      /**
       * @private
       */
      _stopEvent: function(c) {
        c.preventDefault && c.preventDefault(), c.stopPropagation && c.stopPropagation();
      },
      /**
       * Initializes event handlers related to cursor or selection
       */
      initCursorSelectionHandlers: function() {
        this.initMousedownHandler(), this.initMouseupHandler(), this.initClicks();
      },
      /**
       * Default handler for double click, select a word
       */
      doubleClickHandler: function(c) {
        this.isEditing && this.selectWord(this.getSelectionStartFromPointer(c.e));
      },
      /**
       * Default handler for triple click, select a line
       */
      tripleClickHandler: function(c) {
        this.isEditing && this.selectLine(this.getSelectionStartFromPointer(c.e));
      },
      /**
       * Initializes double and triple click event handlers
       */
      initClicks: function() {
        this.on("mousedblclick", this.doubleClickHandler), this.on("tripleclick", this.tripleClickHandler);
      },
      /**
       * Default event handler for the basic functionalities needed on _mouseDown
       * can be overridden to do something different.
       * Scope of this implementation is: find the click position, set selectionStart
       * find selectionEnd, initialize the drawing of either cursor or selection area
       * initializing a mousedDown on a text area will cancel fabricjs knowledge of
       * current compositionMode. It will be set to false.
       */
      _mouseDownHandler: function(c) {
        !this.canvas || !this.editable || c.e.button && c.e.button !== 1 || (this.__isMousedown = !0, this.selected && (this.inCompositionMode = !1, this.setCursorByClick(c.e)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()));
      },
      /**
       * Default event handler for the basic functionalities needed on mousedown:before
       * can be overridden to do something different.
       * Scope of this implementation is: verify the object is already selected when mousing down
       */
      _mouseDownHandlerBefore: function(c) {
        !this.canvas || !this.editable || c.e.button && c.e.button !== 1 || (this.selected = this === this.canvas._activeObject);
      },
      /**
       * Initializes "mousedown" event handler
       */
      initMousedownHandler: function() {
        this.on("mousedown", this._mouseDownHandler), this.on("mousedown:before", this._mouseDownHandlerBefore);
      },
      /**
       * Initializes "mouseup" event handler
       */
      initMouseupHandler: function() {
        this.on("mouseup", this.mouseUpHandler);
      },
      /**
       * standard handler for mouse up, overridable
       * @private
       */
      mouseUpHandler: function(c) {
        if (this.__isMousedown = !1, !(!this.editable || this.group || c.transform && c.transform.actionPerformed || c.e.button && c.e.button !== 1)) {
          if (this.canvas) {
            var n = this.canvas._activeObject;
            if (n && n !== this)
              return;
          }
          this.__lastSelected && !this.__corner ? (this.selected = !1, this.__lastSelected = !1, this.enterEditing(c.e), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection()) : this.selected = !0;
        }
      },
      /**
       * Changes cursor location in a text depending on passed pointer (x/y) object
       * @param {Event} e Event object
       */
      setCursorByClick: function(c) {
        var n = this.getSelectionStartFromPointer(c), h = this.selectionStart, a = this.selectionEnd;
        c.shiftKey ? this.setSelectionStartEndWithShift(h, a, n) : (this.selectionStart = n, this.selectionEnd = n), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
      },
      /**
       * Returns index of a character corresponding to where an object was clicked
       * @param {Event} e Event object
       * @return {Number} Index of a character
       */
      getSelectionStartFromPointer: function(c) {
        for (var n = this.getLocalPointer(c), h = 0, a = 0, t = 0, r = 0, e = 0, s, o, i = 0, l = this._textLines.length; i < l && t <= n.y; i++)
          t += this.getHeightOfLine(i) * this.scaleY, e = i, i > 0 && (r += this._textLines[i - 1].length + this.missingNewlineOffset(i - 1));
        s = this._getLineLeftOffset(e), a = s * this.scaleX, o = this._textLines[e], this.direction === "rtl" && (n.x = this.width * this.scaleX - n.x + a);
        for (var u = 0, d = o.length; u < d && (h = a, a += this.__charBounds[e][u].kernedWidth * this.scaleX, a <= n.x); u++)
          r++;
        return this._getNewSelectionStartFromOffset(n, h, a, r, d);
      },
      /**
       * @private
       */
      _getNewSelectionStartFromOffset: function(c, n, h, a, t) {
        var r = c.x - n, e = h - c.x, s = e > r || e < 0 ? 0 : 1, o = a + s;
        return this.flipX && (o = t - o), o > this._text.length && (o = this._text.length), o;
      }
    }
  ), f.util.object.extend(
    f.IText.prototype,
    /** @lends fabric.IText.prototype */
    {
      /**
       * Initializes hidden textarea (needed to bring up keyboard in iOS)
       */
      initHiddenTextarea: function() {
        this.hiddenTextarea = f.document.createElement("textarea"), this.hiddenTextarea.setAttribute("autocapitalize", "off"), this.hiddenTextarea.setAttribute("autocorrect", "off"), this.hiddenTextarea.setAttribute("autocomplete", "off"), this.hiddenTextarea.setAttribute("spellcheck", "false"), this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea", ""), this.hiddenTextarea.setAttribute("wrap", "off");
        var c = this._calcTextareaPosition();
        this.hiddenTextarea.style.cssText = "position: absolute; top: " + c.top + "; left: " + c.left + "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: " + c.fontSize + ";", this.hiddenTextareaContainer ? this.hiddenTextareaContainer.appendChild(this.hiddenTextarea) : f.document.body.appendChild(this.hiddenTextarea), f.util.addListener(this.hiddenTextarea, "keydown", this.onKeyDown.bind(this)), f.util.addListener(this.hiddenTextarea, "keyup", this.onKeyUp.bind(this)), f.util.addListener(this.hiddenTextarea, "input", this.onInput.bind(this)), f.util.addListener(this.hiddenTextarea, "copy", this.copy.bind(this)), f.util.addListener(this.hiddenTextarea, "cut", this.copy.bind(this)), f.util.addListener(this.hiddenTextarea, "paste", this.paste.bind(this)), f.util.addListener(this.hiddenTextarea, "compositionstart", this.onCompositionStart.bind(this)), f.util.addListener(this.hiddenTextarea, "compositionupdate", this.onCompositionUpdate.bind(this)), f.util.addListener(this.hiddenTextarea, "compositionend", this.onCompositionEnd.bind(this)), !this._clickHandlerInitialized && this.canvas && (f.util.addListener(this.canvas.upperCanvasEl, "click", this.onClick.bind(this)), this._clickHandlerInitialized = !0);
      },
      /**
       * For functionalities on keyDown
       * Map a special key to a function of the instance/prototype
       * If you need different behaviour for ESC or TAB or arrows, you have to change
       * this map setting the name of a function that you build on the fabric.Itext or
       * your prototype.
       * the map change will affect all Instances unless you need for only some text Instances
       * in that case you have to clone this object and assign your Instance.
       * this.keysMap = fabric.util.object.clone(this.keysMap);
       * The function must be in fabric.Itext.prototype.myFunction And will receive event as args[0]
       */
      keysMap: {
        9: "exitEditing",
        27: "exitEditing",
        33: "moveCursorUp",
        34: "moveCursorDown",
        35: "moveCursorRight",
        36: "moveCursorLeft",
        37: "moveCursorLeft",
        38: "moveCursorUp",
        39: "moveCursorRight",
        40: "moveCursorDown"
      },
      keysMapRtl: {
        9: "exitEditing",
        27: "exitEditing",
        33: "moveCursorUp",
        34: "moveCursorDown",
        35: "moveCursorLeft",
        36: "moveCursorRight",
        37: "moveCursorRight",
        38: "moveCursorUp",
        39: "moveCursorLeft",
        40: "moveCursorDown"
      },
      /**
       * For functionalities on keyUp + ctrl || cmd
       */
      ctrlKeysMapUp: {
        67: "copy",
        88: "cut"
      },
      /**
       * For functionalities on keyDown + ctrl || cmd
       */
      ctrlKeysMapDown: {
        65: "selectAll"
      },
      onClick: function() {
        this.hiddenTextarea && this.hiddenTextarea.focus();
      },
      /**
       * Handles keydown event
       * only used for arrows and combination of modifier keys.
       * @param {Event} e Event object
       */
      onKeyDown: function(c) {
        if (this.isEditing) {
          var n = this.direction === "rtl" ? this.keysMapRtl : this.keysMap;
          if (c.keyCode in n)
            this[n[c.keyCode]](c);
          else if (c.keyCode in this.ctrlKeysMapDown && (c.ctrlKey || c.metaKey))
            this[this.ctrlKeysMapDown[c.keyCode]](c);
          else
            return;
          c.stopImmediatePropagation(), c.preventDefault(), c.keyCode >= 33 && c.keyCode <= 40 ? (this.inCompositionMode = !1, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
        }
      },
      /**
       * Handles keyup event
       * We handle KeyUp because ie11 and edge have difficulties copy/pasting
       * if a copy/cut event fired, keyup is dismissed
       * @param {Event} e Event object
       */
      onKeyUp: function(c) {
        if (!this.isEditing || this._copyDone || this.inCompositionMode) {
          this._copyDone = !1;
          return;
        }
        if (c.keyCode in this.ctrlKeysMapUp && (c.ctrlKey || c.metaKey))
          this[this.ctrlKeysMapUp[c.keyCode]](c);
        else
          return;
        c.stopImmediatePropagation(), c.preventDefault(), this.canvas && this.canvas.requestRenderAll();
      },
      /**
       * Handles onInput event
       * @param {Event} e Event object
       */
      onInput: function(c) {
        var n = this.fromPaste;
        if (this.fromPaste = !1, c && c.stopPropagation(), !!this.isEditing) {
          var h = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText, a = this._text.length, t = h.length, r, e, s = t - a, o = this.selectionStart, i = this.selectionEnd, l = o !== i, u, d, g;
          if (this.hiddenTextarea.value === "") {
            this.styles = {}, this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
            return;
          }
          var v = this.fromStringToGraphemeSelection(
            this.hiddenTextarea.selectionStart,
            this.hiddenTextarea.selectionEnd,
            this.hiddenTextarea.value
          ), m = o > v.selectionStart;
          l ? (r = this._text.slice(o, i), s += i - o) : t < a && (m ? r = this._text.slice(i + s, i) : r = this._text.slice(o, o - s)), e = h.slice(v.selectionEnd - s, v.selectionEnd), r && r.length && (e.length && (u = this.getSelectionStyles(o, o + 1, !1), u = e.map(function() {
            return u[0];
          })), l ? (d = o, g = i) : m ? (d = i - r.length, g = i) : (d = i, g = i + r.length), this.removeStyleFromTo(d, g)), e.length && (n && e.join("") === f.copiedText && !f.disableStyleCopyPaste && (u = f.copiedTextStyle), this.insertNewStyleBlock(e, o, u)), this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
        }
      },
      /**
       * Composition start
       */
      onCompositionStart: function() {
        this.inCompositionMode = !0;
      },
      /**
       * Composition end
       */
      onCompositionEnd: function() {
        this.inCompositionMode = !1;
      },
      // /**
      //  * Composition update
      //  */
      onCompositionUpdate: function(c) {
        this.compositionStart = c.target.selectionStart, this.compositionEnd = c.target.selectionEnd, this.updateTextareaPosition();
      },
      /**
       * Copies selected text
       * @param {Event} e Event object
       */
      copy: function() {
        this.selectionStart !== this.selectionEnd && (f.copiedText = this.getSelectedText(), f.disableStyleCopyPaste ? f.copiedTextStyle = null : f.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0), this._copyDone = !0);
      },
      /**
       * Pastes text
       * @param {Event} e Event object
       */
      paste: function() {
        this.fromPaste = !0;
      },
      /**
       * @private
       * @param {Event} e Event object
       * @return {Object} Clipboard data object
       */
      _getClipboardData: function(c) {
        return c && c.clipboardData || f.window.clipboardData;
      },
      /**
       * Finds the width in pixels before the cursor on the same line
       * @private
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @return {Number} widthBeforeCursor width before cursor
       */
      _getWidthBeforeCursor: function(c, n) {
        var h = this._getLineLeftOffset(c), a;
        return n > 0 && (a = this.__charBounds[c][n - 1], h += a.left + a.width), h;
      },
      /**
       * Gets start offset of a selection
       * @param {Event} e Event object
       * @param {Boolean} isRight
       * @return {Number}
       */
      getDownCursorOffset: function(c, n) {
        var h = this._getSelectionForOffset(c, n), a = this.get2DCursorLocation(h), t = a.lineIndex;
        if (t === this._textLines.length - 1 || c.metaKey || c.keyCode === 34)
          return this._text.length - h;
        var r = a.charIndex, e = this._getWidthBeforeCursor(t, r), s = this._getIndexOnLine(t + 1, e), o = this._textLines[t].slice(r);
        return o.length + s + 1 + this.missingNewlineOffset(t);
      },
      /**
       * private
       * Helps finding if the offset should be counted from Start or End
       * @param {Event} e Event object
       * @param {Boolean} isRight
       * @return {Number}
       */
      _getSelectionForOffset: function(c, n) {
        return c.shiftKey && this.selectionStart !== this.selectionEnd && n ? this.selectionEnd : this.selectionStart;
      },
      /**
       * @param {Event} e Event object
       * @param {Boolean} isRight
       * @return {Number}
       */
      getUpCursorOffset: function(c, n) {
        var h = this._getSelectionForOffset(c, n), a = this.get2DCursorLocation(h), t = a.lineIndex;
        if (t === 0 || c.metaKey || c.keyCode === 33)
          return -h;
        var r = a.charIndex, e = this._getWidthBeforeCursor(t, r), s = this._getIndexOnLine(t - 1, e), o = this._textLines[t].slice(0, r), i = this.missingNewlineOffset(t - 1);
        return -this._textLines[t - 1].length + s - o.length + (1 - i);
      },
      /**
       * for a given width it founds the matching character.
       * @private
       */
      _getIndexOnLine: function(c, n) {
        for (var h = this._textLines[c], a = this._getLineLeftOffset(c), t = a, r = 0, e, s, o = 0, i = h.length; o < i; o++)
          if (e = this.__charBounds[c][o].width, t += e, t > n) {
            s = !0;
            var l = t - e, u = t, d = Math.abs(l - n), g = Math.abs(u - n);
            r = g < d ? o : o - 1;
            break;
          }
        return s || (r = h.length - 1), r;
      },
      /**
       * Moves cursor down
       * @param {Event} e Event object
       */
      moveCursorDown: function(c) {
        this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", c);
      },
      /**
       * Moves cursor up
       * @param {Event} e Event object
       */
      moveCursorUp: function(c) {
        this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorUpOrDown("Up", c);
      },
      /**
       * Moves cursor up or down, fires the events
       * @param {String} direction 'Up' or 'Down'
       * @param {Event} e Event object
       */
      _moveCursorUpOrDown: function(c, n) {
        var h = "get" + c + "CursorOffset", a = this[h](n, this._selectionDirection === "right");
        n.shiftKey ? this.moveCursorWithShift(a) : this.moveCursorWithoutShift(a), a !== 0 && (this.setSelectionInBoundaries(), this.abortCursorAnimation(), this._currentCursorOpacity = 1, this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
      },
      /**
       * Moves cursor with shift
       * @param {Number} offset
       */
      moveCursorWithShift: function(c) {
        var n = this._selectionDirection === "left" ? this.selectionStart + c : this.selectionEnd + c;
        return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, n), c !== 0;
      },
      /**
       * Moves cursor up without shift
       * @param {Number} offset
       */
      moveCursorWithoutShift: function(c) {
        return c < 0 ? (this.selectionStart += c, this.selectionEnd = this.selectionStart) : (this.selectionEnd += c, this.selectionStart = this.selectionEnd), c !== 0;
      },
      /**
       * Moves cursor left
       * @param {Event} e Event object
       */
      moveCursorLeft: function(c) {
        this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorLeftOrRight("Left", c);
      },
      /**
       * @private
       * @return {Boolean} true if a change happened
       */
      _move: function(c, n, h) {
        var a;
        if (c.altKey)
          a = this["findWordBoundary" + h](this[n]);
        else if (c.metaKey || c.keyCode === 35 || c.keyCode === 36)
          a = this["findLineBoundary" + h](this[n]);
        else
          return this[n] += h === "Left" ? -1 : 1, !0;
        if (typeof a < "u" && this[n] !== a)
          return this[n] = a, !0;
      },
      /**
       * @private
       */
      _moveLeft: function(c, n) {
        return this._move(c, n, "Left");
      },
      /**
       * @private
       */
      _moveRight: function(c, n) {
        return this._move(c, n, "Right");
      },
      /**
       * Moves cursor left without keeping selection
       * @param {Event} e
       */
      moveCursorLeftWithoutShift: function(c) {
        var n = !0;
        return this._selectionDirection = "left", this.selectionEnd === this.selectionStart && this.selectionStart !== 0 && (n = this._moveLeft(c, "selectionStart")), this.selectionEnd = this.selectionStart, n;
      },
      /**
       * Moves cursor left while keeping selection
       * @param {Event} e
       */
      moveCursorLeftWithShift: function(c) {
        if (this._selectionDirection === "right" && this.selectionStart !== this.selectionEnd)
          return this._moveLeft(c, "selectionEnd");
        if (this.selectionStart !== 0)
          return this._selectionDirection = "left", this._moveLeft(c, "selectionStart");
      },
      /**
       * Moves cursor right
       * @param {Event} e Event object
       */
      moveCursorRight: function(c) {
        this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", c);
      },
      /**
       * Moves cursor right or Left, fires event
       * @param {String} direction 'Left', 'Right'
       * @param {Event} e Event object
       */
      _moveCursorLeftOrRight: function(c, n) {
        var h = "moveCursor" + c + "With";
        this._currentCursorOpacity = 1, n.shiftKey ? h += "Shift" : h += "outShift", this[h](n) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
      },
      /**
       * Moves cursor right while keeping selection
       * @param {Event} e
       */
      moveCursorRightWithShift: function(c) {
        if (this._selectionDirection === "left" && this.selectionStart !== this.selectionEnd)
          return this._moveRight(c, "selectionStart");
        if (this.selectionEnd !== this._text.length)
          return this._selectionDirection = "right", this._moveRight(c, "selectionEnd");
      },
      /**
       * Moves cursor right without keeping selection
       * @param {Event} e Event object
       */
      moveCursorRightWithoutShift: function(c) {
        var n = !0;
        return this._selectionDirection = "right", this.selectionStart === this.selectionEnd ? (n = this._moveRight(c, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, n;
      },
      /**
       * Removes characters from start/end
       * start/end ar per grapheme position in _text array.
       *
       * @param {Number} start
       * @param {Number} end default to start + 1
       */
      removeChars: function(c, n) {
        typeof n > "u" && (n = c + 1), this.removeStyleFromTo(c, n), this._text.splice(c, n - c), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
      },
      /**
       * insert characters at start position, before start position.
       * start  equal 1 it means the text get inserted between actual grapheme 0 and 1
       * if style array is provided, it must be as the same length of text in graphemes
       * if end is provided and is bigger than start, old text is replaced.
       * start/end ar per grapheme position in _text array.
       *
       * @param {String} text text to insert
       * @param {Array} style array of style objects
       * @param {Number} start
       * @param {Number} end default to start + 1
       */
      insertChars: function(c, n, h, a) {
        typeof a > "u" && (a = h), a > h && this.removeStyleFromTo(h, a);
        var t = f.util.string.graphemeSplit(c);
        this.insertNewStyleBlock(t, h, n), this._text = [].concat(this._text.slice(0, h), t, this._text.slice(a)), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
      }
    }
  ), function() {
    var c = f.util.toFixed, n = /  +/g;
    f.util.object.extend(
      f.Text.prototype,
      /** @lends fabric.Text.prototype */
      {
        /**
         * Returns SVG representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        _toSVG: function() {
          var h = this._getSVGLeftTopOffsets(), a = this._getSVGTextAndBg(h.textTop, h.textLeft);
          return this._wrapSVGTextAndBg(a);
        },
        /**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toSVG: function(h) {
          return this._createBaseSVGMarkup(
            this._toSVG(),
            { reviver: h, noStyle: !0, withShadow: !0 }
          );
        },
        /**
         * @private
         */
        _getSVGLeftTopOffsets: function() {
          return {
            textLeft: -this.width / 2,
            textTop: -this.height / 2,
            lineTop: this.getHeightOfLine(0)
          };
        },
        /**
         * @private
         */
        _wrapSVGTextAndBg: function(h) {
          var a = !0, t = this.getSvgTextDecoration(this);
          return [
            h.textBgRects.join(""),
            '		<text xml:space="preserve" ',
            this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, "'") + '" ' : "",
            this.fontSize ? 'font-size="' + this.fontSize + '" ' : "",
            this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : "",
            this.fontWeight ? 'font-weight="' + this.fontWeight + '" ' : "",
            t ? 'text-decoration="' + t + '" ' : "",
            'style="',
            this.getSvgStyles(a),
            '"',
            this.addPaintOrder(),
            " >",
            h.textSpans.join(""),
            `</text>
`
          ];
        },
        /**
         * @private
         * @param {Number} textTopOffset Text top offset
         * @param {Number} textLeftOffset Text left offset
         * @return {Object}
         */
        _getSVGTextAndBg: function(h, a) {
          var t = [], r = [], e = h, s;
          this._setSVGBg(r);
          for (var o = 0, i = this._textLines.length; o < i; o++)
            s = this._getLineLeftOffset(o), (this.textBackgroundColor || this.styleHas("textBackgroundColor", o)) && this._setSVGTextLineBg(r, o, a + s, e), this._setSVGTextLineText(t, o, a + s, e), e += this.getHeightOfLine(o);
          return {
            textSpans: t,
            textBgRects: r
          };
        },
        /**
         * @private
         */
        _createTextCharSpan: function(h, a, t, r) {
          var e = h !== h.trim() || h.match(n), s = this.getSvgSpanStyles(a, e), o = s ? 'style="' + s + '"' : "", i = a.deltaY, l = "", u = f.Object.NUM_FRACTION_DIGITS;
          return i && (l = ' dy="' + c(i, u) + '" '), [
            '<tspan x="',
            c(t, u),
            '" y="',
            c(r, u),
            '" ',
            l,
            o,
            ">",
            f.util.string.escapeXml(h),
            "</tspan>"
          ].join("");
        },
        _setSVGTextLineText: function(h, a, t, r) {
          var e = this.getHeightOfLine(a), s = this.textAlign.indexOf("justify") !== -1, o, i, l = "", u, d, g = 0, v = this._textLines[a], m;
          r += e * (1 - this._fontSizeFraction) / this.lineHeight;
          for (var C = 0, p = v.length - 1; C <= p; C++)
            m = C === p || this.charSpacing, l += v[C], u = this.__charBounds[a][C], g === 0 ? (t += u.kernedWidth - u.width, g += u.width) : g += u.kernedWidth, s && !m && this._reSpaceAndTab.test(v[C]) && (m = !0), m || (o = o || this.getCompleteStyleDeclaration(a, C), i = this.getCompleteStyleDeclaration(a, C + 1), m = f.util.hasStyleChanged(o, i, !0)), m && (d = this._getStyleDeclaration(a, C) || {}, h.push(this._createTextCharSpan(l, d, t, r)), l = "", o = i, t += g, g = 0);
        },
        _pushTextBgRect: function(h, a, t, r, e, s) {
          var o = f.Object.NUM_FRACTION_DIGITS;
          h.push(
            "		<rect ",
            this._getFillAttributes(a),
            ' x="',
            c(t, o),
            '" y="',
            c(r, o),
            '" width="',
            c(e, o),
            '" height="',
            c(s, o),
            `"></rect>
`
          );
        },
        _setSVGTextLineBg: function(h, a, t, r) {
          for (var e = this._textLines[a], s = this.getHeightOfLine(a) / this.lineHeight, o = 0, i = 0, l, u, d = this.getValueOfPropertyAt(a, 0, "textBackgroundColor"), g = 0, v = e.length; g < v; g++)
            l = this.__charBounds[a][g], u = this.getValueOfPropertyAt(a, g, "textBackgroundColor"), u !== d ? (d && this._pushTextBgRect(
              h,
              d,
              t + i,
              r,
              o,
              s
            ), i = l.left, o = l.width, d = u) : o += l.kernedWidth;
          u && this._pushTextBgRect(
            h,
            u,
            t + i,
            r,
            o,
            s
          );
        },
        /**
         * Adobe Illustrator (at least CS5) is unable to render rgba()-based fill values
         * we work around it by "moving" alpha channel into opacity attribute and setting fill's alpha to 1
         *
         * @private
         * @param {*} value
         * @return {String}
         */
        _getFillAttributes: function(h) {
          var a = h && typeof h == "string" ? new f.Color(h) : "";
          return !a || !a.getSource() || a.getAlpha() === 1 ? 'fill="' + h + '"' : 'opacity="' + a.getAlpha() + '" fill="' + a.setAlpha(1).toRgb() + '"';
        },
        /**
         * @private
         */
        _getSVGLineTopOffset: function(h) {
          for (var a = 0, t = 0, r = 0; r < h; r++)
            a += this.getHeightOfLine(r);
          return t = this.getHeightOfLine(r), {
            lineTop: a,
            offset: (this._fontSizeMult - this._fontSizeFraction) * t / (this.lineHeight * this._fontSizeMult)
          };
        },
        /**
         * Returns styles-string for svg-export
         * @param {Boolean} skipShadow a boolean to skip shadow filter output
         * @return {String}
         */
        getSvgStyles: function(h) {
          var a = f.Object.prototype.getSvgStyles.call(this, h);
          return a + " white-space: pre;";
        }
      }
    );
  }(), function(c) {
    var n = c.fabric || (c.fabric = {});
    n.Textbox = n.util.createClass(n.IText, n.Observable, {
      /**
       * Type of an object
       * @type String
       * @default
       */
      type: "textbox",
      /**
       * Minimum width of textbox, in pixels.
       * @type Number
       * @default
       */
      minWidth: 20,
      /**
       * Minimum calculated width of a textbox, in pixels.
       * fixed to 2 so that an empty textbox cannot go to 0
       * and is still selectable without text.
       * @type Number
       * @default
       */
      dynamicMinWidth: 2,
      /**
       * Cached array of text wrapping.
       * @type Array
       */
      __cachedLines: null,
      /**
       * Override standard Object class values
       */
      lockScalingFlip: !0,
      /**
       * Override standard Object class values
       * Textbox needs this on false
       */
      noScaleCache: !1,
      /**
       * Properties which when set cause object to change dimensions
       * @type Object
       * @private
       */
      _dimensionAffectingProps: n.Text.prototype._dimensionAffectingProps.concat("width"),
      /**
       * Use this regular expression to split strings in breakable lines
       * @private
       */
      _wordJoiners: /[ \t\r]/,
      /**
       * Use this boolean property in order to split strings that have no white space concept.
       * this is a cheap way to help with chinese/japanese
       * @type Boolean
       * @since 2.6.0
       */
      splitByGrapheme: !1,
      /**
       * Unlike superclass's version of this function, Textbox does not update
       * its width.
       * @private
       * @override
       */
      initDimensions: function() {
        this.__skipDimension || (this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.height = this.calcTextHeight(), this.saveState({ propertySet: "_dimensionAffectingProps" }));
      },
      /**
       * Generate an object that translates the style object so that it is
       * broken up by visual lines (new lines and automatic wrapping).
       * The original text styles object is broken up by actual lines (new lines only),
       * which is only sufficient for Text / IText
       * @private
       */
      _generateStyleMap: function(h) {
        for (var a = 0, t = 0, r = 0, e = {}, s = 0; s < h.graphemeLines.length; s++)
          h.graphemeText[r] === `
` && s > 0 ? (t = 0, r++, a++) : !this.splitByGrapheme && this._reSpaceAndTab.test(h.graphemeText[r]) && s > 0 && (t++, r++), e[s] = { line: a, offset: t }, r += h.graphemeLines[s].length, t += h.graphemeLines[s].length;
        return e;
      },
      /**
       * Returns true if object has a style property or has it on a specified line
       * @param {Number} lineIndex
       * @return {Boolean}
       */
      styleHas: function(h, a) {
        if (this._styleMap && !this.isWrapping) {
          var t = this._styleMap[a];
          t && (a = t.line);
        }
        return n.Text.prototype.styleHas.call(this, h, a);
      },
      /**
       * Returns true if object has no styling or no styling in a line
       * @param {Number} lineIndex , lineIndex is on wrapped lines.
       * @return {Boolean}
       */
      isEmptyStyles: function(h) {
        if (!this.styles)
          return !0;
        var a = 0, t = h + 1, r, e, s = !1, o = this._styleMap[h], i = this._styleMap[h + 1];
        o && (h = o.line, a = o.offset), i && (t = i.line, s = t === h, r = i.offset), e = typeof h > "u" ? this.styles : { line: this.styles[h] };
        for (var l in e)
          for (var u in e[l])
            if (u >= a && (!s || u < r))
              for (var d in e[l][u])
                return !1;
        return !0;
      },
      /**
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @private
       */
      _getStyleDeclaration: function(h, a) {
        if (this._styleMap && !this.isWrapping) {
          var t = this._styleMap[h];
          if (!t)
            return null;
          h = t.line, a = t.offset + a;
        }
        return this.callSuper("_getStyleDeclaration", h, a);
      },
      /**
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @param {Object} style
       * @private
       */
      _setStyleDeclaration: function(h, a, t) {
        var r = this._styleMap[h];
        h = r.line, a = r.offset + a, this.styles[h][a] = t;
      },
      /**
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @private
       */
      _deleteStyleDeclaration: function(h, a) {
        var t = this._styleMap[h];
        h = t.line, a = t.offset + a, delete this.styles[h][a];
      },
      /**
       * probably broken need a fix
       * Returns the real style line that correspond to the wrapped lineIndex line
       * Used just to verify if the line does exist or not.
       * @param {Number} lineIndex
       * @returns {Boolean} if the line exists or not
       * @private
       */
      _getLineStyle: function(h) {
        var a = this._styleMap[h];
        return !!this.styles[a.line];
      },
      /**
       * Set the line style to an empty object so that is initialized
       * @param {Number} lineIndex
       * @param {Object} style
       * @private
       */
      _setLineStyle: function(h) {
        var a = this._styleMap[h];
        this.styles[a.line] = {};
      },
      /**
       * Wraps text using the 'width' property of Textbox. First this function
       * splits text on newlines, so we preserve newlines entered by the user.
       * Then it wraps each line using the width of the Textbox by calling
       * _wrapLine().
       * @param {Array} lines The string array of text that is split into lines
       * @param {Number} desiredWidth width you want to wrap to
       * @returns {Array} Array of lines
       */
      _wrapText: function(h, a) {
        var t = [], r;
        for (this.isWrapping = !0, r = 0; r < h.length; r++)
          t = t.concat(this._wrapLine(h[r], r, a));
        return this.isWrapping = !1, t;
      },
      /**
       * Helper function to measure a string of text, given its lineIndex and charIndex offset
       * it gets called when charBounds are not available yet.
       * @param {CanvasRenderingContext2D} ctx
       * @param {String} text
       * @param {number} lineIndex
       * @param {number} charOffset
       * @returns {number}
       * @private
       */
      _measureWord: function(h, a, t) {
        var r = 0, e, s = !0;
        t = t || 0;
        for (var o = 0, i = h.length; o < i; o++) {
          var l = this._getGraphemeBox(h[o], a, o + t, e, s);
          r += l.kernedWidth, e = h[o];
        }
        return r;
      },
      /**
       * Wraps a line of text using the width of the Textbox and a context.
       * @param {Array} line The grapheme array that represent the line
       * @param {Number} lineIndex
       * @param {Number} desiredWidth width you want to wrap the line to
       * @param {Number} reservedSpace space to remove from wrapping for custom functionalities
       * @returns {Array} Array of line(s) into which the given text is wrapped
       * to.
       */
      _wrapLine: function(h, a, t, A) {
        var e = 0, s = this.splitByGrapheme, o = [], i = [], l = s ? n.util.string.graphemeSplit(h) : h.split(this._wordJoiners), u = "", d = 0, g = s ? "" : " ", v = 0, m = 0, C = 0, p = !0, x = this._getWidthOfCharSpacing(), A = A || 0;
        l.length === 0 && l.push([]), t -= A;
        for (var k = 0; k < l.length; k++)
          u = s ? l[k] : n.util.string.graphemeSplit(l[k]), v = this._measureWord(u, a, d), d += u.length, e += m + v - x, e > t && !p ? (o.push(i), i = [], e = v, p = !0) : e += x, !p && !s && i.push(g), i = i.concat(u), m = s ? 0 : this._measureWord([g], a, d), d++, p = !1, v > C && (C = v);
        return k && o.push(i), C + A > this.dynamicMinWidth && (this.dynamicMinWidth = C - x + A), o;
      },
      /**
       * Detect if the text line is ended with an hard break
       * text and itext do not have wrapping, return false
       * @param {Number} lineIndex text to split
       * @return {Boolean}
       */
      isEndOfWrapping: function(h) {
        return !this._styleMap[h + 1] || this._styleMap[h + 1].line !== this._styleMap[h].line;
      },
      /**
       * Detect if a line has a linebreak and so we need to account for it when moving
       * and counting style.
       * @return Number
       */
      missingNewlineOffset: function(h) {
        return this.splitByGrapheme ? this.isEndOfWrapping(h) ? 1 : 0 : 1;
      },
      /**
      * Gets lines of text to render in the Textbox. This function calculates
      * text wrapping on the fly every time it is called.
      * @param {String} text text to split
      * @returns {Array} Array of lines in the Textbox.
      * @override
      */
      _splitTextIntoLines: function(h) {
        for (var a = n.Text.prototype._splitTextIntoLines.call(this, h), t = this._wrapText(a.lines, this.width), r = new Array(t.length), e = 0; e < t.length; e++)
          r[e] = t[e].join("");
        return a.lines = r, a.graphemeLines = t, a;
      },
      getMinWidth: function() {
        return Math.max(this.minWidth, this.dynamicMinWidth);
      },
      _removeExtraneousStyles: function() {
        var h = {};
        for (var a in this._styleMap)
          this._textLines[a] && (h[this._styleMap[a].line] = 1);
        for (var a in this.styles)
          h[a] || delete this.styles[a];
      },
      /**
       * Returns object representation of an instance
       * @method toObject
       * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
       * @return {Object} object representation of an instance
       */
      toObject: function(h) {
        return this.callSuper("toObject", ["minWidth", "splitByGrapheme"].concat(h));
      }
    }), n.Textbox.fromObject = function(h, a) {
      var t = n.util.stylesFromArray(h.styles, h.text), r = Object.assign({}, h, { styles: t });
      return n.Object._fromObject("Textbox", r, a, "text");
    };
  }(tt), function() {
    var c = f.controlsUtils, n = c.scaleSkewCursorStyleHandler, h = c.scaleCursorStyleHandler, a = c.scalingEqually, t = c.scalingYOrSkewingX, r = c.scalingXOrSkewingY, e = c.scaleOrSkewActionName, s = f.Object.prototype.controls;
    if (s.ml = new f.Control({
      x: -0.5,
      y: 0,
      cursorStyleHandler: n,
      actionHandler: r,
      getActionName: e
    }), s.mr = new f.Control({
      x: 0.5,
      y: 0,
      cursorStyleHandler: n,
      actionHandler: r,
      getActionName: e
    }), s.mb = new f.Control({
      x: 0,
      y: 0.5,
      cursorStyleHandler: n,
      actionHandler: t,
      getActionName: e
    }), s.mt = new f.Control({
      x: 0,
      y: -0.5,
      cursorStyleHandler: n,
      actionHandler: t,
      getActionName: e
    }), s.tl = new f.Control({
      x: -0.5,
      y: -0.5,
      cursorStyleHandler: h,
      actionHandler: a
    }), s.tr = new f.Control({
      x: 0.5,
      y: -0.5,
      cursorStyleHandler: h,
      actionHandler: a
    }), s.bl = new f.Control({
      x: -0.5,
      y: 0.5,
      cursorStyleHandler: h,
      actionHandler: a
    }), s.br = new f.Control({
      x: 0.5,
      y: 0.5,
      cursorStyleHandler: h,
      actionHandler: a
    }), s.mtr = new f.Control({
      x: 0,
      y: -0.5,
      actionHandler: c.rotationWithSnapping,
      cursorStyleHandler: c.rotationStyleHandler,
      offsetY: -40,
      withConnection: !0,
      actionName: "rotate"
    }), f.Textbox) {
      var o = f.Textbox.prototype.controls = {};
      o.mtr = s.mtr, o.tr = s.tr, o.br = s.br, o.tl = s.tl, o.bl = s.bl, o.mt = s.mt, o.mb = s.mb, o.mr = new f.Control({
        x: 0.5,
        y: 0,
        actionHandler: c.changeWidth,
        cursorStyleHandler: n,
        actionName: "resizing"
      }), o.ml = new f.Control({
        x: -0.5,
        y: 0,
        actionHandler: c.changeWidth,
        cursorStyleHandler: n,
        actionName: "resizing"
      });
    }
  }(), function() {
    f.Object.ENLIVEN_PROPS.push("eraser");
    var c = f.Object.prototype._drawClipPath, n = f.Object.prototype.needsItsOwnCache, h = f.Object.prototype.toObject, a = f.Object.prototype.getSvgCommons, t = f.Object.prototype._createBaseClipPathSVGMarkup, r = f.Object.prototype._createBaseSVGMarkup;
    f.Object.prototype.cacheProperties.push("eraser"), f.Object.prototype.stateProperties.push("eraser"), f.util.object.extend(f.Object.prototype, {
      /**
       * Indicates whether this object can be erased by {@link fabric.EraserBrush}
       * The `deep` option introduces fine grained control over a group's `erasable` property.
       * When set to `deep` the eraser will erase nested objects if they are erasable, leaving the group and the other objects untouched.
       * When set to `true` the eraser will erase the entire group. Once the group changes the eraser is propagated to its children for proper functionality.
       * When set to `false` the eraser will leave all objects including the group untouched.
       * @tutorial {@link http://fabricjs.com/erasing#erasable_property}
       * @type boolean | 'deep'
       * @default true
       */
      erasable: !0,
      /**
       * @tutorial {@link http://fabricjs.com/erasing#eraser}
       * @type fabric.Eraser
       */
      eraser: void 0,
      /**
       * @override
       * @returns Boolean
       */
      needsItsOwnCache: function() {
        return n.call(this) || !!this.eraser;
      },
      /**
       * draw eraser above clip path
       * @override
       * @private
       * @param {CanvasRenderingContext2D} ctx
       * @param {fabric.Object} clipPath
       */
      _drawClipPath: function(o, i) {
        if (c.call(this, o, i), this.eraser) {
          var l = this._getNonTransformedDimensions();
          this.eraser.isType("eraser") && this.eraser.set({
            width: l.x,
            height: l.y
          }), c.call(this, o, this.eraser);
        }
      },
      /**
       * Returns an object representation of an instance
       * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
       * @return {Object} Object representation of an instance
       */
      toObject: function(o) {
        var i = h.call(this, ["erasable"].concat(o));
        return this.eraser && !this.eraser.excludeFromExport && (i.eraser = this.eraser.toObject(o)), i;
      },
      /* _TO_SVG_START_ */
      /**
       * Returns id attribute for svg output
       * @override
       * @return {String}
       */
      getSvgCommons: function() {
        return a.call(this) + (this.eraser ? 'mask="url(#' + this.eraser.clipPathId + ')" ' : "");
      },
      /**
       * create svg markup for eraser
       * use <mask> to achieve erasing for svg, credit: https://travishorn.com/removing-parts-of-shapes-in-svg-b539a89e5649
       * must be called before object markup creation as it relies on the `clipPathId` property of the mask
       * @param {Function} [reviver]
       * @returns
       */
      _createEraserSVGMarkup: function(o) {
        return this.eraser ? (this.eraser.clipPathId = "MASK_" + f.Object.__uid++, [
          '<mask id="',
          this.eraser.clipPathId,
          '" >',
          this.eraser.toSVG(o),
          "</mask>",
          `
`
        ].join("")) : "";
      },
      /**
       * @private
       */
      _createBaseClipPathSVGMarkup: function(o, i) {
        return [
          this._createEraserSVGMarkup(i && i.reviver),
          t.call(this, o, i)
        ].join("");
      },
      /**
       * @private
       */
      _createBaseSVGMarkup: function(o, i) {
        return [
          this._createEraserSVGMarkup(i && i.reviver),
          r.call(this, o, i)
        ].join("");
      }
      /* _TO_SVG_END_ */
    });
    var e = f.Group.prototype._restoreObjectsState;
    f.util.object.extend(f.Group.prototype, {
      /**
       * @private
       * @param {fabric.Path} path
       */
      _addEraserPathToObjects: function(o) {
        this._objects.forEach(function(i) {
          f.EraserBrush.prototype._addPathToObjectEraser.call(
            f.EraserBrush.prototype,
            i,
            o
          );
        });
      },
      /**
       * Applies the group's eraser to its objects
       * @tutorial {@link http://fabricjs.com/erasing#erasable_property}
       */
      applyEraserToObjects: function() {
        var o = this, i = this.eraser;
        if (i) {
          delete this.eraser;
          var l = o.calcTransformMatrix();
          i.clone(function(u) {
            var d = o.clipPath;
            u.getObjects("path").forEach(function(g) {
              var v = f.util.multiplyTransformMatrices(
                l,
                g.calcTransformMatrix()
              );
              f.util.applyTransformToObject(g, v), d ? d.clone(function(m) {
                var C = f.EraserBrush.prototype.applyClipPathToPath.call(
                  f.EraserBrush.prototype,
                  g,
                  m,
                  l
                );
                o._addEraserPathToObjects(C);
              }, ["absolutePositioned", "inverted"]) : o._addEraserPathToObjects(g);
            });
          });
        }
      },
      /**
       * Propagate the group's eraser to its objects, crucial for proper functionality of the eraser within the group and nested objects.
       * @private
       */
      _restoreObjectsState: function() {
        return this.erasable === !0 && this.applyEraserToObjects(), e.call(this);
      }
    }), f.Eraser = f.util.createClass(f.Group, {
      /**
       * @readonly
       * @static
       */
      type: "eraser",
      /**
       * @default
       */
      originX: "center",
      /**
       * @default
       */
      originY: "center",
      drawObject: function(o) {
        o.save(), o.fillStyle = "black", o.fillRect(-this.width / 2, -this.height / 2, this.width, this.height), o.restore(), this.callSuper("drawObject", o);
      },
      /**
       * eraser should retain size
       * dimensions should not change when paths are added or removed
       * handled by {@link fabric.Object#_drawClipPath}
       * @override
       * @private
       */
      _getBounds: function() {
      },
      /* _TO_SVG_START_ */
      /**
       * Returns svg representation of an instance
       * use <mask> to achieve erasing for svg, credit: https://travishorn.com/removing-parts-of-shapes-in-svg-b539a89e5649
       * for masking we need to add a white rect before all paths
       *
       * @param {Function} [reviver] Method for further parsing of svg representation.
       * @return {String} svg representation of an instance
       */
      _toSVG: function(o) {
        var i = ["<g ", "COMMON_PARTS", ` >
`], l = -this.width / 2, u = -this.height / 2, d = [
          "<rect ",
          'fill="white" ',
          'x="',
          l,
          '" y="',
          u,
          '" width="',
          this.width,
          '" height="',
          this.height,
          `" />
`
        ].join("");
        i.push("		", d);
        for (var g = 0, v = this._objects.length; g < v; g++)
          i.push("		", this._objects[g].toSVG(o));
        return i.push(`</g>
`), i;
      }
      /* _TO_SVG_END_ */
    }), f.Eraser.fromObject = function(o, i) {
      var l = o.objects;
      f.util.enlivenObjects(l, function(u) {
        var d = f.util.object.clone(o, !0);
        delete d.objects, f.util.enlivenObjectEnlivables(o, d, function() {
          i && i(new f.Eraser(u, d, !0));
        });
      });
    };
    var s = f.Canvas.prototype._renderOverlay;
    f.util.object.extend(f.Canvas.prototype, {
      /**
       * Used by {@link #renderAll}
       * @returns boolean
       */
      isErasing: function() {
        return this.isDrawingMode && this.freeDrawingBrush && this.freeDrawingBrush.type === "eraser" && this.freeDrawingBrush._isErasing;
      },
      /**
       * While erasing the brush clips out the erasing path from canvas
       * so we need to render it on top of canvas every render
       * @param {CanvasRenderingContext2D} ctx
       */
      _renderOverlay: function(o) {
        s.call(this, o), this.isErasing() && !this.freeDrawingBrush.inverted && this.freeDrawingBrush._render();
      }
    }), f.EraserBrush = f.util.createClass(
      f.PencilBrush,
      /** @lends fabric.EraserBrush.prototype */
      {
        type: "eraser",
        /**
         * When set to `true` the brush will create a visual effect of undoing erasing
         */
        inverted: !1,
        /**
         * @private
         */
        _isErasing: !1,
        /**
         *
         * @private
         * @param {fabric.Object} object
         * @returns boolean
         */
        _isErasable: function(o) {
          return o.erasable !== !1;
        },
        /**
         * @private
         * This is designed to support erasing a collection with both erasable and non-erasable objects.
         * Iterates over collections to allow nested selective erasing.
         * Prepares the pattern brush that will draw on the top context to achieve the desired visual effect.
         * If brush is **NOT** inverted render all non-erasable objects.
         * If brush is inverted render all erasable objects that have been erased with their clip path inverted.
         * This will render the erased parts as if they were not erased.
         *
         * @param {fabric.Collection} collection
         * @param {CanvasRenderingContext2D} ctx
         * @param {{ visibility: fabric.Object[], eraser: fabric.Object[], collection: fabric.Object[] }} restorationContext
         */
        _prepareCollectionTraversal: function(o, i, l) {
          o.forEachObject(function(u) {
            u.forEachObject && u.erasable === "deep" ? this._prepareCollectionTraversal(u, i, l) : !this.inverted && u.erasable && u.visible ? (u.visible = !1, o.dirty = !0, l.visibility.push(u), l.collection.push(o)) : this.inverted && u.visible && (u.erasable && u.eraser ? (u.eraser.inverted = !0, u.dirty = !0, o.dirty = !0, l.eraser.push(u), l.collection.push(o)) : (u.visible = !1, o.dirty = !0, l.visibility.push(u), l.collection.push(o)));
          }, this);
        },
        /**
         * Prepare the pattern for the erasing brush
         * This pattern will be drawn on the top context, achieving a visual effect of erasing only erasable objects
         * @todo decide how overlay color should behave when `inverted === true`, currently draws over it which is undesirable
         * @private
         */
        preparePattern: function() {
          this._patternCanvas || (this._patternCanvas = f.util.createCanvasElement());
          var o = this._patternCanvas;
          o.width = this.canvas.width, o.height = this.canvas.height;
          var i = o.getContext("2d");
          if (this.canvas._isRetinaScaling()) {
            var l = this.canvas.getRetinaScaling();
            this.canvas.__initRetinaScaling(l, o, i);
          }
          var u = this.canvas.backgroundImage, d = u && this._isErasable(u), g = this.canvas.overlayImage, v = g && this._isErasable(g);
          if (!this.inverted && (u && !d || this.canvas.backgroundColor))
            d && (this.canvas.backgroundImage = void 0), this.canvas._renderBackground(i), d && (this.canvas.backgroundImage = u);
          else if (this.inverted && u && d) {
            var m = this.canvas.backgroundColor;
            this.canvas.backgroundColor = void 0, this.canvas._renderBackground(i), this.canvas.backgroundColor = m;
          }
          i.save(), i.transform.apply(i, this.canvas.viewportTransform);
          var C = { visibility: [], eraser: [], collection: [] };
          if (this._prepareCollectionTraversal(this.canvas, i, C), this.canvas._renderObjects(i, this.canvas._objects), C.visibility.forEach(function(p) {
            p.visible = !0;
          }), C.eraser.forEach(function(p) {
            p.eraser.inverted = !1, p.dirty = !0;
          }), C.collection.forEach(function(p) {
            p.dirty = !0;
          }), i.restore(), !this.inverted && (g && !v || this.canvas.overlayColor))
            v && (this.canvas.overlayImage = void 0), s.call(this.canvas, i), v && (this.canvas.overlayImage = g);
          else if (this.inverted && g && v) {
            var m = this.canvas.overlayColor;
            this.canvas.overlayColor = void 0, s.call(this.canvas, i), this.canvas.overlayColor = m;
          }
        },
        /**
         * Sets brush styles
         * @private
         * @param {CanvasRenderingContext2D} ctx
         */
        _setBrushStyles: function(o) {
          this.callSuper("_setBrushStyles", o), o.strokeStyle = "black";
        },
        /**
         * **Customiztion**
         *
         * if you need the eraser to update on each render (i.e animating during erasing) override this method by **adding** the following (performance may suffer):
         * @example
         * ```
         * if(ctx === this.canvas.contextTop) {
         *  this.preparePattern();
         * }
         * ```
         *
         * @override fabric.BaseBrush#_saveAndTransform
         * @param {CanvasRenderingContext2D} ctx
         */
        _saveAndTransform: function(o) {
          this.callSuper("_saveAndTransform", o), this._setBrushStyles(o), o.globalCompositeOperation = o === this.canvas.getContext() ? "destination-out" : "source-over";
        },
        /**
         * We indicate {@link fabric.PencilBrush} to repaint itself if necessary
         * @returns
         */
        needsFullRender: function() {
          return !0;
        },
        /**
         *
         * @param {fabric.Point} pointer
         * @param {fabric.IEvent} options
         * @returns
         */
        onMouseDown: function(o, i) {
          this.canvas._isMainEvent(i.e) && (this._prepareForDrawing(o), this._captureDrawingPath(o), this.preparePattern(), this._isErasing = !0, this.canvas.fire("erasing:start"), this._render());
        },
        /**
         * Rendering Logic:
         * 1. Use brush to clip canvas by rendering it on top of canvas (unnecessary if `inverted === true`)
         * 2. Render brush with canvas pattern on top context
         *
         */
        _render: function() {
          var o;
          this.inverted || (o = this.canvas.getContext(), this.callSuper("_render", o)), o = this.canvas.contextTop, this.canvas.clearContext(o), this.callSuper("_render", o), o.save();
          var i = this.canvas.getRetinaScaling(), l = 1 / i;
          o.scale(l, l), o.globalCompositeOperation = "source-in", o.drawImage(this._patternCanvas, 0, 0), o.restore();
        },
        /**
         * Creates fabric.Path object
         * @override
         * @private
         * @param {(string|number)[][]} pathData Path data
         * @return {fabric.Path} Path to add on canvas
         * @returns
         */
        createPath: function(o) {
          var i = this.callSuper("createPath", o);
          return i.globalCompositeOperation = this.inverted ? "source-over" : "destination-out", i.stroke = this.inverted ? "white" : "black", i;
        },
        /**
         * Utility to apply a clip path to a path.
         * Used to preserve clipping on eraser paths in nested objects.
         * Called when a group has a clip path that should be applied to the path before applying erasing on the group's objects.
         * @param {fabric.Path} path The eraser path in canvas coordinate plane
         * @param {fabric.Object} clipPath The clipPath to apply to the path
         * @param {number[]} clipPathContainerTransformMatrix The transform matrix of the object that the clip path belongs to
         * @returns {fabric.Path} path with clip path
         */
        applyClipPathToPath: function(o, i, l) {
          var u = f.util.invertTransform(o.calcTransformMatrix()), d = i.calcTransformMatrix(), g = i.absolutePositioned ? u : f.util.multiplyTransformMatrices(
            u,
            l
          );
          return i.absolutePositioned = !1, f.util.applyTransformToObject(
            i,
            f.util.multiplyTransformMatrices(
              g,
              d
            )
          ), o.clipPath = o.clipPath ? f.util.mergeClipPaths(i, o.clipPath) : i, o;
        },
        /**
         * Utility to apply a clip path to a path.
         * Used to preserve clipping on eraser paths in nested objects.
         * Called when a group has a clip path that should be applied to the path before applying erasing on the group's objects.
         * @param {fabric.Path} path The eraser path
         * @param {fabric.Object} object The clipPath to apply to path belongs to object
         * @param {Function} callback Callback to be invoked with the cloned path after applying the clip path
         */
        clonePathWithClipPath: function(o, i, l) {
          var u = i.calcTransformMatrix(), d = i.clipPath, g = this;
          o.clone(function(v) {
            d.clone(function(m) {
              l(g.applyClipPathToPath(v, m, u));
            }, ["absolutePositioned", "inverted"]);
          });
        },
        /**
         * Adds path to object's eraser, walks down object's descendants if necessary
         *
         * @fires erasing:end on object
         * @param {fabric.Object} obj
         * @param {fabric.Path} path
         */
        _addPathToObjectEraser: function(o, i) {
          var l = this;
          if (o.forEachObject && o.erasable === "deep") {
            var u = o._objects.filter(function(g) {
              return g.erasable;
            });
            u.length > 0 && o.clipPath ? this.clonePathWithClipPath(i, o, function(g) {
              u.forEach(function(v) {
                l._addPathToObjectEraser(v, g);
              });
            }) : u.length > 0 && u.forEach(function(g) {
              l._addPathToObjectEraser(g, i);
            });
            return;
          }
          var d = o.eraser;
          d || (d = new f.Eraser(), o.eraser = d), i.clone(function(g) {
            var v = f.util.multiplyTransformMatrices(
              f.util.invertTransform(
                o.calcTransformMatrix()
              ),
              g.calcTransformMatrix()
            );
            f.util.applyTransformToObject(g, v), d.addWithUpdate(g), o.set("dirty", !0), o.fire("erasing:end", {
              path: g
            }), o.group && Array.isArray(l.__subTargets) && l.__subTargets.push(o);
          });
        },
        /**
         * Add the eraser path to canvas drawables' clip paths
         *
         * @param {fabric.Canvas} source
         * @param {fabric.Canvas} path
         * @returns {Object} canvas drawables that were erased by the path
         */
        applyEraserToCanvas: function(o) {
          var i = this.canvas, l = {};
          return [
            "backgroundImage",
            "overlayImage"
          ].forEach(function(u) {
            var d = i[u];
            d && d.erasable && (this._addPathToObjectEraser(d, o), l[u] = d);
          }, this), l;
        },
        /**
         * On mouseup after drawing the path on contextTop canvas
         * we use the points captured to create an new fabric path object
         * and add it to every intersected erasable object.
         */
        _finalizeAndAddPath: function() {
          var o = this.canvas.contextTop, i = this.canvas;
          o.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate)), i.clearContext(i.contextTop), this._isErasing = !1;
          var l = this._points && this._points.length > 1 ? this.convertPointsToSVGPath(this._points) : null;
          if (!l || this._isEmptySVGPath(l)) {
            i.fire("erasing:end"), i.requestRenderAll();
            return;
          }
          var u = this.createPath(l);
          u.setCoords(), i.fire("before:path:created", { path: u });
          var d = this.applyEraserToCanvas(u), g = this;
          this.__subTargets = [];
          var v = [];
          i.forEachObject(function(m) {
            m.erasable && m.intersectsWithObject(u, !0, !0) && (g._addPathToObjectEraser(m, u), v.push(m));
          }), i.fire("erasing:end", {
            path: u,
            targets: v,
            subTargets: this.__subTargets,
            drawables: d
          }), delete this.__subTargets, i.requestRenderAll(), this._resetShadow(), i.fire("path:created", { path: u });
        }
      }
    );
  }();
})(dt);
const jt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABLnSURBVHic7Z15eFTV3cc/587cWbKShMgWIRCQsqjFrbiLtoJbbW0Bq7Z9tFKg1Forr/raVmJfq89bq+WtICo+9am2KqC+UvftVWqxKLbuoqgE2RII2WYmk1nuvef9IwZISDLb3Sbm89cwc+/5fcn9zrlzz/md3xEMMKRE8NjosRjeySDHIqkGYzSISpAVICqAAOADCqnbCkKAIiQIiRAJPEoMoUTwKLvxKHUYfIDKy8yLvCoEhqP/QZMRTgvIFbm6ahRSPREhTwCOA6YCxWk3ULc1/WCKIvF6I3i9n+H1vAyeB8TC1rcylOwq8s4A8unxfsLaaQjOAs4CDsupwUwM0BtebwKf7wM8nkcoUZeJS5pDuTVoL3lhAHn30Sple89EijkIzgdKTWs8VwMciKJIfL4t+LwPoJTcKubviprXuDW42gBydc14pH4JgsuAQy0JYqYBDkTxGAT8b6CqvxIL2l6yJkjuuNIAcvW4k0C/FsQ5WK3RKgMciM/XjD9wJwtDS9z2I9I1BpASwSPV30SyBJhmW2A7DNCFT40SCP6BBaEb3GIEVxhArqqeiZA3gTjG9uB2GqALn9pOsOC3YkHbLfYH746jBpAPjzsMRb8NxLmOiXDCAF34fM0E/ZeJBeG1TklwxADyiZEFxNQbkeJKQHVCwz6cNAAAAgqCGwh6zxGXh5rtjq7YHVCuGX0GHb53kWIxTl98VyAhGp1OKNogV5RcZXd023oAeV91gCJqkfwHDhivTxzvAXpQULAJn+cUMT+8145wtlwI+XDNVArlRiTX2hUzb4lGJxGJbZd3FZ9nRzjLL4ZcU30hir4BxFSrYw0YtGSASGStXFG01OpQlt0CZC0Kk8feCvIXVsUwBbfdAnpSWLCRvdETRC2aFc1bYgC5eooP2u8H5lrRvqm43QAAgcAujMAUcVVrq9lNm34LkKunFEH738iHi58vxGIjEdEt8s8Vo8xu2lQDyMdGVUD7C8BMM9sdBIgnymgObZZ/Kp9sZrOmGUA+OnYMmvpPYLpZbQ7Sg0SygJbQ2/Ke8hPMatIUA8jV4yvR5XPABDPaG6QfNE0lHHpFrigz5akqZwPItROLQX8GmGiCnkHSQdNUopGNcnl5zjkSORlArp7iIx5/BOTRuQoZJEO0ZIBk5B35l/KSXJrJ+jFQ1qIwpfohJHNyEWAb/goIjgD/UPCVgScIig9iETB00DWIh6F9DzR9DC2fOa04PQKBekbEqsUcEtmc7s068OSxtyKley++UKBkIgw5AoprQO0jjTD2BihKpxnUCiiqgGGTQPFCMgaNH0Hd/4GRtFd/usRiI9hdsA6ix2dzelY9gFxV/T0ED2ZzruWoxXDIyVB+DHgLUx+/+43UxwgPxELw0VqI1Oeu0QqKi28RPwlfn+lpGRtAPlwztXNsnzT+ujbiKYAR34CK4zq/vemSjgG6EALiUXj/Yeiwfeq+fxRFMmTICWJe84ZMTsvIAPLp8X4i2hvAERmJs5ryY2DU2el943uSiQG6EB5o+gw2PZr5uVbiUyMUVA7LJB09s6eAcPJW3HTxPX6ovgjGzM7u4meL1KG8Gk64GgJl9sVNRSJZRKI1oxT0tA0g14w+AyF+mrkqiwgMhYlXQtmRzmkQwDE/hvLcFieZSjQ6Xd5ZckW6h6d1C5BPjCygQ30HxPjslZlIQRXUXAreotzbyuYW0BPhgbpXYKcJbZmBqsYprCxP51aQXg8QU290zcUPDoeay825+GYhdRh7Goz4qtNKOkkm/STbVqVzaEoDyEeqv/JF9q7z+Cu+uPhBp5UcjNRh/EwYMs5pJZ1Eo+emM2mUugcwuB03ZO8qXhh7SedzvlsxNJg6B9QCp5WAlNARTdkL9GsAuap6Jp1LsJ1n1PkQHOm0itTIJEz7kdMqOonFquSK4qv7O6T/HkDwG1MFZUvxBBh6nNMq0kf1wZhTnFbRSSz+6/4+7tMAclX1t+isuOEswguHnu+0iswZfTx4Ak6rgESiVN5dsqivj/vuAQT9Osc2Ko8Hf6XTKjLH0GDyBU6r6KQjXtvXR70aQK4ZfQZwlFV60kZ4Oyd28pXSKvD6nVYB8fhQeeeQH/b2Ue89gFT6/eFgG+XT+p7GzQekDhOcW/jcjWTs5t7ePsgAcnXNeGCW5YLSodz+cgGmU1HjtIJOYrGR8u6iGT3fPrgHEPrluKFwhL8CisY4rSJ3pAFl1U6r6CRp3NTzrW4GkC/jRfID+xT1Q8kk3ODD3JFQlVWyjvl0xKfLu0d2G6Xq3gPsHTcLGGGnpj4pdknXaQbFLhnAMnQFPdRtrWZ3A0jdPTl+A6H77yKTDCWr0fRuPfw+A8inx/tBfNN+Rb3gLQKPuzLOckJqUOCSsYxEfLxcXrlvKnV/DxDRZmBmBc5cCLjkj2Um5e6YTUc3BEriJ13/3G8A4ZJJHwA1p7UO7iRY7rSC/WjJ2V0v9xtAuuTZHzpz/QYabpgi7iKROLzrpQJflFzPteq2mQif0wrMxw1Dwl1oml8uH/JV2NcDeE9yUs9BSN1pBeYjLanwkj1Cvxi6DCAwbb25KRhxpxWYjxZzWkF3dP106DKA5FhHxfREc32Z/cyJR5xW0B1dGw+gSImgc5sV9xB32bIrM2jd5rSC7iS1YilRFNbU1JDJHjt2kNjbOYkyYBDQWue0iO4YhmBl+XQFIb/itJaDkAZ0uHQVbjYIrzuXl+uJMxQMwyWJ7D2I5EmBhnSItTitoHd0JisI4c5Zl/CnTiswj72bnVbQO9IYp3RuquhCQp9A0mW/nLNBeGDbP5xW0TvSGKGAOMRpHb1jQOvbTovInVjEnfd/AMMoUoAKp3X0SeNr+f00IARsfdFpFX2jy6ACuGiaqgfxJmh932kV2aPr7r3/A0hDVQAXTVP1QsOLQD7ODQj45FmnRaRAKgqdu2i7l9hu2LPeaRWZEw/D3k1Oq+gfQwr3GwCg/kVIuPRZujcUL7zzV6dVpEbKPNm/x4jD1r/kyTSxgC0v58cjrOicDcyqxKjttO+AnU86rSI1bTvdUysoJQIFyJ/J98bXYM86p1X0TTwC7z/ktIr0EUIqQIfTOjJi5zPQ9LrTKg5GS8Cb9zitIjOEMBSQTU7ryAwJ2x6DXc84LWQ/8Qi8fgcgnVaSGR4l4QVhyw6VprP7FUiG4NBvd1b6dgLhgabNsOlxZ+LnihAdCtDotI6saf43e957kraw/QmXSVHIR+825u/FBxBKxItgR771XLpUeScyk9dbv8P22FTEZsmx4+qZdcSnBFRrzSDx8M/tR/K7Z05B0z2UBa/n9Iq1XFS2BL9otzS26XiU3UKuHvtTkHc4rSUddLy8G5rJS83zaE4evIVegS/J8RN2cMKEHQR9ac7ApVsqVnj4uLmG3z87g/rWg6uU+lSDU4c+z48rfkZQyYMxAICiooeEXDXmbIR4ymktqXg/cjrPNP6cFi316nW/qjG1qpGjquuprmztv8pACgO0G2X8s24i968/iub21BVKA6rO7BErmTvEHRX2+qW09DrRWRJG/8RpLX3RlDiUvzVewyfR7LYjLAokGXdIC2MrWxheGmFocZRC/wG9wwEGkEKlQy9kb3sZb+0YzbPvTWB7U3brZYcXtfCLkQuZHPh7VufbQlHxyUJKBGuqWwHXrch8K3QOjzdeR9Iwt96e36vjVzX8Xp22xkZa2wM0R4JpfcMzQRFwxvBnuWLo5SjCZXkNiiJZbHgFgFw95lUQrlke1q4P4dHdS/io3XpJ735ofbbOyOImflP1LYarLkp09ftaxc8TZV8sDRP/dljOPhriNdy57X5bLr5d7ApXsOjTdWyIuqRwJIDHWwddS8MM4YoJ9w8iM7hrx31p/dDLN+JJhZu3LOPRtuucltKJx/MS7FscKh3/pfJ26Cweqr+FhOHCvQBMwjDgvm0/497m252WAgH1PvjCAGLO1gbgY6e0vNF2AWt212LgcUqCfUh4fOeF/LFxpXMaVDUuLmv+ELqXiHnOCS0b285n7Z7ryJfcFFOQ8HzDOaxs+oMz8VX1va6X+//qhvKE3To+bj+JtY3XIQdEQcgMkbB211zWtP3S/tg+7wNdL/cboLVsHdBql4Yd8ck82HALhnRRDT27kfDA9kW81vFd+2IqioSie/f9s+uFmP+vJELaknPVYZTwUP0tpg/w5COGAbdt/QMNSZsqo/p9Ww7cTq5HpVBheSqrRPDo7htoSbqkfKoLiCc9/GrH4xg5bOaeNqq/W9pSj19eW18AGqyM/1rLhXwYOdXKEHlJQ7iCOxotTinzenQq2pYe+FY3A4g56CAfwCJakiN5oXmhVc3nPS81zGJTwsIRUJ9/o5jTPQv84Gcvj7IcC9ZiSQSP7F4yoAd6csWQ8LvtKzGkRY/EqnJtz7cOiiS+U/c58LTZsd8Nn0ldh/PbELmdxvZSVrXdYH7DgUCDWBA5aMS3d6sJ43/MjK1LlReaFpjZ5IDmsYbL6DBM3hvZp/6+t7d7NYCYve0l4DWzYm9om01zssqs5gY8HQkv9zQtTX1guvjUiFgYvq23j/q52Yj/NiO2JlVebb7EjKa+VKxrnEVcmrRnQsDf67cf+jPA7LonQL6Za+y3w2cR0gdg/X+LSWgKD7bcmHtDPjXCgsh/9fVxnwYQAglica7x17delGsTX1qe22vCEHEgeIMQ9JmP1u/zhpizdR05PBFsjx3O7vgA2vzJZiIxH+s75mbfQCDQIBaG+p1yTP3AacjFZLmE/K2wezYhyVeeaJ6f3YlCgN93aarDUhpAXPj5JoTo80dEX+hS5d3wNzI9bZAefNQ2kbjMooxTsGCdWBBKWaQovSGnQPy3QEbVjj+PHUlUH5LJKYP0gqYJ/t7+vcxO8nqTaOq30jk0LQOI83ZFQfkB9P1joieb212yW+YAYH04rWu5n6KCxeKq1rRyO9IedBZztvwDQdojhJuj7tqEJJ/ZHMlgO4eCgjfE/NAf0z08s1mHCNeDTFm5MWYUDf76N5FQh58WPY1UeVWNoflmZtJ2RgYQl26NoXguAEL9HbczNunLmednIW92nN3/AR4hKQx+N92uv4uM5x3Fd7d8ghTz+jtmV3xips0OkoL3oyf3f0Bh0e1ifijjVd5ZTTyLuXWrEbLPR8PB7t98Po/186UqKNggFoazGrXNPvPgg8+vBXqtj9Kazv1qkIxoS/bxSB0I7KIpVffQN1kbQNRiEOu4pLcJo5bkoAHMJpLsJT9AVdsJqEeKWrKui5NT7pH4we52NP9ZwIcHvh/SBmf/zCaW7LFsTvUmCBZNF/PDOVV5yzn5TFy0eS9oZ/LFSKEmfehSzbXZQXogJfvzA7wejeKSU8XClpw3UzAl+1DM2bETlNNAfpocTPq0jIheBl6vRnHw62Je8wYz2jQt/VTM2bINxMkdstCxVcYDnZAYplFSOF38OGJawWRT84/FnK0N2+JHzBru35wnddLyhyHBqNxVOGWGmNf2LzPbNT0Bfdqld22dMPyFUTUFr7uoIE5+c2jpHv2Cmr+MP+nK+03ff87S8drVd/z5sbdDs77t5rX/dhSJyhoBXz3kgzb1vPVDa2fUWlIC1fIB+7XLly95K3zukrhe4MrJAbcaQFHgjKqXXv/5Ld/PrkBiunGsbBzg/EWLbjyufNWMEf5P+p1AGmQ/pcEos6sf/LXVFx9s6AG6ePm+2kBDeMJjH0RmnOWmcQI39QBCwNShmyNHVL059qLFi20p4297t/zknct+uCl84j3NWpUrditziwEK/UlmjX7y7stqF9m6hs6R+/Kz99aWN0Um/e3j6IknJqXfCQn7cNoAioDDKze1HX3Iq0d95z9rt9gd39EfZs/d+fuj6xOHPbC5/WuTnHpScMwAAqpK9uinDHv+iouXXLPCGREOG6CLp1Ys+/6W9ml37Iofll1p7hxwwgClwSgzhj/74Lybfnqx7cF74AoDANTKWmXassobtscP/9nO+KQyu+LaaYChhWF53ND1ryy6+bLTbQuaAtcY4ECeXr50bn18/M11HUeP0y0unGS5AQSMKGoxpg975f7Lb1yUcqWO3bjSAF08t2zp1xq1EUu3x6ccE9KGWeIEqwwQUHUmlH4amVa28cq5tdf8yZIgJuBqAxzIU8tuP79Fr7puW+zIY8NauWlFhc00gNcrGVu6IzGp+K3/rf96wyVWDd+aSd4YoIuXa2u94crKK9q04Rc3JUZ9pTE5pjCXaqO5GEAIKAlEGVW4K1pTuOn5ib76782orY1l3aAD5J0BevLiyqXDonHvj8Ja5dnNWtXUZm1kSUwvSvv/lYkBPAqUBtrloYXbwlVFWzeM9jZcfW7tL3POynGSvDdAbzy17LbDDI96akIvOiamFU6OGsWjY7K4JGEUBOJGoapJn6IbXpGQQd7blMSjgFfR8Xh0vELDp2gy4O0wyv3NkXJ/U/0Q396NxZ6Wv85d8ktHKqpbyf8DvioSsQ/5VZsAAAAASUVORK5CYII=", xt = 18, Ct = 150, Tt = 200, pt = 64;
class Ot extends dt.fabric.Group {
  constructor(f, Z) {
    super(f, Z), this.isNode = Z.isNode;
  }
}
const bt = {
  stroke: "black",
  strokeWidth: 3,
  selectable: !1,
  evented: !1
};
class Bt {
  constructor(f, Z) {
    vt(this, "_createCanvas", (f) => {
      const Z = document.getElementById(f.id), Q = Z == null ? void 0 : Z.parentElement;
      let b = Q != null && f.height > Q.clientHeight && f.boundToParentSize ? Q.clientHeight : f.height, it = Q != null && f.width > Q.clientWidth && f.boundToParentSize ? Q.clientWidth : f.width;
      return new dt.fabric.Canvas(f.id, {
        width: it,
        height: b,
        hoverCursor: "pointer",
        selection: !1,
        allowTouchScrolling: !0,
        enableRetinaScaling: !1,
        isDrawingMode: !1
      });
    });
    vt(this, "_setupCanvas", () => {
      function f(b) {
        const it = b.e, ot = it.deltaY;
        let ht = this.getZoom();
        ht *= 0.999 ** ot, ht > 20 && (ht = 20), ht < 0.1 && (ht = 0.1), this.zoomToPoint({ x: it.offsetX, y: it.offsetY }, ht), b.e.preventDefault(), b.e.stopPropagation();
      }
      function Z(b) {
        const it = b.e;
        if (it.touches && it.touches.length == 2) {
          this.isDragging = !1;
          let ot = new dt.fabric.Point(
            it.touches[0].clientX,
            it.touches[0].clientY
          ), ht = new dt.fabric.Point(
            it.touches[1].clientX,
            it.touches[1].clientY
          ), ft = ot.midPointFrom(ht);
          b.self.state == "start" && (this.zoomStartScale = this.getZoom());
          let c = this.zoomStartScale * b.self.scale;
          console.log(ft), this.zoomToPoint(ft, c), this.isDragging = !0;
        }
      }
      function Q() {
        var b = this.viewportTransform;
        b[4] = this.getCenter().left - Ct, b[5] = Ct, this.setViewportTransform(b), this.setZoom(1), this.requestRenderAll();
      }
      this.canvas.on("mouse:wheel", f), this.canvas.on("touch:gesture", Z), this.canvas.on("touch:longpress", Q), this.canvas.on("mouse:dblclick", Q), this.canvas.on("mouse:down", function(b) {
        if (b.target)
          return;
        var it = b.e;
        let ot = it.type === "touchstart" && it.touches.length === 1;
        this.isDragging = !0, this.setCursor("grabbing"), this.lastPosX = ot ? it.touches[0].clientX : it.clientX, this.lastPosY = ot ? it.touches[0].clientY : it.clientY;
      }), this.canvas.on("mouse:move", function(b) {
        if (this.isDragging) {
          let ht = b.e.type === "touchmove";
          var it = b.e;
          let ft = ht ? it.touches[0].clientX : it.clientX, c = ht ? it.touches[0].clientY : it.clientY;
          const n = this.getZoom();
          var ot = this.viewportTransform;
          ot[4] += ft - this.lastPosX, ot[5] += c - this.lastPosY, ot[4] > this.getWidth() && (ot[4] = this.getWidth()), ot[4] < -(this.getWidth() * n) && (ot[4] = -(this.getWidth() * n)), ot[5] > this.getHeight() && (ot[5] = this.getHeight()), ot[5] < -(this.getHeight() * n) && (ot[5] = -(this.getHeight() * n)), this.requestRenderAll(), this.lastPosX = ft, this.lastPosY = c;
        }
      }), this.canvas.on("mouse:up", function() {
        this.setViewportTransform(this.viewportTransform), this.isDragging = !1;
      });
    });
    vt(this, "_setImageSrc", async (f, Z) => new Promise((Q, b) => {
      f.setSrc(
        Z,
        function(it) {
          it.set({
            originX: "center",
            originY: "center"
          }), f ? Q(f) : b("image src not set");
        },
        { crossOrigin: "anonymous" }
      );
    }));
    vt(this, "_createNode", async (f, Z) => {
      Z = Z || jt;
      let Q = new dt.fabric.Image(Z, {
        lockScalingFlip: !0,
        crossOrigin: "Anonymous"
      });
      Q = await this._setImageSrc(Q, Z), Q.scale(pt * 2 / Q.width);
      const b = new dt.fabric.Circle({
        radius: pt,
        originX: "center",
        originY: "center",
        // Image scaling is applied to the clip path, so we need to invert it
        scaleX: 1 / Q.scaleX,
        scaleY: 1 / Q.scaleY
      });
      Q.set({
        clipPath: b
      });
      const it = new dt.fabric.Text(f, {
        fontSize: xt,
        originX: "center",
        originY: "center",
        fontWeight: "bold",
        top: Q.getScaledHeight() / 2 + xt
      });
      return new Ot([Q, it], {
        originX: "center",
        originY: "center",
        selectable: !1,
        isNode: !0
      });
    });
    vt(this, "_drawPartnerLine", (f, Z, Q) => {
      const b = f.getCenterPoint(), it = Z.getCenterPoint();
      return new dt.fabric.Line(
        [
          b.x + pt,
          b.y - pt / 2,
          it.x - pt,
          it.y - pt / 2
        ],
        {
          ...bt,
          strokeDashArray: Q ? [] : [5, 5]
        }
      );
    });
    vt(this, "_drawParentLine", (f, Z) => {
      var it;
      let Q;
      return f instanceof dt.fabric.Line ? (Q = f.getCenterPoint(), Z || (Q = Q.add(
        new dt.fabric.Point(
          (f.x2 - f.x1) / 2 - pt,
          0
        )
      ))) : Q = (it = f._object) == null ? void 0 : it.getCenterPoint(), new dt.fabric.Line(
        [
          Q.x,
          Q.y,
          Q.x,
          Q.y + Tt
        ],
        {
          ...bt,
          strokeDashArray: f instanceof dt.fabric.Line ? [] : [5, 5]
        }
      );
    });
    vt(this, "_drawChildLine", (f, Z) => {
      const b = f._object.getCenterPoint(), it = Z.strokeWidth ? Z.strokeWidth : 0, ot = new dt.fabric.Line(
        [
          Z.x2 + (Z.x2 > b.x ? it : 0),
          Z.y2,
          b.x,
          Z.y2
        ],
        bt
      ), ht = new dt.fabric.Line(
        [
          ot.x2,
          ot.y2,
          b.x,
          b.y - pt - xt
        ],
        bt
      );
      f._childLine = new dt.fabric.Group([ot, ht], {
        selectable: !1
      }), this.canvas.add(f._childLine);
    });
    vt(this, "_drawNode", async (f) => {
      const Z = this.canvas.getCenter(), Q = await this._createNode(f.name, f.image);
      Q.on("mousedown", () => {
        f.onClick && f.onClick(f);
      }), f._object = Q;
      const b = f.relationships;
      let it = Z.left;
      const ot = Ct * (f.generation + 1) + f.generation * Tt;
      if (Q.set({ left: it, top: ot }), this.canvas.add(Q), b && b.length > 0) {
        b.sort((ht, ft) => ht.isMarried && !ft.isMarried ? -1 : !ht.isMarried && ft.isMarried ? 1 : 0);
        for (const ht of f.relationships) {
          if (ht.partner) {
            const ft = await this._createNode(
              ht.partner.name,
              ht.partner.image
            );
            ft.on("mousedown", () => {
              var c;
              (c = ht.partner) != null && c.onClick && ht.partner.onClick(ht.partner);
            }), ht.partner._object = ft, ft.set({ left: it, top: ot }), this.canvas.add(ft);
          }
          if (ht.children && ht.children.length > 0)
            for (const ft of ht.children)
              await this._drawNode(ft);
        }
      }
    });
    vt(this, "_groupNodes", (f, Z) => {
      f[Z.generation] ? f[Z.generation].push(Z._object) : f[Z.generation] = [Z._object], Z.relationships && f[Z.generation].push(
        ...Z.relationships.map(
          (Q) => {
            var b;
            return (b = Q.partner) == null ? void 0 : b._object;
          }
        )
      ), Z.relationships && Z.relationships.forEach((Q) => {
        Q.children && Q.children.forEach((b) => {
          this._groupNodes(f, b);
        });
      });
    });
    vt(this, "_positionNodes", () => {
      let f = [];
      this._groupNodes(f, this.root);
      const Z = this.canvas.getCenter();
      f.forEach((Q) => {
        const b = Q.length * Q[0].getBoundingRect().width + (Q.length - 1) * Ct;
        let it = Z.left - b / 2;
        Q.forEach((ot) => {
          ot && ot.set({ left: it }), it += (ot ? ot.getBoundingRect().width : 0) + Ct;
        });
      });
    });
    vt(this, "_drawPartnerRelations", (f) => {
      const Z = f.relationships;
      if (Z && Z.length > 0) {
        for (const Q of Z)
          if (Q.partner && (Q._relation = this._drawPartnerLine(
            f._object,
            Q.partner._object,
            Q.isMarried
          ), this.canvas.add(Q._relation)), Q.children && Q.children.length > 0)
            for (const b of Q.children)
              this._drawPartnerRelations(b);
      }
    });
    vt(this, "_drawChildRelations", (f) => {
      const Z = f.relationships;
      if (Z && Z.length > 0) {
        for (const Q of Z)
          if (Q.children && Q.children.length > 0) {
            Q._parentLine = this._drawParentLine(
              Q._relation ? Q._relation : f,
              Q.partner ? Z.indexOf(Q) === 0 : void 0
            ), this.canvas.add(Q._parentLine);
            for (const b of Q.children)
              this._drawChildRelations(b), this._drawChildLine(
                b,
                Q._parentLine
              );
          }
      }
    });
    vt(this, "_bringNodesToFront", () => {
      this.canvas.getObjects().forEach((f) => {
        f instanceof Ot && f.bringToFront();
      });
    });
    vt(this, "drawTree", async () => {
      await this._drawNode(this.root), this._positionNodes(), this._drawPartnerRelations(this.root), this._drawChildRelations(this.root), this._bringNodesToFront(), this.canvas.renderAll();
    });
    this.root = f, this.canvas = this._createCanvas(Z), this._setupCanvas();
  }
}
export {
  Bt as default
};
