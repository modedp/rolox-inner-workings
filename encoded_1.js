!function () {
  var t = {
    5250: function (I, U, P) {
      var R;
      /**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
      I = P.nmd(I),
      function () {
        var zi,
        Vi = 'Expected a function',
        qi = '__lodash_hash_undefined__',
        Hi = '__lodash_placeholder__',
        Gi = 16,
        Ki = 32,
        $i = 64,
        Qi = 128,
        Yi = 256,
        Zi = 1 / 0,
        Ji = 9007199254740991,
        Xi = NaN,
        ea = 4294967295,
        na = [
          ['ary',
          Qi],
          [
            'bind',
            1
          ],
          [
            'bindKey',
            2
          ],
          [
            'curry',
            8
          ],
          [
            'curryRight',
            Gi
          ],
          [
            'flip',
            512
          ],
          [
            'partial',
            Ki
          ],
          [
            'partialRight',
            $i
          ],
          [
            'rearg',
            Yi
          ]
        ],
        ta = '[object Arguments]',
        ra = '[object Array]',
        oa = '[object Boolean]',
        ia = '[object Date]',
        aa = '[object Error]',
        ua = '[object Function]',
        ca = '[object GeneratorFunction]',
        la = '[object Map]',
        sa = '[object Number]',
        fa = '[object Object]',
        ha = '[object Promise]',
        da = '[object RegExp]',
        pa = '[object Set]',
        va = '[object String]',
        ga = '[object Symbol]',
        ya = '[object WeakMap]',
        ma = '[object ArrayBuffer]',
        ba = '[object DataView]',
        wa = '[object Float32Array]',
        Sa = '[object Float64Array]',
        _a = '[object Int8Array]',
        Aa = '[object Int16Array]',
        Ea = '[object Int32Array]',
        xa = '[object Uint8Array]',
        Ca = '[object Uint8ClampedArray]',
        La = '[object Uint16Array]',
        ka = '[object Uint32Array]',
        Ta = /\b__p \+= '';/g,
        Ia = /\b(__p \+=) '' \+/g,
        Ua = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        Pa = /&(?:amp|lt|gt|quot|#39);/g,
        Ra = /[&<>"']/g,
        Oa = RegExp(Pa.source),
        Ba = RegExp(Ra.source),
        Da = /<%-([\s\S]+?)%>/g,
        ja = /<%([\s\S]+?)%>/g,
        Fa = /<%=([\s\S]+?)%>/g,
        Ma = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Na = /^\w*$/,
        Wa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        za = /[\\^$.*+?()[\]{}|]/g,
        Va = RegExp(za.source),
        qa = /^\s+/,
        t = /\s/,
        Ha = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        Ga = /\{\n\/\* \[wrapped with (.+)\] \*/,
        Ka = /,? & /,
        $a = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        Qa = /[()=,{}\[\]\/\s]/,
        Ya = /\\(\\)?/g,
        Za = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        Ja = /\w*$/,
        Xa = /^[-+]0x[0-9a-f]+$/i,
        eu = /^0b[01]+$/i,
        nu = /^\[object .+?Constructor\]$/,
        tu = /^0o[0-7]+$/i,
        ru = /^(?:0|[1-9]\d*)$/,
        ou = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        iu = /($^)/,
        au = /['\n\r\u2028\u2029\\]/g,
        e = '\\ud800-\\udfff',
        n = '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff',
        r = '\\u2700-\\u27bf',
        o = 'a-z\\xdf-\\xf6\\xf8-\\xff',
        i = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
        a = '\\ufe0e\\ufe0f',
        u = '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
        c = '[\'’]',
        l = '[' + e + ']',
        s = '[' + u + ']',
        f = '[' + n + ']',
        h = '\\d+',
        d = '[' + r + ']',
        p = '[' + o + ']',
        v = '[^' + e + u + h + r + o + i + ']',
        g = '\\ud83c[\\udffb-\\udfff]',
        y = '[^' + e + ']',
        m = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        b = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        w = '[' + i + ']',
        S = '\\u200d',
        _ = '(?:' + p + '|' + v + ')',
        u = '(?:' + w + '|' + v + ')',
        r = '(?:[\'’](?:d|ll|m|re|s|t|ve))?',
        o = '(?:[\'’](?:D|LL|M|RE|S|T|VE))?',
        i = '(?:' + f + '|' + g + ')' + '?',
        v = '[' + a + ']?',
        i = v + i + ('(?:' + S + '(?:' + [y,
        m,
        b].join('|') + ')' + v + i + ')*'),
        d = '(?:' + [d,
        m,
        b].join('|') + ')' + i,
        l = '(?:' + [y + f + '?',
        f,
        m,
        b,
        l].join('|') + ')',
        uu = RegExp(c, 'g'),
        cu = RegExp(f, 'g'),
        A = RegExp(g + '(?=' + g + ')|' + l + i, 'g'),
        lu = RegExp(
          [w + '?' + p + '+' + r + '(?=' + [s,
          w,
          '$'].join('|') + ')',
          u + '+' + o + '(?=' + [s,
          w + _,
          '$'].join('|') + ')',
          w + '?' + _ + '+' + r,
          w + '+' + o,
          '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
          '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
          h,
          d].join('|'),
          'g'
        ),
        E = RegExp('[' + S + e + n + a + ']'),
        su = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        fu = [
          'Array',
          'Buffer',
          'DataView',
          'Date',
          'Error',
          'Float32Array',
          'Float64Array',
          'Function',
          'Int8Array',
          'Int16Array',
          'Int32Array',
          'Map',
          'Math',
          'Object',
          'Promise',
          'RegExp',
          'Set',
          'String',
          'Symbol',
          'TypeError',
          'Uint8Array',
          'Uint8ClampedArray',
          'Uint16Array',
          'Uint32Array',
          'WeakMap',
          '_',
          'clearTimeout',
          'isFinite',
          'parseInt',
          'setTimeout'
        ],
        hu = - 1,
        du = {};
        du[wa] = du[Sa] = du[_a] = du[Aa] = du[Ea] = du[xa] = du[Ca] = du[La] = du[ka] = !0,
        du[ta] = du[ra] = du[ma] = du[oa] = du[ba] = du[ia] = du[aa] = du[ua] = du[la] = du[sa] = du[fa] = du[da] = du[pa] = du[va] = du[ya] = !1;
        var pu = {};
        pu[ta] = pu[ra] = pu[ma] = pu[ba] = pu[oa] = pu[ia] = pu[wa] = pu[Sa] = pu[_a] = pu[Aa] = pu[Ea] = pu[la] = pu[sa] = pu[fa] = pu[da] = pu[pa] = pu[va] = pu[ga] = pu[xa] = pu[Ca] = pu[La] = pu[ka] = !0,
        pu[aa] = pu[ua] = pu[ya] = !1;
        var x = {
          '\\': '\\',
          '\'': '\'',
          '\n': 'n',
          '\r': 'r',
          '\u2028': 'u2028',
          '\u2029': 'u2029'
        },
        vu = parseFloat,
        gu = parseInt,
        n = 'object' == typeof P.g &&
        P.g &&
        P.g.Object === Object &&
        P.g,
        a = 'object' == typeof self &&
        self &&
        self.Object === Object &&
        self,
        yu = n ||
        a ||
        Function('return this') (),
        a = U &&
        !U.nodeType &&
        U,
        C = a &&
        I &&
        !I.nodeType &&
        I,
        mu = C &&
        C.exports === a,
        L = mu &&
        n.process,
        n = function () {
          try {
            var e = C &&
            C.require &&
            C.require('util').types;
            return e ? e : L &&
            L.binding &&
            L.binding('util')
          } catch (e) {
          }
        }(),
        bu = n &&
        n.isArrayBuffer,
        wu = n &&
        n.isDate,
        Su = n &&
        n.isMap,
        _u = n &&
        n.isRegExp,
        Au = n &&
        n.isSet,
        Eu = n &&
        n.isTypedArray;
        function xu(e, n, t) {
          switch (t.length) {
            case 0:
              return e.call(n);
            case 1:
              return e.call(n, t[0]);
            case 2:
              return e.call(n, t[0], t[1]);
            case 3:
              return e.call(n, t[0], t[1], t[2])
          }
          return e.apply(n, t)
        }
        function Cu(e, n, t, r) {
          for (var o = - 1, i = null == e ? 0 : e.length; ++o < i; ) {
            var a = e[o];
            n(r, a, t(a), e)
          }
          return r
        }
        function Lu(e, n) {
          for (var t = - 1, r = null == e ? 0 : e.length; ++t < r && !1 !== n(e[t], t, e); );
          return e
        }
        function ku(e, n) {
          for (var t = null == e ? 0 : e.length; t-- && !1 !== n(e[t], t, e); );
          return e
        }
        function Tu(e, n) {
          for (var t = - 1, r = null == e ? 0 : e.length; ++t < r; ) if (!n(e[t], t, e)) return !1;
          return !0
        }
        function Iu(e, n) {
          for (var t = - 1, r = null == e ? 0 : e.length, o = 0, i = []; ++t < r; ) {
            var a = e[t];
            n(a, t, e) &&
            (i[o++] = a)
          }
          return i
        }
        function Uu(e, n) {
          return !!(null == e ? 0 : e.length) &&
          - 1 < Nu(e, n, 0)
        }
        function Pu(e, n, t) {
          for (var r = - 1, o = null == e ? 0 : e.length; ++r < o; ) if (t(n, e[r])) return !0;
          return !1
        }
        function Ru(e, n) {
          for (var t = - 1, r = null == e ? 0 : e.length, o = Array(r); ++t < r; ) o[t] = n(e[t], t, e);
          return o
        }
        function Ou(e, n) {
          for (var t = - 1, r = n.length, o = e.length; ++t < r; ) e[o + t] = n[t];
          return e
        }
        function Bu(e, n, t, r) {
          var o = - 1,
          i = null == e ? 0 : e.length;
          for (r && i && (t = e[++o]); ++o < i; ) t = n(t, e[o], o, e);
          return t
        }
        function Du(e, n, t, r) {
          var o = null == e ? 0 : e.length;
          for (r && o && (t = e[--o]); o--; ) t = n(t, e[o], o, e);
          return t
        }
        function ju(e, n) {
          for (var t = - 1, r = null == e ? 0 : e.length; ++t < r; ) if (n(e[t], t, e)) return !0;
          return !1
        }
        var k = qu('length');
        function Fu(e, r, n) {
          var o;
          return n(e, function (e, n, t) {
            if (r(e, n, t)) return o = n,
            !1
          }),
          o
        }
        function Mu(e, n, t, r) {
          for (var o = e.length, i = t + (r ? 1 : - 1); r ? i-- : ++i < o; ) if (n(e[i], i, e)) return i;
          return - 1
        }
        function Nu(e, n, t) {
          return n == n ? function (e, n, t) {
            var r = t - 1,
            o = e.length;
            for (; ++r < o; ) if (e[r] === n) return r;
            return - 1
          }(e, n, t) : Mu(e, zu, t)
        }
        function Wu(e, n, t, r) {
          for (var o = t - 1, i = e.length; ++o < i; ) if (r(e[o], n)) return o;
          return - 1
        }
        function zu(e) {
          return e != e
        }
        function Vu(e, n) {
          var t = null == e ? 0 : e.length;
          return t ? Gu(e, n) / t : Xi
        }
        function qu(n) {
          return function (e) {
            return null == e ? zi : e[n]
          }
        }
        function T(n) {
          return function (e) {
            return null == n ? zi : n[e]
          }
        }
        function Hu(e, r, o, i, n) {
          return n(e, function (e, n, t) {
            o = i ? (i = !1, e) : r(o, e, n, t)
          }),
          o
        }
        function Gu(e, n) {
          for (var t, r = - 1, o = e.length; ++r < o; ) {
            var i = n(e[r]);
            i !== zi &&
            (t = t === zi ? i : t + i)
          }
          return t
        }
        function Ku(e, n) {
          for (var t = - 1, r = Array(e); ++t < e; ) r[t] = n(t);
          return r
        }
        function $u(e) {
          return e &&
          e.slice(0, sc(e) + 1).replace(qa, '')
        }
        function Qu(n) {
          return function (e) {
            return n(e)
          }
        }
        function Yu(n, e) {
          return Ru(e, function (e) {
            return n[e]
          })
        }
        function Zu(e, n) {
          return e.has(n)
        }
        function Ju(e, n) {
          for (var t = - 1, r = e.length; ++t < r && - 1 < Nu(n, e[t], 0); );
          return t
        }
        function Xu(e, n) {
          for (var t = e.length; t-- && - 1 < Nu(n, e[t], 0); );
          return t
        }
        var ec = T({
          'À': 'A',
          'Á': 'A',
          'Â': 'A',
          'Ã': 'A',
          'Ä': 'A',
          'Å': 'A',
          'à': 'a',
          'á': 'a',
          'â': 'a',
          'ã': 'a',
          'ä': 'a',
          'å': 'a',
          'Ç': 'C',
          'ç': 'c',
          'Ð': 'D',
          'ð': 'd',
          'È': 'E',
          'É': 'E',
          'Ê': 'E',
          'Ë': 'E',
          'è': 'e',
          'é': 'e',
          'ê': 'e',
          'ë': 'e',
          'Ì': 'I',
          'Í': 'I',
          'Î': 'I',
          'Ï': 'I',
          'ì': 'i',
          'í': 'i',
          'î': 'i',
          'ï': 'i',
          'Ñ': 'N',
          'ñ': 'n',
          'Ò': 'O',
          'Ó': 'O',
          'Ô': 'O',
          'Õ': 'O',
          'Ö': 'O',
          'Ø': 'O',
          'ò': 'o',
          'ó': 'o',
          'ô': 'o',
          'õ': 'o',
          'ö': 'o',
          'ø': 'o',
          'Ù': 'U',
          'Ú': 'U',
          'Û': 'U',
          'Ü': 'U',
          'ù': 'u',
          'ú': 'u',
          'û': 'u',
          'ü': 'u',
          'Ý': 'Y',
          'ý': 'y',
          'ÿ': 'y',
          'Æ': 'Ae',
          'æ': 'ae',
          'Þ': 'Th',
          'þ': 'th',
          'ß': 'ss',
          'Ā': 'A',
          'Ă': 'A',
          'Ą': 'A',
          'ā': 'a',
          'ă': 'a',
          'ą': 'a',
          'Ć': 'C',
          'Ĉ': 'C',
          'Ċ': 'C',
          'Č': 'C',
          'ć': 'c',
          'ĉ': 'c',
          'ċ': 'c',
          'č': 'c',
          'Ď': 'D',
          'Đ': 'D',
          'ď': 'd',
          'đ': 'd',
          'Ē': 'E',
          'Ĕ': 'E',
          'Ė': 'E',
          'Ę': 'E',
          'Ě': 'E',
          'ē': 'e',
          'ĕ': 'e',
          'ė': 'e',
          'ę': 'e',
          'ě': 'e',
          'Ĝ': 'G',
          'Ğ': 'G',
          'Ġ': 'G',
          'Ģ': 'G',
          'ĝ': 'g',
          'ğ': 'g',
          'ġ': 'g',
          'ģ': 'g',
          'Ĥ': 'H',
          'Ħ': 'H',
          'ĥ': 'h',
          'ħ': 'h',
          'Ĩ': 'I',
          'Ī': 'I',
          'Ĭ': 'I',
          'Į': 'I',
          'İ': 'I',
          'ĩ': 'i',
          'ī': 'i',
          'ĭ': 'i',
          'į': 'i',
          'ı': 'i',
          'Ĵ': 'J',
          'ĵ': 'j',
          'Ķ': 'K',
          'ķ': 'k',
          'ĸ': 'k',
          'Ĺ': 'L',
          'Ļ': 'L',
          'Ľ': 'L',
          'Ŀ': 'L',
          'Ł': 'L',
          'ĺ': 'l',
          'ļ': 'l',
          'ľ': 'l',
          'ŀ': 'l',
          'ł': 'l',
          'Ń': 'N',
          'Ņ': 'N',
          'Ň': 'N',
          'Ŋ': 'N',
          'ń': 'n',
          'ņ': 'n',
          'ň': 'n',
          'ŋ': 'n',
          'Ō': 'O',
          'Ŏ': 'O',
          'Ő': 'O',
          'ō': 'o',
          'ŏ': 'o',
          'ő': 'o',
          'Ŕ': 'R',
          'Ŗ': 'R',
          'Ř': 'R',
          'ŕ': 'r',
          'ŗ': 'r',
          'ř': 'r',
          'Ś': 'S',
          'Ŝ': 'S',
          'Ş': 'S',
          'Š': 'S',
          'ś': 's',
          'ŝ': 's',
          'ş': 's',
          'š': 's',
          'Ţ': 'T',
          'Ť': 'T',
          'Ŧ': 'T',
          'ţ': 't',
          'ť': 't',
          'ŧ': 't',
          'Ũ': 'U',
          'Ū': 'U',
          'Ŭ': 'U',
          'Ů': 'U',
          'Ű': 'U',
          'Ų': 'U',
          'ũ': 'u',
          'ū': 'u',
          'ŭ': 'u',
          'ů': 'u',
          'ű': 'u',
          'ų': 'u',
          'Ŵ': 'W',
          'ŵ': 'w',
          'Ŷ': 'Y',
          'ŷ': 'y',
          'Ÿ': 'Y',
          'Ź': 'Z',
          'Ż': 'Z',
          'Ž': 'Z',
          'ź': 'z',
          'ż': 'z',
          'ž': 'z',
          'Ĳ': 'IJ',
          'ĳ': 'ij',
          'Œ': 'Oe',
          'œ': 'oe',
          'ŉ': '\'n',
          'ſ': 's'
        }),
        nc = T({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          '\'': '&#39;'
        });
        function tc(e) {
          return '\\' + x[e]
        }
        function rc(e) {
          return E.test(e)
        }
        function oc(e) {
          var t = - 1,
          r = Array(e.size);
          return e.forEach(function (e, n) {
            r[++t] = [
              n,
              e
            ]
          }),
          r
        }
        function ic(n, t) {
          return function (e) {
            return n(t(e))
          }
        }
        function ac(e, n) {
          for (var t = - 1, r = e.length, o = 0, i = []; ++t < r; ) {
            var a = e[t];
            a !== n &&
            a !== Hi ||
            (e[t] = Hi, i[o++] = t)
          }
          return i
        }
        function uc(e) {
          var n = - 1,
          t = Array(e.size);
          return e.forEach(function (e) {
            t[++n] = e
          }),
          t
        }
        function cc(e) {
          return (
            rc(e) ? function (e) {
              var n = A.lastIndex = 0;
              for (; A.test(e); ) ++n;
              return n
            }
             : k
          ) (e)
        }
        function lc(e) {
          return rc(e) ? e.match(A) ||
          [] : e.split('')
        }
        function sc(e) {
          for (var n = e.length; n-- && t.test(e.charAt(n)); );
          return n
        }
        var fc = T({
          '&amp;': '&',
          '&lt;': '<',
          '&gt;': '>',
          '&quot;': '"',
          '&#39;': '\''
        });
        var hc = function e(n) {
          var A = (n = null == n ? yu : hc.defaults(yu.Object(), n, hc.pick(yu, fu))).Array,
          t = n.Date,
          f = n.Error,
          h = n.Function,
          o = n.Math,
          v = n.Object,
          d = n.RegExp,
          s = n.String,
          _ = n.TypeError,
          i = A.prototype,
          r = h.prototype,
          p = v.prototype,
          a = n['__core-js_shared__'],
          u = r.toString,
          m = p.hasOwnProperty,
          c = 0,
          l = (Ri = /[^.]+$/.exec(a && a.keys && a.keys.IE_PROTO || '')) ? 'Symbol(src)_1.' + Ri : '',
          g = p.toString,
          y = u.call(v),
          b = yu._,
          w = d(
            '^' + u.call(m).replace(za, '\\$&').replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) + '$'
          ),
          S = mu ? n.Buffer : zi,
          E = n.Symbol,
          x = n.Uint8Array,
          C = S ? S.allocUnsafe : zi,
          L = ic(v.getPrototypeOf, v),
          k = v.create,
          T = p.propertyIsEnumerable,
          I = i.splice,
          U = E ? E.isConcatSpreadable : zi,
          P = E ? E.iterator : zi,
          R = E ? E.toStringTag : zi,
          O = function () {
            try {
              var e = zt(v, 'defineProperty');
              return e({
              }, '', {
              }),
              e
            } catch (e) {
            }
          }(),
          B = n.clearTimeout !== yu.clearTimeout &&
          n.clearTimeout,
          D = t &&
          t.now !== yu.Date.now &&
          t.now,
          j = n.setTimeout !== yu.setTimeout &&
          n.setTimeout,
          F = o.ceil,
          M = o.floor,
          N = v.getOwnPropertySymbols,
          W = S ? S.isBuffer : zi,
          z = n.isFinite,
          V = i.join,
          q = ic(v.keys, v),
          H = o.max,
          G = o.min,
          K = t.now,
          $ = n.parseInt,
          Q = o.random,
          Y = i.reverse,
          Z = zt(n, 'DataView'),
          J = zt(n, 'Map'),
          X = zt(n, 'Promise'),
          ee = zt(n, 'Set'),
          ne = zt(n, 'WeakMap'),
          te = zt(v, 'create'),
          re = ne &&
          new ne,
          oe = {},
          ie = gr(Z),
          ae = gr(J),
          ue = gr(X),
          ce = gr(ee),
          le = gr(ne),
          se = E ? E.prototype : zi,
          fe = se ? se.valueOf : zi,
          he = se ? se.toString : zi;
          function de(e) {
            if (Oo(e) && !Ao(e) && !(e instanceof me)) {
              if (e instanceof ye) return e;
              if (m.call(e, '__wrapped__')) return yr(e)
            }
            return new ye(e)
          }
          var pe = function (e) {
            if (!Ro(e)) return {
            };
            if (k) return k(e);
            ve.prototype = e;
            e = new ve;
            return ve.prototype = zi,
            e
          };
          function ve() {
          }
          function ge() {
          }
          function ye(e, n) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!n,
            this.__index__ = 0,
            this.__values__ = zi
          }
          function me(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = ea,
            this.__views__ = []
          }
          function be(e) {
            var n = - 1,
            t = null == e ? 0 : e.length;
            for (this.clear(); ++n < t; ) {
              var r = e[n];
              this.set(r[0], r[1])
            }
          }
          function we(e) {
            var n = - 1,
            t = null == e ? 0 : e.length;
            for (this.clear(); ++n < t; ) {
              var r = e[n];
              this.set(r[0], r[1])
            }
          }
          function Se(e) {
            var n = - 1,
            t = null == e ? 0 : e.length;
            for (this.clear(); ++n < t; ) {
              var r = e[n];
              this.set(r[0], r[1])
            }
          }
          function _e(e) {
            var n = - 1,
            t = null == e ? 0 : e.length;
            for (this.__data__ = new Se; ++n < t; ) this.add(e[n])
          }
          function Ae(e) {
            e = this.__data__ = new we(e);
            this.size = e.size
          }
          function Ee(e, n) {
            var t,
            r = Ao(e),
            o = !r &&
            _o(e),
            i = !r &&
            !o &&
            Lo(e),
            a = !r &&
            !o &&
            !i &&
            zo(e),
            u = r ||
            o ||
            i ||
            a,
            c = u ? Ku(e.length, s) : [],
            l = c.length;
            for (t in e) !n &&
            !m.call(e, t) ||
            u &&
            (
              'length' == t ||
              i &&
              ('offset' == t || 'parent' == t) ||
              a &&
              ('buffer' == t || 'byteLength' == t || 'byteOffset' == t) ||
              Qt(t, l)
            ) ||
            c.push(t);
            return c
          }
          function xe(e) {
            var n = e.length;
            return n ? e[An(0, n - 1)] : zi
          }
          function Ce(e, n) {
            return fr(ot(e), Be(n, 0, e.length))
          }
          function Le(e) {
            return fr(ot(e))
          }
          function ke(e, n, t) {
            (t === zi || bo(e[n], t)) &&
            (t !== zi || n in e) ||
            Re(e, n, t)
          }
          function Te(e, n, t) {
            var r = e[n];
            m.call(e, n) &&
            bo(r, t) &&
            (t !== zi || n in e) ||
            Re(e, n, t)
          }
          function Ie(e, n) {
            for (var t = e.length; t--; ) if (bo(e[t][0], n)) return t;
            return - 1
          }
          function Ue(e, r, o, i) {
            return Ne(e, function (e, n, t) {
              r(i, e, o(e), t)
            }),
            i
          }
          function Pe(e, n) {
            return e &&
            it(n, si(n), e)
          }
          function Re(e, n, t) {
            '__proto__' == n &&
            O ? O(e, n, {
              configurable: !0,
              enumerable: !0,
              value: t,
              writable: !0
            }) : e[n] = t
          }
          function Oe(e, n) {
            for (var t = - 1, r = n.length, o = A(r), i = null == e; ++t < r; ) o[t] = i ? zi : ii(e, n[t]);
            return o
          }
          function Be(e, n, t) {
            return e == e &&
            (t !== zi && (e = e <= t ? e : t), n !== zi && (e = n <= e ? e : n)),
            e
          }
          function De(t, r, o, e, n, i) {
            var a,
            u = 1 & r,
            c = 2 & r,
            l = 4 & r;
            if (o && (a = n ? o(t, e, n, i) : o(t)), a !== zi) return a;
            if (!Ro(t)) return t;
            var s,
            f,
            h = Ao(t);
            if (h) {
              if (
                a = function (e) {
                  var n = e.length,
                  t = new e.constructor(n);
                  n &&
                  'string' == typeof e[0] &&
                  m.call(e, 'index') &&
                  (t.index = e.index, t.input = e.input);
                  return t
                }(t),
                !u
              ) return ot(t, a)
            } else {
              var d = Ht(t),
              e = d == ua ||
              d == ca;
              if (Lo(t)) return Jn(t, u);
              if (d == fa || d == ta || e && !n) {
                if (a = c || e ? {
                }
                 : Kt(t), !u) return c ? (e = s = t, f = (f = a) && it(e, fi(e), f), it(s, qt(s), f)) : (f = Pe(a, s = t), it(s, Vt(s), f))
              } else {
                if (!pu[d]) return n ? t : {
                };
                a = function (e, n, t) {
                  var r = e.constructor;
                  switch (n) {
                    case ma:
                      return Xn(e);
                    case oa:
                    case ia:
                      return new r( + e);
                    case ba:
                      return function (e, n) {
                        n = n ? Xn(e.buffer) : e.buffer;
                        return new e.constructor(n, e.byteOffset, e.byteLength)
                      }(e, t);
                    case wa:
                    case Sa:
                    case _a:
                    case Aa:
                    case Ea:
                    case xa:
                    case Ca:
                    case La:
                    case ka:
                      return et(e, t);
                    case la:
                      return new r;
                    case sa:
                    case va:
                      return new r(e);
                    case da:
                      return function (e) {
                        var n = new e.constructor(e.source, Ja.exec(e));
                        return n.lastIndex = e.lastIndex,
                        n
                      }(e);
                    case pa:
                      return new r;
                    case ga:
                      return function (e) {
                        return fe ? v(fe.call(e)) : {
                        }
                      }(e)
                  }
                }(t, d, u)
              }
            }
            u = (i = i || new Ae).get(t);
            if (u) return u;
            i.set(t, a),
            Mo(t) ? t.forEach(function (e) {
              a.add(De(e, r, o, e, t, i))
            }) : Bo(t) &&
            t.forEach(function (e, n) {
              a.set(n, De(e, r, o, n, t, i))
            });
            var p = h ? zi : (l ? c ? Bt : Ot : c ? fi : si) (t);
            return Lu(p || t, function (e, n) {
              p &&
              (e = t[n = e]),
              Te(a, n, De(e, r, o, n, t, i))
            }),
            a
          }
          function je(e, n, t) {
            var r = t.length;
            if (null == e) return !r;
            for (e = v(e); r--; ) {
              var o = t[r],
              i = n[o],
              a = e[o];
              if (a === zi && !(o in e) || !i(a)) return !1
            }
            return !0
          }
          function Fe(e, n, t) {
            if ('function' != typeof e) throw new _(Vi);
            return ur(function () {
              e.apply(zi, t)
            }, n)
          }
          function Me(e, n, t, r) {
            var o = - 1,
            i = Uu,
            a = !0,
            u = e.length,
            c = [],
            l = n.length;
            if (!u) return c;
            t &&
            (n = Ru(n, Qu(t))),
            r ? (i = Pu, a = !1) : 200 <= n.length &&
            (i = Zu, a = !1, n = new _e(n));
            e: for (; ++o < u; ) {
              var s = e[o],
              f = null == t ? s : t(s),
              s = r ||
              0 !== s ? s : 0;
              if (a && f == f) {
                for (var h = l; h--; ) if (n[h] === f) continue e;
                c.push(s)
              } else i(n, f, r) ||
              c.push(s)
            }
            return c
          }
          de.templateSettings = {
            escape: Da,
            evaluate: ja,
            interpolate: Fa,
            variable: '',
            imports: {
              _: de
            }
          },
          (de.prototype = ge.prototype).constructor = de,
          (ye.prototype = pe(ge.prototype)).constructor = ye,
          (me.prototype = pe(ge.prototype)).constructor = me,
          be.prototype.clear = function () {
            this.__data__ = te ? te(null) : {
            },
            this.size = 0
          },
          be.prototype.delete = function (e) {
            return e = this.has(e) &&
            delete this.__data__[e],
            this.size -= e ? 1 : 0,
            e
          },
          be.prototype.get = function (e) {
            var n = this.__data__;
            if (te) {
              var t = n[e];
              return t === qi ? zi : t
            }
            return m.call(n, e) ? n[e] : zi
          },
          be.prototype.has = function (e) {
            var n = this.__data__;
            return te ? n[e] !== zi : m.call(n, e)
          },
          be.prototype.set = function (e, n) {
            var t = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            t[e] = te &&
            n === zi ? qi : n,
            this
          },
          we.prototype.clear = function () {
            this.__data__ = [],
            this.size = 0
          },
          we.prototype.delete = function (e) {
            var n = this.__data__;
            return !((e = Ie(n, e)) < 0) &&
            (e == n.length - 1 ? n.pop() : I.call(n, e, 1), --this.size, !0)
          },
          we.prototype.get = function (e) {
            var n = this.__data__;
            return (e = Ie(n, e)) < 0 ? zi : n[e][1]
          },
          we.prototype.has = function (e) {
            return - 1 < Ie(this.__data__, e)
          },
          we.prototype.set = function (e, n) {
            var t = this.__data__,
            r = Ie(t, e);
            return r < 0 ? (++this.size, t.push([e,
            n])) : t[r][1] = n,
            this
          },
          Se.prototype.clear = function () {
            this.size = 0,
            this.__data__ = {
              hash: new be,
              map: new (J || we),
              string: new be
            }
          },
          Se.prototype.delete = function (e) {
            return e = Nt(this, e).delete(e),
            this.size -= e ? 1 : 0,
            e
          },
          Se.prototype.get = function (e) {
            return Nt(this, e).get(e)
          },
          Se.prototype.has = function (e) {
            return Nt(this, e).has(e)
          },
          Se.prototype.set = function (e, n) {
            var t = Nt(this, e),
            r = t.size;
            return t.set(e, n),
            this.size += t.size == r ? 0 : 1,
            this
          },
          _e.prototype.add = _e.prototype.push = function (e) {
            return this.__data__.set(e, qi),
            this
          },
          _e.prototype.has = function (e) {
            return this.__data__.has(e)
          },
          Ae.prototype.clear = function () {
            this.__data__ = new we,
            this.size = 0
          },
          Ae.prototype.delete = function (e) {
            var n = this.__data__,
            e = n.delete(e);
            return this.size = n.size,
            e
          },
          Ae.prototype.get = function (e) {
            return this.__data__.get(e)
          },
          Ae.prototype.has = function (e) {
            return this.__data__.has(e)
          },
          Ae.prototype.set = function (e, n) {
            var t = this.__data__;
            if (t instanceof we) {
              var r = t.__data__;
              if (!J || r.length < 199) return r.push([e,
              n]),
              this.size = ++t.size,
              this;
              t = this.__data__ = new Se(r)
            }
            return t.set(e, n),
            this.size = t.size,
            this
          };
          var Ne = ct($e),
          We = ct(Qe, !0);
          function ze(e, r) {
            var o = !0;
            return Ne(e, function (e, n, t) {
              return o = !!r(e, n, t)
            }),
            o
          }
          function Ve(e, n, t) {
            for (var r = - 1, o = e.length; ++r < o; ) {
              var i,
              a,
              u = e[r],
              c = n(u);
              null != c &&
              (i === zi ? c == c &&
              !Wo(c) : t(c, i)) &&
              (i = c, a = u)
            }
            return a
          }
          function qe(e, r) {
            var o = [];
            return Ne(e, function (e, n, t) {
              r(e, n, t) &&
              o.push(e)
            }),
            o
          }
          function He(e, n, t, r, o) {
            var i = - 1,
            a = e.length;
            for (t = t || $t, o = o || []; ++i < a; ) {
              var u = e[i];
              0 < n &&
              t(u) ? 1 < n ? He(u, n - 1, t, r, o) : Ou(o, u) : r ||
              (o[o.length] = u)
            }
            return o
          }
          var Ge = lt(),
          Ke = lt(!0);
          function $e(e, n) {
            return e &&
            Ge(e, n, si)
          }
          function Qe(e, n) {
            return e &&
            Ke(e, n, si)
          }
          function Ye(n, e) {
            return Iu(e, function (e) {
              return Io(n[e])
            })
          }
          function Ze(e, n) {
            for (var t = 0, r = (n = $n(n, e)).length; null != e && t < r; ) e = e[vr(n[t++])];
            return t &&
            t == r ? e : zi
          }
          function Je(e, n, t) {
            n = n(e);
            return Ao(e) ? n : Ou(n, t(e))
          }
          function Xe(e) {
            return null == e ? e === zi ? '[object Undefined]' : '[object Null]' : R &&
            R in v(e) ? function (e) {
              var n = m.call(e, R),
              t = e[R];
              try {
                e[R] = zi;
                var r = !0
              } catch (e) {
              }
              var o = g.call(e);
              r &&
              (n ? e[R] = t : delete e[R]);
              return o
            }(e) : (e = e, g.call(e))
          }
          function en(e, n) {
            return n < e
          }
          function nn(e, n) {
            return null != e &&
            m.call(e, n)
          }
          function tn(e, n) {
            return null != e &&
            n in v(e)
          }
          function rn(e, n, t) {
            for (
              var r = t ? Pu : Uu,
              o = e[0].length,
              i = e.length,
              a = i,
              u = A(i),
              c = 1 / 0,
              l = [];
              a--;
            ) {
              var s = e[a];
              a &&
              n &&
              (s = Ru(s, Qu(n))),
              c = G(s.length, c),
              u[a] = !t &&
              (n || 120 <= o && 120 <= s.length) ? new _e(a && s) : zi
            }
            s = e[0];
            var f = - 1,
            h = u[0];
            e: for (; ++f < o && l.length < c; ) {
              var d = s[f],
              p = n ? n(d) : d,
              d = t ||
              0 !== d ? d : 0;
              if (!(h ? Zu(h, p) : r(l, p, t))) {
                for (a = i; --a; ) {
                  var v = u[a];
                  if (!(v ? Zu(v, p) : r(e[a], p, t))) continue e
                }
                h &&
                h.push(p),
                l.push(d)
              }
            }
            return l
          }
          function on(e, n, t) {
            n = null == (e = or(e, n = $n(n, e))) ? e : e[vr(kr(n))];
            return null == n ? zi : xu(n, e, t)
          }
          function an(e) {
            return Oo(e) &&
            Xe(e) == ta
          }
          function un(e, n, t, r, o) {
            return e === n ||
            (
              null == e ||
              null == n ||
              !Oo(e) &&
              !Oo(n) ? e != e &&
              n != n : function (e, n, t, r, o, i) {
                var a = Ao(e),
                u = Ao(n),
                c = a ? ra : Ht(e),
                l = u ? ra : Ht(n),
                s = (c = c == ta ? fa : c) == fa,
                u = (l = l == ta ? fa : l) == fa,
                l = c == l;
                if (l && Lo(e)) {
                  if (!Lo(n)) return !1;
                  s = !(a = !0)
                }
                if (l && !s) return i = i ||
                new Ae,
                a ||
                zo(e) ? Pt(e, n, t, r, o, i) : function (e, n, t, r, o, i, a) {
                  switch (t) {
                    case ba:
                      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset) return !1;
                      e = e.buffer,
                      n = n.buffer;
                    case ma:
                      return e.byteLength == n.byteLength &&
                      i(new x(e), new x(n)) ? !0 : !1;
                    case oa:
                    case ia:
                    case sa:
                      return bo( + e, + n);
                    case aa:
                      return e.name == n.name &&
                      e.message == n.message;
                    case da:
                    case va:
                      return e == n + '';
                    case la:
                      var u = oc;
                    case pa:
                      var c = 1 & r;
                      if (u = u || uc, e.size != n.size && !c) return !1;
                      c = a.get(e);
                      if (c) return c == n;
                      r |= 2,
                      a.set(e, n);
                      u = Pt(u(e), u(n), r, o, i, a);
                      return a.delete(e),
                      u;
                    case ga:
                      if (fe) return fe.call(e) == fe.call(n)
                  }
                  return !1
                }(e, n, c, t, r, o, i);
                if (!(1 & t)) {
                  s = s &&
                  m.call(e, '__wrapped__'),
                  u = u &&
                  m.call(n, '__wrapped__');
                  if (s || u) {
                    s = s ? e.value() : e,
                    u = u ? n.value() : n;
                    return i = i ||
                    new Ae,
                    o(s, u, t, r, i)
                  }
                }
                return l &&
                (
                  i = i ||
                  new Ae,
                  function (e, n, t, r, o, i) {
                    var a = 1 & t,
                    u = Ot(e),
                    c = u.length,
                    l = Ot(n).length;
                    if (c != l && !a) return !1;
                    var s = c;
                    for (; s--; ) {
                      var f = u[s];
                      if (!(a ? f in n : m.call(n, f))) return !1
                    }
                    var h = i.get(e),
                    l = i.get(n);
                    if (h && l) return h == n &&
                    l == e;
                    var d = !0;
                    i.set(e, n),
                    i.set(n, e);
                    var p = a;
                    for (; ++s < c; ) {
                      f = u[s];
                      var v,
                      g = e[f],
                      y = n[f];
                      if (
                        r &&
                        (v = a ? r(y, g, f, n, e, i) : r(g, y, f, e, n, i)),
                        !(v === zi ? g === y ||
                        o(g, y, t, r, i) : v)
                      ) {
                        d = !1;
                        break
                      }
                      p = p ||
                      'constructor' == f
                    }
                    d &&
                    !p &&
                    (
                      h = e.constructor,
                      l = n.constructor,
                      h != l &&
                      'constructor' in e &&
                      'constructor' in n &&
                      !(
                        'function' == typeof h &&
                        h instanceof h &&
                        'function' == typeof l &&
                        l instanceof l
                      ) &&
                      (d = !1)
                    );
                    return i.delete(e),
                    i.delete(n),
                    d
                  }(e, n, t, r, o, i)
                )
              }(e, n, t, r, un, o)
            )
          }
          function cn(e, n, t, r) {
            var o = t.length,
            i = o,
            a = !r;
            if (null == e) return !i;
            for (e = v(e); o--; ) {
              var u = t[o];
              if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
            }
            for (; ++o < i; ) {
              var c = (u = t[o]) [0],
              l = e[c],
              s = u[1];
              if (a && u[2]) {
                if (l === zi && !(c in e)) return !1
              } else {
                var f,
                h = new Ae;
                if (r && (f = r(l, s, c, e, n, h)), !(f === zi ? un(s, l, 3, r, h) : f)) return !1
              }
            }
            return !0
          }
          function ln(e) {
            return !(!Ro(e) || (n = e, l && l in n)) &&
            (Io(e) ? w : nu).test(gr(e));
            var n
          }
          function sn(e) {
            return 'function' == typeof e ? e : null == e ? Oi : 'object' == typeof e ? Ao(e) ? gn(e[0], e[1]) : vn(e) : Fi(e)
          }
          function fn(e) {
            if (!er(e)) return q(e);
            var n,
            t = [];
            for (n in v(e)) m.call(e, n) &&
            'constructor' != n &&
            t.push(n);
            return t
          }
          function hn(e) {
            if (!Ro(e)) return function (e) {
              var n = [];
              if (null != e) for (var t in v(e)) n.push(t);
              return n
            }(e);
            var n,
            t = er(e),
            r = [];
            for (n in e) ('constructor' != n || !t && m.call(e, n)) &&
            r.push(n);
            return r
          }
          function dn(e, n) {
            return e < n
          }
          function pn(e, r) {
            var o = - 1,
            i = xo(e) ? A(e.length) : [];
            return Ne(e, function (e, n, t) {
              i[++o] = r(e, n, t)
            }),
            i
          }
          function vn(n) {
            var t = Wt(n);
            return 1 == t.length &&
            t[0][2] ? tr(t[0][0], t[0][1]) : function (e) {
              return e === n ||
              cn(e, n, t)
            }
          }
          function gn(t, r) {
            return Zt(t) &&
            nr(r) ? tr(vr(t), r) : function (e) {
              var n = ii(e, t);
              return n === zi &&
              n === r ? ai(e, t) : un(r, n, 3)
            }
          }
          function yn(r, o, i, a, u) {
            r !== o &&
            Ge(
              o,
              function (e, n) {
                var t;
                u = u ||
                new Ae,
                Ro(e) ? function (e, n, t, r, o, i, a) {
                  var u = ir(e, t),
                  c = ir(n, t),
                  l = a.get(c);
                  if (l) return ke(e, t, l);
                  var s,
                  f = i ? i(u, c, t + '', e, n, a) : zi,
                  h = f === zi;
                  h &&
                  (
                    s = Ao(c),
                    l = !s &&
                    Lo(c),
                    n = !s &&
                    !l &&
                    zo(c),
                    f = c,
                    s ||
                    l ||
                    n ? f = Ao(u) ? u : Co(u) ? ot(u) : l ? Jn(c, !(h = !1)) : n ? et(c, !(h = !1)) : [] : jo(c) ||
                    _o(c) ? _o(f = u) ? f = Yo(u) : Ro(u) &&
                    !Io(u) ||
                    (f = Kt(c)) : h = !1
                  ),
                  h &&
                  (a.set(c, f), o(f, c, r, i, a), a.delete(c)),
                  ke(e, t, f)
                }(r, o, n, i, yn, a, u) : ((t = a ? a(ir(r, n), e, n + '', r, o, u) : zi) === zi && (t = e), ke(r, n, t))
              },
              fi
            )
          }
          function mn(e, n) {
            var t = e.length;
            if (t) return Qt(n += n < 0 ? t : 0, t) ? e[n] : zi
          }
          function bn(e, r, t) {
            r = r.length ? Ru(
              r,
              function (n) {
                return Ao(n) ? function (e) {
                  return Ze(e, 1 === n.length ? n[0] : n)
                }
                 : n
              }
            ) : [
              Oi
            ];
            var o = - 1;
            return r = Ru(r, Qu(Mt())),
            function (e, n) {
              var t = e.length;
              for (e.sort(n); t--; ) e[t] = e[t].value;
              return e
            }(
              pn(
                e,
                function (n, e, t) {
                  return {
                    criteria: Ru(r, function (e) {
                      return e(n)
                    }),
                    index: ++o,
                    value: n
                  }
                }
              ),
              function (e, n) {
                return function (e, n, t) {
                  var r = - 1,
                  o = e.criteria,
                  i = n.criteria,
                  a = o.length,
                  u = t.length;
                  for (; ++r < a; ) {
                    var c = nt(o[r], i[r]);
                    if (c) {
                      if (u <= r) return c;
                      var l = t[r];
                      return c * ('desc' == l ? - 1 : 1)
                    }
                  }
                  return e.index - n.index
                }(e, n, t)
              }
            )
          }
          function wn(e, n, t) {
            for (var r = - 1, o = n.length, i = {}; ++r < o; ) {
              var a = n[r],
              u = Ze(e, a);
              t(u, a) &&
              kn(i, $n(a, e), u)
            }
            return i
          }
          function Sn(e, n, t, r) {
            var o = r ? Wu : Nu,
            i = - 1,
            a = n.length,
            u = e;
            for (e === n && (n = ot(n)), t && (u = Ru(e, Qu(t))); ++i < a; ) for (var c = 0, l = n[i], s = t ? t(l) : l; - 1 < (c = o(u, s, c, r)); ) u !== e &&
            I.call(u, c, 1),
            I.call(e, c, 1);
            return e
          }
          function _n(e, n) {
            for (var t = e ? n.length : 0, r = t - 1; t--; ) {
              var o,
              i = n[t];
              t != r &&
              i === o ||
              (Qt(o = i) ? I.call(e, i, 1) : Nn(e, i))
            }
            return e
          }
          function An(e, n) {
            return e + M(Q() * (n - e + 1))
          }
          function En(e, n) {
            var t = '';
            if (!e || n < 1 || Ji < n) return t;
            for (; n % 2 && (t += e), (n = M(n / 2)) && (e += e), n; );
            return t
          }
          function xn(e, n) {
            return cr(rr(e, n, Oi), e + '')
          }
          function Cn(e) {
            return xe(bi(e))
          }
          function Ln(e, n) {
            e = bi(e);
            return fr(e, Be(n, 0, e.length))
          }
          function kn(e, n, t, r) {
            if (!Ro(e)) return e;
            for (var o = - 1, i = (n = $n(n, e)).length, a = i - 1, u = e; null != u && ++o < i; ) {
              var c,
              l = vr(n[o]),
              s = t;
              if ('__proto__' === l || 'constructor' === l || 'prototype' === l) return e;
              o != a &&
              (c = u[l], (s = r ? r(c, l, u) : zi) === zi && (s = Ro(c) ? c : Qt(n[o + 1]) ? [] : {
              })),
              Te(u, l, s),
              u = u[l]
            }
            return e
          }
          var Tn = re ? function (e, n) {
            return re.set(e, n),
            e
          }
           : Oi,
          In = O ? function (e, n) {
            return O(
              e,
              'toString',
              {
                configurable: !0,
                enumerable: !1,
                value: Pi(n),
                writable: !0
              }
            )
          }
           : Oi;
          function Un(e) {
            return fr(bi(e))
          }
          function Pn(e, n, t) {
            var r = - 1,
            o = e.length;
            n < 0 &&
            (n = o < - n ? 0 : o + n),
            (t = o < t ? o : t) < 0 &&
            (t += o),
            o = t < n ? 0 : t - n >>> 0,
            n >>>= 0;
            for (var i = A(o); ++r < o; ) i[r] = e[r + n];
            return i
          }
          function Rn(e, r) {
            var o;
            return Ne(e, function (e, n, t) {
              return !(o = r(e, n, t))
            }),
            !!o
          }
          function On(e, n, t) {
            var r = 0,
            o = null == e ? r : e.length;
            if ('number' == typeof n && n == n && o <= 2147483647) {
              for (; r < o; ) {
                var i = r + o >>> 1,
                a = e[i];
                null !== a &&
                !Wo(a) &&
                (t ? a <= n : a < n) ? r = 1 + i : o = i
              }
              return o
            }
            return Bn(e, n, Oi, t)
          }
          function Bn(e, n, t, r) {
            var o = 0,
            i = null == e ? 0 : e.length;
            if (0 === i) return 0;
            for (var a = (n = t(n)) != n, u = null === n, c = Wo(n), l = n === zi; o < i; ) {
              var s = M((o + i) / 2),
              f = t(e[s]),
              h = f !== zi,
              d = null === f,
              p = f == f,
              v = Wo(f),
              f = a ? r ||
              p : l ? p &&
              (r || h) : u ? p &&
              h &&
              (r || !d) : c ? p &&
              h &&
              !d &&
              (r || !v) : !d &&
              !v &&
              (r ? f <= n : f < n);
              f ? o = s + 1 : i = s
            }
            return G(i, 4294967294)
          }
          function Dn(e, n) {
            for (var t = - 1, r = e.length, o = 0, i = []; ++t < r; ) {
              var a,
              u = e[t],
              c = n ? n(u) : u;
              t &&
              bo(c, a) ||
              (a = c, i[o++] = 0 === u ? 0 : u)
            }
            return i
          }
          function jn(e) {
            return 'number' == typeof e ? e : Wo(e) ? Xi : + e
          }
          function Fn(e) {
            if ('string' == typeof e) return e;
            if (Ao(e)) return Ru(e, Fn) + '';
            if (Wo(e)) return he ? he.call(e) : '';
            var n = e + '';
            return '0' == n &&
            1 / e == - Zi ? '-0' : n
          }
          function Mn(e, n, t) {
            var r = - 1,
            o = Uu,
            i = e.length,
            a = !0,
            u = [],
            c = u;
            if (t) a = !1,
            o = Pu;
             else if (200 <= i) {
              var l = n ? null : Ct(e);
              if (l) return uc(l);
              a = !1,
              o = Zu,
              c = new _e
            } else c = n ? [] : u;
            e: for (; ++r < i; ) {
              var s = e[r],
              f = n ? n(s) : s,
              s = t ||
              0 !== s ? s : 0;
              if (a && f == f) {
                for (var h = c.length; h--; ) if (c[h] === f) continue e;
                n &&
                c.push(f),
                u.push(s)
              } else o(c, f, t) ||
              (c !== u && c.push(f), u.push(s))
            }
            return u
          }
          function Nn(e, n) {
            return null == (e = or(e, n = $n(n, e))) ||
            delete e[vr(kr(n))]
          }
          function Wn(e, n, t, r) {
            return kn(e, n, t(Ze(e, n)), r)
          }
          function zn(e, n, t, r) {
            for (var o = e.length, i = r ? o : - 1; (r ? i-- : ++i < o) && n(e[i], i, e); );
            return t ? Pn(e, r ? 0 : i, r ? i + 1 : o) : Pn(e, r ? i + 1 : 0, r ? o : i)
          }
          function Vn(e, n) {
            return e instanceof me &&
            (e = e.value()),
            Bu(
              n,
              function (e, n) {
                return n.func.apply(n.thisArg, Ou([e], n.args))
              },
              e
            )
          }
          function qn(e, n, t) {
            var r = e.length;
            if (r < 2) return r ? Mn(e[0]) : [];
            for (var o = - 1, i = A(r); ++o < r; ) for (var a = e[o], u = - 1; ++u < r; ) u != o &&
            (i[o] = Me(i[o] || a, e[u], n, t));
            return Mn(He(i, 1), n, t)
          }
          function Hn(e, n, t) {
            for (var r = - 1, o = e.length, i = n.length, a = {}; ++r < o; ) {
              var u = r < i ? n[r] : zi;
              t(a, e[r], u)
            }
            return a
          }
          function Gn(e) {
            return Co(e) ? e : []
          }
          function Kn(e) {
            return 'function' == typeof e ? e : Oi
          }
          function $n(e, n) {
            return Ao(e) ? e : Zt(e, n) ? [
              e
            ] : pr(Zo(e))
          }
          var Qn = xn;
          function Yn(e, n, t) {
            var r = e.length;
            return t = t === zi ? r : t,
            !n &&
            r <= t ? e : Pn(e, n, t)
          }
          var Zn = B ||
          function (e) {
            return yu.clearTimeout(e)
          };
          function Jn(e, n) {
            if (n) return e.slice();
            n = e.length,
            n = C ? C(n) : new e.constructor(n);
            return e.copy(n),
            n
          }
          function Xn(e) {
            var n = new e.constructor(e.byteLength);
            return new x(n).set(new x(e)),
            n
          }
          function et(e, n) {
            n = n ? Xn(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.length)
          }
          function nt(e, n) {
            if (e !== n) {
              var t = e !== zi,
              r = null === e,
              o = e == e,
              i = Wo(e),
              a = n !== zi,
              u = null === n,
              c = n == n,
              l = Wo(n);
              if (!u && !l && !i && n < e || i && a && c && !u && !l || r && a && c || !t && c || !o) return 1;
              if (!r && !i && !l && e < n || l && t && o && !r && !i || u && t && o || !a && o || !c) return - 1
            }
            return 0
          }
          function tt(e, n, t, r) {
            for (
              var o = - 1,
              i = e.length,
              a = t.length,
              u = - 1,
              c = n.length,
              l = H(i - a, 0),
              s = A(c + l),
              f = !r;
              ++u < c;
            ) s[u] = n[u];
            for (; ++o < a; ) (f || o < i) &&
            (s[t[o]] = e[o]);
            for (; l--; ) s[u++] = e[o++];
            return s
          }
          function rt(e, n, t, r) {
            for (
              var o = - 1,
              i = e.length,
              a = - 1,
              u = t.length,
              c = - 1,
              l = n.length,
              s = H(i - u, 0),
              f = A(s + l),
              h = !r;
              ++o < s;
            ) f[o] = e[o];
            for (var d = o; ++c < l; ) f[d + c] = n[c];
            for (; ++a < u; ) (h || o < i) &&
            (f[d + t[a]] = e[o++]);
            return f
          }
          function ot(e, n) {
            var t = - 1,
            r = e.length;
            for (n = n || A(r); ++t < r; ) n[t] = e[t];
            return n
          }
          function it(e, n, t, r) {
            var o = !t;
            t = t ||
            {
            };
            for (var i = - 1, a = n.length; ++i < a; ) {
              var u = n[i],
              c = r ? r(t[u], e[u], u, t, e) : zi;
              c === zi &&
              (c = e[u]),
              (o ? Re : Te) (t, u, c)
            }
            return t
          }
          function at(o, i) {
            return function (e, n) {
              var t = Ao(e) ? Cu : Ue,
              r = i ? i() : {
              };
              return t(e, o, Mt(n, 2), r)
            }
          }
          function ut(u) {
            return xn(
              function (e, n) {
                var t = - 1,
                r = n.length,
                o = 1 < r ? n[r - 1] : zi,
                i = 2 < r ? n[2] : zi,
                o = 3 < u.length &&
                'function' == typeof o ? (r--, o) : zi;
                for (i && Yt(n[0], n[1], i) && (o = r < 3 ? zi : o, r = 1), e = v(e); ++t < r; ) {
                  var a = n[t];
                  a &&
                  u(e, a, t, o)
                }
                return e
              }
            )
          }
          function ct(i, a) {
            return function (e, n) {
              if (null == e) return e;
              if (!xo(e)) return i(e, n);
              for (
                var t = e.length,
                r = a ? t : - 1,
                o = v(e);
                (a ? r-- : ++r < t) &&
                !1 !== n(o[r], r, o);
              );
              return e
            }
          }
          function lt(c) {
            return function (e, n, t) {
              for (var r = - 1, o = v(e), i = t(e), a = i.length; a--; ) {
                var u = i[c ? a : ++r];
                if (!1 === n(o[u], u, o)) break
              }
              return e
            }
          }
          function st(r) {
            return function (e) {
              var n = rc(e = Zo(e)) ? lc(e) : zi,
              t = n ? n[0] : e.charAt(0),
              e = n ? Yn(n, 1).join('') : e.slice(1);
              return t[r]() + e
            }
          }
          function ft(n) {
            return function (e) {
              return Bu(Ii(_i(e).replace(uu, '')), n, '')
            }
          }
          function ht(r) {
            return function () {
              var e = arguments;
              switch (e.length) {
                case 0:
                  return new r;
                case 1:
                  return new r(e[0]);
                case 2:
                  return new r(e[0], e[1]);
                case 3:
                  return new r(e[0], e[1], e[2]);
                case 4:
                  return new r(e[0], e[1], e[2], e[3]);
                case 5:
                  return new r(e[0], e[1], e[2], e[3], e[4]);
                case 6:
                  return new r(e[0], e[1], e[2], e[3], e[4], e[5]);
                case 7:
                  return new r(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
              }
              var n = pe(r.prototype),
              t = r.apply(n, e);
              return Ro(t) ? t : n
            }
          }
          function dt(i, a, u) {
            var c = ht(i);
            return function e() {
              for (var n = arguments.length, t = A(n), r = n, o = Ft(e); r--; ) t[r] = arguments[r];
              o = n < 3 &&
              t[0] !== o &&
              t[n - 1] !== o ? [] : ac(t, o);
              return (n -= o.length) < u ? Et(i, a, gt, e.placeholder, zi, t, o, zi, zi, u - n) : xu(this && this !== yu && this instanceof e ? c : i, this, t)
            }
          }
          function pt(i) {
            return function (e, n, t) {
              var r,
              o = v(e);
              xo(e) ||
              (r = Mt(n, 3), e = si(e), n = function (e) {
                return r(o[e], e, o)
              });
              t = i(e, n, t);
              return - 1 < t ? o[r ? e[t] : t] : zi
            }
          }
          function vt(c) {
            return Rt(
              function (o) {
                var i = o.length,
                e = i,
                n = ye.prototype.thru;
                for (c && o.reverse(); e--; ) {
                  var t = o[e];
                  if ('function' != typeof t) throw new _(Vi);
                  n &&
                  !u &&
                  'wrapper' == jt(t) &&
                  (u = new ye([], !0))
                }
                for (e = u ? e : i; ++e < i; ) var r = jt(t = o[e]),
                a = 'wrapper' == r ? Dt(t) : zi,
                u = a &&
                Jt(a[0]) &&
                424 == a[1] &&
                !a[4].length &&
                1 == a[9] ? u[jt(a[0])].apply(u, a[3]) : 1 == t.length &&
                Jt(t) ? u[r]() : u.thru(t);
                return function () {
                  var e = arguments,
                  n = e[0];
                  if (u && 1 == e.length && Ao(n)) return u.plant(n).value();
                  for (var t = 0, r = i ? o[t].apply(this, e) : n; ++t < i; ) r = o[t].call(this, r);
                  return r
                }
              }
            )
          }
          function gt(u, c, l, s, f, h, d, p, v, g) {
            var y = c & Qi,
            m = 1 & c,
            b = 2 & c,
            w = 24 & c,
            S = 512 & c,
            _ = b ? zi : ht(u);
            return function e() {
              for (var n, t = A(a = arguments.length), r = a; r--; ) t[r] = arguments[r];
              if (
                w &&
                (
                  n = function (e, n) {
                    for (var t = e.length, r = 0; t--; ) e[t] === n &&
                    ++r;
                    return r
                  }(t, i = Ft(e))
                ),
                s &&
                (t = tt(t, s, f, w)),
                h &&
                (t = rt(t, h, d, w)),
                a -= n,
                w &&
                a < g
              ) {
                var o = ac(t, i);
                return Et(u, c, gt, e.placeholder, l, t, o, p, v, g - a)
              }
              var i = m ? l : this,
              o = b ? i[u] : u,
              a = t.length;
              return p ? t = function (e, n) {
                for (var t = e.length, r = G(n.length, t), o = ot(e); r--; ) {
                  var i = n[r];
                  e[r] = Qt(i, t) ? o[i] : zi
                }
                return e
              }(t, p) : S &&
              1 < a &&
              t.reverse(),
              y &&
              v < a &&
              (t.length = v),
              this &&
              this !== yu &&
              this instanceof e &&
              (o = _ || ht(o)),
              o.apply(i, t)
            }
          }
          function yt(t, a) {
            return function (e, n) {
              return e = e,
              r = t,
              o = a(n),
              i = {},
              $e(e, function (e, n, t) {
                r(i, o(e), n, t)
              }),
              i;
              var r,
              o,
              i
            }
          }
          function mt(r, o) {
            return function (e, n) {
              var t;
              if (e === zi && n === zi) return o;
              if (e !== zi && (t = e), n !== zi) {
                if (t === zi) return n;
                n = 'string' == typeof e ||
                'string' == typeof n ? (e = Fn(e), Fn(n)) : (e = jn(e), jn(n)),
                t = r(e, n)
              }
              return t
            }
          }
          function bt(r) {
            return Rt(
              function (e) {
                return e = Ru(e, Qu(Mt())),
                xn(
                  function (n) {
                    var t = this;
                    return r(e, function (e) {
                      return xu(e, t, n)
                    })
                  }
                )
              }
            )
          }
          function wt(e, n) {
            var t = (n = n === zi ? ' ' : Fn(n)).length;
            if (t < 2) return t ? En(n, e) : n;
            t = En(n, F(e / cc(n)));
            return rc(n) ? Yn(lc(t), 0, e).join('') : t.slice(0, e)
          }
          function St(u, e, c, l) {
            var s = 1 & e,
            f = ht(u);
            return function e() {
              for (
                var n = - 1,
                t = arguments.length,
                r = - 1,
                o = l.length,
                i = A(o + t),
                a = this &&
                this !== yu &&
                this instanceof e ? f : u;
                ++r < o;
              ) i[r] = l[r];
              for (; t--; ) i[r++] = arguments[++n];
              return xu(a, s ? c : this, i)
            }
          }
          function _t(r) {
            return function (e, n, t) {
              return t &&
              'number' != typeof t &&
              Yt(e, n, t) &&
              (n = t = zi),
              e = Go(e),
              n === zi ? (n = e, e = 0) : n = Go(n),
              function (e, n, t, r) {
                for (var o = - 1, i = H(F((n - e) / (t || 1)), 0), a = A(i); i--; ) a[r ? i : ++o] = e,
                e += t;
                return a
              }(e, n, t = t === zi ? e < n ? 1 : - 1 : Go(t), r)
            }
          }
          function At(t) {
            return function (e, n) {
              return 'string' == typeof e &&
              'string' == typeof n ||
              (e = Qo(e), n = Qo(n)),
              t(e, n)
            }
          }
          function Et(e, n, t, r, o, i, a, u, c, l) {
            var s = 8 & n;
            n |= s ? Ki : $i,
            4 & (n &= ~(s ? $i : Ki)) ||
            (n &= - 4);
            l = [
              e,
              n,
              o,
              s ? i : zi,
              s ? a : zi,
              s ? zi : i,
              s ? zi : a,
              u,
              c,
              l
            ],
            t = t.apply(zi, l);
            return Jt(e) &&
            ar(t, l),
            t.placeholder = r,
            lr(t, e, n)
          }
          function xt(e) {
            var r = o[e];
            return function (e, n) {
              if (e = Qo(e), (n = null == n ? 0 : G(Ko(n), 292)) && z(e)) {
                var t = (Zo(e) + 'e').split('e');
                return + (
                  (t = (Zo(r(t[0] + 'e' + ( + t[1] + n))) + 'e').split('e')) [0] + 'e' + ( + t[1] - n)
                )
              }
              return r(e)
            }
          }
          var Ct = ee &&
          1 / uc(new ee([,
          - 0])) [1] == Zi ? function (e) {
            return new ee(e)
          }
           : ji;
          function Lt(i) {
            return function (e) {
              var n,
              t,
              r,
              o = Ht(e);
              return o == la ? oc(e) : o == pa ? (
                o = e,
                n = - 1,
                t = Array(o.size),
                o.forEach(function (e) {
                  t[++n] = [
                    e,
                    e
                  ]
                }),
                t
              ) : Ru(i(r = e), function (e) {
                return [e,
                r[e]]
              })
            }
          }
          function kt(e, n, t, r, o, i, a, u) {
            var c = 2 & n;
            if (!c && 'function' != typeof e) throw new _(Vi);
            var l = r ? r.length : 0;
            l ||
            (n &= - 97, r = o = zi),
            a = a === zi ? a : H(Ko(a), 0),
            u = u === zi ? u : Ko(u),
            l -= o ? o.length : 0,
            n & $i &&
            (p = r, v = o, r = o = zi);
            var s,
            f,
            h,
            d,
            p,
            v,
            g,
            y,
            m,
            b,
            w = c ? zi : Dt(e),
            S = [
              e,
              n,
              t,
              r,
              o,
              p,
              v,
              i,
              a,
              u
            ];
            return w &&
            (
              f = w,
              d = (s = S) [1],
              p = f[1],
              i = (v = d | p) < 131,
              a = p == Qi &&
              8 == d ||
              p == Qi &&
              d == Yi &&
              s[7].length <= f[8] ||
              384 == p &&
              f[7].length <= f[8] &&
              8 == d,
              (i || a) &&
              (
                1 & p &&
                (s[2] = f[2], v |= 1 & d ? 0 : 4),
                (d = f[3]) &&
                (h = s[3], s[3] = h ? tt(h, d, f[4]) : d, s[4] = h ? ac(s[3], Hi) : f[4]),
                (d = f[5]) &&
                (h = s[5], s[5] = h ? rt(h, d, f[6]) : d, s[6] = h ? ac(s[5], Hi) : f[6]),
                (d = f[7]) &&
                (s[7] = d),
                p & Qi &&
                (s[8] = null == s[8] ? f[8] : G(s[8], f[8])),
                null == s[9] &&
                (s[9] = f[9]),
                s[0] = f[0],
                s[1] = v
              )
            ),
            e = S[0],
            n = S[1],
            t = S[2],
            r = S[3],
            o = S[4],
            !(u = S[9] = S[9] === zi ? c ? 0 : e.length : H(S[9] - l, 0)) &&
            24 & n &&
            (n &= - 25),
            t = n &&
            1 != n ? 8 == n ||
            n == Gi ? dt(e, n, u) : n != Ki &&
            33 != n ||
            o.length ? gt.apply(zi, S) : St(e, n, t, r) : (
              y = t,
              m = 1 & n,
              b = ht(g = e),
              function e() {
                return (this && this !== yu && this instanceof e ? b : g).apply(m ? y : this, arguments)
              }
            ),
            lr((w ? Tn : ar) (t, S), e, n)
          }
          function Tt(e, n, t, r) {
            return e === zi ||
            bo(e, p[t]) &&
            !m.call(r, t) ? n : e
          }
          function It(e, n, t, r, o, i) {
            return Ro(e) &&
            Ro(n) &&
            (i.set(n, e), yn(e, n, zi, It, i), i.delete(n)),
            e
          }
          function Ut(e) {
            return jo(e) ? zi : e
          }
          function Pt(e, n, t, r, o, i) {
            var a = 1 & t,
            u = e.length,
            c = n.length;
            if (u != c && !(a && u < c)) return !1;
            var l = i.get(e),
            c = i.get(n);
            if (l && c) return l == n &&
            c == e;
            var s = - 1,
            f = !0,
            h = 2 & t ? new _e : zi;
            for (i.set(e, n), i.set(n, e); ++s < u; ) {
              var d,
              p = e[s],
              v = n[s];
              if (r && (d = a ? r(v, p, s, n, e, i) : r(p, v, s, e, n, i)), d !== zi) {
                if (d) continue;
                f = !1;
                break
              }
              if (h) {
                if (
                  !ju(
                    n,
                    function (e, n) {
                      return !Zu(h, n) &&
                      (p === e || o(p, e, t, r, i)) &&
                      h.push(n)
                    }
                  )
                ) {
                  f = !1;
                  break
                }
              } else if (p !== v && !o(p, v, t, r, i)) {
                f = !1;
                break
              }
            }
            return i.delete(e),
            i.delete(n),
            f
          }
          function Rt(e) {
            return cr(rr(e, zi, Ar), e + '')
          }
          function Ot(e) {
            return Je(e, si, Vt)
          }
          function Bt(e) {
            return Je(e, fi, qt)
          }
          var Dt = re ? function (e) {
            return re.get(e)
          }
           : ji;
          function jt(e) {
            for (var n = e.name + '', t = oe[n], r = m.call(oe, n) ? t.length : 0; r--; ) {
              var o = t[r],
              i = o.func;
              if (null == i || i == e) return o.name
            }
            return n
          }
          function Ft(e) {
            return (m.call(de, 'placeholder') ? de : e).placeholder
          }
          function Mt() {
            var e = (e = de.iteratee || Bi) === Bi ? sn : e;
            return arguments.length ? e(arguments[0], arguments[1]) : e
          }
          function Nt(e, n) {
            var t,
            r = e.__data__;
            return (
              'string' == (e = typeof (t = n)) ||
              'number' == e ||
              'symbol' == e ||
              'boolean' == e ? '__proto__' !== t : null === t
            ) ? r['string' == typeof n ? 'string' : 'hash'] : r.map
          }
          function Wt(e) {
            for (var n = si(e), t = n.length; t--; ) {
              var r = n[t],
              o = e[r];
              n[t] = [
                r,
                o,
                nr(o)
              ]
            }
            return n
          }
          function zt(e, n) {
            n = n,
            n = null == (e = e) ? zi : e[n];
            return ln(n) ? n : zi
          }
          var Vt = N ? function (n) {
            return null == n ? [] : (n = v(n), Iu(N(n), function (e) {
              return T.call(n, e)
            }))
          }
           : Mi,
          qt = N ? function (e) {
            for (var n = []; e; ) Ou(n, Vt(e)),
            e = L(e);
            return n
          }
           : Mi,
          Ht = Xe;
          function Gt(e, n, t) {
            for (var r = - 1, o = (n = $n(n, e)).length, i = !1; ++r < o; ) {
              var a = vr(n[r]);
              if (!(i = null != e && t(e, a))) break;
              e = e[a]
            }
            return i ||
            ++r != o ? i : !!(o = null == e ? 0 : e.length) &&
            Po(o) &&
            Qt(a, o) &&
            (Ao(e) || _o(e))
          }
          function Kt(e) {
            return 'function' != typeof e.constructor ||
            er(e) ? {
            }
             : pe(L(e))
          }
          function $t(e) {
            return Ao(e) ||
            _o(e) ||
            !!(U && e && e[U])
          }
          function Qt(e, n) {
            var t = typeof e;
            return !!(n = null == n ? Ji : n) &&
            ('number' == t || 'symbol' != t && ru.test(e)) &&
            - 1 < e &&
            e % 1 == 0 &&
            e < n
          }
          function Yt(e, n, t) {
            if (Ro(t)) {
              var r = typeof n;
              return ('number' == r ? xo(t) &&
              Qt(n, t.length) : 'string' == r && n in t) &&
              bo(t[n], e)
            }
          }
          function Zt(e, n) {
            if (!Ao(e)) {
              var t = typeof e;
              return 'number' == t ||
              'symbol' == t ||
              'boolean' == t ||
              null == e ||
              Wo(e) ||
              (Na.test(e) || !Ma.test(e) || null != n && e in v(n))
            }
          }
          function Jt(e) {
            var n = jt(e),
            t = de[n];
            if ('function' == typeof t && n in me.prototype) {
              if (e === t) return 1;
              t = Dt(t);
              return t &&
              e === t[0]
            }
          }(
            Z &&
            Ht(new Z(new ArrayBuffer(1))) != ba ||
            J &&
            Ht(new J) != la ||
            X &&
            Ht(X.resolve()) != ha ||
            ee &&
            Ht(new ee) != pa ||
            ne &&
            Ht(new ne) != ya
          ) &&
          (
            Ht = function (e) {
              var n = Xe(e),
              e = n == fa ? e.constructor : zi,
              e = e ? gr(e) : '';
              if (e) switch (e) {
                case ie:
                  return ba;
                case ae:
                  return la;
                case ue:
                  return ha;
                case ce:
                  return pa;
                case le:
                  return ya
              }
              return n
            }
          );
          var Xt = a ? Io : Ni;
          function er(e) {
            var n = e &&
            e.constructor;
            return e === ('function' == typeof n && n.prototype || p)
          }
          function nr(e) {
            return e == e &&
            !Ro(e)
          }
          function tr(n, t) {
            return function (e) {
              return null != e &&
              (e[n] === t && (t !== zi || n in v(e)))
            }
          }
          function rr(i, a, u) {
            return a = H(a === zi ? i.length - 1 : a, 0),
            function () {
              for (var e = arguments, n = - 1, t = H(e.length - a, 0), r = A(t); ++n < t; ) r[n] = e[a + n];
              n = - 1;
              for (var o = A(a + 1); ++n < a; ) o[n] = e[n];
              return o[a] = u(r),
              xu(i, this, o)
            }
          }
          function or(e, n) {
            return n.length < 2 ? e : Ze(e, Pn(n, 0, - 1))
          }
          function ir(e, n) {
            if (('constructor' !== n || 'function' != typeof e[n]) && '__proto__' != n) return e[n]
          }
          var ar = sr(Tn),
          ur = j ||
          function (e, n) {
            return yu.setTimeout(e, n)
          },
          cr = sr(In);
          function lr(e, n, t) {
            var r,
            o,
            n = n + '';
            return cr(
              e,
              function (e, n) {
                var t = n.length;
                if (!t) return e;
                var r = t - 1;
                return n[r] = (1 < t ? '& ' : '') + n[r],
                n = n.join(2 < t ? ', ' : ' '),
                e.replace(Ha, '{\n/* [wrapped with ' + n + '] */\n')
              }(
                n,
                (
                  r = (n = (n = n).match(Ga)) ? n[1].split(Ka) : [],
                  o = t,
                  Lu(na, function (e) {
                    var n = '_.' + e[0];
                    o & e[1] &&
                    !Uu(r, n) &&
                    r.push(n)
                  }),
                  r.sort()
                )
              )
            )
          }
          function sr(t) {
            var r = 0,
            o = 0;
            return function () {
              var e = K(),
              n = 16 - (e - o);
              if (o = e, 0 < n) {
                if (800 <= ++r) return arguments[0]
              } else r = 0;
              return t.apply(zi, arguments)
            }
          }
          function fr(e, n) {
            var t = - 1,
            r = e.length,
            o = r - 1;
            for (n = n === zi ? r : n; ++t < n; ) {
              var i = An(t, o),
              a = e[i];
              e[i] = e[t],
              e[t] = a
            }
            return e.length = n,
            e
          }
          var hr,
          dr,
          pr = (
            dr = (
              hr = ho(
                hr = function (e) {
                  var o = [];
                  return 46 === e.charCodeAt(0) &&
                  o.push(''),
                  e.replace(Wa, function (e, n, t, r) {
                    o.push(t ? r.replace(Ya, '$1') : n || e)
                  }),
                  o
                },
                function (e) {
                  return 500 === dr.size &&
                  dr.clear(),
                  e
                }
              )
            ).cache,
            hr
          );
          function vr(e) {
            if ('string' == typeof e || Wo(e)) return e;
            var n = e + '';
            return '0' == n &&
            1 / e == - Zi ? '-0' : n
          }
          function gr(e) {
            if (null != e) {
              try {
                return u.call(e)
              } catch (e) {
              }
              try {
                return e + ''
              } catch (e) {
              }
            }
            return ''
          }
          function yr(e) {
            if (e instanceof me) return e.clone();
            var n = new ye(e.__wrapped__, e.__chain__);
            return n.__actions__ = ot(e.__actions__),
            n.__index__ = e.__index__,
            n.__values__ = e.__values__,
            n
          }
          var mr = xn(function (e, n) {
            return Co(e) ? Me(e, He(n, 1, Co, !0)) : []
          }),
          br = xn(
            function (e, n) {
              var t = kr(n);
              return Co(t) &&
              (t = zi),
              Co(e) ? Me(e, He(n, 1, Co, !0), Mt(t, 2)) : []
            }
          ),
          wr = xn(
            function (e, n) {
              var t = kr(n);
              return Co(t) &&
              (t = zi),
              Co(e) ? Me(e, He(n, 1, Co, !0), zi, t) : []
            }
          );
          function Sr(e, n, t) {
            var r = null == e ? 0 : e.length;
            if (!r) return - 1;
            t = null == t ? 0 : Ko(t);
            return t < 0 &&
            (t = H(r + t, 0)),
            Mu(e, Mt(n, 3), t)
          }
          function _r(e, n, t) {
            var r = null == e ? 0 : e.length;
            if (!r) return - 1;
            var o = r - 1;
            return t !== zi &&
            (o = Ko(t), o = t < 0 ? H(r + o, 0) : G(o, r - 1)),
            Mu(e, Mt(n, 3), o, !0)
          }
          function Ar(e) {
            return (null == e ? 0 : e.length) ? He(e, 1) : []
          }
          function Er(e) {
            return e &&
            e.length ? e[0] : zi
          }
          var xr = xn(
            function (e) {
              var n = Ru(e, Gn);
              return n.length &&
              n[0] === e[0] ? rn(n) : []
            }
          ),
          Cr = xn(
            function (e) {
              var n = kr(e),
              t = Ru(e, Gn);
              return n === kr(t) ? n = zi : t.pop(),
              t.length &&
              t[0] === e[0] ? rn(t, Mt(n, 2)) : []
            }
          ),
          Lr = xn(
            function (e) {
              var n = kr(e),
              t = Ru(e, Gn);
              return (n = 'function' == typeof n ? n : zi) &&
              t.pop(),
              t.length &&
              t[0] === e[0] ? rn(t, zi, n) : []
            }
          );
          function kr(e) {
            var n = null == e ? 0 : e.length;
            return n ? e[n - 1] : zi
          }
          var Tr = xn(Ir);
          function Ir(e, n) {
            return e &&
            e.length &&
            n &&
            n.length ? Sn(e, n) : e
          }
          var Ur = Rt(
            function (e, n) {
              var t = null == e ? 0 : e.length,
              r = Oe(e, n);
              return _n(e, Ru(n, function (e) {
                return Qt(e, t) ? + e : e
              }).sort(nt)),
              r
            }
          );
          function Pr(e) {
            return null == e ? e : Y.call(e)
          }
          var Rr = xn(function (e) {
            return Mn(He(e, 1, Co, !0))
          }),
          Or = xn(
            function (e) {
              var n = kr(e);
              return Co(n) &&
              (n = zi),
              Mn(He(e, 1, Co, !0), Mt(n, 2))
            }
          ),
          Br = xn(
            function (e) {
              var n = 'function' == typeof (n = kr(e)) ? n : zi;
              return Mn(He(e, 1, Co, !0), zi, n)
            }
          );
          function Dr(n) {
            if (!n || !n.length) return [];
            var t = 0;
            return n = Iu(n, function (e) {
              return Co(e) &&
              (t = H(e.length, t), 1)
            }),
            Ku(t, function (e) {
              return Ru(n, qu(e))
            })
          }
          function jr(e, n) {
            if (!e || !e.length) return [];
            e = Dr(e);
            return null == n ? e : Ru(e, function (e) {
              return xu(n, zi, e)
            })
          }
          var Fr = xn(function (e, n) {
            return Co(e) ? Me(e, n) : []
          }),
          Mr = xn(function (e) {
            return qn(Iu(e, Co))
          }),
          Nr = xn(
            function (e) {
              var n = kr(e);
              return Co(n) &&
              (n = zi),
              qn(Iu(e, Co), Mt(n, 2))
            }
          ),
          Wr = xn(
            function (e) {
              var n = 'function' == typeof (n = kr(e)) ? n : zi;
              return qn(Iu(e, Co), zi, n)
            }
          ),
          zr = xn(Dr);
          var Vr = xn(
            function (e) {
              var n = e.length,
              n = 'function' == typeof (n = 1 < n ? e[n - 1] : zi) ? (e.pop(), n) : zi;
              return jr(e, n)
            }
          );
          function qr(e) {
            e = de(e);
            return e.__chain__ = !0,
            e
          }
          function Hr(e, n) {
            return n(e)
          }
          var Gr = Rt(
            function (n) {
              function e(e) {
                return Oe(e, n)
              }
              var t = n.length,
              r = t ? n[0] : 0,
              o = this.__wrapped__;
              return !(1 < t || this.__actions__.length) &&
              o instanceof me &&
              Qt(r) ? (
                (o = o.slice(r, + r + (t ? 1 : 0))).__actions__.push({
                  func: Hr,
                  args: [
                    e
                  ],
                  thisArg: zi
                }),
                new ye(o, this.__chain__).thru(function (e) {
                  return t &&
                  !e.length &&
                  e.push(zi),
                  e
                })
              ) : this.thru(e)
            }
          );
          var Kr = at(function (e, n, t) {
            m.call(e, t) ? ++e[t] : Re(e, t, 1)
          });
          var $r = pt(Sr),
          Qr = pt(_r);
          function Yr(e, n) {
            return (Ao(e) ? Lu : Ne) (e, Mt(n, 3))
          }
          function Zr(e, n) {
            return (Ao(e) ? ku : We) (e, Mt(n, 3))
          }
          var Jr = at(function (e, n, t) {
            m.call(e, t) ? e[t].push(n) : Re(e, t, [
              n
            ])
          });
          var Xr = xn(
            function (e, n, t) {
              var r = - 1,
              o = 'function' == typeof n,
              i = xo(e) ? A(e.length) : [];
              return Ne(e, function (e) {
                i[++r] = o ? xu(n, e, t) : on(e, n, t)
              }),
              i
            }
          ),
          eo = at(function (e, n, t) {
            Re(e, t, n)
          });
          function no(e, n) {
            return (Ao(e) ? Ru : pn) (e, Mt(n, 3))
          }
          var to = at(function (e, n, t) {
            e[t ? 0 : 1].push(n)
          }, function () {
            return [[],
            []]
          });
          var ro = xn(
            function (e, n) {
              if (null == e) return [];
              var t = n.length;
              return 1 < t &&
              Yt(e, n[0], n[1]) ? n = [] : 2 < t &&
              Yt(n[0], n[1], n[2]) &&
              (n = [
                n[0]
              ]),
              bn(e, He(n, 1), [])
            }
          ),
          oo = D ||
          function () {
            return yu.Date.now()
          };
          function io(e, n, t) {
            return n = t ? zi : n,
            n = e &&
            null == n ? e.length : n,
            kt(e, Qi, zi, zi, zi, zi, n)
          }
          function ao(e, n) {
            var t;
            if ('function' != typeof n) throw new _(Vi);
            return e = Ko(e),
            function () {
              return 0 < --e &&
              (t = n.apply(this, arguments)),
              e <= 1 &&
              (n = zi),
              t
            }
          }
          var uo = xn(
            function (e, n, t) {
              var r,
              o = 1;
              return t.length &&
              (r = ac(t, Ft(uo)), o |= Ki),
              kt(e, o, n, t, r)
            }
          ),
          co = xn(
            function (e, n, t) {
              var r,
              o = 3;
              return t.length &&
              (r = ac(t, Ft(co)), o |= Ki),
              kt(n, o, e, t, r)
            }
          );
          function lo(r, t, e) {
            var o,
            i,
            a,
            u,
            c,
            l,
            s = 0,
            f = !1,
            h = !1,
            n = !0;
            if ('function' != typeof r) throw new _(Vi);
            function d(e) {
              var n = o,
              t = i;
              return o = i = zi,
              s = e,
              u = r.apply(t, n)
            }
            function p(e) {
              var n = e - l;
              return l === zi ||
              t <= n ||
              n < 0 ||
              h &&
              a <= e - s
            }
            function v() {
              var e,
              n = oo();
              if (p(n)) return g(n);
              c = ur(v, (n = t - ((e = n) - l), h ? G(n, a - (e - s)) : n))
            }
            function g(e) {
              return c = zi,
              n &&
              o ? d(e) : (o = i = zi, u)
            }
            function y() {
              var e = oo(),
              n = p(e);
              if (o = arguments, i = this, l = e, n) {
                if (c === zi) return s = n = l,
                c = ur(v, t),
                f ? d(n) : u;
                if (h) return Zn(c),
                c = ur(v, t),
                d(l)
              }
              return c === zi &&
              (c = ur(v, t)),
              u
            }
            return t = Qo(t) ||
            0,
            Ro(e) &&
            (
              f = !!e.leading,
              h = 'maxWait' in e,
              a = h ? H(Qo(e.maxWait) || 0, t) : a,
              n = 'trailing' in e ? !!e.trailing : n
            ),
            y.cancel = function () {
              c !== zi &&
              Zn(c),
              s = 0,
              o = l = i = c = zi
            },
            y.flush = function () {
              return c === zi ? u : g(oo())
            },
            y
          }
          var so = xn(function (e, n) {
            return Fe(e, 1, n)
          }),
          fo = xn(function (e, n, t) {
            return Fe(e, Qo(n) || 0, t)
          });
          function ho(r, o) {
            if ('function' != typeof r || null != o && 'function' != typeof o) throw new _(Vi);
            var i = function () {
              var e = arguments,
              n = o ? o.apply(this, e) : e[0],
              t = i.cache;
              if (t.has(n)) return t.get(n);
              e = r.apply(this, e);
              return i.cache = t.set(n, e) ||
              t,
              e
            };
            return i.cache = new (ho.Cache || Se),
            i
          }
          function po(n) {
            if ('function' != typeof n) throw new _(Vi);
            return function () {
              var e = arguments;
              switch (e.length) {
                case 0:
                  return !n.call(this);
                case 1:
                  return !n.call(this, e[0]);
                case 2:
                  return !n.call(this, e[0], e[1]);
                case 3:
                  return !n.call(this, e[0], e[1], e[2])
              }
              return !n.apply(this, e)
            }
          }
          ho.Cache = Se;
          var vo = Qn(
            function (r, o) {
              var i = (
                o = 1 == o.length &&
                Ao(o[0]) ? Ru(o[0], Qu(Mt())) : Ru(He(o, 1), Qu(Mt()))
              ).length;
              return xn(
                function (e) {
                  for (var n = - 1, t = G(e.length, i); ++n < t; ) e[n] = o[n].call(this, e[n]);
                  return xu(r, this, e)
                }
              )
            }
          ),
          go = xn(function (e, n) {
            var t = ac(n, Ft(go));
            return kt(e, Ki, zi, n, t)
          }),
          yo = xn(function (e, n) {
            var t = ac(n, Ft(yo));
            return kt(e, $i, zi, n, t)
          }),
          mo = Rt(function (e, n) {
            return kt(e, Yi, zi, zi, zi, n)
          });
          function bo(e, n) {
            return e === n ||
            e != e &&
            n != n
          }
          var wo = At(en),
          So = At(function (e, n) {
            return n <= e
          }),
          _o = an(function () {
            return arguments
          }()) ? an : function (e) {
            return Oo(e) &&
            m.call(e, 'callee') &&
            !T.call(e, 'callee')
          },
          Ao = A.isArray,
          Eo = bu ? Qu(bu) : function (e) {
            return Oo(e) &&
            Xe(e) == ma
          };
          function xo(e) {
            return null != e &&
            Po(e.length) &&
            !Io(e)
          }
          function Co(e) {
            return Oo(e) &&
            xo(e)
          }
          var Lo = W ||
          Ni,
          ko = wu ? Qu(wu) : function (e) {
            return Oo(e) &&
            Xe(e) == ia
          };
          function To(e) {
            if (!Oo(e)) return !1;
            var n = Xe(e);
            return n == aa ||
            '[object DOMException]' == n ||
            'string' == typeof e.message &&
            'string' == typeof e.name &&
            !jo(e)
          }
          function Io(e) {
            if (!Ro(e)) return !1;
            e = Xe(e);
            return e == ua ||
            e == ca ||
            '[object AsyncFunction]' == e ||
            '[object Proxy]' == e
          }
          function Uo(e) {
            return 'number' == typeof e &&
            e == Ko(e)
          }
          function Po(e) {
            return 'number' == typeof e &&
            - 1 < e &&
            e % 1 == 0 &&
            e <= Ji
          }
          function Ro(e) {
            var n = typeof e;
            return null != e &&
            ('object' == n || 'function' == n)
          }
          function Oo(e) {
            return null != e &&
            'object' == typeof e
          }
          var Bo = Su ? Qu(Su) : function (e) {
            return Oo(e) &&
            Ht(e) == la
          };
          function Do(e) {
            return 'number' == typeof e ||
            Oo(e) &&
            Xe(e) == sa
          }
          function jo(e) {
            if (!Oo(e) || Xe(e) != fa) return !1;
            e = L(e);
            if (null === e) return !0;
            e = m.call(e, 'constructor') &&
            e.constructor;
            return 'function' == typeof e &&
            e instanceof e &&
            u.call(e) == y
          }
          var Fo = _u ? Qu(_u) : function (e) {
            return Oo(e) &&
            Xe(e) == da
          };
          var Mo = Au ? Qu(Au) : function (e) {
            return Oo(e) &&
            Ht(e) == pa
          };
          function No(e) {
            return 'string' == typeof e ||
            !Ao(e) &&
            Oo(e) &&
            Xe(e) == va
          }
          function Wo(e) {
            return 'symbol' == typeof e ||
            Oo(e) &&
            Xe(e) == ga
          }
          var zo = Eu ? Qu(Eu) : function (e) {
            return Oo(e) &&
            Po(e.length) &&
            !!du[Xe(e)]
          };
          var Vo = At(dn),
          qo = At(function (e, n) {
            return e <= n
          });
          function Ho(e) {
            if (!e) return [];
            if (xo(e)) return (No(e) ? lc : ot) (e);
            if (P && e[P]) return function (e) {
              for (var n, t = []; !(n = e.next()).done; ) t.push(n.value);
              return t
            }(e[P]());
            var n = Ht(e);
            return (n == la ? oc : n == pa ? uc : bi) (e)
          }
          function Go(e) {
            return e ? (e = Qo(e)) !== Zi &&
            e !== - Zi ? e == e ? e : 0 : 1.7976931348623157e+308 * (e < 0 ? - 1 : 1) : 0 === e ? e : 0
          }
          function Ko(e) {
            var n = Go(e),
            e = n % 1;
            return n == n ? e ? n - e : n : 0
          }
          function $o(e) {
            return e ? Be(Ko(e), 0, ea) : 0
          }
          function Qo(e) {
            if ('number' == typeof e) return e;
            if (Wo(e)) return Xi;
            if (
              Ro(e) &&
              (e = Ro(n = 'function' == typeof e.valueOf ? e.valueOf() : e) ? n + '' : n),
              'string' != typeof e
            ) return 0 === e ? e : + e;
            e = $u(e);
            var n = eu.test(e);
            return n ||
            tu.test(e) ? gu(e.slice(2), n ? 2 : 8) : Xa.test(e) ? Xi : + e
          }
          function Yo(e) {
            return it(e, fi(e))
          }
          function Zo(e) {
            return null == e ? '' : Fn(e)
          }
          var Jo = ut(
            function (e, n) {
              if (er(n) || xo(n)) it(n, si(n), e);
               else for (var t in n) m.call(n, t) &&
              Te(e, t, n[t])
            }
          ),
          Xo = ut(function (e, n) {
            it(n, fi(n), e)
          }),
          ei = ut(function (e, n, t, r) {
            it(n, fi(n), e, r)
          }),
          ni = ut(function (e, n, t, r) {
            it(n, si(n), e, r)
          }),
          ti = Rt(Oe);
          var ri = xn(
            function (e, n) {
              e = v(e);
              var t = - 1,
              r = n.length,
              o = 2 < r ? n[2] : zi;
              for (o && Yt(n[0], n[1], o) && (r = 1); ++t < r; ) for (var i = n[t], a = fi(i), u = - 1, c = a.length; ++u < c; ) {
                var l = a[u],
                s = e[l];
                (s === zi || bo(s, p[l]) && !m.call(e, l)) &&
                (e[l] = i[l])
              }
              return e
            }
          ),
          oi = xn(function (e) {
            return e.push(zi, It),
            xu(di, zi, e)
          });
          function ii(e, n, t) {
            n = null == e ? zi : Ze(e, n);
            return n === zi ? t : n
          }
          function ai(e, n) {
            return null != e &&
            Gt(e, n, tn)
          }
          var ui = yt(
            function (e, n, t) {
              null != n &&
              'function' != typeof n.toString &&
              (n = g.call(n)),
              e[n] = t
            },
            Pi(Oi)
          ),
          ci = yt(
            function (e, n, t) {
              null != n &&
              'function' != typeof n.toString &&
              (n = g.call(n)),
              m.call(e, n) ? e[n].push(t) : e[n] = [
                t
              ]
            },
            Mt
          ),
          li = xn(on);
          function si(e) {
            return (xo(e) ? Ee : fn) (e)
          }
          function fi(e) {
            return xo(e) ? Ee(e, !0) : hn(e)
          }
          var hi = ut(function (e, n, t) {
            yn(e, n, t)
          }),
          di = ut(function (e, n, t, r) {
            yn(e, n, t, r)
          }),
          pi = Rt(
            function (n, e) {
              var t = {};
              if (null == n) return t;
              var r = !1;
              e = Ru(e, function (e) {
                return e = $n(e, n),
                r = r ||
                1 < e.length,
                e
              }),
              it(n, Bt(n), t),
              r &&
              (t = De(t, 7, Ut));
              for (var o = e.length; o--; ) Nn(t, e[o]);
              return t
            }
          );
          var vi = Rt(
            function (e, n) {
              return null == e ? {
              }
               : wn(t = e, n, function (e, n) {
                return ai(t, n)
              });
              var t
            }
          );
          function gi(e, t) {
            if (null == e) return {
            };
            var n = Ru(Bt(e), function (e) {
              return [e]
            });
            return t = Mt(t),
            wn(e, n, function (e, n) {
              return t(e, n[0])
            })
          }
          var yi = Lt(si),
          mi = Lt(fi);
          function bi(e) {
            return null == e ? [] : Yu(e, si(e))
          }
          var wi = ft(function (e, n, t) {
            return n = n.toLowerCase(),
            e + (t ? Si(n) : n)
          });
          function Si(e) {
            return Ti(Zo(e).toLowerCase())
          }
          function _i(e) {
            return (e = Zo(e)) &&
            e.replace(ou, ec).replace(cu, '')
          }
          var Ai = ft(function (e, n, t) {
            return e + (t ? '-' : '') + n.toLowerCase()
          }),
          Ei = ft(function (e, n, t) {
            return e + (t ? ' ' : '') + n.toLowerCase()
          }),
          xi = st('toLowerCase');
          var Ci = ft(function (e, n, t) {
            return e + (t ? '_' : '') + n.toLowerCase()
          });
          var Li = ft(function (e, n, t) {
            return e + (t ? ' ' : '') + Ti(n)
          });
          var ki = ft(function (e, n, t) {
            return e + (t ? ' ' : '') + n.toUpperCase()
          }),
          Ti = st('toUpperCase');
          function Ii(e, n, t) {
            return e = Zo(e),
            (n = t ? zi : n) === zi ? (t = e, su.test(t) ? e.match(lu) ||
            [] : e.match($a) || []) : e.match(n) ||
            []
          }
          var Ui = xn(
            function (e, n) {
              try {
                return xu(e, zi, n)
              } catch (e) {
                return To(e) ? e : new f(e)
              }
            }
          ),
          r = Rt(
            function (n, e) {
              return Lu(e, function (e) {
                e = vr(e),
                Re(n, e, uo(n[e], n))
              }),
              n
            }
          );
          function Pi(e) {
            return function () {
              return e
            }
          }
          var Ri = vt(),
          S = vt(!0);
          function Oi(e) {
            return e
          }
          function Bi(e) {
            return sn('function' == typeof e ? e : De(e, 1))
          }
          t = xn(function (n, t) {
            return function (e) {
              return on(e, n, t)
            }
          }),
          n = xn(function (n, t) {
            return function (e) {
              return on(n, e, t)
            }
          });
          function Di(r, n, e) {
            var t = si(n),
            o = Ye(n, t);
            null != e ||
            Ro(n) &&
            (o.length || !t.length) ||
            (e = n, n = r, r = this, o = Ye(n, si(n)));
            var i = !(Ro(e) && 'chain' in e && !e.chain),
            a = Io(r);
            return Lu(
              o,
              function (e) {
                var t = n[e];
                r[e] = t,
                a &&
                (
                  r.prototype[e] = function () {
                    var e = this.__chain__;
                    if (i || e) {
                      var n = r(this.__wrapped__);
                      return (n.__actions__ = ot(this.__actions__)).push({
                        func: t,
                        args: arguments,
                        thisArg: r
                      }),
                      n.__chain__ = e,
                      n
                    }
                    return t.apply(r, Ou([this.value()], arguments))
                  }
                )
              }
            ),
            r
          }
          function ji() {
          }
          E = bt(Ru),
          se = bt(Tu),
          B = bt(ju);
          function Fi(e) {
            return Zt(e) ? qu(vr(e)) : (n = e, function (e) {
              return Ze(e, n)
            });
            var n
          }
          Z = _t(),
          X = _t(!0);
          function Mi() {
            return []
          }
          function Ni() {
            return !1
          }
          ne = mt(function (e, n) {
            return e + n
          }, 0),
          a = xt('ceil'),
          j = mt(function (e, n) {
            return e / n
          }, 1),
          In = xt('floor');
          var Wi,
          D = mt(function (e, n) {
            return e * n
          }, 1),
          Qn = xt('round'),
          W = mt(function (e, n) {
            return e - n
          }, 0);
          return de.after = function (e, n) {
            if ('function' != typeof n) throw new _(Vi);
            return e = Ko(e),
            function () {
              if (--e < 1) return n.apply(this, arguments)
            }
          },
          de.ary = io,
          de.assign = Jo,
          de.assignIn = Xo,
          de.assignInWith = ei,
          de.assignWith = ni,
          de.at = ti,
          de.before = ao,
          de.bind = uo,
          de.bindAll = r,
          de.bindKey = co,
          de.castArray = function () {
            if (!arguments.length) return [];
            var e = arguments[0];
            return Ao(e) ? e : [
              e
            ]
          },
          de.chain = qr,
          de.chunk = function (e, n, t) {
            n = (t ? Yt(e, n, t) : n === zi) ? 1 : H(Ko(n), 0);
            var r = null == e ? 0 : e.length;
            if (!r || n < 1) return [];
            for (var o = 0, i = 0, a = A(F(r / n)); o < r; ) a[i++] = Pn(e, o, o += n);
            return a
          },
          de.compact = function (e) {
            for (var n = - 1, t = null == e ? 0 : e.length, r = 0, o = []; ++n < t; ) {
              var i = e[n];
              i &&
              (o[r++] = i)
            }
            return o
          },
          de.concat = function () {
            var e = arguments.length;
            if (!e) return [];
            for (var n = A(e - 1), t = arguments[0], r = e; r--; ) n[r - 1] = arguments[r];
            return Ou(Ao(t) ? ot(t) : [
              t
            ], He(n, 1))
          },
          de.cond = function (r) {
            var o = null == r ? 0 : r.length,
            n = Mt();
            return r = o ? Ru(
              r,
              function (e) {
                if ('function' != typeof e[1]) throw new _(Vi);
                return [n(e[0]),
                e[1]]
              }
            ) : [],
            xn(
              function (e) {
                for (var n = - 1; ++n < o; ) {
                  var t = r[n];
                  if (xu(t[0], this, e)) return xu(t[1], this, e)
                }
              }
            )
          },
          de.conforms = function (e) {
            return n = De(e, 1),
            t = si(n),
            function (e) {
              return je(e, n, t)
            };
            var n,
            t
          },
          de.constant = Pi,
          de.countBy = Kr,
          de.create = function (e, n) {
            return e = pe(e),
            null == n ? e : Pe(e, n)
          },
          de.curry = function e(n, t, r) {
            t = kt(n, 8, zi, zi, zi, zi, zi, t = r ? zi : t);
            return t.placeholder = e.placeholder,
            t
          },
          de.curryRight = function e(n, t, r) {
            t = kt(n, Gi, zi, zi, zi, zi, zi, t = r ? zi : t);
            return t.placeholder = e.placeholder,
            t
          },
          de.debounce = lo,
          de.defaults = ri,
          de.defaultsDeep = oi,
          de.defer = so,
          de.delay = fo,
          de.difference = mr,
          de.differenceBy = br,
          de.differenceWith = wr,
          de.drop = function (e, n, t) {
            var r = null == e ? 0 : e.length;
            return r ? Pn(e, (n = t || n === zi ? 1 : Ko(n)) < 0 ? 0 : n, r) : []
          },
          de.dropRight = function (e, n, t) {
            var r = null == e ? 0 : e.length;
            return r ? Pn(e, 0, (n = r - (n = t || n === zi ? 1 : Ko(n))) < 0 ? 0 : n) : []
          },
          de.dropRightWhile = function (e, n) {
            return e &&
            e.length ? zn(e, Mt(n, 3), !0, !0) : []
          },
          de.dropWhile = function (e, n) {
            return e &&
            e.length ? zn(e, Mt(n, 3), !0) : []
          },
          de.fill = function (e, n, t, r) {
            var o = null == e ? 0 : e.length;
            return o ? (
              t &&
              'number' != typeof t &&
              Yt(e, n, t) &&
              (t = 0, r = o),
              function (e, n, t, r) {
                var o = e.length;
                for (
                  (t = Ko(t)) < 0 &&
                  (t = o < - t ? 0 : o + t),
                  (r = r === zi || o < r ? o : Ko(r)) < 0 &&
                  (r += o),
                  r = r < t ? 0 : $o(r);
                  t < r;
                ) e[t++] = n;
                return e
              }(e, n, t, r)
            ) : []
          },
          de.filter = function (e, n) {
            return (Ao(e) ? Iu : qe) (e, Mt(n, 3))
          },
          de.flatMap = function (e, n) {
            return He(no(e, n), 1)
          },
          de.flatMapDeep = function (e, n) {
            return He(no(e, n), Zi)
          },
          de.flatMapDepth = function (e, n, t) {
            return t = t === zi ? 1 : Ko(t),
            He(no(e, n), t)
          },
          de.flatten = Ar,
          de.flattenDeep = function (e) {
            return (null == e ? 0 : e.length) ? He(e, Zi) : []
          },
          de.flattenDepth = function (e, n) {
            return (null == e ? 0 : e.length) ? He(e, n = n === zi ? 1 : Ko(n)) : []
          },
          de.flip = function (e) {
            return kt(e, 512)
          },
          de.flow = Ri,
          de.flowRight = S,
          de.fromPairs = function (e) {
            for (var n = - 1, t = null == e ? 0 : e.length, r = {}; ++n < t; ) {
              var o = e[n];
              r[o[0]] = o[1]
            }
            return r
          },
          de.functions = function (e) {
            return null == e ? [] : Ye(e, si(e))
          },
          de.functionsIn = function (e) {
            return null == e ? [] : Ye(e, fi(e))
          },
          de.groupBy = Jr,
          de.initial = function (e) {
            return (null == e ? 0 : e.length) ? Pn(e, 0, - 1) : []
          },
          de.intersection = xr,
          de.intersectionBy = Cr,
          de.intersectionWith = Lr,
          de.invert = ui,
          de.invertBy = ci,
          de.invokeMap = Xr,
          de.iteratee = Bi,
          de.keyBy = eo,
          de.keys = si,
          de.keysIn = fi,
          de.map = no,
          de.mapKeys = function (e, r) {
            var o = {};
            return r = Mt(r, 3),
            $e(e, function (e, n, t) {
              Re(o, r(e, n, t), e)
            }),
            o
          },
          de.mapValues = function (e, r) {
            var o = {};
            return r = Mt(r, 3),
            $e(e, function (e, n, t) {
              Re(o, n, r(e, n, t))
            }),
            o
          },
          de.matches = function (e) {
            return vn(De(e, 1))
          },
          de.matchesProperty = function (e, n) {
            return gn(e, De(n, 1))
          },
          de.memoize = ho,
          de.merge = hi,
          de.mergeWith = di,
          de.method = t,
          de.methodOf = n,
          de.mixin = Di,
          de.negate = po,
          de.nthArg = function (n) {
            return n = Ko(n),
            xn(function (e) {
              return mn(e, n)
            })
          },
          de.omit = pi,
          de.omitBy = function (e, n) {
            return gi(e, po(Mt(n)))
          },
          de.once = function (e) {
            return ao(2, e)
          },
          de.orderBy = function (e, n, t, r) {
            return null == e ? [] : (
              Ao(n) ||
              (n = null == n ? [] : [
                n
              ]),
              Ao(t = r ? zi : t) ||
              (t = null == t ? [] : [
                t
              ]),
              bn(e, n, t)
            )
          },
          de.over = E,
          de.overArgs = vo,
          de.overEvery = se,
          de.overSome = B,
          de.partial = go,
          de.partialRight = yo,
          de.partition = to,
          de.pick = vi,
          de.pickBy = gi,
          de.property = Fi,
          de.propertyOf = function (n) {
            return function (e) {
              return null == n ? zi : Ze(n, e)
            }
          },
          de.pull = Tr,
          de.pullAll = Ir,
          de.pullAllBy = function (e, n, t) {
            return e &&
            e.length &&
            n &&
            n.length ? Sn(e, n, Mt(t, 2)) : e
          },
          de.pullAllWith = function (e, n, t) {
            return e &&
            e.length &&
            n &&
            n.length ? Sn(e, n, zi, t) : e
          },
          de.pullAt = Ur,
          de.range = Z,
          de.rangeRight = X,
          de.rearg = mo,
          de.reject = function (e, n) {
            return (Ao(e) ? Iu : qe) (e, po(Mt(n, 3)))
          },
          de.remove = function (e, n) {
            var t = [];
            if (!e || !e.length) return t;
            var r = - 1,
            o = [],
            i = e.length;
            for (n = Mt(n, 3); ++r < i; ) {
              var a = e[r];
              n(a, r, e) &&
              (t.push(a), o.push(r))
            }
            return _n(e, o),
            t
          },
          de.rest = function (e, n) {
            if ('function' != typeof e) throw new _(Vi);
            return xn(e, n = n === zi ? n : Ko(n))
          },
          de.reverse = Pr,
          de.sampleSize = function (e, n, t) {
            return n = (t ? Yt(e, n, t) : n === zi) ? 1 : Ko(n),
            (Ao(e) ? Ce : Ln) (e, n)
          },
          de.set = function (e, n, t) {
            return null == e ? e : kn(e, n, t)
          },
          de.setWith = function (e, n, t, r) {
            return r = 'function' == typeof r ? r : zi,
            null == e ? e : kn(e, n, t, r)
          },
          de.shuffle = function (e) {
            return (Ao(e) ? Le : Un) (e)
          },
          de.slice = function (e, n, t) {
            var r = null == e ? 0 : e.length;
            return r ? (
              t = t &&
              'number' != typeof t &&
              Yt(e, n, t) ? (n = 0, r) : (n = null == n ? 0 : Ko(n), t === zi ? r : Ko(t)),
              Pn(e, n, t)
            ) : []
          },
          de.sortBy = ro,
          de.sortedUniq = function (e) {
            return e &&
            e.length ? Dn(e) : []
          },
          de.sortedUniqBy = function (e, n) {
            return e &&
            e.length ? Dn(e, Mt(n, 2)) : []
          },
          de.split = function (e, n, t) {
            return t &&
            'number' != typeof t &&
            Yt(e, n, t) &&
            (n = t = zi),
            (t = t === zi ? ea : t >>> 0) ? (e = Zo(e)) &&
            ('string' == typeof n || null != n && !Fo(n)) &&
            !(n = Fn(n)) &&
            rc(e) ? Yn(lc(e), 0, t) : e.split(n, t) : []
          },
          de.spread = function (t, r) {
            if ('function' != typeof t) throw new _(Vi);
            return r = null == r ? 0 : H(Ko(r), 0),
            xn(
              function (e) {
                var n = e[r],
                e = Yn(e, 0, r);
                return n &&
                Ou(e, n),
                xu(t, this, e)
              }
            )
          },
          de.tail = function (e) {
            var n = null == e ? 0 : e.length;
            return n ? Pn(e, 1, n) : []
          },
          de.take = function (e, n, t) {
            return e &&
            e.length ? Pn(e, 0, (n = t || n === zi ? 1 : Ko(n)) < 0 ? 0 : n) : []
          },
          de.takeRight = function (e, n, t) {
            var r = null == e ? 0 : e.length;
            return r ? Pn(e, (n = r - (n = t || n === zi ? 1 : Ko(n))) < 0 ? 0 : n, r) : []
          },
          de.takeRightWhile = function (e, n) {
            return e &&
            e.length ? zn(e, Mt(n, 3), !1, !0) : []
          },
          de.takeWhile = function (e, n) {
            return e &&
            e.length ? zn(e, Mt(n, 3)) : []
          },
          de.tap = function (e, n) {
            return n(e),
            e
          },
          de.throttle = function (e, n, t) {
            var r = !0,
            o = !0;
            if ('function' != typeof e) throw new _(Vi);
            return Ro(t) &&
            (r = 'leading' in t ? !!t.leading : r, o = 'trailing' in t ? !!t.trailing : o),
            lo(e, n, {
              leading: r,
              maxWait: n,
              trailing: o
            })
          },
          de.thru = Hr,
          de.toArray = Ho,
          de.toPairs = yi,
          de.toPairsIn = mi,
          de.toPath = function (e) {
            return Ao(e) ? Ru(e, vr) : Wo(e) ? [
              e
            ] : ot(pr(Zo(e)))
          },
          de.toPlainObject = Yo,
          de.transform = function (e, r, o) {
            var n,
            t = Ao(e),
            i = t ||
            Lo(e) ||
            zo(e);
            return r = Mt(r, 4),
            null == o &&
            (n = e && e.constructor, o = i ? t ? new n : [] : Ro(e) && Io(n) ? pe(L(e)) : {
            }),
            (i ? Lu : $e) (e, function (e, n, t) {
              return r(o, e, n, t)
            }),
            o
          },
          de.unary = function (e) {
            return io(e, 1)
          },
          de.union = Rr,
          de.unionBy = Or,
          de.unionWith = Br,
          de.uniq = function (e) {
            return e &&
            e.length ? Mn(e) : []
          },
          de.uniqBy = function (e, n) {
            return e &&
            e.length ? Mn(e, Mt(n, 2)) : []
          },
          de.uniqWith = function (e, n) {
            return n = 'function' == typeof n ? n : zi,
            e &&
            e.length ? Mn(e, zi, n) : []
          },
          de.unset = function (e, n) {
            return null == e ||
            Nn(e, n)
          },
          de.unzip = Dr,
          de.unzipWith = jr,
          de.update = function (e, n, t) {
            return null == e ? e : Wn(e, n, Kn(t))
          },
          de.updateWith = function (e, n, t, r) {
            return r = 'function' == typeof r ? r : zi,
            null == e ? e : Wn(e, n, Kn(t), r)
          },
          de.values = bi,
          de.valuesIn = function (e) {
            return null == e ? [] : Yu(e, fi(e))
          },
          de.without = Fr,
          de.words = Ii,
          de.wrap = function (e, n) {
            return go(Kn(n), e)
          },
          de.xor = Mr,
          de.xorBy = Nr,
          de.xorWith = Wr,
          de.zip = zr,
          de.zipObject = function (e, n) {
            return Hn(e || [], n || [], Te)
          },
          de.zipObjectDeep = function (e, n) {
            return Hn(e || [], n || [], kn)
          },
          de.zipWith = Vr,
          de.entries = yi,
          de.entriesIn = mi,
          de.extend = Xo,
          de.extendWith = ei,
          Di(de, de),
          de.add = ne,
          de.attempt = Ui,
          de.camelCase = wi,
          de.capitalize = Si,
          de.ceil = a,
          de.clamp = function (e, n, t) {
            return t === zi &&
            (t = n, n = zi),
            t !== zi &&
            (t = (t = Qo(t)) == t ? t : 0),
            n !== zi &&
            (n = (n = Qo(n)) == n ? n : 0),
            Be(Qo(e), n, t)
          },
          de.clone = function (e) {
            return De(e, 4)
          },
          de.cloneDeep = function (e) {
            return De(e, 5)
          },
          de.cloneDeepWith = function (e, n) {
            return De(e, 5, n = 'function' == typeof n ? n : zi)
          },
          de.cloneWith = function (e, n) {
            return De(e, 4, n = 'function' == typeof n ? n : zi)
          },
          de.conformsTo = function (e, n) {
            return null == n ||
            je(e, n, si(n))
          },
          de.deburr = _i,
          de.defaultTo = function (e, n) {
            return null == e ||
            e != e ? n : e
          },
          de.divide = j,
          de.endsWith = function (e, n, t) {
            e = Zo(e),
            n = Fn(n);
            var r = e.length,
            r = t = t === zi ? r : Be(Ko(t), 0, r);
            return 0 <= (t -= n.length) &&
            e.slice(t, r) == n
          },
          de.eq = bo,
          de.escape = function (e) {
            return (e = Zo(e)) &&
            Ba.test(e) ? e.replace(Ra, nc) : e
          },
          de.escapeRegExp = function (e) {
            return (e = Zo(e)) &&
            Va.test(e) ? e.replace(za, '\\$&') : e
          },
          de.every = function (e, n, t) {
            var r = Ao(e) ? Tu : ze;
            return t &&
            Yt(e, n, t) &&
            (n = zi),
            r(e, Mt(n, 3))
          },
          de.find = $r,
          de.findIndex = Sr,
          de.findKey = function (e, n) {
            return Fu(e, Mt(n, 3), $e)
          },
          de.findLast = Qr,
          de.findLastIndex = _r,
          de.findLastKey = function (e, n) {
            return Fu(e, Mt(n, 3), Qe)
          },
          de.floor = In,
          de.forEach = Yr,
          de.forEachRight = Zr,
          de.forIn = function (e, n) {
            return null == e ? e : Ge(e, Mt(n, 3), fi)
          },
          de.forInRight = function (e, n) {
            return null == e ? e : Ke(e, Mt(n, 3), fi)
          },
          de.forOwn = function (e, n) {
            return e &&
            $e(e, Mt(n, 3))
          },
          de.forOwnRight = function (e, n) {
            return e &&
            Qe(e, Mt(n, 3))
          },
          de.get = ii,
          de.gt = wo,
          de.gte = So,
          de.has = function (e, n) {
            return null != e &&
            Gt(e, n, nn)
          },
          de.hasIn = ai,
          de.head = Er,
          de.identity = Oi,
          de.includes = function (e, n, t, r) {
            return e = xo(e) ? e : bi(e),
            t = t &&
            !r ? Ko(t) : 0,
            r = e.length,
            t < 0 &&
            (t = H(r + t, 0)),
            No(e) ? t <= r &&
            - 1 < e.indexOf(n, t) : !!r &&
            - 1 < Nu(e, n, t)
          },
          de.indexOf = function (e, n, t) {
            var r = null == e ? 0 : e.length;
            return r ? ((t = null == t ? 0 : Ko(t)) < 0 && (t = H(r + t, 0)), Nu(e, n, t)) : - 1
          },
          de.inRange = function (e, n, t) {
            return n = Go(n),
            t === zi ? (t = n, n = 0) : t = Go(t),
            (e = e = Qo(e)) >= G(n = n, t = t) &&
            e < H(n, t)
          },
          de.invoke = li,
          de.isArguments = _o,
          de.isArray = Ao,
          de.isArrayBuffer = Eo,
          de.isArrayLike = xo,
          de.isArrayLikeObject = Co,
          de.isBoolean = function (e) {
            return !0 === e ||
            !1 === e ||
            Oo(e) &&
            Xe(e) == oa
          },
          de.isBuffer = Lo,
          de.isDate = ko,
          de.isElement = function (e) {
            return Oo(e) &&
            1 === e.nodeType &&
            !jo(e)
          },
          de.isEmpty = function (e) {
            if (null == e) return !0;
            if (
              xo(e) &&
              (
                Ao(e) ||
                'string' == typeof e ||
                'function' == typeof e.splice ||
                Lo(e) ||
                zo(e) ||
                _o(e)
              )
            ) return !e.length;
            var n,
            t = Ht(e);
            if (t == la || t == pa) return !e.size;
            if (er(e)) return !fn(e).length;
            for (n in e) if (m.call(e, n)) return !1;
            return !0
          },
          de.isEqual = function (e, n) {
            return un(e, n)
          },
          de.isEqualWith = function (e, n, t) {
            var r = (t = 'function' == typeof t ? t : zi) ? t(e, n) : zi;
            return r === zi ? un(e, n, zi, t) : !!r
          },
          de.isError = To,
          de.isFinite = function (e) {
            return 'number' == typeof e &&
            z(e)
          },
          de.isFunction = Io,
          de.isInteger = Uo,
          de.isLength = Po,
          de.isMap = Bo,
          de.isMatch = function (e, n) {
            return e === n ||
            cn(e, n, Wt(n))
          },
          de.isMatchWith = function (e, n, t) {
            return t = 'function' == typeof t ? t : zi,
            cn(e, n, Wt(n), t)
          },
          de.isNaN = function (e) {
            return Do(e) &&
            e != + e
          },
          de.isNative = function (e) {
            if (Xt(e)) throw new f(
              'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.'
            );
            return ln(e)
          },
          de.isNil = function (e) {
            return null == e
          },
          de.isNull = function (e) {
            return null === e
          },
          de.isNumber = Do,
          de.isObject = Ro,
          de.isObjectLike = Oo,
          de.isPlainObject = jo,
          de.isRegExp = Fo,
          de.isSafeInteger = function (e) {
            return Uo(e) &&
            - Ji <= e &&
            e <= Ji
          },
          de.isSet = Mo,
          de.isString = No,
          de.isSymbol = Wo,
          de.isTypedArray = zo,
          de.isUndefined = function (e) {
            return e === zi
          },
          de.isWeakMap = function (e) {
            return Oo(e) &&
            Ht(e) == ya
          },
          de.isWeakSet = function (e) {
            return Oo(e) &&
            '[object WeakSet]' == Xe(e)
          },
          de.join = function (e, n) {
            return null == e ? '' : V.call(e, n)
          },
          de.kebabCase = Ai,
          de.last = kr,
          de.lastIndexOf = function (e, n, t) {
            var r = null == e ? 0 : e.length;
            if (!r) return - 1;
            var o = r;
            return t !== zi &&
            (o = (o = Ko(t)) < 0 ? H(r + o, 0) : G(o, r - 1)),
            n == n ? function (e, n, t) {
              for (var r = t + 1; r--; ) if (e[r] === n) return r;
              return r
            }(e, n, o) : Mu(e, zu, o, !0)
          },
          de.lowerCase = Ei,
          de.lowerFirst = xi,
          de.lt = Vo,
          de.lte = qo,
          de.max = function (e) {
            return e &&
            e.length ? Ve(e, Oi, en) : zi
          },
          de.maxBy = function (e, n) {
            return e &&
            e.length ? Ve(e, Mt(n, 2), en) : zi
          },
          de.mean = function (e) {
            return Vu(e, Oi)
          },
          de.meanBy = function (e, n) {
            return Vu(e, Mt(n, 2))
          },
          de.min = function (e) {
            return e &&
            e.length ? Ve(e, Oi, dn) : zi
          },
          de.minBy = function (e, n) {
            return e &&
            e.length ? Ve(e, Mt(n, 2), dn) : zi
          },
          de.stubArray = Mi,
          de.stubFalse = Ni,
          de.stubObject = function () {
            return {
            }
          },
          de.stubString = function () {
            return ''
          },
          de.stubTrue = function () {
            return !0
          },
          de.multiply = D,
          de.nth = function (e, n) {
            return e &&
            e.length ? mn(e, Ko(n)) : zi
          },
          de.noConflict = function () {
            return yu._ === this &&
            (yu._ = b),
            this
          },
          de.noop = ji,
          de.now = oo,
          de.pad = function (e, n, t) {
            e = Zo(e);
            var r = (n = Ko(n)) ? cc(e) : 0;
            return !n ||
            n <= r ? e : wt(M(r = (n - r) / 2), t) + e + wt(F(r), t)
          },
          de.padEnd = function (e, n, t) {
            e = Zo(e);
            var r = (n = Ko(n)) ? cc(e) : 0;
            return n &&
            r < n ? e + wt(n - r, t) : e
          },
          de.padStart = function (e, n, t) {
            e = Zo(e);
            var r = (n = Ko(n)) ? cc(e) : 0;
            return n &&
            r < n ? wt(n - r, t) + e : e
          },
          de.parseInt = function (e, n, t) {
            return n = t ||
            null == n ? 0 : n &&
            + n,
            $(Zo(e).replace(qa, ''), n || 0)
          },
          de.random = function (e, n, t) {
            var r;
            if (
              t &&
              'boolean' != typeof t &&
              Yt(e, n, t) &&
              (n = t = zi),
              t === zi &&
              ('boolean' == typeof n ? (t = n, n = zi) : 'boolean' == typeof e && (t = e, e = zi)),
              e === zi &&
              n === zi ? (e = 0, n = 1) : (e = Go(e), n === zi ? (n = e, e = 0) : n = Go(n)),
              n < e &&
              (r = e, e = n, n = r),
              t ||
              e % 1 ||
              n % 1
            ) {
              t = Q();
              return G(e + t * (n - e + vu('1e-' + ((t + '').length - 1))), n)
            }
            return An(e, n)
          },
          de.reduce = function (e, n, t) {
            var r = Ao(e) ? Bu : Hu,
            o = arguments.length < 3;
            return r(e, Mt(n, 4), t, o, Ne)
          },
          de.reduceRight = function (e, n, t) {
            var r = Ao(e) ? Du : Hu,
            o = arguments.length < 3;
            return r(e, Mt(n, 4), t, o, We)
          },
          de.repeat = function (e, n, t) {
            return n = (t ? Yt(e, n, t) : n === zi) ? 1 : Ko(n),
            En(Zo(e), n)
          },
          de.replace = function () {
            var e = arguments,
            n = Zo(e[0]);
            return e.length < 3 ? n : n.replace(e[1], e[2])
          },
          de.result = function (e, n, t) {
            var r = - 1,
            o = (n = $n(n, e)).length;
            for (o || (o = 1, e = zi); ++r < o; ) {
              var i = null == e ? zi : e[vr(n[r])];
              i === zi &&
              (r = o, i = t),
              e = Io(i) ? i.call(e) : i
            }
            return e
          },
          de.round = Qn,
          de.runInContext = e,
          de.sample = function (e) {
            return (Ao(e) ? xe : Cn) (e)
          },
          de.size = function (e) {
            if (null == e) return 0;
            if (xo(e)) return No(e) ? cc(e) : e.length;
            var n = Ht(e);
            return n == la ||
            n == pa ? e.size : fn(e).length
          },
          de.snakeCase = Ci,
          de.some = function (e, n, t) {
            var r = Ao(e) ? ju : Rn;
            return t &&
            Yt(e, n, t) &&
            (n = zi),
            r(e, Mt(n, 3))
          },
          de.sortedIndex = function (e, n) {
            return On(e, n)
          },
          de.sortedIndexBy = function (e, n, t) {
            return Bn(e, n, Mt(t, 2))
          },
          de.sortedIndexOf = function (e, n) {
            var t = null == e ? 0 : e.length;
            if (t) {
              var r = On(e, n);
              if (r < t && bo(e[r], n)) return r
            }
            return - 1
          },
          de.sortedLastIndex = function (e, n) {
            return On(e, n, !0)
          },
          de.sortedLastIndexBy = function (e, n, t) {
            return Bn(e, n, Mt(t, 2), !0)
          },
          de.sortedLastIndexOf = function (e, n) {
            if (null == e ? 0 : e.length) {
              var t = On(e, n, !0) - 1;
              if (bo(e[t], n)) return t
            }
            return - 1
          },
          de.startCase = Li,
          de.startsWith = function (e, n, t) {
            return e = Zo(e),
            t = null == t ? 0 : Be(Ko(t), 0, e.length),
            n = Fn(n),
            e.slice(t, t + n.length) == n
          },
          de.subtract = W,
          de.sum = function (e) {
            return e &&
            e.length ? Gu(e, Oi) : 0
          },
          de.sumBy = function (e, n) {
            return e &&
            e.length ? Gu(e, Mt(n, 2)) : 0
          },
          de.template = function (a, e, n) {
            var t = de.templateSettings;
            n &&
            Yt(a, e, n) &&
            (e = zi),
            a = Zo(a),
            e = ei({
            }, e, t, Tt);
            var u,
            c,
            r = si(t = ei({
            }, e.imports, t.imports, Tt)),
            o = Yu(t, r),
            l = 0,
            t = e.interpolate ||
            iu,
            s = '__p += \'',
            t = d(
              (e.escape || iu).source + '|' + t.source + '|' + (t === Fa ? Za : iu).source + '|' + (e.evaluate || iu).source + '|$',
              'g'
            ),
            i = '//# sourceURL=' + (
              m.call(e, 'sourceURL') ? (e.sourceURL + '').replace(/\s/g, ' ') : 'lodash.templateSources[' + ++hu + ']'
            ) + '\n';
            if (
              a.replace(
                t,
                function (e, n, t, r, o, i) {
                  return t = t ||
                  r,
                  s += a.slice(l, i).replace(au, tc),
                  n &&
                  (u = !0, s += '\' +\n__e(' + n + ') +\n\''),
                  o &&
                  (c = !0, s += '\';\n' + o + ';\n__p += \''),
                  t &&
                  (s += '\' +\n((__t = (' + t + ')) == null ? \'\' : __t) +\n\''),
                  l = i + e.length,
                  e
                }
              ),
              s += '\';\n',
              e = m.call(e, 'variable') &&
              e.variable
            ) {
              if (Qa.test(e)) throw new f('Invalid `variable` option passed into `_.template`')
            } else s = 'with (obj) {\n' + s + '\n}\n';
            if (
              s = (c ? s.replace(Ta, '') : s).replace(Ia, '$1').replace(Ua, '$1;'),
              s = 'function(' + (e || 'obj') + ') {\n' + (e ? '' : 'obj || (obj = {});\n') + 'var __t, __p = \'\'' + (u ? ', __e = _.escape' : '') + (
                c ? ', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, \'\') }\n' : ';\n'
              ) + s + 'return __p\n}',
              (e = Ui(function () {
                return h(r, i + 'return ' + s).apply(zi, o)
              })).source = s,
              To(e)
            ) throw e;
            return e
          },
          de.times = function (e, n) {
            if ((e = Ko(e)) < 1 || Ji < e) return [];
            var t = ea,
            r = G(e, ea);
            for (n = Mt(n), e -= ea, r = Ku(r, n); ++t < e; ) n(t);
            return r
          },
          de.toFinite = Go,
          de.toInteger = Ko,
          de.toLength = $o,
          de.toLower = function (e) {
            return Zo(e).toLowerCase()
          },
          de.toNumber = Qo,
          de.toSafeInteger = function (e) {
            return e ? Be(Ko(e), - Ji, Ji) : 0 === e ? e : 0
          },
          de.toString = Zo,
          de.toUpper = function (e) {
            return Zo(e).toUpperCase()
          },
          de.trim = function (e, n, t) {
            return (e = Zo(e)) &&
            (t || n === zi) ? $u(e) : e &&
            (n = Fn(n)) ? (e = lc(e), n = lc(n), Yn(e, Ju(e, n), Xu(e, n) + 1).join('')) : e
          },
          de.trimEnd = function (e, n, t) {
            return (e = Zo(e)) &&
            (t || n === zi) ? e.slice(0, sc(e) + 1) : e &&
            (n = Fn(n)) ? Yn(e = lc(e), 0, Xu(e, lc(n)) + 1).join('') : e
          },
          de.trimStart = function (e, n, t) {
            return (e = Zo(e)) &&
            (t || n === zi) ? e.replace(qa, '') : e &&
            (n = Fn(n)) ? Yn(e = lc(e), Ju(e, lc(n))).join('') : e
          },
          de.truncate = function (e, n) {
            var t,
            r = 30,
            o = '...';
            Ro(n) &&
            (
              t = 'separator' in n ? n.separator : t,
              r = 'length' in n ? Ko(n.length) : r,
              o = 'omission' in n ? Fn(n.omission) : o
            );
            var i,
            n = (e = Zo(e)).length;
            if (rc(e) && (n = (i = lc(e)).length), n <= r) return e;
            if ((n = r - cc(o)) < 1) return o;
            if (r = i ? Yn(i, 0, n).join('') : e.slice(0, n), t === zi) return r + o;
            if (i && (n += r.length - n), Fo(t)) {
              if (e.slice(n).search(t)) {
                var a,
                u = r;
                for (
                  t.global ||
                  (t = d(t.source, Zo(Ja.exec(t)) + 'g')),
                  t.lastIndex = 0;
                  a = t.exec(u);
                ) var c = a.index;
                r = r.slice(0, c === zi ? n : c)
              }
            } else e.indexOf(Fn(t), n) == n ||
            - 1 < (n = r.lastIndexOf(t)) &&
            (r = r.slice(0, n));
            return r + o
          },
          de.unescape = function (e) {
            return (e = Zo(e)) &&
            Oa.test(e) ? e.replace(Pa, fc) : e
          },
          de.uniqueId = function (e) {
            var n = ++c;
            return Zo(e) + n
          },
          de.upperCase = ki,
          de.upperFirst = Ti,
          de.each = Yr,
          de.eachRight = Zr,
          de.first = Er,
          Di(
            de,
            (
              Wi = {},
              $e(de, function (e, n) {
                m.call(de.prototype, n) ||
                (Wi[n] = e)
              }),
              Wi
            ),
            {
              chain: !1
            }
          ),
          de.VERSION = '4.17.21',
          Lu(
            ['bind',
            'bindKey',
            'curry',
            'curryRight',
            'partial',
            'partialRight'],
            function (e) {
              de[e].placeholder = de
            }
          ),
          Lu(
            ['drop',
            'take'],
            function (t, r) {
              me.prototype[t] = function (e) {
                e = e === zi ? 1 : H(Ko(e), 0);
                var n = this.__filtered__ &&
                !r ? new me(this) : this.clone();
                return n.__filtered__ ? n.__takeCount__ = G(e, n.__takeCount__) : n.__views__.push({
                  size: G(e, ea),
                  type: t + (n.__dir__ < 0 ? 'Right' : '')
                }),
                n
              },
              me.prototype[t + 'Right'] = function (e) {
                return this.reverse() [t](e).reverse()
              }
            }
          ),
          Lu(
            ['filter',
            'map',
            'takeWhile'],
            function (e, n) {
              var t = n + 1,
              r = 1 == t ||
              3 == t;
              me.prototype[e] = function (e) {
                var n = this.clone();
                return n.__iteratees__.push({
                  iteratee: Mt(e, 3),
                  type: t
                }),
                n.__filtered__ = n.__filtered__ ||
                r,
                n
              }
            }
          ),
          Lu(
            ['head',
            'last'],
            function (e, n) {
              var t = 'take' + (n ? 'Right' : '');
              me.prototype[e] = function () {
                return this[t](1).value() [0]
              }
            }
          ),
          Lu(
            ['initial',
            'tail'],
            function (e, n) {
              var t = 'drop' + (n ? '' : 'Right');
              me.prototype[e] = function () {
                return this.__filtered__ ? new me(this) : this[t](1)
              }
            }
          ),
          me.prototype.compact = function () {
            return this.filter(Oi)
          },
          me.prototype.find = function (e) {
            return this.filter(e).head()
          },
          me.prototype.findLast = function (e) {
            return this.reverse().find(e)
          },
          me.prototype.invokeMap = xn(
            function (n, t) {
              return 'function' == typeof n ? new me(this) : this.map(function (e) {
                return on(e, n, t)
              })
            }
          ),
          me.prototype.reject = function (e) {
            return this.filter(po(Mt(e)))
          },
          me.prototype.slice = function (e, n) {
            e = Ko(e);
            var t = this;
            return t.__filtered__ &&
            (0 < e || n < 0) ? new me(t) : (
              e < 0 ? t = t.takeRight( - e) : e &&
              (t = t.drop(e)),
              n !== zi &&
              (t = (n = Ko(n)) < 0 ? t.dropRight( - n) : t.take(n - e)),
              t
            )
          },
          me.prototype.takeRightWhile = function (e) {
            return this.reverse().takeWhile(e).reverse()
          },
          me.prototype.toArray = function () {
            return this.take(ea)
          },
          $e(
            me.prototype,
            function (l, e) {
              var s = /^(?:filter|find|map|reject)|While$/.test(e),
              f = /^(?:head|last)$/.test(e),
              h = de[f ? 'take' + ('last' == e ? 'Right' : '') : e],
              d = f ||
              /^find/.test(e);
              h &&
              (
                de.prototype[e] = function () {
                  function e(e) {
                    return e = h.apply(de, Ou([e], t)),
                    f &&
                    a ? e[0] : e
                  }
                  var n = this.__wrapped__,
                  t = f ? [
                    1
                  ] : arguments,
                  r = n instanceof me,
                  o = t[0],
                  i = r ||
                  Ao(n);
                  i &&
                  s &&
                  'function' == typeof o &&
                  1 != o.length &&
                  (r = i = !1);
                  var a = this.__chain__,
                  u = !!this.__actions__.length,
                  o = d &&
                  !a,
                  u = r &&
                  !u;
                  if (d || !i) return o &&
                  u ? l.apply(this, t) : (c = this.thru(e), o ? f ? c.value() [0] : c.value() : c);
                  n = u ? n : new me(this);
                  var c = l.apply(n, t);
                  return c.__actions__.push({
                    func: Hr,
                    args: [
                      e
                    ],
                    thisArg: zi
                  }),
                  new ye(c, a)
                }
              )
            }
          ),
          Lu(
            ['pop',
            'push',
            'shift',
            'sort',
            'splice',
            'unshift'],
            function (e) {
              var t = i[e],
              r = /^(?:push|sort|unshift)$/.test(e) ? 'tap' : 'thru',
              o = /^(?:pop|shift)$/.test(e);
              de.prototype[e] = function () {
                var n = arguments;
                if (!o || this.__chain__) return this[r](function (e) {
                  return t.apply(Ao(e) ? e : [], n)
                });
                var e = this.value();
                return t.apply(Ao(e) ? e : [], n)
              }
            }
          ),
          $e(
            me.prototype,
            function (e, n) {
              var t,
              r = de[n];
              r &&
              (
                t = r.name + '',
                m.call(oe, t) ||
                (oe[t] = []),
                oe[t].push({
                  name: n,
                  func: r
                })
              )
            }
          ),
          oe[gt(zi, 2).name] = [
            {
              name: 'wrapper',
              func: zi
            }
          ],
          me.prototype.clone = function () {
            var e = new me(this.__wrapped__);
            return e.__actions__ = ot(this.__actions__),
            e.__dir__ = this.__dir__,
            e.__filtered__ = this.__filtered__,
            e.__iteratees__ = ot(this.__iteratees__),
            e.__takeCount__ = this.__takeCount__,
            e.__views__ = ot(this.__views__),
            e
          },
          me.prototype.reverse = function () {
            var e;
            return this.__filtered__ ? ((e = new me(this)).__dir__ = - 1, e.__filtered__ = !0) : (e = this.clone()).__dir__ *= - 1,
            e
          },
          me.prototype.value = function () {
            var e = this.__wrapped__.value(),
            n = this.__dir__,
            t = Ao(e),
            r = n < 0,
            o = t ? e.length : 0,
            i = function (e, n, t) {
              var r = - 1,
              o = t.length;
              for (; ++r < o; ) {
                var i = t[r],
                a = i.size;
                switch (i.type) {
                  case 'drop':
                    e += a;
                    break;
                  case 'dropRight':
                    n -= a;
                    break;
                  case 'take':
                    n = G(n, e + a);
                    break;
                  case 'takeRight':
                    e = H(e, n - a)
                }
              }
              return {
                start: e,
                end: n
              }
            }(0, o, this.__views__),
            a = i.start,
            u = (i = i.end) - a,
            c = r ? i : a - 1,
            l = this.__iteratees__,
            s = l.length,
            f = 0,
            h = G(u, this.__takeCount__);
            if (!t || !r && o == u && h == u) return Vn(e, this.__actions__);
            var d = [];
            e: for (; u-- && f < h; ) {
              for (var p = - 1, v = e[c += n]; ++p < s; ) {
                var g = l[p],
                y = g.iteratee,
                g = g.type,
                y = y(v);
                if (2 == g) v = y;
                 else if (!y) {
                  if (1 == g) continue e;
                  break e
                }
              }
              d[f++] = v
            }
            return d
          },
          de.prototype.at = Gr,
          de.prototype.chain = function () {
            return qr(this)
          },
          de.prototype.commit = function () {
            return new ye(this.value(), this.__chain__)
          },
          de.prototype.next = function () {
            this.__values__ === zi &&
            (this.__values__ = Ho(this.value()));
            var e = this.__index__ >= this.__values__.length;
            return {
              done: e,
              value: e ? zi : this.__values__[this.__index__++]
            }
          },
          de.prototype.plant = function (e) {
            for (var n, t = this; t instanceof ge; ) {
              var r = yr(t);
              r.__index__ = 0,
              r.__values__ = zi,
              n ? o.__wrapped__ = r : n = r;
              var o = r,
              t = t.__wrapped__
            }
            return o.__wrapped__ = e,
            n
          },
          de.prototype.reverse = function () {
            var e = this.__wrapped__;
            if (e instanceof me) {
              e = e;
              return this.__actions__.length &&
              (e = new me(this)),
              (e = e.reverse()).__actions__.push({
                func: Hr,
                args: [
                  Pr
                ],
                thisArg: zi
              }),
              new ye(e, this.__chain__)
            }
            return this.thru(Pr)
          },
          de.prototype.toJSON = de.prototype.valueOf = de.prototype.value = function () {
            return Vn(this.__wrapped__, this.__actions__)
          },
          de.prototype.first = de.prototype.head,
          P &&
          (de.prototype[P] = function () {
            return this
          }),
          de
        }();
        yu._ = hc,
        (R = function () {
          return hc
        }.call(U, P, U, I)) === zi ||
        (I.exports = R)
      }.call(this)
    }
  },
  r = {};
  function Re(e) {
    var n = r[e];
    if (void 0 !== n) return n.exports;
    n = r[e] = {
      id: e,
      loaded: !1,
      exports: {
      }
    };
    return t[e].call(n.exports, n, n.exports, Re),
    n.loaded = !0,
    n.exports
  }
  Re.n = function (e) {
    var n = e &&
    e.__esModule ? function () {
      return e.default
    }
     : function () {
      return e
    };
    return Re.d(n, {
      a: n
    }),
    n
  },
  Re.d = function (e, n) {
    for (var t in n) Re.o(n, t) &&
    !Re.o(e, t) &&
    Object.defineProperty(e, t, {
      enumerable: !0,
      get: n[t]
    })
  },
  Re.g = function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this ||
      new Function('return this') ()
    } catch (e) {
      if ('object' == typeof window) return window
    }
  }(),
  Re.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n)
  },
  Re.nmd = function (e) {
    return e.paths = [],
    e.children ||
    (e.children = []),
    e
  },
  function () {
    'use strict';
    var ze = React,
    Ve = Re.n(ze),
    n = ReactDOM,
    qe = CoreUtilities,
    He = Roblox,
    Ge = HeaderScripts,
    e = ReactUtilities,
    Ke = ReactStyleGuide,
    $e = CoreRobloxUtilities,
    f = {
      ActionSwitch: 'Action.Switch',
      ActionAdd: 'Action.Add',
      ActionAddAccount: 'Action.AddAccount',
      ActionLogOutAllAccounts: 'Action.LogoutAllAccounts',
      HeadingSwitchAccount: 'Heading.SwitchAccount',
      LabelAddAccountWithoutLoggingOut: 'Label.AddAccountWithoutLoggingOut',
      LabelAddOrSwitchAccount: 'Label.AddOrSwitchAccount',
      DescriptionAccountLimit: 'Description.AccountLimit'
    },
    h = {
      HeadingAccountLimitReached: 'Heading.AccountLimitReached',
      LabelAccountLimitReached: 'Label.AccountLimitReached',
      ActionOK: 'Action.OK'
    },
    Qe = {
      LogoutAll: 'logoutAll',
      LoginAccountLimit: 'loginAccountLimit',
      SignupAccountLimit: 'signupAccountLimit',
      UnavailableError: 'unavailableError',
      SwitchError: 'switchError',
      LoginEmptyBlobRequiredError: 'loginEmptyBlobRequiredError',
      SignupEmptyBlobRequiredError: 'signupEmptyBlobRequiredError',
      LoginVpcEmptyBlobRequiredError: 'loginVpcEmptyBlobRequiredError',
      SignupVpcEmptyBlobRequiredError: 'signupVpcEmptyBlobRequiredError'
    },
    Ye = 'Header.LogOutOfOtherAccounts',
    Ze = 'Action.Logout',
    Je = 'Action.Cancel',
    Xe = 'Description.LogoutConfirmation',
    en = 'Description.ParentLogoutConfirmation',
    t = {
      loginLink: He.EnvironmentUrls.websiteUrl + '/login'
    },
    r = 'RBXASBlob';
    function u() {
      return i(
        void 0,
        void 0,
        Promise,
        function () {
          var n;
          return a(
            this,
            function (e) {
              switch (e.label) {
                case 0:
                  return n = He.EnvironmentUrls.apiGatewayUrl + '/hba-service/v1/getServerNonce',
                  n = {
                    url: n,
                    withCredentials: !0
                  },
                  [
                    4,
                    qe.httpService.get(n)
                  ];
                case 1:
                  return [2,
                  e.sent().data]
              }
            }
          )
        }
      )
    }
    function o(e) {
      void 0 === e &&
      (e = {
        baseUrl: ''
      }),
      this.configuration = e,
      this.baseUrl = this.configuration.baseUrl
    }(B = T = T || {
    }) [B.AccountSwitcherModalType = 0] = 'AccountSwitcherModalType',
    B[B.LogoutAllAccountsModalType = 1] = 'LogoutAllAccountsModalType',
    B[B.LoginConfirmationForLogoutAllAccountsModalType = 2] = 'LoginConfirmationForLogoutAllAccountsModalType',
    B[B.SignupConfirmationForLogoutAllAccountsModalType = 3] = 'SignupConfirmationForLogoutAllAccountsModalType';
    var i = function (e, a, u, c) {
      return new (u = u || Promise) (
        function (t, n) {
          function r(e) {
            try {
              i(c.next(e))
            } catch (e) {
              n(e)
            }
          }
          function o(e) {
            try {
              i(c.throw(e))
            } catch (e) {
              n(e)
            }
          }
          function i(e) {
            var n;
            e.done ? t(e.value) : ((n = e.value) instanceof u ? n : new u(function (e) {
              e(n)
            })).then(r, o)
          }
          i((c = c.apply(e, a || [])).next())
        }
      )
    },
    a = function (t, r) {
      var o,
      i,
      a,
      u = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      },
      e = {
        next: n(0),
        throw : n(1),
        return : n(2)
      };
      return 'function' == typeof Symbol &&
      (e[Symbol.iterator] = function () {
        return this
      }),
      e;
      function n(n) {
        return function (e) {
          return function (n) {
            if (o) throw new TypeError('Generator is already executing.');
            for (; u; ) try {
              if (
                o = 1,
                i &&
                (
                  a = 2 & n[0] ? i.return : n[0] ? i.throw ||
                  ((a = i.return) && a.call(i), 0) : i.next
                ) &&
                !(a = a.call(i, n[1])).done
              ) return a;
              switch (i = 0, a && (n = [
                  2 & n[0],
                  a.value
                ]), n[0]) {
                case 0:
                case 1:
                  a = n;
                  break;
                case 4:
                  return u.label++,
                  {
                    value: n[1],
                    done: !1
                  };
                case 5:
                  u.label++,
                  i = n[1],
                  n = [
                    0
                  ];
                  continue;
                case 7:
                  n = u.ops.pop(),
                  u.trys.pop();
                  continue;
                default:
                  if (
                    !(a = 0 < (a = u.trys).length && a[a.length - 1]) &&
                    (6 === n[0] || 2 === n[0])
                  ) {
                    u = 0;
                    continue
                  }
                  if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                    u.label = n[1];
                    break
                  }
                  if (6 === n[0] && u.label < a[1]) {
                    u.label = a[1],
                    a = n;
                    break
                  }
                  if (a && u.label < a[2]) {
                    u.label = a[2],
                    u.ops.push(n);
                    break
                  }
                  a[2] &&
                  u.ops.pop(),
                  u.trys.pop();
                  continue
              }
              n = r.call(t, u)
            } catch (e) {
              n = [
                6,
                e
              ],
              i = 0
            } finally {
              o = a = 0
            }
            if (5 & n[0]) throw n[1];
            return {
              value: n[0] ? n[1] : void 0,
              done: !0
            }
          }([n,
          e])
        }
      }
    },
    c = (
      l.prototype.sendEvent = function (e) {
        var n = e.localTime,
        t = e.target,
        r = e.eventType,
        o = e.context,
        i = e.additionalProperties,
        a = e.currentUrl,
        u = e.guestId,
        e = e.sessionId,
        n = n.toISOString(),
        c = new URL(''.concat(this.baseUrl, '/pe'));
        return c.searchParams.append('t', t),
        c.searchParams.append('evt', r),
        c.searchParams.append('ctx', o),
        c.searchParams.append('lt', n),
        c.searchParams.append('url', a || window.location.href),
        void 0 !== u &&
        c.searchParams.append('gid', u),
        void 0 !== e &&
        c.searchParams.append('sid', e),
        void 0 !== i &&
        Object.keys(i).forEach(
          function (e) {
            c.searchParams.append(e, (null !== (e = i[e]) && void 0 !== e ? e : '').toString())
          }
        ),
        fetch(c.href, {
          credentials: 'same-origin'
        })
      },
      l.prototype.sendEventViaImg = function (e, n) {
        var t = e.localTime,
        r = e.target,
        o = e.eventType,
        i = e.context,
        a = e.additionalProperties,
        u = e.currentUrl,
        c = e.guestId,
        e = e.sessionId,
        t = t.toISOString(),
        l = new URL(''.concat(this.baseUrl, '/e.png'));
        l.searchParams.append('t', r),
        l.searchParams.append('evt', o),
        l.searchParams.append('ctx', i),
        l.searchParams.append('lt', t),
        l.searchParams.append('url', u || window.location.href),
        void 0 !== c &&
        l.searchParams.append('gid', c),
        void 0 !== e &&
        l.searchParams.append('sid', e),
        void 0 !== a &&
        Object.keys(a).forEach(
          function (e) {
            l.searchParams.append(e, (null !== (e = a[e]) && void 0 !== e ? e : '').toString())
          }
        );
        e = new Image;
        return e.src = l.href,
        e.onload = function () {
          void 0 !== n &&
          n(!0)
        },
        e.onerror = function (e) {
          void 0 !== n &&
          n(!1),
          console.error(e)
        },
        e
      },
      l
    );
    function l(e) {
      void 0 === e &&
      (e = new o),
      this.configuration = e,
      this.baseUrl = e.baseUrl
    }
    function s() {
      $e.eventStreamService.sendEventWithTarget(rn.eventName.saiCreated, rn.context.hba, {
      })
    }
    function d(e) {
      $e.eventStreamService.sendEventWithTarget(
        rn.eventName.saiMissing,
        rn.context.hba,
        {
          messageRaw: e.message
        }
      )
    }
    function p(e) {
      return function (n) {
        if (
          'object' == typeof (e = n) &&
          null !== e &&
          'message' in e &&
          'string' == typeof e.message
        ) return n;
        var e;
        try {
          return new Error(JSON.stringify(n))
        } catch (e) {
          return new Error(String(n))
        }
      }(e).message
    }
    function v(n) {
      return g(
        void 0,
        void 0,
        Promise,
        function () {
          return y(
            this,
            function (e) {
              switch (e.label) {
                case 0:
                  return m &&
                  b &&
                  w ? [
                    4,
                    S.putCryptoKeyPair(m, b, w, n).catch(function (e) {
                      console.error('putting cryptoKeyPair error')
                    })
                  ] : [
                    3,
                    2
                  ];
                case 1:
                  e.sent(),
                  e.label = 2;
                case 2:
                  return [2]
              }
            }
          )
        }
      )
    }
    function nn(a) {
      return _(
        void 0,
        void 0,
        Promise,
        function () {
          var n,
          t,
          r,
          o,
          i;
          return A(
            this,
            function (e) {
              switch (e.label) {
                case 0:
                  if (!L || He.DeviceMeta && (0, He.DeviceMeta) ().isInApp) return d({
                    message: 'FeatureDisabled'
                  }),
                  [
                    2,
                    {
                      authParams: a
                    }
                  ];
                  e.label = 1;
                case 1:
                  return e.trys.push([1,
                  14,
                  ,
                  15]),
                  [
                    4,
                    u()
                  ];
                case 2:
                  if (!(n = e.sent())) return console.warn('No hba server nonce available.'),
                  d({
                    message: 'NonceUnavailable'
                  }),
                  [
                    2,
                    {
                      authParams: a
                    }
                  ];
                  if (i = {}, !(E && x && C)) return [3,
                  6];
                  e.label = 3;
                case 3:
                  return e.trys.push([3,
                  5,
                  ,
                  6]),
                  [
                    4,
                    k.getCryptoKeyPair(E, x, C)
                  ];
                case 4:
                  return i = e.sent(),
                  [
                    3,
                    6
                  ];
                case 5:
                  return e.sent(),
                  i = {},
                  [
                    3,
                    6
                  ];
                case 6:
                  return i &&
                  0 !== Object.keys(i).length ? [
                    3,
                    11
                  ] : [
                    4,
                    $e.cryptoUtil.generateSigningKeyPairUnextractable()
                  ];
                case 7:
                  return i = e.sent(),
                  [
                    4,
                    k.deleteCryptoDB()
                  ];
                case 8:
                  return e.sent(),
                  [
                    4,
                    v(i)
                  ];
                case 9:
                  return e.sent(),
                  [
                    4,
                    k.getCryptoKeyPair(E, x, C)
                  ];
                case 10:
                  i = e.sent(),
                  e.label = 11;
                case 11:
                  return [4,
                  $e.cryptoUtil.exportPublicKeyAsSpki(i.publicKey)];
                case 12:
                  return t = e.sent(),
                  r = Math.floor(Date.now() / 1000),
                  o = [
                    t,
                    r,
                    n
                  ].join('|'),
                  [
                    4,
                    $e.cryptoUtil.sign(i.privateKey, o)
                  ];
                case 13:
                  return o = e.sent(),
                  o = {
                    clientPublicKey: t,
                    clientEpochTimestamp: r,
                    serverNonce: n,
                    saiSignature: o
                  },
                  a.secureAuthenticationIntent = o,
                  s(),
                  [
                    2,
                    {
                      authParams: a,
                      clientKeyPair: i
                    }
                  ];
                case 14:
                  return i = e.sent(),
                  d({
                    message: p(i)
                  }),
                  [
                    2,
                    {
                      authParams: a
                    }
                  ];
                case 15:
                  return [2]
              }
            }
          )
        }
      )
    }
    var tn,
    rn = {
      schematizedEventTypes: {
        authFormInteraction: 'authFormInteraction',
        authButtonClick: 'authButtonClick',
        authMsgShown: 'authMsgShown',
        authPageLoad: 'authPageload',
        authModalShown: 'authModalShown',
        authClientError: 'authClientError',
        usernameSuggestionShown: 'usernameSuggestionShown'
      },
      eventName: {
        loginOtherDevice: 'loginOtherDevice',
        formValidation: 'formValidation',
        authPageLoad: 'authPageload',
        authFormInteraction: 'authFormInteraction',
        authButtonClick: 'authButtonClick',
        authModalShown: 'authModalShown',
        saiCreated: 'saiCreated',
        saiMissing: 'saiMissing',
        signupUsernameKeystrokes: 'accountIntegrityKeystrokeEvents',
        qualifiedSignup: 'qualifiedSignup'
      },
      context: {
        loginPage: 'loginPage',
        loginForm: 'LoginForm',
        schematizedLoginForm: 'loginForm',
        landingPage: 'Multiverse',
        ssoLtiInit: 'ssoLtiInit',
        ssoLtiLaunch: 'ssoLtiLaunch',
        ssoError: 'ssoError',
        signupForm: 'MultiverseSignupForm',
        schematizedSignupForm: 'signupForm',
        sendOTP: 'sendOTP',
        schematizedSendOTP: 'sendOtp',
        enterOTP: 'enterOTP',
        schematizedEnterOTP: 'enterOtp',
        validateOTP: 'validateOTP',
        disambiguationOTP: 'disambiguationOTP',
        disambiguationEmail: 'disambiguationEmail',
        disambiguationPhone: 'disambiguationPhone',
        disambigOTP: 'disambigOtp',
        revertAccount: 'revertAccount',
        accountSwitcherConfirmation: 'accountSwitcherConfirmation',
        accountSwitcherModal: 'accountSwitcherModal',
        accountSwitcherLimitError: 'accountSwitcherLimitError',
        accountSwitcherLogin: 'accountSwitcherLogin',
        accountSwitcherSignup: 'accountSwitcherSignup',
        accountSwitcherBackendRequestFailure: 'accountSwitcherBackendRequestFailure',
        accountSwitcherLocalStorageFailure: 'accountSwitcherLocalStorageFailure',
        accountSwitcherVpcLogin: 'accountSwitcherVpcLogin',
        accountSwitcherVpcSignup: 'accountSwitcherVpcSignup',
        passkeyLogin: 'passkeyLogin',
        hba: 'hba'
      },
      verifiedParentalConsentContext: {
        chargeback: {
          finishParentalSignup: 'finishParentalSignup',
          homepage: 'homepage'
        },
        savePaymentMethods: {
          finishParentalSignup: 'finishParentalSignupDevsubs',
          homepage: 'homepageDevsubs'
        },
        changeBirthdayContext: {
          finishParentalSignup: 'finishParentalSignupAgeChange',
          homepage: 'homepageAgeChange'
        }
      },
      aType: {
        buttonClick: 'buttonClick',
        click: 'click',
        offFocus: 'offFocus',
        focus: 'focus',
        shown: 'shown',
        dismissed: 'dismissed'
      },
      field: {
        loginOtherDevice: 'loginOtherDevice',
        loginOTP: 'loginOTP',
        OTP: 'otp',
        loginSubmitButtonName: 'loginSubmit',
        password: 'password',
        username: 'username',
        signupSubmitButtonName: 'signupSubmit',
        appButtonClickName: 'AppLink',
        showPassword: 'showPassword',
        hidePassword: 'hidePassword',
        birthdayDay: 'birthdayDay',
        birthdayMonth: 'birthdayMonth',
        birthdayYear: 'birthdayYear',
        signupUsername: 'signupUsername',
        signupPassword: 'signupPassword',
        signupEmail: 'signupEmail',
        parentEmail: 'parentEmail',
        genderMale: 'genderMale',
        genderFemale: 'genderFemale',
        email: 'email',
        code: 'code',
        otpCode: 'OTPcode',
        errorMessage: 'errorMessage',
        resendErrorMessage: 'resendErrorMessage',
        accountSelection: 'accountSelection',
        checked: 'checked',
        unchecked: 'unchecked',
        usernameValid: 'usernameValid',
        revertAccountSubmitButtonName: 'revertAccountSubmit',
        birthday: 'birthday',
        accountSwitcher: 'accountSwitcher',
        logoutPopup: 'logoutPopup',
        hasAuthIntent: 'hasAuthIntent'
      },
      btn: {
        cancel: 'cancel',
        sendCode: 'sendCode',
        resendCode: 'resendCode',
        resend: 'resend',
        login: 'login',
        logoutAll: 'logoutAll',
        signup: 'signup',
        continue : 'continue',
        changeEmail: 'changeEmail',
        select: 'select',
        parentalConsentCheckbox: 'pc_checkbox',
        termsOfServiceCheckbox: 'tos_checkbox',
        privacyPolicyCheckbox: 'pp_checkbox',
        submitRevertAccount: 'submitRevertAccount',
        dismiss: 'dismiss',
        switch : 'switch',
          addAccount: 'addAccount',
          primaryButton: 'primaryButton',
          secondaryButton: 'secondaryButton',
          usernameSuggestion: 'usernameSuggestion',
          launchSsoDeeplink: 'launchSsoDeeplink',
          koreaConsentAllCheckbox: 'koreaConsentAll',
          koreaTosAndPrivacyPolicyCheckbox: 'koreaToS1',
          koreaThirdPartyPersonalInfoCheckbox: 'koreaToS2',
          koreaTransferPersonalInfoCheckbox: 'koreaToS3',
          koreaPersonalInfoCheckbox: 'koreaToS4',
          koreaOptionalPersonalInfoCheckbox: 'koreaToS5Optional',
          koreaAgreeTermsOfService: 'koreaAgreeToS',
          logoutPopupLogout: 'logoutPopupLogout'},
          input: {
            redacted: '[Redacted]'
          },
          origin: {
            webVerifiedSignup: 'WebVerifiedSignup',
            signup: 'signup',
            login: 'login'
          },
          text: {
            finishCreatingYourAccount: 'Create Your Roblox Account',
            signup: 'Sign Up',
            createAccount: 'Create Account',
            logout: 'Log Out'
          },
          clientErrorTypes: {
            pageLoadFailed: 'pageLoadFailed',
            userInfoFetchFailed: 'userInfoFetchFailed',
            localStorageSetFailure: 'localStorageSetFailure',
            localStorageGetFailure: 'localStorageGetFailure',
            localStorageRemoveFailure: 'localStorageRemoveFailure',
            logoutAllAccountSwitcherAccounts: 'logoutAllAccountSwitcherAccounts'
          }
        },
        g = (
          new c(
            new o({
              baseUrl: He.EnvironmentUrls.eduWebsiteUrl.replace('www', 'ecsv2') + '/www'
            })
          ),
          function (e, a, u, c) {
            return new (u = u || Promise) (
              function (t, n) {
                function r(e) {
                  try {
                    i(c.next(e))
                  } catch (e) {
                    n(e)
                  }
                }
                function o(e) {
                  try {
                    i(c.throw(e))
                  } catch (e) {
                    n(e)
                  }
                }
                function i(e) {
                  var n;
                  e.done ? t(e.value) : ((n = e.value) instanceof u ? n : new u(function (e) {
                    e(n)
                  })).then(r, o)
                }
                i((c = c.apply(e, a || [])).next())
              }
            )
          }
        ),
        y = function (t, r) {
          var o,
          i,
          a,
          u = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          e = {
            next: n(0),
            throw : n(1),
            return : n(2)
          };
          return 'function' == typeof Symbol &&
          (e[Symbol.iterator] = function () {
            return this
          }),
          e;
          function n(n) {
            return function (e) {
              return function (n) {
                if (o) throw new TypeError('Generator is already executing.');
                for (; u; ) try {
                  if (
                    o = 1,
                    i &&
                    (
                      a = 2 & n[0] ? i.return : n[0] ? i.throw ||
                      ((a = i.return) && a.call(i), 0) : i.next
                    ) &&
                    !(a = a.call(i, n[1])).done
                  ) return a;
                  switch (i = 0, a && (n = [
                      2 & n[0],
                      a.value
                    ]), n[0]) {
                    case 0:
                    case 1:
                      a = n;
                      break;
                    case 4:
                      return u.label++,
                      {
                        value: n[1],
                        done: !1
                      };
                    case 5:
                      u.label++,
                      i = n[1],
                      n = [
                        0
                      ];
                      continue;
                    case 7:
                      n = u.ops.pop(),
                      u.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = u.trys).length && a[a.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        u = 0;
                        continue
                      }
                      if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                        u.label = n[1];
                        break
                      }
                      if (6 === n[0] && u.label < a[1]) {
                        u.label = a[1],
                        a = n;
                        break
                      }
                      if (a && u.label < a[2]) {
                        u.label = a[2],
                        u.ops.push(n);
                        break
                      }
                      a[2] &&
                      u.ops.pop(),
                      u.trys.pop();
                      continue
                  }
                  n = r.call(t, u)
                } catch (e) {
                  n = [
                    6,
                    e
                  ],
                  i = 0
                } finally {
                  o = a = 0
                }
                if (5 & n[0]) throw n[1];
                return {
                  value: n[0] ? n[1] : void 0,
                  done: !0
                }
              }([n,
              e])
            }
          }
        },
        m = (B = (0, $e.cryptoUtil.getHbaMeta) ()).hbaIndexedDBName,
        b = B.hbaIndexedDBObjStoreName,
        w = B.hbaIndexedDBKeyName,
        S = $e.dataStores.hbacIndexedDB,
        _ = function (e, a, u, c) {
          return new (u = u || Promise) (
            function (t, n) {
              function r(e) {
                try {
                  i(c.next(e))
                } catch (e) {
                  n(e)
                }
              }
              function o(e) {
                try {
                  i(c.throw(e))
                } catch (e) {
                  n(e)
                }
              }
              function i(e) {
                var n;
                e.done ? t(e.value) : ((n = e.value) instanceof u ? n : new u(function (e) {
                  e(n)
                })).then(r, o)
              }
              i((c = c.apply(e, a || [])).next())
            }
          )
        },
        A = function (t, r) {
          var o,
          i,
          a,
          u = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          e = {
            next: n(0),
            throw : n(1),
            return : n(2)
          };
          return 'function' == typeof Symbol &&
          (e[Symbol.iterator] = function () {
            return this
          }),
          e;
          function n(n) {
            return function (e) {
              return function (n) {
                if (o) throw new TypeError('Generator is already executing.');
                for (; u; ) try {
                  if (
                    o = 1,
                    i &&
                    (
                      a = 2 & n[0] ? i.return : n[0] ? i.throw ||
                      ((a = i.return) && a.call(i), 0) : i.next
                    ) &&
                    !(a = a.call(i, n[1])).done
                  ) return a;
                  switch (i = 0, a && (n = [
                      2 & n[0],
                      a.value
                    ]), n[0]) {
                    case 0:
                    case 1:
                      a = n;
                      break;
                    case 4:
                      return u.label++,
                      {
                        value: n[1],
                        done: !1
                      };
                    case 5:
                      u.label++,
                      i = n[1],
                      n = [
                        0
                      ];
                      continue;
                    case 7:
                      n = u.ops.pop(),
                      u.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = u.trys).length && a[a.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        u = 0;
                        continue
                      }
                      if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                        u.label = n[1];
                        break
                      }
                      if (6 === n[0] && u.label < a[1]) {
                        u.label = a[1],
                        a = n;
                        break
                      }
                      if (a && u.label < a[2]) {
                        u.label = a[2],
                        u.ops.push(n);
                        break
                      }
                      a[2] &&
                      u.ops.pop(),
                      u.trys.pop();
                      continue
                  }
                  n = r.call(t, u)
                } catch (e) {
                  n = [
                    6,
                    e
                  ],
                  i = 0
                } finally {
                  o = a = 0
                }
                if (5 & n[0]) throw n[1];
                return {
                  value: n[0] ? n[1] : void 0,
                  done: !0
                }
              }([n,
              e])
            }
          }
        },
        E = (t = (0, $e.cryptoUtil.getHbaMeta) ()).hbaIndexedDBName,
        x = t.hbaIndexedDBObjStoreName,
        C = t.hbaIndexedDBKeyName,
        L = t.isSecureAuthenticationIntentEnabled,
        k = $e.dataStores.hbacIndexedDB,
        on = {
          ActionSignUpCapitalized: 'Action.SignUpCapitalized',
          ActionLogInCapitalized: 'Action.LogInCapitalized',
          ActionDeviceCode: 'Action.DeviceCode',
          ActionResendEmail: 'Action.ResendEmail',
          ActionSendVerificationEmail: 'Action.SendVerificationEmail',
          ActionOk: 'Action.Ok',
          ActionAnotherLoggedInDevice: 'Action.AnotherLoggedInDevice',
          ActionForgotPasswordOrUsernameQuestionCapitalized: 'Action.ForgotPasswordOrUsernameQuestionCapitalized',
          ActionLogInEmailOneTimeCode: 'Action.LogInEmailOneTimeCode',
          ActionLogInWithOneTimeCode: 'Action.LogInWithOneTimeCode',
          ActionLogInAnotherDevice: 'Action.LogInAnotherDevice',
          ActionNeedHelp: 'Action.NeedHelp',
          ActionUseAnotherDevice: 'Action.UseAnotherDevice',
          ActionCreateANewAccount: 'Action.CreateANewAccount',
          ActionAddAccount: 'Action.AddAccount',
          DescriptionCurfewMessage: 'Description.CurfewMessage',
          DescriptionAccountSelectorHelp: 'Description.AccountSelectorHelp',
          DescriptionEnterOneTimeCodeHelp: 'Description.EnterOneTimeCodeHelp',
          DescriptionGetOneTimeCodeHelp: 'Description.GetOneTimeCodeHelp',
          DescriptionAccountSelectorOtpTimeWarning: 'Description.AccountSelectorOtpTimeWarning',
          DescriptionLogBackIn: 'Description.LogBackIn',
          DescriptionLogoutFirst: 'Description.LogoutFirst',
          HeadingLoginRoblox: 'Heading.LoginRoblox',
          HeadingLoginRobloxAccountSwitching: 'Heading.LoginRobloxAccountSwitching',
          HeadingContinueToEnjoyRoblox: 'Heading.ContinueToEnjoyRoblox',
          HeadingLoginRequired: 'Heading.LoginRequired',
          HeadingYouHaveLoggedOut: 'Heading.YouHaveLoggedOut',
          HeadingAddAccount: 'Heading.AddAccount',
          LabelEnterOneTimeCode: 'Label.EnterOneTimeCode',
          LabelGetOneTimeCode: 'Label.GetOneTimeCode',
          LabelNoAccount: 'Label.NoAccount',
          LabelPassword: 'Label.Password',
          LabelUsername: 'Label.Username',
          LabelUsernameEmailPhone: 'Label.UsernameEmailPhone',
          LabelLoginWithYour: 'Label.LoginWithYour',
          LabelUnverifiedEmailInstructions: 'Label.UnverifiedEmailInstructions',
          LabelNotReceived: 'Label.NotReceived',
          LabelVerificationEmailSent: 'Label.VerificationEmailSent',
          LabelEmailNeedsVerification: 'Label.EmailNeedsVerification',
          LabelAccountSelector: 'Label.AccountSelectorTitle',
          LabelLoginSwitchAccounts: 'Label.LoginSwitchAccounts',
          LabelChooseAccountToUse: 'Label.ChooseAccountToUse',
          MessageUnknownErrorTryAgain: 'Message.UnknownErrorTryAgain',
          MessageUsernameAndPasswordRequired: 'Message.UsernameAndPasswordRequired',
          ResponseAccountNotFound: 'Response.AccountNotFound',
          ResponseAccountIssueErrorContactSupport: 'Response.AccountIssueErrorContactSupport',
          ResponseTooManyAttemptsPleaseWait: 'Response.TooManyAttemptsPleaseWait',
          ResponseCaptchaErrorFailedToLoad: 'Response.CaptchaErrorFailedToLoad',
          ResponseCaptchaErrorFailedToVerify: 'Response.CaptchaErrorFailedToVerify',
          ResponseGlobalAppAccessError: 'Response.GlobalAppAccessError',
          ResponseIncorrectCredentials: 'Response.IncorrectCredentialsForgotPasswordMessage',
          ResponseIncorrectEmailOrPassword: 'Response.IncorrectEmailOrPassword',
          ResponseIncorrectPhoneOrPassword: 'Response.IncorrectPhoneOrPassword',
          ResponseIncorrectUsernamePassword: 'Response.IncorrectUsernamePassword',
          ResponseEmailLinkedToMultipleAccountsLoginWithUsername: 'Response.EmailLinkedToMultipleAccountsLoginWithUsername',
          ResponseLoginWithUsername: 'Response.LoginWithUsername',
          ResponseUnverifiedEmailLoginWithUsername: 'Response.UnverifiedEmailLoginWithUsername',
          ResponseUnverifiedPhoneLoginWithUsername: 'Response.UnverifiedPhoneLoginWithUsername',
          ResponseVerificationError: 'Response.VerificationError',
          ResponseOtpUnder13NotAllowed: 'Response.OtpUnder13NotAllowed',
          ResponseLoginBlocked: 'Response.LoginBlocked',
          ResponseInvalidPasskeyCredential: 'Response.InvalidPasskeyCredential'
        },
        T = He.Endpoints.getAbsoluteUrl,
        an = {
          securityNotification: He.EnvironmentUrls.websiteUrl + '/login/securityNotification',
          koreaIdVerification: He.EnvironmentUrls.websiteUrl + '/id-verification/korea/login',
          forgotCredentialsUrl: He.EnvironmentUrls.websiteUrl + '/login/forgot-password-or-username'
        },
        I = 'WebsiteLogin_',
        U = 'react-2sv-container',
        un = 'react-captcha-container',
        P = 'react-security-questions-container',
        cn = 'react-account-selector-container',
        ln = 'otp-login-container',
        sn = 'react-login-account-switcher-container',
        fn = 'react-login-account-limit-error-container',
        hn = 'account-switcher-confirmation-modal-container',
        dn = 1,
        pn = 2,
        vn = 3,
        gn = 4,
        yn = 6,
        mn = 7,
        bn = 9,
        wn = 10,
        Sn = 11,
        _n = 12,
        An = 13,
        En = 14,
        xn = 16,
        Cn = 18,
        Ln = 20,
        kn = 22,
        R = 23,
        Tn = 24,
        In = 25,
        Un = 26,
        Pn = 3,
        Rn = 'FirstAttempt',
        On = 'Attempt',
        Bn = 'SuccessWithSAI',
        Dn = 'SuccessWithGameIntent',
        jn = 'Success',
        Fn = 'Captcha',
        Mn = 'PasswordResetRequired',
        Nn = 'UnverifiedAccount',
        Wn = 'InvalidCredentials',
        zn = 'AccountNotFound',
        Vn = 'AccountIssue',
        qn = 'TooManyAttempts',
        Hn = 'DefaultLoginRequired',
        Gn = 'CaptchaLoadFailed',
        Kn = 'CaptchaVerifyFailed',
        $n = 'CaptchaUnknownError',
        Qn = 'LuoBuUserDenied',
        Yn = 'ScreenTimeRestricted',
        Zn = 'UnknownError',
        Jn = 'SecurityQuestionRequired',
        O = T('/CreateAccount'),
        c = {
          common: [
            'Common.Captcha'
          ],
          feature: 'Authentication.Login'
        },
        B = {
          common: [],
          feature: 'Feature.IdVerification'
        },
        t = {
          common: [
            'CommonUI.Controls'
          ],
          feature: 'Authentication.AccountSwitch'
        };
        function Xn(r) {
          return q(
            void 0,
            void 0,
            Promise,
            function () {
              var n,
              t;
              return H(
                this,
                function (e) {
                  switch (e.label) {
                    case 0:
                      return n = He.EnvironmentUrls.apiGatewayUrl + '/otp-service/v1/metadata',
                      t = {
                        Origin: r
                      },
                      t = n + '?' + qe.urlService.composeQueryString(t),
                      t = {
                        url: t,
                        withCredentials: !0
                      },
                      [
                        4,
                        qe.httpService.get(t)
                      ];
                    case 1:
                      return [2,
                      e.sent().data]
                  }
                }
              )
            }
          )
        }
        function et() {
          return Q(
            void 0,
            void 0,
            Promise,
            function () {
              var t;
              return Y(
                this,
                function (e) {
                  switch (e.label) {
                    case 0:
                      return n = $,
                      t = He.EnvironmentUrls.authApi + n,
                      t = {
                        url: t
                      },
                      [
                        4,
                        qe.httpService.post(t)
                      ];
                    case 1:
                      return [2,
                      e.sent().data]
                  }
                  var n
                }
              )
            }
          )
        }
        function nt() {
          var e = document.querySelector('meta[name="passkey-data"]');
          return 'true' === ((null == e ? void 0 : e.dataset) || {
          }).isPasskeyLoginEnabled
        }
        function tt(e) {
          return He.EnvironmentUrls.authApi + e
        }
        function D(e) {
          $e.eventStreamService.sendEventWithTarget(
            dt.formInteraction,
            rn.context.loginForm,
            {
              field: e.field,
              aType: e.aType
            }
          )
        }
        function j() {
          D({
            field: rn.field.username,
            aType: rn.aType.focus
          })
        }
        function F() {
          D({
            field: rn.field.username,
            aType: rn.aType.offFocus
          })
        }
        function M() {
          D({
            field: rn.field.password,
            aType: rn.aType.focus
          })
        }
        function N() {
          D({
            field: rn.field.password,
            aType: rn.aType.offFocus
          })
        }
        function rt() {
          $e.eventStreamService.sendEventWithTarget(
            rn.schematizedEventTypes.authButtonClick,
            rn.context.loginPage,
            {
              btn: rn.btn.logoutAll,
              origin: rn.origin.login
            }
          )
        }
        function ot(e) {
          $e.eventStreamService.sendEventWithTarget(
            rn.schematizedEventTypes.authPageLoad,
            rn.context.passkeyLogin,
            {
              state: String(e)
            }
          )
        }
        function it(e) {
          window.location.href = e
        }
        function at() {
          window.location.href = qe.urlService.getAbsoluteUrl('/home')
        }
        function W(e) {
          return He.EnvironmentUrls.apiGatewayUrl + e
        }
        function ut(t) {
          return X(
            void 0,
            void 0,
            Promise,
            function () {
              var n;
              return ee(
                this,
                function (e) {
                  switch (e.label) {
                    case 0:
                      return n = W('/account-switcher/v1/logoutAllLoggedInUsers'),
                      n = {
                        url: n,
                        withCredentials: !0
                      },
                      [
                        4,
                        qe.httpService.post(n, t)
                      ];
                    case 1:
                      return e.sent(),
                      [
                        2
                      ]
                  }
                }
              )
            }
          )
        }
        function ct(e, n) {
          $e.eventStreamService.sendEventWithTarget(rn.schematizedEventTypes.authClientError, e, {
            state: n
          })
        }
        function z() {
          var e = document.querySelector('meta[name="account-switching-data"]');
          return 'true' === ((null == e ? void 0 : e.dataset) || {
          }).isAccountSwitchingEnabled
        }
        function lt() {
          if (!z()) return '';
          try {
            return $e.localStorageService.getLocalStorage(r)
          } catch (e) {
            return console.warn(e),
            ct(
              rn.context.accountSwitcherLocalStorageFailure,
              rn.clientErrorTypes.localStorageGetFailure
            ),
            ''
          }
        }
        function st() {
          try {
            $e.localStorageService.removeLocalStorage(r)
          } catch (e) {
            console.warn(e),
            ct(
              rn.context.accountSwitcherLocalStorageFailure,
              rn.clientErrorTypes.localStorageRemoveFailure
            )
          }
        }(T = tn = tn || {
        }).Username = 'Username',
        T.Email = 'Email',
        T.PhoneNumber = 'PhoneNumber',
        T.AuthToken = 'AuthToken',
        T.EmailOtpSessionToken = 'EmailOtpSessionToken',
        T.Passkey = 'Passkey',
        (T = {}).Email = 'Email',
        T.Authenticator = 'Authenticator',
        T.RecoveryCode = 'RecoveryCode';
        var V,
        q = function (e, a, u, c) {
          return new (u = u || Promise) (
            function (t, n) {
              function r(e) {
                try {
                  i(c.next(e))
                } catch (e) {
                  n(e)
                }
              }
              function o(e) {
                try {
                  i(c.throw(e))
                } catch (e) {
                  n(e)
                }
              }
              function i(e) {
                var n;
                e.done ? t(e.value) : ((n = e.value) instanceof u ? n : new u(function (e) {
                  e(n)
                })).then(r, o)
              }
              i((c = c.apply(e, a || [])).next())
            }
          )
        },
        H = function (t, r) {
          var o,
          i,
          a,
          u = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          e = {
            next: n(0),
            throw : n(1),
            return : n(2)
          };
          return 'function' == typeof Symbol &&
          (e[Symbol.iterator] = function () {
            return this
          }),
          e;
          function n(n) {
            return function (e) {
              return function (n) {
                if (o) throw new TypeError('Generator is already executing.');
                for (; u; ) try {
                  if (
                    o = 1,
                    i &&
                    (
                      a = 2 & n[0] ? i.return : n[0] ? i.throw ||
                      ((a = i.return) && a.call(i), 0) : i.next
                    ) &&
                    !(a = a.call(i, n[1])).done
                  ) return a;
                  switch (i = 0, a && (n = [
                      2 & n[0],
                      a.value
                    ]), n[0]) {
                    case 0:
                    case 1:
                      a = n;
                      break;
                    case 4:
                      return u.label++,
                      {
                        value: n[1],
                        done: !1
                      };
                    case 5:
                      u.label++,
                      i = n[1],
                      n = [
                        0
                      ];
                      continue;
                    case 7:
                      n = u.ops.pop(),
                      u.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = u.trys).length && a[a.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        u = 0;
                        continue
                      }
                      if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                        u.label = n[1];
                        break
                      }
                      if (6 === n[0] && u.label < a[1]) {
                        u.label = a[1],
                        a = n;
                        break
                      }
                      if (a && u.label < a[2]) {
                        u.label = a[2],
                        u.ops.push(n);
                        break
                      }
                      a[2] &&
                      u.ops.pop(),
                      u.trys.pop();
                      continue
                  }
                  n = r.call(t, u)
                } catch (e) {
                  n = [
                    6,
                    e
                  ],
                  i = 0
                } finally {
                  o = a = 0
                }
                if (5 & n[0]) throw n[1];
                return {
                  value: n[0] ? n[1] : void 0,
                  done: !0
                }
              }([n,
              e])
            }
          }
        },
        G = '?',
        K = '&',
        $ = '/v1/passkey/StartAuthentication',
        Q = (
          He.EnvironmentUrls.universalAppConfigurationApi,
          function (e, a, u, c) {
            return new (u = u || Promise) (
              function (t, n) {
                function r(e) {
                  try {
                    i(c.next(e))
                  } catch (e) {
                    n(e)
                  }
                }
                function o(e) {
                  try {
                    i(c.throw(e))
                  } catch (e) {
                    n(e)
                  }
                }
                function i(e) {
                  var n;
                  e.done ? t(e.value) : ((n = e.value) instanceof u ? n : new u(function (e) {
                    e(n)
                  })).then(r, o)
                }
                i((c = c.apply(e, a || [])).next())
              }
            )
          }
        ),
        Y = function (t, r) {
          var o,
          i,
          a,
          u = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          e = {
            next: n(0),
            throw : n(1),
            return : n(2)
          };
          return 'function' == typeof Symbol &&
          (e[Symbol.iterator] = function () {
            return this
          }),
          e;
          function n(n) {
            return function (e) {
              return function (n) {
                if (o) throw new TypeError('Generator is already executing.');
                for (; u; ) try {
                  if (
                    o = 1,
                    i &&
                    (
                      a = 2 & n[0] ? i.return : n[0] ? i.throw ||
                      ((a = i.return) && a.call(i), 0) : i.next
                    ) &&
                    !(a = a.call(i, n[1])).done
                  ) return a;
                  switch (i = 0, a && (n = [
                      2 & n[0],
                      a.value
                    ]), n[0]) {
                    case 0:
                    case 1:
                      a = n;
                      break;
                    case 4:
                      return u.label++,
                      {
                        value: n[1],
                        done: !1
                      };
                    case 5:
                      u.label++,
                      i = n[1],
                      n = [
                        0
                      ];
                      continue;
                    case 7:
                      n = u.ops.pop(),
                      u.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = u.trys).length && a[a.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        u = 0;
                        continue
                      }
                      if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                        u.label = n[1];
                        break
                      }
                      if (6 === n[0] && u.label < a[1]) {
                        u.label = a[1],
                        a = n;
                        break
                      }
                      if (a && u.label < a[2]) {
                        u.label = a[2],
                        u.ops.push(n);
                        break
                      }
                      a[2] &&
                      u.ops.pop(),
                      u.trys.pop();
                      continue
                  }
                  n = r.call(t, u)
                } catch (e) {
                  n = [
                    6,
                    e
                  ],
                  i = 0
                } finally {
                  o = a = 0
                }
                if (5 & n[0]) throw n[1];
                return {
                  value: n[0] ? n[1] : void 0,
                  done: !0
                }
              }([n,
              e])
            }
          }
        },
        ft = function (e, a, u, c) {
          return new (u = u || Promise) (
            function (t, n) {
              function r(e) {
                try {
                  i(c.next(e))
                } catch (e) {
                  n(e)
                }
              }
              function o(e) {
                try {
                  i(c.throw(e))
                } catch (e) {
                  n(e)
                }
              }
              function i(e) {
                var n;
                e.done ? t(e.value) : ((n = e.value) instanceof u ? n : new u(function (e) {
                  e(n)
                })).then(r, o)
              }
              i((c = c.apply(e, a || [])).next())
            }
          )
        },
        ht = function (t, r) {
          var o,
          i,
          a,
          u = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          e = {
            next: n(0),
            throw : n(1),
            return : n(2)
          };
          return 'function' == typeof Symbol &&
          (e[Symbol.iterator] = function () {
            return this
          }),
          e;
          function n(n) {
            return function (e) {
              return function (n) {
                if (o) throw new TypeError('Generator is already executing.');
                for (; u; ) try {
                  if (
                    o = 1,
                    i &&
                    (
                      a = 2 & n[0] ? i.return : n[0] ? i.throw ||
                      ((a = i.return) && a.call(i), 0) : i.next
                    ) &&
                    !(a = a.call(i, n[1])).done
                  ) return a;
                  switch (i = 0, a && (n = [
                      2 & n[0],
                      a.value
                    ]), n[0]) {
                    case 0:
                    case 1:
                      a = n;
                      break;
                    case 4:
                      return u.label++,
                      {
                        value: n[1],
                        done: !1
                      };
                    case 5:
                      u.label++,
                      i = n[1],
                      n = [
                        0
                      ];
                      continue;
                    case 7:
                      n = u.ops.pop(),
                      u.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = u.trys).length && a[a.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        u = 0;
                        continue
                      }
                      if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                        u.label = n[1];
                        break
                      }
                      if (6 === n[0] && u.label < a[1]) {
                        u.label = a[1],
                        a = n;
                        break
                      }
                      if (a && u.label < a[2]) {
                        u.label = a[2],
                        u.ops.push(n);
                        break
                      }
                      a[2] &&
                      u.ops.pop(),
                      u.trys.pop();
                      continue
                  }
                  n = r.call(t, u)
                } catch (e) {
                  n = [
                    6,
                    e
                  ],
                  i = 0
                } finally {
                  o = a = 0
                }
                if (5 & n[0]) throw n[1];
                return {
                  value: n[0] ? n[1] : void 0,
                  done: !0
                }
              }([n,
              e])
            }
          }
        },
        dt = $e.eventStreamService.eventTypes,
        Z = function () {
          return document.getElementById('react-login-container')
        },
        J = function () {
          return document.getElementById('react-login-web-app')
        },
        X = function (e, a, u, c) {
          return new (u = u || Promise) (
            function (t, n) {
              function r(e) {
                try {
                  i(c.next(e))
                } catch (e) {
                  n(e)
                }
              }
              function o(e) {
                try {
                  i(c.throw(e))
                } catch (e) {
                  n(e)
                }
              }
              function i(e) {
                var n;
                e.done ? t(e.value) : ((n = e.value) instanceof u ? n : new u(function (e) {
                  e(n)
                })).then(r, o)
              }
              i((c = c.apply(e, a || [])).next())
            }
          )
        },
        ee = function (t, r) {
          var o,
          i,
          a,
          u = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          e = {
            next: n(0),
            throw : n(1),
            return : n(2)
          };
          return 'function' == typeof Symbol &&
          (e[Symbol.iterator] = function () {
            return this
          }),
          e;
          function n(n) {
            return function (e) {
              return function (n) {
                if (o) throw new TypeError('Generator is already executing.');
                for (; u; ) try {
                  if (
                    o = 1,
                    i &&
                    (
                      a = 2 & n[0] ? i.return : n[0] ? i.throw ||
                      ((a = i.return) && a.call(i), 0) : i.next
                    ) &&
                    !(a = a.call(i, n[1])).done
                  ) return a;
                  switch (i = 0, a && (n = [
                      2 & n[0],
                      a.value
                    ]), n[0]) {
                    case 0:
                    case 1:
                      a = n;
                      break;
                    case 4:
                      return u.label++,
                      {
                        value: n[1],
                        done: !1
                      };
                    case 5:
                      u.label++,
                      i = n[1],
                      n = [
                        0
                      ];
                      continue;
                    case 7:
                      n = u.ops.pop(),
                      u.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = u.trys).length && a[a.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        u = 0;
                        continue
                      }
                      if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                        u.label = n[1];
                        break
                      }
                      if (6 === n[0] && u.label < a[1]) {
                        u.label = a[1],
                        a = n;
                        break
                      }
                      if (a && u.label < a[2]) {
                        u.label = a[2],
                        u.ops.push(n);
                        break
                      }
                      a[2] &&
                      u.ops.pop(),
                      u.trys.pop();
                      continue
                  }
                  n = r.call(t, u)
                } catch (e) {
                  n = [
                    6,
                    e
                  ],
                  i = 0
                } finally {
                  o = a = 0
                }
                if (5 & n[0]) throw n[1];
                return {
                  value: n[0] ? n[1] : void 0,
                  done: !0
                }
              }([n,
              e])
            }
          }
        },
        T = Re(5250),
        ne = function (e, a, u, c) {
          return new (u = u || Promise) (
            function (t, n) {
              function r(e) {
                try {
                  i(c.next(e))
                } catch (e) {
                  n(e)
                }
              }
              function o(e) {
                try {
                  i(c.throw(e))
                } catch (e) {
                  n(e)
                }
              }
              function i(e) {
                var n;
                e.done ? t(e.value) : ((n = e.value) instanceof u ? n : new u(function (e) {
                  e(n)
                })).then(r, o)
              }
              i((c = c.apply(e, a || [])).next())
            }
          )
        },
        te = function (t, r) {
          var o,
          i,
          a,
          u = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          e = {
            next: n(0),
            throw : n(1),
            return : n(2)
          };
          return 'function' == typeof Symbol &&
          (e[Symbol.iterator] = function () {
            return this
          }),
          e;
          function n(n) {
            return function (e) {
              return function (n) {
                if (o) throw new TypeError('Generator is already executing.');
                for (; u; ) try {
                  if (
                    o = 1,
                    i &&
                    (
                      a = 2 & n[0] ? i.return : n[0] ? i.throw ||
                      ((a = i.return) && a.call(i), 0) : i.next
                    ) &&
                    !(a = a.call(i, n[1])).done
                  ) return a;
                  switch (i = 0, a && (n = [
                      2 & n[0],
                      a.value
                    ]), n[0]) {
                    case 0:
                    case 1:
                      a = n;
                      break;
                    case 4:
                      return u.label++,
                      {
                        value: n[1],
                        done: !1
                      };
                    case 5:
                      u.label++,
                      i = n[1],
                      n = [
                        0
                      ];
                      continue;
                    case 7:
                      n = u.ops.pop(),
                      u.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = u.trys).length && a[a.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        u = 0;
                        continue
                      }
                      if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                        u.label = n[1];
                        break
                      }
                      if (6 === n[0] && u.label < a[1]) {
                        u.label = a[1],
                        a = n;
                        break
                      }
                      if (a && u.label < a[2]) {
                        u.label = a[2],
                        u.ops.push(n);
                        break
                      }
                      a[2] &&
                      u.ops.pop(),
                      u.trys.pop();
                      continue
                  }
                  n = r.call(t, u)
                } catch (e) {
                  n = [
                    6,
                    e
                  ],
                  i = 0
                } finally {
                  o = a = 0
                }
                if (5 & n[0]) throw n[1];
                return {
                  value: n[0] ? n[1] : void 0,
                  done: !0
                }
              }([n,
              e])
            }
          }
        },
        re = (
          (0, T.memoize) (
            function () {
              return ne(
                void 0,
                void 0,
                Promise,
                function () {
                  var n;
                  return te(
                    this,
                    function (e) {
                      switch (e.label) {
                        case 0:
                          return e.trys.push([0,
                          2,
                          ,
                          3]),
                          [
                            4,
                            null === He.ExperimentationService ||
                            void 0 === He.ExperimentationService ? void 0 : He.ExperimentationService.getAllValuesForLayer('Accounts.AccountSwitcher')
                          ];
                        case 1:
                          return [2,
                          !(null == (n = e.sent()) || !n.isAccountSwitcherEnabled)];
                        case 2:
                          return n = e.sent(),
                          console.info(
                            'Failed to get experiment parameter values for Account Switching',
                            n
                          ),
                          [
                            2,
                            !1
                          ];
                        case 3:
                          return [2]
                      }
                    }
                  )
                }
              )
            }
          ),
          window.EventTracker
        );
        function oe() {
          var e = window.location.hostname;
          return e.includes(V.Sitetest3) ? V.Sitetest3 : e.includes(V.Sitetest2) ? V.Sitetest2 : e.includes(V.Sitetest1) ? V.Sitetest1 : V.Production
        }
        function ie(e) {
          return e.split('.').slice( - 2).join('.')
        }
        function ae(e) {
          switch (He.Endpoints.isAbsolute(e)) {
            case !0:
              var n = new URL(e),
              t = n.hostname,
              r = n.protocol;
              if (ie(window.location.hostname) !== ie(t)) return '/';
              if (
                !function () {
                  switch (oe()) {
                    case V.Sitetest3:
                    case V.Sitetest2:
                    case V.Sitetest1:
                      return ['robloxlabs.com'];
                    case V.Production:
                    default:
                      return ['roblox.com']
                  }
                }().some(function (e) {
                  return e === ie(t)
                }) ||
                ve.some(function (e) {
                  return t.includes(e)
                })
              ) return '/';
              if (!de.some(function (e) {
                return r === e
              })) return '/';
              break;
            case !1:
            default:
              if (e !== decodeURIComponent(e)) return '/'
          }
          return e
        }
        function ue() {
          var e = qe.urlService.parseQueryString() ||
          {
          },
          n = Object.keys(e).find(function (e) {
            return 'returnurl' === e.toLowerCase()
          }),
          t = n ? String(null !== (n = e['' + n]) && void 0 !== n ? n : '') : '';
          if (
            !t ||
            '' === t.trim() ||
            pe.some(function (e) {
              return t.startsWith(e)
            }) ||
            he.some(function (e) {
              return t.includes(e)
            })
          ) return '/';
          if (
            function () {
              var e = oe();
              switch (e) {
                case V.Sitetest3:
                case V.Sitetest2:
                case V.Sitetest1:
                  return ['https://apis.' + e + '.robloxlabs.com/application-authorization/v1/authorize',
                  'https://authorize.' + e + '.robloxlabs.com',
                  'https://www.' + e + '.robloxlabs.com'];
                case V.Production:
                default:
                  return ['https://apis.roblox.com/application-authorization/v1/authorize',
                  'https://authorize.roblox.com',
                  'https://www.roblox.com']
              }
            }().some(function (e) {
              return t.startsWith(e)
            })
          ) return t;
          try {
            return He.Endpoints.getAbsoluteUrl(ae(t))
          } catch (e) {
            return '/'
          }
        }
        function pt(e) {
          re &&
          e &&
          re.fireEvent(I + e)
        }
        function vt(e, n) {
          switch (e) {
            case bn:
            case wn:
            case dn:
              return function (e, n) {
                switch (e) {
                  case dn:
                    return n === tn.Email ? on.ResponseIncorrectEmailOrPassword : n === tn.PhoneNumber ? on.ResponseIncorrectPhoneOrPassword : n === tn.EmailOtpSessionToken ? on.ResponseIncorrectCredentials : n === tn.Passkey ? on.ResponseInvalidPasskeyCredential : on.ResponseIncorrectUsernamePassword;
                  case bn:
                    return n === tn.Email ? on.ResponseEmailLinkedToMultipleAccountsLoginWithUsername : n === tn.PhoneNumber ? on.ResponseLoginWithUsername : '';
                  case wn:
                    return n === tn.Email ? on.ResponseUnverifiedEmailLoginWithUsername : n === tn.PhoneNumber ? on.ResponseUnverifiedPhoneLoginWithUsername : '';
                  default:
                    return ''
                }
              }(e, n);
            case vn:
              return on.ResponseAccountNotFound;
            case yn:
              return on.ResponseAccountIssueErrorContactSupport;
            case mn:
              return on.ResponseTooManyAttemptsPleaseWait;
            case Sn:
              return on.ResponseCaptchaErrorFailedToLoad;
            case _n:
              return on.ResponseCaptchaErrorFailedToVerify;
            case En:
              return on.ResponseGlobalAppAccessError;
            case An:
              return on.MessageUnknownErrorTryAgain;
            case xn:
              return on.DescriptionCurfewMessage;
            case kn:
              return on.ResponseOtpUnder13NotAllowed;
            case R:
              return on.ResponseLoginBlocked;
            default:
              return on.MessageUnknownErrorTryAgain
          }
        }
        function gt(e) {
          return n = e,
          new RegExp('^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$').test(n) ? tn.Email : !(e = e) ||
          e.length < 4 ||
          !/\d/.test(e) ||
          !/^[\d|\W|_]+$/.test(e) ? tn.Username : tn.PhoneNumber;
          var n
        }
        function ce() {
          var e,
          n = Z(),
          t = J();
          return '' + (
            'true' === (
              null === (
                e = null == n ? void 0 : n.getAttribute('data-enable-frontend-return-url')
              ) ||
              void 0 === e ? void 0 : e.toLowerCase()
            ) ||
            t ? ue() : (null == n ? void 0 : n.getAttribute('data-return-url')) ||
            ''
          ) + (null !== (n = window.location.hash) && void 0 !== n ? n : '')
        }
        function yt() {
          var e = function (e) {
            if (!e) return '/';
            var n = e;
            return - 1 < e.indexOf(G) ? n += K : n += G,
            n += 'nl=true'
          }(ce());
          return qe.urlService.getAbsoluteUrl(e)
        }
        function le(e) {
          var n = [];
          return e &&
          'object' == typeof e &&
          (e = e.errors) instanceof Array ? (
            e.forEach(
              function (e) {
                !e ||
                'object' != typeof e ||
                'number' == typeof (e = e.code) &&
                n.push(e)
              }
            ),
            n
          ) : []
        }
        function mt(e) {
          var n = le(e);
          return 'object' == typeof e &&
          le(e.data).forEach(function (e) {
            return n.push(e)
          }),
          n[0] ||
          null
        }
        function bt(e) {
          var n = [];
          return e &&
          'object' == typeof e &&
          (e = e.errors) instanceof Array ? (
            e.forEach(
              function (e) {
                !e ||
                'object' != typeof e ||
                'string' == typeof (e = e.fieldData) &&
                n.push(e)
              }
            ),
            n
          ) : []
        }
        function wt(e) {
          var n = e.containerId,
          t = e.actionType,
          r = e.dataExchange,
          o = e.unifiedCaptchaId,
          i = e.onCaptchaChallengeCompleted,
          a = e.onCaptchaChallengeInvalidated,
          u = e.onCaptchaChallengeAbandoned,
          c = e.onUnknownError,
          l = (e = (0, ze.useState) (null)) [0],
          s = e[1];
          return (0, ze.useEffect) (
            function () {
              var e;
              r &&
              o &&
              (
                e = {
                  dataExchange: r,
                  unifiedCaptchaId: o
                },
                null === l ? (
                  e = {
                    containerId: n,
                    actionType: t,
                    appType: null,
                    dataExchangeBlob: e.dataExchange,
                    unifiedCaptchaId: e.unifiedCaptchaId,
                    onChallengeDisplayed: function (e) {
                      return null
                    },
                    onChallengeCompleted: function (e) {
                      s(null),
                      i(e)
                    },
                    onChallengeInvalidated: function (e) {
                      s(null),
                      a(e)
                    },
                    renderInline: !1,
                    onModalChallengeAbandoned: function (e) {
                      return s(function () {
                        return e
                      }),
                      u(),
                      null
                    }
                  },
                  ye ? ye.renderChallenge(e).then(function (e) {
                    e ||
                    c()
                  }).catch(function () {
                    c()
                  }) : console.error('no captcha service available')
                ) : l()
              )
            },
            [
              r + o
            ]
          ),
          Ve().createElement('div', {
            id: n
          })
        }
        function St(e) {
          var n = e.userId,
          t = e.challengeId,
          r = e.on2svChallengeCompleted,
          o = e.on2svChallengeInvalidated,
          i = e.on2svChallengeAbandoned,
          a = e.onUnknownError,
          u = U;
          return (0, ze.useEffect) (
            function () {
              n &&
              t &&
              function () {
                try {
                  me.renderChallenge({
                    containerId: u,
                    userId: n,
                    challengeId: t,
                    actionType: me.ActionType.Login,
                    renderInline: !1,
                    shouldShowRememberDeviceCheckbox: !0,
                    onChallengeCompleted: r,
                    onChallengeInvalidated: o,
                    onModalChallengeAbandoned: i
                  }) ||
                  a()
                } catch (e) {
                  a()
                }
              }()
            },
            [
              n,
              t
            ]
          ),
          Ve().createElement('div', {
            id: u
          })
        }
        function se(e) {
          $e.localStorageService.setLocalStorage('identityVerificationLoginTicket', e)
        }
        function fe() {
          var e = an.koreaIdVerification;
          window.location.href = e
        }
        function _t(e) {
          var n = e.userId,
          t = e.sessionId,
          r = e.onSecurityQuestionsChallengeCompleted,
          o = e.onSecurityQuestionsChallengeInvalidated,
          i = e.onSecurityQuestionsChallengeAbandoned,
          a = e.onUnknownError,
          u = P;
          return (0, ze.useEffect) (
            function () {
              n &&
              t &&
              function () {
                try {
                  be.renderChallenge({
                    containerId: u,
                    userId: n,
                    sessionId: t,
                    renderInline: !1,
                    onChallengeCompleted: r,
                    onChallengeInvalidated: o,
                    onModalChallengeAbandoned: i
                  }) ||
                  a()
                } catch (e) {
                  a()
                }
              }()
            },
            [
              n,
              t
            ]
          ),
          Ve().createElement('div', {
            id: u
          })
        }
        function At(e) {
          var n = e.containerId,
          t = e.users,
          r = e.invalidUsers,
          o = e.onAccountSelection,
          i = e.onAccountSelectorAbandoned,
          a = e.titleText,
          u = e.helpText,
          e = e.translate,
          c = {
            containerId: n,
            users: t,
            invalidUsers: r,
            onAccountSelection: o,
            onAccountSelectorAbandoned: i,
            titleText: a,
            helpText: u,
            translate: e
          };
          return (0, ze.useEffect) (
            function () {
              0 < t.length &&
              He.AccountSelectorService &&
              He.AccountSelectorService.renderAccountSelectorModal(c)
            },
            [
              t,
              r
            ]
          ),
          Ve().createElement('div', {
            id: n
          })
        }
        function Et(e) {
          var n = e.containerId,
          t = {
            containerId: n,
            titleText: e.titleText,
            helpText: e.helpText,
            onAccountSwitched: e.onAccountSwitched,
            handleAddAccount: e.handleAddAccount,
            removeInvalidActiveUser: e.removeInvalidActiveUser,
            translate: e.translate,
            loggedInUsers: e.loggedInUsers
          },
          r = (
            null !== (
              e = null === He.AccountSwitcherService ||
              void 0 === He.AccountSwitcherService ? void 0 : He.AccountSwitcherService.useIsAccountSwitcherAvailableForBrowser()
            ) &&
            void 0 !== e ? e : [
              !1
            ]
          ) [0];
          return (0, ze.useEffect) (
            function () {
              r &&
              (
                null === He.AccountSwitcherService ||
                void 0 === He.AccountSwitcherService ||
                He.AccountSwitcherService.renderAccountSwitcher(t)
              )
            },
            [
              t,
              r
            ]
          ),
          Ve().createElement('div', {
            id: n
          })
        }(T = V = V || {
        }).Production = 'production',
        T.Sitetest1 = 'sitetest1',
        T.Sitetest2 = 'sitetest2',
        T.Sitetest3 = 'sitetest3';
        var he = [
          '{{',
          '/getauthticket',
          '/placelauncher.ashx'
        ],
        de = [
          'http:',
          'https:'
        ],
        pe = [
          '#',
          '?',
          '//',
          '.',
          'mailto:',
          'javascript:',
          'rbxmobile:'
        ],
        ve = [
          'survey.roblox.com'
        ],
        xt = function (e, a, u, c) {
          return new (u = u || Promise) (
            function (t, n) {
              function r(e) {
                try {
                  i(c.next(e))
                } catch (e) {
                  n(e)
                }
              }
              function o(e) {
                try {
                  i(c.throw(e))
                } catch (e) {
                  n(e)
                }
              }
              function i(e) {
                var n;
                e.done ? t(e.value) : ((n = e.value) instanceof u ? n : new u(function (e) {
                  e(n)
                })).then(r, o)
              }
              i((c = c.apply(e, a || [])).next())
            }
          )
        },
        Ct = function (t, r) {
          var o,
          i,
          a,
          u = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          e = {
            next: n(0),
            throw : n(1),
            return : n(2)
          };
          return 'function' == typeof Symbol &&
          (e[Symbol.iterator] = function () {
            return this
          }),
          e;
          function n(n) {
            return function (e) {
              return function (n) {
                if (o) throw new TypeError('Generator is already executing.');
                for (; u; ) try {
                  if (
                    o = 1,
                    i &&
                    (
                      a = 2 & n[0] ? i.return : n[0] ? i.throw ||
                      ((a = i.return) && a.call(i), 0) : i.next
                    ) &&
                    !(a = a.call(i, n[1])).done
                  ) return a;
                  switch (i = 0, a && (n = [
                      2 & n[0],
                      a.value
                    ]), n[0]) {
                    case 0:
                    case 1:
                      a = n;
                      break;
                    case 4:
                      return u.label++,
                      {
                        value: n[1],
                        done: !1
                      };
                    case 5:
                      u.label++,
                      i = n[1],
                      n = [
                        0
                      ];
                      continue;
                    case 7:
                      n = u.ops.pop(),
                      u.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = u.trys).length && a[a.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        u = 0;
                        continue
                      }
                      if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                        u.label = n[1];
                        break
                      }
                      if (6 === n[0] && u.label < a[1]) {
                        u.label = a[1],
                        a = n;
                        break
                      }
                      if (a && u.label < a[2]) {
                        u.label = a[2],
                        u.ops.push(n);
                        break
                      }
                      a[2] &&
                      u.ops.pop(),
                      u.trys.pop();
                      continue
                  }
                  n = r.call(t, u)
                } catch (e) {
                  n = [
                    6,
                    e
                  ],
                  i = 0
                } finally {
                  o = a = 0
                }
                if (5 & n[0]) throw n[1];
                return {
                  value: n[0] ? n[1] : void 0,
                  done: !0
                }
              }([n,
              e])
            }
          }
        },
        ge = qe.urlService.composeQueryString,
        Lt = (0, e.withTranslations) (
          function (e) {
            var n = e.captchaId,
            t = e.captchaToken,
            r = e.credentialValue,
            o = e.password,
            i = e.isLoading,
            a = e.errorMsg,
            u = e.translate,
            c = e.onFormSubmit,
            l = e.onCredentialValueChange,
            s = e.onPasswordChange,
            e = e.isLoginFormDisabled;
            return (0, ze.useEffect) (function () {
              n &&
              t &&
              c(!1)
            }, [
              n + t
            ]),
            Ve().createElement(
              'div',
              {
                id: 'login-form'
              },
              Ve().createElement(
                'div',
                null,
                Ve().createElement(
                  'div',
                  {
                    className: 'login-form-container'
                  },
                  Ve().createElement(
                    'form',
                    {
                      className: 'login-form',
                      name: 'loginForm',
                      onSubmit: function (e) {
                        e.preventDefault(),
                        e.stopPropagation()
                      }
                    },
                    Ve().createElement(
                      'div',
                      {
                        className: 'form-group username-form-group'
                      },
                      Ve().createElement(
                        'label',
                        {
                          htmlFor: 'login-username',
                          className: 'sr-only'
                        },
                        u(on.LabelUsernameEmailPhone)
                      ),
                      Ve().createElement(
                        'input',
                        {
                          id: 'login-username',
                          name: 'username',
                          type: 'text',
                          className: 'form-control input-field',
                          autoComplete: 'username webauthn',
                          onFocus: j,
                          onBlur: F,
                          placeholder: u(on.LabelUsernameEmailPhone),
                          value: r,
                          onChange: function (e) {
                            return l(e.target.value)
                          }
                        }
                      )
                    ),
                    Ve().createElement(
                      'div',
                      {
                        className: 'form-group password-form-group'
                      },
                      Ve().createElement(
                        'label',
                        {
                          htmlFor: 'login-password',
                          className: 'sr-only'
                        },
                        u(on.LabelPassword)
                      ),
                      Ve().createElement(
                        'input',
                        {
                          id: 'login-password',
                          name: 'password',
                          type: 'password',
                          className: 'form-control input-field',
                          onFocus: M,
                          onBlur: N,
                          placeholder: u(on.LabelPassword),
                          value: o,
                          onChange: function (e) {
                            return s(e.target.value)
                          },
                          onKeyPress: function (e) {
                            'Enter' === e.key &&
                            c()
                          }
                        }
                      ),
                      Ve().createElement(
                        'div',
                        {
                          'aria-live': 'polite'
                        },
                        0 < a.length &&
                        Ve().createElement(
                          'p',
                          {
                            className: 'form-control-label xsmall text-error login-error',
                            id: 'login-form-error'
                          },
                          a
                        )
                      )
                    ),
                    i ? Ve().createElement(Ke.Loading, null) : Ve().createElement(
                      'button',
                      {
                        type: 'button',
                        id: 'login-button',
                        className: 'btn-full-width login-button btn-secondary-md',
                        onClick: function (e) {
                          return c()
                        },
                        disabled: e
                      },
                      u(on.ActionLogInCapitalized)
                    )
                  )
                )
              )
            )
          },
          c
        ),
        ye = He.AccountIntegrityChallengeService.Captcha,
        me = He.AccountIntegrityChallengeService.TwoStepVerification,
        kt = (0, e.withTranslations) (
          function (e) {
            var n = e.onCrossDeviceLoginCodeValidated,
            t = e.isOtpLoginEnabled,
            r = e.openOtpLoginModal,
            o = e.isOneTimeCodeDesignUpdated,
            e = e.translate;
            return (0, ze.useEffect) (
              function () {
                function e(e) {
                  e.detail &&
                  n(e.detail)
                }
                return window.addEventListener('OnCrossDeviceCodeValidated', e),
                function () {
                  window.removeEventListener('OnCrossDeviceCodeValidated', e)
                }
              },
              []
            ),
            Ve().createElement(
              'div',
              null,
              Ve().createElement(
                'div',
                {
                  className: 'alternative-login-divider-container'
                },
                Ve().createElement('div', {
                  className: 'rbx-divider alternative-login-divider'
                }),
                !t &&
                Ve().createElement(
                  'div',
                  {
                    className: 'divider-text-container'
                  },
                  Ve().createElement('span', {
                    className: 'divider-text'
                  }, e(on.LabelLoginWithYour))
                )
              ),
              t &&
              Ve().createElement(
                'button',
                {
                  type: 'button',
                  id: 'otp-login-button',
                  className: 'btn-full-width btn-control-md otp-login-button',
                  onClick: r
                },
                e(on.ActionLogInEmailOneTimeCode)
              ),
              Ve().createElement(
                'button',
                {
                  type: 'button',
                  id: 'cross-device-login-button',
                  className: 'btn-full-width btn-control-md cross-device-login-button',
                  onClick: function () {
                    $e.eventStreamService.sendEventWithTarget(
                      dt.formInteraction,
                      rn.context.loginPage,
                      {
                        field: rn.field.loginOtherDevice,
                        aType: rn.aType.click
                      }
                    ),
                    He.CrossDeviceLoginDisplayCodeService.openModal()
                  }
                },
                Ve().createElement(
                  'span',
                  null,
                  e(
                    t ? o ? on.ActionUseAnotherDevice : on.ActionLogInAnotherDevice : on.ActionAnotherLoggedInDevice
                  )
                )
              )
            )
          },
          c
        ),
        Tt = (0, e.withTranslations) (
          function (e) {
            var n = e.identityVerificationLoginTicket,
            t = e.translate,
            r = (0, Ke.createModal) (),
            e = r[0],
            o = r[1];
            return (0, ze.useEffect) (function () {
              se(n),
              n &&
              o.open()
            }, [
              n
            ]),
            Ve().createElement(
              e,
              {
                title: t('Title.VerificationRequired'),
                body: t('Description.VerificationRequired'),
                neutralButtonText: t('Action.StartVerification'),
                onNeutral: fe,
                closeable: !1
              }
            )
          },
          B
        ),
        be = He.AccountIntegrityChallengeService.SecurityQuestions,
        we = function (e, a, u, c) {
          return new (u = u || Promise) (
            function (t, n) {
              function r(e) {
                try {
                  i(c.next(e))
                } catch (e) {
                  n(e)
                }
              }
              function o(e) {
                try {
                  i(c.throw(e))
                } catch (e) {
                  n(e)
                }
              }
              function i(e) {
                var n;
                e.done ? t(e.value) : ((n = e.value) instanceof u ? n : new u(function (e) {
                  e(n)
                })).then(r, o)
              }
              i((c = c.apply(e, a || [])).next())
            }
          )
        },
        Se = function (t, r) {
          var o,
          i,
          a,
          u = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          e = {
            next: n(0),
            throw : n(1),
            return : n(2)
          };
          return 'function' == typeof Symbol &&
          (e[Symbol.iterator] = function () {
            return this
          }),
          e;
          function n(n) {
            return function (e) {
              return function (n) {
                if (o) throw new TypeError('Generator is already executing.');
                for (; u; ) try {
                  if (
                    o = 1,
                    i &&
                    (
                      a = 2 & n[0] ? i.return : n[0] ? i.throw ||
                      ((a = i.return) && a.call(i), 0) : i.next
                    ) &&
                    !(a = a.call(i, n[1])).done
                  ) return a;
                  switch (i = 0, a && (n = [
                      2 & n[0],
                      a.value
                    ]), n[0]) {
                    case 0:
                    case 1:
                      a = n;
                      break;
                    case 4:
                      return u.label++,
                      {
                        value: n[1],
                        done: !1
                      };
                    case 5:
                      u.label++,
                      i = n[1],
                      n = [
                        0
                      ];
                      continue;
                    case 7:
                      n = u.ops.pop(),
                      u.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = u.trys).length && a[a.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        u = 0;
                        continue
                      }
                      if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                        u.label = n[1];
                        break
                      }
                      if (6 === n[0] && u.label < a[1]) {
                        u.label = a[1],
                        a = n;
                        break
                      }
                      if (a && u.label < a[2]) {
                        u.label = a[2],
                        u.ops.push(n);
                        break
                      }
                      a[2] &&
                      u.ops.pop(),
                      u.trys.pop();
                      continue
                  }
                  n = r.call(t, u)
                } catch (e) {
                  n = [
                    6,
                    e
                  ],
                  i = 0
                } finally {
                  o = a = 0
                }
                if (5 & n[0]) throw n[1];
                return {
                  value: n[0] ? n[1] : void 0,
                  done: !0
                }
              }([n,
              e])
            }
          }
        },
        It = (0, e.withTranslations) (
          function (e) {
            var n,
            t = e.translate,
            r = (0, ze.useState) (!1),
            e = r[0],
            o = r[1],
            i = He.AccountSwitcherService &&
            Ge.authenticatedUser.isAuthenticated,
            n = i ? (n = yt(), O + '?' + ge({
              returnUrl: n
            })) : function () {
              var e = qe.urlService.getQueryParam('returnUrl');
              if (e) {
                e = {
                  ReturnUrl: e
                };
                return qe.urlService.getUrlWithQueries('/account/signupredir', e)
              }
              return qe.urlService.getAbsoluteUrl('/')
            }();
            return (0, ze.useEffect) (
              function () {
                we(
                  void 0,
                  void 0,
                  void 0,
                  function () {
                    var n;
                    return Se(
                      this,
                      function (e) {
                        switch (e.label) {
                          case 0:
                            return e.trys.push([0,
                            2,
                            ,
                            3]),
                            [
                              4,
                              null === He.NavigationService ||
                              void 0 === He.NavigationService ? void 0 : He.NavigationService.getIsVNGLandingRedirectEnabled()
                            ];
                          case 1:
                            return n = e.sent(),
                            o(i || !n),
                            [
                              3,
                              3
                            ];
                          case 2:
                            return n = e.sent(),
                            console.error('Error fetching data:', n),
                            o(!0),
                            [
                              3,
                              3
                            ];
                          case 3:
                            return [2]
                        }
                      }
                    )
                  }
                )
              },
              [
                i
              ]
            ),
            Ve().createElement(
              'div',
              {
                className: 'text-center'
              },
              e &&
              Ve().createElement(
                'div',
                {
                  className: 'signup-option'
                },
                !i &&
                Ve().createElement('span', {
                  className: 'no-account-text'
                }, t(on.LabelNoAccount)),
                Ve().createElement(
                  'a',
                  {
                    id: 'sign-up-link',
                    className: 'text-link signup-link',
                    href: n,
                    target: '_self'
                  },
                  t(i ? on.ActionCreateANewAccount : on.ActionSignUpCapitalized)
                )
              )
            )
          },
          c
        ),
        Ut = (0, e.withTranslations) (
          function (e) {
            var n = e.translate,
            t = an.forgotCredentialsUrl,
            e = on.ActionForgotPasswordOrUsernameQuestionCapitalized;
            return Ve().createElement(
              'div',
              {
                className: 'text-center forgot-credentials-link'
              },
              Ve().createElement(
                'a',
                {
                  id: 'forgot-credentials-link',
                  className: 'text-link',
                  href: t,
                  target: '_self'
                },
                n(e)
              )
            )
          },
          c
        ),
        _e = function (e, a, u, c) {
          return new (u = u || Promise) (
            function (t, n) {
              function r(e) {
                try {
                  i(c.next(e))
                } catch (e) {
                  n(e)
                }
              }
              function o(e) {
                try {
                  i(c.throw(e))
                } catch (e) {
                  n(e)
                }
              }
              function i(e) {
                var n;
                e.done ? t(e.value) : ((n = e.value) instanceof u ? n : new u(function (e) {
                  e(n)
                })).then(r, o)
              }
              i((c = c.apply(e, a || [])).next())
            }
          )
        },
        Ae = function (t, r) {
          var o,
          i,
          a,
          u = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          e = {
            next: n(0),
            throw : n(1),
            return : n(2)
          };
          return 'function' == typeof Symbol &&
          (e[Symbol.iterator] = function () {
            return this
          }),
          e;
          function n(n) {
            return function (e) {
              return function (n) {
                if (o) throw new TypeError('Generator is already executing.');
                for (; u; ) try {
                  if (
                    o = 1,
                    i &&
                    (
                      a = 2 & n[0] ? i.return : n[0] ? i.throw ||
                      ((a = i.return) && a.call(i), 0) : i.next
                    ) &&
                    !(a = a.call(i, n[1])).done
                  ) return a;
                  switch (i = 0, a && (n = [
                      2 & n[0],
                      a.value
                    ]), n[0]) {
                    case 0:
                    case 1:
                      a = n;
                      break;
                    case 4:
                      return u.label++,
                      {
                        value: n[1],
                        done: !1
                      };
                    case 5:
                      u.label++,
                      i = n[1],
                      n = [
                        0
                      ];
                      continue;
                    case 7:
                      n = u.ops.pop(),
                      u.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = u.trys).length && a[a.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        u = 0;
                        continue
                      }
                      if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                        u.label = n[1];
                        break
                      }
                      if (6 === n[0] && u.label < a[1]) {
                        u.label = a[1],
                        a = n;
                        break
                      }
                      if (a && u.label < a[2]) {
                        u.label = a[2],
                        u.ops.push(n);
                        break
                      }
                      a[2] &&
                      u.ops.pop(),
                      u.trys.pop();
                      continue
                  }
                  n = r.call(t, u)
                } catch (e) {
                  n = [
                    6,
                    e
                  ],
                  i = 0
                } finally {
                  o = a = 0
                }
                if (5 & n[0]) throw n[1];
                return {
                  value: n[0] ? n[1] : void 0,
                  done: !0
                }
              }([n,
              e])
            }
          }
        },
        Pt = function (e) {
          var n = (0, ze.useState) ({
          }),
          t = n[0],
          r = n[1];
          return (0, ze.useEffect) (
            function () {
              var n;
              n = e,
              _e(
                void 0,
                void 0,
                Promise,
                function () {
                  return Ae(
                    this,
                    function (e) {
                      switch (e.label) {
                        case 0:
                          return null !== He.ExperimentationService &&
                          void 0 !== He.ExperimentationService &&
                          He.ExperimentationService.getAllValuesForLayer ? [
                            4,
                            He.ExperimentationService.getAllValuesForLayer(n)
                          ] : [
                            3,
                            2
                          ];
                        case 1:
                          return [2,
                          e.sent()];
                        case 2:
                          return [2,
                          {
                          }
                          ]
                      }
                    }
                  )
                }
              ).then(function (e) {
                r(e)
              }, function () {
                r({
                })
              })
            },
            [
              e
            ]
          ),
          t
        },
        Ee = function (e, a, u, c) {
          return new (u = u || Promise) (
            function (t, n) {
              function r(e) {
                try {
                  i(c.next(e))
                } catch (e) {
                  n(e)
                }
              }
              function o(e) {
                try {
                  i(c.throw(e))
                } catch (e) {
                  n(e)
                }
              }
              function i(e) {
                var n;
                e.done ? t(e.value) : ((n = e.value) instanceof u ? n : new u(function (e) {
                  e(n)
                })).then(r, o)
              }
              i((c = c.apply(e, a || [])).next())
            }
          )
        },
        xe = function (t, r) {
          var o,
          i,
          a,
          u = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          e = {
            next: n(0),
            throw : n(1),
            return : n(2)
          };
          return 'function' == typeof Symbol &&
          (e[Symbol.iterator] = function () {
            return this
          }),
          e;
          function n(n) {
            return function (e) {
              return function (n) {
                if (o) throw new TypeError('Generator is already executing.');
                for (; u; ) try {
                  if (
                    o = 1,
                    i &&
                    (
                      a = 2 & n[0] ? i.return : n[0] ? i.throw ||
                      ((a = i.return) && a.call(i), 0) : i.next
                    ) &&
                    !(a = a.call(i, n[1])).done
                  ) return a;
                  switch (i = 0, a && (n = [
                      2 & n[0],
                      a.value
                    ]), n[0]) {
                    case 0:
                    case 1:
                      a = n;
                      break;
                    case 4:
                      return u.label++,
                      {
                        value: n[1],
                        done: !1
                      };
                    case 5:
                      u.label++,
                      i = n[1],
                      n = [
                        0
                      ];
                      continue;
                    case 7:
                      n = u.ops.pop(),
                      u.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = u.trys).length && a[a.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        u = 0;
                        continue
                      }
                      if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                        u.label = n[1];
                        break
                      }
                      if (6 === n[0] && u.label < a[1]) {
                        u.label = a[1],
                        a = n;
                        break
                      }
                      if (a && u.label < a[2]) {
                        u.label = a[2],
                        u.ops.push(n);
                        break
                      }
                      a[2] &&
                      u.ops.pop(),
                      u.trys.pop();
                      continue
                  }
                  n = r.call(t, u)
                } catch (e) {
                  n = [
                    6,
                    e
                  ],
                  i = 0
                } finally {
                  o = a = 0
                }
                if (5 & n[0]) throw n[1];
                return {
                  value: n[0] ? n[1] : void 0,
                  done: !0
                }
              }([n,
              e])
            }
          }
        },
        Rt = (0, e.withTranslations) (
          function (e) {
            var o = e.origin,
            i = e.containerId,
            a = e.hasMaxLoggedInAccountsSignupError,
            n = e.isAccountLimitReached,
            u = e.handleRedirectHome,
            c = e.translate,
            l = e.isParentUser,
            s = (
              null !== (
                e = null === He.AccountSwitcherService ||
                void 0 === He.AccountSwitcherService ? void 0 : He.AccountSwitcherService.useIsAccountSwitcherAvailableForBrowser()
              ) &&
              void 0 !== e ? e : [
                !1
              ]
            ) [0];
            return (0, ze.useEffect) (
              function () {
                var t,
                r,
                e;
                s &&
                (
                  (n || a) &&
                  (
                    e = function () {
                      var e = this,
                      n = {
                        containerId: i,
                        origin: o,
                        localizedTitleText: c(h.HeadingAccountLimitReached),
                        localizedBodyText: c(h.LabelAccountLimitReached),
                        localizedPrimaryButtonText: c(h.ActionOK),
                        primaryButtonCallback: u,
                        isModalDismissable: !1
                      };
                      return a &&
                      (
                        n.localizedSecondaryButtonText = c(f.ActionLogOutAllAccounts),
                        n.secondaryButtonCallback = function () {
                          return Ee(
                            e,
                            void 0,
                            void 0,
                            function () {
                              var n;
                              return xe(
                                this,
                                function (e) {
                                  switch (e.label) {
                                    case 0:
                                      if (!(n = lt())) return [3,
                                      4];
                                      e.label = 1;
                                    case 1:
                                      return e.trys.push([1,
                                      3,
                                      ,
                                      4]),
                                      [
                                        4,
                                        ut({
                                          encrypted_users_data_blob: n
                                        })
                                      ];
                                    case 2:
                                      return e.sent(),
                                      [
                                        3,
                                        4
                                      ];
                                    case 3:
                                      return e.sent(),
                                      ct(
                                        rn.context.accountSwitcherLimitError,
                                        rn.clientErrorTypes.logoutAllAccountSwitcherAccounts
                                      ),
                                      [
                                        3,
                                        4
                                      ];
                                    case 4:
                                      st();
                                      try {
                                        null !== He.NavigationService &&
                                        void 0 !== He.NavigationService &&
                                        He.NavigationService.logoutAndRedirect()
                                      } catch (e) {
                                        window.location.reload()
                                      }
                                      return [2]
                                  }
                                }
                              )
                            }
                          )
                        }
                      ),
                      n
                    }(),
                    null !== He.AccountSwitcherService &&
                    void 0 !== He.AccountSwitcherService &&
                    He.AccountSwitcherService.renderBaseConfirmationModal(e)
                  ),
                  l &&
                  (
                    t = o === Qe.LoginEmptyBlobRequiredError ? rn.context.accountSwitcherVpcLogin : rn.context.accountSwitcherVpcSignup,
                    r = rn.clientErrorTypes.logoutAllAccountSwitcherAccounts,
                    e = {
                      containerId: i,
                      origin: o,
                      localizedTitleText: c('Header.LogoutAllAccounts'),
                      localizedBodyText: c('Description.ParentLogoutConfirmation'),
                      localizedPrimaryButtonText: c('Action.LogoutAllAccounts'),
                      primaryButtonCallback: function () {
                        return Ee(
                          void 0,
                          void 0,
                          void 0,
                          function () {
                            var n;
                            return xe(
                              this,
                              function (e) {
                                switch (e.label) {
                                  case 0:
                                    if (rt(), !(n = lt())) return [3,
                                    4];
                                    e.label = 1;
                                  case 1:
                                    return e.trys.push([1,
                                    3,
                                    ,
                                    4]),
                                    [
                                      4,
                                      ut({
                                        encrypted_users_data_blob: n
                                      })
                                    ];
                                  case 2:
                                    return e.sent(),
                                    [
                                      3,
                                      4
                                    ];
                                  case 3:
                                    return e.sent(),
                                    ct(t, r),
                                    [
                                      3,
                                      4
                                    ];
                                  case 4:
                                    return st(),
                                    window.location.reload(),
                                    [
                                      2
                                    ]
                                }
                              }
                            )
                          }
                        )
                      },
                      isModalDismissable: !1
                    },
                    null !== He.AccountSwitcherService &&
                    void 0 !== He.AccountSwitcherService &&
                    He.AccountSwitcherService.renderBaseConfirmationModal(e)
                  )
                )
              },
              [
                s,
                n,
                a
              ]
            ),
            Ve().createElement('div', {
              id: i
            })
          },
          t
        ),
        Ce = (
          He.EnvironmentUrls.authApi,
          He.EnvironmentUrls.authApi,
          He.EnvironmentUrls.userAgreementsServiceApi,
          He.EnvironmentUrls.authApi,
          He.EnvironmentUrls.authApi,
          He.EnvironmentUrls.authApi,
          He.EnvironmentUrls.websiteUrl,
          He.EnvironmentUrls.websiteUrl,
          new Map(
            [[1,
            'Response.UsernameAlreadyInUse'],
            [
              2,
              'Response.BadUsername'
            ],
            [
              10,
              'Response.UsernamePrivateInfo'
            ],
            [
              12,
              'Response.UsernameNotAvailable'
            ]]
          ),
          function (e, a, u, c) {
            return new (u = u || Promise) (
              function (t, n) {
                function r(e) {
                  try {
                    i(c.next(e))
                  } catch (e) {
                    n(e)
                  }
                }
                function o(e) {
                  try {
                    i(c.throw(e))
                  } catch (e) {
                    n(e)
                  }
                }
                function i(e) {
                  var n;
                  e.done ? t(e.value) : ((n = e.value) instanceof u ? n : new u(function (e) {
                    e(n)
                  })).then(r, o)
                }
                i((c = c.apply(e, a || [])).next())
              }
            )
          }
        ),
        Le = function (t, r) {
          var o,
          i,
          a,
          u = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          e = {
            next: n(0),
            throw : n(1),
            return : n(2)
          };
          return 'function' == typeof Symbol &&
          (e[Symbol.iterator] = function () {
            return this
          }),
          e;
          function n(n) {
            return function (e) {
              return function (n) {
                if (o) throw new TypeError('Generator is already executing.');
                for (; u; ) try {
                  if (
                    o = 1,
                    i &&
                    (
                      a = 2 & n[0] ? i.return : n[0] ? i.throw ||
                      ((a = i.return) && a.call(i), 0) : i.next
                    ) &&
                    !(a = a.call(i, n[1])).done
                  ) return a;
                  switch (i = 0, a && (n = [
                      2 & n[0],
                      a.value
                    ]), n[0]) {
                    case 0:
                    case 1:
                      a = n;
                      break;
                    case 4:
                      return u.label++,
                      {
                        value: n[1],
                        done: !1
                      };
                    case 5:
                      u.label++,
                      i = n[1],
                      n = [
                        0
                      ];
                      continue;
                    case 7:
                      n = u.ops.pop(),
                      u.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = u.trys).length && a[a.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        u = 0;
                        continue
                      }
                      if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                        u.label = n[1];
                        break
                      }
                      if (6 === n[0] && u.label < a[1]) {
                        u.label = a[1],
                        a = n;
                        break
                      }
                      if (a && u.label < a[2]) {
                        u.label = a[2],
                        u.ops.push(n);
                        break
                      }
                      a[2] &&
                      u.ops.pop(),
                      u.trys.pop();
                      continue
                  }
                  n = r.call(t, u)
                } catch (e) {
                  n = [
                    6,
                    e
                  ],
                  i = 0
                } finally {
                  o = a = 0
                }
                if (5 & n[0]) throw n[1];
                return {
                  value: n[0] ? n[1] : void 0,
                  done: !0
                }
              }([n,
              e])
            }
          }
        },
        Ot = function (t) {
          var e = this;
          void 0 === t &&
          (t = !0);
          var n = (
            i = (0, ze.useState) ({
              usersAvailableForSwitching: [],
              isAccountLimitReached: !1
            })
          ) [0],
          r = i[1],
          o = (0, ze.useState) (!0),
          i = o[0],
          a = o[1];
          return (0, ze.useEffect) (
            function () {
              Ce(
                e,
                void 0,
                Promise,
                function () {
                  var n;
                  return Le(
                    this,
                    function (e) {
                      switch (e.label) {
                        case 0:
                          return e.trys.push([0,
                          2,
                          3,
                          4]),
                          [
                            4,
                            null === He.AccountSwitcherService ||
                            void 0 === He.AccountSwitcherService ? void 0 : He.AccountSwitcherService.parseLoggedInUsers(!Ge.authenticatedUser.isAuthenticated, t)
                          ];
                        case 1:
                          return n = e.sent(),
                          r(n),
                          [
                            3,
                            4
                          ];
                        case 2:
                          return n = e.sent(),
                          console.warn('account switching has issues', n),
                          [
                            3,
                            4
                          ];
                        case 3:
                          return a(!1),
                          [
                            7
                          ];
                        case 4:
                          return [2]
                      }
                    }
                  )
                }
              )
            },
            []
          ),
          {
            loggedInUsers: n,
            isGettingLoggedInUsers: i
          }
        };
        function Bt(e) {
          return Ft.includes(e.pathname) &&
          Ie.includes(null !== (e = e.searchParams.get('type')) && void 0 !== e ? e : '')
        }
        var ke,
        Dt = function (e) {
          (0, ze.useEffect) (function () {
            e &&
            at()
          }, [
            e
          ])
        },
        jt = function () {
          var e = (0, ze.useState) (!1),
          n = e[0],
          t = e[1];
          return (0, ze.useEffect) (
            function () {
              var e = new URLSearchParams(window.location.search),
              e = String(e.get('returnUrl')),
              e = e.includes('parents/account-setup') ||
              e.includes('parental-requests');
              t(e)
            },
            []
          ),
          n
        },
        Te = {
          qualifiedSignup: He.EnvironmentUrls.apiGatewayUrl + '/affiliate-links/v1/events/qualified-signup',
          qualifiedLogin: He.EnvironmentUrls.apiGatewayUrl + '/affiliate-links/v1/events/authenticated-visit'
        },
        Ft = [
          '/share-links'
        ],
        Ie = [
          'ExperienceAffiliate',
          'ExperienceInvite'
        ];
        function Mt(e) {
          qe.httpService.post({
            withCredentials: !0,
            url: Te.qualifiedLogin
          }, e).catch(
            function (e) {
              console.error('Failed to send login event for affiliate links:', e)
            }
          )
        }(t = ke = ke || {
        }).ChargebackReenableAccount = 'ChargebackReenableAccount',
        t.SavePaymentMethods = 'SavePaymentMethods',
        t.UpdateUserSetting = 'UpdateUserSetting',
        t.UpdateBirthdate = 'UpdateBirthdate',
        t.LinkToChild = 'LinkToChild',
        t.Unknown = 'Unknown',
        $e.eventStreamService.eventTypes;
        var Nt = function (e, a, u, c) { // a = data exchange blob
          return new (u = u || Promise) (
            function (t, n) {
              function r(e) {
                try {
                  i(c.next(e))
                } catch (e) {
                  n(e)
                }
              }
              function o(e) {
                try {
                  i(c.throw(e))
                } catch (e) {
                  n(e)
                }
              }
              function i(e) {
                var n;
                e.done ? t(e.value) : ((n = e.value) instanceof u ? n : new u(function (e) {
                  e(n)
                })).then(r, o)
              }
              i((c = c.apply(e, a || [])).next())
            }
          )
        },
        Wt = function (t, r) {
          var o,
          i,
          a,
          u = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          e = {
            next: n(0),
            throw : n(1),
            return : n(2)
          };
          return 'function' == typeof Symbol &&
          (e[Symbol.iterator] = function () {
            return this
          }),
          e;
          function n(n) {
            return function (e) {
              return function (n) {
                if (o) throw new TypeError('Generator is already executing.');
                for (; u; ) try {
                  if (
                    o = 1,
                    i &&
                    (
                      a = 2 & n[0] ? i.return : n[0] ? i.throw ||
                      ((a = i.return) && a.call(i), 0) : i.next
                    ) &&
                    !(a = a.call(i, n[1])).done
                  ) return a;
                  switch (i = 0, a && (n = [
                      2 & n[0],
                      a.value
                    ]), n[0]) {
                    case 0:
                    case 1:
                      a = n;
                      break;
                    case 4:
                      return u.label++,
                      {
                        value: n[1],
                        done: !1
                      };
                    case 5:
                      u.label++,
                      i = n[1],
                      n = [
                        0
                      ];
                      continue;
                    case 7:
                      n = u.ops.pop(),
                      u.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = u.trys).length && a[a.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        u = 0;
                        continue
                      }
                      if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                        u.label = n[1];
                        break
                      }
                      if (6 === n[0] && u.label < a[1]) {
                        u.label = a[1],
                        a = n;
                        break
                      }
                      if (a && u.label < a[2]) {
                        u.label = a[2],
                        u.ops.push(n);
                        break
                      }
                      a[2] &&
                      u.ops.pop(),
                      u.trys.pop();
                      continue
                  }
                  n = r.call(t, u)
                } catch (e) {
                  n = [
                    6,
                    e
                  ],
                  i = 0
                } finally {
                  o = a = 0
                }
                if (5 & n[0]) throw n[1];
                return {
                  value: n[0] ? n[1] : void 0,
                  done: !0
                }
              }([n,
              e])
            }
          }
        },
        Ue = (0, e.withTranslations) (
          function (e) {
            function a(e) {
              return Boolean(null == e ? void 0 : e.identityVerificationLoginTicket)
            }
            function u(e) {
              be(e.identityVerificationLoginTicket)
            }
            function c(e) {
              $(!0);
              var n,
              t,
              r = yt(),
              o = function (e) {
                try {
                  var n = new URL(e).searchParams.get('referralUrl');
                  if (!n) return null;
                  n = new URL(decodeURIComponent(n));
                  return Bt(n) ? n.href : null
                } catch (e) {
                  return null
                }
              }(r);
              o &&
              (
                n = function (e) {
                  try {
                    var n = new URL(e);
                    return Ft.includes(n.pathname) ? null !== (n = n.searchParams.get('code')) &&
                    void 0 !== n ? n : '' : ''
                  } catch (e) {
                    return ''
                  }
                }(o),
                t = function (e) {
                  try {
                    var n = new URL(e);
                    return Ft.includes(n.pathname) ? null !== (n = n.searchParams.get('type')) &&
                    void 0 !== n ? n : '' : ''
                  } catch (e) {
                    return ''
                  }
                }(o),
                Mt({
                  referralUrl: null != o ? o : '',
                  linkId: n,
                  linkType: t,
                  userDidLogIn: !0
                })
              ),
              it(r)
            }
            function i(e) {
              if (
                n = e,
                Boolean(
                  null === (n = null == n ? void 0 : n.twoStepVerificationData) ||
                  void 0 === n ? void 0 : n.ticket
                )
              ) n = {
                userId: (n = e).user.id.toString(),
                challengeId: n.twoStepVerificationData.ticket
              },
              $(!1),
              Le(n),
              !void ve.current.abort();
               else if (a(e)) u(e);
               else {
                try {
                  null !== He.AccountSwitcherService &&
                  void 0 !== He.AccountSwitcherService &&
                  He.AccountSwitcherService.storeAccountSwitcherBlob(e.accountBlob || '')
                } catch (e) {
                  console.warn('Failed to save blob.', e)
                }
                try {
                  e.user.id &&
                  (0, $e.dataStores.authIntentDataStore.applyUserAuthIntent) (e.user.id.toString())
                } catch (e) {
                  console.error('Error applying auth intent data:', e)
                }
                c(e.user.id.toString())
              }
              var n
            }
            function l() {
              w(''),
              y('')
            }
            function s(e, n) {
              if (
                He.AccountIntegrityChallengeService.Generic.ChallengeError.matchAbandoned(e)
              ) return je(),
              $(!1),
              De(''),
              W(0),
              0;
              var t,
              r,
              o = mt(e);
              switch (o) {
                case pn:
                  return ke(e),
                  0;
                case gn:
                  return Ie(),
                  0;
                case Cn:
                  return Te(e),
                  0;
                case bn:
                  return Ue(),
                  0;
                case Ln:
                  return Re(e),
                  0;
                case Tn:
                  return Oe(n, !1),
                  0;
                case In:
                  return Be(),
                  0;
                case Un:
                  return Oe(n, !0),
                  0;
                default:
                  l(),
                  $(!1),
                  pt(
                    function (e) {
                      var n = Zn;
                      switch (e) {
                        case dn:
                          n = Wn;
                          break;
                        case vn:
                          n = zn;
                          break;
                        case yn:
                          n = Vn;
                          break;
                        case mn:
                          n = qn;
                          break;
                        case bn:
                          n = Hn;
                          break;
                        case wn:
                          n = Nn;
                          break;
                        case Sn:
                          n = Gn;
                          break;
                        case _n:
                          n = Kn;
                          break;
                        case En:
                          n = Qn;
                          break;
                        case An:
                          n = $n;
                          break;
                        case xn:
                          n = Yn;
                          break;
                        default:
                          n = Zn
                      }
                      return n
                    }(o)
                  ),
                  t = h(vt(o, n)),
                  n === tn.EmailOtpSessionToken ? (
                    r = String(o),
                    $e.eventStreamService.sendEventWithTarget(
                      dt.formInteraction,
                      rn.context.enterOTP,
                      {
                        field: rn.field.errorMessage,
                        aType: rn.aType.shown,
                        btn: rn.btn.login,
                        errorCode: r
                      }
                    ),
                    De(t, o === kn)
                  ) : n === tn.Passkey ? Fe(t, o === kn) : Q(t),
                  W(0)
              }
            }
            function f() {
              M({
                users: [],
                invalidUsers: []
              }),
              W(0),
              $(!1),
              De('')
            }
            function n(e, n) {
              H(tn.EmailOtpSessionToken),
              re(e),
              ie(n)
            }
            function t() {
              H(tn.Username),
              re(''),
              ie('')
            }
            function r(o) {
              return Nt(
                void 0,
                void 0,
                void 0,
                function () {
                  var n,
                  r;
                  return Wt(
                    this,
                    function (e) {
                      switch (e.label) {
                        case 0:
                          return e.trys.push([0,
                          3,
                          ,
                          4]),
                          [
                            4,
                            nn(o)
                          ];
                        case 1:
                          return r = e.sent().authParams,
                          [
                            4,
                            (
                              t = r,
                              ft(
                                void 0,
                                void 0,
                                Promise,
                                function () {
                                  var n;
                                  return ht(
                                    this,
                                    function (e) {
                                      switch (e.label) {
                                        case 0:
                                          return n = tt('/v2/login'),
                                          n = {
                                            url: n,
                                            withCredentials: !0
                                          },
                                          [
                                            4,
                                            qe.httpService.post(n, t)
                                          ];
                                        case 1:
                                          return [2,
                                          e.sent().data]
                                      }
                                    }
                                  )
                                }
                              )
                            )
                          ];
                        case 2:
                          return n = e.sent(),
                          r.secureAuthenticationIntent &&
                          pt(Bn),
                          null !== (
                            r = null === $e.dataStores ||
                            void 0 === $e.dataStores ? void 0 : $e.dataStores.authIntentDataStore
                          ) &&
                          void 0 !== r &&
                          r.hasUnclaimedAuthIntent() &&
                          pt(Dn),
                          pt(jn),
                          i(n),
                          [
                            3,
                            4
                          ];
                        case 3:
                          return n = e.sent(),
                          s(n, o.ctype),
                          [
                            3,
                            4
                          ];
                        case 4:
                          return [2]
                      }
                      var t
                    }
                  )
                }
              )
            }
            var h = e.translate,
            o = (0, ze.useState) (!1),
            d = o[0],
            p = o[1],
            v = (0, ze.useState) (''),
            g = v[0],
            y = v[1],
            m = (0, ze.useState) (''),
            b = m[0],
            w = m[1],
            S = (0, ze.useState) (''),
            _ = S[0],
            A = S[1],
            E = (0, ze.useState) (''),
            x = E[0],
            C = E[1],
            L = (0, ze.useState) (''),
            k = L[0],
            T = L[1],
            I = (0, ze.useState) (''),
            U = I[0],
            P = I[1],
            e = (0, ze.useState) (0),
            R = e[0],
            O = e[1],
            o = (0, ze.useState) (''),
            B = o[0],
            D = o[1],
            v = (0, ze.useState) (''),
            j = v[0],
            F = v[1],
            m = (0, ze.useState) ({
              users: [],
              invalidUsers: []
            }),
            S = m[0],
            M = m[1],
            E = (0, ze.useState) (0),
            N = E[0],
            W = E[1],
            L = (0, ze.useState) (''),
            z = L[0],
            V = L[1],
            I = (0, ze.useState) (tn.Username),
            q = I[0],
            H = I[1],
            e = (0, ze.useState) (''),
            G = e[0],
            K = e[1],
            o = (0, ze.useState) (!1),
            v = o[0],
            $ = o[1],
            m = (0, ze.useState) (''),
            E = m[0],
            Q = m[1],
            L = (0, ze.useState) (!1),
            Y = L[0],
            Z = L[1],
            I = (0, ze.useState) (''),
            J = I[0],
            X = I[1],
            e = (0, ze.useState) (''),
            ee = e[0],
            ne = e[1],
            o = (0, ze.useState) (''),
            te = o[0],
            re = o[1],
            m = (0, ze.useState) (''),
            oe = m[0],
            ie = m[1],
            L = (0, ze.useState) (!1),
            I = L[0],
            ae = L[1],
            e = (0, ze.useState) (''),
            ue = e[0],
            ce = e[1],
            o = (0, ze.useState) (''),
            le = o[0],
            se = o[1],
            m = (0, ze.useState) (0),
            fe = m[0],
            he = m[1],
            L = (0, ze.useState) (!1),
            de = L[0],
            pe = L[1],
            ve = (0, ze.useRef) (new AbortController),
            e = (0, ze.useState) (100),
            ge = e[0],
            ye = e[1],
            me = !0,
            o = (0, ze.useState) (''),
            m = o[0],
            be = o[1],
            we = Pt('Website.Login').IsLoginUiUpdatesEnabled,
            L = (0, ze.useState) (!0),
            e = L[0],
            Se = L[1],
            o = (0, ze.useState) (!1),
            L = o[0],
            _e = o[1],
            o = Ot(
              !(
                null !== (
                  o = null === Ge.authenticatedUser ||
                  void 0 === Ge.authenticatedUser ? void 0 : Ge.authenticatedUser.isAuthenticated
                ) &&
                void 0 !== o &&
                o
              )
            ),
            Ae = o.loggedInUsers,
            Ee = o.isGettingLoggedInUsers,
            o = null !== (
              o = null === He.AccountSwitcherService ||
              void 0 === He.AccountSwitcherService ? void 0 : He.AccountSwitcherService.useIsAccountSwitcherAvailableForBrowser()
            ) &&
            void 0 !== o ? o : [
              !1,
              !1
            ],
            xe = o[0],
            Ce = o[1],
            o = jt(),
            Le = function (e) {
              T(e.userId),
              P(e.challengeId)
            },
            ke = function (e) {
              e = function (n) {
                var t = bt(n);
                'object' == typeof n &&
                bt(n.data).forEach(function (e) {
                  return t.push(e)
                });
                var r = t[0] ||
                ',';
                try {
                  var e = JSON.parse(r);
                  return {
                    dataExchange: e.dxBlob,
                    unifiedCaptchaId: e.unifiedCaptchaId
                  }
                } catch (e) {
                  n = r.split(',');
                  return {
                    unifiedCaptchaId: n[0],
                    dataExchange: n[1]
                  }
                }
              }(e);
              pt(Fn),
              y((e = e).unifiedCaptchaId),
              w(e.dataExchange)
            },
            Te = function (e) {
              e = function (e) {
                var n = bt(e);
                'object' == typeof e &&
                bt(e.data).forEach(function (e) {
                  return n.push(e)
                });
                e = n[0] ||
                '',
                e = JSON.parse(e);
                return {
                  userId: e.userId,
                  sessionId: e.sessionId
                }
              }(e);
              pt(Jn),
              T((e = e).userId),
              D(e.sessionId)
            },
            Ie = function () {
              pt(Mn),
              it(an.securityNotification)
            },
            Ue = function () {
              l(),
              Z(!0),
              pt(Hn)
            },
            Pe = function () {
              Q(h(on.MessageUnknownErrorTryAgain))
            },
            Re = function (e) {
              l();
              var n,
              t = (
                r = {
                  users: [],
                  invalidUsers: []
                },
                n = bt(t = e),
                'object' == typeof t &&
                (
                  bt(t.data).forEach(function (e) {
                    return n.push(e)
                  }),
                  e = n[0] ||
                  '',
                  e = (t = JSON.parse(e)).users,
                  t = t.invalidUsers,
                  r.users = null != e ? e : [],
                  r.invalidUsers = null != t ? t : []
                ),
                r
              );
              M(t);
              var t,
              r = t.users.map(function (e) {
                return e.id
              }).join(',');
              t = t.users.length,
              r = r,
              q === tn.EmailOtpSessionToken &&
              (
                $e.eventStreamService.sendEventWithTarget(
                  dt.pageLoad,
                  rn.context.disambiguationOTP,
                  {
                    numUsers: String(t)
                  }
                ),
                $e.eventStreamService.sendEventWithTarget(
                  rn.schematizedEventTypes.authPageLoad,
                  rn.context.disambigOTP,
                  {
                    state: r
                  }
                )
              )
            },
            Oe = function (e, n) {
              var t,
              r,
              o,
              i,
              a,
              u,
              c;
              t = h,
              r = Ne,
              o = function () {
                e === tn.EmailOtpSessionToken &&
                (
                  f(),
                  window.dispatchEvent(
                    new CustomEvent(
                      'onEnterEmailVerifyCodeError',
                      {
                        detail: {
                          errorMessage: '',
                          shouldCloseModal: !0
                        }
                      }
                    )
                  )
                )
              },
              a = (i = n) ? Qe.LoginVpcEmptyBlobRequiredError : Qe.LoginEmptyBlobRequiredError,
              n = i ? en : Xe,
              u = i ? rn.context.accountSwitcherVpcLogin : rn.context.accountSwitcherLogin,
              c = rn.clientErrorTypes.logoutAllAccountSwitcherAccounts,
              t = {
                containerId: hn,
                origin: a,
                localizedTitleText: t(Ye),
                localizedBodyText: t(n),
                localizedPrimaryButtonText: t(Ze),
                localizedSecondaryButtonText: t(Je),
                primaryButtonCallback: function () {
                  return xt(
                    void 0,
                    void 0,
                    void 0,
                    function () {
                      var n;
                      return Ct(
                        this,
                        function (e) {
                          switch (e.label) {
                            case 0:
                              if (rt(), !(n = lt())) return [3,
                              4];
                              e.label = 1;
                            case 1:
                              return e.trys.push([1,
                              3,
                              ,
                              4]),
                              [
                                4,
                                ut({
                                  encrypted_users_data_blob: n
                                })
                              ];
                            case 2:
                              return e.sent(),
                              [
                                3,
                                4
                              ];
                            case 3:
                              return e.sent(),
                              ct(u, c),
                              [
                                3,
                                4
                              ];
                            case 4:
                              return st(),
                              r(!1),
                              [
                                2
                              ]
                          }
                        }
                      )
                    }
                  )
                },
                secondaryButtonCallback: function () {
                  o()
                }
              },
              null !== He.AccountSwitcherService &&
              void 0 !== He.AccountSwitcherService &&
              He.AccountSwitcherService.renderBaseConfirmationModal(t),
              $(!1)
            },
            Be = function () {
              _e(!0),
              $(!1)
            },
            De = function (e, n) {
              void 0 === n &&
              (n = !1);
              var t = !1,
              r = e;
              (0 < N || n) &&
              (t = !0, r = '', Q(e)),
              window.dispatchEvent(
                new CustomEvent(
                  'onEnterEmailVerifyCodeError',
                  {
                    detail: {
                      errorMessage: r,
                      shouldCloseModal: t
                    }
                  }
                )
              ),
              ie('')
            },
            je = function () {
              he(fe + 1),
              se(''),
              ce('')
            },
            Fe = function (e, n) {
              void 0 === n &&
              (n = !1),
              Q(e),
              je()
            },
            Me = function (e) {
              void 0 === e &&
              (e = ''),
              l(),
              W(0),
              De(e),
              $(!1)
            },
            Ne = function (e) {
              void 0 === e &&
              (e = !0);
              var n,
              t,
              t = (
                t = q === tn.AuthToken ? {
                  ctype: q,
                  cvalue: J,
                  password: ee
                }
                 : q === tn.EmailOtpSessionToken ? {
                  ctype: q,
                  cvalue: te,
                  password: oe
                }
                 : q === tn.Passkey ? {
                  ctype: q,
                  cvalue: le,
                  password: ue
                }
                 : {
                  ctype: Y ? tn.Username : q,
                  cvalue: z,
                  password: G
                },
                _ &&
                x &&
                (t.captchaId = _, t.captchaToken = x),
                B &&
                j &&
                (
                  t.securityQuestionSessionId = B,
                  t.securityQuestionRedemptionToken = j,
                  D(''),
                  F('')
                ),
                !xe ||
                (
                  n = null === He.AccountSwitcherService ||
                  void 0 === He.AccountSwitcherService ? void 0 : He.AccountSwitcherService.getStoredAccountSwitcherBlob()
                ) &&
                (t.accountBlob = n),
                t
              );
              if (N && (t.userId = N), e) {
                if (!z || !G) return void Q(h(on.MessageUsernameAndPasswordRequired));
                $e.eventStreamService.sendEventWithTarget(
                  dt.formInteraction,
                  rn.context.loginPage,
                  {
                    field: rn.field.loginSubmitButtonName,
                    aType: rn.aType.click
                  }
                ),
                pt(On),
                me &&
                (pt(Rn), me = !1)
              }
              $(!0),
              r(t)
            };
            (0, ze.useEffect) (
              function () {
                Nt(
                  void 0,
                  void 0,
                  Promise,
                  function () {
                    var n,
                    t;
                    return Wt(
                      this,
                      function (e) {
                        switch (e.label) {
                          case 0:
                            return [4,
                            Xn('login')];
                          case 1:
                            return (t = e.sent()) &&
                            (
                              ae(null !== (n = t.IsOtpEnabled) && void 0 !== n && n),
                              ye(null !== (t = t.OtpCodeLength) && void 0 !== t ? t : 0)
                            ),
                            [
                              2
                            ]
                        }
                      }
                    )
                  }
                )
              },
              []
            ),
            (0, ze.useEffect) (
              function () {
                try {
                  (
                    0,
                    $e.dataStores.authIntentDataStore.saveGameIntentFromReturnUrl
                  ) ()
                } catch (e) {
                  console.error('intent saving error: ', e)
                }
              },
              []
            ),
            (0, ze.useEffect) (
              function () {
                Nt(
                  void 0,
                  void 0,
                  void 0,
                  function () {
                    var n;
                    return Wt(
                      this,
                      function (e) {
                        switch (e.label) {
                          case 0:
                            return window.PublicKeyCredential &&
                            window.PublicKeyCredential.isConditionalMediationAvailable ? [
                              4,
                              window.PublicKeyCredential.isConditionalMediationAvailable()
                            ] : [
                              3,
                              2
                            ];
                          case 1:
                            return n = e.sent(),
                            pe(Boolean(n)),
                            ot(Boolean(n)),
                            [
                              3,
                              3
                            ];
                          case 2:
                            pe(!1),
                            ot(!1),
                            e.label = 3;
                          case 3:
                            return [2]
                        }
                      }
                    )
                  }
                )
              },
              []
            ),
            (0, ze.useEffect) (
              function () {
                nt() &&
                Nt(
                  void 0,
                  void 0,
                  void 0,
                  function () {
                    var r,
                    o;
                    return Wt(
                      this,
                      function (e) {
                        switch (e.label) {
                          case 0:
                            if (!de) return [2];
                            r = null,
                            e.label = 1;
                          case 1:
                            return e.trys.push([1,
                            3,
                            ,
                            4]),
                            [
                              4,
                              et()
                            ];
                          case 2:
                            return r = e.sent(),
                            [
                              3,
                              4
                            ];
                          case 3:
                            return e.sent(),
                            [
                              2
                            ];
                          case 4:
                            return e.trys.push([4,
                            6,
                            ,
                            7]),
                            [
                              4,
                              function (e, n) {
                                e = $e.fido2Util.convertPublicKeyParametersToStandardBase64(e);
                                return navigator.credentials.get({
                                  publicKey: $e.fido2Util.formatCredentialRequestWeb(JSON.stringify(e)),
                                  mediation: 'conditional',
                                  signal: n
                                })
                              }(r.authenticationOptions, ve.current.signal)
                            ];
                          case 5:
                            return o = e.sent(),
                            o = $e.fido2Util.formatCredentialAuthenticationResponseWeb(o),
                            n = r.sessionId,
                            t = o,
                            H(tn.Passkey),
                            ce(n),
                            se(t),
                            [
                              3,
                              7
                            ];
                          case 6:
                            return r = e.sent(),
                            'AbortError' === (null === (o = r) || void 0 === o ? void 0 : o.name) ? ve.current = new AbortController : console.error(r),
                            [
                              3,
                              7
                            ];
                          case 7:
                            return [2]
                        }
                        var n,
                        t
                      }
                    )
                  }
                )
              },
              [
                fe,
                de
              ]
            ),
            (0, ze.useEffect) (function () {
              ue &&
              le &&
              Ne(!1)
            }, [
              le,
              ue
            ]),
            (0, ze.useEffect) (function () {
              B &&
              j &&
              Ne(!1)
            }, [
              B &&
              j
            ]),
            (0, ze.useEffect) (function () {
              ee &&
              J &&
              Ne(!1)
            }, [
              ee,
              J
            ]),
            (0, ze.useEffect) (function () {
              te &&
              oe &&
              Ne(!1)
            }, [
              te,
              oe
            ]),
            (0, ze.useEffect) (function () {
              Y &&
              Ne(!1)
            }, [
              Y
            ]),
            (0, ze.useEffect) (function () {
              N &&
              Ne(!1)
            }, [
              N
            ]),
            (0, ze.useEffect) (
              function () {
                var e;
                !Ee &&
                Ce &&
                xe &&
                (
                  e = null === (e = null == Ae ? void 0 : Ae.usersAvailableForSwitching) ||
                  void 0 === e ? void 0 : e.map(function (e) {
                    return e.id
                  }).join(','),
                  e = e,
                  $e.eventStreamService.sendEventWithTarget(
                    rn.schematizedEventTypes.authPageLoad,
                    rn.context.accountSwitcherLogin,
                    {
                      state: e,
                      field: rn.field.accountSwitcher
                    }
                  )
                )
              },
              [
                Ae,
                Ee,
                xe,
                Ce
              ]
            ),
            Dt(Ge.authenticatedUser.isAuthenticated && Ce && !xe);
            var We = !Ge.authenticatedUser.isAuthenticated &&
            !(
              null === (We = null == Ae ? void 0 : Ae.usersAvailableForSwitching) ||
              void 0 === We ||
              !We.length
            ) &&
            e &&
            !o;
            return Ee ||
            d ? Ve().createElement(Ke.Loading, null) : Ve().createElement(
              'div',
              {
                id: 'login-base',
                className: 'login-base-container'
              },
              We &&
              Ve().createElement(
                Et,
                {
                  containerId: sn,
                  titleText: h(on.HeadingYouHaveLoggedOut),
                  helpText: h(on.LabelChooseAccountToUse),
                  onAccountSwitched: function () {
                    p(!0),
                    at()
                  },
                  handleAddAccount: function () {
                    Se(!1)
                  },
                  removeInvalidActiveUser: !0,
                  translate: h,
                  loggedInUsers: Ae
                }
              ),
              !We &&
              Ve().createElement(
                'div',
                {
                  className: 'section-content login-section'
                },
                Ve().createElement(
                  'h1',
                  {
                    className: 'login-header'
                  },
                  (
                    e = Ge.authenticatedUser.isAuthenticated,
                    d = h,
                    We = !(
                      null === (We = null == Ae ? void 0 : Ae.usersAvailableForSwitching) ||
                      void 0 === We ||
                      !We.length
                    ),
                    d(We || e ? on.HeadingAddAccount : on.HeadingLoginRoblox)
                  )
                ),
                Ve().createElement(
                  Lt,
                  {
                    captchaId: _,
                    captchaToken: x,
                    credentialValue: z,
                    password: G,
                    isLoading: v,
                    errorMsg: E,
                    translate: h,
                    onFormSubmit: Ne,
                    onCredentialValueChange: function (e) {
                      Q(''),
                      V(e),
                      H(gt(e))
                    },
                    onPasswordChange: function (e) {
                      Q(''),
                      K(e)
                    },
                    isLoginFormDisabled: null !== (E = null == Ae ? void 0 : Ae.isAccountLimitReached) &&
                    void 0 !== E &&
                    E
                  }
                ),
                Ve().createElement(Ut, null),
                Ve().createElement(
                  kt,
                  {
                    onCrossDeviceLoginCodeValidated: function (e) {
                      $(!0),
                      H(tn.AuthToken),
                      X(e.code),
                      ne(e.privateKey)
                    },
                    isOtpLoginEnabled: I,
                    openOtpLoginModal: function () {
                      var e;
                      $e.eventStreamService.sendEventWithTarget(
                        dt.formInteraction,
                        rn.context.loginPage,
                        {
                          field: rn.field.loginOTP,
                          aType: rn.aType.click
                        }
                      ),
                      $e.eventStreamService.sendEventWithTarget(
                        rn.schematizedEventTypes.authButtonClick,
                        rn.context.schematizedLoginForm,
                        {
                          btn: rn.field.OTP
                        }
                      ),
                      He.EmailVerifyCodeModalService &&
                      (
                        e = {
                          containerId: ln,
                          codeLength: ge,
                          onEmailCodeEntered: n,
                          onModalAbandoned: t,
                          enterEmailTitle: h(on.LabelGetOneTimeCode),
                          enterEmailDescription: h(on.DescriptionGetOneTimeCodeHelp),
                          enterCodeTitle: h(on.LabelEnterOneTimeCode),
                          enterCodeDescription: h(on.DescriptionEnterOneTimeCodeHelp),
                          origin: 'login',
                          translate: h,
                          isChangeEmailEnabled: we
                        },
                        He.EmailVerifyCodeModalService.renderEmailVerifyCodeModal(e)
                      )
                    },
                    isOneTimeCodeDesignUpdated: we,
                    translate: h
                  }
                ),
                Ve().createElement('div', {
                  id: 'crossDeviceLoginDisplayCodeModal-container'
                }),
                Ve().createElement('div', {
                  id: ln
                }),
                Ve().createElement('div', {
                  id: 'account-switcher-confirmation-modal-container'
                }),
                Ve().createElement(It, null)
              ),
              g &&
              b &&
              Ve().createElement(
                wt,
                {
                  containerId: un,
                  actionType: He.AccountIntegrityChallengeService.Captcha.ActionType.Login,
                  unifiedCaptchaId: g,
                  dataExchange: b,
                  onCaptchaChallengeCompleted: function (e) {
                    A(e.captchaId),
                    C(e.captchaToken)
                  },
                  onCaptchaChallengeInvalidated: function (e) {
                    var n = function (e) {
                      var n = He.CaptchaConstants.errorCodes,
                      t = n.failedToLoadProviderScript,
                      n = n.failedToVerify,
                      r = Sn,
                      o = _n,
                      i = An;
                      switch (e) {
                        case t:
                          return r;
                        case n:
                          return o;
                        default:
                          return i
                      }
                    }(e.errorCode),
                    e = gt(z),
                    e = h(vt(n, e));
                    Q(e),
                    Me(e)
                  },
                  onCaptchaChallengeAbandoned: function () {
                    Me()
                  },
                  onUnknownError: Pe
                }
              ),
              k &&
              B &&
              Ve().createElement(
                _t,
                {
                  userId: k,
                  sessionId: B,
                  onSecurityQuestionsChallengeCompleted: function (e) {
                    F(e.redemptionToken)
                  },
                  onSecurityQuestionsChallengeInvalidated: function (e) {
                    D(''),
                    F(''),
                    Ne(!1)
                  },
                  onSecurityQuestionsChallengeAbandoned: function (e) {
                    T(''),
                    D(''),
                    Me()
                  },
                  onUnknownError: Pe
                }
              ),
              k &&
              U &&
              Ve().createElement(
                St,
                {
                  userId: k,
                  challengeId: U,
                  on2svChallengeCompleted: function (i) {
                    return Nt(
                      void 0,
                      void 0,
                      void 0,
                      function () {
                        var n,
                        o;
                        return Wt(
                          this,
                          function (e) {
                            switch (e.label) {
                              case 0:
                                return e.trys.push([0,
                                3,
                                ,
                                4]),
                                o = {
                                  challengeId: U,
                                  verificationToken: i.verificationToken,
                                  rememberDevice: i.rememberDevice,
                                  accountBlob: null === He.AccountSwitcherService ||
                                  void 0 === He.AccountSwitcherService ? void 0 : He.AccountSwitcherService.getStoredAccountSwitcherBlob()
                                },
                                [
                                  4,
                                  nn(o)
                                ];
                              case 1:
                                return n = e.sent().authParams,
                                [
                                  4,
                                  (
                                    t = k,
                                    r = n,
                                    ft(
                                      void 0,
                                      void 0,
                                      Promise,
                                      function () {
                                        var n;
                                        return ht(
                                          this,
                                          function (e) {
                                            switch (e.label) {
                                              case 0:
                                                return n = tt('/v3/users/' + t + '/two-step-verification/login'),
                                                n = {
                                                  url: n,
                                                  withCredentials: !0
                                                },
                                                [
                                                  4,
                                                  qe.httpService.post(n, r)
                                                ];
                                              case 1:
                                                return [2,
                                                e.sent().data]
                                            }
                                          }
                                        )
                                      }
                                    )
                                  )
                                ];
                              case 2:
                                return o = e.sent(),
                                n.secureAuthenticationIntent &&
                                pt(Bn),
                                a(o) ? u(o) : (
                                  null !== He.AccountSwitcherService &&
                                  void 0 !== He.AccountSwitcherService &&
                                  He.AccountSwitcherService.storeAccountSwitcherBlob(o.accountBlob || ''),
                                  c()
                                ),
                                [
                                  3,
                                  4
                                ];
                              case 3:
                                return e.sent(),
                                Pe(),
                                [
                                  3,
                                  4
                                ];
                              case 4:
                                return [2]
                            }
                            var t,
                            r
                          }
                        )
                      }
                    )
                  },
                  on2svChallengeInvalidated: function (e) {
                    O(R + 1);
                    var n = h(on.ResponseVerificationError);
                    Q(n),
                    R < Pn ? Ne(!1) : Me(n)
                  },
                  on2svChallengeAbandoned: function (e) {
                    je(),
                    T(''),
                    P(''),
                    Me()
                  },
                  onUnknownError: Pe
                }
              ),
              Ve().createElement(Tt, {
                identityVerificationLoginTicket: m,
                translate: h
              }),
              0 < S.users.length &&
              Ve().createElement(
                At,
                {
                  containerId: cn,
                  users: S.users,
                  invalidUsers: [],
                  onAccountSelection: function (e) {
                    M({
                      users: [],
                      invalidUsers: []
                    }),
                    W(e),
                    e = e,
                    q === tn.EmailOtpSessionToken ? (
                      $e.eventStreamService.sendEventWithTarget(
                        dt.formInteraction,
                        rn.context.disambiguationOTP,
                        {
                          field: rn.field.accountSelection
                        }
                      ),
                      $e.eventStreamService.sendEventWithTarget(
                        rn.schematizedEventTypes.authButtonClick,
                        rn.context.disambigOTP,
                        {
                          btn: rn.btn.select,
                          state: String(e)
                        }
                      )
                    ) : $e.eventStreamService.sendEventWithTarget(dt.formInteraction, '', {
                      field: rn.field.accountSelection
                    })
                  },
                  onAccountSelectorAbandoned: f,
                  titleText: h(on.LabelAccountSelector),
                  helpText: (
                    S = h,
                    q === tn.EmailOtpSessionToken ? S(on.DescriptionAccountSelectorHelp) + ' ' + S(
                      on.DescriptionAccountSelectorOtpTimeWarning,
                      {
                        timeLimitSec: '60'
                      }
                    ) : S(on.DescriptionAccountSelectorHelp)
                  ),
                  translate: h
                }
              ),
              Ve().createElement(
                Rt,
                {
                  origin: Qe.LoginAccountLimit,
                  containerId: fn,
                  handleRedirectHome: function () {
                    p(!0),
                    it(yt())
                  },
                  hasMaxLoggedInAccountsSignupError: L,
                  isAccountLimitReached: Ae.isAccountLimitReached,
                  translate: h,
                  isParentUser: o
                }
              )
            )
          },
          c
        );
        function Pe() {
          var e = J() ||
          Z();
          e ? (
            'react-login-web-app' === e.id &&
            e.classList.add('login-container'),
            (0, n.render) (Ve().createElement(Ue, null), e)
          ) : window.requestAnimationFrame(Pe)
        }(0, qe.ready) (
          function () {
            var e;
            Ge.authenticatedUser &&
            Ge.authenticatedUser.isAuthenticated &&
            Ge.authenticatedUser.isUnder13 ? (
              e = ce(),
              window.location.href = e ||
              He.EnvironmentUrls.websiteUrl + '/home'
            ) : Pe()
          }
        )
      }()
    }();
    //# sourceMappingURL=https://js.rbxcdn.com/ea99ad7c2851af9c48d3ff7c3f2fa4c3-reactLogin.bundle.min.js.map
    /* Bundle detector */
    window.Roblox &&
    window.Roblox.BundleDetector &&
    window.Roblox.BundleDetector.bundleDetected('ReactLogin');
