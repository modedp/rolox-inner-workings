! function() {
    var a = {
            5: function(e, t, a) {
                var n = {
                    "./captchaComponent.js": 740
                };

                function i(e) {
                    e = r(e);
                    return a(e)
                }

                function r(e) {
                    if (a.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = r, (e.exports = i).id = 5
            },
            37: function(e, t, a) {
                var n = {
                    "./captchaV2Constants.js": 842
                };

                function i(e) {
                    e = r(e);
                    return a(e)
                }

                function r(e) {
                    if (a.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = r, (e.exports = i).id = 37
            },
            354: function(e, t, a) {
                var n = {
                    "./captchaV2Controller.js": 791
                };

                function i(e) {
                    e = r(e);
                    return a(e)
                }

                function r(e) {
                    if (a.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = r, (e.exports = i).id = 354
            },
            772: function(e, t, a) {
                var n = {
                    "./captchaV2Service.js": 652,
                    "./funCaptchaService.js": 502
                };

                function i(e) {
                    e = r(e);
                    return a(e)
                }

                function r(e) {
                    if (a.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = r, (e.exports = i).id = 772
            },
            111: function(e, t, a) {
                var n = {
                    "./captchaIdValue.js": 23
                };

                function i(e) {
                    e = r(e);
                    return a(e)
                }

                function r(e) {
                    if (a.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = r, (e.exports = i).id = 111
            },
            871: function(e, t, a) {
                var n = {
                    "./components/templates/captcha.html": 65
                };

                function i(e) {
                    e = r(e);
                    return a(e)
                }

                function r(e) {
                    if (a.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = r, (e.exports = i).id = 871
            },
            544: function(e) {
                function r(e) {
                    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                }

                function o(e) {
                    return e.split("/").pop().replace(".html", "")
                }
                var t = {
                    importFilesUnderPath: function(e) {
                        e.keys().forEach(e)
                    },
                    templateCacheGenerator: function(e, t, n, i) {
                        return e.module(t, []).run(["$templateCache", function(a) {
                            n && n.keys().forEach(function(e) {
                                var t = r(o(e));
                                a.put(t, n(e))
                            }), i && i.keys().forEach(function(e) {
                                var t = r(o(e));
                                a.put(t, i(e).replace(/<\/?script[^>]*>/gi, ""))
                            })
                        }])
                    }
                };
                e.exports = t
            },
            953: function(e, t, a) {
                "use strict";
                var n = a(734),
                    n = a.n(n)().module("captchaV2", ["captchaV2Templates"]);
                t.Z = n
            },
            740: function(e, t, a) {
                "use strict";
                a.r(t);
                var n = {
                    templateUrl: "captcha",
                    bindings: {
                        activated: "=",
                        captchaActionType: "<",
                        extraValidationParams: "<",
                        returnTokenInSuccessCb: "<",
                        inputParams: "<",
                        captchaPassed: "&",
                        captchaFailed: "&",
                        captchaDismissed: "&?"
                    },
                    controller: "captchaV2Controller"
                };
                a(953).Z.component("captcha", n), t.default = n
            },
            842: function(e, t, a) {
                "use strict";
                a.r(t);
                var n = a(792),
                    a = a(953),
                    n = {
                        urls: {
                            getMetadata: n.EnvironmentUrls.apiGatewayCdnUrl + "/captcha/v1/metadata",
                            funCaptchaRedeem: {
                                WebSignup: n.EnvironmentUrls.captchaApi + "/v1/funcaptcha/signup/web",
                                AppSignup: n.EnvironmentUrls.captchaApi + "/v1/funcaptcha/signup/app",
                                WebLogin: n.EnvironmentUrls.captchaApi + "/v1/funcaptcha/login/web",
                                AppLogin: n.EnvironmentUrls.captchaApi + "/v1/funcaptcha/login/app",
                                WebResetPassword: n.EnvironmentUrls.captchaApi + "/v1/funcaptcha/resetpassword/web",
                                UserAction: n.EnvironmentUrls.captchaApi + "/v1/funcaptcha/user",
                                WebGamecardRedemption: n.EnvironmentUrls.captchaApi + "/v1/funcaptcha/gamecardredemption/web"
                            }
                        },
                        captchaActionTypes: {
                            login: "login",
                            appLogin: "appLogin",
                            signup: "signup",
                            appSignup: "appSignup",
                            groupJoin: "groupJoin",
                            groupWallPost: "groupWallPost",
                            resetPassword: "resetPassword",
                            toyCodeRedeem: "toyCodeRedeem",
                            supportRequest: "supportRequest",
                            followUser: "followUser",
                            assetComment: "assetComment"
                        },
                        funCaptchaCaptchaTypes: {
                            login: "Login",
                            appLogin: "AppLogin",
                            signup: "Signup",
                            appSignup: "AppSignup",
                            groupJoin: "JoinGroup",
                            groupWallPost: "GroupWallPost",
                            resetPassword: "ResetPassword",
                            toyCodeRedeem: "ToyCodeRedeem",
                            supportRequest: "SupportRequest",
                            followUser: "FollowUser",
                            assetComment: "AssetComment"
                        },
                        funCaptchaPublicKeyMap: {
                            Login: "ACTION_TYPE_WEB_LOGIN",
                            AppLogin: "ACTION_TYPE_WEB_LOGIN",
                            Signup: "ACTION_TYPE_WEB_SIGNUP",
                            AppSignup: "ACTION_TYPE_WEB_SIGNUP",
                            JoinGroup: "ACTION_TYPE_GROUP_JOIN",
                            GroupWallPost: "ACTION_TYPE_GROUP_WALL_POST",
                            ResetPassword: "ACTION_TYPE_WEB_RESET_PASSWORD",
                            ToyCodeRedeem: "ACTION_TYPE_WEB_GAMECARD_REDEMPTION",
                            SupportRequest: "ACTION_TYPE_SUPPORT_REQUEST",
                            FollowUser: "ACTION_TYPE_FOLLOW_USER",
                            AssetComment: "ACTION_TYPE_ASSET_COMMENT"
                        },
                        funCaptchaEvents: {
                            resolve: "resolve",
                            reject: "reject",
                            shown: "shown"
                        },
                        captchaProviders: {
                            arkoseLabs: "PROVIDER_ARKOSE_LABS"
                        },
                        errorCodes: {
                            internal: {
                                unknown: 0,
                                missingPrivateKey: 1,
                                missingActionType: 2,
                                failedToLoadProviderScript: 3,
                                failedToVerify: 4
                            }
                        }
                    };
                a.Z.constant("captchaV2Constants", n), t.default = n
            },
            791: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(953);

                function n(a, n, i, e) {
                    var r = this,
                        o = !1,
                        t = !1;
                    r.id = null, r.captchaEnded = function() {
                        r.activated = !1, r.shown = !1, o = !1
                    }, r.captchaShown = function() {
                        r.shown = !0, e.$apply()
                    }, r.hideCaptcha = function() {
                        r.activated = !1, r.captchaDismissed && r.captchaDismissed()()
                    }, r.getCaptchaClasses = function() {
                        return {
                            "captcha-activated": r.shown && r.activated
                        }
                    };
                    r.$onInit = function() {
                        var e, t;
                        null === r.id && (r.id = a.getCaptchaId()), r.activated && !o && (t = (e = (o = !0) === r.returnTokenInSuccessCb) ? function(e) {
                            var t, a;
                            r.activated && (t = "", e.constructor === String ? a = e : (a = e.token, t = e.unifiedCaptchaId), a = {
                                captchaId: t,
                                captchaToken: a,
                                captchaProvider: n.captchaProviders.arkoseLabs
                            }, r.captchaPassed()(a)), r.captchaEnded()
                        } : function() {
                            r.activated && r.captchaPassed()(), r.captchaEnded()
                        }, i.render(r.id, r.captchaActionType, r.captchaShown, e, r.inputParams, r.extraValidationParams).then(t, function(e) {
                            r.activated && r.captchaFailed()(e), r.captchaEnded()
                        }))
                    }, r.$doCheck = function() {
                        t !== r.activated && (t = r.activated, r.$onInit())
                    }.bind(r)
                }
                n.$inject = ["captchaV2Service", "captchaV2Constants", "funCaptchaService", "$scope"], a.Z.controller("captchaV2Controller", n), t.default = n
            },
            652: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(953);

                function n(e, n, i, t) {
                    var r = null;
                    return {
                        getMetadata: function() {
                            return e(function(t, e) {
                                var a;
                                r ? t(r) : (a = {
                                    url: i.urls.getMetadata
                                }, n.httpGet(a).then(function(e) {
                                    t(r = e)
                                }, e))
                            })
                        },
                        getCaptchaId: function() {
                            return ++t.id, "captchaV2-" + t.id
                        }
                    }
                }
                n.$inject = ["$q", "httpService", "captchaV2Constants", "captchaIdCounter"], a.Z.factory("captchaV2Service", n), t.default = n
            },
            502: function(e, t, a) {
                "use strict";
                a.r(t);
                a(76);
                var c = a(889),
                    a = a(953);

                function n(e, r, t, o, a) {
                    return a.getMetadata().then(function(e) {
                        var t, a = e.funCaptchaPublicKeys,
                            n = [];
                        for (t in o.funCaptchaPublicKeyMap) {
                            if (!o.funCaptchaPublicKeyMap.hasOwnProperty(t)) return;
                            var i = o.funCaptchaPublicKeyMap[t];
                            i && a.hasOwnProperty(i) ? n.push({
                                Type: t,
                                ApiUrl: o.urls.funCaptchaRedeem[i],
                                PublicKey: a[i]
                            }) : r.warn("Missing public key for: ".concat(t, "\n\tpublicKeyType: ").concat(i))
                        }
                        r.debug("Add captcha types from new webapp:", n), c.Z.addCaptchaTypes(n, !1)
                    }, function() {
                        r.debug("Failed to load captcha metadata for funCaptchaService. FunCaptcha will not work properly.")
                    }), {
                        render: function() {
                            throw new Error("CAPI V1 is deprecated")
                        }
                    }
                }
                n.$inject = ["$q", "$log", "$window", "captchaV2Constants", "captchaV2Service"], a.Z.factory("funCaptchaService", n), t.default = n
            },
            23: function(e, t, a) {
                "use strict";
                a.r(t), a(953).Z.value("captchaIdCounter", {
                    id: 0
                })
            },
            464: function(e, t, a) {
                "use strict";

                function i(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var n = t[a];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                a.d(t, {
                    Z: function() {
                        return n
                    }
                });
                var n = function() {
                    function t() {
                        ! function(e) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this), this.timeStore = {}
                    }
                    var e, a, n;
                    return e = t, (a = [{
                        key: "start",
                        value: function(e) {
                            this.timeStore[e] = Date.now()
                        }
                    }, {
                        key: "end",
                        value: function(e) {
                            var t = this.timeStore[e];
                            return t ? (delete this.timeStore[e], (new Date).valueOf() - t) : null
                        }
                    }]) && i(e.prototype, a), n && i(e, n), t
                }()
            },
            560: function(e, t, a) {
                "use strict";
                a.d(t, {
                    mD: function() {
                        return o
                    },
                    IF: function() {
                        return c
                    },
                    I3: function() {
                        return s
                    },
                    HK: function() {
                        return p
                    }
                });
                var n = a(792),
                    t = a(609),
                    i = a.n(t),
                    n = null !== (n = n.EnvironmentUrls.apiGatewayUrl) && void 0 !== n ? n : "URL_NOT_FOUND",
                    r = "".concat(n, "/account-security-service"),
                    o = "event_captcha",
                    c = "solve_time_captcha",
                    s = "V1",
                    p = function(a) {
                        return new Promise(function(e, t) {
                            i().ajax({
                                method: "POST",
                                url: "".concat(r, "/v1/metrics/record"),
                                data: JSON.stringify(a),
                                contentType: "application/json",
                                timeout: 1e4,
                                success: e,
                                error: t,
                                withCredentials: !0
                            })
                        })
                    }
            },
            762: function(e, t, a) {
                "use strict";
                a.d(t, {
                    UG: function() {
                        return U
                    },
                    K3: function() {
                        return w.Z
                    },
                    r8: function() {
                        return R.Z
                    },
                    $3: function() {
                        return C.Z
                    },
                    Xs: function() {
                        return P
                    }
                });
                var i, r, n, o, c, s, p, u, d, l, f, h, v, m, g, t = a(609),
                    E = a.n(t),
                    T = a(792),
                    C = a(889),
                    w = a(76),
                    y = (n = r = !(i = {
                        shownCb: function() {
                            {
                                var e;
                                n || (T.Hybrid && T.Hybrid.Navigation && T.Hybrid.Navigation.navigateToFeature({
                                    feature: w.Z.hybridEvents.shown
                                }), null !== (e = document.getElementById(w.Z.eventElementIds.shown)) && (e.value = w.Z.hybridEvents.shown, e.dispatchEvent(o)), n = !0)
                            }
                        },
                        successCb: function(e, t) {
                            var a = null;
                            null != e && "" != e && (a = {
                                captchaId: t,
                                captchaToken: e,
                                captchaProvider: w.Z.captchaProviders.arkoseLabs
                            });
                            T.Hybrid && T.Hybrid.Navigation && (null !== a ? T.Hybrid.Navigation.navigateToFeature({
                                feature: w.Z.hybridEvents.success,
                                captchaData: a
                            }) : T.Hybrid.Navigation.navigateToFeature({
                                feature: w.Z.hybridEvents.success
                            }));
                            e = document.getElementById(w.Z.eventElementIds.token);
                            null != e && (null !== a && (e.value = JSON.stringify(a)), e.dispatchEvent(o))
                        },
                        errorCb: S,
                        returnTokenInSuccessCb: !1,
                        inputParams: {
                            dataExchange: "",
                            unifiedCaptchaId: ""
                        },
                        extraValidationParams: {}
                    }), (t = document.createEvent("HTMLEvents")).initEvent("change", !1, !1), o = t, c = null, new Promise(function(t, a) {
                        c && t(c), E().ajax({
                            method: "GET",
                            url: w.Z.urls.getMetadata,
                            success: function(e) {
                                t(c = e)
                            },
                            error: function(e) {
                                a(e)
                            }
                        })
                    }).then(function(e) {
                        var t, a = e.funCaptchaPublicKeys,
                            n = [];
                        for (t in w.Z.funCaptchaPublicKeyMap) {
                            if (!w.Z.funCaptchaPublicKeyMap.hasOwnProperty(t)) return;
                            var i = w.Z.funCaptchaPublicKeyMap[t];
                            i && a.hasOwnProperty(i) ? n.push({
                                Type: _(t),
                                ApiUrl: w.Z.urls.funCaptchaRedeem[i],
                                PublicKey: a[i]
                            }) : console.warn("Missing public key for: ".concat(t, "\n\tpublicKeyType: ").concat(i))
                        }
                        console.debug("Add captcha types from new app:", n), C.Z.addCaptchaTypes(n, !1), r = !0
                    }, function(e) {
                        console.debug("Failed to load captcha metadata for funCaptchaService. FunCaptcha will not work properly.")
                    }), {
                        triggerCaptcha: function() {
                            var e, t, a, n;
                            C.Z ? (T.UrlParser && (e = T.UrlParser.getParameterValueByName("credentialstype", !1), t = T.UrlParser.getParameterValueByName("credentialsvalue", !1), null !== e && null !== t && (i.extraValidationParams.credentialsType = e, i.extraValidationParams.credentialsValue = t), i.returnTokenInSuccessCb = "1" === T.UrlParser.getParameterValueByName("hybrid-return-token", !1), null !== (t = T.UrlParser.getParameterValueByName("data-exchange-blob", !1)) && (i.inputParams.dataExchange = t), null !== (t = T.UrlParser.getParameterValueByName("hybrid-return-captcha-id", !1)) && (i.inputParams.unifiedCaptchaId = t)), a = new Date, n = setInterval(function() {
                                r ? (clearInterval(n), C.Z.render(w.Z.ids.appCaptcha, i)) : (new Date).getTime() - a.getTime() > w.Z.metadataLoadParameters.timeoutMilliseconds && (clearInterval(n), S())
                            }, w.Z.metadataLoadParameters.waitIntervalMilliseconds)) : S()
                        },
                        setCaptchaType: function(e) {
                            i.cType = _(e)
                        },
                        displayErrorMessage: S,
                        fetchLanguageResources: function(e) {
                            E().ajax({
                                method: "GET",
                                url: e,
                                dataType: "json",
                                data: w.Z.translationRequestParams,
                                success: function(e) {
                                    E()("#".concat(w.Z.messageElementIds.defaultError)).text(e["Response.CaptchaErrorFailedToVerify"])
                                }
                            })
                        },
                        captchaParams: i
                    });

                function S() {
                    E()("#".concat(w.Z.messageElementIds.defaultError)).show()
                }

                function _(e) {
                    return e.charAt(0).toLowerCase() + e.slice(1)
                }

                function P() {
                    y.triggerCaptcha()
                }

                function b(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                }

                function x() {
                    return (new Date).valueOf()
                }

                function I(e) {
                    "function" == typeof h && h();
                    var t, a = null;
                    u && (a = x() - u, t = function(e) {
                        for (var t = g.captchaSolvedPrefix, a = g.captchaSolveTimeIntervals, n = 0; n < a.length; n++) {
                            var i = a[n];
                            if (e <= 1e3 * i.seconds) return t + i.suffix
                        }
                        return t + g.captchaSolveTimeLarge
                    }(t = a), window.EventTracker && window.EventTracker.fireEvent(b(d + t)), u = null), A(d, e, a)
                }

                function O(e, t, a) {
                    T.EventStream && (t = t || 0, a = a ? "true" : "false", T.EventStream.SendEventWithTarget("captcha", e, {
                        solveDuration: t,
                        success: a,
                        provider: "Google"
                    }, T.EventStream.TargetTypes.WWW))
                }

                function A(e, t, a) {
                    t = {
                        "g-Recaptcha-Response": t,
                        isInvisible: m.invisible
                    };
                    E().ajax({
                        method: "POST",
                        data: t,
                        success: function() {
                            window.EventTracker && window.EventTracker.fireEvent(b(e + g.successSuffix)), O(e, a, !0), l && (l(), E()("#" + s).empty())
                        },
                        error: function() {
                            window.EventTracker && window.EventTracker.fireEvent(b(e + g.failSuffix)), O(e, a, !1), f && f(), T.BootstrapWidgets && T.BootstrapWidgets.ToggleSystemMessage(E()(".alert-warning"), 100, 2e3, w.Z.messages.error)
                        },
                        url: v[e]
                    })
                }
                var U = (v = w.Z.endpoints, m = {
                        invisible: !1
                    }, g = w.Z.serviceData, {
                        ids: w.Z.ids,
                        types: w.Z.types,
                        setEndpoint: function(e, t) {
                            v[e] = t
                        },
                        getEndpoint: function(e) {
                            return v[e]
                        },
                        setInvisibleMode: function(e) {
                            m.invisible = e
                        },
                        getInvisibleMode: function() {
                            return m.invisible
                        },
                        setSiteKey: function(e) {
                            g.sitekey = e
                        },
                        verify: A,
                        reset: function(e, t, a, n) {
                            d = e, l = t, f = a, h = n, window.grecaptcha && (window.grecaptcha.reset(p), m.invisible && window.grecaptcha.execute(p))
                        },
                        render: function(e, t, a, n, i) {
                            d = t, l = a, f = n, h = i, s = e, window.grecaptcha && (i = {
                                sitekey: g.sitekey,
                                callback: I,
                                badge: g.badgePosition
                            }, m.invisible && (i.size = "invisible"), p = window.grecaptcha.render(e, i), window.EventTracker && window.EventTracker.fireEvent(b(d + g.displayedSuffix)), u = x())
                        },
                        execute: function() {
                            window.grecaptcha && m.invisible && window.grecaptcha.execute(p)
                        },
                        setMultipleEndpoints: function(e, t) {
                            if (e && t)
                                for (var a = 0; a < e.length; a++) {
                                    var n = (n = e[a]).charAt(0).toLowerCase() + n.slice(1);
                                    v[n] = t
                                }
                        }
                    }),
                    R = a(719);
                window.Roblox.triggerCaptcha = P, window.Roblox.Captcha = U, window.Roblox.AppCaptcha = y, window.Roblox.CaptchaLogger = R.Z, window.Roblox.FunCaptcha = C.Z, window.Roblox.CaptchaV2ServiceCaptchaIdBase = 0, window.Roblox.CaptchaConstants = w.Z, window.triggerCaptcha = P
            },
            76: function(e, t, a) {
                "use strict";
                var n = a(792);
                Roblox.EnvironmentUrls = Roblox.EnvironmentUrls || {};
                n = {
                    urls: {
                        getMetadata: "".concat(n.EnvironmentUrls.apiGatewayCdnUrl, "/captcha/v1/metadata"),
                        funCaptchaRedeem: {
                            WebSignup: "".concat(n.EnvironmentUrls.captchaApi, "/v1/funcaptcha/signup/web"),
                            AppSignup: "".concat(n.EnvironmentUrls.captchaApi, "/v1/funcaptcha/signup/app"),
                            WebLogin: "".concat(n.EnvironmentUrls.captchaApi, "/v1/funcaptcha/login/web"),
                            AppLogin: "".concat(n.EnvironmentUrls.captchaApi, "/v1/funcaptcha/login/app"),
                            WebResetPassword: "".concat(n.EnvironmentUrls.captchaApi, "/v1/funcaptcha/resetpassword/web"),
                            UserAction: "".concat(n.EnvironmentUrls.captchaApi, "/v1/funcaptcha/user"),
                            WebGamecardRedemption: "".concat(n.EnvironmentUrls.captchaApi, "/v1/funcaptcha/gamecardredemption/web")
                        }
                    },
                    funCaptchaPublicKeyMap: {
                        Login: "ACTION_TYPE_WEB_LOGIN",
                        AppLogin: "ACTION_TYPE_WEB_LOGIN",
                        Signup: "ACTION_TYPE_WEB_SIGNUP",
                        AppSignup: "ACTION_TYPE_WEB_SIGNUP",
                        JoinGroup: "ACTION_TYPE_GROUP_JOIN",
                        GroupWallPost: "ACTION_TYPE_GROUP_WALL_POST",
                        ResetPassword: "ACTION_TYPE_WEB_RESET_PASSWORD",
                        ToyCodeRedeem: "ACTION_TYPE_WEB_GAMECARD_REDEMPTION",
                        SupportRequest: "ACTION_TYPE_SUPPORT_REQUEST",
                        FollowUser: "ACTION_TYPE_FOLLOW_USER",
                        Generic: "ACTION_TYPE_GENERIC_CHALLENGE",
                        AssetComment: "ACTION_TYPE_ASSET_COMMENT",
                        Marketplace: "ACTION_TYPE_MARKETPLACE"
                    },
                    endpoints: {
                        sendMessage: "",
                        addFriend: "",
                        follow: "",
                        signup: "",
                        joinGroup: "",
                        login: "",
                        postComment: "",
                        clothingUpload: "",
                        favorite: "",
                        appSignup: "",
                        appLogin: "",
                        resetPassword: ""
                    },
                    serviceData: {
                        sitekey: "",
                        successSuffix: "Captcha_Success",
                        failSuffix: "Captcha_Failed",
                        displayedSuffix: "Captcha_Displayed",
                        captchaSolvedPrefix: "Captcha_User_Solved_InSeconds_",
                        captchaSolveTimeIntervals: [{
                            seconds: 1,
                            suffix: "Less_Than_1"
                        }, {
                            seconds: 3,
                            suffix: "1_To_3"
                        }, {
                            seconds: 10,
                            suffix: "4_To_10"
                        }, {
                            seconds: 20,
                            suffix: "11_To_20"
                        }, {
                            seconds: 30,
                            suffix: "21_To_30"
                        }, {
                            seconds: 40,
                            suffix: "31_To_40"
                        }, {
                            seconds: 50,
                            suffix: "41_To_50"
                        }],
                        captchaSolveTimeLarge: "Greater_Than_50",
                        badgePosition: "bottomright",
                        logConstants: {
                            successSuffix: "_Success",
                            failSuffix: "_Failed",
                            maxFailSuffix: "_MaxFailed",
                            retrySuffix: "_Retried",
                            displayedSuffix: "_Displayed",
                            triggeredSuffix: "_Triggered",
                            initializedSuffix: "_Initialized",
                            suppressedSuffix: "_Suppressed",
                            providerErrorSuffix: "_FailedToLoad",
                            metadataErrorSuffix: "_FailedToLoadMetadata",
                            completedTimeSequenceSuffix: "_SolveTime",
                            solvedPrefix: "_User_Solved_InSeconds_",
                            solveTimeIntervals: [{
                                seconds: 1,
                                suffix: "Less_Than_1"
                            }, {
                                seconds: 3,
                                suffix: "1_To_3"
                            }, {
                                seconds: 10,
                                suffix: "4_To_10"
                            }, {
                                seconds: 20,
                                suffix: "11_To_20"
                            }, {
                                seconds: 30,
                                suffix: "21_To_30"
                            }, {
                                seconds: 40,
                                suffix: "31_To_40"
                            }, {
                                seconds: 50,
                                suffix: "41_To_50"
                            }],
                            solveTimeLarge: "Greater_Than_50",
                            eventStreamCaptchaEventName: "captcha",
                            eventStreamCaptchaInitiatedEventName: "captchaInitiated",
                            eventStreamCaptchaTokenReceivedEventName: "captchaTokenReceived",
                            captchaInitiatedChallengeTypes: {
                                visible: "visible",
                                hidden: "hidden",
                                error: "error"
                            }
                        }
                    },
                    types: {
                        signup: "signup",
                        sendMessage: "sendMessage",
                        addFriend: "addFriend",
                        follow: "follow",
                        joinGroup: "joinGroup",
                        login: "login",
                        postComment: "postComment",
                        clothingUpload: "clothingUpload",
                        favorite: "favorite",
                        appSignup: "appSignup",
                        appLogin: "appLogin",
                        gameCardRedeem: "gameCardRedeem",
                        resetPassword: "resetPassword"
                    },
                    ids: {
                        defaultCaptcha: "captcha-container",
                        signup: "signup-captcha",
                        login: "login-captcha",
                        friends: "friends-captcha",
                        groups: "groups-captcha",
                        profile: "profile-captcha",
                        playerSearch: "player-search-captcha",
                        appCaptcha: "app-captcha",
                        gameCardRedeem: "game-card-redeem-captcha",
                        resetPassword: "reset-password-captcha"
                    },
                    messageElementIds: {
                        defaultError: "captcha-error"
                    },
                    eventElementIds: {
                        shown: "captcha-event-shown",
                        token: "captcha-event-token",
                        provider: "captcha-event-provider"
                    },
                    hybridEvents: {
                        shown: "CaptchaShown",
                        success: "CaptchaSuccess"
                    },
                    messages: {
                        error: "We currently cannot verify CAPTCHA, please try again later.",
                        funCaptchaError: "We currently cannot verify FunCaptcha, please try again later."
                    },
                    translationRequestParams: {
                        consumerType: "Web",
                        contentNamespace: "Common.Captcha",
                        Keys: ["Response.CaptchaErrorFailedToVerify"]
                    },
                    errorCodes: {
                        failedToLoadProviderScript: 0,
                        failedToVerify: 1
                    },
                    localeToFunCaptchaLanguageCodeMap: {
                        "de-de": "de",
                        "en-us": "en",
                        "es-es": "es",
                        "fr-fr": "fr",
                        "pt-br": "pt-br",
                        "ko-kr": "ko",
                        "zh-cn": "zh",
                        "zh-tw": "zh-tw",
                        "ja-jp": "ja"
                    },
                    appTypes: {
                        android: "android",
                        ios: "ios",
                        xbox: "xbox",
                        uwp: "uwp",
                        "studio-windows": "studio-windows",
                        "studio-mac": "studio-mac",
                        "studio-luobu-windows": "studio-luobu-windows",
                        "studio-luobu-mac": "studio-luobu-mac",
                        unknown: "unknown"
                    },
                    captchaProviders: {
                        arkoseLabs: "PROVIDER_ARKOSE_LABS"
                    },
                    metadataLoadParameters: {
                        timeoutMilliseconds: 1e4,
                        waitIntervalMilliseconds: 100
                    }
                };
                t.Z = n
            },
            719: function(e, t, a) {
                "use strict";
                var n = a(609),
                    s = a.n(n),
                    p = a(792),
                    u = a(464),
                    d = a(560),
                    l = a(76);
                t.Z = function(e) {
                    var i, r = l.Z,
                        o = s().extend({}, r.serviceData).logConstants,
                        c = !1;

                    function a(e) {
                        return c && void 0 !== i ? "".concat(e, "_").concat(i) : e
                    }

                    function n(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    }
                    this.provider = e, this.eventTimer = new u.Z, this.setPerAppTypeLoggingEnabled = function(e) {
                        var t, a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0,
                            n = null;
                        void 0 === a ? (p.UrlParser && (t = p.UrlParser.getParameterValueByName("appType"), r && r.appTypes && r.appTypes.hasOwnProperty(t) && (n = t)), null == n && p.DeviceMeta && (0, p.DeviceMeta)().isInApp && (n = (0, p.DeviceMeta)().appType), null !== n && (c = e, i = n)) : i = a
                    }, this.fireEventCaptcha = function(e, t) {
                        (0, d.HK)({
                            name: d.mD,
                            value: 1,
                            labelValues: {
                                action_type: n(e),
                                event_type: n(this.provider + t),
                                application_type: i || "unknown",
                                version: d.I3
                            }
                        }).catch(function() {})
                    }, this.fireSolveTimeCaptcha = function(e, t, a) {
                        (0, d.HK)({
                            name: d.IF,
                            value: a,
                            labelValues: {
                                action_type: n(e),
                                event_type: n(this.provider + t),
                                application_type: i || "unknown",
                                version: d.I3
                            }
                        }).catch(function() {})
                    }, this.fireEvent = function(e, t) {
                        this.fireEventCaptcha(e, t), t = n(e + this.provider + t), window.EventTracker && window.EventTracker.fireEvent(a(t))
                    }, this.startStatisticsSequence = function(e) {
                        this.eventTimer.start(e), window.EventTracker && window.EventTracker.start(a(e))
                    }, this.endStatisticsSequenceWithSuccess = function(e) {
                        window.EventTracker && window.EventTracker.endSuccess(a(e))
                    }, this.endStatisticsSequenceWithFailure = function(e) {
                        window.EventTracker && window.EventTracker.endFailure(a(e))
                    }, this.logSuccess = function(e) {
                        var t = n(e + this.provider + o.completedTimeSequenceSuffix);
                        this.fireEvent(e, o.successSuffix), this.fireSolveTimeCaptcha(e, o.successSuffix, this.eventTimer.end(t)), this.endStatisticsSequenceWithSuccess(t)
                    }, this.logFail = function(e) {
                        this.fireEvent(e, o.failSuffix)
                    }, this.logMaxFail = function(e) {
                        var t = n(e + this.provider + o.completedTimeSequenceSuffix);
                        this.fireEvent(e, o.maxFailSuffix), this.fireSolveTimeCaptcha(e, o.completedTimeSequenceSuffix, this.eventTimer.end(t)), this.endStatisticsSequenceWithFailure(t)
                    }, this.logRetried = function(e) {
                        this.fireEvent(e, o.retrySuffix)
                    }, this.logTriggered = function(e) {
                        this.fireEvent(e, o.triggeredSuffix), this.startStatisticsSequence(n(e + this.provider + o.completedTimeSequenceSuffix))
                    }, this.logInitialized = function(e) {
                        this.fireEvent(e, o.initializedSuffix)
                    }, this.logSuppressed = function(e) {
                        this.fireEvent(e, o.suppressedSuffix)
                    }, this.logDisplayed = function(e) {
                        this.fireEvent(e, o.displayedSuffix)
                    }, this.logProviderError = function(e) {
                        this.fireEvent(e, o.providerErrorSuffix)
                    }, this.logMetadataError = function(e) {
                        this.fireEvent(e, o.metadataErrorSuffix)
                    }, this.logCaptchaShownEventToEventStream = function(e, t, a) {
                        this.logCaptchaInitiatedEventToEventStream(e, o.captchaInitiatedChallengeTypes.visible, t, a)
                    }, this.logCaptchaSuppressedEventToEventStream = function(e, t, a) {
                        this.logCaptchaInitiatedEventToEventStream(e, o.captchaInitiatedChallengeTypes.hidden, t, a)
                    }, this.logCaptchaErrorEventToEventStream = function(e, t, a, n) {
                        this.logCaptchaInitiatedEventToEventStream(e, o.captchaInitiatedChallengeTypes.error, t, a, n.toString())
                    }, this.logCaptchaInitiatedEventToEventStream = function(e, t, a, n, i) {
                        p.EventStream && (e = e, t = {
                            type: t,
                            provider: this.provider
                        }, "" !== a && void 0 !== a && (t.session = a), "" !== n && void 0 !== n && (t.ucid = n), "" !== i && void 0 !== i && (t.message = i), p.EventStream.SendEventWithTarget(o.eventStreamCaptchaInitiatedEventName, e, t, p.EventStream.TargetTypes.WWW))
                    }, this.logCaptchaTokenReceivedEventToEventStream = function(e, t, a) {
                        p.EventStream && p.EventStream.SendEventWithTarget(o.eventStreamCaptchaTokenReceivedEventName, e, {
                            provider: this.provider,
                            session: t,
                            ucid: a || ""
                        }, p.EventStream.TargetTypes.WWW)
                    }, this.logCaptchaEventToEventStream = function(e, t, a, n, i) {
                        p.EventStream && (t = t || 0, a = a ? "true" : "false", p.EventStream.SendEventWithTarget(o.eventStreamCaptchaEventName, e, {
                            solveDuration: t,
                            success: a,
                            provider: this.provider,
                            session: n || "",
                            ucid: i || ""
                        }, p.EventStream.TargetTypes.WWW))
                    }
                }
            },
            889: function(e, t, a) {
                "use strict";
                var n = a(609),
                    s = a.n(n),
                    p = a(792),
                    u = a(76),
                    d = a(719),
                    a = function() {
                        var n = [],
                            a = (s().extend({}, u.Z.messages), new d.Z("FunCaptcha")),
                            i = {},
                            e = "",
                            t = {};
                        s().noop, s().noop, s().noop, s().noop, s().noop, s().noop;

                        function r(e) {
                            t[e] && t[e].fcInstance.refresh_session()
                        }

                        function o(e, t) {
                            throw new Error("CAPI V1 is deprecated")
                        }

                        function c() {
                            var e = s()("#game-card-redeem-captcha").addClass("hidden").detach();
                            s()("#redeem-card-wrapper").append(e), p.Dialog.close()
                        }
                        return {
                            types: s().extend({}, u.Z.types),
                            setMaxRetriesOnTokenValidationFailure: function(e) {
                                0
                            },
                            setRetryIntervalRange: function(e, t) {
                                0
                            },
                            reset: r,
                            render: o,
                            addCaptchaTypes: function(e, a) {
                                e && e.forEach(function(e) {
                                    var t, t = {
                                            Type: a ? (t = e.Type).charAt(0).toLowerCase() + t.slice(1) : e.Type,
                                            ApiUrl: e.ApiUrl,
                                            PublicKey: e.PublicKey
                                        },
                                        e = JSON.stringify(t);
                                    i.hasOwnProperty(e) || (i[e] = t, n.push(t))
                                })
                            },
                            setPerAppTypeLoggingEnabled: function(e, t) {
                                t = 1 < arguments.length && void 0 !== t ? t : void 0;
                                a.setPerAppTypeLoggingEnabled(e, t)
                            },
                            showFunCaptchaInModal: function() {
                                p.Dialog.open({
                                    bodyContent: '<div id="funcaptcha-modal-body" class="funcaptcha-modal-body"></div>',
                                    allowHtmlContentInBody: !0,
                                    showAccept: !1,
                                    showDecline: !1,
                                    xToCancel: !0,
                                    onCloseCallback: c
                                });
                                var e = s()("#game-card-redeem-captcha").removeClass("hidden").detach();
                                s()("#funcaptcha-modal-body").append(e)
                            },
                            dismissFunCaptchaModal: c,
                            captchaInstances: t,
                            loggerInstance: a
                        }
                    }();
                t.Z = a
            },
            65: function(e) {
                e.exports = '<div class="captcha-container" ng-controller="captchaV2Controller"> <div class="modal" ng-class="$ctrl.getCaptchaClasses()" ng-click="$ctrl.hideCaptcha()"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-body" ng-click="$event.stopPropagation()"> <button type="button" class="close" ng-click="$ctrl.hideCaptcha()"> <span aria-hidden="true"><span class="icon-close"></span></span><span class="sr-only">Close</span> </button> <div id="{{ $ctrl.id }}" class="captchav2-funcaptcha-modal-body"></div> </div> </div> </div> </div> </div>'
            },
            792: function(e) {
                "use strict";
                e.exports = Roblox
            },
            734: function(e) {
                "use strict";
                e.exports = angular
            },
            609: function(e) {
                "use strict";
                e.exports = jQuery
            }
        },
        n = {};

    function i(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            exports: {}
        };
        return a[e](t, t.exports, i), t.exports
    }
    i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return i.d(t, {
                a: t
            }), t
        }, i.d = function(e, t) {
            for (var a in t) i.o(t, a) && !i.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
        }, i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        function() {
            "use strict";
            var e = i(734),
                t = i.n(e),
                a = i(544),
                n = (i(953), i(762));
            (0, a.importFilesUnderPath)(i(37)), (0, a.importFilesUnderPath)(i(111)), (0, a.importFilesUnderPath)(i(772)), (0, a.importFilesUnderPath)(i(354)), (0, a.importFilesUnderPath)(i(5)), e = i(871), (0, a.templateCacheGenerator)(t(), "captchaV2Templates", e), window.Roblox.CaptchaLogger = n.r8, window.Roblox.FunCaptcha = n.$3, window.Roblox.CaptchaConstants = n.K3, window.Roblox.triggerCaptcha = n.Xs, window.Roblox.Captcha = n.UG
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/fcecfd4cdf0677f0a71917860766590b-captcha.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Captcha");