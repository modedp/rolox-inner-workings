! function() {
    var r = {
            6660: function(e, t, r) {
                e.exports = r(8226)
            },
            8427: function(e, t, u) {
                "use strict";
                var c = u(4345),
                    l = u(6435),
                    h = u(3025),
                    p = u(6135),
                    f = u(6923),
                    d = u(1792);
                e.exports = function(s) {
                    return new Promise(function(t, r) {
                        var n = s.data,
                            a = s.headers;
                        c.isFormData(n) && delete a["Content-Type"];
                        var e, o, i = new XMLHttpRequest;
                        if (s.auth && (e = s.auth.username || "", o = s.auth.password || "", a.Authorization = "Basic " + btoa(e + ":" + o)), i.open(s.method.toUpperCase(), h(s.url, s.params, s.paramsSerializer), !0), i.timeout = s.timeout, i.onreadystatechange = function() {
                                var e;
                                i && 4 === i.readyState && (0 !== i.status || i.responseURL && 0 === i.responseURL.indexOf("file:")) && (e = "getAllResponseHeaders" in i ? p(i.getAllResponseHeaders()) : null, e = {
                                    data: s.responseType && "text" !== s.responseType ? i.response : i.responseText,
                                    status: i.status,
                                    statusText: i.statusText,
                                    headers: e,
                                    config: s,
                                    request: i
                                }, l(t, r, e), i = null)
                            }, i.onerror = function() {
                                r(d("Network Error", s, null, i)), i = null
                            }, i.ontimeout = function() {
                                r(d("timeout of " + s.timeout + "ms exceeded", s, "ECONNABORTED", i)), i = null
                            }, c.isStandardBrowserEnv() && (o = u(5905), (o = (s.withCredentials || f(s.url)) && s.xsrfCookieName ? o.read(s.xsrfCookieName) : void 0) && (a[s.xsrfHeaderName] = o)), "setRequestHeader" in i && c.forEach(a, function(e, t) {
                                void 0 === n && "content-type" === t.toLowerCase() ? delete a[t] : i.setRequestHeader(t, e)
                            }), s.withCredentials && (i.withCredentials = !0), s.responseType) try {
                            i.responseType = s.responseType
                        } catch (e) {
                            if ("json" !== s.responseType) throw e
                        }
                        "function" == typeof s.onDownloadProgress && i.addEventListener("progress", s.onDownloadProgress), "function" == typeof s.onUploadProgress && i.upload && i.upload.addEventListener("progress", s.onUploadProgress), s.cancelToken && s.cancelToken.promise.then(function(e) {
                            i && (i.abort(), r(e), i = null)
                        }), void 0 === n && (n = null), i.send(n)
                    })
                }
            },
            8226: function(e, t, r) {
                "use strict";
                var n = r(4345),
                    a = r(5063),
                    o = r(9560),
                    i = r(292);

                function s(e) {
                    var t = new o(e),
                        e = a(o.prototype.request, t);
                    return n.extend(e, o.prototype, t), n.extend(e, t), e
                }
                var u = s(i);
                u.Axios = o, u.create = function(e) {
                    return s(n.merge(i, e))
                }, u.Cancel = r(9945), u.CancelToken = r(5912), u.isCancel = r(6945), u.all = function(e) {
                    return Promise.all(e)
                }, u.spread = r(8127), e.exports = u, e.exports.default = u
            },
            9945: function(e) {
                "use strict";

                function t(e) {
                    this.message = e
                }
                t.prototype.toString = function() {
                    return "Cancel" + (this.message ? ": " + this.message : "")
                }, t.prototype.__CANCEL__ = !0, e.exports = t
            },
            5912: function(e, t, r) {
                "use strict";
                var n = r(9945);

                function a(e) {
                    if ("function" != typeof e) throw new TypeError("executor must be a function.");
                    var t;
                    this.promise = new Promise(function(e) {
                        t = e
                    });
                    var r = this;
                    e(function(e) {
                        r.reason || (r.reason = new n(e), t(r.reason))
                    })
                }
                a.prototype.throwIfRequested = function() {
                    if (this.reason) throw this.reason
                }, a.source = function() {
                    var t;
                    return {
                        token: new a(function(e) {
                            t = e
                        }),
                        cancel: t
                    }
                }, e.exports = a
            },
            6945: function(e) {
                "use strict";
                e.exports = function(e) {
                    return !(!e || !e.__CANCEL__)
                }
            },
            9560: function(e, t, r) {
                "use strict";
                var a = r(292),
                    o = r(4345),
                    n = r(546),
                    i = r(1617);

                function s(e) {
                    this.defaults = e, this.interceptors = {
                        request: new n,
                        response: new n
                    }
                }
                s.prototype.request = function(e, t) {
                    "string" == typeof e && (e = o.merge({
                        url: arguments[0]
                    }, t)), (e = o.merge(a, {
                        method: "get"
                    }, this.defaults, e)).method = e.method.toLowerCase();
                    var r = [i, void 0],
                        n = Promise.resolve(e);
                    for (this.interceptors.request.forEach(function(e) {
                            r.unshift(e.fulfilled, e.rejected)
                        }), this.interceptors.response.forEach(function(e) {
                            r.push(e.fulfilled, e.rejected)
                        }); r.length;) n = n.then(r.shift(), r.shift());
                    return n
                }, o.forEach(["delete", "get", "head", "options"], function(r) {
                    s.prototype[r] = function(e, t) {
                        return this.request(o.merge(t || {}, {
                            method: r,
                            url: e
                        }))
                    }
                }), o.forEach(["post", "put", "patch"], function(n) {
                    s.prototype[n] = function(e, t, r) {
                        return this.request(o.merge(r || {}, {
                            method: n,
                            url: e,
                            data: t
                        }))
                    }
                }), e.exports = s
            },
            546: function(e, t, r) {
                "use strict";
                var n = r(4345);

                function a() {
                    this.handlers = []
                }
                a.prototype.use = function(e, t) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t
                    }), this.handlers.length - 1
                }, a.prototype.eject = function(e) {
                    this.handlers[e] && (this.handlers[e] = null)
                }, a.prototype.forEach = function(t) {
                    n.forEach(this.handlers, function(e) {
                        null !== e && t(e)
                    })
                }, e.exports = a
            },
            1792: function(e, t, r) {
                "use strict";
                var o = r(7148);
                e.exports = function(e, t, r, n, a) {
                    e = new Error(e);
                    return o(e, t, r, n, a)
                }
            },
            1617: function(e, t, r) {
                "use strict";
                var n = r(4345),
                    a = r(7638),
                    o = r(6945),
                    i = r(292),
                    s = r(4860),
                    u = r(7825);

                function c(e) {
                    e.cancelToken && e.cancelToken.throwIfRequested()
                }
                e.exports = function(t) {
                    return c(t), t.baseURL && !s(t.url) && (t.url = u(t.baseURL, t.url)), t.headers = t.headers || {}, t.data = a(t.data, t.headers, t.transformRequest), t.headers = n.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) {
                        delete t.headers[e]
                    }), (t.adapter || i.adapter)(t).then(function(e) {
                        return c(t), e.data = a(e.data, e.headers, t.transformResponse), e
                    }, function(e) {
                        return o(e) || (c(t), e && e.response && (e.response.data = a(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
                    })
                }
            },
            7148: function(e) {
                "use strict";
                e.exports = function(e, t, r, n, a) {
                    return e.config = t, r && (e.code = r), e.request = n, e.response = a, e
                }
            },
            6435: function(e, t, r) {
                "use strict";
                var a = r(1792);
                e.exports = function(e, t, r) {
                    var n = r.config.validateStatus;
                    r.status && n && !n(r.status) ? t(a("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r)
                }
            },
            7638: function(e, t, r) {
                "use strict";
                var n = r(4345);
                e.exports = function(t, r, e) {
                    return n.forEach(e, function(e) {
                        t = e(t, r)
                    }), t
                }
            },
            292: function(e, t, r) {
                "use strict";
                var n = r(4345),
                    a = r(2327),
                    o = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };

                function i(e, t) {
                    !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }
                var s, u = {
                    adapter: ("undefined" == typeof XMLHttpRequest && "undefined" == typeof process || (s = r(8427)), s),
                    transformRequest: [function(e, t) {
                        return a(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                    }],
                    transformResponse: [function(e) {
                        if ("string" == typeof e) try {
                            e = JSON.parse(e)
                        } catch (e) {}
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function(e) {
                        return 200 <= e && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                n.forEach(["delete", "get", "head"], function(e) {
                    u.headers[e] = {}
                }), n.forEach(["post", "put", "patch"], function(e) {
                    u.headers[e] = n.merge(o)
                }), e.exports = u
            },
            5063: function(e) {
                "use strict";
                e.exports = function(r, n) {
                    return function() {
                        for (var e = new Array(arguments.length), t = 0; t < e.length; t++) e[t] = arguments[t];
                        return r.apply(n, e)
                    }
                }
            },
            3025: function(e, t, r) {
                "use strict";
                var a = r(4345);

                function o(e) {
                    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                }
                e.exports = function(e, t, r) {
                    if (!t) return e;
                    var n, t = r ? r(t) : a.isURLSearchParams(t) ? t.toString() : (n = [], a.forEach(t, function(e, t) {
                        null != e && (a.isArray(e) ? t += "[]" : e = [e], a.forEach(e, function(e) {
                            a.isDate(e) ? e = e.toISOString() : a.isObject(e) && (e = JSON.stringify(e)), n.push(o(t) + "=" + o(e))
                        }))
                    }), n.join("&"));
                    return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
                }
            },
            7825: function(e) {
                "use strict";
                e.exports = function(e, t) {
                    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                }
            },
            5905: function(e, t, r) {
                "use strict";
                var s = r(4345);
                e.exports = s.isStandardBrowserEnv() ? {
                    write: function(e, t, r, n, a, o) {
                        var i = [];
                        i.push(e + "=" + encodeURIComponent(t)), s.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), s.isString(n) && i.push("path=" + n), s.isString(a) && i.push("domain=" + a), !0 === o && i.push("secure"), document.cookie = i.join("; ")
                    },
                    read: function(e) {
                        e = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return e ? decodeURIComponent(e[3]) : null
                    },
                    remove: function(e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                } : {
                    write: function() {},
                    read: function() {
                        return null
                    },
                    remove: function() {}
                }
            },
            4860: function(e) {
                "use strict";
                e.exports = function(e) {
                    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
                }
            },
            6923: function(e, t, r) {
                "use strict";
                var n, a, o, i = r(4345);

                function s(e) {
                    return a && (o.setAttribute("href", e), e = o.href), o.setAttribute("href", e), {
                        href: o.href,
                        protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                        host: o.host,
                        search: o.search ? o.search.replace(/^\?/, "") : "",
                        hash: o.hash ? o.hash.replace(/^#/, "") : "",
                        hostname: o.hostname,
                        port: o.port,
                        pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
                    }
                }
                e.exports = i.isStandardBrowserEnv() ? (a = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a"), n = s(window.location.href), function(e) {
                    e = i.isString(e) ? s(e) : e;
                    return e.protocol === n.protocol && e.host === n.host
                }) : function() {
                    return !0
                }
            },
            2327: function(e, t, r) {
                "use strict";
                var a = r(4345);
                e.exports = function(r, n) {
                    a.forEach(r, function(e, t) {
                        t !== n && t.toUpperCase() === n.toUpperCase() && (r[n] = e, delete r[t])
                    })
                }
            },
            6135: function(e, t, r) {
                "use strict";
                var a = r(4345),
                    o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
                e.exports = function(e) {
                    var t, r, n = {};
                    return e && a.forEach(e.split("\n"), function(e) {
                        r = e.indexOf(":"), t = a.trim(e.substr(0, r)).toLowerCase(), r = a.trim(e.substr(r + 1)), t && (n[t] && 0 <= o.indexOf(t) || (n[t] = "set-cookie" === t ? (n[t] || []).concat([r]) : n[t] ? n[t] + ", " + r : r))
                    }), n
                }
            },
            8127: function(e) {
                "use strict";
                e.exports = function(t) {
                    return function(e) {
                        return t.apply(null, e)
                    }
                }
            },
            4345: function(e, t, r) {
                "use strict";
                var a = r(5063),
                    r = r(5703),
                    n = Object.prototype.toString;

                function o(e) {
                    return "[object Array]" === n.call(e)
                }

                function i(e) {
                    return null !== e && "object" == typeof e
                }

                function s(e) {
                    return "[object Function]" === n.call(e)
                }

                function u(e, t) {
                    if (null != e)
                        if ("object" != typeof e && (e = [e]), o(e))
                            for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
                        else
                            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
                }
                e.exports = {
                    isArray: o,
                    isArrayBuffer: function(e) {
                        return "[object ArrayBuffer]" === n.call(e)
                    },
                    isBuffer: r,
                    isFormData: function(e) {
                        return "undefined" != typeof FormData && e instanceof FormData
                    },
                    isArrayBufferView: function(e) {
                        return e = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                    },
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isNumber: function(e) {
                        return "number" == typeof e
                    },
                    isObject: i,
                    isUndefined: function(e) {
                        return void 0 === e
                    },
                    isDate: function(e) {
                        return "[object Date]" === n.call(e)
                    },
                    isFile: function(e) {
                        return "[object File]" === n.call(e)
                    },
                    isBlob: function(e) {
                        return "[object Blob]" === n.call(e)
                    },
                    isFunction: s,
                    isStream: function(e) {
                        return i(e) && s(e.pipe)
                    },
                    isURLSearchParams: function(e) {
                        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                    },
                    isStandardBrowserEnv: function() {
                        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
                    },
                    forEach: u,
                    merge: function r() {
                        var n = {};

                        function e(e, t) {
                            "object" == typeof n[t] && "object" == typeof e ? n[t] = r(n[t], e) : n[t] = e
                        }
                        for (var t = 0, a = arguments.length; t < a; t++) u(arguments[t], e);
                        return n
                    },
                    extend: function(r, e, n) {
                        return u(e, function(e, t) {
                            r[t] = n && "function" == typeof e ? a(e, n) : e
                        }), r
                    },
                    trim: function(e) {
                        return e.replace(/^\s*/, "").replace(/\s*$/, "")
                    }
                }
            },
            6022: function(e) {
                "use strict";

                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                var t = "%[a-f0-9]{2}",
                    a = new RegExp(t, "gi"),
                    s = new RegExp("(" + t + ")+", "gi");

                function u(t) {
                    try {
                        return decodeURIComponent(t)
                    } catch (e) {
                        for (var r = t.match(a), n = 1; n < r.length; n++) r = (t = function e(t, r) {
                            try {
                                return decodeURIComponent(t.join(""))
                            } catch (e) {}
                            if (1 === t.length) return t;
                            r = r || 1;
                            var n = t.slice(0, r),
                                r = t.slice(r);
                            return Array.prototype.concat.call([], e(n), e(r))
                        }(r, n).join("")).match(a);
                        return t
                    }
                }
                e.exports = function(t) {
                    if ("string" != typeof t) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + r(t) + "`");
                    try {
                        return t = t.replace(/\+/g, " "), decodeURIComponent(t)
                    } catch (e) {
                        return function(e) {
                            for (var t = {
                                    "%FE%FF": "��",
                                    "%FF%FE": "��"
                                }, r = s.exec(e); r;) {
                                try {
                                    t[r[0]] = decodeURIComponent(r[0])
                                } catch (e) {
                                    var n = u(r[0]);
                                    n !== r[0] && (t[r[0]] = n)
                                }
                                r = s.exec(e)
                            }
                            t["%C2"] = "�";
                            for (var a = Object.keys(t), o = 0; o < a.length; o++) {
                                var i = a[o];
                                e = e.replace(new RegExp(i, "g"), t[i])
                            }
                            return e
                        }(t)
                    }
                }
            },
            4343: function(e, s, t) {
                "use strict";

                function d(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                        var r = [],
                            n = !0,
                            a = !1,
                            o = void 0;
                        try {
                            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                        } catch (e) {
                            a = !0, o = e
                        } finally {
                            try {
                                n || null == s.return || s.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return r
                    }(e, t) || m(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function g(e) {
                    return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function c(e) {
                    return function(e) {
                        if (Array.isArray(e)) return n(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                    }(e) || m(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function m(e, t) {
                    if (e) {
                        if ("string" == typeof e) return n(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                    }
                }

                function n(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n
                }
                var r = t(8904),
                    a = t(6022),
                    y = t(2368);

                function v(e) {
                    if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
                }

                function l(e, t) {
                    return t.encode ? (t.strict ? r : encodeURIComponent)(e) : e
                }

                function b(e, t) {
                    return t.decode ? a(e) : e
                }

                function u(e) {
                    var t = e.indexOf("#");
                    return -1 !== t && (e = e.slice(0, t)), e
                }

                function o(e) {
                    var t = (e = u(e)).indexOf("?");
                    return -1 === t ? "" : e.slice(t + 1)
                }

                function P(e, t) {
                    return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
                }

                function i(e, t) {
                    v((t = Object.assign({
                        decode: !0,
                        sort: !0,
                        arrayFormat: "none",
                        arrayFormatSeparator: ",",
                        parseNumbers: !1,
                        parseBooleans: !1
                    }, t)).arrayFormatSeparator);
                    var r = function(o) {
                            var n;
                            switch (o.arrayFormat) {
                                case "index":
                                    return function(e, t, r) {
                                        n = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), n ? (void 0 === r[e] && (r[e] = {}), r[e][n[1]] = t) : r[e] = t
                                    };
                                case "bracket":
                                    return function(e, t, r) {
                                        n = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), n ? void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = [t] : r[e] = t
                                    };
                                case "comma":
                                case "separator":
                                    return function(e, t, r) {
                                        var n = "string" == typeof t && t.includes(o.arrayFormatSeparator),
                                            a = "string" == typeof t && !n && b(t, o).includes(o.arrayFormatSeparator);
                                        t = a ? b(t, o) : t;
                                        t = n || a ? t.split(o.arrayFormatSeparator).map(function(e) {
                                            return b(e, o)
                                        }) : null === t ? t : b(t, o);
                                        r[e] = t
                                    };
                                default:
                                    return function(e, t, r) {
                                        void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
                                    }
                            }
                        }(t),
                        n = Object.create(null);
                    if ("string" != typeof e) return n;
                    if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
                    var a = function(e, t) {
                        var r;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (r = m(e)) || t && e && "number" == typeof e.length) {
                                r && (e = r);
                                var n = 0,
                                    t = function() {};
                                return {
                                    s: t,
                                    n: function() {
                                        return n >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[n++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: t
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var a, o = !0,
                            i = !1;
                        return {
                            s: function() {
                                r = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = r.next();
                                return o = e.done, e
                            },
                            e: function(e) {
                                i = !0, a = e
                            },
                            f: function() {
                                try {
                                    o || null == r.return || r.return()
                                } finally {
                                    if (i) throw a
                                }
                            }
                        }
                    }(e.split("&"));
                    try {
                        for (a.s(); !(i = a.n()).done;) {
                            var o = i.value,
                                i = d(y(t.decode ? o.replace(/\+/g, " ") : o, "="), 2),
                                o = i[0],
                                i = void 0 === (i = i[1]) ? null : ["comma", "separator"].includes(t.arrayFormat) ? i : b(i, t);
                            r(b(o, t), i, n)
                        }
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                    for (var s = 0, u = Object.keys(n); s < u.length; s++) {
                        var c = u[s],
                            l = n[c];
                        if ("object" === g(l) && null !== l)
                            for (var h = 0, p = Object.keys(l); h < p.length; h++) {
                                var f = p[h];
                                l[f] = P(l[f], t)
                            } else n[c] = P(l, t)
                    }
                    return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce(function(e, t) {
                        var r = n[t];
                        return Boolean(r) && "object" === g(r) && !Array.isArray(r) ? e[t] = function e(t) {
                            return Array.isArray(t) ? t.sort() : "object" === g(t) ? e(Object.keys(t)).sort(function(e, t) {
                                return Number(e) - Number(t)
                            }).map(function(e) {
                                return t[e]
                            }) : t
                        }(r) : e[t] = r, e
                    }, Object.create(null))
                }
                s.extract = o, s.parse = i, s.stringify = function(r, n) {
                    if (!r) return "";
                    v((n = Object.assign({
                        encode: !0,
                        strict: !0,
                        arrayFormat: "none",
                        arrayFormatSeparator: ","
                    }, n)).arrayFormatSeparator);
                    for (var e, a = function(a) {
                            switch (a.arrayFormat) {
                                case "index":
                                    return function(n) {
                                        return function(e, t) {
                                            var r = e.length;
                                            return void 0 === t || a.skipNull && null === t || a.skipEmptyString && "" === t ? e : [].concat(c(e), null === t ? [
                                                [l(n, a), "[", r, "]"].join("")
                                            ] : [
                                                [l(n, a), "[", l(r, a), "]=", l(t, a)].join("")
                                            ])
                                        }
                                    };
                                case "bracket":
                                    return function(r) {
                                        return function(e, t) {
                                            return void 0 === t || a.skipNull && null === t || a.skipEmptyString && "" === t ? e : [].concat(c(e), null === t ? [
                                                [l(r, a), "[]"].join("")
                                            ] : [
                                                [l(r, a), "[]=", l(t, a)].join("")
                                            ])
                                        }
                                    };
                                case "comma":
                                case "separator":
                                    return function(r) {
                                        return function(e, t) {
                                            return null == t || 0 === t.length ? e : 0 === e.length ? [
                                                [l(r, a), "=", l(t, a)].join("")
                                            ] : [
                                                [e, l(t, a)].join(a.arrayFormatSeparator)
                                            ]
                                        }
                                    };
                                default:
                                    return function(r) {
                                        return function(e, t) {
                                            return void 0 === t || a.skipNull && null === t || a.skipEmptyString && "" === t ? e : [].concat(c(e), null === t ? [l(r, a)] : [
                                                [l(r, a), "=", l(t, a)].join("")
                                            ])
                                        }
                                    }
                            }
                        }(n), t = {}, o = 0, i = Object.keys(r); o < i.length; o++) {
                        var s = i[o];
                        e = s, n.skipNull && null == r[e] || n.skipEmptyString && "" === r[e] || (t[s] = r[s])
                    }
                    var u = Object.keys(t);
                    return !1 !== n.sort && u.sort(n.sort), u.map(function(e) {
                        var t = r[e];
                        return void 0 === t ? "" : null === t ? l(e, n) : Array.isArray(t) ? t.reduce(a(e), []).join("&") : l(e, n) + "=" + l(t, n)
                    }).filter(function(e) {
                        return 0 < e.length
                    }).join("&")
                }, s.parseUrl = function(e, t) {
                    t = Object.assign({
                        decode: !0
                    }, t);
                    var r = d(y(e, "#"), 2),
                        n = r[0],
                        r = r[1];
                    return Object.assign({
                        url: n.split("?")[0] || "",
                        query: i(o(e), t)
                    }, t && t.parseFragmentIdentifier && r ? {
                        fragmentIdentifier: b(r, t)
                    } : {})
                }, s.stringifyUrl = function(e, t) {
                    t = Object.assign({
                        encode: !0,
                        strict: !0
                    }, t);
                    var r = u(e.url).split("?")[0] || "",
                        n = s.extract(e.url),
                        a = s.parse(n, {
                            sort: !1
                        }),
                        o = Object.assign(a, e.query),
                        i = (i = s.stringify(o, t)) && "?".concat(i),
                        a = (n = e.url, a = "", -1 !== (o = n.indexOf("#")) && (a = n.slice(o)), a);
                    return e.fragmentIdentifier && (a = "#".concat(l(e.fragmentIdentifier, t))), "".concat(r).concat(i).concat(a)
                }
            },
            2368: function(e) {
                "use strict";
                e.exports = function(e, t) {
                    if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
                    if ("" === t) return [e];
                    var r = e.indexOf(t);
                    return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)]
                }
            },
            8904: function(e) {
                "use strict";
                e.exports = function(e) {
                    return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                        return "%".concat(e.charCodeAt(0).toString(16).toUpperCase())
                    })
                }
            },
            5703: function(e) {
                /*!
                 * Determine if an object is a Buffer
                 *
                 * @author   Feross Aboukhadijeh <https://feross.org>
                 * @license  MIT
                 */
                e.exports = function(e) {
                    return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                }
            },
            9470: function(f, g, m) {
                var I; /*! https://mths.be/punycode v1.3.2 by @mathias */
                f = m.nmd(f),
                    function() {
                        g && g.nodeType, f && f.nodeType;
                        var e = "object" == typeof m.g && m.g;
                        e.global !== e && e.window !== e && e.self;
                        var t, y = 2147483647,
                            v = 36,
                            b = 1,
                            P = 26,
                            a = 38,
                            o = 700,
                            w = 72,
                            S = 128,
                            x = "-",
                            r = /^xn--/,
                            n = /[^\x20-\x7E]/,
                            i = /[\x2E\u3002\uFF0E\uFF61]/g,
                            s = {
                                overflow: "Overflow: input needs wider integers to process",
                                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                "invalid-input": "Invalid input"
                            },
                            u = v - b,
                            C = Math.floor,
                            A = String.fromCharCode;

                        function T(e) {
                            throw RangeError(s[e])
                        }

                        function c(e, t) {
                            for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
                            return n
                        }

                        function l(e, t) {
                            var r = e.split("@"),
                                n = "";
                            return 1 < r.length && (n = r[0] + "@", e = r[1]), n + c((e = e.replace(i, ".")).split("."), t).join(".")
                        }

                        function E(e) {
                            for (var t, r, n = [], a = 0, o = e.length; a < o;) 55296 <= (t = e.charCodeAt(a++)) && t <= 56319 && a < o ? 56320 == (64512 & (r = e.charCodeAt(a++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), a--) : n.push(t);
                            return n
                        }

                        function d(e) {
                            return c(e, function(e) {
                                var t = "";
                                return 65535 < e && (t += A((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += A(e)
                            }).join("")
                        }

                        function k(e, t) {
                            return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                        }

                        function N(e, t, r) {
                            var n = 0;
                            for (e = r ? C(e / o) : e >> 1, e += C(e / t); u * P >> 1 < e; n += v) e = C(e / u);
                            return C(n + (u + 1) * e / (e + a))
                        }

                        function h(e) {
                            var t, r, n, a, o, i, s, u = [],
                                c = e.length,
                                l = 0,
                                h = S,
                                p = w,
                                f = e.lastIndexOf(x);
                            for (f < 0 && (f = 0), r = 0; r < f; ++r) 128 <= e.charCodeAt(r) && T("not-basic"), u.push(e.charCodeAt(r));
                            for (n = 0 < f ? f + 1 : 0; n < c;) {
                                for (a = l, o = 1, i = v; c <= n && T("invalid-input"), s = e.charCodeAt(n++), (v <= (s = s - 48 < 10 ? s - 22 : s - 65 < 26 ? s - 65 : s - 97 < 26 ? s - 97 : v) || s > C((y - l) / o)) && T("overflow"), l += s * o, !(s < (s = i <= p ? b : p + P <= i ? P : i - p)); i += v) o > C(y / (s = v - s)) && T("overflow"), o *= s;
                                p = N(l - a, t = u.length + 1, 0 == a), C(l / t) > y - h && T("overflow"), h += C(l / t), l %= t, u.splice(l++, 0, h)
                            }
                            return d(u)
                        }

                        function p(e) {
                            for (var t, r, n, a, o, i, s, u, c, l, h, p = [], f = (e = E(e)).length, d = S, g = w, m = t = 0; m < f; ++m)(u = e[m]) < 128 && p.push(A(u));
                            for (r = n = p.length, n && p.push(x); r < f;) {
                                for (a = y, m = 0; m < f; ++m) d <= (u = e[m]) && u < a && (a = u);
                                for (a - d > C((y - t) / (c = r + 1)) && T("overflow"), t += (a - d) * c, d = a, m = 0; m < f; ++m)
                                    if ((u = e[m]) < d && ++t > y && T("overflow"), u == d) {
                                        for (o = t, i = v; !(o < (s = i <= g ? b : g + P <= i ? P : i - g)); i += v) h = o - s, l = v - s, p.push(A(k(s + h % l, 0))), o = C(h / l);
                                        p.push(A(k(o, 0))), g = N(t, c, r == n), t = 0, ++r
                                    }++t, ++d
                            }
                            return p.join("")
                        }
                        t = {
                            version: "1.3.2",
                            ucs2: {
                                decode: E,
                                encode: d
                            },
                            decode: h,
                            encode: p,
                            toASCII: function(e) {
                                return l(e, function(e) {
                                    return n.test(e) ? "xn--" + p(e) : e
                                })
                            },
                            toUnicode: function(e) {
                                return l(e, function(e) {
                                    return r.test(e) ? h(e.slice(4).toLowerCase()) : e
                                })
                            }
                        }, void 0 === (I = function() {
                            return t
                        }.call(g, m, g, f)) || (f.exports = I)
                    }()
            },
            3457: function(e) {
                "use strict";
                e.exports = function(e, t, r, n) {
                    t = t || "&", r = r || "=";
                    var a = {};
                    if ("string" != typeof e || 0 === e.length) return a;
                    var o = /\+/g;
                    e = e.split(t);
                    t = 1e3;
                    n && "number" == typeof n.maxKeys && (t = n.maxKeys);
                    var i = e.length;
                    0 < t && t < i && (i = t);
                    for (var s = 0; s < i; ++s) {
                        var u, c = e[s].replace(o, "%20"),
                            l = c.indexOf(r),
                            h = 0 <= l ? (u = c.substr(0, l), c.substr(l + 1)) : (u = c, ""),
                            p = decodeURIComponent(u),
                            l = decodeURIComponent(h);
                        c = a, h = p, Object.prototype.hasOwnProperty.call(c, h) ? Array.isArray(a[p]) ? a[p].push(l) : a[p] = [a[p], l] : a[p] = l
                    }
                    return a
                }
            },
            9737: function(e) {
                "use strict";

                function o(e) {
                    switch (typeof e) {
                        case "string":
                            return e;
                        case "boolean":
                            return e ? "true" : "false";
                        case "number":
                            return isFinite(e) ? e : "";
                        default:
                            return ""
                    }
                }
                e.exports = function(r, n, a, e) {
                    return n = n || "&", a = a || "=", null === r && (r = void 0), "object" == typeof r ? Object.keys(r).map(function(e) {
                        var t = encodeURIComponent(o(e)) + a;
                        return Array.isArray(r[e]) ? r[e].map(function(e) {
                            return t + encodeURIComponent(o(e))
                        }).join(n) : t + encodeURIComponent(o(r[e]))
                    }).join(n) : e ? encodeURIComponent(o(e)) + a + encodeURIComponent(o(r)) : ""
                }
            },
            3215: function(e, t, r) {
                "use strict";
                t.decode = t.parse = r(3457), t.encode = t.stringify = r(9737)
            },
            5442: function(e, t, r) {
                "use strict";
                var T = r(9470),
                    E = r(2539);

                function w() {
                    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
                }
                t.qg = a, t.hd = function(e, t) {
                    return a(e, !1, !0).resolve(t)
                }, t.GP = function(e) {
                    E.isString(e) && (e = a(e));
                    return e instanceof w ? e.format() : w.prototype.format.call(e)
                };
                var k = /^([a-z0-9.+-]+:)/i,
                    n = /:[0-9]*$/,
                    N = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                    t = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                    I = ["'"].concat(t),
                    F = ["%", "/", "?", ";", "#"].concat(I),
                    L = ["/", "?", "#"],
                    R = /^[+a-z0-9A-Z_-]{0,63}$/,
                    O = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                    j = {
                        javascript: !0,
                        "javascript:": !0
                    },
                    M = {
                        javascript: !0,
                        "javascript:": !0
                    },
                    D = {
                        http: !0,
                        https: !0,
                        ftp: !0,
                        gopher: !0,
                        file: !0,
                        "http:": !0,
                        "https:": !0,
                        "ftp:": !0,
                        "gopher:": !0,
                        "file:": !0
                    },
                    U = r(3215);

                function a(e, t, r) {
                    if (e && E.isObject(e) && e instanceof w) return e;
                    var n = new w;
                    return n.parse(e, t, r), n
                }
                w.prototype.parse = function(e, t, r) {
                    if (!E.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
                    var n = e.indexOf("?"),
                        a = -1 !== n && n < e.indexOf("#") ? "?" : "#",
                        n = e.split(a);
                    n[0] = n[0].replace(/\\/g, "/");
                    var o = (o = e = n.join(a)).trim();
                    if (!r && 1 === e.split("#").length) {
                        var i = N.exec(o);
                        if (i) return this.path = o, this.href = o, this.pathname = i[1], i[2] ? (this.search = i[2], this.query = t ? U.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
                    }
                    var s, i = k.exec(o);
                    if (i && (A = (i = i[0]).toLowerCase(), this.protocol = A, o = o.substr(i.length)), (r || i || o.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(s = "//" === o.substr(0, 2)) || i && M[i] || (o = o.substr(2), this.slashes = !0)), !M[i] && (s || i && !D[i])) {
                        for (var u = -1, c = 0; c < L.length; c++) - 1 !== (l = o.indexOf(L[c])) && (-1 === u || l < u) && (u = l); - 1 !== (w = -1 === u ? o.lastIndexOf("@") : o.lastIndexOf("@", u)) && (S = o.slice(0, w), o = o.slice(w + 1), this.auth = decodeURIComponent(S)), u = -1;
                        for (var l, c = 0; c < F.length; c++) - 1 !== (l = o.indexOf(F[c])) && (-1 === u || l < u) && (u = l); - 1 === u && (u = o.length), this.host = o.slice(0, u), o = o.slice(u), this.parseHost(), this.hostname = this.hostname || "";
                        var h = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                        if (!h)
                            for (var p = this.hostname.split(/\./), c = 0, f = p.length; c < f; c++) {
                                var d = p[c];
                                if (d && !d.match(R)) {
                                    for (var g = "", m = 0, y = d.length; m < y; m++) 127 < d.charCodeAt(m) ? g += "x" : g += d[m];
                                    if (!g.match(R)) {
                                        var v = p.slice(0, c),
                                            b = p.slice(c + 1),
                                            P = d.match(O);
                                        P && (v.push(P[1]), b.unshift(P[2])), b.length && (o = "/" + b.join(".") + o), this.hostname = v.join(".");
                                        break
                                    }
                                }
                            }
                        255 < this.hostname.length ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), h || (this.hostname = T.toASCII(this.hostname));
                        var w = this.port ? ":" + this.port : "",
                            S = this.hostname || "";
                        this.host = S + w, this.href += this.host, h && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== o[0] && (o = "/" + o))
                    }
                    if (!j[A])
                        for (c = 0, f = I.length; c < f; c++) {
                            var x, C = I[c]; - 1 !== o.indexOf(C) && ((x = encodeURIComponent(C)) === C && (x = escape(C)), o = o.split(C).join(x))
                        }
                    h = o.indexOf("#"); - 1 !== h && (this.hash = o.substr(h), o = o.slice(0, h));
                    var A, h = o.indexOf("?");
                    return -1 !== h ? (this.search = o.substr(h), this.query = o.substr(h + 1), t && (this.query = U.parse(this.query)), o = o.slice(0, h)) : t && (this.search = "", this.query = {}), o && (this.pathname = o), D[A] && this.hostname && !this.pathname && (this.pathname = "/"), (this.pathname || this.search) && (w = this.pathname || "", A = this.search || "", this.path = w + A), this.href = this.format(), this
                }, w.prototype.format = function() {
                    var e = this.auth || "";
                    e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
                    var t = this.protocol || "",
                        r = this.pathname || "",
                        n = this.hash || "",
                        a = !1,
                        o = "";
                    this.host ? a = e + this.host : this.hostname && (a = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (a += ":" + this.port)), this.query && E.isObject(this.query) && Object.keys(this.query).length && (o = U.stringify(this.query));
                    o = this.search || o && "?" + o || "";
                    return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || D[t]) && !1 !== a ? (a = "//" + (a || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : a = a || "", n && "#" !== n.charAt(0) && (n = "#" + n), o && "?" !== o.charAt(0) && (o = "?" + o), t + a + (r = r.replace(/[?#]/g, function(e) {
                        return encodeURIComponent(e)
                    })) + (o = o.replace("#", "%23")) + n
                }, w.prototype.resolve = function(e) {
                    return this.resolveObject(a(e, !1, !0)).format()
                }, w.prototype.resolveObject = function(e) {
                    E.isString(e) && ((f = new w).parse(e, !1, !0), e = f);
                    for (var t = new w, r = Object.keys(this), n = 0; n < r.length; n++) {
                        var a = r[n];
                        t[a] = this[a]
                    }
                    if (t.hash = e.hash, "" === e.href) return t.href = t.format(), t;
                    if (e.slashes && !e.protocol) {
                        for (var o = Object.keys(e), i = 0; i < o.length; i++) {
                            var s = o[i];
                            "protocol" !== s && (t[s] = e[s])
                        }
                        return D[t.protocol] && t.hostname && !t.pathname && (t.path = t.pathname = "/"), t.href = t.format(), t
                    }
                    if (e.protocol && e.protocol !== t.protocol) {
                        if (!D[e.protocol]) {
                            for (var u = Object.keys(e), c = 0; c < u.length; c++) {
                                var l = u[c];
                                t[l] = e[l]
                            }
                            return t.href = t.format(), t
                        }
                        if (t.protocol = e.protocol, e.host || M[e.protocol]) t.pathname = e.pathname;
                        else {
                            for (var h = (e.pathname || "").split("/"); h.length && !(e.host = h.shift()););
                            e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== h[0] && h.unshift(""), h.length < 2 && h.unshift(""), t.pathname = h.join("/")
                        }
                        return t.search = e.search, t.query = e.query, t.host = e.host || "", t.auth = e.auth, t.hostname = e.hostname || e.host, t.port = e.port, (t.pathname || t.search) && (d = t.pathname || "", g = t.search || "", t.path = d + g), t.slashes = t.slashes || e.slashes, t.href = t.format(), t
                    }
                    var p = t.pathname && "/" === t.pathname.charAt(0),
                        f = e.host || e.pathname && "/" === e.pathname.charAt(0),
                        d = f || p || t.host && e.pathname,
                        g = d,
                        m = t.pathname && t.pathname.split("/") || [],
                        h = e.pathname && e.pathname.split("/") || [],
                        p = t.protocol && !D[t.protocol];
                    if (p && (t.hostname = "", t.port = null, t.host && ("" === m[0] ? m[0] = t.host : m.unshift(t.host)), t.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === h[0] ? h[0] = e.host : h.unshift(e.host)), e.host = null), d = d && ("" === h[0] || "" === m[0])), f) t.host = (e.host || "" === e.host ? e : t).host, t.hostname = (e.hostname || "" === e.hostname ? e : t).hostname, t.search = e.search, t.query = e.query, m = h;
                    else if (h.length)(m = m || []).pop(), m = m.concat(h), t.search = e.search, t.query = e.query;
                    else if (!E.isNullOrUndefined(e.search)) return p && (t.hostname = t.host = m.shift(), (P = !!(t.host && 0 < t.host.indexOf("@")) && t.host.split("@")) && (t.auth = P.shift(), t.host = t.hostname = P.shift())), t.search = e.search, t.query = e.query, E.isNull(t.pathname) && E.isNull(t.search) || (t.path = (t.pathname || "") + (t.search || "")), t.href = t.format(), t;
                    if (!m.length) return t.pathname = null, t.search ? t.path = "/" + t.search : t.path = null, t.href = t.format(), t;
                    for (var y = m.slice(-1)[0], f = (t.host || e.host || 1 < m.length) && ("." === y || ".." === y) || "" === y, v = 0, b = m.length; 0 <= b; b--) "." === (y = m[b]) ? m.splice(b, 1) : ".." === y ? (m.splice(b, 1), v++) : v && (m.splice(b, 1), v--);
                    if (!d && !g)
                        for (; v--;) m.unshift("..");
                    !d || "" === m[0] || m[0] && "/" === m[0].charAt(0) || m.unshift(""), f && "/" !== m.join("/").substr(-1) && m.push("");
                    var P, f = "" === m[0] || m[0] && "/" === m[0].charAt(0);
                    return p && (t.hostname = t.host = !f && m.length ? m.shift() : "", (P = !!(t.host && 0 < t.host.indexOf("@")) && t.host.split("@")) && (t.auth = P.shift(), t.host = t.hostname = P.shift())), (d = d || t.host && m.length) && !f && m.unshift(""), m.length ? t.pathname = m.join("/") : (t.pathname = null, t.path = null), E.isNull(t.pathname) && E.isNull(t.search) || (t.path = (t.pathname || "") + (t.search || "")), t.auth = e.auth || t.auth, t.slashes = t.slashes || e.slashes, t.href = t.format(), t
                }, w.prototype.parseHost = function() {
                    var e = this.host,
                        t = n.exec(e);
                    t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
                }
            },
            2539: function(e) {
                "use strict";
                e.exports = {
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isObject: function(e) {
                        return "object" == typeof e && null !== e
                    },
                    isNull: function(e) {
                        return null === e
                    },
                    isNullOrUndefined: function(e) {
                        return null == e
                    }
                }
            }
        },
        n = {};

    function Xr(e) {
        var t = n[e];
        if (void 0 !== t) return t.exports;
        t = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return r[e].call(t.exports, t, t.exports, Xr), t.loaded = !0, t.exports
    }
    Xr.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return Xr.d(t, {
                a: t
            }), t
        }, Xr.d = function(e, t) {
            for (var r in t) Xr.o(t, r) && !Xr.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, Xr.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), Xr.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, Xr.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, Xr.nmd = function(e) {
            return e.paths = [], e.children || (e.children = []), e
        },
        function() {
            "use strict";
            var e = {};
            Xr.r(e), Xr.d(e, {
                generateRandomUuid: function() {
                    return v
                }
            }), (L = I = I || {}).Strict = "strict", L.Lax = "lax", L.None = "none", (O = B = B || {}).PagingParametersChanged = "Paging parameters were changed", O.GetItemsFailure = "Unable to get items", O.InvalidPageNumber = "Invalid page number";
            var c = B;
            (H = Oe = Oe || {})[H.Initialized = 0] = "Initialized", H[H.Idle = 1] = "Idle", H[H.Loading = 2] = "Loading";
            var l = Oe;

            function t(e) {
                this.pageSize = e, this.cache = {}
            }
            var a = (t.prototype.getPage = function(e, t) {
                    e = this.cache[e];
                    return e ? e.slice((t - 1) * this.pageSize, t * this.pageSize) : []
                }, t.prototype.getLength = function(e) {
                    e = this.cache[e];
                    return e ? e.length : 0
                }, t.prototype.append = function(e, t) {
                    this.cache[e] || (this.cache[e] = []), this.cache[e] = this.cache[e].concat(t)
                }, t.prototype.removeAfterIndex = function(e, t) {
                    this.cache[e] && (this.cache[e] = this.cache[e].slice(0, t))
                }, t.prototype.removeAtIndex = function(e, t, r) {
                    this.cache[e] && this.cache[e].splice((t - 1) * this.pageSize + r, 1)
                }, t.prototype.clear = function(e) {
                    delete this.cache[e]
                }, t.prototype.setPageSize = function(e) {
                    this.pageSize = e
                }, t),
                i = function() {
                    return (i = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                };

            function r(e, t, r, n) {
                this.pageSize = e, this.loadPageSize = t, this.getItems = r, this.cache = new a(e), this.firstPagePagingParameters = n, this.pagingParameters = n, this.indexCursors = {}, this.initId = 0, this.status = l.Initialized, this.currentPageNumber = 1, this.setNextPageCursor("")
            }
            var n = (r.prototype.getStatus = function() {
                return this.status
            }, r.prototype.isBusy = function() {
                return this.status !== l.Idle
            }, r.prototype.getCurrentPageNumber = function() {
                return this.currentPageNumber
            }, r.prototype.getPagingParameters = function() {
                return i({}, this.firstPagePagingParameters)
            }, r.prototype.hasNextPage = function() {
                var e = this.getCacheKey();
                return this.cache.getLength(e) > this.currentPageNumber * this.pageSize || "string" == typeof(null === (e = this.pagingParameters) || void 0 === e ? void 0 : e.cursor)
            }, r.prototype.canLoadNextPage = function() {
                return this.hasNextPage() && !this.isBusy()
            }, r.prototype.canLoadPreviousPage = function() {
                return !this.isBusy() && 1 < this.currentPageNumber
            }, r.prototype.canLoadFirstPage = function() {
                return !this.isBusy()
            }, r.prototype.canReloadCurrentPage = function() {
                return !this.isBusy()
            }, r.prototype.setPagingParametersAndLoadFirstPage = function(e) {
                this.status = l.Loading;
                var t = this.getCacheKey();
                return this.cache.clear(t), void 0 !== e.pageSize && (this.cache.setPageSize(e.pageSize), this.pageSize = e.pageSize), void 0 !== e.loadPageSize && (this.loadPageSize = e.loadPageSize), this.currentPageNumber = 1, this.indexCursors = {}, this.firstPagePagingParameters = i({}, e), this.pagingParameters = i({}, e), this.setNextPageCursor(""), this.loadPage(1)
            }, r.prototype.reloadCurrentPage = function() {
                if (1 === this.currentPageNumber) return this.loadFirstPage();
                var e = this.getCacheKey(),
                    t = 0,
                    r = this.indexCursors,
                    n = this.currentPageNumber * (this.pageSize - 1);
                Object.keys(r).forEach(function(e) {
                    e = Number(e);
                    n < e ? delete r[e] : t = Math.max(e, t)
                });
                var a = Math.floor(n / this.loadPageSize) * this.loadPageSize;
                return this.cache.removeAfterIndex(e, a), this.setNextPageCursor(r[t] || ""), this.loadPage(this.currentPageNumber)
            }, r.prototype.getCurrentPage = function() {
                return this.loadPage(this.currentPageNumber)
            }, r.prototype.loadNextPage = function() {
                return this.loadPage(this.currentPageNumber + 1)
            }, r.prototype.loadPreviousPage = function() {
                return this.loadPage(this.currentPageNumber - 1)
            }, r.prototype.loadFirstPage = function() {
                return this.setPagingParametersAndLoadFirstPage(this.firstPagePagingParameters)
            }, r.prototype.loadPage = function(i, e) {
                var s = this;
                void 0 === e && (this.initId += 1);
                var u = null != e ? e : this.initId;
                return new Promise(function(t, r) {
                    function e(e) {
                        s.initId === u ? (s.status = l.Idle, r(e)) : r(c.PagingParametersChanged)
                    }

                    function n(e) {
                        s.initId === u ? (s.status = l.Idle, s.currentPageNumber = i, t(e)) : r(c.PagingParametersChanged)
                    }
                    if (i < 1) e(c.InvalidPageNumber);
                    else {
                        var a = s.getCacheKey(),
                            o = s.cache.getPage(a, i);
                        if (o.length !== s.pageSize) {
                            if ("string" != typeof s.pagingParameters.cursor) return o.length <= 0 && 1 < i ? void e(c.InvalidPageNumber) : void n(o);
                            s.status = l.Loading, s.loadNextPageIntoCache(a, u).then(function() {
                                s.loadPage(i, u).then(n).catch(e)
                            }).catch(e)
                        } else n(o)
                    }
                })
            }, r.prototype.canRemoveItem = function() {
                return !this.isBusy()
            }, r.prototype.removeItemAtIndex = function(e) {
                var t = this.getCacheKey();
                return this.cache.removeAtIndex(t, this.currentPageNumber, e), this.canReloadCurrentPage() ? this.getCurrentPage() : this.loadPage(this.currentPageNumber - 1)
            }, r.prototype.getCacheKey = function() {
                return JSON.stringify(this.firstPagePagingParameters)
            }, r.prototype.setNextPageCursor = function(e) {
                this.pagingParameters = i(i({}, this.pagingParameters), {
                    cursor: e
                })
            }, r.prototype.loadNextPageIntoCache = function(n, a) {
                var o = this;
                return new Promise(function(t, r) {
                    o.indexCursors[o.cache.getLength(n)] = o.pagingParameters.cursor;
                    var e = Object.keys(o.indexCursors).length;
                    o.getItems(i(i({}, o.pagingParameters), {
                        count: o.loadPageSize,
                        pageNumber: e
                    })).then(function(e) {
                        a === o.initId ? (o.setNextPageCursor(e.nextPageCursor), o.cache.append(n, e.items), t()) : r(c.PagingParametersChanged)
                    }).catch(function() {
                        a === o.initId ? r(c.GetItemsFailure) : r(c.PagingParametersChanged)
                    })
                })
            }, r);
            (Z = je = je || {}).Asc = "Asc", Z.Desc = "Desc";
            var o = je;
            new Intl.DateTimeFormat(void 0, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: !0
            }), (He = Q = Q || {})[He.Windows = 0] = "Windows", He[He.macOS = 1] = "macOS", He[He.Linux = 2] = "Linux", He[He.Unix = 3] = "Unix", He[He.iOS = 4] = "iOS", He[He.Android = 5] = "Android", He[He.Unknown = 6] = "Unknown", (we = ie = ie || {}).Unidentified = "Unidentified", we.Alt = "Alt", we.AltGraph = "AltGraph", we.CapsLock = "CapsLock", we.Control = "Control", we.Fn = "Fn", we.FnLock = "FnLock", we.Hyper = "Hyper", we.Meta = "Meta", we.NumLock = "NumLock", we.ScrollLock = "ScrollLock", we.Shift = "Shift", we.Super = "Super", we.Symbol = "Symbol", we.SymbolLock = "SymbolLock", we.Enter = "Enter", we.Tab = "Tab", we.ArrowDown = "ArrowDown", we.ArrowLeft = "ArrowLeft", we.ArrowRight = "ArrowRight", we.ArrowUp = "ArrowUp", we.End = "End", we.Home = "Home", we.PageDown = "PageDown", we.PageUp = "PageUp", we.Backspace = "Backspace", we.Clear = "Clear", we.Copy = "Copy", we.CrSel = "CrSel", we.Cut = "Cut", we.Delete = "Delete", we.EraseEof = "EraseEof", we.ExSel = "ExSel", we.Insert = "Insert", we.Paste = "Paste", we.Redo = "Redo", we.Undo = "Undo", we.Accept = "Accept", we.Again = "Again", we.Attn = "Attn", we.Cancel = "Cancel", we.ContextMenu = "ContextMenu", we.Escape = "Escape", we.Execute = "Execute", we.Find = "Find", we.Finish = "Finish", we.Help = "Help", we.Pause = "Pause", we.Play = "Play", we.Props = "Props", we.Select = "Select", we.ZoomIn = "ZoomIn", we.ZoomOut = "ZoomOut", we.BrightnessDown = "BrightnessDown", we.BrightnessUp = "BrightnessUp", we.Eject = "Eject", we.LogOff = "LogOff", we.Power = "Power", we.PowerOff = "PowerOff", we.PrintScreen = "PrintScreen", we.Hibernate = "Hibernate", we.Standby = "Standby", we.WakeUp = "WakeUp", we.AllCandidates = "AllCandidates", we.Alphanumeric = "Alphanumeric", we.CodeInput = "CodeInput", we.Compose = "Compose", we.Convert = "Convert", we.Dead = "Dead", we.FinalMode = "FinalMode", we.GroupFirst = "GroupFirst", we.GroupLast = "GroupLast", we.GroupNext = "GroupNext", we.GroupPrevious = "GroupPrevious", we.ModeChange = "ModeChange", we.NextCandidate = "NextCandidate", we.NonConvert = "NonConvert", we.PreviousCandidate = "PreviousCandidate", we.Process = "Process", we.SingleCandidate = "SingleCandidate", we.HangulMode = "HangulMode", we.HanjaMode = "HanjaMode", we.JunjaMode = "JunjaMode", we.Eisu = "Eisu", we.Hankaku = "Hankaku", we.Hiragana = "Hiragana", we.HiraganaKatakana = "HiraganaKatakana", we.KanaMode = "KanaMode", we.KanjiMode = "KanjiMode", we.Katakana = "Katakana", we.Romaji = "Romaji", we.Zenkaku = "Zenkaku", we.ZenkakuHanaku = "ZenkakuHanaku", we.F1 = "F1", we.F2 = "F2", we.F3 = "F3", we.F4 = "F4", we.F5 = "F5", we.F6 = "F6", we.F7 = "F7", we.F8 = "F8", we.F9 = "F9", we.F10 = "F10", we.F11 = "F11", we.F12 = "F12", we.F13 = "F13", we.F14 = "F14", we.F15 = "F15", we.F16 = "F16", we.F17 = "F17", we.F18 = "F18", we.F19 = "F19", we.F20 = "F20", we.Soft1 = "Soft1", we.Soft2 = "Soft2", we.Soft3 = "Soft3", we.Soft4 = "Soft4", we.AppSwitch = "AppSwitch", we.Call = "Call", we.Camera = "Camera", we.CameraFocus = "CameraFocus", we.EndCall = "EndCall", we.GoBack = "GoBack", we.GoHome = "GoHome", we.HeadsetHook = "HeadsetHook", we.LastNumberRedial = "LastNumberRedial", we.Notification = "Notification", we.MannerMode = "MannerMode", we.VoiceDial = "VoiceDial", we.ChannelDown = "ChannelDown", we.ChannelUp = "ChannelUp", we.MediaFastForward = "MediaFastForward", we.MediaPause = "MediaPause", we.MediaPlay = "MediaPlay", we.MediaPlayPause = "MediaPlayPause", we.MediaRecord = "MediaRecord", we.MediaRewind = "MediaRewind", we.MediaStop = "MediaStop", we.MediaTrackNext = "MediaTrackNext", we.MediaTrackPrevious = "MediaTrackPrevious", we.AudioBalanceLeft = "AudioBalanceLeft", we.AudioBalanceRight = "AudioBalanceRight", we.AudioBassDown = "AudioBassDown", we.AudioBassBoostDown = "AudioBassBoostDown", we.AudioBassBoostToggle = "AudioBassBoostToggle", we.AudioBassBoostUp = "AudioBassBoostUp", we.AudioBassUp = "AudioBassUp", we.AudioFaderFront = "AudioFaderFront", we.AudioFaderRear = "AudioFaderRear", we.AudioSurroundModeNext = "AudioSurroundModeNext", we.AudioTrebleDown = "AudioTrebleDown", we.AudioTrebleUp = "AudioTrebleUp", we.AudioVolumeDown = "AudioVolumeDown", we.AudioVolumeMute = "AudioVolumeMute", we.AudioVolumeUp = "AudioVolumeUp", we.MicrophoneToggle = "MicrophoneToggle", we.MicrophoneVolumeDown = "MicrophoneVolumeDown", we.MicrophoneVolumeMute = "MicrophoneVolumeMute", we.MicrophoneVolumeUp = "MicrophoneVolumeUp", we.TV = "TV", we.TV3DMode = "TV3DMode", we.TVAntennaCable = "TVAntennaCable", we.TVAudioDescription = "TVAudioDescription", we.TVAudioDescriptionMixDown = "TVAudioDescriptionMixDown", we.TVAudioDescriptionMixUp = "TVAudioDescriptionMixUp", we.TVContentsMenu = "TVContentsMenu", we.TVDataService = "TVDataService", we.TVInput = "TVInput", we.TVInputComponent1 = "TVInputComponent1", we.TVInputComponent2 = "TVInputComponent2", we.TVInputComposite1 = "TVInputComposite1", we.TVInputComposite2 = "TVInputComposite2", we.TVInputHDMI1 = "TVInputHDMI1", we.TVInputHDMI2 = "TVInputHDMI2", we.TVInputHDMI3 = "TVInputHDMI3", we.TVInputHDMI4 = "TVInputHDMI4", we.TVInputVGA1 = "TVInputVGA1", we.TVMediaContext = "TVMediaContext", we.TVNetwork = "TVNetwork", we.TVNumberEntry = "TVNumberEntry", we.TVPower = "TVPower", we.TVRadioService = "TVRadioService", we.TVSatellite = "TVSatellite", we.TVSatelliteBS = "TVSatelliteBS", we.TVSatelliteCS = "TVSatelliteCS", we.TVSatelliteToggle = "TVSatelliteToggle", we.TVTerrestrialAnalog = "TVTerrestrialAnalog", we.TVTerrestrialDigital = "TVTerrestrialDigital", we.TVTimer = "TVTimer", we.AVRInput = "AVRInput", we.AVRPower = "AVRPower", we.ColorF0Red = "ColorF0Red", we.ColorF1Green = "ColorF1Green", we.ColorF2Yellow = "ColorF2Yellow", we.ColorF3Blue = "ColorF3Blue", we.ColorF4Grey = "ColorF4Grey", we.ColorF5Brown = "ColorF5Brown", we.ClosedCaptionToggle = "ClosedCaptionToggle", we.Dimmer = "Dimmer", we.DisplaySwap = "DisplaySwap", we.DVR = "DVR", we.Exit = "Exit", we.FavoriteClear0 = "FavoriteClear0", we.FavoriteClear1 = "FavoriteClear1", we.FavoriteClear2 = "FavoriteClear2", we.FavoriteClear3 = "FavoriteClear3", we.FavoriteRecall0 = "FavoriteRecall0", we.FavoriteRecall1 = "FavoriteRecall1", we.FavoriteRecall2 = "FavoriteRecall2", we.FavoriteRecall3 = "FavoriteRecall3", we.FavoriteStore0 = "FavoriteStore0", we.FavoriteStore1 = "FavoriteStore1", we.FavoriteStore2 = "FavoriteStore2", we.FavoriteStore3 = "FavoriteStore3", we.Guide = "Guide", we.GuideNextDay = "GuideNextDay", we.GuidePreviousDay = "GuidePreviousDay", we.Info = "Info", we.InstantReplay = "InstantReplay", we.Link = "Link", we.ListProgram = "ListProgram", we.LiveContent = "LiveContent", we.Lock = "Lock", we.MediaApps = "MediaApps", we.MediaAudioTrack = "MediaAudioTrack", we.MediaLast = "MediaLast", we.MediaSkipBackward = "MediaSkipBackward", we.MediaSkipForward = "MediaSkipForward", we.MediaStepBackward = "MediaStepBackward", we.MediaStepForward = "MediaStepForward", we.MediaTopMenu = "MediaTopMenu", we.NavigateIn = "NavigateIn", we.NavigateNext = "NavigateNext", we.NavigateOut = "NavigateOut", we.NavigatePrevious = "NavigatePrevious", we.NextFavoriteChannel = "NextFavoriteChannel", we.NextUserProfile = "NextUserProfile", we.OnDemand = "OnDemand", we.Pairing = "Pairing", we.PinPDown = "PinPDown", we.PinPMove = "PinPMove", we.PinPToggle = "PinPToggle", we.PinPUp = "PinPUp", we.PlaySpeedDown = "PlaySpeedDown", we.PlaySpeedReset = "PlaySpeedReset", we.PlaySpeedUp = "PlaySpeedUp", we.RandomToggle = "RandomToggle", we.RcLowBattery = "RcLowBattery", we.RecordSpeedNext = "RecordSpeedNext", we.RfBypass = "RfBypass", we.ScanChannelsToggle = "ScanChannelsToggle", we.ScreenModeNext = "ScreenModeNext", we.Settings = "Settings", we.SplitScreenToggle = "SplitScreenToggle", we.STBInput = "STBInput", we.STBPower = "STBPower", we.Subtitle = "Subtitle", we.Teletext = "Teletext", we.VideoModeNext = "VideoModeNext", we.Wink = "Wink", we.ZoomToggle = "ZoomToggle", we.SpeechCorrectionList = "SpeechCorrectionList", we.SpeechInputToggle = "SpeechInputToggle", we.Close = "Close", we.New = "New", we.Open = "Open", we.Print = "Print", we.Save = "Save", we.SpellCheck = "SpellCheck", we.MailForward = "MailForward", we.MailReply = "MailReply", we.MailSend = "MailSend", we.LaunchCalculator = "LaunchCalculator", we.LaunchCalendar = "LaunchCalendar", we.LaunchContacts = "LaunchContacts", we.LaunchMail = "LaunchMail", we.LaunchMediaPlayer = "LaunchMediaPlayer", we.LaunchMusicPlayer = "LaunchMusicPlayer", we.LaunchMyComputer = "LaunchMyComputer", we.LaunchPhone = "LaunchPhone", we.LaunchScreenSaver = "LaunchScreenSaver", we.LaunchSpreadsheet = "LaunchSpreadsheet", we.LaunchWebBrowser = "LaunchWebBrowser", we.LaunchWebCam = "LaunchWebCam", we.LaunchWordProcessor = "LaunchWordProcessor", we.LaunchApplication1 = "LaunchApplication1", we.LaunchApplication2 = "LaunchApplication2", we.LaunchApplication3 = "LaunchApplication3", we.LaunchApplication4 = "LaunchApplication4", we.LaunchApplication5 = "LaunchApplication5", we.LaunchApplication6 = "LaunchApplication6", we.LaunchApplication7 = "LaunchApplication7", we.LaunchApplication8 = "LaunchApplication8", we.LaunchApplication9 = "LaunchApplication9", we.LaunchApplication10 = "LaunchApplication10", we.LaunchApplication11 = "LaunchApplication11", we.LaunchApplication12 = "LaunchApplication12", we.LaunchApplication13 = "LaunchApplication13", we.LaunchApplication14 = "LaunchApplication14", we.LaunchApplication15 = "LaunchApplication15", we.LaunchApplication16 = "LaunchApplication16", we.BrowserBack = "BrowserBack", we.BrowserFavorites = "BrowserFavorites", we.BrowserForward = "BrowserForward", we.BrowserHome = "BrowserHome", we.BrowserRefresh = "BrowserRefresh", we.BrowserSearch = "BrowserSearch", we.BrowserStop = "BrowserStop", we.Decimal = "Decimal", we.Key11 = "Key11", we.Key12 = "Key12", we.Multiply = "Multiply", we.Add = "Add", we.Divide = "Divide", we.Subtract = "Subtract", we.Separator = "Separator", (Te = Ae = Ae || {}).CONNECT = "CONNECT", Te.DELETE = "DELETE", Te.GET = "GET", Te.HEAD = "HEAD", Te.OPTIONS = "OPTIONS", Te.PATCH = "PATCH", Te.POST = "POST", Te.PUT = "PUT", Te.TRACE = "TRACE";
            var s = {
                url: /(https?:\/\/(?:[-\w.]+)+(?::\d+)?(?:[-\w_.#!/]*)+(?:\?\S+)?)/g,
                email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                escape: function(e) {
                    return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
                }
            };
            (Fe = Le = Le || {}).processFailure = "processFailure", Fe.unretriableFailure = "unretriableFailure", Fe.maxAttemptsReached = "maxAttemptsReached";
            for (var u, h = new Uint8Array(16), p = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, f = function(e) {
                    return "string" == typeof e && p.test(e)
                }, d = [], g = 0; g < 256; ++g) d.push((g + 256).toString(16).substr(1));
            var m, y = function(e) {
                    var t = (d[e[(t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0) + 0]] + d[e[t + 1]] + d[e[t + 2]] + d[e[t + 3]] + "-" + d[e[t + 4]] + d[e[t + 5]] + "-" + d[e[t + 6]] + d[e[t + 7]] + "-" + d[e[t + 8]] + d[e[t + 9]] + "-" + d[e[t + 10]] + d[e[t + 11]] + d[e[t + 12]] + d[e[t + 13]] + d[e[t + 14]] + d[e[t + 15]]).toLowerCase();
                    if (!f(t)) throw TypeError("Stringified UUID is invalid");
                    return t
                },
                v = function(e, t, r) {
                    var n = (e = e || {}).random || (e.rng || function() {
                        if (!u && !(u = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                        return u(h)
                    })();
                    if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
                        r = r || 0;
                        for (var a = 0; a < 16; ++a) t[r + a] = n[a];
                        return t
                    }
                    return y(n)
                },
                b = {
                    createKeyboardEventHandler: function(e, r, t, n) {
                        return a = e, o = function(e) {
                                var t;
                                return ((t = e) instanceof Event ? t instanceof KeyboardEvent : t.nativeEvent && t.nativeEvent instanceof KeyboardEvent) ? r.includes(e.key) : void console.info("The event passed in is not a keyboard event, are you using the handler in the wrong place?")
                            }, void 0 === (i = t) && (i = !1), void 0 === (s = n) && (s = !1),
                            function(e) {
                                o(e) && (i && e.preventDefault(), s && e.stopPropagation(), a())
                            };
                        var a, o, i, s
                    }
                },
                P = {
                    useCache: !1,
                    expirationWindowMS: 3e4
                };

            function w(t, r) {
                return function(e) {
                    e = Math.pow(2, e - 1) * t;
                    return Math.min(r, e)
                }
            }(Le = m = m || {}).processFailure = "processFailure", Le.unretriableFailure = "unretriableFailure", Le.maxAttemptsReached = "maxAttemptsReached";
            var S = Roblox,
                x = Xr.n(S),
                C = {
                    getUserKey: function(e) {
                        return "user_" + e
                    },
                    storage: function() {
                        return S.LocalStorage ? S.LocalStorage.isAvailable() : localStorage
                    },
                    getLength: function() {
                        return this.storage() ? localStorage.length : 0
                    },
                    getKey: function(e) {
                        return this.storage() ? localStorage.key(e) : ""
                    },
                    setLocalStorage: function(e, t) {
                        this.storage() && localStorage.setItem(e, JSON.stringify(t))
                    },
                    getLocalStorage: function(e) {
                        if (this.storage()) return JSON.parse(localStorage.getItem(e))
                    },
                    listenLocalStorage: function(e) {
                        this.storage() && void 0 !== e && (window.addEventListener ? window.addEventListener("storage", e, !1) : window.attachEvent("onstorage", e))
                    },
                    removeLocalStorage: function(e) {
                        this.storage() && localStorage.removeItem(e)
                    },
                    saveDataByTimeStamp: function(e, t) {
                        var r = (new Date).getTime(),
                            n = this.getLocalStorage(e);
                        (n = n || {}).data = t, n.timeStamp = r, this.setLocalStorage(e, n)
                    },
                    fetchNonExpiredCachedData: function(e, t) {
                        var r = (new Date).getTime(),
                            n = this.getLocalStorage(e);
                        if (n && n.timeStamp) {
                            if (r - n.timeStamp < (t = t || 3e4)) return n;
                            this.removeLocalStorage(e)
                        }
                        return null
                    }
                };

            function A(e, t) {
                this.store = new Map, this.useCache = e || !1, this.expirationWindowMS = t || 3e4, this.storeKeyPrefix = "CacheStore:BatchRequestProcessor::"
            }
            var T = (A.prototype.getCacheKey = function(e) {
                    return "" + this.storeKeyPrefix + e
                }, A.prototype.has = function(e, t) {
                    var r = t.useCache,
                        t = t.expirationWindowMS,
                        e = this.getCacheKey(e);
                    return (r || this.useCache) && localStorage ? !!C.fetchNonExpiredCachedData(e, t || this.expirationWindowMS) : this.store.has(e)
                }, A.prototype.set = function(e, t, r) {
                    r = r.useCache, e = this.getCacheKey(e);
                    (r || this.useCache) && localStorage && C.saveDataByTimeStamp(e, t), this.store.set(e, t)
                }, A.prototype.get = function(e, t) {
                    var r, n = t.useCache,
                        t = t.expirationWindowMS,
                        e = this.getCacheKey(e);
                    return (n || this.useCache) && localStorage ? null == (r = C.fetchNonExpiredCachedData(e, t || this.expirationWindowMS)) ? void 0 : r.data : (r && this.store.set(e, null == r ? void 0 : r.data), this.store.get(e))
                }, A.prototype.delete = function(e) {
                    e = this.getCacheKey(e);
                    localStorage && C.removeLocalStorage(e), this.store.delete(e)
                }, A.prototype.clear = function() {
                    if (this.store.clear(), localStorage) {
                        for (var e = [], t = 0; t < localStorage.length; t++) {
                            var r = localStorage.key(t);
                            r.includes(this.storeKeyPrefix) && e.push(r)
                        }
                        for (var n = 0; n < e.length; n++) localStorage.removeItem(e[n])
                    }
                }, A),
                E = function() {
                    return (E = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                };

            function k(e, t, r) {
                this.requestQueue = [], this.concurrentRequestCount = 1, this.isQueueActive = !1, this.debug = !1;
                var n = r.cacheProperties,
                    a = r.processBatchWaitTime,
                    o = r.batchSize,
                    i = r.maxRetryAttempts,
                    s = r.getItemExpiration,
                    u = r.getFailureCooldown,
                    c = r.debugMode,
                    l = r.concurrentRequestCount,
                    h = n.useCache,
                    r = n.expirationWindowMS;
                this.cacheProperties = n, this.completeItems = new T(h, r), this.processBatchWaitTime = a, this.batchSize = o, this.maxRetryAttempts = i, this.getItemExpiration = s, this.getFailureCooldown = u, this.itemsProcessor = e, this.itemsSerializer = t, this.debug = c || !1, this.processorId = Date.now(), this.concurrentRequestCount = l
            }
            var N = (k.prototype.handleBatchResult = function(e, r) {
                    var n = this,
                        a = 0,
                        o = (new Date).getTime();
                    e.forEach(function(e) {
                        var t;
                        n.completeItems.has(e.key, e.cacheProperties) ? (t = (new Date).getTime(), e.resolve(E(E({}, n.completeItems.get(e.key, e.cacheProperties)), {
                            performance: {
                                duration: t - e.startTime.getTime(),
                                retryAttempts: e.retryAttempts
                            }
                        }))) : n.maxRetryAttempts && r !== m.unretriableFailure ? (t = n.getFailureCooldown ? n.getFailureCooldown(e.retryAttempts) : 1e3, a = 0 < a ? Math.min(a, t) : t, ++e.retryAttempts <= n.maxRetryAttempts ? (e.queueAfter = o + t, n.requestQueue.unshift(e)) : e.reject(m.maxAttemptsReached)) : (console.debug(r, e), e.reject(r))
                    }), this.processEndTime = Date.now(), this.debug && console.debug(this.processorId + ": process queue ended", {
                        duration: this.processEndTime - this.processStartTime,
                        requestQueue: this.requestQueue,
                        minimumCooldown: a,
                        processBatchWaitTime: this.processBatchWaitTime
                    }), 0 < a && setTimeout(function() {
                        return n.processQueue()
                    }, a + this.processBatchWaitTime), this.concurrentRequestCount += 1, this.processQueue()
                }, k.prototype.processQueue = function() {
                    var e, n = this;
                    if (0 !== this.concurrentRequestCount && !this.isQueueActive) {
                        this.processStartTime = Date.now();
                        var t = [],
                            a = new Map,
                            r = [],
                            o = (new Date).getTime();
                        for (this.isQueueActive = !0; t.length < this.batchSize && 0 < this.requestQueue.length;) {
                            var i, s = this.requestQueue.shift();
                            s.queueAfter > o ? (a.set(s.key, s), r.push(s)) : this.completeItems.has(s.key, s.cacheProperties) ? (i = (new Date).getTime(), s.resolve(E(E({}, this.completeItems.get(s.key, s.cacheProperties)), {
                                performance: {
                                    duration: i - s.startTime.getTime()
                                }
                            }))) : a.has(s.key) ? r.push(s) : (a.set(s.key, s), t.push(s))
                        }(e = this.requestQueue).push.apply(e, r), this.isQueueActive = !1, t.length <= 0 || (--this.concurrentRequestCount, this.processQueue(), this.debug && console.debug(this.processorId + ": process queue start", {
                            timeSinceLastStart: this.processEndTime ? this.processStartTime - this.processEndTime : 0,
                            startTime: this.processStartTime,
                            requestQueue: this.requestQueue,
                            batch: t.map(function(e) {
                                return e.key
                            })
                        }), this.itemsProcessor(t).then(function(e) {
                            Object.entries(e).forEach(function(e) {
                                var t = e[0],
                                    r = e[1],
                                    e = a.get(t);
                                n.saveCompleteItem(t, r, null == e ? void 0 : e.cacheProperties)
                            }), n.handleBatchResult(t, m.processFailure)
                        }, function(e) {
                            n.handleBatchResult(t, e)
                        }))
                    }
                }, k.prototype.saveCompleteItem = function(e, t, r) {
                    var n = this;
                    this.completeItems.set(e, t, r || this.cacheProperties), this.getItemExpiration && setTimeout(function() {
                        n.completeItems.delete(e)
                    }, this.getItemExpiration(e))
                }, k.prototype.queueItem = function(r, n, a) {
                    var o = this;
                    return new Promise(function(e, t) {
                        o.requestQueue.push({
                            key: n || o.itemsSerializer(r),
                            itemId: r,
                            data: r,
                            retryAttempts: 0,
                            queueAfter: 0,
                            startTime: new Date,
                            cacheProperties: a || o.cacheProperties,
                            resolve: e,
                            reject: t
                        }), setTimeout(function() {
                            return o.processQueue()
                        }, o.processBatchWaitTime)
                    })
                }, k.prototype.invalidateItem = function(e, t) {
                    e = t || this.itemsSerializer(e);
                    return this.completeItems.delete(e)
                }, k.prototype.clearCache = function() {
                    this.completeItems.clear()
                }, k),
                I = (F.prototype.createRequestProcessor = function(e, t, r) {
                    return r.processBatchWaitTime || (r.processBatchWaitTime = 10), r.maxRetryAttempts || (r.maxRetryAttempts = 2), r.cacheProperties || (r.cacheProperties = P), r.concurrentRequestCount || (r.concurrentRequestCount = 1), new N(e, t, r)
                }, F);

            function F() {
                this.createExponentialBackoffCooldown = w
            }
            var L = new I;
            (Re = Re || {}).copy = "Copy";
            var R = Re,
                O = {
                    commands: R,
                    isCommandSupported: function(e) {
                        return !!e && (!!document.queryCommandSupported && !!document.queryCommandSupported(e))
                    },
                    write: function(e) {
                        var t = document.createElement("input");
                        t.value = e, document.body.appendChild(t), t.select(), document.execCommand(R.copy), document.body.removeChild(t)
                    }
                },
                j = {
                    sortOrder: {
                        ascending: "Asc",
                        descending: "Desc"
                    },
                    status: {
                        idle: "idle",
                        loading: "loading"
                    },
                    errorType: {
                        pagingParametersChanged: "pagingParametersChanged",
                        getItemsFailure: "getItemsFailure",
                        invalidPageNumber: "invalidPageNumber"
                    }
                };

            function M(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            var D = function() {
                function t(e) {
                    ! function(e) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this), this.pageSize = e, this.cache = {}
                }
                var e, r, n;
                return e = t, (r = [{
                    key: "getPage",
                    value: function(e, t) {
                        e = this.cache[e];
                        return e ? e.slice((t - 1) * this.pageSize, t * this.pageSize) : []
                    }
                }, {
                    key: "getLength",
                    value: function(e) {
                        e = this.cache[e];
                        return e ? e.length : 0
                    }
                }, {
                    key: "append",
                    value: function(e, t) {
                        this.cache[e] || (this.cache[e] = []), this.cache[e] = this.cache[e].concat(t)
                    }
                }, {
                    key: "removeAfterIndex",
                    value: function(e, t) {
                        this.cache[e] && (this.cache[e] = this.cache[e].slice(0, t))
                    }
                }, {
                    key: "clear",
                    value: function(e) {
                        delete this.cache[e]
                    }
                }]) && M(e.prototype, r), n && M(e, n), t
            }();

            function U(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            var B = function() {
                function n(e, t, r) {
                    ! function(e) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this), this._pageSize = e, this._loadPageSize = t, this._getItems = r, this._cache = new D(e), this._firstPagePagingParameters = {}, this._pagingParameters = {}, this._indexCursors = {}, this._initId = 0, this._status = j.status.idle, this._currentPageNumber = 1, this._setNextPageCursor("")
                }
                var e, t, r;
                return e = n, (t = [{
                    key: "setPagingParametersAndLoadFirstPage",
                    value: function(e) {
                        var t = this._getCacheKey();
                        return this._cache.clear(t), this._currentPageNumber = 1, this._indexCursors = {}, this._firstPagePagingParameters = Object.assign({}, e), this._pagingParameters = Object.assign({}, e), this._setNextPageCursor(""), this._loadPage(1)
                    }
                }, {
                    key: "reloadCurrentPage",
                    value: function() {
                        if (1 === this.currentPageNumber) return this.loadFirstPage();
                        var e = this._getCacheKey(),
                            t = 0,
                            r = this._indexCursors,
                            n = this.currentPageNumber * (this._pageSize - 1);
                        Object.keys(r).forEach(function(e) {
                            Number(e) > n ? delete r[e] : t = Math.max(e, t)
                        });
                        var a = Math.floor(n / this._loadPageSize) * this._loadPageSize;
                        return this._cache.removeAfterIndex(e, a), this._setNextPageCursor(r[t] || ""), this._loadPage(this._currentPageNumber)
                    }
                }, {
                    key: "getCurrentPage",
                    value: function() {
                        return this._loadPage(this.currentPageNumber)
                    }
                }, {
                    key: "loadNextPage",
                    value: function() {
                        return this._loadPage(this.currentPageNumber + 1)
                    }
                }, {
                    key: "loadPreviousPage",
                    value: function() {
                        return this._loadPage(this.currentPageNumber - 1)
                    }
                }, {
                    key: "loadFirstPage",
                    value: function() {
                        return this.setPagingParametersAndLoadFirstPage(this._firstPagePagingParameters)
                    }
                }, {
                    key: "_loadPage",
                    value: function(i, s) {
                        var u = this;
                        return s = s || ++u._initId, new Promise(function(t, r) {
                            function e(e) {
                                u._initId === s ? (u._status = j.status.idle, r(e)) : r({
                                    type: j.errorType.pagingParametersChanged
                                })
                            }

                            function n(e) {
                                u._initId === s ? (u._status = j.status.idle, u._currentPageNumber = i, t(e)) : r({
                                    type: j.errorType.pagingParametersChanged
                                })
                            }
                            if (i < 1) e({
                                type: j.errorType.invalidPageNumber
                            });
                            else {
                                var a = u._getCacheKey(),
                                    o = u._cache.getPage(a, i);
                                if (o.length !== u._pageSize) {
                                    if ("string" != typeof u._pagingParameters.cursor) return o.length <= 0 && 1 < i ? void e({
                                        type: j.errorType.invalidPageNumber
                                    }) : void n(o);
                                    u._status = j.status.loading, u._loadNextPageIntoCache(a, s).then(function() {
                                        u._loadPage(i, s).then(n).catch(e)
                                    }).catch(e)
                                } else n(o)
                            }
                        })
                    }
                }, {
                    key: "_getCacheKey",
                    value: function() {
                        return JSON.stringify(this._firstPagePagingParameters)
                    }
                }, {
                    key: "_setNextPageCursor",
                    value: function(e) {
                        this._pagingParameters = Object.assign({}, this._pagingParameters, {
                            cursor: e
                        })
                    }
                }, {
                    key: "_loadNextPageIntoCache",
                    value: function(n, a) {
                        var o = this;
                        return new Promise(function(t, r) {
                            o._indexCursors[o._cache.getLength(n)] = o._pagingParameters.cursor;
                            var e = Object.keys(o._indexCursors).length;
                            o._getItems(Object.assign({}, o._pagingParameters, {
                                count: o._loadPageSize,
                                pageNumber: e
                            })).then(function(e) {
                                a === o._initId ? (o._setNextPageCursor(e.nextPageCursor), o._cache.append(n, e.items), t()) : r({
                                    type: j.errorType.pagingParametersChanged
                                })
                            }).catch(function(e) {
                                a === o._initId ? r({
                                    type: j.errorType.getItemsFailure,
                                    data: e
                                }) : r({
                                    type: j.errorType.pagingParametersChanged
                                })
                            })
                        })
                    }
                }, {
                    key: "status",
                    get: function() {
                        return this._status
                    }
                }, {
                    key: "isBusy",
                    get: function() {
                        return this.status !== j.status.idle
                    }
                }, {
                    key: "currentPageNumber",
                    get: function() {
                        return this._currentPageNumber
                    }
                }, {
                    key: "pagingParameters",
                    get: function() {
                        return Object.assign({}, this._firstPagePagingParameters)
                    }
                }, {
                    key: "hasNextPage",
                    get: function() {
                        var e = this._getCacheKey();
                        return this._cache.getLength(e) > this.currentPageNumber * this._pageSize || "string" == typeof this._pagingParameters.cursor
                    }
                }, {
                    key: "canLoadNextPage",
                    get: function() {
                        return this.hasNextPage && !this.isBusy
                    }
                }, {
                    key: "canLoadPreviousPage",
                    get: function() {
                        return !this.isBusy && 1 < this.currentPageNumber
                    }
                }, {
                    key: "canLoadFirstPage",
                    get: function() {
                        return !this.isBusy
                    }
                }, {
                    key: "canReloadCurrentPage",
                    get: function() {
                        return !this.isBusy
                    }
                }]) && U(e.prototype, t), r && U(e, r), n
            }();

            function q(e, t) {
                var r = new Date(e.toISOString());
                return r.setDate(e.getDate() + t), r
            }

            function V(e, t) {
                var r = new Date(e.toISOString());
                return r.setMonth(e.getMonth() + t), r
            }

            function _(e, t) {
                var r = new Date(e.toISOString());
                return r.setYear(e.getFullYear() + t), r
            }
            var z, H = {
                getUtcQueryString: function(e) {
                    if (!e) return "";
                    var t = (e.getUTCMonth() + 1).toString().padStart(2, "0"),
                        r = e.getUTCDate().toString().padStart(2, "0");
                    return "".concat(e.getUTCFullYear(), "-").concat(t, "-").concat(r)
                },
                endOfToday: function() {
                    var e = new Date;
                    return e.setHours(23, 59, 59, 999), e
                },
                startOfToday: function() {
                    var e = new Date;
                    return e.setHours(0, 0, 0, 0), e
                },
                addYears: _,
                subYears: function(e, t) {
                    return _(e, -t)
                },
                addMonths: V,
                subMonths: function(e, t) {
                    return V(e, -t)
                },
                addDays: q,
                subDays: function(e, t) {
                    return q(e, -t)
                }
            };

            function K() {
                var r = this;
                ! function(e) {
                    if (!(e instanceof K)) throw new TypeError("Cannot call a class as a function")
                }(this), this.promise = new Promise(function(e, t) {
                    r.resolve = e, r.reject = t
                }), this.then = this.promise.then.bind(this.promise), this.catch = this.promise.catch.bind(this.promise), this.finally = this.promise.finally.bind(this.promise)
            }

            function G(e) {
                var t = "roblox.com",
                    r = "robloxlabs.com",
                    n = e || (null === (n = window.location) || void 0 === n ? void 0 : n.hostname);
                return -1 < n.indexOf(t) || -1 < n.indexOf(r)
            }(Oe = z = z || {}).Edge = "edge", Oe.IE = "ie", Oe.Chrome = "chrome", Oe.Opera = "opera", Oe.Safari = "safari", Oe.Firefox = "firefox", Oe.Unknown = "";
            var W, Q, Z = Xr(6660),
                X = Xr.n(Z),
                J = RobloxTracer,
                Y = (Q = document.querySelector('meta[name="request-duplication-meta-data"]'), Ne = parseFloat(null == Q || null === (Ne = Q.dataset) || void 0 === Ne ? void 0 : Ne.duplicationRatio), Ne = Number.isNaN(Ne) ? 0 : Ne, {
                    duplicationEnabled: "true" === (null == Q || null === (W = Q.dataset) || void 0 === W ? void 0 : W.duplicationEnabled),
                    apiSitesAllowList: null !== (Ie = null == Q || null === (Ie = Q.dataset) || void 0 === Ie ? void 0 : Ie.apiSitesAllowList) && void 0 !== Ie ? Ie : "",
                    duplicationRatio: Ne
                }),
                ee = Y.apiSitesAllowList.split(","),
                te = function(e, t) {
                    return Y.duplicationEnabled && !t && (r = e, !(!G() || !G(r)) && (0 < ee.length && ee.some(function(e) {
                        return 0 < e.length && r.includes(e)
                    })));
                    var r
                },
                re = function() {
                    var e = Y.duplicationRatio;
                    if (e <= 0) return 0;
                    var t = Math.floor(e),
                        e = e - t,
                        t = t;
                    return 0 < e && Math.random() < e && (t += 1), t
                },
                ne = {
                    retryAttemptHeaderEnabled: "True" === (null == (Ie = document.querySelector('meta[name="page-retry-header-enabled"]')) || null === (Me = Ie.dataset) || void 0 === Me ? void 0 : Me.retryAttemptHeaderEnabled)
                },
                ae = function() {
                    return ne.retryAttemptHeaderEnabled
                };
            (je = Be = Be || {}).GET = "get", je.HEAD = "head", je.POST = "post", je.PUT = "put", je.DELETE = "delete", je.OPTIONS = "options", je.PATCH = "patch";
            var oe = Object.freeze(Be);
            (He = Ke = Ke || {})[He.ok = 200] = "ok", He[He.accepted = 202] = "accepted", He[He.movedPermanently = 301] = "movedPermanently", He[He.badRequest = 400] = "badRequest", He[He.unauthorized = 401] = "unauthorized", He[He.forbidden = 403] = "forbidden", He[He.notFound = 404] = "notFound", He[He.methodNotAllowed = 405] = "methodNotAllowed", He[He.conflict = 409] = "conflict", He[He.payloadTooLarge = 413] = "payloadTooLarge", He[He.tooManyAttempts = 429] = "tooManyAttempts", He[He.serverError = 500] = "serverError", He[He.serviceUnavailable = 503] = "serviceUnavailable";
            var ie = Object.freeze(Ke),
                se = function() {
                    return (se = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                ue = "x-csrf-token",
                ce = ie.forbidden,
                le = "Generic Challenge:",
                he = "rblx-challenge-id",
                pe = "rblx-challenge-type",
                fe = "rblx-challenge-metadata",
                de = "x-retry-attempt",
                ge = S.XsrfToken.getToken();
            X().interceptors.request.use(function(e) {
                var t, r, n = e.method,
                    a = e.noCache,
                    o = e.noPragma,
                    i = e.headers,
                    s = e.url,
                    u = se({}, e);
                if (n !== oe.POST && n !== oe.PATCH && n !== oe.DELETE || (ge = ge || S.XsrfToken.getToken(), a && (u.headers = se({
                        "Cache-Control": "no-cache, no-store, must-revalidate",
                        Pragma: "no-cache",
                        Expires: 0
                    }, i)), o && u.headers.Pragma && delete u.headers.Pragma, u.headers[ue] = ge), S.Endpoints && S.Endpoints.supportLocalizedUrls && S.Endpoints.getAcceptLanguageValue && ((t = S.Endpoints.getAcceptLanguageValue(s)) && (u.headers["Accept-Language"] = t)), J.isTracerEnabled && J.apiSiteRequestValidator.isApiSiteAvailableForTracing(s) && (t = {
                        tags: {
                            isDuplicate: (null === (t = e.isDuplicate) || void 0 === t ? void 0 : t.toString()) || "false"
                        }
                    }, t = J.instrumentation.createAndGetSpan(J.tracerConstants.operationNames.httpRequest, t), J.tags.setXHRRequestTags(t, {
                        component: "axios",
                        method: n,
                        url: s
                    }), J.logs.setXHRRequestLogs(t), r = J.inject.httpRequestCarrier(t), Object.keys(r).forEach(function(e) {
                        u.headers[e] = r[e]
                    }), u.tracerConfig = {
                        requestSpan: t
                    }), te(s, e.isDuplicate)) {
                    var c = se({}, e);
                    c.isDuplicate = !0;
                    for (var l = re(), h = 0; h < l; h++) X().request(c).catch(function(e) {
                        console.log("~~~~ duplicated request failed ~~~~ " + e)
                    })
                }
                return u
            }, null), X().interceptors.response.use(function(e) {
                var t = e.status,
                    r = e.config,
                    n = r.url,
                    r = r.tracerConfig;
                return r && J.apiSiteRequestValidator.isApiSiteAvailableForTracing(n) && (r = r.requestSpan, J.tags.setXHRResponseTags(r, {
                    status: t
                }), J.logs.setXHRResponseSuccessLogs(r), J.instrumentation.finalizeSpan(r)), e
            }, function(e) {
                var t = e.config,
                    r = e.response;
                if (r) {
                    var n = r.status,
                        a = r.headers,
                        o = r.config,
                        i = a[ue];
                    if (n === ce && i) return o.headers[ue] = i, ge = i, S.XsrfToken.setToken(i), X().request(o);
                    ae() && (i = 1, o.headers[de] && (i = Number(o.headers[de]) + 1), o.headers[de] = String(i)), null != o && o.tracerConfig && J.apiSiteRequestValidator.isApiSiteAvailableForTracing(o.url) && (u = o.tracerConfig.requestSpan, J.tags.setXHRResponseErrorTags(u, {
                        status: n
                    }), J.logs.setXHRResponseErrorLogs(u), J.instrumentation.finalizeSpan(u));
                    var n = a["rblx-challenge-id"],
                        s = a["rblx-challenge-type"],
                        u = a["rblx-challenge-metadata"],
                        a = void 0 !== n || void 0 !== s || void 0 !== u;
                    if (void 0 !== n && void 0 !== s && void 0 !== u) {
                        if (x() && x().AccountIntegrityChallengeService) return x().AccountIntegrityChallengeService.Generic.interceptChallenge({
                            retryRequest: function(e, t) {
                                return o.headers[he] = e, o.headers[pe] = s, o.headers[fe] = t, X().request(o)
                            },
                            containerId: "generic-challenge-container",
                            challengeId: n,
                            challengeTypeRaw: s,
                            challengeMetadataJsonBase64: u
                        });
                        console.error(le, "Got challenge but challenge component not available")
                    } else a && console.error(le, "Got only partial challenge headers")
                }
                return null != t && t.fullError || X().isCancel(e) ? Promise.reject(e) : Promise.reject(r)
            });
            var me = X();

            function ye(r) {
                return function(e, t) {
                    return r.chain(e, function(e) {
                        return r.map(t(e), function() {
                            return e
                        })
                    })
                }
            }
            var ve = function(e, t, r) {
                if (r || 2 === arguments.length)
                    for (var n, a = 0, o = t.length; a < o; a++) !n && a in t || ((n = n || Array.prototype.slice.call(t, 0, a))[a] = t[a]);
                return e.concat(n || Array.prototype.slice.call(t))
            };

            function be(e) {
                return e
            }

            function Pe(e, t, r, n, a, o, i, s, u) {
                switch (arguments.length) {
                    case 1:
                        return e;
                    case 2:
                        return t(e);
                    case 3:
                        return r(t(e));
                    case 4:
                        return n(r(t(e)));
                    case 5:
                        return a(n(r(t(e))));
                    case 6:
                        return o(a(n(r(t(e)))));
                    case 7:
                        return i(o(a(n(r(t(e))))));
                    case 8:
                        return s(i(o(a(n(r(t(e)))))));
                    case 9:
                        return u(s(i(o(a(n(r(t(e))))))));
                    default:
                        for (var c = e, l = 1; l < arguments.length; l++) c = arguments[l](c);
                        return c
                }
            }
            var we = function(t, r) {
                var e = "number" == typeof t ? function(e) {
                    return e.length >= t
                } : t;
                return function() {
                    var t = Array.from(arguments);
                    return e(arguments) ? r.apply(this, t) : function(e) {
                        return r.apply(void 0, ve([e], t, !1))
                    }
                }
            };

            function Se(r) {
                return function(e, t) {
                    return r.map(e, function() {
                        return t
                    })
                }
            }

            function xe(e) {
                return {
                    _tag: "Left",
                    left: e
                }
            }

            function Ce(e) {
                return {
                    _tag: "Right",
                    right: e
                }
            }
            var Ae = [],
                Te = {},
                Ee = (Object.prototype.hasOwnProperty, xe),
                ke = Ce,
                Ne = we(2, function(e, t) {
                    return Ge(e) ? e : t(e.right)
                }),
                Ie = function(e, t) {
                    return Pe(e, De(t))
                },
                Fe = function(e, t) {
                    return Pe(e, Ue(t))
                },
                Le = function(e, t, r) {
                    return Pe(e, qe(t, r))
                },
                Re = function(e, t) {
                    return Pe(e, Ve(t))
                },
                Oe = function(e, t) {
                    return Pe(e, _e(t))
                },
                Z = function(e, t) {
                    return Pe(e, ze(t))
                },
                je = function(e, t) {
                    return function(e, t) {
                        for (var r = t(e);
                            "Left" === r._tag;) r = t(r.left);
                        return r.right
                    }(t(e), function(e) {
                        return Ge(e) ? ke(Ee(e.left)) : Ge(e.right) ? Ee(t(e.right.left)) : ke(ke(e.right.right))
                    })
                },
                Me = "Either",
                De = function(t) {
                    return function(e) {
                        return Ge(e) ? e : ke(t(e.right))
                    }
                },
                Ue = (we(2, Se(Te = {
                    URI: Me,
                    map: Ie
                })), Se(Te), function(t) {
                    return function(e) {
                        return Ge(e) ? e : Ge(t) ? t : ke(e.right(t.right))
                    }
                }),
                Be = {
                    URI: Me,
                    map: Ie,
                    ap: Fe,
                    chain: Ne
                },
                qe = function(t, r) {
                    return function(e) {
                        return Ge(e) ? Ee(t(e.left)) : ke(r(e.right))
                    }
                },
                Ve = function(t) {
                    return function(e) {
                        return Ge(e) ? Ee(t(e.left)) : e
                    }
                },
                _e = function(t) {
                    return function(e) {
                        return Ge(e) ? t() : e
                    }
                },
                ze = function(t) {
                    return function(e) {
                        return Ge(e) ? e : ke(t(e))
                    }
                },
                He = Ee,
                Ke = {
                    URI: Me,
                    fromEither: be
                },
                Ge = function(e) {
                    return "Left" === e._tag
                },
                We = function(e) {
                    return "Right" === e._tag
                };

            function $e(t, r, i) {
                return tt(void 0, void 0, Promise, function() {
                    return rt(this, function(e) {
                        try {
                            return [2, new Promise(function(a, o) {
                                Je = t, Ye = r;
                                var e = indexedDB.open(Je, 1);
                                e.onsuccess = function(t) {
                                    var e, r, n = t.target.result;
                                    n.objectStoreNames.contains(Ye) ? ((r = (e = n.transaction(Ye, "readwrite")).objectStore(Ye).delete(i)).onsuccess = function() {
                                        n.close(), a()
                                    }, r.onerror = function(e) {
                                        o(t.target.error)
                                    }, e.oncomplete = function(e) {
                                        n.close()
                                    }) : (n.close(), a())
                                }, e.onerror = function(e) {
                                    o(e.target.error)
                                }
                            })]
                        } catch (e) {
                            return console.warn("delete crypto record error: ", e), [2, {}]
                        }
                        return [2]
                    })
                })
            }

            function Qe() {
                return tt(void 0, void 0, Promise, function() {
                    var r;
                    return rt(this, function(e) {
                        try {
                            return r = indexedDB.deleteDatabase(Je), [2, new Promise(function(e, t) {
                                r.onerror = function() {
                                    return t(r.error)
                                }, r.onsuccess = function() {
                                    return e()
                                }
                            })]
                        } catch (e) {
                            return console.warn("delete crypto db error: ", e), [2, {}]
                        }
                        return [2]
                    })
                })
            }

            function Ze(e) {
                if (window.TextEncoder) return (new TextEncoder).encode(e);
                for (var t = decodeURIComponent(encodeURIComponent(e)), r = new Uint8Array(t.length), n = 0; n < t.length; n++) r[n] = t.charCodeAt(n);
                return r
            }

            function Xe() {
                return ct(void 0, void 0, Promise, function() {
                    var t;
                    return lt(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = S.EnvironmentUrls.apiGatewayUrl + "/hba-service/v1/getServerNonce", t = {
                                    url: t,
                                    withCredentials: !0
                                }, [4, cr.get(t)];
                            case 1:
                                return [2, e.sent().data]
                        }
                    })
                })
            }
            ye(Be);
            var Je, Ye, et = Ae = function() {
                    var e = document.querySelector('meta[name="hardware-backed-authentication-data"]'),
                        e = (null == e ? void 0 : e.dataset) || {};
                    return {
                        isBoundAuthTokenEnabled: "true" === e.isBoundAuthTokenEnabled,
                        boundAuthTokenWhitelist: e.boundAuthTokenWhitelist || "",
                        boundAuthTokenExemptlist: e.boundAuthTokenExemptlist || "",
                        hbaIndexedDBName: e.hbaIndexedDbName || "",
                        hbaIndexedDBObjStoreName: e.hbaIndexedDbObjStoreName || "",
                        hbaIndexedDBKeyName: e.hbaIndexedDbKeyName || "",
                        hbaIndexedDBVersion: parseInt(e.hbaIndexedDbVersion, 10) || 1,
                        batEventSampleRate: parseInt(e.batEventSampleRate, 10) || 0,
                        isSecureAuthenticationIntentEnabled: "true" === e.isSecureAuthenticationIntentEnabled
                    }
                },
                tt = function(e, i, s, u) {
                    return new(s = s || Promise)(function(r, t) {
                        function n(e) {
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
                            e.done ? r(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(n, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                rt = function(r, n) {
                    var a, o, i, s = {
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
                                for (; s;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = s.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < i[1]) {
                                                s.label = i[1], i = t;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(t);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = n.call(r, s)
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
                nt = function(t, n, i) {
                    return tt(void 0, void 0, Promise, function() {
                        return rt(this, function(e) {
                            try {
                                return [2, new Promise(function(a, o) {
                                    Je = t, Ye = n;
                                    var r = indexedDB.open(Je, 1);
                                    r.onsuccess = function(t) {
                                        var r = t.target.result;
                                        try {
                                            var e = r.transaction(Ye, "readonly"),
                                                n = e.objectStore(Ye).get(i);
                                            n.onsuccess = function(e) {
                                                e = e.target.result;
                                                a(e)
                                            }, n.onerror = function(e) {
                                                o(t.target.error)
                                            }, e.oncomplete = function(e) {
                                                r.close()
                                            }
                                        } catch (e) {
                                            o(e)
                                        }
                                    }, r.onerror = function(e) {
                                        o(e.target.error)
                                    }, r.onupgradeneeded = function(e) {
                                        var t = r.result;
                                        t.objectStoreNames.contains(Ye) || t.createObjectStore(Ye)
                                    }
                                })]
                            } catch (e) {
                                return console.warn("get value from indexedDB error: ", e), [2, {}]
                            }
                            return [2]
                        })
                    })
                },
                at = function(t, r, a, o) {
                    return tt(void 0, void 0, Promise, function() {
                        var n;
                        return rt(this, function(e) {
                            try {
                                return Je = t, Ye = r, n = indexedDB.open(Je, 1), [2, new Promise(function(t, r) {
                                    n.onerror = function(e) {
                                        console.error("indexeddb request error"), r()
                                    }, n.onupgradeneeded = function(e) {
                                        var t = n.result;
                                        t.objectStoreNames.contains(Ye) || t.createObjectStore(Ye)
                                    }, n.onsuccess = function(e) {
                                        try {
                                            e.target.result.transaction(Ye, "readwrite").objectStore(Ye).put(o, a).onsuccess = function() {
                                                t()
                                            }
                                        } catch (e) {
                                            console.error("indexeddb transaction error"), r()
                                        }
                                    }
                                })]
                            } catch (e) {
                                console.warn("updating indexedDB error: ", e)
                            }
                            return [2]
                        })
                    })
                },
                ot = function(e, i, s, u) {
                    return new(s = s || Promise)(function(r, t) {
                        function n(e) {
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
                            e.done ? r(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(n, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                it = function(r, n) {
                    var a, o, i, s = {
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
                                for (; s;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = s.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < i[1]) {
                                                s.label = i[1], i = t;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(t);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = n.call(r, s)
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
                st = (Fe = Ae()).hbaIndexedDBName,
                ut = Fe.hbaIndexedDBObjStoreName,
                Le = function(t) {
                    return ot(void 0, void 0, Promise, function() {
                        return it(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return st && ut ? [4, $e(st, ut, t)] : [3, 2];
                                case 1:
                                    e.sent(), e.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                },
                ct = function(e, i, s, u) {
                    return new(s = s || Promise)(function(r, t) {
                        function n(e) {
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
                            e.done ? r(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(n, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                lt = function(r, n) {
                    var a, o, i, s = {
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
                                for (; s;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = s.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < i[1]) {
                                                s.label = i[1], i = t;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(t);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = n.call(r, s)
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
                };

            function ht(t, e) {
                var r, n = Object.keys(t);
                return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), n.push.apply(n, r)), n
            }

            function pt(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ht(Object(a), !0).forEach(function(e) {
                        var t, r;
                        t = n, e = a[r = e], r in t ? Object.defineProperty(t, r, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[r] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : ht(Object(a)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return n
            }

            function ft() {
                return void 0 !== S.EventStream
            }

            function dt(e, t, r, n) {
                ft() && S.EventStream.SendEventWithTarget && (n = Object.values(wt).includes(n) ? n : wt.WWW, S.EventStream.SendEventWithTarget(e, t, r, n))
            }

            function gt() {
                St(xt.eventName.saiCreated, xt.context.hba, {})
            }

            function mt(e) {
                St(xt.eventName.saiMissing, xt.context.hba, {
                    messageRaw: e.message
                })
            }

            function yt(t) {
                return Tt(void 0, void 0, Promise, function() {
                    return Et(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return kt && Nt && It ? [4, at(kt, Nt, It, t).catch(function(e) {
                                    console.error("putting cryptoKeyPair error")
                                })] : [3, 2];
                            case 1:
                                e.sent(), e.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }

            function vt(e) {
                for (var t = new Uint8Array(e.length), r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                return t.buffer
            }

            function bt(e) {
                for (var t = "", r = new Uint8Array(e), n = 0; n < r.byteLength; n++) t += String.fromCharCode(r[n]);
                return btoa(t)
            }
            var Pt, wt = pt(pt({}, {
                    DEFAULT: 0,
                    WWW: 1,
                    STUDIO: 2,
                    DIAGNOSTIC: 3
                }), ft() ? S.EventStream.TargetTypes : {}),
                St = dt,
                xt = {
                    eventName: {
                        batCreated: "batCreated",
                        batMissing: "batMissing",
                        saiCreated: "saiCreated",
                        saiMissing: "saiMissing"
                    },
                    context: {
                        hba: "hba"
                    },
                    sessionStorageState: {
                        batSuccessEventSent: "batSuccessEventSent",
                        batMissingEventSent: "batMissingEventSent"
                    }
                },
                Ct = function(e, t) {
                    1e6 * Math.random() < t && St(xt.eventName.batCreated, xt.context.hba, {
                        field: e
                    })
                },
                At = function(e, t, r) {
                    1e6 * Math.random() < r && St(xt.eventName.batMissing, xt.context.hba, {
                        field: e,
                        kind: t.kind,
                        messageRaw: t.message
                    })
                },
                Tt = function(e, i, s, u) {
                    return new(s = s || Promise)(function(r, t) {
                        function n(e) {
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
                            e.done ? r(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(n, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                Et = function(r, n) {
                    var a, o, i, s = {
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
                                for (; s;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = s.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < i[1]) {
                                                s.label = i[1], i = t;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(t);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = n.call(r, s)
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
                kt = (Re = Ae()).hbaIndexedDBName,
                Nt = Re.hbaIndexedDBObjStoreName,
                It = Re.hbaIndexedDBKeyName,
                Ft = function(e) {
                    return function(t) {
                        if ("object" == typeof(e = t) && null !== e && "message" in e && "string" == typeof e.message) return t;
                        var e;
                        try {
                            return new Error(JSON.stringify(t))
                        } catch (e) {
                            return new Error(String(t))
                        }
                    }(e).message
                },
                Lt = function(e, i, s, u) {
                    return new(s = s || Promise)(function(r, t) {
                        function n(e) {
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
                            e.done ? r(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(n, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                Rt = function(r, n) {
                    var a, o, i, s = {
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
                                for (; s;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = s.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < i[1]) {
                                                s.label = i[1], i = t;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(t);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = n.call(r, s)
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
                Ot = (Oe = Ae()).hbaIndexedDBName,
                jt = Oe.hbaIndexedDBObjStoreName,
                Mt = Oe.hbaIndexedDBKeyName,
                Dt = Oe.isSecureAuthenticationIntentEnabled,
                Ut = function(e, i, s, u) {
                    return new(s = s || Promise)(function(r, t) {
                        function n(e) {
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
                            e.done ? r(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(n, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                Bt = function(r, n) {
                    var a, o, i, s = {
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
                                for (; s;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = s.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < i[1]) {
                                                s.label = i[1], i = t;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(t);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = n.call(r, s)
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
                qt = {
                    name: "ECDSA",
                    namedCurve: "P-256"
                },
                Vt = {
                    name: "ECDSA",
                    hash: {
                        name: "SHA-256"
                    }
                },
                _t = {
                    arrayBufferToBase64String: bt,
                    base64StringToArrayBuffer: function(e) {
                        e = atob(e);
                        return vt(e)
                    },
                    exportPublicKeyAsSpki: function(r) {
                        return Ut(void 0, void 0, Promise, function() {
                            var t;
                            return Bt(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, crypto.subtle.exportKey("spki", r)];
                                    case 1:
                                        return t = e.sent(), [2, bt(t)]
                                }
                            })
                        })
                    },
                    generateSigningKeyPairUnextractable: function() {
                        return Ut(void 0, void 0, Promise, function() {
                            return Bt(this, function(e) {
                                return [2, crypto.subtle.generateKey(qt, !1, ["sign"])]
                            })
                        })
                    },
                    hashStringWithSha256: function(r) {
                        return Ut(void 0, void 0, Promise, function() {
                            var t;
                            return Bt(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return t = Ze(r), [4, crypto.subtle.digest(Vt.hash.name, t)];
                                    case 1:
                                        return t = e.sent(), [2, bt(t)]
                                }
                            })
                        })
                    },
                    sign: function(r, n) {
                        return Ut(void 0, void 0, Promise, function() {
                            var t;
                            return Bt(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, crypto.subtle.sign(Vt, r, vt(n))];
                                    case 1:
                                        return t = e.sent(), [2, bt(t)]
                                }
                            })
                        })
                    },
                    stringToArrayBuffer: vt,
                    getHbaMeta: Ae,
                    deleteUserCryptoKeyPairUponLogout: Le,
                    generateSecureAuthIntent: Z = function() {
                        return Lt(void 0, void 0, Promise, function() {
                            var t, r, n, a, o, i;
                            return Rt(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!Dt || S.DeviceMeta && (0, S.DeviceMeta)().isInApp) return [2, null];
                                        e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 14, , 15]), [4, Xe()];
                                    case 2:
                                        if (!(t = e.sent())) return console.warn("No hba server nonce available."), mt({
                                            message: "NonceUnavailable"
                                        }), [2, null];
                                        if (r = {}, !(Ot && jt && Mt)) return [3, 6];
                                        e.label = 3;
                                    case 3:
                                        return e.trys.push([3, 5, , 6]), [4, nt(Ot, jt, Mt)];
                                    case 4:
                                        return r = e.sent(), [3, 6];
                                    case 5:
                                        return e.sent(), r = {}, [3, 6];
                                    case 6:
                                        return r && 0 !== Object.keys(r).length ? [3, 11] : [4, _t.generateSigningKeyPairUnextractable()];
                                    case 7:
                                        return r = e.sent(), [4, Qe()];
                                    case 8:
                                        return e.sent(), [4, yt(r)];
                                    case 9:
                                        return e.sent(), [4, nt(Ot, jt, Mt)];
                                    case 10:
                                        r = e.sent(), e.label = 11;
                                    case 11:
                                        return [4, _t.exportPublicKeyAsSpki(r.publicKey)];
                                    case 12:
                                        return n = e.sent(), a = Math.floor(Date.now() / 1e3), o = [n, a, t].join("|"), [4, _t.sign(r.privateKey, o)];
                                    case 13:
                                        return i = e.sent(), i = {
                                            clientPublicKey: n,
                                            clientEpochTimestamp: a,
                                            serverNonce: t,
                                            saiSignature: i
                                        }, gt(), [2, i];
                                    case 14:
                                        return i = e.sent(), mt({
                                            message: Ft(i)
                                        }), [2, null];
                                    case 15:
                                        return [2]
                                }
                            })
                        })
                    }
                };
            (je = Pt = Pt || {}).RequestExempt = "RequestExempt", je.RequestExemptError = "RequestExemptError", je.GetKeyPairFailed = "GetKeyPairFailed", je.UpdateKeyPairFailed = "UpdateKeyPairFailed", je.NoKeyPairFound = "NoKeyPairFound", je.RequestBodyHashFailed = "RequestBodyHashFailed", je.SignatureFailed = "SignatureFailed", je.Unknown = "Unknown";
            var zt, Ht = function() {
                    return (Ht = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Kt = function(e, i, s, u) {
                    return new(s = s || Promise)(function(r, t) {
                        function n(e) {
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
                            e.done ? r(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(n, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                Gt = function(r, n) {
                    var a, o, i, s = {
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
                                for (; s;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = s.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < i[1]) {
                                                s.label = i[1], i = t;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(t);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = n.call(r, s)
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
                Wt = "|",
                $t = [".roblox.com", ".robloxlabs.com", ".roblox.qq.com"],
                Qt = (He = Ae()).isBoundAuthTokenEnabled,
                Zt = He.hbaIndexedDBName,
                Xt = He.hbaIndexedDBObjStoreName,
                Jt = He.hbaIndexedDBKeyName,
                Yt = He.batEventSampleRate,
                er = function(e) {
                    for (var t = 0; t < $t.length; t++)
                        if (function(e) {
                                try {
                                    return new URL(e).hostname
                                } catch (e) {
                                    return ""
                                }
                            }(e.url).endsWith($t[t])) return !0;
                    return !1
                };

            function tr(e) {
                try {
                    return S.CurrentUser ? null !== S.CurrentUser && void 0 !== S.CurrentUser && S.CurrentUser.isAuthenticated ? er(e) ? Zt ? Xt ? Jt ? Qt ? ke(!0) : Ee({
                        kind: Pt.RequestExempt,
                        message: "BoundAuthTokenNotEnabled"
                    }) : Ee({
                        kind: Pt.RequestExempt,
                        message: "EmptyIndexedDbKeyName"
                    }) : Ee({
                        kind: Pt.RequestExempt,
                        message: "EmptyIndexedDbObjectStoreName"
                    }) : Ee({
                        kind: Pt.RequestExempt,
                        message: "EmptyIndexedDbName"
                    }) : Ee({
                        kind: Pt.RequestExempt,
                        message: "UrlNotFromAllowedHost"
                    }) : Ee({
                        kind: Pt.RequestExempt,
                        message: "CurrentUserNotAuthenticated"
                    }) : Ee({
                        kind: Pt.RequestExempt,
                        message: "NoCurrentUser"
                    })
                } catch (e) {
                    return Ee({
                        kind: Pt.RequestExemptError,
                        message: Ft(e)
                    })
                }
            }

            function rr(s) {
                var u;
                return Kt(this, void 0, Promise, function() {
                    var t, r, n, a, o, i;
                    return Gt(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (e.trys.push([0, 17, , 18]), zt) return [3, 8];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, nt(Zt, Xt, Jt)];
                            case 2:
                                return zt = e.sent(), [3, 4];
                            case 3:
                                return t = e.sent(), [2, Ee({
                                    message: Ft(t),
                                    kind: Pt.GetKeyPairFailed
                                })];
                            case 4:
                                return e.trys.push([4, 7, , 8]), zt ? [3, 6] : [4, function() {
                                    return Kt(this, void 0, Promise, function() {
                                        var t, r;
                                        return Gt(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return t = (null === S.Cookies || void 0 === S.Cookies ? void 0 : S.Cookies.getBrowserTrackerId()) || "", [4, nt(Zt, Xt, t)];
                                                case 1:
                                                    return (r = e.sent()) && Jt ? [4, at(Zt, Xt, Jt, r)] : [3, 4];
                                                case 2:
                                                    return e.sent(), [4, nt(Zt, Xt, Jt)];
                                                case 3:
                                                    r = e.sent(), e.label = 4;
                                                case 4:
                                                    return [2, r]
                                            }
                                        })
                                    })
                                }()];
                            case 5:
                                zt = e.sent(), e.label = 6;
                            case 6:
                                return [3, 8];
                            case 7:
                                return t = e.sent(), [2, Ee({
                                    message: Ft(t),
                                    kind: Pt.UpdateKeyPairFailed
                                })];
                            case 8:
                                if (!zt) return [2, Ee({
                                    message: "",
                                    kind: Pt.NoKeyPairFound
                                })];
                                r = Math.floor(Date.now() / 1e3).toString(), a = void 0, "object" == typeof s.data ? a = JSON.stringify(s.data) : "string" == typeof s.data && (a = s.data), n = "", e.label = 9;
                            case 9:
                                return e.trys.push([9, 11, , 12]), [4, _t.hashStringWithSha256(a)];
                            case 10:
                                return n = e.sent(), [3, 12];
                            case 11:
                                return a = e.sent(), [2, Ee({
                                    message: Ft(a),
                                    kind: Pt.RequestBodyHashFailed
                                })];
                            case 12:
                                o = s.url, i = (null !== (u = s.method) && void 0 !== u ? u : "").toUpperCase(), o = [n, r, o, i].join(Wt), i = "", e.label = 13;
                            case 13:
                                return e.trys.push([13, 15, , 16]), [4, _t.sign(zt.privateKey, o)];
                            case 14:
                                return i = e.sent(), [3, 16];
                            case 15:
                                return o = e.sent(), [2, Ee({
                                    message: Ft(o),
                                    kind: Pt.SignatureFailed
                                })];
                            case 16:
                                return [2, ke(["v1", n, r, i].join(Wt))];
                            case 17:
                                return i = e.sent(), console.warn("BAT generation error:", i), [2, Ee({
                                    message: Ft(i),
                                    kind: Pt.Unknown
                                })];
                            case 18:
                                return [2]
                        }
                    })
                })
            }

            function nr(n) {
                return Kt(this, void 0, Promise, function() {
                    var t, r;
                    return Gt(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return r = tr(n), Ge(r) ? (At(n.url, r.left, Yt), [2, n]) : [4, rr(n)];
                            case 1:
                                return t = e.sent(), r = Ht({}, n), We(t) ? (r.headers = Ht(Ht({}, r.headers), {
                                    "x-bound-auth-token": t.right
                                }), Ct(n.url, Yt)) : At(n.url, t.left, Yt), [2, r]
                        }
                    })
                })
            }
            var ar = function() {
                return (ar = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }).apply(this, arguments)
            };

            function or(e) {
                return e || Promise.reject(new Error("No config found")), nr(e).then(function(e) {
                    return me((e = ar({}, t = e), t.noCache && (e.headers = ar({
                        "Cache-Control": "no-cache, no-store, must-revalidate",
                        Pragma: "no-cache",
                        Expires: 0
                    }, e.headers)), t.noPragma && e.headers.Pragma && delete e.headers.Pragma, t.authBearerToken && (e.headers = ar(ar({}, e.headers), {
                        "X-Auth-Bearer-Token": t.authBearerToken
                    })), e));
                    var t
                })
            }

            function ir(e, t) {
                return or(ar(ar({
                    method: oe.GET,
                    url: e.url
                }, e), {
                    params: t
                }))
            }

            function sr(e, t) {
                return or(ar(ar({
                    method: oe.POST,
                    url: e.url
                }, e), {
                    data: t
                }))
            }

            function ur(e) {
                var t = [];
                return e && "object" == typeof e && (e = e.errors) instanceof Array ? (e.forEach(function(e) {
                    !e || "object" != typeof e || "number" == typeof(e = e.code) && t.push(e)
                }), t) : []
            }
            var cr = {
                methods: oe,
                get: ir,
                post: sr,
                delete: function(e, t) {
                    return or(ar(ar({
                        method: oe.DELETE,
                        url: e.url
                    }, e), {
                        params: t
                    }))
                },
                patch: function(e, t) {
                    return or(ar(ar({
                        method: oe.PATCH,
                        url: e.url
                    }, e), {
                        data: t
                    }))
                },
                put: function(e, t) {
                    return or(ar(ar({
                        method: oe.PUT,
                        url: e.url
                    }, e), {
                        data: t
                    }))
                },
                buildBatchPromises: function(e, t, r, n, a) {
                    for (var o = [], i = 0, s = e.slice(i, t), u = a || "userIds"; 0 < s.length;) {
                        var c = {};
                        c[u] = s, n ? o.push(sr(r, c)) : o.push(ir(r, c)), i += 1, s = e.slice(i * t, i * t + t)
                    }
                    return Promise.all(o)
                },
                createCancelToken: function() {
                    return me.CancelToken.source()
                },
                isCancelled: function(e) {
                    return me.isCancel(e)
                },
                getApiErrorCodes: ur,
                parseErrorCode: function(e) {
                    var t = ur(e);
                    return "object" == typeof e && ur(e.data).forEach(function(e) {
                        return t.push(e)
                    }), t[0] || null
                }
            };

            function lr(e, t, r) {
                this.list = e || [], this.filteredList = [], this.totalPages = 0, this.searchTypesMap = t || {}, this.sortTypesMap = r || {}
            }
            lr.prototype.updateList = function(e) {
                this.list = e, this.filteredList = []
            }, lr.prototype.search = function(e) {
                var t, r;
                e && (r = e.keyword, t = e.searchTypeKey, e = e.extraArgs, t = this.searchTypesMap[t], r = "string" == typeof r && r.trim(), this.filteredList = r && t && "function" == typeof t ? t(r, this.list, e) : this.list)
            }, lr.prototype.sort = function(e) {
                var t;
                e && (t = e.sortTypeKey, e = e.extraArgs, (t = this.sortTypesMap[t]) && "function" == typeof t && t(this.filteredList, e))
            }, lr.prototype.paginate = function(e) {
                var t;
                e && (t = e.offset, e = e.pageSize, this.totalPages = Math.ceil(this.filteredList.length / e), t = t < this.filteredList.length ? t : 0, e = this.filteredList.slice(t, t + e), this.filteredList = e)
            }, lr.prototype.filter = function(e, t, r) {
                return this.search(t), this.sort(r), this.paginate(e), {
                    list: this.filteredList,
                    totalPages: this.totalPages
                }
            }, Fe = lr, (Re = Cr = Cr || {}).RollerCoaster = "RollerCoaster", Re.Landing = "Landing";
            var hr = Cr,
                Oe = (pr.getInternalPageName = function() {
                    var e;
                    return pr.internalPageName || (e = document.querySelector('meta[name="page-meta"]')) && e.dataset && e.dataset.internalPageName && (pr.internalPageName = e.dataset.internalPageName), pr.internalPageName
                }, pr.setInternalPageName = function(e) {
                    var t = document.querySelector('meta[name="page-meta"]');
                    t && t.dataset && t.dataset.internalPageName && (t.dataset.internalPageName = e), pr.internalPageName = e
                }, pr.isLandingPage = function() {
                    var e = pr.getInternalPageName();
                    return e === hr.Landing || e === hr.RollerCoaster
                }, pr);

            function pr() {}

            function fr(e) {
                return void 0 === e && (e = window.location.search), br.parse(e)
            }

            function dr(e) {
                return void 0 === e && (e = {}), br.stringify(e)
            }

            function gr(e) {
                return S.Endpoints ? S.Endpoints.getAbsoluteUrl(e) : e
            }

            function mr(e, t) {
                return gr(e + "?" + dr(t))
            }

            function yr(e) {
                try {
                    var t = new URL(e);
                    return "http:" === t.protocol || "https:" === t.protocol
                } catch (e) {
                    return !1
                }
            }
            var Le = {
                    PageNames: hr,
                    PageNameProvider: Oe
                },
                vr = Xr(5442),
                br = Xr(4343),
                Z = {
                    getAbsoluteUrl: gr,
                    parseQueryString: fr,
                    composeQueryString: dr,
                    getQueryParam: function(e) {
                        return fr()[e]
                    },
                    formatUrl: vr.GP,
                    resolveUrl: vr.hd,
                    parseUrl: vr.qg,
                    parseUrlAndQueryString: br.parseUrl,
                    extractQueryString: br.extract,
                    getGameDetailReferralUrls: function(e) {
                        return gr("/games/refer?" + dr(e))
                    },
                    getUrlWithQueries: mr,
                    getUrlWithLocale: function(e, t) {
                        return t ? mr(e, {
                            locale: t
                        }) : e
                    },
                    getHelpDeskUrl: function(e, t, r) {
                        var n = r || "https://en.help.roblox.com/hc/";
                        return !!(r = e) && /^[a-zA-Z0-9-_]+$/.test(r) ? n += function(e) {
                            var t = {
                                "zh-cn": "zh-cn",
                                zh_cn: "zh-cn",
                                "zh-cjv": "zh-cn",
                                zh_cjv: "zh-cn",
                                "zh-hans": "zh-cn",
                                zh_hans: "zh-cn",
                                "zh-tw": "zh-tw",
                                zh_tw: "zh-tw",
                                "zh-hant": "zh-tw",
                                zh_hant: "zh-tw",
                                "en-us": "en-us",
                                en_us: "en-us",
                                en: "en-us",
                                "en-gb": "en-gb",
                                en_gb: "en-gb",
                                "fr-ca": "fr-ca",
                                fr_ca: "fr-ca",
                                nb: "no",
                                "nb-no": "no",
                                nb_no: "no"
                            };
                            if (t[e]) return t[e];
                            e = e.split(/[^a-zA-Z0-9]/).filter(Boolean);
                            return e[0] || "en"
                        }(e) : n += "en-us", !!(e = t) && /^[a-zA-Z0-9]+$/.test(e) && (n += "/articles/" + t), n
                    },
                    isValidHttpUrl: yr,
                    isValidStripeCheckoutUrl: function(e) {
                        return yr(e) && e.includes("checkout.stripe.com")
                    }
                },
                Pr = {
                    withPlus: ["", "K+", "M+", "B+", "T+"],
                    withoutPlus: ["", "K", "M", "B", "T"]
                };
            (je = Vr = Vr || {}).withPlus = "withPlus", je.withoutPlus = "withoutPlus";
            var wr, Sr = Vr,
                xr = {
                    getNumberFormat: function(t, e, r, n) {
                        try {
                            return new Intl.NumberFormat(e, {
                                style: r,
                                currency: n
                            }).format(t)
                        } catch (e) {
                            return t.toString()
                        }
                    }
                },
                Ae = {
                    getAbbreviatedValue: function(e, t, r, n) {
                        var a = "" + e;
                        if (r && e < r) return n ? xr.getNumberFormat(e) : a;
                        var o = t ? Pr[t] : Pr[Sr.withoutPlus],
                            i = Math.ceil(a.length / 3),
                            r = Math.pow(1e3, i),
                            n = Math.round(e / r * 10) / 10,
                            t = i - 1,
                            r = Math.pow(1e3, t),
                            r = Math.round(e / r * 10) / 10;
                        return a = 1e3 <= r ? n + o[i] : r + o[t]
                    },
                    suffixNames: Sr,
                    suffixes: Pr,
                    getTruncValue: function(e, t, r, n) {
                        var a = "" + e;
                        if (e < (t || 1e4)) return xr.getNumberFormat(e);
                        var o = r ? Pr[r] : Pr[Sr.withPlus],
                            t = o[o.length - 1],
                            r = 12,
                            t = o[Math.floor(Math.log(e) / Math.log(1e3))];
                        e < 1e6 ? r = 3 : e < 1e9 ? r = 6 : e < 1e12 && (r = 9);
                        r = a.length - r, n = n ? "." + a.substring(r, r + n) : "";
                        return a.substring(0, r) + n + t
                    }
                },
                He = {
                    quoteText: function(e) {
                        return '"' + e + '"'
                    }
                };
            (Re = wr = wr || {}).at = "@", Re.plus = "+";
            var Cr = {
                    connectors: wr,
                    concat: function(e, t, r) {
                        var n, a, o = "";
                        return null != e && e.length && (n = e.length, a = (a = t) || wr.at, a = r ? '<span class="connector">' + a + "</span>" : a, e.forEach(function(e, t) {
                            e = r ? '<span class="element">' + e + "</span>" : e;
                            o += t < n - 1 ? e + a : e
                        })), o
                    }
                },
                Oe = {
                    formatSeoName: function(e) {
                        return e ? e.replace(/'/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/^(COM\d|LPT\d|AUX|PRT|NUL|CON|BIN)$/i, "") || "unnamed" : null
                    }
                };

            function Ar(e) {
                return (0, vr.qg)(e)
            }

            function Tr(e) {
                return (0, vr.GP)(e)
            }

            function Er(e) {
                return new RegExp("^([a-z]+://|//)").test(e)
            }

            function kr(e) {
                var t = new RegExp("\\?(?!})").exec(e);
                return null === t ? {
                    url: e,
                    query: ""
                } : {
                    url: e.substring(0, t.index),
                    query: e.substring(t.index)
                }
            }

            function Nr(e) {
                var t, r = e;
                if (e.startsWith("/") || (r = "/" + e), t = Dr.exec(r)) {
                    var n = t[1];
                    if (t = n, "my" !== t.toLowerCase() && "js" !== t.toLowerCase()) return {
                        locale: n,
                        remainingPath: r.replace(Dr, "/")
                    }
                }
                return {
                    locale: null,
                    remainingPath: e
                }
            }

            function Ir(e) {
                if (!Er(e)) return e;
                var t = Ar(e),
                    r = Nr(t.pathname);
                return Br === r.locale || t.hostname !== window.location.hostname ? e : (t.pathname = Br ? "/" + Br + r.remainingPath : r.remainingPath, Tr(t))
            }

            function Fr(e) {
                if (void 0 === Mr) return e;
                if (0 === e.length) return e;
                if (Er(e)) return Ir(e);
                var t, r = e;
                return 0 !== e.indexOf("/") && (r = (t = window.location.pathname).slice(0, t.lastIndexOf("/") + 1) + e), void 0 === (e = Mr[r.toLowerCase()]) && (e = window.location.protocol + "//" + window.location.hostname + r), e = Ir(e)
            }

            function Lr(e, t, r) {
                var n = kr(e),
                    a = e = n.url.toLowerCase();
                return r && void 0 !== Mr[e.toLowerCase()] && (a = Fr(e)), -1 < a.indexOf("{") && $.each(t, function(e, t) {
                    e = new RegExp("{" + e.toLowerCase() + "(:.*?)?\\??}");
                    a = a.replace(e, t)
                }), a + n.query
            }

            function Rr(e) {
                return !!Er(e) && ! function(e) {
                    if (e === window.location.host) return !0;
                    for (var t = 0; t < Ur.length; t++)
                        if (e.endsWith(Ur[t])) return !0;
                    return !1
                }(Ar(e).hostname)
            }

            function Or(e) {
                return qr && Br && !Rr(e) ? Br + ";q=0.01" : null
            }

            function jr(e) {
                return "string" != typeof e && (e = ""), e.replace(/'/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/^(COM\d|LPT\d|AUX|PRT|NUL|CON|BIN)$/i, "") || "unnamed"
            }
            var je = function() {
                    var t = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#x2F;"
                    };
                    return function(e) {
                        return String(e).replace(/[&<>"'\\/]/g, function(e) {
                            return t[e]
                        })
                    }
                },
                Mr = {
                    "/game/report-stats": "https://assetgame." + (Vr = window.location.hostname.replace(/^[\w-]+\./, "")) + "/game/report-stats",
                    "/game/report-event": "https://assetgame." + Vr + "/game/report-event",
                    "/catalog/html": "https://search." + Vr + "/catalog/html",
                    "/catalog/json": "https://search." + Vr + "/catalog/json",
                    "/catalog/contents": "https://search." + Vr + "/catalog/contents",
                    "/catalog/items": "https://search." + Vr + "/catalog/items",
                    "/asset-hash-thumbnail/image": "https://assetgame." + Vr + "/asset-hash-thumbnail/image",
                    "/asset-hash-thumbnail/json": "https://assetgame." + Vr + "/asset-hash-thumbnail/json",
                    "/asset-thumbnail-3d/json": "https://assetgame." + Vr + "/asset-thumbnail-3d/json",
                    "/asset-thumbnail/image": "https://assetgame." + Vr + "/asset-thumbnail/image",
                    "/asset-thumbnail/json": "https://assetgame." + Vr + "/asset-thumbnail/json",
                    "/asset-thumbnail/url": "https://assetgame." + Vr + "/asset-thumbnail/url",
                    "/asset/request-thumbnail-fix": "https://assetgame." + Vr + "/asset/request-thumbnail-fix"
                },
                Dr = /^\/([A-Za-z]{2}(?:-[A-Za-z0-9]{2,3})?)(\/|$)/i,
                Ur = [".roblox.com", ".robloxlabs.com", ".roblox.qq.com"],
                Re = document.querySelector('meta[name="locale-data"]'),
                Br = null !== (Vr = null === (Vr = null == Re ? void 0 : Re.dataset) || void 0 === Vr ? void 0 : Vr.urlLocale) && void 0 !== Vr ? Vr : "",
                qr = "true" === (null === (Vr = null == Re ? void 0 : Re.dataset) || void 0 === Vr ? void 0 : Vr.overrideLanguageHeader),
                Re = !!Br,
                Vr = function(e, t, r) {
                    var n = Lr(e.url, e.data, e.crossDomain),
                        a = e;
                    a.url = n, -1 < (n = e.url).indexOf("rbxcdn.com") || -1 < n.indexOf("s3.amazonaws.com") || (a.crossDomain = !0, a.xhrFields = e.xhrFields || {}, a.xhrFields.withCredentials = !0);
                    e = Or(e.url);
                    e && r.setRequestHeader("Accept-Language", e)
                };

            function _r(e) {
                var t, r;
                e.hostname === window.location.hostname && (t = e.href, (r = Ir(t)) !== t && (e.href = r))
            }
            $.ajaxPrefilter(Vr), Re && $(document).ready(function() {
                ! function() {
                    for (var e = document.links, t = 0; t < e.length; t++) {
                        var r = e[t];
                        _r(r)
                    }
                }(), $("body").on("click", "a", function() {
                    _r(this)
                })
            });
            var Vr = {
                    getAbsoluteUrl: Fr,
                    generateAbsoluteUrl: Lr,
                    getBadgeDetailsUrl: function(e, t) {
                        return Fr("/badges/" + e + "/" + jr(t))
                    },
                    getCatalogItemUrl: function(e, t) {
                        return Fr("/catalog/" + e + "/" + jr(t))
                    },
                    isAbsolute: Er,
                    splitAtQueryString: kr,
                    ajaxPrefilter: Vr,
                    removeUrlLocale: function(e) {
                        var t = e,
                            r = null;
                        Er(e) && (t = (r = Ar(e)).pathname);
                        t = Nr(t);
                        return t.locale ? r ? (r.pathname = t.remainingPath, Tr(r)) : t.remainingPath : e
                    },
                    attachUrlLocale: Ir,
                    isThirdPartyUrl: Rr,
                    getPageUrlLocale: function() {
                        return Br
                    },
                    setPageUrlLocale: function(e) {
                        Br = e
                    },
                    getOverrideLanguageHeader: function() {
                        return qr
                    },
                    setOverrideLanguageHeader: function(e) {
                        qr = e
                    },
                    getAcceptLanguageValue: Or,
                    addCrossDomainOptionsToAllRequests: !0,
                    supportLocalizedUrls: Re,
                    Urls: Mr
                },
                Re = jQuery,
                zr = Xr.n(Re),
                Hr = 0;
            try {
                var Kr = et();
                if (Kr && Kr.boundAuthTokenWhitelist)
                    for (var Gr = JSON.parse(Kr.boundAuthTokenWhitelist).Whitelist, Wr = 0; Wr < Gr.length; Wr += 1) {
                        var $r = Gr[Wr];
                        if ("jQuery" === $r.apiSite) {
                            Hr = Math.max(0, parseInt($r.sampleRate, 10) || 0);
                            break
                        }
                    }
            } catch (e) {
                console.error("jQuery rollout calculation error:", e)
            }
            var Qr, Zr = null;
            try {
                S.CurrentUser && (Qr = parseInt(S.CurrentUser.userId, 10), Zr = Number.isNaN(Qr) || Qr <= 0 ? null : Qr % 1e6)
            } catch (e) {
                console.error("CurrentUser hash calculation error:", e)
            }(1e6 === Hr || null !== Zr && Zr < Hr) && zr().ajaxPrefilter(function(e) {
                var t, r = e.method || "GET",
                    a = nr({
                        url: e.url,
                        withCredentials: (null === (t = null == e ? void 0 : e.xhrFields) || void 0 === t ? void 0 : t.withCredentials) || !1,
                        headers: {},
                        method: r,
                        data: "GET" === r ? void 0 : e.data
                    }),
                    o = e.xhr || zr().ajaxSettings.xhr;
                e.xhr = function() {
                    var r = o(),
                        n = r.send;
                    return r.send = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        a.then(function(t) {
                            try {
                                Object.keys(t.headers).forEach(function(e) {
                                    r.setRequestHeader(e, t.headers[e].toString())
                                })
                            } catch (e) {
                                console.error("Could not set BAT headers:", e)
                            }
                        }).finally(function() {
                            n.apply(r, e)
                        })
                    }, r
                }
            }), window.CoreUtilities = {
                abbreviateNumber: Ae,
                accessibility: b,
                BatchRequestFactory: I,
                batchRequestFactory: L,
                clipboard: O,
                concatTexts: Cr,
                CoreCursorPager: n,
                CursorPager: B,
                cursorPaginationConstants: j,
                dateService: H,
                defer: function() {
                    return new K
                },
                downloadFile: function(e, t, r) {
                    e = new Blob([e], {
                        type: r
                    }), r = URL.createObjectURL(e), e = document.createElement("a");
                    e.setAttribute("href", r), e.setAttribute("download", t), e.style.visibility = "hidden", document.body.appendChild(e), e.click(), document.body.removeChild(e)
                },
                escapeHtml: je,
                getCurrentBrowser: function() {
                    if (void 0 !== (null === navigator || void 0 === navigator ? void 0 : navigator.userAgent)) {
                        var e = navigator.userAgent;
                        if (null !== /Edge\/([0-9._]+)/.exec(e) || null !== /EdgA?\/([0-9.]+)/.exec(e)) return z.Edge;
                        if (null !== /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/.exec(e)) return z.Chrome;
                        if (null !== /Firefox\/([0-9.]+)(?:\s|$)/.exec(e)) return z.Firefox;
                        if (null !== /Opera\/([0-9.]+)(?:\s|$)/.exec(e) || null !== /OPR\/([0-9.]+)(:?\s|$)/.exec(e)) return z.Opera;
                        if (null !== /Trident\/7\.0.*rv:([0-9.]+).*\).*Gecko$/.exec(e) || null !== /MSIE\s([0-9.]+);.*Trident\/[4-7].0/.exec(e) || null !== /MSIE\s(7\.0)/.exec(e)) return z.IE;
                        if (null !== /Version\/([0-9._]+).*Safari/.exec(e)) return z.Safari
                    }
                    return z.Unknown
                },
                httpRequestMethods: oe,
                httpResponseCodes: ie,
                httpService: cr,
                ListFilterProvider: Fe,
                numberFormat: xr,
                pageName: Le,
                PagerError: c,
                PaginationCache: D,
                quote: He,
                ready: function(e) {
                    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
                },
                regex: s,
                seoName: Oe,
                SortOrder: o,
                urlService: Z,
                uuidService: e
            }, window.Roblox = window.Roblox || {}, window.Roblox.Endpoints = Vr
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/cef470f152a93b61c1f8413ff79bb6db-coreUtilities.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("CoreUtilities");