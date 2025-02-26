/*! For license information please see IllegalContentReport.bundle.min.js.LICENSE.txt */ ! function() {
    var t = {
            42: function(t, e) {
                var n;
                ! function() {
                    "use strict";
                    var r = {}.hasOwnProperty;

                    function o() {
                        for (var t = "", e = 0; e < arguments.length; e++) {
                            var n = arguments[e];
                            n && (t = u(t, i(n)))
                        }
                        return t
                    }

                    function i(t) {
                        if ("string" == typeof t || "number" == typeof t) return t;
                        if ("object" != typeof t) return "";
                        if (Array.isArray(t)) return o.apply(null, t);
                        if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
                        var e = "";
                        for (var n in t) r.call(t, n) && t[n] && (e = u(e, n));
                        return e
                    }

                    function u(t, e) {
                        return e ? t ? t + " " + e : t + e : t
                    }
                    t.exports ? (o.default = o, t.exports = o) : void 0 === (n = function() {
                        return o
                    }.apply(e, [])) || (t.exports = n)
                }()
            },
            559: function(t, e) {
                "use strict";
                var n = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
                e.G = function(t) {
                    if (!t) return !1;
                    if (t.length > 254) return !1;
                    if (!n.test(t)) return !1;
                    var e = t.split("@");
                    return !(e[0].length > 64) && !e[1].split(".").some((function(t) {
                        return t.length > 63
                    }))
                }
            },
            47: function(t, e, n) {
                "use strict";
                var r = n(804);
                var o = "function" == typeof Object.is ? Object.is : function(t, e) {
                        return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
                    },
                    i = r.useState,
                    u = r.useEffect,
                    a = r.useLayoutEffect,
                    c = r.useDebugValue;

                function l(t) {
                    var e = t.getSnapshot;
                    t = t.value;
                    try {
                        var n = e();
                        return !o(t, n)
                    } catch (t) {
                        return !0
                    }
                }
                var s = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(t, e) {
                    return e()
                } : function(t, e) {
                    var n = e(),
                        r = i({
                            inst: {
                                value: n,
                                getSnapshot: e
                            }
                        }),
                        o = r[0].inst,
                        s = r[1];
                    return a((function() {
                        o.value = n, o.getSnapshot = e, l(o) && s({
                            inst: o
                        })
                    }), [t, n, e]), u((function() {
                        return l(o) && s({
                            inst: o
                        }), t((function() {
                            l(o) && s({
                                inst: o
                            })
                        }))
                    }), [t]), c(n), n
                };
                e.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : s
            },
            644: function(t, e, n) {
                "use strict";
                t.exports = n(47)
            },
            804: function(t) {
                "use strict";
                t.exports = React
            }
        },
        e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            exports: {}
        };
        return t[r](o, o.exports, n), o.exports
    }
    n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, {
                a: e
            }), e
        }, n.d = function(t, e) {
            for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
            })
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        function() {
            "use strict";
            var t = n(804),
                e = n.n(t),
                r = ReactDOM,
                o = CoreUtilities;

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(n), !0).forEach((function(e) {
                        c(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function c(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var l = "undefined" == typeof window || "Deno" in window;

            function s() {}

            function f(t) {
                return "number" == typeof t && t >= 0 && t !== 1 / 0
            }

            function d(t, e) {
                return Math.max(t + (e || 0) - Date.now(), 0)
            }

            function p(t, e, n) {
                return R(t) ? "function" == typeof e ? a(a({}, n), {}, {
                    queryKey: t,
                    queryFn: e
                }) : a(a({}, e), {}, {
                    queryKey: t
                }) : t
            }

            function h(t, e, n) {
                return R(t) ? [a(a({}, e), {}, {
                    queryKey: t
                }), n] : [t || {}, e]
            }

            function v(t, e) {
                var n = t.type,
                    r = void 0 === n ? "all" : n,
                    o = t.exact,
                    i = t.fetchStatus,
                    u = t.predicate,
                    a = t.queryKey,
                    c = t.stale;
                if (R(a))
                    if (o) {
                        if (e.queryHash !== m(a, e.options)) return !1
                    } else if (!g(e.queryKey, a)) return !1;
                if ("all" !== r) {
                    var l = e.isActive();
                    if ("active" === r && !l) return !1;
                    if ("inactive" === r && l) return !1
                }
                return ("boolean" != typeof c || e.isStale() === c) && ((void 0 === i || i === e.state.fetchStatus) && !(u && !u(e)))
            }

            function y(t, e) {
                var n = t.exact,
                    r = t.fetching,
                    o = t.predicate,
                    i = t.mutationKey;
                if (R(i)) {
                    if (!e.options.mutationKey) return !1;
                    if (n) {
                        if (b(e.options.mutationKey) !== b(i)) return !1
                    } else if (!g(e.options.mutationKey, i)) return !1
                }
                return ("boolean" != typeof r || "loading" === e.state.status === r) && !(o && !o(e))
            }

            function m(t, e) {
                return ((null == e ? void 0 : e.queryKeyHashFn) || b)(t)
            }

            function b(t) {
                return JSON.stringify(t, (function(t, e) {
                    return x(e) ? Object.keys(e).sort().reduce((function(t, n) {
                        return t[n] = e[n], t
                    }), {}) : e
                }))
            }

            function g(t, e) {
                return w(t, e)
            }

            function w(t, e) {
                return t === e || i(t) === i(e) && (!(!t || !e || "object" !== i(t) || "object" !== i(e)) && !Object.keys(e).some((function(n) {
                    return !w(t[n], e[n])
                })))
            }

            function O(t, e) {
                if (t === e) return t;
                var n = S(t) && S(e);
                if (n || x(t) && x(e)) {
                    for (var r = n ? t.length : Object.keys(t).length, o = n ? e : Object.keys(e), i = o.length, u = n ? [] : {}, a = 0, c = 0; c < i; c++) {
                        var l = n ? c : o[c];
                        u[l] = O(t[l], e[l]), u[l] === t[l] && a++
                    }
                    return r === i && a === r ? t : u
                }
                return e
            }

            function E(t, e) {
                if (t && !e || e && !t) return !1;
                for (var n in t)
                    if (t[n] !== e[n]) return !1;
                return !0
            }

            function S(t) {
                return Array.isArray(t) && t.length === Object.keys(t).length
            }

            function x(t) {
                if (!k(t)) return !1;
                var e = t.constructor;
                if (void 0 === e) return !0;
                var n = e.prototype;
                return !!k(n) && !!n.hasOwnProperty("isPrototypeOf")
            }

            function k(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function R(t) {
                return Array.isArray(t)
            }

            function P(t) {
                return new Promise((function(e) {
                    setTimeout(e, t)
                }))
            }

            function j(t) {
                P(0).then(t)
            }

            function _(t, e, n) {
                return null != n.isDataEqual && n.isDataEqual(t, e) ? t : "function" == typeof n.structuralSharing ? n.structuralSharing(t, e) : !1 !== n.structuralSharing ? O(t, e) : e
            }
            var C = console;
            var A, T, D, I, L, M, N = (A = [], T = 0, D = function(t) {
                t()
            }, I = function(t) {
                t()
            }, M = function() {
                var t = A;
                A = [], t.length && j((function() {
                    I((function() {
                        t.forEach((function(t) {
                            D(t)
                        }))
                    }))
                }))
            }, {
                batch: function(t) {
                    var e;
                    T++;
                    try {
                        e = t()
                    } finally {
                        --T || M()
                    }
                    return e
                },
                batchCalls: function(t) {
                    return function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        L((function() {
                            t.apply(void 0, n)
                        }))
                    }
                },
                schedule: L = function(t) {
                    T ? A.push(t) : j((function() {
                        D(t)
                    }))
                },
                setNotifyFunction: function(t) {
                    D = t
                },
                setBatchNotifyFunction: function(t) {
                    I = t
                }
            });

            function F(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var q = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                var e, n, r;
                return e = t, (n = [{
                    key: "subscribe",
                    value: function(t) {
                        var e = this,
                            n = {
                                listener: t
                            };
                        return this.listeners.add(n), this.onSubscribe(),
                            function() {
                                e.listeners.delete(n), e.onUnsubscribe()
                            }
                    }
                }, {
                    key: "hasListeners",
                    value: function() {
                        return this.listeners.size > 0
                    }
                }, {
                    key: "onSubscribe",
                    value: function() {}
                }, {
                    key: "onUnsubscribe",
                    value: function() {}
                }]) && F(e.prototype, n), r && F(e, r), t
            }();

            function U(t) {
                return (U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function Q(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function H(t, e) {
                return (H = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function K(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = G(t);
                    if (e) {
                        var o = G(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return B(this, n)
                }
            }

            function B(t, e) {
                return !e || "object" !== U(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function G(t) {
                return (G = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var z = new(function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && H(t, e)
                }(i, t);
                var e, n, r, o = K(i);

                function i() {
                    var t;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (t = o.call(this)).setup = function(t) {
                        if (!l && window.addEventListener) {
                            var e = function() {
                                return t()
                            };
                            return window.addEventListener("visibilitychange", e, !1), window.addEventListener("focus", e, !1),
                                function() {
                                    window.removeEventListener("visibilitychange", e), window.removeEventListener("focus", e)
                                }
                        }
                    }, t
                }
                return e = i, (n = [{
                    key: "onSubscribe",
                    value: function() {
                        this.cleanup || this.setEventListener(this.setup)
                    }
                }, {
                    key: "onUnsubscribe",
                    value: function() {
                        var t;
                        this.hasListeners() || (null == (t = this.cleanup) || t.call(this), this.cleanup = void 0)
                    }
                }, {
                    key: "setEventListener",
                    value: function(t) {
                        var e, n = this;
                        this.setup = t, null == (e = this.cleanup) || e.call(this), this.cleanup = t((function(t) {
                            "boolean" == typeof t ? n.setFocused(t) : n.onFocus()
                        }))
                    }
                }, {
                    key: "setFocused",
                    value: function(t) {
                        this.focused !== t && (this.focused = t, this.onFocus())
                    }
                }, {
                    key: "onFocus",
                    value: function() {
                        this.listeners.forEach((function(t) {
                            (0, t.listener)()
                        }))
                    }
                }, {
                    key: "isFocused",
                    value: function() {
                        return "boolean" == typeof this.focused ? this.focused : "undefined" == typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState)
                    }
                }]) && Q(e.prototype, n), r && Q(e, r), i
            }(q));

            function W(t) {
                return (W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function X(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function V(t, e) {
                return (V = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function $(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Y(t);
                    if (e) {
                        var o = Y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Z(this, n)
                }
            }

            function Z(t, e) {
                return !e || "object" !== W(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function Y(t) {
                return (Y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var J = ["online", "offline"],
                tt = new(function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && V(t, e)
                    }(i, t);
                    var e, n, r, o = $(i);

                    function i() {
                        var t;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), (t = o.call(this)).setup = function(t) {
                            if (!l && window.addEventListener) {
                                var e = function() {
                                    return t()
                                };
                                return J.forEach((function(t) {
                                        window.addEventListener(t, e, !1)
                                    })),
                                    function() {
                                        J.forEach((function(t) {
                                            window.removeEventListener(t, e)
                                        }))
                                    }
                            }
                        }, t
                    }
                    return e = i, (n = [{
                        key: "onSubscribe",
                        value: function() {
                            this.cleanup || this.setEventListener(this.setup)
                        }
                    }, {
                        key: "onUnsubscribe",
                        value: function() {
                            var t;
                            this.hasListeners() || (null == (t = this.cleanup) || t.call(this), this.cleanup = void 0)
                        }
                    }, {
                        key: "setEventListener",
                        value: function(t) {
                            var e, n = this;
                            this.setup = t, null == (e = this.cleanup) || e.call(this), this.cleanup = t((function(t) {
                                "boolean" == typeof t ? n.setOnline(t) : n.onOnline()
                            }))
                        }
                    }, {
                        key: "setOnline",
                        value: function(t) {
                            this.online !== t && (this.online = t, this.onOnline())
                        }
                    }, {
                        key: "onOnline",
                        value: function() {
                            this.listeners.forEach((function(t) {
                                (0, t.listener)()
                            }))
                        }
                    }, {
                        key: "isOnline",
                        value: function() {
                            return "boolean" == typeof this.online ? this.online : "undefined" == typeof navigator || void 0 === navigator.onLine || navigator.onLine
                        }
                    }]) && X(e.prototype, n), r && X(e, r), i
                }(q));

            function et(t) {
                return Math.min(1e3 * Math.pow(2, t), 3e4)
            }

            function nt(t) {
                return "online" !== (null != t ? t : "online") || tt.isOnline()
            }
            var rt = function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.revert = null == e ? void 0 : e.revert, this.silent = null == e ? void 0 : e.silent
            };

            function ot(t) {
                return t instanceof rt
            }

            function it(t) {
                var e, n, r, o = !1,
                    i = 0,
                    u = !1,
                    a = new Promise((function(t, e) {
                        n = t, r = e
                    })),
                    c = function() {
                        return !z.isFocused() || "always" !== t.networkMode && !tt.isOnline()
                    },
                    l = function(r) {
                        u || (u = !0, null == t.onSuccess || t.onSuccess(r), null == e || e(), n(r))
                    },
                    s = function(n) {
                        u || (u = !0, null == t.onError || t.onError(n), null == e || e(), r(n))
                    },
                    f = function() {
                        return new Promise((function(n) {
                            e = function(t) {
                                var e = u || !c();
                                return e && n(t), e
                            }, null == t.onPause || t.onPause()
                        })).then((function() {
                            e = void 0, u || null == t.onContinue || t.onContinue()
                        }))
                    },
                    d = function e() {
                        if (!u) {
                            var n;
                            try {
                                n = t.fn()
                            } catch (t) {
                                n = Promise.reject(t)
                            }
                            Promise.resolve(n).then(l).catch((function(n) {
                                var r, a;
                                if (!u) {
                                    var l = null != (r = t.retry) ? r : 3,
                                        d = null != (a = t.retryDelay) ? a : et,
                                        p = "function" == typeof d ? d(i, n) : d,
                                        h = !0 === l || "number" == typeof l && i < l || "function" == typeof l && l(i, n);
                                    !o && h ? (i++, null == t.onFail || t.onFail(i, n), P(p).then((function() {
                                        if (c()) return f()
                                    })).then((function() {
                                        o ? s(n) : e()
                                    }))) : s(n)
                                }
                            }))
                        }
                    };
                return nt(t.networkMode) ? d() : f().then(d), {
                    promise: a,
                    cancel: function(e) {
                        u || (s(new rt(e)), null == t.abort || t.abort())
                    },
                    continue: function() {
                        return (null == e ? void 0 : e()) ? a : Promise.resolve()
                    },
                    cancelRetry: function() {
                        o = !0
                    },
                    continueRetry: function() {
                        o = !1
                    }
                }
            }

            function ut(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var at = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, n, r;
                return e = t, (n = [{
                    key: "destroy",
                    value: function() {
                        this.clearGcTimeout()
                    }
                }, {
                    key: "scheduleGc",
                    value: function() {
                        var t = this;
                        this.clearGcTimeout(), f(this.cacheTime) && (this.gcTimeout = setTimeout((function() {
                            t.optionalRemove()
                        }), this.cacheTime))
                    }
                }, {
                    key: "updateCacheTime",
                    value: function(t) {
                        this.cacheTime = Math.max(this.cacheTime || 0, null != t ? t : l ? 1 / 0 : 3e5)
                    }
                }, {
                    key: "clearGcTimeout",
                    value: function() {
                        this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
                    }
                }]) && ut(e.prototype, n), r && ut(e, r), t
            }();

            function ct(t) {
                return (ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function lt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function st(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? lt(Object(n), !0).forEach((function(e) {
                        ft(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function ft(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function dt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function pt(t, e, n) {
                return (pt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                    var r = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = mt(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, e);
                        return o.get ? o.get.call(n) : o.value
                    }
                })(t, e, n || t)
            }

            function ht(t, e) {
                return (ht = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function vt(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = mt(t);
                    if (e) {
                        var o = mt(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return yt(this, n)
                }
            }

            function yt(t, e) {
                return !e || "object" !== ct(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function mt(t) {
                return (mt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var bt = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && ht(t, e)
                }(i, t);
                var e, n, r, o = vt(i);

                function i(t) {
                    var e, n, r, u, a;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (e = o.call(this)).abortSignalConsumed = !1, e.defaultOptions = t.defaultOptions, e.setOptions(t.options), e.observers = [], e.cache = t.cache, e.logger = t.logger || C, e.queryKey = t.queryKey, e.queryHash = t.queryHash, e.initialState = t.state || (n = e.options, r = "function" == typeof n.initialData ? n.initialData() : n.initialData, a = (u = void 0 !== r) ? "function" == typeof n.initialDataUpdatedAt ? n.initialDataUpdatedAt() : n.initialDataUpdatedAt : 0, {
                        data: r,
                        dataUpdateCount: 0,
                        dataUpdatedAt: u ? null != a ? a : Date.now() : 0,
                        error: null,
                        errorUpdateCount: 0,
                        errorUpdatedAt: 0,
                        fetchFailureCount: 0,
                        fetchFailureReason: null,
                        fetchMeta: null,
                        isInvalidated: !1,
                        status: u ? "success" : "loading",
                        fetchStatus: "idle"
                    }), e.state = e.initialState, e.scheduleGc(), e
                }
                return e = i, (n = [{
                    key: "setOptions",
                    value: function(t) {
                        this.options = st(st({}, this.defaultOptions), t), this.updateCacheTime(this.options.cacheTime)
                    }
                }, {
                    key: "optionalRemove",
                    value: function() {
                        this.observers.length || "idle" !== this.state.fetchStatus || this.cache.remove(this)
                    }
                }, {
                    key: "setData",
                    value: function(t, e) {
                        var n = _(this.state.data, t, this.options);
                        return this.dispatch({
                            data: n,
                            type: "success",
                            dataUpdatedAt: null == e ? void 0 : e.updatedAt,
                            manual: null == e ? void 0 : e.manual
                        }), n
                    }
                }, {
                    key: "setState",
                    value: function(t, e) {
                        this.dispatch({
                            type: "setState",
                            state: t,
                            setStateOptions: e
                        })
                    }
                }, {
                    key: "cancel",
                    value: function(t) {
                        var e, n = this.promise;
                        return null == (e = this.retryer) || e.cancel(t), n ? n.then(s).catch(s) : Promise.resolve()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        pt(mt(i.prototype), "destroy", this).call(this), this.cancel({
                            silent: !0
                        })
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.destroy(), this.setState(this.initialState)
                    }
                }, {
                    key: "isActive",
                    value: function() {
                        return this.observers.some((function(t) {
                            return !1 !== t.options.enabled
                        }))
                    }
                }, {
                    key: "isDisabled",
                    value: function() {
                        return this.getObserversCount() > 0 && !this.isActive()
                    }
                }, {
                    key: "isStale",
                    value: function() {
                        return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((function(t) {
                            return t.getCurrentResult().isStale
                        }))
                    }
                }, {
                    key: "isStaleByTime",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return this.state.isInvalidated || !this.state.dataUpdatedAt || !d(this.state.dataUpdatedAt, t)
                    }
                }, {
                    key: "onFocus",
                    value: function() {
                        var t, e = this.observers.find((function(t) {
                            return t.shouldFetchOnWindowFocus()
                        }));
                        e && e.refetch({
                            cancelRefetch: !1
                        }), null == (t = this.retryer) || t.continue()
                    }
                }, {
                    key: "onOnline",
                    value: function() {
                        var t, e = this.observers.find((function(t) {
                            return t.shouldFetchOnReconnect()
                        }));
                        e && e.refetch({
                            cancelRefetch: !1
                        }), null == (t = this.retryer) || t.continue()
                    }
                }, {
                    key: "addObserver",
                    value: function(t) {
                        this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.cache.notify({
                            type: "observerAdded",
                            query: this,
                            observer: t
                        }))
                    }
                }, {
                    key: "removeObserver",
                    value: function(t) {
                        this.observers.includes(t) && (this.observers = this.observers.filter((function(e) {
                            return e !== t
                        })), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
                            revert: !0
                        }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
                            type: "observerRemoved",
                            query: this,
                            observer: t
                        }))
                    }
                }, {
                    key: "getObserversCount",
                    value: function() {
                        return this.observers.length
                    }
                }, {
                    key: "invalidate",
                    value: function() {
                        this.state.isInvalidated || this.dispatch({
                            type: "invalidate"
                        })
                    }
                }, {
                    key: "fetch",
                    value: function(t, e) {
                        var n, r, o = this;
                        if ("idle" !== this.state.fetchStatus)
                            if (this.state.dataUpdatedAt && null != e && e.cancelRefetch) this.cancel({
                                silent: !0
                            });
                            else if (this.promise) {
                            var i;
                            return null == (i = this.retryer) || i.continueRetry(), this.promise
                        }
                        if (t && this.setOptions(t), !this.options.queryFn) {
                            var u = this.observers.find((function(t) {
                                return t.options.queryFn
                            }));
                            u && this.setOptions(u.options)
                        }
                        Array.isArray(this.options.queryKey);
                        var a = function() {
                                if ("function" == typeof AbortController) return new AbortController
                            }(),
                            c = {
                                queryKey: this.queryKey,
                                pageParam: void 0,
                                meta: this.meta
                            },
                            l = function(t) {
                                Object.defineProperty(t, "signal", {
                                    enumerable: !0,
                                    get: function() {
                                        if (a) return o.abortSignalConsumed = !0, a.signal
                                    }
                                })
                            };
                        l(c);
                        var s, f = {
                            fetchOptions: e,
                            options: this.options,
                            queryKey: this.queryKey,
                            state: this.state,
                            fetchFn: function() {
                                return o.options.queryFn ? (o.abortSignalConsumed = !1, o.options.queryFn(c)) : Promise.reject("Missing queryFn for queryKey '" + o.options.queryHash + "'")
                            }
                        };
                        l(f), null == (n = this.options.behavior) || n.onFetch(f), this.revertState = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (r = f.fetchOptions) ? void 0 : r.meta)) && this.dispatch({
                            type: "fetch",
                            meta: null == (s = f.fetchOptions) ? void 0 : s.meta
                        });
                        var d = function(t) {
                            var e, n, r, i;
                            ot(t) && t.silent || o.dispatch({
                                type: "error",
                                error: t
                            }), ot(t) || (null == (e = (n = o.cache.config).onError) || e.call(n, t, o), null == (r = (i = o.cache.config).onSettled) || r.call(i, o.state.data, t, o)), o.isFetchingOptimistic || o.scheduleGc(), o.isFetchingOptimistic = !1
                        };
                        return this.retryer = it({
                            fn: f.fetchFn,
                            abort: null == a ? void 0 : a.abort.bind(a),
                            onSuccess: function(t) {
                                var e, n, r, i;
                                void 0 !== t ? (o.setData(t), null == (e = (n = o.cache.config).onSuccess) || e.call(n, t, o), null == (r = (i = o.cache.config).onSettled) || r.call(i, t, o.state.error, o), o.isFetchingOptimistic || o.scheduleGc(), o.isFetchingOptimistic = !1) : d(new Error(o.queryHash + " data is undefined"))
                            },
                            onError: d,
                            onFail: function(t, e) {
                                o.dispatch({
                                    type: "failed",
                                    failureCount: t,
                                    error: e
                                })
                            },
                            onPause: function() {
                                o.dispatch({
                                    type: "pause"
                                })
                            },
                            onContinue: function() {
                                o.dispatch({
                                    type: "continue"
                                })
                            },
                            retry: f.options.retry,
                            retryDelay: f.options.retryDelay,
                            networkMode: f.options.networkMode
                        }), this.promise = this.retryer.promise, this.promise
                    }
                }, {
                    key: "dispatch",
                    value: function(t) {
                        var e = this;
                        this.state = function(n) {
                            var r, o;
                            switch (t.type) {
                                case "failed":
                                    return st(st({}, n), {}, {
                                        fetchFailureCount: t.failureCount,
                                        fetchFailureReason: t.error
                                    });
                                case "pause":
                                    return st(st({}, n), {}, {
                                        fetchStatus: "paused"
                                    });
                                case "continue":
                                    return st(st({}, n), {}, {
                                        fetchStatus: "fetching"
                                    });
                                case "fetch":
                                    return st(st({}, n), {}, {
                                        fetchFailureCount: 0,
                                        fetchFailureReason: null,
                                        fetchMeta: null != (r = t.meta) ? r : null,
                                        fetchStatus: nt(e.options.networkMode) ? "fetching" : "paused"
                                    }, !n.dataUpdatedAt && {
                                        error: null,
                                        status: "loading"
                                    });
                                case "success":
                                    return st(st({}, n), {}, {
                                        data: t.data,
                                        dataUpdateCount: n.dataUpdateCount + 1,
                                        dataUpdatedAt: null != (o = t.dataUpdatedAt) ? o : Date.now(),
                                        error: null,
                                        isInvalidated: !1,
                                        status: "success"
                                    }, !t.manual && {
                                        fetchStatus: "idle",
                                        fetchFailureCount: 0,
                                        fetchFailureReason: null
                                    });
                                case "error":
                                    var i = t.error;
                                    return ot(i) && i.revert && e.revertState ? st({}, e.revertState) : st(st({}, n), {}, {
                                        error: i,
                                        errorUpdateCount: n.errorUpdateCount + 1,
                                        errorUpdatedAt: Date.now(),
                                        fetchFailureCount: n.fetchFailureCount + 1,
                                        fetchFailureReason: i,
                                        fetchStatus: "idle",
                                        status: "error"
                                    });
                                case "invalidate":
                                    return st(st({}, n), {}, {
                                        isInvalidated: !0
                                    });
                                case "setState":
                                    return st(st({}, n), t.state)
                            }
                        }(this.state), N.batch((function() {
                            e.observers.forEach((function(e) {
                                e.onQueryUpdate(t)
                            })), e.cache.notify({
                                query: e,
                                type: "updated",
                                action: t
                            })
                        }))
                    }
                }, {
                    key: "meta",
                    get: function() {
                        return this.options.meta
                    }
                }]) && dt(e.prototype, n), r && dt(e, r), i
            }(at);

            function gt(t) {
                return (gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function wt(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return Ot(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ot(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ot(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Et(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function St(t, e) {
                return (St = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function xt(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Rt(t);
                    if (e) {
                        var o = Rt(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return kt(this, n)
                }
            }

            function kt(t, e) {
                return !e || "object" !== gt(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function Rt(t) {
                return (Rt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var Pt = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && St(t, e)
                }(i, t);
                var e, n, r, o = xt(i);

                function i(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (e = o.call(this)).config = t || {}, e.queries = [], e.queriesMap = {}, e
                }
                return e = i, (n = [{
                    key: "build",
                    value: function(t, e, n) {
                        var r, o = e.queryKey,
                            i = null != (r = e.queryHash) ? r : m(o, e),
                            u = this.get(i);
                        return u || (u = new bt({
                            cache: this,
                            logger: t.getLogger(),
                            queryKey: o,
                            queryHash: i,
                            options: t.defaultQueryOptions(e),
                            state: n,
                            defaultOptions: t.getQueryDefaults(o)
                        }), this.add(u)), u
                    }
                }, {
                    key: "add",
                    value: function(t) {
                        this.queriesMap[t.queryHash] || (this.queriesMap[t.queryHash] = t, this.queries.push(t), this.notify({
                            type: "added",
                            query: t
                        }))
                    }
                }, {
                    key: "remove",
                    value: function(t) {
                        var e = this.queriesMap[t.queryHash];
                        e && (t.destroy(), this.queries = this.queries.filter((function(e) {
                            return e !== t
                        })), e === t && delete this.queriesMap[t.queryHash], this.notify({
                            type: "removed",
                            query: t
                        }))
                    }
                }, {
                    key: "clear",
                    value: function() {
                        var t = this;
                        N.batch((function() {
                            t.queries.forEach((function(e) {
                                t.remove(e)
                            }))
                        }))
                    }
                }, {
                    key: "get",
                    value: function(t) {
                        return this.queriesMap[t]
                    }
                }, {
                    key: "getAll",
                    value: function() {
                        return this.queries
                    }
                }, {
                    key: "find",
                    value: function(t, e) {
                        var n = wt(h(t, e), 1)[0];
                        return void 0 === n.exact && (n.exact = !0), this.queries.find((function(t) {
                            return v(n, t)
                        }))
                    }
                }, {
                    key: "findAll",
                    value: function(t, e) {
                        var n = wt(h(t, e), 1)[0];
                        return Object.keys(n).length > 0 ? this.queries.filter((function(t) {
                            return v(n, t)
                        })) : this.queries
                    }
                }, {
                    key: "notify",
                    value: function(t) {
                        var e = this;
                        N.batch((function() {
                            e.listeners.forEach((function(e) {
                                (0, e.listener)(t)
                            }))
                        }))
                    }
                }, {
                    key: "onFocus",
                    value: function() {
                        var t = this;
                        N.batch((function() {
                            t.queries.forEach((function(t) {
                                t.onFocus()
                            }))
                        }))
                    }
                }, {
                    key: "onOnline",
                    value: function() {
                        var t = this;
                        N.batch((function() {
                            t.queries.forEach((function(t) {
                                t.onOnline()
                            }))
                        }))
                    }
                }]) && Et(e.prototype, n), r && Et(e, r), i
            }(q);

            function jt(t) {
                return (jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function _t(t, e, n, r, o, i, u) {
                try {
                    var a = t[i](u),
                        c = a.value
                } catch (t) {
                    return void n(t)
                }
                a.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function Ct(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function At(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ct(Object(n), !0).forEach((function(e) {
                        Tt(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ct(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Tt(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function Dt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function It(t, e) {
                return (It = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function Lt(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Nt(t);
                    if (e) {
                        var o = Nt(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Mt(this, n)
                }
            }

            function Mt(t, e) {
                return !e || "object" !== jt(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function Nt(t) {
                return (Nt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var Ft = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && It(t, e)
                }(a, t);
                var e, n, r, o, i, u = Lt(a);

                function a(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), (e = u.call(this)).defaultOptions = t.defaultOptions, e.mutationId = t.mutationId, e.mutationCache = t.mutationCache, e.logger = t.logger || C, e.observers = [], e.state = t.state || qt(), e.setOptions(t.options), e.scheduleGc(), e
                }
                return e = a, (n = [{
                    key: "setOptions",
                    value: function(t) {
                        this.options = At(At({}, this.defaultOptions), t), this.updateCacheTime(this.options.cacheTime)
                    }
                }, {
                    key: "setState",
                    value: function(t) {
                        this.dispatch({
                            type: "setState",
                            state: t
                        })
                    }
                }, {
                    key: "addObserver",
                    value: function(t) {
                        this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.mutationCache.notify({
                            type: "observerAdded",
                            mutation: this,
                            observer: t
                        }))
                    }
                }, {
                    key: "removeObserver",
                    value: function(t) {
                        this.observers = this.observers.filter((function(e) {
                            return e !== t
                        })), this.scheduleGc(), this.mutationCache.notify({
                            type: "observerRemoved",
                            mutation: this,
                            observer: t
                        })
                    }
                }, {
                    key: "optionalRemove",
                    value: function() {
                        this.observers.length || ("loading" === this.state.status ? this.scheduleGc() : this.mutationCache.remove(this))
                    }
                }, {
                    key: "continue",
                    value: function() {
                        var t, e;
                        return null != (t = null == (e = this.retryer) ? void 0 : e.continue()) ? t : this.execute()
                    }
                }, {
                    key: "execute",
                    value: (o = regeneratorRuntime.mark((function t() {
                        var e, n, r, o, i, u, a, c, l, s, f, d, p, h, v, y, m, b, g, w, O, E, S, x, k = this;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e = function() {
                                            var t;
                                            return k.retryer = it({
                                                fn: function() {
                                                    return k.options.mutationFn ? k.options.mutationFn(k.state.variables) : Promise.reject("No mutationFn found")
                                                },
                                                onFail: function(t, e) {
                                                    k.dispatch({
                                                        type: "failed",
                                                        failureCount: t,
                                                        error: e
                                                    })
                                                },
                                                onPause: function() {
                                                    k.dispatch({
                                                        type: "pause"
                                                    })
                                                },
                                                onContinue: function() {
                                                    k.dispatch({
                                                        type: "continue"
                                                    })
                                                },
                                                retry: null != (t = k.options.retry) ? t : 0,
                                                retryDelay: k.options.retryDelay,
                                                networkMode: k.options.networkMode
                                            }), k.retryer.promise
                                        }, n = "loading" === this.state.status, t.prev = 2, n) {
                                        t.next = 11;
                                        break
                                    }
                                    return this.dispatch({
                                        type: "loading",
                                        variables: this.options.variables
                                    }), t.next = 7, null == (f = (d = this.mutationCache.config).onMutate) ? void 0 : f.call(d, this.state.variables, this);
                                case 7:
                                    return t.next = 9, null == (p = (h = this.options).onMutate) ? void 0 : p.call(h, this.state.variables);
                                case 9:
                                    (v = t.sent) !== this.state.context && this.dispatch({
                                        type: "loading",
                                        context: v,
                                        variables: this.state.variables
                                    });
                                case 11:
                                    return t.next = 13, e();
                                case 13:
                                    return y = t.sent, t.next = 16, null == (r = (o = this.mutationCache.config).onSuccess) ? void 0 : r.call(o, y, this.state.variables, this.state.context, this);
                                case 16:
                                    return t.next = 18, null == (i = (u = this.options).onSuccess) ? void 0 : i.call(u, y, this.state.variables, this.state.context);
                                case 18:
                                    return t.next = 20, null == (a = (c = this.mutationCache.config).onSettled) ? void 0 : a.call(c, y, null, this.state.variables, this.state.context, this);
                                case 20:
                                    return t.next = 22, null == (l = (s = this.options).onSettled) ? void 0 : l.call(s, y, null, this.state.variables, this.state.context);
                                case 22:
                                    return this.dispatch({
                                        type: "success",
                                        data: y
                                    }), t.abrupt("return", y);
                                case 26:
                                    return t.prev = 26, t.t0 = t.catch(2), t.prev = 28, t.next = 31, null == (m = (b = this.mutationCache.config).onError) ? void 0 : m.call(b, t.t0, this.state.variables, this.state.context, this);
                                case 31:
                                    return t.next = 34, null == (g = (w = this.options).onError) ? void 0 : g.call(w, t.t0, this.state.variables, this.state.context);
                                case 34:
                                    return t.next = 36, null == (O = (E = this.mutationCache.config).onSettled) ? void 0 : O.call(E, void 0, t.t0, this.state.variables, this.state.context, this);
                                case 36:
                                    return t.next = 38, null == (S = (x = this.options).onSettled) ? void 0 : S.call(x, void 0, t.t0, this.state.variables, this.state.context);
                                case 38:
                                    throw t.t0;
                                case 39:
                                    return t.prev = 39, this.dispatch({
                                        type: "error",
                                        error: t.t0
                                    }), t.finish(39);
                                case 42:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [2, 26],
                            [28, , 39, 42]
                        ])
                    })), i = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(n, r) {
                            var i = o.apply(t, e);

                            function u(t) {
                                _t(i, n, r, u, a, "next", t)
                            }

                            function a(t) {
                                _t(i, n, r, u, a, "throw", t)
                            }
                            u(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "dispatch",
                    value: function(t) {
                        var e = this;
                        this.state = function(n) {
                            switch (t.type) {
                                case "failed":
                                    return At(At({}, n), {}, {
                                        failureCount: t.failureCount,
                                        failureReason: t.error
                                    });
                                case "pause":
                                    return At(At({}, n), {}, {
                                        isPaused: !0
                                    });
                                case "continue":
                                    return At(At({}, n), {}, {
                                        isPaused: !1
                                    });
                                case "loading":
                                    return At(At({}, n), {}, {
                                        context: t.context,
                                        data: void 0,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        isPaused: !nt(e.options.networkMode),
                                        status: "loading",
                                        variables: t.variables
                                    });
                                case "success":
                                    return At(At({}, n), {}, {
                                        data: t.data,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        status: "success",
                                        isPaused: !1
                                    });
                                case "error":
                                    return At(At({}, n), {}, {
                                        data: void 0,
                                        error: t.error,
                                        failureCount: n.failureCount + 1,
                                        failureReason: t.error,
                                        isPaused: !1,
                                        status: "error"
                                    });
                                case "setState":
                                    return At(At({}, n), t.state)
                            }
                        }(this.state), N.batch((function() {
                            e.observers.forEach((function(e) {
                                e.onMutationUpdate(t)
                            })), e.mutationCache.notify({
                                mutation: e,
                                type: "updated",
                                action: t
                            })
                        }))
                    }
                }, {
                    key: "meta",
                    get: function() {
                        return this.options.meta
                    }
                }]) && Dt(e.prototype, n), r && Dt(e, r), a
            }(at);

            function qt() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0
                }
            }

            function Ut(t) {
                return (Ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function Qt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function Ht(t, e) {
                return (Ht = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function Kt(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Gt(t);
                    if (e) {
                        var o = Gt(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Bt(this, n)
                }
            }

            function Bt(t, e) {
                return !e || "object" !== Ut(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function Gt(t) {
                return (Gt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var zt = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && Ht(t, e)
                }(i, t);
                var e, n, r, o = Kt(i);

                function i(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (e = o.call(this)).config = t || {}, e.mutations = [], e.mutationId = 0, e
                }
                return e = i, (n = [{
                    key: "build",
                    value: function(t, e, n) {
                        var r = new Ft({
                            mutationCache: this,
                            logger: t.getLogger(),
                            mutationId: ++this.mutationId,
                            options: t.defaultMutationOptions(e),
                            state: n,
                            defaultOptions: e.mutationKey ? t.getMutationDefaults(e.mutationKey) : void 0
                        });
                        return this.add(r), r
                    }
                }, {
                    key: "add",
                    value: function(t) {
                        this.mutations.push(t), this.notify({
                            type: "added",
                            mutation: t
                        })
                    }
                }, {
                    key: "remove",
                    value: function(t) {
                        this.mutations = this.mutations.filter((function(e) {
                            return e !== t
                        })), this.notify({
                            type: "removed",
                            mutation: t
                        })
                    }
                }, {
                    key: "clear",
                    value: function() {
                        var t = this;
                        N.batch((function() {
                            t.mutations.forEach((function(e) {
                                t.remove(e)
                            }))
                        }))
                    }
                }, {
                    key: "getAll",
                    value: function() {
                        return this.mutations
                    }
                }, {
                    key: "find",
                    value: function(t) {
                        return void 0 === t.exact && (t.exact = !0), this.mutations.find((function(e) {
                            return y(t, e)
                        }))
                    }
                }, {
                    key: "findAll",
                    value: function(t) {
                        return this.mutations.filter((function(e) {
                            return y(t, e)
                        }))
                    }
                }, {
                    key: "notify",
                    value: function(t) {
                        var e = this;
                        N.batch((function() {
                            e.listeners.forEach((function(e) {
                                (0, e.listener)(t)
                            }))
                        }))
                    }
                }, {
                    key: "resumePausedMutations",
                    value: function() {
                        var t, e = this;
                        return this.resuming = (null != (t = this.resuming) ? t : Promise.resolve()).then((function() {
                            var t = e.mutations.filter((function(t) {
                                return t.state.isPaused
                            }));
                            return N.batch((function() {
                                return t.reduce((function(t, e) {
                                    return t.then((function() {
                                        return e.continue().catch(s)
                                    }))
                                }), Promise.resolve())
                            }))
                        })).then((function() {
                            e.resuming = void 0
                        })), this.resuming
                    }
                }]) && Qt(e.prototype, n), r && Qt(e, r), i
            }(q);

            function Wt(t) {
                return function(t) {
                    if (Array.isArray(t)) return Xt(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return Xt(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xt(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Xt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Vt() {
                return {
                    onFetch: function(t) {
                        t.fetchFn = function() {
                            var e, n, r, o, i, u, a, c = null == (e = t.fetchOptions) || null == (n = e.meta) ? void 0 : n.refetchPage,
                                l = null == (r = t.fetchOptions) || null == (o = r.meta) ? void 0 : o.fetchMore,
                                s = null == l ? void 0 : l.pageParam,
                                f = "forward" === (null == l ? void 0 : l.direction),
                                d = "backward" === (null == l ? void 0 : l.direction),
                                p = (null == (i = t.state.data) ? void 0 : i.pages) || [],
                                h = (null == (u = t.state.data) ? void 0 : u.pageParams) || [],
                                v = h,
                                y = !1,
                                m = t.options.queryFn || function() {
                                    return Promise.reject("Missing queryFn for queryKey '" + t.options.queryHash + "'")
                                },
                                b = function(t, e, n, r) {
                                    return v = r ? [e].concat(Wt(v)) : [].concat(Wt(v), [e]), r ? [n].concat(Wt(t)) : [].concat(Wt(t), [n])
                                },
                                g = function(e, n, r, o) {
                                    if (y) return Promise.reject("Cancelled");
                                    if (void 0 === r && !n && e.length) return Promise.resolve(e);
                                    var i, u = {
                                        queryKey: t.queryKey,
                                        pageParam: r,
                                        meta: t.options.meta
                                    };
                                    i = u, Object.defineProperty(i, "signal", {
                                        enumerable: !0,
                                        get: function() {
                                            var e, n;
                                            return null != (e = t.signal) && e.aborted ? y = !0 : null == (n = t.signal) || n.addEventListener("abort", (function() {
                                                y = !0
                                            })), t.signal
                                        }
                                    });
                                    var a = m(u);
                                    return Promise.resolve(a).then((function(t) {
                                        return b(e, r, t, o)
                                    }))
                                };
                            if (p.length)
                                if (f) {
                                    var w = void 0 !== s,
                                        O = w ? s : $t(t.options, p);
                                    a = g(p, w, O)
                                } else if (d) {
                                var E = void 0 !== s,
                                    S = E ? s : Zt(t.options, p);
                                a = g(p, E, S, !0)
                            } else ! function() {
                                v = [];
                                var e = void 0 === t.options.getNextPageParam,
                                    n = !c || !p[0] || c(p[0], 0, p);
                                a = n ? g([], e, h[0]) : Promise.resolve(b([], h[0], p[0]));
                                for (var r = function(n) {
                                        a = a.then((function(r) {
                                            if (!c || !p[n] || c(p[n], n, p)) {
                                                var o = e ? h[n] : $t(t.options, r);
                                                return g(r, e, o)
                                            }
                                            return Promise.resolve(b(r, h[n], p[n]))
                                        }))
                                    }, o = 1; o < p.length; o++) r(o)
                            }();
                            else a = g([]);
                            return a.then((function(t) {
                                return {
                                    pages: t,
                                    pageParams: v
                                }
                            }))
                        }
                    }
                }
            }

            function $t(t, e) {
                return null == t.getNextPageParam ? void 0 : t.getNextPageParam(e[e.length - 1], e)
            }

            function Zt(t, e) {
                return null == t.getPreviousPageParam ? void 0 : t.getPreviousPageParam(e[0], e)
            }

            function Yt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Jt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Yt(Object(n), !0).forEach((function(e) {
                        te(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Yt(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function te(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function ee(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return ne(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ne(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ne(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function re(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function oe(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var ie = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        re(this, t), this.queryCache = e.queryCache || new Pt, this.mutationCache = e.mutationCache || new zt, this.logger = e.logger || C, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0
                    }
                    var e, n, r;
                    return e = t, (n = [{
                        key: "mount",
                        value: function() {
                            var t = this;
                            this.mountCount++, 1 === this.mountCount && (this.unsubscribeFocus = z.subscribe((function() {
                                z.isFocused() && (t.resumePausedMutations(), t.queryCache.onFocus())
                            })), this.unsubscribeOnline = tt.subscribe((function() {
                                tt.isOnline() && (t.resumePausedMutations(), t.queryCache.onOnline())
                            })))
                        }
                    }, {
                        key: "unmount",
                        value: function() {
                            var t, e;
                            this.mountCount--, 0 === this.mountCount && (null == (t = this.unsubscribeFocus) || t.call(this), this.unsubscribeFocus = void 0, null == (e = this.unsubscribeOnline) || e.call(this), this.unsubscribeOnline = void 0)
                        }
                    }, {
                        key: "isFetching",
                        value: function(t, e) {
                            var n = ee(h(t, e), 1)[0];
                            return n.fetchStatus = "fetching", this.queryCache.findAll(n).length
                        }
                    }, {
                        key: "isMutating",
                        value: function(t) {
                            return this.mutationCache.findAll(Jt(Jt({}, t), {}, {
                                fetching: !0
                            })).length
                        }
                    }, {
                        key: "getQueryData",
                        value: function(t, e) {
                            var n;
                            return null == (n = this.queryCache.find(t, e)) ? void 0 : n.state.data
                        }
                    }, {
                        key: "ensureQueryData",
                        value: function(t, e, n) {
                            var r = p(t, e, n),
                                o = this.getQueryData(r.queryKey);
                            return o ? Promise.resolve(o) : this.fetchQuery(r)
                        }
                    }, {
                        key: "getQueriesData",
                        value: function(t) {
                            return this.getQueryCache().findAll(t).map((function(t) {
                                return [t.queryKey, t.state.data]
                            }))
                        }
                    }, {
                        key: "setQueryData",
                        value: function(t, e, n) {
                            var r = this.queryCache.find(t),
                                o = function(t, e) {
                                    return "function" == typeof t ? t(e) : t
                                }(e, null == r ? void 0 : r.state.data);
                            if (void 0 !== o) {
                                var i = p(t),
                                    u = this.defaultQueryOptions(i);
                                return this.queryCache.build(this, u).setData(o, Jt(Jt({}, n), {}, {
                                    manual: !0
                                }))
                            }
                        }
                    }, {
                        key: "setQueriesData",
                        value: function(t, e, n) {
                            var r = this;
                            return N.batch((function() {
                                return r.getQueryCache().findAll(t).map((function(t) {
                                    var o = t.queryKey;
                                    return [o, r.setQueryData(o, e, n)]
                                }))
                            }))
                        }
                    }, {
                        key: "getQueryState",
                        value: function(t, e) {
                            var n;
                            return null == (n = this.queryCache.find(t, e)) ? void 0 : n.state
                        }
                    }, {
                        key: "removeQueries",
                        value: function(t, e) {
                            var n = ee(h(t, e), 1)[0],
                                r = this.queryCache;
                            N.batch((function() {
                                r.findAll(n).forEach((function(t) {
                                    r.remove(t)
                                }))
                            }))
                        }
                    }, {
                        key: "resetQueries",
                        value: function(t, e, n) {
                            var r = this,
                                o = ee(h(t, e, n), 2),
                                i = o[0],
                                u = o[1],
                                a = this.queryCache,
                                c = Jt({
                                    type: "active"
                                }, i);
                            return N.batch((function() {
                                return a.findAll(i).forEach((function(t) {
                                    t.reset()
                                })), r.refetchQueries(c, u)
                            }))
                        }
                    }, {
                        key: "cancelQueries",
                        value: function(t, e, n) {
                            var r = this,
                                o = ee(h(t, e, n), 2),
                                i = o[0],
                                u = o[1],
                                a = void 0 === u ? {} : u;
                            void 0 === a.revert && (a.revert = !0);
                            var c = N.batch((function() {
                                return r.queryCache.findAll(i).map((function(t) {
                                    return t.cancel(a)
                                }))
                            }));
                            return Promise.all(c).then(s).catch(s)
                        }
                    }, {
                        key: "invalidateQueries",
                        value: function(t, e, n) {
                            var r = this,
                                o = ee(h(t, e, n), 2),
                                i = o[0],
                                u = o[1];
                            return N.batch((function() {
                                var t, e;
                                if (r.queryCache.findAll(i).forEach((function(t) {
                                        t.invalidate()
                                    })), "none" === i.refetchType) return Promise.resolve();
                                var n = Jt(Jt({}, i), {}, {
                                    type: null != (t = null != (e = i.refetchType) ? e : i.type) ? t : "active"
                                });
                                return r.refetchQueries(n, u)
                            }))
                        }
                    }, {
                        key: "refetchQueries",
                        value: function(t, e, n) {
                            var r = this,
                                o = ee(h(t, e, n), 2),
                                i = o[0],
                                u = o[1],
                                a = N.batch((function() {
                                    return r.queryCache.findAll(i).filter((function(t) {
                                        return !t.isDisabled()
                                    })).map((function(t) {
                                        var e;
                                        return t.fetch(void 0, Jt(Jt({}, u), {}, {
                                            cancelRefetch: null == (e = null == u ? void 0 : u.cancelRefetch) || e,
                                            meta: {
                                                refetchPage: i.refetchPage
                                            }
                                        }))
                                    }))
                                })),
                                c = Promise.all(a).then(s);
                            return null != u && u.throwOnError || (c = c.catch(s)), c
                        }
                    }, {
                        key: "fetchQuery",
                        value: function(t, e, n) {
                            var r = p(t, e, n),
                                o = this.defaultQueryOptions(r);
                            void 0 === o.retry && (o.retry = !1);
                            var i = this.queryCache.build(this, o);
                            return i.isStaleByTime(o.staleTime) ? i.fetch(o) : Promise.resolve(i.state.data)
                        }
                    }, {
                        key: "prefetchQuery",
                        value: function(t, e, n) {
                            return this.fetchQuery(t, e, n).then(s).catch(s)
                        }
                    }, {
                        key: "fetchInfiniteQuery",
                        value: function(t, e, n) {
                            var r = p(t, e, n);
                            return r.behavior = Vt(), this.fetchQuery(r)
                        }
                    }, {
                        key: "prefetchInfiniteQuery",
                        value: function(t, e, n) {
                            return this.fetchInfiniteQuery(t, e, n).then(s).catch(s)
                        }
                    }, {
                        key: "resumePausedMutations",
                        value: function() {
                            return this.mutationCache.resumePausedMutations()
                        }
                    }, {
                        key: "getQueryCache",
                        value: function() {
                            return this.queryCache
                        }
                    }, {
                        key: "getMutationCache",
                        value: function() {
                            return this.mutationCache
                        }
                    }, {
                        key: "getLogger",
                        value: function() {
                            return this.logger
                        }
                    }, {
                        key: "getDefaultOptions",
                        value: function() {
                            return this.defaultOptions
                        }
                    }, {
                        key: "setDefaultOptions",
                        value: function(t) {
                            this.defaultOptions = t
                        }
                    }, {
                        key: "setQueryDefaults",
                        value: function(t, e) {
                            var n = this.queryDefaults.find((function(e) {
                                return b(t) === b(e.queryKey)
                            }));
                            n ? n.defaultOptions = e : this.queryDefaults.push({
                                queryKey: t,
                                defaultOptions: e
                            })
                        }
                    }, {
                        key: "getQueryDefaults",
                        value: function(t) {
                            if (t) {
                                var e = this.queryDefaults.find((function(e) {
                                    return g(t, e.queryKey)
                                }));
                                return null == e ? void 0 : e.defaultOptions
                            }
                        }
                    }, {
                        key: "setMutationDefaults",
                        value: function(t, e) {
                            var n = this.mutationDefaults.find((function(e) {
                                return b(t) === b(e.mutationKey)
                            }));
                            n ? n.defaultOptions = e : this.mutationDefaults.push({
                                mutationKey: t,
                                defaultOptions: e
                            })
                        }
                    }, {
                        key: "getMutationDefaults",
                        value: function(t) {
                            if (t) {
                                var e = this.mutationDefaults.find((function(e) {
                                    return g(t, e.mutationKey)
                                }));
                                return null == e ? void 0 : e.defaultOptions
                            }
                        }
                    }, {
                        key: "defaultQueryOptions",
                        value: function(t) {
                            if (null != t && t._defaulted) return t;
                            var e = Jt(Jt(Jt(Jt({}, this.defaultOptions.queries), this.getQueryDefaults(null == t ? void 0 : t.queryKey)), t), {}, {
                                _defaulted: !0
                            });
                            return !e.queryHash && e.queryKey && (e.queryHash = m(e.queryKey, e)), void 0 === e.refetchOnReconnect && (e.refetchOnReconnect = "always" !== e.networkMode), void 0 === e.useErrorBoundary && (e.useErrorBoundary = !!e.suspense), e
                        }
                    }, {
                        key: "defaultMutationOptions",
                        value: function(t) {
                            return null != t && t._defaulted ? t : Jt(Jt(Jt(Jt({}, this.defaultOptions.mutations), this.getMutationDefaults(null == t ? void 0 : t.mutationKey)), t), {}, {
                                _defaulted: !0
                            })
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this.queryCache.clear(), this.mutationCache.clear()
                        }
                    }]) && oe(e.prototype, n), r && oe(e, r), t
                }(),
                ue = t.createContext(void 0),
                ae = t.createContext(!1);

            function ce(t, e) {
                return t || (e && "undefined" != typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = ue), window.ReactQueryClientContext) : ue)
            }
            var le = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.context,
                        r = t.useContext(ce(n, t.useContext(ae)));
                    if (!r) throw new Error("No QueryClient set, use QueryClientProvider to set one");
                    return r
                },
                se = function(e) {
                    var n = e.client,
                        r = e.children,
                        o = e.context,
                        i = e.contextSharing,
                        u = void 0 !== i && i;
                    t.useEffect((function() {
                        return n.mount(),
                            function() {
                                n.unmount()
                            }
                    }), [n]);
                    var a = ce(o, u);
                    return t.createElement(ae.Provider, {
                        value: !o && u
                    }, t.createElement(a.Provider, {
                        value: n
                    }, r))
                },
                fe = "!__!",
                de = "__FN__",
                pe = "__FN_END__",
                he = new RegExp("^__FN__(.*?)\\|(.*)__FN_END__$"),
                ve = function(t, e, n) {
                    var r = {},
                        o = {};
                    n.forEach((function(t) {
                        if (3 === t.length) {
                            var e = t[0],
                                n = t[1],
                                i = t[2];
                            r[e] = "!__!__FN__" + e + "|", r[n] = "__FN_END__!__!", o[e] = i
                        } else {
                            var u = t[0];
                            i = t[1];
                            r[u] = i
                        }
                    }));
                    var i = t(e, r),
                        u = !1,
                        a = i.split(fe).map((function(t) {
                            if (t.startsWith(de) && t.endsWith(pe)) {
                                var e = he.exec(t);
                                if (e) {
                                    e[0];
                                    var n = e[1],
                                        r = e[2],
                                        i = o[n];
                                    if (i && "function" == typeof i) return i(r);
                                    console.warn("Unexpected missing function for key", n), u = !0
                                }
                            } else if (t.startsWith(de) || t.endsWith(pe)) return console.warn("Unexpected malformed segment", t), u = !0, "";
                            return t
                        }));
                    return u ? [] : a.filter((function(t) {
                        return "" !== t
                    }))
                },
                ye = Roblox,
                me = function(t, e) {
                    for (var n = 0, r = e.length, o = t.length; n < r; n++, o++) t[o] = e[n];
                    return t
                },
                be = function(t) {
                    var e = function(t) {
                            var e = new ye.Intl,
                                n = t.common,
                                r = t.feature,
                                o = new ye.TranslationResourceProvider(e),
                                i = me(me([], n), [r]).filter((function(t) {
                                    return !!t
                                })).map((function(t) {
                                    return o.getTranslationResource(t)
                                }));
                            return {
                                resource: o.mergeTranslationResources.apply(o, i),
                                intl: e
                            }
                        }(t),
                        n = e.resource,
                        r = e.intl,
                        o = function(t, e) {
                            void 0 === e && (e = {});
                            var r = n.get(t, e);
                            return r || t + " " + Object.values(e).join(",")
                        };
                    return {
                        translate: o,
                        intl: r,
                        translateHtml: function(t, e) {
                            return ve(o, t, e)
                        }
                    }
                },
                ge = (0, t.createContext)(void 0),
                we = function(n) {
                    var r = n.translationConfig,
                        o = n.children,
                        i = (0, t.useMemo)((function() {
                            return be(r)
                        }), []);
                    return e().createElement(ge.Provider, {
                        value: i
                    }, o)
                },
                Oe = function() {
                    var e = (0, t.useContext)(ge);
                    if (!e) throw new Error("useTranslations must be used within a TranslationProvider");
                    return e
                };

            function Ee(t) {
                return (Ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function Se(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function xe(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Se(Object(n), !0).forEach((function(e) {
                        ke(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function ke(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function Re(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function Pe(t, e) {
                return (Pe = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function je(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Ce(t);
                    if (e) {
                        var o = Ce(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return _e(this, n)
                }
            }

            function _e(t, e) {
                return !e || "object" !== Ee(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function Ce(t) {
                return (Ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var Ae = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && Pe(t, e)
                    }(i, t);
                    var e, n, r, o = je(i);

                    function i(t, e) {
                        var n;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), (n = o.call(this)).client = t, n.setOptions(e), n.bindMethods(), n.updateResult(), n
                    }
                    return e = i, (n = [{
                        key: "bindMethods",
                        value: function() {
                            this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                        }
                    }, {
                        key: "setOptions",
                        value: function(t) {
                            var e, n = this.options;
                            this.options = this.client.defaultMutationOptions(t), E(n, this.options) || this.client.getMutationCache().notify({
                                type: "observerOptionsUpdated",
                                mutation: this.currentMutation,
                                observer: this
                            }), null == (e = this.currentMutation) || e.setOptions(this.options)
                        }
                    }, {
                        key: "onUnsubscribe",
                        value: function() {
                            var t;
                            this.hasListeners() || null == (t = this.currentMutation) || t.removeObserver(this)
                        }
                    }, {
                        key: "onMutationUpdate",
                        value: function(t) {
                            this.updateResult();
                            var e = {
                                listeners: !0
                            };
                            "success" === t.type ? e.onSuccess = !0 : "error" === t.type && (e.onError = !0), this.notify(e)
                        }
                    }, {
                        key: "getCurrentResult",
                        value: function() {
                            return this.currentResult
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.currentMutation = void 0, this.updateResult(), this.notify({
                                listeners: !0
                            })
                        }
                    }, {
                        key: "mutate",
                        value: function(t, e) {
                            return this.mutateOptions = e, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, xe(xe({}, this.options), {}, {
                                variables: void 0 !== t ? t : this.options.variables
                            })), this.currentMutation.addObserver(this), this.currentMutation.execute()
                        }
                    }, {
                        key: "updateResult",
                        value: function() {
                            var t = this.currentMutation ? this.currentMutation.state : {
                                    context: void 0,
                                    data: void 0,
                                    error: null,
                                    failureCount: 0,
                                    failureReason: null,
                                    isPaused: !1,
                                    status: "idle",
                                    variables: void 0
                                },
                                e = xe(xe({}, t), {}, {
                                    isLoading: "loading" === t.status,
                                    isSuccess: "success" === t.status,
                                    isError: "error" === t.status,
                                    isIdle: "idle" === t.status,
                                    mutate: this.mutate,
                                    reset: this.reset
                                });
                            this.currentResult = e
                        }
                    }, {
                        key: "notify",
                        value: function(t) {
                            var e = this;
                            N.batch((function() {
                                var n, r, o, i;
                                if (e.mutateOptions && e.hasListeners())
                                    if (t.onSuccess) null == (n = (r = e.mutateOptions).onSuccess) || n.call(r, e.currentResult.data, e.currentResult.variables, e.currentResult.context), null == (o = (i = e.mutateOptions).onSettled) || o.call(i, e.currentResult.data, null, e.currentResult.variables, e.currentResult.context);
                                    else if (t.onError) {
                                    var u, a, c, l;
                                    null == (u = (a = e.mutateOptions).onError) || u.call(a, e.currentResult.error, e.currentResult.variables, e.currentResult.context), null == (c = (l = e.mutateOptions).onSettled) || c.call(l, void 0, e.currentResult.error, e.currentResult.variables, e.currentResult.context)
                                }
                                t.listeners && e.listeners.forEach((function(t) {
                                    (0, t.listener)(e.currentResult)
                                }))
                            }))
                        }
                    }]) && Re(e.prototype, n), r && Re(e, r), i
                }(q),
                Te = n(644).useSyncExternalStore;

            function De(t) {
                return function(t) {
                    if (Array.isArray(t)) return Ie(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return Ie(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ie(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ie(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Le(t, e) {
                return "function" == typeof t ? t.apply(void 0, De(e)) : !!t
            }

            function Me(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ne(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Me(Object(n), !0).forEach((function(e) {
                        Fe(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Me(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Fe(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function qe(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return Ue(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ue(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ue(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Qe(e, n, r) {
                var o = function(t, e, n) {
                        return R(t) ? "function" == typeof e ? a(a({}, n), {}, {
                            mutationKey: t,
                            mutationFn: e
                        }) : a(a({}, e), {}, {
                            mutationKey: t
                        }) : "function" == typeof t ? a(a({}, e), {}, {
                            mutationFn: t
                        }) : a({}, t)
                    }(e, n, r),
                    i = le({
                        context: o.context
                    }),
                    u = qe(t.useState((function() {
                        return new Ae(i, o)
                    })), 1)[0];
                t.useEffect((function() {
                    u.setOptions(o)
                }), [u, o]);
                var c = Te(t.useCallback((function(t) {
                        return u.subscribe(N.batchCalls(t))
                    }), [u]), (function() {
                        return u.getCurrentResult()
                    }), (function() {
                        return u.getCurrentResult()
                    })),
                    l = t.useCallback((function(t, e) {
                        u.mutate(t, e).catch(He)
                    }), [u]);
                if (c.error && Le(u.options.useErrorBoundary, [c.error])) throw c.error;
                return Ne(Ne({}, c), {}, {
                    mutate: l,
                    mutateAsync: c.mutate
                })
            }

            function He() {}
            var Ke = n(559),
                Be = function(n) {
                    var r = n.open,
                        o = n.onClose,
                        i = n.title,
                        u = n.content,
                        a = n.children;
                    return (0, t.useEffect)((function() {
                        var t = function(t) {
                            "Escape" === t.key && o()
                        };
                        return r && document.addEventListener("keydown", t, !1),
                            function() {
                                document.removeEventListener("keydown", t, !1)
                            }
                    }), [r, o]), e().createElement(t.Fragment, null, r && e().createElement("div", {
                        className: "modal-overlay"
                    }, e().createElement("div", {
                        className: "custom-modal"
                    }, e().createElement("div", {
                        className: "modal-header"
                    }, e().createElement("div", {
                        className: "modal-head-left"
                    }, e().createElement("h2", null, i)), e().createElement("div", {
                        className: "modal-head-right"
                    }, e().createElement("button", {
                        type: "button",
                        onClick: o,
                        className: "transparent-button",
                        "aria-label": "Close"
                    }, e().createElement("span", {
                        className: "close-icon"
                    })))), u && e().createElement("p", {
                        className: "modal-content"
                    }, u), a)))
                };
            Be.defaultProps = {
                title: "Default Modal Title",
                content: "",
                children: null
            };
            var Ge, ze = Be,
                We = {
                    MAX_URL_LENGTH: 2083,
                    MAX_NAME_LENGTH: 100,
                    MAX_EMAIL_LENGTH: 320,
                    MAX_DESCRIPTION_LENGTH: 1e3
                },
                Xe = "/illegal-content-reporting",
                Ve = "/illegal-content-reporting/metadata",
                $e = "mailto:copyright_agent@roblox.com",
                Ze = "IP Infringement Report[DSA]",
                Ye = "https://en.help.roblox.com/hc/en-us/articles/115004647846#intellectual-property-and-ugc",
                Je = "IllegalContent",
                tn = "ChildSexualExploitation",
                en = "IPInfringement",
                nn = ((Ge = {}).IllegalContent = "OTHER", Ge.ChildSexualExploitation = "CHILD_SEXUAL_EXPLOITATION", Ge.TerrorismAndViolentExtremism = "TERRORISM_AND_VIOLENT_EXTREMISM", Ge.IPInfringement = "IP_INFRINGEMENT", Ge.ThreatsOfViolence = "THREATS_OF_VIOLENCE", Ge.HateSpeech = "HATE_SPEECH", Ge.Scams = "SCAMS", Ge.IllegalGoodsAndActivities = "ILLEGAL_GOODS_AND_ACTIVITIES", Ge),
                rn = "https://www.roblox.com/support",
                on = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function u(t) {
                            try {
                                c(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function a(t) {
                            try {
                                c(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function c(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))).then(u, a)
                        }
                        c((r = r.apply(t, e || [])).next())
                    }))
                },
                un = function(t, e) {
                    var n, r, o, i, u = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return u.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            u.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = u.ops.pop(), u.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = u.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                u.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && u.label < o[1]) {
                                                u.label = o[1], o = i;
                                                break
                                            }
                                            if (o && u.label < o[2]) {
                                                u.label = o[2], u.ops.push(i);
                                                break
                                            }
                                            o[2] && u.ops.pop(), u.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, u)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                an = function() {
                    return on(void 0, void 0, Promise, (function() {
                        var t, e;
                        return un(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return t = ye.EnvironmentUrls.websiteUrl, e = {
                                        url: "" + t + Ve,
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    }, [4, o.httpService.get(e)];
                                case 1:
                                    return [2, n.sent().data]
                            }
                        }))
                    }))
                },
                cn = function(t) {
                    return on(void 0, void 0, Promise, (function() {
                        var e, n;
                        return un(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return e = "" + ye.EnvironmentUrls.websiteUrl + Xe, n = {
                                        url: e
                                    }, [4, o.httpService.post(n, t)];
                                case 1:
                                    return [2, r.sent().data]
                            }
                        }))
                    }))
                };

            function ln(t) {
                return (ln = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function sn(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function fn(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? sn(Object(n), !0).forEach((function(e) {
                        dn(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : sn(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function dn(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function pn(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                }
                return o
            }

            function hn(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function vn(t, e) {
                return (vn = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function yn(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = bn(t);
                    if (e) {
                        var o = bn(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return mn(this, n)
                }
            }

            function mn(t, e) {
                return !e || "object" !== ln(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function bn(t) {
                return (bn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var gn = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && vn(t, e)
                }(i, t);
                var e, n, r, o = yn(i);

                function i(t, e) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (n = o.call(this)).client = t, n.options = e, n.trackedProps = new Set, n.selectError = null, n.bindMethods(), n.setOptions(e), n
                }
                return e = i, (n = [{
                    key: "bindMethods",
                    value: function() {
                        this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
                    }
                }, {
                    key: "onSubscribe",
                    value: function() {
                        1 === this.listeners.size && (this.currentQuery.addObserver(this), wn(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
                    }
                }, {
                    key: "onUnsubscribe",
                    value: function() {
                        this.hasListeners() || this.destroy()
                    }
                }, {
                    key: "shouldFetchOnReconnect",
                    value: function() {
                        return On(this.currentQuery, this.options, this.options.refetchOnReconnect)
                    }
                }, {
                    key: "shouldFetchOnWindowFocus",
                    value: function() {
                        return On(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.listeners = new Set, this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
                    }
                }, {
                    key: "setOptions",
                    value: function(t, e) {
                        var n = this.options,
                            r = this.currentQuery;
                        if (this.options = this.client.defaultQueryOptions(t), E(n, this.options) || this.client.getQueryCache().notify({
                                type: "observerOptionsUpdated",
                                query: this.currentQuery,
                                observer: this
                            }), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw new Error("Expected enabled to be a boolean");
                        this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
                        var o = this.hasListeners();
                        o && En(this.currentQuery, r, this.options, n) && this.executeFetch(), this.updateResult(e), !o || this.currentQuery === r && this.options.enabled === n.enabled && this.options.staleTime === n.staleTime || this.updateStaleTimeout();
                        var i = this.computeRefetchInterval();
                        !o || this.currentQuery === r && this.options.enabled === n.enabled && i === this.currentRefetchInterval || this.updateRefetchInterval(i)
                    }
                }, {
                    key: "getOptimisticResult",
                    value: function(t) {
                        var e = this.client.getQueryCache().build(this.client, t),
                            n = this.createResult(e, t);
                        return function(t, e, n) {
                            return !n.keepPreviousData && (void 0 !== n.placeholderData ? e.isPlaceholderData : !E(t.getCurrentResult(), e))
                        }(this, n, t) && (this.currentResult = n, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), n
                    }
                }, {
                    key: "getCurrentResult",
                    value: function() {
                        return this.currentResult
                    }
                }, {
                    key: "trackResult",
                    value: function(t) {
                        var e = this,
                            n = {};
                        return Object.keys(t).forEach((function(r) {
                            Object.defineProperty(n, r, {
                                configurable: !1,
                                enumerable: !0,
                                get: function() {
                                    return e.trackedProps.add(r), t[r]
                                }
                            })
                        })), n
                    }
                }, {
                    key: "getCurrentQuery",
                    value: function() {
                        return this.currentQuery
                    }
                }, {
                    key: "remove",
                    value: function() {
                        this.client.getQueryCache().remove(this.currentQuery)
                    }
                }, {
                    key: "refetch",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = t.refetchPage,
                            n = pn(t, ["refetchPage"]);
                        return this.fetch(fn(fn({}, n), {}, {
                            meta: {
                                refetchPage: e
                            }
                        }))
                    }
                }, {
                    key: "fetchOptimistic",
                    value: function(t) {
                        var e = this,
                            n = this.client.defaultQueryOptions(t),
                            r = this.client.getQueryCache().build(this.client, n);
                        return r.isFetchingOptimistic = !0, r.fetch().then((function() {
                            return e.createResult(r, n)
                        }))
                    }
                }, {
                    key: "fetch",
                    value: function(t) {
                        var e, n = this;
                        return this.executeFetch(fn(fn({}, t), {}, {
                            cancelRefetch: null == (e = t.cancelRefetch) || e
                        })).then((function() {
                            return n.updateResult(), n.currentResult
                        }))
                    }
                }, {
                    key: "executeFetch",
                    value: function(t) {
                        this.updateQuery();
                        var e = this.currentQuery.fetch(this.options, t);
                        return null != t && t.throwOnError || (e = e.catch(s)), e
                    }
                }, {
                    key: "updateStaleTimeout",
                    value: function() {
                        var t = this;
                        if (this.clearStaleTimeout(), !l && !this.currentResult.isStale && f(this.options.staleTime)) {
                            var e = d(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
                            this.staleTimeoutId = setTimeout((function() {
                                t.currentResult.isStale || t.updateResult()
                            }), e)
                        }
                    }
                }, {
                    key: "computeRefetchInterval",
                    value: function() {
                        var t;
                        return "function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (t = this.options.refetchInterval) && t
                    }
                }, {
                    key: "updateRefetchInterval",
                    value: function(t) {
                        var e = this;
                        this.clearRefetchInterval(), this.currentRefetchInterval = t, !l && !1 !== this.options.enabled && f(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval((function() {
                            (e.options.refetchIntervalInBackground || z.isFocused()) && e.executeFetch()
                        }), this.currentRefetchInterval))
                    }
                }, {
                    key: "updateTimers",
                    value: function() {
                        this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
                    }
                }, {
                    key: "clearStaleTimeout",
                    value: function() {
                        this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
                    }
                }, {
                    key: "clearRefetchInterval",
                    value: function() {
                        this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
                    }
                }, {
                    key: "createResult",
                    value: function(t, e) {
                        var n, r = this.currentQuery,
                            o = this.options,
                            i = this.currentResult,
                            u = this.currentResultState,
                            a = this.currentResultOptions,
                            c = t !== r,
                            l = c ? t.state : this.currentQueryInitialState,
                            s = c ? this.currentResult : this.previousQueryResult,
                            f = t.state,
                            d = f.dataUpdatedAt,
                            p = f.error,
                            h = f.errorUpdatedAt,
                            v = f.fetchStatus,
                            y = f.status,
                            m = !1,
                            b = !1;
                        if (e._optimisticResults) {
                            var g = this.hasListeners(),
                                w = !g && wn(t, e),
                                O = g && En(t, r, e, o);
                            (w || O) && (v = nt(t.options.networkMode) ? "fetching" : "paused", d || (y = "loading")), "isRestoring" === e._optimisticResults && (v = "idle")
                        }
                        if (e.keepPreviousData && !f.dataUpdatedAt && null != s && s.isSuccess && "error" !== y) n = s.data, d = s.dataUpdatedAt, y = s.status, m = !0;
                        else if (e.select && void 0 !== f.data)
                            if (i && f.data === (null == u ? void 0 : u.data) && e.select === this.selectFn) n = this.selectResult;
                            else try {
                                this.selectFn = e.select, n = e.select(f.data), n = _(null == i ? void 0 : i.data, n, e), this.selectResult = n, this.selectError = null
                            } catch (t) {
                                this.selectError = t
                            } else n = f.data;
                        if (void 0 !== e.placeholderData && void 0 === n && "loading" === y) {
                            var E;
                            if (null != i && i.isPlaceholderData && e.placeholderData === (null == a ? void 0 : a.placeholderData)) E = i.data;
                            else if (E = "function" == typeof e.placeholderData ? e.placeholderData() : e.placeholderData, e.select && void 0 !== E) try {
                                E = e.select(E), this.selectError = null
                            } catch (t) {
                                this.selectError = t
                            }
                            void 0 !== E && (y = "success", n = _(null == i ? void 0 : i.data, E, e), b = !0)
                        }
                        this.selectError && (p = this.selectError, n = this.selectResult, h = Date.now(), y = "error");
                        var S = "fetching" === v,
                            x = "loading" === y,
                            k = "error" === y;
                        return {
                            status: y,
                            fetchStatus: v,
                            isLoading: x,
                            isSuccess: "success" === y,
                            isError: k,
                            isInitialLoading: x && S,
                            data: n,
                            dataUpdatedAt: d,
                            error: p,
                            errorUpdatedAt: h,
                            failureCount: f.fetchFailureCount,
                            failureReason: f.fetchFailureReason,
                            errorUpdateCount: f.errorUpdateCount,
                            isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
                            isFetchedAfterMount: f.dataUpdateCount > l.dataUpdateCount || f.errorUpdateCount > l.errorUpdateCount,
                            isFetching: S,
                            isRefetching: S && !x,
                            isLoadingError: k && 0 === f.dataUpdatedAt,
                            isPaused: "paused" === v,
                            isPlaceholderData: b,
                            isPreviousData: m,
                            isRefetchError: k && 0 !== f.dataUpdatedAt,
                            isStale: Sn(t, e),
                            refetch: this.refetch,
                            remove: this.remove
                        }
                    }
                }, {
                    key: "updateResult",
                    value: function(t) {
                        var e = this,
                            n = this.currentResult,
                            r = this.createResult(this.currentQuery, this.options);
                        if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, !E(r, n)) {
                            this.currentResult = r;
                            var o = {
                                cache: !0
                            };
                            !1 !== (null == t ? void 0 : t.listeners) && function() {
                                if (!n) return !0;
                                var t = e.options.notifyOnChangeProps,
                                    r = "function" == typeof t ? t() : t;
                                if ("all" === r || !r && !e.trackedProps.size) return !0;
                                var o = new Set(null != r ? r : e.trackedProps);
                                return e.options.useErrorBoundary && o.add("error"), Object.keys(e.currentResult).some((function(t) {
                                    var r = t;
                                    return e.currentResult[r] !== n[r] && o.has(r)
                                }))
                            }() && (o.listeners = !0), this.notify(fn(fn({}, o), t))
                        }
                    }
                }, {
                    key: "updateQuery",
                    value: function() {
                        var t = this.client.getQueryCache().build(this.client, this.options);
                        if (t !== this.currentQuery) {
                            var e = this.currentQuery;
                            this.currentQuery = t, this.currentQueryInitialState = t.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == e || e.removeObserver(this), t.addObserver(this))
                        }
                    }
                }, {
                    key: "onQueryUpdate",
                    value: function(t) {
                        var e = {};
                        "success" === t.type ? e.onSuccess = !t.manual : "error" !== t.type || ot(t.error) || (e.onError = !0), this.updateResult(e), this.hasListeners() && this.updateTimers()
                    }
                }, {
                    key: "notify",
                    value: function(t) {
                        var e = this;
                        N.batch((function() {
                            var n, r, o, i;
                            if (t.onSuccess) null == (n = (r = e.options).onSuccess) || n.call(r, e.currentResult.data), null == (o = (i = e.options).onSettled) || o.call(i, e.currentResult.data, null);
                            else if (t.onError) {
                                var u, a, c, l;
                                null == (u = (a = e.options).onError) || u.call(a, e.currentResult.error), null == (c = (l = e.options).onSettled) || c.call(l, void 0, e.currentResult.error)
                            }
                            t.listeners && e.listeners.forEach((function(t) {
                                (0, t.listener)(e.currentResult)
                            })), t.cache && e.client.getQueryCache().notify({
                                query: e.currentQuery,
                                type: "observerResultsUpdated"
                            })
                        }))
                    }
                }]) && hn(e.prototype, n), r && hn(e, r), i
            }(q);

            function wn(t, e) {
                return function(t, e) {
                    return !(!1 === e.enabled || t.state.dataUpdatedAt || "error" === t.state.status && !1 === e.retryOnMount)
                }(t, e) || t.state.dataUpdatedAt > 0 && On(t, e, e.refetchOnMount)
            }

            function On(t, e, n) {
                if (!1 !== e.enabled) {
                    var r = "function" == typeof n ? n(t) : n;
                    return "always" === r || !1 !== r && Sn(t, e)
                }
                return !1
            }

            function En(t, e, n, r) {
                return !1 !== n.enabled && (t !== e || !1 === r.enabled) && (!n.suspense || "error" !== t.state.status) && Sn(t, n)
            }

            function Sn(t, e) {
                return t.isStaleByTime(e.staleTime)
            }

            function xn() {
                var t = !1;
                return {
                    clearReset: function() {
                        t = !1
                    },
                    reset: function() {
                        t = !0
                    },
                    isReset: function() {
                        return t
                    }
                }
            }
            var kn = t.createContext(xn()),
                Rn = t.createContext(!1);
            Rn.Provider;

            function Pn(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return jn(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return jn(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function jn(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function _n(e, n) {
                var r = le({
                        context: e.context
                    }),
                    o = t.useContext(Rn),
                    i = t.useContext(kn),
                    u = r.defaultQueryOptions(e);
                u._optimisticResults = o ? "isRestoring" : "optimistic", u.onError && (u.onError = N.batchCalls(u.onError)), u.onSuccess && (u.onSuccess = N.batchCalls(u.onSuccess)), u.onSettled && (u.onSettled = N.batchCalls(u.onSettled)),
                    function(t) {
                        t.suspense && "number" != typeof t.staleTime && (t.staleTime = 1e3)
                    }(u),
                    function(t, e) {
                        (t.suspense || t.useErrorBoundary) && (e.isReset() || (t.retryOnMount = !1))
                    }(u, i),
                    function(e) {
                        t.useEffect((function() {
                            e.clearReset()
                        }), [e])
                    }(i);
                var a = Pn(t.useState((function() {
                        return new n(r, u)
                    })), 1)[0],
                    c = a.getOptimisticResult(u);
                if (Te(t.useCallback((function(t) {
                        var e = o ? function() {} : a.subscribe(N.batchCalls(t));
                        return a.updateResult(), e
                    }), [a, o]), (function() {
                        return a.getCurrentResult()
                    }), (function() {
                        return a.getCurrentResult()
                    })), t.useEffect((function() {
                        a.setOptions(u, {
                            listeners: !1
                        })
                    }), [u, a]), function(t, e, n) {
                        return (null == t ? void 0 : t.suspense) && function(t, e) {
                            return t.isLoading && t.isFetching && !e
                        }(e, n)
                    }(u, c, o)) throw function(t, e, n) {
                    return e.fetchOptimistic(t).then((function(e) {
                        var n = e.data;
                        null == t.onSuccess || t.onSuccess(n), null == t.onSettled || t.onSettled(n, null)
                    })).catch((function(e) {
                        n.clearReset(), null == t.onError || t.onError(e), null == t.onSettled || t.onSettled(void 0, e)
                    }))
                }(u, a, i);
                if (function(t) {
                        var e = t.result,
                            n = t.errorResetBoundary,
                            r = t.useErrorBoundary,
                            o = t.query;
                        return e.isError && !n.isReset() && !e.isFetching && Le(r, [e.error, o])
                    }({
                        result: c,
                        errorResetBoundary: i,
                        useErrorBoundary: u.useErrorBoundary,
                        query: a.getCurrentQuery()
                    })) throw c.error;
                return u.notifyOnChangeProps ? c : a.trackResult(c)
            }
            var Cn = function() {
                    return _n(p({
                        queryKey: ["getIllegalContentReportMetadata"],
                        queryFn: an
                    }, t, e), gn);
                    var t, e
                },
                An = function(t) {
                    return t.split(",").map((function(t) {
                        return t.trim()
                    })).filter((function(t) {
                        return t
                    }))
                },
                Tn = function(t) {
                    return function(t, e) {
                        return An(t).length > e
                    }(t, 5)
                },
                Dn = function(t) {
                    var e = An(t);
                    return e.every((function(t) {
                        try {
                            var e = new URL(t),
                                n = e.hostname.replace("www.", ""),
                                r = e.toString().match(/https?:\/\//g);
                            return !(r && r.length > 1) && (n === ye.EnvironmentUrls.domain || n === "create." + ye.EnvironmentUrls.domain || n === "devforum." + ye.EnvironmentUrls.domain)
                        } catch (t) {
                            return !1
                        }
                    })) && e.length > 0
                },
                In = function(n) {
                    var r, o, i = n.defaultContentURL,
                        u = Cn(),
                        a = u.data,
                        c = u.error,
                        l = Oe(),
                        s = l.translate,
                        f = l.translateHtml,
                        d = (0, t.useRef)(null),
                        p = (0, t.useState)(""),
                        h = p[0],
                        v = p[1],
                        y = (0, t.useState)(""),
                        m = y[0],
                        b = y[1],
                        g = (0, t.useState)(i || ""),
                        w = g[0],
                        O = g[1],
                        E = (0, t.useState)(""),
                        S = E[0],
                        x = E[1],
                        k = (0, t.useState)(""),
                        R = k[0],
                        P = k[1],
                        j = (0, t.useState)(""),
                        _ = j[0],
                        C = j[1],
                        A = (0, t.useState)(""),
                        T = A[0],
                        D = A[1],
                        I = (0, t.useState)(!1),
                        L = I[0],
                        M = I[1],
                        N = (0, t.useState)(null),
                        F = N[0],
                        q = N[1];
                    (0, t.useEffect)((function() {
                        var t;
                        C(null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : "")
                    }), [null == a ? void 0 : a.name]), (0, t.useEffect)((function() {
                        var t;
                        if (c) {
                            var e = (null === (t = c) || void 0 === t ? void 0 : t.message) || s("Message.Modal.Error"),
                                n = {
                                    title: s("Title.Modal.MetadataError"),
                                    content: e,
                                    buttonText: s("Action.Modal.Ok")
                                };
                            q(n)
                        }
                    }), [c, s]);
                    var U = Qe(cn);
                    (0, t.useEffect)((function() {
                        var t, e, n;
                        if (U.isSuccess) {
                            var r = (null === (t = U.data) || void 0 === t ? void 0 : t.success) ? {
                                title: s("Title.Modal.ReportSuccess"),
                                content: s("Message.Modal.ReportSuccess"),
                                buttonText: s("Action.Modal.SubmitAnother")
                            } : {
                                title: s("Title.Modal.ReportFailure"),
                                content: (null === (e = null == U ? void 0 : U.data) || void 0 === e ? void 0 : e.message) || "Error",
                                buttonText: s("Action.Modal.Ok")
                            };
                            q(r),
                                function() {
                                    var t;
                                    v(""), b(""), O(""), x(""), P(""), C(null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : ""), D(""), M(!1)
                                }()
                        } else if (U.isError) {
                            var o = (null === (n = U.error) || void 0 === n ? void 0 : n.message) || s("Message.Modal.Error");
                            r = {
                                title: s("Title.Modal.ReportFailure"),
                                content: o,
                                buttonText: s("Action.Modal.Ok")
                            };
                            q(r)
                        }
                    }), [U.isSuccess, U.error, U.isError, s, U.data]);
                    var Q = function(n) {
                            var r = h !== tn;
                            return e().createElement(t.Fragment, null, e().createElement("h5", null, r ? n + "*" : n), !r && e().createElement("p", {
                                className: "dsa-reason-limit"
                            }, s("Label.Optional")))
                        },
                        H = f("Message.IpInfringement", [
                            ["emailLink", "emailLinkEnd", function(t) {
                                return e().createElement("a", {
                                    href: $e + "?subject=" + encodeURIComponent(Ze),
                                    className: "text-link",
                                    target: "_blank",
                                    rel: "noreferrer"
                                }, t)
                            }],
                            ["docLink", "docLinkEnd", function(t) {
                                return e().createElement("a", {
                                    href: Ye,
                                    className: "text-link",
                                    target: "_blank",
                                    rel: "noreferrer"
                                }, t)
                            }]
                        ]),
                        K = function() {
                            q(null)
                        },
                        B = function(t) {
                            var e, n = t.target;
                            if (n) {
                                var r = n.getAttribute("data-value");
                                r === Je ? null === (e = null == d ? void 0 : d.current) || void 0 === e || e.focus() : b(""), v(r)
                            }
                        },
                        G = !!w && !Dn(w),
                        z = Tn(w),
                        W = !!T && !Ke.G(T),
                        X = !!h && Dn(w) && !Tn(w) && !!S && !!R && (h !== Je || !!m) && (h === tn || !!_ && Ke.G(T)) && L,
                        V = "(" + s("Message.DescriptionLimit", {
                            number: We.MAX_DESCRIPTION_LENGTH.toString()
                        }) + ")";
                    return function(t) {
                        if (null == t ? void 0 : t.length) {
                            var e = t.indexOf(Je);
                            e > -1 && (t.splice(e, 1), t.push(Je))
                        }
                    }(null == a ? void 0 : a.illegalTypeList), e().createElement("div", {
                        className: "form-container"
                    }, e().createElement("div", {
                        id: "title",
                        className: "section"
                    }, e().createElement("h1", null, s("Title"))), e().createElement("div", {
                        className: "main-card"
                    }, e().createElement("h2", null, s("Title.Content")), e().createElement("div", {
                        id: "dsa-description",
                        className: "section dsa-description"
                    }, e().createElement("p", null, s("Message.DsaDescription1")), e().createElement("p", null, s("Message.DsaDescription2")), e().createElement("p", null, s("Message.DsaDescription3"))), e().createElement("div", {
                        id: "issue-type-selection",
                        className: "section"
                    }, e().createElement("h5", null, s("Question.WhyIllegal")), e().createElement("div", {
                        className: "custom-radio-group"
                    }, null === (r = null == a ? void 0 : a.illegalTypeList) || void 0 === r ? void 0 : r.map((function(t) {
                        var n = t + "-radio",
                            r = t,
                            o = e().createElement("div", {
                                key: n,
                                className: "radio-item"
                            }, e().createElement("input", {
                                id: n,
                                type: "radio",
                                name: "issue_type",
                                onChange: B,
                                "data-value": t,
                                checked: h === t
                            }), e().createElement("label", {
                                htmlFor: n
                            }, e().createElement("span", null, s("Label.IllegalType." + nn[r]))));
                        return t === Je ? e().createElement("div", {
                            key: "other-radio",
                            className: "other-radio-container"
                        }, o, e().createElement("input", {
                            ref: d,
                            type: "text",
                            value: m,
                            className: "input-field other-violation-input",
                            onChange: function(t) {
                                return b(t.target.value)
                            }
                        })) : o
                    })))), e().createElement("div", {
                        id: "url-input",
                        className: "section"
                    }, e().createElement("h5", null, s("Question.Url")), e().createElement("input", {
                        type: "text",
                        "data-testid": "url-textbox",
                        className: "form-control input-field",
                        value: w,
                        placeholder: s("Message.UrlSample") + ": https://" + ye.EnvironmentUrls.domain + "/catalog/item",
                        maxLength: We.MAX_URL_LENGTH,
                        onChange: function(t) {
                            return O(t.target.value)
                        }
                    }), G && !z && e().createElement("span", {
                        className: "error-text"
                    }, s("Message.UrlError")), z && e().createElement("span", {
                        className: "error-text"
                    }, s("Message.TooManyUrlError", {
                        number: 5..toString()
                    }))), e().createElement("div", {
                        id: "illegal-description-input",
                        className: "section"
                    }, e().createElement("h5", null, s("Question.Title")), e().createElement("p", {
                        className: "dsa-reason-limit"
                    }, V), e().createElement("textarea", {
                        className: "ticket-message form-control input-field nonresizable",
                        value: S,
                        rows: 6,
                        maxLength: We.MAX_DESCRIPTION_LENGTH,
                        onChange: function(t) {
                            return x(t.target.value)
                        }
                    })), e().createElement("div", {
                        id: "country-selection",
                        className: "section form-group visible-container"
                    }, e().createElement("h5", null, s("Question.Country")), e().createElement("div", {
                        className: "rbx-select-group"
                    }, e().createElement("select", {
                        value: R,
                        className: "input-field rbx-select",
                        onChange: function(t) {
                            P(t.target.value)
                        }
                    }, e().createElement("option", {
                        value: ""
                    }, s("Label.Contry.DEFAULT")), null === (o = null == a ? void 0 : a.countryList) || void 0 === o ? void 0 : o.map((function(t) {
                        return e().createElement("option", {
                            key: t,
                            value: t
                        }, s("Label.Country." + t))
                    }))))), e().createElement("div", {
                        id: "information-header",
                        className: "section"
                    }, e().createElement("h2", null, s("Title.Contact"))), e().createElement("div", {
                        id: "reporter-info-name",
                        className: "section"
                    }, Q(s("Label.Name")), e().createElement("input", {
                        value: _,
                        type: "text",
                        className: "form-control input-field",
                        maxLength: We.MAX_NAME_LENGTH,
                        onChange: function(t) {
                            return C(t.target.value)
                        }
                    })), e().createElement("div", {
                        id: "reporter-info-email",
                        className: "section"
                    }, Q(s("Label.Email")), e().createElement("input", {
                        value: T,
                        type: "text",
                        className: "form-control input-field",
                        maxLength: We.MAX_EMAIL_LENGTH,
                        onChange: function(t) {
                            return D(t.target.value)
                        }
                    }), W && e().createElement("span", {
                        className: "error-text"
                    }, s("Message.EmailError"))), e().createElement("div", {
                        id: "final-confirm-checkbox",
                        className: "section"
                    }, e().createElement("input", {
                        type: "checkbox",
                        id: "confirmCheckbox",
                        className: "pointer-cursor",
                        checked: L,
                        onChange: function(t) {
                            M(t.target.checked)
                        }
                    }), e().createElement("label", {
                        htmlFor: "confirmCheckbox",
                        className: "pointer-cursor margin-left-5"
                    }, s("Message.Confirm"))), e().createElement("div", {
                        id: "submit-button",
                        className: "section"
                    }, U.isLoading ? e().createElement("button", {
                        type: "button",
                        className: "btn-primary-md btn-full-width loading-button",
                        disabled: !0
                    }, e().createElement("span", {
                        className: "loading-spinner"
                    })) : e().createElement("button", {
                        type: "button",
                        className: "btn-primary-md btn-full-width",
                        disabled: !X,
                        onClick: function() {
                            var t = {
                                IllegalType: h,
                                OtherViolation: m,
                                IllegalContentUrl: w,
                                Reason: S,
                                Country: R,
                                Name: _,
                                Email: T,
                                IsAppeal: !1
                            };
                            U.mutate(t)
                        }
                    }, e().createElement("span", null, s("Action.Submit"))))), e().createElement(ze, {
                        open: h === en,
                        onClose: function() {
                            v("")
                        },
                        title: s("Title.Modal.Ip"),
                        content: H
                    }), e().createElement(ze, {
                        open: !!F,
                        onClose: K,
                        title: null == F ? void 0 : F.title,
                        content: null == F ? void 0 : F.content
                    }, e().createElement("button", {
                        type: "button",
                        className: "btn-control-md btn-full-width white-space-button",
                        onClick: K
                    }, null == F ? void 0 : F.buttonText)))
                };

            function Ln(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Mn(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Nn = Math.min,
                Fn = Math.max,
                qn = Math.round,
                Un = Math.floor,
                Qn = function(t) {
                    return {
                        x: t,
                        y: t
                    }
                },
                Hn = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                Kn = {
                    start: "end",
                    end: "start"
                };

            function Bn(t, e, n) {
                return Fn(t, Nn(e, n))
            }

            function Gn(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function zn(t) {
                return t.split("-")[0]
            }

            function Wn(t) {
                return t.split("-")[1]
            }

            function Xn(t) {
                return "x" === t ? "y" : "x"
            }

            function Vn(t) {
                return "y" === t ? "height" : "width"
            }

            function $n(t) {
                return ["top", "bottom"].includes(zn(t)) ? "y" : "x"
            }

            function Zn(t) {
                return Xn($n(t))
            }

            function Yn(t, e, n) {
                void 0 === n && (n = !1);
                var r = Wn(t),
                    o = Zn(t),
                    i = Vn(o),
                    u = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                return e.reference[i] > e.floating[i] && (u = nr(u)), [u, nr(u)]
            }

            function Jn(t) {
                var e = nr(t);
                return [tr(t), e, tr(e)]
            }

            function tr(t) {
                return t.replace(/start|end/g, (function(t) {
                    return Kn[t]
                }))
            }

            function er(t, e, n, r) {
                var o = Wn(t),
                    i = function(t, e, n) {
                        var r = ["left", "right"],
                            o = ["right", "left"];
                        switch (t) {
                            case "top":
                            case "bottom":
                                return n ? e ? o : r : e ? r : o;
                            case "left":
                            case "right":
                                return e ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                                return []
                        }
                    }(zn(t), "start" === n, r);
                return o && (i = i.map((function(t) {
                    return t + "-" + o
                })), e && (i = i.concat(i.map(tr)))), i
            }

            function nr(t) {
                return t.replace(/left|right|bottom|top/g, (function(t) {
                    return Hn[t]
                }))
            }

            function rr(t) {
                return function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Ln(Object(n), !0).forEach((function(e) {
                            Mn(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ln(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, t)
            }

            function or(t) {
                return "number" != typeof t ? rr(t) : {
                    top: t,
                    right: t,
                    bottom: t,
                    left: t
                }
            }

            function ir(t) {
                var e = t.x,
                    n = t.y,
                    r = t.width,
                    o = t.height;
                return {
                    width: r,
                    height: o,
                    top: n,
                    left: e,
                    right: e + r,
                    bottom: n + o,
                    x: e,
                    y: n
                }
            }

            function ur(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                }
                return o
            }

            function ar(t) {
                return function(t) {
                    if (Array.isArray(t)) return cr(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return cr(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return cr(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function cr(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function lr(t) {
                return (lr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function sr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function fr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? sr(Object(n), !0).forEach((function(e) {
                        dr(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : sr(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function dr(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function pr(t, e, n, r, o, i, u) {
                try {
                    var a = t[i](u),
                        c = a.value
                } catch (t) {
                    return void n(t)
                }
                a.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function hr(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function u(t) {
                            pr(i, r, o, u, a, "next", t)
                        }

                        function a(t) {
                            pr(i, r, o, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }

            function vr(t, e, n) {
                var r, o = t.reference,
                    i = t.floating,
                    u = $n(e),
                    a = Zn(e),
                    c = Vn(a),
                    l = zn(e),
                    s = "y" === u,
                    f = o.x + o.width / 2 - i.width / 2,
                    d = o.y + o.height / 2 - i.height / 2,
                    p = o[c] / 2 - i[c] / 2;
                switch (l) {
                    case "top":
                        r = {
                            x: f,
                            y: o.y - i.height
                        };
                        break;
                    case "bottom":
                        r = {
                            x: f,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        r = {
                            x: o.x + o.width,
                            y: d
                        };
                        break;
                    case "left":
                        r = {
                            x: o.x - i.width,
                            y: d
                        };
                        break;
                    default:
                        r = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (Wn(e)) {
                    case "start":
                        r[a] -= p * (n && s ? -1 : 1);
                        break;
                    case "end":
                        r[a] += p * (n && s ? -1 : 1)
                }
                return r
            }
            var yr = function() {
                var t = hr(regeneratorRuntime.mark((function t(e, n, r) {
                    var o, i, u, a, c, l, s, f, d, p, h, v, y, m, b, g, w, O, E, S, x, k, R, P, j, _;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return o = r.placement, i = void 0 === o ? "bottom" : o, u = r.strategy, a = void 0 === u ? "absolute" : u, c = r.middleware, l = void 0 === c ? [] : c, s = r.platform, f = l.filter(Boolean), t.next = 4, null == s.isRTL ? void 0 : s.isRTL(n);
                            case 4:
                                return d = t.sent, t.next = 7, s.getElementRects({
                                    reference: e,
                                    floating: n,
                                    strategy: a
                                });
                            case 7:
                                p = t.sent, h = vr(p, i, d), v = h.x, y = h.y, m = i, b = {}, g = 0, w = 0;
                            case 13:
                                if (!(w < f.length)) {
                                    t.next = 45;
                                    break
                                }
                                return O = f[w], E = O.name, S = O.fn, t.next = 17, S({
                                    x: v,
                                    y: y,
                                    initialPlacement: i,
                                    placement: m,
                                    strategy: a,
                                    middlewareData: b,
                                    rects: p,
                                    platform: s,
                                    elements: {
                                        reference: e,
                                        floating: n
                                    }
                                });
                            case 17:
                                if (x = t.sent, k = x.x, R = x.y, P = x.data, j = x.reset, v = null != k ? k : v, y = null != R ? R : y, b = fr(fr({}, b), {}, dr({}, E, fr(fr({}, b[E]), P))), !(j && g <= 50)) {
                                    t.next = 42;
                                    break
                                }
                                if (g++, "object" !== lr(j)) {
                                    t.next = 41;
                                    break
                                }
                                if (j.placement && (m = j.placement), !j.rects) {
                                    t.next = 38;
                                    break
                                }
                                if (!0 !== j.rects) {
                                    t.next = 36;
                                    break
                                }
                                return t.next = 33, s.getElementRects({
                                    reference: e,
                                    floating: n,
                                    strategy: a
                                });
                            case 33:
                                t.t0 = t.sent, t.next = 37;
                                break;
                            case 36:
                                t.t0 = j.rects;
                            case 37:
                                p = t.t0;
                            case 38:
                                _ = vr(p, m, d), v = _.x, y = _.y;
                            case 41:
                                w = -1;
                            case 42:
                                w++, t.next = 13;
                                break;
                            case 45:
                                return t.abrupt("return", {
                                    x: v,
                                    y: y,
                                    placement: m,
                                    strategy: a,
                                    middlewareData: b
                                });
                            case 46:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, n, r) {
                    return t.apply(this, arguments)
                }
            }();

            function mr(t, e) {
                return br.apply(this, arguments)
            }

            function br() {
                return (br = hr(regeneratorRuntime.mark((function t(e, n) {
                    var r, o, i, u, a, c, l, s, f, d, p, h, v, y, m, b, g, w, O, E, S, x, k, R, P;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return void 0 === n && (n = {}), o = e.x, i = e.y, u = e.platform, a = e.rects, c = e.elements, l = e.strategy, s = Gn(n, e), f = s.boundary, d = void 0 === f ? "clippingAncestors" : f, p = s.rootBoundary, h = void 0 === p ? "viewport" : p, v = s.elementContext, y = void 0 === v ? "floating" : v, m = s.altBoundary, b = void 0 !== m && m, g = s.padding, w = or(void 0 === g ? 0 : g), O = "floating" === y ? "reference" : "floating", E = c[b ? O : y], t.t0 = ir, t.t1 = u, t.next = 10, null == u.isElement ? void 0 : u.isElement(E);
                            case 10:
                                if (t.t2 = r = t.sent, null == t.t2) {
                                    t.next = 15;
                                    break
                                }
                                t.t3 = r, t.next = 16;
                                break;
                            case 15:
                                t.t3 = !0;
                            case 16:
                                if (!t.t3) {
                                    t.next = 20;
                                    break
                                }
                                t.t4 = E, t.next = 26;
                                break;
                            case 20:
                                if (t.t5 = E.contextElement, t.t5) {
                                    t.next = 25;
                                    break
                                }
                                return t.next = 24, null == u.getDocumentElement ? void 0 : u.getDocumentElement(c.floating);
                            case 24:
                                t.t5 = t.sent;
                            case 25:
                                t.t4 = t.t5;
                            case 26:
                                return t.t6 = t.t4, t.t7 = d, t.t8 = h, t.t9 = l, t.t10 = {
                                    element: t.t6,
                                    boundary: t.t7,
                                    rootBoundary: t.t8,
                                    strategy: t.t9
                                }, t.next = 33, t.t1.getClippingRect.call(t.t1, t.t10);
                            case 33:
                                return t.t11 = t.sent, S = (0, t.t0)(t.t11), x = "floating" === y ? {
                                    x: o,
                                    y: i,
                                    width: a.floating.width,
                                    height: a.floating.height
                                } : a.reference, t.next = 38, null == u.getOffsetParent ? void 0 : u.getOffsetParent(c.floating);
                            case 38:
                                return k = t.sent, t.next = 41, null == u.isElement ? void 0 : u.isElement(k);
                            case 41:
                                if (!t.sent) {
                                    t.next = 50;
                                    break
                                }
                                return t.next = 44, null == u.getScale ? void 0 : u.getScale(k);
                            case 44:
                                if (t.t13 = t.sent, t.t13) {
                                    t.next = 47;
                                    break
                                }
                                t.t13 = {
                                    x: 1,
                                    y: 1
                                };
                            case 47:
                                t.t12 = t.t13, t.next = 51;
                                break;
                            case 50:
                                t.t12 = {
                                    x: 1,
                                    y: 1
                                };
                            case 51:
                                if (R = t.t12, t.t14 = ir, !u.convertOffsetParentRelativeRectToViewportRelativeRect) {
                                    t.next = 59;
                                    break
                                }
                                return t.next = 56, u.convertOffsetParentRelativeRectToViewportRelativeRect({
                                    elements: c,
                                    rect: x,
                                    offsetParent: k,
                                    strategy: l
                                });
                            case 56:
                                t.t15 = t.sent, t.next = 60;
                                break;
                            case 59:
                                t.t15 = x;
                            case 60:
                                return t.t16 = t.t15, P = (0, t.t14)(t.t16), t.abrupt("return", {
                                    top: (S.top - P.top + w.top) / R.y,
                                    bottom: (P.bottom - S.bottom + w.bottom) / R.y,
                                    left: (S.left - P.left + w.left) / R.x,
                                    right: (P.right - S.right + w.right) / R.x
                                });
                            case 63:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function gr(t, e) {
                return wr.apply(this, arguments)
            }

            function wr() {
                return (wr = hr(regeneratorRuntime.mark((function t(e, n) {
                    var r, o, i, u, a, c, l, s, f, d, p, h, v, y;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.placement, o = e.platform, i = e.elements, t.next = 3, null == o.isRTL ? void 0 : o.isRTL(i.floating);
                            case 3:
                                return u = t.sent, a = zn(r), c = Wn(r), l = "y" === $n(r), s = ["left", "top"].includes(a) ? -1 : 1, f = u && l ? -1 : 1, d = Gn(n, e), p = "number" == typeof d ? {
                                    mainAxis: d,
                                    crossAxis: 0,
                                    alignmentAxis: null
                                } : fr({
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    alignmentAxis: null
                                }, d), h = p.mainAxis, v = p.crossAxis, y = p.alignmentAxis, c && "number" == typeof y && (v = "end" === c ? -1 * y : y), t.abrupt("return", l ? {
                                    x: v * f,
                                    y: h * s
                                } : {
                                    x: h * s,
                                    y: v * f
                                });
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function Or(t) {
                return xr(t) ? (t.nodeName || "").toLowerCase() : "#document"
            }

            function Er(t) {
                var e;
                return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
            }

            function Sr(t) {
                var e;
                return null == (e = (xr(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
            }

            function xr(t) {
                return t instanceof Node || t instanceof Er(t).Node
            }

            function kr(t) {
                return t instanceof Element || t instanceof Er(t).Element
            }

            function Rr(t) {
                return t instanceof HTMLElement || t instanceof Er(t).HTMLElement
            }

            function Pr(t) {
                return "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof Er(t).ShadowRoot)
            }

            function jr(t) {
                var e = Ir(t),
                    n = e.overflow,
                    r = e.overflowX,
                    o = e.overflowY,
                    i = e.display;
                return /auto|scroll|overlay|hidden|clip/.test(n + o + r) && !["inline", "contents"].includes(i)
            }

            function _r(t) {
                return ["table", "td", "th"].includes(Or(t))
            }

            function Cr(t) {
                return [":popover-open", ":modal"].some((function(e) {
                    try {
                        return t.matches(e)
                    } catch (t) {
                        return !1
                    }
                }))
            }

            function Ar(t) {
                var e = Tr(),
                    n = kr(t) ? Ir(t) : t;
                return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((function(t) {
                    return (n.willChange || "").includes(t)
                })) || ["paint", "layout", "strict", "content"].some((function(t) {
                    return (n.contain || "").includes(t)
                }))
            }

            function Tr() {
                return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function Dr(t) {
                return ["html", "body", "#document"].includes(Or(t))
            }

            function Ir(t) {
                return Er(t).getComputedStyle(t)
            }

            function Lr(t) {
                return kr(t) ? {
                    scrollLeft: t.scrollLeft,
                    scrollTop: t.scrollTop
                } : {
                    scrollLeft: t.scrollX,
                    scrollTop: t.scrollY
                }
            }

            function Mr(t) {
                if ("html" === Or(t)) return t;
                var e = t.assignedSlot || t.parentNode || Pr(t) && t.host || Sr(t);
                return Pr(e) ? e.host : e
            }

            function Nr(t) {
                var e = Mr(t);
                return Dr(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Rr(e) && jr(e) ? e : Nr(e)
            }

            function Fr(t, e, n) {
                var r;
                void 0 === e && (e = []), void 0 === n && (n = !0);
                var o = Nr(t),
                    i = o === (null == (r = t.ownerDocument) ? void 0 : r.body),
                    u = Er(o);
                if (i) {
                    var a = qr(u);
                    return e.concat(u, u.visualViewport || [], jr(o) ? o : [], a && n ? Fr(a) : [])
                }
                return e.concat(o, Fr(o, [], n))
            }

            function qr(t) {
                return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
            }

            function Ur(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e) || Kr(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Qr(t, e, n, r, o, i, u) {
                try {
                    var a = t[i](u),
                        c = a.value
                } catch (t) {
                    return void n(t)
                }
                a.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function Hr(t) {
                return function(t) {
                    if (Array.isArray(t)) return Br(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || Kr(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Kr(t, e) {
                if (t) {
                    if ("string" == typeof t) return Br(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Br(t, e) : void 0
                }
            }

            function Br(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Gr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function zr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Gr(Object(n), !0).forEach((function(e) {
                        Wr(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Gr(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Wr(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function Xr(t) {
                var e = Ir(t),
                    n = parseFloat(e.width) || 0,
                    r = parseFloat(e.height) || 0,
                    o = Rr(t),
                    i = o ? t.offsetWidth : n,
                    u = o ? t.offsetHeight : r,
                    a = qn(n) !== i || qn(r) !== u;
                return a && (n = i, r = u), {
                    width: n,
                    height: r,
                    $: a
                }
            }

            function Vr(t) {
                return kr(t) ? t : t.contextElement
            }

            function $r(t) {
                var e = Vr(t);
                if (!Rr(e)) return Qn(1);
                var n = e.getBoundingClientRect(),
                    r = Xr(e),
                    o = r.width,
                    i = r.height,
                    u = r.$,
                    a = (u ? qn(n.width) : n.width) / o,
                    c = (u ? qn(n.height) : n.height) / i;
                return a && Number.isFinite(a) || (a = 1), c && Number.isFinite(c) || (c = 1), {
                    x: a,
                    y: c
                }
            }
            var Zr = Qn(0);

            function Yr(t) {
                var e = Er(t);
                return Tr() && e.visualViewport ? {
                    x: e.visualViewport.offsetLeft,
                    y: e.visualViewport.offsetTop
                } : Zr
            }

            function Jr(t, e, n, r) {
                void 0 === e && (e = !1), void 0 === n && (n = !1);
                var o = t.getBoundingClientRect(),
                    i = Vr(t),
                    u = Qn(1);
                e && (r ? kr(r) && (u = $r(r)) : u = $r(t));
                var a = function(t, e, n) {
                        return void 0 === e && (e = !1), !(!n || e && n !== Er(t)) && e
                    }(i, n, r) ? Yr(i) : Qn(0),
                    c = (o.left + a.x) / u.x,
                    l = (o.top + a.y) / u.y,
                    s = o.width / u.x,
                    f = o.height / u.y;
                if (i)
                    for (var d = Er(i), p = r && kr(r) ? Er(r) : r, h = d, v = qr(h); v && r && p !== h;) {
                        var y = $r(v),
                            m = v.getBoundingClientRect(),
                            b = Ir(v),
                            g = m.left + (v.clientLeft + parseFloat(b.paddingLeft)) * y.x,
                            w = m.top + (v.clientTop + parseFloat(b.paddingTop)) * y.y;
                        c *= y.x, l *= y.y, s *= y.x, f *= y.y, c += g, l += w, v = qr(h = Er(v))
                    }
                return ir({
                    width: s,
                    height: f,
                    x: c,
                    y: l
                })
            }

            function to(t) {
                return Jr(Sr(t)).left + Lr(t).scrollLeft
            }

            function eo(t, e, n) {
                var r;
                if ("viewport" === e) r = function(t, e) {
                    var n = Er(t),
                        r = Sr(t),
                        o = n.visualViewport,
                        i = r.clientWidth,
                        u = r.clientHeight,
                        a = 0,
                        c = 0;
                    if (o) {
                        i = o.width, u = o.height;
                        var l = Tr();
                        (!l || l && "fixed" === e) && (a = o.offsetLeft, c = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: u,
                        x: a,
                        y: c
                    }
                }(t, n);
                else if ("document" === e) r = function(t) {
                    var e = Sr(t),
                        n = Lr(t),
                        r = t.ownerDocument.body,
                        o = Fn(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth),
                        i = Fn(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight),
                        u = -n.scrollLeft + to(t),
                        a = -n.scrollTop;
                    return "rtl" === Ir(r).direction && (u += Fn(e.clientWidth, r.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: u,
                        y: a
                    }
                }(Sr(t));
                else if (kr(e)) r = function(t, e) {
                    var n = Jr(t, !0, "fixed" === e),
                        r = n.top + t.clientTop,
                        o = n.left + t.clientLeft,
                        i = Rr(t) ? $r(t) : Qn(1);
                    return {
                        width: t.clientWidth * i.x,
                        height: t.clientHeight * i.y,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(e, n);
                else {
                    var o = Yr(t);
                    r = zr(zr({}, e), {}, {
                        x: e.x - o.x,
                        y: e.y - o.y
                    })
                }
                return ir(r)
            }

            function no(t, e) {
                var n = Mr(t);
                return !(n === e || !kr(n) || Dr(n)) && ("fixed" === Ir(n).position || no(n, e))
            }

            function ro(t, e, n) {
                var r = Rr(e),
                    o = Sr(e),
                    i = "fixed" === n,
                    u = Jr(t, !0, i, e),
                    a = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    c = Qn(0);
                if (r || !r && !i)
                    if (("body" !== Or(e) || jr(o)) && (a = Lr(e)), r) {
                        var l = Jr(e, !0, i, e);
                        c.x = l.x + e.clientLeft, c.y = l.y + e.clientTop
                    } else o && (c.x = to(o));
                return {
                    x: u.left + a.scrollLeft - c.x,
                    y: u.top + a.scrollTop - c.y,
                    width: u.width,
                    height: u.height
                }
            }

            function oo(t) {
                return "static" === Ir(t).position
            }

            function io(t, e) {
                return Rr(t) && "fixed" !== Ir(t).position ? e ? e(t) : t.offsetParent : null
            }

            function uo(t, e) {
                var n = Er(t);
                if (Cr(t)) return n;
                if (!Rr(t)) {
                    for (var r = Mr(t); r && !Dr(r);) {
                        if (kr(r) && !oo(r)) return r;
                        r = Mr(r)
                    }
                    return n
                }
                for (var o = io(t, e); o && _r(o) && oo(o);) o = io(o, e);
                return o && Dr(o) && oo(o) && !Ar(o) ? n : o || function(t) {
                    for (var e = Mr(t); Rr(e) && !Dr(e);) {
                        if (Ar(e)) return e;
                        if (Cr(e)) return null;
                        e = Mr(e)
                    }
                    return null
                }(t) || n
            }
            var ao = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
                    var e = t.elements,
                        n = t.rect,
                        r = t.offsetParent,
                        o = "fixed" === t.strategy,
                        i = Sr(r),
                        u = !!e && Cr(e.floating);
                    if (r === i || u && o) return n;
                    var a = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        c = Qn(1),
                        l = Qn(0),
                        s = Rr(r);
                    if ((s || !s && !o) && (("body" !== Or(r) || jr(i)) && (a = Lr(r)), Rr(r))) {
                        var f = Jr(r);
                        c = $r(r), l.x = f.x + r.clientLeft, l.y = f.y + r.clientTop
                    }
                    return {
                        width: n.width * c.x,
                        height: n.height * c.y,
                        x: n.x * c.x - a.scrollLeft * c.x + l.x,
                        y: n.y * c.y - a.scrollTop * c.y + l.y
                    }
                },
                getDocumentElement: Sr,
                getClippingRect: function(t) {
                    var e = t.element,
                        n = t.boundary,
                        r = t.rootBoundary,
                        o = t.strategy,
                        i = "clippingAncestors" === n ? Cr(e) ? [] : function(t, e) {
                            var n = e.get(t);
                            if (n) return n;
                            for (var r = Fr(t, [], !1).filter((function(t) {
                                    return kr(t) && "body" !== Or(t)
                                })), o = null, i = "fixed" === Ir(t).position, u = i ? Mr(t) : t; kr(u) && !Dr(u);) {
                                var a = Ir(u),
                                    c = Ar(u);
                                c || "fixed" !== a.position || (o = null), (i ? !c && !o : !c && "static" === a.position && o && ["absolute", "fixed"].includes(o.position) || jr(u) && !c && no(t, u)) ? r = r.filter((function(t) {
                                    return t !== u
                                })) : o = a, u = Mr(u)
                            }
                            return e.set(t, r), r
                        }(e, this._c) : [].concat(n),
                        u = [].concat(Hr(i), [r]),
                        a = u[0],
                        c = u.reduce((function(t, n) {
                            var r = eo(e, n, o);
                            return t.top = Fn(r.top, t.top), t.right = Nn(r.right, t.right), t.bottom = Nn(r.bottom, t.bottom), t.left = Fn(r.left, t.left), t
                        }), eo(e, a, o));
                    return {
                        width: c.right - c.left,
                        height: c.bottom - c.top,
                        x: c.left,
                        y: c.top
                    }
                },
                getOffsetParent: uo,
                getElementRects: function() {
                    var t, e = (t = regeneratorRuntime.mark((function t(e) {
                        var n, r, o;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = this.getOffsetParent || uo, r = this.getDimensions, t.next = 4, r(e.floating);
                                case 4:
                                    return o = t.sent, t.t0 = ro, t.t1 = e.reference, t.next = 9, n(e.floating);
                                case 9:
                                    return t.t2 = t.sent, t.t3 = e.strategy, t.t4 = (0, t.t0)(t.t1, t.t2, t.t3), t.t5 = {
                                        x: 0,
                                        y: 0,
                                        width: o.width,
                                        height: o.height
                                    }, t.abrupt("return", {
                                        reference: t.t4,
                                        floating: t.t5
                                    });
                                case 14:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = t.apply(e, n);

                            function u(t) {
                                Qr(i, r, o, u, a, "next", t)
                            }

                            function a(t) {
                                Qr(i, r, o, u, a, "throw", t)
                            }
                            u(void 0)
                        }))
                    });
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                getClientRects: function(t) {
                    return Array.from(t.getClientRects())
                },
                getDimensions: function(t) {
                    var e = Xr(t);
                    return {
                        width: e.width,
                        height: e.height
                    }
                },
                getScale: $r,
                isElement: kr,
                isRTL: function(t) {
                    return "rtl" === Ir(t).direction
                }
            };

            function co(t, e, n, r) {
                void 0 === r && (r = {});
                var o = r,
                    i = o.ancestorScroll,
                    u = void 0 === i || i,
                    a = o.ancestorResize,
                    c = void 0 === a || a,
                    l = o.elementResize,
                    s = void 0 === l ? "function" == typeof ResizeObserver : l,
                    f = o.layoutShift,
                    d = void 0 === f ? "function" == typeof IntersectionObserver : f,
                    p = o.animationFrame,
                    h = void 0 !== p && p,
                    v = Vr(t),
                    y = u || c ? [].concat(Hr(v ? Fr(v) : []), Hr(Fr(e))) : [];
                y.forEach((function(t) {
                    u && t.addEventListener("scroll", n, {
                        passive: !0
                    }), c && t.addEventListener("resize", n)
                }));
                var m, b = v && d ? function(t, e) {
                        var n, r = null,
                            o = Sr(t);

                        function i() {
                            var t;
                            clearTimeout(n), null == (t = r) || t.disconnect(), r = null
                        }
                        return function u(a, c) {
                            void 0 === a && (a = !1), void 0 === c && (c = 1), i();
                            var l = t.getBoundingClientRect(),
                                s = l.left,
                                f = l.top,
                                d = l.width,
                                p = l.height;
                            if (a || e(), d && p) {
                                var h = {
                                        rootMargin: -Un(f) + "px " + -Un(o.clientWidth - (s + d)) + "px " + -Un(o.clientHeight - (f + p)) + "px " + -Un(s) + "px",
                                        threshold: Fn(0, Nn(1, c)) || 1
                                    },
                                    v = !0;
                                try {
                                    r = new IntersectionObserver(y, zr(zr({}, h), {}, {
                                        root: o.ownerDocument
                                    }))
                                } catch (t) {
                                    r = new IntersectionObserver(y, h)
                                }
                                r.observe(t)
                            }

                            function y(t) {
                                var e = t[0].intersectionRatio;
                                if (e !== c) {
                                    if (!v) return u();
                                    e ? u(!1, e) : n = setTimeout((function() {
                                        u(!1, 1e-7)
                                    }), 1e3)
                                }
                                v = !1
                            }
                        }(!0), i
                    }(v, n) : null,
                    g = -1,
                    w = null;
                s && (w = new ResizeObserver((function(t) {
                    var r = Ur(t, 1)[0];
                    r && r.target === v && w && (w.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame((function() {
                        var t;
                        null == (t = w) || t.observe(e)
                    }))), n()
                })), v && !h && w.observe(v), w.observe(e));
                var O = h ? Jr(t) : null;
                return h && function e() {
                        var r = Jr(t);
                        !O || r.x === O.x && r.y === O.y && r.width === O.width && r.height === O.height || n();
                        O = r, m = requestAnimationFrame(e)
                    }(), n(),
                    function() {
                        var t;
                        y.forEach((function(t) {
                            u && t.removeEventListener("scroll", n), c && t.removeEventListener("resize", n)
                        })), null == b || b(), null == (t = w) || t.disconnect(), w = null, h && cancelAnimationFrame(m)
                    }
            }
            var lo = function(t) {
                    return void 0 === t && (t = 0), {
                        name: "offset",
                        options: t,
                        fn: function(e) {
                            return hr(regeneratorRuntime.mark((function n() {
                                var r, o, i, u, a, c, l;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return i = e.x, u = e.y, a = e.placement, c = e.middlewareData, n.next = 3, gr(e, t);
                                        case 3:
                                            if (l = n.sent, a !== (null == (r = c.offset) ? void 0 : r.placement) || null == (o = c.arrow) || !o.alignmentOffset) {
                                                n.next = 6;
                                                break
                                            }
                                            return n.abrupt("return", {});
                                        case 6:
                                            return n.abrupt("return", {
                                                x: i + l.x,
                                                y: u + l.y,
                                                data: fr(fr({}, l), {}, {
                                                    placement: a
                                                })
                                            });
                                        case 7:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        }
                    }
                },
                so = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "shift",
                        options: t,
                        fn: function(e) {
                            return hr(regeneratorRuntime.mark((function n() {
                                var r, o, i, u, a, c, l, s, f, d, p, h, v, y, m, b, g, w, O, E, S, x, k, R, P;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return o = e.x, i = e.y, u = e.placement, a = Gn(t, e), c = a.mainAxis, l = void 0 === c || c, s = a.crossAxis, f = void 0 !== s && s, d = a.limiter, p = void 0 === d ? {
                                                fn: function(t) {
                                                    return {
                                                        x: t.x,
                                                        y: t.y
                                                    }
                                                }
                                            } : d, h = ur(a, ["mainAxis", "crossAxis", "limiter"]), v = {
                                                x: o,
                                                y: i
                                            }, n.next = 5, mr(e, h);
                                        case 5:
                                            return y = n.sent, m = $n(zn(u)), b = Xn(m), g = v[b], w = v[m], l && (O = "y" === b ? "bottom" : "right", E = g + y["y" === b ? "top" : "left"], S = g - y[O], g = Bn(E, g, S)), f && (x = "y" === m ? "bottom" : "right", k = w + y["y" === m ? "top" : "left"], R = w - y[x], w = Bn(k, w, R)), P = p.fn(fr(fr({}, e), {}, (dr(r = {}, b, g), dr(r, m, w), r))), n.abrupt("return", fr(fr({}, P), {}, {
                                                data: {
                                                    x: P.x - o,
                                                    y: P.y - i
                                                }
                                            }));
                                        case 14:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        }
                    }
                },
                fo = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "flip",
                        options: t,
                        fn: function(e) {
                            return hr(regeneratorRuntime.mark((function n() {
                                var r, o, i, u, a, c, l, s, f, d, p, h, v, y, m, b, g, w, O, E, S, x, k, R, P, j, _, C, A, T, D, I, L, M, N, F, q, U, Q;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (i = e.placement, u = e.middlewareData, a = e.rects, c = e.initialPlacement, l = e.platform, s = e.elements, f = Gn(t, e), d = f.mainAxis, p = void 0 === d || d, h = f.crossAxis, v = void 0 === h || h, y = f.fallbackPlacements, m = f.fallbackStrategy, b = void 0 === m ? "bestFit" : m, g = f.fallbackAxisSideDirection, w = void 0 === g ? "none" : g, O = f.flipAlignment, E = void 0 === O || O, S = ur(f, ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"]), null == (r = u.arrow) || !r.alignmentOffset) {
                                                n.next = 4;
                                                break
                                            }
                                            return n.abrupt("return", {});
                                        case 4:
                                            return x = zn(i), k = $n(c), R = zn(c) === c, n.next = 9, null == l.isRTL ? void 0 : l.isRTL(s.floating);
                                        case 9:
                                            return P = n.sent, j = y || (R || !E ? [nr(c)] : Jn(c)), _ = "none" !== w, !y && _ && j.push.apply(j, ar(er(c, E, w, P))), C = [c].concat(ar(j)), n.next = 16, mr(e, S);
                                        case 16:
                                            if (A = n.sent, T = [], D = (null == (o = u.flip) ? void 0 : o.overflows) || [], p && T.push(A[x]), v && (I = Yn(i, a, P), T.push(A[I[0]], A[I[1]])), D = [].concat(ar(D), [{
                                                    placement: i,
                                                    overflows: T
                                                }]), T.every((function(t) {
                                                    return t <= 0
                                                }))) {
                                                n.next = 39;
                                                break
                                            }
                                            if (N = ((null == (L = u.flip) ? void 0 : L.index) || 0) + 1, !(F = C[N])) {
                                                n.next = 27;
                                                break
                                            }
                                            return n.abrupt("return", {
                                                data: {
                                                    index: N,
                                                    overflows: D
                                                },
                                                reset: {
                                                    placement: F
                                                }
                                            });
                                        case 27:
                                            if (q = null == (M = D.filter((function(t) {
                                                    return t.overflows[0] <= 0
                                                })).sort((function(t, e) {
                                                    return t.overflows[1] - e.overflows[1]
                                                }))[0]) ? void 0 : M.placement) {
                                                n.next = 37;
                                                break
                                            }
                                            n.t0 = b, n.next = "bestFit" === n.t0 ? 32 : "initialPlacement" === n.t0 ? 35 : 37;
                                            break;
                                        case 32:
                                            return (Q = null == (U = D.filter((function(t) {
                                                if (_) {
                                                    var e = $n(t.placement);
                                                    return e === k || "y" === e
                                                }
                                                return !0
                                            })).map((function(t) {
                                                return [t.placement, t.overflows.filter((function(t) {
                                                    return t > 0
                                                })).reduce((function(t, e) {
                                                    return t + e
                                                }), 0)]
                                            })).sort((function(t, e) {
                                                return t[1] - e[1]
                                            }))[0]) ? void 0 : U[0]) && (q = Q), n.abrupt("break", 37);
                                        case 35:
                                            return q = c, n.abrupt("break", 37);
                                        case 37:
                                            if (i === q) {
                                                n.next = 39;
                                                break
                                            }
                                            return n.abrupt("return", {
                                                reset: {
                                                    placement: q
                                                }
                                            });
                                        case 39:
                                            return n.abrupt("return", {});
                                        case 40:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        }
                    }
                },
                po = function(t) {
                    return {
                        name: "arrow",
                        options: t,
                        fn: function(e) {
                            return hr(regeneratorRuntime.mark((function n() {
                                var r, o, i, u, a, c, l, s, f, d, p, h, v, y, m, b, g, w, O, E, S, x, k, R, P, j, _, C, A, T, D, I, L, M, N, F;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (i = e.x, u = e.y, a = e.placement, c = e.rects, l = e.platform, s = e.elements, f = e.middlewareData, d = Gn(t, e) || {}, p = d.element, h = d.padding, v = void 0 === h ? 0 : h, null != p) {
                                                n.next = 4;
                                                break
                                            }
                                            return n.abrupt("return", {});
                                        case 4:
                                            return y = or(v), m = {
                                                x: i,
                                                y: u
                                            }, b = Zn(a), g = Vn(b), n.next = 10, l.getDimensions(p);
                                        case 10:
                                            return w = n.sent, E = (O = "y" === b) ? "top" : "left", S = O ? "bottom" : "right", x = O ? "clientHeight" : "clientWidth", k = c.reference[g] + c.reference[b] - m[b] - c.floating[g], R = m[b] - c.reference[b], n.next = 19, null == l.getOffsetParent ? void 0 : l.getOffsetParent(p);
                                        case 19:
                                            if (P = n.sent, j = P ? P[x] : 0, n.t0 = !j, n.t0) {
                                                n.next = 26;
                                                break
                                            }
                                            return n.next = 25, null == l.isElement ? void 0 : l.isElement(P);
                                        case 25:
                                            n.t0 = !n.sent;
                                        case 26:
                                            if (!n.t0) {
                                                n.next = 28;
                                                break
                                            }
                                            j = s.floating[x] || c.floating[g];
                                        case 28:
                                            return _ = k / 2 - R / 2, C = j / 2 - w[g] / 2 - 1, A = Nn(y[E], C), T = Nn(y[S], C), D = A, I = j - w[g] - T, L = j / 2 - w[g] / 2 + _, M = Bn(D, L, I), N = !f.arrow && null != Wn(a) && L !== M && c.reference[g] / 2 - (L < D ? A : T) - w[g] / 2 < 0, F = N ? L < D ? L - D : L - I : 0, n.abrupt("return", (dr(o = {}, b, m[b] + F), dr(o, "data", fr((dr(r = {}, b, M), dr(r, "centerOffset", L - M - F), r), N && {
                                                alignmentOffset: F
                                            })), dr(o, "reset", N), o));
                                        case 39:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        }
                    }
                },
                ho = function(t, e, n) {
                    var r = new Map,
                        o = zr({
                            platform: ao
                        }, n),
                        i = zr(zr({}, o.platform), {}, {
                            _c: r
                        });
                    return yr(t, e, zr(zr({}, o), {}, {
                        platform: i
                    }))
                },
                vo = n(42);

            function yo(t) {
                return function(t) {
                    if (Array.isArray(t)) return go(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || bo(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function mo(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e) || bo(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function bo(t, e) {
                if (t) {
                    if ("string" == typeof t) return go(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? go(t, e) : void 0
                }
            }

            function go(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function wo(t) {
                return (wo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function Oo(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Eo(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Oo(Object(n), !0).forEach((function(e) {
                        So(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Oo(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function So(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function xo(t, e, n, r, o, i, u) {
                try {
                    var a = t[i](u),
                        c = a.value
                } catch (t) {
                    return void n(t)
                }
                a.done ? e(c) : Promise.resolve(c).then(r, o)
            }
            var ko = "react-tooltip-core-styles",
                Ro = "react-tooltip-base-styles",
                Po = {
                    core: !1,
                    base: !1
                };

            function jo(t) {
                var e, n, r = t.css,
                    o = t.id,
                    i = void 0 === o ? Ro : o,
                    u = t.type,
                    a = void 0 === u ? "base" : u,
                    c = t.ref;
                if (r && "undefined" != typeof document && !Po[a] && !("core" === a && "undefined" != typeof process && (null === (e = null === process || void 0 === process ? void 0 : process.env) || void 0 === e ? void 0 : e.REACT_TOOLTIP_DISABLE_CORE_STYLES) || "base" !== a && "undefined" != typeof process && (null === (n = null === process || void 0 === process ? void 0 : process.env) || void 0 === n ? void 0 : n.REACT_TOOLTIP_DISABLE_BASE_STYLES))) {
                    "core" === a && (i = ko), c || (c = {});
                    var l = c.insertAt;
                    if (!document.getElementById(i)) {
                        var s = document.head || document.getElementsByTagName("head")[0],
                            f = document.createElement("style");
                        f.id = i, f.type = "text/css", "top" === l && s.firstChild ? s.insertBefore(f, s.firstChild) : s.appendChild(f), f.styleSheet ? f.styleSheet.cssText = r : f.appendChild(document.createTextNode(r)), Po[a] = !0
                    }
                }
            }
            var _o = function() {
                    var t, e = (t = regeneratorRuntime.mark((function t(e) {
                        var n, r, o, i, u, a, c, l, s, f, d, p, h, v, y, m;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.elementReference, r = void 0 === n ? null : n, o = e.tooltipReference, i = void 0 === o ? null : o, u = e.tooltipArrowReference, a = void 0 === u ? null : u, c = e.place, l = void 0 === c ? "top" : c, s = e.offset, f = void 0 === s ? 10 : s, d = e.strategy, p = void 0 === d ? "absolute" : d, h = e.middlewares, v = void 0 === h ? [lo(Number(f)), fo({
                                            fallbackAxisSideDirection: "start"
                                        }), so({
                                            padding: 5
                                        })] : h, y = e.border, r) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return", {
                                        tooltipStyles: {},
                                        tooltipArrowStyles: {},
                                        place: l
                                    });
                                case 3:
                                    if (null !== i) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", {
                                        tooltipStyles: {},
                                        tooltipArrowStyles: {},
                                        place: l
                                    });
                                case 5:
                                    return m = v, t.abrupt("return", a ? (m.push(po({
                                        element: a,
                                        padding: 5
                                    })), ho(r, i, {
                                        placement: l,
                                        strategy: p,
                                        middleware: m
                                    }).then((function(t) {
                                        var e, n, r = t.x,
                                            o = t.y,
                                            i = t.placement,
                                            u = t.middlewareData,
                                            a = {
                                                left: "".concat(r, "px"),
                                                top: "".concat(o, "px"),
                                                border: y
                                            },
                                            c = null !== (e = u.arrow) && void 0 !== e ? e : {
                                                x: 0,
                                                y: 0
                                            },
                                            l = c.x,
                                            s = c.y,
                                            f = null !== (n = {
                                                top: "bottom",
                                                right: "left",
                                                bottom: "top",
                                                left: "right"
                                            }[i.split("-")[0]]) && void 0 !== n ? n : "bottom",
                                            d = y && {
                                                borderBottom: y,
                                                borderRight: y
                                            },
                                            p = 0;
                                        if (y) {
                                            var h = "".concat(y).match(/(\d+)px/);
                                            p = (null == h ? void 0 : h[1]) ? Number(h[1]) : 1
                                        }
                                        return {
                                            tooltipStyles: a,
                                            tooltipArrowStyles: Eo(Eo({
                                                left: null != l ? "".concat(l, "px") : "",
                                                top: null != s ? "".concat(s, "px") : "",
                                                right: "",
                                                bottom: ""
                                            }, d), {}, So({}, f, "-".concat(4 + p, "px"))),
                                            place: i
                                        }
                                    }))) : ho(r, i, {
                                        placement: "bottom",
                                        strategy: p,
                                        middleware: m
                                    }).then((function(t) {
                                        var e = t.x,
                                            n = t.y,
                                            r = t.placement;
                                        return {
                                            tooltipStyles: {
                                                left: "".concat(e, "px"),
                                                top: "".concat(n, "px")
                                            },
                                            tooltipArrowStyles: {},
                                            place: r
                                        }
                                    })));
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })), function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = t.apply(e, n);

                            function u(t) {
                                xo(i, r, o, u, a, "next", t)
                            }

                            function a(t) {
                                xo(i, r, o, u, a, "throw", t)
                            }
                            u(void 0)
                        }))
                    });
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Co = function(t, e) {
                    return !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(t, e)
                },
                Ao = function(t, e, n) {
                    var r = null,
                        o = function() {
                            for (var o = this, i = arguments.length, u = new Array(i), a = 0; a < i; a++) u[a] = arguments[a];
                            var c = function() {
                                r = null, n || t.apply(o, u)
                            };
                            n && !r && (t.apply(this, u), r = setTimeout(c, e)), n || (r && clearTimeout(r), r = setTimeout(c, e))
                        };
                    return o.cancel = function() {
                        r && (clearTimeout(r), r = null)
                    }, o
                },
                To = function(t) {
                    return null !== t && !Array.isArray(t) && "object" == wo(t)
                },
                Do = function t(e, n) {
                    if (e === n) return !0;
                    if (Array.isArray(e) && Array.isArray(n)) return e.length === n.length && e.every((function(e, r) {
                        return t(e, n[r])
                    }));
                    if (Array.isArray(e) !== Array.isArray(n)) return !1;
                    if (!To(e) || !To(n)) return e === n;
                    var r = Object.keys(e),
                        o = Object.keys(n);
                    return r.length === o.length && r.every((function(r) {
                        return t(e[r], n[r])
                    }))
                },
                Io = function(t) {
                    if (!(t instanceof HTMLElement || t instanceof SVGElement)) return !1;
                    var e = getComputedStyle(t);
                    return ["overflow", "overflow-x", "overflow-y"].some((function(t) {
                        var n = e.getPropertyValue(t);
                        return "auto" === n || "scroll" === n
                    }))
                },
                Lo = function(t) {
                    if (!t) return null;
                    for (var e = t.parentElement; e;) {
                        if (Io(e)) return e;
                        e = e.parentElement
                    }
                    return document.scrollingElement || document.documentElement
                },
                Mo = "undefined" != typeof window ? t.useLayoutEffect : t.useEffect,
                No = function(t) {
                    t.current && (clearTimeout(t.current), t.current = null)
                },
                Fo = "DEFAULT_TOOLTIP_ID",
                qo = {
                    anchorRefs: new Set,
                    activeAnchor: {
                        current: null
                    },
                    attach: function() {},
                    detach: function() {},
                    setActiveAnchor: function() {}
                },
                Uo = (0, t.createContext)({
                    getTooltipData: function() {
                        return qo
                    }
                });

            function Qo() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fo;
                return (0, t.useContext)(Uo).getTooltipData(e)
            }
            var Ho = {
                    tooltip: "core-styles-module_tooltip__3vRRp",
                    fixed: "core-styles-module_fixed__pcSol",
                    arrow: "core-styles-module_arrow__cvMwQ",
                    noArrow: "core-styles-module_noArrow__xock6",
                    clickable: "core-styles-module_clickable__ZuTTB",
                    show: "core-styles-module_show__Nt9eE",
                    closing: "core-styles-module_closing__sGnxF"
                },
                Ko = {
                    tooltip: "styles-module_tooltip__mnnfp",
                    arrow: "styles-module_arrow__K0L3T",
                    dark: "styles-module_dark__xNqje",
                    light: "styles-module_light__Z6W-X",
                    success: "styles-module_success__A2AKt",
                    warning: "styles-module_warning__SCK0X",
                    error: "styles-module_error__JvumD",
                    info: "styles-module_info__BWdHW"
                },
                Bo = function(e) {
                    var n, r = e.forwardRef,
                        o = e.id,
                        i = e.className,
                        u = e.classNameArrow,
                        a = e.variant,
                        c = void 0 === a ? "dark" : a,
                        l = e.anchorId,
                        s = e.anchorSelect,
                        f = e.place,
                        d = void 0 === f ? "top" : f,
                        p = e.offset,
                        h = void 0 === p ? 10 : p,
                        v = e.events,
                        y = void 0 === v ? ["hover"] : v,
                        m = e.openOnClick,
                        b = void 0 !== m && m,
                        g = e.positionStrategy,
                        w = void 0 === g ? "absolute" : g,
                        O = e.middlewares,
                        E = e.wrapper,
                        S = e.delayShow,
                        x = void 0 === S ? 0 : S,
                        k = e.delayHide,
                        R = void 0 === k ? 0 : k,
                        P = e.float,
                        j = void 0 !== P && P,
                        _ = e.hidden,
                        C = void 0 !== _ && _,
                        A = e.noArrow,
                        T = void 0 !== A && A,
                        D = e.clickable,
                        I = void 0 !== D && D,
                        L = e.closeOnEsc,
                        M = void 0 !== L && L,
                        N = e.closeOnScroll,
                        F = void 0 !== N && N,
                        q = e.closeOnResize,
                        U = void 0 !== q && q,
                        Q = e.openEvents,
                        H = e.closeEvents,
                        K = e.globalCloseEvents,
                        B = e.imperativeModeOnly,
                        G = e.style,
                        z = e.position,
                        W = e.afterShow,
                        X = e.afterHide,
                        V = e.disableTooltip,
                        $ = e.content,
                        Z = e.contentWrapperRef,
                        Y = e.isOpen,
                        J = e.defaultIsOpen,
                        tt = void 0 !== J && J,
                        et = e.setIsOpen,
                        nt = e.activeAnchor,
                        rt = e.setActiveAnchor,
                        ot = e.border,
                        it = e.opacity,
                        ut = e.arrowColor,
                        at = e.role,
                        ct = void 0 === at ? "tooltip" : at,
                        lt = (0, t.useRef)(null),
                        st = (0, t.useRef)(null),
                        ft = (0, t.useRef)(null),
                        dt = (0, t.useRef)(null),
                        pt = (0, t.useRef)(null),
                        ht = mo((0, t.useState)({
                            tooltipStyles: {},
                            tooltipArrowStyles: {},
                            place: d
                        }), 2),
                        vt = ht[0],
                        yt = ht[1],
                        mt = mo((0, t.useState)(!1), 2),
                        bt = mt[0],
                        gt = mt[1],
                        wt = mo((0, t.useState)(!1), 2),
                        Ot = wt[0],
                        Et = wt[1],
                        St = mo((0, t.useState)(null), 2),
                        xt = St[0],
                        kt = St[1],
                        Rt = (0, t.useRef)(!1),
                        Pt = (0, t.useRef)(null),
                        jt = Qo(o),
                        _t = jt.anchorRefs,
                        Ct = jt.setActiveAnchor,
                        At = (0, t.useRef)(!1),
                        Tt = mo((0, t.useState)([]), 2),
                        Dt = Tt[0],
                        It = Tt[1],
                        Lt = (0, t.useRef)(!1),
                        Mt = b || y.includes("click"),
                        Nt = Mt || (null == Q ? void 0 : Q.click) || (null == Q ? void 0 : Q.dblclick) || (null == Q ? void 0 : Q.mousedown),
                        Ft = Q ? Eo({}, Q) : {
                            mouseover: !0,
                            focus: !0,
                            mouseenter: !1,
                            click: !1,
                            dblclick: !1,
                            mousedown: !1
                        };
                    !Q && Mt && Object.assign(Ft, {
                        mouseenter: !1,
                        focus: !1,
                        mouseover: !1,
                        click: !0
                    });
                    var qt = H ? Eo({}, H) : {
                        mouseout: !0,
                        blur: !0,
                        mouseleave: !1,
                        click: !1,
                        dblclick: !1,
                        mouseup: !1
                    };
                    !H && Mt && Object.assign(qt, {
                        mouseleave: !1,
                        blur: !1,
                        mouseout: !1
                    });
                    var Ut = K ? Eo({}, K) : {
                        escape: M || !1,
                        scroll: F || !1,
                        resize: U || !1,
                        clickOutsideAnchor: Nt || !1
                    };
                    B && (Object.assign(Ft, {
                        mouseenter: !1,
                        focus: !1,
                        click: !1,
                        dblclick: !1,
                        mousedown: !1
                    }), Object.assign(qt, {
                        mouseleave: !1,
                        blur: !1,
                        click: !1,
                        dblclick: !1,
                        mouseup: !1
                    }), Object.assign(Ut, {
                        escape: !1,
                        scroll: !1,
                        resize: !1,
                        clickOutsideAnchor: !1
                    })), Mo((function() {
                        return Lt.current = !0,
                            function() {
                                Lt.current = !1
                            }
                    }), []);
                    var Qt = function(t) {
                        Lt.current && (t && Et(!0), setTimeout((function() {
                            Lt.current && (null == et || et(t), void 0 === Y && gt(t))
                        }), 10))
                    };
                    (0, t.useEffect)((function() {
                        if (void 0 === Y) return function() {
                            return null
                        };
                        Y && Et(!0);
                        var t = setTimeout((function() {
                            gt(Y)
                        }), 10);
                        return function() {
                            clearTimeout(t)
                        }
                    }), [Y]), (0, t.useEffect)((function() {
                        if (bt !== Rt.current)
                            if (No(pt), Rt.current = bt, bt) null == W || W();
                            else {
                                var t = function(t) {
                                    var e = getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay").match(/^([\d.]+)(ms|s)$/);
                                    if (!e) return 0;
                                    var n = mo(e, 3),
                                        r = n[1],
                                        o = n[2];
                                    return Number(r) * ("ms" === o ? 1 : 1e3)
                                }();
                                pt.current = setTimeout((function() {
                                    Et(!1), kt(null), null == X || X()
                                }), t + 25)
                            }
                    }), [bt]);
                    var Ht = function(t) {
                            yt((function(e) {
                                return Do(e, t) ? e : t
                            }))
                        },
                        Kt = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x;
                            No(ft), Ot ? Qt(!0) : ft.current = setTimeout((function() {
                                Qt(!0)
                            }), t)
                        },
                        Bt = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R;
                            No(dt), dt.current = setTimeout((function() {
                                At.current || Qt(!1)
                            }), t)
                        },
                        Gt = function(t) {
                            var e;
                            if (t) {
                                var n = null !== (e = t.currentTarget) && void 0 !== e ? e : t.target;
                                if (!(null == n ? void 0 : n.isConnected)) return rt(null), void Ct({
                                    current: null
                                });
                                x ? Kt() : Qt(!0), rt(n), Ct({
                                    current: n
                                }), No(dt)
                            }
                        },
                        zt = function() {
                            I ? Bt(R || 100) : R ? Bt() : Qt(!1), No(ft)
                        },
                        Wt = function(t) {
                            var e, n = t.x,
                                r = t.y,
                                o = {
                                    getBoundingClientRect: function() {
                                        return {
                                            x: n,
                                            y: r,
                                            width: 0,
                                            height: 0,
                                            top: r,
                                            left: n,
                                            right: n,
                                            bottom: r
                                        }
                                    }
                                };
                            _o({
                                place: null !== (e = null == xt ? void 0 : xt.place) && void 0 !== e ? e : d,
                                offset: h,
                                elementReference: o,
                                tooltipReference: lt.current,
                                tooltipArrowReference: st.current,
                                strategy: w,
                                middlewares: O,
                                border: ot
                            }).then((function(t) {
                                Ht(t)
                            }))
                        },
                        Xt = function(t) {
                            if (t) {
                                var e = t,
                                    n = {
                                        x: e.clientX,
                                        y: e.clientY
                                    };
                                Wt(n), Pt.current = n
                            }
                        },
                        Vt = function(t) {
                            var e;
                            if (bt) {
                                var n = t.target;
                                n.isConnected && ((null === (e = lt.current) || void 0 === e ? void 0 : e.contains(n)) || [document.querySelector("[id='".concat(l, "']"))].concat(yo(Dt)).some((function(t) {
                                    return null == t ? void 0 : t.contains(n)
                                })) || (Qt(!1), No(ft)))
                            }
                        },
                        $t = Ao(Gt, 50, !0),
                        Zt = Ao(zt, 50, !0),
                        Yt = function(t) {
                            Zt.cancel(), $t(t)
                        },
                        Jt = function() {
                            $t.cancel(), Zt()
                        },
                        te = (0, t.useCallback)((function() {
                            var t, e, n = null !== (t = null == xt ? void 0 : xt.position) && void 0 !== t ? t : z;
                            n ? Wt(n) : j ? Pt.current && Wt(Pt.current) : (null == nt ? void 0 : nt.isConnected) && _o({
                                place: null !== (e = null == xt ? void 0 : xt.place) && void 0 !== e ? e : d,
                                offset: h,
                                elementReference: nt,
                                tooltipReference: lt.current,
                                tooltipArrowReference: st.current,
                                strategy: w,
                                middlewares: O,
                                border: ot
                            }).then((function(t) {
                                Lt.current && Ht(t)
                            }))
                        }), [bt, nt, $, G, d, null == xt ? void 0 : xt.place, h, w, z, null == xt ? void 0 : xt.position, j]);
                    (0, t.useEffect)((function() {
                        var t, e, n = new Set(_t);
                        Dt.forEach((function(t) {
                            (null == V ? void 0 : V(t)) || n.add({
                                current: t
                            })
                        }));
                        var r = document.querySelector("[id='".concat(l, "']"));
                        r && !(null == V ? void 0 : V(r)) && n.add({
                            current: r
                        });
                        var o = function() {
                                Qt(!1)
                            },
                            i = Lo(nt),
                            u = Lo(lt.current);
                        Ut.scroll && (window.addEventListener("scroll", o), null == i || i.addEventListener("scroll", o), null == u || u.addEventListener("scroll", o));
                        var a = null;
                        Ut.resize ? window.addEventListener("resize", o) : nt && lt.current && (a = co(nt, lt.current, te, {
                            ancestorResize: !0,
                            elementResize: !0,
                            layoutShift: !0
                        }));
                        var c = function(t) {
                            "Escape" === t.key && Qt(!1)
                        };
                        Ut.escape && window.addEventListener("keydown", c), Ut.clickOutsideAnchor && window.addEventListener("click", Vt);
                        var s = [],
                            f = function(t) {
                                bt && (null == t ? void 0 : t.target) === nt || Gt(t)
                            },
                            d = function(t) {
                                bt && (null == t ? void 0 : t.target) === nt && zt()
                            },
                            p = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"],
                            h = ["click", "dblclick", "mousedown", "mouseup"];
                        Object.entries(Ft).forEach((function(t) {
                            var e = mo(t, 2),
                                n = e[0];
                            e[1] && (p.includes(n) ? s.push({
                                event: n,
                                listener: Yt
                            }) : h.includes(n) && s.push({
                                event: n,
                                listener: f
                            }))
                        })), Object.entries(qt).forEach((function(t) {
                            var e = mo(t, 2),
                                n = e[0];
                            e[1] && (p.includes(n) ? s.push({
                                event: n,
                                listener: Jt
                            }) : h.includes(n) && s.push({
                                event: n,
                                listener: d
                            }))
                        })), j && s.push({
                            event: "pointermove",
                            listener: Xt
                        });
                        var v = function() {
                                At.current = !0
                            },
                            y = function() {
                                At.current = !1, zt()
                            };
                        return I && !Nt && (null === (t = lt.current) || void 0 === t || t.addEventListener("mouseenter", v), null === (e = lt.current) || void 0 === e || e.addEventListener("mouseleave", y)), s.forEach((function(t) {
                                var e = t.event,
                                    r = t.listener;
                                n.forEach((function(t) {
                                    var n;
                                    null === (n = t.current) || void 0 === n || n.addEventListener(e, r)
                                }))
                            })),
                            function() {
                                var t, e;
                                Ut.scroll && (window.removeEventListener("scroll", o), null == i || i.removeEventListener("scroll", o), null == u || u.removeEventListener("scroll", o)), Ut.resize ? window.removeEventListener("resize", o) : null == a || a(), Ut.clickOutsideAnchor && window.removeEventListener("click", Vt), Ut.escape && window.removeEventListener("keydown", c), I && !Nt && (null === (t = lt.current) || void 0 === t || t.removeEventListener("mouseenter", v), null === (e = lt.current) || void 0 === e || e.removeEventListener("mouseleave", y)), s.forEach((function(t) {
                                    var e = t.event,
                                        r = t.listener;
                                    n.forEach((function(t) {
                                        var n;
                                        null === (n = t.current) || void 0 === n || n.removeEventListener(e, r)
                                    }))
                                }))
                            }
                    }), [nt, te, Ot, _t, Dt, Q, H, K, Mt, x, R]), (0, t.useEffect)((function() {
                        var t, e, n = null !== (e = null !== (t = null == xt ? void 0 : xt.anchorSelect) && void 0 !== t ? t : s) && void 0 !== e ? e : "";
                        !n && o && (n = "[data-tooltip-id='".concat(o.replace(/'/g, "\\'"), "']"));
                        var r = new MutationObserver((function(t) {
                            var e = [],
                                r = [];
                            t.forEach((function(t) {
                                if ("attributes" === t.type && "data-tooltip-id" === t.attributeName && (t.target.getAttribute("data-tooltip-id") === o ? e.push(t.target) : t.oldValue === o && r.push(t.target)), "childList" === t.type) {
                                    if (nt) {
                                        var i = yo(t.removedNodes).filter((function(t) {
                                            return 1 === t.nodeType
                                        }));
                                        if (n) try {
                                            r.push.apply(r, yo(i.filter((function(t) {
                                                return t.matches(n)
                                            })))), r.push.apply(r, yo(i.flatMap((function(t) {
                                                return yo(t.querySelectorAll(n))
                                            }))))
                                        } catch (t) {}
                                        i.some((function(t) {
                                            var e;
                                            return !!(null === (e = null == t ? void 0 : t.contains) || void 0 === e ? void 0 : e.call(t, nt)) && (Et(!1), Qt(!1), rt(null), No(ft), No(dt), !0)
                                        }))
                                    }
                                    if (n) try {
                                        var u = yo(t.addedNodes).filter((function(t) {
                                            return 1 === t.nodeType
                                        }));
                                        e.push.apply(e, yo(u.filter((function(t) {
                                            return t.matches(n)
                                        })))), e.push.apply(e, yo(u.flatMap((function(t) {
                                            return yo(t.querySelectorAll(n))
                                        }))))
                                    } catch (t) {}
                                }
                            })), (e.length || r.length) && It((function(t) {
                                return [].concat(yo(t.filter((function(t) {
                                    return !r.includes(t)
                                }))), e)
                            }))
                        }));
                        return r.observe(document.body, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0,
                                attributeFilter: ["data-tooltip-id"],
                                attributeOldValue: !0
                            }),
                            function() {
                                r.disconnect()
                            }
                    }), [o, s, null == xt ? void 0 : xt.anchorSelect, nt]), (0, t.useEffect)((function() {
                        te()
                    }), [te]), (0, t.useEffect)((function() {
                        if (!(null == Z ? void 0 : Z.current)) return function() {
                            return null
                        };
                        var t = new ResizeObserver((function() {
                            setTimeout((function() {
                                return te()
                            }))
                        }));
                        return t.observe(Z.current),
                            function() {
                                t.disconnect()
                            }
                    }), [$, null == Z ? void 0 : Z.current]), (0, t.useEffect)((function() {
                        var t, e = document.querySelector("[id='".concat(l, "']")),
                            n = [].concat(yo(Dt), [e]);
                        nt && n.includes(nt) || rt(null !== (t = Dt[0]) && void 0 !== t ? t : e)
                    }), [l, Dt, nt]), (0, t.useEffect)((function() {
                        return tt && Qt(!0),
                            function() {
                                No(ft), No(dt)
                            }
                    }), []), (0, t.useEffect)((function() {
                        var t, e = null !== (t = null == xt ? void 0 : xt.anchorSelect) && void 0 !== t ? t : s;
                        if (!e && o && (e = "[data-tooltip-id='".concat(o.replace(/'/g, "\\'"), "']")), e) try {
                            var n = Array.from(document.querySelectorAll(e));
                            It(n)
                        } catch (t) {
                            It([])
                        }
                    }), [o, s, null == xt ? void 0 : xt.anchorSelect]), (0, t.useEffect)((function() {
                        ft.current && (No(ft), Kt(x))
                    }), [x]);
                    var ee = null !== (n = null == xt ? void 0 : xt.content) && void 0 !== n ? n : $,
                        ne = bt && Object.keys(vt.tooltipStyles).length > 0;
                    return (0, t.useImperativeHandle)(r, (function() {
                        return {
                            open: function(t) {
                                if (null == t ? void 0 : t.anchorSelect) try {
                                    document.querySelector(t.anchorSelect)
                                } catch (e) {
                                    return void console.warn('[react-tooltip] "'.concat(t.anchorSelect, '" is not a valid CSS selector'))
                                }
                                kt(null != t ? t : null), (null == t ? void 0 : t.delay) ? Kt(t.delay) : Qt(!0)
                            },
                            close: function(t) {
                                (null == t ? void 0 : t.delay) ? Bt(t.delay): Qt(!1)
                            },
                            activeAnchor: nt,
                            place: vt.place,
                            isOpen: Boolean(Ot && !C && ee && ne)
                        }
                    })), Ot && !C && ee ? t.createElement(E, {
                        id: o,
                        role: ct,
                        className: vo("react-tooltip", Ho.tooltip, Ko.tooltip, Ko[c], i, "react-tooltip__place-".concat(vt.place), Ho[ne ? "show" : "closing"], ne ? "react-tooltip__show" : "react-tooltip__closing", "fixed" === w && Ho.fixed, I && Ho.clickable),
                        onTransitionEnd: function(t) {
                            No(pt), bt || "opacity" !== t.propertyName || (Et(!1), kt(null), null == X || X())
                        },
                        style: Eo(Eo(Eo({}, G), vt.tooltipStyles), {}, {
                            opacity: void 0 !== it && ne ? it : void 0
                        }),
                        ref: lt
                    }, ee, t.createElement(E, {
                        className: vo("react-tooltip-arrow", Ho.arrow, Ko.arrow, u, T && Ho.noArrow),
                        style: Eo(Eo({}, vt.tooltipArrowStyles), {}, {
                            background: ut ? "linear-gradient(to right bottom, transparent 50%, ".concat(ut, " 50%)") : void 0
                        }),
                        ref: st
                    })) : null
                },
                Go = function(e) {
                    var n = e.content;
                    return t.createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: n
                        }
                    })
                },
                zo = t.forwardRef((function(e, n) {
                    var r = e.id,
                        o = e.anchorId,
                        i = e.anchorSelect,
                        u = e.content,
                        a = e.html,
                        c = e.render,
                        l = e.className,
                        s = e.classNameArrow,
                        f = e.variant,
                        d = void 0 === f ? "dark" : f,
                        p = e.place,
                        h = void 0 === p ? "top" : p,
                        v = e.offset,
                        y = void 0 === v ? 10 : v,
                        m = e.wrapper,
                        b = void 0 === m ? "div" : m,
                        g = e.children,
                        w = void 0 === g ? null : g,
                        O = e.events,
                        E = void 0 === O ? ["hover"] : O,
                        S = e.openOnClick,
                        x = void 0 !== S && S,
                        k = e.positionStrategy,
                        R = void 0 === k ? "absolute" : k,
                        P = e.middlewares,
                        j = e.delayShow,
                        _ = void 0 === j ? 0 : j,
                        C = e.delayHide,
                        A = void 0 === C ? 0 : C,
                        T = e.float,
                        D = void 0 !== T && T,
                        I = e.hidden,
                        L = void 0 !== I && I,
                        M = e.noArrow,
                        N = void 0 !== M && M,
                        F = e.clickable,
                        q = void 0 !== F && F,
                        U = e.closeOnEsc,
                        Q = void 0 !== U && U,
                        H = e.closeOnScroll,
                        K = void 0 !== H && H,
                        B = e.closeOnResize,
                        G = void 0 !== B && B,
                        z = e.openEvents,
                        W = e.closeEvents,
                        X = e.globalCloseEvents,
                        V = e.imperativeModeOnly,
                        $ = void 0 !== V && V,
                        Z = e.style,
                        Y = e.position,
                        J = e.isOpen,
                        tt = e.defaultIsOpen,
                        et = void 0 !== tt && tt,
                        nt = e.disableStyleInjection,
                        rt = void 0 !== nt && nt,
                        ot = e.border,
                        it = e.opacity,
                        ut = e.arrowColor,
                        at = e.setIsOpen,
                        ct = e.afterShow,
                        lt = e.afterHide,
                        st = e.disableTooltip,
                        ft = e.role,
                        dt = void 0 === ft ? "tooltip" : ft,
                        pt = mo((0, t.useState)(u), 2),
                        ht = pt[0],
                        vt = pt[1],
                        yt = mo((0, t.useState)(a), 2),
                        mt = yt[0],
                        bt = yt[1],
                        gt = mo((0, t.useState)(h), 2),
                        wt = gt[0],
                        Ot = gt[1],
                        Et = mo((0, t.useState)(d), 2),
                        St = Et[0],
                        xt = Et[1],
                        kt = mo((0, t.useState)(y), 2),
                        Rt = kt[0],
                        Pt = kt[1],
                        jt = mo((0, t.useState)(_), 2),
                        _t = jt[0],
                        Ct = jt[1],
                        At = mo((0, t.useState)(A), 2),
                        Tt = At[0],
                        Dt = At[1],
                        It = mo((0, t.useState)(D), 2),
                        Lt = It[0],
                        Mt = It[1],
                        Nt = mo((0, t.useState)(L), 2),
                        Ft = Nt[0],
                        qt = Nt[1],
                        Ut = mo((0, t.useState)(b), 2),
                        Qt = Ut[0],
                        Ht = Ut[1],
                        Kt = mo((0, t.useState)(E), 2),
                        Bt = Kt[0],
                        Gt = Kt[1],
                        zt = mo((0, t.useState)(R), 2),
                        Wt = zt[0],
                        Xt = zt[1],
                        Vt = mo((0, t.useState)(null), 2),
                        $t = Vt[0],
                        Zt = Vt[1],
                        Yt = mo((0, t.useState)(null), 2),
                        Jt = Yt[0],
                        te = Yt[1],
                        ee = (0, t.useRef)(rt),
                        ne = Qo(r),
                        re = ne.anchorRefs,
                        oe = ne.activeAnchor,
                        ie = function(t) {
                            return null == t ? void 0 : t.getAttributeNames().reduce((function(e, n) {
                                var r;
                                return n.startsWith("data-tooltip-") && (e[n.replace(/^data-tooltip-/, "")] = null !== (r = null == t ? void 0 : t.getAttribute(n)) && void 0 !== r ? r : null), e
                            }), {})
                        },
                        ue = function(t) {
                            var e = {
                                place: function(t) {
                                    var e;
                                    Ot(null !== (e = t) && void 0 !== e ? e : h)
                                },
                                content: function(t) {
                                    vt(null != t ? t : u)
                                },
                                html: function(t) {
                                    bt(null != t ? t : a)
                                },
                                variant: function(t) {
                                    var e;
                                    xt(null !== (e = t) && void 0 !== e ? e : d)
                                },
                                offset: function(t) {
                                    Pt(null === t ? y : Number(t))
                                },
                                wrapper: function(t) {
                                    var e;
                                    Ht(null !== (e = t) && void 0 !== e ? e : b)
                                },
                                events: function(t) {
                                    var e = null == t ? void 0 : t.split(" ");
                                    Gt(null != e ? e : E)
                                },
                                "position-strategy": function(t) {
                                    var e;
                                    Xt(null !== (e = t) && void 0 !== e ? e : R)
                                },
                                "delay-show": function(t) {
                                    Ct(null === t ? _ : Number(t))
                                },
                                "delay-hide": function(t) {
                                    Dt(null === t ? A : Number(t))
                                },
                                float: function(t) {
                                    Mt(null === t ? D : "true" === t)
                                },
                                hidden: function(t) {
                                    qt(null === t ? L : "true" === t)
                                },
                                "class-name": function(t) {
                                    Zt(t)
                                }
                            };
                            Object.values(e).forEach((function(t) {
                                return t(null)
                            })), Object.entries(t).forEach((function(t) {
                                var n, r = mo(t, 2),
                                    o = r[0],
                                    i = r[1];
                                null === (n = e[o]) || void 0 === n || n.call(e, i)
                            }))
                        };
                    (0, t.useEffect)((function() {
                        vt(u)
                    }), [u]), (0, t.useEffect)((function() {
                        bt(a)
                    }), [a]), (0, t.useEffect)((function() {
                        Ot(h)
                    }), [h]), (0, t.useEffect)((function() {
                        xt(d)
                    }), [d]), (0, t.useEffect)((function() {
                        Pt(y)
                    }), [y]), (0, t.useEffect)((function() {
                        Ct(_)
                    }), [_]), (0, t.useEffect)((function() {
                        Dt(A)
                    }), [A]), (0, t.useEffect)((function() {
                        Mt(D)
                    }), [D]), (0, t.useEffect)((function() {
                        qt(L)
                    }), [L]), (0, t.useEffect)((function() {
                        Xt(R)
                    }), [R]), (0, t.useEffect)((function() {
                        ee.current !== rt && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")
                    }), [rt]), (0, t.useEffect)((function() {
                        "undefined" != typeof window && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", {
                            detail: {
                                disableCore: "core" === rt,
                                disableBase: rt
                            }
                        }))
                    }), []), (0, t.useEffect)((function() {
                        var t, e = new Set(re),
                            n = i;
                        if (!n && r && (n = "[data-tooltip-id='".concat(r.replace(/'/g, "\\'"), "']")), n) try {
                            document.querySelectorAll(n).forEach((function(t) {
                                e.add({
                                    current: t
                                })
                            }))
                        } catch (t) {
                            console.warn('[react-tooltip] "'.concat(n, '" is not a valid CSS selector'))
                        }
                        var u = document.querySelector("[id='".concat(o, "']"));
                        if (u && e.add({
                                current: u
                            }), !e.size) return function() {
                            return null
                        };
                        var a = null !== (t = null != Jt ? Jt : u) && void 0 !== t ? t : oe.current,
                            c = new MutationObserver((function(t) {
                                t.forEach((function(t) {
                                    var e;
                                    if (a && "attributes" === t.type && (null === (e = t.attributeName) || void 0 === e ? void 0 : e.startsWith("data-tooltip-"))) {
                                        var n = ie(a);
                                        ue(n)
                                    }
                                }))
                            }));
                        if (a) {
                            var l = ie(a);
                            ue(l), c.observe(a, {
                                attributes: !0,
                                childList: !1,
                                subtree: !1
                            })
                        }
                        return function() {
                            c.disconnect()
                        }
                    }), [re, oe, Jt, o, i]), (0, t.useEffect)((function() {
                        (null == Z ? void 0 : Z.border) && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), ot && !Co("border", "".concat(ot)) && console.warn('[react-tooltip] "'.concat(ot, '" is not a valid `border`.')), (null == Z ? void 0 : Z.opacity) && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), it && !Co("opacity", "".concat(it)) && console.warn('[react-tooltip] "'.concat(it, '" is not a valid `opacity`.'))
                    }), []);
                    var ae = w,
                        ce = (0, t.useRef)(null);
                    if (c) {
                        var le = c({
                            content: (null == Jt ? void 0 : Jt.getAttribute("data-tooltip-content")) || ht || null,
                            activeAnchor: Jt
                        });
                        ae = le ? t.createElement("div", {
                            ref: ce,
                            className: "react-tooltip-content-wrapper"
                        }, le) : null
                    } else ht && (ae = ht);
                    mt && (ae = t.createElement(Go, {
                        content: mt
                    }));
                    var se = {
                        forwardRef: n,
                        id: r,
                        anchorId: o,
                        anchorSelect: i,
                        className: vo(l, $t),
                        classNameArrow: s,
                        content: ae,
                        contentWrapperRef: ce,
                        place: wt,
                        variant: St,
                        offset: Rt,
                        wrapper: Qt,
                        events: Bt,
                        openOnClick: x,
                        positionStrategy: Wt,
                        middlewares: P,
                        delayShow: _t,
                        delayHide: Tt,
                        float: Lt,
                        hidden: Ft,
                        noArrow: N,
                        clickable: q,
                        closeOnEsc: Q,
                        closeOnScroll: K,
                        closeOnResize: G,
                        openEvents: z,
                        closeEvents: W,
                        globalCloseEvents: X,
                        imperativeModeOnly: $,
                        style: Z,
                        position: Y,
                        isOpen: J,
                        defaultIsOpen: et,
                        border: ot,
                        opacity: it,
                        arrowColor: ut,
                        setIsOpen: at,
                        afterShow: ct,
                        afterHide: lt,
                        disableTooltip: st,
                        activeAnchor: Jt,
                        setActiveAnchor: function(t) {
                            return te(t)
                        },
                        role: dt
                    };
                    return t.createElement(Bo, Eo({}, se))
                }));
            "undefined" != typeof window && window.addEventListener("react-tooltip-inject-styles", (function(t) {
                t.detail.disableCore || jo({
                    css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",
                    type: "core"
                }), t.detail.disableBase || jo({
                    css: "\n.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}",
                    type: "base"
                })
            }));
            var Wo = function(n) {
                    var r = n.defaultCaseID,
                        o = Oe().translate,
                        i = (0, t.useState)(r || ""),
                        u = i[0],
                        a = i[1],
                        c = (0, t.useState)(""),
                        l = c[0],
                        s = c[1],
                        f = (0, t.useState)(!1),
                        d = f[0],
                        p = f[1],
                        h = (0, t.useState)(null),
                        v = h[0],
                        y = h[1],
                        m = "(" + o("Message.DescriptionLimit", {
                            number: We.MAX_DESCRIPTION_LENGTH.toString()
                        }) + ")",
                        b = Qe(cn),
                        g = function() {
                            y(null)
                        };
                    (0, t.useEffect)((function() {
                        var t, e, n;
                        if (b.data) {
                            var r = (null === (t = b.data) || void 0 === t ? void 0 : t.success) ? {
                                title: o("Title.Modal.ReportSuccess"),
                                content: o("Message.Modal.ReportSuccess"),
                                buttonText: o("Action.Modal.SubmitAnother")
                            } : {
                                title: o("Title.Modal.ReportFailure"),
                                content: (null === (e = null == b ? void 0 : b.data) || void 0 === e ? void 0 : e.message) || "Error",
                                buttonText: o("Action.Modal.Ok")
                            };
                            y(r), a(""), s(""), p(!1)
                        } else if (b.error) {
                            var i = (null === (n = b.error) || void 0 === n ? void 0 : n.message) || o("Message.Modal.Error");
                            r = {
                                title: o("Title.Modal.ReportFailure"),
                                content: i,
                                buttonText: o("Action.Modal.Ok")
                            };
                            y(r)
                        }
                    }), [b.error, o, b.data]);
                    var w = d && u;
                    return e().createElement("div", {
                        className: "form-container"
                    }, e().createElement("div", {
                        id: "title",
                        className: "section"
                    }, e().createElement("h1", null, o("Title.Appeal"))), e().createElement("div", {
                        className: "main-card"
                    }, e().createElement("h2", null, o("Title.AppealContent")), e().createElement("div", {
                        id: "url-input",
                        className: "section"
                    }, e().createElement("h5", null, e().createElement("span", null, o("Question.CaseId")), e().createElement("i", {
                        "data-tooltip-id": "caseID-tooltip",
                        "data-tooltip-content": o("Tooltip.CaseId"),
                        "data-tooltip-place": "right"
                    }, e().createElement("span", {
                        className: "icon-moreinfo"
                    })), e().createElement(zo, {
                        id: "caseID-tooltip",
                        className: "status-tooltip-styles"
                    })), e().createElement("input", {
                        type: "text",
                        "data-testid": "caseID-input",
                        className: "form-control input-field",
                        value: u,
                        maxLength: We.MAX_URL_LENGTH,
                        onChange: function(t) {
                            return a(t.target.value)
                        }
                    })), e().createElement("div", {
                        id: "illegal-description-input",
                        className: "section"
                    }, e().createElement("h5", null, o("Question.AppealReason")), e().createElement("p", {
                        className: "dsa-reason-limit"
                    }, m), e().createElement("textarea", {
                        "data-testid": "reason-input",
                        className: "ticket-message form-control input-field nonresizable",
                        value: l,
                        rows: 6,
                        maxLength: We.MAX_DESCRIPTION_LENGTH,
                        onChange: function(t) {
                            return s(t.target.value)
                        }
                    })), e().createElement("div", {
                        id: "final-confirm-checkbox",
                        className: "section"
                    }, e().createElement("input", {
                        type: "checkbox",
                        "data-testid": "confirm-btn",
                        id: "confirmCheckbox",
                        className: "pointer-cursor",
                        checked: d,
                        onChange: function(t) {
                            p(t.target.checked)
                        }
                    }), e().createElement("label", {
                        htmlFor: "confirmCheckbox",
                        className: "pointer-cursor margin-left-5"
                    }, o("Message.Confirm"))), e().createElement("div", {
                        id: "submit-button",
                        className: "section"
                    }, b.isLoading ? e().createElement("button", {
                        type: "button",
                        className: "btn-primary-md btn-full-width loading-button",
                        disabled: !0
                    }, e().createElement("span", {
                        className: "loading-spinner"
                    })) : e().createElement("button", {
                        type: "button",
                        "data-testid": "submit-btn",
                        className: "btn-primary-md btn-full-width",
                        disabled: !w,
                        onClick: function() {
                            var t = {
                                CaseId: u,
                                Reason: l,
                                IsAppeal: !0
                            };
                            b.mutate(t)
                        }
                    }, e().createElement("span", null, o("Action.Submit"))))), e().createElement(ze, {
                        open: !!v,
                        onClose: g,
                        title: null == v ? void 0 : v.title,
                        content: null == v ? void 0 : v.content
                    }, e().createElement("button", {
                        type: "button",
                        className: "btn-control-md btn-full-width white-space-button",
                        onClick: g
                    }, null == v ? void 0 : v.buttonText)))
                },
                Xo = {
                    common: [],
                    feature: "Feature.DSAIllegalContentReportForm"
                },
                Vo = new ie,
                $o = function() {
                    var t = new URLSearchParams(window.location.search),
                        n = t.get("appeal"),
                        r = t.get("caseID"),
                        o = t.get("contentURL");
                    return e().createElement(we, {
                        translationConfig: Xo
                    }, e().createElement(se, {
                        client: Vo
                    }, n && "true" === n ? e().createElement(Wo, {
                        defaultCaseID: r
                    }) : e().createElement(In, {
                        defaultContentURL: o
                    })))
                },
                Zo = function() {
                    var t = Oe().translateHtml,
                        n = ye.EnvironmentUrls.domain ? "https://" + ye.EnvironmentUrls.domain + "/support" : rn;
                    return e().createElement("div", {
                        className: "form-container"
                    }, e().createElement("div", {
                        className: "main-card"
                    }, e().createElement("p", {
                        className: "text-description"
                    }, t("Message.NonEuUserPage", [
                        ["link", "linkEnd", function(t) {
                            return e().createElement("a", {
                                href: n,
                                className: "text-link",
                                target: "_blank",
                                rel: "noreferrer"
                            }, t)
                        }]
                    ]))))
                },
                Yo = function() {
                    return e().createElement(we, {
                        translationConfig: Xo
                    }, e().createElement(Zo, null))
                },
                Jo = document.getElementById("dsa-illegal-content-report-container"),
                ti = document.getElementById("non-eu-user-dsa-illegal-content-report-container");
            (0, o.ready)((function() {
                Jo ? (0, r.render)(e().createElement($o, null), Jo) : ti && (0, r.render)(e().createElement(Yo, null), ti)
            }))
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/ce643ce713c09223012d3957287e2e39-IllegalContentReport.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("DSAIllegalContentReportForm");