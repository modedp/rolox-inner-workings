! function() {
    var n = {
            2779: function(t, e) {
                var n;
                /*!
                	Copyright (c) 2018 Jed Watson.
                	Licensed under the MIT License (MIT), see
                	http://jedwatson.github.io/classnames
                */
                ! function() {
                    "use strict";
                    var a = {}.hasOwnProperty;

                    function u() {
                        for (var t = [], e = 0; e < arguments.length; e++) {
                            var n = arguments[e];
                            if (n) {
                                var r, o = typeof n;
                                if ("string" == o || "number" == o) t.push(n);
                                else if (Array.isArray(n)) !n.length || (r = u.apply(null, n)) && t.push(r);
                                else if ("object" == o)
                                    if (n.toString === Object.prototype.toString || n.toString.toString().includes("[native code]"))
                                        for (var i in n) a.call(n, i) && n[i] && t.push(i);
                                    else t.push(n.toString())
                            }
                        }
                        return t.join(" ")
                    }
                    t.exports ? (u.default = u, t.exports = u) : void 0 === (n = function() {
                        return u
                    }.apply(e, [])) || (t.exports = n)
                }()
            }
        },
        r = {};

    function J(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = {
            exports: {}
        };
        return n[t](e, e.exports, J), e.exports
    }
    J.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return J.d(e, {
                a: e
            }), e
        }, J.d = function(t, e) {
            for (var n in e) J.o(e, n) && !J.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
        }, J.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        function() {
            "use strict";

            function t(t, e) {
                var n = (0, a.useRef)(t);
                (0, a.useEffect)(function() {
                    n.current = t
                }, [t]), (0, a.useEffect)(function() {
                    if (null !== e) {
                        var t = setInterval(function() {
                            return n.current()
                        }, e);
                        return function() {
                            clearInterval(t)
                        }
                    }
                }, [e])
            }

            function e(n, e) {
                function r() {
                    if ("undefined" == typeof window) return e;
                    try {
                        var t = window.localStorage.getItem(n);
                        return t ? JSON.parse(t) : e
                    } catch (t) {
                        return console.warn("Error reading localStorage key “" + n + "”:", t), e
                    }
                }
                var t = (0, a.useState)(r),
                    o = t[0],
                    i = t[1];
                return (0, a.useEffect)(function() {
                    i(r())
                }, []), (0, a.useEffect)(function() {
                    function t() {
                        i(r())
                    }
                    return window.addEventListener("storage", t), window.addEventListener("local-storage", t),
                        function() {
                            window.removeEventListener("storage", t), window.removeEventListener("local-storage", t)
                        }
                }, []), [o, function(t) {
                    "undefined" == typeof window && console.warn("Tried setting localStorage key “" + n + "” even though environment is not a client");
                    try {
                        var e = t instanceof Function ? t(o) : t;
                        window.localStorage.setItem(n, JSON.stringify(e)), i(e), window.dispatchEvent(new Event("local-storage"))
                    } catch (t) {
                        console.warn("Error setting localStorage key “" + n + "”:", t)
                    }
                }]
            }

            function n() {
                var t = (0, a.useState)(!1),
                    e = t[0],
                    n = t[1],
                    r = (0, a.useCallback)(function() {
                        n(!0)
                    }, []),
                    o = (0, a.useCallback)(function() {
                        n(!1)
                    }, []);
                return (0, a.useEffect)(function() {
                    return i.forEach(function(t) {
                            window.addEventListener(t, r)
                        }), u.forEach(function(t) {
                            window.addEventListener(t, o)
                        }),
                        function() {
                            i.forEach(function(t) {
                                window.removeEventListener(t, r)
                            }), u.forEach(function(t) {
                                window.removeEventListener(t, o)
                            })
                        }
                }, [r, o]), e
            }
            var a = React,
                s = J.n(a),
                i = ["focus", "click", "hover", "scroll", "mouseover", "mouseenter", "mousedown", "dblclick", "keypress", "touchstart", "touchmove"],
                u = ["blur"],
                c = Roblox,
                r = 2,
                o = window.RobloxError,
                f = function(t) {
                    return "string" != typeof t ? (new o("Invalid namespace name, required a string").throw(), null) : t.split(".")
                };

            function l(t) {
                var e = t.common,
                    n = t.feature,
                    t = {};
                return !Array.isArray(e) || null !== n && "string" != typeof n ? (new o("Invalid namespaces config!").throw(), t) : Object.assign(t, {
                    feature: n,
                    common: e.filter(function(t) {
                        t = f(t);
                        return !(!Array.isArray(t) || t.length !== r)
                    })
                })
            }
            var p = function(t, e) {
                    for (var n = 0, r = e.length, o = t.length; n < r; n++, o++) t[o] = e[n];
                    return t
                },
                y = (0, a.createContext)(void 0);

            function d(e, t) {
                var n, r = Object.keys(e);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), r.push.apply(r, n)), r
            }

            function v(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var h = PropTypes,
                b = J.n(h),
                m = J(2779),
                g = J.n(m),
                w = function(t, e) {
                    console.warn("The following exception has been caught with the captured component stack:"), console.group(), console.info("".concat(t)), console.info("".concat(e.componentStack)), console.groupEnd()
                },
                O = function(i, t) {
                    var a = 1 < arguments.length && void 0 !== t ? t : "withHOC";
                    return function(t) {
                        for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                        var o = i.apply(void 0, [t].concat(n));
                        return o.displayName = (t = t, "".concat(a, "(").concat((t = t).displayName || t.name || "Component", ")")), o
                    }
                };

            function E(t) {
                return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function S() {
                return (S = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n, r = arguments[e];
                        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function j(t, e) {
                if (null == t) return {};
                var n, r = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], 0 <= e.indexOf(n) || (o[n] = t[n]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols)
                    for (var o = Object.getOwnPropertySymbols(t), i = 0; i < o.length; i++) n = o[i], 0 <= e.indexOf(n) || Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
                return r
            }

            function P(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function L(t, e) {
                return (L = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function R(n) {
                var r = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var t, e = A(n);
                    return t = r ? (t = A(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments), e = this, !(t = t) || "object" !== E(t) && "function" != typeof t ? k(e) : t
                }
            }

            function k(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function A(t) {
                return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function T(t) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function x() {
                return (x = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n, r = arguments[e];
                        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function I(t) {
                return function(t) {
                    if (Array.isArray(t)) return _(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return _(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function C(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function D(t, e) {
                return (D = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function N(n) {
                var r = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var t, e = F(n);
                    return t = r ? (t = F(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments), e = this, !(t = t) || "object" !== T(t) && "function" != typeof t ? M(e) : t
                }
            }

            function M(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function F(t) {
                return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            h = O(function(c) {
                var t = function() {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && L(t, e)
                    }(o, s().Component);
                    var t, e, n, r = R(o);

                    function o(t) {
                        var e;
                        ! function(t) {
                            if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function")
                        }(this);
                        t = (e = r.call(this, t)).props.showAppOnInit;
                        return e.state = {
                            isLoading: !t,
                            hasError: !1,
                            errorState: null
                        }, e.onLoadStart = e.onLoadStart.bind(k(e)), e.onLoadEnd = e.onLoadEnd.bind(k(e)), e.onError = e.onError.bind(k(e)), e
                    }
                    return t = o, n = [{
                        key: "getDerivedStateFromError",
                        value: function() {
                            return {
                                hasError: !0,
                                errorState: null
                            }
                        }
                    }], (e = [{
                        key: "componentDidCatch",
                        value: function(t, e) {
                            w(t, e)
                        }
                    }, {
                        key: "onLoadStart",
                        value: function() {
                            this.setState({
                                isLoading: !0
                            })
                        }
                    }, {
                        key: "onLoadEnd",
                        value: function() {
                            this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "onError",
                        value: function(t) {
                            this.setState({
                                hasError: !0,
                                errorState: t
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t, e, n = this.props,
                                r = (n.showAppOnInit, n.defaultMessage),
                                o = n.errorStates,
                                i = j(n, ["showAppOnInit", "defaultMessage", "errorStates"]),
                                a = this.state,
                                u = a.isLoading,
                                n = a.hasError,
                                a = a.errorState;
                            n ? t = s().createElement("h3", null, o[a] || r) : (t = s().createElement("span", {
                                className: "spinner spinner-default"
                            }), e = s().createElement(c, S({}, i, {
                                isLoading: u,
                                hasError: n,
                                errorState: a,
                                onLoadStart: this.onLoadStart,
                                onLoadEnd: this.onLoadEnd,
                                onError: this.onError
                            })));
                            n = n || u, u = g()("component-status-container", {
                                hidden: !n
                            }), n = g()("component-container", {
                                hidden: n
                            });
                            return s().createElement("div", {
                                className: "component-status"
                            }, s().createElement("div", {
                                className: u
                            }, t), s().createElement("div", {
                                className: n
                            }, e))
                        }
                    }]) && P(t.prototype, e), n && P(t, n), o
                }();
                return t.defaultProps = {
                    showAppOnInit: !1,
                    defaultMessage: "",
                    errorStates: {}
                }, t.propTypes = {
                    showAppOnInit: b().bool,
                    defaultMessage: b().string,
                    errorStates: b().objectOf(b().string)
                }, t
            }, "withComponentStatus"), m = O(function(r, t) {
                var a = l(t);
                return function() {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && D(t, e)
                    }(i, s().Component);
                    var t, e, n, o = N(i);

                    function i(t) {
                        var e;
                        ! function(t) {
                            if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
                        }(this), (e = o.call(this, t)).intl = new c.Intl, e.translate = e.translate.bind(M(e));
                        var n = a.common,
                            t = a.feature,
                            r = new c.TranslationResourceProvider(e.intl),
                            t = [].concat(I(n), [t]).filter(function(t) {
                                return !!t
                            }).map(function(t) {
                                return r.getTranslationResource(t)
                            });
                        return e.state = {
                            languageResources: r.mergeTranslationResources.apply(r, I(t))
                        }, e
                    }
                    return t = i, (e = [{
                        key: "translate",
                        value: function(t, e) {
                            return this.state.languageResources.get(t, e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return s().createElement(r, x({}, this.props, {
                                translate: this.translate,
                                intl: this.intl
                            }))
                        }
                    }]) && C(t.prototype, e), n && C(t, n), i
                }()
            }, "withTranslations"), O = function() {
                var t = (0, a.useContext)(y);
                if (!t) throw Error("invalid use of `useTranslation` hook. Ensure your component has an ancestor wrapped in `TranslationProvider`");
                return t
            }, window.ReactUtilities = {
                makeActionCreator: function(n) {
                    for (var t = arguments.length, o = new Array(1 < t ? t - 1 : 0), e = 1; e < t; e++) o[e - 1] = arguments[e];
                    return function() {
                        for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++) r[e] = arguments[e];
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? d(Object(n), !0).forEach(function(t) {
                                    v(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({
                            type: n
                        }, o.reduce(function(t, e, n) {
                            return Object.assign(t, v({}, e, r[n]))
                        }, {}))
                    }
                },
                withComponentStatus: h,
                withTranslations: m,
                useTranslation: O,
                TranslationProvider: function(t) {
                    var e, n, r, o = t.config,
                        i = t.children;
                    return s().createElement(y.Provider, {
                        value: (t = l(e = o), o = t.feature, e = t.common, t = new c.Intl, n = new c.TranslationResourceProvider(t), o = p(p([], e), [o]).filter(function(t) {
                            return !!t
                        }).map(function(t) {
                            return n.getTranslationResource(t)
                        }), r = n.mergeTranslationResources.apply(n, o), {
                            translate: function(t, e) {
                                return r.get(t, e)
                            },
                            intl: t
                        })
                    }, i)
                },
                useDebounce: function(e, n) {
                    var t = (0, a.useState)(e),
                        r = t[0],
                        o = t[1];
                    return (0, a.useEffect)(function() {
                        var t = setTimeout(function() {
                            o(e)
                        }, n);
                        return function() {
                            clearTimeout(t)
                        }
                    }, [e, n]), r
                },
                useInterval: t,
                useLocalStorage: e,
                useOnClickOutside: function(n, r) {
                    (0, a.useEffect)(function() {
                        function t(e) {
                            n.every(function(t) {
                                return !(null != t && t.current)
                            }) || -1 < n.findIndex(function(t) {
                                return e.target instanceof Node && (null === (t = null == t ? void 0 : t.current) || void 0 === t ? void 0 : t.contains(e.target))
                            }) || r(e)
                        }
                        return document.addEventListener("mousedown", t), document.addEventListener("touchstart", t),
                            function() {
                                document.removeEventListener("mousedown", t), document.removeEventListener("touchstart", t)
                            }
                    }, [n, r])
                },
                usePrevious: function(t) {
                    var e = (0, a.useRef)();
                    return (0, a.useEffect)(function() {
                        e.current = t
                    }, [t]), e.current
                },
                useWindowActiveState: n
            }
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/6d034812b7a5e8d44b205a43951db75a-reactUtilities.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ReactUtilities");