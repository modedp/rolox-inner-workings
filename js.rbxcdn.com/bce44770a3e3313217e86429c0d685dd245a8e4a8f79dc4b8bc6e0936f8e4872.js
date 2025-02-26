! function() {
    "use strict";
    var t = function(t) {
            var i = document.querySelector('meta[name="environment-meta"]');
            if (null !== (s = null == i ? void 0 : i.dataset) && void 0 !== s && s.domain) return {
                production: "false" === i.dataset.isTestingSite,
                domainName: i.dataset.domain.split(".")[0],
                rootDomain: i.dataset.domain
            };
            var s = t.split(".").reverse();
            if ("roblox.com" == (i = s[1] + "." + s[0]) || "simulprod.com" == i || "rblx.org" == i) return {
                production: !0,
                domainName: "roblox",
                rootDomain: "roblox.com"
            };
            if (0 === (s = s[2]).indexOf("sitetest")) return {
                production: !1,
                domainName: s,
                rootDomain: s + ".robloxlabs.com"
            };
            throw new Error("Unknown environment for " + t)
        }(window.location.hostname),
        i = t.production,
        s = t.domainName,
        i = {
            abtestingApiSite: "https://abtesting." + (t = t.rootDomain),
            accountInformationApi: "https://accountinformation." + t,
            accountSettingsApi: "https://accountsettings." + t,
            adConfigurationApi: "https://adconfiguration." + t,
            adsApi: "https://ads." + t,
            advertiseApi: "https://advertise." + t,
            apiGatewayUrl: "https://apis." + t,
            apiProxyUrl: "https://api." + t,
            assetDeliveryApi: "https://assetdelivery." + t,
            authApi: "https://auth." + t,
            avatarApi: "https://avatar." + t,
            badgesApi: "https://badges." + t,
            billingApi: "https://billing." + t,
            captchaApi: "https://captcha." + t,
            catalogApi: "https://catalog." + t,
            chargebackWizardApi: "https://apis." + t + "/chargeback-wizard",
            chatApi: "https://apis." + t + "/platform-chat-api",
            chatModerationApi: "https://chatmoderation." + t,
            contactsApi: "https://contacts." + t,
            contactsServiceApi: "https://apis." + t + "/contacts-api",
            contentStoreApi: "https://contentstore." + t,
            developApi: "https://develop." + t,
            domain: "" + t,
            economyApi: "https://economy." + t,
            economycreatorstatsApi: "https://economycreatorstats." + t,
            engagementPayoutsApi: "https://engagementpayouts." + t,
            followingsApi: "https://followings." + t,
            friendsApi: "https://friends." + t,
            gameInternationalizationApi: "https://gameinternationalization." + t,
            gamesApi: "https://games." + t,
            gameJoinApi: "https://gamejoin." + t,
            gameUpdateNotificationsApi: "https://apis." + t + "/game-update-notifications",
            groupsApi: "https://groups." + t,
            groupsModerationApi: "https://groupsmoderation." + t,
            helpSite: "https://en.help." + t,
            inventoryApi: "https://inventory." + t,
            itemConfigurationApi: "https://itemconfiguration." + t,
            legacyChatApi: "https://chat." + t,
            localeApi: "https://locale." + t,
            localizationTablesApi: "https://localizationtables." + t,
            matchmakingApi: "https://apis." + t + "/matchmaking-api",
            metricsApi: "https://metrics." + t,
            midasApi: "https://midas." + t,
            notificationApi: "https://notifications." + t,
            passProductPurchasingApi: "https://apis." + t + "/pass-product-purchasing",
            bundlesProductPurchasingApi: "https://apis." + t + "/bundles-product-purchasing",
            premiumFeaturesApi: "https://premiumfeatures." + t,
            presenceApi: "https://presence." + t,
            privateMessagesApi: "https://privatemessages." + t,
            publishApi: "https://publish." + t,
            restrictedHoursServiceApi: "https://apis." + t + "/restricted-hours-service",
            screenTimeApi: "https://apis.rcs.roblox.com/screen-time-api",
            shareApi: "https://share." + t,
            shareLinksApi: "https://apis." + t + "/sharelinks",
            showcasesApi: "https://apis." + t + "/showcases-api",
            thumbnailsApi: "https://thumbnails." + t,
            tradesApi: "https://trades." + t,
            translationRolesApi: "https://translationroles." + t,
            twoStepVerificationApi: "https://twostepverification." + t,
            universalAppConfigurationApi: "https://apis." + t + "/universal-app-configuration",
            userAgreementsServiceApi: "https://apis." + t + "/user-agreements",
            userModerationApi: "https://usermoderation." + t,
            usersApi: "https://users." + t,
            userSettingsApi: "https://apis." + t + "/user-settings-api",
            voiceApi: "https://voice." + t,
            websiteUrl: "https://www." + t,
            apiGatewayCdnUrl: i ? "https://apis.rbxcdn.com" : "https://apis." + t,
            eduAuthenticationApi: i ? "https://auth.rblx.org" : "https://auth." + s + ".rblx.org",
            eduWebsiteUrl: i ? "https://www.rblx.org" : "https://www." + s + ".rblx.org",
            guildedBaseUrl: i ? "https://guilded.gg" : "https://tarobi-dev-test.com",
            vngGamesShopUrl: i ? "https://shop.vnggames.com/vn/game/roblox" : "https://sbx-shop.vnggames.com/vn/game/roblox",
            amazonStoreLink: "https://www.amazon.com/Roblox-Corporation/dp/B00NUF4YOA",
            amazonWebStoreLink: "https%3a%2f%2fwww.amazon.com%2froblox%3f%26_encoding%3dUTF8%26tag%3dr05d13-20%26linkCode%3dur2%26linkId%3d5562fc29c05b45562a86358c198356eb%26camp%3d1789%26creative%3d9325",
            appProtocolUrl: "robloxmobile://",
            appStoreLink: "https://itunes.apple.com/us/app/roblox-mobile/id431946152",
            googlePlayStoreLink: "https://play.google.com/store/apps/details?id=com.roblox.client&amp;hl=en",
            iosAppStoreLink: "https://itunes.apple.com/us/app/roblox-mobile/id431946152",
            windowsStoreLink: "https://www.microsoft.com/en-us/store/games/roblox/9nblgggzm6wm",
            xboxStoreLink: "https://www.microsoft.com/en-us/p/roblox/bq1tn1t79v9k"
        };
    window.Roblox = window.Roblox || {}, window.Roblox.EnvironmentUrls = i
}();
//# sourceMappingURL=https://js.rbxcdn.com/b615cbf3e6a16c4c0ce733b44067643d-environmentUrls.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("EnvironmentUrls");