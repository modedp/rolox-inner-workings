! function() {
    var n = {
            9753: function(t, o, n) {
                var e = {
                    "./infiniteScrollDirective.js": 9225
                };

                function i(t) {
                    t = a(t);
                    return n(t)
                }

                function a(t) {
                    if (n.o(e, t)) return e[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(e)
                }, i.resolve = a, (t.exports = i).id = 9753
            },
            4605: function(t, o, n) {
                var e = {
                    "./limitedIconDirective.js": 3351
                };

                function i(t) {
                    t = a(t);
                    return n(t)
                }

                function a(t) {
                    if (n.o(e, t)) return e[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(e)
                }, i.resolve = a, (t.exports = i).id = 4605
            },
            8080: function(t, o, n) {
                var e = {
                    "./directives/templates/limitedIconContainer.html": 9197
                };

                function i(t) {
                    t = a(t);
                    return n(t)
                }

                function a(t) {
                    if (n.o(e, t)) return e[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(e)
                }, i.resolve = a, (t.exports = i).id = 8080
            },
            6398: function(t, o, n) {
                var e = {
                    "./modalOptions.js": 1171
                };

                function i(t) {
                    t = a(t);
                    return n(t)
                }

                function a(t) {
                    if (n.o(e, t)) return e[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(e)
                }, i.resolve = a, (t.exports = i).id = 6398
            },
            6294: function(t, o, n) {
                var e = {
                    "./modalController.js": 6885
                };

                function i(t) {
                    t = a(t);
                    return n(t)
                }

                function a(t) {
                    if (n.o(e, t)) return e[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(e)
                }, i.resolve = a, (t.exports = i).id = 6294
            },
            8841: function(t, o, n) {
                var e = {
                    "./modalService.js": 7759,
                    "./modalStringService.js": 9284
                };

                function i(t) {
                    t = a(t);
                    return n(t)
                }

                function a(t) {
                    if (n.o(e, t)) return e[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(e)
                }, i.resolve = a, (t.exports = i).id = 8841
            },
            6390: function(t, o, n) {
                var e = {
                    "./controllers/templates/commonModal.html": 186
                };

                function i(t) {
                    t = a(t);
                    return n(t)
                }

                function a(t) {
                    if (n.o(e, t)) return e[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(e)
                }, i.resolve = a, (t.exports = i).id = 6390
            },
            7837: function(t, o, n) {
                var e = {
                    "./toastDirective.js": 9207
                };

                function i(t) {
                    t = a(t);
                    return n(t)
                }

                function a(t) {
                    if (n.o(e, t)) return e[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(e)
                }, i.resolve = a, (t.exports = i).id = 7837
            },
            4256: function(t, o, n) {
                var e = {
                    "./directives/templates/toast.html": 9956
                };

                function i(t) {
                    t = a(t);
                    return n(t)
                }

                function a(t) {
                    if (n.o(e, t)) return e[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(e)
                }, i.resolve = a, (t.exports = i).id = 4256
            },
            7153: function(t, o, n) {
                var e = {
                    "./verticalMenuDirective.js": 4117
                };

                function i(t) {
                    t = a(t);
                    return n(t)
                }

                function a(t) {
                    if (n.o(e, t)) return e[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(e)
                }, i.resolve = a, (t.exports = i).id = 7153
            },
            7525: function(t) {
                function a(t) {
                    return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                }

                function r(t) {
                    return t.split("/").pop().replace(".html", "")
                }
                var o = {
                    importFilesUnderPath: function(t) {
                        t.keys().forEach(t)
                    },
                    templateCacheGenerator: function(t, o, e, i) {
                        return t.module(o, []).run(["$templateCache", function(n) {
                            e && e.keys().forEach(function(t) {
                                var o = a(r(t));
                                n.put(o, e(t))
                            }), i && i.keys().forEach(function(t) {
                                var o = a(r(t));
                                n.put(o, i(t).replace(/<\/?script[^>]*>/gi, ""))
                            })
                        }])
                    }
                };
                t.exports = o
            },
            9225: function(t, o, n) {
                "use strict";
                n.r(o);
                n = n(3079);

                function e(c, u, d, m) {
                    return {
                        link: function(o, n, e) {
                            var i, a;
                            u = angular.element(u), a = 0, null != e.infiniteScrollDistance && o.$watch(e.infiniteScrollDistance, function(t) {
                                return a = parseInt(t, 10)
                            });
                            var t, r = !0,
                                l = !0,
                                s = !1;
                            return null != e.infiniteScrollDisabled && o.$watch(e.infiniteScrollDisabled, function(t) {
                                if ((l = !t) && s) return s = !1, i()
                            }), i = function() {
                                if (!r) return !1;
                                var t = u.height() + u.scrollTop(),
                                    t = n.offset().top + n.height() - t <= u.height() * a;
                                return t && l ? c.$$phase ? o.$eval(e.infiniteScroll) : o.$apply(e.infiniteScroll) : t ? s = !0 : void 0
                            }, null !== e.infiniteScrollAlwaysDisabled && (t = o.$watch(function() {
                                return m(e.infiniteScrollAlwaysDisabled)(o)
                            }, function(t) {
                                null != t && (r = !t)
                            })), u.on("scroll", i), o.$on("manualInfiniteScrollCheck", i), o.$on("$destroy", function() {
                                return t && t(), u.off("scroll", i)
                            }), d(function() {
                                return e.infiniteScrollImmediateCheck && o.$eval(e.infiniteScrollImmediateCheck), i()
                            }, 0)
                        }
                    }
                }
                e.$inject = ["$rootScope", "$window", "$timeout", "$parse"], n.A.directive("infiniteScroll", e), o.default = e
            },
            3079: function(t, o, n) {
                "use strict";
                var e = n(127),
                    e = n.n(e)().module("infiniteScroll", []);
                o.A = e
            },
            3351: function(t, o, n) {
                "use strict";

                function e() {
                    return {
                        restrict: "A",
                        replace: !0,
                        scope: {
                            layoutOptions: "=layoutOptions"
                        },
                        templateUrl: "limited-icon-container"
                    }
                }
                n.r(o), n(735).A.directive("limitedIcon", e), o.default = e
            },
            735: function(t, o, n) {
                "use strict";
                var e = n(127),
                    e = n.n(e)().module("limitedIcon", ["limitedIconTemplate"]);
                o.A = e
            },
            1171: function(t, o, n) {
                "use strict";
                n.r(o);
                var e = {
                    params: {
                        titleText: "",
                        titleIcon: "",
                        bodyText: "",
                        bodyHtmlUnsafe: "",
                        footerText: "",
                        footerHtmlUnsafe: "",
                        imageUrl: "",
                        actionButtonShow: !1,
                        actionButtonClass: "btn-secondary-md",
                        actionButtonId: "modal-action-button",
                        neutralButtonShow: !0,
                        neutralButtonClass: "btn-control-md",
                        closeButtonShow: !0,
                        cssClass: "modal-window"
                    },
                    defaults: {
                        keyboard: !0,
                        animation: !1
                    },
                    commonTemplateUrl: "common-modal",
                    commonController: "modalController",
                    layoutParams: {
                        modalSelector: ".modal",
                        modalContentClass: "modal-content"
                    },
                    backdropStatus: {
                        static: "static"
                    },
                    userInteraction: {
                        mouseDown: "mousedown"
                    },
                    mainButtonPressed: 0
                };
                n(4531).A.constant("modalOptions", e), o.default = e
            },
            6885: function(t, o, n) {
                "use strict";
                n.r(o);
                n = n(4531);

                function e(t, o, n, e, i, a) {
                    o.modalData = i, o.closeActions = a.closeActions, o.close = function(t) {
                        e.close(t)
                    }, o.dismiss = function() {
                        e.dismiss("dismissed")
                    }
                }
                e.$inject = ["$log", "$scope", "$sce", "$uibModalInstance", "modalData", "modalService"], n.A.controller("modalController", e), o.default = e
            },
            4531: function(t, o, n) {
                "use strict";

                function i(t, o) {
                    return !!t.classList.contains(o) || !!t.parentElement && i(t.parentElement, o)
                }
                var e = n(7577),
                    a = n(127),
                    a = n.n(a)().module("modal", ["ui.bootstrap", "modalHtmlTemplate"]).config(["$uibModalProvider", "$injector", function(t, o) {
                        t.options.openedClass = "modal-open-noscroll", t.options.animation = !1;
                        t = o.get("languageResourceProvider"), o = (new e.TranslationResourceProvider).getTranslationResource("CommonUI.Controls");
                        t.setTranslationResources([o])
                    }]).run(["modalOptions", "$uibModalStack", "$rootScope", function(n, e, t) {
                        var o = t.$watch(function() {
                            return document.querySelectorAll(n.layoutParams.modalSelector).length
                        }, function(t) {
                            0 < t && (window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), document.querySelectorAll(n.layoutParams.modalSelector).forEach(function(t) {
                                var o = e.getTop();
                                o && o.value.backdrop !== n.backdropStatus.static && t.addEventListener(n.userInteraction.mouseDown, function(t) {
                                    i(t.target, n.layoutParams.modalContentClass) ? t.stopPropagation() : t.button === n.mainButtonPressed && e.getTop().key && e.getTop().key.dismiss()
                                })
                            }), e.getTop() && (e.getTop().value.backdrop = n.backdropStatus.static))
                        });
                        t.$on("$destroy", function() {
                            o()
                        })
                    }]);
                o.A = a
            },
            7759: function(t, o, n) {
                "use strict";
                n.r(o);
                var e = n(127),
                    i = n.n(e),
                    n = n(4531);

                function a(o, n, t) {
                    var e = i().extend({}, t.params, n.params);
                    return {
                        open: function(t) {
                            return t = i().extend({}, e, t), (t = o.open({
                                templateUrl: n.commonTemplateUrl,
                                controller: n.commonController,
                                windowClass: t.cssClass || "",
                                animation: t.animation || n.defaults.animation,
                                keyboard: t.keyboard || n.defaults.keyboard,
                                backdrop: !!t.closeButtonShow || "static",
                                openedClass: t.openedClass || "modal-open-noscroll",
                                resolve: {
                                    modalData: t
                                }
                            })).result.then(i().noop, i().noop), t
                        }
                    }
                }
                a.$inject = ["$uibModal", "modalOptions", "modalStringService"], n.A.service("modalService", a), o.default = a
            },
            9284: function(t, o, n) {
                "use strict";
                n.r(o);
                n = n(4531);

                function e(t) {
                    return {
                        params: {
                            actionButtonText: t.get("Action.Yes"),
                            neutralButtonText: t.get("Action.OK")
                        }
                    }
                }
                e.$inject = ["languageResource"], n.A.service("modalStringService", e), o.default = e
            },
            9207: function(t, o, n) {
                "use strict";
                n.r(o);
                n = n(6367);

                function e(e) {
                    return {
                        restrict: "A",
                        replace: !0,
                        scope: {
                            toastLayout: "="
                        },
                        templateUrl: "toast",
                        link: function(n) {
                            n.layout = {
                                isEnabled: !1,
                                isVisible: !1,
                                isNeeded: !1,
                                text: "",
                                timeout: null,
                                animationDuration: 200,
                                visibilityDelay: 50
                            }, n.$watch("toastLayout.isNeeded", function(t, o) {
                                t !== o && t && !n.layout.timeout && (n.layout.text = n.toastLayout.text, n.layout.isEnabled = t, n.toastLayout.isNeeded = !1, e(function() {
                                    n.layout.isVisible = !0
                                }, n.layout.visibilityDelay), n.layout.timeout = e(function() {
                                    n.layout.isVisible = !1, e(function() {
                                        n.layout.isEnabled = !1, n.layout.timeout = null, n.toastLayout.isNeeded = !1
                                    }, n.layout.animationDuration)
                                }, n.toastLayout.timeout), n.toastLayout.isNeeded = !1)
                            }, !0)
                        }
                    }
                }
                e.$inject = ["$timeout"], n.A.directive("toast", e), o.default = e
            },
            6367: function(t, o, n) {
                "use strict";
                var e = n(127),
                    e = n.n(e)().module("toast", ["toastHtmlTemplate"]);
                o.A = e
            },
            4117: function(t, o, n) {
                "use strict";
                n.r(o);
                var e = n(3991),
                    i = n(7577);

                function a() {
                    return {
                        restrict: "A",
                        link: function(t, o, n) {
                            var e = t.$watch(n.resetVerticalMenu, function() {
                                i.BootstrapWidgets.SetupVerticalMenu()
                            });
                            t.$on("$destroy", function() {
                                e && e()
                            })
                        }
                    }
                }
                e.A.directive("verticalMenu", a), o.default = a
            },
            3991: function(t, o, n) {
                "use strict";
                var e = n(127),
                    e = n.n(e)().module("verticalMenu", []);
                o.A = e
            },
            9197: function(t) {
                t.exports = '<span class="limited-icon-container"> <span class="icon-shop-limited" ng-hide="layoutOptions.isIconDisabled"> </span> <span class="limited-number-container" ng-show="layoutOptions.isUnique"> <span class="font-caption-header">#</span> <span class="font-caption-header text-subheader limited-number" ng-show="layoutOptions.isLimitedNumberShown" ng-bind="layoutOptions.limitedNumber"></span> </span>'
            },
            186: function(t) {
                t.exports = '<div> <div class="modal-header"> <button type="button" class="close" ng-show="modalData.closeButtonShow" ng-click="dismiss()" title="close"> <span class="icon-close"></span> </button> <div class="modal-title"> <span ng-if="modalData.titleIcon && modalData.titleIcon.length > 0" ng-class="modalData.titleIcon"></span> <h4 ng-bind="modalData.titleText"></h4> </div> </div> <div class="modal-body"> <p ng-if="modalData.bodyText" class="body-text text-description" ng-bind="modalData.bodyText"></p> <p ng-if="modalData.bodyHtmlUnsafe" class="body-text text-description" ng-bind-html="modalData.bodyHtmlUnsafe"></p> <div class="img-container modal-image-container" ng-show="modalData.imageUrl && modalData.imageUrl.length > 0"> <img class="modal-thumb" ng-src="{{modalData.imageUrl}}"/> </div> </div> <div class="modal-buttons"> <button type="submit" ng-attr-id="{{modalData.actionButtonId}}" class="modal-button" ng-class="modalData.actionButtonClass" ng-if="modalData.actionButtonShow" ng-click="close(true)" ng-bind="modalData.actionButtonText"></button> <button type="button" class="modal-button" ng-class="modalData.neutralButtonClass" ng-if="modalData.neutralButtonShow" ng-click="dismiss()" ng-bind="modalData.neutralButtonText"></button> </div> <div class="modal-footer" ng-if="modalData.footerText && modalData.footerText.length > 0"> <div class="text-footer" ng-bind="modalData.footerText"></div> </div> <div class="modal-footer" ng-if="modalData.footerHtmlUnsafe && modalData.footerHtmlUnsafe.length > 0"> <div class="text-footer" ng-bind-html="modalData.footerHtmlUnsafe"></div> </div> </div> '
            },
            9956: function(t) {
                t.exports = '<div class="toast-container" ng-show="layout.isEnabled" ng-class="{\'toast-visible\': layout.isVisible}"> <div class="toast-content"> <span ng-bind="layout.text"></span> </div> </div>'
            },
            7577: function(t) {
                "use strict";
                t.exports = Roblox
            },
            127: function(t) {
                "use strict";
                t.exports = angular
            }
        },
        e = {};

    function i(t) {
        var o = e[t];
        if (void 0 !== o) return o.exports;
        o = e[t] = {
            exports: {}
        };
        return n[t](o, o.exports, i), o.exports
    }
    i.n = function(t) {
            var o = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(o, {
                a: o
            }), o
        }, i.d = function(t, o) {
            for (var n in o) i.o(o, n) && !i.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: o[n]
            })
        }, i.o = function(t, o) {
            return Object.prototype.hasOwnProperty.call(t, o)
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        function() {
            "use strict";
            var t = i(127),
                o = i.n(t),
                n = i(7525);
            i(6367), i(3079), i(3991), i(4531), i(735), (0, n.importFilesUnderPath)(i(7837)), t = i(4256), (0, n.templateCacheGenerator)(o(), "toastHtmlTemplate", t), (0, n.importFilesUnderPath)(i(9753)), (0, n.importFilesUnderPath)(i(7153)), (0, n.importFilesUnderPath)(i(6398)), (0, n.importFilesUnderPath)(i(6294)), (0, n.importFilesUnderPath)(i(8841)), t = i(6390), (0, n.templateCacheGenerator)(o(), "modalHtmlTemplate", t), (0, n.importFilesUnderPath)(i(4605)), t = i(8080), (0, n.templateCacheGenerator)(o(), "limitedIconTemplate", t)
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/f629dd7780e2d6ecc822195e238cc3fd-styleGuide.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("StyleGuide");