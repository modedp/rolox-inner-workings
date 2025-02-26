! function() {
    "use strict";

    function e() {
        return -1 !== (null === window || void 0 === window ? void 0 : window.navigator.userAgent.toUpperCase().indexOf("TRIDENT/")) || -1 !== (null === window || void 0 === window ? void 0 : window.navigator.userAgent.toUpperCase().indexOf("MSIE"))
    }
    var i = {
            isIos13Ipad: !!window.navigator && "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints,
            isMac: -1 < (null === window || void 0 === window ? void 0 : window.navigator.platform.toUpperCase().indexOf("MAC")),
            isWindows: -1 < (null === window || void 0 === window ? void 0 : window.navigator.platform.toUpperCase().indexOf("WIN")),
            isIE: e(),
            isIE11: e() && !!/rv[: ]\d+./.exec(null === window || void 0 === window ? void 0 : window.navigator.userAgent)
        },
        n = {
            android: "android",
            ios: "ios",
            xbox: "xbox",
            uwp: "uwp",
            amazon: "amazon",
            win32: "win32",
            universalapp: " universalApp",
            unknown: "unknown"
        },
        o = {
            computer: "computer",
            tablet: "tablet",
            phone: "phone",
            console: "console"
        },
        t = {
            getDeviceMeta: function() {
                var e = document.querySelector('meta[name="device-meta"]');
                if (null === e) return console.debug("Error loading device information from meta tag - please check if meta tag is present"), null;
                e = e.dataset || {};
                return {
                    deviceType: e.deviceType && o[e.deviceType] || "",
                    appType: e.appType && n[e.appType] || "",
                    isInApp: "true" === e.isInApp,
                    isDesktop: "true" === e.isDesktop,
                    isPhone: "true" === e.isPhone,
                    isTablet: "true" === e.isTablet,
                    isConsole: "true" === e.isConsole,
                    isAndroidApp: "true" === e.isAndroidApp,
                    isIosApp: "true" === e.isIosApp,
                    isUWPApp: "true" === e.isUwpApp,
                    isXboxApp: "true" === e.isXboxApp,
                    isAmazonApp: "true" === e.isAmazonApp,
                    isWin32App: "true" === e.isWin32App,
                    isStudio: "true" === e.isStudio,
                    isIosDevice: "true" === e.isIosDevice,
                    isAndroidDevice: "true" === e.isAndroidDevice,
                    isUniversalApp: "true" === e.isUniversalApp,
                    isChromeOs: "true" === e.isChromeOs
                }
            },
            AppTypes: n,
            DeviceTypes: o
        },
        d = {
            isAuthenticated: !!(d = function() {
                var e = document.querySelector('meta[name="user-data"]');
                return null !== (e = null == e ? void 0 : e.dataset) && void 0 !== e ? e : null
            })(),
            isUnder13: "true" === (null === (s = d()) || void 0 === s ? void 0 : s.isunder13),
            name: null !== (s = null === (s = d()) || void 0 === s ? void 0 : s.name) && void 0 !== s ? s : null,
            id: null !== (s = d()) && void 0 !== s && s.userid ? Number.parseInt(null === (s = d()) || void 0 === s ? void 0 : s.userid, 10) : -1,
            isPremiumUser: "true" === (null === (s = d()) || void 0 === s ? void 0 : s.ispremiumuser),
            created: null !== (s = null === (s = d()) || void 0 === s ? void 0 : s.created) && void 0 !== s ? s : null,
            displayName: null !== (s = null === (s = d()) || void 0 === s ? void 0 : s.displayname) && void 0 !== s ? s : null
        },
        s = {
            isTestSite: "true" === (null === (s = null !== (s = null == (s = document.querySelector('meta[name="environment-meta"]')) ? void 0 : s.dataset) && void 0 !== s ? s : null) || void 0 === s ? void 0 : s.isTestingSite)
        };
    window.Roblox.JsClientDeviceIdentifier = i, window.HeaderScripts = {
        jsClientDeviceIdentifier: i,
        authenticatedUser: d,
        environmentSites: s,
        deviceMeta: t
    }
}();
//# sourceMappingURL=https://js.rbxcdn.com/7f2b0e1a95d977764e6a3e84faa444a0-headerScripts.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("HeaderScripts");