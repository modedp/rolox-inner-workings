! function() {
    "use strict";
    var r = {
            n: function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return r.d(t, {
                    a: t
                }), t
            },
            d: function(e, t) {
                for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            },
            o: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
        },
        m = CoreUtilities,
        R = React,
        I = r.n(R),
        f = ReactDOM,
        h = Roblox,
        e = r.n(h),
        t = PropTypes,
        n = r.n(t),
        i = ReactUtilities,
        o = "verificationUpsell-container",
        a = {
            common: [],
            feature: "Feature.VerificationUpsell"
        },
        l = "SET_USER_EMAIL_STATES",
        s = "SET_MODAL_STATES",
        u = "SET_PAGENAME_STATE",
        d = "SET_INPUT_STATE",
        p = "SET_ERROR_STATE",
        y = "SET_EMAIL_SENT_STATE",
        v = "SET_RESEND_EMAIL_STATE",
        b = "SET_EMAIL_UPDATING_STATE",
        g = "SET_TRIGGER_ORIGIN",
        E = "SET_INPUT_CLEAR",
        P = "SET_EMAIL_ADDED_STATE",
        x = "Verification",
        S = "UpdateEmail",
        w = "UpdatePassword",
        C = "logout",
        c = "buyRobuxPage",
        N = "homepage",
        T = "premiumSubscriptionPage",
        A = "purchaseWarning",
        k = "notApprovedPage",
        O = "https://en.help.roblox.com/hc/articles/115004630823-Roblox-Privacy-and-Cookie-Policy",
        M = "Enter",
        D = "Action.PrivacyPolicy",
        j = "Message.ConfirmationEmailNotSent",
        L = "Message.InvalidEmailAddress",
        U = "Response.ErrorTryAgain",
        _ = "Response.TooManyAttemptsTryAgainLater";

    function K(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return B(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return B(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function B(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function H(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), r.push.apply(r, n)), r
    }

    function q(r) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? H(Object(i), !0).forEach(function(e) {
                var t, n;
                t = r, e = i[n = e], n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : H(Object(i)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
            })
        }
        return r
    }

    function V(e, t) {
        switch (t.type) {
            case E:
                return q(q({}, e), {}, {
                    userEmailInput: ""
                });
            case g:
                return q(q({}, e), {}, {
                    origin: t.origin,
                    skipCallback: t.skipCallback,
                    closeCallback: t.closeCallback
                });
            case l:
                return q(q({}, e), {}, {
                    isEmailVerified: t.isEmailVerified,
                    userEmail: t.userEmail
                });
            case u:
                return q(q({}, e), {}, {
                    pageName: t.pageName
                });
            case p:
                return q(q({}, e), {}, {
                    errorMsg: t.errorMsg
                });
            case b:
                return q(q({}, e), {}, {
                    isEmailUpdating: t.isEmailUpdating
                });
            case y:
                return q(q({}, e), {}, {
                    isEmailSent: !0
                });
            case P:
                return q(q({}, e), {}, {
                    isEmailAdded: !0
                });
            case v:
                return q(q({}, e), {}, {
                    isEmailSent: !1
                });
            case d:
                return e.pageName === S ? q(q({}, e), {}, {
                    userEmailInput: t.value,
                    errorMsg: ""
                }) : e;
            case s:
                if (e.pageName !== S) return q(q({}, e), {}, {
                    pageName: x,
                    titleText: re,
                    bodyText: Q,
                    primaryButtonText: W,
                    secondaryButtonText: z,
                    errorMsg: ""
                });
                var n, r, i = h.CurrentUser && !h.CurrentUser.isUnder13,
                    o = i ? ce : t.settingsUiPolicy.isParentalControlsV2Enabled ? se : le,
                    a = G,
                    c = "";
                switch (e.skipCallback && (c = $), e.origin) {
                    case C:
                        r = ae, n = !i && t.settingsUiPolicy.isParentalControlsV2Enabled ? ne : te, a = X, c = J;
                        break;
                    case N:
                    case k:
                        r = oe, n = i ? ue : de, a = Y;
                        break;
                    default:
                        r = ie, n = i ? Z : ee
                }
                return q(q({}, e), {}, {
                    pageName: S,
                    titleText: r,
                    bodyText: n,
                    primaryButtonText: a,
                    secondaryButtonText: c,
                    errorMsg: "",
                    userEmailInputPlaceholder: o
                });
            default:
                return e
        }
    }

    function F(e) {
        var t = e.children,
            e = (n = K((0, R.useReducer)(V, pe), 2))[0],
            n = n[1];
        return I().createElement(me.Provider, {
            value: {
                emailUpsellState: e,
                dispatch: n
            }
        }, t)
    }
    var G = "Action.SendConfirmationEmail",
        W = "Action.ResendConfirmationEmail",
        z = "Action.ChangeEmail",
        $ = "Action.GenericSkip",
        Y = "Action.Continue",
        X = "Action.FinishSetup",
        J = "Action.LogoutWithRisk",
        Q = "Description.VerifyEmailBody",
        Z = "Description.AddEmailTextOver13",
        ee = "Description.AddEmailTextUnder13",
        te = "Description.AddEmailTextStrongMessaging",
        ne = "Description.AddEmailTextStrongMessagingU13",
        re = "Heading.VerifyEmail",
        ie = "Heading.AddEmail",
        oe = "Heading.PleaseAddEmail",
        ae = "Heading.CompleteSetupOnLogout",
        ce = "Label.EmailInputPlaceholderOver13",
        le = "Label.EmailInputPlaceholderUnder13",
        se = "Label.EmailInputPlaceholderUnder13V2",
        ue = "Description.PleaseEnterEmail",
        de = "Description.PleaseEnterParentEmail",
        pe = {
            pageName: "",
            isModalOpen: !1,
            isEmailVerified: !1,
            isEmailSent: !1,
            isEmailUpdating: !1,
            isEmailAdded: !1,
            origin: "",
            experimentParameters: null,
            userEmail: "",
            userEmailInput: "",
            userEmailInputPlaceholder: ce,
            errorMsg: "",
            titleText: re,
            bodyText: Q,
            primaryButtonText: W,
            secondaryButtonText: z,
            skipCallback: null,
            closeCallback: null
        },
        me = (0, R.createContext)(pe);

    function fe() {
        return (0, R.useContext)(me)
    }
    F.propTypes = {
        children: n().node.isRequired
    };
    var he = ReactStyleGuide,
        ye = HeaderScripts,
        ve = (!!h.DeviceMeta && (0, h.DeviceMeta)()).isAndroidApp;

    function be(e) {
        var t = e.show,
            n = e.onHide,
            r = e.onPrimaryAction,
            i = e.onSecondaryAction,
            o = e.onInputChange,
            a = e.onBackAction,
            c = e.onInputFocus,
            l = e.onKeyDown,
            s = e.translate,
            u = fe().emailUpsellState,
            d = u.pageName,
            p = u.titleText,
            m = u.bodyText,
            f = u.primaryButtonText,
            h = u.secondaryButtonText,
            y = u.userEmailInput,
            v = u.userEmailInputPlaceholder,
            b = u.userEmail,
            g = u.errorMsg,
            E = u.isEmailSent,
            e = u.isEmailUpdating,
            u = null === ye.authenticatedUser || void 0 === ye.authenticatedUser ? void 0 : ye.authenticatedUser.isUnder13;
        return I().createElement(he.Modal, {
            show: t,
            onHide: n,
            className: "".concat(ve ? "verification-android-modal" : "", " verification-modal"),
            size: "lg",
            "aria-labelledby": "verification-upsell-modal-title",
            scrollable: "true",
            centered: "true"
        }, I().createElement(he.Modal.Header, {
            useBaseBootstrapComponent: !0
        }, I().createElement("div", {
            className: "verification-upsell-title-container"
        }, I().createElement(he.Modal.Title, {
            id: "verification-upsell-modal-title"
        }, s(p))), d === w ? I().createElement("button", {
            type: "button",
            className: "close close-button",
            onClick: a
        }, I().createElement("span", {
            className: "icon-back"
        })) : I().createElement("button", {
            type: "button",
            className: "close close-button",
            onClick: n
        }, I().createElement("span", {
            className: "icon-close"
        }))), I().createElement(he.Modal.Body, null, I().createElement("div", {
            className: "email-verification-upsell-image"
        }), I().createElement("p", {
            className: "verification-upsell-text-body"
        }, s(m, {
            emailAddress: b
        })), d === S && I().createElement("input", {
            type: "email",
            autoFocus: !0,
            className: "".concat(g ? "input-field-error" : "", " form-control input-field verification-upsell-modal-input"),
            placeholder: s(v),
            autoComplete: "email",
            value: y,
            onChange: function(e) {
                return o(e.target.value)
            },
            onFocus: function() {
                return c()
            },
            onKeyDown: function(e) {
                return l(e.key)
            }
        }), g && I().createElement("p", {
            className: "text-error modal-error-message sms-code-error"
        }, s(g)), d === S && u && I().createElement("div", {
            className: "privacy-policy-button"
        }, I().createElement("a", {
            href: O,
            target: "_blank",
            rel: "noreferrer"
        }, s(D)))), I().createElement(he.Modal.Footer, null, I().createElement("div", {
            className: "verification-upsell-footer-container"
        }, d !== x && I().createElement(he.Button, {
            className: "modal-button verification-upsell-btn",
            variant: he.Button.variants.cta,
            size: he.Button.sizes.medium,
            isDisabled: e,
            onClick: r
        }, s(f)), d === x && I().createElement("button", {
            type: "button",
            className: "".concat(E ? "resend-button-disabled" : "", " resend-verification-email-button"),
            disabled: E || g,
            onClick: r
        }, s(f)), h && I().createElement("button", {
            type: "button",
            className: "change-email-button",
            onClick: i
        }, s(h)))))
    }

    function ge() {
        return {
            retryable: !0,
            withCredentials: !0,
            url: "".concat(xe, "/v1/email")
        }
    }

    function Ee(e) {
        var t = null == e || null === (t = e.data) || void 0 === t ? void 0 : t.errors;
        return t && t[0] && t[0].code
    }
    be.propTypes = {
        translate: n().func.isRequired,
        onHide: n().func.isRequired,
        show: n().bool.isRequired,
        onPrimaryAction: n().func.isRequired,
        onSecondaryAction: n().func.isRequired,
        onInputChange: n().func.isRequired,
        onKeyDown: n().func.isRequired,
        onBackAction: n().func.isRequired,
        onInputFocus: n().func.isRequired
    };
    var Pe = be,
        xe = h.EnvironmentUrls.accountSettingsApi,
        Se = h.EnvironmentUrls.authApi,
        we = h.EnvironmentUrls.apiGatewayUrl,
        Ce = h.EnvironmentUrls.accountInformationApi,
        Ne = {
            header: "alt_title",
            body: "alt_body",
            primaryButton: "alt_primary_button_text",
            secondaryButton: "alt_secondary_button_text"
        },
        Te = function() {
            return {
                retryable: !0,
                withCredentials: !0,
                url: "".concat(we, "/universal-app-configuration/v1/behaviors/account-settings-ui/content")
            }
        };

    function Ae() {
        var e = Te();
        return m.httpService.get(e).then(function(e) {
            return e.data
        }, function(e) {
            return {}
        })
    }

    function ke(e, t, n, r, i, o, a) {
        try {
            var c = e[o](a),
                l = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(l) : Promise.resolve(l).then(r, i)
    }

    function Oe(c) {
        return function() {
            var e = this,
                a = arguments;
            return new Promise(function(t, n) {
                var r = c.apply(e, a);

                function i(e) {
                    ke(r, t, n, i, o, "next", e)
                }

                function o(e) {
                    ke(r, t, n, i, o, "throw", e)
                }
                i(void 0)
            })
        }
    }

    function Me() {
        var e = {
            retryable: !0,
            withCredentials: !0,
            url: "".concat(xe, "/v1/email/verify")
        };
        return m.httpService.post(e).then(function() {
            return !0
        }, Ee)
    }

    function Re(e) {
        return De({
            origin: N,
            closeCallback: e
        })
    }

    function Ie(e) {
        switch (e) {
            case x:
                return Ke;
            case S:
                return _e;
            default:
                return ""
        }
    }
    var De = function() {
            var e = Oe(regeneratorRuntime.mark(function e(n) {
                var r, t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Ae();
                        case 2:
                            return r = e.sent, t = ge(), e.abrupt("return", m.httpService.get(t).then(function(e) {
                                var t = e.data;
                                return null != t && t.emailAddress && (!n.requireVerification || t.verified) || (e = new CustomEvent("OpenVerificationModal", {
                                    detail: {
                                        isEmailVerified: t.verified,
                                        email: null == t ? void 0 : t.emailAddress,
                                        skipCallback: n.skipCallback,
                                        origin: n.origin,
                                        experimentParameters: null == n ? void 0 : n.experimentParameters,
                                        requireVerification: n.requireVerification,
                                        closeCallback: n.closeCallback,
                                        settingsUiPolicy: r
                                    }
                                }), window.dispatchEvent(e)), t
                            }, function(e) {
                                return console.log(e), !1
                            }));
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        je = function() {
            var e = Oe(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return t = {
                                retryable: !0,
                                withCredentials: !0,
                                url: "".concat(Se, "/v2/metadata")
                            }, e.abrupt("return", m.httpService.get(t));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        Le = function() {
            var e = Oe(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return t = {
                                retryable: !0,
                                withCredentials: !0,
                                url: "".concat(we, "/product-experimentation-platform/v1/projects/1/layers/Website.Logout.ContactMethodModal/values")
                            }, n = {
                                parameters: Object.values(Ne).join(",")
                            }, e.abrupt("return", m.httpService.get(t, n));
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        Ue = function() {
            var e = Oe(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, je();
                        case 2:
                            if (n = e.sent, null !== (n = n.data) && void 0 !== n && n.IsEmailUpsellAtLogoutEnabled) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", !1);
                        case 5:
                            return r = {}, e.prev = 6, e.next = 9, Le();
                        case 9:
                            r = e.sent, e.next = 14;
                            break;
                        case 12:
                            e.prev = 12, e.t0 = e.catch(6);
                        case 14:
                            return e.abrupt("return", De({
                                origin: C,
                                experimentParameters: null === (n = r) || void 0 === n ? void 0 : n.data,
                                skipCallback: t
                            }));
                        case 16:
                        case "end":
                            return e.stop()
                    }
                }, e, null, [
                    [6, 12]
                ])
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        _e = "addEmail",
        Ke = "verifyEmail",
        Be = "addPhone",
        He = "verifyPhone",
        qe = "phoneAdded",
        Ve = "discoverabilityConsent",
        Fe = "unset",
        Ge = "homepage",
        We = "challenge",
        ze = L,
        $e = _,
        Ye = U,
        Xe = Bn = 9,
        Je = 6,
        Qe = CoreRobloxUtilities;

    function Ze(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), r.push.apply(r, n)), r
    }

    function et(r) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Ze(Object(i), !0).forEach(function(e) {
                var t, n;
                t = r, e = i[n = e], n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : Ze(Object(i)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
            })
        }
        return r
    }

    function tt(e, t) {
        Qe.eventStreamService.sendEventWithTarget(e.type, e.context, et(et({}, e.params), {}, {
            origin: t.origin,
            section: t.section
        }))
    }

    function nt(e, t) {
        return (e = et({}, e)).params = et(et({}, e.params), {}, {
            errorCode: t
        }), e
    }
    var rt = Qe.eventStreamService.eventTypes,
        it = "verificationUpsell",
        ot = {
            showModal: {
                name: "showModal",
                type: rt.modalAction,
                context: it,
                params: {
                    aType: "shown"
                }
            },
            dismissModal: {
                name: "dismissModal",
                type: rt.modalAction,
                context: it,
                params: {
                    aType: "dismissed"
                }
            },
            touchEmail: {
                name: "touchEmail",
                type: rt.formInteraction,
                context: it,
                params: {
                    aType: "focus",
                    field: "email"
                }
            },
            showError: {
                name: "showError",
                type: rt.formInteraction,
                context: it,
                params: {
                    aType: "shown",
                    field: "errorMessage"
                }
            },
            clickContinue: {
                name: "clickContinue",
                type: rt.formInteraction,
                context: it,
                params: {
                    btn: "continue"
                }
            },
            clickSendConfirmationEmail: {
                name: "clickSendConfirmationEmail",
                type: rt.formInteraction,
                context: it,
                params: {
                    aType: "click",
                    btn: "sendConfirmation"
                }
            },
            clickResendConfirmationEmail: {
                name: "clickResendConfirmationEmail",
                type: rt.formInteraction,
                context: it,
                params: {
                    aType: "click",
                    btn: "resendConfirmation"
                }
            },
            clickChangeEmail: {
                name: "clickChangeEmail",
                type: rt.formInteraction,
                context: it,
                params: {
                    aType: "click",
                    btn: "changeEmail"
                }
            },
            skipLogoutAnyway: {
                name: "skipLogoutAnyway",
                type: rt.formInteraction,
                context: it,
                params: {
                    aType: "click",
                    btn: "skipLogoutAnyway"
                }
            },
            skipPrepurchaseVerification: {
                name: "skipPrepurchaseVerification",
                type: rt.formInteraction,
                context: it,
                params: {
                    aType: "click",
                    btn: "skipPrepurchaseVerification"
                }
            }
        };

    function at(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return ct(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ct(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function ct(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var lt = j,
        st = L,
        ut = Bn;

    function dt(e) {
        var t = e.translate,
            n = at((0, R.useState)(!1), 2),
            e = n[0],
            r = n[1],
            n = fe(),
            i = n.emailUpsellState,
            o = n.dispatch;

        function a() {
            var e, t, r = Ie(i.pageName);
            switch (i.pageName) {
                case x:
                    tt(ot.clickResendConfirmationEmail, {
                        origin: i.origin,
                        section: r
                    }), Me().then(function(e) {
                        !0 !== e ? (o({
                            type: p,
                            errorMsg: lt
                        }), e = nt(ot.showError, e), tt(e, {
                            origin: i.origin,
                            section: r
                        })) : (o({
                            type: y
                        }), setTimeout(function() {
                            o({
                                type: v
                            })
                        }, 15e3))
                    });
                    break;
                case S:
                    tt(ot.clickContinue, {
                        origin: i.origin,
                        section: r
                    }), t = i.userEmailInput, /\S+@\S+\.\S+/.test(t) ? (tt(ot.clickSendConfirmationEmail, {
                        origin: i.origin,
                        section: r
                    }), o({
                        type: b,
                        isEmailUpdating: !0
                    }), e = {
                        emailAddress: i.userEmailInput
                    }, t = ge(), m.httpService.post(t, e).then(function() {
                        return !0
                    }, Ee).then(function(e) {
                        var t, n;
                        !0 !== e ? (n = function(e) {
                            switch (e) {
                                case Je:
                                    return $e;
                                case Xe:
                                    return ze;
                                default:
                                    return Ye
                            }
                        }(e), t = nt(ot.showError, e), tt(t, {
                            origin: i.origin,
                            section: r
                        }), o({
                            type: p,
                            errorMsg: n
                        }), o({
                            type: b,
                            isEmailUpdating: !1
                        })) : (o({
                            type: l,
                            isEmailVerified: !1,
                            userEmail: (e = i.userEmailInput, t = e.indexOf("@"), n = e.substring(0, 1), "".concat(n, "*****").concat(e.substring(t)))
                        }), o({
                            type: E
                        }), o({
                            type: u,
                            pageName: x
                        }), o({
                            type: s
                        }), o({
                            type: b,
                            isEmailUpdating: !1
                        }), o({
                            type: P
                        }))
                    }), o({
                        type: s
                    })) : (e = nt(ot.showError, ut), tt(e, {
                        origin: i.origin,
                        section: r
                    }), o({
                        type: p,
                        errorMsg: st
                    }))
            }
        }
        return (0, R.useEffect)(function() {
            i.pageName && tt(ot.showModal, {
                origin: i.origin,
                section: Ie(i.pageName)
            })
        }, [i.pageName]), (0, R.useEffect)(function() {
            window.addEventListener("OpenVerificationModal", function(e) {
                r(!0), o({
                    type: g,
                    origin: e.detail.origin,
                    skipCallback: e.detail.skipCallback,
                    closeCallback: e.detail.closeCallback
                }), o({
                    type: l,
                    isEmailVerified: e.detail.isEmailVerified,
                    userEmail: e.detail.email
                });
                var t = e.detail.requireVerification && e.detail.email ? x : S;
                o({
                    type: u,
                    pageName: t
                }), o({
                    type: s,
                    experimentParameters: null === (t = e.detail) || void 0 === t ? void 0 : t.experimentParameters,
                    settingsUiPolicy: null === (e = e.detail) || void 0 === e ? void 0 : e.settingsUiPolicy
                })
            }, !1)
        }, []), I().createElement("div", null, I().createElement(Pe, {
            show: e,
            onHide: function() {
                return tt(ot.dismissModal, {
                    origin: i.origin,
                    section: Ie(i.pageName)
                }), o({
                    type: E
                }), i.closeCallback && i.closeCallback(i.isEmailAdded), void r(!1)
            },
            onPrimaryAction: a,
            onSecondaryAction: function() {
                var e = Ie(i.pageName);
                switch (i.pageName) {
                    case x:
                        tt(ot.clickChangeEmail, {
                            origin: i.origin,
                            section: e
                        }), o({
                            type: u,
                            pageName: S
                        }), o({
                            type: s
                        });
                        break;
                    case S:
                        i.skipCallback && (tt(i.origin === C ? ot.skipLogoutAnyway : ot.skipPrepurchaseVerification, {
                            origin: i.origin,
                            section: e
                        }), i.skipCallback()), o({
                            type: E
                        }), r(!1)
                }
            },
            onInputFocus: function() {
                tt(ot.touchEmail, {
                    origin: i.origin,
                    section: Ie(i.pageName)
                })
            },
            onInputChange: function(e) {
                o({
                    type: d,
                    pageName: S,
                    value: e
                })
            },
            onKeyDown: function(e) {
                return e === M && a()
            },
            onBackAction: function() {
                return o({
                    type: u,
                    pageName: S
                }), void o({
                    type: s
                })
            },
            translate: t
        }))
    }
    dt.propTypes = {
        translate: n().func.isRequired
    };
    var pt = dt;

    function mt(e) {
        e = e.translate;
        return I().createElement(F, null, I().createElement(pt, {
            translate: e
        }))
    }
    mt.propTypes = {
        translate: n().func.isRequired
    };
    var ft = (0, i.withTranslations)(mt, a),
        ht = "CLOSE_PHONE_NUMBER_MODAL",
        yt = "SET_ERROR_MESSAGE",
        vt = "SET_PHONE_NUMBER",
        bt = "SET_COUNTRY",
        gt = "SET_PAGE",
        Et = "SET_PHONE_VERIFICATION_STATUS",
        Pt = "SET_PREFIX_OPTIONS_LIST",
        xt = "SET_LOGGING_VALUES",
        St = "SET_DISCOVERABILITY_CONSENT_PREFILL",
        wt = "Action.Done",
        Ct = "Action.Continue",
        Nt = "Action.AddPhoneNumber",
        Tt = "Action.ChangePhoneNumber",
        At = "Action.ResendCode",
        kt = "Action.CodeResent",
        Ot = "Heading.VerifyYourPhone",
        Mt = "Label.EnterCode",
        Rt = "Label.PhoneNumber",
        It = "Heading.VerificationCode",
        Dt = "Message.InvalidSmsCode",
        jt = "Description.VerificationCodeSmsFeesMayApply",
        Lt = "Description.PhoneNumberNeverPublic",
        Ut = "Description.ShortCodeLegalDisclaimer",
        _t = "Heading.PhoneIsVerified",
        Kt = "Description.PhoneForRecovery",
        Bt = "Response.PhoneNumberAlreadyLinked",
        Ht = "Response.TooManyVerificationAttempts",
        qt = "Response.PhoneHasTooManyAssociatedAccounts",
        Vt = "Response.ErrorPhoneFormatInvalid",
        Ft = "Response.InvalidPhoneNumberError",
        Gt = "Response.ErrorTryAgain",
        Wt = "Label.Dialog.EditPhoneCurrentNumber",
        zt = "Description.Dialog.EditPhoneWarning",
        $t = "Action.Dialog.EditPhonePrimary",
        Yt = "Action.Dialog.EditPhoneSecondary",
        Xt = "Heading.Dialog.RemovePhone",
        Jt = "Action.Dialog.RemovePhonePrimary",
        Qt = "Action.Dialog.RemovePhoneSecondary",
        Zt = "Description.Dialog.RemovePhoneWarning",
        en = '<a href="https://en.help.roblox.com/hc/articles/9483830673556-Roblox-SMS-Terms-of-Service">',
        tn = '<a href="https://en.help.roblox.com/hc/articles/115004630823">',
        nn = "</a>",
        rn = "<br>",
        on = "Action.Done",
        an = "Action.LearnMore",
        cn = "Description.PhoneDiscoverabilityPrivacy",
        ln = "Description.WantToBeRecommendedViaPhone",
        sn = "Header.LetFriendsFindYou",
        un = "Label.No",
        dn = "Label.Yes",
        pn = "Response.ErrorTryAgain",
        mn = "Heading.VerificationRequired",
        fn = "Heading.DontGetLockedOut",
        hn = "Label.RecoverIfPasswordLost",
        yn = "Heading.ImproveAccountSecurity",
        vn = "Label.KeepBadActorsOut",
        bn = "Action.AddPhoneNumber",
        gn = "Action.AddEmailAddress",
        En = "Action.LogOutText",
        Pn = "Action.Support",
        xn = "US",
        Sn = function(e) {
            return "+".concat(e)
        },
        wn = function(e, t) {
            return "".concat(e, " +(").concat(t, ")")
        },
        Cn = function(e, t) {
            return "\n+".concat(e).concat(t)
        },
        Nn = "Enter",
        Tn = " (",
        An = ")",
        kn = 6,
        On = 10,
        Mn = "US",
        Rn = 2,
        t = 3,
        _ = 6,
        U = 8,
        rt = 9,
        it = 7,
        j = 6,
        In = "upsell-phone-number-number",
        Dn = "verification-code-input",
        jn = "ADD_PHONE_NUMBER_PAGE",
        Ln = "VERIFY_PHONE_NUMBER_PAGE",
        Un = "ADD_PHONE_SUCCESS_PAGE",
        _n = "DELETE_PHONE_CONFIRM_PAGE",
        Kn = "PHONE_DISCOVERABILITY_CONSENT_PAGE",
        L = Qe.eventStreamService.eventTypes,
        Bn = "verificationUpsell",
        Hn = {
            phoneNumberModalDismissed: {
                name: "phoneNumberModalDismissed",
                type: L.modalAction,
                context: Bn,
                params: {
                    aType: "dismissed"
                }
            },
            phoneNumberModalShown: {
                name: "phoneNumberModalShown",
                type: L.modalAction,
                context: Bn,
                params: {
                    aType: "shown"
                }
            },
            phoneNumberModalErrorShown: {
                name: "phoneNumberModalErrorShown",
                type: L.modalAction,
                context: Bn,
                params: {
                    aType: "shown",
                    field: "errorMessage"
                }
            },
            addPhonePrefixPressed: {
                name: "addPhonePrefixPressed",
                type: L.formInteraction,
                context: Bn,
                params: {
                    aType: "focus",
                    field: "countryPrefix"
                }
            },
            addPhonePhoneNumberPressed: {
                name: "addPhonePhoneNumberPressed",
                type: L.formInteraction,
                context: Bn,
                params: {
                    aType: "focus",
                    field: "phoneNumber"
                }
            },
            addPhoneContinuePressed: {
                name: "addPhoneContinuePressed",
                type: L.formInteraction,
                context: Bn,
                params: {
                    btn: "continue"
                }
            },
            verifyPhoneChangePhoneNumberPressed: {
                name: "verifyPhoneChangePhoneNumberPressed",
                type: L.formInteraction,
                context: Bn,
                params: {
                    btn: "changePhoneNumber"
                }
            },
            verifyPhoneCodeFieldPressed: {
                name: "verifyPhoneCodeFieldPressed",
                type: L.formInteraction,
                context: Bn,
                params: {
                    aType: "focus",
                    field: "verificationCode"
                }
            },
            verifyPhoneContinuePressed: {
                name: "verifyPhoneContinuePressed",
                type: L.formInteraction,
                context: Bn,
                params: {
                    btn: "continue"
                }
            },
            verifyPhoneResendPressed: {
                name: "verifyPhoneResendPressed",
                type: L.formInteraction,
                context: Bn,
                params: {
                    btn: "resendCode"
                }
            },
            phoneAddedDonePressed: {
                name: "phoneAddedDonePressed",
                type: L.formInteraction,
                context: Bn,
                params: {
                    btn: "done"
                }
            }
        };

    function qn(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Vn(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Vn(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Vn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function Fn(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), r.push.apply(r, n)), r
    }

    function Gn(r) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Fn(Object(i), !0).forEach(function(e) {
                var t, n;
                t = r, e = i[n = e], n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : Fn(Object(i)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
            })
        }
        return r
    }

    function Wn(e, t) {
        var n;
        switch (t.type) {
            case vt:
                return Gn(Gn({}, e), {}, {
                    phone: t.phone,
                    errorMessage: ""
                });
            case bt:
                return Gn(Gn({}, e), {}, {
                    phonePrefixPickerIndex: t.phonePrefixPickerIndex,
                    errorMessage: ""
                });
            case yt:
                return Gn(Gn({}, e), {}, {
                    errorMessage: t.errorMessage
                });
            case gt:
                return Gn(Gn({}, e), {}, {
                    errorMessage: "",
                    pageName: t.pageName
                });
            case Et:
                return Gn(Gn({}, e), {}, {
                    isPhoneVerified: t.isPhoneVerified
                });
            case St:
                return Gn(Gn({}, e), {}, {
                    shouldPrefillAffirmativeDiscoverabilityConsent: null !== (n = null == t ? void 0 : t.shouldPrefillAffirmativeDiscoverabilityConsent) && void 0 !== n && n
                });
            case Pt:
                return Gn(Gn({}, e), {}, {
                    phonePrefixOptionsList: t.phonePrefixOptionsList
                });
            case xt:
                return Gn(Gn({}, e), {}, {
                    origin: t.origin
                });
            case ht:
                return Gn(Gn({}, $n), {}, {
                    isOpen: !1,
                    errorMessage: ""
                });
            default:
                return $n
        }
    }

    function zn(e) {
        var t = e.children,
            e = (n = qn((0, R.useReducer)(Wn, $n), 2))[0],
            n = n[1];
        return I().createElement(Yn.Provider, {
            value: {
                phoneUpsellState: e,
                dispatch: n
            }
        }, t)
    }
    var $n = {
            isOpen: !0,
            pageName: jn,
            errorMessage: "",
            origin: Fe,
            phone: "",
            isPhoneVerified: !1,
            phonePrefixPickerIndex: 0,
            phonePrefixOptionsList: [],
            shouldDiscoverabilityConsentDefaultYes: !1
        },
        Yn = (0, R.createContext)($n);

    function Xn() {
        return (0, R.useContext)(Yn)
    }

    function Jn(e) {
        return m.httpService.get(e).then(function(e) {
            var t, n = e.data,
                e = n.find(function(e) {
                    return !0 === e.isDefault
                }),
                r = null !== (e = null == e ? void 0 : e.code) && void 0 !== e ? e : or;
            return n.filter(function(e) {
                return e.code !== r || (t = e, !1)
            }), t && n.unshift(t), n
        }, function(e) {
            return !1
        })
    }

    function Qn() {
        var e = {
            retryable: !0,
            withCredentials: !0,
            url: "".concat(we, "/phone-number-api/v1/phone-prefix-list")
        };
        return Jn(e)
    }

    function Zn(e) {
        var t = e.phone,
            n = e.prefix,
            r = e.countryCode,
            e = {
                retryable: !0,
                withCredentials: !0,
                url: "".concat(Ce, "/v1/phone")
            },
            t = {
                countryCode: r,
                prefix: n,
                phone: t
            };
        return m.httpService.post(e, t)
    }

    function er(e) {
        var t = {
                code: 0 < arguments.length && void 0 !== e ? e : ""
            },
            e = {
                retryable: !0,
                withCredentials: !0,
                url: "".concat(Ce, "/v1/phone/verify")
            };
        return m.httpService.post(e, t)
    }

    function tr(e) {
        var t = {
                retryable: !0,
                withCredentials: !0,
                url: "".concat(Ce, "/v1/phone/resend")
            },
            e = (e = e) || {};
        return m.httpService.post(t, e).then(function(e) {
            e.data;
            return !0
        }, function(e) {
            return !1
        })
    }

    function nr() {
        var e = {
            retryable: !0,
            withCredentials: !0,
            url: "".concat(Ce, "/v1/phone/delete")
        };
        return m.httpService.post(e, {})
    }

    function rr(e) {
        switch (e) {
            case mr:
                return ar;
            case fr:
                return cr;
            case yr:
                return lr;
            case vr:
                return sr;
            case hr:
                return dr;
            default:
                return ur
        }
    }

    function ir(e) {
        switch (e) {
            case jn:
                return Be;
            case Ln:
                return He;
            case Un:
                return qe;
            case Kn:
                return Ve;
            default:
                return ""
        }
    }
    zn.propTypes = {
        children: n().node.isRequired
    };
    var or = xn,
        ar = Bt,
        cr = Ht,
        lr = Vt,
        sr = Ft,
        ur = Gt,
        dr = qt,
        pr = Dt,
        mr = t,
        fr = _,
        hr = rt,
        yr = Rn,
        vr = U,
        br = it,
        gr = j;

    function Er(e) {
        var t = e.translate,
            e = Xn().phoneUpsellState;
        return I().createElement("p", {
            className: "input-field-error-text sms-code-error text-error modal-error-message"
        }, e.errorMessage ? t(e.errorMessage) : null)
    }
    Er.propTypes = {
        translate: n().func.isRequired
    };
    var Pr = Er;

    function xr(e, t, n, r, i, o, a) {
        try {
            var c = e[o](a),
                l = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(l) : Promise.resolve(l).then(r, i)
    }

    function Sr(e) {
        var t = e.translate,
            n = Xn(),
            r = n.phoneUpsellState,
            i = n.dispatch,
            o = Sn,
            a = wn,
            c = r.phone,
            e = r.phonePrefixPickerIndex,
            l = r.phonePrefixOptionsList,
            n = r.pageName,
            s = r.origin,
            r = In,
            u = ir(n);
        (0, R.useEffect)(function() {
            function e() {
                var c;
                return c = regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (0 === (t = l).length) return e.next = 4, Qn();
                                e.next = 6;
                                break;
                            case 4:
                                t = e.sent, i({
                                    type: Pt,
                                    phonePrefixOptionsList: t
                                });
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }), (e = function() {
                    var e = this,
                        a = arguments;
                    return new Promise(function(t, n) {
                        var r = c.apply(e, a);

                        function i(e) {
                            xr(r, t, n, i, o, "next", e)
                        }

                        function o(e) {
                            xr(r, t, n, i, o, "throw", e)
                        }
                        i(void 0)
                    })
                }).apply(this, arguments)
            }! function() {
                e.apply(this, arguments)
            }()
        }, []);
        var d = null !== (d = null == l || null === (d = l[e]) || void 0 === d ? void 0 : d.prefix) && void 0 !== d ? d : "";
        return I().createElement("div", null, I().createElement("label", {
            htmlFor: r
        }, I().createElement("p", {
            className: "verification-code-label font-caption-header text-primary"
        }, t(Rt))), I().createElement("div", {
            id: "upsell-phone",
            className: "phone-number-input-container input-field form-control"
        }, I().createElement("div", {
            id: "upsell-phonenumber",
            className: "phone-input-row"
        }, I().createElement("span", {
            className: "phone-prefix-wrapper"
        }, I().createElement("div", {
            className: "phone-prefix-selected text"
        }, o(d)), I().createElement("select", {
            className: "phone-prefix-dropdown input-field rbx-select",
            onChange: function(e) {
                e = e.target.value;
                i({
                    type: bt,
                    phonePrefixPickerIndex: e
                })
            },
            onFocus: function() {
                tt(Hn.addPhonePrefixPressed, {
                    origin: s,
                    section: u
                })
            },
            value: e
        }, l.map(function(e, t) {
            return I().createElement("option", {
                className: "prefix-option",
                value: t
            }, a(e.localizedName, e.prefix))
        }))), I().createElement("div", {
            id: "upsell-phonenumber-divider",
            className: "phone-divider"
        }), I().createElement("input", {
            id: r,
            type: "tel",
            value: c,
            className: "phone-input form-control",
            placeholder: t(Rt),
            autoComplete: "tel-national",
            onChange: function(e) {
                return i({
                    type: vt,
                    phone: e.target.value
                })
            },
            onFocus: function() {
                tt(Hn.addPhonePhoneNumberPressed, {
                    origin: s,
                    section: u
                })
            }
        }))))
    }
    Sr.propTypes = {
        translate: n().func.isRequired
    };
    var wr = Sr;

    function Cr(e, t, n, r, i, o, a) {
        try {
            var c = e[o](a),
                l = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(l) : Promise.resolve(l).then(r, i)
    }

    function Nr(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Tr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tr(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Tr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var j = Nt,
        Nt = Ct,
        jt = jt,
        Ar = Lt,
        Ut = Ut,
        kr = Wt,
        Or = zt,
        Mr = $t,
        Rr = Yt,
        Ir = nn,
        Dr = tn,
        jr = en,
        Lr = rn;

    function Ur(e) {
        var t = e.translate,
            n = e.onHide,
            r = e.existingPhoneNumber,
            i = e.alwaysShowLegalText,
            o = e.requireLegalTextCheckbox,
            a = e.headingKey,
            c = e.descriptionKey,
            l = e.legalTextKey,
            s = e.buttonKey,
            u = Xn(),
            d = u.phoneUpsellState,
            p = u.dispatch,
            m = d.phone,
            f = d.phonePrefixPickerIndex,
            h = d.phonePrefixOptionsList,
            y = d.pageName,
            v = d.origin,
            e = Nr((0, R.useState)(!1), 2),
            u = e[0],
            b = e[1],
            d = Nr((0, R.useState)(!1), 2),
            e = d[0],
            g = d[1],
            d = Nr((0, R.useState)(!1), 2),
            E = d[0],
            P = d[1],
            x = ir(y);
        (0, R.useEffect)(function() {
            var e = null == h || null === (e = h[f]) || void 0 === e ? void 0 : e.code;
            g(!i && e !== Mn)
        }, [i, h, f]);
        var l = t(l, {
                linkTagWithSmsTos: jr,
                linkTagWithPrivacyPolicy: Dr,
                linkTagEnd: Ir,
                linkTagBreak: Lr
            }),
            S = function() {
                var c, e = (c = regeneratorRuntime.mark(function e() {
                    var t, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return b(!0), n = h[f], t = n.prefix, n = n.code, tt(Hn.addPhoneContinuePressed, {
                                    origin: v,
                                    section: x
                                }), e.next = 5, Zn({
                                    phone: m,
                                    prefix: t,
                                    countryCode: n
                                }).then(function() {
                                    p({
                                        type: gt,
                                        pageName: Ln
                                    })
                                }).catch(function(e) {
                                    var t = Ee(e),
                                        e = nt(Hn.phoneNumberModalErrorShown, t);
                                    tt(e, {
                                        origin: v,
                                        section: x
                                    }), p({
                                        type: yt,
                                        errorMessage: rr(t)
                                    })
                                }).finally(function() {
                                    b(!1)
                                });
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }), function() {
                    var e = this,
                        a = arguments;
                    return new Promise(function(t, n) {
                        var r = c.apply(e, a);

                        function i(e) {
                            Cr(r, t, n, i, o, "next", e)
                        }

                        function o(e) {
                            Cr(r, t, n, i, o, "throw", e)
                        }
                        i(void 0)
                    })
                });
                return function() {
                    return e.apply(this, arguments)
                }
            }();
        return I().createElement("div", null, I().createElement(he.Modal.Header, {
            useBaseBootstrapComponent: !0
        }, I().createElement("div", {
            className: "verification-upsell-title-container"
        }, I().createElement(he.Modal.Title, {
            id: "verification-upsell-modal-title"
        }, t(r ? Mr : a))), I().createElement("button", {
            type: "button",
            className: "close close-button",
            onClick: n
        }, I().createElement("span", {
            className: "icon-close"
        }))), I().createElement(he.Modal.Body, null, I().createElement("div", {
            className: "phone-number-submission-container"
        }, I().createElement("div", {
            className: "verification-upsell-text-body text-description"
        }, t(c)), r && I().createElement(I().Fragment, null, I().createElement("div", {
            className: "verification-upsell-text-body text-description"
        }, t(kr), " ", r), I().createElement("div", {
            className: "border-warning two-step-warning"
        }, I().createElement("span", {
            className: "icon-warning-orange"
        }), I().createElement("span", {
            className: "small text-warning form-warning-text"
        }, t(Or)))), I().createElement(wr, {
            translate: t
        }), I().createElement("div", {
            className: "phone-verification-nonpublic-text text-description font-caption-body"
        }, t(Ar)), I().createElement(Pr, {
            translate: t
        }))), I().createElement(he.Modal.Footer, null, o ? I().createElement("div", {
            className: "phone-verification-legal-container checkbox"
        }, I().createElement("input", {
            id: "phone-verification-legal-checkbox",
            className: "checkbox",
            type: "checkbox",
            checked: E,
            onChange: function() {
                return P(!E)
            }
        }), I().createElement("label", {
            className: "text-description font-caption-body phone-verification-legal-text",
            hidden: e,
            htmlFor: "phone-verification-legal-checkbox",
            dangerouslySetInnerHTML: {
                __html: l
            }
        })) : I().createElement("div", {
            className: "text-description font-caption-body phone-verification-legal-text",
            hidden: e,
            dangerouslySetInnerHTML: {
                __html: l
            }
        }), I().createElement("div", {
            className: "buttons-section"
        }, I().createElement(he.Button, {
            type: "button",
            id: "add-phone-number-continue-button",
            className: "accept-btn",
            variant: he.Button.variants.primary,
            isDisabled: u || 0 === m.length || o && !E,
            onClick: function() {
                return S()
            }
        }, t(s))), I().createElement("div", null, r && I().createElement("span", {
            className: "text-report remove-phone-label",
            onClick: function() {
                return p({
                    type: gt,
                    pageName: _n
                })
            },
            onKeyDown: function() {
                return p({
                    type: gt,
                    pageName: _n
                })
            },
            role: "button",
            tabIndex: 0
        }, t(Rr)))))
    }
    Ur.propTypes = {
        translate: n().func.isRequired,
        onHide: n().func.isRequired,
        existingPhoneNumber: n().string,
        alwaysShowLegalText: n().bool,
        requireLegalTextCheckbox: n().bool,
        headingKey: n().string,
        descriptionKey: n().string,
        legalTextKey: n().string,
        buttonKey: n().string
    }, Ur.defaultProps = {
        existingPhoneNumber: null,
        alwaysShowLegalText: !1,
        requireLegalTextCheckbox: !1,
        headingKey: j,
        descriptionKey: jt,
        legalTextKey: Ut,
        buttonKey: Nt
    };
    var _r = Ur;

    function Kr(e) {
        var t = e.translate,
            n = e.onHide,
            r = e.headingKey,
            i = e.descriptionKey,
            o = Xn().phoneUpsellState,
            a = o.origin,
            e = o.pageName,
            o = wt,
            c = ir(e);
        return I().createElement("div", null, I().createElement(he.Modal.Body, null, I().createElement("div", {
            className: "phone-number-verification-upsell-image"
        }), I().createElement("div", {
            className: "verification-upsell-title-container phone-number-verification-success-page-title page-title"
        }, I().createElement(he.Modal.Title, {
            id: "verification-upsell-modal-title"
        }, t(r))), I().createElement("div", {
            className: "phone-number-verification-text-body text-description"
        }, t(i))), I().createElement(he.Modal.Footer, null, I().createElement("button", {
            type: "button",
            className: "btn-cta-md btn-max-width phone-number-verify-button",
            onClick: function() {
                tt(Hn.phoneAddedDonePressed, {
                    origin: a,
                    section: c
                }), n()
            }
        }, t(o))))
    }

    function Br() {
        var e = {
            retryable: !0,
            withCredentials: !0,
            url: "".concat(we, "/user-settings-api/v1/user-settings/metadata")
        };
        return m.httpService.get(e).then(function(e) {
            return e.data
        }, function(e) {
            return null
        })
    }

    function Hr(e) {
        var t = {
                retryable: !0,
                withCredentials: !0,
                url: "".concat(we, "/user-settings-api/v1/user-settings")
            },
            e = {
                phoneNumberDiscoverability: e
            };
        return m.httpService.post(t, e).then(function(e) {
            return !0
        }).catch(function() {
            return !1
        })
    }
    Kr.propTypes = {
        translate: n().func.isRequired,
        onHide: n().func.isRequired,
        headingKey: n().string,
        descriptionKey: n().string
    }, Kr.defaultProps = {
        headingKey: _t,
        descriptionKey: Kt
    };
    var qr = Kr,
        Vr = "Unset",
        Fr = "NotDiscoverable",
        Gr = "Discoverable",
        Wr = "discoverabilityPageLoad",
        zr = "discoverabilityPageClick",
        $r = "discoverabilityPageRadioButtonClick";

    function Yr(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Xr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xr(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Xr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function Jr(e) {
        var t = e.translate,
            n = e.shouldPrefillAffirmativeDiscoverabilityConsent,
            r = e.origin,
            i = e.onHide,
            o = e.headingKey,
            a = e.descriptionKey,
            c = Xn().dispatch,
            l = on,
            s = an,
            u = cn,
            d = ln,
            p = sn,
            m = un,
            f = dn,
            h = pn,
            y = Wr,
            v = zr,
            b = $r,
            g = Yr((0, R.useState)(n ? Gr : Vr), 2),
            E = g[0],
            P = g[1],
            e = Yr((0, R.useState)(!1), 2),
            g = e[0],
            x = e[1],
            e = function(e) {
                P(e.currentTarget.value), Qe.eventStreamService.sendEventWithTarget(b, e.currentTarget.value, {
                    origin: r
                })
            };
        return (0, R.useEffect)(function() {
            Qe.eventStreamService.sendEventWithTarget(y, "phoneVerificationUpsell", {
                version: n ? "non_eu_version" : "eu_version",
                origin: r
            })
        }, []), I().createElement("div", {
            className: "phone-discoverability-consent"
        }, I().createElement(he.Modal.Body, {
            className: "verification-grid"
        }, I().createElement("span", {
            className: "icon-spot-success-xl verification-grid-icon"
        }), I().createElement("div", {
            className: "discoverability-text-section"
        }, I().createElement("div", {
            className: "verification-upsell-title-container page-title "
        }, I().createElement(he.Modal.Title, null, t(o))), I().createElement("div", {
            className: "text-description"
        }, t(a))), I().createElement("span", {
            className: "icon-spot-find-friends-xl verification-grid-icon"
        }), I().createElement("div", {
            className: "discoverability-text-section"
        }, I().createElement("div", {
            className: "verification-upsell-title-container page-title"
        }, I().createElement(he.Modal.Title, null, t(p))), I().createElement("div", {
            className: "text-description"
        }, t(d))), I().createElement("div", {
            className: "verification-grid-icon"
        }), I().createElement("div", {
            className: "discoverability-radio-button-section"
        }, I().createElement("div", {
            className: "radio discoverability-consent-option"
        }, I().createElement("input", {
            type: "radio",
            name: "discoverability-options",
            id: "consent-radio-button",
            value: Gr,
            checked: E === Gr,
            onClick: e
        }), I().createElement("label", {
            className: "text-description",
            htmlFor: "consent-radio-button"
        }, t(f))), I().createElement("div", {
            className: "radio discoverability-consent-option"
        }, I().createElement("input", {
            type: "radio",
            name: "discoverability-options",
            id: "no-consent-radio-button",
            value: Fr,
            checked: E === Fr,
            onClick: e
        }), I().createElement("label", {
            className: "text-description",
            htmlFor: "no-consent-radio-button"
        }, t(m)))), I().createElement("div", {
            className: "verification-grid-icon"
        }), I().createElement("div", null, I().createElement("div", {
            className: "text-secondary"
        }, t(u)), I().createElement("a", {
            className: "text-secondary text-link learn-more-link",
            target: "_blank",
            rel: "noreferrer",
            href: "https://en.help.roblox.com/hc/articles/7416652004884"
        }, t(s)))), I().createElement(he.Modal.Footer, null, I().createElement(Pr, {
            translate: t
        }), I().createElement("button", {
            type: "button",
            className: "btn-cta-md btn-max-width phone-number-verify-button",
            disabled: g,
            onClick: function() {
                x(!0), Qe.eventStreamService.sendEventWithTarget(v, E, {
                    origin: r
                }), Hr(E).then(function(e) {
                    return !0 !== e ? (x(!1), void c({
                        type: yt,
                        errorMessage: h
                    })) : (c({
                        type: yt,
                        errorMessage: ""
                    }), void i())
                })
            }
        }, t(l))))
    }

    function Qr(e) {
        return e.replace(/[^0-9]/g, "").substring(0, ei)
    }
    Jr.propTypes = {
        origin: n().string.isRequired,
        translate: n().func.isRequired,
        shouldPrefillAffirmativeDiscoverabilityConsent: n().bool.isRequired,
        onHide: n().func.isRequired,
        headingKey: n().string,
        descriptionKey: n().string
    }, Jr.defaultProps = {
        headingKey: _t,
        descriptionKey: Kt
    };
    var Zr = Jr,
        ei = kn;

    function ti(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), r.push.apply(r, n)), r
    }

    function ni(r) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ti(Object(i), !0).forEach(function(e) {
                var t, n;
                t = r, e = i[n = e], n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : ti(Object(i)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
            })
        }
        return r
    }

    function ri(e, t, n, r, i, o, a) {
        try {
            var c = e[o](a),
                l = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(l) : Promise.resolve(l).then(r, i)
    }

    function ii(c) {
        return function() {
            var e = this,
                a = arguments;
            return new Promise(function(t, n) {
                var r = c.apply(e, a);

                function i(e) {
                    ri(r, t, n, i, o, "next", e)
                }

                function o(e) {
                    ri(r, t, n, i, o, "throw", e)
                }
                i(void 0)
            })
        }
    }

    function oi(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return ai(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ai(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function ai(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function ci(e) {
        var t = e.translate,
            n = e.onHide,
            r = e.onVerify,
            i = Xn(),
            o = i.phoneUpsellState,
            a = i.dispatch,
            c = o.phone,
            l = o.phonePrefixOptionsList,
            s = o.phonePrefixPickerIndex,
            u = o.pageName,
            d = o.origin,
            p = oi((0, R.useState)({
                code: "",
                isReadyToSubmitCode: ""
            }), 2),
            m = p[0],
            f = p[1],
            h = ir(u),
            y = oi((0, R.useState)(0), 2),
            v = y[0],
            b = y[1],
            g = oi((0, R.useState)(!1), 2),
            E = g[0],
            P = g[1],
            x = oi((0, R.useState)(!1), 2),
            S = x[0],
            w = x[1],
            C = Ot,
            N = Tt,
            T = Ct,
            e = At,
            i = kt,
            p = Mt,
            u = It,
            y = Dn,
            A = Nn,
            k = kn,
            g = Tn,
            x = An,
            O = On,
            c = Cn(l[s].prefix, c);

        function M() {
            return (M = ii(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (tt(Hn.verifyPhoneContinuePressed, {
                                    origin: d,
                                    section: h
                                }), m.code.length !== k) return e.abrupt("return");
                            e.next = 3;
                            break;
                        case 3:
                            return P(!0), a({
                                type: yt,
                                errorMessage: ""
                            }), e.prev = 5, e.next = 8, er(m.code);
                        case 8:
                            return a({
                                type: Et,
                                isPhoneVerified: !0
                            }), e.next = 11, r();
                        case 11:
                            e.next = 20;
                            break;
                        case 13:
                            e.prev = 13, e.t0 = e.catch(5), n = Ee(e.t0), t = function(e) {
                                switch (e) {
                                    case gr:
                                        return cr;
                                    case br:
                                        return pr;
                                    default:
                                        return ur
                                }
                            }(n), n = nt(Hn.phoneNumberModalErrorShown, n), tt(n, {
                                origin: d,
                                section: h
                            }), a({
                                type: yt,
                                errorMessage: t
                            });
                        case 20:
                            return e.prev = 20, f(ni(ni({}, m), {}, {
                                isReadyToSubmitCode: !1
                            })), P(!1), e.finish(20);
                        case 24:
                        case "end":
                            return e.stop()
                    }
                }, e, null, [
                    [5, 13, 20, 24]
                ])
            }))).apply(this, arguments)
        }
        return (0, R.useEffect)(function() {
            m.isReadyToSubmitCode && function() {
                M.apply(this, arguments)
            }()
        }, [m]), (0, R.useEffect)(function() {
            function e() {
                return (e = ii(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Ae();
                            case 2:
                                e.sent.displayPhoneVerificationResendButton ? w(!0) : w(!1);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }! function() {
                e.apply(this, arguments)
            }()
        }, []), I().createElement("div", null, I().createElement(he.Modal.Header, {
            useBaseBootstrapComponent: !0
        }, I().createElement("div", {
            className: "verification-upsell-title-container"
        }, I().createElement(he.Modal.Title, {
            id: "verification-upsell-modal-title"
        }, t(C))), I().createElement("button", {
            type: "button",
            className: "close close-button",
            onClick: n
        }, I().createElement("span", {
            className: "icon-close"
        }))), I().createElement(he.Modal.Body, null, I().createElement("div", {
            className: "phone-number-verification-upsell-image"
        }), I().createElement("div", {
            className: "verification-upsell-text-body text-description"
        }, t(p, {
            phoneNumber: c
        })), I().createElement("button", {
            type: "button",
            className: "phone-number-change-number-button phone-number-text-button",
            onClick: function() {
                tt(Hn.verifyPhoneChangePhoneNumberPressed, {
                    origin: d,
                    section: h
                }), a({
                    type: gt,
                    pageName: jn
                })
            }
        }, t(N)), I().createElement("label", {
            htmlFor: y
        }, I().createElement("p", {
            className: "verification-code-label font-caption-header text-primary"
        }, t(u))), I().createElement("input", {
            id: y,
            type: "text",
            inputMode: "numeric",
            className: "".concat(o.errorMessage ? "input-field-error" : "", " form-control input-field input-number verification-code-input"),
            onChange: function(e) {
                return e = e.target.value, a({
                    type: yt,
                    errorMessage: ""
                }), void f(ni(ni({}, m), {}, {
                    code: Qr(e)
                }))
            },
            onPaste: function(e) {
                e = (e.clipboardData || window.clipboardData).getData("text"), e = Qr(e), f({
                    code: e,
                    isReadyToSubmitCode: !0
                })
            },
            autoComplete: "one-time-code",
            placeholder: "000000",
            onKeyDown: function(e) {
                e.key === A && f(ni(ni({}, m), {}, {
                    isReadyToSubmitCode: !0
                }))
            },
            onFocus: function() {
                tt(Hn.verifyPhoneCodeFieldPressed, {
                    origin: d,
                    section: h
                })
            },
            value: m.code
        }), I().createElement(Pr, {
            translate: t
        })), I().createElement(he.Modal.Footer, null, I().createElement("button", {
            type: "button",
            className: "btn-cta-md btn-max-width phone-number-verify-button",
            disabled: E || 6 !== m.code.length,
            onClick: function() {
                f(ni(ni({}, m), {}, {
                    isReadyToSubmitCode: !0
                }))
            }
        }, t(T)), S ? 0 === v ? I().createElement("button", {
            type: "button",
            className: " btn-secondary-md btn-max-width phone-number-resent-button",
            disabled: E,
            onClick: function() {
                var t;
                tt(Hn.verifyPhoneResendPressed, {
                    origin: d,
                    section: h
                }), 0 === v && (tr(), 0 === v && (t = setInterval(function() {
                    b(function(e) {
                        return 1 === e && clearInterval(t), e - 1
                    })
                }, 1e3)), b(O))
            }
        }, t(e)) : I().createElement("button", {
            type: "button",
            className: " btn-secondary-md btn-max-width phone-number-resent-button btn-max-width resend-button-disabled"
        }, t(i), I().createElement("span", null, g + v + x)) : null))
    }
    ci.propTypes = {
        translate: n().func.isRequired,
        onHide: n().func.isRequired,
        onVerify: n().func.isRequired
    };
    var li = ci;

    function si(e, t, n, r, i, o, a) {
        try {
            var c = e[o](a),
                l = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(l) : Promise.resolve(l).then(r, i)
    }

    function ui(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return di(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return di(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function di(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function pi(e) {
        var t = e.translate,
            n = e.existingPhoneNumber,
            r = e.onHide,
            i = Xn().dispatch,
            o = Xt,
            a = Zt,
            c = Jt,
            l = Qt,
            s = ui((0, R.useState)(!1), 2),
            e = s[0],
            u = s[1],
            s = function() {
                var c, e = (c = regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return u(!0), e.next = 3, nr().then(function() {
                                    r()
                                }).catch(function(e) {
                                    e = Ee(e);
                                    i({
                                        type: yt,
                                        errorMessage: rr(e)
                                    })
                                }).finally(function() {
                                    u(!1)
                                });
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }), function() {
                    var e = this,
                        a = arguments;
                    return new Promise(function(t, n) {
                        var r = c.apply(e, a);

                        function i(e) {
                            si(r, t, n, i, o, "next", e)
                        }

                        function o(e) {
                            si(r, t, n, i, o, "throw", e)
                        }
                        i(void 0)
                    })
                });
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            n = n.match(/\d+$/);
        return I().createElement("div", null, I().createElement(he.Modal.Header, {
            useBaseBootstrapComponent: !0
        }, I().createElement("div", {
            className: "verification-upsell-title-container"
        }, I().createElement(he.Modal.Title, {
            id: "verification-upsell-modal-title"
        }, t(o))), I().createElement("button", {
            type: "button",
            className: "close close-button",
            onClick: r
        }, I().createElement("span", {
            className: "icon-close"
        }))), I().createElement(he.Modal.Body, null, I().createElement("div", {
            className: "phone-number-verification-text-body text-description"
        }, t(a, {
            phoneLast4: n
        }))), I().createElement(he.Modal.Footer, null, I().createElement(Pr, {
            translate: t
        }), I().createElement(he.Button, {
            className: "delete-phone-btn",
            variant: he.Button.variants.primary,
            size: he.Button.sizes.medium,
            isLoading: e,
            onClick: s
        }, t(c)), I().createElement(he.Button, {
            variant: he.Button.variants.secondary,
            size: he.Button.sizes.medium,
            isLoading: e,
            onClick: r
        }, t(l))))
    }
    pi.propTypes = {
        translate: n().func.isRequired,
        onHide: n().func.isRequired,
        existingPhoneNumber: n().string
    }, pi.defaultProps = {
        existingPhoneNumber: null
    };
    var mi = pi;

    function fi(e, t, n, r, i, o, a) {
        try {
            var c = e[o](a),
                l = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(l) : Promise.resolve(l).then(r, i)
    }
    var hi = function() {
        var c, e = (c = regeneratorRuntime.mark(function e() {
            var t, n, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return n = !(t = Un), e.next = 4, Br();
                    case 4:
                        return !0 === (null == (r = e.sent) ? void 0 : r.isDiscoverabilitySettingsEnabled) && !0 === (null == r ? void 0 : r.showDiscoverabilityUpsells) && (t = Kn, n = !0 === (null == r ? void 0 : r.prefillDiscoverabilitySetting)), e.abrupt("return", {
                            successPage: t,
                            shouldPrefillAffirmativeDiscoverabilityConsent: n
                        });
                    case 7:
                    case "end":
                        return e.stop()
                }
            }, e)
        }), function() {
            var e = this,
                a = arguments;
            return new Promise(function(t, n) {
                var r = c.apply(e, a);

                function i(e) {
                    fi(r, t, n, i, o, "next", e)
                }

                function o(e) {
                    fi(r, t, n, i, o, "throw", e)
                }
                i(void 0)
            })
        });
        return function() {
            return e.apply(this, arguments)
        }
    }();

    function yi(e, t, n, r, i, o, a) {
        try {
            var c = e[o](a),
                l = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(l) : Promise.resolve(l).then(r, i)
    }

    function vi(c) {
        return function() {
            var e = this,
                a = arguments;
            return new Promise(function(t, n) {
                var r = c.apply(e, a);

                function i(e) {
                    yi(r, t, n, i, o, "next", e)
                }

                function o(e) {
                    yi(r, t, n, i, o, "throw", e)
                }
                i(void 0)
            })
        }
    }

    function bi(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return gi(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gi(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function gi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function Ei(e) {
        function t() {
            tt(Hn.phoneNumberModalDismissed, {
                origin: f.origin,
                section: x
            }), r(f.isPhoneVerified), h({
                type: ht
            })
        }
        var n = e.translate,
            r = e.onClose,
            i = e.origin,
            o = e.existingPhoneNumber,
            a = e.addPhoneAlwaysShowLegalText,
            c = e.addPhoneRequireLegalTextCheckbox,
            l = e.addPhoneHeadingKey,
            s = e.addPhoneDescriptionKey,
            u = e.addPhoneLegalTextKey,
            d = e.addPhoneButtonKey,
            p = e.beforeSuccess,
            m = e.renderInWebview,
            e = Xn(),
            f = e.phoneUpsellState,
            h = e.dispatch,
            e = bi((0, R.useState)(Un), 2),
            y = e[0],
            v = e[1],
            e = bi((0, R.useState)(void 0), 2),
            b = e[0],
            g = e[1],
            e = bi((0, R.useState)(void 0), 2),
            E = e[0],
            P = e[1],
            x = ir(f.pageName),
            S = function() {
                var e = vi(regeneratorRuntime.mark(function e() {
                    var t, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (p) return e.prev = 1, e.next = 4, p();
                                e.next = 15;
                                break;
                            case 4:
                                t = e.sent, n = bi(t, 2), t = n[0], n = n[1], g(t), P(n), e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(1), console.error("Error from before success hook in phone verification: ".concat(e.t0), e.t0);
                            case 15:
                                h({
                                    type: gt,
                                    pageName: y
                                });
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [1, 12]
                    ])
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
        return (0, R.useEffect)(function() {
            f.origin !== Fe && tt(Hn.phoneNumberModalShown, {
                origin: f.origin,
                section: x
            })
        }, [f.pageName, f.origin]), (0, R.useEffect)(function() {
            h({
                type: xt,
                origin: i
            })
        }, []), (0, R.useEffect)(function() {
            function e() {
                return (e = vi(regeneratorRuntime.mark(function e() {
                    var t, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, hi();
                            case 2:
                                n = e.sent, t = n.successPage, n = n.shouldPrefillAffirmativeDiscoverabilityConsent, h({
                                    type: St,
                                    shouldPrefillAffirmativeDiscoverabilityConsent: n
                                }), v(t);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
            i !== We && function() {
                e.apply(this, arguments)
            }()
        }, []), I().createElement(he.Modal, {
            show: f.isOpen,
            onHide: t,
            className: m ? "phone-verification-webview" : "verification-modal",
            size: "lg",
            "aria-labelledby": "verification-upsell-modal-title",
            scrollable: "true",
            centered: "true"
        }, function() {
            switch (f.pageName) {
                case jn:
                    return I().createElement(_r, {
                        translate: n,
                        onHide: t,
                        existingPhoneNumber: o,
                        alwaysShowLegalText: a,
                        requireLegalTextCheckbox: c,
                        headingKey: l,
                        descriptionKey: s,
                        legalTextKey: u,
                        buttonKey: d
                    });
                case Ln:
                    return I().createElement(li, {
                        translate: n,
                        onHide: t,
                        onVerify: S
                    });
                case Un:
                    return I().createElement(qr, {
                        translate: n,
                        onHide: t,
                        headingKey: b,
                        descriptionKey: E
                    });
                case _n:
                    return I().createElement(mi, {
                        translate: n,
                        existingPhoneNumber: o,
                        onHide: t
                    });
                case Kn:
                    return I().createElement(Zr, {
                        translate: n,
                        onHide: t,
                        origin: f.origin,
                        shouldPrefillAffirmativeDiscoverabilityConsent: f.shouldPrefillAffirmativeDiscoverabilityConsent,
                        headingKey: b,
                        descriptionKey: E
                    });
                default:
                    return I().createElement(_r, {
                        translate: n,
                        onHide: t
                    })
            }
        }())
    }
    Ei.propTypes = {
        translate: n().func.isRequired,
        onClose: n().func.isRequired,
        origin: n().string,
        existingPhoneNumber: n().string,
        addPhoneAlwaysShowLegalText: n().bool,
        addPhoneRequireLegalTextCheckbox: n().bool,
        addPhoneHeadingKey: n().string,
        addPhoneDescriptionKey: n().string,
        addPhoneLegalTextKey: n().string,
        addPhoneButtonKey: n().string,
        beforeSuccess: n().func,
        renderInWebview: n().bool
    }, Ei.defaultProps = {
        origin: Ge,
        existingPhoneNumber: null,
        addPhoneAlwaysShowLegalText: void 0,
        addPhoneRequireLegalTextCheckbox: void 0,
        addPhoneHeadingKey: void 0,
        addPhoneDescriptionKey: void 0,
        addPhoneLegalTextKey: void 0,
        addPhoneButtonKey: void 0,
        beforeSuccess: null,
        renderInWebview: !1
    };
    var Pi = Ei;

    function xi(e) {
        var t = e.translate,
            n = e.onClose,
            r = e.origin,
            i = e.existingPhoneNumber,
            o = e.addPhoneAlwaysShowLegalText,
            a = e.addPhoneRequireLegalTextCheckbox,
            c = e.addPhoneHeadingKey,
            l = e.addPhoneDescriptionKey,
            s = e.addPhoneLegalTextKey,
            u = e.addPhoneButtonKey,
            d = e.beforeSuccess,
            e = e.renderInWebview;
        return I().createElement(zn, null, I().createElement(Pi, {
            translate: t,
            onClose: n,
            origin: r,
            existingPhoneNumber: i,
            addPhoneAlwaysShowLegalText: o,
            addPhoneRequireLegalTextCheckbox: a,
            addPhoneHeadingKey: c,
            addPhoneDescriptionKey: l,
            addPhoneLegalTextKey: s,
            addPhoneButtonKey: u,
            beforeSuccess: d,
            renderInWebview: e
        }))
    }
    xi.propTypes = {
        translate: n().func.isRequired,
        origin: n().string,
        onClose: n().func,
        existingPhoneNumber: n().string,
        addPhoneAlwaysShowLegalText: n().bool,
        addPhoneRequireLegalTextCheckbox: n().bool,
        addPhoneHeadingKey: n().string,
        addPhoneDescriptionKey: n().string,
        addPhoneLegalTextKey: n().string,
        addPhoneButtonKey: n().string,
        beforeSuccess: n().func,
        renderInWebview: n().bool
    }, xi.defaultProps = {
        origin: void 0,
        onClose: function() {
            return null
        },
        existingPhoneNumber: null,
        addPhoneAlwaysShowLegalText: void 0,
        addPhoneRequireLegalTextCheckbox: void 0,
        addPhoneHeadingKey: void 0,
        addPhoneDescriptionKey: void 0,
        addPhoneLegalTextKey: void 0,
        addPhoneButtonKey: void 0,
        beforeSuccess: void 0,
        renderInWebview: void 0
    };
    var Si = (0, i.withTranslations)(xi, a),
        wi = "CLOSE_CONTACT_METHOD_PROMPT_MODAL",
        Ci = "SET_LOGGING_VALUES";

    function Ni(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Ti(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ti(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Ti(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function Ai(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), r.push.apply(r, n)), r
    }

    function ki(r) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Ai(Object(i), !0).forEach(function(e) {
                var t, n;
                t = r, e = i[n = e], n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : Ai(Object(i)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
            })
        }
        return r
    }

    function Oi(e, t) {
        switch (t.type) {
            case wi:
                return ki(ki({}, e), {}, {
                    isOpen: !1
                });
            case Ci:
                return ki(ki({}, e), {}, {
                    origin: t.origin,
                    section: t.section
                });
            default:
                return Ri
        }
    }

    function Mi(e) {
        var t = e.children,
            e = (n = Ni((0, R.useReducer)(Oi, Ri), 2))[0],
            n = n[1];
        return I().createElement(Ii.Provider, {
            value: {
                contactMethodPromptModalState: e,
                dispatch: n
            }
        }, t)
    }
    var Ri = {
            isOpen: !0,
            origin: "",
            section: ""
        },
        Ii = (0, R.createContext)(Ri);
    Mi.propTypes = {
        children: n().node.isRequired
    };
    var Kt = Qe.eventStreamService.eventTypes,
        Ge = "contactMethodModal",
        Di = {
            contactMethodPromptShown: {
                name: "contactMethodPromptShown",
                type: Kt.modalAction,
                context: Ge,
                params: {
                    aType: "shown"
                }
            },
            contactMethodPromptDismissed: {
                name: "contactMethodPromptDismissed",
                type: Kt.modalAction,
                context: Ge,
                params: {
                    aType: "dismissed"
                }
            },
            contactMethodPromptEmailClicked: {
                name: "contactMethodPromptEmailClicked",
                type: Kt.buttonClick,
                context: Ge,
                params: {
                    btn: "email"
                }
            },
            contactMethodPromptPhoneClicked: {
                name: "contactMethodPromptPhoneClicked",
                type: Kt.buttonClick,
                context: Ge,
                params: {
                    btn: "phone"
                }
            },
            contactMethodPromptSupportClicked: {
                name: "contactMethodPromptSupportClicked",
                type: Kt.buttonClick,
                context: Ge,
                params: {
                    btn: "support"
                }
            },
            contactMethodPromptLogoutClicked: {
                name: "contactMethodPromptLogoutClicked",
                type: Kt.buttonClick,
                context: Ge,
                params: {
                    btn: "logout"
                }
            }
        };

    function ji() {
        return (0, R.useContext)(Ii)
    }

    function Li(e) {
        function t(e) {
            e || null !== h.UpsellService && void 0 !== h.UpsellService && h.UpsellService.renderContactMethodPromptModal({
                origin: i.origin,
                section: i.section
            })
        }
        var n = e.translate,
            r = e.onHide,
            i = ji().contactMethodPromptModalState,
            o = mn,
            a = fn,
            c = hn,
            l = yn,
            s = vn,
            u = bn,
            d = En,
            p = Pn,
            e = gn;
        return I().createElement("div", null, I().createElement(he.Modal.Header, {
            useBaseBootstrapComponent: !0
        }, I().createElement("div", {
            className: "verification-upsell-title-container"
        }, I().createElement(he.Modal.Title, {
            id: "verification-upsell-modal-title"
        }, n(o)))), I().createElement(he.Modal.Body, {
            className: "verification-grid"
        }, I().createElement("span", {
            className: "icon-spot-passcode-xl verification-grid-icon"
        }), I().createElement("div", null, I().createElement("div", {
            className: "verification-upsell-title-container page-title "
        }, I().createElement("div", {
            className: "font-header-2"
        }, n(a))), I().createElement("div", {
            className: "text-description"
        }, n(c))), I().createElement("span", {
            className: "icon-spot-success-xl verification-grid-icon"
        }), I().createElement("div", null, I().createElement("div", {
            className: "verification-upsell-title-container page-title"
        }, I().createElement("div", {
            className: "font-header-2"
        }, n(l))), I().createElement("div", {
            className: "text-description"
        }, n(s)))), I().createElement(he.Modal.Footer, null, I().createElement("button", {
            type: "button",
            className: "btn-cta-md btn-max-width phone-number-verify-button",
            onClick: function() {
                r(), tt(Di.contactMethodPromptPhoneClicked, {
                    origin: i.origin,
                    section: i.section
                }), null !== h.UpsellService && void 0 !== h.UpsellService && h.UpsellService.renderPhoneUpsell({
                    onClose: t
                })
            }
        }, n(u)), I().createElement("button", {
            type: "button",
            className: " btn-secondary-md btn-max-width phone-number-resent-button",
            onClick: function() {
                r(), tt(Di.contactMethodPromptEmailClicked, {
                    origin: i.origin,
                    section: i.section
                }), null !== h.UpsellService && void 0 !== h.UpsellService && h.UpsellService.renderEmailUpsell(t)
            }
        }, n(e)), I().createElement("div", null, I().createElement("div", {
            className: "contact-method-prompt-links"
        }, I().createElement(he.Link, {
            className: "text-default contact-method-link-button",
            href: "https://en.help.roblox.com/hc/articles/203313350",
            target: "_blank",
            onClick: function() {
                tt(Di.contactMethodPromptSupportClicked, {
                    origin: i.origin,
                    section: i.section
                })
            }
        }, n(p)), I().createElement("button", {
            type: "button",
            className: "text-default contact-method-link-button",
            onClick: function() {
                tt(Di.contactMethodPromptLogoutClicked, {
                    origin: i.origin,
                    section: i.section
                }), h.NavigationService.logoutAndRedirect()
            }
        }, n(d))))))
    }
    Li.propTypes = {
        translate: n().func.isRequired,
        onHide: n().func.isRequired
    };
    var Ui = Li;

    function _i(e) {
        function t() {
            tt(Di.contactMethodPromptDismissed, {
                origin: o.origin,
                section: o.section
            }), a({
                type: wi
            })
        }
        var n = e.translate,
            r = e.origin,
            i = e.section,
            e = ji(),
            o = e.contactMethodPromptModalState,
            a = e.dispatch;
        return (0, R.useEffect)(function() {
            a({
                type: Ci,
                origin: r,
                section: i
            })
        }, []), (0, R.useEffect)(function() {
            o.origin && o.section && tt(Di.contactMethodPromptShown, {
                origin: o.origin,
                section: o.section
            })
        }, [o.origin, o.section]), I().createElement(he.Modal, {
            show: o.isOpen,
            onHide: t,
            keyboard: !1,
            className: "verification-modal",
            backdrop: "static",
            size: "lg",
            "aria-labelledby": "verification-upsell-modal-title",
            scrollable: "true",
            centered: "true"
        }, I().createElement(Ui, {
            translate: n,
            onHide: t
        }))
    }
    _i.propTypes = {
        translate: n().func.isRequired,
        section: n().string.isRequired,
        origin: n().string.isRequired
    };
    var Ki = _i;

    function Bi(e) {
        var t = e.translate,
            n = e.origin,
            e = e.section;
        return I().createElement(Mi, null, I().createElement(Ki, {
            translate: t,
            origin: n,
            section: e
        }))
    }
    Bi.propTypes = {
        translate: n().func.isRequired,
        origin: n().string.isRequired,
        section: n().string.isRequired
    };
    var Hi = (0, i.withTranslations)(Bi, a);
    e().UpsellService = {
        renderEmailUpsell: function(t) {
            (0, m.ready)(function() {
                var e = document.getElementById(o);
                e && ((0, f.unmountComponentAtNode)(e), (0, f.render)(I().createElement(ft, null), e), Re(t))
            })
        },
        renderPhoneUpsell: function(e) {
            var e = 0 < arguments.length && void 0 !== e ? e : {},
                t = e.onClose,
                n = e.origin,
                r = e.existingPhoneNumber,
                i = e.addPhoneAlwaysShowLegalText,
                o = e.addPhoneRequireLegalTextCheckbox,
                a = e.addPhoneHeadingKey,
                c = e.addPhoneDescriptionKey,
                l = e.addPhoneLegalTextKey,
                s = e.addPhoneButtonKey,
                u = e.beforeSuccess,
                d = e.containerId,
                p = e.renderInWebview;
            (0, m.ready)(function() {
                var e = document.getElementById(null != d ? d : "phoneVerificationUpsell-container");
                e && ((0, f.unmountComponentAtNode)(e), (0, f.render)(I().createElement(Si, {
                    onClose: t,
                    origin: n,
                    existingPhoneNumber: r,
                    addPhoneAlwaysShowLegalText: i,
                    addPhoneRequireLegalTextCheckbox: o,
                    addPhoneHeadingKey: a,
                    addPhoneDescriptionKey: c,
                    addPhoneLegalTextKey: l,
                    addPhoneButtonKey: s,
                    beforeSuccess: u,
                    renderInWebview: p
                }), e))
            })
        },
        renderContactMethodPromptModal: function(e) {
            var t = e.origin,
                n = e.section;
            (0, m.ready)(function() {
                var e = document.getElementById("contactMethodPrompt-container");
                e && ((0, f.unmountComponentAtNode)(e), (0, f.render)(I().createElement(Hi, {
                    origin: t,
                    section: n
                }), e))
            })
        }
    }, e().EmailVerificationService = {
        handleUserEmailUpsellAtLogout: Ue,
        handleUserEmailUpsellAtBuyRobux: function(e) {
            return De({
                origin: c,
                skipCallback: e
            })
        },
        handleUserEmailUpsellOnHomePage: Re,
        handleUserEmailVerificationRequiredByPurchaseWarning: function() {
            return De({
                origin: A,
                requireVerification: !0
            })
        },
        handleUserEmailUpsellAtPremiumSubscription: function(e) {
            return De({
                origin: T,
                skipCallback: e
            })
        },
        handleUserEmailVerificationRequiredByBan: function() {
            return De({
                origin: k,
                requireVerification: !0
            })
        }
    }, (0, m.ready)(function() {
        document.getElementById(o) && (0, f.render)(I().createElement(ft, null), document.getElementById(o))
    })
}();
//# sourceMappingURL=https://js.rbxcdn.com/cd4f888ebbf348f59764edfb3f586c8e-verificationUpsell.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("VerificationUpsell");