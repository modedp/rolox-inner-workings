var a = function(a) {
    void 0 === a && (a = {
        baseUrl: ""
    }), this.configuration = a, this.baseUrl = this.configuration.baseUrl
},
e = function() {
    function e(e) {
        void 0 === e && (e = new a), this.configuration = e, this.baseUrl = e.baseUrl
    }
    return e.prototype.sendEvent = function(a) {
        var e = a.localTime,
            r = a.target,
            n = a.eventType,
            t = a.context,
            s = a.additionalProperties,
            o = a.currentUrl,
            i = a.guestId,
            c = a.sessionId,
            d = e.toISOString(),
            p = new URL("".concat(this.baseUrl, "/pe"));
        return p.searchParams.append("t", r), p.searchParams.append("evt", n), p.searchParams.append("ctx", t), p.searchParams.append("lt", d), p.searchParams.append("url", o || window.location.href), void 0 !== i && p.searchParams.append("gid", i), void 0 !== c && p.searchParams.append("sid", c), void 0 !== s && Object.keys(s).forEach((function(a) {
            var e;
            p.searchParams.append(a, (null !== (e = s[a]) && void 0 !== e ? e : "").toString())
        })), fetch(p.href, {
            credentials: "same-origin"
        })
    }, e.prototype.sendEventViaImg = function(a, e) {
        var r = a.localTime,
            n = a.target,
            t = a.eventType,
            s = a.context,
            o = a.additionalProperties,
            i = a.currentUrl,
            c = a.guestId,
            d = a.sessionId,
            p = r.toISOString(),
            h = new URL("".concat(this.baseUrl, "/e.png"));
        h.searchParams.append("t", n), h.searchParams.append("evt", t), h.searchParams.append("ctx", s), h.searchParams.append("lt", p), h.searchParams.append("url", i || window.location.href), void 0 !== c && h.searchParams.append("gid", c), void 0 !== d && h.searchParams.append("sid", d), void 0 !== o && Object.keys(o).forEach((function(a) {
            var e;
            h.searchParams.append(a, (null !== (e = o[a]) && void 0 !== e ? e : "").toString())
        }));
        var l = new Image;
        return l.src = h.href, l.onload = function() {
            void 0 !== e && e(!0)
        }, l.onerror = function(a) {
            void 0 !== e && e(!1), console.error(a)
        }, l
    }, e
}();
export {
a as Configuration, e as Tracker
};