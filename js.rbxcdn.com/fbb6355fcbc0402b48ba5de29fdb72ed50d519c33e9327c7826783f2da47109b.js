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
            26: function(e) {
                e.exports = 'module.exports = __webpack_public_path__ + "../html/navigation.html";'
            },
            124: function(e) {
                e.exports = "https://images.rbxcdn.com/ed4e952d2a337cf45095401995f39281-The_Haunt__CHS_1x1_400x400.png"
            },
            723: function(e) {
                e.exports = "https://images.rbxcdn.com/0dacfb446bdc4c9321720953b0f57b87-The_Haunt__CHT_1x1_400x400.png"
            },
            611: function(e) {
                e.exports = "https://images.rbxcdn.com/9103e1bf8edb3183ec76bf3f380461ff-The_Haunt__EN_1x1_400x400.png"
            },
            245: function(e) {
                e.exports = "https://images.rbxcdn.com/8a2dcb597a27f56896e282bf8d128e29-The_Haunt__ESMX_1x1_400x400.png"
            },
            29: function(e) {
                e.exports = "https://images.rbxcdn.com/b7847fc33b58157f436265224de14caa-The_Haunt__IT_1x1_400x400.png"
            },
            548: function(e) {
                e.exports = "https://images.rbxcdn.com/9ea21db17c10cdb666c7816d5b82c565-The_Haunt__JP_1x1_400x400.png"
            },
            520: function(e) {
                e.exports = "https://images.rbxcdn.com/31f3dd724d841b1d286a930fc4a757cd-The_Haunt__KO_1x1_400x400.png"
            },
            658: function(e) {
                e.exports = "https://images.rbxcdn.com/8fd6bbaf923f9c1953665cf7aef0f7cb-The_Haunt__PL_1x1_400x400.png"
            },
            266: function(e) {
                e.exports = "https://images.rbxcdn.com/e83b6e31c8884b8b42a02eb5139d392e-The_Haunt__PTBR_1x1_400x400.png"
            },
            594: function(e) {
                e.exports = "https://images.rbxcdn.com/c69e17fc4789e9f7fe6489d66ef1e087-The_Haunt__TH_1x1_400x400.png"
            },
            232: function(e) {
                e.exports = "https://images.rbxcdn.com/ffba89d30ad3445c39afbf9ed58633a6-The_Haunt__TR_1x1_400x400.png"
            },
            14: function(e) {
                e.exports = "https://images.rbxcdn.com/88c026923056c6d4b6d40e47471dc428-The_Haunt__VN_1x1_400x400.png"
            }
        },
        r = {};

    function ko(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        t = r[e] = {
            exports: {}
        };
        return n[e](t, t.exports, ko), t.exports
    }
    ko.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return ko.d(t, {
                a: t
            }), t
        }, ko.d = function(e, t) {
            for (var n in t) ko.o(t, n) && !ko.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, ko.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var P = React,
                L = ko.n(P),
                _ = CoreUtilities,
                e = ReactDOM,
                j = Roblox,
                t = ko.n(j),
                M = HeaderScripts,
                D = ReactUtilities,
                B = {
                    arrowUp: 38,
                    arrowDown: 40,
                    tab: 9,
                    enter: 13
                },
                n = "container-main",
                r = {
                    name: "Roblox.Logout"
                },
                a = 1,
                o = {
                    clickMerchandise: "clickMerchandiseInLeftNav",
                    goToAmazonStore: "clickContinueToAmazonStore"
                },
                i = {
                    friendshipNotifications: "FriendshipNotifications",
                    requestCountChanged: "Roblox.Friends.CountChanged",
                    friendshipCreated: "FriendshipCreated",
                    friendshipDestroyed: "FriendshipDestroyed",
                    friendshipDeclined: "FriendshipDeclined",
                    friendshipRequested: "FriendshipRequested"
                },
                c = {
                    name: "Roblox.Messages.CountChanged"
                },
                y = "?",
                q = "Response.InternalServerErrorDescription",
                u = {
                    name: "headerMenuIconClick"
                },
                l = {
                    quickLogin: "quickLogin",
                    logout: "logout",
                    settings: "settings",
                    switchAccountKey: "switchAccountKey"
                },
                S = {
                    robuxTruncateThreshold: 1e4,
                    creditTruncateThreshold: 1e4
                },
                F = {
                    control: "control",
                    hideCreditAndRobux: "hideCreditAndRobux",
                    showCreditAndRobux: "showCreditAndRobux"
                },
                G = {
                    accountSwitchedFlag: "RBXASAccountSwitched",
                    accountSwitchedMessage: "Description.AccountSwitchedConfirmationBannerText"
                },
                s = {
                    common: ["CommonUI.Features", "CommonUI.Messages", "Common.AlertsAndOptions"],
                    feature: "Feature.ShopDialog"
                },
                d = PropTypes,
                m = ko.n(d),
                f = ko(870),
                A = ko.n(f),
                N = ReactStyleGuide,
                p = RobloxThumbnails,
                v = RobloxBadges,
                b = function(e, t) {
                    for (var n = 0, r = t.length, a = e.length; n < r; n++, a++) e[a] = t[n];
                    return e
                },
                g = j.Endpoints.getAbsoluteUrl,
                h = j.EnvironmentUrls.authApi,
                E = {
                    url: g("/discover/?Keyword="),
                    label: "Label.Experience",
                    pageSort: ["home", "games", "discover"],
                    icon: "icon-menu-games-off"
                },
                w = {
                    url: g("/catalog?CatalogContext=1&Keyword="),
                    label: "Heading.Marketplace",
                    pageSort: ["catalog", "inventory", "bundles", "my/avatar", "trades"],
                    icon: "icon-menu-shop"
                },
                C = [{
                    url: g("/search/users?keyword="),
                    label: "Label.Players",
                    pageSort: ["users"],
                    icon: "icon-menu-profile"
                }, w, {
                    url: g("/search/communities?keyword="),
                    label: "Label.sGroups",
                    pageSort: ["groups"],
                    icon: "icon-menu-groups"
                }, {
                    url: g("/develop/library?CatalogContext=2&Category=6&Keyword="),
                    label: "Label.CreatorMarketplace",
                    pageSort: ["develop"],
                    icon: "icon-menu-library"
                }],
                V = {
                    creatorMarketplaceUrl: "https://create." + j.EnvironmentUrls.domain + "/marketplace/models?keyword=",
                    scrollListItems: {
                        home: {
                            url: g("/home"),
                            idSelector: "nav-home",
                            iconClass: "icon-nav-home",
                            name: "home",
                            labelTranslationKey: "Label.sHome"
                        },
                        profile: {
                            url: g("/users/" + M.authenticatedUser.id + "/profile"),
                            idSelector: "nav-profile",
                            iconClass: "icon-nav-profile",
                            name: "profile",
                            labelTranslationKey: "Label.sProfile"
                        },
                        messages: {
                            url: g("/my/messages/#!/inbox"),
                            urlForNotification: g("/my/messages/#!/inbox"),
                            idSelector: "nav-message",
                            iconClass: "icon-nav-message",
                            name: "messages",
                            labelTranslationKey: "Label.sMessages"
                        },
                        friends: {
                            url: g("/users/friends"),
                            urlForNotification: g("/users/friends#!/friend-requests"),
                            idSelector: "nav-friends",
                            iconClass: "icon-nav-friends",
                            name: "friends",
                            labelTranslationKey: "Label.sFriends"
                        },
                        avatar: {
                            url: g("/my/avatar"),
                            idSelector: "nav-character",
                            iconClass: "icon-nav-charactercustomizer",
                            name: "avatar",
                            labelTranslationKey: "Label.sAvatar"
                        },
                        inventory: {
                            url: g("/users/" + M.authenticatedUser.id + "/inventory"),
                            idSelector: "nav-inventory",
                            iconClass: "icon-nav-inventory",
                            name: "inventory",
                            labelTranslationKey: "Label.sInventory"
                        },
                        trade: {
                            url: g("/trades"),
                            urlForNotification: g("/trades"),
                            idSelector: "nav-trade",
                            iconClass: "icon-nav-trade",
                            name: "trade",
                            labelTranslationKey: "Label.sTrade"
                        },
                        groups: {
                            url: g("/my/communities"),
                            idSelector: "nav-group",
                            iconClass: "icon-nav-group",
                            name: "groups",
                            labelTranslationKey: "Label.sGroups"
                        },
                        blog: {
                            url: g("https://blog.roblox.com"),
                            idSelector: "nav-blog",
                            iconClass: "icon-nav-blog",
                            name: "blog",
                            labelTranslationKey: "Label.sBlog",
                            blankTarget: !0
                        },
                        shop: {
                            isModal: !0,
                            idSelector: "nav-shop",
                            iconClass: "icon-nav-shop",
                            name: "shop",
                            labelTranslationKey: "Label.OfficialStore"
                        },
                        giftcards: {
                            url: g("/giftcards-us"),
                            idSelector: "nav-giftcards",
                            iconClass: "icon-nav-giftcards",
                            name: "giftcards",
                            labelTranslationKey: "Label.GiftCards"
                        }
                    },
                    upgradeButton: {
                        url: g("/premium/membership?ctx=leftnav"),
                        labelTranslationKey: M.authenticatedUser.isPremiumUser ? "ActionsPremium" : "ActionsGetPremium"
                    },
                    sponsorEvents: {
                        label: {
                            labelTranslationKey: "Label.sEvents"
                        },
                        events: {}
                    },
                    gameSearchLink: E,
                    avatarSearchLink: w,
                    miscSearchLink: C,
                    universalSearchUrls: [{
                        url: g("/search/users?keyword="),
                        label: "Label.Players",
                        pageSort: []
                    }, {
                        url: g("/discover/?Keyword="),
                        label: "Label.Experience",
                        pageSort: ["home", "games", "discover"]
                    }, {
                        url: g("/catalog?CatalogContext=1&Keyword="),
                        label: "Label.sCatalog",
                        pageSort: ["catalog", "inventory", "bundles"]
                    }, {
                        url: g("/search/communities?keyword="),
                        label: "Label.sGroups",
                        pageSort: ["groups"]
                    }, {
                        url: g("/develop/library?CatalogContext=2&Category=6&Keyword="),
                        label: "Label.CreatorMarketplace",
                        pageSort: ["develop"]
                    }],
                    newUniversalSearchUrls: b([E], C),
                    settingsUrl: {
                        settings: {
                            url: g("/my/account"),
                            label: "Label.sSettings"
                        },
                        quickLogin: {
                            url: g("/home"),
                            label: "Label.sQuickLogin"
                        },
                        safetySupport: {
                            url: g("/help-safety"),
                            label: "Label.HelpAndSafety"
                        },
                        switchAccountKey: {
                            url: g("/home"),
                            label: "Label.sSwitchAccount"
                        },
                        logout: {
                            url: h + "/v2/logout",
                            label: "Label.sLogout"
                        }
                    },
                    buyRobuxUrl: {
                        myTransactions: {
                            url: g("/transactions"),
                            label: "Label.MyMoney"
                        },
                        buyRobux: {
                            url: g("/upgrades/robux?ctx=navpopover"),
                            label: "Label.sBuyRobux",
                            name: "Label.sRobux"
                        },
                        buyRobuxOnVng: {
                            url: j.EnvironmentUrls.vngGamesShopUrl,
                            label: "Label.sBuyRobux",
                            cacheKey: "isEligibleForVng"
                        }
                    },
                    userDataUrl: g("/navigation/userData"),
                    quickLoginUrl: g("/crossdevicelogin/ConfirmCode"),
                    redeemUrl: {
                        url: g("/redeem"),
                        label: "Heading.RedeemRobloxCodes"
                    },
                    buyGiftCardUrl: {
                        url: "https://roblox.cashstar.com/gift-card/buy/?ref=1023buygc",
                        label: "Label.sBuyGiftCard",
                        cacheKey: "giftCardExp"
                    }
                },
                x = j.Endpoints.getAbsoluteUrl,
                R = j.EnvironmentUrls.authApi,
                O = (j.EnvironmentUrls.accountSettingsApi, j.EnvironmentUrls.websiteUrl, j.EnvironmentUrls.adsApi, j.EnvironmentUrls.economyApi),
                T = j.EnvironmentUrls.privateMessagesApi,
                I = j.EnvironmentUrls.tradesApi,
                k = j.EnvironmentUrls.friendsApi,
                U = j.EnvironmentUrls.apiGatewayUrl,
                K = j.EnvironmentUrls.universalAppConfigurationApi,
                H = function() {
                    return x("/account/signupredir")
                },
                W = function() {
                    return x("/home")
                },
                Q = function(e, t) {
                    return x("/".concat(e.toLowerCase(), "/").concat(t))
                },
                z = function() {
                    return x("/login")
                },
                X = function() {
                    return x("/newLogin")
                },
                $ = function() {
                    return x("/CreateAccount")
                },
                Y = function() {
                    return "".concat(K, "/v1/behaviors/intl-auth-compliance/content")
                },
                J = function() {
                    return "".concat(R, "/v2/logout")
                },
                Z = function() {
                    return "".concat(T, "/v1/messages/unread/count")
                },
                ee = function(e) {
                    return "".concat(O, "/v1/users/").concat(e, "/currency")
                },
                te = function() {
                    return "".concat(U, "/universal-app-configuration/v1/behaviors/navigation-header-ui/content")
                },
                ne = function() {
                    return "".concat(I, "/v1/trades/inbound/count")
                },
                re = function() {
                    return "".concat(k, "/v1/user/friend-requests/count")
                },
                ae = function() {
                    return "".concat(U, "/credit-balance/v1/get-credit-balance-for-navigation")
                },
                oe = function() {
                    return "".concat(U, "/credit-balance/v1/get-conversion-metadata")
                },
                ie = function() {
                    return "".concat(U, "/credit-balance/v1/get-gift-card-visibility")
                },
                ce = function() {
                    return "".concat(U, "/vng-payments/v1/getVngShopUrl")
                },
                ue = function() {
                    return "".concat(U, "/robuxbadge/v1/robuxbadge")
                },
                le = function() {
                    var e = {
                        url: Z(),
                        withCredentials: !0
                    };
                    return _.httpService.get(e)
                },
                se = function(e) {
                    e = {
                        url: ee(e),
                        withCredentials: !0
                    };
                    return _.httpService.get(e)
                },
                de = function() {
                    var e = {
                        url: te(),
                        withCredentials: !0
                    };
                    return _.httpService.get(e)
                },
                me = function() {
                    var e = {
                        url: ne(),
                        withCredentials: !0
                    };
                    return _.httpService.get(e)
                },
                fe = function() {
                    var e = {
                        url: re(),
                        withCredentials: !0
                    };
                    return _.httpService.get(e)
                },
                pe = function() {
                    var e = {
                        url: J(),
                        withCredentials: !0
                    };
                    return _.httpService.post(e)
                },
                ve = function() {
                    var e = {
                        url: ae(),
                        withCredentials: !0
                    };
                    return _.httpService.get(e)
                },
                be = function() {
                    var e = {
                        url: oe(),
                        withCredentials: !0
                    };
                    return _.httpService.get(e)
                },
                ge = function() {
                    var e = {
                        url: ie(),
                        withCredentials: !0
                    };
                    return _.httpService.get(e)
                },
                he = function() {
                    var e = {
                        url: ce(),
                        withCredentials: !0
                    };
                    return _.httpService.get(e)
                },
                ye = function() {
                    var e = {
                        url: ue(),
                        withCredentials: !0
                    };
                    return _.httpService.get(e)
                },
                Se = CoreRobloxUtilities;

            function Ee(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var we = Se.dataStores.userDataStore.maxFriendRequestNotificationCount,
                Ce = Se.dataStores.userDataStore.maxMessagesNotificationCount;

            function xe(e) {
                var t = e.translate,
                    n = e.idSelector,
                    r = e.isModal,
                    a = e.name,
                    o = e.iconClass,
                    i = e.labelTranslationKey,
                    c = e.url,
                    u = e.urlForNotification,
                    l = e.onClickShopLink,
                    s = e.friendsData,
                    d = e.messagesData,
                    m = e.tradeData,
                    f = e.blankTarget,
                    e = (Ee(e = {}, V.scrollListItems.friends.name, s), Ee(e, V.scrollListItems.messages.name, d), Ee(e, V.scrollListItems.trade.name, m), e)[a],
                    c = null != e && e.count ? u : c,
                    f = f ? "_blank" : "_self";
                return r ? L().createElement("li", {
                    key: a
                }, L().createElement("button", {
                    id: n,
                    type: "button",
                    onClick: l,
                    className: "dynamic-overflow-container text-nav"
                }, L().createElement("div", null, L().createElement("span", {
                    className: o
                })), L().createElement("span", {
                    className: "font-header-2 dynamic-ellipsis-item",
                    title: t(i)
                }, t(i)))) : L().createElement("li", {
                    key: a
                }, L().createElement(N.Link, {
                    url: c,
                    id: n,
                    className: "dynamic-overflow-container text-nav",
                    target: f
                }, L().createElement("div", null, L().createElement("span", {
                    className: o
                })), L().createElement("span", {
                    className: "font-header-2 dynamic-ellipsis-item",
                    title: t(i)
                }, t(i)), e && 0 < e.count && L().createElement("div", {
                    className: "dynamic-width-item align-right"
                }, L().createElement("span", {
                    className: "notification-blue notification",
                    title: _.numberFormat.getNumberFormat(e.count)
                }, function(e, t) {
                    if (e === V.scrollListItems.friends.name && we <= t) return "".concat(we, "+");
                    if (e === V.scrollListItems.messages.name && Ce <= t) return "".concat(Ce, "+");
                    return _.abbreviateNumber.getTruncValue(t, 1e3)
                }(a, e.count)))))
            }
            xe.defaultProps = {
                idSelector: "",
                url: "",
                urlForNotification: "",
                isModal: !1,
                blankTarget: !1,
                friendsData: {
                    count: 0
                },
                messagesData: {
                    count: 0
                },
                tradeData: {
                    count: 0
                }
            }, xe.propTypes = {
                idSelector: m().string,
                translate: m().func.isRequired,
                isModal: m().bool,
                name: m().string.isRequired,
                iconClass: m().string.isRequired,
                labelTranslationKey: m().string.isRequired,
                url: m().string,
                urlForNotification: m().string,
                onClickShopLink: m().func.isRequired,
                blankTarget: m().bool,
                friendsData: m().shape({
                    count: m().number
                }),
                messagesData: m().shape({
                    count: m().number
                }),
                tradeData: m().shape({
                    count: m().number
                })
            };
            var Ae = xe;

            function Ne(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || Oe(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Re(e) {
                return function(e) {
                    if (Array.isArray(e)) return Te(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || Oe(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Oe(e, t) {
                if (e) {
                    if ("string" == typeof e) return Te(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Te(e, t) : void 0
                }
            }

            function Te(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ie() {
                return document.getElementById("navigation-container")
            }(We = Se.eventStreamService.eventTypes).pageLoad, m().func.isRequired, m().instanceOf(Array);
            var ke = V.universalSearchUrls,
                Ue = V.newUniversalSearchUrls,
                Pe = V.avatarSearchLink,
                Le = !M.authenticatedUser.isAuthenticated,
                _e = function() {
                    return Promise.resolve(0)
                },
                je = function(e) {
                    j.EventStream && j.EventStream.SendEventWithTarget(e, "click", {}, j.EventStream.TargetTypes.WWW)
                },
                Me = function(e) {
                    if (Le || !j.RealTime) return function() {};
                    document.addEventListener(i.requestCountChanged, e);
                    var t = j.RealTime.Factory.GetClient();
                    return t.Subscribe(i.friendshipNotifications, e),
                        function() {
                            document.removeEventListener(i.requestCountChanged, e), t.Unsubscribe(i.friendshipNotifications, e)
                        }
                },
                De = function(e) {
                    return Le || !j.RealTime ? function() {} : (document.addEventListener(c, e), function() {
                        document.removeEventListener(c, e)
                    })
                },
                Be = function() {
                    var e;
                    return null !== (e = (null === (e = window) || void 0 === e ? void 0 : e.innerWidth) < 543) && e
                },
                qe = function() {
                    var e = Re(ke);
                    return e.sort(function(e) {
                        return e.pageSort.reduce(function(e, t) {
                            return e || -1 < window.location.href.indexOf(t)
                        }, !1) ? -1 : 1
                    }), e
                },
                Fe = function() {
                    var e = Re(Ue),
                        t = e.filter(function(e) {
                            return e.pageSort.some(function(e) {
                                return -1 < window.location.pathname.indexOf(e)
                            })
                        }),
                        e = e.filter(function(e) {
                            return e.pageSort.every(function(e) {
                                return -1 === window.location.pathname.indexOf(e)
                            })
                        });
                    return [].concat(Re(t), Re(e))
                },
                Ge = function() {
                    return Pe.pageSort.some(function(e) {
                        return -1 < window.location.pathname.indexOf(e)
                    })
                },
                Ve = function() {
                    return document.getElementById("navigation-container") && document.getElementById("navigation-container").className
                },
                Ke = function(e) {
                    var n = {};
                    return ("?" === e[0] ? e.substr(1) : e).split("&").forEach(function(e) {
                        var t;
                        e.includes("=") && (e = (t = Ne(e.split("="), 2))[0], t = t[1], n[null === (e = decodeURIComponent(e)) || void 0 === e ? void 0 : e.toLowerCase()] = decodeURIComponent(t))
                    }), n
                },
                d = j.EnvironmentUrls.apiGatewayUrl,
                f = j.EnvironmentUrls.apiGatewayCdnUrl,
                He = (j.EnvironmentUrls.localeApi, {
                    debounceTimeout: 100,
                    debouncedSearchInputMaxLength: 35,
                    expiryTimeout: 5e3,
                    variationId: 1,
                    trendingVariationId: 0,
                    avatarAutocompleteQueryPaddingAmount: 10,
                    requestSuggestionUrl: {
                        url: d + "/games-autocomplete/v1/request-suggestion",
                        withCredentials: !0
                    },
                    getSuggestionUrl: {
                        url: d + "/games-autocomplete/v1/get-suggestion/",
                        withCredentials: !0
                    },
                    avatarRequestSuggestionUrl: {
                        url: d + "/autocomplete-avatar/v2/suggest",
                        withCredentials: !0
                    },
                    avatarRequestSuggestionCdnUrl: {
                        url: f + "/autocomplete-avatar/v2/suggest",
                        withCredentials: !0
                    },
                    englishLanguageCode: "en",
                    avatarAutocompleteUrlLocations: ["Catalog", "Trades", "Inventory", "Avatar", "CatalogItem"],
                    avatarAutocompleteSuggestionLimit: 5,
                    isSpecialTreatmentAutocompleteRestricted: function() {
                        return 7 === parseInt(Ie().dataset.numberOfAutocompleteSuggestions, 10) && V.miscSearchLink.reduce(function(e, t) {
                            return e.push.apply(e, t.pageSort), e
                        }, []).reduce(function(e, t) {
                            return e || -1 < window.location.pathname.indexOf(t)
                        }, !1)
                    },
                    isSpecialTreatment: function() {
                        var e;
                        return 7 === parseInt(null === (e = Ie()) || void 0 === e ? void 0 : e.dataset.numberOfAutocompleteSuggestions, 10)
                    },
                    numberOfSpecialTreatmentAutocompleteSuggestions: 3,
                    isAutocompleteSuggestionsIXPTestEnabled: function() {
                        var e;
                        return 0 < parseInt(null === (e = Ie()) || void 0 === e ? void 0 : e.dataset.numberOfAutocompleteSuggestions, 10)
                    },
                    numberOfAutocompleteSuggestions: function() {
                        var e;
                        return parseInt(null === (e = Ie()) || void 0 === e ? void 0 : e.dataset.numberOfAutocompleteSuggestions, 10) || 0
                    },
                    isRedirectLibraryToCreatorMarketplaceEnabled: function() {
                        var e;
                        return "True" === (null === (e = Ie()) || void 0 === e ? void 0 : e.dataset.isRedirectLibraryToCreatorMarketplaceEnabled)
                    }
                }),
                w = ko(14),
                b = ko.n(w),
                E = ko(232),
                C = ko.n(E),
                h = ko(594),
                g = ko.n(h),
                Q = ko(266),
                We = ko.n(Q),
                a = ko(658),
                d = ko.n(a),
                f = ko(520),
                w = ko.n(f),
                E = ko(548),
                h = ko.n(E),
                Q = ko(29),
                a = ko.n(Q),
                f = ko(245),
                E = ko.n(f),
                Q = ko(611),
                Qe = ko.n(Q),
                f = ko(723),
                Q = ko.n(f),
                f = ko(124),
                f = ko.n(f),
                ze = {
                    vi_vn: b(),
                    tr_tr: C(),
                    th_th: g(),
                    pt_br: We(),
                    pl_pl: d(),
                    ko_kr: w(),
                    ja_jp: h(),
                    it_it: a(),
                    es_es: E(),
                    en_us: Qe(),
                    zh_tw: Q(),
                    zh_cn: f()
                },
                Xe = function() {
                    var e;
                    return null !== (e = Ie()) && void 0 !== e && e.dataset.platformEventLeftNavEntryStartTime ? new Date(Date.parse("".concat(null === (e = Ie()) || void 0 === e ? void 0 : e.dataset.platformEventLeftNavEntryStartTime, " UTC"))) : new Date("01/01/2001")
                },
                $e = function() {
                    var e;
                    return null !== (e = Ie()) && void 0 !== e && e.dataset.platformEventLeftNavEntryEndTime ? new Date(Date.parse("".concat(null === (e = Ie()) || void 0 === e ? void 0 : e.dataset.platformEventLeftNavEntryEndTime, " UTC"))) : new Date("01/01/2001")
                },
                Ye = function() {
                    var e;
                    return null !== (e = Ie()) && void 0 !== e && e.dataset.platformEventLeftNavUrl ? null === (e = Ie()) || void 0 === e ? void 0 : e.dataset.platformEventLeftNavUrl : ""
                },
                Je = function(e) {
                    return ze[e] || Qe()
                };

            function Ze() {
                return (Ze = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n, r = arguments[t];
                        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function et(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function tt(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? et(Object(a), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : et(Object(a)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return r
            }

            function nt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return rt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function rt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function at(e, t) {
                if (null == e) return {};
                var n, r = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols)
                    for (var a = Object.getOwnPropertySymbols(e), o = 0; o < a.length; o++) n = a[o], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }
            var ot = o;

            function it(e) {
                var t = e.translate,
                    n = at(e, ["translate"]),
                    r = nt((0, P.useState)(!1), 2),
                    a = r[0],
                    o = r[1],
                    i = (0, P.useCallback)(function() {
                        o(function(e) {
                            return !e
                        }), je(ot.clickMerchandise)
                    }, []),
                    c = function() {
                        o(!1)
                    },
                    u = Object.values(V.scrollListItems).map(function(e) {
                        return L().createElement(Ae, Ze({
                            key: e.name
                        }, tt(tt({
                            translate: t,
                            onClickShopLink: i
                        }, e), n)))
                    }),
                    l = L().createElement("li", {
                        className: "rbx-upgrade-now"
                    }, L().createElement("a", {
                        href: V.upgradeButton.url,
                        className: "btn-growth-md btn-secondary-md",
                        onClick: function() {
                            Se.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(Se.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT.WEB_PREMIUM_PURCHASE, !1, Se.paymentFlowAnalyticsService.ENUM_VIEW_NAME.LEFT_NAVIGATION_BAR, Se.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT, M.authenticatedUser.isPremiumUser ? Se.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.PREMIUM : Se.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.GET_PREMIUM)
                        },
                        id: "upgrade-now-button"
                    }, t(V.upgradeButton.labelTranslationKey))),
                    s = L().createElement(L().Fragment, null, L().createElement("p", {
                        className: "shop-description"
                    }, t("Description.RetailWebsiteRedirect")), L().createElement("p", {
                        className: "shop-warning"
                    }, t("Description.PurchaseAgeWarning"))),
                    d = L().createElement(N.SimpleModal, {
                        title: t("Heading.LeavingRoblox"),
                        body: s,
                        show: a,
                        actionButtonShow: !0,
                        actionButtonText: t("Action.Continue"),
                        neutralButtonText: t("Action.Cancel"),
                        onAction: function() {
                            var e = decodeURIComponent(j.EnvironmentUrls.amazonWebStoreLink);
                            window.open(e, "_blank"), je(ot.goToAmazonStore)
                        },
                        onNeutral: c,
                        onClose: c
                    }),
                    e = new Date,
                    r = Xe(),
                    s = $e(),
                    a = Ye(),
                    c = j.Intl && new j.Intl,
                    c = Je(c.getRobloxLocale()),
                    c = L().createElement("a", {
                        href: a,
                        className: "rbx-platform-event-container"
                    }, L().createElement("div", {
                        className: "rbx-platform-event-header dynamic-overflow-container"
                    }, L().createElement("span", {
                        className: "rbx-event-icon"
                    }), L().createElement("span", {
                        className: "rbx-event-header-text dynamic-ellipsis-item"
                    }, t("Label.sEvents"))), L().createElement("img", {
                        className: "rbx-platform-event-thumbnail",
                        src: c,
                        alt: t("Label.TheHunt")
                    }));
                return L().createElement("ul", {
                    className: "left-col-list"
                }, u, l, !1, d, r < e && e < s && a && c)
            }
            it.defaultProps = {
                sponsoredPagesData: []
            }, it.propTypes = {
                sponsoredPagesData: m().instanceOf(Array),
                translate: m().func.isRequired
            };
            var ct = it;

            function ut(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function lt(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ut(Object(a), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : ut(Object(a)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return r
            }

            function st(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return dt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function dt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function mt(e) {
                var n = M.authenticatedUser.isAuthenticated,
                    t = st((0, P.useState)({}), 2),
                    r = t[0],
                    a = t[1],
                    o = (c = st((0, P.useState)({}), 2))[0],
                    i = c[1],
                    c = (t = st((0, P.useState)({}), 2))[0],
                    u = t[1];
                return (0, P.useEffect)(function() {
                    var e = function() {},
                        t = function() {};
                    return n && (e = Me(function() {
                            fe().then(function(e) {
                                e = e.data;
                                a(e)
                            }, function(e) {
                                console.debug(e)
                            })
                        }), t = De(function() {
                            le().then(function(e) {
                                e = e.data;
                                i(e)
                            })
                        }), fe().then(function(e) {
                            e = e.data;
                            a(e)
                        }, function(e) {
                            console.debug(e)
                        }), le().then(function(e) {
                            e = e.data;
                            i(e)
                        }, function(e) {
                            console.debug(e)
                        }), me().then(function(e) {
                            e = e.data;
                            u(e)
                        }, function(e) {
                            console.debug(e)
                        })),
                        function() {
                            e(), t()
                        }
                }, []), L().createElement(ct, lt({
                    friendsData: r,
                    messagesData: o,
                    tradeData: c
                }, e))
            }
            var Q = M.authenticatedUser.name,
                f = M.authenticatedUser.displayName,
                ft = {
                    nameForDisplay: null !== j.DisplayNames && void 0 !== j.DisplayNames && j.DisplayNames.Enabled() ? f : Q,
                    nameForHeader: null !== j.DisplayNames && void 0 !== j.DisplayNames && j.DisplayNames.Enabled() ? _.concatTexts.concat(["", Q]) : Q
                };

            function pt(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i),
                        u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, a)
            }

            function vt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return bt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function bt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function gt(e, t) {
                if (null == e) return {};
                var n, r = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols)
                    for (var a = Object.getOwnPropertySymbols(e), o = 0; o < a.length; o++) n = a[o], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }

            function ht(e) {
                var t = e.isLeftNavOpen,
                    n = gt(e, ["isLeftNavOpen"]),
                    r = vt((0, P.useState)(!1), 2),
                    e = r[0],
                    a = r[1],
                    o = (0, P.useRef)(null);
                (0, P.useEffect)(function() {
                    (function() {
                        var c, e = (c = regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        e.next = 4;
                                        break;
                                    case 4:
                                        return e.prev = 4, e.next = 7, (0, v.robloxBadgesReadyForRender)();
                                    case 7:
                                        e.sent && a((0, v.currentUserHasVerifiedBadge)()), e.next = 14;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(4), a(!1);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [4, 11]
                            ])
                        }), function() {
                            var e = this,
                                i = arguments;
                            return new Promise(function(t, n) {
                                var r = c.apply(e, i);

                                function a(e) {
                                    pt(r, t, n, a, o, "next", e)
                                }

                                function o(e) {
                                    pt(r, t, n, a, o, "throw", e)
                                }
                                a(void 0)
                            })
                        });
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()().catch(function() {})
                }, [t, o]);
                r = e && v.VerifiedBadgeIconContainer ? L().createElement("section", {
                    ref: function(e) {
                        o.current = e
                    }
                }, L().createElement(v.VerifiedBadgeIconContainer, {
                    overrideImgClass: "verified-badge-icon-header",
                    size: v.BadgeSizes.CAPTIONHEADER
                })) : null, t = A()("rbx-left-col", {
                    "nav-show": t
                }), e = A()("font-header-2 dynamic-ellipsis-item", {
                    "verified-badge-left-nav": e
                });
                return L().createElement("div", {
                    id: "navigation",
                    className: t
                }, L().createElement("ul", null, L().createElement("li", {
                    key: "username"
                }, L().createElement(N.Link, {
                    className: "dynamic-overflow-container text-nav",
                    role: "link",
                    url: V.scrollListItems.profile.url
                }, L().createElement("span", {
                    className: "avatar avatar-headshot-xs"
                }, L().createElement(p.Thumbnail2d, {
                    containerClass: "avatar-card-image",
                    targetId: M.authenticatedUser.id,
                    type: p.ThumbnailTypes.avatarHeadshot,
                    altName: M.authenticatedUser.name
                })), L().createElement("div", {
                    className: e
                }, ft.nameForDisplay), r)), L().createElement("li", {
                    key: "divider",
                    className: "rbx-divider"
                })), L().createElement(N.ScrollBar, {
                    className: "rbx-scrollbar"
                }, L().createElement(mt, n)))
            }
            ht.propTypes = {
                isLeftNavOpen: m().bool.isRequired
            };
            var yt = ht;

            function St(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function Et(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? St(Object(a), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : St(Object(a)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return r
            }

            function wt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ct(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ct(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ct(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var xt, At = u,
                Nt = (0, D.withTranslations)(function(e) {
                    var t = M.authenticatedUser.isAuthenticated,
                        n = wt((0, P.useState)(!1), 2),
                        r = n[0],
                        a = n[1],
                        o = (0, P.useCallback)(function() {
                            a(!r)
                        }, [r]);
                    return (0, P.useEffect)(function() {
                        return document.addEventListener(At.name, o),
                            function() {
                                document.removeEventListener(At.name, o)
                            }
                    }, [o]), t ? L().createElement(yt, Et({
                        isLeftNavOpen: r
                    }, e)) : null
                }, s),
                Rt = function() {
                    return (Rt = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Ot = function(e, i, c, u) {
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
                Tt = function(n, r) {
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
                It = _.httpService.createCancelToken();

            function kt(e) {
                return void 0 === (null == e ? void 0 : e.label)
            }

            function Ut(e) {
                return void 0 !== (null == e ? void 0 : e.Query)
            }

            function Pt(e) {
                if (Ut(e)) return "avatar";
                switch (e.type) {
                    case xt.QuerySuggestion:
                        return "keyword";
                    case xt.GameSuggestion:
                        return "game";
                    default:
                        throw Error("Unrecognized autocomplete suggestion, ".concat(JSON.stringify(e)))
                }
            }

            function Lt(e) {
                switch (e.label) {
                    case "Label.Players":
                        return "defaultPlayers";
                    case "Heading.Marketplace":
                    case "Label.AvatarShop":
                    case "Label.sCatalog":
                        return "defaultShops";
                    case "Label.sGroups":
                        return "defaultGroups";
                    case "Label.CreatorMarketplace":
                        return "defaultLibrary";
                    case "Label.Experience":
                        return "defaultGames";
                    default:
                        throw Error("Unrecognized default suggestion, ".concat(JSON.stringify(e)))
                }
            }(o = xt = xt || {})[o.GameSuggestion = 0] = "GameSuggestion", o[o.QuerySuggestion = 1] = "QuerySuggestion", o[o.TrendingQuerySuggestion = 2] = "TrendingQuerySuggestion";
            var _t = function(t) {
                    return Ot(void 0, void 0, Promise, function() {
                        return Tt(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return It.cancel(), It = _.httpService.createCancelToken(), [4, _.httpService.get(Rt(Rt({}, He.getSuggestionUrl), {
                                        url: He.getSuggestionUrl.url + encodeURIComponent(t.toLowerCase()),
                                        cancelToken: It.token
                                    }))];
                                case 1:
                                    return [2, e.sent().data]
                            }
                        })
                    })
                },
                jt = function(n, r, a, o, i) {
                    return void 0 === i && (i = !1), Ot(void 0, void 0, Promise, function() {
                        var t;
                        return Tt(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return null === (t = r) && (t = He.englishLanguageCode), t = {
                                        prefix: n.toLowerCase(),
                                        limit: a,
                                        lang: t,
                                        q: o
                                    }, It.cancel(), It = _.httpService.createCancelToken(), i ? [4, _.httpService.get(Rt(Rt({}, He.avatarRequestSuggestionUrl), {
                                        timeout: He.expiryTimeout,
                                        cancelToken: It.token,
                                        fullError: !0
                                    }), t)] : [3, 2];
                                case 1:
                                    return [2, e.sent().data];
                                case 2:
                                    return [4, _.httpService.get(Rt(Rt({}, He.avatarRequestSuggestionCdnUrl), {
                                        timeout: He.expiryTimeout,
                                        cancelToken: It.token,
                                        fullError: !0
                                    }), t)];
                                case 3:
                                    return [2, e.sent().data]
                            }
                        })
                    })
                },
                Mt = kt,
                Dt = Ut,
                Bt = Pt,
                qt = Lt,
                Ft = function(e, t) {
                    var n;
                    return kt(e) && Ut(e) ? V.avatarSearchLink.url + encodeURIComponent(e.Query) : kt(e) ? V.gameSearchLink.url + encodeURIComponent(e.searchQuery) : null != t && null !== (n = t.target) && void 0 !== n && n.value ? e.url + encodeURIComponent(t.target.value) : ""
                },
                Gt = function() {
                    var e = (new j.TranslationResourceProvider).intl.locale,
                        t = e.indexOf("-");
                    return (e = e.substring(0, -1 !== t ? t : e.length)) !== He.englishLanguageCode && (e += ",".concat(He.englishLanguageCode)), e
                },
                Vt = function(e, t) {
                    return e.map(function(e) {
                        return kt(e) ? "".concat(Pt(e), "|").concat(e.searchQuery) : "".concat(Lt(e), "|").concat(t)
                    }).join(",")
                },
                Kt = Se.eventStreamService.eventTypes,
                Ht = "searchAutocomplete",
                Wt = {
                    actionTypes: {
                        open: "open",
                        submit: "submit",
                        close: "close"
                    },
                    generateSessionInfo: _.uuidService.generateRandomUuid,
                    searchTextTrim: function(e, t, n, r) {
                        return [{
                            name: "searchTextTrim",
                            type: Kt.formInteraction,
                            context: Ht
                        }, {
                            kwd: e,
                            resultingKwd: t,
                            searchType: n,
                            sessionInfo: r
                        }]
                    },
                    searchClear: function(e, t, n, r) {
                        return [{
                            name: "searchClear",
                            type: Kt.formInteraction,
                            context: Ht
                        }, {
                            kwd: e,
                            searchType: t,
                            sessionInfo: n,
                            page: r
                        }]
                    },
                    searchSuggestionClicked: function(e, t, n, r, a, o, i) {
                        return [{
                            name: "searchSuggestionClicked",
                            type: Kt.formInteraction,
                            context: Ht
                        }, {
                            kwd: e,
                            searchType: t,
                            suggestionPosition: n,
                            suggestionClicked: r,
                            suggestionType: a,
                            suggestions: o,
                            sessionInfo: i
                        }]
                    },
                    searchAutocomplete: function(e, t, n, r, a, o, i, c, u, l) {
                        return [{
                            name: "searchAutocomplete",
                            type: Kt.formInteraction,
                            context: Ht
                        }, {
                            kwd: e,
                            previousKwd: t,
                            fromLocalCache: n,
                            suggestions: r,
                            algorithm: a,
                            latency: o,
                            timeoutDelayMs: i,
                            sessionInfo: c,
                            page: u,
                            isPersonalizedBasedOnPreviousQuery: l
                        }]
                    },
                    search: function(e, t, n) {
                        return [{
                            name: "search",
                            type: Kt.formInteraction,
                            context: Ht
                        }, {
                            kwd: e,
                            actionType: t,
                            sessionInfo: n
                        }]
                    },
                    catalogSearch: function(e, t) {
                        return [{
                            name: "catalogSearch",
                            type: Kt.formInteraction,
                            context: Ht
                        }, {
                            autocompleteFlag: e,
                            previousPage: t
                        }]
                    }
                };

            function Qt(e) {
                return function(e) {
                    if (Array.isArray(e)) return $t(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || Xt(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function zt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || Xt(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Xt(e, t) {
                if (e) {
                    if ("string" == typeof e) return $t(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $t(e, t) : void 0
                }
            }

            function $t(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Yt(e) {
                var o = e.translate,
                    i = e.searchInput,
                    c = e.indexOfSelectedOption,
                    u = e.autocompleteSessionInfo,
                    l = e.resetAutocompleteSessionInfo,
                    s = qe();
                return L().createElement(L().Fragment, null, Object.entries(s).map(function(e) {
                    var t = zt(e, 2),
                        n = t[0],
                        r = t[1],
                        a = r.url,
                        e = r.label,
                        t = A()("navbar-search-option rbx-clickable-li", parseInt(n, 10) === c ? " selected" : "");
                    return L().createElement("li", {
                        key: n,
                        className: t
                    }, L().createElement(N.Link, {
                        className: "navbar-search-anchor",
                        url: a + i,
                        onClick: function() {
                            Se.eventStreamService.sendEvent.apply(Se.eventStreamService, Qt(Wt.searchSuggestionClicked(i, void 0, n, i, qt(r), Vt(s, i), u))), l()
                        }
                    }, o("Label.sSearchPhrase", {
                        phrase: i,
                        location: o(e)
                    })))
                }))
            }
            Yt.propTypes = {
                translate: m().func.isRequired,
                searchInput: m().string.isRequired,
                indexOfSelectedOption: m().number.isRequired,
                autocompleteSessionInfo: m().string.isRequired,
                resetAutocompleteSessionInfo: m().func.isRequired
            };
            var Jt = Yt;

            function Zt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return en(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return en(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function en(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var tn = V.gameSearchLink,
                nn = V.avatarSearchLink,
                rn = V.creatorMarketplaceUrl;

            function an(e) {
                var t = e.translate,
                    n = e.selected,
                    r = e.suggestion,
                    a = e.onClick,
                    o = A()("navbar-search-option rbx-clickable-li", {
                        "new-selected": n
                    }),
                    i = r.type,
                    c = r.universeId,
                    e = r.searchQuery,
                    n = Zt((0, P.useState)(!1), 2),
                    r = n[0],
                    u = n[1];
                return i === xt.GameSuggestion ? L().createElement("li", {
                    className: o
                }, L().createElement(N.Link, {
                    className: "new-navbar-search-anchor",
                    url: tn.url + encodeURIComponent(e),
                    onClick: a
                }, L().createElement("span", {
                    className: A()(tn.icon, "navbar-list-option-icon")
                }), L().createElement("span", {
                    className: "navbar-list-option-text"
                }, e), L().createElement("span", {
                    className: "navbar-list-option-suffix"
                }, t("Label.sSearchPhraseV2", {
                    location: t(tn.label)
                })), L().createElement("span", {
                    className: A()("navbar-list-option-thumbnail", {
                        "navbar-list-option-thumbnail-visible": r
                    })
                }, L().createElement("span", {
                    className: "background-icon"
                }), L().createElement(p.Thumbnail2d, {
                    type: p.ThumbnailTypes.gameIcon,
                    size: p.DefaultThumbnailSize,
                    targetId: c,
                    containerClass: "thumbnail-icon",
                    format: p.ThumbnailFormat.jpeg,
                    onLoad: function() {
                        u(!0)
                    }
                })))) : L().createElement("li", {
                    className: o
                }, L().createElement(N.Link, {
                    className: "new-navbar-search-anchor",
                    url: tn.url + encodeURIComponent(e),
                    onClick: a
                }, L().createElement("span", {
                    className: A()(tn.icon, "navbar-list-option-icon")
                }), L().createElement("span", {
                    className: "navbar-list-option-text"
                }, e), L().createElement("span", {
                    className: "navbar-list-option-suffix"
                }, t("Label.sSearchPhraseV2", {
                    location: t(tn.label)
                }))))
            }

            function on(e) {
                var t = e.translate,
                    n = e.selected,
                    r = e.suggestion,
                    e = e.onClick,
                    n = A()("navbar-search-option rbx-clickable-li", {
                        "new-selected": n
                    }),
                    r = r.Query;
                return L().createElement("li", {
                    className: n
                }, L().createElement(N.Link, {
                    className: "new-navbar-search-anchor",
                    url: nn.url + encodeURIComponent(r),
                    onClick: e
                }, L().createElement("span", {
                    className: A()(nn.icon, "navbar-list-option-icon")
                }), L().createElement("span", {
                    className: "navbar-list-option-text"
                }, r), L().createElement("span", {
                    className: "navbar-list-option-suffix"
                }, t("Label.sSearchPhraseV2", {
                    location: t(nn.label)
                }))))
            }

            function cn(e) {
                var t = e.translate,
                    n = e.selected,
                    r = e.searchInput,
                    a = e.suggestion,
                    o = e.onClick,
                    i = a.url,
                    e = a.label,
                    a = a.icon,
                    i = (0, He.isRedirectLibraryToCreatorMarketplaceEnabled)() && "Label.CreatorMarketplace" === e ? rn : i,
                    n = A()("navbar-search-option rbx-clickable-li", {
                        "new-selected": n
                    });
                return L().createElement("li", {
                    className: n
                }, L().createElement(N.Link, {
                    className: "new-navbar-search-anchor",
                    url: i + encodeURIComponent(r),
                    onClick: o
                }, L().createElement("span", {
                    className: A()(a, "navbar-list-option-icon")
                }), L().createElement("span", {
                    className: "navbar-list-option-text"
                }, r.toLowerCase()), L().createElement("span", {
                    className: "navbar-list-option-suffix"
                }, t("Label.sSearchPhraseV2", {
                    location: t(e)
                }))))
            }

            function un(e) {
                return function(e) {
                    if (Array.isArray(e)) return ln(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ln(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ln(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ln(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function sn(e) {
                function r(t, n) {
                    return function() {
                        var e = c[n];
                        Se.eventStreamService.sendEvent.apply(Se.eventStreamService, un(Wt.searchSuggestionClicked(o, void 0, n, Mt(e) ? e.searchQuery : o, t, Vt(c, o), u))), l();
                        e = t.includes("default") ? 0 : 1;
                        Se.eventStreamService.sendEvent.apply(Se.eventStreamService, un(Wt.catalogSearch(e, _.pageName.PageNameProvider.getInternalPageName())))
                    }
                }
                var a = e.translate,
                    o = e.searchInput,
                    i = e.indexOfSelectedOption,
                    c = e.searchSuggestions,
                    u = e.autocompleteSessionInfo,
                    l = e.resetAutocompleteSessionInfo;
                return c.map(function(e, t) {
                    var n = parseInt(t, 10) === i;
                    return Mt(e) && Dt(e) ? L().createElement(on, {
                        key: e.Query,
                        translate: a,
                        selected: n,
                        suggestion: e,
                        onClick: r(Bt(e), t)
                    }) : Mt(e) ? L().createElement(an, {
                        key: e.searchQuery,
                        translate: a,
                        selected: n,
                        suggestion: e,
                        onClick: r(Bt(e), t)
                    }) : L().createElement(cn, {
                        key: e.url,
                        translate: a,
                        selected: n,
                        suggestion: e,
                        searchInput: o,
                        onClick: r(qt(e), t)
                    })
                })
            }
            an.propTypes = {
                translate: m().func.isRequired,
                selected: m().bool.isRequired,
                suggestion: m().shape({
                    type: m().number.isRequired,
                    score: m().number.isRequired,
                    universeId: m().number,
                    canonicalTitle: m().string,
                    thumbnailUrl: m().string,
                    searchQuery: m().string.isRequired,
                    trendingSearchStartDateTime: m().string
                }).isRequired,
                onClick: m().func.isRequired
            }, on.propTypes = {
                translate: m().func.isRequired,
                selected: m().bool.isRequired,
                suggestion: m().shape({
                    Query: m().string
                }).isRequired,
                onClick: m().func.isRequired
            }, cn.propTypes = {
                translate: m().func.isRequired,
                selected: m().bool.isRequired,
                searchInput: m().string.isRequired,
                suggestion: m().shape({
                    url: m().string.isRequired,
                    label: m().string.isRequired,
                    pageSort: m().arrayOf(m().string).isRequired,
                    icon: m().string.isRequired
                }).isRequired,
                onClick: m().func.isRequired
            }, sn.propTypes = {
                translate: m().func.isRequired,
                searchInput: m().string.isRequired,
                indexOfSelectedOption: m().number.isRequired,
                searchSuggestions: m().arrayOf(m().oneOfType([m().shape({
                    type: m().number.isRequired,
                    score: m().number.isRequired,
                    universeId: m().number.isRequired,
                    canonicalTitle: m().string,
                    thumbnailUrl: m().string,
                    searchQuery: m().string.isRequired,
                    trendingSearchStartDateTime: m().string
                }), m().shape({
                    url: m().string.isRequired,
                    label: m().string.isRequired,
                    pageSort: m().arrayOf(m().string).isRequired,
                    icon: m().string.isRequired
                }), m().shape({
                    Query: m().string.isRequired,
                    Score: m().number.isRequired
                })])).isRequired,
                autocompleteSessionInfo: m().string.isRequired,
                resetAutocompleteSessionInfo: m().func.isRequired
            };
            var dn = sn;

            function mn(e) {
                return function(e) {
                    if (Array.isArray(e)) return fn(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return fn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fn(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function fn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function pn(e) {
                var t = e.translate,
                    n = e.searchInput,
                    r = e.isMenuOpen,
                    a = e.openMenu,
                    o = e.closeMenu,
                    i = e.handleSearch,
                    c = e.setIsMenuHover,
                    u = e.indexOfSelectedOption,
                    l = e.onSubmit,
                    s = e.onKeyDown,
                    d = e.onKeyUp,
                    m = e.isUniverseSearchShown,
                    f = e.searchSuggestions,
                    p = e.autocompleteSessionInfo,
                    v = e.resetAutocompleteSessionInfo,
                    b = e.isAvatarAutocompleteEnabled,
                    g = (0, P.createRef)(),
                    h = (0, P.createRef)(),
                    e = function() {
                        var e;
                        Se.eventStreamService.sendEvent.apply(Se.eventStreamService, mn(Wt.searchClear(n, void 0, p, null === _.pageName || void 0 === _.pageName || null === (e = _.pageName.PageNameProvider) || void 0 === e ? void 0 : e.getInternalPageName()))), null == g || null !== (e = g.current) && void 0 !== e && e.focus(), i({
                            target: {
                                value: ""
                            }
                        })
                    },
                    m = A()("navbar-left navbar-search col-xs-5 col-sm-6 col-md-2 col-lg-3", {
                        "navbar-search-open": r,
                        shown: m
                    }),
                    b = He.isAutocompleteSuggestionsIXPTestEnabled() || b;
                return (0, D.useOnClickOutside)([g, h], o), L().createElement("div", {
                    "data-testid": "navigation-search-input",
                    className: m,
                    role: "search"
                }, L().createElement("div", {
                    className: "input-group"
                }, L().createElement("form", {
                    name: "search-form",
                    onSubmit: l,
                    action: "/search"
                }, b ? L().createElement("div", {
                    className: "form-has-feedback"
                }, L().createElement("input", {
                    ref: g,
                    id: "navbar-search-input",
                    type: "search",
                    name: "search-bar",
                    "data-testid": "navigation-search-input-field",
                    className: "form-control input-field new-input-field",
                    value: n,
                    onChange: i,
                    placeholder: t("Label.sSearch"),
                    maxLength: "120",
                    onFocus: a,
                    onKeyDown: s,
                    onKeyUp: d,
                    autoComplete: "off",
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    spellCheck: "false"
                }), 0 < n.length && L().createElement("span", {
                    "data-testid": "navigation-search-input-clear-button",
                    tabIndex: 0,
                    role: "button",
                    "aria-label": "Clear Search",
                    onClick: e,
                    onKeyDown: e,
                    className: "clear-search icon-actions-clear-sm"
                }, L().createElement("span", null))) : L().createElement("input", {
                    ref: g,
                    id: "navbar-search-input",
                    type: "search",
                    name: "search-bar",
                    "data-testid": "navigation-search-input-field",
                    className: "form-control input-field",
                    value: n,
                    onChange: i,
                    placeholder: t("Label.sSearch"),
                    maxLength: "120",
                    onFocus: a,
                    onKeyDown: s,
                    onKeyUp: d,
                    autoComplete: "off"
                })), L().createElement("div", {
                    className: "input-group-btn"
                }, L().createElement("button", {
                    "data-testid": "navigation-search-input-search-button",
                    className: "input-addon-btn",
                    type: "submit"
                }, L().createElement("span", {
                    className: "icon-common-search-sm"
                })))), L().createElement("ul", {
                    ref: h,
                    className: A()("dropdown-menu", {
                        "new-dropdown-menu": b
                    }),
                    role: "menu",
                    onMouseEnter: function() {
                        c(!0)
                    },
                    onMouseLeave: function() {
                        c(!1)
                    }
                }, b ? L().createElement(dn, {
                    translate: t,
                    searchInput: n,
                    indexOfSelectedOption: u,
                    searchSuggestions: f,
                    autocompleteSessionInfo: p,
                    resetAutocompleteSessionInfo: v
                }) : L().createElement(Jt, {
                    translate: t,
                    searchInput: n,
                    indexOfSelectedOption: u,
                    autocompleteSessionInfo: p,
                    resetAutocompleteSessionInfo: v
                })))
            }
            pn.defaultProps = {
                isUniverseSearchShown: !0,
                isAvatarAutocompleteEnabled: !1
            }, pn.propTypes = {
                translate: m().func.isRequired,
                searchInput: m().string.isRequired,
                isMenuOpen: m().bool.isRequired,
                openMenu: m().func.isRequired,
                closeMenu: m().func.isRequired,
                handleSearch: m().func.isRequired,
                setIsMenuHover: m().func.isRequired,
                indexOfSelectedOption: m().number.isRequired,
                onSubmit: m().func.isRequired,
                onKeyDown: m().func.isRequired,
                onKeyUp: m().func.isRequired,
                isUniverseSearchShown: m().bool,
                isAvatarAutocompleteEnabled: m().bool,
                searchSuggestions: m().arrayOf(m().oneOfType([m().shape({
                    type: m().number.isRequired,
                    score: m().number.isRequired,
                    universeId: m().number.isRequired,
                    canonicalTitle: m().string,
                    thumbnailUrl: m().string,
                    searchQuery: m().string.isRequired,
                    trendingSearchStartDateTime: m().string
                }), m().shape({
                    url: m().string.isRequired,
                    label: m().string.isRequired,
                    pageSort: m().arrayOf(m().string).isRequired,
                    icon: m().string
                }), m().shape({
                    query: m().string.isRequired,
                    score: m().number.isRequired
                })])).isRequired,
                autocompleteSessionInfo: m().string.isRequired,
                resetAutocompleteSessionInfo: m().func.isRequired
            };
            var vn = pn;

            function bn(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i),
                        u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, a)
            }

            function gn(e) {
                return function(e) {
                    if (Array.isArray(e)) return Sn(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || yn(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function hn(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || yn(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function yn(e, t) {
                if (e) {
                    if ("string" == typeof e) return Sn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Sn(e, t) : void 0
                }
            }

            function Sn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function En(e) {
                function i(e) {
                    if (e) {
                        if (O) {
                            var t = -1 === c.findIndex(function(e) {
                                    return e.searchQuery === u.toLowerCase() && Dt(e)
                                }),
                                n = e.filter(function(e) {
                                    return e.searchQuery !== u.toLowerCase() || Dt(e)
                                });
                            return [].concat(gn(C.slice(0, t ? N + 1 : N)), gn(n), gn(C.slice(N + 1)))
                        }
                        if (He.isSpecialTreatmentAutocompleteRestricted()) return C;
                        n = -1 === e.findIndex(function(e) {
                            return e.searchQuery === u.toLowerCase() && e.type === xt.GameSuggestion
                        }), e = e.filter(function(e) {
                            return e.searchQuery !== u.toLowerCase() || e.type === xt.GameSuggestion
                        }).slice(0, He.isSpecialTreatment() ? He.numberOfSpecialTreatmentAutocompleteSuggestions : He.numberOfAutocompleteSuggestions());
                        return [].concat(gn(C.slice(0, n ? A + 1 : A)), gn(e), gn(C.slice(A + 1)))
                    }
                    return C
                }
                var t = e.translate,
                    n = e.isUniverseSearchShown,
                    r = hn((0, P.useState)(Ke(window.location.search).keyword || ""), 2),
                    o = r[0],
                    a = r[1],
                    u = (0, D.useDebounce)(o, He.debounceTimeout),
                    l = (0, D.usePrevious)(u),
                    e = hn((0, P.useState)(null), 2),
                    c = e[0],
                    s = e[1],
                    r = hn((0, P.useState)(Wt.generateSessionInfo()), 2),
                    d = r[0],
                    m = r[1],
                    e = hn((0, P.useState)(!1), 2),
                    f = e[0],
                    p = e[1],
                    r = hn((0, P.useState)(!0), 2),
                    v = r[0],
                    b = r[1],
                    e = hn((0, P.useState)(!1), 2),
                    g = e[0],
                    r = e[1],
                    e = hn((0, P.useState)(0), 2),
                    h = e[0],
                    y = e[1],
                    e = hn((0, P.useState)(!1), 2),
                    S = e[0],
                    E = e[1],
                    w = B,
                    e = hn((0, P.useState)((He.isAutocompleteSuggestionsIXPTestEnabled() ? Fe : qe)()), 2),
                    C = e[0],
                    x = e[1],
                    A = C.findIndex(function(e) {
                        return e.label === V.gameSearchLink.label
                    }),
                    N = Fe().findIndex(function(e) {
                        return e.label === V.avatarSearchLink.label
                    }),
                    R = Gt(),
                    O = Ge(),
                    T = (0, P.useMemo)(function() {
                        return i(c)
                    }, [c, C]),
                    I = T.length;
                (0, P.useEffect)(function() {
                    v || Se.eventStreamService.sendEvent.apply(Se.eventStreamService, gn(Wt.search(o, Wt.actionTypes.submit, d))), b(!1);
                    var e = function() {
                        var c, e = (c = regeneratorRuntime.mark(function e() {
                            var t, n, r, a, o;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!("" !== u && u.length <= He.debouncedSearchInputMaxLength)) {
                                            e.next = 34;
                                            break
                                        }
                                        if (s(null), t = Date.now(), O) return e.prev = 4, n = Date.now(), e.next = 8, jt(u, R, He.avatarAutocompleteQueryPaddingAmount, l, S);
                                        e.next = 20;
                                        break;
                                    case 8:
                                        a = e.sent, o = function(e, t) {
                                            var n = 0,
                                                r = [];
                                            return e.forEach(function(e) {
                                                n < He.avatarAutocompleteSuggestionLimit && e.Query !== t && (r.push(e), n += 1)
                                            }), r
                                        }(a.Data, u), Se.eventStreamService.sendEvent.apply(Se.eventStreamService, gn(Wt.searchAutocomplete(u, l, !1, o, a.Args.Algo, n - t, He.debounceTimeout, "", _.pageName.PageNameProvider.getInternalPageName(), "" !== l))), s(o), e.next = 18;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(4), _.httpService.isCancelled(e.t0) || s([]), E(!0);
                                    case 18:
                                        e.next = 34;
                                        break;
                                    case 20:
                                        if (He.isAutocompleteSuggestionsIXPTestEnabled()) return e.prev = 21, e.next = 24, _t(u);
                                        e.next = 34;
                                        break;
                                    case 24:
                                        r = e.sent, a = Date.now(), o = i(r.entries), Se.eventStreamService.sendEvent.apply(Se.eventStreamService, gn(Wt.searchAutocomplete(u, l, !1, Vt(o, u), r.algorithmName, a - t, He.debounceTimeout, d, _.pageName.PageNameProvider.getInternalPageName(), !1))), s(r.entries), e.next = 34;
                                        break;
                                    case 31:
                                        e.prev = 31, e.t1 = e.catch(21), _.httpService.isCancelled(e.t1) || s([]);
                                    case 34:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [4, 14],
                                [21, 31]
                            ])
                        }), function() {
                            var e = this,
                                i = arguments;
                            return new Promise(function(t, n) {
                                var r = c.apply(e, i);

                                function a(e) {
                                    bn(r, t, n, a, o, "next", e)
                                }

                                function o(e) {
                                    bn(r, t, n, a, o, "throw", e)
                                }
                                a(void 0)
                            })
                        });
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    O && x(Fe()), e()
                }, [u]);

                function k() {
                    m(Wt.generateSessionInfo())
                }

                function U() {
                    p(!1)
                }
                return (0, P.useEffect)(function() {
                    return window.addEventListener("setSearchMenuClose", U),
                        function() {
                            window.removeEventListener("setSearchMenuClose", U)
                        }
                }, [f]), L().createElement(vn, {
                    searchInput: o,
                    handleSearch: function(e) {
                        e = e.target.value;
                        e.length < o.length && Se.eventStreamService.sendEvent.apply(Se.eventStreamService, gn(Wt.searchTextTrim(o, e, void 0, d))), 0 === e.length && k(), y(0), p(0 < e.length), a(e)
                    },
                    openMenu: function() {
                        var e = Wt.generateSessionInfo();
                        Se.eventStreamService.sendEvent.apply(Se.eventStreamService, gn(Wt.search(o, Wt.actionTypes.open, e))), m(e), 0 === o.length || g || p(!0)
                    },
                    closeMenu: function() {
                        f && (Se.eventStreamService.sendEvent.apply(Se.eventStreamService, gn(Wt.search(o, Wt.actionTypes.close, d))), p(!1))
                    },
                    setIsMenuHover: r,
                    isMenuOpen: f,
                    indexOfSelectedOption: h,
                    onSubmit: function(e) {
                        e.preventDefault(), e.stopPropagation()
                    },
                    onKeyDown: function(e) {
                        var t = h;
                        !f || e.keyCode !== w.arrowUp && e.keyCode !== w.arrowDown && e.keyCode !== w.tab || (e.stopPropagation(), e.preventDefault(), e.keyCode === w.arrowUp ? --t : t += 1, (t %= I) < 0 && (t = I + t), y(t))
                    },
                    onKeyUp: function(e) {
                        if (e.keyCode === w.enter) {
                            e.stopPropagation(), e.preventDefault();
                            var t = T[h];
                            Mt(t) ? (Se.eventStreamService.sendEvent.apply(Se.eventStreamService, gn(Wt.searchSuggestionClicked(u, void 0, h, t.searchQuery, Bt(t), Vt(T, o), d))), Se.eventStreamService.sendEvent.apply(Se.eventStreamService, gn(Wt.catalogSearch(1, _.pageName.PageNameProvider.getInternalPageName())))) : (Se.eventStreamService.sendEvent.apply(Se.eventStreamService, gn(Wt.searchSuggestionClicked(u, void 0, h, u, qt(t), Vt(T, o), d))), Se.eventStreamService.sendEvent.apply(Se.eventStreamService, gn(Wt.catalogSearch(0, _.pageName.PageNameProvider.getInternalPageName())))), k();
                            var n = Ft(t, e);
                            if (n) {
                                var r, a = He.isRedirectLibraryToCreatorMarketplaceEnabled,
                                    n = n;
                                if ("Label.CreatorMarketplace" === t.label && a() && (n = V.creatorMarketplaceUrl, null != e && null !== (r = e.target) && void 0 !== r && r.value && (n += encodeURIComponent(e.target.value))), document.getElementById("routing")) {
                                    e = new URL(n);
                                    if (e.origin === window.location.origin && "/catalog" === e.pathname) {
                                        e = new CustomEvent("externalNavigation", {
                                            detail: {
                                                url: n
                                            }
                                        });
                                        return window.dispatchEvent(e), p(!1), void document.getElementById("navbar-search-input").blur()
                                    }
                                }
                                window.location = n
                            }
                        }
                    },
                    isUniverseSearchShown: n,
                    translate: t,
                    searchSuggestions: T,
                    autocompleteSessionInfo: d,
                    resetAutocompleteSessionInfo: k,
                    isAvatarAutocompleteEnabled: O
                })
            }
            En.defaultProps = {
                isUniverseSearchShown: !0
            }, En.propTypes = {
                translate: m().func.isRequired,
                isUniverseSearchShown: m().bool
            };
            var wn = (0, D.withTranslations)(En, s),
                o = angular,
                Cn = ko.n(o);

            function xn(e) {
                return (xn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function An(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function Nn(e, t) {
                return (Nn = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Rn(n) {
                var r = function() {
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
                    var e, t = On(n);
                    return e = r ? (e = On(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), t = this, !(e = e) || "object" !== xn(e) && "function" != typeof e ? function(e) {
                        if (void 0 !== e) return e;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(t) : e
                }
            }

            function On(e) {
                return (On = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Tn = function() {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && Nn(e, t)
                }(a, L().Component);
                var e, t, n, r = Rn(a);

                function a() {
                    return function(e) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this), r.apply(this, arguments)
                }
                return e = a, (t = [{
                    key: "componentDidMount",
                    value: function() {
                        try {
                            Cn().module("notificationStreamIcon"), Cn().bootstrap(this.container, ["notificationStreamIcon"])
                        } catch (e) {
                            console.log(e)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return L().createElement("span", {
                            ref: function(e) {
                                t.container = e
                            },
                            className: "nav-robux-icon rbx-menu-item"
                        }, L().createElement("span", {
                            id: "notification-stream-icon-container",
                            "notification-stream-indicator": "true"
                        }))
                    }
                }]) && An(e.prototype, t), n && An(e, n), a
            }();

            function In(e) {
                return (In = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function kn(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function Un(e, t) {
                return (Un = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Pn(n) {
                var r = function() {
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
                    var e, t = Ln(n);
                    return e = r ? (e = Ln(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), t = this, !(e = e) || "object" !== In(e) && "function" != typeof e ? function(e) {
                        if (void 0 !== e) return e;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(t) : e
                }
            }

            function Ln(e) {
                return (Ln = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var _n = function() {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Un(e, t)
                    }(a, L().Component);
                    var e, t, n, r = Pn(a);

                    function a() {
                        return function(e) {
                            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                        }(this), r.apply(this, arguments)
                    }
                    return e = a, (t = [{
                        key: "componentDidMount",
                        value: function() {
                            try {
                                Cn().module("notificationStream"), Cn().bootstrap(this.container, ["notificationStream"])
                            } catch (e) {
                                console.log(e)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this,
                                e = Ve(),
                                e = A()("notification-stream-base", e);
                            return L().createElement("div", {
                                ref: function(e) {
                                    t.container = e
                                },
                                className: e,
                                "notification-stream-base-view": "true"
                            })
                        }
                    }]) && kn(e.prototype, t), n && kn(e, n), a
                }(),
                jn = {
                    name: "nsCloseContent",
                    context: "click",
                    additionalProperties: {}
                };

            function Mn() {
                var e = (0, P.useRef)();
                return L().createElement("li", {
                    id: "navbar-stream",
                    ref: e,
                    className: "navbar-icon-item navbar-stream notification-margins"
                }, L().createElement(N.Popover, {
                    id: "notification-stream-popover",
                    trigger: "click",
                    placement: "bottom",
                    closeOnClick: !1,
                    button: L().createElement("button", {
                        type: "button",
                        className: "btn-uiblox-common-common-notification-bell-md"
                    }, L().createElement(Tn, null)),
                    container: e.current,
                    onExit: function() {
                        window.dispatchEvent(new Event("Roblox.NotificationStream.StreamClosed")), Se.eventStreamService.sendEventWithTarget(jn.name, jn.context, jn.additionalProperties)
                    },
                    role: "menu"
                }, L().createElement(_n, null)))
            }
            Mn.propTypes = {};
            var Dn = Mn;

            function Bn(e) {
                var t = e.accountNotificationCount,
                    e = A()("notification-red notification nav-setting-highlight", {
                        hidden: 0 === t
                    });
                return L().createElement("span", {
                    id: "settings-icon",
                    className: "nav-settings-icon rbx-menu-item"
                }, L().createElement("span", {
                    className: "icon-nav-settings roblox-popover-close",
                    id: "nav-settings"
                }), L().createElement("span", {
                    className: e
                }, t))
            }

            function qn() {
                return Gn(void 0, void 0, Promise, function() {
                    var t;
                    return Vn(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = {
                                    url: Kn(),
                                    withCredentials: !0
                                }, [4, _.httpService.get(t)];
                            case 1:
                                return [2, e.sent().data]
                        }
                    })
                })
            }
            Bn.defaultProps = {
                accountNotificationCount: 0
            }, Bn.propTypes = {
                accountNotificationCount: m().number
            };
            var Fn = Bn,
                Gn = function(e, i, c, u) {
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
                Vn = function(n, r) {
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
                Kn = Y,
                Hn = {
                    schematizedEventTypes: {
                        authButtonClick: "authButtonClick",
                        authPageLoad: "authPageLoad"
                    },
                    context: {
                        homepage: "homepage",
                        accountSwitcherStatus: "accountSwitcherStatus"
                    },
                    btn: {
                        logout: "logout",
                        switchAccount: "switchAccount"
                    }
                };

            function Wn(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i),
                        u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, a)
            }

            function Qn(c) {
                return function() {
                    var e = this,
                        i = arguments;
                    return new Promise(function(t, n) {
                        var r = c.apply(e, i);

                        function a(e) {
                            Wn(r, t, n, a, o, "next", e)
                        }

                        function o(e) {
                            Wn(r, t, n, a, o, "throw", e)
                        }
                        a(void 0)
                    })
                }
            }

            function zn() {
                var e = Yn("returnUrl") || window.location.href;
                return e = e === er() || e === rr() ? "" : e
            }

            function Xn() {
                var e = null !== j.AccountSwitcherService && void 0 !== j.AccountSwitcherService && j.AccountSwitcherService.isAccountSwitcherAvailable() ? zn() : Yn("returnUrl") || window.location.href,
                    t = er();
                return "".concat(t, "?").concat(Jn({
                    returnUrl: e
                }))
            }

            function $n() {
                return pe().then(Qn(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                window.location.reload();
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })))
            }
            var Yn = _.urlService.getQueryParam,
                Jn = _.urlService.composeQueryString,
                Zn = H,
                er = z,
                tr = X,
                nr = W,
                rr = $,
                ar = r,
                r = {
                    getSignupUrl: function(e) {
                        var t, n, e = 0 < arguments.length && void 0 !== e && e;
                        return n = M.authenticatedUser.isAuthenticated && e ? (t = zn(), rr()) : (t = (n = (t = Yn("returnUrl") || window.location.href).toLowerCase()).startsWith(er().toLowerCase()) || n.startsWith(tr().toLowerCase()) ? "" : t, Zn()), "".concat(n, "?").concat(Jn({
                            returnUrl: t
                        }))
                    },
                    getLoginLinkUrl: Xn,
                    logoutUser: function(e) {
                        e.stopPropagation(), e.preventDefault(), document.dispatchEvent(new CustomEvent(ar.name)), Se.eventStreamService.sendEventWithTarget(Hn.schematizedEventTypes.authButtonClick, Hn.context.homepage, {
                            btn: Hn.btn.logout
                        }), Cn().isUndefined(Cn().element("#chat-container").scope()) || (e = Cn().element("#chat-container").scope()).$digest(e.$broadcast("Roblox.Chat.destroyChatCookie")), null !== j.EmailVerificationService && void 0 !== j.EmailVerificationService && j.EmailVerificationService.handleUserEmailUpsellAtLogout($n).then(function(e) {
                            e && !e.emailAddress || $n()
                        })
                    },
                    logoutAndRedirect: $n,
                    isLoginLinkAvailable: function() {
                        var e = (null === (e = window) || void 0 === e ? void 0 : e.location).pathname,
                            e = null !== (e = null == e ? void 0 : e.toLowerCase()) && void 0 !== e ? e : "";
                        return !e.startsWith("/login") && !e.startsWith("/newlogin")
                    },
                    switchAccount: function(e) {
                        e.stopPropagation(), e.preventDefault(), e = window.location.href, Se.eventStreamService.sendEventWithTarget(Hn.schematizedEventTypes.authButtonClick, Hn.context.homepage, {
                            btn: Hn.btn.switchAccount,
                            state: e.toString()
                        }), Cn().isUndefined(Cn().element("#chat-container").scope()) || (e = Cn().element("#chat-container").scope()).$digest(e.$broadcast("Roblox.Chat.destroyChatCookie"));
                        var t = {
                            containerId: "navigation-account-switcher-container",
                            onAccountSwitched: function() {
                                Se.localStorageService.setLocalStorage(G.accountSwitchedFlag, !0), window.location.href = nr()
                            },
                            handleAddAccount: function() {
                                window.location.href = z()
                            }
                        };
                        (function() {
                            var e = Qn(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, null === j.AccountSwitcherService || void 0 === j.AccountSwitcherService ? void 0 : j.AccountSwitcherService.isAccountSwitcherAvailable();
                                        case 2:
                                            if (!e.sent) {
                                                e.next = 4;
                                                break
                                            }
                                            null === j.AccountSwitcherService || void 0 === j.AccountSwitcherService || j.AccountSwitcherService.renderAccountSwitcher(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    },
                    getIsVNGLandingRedirectEnabled: function() {
                        var e = Qn(regeneratorRuntime.mark(function e() {
                            var t, n;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, j.ExperimentationService.getAllValuesForLayer("Website.LandingPage");
                                    case 3:
                                        return t = e.sent, t = null !== (n = null == t ? void 0 : t.IsVngLandingPageRedirectEnabled) && void 0 !== n && n, e.next = 7, qn();
                                    case 7:
                                        return n = e.sent, n = n.isVNGComplianceEnabled, e.abrupt("return", n && t);
                                    case 12:
                                        return e.prev = 12, e.t0 = e.catch(0), e.abrupt("return", !1);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 12]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    navigateToLoginWithRedirect: function() {
                        window.location.href = Xn()
                    }
                },
                or = V.settingsUrl,
                ir = V.quickLoginUrl,
                cr = r.logoutUser,
                ur = r.switchAccount,
                lr = l.quickLogin,
                sr = l.settings,
                dr = l.logout,
                mr = l.switchAccountKey;

            function fr(e) {
                var r = e.translate,
                    t = e.accountNotificationCount,
                    a = void 0 === t ? 0 : t,
                    o = void 0 !== (e = e.isCrossDeviceLoginCodeValidationDisplayed) && e,
                    i = A()("notification-blue notification nav-setting-highlight", {
                        hidden: 0 === a
                    }),
                    c = (null !== (e = null === j.AccountSwitcherService || void 0 === j.AccountSwitcherService ? void 0 : j.AccountSwitcherService.useIsAccountSwitcherAvailableForBrowser()) && void 0 !== e ? e : [!1])[0],
                    e = Object.entries(or).map(function(e) {
                        var t = e[0],
                            n = e[1],
                            e = n.url,
                            n = n.label;
                        return L().createElement("li", {
                            key: t
                        }, t === dr && L().createElement(N.Link, {
                            className: "rbx-menu-item logout-menu-item",
                            key: t,
                            onClick: cr,
                            url: "#"
                        }, r(n)), t === mr && c && L().createElement(N.Link, {
                            className: "rbx-menu-item account-switch-menu-item",
                            key: t,
                            onClick: ur,
                            url: "#"
                        }, r(n)), t === lr && o && L().createElement(N.Link, {
                            className: "rbx-menu-item",
                            key: t,
                            url: ir
                        }, r(n)), t !== dr && t !== lr && t !== mr && L().createElement(N.Link, {
                            cssClasses: "rbx-menu-item",
                            key: t,
                            url: e
                        }, r(n), t === sr && L().createElement("span", {
                            className: i
                        }, a)))
                    });
                return L().createElement(L().Fragment, null, e)
            }

            function pr(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i),
                        u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, a)
            }

            function vr(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return br(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return br(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function br(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function gr(e) {
                var t = e.translate,
                    n = e.accountNotificationCount,
                    r = vr((0, P.useState)(!1), 2),
                    e = r[0],
                    a = r[1],
                    r = (0, P.useRef)();
                return (0, P.useEffect)(function() {
                    var e, t = function() {
                        var c, e = (c = regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, null === j.AccountSwitcherService || void 0 === j.AccountSwitcherService ? void 0 : j.AccountSwitcherService.syncAccountSwitcherBlobIfNeeded();
                                    case 3:
                                        e.next = 8;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0), console.warn("account switching has issues", e.t0);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 5]
                            ])
                        }), function() {
                            var e = this,
                                i = arguments;
                            return new Promise(function(t, n) {
                                var r = c.apply(e, i);

                                function a(e) {
                                    pr(r, t, n, a, o, "next", e)
                                }

                                function o(e) {
                                    pr(r, t, n, a, o, "throw", e)
                                }
                                a(void 0)
                            })
                        });
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    a(!0), e = !(null === j.AccountSwitcherService || void 0 === j.AccountSwitcherService || !j.AccountSwitcherService.getStoredAccountSwitcherBlob()), Se.eventStreamService.sendEventWithTarget(Hn.schematizedEventTypes.authPageLoad, Hn.context.accountSwitcherStatus, {
                        state: e.toString()
                    }), t()
                }, []), L().createElement("li", {
                    id: "navbar-settings",
                    ref: r,
                    className: "navbar-icon-item"
                }, L().createElement(N.Popover, {
                    id: "settings-popover",
                    trigger: "click",
                    placement: "bottom",
                    className: Ve(),
                    containerPadding: 20,
                    button: L().createElement("button", {
                        type: "button",
                        className: "btn-navigation-nav-settings-md"
                    }, L().createElement(Fn, {
                        accountNotificationCount: n
                    })),
                    container: r.current,
                    role: "menu"
                }, L().createElement("div", {
                    className: Ve()
                }, L().createElement("ul", {
                    id: "settings-popover-menu",
                    className: "dropdown-menu"
                }, L().createElement(fr, {
                    isCrossDeviceLoginCodeValidationDisplayed: e,
                    translate: t,
                    accountNotificationCount: n
                })))))
            }
            gr.defaultProps = {
                accountNotificationCount: 0
            }, gr.propTypes = {
                translate: m().func.isRequired,
                accountNotificationCount: m().number
            };
            var hr = gr;

            function yr(e) {
                var t = e.robuxAmount,
                    n = e.isGetCurrencyCallDone,
                    r = e.robuxError,
                    a = e.creditDisplayConfig,
                    e = e.showRobuxBadge,
                    t = r ? y : _.abbreviateNumber.getTruncValue(t),
                    e = A()("notification-red robux-badge", {
                        hidden: !e
                    }),
                    t = L().createElement(P.Fragment, null, L().createElement("span", {
                        className: "icon-robux-28x28 roblox-popover-close",
                        id: "nav-robux"
                    }), a !== F.hideCreditAndRobux && L().createElement("span", {
                        className: "rbx-text-navbar-right text-header",
                        id: "nav-robux-amount"
                    }, n && t));
                return L().createElement("span", {
                    id: "nav-robux-icon",
                    className: "nav-robux-icon rbx-menu-item"
                }, r ? L().createElement(N.Tooltip, {
                    id: "current-error",
                    content: r,
                    placement: "bottom",
                    containerClassName: "nav-buy-robux-icon-tooltip-container"
                }, t) : t, L().createElement("span", {
                    className: e
                }))
            }
            yr.defaultProps = {
                robuxAmount: 0,
                robuxError: "",
                showRobuxBadge: !1
            }, yr.propTypes = {
                robuxAmount: m().number,
                robuxError: m().string,
                isGetCurrencyCallDone: m().bool.isRequired,
                creditDisplayConfig: m().string.isRequired,
                showRobuxBadge: m().bool
            };
            var Sr = yr;

            function Er(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return wr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return wr(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function wr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Cr = V.buyRobuxUrl,
                xr = V.redeemUrl,
                Ar = V.buyGiftCardUrl,
                Nr = new Map,
                Rr = new Map;

            function Or(e) {
                var t = e.creditAmount,
                    n = e.creditDisplayConfig,
                    r = e.creditError,
                    a = e.currencyCode,
                    o = e.isEligibleForVng,
                    i = e.robuxAmount,
                    c = e.robuxError,
                    u = e.openConvertCreditModal,
                    l = e.onBuyGiftCardClick,
                    s = e.onBuyRobuxExternalClick,
                    d = e.showRobuxBadge,
                    m = e.translate,
                    f = Er((0, P.useState)(!0), 2),
                    p = f[0],
                    v = f[1],
                    b = Er((0, P.useState)(!1), 2),
                    e = b[0],
                    g = b[1],
                    f = Er((0, P.useState)(!1), 2),
                    b = f[0],
                    h = f[1],
                    c = c ? y : _.numberFormat.getNumberFormat(i);
                return (0, P.useEffect)(function() {
                    i < S.robuxTruncateThreshold && t < S.creditTruncateThreshold && n !== F.hideCreditAndRobux && v(!1)
                }, [i, t, n]), (0, P.useEffect)(function() {
                    window.dispatchEvent(new CustomEvent("price-tag:render", {
                        detail: {
                            targetSelector: ".dropdown-credit-balance"
                        }
                    }))
                }, [n]), (0, P.useEffect)(function() {
                    0 === t ? g(!1) : Nr.has(t) ? g(Nr.get(t)) : be().then(function(e) {
                        0 < e.data.robuxConversionAmount ? (Nr.set(t, !0), g(!0)) : (Nr.set(t, !1), g(!1))
                    })
                }, [t]), (0, P.useEffect)(function() {
                    Rr.has(Ar.cacheKey) ? h(Rr.get(Ar.cacheKey)) : ge().then(function(e) {
                        e = e.data;
                        h(e.displayBuyGiftCardOption), Rr.set(Ar.cacheKey, e.displayBuyGiftCardOption)
                    })
                }, []), L().createElement(P.Fragment, null, L().createElement("div", {
                    className: p ? "" : "wallet-hidden"
                }, L().createElement("li", {
                    className: "dropdown-wallet"
                }, L().createElement(N.Link, {
                    className: "dropdown-wallet-section"
                }, L().createElement("span", {
                    className: "icon-robux-28x28",
                    id: "nav-robux"
                }), L().createElement("span", {
                    id: "nav-robux-balance"
                }, c))), n !== F.control && L().createElement("li", {
                    className: "dropdown-wallet"
                }, L().createElement(N.Link, {
                    className: "dropdown-wallet-section"
                }, L().createElement("span", {
                    className: "icon-menu-wallet"
                }), r ? y : L().createElement("span", {
                    className: "dropdown-credit-balance",
                    "data-amount": t,
                    "data-currency-code": a
                }))), L().createElement("li", {
                    className: "rbx-divider"
                })), o ? L().createElement("li", null, L().createElement("button", {
                    type: "button",
                    cssClasses: "rbx-menu-item",
                    onClick: s
                }, m(Cr.buyRobux.label))) : L().createElement("li", {
                    className: "rbx-menu-item-container"
                }, L().createElement(N.Link, {
                    cssClasses: "rbx-menu-item buy-robux-button",
                    url: Cr.buyRobux.url,
                    onClick: function() {
                        var e;
                        e = Se.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.BUY_ROBUX, Se.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(Se.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT.WEB_ROBUX_PURCHASE, !1, Se.paymentFlowAnalyticsService.ENUM_VIEW_NAME.NAVIGATION_DROPDOWN_MENU, Se.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT, e), d && (e = Math.floor(Date.now() / 1e3), Se.localStorageService.setLocalStorage("prevLocalVirtualItemStartTimeSeconds".concat(j.CurrentUser.userId), e))
                    }
                }, L().createElement("span", {
                    className: "buy-robux-link-container"
                }, m(Cr.buyRobux.label), d && L().createElement("div", {
                    className: "new-item-pill small"
                }, L().createElement("span", {
                    className: "new-item-pill-text"
                }, m("Labels.NewItem")))))), b && L().createElement("li", null, L().createElement("button", {
                    type: "button",
                    cssClasses: "rbx-menu-item",
                    onClick: l
                }, m(Ar.label) || "Buy Gift Card")), L().createElement("li", null, L().createElement(N.Link, {
                    cssClasses: "rbx-menu-item",
                    url: Cr.myTransactions.url
                }, m(Cr.myTransactions.label))), L().createElement("li", null, L().createElement(N.Link, {
                    cssClasses: "rbx-menu-item",
                    url: xr.url
                }, m(xr.label))), n !== F.control && e && L().createElement("li", null, L().createElement(N.Link, {
                    cssClasses: "rbx-menu-item",
                    onClick: u
                }, m("Label.ConvertCreditSuccess"))))
            }
            Or.defaultProps = {
                isEligibleForVng: !1,
                robuxAmount: 0,
                robuxError: "",
                creditAmount: 0,
                currencyCode: "",
                creditError: "",
                showRobuxBadge: !1
            }, Or.propTypes = {
                isEligibleForVng: m().bool,
                translate: m().func.isRequired,
                robuxAmount: m().number,
                robuxError: m().string,
                creditAmount: m().number,
                currencyCode: m().string,
                creditError: m().string,
                showRobuxBadge: m().bool,
                creditDisplayConfig: m().string.isRequired,
                openConvertCreditModal: m().func.isRequired,
                onBuyGiftCardClick: m().func.isRequired,
                onBuyRobuxExternalClick: m().func.isRequired
            };
            var Tr = Or;

            function Ir(e) {
                var t = e.creditAmount,
                    n = e.currencyCode,
                    e = e.creditError,
                    e = L().createElement(P.Fragment, null, L().createElement("span", {
                        className: "icon-menu-wallet roblox-popover-close",
                        id: "nav-credit-icon"
                    }), L().createElement("span", {
                        className: "rbx-text-navbar-right text-header",
                        id: "nav-robux-amount"
                    }, e ? L().createElement("div", {
                        className: "nav-credit-text"
                    }, y) : L().createElement("div", {
                        className: "credit-balance",
                        "data-amount": t,
                        "data-currency-code": n
                    })));
                return (0, P.useEffect)(function() {
                    window.dispatchEvent(new CustomEvent("price-tag:render", {
                        detail: {
                            targetSelector: ".credit-balance",
                            tagClassName: "navbar-compact nav-credit-text"
                        }
                    }))
                }, [t, n]), L().createElement(P.Fragment, null, L().createElement("span", {
                    id: "nav-robux-icon",
                    className: "nav-robux-icon rbx-menu-item nav-credit"
                }, e))
            }
            Ir.defaultProps = {
                creditAmount: 0,
                creditError: "",
                currencyCode: "USD"
            }, Ir.propTypes = {
                creditAmount: m().number,
                creditError: m().string,
                currencyCode: m().string
            };
            var kr = Ir;

            function Ur(e) {
                var t = e.translate,
                    n = e.isShopModalOpen,
                    r = e.closeShopModal,
                    a = e.onModalContinue,
                    e = L().createElement(L().Fragment, null, L().createElement("p", {
                        className: "shop-description"
                    }, t("Description.RetailWebsiteRedirect")), L().createElement("p", {
                        className: "shop-warning"
                    }, t("Description.PurchaseAgeWarning")));
                return L().createElement(N.SimpleModal, {
                    title: t("Heading.LeavingRoblox"),
                    body: e,
                    show: n,
                    actionButtonShow: !0,
                    actionButtonText: t("Action.Continue"),
                    neutralButtonText: t("Action.Cancel"),
                    onAction: a,
                    onNeutral: r,
                    onClose: r
                })
            }
            Ur.propTypes = {
                translate: m().func.isRequired,
                isShopModalOpen: m().bool.isRequired,
                closeShopModal: m().func.isRequired,
                onModalContinue: m().func.isRequired
            };
            var Pr = (0, D.withTranslations)(Ur, s);

            function Lr(e) {
                var t = e.translate,
                    n = e.isOpen,
                    r = e.onClose,
                    a = e.onContinue,
                    e = L().createElement(L().Fragment, null, L().createElement("p", {
                        className: "modal-body"
                    }, t("Description.RedirectToPartnerWebsite") || "This purchase must be completed on our partner’s website. You will be returned to Roblox after the purchase is completed.\n\nProceed to partner website for payment?"));
                return L().createElement(N.SimpleModal, {
                    title: t("Heading.LeaveRoblox") || "Leaving Roblox",
                    body: e,
                    show: n,
                    actionButtonShow: !0,
                    actionButtonText: t("Action.ContinueToPayment") || "Continue to Payment",
                    neutralButtonText: t("Action.Cancel") || "Cancel",
                    onAction: a,
                    onNeutral: r,
                    onClose: r
                })
            }
            Lr.propTypes = {
                translate: m().func.isRequired,
                isOpen: m().bool.isRequired,
                onClose: m().func.isRequired,
                onContinue: m().func.isRequired
            };
            var _r = (0, D.withTranslations)(Lr, s);

            function jr(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Mr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Mr(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Mr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Dr(e) {
                function t(e) {
                    Se.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(b.WEB_ROBUX_PURCHASE, !1, g.NAVIGATION_DROPDOWN_MENU, y.USER_INPUT, e)
                }
                var n = e.creditAmount,
                    r = e.creditDisplayConfig,
                    a = e.creditError,
                    o = e.currencyCode,
                    i = e.isEligibleForVng,
                    c = e.isExperimentCallDone,
                    u = e.isGetCurrencyCallDone,
                    l = e.openConvertCreditModal,
                    s = e.showRobuxBadge,
                    d = e.robuxAmount,
                    m = e.robuxError,
                    f = e.translate,
                    p = V.buyGiftCardUrl,
                    v = V.buyRobuxUrl.buyRobuxOnVng,
                    b = Se.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT,
                    g = Se.paymentFlowAnalyticsService.ENUM_VIEW_NAME,
                    h = Se.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE,
                    y = Se.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE,
                    S = (0, P.useRef)(),
                    E = jr((0, P.useState)(!1), 2),
                    w = E[0],
                    C = E[1],
                    e = jr((0, P.useState)(!1), 2),
                    E = e[0],
                    x = e[1];
                return L().createElement("li", {
                    id: "navbar-robux",
                    ref: S,
                    className: A()("navbar-icon-item", {
                        "robux-popover-margins": r === F.hideCreditAndRobux
                    })
                }, L().createElement(Pr, {
                    isShopModalOpen: w,
                    closeShopModal: function() {
                        C(!1)
                    },
                    onModalContinue: function() {
                        t(h.CONTINUE_TO_CASHSTAR);
                        var e = decodeURIComponent(p.url);
                        window.open(e, "_blank")
                    }
                }), i && L().createElement(_r, {
                    isOpen: E,
                    onClose: function() {
                        x(!1)
                    },
                    onContinue: function() {
                        t(h.CONTINUE_TO_VNG), he().then(function(e) {
                            e = e.data.vngShopRedirectUrl;
                            window.open(e || v.url, "_blank").focus()
                        }, function() {
                            window.open(v.url, "_blank").focus()
                        }), x(!1)
                    }
                }), c && L().createElement(N.Popover, {
                    id: "buy-robux-popover",
                    trigger: "click",
                    placement: "bottom",
                    button: L().createElement("button", {
                        type: "button",
                        className: "btn-navigation-nav-robux-md"
                    }, L().createElement(Sr, {
                        robuxAmount: d,
                        isGetCurrencyCallDone: u,
                        robuxError: m,
                        creditDisplayConfig: r,
                        showRobuxBadge: s
                    }), r === F.showCreditAndRobux && L().createElement(kr, {
                        creditAmount: n,
                        currencyCode: o,
                        creditError: a
                    })),
                    role: "menu",
                    container: S.current
                }, L().createElement("div", {
                    className: Ve()
                }, L().createElement("ul", {
                    id: "buy-robux-popover-menu",
                    className: "dropdown-menu"
                }, L().createElement(Tr, {
                    isEligibleForVng: i,
                    translate: f,
                    robuxAmount: d,
                    robuxError: m,
                    creditAmount: n,
                    currencyCode: o,
                    creditError: a,
                    creditDisplayConfig: r,
                    openConvertCreditModal: l,
                    onBuyGiftCardClick: function() {
                        t(h.BUY_GIFT_CARD), C(!0)
                    },
                    onBuyRobuxExternalClick: function() {
                        t(h.EXTERNAL_LINK_MODAL), x(!0)
                    },
                    showRobuxBadge: s
                })))))
            }
            Dr.defaultProps = {
                robuxAmount: 0,
                robuxError: "",
                creditAmount: 0,
                creditError: "",
                currencyCode: "USD",
                creditDisplayConfig: F.control,
                isExperimentCallDone: !1,
                isEligibleForVng: !1,
                showRobuxBadge: !1
            }, Dr.propTypes = {
                translate: m().func.isRequired,
                robuxAmount: m().number,
                robuxError: m().string,
                isGetCurrencyCallDone: m().bool.isRequired,
                creditAmount: m().number,
                currencyCode: m().string,
                creditError: m().string,
                creditDisplayConfig: m().string,
                isExperimentCallDone: m().bool,
                openConvertCreditModal: m().func.isRequired,
                isEligibleForVng: m().bool,
                showRobuxBadge: m().bool
            };
            var Br = Dr;

            function qr(e) {
                e = e.toggleUniverseSearch;
                return L().createElement("li", {
                    className: "rbx-navbar-right-search"
                }, L().createElement("button", {
                    type: "button",
                    className: "rbx-menu-item btn-navigation-nav-search-white-md",
                    onClick: e
                }, L().createElement("span", {
                    className: "icon-nav-search-white"
                })))
            }
            qr.propTypes = {
                toggleUniverseSearch: m().func.isRequired
            };
            var Fr = qr;

            function Gr() {
                var t = (0, P.useRef)(null),
                    e = M.authenticatedUser.isUnder13,
                    n = (0, v.currentUserHasVerifiedBadge)() && v.VerifiedBadgeIconContainer ? L().createElement("section", {
                        ref: function(e) {
                            t.current = e
                        }
                    }, L().createElement(v.VerifiedBadgeIconContainer, {
                        overrideImgClass: "verified-badge-icon-header",
                        size: v.BadgeSizes.CAPTIONHEADER
                    })) : null;
                return L().createElement("div", {
                    className: "age-bracket-label text-header"
                }, L().createElement(N.Link, {
                    className: "text-link dynamic-overflow-container",
                    url: V.scrollListItems.profile.url
                }, L().createElement("span", {
                    className: "avatar avatar-headshot-xs"
                }, L().createElement(p.Thumbnail2d, {
                    containerClass: "avatar-card-image",
                    targetId: M.authenticatedUser.id,
                    type: p.ThumbnailTypes.avatarHeadshot,
                    altName: M.authenticatedUser.name
                })), L().createElement("span", {
                    className: "text-overflow age-bracket-label-username font-caption-header"
                }, ft.nameForDisplay), n), L().createElement("span", {
                    className: "xsmall age-bracket-label-age text-secondary"
                }, e ? "<13" : "13+"))
            }

            function Vr() {
                return wa(void 0, void 0, Promise, function() {
                    var t;
                    return Ca(this, function(e) {
                        return t = {
                            withCredentials: !0,
                            url: j.EnvironmentUrls.apiGatewayUrl + "/credit-balance/v1/get-next-purchasable-metadata"
                        }, [2, _.httpService.get(t)]
                    })
                })
            }

            function Kr(r) {
                return wa(void 0, void 0, Promise, function() {
                    var t, n;
                    return Ca(this, function(e) {
                        return t = {
                            paymentProviderType: "Credit",
                            providerPayload: {
                                product_id: 0 === r || null == r ? void 0 : r
                            }
                        }, n = {
                            withCredentials: !0,
                            url: j.EnvironmentUrls.apiGatewayUrl + "/payments-gateway/v1/process-payment"
                        }, [2, _.httpService.post(n, t)]
                    })
                })
            }
            var Hr = window.EventTracker ? EventTracker : {
                    fireEvent: console.log,
                    start: console.log,
                    endSuccess: console.log,
                    endCancel: console.log,
                    endFailure: console.log
                },
                Wr = "Label.AvailableCreditWithColon",
                Qr = "Label.BalanceDue",
                zr = "Label.CreditAfterTransaction",
                Xr = "Action.Buy",
                $r = "Action.Cancel",
                Yr = "Action.ConvertToRobux",
                Jr = "Label.ConvertCreditSuccess",
                Zr = "Heading.BuyRobuxWithCredit",
                ea = "Message.Step1LargestAvailablePackageYouCanBuy",
                ta = "Message.Step2NextLargestPackage",
                na = "Message.Step3ConvertRobux",
                ra = "Message.ConvertCreditToRobux",
                aa = "Alert.RobuxPackagePurchased",
                oa = "Alert.RobuxPackagePurchaseFailed",
                ia = "Alert.SuccessfullyConvertedCreditToRobux",
                ca = "Heading.CreditConversionFail",
                ua = "Alert.GenericFailure",
                la = "NewCreditConversionGetNextPurchasableFailedStatusCode",
                sa = "NewCreditConversionGetNextPurchasableCreditBalanceZero",
                da = "NewCreditConversionGetNextPurchasableUnexpectedException",
                ma = "NewCreditConversionGetNextPurchasableConversion",
                fa = "NewCreditConversionGetNextPurchasableProductPurchase",
                pa = "ProcessPaymentRequestFailedStatusCode",
                va = "ProcessPaymentNextStep",
                ba = "ProcessPaymentNotSuccessful",
                ga = "ProcessPaymentNotSuccessful",
                ha = "ProcessPaymentUnexpectedException",
                ya = "ConversionCancelClicked",
                Sa = "ProductPurchaseCancelClicked",
                Ea = {
                    common: ["CommonUI.Controls", "CommonUI.Features"],
                    feature: "Purchasing.RedeemGameCard"
                },
                wa = function(e, i, c, u) {
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
                Ca = function(n, r) {
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
                xa = "ar-",
                Aa = "en-",
                Na = ["JPY"],
                Ra = {
                    PRICE_DATA_NOT_VALID: (l = "PriceTag") + "DataNotValid",
                    NUMBER_FORMAT_LOCALE_EXCEPTION: l + "NumberFormatLocaleException",
                    ARABIC_LOCALE_TRIGGERED: l + "ArabicLocale"
                };

            function Oa(e) {
                var t = e.amount,
                    n = e.currencyCode,
                    r = e.tagClassName,
                    e = t < 0,
                    a = Math.abs(t),
                    o = "" + a + n,
                    i = A()("price-tag", r);
                try {
                    var c = (u = Intl.NumberFormat().resolvedOptions().locale).startsWith(xa) ? ((0, Hr.fireEvent)(Ra.ARABIC_LOCALE_TRIGGERED), u.replace(xa, Aa)) : u,
                        u = {
                            style: "currency",
                            currency: n,
                            notation: "standard"
                        };
                    1e4 <= a && !Na.includes(n) && (u.minimumFractionDigits = 0, u.maximumFractionDigits = 2, u.maximumSignificantDigits = 21, u.notation = "compact"), i.split(" ").includes("navbar-compact") && (u.maximumSignificantDigits = 4), o = Intl.NumberFormat(c, u).format(a)
                } catch (e) {
                    (0, Hr.fireEvent)(Ra.NUMBER_FORMAT_LOCALE_EXCEPTION)
                }
                return L().createElement("div", {
                    className: "d-flex-inline gap-1 justify-content-start align-items-center"
                }, e && L().createElement("span", {
                    className: i
                }, "-"), L().createElement("span", {
                    className: i
                }, o))
            }
            Oa.propTypes = {
                amount: m().number.isRequired,
                currencyCode: m().string.isRequired
            };
            var Ta, Ia, ka = Oa,
                Ua = function(e, i, c, u) {
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
                Pa = function(n, r) {
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
                La = (l = ($ = (0, N.createModal)(), Ta = $[0], [function(e) {
                    var t = e.availableBalance,
                        n = e.totalBalanceDue,
                        r = e.currencyCode,
                        a = e.numberOfPurchase,
                        o = e.robuxAmountInPackage,
                        i = e.loading,
                        c = e.onNeutral,
                        u = e.onPurchase,
                        e = e.translate;
                    return L().createElement(Ta, {
                        id: "purchase-product-modal",
                        title: e(Zr),
                        body: L().createElement("div", {
                            className: "d-flex justify-content-center flex-direction-column text-center"
                        }, L().createElement("div", {
                            className: "purchase-prompt"
                        }, 1 === a ? e(ea) || "Largest package you can buy with your available credit:" : e(ta)), L().createElement("div", {
                            className: "purchase-logo"
                        }, L().createElement("div", {
                            className: A()("robux-product-logo", "margin-auto", "robux-graphic", "robux-" + o)
                        }), L().createElement("div", null, L().createElement("span", {
                            className: "icon-robux-16x16"
                        }), L().createElement("span", {
                            className: "text-robux"
                        }, o))), L().createElement("div", {
                            className: "purchase-summary d-flex flex-direction-column text-left"
                        }, L().createElement("div", {
                            className: "available-credit d-flex justify-content-between"
                        }, L().createElement("span", null, e(Wr)), L().createElement(ka, {
                            amount: t,
                            currencyCode: r
                        })), L().createElement("div", {
                            className: "balance-due d-flex justify-content-between"
                        }, L().createElement("span", null, e(Qr)), L().createElement(ka, {
                            amount: -1 * n,
                            currencyCode: r
                        })), L().createElement("div", {
                            className: "rbx-divider"
                        }), L().createElement("div", {
                            className: "credit-after-transaction d-flex justify-content-between"
                        }, L().createElement("span", null, e(zr)), L().createElement(ka, {
                            amount: t - n,
                            currencyCode: r
                        })))),
                        neutralButtonText: e($r),
                        actionButtonText: e(Xr),
                        onNeutral: c,
                        onAction: u,
                        loading: i,
                        actionButtonShow: !0
                    })
                }, $[1]]))[0],
                _a = l[1],
                ja = (l = ($ = (0, N.createModal)(), Ia = $[0], [function(e) {
                    var t = e.remainingCreditBalance,
                        n = e.currencyCode,
                        r = e.robuxConversionAmount,
                        a = e.loading,
                        o = e.numberOfPurchase,
                        i = e.onConvert,
                        c = e.onNeutral,
                        e = e.translate,
                        r = L().createElement("div", {
                            className: "text-center conversion-message",
                            dangerouslySetInnerHTML: {
                                __html: 1 === o ? e(ra, {
                                    robuxAmount: '<br /><span class="icon-robux-16x16"></span>' + r
                                }) : e(na, {
                                    remainingCreditBalance: "<span class='fiat-price-tag ml-1' data-amount=" + t + " data-currency-code=" + n + "></span>",
                                    lineBreaker: "<br />",
                                    robuxConversionAmount: '<span class="icon-robux-16x16"></span>' + r
                                })
                            },
                            ref: function() {
                                window.dispatchEvent(new CustomEvent("price-tag:render", {
                                    detail: {
                                        targetSelector: ".fiat-price-tag"
                                    }
                                }))
                            }
                        });
                    return L().createElement(Ia, {
                        id: "convert-credit-modal",
                        title: e(Jr),
                        body: r,
                        neutralButtonText: e($r),
                        actionButtonText: e(Yr),
                        onNeutral: c,
                        onAction: i,
                        loading: a,
                        actionButtonShow: !0
                    })
                }, $[1]]))[0],
                Ma = l[1],
                Da = function(e) {
                    function a() {
                        d.warning(m(ua) || "Something went wrong! Please try again later."), _a.close(), Ma.close(), window.location.href = _.urlService.getAbsoluteUrl("/upgrades/robux")
                    }

                    function o(e, t) {
                        t = 0 === t || null == t, e ? d.success(m(t ? ia : aa)) : d.warning(m(t ? ca : oa) || m(ua) || "Something went wrong! Please try again later.")
                    }

                    function i() {
                        return Ua(t, void 0, void 0, function() {
                            var t;
                            return Pa(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        w(!0), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, 4, 5]), [4, Vr()];
                                    case 2:
                                        return 200 !== (t = e.sent()).status ? (d.warning(m(ua) || "Something went wrong! Please try again later."), w(!1), (0, Hr.fireEvent)(la), (0, Hr.fireEvent)("" + la + t.status), [2]) : 0 === (t = t.data).creditBalance || 0 === t.productId && 0 === t.robuxConversionAmount ? (w(!1), Ma.close(), _a.close(), r(t.creditBalance), (0, Hr.fireEvent)(sa), [2]) : (r(t.creditBalance), u(t.currencyCode), s(t.robuxConversionAmount), p(t.productId), h(t.balanceDue), S(t.robuxAmountProductGrant), 0 === t.productId ? (Ma.open(), _a.close(), (0, Hr.fireEvent)(ma)) : (_a.open(), (0, Hr.fireEvent)(fa)), [3, 5]);
                                    case 3:
                                        return e.sent(), a(), (0, Hr.fireEvent)(da), [3, 5];
                                    case 4:
                                        return w(!1), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }
                    var t = this,
                        n = e.creditBalance,
                        r = e.setCreditBalance,
                        c = e.currencyCode,
                        u = e.setCurrencyCode,
                        l = e.convertedRobuxAmount,
                        s = e.setConvertedRobuxAmount,
                        d = e.systemFeedbackService,
                        m = e.translate,
                        f = (e = (0, P.useState)(0))[0],
                        p = e[1],
                        v = (e = (0, P.useState)(0))[0],
                        b = e[1],
                        g = (e = (0, P.useState)(0))[0],
                        h = e[1],
                        y = (e = (0, P.useState)(0))[0],
                        S = e[1],
                        E = (e = (0, P.useState)(!1))[0],
                        w = e[1],
                        C = function() {
                            return Ua(t, void 0, void 0, function() {
                                var t, n, r;
                                return Pa(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            w(!0), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 6, 7, 8]), [4, Kr(f)];
                                        case 2:
                                            return 200 !== (t = e.sent()).status ? (o(!1, f), w(!1), (0, Hr.fireEvent)(pa), (0, Hr.fireEvent)("" + pa + t.status), [2]) : (n = t.data, o(n.isSuccess, f), n.isSuccess && null !== (r = n.providerPayload) && void 0 !== r && r.IsSuccessful ? [4, i()] : [3, 4]);
                                        case 3:
                                            return e.sent(), b(v + 1), (0, Hr.fireEvent)(va), [3, 5];
                                        case 4:
                                            _a.close(), Ma.close(), (0, Hr.fireEvent)(ba), e.label = 5;
                                        case 5:
                                            return (0, Hr.fireEvent)(ga + n.providerPayload.ResponseMessage), [3, 8];
                                        case 6:
                                            return e.sent(), a(), (0, Hr.fireEvent)(ha), [3, 8];
                                        case 7:
                                            return w(!1), [7];
                                        case 8:
                                            return [2]
                                    }
                                })
                            })
                        };
                    return [(0, D.withTranslations)(function() {
                        function e() {
                            0 === f ? (Ma.close(), (0, Hr.fireEvent)(ya)) : (_a.close(), (0, Hr.fireEvent)(Sa))
                        }
                        return L().createElement(P.Fragment, null, L().createElement(La, {
                            availableBalance: n,
                            totalBalanceDue: g,
                            currencyCode: c,
                            numberOfPurchase: v,
                            robuxAmountInPackage: y,
                            onPurchase: function() {
                                C()
                            },
                            onNeutral: e,
                            loading: E,
                            translate: m
                        }), L().createElement(ja, {
                            remainingCreditBalance: n,
                            currencyCode: c,
                            robuxConversionAmount: l,
                            numberOfPurchase: v,
                            onConvert: function() {
                                C()
                            },
                            onNeutral: e,
                            loading: E,
                            translate: m
                        }))
                    }, Ea), function() {
                        b(0), i(), b(1)
                    }]
                };

            function Ba(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return qa(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qa(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function qa(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Fa = _e,
                Ga = (_e = Ba((0, N.createSystemFeedback)(), 2))[0],
                Va = _e[1];

            function Ka(e) {
                function t() {
                    a && (d(!1), se(o).then(function(e) {
                        e = e.data;
                        p(e.robux)
                    }, function() {
                        A(n(q))
                    }).finally(function() {
                        d(!0)
                    }))
                }
                var n = e.translate,
                    r = e.toggleUniverseSearch,
                    a = M.authenticatedUser.isAuthenticated,
                    o = M.authenticatedUser.id,
                    i = Ba((0, P.useState)(0), 2),
                    c = i[0],
                    u = i[1],
                    l = Ba((0, P.useState)(!1), 2),
                    s = l[0],
                    d = l[1],
                    m = Ba((0, P.useState)(0), 2),
                    f = m[0],
                    p = m[1],
                    v = Ba((0, P.useState)(!1), 2),
                    b = v[0],
                    g = v[1],
                    h = Ba((0, P.useState)(!0), 2),
                    y = h[0],
                    S = h[1],
                    E = Ba((0, P.useState)(!1), 2),
                    w = E[0],
                    C = E[1],
                    x = Ba((0, P.useState)(""), 2),
                    e = x[0],
                    A = x[1],
                    i = Ba((0, P.useState)(F.control), 2),
                    l = i[0],
                    N = i[1],
                    m = Ba((0, P.useState)(null), 2),
                    v = m[0],
                    R = m[1],
                    h = Ba((0, P.useState)(null), 2),
                    E = h[0],
                    O = h[1],
                    x = Ba((0, P.useState)(""), 2),
                    i = x[0],
                    T = x[1],
                    m = Ba((0, P.useState)(!1), 2),
                    h = m[0],
                    I = m[1],
                    x = Ba((0, P.useState)(0), 2),
                    m = x[0],
                    x = x[1],
                    m = Ba(Da({
                        creditBalance: v,
                        setCreditBalance: R,
                        currencyCode: E,
                        setCurrencyCode: O,
                        convertedRobuxAmount: m,
                        setConvertedRobuxAmount: x,
                        systemFeedbackService: Va,
                        translate: n
                    }), 2),
                    x = m[0],
                    k = m[1];
                (0, P.useEffect)(function() {
                    window.addEventListener("navigation-update-user-currency", function(e) {
                        t()
                    })
                }, []), (0, P.useEffect)(function() {
                    if (a) {
                        Fa().then(u), t(), a && de().then(function(e) {
                            e = e.data;
                            g(e.shouldShowVng), S(e.notificationsCanAccessStream)
                        }, function() {
                            A(n(q))
                        }), a && ye().then(function(e) {
                            e = e.data;
                            e.is_virtual_item_available && (Se.localStorageService.getLocalStorage("prevLocalVirtualItemStartTimeSeconds".concat(j.CurrentUser.userId)) || -1) < e.active_virtual_item_start_time_seconds_utc && C(!0)
                        }), ve().then(function(e) {
                            var t = e.data;
                            null === t.creditDisplayConfig || null === t.creditBalance || null === t.currencyCode ? N(F.control) : N(null !== (e = t.creditDisplayConfig) && void 0 !== e ? e : F.control), R(t.creditBalance), O(t.currencyCode)
                        }, function() {
                            T(n(q))
                        }).finally(function() {
                            I(!0)
                        });
                        try {
                            Se.localStorageService.getLocalStorage(G.accountSwitchedFlag) && (Va.success(n(G.accountSwitchedMessage, {
                                accountName: M.authenticatedUser.name
                            }), 0, 5e3), Se.localStorageService.removeLocalStorage(G.accountSwitchedFlag))
                        } catch (e) {}
                    }
                }, [a, o]);
                var U = L().createElement("li", {
                    id: "navbar-stream",
                    className: "navbar-icon-item navbar-stream"
                }, L().createElement("span", {
                    className: "nav-robux-icon rbx-menu-item"
                }, L().createElement("span", {
                    id: "notification-stream-icon-container",
                    "notification-stream-indicator": "true"
                })));
                try {
                    Cn().module("notificationStreamIcon"), Cn().module("notificationStream"), U = L().createElement(Dn, null)
                } catch (e) {
                    console.log(e)
                }
                return L().createElement("ul", {
                    className: "nav navbar-right rbx-navbar-icon-group"
                }, L().createElement(Ga, null), L().createElement(Gr, null), L().createElement(Fr, {
                    translate: n,
                    toggleUniverseSearch: r
                }), y && U, L().createElement(Br, {
                    translate: n,
                    robuxAmount: f,
                    robuxError: e,
                    creditAmount: v,
                    currencyCode: E,
                    creditError: i,
                    creditDisplayConfig: l,
                    isEligibleForVng: b,
                    isExperimentCallDone: h,
                    isGetCurrencyCallDone: s,
                    openConvertCreditModal: function() {
                        k()
                    },
                    showRobuxBadge: w
                }), L().createElement(hr, {
                    translate: n,
                    accountNotificationCount: c
                }), L().createElement(x, null))
            }
            Ka.defaultProps = {
                accountNotificationCount: 0
            }, Ka.propTypes = {
                translate: m().func.isRequired,
                accountNotificationCount: m().number,
                toggleUniverseSearch: m().func.isRequired
            };
            var Ha = (0, D.withTranslations)(Ka, {
                common: ["CommonUI.Features", "Common.AlertsAndOptions"],
                feature: "Purchasing.RedeemGameCard"
            });

            function Wa(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i),
                        u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, a)
            }

            function Qa(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return za(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return za(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function za(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Xa = r.getSignupUrl,
                $a = r.getIsVNGLandingRedirectEnabled;

            function Ya(e) {
                var t = e.translate,
                    n = Qa((0, P.useState)(!1), 2),
                    e = n[0],
                    r = n[1],
                    a = Qa(null !== (n = null === j.AccountSwitcherService || void 0 === j.AccountSwitcherService ? void 0 : j.AccountSwitcherService.useIsAccountSwitcherAvailableForBrowser()) && void 0 !== n ? n : [!1], 1)[0];
                return (0, P.useEffect)(function() {
                    try {
                        (0, Se.dataStores.authIntentDataStore.saveGameIntentFromCurrentUrl)()
                    } catch (e) {
                        console.error("Failed to save game intent from current url", e)
                    }
                }, []), (0, P.useEffect)(function() {
                    (function() {
                        var c, e = (c = regeneratorRuntime.mark(function e() {
                            var t;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, $a();
                                    case 3:
                                        t = e.sent, r(!t), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), r(!0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 7]
                            ])
                        }), function() {
                            var e = this,
                                i = arguments;
                            return new Promise(function(t, n) {
                                var r = c.apply(e, i);

                                function a(e) {
                                    Wa(r, t, n, a, o, "next", e)
                                }

                                function o(e) {
                                    Wa(r, t, n, a, o, "throw", e)
                                }
                                a(void 0)
                            })
                        });
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()()
                }, []), e && L().createElement("li", {
                    className: "signup-button-container"
                }, L().createElement(N.Link, {
                    onClick: function() {
                        window.location.href = Xa(a)
                    },
                    url: Xa(a),
                    id: "sign-up-button",
                    className: "rbx-navbar-signup btn-growth-sm nav-menu-title signup-button"
                }, t("Label.sSignUp")))
            }

            function Ja() {
                window.location.href = to()
            }
            Ya.propTypes = {
                translate: m().func.isRequired
            };
            var Za = Ya,
                eo = r.isLoginLinkAvailable,
                to = r.getLoginLinkUrl;

            function no(e) {
                e = e.translate;
                return L().createElement("li", {
                    className: "login-action"
                }, eo() && L().createElement(N.Link, {
                    onClick: Ja,
                    url: to(),
                    className: "rbx-navbar-login btn-secondary-sm nav-menu-title rbx-menu-item"
                }, e("Label.sLogin")))
            }
            no.propTypes = {
                translate: m().func.isRequired
            };
            var ro = no;

            function ao() {
                return (ao = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n, r = arguments[t];
                        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function oo(e, t) {
                if (null == e) return {};
                var n, r = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols)
                    for (var a = Object.getOwnPropertySymbols(e), o = 0; o < a.length; o++) n = a[o], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }

            function io(e) {
                var t = e.translate,
                    n = e.toggleUniverseSearch,
                    e = oo(e, ["translate", "toggleUniverseSearch"]);
                return M.authenticatedUser.isAuthenticated ? L().createElement("div", {
                    className: "navbar-right rbx-navbar-right"
                }, L().createElement(Ha, ao({
                    translate: t,
                    toggleUniverseSearch: n
                }, e))) : L().createElement("div", {
                    className: "navbar-right rbx-navbar-right"
                }, L().createElement("ul", {
                    className: "nav navbar-right rbx-navbar-right-nav"
                }, L().createElement(Za, {
                    translate: t
                }), L().createElement(ro, {
                    translate: t
                }), L().createElement(Fr, {
                    translate: t,
                    toggleUniverseSearch: n
                })))
            }
            io.propTypes = {
                translate: m().func.isRequired,
                toggleUniverseSearch: m().func.isRequired
            };
            var co = io;

            function uo() {
                return (uo = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n, r = arguments[t];
                        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function lo(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return so(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return so(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function so(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var mo = (0, D.withTranslations)(function(e) {
                var t = Be(),
                    n = lo((0, P.useState)(t), 2),
                    r = n[0],
                    a = n[1],
                    t = (n = lo((0, P.useState)(!t), 2))[0],
                    o = n[1],
                    i = (0, P.useCallback)(function() {
                        var e = Be();
                        r !== e && (a(e), o(!e))
                    }, [r]);
                return (0, P.useEffect)(function() {
                    return window.addEventListener("resize", i),
                        function() {
                            window.removeEventListener("resize", i)
                        }
                }, [i]), L().createElement(L().Fragment, null, L().createElement(wn, uo({
                    isUniverseSearchShown: t
                }, e)), L().createElement(co, uo({
                    toggleUniverseSearch: function() {
                        o(function(e) {
                            return !e
                        })
                    }
                }, e)))
            }, s);

            function fo(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return po(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return po(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function po(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function vo(e) {
                function t(e) {
                    Se.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(c.WEB_ROBUX_PURCHASE, !1, u.NAVIGATION_ROBUX_TEXT, s.USER_INPUT, e)
                }
                var n = e.translate,
                    r = V.buyRobuxUrl,
                    a = r.buyRobux,
                    o = r.buyRobuxOnVng,
                    i = M.authenticatedUser.isAuthenticated,
                    c = Se.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT,
                    u = Se.paymentFlowAnalyticsService.ENUM_VIEW_NAME,
                    l = Se.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE,
                    s = Se.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE,
                    d = fo((0, P.useState)(!1), 2),
                    e = d[0],
                    m = d[1],
                    r = fo((0, P.useState)(!1), 2),
                    d = r[0],
                    f = r[1],
                    p = (0, P.useRef)(new Map);
                (0, P.useEffect)(function() {
                    var t = p.current,
                        n = o.cacheKey;
                    t.has(n) ? m(t.get(n)) : i && de().then(function(e) {
                        e = e.data.shouldShowVng;
                        m(e), t.set(n, e)
                    })
                }, [o, o.cacheKey, i]);
                return L().createElement("div", null, e ? L().createElement(L().Fragment, null, L().createElement(_r, {
                    isOpen: d,
                    onClose: function() {
                        f(!1)
                    },
                    onContinue: function() {
                        t(l.CONTINUE_TO_VNG), he().then(function(e) {
                            e = e.data.vngShopRedirectUrl;
                            window.open(e || o.url, "_blank").focus()
                        }, function() {
                            window.open(o.url, "_blank").focus()
                        }), f(!1)
                    }
                }), L().createElement(N.Link, {
                    cssClasses: "font-header-2 nav-menu-title text-header robux-menu-btn",
                    onClick: function() {
                        t(l.EXTERNAL_LINK_MODAL), f(!0)
                    }
                }, n(a.name))) : L().createElement(N.Link, {
                    cssClasses: "font-header-2 nav-menu-title text-header robux-menu-btn",
                    url: a.url,
                    onClick: function() {
                        return t(l.BUY_ROBUX)
                    }
                }, n(a.name)))
            }
            vo.propTypes = {
                translate: m().func.isRequired
            };
            var bo = (0, D.withTranslations)(vo, s),
                _e = function() {
                    var e = document.getElementById("header-develop-md-link"),
                        t = document.getElementById("header-develop-sm-link");
                    null !== e && (e.href = "https://create.".concat(j.EnvironmentUrls.domain, "/")), null !== t && (t.href = "https://create.".concat(j.EnvironmentUrls.domain, "/"))
                },
                go = n;

            function ho(e) {
                var e = e.translate,
                    t = document.getElementById(go);
                return L().createElement(N.Button, {
                    id: "skip-to-main-content",
                    size: N.Button.sizes.extraSmall,
                    variant: N.Button.variants.primary,
                    onClick: function() {
                        return t.focus()
                    }
                }, e("Action.SkipToMainContent") || "Skip to main content")
            }
            ho.propTypes = {
                translate: m().func.isRequired
            };
            var yo = ho,
                So = u,
                Eo = M.authenticatedUser.isAuthenticated;

            function wo(e) {
                var t = N.IconButton.iconTypes;
                return L().createElement(P.Fragment, null, L().createElement(yo, e), Eo && L().createElement(N.IconButton, {
                    className: "menu-button",
                    iconType: t.navigation,
                    iconName: "nav-menu",
                    onClick: function() {
                        document.dispatchEvent(new CustomEvent(So.name))
                    }
                }))
            }
            wo.propTypes = {};
            var Co = (0, D.withTranslations)(wo, s);

            function xo(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function Ao(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? xo(Object(a), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : xo(Object(a)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return r
            }
            ko(26);
            var u = r.logoutAndRedirect,
                s = r.getIsVNGLandingRedirectEnabled,
                r = r.navigateToLoginWithRedirect,
                No = "right-navigation-header",
                Ro = "left-navigation-container",
                Oo = "header-menu-icon",
                To = "navigation-robux-container",
                Io = "navigation-robux-mobile-container";
            t().NavigationService = Ao(Ao({}, t().NavigationService), {}, {
                logoutAndRedirect: u,
                getIsVNGLandingRedirectEnabled: s,
                navigateToLoginWithRedirect: r
            }), _e(), (0, _.ready)(function() {
                document.getElementById(Oo) && (0, e.render)(L().createElement(Co, null), document.getElementById(Oo)), document.getElementById(To) && (0, e.render)(L().createElement(bo, null), document.getElementById(To)), document.getElementById(Io) && (0, e.render)(L().createElement(bo, null), document.getElementById(Io)), document.getElementById(No) && (0, e.render)(L().createElement(mo, null), document.getElementById(No)), document.getElementById(Ro) && (0, e.render)(L().createElement(Nt, null), document.getElementById(Ro))
            })
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/bedb7e3b5eee4b68ac555520f72ca4e0-navigation.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Navigation");