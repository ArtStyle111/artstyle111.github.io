function onYouTubeIframeAPIReady() {
  ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}! function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  function n(e) {
    var t = e.length,
      n = oe.type(e);
    return "function" !== n && !oe.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
  }

  function i(e, t, n) {
    if (oe.isFunction(t)) return oe.grep(e, function(e, i) {
      return !!t.call(e, i, e) !== n
    });
    if (t.nodeType) return oe.grep(e, function(e) {
      return e === t !== n
    });
    if ("string" == typeof t) {
      if (fe.test(t)) return oe.filter(t, e, n);
      t = oe.filter(t, e)
    }
    return oe.grep(e, function(e) {
      return oe.inArray(e, t) >= 0 !== n
    })
  }

  function r(e, t) {
    do e = e[t]; while (e && 1 !== e.nodeType);
    return e
  }

  function o(e) {
    var t = _e[e] = {};
    return oe.each(e.match(xe) || [], function(e, n) {
      t[n] = !0
    }), t
  }

  function a() {
    me.addEventListener ? (me.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (me.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
  }

  function s() {
    (me.addEventListener || "load" === event.type || "complete" === me.readyState) && (a(), oe.ready())
  }

  function l(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var i = "data-" + t.replace(Se, "-$1").toLowerCase();
      if (n = e.getAttribute(i), "string" == typeof n) {
        try {
          n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ke.test(n) ? oe.parseJSON(n) : n)
        } catch (r) {}
        oe.data(e, t, n)
      } else n = void 0
    }
    return n
  }

  function c(e) {
    var t;
    for (t in e)
      if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0
  }

  function u(e, t, n, i) {
    if (oe.acceptData(e)) {
      var r, o, a = oe.expando,
        s = e.nodeType,
        l = s ? oe.cache : e,
        c = s ? e[a] : e[a] && a;
      if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[a] = X.pop() || oe.guid++ : a), l[c] || (l[c] = s ? {} : {
        toJSON: oe.noop
      }), "object" != typeof t && "function" != typeof t || (i ? l[c] = oe.extend(l[c], t) : l[c].data = oe.extend(l[c].data, t)), o = l[c], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[oe.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[oe.camelCase(t)])) : r = o, r
    }
  }

  function p(e, t, n) {
    if (oe.acceptData(e)) {
      var i, r, o = e.nodeType,
        a = o ? oe.cache : e,
        s = o ? e[oe.expando] : oe.expando;
      if (a[s]) {
        if (t && (i = n ? a[s] : a[s].data)) {
          oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in i ? t = [t] : (t = oe.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
          for (; r--;) delete i[t[r]];
          if (n ? !c(i) : !oe.isEmptyObject(i)) return
        }(n || (delete a[s].data, c(a[s]))) && (o ? oe.cleanData([e], !0) : ie.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
      }
    }
  }

  function d() {
    return !0
  }

  function f() {
    return !1
  }

  function h() {
    try {
      return me.activeElement
    } catch (e) {}
  }

  function m(e) {
    var t = Fe.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement)
      for (; t.length;) n.createElement(t.pop());
    return n
  }

  function y(e, t) {
    var n, i, r = 0,
      o = typeof e.getElementsByTagName !== Pe ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Pe ? e.querySelectorAll(t || "*") : void 0;
    if (!o)
      for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || oe.nodeName(i, t) ? o.push(i) : oe.merge(o, y(i, t));
    return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], o) : o
  }

  function v(e) {
    Ee.test(e.type) && (e.defaultChecked = e.checked)
  }

  function g(e, t) {
    return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function b(e) {
    return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type, e
  }

  function x(e) {
    var t = Xe.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function _(e, t) {
    for (var n, i = 0; null != (n = e[i]); i++) oe._data(n, "globalEval", !t || oe._data(t[i], "globalEval"))
  }

  function w(e, t) {
    if (1 === t.nodeType && oe.hasData(e)) {
      var n, i, r, o = oe._data(e),
        a = oe._data(t, o),
        s = o.events;
      if (s) {
        delete a.handle, a.events = {};
        for (n in s)
          for (i = 0, r = s[n].length; i < r; i++) oe.event.add(t, n, s[n][i])
      }
      a.data && (a.data = oe.extend({}, a.data))
    }
  }

  function T(e, t) {
    var n, i, r;
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !ie.noCloneEvent && t[oe.expando]) {
        r = oe._data(t);
        for (i in r.events) oe.removeEvent(t, i, r.handle);
        t.removeAttribute(oe.expando)
      }
      "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ie.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ee.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
  }

  function P(t, n) {
    var i = oe(n.createElement(t)).appendTo(n.body),
      r = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(i[0]).display : oe.css(i[0], "display");
    return i.detach(), r
  }

  function k(e) {
    var t = me,
      n = et[e];
    return n || (n = P(e, t), "none" !== n && n || (Je = (Je || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Je[0].contentWindow || Je[0].contentDocument).document, t.write(), t.close(), n = P(e, t), Je.detach()), et[e] = n), n
  }

  function S(e, t) {
    return {
      get: function() {
        var n = e();
        if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
      }
    }
  }

  function C(e, t) {
    if (t in e) return t;
    for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = ft.length; r--;)
      if (t = ft[r] + n, t in e) return t;
    return i
  }

  function j(e, t) {
    for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++) i = e[a], i.style && (o[a] = oe._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && $e(i) && (o[a] = oe._data(i, "olddisplay", k(i.nodeName)))) : o[a] || (r = $e(i), (n && "none" !== n || !r) && oe._data(i, "olddisplay", r ? n : oe.css(i, "display"))));
    for (a = 0; a < s; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
    return e
  }

  function $(e, t, n) {
    var i = ct.exec(t);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
  }

  function Y(e, t, n, i, r) {
    for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += oe.css(e, n + je[o], !0, r)), i ? ("content" === n && (a -= oe.css(e, "padding" + je[o], !0, r)), "margin" !== n && (a -= oe.css(e, "border" + je[o] + "Width", !0, r))) : (a += oe.css(e, "padding" + je[o], !0, r), "padding" !== n && (a += oe.css(e, "border" + je[o] + "Width", !0, r)));
    return a
  }

  function E(e, t, n) {
    var i = !0,
      r = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = tt(e),
      a = ie.boxSizing() && "border-box" === oe.css(e, "boxSizing", !1, o);
    if (r <= 0 || null == r) {
      if (r = nt(e, t, o), (r < 0 || null == r) && (r = e.style[t]), rt.test(r)) return r;
      i = a && (ie.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
    }
    return r + Y(e, t, n || (a ? "border" : "content"), i, o) + "px"
  }

  function A(e, t, n, i, r) {
    return new A.prototype.init(e, t, n, i, r)
  }

  function M() {
    return setTimeout(function() {
      ht = void 0
    }), ht = oe.now()
  }

  function D(e, t) {
    var n, i = {
        height: e
      },
      r = 0;
    for (t = t ? 1 : 0; r < 4; r += 2 - t) n = je[r], i["margin" + n] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function I(e, t, n) {
    for (var i, r = (xt[t] || []).concat(xt["*"]), o = 0, a = r.length; o < a; o++)
      if (i = r[o].call(n, t, e)) return i
  }

  function Q(e, t, n) {
    var i, r, o, a, s, l, c, u, p = this,
      d = {},
      f = e.style,
      h = e.nodeType && $e(e),
      m = oe._data(e, "fxshow");
    n.queue || (s = oe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
      s.unqueued || l()
    }), s.unqueued++, p.always(function() {
      p.always(function() {
        s.unqueued--, oe.queue(e, "fx").length || s.empty.fire()
      })
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = oe.css(e, "display"), u = k(e.nodeName), "none" === c && (c = u), "inline" === c && "none" === oe.css(e, "float") && (ie.inlineBlockNeedsLayout && "inline" !== u ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ie.shrinkWrapBlocks() || p.always(function() {
      f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
    }));
    for (i in t)
      if (r = t[i], yt.exec(r)) {
        if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
          if ("show" !== r || !m || void 0 === m[i]) continue;
          h = !0
        }
        d[i] = m && m[i] || oe.style(e, i)
      } if (!oe.isEmptyObject(d)) {
      m ? "hidden" in m && (h = m.hidden) : m = oe._data(e, "fxshow", {}), o && (m.hidden = !h), h ? oe(e).show() : p.done(function() {
        oe(e).hide()
      }), p.done(function() {
        var t;
        oe._removeData(e, "fxshow");
        for (t in d) oe.style(e, t, d[t])
      });
      for (i in d) a = I(h ? m[i] : 0, i, p), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
    }
  }

  function F(e, t) {
    var n, i, r, o, a;
    for (n in e)
      if (i = oe.camelCase(n), r = t[i], o = e[n], oe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = oe.cssHooks[i], a && "expand" in a) {
        o = a.expand(o), delete e[i];
        for (n in o) n in e || (e[n] = o[n], t[n] = r)
      } else t[i] = r
  }

  function L(e, t, n) {
    var i, r, o = 0,
      a = bt.length,
      s = oe.Deferred().always(function() {
        delete l.elem
      }),
      l = function() {
        if (r) return !1;
        for (var t = ht || M(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(o);
        return s.notifyWith(e, [c, o, n]), o < 1 && l ? n : (s.resolveWith(e, [c]), !1)
      },
      c = s.promise({
        elem: e,
        props: oe.extend({}, t),
        opts: oe.extend(!0, {
          specialEasing: {}
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: ht || M(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var i = oe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
          return c.tweens.push(i), i
        },
        stop: function(t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) c.tweens[n].run(1);
          return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
        }
      }),
      u = c.props;
    for (F(u, c.opts.specialEasing); o < a; o++)
      if (i = bt[o].call(c, e, u, c.opts)) return i;
    return oe.map(u, I, c), oe.isFunction(c.opts.start) && c.opts.start.call(e, c), oe.fx.timer(oe.extend(l, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }

  function O(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var i, r = 0,
        o = t.toLowerCase().match(xe) || [];
      if (oe.isFunction(n))
        for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
    }
  }

  function N(e, t, n, i) {
    function r(s) {
      var l;
      return o[s] = !0, oe.each(e[s] || [], function(e, s) {
        var c = s(t, n, i);
        return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
      }), l
    }
    var o = {},
      a = e === Ht;
    return r(t.dataTypes[0]) || !o["*"] && r("*")
  }

  function B(e, t) {
    var n, i, r = oe.ajaxSettings.flatOptions || {};
    for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
    return n && oe.extend(!0, e, n), e
  }

  function z(e, t, n) {
    for (var i, r, o, a, s = e.contents, l = e.dataTypes;
      "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (a in s)
        if (s[a] && s[a].test(r)) {
          l.unshift(a);
          break
        } if (l[0] in n) o = l[0];
    else {
      for (a in n) {
        if (!l[0] || e.converters[a + " " + l[0]]) {
          o = a;
          break
        }
        i || (i = a)
      }
      o = o || i
    }
    if (o) return o !== l[0] && l.unshift(o), n[o]
  }

  function R(e, t, n, i) {
    var r, o, a, s, l, c = {},
      u = e.dataTypes.slice();
    if (u[1])
      for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
    for (o = u.shift(); o;)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
        if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
      if (a = c[l + " " + o] || c["* " + o], !a)
        for (r in c)
          if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
            a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
            break
          } if (a !== !0)
        if (a && e["throws"]) t = a(t);
        else try {
          t = a(t)
        } catch (p) {
          return {
            state: "parsererror",
            error: a ? p : "No conversion from " + l + " to " + o
          }
        }
    }
    return {
      state: "success",
      data: t
    }
  }

  function H(e, t, n, i) {
    var r;
    if (oe.isArray(t)) oe.each(t, function(t, r) {
      n || Xt.test(e) ? i(e, r) : H(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
    });
    else if (n || "object" !== oe.type(t)) i(e, t);
    else
      for (r in t) H(e + "[" + r + "]", t[r], n, i)
  }

  function q() {
    try {
      return new e.XMLHttpRequest
    } catch (t) {}
  }

  function W() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP")
    } catch (t) {}
  }

  function V(e) {
    return oe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
  }
  var X = [],
    U = X.slice,
    G = X.concat,
    Z = X.push,
    K = X.indexOf,
    J = {},
    ee = J.toString,
    te = J.hasOwnProperty,
    ne = "".trim,
    ie = {},
    re = "1.11.0",
    oe = function(e, t) {
      return new oe.fn.init(e, t)
    },
    ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    se = /^-ms-/,
    le = /-([\da-z])/gi,
    ce = function(e, t) {
      return t.toUpperCase()
    };
  oe.fn = oe.prototype = {
    jquery: re,
    constructor: oe,
    selector: "",
    length: 0,
    toArray: function() {
      return U.call(this)
    },
    get: function(e) {
      return null != e ? e < 0 ? this[e + this.length] : this[e] : U.call(this)
    },
    pushStack: function(e) {
      var t = oe.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    },
    each: function(e, t) {
      return oe.each(this, e, t)
    },
    map: function(e) {
      return this.pushStack(oe.map(this, function(t, n) {
        return e.call(t, n, t)
      }))
    },
    slice: function() {
      return this.pushStack(U.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: Z,
    sort: X.sort,
    splice: X.splice
  }, oe.extend = oe.fn.extend = function() {
    var e, t, n, i, r, o, a = arguments[0] || {},
      s = 1,
      l = arguments.length,
      c = !1;
    for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || oe.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
      if (null != (r = arguments[s]))
        for (i in r) e = a[i], n = r[i], a !== n && (c && n && (oe.isPlainObject(n) || (t = oe.isArray(n))) ? (t ? (t = !1, o = e && oe.isArray(e) ? e : []) : o = e && oe.isPlainObject(e) ? e : {}, a[i] = oe.extend(c, o, n)) : void 0 !== n && (a[i] = n));
    return a
  }, oe.extend({
    expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isFunction: function(e) {
      return "function" === oe.type(e)
    },
    isArray: Array.isArray || function(e) {
      return "array" === oe.type(e)
    },
    isWindow: function(e) {
      return null != e && e == e.window
    },
    isNumeric: function(e) {
      return e - parseFloat(e) >= 0
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    isPlainObject: function(e) {
      var t;
      if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
      try {
        if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
      } catch (n) {
        return !1
      }
      if (ie.ownLast)
        for (t in e) return te.call(e, t);
      for (t in e);
      return void 0 === t || te.call(e, t)
    },
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? J[ee.call(e)] || "object" : typeof e
    },
    globalEval: function(t) {
      t && oe.trim(t) && (e.execScript || function(t) {
        e.eval.call(e, t)
      })(t)
    },
    camelCase: function(e) {
      return e.replace(se, "ms-").replace(le, ce)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t, i) {
      var r, o = 0,
        a = e.length,
        s = n(e);
      if (i) {
        if (s)
          for (; o < a && (r = t.apply(e[o], i), r !== !1); o++);
        else
          for (o in e)
            if (r = t.apply(e[o], i), r === !1) break
      } else if (s)
        for (; o < a && (r = t.call(e[o], o, e[o]), r !== !1); o++);
      else
        for (o in e)
          if (r = t.call(e[o], o, e[o]), r === !1) break;
      return e
    },
    trim: ne && !ne.call("\ufeff ") ? function(e) {
      return null == e ? "" : ne.call(e)
    } : function(e) {
      return null == e ? "" : (e + "").replace(ae, "")
    },
    makeArray: function(e, t) {
      var i = t || [];
      return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : Z.call(i, e)), i
    },
    inArray: function(e, t, n) {
      var i;
      if (t) {
        if (K) return K.call(t, e, n);
        for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
          if (n in t && t[n] === e) return n
      }
      return -1
    },
    merge: function(e, t) {
      for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
      if (n !== n)
        for (; void 0 !== t[i];) e[r++] = t[i++];
      return e.length = r, e
    },
    grep: function(e, t, n) {
      for (var i, r = [], o = 0, a = e.length, s = !n; o < a; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
      return r
    },
    map: function(e, t, i) {
      var r, o = 0,
        a = e.length,
        s = n(e),
        l = [];
      if (s)
        for (; o < a; o++) r = t(e[o], o, i), null != r && l.push(r);
      else
        for (o in e) r = t(e[o], o, i), null != r && l.push(r);
      return G.apply([], l)
    },
    guid: 1,
    proxy: function(e, t) {
      var n, i, r;
      if ("string" == typeof t && (r = e[t], t = e, e = r), oe.isFunction(e)) return n = U.call(arguments, 2), i = function() {
        return e.apply(t || this, n.concat(U.call(arguments)))
      }, i.guid = e.guid = e.guid || oe.guid++, i
    },
    now: function() {
      return +new Date
    },
    support: ie
  }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
    J["[object " + t + "]"] = t.toLowerCase()
  });
  var ue = function(e) {
    function t(e, t, n, i) {
      var r, o, a, s, l, c, p, h, m, y;
      if ((t ? t.ownerDocument || t : N) !== A && E(t), t = t || A, n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (s = t.nodeType) && 9 !== s) return [];
      if (D && !i) {
        if (r = ge.exec(e))
          if (a = r[1]) {
            if (9 === s) {
              if (o = t.getElementById(a), !o || !o.parentNode) return n;
              if (o.id === a) return n.push(o), n
            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && L(t, o) && o.id === a) return n.push(o), n
          } else {
            if (r[2]) return J.apply(n, t.getElementsByTagName(e)), n;
            if ((a = r[3]) && T.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(a)), n
          } if (T.qsa && (!I || !I.test(e))) {
          if (h = p = O, m = t, y = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
            for (c = d(e), (p = t.getAttribute("id")) ? h = p.replace(xe, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + f(c[l]);
            m = be.test(e) && u(t.parentNode) || t, y = c.join(",")
          }
          if (y) try {
            return J.apply(n, m.querySelectorAll(y)), n
          } catch (v) {} finally {
            p || t.removeAttribute("id")
          }
        }
      }
      return _(e.replace(le, "$1"), t, n, i)
    }

    function n() {
      function e(n, i) {
        return t.push(n + " ") > P.cacheLength && delete e[t.shift()], e[n + " "] = i
      }
      var t = [];
      return e
    }

    function i(e) {
      return e[O] = !0, e
    }

    function r(e) {
      var t = A.createElement("div");
      try {
        return !!e(t)
      } catch (n) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function o(e, t) {
      for (var n = e.split("|"), i = e.length; i--;) P.attrHandle[n[i]] = t
    }

    function a(e, t) {
      var n = t && e,
        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
      if (i) return i;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function s(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e
      }
    }

    function l(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }

    function c(e) {
      return i(function(t) {
        return t = +t, i(function(n, i) {
          for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
        })
      })
    }

    function u(e) {
      return e && typeof e.getElementsByTagName !== V && e
    }

    function p() {}

    function d(e, n) {
      var i, r, o, a, s, l, c, u = H[e + " "];
      if (u) return n ? 0 : u.slice(0);
      for (s = e, l = [], c = P.preFilter; s;) {
        i && !(r = ce.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), o.push({
          value: i,
          type: r[0].replace(le, " ")
        }), s = s.slice(i.length));
        for (a in P.filter) !(r = he[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
          value: i,
          type: a,
          matches: r
        }), s = s.slice(i.length));
        if (!i) break
      }
      return n ? s.length : s ? t.error(e) : H(e, l).slice(0)
    }

    function f(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i
    }

    function h(e, t, n) {
      var i = t.dir,
        r = n && "parentNode" === i,
        o = z++;
      return t.first ? function(t, n, o) {
        for (; t = t[i];)
          if (1 === t.nodeType || r) return e(t, n, o)
      } : function(t, n, a) {
        var s, l, c = [B, o];
        if (a) {
          for (; t = t[i];)
            if ((1 === t.nodeType || r) && e(t, n, a)) return !0
        } else
          for (; t = t[i];)
            if (1 === t.nodeType || r) {
              if (l = t[O] || (t[O] = {}), (s = l[i]) && s[0] === B && s[1] === o) return c[2] = s[2];
              if (l[i] = c, c[2] = e(t, n, a)) return !0
            }
      }
    }

    function m(e) {
      return e.length > 1 ? function(t, n, i) {
        for (var r = e.length; r--;)
          if (!e[r](t, n, i)) return !1;
        return !0
      } : e[0]
    }

    function y(e, t, n, i, r) {
      for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
      return a
    }

    function v(e, t, n, r, o, a) {
      return r && !r[O] && (r = v(r)), o && !o[O] && (o = v(o, a)), i(function(i, a, s, l) {
        var c, u, p, d = [],
          f = [],
          h = a.length,
          m = i || x(t || "*", s.nodeType ? [s] : s, []),
          v = !e || !i && t ? m : y(m, d, e, s, l),
          g = n ? o || (i ? e : h || r) ? [] : a : v;
        if (n && n(v, g, s, l), r)
          for (c = y(g, f), r(c, [], s, l), u = c.length; u--;)(p = c[u]) && (g[f[u]] = !(v[f[u]] = p));
        if (i) {
          if (o || e) {
            if (o) {
              for (c = [], u = g.length; u--;)(p = g[u]) && c.push(v[u] = p);
              o(null, g = [], c, l)
            }
            for (u = g.length; u--;)(p = g[u]) && (c = o ? te.call(i, p) : d[u]) > -1 && (i[c] = !(a[c] = p))
          }
        } else g = y(g === a ? g.splice(h, g.length) : g), o ? o(null, a, g, l) : J.apply(a, g)
      })
    }

    function g(e) {
      for (var t, n, i, r = e.length, o = P.relative[e[0].type], a = o || P.relative[" "], s = o ? 1 : 0, l = h(function(e) {
          return e === t
        }, a, !0), c = h(function(e) {
          return te.call(t, e) > -1
        }, a, !0), u = [function(e, n, i) {
          return !o && (i || n !== j) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
        }]; s < r; s++)
        if (n = P.relative[e[s].type]) u = [h(m(u), n)];
        else {
          if (n = P.filter[e[s].type].apply(null, e[s].matches), n[O]) {
            for (i = ++s; i < r && !P.relative[e[i].type]; i++);
            return v(s > 1 && m(u), s > 1 && f(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(le, "$1"), n, s < i && g(e.slice(s, i)), i < r && g(e = e.slice(i)), i < r && f(e))
          }
          u.push(n)
        } return m(u)
    }

    function b(e, n) {
      var r = n.length > 0,
        o = e.length > 0,
        a = function(i, a, s, l, c) {
          var u, p, d, f = 0,
            h = "0",
            m = i && [],
            v = [],
            g = j,
            b = i || o && P.find.TAG("*", c),
            x = B += null == g ? 1 : Math.random() || .1,
            _ = b.length;
          for (c && (j = a !== A && a); h !== _ && null != (u = b[h]); h++) {
            if (o && u) {
              for (p = 0; d = e[p++];)
                if (d(u, a, s)) {
                  l.push(u);
                  break
                } c && (B = x)
            }
            r && ((u = !d && u) && f--, i && m.push(u))
          }
          if (f += h, r && h !== f) {
            for (p = 0; d = n[p++];) d(m, v, a, s);
            if (i) {
              if (f > 0)
                for (; h--;) m[h] || v[h] || (v[h] = Z.call(l));
              v = y(v)
            }
            J.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
          }
          return c && (B = x, j = g), m
        };
      return r ? i(a) : a
    }

    function x(e, n, i) {
      for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
      return i
    }

    function _(e, t, n, i) {
      var r, o, a, s, l, c = d(e);
      if (!i && 1 === c.length) {
        if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && T.getById && 9 === t.nodeType && D && P.relative[o[1].type]) {
          if (t = (P.find.ID(a.matches[0].replace(_e, we), t) || [])[0], !t) return n;
          e = e.slice(o.shift().value.length)
        }
        for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !P.relative[s = a.type]);)
          if ((l = P.find[s]) && (i = l(a.matches[0].replace(_e, we), be.test(o[0].type) && u(t.parentNode) || t))) {
            if (o.splice(r, 1), e = i.length && f(o), !e) return J.apply(n, i), n;
            break
          }
      }
      return C(e, c)(i, t, !D, n, be.test(e) && u(t.parentNode) || t), n
    }
    var w, T, P, k, S, C, j, $, Y, E, A, M, D, I, Q, F, L, O = "sizzle" + -new Date,
      N = e.document,
      B = 0,
      z = 0,
      R = n(),
      H = n(),
      q = n(),
      W = function(e, t) {
        return e === t && (Y = !0), 0
      },
      V = "undefined",
      X = 1 << 31,
      U = {}.hasOwnProperty,
      G = [],
      Z = G.pop,
      K = G.push,
      J = G.push,
      ee = G.slice,
      te = G.indexOf || function(e) {
        for (var t = 0, n = this.length; t < n; t++)
          if (this[t] === e) return t;
        return -1
      },
      ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ie = "[\\x20\\t\\r\\n\\f]",
      re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      oe = re.replace("w", "w#"),
      ae = "\\[" + ie + "*(" + re + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + oe + ")|)|)" + ie + "*\\]",
      se = ":(" + re + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
      le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
      ce = new RegExp("^" + ie + "*," + ie + "*"),
      ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
      pe = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
      de = new RegExp(se),
      fe = new RegExp("^" + oe + "$"),
      he = {
        ID: new RegExp("^#(" + re + ")"),
        CLASS: new RegExp("^\\.(" + re + ")"),
        TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + ae),
        PSEUDO: new RegExp("^" + se),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + ne + ")$", "i"),
        needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
      },
      me = /^(?:input|select|textarea|button)$/i,
      ye = /^h\d$/i,
      ve = /^[^{]+\{\s*\[native \w/,
      ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      be = /[+~]/,
      xe = /'|\\/g,
      _e = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
      we = function(e, t, n) {
        var i = "0x" + t - 65536;
        return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      };
    try {
      J.apply(G = ee.call(N.childNodes), N.childNodes), G[N.childNodes.length].nodeType
    } catch (Te) {
      J = {
        apply: G.length ? function(e, t) {
          K.apply(e, ee.call(t))
        } : function(e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];);
          e.length = n - 1
        }
      }
    }
    T = t.support = {}, S = t.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, E = t.setDocument = function(e) {
      var t, n = e ? e.ownerDocument || e : N,
        i = n.defaultView;
      return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, M = n.documentElement, D = !S(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
        E()
      }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
        E()
      })), T.attributes = r(function(e) {
        return e.className = "i", !e.getAttribute("className")
      }), T.getElementsByTagName = r(function(e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
      }), T.getElementsByClassName = ve.test(n.getElementsByClassName) && r(function(e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
      }), T.getById = r(function(e) {
        return M.appendChild(e).id = O, !n.getElementsByName || !n.getElementsByName(O).length
      }), T.getById ? (P.find.ID = function(e, t) {
        if (typeof t.getElementById !== V && D) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : []
        }
      }, P.filter.ID = function(e) {
        var t = e.replace(_e, we);
        return function(e) {
          return e.getAttribute("id") === t
        }
      }) : (delete P.find.ID, P.filter.ID = function(e) {
        var t = e.replace(_e, we);
        return function(e) {
          var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
          return n && n.value === t
        }
      }), P.find.TAG = T.getElementsByTagName ? function(e, t) {
        if (typeof t.getElementsByTagName !== V) return t.getElementsByTagName(e)
      } : function(e, t) {
        var n, i = [],
          r = 0,
          o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = o[r++];) 1 === n.nodeType && i.push(n);
          return i
        }
        return o
      }, P.find.CLASS = T.getElementsByClassName && function(e, t) {
        if (typeof t.getElementsByClassName !== V && D) return t.getElementsByClassName(e)
      }, Q = [], I = [], (T.qsa = ve.test(n.querySelectorAll)) && (r(function(e) {
        e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && I.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ie + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || I.push(":checked")
      }), r(function(e) {
        var t = n.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
      })), (T.matchesSelector = ve.test(F = M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && r(function(e) {
        T.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), Q.push("!=", se)
      }), I = I.length && new RegExp(I.join("|")), Q = Q.length && new RegExp(Q.join("|")), t = ve.test(M.compareDocumentPosition), L = t || ve.test(M.contains) ? function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
          i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
      } : function(e, t) {
        if (t)
          for (; t = t.parentNode;)
            if (t === e) return !0;
        return !1
      }, W = t ? function(e, t) {
        if (e === t) return Y = !0, 0;
        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !T.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === N && L(N, e) ? -1 : t === n || t.ownerDocument === N && L(N, t) ? 1 : $ ? te.call($, e) - te.call($, t) : 0 : 4 & i ? -1 : 1)
      } : function(e, t) {
        if (e === t) return Y = !0, 0;
        var i, r = 0,
          o = e.parentNode,
          s = t.parentNode,
          l = [e],
          c = [t];
        if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : $ ? te.call($, e) - te.call($, t) : 0;
        if (o === s) return a(e, t);
        for (i = e; i = i.parentNode;) l.unshift(i);
        for (i = t; i = i.parentNode;) c.unshift(i);
        for (; l[r] === c[r];) r++;
        return r ? a(l[r], c[r]) : l[r] === N ? -1 : c[r] === N ? 1 : 0
      }, n) : A
    }, t.matches = function(e, n) {
      return t(e, null, null, n)
    }, t.matchesSelector = function(e, n) {
      if ((e.ownerDocument || e) !== A && E(e), n = n.replace(pe, "='$1']"), T.matchesSelector && D && (!Q || !Q.test(n)) && (!I || !I.test(n))) try {
        var i = F.call(e, n);
        if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
      } catch (r) {}
      return t(n, A, null, [e]).length > 0
    }, t.contains = function(e, t) {
      return (e.ownerDocument || e) !== A && E(e), L(e, t)
    }, t.attr = function(e, t) {
      (e.ownerDocument || e) !== A && E(e);
      var n = P.attrHandle[t.toLowerCase()],
        i = n && U.call(P.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
      return void 0 !== i ? i : T.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }, t.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, t.uniqueSort = function(e) {
      var t, n = [],
        i = 0,
        r = 0;
      if (Y = !T.detectDuplicates, $ = !T.sortStable && e.slice(0), e.sort(W), Y) {
        for (; t = e[r++];) t === e[r] && (i = n.push(r));
        for (; i--;) e.splice(n[i], 1)
      }
      return $ = null, e
    }, k = t.getText = function(e) {
      var t, n = "",
        i = 0,
        r = e.nodeType;
      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
        } else if (3 === r || 4 === r) return e.nodeValue
      } else
        for (; t = e[i++];) n += k(t);
      return n
    }, P = t.selectors = {
      cacheLength: 50,
      createPseudo: i,
      match: he,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(e) {
          return e[1] = e[1].replace(_e, we), e[3] = (e[4] || e[5] || "").replace(_e, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        },
        CHILD: function(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
        },
        PSEUDO: function(e) {
          var t, n = !e[5] && e[2];
          return he.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && de.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(_e, we).toLowerCase();
          return "*" === e ? function() {
            return !0
          } : function(e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function(e) {
          var t = R[e + " "];
          return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && R(e, function(e) {
            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
          })
        },
        ATTR: function(e, n, i) {
          return function(r) {
            var o = t.attr(r, e);
            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
          }
        },
        CHILD: function(e, t, n, i, r) {
          var o = "nth" !== e.slice(0, 3),
            a = "last" !== e.slice(-4),
            s = "of-type" === t;
          return 1 === i && 0 === r ? function(e) {
            return !!e.parentNode
          } : function(t, n, l) {
            var c, u, p, d, f, h, m = o !== a ? "nextSibling" : "previousSibling",
              y = t.parentNode,
              v = s && t.nodeName.toLowerCase(),
              g = !l && !s;
            if (y) {
              if (o) {
                for (; m;) {
                  for (p = t; p = p[m];)
                    if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  h = m = "only" === e && !h && "nextSibling"
                }
                return !0
              }
              if (h = [a ? y.firstChild : y.lastChild], a && g) {
                for (u = y[O] || (y[O] = {}), c = u[e] || [], f = c[0] === B && c[1], d = c[0] === B && c[2], p = f && y.childNodes[f]; p = ++f && p && p[m] || (d = f = 0) || h.pop();)
                  if (1 === p.nodeType && ++d && p === t) {
                    u[e] = [B, f, d];
                    break
                  }
              } else if (g && (c = (t[O] || (t[O] = {}))[e]) && c[0] === B) d = c[1];
              else
                for (;
                  (p = ++f && p && p[m] || (d = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++d || (g && ((p[O] || (p[O] = {}))[e] = [B, d]), p !== t)););
              return d -= r, d === i || d % i === 0 && d / i >= 0
            }
          }
        },
        PSEUDO: function(e, n) {
          var r, o = P.pseudos[e] || P.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return o[O] ? o(n) : o.length > 1 ? (r = [e, e, "", n], P.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
            for (var i, r = o(e, n), a = r.length; a--;) i = te.call(e, r[a]), e[i] = !(t[i] = r[a])
          }) : function(e) {
            return o(e, 0, r)
          }) : o
        }
      },
      pseudos: {
        not: i(function(e) {
          var t = [],
            n = [],
            r = C(e.replace(le, "$1"));
          return r[O] ? i(function(e, t, n, i) {
            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
          }) : function(e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop()
          }
        }),
        has: i(function(e) {
          return function(n) {
            return t(e, n).length > 0
          }
        }),
        contains: i(function(e) {
          return function(t) {
            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
          }
        }),
        lang: i(function(e) {
          return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(_e, we).toLowerCase(),
            function(t) {
              var n;
              do
                if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
              return !1
            }
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        },
        root: function(e) {
          return e === M
        },
        focus: function(e) {
          return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: function(e) {
          return e.disabled === !1
        },
        disabled: function(e) {
          return e.disabled === !0
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0
        },
        parent: function(e) {
          return !P.pseudos.empty(e)
        },
        header: function(e) {
          return ye.test(e.nodeName)
        },
        input: function(e) {
          return me.test(e.nodeName)
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        },
        text: function(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: c(function() {
          return [0]
        }),
        last: c(function(e, t) {
          return [t - 1]
        }),
        eq: c(function(e, t, n) {
          return [n < 0 ? n + t : n]
        }),
        even: c(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }),
        odd: c(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }),
        lt: c(function(e, t, n) {
          for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
          return e
        }),
        gt: c(function(e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
          return e
        })
      }
    }, P.pseudos.nth = P.pseudos.eq;
    for (w in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) P.pseudos[w] = s(w);
    for (w in {
        submit: !0,
        reset: !0
      }) P.pseudos[w] = l(w);
    return p.prototype = P.filters = P.pseudos, P.setFilters = new p, C = t.compile = function(e, t) {
      var n, i = [],
        r = [],
        o = q[e + " "];
      if (!o) {
        for (t || (t = d(e)), n = t.length; n--;) o = g(t[n]), o[O] ? i.push(o) : r.push(o);
        o = q(e, b(r, i))
      }
      return o
    }, T.sortStable = O.split("").sort(W).join("") === O, T.detectDuplicates = !!Y, E(), T.sortDetached = r(function(e) {
      return 1 & e.compareDocumentPosition(A.createElement("div"))
    }), r(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || o("type|href|height|width", function(e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), T.attributes && r(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || o("value", function(e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), r(function(e) {
      return null == e.getAttribute("disabled")
    }) || o(ne, function(e, t, n) {
      var i;
      if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }), t
  }(e);
  oe.find = ue, oe.expr = ue.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ue.uniqueSort, oe.text = ue.getText, oe.isXMLDoc = ue.isXML, oe.contains = ue.contains;
  var pe = oe.expr.match.needsContext,
    de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    fe = /^.[^:#\[\.,]*$/;
  oe.filter = function(e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function(e) {
      return 1 === e.nodeType
    }))
  }, oe.fn.extend({
    find: function(e) {
      var t, n = [],
        i = this,
        r = i.length;
      if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
        for (t = 0; t < r; t++)
          if (oe.contains(i[t], this)) return !0
      }));
      for (t = 0; t < r; t++) oe.find(e, i[t], n);
      return n = this.pushStack(r > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
    },
    filter: function(e) {
      return this.pushStack(i(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(i(this, e || [], !0))
    },
    is: function(e) {
      return !!i(this, "string" == typeof e && pe.test(e) ? oe(e) : e || [], !1).length
    }
  });
  var he, me = e.document,
    ye = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ve = oe.fn.init = function(e, t) {
      var n, i;
      if (!e) return this;
      if ("string" == typeof e) {
        if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ye.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || he).find(e) : this.constructor(t).find(e);
        if (n[1]) {
          if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : me, !0)), de.test(n[1]) && oe.isPlainObject(t))
            for (n in t) oe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          return this
        }
        if (i = me.getElementById(n[2]), i && i.parentNode) {
          if (i.id !== n[2]) return he.find(e);
          this.length = 1, this[0] = i
        }
        return this.context = me, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? "undefined" != typeof he.ready ? he.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
    };
  ve.prototype = oe.fn, he = oe(me);
  var ge = /^(?:parents|prev(?:Until|All))/,
    be = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  oe.extend({
    dir: function(e, t, n) {
      for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !oe(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
      return i
    },
    sibling: function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  }), oe.fn.extend({
    has: function(e) {
      var t, n = oe(e, this),
        i = n.length;
      return this.filter(function() {
        for (t = 0; t < i; t++)
          if (oe.contains(this, n[t])) return !0
      })
    },
    closest: function(e, t) {
      for (var n, i = 0, r = this.length, o = [], a = pe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i < r; i++)
        for (n = this[i]; n && n !== t; n = n.parentNode)
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
            o.push(n);
            break
          } return this.pushStack(o.length > 1 ? oe.unique(o) : o)
    },
    index: function(e) {
      return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), oe.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return oe.dir(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return oe.dir(e, "parentNode", n)
    },
    next: function(e) {
      return r(e, "nextSibling")
    },
    prev: function(e) {
      return r(e, "previousSibling")
    },
    nextAll: function(e) {
      return oe.dir(e, "nextSibling")
    },
    prevAll: function(e) {
      return oe.dir(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return oe.dir(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return oe.dir(e, "previousSibling", n)
    },
    siblings: function(e) {
      return oe.sibling((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return oe.sibling(e.firstChild)
    },
    contents: function(e) {
      return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
    }
  }, function(e, t) {
    oe.fn[e] = function(n, i) {
      var r = oe.map(this, t, n);
      return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = oe.filter(i, r)), this.length > 1 && (be[e] || (r = oe.unique(r)), ge.test(e) && (r = r.reverse())), this.pushStack(r)
    }
  });
  var xe = /\S+/g,
    _e = {};
  oe.Callbacks = function(e) {
    e = "string" == typeof e ? _e[e] || o(e) : oe.extend({}, e);
    var t, n, i, r, a, s, l = [],
      c = !e.once && [],
      u = function(o) {
        for (n = e.memory && o, i = !0, a = s || 0, s = 0, r = l.length, t = !0; l && a < r; a++)
          if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
            n = !1;
            break
          } t = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : p.disable())
      },
      p = {
        add: function() {
          if (l) {
            var i = l.length;
            ! function o(t) {
              oe.each(t, function(t, n) {
                var i = oe.type(n);
                "function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
              })
            }(arguments), t ? r = l.length : n && (s = i, u(n))
          }
          return this
        },
        remove: function() {
          return l && oe.each(arguments, function(e, n) {
            for (var i;
              (i = oe.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (i <= r && r--, i <= a && a--)
          }), this
        },
        has: function(e) {
          return e ? oe.inArray(e, l) > -1 : !(!l || !l.length)
        },
        empty: function() {
          return l = [], r = 0, this
        },
        disable: function() {
          return l = c = n = void 0, this
        },
        disabled: function() {
          return !l
        },
        lock: function() {
          return c = void 0, n || p.disable(), this
        },
        locked: function() {
          return !c
        },
        fireWith: function(e, n) {
          return !l || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : u(n)), this
        },
        fire: function() {
          return p.fireWith(this, arguments), this
        },
        fired: function() {
          return !!i
        }
      };
    return p
  }, oe.extend({
    Deferred: function(e) {
      var t = [
          ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
          ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
          ["notify", "progress", oe.Callbacks("memory")]
        ],
        n = "pending",
        i = {
          state: function() {
            return n
          },
          always: function() {
            return r.done(arguments).fail(arguments), this
          },
          then: function() {
            var e = arguments;
            return oe.Deferred(function(n) {
              oe.each(t, function(t, o) {
                var a = oe.isFunction(e[t]) && e[t];
                r[o[1]](function() {
                  var e = a && a.apply(this, arguments);
                  e && oe.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                })
              }), e = null
            }).promise()
          },
          promise: function(e) {
            return null != e ? oe.extend(e, i) : i
          }
        },
        r = {};
      return i.pipe = i.then, oe.each(t, function(e, o) {
        var a = o[2],
          s = o[3];
        i[o[1]] = a.add, s && a.add(function() {
          n = s
        }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
          return r[o[0] + "With"](this === r ? i : this, arguments), this
        }, r[o[0] + "With"] = a.fireWith
      }), i.promise(r), e && e.call(r, r), r
    },
    when: function(e) {
      var t, n, i, r = 0,
        o = U.call(arguments),
        a = o.length,
        s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0,
        l = 1 === s ? e : oe.Deferred(),
        c = function(e, n, i) {
          return function(r) {
            n[e] = this, i[e] = arguments.length > 1 ? U.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
          }
        };
      if (a > 1)
        for (t = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) o[r] && oe.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --s;
      return s || l.resolveWith(i, o), l.promise()
    }
  });
  var we;
  oe.fn.ready = function(e) {
    return oe.ready.promise().done(e), this
  }, oe.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? oe.readyWait++ : oe.ready(!0)
    },
    ready: function(e) {
      if (e === !0 ? !--oe.readyWait : !oe.isReady) {
        if (!me.body) return setTimeout(oe.ready);
        oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (we.resolveWith(me, [oe]), oe.fn.trigger && oe(me).trigger("ready").off("ready"))
      }
    }
  }), oe.ready.promise = function(t) {
    if (!we)
      if (we = oe.Deferred(), "complete" === me.readyState) setTimeout(oe.ready);
      else if (me.addEventListener) me.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
    else {
      me.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
      var n = !1;
      try {
        n = null == e.frameElement && me.documentElement
      } catch (i) {}
      n && n.doScroll && ! function r() {
        if (!oe.isReady) {
          try {
            n.doScroll("left")
          } catch (e) {
            return setTimeout(r, 50)
          }
          a(), oe.ready()
        }
      }()
    }
    return we.promise(t)
  };
  var Te, Pe = "undefined";
  for (Te in oe(ie)) break;
  ie.ownLast = "0" !== Te, ie.inlineBlockNeedsLayout = !1, oe(function() {
      var e, t, n = me.getElementsByTagName("body")[0];
      n && (e = me.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = me.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== Pe && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (ie.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
    }),
    function() {
      var e = me.createElement("div");
      if (null == ie.deleteExpando) {
        ie.deleteExpando = !0;
        try {
          delete e.test
        } catch (t) {
          ie.deleteExpando = !1
        }
      }
      e = null
    }(), oe.acceptData = function(e) {
      var t = oe.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
      return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
    };
  var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Se = /([A-Z])/g;
  oe.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(e) {
      return e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando], !!e && !c(e)
    },
    data: function(e, t, n) {
      return u(e, t, n)
    },
    removeData: function(e, t) {
      return p(e, t)
    },
    _data: function(e, t, n) {
      return u(e, t, n, !0)
    },
    _removeData: function(e, t) {
      return p(e, t, !0)
    }
  }), oe.fn.extend({
    data: function(e, t) {
      var n, i, r, o = this[0],
        a = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (r = oe.data(o), 1 === o.nodeType && !oe._data(o, "parsedAttrs"))) {
          for (n = a.length; n--;) i = a[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(o, i, r[i]));
          oe._data(o, "parsedAttrs", !0)
        }
        return r
      }
      return "object" == typeof e ? this.each(function() {
        oe.data(this, e)
      }) : arguments.length > 1 ? this.each(function() {
        oe.data(this, e, t)
      }) : o ? l(o, e, oe.data(o, e)) : void 0
    },
    removeData: function(e) {
      return this.each(function() {
        oe.removeData(this, e)
      })
    }
  }), oe.extend({
    queue: function(e, t, n) {
      var i;
      if (e) return t = (t || "fx") + "queue", i = oe._data(e, t), n && (!i || oe.isArray(n) ? i = oe._data(e, t, oe.makeArray(n)) : i.push(n)), i || []
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = oe.queue(e, t),
        i = n.length,
        r = n.shift(),
        o = oe._queueHooks(e, t),
        a = function() {
          oe.dequeue(e, t)
        };
      "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return oe._data(e, n) || oe._data(e, n, {
        empty: oe.Callbacks("once memory").add(function() {
          oe._removeData(e, t + "queue"), oe._removeData(e, n)
        })
      })
    }
  }), oe.fn.extend({
    queue: function(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
        var n = oe.queue(this, e, t);
        oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        oe.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      var n, i = 1,
        r = oe.Deferred(),
        o = this,
        a = this.length,
        s = function() {
          --i || r.resolveWith(o, [o])
        };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = oe._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
      return s(), r.promise(t)
    }
  });
  var Ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    je = ["Top", "Right", "Bottom", "Left"],
    $e = function(e, t) {
      return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
    },
    Ye = oe.access = function(e, t, n, i, r, o, a) {
      var s = 0,
        l = e.length,
        c = null == n;
      if ("object" === oe.type(n)) {
        r = !0;
        for (s in n) oe.access(e, t, s, n[s], !0, o, a)
      } else if (void 0 !== i && (r = !0, oe.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
          return c.call(oe(e), n)
        })), t))
        for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
      return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    },
    Ee = /^(?:checkbox|radio)$/i;
  ! function() {
    var e = me.createDocumentFragment(),
      t = me.createElement("div"),
      n = me.createElement("input");
    if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", ie.leadingWhitespace = 3 === t.firstChild.nodeType, ie.tbody = !t.getElementsByTagName("tbody").length, ie.htmlSerialize = !!t.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== me.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), ie.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
        ie.noCloneEvent = !1
      }), t.cloneNode(!0).click()), null == ie.deleteExpando) {
      ie.deleteExpando = !0;
      try {
        delete t.test
      } catch (i) {
        ie.deleteExpando = !1
      }
    }
    e = t = n = null
  }(),
  function() {
    var t, n, i = me.createElement("div");
    for (t in {
        submit: !0,
        change: !0,
        focusin: !0
      }) n = "on" + t, (ie[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ie[t + "Bubbles"] = i.attributes[n].expando === !1);
    i = null
  }();
  var Ae = /^(?:input|select|textarea)$/i,
    Me = /^key/,
    De = /^(?:mouse|contextmenu)|click/,
    Ie = /^(?:focusinfocus|focusoutblur)$/,
    Qe = /^([^.]*)(?:\.(.+)|)$/;
  oe.event = {
    global: {},
    add: function(e, t, n, i, r) {
      var o, a, s, l, c, u, p, d, f, h, m, y = oe._data(e);
      if (y) {
        for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = oe.guid++), (a = y.events) || (a = y.events = {}), (u = y.handle) || (u = y.handle = function(e) {
            return typeof oe === Pe || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(u.elem, arguments)
          }, u.elem = e), t = (t || "").match(xe) || [""], s = t.length; s--;) o = Qe.exec(t[s]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f && (c = oe.event.special[f] || {}, f = (r ? c.delegateType : c.bindType) || f, c = oe.event.special[f] || {}, p = oe.extend({
          type: f,
          origType: m,
          data: i,
          handler: n,
          guid: n.guid,
          selector: r,
          needsContext: r && oe.expr.match.needsContext.test(r),
          namespace: h.join(".")
        }, l), (d = a[f]) || (d = a[f] = [], d.delegateCount = 0, c.setup && c.setup.call(e, i, h, u) !== !1 || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent && e.attachEvent("on" + f, u))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, p) : d.push(p), oe.event.global[f] = !0);
        e = null
      }
    },
    remove: function(e, t, n, i, r) {
      var o, a, s, l, c, u, p, d, f, h, m, y = oe.hasData(e) && oe._data(e);
      if (y && (u = y.events)) {
        for (t = (t || "").match(xe) || [""], c = t.length; c--;)
          if (s = Qe.exec(t[c]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
            for (p = oe.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, d = u[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) a = d[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, p.remove && p.remove.call(e, a));
            l && !d.length && (p.teardown && p.teardown.call(e, h, y.handle) !== !1 || oe.removeEvent(e, f, y.handle), delete u[f])
          } else
            for (f in u) oe.event.remove(e, f + t[c], n, i, !0);
        oe.isEmptyObject(u) && (delete y.handle, oe._removeData(e, "events"))
      }
    },
    trigger: function(t, n, i, r) {
      var o, a, s, l, c, u, p, d = [i || me],
        f = te.call(t, "type") ? t.type : t,
        h = te.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = u = i = i || me, 3 !== i.nodeType && 8 !== i.nodeType && !Ie.test(f + oe.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, t = t[oe.expando] ? t : new oe.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), c = oe.event.special[f] || {}, r || !c.trigger || c.trigger.apply(i, n) !== !1)) {
        if (!r && !c.noBubble && !oe.isWindow(i)) {
          for (l = c.delegateType || f, Ie.test(l + f) || (s = s.parentNode); s; s = s.parentNode) d.push(s), u = s;
          u === (i.ownerDocument || me) && d.push(u.defaultView || u.parentWindow || e)
        }
        for (p = 0;
          (s = d[p++]) && !t.isPropagationStopped();) t.type = p > 1 ? l : c.bindType || f, o = (oe._data(s, "events") || {})[t.type] && oe._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && oe.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
        if (t.type = f, !r && !t.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), n) === !1) && oe.acceptData(i) && a && i[f] && !oe.isWindow(i)) {
          u = i[a], u && (i[a] = null), oe.event.triggered = f;
          try {
            i[f]()
          } catch (m) {}
          oe.event.triggered = void 0, u && (i[a] = u)
        }
        return t.result
      }
    },
    dispatch: function(e) {
      e = oe.event.fix(e);
      var t, n, i, r, o, a = [],
        s = U.call(arguments),
        l = (oe._data(this, "events") || {})[e.type] || [],
        c = oe.event.special[e.type] || {};
      if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        for (a = oe.event.handlers.call(this, e, l), t = 0;
          (r = a[t++]) && !e.isPropagationStopped();)
          for (e.currentTarget = r.elem, o = 0;
            (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, e.data = i.data, n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, e), e.result
      }
    },
    handlers: function(e, t) {
      var n, i, r, o, a = [],
        s = t.delegateCount,
        l = e.target;
      if (s && l.nodeType && (!e.button || "click" !== e.type))
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
            for (r = [], o = 0; o < s; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? oe(n, this).index(l) >= 0 : oe.find(n, this, null, [l]).length), r[n] && r.push(i);
            r.length && a.push({
              elem: l,
              handlers: r
            })
          } return s < t.length && a.push({
        elem: this,
        handlers: t.slice(s)
      }), a
    },
    fix: function(e) {
      if (e[oe.expando]) return e;
      var t, n, i, r = e.type,
        o = e,
        a = this.fixHooks[r];
      for (a || (this.fixHooks[r] = a = De.test(r) ? this.mouseHooks : Me.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new oe.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
      return e.target || (e.target = o.srcElement || me), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, t) {
        var n, i, r, o = t.button,
          a = t.fromElement;
        return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || me, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== h() && this.focus) try {
            return this.focus(), !1
          } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === h() && this.blur) return this.blur(), !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (oe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
        },
        _default: function(e) {
          return oe.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function(e, t, n, i) {
      var r = oe.extend(new oe.Event, n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      i ? oe.event.trigger(r, null, t) : oe.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
    }
  }, oe.removeEvent = me.removeEventListener ? function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  } : function(e, t, n) {
    var i = "on" + t;
    e.detachEvent && (typeof e[i] === Pe && (e[i] = null), e.detachEvent(i, n))
  }, oe.Event = function(e, t) {
    return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? d : f) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
  }, oe.Event.prototype = {
    isDefaultPrevented: f,
    isPropagationStopped: f,
    isImmediatePropagationStopped: f,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = d, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = d, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      this.isImmediatePropagationStopped = d, this.stopPropagation()
    }
  }, oe.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function(e, t) {
    oe.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, i = this,
          r = e.relatedTarget,
          o = e.handleObj;
        return r && (r === i || oe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), ie.submitBubbles || (oe.event.special.submit = {
    setup: function() {
      return !oe.nodeName(this, "form") && void oe.event.add(this, "click._submit keypress._submit", function(e) {
        var t = e.target,
          n = oe.nodeName(t, "input") || oe.nodeName(t, "button") ? t.form : void 0;
        n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function(e) {
          e._submit_bubble = !0
        }), oe._data(n, "submitBubbles", !0))
      })
    },
    postDispatch: function(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
    },
    teardown: function() {
      return !oe.nodeName(this, "form") && void oe.event.remove(this, "._submit")
    }
  }), ie.changeBubbles || (oe.event.special.change = {
    setup: function() {
      return Ae.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (oe.event.add(this, "propertychange._change", function(e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
      }), oe.event.add(this, "click._change", function(e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, e, !0)
      })), !1) : void oe.event.add(this, "beforeactivate._change", function(e) {
        var t = e.target;
        Ae.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function(e) {
          !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
        }), oe._data(t, "changeBubbles", !0))
      })
    },
    handle: function(e) {
      var t = e.target;
      if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
    },
    teardown: function() {
      return oe.event.remove(this, "._change"), !Ae.test(this.nodeName)
    }
  }), ie.focusinBubbles || oe.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = function(e) {
      oe.event.simulate(t, e.target, oe.event.fix(e), !0)
    };
    oe.event.special[t] = {
      setup: function() {
        var i = this.ownerDocument || this,
          r = oe._data(i, t);
        r || i.addEventListener(e, n, !0), oe._data(i, t, (r || 0) + 1)
      },
      teardown: function() {
        var i = this.ownerDocument || this,
          r = oe._data(i, t) - 1;
        r ? oe._data(i, t, r) : (i.removeEventListener(e, n, !0), oe._removeData(i, t))
      }
    }
  }), oe.fn.extend({
    on: function(e, t, n, i, r) {
      var o, a;
      if ("object" == typeof e) {
        "string" != typeof t && (n = n || t, t = void 0);
        for (o in e) this.on(o, t, n, e[o], r);
        return this
      }
      if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = f;
      else if (!i) return this;
      return 1 === r && (a = i, i = function(e) {
        return oe().off(e), a.apply(this, arguments)
      }, i.guid = a.guid || (a.guid = oe.guid++)), this.each(function() {
        oe.event.add(this, e, i, n, t)
      })
    },
    one: function(e, t, n, i) {
      return this.on(e, t, n, i, 1)
    },
    off: function(e, t, n) {
      var i, r;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (r in e) this.off(r, t, e[r]);
        return this
      }
      return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = f), this.each(function() {
        oe.event.remove(this, e, n, t)
      })
    },
    trigger: function(e, t) {
      return this.each(function() {
        oe.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      if (n) return oe.event.trigger(e, t, n, !0)
    }
  });
  var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Le = / jQuery\d+="(?:null|\d+)"/g,
    Oe = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
    Ne = /^\s+/,
    Be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ze = /<([\w:]+)/,
    Re = /<tbody/i,
    He = /<|&#?\w+;/,
    qe = /<(?:script|style|link)/i,
    We = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ve = /^$|\/(?:java|ecma)script/i,
    Xe = /^true\/(.*)/,
    Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    Ze = m(me),
    Ke = Ze.appendChild(me.createElement("div"));
  Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, oe.extend({
    clone: function(e, t, n) {
      var i, r, o, a, s, l = oe.contains(e.ownerDocument, e);
      if (ie.html5Clone || oe.isXMLDoc(e) || !Oe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ke.innerHTML = e.outerHTML, Ke.removeChild(o = Ke.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
        for (i = y(o), s = y(e), a = 0; null != (r = s[a]); ++a) i[a] && T(r, i[a]);
      if (t)
        if (n)
          for (s = s || y(e), i = i || y(o), a = 0; null != (r = s[a]); a++) w(r, i[a]);
        else w(e, o);
      return i = y(o, "script"), i.length > 0 && _(i, !l && y(e, "script")), i = s = r = null, o
    },
    buildFragment: function(e, t, n, i) {
      for (var r, o, a, s, l, c, u, p = e.length, d = m(t), f = [], h = 0; h < p; h++)
        if (o = e[h], o || 0 === o)
          if ("object" === oe.type(o)) oe.merge(f, o.nodeType ? [o] : o);
          else if (He.test(o)) {
        for (s = s || d.appendChild(t.createElement("div")), l = (ze.exec(o) || ["", ""])[1].toLowerCase(), u = Ge[l] || Ge._default, s.innerHTML = u[1] + o.replace(Be, "<$1></$2>") + u[2], r = u[0]; r--;) s = s.lastChild;
        if (!ie.leadingWhitespace && Ne.test(o) && f.push(t.createTextNode(Ne.exec(o)[0])), !ie.tbody)
          for (o = "table" !== l || Re.test(o) ? "<table>" !== u[1] || Re.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) oe.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
        for (oe.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
        s = d.lastChild
      } else f.push(t.createTextNode(o));
      for (s && d.removeChild(s), ie.appendChecked || oe.grep(y(f, "input"), v), h = 0; o = f[h++];)
        if ((!i || oe.inArray(o, i) === -1) && (a = oe.contains(o.ownerDocument, o), s = y(d.appendChild(o), "script"), a && _(s), n))
          for (r = 0; o = s[r++];) Ve.test(o.type || "") && n.push(o);
      return s = null, d
    },
    cleanData: function(e, t) {
      for (var n, i, r, o, a = 0, s = oe.expando, l = oe.cache, c = ie.deleteExpando, u = oe.event.special; null != (n = e[a]); a++)
        if ((t || oe.acceptData(n)) && (r = n[s], o = r && l[r])) {
          if (o.events)
            for (i in o.events) u[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, o.handle);
          l[r] && (delete l[r], c ? delete n[s] : typeof n.removeAttribute !== Pe ? n.removeAttribute(s) : n[s] = null, X.push(r))
        }
    }
  }), oe.fn.extend({
    text: function(e) {
      return Ye(this, function(e) {
        return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || me).createTextNode(e))
      }, null, e, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = g(this, e);
          t.appendChild(e)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = g(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    remove: function(e, t) {
      for (var n, i = e ? oe.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || oe.cleanData(y(n)), n.parentNode && (t && oe.contains(n.ownerDocument, n) && _(y(n, "script")), n.parentNode.removeChild(n));
      return this
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && oe.cleanData(y(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
        e.options && oe.nodeName(e, "select") && (e.options.length = 0)
      }
      return this
    },
    clone: function(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function() {
        return oe.clone(this, e, t)
      })
    },
    html: function(e) {
      return Ye(this, function(e) {
        var t = this[0] || {},
          n = 0,
          i = this.length;
        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Le, "") : void 0;
        if ("string" == typeof e && !qe.test(e) && (ie.htmlSerialize || !Oe.test(e)) && (ie.leadingWhitespace || !Ne.test(e)) && !Ge[(ze.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = e.replace(Be, "<$1></$2>");
          try {
            for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(y(t, !1)), t.innerHTML = e);
            t = 0
          } catch (r) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var e = arguments[0];
      return this.domManip(arguments, function(t) {
        e = this.parentNode, oe.cleanData(y(this)), e && e.replaceChild(t, this)
      }), e && (e.length || e.nodeType) ? this : this.remove()
    },
    detach: function(e) {
      return this.remove(e, !0)
    },
    domManip: function(e, t) {
      e = G.apply([], e);
      var n, i, r, o, a, s, l = 0,
        c = this.length,
        u = this,
        p = c - 1,
        d = e[0],
        f = oe.isFunction(d);
      if (f || c > 1 && "string" == typeof d && !ie.checkClone && We.test(d)) return this.each(function(n) {
        var i = u.eq(n);
        f && (e[0] = d.call(this, n, i.html())), i.domManip(e, t)
      });
      if (c && (s = oe.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
        for (o = oe.map(y(s, "script"), b), r = o.length; l < c; l++) i = s, l !== p && (i = oe.clone(i, !0, !0), r && oe.merge(o, y(i, "script"))), t.call(this[l], i, l);
        if (r)
          for (a = o[o.length - 1].ownerDocument, oe.map(o, x), l = 0; l < r; l++) i = o[l], Ve.test(i.type || "") && !oe._data(i, "globalEval") && oe.contains(a, i) && (i.src ? oe._evalUrl && oe._evalUrl(i.src) : oe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ue, "")));
        s = n = null
      }
      return this
    }
  }), oe.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    oe.fn[e] = function(e) {
      for (var n, i = 0, r = [], o = oe(e), a = o.length - 1; i <= a; i++) n = i === a ? this : this.clone(!0), oe(o[i])[t](n), Z.apply(r, n.get());
      return this.pushStack(r)
    }
  });
  var Je, et = {};
  ! function() {
    var e, t, n = me.createElement("div"),
      i = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(e.style.opacity), ie.cssFloat = !!e.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === n.style.backgroundClip, e = n = null, ie.shrinkWrapBlocks = function() {
      var e, n, r, o;
      if (null == t) {
        if (e = me.getElementsByTagName("body")[0], !e) return;
        o = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = me.createElement("div"), r = me.createElement("div"), e.appendChild(n).appendChild(r), t = !1, typeof r.style.zoom !== Pe && (r.style.cssText = i + ";width:1px;padding:1px;zoom:1", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t = 3 !== r.offsetWidth), e.removeChild(n), e = n = r = null
      }
      return t
    }
  }();
  var tt, nt, it = /^margin/,
    rt = new RegExp("^(" + Ce + ")(?!px)[a-z%]+$", "i"),
    ot = /^(top|right|bottom|left)$/;
  e.getComputedStyle ? (tt = function(e) {
      return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }, nt = function(e, t, n) {
      var i, r, o, a, s = e.style;
      return n = n || tt(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)), rt.test(a) && it.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a,
        a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
    }) : me.documentElement.currentStyle && (tt = function(e) {
      return e.currentStyle
    }, nt = function(e, t, n) {
      var i, r, o, a, s = e.style;
      return n = n || tt(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rt.test(a) && !ot.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
    }),
    function() {
      function t() {
        var t, n, i = me.getElementsByTagName("body")[0];
        i && (t = me.createElement("div"), n = me.createElement("div"), t.style.cssText = c, i.appendChild(t).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", oe.swap(i, null != i.style.zoom ? {
          zoom: 1
        } : {}, function() {
          r = 4 === n.offsetWidth
        }), o = !0, a = !1, s = !0, e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(n, null) || {}).top, o = "4px" === (e.getComputedStyle(n, null) || {
          width: "4px"
        }).width), i.removeChild(t), n = i = null)
      }
      var n, i, r, o, a, s, l = me.createElement("div"),
        c = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
        u = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
      l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = l.getElementsByTagName("a")[0], n.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(n.style.opacity), ie.cssFloat = !!n.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === l.style.backgroundClip, n = l = null, oe.extend(ie, {
        reliableHiddenOffsets: function() {
          if (null != i) return i;
          var e, t, n, r = me.createElement("div"),
            o = me.getElementsByTagName("body")[0];
          if (o) return r.setAttribute("className", "t"), r.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = me.createElement("div"), e.style.cssText = c, o.appendChild(e).appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = r.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", i = n && 0 === t[0].offsetHeight, o.removeChild(e), r = o = null, i
        },
        boxSizing: function() {
          return null == r && t(), r
        },
        boxSizingReliable: function() {
          return null == o && t(), o
        },
        pixelPosition: function() {
          return null == a && t(), a
        },
        reliableMarginRight: function() {
          var t, n, i, r;
          if (null == s && e.getComputedStyle) {
            if (t = me.getElementsByTagName("body")[0], !t) return;
            n = me.createElement("div"), i = me.createElement("div"), n.style.cssText = c, t.appendChild(n).appendChild(i), r = i.appendChild(me.createElement("div")), r.style.cssText = i.style.cssText = u, r.style.marginRight = r.style.width = "0", i.style.width = "1px", s = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight), t.removeChild(n)
          }
          return s
        }
      })
    }(), oe.swap = function(e, t, n, i) {
      var r, o, a = {};
      for (o in t) a[o] = e.style[o], e.style[o] = t[o];
      r = n.apply(e, i || []);
      for (o in t) e.style[o] = a[o];
      return r
    };
  var at = /alpha\([^)]*\)/i,
    st = /opacity\s*=\s*([^)]*)/,
    lt = /^(none|table(?!-c[ea]).+)/,
    ct = new RegExp("^(" + Ce + ")(.*)$", "i"),
    ut = new RegExp("^([+-])=(" + Ce + ")", "i"),
    pt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    dt = {
      letterSpacing: 0,
      fontWeight: 400
    },
    ft = ["Webkit", "O", "Moz", "ms"];
  oe.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = nt(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": ie.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r, o, a, s = oe.camelCase(t),
          l = e.style;
        if (t = oe.cssProps[s] || (oe.cssProps[s] = C(l, s)), a = oe.cssHooks[t] || oe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
        if (o = typeof n, "string" === o && (r = ut.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(oe.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || oe.cssNumber[s] || (n += "px"), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
          l[t] = "", l[t] = n
        } catch (c) {}
      }
    },
    css: function(e, t, n, i) {
      var r, o, a, s = oe.camelCase(t);
      return t = oe.cssProps[s] || (oe.cssProps[s] = C(e.style, s)), a = oe.cssHooks[t] || oe.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = nt(e, t, i)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || oe.isNumeric(r) ? r || 0 : o) : o
    }
  }), oe.each(["height", "width"], function(e, t) {
    oe.cssHooks[t] = {
      get: function(e, n, i) {
        if (n) return 0 === e.offsetWidth && lt.test(oe.css(e, "display")) ? oe.swap(e, pt, function() {
          return E(e, t, i)
        }) : E(e, t, i)
      },
      set: function(e, n, i) {
        var r = i && tt(e);
        return $(e, n, i ? Y(e, t, i, ie.boxSizing() && "border-box" === oe.css(e, "boxSizing", !1, r), r) : 0)
      }
    }
  }), ie.opacity || (oe.cssHooks.opacity = {
    get: function(e, t) {
      return st.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    },
    set: function(e, t) {
      var n = e.style,
        i = e.currentStyle,
        r = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
        o = i && i.filter || n.filter || "";
      n.zoom = 1, (t >= 1 || "" === t) && "" === oe.trim(o.replace(at, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = at.test(o) ? o.replace(at, r) : o + " " + r)
    }
  }), oe.cssHooks.marginRight = S(ie.reliableMarginRight, function(e, t) {
    if (t) return oe.swap(e, {
      display: "inline-block"
    }, nt, [e, "marginRight"])
  }), oe.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    oe.cssHooks[e + t] = {
      expand: function(n) {
        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + je[i] + t] = o[i] || o[i - 2] || o[0];
        return r
      }
    }, it.test(e) || (oe.cssHooks[e + t].set = $)
  }), oe.fn.extend({
    css: function(e, t) {
      return Ye(this, function(e, t, n) {
        var i, r, o = {},
          a = 0;
        if (oe.isArray(t)) {
          for (i = tt(e), r = t.length; a < r; a++) o[t[a]] = oe.css(e, t[a], !1, i);
          return o
        }
        return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
      }, e, t, arguments.length > 1)
    },
    show: function() {
      return j(this, !0)
    },
    hide: function() {
      return j(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        $e(this) ? oe(this).show() : oe(this).hide()
      })
    }
  }), oe.Tween = A, A.prototype = {
    constructor: A,
    init: function(e, t, n, i, r, o) {
      this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (oe.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = A.propHooks[this.prop];
      return e && e.get ? e.get(this) : A.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = A.propHooks[this.prop];
      return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
    }
  }, A.prototype.init.prototype = A.prototype, A.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
      },
      set: function(e) {
        oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, oe.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  }, oe.fx = A.prototype.init, oe.fx.step = {};
  var ht, mt, yt = /^(?:toggle|show|hide)$/,
    vt = new RegExp("^(?:([+-])=|)(" + Ce + ")([a-z%]*)$", "i"),
    gt = /queueHooks$/,
    bt = [Q],
    xt = {
      "*": [function(e, t) {
        var n = this.createTween(e, t),
          i = n.cur(),
          r = vt.exec(t),
          o = r && r[3] || (oe.cssNumber[e] ? "" : "px"),
          a = (oe.cssNumber[e] || "px" !== o && +i) && vt.exec(oe.css(n.elem, e)),
          s = 1,
          l = 20;
        if (a && a[3] !== o) {
          o = o || a[3], r = r || [], a = +i || 1;
          do s = s || ".5", a /= s, oe.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
        }
        return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
      }]
    };
  oe.Animation = oe.extend(L, {
      tweener: function(e, t) {
        oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        for (var n, i = 0, r = e.length; i < r; i++) n = e[i], xt[n] = xt[n] || [], xt[n].unshift(t)
      },
      prefilter: function(e, t) {
        t ? bt.unshift(e) : bt.push(e)
      }
    }), oe.speed = function(e, t, n) {
      var i = e && "object" == typeof e ? oe.extend({}, e) : {
        complete: n || !n && t || oe.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !oe.isFunction(t) && t
      };
      return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
        oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
      }, i
    }, oe.fn.extend({
      fadeTo: function(e, t, n, i) {
        return this.filter($e).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, i)
      },
      animate: function(e, t, n, i) {
        var r = oe.isEmptyObject(e),
          o = oe.speed(t, n, i),
          a = function() {
            var t = L(this, oe.extend({}, e), o);
            (r || oe._data(this, "finish")) && t.stop(!0)
          };
        return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
      },
      stop: function(e, t, n) {
        var i = function(e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
          var t = !0,
            r = null != e && e + "queueHooks",
            o = oe.timers,
            a = oe._data(this);
          if (r) a[r] && a[r].stop && i(a[r]);
          else
            for (r in a) a[r] && a[r].stop && gt.test(r) && i(a[r]);
          for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
          !t && n || oe.dequeue(this, e)
        })
      },
      finish: function(e) {
        return e !== !1 && (e = e || "fx"), this.each(function() {
          var t, n = oe._data(this),
            i = n[e + "queue"],
            r = n[e + "queueHooks"],
            o = oe.timers,
            a = i ? i.length : 0;
          for (n.finish = !0, oe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
          delete n.finish
        })
      }
    }), oe.each(["toggle", "show", "hide"], function(e, t) {
      var n = oe.fn[t];
      oe.fn[t] = function(e, i, r) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(D(t, !0), e, i, r)
      }
    }), oe.each({
      slideDown: D("show"),
      slideUp: D("hide"),
      slideToggle: D("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, t) {
      oe.fn[e] = function(e, n, i) {
        return this.animate(t, e, n, i)
      }
    }), oe.timers = [], oe.fx.tick = function() {
      var e, t = oe.timers,
        n = 0;
      for (ht = oe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
      t.length || oe.fx.stop(), ht = void 0
    }, oe.fx.timer = function(e) {
      oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
    }, oe.fx.interval = 13, oe.fx.start = function() {
      mt || (mt = setInterval(oe.fx.tick, oe.fx.interval))
    }, oe.fx.stop = function() {
      clearInterval(mt), mt = null
    }, oe.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, oe.fn.delay = function(e, t) {
      return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
        var i = setTimeout(t, e);
        n.stop = function() {
          clearTimeout(i)
        }
      })
    },
    function() {
      var e, t, n, i, r = me.createElement("div");
      r.setAttribute("className", "t"), r.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = r.getElementsByTagName("a")[0], n = me.createElement("select"), i = n.appendChild(me.createElement("option")), t = r.getElementsByTagName("input")[0], e.style.cssText = "top:1px", ie.getSetAttribute = "t" !== r.className, ie.style = /top/.test(e.getAttribute("style")), ie.hrefNormalized = "/a" === e.getAttribute("href"), ie.checkOn = !!t.value, ie.optSelected = i.selected, ie.enctype = !!me.createElement("form").enctype, n.disabled = !0, ie.optDisabled = !i.disabled, t = me.createElement("input"), t.setAttribute("value", ""), ie.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ie.radioValue = "t" === t.value, e = t = n = i = r = null
    }();
  var _t = /\r/g;
  oe.fn.extend({
    val: function(e) {
      var t, n, i, r = this[0]; {
        if (arguments.length) return i = oe.isFunction(e), this.each(function(n) {
          var r;
          1 === this.nodeType && (r = i ? e.call(this, n, oe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, function(e) {
            return null == e ? "" : e + ""
          })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
        });
        if (r) return t = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(_t, "") : null == n ? "" : n)
      }
    }
  }), oe.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = oe.find.attr(e, "value");
          return null != t ? t : oe.text(e)
        }
      },
      select: {
        get: function(e) {
          for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
            if (n = i[l], (n.selected || l === r) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
              if (t = oe(n).val(), o) return t;
              a.push(t)
            } return a
        },
        set: function(e, t) {
          for (var n, i, r = e.options, o = oe.makeArray(t), a = r.length; a--;)
            if (i = r[a], oe.inArray(oe.valHooks.option.get(i), o) >= 0) try {
              i.selected = n = !0
            } catch (s) {
              i.scrollHeight
            } else i.selected = !1;
          return n || (e.selectedIndex = -1), r
        }
      }
    }
  }), oe.each(["radio", "checkbox"], function() {
    oe.valHooks[this] = {
      set: function(e, t) {
        if (oe.isArray(t)) return e.checked = oe.inArray(oe(e).val(), t) >= 0
      }
    }, ie.checkOn || (oe.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var wt, Tt, Pt = oe.expr.attrHandle,
    kt = /^(?:checked|selected)$/i,
    St = ie.getSetAttribute,
    Ct = ie.input;
  oe.fn.extend({
    attr: function(e, t) {
      return Ye(this, oe.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        oe.removeAttr(this, e)
      })
    }
  }), oe.extend({
    attr: function(e, t, n) {
      var i, r, o = e.nodeType;
      if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Pe ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? Tt : wt)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = oe.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void oe.removeAttr(e, t))
    },
    removeAttr: function(e, t) {
      var n, i, r = 0,
        o = t && t.match(xe);
      if (o && 1 === e.nodeType)
        for (; n = o[r++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? Ct && St || !kt.test(n) ? e[i] = !1 : e[oe.camelCase("default-" + n)] = e[i] = !1 : oe.attr(e, n, ""), e.removeAttribute(St ? n : i)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }
  }), Tt = {
    set: function(e, t, n) {
      return t === !1 ? oe.removeAttr(e, n) : Ct && St || !kt.test(n) ? e.setAttribute(!St && oe.propFix[n] || n, n) : e[oe.camelCase("default-" + n)] = e[n] = !0, n
    }
  }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = Pt[t] || oe.find.attr;
    Pt[t] = Ct && St || !kt.test(t) ? function(e, t, i) {
      var r, o;
      return i || (o = Pt[t], Pt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Pt[t] = o), r
    } : function(e, t, n) {
      if (!n) return e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
    }
  }), Ct && St || (oe.attrHooks.value = {
    set: function(e, t, n) {
      return oe.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
    }
  }), St || (wt = {
    set: function(e, t, n) {
      var i = e.getAttributeNode(n);
      if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
    }
  }, Pt.id = Pt.name = Pt.coords = function(e, t, n) {
    var i;
    if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
  }, oe.valHooks.button = {
    get: function(e, t) {
      var n = e.getAttributeNode(t);
      if (n && n.specified) return n.value
    },
    set: wt.set
  }, oe.attrHooks.contenteditable = {
    set: function(e, t, n) {
      wt.set(e, "" !== t && t, n)
    }
  }, oe.each(["width", "height"], function(e, t) {
    oe.attrHooks[t] = {
      set: function(e, n) {
        if ("" === n) return e.setAttribute(t, "auto"), n
      }
    }
  })), ie.style || (oe.attrHooks.style = {
    get: function(e) {
      return e.style.cssText || void 0
    },
    set: function(e, t) {
      return e.style.cssText = t + ""
    }
  });
  var jt = /^(?:input|select|textarea|button|object)$/i,
    $t = /^(?:a|area)$/i;
  oe.fn.extend({
    prop: function(e, t) {
      return Ye(this, oe.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return e = oe.propFix[e] || e, this.each(function() {
        try {
          this[e] = void 0, delete this[e]
        } catch (t) {}
      })
    }
  }), oe.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(e, t, n) {
      var i, r, o, a = e.nodeType;
      if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !oe.isXMLDoc(e), o && (t = oe.propFix[t] || t, r = oe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = oe.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : jt.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }
  }), ie.hrefNormalized || oe.each(["href", "src"], function(e, t) {
    oe.propHooks[t] = {
      get: function(e) {
        return e.getAttribute(t, 4)
      }
    }
  }), ie.optSelected || (oe.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }
  }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    oe.propFix[this.toLowerCase()] = this
  }), ie.enctype || (oe.propFix.enctype = "encoding");
  var Yt = /[\t\r\n\f]/g;
  oe.fn.extend({
    addClass: function(e) {
      var t, n, i, r, o, a, s = 0,
        l = this.length,
        c = "string" == typeof e && e;
      if (oe.isFunction(e)) return this.each(function(t) {
        oe(this).addClass(e.call(this, t, this.className))
      });
      if (c)
        for (t = (e || "").match(xe) || []; s < l; s++)
          if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Yt, " ") : " ")) {
            for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
            a = oe.trim(i), n.className !== a && (n.className = a)
          } return this
    },
    removeClass: function(e) {
      var t, n, i, r, o, a, s = 0,
        l = this.length,
        c = 0 === arguments.length || "string" == typeof e && e;
      if (oe.isFunction(e)) return this.each(function(t) {
        oe(this).removeClass(e.call(this, t, this.className))
      });
      if (c)
        for (t = (e || "").match(xe) || []; s < l; s++)
          if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Yt, " ") : "")) {
            for (o = 0; r = t[o++];)
              for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
            a = e ? oe.trim(i) : "", n.className !== a && (n.className = a)
          } return this
    },
    toggleClass: function(e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
        oe(this).toggleClass(e.call(this, n, this.className, t), t)
      }) : this.each(function() {
        if ("string" === n)
          for (var t, i = 0, r = oe(this), o = e.match(xe) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
        else n !== Pe && "boolean" !== n || (this.className && oe._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : oe._data(this, "__className__") || "")
      })
    },
    hasClass: function(e) {
      for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Yt, " ").indexOf(t) >= 0) return !0;
      return !1
    }
  }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    oe.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), oe.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    },
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, i) {
      return this.on(t, e, n, i)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  });
  var Et = oe.now(),
    At = /\?/,
    Mt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  oe.parseJSON = function(t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
    var n, i = null,
      r = oe.trim(t + "");
    return r && !oe.trim(r.replace(Mt, function(e, t, r, o) {
      return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
    })) ? Function("return " + r)() : oe.error("Invalid JSON: " + t)
  }, oe.parseXML = function(t) {
    var n, i;
    if (!t || "string" != typeof t) return null;
    try {
      e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
    } catch (r) {
      n = void 0
    }
    return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
  };
  var Dt, It, Qt = /#.*$/,
    Ft = /([?&])_=[^&]*/,
    Lt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Nt = /^(?:GET|HEAD)$/,
    Bt = /^\/\//,
    zt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Rt = {},
    Ht = {},
    qt = "*/".concat("*");
  try {
    It = location.href
  } catch (Wt) {
    It = me.createElement("a"), It.href = "", It = It.href
  }
  Dt = zt.exec(It.toLowerCase()) || [], oe.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: It,
      type: "GET",
      isLocal: Ot.test(Dt[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": qt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": oe.parseJSON,
        "text xml": oe.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? B(B(e, oe.ajaxSettings), t) : B(oe.ajaxSettings, e)
    },
    ajaxPrefilter: O(Rt),
    ajaxTransport: O(Ht),
    ajax: function(e, t) {
      function n(e, t, n, i) {
        var r, u, v, g, x, w = t;
        2 !== b && (b = 2, s && clearTimeout(s), c = void 0, a = i || "", _.readyState = e > 0 ? 4 : 0, r = e >= 200 && e < 300 || 304 === e, n && (g = z(p, _, n)), g = R(p, g, _, r), r ? (p.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (oe.lastModified[o] = x), x = _.getResponseHeader("etag"), x && (oe.etag[o] = x)), 204 === e || "HEAD" === p.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = g.state, u = g.data, v = g.error, r = !v)) : (v = w, !e && w || (w = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || w) + "", r ? h.resolveWith(d, [u, w, _]) : h.rejectWith(d, [_, w, v]), _.statusCode(y), y = void 0, l && f.trigger(r ? "ajaxSuccess" : "ajaxError", [_, p, r ? u : v]), m.fireWith(d, [_, w]), l && (f.trigger("ajaxComplete", [_, p]), --oe.active || oe.event.trigger("ajaxStop")))
      }
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var i, r, o, a, s, l, c, u, p = oe.ajaxSetup({}, t),
        d = p.context || p,
        f = p.context && (d.nodeType || d.jquery) ? oe(d) : oe.event,
        h = oe.Deferred(),
        m = oe.Callbacks("once memory"),
        y = p.statusCode || {},
        v = {},
        g = {},
        b = 0,
        x = "canceled",
        _ = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (2 === b) {
              if (!u)
                for (u = {}; t = Lt.exec(a);) u[t[1].toLowerCase()] = t[2];
              t = u[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return 2 === b ? a : null
          },
          setRequestHeader: function(e, t) {
            var n = e.toLowerCase();
            return b || (e = g[n] = g[n] || e, v[e] = t), this
          },
          overrideMimeType: function(e) {
            return b || (p.mimeType = e), this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (b < 2)
                for (t in e) y[t] = [y[t], e[t]];
              else _.always(e[_.status]);
            return this
          },
          abort: function(e) {
            var t = e || x;
            return c && c.abort(t), n(0, t), this
          }
        };
      if (h.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, p.url = ((e || p.url || It) + "").replace(Qt, "").replace(Bt, Dt[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = oe.trim(p.dataType || "*").toLowerCase().match(xe) || [""], null == p.crossDomain && (i = zt.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === Dt[1] && i[2] === Dt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Dt[3] || ("http:" === Dt[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)), N(Rt, p, t, _), 2 === b) return _;
      l = p.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (At.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Ft.test(o) ? o.replace(Ft, "$1_=" + Et++) : o + (At.test(o) ? "&" : "?") + "_=" + Et++)), p.ifModified && (oe.lastModified[o] && _.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && _.setRequestHeader("If-None-Match", oe.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && _.setRequestHeader("Content-Type", p.contentType), _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : p.accepts["*"]);
      for (r in p.headers) _.setRequestHeader(r, p.headers[r]);
      if (p.beforeSend && (p.beforeSend.call(d, _, p) === !1 || 2 === b)) return _.abort();
      x = "abort";
      for (r in {
          success: 1,
          error: 1,
          complete: 1
        }) _[r](p[r]);
      if (c = N(Ht, p, t, _)) {
        _.readyState = 1, l && f.trigger("ajaxSend", [_, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
          _.abort("timeout")
        }, p.timeout));
        try {
          b = 1, c.send(v, n)
        } catch (w) {
          if (!(b < 2)) throw w;
          n(-1, w)
        }
      } else n(-1, "No Transport");
      return _
    },
    getJSON: function(e, t, n) {
      return oe.get(e, t, n, "json")
    },
    getScript: function(e, t) {
      return oe.get(e, void 0, t, "script")
    }
  }), oe.each(["get", "post"], function(e, t) {
    oe[t] = function(e, n, i, r) {
      return oe.isFunction(n) && (r = r || i, i = n, n = void 0), oe.ajax({
        url: e,
        type: t,
        dataType: r,
        data: n,
        success: i
      })
    }
  }), oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    oe.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), oe._evalUrl = function(e) {
    return oe.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  }, oe.fn.extend({
    wrapAll: function(e) {
      if (oe.isFunction(e)) return this.each(function(t) {
        oe(this).wrapAll(e.call(this, t))
      });
      if (this[0]) {
        var t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
          return e
        }).append(this)
      }
      return this
    },
    wrapInner: function(e) {
      return oe.isFunction(e) ? this.each(function(t) {
        oe(this).wrapInner(e.call(this, t))
      }) : this.each(function() {
        var t = oe(this),
          n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = oe.isFunction(e);
      return this.each(function(n) {
        oe(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
      }).end()
    }
  }), oe.expr.filters.hidden = function(e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
  }, oe.expr.filters.visible = function(e) {
    return !oe.expr.filters.hidden(e)
  };
  var Vt = /%20/g,
    Xt = /\[\]$/,
    Ut = /\r?\n/g,
    Gt = /^(?:submit|button|image|reset|file)$/i,
    Zt = /^(?:input|select|textarea|keygen)/i;
  oe.param = function(e, t) {
    var n, i = [],
      r = function(e, t) {
        t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
    if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
      r(this.name, this.value)
    });
    else
      for (n in e) H(n, e[n], t, r);
    return i.join("&").replace(Vt, "+")
  }, oe.fn.extend({
    serialize: function() {
      return oe.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = oe.prop(this, "elements");
        return e ? oe.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !oe(this).is(":disabled") && Zt.test(this.nodeName) && !Gt.test(e) && (this.checked || !Ee.test(e))
      }).map(function(e, t) {
        var n = oe(this).val();
        return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(Ut, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(Ut, "\r\n")
        }
      }).get()
    }
  }), oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && q() || W()
  } : q;
  var Kt = 0,
    Jt = {},
    en = oe.ajaxSettings.xhr();
  e.ActiveXObject && oe(e).on("unload", function() {
    for (var e in Jt) Jt[e](void 0, !0)
  }), ie.cors = !!en && "withCredentials" in en, en = ie.ajax = !!en, en && oe.ajaxTransport(function(e) {
    if (!e.crossDomain || ie.cors) {
      var t;
      return {
        send: function(n, i) {
          var r, o = e.xhr(),
            a = ++Kt;
          if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (r in e.xhrFields) o[r] = e.xhrFields[r];
          e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
          for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
          o.send(e.hasContent && e.data || null), t = function(n, r) {
            var s, l, c;
            if (t && (r || 4 === o.readyState))
              if (delete Jt[a], t = void 0, o.onreadystatechange = oe.noop, r) 4 !== o.readyState && o.abort();
              else {
                c = {}, s = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
                try {
                  l = o.statusText
                } catch (u) {
                  l = ""
                }
                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
              } c && i(s, l, c, o.getAllResponseHeaders())
          }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Jt[a] = t : t()
        },
        abort: function() {
          t && t(void 0, !0)
        }
      }
    }
  }), oe.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(e) {
        return oe.globalEval(e), e
      }
    }
  }), oe.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
  }), oe.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var t, n = me.head || oe("head")[0] || me.documentElement;
      return {
        send: function(i, r) {
          t = me.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
          }, n.insertBefore(t, n.firstChild)
        },
        abort: function() {
          t && t.onload(void 0, !0)
        }
      }
    }
  });
  var tn = [],
    nn = /(=)\?(?=&|$)|\?\?/;
  oe.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = tn.pop() || oe.expando + "_" + Et++;
      return this[e] = !0, e
    }
  }), oe.ajaxPrefilter("json jsonp", function(t, n, i) {
    var r, o, a, s = t.jsonp !== !1 && (nn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(nn, "$1" + r) : t.jsonp !== !1 && (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
      return a || oe.error(r + " was not called"), a[0]
    }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
      a = arguments
    }, i.always(function() {
      e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, tn.push(r)), a && oe.isFunction(o) && o(a[0]), a = o = void 0
    }), "script"
  }), oe.parseHTML = function(e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || me;
    var i = de.exec(e),
      r = !n && [];
    return i ? [t.createElement(i[1])] : (i = oe.buildFragment([e], t, r), r && r.length && oe(r).remove(), oe.merge([], i.childNodes))
  };
  var rn = oe.fn.load;
  oe.fn.load = function(e, t, n) {
    if ("string" != typeof e && rn) return rn.apply(this, arguments);
    var i, r, o, a = this,
      s = e.indexOf(" ");
    return s >= 0 && (i = e.slice(s, e.length), e = e.slice(0, s)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && oe.ajax({
      url: e,
      type: o,
      dataType: "html",
      data: t
    }).done(function(e) {
      r = arguments, a.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
    }).complete(n && function(e, t) {
      a.each(n, r || [e.responseText, t, e])
    }), this
  }, oe.expr.filters.animated = function(e) {
    return oe.grep(oe.timers, function(t) {
      return e === t.elem
    }).length
  };
  var on = e.document.documentElement;
  oe.offset = {
    setOffset: function(e, t, n) {
      var i, r, o, a, s, l, c, u = oe.css(e, "position"),
        p = oe(e),
        d = {};
      "static" === u && (e.style.position = "relative"), s = p.offset(), o = oe.css(e, "top"), l = oe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && oe.inArray("auto", [o, l]) > -1, c ? (i = p.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : p.css(d)
    }
  }, oe.fn.extend({
    offset: function(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function(t) {
        oe.offset.setOffset(this, e, t)
      });
      var t, n, i = {
          top: 0,
          left: 0
        },
        r = this[0],
        o = r && r.ownerDocument;
      if (o) return t = o.documentElement, oe.contains(t, r) ? (typeof r.getBoundingClientRect !== Pe && (i = r.getBoundingClientRect()), n = V(o), {
        top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
        left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
      }) : i
    },
    position: function() {
      if (this[0]) {
        var e, t, n = {
            top: 0,
            left: 0
          },
          i = this[0];
        return "fixed" === oe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (n = e.offset()), n.top += oe.css(e[0], "borderTopWidth", !0), n.left += oe.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - n.top - oe.css(i, "marginTop", !0),
          left: t.left - n.left - oe.css(i, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent || on; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) e = e.offsetParent;
        return e || on
      })
    }
  }), oe.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, t) {
    var n = /Y/.test(t);
    oe.fn[e] = function(i) {
      return Ye(this, function(e, i, r) {
        var o = V(e);
        return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? oe(o).scrollLeft() : r, n ? r : oe(o).scrollTop()) : e[i] = r)
      }, e, i, arguments.length, null);
    }
  }), oe.each(["top", "left"], function(e, t) {
    oe.cssHooks[t] = S(ie.pixelPosition, function(e, n) {
      if (n) return n = nt(e, t), rt.test(n) ? oe(e).position()[t] + "px" : n
    })
  }), oe.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    oe.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(n, i) {
      oe.fn[i] = function(i, r) {
        var o = arguments.length && (n || "boolean" != typeof i),
          a = n || (i === !0 || r === !0 ? "margin" : "border");
        return Ye(this, function(t, n, i) {
          var r;
          return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? oe.css(t, n, a) : oe.style(t, n, i, a)
        }, t, o ? i : void 0, o, null)
      }
    })
  }), oe.fn.size = function() {
    return this.length
  }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return oe
  });
  var an = e.jQuery,
    sn = e.$;
  return oe.noConflict = function(t) {
    return e.$ === oe && (e.$ = sn), t && e.jQuery === oe && (e.jQuery = an), oe
  }, typeof t === Pe && (e.jQuery = e.$ = oe), oe
}),
function(e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function(e) {
  "use strict";

  function t(t) {
    var n = t.data;
    t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(n))
  }

  function n(t) {
    var n = t.target,
      i = e(n);
    if (!i.is("[type=submit],[type=image]")) {
      var r = i.closest("[type=submit]");
      if (0 === r.length) return;
      n = r[0]
    }
    var o = this;
    if (o.clk = n, "image" == n.type)
      if (void 0 !== t.offsetX) o.clk_x = t.offsetX, o.clk_y = t.offsetY;
      else if ("function" == typeof e.fn.offset) {
      var a = i.offset();
      o.clk_x = t.pageX - a.left, o.clk_y = t.pageY - a.top
    } else o.clk_x = t.pageX - n.offsetLeft, o.clk_y = t.pageY - n.offsetTop;
    setTimeout(function() {
      o.clk = o.clk_x = o.clk_y = null
    }, 100)
  }

  function i() {
    if (e.fn.ajaxSubmit.debug) {
      var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
      window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
    }
  }
  var r = {};
  r.fileapi = void 0 !== e("<input type='file'/>").get(0).files, r.formdata = void 0 !== window.FormData;
  var o = !!e.fn.prop;
  e.fn.attr2 = function() {
    if (!o) return this.attr.apply(this, arguments);
    var e = this.prop.apply(this, arguments);
    return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
  }, e.fn.ajaxSubmit = function(t) {
    function n(n) {
      var i, r, o = e.param(n, t.traditional).split("&"),
        a = o.length,
        s = [];
      for (i = 0; i < a; i++) o[i] = o[i].replace(/\+/g, " "), r = o[i].split("="), s.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
      return s
    }

    function a(i) {
      for (var r = new FormData, o = 0; o < i.length; o++) r.append(i[o].name, i[o].value);
      if (t.extraData) {
        var a = n(t.extraData);
        for (o = 0; o < a.length; o++) a[o] && r.append(a[o][0], a[o][1])
      }
      t.data = null;
      var s = e.extend(!0, {}, e.ajaxSettings, t, {
        contentType: !1,
        processData: !1,
        cache: !1,
        type: l || "POST"
      });
      t.uploadProgress && (s.xhr = function() {
        var n = e.ajaxSettings.xhr();
        return n.upload && n.upload.addEventListener("progress", function(e) {
          var n = 0,
            i = e.loaded || e.position,
            r = e.total;
          e.lengthComputable && (n = Math.ceil(i / r * 100)), t.uploadProgress(e, i, r, n)
        }, !1), n
      }), s.data = null;
      var c = s.beforeSend;
      return s.beforeSend = function(e, n) {
        t.formData ? n.data = t.formData : n.data = r, c && c.call(this, e, n)
      }, e.ajax(s)
    }

    function s(n) {
      function r(e) {
        var t = null;
        try {
          e.contentWindow && (t = e.contentWindow.document)
        } catch (n) {
          i("cannot get iframe.contentWindow document: " + n)
        }
        if (t) return t;
        try {
          t = e.contentDocument ? e.contentDocument : e.document
        } catch (n) {
          i("cannot get iframe.contentDocument: " + n), t = e.document
        }
        return t
      }

      function a() {
        function t() {
          try {
            var e = r(v).readyState;
            i("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
          } catch (n) {
            i("Server abort: ", n, " (", n.name, ")"), s(S), w && clearTimeout(w), w = void 0
          }
        }
        var n = p.attr2("target"),
          o = p.attr2("action"),
          a = "multipart/form-data",
          c = p.attr("enctype") || p.attr("encoding") || a;
        T.setAttribute("target", h), l && !/post/i.test(l) || T.setAttribute("method", "POST"), o != d.url && T.setAttribute("action", d.url), d.skipEncodingOverride || l && !/post/i.test(l) || p.attr({
          encoding: "multipart/form-data",
          enctype: "multipart/form-data"
        }), d.timeout && (w = setTimeout(function() {
          _ = !0, s(k)
        }, d.timeout));
        var u = [];
        try {
          if (d.extraData)
            for (var f in d.extraData) d.extraData.hasOwnProperty(f) && (e.isPlainObject(d.extraData[f]) && d.extraData[f].hasOwnProperty("name") && d.extraData[f].hasOwnProperty("value") ? u.push(e('<input type="hidden" name="' + d.extraData[f].name + '">').val(d.extraData[f].value).appendTo(T)[0]) : u.push(e('<input type="hidden" name="' + f + '">').val(d.extraData[f]).appendTo(T)[0]));
          d.iframeTarget || y.appendTo("body"), v.attachEvent ? v.attachEvent("onload", s) : v.addEventListener("load", s, !1), setTimeout(t, 15);
          try {
            T.submit()
          } catch (m) {
            var g = document.createElement("form").submit;
            g.apply(T)
          }
        } finally {
          T.setAttribute("action", o), T.setAttribute("enctype", c), n ? T.setAttribute("target", n) : p.removeAttr("target"), e(u).remove()
        }
      }

      function s(t) {
        if (!g.aborted && !E) {
          if (Y = r(v), Y || (i("cannot access response document"), t = S), t === k && g) return g.abort("timeout"), void P.reject(g, "timeout");
          if (t == S && g) return g.abort("server abort"), void P.reject(g, "error", "server abort");
          if (Y && Y.location.href != d.iframeSrc || _) {
            v.detachEvent ? v.detachEvent("onload", s) : v.removeEventListener("load", s, !1);
            var n, o = "success";
            try {
              if (_) throw "timeout";
              var a = "xml" == d.dataType || Y.XMLDocument || e.isXMLDoc(Y);
              if (i("isXml=" + a), !a && window.opera && (null === Y.body || !Y.body.innerHTML) && --A) return i("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
              var l = Y.body ? Y.body : Y.documentElement;
              g.responseText = l ? l.innerHTML : null, g.responseXML = Y.XMLDocument ? Y.XMLDocument : Y, a && (d.dataType = "xml"), g.getResponseHeader = function(e) {
                var t = {
                  "content-type": d.dataType
                };
                return t[e.toLowerCase()]
              }, l && (g.status = Number(l.getAttribute("status")) || g.status, g.statusText = l.getAttribute("statusText") || g.statusText);
              var c = (d.dataType || "").toLowerCase(),
                u = /(json|script|text)/.test(c);
              if (u || d.textarea) {
                var p = Y.getElementsByTagName("textarea")[0];
                if (p) g.responseText = p.value, g.status = Number(p.getAttribute("status")) || g.status, g.statusText = p.getAttribute("statusText") || g.statusText;
                else if (u) {
                  var h = Y.getElementsByTagName("pre")[0],
                    m = Y.getElementsByTagName("body")[0];
                  h ? g.responseText = h.textContent ? h.textContent : h.innerText : m && (g.responseText = m.textContent ? m.textContent : m.innerText)
                }
              } else "xml" == c && !g.responseXML && g.responseText && (g.responseXML = M(g.responseText));
              try {
                $ = I(g, c, d)
              } catch (b) {
                o = "parsererror", g.error = n = b || o
              }
            } catch (b) {
              i("error caught: ", b), o = "error", g.error = n = b || o
            }
            g.aborted && (i("upload aborted"), o = null), g.status && (o = g.status >= 200 && g.status < 300 || 304 === g.status ? "success" : "error"), "success" === o ? (d.success && d.success.call(d.context, $, "success", g), P.resolve(g.responseText, "success", g), f && e.event.trigger("ajaxSuccess", [g, d])) : o && (void 0 === n && (n = g.statusText), d.error && d.error.call(d.context, g, o, n), P.reject(g, "error", n), f && e.event.trigger("ajaxError", [g, d, n])), f && e.event.trigger("ajaxComplete", [g, d]), f && !--e.active && e.event.trigger("ajaxStop"), d.complete && d.complete.call(d.context, g, o), E = !0, d.timeout && clearTimeout(w), setTimeout(function() {
              d.iframeTarget ? y.attr("src", d.iframeSrc) : y.remove(), g.responseXML = null
            }, 100)
          }
        }
      }
      var c, u, d, f, h, y, v, g, b, x, _, w, T = p[0],
        P = e.Deferred();
      if (P.abort = function(e) {
          g.abort(e)
        }, n)
        for (u = 0; u < m.length; u++) c = e(m[u]), o ? c.prop("disabled", !1) : c.removeAttr("disabled");
      if (d = e.extend(!0, {}, e.ajaxSettings, t), d.context = d.context || d, h = "jqFormIO" + (new Date).getTime(), d.iframeTarget ? (y = e(d.iframeTarget), x = y.attr2("name"), x ? h = x : y.attr2("name", h)) : (y = e('<iframe name="' + h + '" src="' + d.iframeSrc + '" />'), y.css({
          position: "absolute",
          top: "-1000px",
          left: "-1000px"
        })), v = y[0], g = {
          aborted: 0,
          responseText: null,
          responseXML: null,
          status: 0,
          statusText: "n/a",
          getAllResponseHeaders: function() {},
          getResponseHeader: function() {},
          setRequestHeader: function() {},
          abort: function(t) {
            var n = "timeout" === t ? "timeout" : "aborted";
            i("aborting upload... " + n), this.aborted = 1;
            try {
              v.contentWindow.document.execCommand && v.contentWindow.document.execCommand("Stop")
            } catch (r) {}
            y.attr("src", d.iframeSrc), g.error = n, d.error && d.error.call(d.context, g, n, t), f && e.event.trigger("ajaxError", [g, d, n]), d.complete && d.complete.call(d.context, g, n)
          }
        }, f = d.global, f && 0 === e.active++ && e.event.trigger("ajaxStart"), f && e.event.trigger("ajaxSend", [g, d]), d.beforeSend && d.beforeSend.call(d.context, g, d) === !1) return d.global && e.active--, P.reject(), P;
      if (g.aborted) return P.reject(), P;
      b = T.clk, b && (x = b.name, x && !b.disabled && (d.extraData = d.extraData || {}, d.extraData[x] = b.value, "image" == b.type && (d.extraData[x + ".x"] = T.clk_x, d.extraData[x + ".y"] = T.clk_y)));
      var k = 1,
        S = 2,
        C = e("meta[name=csrf-token]").attr("content"),
        j = e("meta[name=csrf-param]").attr("content");
      j && C && (d.extraData = d.extraData || {}, d.extraData[j] = C), d.forceSync ? a() : setTimeout(a, 10);
      var $, Y, E, A = 50,
        M = e.parseXML || function(e, t) {
          return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
        },
        D = e.parseJSON || function(e) {
          return window.eval("(" + e + ")")
        },
        I = function(t, n, i) {
          var r = t.getResponseHeader("content-type") || "",
            o = "xml" === n || !n && r.indexOf("xml") >= 0,
            a = o ? t.responseXML : t.responseText;
          return o && "parsererror" === a.documentElement.nodeName && e.error && e.error("parsererror"), i && i.dataFilter && (a = i.dataFilter(a, n)), "string" == typeof a && ("json" === n || !n && r.indexOf("json") >= 0 ? a = D(a) : ("script" === n || !n && r.indexOf("javascript") >= 0) && e.globalEval(a)), a
        };
      return P
    }
    if (!this.length) return i("ajaxSubmit: skipping submit process - no element selected"), this;
    var l, c, u, p = this;
    "function" == typeof t ? t = {
      success: t
    } : void 0 === t && (t = {}), l = t.type || this.attr2("method"), c = t.url || this.attr2("action"), u = "string" == typeof c ? e.trim(c) : "", u = u || window.location.href || "", u && (u = (u.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
      url: u,
      success: e.ajaxSettings.success,
      type: l || e.ajaxSettings.type,
      iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
    }, t);
    var d = {};
    if (this.trigger("form-pre-serialize", [this, t, d]), d.veto) return i("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
    if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return i("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
    var f = t.traditional;
    void 0 === f && (f = e.ajaxSettings.traditional);
    var h, m = [],
      y = this.formToArray(t.semantic, m);
    if (t.data && (t.extraData = t.data, h = e.param(t.data, f)), t.beforeSubmit && t.beforeSubmit(y, this, t) === !1) return i("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
    if (this.trigger("form-submit-validate", [y, this, t, d]), d.veto) return i("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
    var v = e.param(y, f);
    h && (v = v ? v + "&" + h : h), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + v, t.data = null) : t.data = v;
    var g = [];
    if (t.resetForm && g.push(function() {
        p.resetForm()
      }), t.clearForm && g.push(function() {
        p.clearForm(t.includeHidden)
      }), !t.dataType && t.target) {
      var b = t.success || function() {};
      g.push(function(n) {
        var i = t.replaceTarget ? "replaceWith" : "html";
        e(t.target)[i](n).each(b, arguments)
      })
    } else t.success && g.push(t.success);
    if (t.success = function(e, n, i) {
        for (var r = t.context || this, o = 0, a = g.length; o < a; o++) g[o].apply(r, [e, n, i || p, p])
      }, t.error) {
      var x = t.error;
      t.error = function(e, n, i) {
        var r = t.context || this;
        x.apply(r, [e, n, i, p])
      }
    }
    if (t.complete) {
      var _ = t.complete;
      t.complete = function(e, n) {
        var i = t.context || this;
        _.apply(i, [e, n, p])
      }
    }
    var w = e("input[type=file]:enabled", this).filter(function() {
        return "" !== e(this).val()
      }),
      T = w.length > 0,
      P = "multipart/form-data",
      k = p.attr("enctype") == P || p.attr("encoding") == P,
      S = r.fileapi && r.formdata;
    i("fileAPI :" + S);
    var C, j = (T || k) && !S;
    t.iframe !== !1 && (t.iframe || j) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
      C = s(y)
    }) : C = s(y) : C = (T || k) && S ? a(y) : e.ajax(t), p.removeData("jqxhr").data("jqxhr", C);
    for (var $ = 0; $ < m.length; $++) m[$] = null;
    return this.trigger("form-submit-notify", [this, t]), this
  }, e.fn.ajaxForm = function(r) {
    if (r = r || {}, r.delegation = r.delegation && e.isFunction(e.fn.on), !r.delegation && 0 === this.length) {
      var o = {
        s: this.selector,
        c: this.context
      };
      return !e.isReady && o.s ? (i("DOM not ready, queuing ajaxForm"), e(function() {
        e(o.s, o.c).ajaxForm(r)
      }), this) : (i("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
    }
    return r.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, r, t).on("click.form-plugin", this.selector, r, n), this) : this.ajaxFormUnbind().bind("submit.form-plugin", r, t).bind("click.form-plugin", r, n)
  }, e.fn.ajaxFormUnbind = function() {
    return this.unbind("submit.form-plugin click.form-plugin")
  }, e.fn.formToArray = function(t, n) {
    var i = [];
    if (0 === this.length) return i;
    var o, a = this[0],
      s = this.attr("id"),
      l = t ? a.getElementsByTagName("*") : a.elements;
    if (l && !/MSIE [678]/.test(navigator.userAgent) && (l = e(l).get()), s && (o = e(":input[form=" + s + "]").get(), o.length && (l = (l || []).concat(o))), !l || !l.length) return i;
    var c, u, p, d, f, h, m;
    for (c = 0, h = l.length; c < h; c++)
      if (f = l[c], p = f.name, p && !f.disabled)
        if (t && a.clk && "image" == f.type) a.clk == f && (i.push({
          name: p,
          value: e(f).val(),
          type: f.type
        }), i.push({
          name: p + ".x",
          value: a.clk_x
        }, {
          name: p + ".y",
          value: a.clk_y
        }));
        else if (d = e.fieldValue(f, !0), d && d.constructor == Array)
      for (n && n.push(f), u = 0, m = d.length; u < m; u++) i.push({
        name: p,
        value: d[u]
      });
    else if (r.fileapi && "file" == f.type) {
      n && n.push(f);
      var y = f.files;
      if (y.length)
        for (u = 0; u < y.length; u++) i.push({
          name: p,
          value: y[u],
          type: f.type
        });
      else i.push({
        name: p,
        value: "",
        type: f.type
      })
    } else null !== d && "undefined" != typeof d && (n && n.push(f), i.push({
      name: p,
      value: d,
      type: f.type,
      required: f.required
    }));
    if (!t && a.clk) {
      var v = e(a.clk),
        g = v[0];
      p = g.name, p && !g.disabled && "image" == g.type && (i.push({
        name: p,
        value: v.val()
      }), i.push({
        name: p + ".x",
        value: a.clk_x
      }, {
        name: p + ".y",
        value: a.clk_y
      }))
    }
    return i
  }, e.fn.formSerialize = function(t) {
    return e.param(this.formToArray(t))
  }, e.fn.fieldSerialize = function(t) {
    var n = [];
    return this.each(function() {
      var i = this.name;
      if (i) {
        var r = e.fieldValue(this, t);
        if (r && r.constructor == Array)
          for (var o = 0, a = r.length; o < a; o++) n.push({
            name: i,
            value: r[o]
          });
        else null !== r && "undefined" != typeof r && n.push({
          name: this.name,
          value: r
        })
      }
    }), e.param(n)
  }, e.fn.fieldValue = function(t) {
    for (var n = [], i = 0, r = this.length; i < r; i++) {
      var o = this[i],
        a = e.fieldValue(o, t);
      null === a || "undefined" == typeof a || a.constructor == Array && !a.length || (a.constructor == Array ? e.merge(n, a) : n.push(a))
    }
    return n
  }, e.fieldValue = function(t, n) {
    var i = t.name,
      r = t.type,
      o = t.tagName.toLowerCase();
    if (void 0 === n && (n = !0), n && (!i || t.disabled || "reset" == r || "button" == r || ("checkbox" == r || "radio" == r) && !t.checked || ("submit" == r || "image" == r) && t.form && t.form.clk != t || "select" == o && t.selectedIndex == -1)) return null;
    if ("select" == o) {
      var a = t.selectedIndex;
      if (a < 0) return null;
      for (var s = [], l = t.options, c = "select-one" == r, u = c ? a + 1 : l.length, p = c ? a : 0; p < u; p++) {
        var d = l[p];
        if (d.selected) {
          var f = d.value;
          if (f || (f = d.attributes && d.attributes.value && !d.attributes.value.specified ? d.text : d.value), c) return f;
          s.push(f)
        }
      }
      return s
    }
    return e(t).val()
  }, e.fn.clearForm = function(t) {
    return this.each(function() {
      e("input,select,textarea", this).clearFields(t)
    })
  }, e.fn.clearFields = e.fn.clearInputs = function(t) {
    var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
    return this.each(function() {
      var i = this.type,
        r = this.tagName.toLowerCase();
      n.test(i) || "textarea" == r ? this.value = "" : "checkbox" == i || "radio" == i ? this.checked = !1 : "select" == r ? this.selectedIndex = -1 : "file" == i ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(i) || "string" == typeof t && e(this).is(t)) && (this.value = "")
    })
  }, e.fn.resetForm = function() {
    return this.each(function() {
      ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
    })
  }, e.fn.enable = function(e) {
    return void 0 === e && (e = !0), this.each(function() {
      this.disabled = !e
    })
  }, e.fn.selected = function(t) {
    return void 0 === t && (t = !0), this.each(function() {
      var n = this.type;
      if ("checkbox" == n || "radio" == n) this.checked = t;
      else if ("option" == this.tagName.toLowerCase()) {
        var i = e(this).parent("select");
        t && i[0] && "select-one" == i[0].type && i.find("option").selected(!1), this.selected = t
      }
    })
  }, e.fn.ajaxSubmit.debug = !1
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, i, r) {
      return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
    },
    easeInQuad: function(e, t, n, i, r) {
      return i * (t /= r) * t + n
    },
    easeOutQuad: function(e, t, n, i, r) {
      return -i * (t /= r) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, i, r) {
      return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, i, r) {
      return i * (t /= r) * t * t + n
    },
    easeOutCubic: function(e, t, n, i, r) {
      return i * ((t = t / r - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, i, r) {
      return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, i, r) {
      return i * (t /= r) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, i, r) {
      return -i * ((t = t / r - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, i, r) {
      return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, i, r) {
      return i * (t /= r) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, i, r) {
      return i * ((t = t / r - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, i, r) {
      return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, i, r) {
      return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
    },
    easeOutSine: function(e, t, n, i, r) {
      return i * Math.sin(t / r * (Math.PI / 2)) + n
    },
    easeInOutSine: function(e, t, n, i, r) {
      return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
    },
    easeInExpo: function(e, t, n, i, r) {
      return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
    },
    easeOutExpo: function(e, t, n, i, r) {
      return t == r ? n + i : i * (-Math.pow(2, -10 * t / r) + 1) + n
    },
    easeInOutExpo: function(e, t, n, i, r) {
      return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function(e, t, n, i, r) {
      return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
    },
    easeOutCirc: function(e, t, n, i, r) {
      return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
    },
    easeInOutCirc: function(e, t, n, i, r) {
      return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function(e, t, n, i, r) {
      var o = 1.70158,
        a = 0,
        s = i;
      if (0 == t) return n;
      if (1 == (t /= r)) return n + i;
      if (a || (a = .3 * r), s < Math.abs(i)) {
        s = i;
        var o = a / 4
      } else var o = a / (2 * Math.PI) * Math.asin(i / s);
      return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a)) + n
    },
    easeOutElastic: function(e, t, n, i, r) {
      var o = 1.70158,
        a = 0,
        s = i;
      if (0 == t) return n;
      if (1 == (t /= r)) return n + i;
      if (a || (a = .3 * r), s < Math.abs(i)) {
        s = i;
        var o = a / 4
      } else var o = a / (2 * Math.PI) * Math.asin(i / s);
      return s * Math.pow(2, -10 * t) * Math.sin((t * r - o) * (2 * Math.PI) / a) + i + n
    },
    easeInOutElastic: function(e, t, n, i, r) {
      var o = 1.70158,
        a = 0,
        s = i;
      if (0 == t) return n;
      if (2 == (t /= r / 2)) return n + i;
      if (a || (a = r * (.3 * 1.5)), s < Math.abs(i)) {
        s = i;
        var o = a / 4
      } else var o = a / (2 * Math.PI) * Math.asin(i / s);
      return t < 1 ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a)) + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) * .5 + i + n
    },
    easeInBack: function(e, t, n, i, r, o) {
      return void 0 == o && (o = 1.70158), i * (t /= r) * t * ((o + 1) * t - o) + n
    },
    easeOutBack: function(e, t, n, i, r, o) {
      return void 0 == o && (o = 1.70158), i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n
    },
    easeInOutBack: function(e, t, n, i, r, o) {
      return void 0 == o && (o = 1.70158), (t /= r / 2) < 1 ? i / 2 * (t * t * (((o *= 1.525) + 1) * t - o)) + n : i / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + n
    },
    easeInBounce: function(e, t, n, i, r) {
      return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
    },
    easeOutBounce: function(e, t, n, i, r) {
      return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function(e, t, n, i, r) {
      return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
    }
  }),
  function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
  }(function(e) {
    function t(e) {
      return s.raw ? e : encodeURIComponent(e)
    }

    function n(e) {
      return s.raw ? e : decodeURIComponent(e)
    }

    function i(e) {
      return t(s.json ? JSON.stringify(e) : String(e))
    }

    function r(e) {
      0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
      try {
        e = decodeURIComponent(e.replace(a, " "))
      } catch (t) {
        return
      }
      try {
        return s.json ? JSON.parse(e) : e
      } catch (t) {}
    }

    function o(t, n) {
      var i = s.raw ? t : r(t);
      return e.isFunction(n) ? n(i) : i
    }
    var a = /\+/g,
      s = e.cookie = function(r, a, l) {
        if (void 0 !== a && !e.isFunction(a)) {
          if (l = e.extend({}, s.defaults, l), "number" == typeof l.expires) {
            var c = l.expires,
              u = l.expires = new Date;
            u.setDate(u.getDate() + c)
          }
          return document.cookie = [t(r), "=", i(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
        }
        for (var p = r ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], f = 0, h = d.length; f < h; f++) {
          var m = d[f].split("="),
            y = n(m.shift()),
            v = m.join("=");
          if (r && r === y) {
            p = o(v, a);
            break
          }
          r || void 0 === (v = o(v)) || (p[y] = v)
        }
        return p
      };
    s.defaults = {}, e.removeCookie = function(t, n) {
      return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, n, {
        expires: -1
      })), !0)
    }
  }),
  function(e, t, n, i) {
    function r(e, t) {
      return e[t] === i ? b[t] : e[t]
    }

    function o() {
      var e = t.pageYOffset;
      return e === i ? v.scrollTop : e
    }

    function a(e, t) {
      var n = b["on" + e];
      n && (w(n) ? n.call(t[0]) : (n.addClass && t.addClass(n.addClass), n.removeClass && t.removeClass(n.removeClass))), t.trigger("lazy" + e, [t]), u()
    }

    function s(t) {
      a(t.type, e(this).off(m, s))
    }

    function l(n) {
      if (S.length) {
        n = n || b.forceLoad, C = 1 / 0;
        var i, r, l = o(),
          c = t.innerHeight || v.clientHeight,
          u = t.innerWidth || v.clientWidth;
        for (i = 0, r = S.length; i < r; i++) {
          var p, d = S[i],
            h = d[0],
            y = d[f],
            g = !1,
            x = n;
          if (k(v, h)) {
            if (n || !y.visibleOnly || h.offsetWidth || h.offsetHeight) {
              if (!x) {
                var _ = h.getBoundingClientRect(),
                  T = y.edgeX,
                  P = y.edgeY;
                p = _.top + l - P - c, x = p <= l && _.bottom > -P && _.left <= u + T && _.right > -T
              }
              if (x) {
                a("show", d);
                var j = y.srcAttr,
                  $ = w(j) ? j(d) : h.getAttribute(j);
                $ && (d.on(m, s), h.src = $), g = !0
              } else p < C && (C = p)
            }
          } else g = !0;
          g && (S.splice(i--, 1), r--)
        }
        r || a("complete", e(v))
      }
    }

    function c() {
      j > 1 ? (j = 1, l(), setTimeout(c, b.throttle)) : j = 0
    }

    function u(e) {
      S.length && (e && "scroll" === e.type && e.currentTarget === t && C >= o() || (j || setTimeout(c, 0), j = 2))
    }

    function p() {
      _.lazyLoadXT()
    }

    function d() {
      l(!0)
    }
    var f = "lazyLoadXT",
      h = "lazied",
      m = "load error",
      y = "lazy-hidden",
      v = n.documentElement || n.body,
      g = t.onscroll === i || !!t.operamini || !v.getBoundingClientRect,
      b = {
        autoInit: !0,
        selector: "img[data-src]",
        blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        throttle: 99,
        forceLoad: g,
        loadEvent: "pageshow",
        updateEvent: "load orientationchange resize scroll touchmove focus",
        forceEvent: "",
        oninit: {
          removeClass: "lazy"
        },
        onshow: {
          addClass: y
        },
        onload: {
          removeClass: y,
          addClass: "lazy-loaded"
        },
        onerror: {
          removeClass: y
        },
        checkDuplicates: !0
      },
      x = {
        srcAttr: "data-src",
        edgeX: 0,
        edgeY: 0,
        visibleOnly: !0
      },
      _ = e(t),
      w = e.isFunction,
      T = e.extend,
      P = e.data || function(t, n) {
        return e(t).data(n)
      },
      k = e.contains || function(e, t) {
        for (; t = t.parentNode;)
          if (t === e) return !0;
        return !1
      },
      S = [],
      C = 0,
      j = 0;
    e[f] = T(b, x, e[f]), e.fn[f] = function(n) {
      n = n || {};
      var i, o = r(n, "blankImage"),
        s = r(n, "checkDuplicates"),
        l = r(n, "scrollContainer"),
        c = {};
      e(l).on("scroll", u);
      for (i in x) c[i] = r(n, i);
      return this.each(function(i, r) {
        if (r === t) e(b.selector).lazyLoadXT(n);
        else {
          if (s && P(r, h)) return;
          var l = e(r).data(h, 1);
          o && "IMG" === r.tagName && !r.src && (r.src = o), l[f] = T({}, c), a("init", l), S.push(l)
        }
      })
    }, e(n).ready(function() {
      a("start", _), _.on(b.loadEvent, p).on(b.updateEvent, u).on(b.forceEvent, d), e(n).on(b.updateEvent, u), b.autoInit && p()
    })
  }(window.jQuery || window.Zepto || window.$, window, document),
  function(e) {
    var t = function(e) {
        return e.split("").reverse().join("")
      },
      n = {
        numberStep: function(t, n) {
          var i = Math.floor(t),
            r = e(n.elem);
          r.text(i)
        }
      },
      i = function(e) {
        var t = e.elem;
        if (t.nodeType && t.parentNode) {
          var i = t._animateNumberSetter;
          i || (i = n.numberStep), i(e.now, e)
        }
      };
    e.Tween && e.Tween.propHooks ? e.Tween.propHooks.number = {
      set: i
    } : e.fx.step.number = i;
    var r = function(e, t) {
        for (var n, i, r, o = e.split("").reverse(), a = [], s = 0, l = Math.ceil(e.length / t); s < l; s++) {
          for (n = "", r = 0; r < t && (i = s * t + r, i !== e.length); r++) n += o[i];
          a.push(n)
        }
        return a
      },
      o = function(e) {
        var n = e.length - 1,
          i = t(e[n]);
        return e[n] = t(parseInt(i, 10).toString()), e
      };
    e.animateNumber = {
      numberStepFactories: {
        append: function(t) {
          return function(n, i) {
            var r = Math.floor(n),
              o = e(i.elem);
            o.prop("number", n).text(r + t)
          }
        },
        separator: function(n, i, a) {
          return n = n || " ", i = i || 3, a = a || "",
            function(s, l) {
              var c = Math.floor(s),
                u = c.toString(),
                p = e(l.elem);
              if (u.length > i) {
                var d = r(u, i);
                u = o(d).join(n), u = t(u)
              }
              p.prop("number", s).text(u + a)
            }
        }
      }
    }, e.fn.animateNumber = function() {
      for (var t = arguments[0], i = e.extend({}, n, t), r = e(this), o = [i], a = 1, s = arguments.length; a < s; a++) o.push(arguments[a]);
      if (t.numberStep) {
        var l = this.each(function() {
            this._animateNumberSetter = t.numberStep
          }),
          c = i.complete;
        i.complete = function() {
          l.each(function() {
            delete this._animateNumberSetter
          }), c && c.apply(this, arguments)
        }
      }
      return r.animate.apply(r, o)
    }
  }(jQuery),
  function() {
    function e(e, t, n) {
      for (var i = (n || 0) - 1, r = e ? e.length : 0; ++i < r;)
        if (e[i] === t) return i;
      return -1
    }

    function t(t, n) {
      var i = typeof n;
      if (t = t.cache, "boolean" == i || null == n) return t[n] ? 0 : -1;
      "number" != i && "string" != i && (i = "object");
      var r = "number" == i ? n : v + n;
      return t = (t = t[i]) && t[r], "object" == i ? t && e(t, n) > -1 ? 0 : -1 : t ? 0 : -1
    }

    function n(e) {
      var t = this.cache,
        n = typeof e;
      if ("boolean" == n || null == e) t[e] = !0;
      else {
        "number" != n && "string" != n && (n = "object");
        var i = "number" == n ? e : v + e,
          r = t[n] || (t[n] = {});
        "object" == n ? (r[i] || (r[i] = [])).push(e) : r[i] = !0
      }
    }

    function i(e) {
      return e.charCodeAt(0)
    }

    function r(e, t) {
      for (var n = e.criteria, i = t.criteria, r = -1, o = n.length; ++r < o;) {
        var a = n[r],
          s = i[r];
        if (a !== s) {
          if (a > s || "undefined" == typeof a) return 1;
          if (a < s || "undefined" == typeof s) return -1
        }
      }
      return e.index - t.index
    }

    function o(e) {
      var t = -1,
        i = e.length,
        r = e[0],
        o = e[i / 2 | 0],
        a = e[i - 1];
      if (r && "object" == typeof r && o && "object" == typeof o && a && "object" == typeof a) return !1;
      var s = l();
      s["false"] = s["null"] = s["true"] = s.undefined = !1;
      var c = l();
      for (c.array = e, c.cache = s, c.push = n; ++t < i;) c.push(e[t]);
      return c
    }

    function a(e) {
      return "\\" + V[e]
    }

    function s() {
      return h.pop() || []
    }

    function l() {
      return m.pop() || {
        array: null,
        cache: null,
        criteria: null,
        "false": !1,
        index: 0,
        "null": !1,
        number: null,
        object: null,
        push: null,
        string: null,
        "true": !1,
        undefined: !1,
        value: null
      }
    }

    function c(e) {
      e.length = 0, h.length < b && h.push(e)
    }

    function u(e) {
      var t = e.cache;
      t && u(t), e.array = e.cache = e.criteria = e.object = e.number = e.string = e.value = null, m.length < b && m.push(e)
    }

    function p(e, t, n) {
      t || (t = 0), "undefined" == typeof n && (n = e ? e.length : 0);
      for (var i = -1, r = n - t || 0, o = Array(r < 0 ? 0 : r); ++i < r;) o[i] = e[t + i];
      return o
    }

    function d(n) {
      function h(e) {
        return e && "object" == typeof e && !Kn(e) && Dn.call(e, "__wrapped__") ? e : new m(e)
      }

      function m(e, t) {
        this.__chain__ = !!t, this.__wrapped__ = e
      }

      function b(e) {
        function t() {
          if (i) {
            var e = p(i);
            In.apply(e, arguments)
          }
          if (this instanceof t) {
            var o = U(n.prototype),
              a = n.apply(o, e || arguments);
            return Ye(a) ? a : o
          }
          return n.apply(r, e || arguments)
        }
        var n = e[0],
          i = e[2],
          r = e[4];
        return Zn(t, e), t
      }

      function V(e, t, n, i, r) {
        if (n) {
          var o = n(e);
          if ("undefined" != typeof o) return o
        }
        var a = Ye(e);
        if (!a) return e;
        var l = Cn.call(e);
        if (!R[l]) return e;
        var u = Un[l];
        switch (l) {
          case Q:
          case F:
            return new u((+e));
          case O:
          case z:
            return new u(e);
          case B:
            return o = u(e.source, k.exec(e)), o.lastIndex = e.lastIndex, o
        }
        var d = Kn(e);
        if (t) {
          var f = !i;
          i || (i = s()), r || (r = s());
          for (var h = i.length; h--;)
            if (i[h] == e) return r[h];
          o = d ? u(e.length) : {}
        } else o = d ? p(e) : oi({}, e);
        return d && (Dn.call(e, "index") && (o.index = e.index), Dn.call(e, "input") && (o.input = e.input)), t ? (i.push(e), r.push(o), (d ? Ge : li)(e, function(e, a) {
          o[a] = V(e, t, n, i, r)
        }), f && (c(i), c(r)), o) : o
      }

      function U(e, t) {
        return Ye(e) ? Nn(e) : {}
      }

      function G(e, t, n) {
        if ("function" != typeof e) return Zt;
        if ("undefined" == typeof t || !("prototype" in e)) return e;
        var i = e.__bindData__;
        if ("undefined" == typeof i && (Gn.funcNames && (i = !e.name), i = i || !Gn.funcDecomp, !i)) {
          var r = An.call(e);
          Gn.funcNames || (i = !S.test(r)), i || (i = Y.test(r), Zn(e, i))
        }
        if (i === !1 || i !== !0 && 1 & i[1]) return e;
        switch (n) {
          case 1:
            return function(n) {
              return e.call(t, n)
            };
          case 2:
            return function(n, i) {
              return e.call(t, n, i)
            };
          case 3:
            return function(n, i, r) {
              return e.call(t, n, i, r)
            };
          case 4:
            return function(n, i, r, o) {
              return e.call(t, n, i, r, o)
            }
        }
        return Dt(e, t)
      }

      function Z(e) {
        function t() {
          var e = l ? a : this;
          if (r) {
            var h = p(r);
            In.apply(h, arguments)
          }
          if ((o || u) && (h || (h = p(arguments)), o && In.apply(h, o), u && h.length < s)) return i |= 16, Z([n, d ? i : i & -4, h, null, a, s]);
          if (h || (h = arguments), c && (n = e[f]), this instanceof t) {
            e = U(n.prototype);
            var m = n.apply(e, h);
            return Ye(m) ? m : e
          }
          return n.apply(e, h)
        }
        var n = e[0],
          i = e[1],
          r = e[2],
          o = e[3],
          a = e[4],
          s = e[5],
          l = 1 & i,
          c = 2 & i,
          u = 4 & i,
          d = 8 & i,
          f = n;
        return Zn(t, e), t
      }

      function K(n, i) {
        var r = -1,
          a = le(),
          s = n ? n.length : 0,
          l = s >= g && a === e,
          c = [];
        if (l) {
          var p = o(i);
          p ? (a = t, i = p) : l = !1
        }
        for (; ++r < s;) {
          var d = n[r];
          a(i, d) < 0 && c.push(d)
        }
        return l && u(i), c
      }

      function ee(e, t, n, i) {
        for (var r = (i || 0) - 1, o = e ? e.length : 0, a = []; ++r < o;) {
          var s = e[r];
          if (s && "object" == typeof s && "number" == typeof s.length && (Kn(s) || de(s))) {
            t || (s = ee(s, t, n));
            var l = -1,
              c = s.length,
              u = a.length;
            for (a.length += c; ++l < c;) a[u++] = s[l]
          } else n || a.push(s)
        }
        return a
      }

      function te(e, t, n, i, r, o) {
        if (n) {
          var a = n(e, t);
          if ("undefined" != typeof a) return !!a
        }
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        var l = typeof e,
          u = typeof t;
        if (!(e !== e || e && W[l] || t && W[u])) return !1;
        if (null == e || null == t) return e === t;
        var p = Cn.call(e),
          d = Cn.call(t);
        if (p == D && (p = N), d == D && (d = N), p != d) return !1;
        switch (p) {
          case Q:
          case F:
            return +e == +t;
          case O:
            return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
          case B:
          case z:
            return e == wn(t)
        }
        var f = p == I;
        if (!f) {
          var h = Dn.call(e, "__wrapped__"),
            m = Dn.call(t, "__wrapped__");
          if (h || m) return te(h ? e.__wrapped__ : e, m ? t.__wrapped__ : t, n, i, r, o);
          if (p != N) return !1;
          var y = e.constructor,
            v = t.constructor;
          if (y != v && !($e(y) && y instanceof y && $e(v) && v instanceof v) && "constructor" in e && "constructor" in t) return !1
        }
        var g = !r;
        r || (r = s()), o || (o = s());
        for (var b = r.length; b--;)
          if (r[b] == e) return o[b] == t;
        var x = 0;
        if (a = !0, r.push(e), o.push(t), f) {
          if (b = e.length, x = t.length, a = x == b, a || i)
            for (; x--;) {
              var _ = b,
                w = t[x];
              if (i)
                for (; _-- && !(a = te(e[_], w, n, i, r, o)););
              else if (!(a = te(e[x], w, n, i, r, o))) break
            }
        } else si(t, function(t, s, l) {
          if (Dn.call(l, s)) return x++, a = Dn.call(e, s) && te(e[s], t, n, i, r, o)
        }), a && !i && si(e, function(e, t, n) {
          if (Dn.call(n, t)) return a = --x > -1
        });
        return r.pop(), o.pop(), g && (c(r), c(o)), a
      }

      function ne(e, t, n, i, r) {
        (Kn(t) ? Ge : li)(t, function(t, o) {
          var a, s, l = t,
            c = e[o];
          if (t && ((s = Kn(t)) || ci(t))) {
            for (var u = i.length; u--;)
              if (a = i[u] == t) {
                c = r[u];
                break
              } if (!a) {
              var p;
              n && (l = n(c, t), (p = "undefined" != typeof l) && (c = l)), p || (c = s ? Kn(c) ? c : [] : ci(c) ? c : {}), i.push(t), r.push(c), p || ne(c, t, n, i, r)
            }
          } else n && (l = n(c, t), "undefined" == typeof l && (l = t)), "undefined" != typeof l && (c = l);
          e[o] = c
        })
      }

      function ie(e, t) {
        return e + En(Xn() * (t - e + 1))
      }

      function re(n, i, r) {
        var a = -1,
          l = le(),
          p = n ? n.length : 0,
          d = [],
          f = !i && p >= g && l === e,
          h = r || f ? s() : d;
        if (f) {
          var m = o(h);
          l = t, h = m
        }
        for (; ++a < p;) {
          var y = n[a],
            v = r ? r(y, a, n) : y;
          (i ? !a || h[h.length - 1] !== v : l(h, v) < 0) && ((r || f) && h.push(v), d.push(y))
        }
        return f ? (c(h.array), u(h)) : r && c(h), d
      }

      function oe(e) {
        return function(t, n, i) {
          var r = {};
          n = h.createCallback(n, i, 3);
          var o = -1,
            a = t ? t.length : 0;
          if ("number" == typeof a)
            for (; ++o < a;) {
              var s = t[o];
              e(r, s, n(s, o, t), t)
            } else li(t, function(t, i, o) {
              e(r, t, n(t, i, o), o)
            });
          return r
        }
      }

      function ae(e, t, n, i, r, o) {
        var a = 1 & t,
          s = 2 & t,
          l = 4 & t,
          c = 16 & t,
          u = 32 & t;
        if (!s && !$e(e)) throw new Tn;
        c && !n.length && (t &= -17, c = n = !1), u && !i.length && (t &= -33, u = i = !1);
        var d = e && e.__bindData__;
        if (d && d !== !0) return d = p(d), d[2] && (d[2] = p(d[2])), d[3] && (d[3] = p(d[3])), !a || 1 & d[1] || (d[4] = r), !a && 1 & d[1] && (t |= 8), !l || 4 & d[1] || (d[5] = o), c && In.apply(d[2] || (d[2] = []), n), u && Ln.apply(d[3] || (d[3] = []), i), d[1] |= t, ae.apply(null, d);
        var f = 1 == t || 17 === t ? b : Z;
        return f([e, t, n, i, r, o])
      }

      function se(e) {
        return ti[e]
      }

      function le() {
        var t = (t = h.indexOf) === vt ? e : t;
        return t
      }

      function ce(e) {
        return "function" == typeof e && jn.test(e)
      }

      function ue(e) {
        var t, n;
        return !!(e && Cn.call(e) == N && (t = e.constructor, !$e(t) || t instanceof t)) && (si(e, function(e, t) {
          n = t
        }), "undefined" == typeof n || Dn.call(e, n))
      }

      function pe(e) {
        return ni[e]
      }

      function de(e) {
        return e && "object" == typeof e && "number" == typeof e.length && Cn.call(e) == D || !1
      }

      function fe(e, t, n, i) {
        return "boolean" != typeof t && null != t && (i = n, n = t, t = !1), V(e, t, "function" == typeof n && G(n, i, 1))
      }

      function he(e, t, n) {
        return V(e, !0, "function" == typeof t && G(t, n, 1))
      }

      function me(e, t) {
        var n = U(e);
        return t ? oi(n, t) : n
      }

      function ye(e, t, n) {
        var i;
        return t = h.createCallback(t, n, 3), li(e, function(e, n, r) {
          if (t(e, n, r)) return i = n, !1
        }), i
      }

      function ve(e, t, n) {
        var i;
        return t = h.createCallback(t, n, 3), be(e, function(e, n, r) {
          if (t(e, n, r)) return i = n, !1
        }), i
      }

      function ge(e, t, n) {
        var i = [];
        si(e, function(e, t) {
          i.push(t, e)
        });
        var r = i.length;
        for (t = G(t, n, 3); r-- && t(i[r--], i[r], e) !== !1;);
        return e
      }

      function be(e, t, n) {
        var i = ei(e),
          r = i.length;
        for (t = G(t, n, 3); r--;) {
          var o = i[r];
          if (t(e[o], o, e) === !1) break
        }
        return e
      }

      function xe(e) {
        var t = [];
        return si(e, function(e, n) {
          $e(e) && t.push(n)
        }), t.sort()
      }

      function _e(e, t) {
        return !!e && Dn.call(e, t)
      }

      function we(e) {
        for (var t = -1, n = ei(e), i = n.length, r = {}; ++t < i;) {
          var o = n[t];
          r[e[o]] = o
        }
        return r
      }

      function Te(e) {
        return e === !0 || e === !1 || e && "object" == typeof e && Cn.call(e) == Q || !1
      }

      function Pe(e) {
        return e && "object" == typeof e && Cn.call(e) == F || !1;
      }

      function ke(e) {
        return e && 1 === e.nodeType || !1
      }

      function Se(e) {
        var t = !0;
        if (!e) return t;
        var n = Cn.call(e),
          i = e.length;
        return n == I || n == z || n == D || n == N && "number" == typeof i && $e(e.splice) ? !i : (li(e, function() {
          return t = !1
        }), t)
      }

      function Ce(e, t, n, i) {
        return te(e, t, "function" == typeof n && G(n, i, 2))
      }

      function je(e) {
        return zn(e) && !Rn(parseFloat(e))
      }

      function $e(e) {
        return "function" == typeof e
      }

      function Ye(e) {
        return !(!e || !W[typeof e])
      }

      function Ee(e) {
        return Me(e) && e != +e
      }

      function Ae(e) {
        return null === e
      }

      function Me(e) {
        return "number" == typeof e || e && "object" == typeof e && Cn.call(e) == O || !1
      }

      function De(e) {
        return e && "object" == typeof e && Cn.call(e) == B || !1
      }

      function Ie(e) {
        return "string" == typeof e || e && "object" == typeof e && Cn.call(e) == z || !1
      }

      function Qe(e) {
        return "undefined" == typeof e
      }

      function Fe(e, t, n) {
        var i = {};
        return t = h.createCallback(t, n, 3), li(e, function(e, n, r) {
          i[n] = t(e, n, r)
        }), i
      }

      function Le(e) {
        var t = arguments,
          n = 2;
        if (!Ye(e)) return e;
        if ("number" != typeof t[2] && (n = t.length), n > 3 && "function" == typeof t[n - 2]) var i = G(t[--n - 1], t[n--], 2);
        else n > 2 && "function" == typeof t[n - 1] && (i = t[--n]);
        for (var r = p(arguments, 1, n), o = -1, a = s(), l = s(); ++o < n;) ne(e, r[o], i, a, l);
        return c(a), c(l), e
      }

      function Oe(e, t, n) {
        var i = {};
        if ("function" != typeof t) {
          var r = [];
          si(e, function(e, t) {
            r.push(t)
          }), r = K(r, ee(arguments, !0, !1, 1));
          for (var o = -1, a = r.length; ++o < a;) {
            var s = r[o];
            i[s] = e[s]
          }
        } else t = h.createCallback(t, n, 3), si(e, function(e, n, r) {
          t(e, n, r) || (i[n] = e)
        });
        return i
      }

      function Ne(e) {
        for (var t = -1, n = ei(e), i = n.length, r = hn(i); ++t < i;) {
          var o = n[t];
          r[t] = [o, e[o]]
        }
        return r
      }

      function Be(e, t, n) {
        var i = {};
        if ("function" != typeof t)
          for (var r = -1, o = ee(arguments, !0, !1, 1), a = Ye(e) ? o.length : 0; ++r < a;) {
            var s = o[r];
            s in e && (i[s] = e[s])
          } else t = h.createCallback(t, n, 3), si(e, function(e, n, r) {
            t(e, n, r) && (i[n] = e)
          });
        return i
      }

      function ze(e, t, n, i) {
        var r = Kn(e);
        if (null == n)
          if (r) n = [];
          else {
            var o = e && e.constructor,
              a = o && o.prototype;
            n = U(a)
          } return t && (t = h.createCallback(t, i, 4), (r ? Ge : li)(e, function(e, i, r) {
          return t(n, e, i, r)
        })), n
      }

      function Re(e) {
        for (var t = -1, n = ei(e), i = n.length, r = hn(i); ++t < i;) r[t] = e[n[t]];
        return r
      }

      function He(e) {
        for (var t = arguments, n = -1, i = ee(t, !0, !1, 1), r = t[2] && t[2][t[1]] === e ? 1 : i.length, o = hn(r); ++n < r;) o[n] = e[i[n]];
        return o
      }

      function qe(e, t, n) {
        var i = -1,
          r = le(),
          o = e ? e.length : 0,
          a = !1;
        return n = (n < 0 ? qn(0, o + n) : n) || 0, Kn(e) ? a = r(e, t, n) > -1 : "number" == typeof o ? a = (Ie(e) ? e.indexOf(t, n) : r(e, t, n)) > -1 : li(e, function(e) {
          if (++i >= n) return !(a = e === t)
        }), a
      }

      function We(e, t, n) {
        var i = !0;
        t = h.createCallback(t, n, 3);
        var r = -1,
          o = e ? e.length : 0;
        if ("number" == typeof o)
          for (; ++r < o && (i = !!t(e[r], r, e)););
        else li(e, function(e, n, r) {
          return i = !!t(e, n, r)
        });
        return i
      }

      function Ve(e, t, n) {
        var i = [];
        t = h.createCallback(t, n, 3);
        var r = -1,
          o = e ? e.length : 0;
        if ("number" == typeof o)
          for (; ++r < o;) {
            var a = e[r];
            t(a, r, e) && i.push(a)
          } else li(e, function(e, n, r) {
            t(e, n, r) && i.push(e)
          });
        return i
      }

      function Xe(e, t, n) {
        t = h.createCallback(t, n, 3);
        var i = -1,
          r = e ? e.length : 0;
        if ("number" != typeof r) {
          var o;
          return li(e, function(e, n, i) {
            if (t(e, n, i)) return o = e, !1
          }), o
        }
        for (; ++i < r;) {
          var a = e[i];
          if (t(a, i, e)) return a
        }
      }

      function Ue(e, t, n) {
        var i;
        return t = h.createCallback(t, n, 3), Ze(e, function(e, n, r) {
          if (t(e, n, r)) return i = e, !1
        }), i
      }

      function Ge(e, t, n) {
        var i = -1,
          r = e ? e.length : 0;
        if (t = t && "undefined" == typeof n ? t : G(t, n, 3), "number" == typeof r)
          for (; ++i < r && t(e[i], i, e) !== !1;);
        else li(e, t);
        return e
      }

      function Ze(e, t, n) {
        var i = e ? e.length : 0;
        if (t = t && "undefined" == typeof n ? t : G(t, n, 3), "number" == typeof i)
          for (; i-- && t(e[i], i, e) !== !1;);
        else {
          var r = ei(e);
          i = r.length, li(e, function(e, n, o) {
            return n = r ? r[--i] : --i, t(o[n], n, o)
          })
        }
        return e
      }

      function Ke(e, t) {
        var n = p(arguments, 2),
          i = -1,
          r = "function" == typeof t,
          o = e ? e.length : 0,
          a = hn("number" == typeof o ? o : 0);
        return Ge(e, function(e) {
          a[++i] = (r ? t : e[t]).apply(e, n)
        }), a
      }

      function Je(e, t, n) {
        var i = -1,
          r = e ? e.length : 0;
        if (t = h.createCallback(t, n, 3), "number" == typeof r)
          for (var o = hn(r); ++i < r;) o[i] = t(e[i], i, e);
        else o = [], li(e, function(e, n, r) {
          o[++i] = t(e, n, r)
        });
        return o
      }

      function et(e, t, n) {
        var r = -(1 / 0),
          o = r;
        if ("function" != typeof t && n && n[t] === e && (t = null), null == t && Kn(e))
          for (var a = -1, s = e.length; ++a < s;) {
            var l = e[a];
            l > o && (o = l)
          } else t = null == t && Ie(e) ? i : h.createCallback(t, n, 3), Ge(e, function(e, n, i) {
            var a = t(e, n, i);
            a > r && (r = a, o = e)
          });
        return o
      }

      function tt(e, t, n) {
        var r = 1 / 0,
          o = r;
        if ("function" != typeof t && n && n[t] === e && (t = null), null == t && Kn(e))
          for (var a = -1, s = e.length; ++a < s;) {
            var l = e[a];
            l < o && (o = l)
          } else t = null == t && Ie(e) ? i : h.createCallback(t, n, 3), Ge(e, function(e, n, i) {
            var a = t(e, n, i);
            a < r && (r = a, o = e)
          });
        return o
      }

      function nt(e, t, n, i) {
        if (!e) return n;
        var r = arguments.length < 3;
        t = h.createCallback(t, i, 4);
        var o = -1,
          a = e.length;
        if ("number" == typeof a)
          for (r && (n = e[++o]); ++o < a;) n = t(n, e[o], o, e);
        else li(e, function(e, i, o) {
          n = r ? (r = !1, e) : t(n, e, i, o)
        });
        return n
      }

      function it(e, t, n, i) {
        var r = arguments.length < 3;
        return t = h.createCallback(t, i, 4), Ze(e, function(e, i, o) {
          n = r ? (r = !1, e) : t(n, e, i, o)
        }), n
      }

      function rt(e, t, n) {
        return t = h.createCallback(t, n, 3), Ve(e, function(e, n, i) {
          return !t(e, n, i)
        })
      }

      function ot(e, t, n) {
        if (e && "number" != typeof e.length && (e = Re(e)), null == t || n) return e ? e[ie(0, e.length - 1)] : f;
        var i = at(e);
        return i.length = Wn(qn(0, t), i.length), i
      }

      function at(e) {
        var t = -1,
          n = e ? e.length : 0,
          i = hn("number" == typeof n ? n : 0);
        return Ge(e, function(e) {
          var n = ie(0, ++t);
          i[t] = i[n], i[n] = e
        }), i
      }

      function st(e) {
        var t = e ? e.length : 0;
        return "number" == typeof t ? t : ei(e).length
      }

      function lt(e, t, n) {
        var i;
        t = h.createCallback(t, n, 3);
        var r = -1,
          o = e ? e.length : 0;
        if ("number" == typeof o)
          for (; ++r < o && !(i = t(e[r], r, e)););
        else li(e, function(e, n, r) {
          return !(i = t(e, n, r))
        });
        return !!i
      }

      function ct(e, t, n) {
        var i = -1,
          o = Kn(t),
          a = e ? e.length : 0,
          p = hn("number" == typeof a ? a : 0);
        for (o || (t = h.createCallback(t, n, 3)), Ge(e, function(e, n, r) {
            var a = p[++i] = l();
            o ? a.criteria = Je(t, function(t) {
              return e[t]
            }) : (a.criteria = s())[0] = t(e, n, r), a.index = i, a.value = e
          }), a = p.length, p.sort(r); a--;) {
          var d = p[a];
          p[a] = d.value, o || c(d.criteria), u(d)
        }
        return p
      }

      function ut(e) {
        return e && "number" == typeof e.length ? p(e) : Re(e)
      }

      function pt(e) {
        for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
          var r = e[t];
          r && i.push(r)
        }
        return i
      }

      function dt(e) {
        return K(e, ee(arguments, !0, !0, 1))
      }

      function ft(e, t, n) {
        var i = -1,
          r = e ? e.length : 0;
        for (t = h.createCallback(t, n, 3); ++i < r;)
          if (t(e[i], i, e)) return i;
        return -1
      }

      function ht(e, t, n) {
        var i = e ? e.length : 0;
        for (t = h.createCallback(t, n, 3); i--;)
          if (t(e[i], i, e)) return i;
        return -1
      }

      function mt(e, t, n) {
        var i = 0,
          r = e ? e.length : 0;
        if ("number" != typeof t && null != t) {
          var o = -1;
          for (t = h.createCallback(t, n, 3); ++o < r && t(e[o], o, e);) i++
        } else if (i = t, null == i || n) return e ? e[0] : f;
        return p(e, 0, Wn(qn(0, i), r))
      }

      function yt(e, t, n, i) {
        return "boolean" != typeof t && null != t && (i = n, n = "function" != typeof t && i && i[t] === e ? null : t, t = !1), null != n && (e = Je(e, n, i)), ee(e, t)
      }

      function vt(t, n, i) {
        if ("number" == typeof i) {
          var r = t ? t.length : 0;
          i = i < 0 ? qn(0, r + i) : i || 0
        } else if (i) {
          var o = St(t, n);
          return t[o] === n ? o : -1
        }
        return e(t, n, i)
      }

      function gt(e, t, n) {
        var i = 0,
          r = e ? e.length : 0;
        if ("number" != typeof t && null != t) {
          var o = r;
          for (t = h.createCallback(t, n, 3); o-- && t(e[o], o, e);) i++
        } else i = null == t || n ? 1 : t || i;
        return p(e, 0, Wn(qn(0, r - i), r))
      }

      function bt() {
        for (var n = [], i = -1, r = arguments.length, a = s(), l = le(), p = l === e, d = s(); ++i < r;) {
          var f = arguments[i];
          (Kn(f) || de(f)) && (n.push(f), a.push(p && f.length >= g && o(i ? n[i] : d)))
        }
        var h = n[0],
          m = -1,
          y = h ? h.length : 0,
          v = [];
        e: for (; ++m < y;) {
          var b = a[0];
          if (f = h[m], (b ? t(b, f) : l(d, f)) < 0) {
            for (i = r, (b || d).push(f); --i;)
              if (b = a[i], (b ? t(b, f) : l(n[i], f)) < 0) continue e;
            v.push(f)
          }
        }
        for (; r--;) b = a[r], b && u(b);
        return c(a), c(d), v
      }

      function xt(e, t, n) {
        var i = 0,
          r = e ? e.length : 0;
        if ("number" != typeof t && null != t) {
          var o = r;
          for (t = h.createCallback(t, n, 3); o-- && t(e[o], o, e);) i++
        } else if (i = t, null == i || n) return e ? e[r - 1] : f;
        return p(e, qn(0, r - i))
      }

      function _t(e, t, n) {
        var i = e ? e.length : 0;
        for ("number" == typeof n && (i = (n < 0 ? qn(0, i + n) : Wn(n, i - 1)) + 1); i--;)
          if (e[i] === t) return i;
        return -1
      }

      function wt(e) {
        for (var t = arguments, n = 0, i = t.length, r = e ? e.length : 0; ++n < i;)
          for (var o = -1, a = t[n]; ++o < r;) e[o] === a && (Fn.call(e, o--, 1), r--);
        return e
      }

      function Tt(e, t, n) {
        e = +e || 0, n = "number" == typeof n ? n : +n || 1, null == t && (t = e, e = 0);
        for (var i = -1, r = qn(0, $n((t - e) / (n || 1))), o = hn(r); ++i < r;) o[i] = e, e += n;
        return o
      }

      function Pt(e, t, n) {
        var i = -1,
          r = e ? e.length : 0,
          o = [];
        for (t = h.createCallback(t, n, 3); ++i < r;) {
          var a = e[i];
          t(a, i, e) && (o.push(a), Fn.call(e, i--, 1), r--)
        }
        return o
      }

      function kt(e, t, n) {
        if ("number" != typeof t && null != t) {
          var i = 0,
            r = -1,
            o = e ? e.length : 0;
          for (t = h.createCallback(t, n, 3); ++r < o && t(e[r], r, e);) i++
        } else i = null == t || n ? 1 : qn(0, t);
        return p(e, i)
      }

      function St(e, t, n, i) {
        var r = 0,
          o = e ? e.length : r;
        for (n = n ? h.createCallback(n, i, 1) : Zt, t = n(t); r < o;) {
          var a = r + o >>> 1;
          n(e[a]) < t ? r = a + 1 : o = a
        }
        return r
      }

      function Ct() {
        return re(ee(arguments, !0, !0))
      }

      function jt(e, t, n, i) {
        return "boolean" != typeof t && null != t && (i = n, n = "function" != typeof t && i && i[t] === e ? null : t, t = !1), null != n && (n = h.createCallback(n, i, 3)), re(e, t, n)
      }

      function $t(e) {
        return K(e, p(arguments, 1))
      }

      function Yt() {
        for (var e = -1, t = arguments.length; ++e < t;) {
          var n = arguments[e];
          if (Kn(n) || de(n)) var i = i ? re(K(i, n).concat(K(n, i))) : n
        }
        return i || []
      }

      function Et() {
        for (var e = arguments.length > 1 ? arguments : arguments[0], t = -1, n = e ? et(fi(e, "length")) : 0, i = hn(n < 0 ? 0 : n); ++t < n;) i[t] = fi(e, t);
        return i
      }

      function At(e, t) {
        var n = -1,
          i = e ? e.length : 0,
          r = {};
        for (t || !i || Kn(e[0]) || (t = []); ++n < i;) {
          var o = e[n];
          t ? r[o] = t[n] : o && (r[o[0]] = o[1])
        }
        return r
      }

      function Mt(e, t) {
        if (!$e(t)) throw new Tn;
        return function() {
          if (--e < 1) return t.apply(this, arguments)
        }
      }

      function Dt(e, t) {
        return arguments.length > 2 ? ae(e, 17, p(arguments, 2), null, t) : ae(e, 1, null, null, t)
      }

      function It(e) {
        for (var t = arguments.length > 1 ? ee(arguments, !0, !1, 1) : xe(e), n = -1, i = t.length; ++n < i;) {
          var r = t[n];
          e[r] = ae(e[r], 1, null, null, e)
        }
        return e
      }

      function Qt(e, t) {
        return arguments.length > 2 ? ae(t, 19, p(arguments, 2), null, e) : ae(t, 3, null, null, e)
      }

      function Ft() {
        for (var e = arguments, t = e.length; t--;)
          if (!$e(e[t])) throw new Tn;
        return function() {
          for (var t = arguments, n = e.length; n--;) t = [e[n].apply(this, t)];
          return t[0]
        }
      }

      function Lt(e, t) {
        return t = "number" == typeof t ? t : +t || e.length, ae(e, 4, null, null, null, t)
      }

      function Ot(e, t, n) {
        var i, r, o, a, s, l, c, u = 0,
          p = !1,
          d = !0;
        if (!$e(e)) throw new Tn;
        if (t = qn(0, t) || 0, n === !0) {
          var h = !0;
          d = !1
        } else Ye(n) && (h = n.leading, p = "maxWait" in n && (qn(t, n.maxWait) || 0), d = "trailing" in n ? n.trailing : d);
        var m = function() {
            var n = t - (mi() - a);
            if (n <= 0) {
              r && Yn(r);
              var p = c;
              r = l = c = f, p && (u = mi(), o = e.apply(s, i), l || r || (i = s = null))
            } else l = Qn(m, n)
          },
          y = function() {
            l && Yn(l), r = l = c = f, (d || p !== t) && (u = mi(), o = e.apply(s, i), l || r || (i = s = null))
          };
        return function() {
          if (i = arguments, a = mi(), s = this, c = d && (l || !h), p === !1) var n = h && !l;
          else {
            r || h || (u = a);
            var f = p - (a - u),
              v = f <= 0;
            v ? (r && (r = Yn(r)), u = a, o = e.apply(s, i)) : r || (r = Qn(y, f))
          }
          return v && l ? l = Yn(l) : l || t === p || (l = Qn(m, t)), n && (v = !0, o = e.apply(s, i)), !v || l || r || (i = s = null), o
        }
      }

      function Nt(e) {
        if (!$e(e)) throw new Tn;
        var t = p(arguments, 1);
        return Qn(function() {
          e.apply(f, t)
        }, 1)
      }

      function Bt(e, t) {
        if (!$e(e)) throw new Tn;
        var n = p(arguments, 2);
        return Qn(function() {
          e.apply(f, n)
        }, t)
      }

      function zt(e, t) {
        if (!$e(e)) throw new Tn;
        var n = function() {
          var i = n.cache,
            r = t ? t.apply(this, arguments) : v + arguments[0];
          return Dn.call(i, r) ? i[r] : i[r] = e.apply(this, arguments)
        };
        return n.cache = {}, n
      }

      function Rt(e) {
        var t, n;
        if (!$e(e)) throw new Tn;
        return function() {
          return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
        }
      }

      function Ht(e) {
        return ae(e, 16, p(arguments, 1))
      }

      function qt(e) {
        return ae(e, 32, null, p(arguments, 1))
      }

      function Wt(e, t, n) {
        var i = !0,
          r = !0;
        if (!$e(e)) throw new Tn;
        return n === !1 ? i = !1 : Ye(n) && (i = "leading" in n ? n.leading : i, r = "trailing" in n ? n.trailing : r), H.leading = i, H.maxWait = t, H.trailing = r, Ot(e, t, H)
      }

      function Vt(e, t) {
        return ae(t, 16, [e])
      }

      function Xt(e) {
        return function() {
          return e
        }
      }

      function Ut(e, t, n) {
        var i = typeof e;
        if (null == e || "function" == i) return G(e, t, n);
        if ("object" != i) return tn(e);
        var r = ei(e),
          o = r[0],
          a = e[o];
        return 1 != r.length || a !== a || Ye(a) ? function(t) {
          for (var n = r.length, i = !1; n-- && (i = te(t[r[n]], e[r[n]], null, !0)););
          return i
        } : function(e) {
          var t = e[o];
          return a === t && (0 !== a || 1 / a == 1 / t)
        }
      }

      function Gt(e) {
        return null == e ? "" : wn(e).replace(ri, se)
      }

      function Zt(e) {
        return e
      }

      function Kt(e, t, n) {
        var i = !0,
          r = t && xe(t);
        t && (n || r.length) || (null == n && (n = t), o = m, t = e, e = h, r = xe(t)), n === !1 ? i = !1 : Ye(n) && "chain" in n && (i = n.chain);
        var o = e,
          a = $e(o);
        Ge(r, function(n) {
          var r = e[n] = t[n];
          a && (o.prototype[n] = function() {
            var t = this.__chain__,
              n = this.__wrapped__,
              a = [n];
            In.apply(a, arguments);
            var s = r.apply(e, a);
            if (i || t) {
              if (n === s && Ye(s)) return this;
              s = new o(s), s.__chain__ = t
            }
            return s
          })
        })
      }

      function Jt() {
        return n._ = Sn, this
      }

      function en() {}

      function tn(e) {
        return function(t) {
          return t[e]
        }
      }

      function nn(e, t, n) {
        var i = null == e,
          r = null == t;
        if (null == n && ("boolean" == typeof e && r ? (n = e, e = 1) : r || "boolean" != typeof t || (n = t, r = !0)), i && r && (t = 1), e = +e || 0, r ? (t = e, e = 0) : t = +t || 0, n || e % 1 || t % 1) {
          var o = Xn();
          return Wn(e + o * (t - e + parseFloat("1e-" + ((o + "").length - 1))), t)
        }
        return ie(e, t)
      }

      function rn(e, t) {
        if (e) {
          var n = e[t];
          return $e(n) ? e[t]() : n
        }
      }

      function on(e, t, n) {
        var i = h.templateSettings;
        e = wn(e || ""), n = ai({}, n, i);
        var r, o = ai({}, n.imports, i.imports),
          s = ei(o),
          l = Re(o),
          c = 0,
          u = n.interpolate || $,
          p = "__p += '",
          d = _n((n.escape || $).source + "|" + u.source + "|" + (u === C ? P : $).source + "|" + (n.evaluate || $).source + "|$", "g");
        e.replace(d, function(t, n, i, o, s, l) {
          return i || (i = o), p += e.slice(c, l).replace(E, a), n && (p += "' +\n__e(" + n + ") +\n'"), s && (r = !0, p += "';\n" + s + ";\n__p += '"), i && (p += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), c = l + t.length, t
        }), p += "';\n";
        var m = n.variable,
          y = m;
        y || (m = "obj", p = "with (" + m + ") {\n" + p + "\n}\n"), p = (r ? p.replace(_, "") : p).replace(w, "$1").replace(T, "$1;"), p = "function(" + m + ") {\n" + (y ? "" : m + " || (" + m + " = {});\n") + "var __t, __p = '', __e = _.escape" + (r ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
        var v = "\n/*\n//# sourceURL=" + (n.sourceURL || "/lodash/template/source[" + M++ + "]") + "\n*/";
        try {
          var g = vn(s, "return " + p + v).apply(f, l)
        } catch (b) {
          throw b.source = p, b
        }
        return t ? g(t) : (g.source = p, g)
      }

      function an(e, t, n) {
        e = (e = +e) > -1 ? e : 0;
        var i = -1,
          r = hn(e);
        for (t = G(t, n, 1); ++i < e;) r[i] = t(i);
        return r
      }

      function sn(e) {
        return null == e ? "" : wn(e).replace(ii, pe)
      }

      function ln(e) {
        var t = ++y;
        return wn(null == e ? "" : e) + t
      }

      function cn(e) {
        return e = new m(e), e.__chain__ = !0, e
      }

      function un(e, t) {
        return t(e), e
      }

      function pn() {
        return this.__chain__ = !0, this
      }

      function dn() {
        return wn(this.__wrapped__)
      }

      function fn() {
        return this.__wrapped__
      }
      n = n ? J.defaults(X.Object(), n, J.pick(X, A)) : X;
      var hn = n.Array,
        mn = n.Boolean,
        yn = n.Date,
        vn = n.Function,
        gn = n.Math,
        bn = n.Number,
        xn = n.Object,
        _n = n.RegExp,
        wn = n.String,
        Tn = n.TypeError,
        Pn = [],
        kn = xn.prototype,
        Sn = n._,
        Cn = kn.toString,
        jn = _n("^" + wn(Cn).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
        $n = gn.ceil,
        Yn = n.clearTimeout,
        En = gn.floor,
        An = vn.prototype.toString,
        Mn = ce(Mn = xn.getPrototypeOf) && Mn,
        Dn = kn.hasOwnProperty,
        In = Pn.push,
        Qn = n.setTimeout,
        Fn = Pn.splice,
        Ln = Pn.unshift,
        On = function() {
          try {
            var e = {},
              t = ce(t = xn.defineProperty) && t,
              n = t(e, e, e) && t
          } catch (i) {}
          return n
        }(),
        Nn = ce(Nn = xn.create) && Nn,
        Bn = ce(Bn = hn.isArray) && Bn,
        zn = n.isFinite,
        Rn = n.isNaN,
        Hn = ce(Hn = xn.keys) && Hn,
        qn = gn.max,
        Wn = gn.min,
        Vn = n.parseInt,
        Xn = gn.random,
        Un = {};
      Un[I] = hn, Un[Q] = mn, Un[F] = yn, Un[L] = vn, Un[N] = xn, Un[O] = bn, Un[B] = _n, Un[z] = wn, m.prototype = h.prototype;
      var Gn = h.support = {};
      Gn.funcDecomp = !ce(n.WinRTError) && Y.test(d), Gn.funcNames = "string" == typeof vn.name, h.templateSettings = {
        escape: /<%-([\s\S]+?)%>/g,
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: C,
        variable: "",
        imports: {
          _: h
        }
      }, Nn || (U = function() {
        function e() {}
        return function(t) {
          if (Ye(t)) {
            e.prototype = t;
            var i = new e;
            e.prototype = null
          }
          return i || n.Object()
        }
      }());
      var Zn = On ? function(e, t) {
          q.value = t, On(e, "__bindData__", q)
        } : en,
        Kn = Bn || function(e) {
          return e && "object" == typeof e && "number" == typeof e.length && Cn.call(e) == I || !1
        },
        Jn = function(e) {
          var t, n = e,
            i = [];
          if (!n) return i;
          if (!W[typeof e]) return i;
          for (t in n) Dn.call(n, t) && i.push(t);
          return i
        },
        ei = Hn ? function(e) {
          return Ye(e) ? Hn(e) : []
        } : Jn,
        ti = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        },
        ni = we(ti),
        ii = _n("(" + ei(ni).join("|") + ")", "g"),
        ri = _n("[" + ei(ti).join("") + "]", "g"),
        oi = function(e, t, n) {
          var i, r = e,
            o = r;
          if (!r) return o;
          var a = arguments,
            s = 0,
            l = "number" == typeof n ? 2 : a.length;
          if (l > 3 && "function" == typeof a[l - 2]) var c = G(a[--l - 1], a[l--], 2);
          else l > 2 && "function" == typeof a[l - 1] && (c = a[--l]);
          for (; ++s < l;)
            if (r = a[s], r && W[typeof r])
              for (var u = -1, p = W[typeof r] && ei(r), d = p ? p.length : 0; ++u < d;) i = p[u], o[i] = c ? c(o[i], r[i]) : r[i];
          return o
        },
        ai = function(e, t, n) {
          var i, r = e,
            o = r;
          if (!r) return o;
          for (var a = arguments, s = 0, l = "number" == typeof n ? 2 : a.length; ++s < l;)
            if (r = a[s], r && W[typeof r])
              for (var c = -1, u = W[typeof r] && ei(r), p = u ? u.length : 0; ++c < p;) i = u[c], "undefined" == typeof o[i] && (o[i] = r[i]);
          return o
        },
        si = function(e, t, n) {
          var i, r = e,
            o = r;
          if (!r) return o;
          if (!W[typeof r]) return o;
          t = t && "undefined" == typeof n ? t : G(t, n, 3);
          for (i in r)
            if (t(r[i], i, e) === !1) return o;
          return o
        },
        li = function(e, t, n) {
          var i, r = e,
            o = r;
          if (!r) return o;
          if (!W[typeof r]) return o;
          t = t && "undefined" == typeof n ? t : G(t, n, 3);
          for (var a = -1, s = W[typeof r] && ei(r), l = s ? s.length : 0; ++a < l;)
            if (i = s[a], t(r[i], i, e) === !1) return o;
          return o
        },
        ci = Mn ? function(e) {
          if (!e || Cn.call(e) != N) return !1;
          var t = e.valueOf,
            n = ce(t) && (n = Mn(t)) && Mn(n);
          return n ? e == n || Mn(e) == n : ue(e)
        } : ue,
        ui = oe(function(e, t, n) {
          Dn.call(e, n) ? e[n]++ : e[n] = 1
        }),
        pi = oe(function(e, t, n) {
          (Dn.call(e, n) ? e[n] : e[n] = []).push(t)
        }),
        di = oe(function(e, t, n) {
          e[n] = t
        }),
        fi = Je,
        hi = Ve,
        mi = ce(mi = yn.now) && mi || function() {
          return (new yn).getTime()
        },
        yi = 8 == Vn(x + "08") ? Vn : function(e, t) {
          return Vn(Ie(e) ? e.replace(j, "") : e, t || 0)
        };
      return h.after = Mt, h.assign = oi, h.at = He, h.bind = Dt, h.bindAll = It, h.bindKey = Qt, h.chain = cn, h.compact = pt, h.compose = Ft, h.constant = Xt, h.countBy = ui, h.create = me, h.createCallback = Ut, h.curry = Lt, h.debounce = Ot, h.defaults = ai, h.defer = Nt, h.delay = Bt, h.difference = dt, h.filter = Ve, h.flatten = yt, h.forEach = Ge, h.forEachRight = Ze, h.forIn = si, h.forInRight = ge, h.forOwn = li, h.forOwnRight = be, h.functions = xe, h.groupBy = pi, h.indexBy = di, h.initial = gt, h.intersection = bt, h.invert = we, h.invoke = Ke, h.keys = ei, h.map = Je, h.mapValues = Fe, h.max = et, h.memoize = zt, h.merge = Le, h.min = tt, h.omit = Oe, h.once = Rt, h.pairs = Ne, h.partial = Ht, h.partialRight = qt, h.pick = Be, h.pluck = fi, h.property = tn, h.pull = wt, h.range = Tt, h.reject = rt, h.remove = Pt, h.rest = kt, h.shuffle = at, h.sortBy = ct, h.tap = un, h.throttle = Wt, h.times = an, h.toArray = ut, h.transform = ze, h.union = Ct, h.uniq = jt, h.values = Re, h.where = hi, h.without = $t, h.wrap = Vt, h.xor = Yt, h.zip = Et, h.zipObject = At, h.collect = Je, h.drop = kt, h.each = Ge, h.eachRight = Ze, h.extend = oi, h.methods = xe, h.object = At, h.select = Ve, h.tail = kt, h.unique = jt, h.unzip = Et, Kt(h), h.clone = fe, h.cloneDeep = he, h.contains = qe, h.escape = Gt, h.every = We, h.find = Xe, h.findIndex = ft, h.findKey = ye, h.findLast = Ue, h.findLastIndex = ht, h.findLastKey = ve, h.has = _e, h.identity = Zt, h.indexOf = vt, h.isArguments = de, h.isArray = Kn, h.isBoolean = Te, h.isDate = Pe, h.isElement = ke, h.isEmpty = Se, h.isEqual = Ce, h.isFinite = je, h.isFunction = $e, h.isNaN = Ee, h.isNull = Ae, h.isNumber = Me, h.isObject = Ye, h.isPlainObject = ci, h.isRegExp = De, h.isString = Ie, h.isUndefined = Qe, h.lastIndexOf = _t, h.mixin = Kt, h.noConflict = Jt, h.noop = en, h.now = mi, h.parseInt = yi, h.random = nn, h.reduce = nt, h.reduceRight = it, h.result = rn, h.runInContext = d, h.size = st, h.some = lt, h.sortedIndex = St, h.template = on, h.unescape = sn, h.uniqueId = ln, h.all = We, h.any = lt, h.detect = Xe, h.findWhere = Xe, h.foldl = nt, h.foldr = it, h.include = qe, h.inject = nt, Kt(function() {
        var e = {};
        return li(h, function(t, n) {
          h.prototype[n] || (e[n] = t)
        }), e
      }(), !1), h.first = mt, h.last = xt, h.sample = ot, h.take = mt, h.head = mt, li(h, function(e, t) {
        var n = "sample" !== t;
        h.prototype[t] || (h.prototype[t] = function(t, i) {
          var r = this.__chain__,
            o = e(this.__wrapped__, t, i);
          return r || null != t && (!i || n && "function" == typeof t) ? new m(o, r) : o
        })
      }), h.VERSION = "2.4.1", h.prototype.chain = pn, h.prototype.toString = dn, h.prototype.value = fn, h.prototype.valueOf = fn, Ge(["join", "pop", "shift"], function(e) {
        var t = Pn[e];
        h.prototype[e] = function() {
          var e = this.__chain__,
            n = t.apply(this.__wrapped__, arguments);
          return e ? new m(n, e) : n
        }
      }), Ge(["push", "reverse", "sort", "unshift"], function(e) {
        var t = Pn[e];
        h.prototype[e] = function() {
          return t.apply(this.__wrapped__, arguments), this
        }
      }), Ge(["concat", "slice", "splice"], function(e) {
        var t = Pn[e];
        h.prototype[e] = function() {
          return new m(t.apply(this.__wrapped__, arguments), this.__chain__)
        }
      }), h
    }
    var f, h = [],
      m = [],
      y = 0,
      v = +new Date + "",
      g = 75,
      b = 40,
      x = " \t\x0B\f \ufeff\n\r\u2028\u2029 ᠎             　",
      _ = /\b__p \+= '';/g,
      w = /\b(__p \+=) '' \+/g,
      T = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      P = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      k = /\w*$/,
      S = /^\s*function[ \n\r\t]+\w/,
      C = /<%=([\s\S]+?)%>/g,
      j = RegExp("^[" + x + "]*0+(?=.$)"),
      $ = /($^)/,
      Y = /\bthis\b/,
      E = /['\n\r\t\u2028\u2029\\]/g,
      A = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
      M = 0,
      D = "[object Arguments]",
      I = "[object Array]",
      Q = "[object Boolean]",
      F = "[object Date]",
      L = "[object Function]",
      O = "[object Number]",
      N = "[object Object]",
      B = "[object RegExp]",
      z = "[object String]",
      R = {};
    R[L] = !1, R[D] = R[I] = R[Q] = R[F] = R[O] = R[N] = R[B] = R[z] = !0;
    var H = {
        leading: !1,
        maxWait: 0,
        trailing: !1
      },
      q = {
        configurable: !1,
        enumerable: !1,
        value: null,
        writable: !1
      },
      W = {
        "boolean": !1,
        "function": !0,
        object: !0,
        number: !1,
        string: !1,
        undefined: !1
      },
      V = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\t": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
      },
      X = W[typeof window] && window || this,
      U = W[typeof exports] && exports && !exports.nodeType && exports,
      G = W[typeof module] && module && !module.nodeType && module,
      Z = G && G.exports === U && U,
      K = W[typeof global] && global;
    !K || K.global !== K && K.window !== K || (X = K);
    var J = d();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (X._ = J, define(function() {
      return J
    })) : U && G ? Z ? (G.exports = J)._ = J : U._ = J : X._ = J
  }.call(this), window.Modernizr = function(e, t, n) {
    function i(e) {
      v.cssText = e
    }

    function r(e, t) {
      return typeof e === t
    }

    function o(e, t) {
      return !!~("" + e).indexOf(t)
    }

    function a(e, t) {
      for (var i in e) {
        var r = e[i];
        if (!o(r, "-") && v[r] !== n) return "pfx" != t || r
      }
      return !1
    }

    function s(e, t, i) {
      for (var o in e) {
        var a = t[e[o]];
        if (a !== n) return i === !1 ? e[o] : r(a, "function") ? a.bind(i || t) : a
      }
      return !1
    }

    function l(e, t, n) {
      var i = e.charAt(0).toUpperCase() + e.slice(1),
        o = (e + " " + b.join(i + " ") + i).split(" ");
      return r(t, "string") || r(t, "undefined") ? a(o, t) : (o = (e + " " + x.join(i + " ") + i).split(" "), s(o, t, n))
    }
    var c, u, p, d = "2.8.3",
      f = {},
      h = t.documentElement,
      m = "modernizr",
      y = t.createElement(m),
      v = y.style,
      g = ({}.toString, "Webkit Moz O ms"),
      b = g.split(" "),
      x = g.toLowerCase().split(" "),
      _ = {},
      w = [],
      T = w.slice,
      P = {}.hasOwnProperty;
    p = r(P, "undefined") || r(P.call, "undefined") ? function(e, t) {
      return t in e && r(e.constructor.prototype[t], "undefined")
    } : function(e, t) {
      return P.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function(e) {
      var t = this;
      if ("function" != typeof t) throw new TypeError;
      var n = T.call(arguments, 1),
        i = function() {
          if (this instanceof i) {
            var r = function() {};
            r.prototype = t.prototype;
            var o = new r,
              a = t.apply(o, n.concat(T.call(arguments)));
            return Object(a) === a ? a : o
          }
          return t.apply(e, n.concat(T.call(arguments)))
        };
      return i
    }), _.cssanimations = function() {
      return l("animationName")
    };
    for (var k in _) p(_, k) && (u = k.toLowerCase(), f[u] = _[k](), w.push((f[u] ? "" : "no-") + u));
    return f.addTest = function(e, t) {
      if ("object" == typeof e)
        for (var i in e) p(e, i) && f.addTest(i, e[i]);
      else {
        if (e = e.toLowerCase(), f[e] !== n) return f;
        t = "function" == typeof t ? t() : t, "undefined" != typeof enableClasses && enableClasses && (h.className += " " + (t ? "" : "no-") + e), f[e] = t
      }
      return f
    }, i(""), y = c = null, f._version = d, f._domPrefixes = x, f._cssomPrefixes = b, f.testProp = function(e) {
      return a([e])
    }, f.testAllProps = l, f
  }(this, this.document), + function(e) {
    "use strict";
    var t = function(t, n) {
      this.options = n, this.$element = e(t), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
        this.$element.trigger("loaded.bs.modal")
      }, this))
    };
    t.DEFAULTS = {
      backdrop: !0,
      keyboard: !0,
      show: !0
    }, t.prototype.toggle = function(e) {
      return this[this.isShown ? "hide" : "show"](e)
    }, t.prototype.show = function(t) {
      var n = this,
        i = e.Event("show.bs.modal", {
          relatedTarget: t
        });
      this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
        var i = e.support.transition && n.$element.hasClass("fade");
        n.$element.parent().length || n.$element.appendTo(document.body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
        var r = e.Event("shown.bs.modal", {
          relatedTarget: t
        });
        i ? n.$element.find(".modal-dialog").one(e.support.transition.end, function() {
          n.$element.focus().trigger(r)
        }).emulateTransitionEnd(300) : n.$element.focus().trigger(r)
      }))
    }, t.prototype.hide = function(t) {
      t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, t.prototype.enforceFocus = function() {
      e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
        this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus()
      }, this))
    }, t.prototype.escape = function() {
      this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) {
        27 == e.which && this.hide()
      }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, t.prototype.hideModal = function() {
      var e = this;
      this.$element.hide(), this.backdrop(function() {
        e.removeBackdrop(), e.$element.trigger("hidden.bs.modal")
      })
    }, t.prototype.removeBackdrop = function() {
      this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, t.prototype.backdrop = function(t) {
      var n = this.$element.hasClass("fade") ? "fade" : "";
      if (this.isShown && this.options.backdrop) {
        var i = e.support.transition && n;
        if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
            e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
          }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
        i ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
      } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
    };
    var n = e.fn.modal;
    e.fn.modal = function(n, i) {
      return this.each(function() {
        var r = e(this),
          o = r.data("bs.modal"),
          a = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n);
        o || r.data("bs.modal", o = new t(this, a)), "string" == typeof n ? o[n](i) : a.show && o.show(i)
      })
    }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
      return e.fn.modal = n, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
      var n = e(this),
        i = n.attr("href"),
        r = e(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
        o = r.data("bs.modal") ? "toggle" : e.extend({
          remote: !/#/.test(i) && i
        }, r.data(), n.data());
      n.is("a") && t.preventDefault(), r.modal(o, this).one("hide", function() {
        n.is(":visible") && n.focus()
      })
    }), e(document).on("show.bs.modal", ".modal", function() {
      e(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
      e(document.body).removeClass("modal-open")
    })
  }(jQuery),
  function() {
    var e, t, n, i, r, o = function(e, t) {
        return function() {
          return e.apply(t, arguments)
        }
      },
      a = [].indexOf || function(e) {
        for (var t = 0, n = this.length; t < n; t++)
          if (t in this && this[t] === e) return t;
        return -1
      };
    t = function() {
      function e() {}
      return e.prototype.extend = function(e, t) {
        var n, i;
        for (n in t) i = t[n], null == e[n] && (e[n] = i);
        return e
      }, e.prototype.isMobile = function(e) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
      }, e.prototype.createEvent = function(e, t, n, i) {
        var r;
        return null == t && (t = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (r = document.createEvent("CustomEvent"), r.initCustomEvent(e, t, n, i)) : null != document.createEventObject ? (r = document.createEventObject(), r.eventType = e) : r.eventName = e, r
      }, e.prototype.emitEvent = function(e, t) {
        return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
      }, e.prototype.addEvent = function(e, t, n) {
        return null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
      }, e.prototype.removeEvent = function(e, t, n) {
        return null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t]
      }, e.prototype.innerHeight = function() {
        return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
      }, e
    }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
      function e() {
        this.keys = [], this.values = []
      }
      return e.prototype.get = function(e) {
        var t, n, i, r, o;
        for (o = this.keys, t = i = 0, r = o.length; i < r; t = ++i)
          if (n = o[t], n === e) return this.values[t]
      }, e.prototype.set = function(e, t) {
        var n, i, r, o, a;
        for (a = this.keys, n = r = 0, o = a.length; r < o; n = ++r)
          if (i = a[n], i === e) return void(this.values[n] = t);
        return this.keys.push(e), this.values.push(t)
      }, e
    }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
      function e() {
        "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
      }
      return e.notSupported = !0, e.prototype.observe = function() {}, e
    }()), i = this.getComputedStyle || function(e, t) {
      return this.getPropertyValue = function(t) {
        var n;
        return "float" === t && (t = "styleFloat"), r.test(t) && t.replace(r, function(e, t) {
          return t.toUpperCase()
        }), (null != (n = e.currentStyle) ? n[t] : void 0) || null
      }, this
    }, r = /(\-([a-z]){1})/g, this.WOW = function() {
      function r(e) {
        null == e && (e = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
      }
      return r.prototype.defaults = {
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0,
        callback: null,
        scrollContainer: null
      }, r.prototype.init = function() {
        var e;
        return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
      }, r.prototype.start = function() {
        var t, n, i, r;
        if (this.stopped = !1, this.boxes = function() {
            var e, n, i, r;
            for (i = this.element.querySelectorAll("." + this.config.boxClass), r = [], e = 0, n = i.length; e < n; e++) t = i[e], r.push(t);
            return r
          }.call(this), this.all = function() {
            var e, n, i, r;
            for (i = this.boxes, r = [], e = 0, n = i.length; e < n; e++) t = i[e], r.push(t);
            return r
          }.call(this), this.boxes.length)
          if (this.disabled()) this.resetStyle();
          else
            for (r = this.boxes, n = 0, i = r.length; n < i; n++) t = r[n], this.applyStyle(t, !0);
        if (this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new e(function(e) {
          return function(t) {
            var n, i, r, o, a;
            for (a = [], n = 0, i = t.length; n < i; n++) o = t[n], a.push(function() {
              var e, t, n, i;
              for (n = o.addedNodes || [], i = [], e = 0, t = n.length; e < t; e++) r = n[e], i.push(this.doSync(r));
              return i
            }.call(e));
            return a
          }
        }(this)).observe(document.body, {
          childList: !0,
          subtree: !0
        })
      }, r.prototype.stop = function() {
        if (this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval)
      }, r.prototype.sync = function(t) {
        if (e.notSupported) return this.doSync(this.element)
      }, r.prototype.doSync = function(e) {
        var t, n, i, r, o;
        if (null == e && (e = this.element), 1 === e.nodeType) {
          for (e = e.parentNode || e, r = e.querySelectorAll("." + this.config.boxClass), o = [], n = 0, i = r.length; n < i; n++) t = r[n], a.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), o.push(this.scrolled = !0)) : o.push(void 0);
          return o
        }
      }, r.prototype.show = function(e) {
        return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e
      }, r.prototype.applyStyle = function(e, t) {
        var n, i, r;
        return i = e.getAttribute("data-wow-duration"), n = e.getAttribute("data-wow-delay"), r = e.getAttribute("data-wow-iteration"), this.animate(function(o) {
          return function() {
            return o.customStyle(e, t, i, n, r)
          }
        }(this))
      }, r.prototype.animate = function() {
        return "requestAnimationFrame" in window ? function(e) {
          return window.requestAnimationFrame(e)
        } : function(e) {
          return e()
        }
      }(), r.prototype.resetStyle = function() {
        var e, t, n, i, r;
        for (i = this.boxes, r = [], t = 0, n = i.length; t < n; t++) e = i[t], r.push(e.style.visibility = "visible");
        return r
      }, r.prototype.resetAnimation = function(e) {
        var t;
        if (e.type.toLowerCase().indexOf("animationend") >= 0) return t = e.target || e.srcElement, t.className = t.className.replace(this.config.animateClass, "").trim()
      }, r.prototype.customStyle = function(e, t, n, i, r) {
        return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, {
          animationDuration: n
        }), i && this.vendorSet(e.style, {
          animationDelay: i
        }), r && this.vendorSet(e.style, {
          animationIterationCount: r
        }), this.vendorSet(e.style, {
          animationName: t ? "none" : this.cachedAnimationName(e)
        }), e
      }, r.prototype.vendors = ["moz", "webkit"], r.prototype.vendorSet = function(e, t) {
        var n, i, r, o;
        i = [];
        for (n in t) r = t[n], e["" + n] = r, i.push(function() {
          var t, i, a, s;
          for (a = this.vendors, s = [], t = 0, i = a.length; t < i; t++) o = a[t], s.push(e["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = r);
          return s
        }.call(this));
        return i
      }, r.prototype.vendorCSS = function(e, t) {
        var n, r, o, a, s, l;
        for (s = i(e), a = s.getPropertyCSSValue(t), o = this.vendors, n = 0, r = o.length; n < r; n++) l = o[n], a = a || s.getPropertyCSSValue("-" + l + "-" + t);
        return a
      }, r.prototype.animationName = function(e) {
        var t;
        try {
          t = this.vendorCSS(e, "animation-name").cssText
        } catch (n) {
          t = i(e).getPropertyValue("animation-name")
        }
        return "none" === t ? "" : t
      }, r.prototype.cacheAnimationName = function(e) {
        return this.animationNameCache.set(e, this.animationName(e))
      }, r.prototype.cachedAnimationName = function(e) {
        return this.animationNameCache.get(e)
      }, r.prototype.scrollHandler = function() {
        return this.scrolled = !0
      }, r.prototype.scrollCallback = function() {
        var e;
        if (this.scrolled && (this.scrolled = !1, this.boxes = function() {
            var t, n, i, r;
            for (i = this.boxes, r = [], t = 0, n = i.length; t < n; t++) e = i[t], e && (this.isVisible(e) ? this.show(e) : r.push(e));
            return r
          }.call(this), !this.boxes.length && !this.config.live)) return this.stop()
      }, r.prototype.offsetTop = function(e) {
        for (var t; void 0 === e.offsetTop;) e = e.parentNode;
        for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
        return t
      }, r.prototype.isVisible = function(e) {
        var t, n, i, r, o;
        return n = e.getAttribute("data-wow-offset") || this.config.offset, o = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, r = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(e), t = i + e.clientHeight, i <= r && t >= o
      }, r.prototype.util = function() {
        return null != this._util ? this._util : this._util = new t
      }, r.prototype.disabled = function() {
        return !this.config.mobile && this.util().isMobile(navigator.userAgent)
      }, r
    }()
  }.call(this),
  function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.store = t()
  }(this, function() {
    function e() {
      try {
        return o in i && i[o]
      } catch (e) {
        return !1
      }
    }
    var t, n = {},
      i = "undefined" != typeof window ? window : global,
      r = i.document,
      o = "localStorage",
      a = "script";
    if (n.disabled = !1, n.version = "1.3.20", n.set = function(e, t) {}, n.get = function(e, t) {}, n.has = function(e) {
        return void 0 !== n.get(e)
      }, n.remove = function(e) {}, n.clear = function() {}, n.transact = function(e, t, i) {
        null == i && (i = t, t = null), null == t && (t = {});
        var r = n.get(e, t);
        i(r), n.set(e, r)
      }, n.getAll = function() {}, n.forEach = function() {}, n.serialize = function(e) {
        return JSON.stringify(e)
      }, n.deserialize = function(e) {
        if ("string" == typeof e) try {
          return JSON.parse(e)
        } catch (t) {
          return e || void 0
        }
      }, e()) t = i[o], n.set = function(e, i) {
      return void 0 === i ? n.remove(e) : (t.setItem(e, n.serialize(i)), i)
    }, n.get = function(e, i) {
      var r = n.deserialize(t.getItem(e));
      return void 0 === r ? i : r
    }, n.remove = function(e) {
      t.removeItem(e)
    }, n.clear = function() {
      t.clear()
    }, n.getAll = function() {
      var e = {};
      return n.forEach(function(t, n) {
        e[t] = n
      }), e
    }, n.forEach = function(e) {
      for (var i = 0; i < t.length; i++) {
        var r = t.key(i);
        e(r, n.get(r))
      }
    };
    else if (r && r.documentElement.addBehavior) {
      var s, l;
      try {
        l = new ActiveXObject("htmlfile"), l.open(), l.write("<" + a + ">document.w=window</" + a + '><iframe src="/favicon.ico"></iframe>'), l.close(), s = l.w.frames[0].document, t = s.createElement("div")
      } catch (c) {
        t = r.createElement("div"), s = r.body
      }
      var u = function(e) {
          return function() {
            var i = Array.prototype.slice.call(arguments, 0);
            i.unshift(t), s.appendChild(t), t.addBehavior("#default#userData"), t.load(o);
            var r = e.apply(n, i);
            return s.removeChild(t), r
          }
        },
        p = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
        d = function(e) {
          return e.replace(/^d/, "___$&").replace(p, "___")
        };
      n.set = u(function(e, t, i) {
        return t = d(t), void 0 === i ? n.remove(t) : (e.setAttribute(t, n.serialize(i)), e.save(o), i)
      }), n.get = u(function(e, t, i) {
        t = d(t);
        var r = n.deserialize(e.getAttribute(t));
        return void 0 === r ? i : r
      }), n.remove = u(function(e, t) {
        t = d(t), e.removeAttribute(t), e.save(o)
      }), n.clear = u(function(e) {
        var t = e.XMLDocument.documentElement.attributes;
        e.load(o);
        for (var n = t.length - 1; n >= 0; n--) e.removeAttribute(t[n].name);
        e.save(o)
      }), n.getAll = function(e) {
        var t = {};
        return n.forEach(function(e, n) {
          t[e] = n
        }), t
      }, n.forEach = u(function(e, t) {
        for (var i, r = e.XMLDocument.documentElement.attributes, o = 0; i = r[o]; ++o) t(i.name, n.deserialize(e.getAttribute(i.name)))
      })
    }
    try {
      var f = "__storejs__";
      n.set(f, f), n.get(f) != f && (n.disabled = !0), n.remove(f)
    } catch (c) {
      n.disabled = !0
    }
    return n.enabled = !n.disabled, n
  }),
  function(e, t, n, i) {
    "use strict";

    function r(e, t) {
      var i, r, o = [],
        a = 0;
      e && e.isDefaultPrevented() || (e.preventDefault(), t = e && e.data ? e.data.options : t || {}, i = t.$target || n(e.currentTarget), r = i.attr("data-fancybox") || "", r ? (o = t.selector ? n(t.selector) : e.data ? e.data.items : [], o = o.length ? o.filter('[data-fancybox="' + r + '"]') : n('[data-fancybox="' + r + '"]'), a = o.index(i), a < 0 && (a = 0)) : o = [i], n.fancybox.open(o, t, a))
    }
    if (e.console = e.console || {
        info: function(e) {}
      }, n) {
      if (n.fn.fancybox) return void console.info("fancyBox already initialized");
      var o = {
          loop: !1,
          gutter: 50,
          keyboard: !0,
          arrows: !0,
          infobar: !0,
          smallBtn: "auto",
          toolbar: "auto",
          buttons: ["zoom", "thumbs", "close"],
          idleTime: 3,
          protect: !1,
          modal: !1,
          image: {
            preload: !1
          },
          ajax: {
            settings: {
              data: {
                fancybox: !0
              }
            }
          },
          iframe: {
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
            preload: !0,
            css: {},
            attr: {
              scrolling: "auto"
            }
          },
          defaultType: "image",
          animationEffect: "zoom",
          animationDuration: 366,
          zoomOpacity: "auto",
          transitionEffect: "fade",
          transitionDuration: 366,
          slideClass: "",
          baseClass: "",
          baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
          spinnerTpl: '<div class="fancybox-loading"></div>',
          errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
          btnTpl: {
            download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" /></svg></a>',
            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" /></svg></button>',
            close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
            smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>',
            arrowLeft: '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></a>',
            arrowRight: '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></a>'
          },
          parentEl: "body",
          autoFocus: !1,
          backFocus: !0,
          trapFocus: !0,
          fullScreen: {
            autoStart: !1
          },
          touch: {
            vertical: !0,
            momentum: !0
          },
          hash: null,
          media: {},
          slideShow: {
            autoStart: !1,
            speed: 4e3
          },
          thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
          },
          wheel: "auto",
          onInit: n.noop,
          beforeLoad: n.noop,
          afterLoad: n.noop,
          beforeShow: n.noop,
          afterShow: n.noop,
          beforeClose: n.noop,
          afterClose: n.noop,
          onActivate: n.noop,
          onDeactivate: n.noop,
          clickContent: function(e, t) {
            return "image" === e.type && "zoom"
          },
          clickSlide: "close",
          clickOutside: "close",
          dblclickContent: !1,
          dblclickSlide: !1,
          dblclickOutside: !1,
          mobile: {
            idleTime: !1,
            clickContent: function(e, t) {
              return "image" === e.type && "toggleControls"
            },
            clickSlide: function(e, t) {
              return "image" === e.type ? "toggleControls" : "close"
            },
            dblclickContent: function(e, t) {
              return "image" === e.type && "zoom"
            },
            dblclickSlide: function(e, t) {
              return "image" === e.type && "zoom"
            }
          },
          lang: "en",
          i18n: {
            en: {
              CLOSE: "Close",
              NEXT: "Next",
              PREV: "Previous",
              ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
              PLAY_START: "Start slideshow",
              PLAY_STOP: "Pause slideshow",
              FULL_SCREEN: "Full screen",
              THUMBS: "Thumbnails",
              DOWNLOAD: "Download",
              SHARE: "Share",
              ZOOM: "Zoom"
            },
            de: {
              CLOSE: "Schliessen",
              NEXT: "Weiter",
              PREV: "Zurück",
              ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
              PLAY_START: "Diaschau starten",
              PLAY_STOP: "Diaschau beenden",
              FULL_SCREEN: "Vollbild",
              THUMBS: "Vorschaubilder",
              DOWNLOAD: "Herunterladen",
              SHARE: "Teilen",
              ZOOM: "Maßstab"
            }
          }
        },
        a = n(e),
        s = n(t),
        l = 0,
        c = function(e) {
          return e && e.hasOwnProperty && e instanceof n
        },
        u = function() {
          return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
            return e.setTimeout(t, 1e3 / 60)
          }
        }(),
        p = function() {
          var e, n = t.createElement("fakeelement"),
            r = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd"
            };
          for (e in r)
            if (n.style[e] !== i) return r[e];
          return "transitionend"
        }(),
        d = function(e) {
          return e && e.length && e[0].offsetHeight
        },
        f = function(e, t) {
          var i = n.extend(!0, {}, e, t);
          return n.each(t, function(e, t) {
            n.isArray(t) && (i[e] = t)
          }), i
        },
        h = function(e, i, r) {
          var o = this;
          o.opts = f({
            index: r
          }, n.fancybox.defaults), n.isPlainObject(i) && (o.opts = f(o.opts, i)), n.fancybox.isMobile && (o.opts = f(o.opts, o.opts.mobile)), o.id = o.opts.id || ++l, o.currIndex = parseInt(o.opts.index, 10) || 0, o.prevIndex = null, o.prevPos = null, o.currPos = 0, o.firstRun = !0, o.group = [], o.slides = {}, o.addContent(e), o.group.length && (o.$lastFocus = n(t.activeElement).trigger("blur"), o.init())
        };
      n.extend(h.prototype, {
        init: function() {
          var r, o, a, s = this,
            l = s.group[s.currIndex],
            c = l.opts,
            u = n.fancybox.scrollbarWidth;
          n.fancybox.getInstance() || c.hideScrollbar === !1 || (n("body").addClass("fancybox-active"), !n.fancybox.isMobile && t.body.scrollHeight > e.innerHeight && (u === i && (r = n('<div style="width:100px;height:100px;overflow:scroll;" />').appendTo("body"), u = n.fancybox.scrollbarWidth = r[0].offsetWidth - r[0].clientWidth, r.remove()), n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + u + "px; }</style>"), n("body").addClass("compensate-for-scrollbar"))), a = "", n.each(c.buttons, function(e, t) {
            a += c.btnTpl[t] || ""
          }), o = n(s.translate(s, c.baseTpl.replace("{{buttons}}", a).replace("{{arrows}}", c.btnTpl.arrowLeft + c.btnTpl.arrowRight))).attr("id", "fancybox-container-" + s.id).addClass("fancybox-is-hidden").addClass(c.baseClass).data("FancyBox", s).appendTo(c.parentEl), s.$refs = {
            container: o
          }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(e) {
            s.$refs[e] = o.find(".fancybox-" + e)
          }), s.trigger("onInit"), s.activate(), s.jumpTo(s.currIndex)
        },
        translate: function(e, t) {
          var n = e.opts.i18n[e.opts.lang];
          return t.replace(/\{\{(\w+)\}\}/g, function(e, t) {
            var r = n[t];
            return r === i ? e : r
          })
        },
        addContent: function(e) {
          var t, r = this,
            o = n.makeArray(e);
          n.each(o, function(e, t) {
            var o, a, s, l, c, u = {},
              p = {};
            n.isPlainObject(t) ? (u = t, p = t.opts || t) : "object" === n.type(t) && n(t).length ? (o = n(t), p = o.data() || {}, p = n.extend(!0, {}, p, p.options), p.$orig = o, u.src = r.opts.src || p.src || o.attr("href"), u.type || u.src || (u.type = "inline", u.src = t)) : u = {
              type: "html",
              src: t + ""
            }, u.opts = n.extend(!0, {}, r.opts, p), n.isArray(p.buttons) && (u.opts.buttons = p.buttons), a = u.type || u.opts.type, l = u.src || "", !a && l && ((s = l.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) ? (a = "video", u.opts.videoFormat || (u.opts.videoFormat = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : l.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : l.match(/\.(pdf)((\?|#).*)?$/i) ? a = "iframe" : "#" === l.charAt(0) && (a = "inline")), a ? u.type = a : r.trigger("objectNeedsType", u), u.contentType || (u.contentType = n.inArray(u.type, ["html", "inline", "ajax"]) > -1 ? "html" : u.type), u.index = r.group.length, "auto" == u.opts.smallBtn && (u.opts.smallBtn = n.inArray(u.type, ["html", "inline", "ajax"]) > -1), "auto" === u.opts.toolbar && (u.opts.toolbar = !u.opts.smallBtn), u.opts.$trigger && u.index === r.opts.index && (u.opts.$thumb = u.opts.$trigger.find("img:first")), u.opts.$thumb && u.opts.$thumb.length || !u.opts.$orig || (u.opts.$thumb = u.opts.$orig.find("img:first")), "function" === n.type(u.opts.caption) && (u.opts.caption = u.opts.caption.apply(t, [r, u])), "function" === n.type(r.opts.caption) && (u.opts.caption = r.opts.caption.apply(t, [r, u])), u.opts.caption instanceof n || (u.opts.caption = u.opts.caption === i ? "" : u.opts.caption + ""), "ajax" === u.type && (c = l.split(/\s+/, 2), c.length > 1 && (u.src = c.shift(), u.opts.filter = c.shift())), u.opts.modal && (u.opts = n.extend(!0, u.opts, {
              infobar: 0,
              toolbar: 0,
              smallBtn: 0,
              keyboard: 0,
              slideShow: 0,
              fullScreen: 0,
              thumbs: 0,
              touch: 0,
              clickContent: !1,
              clickSlide: !1,
              clickOutside: !1,
              dblclickContent: !1,
              dblclickSlide: !1,
              dblclickOutside: !1
            })), r.group.push(u)
          }), Object.keys(r.slides).length && (r.updateControls(), t = r.Thumbs, t && t.isActive && (t.create(), t.focus()))
        },
        addEvents: function() {
          var i = this;
          i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(e) {
            e.stopPropagation(), e.preventDefault(), i.close(e)
          }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(e) {
            e.stopPropagation(), e.preventDefault(), i.previous()
          }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(e) {
            e.stopPropagation(), e.preventDefault(), i.next()
          }).on("click.fb", "[data-fancybox-zoom]", function(e) {
            i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
          }), a.on("orientationchange.fb resize.fb", function(e) {
            e && e.originalEvent && "resize" === e.originalEvent.type ? u(function() {
              i.update()
            }) : (i.$refs.stage.hide(), setTimeout(function() {
              i.$refs.stage.show(), i.update()
            }, n.fancybox.isMobile ? 600 : 250))
          }), s.on("focusin.fb", function(e) {
            var i = n.fancybox ? n.fancybox.getInstance() : null;
            i.isClosing || !i.current || !i.current.opts.trapFocus || n(e.target).hasClass("fancybox-container") || n(e.target).is(t) || i && "fixed" !== n(e.target).css("position") && !i.$refs.container.has(e.target).length && (e.stopPropagation(), i.focus())
          }), s.on("keydown.fb", function(e) {
            var t = i.current,
              r = e.keyCode || e.which;
            if (t && t.opts.keyboard && !(e.ctrlKey || e.altKey || e.shiftKey || n(e.target).is("input") || n(e.target).is("textarea"))) return 8 === r || 27 === r ? (e.preventDefault(), void i.close(e)) : 37 === r || 38 === r ? (e.preventDefault(), void i.previous()) : 39 === r || 40 === r ? (e.preventDefault(), void i.next()) : void i.trigger("afterKeydown", e, r)
          }), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, s.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(e) {
            i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1
          }), i.idleInterval = e.setInterval(function() {
            i.idleSecondsCounter++, i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && !i.isDragging && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls())
          }, 1e3))
        },
        removeEvents: function() {
          var t = this;
          a.off("orientationchange.fb resize.fb"), s.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), t.idleInterval && (e.clearInterval(t.idleInterval), t.idleInterval = null)
        },
        previous: function(e) {
          return this.jumpTo(this.currPos - 1, e)
        },
        next: function(e) {
          return this.jumpTo(this.currPos + 1, e)
        },
        jumpTo: function(e, t) {
          var r, o, a, s, l, c, u, p = this,
            f = p.group.length;
          if (!(p.isDragging || p.isClosing || p.isAnimating && p.firstRun)) {
            if (e = parseInt(e, 10), o = p.current ? p.current.opts.loop : p.opts.loop, !o && (e < 0 || e >= f)) return !1;
            if (r = p.firstRun = !Object.keys(p.slides).length, !(f < 2 && !r && p.isDragging)) {
              if (s = p.current, p.prevIndex = p.currIndex, p.prevPos = p.currPos, a = p.createSlide(e), f > 1 && ((o || a.index > 0) && p.createSlide(e - 1), (o || a.index < f - 1) && p.createSlide(e + 1)), p.current = a, p.currIndex = a.index, p.currPos = a.pos, p.trigger("beforeShow", r), p.updateControls(), c = n.fancybox.getTranslate(a.$slide), a.isMoved = (0 !== c.left || 0 !== c.top) && !a.$slide.hasClass("fancybox-animated"), a.forcedDuration = i, n.isNumeric(t) ? a.forcedDuration = t : t = a.opts[r ? "animationDuration" : "transitionDuration"], t = parseInt(t, 10), r) return a.opts.animationEffect && t && p.$refs.container.css("transition-duration", t + "ms"), p.$refs.container.removeClass("fancybox-is-hidden"), d(p.$refs.container), p.$refs.container.addClass("fancybox-is-open"), d(p.$refs.container), a.$slide.addClass("fancybox-slide--previous"), p.loadSlide(a), a.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current"), void p.preload("image");
              n.each(p.slides, function(e, t) {
                n.fancybox.stop(t.$slide)
              }), a.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), a.isMoved ? (l = Math.round(a.$slide.width()), n.each(p.slides, function(e, i) {
                var r = i.pos - a.pos;
                n.fancybox.animate(i.$slide, {
                  top: 0,
                  left: r * l + r * i.opts.gutter
                }, t, function() {
                  i.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), i.pos === p.currPos && (a.isMoved = !1, p.complete())
                })
              })) : p.$refs.stage.children().removeAttr("style"), a.isLoaded ? p.revealContent(a) : p.loadSlide(a), p.preload("image"), s.pos !== a.pos && (u = "fancybox-slide--" + (s.pos > a.pos ? "next" : "previous"), s.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), s.isComplete = !1, t && (a.isMoved || a.opts.transitionEffect) && (a.isMoved ? s.$slide.addClass(u) : (u = "fancybox-animated " + u + " fancybox-fx-" + a.opts.transitionEffect, n.fancybox.animate(s.$slide, u, t, function() {
                s.$slide.removeClass(u).removeAttr("style")
              }))))
            }
          }
        },
        createSlide: function(e) {
          var t, i, r = this;
          return i = e % r.group.length, i = i < 0 ? r.group.length + i : i, !r.slides[e] && r.group[i] && (t = n('<div class="fancybox-slide"></div>').appendTo(r.$refs.stage), r.slides[e] = n.extend(!0, {}, r.group[i], {
            pos: e,
            $slide: t,
            isLoaded: !1
          }), r.updateSlide(r.slides[e])), r.slides[e]
        },
        scaleToActual: function(e, t, r) {
          var o, a, s, l, c, u = this,
            p = u.current,
            d = p.$content,
            f = n.fancybox.getTranslate(p.$slide).width,
            h = n.fancybox.getTranslate(p.$slide).height,
            m = p.width,
            y = p.height;
          !u.isAnimating && d && "image" == p.type && p.isLoaded && !p.hasError && (n.fancybox.stop(d), u.isAnimating = !0, e = e === i ? .5 * f : e, t = t === i ? .5 * h : t, o = n.fancybox.getTranslate(d), o.top -= n.fancybox.getTranslate(p.$slide).top, o.left -= n.fancybox.getTranslate(p.$slide).left, l = m / o.width, c = y / o.height, a = .5 * f - .5 * m, s = .5 * h - .5 * y, m > f && (a = o.left * l - (e * l - e), a > 0 && (a = 0), a < f - m && (a = f - m)), y > h && (s = o.top * c - (t * c - t), s > 0 && (s = 0), s < h - y && (s = h - y)), u.updateCursor(m, y), n.fancybox.animate(d, {
            top: s,
            left: a,
            scaleX: l,
            scaleY: c
          }, r || 330, function() {
            u.isAnimating = !1
          }), u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop())
        },
        scaleToFit: function(e) {
          var t, i = this,
            r = i.current,
            o = r.$content;
          !i.isAnimating && o && "image" == r.type && r.isLoaded && !r.hasError && (n.fancybox.stop(o), i.isAnimating = !0, t = i.getFitPos(r), i.updateCursor(t.width, t.height), n.fancybox.animate(o, {
            top: t.top,
            left: t.left,
            scaleX: t.width / o.width(),
            scaleY: t.height / o.height()
          }, e || 330, function() {
            i.isAnimating = !1
          }))
        },
        getFitPos: function(e) {
          var t, n, i, r, o, a = this,
            s = e.$content,
            l = e.width || e.opts.width,
            c = e.height || e.opts.height,
            u = {};
          return !!(e.isLoaded && s && s.length) && (r = {
            top: parseInt(e.$slide.css("paddingTop"), 10),
            right: parseInt(e.$slide.css("paddingRight"), 10),
            bottom: parseInt(e.$slide.css("paddingBottom"), 10),
            left: parseInt(e.$slide.css("paddingLeft"), 10)
          }, t = parseInt(a.$refs.stage.width(), 10) - (r.left + r.right), n = parseInt(a.$refs.stage.height(), 10) - (r.top + r.bottom), l && c || (l = t, c = n), i = Math.min(1, t / l, n / c), l = Math.floor(i * l), c = Math.floor(i * c), "image" === e.type ? (u.top = Math.floor(.5 * (n - c)) + r.top, u.left = Math.floor(.5 * (t - l)) + r.left) : "video" === e.contentType && (o = e.opts.width && e.opts.height ? l / c : e.opts.ratio || 16 / 9, c > l / o ? c = l / o : l > c * o && (l = c * o)), u.width = l, u.height = c, u)
        },
        update: function() {
          var e = this;
          n.each(e.slides, function(t, n) {
            e.updateSlide(n)
          })
        },
        updateSlide: function(e, t) {
          var i = this,
            r = e && e.$content,
            o = e.width || e.opts.width,
            a = e.height || e.opts.height;
          r && (o || a || "video" === e.contentType) && !e.hasError && (n.fancybox.stop(r), n.fancybox.setTranslate(r, i.getFitPos(e)), e.pos === i.currPos && (i.isAnimating = !1, i.updateCursor())), e.$slide.trigger("refresh"), i.$refs.toolbar.toggleClass("compensate-for-scrollbar", e.$slide.get(0).scrollHeight > e.$slide.get(0).clientHeight), i.trigger("onUpdate", e)
        },
        centerSlide: function(e, t) {
          var r, o, a = this;
          a.current && (r = Math.round(e.$slide.width()), o = e.pos - a.current.pos, n.fancybox.animate(e.$slide, {
            top: 0,
            left: o * r + o * e.opts.gutter,
            opacity: 1
          }, t === i ? 0 : t, null, !1))
        },
        updateCursor: function(e, t) {
          var i, r = this,
            o = r.current,
            a = r.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
          o && !r.isClosing && (i = r.isZoomable(), a.toggleClass("fancybox-is-zoomable", i), n("[data-fancybox-zoom]").prop("disabled", !i), i && ("zoom" === o.opts.clickContent || n.isFunction(o.opts.clickContent) && "zoom" === o.opts.clickContent(o)) ? r.isScaledDown(e, t) ? a.addClass("fancybox-can-zoomIn") : o.opts.touch ? a.addClass("fancybox-can-drag") : a.addClass("fancybox-can-zoomOut") : o.opts.touch && "video" !== o.contentType && a.addClass("fancybox-can-drag"))
        },
        isZoomable: function() {
          var e, t = this,
            n = t.current;
          if (n && !t.isClosing && "image" === n.type && !n.hasError) {
            if (!n.isLoaded) return !0;
            if (e = t.getFitPos(n), n.width > e.width || n.height > e.height) return !0
          }
          return !1
        },
        isScaledDown: function(e, t) {
          var r = this,
            o = !1,
            a = r.current,
            s = a.$content;
          return e !== i && t !== i ? o = e < a.width && t < a.height : s && (o = n.fancybox.getTranslate(s), o = o.width < a.width && o.height < a.height), o
        },
        canPan: function() {
          var e, t = this,
            n = !1,
            i = t.current;
          return "image" === i.type && (e = i.$content) && !i.hasError && (n = t.getFitPos(i), n = Math.abs(e.width() - n.width) > 1 || Math.abs(e.height() - n.height) > 1), n
        },
        loadSlide: function(e) {
          var t, i, r, o = this;
          if (!e.isLoading && !e.isLoaded) {
            switch (e.isLoading = !0, o.trigger("beforeLoad", e), t = e.type, i = e.$slide, i.off("refresh").trigger("onReset").addClass(e.opts.slideClass), t) {
              case "image":
                o.setImage(e);
                break;
              case "iframe":
                o.setIframe(e);
                break;
              case "html":
                o.setContent(e, e.src || e.content);
                break;
              case "video":
                o.setContent(e, '<video class="fancybox-video" controls controlsList="nodownload"><source src="' + e.src + '" type="' + e.opts.videoFormat + "\">Your browser doesn't support HTML5 video</video");
                break;
              case "inline":
                n(e.src).length ? o.setContent(e, n(e.src)) : o.setError(e);
                break;
              case "ajax":
                o.showLoading(e), r = n.ajax(n.extend({}, e.opts.ajax.settings, {
                  url: e.src,
                  success: function(t, n) {
                    "success" === n && o.setContent(e, t)
                  },
                  error: function(t, n) {
                    t && "abort" !== n && o.setError(e)
                  }
                })), i.one("onReset", function() {
                  r.abort()
                });
                break;
              default:
                o.setError(e)
            }
            return !0
          }
        },
        setImage: function(t) {
          var i, r, o, a, s, l = this,
            c = t.opts.srcset || t.opts.image.srcset;
          if (t.timouts = setTimeout(function() {
              var e = t.$image;
              !t.isLoading || e && e[0].complete || t.hasError || l.showLoading(t)
            }, 350), c) {
            a = e.devicePixelRatio || 1, s = e.innerWidth * a, o = c.split(",").map(function(e) {
              var t = {};
              return e.trim().split(/\s+/).forEach(function(e, n) {
                var i = parseInt(e.substring(0, e.length - 1), 10);
                return 0 === n ? t.url = e : void(i && (t.value = i, t.postfix = e[e.length - 1]))
              }), t
            }), o.sort(function(e, t) {
              return e.value - t.value
            });
            for (var u = 0; u < o.length; u++) {
              var p = o[u];
              if ("w" === p.postfix && p.value >= s || "x" === p.postfix && p.value >= a) {
                r = p;
                break
              }
            }!r && o.length && (r = o[o.length - 1]), r && (t.src = r.url, t.width && t.height && "w" == r.postfix && (t.height = t.width / t.height * r.value, t.width = r.value), t.opts.srcset = c)
          }
          t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), i = t.opts.thumb || !(!t.opts.$thumb || !t.opts.$thumb.length) && t.opts.$thumb.attr("src"), t.opts.preload !== !1 && t.opts.width && t.opts.height && i && (t.width = t.opts.width, t.height = t.opts.height, t.$ghost = n("<img />").one("error", function() {
            n(this).remove(), t.$ghost = null
          }).one("load", function() {
            l.afterLoad(t)
          }).addClass("fancybox-image").appendTo(t.$content).attr("src", i)), l.setBigImage(t)
        },
        setBigImage: function(e) {
          var t = this,
            i = n("<img />");
          e.$image = i.one("error", function() {
            t.setError(e)
          }).one("load", function() {
            var n;
            e.$ghost || (t.resolveImageSlideSize(e, this.naturalWidth, this.naturalHeight), t.afterLoad(e)), e.timouts && (clearTimeout(e.timouts), e.timouts = null), t.isClosing || (e.opts.srcset && (n = e.opts.sizes, n && "auto" !== n || (n = (e.width / e.height > 1 && a.width() / a.height() > 1 ? "100" : Math.round(e.width / e.height * 100)) + "vw"), i.attr("sizes", n).attr("srcset", e.opts.srcset)), e.$ghost && setTimeout(function() {
              e.$ghost && !t.isClosing && e.$ghost.hide()
            }, Math.min(300, Math.max(1e3, e.height / 1600))), t.hideLoading(e))
          }).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content), (i[0].complete || "complete" == i[0].readyState) && i[0].naturalWidth && i[0].naturalHeight ? i.trigger("load") : i[0].error && i.trigger("error")
        },
        resolveImageSlideSize: function(e, t, n) {
          var i = parseInt(e.opts.width, 10),
            r = parseInt(e.opts.height, 10);
          e.width = t, e.height = n, i > 0 && (e.width = i, e.height = Math.floor(i * n / t)), r > 0 && (e.width = Math.floor(r * t / n), e.height = r)
        },
        setIframe: function(e) {
          var t, r = this,
            o = e.opts.iframe,
            a = e.$slide;
          e.$content = n('<div class="fancybox-content' + (o.preload ? " fancybox-is-hidden" : "") + '"></div>').css(o.css).appendTo(a), a.addClass("fancybox-slide--" + e.contentType), e.$iframe = t = n(o.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(o.attr).appendTo(e.$content), o.preload ? (r.showLoading(e), t.on("load.fb error.fb", function(t) {
            this.isReady = 1, e.$slide.trigger("refresh"), r.afterLoad(e)
          }), a.on("refresh.fb", function() {
            var n, r, a = e.$content,
              s = o.css.width,
              l = o.css.height;
            if (1 === t[0].isReady) {
              try {
                n = t.contents(), r = n.find("body")
              } catch (c) {}
              r && r.length && r.children().length && (a.css({
                width: "",
                height: ""
              }), s === i && (s = Math.ceil(Math.max(r[0].clientWidth, r.outerWidth(!0)))), s && a.width(s), l === i && (l = Math.ceil(Math.max(r[0].clientHeight, r.outerHeight(!0)))), l && a.height(l)), a.removeClass("fancybox-is-hidden")
            }
          })) : this.afterLoad(e), t.attr("src", e.src), a.one("onReset", function() {
            try {
              n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
            } catch (t) {}
            n(this).off("refresh.fb").empty(), e.isLoaded = !1
          })
        },
        setContent: function(e, t) {
          var i = this;
          i.isClosing || (i.hideLoading(e), e.$content && n.fancybox.stop(e.$content), e.$slide.empty(), c(t) && t.parent().length ? (t.parent().parent(".fancybox-slide--inline").trigger("onReset"), e.$placeholder = n("<div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" === n.type(t) && (t = n("<div>").append(n.trim(t)).contents(), 3 === t[0].nodeType && (t = n("<div>").html(t))), e.opts.filter && (t = n("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", function() {
            n(this).find("video,audio").trigger("pause"), e.$placeholder && (e.$placeholder.after(t.hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (n(this).empty(), e.isLoaded = !1)
          }), n(t).appendTo(e.$slide), n(t).is("video,audio") && (n(t).addClass("fancybox-video"), n(t).wrap("<div></div>"), e.contentType = "video", e.opts.width = e.opts.width || n(t).attr("width"), e.opts.height = e.opts.height || n(t).attr("height")), e.$content = e.$slide.children().filter("div,form,main,video,audio").first().addClass("fancybox-content"), e.$slide.addClass("fancybox-slide--" + e.contentType), this.afterLoad(e))
        },
        setError: function(e) {
          e.hasError = !0, e.$slide.trigger("onReset").removeClass("fancybox-slide--" + e.contentType).addClass("fancybox-slide--error"), e.contentType = "html", this.setContent(e, this.translate(e, e.opts.errorTpl)), e.pos === this.currPos && (this.isAnimating = !1)
        },
        showLoading: function(e) {
          var t = this;
          e = e || t.current, e && !e.$spinner && (e.$spinner = n(t.translate(t, t.opts.spinnerTpl)).appendTo(e.$slide))
        },
        hideLoading: function(e) {
          var t = this;
          e = e || t.current, e && e.$spinner && (e.$spinner.remove(), delete e.$spinner)
        },
        afterLoad: function(e) {
          var t = this;
          t.isClosing || (e.isLoading = !1, e.isLoaded = !0, t.trigger("afterLoad", e), t.hideLoading(e), e.pos === t.currPos && t.updateCursor(), !e.opts.smallBtn || e.$smallBtn && e.$smallBtn.length || (e.$smallBtn = n(t.translate(e, e.opts.btnTpl.smallBtn)).prependTo(e.$content)), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function(e) {
            return 2 == e.button && e.preventDefault(), !0
          }), "image" === e.type && n('<div class="fancybox-spaceball"></div>').appendTo(e.$content)), t.revealContent(e))
        },
        revealContent: function(e) {
          var t, r, o, a, s = this,
            l = e.$slide,
            c = !1,
            u = !1;
          return t = e.opts[s.firstRun ? "animationEffect" : "transitionEffect"], o = e.opts[s.firstRun ? "animationDuration" : "transitionDuration"], o = parseInt(e.forcedDuration === i ? o : e.forcedDuration, 10), e.pos === s.currPos && (e.isComplete ? t = !1 : s.isAnimating = !0), !e.isMoved && e.pos === s.currPos && o || (t = !1), "zoom" === t && (e.pos === s.currPos && o && "image" === e.type && !e.hasError && (u = s.getThumbPos(e)) ? c = s.getFitPos(e) : t = "fade"), "zoom" === t ? (c.scaleX = c.width / u.width, c.scaleY = c.height / u.height, a = e.opts.zoomOpacity, "auto" == a && (a = Math.abs(e.width / e.height - u.width / u.height) > .1), a && (u.opacity = .1, c.opacity = 1), n.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), u), d(e.$content), void n.fancybox.animate(e.$content, c, o, function() {
            s.isAnimating = !1, s.complete()
          })) : (s.updateSlide(e), t ? (n.fancybox.stop(l), r = "fancybox-animated fancybox-slide--" + (e.pos >= s.prevPos ? "next" : "previous") + " fancybox-fx-" + t, l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(r), e.$content.removeClass("fancybox-is-hidden"), d(l), void n.fancybox.animate(l, "fancybox-slide--current", o, function(t) {
            l.removeClass(r).removeAttr("style"), e.pos === s.currPos && s.complete()
          }, !0)) : (d(l), e.$content.removeClass("fancybox-is-hidden"), void(e.pos === s.currPos && s.complete())))
        },
        getThumbPos: function(i) {
          var r, o = this,
            a = !1,
            s = i.opts.$thumb,
            l = s && s.length && s[0].ownerDocument === t ? s.offset() : 0,
            c = function(t) {
              for (var i, r = t[0], o = r.getBoundingClientRect(), a = []; null !== r.parentElement;) "hidden" !== n(r.parentElement).css("overflow") && "auto" !== n(r.parentElement).css("overflow") || a.push(r.parentElement.getBoundingClientRect()), r = r.parentElement;
              return i = a.every(function(e) {
                var t = Math.min(o.right, e.right) - Math.max(o.left, e.left),
                  n = Math.min(o.bottom, e.bottom) - Math.max(o.top, e.top);
                return t > 0 && n > 0
              }), i && o.bottom > 0 && o.right > 0 && o.left < n(e).width() && o.top < n(e).height()
            };
          return l && c(s) && (r = o.$refs.stage.offset(), a = {
            top: l.top - r.top + parseFloat(s.css("border-top-width") || 0),
            left: l.left - r.left + parseFloat(s.css("border-left-width") || 0),
            width: s.width(),
            height: s.height(),
            scaleX: 1,
            scaleY: 1
          }), a
        },
        complete: function() {
          var e = this,
            i = e.current,
            r = {};
          !i.isMoved && i.isLoaded && (i.isComplete || (i.isComplete = !0, i.$slide.siblings().trigger("onReset"), e.preload("inline"), d(i.$slide), i.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function(t, i) {
            i.pos >= e.currPos - 1 && i.pos <= e.currPos + 1 ? r[i.pos] = i : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove())
          }), e.slides = r), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), i.$slide.find("video,audio").filter(":visible:first").trigger("play"), (n(t.activeElement).is("[disabled]") || i.opts.autoFocus && "image" != i.type && "iframe" !== i.type) && e.focus())
        },
        preload: function(e) {
          var t = this,
            n = t.slides[t.currPos + 1],
            i = t.slides[t.currPos - 1];
          n && n.type === e && t.loadSlide(n), i && i.type === e && t.loadSlide(i)
        },
        focus: function() {
          var e, t = this.current;
          this.isClosing || t && t.isComplete && t.$content && (e = t.$content.find("input[autofocus]:enabled:visible:first"), e.length || (e = t.$content.find("button,:input,[tabindex],a").filter(":enabled:visible:first")), e = e && e.length ? e : t.$content, e.trigger("focus"))
        },
        activate: function() {
          var e = this;
          n(".fancybox-container").each(function() {
            var t = n(this).data("FancyBox");
            t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
          }), e.isVisible = !0, (e.current || e.isIdle) && (e.update(), e.updateControls()), e.trigger("onActivate"), e.addEvents()
        },
        close: function(e, t) {
          var i, r, o, a, s, l, c, f = this,
            h = f.current,
            m = function() {
              f.cleanUp(e)
            };
          return !f.isClosing && (f.isClosing = !0, f.trigger("beforeClose", e) === !1 ? (f.isClosing = !1, u(function() {
            f.update()
          }), !1) : (f.removeEvents(), h.timouts && clearTimeout(h.timouts), o = h.$content, i = h.opts.animationEffect, r = n.isNumeric(t) ? t : i ? h.opts.animationDuration : 0, h.$slide.off(p).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), h.$slide.siblings().trigger("onReset").remove(), r && f.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), f.hideLoading(h), f.hideControls(), f.updateCursor(), "zoom" !== i || e !== !0 && o && r && "image" === h.type && !h.hasError && (c = f.getThumbPos(h)) || (i = "fade"), "zoom" === i ? (n.fancybox.stop(o), a = n.fancybox.getTranslate(o), l = {
            top: a.top,
            left: a.left,
            scaleX: a.width / c.width,
            scaleY: a.height / c.height,
            width: c.width,
            height: c.height
          }, s = h.opts.zoomOpacity, "auto" == s && (s = Math.abs(h.width / h.height - c.width / c.height) > .1), s && (c.opacity = 0), n.fancybox.setTranslate(o, l), d(o), n.fancybox.animate(o, c, r, m), !0) : (i && r ? e === !0 ? setTimeout(m, r) : n.fancybox.animate(h.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + i, r, m) : m(), !0)))
        },
        cleanUp: function(e) {
          var t, i = this,
            r = n("body");
          i.current.$slide.trigger("onReset"), i.$refs.container.empty().remove(), i.trigger("afterClose", e), i.$lastFocus && i.current.opts.backFocus && i.$lastFocus.trigger("focus"), i.current = null, t = n.fancybox.getInstance(), t ? t.activate() : (r.removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
        },
        trigger: function(e, t) {
          var i, r = Array.prototype.slice.call(arguments, 1),
            o = this,
            a = t && t.opts ? t : o.current;
          return a ? r.unshift(a) : a = o, r.unshift(o), n.isFunction(a.opts[e]) && (i = a.opts[e].apply(a, r)), i === !1 ? i : void("afterClose" !== e && o.$refs ? o.$refs.container.trigger(e + ".fb", r) : s.trigger(e + ".fb", r))
        },
        updateControls: function(e) {
          var t = this,
            n = t.current,
            i = n.index,
            r = n.opts.caption,
            o = t.$refs.container,
            a = t.$refs.caption;
          n.$slide.trigger("refresh"), t.$caption = r && r.length ? a.html(r) : null, t.isHiddenControls || t.isIdle || t.showControls(), o.find("[data-fancybox-count]").html(t.group.length), o.find("[data-fancybox-index]").html(i + 1), o.find("[data-fancybox-prev]").toggleClass("disabled", !n.opts.loop && i <= 0), o.find("[data-fancybox-next]").toggleClass("disabled", !n.opts.loop && i >= t.group.length - 1), "image" === n.type ? o.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : n.opts.toolbar && o.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
        },
        hideControls: function() {
          this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
        },
        showControls: function() {
          var e = this,
            t = e.current ? e.current.opts : e.opts,
            n = e.$refs.container;
          e.isHiddenControls = !1, e.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && e.group.length > 1)).toggleClass("fancybox-show-nav", !!(t.arrows && e.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal), e.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
        },
        toggleControls: function() {
          this.isHiddenControls ? this.showControls() : this.hideControls()
        }
      }), n.fancybox = {
        version: "3.3.5",
        defaults: o,
        getInstance: function(e) {
          var t = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
            i = Array.prototype.slice.call(arguments, 1);
          return t instanceof h && ("string" === n.type(e) ? t[e].apply(t, i) : "function" === n.type(e) && e.apply(t, i), t)
        },
        open: function(e, t, n) {
          return new h(e, t, n)
        },
        close: function(e) {
          var t = this.getInstance();
          t && (t.close(), e === !0 && this.close())
        },
        destroy: function() {
          this.close(!0), s.add("body").off("click.fb-start", "**")
        },
        isMobile: t.createTouch !== i && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        use3d: function() {
          var n = t.createElement("div");
          return e.getComputedStyle && e.getComputedStyle(n) && e.getComputedStyle(n).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11)
        }(),
        getTranslate: function(e) {
          var t;
          return !(!e || !e.length) && (t = e[0].getBoundingClientRect(), {
            top: t.top || 0,
            left: t.left || 0,
            width: t.width,
            height: t.height,
            opacity: parseFloat(e.css("opacity"))
          })
        },
        setTranslate: function(e, t) {
          var n = "",
            r = {};
          if (e && t) return t.left === i && t.top === i || (n = (t.left === i ? e.position().left : t.left) + "px, " + (t.top === i ? e.position().top : t.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), t.scaleX !== i && t.scaleY !== i && (n = (n.length ? n + " " : "") + "scale(" + t.scaleX + ", " + t.scaleY + ")"), n.length && (r.transform = n), t.opacity !== i && (r.opacity = t.opacity), t.width !== i && (r.width = t.width), t.height !== i && (r.height = t.height), e.css(r)
        },
        animate: function(e, t, r, o, a) {
          var s = !1;
          n.isFunction(r) && (o = r, r = null), n.isPlainObject(t) || e.removeAttr("style"), n.fancybox.stop(e), e.on(p, function(i) {
            (!i || !i.originalEvent || e.is(i.originalEvent.target) && "z-index" != i.originalEvent.propertyName) && (n.fancybox.stop(e), s && n.fancybox.setTranslate(e, s), n.isPlainObject(t) ? a === !1 && e.removeAttr("style") : a !== !0 && e.removeClass(t), n.isFunction(o) && o(i))
          }), n.isNumeric(r) && e.css("transition-duration", r + "ms"), n.isPlainObject(t) ? (t.scaleX !== i && t.scaleY !== i && (s = n.extend({}, t, {
            width: e.width() * t.scaleX,
            height: e.height() * t.scaleY,
            scaleX: 1,
            scaleY: 1
          }), delete t.width, delete t.height, e.parent().hasClass("fancybox-slide--image") && e.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(e, t)) : e.addClass(t), e.data("timer", setTimeout(function() {
            e.trigger("transitionend")
          }, r + 16))
        },
        stop: function(e) {
          e && e.length && (clearTimeout(e.data("timer")), e.off("transitionend").css("transition-duration", ""), e.parent().removeClass("fancybox-is-scaling"))
        }
      }, n.fn.fancybox = function(e) {
        var t;
        return e = e || {}, t = e.selector || !1, t ? n("body").off("click.fb-start", t).on("click.fb-start", t, {
          options: e
        }, r) : this.off("click.fb-start").on("click.fb-start", {
          items: this,
          options: e
        }, r), this
      }, s.on("click.fb-start", "[data-fancybox]", r), s.on("click.fb-start", "[data-trigger]", function(e) {
        r(e, {
          $target: n('[data-fancybox="' + n(e.currentTarget).attr("data-trigger") + '"]').eq(n(e.currentTarget).attr("data-index") || 0),
          $trigger: n(this)
        })
      })
    }
  }(window, document, window.jQuery || jQuery),
  function(e) {
    "use strict";
    var t = function(t, n, i) {
        if (t) return i = i || "", "object" === e.type(i) && (i = e.param(i, !0)), e.each(n, function(e, n) {
          t = t.replace("$" + e, n || "")
        }), i.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + i), t
      },
      n = {
        youtube: {
          matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1
          },
          paramPlace: 8,
          type: "iframe",
          url: "//www.youtube.com/embed/$4",
          thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
            api: 1
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2"
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function(e) {
            return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") + "&output=" + (e[12] && e[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
          }
        },
        gmap_search: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function(e) {
            return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
          }
        }
      };
    e(document).on("objectNeedsType.fb", function(i, r, o) {
      var a, s, l, c, u, p, d, f = o.src || "",
        h = !1;
      a = e.extend(!0, {}, n, o.opts.media), e.each(a, function(n, i) {
        if (l = f.match(i.matcher)) {
          if (h = i.type, d = n, p = {}, i.paramPlace && l[i.paramPlace]) {
            u = l[i.paramPlace], "?" == u[0] && (u = u.substring(1)), u = u.split("&");
            for (var r = 0; r < u.length; ++r) {
              var a = u[r].split("=", 2);
              2 == a.length && (p[a[0]] = decodeURIComponent(a[1].replace(/\+/g, " ")))
            }
          }
          return c = e.extend(!0, {}, i.params, o.opts[n], p), f = "function" === e.type(i.url) ? i.url.call(this, l, c, o) : t(i.url, l, c), s = "function" === e.type(i.thumb) ? i.thumb.call(this, l, c, o) : t(i.thumb, l), "youtube" === n ? f = f.replace(/&t=((\d+)m)?(\d+)s/, function(e, t, n, i) {
            return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
          }) : "vimeo" === n && (f = f.replace("&%23", "#")), !1
        }
      }), h ? (o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = s), "iframe" === h && (o.opts = e.extend(!0, o.opts, {
        iframe: {
          preload: !1,
          attr: {
            scrolling: "no"
          }
        }
      })), e.extend(o, {
        type: h,
        src: f,
        origSrc: o.src,
        contentSource: d,
        contentType: "image" === h ? "image" : "gmap_place" == d || "gmap_search" == d ? "map" : "video"
      })) : f && (o.type = o.opts.defaultType)
    })
  }(window.jQuery || jQuery),
  function(e, t, n) {
    "use strict";
    var i = function() {
        return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
          return e.setTimeout(t, 1e3 / 60)
        }
      }(),
      r = function() {
        return e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function(t) {
          e.clearTimeout(t)
        }
      }(),
      o = function(t) {
        var n = [];
        t = t.originalEvent || t || e.e, t = t.touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t];
        for (var i in t) t[i].pageX ? n.push({
          x: t[i].pageX,
          y: t[i].pageY
        }) : t[i].clientX && n.push({
          x: t[i].clientX,
          y: t[i].clientY
        });
        return n
      },
      a = function(e, t, n) {
        return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
      },
      s = function(e) {
        if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio') || n.isFunction(e.get(0).onclick) || e.data("selectable")) return !0;
        for (var t = 0, i = e[0].attributes, r = i.length; t < r; t++)
          if ("data-fancybox-" === i[t].nodeName.substr(0, 14)) return !0;
        return !1
      },
      l = function(t) {
        var n = e.getComputedStyle(t)["overflow-y"],
          i = e.getComputedStyle(t)["overflow-x"],
          r = ("scroll" === n || "auto" === n) && t.scrollHeight > t.clientHeight,
          o = ("scroll" === i || "auto" === i) && t.scrollWidth > t.clientWidth;
        return r || o
      },
      c = function(e) {
        for (var t = !1;;) {
          if (t = l(e.get(0))) break;
          if (e = e.parent(), !e.length || e.hasClass("fancybox-stage") || e.is("body")) break
        }
        return t
      },
      u = function(e) {
        var t = this;
        t.instance = e, t.$bg = e.$refs.bg, t.$stage = e.$refs.stage, t.$container = e.$refs.container, t.destroy(), t.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(t, "ontouchstart"))
      };
    u.prototype.destroy = function() {
      this.$container.off(".fb.touch")
    }, u.prototype.ontouchstart = function(i) {
      var r = this,
        l = n(i.target),
        u = r.instance,
        p = u.current,
        d = p.$content,
        f = "touchstart" == i.type;
      if (f && r.$container.off("mousedown.fb.touch"), (!i.originalEvent || 2 != i.originalEvent.button) && l.length && !s(l) && !s(l.parent()) && (l.is("img") || !(i.originalEvent.clientX > l[0].clientWidth + l.offset().left))) {
        if (!p || u.isAnimating || u.isClosing) return i.stopPropagation(), void i.preventDefault();
        if (r.realPoints = r.startPoints = o(i), r.startPoints.length) {
          if (i.stopPropagation(), r.startEvent = i, r.canTap = !0, r.$target = l, r.$content = d, r.opts = p.opts.touch, r.isPanning = !1, r.isSwiping = !1, r.isZooming = !1, r.isScrolling = !1, r.startTime = (new Date).getTime(), r.distanceX = r.distanceY = r.distance = 0, r.canvasWidth = Math.round(p.$slide[0].clientWidth), r.canvasHeight = Math.round(p.$slide[0].clientHeight), r.contentLastPos = null, r.contentStartPos = n.fancybox.getTranslate(r.$content) || {
              top: 0,
              left: 0
            }, r.sliderStartPos = r.sliderLastPos || n.fancybox.getTranslate(p.$slide), r.stagePos = n.fancybox.getTranslate(u.$refs.stage), r.sliderStartPos.top -= r.stagePos.top, r.sliderStartPos.left -= r.stagePos.left, r.contentStartPos.top -= r.stagePos.top, r.contentStartPos.left -= r.stagePos.left, n(t).off(".fb.touch").on(f ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(r, "ontouchend")).on(f ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(r, "ontouchmove")), n.fancybox.isMobile && t.addEventListener("scroll", r.onscroll, !0), !r.opts && !u.canPan() || !l.is(r.$stage) && !r.$stage.find(l).length) return void(l.is(".fancybox-image") && i.preventDefault());
          n.fancybox.isMobile && (c(l) || c(l.parent())) || i.preventDefault(), (1 === r.startPoints.length || p.hasError) && (r.instance.canPan() ? (n.fancybox.stop(r.$content), r.$content.css("transition-duration", ""), r.isPanning = !0) : r.isSwiping = !0, r.$container.addClass("fancybox-controls--isGrabbing")), 2 === r.startPoints.length && "image" === p.type && (p.isLoaded || p.$ghost) && (r.canTap = !1, r.isSwiping = !1, r.isPanning = !1, r.isZooming = !0, n.fancybox.stop(r.$content), r.$content.css("transition-duration", ""), r.centerPointStartX = .5 * (r.startPoints[0].x + r.startPoints[1].x) - n(e).scrollLeft(), r.centerPointStartY = .5 * (r.startPoints[0].y + r.startPoints[1].y) - n(e).scrollTop(), r.percentageOfImageAtPinchPointX = (r.centerPointStartX - r.contentStartPos.left) / r.contentStartPos.width, r.percentageOfImageAtPinchPointY = (r.centerPointStartY - r.contentStartPos.top) / r.contentStartPos.height, r.startDistanceBetweenFingers = a(r.startPoints[0], r.startPoints[1]))
        }
      }
    }, u.prototype.onscroll = function(e) {
      var n = this;
      n.isScrolling = !0, t.removeEventListener("scroll", n.onscroll, !0)
    }, u.prototype.ontouchmove = function(e) {
      var t = this,
        i = n(e.target);
      return void 0 !== e.originalEvent.buttons && 0 === e.originalEvent.buttons ? void t.ontouchend(e) : t.isScrolling || !i.is(t.$stage) && !t.$stage.find(i).length ? void(t.canTap = !1) : (t.newPoints = o(e), void((t.opts || t.instance.canPan()) && t.newPoints.length && t.newPoints.length && (t.isSwiping && t.isSwiping === !0 || e.preventDefault(), t.distanceX = a(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = a(t.newPoints[0], t.startPoints[0], "y"), t.distance = a(t.newPoints[0], t.startPoints[0]), t.distance > 0 && (t.isSwiping ? t.onSwipe(e) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))))
    }, u.prototype.onSwipe = function(t) {
      var o, a = this,
        s = a.isSwiping,
        l = a.sliderStartPos.left || 0;
      if (s !== !0) "x" == s && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? l += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? l -= Math.pow(-a.distanceX, .8) : l += a.distanceX), a.sliderLastPos = {
        top: "x" == s ? 0 : a.sliderStartPos.top + a.distanceY,
        left: l
      }, a.requestId && (r(a.requestId), a.requestId = null), a.requestId = i(function() {
        a.sliderLastPos && (n.each(a.instance.slides, function(e, t) {
          var i = t.pos - a.instance.currPos;
          n.fancybox.setTranslate(t.$slide, {
            top: a.sliderLastPos.top,
            left: a.sliderLastPos.left + i * a.canvasWidth + i * t.opts.gutter
          })
        }), a.$container.addClass("fancybox-is-sliding"))
      });
      else if (Math.abs(a.distance) > 10) {
        if (a.canTap = !1, a.instance.group.length < 2 && a.opts.vertical ? a.isSwiping = "y" : a.instance.isDragging || a.opts.vertical === !1 || "auto" === a.opts.vertical && n(e).width() > 800 ? a.isSwiping = "x" : (o = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = o > 45 && o < 135 ? "y" : "x"), a.canTap = !1, "y" === a.isSwiping && n.fancybox.isMobile && (c(a.$target) || c(a.$target.parent()))) return void(a.isScrolling = !0);
        a.instance.isDragging = a.isSwiping, a.startPoints = a.newPoints, n.each(a.instance.slides, function(e, t) {
          n.fancybox.stop(t.$slide), t.$slide.css("transition-duration", ""), t.inTransition = !1, t.pos === a.instance.current.pos && (a.sliderStartPos.left = n.fancybox.getTranslate(t.$slide).left - n.fancybox.getTranslate(a.instance.$refs.stage).left)
        }), a.instance.SlideShow && a.instance.SlideShow.isActive && a.instance.SlideShow.stop()
      }
    }, u.prototype.onPan = function() {
      var e = this;
      return a(e.newPoints[0], e.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? void(e.startPoints = e.newPoints) : (e.canTap = !1, e.contentLastPos = e.limitMovement(), e.requestId && (r(e.requestId), e.requestId = null), void(e.requestId = i(function() {
        n.fancybox.setTranslate(e.$content, e.contentLastPos)
      })))
    }, u.prototype.limitMovement = function() {
      var e, t, n, i, r, o, a = this,
        s = a.canvasWidth,
        l = a.canvasHeight,
        c = a.distanceX,
        u = a.distanceY,
        p = a.contentStartPos,
        d = p.left,
        f = p.top,
        h = p.width,
        m = p.height;
      return r = h > s ? d + c : d, o = f + u, e = Math.max(0, .5 * s - .5 * h), t = Math.max(0, .5 * l - .5 * m), n = Math.min(s - h, .5 * s - .5 * h), i = Math.min(l - m, .5 * l - .5 * m), c > 0 && r > e && (r = e - 1 + Math.pow(-e + d + c, .8) || 0), c < 0 && r < n && (r = n + 1 - Math.pow(n - d - c, .8) || 0), u > 0 && o > t && (o = t - 1 + Math.pow(-t + f + u, .8) || 0), u < 0 && o < i && (o = i + 1 - Math.pow(i - f - u, .8) || 0), {
        top: o,
        left: r
      }
    }, u.prototype.limitPosition = function(e, t, n, i) {
      var r = this,
        o = r.canvasWidth,
        a = r.canvasHeight;
      return n > o ? (e = e > 0 ? 0 : e, e = e < o - n ? o - n : e) : e = Math.max(0, o / 2 - n / 2), i > a ? (t = t > 0 ? 0 : t, t = t < a - i ? a - i : t) : t = Math.max(0, a / 2 - i / 2), {
        top: t,
        left: e
      }
    }, u.prototype.onZoom = function() {
      var t = this,
        o = t.contentStartPos,
        s = o.width,
        l = o.height,
        c = o.left,
        u = o.top,
        p = a(t.newPoints[0], t.newPoints[1]),
        d = p / t.startDistanceBetweenFingers,
        f = Math.floor(s * d),
        h = Math.floor(l * d),
        m = (s - f) * t.percentageOfImageAtPinchPointX,
        y = (l - h) * t.percentageOfImageAtPinchPointY,
        v = (t.newPoints[0].x + t.newPoints[1].x) / 2 - n(e).scrollLeft(),
        g = (t.newPoints[0].y + t.newPoints[1].y) / 2 - n(e).scrollTop(),
        b = v - t.centerPointStartX,
        x = g - t.centerPointStartY,
        _ = c + (m + b),
        w = u + (y + x),
        T = {
          top: w,
          left: _,
          scaleX: d,
          scaleY: d
        };
      t.canTap = !1, t.newWidth = f, t.newHeight = h, t.contentLastPos = T, t.requestId && (r(t.requestId), t.requestId = null), t.requestId = i(function() {
        n.fancybox.setTranslate(t.$content, t.contentLastPos)
      })
    }, u.prototype.ontouchend = function(e) {
      var i = this,
        a = Math.max((new Date).getTime() - i.startTime, 1),
        s = i.isSwiping,
        l = i.isPanning,
        c = i.isZooming,
        u = i.isScrolling;
      return i.endPoints = o(e), i.$container.removeClass("fancybox-controls--isGrabbing"), n(t).off(".fb.touch"), t.removeEventListener("scroll", i.onscroll, !0), i.requestId && (r(i.requestId), i.requestId = null), i.isSwiping = !1, i.isPanning = !1, i.isZooming = !1, i.isScrolling = !1, i.instance.isDragging = !1, i.canTap ? i.onTap(e) : (i.speed = 366, i.velocityX = i.distanceX / a * .5, i.velocityY = i.distanceY / a * .5, i.speedX = Math.max(.5 * i.speed, Math.min(1.5 * i.speed, 1 / Math.abs(i.velocityX) * i.speed)), void(l ? i.endPanning() : c ? i.endZooming() : i.endSwiping(s, u)))
    }, u.prototype.endSwiping = function(e, t) {
      var i = this,
        r = !1,
        o = i.instance.group.length;
      i.sliderLastPos = null, "y" == e && !t && Math.abs(i.distanceY) > 50 ? (n.fancybox.animate(i.instance.current.$slide, {
        top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY,
        opacity: 0
      }, 200), r = i.instance.close(!0, 200)) : "x" == e && i.distanceX > 50 && o > 1 ? r = i.instance.previous(i.speedX) : "x" == e && i.distanceX < -50 && o > 1 && (r = i.instance.next(i.speedX)), r !== !1 || "x" != e && "y" != e || (t || o < 2 ? i.instance.centerSlide(i.instance.current, 150) : i.instance.jumpTo(i.instance.current.index)), i.$container.removeClass("fancybox-is-sliding")
    }, u.prototype.endPanning = function() {
      var e, t, i, r = this;
      r.contentLastPos && (r.opts.momentum === !1 ? (e = r.contentLastPos.left, t = r.contentLastPos.top) : (e = r.contentLastPos.left + r.velocityX * r.speed, t = r.contentLastPos.top + r.velocityY * r.speed), i = r.limitPosition(e, t, r.contentStartPos.width, r.contentStartPos.height), i.width = r.contentStartPos.width, i.height = r.contentStartPos.height, n.fancybox.animate(r.$content, i, 330))
    }, u.prototype.endZooming = function() {
      var e, t, i, r, o = this,
        a = o.instance.current,
        s = o.newWidth,
        l = o.newHeight;
      o.contentLastPos && (e = o.contentLastPos.left, t = o.contentLastPos.top, r = {
        top: t,
        left: e,
        width: s,
        height: l,
        scaleX: 1,
        scaleY: 1
      }, n.fancybox.setTranslate(o.$content, r), s < o.canvasWidth && l < o.canvasHeight ? o.instance.scaleToFit(150) : s > a.width || l > a.height ? o.instance.scaleToActual(o.centerPointStartX, o.centerPointStartY, 150) : (i = o.limitPosition(e, t, s, l), n.fancybox.setTranslate(o.$content, n.fancybox.getTranslate(o.$content)), n.fancybox.animate(o.$content, i, 150)))
    }, u.prototype.onTap = function(t) {
      var i, r = this,
        a = n(t.target),
        s = r.instance,
        l = s.current,
        c = t && o(t) || r.startPoints,
        u = c[0] ? c[0].x - n(e).scrollLeft() - r.stagePos.left : 0,
        p = c[0] ? c[0].y - n(e).scrollTop() - r.stagePos.top : 0,
        d = function(e) {
          var i = l.opts[e];
          if (n.isFunction(i) && (i = i.apply(s, [l, t])), i) switch (i) {
            case "close":
              s.close(r.startEvent);
              break;
            case "toggleControls":
              s.toggleControls(!0);
              break;
            case "next":
              s.next();
              break;
            case "nextOrClose":
              s.group.length > 1 ? s.next() : s.close(r.startEvent);
              break;
            case "zoom":
              "image" == l.type && (l.isLoaded || l.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(u, p) : s.group.length < 2 && s.close(r.startEvent))
          }
        };
      if ((!t.originalEvent || 2 != t.originalEvent.button) && (a.is("img") || !(u > a[0].clientWidth + a.offset().left))) {
        if (a.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) i = "Outside";
        else if (a.is(".fancybox-slide")) i = "Slide";
        else {
          if (!s.current.$content || !s.current.$content.find(a).addBack().filter(a).length) return;
          i = "Content"
        }
        if (r.tapped) {
          if (clearTimeout(r.tapped), r.tapped = null, Math.abs(u - r.tapX) > 50 || Math.abs(p - r.tapY) > 50) return this;
          d("dblclick" + i)
        } else r.tapX = u, r.tapY = p, l.opts["dblclick" + i] && l.opts["dblclick" + i] !== l.opts["click" + i] ? r.tapped = setTimeout(function() {
          r.tapped = null, d("click" + i)
        }, 500) : d("click" + i);
        return this
      }
    }, n(t).on("onActivate.fb", function(e, t) {
      t && !t.Guestures && (t.Guestures = new u(t))
    })
  }(window, document, window.jQuery || jQuery),
  function(e, t) {
    "use strict";
    t.extend(!0, t.fancybox.defaults, {
      btnTpl: {
        slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
      },
      slideShow: {
        autoStart: !1,
        speed: 3e3
      }
    });
    var n = function(e) {
      this.instance = e, this.init()
    };
    t.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function() {
        var e = this;
        e.$button = e.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
          e.toggle()
        }), (e.instance.group.length < 2 || !e.instance.group[e.instance.currIndex].opts.slideShow) && e.$button.hide()
      },
      set: function(e) {
        var t = this;
        t.instance && t.instance.current && (e === !0 || t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function() {
          t.isActive && t.instance.jumpTo((t.instance.currIndex + 1) % t.instance.group.length)
        }, t.instance.current.opts.slideShow.speed) : (t.stop(), t.instance.idleSecondsCounter = 0, t.instance.showControls())
      },
      clear: function() {
        var e = this;
        clearTimeout(e.timer), e.timer = null
      },
      start: function() {
        var e = this,
          t = e.instance.current;
        t && (e.isActive = !0, e.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), e.set(!0))
      },
      stop: function() {
        var e = this,
          t = e.instance.current;
        e.clear(), e.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), e.isActive = !1
      },
      toggle: function() {
        var e = this;
        e.isActive ? e.stop() : e.start()
      }
    }), t(e).on({
      "onInit.fb": function(e, t) {
        t && !t.SlideShow && (t.SlideShow = new n(t))
      },
      "beforeShow.fb": function(e, t, n, i) {
        var r = t && t.SlideShow;
        i ? r && n.opts.slideShow.autoStart && r.start() : r && r.isActive && r.clear()
      },
      "afterShow.fb": function(e, t, n) {
        var i = t && t.SlideShow;
        i && i.isActive && i.set()
      },
      "afterKeydown.fb": function(n, i, r, o, a) {
        var s = i && i.SlideShow;
        !s || !r.opts.slideShow || 80 !== a && 32 !== a || t(e.activeElement).is("button,a,input") || (o.preventDefault(), s.toggle())
      },
      "beforeClose.fb onDeactivate.fb": function(e, t) {
        var n = t && t.SlideShow;
        n && n.stop()
      }
    }), t(e).on("visibilitychange", function() {
      var n = t.fancybox.getInstance(),
        i = n && n.SlideShow;
      i && i.isActive && (e.hidden ? i.clear() : i.set())
    })
  }(document, window.jQuery || jQuery),
  function(e, t) {
    "use strict";
    var n = function() {
      for (var t = [
          ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
          ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
          ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
          ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
          ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
        ], n = {}, i = 0; i < t.length; i++) {
        var r = t[i];
        if (r && r[1] in e) {
          for (var o = 0; o < r.length; o++) n[t[0][o]] = r[o];
          return n
        }
      }
      return !1
    }();
    if (!n) return void(t && t.fancybox && (t.fancybox.defaults.btnTpl.fullScreen = !1));
    var i = {
      request: function(t) {
        t = t || e.documentElement, t[n.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
      },
      exit: function() {
        e[n.exitFullscreen]()
      },
      toggle: function(t) {
        t = t || e.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
      },
      isFullscreen: function() {
        return Boolean(e[n.fullscreenElement])
      },
      enabled: function() {
        return Boolean(e[n.fullscreenEnabled])
      }
    };
    t.extend(!0, t.fancybox.defaults, {
      btnTpl: {
        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 v16 h22 v-16 h-22 v8" /></svg></button>'
      },
      fullScreen: {
        autoStart: !1
      }
    }), t(e).on({
      "onInit.fb": function(e, t) {
        var n;
        t && t.group[t.currIndex].opts.fullScreen ? (n = t.$refs.container, n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
          e.stopPropagation(), e.preventDefault(), i.toggle()
        }), t.opts.fullScreen && t.opts.fullScreen.autoStart === !0 && i.request(), t.FullScreen = i) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
      },
      "afterKeydown.fb": function(e, t, n, i, r) {
        t && t.FullScreen && 70 === r && (i.preventDefault(), t.FullScreen.toggle())
      },
      "beforeClose.fb": function(e, t) {
        t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit()
      }
    }), t(e).on(n.fullscreenchange, function() {
      var e = i.isFullscreen(),
        n = t.fancybox.getInstance();
      n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"), n.isAnimating = !1, n.update(!0, !0, 0)), n.trigger("onFullscreenChange", e), n.$refs.container.toggleClass("fancybox-is-fullscreen", e))
    })
  }(document, window.jQuery || jQuery),
  function(e, t) {
    "use strict";
    var n = "fancybox-thumbs",
      i = n + "-active",
      r = n + "-loading";
    t.fancybox.defaults = t.extend(!0, {
      btnTpl: {
        thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
      },
      thumbs: {
        autoStart: !1,
        hideOnClose: !0,
        parentEl: ".fancybox-container",
        axis: "y"
      }
    }, t.fancybox.defaults);
    var o = function(e) {
      this.init(e)
    };
    t.extend(o.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function(e) {
        var t, n, i = this;
        i.instance = e, e.Thumbs = i, i.opts = e.group[e.currIndex].opts.thumbs, t = e.group[0], t = t.opts.thumb || !(!t.opts.$thumb || !t.opts.$thumb.length) && t.opts.$thumb.attr("src"), e.group.length > 1 && (n = e.group[1], n = n.opts.thumb || !(!n.opts.$thumb || !n.opts.$thumb.length) && n.opts.$thumb.attr("src")), i.$button = e.$refs.toolbar.find("[data-fancybox-thumbs]"), i.opts && t && n && t && n ? (i.$button.show().on("click", function() {
          i.toggle()
        }), i.isActive = !0) : i.$button.hide()
      },
      create: function() {
        var e, i = this,
          o = i.instance,
          a = i.opts.parentEl,
          s = [];
        i.$grid || (i.$grid = t('<div class="' + n + " " + n + "-" + i.opts.axis + '"></div>').appendTo(o.$refs.container.find(a).addBack().filter(a)), i.$grid.on("click", "li", function() {
          o.jumpTo(t(this).attr("data-index"))
        })), i.$list || (i.$list = t("<ul>").appendTo(i.$grid)), t.each(o.group, function(t, n) {
          e = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null), e || "image" !== n.type || (e = n.src), s.push('<li data-index="' + t + '" tabindex="0" class="' + r + '"' + (e && e.length ? ' style="background-image:url(' + e + ')" />' : "") + "></li>")
        }), i.$list[0].innerHTML = s.join(""), "x" === i.opts.axis && i.$list.width(parseInt(i.$grid.css("padding-right"), 10) + o.group.length * i.$list.children().eq(0).outerWidth(!0))
      },
      focus: function(e) {
        var t, n, r = this,
          o = r.$list,
          a = r.$grid;
        r.instance.current && (t = o.children().removeClass(i).filter('[data-index="' + r.instance.current.index + '"]').addClass(i), n = t.position(), "y" === r.opts.axis && (n.top < 0 || n.top > o.height() - t.outerHeight()) ? o.stop().animate({
          scrollTop: o.scrollTop() + n.top
        }, e) : "x" === r.opts.axis && (n.left < a.scrollLeft() || n.left > a.scrollLeft() + (a.width() - t.outerWidth())) && o.parent().stop().animate({
          scrollLeft: n.left
        }, e))
      },
      update: function() {
        var e = this;
        e.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), e.isVisible ? (e.$grid || e.create(), e.instance.trigger("onThumbsShow"), e.focus(0)) : e.$grid && e.instance.trigger("onThumbsHide"), e.instance.update()
      },
      hide: function() {
        this.isVisible = !1, this.update()
      },
      show: function() {
        this.isVisible = !0, this.update()
      },
      toggle: function() {
        this.isVisible = !this.isVisible, this.update()
      }
    }), t(e).on({
      "onInit.fb": function(e, t) {
        var n;
        t && !t.Thumbs && (n = new o(t), n.isActive && n.opts.autoStart === !0 && n.show())
      },
      "beforeShow.fb": function(e, t, n, i) {
        var r = t && t.Thumbs;
        r && r.isVisible && r.focus(i ? 0 : 250)
      },
      "afterKeydown.fb": function(e, t, n, i, r) {
        var o = t && t.Thumbs;
        o && o.isActive && 71 === r && (i.preventDefault(), o.toggle())
      },
      "beforeClose.fb": function(e, t) {
        var n = t && t.Thumbs;
        n && n.isVisible && n.opts.hideOnClose !== !1 && n.$grid.hide()
      }
    })
  }(document, window.jQuery || jQuery),
  function(e, t) {
    "use strict";

    function n(e) {
      var t = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
      };
      return String(e).replace(/[&<>"'`=\/]/g, function(e) {
        return t[e]
      })
    }
    t.extend(!0, t.fancybox.defaults, {
      btnTpl: {
        share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
      },
      share: {
        url: function(e, t) {
          return !e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location
        },
        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'
      }
    }), t(e).on("click", "[data-fancybox-share]", function() {
      var e, i, r = t.fancybox.getInstance(),
        o = r.current || null;
      o && ("function" === t.type(o.opts.share.url) && (e = o.opts.share.url.apply(o, [r, o])), i = o.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === o.type ? encodeURIComponent(o.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g, n(e)).replace(/\{\{descr\}\}/g, r.$caption ? encodeURIComponent(r.$caption.text()) : ""), t.fancybox.open({
        src: r.translate(r, i),
        type: "html",
        opts: {
          animationEffect: !1,
          afterLoad: function(e, t) {
            r.$refs.container.one("beforeClose.fb", function() {
              e.close(null, 0)
            }), t.$content.find(".fancybox-share__links a").click(function() {
              return window.open(this.href, "Share", "width=550, height=450"), !1
            })
          }
        }
      }))
    })
  }(document, window.jQuery || jQuery),
  function(e, t, n) {
    "use strict";

    function i() {
      var e = t.location.hash.substr(1),
        n = e.split("-"),
        i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
        r = n.join("-");
      return {
        hash: e,
        index: i < 1 ? 1 : i,
        gallery: r
      }
    }

    function r(e) {
      var t;
      "" !== e.gallery && (t = n("[data-fancybox='" + n.escapeSelector(e.gallery) + "']").eq(e.index - 1).trigger("click.fb-start"));
    }

    function o(e) {
      var t, n;
      return !!e && (t = e.current ? e.current.opts : e.opts, n = t.hash || (t.$orig ? t.$orig.data("fancybox") : ""), "" !== n && n)
    }
    n.escapeSelector || (n.escapeSelector = function(e) {
      var t = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
        n = function(e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        };
      return (e + "").replace(t, n)
    }), n(function() {
      n.fancybox.defaults.hash !== !1 && (n(e).on({
        "onInit.fb": function(e, t) {
          var n, r;
          t.group[t.currIndex].opts.hash !== !1 && (n = i(), r = o(t), r && n.gallery && r == n.gallery && (t.currIndex = n.index - 1))
        },
        "beforeShow.fb": function(n, i, r, a) {
          var s;
          r && r.opts.hash !== !1 && (s = o(i), s && (i.currentHash = s + (i.group.length > 1 ? "-" + (r.index + 1) : ""), t.location.hash !== "#" + i.currentHash && (i.origHash || (i.origHash = t.location.hash), i.hashTimer && clearTimeout(i.hashTimer), i.hashTimer = setTimeout(function() {
            "replaceState" in t.history ? (t.history[a ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + i.currentHash), a && (i.hasCreatedHistory = !0)) : t.location.hash = i.currentHash, i.hashTimer = null
          }, 300))))
        },
        "beforeClose.fb": function(n, i, r) {
          var a;
          r.opts.hash !== !1 && (a = o(i), i.currentHash && i.hasCreatedHistory ? t.history.back() : i.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (i.origHash || "")) : t.location.hash = i.origHash), i.currentHash = null, clearTimeout(i.hashTimer))
        }
      }), n(t).on("hashchange.fb", function() {
        var e, t = i();
        n.each(n(".fancybox-container").get().reverse(), function(t, i) {
          var r = n(i).data("FancyBox");
          if (r.currentHash) return e = r, !1
        }), e ? !e.currentHash || e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && r(t)
      }), setTimeout(function() {
        n.fancybox.getInstance() || r(i())
      }, 50))
    })
  }(document, window, window.jQuery || jQuery),
  function(e, t) {
    "use strict";
    var n = (new Date).getTime();
    t(e).on({
      "onInit.fb": function(e, t, i) {
        t.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(e) {
          var i = t.current,
            r = (new Date).getTime();
          t.group.length < 2 || i.opts.wheel === !1 || "auto" === i.opts.wheel && "image" !== i.type || (e.preventDefault(), e.stopPropagation(), i.$slide.hasClass("fancybox-animated") || (e = e.originalEvent || e, r - n < 250 || (n = r, t[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())))
        })
      }
    })
  }(document, window.jQuery || jQuery),
  function(e, t) {
    function n() {
      function n(t) {
        var n = t || e.event,
          i = n.keyCode || n.which;
        if ([9, 13, 32, 27].indexOf(i) !== -1) {
          for (var r = n.target || n.srcElement, o = -1, a = 0; a < P.length; a++)
            if (r === P[a]) {
              o = a;
              break
            } 9 === i ? (r = o === -1 ? w : o === P.length - 1 ? P[0] : P[o + 1], D(n), r.focus(), s(r, p.confirmButtonColor)) : (r = 13 === i || 32 === i ? o === -1 ? w : void 0 : 27 !== i || T.hidden || "none" === T.style.display ? void 0 : T, void 0 !== r && M(r, n))
        }
      }

      function a(t) {
        var n = t || e.event,
          i = n.target || n.srcElement,
          r = n.relatedTarget,
          o = _(m, "visible");
        if (o) {
          var a = -1;
          if (null !== r) {
            for (var s = 0; s < P.length; s++)
              if (r === P[s]) {
                a = s;
                break
              } a === -1 && i.focus()
          } else h = i
        }
      }
      if (void 0 === arguments[0]) return e.console.error("sweetAlert expects at least 1 attribute!"), !1;
      var p = o({}, g);
      switch (typeof arguments[0]) {
        case "string":
          p.title = arguments[0], p.text = arguments[1] || "", p.type = arguments[2] || "";
          break;
        case "object":
          if (void 0 === arguments[0].title) return e.console.error('Missing "title" argument!'), !1;
          p.title = arguments[0].title, p.text = arguments[0].text || g.text, p.type = arguments[0].type || g.type, p.customClass = arguments[0].customClass || p.customClass, p.allowOutsideClick = arguments[0].allowOutsideClick || g.allowOutsideClick, p.showCancelButton = void 0 !== arguments[0].showCancelButton ? arguments[0].showCancelButton : g.showCancelButton, p.closeOnConfirm = void 0 !== arguments[0].closeOnConfirm ? arguments[0].closeOnConfirm : g.closeOnConfirm, p.closeOnCancel = void 0 !== arguments[0].closeOnCancel ? arguments[0].closeOnCancel : g.closeOnCancel, p.timer = arguments[0].timer || g.timer, p.confirmButtonText = g.showCancelButton ? "Confirm" : g.confirmButtonText, p.confirmButtonText = arguments[0].confirmButtonText || g.confirmButtonText, p.confirmButtonColor = arguments[0].confirmButtonColor || g.confirmButtonColor, p.cancelButtonText = arguments[0].cancelButtonText || g.cancelButtonText, p.imageUrl = arguments[0].imageUrl || g.imageUrl, p.imageSize = arguments[0].imageSize || g.imageSize, p.doneFunction = arguments[1] || null;
          break;
        default:
          return e.console.error('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]), !1
      }
      i(p), u(), l();
      for (var m = b(), y = function(t) {
          var n = t || e.event,
            i = n.target || n.srcElement,
            o = "confirm" === i.className,
            a = _(m, "visible"),
            s = p.doneFunction && "true" === m.getAttribute("data-has-done-function");
          switch (n.type) {
            case "mouseover":
              o && (i.style.backgroundColor = r(p.confirmButtonColor, -.04));
              break;
            case "mouseout":
              o && (i.style.backgroundColor = p.confirmButtonColor);
              break;
            case "mousedown":
              o && (i.style.backgroundColor = r(p.confirmButtonColor, -.14));
              break;
            case "mouseup":
              o && (i.style.backgroundColor = r(p.confirmButtonColor, -.04));
              break;
            case "focus":
              var l = m.querySelector("button.confirm"),
                u = m.querySelector("button.cancel");
              o ? u.style.boxShadow = "none" : l.style.boxShadow = "none";
              break;
            case "click":
              if (o && s && a) p.doneFunction(!0), p.closeOnConfirm && c();
              else if (s && a) {
                var d = String(p.doneFunction).replace(/\s/g, ""),
                  f = "function(" === d.substring(0, 9) && ")" !== d.substring(9, 10);
                f && p.doneFunction(!1), p.closeOnCancel && c()
              } else c()
          }
        }, v = m.querySelectorAll("button"), x = 0; x < v.length; x++) v[x].onclick = y, v[x].onmouseover = y, v[x].onmouseout = y, v[x].onmousedown = y, v[x].onfocus = y;
      d = t.onclick, t.onclick = function(t) {
        var n = t || e.event,
          i = n.target || n.srcElement,
          r = m === i,
          o = $(m, i),
          a = _(m, "visible"),
          s = "true" === m.getAttribute("data-allow-ouside-click");
        !r && !o && a && s && c()
      };
      var w = m.querySelector("button.confirm"),
        T = m.querySelector("button.cancel"),
        P = m.querySelectorAll("button:not([type=hidden])");
      f = e.onkeydown, e.onkeydown = n, w.onblur = a, T.onblur = a, e.onfocus = function() {
        e.setTimeout(function() {
          void 0 !== h && (h.focus(), h = void 0)
        }, 0)
      }
    }

    function i(t) {
      var n = b(),
        i = n.querySelector("h2"),
        r = n.querySelector("p"),
        o = n.querySelector("button.cancel"),
        a = n.querySelector("button.confirm");
      if (i.innerHTML = P(t.title).split("\n").join("<br>"), r.innerHTML = P(t.text || "").split("\n").join("<br>"), t.text && S(r), t.customClass && w(n, t.customClass), j(n.querySelectorAll(".icon")), t.type) {
        for (var l = !1, c = 0; c < v.length; c++)
          if (t.type === v[c]) {
            l = !0;
            break
          } if (!l) return e.console.error("Unknown alert type: " + t.type), !1;
        var u = n.querySelector(".icon." + t.type);
        switch (S(u), t.type) {
          case "success":
            w(u, "animate"), w(u.querySelector(".tip"), "animateSuccessTip"), w(u.querySelector(".long"), "animateSuccessLong");
            break;
          case "error":
            w(u, "animateErrorIcon"), w(u.querySelector(".x-mark"), "animateXMark");
            break;
          case "warning":
            w(u, "pulseWarning"), w(u.querySelector(".body"), "pulseWarningIns"), w(u.querySelector(".dot"), "pulseWarningIns")
        }
      }
      if (t.imageUrl) {
        var p = n.querySelector(".icon.custom");
        p.style.backgroundImage = "url(" + t.imageUrl + ")", S(p);
        var d = 80,
          f = 80;
        if (t.imageSize) {
          var h = t.imageSize.split("x")[0],
            m = t.imageSize.split("x")[1];
          h && m ? (d = h, f = m, p.css({
            width: h + "px",
            height: m + "px"
          })) : e.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + t.imageSize)
        }
        p.setAttribute("style", p.getAttribute("style") + "width:" + d + "px; height:" + f + "px")
      }
      n.setAttribute("data-has-cancel-button", t.showCancelButton), t.showCancelButton ? o.style.display = "inline-block" : j(o), t.cancelButtonText && (o.innerHTML = P(t.cancelButtonText)), t.confirmButtonText && (a.innerHTML = P(t.confirmButtonText)), a.style.backgroundColor = t.confirmButtonColor, s(a, t.confirmButtonColor), n.setAttribute("data-allow-ouside-click", t.allowOutsideClick);
      var y = !!t.doneFunction;
      n.setAttribute("data-has-done-function", y), n.setAttribute("data-timer", t.timer)
    }

    function r(e, t) {
      e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
      var n, i, r = "#";
      for (i = 0; i < 3; i++) n = parseInt(e.substr(2 * i, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), r += ("00" + n).substr(n.length);
      return r
    }

    function o(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      return e
    }

    function a(e) {
      var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
      return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
    }

    function s(e, t) {
      var n = a(t);
      e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
    }

    function l() {
      var e = b();
      E(x(), 10), S(e), w(e, "showSweetAlert"), T(e, "hideSweetAlert"), p = t.activeElement;
      var n = e.querySelector("button.confirm");
      n.focus(), setTimeout(function() {
        w(e, "visible")
      }, 500);
      var i = e.getAttribute("data-timer");
      "null" !== i && "" !== i && (e.timeout = setTimeout(function() {
        c()
      }, i))
    }

    function c() {
      var n = b();
      A(x(), 5), A(n, 5), T(n, "showSweetAlert"), w(n, "hideSweetAlert"), T(n, "visible");
      var i = n.querySelector(".icon.success");
      T(i, "animate"), T(i.querySelector(".tip"), "animateSuccessTip"), T(i.querySelector(".long"), "animateSuccessLong");
      var r = n.querySelector(".icon.error");
      T(r, "animateErrorIcon"), T(r.querySelector(".x-mark"), "animateXMark");
      var o = n.querySelector(".icon.warning");
      T(o, "pulseWarning"), T(o.querySelector(".body"), "pulseWarningIns"), T(o.querySelector(".dot"), "pulseWarningIns"), e.onkeydown = f, t.onclick = d, p && p.focus(), h = void 0, clearTimeout(n.timeout)
    }

    function u() {
      var e = b();
      e.style.marginTop = Y(b())
    }
    var p, d, f, h, m = ".sweet-alert",
      y = ".sweet-overlay",
      v = ["error", "warning", "info", "success"],
      g = {
        title: "",
        text: "",
        type: null,
        allowOutsideClick: !1,
        showCancelButton: !1,
        closeOnConfirm: !0,
        closeOnCancel: !0,
        confirmButtonText: "OK",
        confirmButtonColor: "#AEDEF4",
        cancelButtonText: "Cancel",
        imageUrl: null,
        imageSize: null,
        timer: null
      },
      b = function() {
        return t.querySelector(m)
      },
      x = function() {
        return t.querySelector(y)
      },
      _ = function(e, t) {
        return new RegExp(" " + t + " ").test(" " + e.className + " ")
      },
      w = function(e, t) {
        _(e, t) || (e.className += " " + t)
      },
      T = function(e, t) {
        var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
        if (_(e, t)) {
          for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " ");
          e.className = n.replace(/^\s+|\s+$/g, "")
        }
      },
      P = function(e) {
        var n = t.createElement("div");
        return n.appendChild(t.createTextNode(e)), n.innerHTML
      },
      k = function(e) {
        e.style.opacity = "", e.style.display = "block"
      },
      S = function(e) {
        if (e && !e.length) return k(e);
        for (var t = 0; t < e.length; ++t) k(e[t])
      },
      C = function(e) {
        e.style.opacity = "", e.style.display = "none"
      },
      j = function(e) {
        if (e && !e.length) return C(e);
        for (var t = 0; t < e.length; ++t) C(e[t])
      },
      $ = function(e, t) {
        for (var n = t.parentNode; null !== n;) {
          if (n === e) return !0;
          n = n.parentNode
        }
        return !1
      },
      Y = function(e) {
        e.style.left = "-9999px", e.style.display = "block";
        var t, n = e.clientHeight;
        return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt(n / 2 + t) + "px"
      },
      E = function(e, t) {
        if (+e.style.opacity < 1) {
          t = t || 16, e.style.opacity = 0, e.style.display = "block";
          var n = +new Date,
            i = function() {
              e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(i, t)
            };
          i()
        }
        e.style.display = "block"
      },
      A = function(e, t) {
        t = t || 16, e.style.opacity = 1;
        var n = +new Date,
          i = function() {
            e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, +e.style.opacity > 0 ? setTimeout(i, t) : e.style.display = "none"
          };
        i()
      },
      M = function(n) {
        if (MouseEvent) {
          var i = new MouseEvent("click", {
            view: e,
            bubbles: !1,
            cancelable: !0
          });
          n.dispatchEvent(i)
        } else if (t.createEvent) {
          var r = t.createEvent("MouseEvents");
          r.initEvent("click", !1, !1), n.dispatchEvent(r)
        } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
      },
      D = function(t) {
        "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
      };
    e.sweetAlertInitialize = function() {
        var e = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>',
          n = t.createElement("div");
        n.innerHTML = e, t.body.appendChild(n)
      }, e.sweetAlert = e.swal = function() {
        var e = arguments;
        if (null !== b()) n.apply(this, e);
        else var t = setInterval(function() {
          null !== b() && (clearInterval(t), n.apply(this, e))
        }, 100)
      }, e.swal.setDefaults = function(e) {
        if (!e) throw new Error("userParams is required");
        if ("object" != typeof e) throw new Error("userParams has to be a object");
        o(g, e)
      },
      function() {
        "complete" === t.readyState || "interactive" === t.readyState && t.body ? e.sweetAlertInitialize() : t.addEventListener ? t.addEventListener("DOMContentLoaded", function n() {
          t.removeEventListener("DOMContentLoaded", n, !1), e.sweetAlertInitialize()
        }, !1) : t.attachEvent && t.attachEvent("onreadystatechange", function i() {
          "complete" === t.readyState && (t.detachEvent("onreadystatechange", i), e.sweetAlertInitialize())
        })
      }()
  }(window, document),
  function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
      return e(t, document, window, navigator)
    }) : "object" == typeof exports ? e(require("jquery"), document, window, navigator) : e(jQuery, document, window, navigator)
  }(function(e, t, n, i, r) {
    "use strict";
    var o = 0,
      a = function() {
        var t, n = i.userAgent,
          r = /msie\s\d+/i;
        return n.search(r) > 0 && (t = r.exec(n).toString(), t = t.split(" ")[1], t < 9) && (e("html").addClass("lt-ie9"), !0)
      }();
    Function.prototype.bind || (Function.prototype.bind = function(e) {
      var t = this,
        n = [].slice;
      if ("function" != typeof t) throw new TypeError;
      var i = n.call(arguments, 1),
        r = function() {
          if (this instanceof r) {
            var o = function() {};
            o.prototype = t.prototype;
            var a = new o,
              s = t.apply(a, i.concat(n.call(arguments)));
            return Object(s) === s ? s : a
          }
          return t.apply(e, i.concat(n.call(arguments)))
        };
      return r
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
      var n;
      if (null == this) throw new TypeError('"this" is null or not defined');
      var i = Object(this),
        r = i.length >>> 0;
      if (0 === r) return -1;
      var o = +t || 0;
      if (Math.abs(o) === 1 / 0 && (o = 0), o >= r) return -1;
      for (n = Math.max(o >= 0 ? o : r - Math.abs(o), 0); n < r;) {
        if (n in i && i[n] === e) return n;
        n++
      }
      return -1
    });
    var s = '<span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>',
      l = '<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>',
      c = '<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>',
      u = '<span class="irs-disable-mask"></span>',
      p = function(i, o, a) {
        this.VERSION = "2.2.0", this.input = i, this.plugin_count = a, this.current_plugin = 0, this.calc_count = 0, this.update_tm = 0, this.old_from = 0, this.old_to = 0, this.old_min_interval = null, this.raf_id = null, this.dragging = !1, this.force_redraw = !1, this.no_diapason = !1, this.has_tab_index = !0, this.is_key = !1, this.is_update = !1, this.is_start = !0, this.is_finish = !1, this.is_active = !1, this.is_resize = !1, this.is_click = !1, o = o || {}, this.$cache = {
          win: e(n),
          body: e(t.body),
          input: e(i),
          cont: null,
          rs: null,
          min: null,
          max: null,
          from: null,
          to: null,
          single: null,
          bar: null,
          line: null,
          s_single: null,
          s_from: null,
          s_to: null,
          shad_single: null,
          shad_from: null,
          shad_to: null,
          edge: null,
          grid: null,
          grid_labels: []
        }, this.coords = {
          x_gap: 0,
          x_pointer: 0,
          w_rs: 0,
          w_rs_old: 0,
          w_handle: 0,
          p_gap: 0,
          p_gap_left: 0,
          p_gap_right: 0,
          p_step: 0,
          p_pointer: 0,
          p_handle: 0,
          p_single_fake: 0,
          p_single_real: 0,
          p_from_fake: 0,
          p_from_real: 0,
          p_to_fake: 0,
          p_to_real: 0,
          p_bar_x: 0,
          p_bar_w: 0,
          grid_gap: 0,
          big_num: 0,
          big: [],
          big_w: [],
          big_p: [],
          big_x: []
        }, this.labels = {
          w_min: 0,
          w_max: 0,
          w_from: 0,
          w_to: 0,
          w_single: 0,
          p_min: 0,
          p_max: 0,
          p_from_fake: 0,
          p_from_left: 0,
          p_to_fake: 0,
          p_to_left: 0,
          p_single_fake: 0,
          p_single_left: 0
        };
        var s, l, c, u = this.$cache.input,
          p = u.prop("value");
        s = {
          type: "single",
          min: 10,
          max: 100,
          from: null,
          to: null,
          step: 1,
          min_interval: 0,
          max_interval: 0,
          drag_interval: !1,
          values: [],
          p_values: [],
          from_fixed: !1,
          from_min: null,
          from_max: null,
          from_shadow: !1,
          to_fixed: !1,
          to_min: null,
          to_max: null,
          to_shadow: !1,
          prettify_enabled: !0,
          prettify_separator: " ",
          prettify: null,
          force_edges: !1,
          keyboard: !0,
          grid: !1,
          grid_margin: !0,
          grid_num: 4,
          grid_snap: !1,
          hide_min_max: !1,
          hide_from_to: !1,
          prefix: "",
          postfix: "",
          max_postfix: "",
          decorate_both: !0,
          values_separator: " — ",
          input_values_separator: ";",
          disable: !1,
          block: !1,
          extra_classes: "",
          scope: null,
          onStart: null,
          onChange: null,
          onFinish: null,
          onUpdate: null
        }, "INPUT" !== u[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", u[0]), l = {
          type: u.data("type"),
          min: u.data("min"),
          max: u.data("max"),
          from: u.data("from"),
          to: u.data("to"),
          step: u.data("step"),
          min_interval: u.data("minInterval"),
          max_interval: u.data("maxInterval"),
          drag_interval: u.data("dragInterval"),
          values: u.data("values"),
          from_fixed: u.data("fromFixed"),
          from_min: u.data("fromMin"),
          from_max: u.data("fromMax"),
          from_shadow: u.data("fromShadow"),
          to_fixed: u.data("toFixed"),
          to_min: u.data("toMin"),
          to_max: u.data("toMax"),
          to_shadow: u.data("toShadow"),
          prettify_enabled: u.data("prettifyEnabled"),
          prettify_separator: u.data("prettifySeparator"),
          force_edges: u.data("forceEdges"),
          keyboard: u.data("keyboard"),
          grid: u.data("grid"),
          grid_margin: u.data("gridMargin"),
          grid_num: u.data("gridNum"),
          grid_snap: u.data("gridSnap"),
          hide_min_max: u.data("hideMinMax"),
          hide_from_to: u.data("hideFromTo"),
          prefix: u.data("prefix"),
          postfix: u.data("postfix"),
          max_postfix: u.data("maxPostfix"),
          decorate_both: u.data("decorateBoth"),
          values_separator: u.data("valuesSeparator"),
          input_values_separator: u.data("inputValuesSeparator"),
          disable: u.data("disable"),
          block: u.data("block"),
          extra_classes: u.data("extraClasses")
        }, l.values = l.values && l.values.split(",");
        for (c in l) l.hasOwnProperty(c) && (l[c] !== r && "" !== l[c] || delete l[c]);
        p !== r && "" !== p && (p = p.split(l.input_values_separator || o.input_values_separator || ";"), p[0] && p[0] == +p[0] && (p[0] = +p[0]), p[1] && p[1] == +p[1] && (p[1] = +p[1]), o && o.values && o.values.length ? (s.from = p[0] && o.values.indexOf(p[0]), s.to = p[1] && o.values.indexOf(p[1])) : (s.from = p[0] && +p[0], s.to = p[1] && +p[1])), e.extend(s, o), e.extend(s, l), this.options = s, this.update_check = {}, this.validate(), this.result = {
          input: this.$cache.input,
          slider: null,
          min: this.options.min,
          max: this.options.max,
          from: this.options.from,
          from_percent: 0,
          from_value: null,
          to: this.options.to,
          to_percent: 0,
          to_value: null
        }, this.init()
      };
    p.prototype = {
        init: function(e) {
          this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), e ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene()
        },
        append: function() {
          var e = '<span class="irs js-irs-' + this.plugin_count + " " + this.options.extra_classes + '"></span>';
          this.$cache.input.before(e), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html(s), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append(l), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append(c), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
        },
        setTopHandler: function() {
          var e = this.options.min,
            t = this.options.max,
            n = this.options.from,
            i = this.options.to;
          n > e && i === t ? this.$cache.s_from.addClass("type_last") : i < t && this.$cache.s_to.addClass("type_last")
        },
        changeLevel: function(e) {
          switch (e) {
            case "single":
              this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
              break;
            case "from":
              this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
              break;
            case "to":
              this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
              break;
            case "both":
              this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
          }
        },
        appendDisableMask: function() {
          this.$cache.cont.append(u), this.$cache.cont.addClass("irs-disabled")
        },
        removeDisableMask: function() {
          this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled")
        },
        remove: function() {
          this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), a && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id)
        },
        bindEvents: function() {
          this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), a && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))))
        },
        pointerFocus: function(e) {
          if (!this.target) {
            var t, n;
            n = "single" === this.options.type ? this.$cache.single : this.$cache.from, t = n.offset().left, t += n.width() / 2 - 1, this.pointerClick("single", {
              preventDefault: function() {},
              pageX: t
            })
          }
        },
        pointerMove: function(e) {
          if (this.dragging) {
            var t = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            this.coords.x_pointer = t - this.coords.x_gap, this.calc()
          }
        },
        pointerUp: function(t) {
          this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, a && e("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (e.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(), this.dragging = !1)
        },
        pointerDown: function(t, n) {
          n.preventDefault();
          var i = n.pageX || n.originalEvent.touches && n.originalEvent.touches[0].pageX;
          2 !== n.button && ("both" === t && this.setTempMinInterval(), t || (t = this.target || "from"), this.current_plugin = this.plugin_count, this.target = t, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = i - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(t), a && e("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
        },
        pointerClick: function(e, t) {
          t.preventDefault();
          var n = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX;
          2 !== t.button && (this.current_plugin = this.plugin_count, this.target = e, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(n - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
        },
        key: function(e, t) {
          if (!(this.current_plugin !== this.plugin_count || t.altKey || t.ctrlKey || t.shiftKey || t.metaKey)) {
            switch (t.which) {
              case 83:
              case 65:
              case 40:
              case 37:
                t.preventDefault(), this.moveByKey(!1);
                break;
              case 87:
              case 68:
              case 38:
              case 39:
                t.preventDefault(), this.moveByKey(!0)
            }
            return !0
          }
        },
        moveByKey: function(e) {
          var t = this.coords.p_pointer,
            n = (this.options.max - this.options.min) / 100;
          n = this.options.step / n, e ? t += n : t -= n, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * t), this.is_key = !0, this.calc()
        },
        setMinMax: function() {
          if (this.options) {
            if (this.options.hide_min_max) return this.$cache.min[0].style.display = "none", void(this.$cache.max[0].style.display = "none");
            if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
            else {
              var e = this._prettify(this.options.min),
                t = this._prettify(this.options.max);
              this.result.min_pretty = e, this.result.max_pretty = t, this.$cache.min.html(this.decorate(e, this.options.min)), this.$cache.max.html(this.decorate(t, this.options.max))
            }
            this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)
          }
        },
        setTempMinInterval: function() {
          var e = this.result.to - this.result.from;
          null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = e
        },
        restoreOriginalMinInterval: function() {
          null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
        },
        calc: function(e) {
          if (this.options && (this.calc_count++, (10 === this.calc_count || e) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
            this.calcPointerPercent();
            var t = this.getHandleX();
            switch ("both" === this.target && (this.coords.p_gap = 0, t = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, t = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(t)), this.target) {
              case "base":
                var n = (this.options.max - this.options.min) / 100,
                  i = (this.result.from - this.options.min) / n,
                  r = (this.result.to - this.options.min) / n;
                this.coords.p_single_real = this.toFixed(i), this.coords.p_from_real = this.toFixed(i), this.coords.p_to_real = this.toFixed(r), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                break;
              case "single":
                if (this.options.from_fixed) break;
                this.coords.p_single_real = this.convertToRealPercent(t), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                break;
              case "from":
                if (this.options.from_fixed) break;
                this.coords.p_from_real = this.convertToRealPercent(t), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                break;
              case "to":
                if (this.options.to_fixed) break;
                this.coords.p_to_real = this.convertToRealPercent(t), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                break;
              case "both":
                if (this.options.from_fixed || this.options.to_fixed) break;
                t = this.toFixed(t + .001 * this.coords.p_handle),
                  this.coords.p_from_real = this.convertToRealPercent(t) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(t) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                break;
              case "both_one":
                if (this.options.from_fixed || this.options.to_fixed) break;
                var o = this.convertToRealPercent(t),
                  a = this.result.from_percent,
                  s = this.result.to_percent,
                  l = s - a,
                  c = l / 2,
                  u = o - c,
                  p = o + c;
                u < 0 && (u = 0, p = u + l), p > 100 && (p = 100, u = p - l), this.coords.p_from_real = this.calcWithStep(u), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(p), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
            }
            "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
          }
        },
        calcPointerPercent: function() {
          return this.coords.w_rs ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), void(this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100))) : void(this.coords.p_pointer = 0)
        },
        convertToRealPercent: function(e) {
          var t = 100 - this.coords.p_handle;
          return e / t * 100
        },
        convertToFakePercent: function(e) {
          var t = 100 - this.coords.p_handle;
          return e / 100 * t
        },
        getHandleX: function() {
          var e = 100 - this.coords.p_handle,
            t = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
          return t < 0 ? t = 0 : t > e && (t = e), t
        },
        calcHandlePercent: function() {
          "single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
        },
        chooseHandle: function(e) {
          if ("single" === this.options.type) return "single";
          var t = this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2;
          return e >= t ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
        },
        calcMinMax: function() {
          this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
        },
        calcLabels: function() {
          this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)))
        },
        updateScene: function() {
          this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
        },
        drawHandles: function() {
          this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%", this.$cache.single[0].style.left = this.labels.p_single_left + "%") : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%"), this.$cache.single[0].style.left = this.labels.p_single_left + "%"), this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1))
        },
        drawLabels: function() {
          if (this.options) {
            var e, t, n, i, r, o = this.options.values.length,
              a = this.options.p_values;
            if (!this.options.hide_from_to)
              if ("single" === this.options.type) o ? (e = this.decorate(a[this.result.from]), this.$cache.single.html(e)) : (i = this._prettify(this.result.from), e = this.decorate(i, this.result.from), this.$cache.single.html(e)), this.calcLabels(), this.labels.p_single_left < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible";
              else {
                o ? (this.options.decorate_both ? (e = this.decorate(a[this.result.from]), e += this.options.values_separator, e += this.decorate(a[this.result.to])) : e = this.decorate(a[this.result.from] + this.options.values_separator + a[this.result.to]), t = this.decorate(a[this.result.from]), n = this.decorate(a[this.result.to]), this.$cache.single.html(e), this.$cache.from.html(t), this.$cache.to.html(n)) : (i = this._prettify(this.result.from), r = this._prettify(this.result.to), this.options.decorate_both ? (e = this.decorate(i, this.result.from), e += this.options.values_separator, e += this.decorate(r, this.result.to)) : e = this.decorate(i + this.options.values_separator + r, this.result.to), t = this.decorate(i, this.result.from), n = this.decorate(r, this.result.to), this.$cache.single.html(e), this.$cache.from.html(t), this.$cache.to.html(n)), this.calcLabels();
                var s = Math.min(this.labels.p_single_left, this.labels.p_from_left),
                  l = this.labels.p_single_left + this.labels.p_single_fake,
                  c = this.labels.p_to_left + this.labels.p_to_fake,
                  u = Math.max(l, c);
                this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", u = c) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", u = Math.max(l, c))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), s < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", u > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible"
              }
          }
        },
        drawShadow: function() {
          var e, t, n, i, r = this.options,
            o = this.$cache,
            a = "number" == typeof r.from_min && !isNaN(r.from_min),
            s = "number" == typeof r.from_max && !isNaN(r.from_max),
            l = "number" == typeof r.to_min && !isNaN(r.to_min),
            c = "number" == typeof r.to_max && !isNaN(r.to_max);
          "single" === r.type ? r.from_shadow && (a || s) ? (e = this.convertToPercent(a ? r.from_min : r.min), t = this.convertToPercent(s ? r.from_max : r.max) - e, e = this.toFixed(e - this.coords.p_handle / 100 * e), t = this.toFixed(t - this.coords.p_handle / 100 * t), e += this.coords.p_handle / 2, o.shad_single[0].style.display = "block", o.shad_single[0].style.left = e + "%", o.shad_single[0].style.width = t + "%") : o.shad_single[0].style.display = "none" : (r.from_shadow && (a || s) ? (e = this.convertToPercent(a ? r.from_min : r.min), t = this.convertToPercent(s ? r.from_max : r.max) - e, e = this.toFixed(e - this.coords.p_handle / 100 * e), t = this.toFixed(t - this.coords.p_handle / 100 * t), e += this.coords.p_handle / 2, o.shad_from[0].style.display = "block", o.shad_from[0].style.left = e + "%", o.shad_from[0].style.width = t + "%") : o.shad_from[0].style.display = "none", r.to_shadow && (l || c) ? (n = this.convertToPercent(l ? r.to_min : r.min), i = this.convertToPercent(c ? r.to_max : r.max) - n, n = this.toFixed(n - this.coords.p_handle / 100 * n), i = this.toFixed(i - this.coords.p_handle / 100 * i), n += this.coords.p_handle / 2, o.shad_to[0].style.display = "block", o.shad_to[0].style.left = n + "%", o.shad_to[0].style.width = i + "%") : o.shad_to[0].style.display = "none")
        },
        writeToInput: function() {
          "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to))
        },
        callOnStart: function() {
          this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result))
        },
        callOnChange: function() {
          this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result))
        },
        callOnFinish: function() {
          this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result))
        },
        callOnUpdate: function() {
          this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result))
        },
        toggleInput: function() {
          this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index
        },
        convertToPercent: function(e, t) {
          var n, i, r = this.options.max - this.options.min,
            o = r / 100;
          return r ? (n = t ? e : e - this.options.min, i = n / o, this.toFixed(i)) : (this.no_diapason = !0, 0)
        },
        convertToValue: function(e) {
          var t, n, i = this.options.min,
            r = this.options.max,
            o = i.toString().split(".")[1],
            a = r.toString().split(".")[1],
            s = 0,
            l = 0;
          if (0 === e) return this.options.min;
          if (100 === e) return this.options.max;
          o && (t = o.length, s = t), a && (n = a.length, s = n), t && n && (s = t >= n ? t : n), i < 0 && (l = Math.abs(i), i = +(i + l).toFixed(s), r = +(r + l).toFixed(s));
          var c, u = (r - i) / 100 * e + i,
            p = this.options.step.toString().split(".")[1];
          return p ? u = +u.toFixed(p.length) : (u /= this.options.step, u *= this.options.step, u = +u.toFixed(0)), l && (u -= l), c = p ? +u.toFixed(p.length) : this.toFixed(u), c < this.options.min ? c = this.options.min : c > this.options.max && (c = this.options.max), c
        },
        calcWithStep: function(e) {
          var t = Math.round(e / this.coords.p_step) * this.coords.p_step;
          return t > 100 && (t = 100), 100 === e && (t = 100), this.toFixed(t)
        },
        checkMinInterval: function(e, t, n) {
          var i, r, o = this.options;
          return o.min_interval ? (i = this.convertToValue(e), r = this.convertToValue(t), "from" === n ? r - i < o.min_interval && (i = r - o.min_interval) : i - r < o.min_interval && (i = r + o.min_interval), this.convertToPercent(i)) : e
        },
        checkMaxInterval: function(e, t, n) {
          var i, r, o = this.options;
          return o.max_interval ? (i = this.convertToValue(e), r = this.convertToValue(t), "from" === n ? r - i > o.max_interval && (i = r - o.max_interval) : i - r > o.max_interval && (i = r + o.max_interval), this.convertToPercent(i)) : e
        },
        checkDiapason: function(e, t, n) {
          var i = this.convertToValue(e),
            r = this.options;
          return "number" != typeof t && (t = r.min), "number" != typeof n && (n = r.max), i < t && (i = t), i > n && (i = n), this.convertToPercent(i)
        },
        toFixed: function(e) {
          return e = e.toFixed(20), +e
        },
        _prettify: function(e) {
          return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(e) : this.prettify(e) : e
        },
        prettify: function(e) {
          var t = e.toString();
          return t.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
        },
        checkEdges: function(e, t) {
          return this.options.force_edges ? (e < 0 ? e = 0 : e > 100 - t && (e = 100 - t), this.toFixed(e)) : this.toFixed(e)
        },
        validate: function() {
          var e, t, n = this.options,
            i = this.result,
            r = n.values,
            o = r.length;
          if ("string" == typeof n.min && (n.min = +n.min), "string" == typeof n.max && (n.max = +n.max), "string" == typeof n.from && (n.from = +n.from), "string" == typeof n.to && (n.to = +n.to), "string" == typeof n.step && (n.step = +n.step), "string" == typeof n.from_min && (n.from_min = +n.from_min), "string" == typeof n.from_max && (n.from_max = +n.from_max), "string" == typeof n.to_min && (n.to_min = +n.to_min), "string" == typeof n.to_max && (n.to_max = +n.to_max), "string" == typeof n.grid_num && (n.grid_num = +n.grid_num), n.max < n.min && (n.max = n.min), o)
            for (n.p_values = [], n.min = 0, n.max = o - 1, n.step = 1, n.grid_num = n.max, n.grid_snap = !0, t = 0; t < o; t++) e = +r[t], isNaN(e) ? e = r[t] : (r[t] = e, e = this._prettify(e)), n.p_values.push(e);
          ("number" != typeof n.from || isNaN(n.from)) && (n.from = n.min), ("number" != typeof n.to || isNaN(n.to)) && (n.to = n.max), "single" === n.type ? (n.from < n.min && (n.from = n.min), n.from > n.max && (n.from = n.max)) : (n.from < n.min && (n.from = n.min), n.from > n.max && (n.from = n.max), n.to < n.min && (n.to = n.min), n.to > n.max && (n.to = n.max), this.update_check.from && (this.update_check.from !== n.from && n.from > n.to && (n.from = n.to), this.update_check.to !== n.to && n.to < n.from && (n.to = n.from)), n.from > n.to && (n.from = n.to), n.to < n.from && (n.to = n.from)), ("number" != typeof n.step || isNaN(n.step) || !n.step || n.step < 0) && (n.step = 1), "number" == typeof n.from_min && n.from < n.from_min && (n.from = n.from_min), "number" == typeof n.from_max && n.from > n.from_max && (n.from = n.from_max), "number" == typeof n.to_min && n.to < n.to_min && (n.to = n.to_min), "number" == typeof n.to_max && n.from > n.to_max && (n.to = n.to_max), i && (i.min !== n.min && (i.min = n.min), i.max !== n.max && (i.max = n.max), (i.from < i.min || i.from > i.max) && (i.from = n.from), (i.to < i.min || i.to > i.max) && (i.to = n.to)), ("number" != typeof n.min_interval || isNaN(n.min_interval) || !n.min_interval || n.min_interval < 0) && (n.min_interval = 0), ("number" != typeof n.max_interval || isNaN(n.max_interval) || !n.max_interval || n.max_interval < 0) && (n.max_interval = 0), n.min_interval && n.min_interval > n.max - n.min && (n.min_interval = n.max - n.min), n.max_interval && n.max_interval > n.max - n.min && (n.max_interval = n.max - n.min)
        },
        decorate: function(e, t) {
          var n = "",
            i = this.options;
          return i.prefix && (n += i.prefix), n += e, i.max_postfix && (i.values.length && e === i.p_values[i.max] ? (n += i.max_postfix, i.postfix && (n += " ")) : t === i.max && (n += i.max_postfix, i.postfix && (n += " "))), i.postfix && (n += i.postfix), n
        },
        updateFrom: function() {
          this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from])
        },
        updateTo: function() {
          this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to])
        },
        updateResult: function() {
          this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo()
        },
        appendGrid: function() {
          if (this.options.grid) {
            var e, t, n, i, r, o = this.options,
              a = o.max - o.min,
              s = o.grid_num,
              l = 0,
              c = 0,
              u = 4,
              p = 0,
              d = "";
            for (this.calcGridMargin(), o.grid_snap ? a > 50 ? (s = 50 / o.step, l = this.toFixed(o.step / .5)) : (s = a / o.step, l = this.toFixed(o.step / (a / 100))) : l = this.toFixed(100 / s), s > 4 && (u = 3), s > 7 && (u = 2), s > 14 && (u = 1), s > 28 && (u = 0), e = 0; e < s + 1; e++) {
              for (n = u, c = this.toFixed(l * e), c > 100 && (c = 100), this.coords.big[e] = c, i = (c - l * (e - 1)) / (n + 1), t = 1; t <= n && 0 !== c; t++) p = this.toFixed(c - i * t), d += '<span class="irs-grid-pol small" style="left: ' + p + '%"></span>';
              d += '<span class="irs-grid-pol" style="left: ' + c + '%"></span>', r = this.convertToValue(c), r = o.values.length ? o.p_values[r] : this._prettify(r), d += '<span class="irs-grid-text js-grid-text-' + e + '" style="left: ' + c + '%">' + r + "</span>"
            }
            this.coords.big_num = Math.ceil(s + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(d), this.cacheGridLabels()
          }
        },
        cacheGridLabels: function() {
          var e, t, n = this.coords.big_num;
          for (t = 0; t < n; t++) e = this.$cache.grid.find(".js-grid-text-" + t), this.$cache.grid_labels.push(e);
          this.calcGridLabels()
        },
        calcGridLabels: function() {
          var e, t, n = [],
            i = [],
            r = this.coords.big_num;
          for (e = 0; e < r; e++) this.coords.big_w[e] = this.$cache.grid_labels[e].outerWidth(!1), this.coords.big_p[e] = this.toFixed(this.coords.big_w[e] / this.coords.w_rs * 100), this.coords.big_x[e] = this.toFixed(this.coords.big_p[e] / 2), n[e] = this.toFixed(this.coords.big[e] - this.coords.big_x[e]), i[e] = this.toFixed(n[e] + this.coords.big_p[e]);
          for (this.options.force_edges && (n[0] < -this.coords.grid_gap && (n[0] = -this.coords.grid_gap, i[0] = this.toFixed(n[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), i[r - 1] > 100 + this.coords.grid_gap && (i[r - 1] = 100 + this.coords.grid_gap, n[r - 1] = this.toFixed(i[r - 1] - this.coords.big_p[r - 1]), this.coords.big_x[r - 1] = this.toFixed(this.coords.big_p[r - 1] - this.coords.grid_gap))), this.calcGridCollision(2, n, i), this.calcGridCollision(4, n, i), e = 0; e < r; e++) t = this.$cache.grid_labels[e][0], this.coords.big_x[e] !== Number.POSITIVE_INFINITY && (t.style.marginLeft = -this.coords.big_x[e] + "%")
        },
        calcGridCollision: function(e, t, n) {
          var i, r, o, a = this.coords.big_num;
          for (i = 0; i < a && (r = i + e / 2, !(r >= a)); i += e) o = this.$cache.grid_labels[r][0], n[i] <= t[r] ? o.style.visibility = "visible" : o.style.visibility = "hidden"
        },
        calcGridMargin: function() {
          this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && ("single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
        },
        update: function(t) {
          this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = e.extend(this.options, t), this.validate(), this.updateResult(t), this.toggleInput(), this.remove(), this.init(!0))
        },
        reset: function() {
          this.input && (this.updateResult(), this.update())
        },
        destroy: function() {
          this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), e.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null)
        }
      }, e.fn.ionRangeSlider = function(t) {
        return this.each(function() {
          e.data(this, "ionRangeSlider") || e.data(this, "ionRangeSlider", new p(this, t, (o++)))
        })
      },
      function() {
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !n.requestAnimationFrame; ++i) n.requestAnimationFrame = n[t[i] + "RequestAnimationFrame"], n.cancelAnimationFrame = n[t[i] + "CancelAnimationFrame"] || n[t[i] + "CancelRequestAnimationFrame"];
        n.requestAnimationFrame || (n.requestAnimationFrame = function(t, i) {
          var r = (new Date).getTime(),
            o = Math.max(0, 16 - (r - e)),
            a = n.setTimeout(function() {
              t(r + o)
            }, o);
          return e = r + o, a
        }), n.cancelAnimationFrame || (n.cancelAnimationFrame = function(e) {
          clearTimeout(e)
        })
      }()
  }),
  function(e) {
    "use strict";

    function t(e, t) {
      if (e.classList) e.classList.remove(t);
      else {
        for (var n = [], i = e.className.split(" "), r = 0; r < i.length; r++) i[r] !== t && n.push(i[r]);
        e.className = n.join(" ")
      }
    }

    function n(e, t) {
      this.options = t || {}, this.DOM = {}, this.DOM.el = e, this.DOM.stackItems = [], this.DOM.img = e.querySelector("img,svg"), this.DOM.stack = e.parentElement;
      for (var n = 0; n < 4; n++) {
        var i = document.createElement("div");
        if (i.className = "stack__deco", this.options.style)
          for (var r in this.options.style) i.style[r] = this.options.style[r];
        this.DOM.stack.insertBefore(i, e), this.DOM.stackItems.push(i)
      }
      this.DOM.stackItems.push(e), this.DOM.stack.className += " hover-stack " + (this.options.effectType || "") + (this.options.disableScale ? "" : " hover-stack-enable-scale"), this.DOM.el.className += " hover-stack-image-container", this.totalItems = this.DOM.stackItems.length
    }
    e.stackEffects = {}, e.stackEffects.getInstance = function(e, t, i) {
      var r = {
          AlphardFx: {
            duration: 1200,
            steps: []
          },
          AltairFx: {
            duration: 1e3,
            steps: []
          },
          CanopusFx: {
            duration: 1100,
            steps: []
          },
          CastorFx: {
            duration: 1e3,
            steps: []
          },
          DenebFx: {
            duration: 1100,
            steps: []
          },
          HamalFx: {
            duration: 1e3,
            steps: []
          },
          PolarisFx: {
            duration: 1e3,
            steps: []
          },
          PolluxFx: {
            duration: 1e3,
            steps: []
          },
          RigelFx: {
            duration: 900,
            steps: []
          },
          VegaFx: {
            duration: 900,
            steps: []
          }
        },
        o = new n(t, i);
      o.addEffectType(e);
      var a = r[e];
      return i.steps = a.steps, o.animeDuration = a.duration, o
    }, n.prototype.destroy = function() {
      for (var e = 0; e < this.DOM.stackItems.length; e++) this.DOM.stackItems[e] !== this.DOM.el && this.DOM.stackItems[e].remove();
      t(this.DOM.stack, "hover-stack"), t(this.DOM.stack, "hover-stack-run-animate"), t(this.DOM.stack, "hover-stack-enable-scale"), this.options && this.options.effectType && t(this.DOM.stack, this.options.effectType), t(this.DOM.el, "hover-stack-image-container"), this._mouseleaveFn && this._mouseenterFn && (this._mouseleaveFn(), this.DOM.stack.removeEventListener("mouseenter", this._mouseenterFn), this.DOM.stack.removeEventListener("mouseleave", this._mouseleaveFn))
    }, n.prototype._mouseenterFn = function() {
      this.DOM.stack.className += " hover-stack-run-animate"
    }, n.prototype._mouseleaveFn = function() {
      t(this.DOM.stack, "hover-stack-run-animate")
    }, n.prototype.addEffectType = function(e) {
      this.options = this.options || {}, this.options.effectType = e
    }
  }(window),
  function(e, t, n) {
    "use strict";

    function i(e) {
      var n = e.charAt(0).toUpperCase() + e.slice(1),
        i = t.createElement("div"),
        r = i.style,
        o = ["Webkit", "Moz", "ms", "O"];
      if (e in r) return e;
      for (var a = 0, s = o.length; a < s; a++) {
        var l = o[a] + n;
        if (l in r) return l
      }
      return null
    }

    function r(e, t, n) {
      return n ? (n *= t, t += n, e = t - n) : e = e || 0, parseInt(Math.random() * (t - e + 1) + e)
    }

    function o(e, t) {
      for (var n in t) e[n] = t[n];
      return e
    }

    function a(e, t) {
      for (var n in t) e.style[p[n] || n] = t[n]
    }

    function s(n) {
      function i() {
        var e = h.cloneNode();
        return "solid" != g.type && (e[p ? "src" : "innerHTML"] = "string" == typeof g.content ? g.content : g.content[0 == f ? 0 : Math.floor(Math.random() * f)]), e
      }

      function s() {
        var e, t = r(g.minSize, g.maxSize),
          n = -2 * t,
          o = r(0, x - t),
          s = r(5, 10) / 10,
          l = r(null, .8 * _, 1),
          c = r(-100, 100),
          u = _ + 2 * t,
          p = r(null, 20 * _, .2);
        v.length ? (e = v.shift(), e.dataset.type != g.type && (e = new i)) : e = new i;
        var d = {
          top: n + "px",
          left: o + "px",
          opacity: s,
          transform: "none",
          transition: p + "ms linear"
        };
        switch (g.type) {
          case "solid":
            d.width = d.height = t + "px";
            break;
          case "text":
            d["font-size"] = t + "px";
            break;
          case "image":
            d.width = t + "px"
        }
        a(e, d), b.appendChild(e), setTimeout(function() {
          a(e, {
            transform: "translate(" + c + "px," + u + "px) rotate(" + l + "deg)",
            opacity: g.fadeOut ? 0 : s
          })
        }, 100)
      }
      var p, f, h, m, y = this,
        v = [],
        g = u,
        b = t.createElement("div");
      y.config = function(e) {
        o(g, e), p = "image" == g.type, f = g.content.length, h = p ? new Image : t.createElement("div"), h.className = "snowflake snowflake-" + g.type, h.dataset.type = g.type
      }, y.config(n);
      var x = g.root.scrollWidth,
        _ = g.root.scrollHeight;
      return e.addEventListener("resize", function() {
        x = g.root.scrollWidth, _ = g.root.scrollHeight
      }, !1), y.playing = 0, y.play = function() {
        y.playing || (m = setInterval(s, g.interval), y.playing = 1)
      }, y.stop = function() {
        y.playing && (clearInterval(m), m = null, y.playing = 0)
      }, t.addEventListener(c, function() {
        t[l] ? y.stop() : y.play()
      }, !1), b.addEventListener(d, function(e) {
        var t = e.target || e.srcElement;
        b.removeChild(t), v.push(t)
      }, !1), b.className = "snowfield", g.root.firstChild ? g.root.insertBefore(b, g.root.firstChild) : g.root.appendChild(b), g.autoplay && y.play(), y
    }
    var l, c, u = {
        minSize: 10,
        maxSize: 30,
        type: "text",
        content: "&#10052",
        fadeOut: !0,
        autoplay: !0,
        interval: 200,
        root: t.body
      },
      p = {
        transform: i("transform"),
        transition: i("transition")
      },
      d = {
        WebkitTransition: "webkitTransitionEnd",
        OTransition: "oTransitionEnd",
        Moztransition: "transitionend",
        transition: "transitionend"
      } [p.transition];
    "undefined" != typeof t.hidden ? (l = "hidden", c = "visibilitychange") : "undefined" != typeof t.mozHidden ? (l = "mozHidden", c = "mozvisibilitychange") : "undefined" != typeof t.msHidden ? (l = "msHidden", c = "msvisibilitychange") : "undefined" != typeof t.webkitHidden && (l = "webkitHidden", c = "webkitvisibilitychange"), e.Snowfall = s
  }(window, document),
  function(e, t, n, i) {
    "use strict";
    e.fn.pagepiling = function(r) {
      function o(e) {
        e.addClass("pp-table").wrapInner('<div class="pp-tableCell" style="height:100%" />')
      }

      function a(t) {
        var n = e(".pp-section.active").index(".pp-section"),
          i = t.index(".pp-section");
        return n > i ? "up" : "down"
      }

      function s(t, n) {
        var i = {
          destination: t,
          animated: n,
          activeSection: e(".pp-section.active"),
          anchorLink: t.data("anchor"),
          sectionIndex: t.index(".pp-section"),
          toMove: t,
          yMovement: a(t),
          leavingSection: e(".pp-section.active").index(".pp-section") + 1
        };
        if (!i.activeSection.is(t)) {
          "undefined" == typeof i.animated && (i.animated = !0), "undefined" != typeof i.anchorLink && f(i.anchorLink, i.sectionIndex), i.destination.addClass("active").siblings().removeClass("active"), i.sectionsToMove = u(i), "down" === i.yMovement ? (i.translate3d = L(), i.scrolling = "-100%", U.css3 || i.sectionsToMove.each(function(t) {
            t != i.activeSection.index(".pp-section") && e(this).css(d(i.scrolling))
          }), i.animateSection = i.activeSection) : (i.translate3d = "translate3d(0px, 0px, 0px)", i.scrolling = "0", i.animateSection = t), e.isFunction(U.onLeave) && U.onLeave.call(this, i.leavingSection, i.sectionIndex + 1, i.yMovement), l(i), Q(i.anchorLink), I(i.anchorLink, i.sectionIndex), O = i.anchorLink;
          var r = (new Date).getTime();
          z = r
        }
      }

      function l(t) {
        U.css3 ? (b(t.animateSection, t.translate3d, t.animated), t.sectionsToMove.each(function() {
          b(e(this), t.translate3d, t.animated)
        }), setTimeout(function() {
          c(t)
        }, U.scrollingSpeed)) : (t.scrollOptions = d(t.scrolling), t.animated ? t.animateSection.animate(t.scrollOptions, U.scrollingSpeed, U.easing, function() {
          p(t), c(t)
        }) : (t.animateSection.css(d(t.scrolling)), setTimeout(function() {
          p(t), c(t)
        }, 400)))
      }

      function c(t) {
        e.isFunction(U.afterLoad) && U.afterLoad.call(this, t.anchorLink, t.sectionIndex + 1)
      }

      function u(t) {
        var n;
        return n = "down" === t.yMovement ? e(".pp-section").map(function(n) {
          if (n < t.destination.index(".pp-section")) return e(this)
        }) : e(".pp-section").map(function(n) {
          if (n > t.destination.index(".pp-section")) return e(this)
        })
      }

      function p(t) {
        "up" === t.yMovement && t.sectionsToMove.each(function(n) {
          e(this).css(d(t.scrolling))
        })
      }

      function d(e) {
        return "vertical" === U.direction ? {
          top: e
        } : {
          left: e
        }
      }

      function f(e, t) {
        U.anchors.length ? (location.hash = e, h(location.hash)) : h(String(t))
      }

      function h(t) {
        t = t.replace("#", ""), e("body")[0].className = e("body")[0].className.replace(/\b\s?pp-viewing-[^\s]+\b/g, ""), e("body").addClass("pp-viewing-" + t)
      }

      function m() {
        var i = n.location.hash.replace("#", ""),
          r = i,
          o = e(t).find('.pp-section[data-anchor="' + r + '"]');
        o.length > 0 && s(o, U.animateAnchor)
      }

      function y() {
        var e = (new Date).getTime();
        return e - z < X + U.scrollingSpeed
      }

      function v() {
        var i = n.location.hash.replace("#", "").split("/"),
          r = i[0];
        if (r.length && r && r !== O) {
          var o;
          o = isNaN(r) ? e(t).find('[data-anchor="' + r + '"]') : e(".pp-section").eq(r - 1), s(o)
        }
      }

      function g(e) {
        return {
          "-webkit-transform": e,
          "-moz-transform": e,
          "-ms-transform": e,
          transform: e
        }
      }

      function b(e, t, n) {
        e.toggleClass("pp-easing", n), e.css(g(t))
      }

      function x(t) {
        if (!y()) {
          t = n.event || t;
          var i = Math.max(-1, Math.min(1, t.wheelDelta || -t.deltaY || -t.detail)),
            r = e(".pp-section.active"),
            o = T(r);
          return i < 0 ? _("down", o) : _("up", o), !1
        }
      }

      function _(e, t) {
        var n, i;
        if ("down" == e ? (n = "bottom", i = N.moveSectionDown) : (n = "top", i = N.moveSectionUp), t.length > 0) {
          if (!w(n, t)) return !0;
          i()
        } else i()
      }

      function w(e, t) {
        return "top" === e ? !t.scrollTop() : "bottom" === e ? t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight : void 0
      }

      function T(e) {
        return e.filter(".pp-scrollable")
      }

      function P() {
        B.get(0).addEventListener ? (B.get(0).removeEventListener("mousewheel", x, !1), B.get(0).removeEventListener("wheel", x, !1)) : B.get(0).detachEvent("onmousewheel", x)
      }

      function k() {
        B.get(0).addEventListener ? (B.get(0).addEventListener("mousewheel", x, !1), B.get(0).addEventListener("wheel", x, !1)) : B.get(0).attachEvent("onmousewheel", x)
      }

      function S() {
        if (R) {
          var e = j();
          B.off("touchstart " + e.down).on("touchstart " + e.down, E), B.off("touchmove " + e.move).on("touchmove " + e.move, A)
        }
      }

      function C() {
        if (R) {
          var e = j();
          B.off("touchstart " + e.down), B.off("touchmove " + e.move)
        }
      }

      function j() {
        var e;
        return e = n.PointerEvent ? {
          down: "pointerdown",
          move: "pointermove",
          up: "pointerup"
        } : {
          down: "MSPointerDown",
          move: "MSPointerMove",
          up: "MSPointerUp"
        }
      }

      function $(e) {
        var t = new Array;
        return t.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, t
      }

      function Y(e) {
        return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
      }

      function E(e) {
        var t = e.originalEvent;
        if (Y(t)) {
          var n = $(t);
          H = n.y, q = n.x
        }
      }

      function A(t) {
        var n = t.originalEvent;
        if (!M(t.target) && Y(n)) {
          var i = e(".pp-section.active"),
            r = T(i);
          if (r.length || t.preventDefault(), !y()) {
            var o = $(n);
            W = o.y, V = o.x, "horizontal" === U.direction && Math.abs(q - V) > Math.abs(H - W) ? Math.abs(q - V) > B.width() / 100 * U.touchSensitivity && (q > V ? _("down", r) : V > q && _("up", r)) : Math.abs(H - W) > B.height() / 100 * U.touchSensitivity && (H > W ? _("down", r) : W > H && _("up", r))
          }
        }
      }

      function M(t, n) {
        n = n || 0;
        var i = e(t).parent();
        return !!(n < U.normalScrollElementTouchThreshold && i.is(U.normalScrollElements)) || n != U.normalScrollElementTouchThreshold && M(i, ++n)
      }

      function D() {
        e("body").append('<div id="pp-nav"><ul></ul></div>');
        var t = e("#pp-nav");
        t.css("color", U.navigation.textColor), t.addClass(U.navigation.position);
        for (var n = 0; n < e(".pp-section").length; n++) {
          var i = "";
          if (U.anchors.length && (i = U.anchors[n]), "undefined" !== U.navigation.tooltips) {
            var r = U.navigation.tooltips[n];
            "undefined" == typeof r && (r = "")
          }
          t.find("ul").append('<li data-tooltip="' + r + '"><a href="#' + i + '"><span></span></a></li>')
        }
        t.find("span").css("border-color", U.navigation.bulletsColor)
      }

      function I(t, n) {
        U.navigation && (e("#pp-nav").find(".active").removeClass("active"), t ? e("#pp-nav").find('a[href="#' + t + '"]').addClass("active") : e("#pp-nav").find("li").eq(n).find("a").addClass("active"))
      }

      function Q(t) {
        U.menu && (e(U.menu).find(".active").removeClass("active"), e(U.menu).find('[data-menuanchor="' + t + '"]').addClass("active"))
      }

      function F() {
        var e, r = t.createElement("p"),
          o = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform"
          };
        t.body.insertBefore(r, null);
        for (var a in o) r.style[a] !== i && (r.style[a] = "translate3d(1px,1px,1px)", e = n.getComputedStyle(r).getPropertyValue(o[a]));
        return t.body.removeChild(r), e !== i && e.length > 0 && "none" !== e
      }

      function L() {
        return "vertical" !== U.direction ? "translate3d(-100%, 0px, 0px)" : "translate3d(0px, -100%, 0px)"
      }
      var O, N = e.fn.pagepiling,
        B = e(this),
        z = 0,
        R = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
        H = 0,
        q = 0,
        W = 0,
        V = 0,
        X = 600,
        U = e.extend(!0, {
          direction: "vertical",
          menu: null,
          verticalCentered: !0,
          sectionsColor: [],
          anchors: [],
          scrollingSpeed: 700,
          easing: "easeInQuart",
          loopBottom: !1,
          loopTop: !1,
          css3: !0,
          navigation: {
            textColor: "#000",
            bulletsColor: "#000",
            position: "right",
            tooltips: []
          },
          normalScrollElements: null,
          normalScrollElementTouchThreshold: 5,
          touchSensitivity: 5,
          keyboardScrolling: !0,
          sectionSelector: ".section",
          animateAnchor: !1,
          afterLoad: null,
          onLeave: null,
          afterRender: null
        }, r);
      e.extend(e.easing, {
        easeInQuart: function(e, t, n, i, r) {
          return i * (t /= r) * t * t * t + n
        }
      }), N.setScrollingSpeed = function(e) {
        U.scrollingSpeed = e
      }, N.setMouseWheelScrolling = function(e) {
        e ? k() : P()
      }, N.setAllowScrolling = function(e) {
        e ? (N.setMouseWheelScrolling(!0), S()) : (N.setMouseWheelScrolling(!1), C())
      }, N.setKeyboardScrolling = function(e) {
        U.keyboardScrolling = e
      }, N.moveSectionUp = function() {
        var t = e(".pp-section.active").prev(".pp-section");
        !t.length && U.loopTop && (t = e(".pp-section").last()), t.length && s(t)
      }, N.moveSectionDown = function() {
        var t = e(".pp-section.active").next(".pp-section");
        !t.length && U.loopBottom && (t = e(".pp-section").first()), t.length && s(t)
      }, N.moveTo = function(n) {
        var i = "";
        i = isNaN(n) ? e(t).find('[data-anchor="' + n + '"]') : e(".pp-section").eq(n - 1), i.length > 0 && s(i)
      }, e(U.sectionSelector).each(function() {
        e(this).addClass("pp-section")
      }), U.css3 && (U.css3 = F()), e(B).css({
        overflow: "hidden",
        "-ms-touch-action": "none",
        "touch-action": "none"
      }), N.setAllowScrolling(!0), e.isEmptyObject(U.navigation) || D();
      var G = e(".pp-section").length;
      e(".pp-section").each(function(t) {
        e(this).data("data-index", t), e(this).css("z-index", G), t || 0 !== e(".pp-section.active").length || e(this).addClass("active"), "undefined" != typeof U.anchors[t] && e(this).attr("data-anchor", U.anchors[t]), "undefined" != typeof U.sectionsColor[t] && e(this).css("background-color", U.sectionsColor[t]), U.verticalCentered && !e(this).hasClass("pp-scrollable") && o(e(this)), G -= 1
      }).promise().done(function() {
        U.navigation && (e("#pp-nav").css("margin-top", "-" + e("#pp-nav").height() / 2 + "px"), e("#pp-nav").find("li").eq(e(".pp-section.active").index(".pp-section")).find("a").addClass("active")), e(n).on("load", function() {
          m()
        }), e.isFunction(U.afterRender) && U.afterRender.call(this)
      }), e(n).on("hashchange", v), e(t).keydown(function(t) {
        if (U.keyboardScrolling && !y()) switch (t.which) {
          case 38:
          case 33:
            N.moveSectionUp();
            break;
          case 40:
          case 34:
            N.moveSectionDown();
            break;
          case 36:
            N.moveTo(1);
            break;
          case 35:
            N.moveTo(e(".pp-section").length);
            break;
          case 37:
            N.moveSectionUp();
            break;
          case 39:
            N.moveSectionDown();
            break;
          default:
            return
        }
      }), U.normalScrollElements && (e(t).on("mouseenter", U.normalScrollElements, function() {
        N.setMouseWheelScrolling(!1)
      }), e(t).on("mouseleave", U.normalScrollElements, function() {
        N.setMouseWheelScrolling(!0)
      })), e(t).on("click touchstart", "#pp-nav a", function(t) {
        t.preventDefault();
        var n = e(this).parent().index();
        s(e(".pp-section").eq(n))
      }), e(t).on({
        mouseenter: function() {
          var t = e(this).data("tooltip");
          e('<div class="pp-tooltip ' + U.navigation.position + '">' + t + "</div>").hide().appendTo(e(this)).fadeIn(200)
        },
        mouseleave: function() {
          e(this).find(".pp-tooltip").fadeOut(200, function() {
            e(this).remove()
          })
        }
      }, "#pp-nav li")
    }
  }(jQuery, document, window),
  function(e, t) {
    "use strict";

    function n(e) {
      if ("function" != typeof e) throw new TypeError;
      document.resizeObservers.push(this), this.__callback = e, this.__observationTargets = [], this.__activeTargets = []
    }

    function i(e) {
      this.__target = e, this.__clientWidth = a(e), this.__clientHeight = s(e)
    }

    function r(e) {
      this.__target = e, this.__lastBroadcastWidth = a(e), this.__lastBroadcastHeight = s(e)
    }

    function o(e, t) {
      for (var n = 0; n < e.length; n += 1)
        if (e[n].target() === t) return n
    }

    function a(e) {
      return e.getBoundingClientRect().width
    }

    function s(e) {
      return e.getBoundingClientRect().height
    }

    function l() {
      for (var e = 0; e < document.resizeObservers.length; e += 1) document.resizeObservers[e].__populateActiveTargets()
    }

    function c() {
      for (var e = 0; e < document.resizeObservers.length; e++) {
        var t = document.resizeObservers[e];
        if (0 !== t.__activeTargets.length) {
          for (var n = [], r = 0; r < t.__activeTargets.length; r += 1) {
            var o = t.__activeTargets[r],
              l = new i(o.target());
            n.push(l), o.__lastBroadcastWidth = a(o.target()), o.__lastBroadcastHeight = s(o.target())
          }
          t.__callback(n), t.__activeTargets = []
        }
      }
    }

    function u() {
      l(), c(), p(u)
    }

    function p(t) {
      "undefined" == typeof e.requestAnimationFrame ? e.setTimeout(t, 1e3 / 60) : e.requestAnimationFrame(t)
    }
    "undefined" == typeof e.ResizeObserver && (document.resizeObservers = [], e.ResizeObserver = n, n.prototype.observe = function(t) {
      if (!(t instanceof e.Element)) throw new TypeError;
      var n = o(this.__observationTargets, t);
      if (!(n >= 0)) {
        var i = new r(t);
        this.__observationTargets.push(i)
      }
    }, n.prototype.unobserve = function(t) {
      if (!(t instanceof e.Element)) throw new TypeError;
      var n = o(this.__observationTargets, t);
      n !== -1 && this.__observationTargets.splice(n, 1)
    }, n.prototype.disconnect = function() {
      this.__observationTargets = [], this.__activeTargets = []
    }, n.prototype.__populateActiveTargets = function() {
      this.__activeTargets = [];
      for (var e in this.__observationTargets) {
        var t = this.__observationTargets[e];
        t.isActive() && this.__activeTargets.push(t)
      }
    }, i.target = function() {
      return this.__target
    }, i.clientWidth = function() {
      return this.__clientWidth()
    }, i.clientHeight = function() {
      return this.__clientHeight()
    }, r.prototype.target = function() {
      return this.__target
    }, r.prototype.lastBroadcastWidth = function() {
      return this.__lastBroadcastWidth
    }, r.prototype.lastBroadcastHeight = function() {
      return this.__lastBroadcastHeight
    }, r.prototype.isActive = function() {
      return a(this.__target) !== this.lastBroadcastWidth() || s(this.__target) !== this.lastBroadcastHeight()
    }, p(u))
  }(window, document),
  function(e) {
    function t(e, t) {
      for (var n in t) t[n] && t[n].constructor && t[n].constructor === Object ? (e[n] = e[n] || {}, arguments.callee(e[n], t[n])) : e[n] = t[n];
      return e
    }

    function n(e) {
      var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      e = e.replace(t, function(e, t, n, i) {
        return t + t + n + n + i + i
      });
      var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
      return n ? {
        r: parseInt(n[1], 16),
        g: parseInt(n[2], 16),
        b: parseInt(n[3], 16)
      } : null
    }

    function i(e, t, n) {
      return Math.min(Math.max(e, t), n)
    }

    function r(e, t) {
      return t.indexOf(e) > -1
    }
    var o = function(o, c) {
        var u = l.getDirectChild(o, ".particles-js-canvas-el");
        this.pJS = {
          canvas: {
            el: u,
            w: o.clientWidth,
            h: o.clientHeight,
            observers: []
          },
          particles: {
            number: {
              value: 400,
              density: {
                enable: !0,
                value_area: 800
              }
            },
            color: {
              value: "#fff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#ff0000"
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: "",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 1,
              random: !1,
              anim: {
                enable: !1,
                speed: 2,
                opacity_min: 0,
                sync: !1
              }
            },
            size: {
              value: 20,
              random: !1,
              anim: {
                enable: !1,
                speed: 20,
                size_min: 0,
                sync: !1
              }
            },
            line_linked: {
              enable: !0,
              distance: 100,
              color: "#fff",
              opacity: 1,
              width: 1
            },
            move: {
              enable: !0,
              speed: 2,
              direction: "none",
              random: !1,
              straight: !1,
              out_mode: "out",
              bounce: !1,
              attract: {
                enable: !1,
                rotateX: 3e3,
                rotateY: 3e3
              }
            },
            array: []
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: !1,
                mode: "grab"
              },
              onclick: {
                enable: !1,
                mode: "push"
              },
              resize: !0,
              resizeElement: !0
            },
            modes: {
              grab: {
                distance: 100,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 200,
                size: 80,
                duration: .4
              },
              repulse: {
                distance: 200,
                duration: .4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            },
            mouse: {}
          },
          retina_detect: !1,
          fn: {
            interact: {},
            modes: {},
            vendors: {}
          },
          tmp: {}
        };
        var p = this.pJS;
        c && t(p, c), p.tmp.obj = {
          size_value: p.particles.size.value,
          size_anim_speed: p.particles.size.anim.speed,
          move_speed: p.particles.move.speed,
          line_linked_distance: p.particles.line_linked.distance,
          line_linked_width: p.particles.line_linked.width,
          mode_grab_distance: p.interactivity.modes.grab.distance,
          mode_bubble_distance: p.interactivity.modes.bubble.distance,
          mode_bubble_size: p.interactivity.modes.bubble.size,
          mode_repulse_distance: p.interactivity.modes.repulse.distance
        }, p.fn.retinaInit = function() {
          p.retina_detect && e.devicePixelRatio > 1 ? (p.canvas.pxratio = e.devicePixelRatio, p.tmp.retina = !0) : (p.canvas.pxratio = 1, p.tmp.retina = !1), p.canvas.w = p.canvas.w * p.canvas.pxratio, p.canvas.h = p.canvas.h * p.canvas.pxratio, p.particles.size.value = p.tmp.obj.size_value * p.canvas.pxratio, p.particles.size.anim.speed = p.tmp.obj.size_anim_speed * p.canvas.pxratio, p.particles.move.speed = p.tmp.obj.move_speed * p.canvas.pxratio, p.particles.line_linked.distance = p.tmp.obj.line_linked_distance * p.canvas.pxratio, p.interactivity.modes.grab.distance = p.tmp.obj.mode_grab_distance * p.canvas.pxratio, p.interactivity.modes.bubble.distance = p.tmp.obj.mode_bubble_distance * p.canvas.pxratio, p.particles.line_linked.width = p.tmp.obj.line_linked_width * p.canvas.pxratio, p.interactivity.modes.bubble.size = p.tmp.obj.mode_bubble_size * p.canvas.pxratio, p.interactivity.modes.repulse.distance = p.tmp.obj.mode_repulse_distance * p.canvas.pxratio
        }, p.fn.canvasInit = function() {
          p.canvas.ctx = p.canvas.el.getContext("2d")
        }, p.fn.resize = function(e) {
          p.fn.resize.timeoutID && clearTimeout(p.fn.resize.timeoutID);
          var t = o.clientWidth,
            n = o.clientHeight;
          p.fn.resize.timeoutID = setTimeout(function() {
            p.canvas.w = t, p.canvas.h = n, p.tmp.retina && (p.canvas.w *= p.canvas.pxratio, p.canvas.h *= p.canvas.pxratio), p.canvas.el.width = p.canvas.w, p.canvas.el.height = p.canvas.h, p.particles.move.enable || (p.fn.particlesEmpty(), p.fn.particlesCreate(), p.fn.particlesDraw(), p.fn.vendors.densityAutoParticles()), p.fn.vendors.densityAutoParticles(), delete p.fn.resize.timeoutID
          }, e || 200)
        }, p.fn.canvasSize = function() {
          p.canvas.el.width = o.clientWidth, p.canvas.el.height = o.clientHeight, p && p.interactivity.events.resize && e.addEventListener("resize", function() {
            p.fn.resize()
          })
        }, p.fn.canvasResize = function() {
          function e() {
            var e = o.clientWidth,
              i = o.clientHeight,
              r = t !== e || n !== i;
            r && (t = e, n = i, 0 !== e && 0 !== i && p.fn.resize())
          }
          if (p && !p.interactivity.events.resizeElement) return p.canvas.el.style.width = "100%", void(p.canvas.el.style.height = "100%");
          var t = o.clientWidth,
            n = o.clientHeight,
            i = new ResizeObserver(e);
          i.observe(o), p.canvas.observers.push(i)
        }, p.fn.canvasPaint = function() {
          p.canvas.ctx.fillRect(0, 0, p.canvas.w, p.canvas.h)
        }, p.fn.canvasClear = function() {
          p.canvas.ctx.clearRect(0, 0, p.canvas.w, p.canvas.h)
        }, p.fn.particle = function(e, t, i) {
          if (this.radius = (p.particles.size.random ? Math.random() : 1) * p.particles.size.value, p.particles.size.anim.enable && (this.size_status = !1, this.vs = p.particles.size.anim.speed / 100, p.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = i ? i.x : Math.random() * p.canvas.w, this.y = i ? i.y : Math.random() * p.canvas.h, this.x > p.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > p.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), p.particles.move.bounce && p.fn.vendors.checkOverlap(this, i), this.color = {}, "object" == typeof e.value)
            if (e.value instanceof Array) {
              var r = e.value[Math.floor(Math.random() * p.particles.color.value.length)];
              this.color.rgb = n(r)
            } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
              r: e.value.r,
              g: e.value.g,
              b: e.value.b
            }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
              h: e.value.h,
              s: e.value.s,
              l: e.value.l
            });
          else "random" == e.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
          } : "string" == typeof e.value && (this.color = e, this.color.rgb = n(this.color.value));
          this.opacity = (p.particles.opacity.random ? Math.random() : 1) * p.particles.opacity.value, p.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = p.particles.opacity.anim.speed / 100, p.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
          var o = {};
          switch (p.particles.move.direction) {
            case "top":
              o = {
                x: 0,
                y: -1
              };
              break;
            case "top-right":
              o = {
                x: .5,
                y: -.5
              };
              break;
            case "right":
              o = {
                x: 1,
                y: -0
              };
              break;
            case "bottom-right":
              o = {
                x: .5,
                y: .5
              };
              break;
            case "bottom":
              o = {
                x: 0,
                y: 1
              };
              break;
            case "bottom-left":
              o = {
                x: -.5,
                y: 1
              };
              break;
            case "left":
              o = {
                x: -1,
                y: 0
              };
              break;
            case "top-left":
              o = {
                x: -.5,
                y: -.5
              };
              break;
            default:
              o = {
                x: 0,
                y: 0
              }
          }
          p.particles.move.straight ? (this.vx = o.x, this.vy = o.y, p.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = o.x + Math.random() - .5, this.vy = o.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
          var a = p.particles.shape.type;
          if ("object" == typeof a) {
            if (a instanceof Array) {
              var s = a[Math.floor(Math.random() * a.length)];
              this.shape = s
            }
          } else this.shape = a;
          if ("image" == this.shape) {
            var l = p.particles.shape;
            this.img = {
              src: l.image.src,
              ratio: l.image.width / l.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == p.tmp.img_type && void 0 != p.tmp.source_svg && (p.fn.vendors.createSvgImg(this), p.tmp.pushing && (this.img.loaded = !1))
          }
        }, p.fn.particle.prototype.draw = function() {
          function e() {
            p.canvas.ctx.drawImage(o, t.x - n, t.y - n, 2 * n, 2 * n / t.img.ratio)
          }
          var t = this;
          if (void 0 != t.radius_bubble) var n = t.radius_bubble;
          else var n = t.radius;
          if (void 0 != t.opacity_bubble) var i = t.opacity_bubble;
          else var i = t.opacity;
          if (t.color.rgb) var r = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + i + ")";
          else var r = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + i + ")";
          switch (p.canvas.ctx.fillStyle = r, p.canvas.ctx.beginPath(), t.shape) {
            case "circle":
              p.canvas.ctx.arc(t.x, t.y, n, 0, 2 * Math.PI, !1);
              break;
            case "edge":
              p.canvas.ctx.rect(t.x - n, t.y - n, 2 * n, 2 * n);
              break;
            case "triangle":
              p.fn.vendors.drawShape(p.canvas.ctx, t.x - n, t.y + n / 1.66, 2 * n, 3, 2);
              break;
            case "polygon":
              p.fn.vendors.drawShape(p.canvas.ctx, t.x - n / (p.particles.shape.polygon.nb_sides / 3.5), t.y - n / .76, 2.66 * n / (p.particles.shape.polygon.nb_sides / 3), p.particles.shape.polygon.nb_sides, 1);
              break;
            case "star":
              p.fn.vendors.drawShape(p.canvas.ctx, t.x - 2 * n / (p.particles.shape.polygon.nb_sides / 4), t.y - n / 1.52, 2 * n * 2.66 / (p.particles.shape.polygon.nb_sides / 3), p.particles.shape.polygon.nb_sides, 2);
              break;
            case "image":
              if ("svg" == p.tmp.img_type) var o = t.img.obj;
              else var o = p.tmp.img_obj;
              o && e()
          }
          p.canvas.ctx.closePath(), p.particles.shape.stroke.width > 0 && (p.canvas.ctx.strokeStyle = p.particles.shape.stroke.color, p.canvas.ctx.lineWidth = p.particles.shape.stroke.width, p.canvas.ctx.stroke()), p.canvas.ctx.fill()
        }, p.fn.particlesCreate = function() {
          for (var e = 0; e < p.particles.number.value; e++) p.particles.array.push(new p.fn.particle(p.particles.color, p.particles.opacity.value))
        }, p.fn.particlesUpdate = function() {
          for (var e = 0; e < p.particles.array.length; e++) {
            var t = p.particles.array[e];
            if (p.particles.move.enable) {
              var n = p.particles.move.speed / 2;
              t.x += t.vx * n, t.y += t.vy * n
            }
            if (p.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= p.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= p.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), p.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= p.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= p.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == p.particles.move.out_mode) var i = {
              x_left: t.radius,
              x_right: p.canvas.w,
              y_top: t.radius,
              y_bottom: p.canvas.h
            };
            else var i = {
              x_left: -t.radius,
              x_right: p.canvas.w + t.radius,
              y_top: -t.radius,
              y_bottom: p.canvas.h + t.radius
            };
            switch (t.x - t.radius > p.canvas.w ? (t.x = i.x_left, t.y = Math.random() * p.canvas.h) : t.x + t.radius < 0 && (t.x = i.x_right, t.y = Math.random() * p.canvas.h), t.y - t.radius > p.canvas.h ? (t.y = i.y_top, t.x = Math.random() * p.canvas.w) : t.y + t.radius < 0 && (t.y = i.y_bottom, t.x = Math.random() * p.canvas.w), p.particles.move.out_mode) {
              case "bounce":
                t.x + t.radius > p.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > p.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
            }
            if (r("grab", p.interactivity.events.onhover.mode) && p.fn.modes.grabParticle(t), (r("bubble", p.interactivity.events.onhover.mode) || r("bubble", p.interactivity.events.onclick.mode)) && p.fn.modes.bubbleParticle(t), (r("repulse", p.interactivity.events.onhover.mode) || r("repulse", p.interactivity.events.onclick.mode)) && p.fn.modes.repulseParticle(t), p.particles.line_linked.enable || p.particles.move.attract.enable)
              for (var o = e + 1; o < p.particles.array.length; o++) {
                var a = p.particles.array[o];
                p.particles.line_linked.enable && p.fn.interact.linkParticles(t, a), p.particles.move.attract.enable && p.fn.interact.attractParticles(t, a), p.particles.move.bounce && p.fn.interact.bounceParticles(t, a)
              }
          }
        }, p.fn.particlesDraw = function() {
          p.canvas.ctx.clearRect(0, 0, p.canvas.w, p.canvas.h), p.fn.particlesUpdate();
          for (var e = 0; e < p.particles.array.length; e++) {
            var t = p.particles.array[e];
            t.draw()
          }
        }, p.fn.particlesEmpty = function() {
          p.particles.array = []
        }, p.fn.particlesRefresh = function() {
          s(p.fn.checkAnimFrame), s(p.fn.drawAnimFrame), p.tmp.source_svg = void 0, p.tmp.img_obj = void 0, p.tmp.count_svg = 0, p.fn.particlesEmpty(), p.fn.canvasClear(), p.fn.vendors.start()
        }, p.fn.interact.linkParticles = function(e, t) {
          var n = e.x - t.x,
            i = e.y - t.y,
            r = Math.sqrt(n * n + i * i);
          if (r <= p.particles.line_linked.distance) {
            var o = p.particles.line_linked.opacity - r / (1 / p.particles.line_linked.opacity) / p.particles.line_linked.distance;
            if (o > 0) {
              var a = p.particles.line_linked.color_rgb_line;
              p.canvas.ctx.strokeStyle = "rgba(" + a.r + "," + a.g + "," + a.b + "," + o + ")", p.canvas.ctx.lineWidth = p.particles.line_linked.width, p.canvas.ctx.beginPath(), p.canvas.ctx.moveTo(e.x, e.y), p.canvas.ctx.lineTo(t.x, t.y), p.canvas.ctx.stroke(), p.canvas.ctx.closePath()
            }
          }
        }, p.fn.interact.attractParticles = function(e, t) {
          var n = e.x - t.x,
            i = e.y - t.y,
            r = Math.sqrt(n * n + i * i);
          if (r <= p.particles.line_linked.distance) {
            var o = n / (1e3 * p.particles.move.attract.rotateX),
              a = i / (1e3 * p.particles.move.attract.rotateY);
            e.vx -= o, e.vy -= a, t.vx += o, t.vy += a
          }
        }, p.fn.interact.bounceParticles = function(e, t) {
          var n = e.x - t.x,
            i = e.y - t.y,
            r = Math.sqrt(n * n + i * i),
            o = e.radius + t.radius;
          r <= o && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
        }, p.fn.modes.pushParticles = function(e, t) {
          p.tmp.pushing = !0;
          for (var n = 0; n < e; n++) p.particles.array.push(new p.fn.particle(p.particles.color, p.particles.opacity.value, {
            x: t ? t.pos_x : Math.random() * p.canvas.w,
            y: t ? t.pos_y : Math.random() * p.canvas.h
          })), n == e - 1 && (p.particles.move.enable || p.fn.particlesDraw(), p.tmp.pushing = !1)
        }, p.fn.modes.removeParticles = function(e, t) {
          if (t) {
            for (var n = 0; n < p.particles.array.length; n++) {
              var i = p.particles.array[n],
                r = i.x - p.interactivity.mouse.click_pos_x,
                o = i.y - p.interactivity.mouse.click_pos_y,
                a = Math.sqrt(r * r + o * o);
              i.dist = a
            }
            for (var s = p.particles.array.slice().sort(function(e, t) {
                return e.dist - t.dist
              }).slice(0, e), n = 0; n < s.length; n++) {
              var l = p.particles.array.indexOf(s[n]);
              p.particles.array.splice(l, 1)
            }
          } else p.particles.array.splice(0, e);
          p.particles.move.enable || p.fn.particlesDraw()
        }, p.fn.modes.bubbleParticle = function(e) {
          function t() {
            e.opacity_bubble = e.opacity, e.radius_bubble = e.radius
          }

          function n(t, n, i, r, o) {
            if (t != n)
              if (p.tmp.bubble_duration_end) {
                if (void 0 != i) {
                  var s = r - d * (r - t) / p.interactivity.modes.bubble.duration,
                    l = t - s;
                  u = t + l, "size" == o && (e.radius_bubble = u), "opacity" == o && (e.opacity_bubble = u)
                }
              } else if (a <= p.interactivity.modes.bubble.distance) {
              if (void 0 != i) var c = i;
              else var c = r;
              if (c != t) {
                var u = r - d * (r - t) / p.interactivity.modes.bubble.duration;
                "size" == o && (e.radius_bubble = u), "opacity" == o && (e.opacity_bubble = u)
              }
            } else "size" == o && (e.radius_bubble = void 0), "opacity" == o && (e.opacity_bubble = void 0)
          }
          if (p.interactivity.events.onhover.enable && r("bubble", p.interactivity.events.onhover.mode)) {
            var i = e.x - p.interactivity.mouse.pos_x,
              o = e.y - p.interactivity.mouse.pos_y,
              a = Math.sqrt(i * i + o * o),
              s = 1 - a / p.interactivity.modes.bubble.distance;
            if (a <= p.interactivity.modes.bubble.distance) {
              if (s >= 0 && "mousemove" == p.interactivity.status) {
                if (p.interactivity.modes.bubble.size != p.particles.size.value)
                  if (p.interactivity.modes.bubble.size > p.particles.size.value) {
                    var l = e.radius + p.interactivity.modes.bubble.size * s;
                    l >= 0 && (e.radius_bubble = l)
                  } else {
                    var c = e.radius - p.interactivity.modes.bubble.size,
                      l = e.radius - c * s;
                    l > 0 ? e.radius_bubble = l : e.radius_bubble = 0
                  } if (p.interactivity.modes.bubble.opacity != p.particles.opacity.value)
                  if (p.interactivity.modes.bubble.opacity > p.particles.opacity.value) {
                    var u = p.interactivity.modes.bubble.opacity * s;
                    u > e.opacity && u <= p.interactivity.modes.bubble.opacity && (e.opacity_bubble = u)
                  } else {
                    var u = e.opacity - (p.particles.opacity.value - p.interactivity.modes.bubble.opacity) * s;
                    u < e.opacity && u >= p.interactivity.modes.bubble.opacity && (e.opacity_bubble = u)
                  }
              }
            } else t();
            "mouseleave" == p.interactivity.status && t()
          } else if (p.interactivity.events.onclick.enable && r("bubble", p.interactivity.events.onclick.mode)) {
            if (p.tmp.bubble_clicking) {
              var i = e.x - p.interactivity.mouse.click_pos_x,
                o = e.y - p.interactivity.mouse.click_pos_y,
                a = Math.sqrt(i * i + o * o),
                d = ((new Date).getTime() - p.interactivity.mouse.click_time) / 1e3;
              d > p.interactivity.modes.bubble.duration && (p.tmp.bubble_duration_end = !0), d > 2 * p.interactivity.modes.bubble.duration && (p.tmp.bubble_clicking = !1, p.tmp.bubble_duration_end = !1)
            }
            p.tmp.bubble_clicking && (n(p.interactivity.modes.bubble.size, p.particles.size.value, e.radius_bubble, e.radius, "size"), n(p.interactivity.modes.bubble.opacity, p.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
          }
        }, p.fn.modes.repulseParticle = function(e) {
          function t() {
            var t = Math.atan2(h, f);
            if (e.vx = y * Math.cos(t), e.vy = y * Math.sin(t), "bounce" == p.particles.move.out_mode) {
              var n = {
                x: e.x + e.vx,
                y: e.y + e.vy
              };
              n.x + e.radius > p.canvas.w ? e.vx = -e.vx : n.x - e.radius < 0 && (e.vx = -e.vx), n.y + e.radius > p.canvas.h ? e.vy = -e.vy : n.y - e.radius < 0 && (e.vy = -e.vy)
            }
          }
          if (p.interactivity.events.onhover.enable && r("repulse", p.interactivity.events.onhover.mode) && "mousemove" == p.interactivity.status) {
            var n = e.x - p.interactivity.mouse.pos_x,
              o = e.y - p.interactivity.mouse.pos_y,
              a = Math.sqrt(n * n + o * o),
              s = {
                x: n / a,
                y: o / a
              },
              l = p.interactivity.modes.repulse.distance,
              c = 100,
              u = i(1 / l * (-1 * Math.pow(a / l, 2) + 1) * l * c, 0, 50),
              d = {
                x: e.x + s.x * u,
                y: e.y + s.y * u
              };
            "bounce" == p.particles.move.out_mode ? (d.x - e.radius > 0 && d.x + e.radius < p.canvas.w && (e.x = d.x), d.y - e.radius > 0 && d.y + e.radius < p.canvas.h && (e.y = d.y)) : (e.x = d.x, e.y = d.y)
          } else if (p.interactivity.events.onclick.enable && r("repulse", p.interactivity.events.onclick.mode))
            if (p.tmp.repulse_finish || (p.tmp.repulse_count++, p.tmp.repulse_count == p.particles.array.length && (p.tmp.repulse_finish = !0)), p.tmp.repulse_clicking) {
              var l = Math.pow(p.interactivity.modes.repulse.distance / 6, 3),
                f = p.interactivity.mouse.click_pos_x - e.x,
                h = p.interactivity.mouse.click_pos_y - e.y,
                m = f * f + h * h,
                y = -l / m * 1;
              m <= l && t()
            } else 0 == p.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i)
        }, p.fn.modes.grabParticle = function(e) {
          if (p.interactivity.events.onhover.enable && "mousemove" == p.interactivity.status) {
            var t = e.x - p.interactivity.mouse.pos_x,
              n = e.y - p.interactivity.mouse.pos_y,
              i = Math.sqrt(t * t + n * n);
            if (i <= p.interactivity.modes.grab.distance) {
              var r = p.interactivity.modes.grab.line_linked.opacity - i / (1 / p.interactivity.modes.grab.line_linked.opacity) / p.interactivity.modes.grab.distance;
              if (r > 0) {
                var o = p.particles.line_linked.color_rgb_line;
                p.canvas.ctx.strokeStyle = "rgba(" + o.r + "," + o.g + "," + o.b + "," + r + ")", p.canvas.ctx.lineWidth = p.particles.line_linked.width, p.canvas.ctx.beginPath(), p.canvas.ctx.moveTo(e.x, e.y), p.canvas.ctx.lineTo(p.interactivity.mouse.pos_x, p.interactivity.mouse.pos_y), p.canvas.ctx.stroke(), p.canvas.ctx.closePath()
              }
            }
          }
        }, p.fn.vendors.eventsListeners = function() {
          "window" == p.interactivity.detect_on ? p.interactivity.el = e : p.interactivity.el = p.canvas.el, getElementPosition = function() {
            return function(e) {
              var e = e || {},
                t = e.getBoundingClientRect();
              void 0 === t && (t = {
                top: 0,
                left: 0
              });
              var n = t.top,
                i = t.left;
              return {
                targetX: i,
                targetY: n
              }
            }
          }(), (p.interactivity.events.onhover.enable || p.interactivity.events.onclick.enable) && (p.interactivity.el.addEventListener("mousemove", function(t) {
            if (p.interactivity.el === e) var n = getElementPosition(p.canvas.el),
              i = t.clientX - n.targetX,
              r = t.clientY - n.targetY;
            else var i = t.offsetX || t.clientX,
              r = t.offsetY || t.clientY;
            p.interactivity.mouse.pos_x = i, p.interactivity.mouse.pos_y = r, p.tmp.retina && (p.interactivity.mouse.pos_x *= p.canvas.pxratio, p.interactivity.mouse.pos_y *= p.canvas.pxratio);
            var o = r >= 0 && r <= p.canvas.el.offsetHeight && i >= 0 && i <= p.canvas.el.offsetWidth;
            p.interactivity.status = o ? "mousemove" : "mouseleave"
          }), p.interactivity.el.addEventListener("mouseleave", function(e) {
            p.interactivity.mouse.pos_x = null, p.interactivity.mouse.pos_y = null, p.interactivity.status = "mouseleave"
          })), p.interactivity.events.onclick.enable && p.interactivity.el.addEventListener("click", function(e) {
            if (p.interactivity.mouse.click_pos_x = p.interactivity.mouse.pos_x, p.interactivity.mouse.click_pos_y = p.interactivity.mouse.pos_y, p.interactivity.mouse.click_time = (new Date).getTime(), p.interactivity.events.onclick.enable && "mousemove" === p.interactivity.status) {
              if (p.interactivity.events.onclick.handler instanceof Function && p.interactivity.events.onclick.handler.call(p, e) === !1) return;
              switch (p.interactivity.events.onclick.mode) {
                case "push":
                  p.particles.move.enable ? p.fn.modes.pushParticles(p.interactivity.modes.push.particles_nb, p.interactivity.mouse) : 1 == p.interactivity.modes.push.particles_nb ? p.fn.modes.pushParticles(p.interactivity.modes.push.particles_nb, p.interactivity.mouse) : p.interactivity.modes.push.particles_nb > 1 && p.fn.modes.pushParticles(p.interactivity.modes.push.particles_nb);
                  break;
                case "remove":
                  p.fn.modes.removeParticles(p.interactivity.modes.remove.particles_nb, !0);
                  break;
                case "bubble":
                  p.tmp.bubble_clicking = !0;
                  break;
                case "repulse":
                  p.tmp.repulse_clicking = !0, p.tmp.repulse_count = 0, p.tmp.repulse_finish = !1, setTimeout(function() {
                    p.tmp.repulse_clicking = !1
                  }, 1e3 * p.interactivity.modes.repulse.duration)
              }
            }
          })
        }, p.fn.vendors.densityAutoParticles = function() {
          if (p.particles.number.density.enable) {
            var e = p.canvas.el.width * p.canvas.el.height / 1e3;
            p.tmp.retina && (e /= 2 * p.canvas.pxratio);
            var t = e * p.particles.number.value / p.particles.number.density.value_area,
              n = p.particles.array.length - t;
            n < 0 ? p.fn.modes.pushParticles(Math.abs(n)) : p.fn.modes.removeParticles(n, !1)
          }
        }, p.fn.vendors.checkOverlap = function(e, t) {
          for (var n = 0; n < p.particles.array.length; n++) {
            var i = p.particles.array[n],
              r = e.x - i.x,
              o = e.y - i.y,
              a = Math.sqrt(r * r + o * o);
            a <= e.radius + i.radius && (e.x = t ? t.x : Math.random() * p.canvas.w, e.y = t ? t.y : Math.random() * p.canvas.h, p.fn.vendors.checkOverlap(e))
          }
        }, p.fn.vendors.createSvgImg = function(t) {
          var n = p.tmp.source_svg,
            i = /#([0-9A-F]{3,6})/gi,
            r = n.replace(i, function(e, n, i, r) {
              if (t.color.rgb) var o = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + t.opacity + ")";
              else var o = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + t.opacity + ")";
              return o
            }),
            o = new Blob([r], {
              type: "image/svg+xml;charset=utf-8"
            }),
            a = e.URL || e.webkitURL || e,
            s = a.createObjectURL(o),
            l = new Image;
          l.addEventListener("load", function() {
            t.img.obj = l, t.img.loaded = !0, a.revokeObjectURL(s), p.tmp.count_svg++
          }), l.src = s
        }, p.fn.vendors.destroypJS = function() {
          cancelAnimationFrame(p.fn.drawAnimFrame);
          for (var e = 0; e < p.canvas.observers.length; e++) p.canvas.observers[e].disconnect();
          u.remove()
        }, p.fn.vendors.drawShape = function(e, t, n, i, r, o) {
          var a = r * o,
            s = r / o,
            l = 180 * (s - 2) / s,
            c = Math.PI - Math.PI * l / 180;
          e.save(), e.beginPath(), e.translate(t, n), e.moveTo(0, 0);
          for (var u = 0; u < a; u++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(c);
          e.fill(), e.restore()
        }, p.fn.vendors.exportImg = function() {
          e.open(p.canvas.el.toDataURL("image/png"), "_blank")
        }, p.fn.vendors.loadImg = function(e) {
          if (p.tmp.img_error = void 0, "" != p.particles.shape.image.src)
            if ("svg" == e) {
              var t = new XMLHttpRequest;
              t.open("GET", p.particles.shape.image.src), t.onreadystatechange = function(e) {
                4 == t.readyState && (200 == t.status ? (p.tmp.source_svg = e.currentTarget.response, p.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), p.tmp.img_error = !0))
              }, t.send()
            } else {
              var n = new Image;
              n.addEventListener("load", function() {
                p.tmp.img_obj = n, p.fn.vendors.checkBeforeDraw()
              }), n.src = p.particles.shape.image.src
            }
          else console.log("Error pJS - No image.src"), p.tmp.img_error = !0
        }, p.fn.vendors.draw = function() {
          "image" == p.particles.shape.type ? "svg" == p.tmp.img_type ? p.tmp.count_svg >= p.particles.number.value ? (p.fn.particlesDraw(), p.particles.move.enable ? p.fn.drawAnimFrame = a(p.fn.vendors.draw) : s(p.fn.drawAnimFrame)) : p.tmp.img_error || (p.fn.drawAnimFrame = a(p.fn.vendors.draw)) : void 0 != p.tmp.img_obj ? (p.fn.particlesDraw(), p.particles.move.enable ? p.fn.drawAnimFrame = a(p.fn.vendors.draw) : s(p.fn.drawAnimFrame)) : p.tmp.img_error || (p.fn.drawAnimFrame = a(p.fn.vendors.draw)) : (p.fn.particlesDraw(), p.particles.move.enable ? p.fn.drawAnimFrame = a(p.fn.vendors.draw) : s(p.fn.drawAnimFrame))
        }, p.fn.vendors.checkBeforeDraw = function() {
          "image" == p.particles.shape.type ? "svg" == p.tmp.img_type && void 0 == p.tmp.source_svg ? p.tmp.checkAnimFrame = a(check) : (s(p.tmp.checkAnimFrame), p.tmp.img_error || (p.fn.vendors.init(), p.fn.vendors.draw())) : (p.fn.vendors.init(), p.fn.vendors.draw())
        }, p.fn.vendors.init = function() {
          p.particles.line_linked.color_rgb_line = n(p.particles.line_linked.color), p.fn.retinaInit(), p.fn.canvasInit(), p.fn.canvasSize(), p.fn.canvasResize(), p.fn.canvasPaint(), p.fn.particlesCreate(), p.fn.vendors.densityAutoParticles()
        }, p.fn.vendors.start = function() {
          r("image", p.particles.shape.type) ? (p.tmp.img_type = p.particles.shape.image.src.substr(p.particles.shape.image.src.length - 3), p.fn.vendors.loadImg(p.tmp.img_type)) : p.fn.vendors.checkBeforeDraw()
        }, p.fn.vendors.eventsListeners(), p.fn.vendors.start()
      },
      a = function() {
        return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
          e.setTimeout(t, 1e3 / 60)
        }
      }(),
      s = function() {
        return e.cancelAnimationFrame || e.webkitCancelRequestAnimationFrame || e.mozCancelRequestAnimationFrame || e.oCancelRequestAnimationFrame || e.msCancelRequestAnimationFrame || clearTimeout
      }();
    e.particlesJS = function(e, t) {
      var n = null;
      if ("string" == typeof e) n = document.getElementById(e);
      else {
        if ("object" != typeof e) return void console.error("Element for particle not found");
        n = e
      }
      var i = "particles-js-canvas-el",
        r = l.getDirectChild(n, "." + i);
      r && n.removeChild(r);
      var a = document.createElement("canvas");
      a.className = i, n.appendChild(a);
      var s = new o(n, t);
      return s.pJS
    };
    var l = {
      matches: function(e) {
        return e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector
      }(Element.prototype),
      getDirectChild: function(e, t) {
        for (var n = 0; n < e.children.length; n++) {
          var i = e.children[n];
          if (this.matches.call(i, t)) return i
        }
      }
    };
    e.particlesJS.load = function(t, n, i) {
      var r = new XMLHttpRequest;
      r.open("GET", n), r.onreadystatechange = function(n) {
        if (4 == r.readyState)
          if (200 == r.status) {
            var o = JSON.parse(n.currentTarget.response);
            e.particlesJS(t, o), i && i()
          } else console.log("Error pJS - XMLHttpRequest status: " + r.status), console.log("Error pJS - File config not found")
      }, r.send()
    }
  }(window);
var ytp = ytp || {};
! function(jQuery, ytp) {
  var nAgt = navigator.userAgent;
  if (!jQuery.browser) {
    jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;
    if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
    else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
    else if (-1 != nAgt.indexOf("Trident")) {
      jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
      var start = nAgt.indexOf("rv:") + 3,
        end = start + 4;
      jQuery.browser.fullVersion = nAgt.substring(start, end)
    } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
  }
  jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.fn.CSSAnimate = function(e, t, n, i, r) {
    function o(e) {
      return e.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase()
      })
    }

    function a(e, t) {
      return "string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + t : e
    }
    return jQuery.support.CSStransition = function() {
      var e = (document.body || document.documentElement).style;
      return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
    }(), this.each(function() {
      var s = this,
        l = jQuery(this);
      s.id = s.id || "CSSA_" + (new Date).getTime();
      var c = c || {
        type: "noEvent"
      };
      if (s.CSSAIsRunning && s.eventType == c.type) s.CSSqueue = function() {
        l.CSSAnimate(e, t, n, i, r)
      };
      else if (s.CSSqueue = null, s.eventType = c.type, 0 !== l.length && e) {
        if (s.CSSAIsRunning = !0, "function" == typeof t && (r = t, t = jQuery.fx.speeds._default), "function" == typeof n && (r = n, n = 0), "function" == typeof i && (r = i, i = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof t)
          for (var u in jQuery.fx.speeds) {
            if (t == u) {
              t = jQuery.fx.speeds[u];
              break
            }
            t = jQuery.fx.speeds._default
          }
        if (t || (t = jQuery.fx.speeds._default), jQuery.support.CSStransition) {
          c = {
            "default": "ease",
            "in": "ease-in",
            out: "ease-out",
            "in-out": "ease-in-out",
            snap: "cubic-bezier(0,1,.5,1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
          }, c[i] && (i = c[i]);
          var p = "",
            d = "transitionEnd";
          jQuery.browser.webkit ? (p = "-webkit-", d = "webkitTransitionEnd") : jQuery.browser.mozilla ? (p = "-moz-", d = "transitionend") : jQuery.browser.opera ? (p = "-o-", d = "otransitionend") : jQuery.browser.msie && (p = "-ms-", d = "msTransitionEnd"), c = [];
          for (f in e) u = f, "transform" === u && (u = p + "transform", e[u] = e[f], delete e[f]), "filter" === u && (u = p + "filter", e[u] = e[f], delete e[f]), "transform-origin" !== u && "origin" !== u || (u = p + "transform-origin", e[u] = e[f], delete e[f]), "x" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " translateX(" + a(e[f], "px") + ")", delete e[f]), "y" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " translateY(" + a(e[f], "px") + ")", delete e[f]), "z" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " translateZ(" + a(e[f], "px") + ")", delete e[f]), "rotate" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " rotate(" + a(e[f], "deg") + ")", delete e[f]), "rotateX" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " rotateX(" + a(e[f], "deg") + ")", delete e[f]), "rotateY" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " rotateY(" + a(e[f], "deg") + ")", delete e[f]), "rotateZ" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " rotateZ(" + a(e[f], "deg") + ")", delete e[f]), "scale" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " scale(" + a(e[f], "") + ")", delete e[f]), "scaleX" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " scaleX(" + a(e[f], "") + ")", delete e[f]), "scaleY" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " scaleY(" + a(e[f], "") + ")", delete e[f]), "scaleZ" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " scaleZ(" + a(e[f], "") + ")", delete e[f]), "skew" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " skew(" + a(e[f], "deg") + ")", delete e[f]), "skewX" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " skewX(" + a(e[f], "deg") + ")", delete e[f]), "skewY" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " skewY(" + a(e[f], "deg") + ")", delete e[f]), "perspective" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " perspective(" + a(e[f], "px") + ")", delete e[f]), 0 > c.indexOf(u) && c.push(o(u));
          var f = c.join(","),
            h = function() {
              l.off(d + "." + s.id), clearTimeout(s.timeout), l.css(p + "transition", ""), "function" == typeof r && r(l), s.called = !0, s.CSSAIsRunning = !1, "function" == typeof s.CSSqueue && (s.CSSqueue(), s.CSSqueue = null)
            },
            m = {};
          jQuery.extend(m, e), m[p + "transition-property"] = f, m[p + "transition-duration"] = t + "ms", m[p + "transition-delay"] = n + "ms", m[p + "transition-style"] = "preserve-3d", m[p + "transition-timing-function"] = i, setTimeout(function() {
            l.one(d + "." + s.id, h), l.css(m)
          }, 1), s.timeout = setTimeout(function() {
            l.called || !r ? (l.called = !1, s.CSSAIsRunning = !1) : (l.css(p + "transition", ""), r(l), s.CSSAIsRunning = !1, "function" == typeof s.CSSqueue && (s.CSSqueue(), s.CSSqueue = null))
          }, t + n + 100)
        } else {
          for (var f in e) "transform" === f && delete e[f], "filter" === f && delete e[f], "transform-origin" === f && delete e[f], "auto" === e[f] && delete e[f];
          r && "string" != typeof r || (r = "linear"), l.animate(e, t, r)
        }
      }
    })
  }, ! function(e) {
    e.simpleSlider = {
      defaults: {
        initialval: 0,
        scale: 100,
        orientation: "h",
        readonly: !1,
        callback: !1
      },
      init: function(t) {
        return this.each(function() {
          var n = this,
            i = e(n);
          i.addClass("simpleSlider"), n.opt = {}, e.extend(n.opt, e.simpleSlider.defaults, t), e.extend(n.opt, i.data());
          var r = "h" == n.opt.orientation ? "horizontal" : "vertical",
            o = e("<div/>").addClass("level").addClass(r);
          i.prepend(o), n.level = o, i.css({
            cursor: "default"
          }), "auto" == n.opt.scale && (n.opt.scale = e(n).outerWidth()), i.updateSliderVal(), n.opt.readonly || (i.on("mousedown", function(e) {
            n.canSlide = !0, i.updateSliderVal(e)
          }), e(document).on("mousemove", function(t) {
            n.canSlide && (e(document).css({
              cursor: "default"
            }), i.updateSliderVal(t), t.preventDefault(), t.stopPropagation())
          }).on("mouseup", function() {
            e(document).css({
              cursor: "auto"
            }), n.canSlide = !1
          }))
        })
      },
      updateSliderVal: function(t) {
        function n(e, t) {
          return Math.floor(100 * e / t)
        }
        var i = this,
          r = i.get(0);
        r.opt.initialval = "number" == typeof r.opt.initialval ? r.opt.initialval : r.opt.initialval(r);
        var o = e(r).outerWidth(),
          a = e(r).outerHeight();
        r.x = "object" == typeof t ? t.clientX + document.body.scrollLeft - i.offset().left : "number" == typeof t ? t * o / r.opt.scale : r.opt.initialval * o / r.opt.scale, r.y = "object" == typeof t ? t.clientY + document.body.scrollTop - i.offset().top : "number" == typeof t ? (r.opt.scale - r.opt.initialval - t) * a / r.opt.scale : r.opt.initialval * a / r.opt.scale, r.y = i.outerHeight() - r.y, r.scaleX = r.x * r.opt.scale / o, r.scaleY = r.y * r.opt.scale / a, r.outOfRangeX = r.scaleX > r.opt.scale ? r.scaleX - r.opt.scale : r.scaleX < 0 ? r.scaleX : 0, r.outOfRangeY = r.scaleY > r.opt.scale ? r.scaleY - r.opt.scale : r.scaleY < 0 ? r.scaleY : 0, r.outOfRange = "h" == r.opt.orientation ? r.outOfRangeX : r.outOfRangeY, r.value = "undefined" != typeof t ? "h" == r.opt.orientation ? r.x >= i.outerWidth() ? r.opt.scale : r.x <= 0 ? 0 : r.scaleX : r.y >= i.outerHeight() ? r.opt.scale : r.y <= 0 ? 0 : r.scaleY : "h" == r.opt.orientation ? r.scaleX : r.scaleY, "h" == r.opt.orientation ? r.level.width(n(r.x, o) + "%") : r.level.height(n(r.y, a)), "function" == typeof r.opt.callback && r.opt.callback(r)
      }
    }, e.fn.simpleSlider = e.simpleSlider.init, e.fn.updateSliderVal = e.simpleSlider.updateSliderVal
  }(jQuery), jQuery.mbStorage = {
    set: function(e, t) {
      t = JSON.stringify(t), localStorage.setItem(e, t)
    },
    get: function(e) {
      return localStorage[e] ? JSON.parse(localStorage[e]) : null
    },
    remove: function(e) {
      e ? localStorage.removeItem(e) : localStorage.clear()
    }
  };
  var getYTPVideoID = function(e) {
    var t, n;
    return e.indexOf("youtu.be") > 0 ? (t = e.substr(e.lastIndexOf("/") + 1, e.length), n = t.indexOf("?list=") > 0 ? t.substr(t.lastIndexOf("="), t.length) : null, t = n ? t.substr(0, t.lastIndexOf("?")) : t) : e.indexOf("http") > -1 ? (t = e.match(/[\\?&]v=([^&#]*)/)[1], n = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : (t = e.length > 15 ? null : e, n = t ? null : e), {
      videoID: t,
      playlistID: n
    }
  };
  jQuery.mbYTPlayer = {
    name: "jquery.mb.YTPlayer",
    version: "2.9.1",
    author: "Matteo Bicocchi",
    defaults: {
      apiKey: "",
      containment: "body",
      ratio: "auto",
      videoURL: null,
      playlistURL: null,
      startAt: 0,
      stopAt: 0,
      autoPlay: !0,
      vol: 50,
      addRaster: !1,
      opacity: 1,
      quality: "default",
      mute: !1,
      loop: !0,
      showControls: !0,
      showAnnotations: !1,
      showYTLogo: !0,
      stopMovieOnBlur: !0,
      realfullscreen: !0,
      gaTrack: !0,
      optimizeDisplay: !0,
      onReady: function(e) {}
    },
    controls: {
      play: "P",
      pause: "p",
      mute: "M",
      unmute: "A",
      onlyYT: "O",
      showSite: "R",
      ytLogo: "Y"
    },
    locationProtocol: "https:",
    buildPlayer: function(options) {
      return this.each(function() {
        var YTPlayer = this,
          $YTPlayer = jQuery(YTPlayer);
        YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = {}, YTPlayer.filtersEnabled = !0, YTPlayer.filters = {
          grayscale: {
            value: 0,
            unit: "%"
          },
          hue_rotate: {
            value: 0,
            unit: "deg"
          },
          invert: {
            value: 0,
            unit: "%"
          },
          opacity: {
            value: 0,
            unit: "%"
          },
          saturate: {
            value: 0,
            unit: "%"
          },
          sepia: {
            value: 0,
            unit: "%"
          },
          brightness: {
            value: 0,
            unit: "%"
          },
          contrast: {
            value: 0,
            unit: "%"
          },
          blur: {
            value: 0,
            unit: "px"
          }
        }, $YTPlayer.addClass("mb_YTPlayer");
        var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
        "undefined" != typeof property && "undefined" != typeof property.vol && (property.vol = 0 == property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options, property)), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
        var isIframe = function() {
          var e = !1;
          try {
            self.location.href != top.location.href && (e = !0)
          } catch (t) {
            e = !0
          }
          return e
        };
        YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()), YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + (new Date).getTime());
        var playerID = "mbYTP_" + YTPlayer.id;
        YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0;
        var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID,
          playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID;
        YTPlayer.videoID = videoID, YTPlayer.playlistID = playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
        var playerVars = {
          autoplay: 0,
          modestbranding: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          version: 3,
          playerapiid: playerID,
          origin: "*",
          allowfullscreen: !0,
          wmode: "transparent",
          iv_load_policy: YTPlayer.opt.showAnnotations
        };
        document.createElement("video").canPlayType && jQuery.extend(playerVars, {
          html5: 1
        }), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
        var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox"),
          overlay = jQuery("<div/>").css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }).addClass("YTPOverlay");
        if (YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
          var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
          if (YTPlayer.canPlayOnMobile = isPlayer && 0 == jQuery(this).children().length, isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide(), jQuery.browser.mobile && !YTPlayer.canPlayOnMobile) return void $YTPlayer.remove();
          var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
          if (wrapper.css({
              position: "absolute",
              zIndex: 0,
              minWidth: "100%",
              minHeight: "100%",
              left: 0,
              top: 0,
              overflow: "hidden",
              opacity: 0
            }), playerBox.css({
              position: "absolute",
              zIndex: 0,
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              overflow: "hidden"
            }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function() {
              "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
            }), YTPlayer.isBackground ? (jQuery("body").css({
              boxSizing: "border-box"
            }), wrapper.css({
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 0
            }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
              position: "relative"
            }), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({
              opacity: 1
            }), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function() {
              YTPlayer.controlBar && YTPlayer.controlBar.addClass("visible")
            }).on("mouseleave", function() {
              YTPlayer.controlBar && YTPlayer.controlBar.removeClass("visible")
            }), ytp.YTAPIReady) setTimeout(function() {
            jQuery(document).trigger("YTAPIReady")
          }, 100);
          else {
            jQuery("#YTAPI").remove();
            var tag = jQuery("<script></script>").attr({
              src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
              id: "YTAPI"
            });
            jQuery("head").prepend(tag)
          }
          jQuery(document).on("YTAPIReady", function() {
            YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? !!YTPlayer.isBackground : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function() {
              if (!YTPlayer.isInit) {
                if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                  if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                    YTPlayer.opt.containment.css({
                      maxWidth: "100%"
                    });
                    var h = .6 * YTPlayer.opt.containment.outerWidth();
                    YTPlayer.opt.containment.css({
                      maxHeight: h
                    })
                  }
                  return void new YT.Player(playerID, {
                    videoId: YTPlayer.videoID.toString(),
                    height: "100%",
                    width: "100%",
                    events: {
                      onReady: function(e) {
                        YTPlayer.player = e.target, playerBox.css({
                          opacity: 1
                        }), YTPlayer.wrapper.css({
                          opacity: 1
                        })
                      }
                    }
                  })
                }
                new YT.Player(playerID, {
                  videoId: YTPlayer.videoID.toString(),
                  playerVars: playerVars,
                  events: {
                    onReady: function(e) {
                      if (YTPlayer.player = e.target, !YTPlayer.isReady) {
                        YTPlayer.isReady = !(YTPlayer.isPlayer && !YTPlayer.opt.autoPlay), YTPlayer.playerEl = YTPlayer.player.getIframe(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).on("resize.YTP", function() {
                          $YTPlayer.optimizeDisplay()
                        }), jQuery.mbYTPlayer.checkForState(YTPlayer);
                        var t = jQuery.Event("YTPUnstarted");
                        t.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(t)
                      }
                    },
                    onStateChange: function(event) {
                      if ("function" == typeof event.target.getPlayerState) {
                        var state = event.target.getPlayerState();
                        if (YTPlayer.state != state) {
                          YTPlayer.state = state;
                          var eventType;
                          switch (state) {
                            case -1:
                              eventType = "YTPUnstarted";
                              break;
                            case 0:
                              eventType = "YTPEnd";
                              break;
                            case 1:
                              eventType = "YTPStart", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.videoData.title || YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.videoData.title || YTPlayer.videoID.toString());
                              break;
                            case 2:
                              eventType = "YTPPause", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                              break;
                            case 3:
                              YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                              break;
                            case 5:
                              eventType = "YTPCued"
                          }
                          var YTPevent = jQuery.Event(eventType);
                          YTPevent.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPevent)
                        }
                      }
                    },
                    onPlaybackQualityChange: function(e) {
                      var t = e.target.getPlaybackQuality(),
                        n = jQuery.Event("YTPQualityChange");
                      n.quality = t, jQuery(YTPlayer).trigger(n)
                    },
                    onError: function(e) {
                      150 == e.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e)
                    }
                  }
                })
              }
            }))
          })
        }
      })
    },
    getDataFromAPI: function(e) {
      if (e.videoData = jQuery.mbStorage.get("YYTPlayer_data_" + e.videoID), e.videoData) setTimeout(function() {
        "auto" == e.opt.ratio ? e.opt.ratio = "16/9" : e.opt.ratio, e.dataReceived = !0, jQuery(e).trigger("YTPChanged");
        var t = jQuery.Event("YTPData");
        t.prop = {};
        for (var n in e.videoData) t.prop[n] = e.videoData[n];
        jQuery(e).trigger(t)
      }, 500);
      else if (e.opt.apiKey) jQuery.getJSON("https://www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + e.opt.apiKey + "&part=snippet", function(t) {
        function n(t) {
          e.videoData = {}, e.videoData.id = e.videoID, e.videoData.channelTitle = t.channelTitle, e.videoData.title = t.title, e.videoData.description = t.description.length < 400 ? t.description : t.description.substring(0, 400) + " ...", e.videoData.aspectratio = "auto" == e.opt.ratio ? "16/9" : "4/3", e.opt.ratio = e.videoData.aspectratio, e.videoData.thumb_max = t.thumbnails.maxres ? t.thumbnails.maxres.url : null, e.videoData.thumb_high = t.thumbnails.high ? t.thumbnails.high.url : null, e.videoData.thumb_medium = t.thumbnails.medium ? t.thumbnails.medium.url : null, jQuery.mbStorage.set("YYTPlayer_data_" + e.videoID, e.videoData)
        }
        e.dataReceived = !0, jQuery(e).trigger("YTPChanged"), n(t.items[0].snippet);
        var i = jQuery.Event("YTPData");
        i.prop = {};
        for (var r in e.videoData) i.prop[r] = e.videoData[r];
        jQuery(e).trigger(i)
      });
      else {
        if (e.hasData = !1, setTimeout(function() {
            jQuery(e).trigger("YTPChanged")
          }, 50), e.isPlayer && !e.opt.autoPlay) {
          var t = "https://i.ytimg.com/vi/" + e.videoID + "/hqdefault.jpg";
          e.opt.containment.css({
            background: "rgba(0,0,0,0.5) url(" + t + ") center center",
            backgroundSize: "cover"
          })
        }
        e.videoData = null, "auto" == e.opt.ratio ? "16/9" : "4/3"
      }
      jQuery(e).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function() {
        if (!e.hasData && (e.hasData = !0, e.isPlayer && !e.opt.autoPlay)) {
          var t = e.videoData.thumb_max || e.videoData.thumb_high || e.videoData.thumb_medium;
          e.opt.containment.css({
            background: "rgba(0,0,0,0.5) url(" + t + ") center center",
            backgroundSize: "cover"
          })
        }
      }), e.isPlayer && !e.opt.autoPlay && (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e).append(e.loading), e.loading.fadeIn())
    },
    removeStoredData: function() {
      jQuery.mbStorage.remove()
    },
    getVideoData: function() {
      var e = this.get(0);
      return e.videoData
    },
    getVideoID: function() {
      var e = this.get(0);
      return e.videoID || !1
    },
    setVideoQuality: function(e) {
      var t = this.get(0);
      jQuery.browser.chrome || t.player.setPlaybackQuality(e)
    },
    playlist: function(e, t, n) {
      var i = this,
        r = i.get(0);
      return r.isPlayList = !0, t && (e = jQuery.shuffle(e)), r.videoID || (r.videos = e, r.videoCounter = 0, r.videoLength = e.length, jQuery(r).data("property", e[0]), jQuery(r).mb_YTPlayer()), "function" == typeof n && jQuery(r).on("YTPChanged", function() {
        n(r)
      }), jQuery(r).on("YTPEnd", function() {
        jQuery(r).playNext()
      }), i
    },
    playNext: function() {
      var e = this.get(0);
      e.videoCounter++, e.videoCounter >= e.videoLength && (e.videoCounter = 0), jQuery(e).changeMovie(e.videos[e.videoCounter])
    },
    playPrev: function() {
      var e = this.get(0);
      e.videoCounter--, e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1), jQuery(e).changeMovie(e.videos[e.videoCounter])
    },
    changeMovie: function(e) {
      var t = this.get(0);
      t.opt.startAt = 0, t.opt.stopAt = 0, t.opt.mute = !0, t.hasData = !1, t.hasChanged = !0, e && jQuery.extend(t.opt, t.defaultOpt, e), t.videoID = getYTPVideoID(t.opt.videoURL).videoID, jQuery(t.playerEl).CSSAnimate({
        opacity: 0
      }, 200, function() {
        jQuery(t).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + t.videoID), 1, t.opt.quality), jQuery.mbYTPlayer.checkForState(t), jQuery(t).optimizeDisplay(), jQuery.mbYTPlayer.getDataFromAPI(t)
      })
    },
    getPlayer: function() {
      return jQuery(this).get(0).player
    },
    playerDestroy: function() {
      var e = this.get(0);
      ytp.YTAPIReady = !1, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null;
      var t = e.wrapper;
      t.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState)
    },
    fullscreen: function(real) {
      function hideMouse() {
        YTPlayer.overlay.css({
          cursor: "none"
        })
      }

      function RunPrefixMethod(e, t) {
        for (var n, i, r = ["webkit", "moz", "ms", "o", ""], o = 0; o < r.length && !e[n];) {
          if (n = t, "" == r[o] && (n = n.substr(0, 1).toLowerCase() + n.substr(1)), n = r[o] + n, i = typeof e[n], "undefined" != i) return r = [r[o]], "function" == i ? e[n]() : e[n];
          o++
        }
      }

      function launchFullscreen(e) {
        RunPrefixMethod(e, "RequestFullScreen")
      }

      function cancelFullscreen() {
        (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
      }
      var YTPlayer = this.get(0);
      "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
      var controls = jQuery("#controlBar_" + YTPlayer.id),
        fullScreenBtn = controls.find(".mb_OnlyYT"),
        videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
      if (real) {
        var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
        jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
          var e = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
          e ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("fullscreen"), videoWrapper.CSSAnimate({
            opacity: YTPlayer.opt.opacity
          }, 500), videoWrapper.css({
            zIndex: 0
          }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
        })
      }
      YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), YTPlayer.overlay.css({
        cursor: "auto"
      }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
        opacity: YTPlayer.opt.opacity
      }, 500), videoWrapper.css({
        zIndex: 0
      })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function(e) {
        YTPlayer.overlay.css({
          cursor: "auto"
        }), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
      }), hideMouse(), real ? (videoWrapper.css({
        opacity: 0
      }), videoWrapper.addClass("fullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function() {
        videoWrapper.CSSAnimate({
          opacity: 1
        }, 1e3), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
      }, 500)) : videoWrapper.css({
        zIndex: 1e4
      }).CSSAnimate({
        opacity: 1
      }, 1e3), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0)
    },
    toggleLoops: function() {
      var e = this.get(0),
        t = e.opt;
      1 == t.loop ? t.loop = 0 : (t.startAt ? e.player.seekTo(t.startAt) : e.player.playVideo(), t.loop = 1)
    },
    play: function() {
      var e = this.get(0);
      if (e.isReady) {
        var t = jQuery("#controlBar_" + e.id),
          n = t.find(".mb_YTPPlaypause");
        n.html(jQuery.mbYTPlayer.controls.pause), e.player.playVideo(), e.wrapper.CSSAnimate({
          opacity: e.isAlone ? 1 : e.opt.opacity
        }, 2e3), jQuery(e.playerEl).CSSAnimate({
          opacity: 1
        }, 1e3), jQuery(e).css("background-image", "none")
      }
    },
    togglePlay: function(e) {
      var t = this.get(0);
      1 == t.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(t.state)
    },
    stop: function() {
      var e = this.get(0),
        t = jQuery("#controlBar_" + e.id),
        n = t.find(".mb_YTPPlaypause");
      n.html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo()
    },
    pause: function() {
      var e = this.get(0),
        t = jQuery("#controlBar_" + e.id),
        n = t.find(".mb_YTPPlaypause");
      n.html(jQuery.mbYTPlayer.controls.play), e.player.pauseVideo()
    },
    seekTo: function(e) {
      var t = this.get(0);
      t.player.seekTo(e, !0)
    },
    setVolume: function(e) {
      var t = this.get(0);
      e || t.opt.vol || 0 != t.player.getVolume() ? !e && t.player.getVolume() > 0 || e && t.opt.vol == e ? t.isMute ? jQuery(t).YTPUnmute() : jQuery(t).YTPMute() : (t.opt.vol = e, t.player.setVolume(t.opt.vol), t.volumeBar && t.volumeBar.length && t.volumeBar.updateSliderVal(e)) : jQuery(t).YTPUnmute()
    },
    mute: function() {
      var e = this.get(0);
      if (!e.isMute) {
        e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(0);
        var t = jQuery("#controlBar_" + e.id),
          n = t.find(".mb_YTPMuteUnmute");
        n.html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
        var i = jQuery.Event("YTPMuted");
        i.time = e.player.time, e.canTrigger && jQuery(e).trigger(i)
      }
    },
    unmute: function() {
      var e = this.get(0);
      if (e.isMute) {
        e.player.unMute(), e.isMute = !1, e.player.setVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10);
        var t = jQuery("#controlBar_" + e.id),
          n = t.find(".mb_YTPMuteUnmute");
        n.html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
        var i = jQuery.Event("YTPUnmuted");
        i.time = e.player.time, e.canTrigger && jQuery(e).trigger(i)
      }
    },
    applyFilter: function(e, t) {
      var n = this.get(0);
      return n.filters[e].value = t, n.filtersEnabled && this.YTPEnableFilters(), this
    },
    applyFilters: function(e) {
      var t = this.get(0);
      return this.on("YTPReady", function() {
        for (var n in e) t.filters[n].value = e[n], jQuery(t).YTPApplyFilter(n, e[n]);
        jQuery(t).trigger("YTPFiltersApplied")
      }), this
    },
    toggleFilter: function(e, t) {
      var n = this.get(0);
      return n.filters[e].value ? n.filters[e].value = 0 : n.filters[e].value = t, n.filtersEnabled && this.YTPEnableFilters(), this
    },
    disableFilters: function() {
      var e = this.get(0),
        t = jQuery(e.playerEl);
      return t.css("-webkit-filter", ""), t.css("filter", ""), e.filtersEnabled = !1, this
    },
    enableFilters: function() {
      var e = this.get(0),
        t = jQuery(e.playerEl),
        n = "";
      for (var i in e.filters) e.filters[i].value && (n += i.replace("_", "-") + "(" + e.filters[i].value + e.filters[i].unit + ") ");
      return t.css("-webkit-filter", n), t.css("filter", n), e.filtersEnabled = !0, this
    },
    toggleFilters: function(e) {
      var t = this.get(0);
      return t.filtersEnabled ? (jQuery(t).trigger("YTPDisableFilters"), jQuery(t).YTPDisableFilters()) : (jQuery(t).YTPEnableFilters(), jQuery(t).trigger("YTPEnableFilters")), "function" == typeof e && e(t.filtersEnabled), this
    },
    removeFilter: function(e, t) {
      "function" == typeof e && (t = e, e = null);
      var n = this.get(0);
      if (e) this.YTPApplyFilter(e, 0), "function" == typeof t && t(e);
      else
        for (var i in n.filters) this.YTPApplyFilter(i, 0), "function" == typeof t && t(i);
      return this
    },
    manageProgress: function() {
      var e = this.get(0),
        t = jQuery("#controlBar_" + e.id),
        n = t.find(".mb_YTPProgress"),
        i = t.find(".mb_YTPLoaded"),
        r = t.find(".mb_YTPseekbar"),
        o = n.outerWidth(),
        a = Math.floor(e.player.getCurrentTime()),
        s = Math.floor(e.player.getDuration()),
        l = a * o / s,
        c = 0,
        u = 100 * e.player.getVideoLoadedFraction();
      return i.css({
        left: c,
        width: u + "%"
      }), r.css({
        left: 0,
        width: l
      }), {
        totalTime: s,
        currentTime: a
      }
    },
    buildControls: function(YTPlayer) {
      var data = YTPlayer.opt;
      if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
        YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
          whiteSpace: "noWrap",
          position: YTPlayer.isBackground ? "fixed" : "absolute",
          zIndex: YTPlayer.isBackground ? 1e4 : 1e3
        }).hide();
        var buttonBar = jQuery("<div/>").addClass("buttonBar"),
          playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function() {
            1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
          }),
          MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function() {
            0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
          }),
          volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
            display: "inline-block"
          });
        YTPlayer.volumeBar = volumeBar;
        var idx = jQuery("<span/>").addClass("mb_YTPTime"),
          vURL = data.videoURL ? data.videoURL : "";
        vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
        var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
            window.open(vURL, "viewOnYT")
          }),
          onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
            jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
          }),
          progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function(e) {
            timeBar.css({
              width: e.clientX - timeBar.offset().left
            }), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
              width: 0
            });
            var t = Math.floor(YTPlayer.player.getDuration());
            YTPlayer["goto"] = timeBar.outerWidth() * t / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
              width: 0
            })
          }),
          loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
          timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
        progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
          initialval: YTPlayer.opt.vol,
          scale: 100,
          orientation: "h",
          callback: function(e) {
            0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
          }
        })
      }
    },
    checkForState: function(YTPlayer) {
      var interval = YTPlayer.opt.showControls ? 100 : 1e3;
      return clearInterval(YTPlayer.getState), jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void(YTPlayer.getState = setInterval(function() {
        var prog = jQuery(YTPlayer).YTPManageProgress(),
          $YTPlayer = jQuery(YTPlayer),
          data = YTPlayer.opt,
          startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 0,
          stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
        if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.player.time != prog.currentTime) {
          var YTPevent = jQuery.Event("YTPTime");
          YTPevent.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(YTPevent)
        }
        if (YTPlayer.player.time = prog.currentTime, 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),
          eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && YTPlayer.state != -1 && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 3) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
          if (YTPlayer.isEnded) return;
          if (YTPlayer.isEnded = !0, setTimeout(function() {
              YTPlayer.isEnded = !1
            }, 2e3), YTPlayer.isPlayList) {
            clearInterval(YTPlayer.getState);
            var YTPEnd = jQuery.Event("YTPEnd");
            return YTPEnd.time = YTPlayer.player.time, void jQuery(YTPlayer).trigger(YTPEnd)
          }
          data.loop ? YTPlayer.player.seekTo(startAt, !0) : (YTPlayer.player.pauseVideo(), YTPlayer.wrapper.CSSAnimate({
            opacity: 0
          }, 1e3, function() {
            var e = jQuery.Event("YTPEnd");
            if (e.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(startAt, !0), !YTPlayer.isBackground) {
              var t = YTPlayer.videoData.thumb_max || YTPlayer.videoData.thumb_high || YTPlayer.videoData.thumb_medium;
              YTPlayer.opt.containment.css({
                background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                backgroundSize: "cover"
              })
            }
          }))
        }
      }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt))
    },
    checkForStart: function(e) {
      var t = jQuery(e);
      if (!jQuery.contains(document, e)) return void jQuery(e).YTPPlayerDestroy();
      if (jQuery.browser.chrome && (e.opt.quality = "default"), e.player.pauseVideo(), jQuery(e).muteYTPVolume(), jQuery("#controlBar_" + e.id).remove(), e.opt.showControls && jQuery.mbYTPlayer.buildControls(e), e.opt.addRaster) {
        var n = "dot" == e.opt.addRaster ? "raster-dot" : "raster";
        e.overlay.addClass(e.isRetina ? n + " retina" : n)
      } else e.overlay.removeClass(function(e, t) {
        var n = t.split(" "),
          i = [];
        return jQuery.each(n, function(e, t) {
          /raster.*/.test(t) && i.push(t)
        }), i.push("retina"), i.join(" ")
      });
      e.checkForStartAt = setInterval(function() {
        jQuery(e).YTPMute();
        var n = e.opt.startAt ? e.opt.startAt : 1,
          i = e.player.getVideoLoadedFraction() > n / e.player.getDuration();
        if (e.player.getDuration() > 0 && e.player.getCurrentTime() >= n && i) {
          clearInterval(e.checkForStartAt), e.isReady = !0, "function" == typeof e.opt.onReady && e.opt.onReady(e);
          var r = jQuery.Event("YTPReady");
          jQuery(e).trigger(r), e.player.pauseVideo(), e.opt.mute || jQuery(e).YTPUnmute(), e.canTrigger = !0, e.opt.autoPlay ? (t.YTPPlay(), t.css("background-image", "none"), jQuery(e.playerEl).CSSAnimate({
            opacity: 1
          }, 1e3), e.wrapper.CSSAnimate({
            opacity: e.isAlone ? 1 : e.opt.opacity
          }, 1e3)) : e.player.pauseVideo(), e.isPlayer && !e.opt.autoPlay && (e.loading.html("Ready"), setTimeout(function() {
            e.loading.fadeOut()
          }, 100)), e.controlBar && e.controlBar.slideDown(1e3)
        } else n >= 0 && e.player.seekTo(n, !0)
      }, 1e3)
    },
    formatTime: function(e) {
      var t = Math.floor(e / 60),
        n = Math.floor(e - 60 * t);
      return (t <= 9 ? "0" + t : t) + " : " + (n <= 9 ? "0" + n : n)
    }
  }, jQuery.fn.toggleVolume = function() {
    var e = this.get(0);
    if (e) return e.player.isMuted() ? (jQuery(e).YTPUnmute(), !0) : (jQuery(e).YTPMute(), !1)
  }, jQuery.fn.optimizeDisplay = function() {
    var e = this.get(0),
      t = e.opt,
      n = jQuery(e.playerEl),
      i = {},
      r = e.wrapper;
    i.width = r.outerWidth(), i.height = r.outerHeight();
    var o = 24,
      a = 100,
      s = {};
    t.optimizeDisplay ? (s.width = i.width + i.width * o / 100, s.height = "16/9" == t.ratio ? Math.ceil(9 * i.width / 16) : Math.ceil(3 * i.width / 4), s.marginTop = -((s.height - i.height) / 2), s.marginLeft = -(i.width * (o / 2) / 100), s.height < i.height && (s.height = i.height + i.height * o / 100, s.width = "16/9" == t.ratio ? Math.floor(16 * i.height / 9) : Math.floor(4 * i.height / 3), s.marginTop = -(i.height * (o / 2) / 100), s.marginLeft = -((s.width - i.width) / 2)), s.width += a, s.height += a, s.marginTop -= a / 2, s.marginLeft -= a / 2) : (s.width = "100%", s.height = "100%", s.marginTop = 0, s.marginLeft -= 0), n.css({
      width: s.width,
      height: s.height,
      marginTop: s.marginTop,
      marginLeft: s.marginLeft
    })
  }, jQuery.shuffle = function(e) {
    for (var t = e.slice(), n = t.length, i = n; i--;) {
      var r = parseInt(Math.random() * n),
        o = t[i];
      t[i] = t[r], t[r] = o
    }
    return t
  }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp), ! function(e, t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : e.jQuery)
}(this, function(e) {
  "use strict";

  function t(e) {
    var t, n, i, r, o, a, s, l = {};
    for (o = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","), s = 0, a = o.length; s < a && (n = o[s], n.search(/^(http|https|ftp):\/\//) === -1 && n.search(":") !== -1); s++) t = n.indexOf(":"), i = n.substring(0, t), r = n.substring(t + 1), r || (r = void 0), "string" == typeof r && (r = "true" === r || "false" !== r && r), "string" == typeof r && (r = isNaN(r) ? r : +r), l[i] = r;
    return null == i && null == r ? e : l
  }

  function n(e) {
    e = "" + e;
    var t, n, i, r = e.split(/\s+/),
      o = "50%",
      a = "50%";
    for (i = 0, t = r.length; i < t; i++) n = r[i], "left" === n ? o = "0%" : "right" === n ? o = "100%" : "top" === n ? a = "0%" : "bottom" === n ? a = "100%" : "center" === n ? 0 === i ? o = "50%" : a = "50%" : 0 === i ? o = n : a = n;
    return {
      x: o,
      y: a
    }
  }

  function i(t, n) {
    var i = function() {
      n(this.src)
    };
    e('<img src="' + t + '.gif">').load(i), e('<img src="' + t + '.jpg">').load(i), e('<img src="' + t + '.jpeg">').load(i), e('<img src="' + t + '.png">').load(i)
  }

  function r(n, i, r) {
    if (this.$element = e(n), "string" == typeof i && (i = t(i)), r ? "string" == typeof r && (r = t(r)) : r = {}, "string" == typeof i) i = i.replace(/\.\w*$/, "");
    else if ("object" == typeof i)
      for (var o in i) i.hasOwnProperty(o) && (i[o] = i[o].replace(/\.\w*$/, ""));
    this.settings = e.extend({}, a, r), this.path = i, this.init()
  }
  var o = "vide",
    a = {
      volume: 1,
      playbackRate: 1,
      muted: !0,
      loop: !0,
      autoplay: !0,
      position: "50% 50%",
      posterType: "detect",
      resizing: !0
    };
  r.prototype.init = function() {
    var t, r = this,
      o = n(r.settings.position),
      a = "";
    r.$wrapper = e("<div>").css({
      position: "absolute",
      "z-index": -1,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      overflow: "hidden",
      "-webkit-background-size": "cover",
      "-moz-background-size": "cover",
      "-o-background-size": "cover",
      "background-size": "cover",
      "background-repeat": "no-repeat",
      "background-position": o.x + " " + o.y
    }), t = r.path, "object" == typeof r.path && (r.path.poster ? t = r.path.poster : r.path.mp4 ? t = r.path.mp4 : r.path.webm ? t = r.path.webm : r.path.ogv && (t = r.path.ogv)), "detect" === r.settings.posterType ? i(t, function(e) {
      r.$wrapper.css("background-image", "url(" + e + ")")
    }) : "none" !== r.settings.posterType && r.$wrapper.css("background-image", "url(" + t + "." + r.settings.posterType + ")"), "static" === r.$element.css("position") && r.$element.css("position", "relative"), r.$element.prepend(r.$wrapper), "object" == typeof r.path ? (r.path.mp4 && (a += '<source src="' + r.path.mp4 + '.mp4" type="video/mp4">'), r.path.webm && (a += '<source src="' + r.path.webm + '.webm" type="video/webm">'), r.path.ogv && (a += '<source src="' + r.path.ogv + '.ogv" type="video/ogv">'), r.$video = e("<video>" + a + "</video>")) : r.$video = e('<video><source src="' + r.path + '.mp4" type="video/mp4"><source src="' + r.path + '.webm" type="video/webm"><source src="' + r.path + '.ogv" type="video/ogg"></video>'), r.$video.prop({
      autoplay: r.settings.autoplay,
      loop: r.settings.loop,
      volume: r.settings.volume,
      muted: r.settings.muted,
      defaultMuted: r.settings.muted,
      playbackRate: r.settings.playbackRate,
      defaultPlaybackRate: r.settings.playbackRate
    }).css({
      margin: "auto",
      position: "absolute",
      "z-index": -1,
      top: o.y,
      left: o.x,
      "-webkit-transform": "translate(-" + o.x + ", -" + o.y + ")",
      "-ms-transform": "translate(-" + o.x + ", -" + o.y + ")",
      "-moz-transform": "translate(-" + o.x + ", -" + o.y + ")",
      transform: "translate(-" + o.x + ", -" + o.y + ")",
      visibility: "hidden"
    }).one("canplaythrough.vide", function() {
      r.resize()
    }).one("playing.vide", function() {
      r.$video.css("visibility", "visible"), r.$wrapper.css("background-image", "none")
    }), r.$element.on("resize.vide", function() {
      r.settings.resizing && r.resize()
    }), r.$wrapper.append(r.$video)
  }, r.prototype.getVideoObject = function() {
    return this.$video[0]
  }, r.prototype.resize = function() {
    if (this.$video) {
      var e = this.$video[0].videoHeight,
        t = this.$video[0].videoWidth,
        n = this.$wrapper.height(),
        i = this.$wrapper.width();
      i / t > n / e ? this.$video.css({
        width: i + 2,
        height: "auto"
      }) : this.$video.css({
        width: "auto",
        height: n + 2
      })
    }
  }, r.prototype.destroy = function() {
    this.$element.off(o), this.$video && this.$video.off(o), delete e[o].lookup[this.index], this.$element.removeData(o), this.$wrapper.remove()
  }, e[o] = {
    lookup: []
  }, e.fn[o] = function(t, n) {
    var i;
    return this.each(function() {
      i = e.data(this, o), i && i.destroy(), i = new r(this, t, n), i.index = e[o].lookup.push(i) - 1, e.data(this, o, i)
    }), this
  }, e(document).ready(function() {
    var t = e(window);
    t.on("resize.vide", function() {
      for (var t, n = e[o].lookup.length, i = 0; i < n; i++) t = e[o].lookup[i], t && t.settings.resizing && t.resize()
    }), t.on("unload.vide", function() {
      return !1
    }), e(document).find("[data-vide-bg]").each(function(t, n) {
      var i = e(n),
        r = i.data("vide-options"),
        a = i.data("vide-bg");
      i[o](a, r)
    })
  })
});