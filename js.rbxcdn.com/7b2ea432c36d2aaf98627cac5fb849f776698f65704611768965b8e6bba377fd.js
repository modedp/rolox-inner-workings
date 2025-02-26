! function() {
    "use strict";
    var a = {
            n: function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return a.d(t, {
                    a: t
                }), t
            },
            d: function(e, t) {
                for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            },
            o: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
        },
        e = jQuery,
        c = a.n(e),
        B = Roblox,
        o = a.n(B);

    function n(e) {
        var t = new(c().Deferred);
        return B.Hybrid.Game.launchGame(e, function() {
            t.resolve(e)
        }), t
    }
    var t, r, i = {
            isJoinAttemptIdEnabled: !1,
            joinMultiplayerGame: function(e) {
                var t = !0 === e.isPlayTogetherGame,
                    t = {
                        requestType: B.Hybrid.Game.LAUNCH_MODES.SIMPLE_GAME,
                        placeId: e.placeId.toString(),
                        isPlayTogetherGame: t,
                        browserTrackerId: B.Cookies.getBrowserTrackerId()
                    };
                return e.joinAttemptId && (t.joinAttemptId = e.joinAttemptId), e.joinAttemptOrigin && (t.joinAttemptOrigin = e.joinAttemptOrigin), n(t)
            },
            followPlayerIntoGame: function(e) {
                var t = {
                    requestType: B.Hybrid.Game.LAUNCH_MODES.FOLLOW_USER,
                    userId: e.userId.toString(),
                    browserTrackerId: B.Cookies.getBrowserTrackerId()
                };
                return e.joinAttemptId && (t.joinAttemptId = e.joinAttemptId), e.joinAttemptOrigin && (t.joinAttemptOrigin = e.joinAttemptOrigin), n(t)
            },
            joinGameInstance: function(e) {
                var t = !0 === e.isPlayTogetherGame,
                    t = {
                        requestType: B.Hybrid.Game.LAUNCH_MODES.GAME_INSTANCE,
                        placeId: e.placeId.toString(),
                        instanceId: e.gameId,
                        isPlayTogetherGame: t,
                        browserTrackerId: B.Cookies.getBrowserTrackerId()
                    };
                return e.joinAttemptId && (t.joinAttemptId = e.joinAttemptId), e.joinAttemptOrigin && (t.joinAttemptOrigin = e.joinAttemptOrigin), n(t)
            },
            joinPrivateGame: function(e) {
                var t = {
                    requestType: B.Hybrid.Game.LAUNCH_MODES.PRIVATE_SERVER,
                    placeId: e.placeId.toString(),
                    accessCode: e.accessCode,
                    browserTrackerId: B.Cookies.getBrowserTrackerId()
                };
                return e.joinAttemptId && (t.joinAttemptId = e.joinAttemptId), e.joinAttemptOrigin && (t.joinAttemptOrigin = e.joinAttemptOrigin), n(t)
            },
            playTogetherGame: function(e) {
                var t = {
                    requestType: B.Hybrid.Game.LAUNCH_MODES.SIMPLE_GAME,
                    placeId: e.placeId.toString(),
                    conversationId: e.conversationId.toString(),
                    browserTrackerId: B.Cookies.getBrowserTrackerId()
                };
                return e.joinAttemptId && (t.joinAttemptId = e.joinAttemptId), e.joinAttemptOrigin && (t.joinAttemptOrigin = e.joinAttemptOrigin), n(t)
            }
        },
        l = {
            modalClassName: "soli-modal",
            loginUrl: "/login?returnurl=",
            signupUrl: "/?returnurl=",
            eventContext: "gameDetails",
            loginField: "gameLaunch_login",
            signupField: "gameLaunch_signup"
        };
    c()(document).ready(function() {
        t = new B.TranslationResourceProvider, r = t.getTranslationResource("Feature.GameLaunchGuestMode")
    });
    var s = {
            restrictGuests: function(e) {
                var t = new(c().Deferred);
                return "True" === c()("#PlaceLauncherStatusPanel").data("is-user-logged-in") ? t.resolve(e) : B.Dialog.open({
                    titleText: r.get("Heading.Dialog.SignUpOrLogin"),
                    bodyContent: r.get("Description.Dialog.SignUpOrLogin"),
                    cssClass: l.modalClassName,
                    acceptColor: B.Dialog.green,
                    acceptText: r.get("Action.Dialog.SignUp"),
                    declineText: r.get("Action.Dialog.Login"),
                    onDecline: function() {
                        B.FormEvents && B.FormEvents.SendInteractionClick(l.eventContext, l.loginField);
                        var e = l.loginUrl + encodeURIComponent(window.location.origin + window.location.pathname + window.location.search);
                        window.location.href = B.Endpoints ? B.Endpoints.getAbsoluteUrl(e) : e
                    },
                    onAccept: function() {
                        var e;
                        e = l.signupField, B.FormEvents && B.FormEvents.SendInteractionClick("gameDetails", e), e = l.signupUrl + encodeURIComponent(window.location.origin + window.location.pathname + window.location.search), window.location.href = B.Endpoints ? B.Endpoints.getAbsoluteUrl(e) : e
                    }
                }), t
            }
        },
        v = CoreUtilities,
        u = {
            bars: [],
            init: function(e, t, n, a) {
                var o = this.get(e);
                null == o && (o = {}), o.barID = e, o.innerBarID = t, o.percentageID = n, void 0 === a && (o.percentComplete = 0), this.bars.push(o), this.update(e, o.percentComplete)
            },
            get: function(e) {
                for (var t = 0; t < this.bars.length; t += 1)
                    if (this.bars[t].barID === e) return this.bars[t];
                return null
            },
            dispose: function(e) {
                for (var t = 0; t < this.bars.length; t += 1) this.bars[t].barID === e && this.bars.splice(t, 1)
            },
            update: function(e, t) {
                var n = this.get(e);
                n && (1 < t && (t = 1), e = c()("#".concat(e)).width(), e = Math.round(e * t), c()("#".concat(n.innerBarID)).animate({
                    width: e
                }, 200, "swing"), n.percentageID && 0 < c()("#".concat(n.percentageID)).length && c()("#".concat(n.percentageID)).html("".concat(Math.round(100 * t), "%")), n.percentComplete = t)
            }
        },
        d = {
            newValue: "",
            showVideoPreRoll: !1,
            videoInitialized: !1,
            videoStarted: !1,
            videoCompleted: !1,
            videoSkipped: !1,
            videoCancelled: !1,
            videoErrored: !1,
            loadingBarMaxTime: 3e4,
            loadingBarCurrentTime: 0,
            loadingBarIntervalID: 0,
            loadingBarID: "videoPrerollLoadingBar",
            loadingBarInnerID: "videoPrerollLoadingBarCompleted",
            loadingBarPercentageID: "videoPrerollLoadingPercent",
            videoDiv: "videoPrerollMainDiv",
            companionAdDiv: "videoPrerollCompanionAd",
            contentElement: "contentElement",
            videoLoadingTimeout: 7e3,
            videoPlayingTimeout: 23e3,
            videoLogNote: "",
            logsEnabled: !1,
            includedPlaceIds: "",
            isSwfPreloaderEnabled: !1,
            isFlashInstalled: !1,
            isPrerollShownEveryXMinutesEnabled: !1,
            isAgeTargetingEnabled: !0,
            isAgeOrSegmentTargetingEnabled: !1,
            adUnit: "",
            adTime: 0,
            placeId: 0,
            customTargeting: {
                userAge: "",
                userAgeOrSegment: "",
                userGender: "",
                gameGenres: "",
                environment: "",
                adTime: "",
                PLVU: !1
            },
            adsManager: null,
            adsLoader: null,
            adDisplayContainer: null,
            intervalTimer: null,
            videoContent: null,
            isCompanionAdRenderedByGoogleTag: !1
        };

    function p() {
        d.adsLoader.contentComplete()
    }

    function m() {
        d.videoContent = document.getElementById(d.contentElement)
    }

    function h() {
        d.adDisplayContainer = new window.google.ima.AdDisplayContainer(document.getElementById(d.videoDiv), d.videoContent)
    }

    function f() {
        var e = "&iu=".concat(d.adUnit),
            t = "";
        d.isAgeTargetingEnabled && (t += "&Age=".concat(d.customTargeting.userAge)), d.isAgeOrSegmentTargetingEnabled && (t += "&A=".concat(d.customTargeting.userAgeOrSegment));
        t = encodeURIComponent("Env=".concat(d.customTargeting.environment, "&Gender=").concat(d.customTargeting.userGender).concat(t, "&Genres=").concat(d.customTargeting.gameGenres, "&PlaceID=").concat(d.placeId, "&Time=").concat(d.customTargeting.adTime, "&PLVU=").concat(d.customTargeting.PLVU));
        return "".concat("http://pubads.g.doubleclick.net/gampad/ads?impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]").concat("&sz=400x300").concat(e).concat("&ciu_szs=300x250", "&cust_params=").concat(t, "&")
    }

    function g() {
        window.googletag.defineSlot(d.adUnit, [300, 250], d.companionAdDiv).addService(window.googletag.companionAds()), window.googletag.enableServices(), window.googletag.display(d.companionAdDiv)
    }

    function y(e) {
        switch (e.type) {
            case window.google.ima.AdEvent.Type.LOADED:
                break;
            case window.google.ima.AdEvent.Type.STARTED:
                if (d.videoStarted = !0, d.isCompanionAdRenderedBywindow.googletag) {
                    if (!window.googletag) break;
                    window.googletag.cmd.push(g)
                } else {
                    var t = e.getAd().getCompanionAds(300, 250);
                    0 < t.length && (t = t[0].getContent(), document.getElementById(d.companionAdDiv).innerHTML = t)
                }
                break;
            case window.google.ima.AdEvent.Type.SKIPPED:
                d.videoCompleted = !0, d.videoSkipped = !0, d.showVideoPreRoll = !1;
                break;
            case window.google.ima.AdEvent.Type.COMPLETE:
                d.videoStarted && !1 === d.videoCancelled && (d.videoCompleted = !0, d.showVideoPreRoll = !1, "" !== d.newValue && c().cookie("RBXVPR", d.newValue, 180))
        }
    }

    function b() {
        d.videoErrored = !0, d.videoCompleted = !0, d.videoLogNote = "AdError"
    }

    function w(e) {
        d.adsManager = e.getAdsManager(d.videoContent), d.adsManager.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, b), d.adsManager.addEventListener(window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED, y), d.adsManager.addEventListener(window.google.ima.AdEvent.Type.LOADED, y), d.adsManager.addEventListener(window.google.ima.AdEvent.Type.STARTED, y), d.adsManager.addEventListener(window.google.ima.AdEvent.Type.SKIPPED, y), d.adsManager.addEventListener(window.google.ima.AdEvent.Type.COMPLETE, y);
        try {
            d.adsManager.init(400, 300, window.google.ima.ViewMode.NORMAL), d.adsManager.start()
        } catch (e) {
            b()
        }
    }

    function P() {
        window.google.ima.settings.setVpaidAllowed(!0), m(), h(), d.adDisplayContainer.initialize(), d.adsLoader = new window.google.ima.AdsLoader(d.adDisplayContainer), d.adsLoader.addEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, w, !1), d.adsLoader.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, b, !1), d.videoContent.addEventListener("ended", p);
        var e = new window.google.ima.AdsRequest,
            t = f();
        e.adTagUrl = t, e.linearAdSlotWidth = 400, e.linearAdSlotHeight = 300, e.nonLinearAdSlotWidth = 400, e.nonLinearAdSlotHeight = 300, d.adsLoader.requestAds(e)
    }

    function I() {
        var t = !1;
        try {
            new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (t = !0)
        } catch (e) {
            navigator.mimeTypes && void 0 !== navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = !0)
        }
        return t
    }

    function E() {
        if (d.logsEnabled) {
            var e = "";
            if (d.videoCompleted) e = "Complete", "" === d.videoLogNote && (d.videoLogNote = "NoTimeout"), d.logsEnabled = !1;
            else if (d.videoCancelled) e = "Cancelled", d.videoLogNote = window.RobloxLaunch.state;
            else {
                if (!1 !== d.videoInitialized || "" === d.videoLogNote) return;
                e = "Failed", d.logsEnabled = !1
            }
            B.GaEventSettings.gaDFPPreRollEnabled && window.GoogleAnalyticsEvents && window.GoogleAnalyticsEvents.FireEvent(["DFPPreRoll", e, d.videoLogNote])
        }
    }

    function C() {
        return !!d.videoInitialized && (d.videoInitialized && !d.videoStarted && d.loadingBarCurrentTime > d.videoLoadingTimeout && (d.videoCompleted = !0, d.videoLogNote = "LoadingTimeout"), d.videoStarted && !d.videoCompleted && d.loadingBarCurrentTime > d.videoPlayingTimeout && (d.videoCompleted = !0, d.videoLogNote = "PlayingTimeout"), !d.videoCompleted)
    }

    function S() {
        var e = encodeURIComponent(f()),
            e = "adTagUrl=".concat(e);
        c().ajax({
            url: "/game/preloader",
            data: {
                url: e
            },
            method: "GET",
            crossDomain: !0,
            xhrFields: {
                withCredentials: !0
            }
        }).success(function(e) {
            c()("#videoPrerollMainDiv").html(e), d.videoErrored || (d.videoStarted = !0)
        })
    }

    function A() {
        c().ajax({
            url: "/game/updateprerollcount",
            method: "GET",
            crossDomain: !0,
            xhrFields: {
                withCredentials: !0
            }
        })
    }
    Object.assign(d, {
        contentEndedListener: p,
        createVideoContent: m,
        createAdDisplayContainer: h,
        constructUrl: f,
        renderCompanionAd: g,
        onAdEvent: y,
        onAdError: b,
        onAdsManagerLoaded: w,
        requestAds: P,
        checkFlashEnabled: I,
        checkEligibility: function() {
            d.showVideoPreRoll && (I() && (d.isFlashInstalled = !0), "True" === c()("#PlaceLauncherStatusPanel").data("is-protocol-handler-launch-enabled") || B.Client.IsRobloxInstalled() ? void 0 === window.google || void 0 === window.google.ima ? (d.videoLogNote = "NoGoogle", d.showVideoPreRoll = !1) : B.Client.isIDE() ? (d.videoLogNote = "RobloxStudio", d.showVideoPreRoll = !1) : B.Client.isRobloxBrowser() ? (d.videoLogNote = "RobloxPlayer", d.showVideoPreRoll = !1) : (window.chrome || window.safari) && "#chromeInstall" === window.location.hash && (d.showVideoPreRoll = !1) : d.showVideoPreRoll = !1)
        },
        logVideoPreRoll: E,
        isPlaying: C,
        correctIEModalPosition: function(e) {
            var t, n;
            e.container.innerHeight() <= 30 && (t = c()("#videoPrerollPanel"), n = -Math.floor(t.innerHeight() / 2), t.css({
                position: "relative",
                top: "".concat(n, "px")
            }), e.container.find(".VprCloseButton").css({
                top: "".concat(n - 10, "px"),
                "z-index": "1003"
            }))
        },
        renderImaPreloader: S,
        updatePrerollCount: A,
        start: function() {
            0 === d.placeId && "undefined" != typeof play_placeId && (d.placeId = play_placeId), d.videoInitialized = !0, d.videoStarted = !1, d.videoCancelled = !1, d.videoCompleted = !1, d.videoSkipped = !1, d.loadingBarCurrentTime = 0, d.videoLogNote = "", u.init(d.loadingBarID, d.loadingBarInnerID, d.loadingBarPercentageID), d.loadingBarIntervalID = setInterval(function() {
                d.loadingBarCurrentTime += 1e3, u.update(d.loadingBarID, d.loadingBarCurrentTime / d.loadingBarMaxTime)
            }, 1e3), (d.isSwfPreloaderEnabled && d.isFlashInstalled ? S : P)()
        },
        cancel: function() {
            d.videoCancelled = !0, c().modal.close()
        },
        skip: function() {
            d.videoCompleted = !0, d.videoSkipped = !0, d.showVideoPreRoll = !1
        },
        close: function() {
            window.MadStatus && window.MadStatus.running && window.MadStatus.stop(""), window.RobloxLaunch.launcher && (window.RobloxLaunch.launcher._cancelled = !0), clearInterval(d.loadingBarIntervalID), u.dispose(d.loadingBarID), C() && (d.videoCancelled = !0), c().modal.close(), E(), d.isPrerollShownEveryXMinutesEnabled && d.videoInitialized && d.videoCompleted && A()
        }
    });
    var U = d,
        x = {
            waitForPreroll: function(e) {
                var t, n, a = new(c().Deferred),
                    o = U;
                return o.placeId = void 0 !== e.placeId ? e.placeId : 0, o.showVideoPreRoll ? (t = {
                    escClose: !0,
                    opacity: 80,
                    overlayCss: {
                        backgroundColor: "#000"
                    },
                    zIndex: 1031,
                    onShow: function(e) {
                        o.correctIEModalPosition(e), o.start(), c()("#prerollClose").hide(), c()("#prerollClose").delay(1e3 * o.adTime).show(300)
                    },
                    onClose: function() {
                        o.close()
                    },
                    closeHTML: '<a href="#" id="prerollClose" class="ImageButton closeBtnCircle_35h ABCloseCircle VprCloseButton"></a>'
                }, c()("#videoPrerollPanel").modal(t), n = setInterval(function() {
                    o.isPlaying() || (c().modal.close(), clearInterval(n), o.videoCancelled ? a.reject(e) : a.resolve(e))
                }, 200)) : (a.resolve(e), o.logVideoPreRoll()), a
            }
        };

    function T(e, t, n, a, o, r, i) {
        try {
            var l = e[r](i),
                c = l.value
        } catch (e) {
            return void n(e)
        }
        l.done ? t(c) : Promise.resolve(c).then(a, o)
    }

    function L(t, e) {
        var n, a = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), a.push.apply(a, n)), a
    }

    function k(a) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? L(Object(o), !0).forEach(function(e) {
                var t, n;
                t = a, e = o[n = e], n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : L(Object(o)).forEach(function(e) {
                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e))
            })
        }
        return a
    }
    var D, R = {
        gameLaunchInterface: null,
        gameLaunchLogger: null,
        initialized: new Promise(function(e, t) {
            D = e
        })
    };

    function O(e, t, n) {
        t = k(k({}, e), {}, {
            joinAttemptId: null != t ? t : v.uuidService.generateRandomUuid()
        });
        return n && (t.joinAttemptOrigin = n), t
    }

    function N(e, t, n) {
        var a, o;
        3 < arguments.length && void 0 !== arguments[3] && arguments[3] && (4 < arguments.length && void 0 !== arguments[4] && arguments[4]) && (a = e, o = {
            url: "".concat(B.EnvironmentUrls.gameJoinApi, "/v1/team-create-preemptive"),
            withCredentials: !0,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }, a = {
            gameJoinAttemptId: v.uuidService.generateRandomUuid(),
            placeId: a
        }, v.httpService.post(o, a)), R.gameLaunchInterface.editGameInStudio(e, t, n)
    }

    function G(e) {
        var t = 2 < arguments.length ? arguments[2] : void 0,
            n = 3 < arguments.length ? arguments[3] : void 0,
            a = 4 < arguments.length ? arguments[4] : void 0,
            o = 5 < arguments.length ? arguments[5] : void 0,
            r = 6 < arguments.length ? arguments[6] : void 0,
            r = {
                placeId: e,
                launchData: null == o ? void 0 : o.launchData,
                eventId: null == o ? void 0 : o.eventId,
                isPlayTogetherGame: !0 === t,
                referredByPlayerId: r
            };
        return R.gameLaunchInterface.isJoinAttemptIdEnabled && (r = O(r, n, a)), s.restrictGuests(r).then(x.waitForPreroll).then(R.gameLaunchInterface.joinMultiplayerGame)
    }

    function M() {
        var l;
        return l = regeneratorRuntime.mark(function e(t, n, a, o, r) {
            var i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, R.initialized;
                    case 2:
                        return i = {
                            placeId: t,
                            accessCode: n,
                            linkCode: a
                        }, R.gameLaunchInterface.isJoinAttemptIdEnabled && (i = O(i, o, r)), i = x.waitForPreroll(i).then(R.gameLaunchInterface.joinPrivateGame), e.abrupt("return", i);
                    case 6:
                    case "end":
                        return e.stop()
                }
            }, e)
        }), (M = function() {
            var e = this,
                i = arguments;
            return new Promise(function(t, n) {
                var a = l.apply(e, i);

                function o(e) {
                    T(a, t, n, o, r, "next", e)
                }

                function r(e) {
                    T(a, t, n, o, r, "throw", e)
                }
                o(void 0)
            })
        }).apply(this, arguments)
    }
    c().fn.bindGameLaunch = function() {
        return this.find(".VisitButtonPlayGLI").click(function() {
            var e = c()(this);
            G(e.attr("placeid"), e.data("is-membership-level-ok"))
        }), this.find(".VisitButtonEditGLI").click(function() {
            var e = c()(this);
            N(e.attr("placeid"), e.data("universeid"), !!e.data("allowupload"))
        }), this
    }, c()(document).ready(function() {
        c()("body").bindGameLaunch()
    }), Object.assign(R, {
        authenticationChecker: s,
        prerollPlayer: x,
        joinMultiplayerGame: G,
        openStudio: function() {
            R.gameLaunchInterface.openStudio()
        },
        openPluginInStudio: function(e) {
            R.gameLaunchInterface.openPluginInStudio(e)
        },
        editGameInStudio: N,
        followPlayerIntoGame: function(e, t, n) {
            return e = {
                userId: e
            }, R.gameLaunchInterface.isJoinAttemptIdEnabled && (e = O(e, t, n)), s.restrictGuests(e).then(x.waitForPreroll).then(R.gameLaunchInterface.followPlayerIntoGame)
        },
        joinGameInstance: function(e, t, n, a, o, r, i) {
            return i = {
                placeId: e,
                gameId: t,
                isPlayTogetherGame: !0 === a,
                referredByPlayerId: i
            }, R.gameLaunchInterface.isJoinAttemptIdEnabled && (i = O(i, o, r)), s.restrictGuests(i).then(x.waitForPreroll).then(R.gameLaunchInterface.joinGameInstance)
        },
        joinPrivateGame: function(e, t, n, a, o) {
            return M.apply(this, arguments)
        },
        playTogetherGame: function(e, t, n, a) {
            return t = {
                placeId: e,
                conversationId: t
            }, R.gameLaunchInterface.isJoinAttemptIdEnabled && (t = O(t, n, a)), s.restrictGuests(t).then(x.waitForPreroll).then(R.gameLaunchInterface.playTogetherGame)
        },
        setGameLaunchInterface: function(e) {
            R.gameLaunchInterface = e, D()
        },
        setGameLaunchLogger: function(e) {
            R.gameLaunchLogger = e
        },
        tryAssetInStudio: function(e) {
            R.gameLaunchInterface.tryAssetInStudio(e)
        },
        isJoinAttemptIdEnabled: function() {
            var e;
            return null === (e = R.gameLaunchInterface) || void 0 === e ? void 0 : e.isJoinAttemptIdEnabled
        },
        startClientAttemptedEvent: "startClientAttempted",
        startClientFailedEvent: "startClientFailed",
        startClientSucceededEvent: "startClientSucceeded",
        beginInstallEvent: "beginInstall",
        successfulInstallEvent: "successfulInstall",
        manualDownloadEvent: "manualDownload"
    });
    var j = R,
        V = {
            lastContext: "unknown",
            contextCategories: {
                joinUser: "JoinUser"
            }
        };

    function F(e, t, n) {
        var a, o = c()("#PlaceLauncherStatusPanel");
        return {
            lType: o && o.data("is-protocol-handler-launch-enabled") && "true" === o.data("is-protocol-handler-launch-enabled").toLowerCase() ? "protocol" : "plugin",
            pid: e,
            refuid: t,
            pg: (a = window.location.pathname.toLowerCase(), e = "profile", -1 !== (t = a.lastIndexOf(e)) && a.length === t + e.length ? e : 0 === a.indexOf("/develop") ? "develop" : 0 === a.indexOf("/discover") ? "games" : "gameDetail"),
            joinAttemptId: "True" === (null !== (o = o.data("is-join-attempt-id-enabled")) && void 0 !== o ? o : "False") ? n : void 0
        }
    }

    function _(e, t, n, a, o) {
        null !== t && "" !== t && "unknown" !== t && (V.lastContext = t), B.EventStream.SendEvent(e, V.lastContext, F(n, a, o))
    }
    Object.assign(V, {
        SendGamePlayIntent: function(e, t, n, a) {
            _("gamePlayIntent", e, t, n, a), c()(document).trigger("playButton:gamePlayIntent")
        },
        SendDevelopIntent: function(e, t) {
            _("developIntent", e, t)
        },
        SendInstallBegin: function(e, t) {
            _("installBegin", e, t)
        },
        SendInstallSuccess: function(e, t) {
            _("installSuccess", e, t)
        },
        SendClientStartAttempt: function(e, t) {
            _("clientStartAttempt", e, t)
        },
        SendClientStartSuccessWeb: function(e, t) {
            _("clientStartSuccessWeb", e, t)
        },
        SendManualDownloadClick: function(e, t) {
            _("manualDownload", e, t)
        }
    });
    var H = V,
        q = {
            logToConsoleEnabled: !1,
            logToGAEnabled: !0,
            logToEphemeralCountersEnabled: !0
        },
        W = {};
    W[j.startClientAttemptedEvent] = ["GameLaunchAttempt_<os>", "GameLaunchAttempt_<os>_<launchmethod>"], W[j.startClientSucceededEvent] = ["GameLaunchSuccessWeb_<os>", "GameLaunchSuccessWeb_<os>_<launchmethod>"];
    var J = {};
    B.GaEventSettings.gaLaunchAttemptAndLaunchSuccessEnabled && (J[j.startClientAttemptedEvent] = "Launch Attempt", J[j.startClientSucceededEvent] = "Launch Success"), J[j.beginInstallEvent] = "Install Begin", J[j.successfulInstallEvent] = "Install Success", J[j.manualDownloadEvent] = "Manual Download";
    var z = {};

    function X(e) {
        q.logToConsoleEnabled && console.log(e)
    }

    function Y(e, t) {
        var n;
        q.logToEphemeralCountersEnabled && ("Windows" === (n = c()("#PlaceLauncherStatusPanel").data("os-name")) && (n = "Win32"), e = (e = e.replace("<os>", n)).replace("<launchmethod>", t), null !== (t = window.EventTracker) && void 0 !== t && t.fireEvent && window.EventTracker.fireEvent(e))
    }

    function K(e, t, n, a) {
        void 0 !== window.GoogleAnalyticsEvents && q.logToGAEnabled && window.GoogleAnalyticsEvents.FireEvent && window.GoogleAnalyticsEvents.FireEvent([e, t, n, a])
    }

    function Q(e, n) {
        X("".concat(e.type, ": ").concat(JSON.stringify(n))), W[e.type] && c().each(W[e.type], function(e, t) {
            Y(t, n.launchMethod)
        }), J[e.type] && K(n.launchMethod, J[e.type], n.params.launchMode, 0), "True" === c()("#PlaceLauncherStatusPanel").data("event-stream-for-protocol-enabled") && z[e.type] && z[e.type](null, n.params.placeId)
    }
    z[j.startClientAttemptedEvent] = H.SendClientStartAttempt, z[j.startClientSucceededEvent] = H.SendClientStartSuccessWeb, z[j.beginInstallEvent] = H.SendInstallBegin, z[j.successfulInstallEvent] = H.SendInstallSuccess, z[j.manualDownloadEvent] = H.SendManualDownloadClick, Object.assign(q, {
        logToConsole: X,
        logToEphemeralCounters: Y,
        logToGA: K
    }), c()(document).ready(function() {
        var e = [j.startClientAttemptedEvent, j.startClientFailedEvent, j.startClientSucceededEvent, j.beginInstallEvent, j.successfulInstallEvent, j.manualDownloadEvent];
        c()(j).on(e.join(" "), Q)
    });
    var Z = q,
        $ = function() {
            var e = "click";
            c()("body").on(e, ".VisitButtonPlay, .VisitButtonPlayGLI", function() {
                var e, t, n = c()(this);
                (n.hasClass("VisitButtonPlay") || n.hasClass("VisitButtonPlayGLI")) && (e = "PlayButton"), e && (t = c()(this).attr("placeid"), n = B.UrlParser ? B.UrlParser.getParameterValueByName("rbxp") : null, H.SendGamePlayIntent(e, t, n))
            }), c()("body").on(e, ".VisitButtonEdit, .VisitButtonEditGLI", function() {
                var e = c()(this).attr("placeid");
                H.SendDevelopIntent("Edit", e)
            }), c()("#rbx-running-games").on(e, ".rbx-game-server-item .rbx-game-server-join", function() {
                var e = c()(this).data("placeid");
                e && H.SendGamePlayIntent("JoinInstance", e)
            }), c()("#rbx-friends-running-games").on(e, ".rbx-friends-game-server-item .rbx-friends-game-server-join", function() {
                var e = c()(this).data("placeid");
                e && H.SendGamePlayIntent("JoinInstance", e)
            }), c()("#game-instances").on(e, "#rbx-vip-servers .rbx-vip-server-item .rbx-vip-server-join", function() {
                var e = c()(this).data("placeid");
                e && H.SendGamePlayIntent("PrivateServer", e)
            }), c()("#build-page").on(e, ".roblox-edit-button", function() {
                var e = c()(this).parents("table.item-table"),
                    e = e.data("rootplace-id") || e.data("item-id");
                e && H.SendDevelopIntent("Edit", e)
            })
        },
        ee = "token",
        te = ["/games/{placeId}/{placeName}", "/share-links?code={linkId}&type=ExperienceInvite"].map(function(e) {
            return new RegExp(e.replace(/\{.*?\}/g, "([^/]+)"))
        }),
        ne = ["/share-links"],
        ae = ["ExperienceAffiliate"],
        oe = function(e) {
            try {
                var t = new URL(e).searchParams.get("referralUrl");
                if (!t) return null;
                var n = new URL(decodeURIComponent(t));
                return (t = n, ne.includes(t.pathname) && ae.includes(null !== (t = t.searchParams.get("type")) && void 0 !== t ? t : "")) ? n.href : null
            } catch (e) {
                return null
            }
        },
        re = function(e, i, l, c) {
            return new(l = l || Promise)(function(n, t) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        ie = function(n, a) {
            var o, r, i, l = {
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
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & t[0] ? r.return : t[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, t[1])).done) return i;
                            switch (r = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < i[1]) {
                                        l.label = i[1], i = t;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(t);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = a.call(n, l)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            o = i = 0
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
        le = B.EnvironmentUrls.apiGatewayUrl + "/deferred-deep-link/token-api",
        ce = function(a) {
            return re(void 0, void 0, Promise, function() {
                var t, n;
                return ie(this, function(e) {
                    switch (e.label) {
                        case 0:
                            n = {
                                linkId: a,
                                group: "deeplink"
                            }, t = {
                                withCredentials: !0,
                                url: le + "/create-token"
                            }, e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, v.httpService.post(t, n)];
                        case 2:
                            return n = e.sent(), [2, null !== (n = n.data.token) && void 0 !== n ? n : null];
                        case 3:
                            return e.sent(), [2, null];
                        case 4:
                            return [2]
                    }
                })
            })
        },
        se = function(e, i, l, c) {
            return new(l = l || Promise)(function(n, t) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        ue = function(n, a) {
            var o, r, i, l = {
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
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & t[0] ? r.return : t[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, t[1])).done) return i;
                            switch (r = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < i[1]) {
                                        l.label = i[1], i = t;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(t);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = a.call(n, l)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            o = i = 0
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

    function de(a) {
        return se(this, void 0, Promise, function() {
            var t, n;
            return ue(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = "", (n = function(e) {
                            var t = oe(e);
                            if (t) return t;
                            var n = new URL(e);
                            return n.search = "", n.hash = "", te.some(function(e) {
                                return e.test(n.pathname)
                            }) ? n.toString() : null
                        }(a)) ? [4, ce(n)] : [2, t];
                    case 1:
                        return (n = e.sent()) && (t = "?" + ee + "=" + n), [2, t]
                }
            })
        })
    }

    function pe(e, t, n, a, o, r, i) {
        try {
            var l = e[r](i),
                c = l.value
        } catch (e) {
            return void n(e)
        }
        l.done ? t(c) : Promise.resolve(c).then(a, o)
    }

    function ve(l) {
        return function() {
            var e = this,
                i = arguments;
            return new Promise(function(t, n) {
                var a = l.apply(e, i);

                function o(e) {
                    pe(a, t, n, o, r, "next", e)
                }

                function r(e) {
                    pe(a, t, n, o, r, "throw", e)
                }
                o(void 0)
            })
        }
    }

    function me(t, e) {
        var n, a = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), a.push.apply(a, n)), a
    }

    function he(a) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? me(Object(o), !0).forEach(function(e) {
                var t, n;
                t = a, e = o[n = e], n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : me(Object(o)).forEach(function(e) {
                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e))
            })
        }
        return a
    }
    var fe = {
            isInstalling: !1,
            statusInterval: 0,
            robloxLocale: "",
            gameLocale: "",
            protocolUrlSeparator: "+",
            protocolUrlIncludesLaunchTime: !1,
            protocolDetectionEnabled: !1,
            avatarParamEnabled: !0,
            separateScriptParamsEnabled: !1,
            waitTimeBeforeFailure: 300,
            protocolNameForStudio: "roblox-studio",
            protocolNameForClient: "roblox-client",
            logger: null,
            channel: "",
            studioChannel: "",
            playerChannel: "",
            isDuarAutoOptInEnabled: !1,
            isDuarOptOutDisabled: !1,
            isJoinAttemptIdEnabled: !1
        },
        ge = {
            Global: "Global"
        },
        ye = {
            edit: "edit",
            plugin: "plugin",
            play: "play",
            build: "build",
            app: "app",
            asset: "asset"
        };

    function be(e) {
        return e === ye.edit || e === ye.plugin || e === ye.asset
    }

    function we(e, t) {
        function n() {
            clearTimeout(l), e()
        }
        var a, o, r, i, l = setTimeout(function() {
            c().modal.close(),
                function(e, t) {
                    var n = "True" === B.PlaceLauncher.Resources.RefactorEnabled,
                        a = be(t.launchMode);
                    if (n) {
                        a = a ? B.PlaceLauncher.Resources.ProtocolHandlerAreYouInstalled.studio : B.PlaceLauncher.Resources.ProtocolHandlerAreYouInstalled.play;
                        return B.Dialog.open({
                            bodyContent: a.content,
                            allowHtmlContentInBody: !0,
                            showAccept: !0,
                            acceptColor: B.Dialog.green,
                            acceptText: a.buttonText,
                            showDecline: !1,
                            dismissable: !1,
                            xToCancel: !0,
                            footerText: a.footerContent,
                            allowHtmlContentInFooter: !0,
                            onAccept: function() {
                                Ne(t)
                            },
                            cssClass: "protocolhandler-are-you-installed-modal"
                        })
                    }
                    c()("#ProtocolHandlerAreYouInstalled").modal({
                        escClose: !0,
                        opacity: 80,
                        overlayCss: {
                            backgroundColor: "#000"
                        },
                        onClose: function() {
                            e(), c()("#ProtocolHandlerInstallButton").off("click"), c().modal.close()
                        },
                        zIndex: 1031
                    }), c()("#ProtocolHandlerInstallButton, #ProtocolHandlerStudioInstallButton").click(function() {
                        Ne(t)
                    })
                }(n, t)
        }, 5e3);
        a = n, o = t.launchMode, r = "True" === B.PlaceLauncher.Resources.RefactorEnabled, i = be(o), r ? (o = (i ? B.PlaceLauncher.Resources.ProtocolHandlerStartingDialog.studio : B.PlaceLauncher.Resources.ProtocolHandlerStartingDialog.play).content, r = B.PlaceLauncher.Resources.ProtocolHandlerStartingDialog.loader, B.Dialog.open({
            bodyContent: o + r,
            allowHtmlContentInBody: !0,
            showAccept: !1,
            showDecline: !1,
            dismissable: !1,
            cssClass: "protocolhandler-starting-modal",
            onCloseCallback: a,
            onCancel: function() {
                a(), c().modal.close()
            }
        })) : (i ? c()(".protocol-handler-container").each(function() {
            c()(this).find(".play-modal").addClass("hidden"), c()(this).find(".studio-modal").removeClass("hidden")
        }) : c()(".protocol-handler-container").each(function() {
            c()(this).find(".play-modal").removeClass("hidden"), c()(this).find(".studio-modal").addClass("hidden")
        }), c()("#ProtocolHandlerStartingDialog").modal({
            escClose: !0,
            opacity: 80,
            overlayCss: {
                backgroundColor: "#000"
            },
            onClose: function() {
                a(), c().modal.close()
            },
            zIndex: 1031
        }))
    }

    function Pe() {
        c().modal.close();
        var e = new B.TranslationResourceProvider,
            t = e.getTranslationResource("Common.VisitGame"),
            e = e.getTranslationResource("CommonUI.Controls");
        B.Dialog.open({
            titleText: t.get("Heading.ErrorStartingGame"),
            bodyContent: t.get("Response.Dialog.ErrorLaunching"),
            acceptText: e.get("Action.OK") || "OK",
            showDecline: !1
        })
    }

    function Ie(t) {
        var n = new(c().Deferred);
        return clearInterval(fe.statusInterval), fe.statusInterval = setInterval(function() {
            var e = "".concat(B.EnvironmentUrls.matchmakingApi, "/v1/client-status");
            c().ajax({
                method: "GET",
                url: e,
                dataType: "json",
                contentType: "application/json",
                cache: !1,
                success: function(e) {
                    "Unknown" !== (null == e ? void 0 : e.status) && (n.resolve(t), clearInterval(fe.statusInterval))
                }
            })
        }, 3e3), n
    }

    function Ee(e) {
        c().modal.close();
        e = {
            launchMethod: "Protocol",
            params: e
        };
        c()(j).trigger(j.startClientSucceededEvent, e), fe.isInstalling && (c()(j).trigger(j.successfulInstallEvent, e), fe.isInstalling = !1)
    }

    function Ce(e) {
        return !1
    }

    function Se(e) {
        var a = new(c().Deferred),
            t = be(e.launchMode),
            o = he({}, e);
        return !B.CurrentUser.isAuthenticated || t ? (a.resolve(o), a) : fe.getClientAssertionEnabled().then(function(e) {
            return e ? fe.doClientAssertionRequest().then(function(e) {
                return n(e.clientAssertion)
            }, function() {
                return n()
            }) : n()
        }, function() {
            return n()
        });

        function n(e) {
            return fe.doAuthTicketRequest(e).then(function(e, t, n) {
                n = n.getResponseHeader("RBX-Authentication-Ticket");
                return n && 0 < n.length ? (o.gameInfo = n, a.resolve(o)) : a.reject(), a
            })
        }
    }

    function Ae(e) {
        var t;
        fe.protocolDetectionEnabled && void 0 !== navigator.msLaunchUri ? navigator.msLaunchUri(e, function() {}, function() {}) : (0 < (t = c()("iframe#gamelaunch")).length && t.remove(), t = c()("<iframe id='gamelaunch' class='hidden'></iframe>").attr("src", e), c()("body").append(t), t = new Event("ProtocolLaunchStartSelenium"), window.dispatchEvent(t))
    }

    function Ue(e) {
        var t, n = new(c().Deferred),
            a = be(e.launchMode),
            o = fe.protocolUrlSeparator,
            r = "".concat(e.protocolName, ":"),
            i = [];
        return i.push(1), i.push("launchmode:".concat(e.launchMode)), !e.gameInfo || e.protocolName === fe.protocolNameForStudio && 0 === e.gameInfo.indexOf("Guest:") || i.push("gameinfo:".concat(encodeURIComponent(e.gameInfo))), fe.protocolUrlIncludesLaunchTime && i.push("launchtime:".concat(e.launchTime)), "True" === B.PlaceLauncher.Resources.IsProtocolHandlerBaseUrlParamEnabled && (t = B.EnvironmentUrls.websiteUrl || "https://".concat(window.location.host), i.push("baseUrl:".concat(encodeURIComponent(t)))), a && B.CurrentUser.isAuthenticated && (i.push("distributorType:".concat(ge.Global)), i.push("userId:".concat(B.CurrentUser.userId))), a && i.push("browser:".concat((0, v.getCurrentBrowser)())), c().each(e.otherParams, function(e, t) {
            e === t ? i.push(e) : i.push("".concat(e, ":").concat(encodeURIComponent(t)))
        }), r += i.join(o), j.gameLaunchLogger && j.gameLaunchLogger.logToConsole("launchProtocolUrl: ".concat(JSON.stringify({
            url: r,
            params: e
        }))), Ae(r), n.resolve(e), n
    }

    function xe(e) {
        return c().when(Se(e), (e = "".concat(B.EnvironmentUrls.matchmakingApi, "/v1/client-status"), null === (e = c().ajax({
            method: "POST",
            url: e,
            contentType: "application/json",
            data: {
                status: "Unknown"
            },
            dataType: "json"
        })) || void 0 === e ? void 0 : e.success)).then(Ue, Pe).then(Ie).then(Ee, Ce)
    }

    function Te(e) {
        return c()(this).hasClass("disabled") || (xe(e.data), void 0 === (e = c()("#ProtocolHandlerClickAlwaysAllowed")).data("hideRememberOverlay") && e.show()), !1
    }

    function Le(e) {
        e = he({}, e);
        return e.launchTime = (new Date).getTime(), e.otherParams.browsertrackerid = B.Cookies.getBrowserTrackerId(), e.otherParams.robloxLocale = fe.robloxLocale, e.otherParams.gameLocale = fe.gameLocale, e.otherParams.channel = fe.channel, e.protocolName === fe.protocolNameForStudio ? e.otherParams.channel = fe.studioChannel : e.otherParams.channel = fe.playerChannel, fe.isDuarAutoOptInEnabled && e.protocolName === fe.protocolNameForClient && !e.otherParams.LaunchExp && (fe.isDuarOptOutDisabled ? e.otherParams.LaunchExp = "InApp" : e.otherParams.LaunchExp = "PreferInApp"), c()(j).trigger(j.startClientAttemptedEvent, {
            launchMethod: "Protocol",
            params: e
        }), we(function() {}, e), xe(e)
    }

    function ke(e, t) {
        var n = " ";
        B.Endpoints && B.Endpoints.Urls && (n = "".concat(B.Endpoints.getAbsoluteUrl("/Game/PlaceLauncher.ashx"), "?")), "h" !== n[0] && (n = "http://".concat(window.location.host) + "/Game/PlaceLauncher.ashx?"), n = n.replace("placelauncher", "PlaceLauncher");
        e = {
            request: e,
            browserTrackerId: B.Cookies.getBrowserTrackerId()
        };
        return c().extend(e, t), n + c().param(e)
    }

    function Be(e, t, n) {
        return a = "Edit.ashx", o = e, e = t, t = n, n = " ", B.Endpoints && B.Endpoints.Urls && (n = "".concat(B.Endpoints.getAbsoluteUrl("/Game/".concat(a)), "?")), "h" !== n[0] && (n = "http://".concat(window.location.host) + "/Game/".concat(a, "?")), e = {
            placeId: o,
            upload: t ? o : "",
            universeId: e,
            testMode: !1
        }, n + c().param(e);
        var a, o
    }

    function De() {
        return Re.apply(this, arguments)
    }

    function Re() {
        return (Re = ve(regeneratorRuntime.mark(function e() {
            var t, n, a, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return t = document.getElementById("downloadInstallerIFrame"), n = "/download/client", a = "", t.referrerPolicy = "no-referrer", e.next = 6, de(window.location.toString());
                    case 6:
                        o = e.sent, a = o, t.src = "".concat(n).concat(a);
                    case 9:
                    case "end":
                        return e.stop()
                }
            }, e)
        }))).apply(this, arguments)
    }

    function Oe() {
        return (Oe = ve(regeneratorRuntime.mark(function e(t, n) {
            var a, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (a = he({}, t), o = a.gameInfo, void 0 !== a.gameInfo && (a.gameInfo = void 0), c()(j).trigger(j.beginInstallEvent, {
                                launchMethod: "Protocol",
                                params: a
                            }), fe.isInstalling = !0, a.url = window.location.href, void 0 !== o && (a.gameInfo = o), !n) {
                            e.next = 11;
                            break
                        }
                        document.getElementById("downloadInstallerIFrame").src = "/download/studio", e.next = 13;
                        break;
                    case 11:
                        return e.next = 13, De();
                    case 13:
                    case "end":
                        return e.stop()
                }
            }, e)
        }))).apply(this, arguments)
    }

    function Ne(e) {
        var t, n = be(e.launchMode);
        c().modal.close(), n || (B.Dialog.open({
                titleText: c()("#InstallationInstructions .ph-modal-header .title").text(),
                allowHtmlContentInBody: !0,
                bodyContent: c()("#InstallationInstructions .modal-content-container").html(),
                allowHtmlContentInFooter: !0,
                footerText: c()("#InstallationInstructions .xsmall").html(),
                acceptColor: B.Dialog.none,
                declineColor: B.Dialog.none,
                cssClass: "install-instructions-modal",
                xToCancel: !0,
                onCloseCallback: function() {
                    c()("#ProtocolHandlerClickAlwaysAllowed").hide()
                }
            }), 0 === c()("#GameLaunchInstructionsLinkScript").length && fe.attachManualDownloadToLink(), e.placeId && null !== window.localStorage.getItem("ref_info") && (t = function() {
                var e = window.localStorage.getItem("ref_info");
                if (window.localStorage.removeItem("ref_info"), !e) return {};
                try {
                    return JSON.parse(atob(e))
                } catch (e) {
                    return {}
                }
            }(), e.referredByPlayerId = t[e.placeId]), setTimeout(function() {
                c()(".VisitButtonContinueGLI a").removeClass("disabled").click(e, Te)
            }, 5e3)),
            function() {
                Oe.apply(this, arguments)
            }(e, n)
    }

    function Ge() {
        return Me.apply(this, arguments)
    }

    function Me() {
        return (Me = ve(regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return c()(j).trigger(j.manualDownloadEvent, {
                            launchMethod: "Protocol",
                            params: {}
                        }), e.next = 3, De();
                    case 3:
                    case "end":
                        return e.stop()
                }
            }, e)
        }))).apply(this, arguments)
    }

    function je() {
        return (je = ve(regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        c()("body #GameLaunchManualInstallLink").click(ve(regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Ge();
                                    case 2:
                                        return e.abrupt("return", !1);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })));
                    case 1:
                    case "end":
                        return e.stop()
                }
            }, e)
        }))).apply(this, arguments)
    }
    Object.assign(fe, {
        joinMultiplayerGame: function(e) {
            var t = fe.protocolNameForClient,
                n = ke("RequestGame", e),
                a = !0 === e.isPlayTogetherGame;
            return Le({
                protocolName: t,
                launchMode: "play",
                otherParams: {
                    placelauncherurl: n
                },
                placeId: e.placeId,
                isPlayTogetherGame: a,
                launchData: e.launchData,
                eventId: e.eventId
            })
        },
        openStudio: function() {
            var e = {};
            return fe.avatarParamEnabled && (e.avatar = "avatar"), Le({
                protocolName: fe.protocolNameForStudio,
                launchMode: "edit",
                otherParams: e
            })
        },
        tryAssetInStudio: function(e) {
            return e = {
                assetid: e
            }, fe.avatarParamEnabled && (e.avatar = "avatar"), Le({
                protocolName: fe.protocolNameForStudio,
                launchMode: "asset",
                otherParams: e
            })
        },
        openPluginInStudio: function(e) {
            e = {
                pluginid: e
            }, fe.avatarParamEnabled && (e.avatar = "avatar"), Le({
                protocolName: fe.protocolNameForStudio,
                launchMode: "plugin",
                otherParams: e
            })
        },
        editGameInStudio: function(e, t, n) {
            n = fe.separateScriptParamsEnabled ? {
                task: "EditPlace",
                placeId: e,
                universeId: t
            } : {
                script: Be(e, t, n)
            }, fe.avatarParamEnabled && (n.avatar = "avatar"), Le({
                protocolName: fe.protocolNameForStudio,
                launchMode: "edit",
                otherParams: n,
                placeId: e
            })
        },
        followPlayerIntoGame: function(e) {
            return Le({
                protocolName: fe.protocolNameForClient,
                launchMode: "play",
                otherParams: {
                    placelauncherurl: ke("RequestFollowUser", e)
                }
            })
        },
        joinGameInstance: function(e) {
            var t = fe.protocolNameForClient,
                n = ke("RequestGameJob", e),
                a = !0 === e.isPlayTogetherGame;
            return Le({
                protocolName: t,
                launchMode: "play",
                otherParams: {
                    placelauncherurl: n
                },
                placeId: e.placeId,
                isPlayTogetherGame: a
            })
        },
        joinPrivateGame: function(e) {
            return Le({
                protocolName: fe.protocolNameForClient,
                launchMode: "play",
                otherParams: {
                    placelauncherurl: ke("RequestPrivateGame", e)
                },
                placeId: e.placeId
            })
        },
        playTogetherGame: function(e) {
            return Le({
                protocolName: fe.protocolNameForClient,
                launchMode: "play",
                otherParams: {
                    placelauncherurl: ke("RequestPlayTogetherGame", e)
                },
                placeId: e.placeId,
                conversationId: e.conversationId
            })
        },
        manualDownload: Ge,
        attachManualDownloadToLink: function() {
            return je.apply(this, arguments)
        },
        startDownload: De,
        setLocationHref: Ae,
        doAuthTicketRequest: function(e) {
            var t = "".concat(B.EnvironmentUrls.authApi, "/v1/authentication-ticket/");
            return c().ajax({
                method: "POST",
                url: t,
                data: JSON.stringify({
                    clientAssertion: e
                }),
                contentType: "application/json"
            })
        },
        doClientAssertionRequest: function() {
            var e = "".concat(B.EnvironmentUrls.authApi, "/v1/client-assertion/");
            return c().ajax({
                method: "GET",
                url: e,
                contentType: "application/json",
                timeout: 1e4
            })
        },
        getClientAssertionEnabled: function() {
            var e = "".concat(B.EnvironmentUrls.apiGatewayUrl, "/universal-app-configuration/v1/behaviors/auth-ticket-client-assertion/content");
            return c().ajax({
                method: "GET",
                url: e,
                contentType: "application/json",
                timeout: 1e4
            }).then(function(e) {
                return Boolean(e && "true" === e.isClientAssertionEnabled)
            }, function() {
                return !1
            })
        },
        openDesktopUniversalApp: function() {
            var e = {},
                t = fe.protocolNameForClient;
            return e.protocolName = t, e.launchTime = (new Date).getTime(), e.launchMode = ye.app, e.otherParams = {}, e.otherParams.browsertrackerid = B.Cookies.getBrowserTrackerId(), e.otherParams.robloxLocale = fe.robloxLocale, e.otherParams.gameLocale = fe.gameLocale, e.otherParams.LaunchExp = "InApp", c()(j).trigger(j.startClientAttemptedEvent, {
                launchMethod: "Protocol",
                params: e
            }), we(function() {}, e), xe(e)
        },
        showDialog: we,
        showLaunchFailureDialog: Pe,
        cleanUpAndLogSuccess: Ee,
        cleanUpAndLogFailure: Ce,
        startGameWithDeepLinkUrl: function(e, t) {
            we(function() {}, {
                launchMode: "play",
                protocolName: fe.protocolNameForClient,
                placeId: t
            }), Ae(e), setTimeout(function() {
                c().modal.close()
            }, 6e4)
        }
    }), c()(document).ready(function() {
        j.setGameLaunchInterface(fe);
        var e = c()("#PlaceLauncherStatusPanel");
        fe.protocolNameForClient = e.data("protocol-name-for-client"), fe.protocolNameForStudio = e.data("protocol-name-for-studio"), fe.protocolUrlIncludesLaunchTime = e.data("protocol-url-includes-launchtime"), fe.protocolDetectionEnabled = e.data("protocol-detection-enabled"), fe.separateScriptParamsEnabled = e.data("protocol-separate-script-parameters-enabled"), fe.avatarParamEnabled = e.data("protocol-avatar-parameter-enabled"), fe.isJoinAttemptIdEnabled = "True" === (null !== (t = e.data("is-join-attempt-id-enabled")) && void 0 !== t ? t : "False"), fe.robloxLocale = e.data("protocol-roblox-locale"), fe.gameLocale = e.data("protocol-game-locale");
        var t = e.data("protocol-channel-name");
        "string" == typeof t && "LIVE" !== t.toUpperCase() && (fe.channel = t);
        t = e.data("protocol-studio-channel-name");
        "string" == typeof t && "LIVE" !== t.toUpperCase() && (fe.studioChannel = t);
        t = e.data("protocol-player-channel-name");
        "string" == typeof t && "LIVE" !== t.toUpperCase() && (fe.playerChannel = t), fe.logger || void 0 === window.Roblox.ProtocolHandlerLogger || (fe.logger = window.Roblox.ProtocolHandlerLogger), fe.isDuarAutoOptInEnabled = e.data("is-duar-auto-opt-in-enabled"), fe.isDuarOptOutDisabled = e.data("is-duar-opt-out-disabled")
    });
    var Ve = fe,
        Fe = HeaderScripts,
        _e = React,
        He = a.n(_e),
        qe = ReactStyleGuide,
        We = window.EventTracker ? EventTracker : {
            fireEvent: console.log,
            start: console.log,
            endSuccess: console.log,
            endCancel: console.log,
            endFailure: console.log
        },
        Je = function() {
            return (Je = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        },
        ze = {
            UnplayableOtherReason: "UnplayableOtherReason",
            Playable: "Playable",
            GuestProhibited: "GuestProhibited",
            GameUnapproved: "GameUnapproved",
            IncorrectConfiguration: "IncorrectConfiguration",
            UniverseRootPlaceIsPrivate: "UniverseRootPlaceIsPrivate",
            InsufficientPermissionFriendsOnly: "InsufficientPermissionFriendsOnly",
            InsufficientPermissionGroupOnly: "InsufficientPermissionGroupOnly",
            DeviceRestricted: "DeviceRestricted",
            UnderReview: "UnderReview",
            PurchaseRequired: "PurchaseRequired",
            AccountRestricted: "AccountRestricted",
            TemporarilyUnavailable: "TemporarilyUnavailable",
            ComplianceBlocked: "ComplianceBlocked",
            ContextualPlayabilityRegionalAvailability: "ContextualPlayabilityRegionalAvailability",
            ContextualPlayabilityRegionalCompliance: "ContextualPlayabilityRegionalCompliance",
            ContextualPlayabilityAgeRecommendationParentalControls: "ContextualPlayabilityAgeRecommendationParentalControls",
            ContextualPlayabilityAgeGated: "ContextualPlayabilityAgeGated",
            PlaceHasNoPublishedVersion: "PlaceHasNoPublishedVersion",
            ContextualPlayabilityUnverifiedSeventeenPlusUser: "ContextualPlayabilityUnverifiedSeventeenPlusUser",
            FiatPurchaseRequired: "FiatPurchaseRequired",
            ContextualPlayabilityUnrated: "ContextualPlayabilityUnrated",
            ContextualPlayabilityAgeGatedByDescriptor: "ContextualPlayabilityAgeGatedByDescriptor"
        },
        Xe = {
            playButtonErrorStatusTranslationMap: ((qt = {})[ze.UnplayableOtherReason] = "UnplayableError.UnplayableOther", qt[ze.TemporarilyUnavailable] = "UnplayableError.TemporarilyUnavailable", qt[ze.GameUnapproved] = "UnplayableError.GameUnapproved", qt[ze.IncorrectConfiguration] = "UnplayableError.IncorrectConfiguration", qt[ze.UniverseRootPlaceIsPrivate] = "UnplayableError.UniverseRootPlaceIsPrivate", qt[ze.InsufficientPermissionFriendsOnly] = "UnplayableError.InsufficientPermissionFriendsOnly", qt[ze.InsufficientPermissionGroupOnly] = "UnplayableError.InsufficientPermissionGroupOnly", qt[ze.DeviceRestricted] = "UnplayableError.DeviceRestrictedDefault", qt[ze.UnderReview] = "UnplayableError.UnderReview", qt[ze.AccountRestricted] = "UnplayableError.AccountRestricted", qt[ze.ComplianceBlocked] = "UnplayableError.ComplianceBlocked", qt[ze.ContextualPlayabilityRegionalAvailability] = "UnplayableError.ContextualPlayabilityRegionalAvailability", qt[ze.ContextualPlayabilityRegionalCompliance] = "UnplayableError.ContextualPlayabilityRegionalCompliance", qt[ze.ContextualPlayabilityAgeRecommendationParentalControls] = "UnplayableError.ContextualPlayabilityAgeRecommendationParentalControls", qt[ze.ContextualPlayabilityAgeGated] = "UnplayableError.ContextualPlayabilityAgeGated", qt[ze.PlaceHasNoPublishedVersion] = "UnplayableError.PlaceHasNoPublishedVersion", qt[ze.ContextualPlayabilityUnrated] = "UnplayableError.ContextualPlayabilityUnrated", qt[ze.ContextualPlayabilityAgeGatedByDescriptor] = "UnplayableError.ContextualPlayabilityAgeGatedByDescriptor", qt),
            playButtonTextTranslationMap: {
                ActionNeeded: "PlayButtonText.ActionNeeded",
                Unplayable: "PlayButtonText.Unavailable",
                Buy: "PlayButtonText.Buy"
            },
            eventStreamProperties: function(e, t) {
                return {
                    eventName: "playGameClicked",
                    ctx: "click",
                    properties: Je(Je({}, t), {
                        placeId: e
                    }),
                    gamePlayIntentEventCtx: "PlayButton"
                }
            },
            PlayabilityStatus: ze,
            counterEvents: {
                ActionNeeded: "ActionNeededButtonShown",
                Unplayable: "UnplayableErrorShown",
                SeventeenPlusInPlayable: "ReachedSeventeenPlusCaseInPlayable",
                PlayButtonIXPError: "PlayButtonIXPIssueCaught",
                PlayButtonExposureError: "PlayButtonExposureLoggingIssueCaught",
                PlayButtonUpsellSelfUpdateSettingTriggered: "PlayButtonUpsellSelfUpdateSettingTriggered",
                PlayButtonUpsellAskYourParentTriggered: "PlayButtonUpsellAskYourParentTriggered",
                PlayButtonUpsellRestrictedUnplayableTriggered: "PlayButtonUpsellRestrictedUnplayableTriggered",
                PlayButtonUpsellAgeRestrictionVerificationTriggered: "PlayButtonUpsellAgeRestrictionVerificationTriggered",
                PlayButtonUpsellUnknownSettingOrAge: "PlayButtonUpsellUnknownSettingOrAge",
                PlayButtonUpsellAgeNotInMapping: "PlayButtonUpsellAgeNotInMapping",
                PlayButtonUpsellParentalConsentError: "PlayButtonUpsellParentalConsentError",
                PlayButtonUpsellAgeRestrictionVerificationError: "PlayButtonUpsellAgeRestrictionVerificationError",
                PlayButtonUpsellUnknownRequirement: "PlayButtonUpsellUnknownRequirement",
                PreparePurchaseUrlError: "PreparePurchaseUrlError",
                PlayButtonShowIdentificationError: "PlayButtonShowIdentificationIssueCaught"
            },
            avatarChatUpsellLayer: "Voice.AvatarChat.Upsell",
            avatarChatUpsellLayerU13: "Voice.AvatarChat.U13Upsell",
            playButtonLayer: "Website.PlayButton",
            unlockPlayIntentConstants: {
                eventName: "unlockPlayIntent",
                gameLaunchFallbackUpsellName: "GameLaunch",
                restrictedUnplayableUpsellName: "RestrictedUnplayableOptionNotFound",
                unverifiedSeventeenPlusUpsellName: "AgeVerificationUnverifiedSeventeenPlusUser",
                fiatPurchaseUpsellName: "FiatPurchase"
            }
        },
        Ye = CoreRobloxUtilities,
        Ke = function(e, i, l, c) {
            return new(l = l || Promise)(function(n, t) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        Qe = function(n, a) {
            var o, r, i, l = {
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
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & t[0] ? r.return : t[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, t[1])).done) return i;
                            switch (r = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < i[1]) {
                                        l.label = i[1], i = t;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(t);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = a.call(n, l)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            o = i = 0
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
        Ze = Ye.dataStores.gamesDataStore,
        $e = function(n) {
            return Ke(void 0, void 0, Promise, function() {
                var t;
                return Qe(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Ze.getProductInfo(n)];
                        case 1:
                            return t = e.sent().data.data, [2, (void 0 === t ? [] : t)[0]]
                    }
                })
            })
        },
        et = function(n) {
            return Ke(void 0, void 0, Promise, function() {
                var t;
                return Qe(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Ze.getPlaceDetails(n)];
                        case 1:
                            return t = e.sent().data, [2, (void 0 === t ? [] : t)[0]]
                    }
                })
            })
        },
        tt = function(n) {
            return Ke(void 0, void 0, Promise, function() {
                var t;
                return Qe(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Ze.getPlayabilityStatus(n)];
                        case 1:
                            return t = e.sent().data, [2, (void 0 === t ? [] : t)[0]]
                    }
                })
            })
        },
        nt = function(n) {
            return Ke(void 0, void 0, Promise, function() {
                var t;
                return Qe(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = {
                                withCredentials: !0,
                                url: B.EnvironmentUrls.voiceApi + "/v1/settings/verify/show-age-verification-overlay/" + n
                            }, [4, v.httpService.get(t)];
                        case 1:
                            return [2, e.sent().data]
                    }
                })
            })
        },
        at = function() {
            return Ke(void 0, void 0, Promise, function() {
                var t;
                return Qe(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = {
                                withCredentials: !0,
                                url: B.EnvironmentUrls.apiGatewayUrl + "/universal-app-configuration/v1/behaviors/play-button-ui/content"
                            }, [4, v.httpService.get(t)];
                        case 1:
                            return [2, e.sent().data]
                    }
                })
            })
        },
        ot = function() {
            var e = {
                url: B.EnvironmentUrls.apiGatewayUrl + "/user-settings-api/v1/user-settings/settings-and-options",
                withCredentials: !0
            };
            return v.httpService.get(e).then(function(e) {
                return e.data
            })
        },
        rt = function(e) {
            var t = {
                url: B.EnvironmentUrls.apiGatewayUrl + "/experience-guidelines-api/experience-guidelines/get-age-recommendation",
                withCredentials: !0
            };
            return v.httpService.post(t, {
                universeId: e
            }).then(function(e) {
                return e.data
            })
        },
        it = function(e, t) {
            var n = {
                url: B.EnvironmentUrls.apiGatewayUrl + "/fiat-paid-access-service/v1/purchase",
                withCredentials: !0,
                retryable: !0
            };
            return v.httpService.post(n, {
                rootPlaceId: e,
                expectedBasePriceId: t
            }).then(function(e) {
                var e = JSON.parse(null !== (e = null === (e = e.data) || void 0 === e ? void 0 : e.checkoutUrl) && void 0 !== e ? e : "");
                return null !== (e = null == e ? void 0 : e.checkoutUrl) && void 0 !== e ? e : ""
            })
        },
        lt = function() {
            return (lt = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        },
        ct = function(e, i, l, c) {
            return new(l = l || Promise)(function(n, t) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        st = function(n, a) {
            var o, r, i, l = {
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
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & t[0] ? r.return : t[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, t[1])).done) return i;
                            switch (r = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < i[1]) {
                                        l.label = i[1], i = t;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(t);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = a.call(n, l)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            o = i = 0
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
        ut = Xe.unlockPlayIntentConstants;

    function dt(e) {
        if (!B.GameLauncher.isJoinAttemptIdEnabled()) return {};
        var t = e.joinAttemptOrigin,
            e = e.joinAttemptId;
        return {
            joinAttemptId: e = "string" == typeof e ? e : v.uuidService.generateRandomUuid(),
            joinAttemptOrigin: t
        }
    }

    function pt(e, t, n) {
        n = lt(lt(lt({
            placeId: t
        }, e), dt(e)), n);
        return Ye.eventStreamService.sendEventWithTarget("playGameClicked", "click", n), n
    }

    function vt(e, t) {
        void 0 === t && (t = {});
        var n = B.EnvironmentUrls.websiteUrl + "/games/start?placeid=" + e;
        B.GameLauncher.isJoinAttemptIdEnabled() && (e = (a = dt(t)).joinAttemptId, a = a.joinAttemptOrigin, "string" == typeof e && 0 < e.length && (n += "&joinAttemptId=" + e, "string" == typeof a && 0 < a.length && (n += "&joinAttemptOrigin=" + a)));
        var a = t.launchData,
            t = t.eventId;
        return "string" == typeof a && 0 < a.length && (n += "&launchData=" + a), "string" == typeof t && 0 < t.length && (n += "&eventId=" + t), encodeURIComponent(n)
    }

    function mt(e, t, n, a, o, r) {
        void 0 === o && (o = {}), void 0 === r && (r = {});
        var i, l = Fe.deviceMeta.getDeviceMeta();
        null != l && l.isIosDevice || null != l && l.isAndroidDevice || Fe.jsClientDeviceIdentifier.isIos13Ipad || null != l && l.isChromeOs ? (i = vt(e, pt(o, e, r)), window.open("https://ro.blox.com/Ebh5?pid=experiencestart_mobileweb&is_retargeting=false&af_dp=" + i + "&af_web_dp=" + i + "&deep_link_value=" + i, "_self")) : (i = "0", null !== window.localStorage.getItem("ref_info") && (i = function() {
            var e = window.localStorage.getItem("ref_info");
            if (!e) return {};
            try {
                return JSON.parse(atob(e))
            } catch (e) {
                return {}
            }
        }()[e]), Ye.playGameService.launchGame(Ye.playGameService.buildPlayGameProperties(t, e, a, void 0, n, i, r), Xe.eventStreamProperties(e, o)), window.localStorage.getItem("ref_info") && window.localStorage.removeItem("ref_info"))
    }

    function ht(e) {
        var t = Fe.deviceMeta.getDeviceMeta();
        null != t && t.isIosDevice || null != t && t.isAndroidDevice || Fe.jsClientDeviceIdentifier.isIos13Ipad || null != t && t.isChromeOs ? (t = vt(e, pt({}, e, {})), window.open("https://ro.blox.com/Ebh5?pid=experiencestart_mobileweb&is_retargeting=false&af_dp=" + t + "&af_web_dp=" + t + "&deep_link_value=" + t, "_self")) : Ye.playGameService.launchGame(Ye.playGameService.buildPlayGameProperties(void 0, e.toString()), Xe.eventStreamProperties(e, {}))
    }

    function ft() {
        return ct(void 0, void 0, Promise, function() {
            return st(this, function(e) {
                try {
                    return [2, B.IdentityVerificationService.startVerificationFlow()]
                } catch (e) {
                    return [2, [!1, !1]]
                }
                return [2]
            })
        })
    }

    function gt(t, n) {
        return ct(void 0, void 0, Promise, function() {
            return st(this, function(e) {
                try {
                    return [2, B.IdentityVerificationService.showVoiceOptInOverlay(t, n)]
                } catch (e) {
                    return [2, !1]
                }
                return [2]
            })
        })
    }

    function yt() {
        return ct(void 0, void 0, Promise, function() {
            return st(this, function(e) {
                switch (e.label) {
                    case 0:
                        return e.trys.push([0, 2, , 3]), [4, B.AccessManagementUpsellService.showAccessManagementVerificationModal()];
                    case 1:
                        return [2, e.sent()];
                    case 2:
                        return e.sent(), [2, !1];
                    case 3:
                        return [2]
                }
            })
        })
    }

    function bt(e, t) {
        try {
            var n = o().UrlParser.getParameterValueByName("shareLinkSourceType", !1);
            if ("experiencedetails" !== (null == n ? void 0 : n.toLowerCase())) return;
            B.EventStream.SendEventWithTarget("shareLinkGameJoin", "GamePlayButtonWeb", {
                placeId: e,
                universeId: t
            }, B.EventStream.TargetTypes.WWW)
        } catch (e) {}
    }

    function wt(e, t, n) {
        return void 0 !== e && (e !== ze.Playable && e !== ze.GuestProhibited && e !== ze.PurchaseRequired && e !== ze.ContextualPlayabilityUnverifiedSeventeenPlusUser && e !== ze.FiatPurchaseRequired && (e !== ze.ContextualPlayabilityAgeRecommendationParentalControls || !t || !n))
    }

    function Pt(e, t, n) {
        n = {
            universeId: e,
            upsellName: t,
            playabilityStatus: n
        }, Ye.eventStreamService.sendEvent({
            name: ut.eventName,
            type: ut.eventName,
            context: Ye.eventStreamService.eventTypes.formInteraction
        }, n)
    }
    var It = ReactUtilities,
        e = {
            common: ["Common.VisitGame"],
            feature: "Feature.ExperienceDetails"
        },
        Et = Xe.playButtonTextTranslationMap,
        Ct = (0, It.withTranslations)(function(e) {
            var t = e.onButtonClick,
                n = e.iconClassName,
                a = void 0 === n ? "icon-status-private-primary" : n,
                o = e.buttonWidth,
                r = void 0 === o ? qe.Button.widths.full : o,
                n = e.buttonClassName,
                o = void 0 === n ? "btn-common-play-game-action-needed-lg" : n,
                n = e.hideButtonText,
                n = void 0 !== n && n,
                e = e.translate;
            return He().createElement(He().Fragment, null, He().createElement(qe.Button, {
                "data-testid": "play-action-needed-button",
                width: r,
                className: o,
                onClick: t
            }, He().createElement("span", {
                className: a
            }), !n && He().createElement("span", {
                className: "btn-text"
            }, e(Et.ActionNeeded))), He().createElement("div", {
                id: "access-management-upsell-container-v1"
            }))
        }, e);

    function St(e) {
        var t = e.isModalOpen,
            n = e.navigateToAccountSettings,
            a = e.closeModal,
            e = e.translate;
        return He().createElement(Ut, {
            titleText: e("UpdateMaturitySettingModal.Label.Title"),
            bodyText: e("UpdateMaturitySettingModal.Label.Body"),
            primaryButtonText: e("UpdateMaturitySettingModal.Action.GoToSettings"),
            secondaryButtonText: e("UpdateMaturitySettingModal.Action.Cancel"),
            onPrimaryButtonClick: n,
            onSecondaryButtonClick: a,
            isModalOpen: t,
            onCloseModal: a
        })
    }

    function At(e) {
        var t = e.isModalOpen,
            n = e.closeModal,
            e = e.translate;
        return He().createElement(Ut, {
            titleText: e("RestrictedUnplayableModal.Label.Title"),
            bodyText: e("RestrictedUnplayableModal.Label.Body"),
            secondaryButtonText: e("RestrictedUnplayableModal.Action.Ok"),
            onSecondaryButtonClick: n,
            isModalOpen: t,
            onCloseModal: n
        })
    }(qt = function(e) {
        var t = e.titleText,
            n = e.bodyText,
            a = e.primaryButtonText,
            o = e.secondaryButtonText,
            r = e.onPrimaryButtonClick,
            i = e.onSecondaryButtonClick,
            l = e.isModalOpen,
            c = e.onCloseModal,
            e = e.modalSize;
        return He().createElement(qe.Modal, {
            show: l,
            onHide: c,
            size: e,
            "aria-labelledby": "upsell-modal-title",
            className: "upsell-modal-container",
            centered: "true"
        }, He().createElement(qe.Modal.Header, {
            useBaseBootstrapComponent: !0
        }, He().createElement("button", {
            type: "button",
            className: "close",
            onClick: c
        }, He().createElement("span", {
            className: "icon-close"
        })), He().createElement(qe.Modal.Title, {
            id: "upsell-modal-title"
        }, t)), He().createElement(qe.Modal.Body, null, n), He().createElement(qe.Modal.Footer, null, o && i && He().createElement(qe.Button, {
            variant: qe.Button.variants.secondary,
            size: qe.Button.sizes.medium,
            onClick: i,
            className: "modal-button"
        }, o), a && r && He().createElement(qe.Button, {
            variant: qe.Button.variants.primary,
            size: qe.Button.sizes.medium,
            onClick: r,
            className: "modal-button"
        }, a)))
    }).defaultProps = {
        primaryButtonText: void 0,
        secondaryButtonText: void 0,
        onPrimaryButtonClick: void 0,
        onSecondaryButtonClick: void 0,
        modalSize: "sm"
    };
    var Ut = qt,
        xt = function(e) {
            var t = (0, _e.useState)(void 0),
                n = t[0],
                a = t[1],
                o = (0, _e.useState)(!1),
                r = o[0],
                i = o[1],
                l = (0, _e.useState)(void 0),
                c = l[0],
                s = l[1],
                t = (0, _e.useState)(!1),
                o = t[0],
                u = t[1],
                l = (0, _e.useState)(!1),
                t = l[0],
                d = l[1];
            return (0, _e.useEffect)(function() {
                i(!0), ot().then(function(e) {
                    a(null == e ? void 0 : e.contentAgeRestriction)
                }).catch(function() {
                    return d(!0)
                }).finally(function() {
                    return i(!1)
                })
            }, []), (0, _e.useEffect)(function() {
                u(!0), rt(e).then(function(e) {
                    var t;
                    s(null !== (e = null == (t = e) ? void 0 : t.ageRecommendationDetails) && void 0 !== e && e.summary && !t.ageRecommendationDetails.summary.ageRecommendation ? -1 : null === (t = null === (t = null === (t = null == t ? void 0 : t.ageRecommendationDetails) || void 0 === t ? void 0 : t.summary) || void 0 === t ? void 0 : t.ageRecommendation) || void 0 === t ? void 0 : t.minimumAge)
                }).catch(function() {
                    return d(!0)
                }).finally(function() {
                    return u(!1)
                })
            }, [e]), {
                contentAgeRestriction: n,
                minimumAge: c,
                isFetching: r || o,
                hasError: t
            }
        },
        Tt = function(e, i, l, c) {
            return new(l = l || Promise)(function(n, t) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        Lt = function(n, a) {
            var o, r, i, l = {
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
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & t[0] ? r.return : t[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, t[1])).done) return i;
                            switch (r = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < i[1]) {
                                        l.label = i[1], i = t;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(t);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = a.call(n, l)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            o = i = 0
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
        kt = Xe.counterEvents,
        Bt = Xe.unlockPlayIntentConstants,
        Dt = function(e, c, t, n, a, o) {
            var r = (0, _e.useState)(!1),
                i = r[0],
                s = r[1],
                l = (0, _e.useState)(!1),
                u = l[0],
                d = l[1],
                p = (0, _e.useCallback)(function() {
                    mt(e, t, n, a, o, void 0)
                }, [o, a, e, n, t]),
                v = (0, _e.useCallback)(function(r, i, l) {
                    return Tt(void 0, void 0, void 0, function() {
                        var t, n, a, o;
                        return Lt(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    if (t = function(e) {
                                            Pt(c, e, ze.ContextualPlayabilityAgeRecommendationParentalControls)
                                        }, l || void 0 === r || void 0 === i) return p(), (0, We.fireEvent)(kt.PlayButtonUpsellUnknownSettingOrAge), t(Bt.gameLaunchFallbackUpsellName), [2];
                                    if (!(a = {
                                            "-1": "ThirteenPlus",
                                            9: "NinePlus",
                                            13: "ThirteenPlus",
                                            17: "SeventeenPlus",
                                            18: "EighteenPlus"
                                        })[i]) return p(), (0, We.fireEvent)(kt.PlayButtonUpsellAgeNotInMapping), t(Bt.gameLaunchFallbackUpsellName), [2];
                                    if (n = a[i], !(o = r.options.find(function(e) {
                                            return (null === (e = null == e ? void 0 : e.option) || void 0 === e ? void 0 : e.optionValue) === n
                                        }))) return [3, 12];
                                    switch (a = o.requirement) {
                                        case "SelfUpdateSetting":
                                            return [3, 1];
                                        case "ParentalConsent":
                                            return [3, 2];
                                        case "ContentAgeRestrictionVerification":
                                            return [3, 6]
                                    }
                                    return [3, 10];
                                case 1:
                                    return s(!0), (0, We.fireEvent)(kt.PlayButtonUpsellSelfUpdateSettingTriggered), t(a), [3, 11];
                                case 2:
                                    return e.trys.push([2, 4, , 5]), (0, We.fireEvent)(kt.PlayButtonUpsellAskYourParentTriggered), t(a), [4, B.AccessManagementUpsellV2Service.startAccessManagementUpsell({
                                        featureName: "CanChangeSetting",
                                        isAsyncCall: !1,
                                        usePrologue: !0,
                                        ampRecourseData: {
                                            contentAgeRestriction: null === (o = null == o ? void 0 : o.option) || void 0 === o ? void 0 : o.optionValue
                                        }
                                    })];
                                case 3:
                                    return e.sent(), [3, 5];
                                case 4:
                                    return e.sent(), p(), (0, We.fireEvent)(kt.PlayButtonUpsellParentalConsentError), t(Bt.gameLaunchFallbackUpsellName), [3, 5];
                                case 5:
                                    return [3, 11];
                                case 6:
                                    return e.trys.push([6, 8, , 9]), (0, We.fireEvent)(kt.PlayButtonUpsellAgeRestrictionVerificationTriggered), t(a), [4, yt()];
                                case 7:
                                    return e.sent(), [3, 9];
                                case 8:
                                    return e.sent(), p(), (0, We.fireEvent)(kt.PlayButtonUpsellAgeRestrictionVerificationError), t(Bt.gameLaunchFallbackUpsellName), [3, 9];
                                case 9:
                                    return [3, 11];
                                case 10:
                                    p(), (0, We.fireEvent)(kt.PlayButtonUpsellUnknownRequirement), t(Bt.gameLaunchFallbackUpsellName), e.label = 11;
                                case 11:
                                    return [3, 13];
                                case 12:
                                    d(!0), (0, We.fireEvent)(kt.PlayButtonUpsellRestrictedUnplayableTriggered), t(Bt.restrictedUnplayableUpsellName), e.label = 13;
                                case 13:
                                    return [2]
                            }
                        })
                    })
                }, [p, c]),
                r = (0, _e.useCallback)(function() {
                    s(!1)
                }, []),
                l = (0, _e.useCallback)(function() {
                    d(!1)
                }, []);
            return {
                launchPlayButtonUpsell: v,
                isSelfUpdateSettingModalOpen: i,
                navigateToAccountSettings: (0, _e.useCallback)(function() {
                    var e = B.Endpoints.getAbsoluteUrl("/my/account#!/privacy");
                    "undefined" != typeof window && (window.location.href = e, s(!1))
                }, []),
                closeSelfUpdateSettingModal: r,
                isRestrictedUnplayableModalOpen: u,
                closeRestrictedUnplayableModal: l
            }
        };
    (qt = function(e) {
        var t = e.universeId,
            n = e.hideButtonText,
            a = e.buttonClassName,
            o = e.placeId,
            r = e.rootPlaceId,
            i = e.privateServerLinkCode,
            l = e.gameInstanceId,
            c = e.eventProperties,
            s = e.translate,
            u = xt(t),
            d = u.contentAgeRestriction,
            p = u.minimumAge,
            e = u.isFetching,
            v = u.hasError,
            o = Dt(o, t, r, i, l, c),
            m = o.launchPlayButtonUpsell,
            t = o.isSelfUpdateSettingModalOpen,
            r = o.navigateToAccountSettings,
            i = o.closeSelfUpdateSettingModal,
            l = o.isRestrictedUnplayableModalOpen,
            c = o.closeRestrictedUnplayableModal,
            o = (0, _e.useCallback)(function(e) {
                e.preventDefault(), e.stopPropagation(), m(d, p, v)
            }, [m, d, p, v]);
        return !v && e ? He().createElement(qe.Loading, null) : He().createElement(He().Fragment, null, He().createElement(Ct, {
            onButtonClick: o,
            hideButtonText: n,
            buttonClassName: a
        }), t && He().createElement(St, {
            isModalOpen: t,
            navigateToAccountSettings: r,
            closeModal: i,
            translate: s
        }), l && He().createElement(At, {
            isModalOpen: l,
            closeModal: c,
            translate: s
        }))
    }).defaultProps = {
        hideButtonText: void 0,
        buttonClassName: void 0,
        rootPlaceId: void 0,
        privateServerLinkCode: void 0,
        gameInstanceId: void 0,
        eventProperties: {}
    };
    var Rt = (0, It.withTranslations)(qt, e);

    function Ot(e) {
        var a = e.universeId,
            o = e.placeId,
            r = e.productDetails,
            t = e.translate,
            n = e.iconClassName,
            i = e.buttonWidth,
            l = e.buttonClassName,
            c = e.hideButtonText,
            s = e.redirectPurchaseUrl,
            u = void 0 !== (d = e.showDefaultPurchaseText) && d,
            d = (e = (0, _e.useState)(!1))[0],
            p = e[1],
            e = (0, _e.useCallback)(function(n) {
                return jt(void 0, void 0, void 0, function() {
                    var t;
                    return Vt(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (n.preventDefault(), n.stopPropagation(), t = null === (t = null == r ? void 0 : r.fiatPurchaseData) || void 0 === t ? void 0 : t.basePriceId, !o || !t) return [2];
                                p(!0), e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, 4, 5]), Pt(a, _t.fiatPurchaseUpsellName, ze.FiatPurchaseRequired), [4, it(o, t)];
                            case 2:
                                return (t = e.sent()) && v.urlService.isValidStripeCheckoutUrl(t) && (window.location.href = t), [3, 5];
                            case 3:
                                return e.sent(), (0, We.fireEvent)(Ft.PreparePurchaseUrlError), console.error("Error preparing purchase url"), [3, 5];
                            case 4:
                                return p(!1), [7];
                            case 5:
                                return [2]
                        }
                    })
                })
            }, [o, r, a]);
        return He().createElement(Mt, {
            buttonWidth: i,
            buttonClassName: l,
            iconClassName: n,
            hideButtonText: c,
            hideButtonIcon: !0,
            buttonContent: u ? t(Ht.Buy) : null !== (t = null === (t = null == (t = r) ? void 0 : t.fiatPurchaseData) || void 0 === t ? void 0 : t.localizedFiatPrice) && void 0 !== t ? t : "",
            onClick: s ? void 0 : e,
            redirectUrl: s,
            isPurchasing: d
        })
    }

    function Nt(e) {
        var t = e.universeId,
            n = e.iconClassName,
            a = e.buttonWidth,
            o = e.buttonClassName,
            r = e.hideButtonText,
            i = e.redirectPurchaseUrl,
            l = e.productDetails,
            c = e.productInfo,
            s = e.translate,
            u = e.refetchPlayabilityStatus,
            e = (0, _e.useCallback)(function(e) {
                e.preventDefault(), e.stopPropagation(), Xt.start()
            }, []);
        return He().createElement(He().Fragment, null, He().createElement(Mt, {
            buttonWidth: a,
            buttonClassName: o,
            iconClassName: n,
            hideButtonText: r,
            buttonContent: null !== (r = null === (r = null == (r = c) ? void 0 : r.price) || void 0 === r ? void 0 : r.toString()) && void 0 !== r ? r : "",
            onClick: i ? void 0 : e,
            redirectUrl: i
        }), He().createElement(zt, Jt({}, {
            translate: s,
            productId: c.productId,
            expectedPrice: c.price,
            thumbnail: He().createElement(Wt.Thumbnail2d, {
                type: Wt.ThumbnailTypes.gameIcon,
                size: Wt.DefaultThumbnailSize,
                targetId: parseInt(t, 10),
                imgClassName: "game-card-thumb",
                format: Wt.ThumbnailFormat.jpeg
            }),
            assetName: l.name,
            assetType: "Place",
            sellerName: l.builder,
            expectedCurrency: 1,
            expectedSellerId: c.sellerId,
            onPurchaseSuccess: u,
            isPlace: !0
        })))
    }(qt = function(e) {
        var t = e.buttonWidth,
            n = e.buttonClassName,
            a = e.iconClassName,
            o = e.hideButtonText,
            r = e.hideButtonIcon,
            i = e.buttonContent,
            l = e.onClick,
            c = e.isPurchasing,
            e = e.redirectUrl;
        return e ? He().createElement(qe.Link, {
            url: e,
            className: "purchase-button-link"
        }, He().createElement(qe.Button, {
            "data-testid": "play-purchase-button",
            width: t,
            className: n,
            onClick: function() {
                return null
            },
            isDisabled: c
        }, !r && He().createElement("span", {
            className: a
        }), !o && He().createElement("span", {
            className: "btn-text"
        }, i))) : He().createElement(qe.Button, {
            "data-testid": "play-purchase-button",
            width: t,
            className: n,
            onClick: function(e) {
                l && !c && l(e)
            },
            isDisabled: c
        }, !r && He().createElement("span", {
            className: a
        }), !o && He().createElement("span", {
            className: "btn-text"
        }, i))
    }).defaultProps = {
        hideButtonText: !1,
        buttonWidth: qe.Button.widths.full,
        buttonClassName: "btn-common-play-game-lg",
        iconClassName: "icon-robux-white",
        hideButtonIcon: !1,
        isPurchasing: !1,
        onClick: void 0,
        redirectUrl: void 0
    };
    var Gt, Mt = qt,
        jt = function(e, i, l, c) {
            return new(l = l || Promise)(function(n, t) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        Vt = function(n, a) {
            var o, r, i, l = {
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
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & t[0] ? r.return : t[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, t[1])).done) return i;
                            switch (r = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < i[1]) {
                                        l.label = i[1], i = t;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(t);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = a.call(n, l)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            o = i = 0
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
        Ft = Xe.counterEvents,
        _t = Xe.unlockPlayIntentConstants,
        Ht = Xe.playButtonTextTranslationMap,
        qt = RobloxItemPurchase,
        Wt = RobloxThumbnails,
        Jt = function() {
            return (Jt = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        },
        zt = (qt = (0, qt.createItemPurchase)())[0],
        Xt = qt[1],
        Yt = function(e, i, l, c) {
            return new(l = l || Promise)(function(n, t) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        Kt = function(n, a) {
            var o, r, i, l = {
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
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & t[0] ? r.return : t[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, t[1])).done) return i;
                            switch (r = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < i[1]) {
                                        l.label = i[1], i = t;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(t);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = a.call(n, l)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            o = i = 0
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
    (qt = Gt = Gt || {}).Robux = "Robux", qt.Fiat = "Fiat";
    var Qt = (0, It.withTranslations)(function(e) {
            var t = e.translate,
                n = e.universeId,
                a = e.placeId,
                o = e.iconClassName,
                r = void 0 === o ? "icon-robux-white" : o,
                i = e.buttonWidth,
                l = void 0 === i ? qe.Button.widths.full : i,
                c = e.buttonClassName,
                s = void 0 === c ? "btn-common-play-game-lg" : c,
                u = e.refetchPlayabilityStatus,
                d = e.hideButtonText,
                p = void 0 !== d && d,
                v = e.redirectPurchaseUrl,
                o = e.playabilityStatus,
                i = e.showDefaultPurchaseText,
                c = void 0 !== i && i,
                d = (0, _e.useState)(void 0),
                e = d[0],
                m = d[1],
                i = (0, _e.useState)(void 0),
                d = i[0],
                h = i[1];
            return (0, _e.useEffect)(function() {
                Yt(void 0, void 0, void 0, function() {
                    var t;
                    return Kt(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, $e([n])];
                            case 1:
                                return t = e.sent(), m(t), [3, 3];
                            case 2:
                                return t = e.sent(), console.log(t), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                }), Yt(void 0, void 0, void 0, function() {
                    var t;
                    return Kt(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, et([a])];
                            case 1:
                                return t = e.sent(), h(t), [3, 3];
                            case 2:
                                return t = e.sent(), console.log(t), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, [a, n]), void 0 === e || void 0 === d ? He().createElement(qe.Loading, null) : (i = d, (o === ze.FiatPurchaseRequired && null != i && i.fiatPurchaseData ? Gt.Fiat : Gt.Robux) === Gt.Fiat ? He().createElement(Ot, {
                universeId: n,
                placeId: a,
                iconClassName: r,
                buttonWidth: l,
                buttonClassName: s,
                hideButtonText: p,
                redirectPurchaseUrl: v,
                productDetails: d,
                translate: t,
                showDefaultPurchaseText: c
            }) : He().createElement(Nt, {
                universeId: n,
                iconClassName: r,
                buttonWidth: l,
                buttonClassName: s,
                hideButtonText: p,
                redirectPurchaseUrl: v,
                productDetails: d,
                productInfo: e,
                translate: t,
                refetchPlayabilityStatus: u
            }))
        }, e),
        Zt = function(e, i, l, c) {
            return new(l = l || Promise)(function(n, t) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        $t = function(n, a) {
            var o, r, i, l = {
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
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & t[0] ? r.return : t[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, t[1])).done) return i;
                            switch (r = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < i[1]) {
                                        l.label = i[1], i = t;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(t);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = a.call(n, l)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            o = i = 0
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
        en = Xe.unlockPlayIntentConstants;

    function tn(e) {
        var l = e.universeId,
            c = e.placeId,
            s = e.rootPlaceId,
            u = e.privateServerLinkCode,
            d = e.gameInstanceId,
            p = e.status,
            v = void 0 === (o = e.eventProperties) ? {} : o,
            t = void 0 === (i = e.iconClassName) ? "icon-common-play" : i,
            n = void 0 === (r = e.buttonWidth) ? qe.Button.widths.full : r,
            a = e.buttonClassName,
            o = void 0 === a ? "btn-common-play-game-lg" : a,
            r = void 0 !== (i = e.disableLoadingState) && i,
            i = void 0 === (a = e.buttonText) ? void 0 : a,
            e = void 0 !== (a = e.hideIcon) && a,
            m = (a = (0, _e.useState)(void 0))[0],
            h = a[1],
            f = (a = (0, _e.useState)(void 0))[0],
            g = a[1],
            y = (a = (0, _e.useState)(void 0))[0],
            b = a[1],
            w = (a = (0, _e.useState)(void 0))[0],
            P = a[1],
            I = (a = (0, _e.useState)(void 0))[0],
            E = a[1],
            C = (a = (0, _e.useState)(void 0))[0],
            S = a[1],
            A = (a = (0, _e.useState)(void 0))[0],
            U = a[1],
            x = (a = (0, _e.useState)(void 0))[0],
            T = a[1],
            L = (a = (0, _e.useState)(!1))[0],
            k = a[1];
        return (0, _e.useEffect)(function() {
            try {
                ln(void 0, void 0, Promise, function() {
                    var t;
                    return cn(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, null === B.NavigationService || void 0 === B.NavigationService ? void 0 : B.NavigationService.getIsVNGLandingRedirectEnabled()];
                            case 1:
                                return t = e.sent(), k(t), [2]
                        }
                    })
                })
            } catch (e) {
                k(!1)
            }
        }, []), (0, _e.useEffect)(function() {
            ln(void 0, void 0, void 0, function() {
                var t, n;
                return cn(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]), [4, (y = l, ln(void 0, void 0, Promise, function() {
                                var t, n, a, o, r, i, l, c, s, u, d, p, v, m, h, f, g;
                                return cn(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t = {
                                                isUniverseEnabledForVoice: !1,
                                                isUniverseEnabledForAvatarVideo: !1
                                            }, Fe.authenticatedUser.isAuthenticated ? [4, at()] : [2, {
                                                elegibleToSeeVoiceUpsell: !1,
                                                universePlaceVoiceEnabledSettings: t,
                                                showAgeVerificationOverlay: !1,
                                                showVoiceOptInOverlay: !1,
                                                showAvatarVideoOptInOverlay: !1,
                                                requireExplicitVoiceConsent: !0,
                                                useCameraU13Design: !1,
                                                useVoiceUpsellV2Design: !1
                                            }];
                                        case 1:
                                            return c = e.sent(), n = c.playButtonOverlayWebFlag, a = c.voiceOptInWebFlag, o = c.cameraOptInWebFlag, r = c.cameraOptInWebFlagU13, i = c.requireExplicitVoiceConsent, l = c.useCameraU13Design, c = c.useVoiceUpsellV2Design, n || a || o ? [4, nt(y)] : [2, {
                                                elegibleToSeeVoiceUpsell: !1,
                                                universePlaceVoiceEnabledSettings: t,
                                                showAgeVerificationOverlay: !1,
                                                showVoiceOptInOverlay: !1,
                                                showAvatarVideoOptInOverlay: !1,
                                                requireExplicitVoiceConsent: i,
                                                useCameraU13Design: l,
                                                useVoiceUpsellV2Design: c
                                            }];
                                        case 2:
                                            return (h = e.sent(), s = h.showAgeVerificationOverlay, u = h.showVoiceOptInOverlay, d = h.showAvatarVideoOptInOverlay, p = h.elegibleToSeeVoiceUpsell, v = h.universePlaceVoiceEnabledSettings, h = m = !1, B.ExperimentationService.getAllValuesForLayer) ? (f = Boolean, [4, B.ExperimentationService.getAllValuesForLayer(dn)]) : [3, 5];
                                        case 3:
                                            return m = f.apply(void 0, [e.sent().ShouldShowUpsell]), g = Boolean, [4, B.ExperimentationService.getAllValuesForLayer(pn)];
                                        case 4:
                                            h = g.apply(void 0, [e.sent().ShouldShowUpsell]), e.label = 5;
                                        case 5:
                                            return [2, {
                                                elegibleToSeeVoiceUpsell: p,
                                                universePlaceVoiceEnabledSettings: v,
                                                showAgeVerificationOverlay: n && s,
                                                showVoiceOptInOverlay: a && u,
                                                showAvatarVideoOptInOverlay: d && (o && m || r && h),
                                                requireExplicitVoiceConsent: i,
                                                useCameraU13Design: l,
                                                useVoiceUpsellV2Design: c
                                            }]
                                    }
                                })
                            }))];
                        case 1:
                            return t = e.sent(), h(null !== (n = null === (n = t.universePlaceVoiceEnabledSettings) || void 0 === n ? void 0 : n.isUniverseEnabledForVoice) && void 0 !== n && n), b(t.elegibleToSeeVoiceUpsell), g(t.showAgeVerificationOverlay), P(t.showVoiceOptInOverlay), E(t.showAvatarVideoOptInOverlay), S(t.requireExplicitVoiceConsent), U(t.useCameraU13Design), T(t.useVoiceUpsellV2Design), [3, 3];
                        case 2:
                            return e.sent(), (0, We.fireEvent)(un.PlayButtonShowIdentificationError), b(!1), h(!1), g(!1), P(!1), E(!1), S(!0), U(!1), T(!1), [3, 3];
                        case 3:
                            return [2]
                    }
                    var y
                })
            })
        }, []), void 0 !== f || r ? He().createElement(He().Fragment, null, He().createElement(qe.Button, {
            "data-testid": "play-button",
            width: n,
            className: o,
            onClick: function(i) {
                return ln(void 0, void 0, void 0, function() {
                    var o, r;
                    return cn(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return (i.preventDefault(), i.stopPropagation(), p !== sn.Playable) ? [3, 7] : (y && m && (o = "SocialVoice.VoiceUpsell", B.ExperimentationService.getAllValuesForLayer(o).then(function() {
                                    B.ExperimentationService.logLayerExposure(o)
                                }).catch(function() {
                                    return console.error("error logging exposure event in play-join")
                                })), f ? [4, ft()] : [3, 2]);
                            case 1:
                                return r = e.sent(), r[0], r[1] && g(!1), [3, 6];
                            case 2:
                                return w ? [4, gt(null == C || C, null != x && x)] : [3, 4];
                            case 3:
                                return e.sent() && P(!1), [3, 6];
                            case 4:
                                return I ? [4, (n = null == C || C, a = null == A || A, ct(void 0, void 0, Promise, function() {
                                    return st(this, function(e) {
                                        try {
                                            return [2, B.IdentityVerificationService.showAvatarVideoOptInOverlay(n, a)]
                                        } catch (e) {
                                            return [2, !1]
                                        }
                                        return [2]
                                    })
                                }))] : [3, 6];
                            case 5:
                                e.sent() && E(!1), e.label = 6;
                            case 6:
                                return bt(c, l), r = {
                                    launchData: null !== (t = new URLSearchParams(window.location.search).get("launchData")) && void 0 !== t ? t : void 0,
                                    eventId: null !== (t = new URLSearchParams(window.location.search).get("eventId")) && void 0 !== t ? t : void 0
                                }, mt(c, s, u, d, v, r), [3, 10];
                            case 7:
                                return p !== sn.GuestProhibited ? [3, 8] : (L ? null !== B.NavigationService && void 0 !== B.NavigationService && B.NavigationService.navigateToLoginWithRedirect() : ht(c), [3, 10]);
                            case 8:
                                return p !== sn.ContextualPlayabilityUnverifiedSeventeenPlusUser ? [3, 10] : ((0, We.fireEvent)(un.SeventeenPlusInPlayable), [4, yt()]);
                            case 9:
                                e.sent(), e.label = 10;
                            case 10:
                                return [2]
                        }
                        var t, n, a
                    })
                })
            }
        }, !e && He().createElement("span", {
            className: t
        }), i && He().createElement("span", {
            className: "play-button-text"
        }, i)), He().createElement("div", {
            id: "id-verification-container"
        }), He().createElement("div", {
            id: "access-management-upsell-container-v1"
        })) : He().createElement(qe.Loading, null)
    }

    function nn() {
        B.ExperimentationService.getAllValuesForLayer && B.ExperimentationService.getAllValuesForLayer(vn).then(function() {
            B.ExperimentationService.logLayerExposure(vn)
        }).catch(function() {
            return (0, We.fireEvent)(un.PlayButtonExposureError)
        })
    }(qt = function(e) {
        var n = e.universeId,
            t = e.hideButtonText,
            a = e.buttonClassName,
            e = (0, _e.useCallback)(function(t) {
                return Zt(void 0, void 0, void 0, function() {
                    return $t(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t.preventDefault(), t.stopPropagation(), Pt(n, en.unverifiedSeventeenPlusUpsellName, ze.ContextualPlayabilityUnverifiedSeventeenPlusUser), [4, yt()];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })
            }, [n]);
        return He().createElement(Ct, {
            onButtonClick: e,
            hideButtonText: t,
            buttonClassName: a
        })
    }).defaultProps = {
        hideButtonText: void 0,
        buttonClassName: void 0
    };
    var an = qt,
        on = Xe.playButtonTextTranslationMap,
        rn = (0, It.withTranslations)(function(e) {
            var t = e.translate,
                n = e.iconClassName,
                a = void 0 === n ? "icon-status-unavailable-secondary" : n,
                o = e.buttonWidth,
                n = void 0 === o ? qe.Button.widths.full : o,
                o = e.buttonClassName,
                o = void 0 === o ? "btn-common-play-game-unplayable-lg" : o,
                e = e.hideButtonText,
                e = void 0 !== e && e;
            return He().createElement(He().Fragment, null, He().createElement(qe.Button, {
                "data-testid": "play-unplayable-button",
                width: n,
                className: o,
                isDisabled: !0,
                onClick: function() {
                    return null
                }
            }, He().createElement("span", {
                className: a
            }), !e && He().createElement("span", {
                className: "btn-text"
            }, t(on.Unplayable))))
        }, e),
        ln = function(e, i, l, c) {
            return new(l = l || Promise)(function(n, t) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        cn = function(n, a) {
            var o, r, i, l = {
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
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & t[0] ? r.return : t[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, t[1])).done) return i;
                            switch (r = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < i[1]) {
                                        l.label = i[1], i = t;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(t);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = a.call(n, l)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            o = i = 0
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
        sn = Xe.PlayabilityStatus,
        un = Xe.counterEvents,
        dn = Xe.avatarChatUpsellLayer,
        pn = Xe.avatarChatUpsellLayerU13,
        vn = Xe.playButtonLayer,
        mn = Xe.playButtonErrorStatusTranslationMap,
        hn = Xe.PlayabilityStatus,
        It = (0, It.withTranslations)(function(e) {
            var t = e.translate,
                n = e.playabilityStatus,
                e = e.errorClassName,
                e = void 0 === e ? "error-message" : e;
            return He().createElement("span", {
                "data-testid": "play-error",
                className: e
            }, t(mn[n] || mn[hn.UnplayableOtherReason]))
        }, e),
        fn = function(e, i, l, c) {
            return new(l = l || Promise)(function(n, t) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        gn = function(n, a) {
            var o, r, i, l = {
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
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & t[0] ? r.return : t[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, t[1])).done) return i;
                            switch (r = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < i[1]) {
                                        l.label = i[1], i = t;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(t);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = a.call(n, l)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            o = i = 0
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
        It = {
            usePlayabilityStatus: e = function(n) {
                function t() {
                    return fn(void 0, void 0, void 0, function() {
                        var t;
                        return gn(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    o(void 0), e.label = 1;
                                case 1:
                                    return e.trys.push([1, 3, , 4]), [4, tt([n])];
                                case 2:
                                    return t = e.sent(), o(t.playabilityStatus), [3, 4];
                                case 3:
                                    return e.sent(), o(ze.TemporarilyUnavailable), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }
                var e = (0, _e.useState)(void 0),
                    a = e[0],
                    o = e[1];
                return (0, _e.useEffect)(function() {
                    t();

                    function e(e) {
                        e.persisted && t()
                    }
                    return window.addEventListener("pageshow", e),
                        function() {
                            window.removeEventListener("pageshow", e)
                        }
                }, []), [a, t]
            },
            PlayabilityStatuses: ze,
            launchGame: mt,
            launchLogin: ht,
            shouldShowUnplayableButton: wt,
            DefaultPlayButton: function(e) {
                var t = e.placeId,
                    n = e.rootPlaceId,
                    a = e.universeId,
                    o = e.privateServerLinkCode,
                    r = e.gameInstanceId,
                    i = e.refetchPlayabilityStatus,
                    l = e.playabilityStatus,
                    c = e.hideButtonText,
                    s = e.eventProperties,
                    u = void 0 === s ? {} : s,
                    d = e.disableLoadingState,
                    p = e.buttonClassName,
                    v = e.hasUpdatedPlayButtonsIxp,
                    m = e.hasUpdatedPlayButtonsVpcIxp,
                    h = e.shouldShowVpcPlayButtonUpsells,
                    f = e.redirectPurchaseUrl,
                    g = e.showDefaultPurchaseText;
                switch (l) {
                    case void 0:
                        return d ? He().createElement(tn, {
                            universeId: a,
                            placeId: t,
                            rootPlaceId: n,
                            privateServerLinkCode: o,
                            gameInstanceId: r,
                            status: sn.Playable,
                            eventProperties: u,
                            disableLoadingState: d,
                            buttonClassName: p
                        }) : He().createElement(qe.Loading, null);
                    case sn.Playable:
                    case sn.GuestProhibited:
                        return He().createElement(tn, {
                            universeId: a,
                            placeId: t,
                            rootPlaceId: n,
                            privateServerLinkCode: o,
                            gameInstanceId: r,
                            status: l,
                            eventProperties: u,
                            disableLoadingState: d,
                            buttonClassName: p
                        });
                    case sn.ContextualPlayabilityUnverifiedSeventeenPlusUser:
                        return (0, We.fireEvent)(un.ActionNeeded), nn(), v ? He().createElement(an, {
                            universeId: a,
                            hideButtonText: c,
                            buttonClassName: p
                        }) : He().createElement(tn, {
                            universeId: a,
                            placeId: t,
                            rootPlaceId: n,
                            privateServerLinkCode: o,
                            gameInstanceId: r,
                            status: l,
                            eventProperties: u,
                            disableLoadingState: d,
                            buttonClassName: p
                        });
                    case sn.PurchaseRequired:
                    case sn.FiatPurchaseRequired:
                        return He().createElement(Qt, {
                            refetchPlayabilityStatus: i,
                            universeId: a,
                            placeId: t,
                            hideButtonText: c,
                            buttonClassName: p,
                            redirectPurchaseUrl: f,
                            playabilityStatus: l,
                            showDefaultPurchaseText: g
                        });
                    case sn.ContextualPlayabilityAgeRecommendationParentalControls:
                        return (nn(), h && m) ? ((0, We.fireEvent)(un.ActionNeeded), He().createElement(Rt, {
                            universeId: a,
                            hideButtonText: c,
                            buttonClassName: p,
                            placeId: t,
                            rootPlaceId: n,
                            privateServerLinkCode: o,
                            gameInstanceId: r,
                            eventProperties: u
                        })) : ((0, We.fireEvent)(un.Unplayable), v ? He().createElement(rn, {
                            hideButtonText: c,
                            buttonClassName: p
                        }) : He().createElement(He().Fragment, null));
                    default:
                        return (0, We.fireEvent)(un.Unplayable), nn(), v ? He().createElement(rn, {
                            hideButtonText: c,
                            buttonClassName: p
                        }) : He().createElement(He().Fragment, null)
                }
            },
            PlayButton: tn,
            PurchaseButton: Qt,
            Error: It
        };
    window.Roblox || (window.Roblox = {}), Object.assign(window.Roblox, {
        AuthenticationChecker: s,
        GameLauncher: j,
        GameLaunchLogger: Z,
        GamePlayEvents: H,
        PrerollPlayer: x,
        ProtocolHandlerClientInterface: Ve,
        VideoPreRollDFP: U,
        PlayButton: It
    }), c()(document).ready(function() {
        $();
        var e = (0, B.DeviceMeta)();
        (e.isUWPApp || e.isUniversalApp) && (e = c()("#PlaceLauncherStatusPanel"), i.isJoinAttemptIdEnabled = "True" === (null !== (e = e.data("is-join-attempt-id-enabled")) && void 0 !== e ? e : "False"), window.Roblox.AppHybridClientInterface = i, j.setGameLaunchInterface(i)), j.setGameLaunchLogger(Z)
    })
}();
//# sourceMappingURL=https://js.rbxcdn.com/2f80fec4bb0532a5fa9887edfc84f8ff-gameLaunch.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("GameLaunch");