! function() {
    var n = {
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

                    function l() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            if (n) {
                                var o, a = typeof n;
                                if ("string" == a || "number" == a) e.push(n);
                                else if (Array.isArray(n)) !n.length || (o = l.apply(null, n)) && e.push(o);
                                else if ("object" == a)
                                    if (n.toString === Object.prototype.toString || n.toString.toString().includes("[native code]"))
                                        for (var r in n) i.call(n, r) && n[r] && e.push(r);
                                    else e.push(n.toString())
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (l.default = l, e.exports = l) : void 0 === (n = function() {
                        return l
                    }.apply(t, [])) || (e.exports = n)
                }()
            },
            386: function(e) {
                e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAOCAYAAADT0Rc6AAAACXBIWXMAAACWAAAAlgEGQc5mAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAkZJREFUOI2VlE1IVFEYhp9zZqwZTaeNCdEiIgzLVmFUY4swadFyaFFQoNYwLlpJjhmaAxXWCBL9OWaQkUILWwSBZJTBMNOP5UL6oSLIoHIhQ/iT48zc0+Kqd+7cMcd39b3vd77v/e655xxBJryqDWgA1llyq8c00EG3CKSLYinyKTcaYZeT5BUPsroMmb9mKZvQFDFNIwZo6Q02NVGWk73CzW0RMUwXDHuOE6+rZG2un5HUIK8+19WAYB8hEbUDoBG+c4JUrTt3Q4D7L1ezGlBEACGlT7W4nKRq3dhWqik4DY/HDH5jOK1fCLz7Db57s6458jKaeFWzXUBT0LOyYWkLlBTB4Z2GNvLdiHddhLfn9C0fHYdXZ6GmF+YSllaN9pRG/qEdZvXzBJSWGNzTBT9iMHvN0CZnzDXvxqHiErxp1rmvD+5Gss7vkgDCOMNMzcG2VuiN6rzzKTwchYmged2tYWu36bgRz8St+UXYbZK/Qx9w1rp1odABUT/svQyffkP7IIydhyKnufDmCzPfWgwfA9A4AOGvEPGDpqD/tcVzSiroODNAKl3ds0Uvah+EezVQvtE67a8/Zv7lArQ+guATiH6DyiD01cH6jGERdAhQAi9a/0m0oxXI5TfFwPufUB4wa4UO/dekI88GiZRZo1sICUKhUXWsB/lgBOtZy4Lrz61apiFkMZQcgPRn8JQ6iGBoQxHJziPYq7eDM/OOLaC4IetV+D8kVXSJZ2ZTgDYlCybpnJ2nXimWsVwV5oGrhPAjhFoU/wFkb7M55NWangAAAABJRU5ErkJggg=="
            }
        },
        o = {};

    function de(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        t = o[e] = {
            exports: {}
        };
        return n[e](t, t.exports, de), t.exports
    }
    de.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return de.d(t, {
                a: t
            }), t
        }, de.d = function(e, t) {
            for (var n in t) de.o(t, n) && !de.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, de.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var y = React,
                h = de.n(y),
                o = ReactDOM,
                v = CoreUtilities,
                a = "account-settings-language-selector",
                e = {
                    common: ["CommonUI.Features"],
                    feature: "Feature.Tracking"
                },
                t = de(386),
                r = [{
                    name: "about",
                    path: "/info/about-us",
                    labelTranslationKey: "Label.AboutUs"
                }, {
                    name: "jobs",
                    path: "/info/jobs",
                    labelTranslationKey: "Label.Jobs"
                }, {
                    name: "blog",
                    path: "/info/blog",
                    labelTranslationKey: "Label.sBlog"
                }, {
                    name: "parents",
                    path: "/info/parents",
                    labelTranslationKey: "Label.Parents"
                }, {
                    name: "help",
                    path: "/info/help",
                    labelTranslationKey: "Label.Help"
                }, {
                    name: "terms",
                    path: "/info/terms",
                    labelTranslationKey: "Label.Terms"
                }, {
                    name: "accessibility",
                    path: "/info/accessibility",
                    labelTranslationKey: "Label.Accessibility"
                }, {
                    name: "privacy",
                    path: "/info/privacy",
                    labelTranslationKey: "Label.Privacy"
                }, {
                    name: "your-privacy-choices",
                    path: "/my/account#!/privacy",
                    labelTranslationKey: "Label.YourPrivacyChoices",
                    postfixIcon: (d = de.n(t))()
                }],
                i = [{
                    name: "about",
                    path: "/info/about-us",
                    labelTranslationKey: "Label.AboutUs"
                }, {
                    name: "jobs",
                    path: "/info/jobs",
                    labelTranslationKey: "Label.Jobs"
                }, {
                    name: "blog",
                    path: "/info/blog",
                    labelTranslationKey: "Label.sBlog"
                }, {
                    name: "parents",
                    path: "/info/parents",
                    labelTranslationKey: "Label.Parents"
                }, {
                    name: "giftcards",
                    path: "/giftcards",
                    labelTranslationKey: "Label.GiftCards",
                    cssClass: "giftcards"
                }, {
                    name: "help",
                    path: "/info/help",
                    labelTranslationKey: "Label.Help"
                }, {
                    name: "terms",
                    path: "/info/terms",
                    labelTranslationKey: "Label.Terms"
                }, {
                    name: "accessibility",
                    path: "/info/accessibility",
                    labelTranslationKey: "Label.Accessibility"
                }, {
                    name: "privacy",
                    path: "/info/privacy",
                    labelTranslationKey: "Label.Privacy"
                }, {
                    name: "your-privacy-choices",
                    path: "/my/account#!/privacy",
                    labelTranslationKey: "Label.YourPrivacyChoices",
                    postfixIcon: d()
                }],
                n = PropTypes,
                l = de.n(n),
                c = ReactUtilities,
                s = HeaderScripts,
                b = Roblox,
                t = de.n(b);

            function u(e) {
                var t = e.translate,
                    e = (new Date).getFullYear();
                return h().createElement("p", {
                    className: "text-footer footer-note"
                }, t("Description.CopyRightMessageDynamicYear", {
                    copyrightYear: e
                }))
            }
            u.propTypes = {
                translate: l().func.isRequired
            };
            var p = u,
                d = de(870),
                L = de.n(d),
                E = ReactStyleGuide,
                f = "Heading.CookieSettings",
                n = b.EnvironmentUrls.universalAppConfigurationApi,
                m = {
                    getCookiePolicyConfig: {
                        withCredentials: !0,
                        url: "".concat(n, "/v1/behaviors/cookie-policy/content")
                    }
                };

            function g(e, t, n, o, a, r, i) {
                try {
                    var l = e[r](i),
                        c = l.value
                } catch (e) {
                    return void n(e)
                }
                l.done ? t(c) : Promise.resolve(c).then(o, a)
            }

            function C(e) {
                var t = e.cookieName,
                    e = e.description;
                return h().createElement("div", {
                    className: "cookie-item"
                }, h().createElement("p", {
                    className: "cookie-name font-body text"
                }, t), h().createElement("p", {
                    className: "cookie-description font-footer"
                }, e))
            }

            function A(e) {
                var t = e.translate,
                    n = e.isNonEssentialCookieListVisible,
                    o = L()({
                        hidden: !n
                    }),
                    a = w.GACompanyCollectionList.map(function(e) {
                        return h().createElement("div", {
                            className: "google-analytics-company-info-sec",
                            key: e.label
                        }, h().createElement("p", {
                            className: "font-caption-header text-emphasis"
                        }, t(e.label)), h().createElement("p", {
                            className: "font-caption-body text"
                        }, t(e.content)))
                    }),
                    r = h().createElement("a", {
                        className: "text-link",
                        target: "_blank",
                        href: N.googleAnalyticsReadMore,
                        rel: "noreferrer"
                    }, t(w.googleAnalytics)),
                    n = (e = t(w.GAReadMore)).indexOf(w.GAReadMoreUrl),
                    r = h().createElement("p", {
                        className: "font-caption-body text"
                    }, e.substring(0, n), r),
                    a = h().createElement("div", null, h().createElement(E.Link, {
                        cssClasses: "font-header-2 text-emphasis",
                        url: N.googleAnalyticsWebsite
                    }, t(w.googleAnalytics), h().createElement("span", {
                        className: "icon-nav-external-link-sm cookie-external-link-icon"
                    })), h().createElement("div", null, h().createElement("span", {
                        className: "google-analytics-info-subheader"
                    }, t(w.ownedBy)), h().createElement("span", {
                        className: "font-caption-header text-emphasis"
                    }, w.googleInc)), h().createElement("p", {
                        className: "text-emphasis google-analytics-company-info-sec"
                    }, t(w.googleAnalyticsPurposeHeader)), h().createElement("span", {
                        className: "font-caption-body text"
                    }, t(w.googleAnalyticsPurposeDescription)), h().createElement("p", {
                        className: "text-emphasis google-analytics-company-info-sec"
                    }, t(w.companyCollectionHeader)), a, r),
                    r = h().createElement("div", {
                        className: "analytics-cookie-list"
                    }, h().createElement(C, {
                        cookieName: w.RBXViralAcquisition.cookieName,
                        description: t(w.RBXViralAcquisition.description)
                    }), h().createElement(C, {
                        cookieName: w.RBXSource.cookieName,
                        description: t(w.RBXSource.description)
                    }));
                return h().createElement("div", {
                    className: o
                }, r, a)
            }

            function k(e) {
                var t = e.nonEssentialCookieList,
                    n = e.essentialCookieList,
                    o = e.translate,
                    a = e.closeConsentTool,
                    r = (f = (0, y.useState)(!1))[0],
                    i = f[1],
                    l = (m = (0, y.useState)(!1))[0],
                    c = m[1],
                    s = (g = (0, y.useState)(!1))[0],
                    u = g[1];
                (0, y.useEffect)(function() {
                    O.open()
                }, []);
                var p = L()({
                        hidden: !l
                    }),
                    d = L()("cookie-consent-tool-collaps", {
                        on: s
                    }),
                    e = L()("cookie-consent-tool-collaps font-header-2 text-emphasis ", {
                        on: l
                    }),
                    f = (new b.Intl).getRobloxLocale(),
                    m = v.urlService.getUrlWithLocale(N.privacyPolicyUrl, f),
                    g = h().createElement("div", {
                        className: "cookie-consent-tool-info-link"
                    }, h().createElement("a", {
                        className: "text-link",
                        target: "_blank",
                        href: m,
                        rel: "noreferrer"
                    }, o(T), h().createElement("span", {
                        className: "icon-nav-external-link-sm cookie-external-link-icon"
                    }))),
                    f = h().createElement("div", {
                        className: "cookie-consent-tool-info-link"
                    }, h().createElement("a", {
                        className: "text-link",
                        target: "_blank",
                        href: N.supportUrl,
                        rel: "noreferrer"
                    }, o(w.requestData), h().createElement("span", {
                        className: "icon-nav-external-link-sm cookie-external-link-icon"
                    }))),
                    m = h().createElement("div", null, h().createElement("div", {
                        className: "static-section"
                    }, h().createElement("div", {
                        className: "font-header-2 text-emphasis google-analytics-company-info-sec"
                    }, o(w.infoCollectionHeader)), h().createElement("p", {
                        className: "font-caption-body text"
                    }, o(w.infoCollectionContent))), h().createElement("div", {
                        className: "static-section"
                    }, h().createElement("div", {
                        className: "font-header-2 text-emphasis google-analytics-company-info-sec"
                    }, o(w.infoCollectionHeader2)), h().createElement("p", {
                        className: "font-caption-body text"
                    }, o(w.infoCollectionContent2))), h().createElement("div", {
                        className: "static-section"
                    }, h().createElement("div", {
                        className: "font-header-2 text-emphasis google-analytics-company-info-sec"
                    }, o(w.infoPartnerCollectionHeader)), h().createElement("p", {
                        className: "font-caption-body text"
                    }, o(w.infoPartnerCollectionContent)))),
                    d = h().createElement("div", null, h().createElement("button", {
                        className: d,
                        type: "button",
                        onClick: function() {
                            return u(!s)
                        }
                    }, h().createElement("span", {
                        className: "font-header-2 text-emphasis"
                    }, o("Heading.AnalyticsCookies"))), h().createElement(E.Toggle, {
                        className: "cookie-toggle",
                        isOn: r,
                        onToggle: function() {
                            return i(!r)
                        }
                    })),
                    n = n.map(function(e) {
                        return h().createElement(C, {
                            key: e.cookieName,
                            cookieName: e.cookieName,
                            description: o(e.description)
                        })
                    }),
                    g = h().createElement("div", null, f, g),
                    n = h().createElement("div", {
                        className: "essential-cookie-section"
                    }, h().createElement("button", {
                        className: e,
                        type: "button",
                        onClick: function() {
                            return c(!l)
                        }
                    }, o(w.essentialCookie)), h().createElement("div", {
                        className: p
                    }, n)),
                    d = h().createElement("div", {
                        className: "cookie-consent-tool-body"
                    }, m, g, n, d, h().createElement(A, {
                        isNonEssentialCookieListVisible: s,
                        translate: o
                    }));
                return h().createElement(B, {
                    title: o(w.consentToolModalTitle),
                    body: d,
                    actionButtonShow: !0,
                    actionButtonText: o(w.saveBtn),
                    neutralButtonText: o(w.cancelBtn),
                    onAction: function() {
                        D(r ? t : [], t), a(null)
                    },
                    onNeutral: function() {
                        return a(R.banner)
                    },
                    id: "cookie-consent-tool-modal"
                })
            }
            var S = {
                    getCookiePolicy: function() {
                        var l, e = (l = regeneratorRuntime.mark(function e() {
                            var t, n;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = m.getCookiePolicyConfig, e.next = 3, v.httpService.get(t);
                                    case 3:
                                        if (void 0 !== (t = e.sent)) return n = t.data, e.abrupt("return", n);
                                        e.next = 7;
                                        break;
                                    case 7:
                                        return n = {
                                            ShouldDisplayCookieBannerV3: !1,
                                            NonEssentialCookieList: [],
                                            EssentialCookieList: []
                                        }, e.abrupt("return", n);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }), function() {
                            var e = this,
                                i = arguments;
                            return new Promise(function(t, n) {
                                var o = l.apply(e, i);

                                function a(e) {
                                    g(o, t, n, a, r, "next", e)
                                }

                                function r(e) {
                                    g(o, t, n, a, r, "throw", e)
                                }
                                a(void 0)
                            })
                        });
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                w = {
                    consentToolModalTitle: "Heading.CookieSettings",
                    saveBtn: "Action.SavePreferences",
                    cancelBtn: "Action.Cancel",
                    infoCollectionHeader: "Heading.InformationCollection",
                    infoCollectionContent: "Description.InformationCollection",
                    infoCollectionHeader2: "Heading.InformationCollection2",
                    infoCollectionContent2: "Description.InformationCollection2",
                    infoPartnerCollectionHeader: "Heading.InformationPartnerCollection",
                    infoPartnerCollectionContent: "Description.InformationPartnerCollection",
                    RBXViralAcquisition: {
                        cookieName: "RBXViralAcquisition",
                        description: "Description.RBXViralAcquisition"
                    },
                    RBXSource: {
                        cookieName: "RBXSource",
                        description: "Description.RBXSource"
                    },
                    googleAnalytics: "Heading.GoogleAnalytics",
                    ownedBy: "Label.OwnedBy",
                    googleInc: "Google Inc.",
                    website: "Label.Website",
                    googleAnalyticsPurposeHeader: "Heading.GoogleAnalyticsPurpose",
                    googleAnalyticsPurposeDescription: "Description.GoogleAnalyticsPurpose",
                    companyCollectionHeader: "Heading.CompanyCollection",
                    GACompanyCollectionList: [{
                        label: "Label.DataCollected",
                        content: "Description.DataCollected"
                    }, {
                        label: "Label.DataSharing",
                        content: "Description.DataSharing"
                    }, {
                        label: "Label.DataRetention",
                        content: "Description.DataRetention"
                    }, {
                        label: "Label.DataUse",
                        content: "Description.DataUse"
                    }, {
                        label: "Label.DataStorage",
                        content: "Description.Undisclosed"
                    }],
                    requestData: "Action.RequestData",
                    essentialCookie: "Heading.EssentialCookies",
                    analyticsCookie: "Heading.AnalyticsCookies",
                    GAReadMore: "Description.GAReadMore",
                    GAReadMoreUrl: "{googleAnalyticsLink}"
                },
                d = b.Endpoints.getAbsoluteUrl,
                n = b.EnvironmentUrls.universalAppConfigurationApi,
                N = {
                    privacyPolicyUrl: d("/info/privacy"),
                    getCookiePolicyConfig: {
                        withCredentials: !0,
                        url: n + "/v1/behaviors/cookie-policy/content"
                    },
                    googleAnalyticsWebsite: "https://marketingplatform.google.com/about/analytics/",
                    supportUrl: d("/support"),
                    googleAnalyticsReadMore: "https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                },
                U = "RBXcb",
                x = 180,
                T = "Description.PrivacyPolicy",
                P = function(e, t, n) {
                    var o = new Date;
                    o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
                    o = "expires=" + o.toUTCString();
                    document.cookie = e + "=" + t + ";" + o
                },
                D = function(n, o) {
                    var a = "";
                    o.forEach(function(e, t) {
                        -1 !== n.indexOf(e) ? a += e + "=true&" : a += e + "=false&", t === o.length - 1 && (a = a.slice(0, -1))
                    }), P(U, a, x)
                },
                R = {
                    banner: "banner",
                    consentTool: "consentTool"
                },
                B = (n = (0, E.createModal)())[0],
                O = n[1];

            function I(e, t, n, o, a, r, i) {
                try {
                    var l = e[r](i),
                        c = l.value
                } catch (e) {
                    return void n(e)
                }
                l.done ? t(c) : Promise.resolve(c).then(o, a)
            }

            function M(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        o = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(o = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); o = !0);
                    } catch (e) {
                        a = !0, r = e
                    } finally {
                        try {
                            o || null == l.return || l.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return j(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function F(e) {
                var t = e.translate,
                    n = M((0, y.useState)([]), 2),
                    o = n[0],
                    a = n[1],
                    r = M((0, y.useState)([]), 2),
                    e = r[0],
                    i = r[1],
                    n = M((0, y.useState)(!1), 2),
                    r = n[0],
                    l = n[1];
                (0, y.useEffect)(function() {
                    (function() {
                        var l, e = (l = regeneratorRuntime.mark(function e() {
                            var t;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, S.getCookiePolicy();
                                    case 2:
                                        (t = e.sent).ShouldDisplayCookieBannerV3 && t.NonEssentialCookieList && (a(t.NonEssentialCookieList), i(t.EssentialCookieList));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }), function() {
                            var e = this,
                                i = arguments;
                            return new Promise(function(t, n) {
                                var o = l.apply(e, i);

                                function a(e) {
                                    I(o, t, n, a, r, "next", e)
                                }

                                function r(e) {
                                    I(o, t, n, a, r, "throw", e)
                                }
                                a(void 0)
                            })
                        });
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()()
                }, []);
                o = r ? h().createElement(k, {
                    nonEssentialCookieList: o,
                    essentialCookieList: e,
                    translate: t,
                    closeConsentTool: function() {
                        return l()
                    }
                }) : null;
                return 0 < e.length ? h().createElement("div", null, h().createElement(E.Button, {
                    onClick: function() {
                        l(!0)
                    },
                    className: "btn text-footer-nav cookie-consent-link",
                    variant: null,
                    size: null,
                    width: null
                }, t(f)), o) : null
            }
            F.propTypes = {
                translate: l().func.isRequired
            };
            var H = F;

            function W(e) {
                var t = e.translate,
                    o = e.intl,
                    n = r,
                    a = !1,
                    e = document.getElementById("footer-container");
                null == e || null != (e = e.getAttribute("data-is-giftcards-footer-enabled")) && (a = "true" === e.toLowerCase()), a && (n = i);
                n = n.map(function(n) {
                    var e = L()("text-footer-nav", n.cssClass);
                    return h().createElement("li", {
                        key: n.name,
                        className: "footer-link"
                    }, h().createElement(E.Link, {
                        url: v.urlService.getUrlWithLocale(n.path, o.getRobloxLocale()),
                        cssClasses: e,
                        target: "_blank",
                        onClick: function(e) {
                            return t = n.name, e = e, void(b.EventStream && b.EventStream.SendEventWithTarget("PageFooter", "click", {
                                destination: "".concat(t),
                                source: "".concat(e.currentTarget.ownerDocument.location.pathname)
                            }, b.EventStream.TargetTypes.WWW));
                            var t
                        }
                    }, t(n.labelTranslationKey), n.postfixIcon ? h().createElement("img", {
                        src: n.postfixIcon,
                        alt: "",
                        className: "footer-postfixIcon"
                    }) : ""))
                });
                return h().createElement("ul", {
                    className: "row footer-links"
                }, n, h().createElement("li", null, h().createElement(H, {
                    translate: t
                })))
            }
            W.propTypes = {
                translate: l().func.isRequired,
                intl: l().shape({
                    getRobloxLocale: l().func.isRequired
                }).isRequired
            };
            var G = W,
                K = CoreRobloxUtilities,
                d = K.eventStreamService.eventTypes,
                n = "Localization",
                q = {
                    changeLanguage: {
                        name: "changeLanguage",
                        type: d.formInteraction,
                        context: n,
                        requiredParams: ["userId", "newSupportedLocaleCode", "previousSupportedLocaleCode"]
                    },
                    changeLanguageModal: {
                        name: "changeLanguageModal",
                        type: d.formInteraction,
                        context: n,
                        requiredParams: ["userId", "newSupportedLocaleCode"]
                    }
                },
                X = 6e5;

            function z(e) {
                return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Z(e) {
                return function(e) {
                    if (Array.isArray(e)) return V(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return V(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return V(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function V(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function Y(t, e) {
                var n, o = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), o.push.apply(o, n)), o
            }

            function Q(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Y(Object(a), !0).forEach(function(e) {
                        var t, n;
                        t = o, e = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : Y(Object(a)).forEach(function(e) {
                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return o
            }

            function J(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function _(e, t) {
                return (_ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function $(n) {
                var o = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var e, t = te(n);
                    return e = o ? (e = te(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), t = this, !(e = e) || "object" !== z(e) && "function" != typeof e ? ee(t) : e
                }
            }

            function ee(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function te(e) {
                return (te = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function ne(e) {
                return e.locale && e.locale.nativeName ? e.isEnabledForFullExperience ? e.locale.nativeName : "".concat(e.locale.nativeName, "*") : ""
            }
            var oe = K.dataStores.localeDataStore;
            (n = function() {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && _(e, t)
                }(a, h().Component);
                var e, t, n, o = $(a);

                function a(e) {
                    return function(e) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this), (e = o.call(this, e)).state = {
                        supportedLocales: [],
                        userLocale: {},
                        showUnsupportedModal: !1,
                        isUserLocaleUnsupported: !1,
                        isLocaleUpdateInProgress: !1
                    }, e.handleNativeLanguageChange = e.handleNativeLanguageChange.bind(ee(e)), e.hideUnsupportedModal = e.hideUnsupportedModal.bind(ee(e)), e
                }
                return e = a, (t = [{
                    key: "componentDidMount",
                    value: function() {
                        this.loadSupportedLocales()
                    }
                }, {
                    key: "handleLanguageChange",
                    value: function(e) {
                        var t = this,
                            n = Q({}, e.locale),
                            o = this.state.userLocale,
                            a = this.props,
                            r = a.isAuthenticatedUser,
                            i = a.onLanguageChange,
                            o = Q({}, o);
                        r ? (this.setState({
                            isLocaleUpdateInProgress: !0
                        }), oe.setUserLocale(n.locale).then(function() {
                            e.isEnabledForFullExperience ? i(n) : (t.showUnsupportedLocaleMessage(), t.showUnsupportedLocaleModal(n))
                        }, function(e) {
                            console.debug(e)
                        }).finally(function() {
                            t.setState({
                                isLocaleUpdateInProgress: !1
                            })
                        })) : i(n), this.setUserLocaleByLocaleCode(n.locale), K.eventStreamService.sendEvent(q.changeLanguage, {
                            userId: s.authenticatedUser.id,
                            newSupportedLocaleCode: n.locale,
                            previousSupportedLocaleCode: o.locale.locale
                        })
                    }
                }, {
                    key: "handleNativeLanguageChange",
                    value: function(e) {
                        var t = this.state.supportedLocales,
                            n = e.target.value,
                            t = t.find(function(e) {
                                return e.locale.locale === n
                            });
                        this.handleLanguageChange(t)
                    }
                }, {
                    key: "getDefaultSelector",
                    value: function() {
                        var t = this,
                            e = this.state,
                            n = e.supportedLocales,
                            o = e.userLocale,
                            e = e.isLocaleUpdateInProgress,
                            n = n.map(function(e) {
                                return h().createElement(E.Dropdown.Item, {
                                    key: e.locale.id,
                                    onClick: function() {
                                        return t.handleLanguageChange(e)
                                    }
                                }, ne(e))
                            }),
                            o = ne(o);
                        return h().createElement(E.Dropdown, {
                            currSelectionLabel: o,
                            id: "language-switcher",
                            icon: "icon-globe",
                            disabled: e
                        }, n)
                    }
                }, {
                    key: "getNativeSelector",
                    value: function() {
                        var e = this.state,
                            t = e.supportedLocales,
                            e = e.userLocale,
                            t = t.map(function(e) {
                                return {
                                    value: e.locale.locale,
                                    key: e.locale.id,
                                    label: ne(e)
                                }
                            }),
                            e = e.locale && e.locale.locale;
                        return 0 < t.length && h().createElement(E.NativeDropdown, {
                            id: "language-switcher",
                            selectionItems: t,
                            onChange: this.handleNativeLanguageChange,
                            selectedItemvalue: e
                        })
                    }
                }, {
                    key: "setUserLocaleByLocaleCode",
                    value: function(e) {
                        e = this.findSupportedLocaleByLocaleCode(e);
                        this.setState({
                            userLocale: Q({}, e)
                        }), e.isEnabledForFullExperience || this.showUnsupportedLocaleMessage()
                    }
                }, {
                    key: "sortSupportedLocalesByFullExperience",
                    value: function(e) {
                        if (Array.isArray(e)) {
                            var t = e.filter(function(e) {
                                    return e.isEnabledForFullExperience
                                }).sort(function(e, t) {
                                    return e.locale.nativeName > t.locale.nativeName ? 1 : -1
                                }),
                                n = e.filter(function(e) {
                                    return !e.isEnabledForFullExperience
                                }).sort(function(e, t) {
                                    return e.locale.nativeName > t.locale.nativeName ? 1 : -1
                                });
                            return [].concat(Z(t), Z(n))
                        }
                        return e
                    }
                }, {
                    key: "filterLocalesBySeoSupport",
                    value: function(e) {
                        return Array.isArray(e) ? e.filter(function(e) {
                            return e.isEnabledForFullExperience && 2 === e.locale.language.languageCode.length
                        }).sort(function(e, t) {
                            return e.locale.nativeName > t.locale.nativeName ? 1 : -1
                        }) : e
                    }
                }, {
                    key: "findSupportedLocaleByLocaleCode",
                    value: function(t) {
                        return this.state.supportedLocales.find(function(e) {
                            return e.locale.locale === t
                        })
                    }
                }, {
                    key: "loadSupportedLocales",
                    value: function() {
                        var t = this;
                        oe.getLocalesWithCache(X).then(function(e) {
                            t.props.hideSeoUnsupportedLocales ? t.setState({
                                supportedLocales: t.filterLocalesBySeoSupport(e.data)
                            }) : t.setState({
                                supportedLocales: t.sortSupportedLocalesByFullExperience(e.data)
                            }), t.loadUserLocale()
                        }, function(e) {
                            console.debug(e)
                        })
                    }
                }, {
                    key: "loadUserLocale",
                    value: function() {
                        var t, n = this,
                            e = v.urlService.getQueryParam("locale");
                        e ? this.setUserLocaleByLocaleCode(e) : (t = this.props.isAuthenticatedUser, oe.getUserLocale().then(function(e) {
                            e = (t ? e.data.ugc : e.data.signupAndLogin).locale;
                            n.setUserLocaleByLocaleCode(e)
                        }, function(e) {
                            console.debug(e)
                        }))
                    }
                }, {
                    key: "showUnsupportedLocaleModal",
                    value: function(e) {
                        this.props.showWarningModalForUnsupportedLocale && (this.setState({
                            showUnsupportedModal: !0
                        }), K.eventStreamService.sendEvent(q.changeLanguageModal, {
                            userId: s.authenticatedUser.id,
                            newSupportedLocaleCode: e.locale
                        }))
                    }
                }, {
                    key: "hideUnsupportedModal",
                    value: function() {
                        (0, this.props.onLanguageChange)(this.state.userLocale)
                    }
                }, {
                    key: "showUnsupportedLocaleMessage",
                    value: function() {
                        this.props.showWarningMessageForUnsupportedLocale && this.setState({
                            isUserLocaleUnsupported: !0
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.translate,
                            n = e.isNative,
                            o = this.state,
                            a = o.showUnsupportedModal,
                            r = o.isUserLocaleUnsupported,
                            e = o.supportedLocales,
                            o = o.userLocale;
                        return h().createElement(h().Fragment, null, 0 < e.length && o.locale ? h().createElement("div", {
                            className: "language-selector-wrapper"
                        }, n ? this.getNativeSelector() : this.getDefaultSelector()) : h().createElement(E.Loading, null), h().createElement(E.SimpleModal, {
                            title: t("Heading.UnsupportedLanguage"),
                            body: t("Description.UnsupportedLanguage"),
                            show: a,
                            neutralButtonText: t("Action.Ok"),
                            onNeutral: this.hideUnsupportedModal
                        }), r && h().createElement("div", {
                            className: "row"
                        }, h().createElement("span", {
                            className: "text text-error"
                        }, t("Description.UnsupportedLanguage"))))
                    }
                }]) && J(e.prototype, t), n && J(e, n), a
            }()).defaultProps = {
                onLanguageChange: function() {},
                isAuthenticatedUser: !1,
                isNative: !1,
                showWarningModalForUnsupportedLocale: !0,
                showWarningMessageForUnsupportedLocale: !0,
                hideSeoUnsupportedLocales: !1
            }, n.propTypes = {
                isAuthenticatedUser: l().bool,
                onLanguageChange: l().func,
                isNative: l().bool,
                showWarningModalForUnsupportedLocale: l().bool,
                showWarningMessageForUnsupportedLocale: l().bool,
                translate: l().func.isRequired,
                hideSeoUnsupportedLocales: l().bool
            };
            var ae = n;

            function re(e) {
                var n = v.pageName.PageNameProvider && v.pageName.PageNameProvider.isLandingPage(),
                    t = null === s.authenticatedUser || void 0 === s.authenticatedUser ? void 0 : s.authenticatedUser.isAuthenticated,
                    o = b.DeviceMeta && new b.DeviceMeta,
                    a = o && (o.isPhone || o.isTablet),
                    r = t || n,
                    o = e.translate;
                return h().createElement("div", {
                    className: "footer"
                }, h().createElement(G, e), h().createElement("div", {
                    className: "row copyright-container"
                }, h().createElement("div", {
                    className: "col-sm-6 col-md-3"
                }, r && h().createElement(ae, {
                    translate: o,
                    onLanguageChange: function(e) {
                        var t = e.locale,
                            e = e.language;
                        n && t ? (t = Object.fromEntries(new URLSearchParams(window.location.search)), t = {
                            pathname: e.languageCode,
                            query: t
                        }, window.location.href = v.urlService.formatUrl(t)) : window.location.reload()
                    },
                    isAuthenticatedUser: t,
                    showWarningMessageForUnsupportedLocale: !1,
                    isNative: a,
                    hideSeoUnsupportedLocales: n
                })), h().createElement("div", {
                    className: r ? "col-sm-6 col-md-9" : "col-sm-12"
                }, h().createElement(p, e))))
            }
            re.propTypes = {
                translate: l().func.isRequired
            };
            var ie = re;

            function le(e) {
                var t = e.translate,
                    e = e.intl;
                return h().createElement(ie, {
                    translate: t,
                    intl: e
                })
            }
            le.propTypes = {
                translate: l().func.isRequired,
                intl: l().shape({
                    getRobloxLocale: l().func.isRequired
                }).isRequired
            };
            var ce = (0, c.withTranslations)(le, e),
                se = function(e, t) {
                    b.DeviceMeta && K.hybridService && (new b.DeviceMeta).isInApp && K.hybridService.localization && K.hybridService.localization(e, t)
                };

            function ue(e) {
                var t = e.translate,
                    e = null === s.authenticatedUser || void 0 === s.authenticatedUser ? void 0 : s.authenticatedUser.isAuthenticated;
                return h().createElement(ae, {
                    onLanguageChange: function(e) {
                        var t = e.locale;
                        t && se(t, function() {
                            console.debug("Language Change Hybrid Event: ".concat(t))
                        }), window.location.reload()
                    },
                    translate: t,
                    isAuthenticatedUser: e,
                    isNative: !0
                })
            }(t().AccountSettingsLanguageSelector = ue).propTypes = {
                translate: l().func.isRequired
            };
            var pe = (0, c.withTranslations)(ue, e);
            (0, v.ready)(function() {
                var e = document.getElementById("footer-container");
                e && (0, o.render)(h().createElement(ce, null), e);
                var t = document.getElementById(a),
                    n = 10;
                (function e() {
                    !(t = document.getElementById(a)) && 0 < n ? (--n, setTimeout(e, 200)) : t && (0, o.render)(h().createElement(pe, null), t)
                })(), -1 < window.location.pathname.toLowerCase().indexOf("/my/account") && (window.onhashchange = function() {
                    var e;
                    "#!/info" !== window.location.hash || (e = document.getElementById(a)) && (0, o.render)(h().createElement(pe, null), e)
                })
            })
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/c056afae06fa2f57a99af07b8c3d895f-footer.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Footer");