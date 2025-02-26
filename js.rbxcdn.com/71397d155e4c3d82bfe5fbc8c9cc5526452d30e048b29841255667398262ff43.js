! function() {
    var n = {
            84: function(e) {
                "use strict";
                var p = {
                    single_source_shortest_paths: function(e, t, n) {
                        var r = {},
                            a = {};
                        a[t] = 0;
                        var o, i, c, u, l, s, f, d = p.PriorityQueue.make();
                        for (d.push(t, 0); !d.empty();)
                            for (c in i = (o = d.pop()).value, u = o.cost, l = e[i] || {}) l.hasOwnProperty(c) && (s = u + l[c], f = a[c], (void 0 === a[c] || s < f) && (a[c] = s, d.push(c, s), r[c] = i));
                        if (void 0 === n || void 0 !== a[n]) return r;
                        n = ["Could not find a path from ", t, " to ", n, "."].join("");
                        throw new Error(n)
                    },
                    extract_shortest_path_from_predecessor_list: function(e, t) {
                        for (var n = [], r = t; r;) n.push(r), e[r], r = e[r];
                        return n.reverse(), n
                    },
                    find_path: function(e, t, n) {
                        t = p.single_source_shortest_paths(e, t, n);
                        return p.extract_shortest_path_from_predecessor_list(t, n)
                    },
                    PriorityQueue: {
                        make: function(e) {
                            var t, n = p.PriorityQueue,
                                r = {};
                            for (t in e = e || {}, n) n.hasOwnProperty(t) && (r[t] = n[t]);
                            return r.queue = [], r.sorter = e.sorter || n.default_sorter, r
                        },
                        default_sorter: function(e, t) {
                            return e.cost - t.cost
                        },
                        push: function(e, t) {
                            t = {
                                value: e,
                                cost: t
                            };
                            this.queue.push(t), this.queue.sort(this.sorter)
                        },
                        pop: function() {
                            return this.queue.shift()
                        },
                        empty: function() {
                            return 0 === this.queue.length
                        }
                    }
                };
                e.exports = p
            },
            717: function(e) {
                "use strict";
                e.exports = function(e) {
                    for (var t = [], n = e.length, r = 0; r < n; r++) {
                        var a, o = e.charCodeAt(r);
                        55296 <= o && o <= 56319 && r + 1 < n && (56320 <= (a = e.charCodeAt(r + 1)) && a <= 57343 && (o = 1024 * (o - 55296) + a - 56320 + 65536, r += 1)), o < 128 ? t.push(o) : o < 2048 ? (t.push(o >> 6 | 192), t.push(63 & o | 128)) : o < 55296 || 57344 <= o && o < 65536 ? (t.push(o >> 12 | 224), t.push(o >> 6 & 63 | 128), t.push(63 & o | 128)) : 65536 <= o && o <= 1114111 ? (t.push(o >> 18 | 240), t.push(o >> 12 & 63 | 128), t.push(o >> 6 & 63 | 128), t.push(63 & o | 128)) : t.push(239, 191, 189)
                    }
                    return new Uint8Array(t).buffer
                }
            },
            779: function(e, t, n) {
                "use strict";
                /**
                 * @license React
                 * use-sync-external-store-shim.production.min.js
                 *
                 * Copyright (c) Facebook, Inc. and its affiliates.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */
                var r = n(594);
                var a = "function" == typeof Object.is ? Object.is : function(e, t) {
                        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                    },
                    i = r.useState,
                    c = r.useEffect,
                    u = r.useLayoutEffect,
                    l = r.useDebugValue;

                function s(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !a(e, n)
                    } catch (e) {
                        return 1
                    }
                }
                n = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                    return t()
                } : function(e, t) {
                    var n = t(),
                        r = i({
                            inst: {
                                value: n,
                                getSnapshot: t
                            }
                        }),
                        a = r[0].inst,
                        o = r[1];
                    return u(function() {
                        a.value = n, a.getSnapshot = t, s(a) && o({
                            inst: a
                        })
                    }, [e, n, t]), c(function() {
                        return s(a) && o({
                            inst: a
                        }), e(function() {
                            s(a) && o({
                                inst: a
                            })
                        })
                    }, [e]), l(n), n
                };
                t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : n
            },
            320: function(e, t, n) {
                "use strict";
                /**
                 * @license React
                 * use-sync-external-store-shim/with-selector.production.min.js
                 *
                 * Copyright (c) Facebook, Inc. and its affiliates.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */
                var r = n(594),
                    n = n(676);
                var s = "function" == typeof Object.is ? Object.is : function(e, t) {
                        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                    },
                    a = n.useSyncExternalStore,
                    o = r.useRef,
                    f = r.useEffect,
                    d = r.useMemo,
                    p = r.useDebugValue;
                t.useSyncExternalStoreWithSelector = function(e, n, i, c, u) {
                    var l, t = o(null);
                    null === t.current ? (l = {
                        hasValue: !1,
                        value: null
                    }, t.current = l) : l = t.current, t = d(function() {
                        function e(e) {
                            if (!o) {
                                if (o = !0, e = c(r = e), void 0 !== u && l.hasValue) {
                                    var t = l.value;
                                    if (u(t, e)) return a = t
                                }
                                return a = e
                            }
                            if (t = a, s(r, e)) return t;
                            var n = c(e);
                            return void 0 !== u && u(t, n) ? t : (r = e, a = n)
                        }
                        var r, a, o = !1,
                            t = void 0 === i ? null : i;
                        return [function() {
                            return e(n())
                        }, null === t ? void 0 : function() {
                            return e(t())
                        }]
                    }, [n, i, c, u]);
                    var r = a(e, t[0], t[1]);
                    return f(function() {
                        l.hasValue = !0, l.value = r
                    }, [r]), p(r), r
                }
            },
            676: function(e, t, n) {
                "use strict";
                e.exports = n(779)
            },
            390: function(e, t, n) {
                "use strict";
                e.exports = n(320)
            },
            56: function(e, t, n) {
                "use strict";
                var r = n(922),
                    a = {
                        childContextTypes: !0,
                        contextType: !0,
                        contextTypes: !0,
                        defaultProps: !0,
                        displayName: !0,
                        getDefaultProps: !0,
                        getDerivedStateFromError: !0,
                        getDerivedStateFromProps: !0,
                        mixins: !0,
                        propTypes: !0,
                        type: !0
                    },
                    f = {
                        name: !0,
                        length: !0,
                        prototype: !0,
                        caller: !0,
                        callee: !0,
                        arguments: !0,
                        arity: !0
                    },
                    o = {
                        $$typeof: !0,
                        compare: !0,
                        defaultProps: !0,
                        displayName: !0,
                        propTypes: !0,
                        type: !0
                    },
                    i = {};

                function d(e) {
                    return r.isMemo(e) ? o : i[e.$$typeof] || a
                }
                i[r.ForwardRef] = {
                    $$typeof: !0,
                    render: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0
                }, i[r.Memo] = o;
                var p = Object.defineProperty,
                    m = Object.getOwnPropertyNames,
                    h = Object.getOwnPropertySymbols,
                    v = Object.getOwnPropertyDescriptor,
                    g = Object.getPrototypeOf,
                    y = Object.prototype;
                e.exports = function e(t, n, r) {
                    if ("string" != typeof n) {
                        var a;
                        !y || (a = g(n)) && a !== y && e(t, a, r);
                        var o = m(n);
                        h && (o = o.concat(h(n)));
                        for (var i = d(t), c = d(n), u = 0; u < o.length; ++u) {
                            var l = o[u];
                            if (!(f[l] || r && r[l] || c && c[l] || i && i[l])) {
                                var s = v(n, l);
                                try {
                                    p(t, l, s)
                                } catch (e) {}
                            }
                        }
                    }
                    return t
                }
            },
            326: function(e, t) {
                "use strict";
                /** @license React v16.13.1
                 * react-is.production.min.js
                 *
                 * Copyright (c) Facebook, Inc. and its affiliates.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */
                function n(e) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                var r = "function" == typeof Symbol && Symbol.for,
                    a = r ? Symbol.for("react.element") : 60103,
                    o = r ? Symbol.for("react.portal") : 60106,
                    i = r ? Symbol.for("react.fragment") : 60107,
                    c = r ? Symbol.for("react.strict_mode") : 60108,
                    u = r ? Symbol.for("react.profiler") : 60114,
                    l = r ? Symbol.for("react.provider") : 60109,
                    s = r ? Symbol.for("react.context") : 60110,
                    f = r ? Symbol.for("react.async_mode") : 60111,
                    d = r ? Symbol.for("react.concurrent_mode") : 60111,
                    p = r ? Symbol.for("react.forward_ref") : 60112,
                    m = r ? Symbol.for("react.suspense") : 60113,
                    h = r ? Symbol.for("react.suspense_list") : 60120,
                    v = r ? Symbol.for("react.memo") : 60115,
                    g = r ? Symbol.for("react.lazy") : 60116,
                    y = r ? Symbol.for("react.block") : 60121,
                    b = r ? Symbol.for("react.fundamental") : 60117,
                    E = r ? Symbol.for("react.responder") : 60118,
                    w = r ? Symbol.for("react.scope") : 60119;

                function S(e) {
                    if ("object" === n(e) && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                            case a:
                                switch (e = e.type) {
                                    case f:
                                    case d:
                                    case i:
                                    case u:
                                    case c:
                                    case m:
                                        return e;
                                    default:
                                        switch (e = e && e.$$typeof) {
                                            case s:
                                            case p:
                                            case g:
                                            case v:
                                            case l:
                                                return e;
                                            default:
                                                return t
                                        }
                                }
                            case o:
                                return t
                        }
                    }
                }

                function C(e) {
                    return S(e) === d
                }
                t.AsyncMode = f, t.ConcurrentMode = d, t.ContextConsumer = s, t.ContextProvider = l, t.Element = a, t.ForwardRef = p, t.Fragment = i, t.Lazy = g, t.Memo = v, t.Portal = o, t.Profiler = u, t.StrictMode = c, t.Suspense = m, t.isAsyncMode = function(e) {
                    return C(e) || S(e) === f
                }, t.isConcurrentMode = C, t.isContextConsumer = function(e) {
                    return S(e) === s
                }, t.isContextProvider = function(e) {
                    return S(e) === l
                }, t.isElement = function(e) {
                    return "object" === n(e) && null !== e && e.$$typeof === a
                }, t.isForwardRef = function(e) {
                    return S(e) === p
                }, t.isFragment = function(e) {
                    return S(e) === i
                }, t.isLazy = function(e) {
                    return S(e) === g
                }, t.isMemo = function(e) {
                    return S(e) === v
                }, t.isPortal = function(e) {
                    return S(e) === o
                }, t.isProfiler = function(e) {
                    return S(e) === u
                }, t.isStrictMode = function(e) {
                    return S(e) === c
                }, t.isSuspense = function(e) {
                    return S(e) === m
                }, t.isValidElementType = function(e) {
                    return "string" == typeof e || "function" == typeof e || e === i || e === d || e === u || e === c || e === m || e === h || "object" === n(e) && null !== e && (e.$$typeof === g || e.$$typeof === v || e.$$typeof === l || e.$$typeof === s || e.$$typeof === p || e.$$typeof === b || e.$$typeof === E || e.$$typeof === w || e.$$typeof === y)
                }, t.typeOf = S
            },
            922: function(e, t, n) {
                "use strict";
                e.exports = n(326)
            },
            157: function(e, t) {
                "use strict";
                Symbol.for("react.element"), Symbol.for("react.portal"), Symbol.for("react.fragment"), Symbol.for("react.strict_mode"), Symbol.for("react.profiler"), Symbol.for("react.provider"), Symbol.for("react.context"), Symbol.for("react.server_context"), Symbol.for("react.forward_ref"), Symbol.for("react.suspense"), Symbol.for("react.suspense_list"), Symbol.for("react.memo"), Symbol.for("react.lazy"), Symbol.for("react.offscreen");
                Symbol.for("react.module.reference")
            },
            625: function(e, t, n) {
                "use strict";
                n(157)
            },
            574: function(e, t, n) {
                var u = n(24),
                    l = n(496),
                    r = n(154),
                    a = n(195);

                function o(r, a, o, i, t) {
                    var e = [].slice.call(arguments, 1),
                        n = e.length,
                        e = "function" == typeof e[n - 1];
                    if (!e && !u()) throw new Error("Callback required as last argument");
                    if (!e) {
                        if (n < 1) throw new Error("Too few arguments provided");
                        return 1 === n ? (o = a, a = i = void 0) : 2 !== n || a.getContext || (i = o, o = a, a = void 0), new Promise(function(e, t) {
                            try {
                                var n = l.create(o, i);
                                e(r(n, a, i))
                            } catch (e) {
                                t(e)
                            }
                        })
                    }
                    if (n < 2) throw new Error("Too few arguments provided");
                    2 === n ? (t = o, o = a, a = i = void 0) : 3 === n && (a.getContext && void 0 === t ? (t = i, i = void 0) : (t = i, i = o, o = a, a = void 0));
                    try {
                        var c = l.create(o, i);
                        t(null, r(c, a, i))
                    } catch (e) {
                        t(e)
                    }
                }
                l.create, o.bind(null, r.render), t.toDataURL = o.bind(null, r.renderToDataURL), o.bind(null, function(e, t, n) {
                    return a.render(e, n)
                })
            },
            24: function(e) {
                e.exports = function() {
                    return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
                }
            },
            498: function(e, i, t) {
                var o = t(701).getSymbolSize;
                i.getRowColCoords = function(e) {
                    if (1 === e) return [];
                    for (var t = Math.floor(e / 7) + 2, e = o(e), n = 145 === e ? 26 : 2 * Math.ceil((e - 13) / (2 * t - 2)), r = [e - 7], a = 1; a < t - 1; a++) r[a] = r[a - 1] - n;
                    return r.push(6), r.reverse()
                }, i.getPositions = function(e) {
                    for (var t = [], n = i.getRowColCoords(e), r = n.length, a = 0; a < r; a++)
                        for (var o = 0; o < r; o++) 0 === a && 0 === o || 0 === a && o === r - 1 || a === r - 1 && 0 === o || t.push([n[a], n[o]]);
                    return t
                }
            },
            734: function(e, t, n) {
                var r = n(145),
                    a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

                function o(e) {
                    this.mode = r.ALPHANUMERIC, this.data = e
                }
                o.getBitsLength = function(e) {
                    return 11 * Math.floor(e / 2) + e % 2 * 6
                }, o.prototype.getLength = function() {
                    return this.data.length
                }, o.prototype.getBitsLength = function() {
                    return o.getBitsLength(this.data.length)
                }, o.prototype.write = function(e) {
                    for (var t = 0; t + 2 <= this.data.length; t += 2) {
                        var n = 45 * a.indexOf(this.data[t]);
                        n += a.indexOf(this.data[t + 1]), e.put(n, 11)
                    }
                    this.data.length % 2 && e.put(a.indexOf(this.data[t]), 6)
                }, e.exports = o
            },
            330: function(e) {
                function t() {
                    this.buffer = [], this.length = 0
                }
                t.prototype = {
                    get: function(e) {
                        var t = Math.floor(e / 8);
                        return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
                    },
                    put: function(e, t) {
                        for (var n = 0; n < t; n++) this.putBit(1 == (e >>> t - n - 1 & 1))
                    },
                    getLengthInBits: function() {
                        return this.length
                    },
                    putBit: function(e) {
                        var t = Math.floor(this.length / 8);
                        this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                    }
                }, e.exports = t
            },
            345: function(e) {
                function t(e) {
                    if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
                    this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
                }
                t.prototype.set = function(e, t, n, r) {
                    t = e * this.size + t;
                    this.data[t] = n, r && (this.reservedBit[t] = !0)
                }, t.prototype.get = function(e, t) {
                    return this.data[e * this.size + t]
                }, t.prototype.xor = function(e, t, n) {
                    this.data[e * this.size + t] ^= n
                }, t.prototype.isReserved = function(e, t) {
                    return this.reservedBit[e * this.size + t]
                }, e.exports = t
            },
            557: function(e, t, n) {
                var r = n(717),
                    a = n(145);

                function o(e) {
                    this.mode = a.BYTE, "string" == typeof e && (e = r(e)), this.data = new Uint8Array(e)
                }
                o.getBitsLength = function(e) {
                    return 8 * e
                }, o.prototype.getLength = function() {
                    return this.data.length
                }, o.prototype.getBitsLength = function() {
                    return o.getBitsLength(this.data.length)
                }, o.prototype.write = function(e) {
                    for (var t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
                }, e.exports = o
            },
            185: function(e, t, n) {
                var r = n(308),
                    a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                    o = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
                t.getBlocksCount = function(e, t) {
                    switch (t) {
                        case r.L:
                            return a[4 * (e - 1) + 0];
                        case r.M:
                            return a[4 * (e - 1) + 1];
                        case r.Q:
                            return a[4 * (e - 1) + 2];
                        case r.H:
                            return a[4 * (e - 1) + 3];
                        default:
                            return
                    }
                }, t.getTotalCodewordsCount = function(e, t) {
                    switch (t) {
                        case r.L:
                            return o[4 * (e - 1) + 0];
                        case r.M:
                            return o[4 * (e - 1) + 1];
                        case r.Q:
                            return o[4 * (e - 1) + 2];
                        case r.H:
                            return o[4 * (e - 1) + 3];
                        default:
                            return
                    }
                }
            },
            308: function(e, n) {
                n.L = {
                    bit: 1
                }, n.M = {
                    bit: 0
                }, n.Q = {
                    bit: 3
                }, n.H = {
                    bit: 2
                }, n.isValid = function(e) {
                    return e && void 0 !== e.bit && 0 <= e.bit && e.bit < 4
                }, n.from = function(e, t) {
                    if (n.isValid(e)) return e;
                    try {
                        return function(e) {
                            if ("string" != typeof e) throw new Error("Param is not a string");
                            switch (e.toLowerCase()) {
                                case "l":
                                case "low":
                                    return n.L;
                                case "m":
                                case "medium":
                                    return n.M;
                                case "q":
                                case "quartile":
                                    return n.Q;
                                case "h":
                                case "high":
                                    return n.H;
                                default:
                                    throw new Error("Unknown EC Level: " + e)
                            }
                        }(e)
                    } catch (e) {
                        return t
                    }
                }
            },
            305: function(e, t, n) {
                var r = n(701).getSymbolSize;
                t.getPositions = function(e) {
                    e = r(e);
                    return [
                        [0, 0],
                        [e - 7, 0],
                        [0, e - 7]
                    ]
                }
            },
            826: function(e, t, n) {
                var r = n(701),
                    a = r.getBCHDigit(1335);
                t.getEncodedBits = function(e, t) {
                    for (var t = e.bit << 3 | t, n = t << 10; 0 <= r.getBCHDigit(n) - a;) n ^= 1335 << r.getBCHDigit(n) - a;
                    return 21522 ^ (t << 10 | n)
                }
            },
            666: function(e, t) {
                var r = new Uint8Array(512),
                    a = new Uint8Array(256);
                ! function() {
                    for (var e = 1, t = 0; t < 255; t++) r[t] = e, a[e] = t, 256 & (e <<= 1) && (e ^= 285);
                    for (var n = 255; n < 512; n++) r[n] = r[n - 255]
                }(), t.log = function(e) {
                    if (e < 1) throw new Error("log(" + e + ")");
                    return a[e]
                }, t.exp = function(e) {
                    return r[e]
                }, t.mul = function(e, t) {
                    return 0 === e || 0 === t ? 0 : r[a[e] + a[t]]
                }
            },
            927: function(e, t, n) {
                var r = n(145),
                    a = n(701);

                function o(e) {
                    this.mode = r.KANJI, this.data = e
                }
                o.getBitsLength = function(e) {
                    return 13 * e
                }, o.prototype.getLength = function() {
                    return this.data.length
                }, o.prototype.getBitsLength = function() {
                    return o.getBitsLength(this.data.length)
                }, o.prototype.write = function(e) {
                    for (var t = 0; t < this.data.length; t++) {
                        var n = a.toSJIS(this.data[t]);
                        if (33088 <= n && n <= 40956) n -= 33088;
                        else {
                            if (!(57408 <= n && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
                            n -= 49472
                        }
                        n = 192 * (n >>> 8 & 255) + (255 & n), e.put(n, 13)
                    }
                }, e.exports = o
            },
            29: function(e, c) {
                c.Patterns = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                };
                var s = 3,
                    i = 3,
                    u = 40,
                    a = 10;
                c.isValid = function(e) {
                    return null != e && "" !== e && !isNaN(e) && 0 <= e && e <= 7
                }, c.from = function(e) {
                    return c.isValid(e) ? parseInt(e, 10) : void 0
                }, c.getPenaltyN1 = function(e) {
                    for (var t = e.size, n = 0, r = 0, a = 0, o = null, i = null, c = 0; c < t; c++) {
                        o = i = null;
                        for (var u = r = a = 0; u < t; u++) {
                            var l = e.get(c, u);
                            l === o ? r++ : (5 <= r && (n += s + (r - 5)), o = l, r = 1), (l = e.get(u, c)) === i ? a++ : (5 <= a && (n += s + (a - 5)), i = l, a = 1)
                        }
                        5 <= r && (n += s + (r - 5)), 5 <= a && (n += s + (a - 5))
                    }
                    return n
                }, c.getPenaltyN2 = function(e) {
                    for (var t = e.size, n = 0, r = 0; r < t - 1; r++)
                        for (var a = 0; a < t - 1; a++) {
                            var o = e.get(r, a) + e.get(r, a + 1) + e.get(r + 1, a) + e.get(r + 1, a + 1);
                            4 !== o && 0 !== o || n++
                        }
                    return n * i
                }, c.getPenaltyN3 = function(e) {
                    for (var t = e.size, n = 0, r = 0, a = 0, o = 0; o < t; o++)
                        for (var i = r = a = 0; i < t; i++) r = r << 1 & 2047 | e.get(o, i), 10 <= i && (1488 === r || 93 === r) && n++, a = a << 1 & 2047 | e.get(i, o), 10 <= i && (1488 === a || 93 === a) && n++;
                    return n * u
                }, c.getPenaltyN4 = function(e) {
                    for (var t = 0, n = e.data.length, r = 0; r < n; r++) t += e.data[r];
                    return Math.abs(Math.ceil(100 * t / n / 5) - 10) * a
                }, c.applyMask = function(e, t) {
                    for (var n = t.size, r = 0; r < n; r++)
                        for (var a = 0; a < n; a++) t.isReserved(a, r) || t.xor(a, r, function(e, t, n) {
                            switch (e) {
                                case c.Patterns.PATTERN000:
                                    return (t + n) % 2 == 0;
                                case c.Patterns.PATTERN001:
                                    return t % 2 == 0;
                                case c.Patterns.PATTERN010:
                                    return n % 3 == 0;
                                case c.Patterns.PATTERN011:
                                    return (t + n) % 3 == 0;
                                case c.Patterns.PATTERN100:
                                    return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
                                case c.Patterns.PATTERN101:
                                    return t * n % 2 + t * n % 3 == 0;
                                case c.Patterns.PATTERN110:
                                    return (t * n % 2 + t * n % 3) % 2 == 0;
                                case c.Patterns.PATTERN111:
                                    return (t * n % 3 + (t + n) % 2) % 2 == 0;
                                default:
                                    throw new Error("bad maskPattern:" + e)
                            }
                        }(e, a, r))
                }, c.getBestMask = function(e, t) {
                    for (var n = Object.keys(c.Patterns).length, r = 0, a = 1 / 0, o = 0; o < n; o++) {
                        t(o), c.applyMask(o, e);
                        var i = c.getPenaltyN1(e) + c.getPenaltyN2(e) + c.getPenaltyN3(e) + c.getPenaltyN4(e);
                        c.applyMask(o, e), i < a && (a = i, r = o)
                    }
                    return r
                }
            },
            145: function(e, n, t) {
                var r = t(893),
                    a = t(795);
                n.NUMERIC = {
                    id: "Numeric",
                    bit: 1,
                    ccBits: [10, 12, 14]
                }, n.ALPHANUMERIC = {
                    id: "Alphanumeric",
                    bit: 2,
                    ccBits: [9, 11, 13]
                }, n.BYTE = {
                    id: "Byte",
                    bit: 4,
                    ccBits: [8, 16, 16]
                }, n.KANJI = {
                    id: "Kanji",
                    bit: 8,
                    ccBits: [8, 10, 12]
                }, n.MIXED = {
                    bit: -1
                }, n.getCharCountIndicator = function(e, t) {
                    if (!e.ccBits) throw new Error("Invalid mode: " + e);
                    if (!r.isValid(t)) throw new Error("Invalid version: " + t);
                    return 1 <= t && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
                }, n.getBestModeForData = function(e) {
                    return a.testNumeric(e) ? n.NUMERIC : a.testAlphanumeric(e) ? n.ALPHANUMERIC : a.testKanji(e) ? n.KANJI : n.BYTE
                }, n.toString = function(e) {
                    if (e && e.id) return e.id;
                    throw new Error("Invalid mode")
                }, n.isValid = function(e) {
                    return e && e.bit && e.ccBits
                }, n.from = function(e, t) {
                    if (n.isValid(e)) return e;
                    try {
                        return function(e) {
                            if ("string" != typeof e) throw new Error("Param is not a string");
                            switch (e.toLowerCase()) {
                                case "numeric":
                                    return n.NUMERIC;
                                case "alphanumeric":
                                    return n.ALPHANUMERIC;
                                case "kanji":
                                    return n.KANJI;
                                case "byte":
                                    return n.BYTE;
                                default:
                                    throw new Error("Unknown mode: " + e)
                            }
                        }(e)
                    } catch (e) {
                        return t
                    }
                }
            },
            808: function(e, t, n) {
                var r = n(145);

                function a(e) {
                    this.mode = r.NUMERIC, this.data = e.toString()
                }
                a.getBitsLength = function(e) {
                    return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
                }, a.prototype.getLength = function() {
                    return this.data.length
                }, a.prototype.getBitsLength = function() {
                    return a.getBitsLength(this.data.length)
                }, a.prototype.write = function(e) {
                    for (var t, n, r = 0; r + 3 <= this.data.length; r += 3) t = this.data.substr(r, 3), n = parseInt(t, 10), e.put(n, 10);
                    var a = this.data.length - r;
                    0 < a && (t = this.data.substr(r), n = parseInt(t, 10), e.put(n, 3 * a + 1))
                }, e.exports = a
            },
            4: function(e, r, t) {
                var i = t(666);
                r.mul = function(e, t) {
                    for (var n = new Uint8Array(e.length + t.length - 1), r = 0; r < e.length; r++)
                        for (var a = 0; a < t.length; a++) n[r + a] ^= i.mul(e[r], t[a]);
                    return n
                }, r.mod = function(e, t) {
                    for (var n = new Uint8Array(e); 0 <= n.length - t.length;) {
                        for (var r = n[0], a = 0; a < t.length; a++) n[a] ^= i.mul(t[a], r);
                        for (var o = 0; o < n.length && 0 === n[o];) o++;
                        n = n.slice(o)
                    }
                    return n
                }, r.generateECPolynomial = function(e) {
                    for (var t = new Uint8Array([1]), n = 0; n < e; n++) t = r.mul(t, new Uint8Array([1, i.exp(n)]));
                    return t
                }
            },
            496: function(e, t, n) {
                var S = n(701),
                    o = n(308),
                    i = n(330),
                    c = n(345),
                    l = n(498),
                    s = n(305),
                    f = n(29),
                    C = n(185),
                    A = n(181),
                    d = n(184),
                    u = n(826),
                    p = n(145),
                    m = n(144);

                function h(e, t, n) {
                    for (var r, a = e.size, o = u.getEncodedBits(t, n), i = 0; i < 15; i++) r = 1 == (o >> i & 1), i < 6 ? e.set(i, 8, r, !0) : i < 8 ? e.set(i + 1, 8, r, !0) : e.set(a - 15 + i, 8, r, !0), i < 8 ? e.set(8, a - i - 1, r, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, r, !0) : e.set(8, 15 - i - 1, r, !0);
                    e.set(a - 8, 8, 1, !0)
                }

                function v(t, e, n) {
                    var r = new i;
                    n.forEach(function(e) {
                        r.put(e.mode.bit, 4), r.put(e.getLength(), p.getCharCountIndicator(e.mode, t)), e.write(r)
                    });
                    n = 8 * (S.getSymbolTotalCodewords(t) - C.getTotalCodewordsCount(t, e));
                    for (r.getLengthInBits() + 4 <= n && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(0);
                    for (var a = (n - r.getLengthInBits()) / 8, o = 0; o < a; o++) r.put(o % 2 ? 17 : 236, 8);
                    return function(e, t, n) {
                        for (var r = S.getSymbolTotalCodewords(t), a = C.getTotalCodewordsCount(t, n), a = r - a, o = C.getBlocksCount(t, n), i = o - r % o, n = Math.floor(r / o), c = Math.floor(a / o), u = c + 1, l = n - c, s = new A(l), f = 0, d = new Array(o), p = new Array(o), m = 0, h = new Uint8Array(e.buffer), v = 0; v < o; v++) {
                            var g = v < i ? c : u;
                            d[v] = h.slice(f, f + g), p[v] = s.encode(d[v]), f += g, m = Math.max(m, g)
                        }
                        var y, b, E = new Uint8Array(r),
                            w = 0;
                        for (y = 0; y < m; y++)
                            for (b = 0; b < o; b++) y < d[b].length && (E[w++] = d[b][y]);
                        for (y = 0; y < l; y++)
                            for (b = 0; b < o; b++) E[w++] = p[b][y];
                        return E
                    }(r, t, e)
                }

                function g(e, u, t, n) {
                    var r;
                    if (Array.isArray(e)) r = m.fromArray(e);
                    else {
                        if ("string" != typeof e) throw new Error("Invalid data");
                        var a, o = u;
                        o || (a = m.rawSplit(e), o = d.getBestVersionForData(a, t)), r = m.fromString(e, o || 40)
                    }
                    e = d.getBestVersionForData(r, t);
                    if (!e) throw new Error("The amount of data is too big to be stored in a QR Code");
                    if (u) {
                        if (u < e) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + e + ".\n")
                    } else u = e;
                    o = v(u, t, r), e = S.getSymbolSize(u), e = new c(e);
                    return function(e) {
                            for (var t = e.size, n = s.getPositions(u), r = 0; r < n.length; r++)
                                for (var a = n[r][0], o = n[r][1], i = -1; i <= 7; i++)
                                    if (!(a + i <= -1 || t <= a + i))
                                        for (var c = -1; c <= 7; c++) o + c <= -1 || t <= o + c || (0 <= i && i <= 6 && (0 === c || 6 === c) || 0 <= c && c <= 6 && (0 === i || 6 === i) || 2 <= i && i <= 4 && 2 <= c && c <= 4 ? e.set(a + i, o + c, !0, !0) : e.set(a + i, o + c, !1, !0))
                        }(e),
                        function(e) {
                            for (var t = e.size, n = 8; n < t - 8; n++) {
                                var r = n % 2 == 0;
                                e.set(n, 6, r, !0), e.set(6, n, r, !0)
                            }
                        }(e),
                        function(e) {
                            for (var t = l.getPositions(u), n = 0; n < t.length; n++)
                                for (var r = t[n][0], a = t[n][1], o = -2; o <= 2; o++)
                                    for (var i = -2; i <= 2; i++) - 2 === o || 2 === o || -2 === i || 2 === i || 0 === o && 0 === i ? e.set(r + o, a + i, !0, !0) : e.set(r + o, a + i, !1, !0)
                        }(e), h(e, t, 0), 7 <= u && function(e) {
                            for (var t, n, r, a = e.size, o = d.getEncodedBits(u), i = 0; i < 18; i++) t = Math.floor(i / 3), n = i % 3 + a - 8 - 3, r = 1 == (o >> i & 1), e.set(t, n, r, !0), e.set(n, t, r, !0)
                        }(e),
                        function(e, t) {
                            for (var n = e.size, r = -1, a = n - 1, o = 7, i = 0, c = n - 1; 0 < c; c -= 2)
                                for (6 === c && c--;;) {
                                    for (var u, l = 0; l < 2; l++) e.isReserved(a, c - l) || (u = !1, i < t.length && (u = 1 == (t[i] >>> o & 1)), e.set(a, c - l, u), -1 === --o && (i++, o = 7));
                                    if ((a += r) < 0 || n <= a) {
                                        a -= r, r = -r;
                                        break
                                    }
                                }
                        }(e, o), isNaN(n) && (n = f.getBestMask(e, h.bind(null, e, t))), f.applyMask(n, e), h(e, t, n), {
                            modules: e,
                            version: u,
                            errorCorrectionLevel: t,
                            maskPattern: n,
                            segments: r
                        }
                }
                t.create = function(e, t) {
                    if (void 0 === e || "" === e) throw new Error("No input text");
                    var n, r, a = o.M;
                    return void 0 !== t && (a = o.from(t.errorCorrectionLevel, o.M), n = d.from(t.version), r = f.from(t.maskPattern), t.toSJISFunc && S.setToSJISFunction(t.toSJISFunc)), g(e, n, a, r)
                }
            },
            181: function(e, t, n) {
                var r = n(4);

                function a(e) {
                    this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
                }
                a.prototype.initialize = function(e) {
                    this.degree = e, this.genPoly = r.generateECPolynomial(this.degree)
                }, a.prototype.encode = function(e) {
                    if (!this.genPoly) throw new Error("Encoder not initialized");
                    var t = new Uint8Array(e.length + this.degree);
                    t.set(e);
                    var n = r.mod(t, this.genPoly),
                        e = this.degree - n.length;
                    if (0 < e) {
                        t = new Uint8Array(this.degree);
                        return t.set(n, e), t
                    }
                    return n
                }, e.exports = a
            },
            795: function(e, t) {
                var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
                    r = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
                t.KANJI = new RegExp(n, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(r, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
                var a = new RegExp("^" + n + "$"),
                    o = new RegExp("^[0-9]+$"),
                    i = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
                t.testKanji = function(e) {
                    return a.test(e)
                }, t.testNumeric = function(e) {
                    return o.test(e)
                }, t.testAlphanumeric = function(e) {
                    return i.test(e)
                }
            },
            144: function(e, i, t) {
                var m = t(145),
                    r = t(808),
                    a = t(734),
                    o = t(557),
                    c = t(927),
                    u = t(795),
                    l = t(701),
                    s = t(84);

                function f(e) {
                    return unescape(encodeURIComponent(e)).length
                }

                function d(e, t, n) {
                    for (var r, a = []; null !== (r = e.exec(n));) a.push({
                        data: r[0],
                        index: r.index,
                        mode: t,
                        length: r[0].length
                    });
                    return a
                }

                function p(e) {
                    var t, n = d(u.NUMERIC, m.NUMERIC, e),
                        r = d(u.ALPHANUMERIC, m.ALPHANUMERIC, e),
                        e = l.isKanjiModeEnabled() ? (t = d(u.BYTE, m.BYTE, e), d(u.KANJI, m.KANJI, e)) : (t = d(u.BYTE_KANJI, m.BYTE, e), []);
                    return n.concat(r, t, e).sort(function(e, t) {
                        return e.index - t.index
                    }).map(function(e) {
                        return {
                            data: e.data,
                            mode: e.mode,
                            length: e.length
                        }
                    })
                }

                function h(e, t) {
                    switch (t) {
                        case m.NUMERIC:
                            return r.getBitsLength(e);
                        case m.ALPHANUMERIC:
                            return a.getBitsLength(e);
                        case m.KANJI:
                            return c.getBitsLength(e);
                        case m.BYTE:
                            return o.getBitsLength(e)
                    }
                }

                function n(e, t) {
                    var n = m.getBestModeForData(e),
                        t = m.from(t, n);
                    if (t !== m.BYTE && t.bit < n.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + m.toString(t) + ".\n Suggested mode is: " + m.toString(n));
                    switch (t !== m.KANJI || l.isKanjiModeEnabled() || (t = m.BYTE), t) {
                        case m.NUMERIC:
                            return new r(e);
                        case m.ALPHANUMERIC:
                            return new a(e);
                        case m.KANJI:
                            return new c(e);
                        case m.BYTE:
                            return new o(e)
                    }
                }
                i.fromArray = function(e) {
                    return e.reduce(function(e, t) {
                        return "string" == typeof t ? e.push(n(t, null)) : t.data && e.push(n(t.data, t.mode)), e
                    }, [])
                }, i.fromString = function(e, t) {
                    for (var n = function(e, t) {
                            for (var n = {}, r = {
                                    start: {}
                                }, a = ["start"], o = 0; o < e.length; o++) {
                                for (var i = e[o], c = [], u = 0; u < i.length; u++) {
                                    var l = i[u],
                                        s = "" + o + u;
                                    c.push(s), n[s] = {
                                        node: l,
                                        lastCount: 0
                                    }, r[s] = {};
                                    for (var f = 0; f < a.length; f++) {
                                        var d = a[f];
                                        n[d] && n[d].node.mode === l.mode ? (r[d][s] = h(n[d].lastCount + l.length, l.mode) - h(n[d].lastCount, l.mode), n[d].lastCount += l.length) : (n[d] && (n[d].lastCount = l.length), r[d][s] = h(l.length, l.mode) + 4 + m.getCharCountIndicator(l.mode, t))
                                    }
                                }
                                a = c
                            }
                            for (var p = 0; p < a.length; p++) r[a[p]].end = 0;
                            return {
                                map: r,
                                table: n
                            }
                        }(function(e) {
                            for (var t = [], n = 0; n < e.length; n++) {
                                var r = e[n];
                                switch (r.mode) {
                                    case m.NUMERIC:
                                        t.push([r, {
                                            data: r.data,
                                            mode: m.ALPHANUMERIC,
                                            length: r.length
                                        }, {
                                            data: r.data,
                                            mode: m.BYTE,
                                            length: r.length
                                        }]);
                                        break;
                                    case m.ALPHANUMERIC:
                                        t.push([r, {
                                            data: r.data,
                                            mode: m.BYTE,
                                            length: r.length
                                        }]);
                                        break;
                                    case m.KANJI:
                                        t.push([r, {
                                            data: r.data,
                                            mode: m.BYTE,
                                            length: f(r.data)
                                        }]);
                                        break;
                                    case m.BYTE:
                                        t.push([{
                                            data: r.data,
                                            mode: m.BYTE,
                                            length: f(r.data)
                                        }])
                                }
                            }
                            return t
                        }(p(e, l.isKanjiModeEnabled())), t), r = s.find_path(n.map, "start", "end"), a = [], o = 1; o < r.length - 1; o++) a.push(n.table[r[o]].node);
                    return i.fromArray(a.reduce(function(e, t) {
                        var n = 0 <= e.length - 1 ? e[e.length - 1] : null;
                        return n && n.mode === t.mode ? e[e.length - 1].data += t.data : e.push(t), e
                    }, []))
                }, i.rawSplit = function(e) {
                    return i.fromArray(p(e, l.isKanjiModeEnabled()))
                }
            },
            701: function(e, t) {
                var n, r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
                t.getSymbolSize = function(e) {
                    if (!e) throw new Error('"version" cannot be null or undefined');
                    if (e < 1 || 40 < e) throw new Error('"version" should be in range from 1 to 40');
                    return 4 * e + 17
                }, t.getSymbolTotalCodewords = function(e) {
                    return r[e]
                }, t.getBCHDigit = function(e) {
                    for (var t = 0; 0 !== e;) t++, e >>>= 1;
                    return t
                }, t.setToSJISFunction = function(e) {
                    if ("function" != typeof e) throw new Error('"toSJISFunc" is not a valid function.');
                    n = e
                }, t.isKanjiModeEnabled = function() {
                    return void 0 !== n
                }, t.toSJIS = function(e) {
                    return n(e)
                }
            },
            893: function(e, t) {
                t.isValid = function(e) {
                    return !isNaN(e) && 1 <= e && e <= 40
                }
            },
            184: function(e, a, t) {
                var o = t(701),
                    i = t(185),
                    r = t(308),
                    c = t(145),
                    u = t(893),
                    n = o.getBCHDigit(7973);

                function l(e, t) {
                    return c.getCharCountIndicator(e, t) + 4
                }

                function s(e, t) {
                    for (var n = 1; n <= 40; n++)
                        if (function(e, n) {
                                var r = 0;
                                return e.forEach(function(e) {
                                    var t = l(e.mode, n);
                                    r += t + e.getBitsLength()
                                }), r
                            }(e, n) <= a.getCapacity(n, t, c.MIXED)) return n
                }
                a.from = function(e, t) {
                    return u.isValid(e) ? parseInt(e, 10) : t
                }, a.getCapacity = function(e, t, n) {
                    if (!u.isValid(e)) throw new Error("Invalid QR Code version");
                    void 0 === n && (n = c.BYTE);
                    t = 8 * (o.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, t));
                    if (n === c.MIXED) return t;
                    var r = t - l(n, e);
                    switch (n) {
                        case c.NUMERIC:
                            return Math.floor(r / 10 * 3);
                        case c.ALPHANUMERIC:
                            return Math.floor(r / 11 * 2);
                        case c.KANJI:
                            return Math.floor(r / 13);
                        case c.BYTE:
                        default:
                            return Math.floor(r / 8)
                    }
                }, a.getBestVersionForData = function(e, t) {
                    var n, t = r.from(t, r.M);
                    if (Array.isArray(e)) {
                        if (1 < e.length) return s(e, t);
                        if (0 === e.length) return 1;
                        n = e[0]
                    } else n = e;
                    return function(e, t, n) {
                        for (var r = 1; r <= 40; r++)
                            if (t <= a.getCapacity(r, n, e)) return r
                    }(n.mode, n.getLength(), t)
                }, a.getEncodedBits = function(e) {
                    if (!u.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
                    for (var t = e << 12; 0 <= o.getBCHDigit(t) - n;) t ^= 7973 << o.getBCHDigit(t) - n;
                    return e << 12 | t
                }
            },
            154: function(e, r, t) {
                var i = t(793);
                r.render = function(e, t, n) {
                    var r = n,
                        a = t;
                    void 0 !== r || t && t.getContext || (r = t, t = void 0), t || (a = function() {
                        try {
                            return document.createElement("canvas")
                        } catch (e) {
                            throw new Error("You need to specify a canvas element")
                        }
                    }()), r = i.getOptions(r);
                    var o = i.getImageWidth(e.modules.size, r),
                        n = a.getContext("2d"),
                        t = n.createImageData(o, o);
                    return i.qrToImageData(t.data, e, r), r = a, o = o, n.clearRect(0, 0, r.width, r.height), r.style || (r.style = {}), r.height = o, r.width = o, r.style.height = o + "px", r.style.width = o + "px", n.putImageData(t, 0, 0), a
                }, r.renderToDataURL = function(e, t, n) {
                    void 0 !== n || t && t.getContext || (n = t, t = void 0), n = n || {};
                    e = r.render(e, t, n), t = n.type || "image/png", n = n.rendererOpts || {};
                    return e.toDataURL(t, n.quality)
                }
            },
            195: function(e, t, n) {
                var i = n(793);

                function c(e, t) {
                    var n = e.a / 255,
                        e = t + '="' + e.hex + '"';
                    return n < 1 ? e + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : e
                }

                function s(e, t, n) {
                    t = e + t;
                    return void 0 !== n && (t += " " + n), t
                }
                t.render = function(e, t, n) {
                    var r = i.getOptions(t),
                        a = e.modules.size,
                        o = e.modules.data,
                        t = a + 2 * r.margin,
                        e = r.color.light.a ? "<path " + c(r.color.light, "fill") + ' d="M0 0h' + t + "v" + t + 'H0z"/>' : "",
                        a = "<path " + c(r.color.dark, "stroke") + ' d="' + function(e, t, n) {
                            for (var r = "", a = 0, o = !1, i = 0, c = 0; c < e.length; c++) {
                                var u = Math.floor(c % t),
                                    l = Math.floor(c / t);
                                u || o || (o = !0), e[c] ? (i++, 0 < c && 0 < u && e[c - 1] || (r += o ? s("M", u + n, .5 + l + n) : s("m", a, 0), a = 0, o = !1), u + 1 < t && e[c + 1] || (r += s("h", i), i = 0)) : a++
                            }
                            return r
                        }(o, a, r.margin) + '"/>',
                        t = 'viewBox="0 0 ' + t + " " + t + '"',
                        a = '<svg xmlns="http://www.w3.org/2000/svg" ' + (r.width ? 'width="' + r.width + '" height="' + r.width + '" ' : "") + t + ' shape-rendering="crispEdges">' + e + a + "</svg>\n";
                    return "function" == typeof n && n(null, a), a
                }
            },
            793: function(e, p) {
                function a(e) {
                    if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw new Error("Color should be defined as hex string");
                    var t = e.slice().replace("#", "").split("");
                    if (t.length < 3 || 5 === t.length || 8 < t.length) throw new Error("Invalid hex color: " + e);
                    3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map(function(e) {
                        return [e, e]
                    }))), 6 === t.length && t.push("F", "F");
                    e = parseInt(t.join(""), 16);
                    return {
                        r: e >> 24 & 255,
                        g: e >> 16 & 255,
                        b: e >> 8 & 255,
                        a: 255 & e,
                        hex: "#" + t.slice(0, 6).join("")
                    }
                }
                p.getOptions = function(e) {
                    (e = e || {}).color || (e.color = {});
                    var t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
                        n = e.width && 21 <= e.width ? e.width : void 0,
                        r = e.scale || 4;
                    return {
                        width: n,
                        scale: n ? 4 : r,
                        margin: t,
                        color: {
                            dark: a(e.color.dark || "#000000ff"),
                            light: a(e.color.light || "#ffffffff")
                        },
                        type: e.type,
                        rendererOpts: e.rendererOpts || {}
                    }
                }, p.getScale = function(e, t) {
                    return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
                }, p.getImageWidth = function(e, t) {
                    var n = p.getScale(e, t);
                    return Math.floor((e + 2 * t.margin) * n)
                }, p.qrToImageData = function(e, t, n) {
                    for (var r = t.modules.size, a = t.modules.data, o = p.getScale(r, n), i = Math.floor((r + 2 * n.margin) * o), c = n.margin * o, u = [n.color.light, n.color.dark], l = 0; l < i; l++)
                        for (var s = 0; s < i; s++) {
                            var f = 4 * (l * i + s),
                                d = n.color.light;
                            c <= l && c <= s && l < i - c && s < i - c && (d = u[a[Math.floor((l - c) / o) * r + Math.floor((s - c) / o)] ? 1 : 0]), e[f++] = d.r, e[f++] = d.g, e[f++] = d.b, e[f] = d.a
                        }
                }
            },
            870: function(e, t) {
                var n;
                /*!
                	Copyright (c) 2018 Jed Watson.
                	Licensed under the MIT License (MIT), see
                	http://jedwatson.github.io/classnames
                */
                ! function() {
                    "use strict";
                    var i = {}.hasOwnProperty;

                    function c() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            if (n) {
                                var r, a = typeof n;
                                if ("string" == a || "number" == a) e.push(n);
                                else if (Array.isArray(n)) !n.length || (r = c.apply(null, n)) && e.push(r);
                                else if ("object" == a)
                                    if (n.toString === Object.prototype.toString || n.toString.toString().includes("[native code]"))
                                        for (var o in n) i.call(n, o) && n[o] && e.push(o);
                                    else e.push(n.toString())
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (c.default = c, e.exports = c) : void 0 === (n = function() {
                        return c
                    }.apply(t, [])) || (e.exports = n)
                }()
            },
            594: function(e) {
                "use strict";
                e.exports = React
            }
        },
        r = {};

    function Zr(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        t = r[e] = {
            exports: {}
        };
        return n[e](t, t.exports, Zr), t.exports
    }
    Zr.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return Zr.d(t, {
                a: t
            }), t
        }, Zr.d = function(e, t) {
            for (var n in t) Zr.o(t, n) && !Zr.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, Zr.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), Zr.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var I = Zr(594),
                N = Zr.n(I),
                a = Roblox,
                e = Zr.n(a),
                t = ReactDOM,
                i = CoreUtilities,
                n = "access-management-upsell-container",
                r = ReactUtilities,
                o = Zr(676),
                c = Zr(390),
                u = function(e) {
                    e()
                },
                l = function() {
                    return u
                },
                s = Symbol.for("react-redux-context"),
                f = "undefined" != typeof globalThis ? globalThis : {};

            function d() {
                if (!I.createContext) return {};
                var e = null != (t = f[s]) ? t : f[s] = new Map,
                    t = e.get(I.createContext);
                return t || (t = I.createContext(null), e.set(I.createContext, t)), t
            }
            var p = d();

            function m(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : p;
                return function() {
                    return (0, I.useContext)(t)
                }
            }
            var h = m();

            function v(e, t) {
                return e === t
            }
            var g = function() {
                throw new Error("uSES not initialized!")
            };

            function y(e) {
                var e = 0 < arguments.length && void 0 !== e ? e : p,
                    s = e === p ? h : m(e);
                return function(t, e) {
                    var n = 1 < arguments.length && void 0 !== e ? e : {},
                        r = "function" == typeof n ? {
                            equalityFn: n
                        } : n,
                        a = r.equalityFn,
                        o = void 0 === a ? v : a,
                        i = r.stabilityCheck,
                        c = void 0 === i ? void 0 : i,
                        u = r.noopCheck;
                    var l = s(),
                        e = l.store,
                        n = l.subscription,
                        a = l.getServerState,
                        i = l.stabilityCheck,
                        c = (l.noopCheck, (0, I.useRef)(!0), (0, I.useCallback)((r = {}, u = t.name, l = function(e) {
                            return t(e)
                        }, u in r ? Object.defineProperty(r, u, {
                            value: l,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[u] = l, r)[t.name], [t, i, c])),
                        o = g(n.addNestedSub, e.getState, a || e.getState, c, o);
                    return (0, I.useDebugValue)(o), o
                }
            }
            var b = y();
            Zr(56), Zr(625);
            var E = {
                notify: function() {},
                get: function() {
                    return []
                }
            };

            function w(t, n) {
                var o, i = E;

                function c() {
                    e.onStateChange && e.onStateChange()
                }

                function r() {
                    var e, r, a;
                    o || (o = n ? n.addNestedSub(c) : t.subscribe(c), e = l(), a = r = null, i = {
                        clear: function() {
                            a = r = null
                        },
                        notify: function() {
                            e(function() {
                                for (var e = r; e;) e.callback(), e = e.next
                            })
                        },
                        get: function() {
                            for (var e = [], t = r; t;) e.push(t), t = t.next;
                            return e
                        },
                        subscribe: function(e) {
                            var t = !0,
                                n = a = {
                                    callback: e,
                                    next: null,
                                    prev: a
                                };
                            return n.prev ? n.prev.next = n : r = n,
                                function() {
                                    t && null !== r && (t = !1, n.next ? n.next.prev = n.prev : a = n.prev, n.prev ? n.prev.next = n.next : r = n.next)
                                }
                        }
                    })
                }
                var e = {
                    addNestedSub: function(e) {
                        return r(), i.subscribe(e)
                    },
                    notifyNestedSubs: function() {
                        i.notify()
                    },
                    handleChangeWrapper: c,
                    isSubscribed: function() {
                        return Boolean(o)
                    },
                    trySubscribe: r,
                    tryUnsubscribe: function() {
                        o && (o(), o = void 0, i.clear(), i = E)
                    },
                    getListeners: function() {
                        return i
                    }
                };
                return e
            }
            var S = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement) ? I.useLayoutEffect : I.useEffect;

            function C(e) {
                var t = e.store,
                    n = e.context,
                    r = e.children,
                    a = e.serverState,
                    o = e.stabilityCheck,
                    i = void 0 === o ? "once" : o,
                    c = void 0 === (e = e.noopCheck) ? "once" : e,
                    u = I.useMemo(function() {
                        var e = w(t);
                        return {
                            store: t,
                            subscription: e,
                            getServerState: a ? function() {
                                return a
                            } : void 0,
                            stabilityCheck: i,
                            noopCheck: c
                        }
                    }, [t, a, i, c]),
                    l = I.useMemo(function() {
                        return t.getState()
                    }, [t]);
                return S(function() {
                    var e = u.subscription;
                    return e.onStateChange = e.notifyNestedSubs, e.trySubscribe(), l !== t.getState() && e.notifyNestedSubs(),
                        function() {
                            e.tryUnsubscribe(), e.onStateChange = void 0
                        }
                }, [u, l]), n = n || p, I.createElement(n.Provider, {
                    value: u
                }, r)
            }

            function A(e) {
                var e = 0 < arguments.length && void 0 !== e ? e : p,
                    t = e === p ? h : m(e);
                return function() {
                    return t().store
                }
            }
            var P = A();

            function x(e) {
                var e = 0 < arguments.length && void 0 !== e ? e : p,
                    t = e === p ? P : A(e);
                return function() {
                    return t().dispatch
                }
            }
            var k, T = x();
            k = c.useSyncExternalStoreWithSelector, g = k, o.useSyncExternalStore, k = t.unstable_batchedUpdates, u = k;
            var M = ReactStyleGuide;

            function R(e) {
                for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(e) {
                    return "'" + e + "'"
                }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
            }

            function L(e) {
                return e && e[ye]
            }

            function U(e) {
                var t;
                return e && (function(e) {
                    if (e && "object" == typeof e) {
                        e = Object.getPrototypeOf(e);
                        if (null === e) return 1;
                        e = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
                        return e === Object || "function" == typeof e && Function.toString.call(e) === be
                    }
                }(e) || Array.isArray(e) || e[ge] || null !== (t = e.constructor) && void 0 !== t && t[ge] || q(e) || _(e))
            }

            function D(n, r, t) {
                void 0 === t && (t = !1), 0 === V(n) ? (t ? Object.keys : Ee)(n).forEach(function(e) {
                    t && "symbol" == typeof e || r(e, n[e], n)
                }) : n.forEach(function(e, t) {
                    return r(t, e, n)
                })
            }

            function V(e) {
                var t = e[ye];
                return t ? 3 < t.i ? t.i - 4 : t.i : Array.isArray(e) ? 1 : q(e) ? 2 : _(e) ? 3 : 0
            }

            function B(e, t) {
                return 2 === V(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
            }

            function O(e, t) {
                return 2 === V(e) ? e.get(t) : e[t]
            }

            function F(e, t, n) {
                var r = V(e);
                2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n
            }

            function j(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
            }

            function q(e) {
                return pe && e instanceof Map
            }

            function _(e) {
                return me && e instanceof Set
            }

            function H(e) {
                return e.o || e.t
            }

            function z(e) {
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                var t = we(e);
                delete t[ye];
                for (var n = Ee(t), r = 0; r < n.length; r++) {
                    var a = n[r],
                        o = t[a];
                    !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (t[a] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: o.enumerable,
                        value: e[a]
                    })
                }
                return Object.create(Object.getPrototypeOf(e), t)
            }

            function G(e, t) {
                return void 0 === t && (t = !1), W(e) || L(e) || !U(e) || (1 < V(e) && (e.set = e.add = e.clear = e.delete = K), Object.freeze(e), t && D(e, function(e, t) {
                    return G(t, !0)
                }, !0)), e
            }

            function K() {
                R(2)
            }

            function W(e) {
                return null == e || "object" != typeof e || Object.isFrozen(e)
            }

            function Y(e) {
                var t = Se[e];
                return t || R(18, e), t
            }

            function $(e, t) {
                Se[e] || (Se[e] = t)
            }

            function J(e, t) {
                t && (Y("Patches"), e.u = [], e.s = [], e.v = t)
            }

            function Q(e) {
                X(e), e.p.forEach(ee), e.p = null
            }

            function X(e) {
                e === de && (de = e.l)
            }

            function Z(e) {
                return de = {
                    p: [],
                    l: de,
                    h: e,
                    m: !0,
                    _: 0
                }
            }

            function ee(e) {
                e = e[ye];
                0 === e.i || 1 === e.i ? e.j() : e.g = !0
            }

            function te(e, t) {
                t._ = t.p.length;
                var n = t.p[0],
                    r = void 0 !== e && e !== n;
                return t.h.O || Y("ES5").S(t, e, r), r ? (n[ye].P && (Q(t), R(4)), U(e) && (e = ne(t, e), t.l || ae(t, e)), t.u && Y("Patches").M(n[ye].t, e, t.u, t.s)) : e = ne(t, n, []), Q(t), t.u && t.v(t.u, t.s), e !== ve ? e : void 0
            }

            function ne(n, r, a) {
                if (W(r)) return r;
                var o, e, i, c = r[ye];
                return c ? c.A !== n ? r : c.P ? (c.I || (c.I = !0, c.A._--, e = o = 4 === c.i || 5 === c.i ? c.o = z(c.k) : c.o, i = !1, 3 === c.i && (e = new Set(o), o.clear(), i = !0), D(e, function(e, t) {
                    return re(n, c, o, e, t, a, i)
                }), ae(n, o, !1), a && n.u && Y("Patches").N(c, a, n.u, n.s)), c.o) : (ae(n, c.t, !0), c.t) : (D(r, function(e, t) {
                    return re(n, c, r, e, t, a)
                }, !0), r)
            }

            function re(e, t, n, r, a, o, i) {
                if (L(a)) {
                    o = ne(e, a, o && t && 3 !== t.i && !B(t.R, r) ? o.concat(r) : void 0);
                    if (F(n, r, o), !L(o)) return;
                    e.m = !1
                } else i && n.add(a);
                U(a) && !W(a) && (!e.h.D && e._ < 1 || (ne(e, a), t && t.A.l || ae(e, a)))
            }

            function ae(e, t, n) {
                void 0 === n && (n = !1), !e.l && e.h.D && e.m && G(t, n)
            }

            function oe(e, t) {
                var n = e[ye];
                return (n ? H(n) : e)[t]
            }

            function ie(e, t) {
                if (t in e)
                    for (var n = Object.getPrototypeOf(e); n;) {
                        var r = Object.getOwnPropertyDescriptor(n, t);
                        if (r) return r;
                        n = Object.getPrototypeOf(n)
                    }
            }

            function ce(e) {
                e.P || (e.P = !0, e.l && ce(e.l))
            }

            function ue(e) {
                e.o || (e.o = z(e.t))
            }

            function le(e, t, n) {
                t = q(t) ? Y("MapSet").F(t, n) : _(t) ? Y("MapSet").T(t, n) : e.O ? function(e, t) {
                    var n = Array.isArray(e),
                        r = {
                            i: n ? 1 : 0,
                            A: t ? t.A : de,
                            P: !1,
                            I: !1,
                            R: {},
                            l: t,
                            t: e,
                            k: null,
                            o: null,
                            j: null,
                            C: !1
                        },
                        t = r,
                        e = Ce;
                    n && (t = [r], e = Ae);
                    t = Proxy.revocable(t, e), e = t.revoke, t = t.proxy;
                    return r.k = t, r.j = e, t
                }(t, n) : Y("ES5").J(t, n);
                return (n ? n.A : de).p.push(t), t
            }

            function se(e, t) {
                switch (t) {
                    case 2:
                        return new Map(e);
                    case 3:
                        return Array.from(e)
                }
                return z(e)
            }

            function fe() {
                function u(n, e) {
                    var t = o[n];
                    return t ? t.enumerable = e : o[n] = t = {
                        configurable: !0,
                        enumerable: e,
                        get: function() {
                            var e = this[ye];
                            return Ce.get(e, n)
                        },
                        set: function(e) {
                            var t = this[ye];
                            Ce.set(t, n, e)
                        }
                    }, t
                }

                function r(e) {
                    for (var t = e.length - 1; 0 <= t; t--) {
                        var n = e[t][ye];
                        if (!n.P) switch (n.i) {
                            case 5:
                                s(n) && ce(n);
                                break;
                            case 4:
                                a(n) && ce(n)
                        }
                    }
                }

                function a(e) {
                    for (var t = e.t, n = e.k, r = Ee(n), a = r.length - 1; 0 <= a; a--) {
                        var o = r[a];
                        if (o !== ye) {
                            var i = t[o];
                            if (void 0 === i && !B(t, o)) return !0;
                            var c = n[o],
                                o = c && c[ye];
                            if (o ? o.t !== i : !j(c, i)) return !0
                        }
                    }
                    e = !!t[ye];
                    return r.length !== Ee(t).length + (e ? 0 : 1)
                }

                function s(e) {
                    var t = e.k;
                    if (t.length !== e.t.length) return !0;
                    e = Object.getOwnPropertyDescriptor(t, t.length - 1);
                    if (e && !e.get) return !0;
                    for (var n = 0; n < t.length; n++)
                        if (!t.hasOwnProperty(n)) return !0;
                    return !1
                }
                var o = {};
                $("ES5", {
                    J: function(e, t) {
                        var n = Array.isArray(e),
                            r = function(e, t) {
                                if (e) {
                                    for (var n = Array(t.length), r = 0; r < t.length; r++) Object.defineProperty(n, "" + r, u(r, !0));
                                    return n
                                }
                                var a = we(t);
                                delete a[ye];
                                for (var o = Ee(a), i = 0; i < o.length; i++) {
                                    var c = o[i];
                                    a[c] = u(c, e || !!a[c].enumerable)
                                }
                                return Object.create(Object.getPrototypeOf(t), a)
                            }(n, e),
                            e = {
                                i: n ? 5 : 4,
                                A: t ? t.A : de,
                                P: !1,
                                I: !1,
                                R: {},
                                l: t,
                                t: e,
                                k: r,
                                o: null,
                                g: !1,
                                C: !1
                            };
                        return Object.defineProperty(r, ye, {
                            value: e,
                            writable: !0
                        }), r
                    },
                    S: function(e, t, n) {
                        n ? L(t) && t[ye].A === e && r(e.p) : (e.u && function t(e) {
                            if (e && "object" == typeof e) {
                                var n = e[ye];
                                if (n) {
                                    var r = n.t,
                                        a = n.k,
                                        o = n.R,
                                        e = n.i;
                                    if (4 === e) D(a, function(e) {
                                        e !== ye && (void 0 !== r[e] || B(r, e) ? o[e] || t(a[e]) : (o[e] = !0, ce(n)))
                                    }), D(r, function(e) {
                                        void 0 !== a[e] || B(a, e) || (o[e] = !1, ce(n))
                                    });
                                    else if (5 === e) {
                                        if (s(n) && (ce(n), o.length = !0), a.length < r.length)
                                            for (var i = a.length; i < r.length; i++) o[i] = !1;
                                        else
                                            for (var c = r.length; c < a.length; c++) o[c] = !0;
                                        for (var u = Math.min(a.length, r.length), l = 0; l < u; l++) a.hasOwnProperty(l) || (o[l] = !0), void 0 === o[l] && t(a[l])
                                    }
                                }
                            }
                        }(e.p[0]), r(e.p))
                    },
                    K: function(e) {
                        return (4 === e.i ? a : s)(e)
                    }
                })
            }
            var de, c = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
                pe = "undefined" != typeof Map,
                me = "undefined" != typeof Set,
                he = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
                ve = c ? Symbol.for("immer-nothing") : ((Le = {})["immer-nothing"] = !0, Le),
                ge = c ? Symbol.for("immer-draftable") : "__$immer_draftable",
                ye = c ? Symbol.for("immer-state") : "__$immer_state",
                be = "" + Object.prototype.constructor,
                Ee = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                } : Object.getOwnPropertyNames,
                we = Object.getOwnPropertyDescriptors || function(t) {
                    var n = {};
                    return Ee(t).forEach(function(e) {
                        n[e] = Object.getOwnPropertyDescriptor(t, e)
                    }), n
                },
                Se = {},
                Ce = {
                    get: function(e, t) {
                        if (t === ye) return e;
                        var n, r, a = H(e);
                        if (!B(a, t)) return n = e, (r = ie(a, t)) ? "value" in r ? r.value : null === (r = r.get) || void 0 === r ? void 0 : r.call(n.k) : void 0;
                        a = a[t];
                        return !e.I && U(a) && a === oe(e.t, t) ? (ue(e), e.o[t] = le(e.A.h, a, e)) : a
                    },
                    has: function(e, t) {
                        return t in H(e)
                    },
                    ownKeys: function(e) {
                        return Reflect.ownKeys(H(e))
                    },
                    set: function(e, t, n) {
                        var r = ie(H(e), t);
                        if (null != r && r.set) return r.set.call(e.k, n), !0;
                        if (!e.P) {
                            var a = oe(H(e), t),
                                r = null == a ? void 0 : a[ye];
                            if (r && r.t === n) return e.o[t] = n, !(e.R[t] = !1);
                            if (j(n, a) && (void 0 !== n || B(e.t, t))) return !0;
                            ue(e), ce(e)
                        }
                        return e.o[t] === n && (void 0 !== n || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0
                    },
                    deleteProperty: function(e, t) {
                        return void 0 !== oe(e.t, t) || t in e.t ? (e.R[t] = !1, ue(e), ce(e)) : delete e.R[t], e.o && delete e.o[t], !0
                    },
                    getOwnPropertyDescriptor: function(e, t) {
                        var n = H(e),
                            r = Reflect.getOwnPropertyDescriptor(n, t);
                        return r && {
                            writable: !0,
                            configurable: 1 !== e.i || "length" !== t,
                            enumerable: r.enumerable,
                            value: n[t]
                        }
                    },
                    defineProperty: function() {
                        R(11)
                    },
                    getPrototypeOf: function(e) {
                        return Object.getPrototypeOf(e.t)
                    },
                    setPrototypeOf: function() {
                        R(12)
                    }
                },
                Ae = {};

            function Pe(e) {
                var f = this;
                this.O = he, this.D = !0, this.produce = function(e, o, t) {
                    if ("function" == typeof e && "function" != typeof o) {
                        var i = o;
                        o = e;
                        var c = f;
                        return function(e) {
                            var t = this;
                            void 0 === e && (e = i);
                            for (var n = arguments.length, r = Array(1 < n ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                            return c.produce(e, function(e) {
                                return o.call.apply(o, [t, e].concat(r))
                            })
                        }
                    }
                    var n, r, a;
                    if ("function" != typeof o && R(6), void 0 !== t && "function" != typeof t && R(7), U(e)) {
                        var u = Z(f),
                            l = le(f, e, void 0),
                            s = !0;
                        try {
                            n = o(l), s = !1
                        } finally {
                            (s ? Q : X)(u)
                        }
                        return "undefined" != typeof Promise && n instanceof Promise ? n.then(function(e) {
                            return J(u, t), te(e, u)
                        }, function(e) {
                            throw Q(u), e
                        }) : (J(u, t), te(n, u))
                    }
                    if (!e || "object" != typeof e) return void 0 === (n = o(e)) && (n = e), n === ve && (n = void 0), f.D && G(n, !0), t && (r = [], a = [], Y("Patches").M(e, n, r, a), t(r, a)), n;
                    R(21, e)
                }, this.produceWithPatches = function(a, e) {
                    if ("function" == typeof a) return function(e) {
                        for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return f.produceWithPatches(e, function(e) {
                            return a.apply(void 0, [e].concat(n))
                        })
                    };
                    var n, r, e = f.produce(a, e, function(e, t) {
                        n = e, r = t
                    });
                    return "undefined" != typeof Promise && e instanceof Promise ? e.then(function(e) {
                        return [e, n, r]
                    }) : [e, n, r]
                }, "boolean" == typeof(null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies), "boolean" == typeof(null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
            }
            D(Ce, function(e, t) {
                Ae[e] = function() {
                    return arguments[0] = arguments[0][0], t.apply(this, arguments)
                }
            }), Ae.deleteProperty = function(e, t) {
                return Ae.set.call(this, e, t, void 0)
            }, Ae.set = function(e, t, n) {
                return Ce.set.call(this, e[0], t, n, e[0])
            }, c = (Le = new((o = Pe.prototype).createDraft = function(e) {
                U(e) || R(8), L(e) && (L(t = e) || R(22, t), e = function n(e) {
                    if (!U(e)) return e;
                    var r, a = e[ye],
                        t = V(e);
                    if (a) {
                        if (!a.P && (a.i < 4 || !Y("ES5").K(a))) return a.t;
                        a.I = !0, r = se(e, t), a.I = !1
                    } else r = se(e, t);
                    return D(r, function(e, t) {
                        a && O(a.t, e) === t || F(r, e, n(t))
                    }), 3 === t ? new Set(r) : r
                }(t));
                var t = Z(this),
                    e = le(this, e, void 0);
                return e[ye].C = !0, X(t), e
            }, o.finishDraft = function(e, t) {
                e = (e && e[ye]).A;
                return J(e, t), te(void 0, e)
            }, o.setAutoFreeze = function(e) {
                this.D = e
            }, o.setUseProxies = function(e) {
                e && !he && R(20), this.O = e
            }, o.applyPatches = function(e, t) {
                for (var n = t.length - 1; 0 <= n; n--) {
                    var r = t[n];
                    if (0 === r.path.length && "replace" === r.op) {
                        e = r.value;
                        break
                    }
                } - 1 < n && (t = t.slice(n + 1));
                var a = Y("Patches").$;
                return L(e) ? a(e, t) : this.produce(e, function(e) {
                    return a(e, t)
                })
            }, Pe)).produce, Le.produceWithPatches.bind(Le), Le.setAutoFreeze.bind(Le), Le.setUseProxies.bind(Le), Le.applyPatches.bind(Le), Le.createDraft.bind(Le), Le.finishDraft.bind(Le);
            var xe = c,
                ke = Redux,
                o = ReduxThunk,
                Te = Zr.n(o);

            function Ie(e) {
                return (Ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Ne(e, t, n) {
                return t in e ? Ve(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
            }

            function Me(e, t) {
                return Be(e, Oe(t))
            }
            var Re, Le = (Re = function(e, t) {
                    return (Re = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Re(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                Ue = function(n, r) {
                    var a, o, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                c.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && c.label < i[1]) {
                                                c.label = i[1], i = t;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(t);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, c)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                De = function(e, t) {
                    for (var n = 0, r = t.length, a = e.length; n < r; n++, a++) e[a] = t[n];
                    return e
                },
                Ve = Object.defineProperty,
                Be = Object.defineProperties,
                Oe = Object.getOwnPropertyDescriptors,
                Fe = Object.getOwnPropertySymbols,
                je = Object.prototype.hasOwnProperty,
                qe = Object.prototype.propertyIsEnumerable,
                _e = function(e, t) {
                    for (var n in t = t || {}) je.call(t, n) && Ne(e, n, t[n]);
                    if (Fe)
                        for (var r = 0, a = Fe(t); r < a.length; r++) {
                            n = a[r];
                            qe.call(t, n) && Ne(e, n, t[n])
                        }
                    return e
                },
                He = function(e, i, c) {
                    return new Promise(function(t, n) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }
                        var o = function(e) {
                            return e.done ? t(e.value) : Promise.resolve(e.value).then(r, a)
                        };
                        o((c = c.apply(e, i)).next())
                    })
                },
                ze = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
                    if (0 !== arguments.length) return "object" === Ie(arguments[0]) ? ke.compose : ke.compose.apply(null, arguments)
                };

            function Ge(e) {
                if ("object" !== Ie(e) || null === e) return !1;
                e = Object.getPrototypeOf(e);
                if (null === e) return !0;
                for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                return e === t
            }
            var Ke, We = (Ke = Array, Le(Ye, Ke), Object.defineProperty(Ye, Symbol.species, {
                get: function() {
                    return Ye
                },
                enumerable: !1,
                configurable: !0
            }), Ye.prototype.concat = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return Ke.prototype.concat.apply(this, e)
            }, Ye.prototype.prepend = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(1 === e.length && Array.isArray(e[0]) ? Ye.bind.apply(Ye, De([void 0], e[0].concat(this))) : Ye.bind.apply(Ye, De([void 0], e.concat(this))))
            }, Ye);

            function Ye() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = Ke.apply(this, e) || this;
                return Object.setPrototypeOf(n, Ye.prototype), n
            }
            var $e, Je = ($e = Array, Le(Qe, $e), Object.defineProperty(Qe, Symbol.species, {
                get: function() {
                    return Qe
                },
                enumerable: !1,
                configurable: !0
            }), Qe.prototype.concat = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return $e.prototype.concat.apply(this, e)
            }, Qe.prototype.prepend = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(1 === e.length && Array.isArray(e[0]) ? Qe.bind.apply(Qe, De([void 0], e[0].concat(this))) : Qe.bind.apply(Qe, De([void 0], e.concat(this))))
            }, Qe);

            function Qe() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = $e.apply(this, e) || this;
                return Object.setPrototypeOf(n, Qe.prototype), n
            }

            function Xe(e) {
                return U(e) ? xe(e, function() {}) : e
            }

            function Ze() {
                return function(e) {
                    void 0 === e && (e = {});
                    var t = e.thunk,
                        n = void 0 === t || t,
                        t = e.immutableCheck,
                        e = e.serializableCheck,
                        e = new We;
                    n && ("boolean" == typeof n ? e.push(Te()) : e.push(Te().withExtraArgument(n.extraArgument)));
                    0;
                    return e
                }
            }

            function et(r, a) {
                function e() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    if (a) {
                        var n = a.apply(void 0, e);
                        if (!n) throw new Error("prepareAction did not return an object");
                        return _e(_e({
                            type: r,
                            payload: n.payload
                        }, "meta" in n && {
                            meta: n.meta
                        }), "error" in n && {
                            error: n.error
                        })
                    }
                    return {
                        type: r,
                        payload: e[0]
                    }
                }
                return e.toString = function() {
                    return "" + r
                }, e.type = r, e.match = function(e) {
                    return e.type === r
                }, e
            }

            function tt(e) {
                var t, n = {},
                    r = [],
                    a = {
                        addCase: function(e, t) {
                            e = "string" == typeof e ? e : e.type;
                            if (e in n) throw new Error("addCase cannot be called with two reducers for the same action type");
                            return n[e] = t, a
                        },
                        addMatcher: function(e, t) {
                            return r.push({
                                matcher: e,
                                reducer: t
                            }), a
                        },
                        addDefaultCase: function(e) {
                            return t = e, a
                        }
                    };
                return e(a), [n, r, t]
            }

            function nt(r) {
                var o = r.name;
                if (!o) throw new Error("`name` is a required option for createSlice");
                var n, a = "function" == typeof r.initialState ? r.initialState : Xe(r.initialState),
                    i = r.reducers || {},
                    e = Object.keys(i),
                    c = {},
                    u = {},
                    l = {};

                function s() {
                    var e = "function" == typeof r.extraReducers ? tt(r.extraReducers) : [r.extraReducers],
                        t = e[0],
                        n = void 0 === t ? {} : t,
                        t = e[1],
                        o = void 0 === t ? [] : t,
                        e = e[2],
                        i = void 0 === e ? void 0 : e,
                        c = _e(_e({}, n), u);
                    return function(e, t, n, r) {
                        void 0 === n && (n = []);
                        var a, o, i = (r = "function" == typeof t ? tt(t) : [t, n, r])[0],
                            c = r[1],
                            u = r[2];

                        function l(e, r) {
                            void 0 === e && (e = o());
                            var t = De([i[r.type]], c.filter(function(e) {
                                return (0, e.matcher)(r)
                            }).map(function(e) {
                                return e.reducer
                            }));
                            return 0 === t.filter(function(e) {
                                return !!e
                            }).length && (t = [u]), t.reduce(function(e, t) {
                                if (t) {
                                    var n;
                                    if (L(e)) return void 0 === (n = t(e, r)) ? e : n;
                                    if (U(e)) return xe(e, function(e) {
                                        return t(e, r)
                                    });
                                    if (void 0 !== (n = t(e, r))) return n;
                                    if (null === e) return e;
                                    throw Error("A case reducer on a non-draftable value must not return undefined")
                                }
                                return e
                            }, e)
                        }
                        return o = "function" == typeof e ? function() {
                            return Xe(e())
                        } : (a = Xe(e), function() {
                            return a
                        }), l.getInitialState = o, l
                    }(a, function(e) {
                        for (var t in c) e.addCase(t, c[t]);
                        for (var n = 0, r = o; n < r.length; n++) {
                            var a = r[n];
                            e.addMatcher(a.matcher, a.reducer)
                        }
                        i && e.addDefaultCase(i)
                    })
                }
                return e.forEach(function(e) {
                    var t, n, r = i[e],
                        a = o + "/" + e;
                    "reducer" in r ? (t = r.reducer, n = r.prepare) : t = r, c[e] = t, u[a] = t, l[e] = n ? et(a, n) : et(a)
                }), {
                    name: o,
                    reducer: function(e, t) {
                        return (n = n || s())(e, t)
                    },
                    actions: l,
                    caseReducers: c,
                    getInitialState: function() {
                        return (n = n || s()).getInitialState()
                    }
                }
            }

            function rt(e) {
                void 0 === e && (e = 21);
                for (var t = "", n = e; n--;) t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW" [64 * Math.random() | 0];
                return t
            }
            var at = ["name", "message", "stack", "code"],
                ot = function(e, t) {
                    this.payload = e, this.meta = t
                },
                it = function(e, t) {
                    this.payload = e, this.meta = t
                },
                c = (ct.withTypes = function() {
                    return ct
                }, ct);

            function ct(e, p, m) {
                var h = et(e + "/fulfilled", function(e, t, n, r) {
                        return {
                            payload: e,
                            meta: Me(_e({}, r || {}), {
                                arg: n,
                                requestId: t,
                                requestStatus: "fulfilled"
                            })
                        }
                    }),
                    v = et(e + "/pending", function(e, t, n) {
                        return {
                            payload: void 0,
                            meta: Me(_e({}, n || {}), {
                                arg: t,
                                requestId: e,
                                requestStatus: "pending"
                            })
                        }
                    }),
                    g = et(e + "/rejected", function(e, t, n, r, a) {
                        return {
                            payload: r,
                            error: (m && m.serializeError || function(e) {
                                if ("object" !== Ie(e) || null === e) return {
                                    message: String(e)
                                };
                                for (var t = {}, n = 0, r = at; n < r.length; n++) {
                                    var a = r[n];
                                    "string" == typeof e[a] && (t[a] = e[a])
                                }
                                return t
                            })(e || "Rejected"),
                            meta: Me(_e({}, a || {}), {
                                arg: n,
                                requestId: t,
                                rejectedWithValue: !!r,
                                requestStatus: "rejected",
                                aborted: "AbortError" === (null == e ? void 0 : e.name),
                                condition: "ConditionError" === (null == e ? void 0 : e.name)
                            })
                        }
                    }),
                    t = "undefined" != typeof AbortController ? AbortController : (n.prototype.abort = function() {
                        0
                    }, n);

                function n() {
                    this.signal = {
                        aborted: !1,
                        addEventListener: function() {},
                        dispatchEvent: function() {
                            return !1
                        },
                        onabort: function() {},
                        removeEventListener: function() {},
                        reason: void 0,
                        throwIfAborted: function() {}
                    }
                }
                return Object.assign(function(d) {
                    return function(o, i, c) {
                        var u, l = null != m && m.idGenerator ? m.idGenerator(d) : rt(),
                            s = new t;

                        function f(e) {
                            u = e, s.abort()
                        }
                        var e = function() {
                            return He(this, null, function() {
                                var n, r, a;
                                return Ue(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return e.trys.push([0, 4, , 5]), r = null == (r = null == m ? void 0 : m.condition) ? void 0 : r.call(m, d, {
                                                getState: i,
                                                extra: c
                                            }), null === (t = r) || "object" !== Ie(t) || "function" != typeof t.then ? [3, 2] : [4, r];
                                        case 1:
                                            r = e.sent(), e.label = 2;
                                        case 2:
                                            if (!1 === r || s.signal.aborted) throw {
                                                name: "ConditionError",
                                                message: "Aborted due to condition callback returning false."
                                            };
                                            return a = new Promise(function(e, t) {
                                                return s.signal.addEventListener("abort", function() {
                                                    return t({
                                                        name: "AbortError",
                                                        message: u || "Aborted"
                                                    })
                                                })
                                            }), o(v(l, d, null == (r = null == m ? void 0 : m.getPendingMeta) ? void 0 : r.call(m, {
                                                requestId: l,
                                                arg: d
                                            }, {
                                                getState: i,
                                                extra: c
                                            }))), [4, Promise.race([a, Promise.resolve(p(d, {
                                                dispatch: o,
                                                getState: i,
                                                extra: c,
                                                requestId: l,
                                                signal: s.signal,
                                                abort: f,
                                                rejectWithValue: function(e, t) {
                                                    return new ot(e, t)
                                                },
                                                fulfillWithValue: function(e, t) {
                                                    return new it(e, t)
                                                }
                                            })).then(function(e) {
                                                if (e instanceof ot) throw e;
                                                return e instanceof it ? h(e.payload, l, d, e.meta) : h(e, l, d)
                                            })])];
                                        case 3:
                                            return n = e.sent(), [3, 5];
                                        case 4:
                                            return a = e.sent(), n = a instanceof ot ? g(null, l, d, a.payload, a.meta) : g(a, l, d), [3, 5];
                                        case 5:
                                            return m && !m.dispatchConditionRejection && g.match(n) && n.meta.condition || o(n), [2, n]
                                    }
                                    var t
                                })
                            })
                        }();
                        return Object.assign(e, {
                            abort: f,
                            requestId: l,
                            arg: d,
                            unwrap: function() {
                                return e.then(ut)
                            }
                        })
                    }
                }, {
                    pending: v,
                    rejected: g,
                    fulfilled: h,
                    typePrefix: e
                })
            }

            function ut(e) {
                if (e.meta && e.meta.rejectedWithValue) throw e.payload;
                if (e.error) throw e.error;
                return e.payload
            }

            function lt(t) {
                return function(e) {
                    setTimeout(e, t)
                }
            }
            o = "listener", Le = "completed", Object.assign, et((o = "listenerMiddleware") + "/add"), et(o + "/removeAll"), et(o + "/remove"), "function" == typeof queueMicrotask && queueMicrotask.bind("undefined" != typeof window ? window : void 0 !== Zr.g ? Zr.g : globalThis), "undefined" != typeof window && window.requestAnimationFrame || lt(10), fe();
            var st = a.EnvironmentUrls.apiGatewayUrl,
                ft = function(e, t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = null);
                    var t = t ? btoa(JSON.stringify(t)) : null,
                        r = (void 0 === (t = t) && (t = null), void 0 === (n = n) && (n = null), {
                            retryable: !0,
                            withCredentials: !0,
                            url: st + "/access-management/v1/upsell-feature-access?featureName=" + e + (t ? "&extraParameters=" + t : "") + (n ? "&successfulActions=" + n : "")
                        });
                    return new Promise(function(t) {
                        i.httpService.get(r).then(function(e) {
                            e = e.data;
                            t(e)
                        }, function(e) {
                            throw e
                        })
                    })
                };
            (Le = Gt = Gt || {}).Granted = "Granted", Le.Denied = "Denied", Le.Actionable = "Actionable";
            var dt = Gt;
            (Gt = gn = gn || {}).VerificationStarted = "VERIFICATION_STARTED", Gt.verificationInProgress = "VERIFICATION_IN_PROGRESS", Gt.VerificationPending = "VERIFICATION_PENDING", Gt.VerificationFailed = "VERIFICATION_FAILED", Gt.VerificationSucceded = "VERIFICATION_SUCCEEDED", Gt.AMPCheckFailed = "AMP_CHECK_FAILED", Gt.EmailUpdateFailed = "EMAIL_UPDATE_FAILED";
            var pt = gn;
            (Gt = Ft = Ft || {}).GovernmentId = "GovernmentId", Gt.Phone = "PHONE", Gt.Email = "EMAIL", Gt.AddedEmail = "AddedEmail", Gt.ParentConsentRequest = "ParentConsent", Gt.ParentLinkRequest = "ParentLink";
            var mt, ht, vt, gt, yt, bt = Ft;

            function Et(e) {
                return e.accessManagement.showUpsell
            }

            function wt(e) {
                return e.accessManagement.featureName
            }

            function St(e) {
                return e.accessManagement.ampFeatureCheckData
            }

            function Ct(e) {
                return e.accessManagement.featureAccess
            }

            function At(e) {
                return e.accessManagement.stage
            }

            function Pt(e) {
                return e.accessManagement.verificationStageRecourse
            }

            function xt(e, t) {
                void 0 === t && (t = []);
                var n = {
                    heading: "Heading.VerificationSuccessful",
                    icon: "success-icon",
                    bodyText: ["Label.DateOfBirthUpdated"],
                    buttonText: "Action.Close",
                    footerText: null
                };
                switch (e) {
                    case yt.SUCCESS_GENERIC:
                        break;
                    case yt.FAILURE:
                        n = Kt(Kt({}, n), {
                            heading: "Heading.VerificationFailed",
                            icon: "failure-icon",
                            bodyText: ["Label.FailedVerification"],
                            buttonText: "Action.Close"
                        });
                        break;
                    case yt.PENDING:
                        n = Kt(Kt({}, n), {
                            heading: "Heading.VerificationPending",
                            icon: "failure-icon",
                            bodyText: ["Label.PendingVerification"],
                            buttonText: "Action.Close"
                        });
                        break;
                    case yt.ERROR:
                        n = Kt(Kt({}, n), {
                            heading: "Heading.Error",
                            icon: "failure-icon",
                            bodyText: ["Label.GenericError"]
                        });
                        break;
                    case yt.TEMP_BAN:
                        n = Kt(Kt({}, n), {
                            heading: "Heading.Error",
                            icon: "failure-icon",
                            bodyText: ["Label.VerificationDeclined"]
                        });
                        break;
                    case yt.LANDING:
                    case yt.EMAIL:
                    case yt.MODAL:
                    case yt.POLLING:
                    case yt.EMAIL_CONTINUE:
                    case yt.EXTERNAL_EMAIL:
                    case yt.VENDOR_LINK:
                }
                return n.bodyText = Wt(Wt([], n.bodyText), t), n
            }

            function kt() {
                var e = {
                    retryable: !0,
                    withCredentials: !0,
                    url: sn + "/age-verification-service/v1/persona-id-verification/start-verification"
                };
                return i.httpService.post(e, {
                    generateLink: !0
                }).then(function(e) {
                    return e.data
                }).catch(function(e) {
                    e = i.httpService.parseErrorCode(e);
                    throw new Error("Error to start ID verification: " + (e || "unknown"))
                })
            }

            function Tt(e) {
                var t = {
                        retryable: !0,
                        withCredentials: !0,
                        url: sn + "/age-verification-service/v1/persona-id-verification/verified-status"
                    },
                    e = {
                        token: e
                    };
                return i.httpService.get(t, e).then(function(e) {
                    return e.data
                }).catch(function(e) {
                    e = i.httpService.parseErrorCode(e);
                    throw new Error("Error to get ID verification status: " + (e || "unknown"))
                })
            }

            function It(e) {
                return e.verification.IDVerificationState
            }

            function Nt() {
                return {
                    retryable: !0,
                    withCredentials: !0,
                    url: bn + "/v1/email"
                }
            }

            function Mt(e) {
                return e.emailVerification
            }(gn = mt = mt || {}).Prologue = "PROLOGUE", gn.Verification = "VERIFICATION", gn.Epilogue = "EPILOGUE", (Gt = ht = ht || {})[Gt.VendorLink = 0] = "VendorLink", Gt[Gt.Checklist = 1] = "Checklist", Gt[Gt.Complete = 2] = "Complete", (Ft = vt = vt || {})[Ft.Unknown = 0] = "Unknown", Ft[Ft.Success = 1] = "Success", Ft[Ft.Failure = 2] = "Failure", Ft[Ft.RequiresManualReview = 3] = "RequiresManualReview", Ft[Ft.RequiresRetry = 4] = "RequiresRetry", Ft[Ft.Started = 5] = "Started", Ft[Ft.Submitted = 6] = "Submitted", Ft[Ft.Stored = 7] = "Stored", Ft[Ft.Expired = 8] = "Expired", (gn = gt = gt || {})[gn.NoError = 0] = "NoError", gn[gn.UnknownError = 1] = "UnknownError", gn[gn.InvalidDocument = 2] = "InvalidDocument", gn[gn.InvalidSelfie = 3] = "InvalidSelfie", gn[gn.BelowMinimumAge = 4] = "BelowMinimumAge", gn[gn.LowQualityMedia = 5] = "LowQualityMedia", gn[gn.DocumentUnsupported = 6] = "DocumentUnsupported", (Gt = yt = yt || {})[Gt.LANDING = 0] = "LANDING", Gt[Gt.EMAIL = 1] = "EMAIL", Gt[Gt.MODAL = 2] = "MODAL", Gt[Gt.SUCCESS_GENERIC = 3] = "SUCCESS_GENERIC", Gt[Gt.FAILURE = 4] = "FAILURE", Gt[Gt.PENDING = 5] = "PENDING", Gt[Gt.POLLING = 6] = "POLLING", Gt[Gt.EMAIL_CONTINUE = 7] = "EMAIL_CONTINUE", Gt[Gt.EXTERNAL_EMAIL = 8] = "EXTERNAL_EMAIL", Gt[Gt.ERROR = 9] = "ERROR", Gt[Gt.TEMP_BAN = 10] = "TEMP_BAN", Gt[Gt.VENDOR_LINK = 11] = "VENDOR_LINK";
            var Rt = CoreRobloxUtilities,
                Lt = function(e, t, n) {
                    Rt.eventStreamService.sendEventWithTarget(e, t, n)
                },
                Ut = function() {
                    return (Ut = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Dt = function(e, i, c, u) {
                    return new(c = c || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                Vt = function(n, r) {
                    var a, o, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                c.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && c.label < i[1]) {
                                                c.label = i[1], i = t;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(t);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, c)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                Bt = {
                    featureName: null,
                    ampFeatureCheckData: void 0,
                    stage: null,
                    verificationStageRecourse: null,
                    featureAccess: {
                        loading: !1,
                        data: null,
                        error: null
                    },
                    showUpsell: !1,
                    redirectLink: null,
                    loading: !1
                },
                Ot = c("accessManagement/fetchFeatureAccess", function(a, o) {
                    return Dt(void 0, void 0, void 0, function() {
                        var t, n, r;
                        return Vt(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), t = a.featureName, n = a.ampFeatureCheckData, r = a.successfulAction, [4, ft(t, n, r)];
                                case 1:
                                    return [2, e.sent()];
                                case 2:
                                    return r = e.sent(), Lt(pt.AMPCheckFailed, null, {
                                        error: JSON.stringify(r)
                                    }), [2, o.rejectWithValue("Failed to fetch AMP response")];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }),
                Ft = nt({
                    name: "accessManagement",
                    initialState: Bt,
                    reducers: {
                        resetAccessManagementStore: function() {
                            return Bt
                        },
                        setFeatureName: function(e, t) {
                            e.featureName = t.payload
                        },
                        setAmpFeatureCheckData: function(e, t) {
                            e.ampFeatureCheckData = t.payload
                        },
                        showUpsell: function(e, t) {
                            e.showUpsell = t.payload
                        },
                        setFeatureAccess: function(e, t) {
                            e.featureAccess = t.payload
                        },
                        setRedirectLink: function(e, t) {
                            e.redirectLink = t.payload
                        },
                        setStage: function(e, t) {
                            e.stage = t.payload
                        },
                        setVerificationStageRecourse: function(e, t) {
                            e.verificationStageRecourse = t.payload
                        }
                    },
                    extraReducers: function(e) {
                        e.addCase(Ot.pending, function(e) {
                            e.featureAccess.loading = !0
                        }).addCase(Ot.fulfilled, function(e, t) {
                            t = t.payload;
                            e.featureAccess = Ut(Ut({}, e.featureAccess), {
                                loading: !1,
                                data: t
                            }), e.featureName = t.featureName, t.access === dt.Actionable && (e.showUpsell = !0, e.verificationStageRecourse = t.recourses[0])
                        }).addCase(Ot.rejected, function(e, t) {
                            e.featureAccess = Ut(Ut({}, e.featureAccess), {
                                loading: !1,
                                error: t.error.message || "Something went wrong"
                            })
                        })
                    }
                }),
                jt = (gn = Ft.actions).resetAccessManagementStore,
                qt = (gn.setFeatureAccess, gn.setFeatureName, gn.setAmpFeatureCheckData),
                _t = gn.setRedirectLink,
                Ht = gn.setVerificationStageRecourse,
                zt = (gn.showUpsell, gn.setStage),
                Gt = Ft.reducer,
                Kt = function() {
                    return (Kt = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Wt = function(e, t) {
                    for (var n = 0, r = t.length, a = e.length; n < r; n++, a++) e[a] = t[n];
                    return e
                },
                Yt = [{
                    label: "Label.ConnectingToMobile",
                    statusCode: [vt.Unknown]
                }, {
                    label: "Label.VerifyingYou",
                    statusCode: [vt.Started]
                }, {
                    label: "Label.VerificationWaitingForResults",
                    statusCode: [vt.Submitted]
                }, {
                    label: "Label.UpdatingRoblox",
                    statusCode: [vt.Success, vt.Stored]
                }],
                $t = "Action.RestartSession",
                Jt = "Action.StartSession",
                Qt = "Label.HavingTroubleScanCode",
                Xt = "Label.PleaseDoNotClose",
                Zt = "Label.VerificationDataSubmitted",
                en = "Label.VerifyInBrowser",
                tn = "Label.AgeVerifyPrompt",
                nn = "Label.PrepareId",
                rn = "Label.ValidIdList",
                an = "Label.UseSmartphone",
                on = "Label.SmartphoneRequired",
                cn = "Label.ScanQRCode",
                un = "Label.PrivacyNoticeAndLink",
                ln = Zr(574),
                sn = a.EnvironmentUrls.apiGatewayUrl,
                fn = function() {
                    return (fn = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                dn = function(e, i, c, u) {
                    return new(c = c || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                pn = function(n, r) {
                    var a, o, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                c.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && c.label < i[1]) {
                                                c.label = i[1], i = t;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(t);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, c)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                mn = {
                    verified: null,
                    IDVerificationState: {
                        page: ht.VendorLink,
                        vendorVerificationData: {
                            daysUntilNextVerification: 0,
                            sessionIdentifier: null,
                            verificationLink: null,
                            qrCode: null,
                            loading: !1
                        },
                        loading: null,
                        status: null,
                        completionPageState: null,
                        error: null
                    }
                },
                hn = c("verification/startIDVerification", function(e, a) {
                    return dn(void 0, void 0, void 0, function() {
                        var r;
                        return pn(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, kt()];
                                case 1:
                                    return (r = e.sent()).qrCode = (t = r.verificationLink, ln.toDataURL(t, function(e, t) {
                                        n = t
                                    }), n), [2, r];
                                case 2:
                                    return r = e.sent(), Lt(pt.VerificationFailed, bt.GovernmentId, {
                                        error: JSON.stringify(r)
                                    }), [2, a.rejectWithValue("Failed to start ID Verification")];
                                case 3:
                                    return [2]
                            }
                            var t, n
                        })
                    })
                }),
                vn = c("verification/fetchIDVerificationStatus", function(n, r) {
                    return dn(void 0, void 0, void 0, function() {
                        var t;
                        return pn(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, Tt(n)];
                                case 1:
                                    return [2, e.sent()];
                                case 2:
                                    return t = e.sent(), Lt(pt.VerificationFailed, bt.GovernmentId, {
                                        error: JSON.stringify(t)
                                    }), [2, r.rejectWithValue("Failed to fetch ID Verification status")];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }),
                gn = nt({
                    name: "verification",
                    initialState: mn,
                    reducers: {
                        resetVerificationStore: function() {
                            return mn
                        },
                        setVerified: function(e, t) {
                            e.verified = t.payload
                        },
                        setIDVerificationState: function(e, t) {
                            e.IDVerificationState = fn({}, t.payload)
                        },
                        setIDVPage: function(e, t) {
                            e.IDVerificationState.page = t.payload
                        }
                    },
                    extraReducers: function(e) {
                        e.addCase(hn.pending, function(e, t) {
                            var n = e.IDVerificationState.vendorVerificationData;
                            n.loading = !0, e.IDVerificationState = fn(fn({}, e.IDVerificationState), {
                                vendorVerificationData: n,
                                loading: !0
                            })
                        }).addCase(hn.fulfilled, function(e, t) {
                            var n = t.payload,
                                r = n.daysUntilNextVerification,
                                t = null;
                            n.loading = !1, null != r && 0 < r && (t = xt(yt.TEMP_BAN, ["Label.FailedVerificationInvalidDocument"])), e.IDVerificationState = fn(fn({}, e.IDVerificationState), {
                                vendorVerificationData: n,
                                completionPageState: t,
                                loading: !1
                            })
                        }).addCase(hn.rejected, function(e, t) {
                            var n = e.IDVerificationState.vendorVerificationData;
                            n.loading = !1, e.IDVerificationState = fn(fn({}, e.IDVerificationState), {
                                vendorVerificationData: n,
                                loading: !1,
                                error: t.error.message || "Something went wrong"
                            })
                        }).addCase(vn.pending, function(e) {
                            e.IDVerificationState = fn(fn({}, e.IDVerificationState), {
                                loading: !0
                            })
                        }).addCase(vn.fulfilled, function(e, t) {
                            var n, r = t.payload,
                                a = e.IDVerificationState.page;
                            switch (r.sessionStatus) {
                                case vt.RequiresRetry:
                                case vt.Failure:
                                    switch (a = ht.Complete, r.sessionErrorCode) {
                                        case gt.InvalidDocument:
                                        case gt.BelowMinimumAge:
                                            n = xt(yt.FAILURE, ["Label.FailedVerificationInvalidDocument"]);
                                            break;
                                        case gt.LowQualityMedia:
                                        case gt.InvalidSelfie:
                                            n = xt(yt.FAILURE, ["Label.FailedVerificationLowQuality"]);
                                            break;
                                        case gt.DocumentUnsupported:
                                            n = xt(yt.FAILURE, ["Label.FailedVerificationUnsupportedDocument"]);
                                            break;
                                        default:
                                            n = xt(yt.FAILURE)
                                    }
                                    break;
                                case vt.RequiresManualReview:
                                    a = ht.Complete, n = xt(yt.PENDING);
                                    break;
                                case vt.Success:
                                case vt.Stored:
                                    a = ht.Complete, n = xt(yt.SUCCESS_GENERIC);
                                    break;
                                case vt.Started:
                                    a = ht.Checklist, Lt(pt.VerificationStarted, bt.GovernmentId, {
                                        session: e.IDVerificationState.vendorVerificationData.sessionIdentifier
                                    });
                                    break;
                                case vt.Submitted:
                                    Lt(pt.verificationInProgress, bt.GovernmentId, {
                                        session: e.IDVerificationState.vendorVerificationData.sessionIdentifier
                                    })
                            }
                            e.IDVerificationState = fn(fn({}, e.IDVerificationState), {
                                loading: !1,
                                status: r,
                                completionPageState: n,
                                page: a
                            })
                        }).addCase(vn.rejected, function(e, t) {
                            e.IDVerificationState = fn(fn({}, e.IDVerificationState), {
                                loading: !1,
                                error: t.error.message || "Something went wrong"
                            })
                        })
                    }
                }),
                yn = (Ft = gn.actions).resetVerificationStore,
                Ft = (Ft.setVerified, Ft.setIDVerificationState, Ft.setIDVPage, gn.reducer),
                bn = (a.EnvironmentUrls.apiGatewayUrl, a.EnvironmentUrls.accountSettingsApi),
                En = (a.EnvironmentUrls.voiceApi, function(e, i, c, u) {
                    return new(c = c || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                }),
                wn = function(n, r) {
                    var a, o, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                c.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && c.label < i[1]) {
                                                c.label = i[1], i = t;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(t);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, c)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                Sn = {
                    emailAddress: null,
                    isEmailVerified: !1,
                    isEmailAdded: !1,
                    loading: !1,
                    error: !1
                },
                Cn = c("emailVerification/updateUserEmail", function(a, o) {
                    return En(void 0, void 0, void 0, function() {
                        var r;
                        return wn(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, (t = {
                                        emailAddress: a
                                    }, n = Nt(), i.httpService.post(n, t).then(function() {
                                        return !0
                                    }).catch(function(e) {
                                        throw new Error("Error to update email address: " + JSON.stringify(e))
                                    }))];
                                case 1:
                                    return [2, e.sent()];
                                case 2:
                                    return r = e.sent(), Lt(pt.EmailUpdateFailed, bt.AddedEmail, {
                                        error: JSON.stringify(r)
                                    }), [2, o.rejectWithValue("Failed to update email address")];
                                case 3:
                                    return [2]
                            }
                            var t, n
                        })
                    })
                }),
                An = c("emailVerification/getUserEmailStatus", function(e, r) {
                    return En(void 0, void 0, void 0, function() {
                        var n;
                        return wn(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, (t = Nt(), i.httpService.get(t).then(function(e) {
                                        return e.data
                                    }).catch(function(e) {
                                        throw new Error("Error to get email address: " + JSON.stringify(e))
                                    }))];
                                case 1:
                                    return [2, e.sent()];
                                case 2:
                                    return n = e.sent(), Lt(pt.EmailUpdateFailed, bt.AddedEmail, {
                                        error: JSON.stringify(n)
                                    }), [2, r.rejectWithValue("Failed to fetch email address")];
                                case 3:
                                    return [2]
                            }
                            var t
                        })
                    })
                }),
                gn = nt({
                    name: "emailVerification",
                    initialState: Sn,
                    reducers: {
                        resetEmailVerificationStore: function() {
                            return Sn
                        },
                        setUserEmailData: function(e, t) {
                            e.emailAddress = t.payload
                        }
                    },
                    extraReducers: function(e) {
                        e.addCase(Cn.pending, function(e) {
                            e.loading = !0
                        }).addCase(Cn.fulfilled, function(e, t) {
                            e.isEmailAdded = !0, e.loading = !1
                        }).addCase(Cn.rejected, function(e, t) {
                            e.loading = !1, e.error = !0
                        }).addCase(An.pending, function(e) {
                            e.loading = !0
                        }).addCase(An.fulfilled, function(e, t) {
                            t = t.payload;
                            e.emailAddress = t.emailAddress, e.isEmailVerified = t.isEmailVerified, e.loading = !1
                        }).addCase(An.rejected, function(e) {
                            e.loading = !1
                        })
                    }
                }),
                Pn = (c = gn.actions).resetEmailVerificationStore,
                xn = (c.setUserEmailData, function(e) {
                    var t, n = Ze(),
                        r = void 0 === (o = (i = e || {}).reducer) ? void 0 : o,
                        e = void 0 === (a = i.middleware) ? n() : a,
                        a = void 0 === (o = i.devTools) || o,
                        o = void 0 === (o = i.preloadedState) ? void 0 : o,
                        i = void 0 === (i = i.enhancers) ? void 0 : i;
                    if ("function" == typeof r) t = r;
                    else {
                        if (!Ge(r)) throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
                        t = (0, ke.combineReducers)(r)
                    }
                    return "function" == typeof(r = e) && (r = r(n)), e = ke.applyMiddleware.apply(void 0, r), n = ke.compose, a && (n = ze(_e({
                        trace: !1
                    }, "object" === Ie(a) && a))), r = new Je(e), a = r, Array.isArray(i) ? a = De([e], i) : "function" == typeof i && (a = i(r)), a = n.apply(void 0, a), (0, ke.createStore)(t, o, a)
                }({
                    reducer: {
                        accessManagement: Gt,
                        verification: Ft,
                        emailVerification: gn.reducer
                    }
                })),
                kn = "StartAccessManagementUpsell",
                Tn = {
                    Cancel: "Action.Cancel",
                    EmailMyParent: "Action.EmailMyParent",
                    VerifyID: "Action.VerifyID",
                    AskNow: "Action.AskNow"
                },
                In = {
                    AskYourParent: "Title.AskYourParent",
                    VerifyYourAge: "Title.VerifyYourAge"
                },
                Nn = {
                    Vpc: "Description.PrologueTextVpc",
                    VpcConnectingText: "Description.PrologueConnectingTextVpc",
                    Idv: "Description.PrologueTextIdv",
                    IdvConnectingText: "Description.PrologueConnectingTextIdv",
                    IdvAndVpc: "Description.PrologueTextIdvAndVpc",
                    IdvAndVpcConnectingText: "Description.PrologueConnectingTextIdvAndVpc",
                    VpcEnablePurchase: "Description.PrologueEnablePurchase"
                },
                Ft = Rt.eventStreamService.eventTypes,
                gn = "ageVerification",
                Mn = {
                    emailRegex: "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$",
                    translationKeys: {
                        addEmailToAccountKeys: {
                            btnText: "Action.Continue",
                            ActionChangeEmail: "Action.ChangeEmail",
                            ActionSent: "Action.Sent",
                            ActionContinue: "Action.Continue",
                            ActionGenericSkip: "Action.GenericSkip",
                            DescriptionAddEmailTextOver13: "Description.IDVerificationAddEmailText",
                            DescriptionAddEmailTextUnder13: "Description.IDVerificationAddEmailText",
                            HeadingAddEmail: "Heading.AddEmail",
                            LabelEmailInputPlaceholderOver13: "Label.EmailInputPlaceholderOver13",
                            LabelEmailInputPlaceholderUnder13: "Label.EmailInputPlaceholderUnder13",
                            MessageInvalidEmailAddress: "Message.InvalidEmailAddress"
                        }
                    },
                    events: {
                        showAddEmailModal: {
                            name: "showAddEmailModal",
                            type: Ft.modalAction,
                            context: gn,
                            params: {
                                aType: "shown",
                                field: "addEmail"
                            }
                        },
                        useAddEmailField: {
                            name: "useAddEmailField",
                            type: Ft.formInteraction,
                            context: gn,
                            params: {
                                btn: "emailAddress",
                                field: "addEmail"
                            }
                        },
                        addEmailConfirm: {
                            name: "addEmailConfirm",
                            type: Ft.buttonClick,
                            context: gn,
                            params: {
                                btn: "continue",
                                field: "addEmail"
                            }
                        }
                    }
                },
                Rn = function() {
                    return (Rn = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Ln = Mn.events,
                Un = {
                    useAddEmailToAccountEvent: function(e) {
                        var t = Ln.useAddEmailField;
                        Rt.eventStreamService.sendEventWithTarget(t.type, t.context, Rn(Rn({}, t.params), {
                            origin: e
                        }))
                    },
                    addEmailToAccountEvent: function(e) {
                        var t = Ln.addEmailConfirm;
                        Rt.eventStreamService.sendEventWithTarget(t.type, t.context, Rn(Rn({}, t.params), {
                            origin: e
                        }))
                    }
                },
                Dn = function(n, e) {
                    function t(e) {
                        m(e), y("");
                        var t = b.test(p) ? g ? n(g) : "" : n(v.MessageInvalidEmailAddress);
                        h(t), f(u || e.length <= 0 || 0 < t.length)
                    }
                    var r = T(),
                        a = (0, I.useState)(!1),
                        o = a[0],
                        i = a[1],
                        c = (0, I.useState)(!1),
                        u = c[0],
                        l = (c[1], (0, I.useState)(!0)),
                        s = l[0],
                        f = l[1],
                        d = (0, I.useState)(""),
                        p = d[0],
                        m = d[1],
                        a = (0, I.useState)(""),
                        c = a[0],
                        h = a[1],
                        l = (0, I.useMemo)(function() {
                            return {
                                open: function() {
                                    return i(!0)
                                },
                                close: function() {
                                    r(Pn()), i(!1)
                                }
                            }
                        }, []),
                        d = Mn.emailRegex,
                        v = Mn.translationKeys.addEmailToAccountKeys,
                        a = (0, I.useState)(""),
                        g = a[0],
                        y = a[1],
                        b = new RegExp(d),
                        d = function() {
                            r(Pn()), i(!1), e()
                        },
                        c = N().createElement(N().Fragment, null, N().createElement("div", {
                            className: "email-upsell-image"
                        }), N().createElement("p", {
                            className: "email-upsell-text-body"
                        }, n(v.DescriptionAddEmailTextOver13, {
                            emailAddress: p
                        })), N().createElement("input", {
                            type: "email",
                            className: (c ? "input-field-error" : "") + " form-control input-field email-upsell-modal-input",
                            placeholder: n(v.LabelEmailInputPlaceholderOver13),
                            value: p,
                            onFocus: function() {
                                return Un.useAddEmailToAccountEvent("")
                            },
                            onChange: function(e) {
                                return t(e.target.value)
                            }
                        }), c && N().createElement("p", {
                            className: "text-error modal-error-message"
                        }, n(c)));
                    return [N().createElement(M.Modal, {
                        show: o,
                        onHide: d,
                        backdrop: !0,
                        className: "mail-upsell-android-modal",
                        size: "sm",
                        "aria-labelledby": "contained-modal-title-vcenter",
                        scrollable: "true",
                        centered: !0
                    }, N().createElement(M.Modal.Header, {
                        useBaseBootstrapComponent: !0
                    }, N().createElement("div", {
                        className: "email-upsell-title-container"
                    }, N().createElement("button", {
                        type: "button",
                        className: "email-upsell-title-button",
                        onClick: d
                    }, N().createElement("span", {
                        className: "close icon-close"
                    })), N().createElement(M.Modal.Title, {
                        id: "contained-modal-title-vcenter"
                    }, n(v.HeadingAddEmail)))), N().createElement(M.Modal.Body, null, c), N().createElement(M.Modal.Footer, null, N().createElement(M.Button, {
                        className: "modal-button email-upsell-btn",
                        variant: M.Button.variants.cta,
                        size: M.Button.sizes.medium,
                        isDisabled: s,
                        onClick: function() {
                            y(""), r(Cn(p))
                        }
                    }, n(v.btnText)))), l]
                },
                Vn = (0, r.withTranslations)(function(e) {
                    var t = e.translate,
                        n = e.onHide,
                        r = T(),
                        a = b(Mt),
                        o = b(wt),
                        i = b(St),
                        e = Dn(t, n),
                        t = e[0],
                        c = e[1];
                    return (0, I.useEffect)(function() {
                        c.open()
                    }, []), (0, I.useEffect)(function() {
                        a.error && (c.close(), n())
                    }, [c, a]), (0, I.useEffect)(function() {
                        a.isEmailAdded && (c.close(), r(Ot({
                            featureName: o,
                            ampFeatureCheckData: i,
                            successfulAction: "AddedEmail"
                        })))
                    }, [a]), N().createElement("div", null, t)
                }, {
                    common: ["CommonUI.Controls"],
                    feature: "Feature.VerificationUpsell"
                }),
                Bn = HeaderScripts;

            function On(e) {
                var n = e.translate,
                    t = e.onHide,
                    e = (o = b(It)).status,
                    r = o.vendorVerificationData,
                    a = e.sessionStatus,
                    o = r.qrCode,
                    e = !((null == (e = Bn.deviceMeta.getDeviceMeta()) ? void 0 : e.isPhone) || (null == e ? void 0 : e.isTablet) || "phone" === (null == e ? void 0 : e.deviceType)) && o,
                    i = Yt.findIndex(function(e) {
                        return e.statusCode.includes(a)
                    });
                return N().createElement(N().Fragment, null, N().createElement(M.Modal.Header, {
                    useBaseBootstrapComponent: !0
                }, N().createElement("div", {
                    className: "email-upsell-title-container"
                }, N().createElement("button", {
                    type: "button",
                    className: "email-upsell-title-button",
                    onClick: t
                }, N().createElement("span", {
                    className: "close icon-close"
                })), N().createElement(M.Modal.Title, {
                    id: "contained-modal-title-vcenter"
                }, n("Heading.IdentityVerification")))), N().createElement(M.Modal.Body, {
                    className: "verification-checklist-page-content"
                }, N().createElement("div", {
                    className: "cta"
                }, n(a === vt.Success || a === vt.Stored || a === vt.Submitted ? Zt : en)), N().createElement("ul", {
                    className: "checklist-wrapper"
                }, Yt.map(function(e, t) {
                    return t <= i ? N().createElement("li", {
                        className: "checklist-item"
                    }, N().createElement("span", {
                        className: "check-wrapper"
                    }, N().createElement("span", {
                        className: t === i ? "spinner spinner-sm" : "icon-checkmark"
                    })), N().createElement("span", {
                        className: "checklist-text"
                    }, n(e.label))) : null
                })), e && N().createElement("div", {
                    className: "verification-link-page-content"
                }, N().createElement("div", {
                    className: "qr-code-wrapper"
                }, N().createElement("img", {
                    className: "qr-code-img",
                    src: o,
                    alt: "qr"
                })), N().createElement("div", {
                    className: "footer-text"
                }, n(Qt))), !e && N().createElement("a", {
                    href: r.verificationLink,
                    target: "_blank",
                    rel: "noreferrer"
                }, N().createElement(M.Button, {
                    onClick: function() {
                        Lt(pt.VerificationStarted, bt.GovernmentId, {
                            session: r.sessionIdentifier
                        })
                    },
                    className: "primary-link",
                    variant: M.Button.variants.primary,
                    size: M.Button.sizes.medium,
                    width: M.Button.widths.full
                }, n($t))), N().createElement("div", {
                    className: "footer-text"
                }, n(Xt))))
            }

            function Fn(e) {
                var t = e.translate,
                    n = e.onHide,
                    r = b(It).vendorVerificationData,
                    a = r.loading,
                    o = r.qrCode,
                    e = !((null == (e = Bn.deviceMeta.getDeviceMeta()) ? void 0 : e.isPhone) || (null == e ? void 0 : e.isTablet) || "phone" === (null == e ? void 0 : e.deviceType)) && o;
                return N().createElement(N().Fragment, null, N().createElement(M.Modal.Header, {
                    useBaseBootstrapComponent: !0
                }, N().createElement("button", {
                    type: "button",
                    className: "email-upsell-title-button",
                    onClick: n
                }, N().createElement("span", {
                    className: "close icon-close"
                })), N().createElement("div", {
                    className: "email-upsell-title-container"
                }, N().createElement(M.Modal.Title, {
                    id: "contained-modal-title-vcenter"
                }, t("Heading.IdentityVerification")))), a ? N().createElement(M.Loading, null) : N().createElement(M.Modal.Body, {
                    className: "verification-link-page-content"
                }, N().createElement("div", {
                    className: "verification-link-upsell"
                }, t(tn)), N().createElement("div", {
                    className: "preparation-list-wrapper"
                }, N().createElement("div", {
                    className: "preparation-list-item"
                }, N().createElement("span", {
                    className: "icon-menu-document"
                }), N().createElement("div", {
                    className: "preparation-list-text"
                }, N().createElement("div", {
                    className: "preparation-title"
                }, t(nn)), N().createElement("div", {
                    className: "preparation-text"
                }, t(rn)))), e && N().createElement("div", {
                    className: "preparation-list-item"
                }, N().createElement("span", {
                    className: "icon-menu-mobile"
                }), N().createElement("div", {
                    className: "preparation-list-text"
                }, N().createElement("div", {
                    className: "preparation-title"
                }, t(an)), N().createElement("div", {
                    className: "preparation-text"
                }, t(on))))), e && N().createElement("div", null, N().createElement("div", {
                    className: "verification-link-upsell"
                }, t(cn)), N().createElement("div", {
                    className: "qr-code-wrapper"
                }, N().createElement("img", {
                    className: "qr-code-img",
                    src: o,
                    alt: "qr"
                }))), N().createElement("p", {
                    className: "verification-link-legal",
                    dangerouslySetInnerHTML: {
                        __html: t(un, {
                            spanStart: "<a class='text-link' href='https://en.help.roblox.com/hc/en-us/articles/4412863575316'>",
                            spanEnd: "</a>"
                        })
                    }
                }), !e && N().createElement("a", {
                    href: r.verificationLink,
                    target: "_self",
                    rel: "noreferrer"
                }, N().createElement(M.Button, {
                    onClick: function() {
                        return console.log("start sesesion")
                    },
                    className: "primary-link",
                    variant: M.Button.variants.primary,
                    size: M.Button.sizes.medium,
                    width: M.Button.widths.full
                }, t(Jt)))))
            }

            function jn(e) {
                var t = e.translate,
                    n = e.onHide,
                    r = (u = b(It)).completionPageState,
                    a = u.status,
                    o = u.vendorVerificationData.daysUntilNextVerification,
                    i = r.heading,
                    c = r.bodyText,
                    e = r.icon,
                    u = r.footerText,
                    r = r.buttonText,
                    a = a.sessionStatus === vt.Failure;
                return N().createElement(N().Fragment, null, N().createElement(M.Modal.Header, {
                    useBaseBootstrapComponent: !0
                }, N().createElement("div", {
                    className: "email-upsell-title-container"
                }, N().createElement("button", {
                    type: "button",
                    className: "email-upsell-title-button",
                    onClick: n
                }, N().createElement("span", {
                    className: "close icon-close"
                })), N().createElement(M.Modal.Title, {
                    id: "contained-modal-title-vcenter"
                }, t(i)))), N().createElement(M.Modal.Body, null, e && N().createElement("div", {
                    className: e
                }), N().createElement("ul", {
                    className: a ? "content-list error-text" : "content-list"
                }, c.map(function(e) {
                    return N().createElement("li", null, t(e, {
                        age: 18,
                        days: o
                    }))
                }))), N().createElement(M.Modal.Footer, null, u && N().createElement("p", {
                    className: "small"
                }, N().createElement("b", null, t(u))), N().createElement("span", {
                    key: r
                }, N().createElement(M.Button, {
                    className: "button-stack-button primary-link",
                    variant: M.Button.variants.primary,
                    size: M.Button.sizes.medium,
                    onClick: n
                }, t(r)))))
            }

            function qn(e) {
                var t = e.translate,
                    n = e.onHidecallback,
                    r = (0, I.useRef)(Number(new Date) + 18e5),
                    a = T(),
                    o = b(It),
                    i = b(wt),
                    c = b(St),
                    u = o.loading,
                    l = o.vendorVerificationData,
                    s = b(It).page;

                function f() {
                    a(yn()), n()
                }(0, I.useEffect)(function() {
                    a(hn()), r.current = Number(new Date) + 18e5
                }, [a]), (0, I.useEffect)(function() {
                    !u && null != l.verificationLink && o.page !== ht.Complete && Number(new Date) < r.current && setTimeout(function() {
                        a(vn(l.sessionIdentifier))
                    }, 15e3)
                }, [o.loading]), (0, I.useEffect)(function() {
                    s === ht.Complete && a(Ot({
                        featureName: i,
                        ampFeatureCheckData: c
                    }))
                }, [s]);
                var d = null;
                switch (s) {
                    case ht.VendorLink:
                        d = N().createElement(Fn, {
                            translate: t,
                            onHide: f
                        });
                        break;
                    case ht.Checklist:
                        d = N().createElement(On, {
                            translate: t,
                            onHide: f
                        });
                        break;
                    case ht.Complete:
                        d = N().createElement(jn, {
                            translate: t,
                            onHide: f
                        });
                        break;
                    default:
                        d = N().createElement(Fn, {
                            translate: t,
                            onHide: f
                        })
                }
                return N().createElement(N().Fragment, null, d)
            }

            function _n(e) {
                return e.translate, N().createElement(N().Fragment, null)
            }
            var Hn = a.EnvironmentUrls.apiGatewayUrl + "/child-requests-api/v1/send-request-to-new-parent",
                zn = a.EnvironmentUrls.apiGatewayUrl + "/child-requests-api/v1/send-request-to-all-parents",
                Gn = a.EnvironmentUrls.userSettingsApi + "/v1/account-insights/parent-emails",
                Kn = function(e, i, c, u) {
                    return new(c = c || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                Wn = function(n, r) {
                    var a, o, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                c.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && c.label < i[1]) {
                                                c.label = i[1], i = t;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(t);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, c)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                Yn = {
                    sendRequestToNewParent: function(r) {
                        return Kn(void 0, void 0, Promise, function() {
                            var t, n;
                            return Wn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return t = {
                                            url: Hn,
                                            withCredentials: !0
                                        }, n = r.requestDetails, [4, i.httpService.post(t, r)];
                                    case 1:
                                        return t = e.sent(), n && (n = Object.keys(n)[0], Rt.localStorageService.setLocalStorage("Roblox.ParentalRequest." + n + "CooldownExpirationTime", t.data.lockedUntil)), [2, t.data]
                                }
                            })
                        })
                    },
                    sendRequestToAllParents: function(r) {
                        return Kn(void 0, void 0, Promise, function() {
                            var t, n;
                            return Wn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return t = {
                                            url: zn,
                                            withCredentials: !0
                                        }, n = r.requestDetails, [4, i.httpService.post(t, r)];
                                    case 1:
                                        return t = e.sent(), n && (n = Object.keys(n)[0], Rt.localStorageService.setLocalStorage("Roblox.ParentalRequest." + n + "CooldownExpirationTime", t.data.lockedUntil)), [2, t.data]
                                }
                            })
                        })
                    }
                },
                gn = Zr(870),
                $n = Zr.n(gn),
                Jn = function(e) {
                    var t = e.translate,
                        n = e.title,
                        r = e.body,
                        a = e.actionButtonTranslateKey,
                        o = void 0 === a ? "" : a,
                        i = e.neutralButtonTranslateKey,
                        c = e.footer,
                        u = e.size,
                        l = void 0 === u ? "sm" : u,
                        s = e.onAction,
                        f = e.disableActionButton,
                        d = e.disabledNeutralButton,
                        a = e.dualActionButton,
                        u = void 0 !== a && a,
                        a = e.onHide,
                        p = void 0 === a ? function() {} : a,
                        m = e.onNeutral,
                        a = (0, I.useState)(!1),
                        e = a[0],
                        h = a[1],
                        v = (0, I.useMemo)(function() {
                            return {
                                open: function() {
                                    return h(!0)
                                },
                                close: function() {
                                    return h(!1)
                                }
                            }
                        }, []),
                        a = $n()({
                            "modal-half-width-button": i,
                            "modal-full-width-button": !i
                        });
                    return [N().createElement(M.Modal, {
                        show: e,
                        onHide: function() {
                            v.close(), p()
                        },
                        backdrop: !0,
                        className: "access-management-upsell-inner-modal",
                        size: l,
                        "aria-labelledby": "access-management-upsell-inner-modal-title",
                        scrollable: !0,
                        centered: !0
                    }, N().createElement(M.Modal.Header, {
                        useBaseBootstrapComponent: !0
                    }, N().createElement("div", {
                        className: "access-management-upsell-inner-modal-title-container"
                    }, N().createElement(M.Modal.Title, {
                        id: "access-management-upsell-inner-modal-title"
                    }, n)), N().createElement("button", {
                        type: "button",
                        className: "close close-button",
                        onClick: function() {
                            v.close(), p()
                        }
                    }, N().createElement("span", {
                        className: "icon-close"
                    }))), N().createElement(M.Modal.Body, null, r), N().createElement(M.Modal.Footer, null, o && N().createElement(M.Button, {
                        className: a,
                        variant: M.Button.variants.primary,
                        size: M.Button.sizes.medium,
                        isDisabled: f,
                        onClick: function() {
                            null != s && s(), v.close()
                        }
                    }, t(o)), i && N().createElement(M.Button, {
                        className: a,
                        variant: u ? M.Button.variants.primary : M.Button.variants.secondary,
                        size: M.Button.sizes.medium,
                        isDisabled: d,
                        onClick: function() {
                            null != m && m(), v.close()
                        }
                    }, t(i))), c && N().createElement("div", {
                        className: "text-footer access-management-upsell-inner-modal-text-footer border-top"
                    }, c)), v]
                },
                Qn = {
                    privacyPolicyUrl: a.EnvironmentUrls.websiteUrl + "/info/privacy",
                    chargebackWizardSessionTokenLocalStorageKey: "Roblox.ChargebackWizardSessionToken",
                    defaultCooldownTimeInMs: 9e5,
                    emailRegex: "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$",
                    isChildSubjectToPCFeatureName: "IsChildSubjectToParentalControls",
                    translationKeys: {
                        gatherParentEmail: {
                            title: "Title.EnterParentEmailV2",
                            permissionNeededTitle: "Title.PermissionNeeded",
                            askYourParentTitle: "Title.AskYourParent",
                            body: "Description.EnterParentEmailV4",
                            combinedBody: "Description.EnterParentEmailExp",
                            bodyWithoutPC: "Description.EnterParentEmailWithoutParentalControl",
                            combinedBodyWithoutPC: "Description.EnterParentEmailExpWithoutParentalControl",
                            footer: "Description.ParentalEmailFooter",
                            unknownError: "Message.SomethingWentWrong",
                            invalidEmailError: "Message.InvalidEmail",
                            btnText: "Action.SendEmail",
                            emailPlaceholder: "Label.EmailCapitalized",
                            parentEmailLabel: "Label.ParentEmail",
                            emailTooManyChildrenError: "Message.EmailIneligible",
                            childTooManyParentsError: "Message.ExistAccountWithEmail",
                            emailTooManyRequest: "Message.TooManyAttempts",
                            senderFlooded: "Message.TooManyAttemptAskParent",
                            alreadyApplied: "Description.AllSet",
                            seeRequestAfterLink: "Message.RequestCreatedEmailNotSent",
                            alreadyLinked: "Message.AlreadyLinked"
                        },
                        emailSentConfirmation: {
                            title: "Title.RequestSent",
                            oneParentBody: "Message.EmailSent",
                            pluralParentBody: "Message.EmailSentPluralParent",
                            emailNotSentBody: "Message.RequestCreatedEmailNotSent",
                            btnText: "Action.OK"
                        },
                        exitWarning: {
                            title: "Title.AreYouSure",
                            body: "Description.ExitEnterEmail",
                            actionBtnText: "Action.EnterEmail",
                            neutralBtnText: "Action.Cancel"
                        }
                    },
                    events: {
                        chargebackContext: {
                            parentalEntry: "parentalEntry",
                            settingsAge: "settingsAgeChargeback",
                            settingsRequestSent: "settingsChargebackRequestSent"
                        },
                        savePaymentMethodsContext: {
                            parentalEntry: "parentalEntryDevsubs",
                            settingsAge: "settingsAgeSavePaymentMethods",
                            settingsRequestSent: "settingsSavePaymentMethodsRequestSent"
                        },
                        changeBirthdayContext: {
                            parentalEntry: "parentalEntryAgeChange",
                            settingsAge: "settingsAgeChangeBirthday",
                            settingsRequestSent: "settingsAgeChangeVerifyRequestSent"
                        },
                        updateUserSettingContext: {
                            parentalEntry: "parentalEntrySettings",
                            settingsAge: "settingsAgeSettings",
                            settingsRequestSent: "settingsRequestSent"
                        },
                        eventName: {
                            authPageLoad: "authPageload",
                            authButtonClick: "authButtonClick",
                            authFormInteraction: "authFormInteraction",
                            authMsgShown: "authMsgShown",
                            authModalShown: "authModalShown"
                        },
                        state: {
                            sessionId: "sessionId",
                            unknown: "unknown",
                            changeBirthday: {
                                U13To18: "U13To18",
                                U13To1318: "U13To1318",
                                U13ToU13: "U13ToU13"
                            }
                        },
                        field: {
                            email: "email",
                            errorMessage: "errorMessage",
                            logoutPopup: "logoutPopup",
                            parentalEmailMismatch: "parentalEmailMismatch"
                        },
                        btn: {
                            verifyCancel: "verifyCancel",
                            continue: "continue",
                            submit: "submit"
                        },
                        text: {
                            enterParentEmail: "Enter Parent's Email",
                            sendEmail: "Send Email",
                            submit: "Submit",
                            ok: "OK",
                            requestSent: "Request Sent"
                        }
                    },
                    settingName: {
                        enablePurchases: "enablePurchases"
                    }
                };
            (gn = Zn = Zn || {}).Unknown = "Unknown", gn.InvalidUserID = "InvalidUserID", gn.InvalidParameter = "InvalidParameter", gn.ServiceUnavailable = "ServiceUnavailable", gn.NoLinkedParents = "NoLinkedParents", gn.ConsentAlreadyApplied = "ConsentAlreadyApplied", gn.SenderFlooded = "SenderFlooded", gn.ReceiverFlooded = "ReceiverFlooded", gn.SenderFloodedRequestCreated = "SenderFloodedRequestCreated", gn.IllegalState = "IllegalState", gn.InvalidEmailAddress = "InvalidEmailAddress", gn.EmailNotUnique = "EmailNotUnique", gn.LinkingIneligible = "LinkingIneligible", gn.AlreadyLinked = "AlreadyLinked", gn.ChildAtLinkLimit = "ChildAtLinkLimit", gn.ParentAtLinkLimit = "ParentAtLinkLimit", gn.UpdateUserSettingRequestInvalid = "UpdateUserSettingRequestInvalid", gn.ConsentAlreadyRequestedConflictingData = "ConsentAlreadyRequestedConflictingData", gn.ReceiverNotWhitelisted = "ReceiverNotWhitelisted", gn.InvalidComplianceFeature = "InvalidComplianceFeature", gn.ChildTooOld = "ChildTooOld", gn.UserForgotten = "UserForgotten";
            var Xn, Zn, er = Zn,
                tr = Qn.translationKeys.gatherParentEmail,
                nr = function(e) {
                    switch (e) {
                        case er.ChildAtLinkLimit:
                            return tr.childTooManyParentsError;
                        case er.ParentAtLinkLimit:
                            return tr.emailTooManyChildrenError;
                        case er.SenderFlooded:
                            return tr.senderFlooded;
                        case er.ReceiverFlooded:
                            return tr.emailTooManyRequest;
                        case er.ConsentAlreadyApplied:
                            return tr.alreadyApplied;
                        case er.AlreadyLinked:
                            return tr.alreadyLinked;
                        case er.InvalidEmailAddress:
                            return tr.invalidEmailError;
                        default:
                            return tr.unknownError
                    }
                };
            (Zn = Xn = Xn || {}).LiftPunishment = "LiftPunishment", Zn.SavePaymentMethods = "SavePaymentMethods", Zn.UpdateUserSetting = "UpdateUserSetting", Zn.UpdateBirthdate = "UpdateBirthdate", Zn.LinkToChild = "LinkToChild", Zn.Unknown = "Unknown";
            var rr = Xn;

            function ar(e, t, n, r) {
                var a = n ? n + ", " : "",
                    n = t ? "sessionId: " + t + ", " : "",
                    t = r ? "settingName: " + Object.keys(r)[0] + ", " : "",
                    r = r ? Object.entries(r).map(function(e) {
                        var t = e[0],
                            e = e[1];
                        return t + ": " + String(e)
                    }).join(", ") : "";
                return e !== rr.UpdateUserSetting ? a + r + n : a + t + n
            }

            function or(e, t) {
                var n;
                switch (e) {
                    case rr.LiftPunishment:
                        (null == t ? void 0 : t.punishmentType) === sr.Chargeback && (n = fr.chargebackContext);
                        break;
                    case rr.SavePaymentMethods:
                        n = fr.savePaymentMethodsContext;
                        break;
                    case rr.UpdateBirthdate:
                        n = fr.changeBirthdayContext;
                        break;
                    case rr.UpdateUserSetting:
                        n = fr.updateUserSettingContext;
                        break;
                    default:
                        n = fr.chargebackContext
                }
                return n
            }

            function ir(e) {
                var t = e.requestType,
                    n = e.sessionId,
                    r = e.extraState,
                    a = e.details,
                    e = or(t);
                Rt.eventStreamService.sendEventWithTarget(fr.eventName.authButtonClick, e.parentalEntry, {
                    btn: fr.btn.continue,
                    associatedText: fr.text.ok,
                    state: ar(t, n, r, a)
                })
            }

            function cr(e) {
                function t() {
                    return mr(void 0, void 0, void 0, function() {
                        var i, c;
                        return hr(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, Yn.sendRequestToAllParents({
                                        requestType: u,
                                        requestDetails: s
                                    })];
                                case 1:
                                    return i = e.sent(), c = null == s ? void 0 : s.newBirthdate, c = new Date(c), c = u === rr.UpdateBirthdate ? pr.getAgeRange(c) : void 0, t = {
                                        requestType: u,
                                        extraState: c,
                                        sessionId: i.sessionId,
                                        details: s
                                    }, n = t.requestType, r = t.sessionId, a = t.extraState, o = t.details, t = or(n, o), Rt.eventStreamService.sendEventWithTarget(fr.eventName.authPageLoad, t.settingsRequestSent, {
                                        state: ar(n, r, a, o),
                                        associatedText: fr.text.requestSent
                                    }), l(i.sessionId), [3, 3];
                                case 2:
                                    return c = e.sent(), (c = nr((i = c).data.code)) === er.SenderFloodedRequestCreated ? l(i.data.sessionId, void 0, !0) : (f(c), d.open()), [3, 3];
                                case 3:
                                    return [2]
                            }
                            var t, n, r, a, o
                        })
                    })
                }
                var n = e.translate,
                    u = e.consentType,
                    l = e.successCallBack,
                    r = e.onHideCallback,
                    s = void 0 === (a = e.value) ? null : a,
                    a = (e = (0, I.useState)(Qn.translationKeys.gatherParentEmail.unknownError))[0],
                    f = e[1],
                    e = Qn.translationKeys.emailSentConfirmation,
                    e = (a = Jn({
                        translate: n,
                        title: n(Qn.translationKeys.gatherParentEmail.unknownError),
                        body: N().createElement("p", null, n(a)),
                        actionButtonTranslateKey: e.btnText,
                        onAction: function() {
                            f(""), d.close(), r()
                        },
                        onHide: r
                    }))[0],
                    d = a[1];
                return (0, I.useEffect)(function() {
                    t()
                }, []), N().createElement("div", null, e)
            }(lr = lr || {}).Chargeback = "Chargeback";
            var ur, lr, sr = lr,
                fr = Qn.events,
                dr = {
                    dateInUTCToBirthdate: function(e) {
                        var t = e.getUTCFullYear(),
                            n = e.getUTCMonth() + 1;
                        return {
                            birthDay: e.getUTCDate(),
                            birthMonth: n,
                            birthYear: t
                        }
                    },
                    calculateAge: function(e) {
                        if (!e || !e.birthYear || 0 === e.birthYear) return 0;
                        var t = new Date,
                            t = dr.dateInUTCToBirthdate(t);
                        return t.birthDay - e.birthDay < 0 && --t.birthMonth, t.birthMonth - e.birthMonth < 0 && --t.birthYear, t.birthYear - e.birthYear
                    },
                    getAgeRange: function(e) {
                        var t = Qn.events.state.changeBirthday,
                            e = dr.dateInUTCToBirthdate(e);
                        return dr.calculateAge(e) < 13 ? t.U13ToU13 : t.U13To1318
                    }
                },
                pr = dr,
                mr = function(e, i, c, u) {
                    return new(c = c || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                hr = function(n, r) {
                    var a, o, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                c.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && c.label < i[1]) {
                                                c.label = i[1], i = t;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(t);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, c)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                };

            function vr(e) {
                var t = e.translate,
                    n = e.consentType,
                    r = e.successCallback,
                    a = e.onHidecallback,
                    o = e.value,
                    e = e.expChildModalType,
                    e = (o = Er(t, n, r, a, o, void 0 === e ? null : e))[0],
                    i = o[1];
                return (0, I.useEffect)(function() {
                    i.open()
                }, []), N().createElement(N().Fragment, null, e)
            }(lr = ur = ur || {}).control = "control", lr.askYourParentTitle = "askYourParentTitle", lr.permissionNeededTitle = "permissionNeededTitle", lr.visualized = "visualized";
            var gr = ur,
                yr = function(e, i, c, u) {
                    return new(c = c || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                br = function(n, r) {
                    var a, o, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                c.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && c.label < i[1]) {
                                                c.label = i[1], i = t;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(t);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, c)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                Er = function(n, c, u, e, l, r) {
                    var t = Qn.privacyPolicyUrl,
                        s = Qn.chargebackWizardSessionTokenLocalStorageKey,
                        a = Qn.emailRegex,
                        o = Qn.translationKeys.gatherParentEmail,
                        i = (0, I.useState)(!1),
                        f = i[0],
                        d = i[1],
                        p = (0, I.useState)(!1),
                        m = p[0],
                        h = p[1],
                        v = (0, I.useState)(!1),
                        g = v[0],
                        y = v[1],
                        i = (0, I.useState)(""),
                        b = i[0],
                        E = i[1],
                        p = (0, I.useState)(n(o.title)),
                        v = p[0],
                        w = p[1],
                        i = (0, I.useState)(N().createElement("span", {
                            dangerouslySetInnerHTML: {
                                __html: n(o.body, {
                                    lineBreak: "<br /><br />"
                                })
                            }
                        })),
                        p = i[0],
                        S = i[1],
                        C = (0, I.useMemo)(function() {
                            return {
                                open: function() {
                                    return d(!0)
                                },
                                close: function() {
                                    return d(!1)
                                }
                            }
                        }, []),
                        i = (0, I.useState)(""),
                        A = i[0],
                        P = i[1],
                        x = (0, I.useMemo)(function() {
                            if (c === rr.UpdateUserSetting) return Object.keys(l)[0]
                        }, [c, l]);
                    (0, I.useEffect)(function() {
                        yr(void 0, void 0, void 0, function() {
                            var t;
                            return br(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 2, , 3]), [4, ft(Qn.isChildSubjectToPCFeatureName)];
                                    case 1:
                                        return t = e.sent(), h(t.access === dt.Granted), [3, 3];
                                    case 2:
                                        return e.sent(), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, []);

                    function k() {
                        return yr(void 0, void 0, void 0, function() {
                            var o, i;
                            return br(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        P(""), Rt.localStorageService.removeLocalStorage(s), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, Yn.sendRequestToNewParent({
                                            email: b,
                                            requestType: c,
                                            requestDetails: l
                                        })];
                                    case 2:
                                        return o = e.sent(), t = {
                                            requestType: c,
                                            sessionId: o.sessionId,
                                            details: l
                                        }, n = t.requestType, r = t.sessionId, a = t.details, t = or(n), Rt.eventStreamService.sendEventWithTarget(fr.eventName.authButtonClick, t.parentalEntry, {
                                            btn: fr.btn.submit,
                                            associatedText: fr.text.sendEmail,
                                            state: ar(n, r, void 0, a)
                                        }), y(!1), C.close(), u(o.sessionId, b), [3, 4];
                                    case 3:
                                        return i = e.sent(), E(""), y(!1), (i = nr((o = i).data.code)) === er.SenderFloodedRequestCreated && u(o.data.sessionId, void 0, !0), P(i), [3, 4];
                                    case 4:
                                        return [2]
                                }
                                var t, n, r, a
                            })
                        })
                    }
                    var T = new RegExp(a),
                        a = function() {
                            return 0 < b.length && !T.test(b) ? n(o.invalidEmailError) : A ? n(A) : ""
                        };
                    (0, I.useEffect)(function() {
                        var e = m ? o.body : o.bodyWithoutPC,
                            t = m ? o.combinedBody : o.combinedBodyWithoutPC;
                        if (x === Qn.settingName.enablePurchases) switch (r) {
                            case gr.askYourParentTitle:
                                w(n(o.askYourParentTitle)), S(N().createElement("span", null, N().createElement("span", null, n(Nn.VpcEnablePurchase)), N().createElement("br", null), N().createElement("br", null), N().createElement("span", null, n(t))));
                                break;
                            case gr.permissionNeededTitle:
                                w(n(o.permissionNeededTitle)), S(N().createElement("span", null, N().createElement("span", null, n(Nn.VpcEnablePurchase)), N().createElement("br", null), N().createElement("br", null), N().createElement("span", null, n(t))));
                                break;
                            case gr.visualized:
                                w(n(o.askYourParentTitle)), S(N().createElement("div", null, N().createElement("div", {
                                    className: "parent-email-image"
                                }), N().createElement("span", null, n(Nn.VpcEnablePurchase)), N().createElement("br", null), N().createElement("br", null), N().createElement("span", null, n(t))));
                                break;
                            default:
                                S(N().createElement("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: n(e, {
                                            lineBreak: "<br /><br />"
                                        })
                                    }
                                }))
                        }
                    }, [r, m, x]);
                    t = N().createElement(N().Fragment, null, N().createElement("div", {
                        className: "parental-consent-modal-body"
                    }, p), N().createElement("form", {
                        className: "form-horizontal",
                        autoComplete: "off"
                    }, N().createElement("div", {
                        id: "parent-email-container",
                        className: "form-group"
                    }, N().createElement("label", {
                        htmlFor: "parent-email-address",
                        className: "form-control-label"
                    }, n(o.parentEmailLabel)), N().createElement("input", {
                        id: "parent-email-address",
                        type: "email",
                        className: "form-control input-field",
                        placeholder: n(o.emailPlaceholder),
                        autoComplete: "off",
                        value: b,
                        onChange: function(e) {
                            E(e.target.value), P("")
                        },
                        onFocus: function() {
                            return t = (e = {
                                requestType: c,
                                details: l
                            }).requestType, n = e.details, e = or(t), void Rt.eventStreamService.sendEventWithTarget(fr.eventName.authFormInteraction, e.parentalEntry, {
                                field: fr.field.email,
                                associatedText: fr.text.enterParentEmail,
                                state: ar(t, void 0, void 0, n)
                            });
                            var e, t, n
                        }
                    })), N().createElement("input", {
                        type: "text",
                        className: "hidden",
                        name: "fake-username"
                    }), N().createElement("input", {
                        type: "password",
                        className: "hidden",
                        name: "fake-password",
                        autoComplete: "new-password"
                    })), N().createElement("div", {
                        className: "form-group"
                    }, N().createElement("p", {
                        className: "text-error form-control-label"
                    }, a())), N().createElement("div", {
                        className: "text-footer access-management-upsell-inner-modal-text-footer",
                        dangerouslySetInnerHTML: {
                            __html: n(o.footer, {
                                linkStart: "<a class='text-link' rel='noreferrer' target='_blank' href='" + t + "'>",
                                linkEnd: "</a>"
                            })
                        }
                    }));
                    return [N().createElement(M.Modal, {
                        show: f,
                        onHide: function() {
                            C.close(), e()
                        },
                        backdrop: !0,
                        className: "access-management-upsell-inner-modal",
                        size: "sm",
                        "aria-labelledby": "access-management-upsell-inner-modal-title",
                        centered: !0
                    }, N().createElement(M.Modal.Header, {
                        useBaseBootstrapComponent: !0
                    }, N().createElement("div", {
                        className: "access-management-upsell-inner-modal-title-container"
                    }, N().createElement(M.Modal.Title, {
                        id: "access-management-upsell-inner-modal-title"
                    }, v)), N().createElement("button", {
                        type: "button",
                        className: "close close-button",
                        onClick: function() {
                            C.close(), e()
                        }
                    }, N().createElement("span", {
                        className: "icon-close"
                    }))), N().createElement(M.Modal.Body, null, t), N().createElement(M.Modal.Footer, null, N().createElement(M.Button, {
                        variant: M.Button.variants.primary,
                        size: M.Button.sizes.medium,
                        width: M.Button.widths.full,
                        isDisabled: "" === b || "" !== a(),
                        isLoading: g,
                        onClick: function() {
                            return yr(void 0, void 0, void 0, function() {
                                return br(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return y(!0), [4, k()];
                                        case 1:
                                            return e.sent(), [2]
                                    }
                                })
                            })
                        }
                    }, n(o.btnText)))), C]
                },
                wr = function(e, i, c, u) {
                    return new(c = c || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                Sr = function(n, r) {
                    var a, o, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                c.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && c.label < i[1]) {
                                                c.label = i[1], i = t;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(t);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, c)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                Cr = {
                    getLinkedParentEmails: function() {
                        return wr(void 0, void 0, Promise, function() {
                            var t;
                            return Sr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return t = {
                                            url: Gn,
                                            withCredentials: !0
                                        }, [4, i.httpService.get(t)];
                                    case 1:
                                        return [2, e.sent().data]
                                }
                            })
                        })
                    }
                },
                Ar = function(e, i, c, u) {
                    return new(c = c || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                Pr = function(n, r) {
                    var a, o, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                c.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && c.label < i[1]) {
                                                c.label = i[1], i = t;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(t);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, c)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                xr = (0, r.withTranslations)(function(e) {
                    var t = e.translate,
                        n = e.recourse,
                        r = e.onHidecallback,
                        a = e.value,
                        o = void 0 === a ? null : a,
                        a = e.expChildModalType,
                        e = void 0 === a ? null : a,
                        a = Qn.translationKeys.emailSentConfirmation,
                        i = n.action,
                        n = n.parentConsentTypes,
                        c = null == n ? void 0 : n[0],
                        n = (0, I.useState)([]),
                        u = n[0],
                        l = n[1],
                        n = (0, I.useState)(!0),
                        s = n[0],
                        f = n[1],
                        d = N().createElement("p", {
                            dangerouslySetInnerHTML: {
                                __html: t(a.oneParentBody, {
                                    parentEmail: u[0]
                                })
                            }
                        }),
                        p = N().createElement("p", null, t(a.pluralParentBody)),
                        m = N().createElement("p", null, t(a.emailNotSentBody)),
                        n = (0, I.useMemo)(function() {
                            return s ? 1 === u.length ? d : p : m
                        }, [s, u]),
                        n = Jn({
                            translate: t,
                            title: t(a.title),
                            body: n,
                            actionButtonTranslateKey: a.btnText,
                            onAction: function() {
                                h.close(), r()
                            },
                            onHide: r
                        }),
                        a = n[0],
                        h = n[1];
                    (0, I.useEffect)(function() {
                        i === bt.ParentConsentRequest && Ar(void 0, void 0, void 0, function() {
                            return Pr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Cr.getLinkedParentEmails().then(function(e) {
                                            l(e.parentEmails)
                                        })];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            })
                        })
                    }, [i]);
                    n = function(e, t, n) {
                        t && l([t]), n && f(!1), h.open(), c === rr.UpdateBirthdate ? (n = null == o ? void 0 : o.newBirthdate, n = new Date(n), n = pr.getAgeRange(n), ir({
                            requestType: rr.UpdateBirthdate,
                            extraState: n,
                            sessionId: e
                        })) : ir({
                            requestType: c,
                            sessionId: e,
                            details: o
                        })
                    };
                    return N().createElement("div", null, i === bt.ParentConsentRequest && N().createElement(cr, {
                        translate: t,
                        consentType: c,
                        successCallBack: n,
                        onHideCallback: r,
                        value: o
                    }), i === bt.ParentLinkRequest && N().createElement(vr, {
                        translate: t,
                        consentType: c,
                        successCallback: n,
                        onHidecallback: r,
                        value: o,
                        expChildModalType: e
                    }), a)
                }, {
                    common: ["CommonUI.Controls", "CommonUI.Features", "Amp.Upsell"],
                    feature: "Feature.Parents"
                }),
                kr = {
                    CanCorrectAge: "PrologueSetting.PromptLine.CanCorrectAge"
                },
                Tr = {};

            function Ir(e, t, n) {
                return n(Tr[e] || t)
            }

            function Nr(e, t, n, r, a) {
                if (void 0 !== (null == a ? void 0 : a.enablePurchases)) return r(Nn.VpcEnablePurchase);
                a = a, e = "CanChangeSetting" === (e = e) && void 0 !== (null == a ? void 0 : a.contentAgeRestriction) ? "PrologueSetting.PromptLine.CanChangeSetting" : kr[e];
                return e ? r(e) + ", " + r(n) : r(t)
            }

            function Mr(e, t) {
                return (e ? e + ", " : "") + (t ? "settingName: " + t + ", " : "")
            }
            var Rr = {
                state: {
                    U13To18: "U13To18",
                    U13To1318: "U13To1318",
                    U13ToU13: "U13ToU13"
                },
                text: {
                    IdvOrVpc: "Verify Your Age/Parent Permission Needed",
                    VPC: "Parent Permission Needed",
                    VerifyId: "Verify ID",
                    EmailMyParent: "Email My Parent",
                    Cancel: 'X icon or "Cancel"'
                },
                btn: {
                    VerifyId: "verifyId",
                    EmailParent: "emailParent",
                    verifyCancel: "verifyCancel"
                },
                context: {
                    SettingsAgeChangeVerify: "settingsAgeChangeVerify",
                    UpdateSetting: "parentalEntrySettings"
                },
                eventName: {
                    AuthPageload: "authPageload",
                    AuthButtonClick: "authButtonClick"
                }
            };

            function Lr(e, t) {
                "CanCorrectAge" === e && Rt.eventStreamService.sendEventWithTarget(Rr.eventName.AuthButtonClick, Rr.context.SettingsAgeChangeVerify, {
                    btn: Rr.btn.VerifyId,
                    state: t ? Rr.state.U13To18 : Rr.state.U13To1318,
                    associatedText: Rr.text.VerifyId
                })
            }

            function Ur(e, t, n) {
                "CanCorrectAge" === e ? Rt.eventStreamService.sendEventWithTarget(Rr.eventName.AuthButtonClick, Rr.context.SettingsAgeChangeVerify, {
                    btn: Rr.btn.EmailParent,
                    state: t ? Rr.state.U13ToU13 : Rr.state.U13To1318,
                    associatedText: Rr.text.EmailMyParent
                }) : "CanChangeSetting" === e && Rt.eventStreamService.sendEventWithTarget(Rr.eventName.AuthButtonClick, Rr.context.UpdateSetting, {
                    btn: Rr.btn.EmailParent,
                    state: Mr(void 0, n),
                    associatedText: Rr.text.EmailMyParent
                })
            }

            function Dr(e) {
                var t;
                switch (e) {
                    case "Idv":
                        t = Rr.state.U13To18;
                        break;
                    case "Vpc":
                        t = Rr.state.U13ToU13;
                        break;
                    case "IdvOrVpc":
                        t = Rr.state.U13To1318
                }
                return t
            }

            function Vr(e, t, n) {
                "CanCorrectAge" === e ? (t = Dr(t), Rt.eventStreamService.sendEventWithTarget(Rr.eventName.AuthButtonClick, Rr.context.SettingsAgeChangeVerify, {
                    btn: Rr.btn.verifyCancel,
                    state: t,
                    associatedText: Rr.text.Cancel
                })) : "CanChangeSetting" === e && Rt.eventStreamService.sendEventWithTarget(Rr.eventName.AuthButtonClick, Rr.context.UpdateSetting, {
                    btn: Rr.btn.verifyCancel,
                    state: Mr(void 0, n),
                    associatedText: Rr.text.Cancel
                })
            }

            function Br(e, t, n) {
                "CanCorrectAge" === e ? (t = Dr(t), Rt.eventStreamService.sendEventWithTarget(Rr.eventName.AuthPageload, Rr.context.SettingsAgeChangeVerify, {
                    state: t,
                    associatedText: Rr.text.IdvOrVpc
                })) : "CanChangeSetting" === e && Rt.eventStreamService.sendEventWithTarget(Rr.eventName.AuthPageload, Rr.context.UpdateSetting, {
                    state: Mr(void 0, n),
                    associatedText: Rr.text.VPC
                })
            }

            function Or(e) {
                var t, n = e.translate,
                    r = e.onHide,
                    a = e.recourseParameters,
                    o = T(),
                    i = [null, null],
                    c = i[0],
                    u = i[1],
                    e = b(Ct).data.recourses;
                if (1 === (i = e.map(function(e) {
                        return e.action
                    })).length) switch (i[0]) {
                    case bt.ParentConsentRequest:
                    case bt.ParentLinkRequest:
                        t = Fr({
                            translate: n,
                            onHide: r,
                            recourseParameters: a
                        }), c = t[0], u = t[1];
                        break;
                    case bt.GovernmentId:
                        t = qr({
                            translate: n,
                            onHide: r
                        }), c = t[0], u = t[1]
                }
                return 2 === i.length && i.includes(bt.GovernmentId) && (i.includes(bt.ParentConsentRequest) || i.includes(bt.ParentLinkRequest)) && (i = jr({
                    translate: n,
                    onHide: r
                }), c = i[0], u = i[1]), (0, I.useEffect)(function() {
                    c ? u.open() : o(zt(mt.Verification))
                }, [o, c, u, e]), c
            }
            var Fr = function(e) {
                    var t = e.translate,
                        n = e.onHide,
                        r = e.recourseParameters,
                        a = T(),
                        o = b(wt),
                        i = b(Ct).data.recourses,
                        c = r ? Object.keys(r)[0] : void 0,
                        u = Nn.Vpc,
                        l = Nn.VpcConnectingText,
                        e = Nr(o, u, l, t, r),
                        u = N().createElement("div", null, N().createElement("div", {
                            className: "text-description"
                        }, " ", e, " ")),
                        l = In.AskYourParent,
                        r = Ir(o, l, t),
                        e = Tn.AskNow,
                        l = Tn.Cancel,
                        e = Jn({
                            translate: t,
                            title: r,
                            body: u,
                            actionButtonTranslateKey: e,
                            neutralButtonTranslateKey: l,
                            onAction: function() {
                                Ur(o, !0, c), a(Ht(i[0])), a(zt(mt.Verification)), s.close()
                            },
                            size: "sm",
                            onHide: function() {
                                Vr(o, "Vpc", c), n()
                            },
                            onNeutral: function() {
                                Vr(o, "Vpc", c), n()
                            }
                        }),
                        l = e[0],
                        s = e[1];
                    return (0, I.useEffect)(function() {
                        s.open(), Br(o, "Vpc", c)
                    }, []), [l, s]
                },
                jr = function(e) {
                    var t = e.translate,
                        n = e.onHide,
                        r = T(),
                        a = b(wt),
                        o = b(Ct).data.recourses,
                        i = Nn.IdvAndVpc,
                        c = Nn.IdvAndVpcConnectingText,
                        u = Nr(a, i, c, t),
                        e = N().createElement("div", null, N().createElement("div", {
                            className: "text-description"
                        }, " ", u, " ")),
                        i = In.VerifyYourAge,
                        c = Ir(a, i, t),
                        u = Tn.VerifyID,
                        i = Tn.EmailMyParent,
                        u = Jn({
                            translate: t,
                            title: c,
                            body: e,
                            dualActionButton: !0,
                            actionButtonTranslateKey: u,
                            neutralButtonTranslateKey: i,
                            onAction: function() {
                                Lr(a, !1);
                                var e = o.filter(function(e) {
                                    return e.action === bt.GovernmentId
                                })[0];
                                r(Ht(e)), r(zt(mt.Verification)), l.close()
                            },
                            size: "sm",
                            onHide: function() {
                                Vr(a, "IdvOrVpc"), n()
                            },
                            onNeutral: function() {
                                Ur(a, !1);
                                var e = o.filter(function(e) {
                                    return e.action !== bt.GovernmentId
                                })[0];
                                r(Ht(e)), r(zt(mt.Verification)), l.close()
                            }
                        }),
                        i = u[0],
                        l = u[1];
                    return (0, I.useEffect)(function() {
                        l.open(), Br(a, "IdvOrVpc")
                    }, []), [i, l]
                },
                qr = function(e) {
                    var t = e.translate,
                        n = e.onHide,
                        r = T(),
                        a = b(wt),
                        o = b(Ct).data.recourses,
                        i = Nn.Idv,
                        c = Nn.IdvConnectingText,
                        u = Nr(a, i, c, t),
                        e = N().createElement("div", null, N().createElement("div", {
                            className: "text-description"
                        }, " ", u, " ")),
                        i = In.VerifyYourAge,
                        c = Ir(a, i, t),
                        u = Tn.VerifyID,
                        i = Tn.Cancel,
                        u = Jn({
                            translate: t,
                            title: c,
                            body: e,
                            actionButtonTranslateKey: u,
                            neutralButtonTranslateKey: i,
                            onAction: function() {
                                Lr(a, !0), r(Ht(o[0])), r(zt(mt.Verification)), l.close()
                            },
                            size: "sm",
                            onHide: function() {
                                Vr(a, "Idv"), n()
                            },
                            onNeutral: function() {
                                Vr(a, "Idv"), n()
                            }
                        }),
                        i = u[0],
                        l = u[1];
                    return (0, I.useEffect)(function() {
                        l.open(), Br(a, "Idv")
                    }, []), [i, l]
                };

            function _r() {
                return N().createElement(M.Loading, null)
            }
            var Hr = function(e, i, c, u) {
                    return new(c = c || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                zr = function(n, r) {
                    var a, o, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                c.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && c.label < i[1]) {
                                                c.label = i[1], i = t;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(t);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, c)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                Gr = function(e) {
                    var t = (0, I.useState)({}),
                        n = t[0],
                        r = t[1];
                    return (0, I.useEffect)(function() {
                        var t;
                        t = e, Hr(void 0, void 0, Promise, function() {
                            return zr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return null !== a.ExperimentationService && void 0 !== a.ExperimentationService && a.ExperimentationService.getAllValuesForLayer ? [4, a.ExperimentationService.getAllValuesForLayer(t)] : [3, 2];
                                    case 1:
                                        return [2, e.sent()];
                                    case 2:
                                        return [2, {}]
                                }
                            })
                        }).then(function(e) {
                            r(e)
                        }, function() {
                            r({})
                        })
                    }, [e]), n
                },
                Kr = function(e, i, c, u) {
                    return new(c = c || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                Wr = function(n, r) {
                    var a, o, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                c.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && c.label < i[1]) {
                                                c.label = i[1], i = t;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(t);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, c)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                };

            function Yr(e) {
                var t, n = e.translate,
                    f = T(),
                    r = b(At),
                    a = b(Ct),
                    o = b(Et),
                    i = b(Pt),
                    c = (0, I.useState)(function(e) {
                        return e
                    }),
                    u = c[0],
                    d = c[1],
                    l = (e = (0, I.useState)({}))[0],
                    p = e[1],
                    e = (c = (0, I.useState)(!1))[0],
                    m = c[1],
                    h = null !== (c = Gr("AccountManagement.VerifiedParentalConsent.ChildExperience").expNewChildModal) && void 0 !== c ? c : gr.control;

                function s(l) {
                    var s;
                    return Kr(this, void 0, void 0, function() {
                        var t, n, r, a, o, i, c, u;
                        return Wr(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    t = l.detail, n = t.featureName, r = t.redirectLink, a = t.ampFeatureCheckData, o = t.isAsyncCall, u = t.usePrologue, i = t.ampRecourseData, c = t.closeCallback, d(function() {
                                        return function(e) {
                                            return c(e)
                                        }
                                    }), e.label = 1;
                                case 1:
                                    return e.trys.push([1, 3, , 4]), [4, f(Ot({
                                        featureName: n,
                                        ampFeatureCheckData: a
                                    }))];
                                case 2:
                                    return e.sent(), [3, 4];
                                case 3:
                                    return e.sent(), [3, 4];
                                case 4:
                                    return f(_t(r)), m(o), a && f(qt(a)), i && p(i), u = u, null !== (s = i) && void 0 !== s && s.enablePurchases && h !== gr.control && (u = !1), f(zt(u ? mt.Prologue : mt.Verification)), [2]
                            }
                        })
                    })
                }

                function v() {
                    f(jt()), u(a.data.access)
                }(0, I.useEffect)(function() {
                    var e = s;
                    return window.addEventListener(kn, e),
                        function() {
                            return window.removeEventListener(kn, e)
                        }
                }, [h]), (0, I.useEffect)(function() {
                    var e, t = [dt.Granted, dt.Denied];
                    null !== (e = null == a ? void 0 : a.data) && void 0 !== e && e.access && t.includes(a.data.access) && u(a.data.access)
                }, [a]);
                var g = e ? function() {
                    f(jt()), u(dt.Denied)
                } : v;

                function y() {
                    if (i) switch (i.action) {
                        case bt.AddedEmail:
                            return N().createElement(Vn, {
                                translate: n,
                                onHide: v
                            });
                        case bt.GovernmentId:
                            return N().createElement(qn, {
                                translate: n,
                                onHidecallback: g
                            });
                        case bt.ParentConsentRequest:
                        case bt.ParentLinkRequest:
                            return N().createElement(xr, {
                                recourse: i,
                                translate: n,
                                onHidecallback: g,
                                value: l,
                                expChildModalType: h
                            });
                        default:
                            return N().createElement(_n, {
                                translate: n
                            })
                    }
                    return N().createElement(_n, {
                        translate: n
                    })
                }
                switch ((0, I.useEffect)(function() {
                    t = y()
                }, [i]), r) {
                    case mt.Prologue:
                        null != a.data && (t = N().createElement(Or, {
                            translate: n,
                            onHide: g,
                            recourseParameters: l
                        }));
                        break;
                    case mt.Verification:
                        null != a.data && (t = y());
                        break;
                    case mt.Epilogue:
                        t = N().createElement(_n, {
                            translate: n
                        });
                        break;
                    default:
                        t = N().createElement(_r, null)
                }
                return N().createElement(N().Fragment, null, N().createElement(M.Modal, {
                    show: o,
                    onHide: v,
                    size: "sm",
                    "aria-labelledby": "access-management-modal-title",
                    className: "access-management-upsell-modal",
                    scrollable: "true",
                    centered: "true"
                }, t))
            }
            var $r = (0, r.withTranslations)(function(e) {
                    return e = e.translate, N().createElement(C, {
                        store: xn
                    }, N().createElement(Yr, {
                        translate: e
                    }))
                }, {
                    common: ["CommonUI.Controls", "CommonUI.Features", "Amp.Upsell"],
                    feature: "Verification.Identity"
                }),
                Jr = function(e, i, c, u) {
                    return new(c = c || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                Qr = function(n, r) {
                    var a, o, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                c.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && c.label < i[1]) {
                                                c.label = i[1], i = t;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(t);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, c)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                r = function(e) {
                    var n = e.featureName,
                        t = e.redirectLink,
                        r = void 0 === t ? null : t,
                        t = e.ampFeatureCheckData,
                        a = void 0 === t ? [] : t,
                        t = e.isAsyncCall,
                        o = void 0 === t || t,
                        t = e.usePrologue,
                        i = void 0 !== t && t,
                        e = e.ampRecourseData,
                        c = void 0 === e ? null : e;
                    return Jr(void 0, void 0, Promise, function() {
                        return Qr(this, function(e) {
                            return [2, new Promise(function(t) {
                                var e = new CustomEvent(kn, {
                                    detail: {
                                        featureName: n,
                                        redirectLink: r,
                                        ampFeatureCheckData: a,
                                        isAsyncCall: o,
                                        usePrologue: i,
                                        ampRecourseData: c,
                                        closeCallback: function(e) {
                                            t(e === dt.Granted)
                                        }
                                    }
                                });
                                window.dispatchEvent(e)
                            })]
                        })
                    })
                };

            function Xr() {
                var e = document.getElementById(n);
                e ? (0, t.render)(N().createElement($r, null), e) : window.requestAnimationFrame(Xr)
            }
            e().AccessManagementUpsellV2Service = {
                startAccessManagementUpsell: r
            }, (0, i.ready)(function() {
                n && Xr()
            })
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/d037600154e1b9d718186f4b8c259e57-accessManagementUpsellV2.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("AccessManagementUpsellV2");